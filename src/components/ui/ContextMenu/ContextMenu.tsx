import * as React from 'react';
import cn from 'classnames';

import { Option } from 'src/types';

import IconClose from 'src/components/ui/Icons/IconClose.svg';

import scss from './ContextMenu.scss';

type Props = {
  options: Option<number>[];
    onCollapse: () => void;
    onClick: (id: number | string) => void;
  className?: string;
};

export const ContextMenu: React.FC<Props> = ({
 options, onCollapse, onClick, className 
}) => (
  <div className={cn(scss.menu, className)}>
    <div className={scss.close}>
            <button onClick={onCollapse}>
        <IconClose />
            </button>
    </div>
        <ul>
            {options.map((option) => <li key={option.value} className={scss.item} onClick={() => { onClick(option.value); }}>{option.label}</li>)}
      ))}
    </ul>
    </div>;
