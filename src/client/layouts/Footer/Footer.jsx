import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Link from '../../containers/AsyncLink'

import s from './Footer.css'
import w from '../../styles/Wrapper.css'
import b from '../../styles/Button.css'

function Footer() {
    return (
        <footer>
            <div className={`${w.wrapper} ${s.footer__wrapper}`}>
                <span className={s.footer__copyright}>
                    { new Date().getFullYear() }
                    {' '}
&#xa9; STURENT
                </span>
                <Link className={`${s.footer__link} ${b.btn}`} to="/neighbors">Поиск сожителей</Link>
                <Link className={`${s.footer__link} ${b.btn}`} to="/rent">Подселение</Link>
                <Link className={`${s.footer__link} ${b.btn}`} to="/info#about">О проекте</Link>
                <Link className={`${s.footer__link} ${b.btn}`} to="/info#FAQ">Ответы на вопросы</Link>
                <Link className={`${s.footer__link} ${b.btn}`} to="/info#terms">Правила пользования</Link>
                <Link className={`${s.footer__link} ${b.btn}`} to="/contacts">Обратная связь</Link>
            </div>
        </footer>
    )
}

export default withStyles(s, w, b)(Footer)
