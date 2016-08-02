import {
    RECEIVE_COMICS,
    REQUEST_COMICS,
    RECEIVE_COMIC,
    REQUEST_COMIC
} from '../actions/explorer'

const initialState = {
    isFetching: false,
    comicsList: null
}

export default function comicsList (state = initialState, action) {
    switch (action.type) {
        case REQUEST_COMICS:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_COMICS:
            return {
                ...state,
                isFetching: false,
                comicsList: action.comicsList
            }
        case REQUEST_COMIC:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_COMIC:
            return {
                ...state,
                isFetching: false,
                comic: action.comic
            }
        default:
            return state
    }
}
