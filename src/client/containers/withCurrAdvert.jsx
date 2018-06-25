import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { withRouter } from 'react-router-dom'

import { getCurrAdvert, removeCurrAdvert } from '../actions/advertsActions'

export default function withAdvert(WrapedComponent) {
  class AsyncComponent extends Component {
    static async getInitialProps({ req, store, dispatch, match }) {
      const action = getCurrAdvert(match.params.id)

      if (req)
        await store.dispatch(action)
      else
        dispatch(action)

      return
    }

    componentWillMount() {
      const { advert, history } = this.props

      if (!advert || history.action === 'PUSH')
        AsyncComponent.getInitialProps(this.props)
    }

    componentWillUnmount() {
      const { dispatch, history } = this.props

      if (history.action === 'POP')
        dispatch(removeCurrAdvert())
    }

    render() {
      return (
        <WrapedComponent {...this.props} />
      )
    }
  }

  const mapStateToProps = state => ({
  	advert: state.adverts.current
  })

  return compose(
    withRouter,
    connect(mapStateToProps)
  )(AsyncComponent)
}
