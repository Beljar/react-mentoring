const initialMovies = {
  totalAmount: 0,
  data: [],
  offset: 0,
  limit: 9,
};

export const moviesReducer = (state = initialMovies, action) => {
  switch (action.type) {
    case 'LOAD_MOVIES':
      return action.payload;
    default:
      return state;
  }
};
