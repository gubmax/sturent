const initialState = {
	counter: 0
}

export default (state = initialState, action) => {
	if (action.type === 'FAVORITES_ADD') {
		return { ...state, counter: state.counter + 1 }
	}
	return state
}
