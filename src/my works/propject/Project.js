import React from "react";
import  s from './Project.module.css';

export const Project=(props)=> {
    return (
        <div className={s.works}>
            <div className={s.imageContainer}>
                <a className={s.link}>Open</a>
            </div>
            <div className={s.nameProject}> {props.nameProject}</div>
            <span className={s.coment}>{props.coment}</span>
        </div>
    );
}

