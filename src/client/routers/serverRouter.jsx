import React from 'react'
import { Route } from 'react-router-dom'

import routes from '../routes'
import App from '../layouts/App/App'

const serverRouter = () => (
    <App>
        {
            routes.map((props) => {
                const data = props
                let { component } = data

                component = require(`../pages/${props.componentName}/${props.componentName}`) // eslint-disable-line global-require
                if (component.default) component = component.default

                data.component = component

                return <Route key={data.path} {...data} />
            })
        }
    </App>
)

export default serverRouter
