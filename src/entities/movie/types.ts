import { GenreName } from '../genre/GenreType';

export type Movie = {
  id: string;
  title: string;
  genres: string[];
  releaseDate: string;
  runtime: number;
  voteAverage: number;
  posterPath?: string;
  url?: string;
  overview?: string;
};

export interface IMoviesRequest {
  sortBy: string;
  sortOrder: string;
  searchBy: string;
  search: string;
  offset: number;
  limit: number;
}
