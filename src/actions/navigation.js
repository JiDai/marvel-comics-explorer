/**
 * Created by jd on 31/07/16.
 */

export const CHANGE_TITLE = 'CHANGE_TITLE'


export function changeTitle (title) {
    return {
        type: CHANGE_TITLE,
        title
    }
}
