import React, {
    Component,
    PropTypes,
} from 'react'

import ComicsListItem from './ComicsListItem'


class ComicsList extends Component {
    render () {
        return (
            <div>
                {this.props.comics && this.props.comics.map(comic => {
                    return (
                        <ComicsListItem key={comic.id} {...comic} />
                    )
                })}
            </div>
        );
    }
}

ComicsList.propTypes = {}
ComicsList.defaultProps = {}

export default ComicsList;
