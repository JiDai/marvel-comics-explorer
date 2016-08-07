import React, {
    Component
} from 'react'

class ComicsListEmpty extends Component {
    render () {
        return (
            <div className="grid-block no-item">
                <div>{this.props.children || 'No comic found'}</div>
            </div>
        )
    }
}

ComicsListEmpty.propTypes = {}
ComicsListEmpty.defaultProps = {}

export default ComicsListEmpty
