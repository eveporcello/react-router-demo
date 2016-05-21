import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router'
import App from './components/App'
import Home from './components/ui/Home'
import About from './components/ui/About'
import Events from './components/ui/Events'
import Members from './components/ui/Members'
import MemberList from './components/ui/MemberList'
import Whoops404 from './components/ui/Whoops404'

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About}></Route>
            <Route path="events" component={Events}></Route>
            <Route path="members" component={Members}>
                <Route path=":gender" component={MemberList}/>
                <Route path=":gender/:state" component={MemberList}/>
            </Route>
            <Route path="*" component={Whoops404}></Route>
        </Route>
    </Router>
);

render(routes, document.getElementById('react-container'));