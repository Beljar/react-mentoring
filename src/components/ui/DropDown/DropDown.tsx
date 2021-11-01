import * as React from 'react';
import cn from 'classnames';
import Select, { components as Components } from "react-select";

import IconDropDown from '../Icons/IconArrowDownFilled.svg';

import scss from './styles.scss';
import { DropDownType } from './dropDownTypes';

type Option<T> = {
    label: string;
    value: T;
}

type Props = {
    value: Option<string | number> | Option<string | number>[] | null;
    options: Option<string | number>[];
    className?: string;
    useCheckboxes?: boolean;
    isMulti?: boolean;
    type?: DropDownType;
    placeholder?: string;
    onChange: (option: Option<string | number> | Option<string | number>[]) => void;
}

const DropDown: React.FC<Props> = ({ value, options, className, useCheckboxes = false, isMulti = false, placeholder, type = 'transparent', onChange }) => {
    const Control = (props) => (<Components.Control 
    {...props}
    className={cn(scss.control, scss[type])}>
            <>
                {isMulti && props.hasValue &&
                <Components.Placeholder className={scss.placeholder} {...{...props, hasValue: false, children: placeholder}}/>}
                {props.children}
            </>
        </Components.Control>)
    const MenuList = (props) => (<Components.MenuList 
        {...props}
        className={scss.menu}
        />)
    const Option = (props) => (<Components.Option 
        {...props}
        className={cn(scss.option, {[scss.selected]: props.isSelected})}
        >{useCheckboxes && <><input
        type="checkbox"
        checked={props.isSelected}
        onChange={() => null}
      />{" "}</>}
      <label>{props.label}</label></Components.Option>)
    const SingleValue = (props) => (<Components.SingleValue 
        {...props}
        className={scss.value}
        />)
    const MultiValue = (props) =>  null;
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
    hideSelectedOptions={false}
    className={className}
    onChange={onChange}
    isSearchable={false}
    value={value}
    options={options}
    isMulti={isMulti}
    isClearable={false}
    placeholder={placeholder}
    components={{
        Option,
        MenuList,
        Control,
        SingleValue,
        MultiValue,
        ValueContainer,
        IndicatorSeparator: () => null,
        DropdownIndicator,
    }}
    styles={{
        option: () => null,
        control: () => null,
        valueContainer: () => null,
        singleValue: () => null,
    }}
    />
}

export default DropDown;
