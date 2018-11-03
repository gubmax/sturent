import { combineReducers } from 'redux'

import app from './reducers/app'
import user from './reducers/user'
import favorites from './reducers/favorites'
import overlay from './reducers/overlay'
import adverts from './reducers/adverts'
import tabs from './reducers/tabs'

export default combineReducers({
    app,
    user,
    favorites,
    overlay,
    adverts,
    tabs,
})
