const fakeAdverts = [{
  _id: 'd3kf7c0d',
  address: { region: 'twts' },
  latitude: 55,
  longitude: 55,
  rooms: 'data.rooms',
  pay: 'data.pay',
  pledge: 'data.pledge',
  tenants: 'data.tenants',
  text: 'data.text',
  whom: { female: true },
  tags: { child: true },
}]

const fakeUsers = [{
  name: 'Алексей',
  favorite_adverts: '',
  createdAt: '',
}]

module.exports = {
  fakeAdverts,
  fakeUsers,
}
