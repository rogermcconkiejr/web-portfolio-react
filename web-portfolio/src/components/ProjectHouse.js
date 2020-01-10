import React from 'react';
import { SocialIcon } from 'react-social-icons';

import designHub from "../Assets/designHub.png"
import tipsease from "../Assets/tipsease.png"
import diy from "../Assets/diy.png"
import nasa from "../Assets/nasa.png"
import guidr from "../Assets/guidr.png"
import githubcard from "../Assets/githubcard.png"

function ProjectHouse() {
    return (
        <div className="pjWrapper">
            <div className="portTitle">Portfolio</div>
            
            <div className="pjHouse">
                <a href="https://designhubx.com/explore"><div className="pjImgHouse">
                <img className="pjPic" src={designHub} alt="Design Hub"/>
                <div className="pjTitle">"Design Hub"</div>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/Lambda-School-Labs/designhub-be" bgColor="transparent" fgColor="black"/>
                </div>
                </div></a>
                <a href="https://tipseaseui-roger.rogermcconkiejr.now.sh/"><div className="pjImgHouse">
                <img className="pjPic" src={tipsease} alt="Tipsease"/>
                <div className="pjTitle">"Tipsease"</div>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/bw-tipsease/TipsEaseUI-Roger" bgColor="transparent" fgColor="black"/>
                </div>
                </div></a>
                <a href="https://diy-tracker.rogermcconkiejr.now.sh/login"><div className="pjImgHouse">
                <img className="pjPic" src={diy} alt="DIY Project"/>
                <div className="pjTitle">"DIY Tracker"</div>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/DIY-Tracker/Frontend-Developer/tree/master/diy-tracker" bgColor="transparent" fgColor="black"/>
                </div>
                </div></a>
                <a href="https://nasa-photo-of-the-day.rogermcconkiejr.now.sh/"><div className="pjImgHouse">
                <img className="pjPic" src={nasa} alt="NASA photo of the day project"/>
                <div className="pjTitle">"NASA photo of the day"</div>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/rogermcconkiejr/nasa-photo-of-the-day" bgColor="transparent" fgColor="black"/>
                </div>
                </div></a>
                <a href="https://guidr.now.sh/"><div className="pjImgHouse">
                <img className="pjPic" src={guidr} alt="GUIDR Project"/>
                <div className="pjTitle">"Guidr"</div>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/Build-Week-FT-Guidr/back-end" bgColor="transparent" fgColor="black"/>
                </div>
                </div></a>
                <a href="https://githubcard.now.sh/"><div className="pjImgHouse">
                <img className="pjPic" src={githubcard} alt="Git Hub Followers Project"/>
                <div className="pjTitle">"Git Hub Followers"</div>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/rogermcconkiejr/React-Github-User-Card" bgColor="transparent" fgColor="black"/>
                </div>
                </div></a>
            </div>
            <hr /> 
        </div>
    )
}

export default ProjectHouse;
