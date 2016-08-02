/**
 * Created by jd on 27/07/16.
 */
export const RECEIVE_COMICS_COUNT = 'RECEIVE_COMICS_COUNT'
export const REQUEST_COMICS_COUNT = 'REQUEST_COMICS_COUNT'

import marvel from '../MarvelClient'

function requestRealtorViews () {
    return {
        type: REQUEST_COMICS_COUNT
    }
}

function receiveRealtorViews (json) {
    return {
        type: RECEIVE_COMICS_COUNT,
        comicsCount: json.total
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
            return dispatch(receiveRealtorViews(body.data))
        })
    }
}

