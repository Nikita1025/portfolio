import React from "react";
import  s from './Projects.module.css';
import cont from '../common/styles/Container.module.css'


export const Projects=()=> {
    return (
        <div className={s.skillsBlock}>
            <div className= {`${cont.container} ${s.skillsContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.skills}>

                </div>
            </div>
        </div>
    );
}
