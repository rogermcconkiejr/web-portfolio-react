import React from 'react';
import pikePick from '../Assets/pikePick.JPG'
function About() {
    return (
        <div className="aboutDiv">
                <img className="aboutImg" src={pikePick} alt="This is a picture of Roger with his wife" />
                <div className="aboutTTWrap">
                    <div className="aboutTitle">About Roger</div>            
                    <div className="aboutText">Roger McConkie is a Full Stack Web Developer currently living in Salt Lake City, Utah. He 
                    graduated from the University of Utah in 2018 with a bachelors of science degree in Economics 
                    with an emphasis in Statistical Analysis, along with minors in business and Spanish. Recently, 
                    he has worked as an operations analyst and as a market researcher.</div>
                </div>
        </div>
    )
}

export default About;
