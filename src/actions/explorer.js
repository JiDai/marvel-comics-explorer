/**
 * Created by jd on 27/07/16.
 */
export const REQUEST_COMICS = 'REQUEST_COMICS'
export const RECEIVE_COMICS = 'RECEIVE_COMICS'
export const REQUEST_COMIC = 'REQUEST_COMIC'
export const RECEIVE_COMIC = 'RECEIVE_COMIC'

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

export function fetchData () {
    return function (dispatch) {
        dispatch(requestData())
        marvel('comics', {}, (err, body) => {
            if (err) {
                console.log('err : ', err)
                return
            }
            return dispatch(receiveData(body.data))
        })
    }
}


function requestComicData () {
    return {
        type: REQUEST_COMIC
    }
}

function receiveComicData (json) {
    return {
        type: RECEIVE_COMIC,
        comic: json.results[0]
    }
}

export function fetchComicData (id) {
    return function (dispatch) {
        dispatch(requestComicData())
        marvel('comics/' + id, {}, (err, body) => {
            if (err) {
                console.log('err : ', err)
                return
            }
            return dispatch(receiveComicData(body.data))
        })
    }
}

