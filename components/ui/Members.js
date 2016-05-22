import React from 'react'
import MemberList from './MemberList'
import MemberFilters from './MemberFilters'
import Breadcrumbs from './Breadcrumbs'

const Members = ({routes}) => (
    <div>
        <Breadcrumbs routes={routes}/>
        <h1>Members</h1>
        <MemberList />
        <MemberFilters />
    </div>
);
module.exports = Members;