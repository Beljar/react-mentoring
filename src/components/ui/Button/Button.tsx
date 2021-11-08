import * as React from 'react';
import cn from 'classnames';

import { ButtonType } from './types';

import scss from './styles.scss';

type Props = {
  type: ButtonType;
  width?: number | 'auto';
  height?: number | 'auto';
  className?: string;
  loading?: boolean;
};

export const Button: React.FC<Props> = ({ className, type, width, height, loading, children }) => (
  <button style={{ width: `${width}px`, height: `${height}px` }} className={cn(className, scss.button, scss[type])}>
    {children}
  </button>
);
