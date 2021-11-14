import * as React from 'react';
import cn from 'classnames';

import { Option } from 'src/types';
import { Movie } from 'src/entities/movie';
import { FilterOptionType } from 'src/entities/filterOption';
import { GENRE_FILTER_OPTIONS } from './genreFilterOptions';

import scss from './styles.scss';
import { connect } from 'react-redux';

type Props = {
  activeFilterValue?: string;
  isFilterOn?: boolean;
  onChange: (filterOption: Option<string>) => void;
};

export const GenresFilter: React.FC<Props> = ({ activeFilterValue, isFilterOn, onChange }) => {
  console.log(activeFilterValue)
  const curFilterValue = isFilterOn ? activeFilterValue.toLowerCase() : '';
  return (
  <ul className={scss.optionsList}>
    {GENRE_FILTER_OPTIONS.map((filterOption) => (
      <li
        key={filterOption.value}
        className={cn(scss.option, { [scss.active]: filterOption.value === curFilterValue })}
        onClick={() => onChange(filterOption)}
      >
        {filterOption.label}
      </li>
    ))}
  </ul>
)};

const mapStateToProps = (state) => ({
  isFilterOn: state.request.searchBy === 'genres',
  activeFilterValue: state.request.search,
});

export default connect(mapStateToProps)(GenresFilter);
