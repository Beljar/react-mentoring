import * as React from 'react';
import { GENRES, GENRES_MAIN } from 'src/entities/genre';
import { Option } from 'src/types';
import DropDown from '../ui/DropDown/DropDown';


type Props = {
    values: number[];
    onChange: (option: number[]) => void;
}

export const GenreSelector: React.FC<Props> = ({ values, onChange }) => {
    return <DropDown 
    value={values.map((value) => {
        const genre = GENRES.find((genre) => genre.id === value);
        return { label: genre.nameShort, value: genre.id}
    })} 
    type='ui' 
    useCheckboxes 
    isMulti 
    placeholder='Select genre' 
    options={GENRES.map((genre) => ({label: genre.nameShort[0].toUpperCase() + genre.nameShort.substring(1), value: genre.id}))} 
    closeMenuOnSelect={false}
    onChange={(option: Option<number>[]) => {onChange(option.map((item) => item.value))} } />
}