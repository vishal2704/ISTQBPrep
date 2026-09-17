# ISTQB 4.0 Foundation — React Edition

A full rewrite of the ISTQB practice-exam app on a modern **Node.js / React / Vite / Tailwind**
stack, with a bright, friendly, gamified visual style (Duolingo-inspired).

## Tech stack

- **React 18** + **React Router** — component-based SPA with client-side routing
- **Vite** — dev server + build tool (Node.js-based)
- **Tailwind CSS** — utility-first styling, custom design tokens in `tailwind.config.js`
- **canvas-confetti** — celebration effect on passing scores
- Question bank, scoring, and exam logic ported from the original vanilla-JS app

## Getting started

```bash
npm install
npm run dev
```

Then open the printed local URL (usually `http://localhost:5173`).

To create a production build:

```bash
npm run build
npm run preview   # serve the build locally to check it
```

The build output goes to `dist/` — deploy that folder to any static host
(Vercel, Netlify, GitHub Pages, S3, etc.).

## Project structure

```
src/
  data/questionBank.js       Ported question bank (all chapters + new question types)
  services/                  Pure logic: storage, scoring, streaks, revision, shuffling
  context/                   React Context: Theme, Auth (mock/local), Exam session state
  components/                Reusable UI: Button, Card, Badge, ChapterCard, QuestionOptions,
                              SettingsModal (theme picker), AppTour (guided walkthrough),
                              PageShell (shared layout + floating settings/home buttons)
  pages/                     Dashboard, Login, Register, ChapterLaunch, Exam, Review,
                              Result, Admin
```

## What's new vs. the previous vanilla-JS version

- **Design**: bright green/blue/gold palette, rounded "3D pressable" buttons, streak
  flame widget, confetti on passing scores, animated score ring on the result page.
- **Themes**: 5 selectable themes (Sunny Light, Night Owl, Sunset, Ocean, Candy) via the
  floating gear Settings button — implemented with CSS variables so every component
  re-themes automatically.
- **App Tour**: guided spotlight walkthrough of the dashboard, rebuilt as a React
  component (`AppTour.jsx`).
- **Question types**: standard, combination (multi-select), matching (pair columns),
  and scenario (K3-level, badge-flagged) — same schema as documented previously,
  now rendered through `QuestionOptions.jsx`.
- **Architecture**: real component boundaries, React Context for state instead of
  global functions/DOM queries, npm-managed dependencies, Vite build pipeline.

## Notes

- Persistence is still local (`localStorage`) — there's no real backend yet. Auth is a
  mock/local sign-in (no password verification) to preserve the original app's
  behavior. Wiring up a real Node/Express API + database is a natural next step if
  you want multi-device accounts.
- Fonts (`Baloo 2`, `Nunito`) load from Google Fonts — swap for self-hosted fonts if
  you need to work fully offline.

## Mobile: PWA (works today) and native APK (needs your machine)

### Install as an app on your phone — no APK needed
This app is now a installable PWA. After deploying the `dist/` build (or running
`npm run preview` and visiting from your phone on the same network):

- **Android (Chrome):** open the site → menu (⋮) → "Add to Home screen"
- **iPhone (Safari):** open the site → Share → "Add to Home Screen"

It installs with its own icon, opens full-screen (no browser bar), and keeps
working offline after the first visit (see `public/sw.js`).

### Building a real `.apk`
This can't be built inside the sandboxed environment this app was generated in —
compiling an Android APK requires the Android SDK and Gradle, which pull from
Google's Maven repository, a domain that sandbox can't reach. On your own
machine, with [Android Studio](https://developer.android.com/studio) installed,
it's three commands:

```bash
npm install @capacitor/core @capacitor/cli @capacitor/android
npx cap init "ISTQB Practice" "com.istqbpractice.app" --web-dir=dist
npm run build
npx cap add android
npx cap open android   # opens Android Studio — Build > Build APK from there
```

Capacitor wraps the existing `dist/` web build as a native shell, so no code
changes are needed — swipe gestures, offline support, and everything else
already work the same way inside the native app.

---

## Version history

Versions below describe this practice portal, not any ISTQB syllabus version.
(The Foundation content targets the official **CTFL v4.0.1** syllabus.)

### v1.11.0 — Practice question UX polish
Practice mode was starting to feel like a timed-exam simulator rather than a
learning tool. Targeted fixes, reusing existing components/tokens throughout:
- Progress text clarified: "1 / 143" → "Question 1 of 143" (both the segmented
  and plain-bar progress views).
- Answer-option buttons ~25% shorter (padding/letter-circle reduced) while
  staying a comfortable ~48px touch target.
- Bookmark toggle moved from the page-level header down onto the question
  card itself, next to its chapter/difficulty/type badges — literally "the
  question header" rather than the page header. Also bookmarkable via a new
  `B` keyboard shortcut.
- Metadata badges reformatted: "Chapter 1 · Fundamentals of Testing" and
  properly-capitalized difficulty ("Easy"/"Medium"/"Hard"). Extended
  `loReference.js`'s chapter-label map to cover Test Manager chapters too
  (previously only Foundation was mapped, so TM questions fell back to
  showing raw ids like "tm3").
- "Show Hint" restyled from a filled, attention-grabbing pill to a subtle
  text link — a secondary action, not competing with answering.
- Question navigator is now compact by default (a one-line summary: answered
  count + bookmark count + expand toggle) rather than always showing the
  full grid. Expanding still paginates cleanly for 100+ questions, and
  bookmarked questions now show a small star badge.
- "Next" button becomes the visually primary action once you've answered (or
  in timed mode, or on the last question) — before that, in practice mode,
  it stays a calmer outline style, nudging toward "answer first."
- Bottom Back/Next bar is now a persistent (`fixed`, not `sticky`) bottom
  action bar on mobile, with a spacer so it never covers the navigator/hints
  beneath it. Desktop layout is unaffected (reverts to normal in-flow
  buttons at the `sm:` breakpoint).
- No changes to Timed Exam behavior — practice mode already correctly
  revealed answers/explanations immediately while timed mode withheld them
  until completion; verified this was untouched by the changes above.
- No new neon colors, gradients or glows introduced; reused the existing
  `primary`/`outline` button variants and translucent badge tokens throughout.

### v1.10.0 — GitHub Pages deployment & tablet-layout audit
- **GitHub Pages support**: `vite.config.js` sets `base: '/ISTQBPrep/'`, `BrowserRouter`
  uses `basename="/ISTQBPrep"`, and the service worker registers from the correct
  subpath. `public/manifest.json`'s `start_url`, `scope` and icon paths updated to
  match — this file is copied verbatim by Vite (not auto-rewritten like `index.html`),
  so it needed manual fixing. Verified via actual `dist/` build output, not assumption.
- **Tablet layout audit**: the Header's full nav row and both dashboards' 3-column
  sidebar layout activated at `md:` (768px) — comfortable on desktop, but genuinely
  cramped on real tablets (iPad portrait is exactly 768px). Moved these to `lg:`
  (1024px) so tablets get a clean, spacious single-column stack / hamburger menu,
  reserving the tighter layout for true desktop widths. Same fix applied to
  `ExamPreview.jsx`, which had the identical pattern.
- Swept the codebase for hardcoded fixed pixel widths and literal `<table>` elements
  that could resist reflowing — found none needing changes.

### v1.9.0 — Question variations applied
- Applied the `questionVariations` model across the bank: **570 of 804 questions
  (71%) now carry 2-3 alternate wordings**, giving **1,461 distinct question
  presentations** from 804 underlying concepts. A wording is chosen at random at
  runtime, so repeat practice of the same concept doesn't feel identical.
- Variations are generated by conservative, meaning-preserving framing rewrites
  only (e.g. "Which of the following is X?" → "Which option is X?" / "From the
  choices below, which is X?"). The 229 questions with no confidently-safe rewrite
  rule were deliberately left with a single wording rather than risking an awkward
  or meaning-shifting rephrase.
- Verified: 0 duplicate wordings across the entire bank, and a whole-bank sweep
  confirming the correct answer, option set and explanation are unchanged by
  variation selection.

### v1.8.0 — Question bank expansion & dark-mode accessibility
- Question bank expanded to **804 questions** (658 Foundation, 146 Test Manager),
  all syllabus-aligned and **fully de-duplicated** (0 duplicate IDs, 0 duplicate
  question texts). This pass also removed 48 pre-existing duplicates inherited
  from earlier expansion rounds.
- Dark mode WCAG audit and fixes: link/accent text (2.98:1 → 6.28:1), correct-answer
  chips (2.09:1 → 4.42:1) and card borders (1.23:1 → 3.27:1) now all pass. Softened
  neon glows and decorative blur-blobs for reduced eye strain. Light mode unchanged.
- New theme-aware tokens: `--accent-text`, `--success-solid`.

### v1.7.0 — Exam UX improvements
- **Question navigation** paginated: >10 questions now paginate in pages of 10 with
  prev/next controls, auto-jumping to the current question's page. Button sizes stay
  fixed; responsive 5-col (mobile) / 10-col (desktop).
- **Timed Exam fixed at 45 questions**; the count picker is hidden in timed mode and
  gracefully caps when a chapter's pool is smaller.
- **Early exit**: pressing Back/←/swipe-right on Q1 with nothing answered exits the
  exam with no saved result and no confirmation prompt.
- **Clear Results** now only clears attempt history. Badges, best score, average score
  and lifetime statistics are preserved via a new `lifetimeStatsService`.
- **Bookmarks page** (`/bookmarks`) with per-question remove, instant UI update and
  persistence.

### v1.6.0 — Achievements
- 13 badges across Streaks / Volume / Score / Consistency.
- `/achievements` page plus a dashboard summary card.
- Flower-burst celebration on badge unlock or personal best.

### v1.5.0 — Practice hub, question model & structure
- Dedicated `/practice` page; remembers last selected exam and offers resume.
- Question folders reorganized per exam (`questions/foundation/`, `questions/test-manager/`).
- Question model extended: `questionVariations` (alternate wordings, picked at
  runtime) and support for up to 10 options (4 selected at runtime — correct answer
  always included, 3 random distractors, shuffled with correct-answer remapping).

### v1.4.0 — Multi-certification support
- Advanced Level Test Manager added with its own dashboard and question bank.
- Syllabus preview pages for 12 not-yet-built certifications.
- Program-scoped mock exams and statistics.

### v1.3.0 — Content & reference
- ISTQB glossary (89 terms, searchable and chapter-filterable).
- Practice-mode concept badges showing the official Learning Objective and K-level.
- Software testing blog.

### v1.2.0 — Mobile & PWA
- Installable PWA with offline support, app icons and manifest.
- Swipe navigation between questions; safe-area handling for notched devices.
- iOS zoom-on-focus prevention and mobile-friendly tap targets.

### v1.1.0 — UI overhaul
- Brand design system (indigo→sky gradient), new landing page and dashboards.
- Five selectable themes.
- Guided app tours on major pages.

### v1.0.0 — React rewrite
- Migrated from vanilla JS to React + Vite + Tailwind.
- Four question types: standard, combination, matching, scenario.
- Practice and timed modes, bookmarks, streaks, result analytics.
