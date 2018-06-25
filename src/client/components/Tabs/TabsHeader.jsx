import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './TabsHeader.css'

class TabsHeader extends React.Component {
	constructor() {
		super()

		this.state = { activeTabIndex: 0 }

		this.renderChildren = this.renderChildren.bind(this)
	}

	handleClick(i) {
		this.setState({ activeTabIndex: i })
	}

	renderChildren() {
		return React.Children.map(this.props.children, (child, i) => {
			return React.cloneElement(child, {
				isActive: i === this.state.activeTabIndex,
				onHandleClick: this.handleClick.bind(this, i)
			});
		});
	}

	render() {
		return (
      <div className={s.header}>
				{this.renderChildren()}
      </div>
		)
	}
}

export default withStyles(s)(TabsHeader)
