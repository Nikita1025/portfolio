import React from 'react';
import  s from './Main.module.scss';
import  cont from '../common/styles/Container.module.css'
import bg from "../assets/image/bg.jpg";
export const Main = () => {
    const MainBack ={
        backgroundImage: `url (${bg})`
    }
    return (
        <div style={MainBack} className={s.mainBlock}>
            <div className={`${cont.container} ${s.mainContainer}`}>
                <div className={s.photo}>
                    <img className={s.image} src={'https://vavelo-dew.netlify.app/assets/img/me.jpg'}/>
                </div>
                <div className={s.text}>
                    <h1>Hi, I'm Nikita Loika</h1>
                    <h3>Front-end Developer</h3>
                </div>

            </div>


        </div>
    );
};

