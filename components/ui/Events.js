import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const Events = ({routes}) => (
    <div>
        <Breadcrumbs routes={routes}/>
        <h1>Upcoming Events</h1>
    </div>
);


module.exports = Events;