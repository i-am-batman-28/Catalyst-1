# Catalyst – Event Homepage (Repository)

This repository hosts the Catalyst event website for IIIT Sri City’s E‑Cell. The React + Vite application lives inside the `catalyst/` directory.

Live site: https://catalyst-25.vercel.app

## Repository Layout

```
.
├─ catalyst/        # React + Vite app (source code)
│  ├─ src/
│  ├─ public/
│  ├─ index.html
│  ├─ package.json
│  ├─ vite.config.js
│  └─ vercel.json   # SPA rewrites for client-side routing
└─ README.md        # This repository-level README
```

For feature details, component list, and screenshots, see `catalyst/README.md`.

## Quick Start (Local Development)

From the repo root:

```bash
cd catalyst
npm install
npm run dev
```

Open the dev server URL shown in your terminal (typically `http://localhost:5173`).

### Build & Preview

```bash
cd catalyst
npm run build
npm run preview
```

## Deployment (Vercel)

This project is deployed on Vercel with the following configuration:

- Team/Project: your Vercel account
- Framework Preset: Vite
- Root Directory: `catalyst`
- Build Command: `npm run build`
- Output Directory: `dist`

Single Page App routing is enabled using `catalyst/vercel.json`:

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

This ensures direct links like `/learn-more` resolve correctly.

## Contributing

1. Create a branch from `main`.
2. Make changes inside `catalyst/`.
3. Run `npm run dev` to test locally.
4. Submit a PR to `main`.

## License

Copyright © 2025 E‑Cell IIITS. All rights reserved.

