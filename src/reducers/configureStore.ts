import { applyMiddleware, createStore, Store } from 'redux';
import thunk from 'redux-thunk';
import { moviesReducer } from './movies';
import { IAppState } from './types';

export const configureStore = (initialState: IAppState): Store<IAppState> =>
  createStore(moviesReducer, initialState, applyMiddleware(thunk));
