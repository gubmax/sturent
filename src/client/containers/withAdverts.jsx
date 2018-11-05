import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { object } from 'prop-types'

import { getAdverts } from '../redux/actions/advertsActions'

function withAdvert(WrappedComponent) {
    class AsyncComponent extends PureComponent {
        static async getInitialProps({ dispatch }) {
            await dispatch(getAdverts())
        }

        componentWillMount() {
            const { adverts } = this.props
            const { history } = this.context.router

            if (!adverts || history.action === 'PUSH') {
                AsyncComponent.getInitialProps(this.props)
            }
        }

        render() {
            return (<WrappedComponent {...this.props} />)
        }
    }

    AsyncComponent.contextTypes = { router: object.isRequired }

    const mapStateToProps = state => ({ adverts: state.adverts.list })

    return connect(mapStateToProps)(AsyncComponent)
}

export default withAdvert
