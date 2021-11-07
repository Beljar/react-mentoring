import { Genre } from './GenreType';

export const GENRES_MAIN: Genre[] = [
  {
    id: 'documentary',
    nameShort: 'documentary',
  },
  {
    id: 'comedy',
    nameShort: 'comedy',
  },
  {
    id: 'horror',
    nameShort: 'horror',
  },
  {
    id: 'crime',
    nameShort: 'crime',
  },
];

export const GENRES_SUPPLEMENTARY: Genre[] = [
  {
    id: 'action',
    nameShort: 'action',
  },
  {
    id: 'adventure',
    nameShort: 'adventure',
  },
  {
    id: 'drama',
    nameShort: 'drama',
  },
  {
    id: 'biography',
    nameShort: 'biography',
  },
  {
    id: 'music',
    nameShort: 'music',
  },
  {
    id: 'oscar',
    nameShort: 'oscar',
    nameFull: 'Oscar winning Movie',
  },
];

export const GENRES: Genre[] = [...GENRES_MAIN, ...GENRES_SUPPLEMENTARY];
