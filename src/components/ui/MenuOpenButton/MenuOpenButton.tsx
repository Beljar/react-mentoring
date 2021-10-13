import * as React from 'react';
import cn from 'classnames';

import scss from './styles.scss';

type Props = {
    onClick?: () => void;
    className?: string;
}

export const MenuOpenButton: React.FC<Props> = ({ onClick, className }) => <div className={cn(scss.button, className)} onClick={onClick}>
    <div className={scss.dot}></div>
    <div className={scss.dot}></div>
    <div className={scss.dot}></div>
</div>