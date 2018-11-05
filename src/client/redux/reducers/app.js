const initialState = { showPageLoader: false }

export default (state = initialState, action) => {
    switch (action.type) {
    case 'APP_SHOW_PAGE_LOADER':
        return { ...state, showPageLoader: true }
    case 'APP_HIDE_PAGE_LOADER':
        return { ...state, showPageLoader: false }
    default: return state
    }
}
