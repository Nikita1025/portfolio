import React from "react";
import s from './Footer.module.scss';
import cont from '../common/styles/Container.module.css'
import Fade from 'react-reveal/Fade';
import {GitHub, LikIn, Telegram} from "../common/styles/image";



export const Footer = () => {


    return (
        <div className={s.footerBlock}>
            <div className={`${cont.container} ${s.footerContainer}`}>
                <Fade>
                    <div className={s.footerIcon}>
                        <ul className={s.socialIcon}>
                            <li>
                                <a href={'https://t.me/nekit2510'}>
                                    <Telegram/>
                                </a>
                            </li>
                            <li>
                                <a href={'https://www.linkedin.com/in/nikita-loika-500aa2253/'}>
                                    <LikIn/>
                                </a>
                            </li>
                            <li>
                                <a href={'https://github.com/Nikita1025'}>
                                    <GitHub/>
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


