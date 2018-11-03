import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './Msg.css'
import i from '../../styles/Icon.css'

function Msg(props) {
    return (
        <div className={s.msgInfo}>
            <i className={s.icon}>
                <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_accent}`}>
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z" />
                </svg>
            </i>
            <p>{ props.text.map((text, i) => <span key={i}>{text}</span>) }</p>
        </div>
    )
}

export default withStyles(s, i)(Msg)
