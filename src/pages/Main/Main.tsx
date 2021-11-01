import * as React from 'react';
import { Header } from 'src/pages/Main/Header';
import { Search } from './Search';
import { PageWrapper } from 'src/components/PageWrapper';

import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';
import { ErrorBoundary } from 'src/components/ErrorBoundary';

import scss from './main.scss';

export const Main:React.FC = () => (<div id='main' className={scss.main}>
   <PageWrapper>
       <Header />
       <Search/>
       <ErrorBoundary>
          <Content />
       </ErrorBoundary>
       <Footer />
       </PageWrapper>
</div>
    )
