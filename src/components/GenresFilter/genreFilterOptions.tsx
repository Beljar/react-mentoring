import { Movie } from 'src/entities/movie';
import { FilterOptionType } from 'src/entities/filterOption';
import { GENRES_MAIN } from 'src/entities/genre';
import { Option } from 'src/types';

export const GENRE_FILTER_OPTIONS: Option<string>[] = [
  {
    label: 'all',
    value: '',
  },
  ...GENRES_MAIN,
];
