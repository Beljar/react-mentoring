import * as React from 'react';
import cn from 'classnames';

import scss from './input.scss';

type Props = {
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  onClick?: () => void;
  onEnter?: () => void;
  id: string;
};

export const Input: React.FC<Props> = ({
  id,
  value = '',
  onChange,
  placeholder,
  className,
  onClick,
  onEnter,
}: Props) => {
  const handleEnter = (e: React.KeyboardEvent) => {
    const { key = '' } = e || {};
    const isEnterPressed = key === 'Enter';
    if(isEnterPressed) {
      onEnter?.();
    }
  };
  return (
    <input
      onKeyPress={handleEnter}
      id={id}
      className={cn(scss.input, { [scss.filled]: !!value }, className)}
      placeholder={placeholder}
      value={value || ''}
      onChange={(e) => {
        const inputValue = e.target.value;
        onChange?.(inputValue);
      }}
      onClick={onClick}
    />
  );
};
