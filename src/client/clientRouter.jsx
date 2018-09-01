import React from 'react';
import { Route } from 'react-router-dom';
import Loadable from 'react-loadable';

import routes from './routes';
import App from './layouts/App/App.jsx';

export default () => (
  <App>
    {
      routes.map(props => {
        props.component = Loadable({
          loader: () => import(`./pages/${props.componentName}/${props.componentName}.jsx`),
          loading: () => null,
          delay: 0,
          timeout: 10000,
        })

        return <Route key={ props.path } {...props}/>
      })
    }
  </App>
);
