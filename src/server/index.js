import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import path from 'path'

import routes from '../client/routes'
import reducer from '../client/reducers/reducer'
import template from '../client/template'
import App from '../client/layouts/App/App.jsx'
import StylesProvider from '../client/containers/StylesProvider.jsx'

export default function serverRenderer(req, res) {
  const store = createStore(reducer, applyMiddleware(thunk))
  const promises = []
  const componentNames = []
  const componentsPath = []

  routes.some((route) => {
    const match = matchPath(req.path, route)

    if (match) {
      componentsPath.push(route.path)

      if (route.container) {
        let component = require(`../client/${route.componentName}.jsx`)

        if (component.default)
          component = component.default

        componentNames.push(route.componentName)

        if (typeof component.getInitialProps === 'function') {
          promises.push(component.getInitialProps({
            req,
            res,
            match,
            store,
            dispatch: store.dispatch,
          }))
        }
      }
    }
    return match
  })

  if (componentsPath.length === 0 || componentsPath[0] === '*') {
    res.status(404).sendFile(path.join(__dirname, '../../public/404.html'))
    return
  }

  Promise.all(promises).then(data => {
    const css = new Set()
    const context = { data }
    const body = renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <StylesProvider onInsertCss={ (...styles) => styles.forEach(style => css.add(style._getCss())) }>
            <Route component={App} />
          </StylesProvider>
        </StaticRouter>
      </Provider>
    )
    const preloadedState = store.getState()

    res.status(200).send(
      template({body, preloadedState, componentNames, css})
    )
  })
}
