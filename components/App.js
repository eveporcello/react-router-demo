import React from 'react'
import MainMenu from './ui/MainMenu'

const App = ({location, children}) => (
    <div className="app">
        {(location.pathname !== '/') ? <MainMenu /> : ""}
        {children}
    </div>
);

module.exports = App;