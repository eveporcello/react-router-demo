import React from 'react'
import MainMenu from './ui/MainMenu'
import { Router, Route, hashHistory, Link, IndexRoute } from 'react-router'
import FaHome from 'react-icons/lib/fa/home'

const App = ({location, children}) => (
    <div className="app">
        {(location.pathname !== '/') ? <MainMenu /> : ""}
        {children}
    </div>
);

module.exports = App;