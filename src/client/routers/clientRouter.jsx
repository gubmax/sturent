import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import Loadable from 'react-loadable';

import routes from '../routes'
import App from '../layouts/App/App'

class AsyncComponent extends Component {
    state = { WrapedComponent: null }

    componentWillMount() {
        const { name } = this.props

        import(`../pages/${name}/${name}`).then((WrapedComponent) => {
            this.setState({ WrapedComponent })
        })
    }

    render() {
        let { WrapedComponent } = this.state

        if (!WrapedComponent) {
            return null
        }
        if (WrapedComponent.default) WrapedComponent = WrapedComponent.default

        return <WrapedComponent {...this.props} />
    }
}

const clientRouter = () => (
    <App>
        {
            routes.map(props => (
                <Route
                    key={props.path}
                    render={() => <AsyncComponent name={props.componentName} />}
                    {...props}
                />
            ))
            // routes.map(props => {
            //   props.component = Loadable({
            //     loader: () => import(`../pages/${props.componentName}/${props.componentName}`),
            //     loading: () => null,
            //     delay: 200,
            //     timeout: 10000,
            //   })
            //
            //   return <Route key={props.path} {...props}/>
            // })
        }
    </App>
)

export default clientRouter
