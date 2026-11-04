import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App';

export { default as routeMeta, notFoundMeta } from './routeMeta';
export { default as faqs, faqPlainText } from './faqData';

export const render = (url) => renderToString(
  <React.StrictMode>
    <StaticRouter location={url}>
      <App />
    </StaticRouter>
  </React.StrictMode>
);
