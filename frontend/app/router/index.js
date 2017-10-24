import React from 'react'
import {Route, Router, IndexRoute, hashHistory} from 'react-router'

import Main from '../components/Main'
import Trump from '../components/Trump'

export default (
  <Router history={hashHistory}>
    <Route path='/' >
      <IndexRoute component={Main}/>
      <Route path="trump" component={Trump} />
    </Route>
  </Router>
)