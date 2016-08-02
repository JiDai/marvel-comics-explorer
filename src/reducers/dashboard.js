import {RECEIVE_COMICS_COUNT, REQUEST_COMICS_COUNT} from '../actions/dashboard'

const initialState = {
    isFetching: false,
    comicsCount: null
}

export default function comicsCount (state = initialState, action) {
    switch (action.type) {
        case REQUEST_COMICS_COUNT:
            return {
                ...state,
                isFetching: true
            }
        case RECEIVE_COMICS_COUNT:
            return {
                ...state,
                isFetching: false,
                comicsCount: action.comicsCount
            }
        default:
            return state
    }
}
