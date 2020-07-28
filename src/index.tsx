import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import Router from './routers'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <Router />
    </Provider>
, document.querySelector('#root'))