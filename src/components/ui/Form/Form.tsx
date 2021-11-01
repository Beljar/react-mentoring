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
}

export const Form: React.FC<Props> = ({ title, fields, className, initialValues }) => {
    const [values, setValues] = React.useState(initialValues)
    return <form className={className} onSubmit={(e: React.SyntheticEvent) => {
        console.log(values);
        e.preventDefault();
        }}>
        <h1 className={scss.title}>{title}</h1>
        <div className={scss.fields}>{fields.map((field) => <FormItem key={field.key} id={field.key} label={field.label || field.key.toUpperCase()} width={field.width}>{field.drawControl(values, (value) => {setValues({...values, [field.key]: value})})}</FormItem>)}</div>
        <ButtonBlock className={scss.buttonBlock} />
    </form>
}