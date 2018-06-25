import React from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import routes from '../../routes'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage.jsx'
import AuthPage from '../../pages/AuthPage/AuthPage.jsx'
import Auth from '../../components/Auth/Auth.jsx'

import s from './Main.css'

class Main extends React.Component {
	render() {
		const { location } = this.props

		return (
			<main>
				<Switch location={location}>
					{
						routes.map(props => {
							props.component = require('../../' + props.componentName + '.jsx')
							if (props.component.default)
								props.component = props.component.default
							return <Route key={ props.path } {...props}/>
						})
					}
					<Route path='/auth' render={() => <AuthPage location={location}><Auth /></AuthPage>} />
					<Route component={NotFoundPage} />
				</Switch>
			</main>
		)
	}
}

Main.propTypes = {
  location: PropTypes.object.isRequired
}

export default withStyles(s)(Main)
