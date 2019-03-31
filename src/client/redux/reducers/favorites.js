const initialState = {
  counter: 0,
  list: [],
}

export default (state = initialState, action) => {
  if (action.type === 'FAVORITES_TOGGLE') {
    const { list } = state
    let { counter } = state

    const id = action.payload
    const pos = list.indexOf(id)

    if (pos !== -1) {
      list.splice(pos, 1)
      counter--
    } else {
      list.push(id)
      counter++
    }

    return { ...state, counter, list }
  }
  return state
}
