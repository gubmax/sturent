import React, { Component } from 'react'
import { node, number } from 'prop-types'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './Tabs.css'

class Tabs extends Component {
  static propTypes = {
    children: node,
    activeTabIndex: number
  }

  renderActiveTabContent() {
     const { children, activeTabIndex } = this.props

     if(children[activeTabIndex])
         return children[activeTabIndex].props.children
   }

	render() {
    const tabsClasses = {
      enter: s.tabsEnter,
      enterActive: s.tabsEnterActive,
      exit: s.tabsExit,
      exitActive: s.tabsExitActive
    }

		return (
      <TransitionGroup className={s.tabs}>
        <CSSTransition key={this.props.activeTabIndex}
          classNames={tabsClasses}
          timeout={250}
          unmountOnExit>
            { this.renderActiveTabContent() }
        </CSSTransition>
      </TransitionGroup>
    )
	}
}

const mapStateToProps = state => ({
	activeTabIndex: state.tabs.activeTabIndex
})

export default compose(
  withStyles(s),
  connect(mapStateToProps, null)
)(Tabs)
