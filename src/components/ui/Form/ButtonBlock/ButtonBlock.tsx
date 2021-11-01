import * as React from 'react';
import cn from 'classnames';

import { Button } from 'src/components/ui/Button';

import scss from './buttonBlock.scss';

type Props = {
    className?: string;
}

export const ButtonBlock: React.FC<Props> = ({ className }) => {
    return <div className={cn(scss.buttonBlock, className)}>
        <Button type={'outlined'} width={182} height={57}>Reset</Button>
        <Button type={'filled'} width={182} height={57}>Submit</Button>
    </div>
}