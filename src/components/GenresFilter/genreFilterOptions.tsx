import { Movie } from "src/entities/film";
import { FilterOptionType } from "src/entities/filterOption";
import { GENRES_MAIN } from "src/entities/genre";

export const GENRE_FILTER_OPTIONS: FilterOptionType<Movie>[] = [
    {
        key: 'all',
        display: 'ALL',
        rule: (films: Movie[]) => films,
    },
    ...GENRES_MAIN.map((genre) => ({
        key: genre.nameShort,
        display: genre.nameFull || genre.nameShort.toUpperCase(),
        rule: (films: Movie[]) => films.filter((film) => genre.id in film.genres),
    })),
]