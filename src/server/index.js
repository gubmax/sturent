import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter, Route, matchPath } from 'react-router-dom'
import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import path from 'path'

import routes from '../client/routes'
import reducer from '../client/redux/reducer'
import template from '../client/template'
import AppRouter from '../client/routers/serverRouter.jsx'
import StylesProvider from '../client/containers/StylesProvider.jsx'

export default function serverRenderer(req, res) {
  const store = createStore(reducer, applyMiddleware(thunk))
  const promises = []
  const componentNames = []
  const componentsPath = []

  routes.some((route) => {
    const match = matchPath(req.path, route)

    if (match) {
      let component = require(`${__dirname}/../client/pages/${route.componentName}/${route.componentName}.jsx`)

      if (component.default)
        component = component.default

      componentNames.push('pages/' + route.componentName)
      componentsPath.push(route.path)

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
        <StylesProvider onInsertCss={ (...styles) => styles.forEach(style => css.add(style._getCss())) }>
          <StaticRouter context={context} location={req.url}>
            <AppRouter />
          </StaticRouter>
        </StylesProvider>
      </Provider>
    )
    const preloadedState = store.getState()

    res.status(200).send(
      template({body, preloadedState, componentNames, css})
    )
  })
}
