export const formatRent = (rent) => {
  if (rent === undefined) {
    return false
  }

  const rentNames = {
    room: 'Комнату',
    one: 1,
    two: 2,
    three: 3,
    four: 4,
    house: 'Дом',
    partOfHouse: 'Часть дома',
  }

  let roomsKey
  const str = rent.map((val, index) => {
    if (Number.isInteger(rentNames[val])) roomsKey = index
    return rentNames[val]
  })

  str[roomsKey] += '-комн. кв.'

  return str.join(', ')
}

export const formatDate = (date) => {
  const monthNames = [
    'января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря',
  ]

  const day = date.getDate()
  const monthIndex = date.getMonth()
  const hours = date.getHours()
  let minutes = date.getMinutes()

  if (minutes < 10) minutes = `0${minutes}`

  return `${day} ${monthNames[monthIndex]} в ${hours}:${minutes}`
}

export const formatVal = (val, name) => {
  const arr = {
    whom: {
      female: 'Женщину',
      male: 'Мужчину',
      couple: 'Пару',
      company: 'Компанию',
    },
    tags: {
      child: 'Дети',
      animal: 'Животные',
      smoke: 'Курят',
      alcohol: 'Выпивают',
    },
  }

  return arr[name][val]
}
