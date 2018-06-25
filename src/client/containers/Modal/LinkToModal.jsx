import React, { Component } from 'react'
import { node, string } from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

class ModalToggler extends Component {
	static propTypes = {
	  children: node.isRequired,
    to: string.isRequired
	}

  onLinkClick() {
    const { history, to } = this.props
    const { top, right, left, bottom, width, height } = this.refs.link.getBoundingClientRect()

    history.push({
      pathname: to,
      state: {
        modal: true,
        position: { top, right, left, bottom, width, height }
      }
    })
  }

	render() {
		const { children, to, className } = this.props

    return (
      <a className={className} to={to} ref="link" onClick={this.onLinkClick.bind(this)} >
        { this.props.children }
      </a>
    )
	}
}

export default withRouter(ModalToggler)
