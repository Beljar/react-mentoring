import axios from 'axios';
import { movieFromMovieDTO } from 'src/entities/movie';

export const apiGetMovies = (req) =>
  axios
    .get(`http://localhost:4000/movies?${new URLSearchParams(req).toString()}`)
    .then(({ data }) => ({ ...data, data: data.data.map(movieFromMovieDTO) }));
