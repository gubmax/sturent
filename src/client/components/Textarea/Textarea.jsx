import React, { Component } from 'react'
import withStyles from 'isomorphic-style-loader/lib/withStyles'

import s from './Textarea.css'

class Textarea extends Component {
	constructor() {
  	super()
    this.state = {value: '', rows: 3, lineHeight: 0}
  }

  componentDidMount() {
    this.setState({
      lineHeight: parseInt(getComputedStyle(this.refs.textarea).lineHeight, 10),
    })
  }

  handleChange = (e) => {
    const lineHeight = this.state.lineHeight
    const oldRows = e.target.rows

  	e.target.rows = 3
    const newRows = ~~(e.target.scrollHeight / lineHeight)

    if (newRows === oldRows)
    	e.target.rows = newRows

  	this.setState({
    	value: e.target.value,
      rows: newRows
    })
  }

	render() {
  	return (
			<div className={s.textarea}>
				<span className={s.counter}>{this.state.value.length}</span>
				<textarea className={`${this.props.className}`}
					id={`${this.props.id}`}
					name={`${this.props.name}`}
					ref='textarea'
					value={this.state.value}
					rows={this.state.rows}
					onChange={this.handleChange} />
			</div>
		)
  }
}

export default withStyles(s)(Textarea)
