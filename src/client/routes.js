module.exports = [
    {
        path: '/',
        exact: true,
        componentName: 'HomePage',
    },
    {
        path: '/neighbors',
        exact: true,
        componentName: 'NeighborsPage',
    },
    {
        path: '/neighbors/:id',
        exact: true,
        componentName: 'AdvertPage',
    },
    {
        path: '/add',
        exact: true,
        componentName: 'AddPage',
    },
    {
        path: '/add/form',
        exact: true,
        componentName: 'AddFormPage',
    },
    {
        path: '/info',
        exact: true,
        componentName: 'InfoPage',
    },
    {
        path: '/favorites',
        exact: true,
        componentName: 'FavoritesPage',
    },
    {
        path: '/contacts',
        exact: true,
        componentName: 'ContactsPage',
    },
    {
        path: '/auth',
        exact: true,
        componentName: 'AuthPage',
    },
]
