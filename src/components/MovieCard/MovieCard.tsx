import * as React from 'react';
import { Movie } from 'src/entities/film';
import cn from 'classnames';

import scss from './MovieCard.scss';
import { FilmMenu } from '../FilmMenu';
import { GENRES } from 'src/entities/genre';
import { Modal } from '../ui/Modal';

type Props = {
    movie: Movie;
    className?: string;
}

export const MovieCard: React.FC<Props> = ({ movie, className }: Props) => {
    const [menuClosed, setMenuClosed] = React.useState(true);
    const [modal, setModal] = React.useState<React.ReactElement>();
    return <div className={cn(scss.filmCard, className, {[scss.menuClosed]: menuClosed})}>
    {!!modal && <Modal isOpened={true} onClose={() => setModal(null)}>{modal}</Modal>}
    <FilmMenu setModal={setModal} className={scss.menu} movie={movie} onExpand={() => {setMenuClosed(false)}} onCollapse={() => {setMenuClosed(true)}}/>
    <img className={scss.cover} src={movie.coverUrl} alt={movie.title} />
    <div className={scss.titleBlock}>
        <h3 className={scss.title}>{movie.title}</h3>
        <div className={scss.year}>{new Date(movie.releaseDate).getFullYear()}</div>
    </div>
    <span className={scss.genres}>{movie.genres.map((genreId) => {
        const genreObj = GENRES.find((genre) => genre.id === genreId)
        return genreObj.nameFull || genreObj.nameShort[0].toUpperCase() + genreObj.nameShort.substring(1);
    }).join(', ')
    }</span>
</div>}