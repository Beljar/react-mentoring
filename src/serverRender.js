import * as React from 'react';

import { renderToString } from 'react-dom/server';

import { App } from './App';

function renderHTML(html) {
  return `
      <!doctype html>
      <html>
        <head>
          <meta charset=utf-8>
          <title>React Server Side Rendering</title>
        </head>
        <body>
          <div id="root">${html}</div>
          <script src="/main.bundle.js"></script>
        </body>
      </html>
  `;
}

export default function serverRender() {
  return (req, res) => {
    const htmlString = renderToString(<App />);

    res.send(renderHTML(htmlString));
  }
}
