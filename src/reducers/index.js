import {combineReducers} from 'redux'

import dashboard from './dashboard'
import explorer from './explorer'
import navigation from './navigation'


export default combineReducers({
    navigation,
    dashboard,
    explorer
})
