import * as React from 'react';
import cn from 'classnames';
import { AddMovieButton } from 'src/components/AddMovieButton/AddMovieButton';
import { Logo } from 'src/components/Logo/Logo';

import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input/Input';

import scss from './styles.scss';

type Props = {
  className?: string;
};

export const Header: React.FC<Props> = ({ className }) => (
  <header className={cn(scss.header, className)}>
    <Logo />
    <AddMovieButton />
  </header>
);
