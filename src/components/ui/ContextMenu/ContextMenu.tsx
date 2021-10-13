import * as React from 'react';
import cn from 'classnames';

import { Option } from 'src/types';

import scss from './styles.scss';

type Props = {
    options: Option<number>[];
    className?: string;
}

export const ContextMenu: React.FC<Props> = ({ options, className }) => {
    return <ul className={cn(scss.menu, className)}>
        {options.map((option) => <li key={option.value} className={scss.item}>{option.label}</li>)}
    </ul>
}