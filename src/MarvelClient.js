/**
 * Created by jd on 29/07/16.
 */

import api from 'marvel-comics-api'

var marvel = function (endpoint, options, callback) {
    let apiOptions = Object.assign({
        publicKey: process.env.MARVEL_API_PUBLIC_KEY,
        timeout: 4000,
        query: {
            limit: 50
        }
    }, options)
    api(endpoint, apiOptions, callback)
}

export default marvel
