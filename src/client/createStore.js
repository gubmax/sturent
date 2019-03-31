import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'

import reducer from './redux/reducer'

let store

export default function prepareStore(initialState) {
  store = createStore(
    reducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__(),
      )
      : applyMiddleware(thunk),
  )

  return store
}

export function getStore() {
  return store
}
