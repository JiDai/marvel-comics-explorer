import React, {
    Component,
    PropTypes,
} from 'react';

class ComicDetail extends Component {
    render () {
        return (
            <div>{this.props.title}</div>
        );
    }
}

ComicDetail.propTypes = {};
ComicDetail.defaultProps = {};

export default ComicDetail;
