import React, {Component} from 'react'
import {Link} from 'react-router'


class Navigation extends Component {
    render () {
        return (
            <div className="sidebar medium-3 grid-block">
                <ul className="grid-content block-list with-icons">
                    <li><Link to="/">Welcome</Link></li>
                    <li><Link to="/explorer">Comics</Link></li>
                </ul>
            </div>
        )
    }
}

Navigation.propTypes = {}
Navigation.defaultProps = {}

export default Navigation
