import * as React from 'react';

import scss from './formItem.scss';

type Props = {
    label: string;
    id: string;
}

export const FormItem: React.FC<Props> = ({ label, id, children }) => {
    return <div className={scss.formItem}>
        <label className={scss.label} htmlFor={id}>{label}</label>
        {children}
    </div>
}
