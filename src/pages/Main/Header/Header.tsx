import * as React from 'react';
import cn from 'classnames';

import { Logo } from 'src/components/Logo/Logo';

import scss from './styles.scss';

type Props = {
  className?: string;
  children?: React.ReactNode;
};

export const Header: React.FC<Props> = ({ className, children }) => (
  <header className={cn(scss.header, className)}>
    <Logo />
    {children}
  </header>
);
