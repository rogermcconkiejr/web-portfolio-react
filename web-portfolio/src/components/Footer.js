import React from 'react';
import { SocialIcon } from 'react-social-icons';


function Footer() {
    return (
        <div className="foot">
                <div className="socialLinksDivFoot">
                    <SocialIcon className="socialLink" url="https://www.linkedin.com/in/roger-mcconkie-jr/" bgColor="transparent" fgColor="white"/>
                    <SocialIcon className="socialLink" url="https://github.com/rogermcconkiejr" bgColor="transparent" fgColor="white"/>
                    <SocialIcon className="socialLink" url="https://twitter.com/rogkid17" bgColor="transparent" fgColor="white"/>
                    <SocialIcon className="socialLink" url="https://www.facebook.com/roger.mcconkie.7" bgColor="transparent" fgColor="white"/>
                </div>
        </div>
    )
}

export default Footer;
