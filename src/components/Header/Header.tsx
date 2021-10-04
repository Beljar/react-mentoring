import * as React from 'react';
import { Button } from '../ui/Button';
import ImgBg from 'src/img/header-bg.jpg';
import scss from './styles.scss';

export const Header: React.FC = () => (<header className={scss.header}>
        <div className={scss.headerBg}></div>  
        <div className={scss.headerImgWrapper}>
            <div className={scss.headerImg}></div>
        </div>      
        <div className={scss.headerContent}>
            <h2><b>netflix</b>roulette</h2>
            <h1>FIND YOUR MOVIE</h1>
            <div className={scss.searchBlock}>
                <input />
                <Button width={223} height={57} type='filled'>Search</Button>
            </div>
        </div>
    </header>)
