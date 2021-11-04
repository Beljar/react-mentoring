import * as React from 'react';

import { Button } from '../Button';
import { FormFieldType } from './FormFieldType';
import { FormItem } from './FormItem';
import { ButtonBlock } from './ButtonBlock/ButtonBlock';

import scss from './form.scss';
import { Movie } from 'src/entities/film/FilmType';
import { FormRule } from '.';
import { useFormik } from 'formik';


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
    const getErrors = () => fields.reduce((acc, field) => {
        const error = getError(values[field.key], field.rules);
        return error ? { ...acc, [field.key]: error } : acc;
    }, {});
    const {values, setFieldValue, errors, handleSubmit, handleReset} = useFormik({
        initialValues,
        onSubmit: (values) => {
            console.log(values);
            onSubmit(values);
        },
        onReset: (values, formik) => {formik.resetForm}
    })
    console.log(values)
    console.log(values['genres'])
    return <form className={className} onSubmit={handleSubmit} onReset={handleReset}>
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
                    {field.drawControl(values[field.key], (value) => { setFieldValue(field.key, value)})}
                </FormItem>)}
        </div>
        <ButtonBlock className={scss.buttonBlock} />
    </form>
}
