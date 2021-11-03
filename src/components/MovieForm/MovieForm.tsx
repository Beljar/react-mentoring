import * as React from 'react';
import { Form } from '../ui/Form';
import { MOVIE_FORM_FIELDS } from './movieFormFields';

import scss from './movieForm.scss';
import { Movie } from 'src/entities/film';

const emptyMovie: Movie = {
    id: '',
    title: '',
    genres: [],
    releaseDate: '',
    duration: null,
    rating: null,
    url: '',
    description: '',
}

type Props = {
    title: string;
    movie?: Movie;
    onSubmit?: (movie: Movie) => void;
}

export const MovieForm: React.FC<Props> = ({ movie = emptyMovie, title, onSubmit }) => {
    return <Form<Movie> className={scss.form} title={title} fields={MOVIE_FORM_FIELDS} initialValues={movie} onSubmit={(movie) => {
        onSubmit?.(movie);
    }} />
}