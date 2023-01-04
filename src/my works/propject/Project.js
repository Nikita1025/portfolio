import React from "react";
import s from './Project.module.scss';

export const Project = (props) => {
    return (
        <div className={s.works}>

            <div style={props.style} className={s.imageContainer}>
                <a className={s.link} href={props.href}>
                    <img src={props.image}/>
                </a>
            </div>
            <h4 className={s.h4}>
                <a className={s.nameProject}> {props.nameProject}</a>
            </h4>
            <p className={s.coment}>{props.coment}</p>

            <a className={s.btn} href={props.href}>Read more</a>
        </div>
    );
}

