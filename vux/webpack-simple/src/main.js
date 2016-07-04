import Vue from 'vue'
import App from './App.vue'


const FastClick = require('fastclick');
FastClick.attach(document.body);

new Vue({
    el: 'body',
    components: {
        App
    }
});
