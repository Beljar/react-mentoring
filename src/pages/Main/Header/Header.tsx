import * as React from 'react';

import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input/Input';

import scss from './styles.scss';


export const Header: React.FC = () => (
    <header className={scss.header}>
            <div className={scss.headerBg}></div>
            <div className={scss.headerImgWrapper}>
                <div className={scss.headerImg}></div>
            </div>
            <div className={scss.headerContentWrapper}>
                <div className={scss.headerContent}>
                    <div className={scss.addBlock}>
                        <h2 className={scss.logo}><a href="#"><b>netflix</b>roulette</a></h2>
                        <Button width={177} height={46} type='transparent'>+ ADD MOVIE</Button>
                    </div>
                    <div className={scss.searchBlock}>
                    <h1>FIND YOUR MOVIE</h1>
                    <div className={scss.row}>
                        <Input />
                        <Button className={scss.searchBtn} width={223} height={57} type='filled'>Search</Button>
                    </div>
                    </div>
                </div>
            </div>
        </header>
)
