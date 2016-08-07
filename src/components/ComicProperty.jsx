import React, {
    Component,
    PropTypes
} from 'react'

class ComicProperty extends Component {
    render () {
        return (
            <div><strong>{this.props.label} </strong>: {this.props.value} </div>
        )
    }
}

ComicProperty.propTypes = {
    label: PropTypes.string,
    value: PropTypes.string
}
ComicProperty.defaultProps = {}

export default ComicProperty
