import React, {Component, PropTypes} from 'react'
import Lightbox from 'react-images'

class Gallery extends Component {
    constructor () {
        super()

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0
        }

        this.closeLightbox = this.closeLightbox.bind(this)
        this.gotoNext = this.gotoNext.bind(this)
        this.gotoPrevious = this.gotoPrevious.bind(this)
        this.handleClickImage = this.handleClickImage.bind(this)
        this.openLightbox = this.openLightbox.bind(this)
    }

    openLightbox (index) {
        this.setState({
            currentImage: index,
            lightboxIsOpen: true
        })
    }

    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false
        })
    }

    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1
        })
    }

    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1
        })
    }

    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return

        this.gotoNext()
    }

    bindOpenLightbox (event, index) {
        var self = this
        event.preventDefault()
        return function () {
            self.openLightbox(index)
        }
    }

    renderGallery () {
        if (!this.props.images) return
        const gallery = this.props.images.map((obj, i) => {
            return (
                <a
                    href={obj.src}
                    key={i}
                    onClick={this.bindOpenLightbox(event, i)}>
                    <img
                        className="gallery__thumbnail"
                        src={obj.thumbnail}
                        width={this.props.thumbnailWidth}
                        height={this.props.thumbnailHeight}
                    />
                </a>
            )
        })

        return (
            <div className="gallery">
                {gallery}
            </div>
        )
    }

    render () {
        return (
            <div className="section">
                {this.renderGallery()}
                <Lightbox
                    currentImage={this.state.currentImage}
                    images={this.props.images}
                    isOpen={this.state.lightboxIsOpen}
                    onClickPrev={this.gotoPrevious}
                    onClickNext={this.gotoNext}
                    onClickImage={this.handleClickImage}
                    onClose={this.closeLightbox}
                />
            </div>
        )
    }
}


Gallery.displayName = 'Gallery'
Gallery.propTypes = {
    images: PropTypes.array,
    thumbnailWidth: PropTypes.string,
    thumbnailHeight: PropTypes.string
}

export default Gallery
