import React from "react";
import s from './Projects.module.scss';
import cont from '../common/styles/Container.module.css'
import {Project} from "./propject/Project";
import {Title} from "../common/components/Title";
import todoImage from '../assets/image/todolist.jpg'
import networkImage from '../assets/image/socialNetwork.jpg'
import shopImage from '../assets/image/9a94b21af129a19e314633a9fe11475e.jpg'
import cards from '../assets/image/cards.jpg'
import Fade from 'react-reveal/Fade';

export const Projects = () => {
    return (
        <div id='projects' className={s.projectBlock}>
            <div className={`${cont.container} ${s.projectContainer}`}>
                <Fade>
                    <Title text={"My works"}/>
                    <div className={s.projects}>
                        <Project image={networkImage} nameProject={"Instagram analogue"}
                                 coment={'Stack:TypeScript, Next.js, RTK-Query, Redux Toolkit, React Hook Form, Storybook, SSR, OAuth2.0'}
                                 href={'https://inctagram.space/'}
                        />
                        <Project image={shopImage} nameProject={"Abra"}
                                 href={'https://dev.abra-market.com/'}
                                 coment={"Stack:TypeScript, SCSS, React, Redux-toolkit, Axios, React-hook-form, React-Router-Dom,Yup, Docker"}/>
                        <Project image={cards}  nameProject={"Traning cards"}
                                 href={'https://tkachiko.github.io/flashcards'}
                                 coment={"Stack: TypeScript, SCSS, React, Redux-toolkit, Axios, Material UI, Formik, Git, yup, Team development"}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
