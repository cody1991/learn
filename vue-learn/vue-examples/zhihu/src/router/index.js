import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
    history: true
});

router.map({
    '/': {
        name: 'index',
        component: (resolve) => {
            require(['../components/list.vue'], resolve)
        }
    },
    '/themes': {
        name: 'themes',
        component: (resolve) => {
            require(['../components/themes.vue'], resolve)
        }
    },
    '/themes/:id': {
        name: 'theme-list',
        component: (resolve) => {
            require(['../components/themeList.vue'], resolve)
        }
    },
    '/news/:id': {
        name: 'news',
        component: (resolve) => {
            require(['../components/news.vue'], resolve)
        }
    }
})


export default router
