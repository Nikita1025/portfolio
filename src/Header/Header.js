import React, {useEffect, useState} from "react";
import s from './Header.module.scss';
import {Nav} from "../nav/Nav";
import {Dew} from "../nav/Dew";
import Burger from "../nav/Burger";

export const Header = () => {
    const [_, setIsBlackText] = useState({})

    useEffect(() => {
        const getScroll = () => {
            setIsBlackText({})
        }

        window.addEventListener('scroll', getScroll)
        return () => window.removeEventListener('scroll', getScroll)
    }, [window.scrollY])

    return (
        <div className={s.navigation} style={window.scrollY >= 200 ? {background: 'white'} : {background: "none"}}>
            <div className={s.header}>
                <Dew/>
                <Nav/>
                <Burger/>
            </div>
        </div>
    );
}


