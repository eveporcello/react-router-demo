import React from 'react'

import FaHome from 'react-icons/lib/fa/home'

const MemberList = ({routeParams}) => {
    return <p>{routeParams.gender || "all"} {routeParams.state || "any"}</p>;
};

module.exports = MemberList;