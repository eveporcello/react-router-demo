import React from 'react'
import FaHome from 'react-icons/lib/fa/home'
import { Link } from 'react-router'

class Breadcrumbs extends React.Component {

    render() {
        return (
            <ul className="breadcrumbs-list">
                {this.props.routes.map((route, i) => {
                    if (route.path == '/') {
                        return  <li key={i}><Link to={this.props.routes[i].path}><FaHome/></Link></li>;
                    } else if (route.path && i == this.props.routes.length -1) {
                        return  <li key={i}><span>{route.path}</span></li>;
                    } else if (route.path) {
                        return  <li key={i}><Link to={this.props.routes[i].path}>{route.path}</Link></li>;
                    }
                })}
            </ul>
        );
    }
}

module.exports = Breadcrumbs;


