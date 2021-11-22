import * as React from 'react';

import styles from './notFound.scss';

export const NotFound: React.FC = () => (
  <div className={styles.wrapper}>
    <img src="/assets/covers/not_found.jpg" alt="not found" />
  </div>
);
