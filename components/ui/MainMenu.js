import React from 'react'
import { Link } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => {
    return (
        <nav className="main-menu">
            <Link to="/"><FaHome/></Link>
            <Link to="about" activeStyle={{backgroundColor: "white", color: "slategray"}}>About</Link>
            <Link to="events" activeStyle={{backgroundColor: "white", color: "slategray"}}>Events</Link>
            <Link to="members" activeStyle={{backgroundColor: "white", color: "slategray"}}>Members</Link>
        </nav>
    )
};

module.exports = MainMenu;