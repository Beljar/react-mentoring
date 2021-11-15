import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';

import { Main } from './pages/Main';
import { store } from './reducers/movies';

export const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<Navigate to="search" />} />
      <Route path="search">
        <Route
          path=":searchParam"
          element={
            <Provider store={store}>
              <Main />
            </Provider>
          }
        />
        <Route
          path=""
          element={
            <Provider store={store}>
              <Main />
            </Provider>
          }
        />
      </Route>
    </Routes>
  </Router>
);
