import React from 'react'
import MemberInfo from './MemberInfo'
import MemberFilters from './MemberFilters'
import Breadcrumbs from './Breadcrumbs'
import { saveTo, getFakeMembers, compose } from '../../lib'

// TODO: Load Members (component will mount)
// TODO: Pass members down to memberlist

const membersReady = setState => members => setState({members, loadingMembers: false});

class Members extends React.Component {
    constructor() {
        super();
        this.state = {
            members: [],
            loadingMembers: true
        };
    }

    componentDidMount() {
        getFakeMembers(20).then(
            members => {
               this.setState({members: members, loadingMembers: false})
            },
            error => console.error(error)
        );
    }


    render() {
        return <div>
            <Breadcrumbs routes={this.props.routes}/>
            <h1>Members</h1>
            <MemberFilters />
            {(this.state.loadingMembers) ? <span>Members Loading</span> : <MemberInfo members={this.state.members} />}
        </div>
    }
}




module.exports = Members;