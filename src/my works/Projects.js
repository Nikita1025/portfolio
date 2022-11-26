import React from "react";
import s from './Projects.module.css';
import cont from '../common/styles/Container.module.css'
import {Project} from "./propject/Project";


export const Projects = () => {
    return (
        <div className={s.projectBlock}>
            <div className={`${cont.container} ${s.projectContainer}`}>
                <h2 className={s.title}>My works</h2>
                <div className={s.projects}>
                    <Project nameProject={"Couner"} coment={"adasdasdasdasda asd asdasd asd ada sd"}/>
                    <Project nameProject={"Todolist"} coment={"adasdasdasdasda asd asdasd asd ada sd"}/>
                    <Project nameProject={"Social Network"} coment={"adasdasdasdasda asd asdasd asd ada sd"}/>
                </div>
            </div>
        </div>
    );
}
