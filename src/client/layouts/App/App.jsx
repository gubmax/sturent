import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Header from '../Header/Header.jsx';
import Main from '../Main/Main.jsx';
import Footer from '../Footer/Footer.jsx';
import Sidebar from '../Sidebar/Sidebar.jsx'
import Modal from '../../containers/Modal/Modal.jsx'
import Auth from '../../components/Auth/Auth.jsx'
import Advert from '../../components/Adverts/Advert.jsx'

import s from './App.css'

class ModalCSSTransition extends CSSTransition {
  onEntered = (node) => {
    /*Do not remove enter classes when active */
    if (!node) return

    node.nextSibling.style.overflow = 'auto'
  }
}

class App extends React.Component {
	componentWillReceiveProps(nextProps) {
		this.prevLocation = this.props.location
	}

	componentDidUpdate() {
		let hash = this.props.location.hash.replace('#', '')
		if (hash) {
			let el = document.getElementById(hash)
			if (el) el.scrollIntoView()
		}
	}

	render() {
		const { location, history } = this.props

		const isModal = !!(
			history.action !== 'POP' &&
			location.state &&
			(location.state.modal || location.state.sidebar)
		)

		const currLocation = isModal ? this.prevLocation : location
		const pos = isModal ? location.state.position : {}

		const pageClasses = {
			enter: s.pageEnter,
			enterActive: s.pageEnterActive,
			exit: s.pageExit,
			exitActive: s.pageExitActive
    }
		const modalClasses = {
			enter: s.modalEnter,
			enterActive: s.modalEnterActive,
			exit: s.modalExit,
			exitActive: s.modalExitActive
		}
		const sidebarClasses = {
			enter: s.sidebarEnter,
			enterActive: s.sidebarEnterActive,
			exit: s.sidebarExit,
			exitActive: s.sidebarExitActive
		}

		return (
		  <div id={s.app}>
				<Header currLocation={currLocation.pathname} />

				<TransitionGroup>
					<CSSTransition key={currLocation.key}
						classNames={pageClasses}
						timeout={{enter: 250, exit: 200}}
						unmountOnExit>
						<Fragment>
							<Main location={currLocation} />
							<Footer />
						</Fragment>
					</CSSTransition>
				</TransitionGroup>

				<TransitionGroup>
					<ModalCSSTransition key={location.key}
						classNames={modalClasses}
						timeout={400}
						mountOnEnter
						appear>
						<Switch location={isModal ? location : {}}>
							<Route path="/auth" component={() => <Modal style={pos}><Auth/></Modal>} />
							<Route path="/neighbors/filters" component={() => <Modal style={pos}></Modal>} />
							<Route path="/rent/filters" component={() => <Modal style={pos}></Modal>} />
							<Route path="/advert/:id" component={({match}) => <Modal style={pos}><Advert match={match}/></Modal>} />
						</Switch>
					</ModalCSSTransition>
				</TransitionGroup>

				<TransitionGroup>
					<CSSTransition key={location.key}
						classNames={sidebarClasses}
						timeout={{enter: 250, exit: 200}}
						unmountOnExit>
						<Switch location={location}>
							<Route path="/sidebar" component={() => <Sidebar currLocation={currLocation.pathname} />} />
						</Switch>
					</CSSTransition>
				</TransitionGroup>
			</div>
		)
	}
}

export default withStyles(s)(App)
