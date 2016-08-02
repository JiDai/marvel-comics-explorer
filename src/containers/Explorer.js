/**
 * Created by jd on 31/07/16.
 */
import React, {
    Component,
    PropTypes
} from 'react'
import {connect} from 'react-redux'

import {fetchData, fetchComicData} from '../actions/explorer'
import {changeTitle} from '../actions/navigation'
import ComicsList from '../components/ComicsList'
import ComicDetail from '../components/ComicDetail'
import NoSelectedItem from '../components/NoSelectedItem'


class Explorer extends Component {
    componentWillMount () {
        this.props.dispatch(fetchData())
        this.props.dispatch(changeTitle('Comics'))
    }

    componentWillReceiveProps (nextProps) {
        if (nextProps.params.comicId && nextProps.params.comicId !== this.props.params.comicId) {
            this.props.dispatch(fetchComicData(nextProps.params.comicId))
        }
    }

    render () {
        let child = <NoSelectedItem>Aucun comic sélectionné</NoSelectedItem>
        if (this.props.isFetching) {
            child = <NoSelectedItem>Pending</NoSelectedItem>
        } else if (this.props.params.comicId && this.props.selectedComic) {
            child = <ComicDetail comic={this.props.selectedComic} />
        }

        return (
            <div className="small-12 medium-9 grid-block">
                <div className="small-12 medium-6 grid-content">
                    <ComicsList comics={this.props.comicsList} />
                </div>
                <div className="small-12 medium-6 grid-block">
                    {child}
                </div>
            </div>
        )
    }
}

Explorer.propTypes = {
    comicsList: PropTypes.array,
    selectedComic: PropTypes.object,
    isFetching: PropTypes.boolean
}

// Link state to props
export default connect(
    (state, ownProps) => {
        return {
            comicsList: state.reducer.explorer.comicsList,
            selectedComic: state.reducer.explorer.comic,
            isFetching: state.reducer.explorer.isFetching
        }
    }
)(Explorer)
