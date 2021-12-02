import { apiGetMovies } from 'src/apiCall/apiCallMovies';

export const initLoadMovies = () => (dispatch, getState) => {
  dispatch({ type: 'DROP_OFFSET' });
  apiGetMovies(getState().request).then((result) => dispatch({ type: 'INIT_LOAD_MOVIES', payload: result }));
};

export const loadMovies = () => (dispatch, getState) => {
  const { isLoading } = getState();
  if (!isLoading) {
    dispatch({ type: 'SET_LOADING', payload: true });
    apiGetMovies(getState().request).then((result) => {
      dispatch({ type: 'LOAD_MOVIES', payload: result });
      dispatch({ type: 'SET_LOADING', payload: false });
    });
  }
};

export const setSorting = (field) => (dispatch, getState) => {
  const {
    request: { sortBy },
  } = getState();
  if (sortBy !== field) {
    dispatch({ type: 'DROP_OFFSET' });
    dispatch({ type: 'SET_SORTING', payload: field });
  }
};

export const setGenreFilter = (genre) => (dispatch) => {
  dispatch({ type: 'DROP_OFFSET' });
  dispatch({ type: 'SET_GENRE_FILTER', payload: genre });
};

export const setSearch = (searchString) => (dispatch) => {
  dispatch({ type: 'DROP_OFFSET' });
  dispatch({ type: 'SET_SEARCH', payload: searchString });
};
