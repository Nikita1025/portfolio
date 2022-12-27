import React from "react";
import t from './Title.module.scss';



export const Title = (props) => {
    return (<div className={t.title}>
            <h2>{props.text}</h2>
        </div>
    );
}