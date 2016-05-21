import React from 'react'
import { Link } from 'react-router'

const AboutMenu = () => {
    return (
        <nav>
            <li><Link to="about" activeClassName="active">Company</Link></li>
            <li><Link to="/about/history" activeClassName="active">History</Link></li>
            <li><Link to="/about/services" activeClassName="active">Services</Link></li>
            <li><Link to="/about/location" activeClassName="active">Location</Link></li>
        </nav>
    )
};

module.exports = AboutMenu;