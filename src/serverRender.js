import * as React from 'react';

import { renderToString } from 'react-dom/server';
import { Navigator } from 'react-router-dom';
import { StaticRouter } from 'react-router-dom/server';
import { loadMovies } from 'src/actions';
import { apiGetMovies } from 'src/apiCall/apiCallMovies';

import { App } from './App';
import { configureStore } from './reducers/configureStore';
import { initialMovies } from './reducers/movies';

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
      console.log('navigate');
      console.log(to);
      res.writeHead(302, {
        Location: to,
      });
      res.end();
      console.log('ended');
      console.log(res.finished);
      return <></>;
    };

    const store = configureStore(initialMovies);

    apiGetMovies(store.getState().request).then((result) => {
      store.dispatch({ type: 'LOAD_MOVIES', payload: result });
      console.log(store)
      console.log(store.getState());
      const htmlString = renderToString(<App AppRouter={StaticRouter} location={req.url} AppNavigate={Nav} store={store} />);
      console.log('send html');
      if (!res.finished) {
        res.send(renderHTML(htmlString));
      }
    });

    //const renderRoot = () => <App AppRouter={StaticRouter} location={req.url} AppNavigate={Nav} store={store} />;

    //renderToString(renderRoot());

    //store.dispatch(loadMovies());
  };
}
