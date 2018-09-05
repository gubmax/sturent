import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { getAdverts } from '../redux/actions/advertsActions'

function withAdvert(WrapedComponent) {
  class AsyncComponent extends Component {
    static async getInitialProps({ dispatch }) {
      await dispatch(getAdverts())
    }

    componentWillMount() {
      const { adverts, history } = this.props

      if (!adverts || history.action === 'PUSH')
        AsyncComponent.getInitialProps(this.props)
    }

    render() {
      return (
        <WrapedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = state => ({
  	adverts: state.adverts.list
  })

  return compose(
    connect(mapStateToProps),
    withRouter
  )(AsyncComponent)
}

export default withAdvert
