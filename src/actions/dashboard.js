/**
 * Created by jd on 27/07/16.
 */
export const RECEIVE_REALTOR_VIEWS = 'RECEIVE_REALTOR_VIEWS'
export const REQUEST_REALTOR_VIEWS = 'REQUEST_REALTOR_VIEWS'

import marvel from '../MarvelClient'

function requestRealtorViews () {
    return {
        type: REQUEST_REALTOR_VIEWS
    }
}

function receiveRealtorViews (json) {
    return {
        type: RECEIVE_REALTOR_VIEWS,
        viewsCount: json.total
    }
}

export default function fetchRealtorViews () {
    return function (dispatch) {
        dispatch(requestRealtorViews())
        marvel('comics', {}, (err, body) => {
            if (err) {
                console.log('err : ', err)
                return
            }
            return dispatch(receiveRealtorViews(body.data));
        })
    }
}

