import * as React from 'react';

import scss from './movieCount.scss';

type Props = {
    count: number,
}

export const MovieCount: React.FC<Props> = ({ count }) => <div className={scss.movieCounter}><b>{count}</b>{count > 1 ? " movies found" : " movie found"}</div>