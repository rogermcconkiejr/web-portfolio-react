import React from 'react';
import { SocialIcon } from 'react-social-icons';

import designHub from "../Assets/designHub.png"
import guidr from "../Assets/guidr.png"
import thunderball from "../Assets/thunderball.png"
function ProjectHouse() {

    return (
        <div className="pjWrapper" id="portfolio">
            <div className="portTitle">Portfolio</div>
                <a href="https://designhubx.com/explore" className="firstPj">
                    <div className="pjImgHouse">
                        <a href="https://designhubx.com/explore"><img className="pjPic" src={designHub} alt="Design Hub"/></a>
                    </div>
                    
                    <div className="descPj">
                    <a href="https://designhubx.com/explore" className="pjaTitle">DesignHub</a>
                    <hr className="hr2"/>
                    
                        <p>On DesignHub, I was able to work on both the front and back end of the application, using Node and React.  Redux was used for state management.  Some notable features that I worked on personally
                        were the ability to make projects private, along with a collaboration feature that gave users the ability to share their private projects with other users of their
                        chosing on the site.  I also added a category feature to each project, which allowed users to categorize their projects so that other users could search
                        by category on the explore page.  
                        </p>
                        <div className="pjIcon">
                                <SocialIcon url="https://github.com/Lambda-School-Labs/designhub-be" bgColor="transparent" fgColor="white"/>
                        </div>
                    </div>
                </a>
                <a href="https://thunderball-run.gettingonthe.net/" className = "secondPj">
                    <div className="pjImgHouse">
                    <a href="https://thunderball-run.gettingonthe.net/"><img className="pjPic" src={thunderball} alt="Thunderball run Project"/></a>
                    </div>
                    <div className="descPj">
                        <a href="https://thunderball-run.gettingonthe.net/" className="pjaTitle">Thunderball Run</a>
                        <hr className="hr2"/>
                        <p>Thunderball Run was built using Django and React.  State management was handled by context hooks.  
                         I was able to contribute to the overall design of the application, along with designing and creating the login and register pages.  Along with my team,
                         I implemented the back end of the application using Django and added an audio feature.
                        </p> 
                        <div className="pjIcon">
                        <SocialIcon url="https://github.com/awesome-mud" bgColor="transparent" fgColor="white"/>
                        </div>
                    </div>
                </a>
                <a href="https://guidr.now.sh/" className="thirdPj">
                    <div className="pjImgHouse">
                    <a href="https://guidr.now.sh/"><img className="pjPic" src={guidr} alt="GUIDR Project"/></a>
                    </div>
                    <div className="descPj">
                        <a href="https://guidr.now.sh/" className="pjaTitle">Guidr</a>
                        <hr className="hr2"/>
                        <p>Guidr gave me the opportunity to build a backend from scratch, completely on my own.  I built the backend using Node, along with the Express framework.  I built 
                            out databases that housed user login data, trip data, and profile data for registered guides using SQLite3 and knex.  The rest of my team
                            built the front end of the application using React, with Redux as the state management system.
                        </p>
                        <div className="pjIcon">
                        <SocialIcon url="https://github.com/Build-Week-FT-Guidr/back-end" bgColor="transparent" fgColor="white"/>
                        </div>
                    </div>
                
                </a>
        </div>
    )
}

export default ProjectHouse;
