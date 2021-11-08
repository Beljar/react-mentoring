import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Main } from './pages/Main';
import { moviesReducer } from './reducers/movies';

const store = createStore(moviesReducer, applyMiddleware(thunk));

export const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
