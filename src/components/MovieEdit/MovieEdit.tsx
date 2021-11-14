import * as React from 'react';
import { connect } from 'react-redux';
import { initLoadMovies } from 'src/actions';
import { apiPutMovie } from 'src/apiCall/apiCallMovies';
import { emptyMovie, Movie } from 'src/entities/movie';
import { MovieForm } from '../MovieForm/MovieForm';

type Props = {
  movie: Movie;
  onDone: () => void;
  update?: () => void;
};

export const MovieEdit: React.FC<Props> = ({ movie, onDone, update }) => (
  <MovieForm
    movie={{ ...emptyMovie, ...movie }}
    title="EDIT MOVIE"
    onSubmit={(editedMovie) => {
      apiPutMovie(editedMovie).then(() => {
        update?.();
        onDone();
      });
    }}
  />
);

const mapDispatchToProps = (dispatch) => ({
  update: () => dispatch(initLoadMovies()),
});

export default connect(null, mapDispatchToProps)(MovieEdit);
