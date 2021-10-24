import * as React from 'react';
import cn from 'classnames';

import scss from './input.scss';

type Props = {
    value?: string;
    onChange?: () => void;
    placeholder?: string;
    className?: string;
    id: string;
}

export const Input: React.FC<Props> = ({ id, value = '', onChange, placeholder, className }: Props) => {
    const [curValue, setCurValue] = React.useState('');
    React.useEffect(() => {setCurValue(value)}, [value])
return <input id={id} className={cn(scss.input, {[scss.filled]: !!curValue}, className)} placeholder={placeholder} value={curValue} onChange={(e) => {
    const inputValue = e.target.value;
    setCurValue(inputValue);
    onChange?.();
}}/>}
