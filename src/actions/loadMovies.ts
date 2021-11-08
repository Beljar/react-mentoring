import { apiGetMovies } from 'src/apiCall/apiCallMovies/apiGetMovies';

export const loadMovies = () => (dispatch) =>
  apiGetMovies().then((result) => dispatch({ type: 'LOAD_MOVIES', payload: result }));
