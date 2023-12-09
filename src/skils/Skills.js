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
                        <Skill title={"React"} percent={'95%'}/>
                        <Skill title={"JS/TS"} percent={'87%'}/>
                        <Skill title={"Next js"} percent={'80%'}/>
                        <Skill title={"Redux/Redux-toolkit"} percent={'95%'}/>
                        <Skill title={"RTK-Query/React-Query"} percent={'75%'}/>
                        <Skill title={"REST API"} percent={'88%'}/>
                    </div>
                </Fade>
            </div>
        </div>
    );
}


