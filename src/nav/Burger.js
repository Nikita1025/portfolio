import React, {useEffect, useState} from 'react';
import s from './Burger.module.scss'

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
                    <li className={s.li}><a className={s.href} href=''>Home</a></li>
                    <li className={s.li}><a className={s.href} href=''>Skills</a></li>
                    <li className={s.li}><a className={s.href} href=''>My project</a></li>
                    <li className={s.li}><a className={s.href} href=''>Contact</a></li>
                </ul>
            </div>}
        </div>
    );
};

export default Burger;