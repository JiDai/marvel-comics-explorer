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
import TopBar from '../components/TopBar'


class App extends Component {
    render () {
        return (
            <div className="grid-frame vertical">
                {this.props.topbarMessage &&
                    <TopBar type={this.props.topbarMessage.type}>{this.props.topbarMessage.title}</TopBar>}
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
    title: PropTypes.string,
    topbarMessage: PropTypes.object
}

// Link state to props
export default connect(
    state => {
        return {
            title: state.reducer.navigation.title,
            topbarMessage: state.reducer.navigation.topbarMessage
        }
    }
)(App)
