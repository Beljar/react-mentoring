import axios from 'axios';
import { Movie, movieDTOFromMovie } from 'src/entities/movie';

export const apiPostMovie = (movie: Movie) => axios.post('http://localhost:4000/movies', movieDTOFromMovie(movie));
