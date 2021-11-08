import * as React from 'react';
import { FILMS } from 'src/entities/film/films';
import { MovieCard } from '../MovieCard';

import scss from './styles.scss';

export const MovieCardsLst = () => (
  <div className={scss.movieList}>
    {FILMS.map((film) => (
      <MovieCard className={scss.card} key={film.id} film={film} />
    ))}
  </div>
);
