import React from 'react'
import Breadcrumbs from './Breadcrumbs'
import AboutMenu from './AboutMenu'

const About = ({routes, children}) => (
   <div>
      <Breadcrumbs routes={routes}/>
        <h1>About</h1>
       <AboutMenu routes={routes}/>
       {children}
   </div>
);

module.exports = About;