import { Movie } from 'src/entities/movie';

export const SORTINGS = [
  {
    label: 'RELEASE DATE',
    value: '1',
    rule: (movies: Movie[]) =>
      movies.sort((a, b) => new Date(b.releaseDate).getTime() - new Date(a.releaseDate).getTime()),
  },
  {
    label: 'RATING',
    value: '2',
    rule: (movies: Movie[]) => movies.sort((a, b) => b.voteAverage - a.voteAverage),
  },
  {
    label: 'DURATION',
    value: '3',
    rule: (movies: Movie[]) => movies.sort((a, b) => b.runtime - a.runtime),
  },
];
