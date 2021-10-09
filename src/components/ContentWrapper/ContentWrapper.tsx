import * as React from 'react';

import cn from 'classnames';

import scss from './styles.scss';

type Props = {
    width?: number,
    children?: React.ReactNode,
    className?: string,
}

export const ContentWrapper: React.FC<Props> = ({ width = 1200, children, className }: Props) => <div style={{width: `${width}px`}} className={cn(scss.contentWrapper, className)}>{children}</div>