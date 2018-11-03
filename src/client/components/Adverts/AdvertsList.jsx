import React, { Component } from 'react'
import axios from 'axios'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import AdvertItem from './AdvertItem'
import Loader from '../Loader/Loader'

import s from './AdvertsList.css'

class AdvertsList extends Component {
	state = {
		items: this.props.items,
		skip: this.itemsCount,
		loading: false,
		isLast: false
	}

	get itemsCount() {
		const { items } = this.props
		return items ? items.length : null
	}

	componentDidMount() {
		if (this.itemsCount) {
			window.addEventListener('scroll', this.onScroll)
		}
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.onScroll)
	}

	onScroll = () => {
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
			    	{
						items && items.length
							? items.map((child, i) => {
								return <AdvertItem key={i} item={child} />
							})
							: <span className={s.msg}>Объявления не найдены</span>
					}
				</div>
				{
					loading
					  ? <Loader className={s.loader}/>
					  : null
				}
				{
					isLast
					  ? <span className={s.msg}>Объявления закончились</span>
					  : null
				}
			</div>
		)
	}
}

export default withStyles(s)(AdvertsList);
