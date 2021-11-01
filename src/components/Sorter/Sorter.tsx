import * as React from 'react';
import { Option } from 'src/types';

import DropDown from '../ui/DropDown/DropDown';
import { SORTER_OPTIONS } from './sorterOptions';

import scss from './styles.scss';

export const Sorter = () => {
    const [curOption, setCurOption] = React.useState(SORTER_OPTIONS[0]);
    return <div className={scss.sorter}>
        <div className={scss.label}>SORT BY</div>
        <DropDown className={scss.dropdown} value={curOption} options={SORTER_OPTIONS} onChange={(option) => setCurOption(option as Option<string>)}/>
    </div>
}