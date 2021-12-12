import { MOVIES_INITIAL_REQUEST } from 'src/entities/movie';

export const initialMovies = {
  totalAmount: 0,
  data: [],
  request: MOVIES_INITIAL_REQUEST,
  isLoading: false,
};

export const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case 'DROP_OFFSET':
      return { ...state, request: { ...state.request, offset: 0 } };
    case 'INIT_LOAD_MOVIES':
      return {
        ...state,
        ...action.payload,
        request: { ...state.request, offset: state.request.offset + state.request.limit },
      };
    case 'LOAD_MOVIES':
      return {
        ...state,
        ...action.payload,
        data: [...state.data, ...action.payload.data],
        request: { ...state.request, offset: state.request.offset + state.request.limit },
      };
    case 'SET_SORTING':
      return { ...initialMovies, request: { ...state.request, offset: 0, sortBy: action.payload } };
    case 'SET_GENRE_FILTER':
      return { ...initialMovies, request: { ...state.request, offset: 0, searchBy: 'genres', search: action.payload } };
    case 'SET_SEARCH':
      return { ...initialMovies, request: { ...state.request, offset: 0, searchBy: 'title', search: action.payload } };
    case 'SET_LOADING':
      return {
        ...state,
        isLoading: action.payload,
      };
    default:
      return state;
  }
};
