import React from 'react'
import MemberInfo from './MemberInfo'
import MemberFilters from './MemberFilters'
import Breadcrumbs from './Breadcrumbs'
import { saveTo, getFakeMembers, compose } from '../../lib'
import { hashHistory } from 'react-router'

class Members extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            members: (sessionStorage.members) ? JSON.parse(sessionStorage.members) : [],
            loadingMembers: (sessionStorage.members) ? false : true
        };
    }

    componentDidMount() {
        if (!sessionStorage.members) {
            getFakeMembers(100).then(
                compose(
                    saveTo(sessionStorage, "members"),
                    members => this.setState({members, loadingMembers: false})
                ),
                error => console.error(error)
            );
        }
    }

    render() {
        const {routes, params} = this.props;
        const {members, loadingMembers} = this.state;
        const genderRoute = params.gender || "any";
        const stateRoute = params.state || "any";
        return <div>
            <Breadcrumbs routes={routes}/>
            <MemberFilters state={params.state}
                           gender={params.gender}
                           onGenderChange={(gender) => hashHistory.push(`/members/${gender}/${stateRoute}`)}
                           onStateChange={(state) => hashHistory.push(`/members/${genderRoute}/${state}`)}/>
            {(loadingMembers) ?
                <span>Members Loading</span> :
                <MemberInfo state={params.state}
                            gender={params.gender}
                            members={members}

                />}
        </div>
    }
}




module.exports = Members;