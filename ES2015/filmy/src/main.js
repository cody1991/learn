import Vue from 'vue'
import App from './App.vue'

import min from 'min'
import Model from 'min-model';
import qiniu from 'qiniu.js';

// import qiniuBucket from './models/qiniu-bucket.js'

new Vue({
	el: '#app',
	render: h => h(App)
});