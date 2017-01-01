import Vue from 'vue';
import App from './App';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';

import Home from './components/Home.vue';
import TimeEntries from './components/TimeEntries.vue';
import LogTime from './components/LogTime.vue';

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter();

router.map({
    '/home': {
        component: Home
    },
    '/time-entries': {
        component: TimeEntries,
        subRoutes: {
            '/log-time': {
                component: LogTime
            }
        }
    }
});

router.redirect({
    '*': '/home'
});

router.start(App, '#app');
