import * as React from 'react';
import { Movie } from 'src/entities/film';
import { GenreSelector } from '../GenreSelector';
import { DateSelect } from '../ui/DateSelect/DateSelect';
import DropDown from '../ui/DropDown/DropDown';
import { FormFieldType } from '../ui/Form';
import { Input } from '../ui/Input';
import { TextArea } from '../ui/TextArea';

export const MOVIE_FORM_FIELDS: FormFieldType<keyof Movie>[] = [
  {
    key: 'title',
    drawControl: (value, onChange) => (
      <Input id="title" placeholder="Movie title" value={value as string} onChange={onChange} />
    ),
    width: 525,
    rules: [(value: string) => !value && 'Enter title'],
  },
  {
    key: 'releaseDate',
    label: 'RELEASE DATE',
    drawControl: (value, onChange) => (
      <DateSelect placeholder="Select Date" value={value as string} onChange={onChange} />
    ),
    width: 301,
    /*         rules: [
            (value: string) => !value && 'Enter release date',
        ] */
  },
  {
    key: 'url',
    label: 'MOVIE URL',
    drawControl: (value, onChange) => (
      <Input id="url" placeholder="https://" value={value as string} onChange={onChange} />
    ),
    width: 525,
    rules: [(value: string) => !value && 'Enter movie Url'],
  },
  {
    key: 'rating',
    drawControl: (value, onChange) => (
      <Input id="title" placeholder="0-10" value={value as string} onChange={onChange} />
    ),
    width: 301,
    /*         rules: [
            (value: string) => !value && 'Enter raiting',
        ] */
  },
  {
    key: 'genres',
    drawControl: (value, onChange) => <GenreSelector values={value as number[]} onChange={onChange} />,
    width: 525,
    rules: [(value: number[]) => !value.length && 'Select at least one genre to proceed'],
  },
  {
    key: 'duration',
    label: 'RUNTIME',
    drawControl: (value, onChange) => (
      <Input id="title" placeholder="minutes" value={value as string} onChange={onChange} />
    ),
    width: 301,
    rules: [
      (value: string) => !value && 'Enter duration',
      (value: string) => isNaN(Number(value)) && 'Should be a number',
    ],
  },
  {
    key: 'description',
    label: 'OVERVIEW',
    drawControl: (value, onChange) => (
      <TextArea id="title" placeholder="Movie description" value={value as string} onChange={onChange} />
    ),
    rules: [(value: string) => !value && 'Enter description'],
  },
];
