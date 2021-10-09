import * as React from 'react';
import { Header } from 'src/components/Header';
import { ContentWrapper } from 'src/components/ContentWrapper';

import { Button } from 'src/components/ui/Button';
import { MovieCardsLst } from 'src/components/MovieCardsList/MovieCardsList';

export const Main:React.FC = () => (<ContentWrapper>
    <Header />
    <MovieCardsLst />
    </ContentWrapper>)
