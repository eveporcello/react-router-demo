import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const About = ({routes}) => (
   <div>
      <Breadcrumbs routes={routes}/>
        <h1>About</h1>
   </div>
);

module.exports = About;