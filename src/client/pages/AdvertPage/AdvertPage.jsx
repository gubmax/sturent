import React from 'react'
import { compose } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Link from '../../containers/AsyncLink'
import Page from '../../layouts/Page/Page'
import Advert from '../../components/Adverts/Advert'
import withCurrAdvert from '../../containers/withCurrAdvert'

import s from './AdvertPage.css'
import b from '../../styles/Button.css'
import i from '../../styles/Icon.css'

function AdvertPage() {
  return (
    <Page
      title="Объявление"
      header={(
        <Link
          to="/neighbors"
          className={`${b.btn} ${b.btn_primary} ${b.btn_withIcon}`}
        >
          <i className={i.icon}>
            <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.rIcon_light}`}>
              <path d="M5,18h15c0.55,0,1-0.45,1-1v-4c0-0.55-0.45-1-1-1H5c-0.55,0-1,0.45-1,1v4C4,17.55,4.45,18,5,18z M4,6v4c0,0.55,0.45,1,1,1   h15c0.55,0,1-0.45,1-1V6c0-0.55-0.45-1-1-1H5C4.45,5,4,5.45,4,6z" />
            </svg>
          </i>
          <span>Похожие</span>
        </Link>
      )}
      content={(
        <div className={s.block}>
          <Advert />
        </div>
      )}
    />
  )
}

export default compose(
  withCurrAdvert,
  withStyles(s, b, i),
)(AdvertPage)
