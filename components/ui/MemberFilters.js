import React from 'react'

const MemberFilters = () => {
    return (
        <nav id="sublinks">
            <Link to="/members/all">All Members</Link>
            <Link to="/members/female">All Women</Link>
            <Link to="/members/male/virginia">All Men From Virginia</Link>
        </nav>
    )
};

module.exports = MemberFilters;