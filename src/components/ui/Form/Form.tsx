import * as React from 'react';

import { Button } from '../Button';
import { FormFieldType } from './FormFieldType';
import { FormItem } from './FormItem';
import { ButtonBlock } from './ButtonBlock/ButtonBlock';

import scss from './form.scss';
import { Movie } from 'src/entities/film/FilmType';


type Props<Entity = object> = {
    title: string;
    fields: FormFieldType[];
    className?: string;
    initialValues?: Entity;
    onSubmit: (data: Entity) => void;
}

export const Form: <Entity extends object>(props: Props<Entity>) => JSX.Element = ({ title, fields, className, initialValues, onSubmit }) => {
    const [values, setValues] = React.useState(initialValues)
    return <form className={className} onSubmit={(e: React.SyntheticEvent) => {
        console.log(values);
        e.preventDefault();
        }}>
        <h1 className={scss.title}>{title}</h1>
        <div className={scss.fields}>{fields.map((field) => <FormItem key={field.key} id={field.key} label={field.label || field.key.toUpperCase()} width={field.width}>{field.drawControl(values[field.key], (value) => {setValues({...values, [field.key]: value})})}</FormItem>)}</div>
        <ButtonBlock className={scss.buttonBlock} onSubmit={() => onSubmit(values)}/>
    </form>
}