# Catalyst – Event Homepage

Premium, modern event homepage for IIIT Sri City’s E-Cell's Catalyst event, 2025. Built with React + Vite and designed for fast loads, beautiful visuals, and smooth navigation.

Live (Vercel): add your deployed URL here

## Highlights

* __Polished hero__: near‑black theme, subtle grid/starfield, spotlight behind “Catalyst”.
* __Modern navbar__: glass effect, clean links, smooth spacing.
* __Event timeline__: wide, responsive, animated milestones.
* __Footer__: official E‑Cell contact info and location.
* __Contributors__: avatar + credits.
* __Routing__: Home and Learn More pages with client‑side routing.

## Tech Stack

* __React 19__ + __Vite 7__
* __React Router DOM__ for SPA routing
* __Framer Motion__ for animations
* __Three.js__ + __@react-three/fiber/drei__ for particles
* CSS modules/global CSS

## Getting Started (Local)

```bash
# 1) Install deps
npm install

# 2) Start dev server
npm run dev

# 3) Build production bundle
npm run build

# 4) Preview production build
npm run preview
```

## Project Structure

```
catalyst/
├─ public/
├─ src/
│  ├─ assets/              # images, fonts (e.g., karthik.jpg)
│  ├─ AuroraHero/          # hero particles and visuals
│  ├─ CatalystHeading/     # main heading + spotlight
│  ├─ CornerLogo/          # fixed top-left circular logo
│  ├─ Footer/              # contact + contributors
│  ├─ Header/              # glass navbar
│  ├─ Timeline/            # event timeline
│  ├─ App.jsx, index.css   # app shell and global styles
│  └─ ...
├─ index.html
├─ vite.config.js
├─ package.json
└─ vercel.json             # SPA rewrites
```

## Environment & Assets

* Place images in `src/assets/` and import them: `import img from './assets/karthik.jpg'`.
* Google Fonts `@import` must be at the very top of `src/index.css`.

## Deployment (Vercel)

1) In Vercel, set __Root Directory__ to `catalyst`.
2) Framework Preset: __Vite__.
3) Build command: `npm run build`.
4) Output directory: `dist`.
5) Ensure SPA rewrites are enabled via `vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

This prevents 404s on direct links like `/learn-more` by serving `index.html` and letting React Router handle routes client‑side.

## Scripts

* `npm run dev` – start local dev server (HMR)
* `npm run build` – production build with Vite
* `npm run preview` – preview the built app locally
* `npm run lint` – run ESLint

## Credits

Built by E‑Cell IIITS. Design/dev by Karthik M Sarma and contributors.

---

If you encounter any deployment issues, confirm the root directory is `catalyst/` and that `@import` in `src/index.css` is at the top of the file.
