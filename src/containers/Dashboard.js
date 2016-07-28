/**
 * Created by jd on 26/07/16.
 */
import React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';

import fe from '../actions/dashboard'

export default class Dashboard extends Component {
    componentWillMount() {
        this.props.dispatch(fe())
    }

    render() {
        return (
            <div onClick={this.handleClick}>
                <h1>Dashboard! {this.props.realtorViewsCount ? this.props.realtorViewsCount : '...'}</h1>
                {this.props.children}
            </div>
        );
    }
}

Dashboard = connect(
    state => {
        // Why path is state.reducer.dashboard... and not state.realtorViewsCount
        return {realtorViewsCount: state.reducer.dashboard.realtorViewsCount}
    }
)(Dashboard);
