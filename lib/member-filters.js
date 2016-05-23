const filterByGender =
    gender =>
        members => (gender !== "any") ?
            members.filter(m => m.gender===gender) :
            members

const filterByState =
    state =>
        members => (state !== "any") ?
            members.filter(m => m.location.state===state) :
            members

module.exports = {filterByGender, filterByState}
