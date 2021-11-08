import React from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

import { Main } from './pages/Main';
import { moviesReducer, store } from './reducers/movies';



export const App = () => (
  <Provider store={store}>
    <Main />
  </Provider>
);
