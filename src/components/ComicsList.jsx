import React, {
    Component,
    PropTypes
} from 'react'

import ComicsListItem from './ComicsListItem'


class ComicsList extends Component {
    render () {
        return (
            <div className="grid-content">
                <div className="block-list">
                    <ul className="">
                        {this.props.comics && this.props.comics.map(comic => {
                            return (
                                <ComicsListItem key={comic.id} {...comic} />
                            )
                        })}
                    </ul>
                </div>
            </div>
        )
    }
}

ComicsList.propTypes = {
    comics: PropTypes.array
}
ComicsList.defaultProps = {}

export default ComicsList
