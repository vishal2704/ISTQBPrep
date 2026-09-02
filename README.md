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
