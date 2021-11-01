import React from "react";

export type FormFieldType<T = string> = {
    label?: string;
    key: T;
    width?: number;
    drawControl: (value: string | number | number[], onChange: (value) => void) => React.ReactElement;
}