import React from "react";
import s from './Contacts.module.scss';
import cont from '../common/styles/Container.module.css'
import {Title} from "../common/components/Title";
import {Icon} from "./icons/Icon";
import mail from '../assets/image/mail.svg'
import phone from '../assets/image/phone.svg'
import location from '../assets/image/logation.svg'
import Fade from 'react-reveal/Fade';

export const Contacts = () => {
    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={`${cont.container} ${s.contactsContainer}`}>
                <Fade>
                    <Title text={'Contact Me'}/>
                    <div className={s.iconContainer}>
                        <Icon icon={mail} text={'nekit1025@mail.ru'}/>
                        <Icon icon={location} text={'Belarus, Minsk'}/>
                        <Icon icon={phone} text={'+375 33 340 78 83'}/>
                    </div>
                    <div className={s.formDiv}>

                        <form className={s.formContainer}>
                            <div className={s.formGroup}>
                                <input type={"text"} placeholder={'Name'} className={s.input}/>
                                <input type={"text"} placeholder={'Email'} className={s.input}/>
                            </div>
                            <div className={s.textareaGroup}>
                                <textarea className={s.textarea} placeholder={'Message...'} required></textarea>
                            </div>
                            <div className={s.bntCont}>
                                <button type={'submit'} className={s.linkSend}>Send Message</button>
                            </div>

                        </form>
                    </div>
                </Fade>
            </div>
        </div>
    )
}


