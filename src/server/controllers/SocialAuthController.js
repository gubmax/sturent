import mongoose from 'mongoose'
import passport from 'passport'
import { Strategy as VKontakteStrategy } from 'passport-vkontakte'

import { VK } from '../../etc/config.json'
import '../models/UserModel'

const User = mongoose.model('User')

passport.use(new VKontakteStrategy(
    {
        clientID: VK.id,
        clientSecret: VK.secret,
        callbackURL: VK.callback,
    },
    (req, accessToken, refreshToken, profile, done) => {
        const data = profile._json

        User.findOne({ '_vkId': data.id }, (err, user) => {
            if (err) return done(err)

            if (!user) {
                const user = new User({
      		_vkId: data.id,
      		name: data.first_name,
      		email: data.email || null,
      	})

      	user.save((err, user) => {
                    if (err) throw err
                    return done(err, user)
                })
            } else return done(err, user)
        })
    },
))

function authenticate(req, res) {
    passport.authenticate('vkontakte')
}

function callback(req, res) {
    passport.authenticate('vkontakte', (req, res) => {
        res.json({ user: req.user })
    })(req, res)
}

export default { authenticate, callback }
