/**
 * Created by jd on 26/07/16.
 */
import React from 'react';
import {Component} from 'react';


export default class App extends Component {
  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        {this.props.children}
      </div>
    );
  }
}
