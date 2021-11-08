import { Movie } from 'src/entities/film';

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
    rule: (movies: Movie[]) => movies.sort((a, b) => b.rating - a.rating),
  },
  {
    label: 'DURATION',
    value: '3',
    rule: (movies: Movie[]) => movies.sort((a, b) => b.duration - a.duration),
  },
];
