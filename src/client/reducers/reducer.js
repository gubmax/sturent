import { combineReducers } from 'redux'

import app from './app'
import user from './user'
import favorites from './favorites'
import overlay from './overlay'
import adverts from './adverts'
import tabs from './tabs'

export default combineReducers({
  app,
  user,
  favorites,
  overlay,
  adverts,
  tabs
})
