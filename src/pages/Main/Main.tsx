import * as React from 'react';
import { Header } from 'src/pages/Main/Header';
import { Search } from './Search';
import { PageWrapper } from 'src/components/PageWrapper';

import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Movie } from 'src/entities/film';

import scss from './main.scss';
import { MovieDetails } from 'src/components/MovieDetails';

export const Main:React.FC = () => {
   const [movie, setMovie] = React.useState<Movie>();
   return (<div id='main' className={scss.main}>
   <PageWrapper>
       <Header className={movie ? scss.background : scss.absolute}/>
       {movie ? <MovieDetails movie={movie} /> : <Search/>}
       <ErrorBoundary>
          <Content onMovieClick={setMovie} />
       </ErrorBoundary>
       <Footer />
       </PageWrapper>
</div>
    )
   }
