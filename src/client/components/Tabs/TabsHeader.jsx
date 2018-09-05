import React, { Component, cloneElement } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import { setActiveTabIndex } from '../../redux/actions/tabsActions'

import s from './TabsHeader.css'

class TabsHeader extends Component {
	handleClick(i) {
		this.props.setActiveTabIndex(i)
	}

	renderChildren() {
		return this.props.children.map((child, i) => {
			return cloneElement(child, {
				key: i,
				isActive: i === this.props.activeTabIndex,
				onHandleClick: this.handleClick.bind(this, i)
			})
		})
	}

	render() {
		return (
      <div className={s.header}>
				{ this.renderChildren() }
      </div>
		)
	}
}

const mapStateToProps = state => ({
	activeTabIndex: state.tabs.activeTabIndex
})

const mapDispatchToProps = ({
	setActiveTabIndex
})

export default compose(
	withStyles(s),
	connect(mapStateToProps, mapDispatchToProps)
)(TabsHeader)
