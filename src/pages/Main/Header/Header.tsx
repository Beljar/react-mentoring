import * as React from 'react';

import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input/Input';

import scss from './styles.scss';


export const Header: React.FC = () => (
    <header className={scss.header}>
        <h2 className={scss.logo}><a href="#"><b>netflix</b>roulette</a></h2>
        <Button width={177} height={46} type='transparent'>+ ADD MOVIE</Button>
    </header>
)
