import axios from 'axios';
import { Movie, movieDTOFromMovie } from 'src/entities/movie';

export const apiPostMovie = (movie: Movie) => axios.post(`${process.env.API_ROOT}/movies`, movieDTOFromMovie(movie));
