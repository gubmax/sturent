import React from 'react'
import { hydrate  } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import reducer from './reducers/reducer'
import App from './layouts/App/App.jsx'
import StylesProvider from './containers/StylesProvider.jsx'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(
	reducer,
	preloadedState,
	window.__REDUX_DEVTOOLS_EXTENSION__ ?
		compose(
			applyMiddleware(thunk),
			window.__REDUX_DEVTOOLS_EXTENSION__()
		)
	: applyMiddleware(thunk)
)

const insertCss = (...styles) => {
	const removeCss = styles.map(x => x._insertCss())
	return () => { removeCss.forEach(f => f()) }
}

let initialRendering = true

hydrate((
	<Provider store={store}>
		<BrowserRouter>
			<StylesProvider onInsertCss={insertCss}>
				<Route component={App} />
			</StylesProvider>
		</BrowserRouter>
  </Provider>
),
document.getElementById('root'),
() => {
	if (initialRendering) {
		document.getElementById('css').remove()
		initialRendering = false
	}
})
