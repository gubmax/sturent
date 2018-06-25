import React from 'react'
import PropTypes from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './TabTitle.css'

class TabsHeader extends React.Component {
	render() {
		return (
      <div className={s.title + (this.props.isActive ? ' ' + s.isActive : '')}
				onClick={this.props.onHandleClick}>
				{this.props.text}
			</div>
		)
	}
}

TabsHeader.propTypes = {
  isActive: PropTypes.bool,
  text: PropTypes.string.isRequired
}

export default withStyles(s)(TabsHeader)
