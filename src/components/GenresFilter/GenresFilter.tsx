import * as React from 'react';
import cn from 'classnames';

import { Movie } from 'src/entities/film';
import { FilterOptionType } from 'src/entities/filterOption';
import { GENRE_FILTER_OPTIONS } from './genreFilterOptions';

import scss from './styles.scss';

type Props = {
  activeFilterKey: string | number;
  onChange: (filterOption: FilterOptionType<Movie>) => void;
};

export const GenresFilter: React.FC<Props> = ({ activeFilterKey, onChange }) => (
  <ul className={scss.optionsList}>
    {GENRE_FILTER_OPTIONS.map((filterOption) => (
      <li
        key={filterOption.key}
        className={cn(scss.option, { [scss.active]: filterOption.key === activeFilterKey })}
        onClick={() => onChange(filterOption)}
      >
        {filterOption.display}
      </li>
    ))}
  </ul>
);
