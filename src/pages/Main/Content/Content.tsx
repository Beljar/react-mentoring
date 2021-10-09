import * as React from 'react';

import { MovieCardsLst } from 'src/components/MovieCardsList/MovieCardsList';

import scss from './styles.scss';

export const Content = () => <main className={scss.main}>    
    <MovieCardsLst />
</main>