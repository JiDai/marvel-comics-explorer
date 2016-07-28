// Constants

export const constants = {
    INBOX_FETCH: 'INBOX_FETCH'
};

// Action Creators

export const actions = {
    inboxFetch: function() {

    }
};

// Reducer
export const defaultState = {};

export default function (state = defaultState, action) {
    switch (action.type) {
        case constants.INBOX_FETCH:

            break;
        default:
            return state;
    }
}
