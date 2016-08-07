import React, {
    Component,
    PropTypes
} from 'react'

class ComicImageHero extends Component {
    render () {
        let className = this.props.className
            ? 'comic-image-hero ' + this.props.className
            : 'comic-image-hero'
        return (
            <div className={className} style={{backgroundImage: 'url(' + this.props.thumbnail.path + '.' + this.props.thumbnail.extension + ')'}}></div>
        )
    }
}

ComicImageHero.propTypes = {
    className: PropTypes.string,
    thumbnail: PropTypes.object
}
ComicImageHero.defaultProps = {}

export default ComicImageHero
