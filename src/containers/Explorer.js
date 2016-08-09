/**
 * Created by jd on 31/07/16.
 */
import React, {
    Component,
    PropTypes
} from 'react'
import {connect} from 'react-redux'

import {fetchList, fetchComic, fetchSearch} from '../actions/explorer'
import {changeTitle} from '../actions/navigation'
import ComicsList from '../components/ComicsList'
import ComicsListEmpty from '../components/ComicsListEmpty'
import ComicDetail from '../components/ComicDetail'
import SearchField from '../components/SearchField'
import NoSelectedItem from '../components/NoSelectedItem'


class Explorer extends Component {
    constructor () {
        super()
        // MEMO 01
        this._handleSearch = this._handleSearch.bind(this)
    }

    componentWillMount () {
        this.props.dispatch(fetchList())
        this.props.dispatch(changeTitle('Comics'))
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.params.comicId && nextProps.params.comicId !== this.props.params.comicId) {
            this.props.dispatch(fetchComic(nextProps.params.comicId))
        }
    }

    _handleSearch (query) {
        if (query) {
            this.props.dispatch(fetchSearch(query))
        }
    }

    render () {
        let child,
            list

        child = <NoSelectedItem>Please select a comic in the list</NoSelectedItem>
        if (this.props.isDetailFetching) {
            child = <NoSelectedItem>Pending</NoSelectedItem>
        } else if (this.props.params.comicId && this.props.selectedComic) {
            child = <ComicDetail comic={this.props.selectedComic} />
        }

        list = <ComicsListEmpty />
        if (this.props.isListFetching) {
            list = <NoSelectedItem>Pending</NoSelectedItem>
        } else if (this.props.comicsList && this.props.comicsList.length > 0) {
            list = <ComicsList comics={this.props.comicsList} />
        }

        return (
            <div className="small-12 medium-9 grid-block">
                <div className="comic-list small-12 medium-6 grid-block vertical">
                    <div className="grid-block shrink">
                        <SearchField className="comic-list__searchfield" handleSearch={this._handleSearch} />
                    </div>
                    <div className="grid-block">
                        {list}
                    </div>
                </div>
                <div className="comic-detail small-12 medium-6 grid-block">
                    {child}
                </div>
            </div>
        )
    }
}

// MEMO 03
Explorer.propTypes = {
    comicsList: PropTypes.array,
    selectedComic: PropTypes.object,
    isListFetching: PropTypes.bool,
    isDetailFetching: PropTypes.bool
}

// Link state to props
export default connect(
    (state/*, ownProps*/) => {
        return {
            comicsList: state.reducer.explorer.comicsList,
            selectedComic: state.reducer.explorer.comic,
            isFetching: state.reducer.explorer.isFetching,
            isListFetching: state.reducer.explorer.isListFetching,
            isDetailFetching: state.reducer.explorer.isDetailFetching
        }
    }
)(Explorer)
