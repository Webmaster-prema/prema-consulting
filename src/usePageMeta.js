import { useEffect } from 'react';
import routeMeta, { notFoundMeta } from './routeMeta';

const SITE_URL = 'https://prema-consulting.net';

const setMeta = (selector, attr, value) => {
  const el = document.head.querySelector(selector);
  if (el) el.setAttribute(attr, value);
};

// Keeps head tags in sync during client-side navigation. The pre-rendered HTML already
// carries the same values for the first page load (see scripts/prerender.mjs).
const usePageMeta = (path) => {
  useEffect(() => {
    const { title, description } = routeMeta[path] || notFoundMeta;
    document.title = title;
    setMeta('meta[name="description"]', 'content', description);
    setMeta('meta[property="og:title"]', 'content', title);
    setMeta('meta[property="og:description"]', 'content', description);
    setMeta('meta[property="og:url"]', 'content', SITE_URL + path);
    setMeta('link[rel="canonical"]', 'href', SITE_URL + path);
  }, [path]);
};

export default usePageMeta;
