import React from "react";
import s from './Footer.module.css';
import cont from '../common/styles/Container.module.css'
import telegram from '../assets/image/telegram.svg'
import likIn from '../assets/image/linkedin.svg'
import gitHub from '../assets/image/github.svg'

export const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={`${cont.container} ${s.footerContainer}`}>

                <div className={s.footerIcon}>
                    <ul className={s.socialIcon}>
                        <li>
                            <a href={''}>
                                    <img src={telegram}/>
                            </a>
                        </li>
                        <li>
                            <a href={''}>
                                <img src={likIn}/>
                            </a>
                        </li>
                        <li>
                            <a href={''}>
                                <img src={gitHub}/>
                            </a>
                        </li>
                    </ul>
                    <p className={s.p}>© 2022 Dew. made by vavelo</p>
                </div>
            </div>
        </div>
    );
}


