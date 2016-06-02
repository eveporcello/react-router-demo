import { hashHistory } from 'react-router'

const Home = () =>
    <div id="homepage">
    <div id="homebox">
    </div>
    <section className="home-page-menu">
        <h1 id="banner">Welcome</h1>
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
        </div>



module.exports = Home;