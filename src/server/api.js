import { Router } from 'express'

import User from './controllers/UserController'
import Advert from './controllers/AdvertController'

const router = new Router()

router.route('/user/:id')
  .get(User.findUser)

router.route('/add/form')
  .post(Advert.createAdvert)

router.get('/neighbors', Advert.listAdverts)
router.get('/neighbors/:id', Advert.findAdvert)

module.exports = router
