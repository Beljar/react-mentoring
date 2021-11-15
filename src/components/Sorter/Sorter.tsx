import * as React from 'react';
import { Option } from 'src/types';

import DropDown from '../ui/DropDown/DropDown';
import { SORTINGS } from './sorterOptions';

import scss from './styles.scss';

const sortingToOption = ({ label, value }) => ({ label, value });

type Props = {
  onChange: (rule) => void;
};

export const Sorter: React.FC<Props> = ({ onChange }) => {
  const [curOption, setCurOption] = React.useState(sortingToOption(SORTINGS[0]));
  React.useEffect(() => {
    onChange(SORTINGS.find((sorting) => sorting.value === curOption.value).rule);
  }, [curOption]);
  return (
    <div className={scss.sorter}>
      <div className={scss.label}>SORT BY</div>
      <DropDown
        className={scss.dropdown}
        value={curOption}
        options={SORTINGS.map(sortingToOption)}
        onChange={(option) => setCurOption(option as Option<string>)}
      />
    </div>
  );
};
