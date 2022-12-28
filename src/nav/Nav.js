import React, {useEffect, useRef, useState} from "react";
import s from './Nav.module.scss';

export const Nav = () => {
    const [_, setIsBlackTextNav] = useState({})

    useEffect(()=>{
        const getScroll = () => {
            setIsBlackTextNav({})
        }

        window.addEventListener('scroll', getScroll)
        return () => window.removeEventListener('scroll', getScroll)
    },[window.scrollY])

    const linkStyle = `${s.href} ${window.scrollY >= 200 ? s.black : s.white}`

    return (
        <div className={s.navCont}>
            <div className={s.nav}>
                <a className={linkStyle} href=''>Home</a>
                <a className={linkStyle} href=''>Skills</a>
                <a className={linkStyle} href=''>My project</a>
                <a className={linkStyle} href=''>Contact</a>
            </div>
        </div>
    );
}


