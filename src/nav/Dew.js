import s from "./Dew.module.scss";
import React, {useEffect, useState} from "react";

export const Dew = () => {
    const [_, setIsBlackText] = useState({})

    useEffect(()=>{
        const getScroll = () => {
            setIsBlackText({})
        }

        window.addEventListener('scroll', getScroll)
        return () => window.removeEventListener('scroll', getScroll)
    },[window.scrollY])

    const linkStyle = `${s.href} ${window.scrollY >= 200 ? s.black : s.white}`
    return (
        <div className={s.DewCont}>
            <div className={s.logo}>
                <a className={linkStyle} href=''>DEW.</a>
            </div>
        </div>
    );
}