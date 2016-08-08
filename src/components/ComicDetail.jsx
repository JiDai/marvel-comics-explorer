import React, {
    Component,
    PropTypes
} from 'react'
import {Lightbox} from 'react-lightbox-component'

import ComicImageHero from './ComicImageHero'
import ComicProperty from './ComicProperty'


class ComicDetail extends Component {
    render () {
        var images = []
        if (this.props.comic.images) {
            images = this.props.comic.images.map((image, index) => {
                return {
                    title: '',
                    src: image.path + '.' + image.extension,
                    key: this.props.comic.id + '_image_' + index
                }
            })
        }
        return (
            <div className="grid-content">
                <ComicImageHero thumbnail={this.props.comic.thumbnail} />
                <h3>{this.props.comic.title}</h3>
                <p>{this.props.comic.description}</p>
                <p>
                    {this.props.comic.digitalId ? <ComicProperty label="digitalId" value={this.props.comic.digitalId} /> : null}
                    {this.props.comic.issueNumber ? <ComicProperty label="issueNumber" value={this.props.comic.issueNumber} /> : null}
                    {this.props.comic.variantDescription ? <ComicProperty label="variantDescription" value={this.props.comic.variantDescription} /> : null}
                    {this.props.comic.modified ? <ComicProperty label="modified" value={this.props.comic.modified} /> : null}
                    {this.props.comic.isbn ? <ComicProperty label="isbn" value={this.props.comic.isbn} /> : null}
                    {this.props.comic.upc ? <ComicProperty label="upc" value={this.props.comic.upc} /> : null}
                    {this.props.comic.diamondCode ? <ComicProperty label="diamondCode" value={this.props.comic.diamondCode} /> : null}
                    {this.props.comic.ean ? <ComicProperty label="ean" value={this.props.comic.ean} /> : null}
                    {this.props.comic.issn ? <ComicProperty label="issn" value={this.props.comic.issn} /> : null}
                    {this.props.comic.format ? <ComicProperty label="format" value={this.props.comic.format} /> : null}
                    {this.props.comic.pageCount ? <ComicProperty label="pageCount" value={this.props.comic.pageCount} /> : null}
                </p>

                <p>
                    {this.props.comic.urls && this.props.comic.urls.map((url, index) => {
                        return (
                            <div>
                                <a key={this.props.comic.id + '_url_' + index}
                                    target="_blank"
                                    href={url.url}>&raquo; {url.type}</a>
                            </div>
                        )
                    })}
                </p>

                <h5>Images</h5>
                <Lightbox images={images} />
            </div>
        )
    }
}

ComicDetail.propTypes = {
    comic: PropTypes.object
}
ComicDetail.defaultProps = {}

export default ComicDetail
