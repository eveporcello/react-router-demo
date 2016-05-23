import Member from './Member'
import { PropTypes } from 'react'
import {compose, filterByGender, filterByState} from '../../lib'

const MemberInfo = ({members, gender="any", state="any"}) => {

    const membersToRender = compose(
        filterByGender(gender.toLowerCase()),
        filterByState(state.toLowerCase())
    )(members);

    return (
        <div className="member-info">
            <h1>{membersToRender.length} {(gender==="any") ? "Members" : (gender==="female") ? "Women" : "Men"}</h1>
            {membersToRender.map((data, i) => <Member key={i} {...data} />)}
        </div>
    )
}

MemberInfo.propTypes = {
    members: PropTypes.array.isRequired,
    gender: PropTypes.string,
    state: PropTypes.string
}

module.exports = MemberInfo