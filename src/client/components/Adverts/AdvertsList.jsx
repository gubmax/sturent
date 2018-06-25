import React from 'react'
import axios from 'axios'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import AdvertItem from './AdvertItem.jsx'
import Loader from '../Loader/Loader.jsx'

import s from './AdvertsList.css'

class AdvertsList extends React.Component {
	constructor(props) {
		super(props)

		const items = this.props.items

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
		let clientHeight = document.body.clientHeight,
				listBottom = this.refs.list.getBoundingClientRect().bottom

		if (listBottom - 200 > clientHeight || this.state.loading) return

		this.setState({ loading: true })

		axios(`${this.props.url}?skip=${this.state.skip}`).then(
			done => {
				let items = done.data

				if (!items.length) {
					window.removeEventListener('scroll', this.onScroll)
					this.setState({ isLast: true })
				}

				items = [...this.state.items, ...items]

				this.setState({
					items: items,
					skip: items.length,
					loading: false
				})
			},
			error => {
				console.error(error)
			}
		)
	}

	render() {
		return (
			<div className={s.list} ref="list">
				<div className={s.container}>
        	{this.state.items.map((child, i) => {
          	return <AdvertItem key={i} item={child} />
        	})}
				</div>
				{
					this.state.loading ?
						<Loader className={s.loader} />
					: null
				}
				{
					this.state.isLast ?
						<span className={s.msg}>Объявления закончились</span>
					: null
				}
			</div>
		)
	}
}

export default withStyles(s)(AdvertsList);
