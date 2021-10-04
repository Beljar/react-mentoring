import * as React from 'react';
import cn from 'classnames';

import scss from './styles.scss';

type Props = {
    className?: string,
}

export const Input: React.FC<Props> = ({ className }: Props) => <input className={cn(scss.input, className)}/>