import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';
import { configureStore } from './reducers/configureStore';
import { IAppState } from './reducers/types';
import { Store } from 'redux';
import { initialMovies } from './reducers/movies';

type AppProps = {
  AppRouter?: typeof BrowserRouter | typeof StaticRouter;
  location?: string;
  AppNavigate: typeof Navigate;
  store: Store<IAppState>;
};

export const App = ({ AppRouter = BrowserRouter, location, AppNavigate = Navigate, store = configureStore(initialMovies)}: AppProps): JSX.Element => {
  console.log(AppRouter);
  return (
    <AppRouter location={location}>
      <Routes>
        <Route path="/" element={<AppNavigate to="search" />} />
        <Route
          path="search"
          element={
            <Provider store={store}>
              <Main />
            </Provider>
          }
        />
        <Route
          path="search/:searchQuery"
          element={
            <Provider store={store}>
              <Main />
            </Provider>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AppRouter>
  );
};
