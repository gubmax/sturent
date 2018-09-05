import React, { Component } from 'react'
import { CSSTransition } from 'react-transition-group';
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Auth from './Auth.jsx'

import s from './ModalAuth.css'

function ModalAuth(props) {
	const transitionClasses = {
		appear: s.appear,
		appearActive: s.appearActive,
		exit: s.exit,
		exitActive: s.exitActive,
	}

	const { location, action } = props.history

	return (
		<CSSTransition in={location.pathname == '/auth'}
			classNames={transitionClasses}
			timeout={400}
			appear={true}>
			<Auth {...props} />
		</CSSTransition>
	)
}

export default withStyles(s)(ModalAuth)
