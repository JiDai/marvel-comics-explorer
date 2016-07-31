
import {RECEIVE_COMICS, REQUEST_COMICS} from '../actions/explorer'

const initialState = {
    isFetching: false,
    comicsList: null
}

export default function comicsList(state = initialState, action) {
    switch (action.type) {
        case REQUEST_COMICS:
            return {
                ...state,
                isFetching: true,
            }
        case RECEIVE_COMICS:
            return {
                ...state,
                isFetching: false,
                comicsList: action.comicsList
            }
        default:
            return state
    }
}
