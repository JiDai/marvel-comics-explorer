import React, {
    Component,
    PropTypes
} from 'react'

class Topbar extends Component {
    render () {
        let className = this.props.className ? 'topbar ' + this.props.className : 'topbar'
        if (this.props.type) {
            className += ' topbar--' + this.props.type
        }
        return (
            <div className={className}>{this.props.children}</div>
        )
    }
}

Topbar.propTypes = {
    className: PropTypes.string,
    type: PropTypes.string
}
Topbar.defaultProps = {}

export default Topbar
