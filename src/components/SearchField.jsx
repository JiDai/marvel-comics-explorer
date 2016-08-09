import React, {
    Component,
    PropTypes
} from 'react'
import ReactTooltip from 'react-tooltip'


class SearchField extends Component {
    constructor () {
        super()
        // MEMO 01
        this._onKeyUp = this._onKeyUp.bind(this)
    }

    _onKeyUp (event) {
        this.props.handleSearch(event.target.value)
    }

    render () {
        return (
            <div className={this.props.className}>
                <input type="search"
                    data-tip="Type the first letters of a name"
                    data-effect="solid"
                    data-offset="{'top': -7}"
                    placeholder="Search by name..."
                    onKeyUp={this._onKeyUp} />
                <ReactTooltip />
            </div>
        )
    }
}

SearchField.propTypes = {
    handleSearch: PropTypes.func,
    className: PropTypes.string
}
SearchField.defaultProps = {}

export default SearchField
