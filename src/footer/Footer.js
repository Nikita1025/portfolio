import React from "react";
import  s from './Footer.module.css';
import cont from '../common/styles/Container.module.css'


export const Footer=()=> {
    return (
        <div className={s.footerBlock}>
            <div className= {`${cont.container} ${s.footerContainer}`}>
                <h2 className={s.title}>Nikita Loika</h2>
                <div className={s.footerIcon}>
                    <div className={s.Icon}></div>
                    <div className={s.Icon}></div>
                    <div className={s.Icon}></div>
                    <div className={s.Icon}></div>
                </div>
                <div>© 2022 All rights reserved</div>
            </div>
        </div>
    );
}


