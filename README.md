# Arrow Flow — Official Website

Official commercial web presence for the Android mobile puzzle game **Arrow Flow** ("Clear the path. Master the flow.").

[![Google Play](https://img.shields.io/badge/Google_Play-Download_Arrow_Flow-00E5FF?style=for-the-badge&logo=google-play&logoColor=white)](https://play.google.com/store/apps/details?id=com.arrowflow.game.arrowflow)
[![Website](https://img.shields.io/badge/Website-arrowflowgame.netlify.app-00B4D8?style=for-the-badge&logo=netlify&logoColor=white)](https://arrowflowgame.netlify.app/)

This repository contains the standalone web application hosted for consumer marketing, Google Play Store developer listing verification, and Google AdMob `app-ads.txt` automated crawler verification.

---

## 🎮 Game Information
- **Title:** Arrow Flow
- **Package Name:** `com.arrowflow.game.arrowflow`
- **Developer:** Abhay Kushwaha
- **Support Email:** mauryaabhay938@gmail.com
- **Google Play:** [https://play.google.com/store/apps/details?id=com.arrowflow.game.arrowflow](https://play.google.com/store/apps/details?id=com.arrowflow.game.arrowflow)
- **Official Website:** [https://arrowflowgame.netlify.app/](https://arrowflowgame.netlify.app/)

---

## ✨ Features
- **Modern Luxury Aesthetic:** Light theme by default, with seamless dark mode support and theme persistence in `localStorage`.
- **Interactive Game Board Previews:** Real-time canvas/DOM simulations of Arrow Flow's directional raycast movement and collision feedback.
- **Visual Showcase:** Device mockups covering Home, Core Gameplay, 5 Worlds Carousel, Achievements, Daily Puzzle, Endless Mode, and Settings.
- **Compliance & Legal Routes:** Complete Privacy Policy (`/privacy`), Terms of Service (`/terms`), and Interactive Contact (`/contact`).
- **AdMob app-ads.txt Ready:** Directly served at `/app-ads.txt` with HTTP 200 plain text for automated AdMob crawlers.

---

## 🚀 Development & Build

### Prerequisites
- Node.js (v18+)
- npm

### Install Dependencies
```bash
npm install
```

### Run Locally
```bash
npm run dev
```

### Build for Production
```bash
npm run build
```

---

## 🌐 Netlify Deployment
This project includes preconfigured `netlify.toml` and `_redirects` in `public/`:
- Serves `/app-ads.txt` directly without SPA rewriting.
- Rewrites all other paths to `/index.html` for client routing.
