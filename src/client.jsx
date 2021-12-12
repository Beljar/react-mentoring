import React from 'react';
import { hydrate } from 'react-dom';

import { App } from './App';
import { configureStore } from './reducers/configureStore';
import { initialMovies } from './reducers/movies';

const store = configureStore(initialMovies);

const app = <App store={store} />;

hydrate(app, document.getElementById('root'));
