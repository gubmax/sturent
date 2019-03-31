import { fakeUsers } from './_fakeData'

function findUser(req, res) {
  // eslint-disable-next-line no-underscore-dangle
  return res.json(fakeUsers.find(item => item._id === req.params.id))
}

function signUpUser() {}

function signInUser() {}

function deleteUser() {}

export default {
  findUser,
  signUpUser,
  signInUser,
  deleteUser,
}
