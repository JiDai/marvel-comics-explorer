/**
 * Created by jd on 26/07/16.
 */
import React, {Component, PropTypes} from 'react'
import {connect} from 'react-redux'

import fe from '../actions/dashboard'
import {changeTitle} from '../actions/navigation'

export default class Dashboard extends Component {
    componentWillMount () {
        this.props.dispatch(fe())
        this.props.dispatch(changeTitle('Welcome'))
    }

    render () {
        let count = this.props.comicsCount ? this.props.comicsCount : '...'
        return (
            <div className="small-12 grid-content" onClick={this.handleClick}>
                <h2 className="h2">Welcome! </h2>
                <p>We have <strong>{count}</strong> comics in lists.</p>
                {this.props.children}
            </div>
        )
    }
}

Dashboard.propTypes = {
    comicsCount: PropTypes.number
}

// Link state to props
export default connect(
    state => {
        // MEMO 02
        return {comicsCount: state.reducer.dashboard.comicsCount}
    }
)(Dashboard)
