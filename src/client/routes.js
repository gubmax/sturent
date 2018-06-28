module.exports = [
  {
    path: '/',
    exact: true,
    componentName: 'pages/HomePage/HomePage'
  },
  {
    path: '/neighbors',
    exact: true,
    componentName: 'pages/NeighborsPage/NeighborsPage',
  },
  {
    path: '/add',
    exact: true,
    componentName: 'pages/AddPage/AddPage'
  },
  {
    path: '/add/form',
    exact: true,
    componentName: 'pages/AddFormPage/AddFormPage'
  },
  {
    path: '/info',
    exact: true,
    componentName: 'pages/InfoPage/InfoPage'
  },
  {
    path: '/favorites',
    exact: true,
    componentName: 'pages/FavoritesPage/FavoritesPage'
  },
  {
    path: '/contacts',
    exact: true,
    componentName: 'pages/ContactsPage/ContactsPage'
  },
  {
    path: '/auth',
    exact: true,
    componentName: 'pages/AuthPage/AuthPage'
  },
  {
    path: '/advert/:id',
    exact: true,
    componentName: 'pages/AdvertPage/AdvertPage',
  },
];
