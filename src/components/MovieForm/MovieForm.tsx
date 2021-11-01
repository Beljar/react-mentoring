import * as React from 'react';
import { Form } from '../ui/Form';
import { MOVIE_FORM_FIELDS } from './movieFormFields';

import scss from './movieForm.scss';
import { Movie } from 'src/entities/film';

const initialData = {
    id: '',
    title: '',
    genres: [],
    releaseDate: '',
    duration: '',
    rating: '',
    url: '',
    description: '',
}

export const MovieForm: React.FC = () => {
    return <Form className={scss.form} title='ADD MOVIE' fields={MOVIE_FORM_FIELDS} initialValues={initialData} />
}