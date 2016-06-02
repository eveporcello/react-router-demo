import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import App from './components/App'
import {Home, About, Events, Members, Whoops404, History, Location, Services, Company} from './components/ui'

window.React = React;

const routes = (
    <Router history={hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}></IndexRoute>
            <Route path="about" component={About}>
                <IndexRoute component={Company} />
                <Route path="history" component={History}/>
                <Route path="services" component={Services}/>
                <Route path="location" component={Location}/>
            </Route>
            <Route path="events" component={Events}></Route>
            <Route path="members" component={Members}>
                <Route path=":gender"/>
                <Route path=":gender/:state"/>
            </Route>
            <Route path="*" component={Whoops404}></Route>
        </Route>
    </Router>
);

render(routes, document.getElementById('react-container'));


