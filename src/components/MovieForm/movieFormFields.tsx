import * as React from "react";
import { Movie } from "src/entities/film";
import { GenreSelector } from "../GenreSelector";
import DropDown from "../ui/DropDown/DropDown";
import { FormFieldType } from "../ui/Form";
import { Input } from "../ui/Input";

export const MOVIE_FORM_FIELDS: FormFieldType<keyof Movie>[] = [
    {
        key: "title",
        drawControl: (value, onChange) => <Input id="title" placeholder='Movie title' value={value as string} onChange={onChange} />,
        width: 525,
    },
    {
        key: "releaseDate",
        label: "RELEASE DATE",
        drawControl: (value, onChange) => <Input id="release_date" placeholder='Select Date' value={value as string} onChange={onChange} />,
        width: 301,
    },
    {
        key: "url",
        label: "MOVIE URL",
        drawControl: (value, onChange) => <Input id="url" placeholder='https://' value={value as string} onChange={onChange} />,
        width: 525,
    },
    {
        key: "rating",
        drawControl: (value, onChange) => <Input id="title" placeholder='0-10' value={value as string}  onChange={onChange} />,
        width: 301,
    },    
    {
        key: "genres",
        drawControl: (value, onChange) => <GenreSelector values={value as number[]} onChange={onChange} />,
        width: 525,
    },
    {
        key: "duration",
        label: "RUNTIME",
        drawControl: (value, onChange) => <Input id="title" placeholder='minutes' value={value as string} onChange={onChange} />,
        width: 301,
    },
    {
        key: "description",
        label: "OVERVIEW",
        drawControl: (value, onChange) => <Input id="title" placeholder='Movie description' value={value as string} onChange={onChange} />,
    },
]