import React from "react";

export type FormFieldType<T = string> = {
    label?: string;
    key: T;
    width?: number;
    drawControl: (values: object, onChange: (value) => void) => React.ReactElement;
}