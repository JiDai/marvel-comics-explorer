import React, {
    Component,
    PropTypes,
} from 'react';
import {Link} from 'react-router'


class Navigation extends Component {
    render () {
        return (
            <div>
                <Link to="/">Dashboard</Link>
                <Link to="/explorer">Explorer</Link>
            </div>
        );
    }
}

Navigation.propTypes = {};
Navigation.defaultProps = {};

export default Navigation;
