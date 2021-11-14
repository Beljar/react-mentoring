import { Option } from 'src/types';

export const GENRES_MAIN: Option<string>[] = [
  {
    label: 'documentary',
    value: 'documentary',
  },
  {
    label: 'comedy',
    value: 'comedy',
  },
  {
    label: 'horror',
    value: 'horror',
  },
  {
    label: 'crime',
    value: 'crime',
  },
];

export const GENRES_SUPPLEMENTARY: Option<string>[] = [
  {
    label: 'action',
    value: 'action',
  },
  {
    label: 'adventure',
    value: 'adventure',
  },
  {
    label: 'drama',
    value: 'drama',
  },
  {
    label: 'biography',
    value: 'biography',
  },
  {
    label: 'music',
    value: 'music',
  },
];

export const GENRES: Option<string>[] = [...GENRES_MAIN, ...GENRES_SUPPLEMENTARY];
