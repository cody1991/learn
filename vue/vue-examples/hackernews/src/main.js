import Vue from 'vue'
import Router from 'vue-router'
import { domain, fromNow } from './filters'
import App from './components/App.vue'
import NewsView from './components/NewsView.vue'
import ItemView from './components/ItemView.vue'
import UserView from './components/UserView.vue'

Vue.use(Router);

// 暂时不太懂这两个过滤器
Vue.filters('fromNow', fromNow);
Vue.filters('domain', domain);

var router = new Router();
