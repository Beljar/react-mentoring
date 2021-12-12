import { IMoviesRequest, Movie } from 'src/entities/movie';

export interface IAppState {
  totalAmount: number;
  data: Movie[];
  request: IMoviesRequest;
  isLoading: boolean;
}
