import React from 'react';
import designHub from "../Assets/designHub.png"
import tipsease from "../Assets/tipsease.png"
import diy from "../Assets/diy.png"

function ProjectHouse() {
    return (
        <div className="pjWrapper">
            <div className="portTitle">Portfolio</div>
            
            <div className="pjHouse">
                <div className="pjImgHouse">
                <img className="pjPic" src={designHub} alt="Design Hub"/>
                <div className="pjTitle">"Design Hub"</div>
                </div>
                <div className="pjImgHouse">
                <img className="pjPic" src={tipsease} alt="Tipsease"/>
                <div className="pjTitle">"Tipsease"</div>
                </div>
                <div className="pjImgHouse">
                <img className="pjPic" src={diy} alt="DIY Project"/>
                <div className="pjTitle">"DIY Tracker"</div>
                </div>


            </div>
            <hr /> 
        </div>
    )
}

export default ProjectHouse;
