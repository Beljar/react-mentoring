import axios from 'axios';
import { movieFromMovieDTO } from 'src/entities/movie';

export const apiGetMovies = (req) =>
  axios
    .get(`${process.env.API_ROOT}/movies?${new URLSearchParams(req).toString()}`)
    .then(({ data }) => ({ ...data, data: data.data.map(movieFromMovieDTO) }));
