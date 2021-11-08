import * as React from 'react';
import cn from 'classnames';

import { ContextMenu } from '../ui/ContextMenu/ContextMenu';
import { MenuOpenButton } from '../ui/MenuOpenButton';
import { FILM_MENU_ITEMS } from './filmMenuItems';

import scss from './styles.scss';

type Props = {
  className: string;
  opened?: boolean;
  onExpand?: () => void;
  onCollapse?: () => void;
};

export const FilmMenu: React.FC<Props> = ({ className, opened, onExpand, onCollapse }) => {
  const [expanded, setExpanded] = React.useState(false);
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
  const menuRef: React.RefObject<HTMLDivElement> = React.useRef();
  const clickListener = React.useCallback((e) => {
    if (!menuRef?.current?.contains(e.target)) {
      setExpanded(false);
    }
  }, []);
  React.useEffect(() => {
    if (expanded) {
      document.addEventListener('click', clickListener);
    }
    return () => {
      document.removeEventListener('click', clickListener);
    };
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
        onClick={(id) => {}}
      />
    </div>
  );
};
