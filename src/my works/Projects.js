import React from "react";
import s from './Projects.module.scss';
import cont from '../common/styles/Container.module.css'
import {Project} from "./propject/Project";
import {Title} from "../common/components/Title";
import todoImage from '../assets/image/todolist.jpg'
import networkImage from '../assets/image/socialNetwork.jpg'
import counter from '../assets/image/counter.jpg'

export const Projects = () => {
    return (
        <div className={s.projectBlock}>
            <div className={`${cont.container} ${s.projectContainer}`}>
                <Title text={"My works"}/>
                <div className={s.projects}>
                    <Project image={todoImage} nameProject={"Todolist"}
                             coment={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}/>
                    <Project image={networkImage} nameProject={"Social Network"}
                             coment={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}/>
                    <Project image={counter} nameProject={"Counter"}
                             coment={"Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos."}/>
                </div>
            </div>
        </div>
    );
}
