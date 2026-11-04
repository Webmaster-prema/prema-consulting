# Prema Consulting website

React + Vite site for [prema-consulting.net](https://prema-consulting.net). Requires Node.js 20.19 or newer.

## Scripts

- `npm run dev` (or `npm start`): development server at http://localhost:3000
- `npm run build`: production build in `build/`
- `npm run preview`: serve the production build locally

## How the build works

`npm run build` runs three steps:

1. `vite build` bundles the app into `build/`.
2. `vite build --ssr src/entry-server.jsx` bundles a server renderer into `build-ssr/` (temporary).
3. `scripts/prerender.mjs` renders every route to static HTML: `build/index.html`, `build/<route>.html` and `build/404.html`. Each page gets its own title, description, canonical URL and structured data, so search engines and AI crawlers that don't run JavaScript see the full content.

## Where things live

- `src/routeMeta.js`: page titles and descriptions. Add a new route here **and** in `src/App.jsx` so it is pre-rendered.
- `src/faqData.js`: FAQ questions and answers. The FAQ structured data is generated from this file at build time.
- `public/sitemap.xml`, `public/robots.txt`, `public/llms.txt`: crawler files. Update the sitemap and `llms.txt` when pages are added.
- `vercel.json`: Vercel settings. `cleanUrls` serves `build/faq.html` at `/faq`; unknown URLs get `build/404.html` with a 404 status.
