import React from 'react'

const MemberList = ({routeParams}) => {
    return <p>{routeParams.gender || "all"} {routeParams.state || "any"}</p>;
};

module.exports = MemberList;