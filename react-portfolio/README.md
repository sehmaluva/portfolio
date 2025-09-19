# React Portfolio (Vite + React)

This folder contains a Vite + React version of your portfolio, pre-populated with content taken from the original `index.html`.

Important: this project references images at `/assets/...`. To make the images and certificates available in dev and production, copy the existing top-level `assets/` folder into this project's `public/` folder. From the repo root run:

```bash
# from /home/gilbert/Desktop/portfolio
cp -r assets react-portfolio/public
# or use rsync: rsync -av assets/ react-portfolio/public/assets/
```

Then install and run:

```bash
cd react-portfolio
npm install
npm run dev
```

Notes:
- Theme toggle uses `localStorage` and is applied before React mounts to avoid FOUC.
- Scroll reveals use Framer Motion.
- Edit components under `src/components/` to update content.
