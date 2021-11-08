import * as React from 'react';
import cn from 'classnames';

import scss from './input.scss';

type Props = {
  placeholder?: string;
  className?: string;
};

export const Input: React.FC<Props> = ({ placeholder, className }: Props) => (
  <input className={cn(scss.input, className)} placeholder={placeholder} />
);
