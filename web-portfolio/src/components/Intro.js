import React from 'react';
import rogerpic from '../Assets/rogerpic.jpg';
import { SocialIcon } from 'react-social-icons';

function Intro() {
    return (
        <div className="introDiv">
                <img className="selfie1" src={rogerpic} alt="This is a picture of Roger" />
                <div className="name1">Roger McConkie Jr.</div>
                <div className="role1">Fullstack Engineer</div>
                <hr className="hr1"/>
                <div className="socialLinksDiv">
                    <SocialIcon className="socialLink" url="https://www.linkedin.com/in/roger-mcconkie-jr/" bgColor="transparent" fgColor="white"/>
                    <SocialIcon className="socialLink" url="https://github.com/rogermcconkiejr" bgColor="transparent" fgColor="white"/>
                    <SocialIcon className="socialLink" url="https://twitter.com/rogkid17" bgColor="transparent" fgColor="white"/>
                    <SocialIcon className="socialLink" url="https://www.facebook.com/roger.mcconkie.7" bgColor="transparent" fgColor="white"/>
                </div>
                <hr />
        </div>
    )
}

export default Intro;
