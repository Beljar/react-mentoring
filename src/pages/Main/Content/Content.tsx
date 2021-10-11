import * as React from 'react';
import { GenresFilter } from 'src/components/GenresFilter';

import { MovieCardsLst } from 'src/components/MovieCardsList/MovieCardsList';
import { Sorter } from 'src/components/Sorter';

import scss from './styles.scss';

export const Content = () => {
    const [activeFilterKey, setActiveFilterKey] = React.useState('all');
    return <main className={scss.main}>
        <div className={scss.filterPanel}>
            <GenresFilter activeFilterKey={activeFilterKey} onChange={setActiveFilterKey} />
            <Sorter />
        </div>
        <MovieCardsLst />

    </main>
}
