import { Movie } from 'src/entities/movie';
import { moviesReducer } from './movies';

const MOCK_MOVIES: Movie[] = [
  {
    id: '1',
    title: 'Pulp Fiction',
    genres: ['action'],
    releaseDate: '10-10-2004',
    posterPath: '/assets/covers/pulp_fiction.jpg',
    voteAverage: 8.9,
    runtime: 154,
  },
  {
    id: '2',
    title: 'Bohemian Rhapsody',
    genres: ['drama', 'biography', 'music'],
    releaseDate: '12-01-2003',
    posterPath: '/assets/covers/pulp_fiction.jpg',
    voteAverage: 8.9,
    runtime: 154,
  },
  {
    id: '3',
    title: 'Kill Bill: Vol 2',
    genres: ['action', 'crime'],
    releaseDate: '01-01-1994',
    posterPath: '/assets/covers/kill_bill.jpg',
    voteAverage: 8.9,
    runtime: 124,
  },
  {
    id: '4',
    title: 'Avengers: War of Infinity',
    genres: ['action'],
    releaseDate: '01-31-2004',
    posterPath: '/assets/covers/kill_bill.jpg',
    voteAverage: 8.9,
    runtime: 124,
  },
  {
    id: '5',
    title: 'Pulp Fiction',
    genres: ['action'],
    releaseDate: '10-10-2004',
    posterPath: '/assets/covers/pulp_fiction.jpg',
    voteAverage: 8.9,
    runtime: 154,
  },
  {
    id: '6',
    title: 'Bohemian Rhapsody',
    genres: ['drama', 'biography', 'music'],
    releaseDate: '12-01-2003',
    posterPath: '/assets/covers/pulp_fiction.jpg',
    voteAverage: 8.9,
    runtime: 154,
  },
  {
    id: '7',
    title: 'Kill Bill: Vol 2',
    genres: ['action', 'crime'],
    releaseDate: '01-01-1994',
    posterPath: '/assets/covers/kill_bill.jpg',
    voteAverage: 8.9,
    runtime: 124,
  },
  {
    id: '8',
    title: 'Avengers: War of Infinity',
    genres: ['action'],
    releaseDate: '01-31-2004',
    posterPath: '/assets/covers/kill_bill.jpg',
    voteAverage: 8.9,
    runtime: 124,
  },
  {
    id: '9',
    title: 'Pulp Fiction',
    genres: ['action'],
    releaseDate: '10-10-2004',
    posterPath: '/assets/covers/pulp_fiction.jpg',
    voteAverage: 8.9,
    runtime: 154,
  },
];

const SORTING = 'raiting';

const GENRE = 'crime';

const SEARCH_STRING = 'lord of the ring';

const expectedInitialRequest = {
  sortBy: 'release_date',
  sortOrder: 'desc',
  searchBy: 'title',
  search: '',
  offset: 0,
  limit: 9,
};

const expectedRequestAfterLoading = {
  sortBy: 'release_date',
  sortOrder: 'desc',
  searchBy: 'title',
  search: '',
  offset: 9,
  limit: 9,
};

const expectedInitialState = {
  totalAmount: 0,
  data: [],
  request: expectedInitialRequest,
  isLoading: false,
};

const expectedStateAfterLoading = {
  totalAmount: MOCK_MOVIES.length,
  data: MOCK_MOVIES,
  request: expectedRequestAfterLoading,
  isLoading: false,
};

const loadMoviesAction = {
  type: 'LOAD_MOVIES',
  payload: { data: MOCK_MOVIES, totalAmount: MOCK_MOVIES.length },
};

const initLoadMovies = {
  type: 'INIT_LOAD_MOVIES',
};

const dropOffsetAction = {
  type: 'DROP_OFFSET',
};

const setSorting = {
  type: 'SET_SORTING',
  payload: SORTING,
};

const setGenreFilter = {
  type: 'SET_GENRE_FILTER',
  payload: GENRE,
};

const setSearch = {
  type: 'SET_SEARCH',
  payload: SEARCH_STRING,
};

const setLoading = {
  type: 'SET_LOADING',
  payload: true,
};

describe('reducer tests', () => {
  it('should return the initial state', () => {
    expect(moviesReducer(undefined, {})).toEqual(expectedInitialState);
  });
  it('should load movies', () => {
    expect(moviesReducer(expectedInitialState, loadMoviesAction)).toEqual(expectedStateAfterLoading);
  });
  it('should drop offset', () => {
    expect(moviesReducer(expectedStateAfterLoading, dropOffsetAction).request.offset).toBe(0);
  });
  it('should accumulate loaded movies', () => {
    expect(moviesReducer(expectedStateAfterLoading, loadMoviesAction).data.length).toBe(2 * MOCK_MOVIES.length);
  });
  it('should rewright loaded movies on initial load', () => {
    expect(moviesReducer(expectedStateAfterLoading, initLoadMovies).data).toEqual(MOCK_MOVIES);
  });
  it('should set sorting', () => {
    expect(moviesReducer(expectedInitialState, setSorting)).toEqual({
      ...expectedInitialState,
      request: { ...expectedInitialRequest, sortBy: SORTING },
    });
  });
  it('should set genre', () => {
    expect(moviesReducer(expectedStateAfterLoading, setGenreFilter)).toEqual({
      ...expectedInitialState,
      request: { ...expectedInitialRequest, search: GENRE, searchBy: 'genres' },
    });
  });
  it('should set searching', () => {
    expect(moviesReducer(expectedStateAfterLoading, setSearch)).toEqual({
      ...expectedInitialState,
      request: { ...expectedInitialRequest, search: SEARCH_STRING, searchBy: 'title' },
    });
  });
  it('should set loading', () => {
    expect(moviesReducer(expectedInitialState, setLoading)).toEqual({
      ...expectedInitialState,
      isLoading: true,
    });
  });
});
