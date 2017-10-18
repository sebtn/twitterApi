import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Main from '../components/Main'

export default (
  <Router history={hashHistory}>
    <Route path='/' >
      <IndexRoute component={Main}/>
    </Route>
  </Router>
)