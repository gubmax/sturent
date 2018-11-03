import React, { Component, Fragment } from 'react'
import { withRouter } from 'react-router'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import Modal from '../../containers/Modal/Modal'
import Auth from '../../components/Auth/Auth'
import ModalAuth from '../../components/Auth/ModalAuth'
import Advert from '../../components/Adverts/Advert'
import Loader from '../../components/Loader/Loader'
import NotFoundPage from '../../pages/NotFoundPage/NotFoundPage'

import s from './App.css'

class ModalCSSTransition extends CSSTransition {
    onEntered = (node) => {
        if (!node) return
        node.nextSibling.style.overflow = 'auto'
    }
}

class App extends Component {
    state = { loading: true }

    componentDidMount() {
        this.setState({ loading: false })
    }

    componentWillReceiveProps() {
        const { location } = this.props

        if (!location.state) {
            this.prevLocation = location
        }
    }

    componentDidUpdate() {
        const hash = this.props.location.hash.replace('#', '')
        if (hash) {
            const el = document.getElementById(hash)
            if (el) el.scrollIntoView()
        }
    }

    render() {
        const {
            location, history, children, showPageLoader,
        } = this.props

        const isModal = !!(
            history.action !== 'POP'
			&& location.state
			&& (location.state.modal || location.state.sidebar)
        )
        const currLocation = isModal || showPageLoader ? this.prevLocation : location
        const pos = isModal ? location.state.position : {}

        const pageClasses = {
            enter: s.pageEnter,
            enterActive: s.pageEnterActive,
            exit: s.pageExit,
            exitActive: s.pageExitActive,
        }
        const modalClasses = {
            enter: s.modalEnter,
            enterActive: s.modalEnterActive,
            exit: s.modalExit,
            exitActive: s.modalExitActive,
        }
        const sidebarClasses = {
            enter: s.sidebarEnter,
            enterActive: s.sidebarEnterActive,
            exit: s.sidebarExit,
            exitActive: s.sidebarExitActive,
        }

        return (
            <div id={s.app}>
                {
                    this.state.loading
                        ? <div className={s.loader} />
                        : null
                }
                <Header currLocation={currLocation.pathname} />

                <div className={s.pageLoader + (showPageLoader ? ` ${s.isShow}` : '')}>
                    <Loader className={s.pageLoader__icon} />
                </div>

                <TransitionGroup component={null}>
                    <CSSTransition
                        key={currLocation.key}
                        classNames={pageClasses}
                        timeout={250}
                    >
                        <Fragment>
                            <main>
                                <Switch location={currLocation}>
                                    { children }
                                    <Route path="/auth" render={() => <AuthPage location={currLocation}><Auth /></AuthPage>} />
                                    <Route component={NotFoundPage} />
                                </Switch>
                            </main>
                            <Footer />
                        </Fragment>
                    </CSSTransition>
                </TransitionGroup>

                <TransitionGroup component={null}>
                    <ModalCSSTransition
                        key={location.key}
                        classNames={modalClasses}
                        timeout={400}
                        unmountOnExit
                    >
                        <Switch location={isModal ? location : {}}>
                            <Route path="/auth" component={() => <Modal style={pos}><ModalAuth history={history} /></Modal>} />
                            <Route path="/neighbors/filters" exact component={() => <Modal style={pos} />} />
                            <Route path="/neighbors/:id" component={({ match }) => <Modal style={pos}><Advert match={match} /></Modal>} />
                            <Route path="/rent/filters" component={() => <Modal style={pos} />} />
                        </Switch>
                    </ModalCSSTransition>
                </TransitionGroup>

                <TransitionGroup component={null}>
                    <CSSTransition
                        key={location.key}
                        classNames={sidebarClasses}
                        timeout={{ enter: 250, exit: 200 }}
                    >
                        <Switch location={location}>
                            <Route path="/sidebar" component={() => <Sidebar currLocation={currLocation.pathname} history={history} />} />
                        </Switch>
                    </CSSTransition>
                </TransitionGroup>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    showPageLoader: state.app.showPageLoader,
})

export default compose(
    connect(mapStateToProps),
    withRouter,
    withStyles(s),
)(App)
