import * as React from 'react';
import { GenresFilter } from 'src/components/GenresFilter';

import { FILMS } from 'src/entities/movie/movie';
import { Movie } from 'src/entities/movie';
import { initLoadMovies, loadMovies, setGenreFilter, setSorting } from 'src/actions';

import { MovieCardsLst } from 'src/components/MovieCardsList/MovieCardsList';
import { MovieCount } from 'src/components/MovieCount';
import { Sorter } from 'src/components/Sorter';
import { Separator } from 'src/components/ui/Separator';

import { apiGetMovies } from 'src/apiCall/apiCallMovies/apiGetMovies';
import { connect } from 'react-redux';

import { Dispatch } from 'redux';
import { Loader } from 'src/components/Loader';
import { useLocation } from 'react-router-dom';
import scss from './styles.scss';

type Props = {
  onMovieClick?: (movie: Movie) => void;
  movies?: Movie[];
  onLoad?: () => void;
  onSort?: (field: string) => void;
  onFilter?: (field: string) => void;
  totalAmount?: number;
  isLoading?: boolean;
};

const Content: React.FC<Props> = ({ movies, totalAmount, isLoading, onLoad, onSort, onFilter, onMovieClick }) => {
  React.useEffect(() => {
    document.addEventListener('scroll', (e) => {
      const {
        documentElement: { scrollHeight, clientHeight, scrollTop },
      } = document;
      if (Math.ceil(clientHeight + scrollTop) >= scrollHeight) {
        onLoad();
      }
    });
  }, []);

  return (
    <main className={scss.main}>
      <div className={scss.filterPanel}>
        <GenresFilter
          onChange={(filterOption) => {
            onFilter(filterOption.value);
          }}
        />
        <Sorter
          onChange={(sortBy) => {
            onSort(sortBy);
          }}
        />
      </div>
      <Separator />
      <MovieCount count={totalAmount} />
      <MovieCardsLst movies={movies} onMovieClick={(movie) => onMovieClick?.(movie)} />
      {isLoading && (
        <div className={scss.center}>
          <Loader />
        </div>
      )}
    </main>
  );
};

const mapStateToProps = (state) => ({
  movies: state.data,
  totalAmount: state.totalAmount,
  isLoading: state.isLoading,
});

const mapDispatchToProps = (dispatch) => ({
  onSort: (field: string) => dispatch(setSorting(field)),
  onFilter: (filter: string) => dispatch(setGenreFilter(filter)),
  onLoad: () => dispatch(loadMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Content);
