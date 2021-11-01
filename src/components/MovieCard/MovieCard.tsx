import * as React from 'react';
import { Movie } from 'src/entities/film';
import cn from 'classnames';

import scss from './MovieCard.scss';
import { FilmMenu } from '../FilmMenu';
import { GENRES } from 'src/entities/genre';

type Props = {
    film: Movie;
    className?: string;
}

export const MovieCard: React.FC<Props> = ({ film, className }: Props) => {
    const [menuClosed, setMenuClosed] = React.useState(true);
    return <div className={cn(scss.filmCard, className, {[scss.menuClosed]: menuClosed})}>
    <FilmMenu className={scss.menu} onExpand={() => {setMenuClosed(false)}} onCollapse={() => {setMenuClosed(true)}}/>
    <img className={scss.cover} src={film.coverUrl} alt={film.title} />
    <div className={scss.titleBlock}>
        <h3 className={scss.title}>{film.title}</h3>
        <div className={scss.year}>{film.year}</div>
    </div>
    <span className={scss.genres}>{film.genres.map((genreId) => {
        const genreObj = GENRES.find((genre) => genre.id === genreId)
        return genreObj.nameFull || genreObj.nameShort[0].toUpperCase() + genreObj.nameShort.substring(1);
    }).join(', ')
    }</span>
</div>}