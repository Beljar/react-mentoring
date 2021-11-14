import * as React from 'react';
import { AddMovieButton } from 'src/components/AddMovieButton/AddMovieButton';
import { Logo } from 'src/components/Logo/Logo';

import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input/Input';

import scss from './styles.scss';

export const Header: React.FC = () => (
  <header className={scss.header}>
    <Logo />
    <AddMovieButton />
  </header>
);
