import * as React from 'react';

import { Button } from '../Button';
import { FormFieldType } from './FormFieldType';
import { FormItem } from './FormItem';
import { ButtonBlock } from './ButtonBlock/ButtonBlock';

import scss from './form.scss';


type Props = {
    title: string;
    fields: FormFieldType[];
    className?: string; 
}

export const Form: React.FC<Props> = ({ title, fields, className }) => {
    return <form className={className}>
        <h1 className={scss.title}>{title}</h1>
        <div className={scss.fields}>{fields.map((field) => <FormItem key={field.key} id={field.key} label={field.label || field.key.toUpperCase()} width={field.width}>{field.drawControl()}</FormItem>)}</div>
        <ButtonBlock className={scss.buttonBlock} />
    </form>
}