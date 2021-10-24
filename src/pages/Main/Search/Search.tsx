import * as React from 'react';

import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input/Input';

import scss from './styles.scss';


export const Search: React.FC = () => (
    <div className={scss.search}>
            <div className={scss.searchBg}></div>
            <div className={scss.searchImgWrapper}>
                <div className={scss.searchImg}></div>
            </div>
            <div className={scss.searchContentWrapper}>
                <div className={scss.searchContent}>
                    <div className={scss.searchBlock}>
                    <h1>FIND YOUR MOVIE</h1>
                    <div className={scss.row}>
                        <Input id={'search'} placeholder='What do you want to watch?' />
                        <Button className={scss.searchBtn} width={223} height={57} type='filled'>Search</Button>
                    </div>
                    </div>
                </div>
            </div>
        </div>
)
