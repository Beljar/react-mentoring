import * as React from 'react';
import { emptyMovie, Movie } from 'src/entities/movie';
import { Form } from '../ui/Form';
import { MOVIE_FORM_FIELDS } from './movieFormFields';

import scss from './movieForm.scss';

type Props = {
  title: string;
  movie?: Movie;
  onSubmit?: (movie: Movie) => void;
};

export const MovieForm: React.FC<Props> = ({ movie = emptyMovie, title, onSubmit }) => (
  <Form<Movie>
    className={scss.form}
    title={title}
    fields={MOVIE_FORM_FIELDS}
    initialValues={movie}
    onSubmit={(movie) => {
      onSubmit?.(movie);
    }}
  />
);
