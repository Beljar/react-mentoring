import * as React from 'react';
import { Film } from 'src/entities/film';

import scss from './styles.scss';

type Props = {
    film: Film;
}

export const MovieCard: React.FC<Props> = ({ film }: Props) => <div className={scss.filmCard}>
<img className={scss.cover} src={film.coverUrl} alt={film.title} />
<div className={scss.titleBlock}>
    <h3 className={scss.title}>{film.title}</h3>
    <div className={scss.year}>{film.year}</div>
</div>
<span className={scss.genres}>{film.genres.join(', ')}</span>
</div>