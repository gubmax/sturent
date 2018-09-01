import React from 'react'
import { Link, matchPath } from 'react-router-dom'
import { connect } from 'react-redux'
import { createLocation } from 'history'

import routes from '../routes'
import { getStore } from '../createStore'
import { togglePageLoader } from '../actions/appActions'

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
    const { history } = this.context.router
    const { replace, to } = this.props

    function locate() {
      if (replace)
        history.replace(to)
      else
        history.push(to)
    }

    if (history.location.pathname) {
      const routeTo = routes.find(route => (matchPath(to, route) ? route : null))
      const match = matchPath(to, routeTo)
      const store = getStore()

      if (routeTo) {
        const { togglePageLoader } = this.props

        togglePageLoader()

        import(`../pages/${routeTo.componentName}/${routeTo.componentName}.jsx`)
          .then(component => component.default || component)
          .then(component =>
            component.getInitialProps
              ? component.getInitialProps({match, store, dispatch: store.dispatch})
              : null
          )
          .then(() => {
            locate()
            togglePageLoader()
          })
      }
      else
        locate()
    }
    else
      locate()
  }
}

class AsyncLink extends Link {
  constructor(props) {
    super(props)
    this.handleClick = handleClick.bind(this)
  }

  render() {
    const { to, innerRef } = this.props

    const { history } = this.context.router
    const location =
      typeof to === "string"
        ? createLocation(to, null, null, history.location)
        : to

    const href = history.createHref(location)
    const aProps = Object.assign({}, this.props)
    delete aProps.togglePageLoader
    delete aProps.replace

    return (
      <a {...aProps} onClick={this.handleClick} href={href} ref={innerRef} />
    )
  }
}

const mapDispatchToProps = ({
  togglePageLoader
})

export default connect(null, mapDispatchToProps)(AsyncLink)
