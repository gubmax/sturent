import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './Page.css'
import w from '../../styles/Wrapper.css'

function Page(props) {
    if (typeof (window) !== 'undefined') document.title = `STURENT | ${props.title}`

    const {
        title, header, content, withoutWrapper,
    } = props

    return (
        <section className={s.page}>
            <div className={s.header}>
                <div className={`${w.wrapper} ${s.headerWrapper}`}>
                    <h1 className={s.title}>{ title }</h1>
                    <div className={s.headerSide}>
                        { header }
                    </div>
                </div>
            </div>

            {
                !withoutWrapper
                    ? (
                        <div className={w.wrapper}>
                            { content }
                        </div>
                    )
                    : content
            }
        </section>
    )
}

export default withStyles(s, w)(Page)
