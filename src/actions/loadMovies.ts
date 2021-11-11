import { apiGetMovies } from 'src/apiCall/apiCallMovies/apiGetMovies';

export const initLoadMovies = () => (dispatch, getState) => {
  console.log('init');
  apiGetMovies(getState().request).then((result) => dispatch({ type: 'INIT_LOAD_MOVIES', payload: result }));
};

export const loadMovies = () => (dispatch, getState) => {
  console.log('loadMovies');
  apiGetMovies(getState().request).then((result) => dispatch({ type: 'LOAD_MOVIES', payload: result }));
};

export const setSorting = (field) => (dispatch) => {
  dispatch({ type: 'SET_SORTING', payload: field });
  dispatch(loadMovies());
};
