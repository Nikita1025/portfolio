import React from "react";
import s from './Footer.module.scss';
import cont from '../common/styles/Container.module.css'
import telegram from '../assets/image/telegram.svg'
import likIn from '../assets/image/linkedin.svg'
import gitHub from '../assets/image/github.svg'
import Fade from 'react-reveal/Fade';

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${cont.container} ${s.footerContainer}`}>
                <Fade>
                    <div className={s.footerIcon}>
                        <ul className={s.socialIcon}>
                            <li>
                                <a href={'https://t.me/nekit2510'}>
                                    <img src={telegram}/>
                                </a>
                            </li>
                            <li>
                                <a  href={'https://www.linkedin.com/in/nikita-loika-500aa2253/'}>
                                    <img src={likIn}/>
                                </a>
                            </li>
                            <li>
                                <a href={'https://github.com/Nikita1025'}>
                                    <img src={gitHub}/>
                                </a>
                            </li>
                        </ul>
                        <p className={s.p}>© 2022 Dew. made by vavelo</p>
                    </div>
                </Fade>
            </div>
        </div>
    );
}


