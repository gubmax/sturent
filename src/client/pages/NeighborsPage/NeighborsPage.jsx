import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import Link from '../../containers/AsyncLink'
import Page from '../../layouts/Page/Page'
import AdvertsList from '../../components/Adverts/AdvertsList'
import withAdverts from '../../containers/withAdverts'
import { API_PREFIX } from '../../../etc/config.json'

import b from '../../styles/Button.css'
import i from '../../styles/Icon.css'

class Neighbors extends Component {
    render() {
        const { adverts } = this.props

        return (
            <Page
title="Поиск соседей"
                header={
                    <Fragment>
  <Link to="/map" className={`${b.btn} ${b.btn_primary} ${b.btn_withIcon}`}>
                            <i className={i.icon}>
                                <svg viewBox="0 0 24 24" className={`${i.srIcon  } ${  i.srIcon_light}`}>
                                    <path d="M12,2C8.13,2,5,5.13,5,9c0,4.17,4.42,9.92,6.24,12.11c0.4,0.48,1.13,0.48,1.53,0C14.58,18.92,19,13.17,19,9   C19,5.13,15.87,2,12,2z M12,11.5c-1.38,0-2.5-1.12-2.5-2.5s1.12-2.5,2.5-2.5s2.5,1.12,2.5,2.5S13.38,11.5,12,11.5z" />
                                </svg>
                            </i>
  <span>На карте</span>
                        </Link>
                        <Link to={{ pathname: '/neighbors/filters', state: { modal: true } }} className={`${b.btn} ${b.btn_secondary} ${b.btn_withIcon}`}>
  <i className={i.icon}>
  <svg viewBox="0 0 24 24" className={`${i.srIcon  } ${  i.srIcon_accent}`}>
  <path d="M11,18h2c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1h-2c-0.55,0-1,0.45-1,1v0C10,17.55,10.45,18,11,18z M3,7L3,7   c0,0.55,0.45,1,1,1h16c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H4C3.45,6,3,6.45,3,7z M7,13h10c0.55,0,1-0.45,1-1v0   c0-0.55-0.45-1-1-1H7c-0.55,0-1,0.45-1,1v0C6,12.55,6.45,13,7,13z" />
                                </svg>
                            </i>
                            <span>Фильтры</span>
                        </Link>
                    </Fragment>
                }
  withoutWrapper
                content={
                    <AdvertsList url={`${API_PREFIX}/rent/adverts`} items={adverts} />
                }
			/>
        )
    }
}

export default compose(
    withAdverts,
    withStyles(b, i),
)(Neighbors)
