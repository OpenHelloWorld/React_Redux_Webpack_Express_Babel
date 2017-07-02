import { combineReducers } from 'redux'
import Immutable from 'immutable'
import 'babel-polyfill'
import * as actions from './actions'

const initialState = Immutable.Map({
  empty: {}
})

function reducer1(state = initialState, action) {
  switch (action.type) {
    default:
      return state
  }
}

function reducer2(state = initialState, action) {
  switch (action.type) {
    default: 
      return state
  }
}

const app = combineReducers({
	reducer1,
  reducer2
})

export default app


