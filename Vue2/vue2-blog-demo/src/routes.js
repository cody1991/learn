import Home from './components/Home.vue'
import Article from './components/Article.vue'
import Demo from './components/DemoVuexState.vue'

const routes = [{
  name: 'Home',
  path: '/',
  component: Home,
  meta: {
    title: 'home'
  }
}, {
  name: 'Article',
  path: '/article',
  component: Article,
  meta: {
    title: 'article'
  },
  children: [{
    name: 'vue2-1',
    path: 'vue2-1',
    component: require('./md/articles/vue2-1.vue'),
    meta: {
      title: 'vue2-1练习'
    }
  }, {
    name: 'vue2-2',
    path: 'vue2-2',
    component: require('./md/articles/vue2-2.vue'),
    meta: {
      title: 'vue2-2练习'
    }
  }, {
    name: 'vue2-3',
    path: 'vue2-3',
    component: require('./md/articles/vue2-3.vue'),
    meta: {
      title: 'vue2-3练习'
    }
  }]
}, {
  name: 'Demo',
  path: '/demo',
  component: Demo,
  meta: {
    title: 'vuex演示'
  }
}]

export default routes
