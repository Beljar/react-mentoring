import * as React from 'react';
import { GENRES_MAIN } from 'src/entities/genre';
import DropDown from '../ui/DropDown/DropDown';

export const GenreSelector = () => {
    return <DropDown value={[]} type='ui' useCheckboxes isMulti options={GENRES_MAIN.map((genre) => ({label: genre.nameShort[0].toUpperCase() + genre.nameShort.substring(1), value: genre.id}))} onChange={(option) => {} } />
}