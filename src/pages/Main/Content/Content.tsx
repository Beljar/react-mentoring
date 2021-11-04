import * as React from 'react';
import { GenresFilter } from 'src/components/GenresFilter';

import { FILMS } from 'src/entities/film/films';
import { Movie } from 'src/entities/film';

import { MovieCardsLst } from 'src/components/MovieCardsList/MovieCardsList';
import { MovieCount } from 'src/components/MovieCount';
import { Sorter } from 'src/components/Sorter';
import { Separator } from 'src/components/ui/Separator';

import scss from './styles.scss';

type Props = {
    onMovieClick: (movie: Movie) => void; 
}

export const Content: React.FC<Props> = ({ onMovieClick }) => {
    const [activeFilterKey, setActiveFilterKey] = React.useState<string | number>('all');
    const [movies, setMovies] = React.useState(FILMS);
    
    return <main className={scss.main}>
        <div className={scss.filterPanel}>
            <GenresFilter activeFilterKey={activeFilterKey} onChange={(filterOption) => setActiveFilterKey(filterOption.key)} />
            <Sorter onChange={(rule) => {
                setMovies([...rule(movies)]);
            }}/>
        </div>
        <Separator />
        <MovieCount count={39} />
        <MovieCardsLst movies={movies} onMovieClick={onMovieClick} />
    </main>
}
