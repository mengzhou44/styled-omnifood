import { Router, Switch, Route, Redirect } from 'react-router-dom'
import {createBrowserHistory} from 'history'

import HomePage from './components/home-page.js'

function App() {
  return   <Router history={createBrowserHistory()}>
        <div style={{ height: '100%' }}>
          <Switch>   
            <Route exact path='/' component={HomePage} />
            <Route exact path='/plans' component={HomePage} />
            <Route exact path='/features' component={HomePage} />
            <Redirect to='/' />
          </Switch>
      </div>
    </Router>  
}

export default App;

 