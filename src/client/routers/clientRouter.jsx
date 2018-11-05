import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import Loadable from 'react-loadable';

import routes from '../routes'
import App from '../layouts/App/App'

class AsyncComponent extends Component {
    state = { LoadedComponent: null }

    componentDidMount() {
        const { load } = this.props

        load().then((component) => {
            this.setState({ LoadedComponent: component.default || component })
        })
    }

    render() {
        const { LoadedComponent } = this.state

        if (!LoadedComponent) return null

        return <LoadedComponent {...this.props} />
    }
}

const clientRouter = () => (
    <App>
        {
            routes.map(route => (
                <Route
                    key={route.path}
                    render={() => <AsyncComponent load={() => import(`../pages/${route.componentName}/${route.componentName}`)} />}
                    {...route}
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
