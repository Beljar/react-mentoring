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
    year: null,
    url: '',
    description: '',
}

type Props = {
    movie?: Movie;
}

export const MovieForm: React.FC<Props> = ({ movie = emptyMovie }) => {
    return <Form className={scss.form} title='ADD MOVIE' fields={MOVIE_FORM_FIELDS} initialValues={movie} />
}