import React from "react";

export type FormFieldType<T = string> = {
    label?: string;
    key: T;
    width?: number;
    drawControl: () => React.ReactElement;
}