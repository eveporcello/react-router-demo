import React from 'react'
import GenderButtons from './GenderButtons'
import StateList from './StateList'

const MemberFilters = ({gender="any", state="any", onGenderChange=f=>f, onStateChange=f=>f}) => (
    <div className="member-filters">
        <h1>Member Filters</h1>
        <GenderButtons selected={gender} onChange={(gender) => onGenderChange(gender)} />
        <StateList selected={state} onChange={(state) => onStateChange(state)} />
    </div>
);

module.exports = MemberFilters;