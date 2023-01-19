import React, {useEffect, useState} from 'react';
import s from './Burger.module.scss'
import {Link} from "react-scroll";

const Burger = () => {
    const [burger, setBurger] = useState(false)
    const onClickHandler = () => {
        setBurger(!burger)
    }
    const [_, setIsBlackText] = useState({})

    useEffect(() => {
        const getScroll = () => {
            setIsBlackText({})
        }

        window.addEventListener('scroll', getScroll)
        return () => window.removeEventListener('scroll', getScroll)
    }, [window.scrollY])

    return (
        <div className={s.cont}>
            <button className={s.button} onClick={onClickHandler} >
                <span style={window.scrollY >= 200 ? {backgroundColor:"black"} : {backgroundColor:"white"}} ></span>
                <span style={window.scrollY >= 200 ? {backgroundColor:"black"} : {backgroundColor:"white"}}></span>
                <span style={window.scrollY >= 200 ? {backgroundColor:"black"} : {backgroundColor:"white"}}></span>
            </button>
            {burger === true && <div className={s.navBar}>
                <ul className={s.ul}>
                    <Link className={s.href}  activeClass={s.active} to="home"
                          spy={true} smooth={true} offset={0} duration={500}
                    >Home</Link>
                    <Link className={s.href}  activeClass={s.active} to="skills"
                          spy={true} smooth={true} offset={0} duration={500}
                    >Skills</Link>
                    <Link className={s.href}  activeClass={s.active} to="projects"
                          spy={true} smooth={true} offset={0} duration={500}
                    >My project</Link>
                    <Link className={s.href}  activeClass={s.active} to="contacts"
                          spy={true} smooth={true} offset={0} duration={500}
                    >Contacts</Link>
                </ul>
            </div>}
        </div>
    );
};

export default Burger;