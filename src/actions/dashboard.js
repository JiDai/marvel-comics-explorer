/**
 * Created by jd on 27/07/16.
 */
export const RECEIVE_COMICS_COUNT = 'RECEIVE_COMICS_COUNT'
export const REQUEST_COMICS_COUNT = 'REQUEST_COMICS_COUNT'

import marvel from '../MarvelClient'

function requestComicsCount () {
    return {
        type: REQUEST_COMICS_COUNT
    }
}

function receiveComicsCount (json) {
    return {
        type: RECEIVE_COMICS_COUNT,
        comicsCount: json.total
    }
}

export default function fetchComicsCount () {
    return function (dispatch) {
        dispatch(requestComicsCount())
        marvel('comics', {}, (err, body) => {
            if (err) {
                console.log('err : ', err)
                return
            }
            return dispatch(receiveComicsCount(body.data))
        })
    }
}

