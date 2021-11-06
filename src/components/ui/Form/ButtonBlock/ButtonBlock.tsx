import * as React from 'react';
import cn from 'classnames';

import { Button } from 'src/components/ui/Button';

import scss from './buttonBlock.scss';

type Props = {
  className?: string;
    onSubmit?: () => void;
};

export const ButtonBlock: React.FC<Props> = ({ className, onSubmit }) => (
  <div className={cn(scss.buttonBlock, className)}>
        <Button type="outlined" htmlType="reset" width={182} height={57}>Reset</Button>
        <Button type="filled" htmlType="submit" width={182} height={57} onClick={() => onSubmit?.()}>Submit</Button>
    </div>;
