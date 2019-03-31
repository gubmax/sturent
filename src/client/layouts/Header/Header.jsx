import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { string } from 'prop-types'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Link from '../../containers/AsyncLink'
import LinkToModal from '../../containers/Modal/LinkToModal'
import { setMarginForOverlay } from '../../redux/actions/overlayActions'

import s from './Header.css'
import w from '../../styles/Wrapper.css'
import i from '../../styles/Icon.css'
import l from '../../styles/Logo.css'

class Header extends Component {
    state = {
      headerState: '',
      scrollTop: 0,
      isShow: s.isShow,
      isFixed: s.isFixed,
    }

    static propTypes = { locationPath: string.isRequired }

    componentDidMount() {
      window.addEventListener('scroll', this.handleShowHeader, false)
    }

    componentWillReceiveProps(nextProps) {
      if (typeof window === 'undefined') return

      if (!nextProps.overlay.showCounter) {
        document.body.removeAttribute('style')
        return
      }

      let scrollWidth = nextProps.overlay.margin

      if (scrollWidth === 'undefined') {
        const div = document.createElement('div')

        Object.assign(div.style, {
          overflowY: 'scroll',
          width: '100%',
          visibility: 'hidden',
        })

        document.body.appendChild(div)
        scrollWidth = div.offsetWidth - div.clientWidth
        document.body.removeChild(div)

        this.props.setMarginForOverlay(scrollWidth)
      }

      document.body.style.cssText = `margin-right: ${scrollWidth}px; overflow-y: hidden;`
    }

    checkLocationName = (name) => {
      const { locationPath } = this.props

      return locationPath === name ? ` ${s.isActive}` : ''
    }

    handleShowHeader = () => {
      let state = ''
      const currScroll = window.pageYOffset
      const pastScroll = this.state.scrollTop

      if (currScroll === 0) {
        state = ''
      } else if (currScroll < pastScroll && currScroll > 56) {
        state = `${this.state.isFixed} ${this.state.isShow}`
      } else if (currScroll > 56) {
        state = this.state.isFixed
      }

      this.setState({ headerState: state, scrollTop: currScroll })
    }

    render() {
      const { favoritesCounter } = this.props
      const { checkLocationName } = this

      return (
        <header className={this.state.headerState}>
          <div className={`${w.wrapper} ${s.wrapper}`}>
            <Link
              to={{
	                        pathname: '/sidebar',
	                        state: { sidebar: true },
	                    }}
              className={`${s.btn} ${s.btn_sidebar}`}
            >
              <i className={i.icon}>
                <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_secondary}`}>
                  <path d="M2,17L2,17c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3C2.45,16,2,16.45,2,17z M2,12L2,12   c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3C2.45,11,2,11.45,2,12z M2,7L2,7c0,0.55,0.45,1,1,1h18   c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3C2.45,6,2,6.45,2,7z" />
                </svg>
              </i>
            </Link>
            <Link to="/" className={l.logo}>
                        STU
              <span className={l.logo__color}>RENT</span>
            </Link>
            <nav>
              <Link
                to="/neighbors"
                className={s.nav__link + checkLocationName('/neighbors')}
              >
                            Найти соседей
              </Link>
              <Link
                to="/rent"
                className={s.nav__link + checkLocationName('/rent')}
              >
                            Подселиться
              </Link>
              <Link
                to="/add"
                className={s.nav__link + checkLocationName('/add')}
              >
                             Добавить объявление
              </Link>
            </nav>
            <div className={s.btns}>
              <Link to="/favorites" className={s.btn}>
                <i className={i.icon}>
                  <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_secondary}`}>
                    <path d="M13.35,20.13c-0.76,0.69-1.93,0.69-2.69-0.01l-0.11-0.1C5.3,15.27,1.87,12.16,2,8.28c0.06-1.7,0.93-3.33,2.34-4.29   c2.64-1.8,5.9-0.96,7.66,1.1c1.76-2.06,5.02-2.91,7.66-1.1c1.41,0.96,2.28,2.59,2.34,4.29c0.14,3.88-3.3,6.99-8.55,11.76   L13.35,20.13z" />
                  </svg>
                </i>
                <span className={`${s.counter} ${s.counter_favorites} ${s.btn__counter + (
	                                !favoritesCounter
	                                ? ` ${s.isHide}`
	                                : '')}`}
                >
                  {favoritesCounter}
                </span>
              </Link>

              <LinkToModal to="/auth" className={`${s.btn} ${s.btn_auth}`}>
                <i className={i.icon}>
                  <svg viewBox="0 0 24 24" className={`${i.srIcon} ${i.srIcon_secondary}`}>
                    <path d="M12,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S8,5.79,8,8S9.79,12,12,12z M12,14c-2.67,0-8,1.34-8,4v1c0,0.55,0.45,1,1,1h14   c0.55,0,1-0.45,1-1v-1C20,15.34,14.67,14,12,14z" />
                  </svg>
                </i>
              </LinkToModal>

              <span className={s.btn_profile}>
                <img src="/images/avatars/avatar_small.jpg" className={s.btn_profileImg} />
              </span>
            </div>
          </div>
        </header>
      )
    }
}

const mapStateToProps = state => ({ favoritesCounter: state.favorites.counter, overlay: state.overlay })

const mapDispatchToProps = ({ setMarginForOverlay })

export default compose(connect(mapStateToProps, mapDispatchToProps), withStyles(s, w, i, l))(Header)
