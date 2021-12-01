import React from 'react';
import { Movie } from 'src/entities/movie';
import { genresToString } from 'src/utils/genresTostring';
import cn from 'classnames';

import { minutesToString } from 'src/utils/minutesToString';
import { MovieImage } from 'src/components/MovieImage';

import scss from './movieDetails.scss';

type Props = {
  movie: Movie;
};

export const MovieDetails: React.FC<Props> = ({ movie }) => (
  <div className={scss.root}>
    <MovieImage className={scss.cover} src={movie.posterPath} alt={movie.title} />
    <div className={scss.textBlock}>
      <div className={scss.row}>
        <h3 className={scss.title}>{movie.title}</h3>
        <div className={scss.raiting}>{movie.voteAverage}</div>
      </div>
      <div className={scss.genres}>{genresToString(movie.genres)}</div>
      <div className={cn(scss.row, scss.date)}>
        <div className={scss.year}>{new Date(movie.releaseDate).getFullYear()}</div>
        <div>{minutesToString(movie.runtime)}</div>
      </div>
      <div>{movie.overview}</div>
    </div>
  </div>
);
