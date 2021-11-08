import * as React from 'react';
import cn from 'classnames';

import scss from './textArea.scss';

type Props = {
  value?: string;
  height?: number;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
  onClick?: () => void;
  id: string;
};

export const TextArea: React.FC<Props> = ({
  id,
  value = '',
  onChange,
  placeholder,
  height = 197,
  className,
  onClick,
}: Props) => (
  <textarea
    style={{ height: `${height}px` }}
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
