const fakeAdverts = [{
  _id: 'd3kf7c0d',
  address: { region: 'data.address.rooms' },
  latitude: 55,
  longitude: 55,
  rooms: 'data.rooms',
  pay: 'data.pay',
  pledge: 'data.pledge',
  tenants: 'data.tenants',
  text: 'data.text',
  whom: { female: true },
  tags: { child: true },
  name: 'Алексей',
  createdAt: new Date(),
}]

const fakeUsers = [{
  name: 'Алексей',
  favorite_adverts: '',
  createdAt: new Date(),
}]

module.exports = {
  fakeAdverts,
  fakeUsers,
}
