// Renders every route to static HTML after `vite build`, so crawlers that don't run
// JavaScript (most AI assistants) get each page's full content and its own head tags.
// Output: build/index.html, build/<route>.html (served at /<route>) and build/404.html.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const SITE_URL = 'https://prema-consulting.net';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const outDir = path.join(root, 'build');
const ssrDir = path.join(root, 'build-ssr');

const { render, routeMeta, notFoundMeta, faqs, faqPlainText } =
  await import(pathToFileURL(path.join(ssrDir, 'entry-server.mjs')).href);

const template = fs.readFileSync(path.join(outDir, 'index.html'), 'utf8');

const escapeAttr = (text) => text.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');

const setTag = (html, pattern, replacement) => {
  const found = typeof pattern === 'string' ? html.includes(pattern) : pattern.test(html);
  if (!found) throw new Error(`Tag not found in index.html: ${pattern}`);
  return html.replace(pattern, replacement);
};

// FAQPage markup must only describe questions visible on that page.
const faqJsonLd = (items) => `<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: items.map((item) => ({
    '@type': 'Question',
    name: item.q,
    acceptedAnswer: { '@type': 'Answer', text: faqPlainText(item) },
  })),
}).replace(/</g, '\\u003c')}</script>`;

const breadcrumbJsonLd = (route, title) => `<script type="application/ld+json">${JSON.stringify({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Home', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: title.split(' | ')[0], item: SITE_URL + route },
  ],
}).replace(/</g, '\\u003c')}</script>`;

const extraHead = {
  '/': [faqJsonLd(faqs.filter((item) => item.featured))],
  '/faq': [faqJsonLd(faqs)],
};

const buildPage = (url, { title, description }, { route, notFound = false } = {}) => {
  let html = template;
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${escapeAttr(title)}</title>`);
  html = setTag(html, /(<meta\s+name="description"\s+content=")[^"]*(")/, `$1${escapeAttr(description)}$2`);
  html = setTag(html, /(<meta property="og:title" content=")[^"]*(")/, `$1${escapeAttr(title)}$2`);
  html = setTag(html, /(<meta property="og:description" content=")[^"]*(")/, `$1${escapeAttr(description)}$2`);

  if (notFound) {
    html = setTag(html, /\s*<link rel="canonical"[^>]*>/, '');
    html = setTag(html, /\s*<meta property="og:url"[^>]*>/, '');
    html = setTag(html, /(<meta name="robots" content=")[^"]*(")/, '$1noindex, follow$2');
  } else {
    html = setTag(html, /(<link rel="canonical" href=")[^"]*(")/, `$1${SITE_URL}${route}$2`);
    html = setTag(html, /(<meta property="og:url" content=")[^"]*(")/, `$1${SITE_URL}${route}$2`);
  }

  const head = [...(extraHead[route] || []), ...(route && route !== '/' ? [breadcrumbJsonLd(route, title)] : [])];
  // Function replacements, so a "$" in rendered content is never read as a replacement pattern.
  if (head.length) html = setTag(html, /<\/head>/, () => `    ${head.join('\n    ')}\n  </head>`);

  const appHtml = render(url);
  return setTag(html, '<div id="root"></div>', () => `<div id="root">${appHtml}</div>`);
};

for (const [route, meta] of Object.entries(routeMeta)) {
  const file = route === '/' ? 'index.html' : `${route.slice(1)}.html`;
  fs.writeFileSync(path.join(outDir, file), buildPage(route, meta, { route }));
  console.log(`prerendered ${route} -> build/${file}`);
}

fs.writeFileSync(path.join(outDir, '404.html'), buildPage('/404', notFoundMeta, { notFound: true }));
console.log('prerendered 404 -> build/404.html');

fs.rmSync(ssrDir, { recursive: true, force: true });
