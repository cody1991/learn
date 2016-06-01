'use strict'

import Vue from 'vue';
import VueRouter from 'vue-router';
import FastClick from 'fastclick';
import routerMap from './routers';

Vue.use(VueRouter);

$.ajaxSettings.crossDomain = true;

let router = new VueRouter({
    hashbang: true,
    history: true,
    saveScrollPosition: true,
    transitionOnLoad: true
});

router.beforeEach((transition) => {
    $('html,body,#page').removeClass('scroll-hide');

    FastClick.attach(document.body);

    if (transition.to.auth) {
        if (localStorage.userID) {
            transition.next();
        } else {
            var redirect = encodeURIComponent(transition.to.path);
            transition.redirect('/login?redirect=' + redirect);
        }
    } else {
        transition.next();
    }
});

let app = Vue.extend({});
routerMap(router);

router.start(app, '#app');
