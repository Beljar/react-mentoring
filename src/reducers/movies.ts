import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialMovies = {
  totalAmount: 0,
  data: [],
  request: {
    sortBy: undefined,
    sortOrder: 'desc',
  },
  offset: 0,
  limit: 9,
};

export const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return { ...action.payload, request: state.request };
    case 'SET_SORTING':
      console.log('sorting')
      console.log(action.payload)
      return { ...state, request: { ...state.request, sortBy: action.payload } };
    default:
      return state;
  }
};

export const store = createStore(moviesReducer, applyMiddleware(thunk));
