import React from 'react';
import mountBan from '../Assets/mountBan.jpg'
function About() {
    return (
        <div className="aboutDiv">
            <div className="aboutTitle">About Me</div> 
            <div className="mountWrap">
                <img className="aboutImg" src={mountBan} alt="This is a picture of the Wasatch Mountain Range in Utah." />
            </div>
                <div className="aboutTTWrap">
                               
                    <div className="aboutText">I'm a Full Stack Web Developer and data analyst currently living in Salt Lake City, Utah. I 
                    graduated from the University of Utah in 2018 with a bachelors of science degree in Economics 
                    with an emphasis in Statistical Analysis, along with minors in business and Spanish. Recently, 
                    I've worked as an operations analyst and as a market researcher. </div>
                </div>
        </div>
    )
}

export default About;
