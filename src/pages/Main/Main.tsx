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
import { setSearch } from 'src/actions';
import { Search } from './Search';

import { Content } from './Content';
import { Footer } from './Footer/Footer';

import scss from './main.scss';

type Props = {
  onSearch?: (searchString) => void;
};

export const Main: React.FC<Props> = ({ onSearch }) => {
  const { search } = useLocation();
  const params = new URLSearchParams(search);
  const searchQuery = params.get('search');
  React.useEffect(() => {
    onSearch(searchQuery || '');
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
});

export default connect(null, mapDispatchToProps)(Main);
