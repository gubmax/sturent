import React, { Component } from 'react'
import { node } from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Page from '../../layouts/Page/Page'

class AuthPage extends Component {
  static propTypes = { children: node }

  render() {
  	return (
      <Page
      title="Авторизация"
      withoutWrapper
      content={this.props.children}
    />
  	)
  }
}

export default AuthPage
