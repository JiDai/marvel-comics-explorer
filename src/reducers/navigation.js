/**
 * Created by jd on 31/07/16.
 */


import {CHANGE_TITLE} from '../actions/navigation'

const initialState = {
    title: ''
}

export default function comicsList (state = initialState, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.title
            }
        default:
            return state
    }
}
