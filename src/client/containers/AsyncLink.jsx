import React from 'react'
import { Link, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { createLocation } from 'history'

import routes from '../routes'
import { getStore } from '../createStore'
import { togglePageLoader } from '../redux/actions/appActions'

function isModifiedEvent(e) {
  !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)
}

function handleClick(e) {
  if (this.props.onClick) this.props.onClick(e)

  if (
    !e.defaultPrevented &&
    e.button === 0 &&
    !this.props.target &&
    !isModifiedEvent(e)
  ) {
    e.preventDefault()
    const { history } = this.context.router,
          { replace, to } = this.props

    if (history.location.pathname) {
      const routeTo = routes.find(route => (matchPath(to, route) ? route : null))

      if (routeTo) {
        const { togglePageLoader } = this.props,
              match = matchPath(to, routeTo),
              store = getStore()

        togglePageLoader()

        import(`../pages/${routeTo.componentName}/${routeTo.componentName}.jsx`)
          .then(component => component.default || component)
          .then(component =>
            component.getInitialProps
              ? component.getInitialProps({match, store, dispatch: store.dispatch})
              : null
          )
          .then(() => {
            togglePageLoader()
          })
      }
    }

    if (replace)
      history.replace(to)
    else
      history.push(to)
  }
}

class AsyncLink extends Link {
  constructor(props) {
    super(props)
    this.handleClick = handleClick.bind(this)
  }

  render() {
    const { to, innerRef } = this.props,
          { history } = this.context.router,
          location = typeof to === "string"
            ? createLocation(to, null, null, history.location)
            : to,
          href = history.createHref(location),
          linkProps = Object.assign({}, this.props)

    delete linkProps.togglePageLoader
    delete linkProps.replace

    return (
      <a {...linkProps} onClick={this.handleClick} href={href} ref={innerRef} />
    )
  }
}

const mapDispatchToProps = ({
  togglePageLoader
})

export default connect(null, mapDispatchToProps)(AsyncLink)
