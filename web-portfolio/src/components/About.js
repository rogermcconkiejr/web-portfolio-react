import React from 'react';
import mountBan from '../Assets/mountBan.jpg'
function About() {
    return (
        <div className="aboutDiv" id="about">
            <hr />
            <div className="aboutTitle">About Me</div> 
            <div className="mountWrap">
                <img className="aboutImg" src={mountBan} alt="This is a picture of the Wasatch Mountain Range in Utah." />
            </div>
                <div className="aboutTTWrap">
                               
                    <div className="aboutText">I'm a full stack web developer and data analyst currently living in Salt Lake City, Utah. I 
                    graduated from the University of Utah in 2018 with a bachelors of science degree in economics 
                    with an emphasis in statistical analysis, along with minors in business and Spanish. Recently, 
                    I've worked as an operations analyst and as a market researcher. </div>
                </div>       

        </div>
    )
}

export default About;
