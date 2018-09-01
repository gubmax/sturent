import React, { Component } from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Page from '../../layouts/Page/Page.jsx'

class AuthPage extends Component {
  render() {
  	return (
      <Page title='Авторизация'
        withoutWrapper={true}
        content={this.props.children}
      />
  	)
  }
}

AuthPage.propTypes = {
  children: PropTypes.node
}

export default AuthPage
