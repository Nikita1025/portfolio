import React, {useEffect, useRef, useState} from "react";
import s from './Nav.module.scss';
import {Link, animateScroll as scroll} from "react-scroll";

export const Nav = () => {
    const [_, setIsBlackTextNav] = useState({})

    useEffect(() => {
        const getScroll = () => {
            setIsBlackTextNav({})
        }

        window.addEventListener('scroll', getScroll)
        return () => window.removeEventListener('scroll', getScroll)
    }, [window.scrollY])

    const linkStyle = `${s.href} ${window.scrollY >= 200 ? s.black : s.white}`

    return (
        <div className={s.navCont}>
            <div className={s.nav}>
                <Link className={linkStyle} activeClass={s.active} to="home"
                      spy={true} smooth={true} offset={0} duration={500}
                >Home</Link>
                <Link className={linkStyle} activeClass={s.active} to="skills"
                      spy={true} smooth={true} offset={0} duration={500}
                >Skills</Link>
                <Link className={linkStyle} activeClass={s.active} to="projects"
                      spy={true} smooth={true} offset={0} duration={500}
                >My project</Link>
                <Link className={linkStyle} activeClass={s.active} to="contacts"
                      spy={true} smooth={true} offset={0} duration={500}
                >Contacts</Link>
            </div>
        </div>
    );
}


