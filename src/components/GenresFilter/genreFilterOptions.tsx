import { Film } from "src/entities/film";
import { FilterOptionType } from "src/entities/filterOption";

export const GENRE_FILTER_OPTIONS: FilterOptionType<Film>[] = [
    {
        key: 'all',
        display: 'ALL',
        rule: (films: Film[]) => films,
    },
    {
        key: 'documentary',
        display: 'DOCUMENTARY',
        rule: (films: Film[]) => films.filter((film) => 'documentary' in film.genres),
    },
    {
        key: 'comedy',
        display: 'COMEDY',
        rule: (films: Film[]) => films.filter((film) => 'comedy' in film.genres),
    },
    {
        key: 'horror',
        display: 'HORROR',
        rule: (films: Film[]) => films.filter((film) => 'horror' in film.genres),
    },
    {
        key: 'crime',
        display: 'CRIME',
        rule: (films: Film[]) => films.filter((film) => 'crime' in film.genres),
    },
]