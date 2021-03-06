import React, { Component, Fragment } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'
import { connect } from 'react-redux'
import { compose } from 'redux'

import LinkToModal from '../../containers/Modal/LinkToModal'
import { setCurrAdvert } from '../../redux/actions/advertsActions'
import { formatRent, formatVal } from './format'

import c from './common.css'
import s from './AdvertItem.css'
import i from '../../styles/Icon.css'

class AdvertItem extends Component {
  onItemClick = () => {
    const { item, dispatch } = this.props

    dispatch(setCurrAdvert(item))
  }

  render() {
    const { item } = this.props

    return (
      <div className={s.item}>
        <LinkToModal className={s.advert} to={`/neighbors/${item._id}`} onClick={this.onItemClick}>
          <div className={s.header + (!item.img ? ` ${c.header_withoutImg}` : '')}>
            {
              item.img
                ? (
                  <Fragment>
                    <img src={`/images/neighbors/thumbnail/${item.img}.jpg`} className={s.img} />
                    <span className={s.imgsCounter}>
                      <i className={s.imgsCounter__icon}>
                        <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_light}`}>
                          <circle cx="12" cy="12" r="3" />
                          <path d="M20,4h-3.17l-1.24-1.35C15.22,2.24,14.68,2,14.12,2H9.88c-0.56,0-1.1,0.24-1.48,0.65L7.17,4H4C2.9,4,2,4.9,2,6v12    c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5S14.76,17,12,17z" />
                        </svg>
                      </i>
                      <span>1</span>
                    </span>
                  </Fragment>
                )
                : (
                  <Fragment>
                    <i className={s.header__icon}>
                      <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_border}`}>
                        <circle cx="12" cy="12" r="3" />
                        <path d="M20,4h-3.17l-1.24-1.35C15.22,2.24,14.68,2,14.12,2H9.88c-0.56,0-1.1,0.24-1.48,0.65L7.17,4H4C2.9,4,2,4.9,2,6v12    c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5S14.76,17,12,17z" />
                      </svg>
                    </i>
                    <span className={s.header__text}>Нет фото</span>
                  </Fragment>
                )
            }
          </div>

          <div className={s.location}>{ Object.values(item.address).join(', ') }</div>
          <div className={c.infoWrapper}>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Кого ищут</span>
              {
                Object.keys(item.whom).map((val, i) => (
                  <div className={`${c.tag} ${c[`tag_${val}`]}`} key={i}>{ formatVal(val, 'whom') }</div>
                ))
              }
            </div>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Особенности</span>
              {
                Object.keys(item.tags).map((val, i) => (
                  <div className={`${c.tag} ${c[`tag_${val}`]}`} key={i}>{ formatVal(val, 'tags') }</div>
                ))
              }
            </div>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Хотят арендовать</span>
              <span className={c.infoText}>{ formatRent(item.rent) }</span>
            </div>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Арендная плата</span>
              <span className={c.infoText}>
                {`${item.pay} руб.`}
              </span>
            </div>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Жильцов в кв.</span>
              <span className={c.infoText}>{item.tenants}</span>
            </div>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Залог</span>
              <span className={c.infoText}>{item.pledge ? `${item.pledge} руб.` : 'Без залога'}</span>
            </div>
          </div>
        </LinkToModal>
      </div>
    )
  }
}

export default compose(
  connect(),
  withStyles(c, s, i),
)(AdvertItem)
