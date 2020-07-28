import * as React from 'react'
import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
  } from 'react-router-dom'
  
import App from '../containers/App/App'
  
const RouterComponent = () => (
    <Router>
        <div>
            <Switch>
                <Route path="/" exact={true}>
                    <Redirect to="aqua-theme" />
                </Route>
                <Route path="/aqua-theme">
                    <App theme='aqua' />
                </Route>
                <Route path="/fire-theme">
                    <App theme='fire' />
                </Route>
            </Switch>
        </div>
    </Router>
)
export default RouterComponent