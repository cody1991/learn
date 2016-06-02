export default (router) => router.map({
    '/': {
        name: 'index',
        component: require('./views/page')
    }
})
