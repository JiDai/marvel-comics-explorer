
import {RECEIVE_REALTOR_VIEWS, REQUEST_REALTOR_VIEWS} from '../actions/dashboard'
const initialState = {
    isFetching: false,
    realtorViewsCount: null
}

export default function realtorViews(state = initialState, action) {
    switch (action.type) {
        case 'REQUEST_REALTOR_VIEWS':
            return {
                ...state,
                isFetching: true,
            }
        case 'RECEIVE_REALTOR_VIEWS':
            return {
                ...state,
                isFetching: false,
                realtorViewsCount: action.viewsCount
            }
        default:
            return state
    }
}
