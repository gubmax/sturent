import { Component, Children } from 'react'
import { element, func } from 'prop-types'

export default class StylesProvider extends Component {
  static propTypes = {
    children: element.isRequired,
    onInsertCss: func.isRequired
  }

  static childContextTypes = {
    insertCss: func.isRequired
  }

  getChildContext() {
    return { insertCss: this.props.onInsertCss }
  }

  render() {
    return Children.only(this.props.children)
  }
}
