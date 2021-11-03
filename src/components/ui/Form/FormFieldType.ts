import React from "react";

export type FormRule<T> = (value: T) => string | null;

export type FormEntryValue = string | number | number[];

export type FormFieldType<T = string> = {
    label?: string;
    key: T;
    width?: number;
    drawControl: (value: FormEntryValue, onChange: (value) => void) => React.ReactElement;
    rules?: FormRule<FormEntryValue>[];
}
