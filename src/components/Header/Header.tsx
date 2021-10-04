import * as React from 'react';

import { Button } from '../ui/Button';
import { Input } from '../ui/Input/Input';
import { ContentWrapper } from '../ContentWrapper';
import ImgBg from 'src/img/header-bg.jpg';

import scss from './styles.scss';


export const Header: React.FC = () => (<ContentWrapper className={scss.contentWrapper}>
    <header className={scss.header}>
            <div className={scss.headerBg}></div>
            <div className={scss.headerImgWrapper}>
                <div className={scss.headerImg}></div>
            </div>
            <div className={scss.headerContent}>
                <div className={scss.addBlock}>
                    <h2 className={scss.logo}><a href="#"><b>netflix</b>roulette</a></h2>
                    <Button width={177} height={46} type='transparent'>+ ADD MOVIE</Button>
                </div>
                <h1>FIND YOUR MOVIE</h1>
                <div className={scss.searchBlock}>
                    <Input />
                    <Button className={scss.searchBtn} width={223} height={57} type='filled'>Search</Button>
                </div>
            </div>
        </header>
</ContentWrapper>)
