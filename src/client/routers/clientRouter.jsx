import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import { func, string } from 'prop-types'

import routes from '../routes'
import App from '../layouts/App/App'

class AsyncComponent extends Component {
    static propTypes = {
      load: func.isRequired,
      resolveId: string.isRequired,
    }

    constructor(props) {
      super(props)

      const { isWebpackReady } = this
      const { resolveId } = props
      let LoadedComponent = null

      if (isWebpackReady(resolveId)) {
        // eslint-disable-next-line no-undef
        const module = __webpack_require__(resolveId)
        LoadedComponent = module.default || module
      }

      this.state = { LoadedComponent }
    }

    componentDidMount() {
      const { load } = this.props
      const { LoadedComponent } = this.state

      if (!LoadedComponent) {
        load().then((component) => {
          this.setState({ LoadedComponent: component.default || component })
        })
      }
    }

    isWebpackReady = (moduleId) => {
      // eslint-disable-next-line camelcase
      if (typeof __webpack_modules__ !== 'object') {
        return false
      }

      return (
        typeof moduleId !== 'undefined'
            // eslint-disable-next-line no-undef
            && typeof __webpack_modules__[moduleId] !== 'undefined'
      )
    }

    render() {
      const { LoadedComponent } = this.state

      if (!LoadedComponent) return null

      return <LoadedComponent {...this.props} />
    }
}

const clientRouter = () => (
  <App>
    {
      routes.map((route) => {
        const { componentName } = route
        return (
          <Route
            key={route.path}
            render={() => (
              <AsyncComponent
                load={() => import(`../pages/${componentName}/${componentName}`)}
                resolveId={require.resolveWeak(`../pages/${componentName}/${componentName}`)}
              />
            )}
            {...route}
          />
        )
      })
    }
  </App>
)

export default clientRouter
