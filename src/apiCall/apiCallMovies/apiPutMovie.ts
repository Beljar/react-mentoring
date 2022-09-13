import axios from 'axios';
import { Movie, movieDTOFromMovie } from 'src/entities/movie';

export const apiPutMovie = (movie: Movie) =>
  axios.put(`${process.env.API_ROOT}/movies`, { ...movieDTOFromMovie(movie), id: Number(movie.id) });
