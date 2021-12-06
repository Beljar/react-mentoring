import * as React from 'react';
import cn from 'classnames';

import { Option } from 'src/types';
import { Movie } from 'src/entities/movie';
import { FilterOptionType } from 'src/entities/filterOption';
import { connect } from 'react-redux';
import { useNavigate, useLocation, generatePath } from 'react-router';
import { Dispatch } from 'redux';
import { setGenreFilter } from 'src/actions';
import { useQuery } from 'src/hooks/useQuery';
import { GENRE_FILTER_OPTIONS } from './genreFilterOptions';

import scss from './styles.scss';

type Props = {
  activeFilterValue?: string;
  isFilterOn?: boolean;
  onFilter?: (genre: string) => void;
  onChange: (filterOption: Option<string>) => void;
};

export const GenresFilter: React.FC<Props> = ({ activeFilterValue, isFilterOn, onFilter, onChange }) => {
  const curFilterValue = isFilterOn ? activeFilterValue.toLowerCase() : '';
  const [, setQuery] = useQuery();
  return (
    <ul className={scss.optionsList}>
      {GENRE_FILTER_OPTIONS.map((filterOption) => (
        <li
          key={filterOption.value}
          className={cn(scss.option, { [scss.active]: filterOption.value === curFilterValue })}
          onClick={() => {
            setQuery({ searchBy: filterOption.value ? 'genre' : '' }, filterOption.value);
            onChange(filterOption);
          }}
        >
          {filterOption.label}
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  isFilterOn: state.request.searchBy === 'genres',
  activeFilterValue: state.request.search,
});

export default connect(mapStateToProps)(GenresFilter);
