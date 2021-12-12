import * as React from 'react';
import { useLocation, useParams } from 'react-router';
import { connect } from 'react-redux';

import { Header } from 'src/pages/Main/Header';
import { PageWrapper } from 'src/components/PageWrapper';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Movie } from 'src/entities/movie';
import { MovieDetails } from 'src/components/MovieDetails';
import { AddMovieButton } from 'src/components/AddMovieButton';
import IconSearch from 'src/components/ui/Icons/IconSearch.svg';
import { loadMovies, setGenreFilter, setSearch, setSorting } from 'src/actions';
import { useQuery } from 'src/hooks/useQuery';
import { apiGetMovie } from 'src/apiCall/apiCallMovies';
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
  const [movie, setMovie] = React.useState<Movie>();
  const { searchQuery: searchString } = useParams();
  const [query, setQuery] = useQuery();
  const { searchBy, sortBy, movie: movieId } = query;
  console.log('main');
  //onLoad();
  React.useEffect(() => {
    if (searchBy === 'genre' && searchString) {
      onFilter(searchString);
    } else {
      onSearch(searchString || '');
    }
    if (sortBy) {
      onSort(sortBy);
    }
    if (movieId && movieId !== movie?.id) {
      apiGetMovie(movieId).then(setMovie);
    }
    console.log('loading');
    onLoad();
  });

  const searchBtn = (
    <div
      className={scss.clickable}
      onClick={() => {
        setMovie(undefined);
        setQuery({ movie: undefined });
      }}
    >
      <IconSearch />
    </div>
  );
  return (
    <div id="main" className={scss.main}>
      <PageWrapper>
        <Header className={movie ? scss.background : scss.absolute}>{movie ? searchBtn : <AddMovieButton />}</Header>
        {movie ? <MovieDetails movie={movie} /> : <Search />}
        <ErrorBoundary>
          <Content />
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
