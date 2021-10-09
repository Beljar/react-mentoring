import * as React from 'react';
import { Film } from 'src/entities/film';
import cn from 'classnames';

import scss from './styles.scss';

type Props = {
    film: Film;
    className?: string;
}

export const MovieCard: React.FC<Props> = ({ film, className }: Props) => <div className={cn(scss.filmCard, className)}>
<img className={scss.cover} src={film.coverUrl} alt={film.title} />
<div className={scss.titleBlock}>
    <h3 className={scss.title}>{film.title}</h3>
    <div className={scss.year}>{film.year}</div>
</div>
<span className={scss.genres}>{film.genres.join(', ')}</span>
</div>