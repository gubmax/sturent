import React, { Component } from 'react'
import { bool, string, func } from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './TabTitle.css'

class TabsHeader extends Component {
	static propTypes = {
	  isActive: bool,
	  text: string.isRequired,
		onHandleClick: func,
	}

	render() {
		const { isActive, onHandleClick, text, key } = this.props

		return (
      <div className={s.title + (isActive ? ' ' + s.isActive : '')}
				onClick={onHandleClick}>
				{ text }
			</div>
		)
	}
}

export default withStyles(s)(TabsHeader)
