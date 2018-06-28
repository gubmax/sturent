import React, { Component } from 'react'
import axios from 'axios'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import AdvertItem from './AdvertItem.jsx'
import Loader from '../Loader/Loader.jsx'

import s from './AdvertsList.css'

class AdvertsList extends Component {
	constructor(props) {
		super(props)

		const { items } = this.props

		this.state = {
			items: items,
			skip: items.length,
			loading: false,
			isLast: false
		}

		this.onScroll = this.onScroll.bind(this)
	}

	componentDidMount() {
		window.addEventListener('scroll', this.onScroll)
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll)
	}

	onScroll() {
    const { loading, skip, items, isLast } = this.state
		let clientHeight = document.body.clientHeight,
				listBottom = this.refs.list.getBoundingClientRect().bottom

		if (listBottom - 200 > clientHeight || loading) return

		this.setState({ loading: true })

		axios(`${this.props.url}?skip=${skip}`).then(
			done => {
				let data = done.data

				if (!data.length) {
					window.removeEventListener('scroll', this.onScroll)
					this.setState({ isLast: true })
				}

				data = [...items, ...data]

				this.setState({
					items: data,
					skip: data.length,
					loading: false
				})
			},
			error => {
				console.error(error)
			}
		)
	}

	render() {
    const { loading, items, isLast } = this.state

		return (
			<div className={s.list} ref="list">
				<div className={s.container}>
        	{items.map((child, i) => {
          	return <AdvertItem key={i} item={child} />
        	})}
				</div>
				{
					loading ?
						<Loader className={s.loader} />
					: null
				}
				{
					isLast ?
						<span className={s.msg}>Объявления закончились</span>
					: null
				}
			</div>
		)
	}
}

export default withStyles(s)(AdvertsList);
