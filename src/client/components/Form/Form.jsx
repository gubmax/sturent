import { Component } from 'react'
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Form extends Component {
  constructor() {
    super()
  }

  componentDidMount() {
    const fields = this.refs.form.getElementsByClassName('field')
    let values = {}

    console.log(fields[0]);

    for (let key in fields) {
      fields[key].onchange = this.handleChange.bind(this)
      values[fields[key].name] = fields[key].value
    }

    this.setState(values)
  }

  handleChange(e) {
    const name = e.target.name
    this.setState({ name: e.target.value })
  }

  handleSubmit(e) {
    e.preventDefault()

    axios({
      method: `${this.props.method}`,
      url: `${this.props.action}`,
      data: this.state
    })
    .then(res => {
      console.log(res)
      console.log(res.data)
    })
    .catch(err => {
      console.log(err)
    })
  }

	render() {
  	return (
      <form role="form" className={`${this.props.className}`} method={`${this.props.method}`} action={`${this.props.action}`} onSubmit={this.handleSubmit.bind(this)} ref="form">
        {this.props.children}
      </form>
    )
  }
}

Form.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  method: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
}
