import React from "react";
import  s from './Skill.module.scss';

export const Skill=(props)=> {
    return (
        <div className={s.skillsCont}>
            <div className={s.progressBox}>
                <p className={s.p}>{props.title}
                    <span className={s.spanSetting}>{props.percent}</span>
                </p>
                <div className={s.progress} style={{opacity: '1', left: '0'}}>
                    <div className={s.progressBar} role={'progressbar'} data-width={props.percent} style={{width: `${props.percent}`}}></div>
                </div>

            </div>
        </div>
    );
}

