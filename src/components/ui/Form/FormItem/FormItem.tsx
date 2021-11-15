import * as React from 'react';

import scss from './formItem.scss';

type Props = {
  label: string;
  id: string;
  width?: number;
  error?: string;
};

export const FormItem: React.FC<Props> = ({ label, id, width, error, children }) => (
  <div className={scss.formItem} style={{ width: width ? `${width}px` : '100%' }}>
    <label className={scss.label} htmlFor={id}>
      {label}
    </label>
    {children}
    <div className={scss.error}>{error}</div>
  </div>
);
