import * as React from 'react';
import { Button } from '../Button';
import { FormFieldType } from './FormFieldType';
import { FormItem } from './FormItem';

import scss from './form.scss';

type Props = {
    title: string;
    fields: FormFieldType[];
    className?: string; 
}

export const Form: React.FC<Props> = ({ title, fields, className }) => {
    return <form className={className}>
        <h1>{title}</h1>
        <div className={scss.fields}>{fields.map((field) => <FormItem key={field.key} id={field.key} label={field.label || field.key.toUpperCase()} width={field.width}>{field.drawControl()}</FormItem>)}</div>
        <Button type={'outlined'} width={182} height={57}>Reset</Button>
        <Button type={'filled'} width={182} height={57}>Submit</Button>
    </form>
}