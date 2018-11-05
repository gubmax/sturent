export const showOverlay = () => ({ type: 'OVERLAY_SHOW' })

export const hideOverlay = () => ({ type: 'OVERLAY_HIDE' })

export const setMarginForOverlay = margin => ({
    type: 'OVERLAY_SET_MARGIN',
    payload: margin,
})
