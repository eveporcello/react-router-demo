import React from 'react'
import Breadcrumbs from './Breadcrumbs'

const Members = ({routes}) => (
    <div>
        <Breadcrumbs routes={routes}/>
        <h1>Members</h1>
    </div>
);
module.exports = Members;