import * as React from 'react';
import { GenresFilter } from 'src/components/GenresFilter';

import { MovieCardsLst } from 'src/components/MovieCardsList/MovieCardsList';

import scss from './styles.scss';

export const Content = () => {
    const [activeFilterKey, setActiveFilterKey] = React.useState('all');
return <main className={scss.main}> 
    <GenresFilter activeFilterKey={activeFilterKey} onChange={setActiveFilterKey}/>
    <MovieCardsLst />
</main>}
