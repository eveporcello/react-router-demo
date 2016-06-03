import React from 'react'
import { Link } from 'react-router'

const AboutMenu = ({location}) => {
    return (
        <nav className="about-menu">
            <li><Link to="about" className={(location.pathname === '/about') ? 'selected' : ''}>Company</Link></li>
            <li><Link to="/about/history" activeStyle={{backgroundColor: "white", color: "slategray"}}>History</Link></li>
            <li><Link to="/about/services" activeStyle={{backgroundColor: "white", color: "slategray"}}>Services</Link></li>
            <li><Link to="/about/location" activeStyle={{backgroundColor: "white", color: "slategray"}}>Location</Link></li>
        </nav>
    )
};

module.exports = AboutMenu;