import React from 'react';
import { Movie } from 'src/entities/film';
import { genresToString } from 'src/utils/genresTostring';
import cn from 'classnames';

import scss from './movieDetails.scss';
import { minutesToString } from 'src/utils/minutesToString';

type Props = {
  movie: Movie;
};

export const MovieDetails: React.FC<Props> = ({ movie }) => (
  <div className={scss.root}>
    <img className={scss.cover} src={movie.coverUrl} alt={movie.title} />
    <div className={scss.textBlock}>
      <div className={scss.row}>
        <h3 className={scss.title}>{movie.title}</h3>
        <div className={scss.raiting}>{movie.rating}</div>
      </div>
      <div className={scss.genres}>{genresToString(movie.genres)}</div>
      <div className={cn(scss.row, scss.date)}>
        <div className={scss.year}>{new Date(movie.releaseDate).getFullYear()}</div>
        <div>{minutesToString(movie.duration)}</div>
      </div>
      <div>{movie.description}</div>
    </div>
  </div>
);
