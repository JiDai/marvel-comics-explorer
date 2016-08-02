import React, {
    Component,
    PropTypes
} from 'react'

import ComicImage from './ComicImage'


class ComicDetail extends Component {
    render () {
        return (
            <div className="grid-content">
                <h3>
                    {this.props.comic.title}
                    <ComicImage thumbnail={this.props.comic.thumbnail} />
                </h3>
            </div>
        )
    }
}

ComicDetail.propTypes = {
    comic: PropTypes.object
}
ComicDetail.defaultProps = {}

export default ComicDetail
