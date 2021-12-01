import * as React from 'react';
import { Movie } from 'src/entities/movie';
import { MovieCard } from '../MovieCard';

import scss from './styles.scss';

type Props = {
  movies: Movie[];
  onMovieClick: (movie: Movie) => void;
};

export const MovieCardsLst: React.FC<Props> = ({ movies, onMovieClick }) => (
  <div className={scss.movieList}>
    {movies.map((movie) => (
      <MovieCard className={scss.card} key={movie.id} movie={movie} onClick={() => onMovieClick(movie)} />
    ))}
  </div>
);
