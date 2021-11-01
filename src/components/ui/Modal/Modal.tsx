import * as React from 'react';
import ReactDOM from 'react-dom';

import IconCloseLarge from 'src/components/ui/Icons/IconCloseLarge.svg';

import scss from './modal.scss';

type Props = {
    isOpened: boolean;
    onClose: () => void;
}

export const Modal: React.FC<Props> = ({ children, isOpened, onClose }) => {
    const container = React.useRef(document.createElement('div'));
    React.useEffect(() => {
        document.querySelector('#main').appendChild(container.current);
        return () => {document.removeChild(container.current)};
    }, [])
    const modal = <div className={scss.overlay} onClick={(e) => 
    {
    if(e.target === e.currentTarget){
        onClose();
    }
    }}>
        <div className={scss.window}>
            <div className={scss.topBar}>
                <button onClick={() => {onClose()}}><IconCloseLarge/></button>
                </div>
            {children}
        </div>
    </div>
    return isOpened ? ReactDOM.createPortal(modal, container.current) : null;
}