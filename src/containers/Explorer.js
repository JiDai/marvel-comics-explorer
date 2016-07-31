/**
 * Created by jd on 31/07/16.
 */
import React from 'react'
import {Component} from 'react'
import {connect} from 'react-redux'

import fetchData from '../actions/explorer'
import ComicsList from '../components/ComicsList'
import ComicDetail from '../components/ComicDetail'


export default class Explorer extends Component {
    componentWillMount () {
        this.props.dispatch(fetchData())
    }

    render () {
        return (
            <div>
                <h1>Explorer</h1>
                <ComicsList comics={this.props.comicsList} />
            </div>
        );
    }
}

// Link state to props
Explorer = connect(
    state => {
        return {comicsList: state.reducer.explorer.comicsList}
    }
)(Explorer)
