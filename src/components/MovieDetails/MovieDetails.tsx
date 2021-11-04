import React from "react";
import { Movie } from "src/entities/film";

import scss from './movieDetails.scss';

type Props = {
    movie: Movie;
}

export const MovieDetails: React.FC<Props> = ({ movie }) => {
    return (
        <div className={scss.root}>
            <img className={scss.cover} src={movie.coverUrl} alt={movie.title} />
            <div className={scss.textBlock}>
                <h3 className={scss.title}>{movie.title}</h3>
                <div>{movie.rating}</div>
                <div className={scss.year}>{new Date(movie.releaseDate).getFullYear()}</div>
                <div>{movie.duration}</div>
                <div>{movie.description}</div>
            </div>
        </div>
    )
}