import * as React from 'react';

import { renderToString } from 'react-dom/server';
import { Navigator } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';

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
    console.log('ssr');
    console.log(req.url);

    const Nav = ({ to }) => {
      console.log('navigate')
      console.log(to);
      res.writeHead(302, {
        Location: to,
      });
      res.end();
      return;
      return <></>;
    };

    const htmlString = renderToString(<App AppRouter={StaticRouter} location={req.url} AppNavigate={Nav} />);

    res.send(renderHTML(htmlString));
  };
}
