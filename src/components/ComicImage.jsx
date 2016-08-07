import React, {
    Component,
    PropTypes
} from 'react'

class ComicImage extends Component {
    render () {
        let className = this.props.className
            ? 'comic-image ' + this.props.className
            : 'comic-image'
        return (
            <div className={className}>
                <img src={this.props.thumbnail.path + '.' + this.props.thumbnail.extension} width={this.props.imageWidth} />
            </div>
        )
    }
}

ComicImage.propTypes = {
    thumbnail: PropTypes.object,
    className: PropTypes.string,
    imageWidth: PropTypes.string
}
ComicImage.defaultProps = {}

export default ComicImage
