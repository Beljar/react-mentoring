import * as React from 'react';
import Select, { components as Components } from "react-select";

import IconDropDown from '../Icons/IconArrowDownFilled.svg';

import scss from './styles.scss';

type Option<T> = {
    label: string;
    value: T;
}

type Props = {
    value: Option<string>;
    options: Option<string>[];
    className?: string;
    onChange: (option: Option<string>) => void;
}

const DropDown: React.FC<Props> = ({ value, options, className, onChange }) => {
    const Control = (props) => (<Components.Control 
    {...props}
    className={scss.control}
    />)
    const SingleValue = (props) => (<Components.SingleValue 
        {...props}
        className={scss.value}
        />)
    const ValueContainer = (props) => (<Components.SingleValue 
        {...props}
        className={scss.container}
        />)
    const DropdownIndicator = (props) => (<Components.DropdownIndicator 
        {...props}
        className={scss.container}
        >
            <IconDropDown />
        </Components.DropdownIndicator>)
    return <Select 
    className={className}
    onChange={onChange}
    isSearchable={false}
    value={value}
    options={options}
    components={{
        Control,
        SingleValue,
        ValueContainer,
        IndicatorSeparator: () => null,
        DropdownIndicator,
    }}
    styles={{
        control: () => null,
        valueContainer: () => null,
        singleValue: () => null,
    }}
    />
}

export default DropDown;
