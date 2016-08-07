import {
    REQUEST_COMICS,
    RECEIVE_COMICS,
    RECEIVE_COMICS_FAILED,
    REQUEST_COMIC,
    RECEIVE_COMIC,
    RECEIVE_COMIC_FAILED
} from '../actions/explorer'

const initialState = {
    isListFetching: false,
    isDetailFetching: false,
    comicsList: null
}

export default function comicsList (state = initialState, action) {
    switch (action.type) {
        case REQUEST_COMICS:
            return {
                ...state,
                isListFetching: true
            }
        case RECEIVE_COMICS:
            return {
                ...state,
                isListFetching: false,
                comicsList: action.comicsList
            }
        case RECEIVE_COMICS_FAILED:
            return {
                ...state,
                isListFetching: false,
                comicsList: null
            }
        case REQUEST_COMIC:
            return {
                ...state,
                isDetailFetching: true
            }
        case RECEIVE_COMIC:
            return {
                ...state,
                isDetailFetching: false,
                comic: action.comic
            }
        case RECEIVE_COMIC_FAILED:
            return {
                ...state,
                isDetailFetching: false,
                comic: action.comic
            }
        default:
            return state
    }
}
