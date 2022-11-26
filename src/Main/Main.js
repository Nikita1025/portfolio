import React from 'react';
import  s from './Main.module.css';
import  cont from '../common/styles/Container.module.css'
export const Main = () => {
    return (
        <div className={s.mainBlock}>
            <div className={`${cont.container} ${s.mainContainer}`}>
                <div className={s.photo}></div>
                <div className={s.text}>
                    <h1>Hi, I'm Nikita Loika</h1>
                    <h3>Front-end Developer</h3>
                </div>

            </div>


        </div>
    );
};

