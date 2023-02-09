import React, {useRef, useState} from "react";
import s from './Contacts.module.scss';
import cont from '../common/styles/Container.module.css'
import {Title} from "../common/components/Title";
import {Icon} from "./icons/Icon";
import mail from '../assets/image/mail.svg'
import phone from '../assets/image/phone.svg'
import location from '../assets/image/logation.svg'
import Fade from 'react-reveal/Fade';
import * as emailjs from "@emailjs/browser";
import {useForm} from "react-hook-form";
import {Alert, LinearProgress, Snackbar} from "@mui/material";
import Stack from '@mui/material/Stack';
export const Contacts = () => {

    const [loading, setLoading] = useState(false)



    const form = useRef();
    const {
        register,
        formState: {errors},
        handleSubmit,
        reset
    } = useForm({
        mode: "all"
    });
    const onSubmit = (e) => {
        e.preventDefault()
        setLoading(true)
        emailjs
            .sendForm('service_afusc6v', 'template_t3mhvm9', form.current, 'eK9nj2XlYyZDzpnvx')
            .then(() => {
                reset();
            })
            .finally(() => {
                setLoading(false)
            })
    }
    return (
        <div id='contacts' className={s.contactsBlock}>
            <div className={`${cont.container} ${s.contactsContainer}`}>

                <Fade>
                    <Title text={'Contact Me'}/>
                    <div className={s.iconContainer}>
                        <Icon icon={mail} text={'nekit1025l@gmail.com'}/>
                        <Icon icon={location} text={'Belarus, Minsk'}/>
                        <Icon icon={phone} text={'+375 33 340 78 83'}/>
                    </div>
                    <div className={s.formDiv}>

                        <form className={s.formContainer} ref={form} onSubmit={onSubmit}>
                            <div className={s.formGroup}>
                                <input          {...register("firstName", {
                                    required: "Required field",
                                    minLength: {
                                        value: 2,
                                        message: "Minimum 2 characters"
                                    }
                                })} type={"text"} placeholder={'Name'} className={s.input}/>
                                <div style={{color:'red',fontSize:'18px'}}>
                                    {errors?.firstName  && <span>{errors?.firstName .message || "Error"}</span>}
                                </div>
                                <input
                                    {...register("emailAddress", {
                                        required: "Required field",
                                    })}
                                    type={"text"} placeholder={'Email'} className={s.input}/>
                                <div style={{color:'red',fontSize:'18px'}}>
                                    {errors?.emailAddress  && <span>{errors?.emailAddress .message || "Error"}</span>}
                                </div>
                            </div>
                            <div className={s.textareaGroup}>
                                <textarea
                                    {...register("project", {
                                        required: "Required field",
                                        minLength: {
                                            value: 5,
                                            message: "Minimum 5 characters"
                                        },
                                    })}
                                    className={s.textarea} placeholder={'Message...'} required></textarea>
                                <div style={{color:'red', display:'flex', fontSize:'18px'}}>
                                    {errors?.project && <span>{errors?.project.message || "Error"}</span>}
                                </div>
                            </div>
                            {loading &&<Stack  sx={{ width: '200px' }} st spacing={2}>
                                <Alert  variant="filled" severity="success">Message sent</Alert>
                            </Stack>}
                            <div className={s.bntCont}>
                                <button  type="submit" onSubmit={onSubmit} className={s.linkSend}>Send Message</button>
                            </div>

                        </form>
                    </div>
                </Fade>

            </div>

        </div>

    )
}


