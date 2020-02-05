import React, { FunctionComponent } from 'react';
import './Badge.scss';

interface IBadge {
    /** Text inside */
    text: string;
}

const Badge: FunctionComponent<IBadge> = ({ text }) => {
    return (
        <div className="badge">{text}</div>
    );
};

export default Badge;