import { Component } from 'react'
import { node, string } from 'prop-types'
import axios from 'axios'

class Form extends Component {
  static propTypes = {
    children: node,
    className: string,
    method: string.isRequired,
    action: string.isRequired
  }

  componentDidMount() {
    const fields = this.refs.form.getElementsByClassName('field')
    let values = {}

    for (let key in fields) {
      fields[key].onchange = this.handleChange
      values[fields[key].name] = fields[key].value
    }

    this.setState(values)
  }

  handleChange = (e) => {
    const name = e.target.name
    this.setState({ name: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()

    axios({
      method: this.props.method,
      url: this.props.action,
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
    const { className, method, action } = this.props
  	return (
      <form role="form" className={className} method={method} action={action} onSubmit={this.handleSubmit} ref="form">
        {this.props.children}
      </form>
    )
  }
}

export default Form
