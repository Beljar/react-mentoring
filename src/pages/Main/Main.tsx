import * as React from 'react';
import { Header } from 'src/pages/Main/Header';
import { Search } from './Search';
import { PageWrapper } from 'src/components/PageWrapper';

import { Button } from 'src/components/ui/Button';
import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';

export const Main:React.FC = () => (<PageWrapper>
    <Header />
    <Search/>
    <Content />
    <Footer />
    </PageWrapper>)
