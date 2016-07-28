/**
 * Created by jd on 27/07/16.
 */
export const RECEIVE_REALTOR_VIEWS = 'RECEIVE_REALTOR_VIEWS'
export const REQUEST_REALTOR_VIEWS = 'REQUEST_REALTOR_VIEWS'

import axios from 'axios'

function requestRealtorViews() {
    return {
        type: REQUEST_REALTOR_VIEWS
    }
}

function receiveRealtorViews(json) {
    return {
        type: RECEIVE_REALTOR_VIEWS,
        viewsCount: json.views
    }
}

export default function fetchRealtorViews() {
    return function (dispatch) {
        dispatch(requestRealtorViews())
        axios.get(`http://localhost:3001/stats`)
            .then(response => dispatch(receiveRealtorViews(response.data)))
    }
}

