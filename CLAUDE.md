# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

BUS 214 exam study hub — a single-page bilingual (English/Arabic) web app for university business ethics students. Covers Chapters 1–3: Business Ethics, Stakeholder Relationships, and Sustainability. Based on Ferrell's *Business Ethics: Ethical Decision Making and Cases* (13th Edition).

**Live site:** `https://bus-214-study-hub.vercel.app/` — Vercel rewrites `/` → `/bus214_edition.html`.
**GitHub repo:** `hosamalmotairi/BUS214-study-hub`
**Exam date:** April 12, 2026 (hardcoded in countdown on home page).

## Local Development

**Local server (port 5503):**
```bash
npx serve -p 5503 .
```
Launch config at `.claude/launch.json`.

**Deploy:** `git push` — Vercel auto-deploys on push to main.

## File Structure

| File | Role |
|------|------|
| `bus214_edition.html` | Entire HTML structure (1,693 lines) — imports CSS + JS |
| `bus214_scripts.js` | All JS logic — quiz, flashcards, navigation, localStorage (843 lines) |
| `bus214_firebase.js` | Firebase auth, Firestore sync, leaderboard (184 lines) |
| `bus214_styles.css` | Full stylesheet — dark mode, responsive, bilingual (2,988 lines) |
| `vercel.json` | Deployment rewrite rule |
| `api/chat.js` | Vercel serverless function — AI chatbot backend (Groq API) |
| `Ferrell_BE_13e_CH0[1-3].pptx` | Source textbook slides (excluded from git) |

## Architecture

Single-page app — no build step, no framework. Pages toggled via `showPage(id)` using CSS `display`.

### scripts.js structure

1. **Data arrays** — `allQuizQ[]` (118+ questions, each has `ch, q, opts, ans, exp`), `flashCards[]` (45+ terms with `ch, front, back`)
2. **State globals** — `streakData`, `bestScores`, `totalQuizzes`, `totalCorrect`, `totalWrong`
3. **Navigation** — `showPage(id)` — toggles page visibility; `toggleSidebar()`, `openSearch()`, `runSearch()`
4. **Quiz** — `startQuiz()`, `handleQuizAnswer()`, `nextQuizQ()`, `endQuiz()`, `retakeQuiz()` — filterable by chapter (All/Ch1/Ch2/Ch3), configurable question count (10–50) and time limit
5. **Flash Cards** — `initFlashCards()`, `prevFlashCard()`, `nextFlashCard()` — searchable, filterable by chapter
6. **Mock Exam** — 30 questions, 30-minute timer
7. **Dashboard** — `renderDashboard()` — best scores per chapter, total quizzes, accuracy %
8. **UI toggles** — `toggleDark()`, `toggleArabic()` — dark mode + hide/show Arabic translations
9. **Analytics** — `renderMasteryBadges()` — chapter mastery bars on home page
10. **Streak tracking** — study consistency badge (consecutive study days)
11. **AI Chat (inline in HTML)** — `toggleAIChat()` and `sendAIMsg()` defined inside `<script>` tag in `bus214_edition.html` (NOT in scripts.js). Calls `/api/chat` serverless function. Works on Vercel only (needs `GROQ_API_KEY` env var).

### firebase.js structure

- **Auth:** Email/password login + register modal (Arabic labels); `skipAuth()` for guest access
- **Firestore:** `/users/{uid}` — profile, bestScores, totalQuizzes, lastSeen; `/users/{uid}/sessions` — per-quiz history
- **Leaderboard:** Top 20 by `bestScores.all` descending; "You" badge highlights current user
- **Sync:** `Math.max()` merge — takes highest of local vs cloud values (never downgrades)
- **Display:** Logged-in user's name shown in sidebar

### Data flow

**localStorage keys:**

| Key | Purpose |
|-----|---------|
| `bus214_streak` | `{count, lastDate}` — study streak |
| `bus214_bestScores` | `{ch1, ch2, ch3, all}` — best scores per chapter |
| `bus214_totalQuizzes` | Total quizzes taken |
| `bus214_totalCorrect` | Total correct answers |
| `bus214_totalWrong` | Total wrong answers |
| `bus214_dark` | `'0'` or `'1'` — dark mode |
| `bus214_ar_hidden` | `'0'` or `'1'` — Arabic translations hidden |
| `bus214-eli5` | `'0'` or `'1'` — ELI5 mode |

**Firestore:** per-user doc at `users/{uid}` — same fields + `lastSeen` timestamp.

## Mobile & Dark Mode

- **Breakpoints:** 480px, 600px, 768px — controlled in `bus214_styles.css`
- **Sidebar:** Collapses to hamburger on ≤768px; FABs for dark mode, search, Arabic toggle
- **Dark mode:** `body.dark` class — hundreds of specific rules in CSS
- **Bilingual:** English + Arabic RTL support throughout; toggle hides Arabic text

## Firebase Config

- Firebase Compat SDK (CDN) — no npm
- Project ID: `bus214-study-hub`
- Auth domain: `bus214-study-hub.firebaseapp.com`
- Guest access via `skipAuth()` — no cloud sync for guests

## Content Coverage

- **Ch1 — Business Ethics:** Definitions, history, FSGO, SOX, FCPA, Dodd-Frank, ethical culture
- **Ch2 — Stakeholder Relationships:** Primary/secondary stakeholders, Carroll's pyramid, corporate governance, fiduciary duties, Dodge v. Ford
- **Ch3 — Sustainability:** Environmental regulations, renewable energy, greenwashing, Kyoto Protocol, Clean Air Act

## AI Chatbot — "بوت المطيري"

- **Endpoint:** `api/chat.js` — Vercel serverless function
- **Model:** `moonshotai/kimi-k2-instruct` via Groq API
- **Env var required:** `GROQ_API_KEY` (set in Vercel dashboard — never commit to git)
- **Personality:** Arabic-first, BUS 214 specialist, friendly tutor style
- **Scope:** Refuses off-topic questions (only answers Ch1–3 BUS 214 questions)
- **Works locally:** ❌ No — needs Vercel serverless runtime. Local server returns 404 on `/api/chat`
- **Frontend:** Floating 🤖 button (FAB) at `bottom:264px` — `toggleAIChat()` / `sendAIMsg()` defined inline in `bus214_edition.html`

## Key Constraints

- **No build step** — edits to `.html`/`.js`/`.css` go live directly after `git push`
- **`bus214_firebase.js` is separate** from `bus214_scripts.js` — Firebase logic is isolated
- **`toggleAIChat` / `sendAIMsg` are inline in HTML** — not in scripts.js or firebase.js
- **`.gitignore` excludes** PowerPoint files, PDFs, Arabic summary folders, `.DS_Store`, `.claude/`
- **Leaderboard requires login** — guests cannot appear on leaderboard
- **Sync is additive** — local + cloud merge always takes the maximum (scores never decrease)
- **`GROQ_API_KEY` must stay secret** — never log or expose it; only lives in Vercel environment variables
