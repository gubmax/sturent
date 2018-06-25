import { combineReducers } from 'redux'

import user from './user'
import favorites from './favorites'
import overlay from './overlay'
import adverts from './adverts'

export default combineReducers({
  user,
  favorites,
  overlay,
  adverts
})
