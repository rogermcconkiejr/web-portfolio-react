import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="navBar">
            <Link className="styledLink">Intro</Link>
            <Link className="styledLink">Portfolio</Link>
            <Link className="styledLink">About Me</Link>
            <Link className="styledLink">Resumé</Link>   
        </div>
    )
}

export default Header;
