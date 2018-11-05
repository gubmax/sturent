import React from 'react'
import { Route } from 'react-router-dom'

import routes from '../routes'
import App from '../layouts/App/App'

const serverRouter = () => (
    <App>
        {
            routes.map((route) => {
                let { component } = route

                component = require(`../pages/${route.componentName}/${route.componentName}`) // eslint-disable-line global-require
                if (component.default) component = component.default

                return (
                    <Route
                        key={route.path}
                        component={component}
                        {...route}
                    />
                )
            })
        }
    </App>
)

export default serverRouter
