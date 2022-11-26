import React from "react";
import  s from './Contacts.module.css';
import cont from '../common/styles/Container.module.css'


export const Contacts=()=> {
    return (
        <div className={s.contactsBlock}>
            <div className= {`${cont.container} ${s.contactsContainer}`}>
                <h2 className={s.title}>Contacts</h2>
                <form className={s.formContainer}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea></textarea>
                </form>
                <button className={s.linkSend}>Send</button>
            </div>
        </div>
    );
}


