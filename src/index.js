import 'babel-polyfill'
import Immutable from 'immutable'
import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import app from './redux/reducers'
import App from './components/App'
import thunk from 'redux-thunk'

let data = {}

var immutableMap = Immutable.Map(data);
const store = createStore(app, data, applyMiddleware(thunk));
console.log(data);

render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
)
