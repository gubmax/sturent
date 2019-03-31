import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import withCurrAdvert from '../../containers/withCurrAdvert'
import { toggleFavorites } from '../../redux/actions/favoritesActions'
import { formatRent, formatDate, formatVal } from './format'

import c from './common.css'
import s from './Advert.css'
import i from '../../styles/Icon.css'

class Advert extends Component {
  handleClick() {
    const { toggleFavorites, advert } = this.props

    toggleFavorites(advert._id)
  }

  render() {
    const { history, favorites } = this.props
    let { advert } = this.props

    if (!advert) advert = {}

    const transitionClasses = {
      appear: s.appear,
      appearActive: s.appearActive,
      exit: s.exit,
      exitActive: s.exitActive,
    }

    const favoritesClasses = {
      enter: s.favoritesEnter,
      enterActive: s.favoritesEnterActive,
      exit: s.favoritesExit,
      exitActive: s.favoritesExitActive,
    }

    let inFavorites = false

    if (favorites.list.indexOf(advert._id) !== -1) inFavorites = true

    const { onClick } = this.props

    return (
      <CSSTransition
        in={history.location.pathname !== '/neighbors'}
        classNames={transitionClasses}
        timeout={400}
        appear={history.action === 'PUSH'}
        onEntered={() => { /* Do not remove enter classes when active */ }}
      >
        <div className={s.container}>
          {
            history.action === 'PUSH'
              ? (
                <span
                  className={s.backBtn}
                  onClick={onClick}
                  onKeyDown={onClick}
                  role="button"
                  tabIndex={0}
                >
                  <i className={i.icon}>
                    <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_light} ${s.backBtn__icon}`}>
                      <path d="M16.62,2.99L16.62,2.99c-0.49-0.49-1.28-0.49-1.77,0l-8.31,8.31c-0.39,0.39-0.39,1.02,0,1.41l8.31,8.31   c0.49,0.49,1.28,0.49,1.77,0h0c0.49-0.49,0.49-1.28,0-1.77L9.38,12l7.25-7.25C17.11,4.27,17.11,3.47,16.62,2.99z" />
                    </svg>
                  </i>
                </span>
              )
              : null
          }

          <div className={s.header + (
            !advert.img
              ? ` ${c.header_withoutImg}`
              : ''
          )}
          >
            {
              advert.img
                ? (
                  <a href={`/images/neighbors/thumbnail/${advert.img}.jpg`} className={s.imgLink} target="_blank">
                    <img src={`/images/neighbors/thumbnail/${advert.img}.jpg`} className={s.img} />
                  </a>
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
            <div className={s.actionBtns}>
              <TransitionGroup component={null}>
                <CSSTransition key={inFavorites} classNames={favoritesClasses} timeout={300}>
                  <span
                    className={s.actionBtns__btn + (
                      inFavorites
                        ? ` ${s.isActive}`
                        : '')}
                    onClick={this.handleClick}
                  >
                    <i className={i.icon}>
                      <svg
                        viewBox="0 0 24 24"
                        className={`${i.srIcon} ${inFavorites
                          ? i.srIcon_light
                          : i.srIcon_secondary}`}
                      >
                        {
                          inFavorites
                            ? <path d="M13.35,20.13c-0.76,0.69-1.93,0.69-2.69-0.01l-0.11-0.1C5.3,15.27,1.87,12.16,2,8.28c0.06-1.7,0.93-3.33,2.34-4.29   c2.64-1.8,5.9-0.96,7.66,1.1c1.76-2.06,5.02-2.91,7.66-1.1c1.41,0.96,2.28,2.59,2.34,4.29c0.14,3.88-3.3,6.99-8.55,11.76   L13.35,20.13z" />
                            : <path d="M19.66,3.99c-2.64-1.8-5.9-0.96-7.66,1.1c-1.76-2.06-5.02-2.91-7.66-1.1C2.94,4.95,2.06,6.57,2,8.28   c-0.14,3.88,3.3,6.99,8.55,11.76l0.1,0.09c0.76,0.69,1.93,0.69,2.69-0.01l0.11-0.1c5.25-4.76,8.68-7.87,8.55-11.75   C21.94,6.57,21.06,4.95,19.66,3.99z M12.1,18.55l-0.1,0.1l-0.1-0.1C7.14,14.24,4,11.39,4,8.5C4,6.5,5.5,5,7.5,5   c1.54,0,3.04,0.99,3.57,2.36h1.87C13.46,5.99,14.96,5,16.5,5c2,0,3.5,1.5,3.5,3.5C20,11.39,16.86,14.24,12.1,18.55z" />
                        }
                      </svg>
                    </i>
                  </span>
                </CSSTransition>
              </TransitionGroup>
              <span className={s.actionBtns__btn}>
                <i className={i.icon}>
                  <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_secondary}`}>
                    <path d="M12,8c1.1,0,2-0.9,2-2s-0.9-2-2-2s-2,0.9-2,2S10.9,8,12,8z M12,10c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,10,12,10z    M12,16c-1.1,0-2,0.9-2,2s0.9,2,2,2s2-0.9,2-2S13.1,16,12,16z" />
                  </svg>
                </i>
              </span>
            </div>
          </div>

          <span className={s.location}>
            {
              advert.address
                ? Object.values(advert.address).join(', ')
                : ''
            }
          </span>

          <div className={c.infoWrapper}>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Кого ищут</span>
              {
                advert.whom
                  ? Object.keys(advert.whom).map((val, i) => (
                    <div
                      className={`${c.tag} ${c[`tag_${val}`]}`}
                      key={i}
                    >
                      {formatVal(val, 'whom')}
                    </div>
                  ))
                  : null
              }
            </div>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Особенности</span>
              {
                advert.tags
                  ? Object.keys(advert.tags).map((val, i) => (
                    <div
                      className={`${c.tag} ${c[`tag_${val}`]}`}
                      key={i}
                    >
                      {formatVal(val, 'tags')}
                    </div>
                  ))
                  : null
              }
            </div>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Хотят арендовать</span>
              <span className={c.infoText}>{formatRent(advert.rent)}</span>
            </div>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Арендная плата</span>
              <span className={c.infoText}>
                {advert.pay}
                            руб.
              </span>
            </div>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Жильцов в кв.</span>
              <span className={c.infoText}>{advert.tenants}</span>
            </div>
            <div className={c.infoTags}>
              <span className={c.infoTitle}>Залог</span>
              <span className={c.infoText}>
                {
                  advert.pledge
                    ? `${advert.pledge}руб.`
                    : 'Без залога'
                }
              </span>
            </div>
          </div>

          <div className={s.text}>
            {
              advert.text
                ? <p>{advert.text}</p>
                : (
                  <Fragment>
                    <span className={`${s.text_dummy} ${s.dummy}`} />
                    <span className={`${s.text_dummy} ${s.dummy}`} />
                    <span className={`${s.text_dummy} ${s.dummy}`} />
                    <span className={`${s.text_dummy} ${s.dummy}`} />
                    <span className={`${s.text_dummy} ${s.dummy}`} />
                  </Fragment>
                )
            }
          </div>

          <div className={s.userInfo}>
            <span className={s.userInfo__avatar}>
              <i className={s.userInfo__avatarIcon}>
                <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_border}`}>
                  <circle cx="12" cy="12" r="3" />
                  <path d="M20,4h-3.17l-1.24-1.35C15.22,2.24,14.68,2,14.12,2H9.88c-0.56,0-1.1,0.24-1.48,0.65L7.17,4H4C2.9,4,2,4.9,2,6v12    c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M12,17c-2.76,0-5-2.24-5-5s2.24-5,5-5s5,2.24,5,5S14.76,17,12,17z" />
                </svg>
              </i>
            </span>

            <div className={s.userInfo__info}>
              <span className={s.userInfo__name}>{advert.name || ''}</span>
              <span
                className={
                  s.userInfo__date + (
                    !advert.createdAt
                      ? ` ${s.userInfo__date_dummy} ${s.dummy}`
                      : ''
                  )
                }
              >
                {
                  advert.createdAt
                    ? formatDate(new Date(advert.createdAt))
                    : ''
                }
              </span>
            </div>
          </div>
        </div>
      </CSSTransition>
    )
  }
}

const mapStateToProps = state => ({ favorites: state.favorites })

const mapDispatchToProps = ({ toggleFavorites })

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withCurrAdvert,
  withStyles(c, s, i),
)(Advert)
