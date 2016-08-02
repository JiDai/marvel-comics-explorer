/**
 * Created by jd on 26/07/16.
 */
import React, {
    Component,
    PropTypes
} from 'react'
import {connect} from 'react-redux'

import 'foundation-apps/scss/foundation.scss'
import 'scss/main.scss'

import Sidebar from '../components/Sidebar'


class App extends Component {
    render () {
        return (
            <div className="grid-frame vertical">
                <div className="primary title-bar">
                    <h1 className="h1"><a href="/">Marvel Comics Explorer / {this.props.title}</a></h1>
                </div>

                <div className="grid-block">
                    <Sidebar />
                    {this.props.children}
                </div>
            </div>
        )
    }
}

App.propTypes = {
    title: PropTypes.string
}

// Link state to props
export default connect(
    state => {
        // Why path is state.reducer.dashboard... and not state.realtorViewsCount ?
        return {title: state.reducer.navigation.title}
    }
)(App)
