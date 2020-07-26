import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import App from './containers/App/App'
import store from './store'

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.querySelector('#root'))