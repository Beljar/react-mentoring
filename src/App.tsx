import { types } from '@babel/core';
import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom/server';
import { Router, BrowserRouter, Route, Routes, Navigate, Navigator } from 'react-router-dom';

import { Main } from './pages/Main';
import { NotFound } from './pages/NotFound';
import { store } from './reducers/movies';

type AppProps = {
  AppRouter?: typeof BrowserRouter | typeof StaticRouter;
  location?: string;
  AppNavigate: typeof Navigate;
};

export const App = ({ AppRouter = BrowserRouter, location, AppNavigate = Navigate }: AppProps): JSX.Element => {
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
