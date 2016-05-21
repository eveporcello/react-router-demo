import React from 'react'
import { Link } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const MainMenu = () => {
    return (
        <nav>
            <Link to="/"><FaHome/></Link>
            <Link to="about" activeClassName="active">About</Link>
            <Link to="events" activeClassName="active">Events</Link>
            <Link to="members" activeClassName="active">Members</Link>
        </nav>
    )
};

module.exports = MainMenu;