import { apiGetMovies } from 'src/apiCall/apiCallMovies/apiGetMovies';

export const loadMovies = () => (dispatch, getState) => {
  console.log('loadm')
  console.log(getState())
  apiGetMovies(getState().request).then((result) => dispatch({ type: 'LOAD_MOVIES', payload: result }))};

export const setSorting = (field) => (dispatch) => {
  dispatch({ type: 'SET_SORTING', payload: field });
  dispatch(loadMovies());
};
