import * as React from 'react';

import scss from './messageView.scss';

type Props = {
    icon: React.ReactElement;
    title: string;
    text: string;
}

export const MessageView: React.FC<Props> = ({ icon, title, text }) => {
    return <div className={scss.wrapper}>
        {icon}
        <div className={scss.title}>{title}</div>
        <div className={scss.text}>{text}</div>
    </div>
}
