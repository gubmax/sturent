import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './Loader.css'

function Loader(props) {
  return (
    <div className={s.loader + (props.className ? ` ${props.className}` : '')}>
      <div className={`${s.line} ${s.line1}`} />
      <div className={`${s.line} ${s.line2}`} />
      <div className={`${s.line} ${s.line3}`} />
    </div>
  )
}

export default withStyles(s)(Loader)
