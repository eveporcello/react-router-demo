import React from 'react'
import { Link } from 'react-router'

const AboutMenu = ({location}) => {
    return (
        <nav className="about-menu">
            <li><Link to="about" className={(location.pathname === '/about') ? 'active' : ''}>Company</Link></li>
            <li><Link to="/about/history" activeClassName="active">History</Link></li>
            <li><Link to="/about/services" activeClassName="active">Services</Link></li>
            <li><Link to="/about/location" activeClassName="active">Location</Link></li>
        </nav>
    )
};

module.exports = AboutMenu;