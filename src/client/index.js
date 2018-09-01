import React from 'react'
import { hydrate  } from 'react-dom'
import { BrowserRouter, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'


import createStore from './createStore';
import reducer from './reducers/reducer'
import AppRouter from './clientRouter.jsx'
import StylesProvider from './containers/StylesProvider.jsx'

const preloadedState = window.__PRELOADED_STATE__
delete window.__PRELOADED_STATE__

const store = createStore(preloadedState)

const insertCss = (...styles) => {
	const removeCss = styles.map(x => x._insertCss())
	return () => { removeCss.forEach(f => f()) }
}

let initialRendering = true

hydrate((
	<Provider store={store}>
		<StylesProvider onInsertCss={insertCss}>
			<BrowserRouter>
				<AppRouter />
			</BrowserRouter>
		</StylesProvider>
  </Provider>
),
document.getElementById('root'),
() => {
	if (initialRendering) {
		document.getElementById('css').remove()
		initialRendering = false
	}
})
