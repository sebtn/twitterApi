import React from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'

import  './styles/app.scss' 
import router from './router/index'
import reducers from './reducers/index'

const createMiddleware = applyMiddleware(thunk)(createStore)
const devExtension = compose(window.devToolsExtension ? window.devToolsExtension() : f => f)
const store = createMiddleware(reducers, devExtension)

ReactDOM.render(
  <Provider store={store}>
    {router}
  </Provider>

,document.getElementById('root'))