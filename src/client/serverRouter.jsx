import React from 'react';
import { Route } from 'react-router-dom';

import routes from './routes';
import App from './layouts/App/App.jsx';

export default () => (
  <App>
    {
      routes.map(props => {
        props.component = require(`./pages/${props.componentName}/${props.componentName}.jsx`)
        if (props.component.default)
          props.component = props.component.default

        return <Route key={ props.path } {...props}/>
      })
    }
  </App>
);
