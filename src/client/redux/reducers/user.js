const initialState = {
	user: undefined
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'USER_REQUEST_SUCCESS':
      return { ...state, user: action.payload }
    case 'USER_REQUEST_FAILURE':
      return { ...state, user: undefined }
    default:
      return state
  }
}
