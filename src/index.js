/**
 * Created by jd on 16/07/16.
 */
import React from 'react'
import ReactDOM from 'react-dom'
import {compose, createStore, applyMiddleware, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {syncHistoryWithStore, routerReducer} from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

import App from './containers/App'
import Dashboard from './containers/Dashboard'
import Explorer from './containers/Explorer'
import ComicDetail from './components/ComicDetail'
import reducer from './reducers'

import './index.html'

// Add the reducer to your store on the `routing` key
const store = createStore(
    combineReducers({
        reducer: reducer,
        routing: routerReducer
    }),
    compose(
        applyMiddleware(thunkMiddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

const history = syncHistoryWithStore(browserHistory, store)

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={Dashboard} />
                <Route path="/explorer" component={Explorer}>
                    <Route path=":comicId" component={ComicDetail} />
                </Route>
            </Route>
        </Router>
    </Provider>, document.getElementById('root')
)
