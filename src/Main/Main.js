import React from 'react';
import s from './Main.module.scss';
import cont from '../common/styles/Container.module.css'
import bg from "../assets/image/bg.jpg";
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
export const Main = () => {
    const MainBack = {
        backgroundImage: `url (${bg})`
    }
    return (

        <div id='home' style={MainBack} className={s.mainBlock}>

            <div className={`${cont.container} ${s.mainContainer}`}>
                <Fade top>
                    <div>
                        <div className={s.photo}>
                            <img className={s.image} src={'https://vavelo-dew.netlify.app/assets/img/me.jpg'}/>
                        </div>
                        <div className={s.text}>
                            <h1>Hi, I'm Nikita Loika</h1>
                            <ReactTypingEffect text="Front-end Developer"
                                               className={s.h3}
                            />
                        </div>
                    </div>
                </Fade>
            </div>

        </div>

    );
};

