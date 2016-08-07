/**
 * Created by jd on 31/07/16.
 */


import {
    CHANGE_TITLE,
    DISPLAY_TOPBAR_MESSAGE,
    HIDE_TOPBAR_MESSAGE
} from '../actions/navigation'

const initialState = {
    title: '',
    topbarMesage: null
}

export default function (state = initialState, action) {
    switch (action.type) {
        case CHANGE_TITLE:
            return {
                ...state,
                title: action.title
            }
        case DISPLAY_TOPBAR_MESSAGE:
            return {
                ...state,
                topbarMessage: {
                    title: action.messageTitle,
                    type: action.messageType
                }
            }
        case HIDE_TOPBAR_MESSAGE:
            return {
                ...state,
                topbarMessage: null
            }
        default:
            return state
    }
}
