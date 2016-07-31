/**
 * Created by jd on 27/07/16.
 */
export const REQUEST_COMICS = 'REQUEST_COMICS'
export const RECEIVE_COMICS = 'RECEIVE_COMICS'

import marvel from '../MarvelClient'

function requestData () {
    return {
        type: REQUEST_COMICS
    }
}

function receiveData (json) {
    return {
        type: RECEIVE_COMICS,
        comicsList: json.results
    }
}

export default function fetchData () {
    return function (dispatch) {
        dispatch(requestData())
        marvel('comics', {}, (err, body) => {
            if (err) {
                console.log('err : ', err)
                return
            }
            return dispatch(receiveData(body.data));
        })
    }
}

