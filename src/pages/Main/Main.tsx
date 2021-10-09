import * as React from 'react';
import { Header } from 'src/pages/Main/Header';
import { ContentWrapper } from 'src/components/ContentWrapper';

import { Button } from 'src/components/ui/Button';
import { Content } from './Content/Content';

export const Main:React.FC = () => (<ContentWrapper>
    <Header />
    <Content />
    </ContentWrapper>)
