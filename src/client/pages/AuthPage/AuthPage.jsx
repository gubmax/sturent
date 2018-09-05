import React, { Component } from 'react'
import { node } from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Page from '../../layouts/Page/Page.jsx'

class AuthPage extends Component {
  static propTypes = {
    children: node
  }

  render() {
  	return (
      <Page title='Авторизация'
        withoutWrapper={true}
        content={this.props.children}
      />
  	)
  }
}

export default AuthPage
