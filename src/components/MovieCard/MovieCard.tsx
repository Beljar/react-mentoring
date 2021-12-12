import * as React from 'react';
import { Movie } from 'src/entities/movie';
import cn from 'classnames';

import { GENRES } from 'src/entities/genre';
import { genresToString } from 'src/utils/genresTostring';
import { useQuery } from 'src/hooks/useQuery';
import scss from './MovieCard.scss';
import { FilmMenu } from '../FilmMenu';
import { Modal } from '../ui/Modal';
import { MovieImage } from '../MovieImage';

type Props = {
  movie: Movie;
  className?: string;
  onClick: () => void;
};

export const MovieCard: React.FC<Props> = ({ movie, className, onClick }: Props) => {
  const [menuClosed, setMenuClosed] = React.useState(true);
  const [modal, setModal] = React.useState<React.ReactElement>();
  const [, setQuery] = useQuery();
  console.log(movie);
  return (
    <div className={cn(scss.filmCard, className, { [scss.menuClosed]: menuClosed })}>
      {!!modal && (
        <Modal isOpened onClose={() => setModal(null)}>
          {modal}
        </Modal>
      )}
      <FilmMenu
        setModal={setModal}
        className={scss.menu}
        movie={movie}
        onExpand={() => {
          setMenuClosed(false);
        }}
        onCollapse={() => {
          setMenuClosed(true);
        }}
      />
      <div
        className={scss.clickable}
        onClick={() => {
          setQuery({ movie: movie.id });
          window.scrollTo(0, 0);
          onClick();
        }}
      >
        <MovieImage src={movie.posterPath} alt={movie.title} className={scss.cover} />
        <div className={scss.titleBlock}>
          <h3 className={scss.title}>{movie.title}</h3>
          <div className={scss.year}>{new Date(movie.releaseDate).getFullYear()}</div>
        </div>
        <span className={scss.genres}>{movie.genres && genresToString(movie.genres)}</span>
      </div>
    </div>
  );
};
