import React from 'react'
const GenderButtons = ({selected="any", onChange=f=>f}) => (
    <div className="gender-filters">
        <span className={(selected.toLowerCase()==="any") ? "selected" : ""} onClick={() => onChange("any")}>Any</span>
        <span className={(selected.toLowerCase()==="male") ? "selected" : ""} onClick={() => onChange("male")}>Male</span>
        <span className={(selected.toLowerCase()==="female") ? "selected" : ""} onClick={() => onChange("female")}>Female</span>
    </div>
);

module.exports = GenderButtons;