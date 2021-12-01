import axios from 'axios';
import { Movie, movieDTOFromMovie } from 'src/entities/movie';

export const apiPutMovie = (movie: Movie) =>
  axios.put('http://localhost:4000/movies', { ...movieDTOFromMovie(movie), id: Number(movie.id) });
