// app.js — Lua's Books
// All state lives in localStorage under STORAGE_KEY

const STORAGE_KEY = 'lua-books-v1';

const GENRES = ['Contemporary', 'Romance', 'Mystery', 'Fantasy', 'Mythology', 'Historical', 'GraphicNovel', 'SciFi'];
const GENRE_LABELS = {
  Contemporary: 'Contemporary', Romance: 'Romance', Mystery: 'Mystery',
  Fantasy: 'Fantasy', Mythology: 'Mythology', Historical: 'Historical',
  GraphicNovel: 'Graphic Novel', SciFi: 'Sci-Fi'
};
const VIBES = ['Romantic', 'Funny', 'Cozy', 'Dark', 'Adventurous', 'Emotional', 'Heartwarming', 'Thrilling', 'Empowering', 'Quirky', 'Epic'];

// ─── State ────────────────────────────────────────────────────────────────────

let state = {
  ratings: {},       // bookId → 1..5
  shelves: {},       // bookId → 'read' | 'want'
  filters: {
    genres: new Set(),
    vibes: new Set(),
    lgbtqOnly: false,
    hideRead: false,
    showAdult: false,
    search: '',
  },
  sliders: {
    romance:   50,   // 0 = not romantic, 100 = very romantic
    humor:     50,   // 0 = serious, 100 = funny
    adventure: 50,   // 0 = quiet/cozy, 100 = action-packed
    dark:      50,   // 0 = light & cozy, 100 = dark & heavy
  },
  view: 'discover',
  shelfTab: 'read',
};

function loadState() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      const parsed = JSON.parse(saved);
      state.ratings = parsed.ratings || {};
      state.shelves = parsed.shelves || {};
      // restore filter Sets
      if (parsed.filters) {
        state.filters.genres = new Set(parsed.filters.genres || []);
        state.filters.vibes = new Set(parsed.filters.vibes || []);
        state.filters.lgbtqOnly = parsed.filters.lgbtqOnly || false;
        state.filters.hideRead = parsed.filters.hideRead || false;
        state.filters.showAdult = parsed.filters.showAdult || false;
        state.filters.search = parsed.filters.search || '';
      }
      if (parsed.sliders) {
        Object.assign(state.sliders, parsed.sliders);
      }
    }
  } catch (e) { /* ignore */ }
}

function saveState() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({
      ratings: state.ratings,
      shelves: state.shelves,
      filters: {
        genres: [...state.filters.genres],
        vibes: [...state.filters.vibes],
        lgbtqOnly: state.filters.lgbtqOnly,
        hideRead: state.filters.hideRead,
        showAdult: state.filters.showAdult,
        search: state.filters.search,
      },
      sliders: state.sliders,
    }));
  } catch (e) { /* ignore */ }
}

// ─── Recommendation Engine ─────────────────────────────────────────────────────

function buildProfile() {
  const ratedIds = Object.keys(state.ratings);
  if (ratedIds.length === 0) return null;

  const genreData = {};   // genre → { sum, count }
  const vibeData = {};    // vibe  → { sum, count }
  let lgbtqSum = 0, lgbtqCount = 0;

  for (const id of ratedIds) {
    const book = BOOKS.find(b => b.id === id);
    if (!book) continue;
    const rating = state.ratings[id]; // 1–5

    for (const g of book.genres) {
      if (!genreData[g]) genreData[g] = { sum: 0, count: 0 };
      genreData[g].sum += rating;
      genreData[g].count++;
    }
    for (const v of book.vibes) {
      if (!vibeData[v]) vibeData[v] = { sum: 0, count: 0 };
      vibeData[v].sum += rating;
      vibeData[v].count++;
    }
    if (book.lgbtq) {
      lgbtqSum += rating;
      lgbtqCount++;
    }
  }

  const profile = {
    genres: {},
    vibes: {},
    lgbtqAvg: lgbtqCount > 0 ? lgbtqSum / lgbtqCount : null,
    ratedCount: ratedIds.length,
  };

  for (const [g, d] of Object.entries(genreData)) profile.genres[g] = d.sum / d.count;
  for (const [v, d] of Object.entries(vibeData))  profile.vibes[v]  = d.sum / d.count;

  return profile;
}

// Maps slider keys → the vibes/genres they represent
const SLIDER_MAPPINGS = [
  { key: 'romance',   vibes: ['Romantic'],                         genres: ['Romance'], w: 2.5 },
  { key: 'humor',     vibes: ['Funny', 'Quirky'],                  genres: [],          w: 1.5 },
  { key: 'adventure', vibes: ['Adventurous', 'Thrilling', 'Epic'], genres: [],          w: 1.5 },
  { key: 'dark',      vibes: ['Dark', 'Emotional'],                genres: [],          w: 1.0 },
];

function scoreBook(book, profile) {
  // Returns a score (higher = better match).
  // Sliders always contribute; learned profile stacks on top.
  let score = 0;
  let weight = 0;

  // ── Slider-based baseline ──────────────────────────────────────────────────
  for (const { key, vibes, genres, w } of SLIDER_MAPPINGS) {
    const pref = state.sliders[key] / 100;           // 0–1
    const bookHas = book.vibes.some(v => vibes.includes(v))
                 || book.genres.some(g => genres.includes(g));
    // Match: book aligns with pref strength. Mismatch: slight inverse signal.
    score  += bookHas ? (pref * 5 * w) : ((1 - pref) * 5 * 0.25 * w);
    weight += w;
  }

  // ── Learned profile (layered on when user has rated books) ─────────────────
  if (profile) {
    for (const g of book.genres) {
      if (profile.genres[g] !== undefined) {
        score  += profile.genres[g] * 2.5;
        weight += 2.5;
      }
    }
    for (const v of book.vibes) {
      if (profile.vibes[v] !== undefined) {
        score  += profile.vibes[v] * 1.0;
        weight += 1.0;
      }
    }
    if (book.lgbtq && profile.lgbtqAvg !== null) {
      score  += profile.lgbtqAvg * 1.5;
      weight += 1.5;
    }
  }

  const normalized = weight > 0 ? score / weight : 2.5;
  const recencyBonus = book.year >= 2020 ? 0.15 : book.year >= 2015 ? 0.05 : 0;
  return normalized + recencyBonus;
}

function getWhyText(book, profile) {
  const reasons = [];

  // Learned profile reasons
  if (profile) {
    const topGenres = book.genres.filter(g => profile.genres[g] >= 4).map(g => GENRE_LABELS[g] || g);
    if (topGenres.length) reasons.push(`you love ${topGenres.join(' & ')}`);

    const topVibes = book.vibes.filter(v => profile.vibes[v] >= 4).slice(0, 2).map(v => v.toLowerCase());
    if (topVibes.length) reasons.push(`${topVibes.join(', ')} reads`);

    if (book.lgbtq && profile.lgbtqAvg >= 4) reasons.push('LGBTQ+ rep');
  }

  // Slider reasons (only add if no profile reason yet)
  if (reasons.length === 0) {
    for (const { key, vibes, genres } of SLIDER_MAPPINGS) {
      if (state.sliders[key] >= 70) {
        const bookHas = book.vibes.some(v => vibes.includes(v)) || book.genres.some(g => genres.includes(g));
        if (bookHas) {
          const labels = { romance: 'romantic', humor: 'funny', adventure: 'adventurous', dark: 'emotional' };
          reasons.push(labels[key]);
        }
      }
    }
    if (reasons.length) return `Great ${reasons.join(' & ')} pick`;
  }

  return reasons.length ? `Because: ${reasons.join(' · ')}` : '';
}

// ─── Filtering & Sorting ────────────────────────────────────────────────────────

function applyFilters(books, options = {}) {
  const { forYou = false, seriesFirst = true } = options;
  const f = state.filters;

  let filtered = books.filter(book => {
    // Adult content gate
    if (book.content === 'adult' && !f.showAdult) return false;

    // For You: only unread books
    if (forYou && state.shelves[book.id] === 'read') return false;

    // Hide read books
    if (f.hideRead && state.shelves[book.id] === 'read') return false;

    // LGBTQ filter
    if (f.lgbtqOnly && !book.lgbtq) return false;

    // Genre filter (OR logic across genres, AND with other filters)
    if (f.genres.size > 0) {
      const match = book.genres.some(g => f.genres.has(g));
      if (!match) return false;
    }

    // Vibe filter
    if (f.vibes.size > 0) {
      const match = book.vibes.some(v => f.vibes.has(v));
      if (!match) return false;
    }

    // Text search
    if (f.search) {
      const q = f.search.toLowerCase();
      const inTitle = book.title.toLowerCase().includes(q);
      const inAuthor = book.author.toLowerCase().includes(q);
      const inSeries = book.series && book.series.toLowerCase().includes(q);
      if (!inTitle && !inAuthor && !inSeries) return false;
    }

    return true;
  });

  // Show only the first book in each series (keeps discover grid clean)
  if (seriesFirst) {
    const seenSeries = new Set();
    filtered = filtered.filter(book => {
      if (!book.series) return true;
      if (seenSeries.has(book.series)) return false;
      seenSeries.add(book.series);
      return true;
    });
  }

  return filtered;
}

function sortBooks(books, profile) {
  if (profile) {
    // Recommendation score descending
    return [...books].sort((a, b) => scoreBook(b, profile) - scoreBook(a, profile));
  }
  // Default: newest first, with slight randomness on same year
  return [...books].sort((a, b) => b.year - a.year);
}

// ─── Cover URL ─────────────────────────────────────────────────────────────────

function coverUrl(isbn) {
  return `https://covers.openlibrary.org/b/isbn/${isbn}-M.jpg`;
}

function coverFallbackColor(id) {
  // Deterministic pastel color from id
  let hash = 0;
  for (const c of id) hash = ((hash << 5) - hash) + c.charCodeAt(0);
  const hue = Math.abs(hash) % 360;
  return `hsl(${hue}, 45%, 72%)`;
}

// ─── Card Rendering ────────────────────────────────────────────────────────────

function renderCard(book, compact = false) {
  const shelf = state.shelves[book.id] || null;
  const rating = state.ratings[book.id] || 0;
  const fallbackBg = coverFallbackColor(book.id);
  const fallbackInitial = book.title[0].toUpperCase();

  const genreTags = book.genres
    .map(g => `<span class="tag genre-${g.toLowerCase()}">${GENRE_LABELS[g] || g}</span>`)
    .join('');

  const stars = [1,2,3,4,5].map(n => `
    <button class="star ${n <= rating ? 'filled' : ''}"
      onclick="handleRating('${book.id}', ${n})"
      title="${n} star${n > 1 ? 's' : ''}"
      aria-label="Rate ${n} star${n > 1 ? 's' : ''}">★</button>
  `).join('');

  const lgbtqBadge = book.lgbtq
    ? `<span class="lgbtq-badge" title="LGBTQ+ representation">🏳️‍🌈</span>` : '';

  const adultBadge = book.content === 'adult'
    ? `<span class="adult-badge" title="Adult book">Adult</span>` : '';

  const seriesTag = book.series
    ? `<span class="series-tag">📚 ${book.series}</span>` : '';

  return `
    <article class="book-card ${compact ? 'compact' : ''} ${shelf === 'read' ? 'is-read' : ''}" data-id="${book.id}">
      <div class="book-cover-wrap">
        <img
          class="book-cover"
          src="${book.isbn ? coverUrl(book.isbn) : ''}"
          alt="Cover of ${book.title}"
          onload="if(this.naturalWidth<2||this.naturalHeight<2){this.style.display='none';this.nextElementSibling.style.display='flex'}"
          onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"
        >
        <div class="cover-fallback" style="background:${fallbackBg};display:none">
          <span>${fallbackInitial}</span>
        </div>
        <div class="cover-badges">
          ${lgbtqBadge}${adultBadge}
        </div>
        ${shelf === 'read' ? '<div class="read-overlay"><span>✓ Read</span></div>' : ''}
      </div>

      <div class="book-info">
        <h3 class="book-title">${book.title}</h3>
        <p class="book-author">${book.author}</p>
        <p class="book-meta">${book.year} · ${book.pages} pages${book.series ? '' : ' · Standalone'}</p>
        ${seriesTag ? `<p class="book-series">${seriesTag}</p>` : ''}
        <div class="book-tags">${genreTags}</div>
        ${!compact ? `
          <p class="book-tagline collapsed" id="tagline-${book.id}">${book.tagline}</p>
          <button class="tagline-toggle" onclick="toggleTagline('${book.id}', this)">more</button>
        ` : ''}

        <div class="book-actions">
          <div class="star-row" title="Rate this book">${stars}</div>
          <div class="shelf-row">
            <button class="shelf-btn ${shelf === 'read' ? 'active' : ''}"
              onclick="handleShelf('${book.id}', 'read')"
              title="Mark as read">
              ${shelf === 'read' ? '✓ Read' : 'Read'}
            </button>
            <button class="shelf-btn want ${shelf === 'want' ? 'active' : ''}"
              onclick="handleShelf('${book.id}', 'want')"
              title="Add to want-to-read">
              ${shelf === 'want' ? '♥ Saved' : 'Want to Read'}
            </button>
          </div>
        </div>
      </div>
    </article>
  `;
}

// ─── For You Section ──────────────────────────────────────────────────────────

function renderForYou() {
  const profile = buildProfile();
  const section = document.getElementById('for-you-section');

  const candidates = applyFilters(BOOKS, { forYou: true });
  const sorted = sortBooks(candidates, profile);
  const top = sorted.slice(0, 5);

  if (top.length === 0) {
    section.classList.add('hidden');
    return;
  }

  section.classList.remove('hidden');
  const ratedCount = profile ? profile.ratedCount : 0;
  document.getElementById('for-you-desc').textContent = ratedCount > 0
    ? `Based on your mood sliders + ${ratedCount} rated book${ratedCount > 1 ? 's' : ''}`
    : 'Based on your mood — rate books to make this smarter';

  const container = document.getElementById('for-you-cards');
  container.innerHTML = top.map(book => {
    const why = getWhyText(book, profile);
    return `
      <div class="for-you-card">
        ${renderCard(book, true)}
        ${why ? `<p class="why-text">${why}</p>` : ''}
      </div>
    `;
  }).join('');
}

// ─── Main Grid ────────────────────────────────────────────────────────────────

function renderGrid() {
  const profile = buildProfile();
  const filtered = applyFilters(BOOKS);
  const sorted = sortBooks(filtered, profile);

  document.getElementById('results-meta').textContent =
    `${sorted.length} book${sorted.length !== 1 ? 's' : ''}${profile ? ' · sorted by match' : ''}`;

  document.getElementById('book-grid').innerHTML = sorted.map(b => renderCard(b)).join('');
}

// ─── My Books Grid ────────────────────────────────────────────────────────────

function renderMyBooks() {
  const tab = state.shelfTab;
  const readBooks = BOOKS.filter(b => state.shelves[b.id] === 'read');
  const wantBooks = BOOKS.filter(b => state.shelves[b.id] === 'want');

  document.getElementById('read-count').textContent = readBooks.length;
  document.getElementById('want-count').textContent = wantBooks.length;

  const shelfCount = readBooks.length + wantBooks.length;
  const countEl = document.getElementById('shelf-count');
  if (shelfCount > 0) {
    countEl.textContent = shelfCount;
    countEl.style.display = 'inline';
  } else {
    countEl.style.display = 'none';
  }

  const books = tab === 'read' ? readBooks : wantBooks;
  const grid = document.getElementById('mybooks-grid');
  const empty = document.getElementById('mybooks-empty');

  if (books.length === 0) {
    grid.innerHTML = '';
    empty.classList.remove('hidden');
    document.getElementById('mybooks-empty-text').textContent =
      tab === 'read'
        ? "No books marked as read yet — go find something! ✨"
        : "Nothing saved to read yet — explore and save some books!";
  } else {
    empty.classList.add('hidden');
    grid.innerHTML = books.map(b => renderCard(b)).join('');
  }
}

// ─── Filter Chips ─────────────────────────────────────────────────────────────

function renderChips() {
  const genreContainer = document.getElementById('genre-chips');
  const vibeContainer = document.getElementById('vibe-chips');

  genreContainer.innerHTML = GENRES.map(g => `
    <button class="chip ${state.filters.genres.has(g) ? 'active' : ''} genre-chip-${g.toLowerCase()}"
      onclick="handleGenreChip('${g}')">
      ${GENRE_LABELS[g] || g}
    </button>
  `).join('');

  vibeContainer.innerHTML = VIBES.map(v => `
    <button class="chip ${state.filters.vibes.has(v) ? 'active' : ''}"
      onclick="handleVibeChip('${v}')">
      ${v}
    </button>
  `).join('');

  renderActiveFilterTags();
}

function renderActiveFilterTags() {
  const container = document.getElementById('active-filters');
  const tagsEl = document.getElementById('active-filter-tags');
  const tags = [];

  for (const g of state.filters.genres) {
    tags.push(`<span class="active-tag" onclick="handleGenreChip('${g}')">
      ${GENRE_LABELS[g] || g} ×</span>`);
  }
  for (const v of state.filters.vibes) {
    tags.push(`<span class="active-tag" onclick="handleVibeChip('${v}')">${v} ×</span>`);
  }
  if (state.filters.lgbtqOnly) {
    tags.push(`<span class="active-tag" onclick="document.getElementById('lgbtq-toggle').click()">LGBTQ+ ×</span>`);
  }

  container.style.display = tags.length ? 'flex' : 'none';
  tagsEl.innerHTML = tags.join('');
}

// ─── Event Handlers ────────────────────────────────────────────────────────────

function handleRating(bookId, newRating) {
  const current = state.ratings[bookId];
  if (current === newRating) {
    // Click same star again → clear rating
    delete state.ratings[bookId];
    showToast('Rating removed');
  } else {
    state.ratings[bookId] = newRating;
    const labels = ['', 'Not for me', 'It was okay', 'Liked it', 'Really liked it', 'Loved it ✨'];
    showToast(labels[newRating] || `${newRating} stars`);
  }
  saveState();
  rerenderAll();
}

function handleShelf(bookId, shelf) {
  const current = state.shelves[bookId];
  if (current === shelf) {
    // Toggle off
    delete state.shelves[bookId];
    showToast(shelf === 'read' ? 'Removed from Read' : 'Removed from Want to Read');
  } else {
    state.shelves[bookId] = shelf;
    showToast(shelf === 'read' ? 'Marked as read ✓' : 'Saved to Want to Read ♥');
  }
  saveState();
  rerenderAll();
}

function handleSearch(value) {
  state.filters.search = value;
  saveState();
  renderGrid();
  renderForYou();
}

function handleSlider(key, value) {
  state.sliders[key] = parseInt(value);
  saveState();
  renderForYou();
  renderGrid();
}

function handleGenreChip(genre) {
  if (state.filters.genres.has(genre)) {
    state.filters.genres.delete(genre);
  } else {
    state.filters.genres.add(genre);
  }
  saveState();
  renderChips();
  renderGrid();
}

function handleVibeChip(vibe) {
  if (state.filters.vibes.has(vibe)) {
    state.filters.vibes.delete(vibe);
  } else {
    state.filters.vibes.add(vibe);
  }
  saveState();
  renderChips();
  renderGrid();
}

function handleLgbtqToggle(checked) {
  state.filters.lgbtqOnly = checked;
  saveState();
  renderChips();
  renderGrid();
}

function handleAdultToggle(checked) {
  state.filters.showAdult = checked;
  saveState();
  renderGrid();
  renderForYou();
}

function handleHideReadToggle(checked) {
  state.filters.hideRead = checked;
  saveState();
  renderGrid();
}

function clearAllFilters() {
  state.filters.genres.clear();
  state.filters.vibes.clear();
  state.filters.lgbtqOnly = false;
  state.filters.search = '';
  document.getElementById('search-input').value = '';
  document.getElementById('lgbtq-toggle').checked = false;
  saveState();
  renderChips();
  renderGrid();
}

// ─── View Switching ────────────────────────────────────────────────────────────

function setView(view) {
  state.view = view;

  document.getElementById('discover-view').classList.toggle('hidden', view !== 'discover');
  document.getElementById('mybooks-view').classList.toggle('hidden', view !== 'mybooks');
  document.getElementById('for-you-section').classList.toggle(
    'hidden', view !== 'discover' || !hasEnoughRatings()
  );

  document.getElementById('btn-discover').classList.toggle('active', view === 'discover');
  document.getElementById('btn-mybooks').classList.toggle('active', view === 'mybooks');

  if (view === 'mybooks') renderMyBooks();
}

function setShelfTab(tab) {
  state.shelfTab = tab;
  document.getElementById('tab-read').classList.toggle('active', tab === 'read');
  document.getElementById('tab-want').classList.toggle('active', tab === 'want');
  renderMyBooks();
}

function hasEnoughRatings() {
  return Object.keys(state.ratings).length >= 2;
}

// ─── Tagline Toggle ───────────────────────────────────────────────────────────

function toggleTagline(bookId, btn) {
  const el = document.getElementById(`tagline-${bookId}`);
  if (el.classList.contains('collapsed')) {
    el.classList.remove('collapsed');
    btn.textContent = 'less';
  } else {
    el.classList.add('collapsed');
    btn.textContent = 'more';
  }
}

// ─── Toast ────────────────────────────────────────────────────────────────────

let toastTimer;
function showToast(msg) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.remove('hidden');
  el.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    el.classList.remove('show');
    setTimeout(() => el.classList.add('hidden'), 300);
  }, 1800);
}

// ─── Full Re-render ────────────────────────────────────────────────────────────

function rerenderAll() {
  if (state.view === 'discover') {
    renderGrid();
    renderForYou();
  } else {
    renderMyBooks();
    renderForYou();
  }

  // Update shelf count badge
  const total = Object.keys(state.shelves).length;
  const badge = document.getElementById('shelf-count');
  if (total > 0) {
    badge.textContent = total;
    badge.style.display = 'inline';
  } else {
    badge.style.display = 'none';
  }
}

// ─── Init ─────────────────────────────────────────────────────────────────────

function init() {
  loadState();

  // Restore toggle states
  document.getElementById('lgbtq-toggle').checked = state.filters.lgbtqOnly;
  document.getElementById('adult-toggle').checked = state.filters.showAdult;
  document.getElementById('hide-read-toggle').checked = state.filters.hideRead;
  document.getElementById('search-input').value = state.filters.search;

  // Restore slider positions
  for (const key of Object.keys(state.sliders)) {
    const el = document.getElementById(`slider-${key}`);
    if (el) el.value = state.sliders[key];
  }

  renderChips();
  renderGrid();
  renderForYou();
  rerenderAll();
}

init();
