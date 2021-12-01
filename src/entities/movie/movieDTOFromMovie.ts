import { Movie } from '.';

export const movieDTOFromMovie = (movie: Movie) => ({
  title: movie.title,
  genres: movie.genres,
  release_date: movie.releaseDate,
  runtime: Number(movie.runtime),
  vote_average: Number(movie.voteAverage),
  poster_path: movie.posterPath,
  overview: movie.overview,
});
