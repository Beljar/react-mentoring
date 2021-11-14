import moment from 'moment';
import { emptyMovie, Movie } from '.';

export const movieDTOFromMovie = (movie: Movie) => ({
  title: movie.title,
  genres: movie.genres,
  release_date: moment(movie.releaseDate).format('YYYY-MM-DD'),
  runtime: Number(movie.runtime),
  vote_average: Number(movie.voteAverage),
  poster_path: movie.posterPath,
  overview: movie.overview,
});
