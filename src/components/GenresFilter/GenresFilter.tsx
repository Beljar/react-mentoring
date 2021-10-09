import * as React from 'react';
import cn from 'classnames';

import { GENRE_FILTER_OPTIONS } from './genreFilterOptions';

import scss from './styles.scss';

type Props = {
    activeFilterKey: string;
    onChange: (key: string) => void;
}

export const GenresFilter: React.FC<Props> = ({ activeFilterKey, onChange }) => {
    return <ul className={scss.optionsList}>
        {GENRE_FILTER_OPTIONS.map((filterOption) => <li key={filterOption.key} className={cn(scss.option, {[scss.active]: filterOption.key === activeFilterKey})} onClick={() => onChange(filterOption.key)}>{filterOption.display}</li>)}
    </ul>
}