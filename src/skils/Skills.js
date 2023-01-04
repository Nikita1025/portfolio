import React from "react";
import s from './Skills.module.scss';
import cont from '../common/styles/Container.module.css'
import {Skill} from "./skill/Skill";
import {Title} from "../common/components/Title";
import Fade from 'react-reveal/Fade';

export const Skills = () => {
    return (
        <div id='skills' className={s.skillsBlock}>
            <div className={`${cont.container} ${s.skillsContainer}`}>
                <Fade>
                    <Title text={'My Skills'}/>
                    <div className={s.skills}>
                        <Skill title={"React"} percent={'87%'}/>
                        <Skill title={"JS"} percent={'78%'}/>
                        <Skill title={"Rest API"} percent={'70%'}/>
                        <Skill title={"Redux"} percent={'90%'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}


