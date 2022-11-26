import React from "react";
import  s from './Skills.module.css';
import cont from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";

export const Skills=()=> {
    return (
        <div className={s.skillsBlock}>
            <div className= {`${cont.container} ${s.skillsContainer}`}>
            <h2 className={s.title}>My skills</h2>
                <div className={s.skills}>
                    <Skill title={"React"} description={"sadasdasdassssssa as asd asdasd asd adasd asd as"}/>
                    <Skill title={"JS"} description={"sadasdasdassssssa as asd asdasd asd adasd asd as"}/>
                    <Skill title={"CSS"} description={"sadasdasdassssssa as asd asdasd asd adasd asd as"}/>
                </div>
            </div>
        </div>
    );
}


