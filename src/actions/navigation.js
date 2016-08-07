/**
 * Created by jd on 31/07/16.
 */

export const CHANGE_TITLE = 'CHANGE_TITLE'
export const DISPLAY_TOPBAR_MESSAGE = 'DISPLAY_TOPBAR_MESSAGE'
export const HIDE_TOPBAR_MESSAGE = 'HIDE_TOPBAR_MESSAGE'


export function changeTitle (title) {
    return {
        type: CHANGE_TITLE,
        title
    }
}

export function displayTopbarMessage (messageTitle, messageType) {
    return {
        type: DISPLAY_TOPBAR_MESSAGE,
        messageTitle,
        messageType
    }
}


export function hideTopbarMessage () {
    return {
        type: HIDE_TOPBAR_MESSAGE
    }
}
