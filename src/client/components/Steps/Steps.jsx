import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './Steps.css'

function Steps(props) {
	return (
    <div className={s.steps}>
      <div className={s.step}>
        <span className={s.stepNum + ' ' + s.isActive}>1</span>
        <span className={s.stepText}>Авторизуйтесь на сайте</span>
      </div>

      <div className={s.step}>
        <span className={s.stepNum}>2</span>
        <span className={s.stepText}>Заполните форму</span>
      </div>

      <div className={s.step}>
        <span className={s.stepNum}>3</span>
        <span className={s.stepText}>Загрузите фотографии</span>
      </div>
    </div>
	)
}

export default withStyles(s)(Steps)
