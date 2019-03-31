import React, { PureComponent } from 'react'
import { bool, string, func } from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './TabTitle.css'

class TabsHeader extends PureComponent {
    static propTypes = {
      isActive: bool.isRequired,
      text: string.isRequired,
      onHandleClick: func.isRequired,
    }

    render() {
      const { isActive, onHandleClick, text } = this.props

      return (
        <div
          className={s.title + (
            isActive
              ? ` ${s.isActive}`
              : ''
          )}
          onClick={onHandleClick}
          onKeyPress={onHandleClick}
          role="button"
          tabIndex="0"
        >
          {text}
        </div>
      )
    }
}

export default withStyles(s)(TabsHeader)
