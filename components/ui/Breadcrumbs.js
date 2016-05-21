import React from 'react'

class Breadcrumbs extends React.Component {

    render() {
        return (
            <ul className="breadcrumbs-list">
                {this.props.routes.map((route, i) =>  <li key={i}>{route.path}</li>)}
            </ul>
        );
    }
}

module.exports = Breadcrumbs;


