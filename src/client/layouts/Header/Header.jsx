import React from 'react';
import { Link, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import { connect } from 'react-redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import LinkToModal from '../../containers/Modal/LinkToModal.jsx'
import { setMarginForOverlay } from '../../actions/overlayActions'
import { addToFavorites } from '../../actions/favoritesActions'

import s from './Header.css'
import w from '../../styles/Wrapper.css'
import i from '../../styles/Icon.css'
import l from '../../styles/Logo.css'

class Header extends React.Component {
	constructor(props) {
		super(props)

		this.state = {
			headerState: '',
			scrollTop: 0,
			isShow: s.isShow,
			isFixed: s.isFixed
		}

		this.handleShowHeader
	}

	componentDidMount() {
		window.addEventListener('scroll', this.handleShowHeader.bind(this), false)
	}

	componentWillReceiveProps(nextProps) {
		if (typeof(window) === 'undefined') return

		if (!nextProps.overlay.showCounter) {
			document.body.removeAttribute('style')
			this.refs.header.removeAttribute('style')
			return
		}

		let scrollWidth = nextProps.overlay.margin

		if (scrollWidth === 'undefined') {
			let div = document.createElement('div')

			Object.assign(div.style, {
				overflowY: 'scroll',
				width: '100%',
				visibility: 'hidden'
			})

			document.body.appendChild(div)
			scrollWidth = div.offsetWidth - div.clientWidth
			document.body.removeChild(div)

			this.props.setMarginForOverlay(scrollWidth)
		}

		document.body.style.cssText = `margin-right: ${scrollWidth}px; overflow-y: hidden;`
		this.refs.header.style.cssText = `margin-right: ${scrollWidth}px;`
	}

	handleShowHeader() {
		let state = ''
		const currScroll = window.pageYOffset,
					pastScroll = this.state.scrollTop

		if (currScroll == 0)
			state = ''
		else if (currScroll < pastScroll && currScroll > 56)
			state = this.state.isFixed + " " +  this.state.isShow
		else if (currScroll > 56)
			state =  this.state.isFixed

		this.setState({
			headerState: state,
			scrollTop: currScroll
		})
	}

	addToFavorites() {
		this.props.addToFavorites()
	}

	render() {
		const { currLocation } = this.props

		return (
			<header className={this.state.headerState} ref="header">
				<div className={w.wrapper + ' ' + s.wrapper}>
					<Link to={{ pathname: "/sidebar", state: {sidebar: true} }} className={s.btn + " " + s.btn_sidebar}>
						<i className={i.icon}>
							<svg viewBox="0 0 24 24" className={i.srIcon + ' ' + i.srIcon_secondary}>
								<path d="M2,17L2,17c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3C2.45,16,2,16.45,2,17z M2,12L2,12   c0,0.55,0.45,1,1,1h18c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3C2.45,11,2,11.45,2,12z M2,7L2,7c0,0.55,0.45,1,1,1h18   c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H3C2.45,6,2,6.45,2,7z"/>
							</svg>
						</i>
					</Link>
					<Link to="/" className={l.logo}>STU<span className={l.logo__color}>RENT</span></Link>
					<nav>
						<Link to="/neighbors" className={s.nav__link + (currLocation == "/neighbors" ? " " + s.isActive : "")}>Найти соседей</Link>
						<Link to="/rent" className={s.nav__link + (currLocation == "/rent" ? " " + s.isActive : "")}>Подселиться</Link>
						<Link to="/add" className={s.nav__link + (currLocation == "/add" ? " " + s.isActive : "")}>Добавить объявление</Link>
					</nav>
					<div className={s.btns}>
						<Link to="/favorites" className={s.btn}>
							<i className={i.icon}>
								<svg viewBox="0 0 24 24" className={i.srIcon + ' ' + i.srIcon_secondary}>
									<path d="M13.35,20.13c-0.76,0.69-1.93,0.69-2.69-0.01l-0.11-0.1C5.3,15.27,1.87,12.16,2,8.28c0.06-1.7,0.93-3.33,2.34-4.29   c2.64-1.8,5.9-0.96,7.66,1.1c1.76-2.06,5.02-2.91,7.66-1.1c1.41,0.96,2.28,2.59,2.34,4.29c0.14,3.88-3.3,6.99-8.55,11.76   L13.35,20.13z"/>
								</svg>
							</i>
							<span className={`${s.counter} ${s.counter_favorites} ${s.btn__counter}${!this.props.favorites.counter ? " " + s.isHide : ''}`}>{this.props.favorites.counter}</span>
						</Link>

						<LinkToModal to="/auth" className={s.btn + " " + s.btn_auth}>
							<i className={i.icon}>
								<svg viewBox="0 0 24 24" className={i.srIcon + ' ' + i.srIcon_secondary}>
									<path d="M12,12c2.21,0,4-1.79,4-4s-1.79-4-4-4S8,5.79,8,8S9.79,12,12,12z M12,14c-2.67,0-8,1.34-8,4v1c0,0.55,0.45,1,1,1h14   c0.55,0,1-0.45,1-1v-1C20,15.34,14.67,14,12,14z"/>
								</svg>
							</i>
						</LinkToModal>

						<span className={s.btn_profile} onClick={this.addToFavorites.bind(this)}>
							<img src="/images/avatars/avatar_small.jpg" className={s.btn_profileImg} />
						</span>
					</div>
				</div>
			</header>
		);
	}
}

const mapStateToProps = state => ({
	favorites: state.favorites,
	overlay: state.overlay
})

const mapDispatchToProps = ({
	setMarginForOverlay,
	addToFavorites
})

export default withStyles(s, w, i, l)(
	withRouter(
		connect(mapStateToProps, mapDispatchToProps)(Header)
	)
)