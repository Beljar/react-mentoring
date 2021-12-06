import * as React from 'react';

import scss from './loader.scss';

export const Loader = () => <img className={scss.loader} src="/assets/loader/loader.gif" alt="loading" />;
