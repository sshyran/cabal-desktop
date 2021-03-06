import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import App from './app'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

// Disable debug console.log messages coming from dependencies
window.localStorage.removeItem('debug')

const store = createStore(
  reducer,
  // compose(applyMiddleware(thunk, logger))
  compose(applyMiddleware(thunk))
)

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
)
