import React from 'react'
import { Link, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { createLocation } from 'history'

import routes from '../routes'
import { getStore } from '../createStore'
import { showPageLoader, hidePageLoader } from '../redux/actions/appActions'

const isModifiedEvent = e => !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey)

function handleClick(e) {
  if (this.props.onClick) this.props.onClick(e)

  if (
    !e.defaultPrevented
        && e.button === 0
        && !this.props.target
        && !isModifiedEvent(e)
  ) {
    e.preventDefault()
    const { history } = this.context.router
    const { replace, to } = this.props

    if (history.location.pathname) {
      const routeTo = routes.find(route => (matchPath(to, route) ? route : null))
      const { showPageLoaderAction, hidePageLoaderAction } = this.props

      if (routeTo) {
        const store = getStore()

        showPageLoaderAction()

                import(`../pages/${routeTo.componentName}/${routeTo.componentName}`)
                  .then(component => component.default || component)
                  .then(component => (
                    component.getInitialProps
                      ? component.getInitialProps({ dispatch: store.dispatch })
                      : null
                  ))
                  .then(() => { hidePageLoaderAction() })
      } else {
        hidePageLoaderAction()
      }

      if (replace) history.replace(to)
      else history.push(to)
    }
  }
}

class AsyncLink extends Link {
  constructor(props) {
    super(props)
    this.handleClick = handleClick.bind(this)
  }

  render() {
    const { to, innerRef, className, children } = this.props
    const { history } = this.context.router
    const location = typeof to === 'string'
      ? createLocation(to, null, null, history.location)
      : to
    const href = history.createHref(location)

    return (
      <a
        className={className}
        onClick={this.handleClick}
        href={href}
        ref={innerRef}
      >
        { children }
      </a>
    )
  }
}

const mapDispatchToProps = ({
  showPageLoaderAction: showPageLoader,
  hidePageLoaderAction: hidePageLoader,
})

export default connect(null, mapDispatchToProps)(AsyncLink)
