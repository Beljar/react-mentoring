import * as React from 'react';
import { Logo } from 'src/components/Logo/Logo';

import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input/Input';

import scss from './styles.scss';

export const Header: React.FC = () => (
  <header className={scss.header}>
    <Logo />
    <Button width={177} height={46} type="transparent">
      + ADD MOVIE
    </Button>
  </header>
);
