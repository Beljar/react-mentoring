import { Genre } from "./GenreType";

export const GENRES_MAIN: Genre[] = [
    {
        id: 1,
        nameShort: 'documentary',
    },
    {
        id: 2,
        nameShort: 'comedy',
    },
    {
        id: 3,
        nameShort: 'horror',
    },
    {
        id: 4,
        nameShort: 'crime',
    },
]

export const GENRES_SUPPLEMENTARY: Genre[] = [
    {
        id: 5,
        nameShort: 'action',
        nameFull: 'Action & Adventure',
    },
    {
        id: 6,
        nameShort: 'drama',
    },
    {
        id: 7,
        nameShort: 'biography',
    },
    {
        id: 8,
        nameShort: 'music',
    },
    {
        id: 9,
        nameShort: 'oscar',
        nameFull: 'Oscar winning Movie',
    },
]

export const GENRES: Genre[] = [...GENRES_MAIN, ...GENRES_SUPPLEMENTARY];
