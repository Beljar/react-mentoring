import axios from 'axios';
import { Movie, movieFromMovieDTO } from 'src/entities/movie';

export const apiGetMovie = (id: string): Promise<Movie> =>
  axios.get(`http://localhost:4000/movies/${id}`).then((res) => movieFromMovieDTO(res.data));
