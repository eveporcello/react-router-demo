import React from 'react'

class Breadcrumbs extends React.Component {

    render() {
        return (
            <ul className="breadcrumbs-list">
                {this.props.routes.map((route, i) =>  (route.path) ? <li key={i}>{route.path}</li> : null)}
            </ul>
        );
    }
}

module.exports = Breadcrumbs;


