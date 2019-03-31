const initialState = {
  list: undefined,
  current: undefined,
}

export default (state = initialState, action) => {
  switch (action.type) {
  case 'ADVERTS_REQUEST_SUCCESS':
    return { ...state, list: action.payload }
  case 'ADVERTS_REQUEST_FAILURE':
    return { ...state, list: undefined }
  case 'CURR_ADVERT_REQUEST_SUCCESS':
    return { ...state, current: action.payload }
  case 'CURR_ADVERT_REQUEST_FAILURE':
    return { ...state, current: undefined }
  case 'CURR_ADVERT_SET':
    return { ...state, current: action.payload }
  case 'CURR_ADVERT_REMOVE':
    return { ...state, current: undefined }
  default:
    return state
  }
}
