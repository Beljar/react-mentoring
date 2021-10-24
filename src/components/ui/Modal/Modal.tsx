import * as React from 'react';
import ReactDOM from 'react-dom';

import IconCloseLarge from 'src/components/ui/Icons/IconCloseLarge.svg';

import scss from './modal.scss';

export const Modal: React.FC = ({ children }) => {
    const [visible, setVisible] = React.useState(true);
    const container = React.useRef(document.createElement('div'));
    React.useEffect(() => {
        document.body.appendChild(container.current);
        return () => {document.removeChild(container.current)};
    }, [])
    const modal = <div className={scss.overlay} onClick={(e) => 
    {
    if(e.target === e.currentTarget){
        setVisible(false);
    }
    }}>
        <div className={scss.window}>
            <div className={scss.topBar}>
                <button onClick={() => {setVisible(false)}}><IconCloseLarge/></button>
                </div>
            {children}
        </div>
    </div>
    return visible ? ReactDOM.createPortal(modal, container.current) : null;
}