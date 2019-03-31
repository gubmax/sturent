import React, { Component } from 'react'
import { node, string, func } from 'prop-types'
import { withRouter } from 'react-router'

class ModalToggler extends Component {
	static propTypes = {
	    children: node.isRequired,
	    to: string.isRequired,
	    onClick: func,
	}

  onLinkClick = () => {
    const { history, to, onClick } = this.props
    const { top, right, left, bottom, width, height } = this.refs.link.getBoundingClientRect()

    if (onClick) onClick()

    history.push({
      pathname: to,
      state: {
        modal: true,
        position: { top, right, left, bottom, width, height },
      },
    })
  }

  render() {
    const { children, to, className } = this.props

	    return (
  <a className={className} to={to} ref="link" onClick={this.onLinkClick}>{ children }</a>
	    )
  }
}

export default withRouter(ModalToggler)
