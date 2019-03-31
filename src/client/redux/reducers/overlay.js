const initialState = {
  showCounter: 0,
  margin: 'undefined',
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'OVERLAY_SHOW':
    return { ...state, showCounter: state.showCounter + 1 }
  case 'OVERLAY_HIDE':
    return { ...state, showCounter: state.showCounter - 1 }
  case 'OVERLAY_SET_MARGIN':
    return { ...state, margin: action.payload }
  default:
    return state
  }
}
