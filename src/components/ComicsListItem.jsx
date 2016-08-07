import React, {
    Component,
    PropTypes
} from 'react'
import {Link} from 'react-router'

import ComicImage from './ComicImage'


class ComicsListItem extends Component {
    render () {
        return (
            <li className="comic-list__item">
                <Link to={`/explorer/${this.props.id}`}>
                    <div className="comic-list-item__title">{this.props.title}</div>
                    <ComicImage className="comic-list-item__image" thumbnail={this.props.thumbnail} height="120" />
                    <p className="comic-list-item__description">{this.props.description || 'No description provided'}</p>
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
