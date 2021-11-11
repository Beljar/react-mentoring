import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';

const initialMovies = {
  totalAmount: 0,
  data: [],
  request: {
    sortBy: '',
    sortOrder: 'desc',
    offset: 0,
    limit: 9,
  },
  offset: 0,
  limit: 9,
};

export const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case 'INIT_LOAD_MOVIES':
      console.log('init');
      return { ...initialMovies, ...action.payload };
    case 'LOAD_MOVIES':
      console.log('load');
      return {
        ...state,
        data: [...state.data, ...action.payload.data],
        request: { ...state.request, offset: state.request.offset + state.request.limit },
      };
    case 'SET_SORTING':
      console.log('sorting');
      console.log(action.payload);
      return { ...initialMovies, request: { ...state.request, offset: 0, sortBy: action.payload } };
    default:
      return state;
  }
};

export const store = createStore(moviesReducer, applyMiddleware(thunk));
