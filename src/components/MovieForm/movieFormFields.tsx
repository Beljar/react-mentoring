import * as React from "react";
import { Film } from "src/entities/film";
import { FormFieldType } from "../ui/Form";
import { Input } from "../ui/Input";

export const MOVIE_FORM_FIELDS: FormFieldType<keyof Film | "release_date" | "url" | "genre">[] = [
    {
        key: "title",
        drawControl: () => <Input id="title" />,
        width: 525,
    },
    {
        key: "release_date",
        label: "RELEASE DATE",
        drawControl: () => <Input id="release_date" />,
        width: 301,
    },
    {
        key: "url",
        label: "MOVIE URL",
        drawControl: () => <Input id="url" />,
        width: 525,
    },
    {
        key: "rating",
        drawControl: () => <Input id="title" />,
        width: 301,
    },    {
        key: "genre",
        drawControl: () => <Input id="title" />,
        width: 525,
    },
    {
        key: "duration",
        label: "RUNTIME",
        drawControl: () => <Input id="title" />,
        width: 301,
    },
    {
        key: "description",
        label: "OVERVIEW",
        drawControl: () => <Input id="title" />,
    },
]