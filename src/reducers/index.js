import {combineReducers } from 'redux'

import dashboard from './dashboard'
import explorer from './explorer'


export default combineReducers({
    dashboard,
    explorer
})
