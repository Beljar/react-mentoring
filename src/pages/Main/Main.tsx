import * as React from 'react';
import { Header } from 'src/pages/Main/Header';
import { PageWrapper } from 'src/components/PageWrapper';
import { Button } from 'src/components/ui/Button';
import { ErrorBoundary } from 'src/components/ErrorBoundary';
import { Search } from './Search';

import { Content } from './Content/Content';
import { Footer } from './Footer/Footer';

export const Main: React.FC = () => (
  <PageWrapper>
    <Header />
    <Search />
    <ErrorBoundary>
      <Content />
    </ErrorBoundary>
    <Footer />
  </PageWrapper>
);
