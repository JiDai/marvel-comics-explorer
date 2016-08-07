/**
 * Created by jd on 27/07/16.
 */
export const REQUEST_COMICS = 'REQUEST_COMICS'
export const RECEIVE_COMICS = 'RECEIVE_COMICS'
export const RECEIVE_COMICS_FAILED = 'RECEIVE_COMICS_FAILED'
export const REQUEST_COMIC = 'REQUEST_COMIC'
export const RECEIVE_COMIC = 'RECEIVE_COMIC'
export const RECEIVE_COMIC_FAILED = 'RECEIVE_COMIC_FAILED'

import marvel from '../MarvelClient'

function requestList () {
    return {
        type: REQUEST_COMICS
    }
}

function receiveList (json) {
    return {
        type: RECEIVE_COMICS,
        comicsList: json.results
    }
}

function receiveListFailed () {
    return {
        type: RECEIVE_COMICS_FAILED,
        comicsList: null
    }
}

export function fetchList () {
    return function (dispatch) {
        dispatch(requestList())
        marvel('comics', {}, (err, body) => {
            if (err) {
                console.log('err : ', err)
                return
            }
            return dispatch(receiveList(body.data))
        })
    }
}

export function fetchSearch (titleStartsWith) {
    return function (dispatch) {
        dispatch(requestList())
        marvel('comics', {query: {titleStartsWith: titleStartsWith}}, (err, body) => {
            if (err) {
                console.log('err : ', err)
                dispatch(receiveListFailed())
                return
            }
            return dispatch(receiveList(body.data))
        })
    }
}


function requestComic () {
    return {
        type: REQUEST_COMIC
    }
}

function receiveComic (json) {
    return {
        type: RECEIVE_COMIC,
        comic: json.results[0]
    }
}

function receiveComicFailed () {
    return {
        type: RECEIVE_COMIC_FAILED,
        comic: null
    }
}

export function fetchComic (id) {
    return function (dispatch) {
        dispatch(requestComic())
        marvel('comics/' + id, {}, (err, body) => {
            if (err) {
                console.log('err : ', err)
                dispatch(receiveComicFailed())
                return
            }
            return dispatch(receiveComic(body.data))
        })
    }
}

