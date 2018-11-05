import { Children, Component } from 'react'
import { element, func } from 'prop-types'

class StylesProvider extends Component {
    static propTypes = {
        children: element.isRequired,
        onInsertCss: func.isRequired,
    }

    static childContextTypes = { insertCss: func.isRequired }

    getChildContext() {
        const { onInsertCss } = this.props

        return { insertCss: onInsertCss }
    }

    render() {
        const { children } = this.props

        return Children.only(children)
    }
}

export default StylesProvider
