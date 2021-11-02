import * as React from 'react';
import { FILMS } from 'src/entities/film/films';
import { MovieCard } from '../MovieCard';

import scss from './styles.scss';

export const MovieCardsLst = () => {
    return <div className={scss.movieList}>{FILMS.map((movie) => <MovieCard className={scss.card} key={movie.id} movie={movie}/>)}</div>
}
