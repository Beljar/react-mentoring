import * as React from "react";
import { Movie } from "src/entities/film";
import { GenreSelector } from "../GenreSelector";
import DropDown from "../ui/DropDown/DropDown";
import { FormFieldType } from "../ui/Form";
import { Input } from "../ui/Input";

export const MOVIE_FORM_FIELDS: FormFieldType<keyof Movie>[] = [
    {
        key: "title",
        drawControl: (values, onChange) => <Input id="title" value={values["title"]} onChange={onChange} />,
        width: 525,
    },
    {
        key: "releaseDate",
        label: "RELEASE DATE",
        drawControl: (values, onChange) => <Input id="release_date" onChange={onChange} />,
        width: 301,
    },
    {
        key: "url",
        label: "MOVIE URL",
        drawControl: (values, onChange) => <Input id="url" onChange={onChange} />,
        width: 525,
    },
    {
        key: "rating",
        drawControl: (values, onChange) => <Input id="title" onChange={onChange} />,
        width: 301,
    },    
    {
        key: "genres",
        drawControl: (values, onChange) => <GenreSelector />,
        width: 525,
    },
    {
        key: "duration",
        label: "RUNTIME",
        drawControl: (values, onChange) => <Input id="title" onChange={onChange} />,
        width: 301,
    },
    {
        key: "description",
        label: "OVERVIEW",
        drawControl: (values, onChange) => <Input id="title" onChange={onChange} />,
    },
]