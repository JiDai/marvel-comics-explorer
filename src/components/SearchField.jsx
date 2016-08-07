import React, {
    Component,
    PropTypes
} from 'react'


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
            <input type="search"
                placeholder="Search by name..."
                onKeyUp={this._onKeyUp}
                className={this.props.className} />
        )
    }
}

SearchField.propTypes = {
    handleSearch: PropTypes.function,
    className: PropTypes.function
}
SearchField.defaultProps = {}

export default SearchField
