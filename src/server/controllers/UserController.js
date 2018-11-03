import mongoose from 'mongoose'

import '../models/UserModel'
import generateToken from '../token'

const User = mongoose.model('User')

function findUser(req, res) {
    User.findOne(
        { '_id': req.params.id },
        ('_id name favorite_adverts createdAt'),
        (err, task) => {
            if (err) res.send(err)
            res.json(task)
        },
    )
}

function signUpUser(data) {
    const user = new User({
        id: 0,
        name: data.name,
        email: data.email,
        password: bcrypt.hashSync(data.password.trim(), 10),
    })

	user.save((err, user) => {
        if (err) throw err
        var token = generateToken(user)
     res.json({
            user: user,
            token: token,
        })
  });
}

function signInUser(data) {
    User.findOne({ id: data })
        .exec((err, user) => {
            if (err) throw err

			if (!user) {
                return res.status(404).json({
                    error: true,
                    message: 'Username or Password is Wrong',
                })
			}

            bcrypt.compare(data.password, user.password, (err, valid) => {
                if (!valid) {
                    return res.status(404).json({
                        error: true,
                        message: 'Username or Password is Wrong',
                    })
				}

                let token = generateToken(user)

				res.json({
                    user: {
                        name: user.name,
                    },
                    token: token,
                })
			});
        })
}

function deleteUser(id) {
    User.findById(id).remove({}, (err, task) => {
        if (err) res.send(err)
        res.json(task)
    })
}

export default {
 findUser, signUpUser, signInUser, deleteUser }
