import React from 'react'
import { hashHistory } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const Home = () => (
    <section className="home-page-menu">
        <h1>[Website Title]</h1>
        <section onClick={() => hashHistory.push("/about")}>
            <h2>About Us</h2>
        </section>
        <section onClick={() => hashHistory.push("/events")}>
            <h2>Events</h2>
        </section>
        <section onClick={() => hashHistory.push("/members")}>
            <h2>Members</h2>
        </section>
    </section>
);



module.exports = Home;