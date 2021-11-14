import * as React from 'react';
import { GENRES, GENRES_MAIN } from 'src/entities/genre';
import { Option } from 'src/types';
import DropDown from '../ui/DropDown/DropDown';

type Props = {
  values: string[];
  onChange: (option: number[]) => void;
};

export const GenreSelector: React.FC<Props> = ({ values, onChange }) => (
  <DropDown
    value={values.map((value) => {
      const genre = GENRES.find((genre) => genre.value === value.toLowerCase());
      return genre || { label: value, value };
    })}
    type="ui"
    useCheckboxes
    isMulti
    placeholder="Select genre"
    options={[
      ...values
        .filter((value) => !GENRES.find((genre) => genre.value === value.toLowerCase()))
        .map((value) => ({ label: value, value })),
      ...GENRES,
    ]}
    closeMenuOnSelect={false}
    onChange={(option: Option<number>[]) => {
      onChange(option.map((item) => item.value));
    }}
  />
);
