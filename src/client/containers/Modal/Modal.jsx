import React, { Component, Children, cloneElement, Fragment }  from 'react'
import { node } from 'prop-types'
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { showOverlay, hideOverlay } from '../../actions/overlayActions'

import s from './Modal.css'
import o from '../../styles/Overlay.css'

class Modal extends Component {
	static propTypes = {
	  children: node
	}

	componentDidMount() {
		this.props.showOverlay()
	}

	componentWillUnmount() {
		this.props.hideOverlay()
	}

	onOverlayClick() {
		this.props.history.goBack()
	}

	onModalClick(e) {
		e.stopPropagation()
	}

	render() {
		const { children, style } = this.props
		const { appear } = this.props

		const childrenWithProps = Children.map(children, child =>
      cloneElement(child, { onClick: this.onOverlayClick.bind(this) }))

		return (
			<Fragment>
	      <div className={o.overlay} />
				<div className={s.container} style={style} onClick={this.onOverlayClick.bind(this)}>
					<div className={s.modal} onClick={this.onModalClick.bind(this)}>
						{childrenWithProps}
					</div>
				</div>
			</Fragment>
		)
	}
}

const mapStateToProps = state => ({
  overlay: state.overlay
})

const mapDispatchToProps = ({
	showOverlay,
	hideOverlay
})

export default compose(
	withRouter,
	withStyles(s, o),
	connect(mapStateToProps, mapDispatchToProps)
)(Modal)
