import { fakeAdverts } from './_fakeData'

const listAdverts = (req, res) => {
  const { skip } = req.query
  const adverts = fakeAdverts

  if (skip) {
    adverts.splice(0, skip)
  }

  return res.json(adverts)
}

function findAdvert(req, res) {
  // eslint-disable-next-line no-underscore-dangle
  return res.json(fakeAdverts.find(item => item._id === req.params.id))
}

function createAdvert() {}

function deleteAdvert() {}

export default {
  listAdverts,
  findAdvert,
  createAdvert,
  deleteAdvert,
}
