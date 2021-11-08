import * as React from 'react';
import { Logo } from 'src/components/Logo/Logo';

import scss from './footer.scss';

export const Footer = () => (
  <div className={scss.footer}>
    <Logo />
  </div>
);
