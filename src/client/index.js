import React from 'react'
import { hydrate } from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'

import createStore from './createStore'
import AppRouter from './routers/clientRouter'
import StylesProvider from './containers/StylesProvider'

const preloadedState = window.PRELOADED_STATE
delete window.PRELOADED_STATE

const store = createStore(preloadedState)

const insertCss = (...styles) => {
  const removeCss = styles.map(x => x._insertCss())
  return () => {
    removeCss.forEach(f => f())
  }
}

hydrate(
  (
    <Provider store={store}>
      <StylesProvider onInsertCss={insertCss}>
        <BrowserRouter>
          <AppRouter />
        </BrowserRouter>
      </StylesProvider>
    </Provider>
  ),
  document.getElementById('root'),
  () => {
    document.getElementById('css').remove()
  },
)
