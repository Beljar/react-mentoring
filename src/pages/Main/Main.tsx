import * as React from 'react';
import { Header } from 'src/pages/Main/Header';
import { PageWrapper } from 'src/components/PageWrapper';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Movie } from 'src/entities/movie';
import { MovieDetails } from 'src/components/MovieDetails';
import { AddMovieButton } from 'src/components/AddMovieButton/AddMovieButton';
import IconSearch from 'src/components/ui/Icons/IconSearch.svg';
import { useLocation } from 'react-router-dom';
import { connect } from 'react-redux';
import { loadMovies, setGenreFilter, setSearch, setSorting } from 'src/actions';
import { Search } from './Search';

import { Content } from './Content';
import { Footer } from './Footer/Footer';

import scss from './main.scss';

type Props = {
  onSearch?: (searchString: string) => void;
  onFilter?: (genre: string) => void;
  onSort?: (sortField: string) => void;
  onLoad?: () => void;
};

export const Main: React.FC<Props> = ({ onSearch, onFilter, onSort, onLoad }) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const searchQuery = params.get('search');
  const searchBy = params.get('searchBy');
  const sortBy = params.get('sortBy');
  React.useEffect(() => {
    if (searchBy === 'genre' && searchQuery) {
      onFilter(searchQuery);
    } else {
      onSearch(searchQuery || '');
    }
    if (sortBy) {
      onSort(sortBy);
    }
    onLoad();
  });
  const [movie, setMovie] = React.useState<Movie>();
  const searchBtn = (
    <div className={scss.clickable} onClick={() => setMovie(undefined)}>
      <IconSearch />
    </div>
  );
  return (
    <div id="main" className={scss.main}>
      <PageWrapper>
        <Header className={movie ? scss.background : scss.absolute}>{movie ? searchBtn : <AddMovieButton />}</Header>
        {movie ? <MovieDetails movie={movie} /> : <Search />}
        <ErrorBoundary>
          <Content onMovieClick={setMovie} />
        </ErrorBoundary>
        <Footer />
      </PageWrapper>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onSearch: (searchString) => dispatch(setSearch(searchString)),
  onFilter: (genre: string) => dispatch(setGenreFilter(genre)),
  onSort: (sortField: string) => dispatch(setSorting(sortField)),
  onLoad: () => dispatch(loadMovies()),
});

export default connect(null, mapDispatchToProps)(Main);
