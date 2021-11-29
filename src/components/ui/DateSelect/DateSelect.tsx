import * as React from 'react';
import DatePicker from 'react-datepicker';
import { Input } from '../Input';

import 'react-datepicker/dist/react-datepicker.css';
import scss from './dateSelect.scss';
import { dateToString } from 'src/utils/formatters';

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
};

export const DateSelect: React.FC<Props> = ({ placeholder, value = '', onChange }) => {
  const [startDate, setStartDate] = React.useState(value ? new Date(value) : '');
  console.log(value)
  console.log(startDate)
  type PropsInput = {
    value?: string;
    onClick?: () => void;
  };
  const DataInput: React.FC<PropsInput> = React.forwardRef(({ value = '', onClick }, ref) => (
    <Input id="" value={value} placeholder={placeholder} onClick={onClick} />
  ));
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => {
        console.log(date)
        console.log(dateToString(date))
        setStartDate(date);
        onChange(dateToString(date));
      }}
      customInput={<DataInput />}
    />
  );
};
