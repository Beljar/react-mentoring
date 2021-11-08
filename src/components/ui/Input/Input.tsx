import * as React from 'react';
import cn from 'classnames';

import scss from './input.scss';

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  onClick?: () => void;
  id: string;
};

export const Input: React.FC<Props> = ({ id, value = '', onChange, placeholder, className, onClick }: Props) => (
  <input
    id={id}
    className={cn(scss.input, { [scss.filled]: !!value }, className)}
    placeholder={placeholder}
    value={value}
    onChange={(e) => {
      const inputValue = e.target.value;
      onChange?.(inputValue);
    }}
    onClick={onClick}
  />
);
