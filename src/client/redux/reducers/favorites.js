const initialState = {
	counter: 0,
	list: []
}

export default (state = initialState, action) => {
	if (action.type === 'FAVORITES_TOGGLE') {
		let list = state.list,
				counter = state.counter

		const id = action.payload,
					pos = list.indexOf(id)

		if (pos !== -1) {
			list.splice(pos, 1)
			counter--
		}
		else {
			list.push(id)
			counter++
		}

		return { ...state, counter: counter, list: list }
	}
	return state
}
