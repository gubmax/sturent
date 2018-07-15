const initialState = {
	activeTabIndex: 0
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TABS_SET_ACTIVE_TAB_INDEX':
      return { ...state, activeTabIndex: action.payload }
    default:
      return state
  }
}
