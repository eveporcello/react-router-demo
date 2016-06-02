import React from 'react'
import { Link } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => {
    return (
        <nav className="main-menu">
            <Link to="/"><FaHome/></Link>
            <Link to="about" activeStyle={{backgroundColor: '#708090', color: '#FFFFFF'}}>About</Link>
            <Link to="events" activeStyle={{backgroundColor: '#708090', color: '#FFFFF'}}>Events</Link>
            <Link to="members" activeStyle={{backgroundColor: '#708090', color: 'white'}}>Members</Link>
        </nav>
    )
};

module.exports = MainMenu;