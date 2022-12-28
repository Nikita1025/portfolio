import React from "react";
import s from './Icon.module.scss';

export const Icon = (props) => {
    return (
        <div className={s.icon}>
            <i className={s.envelope}>
                <img src={props.icon}/>
            </i>
            <p>{props.text}</p>
        </div>
    );
}

