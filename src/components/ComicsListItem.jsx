import React, {
    Component,
    PropTypes
} from 'react'
import {Link} from 'react-router'

import ComicImage from './ComicImage'


class ComicsListItem extends Component {
    render () {
        return (
            <li className="comic-list-item">
                <Link to={`/explorer/${this.props.id}`}>
                    <div className="comic-list-item__title">{this.props.title}</div>
                    <ComicImage className="comic-list-item__picture" thumbnail={this.props.thumbnail} height="120" />
                    <p className="comic-list-item__description">{this.props.description}</p>
                </Link>
            </li>
        )
    }
}

ComicsListItem.propTypes = {
    id: PropTypes.number,
    title: PropTypes.string,
    thumbnail: PropTypes.object,
    description: PropTypes.string
}
ComicsListItem.defaultProps = {}

export default ComicsListItem
