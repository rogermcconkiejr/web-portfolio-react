import React from 'react';
import { SocialIcon } from 'react-social-icons';

import designHub from "../Assets/designHub.png"
import tipsease from "../Assets/tipsease.png"
import diy from "../Assets/diy.png"
import nasa from "../Assets/nasa.png"
import guidr from "../Assets/guidr.png"
import thunderball from "../Assets/thunderball.png"
function ProjectHouse() {
    return (
        <div className="pjWrapper" id="portfolio">
            <div className="portTitle">Portfolio</div>
            
            <div className="pjHouse">
                <div className="pjImgHouse">
                <a href="https://designhubx.com/explore"><img className="pjPic" src={designHub} alt="Design Hub"/></a>
                <a href="https://designhubx.com/explore" className="pjaTitle">Design Hub</a>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/Lambda-School-Labs/designhub-be" bgColor="transparent" fgColor="black"/>
                </div>
                </div>
                <div className="pjImgHouse">
                <a href="https://thunderball-run.gettingonthe.net/"><img className="pjPic" src={thunderball} alt="Thunderball run Project"/></a>
                <a href="https://thunderball-run.gettingonthe.net/" className="pjaTitle">Thunderball Run</a>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/awesome-mud" bgColor="transparent" fgColor="black"/>
                </div>
                </div>
                <div className="pjImgHouse">
                <a href="https://tipseaseui-roger.rogermcconkiejr.now.sh/"><img className="pjPic" src={tipsease} alt="Tipsease"/></a>
                <a href="https://tipseaseui-roger.rogermcconkiejr.now.sh/" className="pjaTitle">Tipsease</a>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/bw-tipsease/TipsEaseUI-Roger" bgColor="transparent" fgColor="black"/>
                </div>
                </div>
                <div className="pjImgHouse">
                <a href="https://diy-tracker.rogermcconkiejr.now.sh/login"><img className="pjPic" src={diy} alt="DIY Project"/></a>
                <a href="https://diy-tracker.rogermcconkiejr.now.sh/login" className="pjaTitle">DIY Tracker</a>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/DIY-Tracker/Frontend-Developer/tree/master/diy-tracker" bgColor="transparent" fgColor="black"/>
                </div>
                </div>
                <div className="pjImgHouse">
                <a href="https://nasa-photo-of-the-day.rogermcconkiejr.now.sh/"><img className="pjPic" src={nasa} alt="NASA photo of the day project"/></a>
                <a href="https://nasa-photo-of-the-day.rogermcconkiejr.now.sh/" className="pjaTitle">NASA photo of the day</a>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/rogermcconkiejr/nasa-photo-of-the-day" bgColor="transparent" fgColor="black"/>
                </div>
                </div>
                <div className="pjImgHouse">
                <a href="https://guidr.now.sh/"><img className="pjPic" src={guidr} alt="GUIDR Project"/></a>
                <a href="https://guidr.now.sh/" className="pjaTitle">Guidr</a>
                <div className="pjIcon">
                    <SocialIcon url="https://github.com/Build-Week-FT-Guidr/back-end" bgColor="transparent" fgColor="black"/>
                </div>
                </div>
            </div>
            <hr /> 
        </div>
    )
}

export default ProjectHouse;
