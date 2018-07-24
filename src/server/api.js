import { Router } from 'express'

import User from './controllers/UserController'
import Auth from './controllers/SocialAuthController'
import Advert from './controllers/AdvertController'

const router = new Router()

router.get('/auth/vkontakte', Auth.authenticate)
router.get('/auth/vkontakte/callback', Auth.callback)

//router.post('/signup', Auth.signUp)
//router.post('/signin', Auth.signIn)

router.route('/user/:id')
  .get(User.findUser)
  //.post(User.createUser)
  //.delete(User.deleteUser)

router.route('/add/form')
  .post(Advert.createAdvert)

router.get('/rent/adverts', Advert.listAdverts)
router.get('/neighbors/:id', Advert.findAdvert)

module.exports = router
