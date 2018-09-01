const initialState = {
	showPageLoader: false
}

export default (state = initialState, action) => {
	if (action.type === 'APP_TOGGLE_PAGE_LOADER') {
		return { ...state, showPageLoader: !state.showPageLoader }
	}
	return state
}
