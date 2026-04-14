// books.js — Lua's book database
// ~100 books curated for: romance, LGBTQ+ romance, mystery, mythology, fantasy, graphic novels, historical
// To add books: paste new entries in the correct section. ISBN-13 preferred for cover images.

const BOOKS = [

  // ── LGBTQ+ CONTEMPORARY ─────────────────────────────────────────────────────

  {
    id: "simon-vs",
    title: "Simon vs. the Homo Sapiens Agenda",
    author: "Becky Albertalli",
    year: 2015, pages: 303, isbn: "9780062348678",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Funny", "Heartwarming", "Cozy"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Simon is gay and has been keeping it secret — then a classmate finds his anonymous emails and uses them as blackmail."
  },
  {
    id: "leah-on-the-offbeat",
    title: "Leah on the Offbeat",
    author: "Becky Albertalli",
    year: 2018, pages: 352, isbn: "9780062643179",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Funny", "Emotional", "Heartwarming"],
    lgbtq: true, series: "Creekwood", content: "ya",
    tagline: "Simon's friend Leah has a secret crush and a lot of feelings she doesn't know what to do with — senior year is about to get messy."
  },
  {
    id: "upside-of-unrequited",
    title: "The Upside of Unrequited",
    author: "Becky Albertalli",
    year: 2017, pages: 352, isbn: "9780062348715",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Funny", "Cozy", "Heartwarming"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Molly has had 26 crushes but never acted on one — until her twin sister falls for someone and Molly suddenly finds herself wanting to be brave."
  },
  {
    id: "what-if-its-us",
    title: "What If It's Us",
    author: "Becky Albertalli & Adam Silvera",
    year: 2018, pages: 448, isbn: "9780062795243",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Funny", "Emotional", "Heartwarming"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Arthur and Ben meet by chance at a New York post office — and spend the rest of the summer trying to meet again."
  },
  {
    id: "heres-to-us",
    title: "Here's to Us",
    author: "Becky Albertalli & Adam Silvera",
    year: 2022, pages: 390, isbn: "9780063039353",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Funny", "Emotional", "Heartwarming"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Two years after What If It's Us, Arthur and Ben have broken up — but a surprise reunion forces them to figure out what they really want."
  },
  {
    id: "they-both-die",
    title: "They Both Die at the End",
    author: "Adam Silvera",
    year: 2017, pages: 368, isbn: "9780062457790",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Emotional", "Dark", "Heartwarming"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Mateo and Rufus are told today is their last day alive. They meet on an app for people in the same situation — and fall in love."
  },
  {
    id: "history-is-all",
    title: "History Is All You Left Me",
    author: "Adam Silvera",
    year: 2017, pages: 293, isbn: "9781616956929",
    genres: ["Contemporary", "Romance"],
    vibes: ["Emotional", "Dark", "Romantic"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Griffin's ex-boyfriend died, and now he's getting to know the new boyfriend Griffin never knew about — grief is complicated."
  },
  {
    id: "aristotle-and-dante-1",
    title: "Aristotle and Dante Discover the Secrets of the Universe",
    author: "Benjamin Alire Sáenz",
    year: 2012, pages: 359, isbn: "9781442408937",
    genres: ["Contemporary", "Romance"],
    vibes: ["Emotional", "Romantic", "Cozy", "Heartwarming"],
    lgbtq: true, series: "Aristotle and Dante", content: "ya",
    tagline: "Two boys in 1980s El Paso find an unexpected friendship — and something deeper they're both afraid to name."
  },
  {
    id: "aristotle-and-dante-2",
    title: "Aristotle and Dante Dive into the Waters of the World",
    author: "Benjamin Alire Sáenz",
    year: 2021, pages: 384, isbn: "9781534470477",
    genres: ["Contemporary", "Romance"],
    vibes: ["Emotional", "Romantic", "Cozy", "Heartwarming"],
    lgbtq: true, series: "Aristotle and Dante", content: "ya",
    tagline: "The beautiful sequel — Aristotle and Dante finally have each other, but the world in 1988 doesn't make loving each other easy."
  },
  {
    id: "felix-ever-after",
    title: "Felix Ever After",
    author: "Kacen Callender",
    year: 2020, pages: 368, isbn: "9780062820259",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Emotional", "Empowering", "Funny"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Felix, a trans Black teen, falls into an unexpected enemies-to-lovers situation — and starts questioning everything he thought he knew about love and identity."
  },
  {
    id: "i-kissed-shara-wheeler",
    title: "I Kissed Shara Wheeler",
    author: "Casey McQuiston",
    year: 2022, pages: 384, isbn: "9781250244963",
    genres: ["Contemporary", "Romance", "Mystery"],
    vibes: ["Romantic", "Funny", "Thrilling", "Quirky"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Chloe is in a fierce academic rivalry with Shara Wheeler — and then Shara kisses her and disappears, leaving behind a trail of cryptic clues."
  },
  {
    id: "radio-silence",
    title: "Radio Silence",
    author: "Alice Oseman",
    year: 2016, pages: 416, isbn: "9780008244163",
    genres: ["Contemporary"],
    vibes: ["Emotional", "Cozy", "Heartwarming", "Quirky"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Frances is the perfect student on paper, but secretly obsessed with a mysterious podcast — and the boy who makes it might be sitting next to her."
  },
  {
    id: "loveless",
    title: "Loveless",
    author: "Alice Oseman",
    year: 2020, pages: 400, isbn: "9780008244170",
    genres: ["Contemporary"],
    vibes: ["Emotional", "Cozy", "Heartwarming", "Funny"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Georgia starts university expecting to find romance like in every book she's loved — and slowly discovers she might be aromantic and asexual."
  },
  {
    id: "cemetery-boys",
    title: "Cemetery Boys",
    author: "Aiden Thomas",
    year: 2020, pages: 336, isbn: "9781250250469",
    genres: ["Fantasy", "Romance", "Mystery"],
    vibes: ["Romantic", "Funny", "Quirky", "Thrilling"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Yadriel is trying to prove he's a real brujo by summoning a dead classmate's ghost — except he accidentally summons the wrong ghost, and the ghost refuses to leave."
  },
  {
    id: "iron-widow",
    title: "Iron Widow",
    author: "Xiran Jay Zhao",
    year: 2021, pages: 390, isbn: "9780735269934",
    genres: ["Fantasy", "SciFi"],
    vibes: ["Empowering", "Dark", "Adventurous", "Thrilling"],
    lgbtq: true, series: "Iron Widow", content: "ya",
    tagline: "In a mecha-filled reimagining of ancient China, Wu Zetian becomes the most terrifying weapon her civilization has ever produced."
  },
  {
    id: "one-last-stop",
    title: "One Last Stop",
    author: "Casey McQuiston",
    year: 2021, pages: 336, isbn: "9781250244949",
    genres: ["Contemporary", "Romance", "Fantasy"],
    vibes: ["Romantic", "Funny", "Quirky", "Heartwarming"],
    lgbtq: true, series: null, content: "adult",
    tagline: "August meets a mysterious girl stuck in time on the New York subway and falls hard — but figuring out how to free her is another matter."
  },

  // ── GRAPHIC NOVELS ───────────────────────────────────────────────────────────

  {
    id: "heartstopper-1",
    title: "Heartstopper: Volume One",
    author: "Alice Oseman",
    year: 2019, pages: 304, isbn: "9781338617566",
    genres: ["GraphicNovel", "Contemporary", "Romance"],
    vibes: ["Romantic", "Cozy", "Heartwarming", "Funny"],
    lgbtq: true, series: "Heartstopper", content: "ya",
    tagline: "Charlie and Nick end up sitting next to each other in form — and something about their friendship keeps growing into something more."
  },
  {
    id: "heartstopper-2",
    title: "Heartstopper: Volume Two",
    author: "Alice Oseman",
    year: 2019, pages: 304, isbn: "9781338617573",
    genres: ["GraphicNovel", "Contemporary", "Romance"],
    vibes: ["Romantic", "Cozy", "Heartwarming", "Emotional"],
    lgbtq: true, series: "Heartstopper", content: "ya",
    tagline: "Nick and Charlie's relationship keeps growing — but Nick hasn't come out yet, and Paris might be the place where everything changes."
  },
  {
    id: "heartstopper-3",
    title: "Heartstopper: Volume Three",
    author: "Alice Oseman",
    year: 2020, pages: 376, isbn: "9781338617580",
    genres: ["GraphicNovel", "Contemporary", "Romance"],
    vibes: ["Romantic", "Emotional", "Heartwarming", "Dark"],
    lgbtq: true, series: "Heartstopper", content: "ya",
    tagline: "Nick and Charlie navigate their first real relationship while Charlie struggles with things he hasn't told anyone yet."
  },
  {
    id: "heartstopper-4",
    title: "Heartstopper: Volume Four",
    author: "Alice Oseman",
    year: 2021, pages: 368, isbn: "9781338617597",
    genres: ["GraphicNovel", "Contemporary", "Romance"],
    vibes: ["Romantic", "Emotional", "Heartwarming", "Dark"],
    lgbtq: true, series: "Heartstopper", content: "ya",
    tagline: "Charlie's mental health reaches a crisis point — and Nick is determined to be there for him no matter what."
  },
  {
    id: "lore-olympus-1",
    title: "Lore Olympus: Volume One",
    author: "Rachel Smythe",
    year: 2021, pages: 304, isbn: "9780593090374",
    genres: ["GraphicNovel", "Mythology", "Romance"],
    vibes: ["Romantic", "Emotional", "Quirky", "Dark"],
    lgbtq: false, series: "Lore Olympus", content: "ya",
    tagline: "Persephone and Hades meet at a party and neither of them can stop thinking about the other — a lush, modern retelling of the Greek myth."
  },
  {
    id: "lore-olympus-2",
    title: "Lore Olympus: Volume Two",
    author: "Rachel Smythe",
    year: 2021, pages: 304, isbn: "9780593090381",
    genres: ["GraphicNovel", "Mythology", "Romance"],
    vibes: ["Romantic", "Emotional", "Quirky", "Dark"],
    lgbtq: false, series: "Lore Olympus", content: "ya",
    tagline: "The story deepens as Persephone and Hades try to navigate their feelings and the scheming of the gods around them."
  },
  {
    id: "nimona",
    title: "Nimona",
    author: "N.D. Stevenson",
    year: 2015, pages: 256, isbn: "9780062278227",
    genres: ["GraphicNovel", "Fantasy"],
    vibes: ["Funny", "Adventurous", "Emotional", "Quirky"],
    lgbtq: true, series: null, content: "ya",
    tagline: "A shapeshifting sidekick named Nimona joins a villain and turns everything upside down — funny, heartbreaking, and impossible to put down."
  },
  {
    id: "check-please-1",
    title: "Check, Please! Book 1: #Hockey",
    author: "Ngozi Ukazu",
    year: 2018, pages: 304, isbn: "9781250177957",
    genres: ["GraphicNovel", "Contemporary", "Romance"],
    vibes: ["Funny", "Heartwarming", "Romantic", "Cozy"],
    lgbtq: true, series: "Check, Please!", content: "ya",
    tagline: "A vlogger/figure skater joins a college hockey team and develops a massive crush on the grumpy captain who everyone else seems to hate."
  },
  {
    id: "drama",
    title: "Drama",
    author: "Raina Telgemeier",
    year: 2012, pages: 240, isbn: "9780545326988",
    genres: ["GraphicNovel", "Contemporary", "Romance"],
    vibes: ["Funny", "Heartwarming", "Romantic", "Cozy"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Callie is the set designer for her middle school musical — and the chaos backstage turns out to involve a lot more drama than the play itself."
  },
  {
    id: "smile",
    title: "Smile",
    author: "Raina Telgemeier",
    year: 2010, pages: 224, isbn: "9780545132053",
    genres: ["GraphicNovel", "Contemporary"],
    vibes: ["Funny", "Cozy", "Heartwarming", "Emotional"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Raina knocks out her two front teeth in sixth grade — a true story about surviving braces, middle school, and growing up."
  },
  {
    id: "guts",
    title: "Guts",
    author: "Raina Telgemeier",
    year: 2019, pages: 224, isbn: "9780545852517",
    genres: ["GraphicNovel", "Contemporary"],
    vibes: ["Emotional", "Cozy", "Heartwarming"],
    lgbtq: false, series: null, content: "ya",
    tagline: "A graphic memoir about anxiety, stomach aches, and the messy process of figuring out what's actually wrong."
  },
  {
    id: "pumpkinheads",
    title: "Pumpkinheads",
    author: "Rainbow Rowell & Faith Erin Hicks",
    year: 2019, pages: 224, isbn: "9781626726971",
    genres: ["GraphicNovel", "Contemporary", "Romance"],
    vibes: ["Romantic", "Cozy", "Funny", "Heartwarming"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Josie and Deja work at a pumpkin patch every fall — this is their last season together, and Josie is determined to finally talk to her crush."
  },
  {
    id: "laura-dean",
    title: "Laura Dean Keeps Breaking Up with Me",
    author: "Mariko Tamaki & Rosemary Valero-O'Connell",
    year: 2019, pages: 208, isbn: "9781596439238",
    genres: ["GraphicNovel", "Contemporary", "Romance"],
    vibes: ["Romantic", "Emotional", "Dark", "Empowering"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Freddy keeps getting back together with her charismatic girlfriend Laura Dean, even though everyone can see it's hurting her."
  },
  {
    id: "this-one-summer",
    title: "This One Summer",
    author: "Mariko Tamaki & Jillian Tamaki",
    year: 2014, pages: 320, isbn: "9781250060792",
    genres: ["GraphicNovel", "Contemporary"],
    vibes: ["Emotional", "Dark", "Cozy"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Two girls spend their summer at a lake town — and one summer changes something fundamental about how they see the world."
  },
  {
    id: "real-friends",
    title: "Real Friends",
    author: "Shannon Hale & LeUyen Pham",
    year: 2017, pages: 224, isbn: "9781596439795",
    genres: ["GraphicNovel", "Contemporary"],
    vibes: ["Emotional", "Heartwarming", "Cozy"],
    lgbtq: false, series: "Real Friends", content: "ya",
    tagline: "A true story about the anxiety of fitting in, frenemies, and finding the friends who actually get you."
  },

  // ── MYSTERY & THRILLER ───────────────────────────────────────────────────────

  {
    id: "gggatm",
    title: "A Good Girl's Guide to Murder",
    author: "Holly Jackson",
    year: 2019, pages: 400, isbn: "9781984896360",
    genres: ["Mystery", "Contemporary"],
    vibes: ["Thrilling", "Empowering", "Dark", "Adventurous"],
    lgbtq: false, series: "A Good Girl's Guide to Murder", content: "ya",
    tagline: "Five years ago a girl went missing and a boy was blamed. Pippa doesn't think he did it — and her school project is about to become something much more dangerous."
  },
  {
    id: "good-girl-bad-blood",
    title: "Good Girl, Bad Blood",
    author: "Holly Jackson",
    year: 2020, pages: 400, isbn: "9781984896377",
    genres: ["Mystery", "Contemporary"],
    vibes: ["Thrilling", "Empowering", "Dark", "Adventurous"],
    lgbtq: false, series: "A Good Girl's Guide to Murder", content: "ya",
    tagline: "Pippa promised she was done investigating — but when a friend goes missing and the police don't believe her, she can't let it go."
  },
  {
    id: "as-good-as-dead",
    title: "As Good As Dead",
    author: "Holly Jackson",
    year: 2021, pages: 480, isbn: "9781984896384",
    genres: ["Mystery", "Contemporary"],
    vibes: ["Thrilling", "Dark", "Adventurous", "Empowering"],
    lgbtq: false, series: "A Good Girl's Guide to Murder", content: "ya",
    tagline: "The final Pippa book — and it goes to places even darker than the first two. Don't read spoilers."
  },
  {
    id: "five-survive",
    title: "Five Survive",
    author: "Holly Jackson",
    year: 2022, pages: 384, isbn: "9780593523438",
    genres: ["Mystery", "Contemporary"],
    vibes: ["Thrilling", "Dark", "Adventurous"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Six friends on a road trip, an RV that breaks down in the middle of nowhere, and a sniper who is picking them off. One of them is the target."
  },
  {
    id: "inheritance-games-1",
    title: "The Inheritance Games",
    author: "Jennifer Lynn Barnes",
    year: 2020, pages: 384, isbn: "9781368052405",
    genres: ["Mystery", "Contemporary", "Romance"],
    vibes: ["Thrilling", "Romantic", "Adventurous", "Quirky"],
    lgbtq: false, series: "The Inheritance Games", content: "ya",
    tagline: "A dying billionaire leaves his entire fortune to Avery — a girl he's never met. To keep it, she has to live with his four grandsons and solve his puzzles."
  },
  {
    id: "hawthorne-legacy",
    title: "The Hawthorne Legacy",
    author: "Jennifer Lynn Barnes",
    year: 2021, pages: 416, isbn: "9781368065276",
    genres: ["Mystery", "Contemporary", "Romance"],
    vibes: ["Thrilling", "Romantic", "Adventurous"],
    lgbtq: false, series: "The Inheritance Games", content: "ya",
    tagline: "Avery digs deeper into the Hawthorne secrets — and the stakes get higher and the puzzles get darker."
  },
  {
    id: "final-gambit",
    title: "The Final Gambit",
    author: "Jennifer Lynn Barnes",
    year: 2022, pages: 384, isbn: "9781368065283",
    genres: ["Mystery", "Contemporary", "Romance"],
    vibes: ["Thrilling", "Romantic", "Adventurous", "Emotional"],
    lgbtq: false, series: "The Inheritance Games", content: "ya",
    tagline: "The explosive finale — Avery faces a choice that will change everything, and the Hawthorne brothers may not all survive it."
  },
  {
    id: "brothers-hawthorne",
    title: "The Brothers Hawthorne",
    author: "Jennifer Lynn Barnes",
    year: 2023, pages: 448, isbn: "9781368093248",
    genres: ["Mystery", "Contemporary", "Romance"],
    vibes: ["Thrilling", "Romantic", "Adventurous", "Funny"],
    lgbtq: false, series: "The Inheritance Games", content: "ya",
    tagline: "A spinoff following the Hawthorne brothers on a new mission — with all the puzzles and banter you loved from the original series."
  },
  {
    id: "ouil",
    title: "One of Us Is Lying",
    author: "Karen M. McManus",
    year: 2017, pages: 358, isbn: "9781524714680",
    genres: ["Mystery", "Contemporary"],
    vibes: ["Thrilling", "Dark", "Adventurous"],
    lgbtq: false, series: "One of Us Is Lying", content: "ya",
    tagline: "Five students go into detention, one of them dies, and the other four are suspects. A YA thriller that reads like Breakfast Club meets Clue."
  },
  {
    id: "two-can-keep",
    title: "Two Can Keep a Secret",
    author: "Karen M. McManus",
    year: 2019, pages: 352, isbn: "9781524714703",
    genres: ["Mystery", "Contemporary"],
    vibes: ["Thrilling", "Dark", "Adventurous"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Ellery moves to Echo Ridge — the town where her aunt disappeared, where a homecoming queen was murdered, and where something dark is about to happen again."
  },
  {
    id: "we-were-liars",
    title: "We Were Liars",
    author: "E. Lockhart",
    year: 2014, pages: 240, isbn: "9780385741262",
    genres: ["Mystery", "Contemporary"],
    vibes: ["Dark", "Emotional", "Thrilling"],
    lgbtq: false, series: null, content: "ya",
    tagline: "A privileged family on a private island, a summer Cady can't fully remember, and a secret that will shatter everything. Do not read any spoilers."
  },
  {
    id: "truly-devious",
    title: "Truly Devious",
    author: "Maureen Johnson",
    year: 2018, pages: 320, isbn: "9780062338051",
    genres: ["Mystery", "Contemporary"],
    vibes: ["Thrilling", "Quirky", "Adventurous", "Funny"],
    lgbtq: false, series: "Truly Devious", content: "ya",
    tagline: "Stevie Bell gets into Ellingham Academy, a school built around a famous unsolved murder — and now someone is committing new crimes."
  },
  {
    id: "vanishing-stair",
    title: "The Vanishing Stair",
    author: "Maureen Johnson",
    year: 2019, pages: 352, isbn: "9780062338068",
    genres: ["Mystery", "Contemporary"],
    vibes: ["Thrilling", "Quirky", "Adventurous"],
    lgbtq: false, series: "Truly Devious", content: "ya",
    tagline: "Stevie is back at Ellingham — and she's getting closer to the truth about what happened to Alice Ellingham in 1936."
  },
  {
    id: "and-then-there-were-none",
    title: "And Then There Were None",
    author: "Agatha Christie",
    year: 1939, pages: 264, isbn: "9780062073488",
    genres: ["Mystery"],
    vibes: ["Thrilling", "Dark", "Quirky"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Ten strangers are lured to an island — and one by one they begin to die. Still the best-selling mystery novel ever written."
  },
  {
    id: "murder-orient-express",
    title: "Murder on the Orient Express",
    author: "Agatha Christie",
    year: 1934, pages: 256, isbn: "9780062073501",
    genres: ["Mystery"],
    vibes: ["Thrilling", "Quirky", "Cozy"],
    lgbtq: false, series: "Hercule Poirot", content: "ya",
    tagline: "A man is murdered aboard a snowbound train. Poirot happens to be on board — and every single passenger seems to have a motive."
  },
  {
    id: "nooks-and-crannies",
    title: "Nooks & Crannies",
    author: "Jessica Lawson",
    year: 2016, pages: 304, isbn: "9781481421997",
    genres: ["Mystery", "Historical"],
    vibes: ["Cozy", "Adventurous", "Funny", "Quirky"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Six children receive mysterious invitations to a grand English manor for the weekend — and then the murders begin. Cozy, clever, and perfect."
  },

  // ── GREEK MYTHOLOGY & RETELLINGS ─────────────────────────────────────────────

  {
    id: "circe",
    title: "Circe",
    author: "Madeline Miller",
    year: 2018, pages: 393, isbn: "9780316556347",
    genres: ["Mythology", "Fantasy"],
    vibes: ["Empowering", "Dark", "Emotional", "Adventurous"],
    lgbtq: false, series: null, content: "adult",
    tagline: "The witch of Greek myth tells her own story — from powerless daughter of Helios to a woman who learned to shape the world with her own hands."
  },
  {
    id: "song-of-achilles",
    title: "The Song of Achilles",
    author: "Madeline Miller",
    year: 2011, pages: 352, isbn: "9780062060624",
    genres: ["Mythology", "Romance", "Fantasy"],
    vibes: ["Romantic", "Emotional", "Epic", "Dark"],
    lgbtq: true, series: null, content: "adult",
    tagline: "A breathtaking retelling of the Iliad through Patroclus — the boy who loved Achilles before the world remembers him as a hero."
  },
  {
    id: "thousand-ships",
    title: "A Thousand Ships",
    author: "Natalie Haynes",
    year: 2019, pages: 320, isbn: "9780062947352",
    genres: ["Mythology"],
    vibes: ["Empowering", "Emotional", "Dark", "Epic"],
    lgbtq: false, series: null, content: "adult",
    tagline: "The story of the Trojan War told through the women — Penelope, Briseis, Cassandra, Helen, and dozens more who shaped everything."
  },
  {
    id: "ariadne",
    title: "Ariadne",
    author: "Jennifer Saint",
    year: 2021, pages: 336, isbn: "9781250773586",
    genres: ["Mythology", "Romance"],
    vibes: ["Empowering", "Emotional", "Dark", "Romantic"],
    lgbtq: false, series: null, content: "adult",
    tagline: "Ariadne helped Theseus escape the labyrinth, and he left her behind. This is the story of what she did next."
  },
  {
    id: "elektra",
    title: "Elektra",
    author: "Jennifer Saint",
    year: 2022, pages: 304, isbn: "9781250773593",
    genres: ["Mythology"],
    vibes: ["Dark", "Emotional", "Empowering", "Epic"],
    lgbtq: false, series: null, content: "adult",
    tagline: "Three women of the house of Atreus — Clytemnestra, Elektra, and Cassandra — each tell the story of a family cursed by the gods."
  },
  {
    id: "lightning-thief",
    title: "The Lightning Thief",
    author: "Rick Riordan",
    year: 2005, pages: 377, isbn: "9781423101352",
    genres: ["Mythology", "Fantasy"],
    vibes: ["Adventurous", "Funny", "Thrilling", "Heartwarming"],
    lgbtq: false, series: "Percy Jackson and the Olympians", content: "ya",
    tagline: "Percy Jackson is a troubled twelve-year-old who discovers he's the son of Poseidon — and has days to prevent a war between the gods."
  },
  {
    id: "sea-of-monsters",
    title: "The Sea of Monsters",
    author: "Rick Riordan",
    year: 2006, pages: 279, isbn: "9781423101369",
    genres: ["Mythology", "Fantasy"],
    vibes: ["Adventurous", "Funny", "Thrilling", "Heartwarming"],
    lgbtq: false, series: "Percy Jackson and the Olympians", content: "ya",
    tagline: "Camp Half-Blood is under attack, Grover is in trouble, and Percy needs to reach the Sea of Monsters before it's too late."
  },
  {
    id: "titans-curse",
    title: "The Titan's Curse",
    author: "Rick Riordan",
    year: 2007, pages: 312, isbn: "9781423101376",
    genres: ["Mythology", "Fantasy"],
    vibes: ["Adventurous", "Funny", "Thrilling", "Emotional"],
    lgbtq: false, series: "Percy Jackson and the Olympians", content: "ya",
    tagline: "Artemis has been captured and the fate of Olympus depends on a quest Percy wasn't supposed to go on."
  },
  {
    id: "battle-of-labyrinth",
    title: "The Battle of the Labyrinth",
    author: "Rick Riordan",
    year: 2008, pages: 361, isbn: "9781423101383",
    genres: ["Mythology", "Fantasy"],
    vibes: ["Adventurous", "Funny", "Dark", "Thrilling"],
    lgbtq: false, series: "Percy Jackson and the Olympians", content: "ya",
    tagline: "Kronos's army is growing and the only way to stop them runs through Daedalus's legendary labyrinth beneath the country."
  },
  {
    id: "last-olympian",
    title: "The Last Olympian",
    author: "Rick Riordan",
    year: 2009, pages: 381, isbn: "9781423101390",
    genres: ["Mythology", "Fantasy"],
    vibes: ["Adventurous", "Emotional", "Thrilling", "Heartwarming"],
    lgbtq: false, series: "Percy Jackson and the Olympians", content: "ya",
    tagline: "The final battle — Kronos's forces are marching on Olympus and Percy is the one prophecy says will decide everything."
  },
  {
    id: "lost-hero",
    title: "The Lost Hero",
    author: "Rick Riordan",
    year: 2010, pages: 553, isbn: "9781423113393",
    genres: ["Mythology", "Fantasy"],
    vibes: ["Adventurous", "Funny", "Thrilling", "Romantic"],
    lgbtq: false, series: "The Heroes of Olympus", content: "ya",
    tagline: "Jason wakes up with no memory on a school bus full of demigods — and the Olympians are in trouble again."
  },
  {
    id: "son-of-neptune",
    title: "The Son of Neptune",
    author: "Rick Riordan",
    year: 2011, pages: 513, isbn: "9781423141990",
    genres: ["Mythology", "Fantasy"],
    vibes: ["Adventurous", "Funny", "Thrilling", "Heartwarming"],
    lgbtq: false, series: "The Heroes of Olympus", content: "ya",
    tagline: "Percy wakes up at a Roman demigod camp with no memory of his past — and gets swept into a quest to Alaska and back."
  },
  {
    id: "daughter-moon-goddess",
    title: "Daughter of the Moon Goddess",
    author: "Sue Lynn Tan",
    year: 2022, pages: 480, isbn: "9780063031708",
    genres: ["Mythology", "Fantasy", "Romance"],
    vibes: ["Adventurous", "Romantic", "Emotional", "Epic"],
    lgbtq: false, series: "The Celestial Kingdom Duology", content: "ya",
    tagline: "Inspired by the legend of Chang'e — a girl searches the Celestial Kingdom for a way to free her mother and finds adventure, magic, and love."
  },

  // ── FANTASY ──────────────────────────────────────────────────────────────────

  {
    id: "cruel-prince",
    title: "The Cruel Prince",
    author: "Holly Black",
    year: 2018, pages: 370, isbn: "9780316310314",
    genres: ["Fantasy", "Romance"],
    vibes: ["Romantic", "Dark", "Thrilling", "Empowering"],
    lgbtq: false, series: "The Folk of the Air", content: "ya",
    tagline: "Jude was taken to Faerie as a child. Now she wants to belong there so desperately she'll do almost anything — including make a deal with the most dangerous prince."
  },
  {
    id: "wicked-king",
    title: "The Wicked King",
    author: "Holly Black",
    year: 2019, pages: 323, isbn: "9780316310321",
    genres: ["Fantasy", "Romance"],
    vibes: ["Romantic", "Dark", "Thrilling", "Empowering"],
    lgbtq: false, series: "The Folk of the Air", content: "ya",
    tagline: "Jude is the secret power behind the Faerie throne — but Cardan is not as easy to control as she thought, and the game is getting dangerous."
  },
  {
    id: "queen-of-nothing",
    title: "The Queen of Nothing",
    author: "Holly Black",
    year: 2019, pages: 311, isbn: "9780316310338",
    genres: ["Fantasy", "Romance"],
    vibes: ["Romantic", "Dark", "Thrilling", "Empowering"],
    lgbtq: false, series: "The Folk of the Air", content: "ya",
    tagline: "The finale — Jude has been exiled to the mortal world, Cardan has been cursed, and only she can fix everything. If she survives."
  },
  {
    id: "six-of-crows",
    title: "Six of Crows",
    author: "Leigh Bardugo",
    year: 2015, pages: 465, isbn: "9781627792127",
    genres: ["Fantasy", "Mystery"],
    vibes: ["Thrilling", "Adventurous", "Dark", "Funny"],
    lgbtq: true, series: "Six of Crows", content: "ya",
    tagline: "Six dangerous people are recruited for an impossible heist — into the most heavily guarded location in their world. The most fun you'll have reading a fantasy novel."
  },
  {
    id: "crooked-kingdom",
    title: "Crooked Kingdom",
    author: "Leigh Bardugo",
    year: 2016, pages: 536, isbn: "9781627792134",
    genres: ["Fantasy", "Mystery"],
    vibes: ["Thrilling", "Adventurous", "Dark", "Romantic"],
    lgbtq: true, series: "Six of Crows", content: "ya",
    tagline: "The crew has been double-crossed and everything they've built is at risk — time for Kaz Brekker to plan the con of his life."
  },
  {
    id: "shadow-and-bone",
    title: "Shadow and Bone",
    author: "Leigh Bardugo",
    year: 2012, pages: 358, isbn: "9780805094596",
    genres: ["Fantasy", "Romance"],
    vibes: ["Adventurous", "Romantic", "Dark", "Thrilling"],
    lgbtq: false, series: "Grisha Trilogy", content: "ya",
    tagline: "Alina discovers she has a rare power — and is swept into a world of beautiful, terrifying Grisha soldiers and a Darkling who wants to control her."
  },
  {
    id: "children-blood-bone",
    title: "Children of Blood and Bone",
    author: "Tomi Adeyemi",
    year: 2018, pages: 448, isbn: "9781250170972",
    genres: ["Fantasy", "Mythology"],
    vibes: ["Adventurous", "Empowering", "Dark", "Romantic"],
    lgbtq: false, series: "Legacy of Orisha", content: "ya",
    tagline: "Magic has been erased from Zélie's world. She has one chance to restore it before the ruthless king destroys everything she loves."
  },
  {
    id: "strange-the-dreamer",
    title: "Strange the Dreamer",
    author: "Laini Taylor",
    year: 2017, pages: 544, isbn: "9780316341691",
    genres: ["Fantasy", "Romance", "Mythology"],
    vibes: ["Romantic", "Adventurous", "Dark", "Emotional"],
    lgbtq: false, series: "Strange the Dreamer", content: "ya",
    tagline: "A librarian obsessed with a legendary lost city finally finds it — floating in the sky, full of godspawn, and more dangerous than he ever imagined."
  },
  {
    id: "ember-in-the-ashes",
    title: "An Ember in the Ashes",
    author: "Sabaa Tahir",
    year: 2015, pages: 446, isbn: "9781595148049",
    genres: ["Fantasy"],
    vibes: ["Dark", "Adventurous", "Empowering", "Romantic"],
    lgbtq: false, series: "An Ember in the Ashes", content: "ya",
    tagline: "A slave girl and an elite soldier are thrown together in a brutal empire — both trying to survive, both keeping dangerous secrets."
  },
  {
    id: "legendborn",
    title: "Legendborn",
    author: "Tracy Deonn",
    year: 2020, pages: 512, isbn: "9781534441613",
    genres: ["Fantasy", "Mystery", "Romance"],
    vibes: ["Adventurous", "Dark", "Empowering", "Romantic"],
    lgbtq: false, series: "Legendborn", content: "ya",
    tagline: "Bree goes to college after her mother's death and discovers a secret society of students descended from King Arthur's knights — and her mother's death was no accident."
  },
  {
    id: "gilded-wolves",
    title: "The Gilded Wolves",
    author: "Roshani Chokshi",
    year: 2019, pages: 400, isbn: "9781250144546",
    genres: ["Fantasy", "Mystery", "Historical"],
    vibes: ["Adventurous", "Thrilling", "Funny", "Dark"],
    lgbtq: true, series: "The Gilded Wolves", content: "ya",
    tagline: "Belle Époque Paris, a secret heist, and six brilliant misfits with extraordinary abilities — part Six of Crows, part The Gentleman's Guide."
  },
  {
    id: "raybearer",
    title: "Raybearer",
    author: "Jordan Ifueko",
    year: 2020, pages: 357, isbn: "9781419740275",
    genres: ["Fantasy"],
    vibes: ["Empowering", "Emotional", "Adventurous", "Dark"],
    lgbtq: false, series: "Raybearer", content: "ya",
    tagline: "Tarisai has been raised to love a prince and then kill him — but when she actually meets him and his council, she wants nothing more than to protect them."
  },

  // ── CONTEMPORARY ROMANCE ─────────────────────────────────────────────────────

  {
    id: "to-all-the-boys-1",
    title: "To All the Boys I've Loved Before",
    author: "Jenny Han",
    year: 2014, pages: 368, isbn: "9781442426702",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Funny", "Cozy", "Heartwarming"],
    lgbtq: false, series: "To All the Boys", content: "ya",
    tagline: "Lara Jean's private love letters somehow get mailed to every boy she's ever liked — now she has to face all of them."
  },
  {
    id: "to-all-the-boys-2",
    title: "P.S. I Still Love You",
    author: "Jenny Han",
    year: 2015, pages: 368, isbn: "9781442426733",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Funny", "Cozy", "Emotional"],
    lgbtq: false, series: "To All the Boys", content: "ya",
    tagline: "Lara Jean and Peter are actually together now — but a letter from her past might ruin everything before it even begins."
  },
  {
    id: "to-all-the-boys-3",
    title: "Always and Forever, Lara Jean",
    author: "Jenny Han",
    year: 2017, pages: 352, isbn: "9781442426757",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Cozy", "Heartwarming", "Emotional"],
    lgbtq: false, series: "To All the Boys", content: "ya",
    tagline: "Lara Jean's senior year — college decisions, first loves, and figuring out who you are before the next chapter begins."
  },
  {
    id: "summer-i-turned-pretty-1",
    title: "The Summer I Turned Pretty",
    author: "Jenny Han",
    year: 2009, pages: 276, isbn: "9780689865350",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Cozy", "Emotional", "Heartwarming"],
    lgbtq: false, series: "The Summer I Turned Pretty", content: "ya",
    tagline: "Every summer, Belly goes to the beach house. This summer everything is different — she's grown up, and so have the boys who've always been there."
  },
  {
    id: "summer-i-turned-pretty-2",
    title: "It's Not Summer Without You",
    author: "Jenny Han",
    year: 2010, pages: 352, isbn: "9781416995555",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Emotional", "Dark", "Cozy"],
    lgbtq: false, series: "The Summer I Turned Pretty", content: "ya",
    tagline: "The summer house and everything it represented is falling apart — and so is Belly."
  },
  {
    id: "summer-i-turned-pretty-3",
    title: "We'll Always Have Summer",
    author: "Jenny Han",
    year: 2011, pages: 352, isbn: "9781416995579",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Emotional", "Cozy"],
    lgbtq: false, series: "The Summer I Turned Pretty", content: "ya",
    tagline: "Belly has to decide between the two brothers — and whatever she chooses, someone will be heartbroken."
  },
  {
    id: "anna-french-kiss",
    title: "Anna and the French Kiss",
    author: "Stephanie Perkins",
    year: 2010, pages: 372, isbn: "9780525423270",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Funny", "Cozy", "Heartwarming"],
    lgbtq: false, series: "Anna and the French Kiss", content: "ya",
    tagline: "Anna is stuck in Paris for a year at a boarding school — and St. Clair is completely off-limits. Obviously she develops massive feelings for him."
  },
  {
    id: "lola-boy-next-door",
    title: "Lola and the Boy Next Door",
    author: "Stephanie Perkins",
    year: 2011, pages: 338, isbn: "9780525423287",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Funny", "Cozy", "Heartwarming"],
    lgbtq: false, series: "Anna and the French Kiss", content: "ya",
    tagline: "Lola is happy with her older boyfriend — then the boy who broke her heart two years ago moves back in next door."
  },
  {
    id: "tweet-cute",
    title: "Tweet Cute",
    author: "Emma Lord",
    year: 2021, pages: 352, isbn: "9781250237484",
    genres: ["Contemporary", "Romance"],
    vibes: ["Funny", "Romantic", "Cozy", "Heartwarming"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Two rival school burger chains get into a Twitter war — run by two teens who are falling for each other on an anonymous app. You vs. Me with sandwiches."
  },
  {
    id: "you-have-a-match",
    title: "You Have a Match",
    author: "Emma Lord",
    year: 2021, pages: 336, isbn: "9781250237491",
    genres: ["Contemporary", "Romance", "Mystery"],
    vibes: ["Funny", "Romantic", "Heartwarming", "Cozy"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Abby takes a DNA test for fun and discovers she has a secret older sister at the same summer camp — who seems to hate her."
  },
  {
    id: "fault-in-our-stars",
    title: "The Fault in Our Stars",
    author: "John Green",
    year: 2012, pages: 313, isbn: "9780525478812",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Emotional", "Funny", "Dark"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Hazel and Augustus meet in a cancer support group and fall deeply in love — while staring down mortality together. Bring tissues."
  },
  {
    id: "eleanor-and-park",
    title: "Eleanor & Park",
    author: "Rainbow Rowell",
    year: 2012, pages: 336, isbn: "9781250012579",
    genres: ["Contemporary", "Romance", "Historical"],
    vibes: ["Romantic", "Emotional", "Dark", "Heartwarming"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Two misfits meet on a school bus in 1986 and fall in love over mixtapes and comic books — with a home situation that makes it much more complicated."
  },
  {
    id: "fangirl",
    title: "Fangirl",
    author: "Rainbow Rowell",
    year: 2013, pages: 438, isbn: "9781250030955",
    genres: ["Contemporary", "Romance"],
    vibes: ["Funny", "Cozy", "Romantic", "Heartwarming"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Cath writes wildly popular fan fiction about Simon Snow — but first year of college is harder than she expected, especially falling for her roommate's boyfriend. Wait."
  },
  {
    id: "sun-is-also-a-star",
    title: "The Sun Is Also a Star",
    author: "Nicola Yoon",
    year: 2016, pages: 344, isbn: "9780553496680",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Emotional", "Empowering"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Natasha is being deported in 24 hours. Daniel believes in fate. They meet by chance and have one day to argue about the universe and accidentally fall in love."
  },
  {
    id: "everything-everything",
    title: "Everything, Everything",
    author: "Nicola Yoon",
    year: 2015, pages: 310, isbn: "9780553496642",
    genres: ["Contemporary", "Romance", "SciFi"],
    vibes: ["Romantic", "Emotional", "Thrilling", "Cozy"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Maddy has never left her house — she's allergic to the world. Then a boy moves in next door and she starts taking risks she never thought she would."
  },
  {
    id: "when-dimple-met-rishi",
    title: "When Dimple Met Rishi",
    author: "Sandhya Menon",
    year: 2017, pages: 380, isbn: "9781481478687",
    genres: ["Contemporary", "Romance"],
    vibes: ["Funny", "Romantic", "Heartwarming", "Cozy"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Dimple wants to escape her family's matchmaking. Rishi is the boy her parents arranged her to meet. This is going to be a disaster — except maybe not."
  },
  {
    id: "ill-give-you-the-sun",
    title: "I'll Give You the Sun",
    author: "Jandy Nelson",
    year: 2014, pages: 371, isbn: "9780803734968",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Emotional", "Empowering", "Dark"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Twin siblings tell the same story from different points in time — a portrait of first love, jealousy, grief, and what it means to find yourself."
  },
  {
    id: "people-we-meet",
    title: "People We Meet on Vacation",
    author: "Emily Henry",
    year: 2021, pages: 368, isbn: "9781984806758",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Funny", "Emotional", "Cozy"],
    lgbtq: false, series: null, content: "adult",
    tagline: "Alex and Poppy have been best friends for years — but one summer trip broke everything, and now she has one last chance to fix it."
  },
  {
    id: "book-lovers",
    title: "Book Lovers",
    author: "Emily Henry",
    year: 2022, pages: 384, isbn: "9781984806772",
    genres: ["Contemporary", "Romance"],
    vibes: ["Romantic", "Funny", "Cozy", "Heartwarming"],
    lgbtq: false, series: null, content: "adult",
    tagline: "A literary agent escapes to a small town for the summer — and keeps running into the grumpy NYC editor who is always on the other side of negotiations."
  },
  {
    id: "seven-husbands",
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    year: 2017, pages: 400, isbn: "9781501161933",
    genres: ["Contemporary", "Romance", "Historical"],
    vibes: ["Romantic", "Emotional", "Empowering", "Dark"],
    lgbtq: true, series: null, content: "adult",
    tagline: "An aging Hollywood icon finally agrees to tell her story — and the truth is far more complicated and devastating than anyone expected."
  },

  // ── HISTORICAL FICTION ───────────────────────────────────────────────────────

  {
    id: "book-thief",
    title: "The Book Thief",
    author: "Markus Zusak",
    year: 2005, pages: 552, isbn: "9780375831003",
    genres: ["Historical", "Contemporary"],
    vibes: ["Emotional", "Dark", "Heartwarming", "Cozy"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Liesel steals books in Nazi Germany and shares them with her neighbors — including a Jewish man hiding in her basement. Narrated by Death."
  },
  {
    id: "code-name-verity",
    title: "Code Name Verity",
    author: "Elizabeth Wein",
    year: 2012, pages: 343, isbn: "9781423152194",
    genres: ["Historical", "Mystery"],
    vibes: ["Emotional", "Dark", "Thrilling", "Empowering"],
    lgbtq: true, series: null, content: "ya",
    tagline: "A British spy captured by the Gestapo in WWII writes her confession. It's not the confession you think it is. Read it twice."
  },
  {
    id: "between-shades-of-gray",
    title: "Between Shades of Gray",
    author: "Ruta Sepetys",
    year: 2011, pages: 344, isbn: "9780142420591",
    genres: ["Historical"],
    vibes: ["Emotional", "Dark", "Empowering"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Fifteen-year-old Lina is taken from Lithuania by Soviet forces in 1941 — a story based on true events that most people don't know about."
  },
  {
    id: "salt-to-the-sea",
    title: "Salt to the Sea",
    author: "Ruta Sepetys",
    year: 2016, pages: 391, isbn: "9780399160301",
    genres: ["Historical", "Romance"],
    vibes: ["Emotional", "Dark", "Romantic", "Empowering"],
    lgbtq: false, series: null, content: "ya",
    tagline: "Four teenagers are on the run in WWII, trying to reach the ship that will take them to safety — one of history's deadliest disasters."
  },
  {
    id: "fountains-of-silence",
    title: "The Fountains of Silence",
    author: "Ruta Sepetys",
    year: 2019, pages: 512, isbn: "9780399160318",
    genres: ["Historical", "Mystery", "Romance"],
    vibes: ["Romantic", "Dark", "Thrilling", "Emotional"],
    lgbtq: false, series: null, content: "ya",
    tagline: "1950s Madrid under Franco — an American boy with a camera and a Spanish girl with secrets. A love story wrapped around a history most people don't know."
  },
  {
    id: "perks-wallflower",
    title: "The Perks of Being a Wallflower",
    author: "Stephen Chbosky",
    year: 1999, pages: 213, isbn: "9781451696196",
    genres: ["Contemporary"],
    vibes: ["Emotional", "Dark", "Heartwarming", "Cozy"],
    lgbtq: true, series: null, content: "ya",
    tagline: "Charlie writes letters to a stranger about his first year of high school — love, loss, family secrets, and what it means to participate in life."
  },
  {
    id: "malibu-rising",
    title: "Malibu Rising",
    author: "Taylor Jenkins Reid",
    year: 2021, pages: 384, isbn: "9781524798680",
    genres: ["Contemporary", "Historical"],
    vibes: ["Emotional", "Dark", "Empowering", "Romantic"],
    lgbtq: true, series: null, content: "adult",
    tagline: "The famous Riva siblings throw one epic party in 1983 Malibu — and by morning, everything has changed. Their whole story told in one wild night."
  },

];
