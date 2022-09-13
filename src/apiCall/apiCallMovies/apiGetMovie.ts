import axios from 'axios';
import { Movie, movieFromMovieDTO } from 'src/entities/movie';

export const apiGetMovie = (id: string): Promise<Movie> =>
  axios.get(`${process.env.API_ROOT}/movies/${id}`).then((res) => movieFromMovieDTO(res.data));
