import { emptyMovie } from '.';

export const movieFromMovieDTO = (responseDTO) => ({
  id: responseDTO.id,
  title: responseDTO.title,
  genres: responseDTO.genres,
  releaseDate: responseDTO.release_date,
  runtime: responseDTO.runtime,
  voteAverage: responseDTO.vote_average,
  posterPath: responseDTO.poster_path,
  overview: responseDTO.overview,
});
