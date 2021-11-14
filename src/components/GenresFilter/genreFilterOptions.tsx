import { Movie } from 'src/entities/movie';
import { FilterOptionType } from 'src/entities/filterOption';
import { GENRES_MAIN } from 'src/entities/genre';

export const GENRE_FILTER_OPTIONS: FilterOptionType<Movie>[] = [
  {
    key: 'all',
    display: 'ALL',
    value: '',
    rule: (films: Movie[]) => films,
  },
  ...GENRES_MAIN.map((genre) => ({
    key: genre.id,
    value: genre.id as string,
    display: genre.nameFull || genre.nameShort.toUpperCase(),
    rule: (films: Movie[]) => films.filter((film) => genre.id in film.genres),
  })),
];
