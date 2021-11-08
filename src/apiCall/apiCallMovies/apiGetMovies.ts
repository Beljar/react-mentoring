import axios from 'axios';
import { movieFromMovieDTO } from 'src/entities/movie';

export const apiGetMovies = () =>
  axios
    .get('http://localhost:4000/movies?limit=9')
    .then(({ data }) => ({ ...data, data: data.data.map(movieFromMovieDTO) }));
