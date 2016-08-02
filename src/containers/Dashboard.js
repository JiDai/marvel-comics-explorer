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
        return (
            <div className="small-12 grid-content" onClick={this.handleClick}>
                <h2 className="h2">Welcome! </h2>
                <p>We have <strong>{this.props.comicsCount ? this.props.comicsCount : '...'}</strong>
                    commics in lists.</p>
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
        // Why path is state.reducer.dashboard... and not state.realtorViewsCount ?
        return {comicsCount: state.reducer.dashboard.comicsCount}
    }
)(Dashboard)
