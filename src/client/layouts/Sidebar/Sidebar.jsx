import React, { Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Link from '../../containers/AsyncLink.jsx'
import { showOverlay, hideOverlay } from '../../actions/overlayActions'

import s from './Sidebar.css'
import o from '../../styles/Overlay.css'
import l from '../../styles/List.css'
import i from '../../styles/Icon.css'
import lg from '../../styles/Logo.css'

class Sidebar extends Component {
	componentDidMount() {
		this.props.showOverlay()
	}

	componentWillUnmount() {
		this.props.hideOverlay()
	}

	onOverlayClick() {
		this.props.history.goBack()
	}

	onSidebarClick(event) {
		event.stopPropagation()
	}

	render() {
		const { currLocation } = this.props

		return (
      <div className={o.overlay} onClick={this.onOverlayClick.bind(this)}>
        <div className={s.sidebar} onClick={this.onSidebarClick.bind(this)}>
          <div className={s.wrapper}></div>
          <div className={s.header}>
            <span className={s.headerBtn} onClick={this.onOverlayClick.bind(this)}>
              <i className={i.icon}>
                <svg className={i.srIcon + ' ' + i.srIcon_secondary} viewBox="0 0 24 24">
                  <path d="M2,17L2,17c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3C2.45,16,2,16.45,2,17z M2,12L2,12   c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3C2.45,11,2,11.45,2,12z M2,7L2,7c0,0.55,0.45,1,1,1h18   c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3C2.45,6,2,6.45,2,7z"/>
                </svg>
              </i>
            </span>
            <Link to="/" className={lg.logo}>STU<span className={lg.logo__color}>RENT</span></Link>
          </div>
          <ul className={l.list}>
            <li>
              <Link to="/neighbors" className={l.item + (currLocation == "/neighbors" ? ' ' + l.isActive : '')}>
                <i className={l.icon}>
                  <svg className={i.srIcon + ' ' + i.srIcon_secondary} viewBox="0 0 24 24">
                    <path d="M12,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S8,5.79,8,8S9.79,12,12,12z M12,14c-2.67,0-8,1.34-8,4v1c0,0.55,0.45,1,1,1h14   c0.55,0,1-0.45,1-1v-1C20,15.34,14.67,14,12,14z"/>
                  </svg>
                </i>
                <span>Найти соседей</span>
              </Link>
            </li>
            <li>
              <Link to="/rent" className={l.item + (currLocation == "/rent" ? ' ' + l.isActive : '')}>
                <i className={l.icon}>
                  <svg className={i.srIcon + ' ' + i.srIcon_secondary} viewBox="0 0 24 24">
                    <path d="M12,7V5c0-1.1-0.9-2-2-2H4C2.9,3,2,3.9,2,5v14c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V9c0-1.1-0.9-2-2-2H12z M6,19H4v-2h2V19z    M6,15H4v-2h2V15z M6,11H4V9h2V11z M6,7H4V5h2V7z M10,19H8v-2h2V19z M10,15H8v-2h2V15z M10,11H8V9h2V11z M10,7H8V5h2V7z M19,19h-7   v-2h2v-2h-2v-2h2v-2h-2V9h7c0.55,0,1,0.45,1,1v8C20,18.55,19.55,19,19,19z M18,11h-2v2h2V11z M18,15h-2v2h2V15z"/>
                  </svg>
                </i>
                <span>Подселиться</span>
              </Link>
            </li>
            <li>
              <Link to="/map" className={l.item + (currLocation == "/map" ? ' ' + l.isActive : '')}>
                <i className={l.icon}>
                  <svg className={i.srIcon + ' ' + i.srIcon_secondary} viewBox="0 0 24 24">
                    <path d="M12,2C8.13,2,5,5.13,5,9c0,4.17,4.42,9.92,6.24,12.11c0.4,0.48,1.13,0.48,1.53,0C14.58,18.92,19,13.17,19,9   C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,11.5,12,11.5z"/>
                  </svg>
                </i>
                <span>Подселение на карте</span>
              </Link>
            </li>
            <li>
              <Link to="/add" className={l.item + (currLocation == "/add" ? ' ' + l.isActive : '')}>
                <i className={l.icon}>
                  <svg className={i.srIcon + ' ' + i.srIcon_secondary} viewBox="0 0 24 24">
                    <path d="M13,10H3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1v0C14,10.45,13.55,10,13,10z M13,6H3   C2.45,6,2,6.45,2,7v0c0,0.55,0.45,1,1,1h10c0.55,0,1-0.45,1-1v0C14,6.45,13.55,6,13,6z M18,14v-3c0-0.55-0.45-1-1-1h0   c-0.55,0-1,0.45-1,1v3h-3c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h3v3c0,0.55,0.45,1,1,1h0c0.55,0,1-0.45,1-1v-3h3   c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H18z M3,16h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3c-0.55,0-1,0.45-1,1v0   C2,15.55,2.45,16,3,16z"/>
                  </svg>
                </i>
                <span>Добавить объявление</span>
              </Link>
            </li>
            <li className={l.separator}></li>
            <Link to="/info" className={l.item + (currLocation == "/info" ? ' ' + l.isActive : '')}>
              <i className={l.icon}>
                <svg className={i.srIcon + ' ' + i.srIcon_secondary} viewBox="0 0 24 24">
                  <path d="M12,2C6.48,2,2,6.48,2,12c0,5.52,4.48,10,10,10s10-4.48,10-10C22,6.48,17.52,2,12,2z M12,17L12,17c-0.55,0-1-0.45-1-1v-4    c0-0.55,0.45-1,1-1h0c0.55,0,1,0.45,1,1v4C13,16.55,12.55,17,12,17z M13,9h-2V7h2V9z"/>
                </svg>
              </i>
              <span>Справка</span>
            </Link>
            <Link to="/contacts" className={l.item + (currLocation == "/contacts" ? ' ' + l.isActive : '')}>
              <i className={l.icon}>
                <svg className={i.srIcon + ' ' + i.srIcon_secondary} viewBox="0 0 24 24">
                	<path d="M20,4H4C2.9,4,2.01,4.9,2.01,6L2,18c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M19.6,8.25l-7.07,4.42   c-0.32,0.2-0.74,0.2-1.06,0L4.4,8.25C4.15,8.09,4,7.82,4,7.53c0-0.67,0.73-1.07,1.3-0.72L12,11l6.7-4.19   C19.27,6.46,20,6.86,20,7.53C20,7.82,19.85,8.09,19.6,8.25z"/>
                </svg>
              </i>
              <span>Обратная связь</span>
            </Link>
						<li className={l.separator}></li>
          </ul>
          <span className={s.copyright}>{ new Date().getFullYear() } &#xa9; STURENT</span>
        </div>
      </div>
		)
	}
}

const mapStateToProps = state => ({
  overlay: state.overlay
})

const mapDispatchToProps = ({
	showOverlay,
	hideOverlay
})

export default compose(
	connect(mapStateToProps, mapDispatchToProps),
	withStyles(s, o, l, i)
)(Sidebar)
