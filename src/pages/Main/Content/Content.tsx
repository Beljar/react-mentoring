import * as React from 'react';
import { GenresFilter } from 'src/components/GenresFilter';

import { MovieCardsLst } from 'src/components/MovieCardsList/MovieCardsList';
import { MovieCount } from 'src/components/MovieCount';
import { Sorter } from 'src/components/Sorter';
import { Separator } from 'src/components/ui/Separator';

import scss from './styles.scss';

export const Content = () => {
    const [activeFilterKey, setActiveFilterKey] = React.useState('all');
    return <main className={scss.main}>
        <div className={scss.filterPanel}>
            <GenresFilter activeFilterKey={activeFilterKey} onChange={setActiveFilterKey} />
            <Sorter />
        </div>
        <Separator />
        <MovieCount count={39} />
        <MovieCardsLst />
    </main>
}
