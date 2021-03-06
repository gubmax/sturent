import React from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Page from '../../layouts/Page/Page'
import Auth from '../../components/Auth/Auth'
import Steps from '../../components/Steps/Steps'
import Msg from '../../components/Msg/Msg'

import s from './AddPage.css'
import i from '../../styles/Icon.css'

function AddPage() {
  return (
    <Page
      title="Добавление объявления"
      content={(
        <div>
          <Steps />

          <div className={s.columns}>
            <div className={s.column}>
              <Msg text={
                ['Если вы ещё не зарегистированы, можете сделать это за пару кликов с помощью кнопок социальных сетей или стандартным способом - заполнив ', <a className={s.formText_link} href="/register">форму</a>]
              }
              />
            </div>

            <div className={s.column}>
              <Auth withoutHeader />
            </div>
          </div>

        </div>
      )}
    />
  )
}

export default withStyles(s, i)(AddPage)
