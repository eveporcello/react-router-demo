import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import AboutMenu from './AboutMenu'

const About = ({routes, children, location}) => (
   <div>
      <Breadcrumbs routes={routes}/>
        <h1>About</h1>
       <AboutMenu location={location}/>
       {children}
   </div>
);

module.exports = About;