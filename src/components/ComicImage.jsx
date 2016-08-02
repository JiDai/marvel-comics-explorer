import React, {
    Component,
    PropTypes
} from 'react'

class ComicImage extends Component {
    render () {
        return (
            <div>
                <img src={this.props.thumbnail.path + '.' + this.props.thumbnail.extension} {...this.props} />
            </div>
        )
    }
}

ComicImage.propTypes = {
    thumbnail: PropTypes.object
}
ComicImage.defaultProps = {}

export default ComicImage
