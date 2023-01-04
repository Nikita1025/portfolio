import React from "react";
import s from './Projects.module.scss';
import cont from '../common/styles/Container.module.css'
import {Project} from "./propject/Project";
import {Title} from "../common/components/Title";
import todoImage from '../assets/image/todolist.jpg'
import networkImage from '../assets/image/socialNetwork.jpg'
import counter from '../assets/image/counter.jpg'
import Fade from 'react-reveal/Fade';

export const Projects = () => {
    return (
        <div id='projects' className={s.projectBlock}>
            <div className={`${cont.container} ${s.projectContainer}`}>
                <Fade>
                    <Title text={"My works"}/>
                    <div className={s.projects}>
                        <Project image={todoImage} nameProject={"Todolist"}
                                 coment={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}
                                 href={'https://nikita1025.github.io/SocialNetwork/'}
                        />
                        <Project image={networkImage} nameProject={"Social Network"}
                                 href={'https://nikita1025.github.io/SocialNetwork/'}
                                 coment={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}/>
                        <Project image={counter} nameProject={"Counter"}
                                 href={'https://nikita1025.github.io/Counter/'}
                                 coment={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
