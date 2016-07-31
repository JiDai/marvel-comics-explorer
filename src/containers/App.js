/**
 * Created by jd on 26/07/16.
 */
import React from 'react';
import {Component} from 'react';

import Navigation from '../components/Navigation'


export default class App extends Component {
    render () {
        return (
            <div>
                <h1>Welcome!</h1>
                <Navigation />
                {this.props.children}
            </div>
        );
    }
}
