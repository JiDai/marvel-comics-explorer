import React, {
    Component,
    PropTypes,
} from 'react'
import {Link} from 'react-router'

class ComicsListItem extends Component {
    render () {
        return (
            <div>
                <Link to={`/explorer/${this.props.id}`}>{this.props.title}</Link>
            </div>
        );
    }
}

ComicsListItem.propTypes = {};
ComicsListItem.defaultProps = {};

export default ComicsListItem;
