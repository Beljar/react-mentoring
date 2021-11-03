import * as React from 'react';

import { Button } from '../Button';
import { FormFieldType } from './FormFieldType';
import { FormItem } from './FormItem';
import { ButtonBlock } from './ButtonBlock/ButtonBlock';

import scss from './form.scss';
import { Movie } from 'src/entities/film/FilmType';
import { FormRule } from '.';


type Props<Entity = object> = {
    title: string;
    fields: FormFieldType[];
    className?: string;
    initialValues?: Entity;
    onSubmit: (data: Entity) => void;
}

const getError: <V>(value: V, rules: FormRule<V>[]) => string | null = (value, rules) => {
    if (rules) {
        for (let rule of rules) {
            const error = rule(value);
            if (error) {
                return error;
            }
        }
    }
    return null
}

export const Form: <Entity extends object>(props: Props<Entity>) => JSX.Element = ({ title, fields, className, initialValues, onSubmit }) => {
    const [values, setValues] = React.useState(initialValues);
    const [errors, setErrors] = React.useState({});
    const getErrors = () => fields.reduce((acc, field) => {
        const error = getError(values[field.key], field.rules);
        return error ? { ...acc, [field.key]: error } : acc;
    }, {});
    return <form className={className}
        onSubmit={(e: React.SyntheticEvent) => {
            e.preventDefault();
            const curErrors = getErrors();
            Object.keys(curErrors).length ? setErrors(curErrors) : onSubmit(values);
        }}
        onReset={() => {
            setValues(initialValues);
            setErrors({});
            }}>
        <h1 className={scss.title}>{title}</h1>
        <div className={scss.fields}>
            {fields.map((field) =>
                <FormItem
                    key={field.key}
                    id={field.key}
                    label={field.label || field.key.toUpperCase()}
                    width={field.width}
                    error={errors?.[field.key]}
                >
                    {field.drawControl(values[field.key], (value) => { setValues({ ...values, [field.key]: value }) })}
                </FormItem>)}
        </div>
        <ButtonBlock className={scss.buttonBlock} />
    </form>
}
