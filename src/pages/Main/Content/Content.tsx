import * as React from 'react';
import { GenresFilter } from 'src/components/GenresFilter';

import { FILMS } from 'src/entities/movie/movie';
import { Movie } from 'src/entities/movie';
import { loadMovies } from 'src/actions';

import { MovieCardsLst } from 'src/components/MovieCardsList/MovieCardsList';
import { MovieCount } from 'src/components/MovieCount';
import { Sorter } from 'src/components/Sorter';
import { Separator } from 'src/components/ui/Separator';

import { apiGetMovies } from 'src/apiCall/apiCallMovies/apiGetMovies';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import scss from './styles.scss';

type Props = {
  onMovieClick: (movie: Movie) => void;
  movies?: Movie[];
  getMovies?: () => void;
  totalAmount?: number;
  dispatch?: Dispatch<{ type: string; payload: object }>;
};

const Content: React.FC<Props> = ({ movies, totalAmount, getMovies, dispatch, onMovieClick }) => {
  const [activeFilterKey, setActiveFilterKey] = React.useState<string | number>('all');
  console.log(movies);
  React.useEffect(() => {
    getMovies();
  }, []);

  return (
    <main className={scss.main}>
      <div className={scss.filterPanel}>
        <GenresFilter
          activeFilterKey={activeFilterKey}
          onChange={(filterOption) => setActiveFilterKey(filterOption.key)}
        />
        <Sorter
          onChange={(rule) => {
            rule(dispatch);
          }}
        />
      </div>
      <Separator />
      <MovieCount count={totalAmount} />
      <MovieCardsLst movies={movies} onMovieClick={onMovieClick} />
    </main>
  );
};

const mapStateToProps = (state) => ({
  movies: state.data,
  totalAmount: state.totalAmount,
});

const mapDispatchToProps = (dispatch) => ({
  dispatch,
  getMovies: () => dispatch(loadMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
