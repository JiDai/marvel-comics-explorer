import React, {
    Component
} from 'react'

class NoSelectedItem extends Component {
    render () {
        return (
            <div className="grid-block no-item">
                <div>{this.props.children || 'Aucun élement sélectionné'}</div>
            </div>
        )
    }
}

NoSelectedItem.propTypes = {}
NoSelectedItem.defaultProps = {}

export default NoSelectedItem
