/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var __weex_template__ = __webpack_require__(1)
	var __weex_style__ = __webpack_require__(2)
	var __weex_script__ = __webpack_require__(3)

	__weex_define__('@weex-component/8e2a728ca214c2831ef401b9169488f7', [], function(__weex_require__, __weex_exports__, __weex_module__) {

	    __weex_script__(__weex_module__, __weex_exports__, __weex_require__)
	    if (__weex_exports__.__esModule && __weex_exports__.default) {
	      __weex_module__.exports = __weex_exports__.default
	    }

	    __weex_module__.exports.template = __weex_template__

	    __weex_module__.exports.style = __weex_style__

	})

	__weex_bootstrap__('@weex-component/8e2a728ca214c2831ef401b9169488f7',undefined,undefined)

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = {
	  "type": "div",
	  "children": [
	    {
	      "type": "image",
	      "shown": function () {return this.img.shown},
	      "style": {
	        "width": function () {return this.img.size},
	        "height": function () {return this.img.size}
	      },
	      "attr": {
	        "src": function () {return this.img.src}
	      }
	    },
	    {
	      "type": "text",
	      "classList": [
	        "text"
	      ],
	      "style": {
	        "color": "#ff0000"
	      },
	      "attr": {
	        "value": "weex"
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return 'The time is ' + (this.datetime)}
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.title}
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.getTitle()}
	      }
	    },
	    {
	      "type": "text",
	      "attr": {
	        "value": function () {return this.fullName}
	      }
	    },
	    {
	      "type": "text",
	      "events": {
	        "click": "changeName"
	      },
	      "attr": {
	        "value": "Change Name"
	      }
	    },
	    {
	      "type": "text",
	      "repeat": {
	        "expression": function () {return this.list},
	        "key": "k",
	        "value": "v"
	      },
	      "attr": {
	        "value": function () {return (this.k) + ' - ' + (this.v)}
	      }
	    },
	    {
	      "type": "text",
	      "events": {
	        "click": function ($event) {this.update($event,1,3)}
	      },
	      "attr": {
	        "value": function () {return 'Click:' + (this.result)}
	      }
	    }
	  ]
	}

/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = {
	  "text": {
	    "fontSize": 50
	  }
	}

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = function(module, exports, __weex_require__){'use strict';

	module.exports = {
		data: function () {return {
			list: ['a', 'b', 'c'],
			result: "<empty>",
			img: {
				shown: true,
				size: 200,
				src: 'https://gtms02.alicdn.com/tps/i2/TB1QHKjMXXXXXadXVXX20ySQVXX-512-512.png'
			},
			title: 'Alibaba',
			datetime: null,
			firstName: 'John',
			lastName: 'Smith'
		}},
		methods: {
			getTitle: function getTitle() {
				return 'Weex Team';
			},
			changeName: function changeName() {
				this.fullName = 'Cody tang';
			},
			update: function update(e, x, y) {
				this.result = e.type + (x + y);
				console.log(e.target);
				console.log(e.timestamp);
			}
		},
		created: function created() {
			this.datetime = new Date().toLocaleString();
		},
		computed: {
			fullName: {
				get: function get() {
					return this.firstName + ' ' + this.lastName;
				},
				set: function set(v) {
					var s = v.split(' ');
					this.firstName = s[0];
					this.lastName = s[1];
				}
			}
		}
	};}
	/* generated by weex-loader */


/***/ }
/******/ ]);