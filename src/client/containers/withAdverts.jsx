import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { getAdverts } from '../actions/advertsActions'

export default function withAdvert(WrapedComponent) {
  class AsyncComponent extends Component {
    static async getInitialProps({ req, store, dispatch }) {
      const action = getAdverts()

      if (req)
        await store.dispatch(action)
      else
        dispatch(action)

      return
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
    withRouter,
    connect(mapStateToProps)
  )(AsyncComponent)
}
