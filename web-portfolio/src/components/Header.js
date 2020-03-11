import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
function Header() {
    return (
        <div className="navBar">
                <ScrollLink
                className="styledLink"
                activeClass="active"
                to="skills"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Skills</ScrollLink>
            <ScrollLink
                className="styledLink"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Portfolio</ScrollLink>
                <ScrollLink
                className="styledLink"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>About Me</ScrollLink>
                <ScrollLink
                className="styledLink"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}>Contact</ScrollLink>

            {/* <Link className="styledLink">Intro</Link>
            <Link className="styledLink">Portfolio</Link>
            <Link className="styledLink">About Me</Link>
            <Link className="styledLink">Resumé</Link>    */}
        </div>
    )
}

export default Header;
