import * as React from 'react';
import cn from 'classnames';

import { Movie } from 'src/entities/movie';
import { useExpandable } from 'src/hooks/useExpandable';
import { ContextMenu } from '../ui/ContextMenu/ContextMenu';
import { MenuOpenButton } from '../ui/MenuOpenButton';
import { FILM_MENU_ITEMS } from './filmMenuItems';

import scss from './styles.scss';

type Props = {
  className: string;
  movie: Movie;
  setModal: (elem: React.ReactElement) => void;
  opened?: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
};

export const FilmMenu: React.FC<Props> = ({ className, movie, setModal, opened, onExpand, onCollapse }) => {
  const [menuRef, expanded, setExpanded] = useExpandable();
  React.useEffect(() => {
    setExpanded(opened);
  }, [opened]);

  React.useEffect(() => {
    if (expanded) {
      onExpand?.();
    } else {
      onCollapse?.();
    }
  }, [expanded]);
  return (
    <div ref={menuRef} className={className}>
      <MenuOpenButton
        className={cn({ [scss.hidden]: expanded })}
        onClick={() => {
          setExpanded(true);
        }}
      />
      <ContextMenu
        className={cn({ [scss.hidden]: !expanded })}
        options={FILM_MENU_ITEMS.map((item) => ({ label: item.name.toUpperCase(), value: item.id }))}
        onCollapse={() => setExpanded(false)}
        onClick={(id) => {
          FILM_MENU_ITEMS.find((item) => item.id === id).action(movie, setModal);
        }}
      />
    </div>
  );
};
