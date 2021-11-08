import * as React from 'react';
import { Movie } from 'src/entities/film';
import { MovieCard } from '../MovieCard';

import scss from './styles.scss';

type Props = {
  movies: Movie[];
};

export const MovieCardsLst: React.FC<Props> = ({ movies }) => (
  <div className={scss.movieList}>
    {movies.map((movie) => (
      <MovieCard className={scss.card} key={movie.id} movie={movie} />
    ))}
  </div>
);
