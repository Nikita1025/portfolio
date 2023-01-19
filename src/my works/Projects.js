import React from "react";
import s from './Projects.module.scss';
import cont from '../common/styles/Container.module.css'
import {Project} from "./propject/Project";
import {Title} from "../common/components/Title";
import todoImage from '../assets/image/todolist.jpg'
import networkImage from '../assets/image/socialNetwork.jpg'
import cards from '../assets/image/cards.jpg'
import Fade from 'react-reveal/Fade';

export const Projects = () => {
    return (
        <div id='projects' className={s.projectBlock}>
            <div className={`${cont.container} ${s.projectContainer}`}>
                <Fade>
                    <Title text={"My works"}/>
                    <div className={s.projects}>
                        <Project image={todoImage} nameProject={"Todolist"}
                                 coment={"Stack:TypeScript, CSS, React, Redux, Redux-thunk, Axios, Formik, Material UI, Jest(Unit-Tests), React-router-dom v6"}
                                 href={'https://nikita1025.github.io/SocialNetwork/'}
                        />
                        <Project image={networkImage} nameProject={"Social Network"}
                                 href={'https://nikita1025.github.io/SocialNetwork/'}
                                 coment={"Stack:TypeScript, CSS, React, Redux, Redux-thunk, Axios, Formik, Yup, Reselect, Material UI, Organizing correct app architecture"}/>
                        <Project image={cards}  nameProject={"Traning cards"}
                                 href={'https://tkachiko.github.io/flashcards'}
                                 coment={"Stack: TypeScript, SCSS, React, Redux-toolkit, Axios, Material UI, Formik,Git, GitHub, Team development"}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
