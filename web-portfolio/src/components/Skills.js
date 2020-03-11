import React from 'react';
import { FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io';
import { FaNodeJs } from 'react-icons/fa';
import { IoLogoPython } from 'react-icons/io';
import { DiPostgresql } from 'react-icons/di';
import { IoLogoHtml5 } from 'react-icons/io';
import { IoLogoCss3 } from 'react-icons/io';
import { FaRProject } from 'react-icons/fa';





function Skills() {
    return (
        <div className="completeSkillWrap">
            <div className="portTitle">Technical Skills</div>
            <div className="skillWrap" id="skills">
                <div className="icons"> <div><IoLogoJavascript size={100} color='aliceblue'/></div><p5>Javascript</p5></div>
                <div className="icons"> <div><FaReact size={100} color='aliceblue'/></div><p5>React</p5> </div>
                <div className="icons"> <div><FaNodeJs size={100} color='aliceblue'/></div><p5>Node</p5> </div>
                <div className="icons"> <div><IoLogoPython size={100} color='aliceblue'/></div><p5>Python 3</p5> </div>
                <div className="icons"> <div><DiPostgresql size={100} color='aliceblue'/></div><p5>SQL</p5> </div>
                <div className="icons"> <div>< IoLogoHtml5 size={100} color='aliceblue'/></div><p5>HTML 5</p5> </div>
                <div className="icons"> <div>< IoLogoCss3 size={100} color='aliceblue'/></div><p5>CSS 3</p5> </div>
                <div className="icons"> <div>< FaRProject size={100} color='aliceblue'/></div><p5>R</p5> </div>
                <div className="icons">  </div>

                <hr className ="skillsHR"/>
            </div>
        </div>
    )
}

export default Skills;
