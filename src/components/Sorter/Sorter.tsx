import * as React from 'react';
import { Option } from 'src/types';

import DropDown from '../ui/DropDown/DropDown';
import { getSorterInitialOption, SORTINGS } from './sorterOptions';

import scss from './styles.scss';

type Props = {
  onChange: (string) => void;
};

export const Sorter: React.FC<Props> = ({ onChange }) => {
  const [curOption, setCurOption] = React.useState(getSorterInitialOption());
  React.useEffect(() => {
    onChange(curOption.value);
  }, [curOption]);
  return (
    <div className={scss.sorter}>
      <div className={scss.label}>SORT BY</div>
      <DropDown
        className={scss.dropdown}
        value={curOption}
        options={SORTINGS}
        onChange={(option) => setCurOption(option as Option<string>)}
      />
    </div>
  );
};
