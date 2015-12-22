/*! This file is created by cody 2015.12.20 */
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

	var module = __webpack_require__(1);
	var rem =  __webpack_require__(2);
	__webpack_require__(3);


	var app = document.createElement('h1');
	app.innerHTML = 'Hello World!';


	var container = document.createElement('div');
	container.classList.add('container');

	container.appendChild(app);
	container.appendChild(module());

	document.body.appendChild(container);


/***/ },
/* 1 */
/***/ function(module, exports) {

	function generateText() {
	    var element = document.createElement('h2');
	    element.innerHTML = 'Hello h2 world!!';
	    return element;
	}

	module.exports = generateText;


/***/ },
/* 2 */
/***/ function(module, exports) {

	(function() {
	    var _self = this;
	    _self.width = 640;
	    _self.fontSize = 100;
	    _self.widthProportion = function() {
	        var p = (document.body && document.body.clientWidth || document.getElementsByTagName("html")[0].offsetWidth) / _self.width;
	        return p > 1 ? 1 : p < 0.5 ? 0.5 : p
	    };
	    _self.changePage = function() {
	        document.getElementsByTagName("html")[0].setAttribute("style", "font-size:" + _self.widthProportion() * _self.fontSize + "px !important")
	    };
	    _self.changePage();
	    window.addEventListener("resize", function() {
	        _self.changePage()
	    }, false)
	})();


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(4);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(8)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js?compress!./style.less", function() {
				var newContent = require("!!./../../node_modules/css-loader/index.js!./../../node_modules/autoprefixer-loader/index.js!./../../node_modules/less-loader/index.js?compress!./style.less");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports
	exports.i(__webpack_require__(6), "");

	// module
	exports.push([module.id, ".container{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-family:'Microsoft YaHei',sans-serif;position:relative;min-width:320px;max-width:640px;margin:0 auto;font-size:.32rem}h2{background:transparent url(" + __webpack_require__(7) + ") repeat-x;background-size:auto 100%}", ""]);

	// exports


/***/ },
/* 5 */
/***/ function(module, exports) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	// css base code, injected by the css-loader
	module.exports = function() {
		var list = [];

		// return the list of modules as css string
		list.toString = function toString() {
			var result = [];
			for(var i = 0; i < this.length; i++) {
				var item = this[i];
				if(item[2]) {
					result.push("@media " + item[2] + "{" + item[1] + "}");
				} else {
					result.push(item[1]);
				}
			}
			return result.join("");
		};

		// import a list of modules into the list
		list.i = function(modules, mediaQuery) {
			if(typeof modules === "string")
				modules = [[null, modules, ""]];
			var alreadyImportedModules = {};
			for(var i = 0; i < this.length; i++) {
				var id = this[i][0];
				if(typeof id === "number")
					alreadyImportedModules[id] = true;
			}
			for(i = 0; i < modules.length; i++) {
				var item = modules[i];
				// skip already imported module
				// this implementation is not 100% perfect for weird media query combinations
				//  when a module is imported multiple times with different media queries.
				//  I hope this will never occur (Hey this way we have smaller bundles)
				if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
					if(mediaQuery && !item[2]) {
						item[2] = mediaQuery;
					} else if(mediaQuery) {
						item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
					}
					list.push(item);
				}
			}
		};
		return list;
	};


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(5)();
	// imports


	// module
	exports.push([module.id, "html{font-family:sans-serif;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}\nbody{margin:0}\narticle,aside,details,figcaption,figure,footer,header,hgroup,main,menu,nav,section,summary{display:block}\naudio,canvas,progress,video{display:inline-block;vertical-align:baseline}\naudio:not([controls]){display:none;height:0}\n[hidden],template{display:none}\na{background-color:transparent}\na:active,a:hover{outline:0}\nabbr[title]{border-bottom:1px dotted}\nb,strong{font-weight:bold}\ndfn{font-style:italic}\nh1{font-size:2em;margin:.67em 0}\nmark{background:#ff0;color:#000}\nsmall{font-size:80%}\nsub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}\nsup{top:-0.5em}\nsub{bottom:-0.25em}\nimg{border:0}\nsvg:not(:root){overflow:hidden}\nfigure{margin:1em 40px}\nhr{-moz-box-sizing:content-box;box-sizing:content-box;height:0}\npre{overflow:auto}\ncode,kbd,pre,samp{font-family:monospace,monospace;font-size:1em}\nbutton,input,optgroup,select,textarea{color:inherit;font:inherit;margin:0}\nbutton{overflow:visible}\nbutton,select{text-transform:none}\nbutton,html input[type=\"button\"],input[type=\"reset\"],input[type=\"submit\"]{-webkit-appearance:button;cursor:pointer}\nbutton[disabled],html input[disabled]{cursor:default}\nbutton::-moz-focus-inner,input::-moz-focus-inner{border:0;padding:0}\ninput{line-height:normal}\ninput[type=\"checkbox\"],input[type=\"radio\"]{box-sizing:border-box;padding:0}\ninput[type=\"number\"]::-webkit-inner-spin-button,input[type=\"number\"]::-webkit-outer-spin-button{height:auto}\ninput[type=\"search\"]{-webkit-appearance:textfield;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box}\ninput[type=\"search\"]::-webkit-search-cancel-button,input[type=\"search\"]::-webkit-search-decoration{-webkit-appearance:none}\nfieldset{border:1px solid #c0c0c0;margin:0 2px;padding:.35em .625em .75em}\nlegend{border:0;padding:0}\ntextarea{overflow:auto}\noptgroup{font-weight:bold}\ntable{border-collapse:collapse;border-spacing:0}\ntd,th{padding:0}\nhtml,body,div,span,applet,object,iframe,h1,h2,h3,h4,h5,h6,p,blockquote,pre,a,abbr,acronym,address,big,cite,code,del,dfn,em,img,ins,kbd,q,s,samp,small,strike,strong,sub,sup,tt,var,b,u,i,center,dl,dt,dd,ol,ul,li,fieldset,form,label,legend,table,caption,tbody,tfoot,thead,tr,th,td,article,aside,canvas,details,embed,figure,figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,time,mark,audio,video{padding:0;margin:0;-webkit-tap-highlight-color:rgba(0,0,0,0);-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\nol,ul{list-style:none}\na{text-decoration:none}\na,button,input{outline:0;}\naudio,canvas,img,video{vertical-align:middle}\n.clearfix:before,.clearfix:after{content:\" \";display:table}\n.clearfix:after{clear:both}", ""]);

	// exports


/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAMAAAAPdrEwAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAMAUExURQAAAP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP9UVP////9KSv9TU/9LS/9RUf9OTv9MTP9QUP9SUv9JSf9NTf9PT//o6P9ZWf9ISP/6+v/z8//5+f9hYf/i4v/8/P/4+P9VVf/+/v+Pj/9xcf/9/f/m5v/19f/S0v/U1P+Fhf9gYP9cXP+/v/+ysv/e3v/y8v+zs/+Jif+trf/Hx/+7u/9eXv+amv9aWv91df/X1/9tbf9ra//V1f/W1v/7+/+Li//t7f9dXf9ycv/Cwv/29v9iYv+IiP/Fxf9WVv+bm/9ubv/R0f9/f/9XV/+jo/+dnf9kZP9GRv9fX//u7v9YWP+iov/b2/9bW/+MjP+qqv+Hh//w8P/09P+Dg/+EhP94eP/n5/+cnP+pqf+UlP/x8f+Ghv9jY//Ozv/39//v7/+YmP/Y2P/AwP+hof/ExP/Dw/+kpP+wsP+xsf/j4/+5uf/c3P+fn//h4f/Q0P9oaP+oqP/d3f+Zmf/Ly//s7P9vb/9sbP+goP/IyP+env+4uP+AgP96ev+Tk/+srP+mpv9mZv9HR/9paf/k5P/MzP93d/97e/+Xl/+0tP+Rkf90dP9DQ/+QkP+Bgf/q6v/r6/+lpf+Kiv/l5f+rq//Pz/+Skv+Ojv/Bwf+8vP/Gxv9lZf+2tv9wcP9qav/g4P+Njf/Kyv+vr/+Cgv+6uv9BQf98fFq0HtQAAABZdFJOUwAClujd087tTm2t4KQRQeTfLyWz6fQjPureDeXE0QQKKQz5Zveq+2LPNSwocUTNyh6Mw+a2GbBM7iGKEPaay7mgUsjBu1BoZewzphU4C9jSeniiBW/+qQET5CSfYgAABelJREFUWMPdmWVgFFcQgBeCS9HiXrRI3d3dde/J6nEXD0kgDkkgTgJJmhBIcEtwd3crUpyiBeruXi7Zt7dyu0ea7P5o5+fO22/nzZuZN28fRaml5+BBzYZ0blgDCXilyWuNXqDM5Oa6TelaScDbLxqDm/Wiay+P3OBLbvwgbY3c31MLfuBu2jK5pZ2afNfttIXSsZVCbt6FtlRatvai29AWS/1O8grSlstDErlHL+vRdKMq9PM2kOkhb3jIA/vaga4yu64tZLoLRb3U2R5074HUYNomuYkaZBf6daqZXegGVAO70B2pFnah21IN7UI3/F+iIeSh9WjoRIB10pMhwwIWW4jGAOeUJ02IHRk65+sN+8pCWBZag8bC3IljAx2KrNi0kkPQAjRKmDLUoZfcYqeztmgeLBruMJL3fwS1Q3Nc6jCHsYyf54a1QHMlmxymEpYuwhqjOXq1w58cddcUzePNKk7g7tU7khLHqpc0ejlSIp/3CKwuWjitUIZXZEcwCCBu1vHENcrnrjDS9BDgSlyuEg4gXB20eCFPRixIdwlOXjKOBWfHeNl/VYYJA1ZFJueGLlmyO3fbt/GAuS6ap3fKgDk/u9XGMCBSNvy8SHNswU/zlekdTI4ysFyLRpHy6Kx8pKso7uMLJFUiYhP+CNMubuCpDNYvGnJzyNDQBN8puuMk3cWrF875Rs6vmcAfWiwjuRJ+Ahk4j12+1uFYu+7qyveMonLEQuQHDTaQYanGwYuKiotX/V2cZxzxeYuAKZrPIAE84oxJHeIQC3KCzLJp/hnGDM1EEX/8gExTjKfHKqyhpWPGxKjyKUaTP2o0GkeGRJqjwVIvKDbOxSDkzIhTPrYcmKBBKvHHNM7XE6jKR7xLNjJsCw8qjYQ8gPui5cCieWM0O0Ea8OUsXh8b01LKsyt3MPSbbOCl6d5B/PQDDoP5anxdKulHRuhKjnjSE3XhyzgIuVjCSAKqMVD4SN4sRBN0jKTfT2vRzgIp9y6zuIiEx8wEjc+c8STtR4VgY4eMlvTbJ2sdIlRIz1eL7J/Eum2Cdl7CDqLIZIyXMYl8Ol5ba8Ax6fl6TrhECCm6GGIXEsU4ZBx83xB9HGsYcIWs7NOwKF2JwSGkds0Gxr7OJOjvtRmL06o2+DVXUP54aUDQDF0NxQlEUyEYonHaTLJIado3mezfVwSt/4f15lT4Xl3k4xmjJM0UY7R3HR1TP9S8GMFw8UVQhEyuHL+f6KqzeILUiI+RCbpcbsN+EXUbAcaQFtZ5M3qZLkLcW4lisWiyFUSc8xYazrd8FCh1evhkjcuwnP/qGqHdwMBU+d1CrN9mwNklqgI6W+Oy6Z+Tx6WM2d6I53pL5Oh4dSp7WtfFmgYzME5p0aB7XjB5nI5MmwW0SCnGCxnEy3umMOt0oLbuh6cApgoORXBZJn/qwqZoiJR+w7HnC5coAI9wq2YbtK7fTWI8WoE5VOh9tBH46Z64jCzV20PPL1t64GhylnrPGqEYHvvVxImnYoO9D0LVRvu2k8yMUL/t5NbF0WaqwEzWfxMshqz3Q07G7nQz3UlwvdZdnPuBqV1HPCsrTDXUDVsH4HUPHBxzxLCJcWy/KFTuhmicgTpono5sfEziQXZisM/Ln01xEV+iST7zmnAYVPNwx6CoYwfVr0bv3JIPvOsviikxqtUM27OSZap/JGVAWlnq6JFBwXnh47MSdxVEAKyJfxy1cbNHGzxqf+GuSZzRedXPQRp7zs90SM6hvfmeAwCj7x8g49EWHc4JgYik5b88/kPsdHIY+tHiap9l/iv/Q+61Dx1gF7oDVd8udFOqiV3ortSrdqGbUI3sQr9JvfusPeS+z1FUH3vQ9etQ1AB70P0oinrnSTvI9bpX3nC0t+efe5XcZj35zm4Survlv8fvuFW+A2tXz1ryje2Vq7tWLS0l36O+cGzd1TpyC90dbHPLLpXa3OdzufvY41aAX366jsGVdLennuhdO+5b/ft1MrtJ7/HMow/Xa1uTK/oOTfv3aTxAY/E1gGLLLILvqeYAAAAASUVORK5CYII="

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*
		MIT License http://www.opensource.org/licenses/mit-license.php
		Author Tobias Koppers @sokra
	*/
	var stylesInDom = {},
		memoize = function(fn) {
			var memo;
			return function () {
				if (typeof memo === "undefined") memo = fn.apply(this, arguments);
				return memo;
			};
		},
		isOldIE = memoize(function() {
			return /msie [6-9]\b/.test(window.navigator.userAgent.toLowerCase());
		}),
		getHeadElement = memoize(function () {
			return document.head || document.getElementsByTagName("head")[0];
		}),
		singletonElement = null,
		singletonCounter = 0,
		styleElementsInsertedAtTop = [];

	module.exports = function(list, options) {
		if(false) {
			if(typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
		}

		options = options || {};
		// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
		// tags it will allow on a page
		if (typeof options.singleton === "undefined") options.singleton = isOldIE();

		// By default, add <style> tags to the bottom of <head>.
		if (typeof options.insertAt === "undefined") options.insertAt = "bottom";

		var styles = listToStyles(list);
		addStylesToDom(styles, options);

		return function update(newList) {
			var mayRemove = [];
			for(var i = 0; i < styles.length; i++) {
				var item = styles[i];
				var domStyle = stylesInDom[item.id];
				domStyle.refs--;
				mayRemove.push(domStyle);
			}
			if(newList) {
				var newStyles = listToStyles(newList);
				addStylesToDom(newStyles, options);
			}
			for(var i = 0; i < mayRemove.length; i++) {
				var domStyle = mayRemove[i];
				if(domStyle.refs === 0) {
					for(var j = 0; j < domStyle.parts.length; j++)
						domStyle.parts[j]();
					delete stylesInDom[domStyle.id];
				}
			}
		};
	}

	function addStylesToDom(styles, options) {
		for(var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];
			if(domStyle) {
				domStyle.refs++;
				for(var j = 0; j < domStyle.parts.length; j++) {
					domStyle.parts[j](item.parts[j]);
				}
				for(; j < item.parts.length; j++) {
					domStyle.parts.push(addStyle(item.parts[j], options));
				}
			} else {
				var parts = [];
				for(var j = 0; j < item.parts.length; j++) {
					parts.push(addStyle(item.parts[j], options));
				}
				stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
			}
		}
	}

	function listToStyles(list) {
		var styles = [];
		var newStyles = {};
		for(var i = 0; i < list.length; i++) {
			var item = list[i];
			var id = item[0];
			var css = item[1];
			var media = item[2];
			var sourceMap = item[3];
			var part = {css: css, media: media, sourceMap: sourceMap};
			if(!newStyles[id])
				styles.push(newStyles[id] = {id: id, parts: [part]});
			else
				newStyles[id].parts.push(part);
		}
		return styles;
	}

	function insertStyleElement(options, styleElement) {
		var head = getHeadElement();
		var lastStyleElementInsertedAtTop = styleElementsInsertedAtTop[styleElementsInsertedAtTop.length - 1];
		if (options.insertAt === "top") {
			if(!lastStyleElementInsertedAtTop) {
				head.insertBefore(styleElement, head.firstChild);
			} else if(lastStyleElementInsertedAtTop.nextSibling) {
				head.insertBefore(styleElement, lastStyleElementInsertedAtTop.nextSibling);
			} else {
				head.appendChild(styleElement);
			}
			styleElementsInsertedAtTop.push(styleElement);
		} else if (options.insertAt === "bottom") {
			head.appendChild(styleElement);
		} else {
			throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");
		}
	}

	function removeStyleElement(styleElement) {
		styleElement.parentNode.removeChild(styleElement);
		var idx = styleElementsInsertedAtTop.indexOf(styleElement);
		if(idx >= 0) {
			styleElementsInsertedAtTop.splice(idx, 1);
		}
	}

	function createStyleElement(options) {
		var styleElement = document.createElement("style");
		styleElement.type = "text/css";
		insertStyleElement(options, styleElement);
		return styleElement;
	}

	function createLinkElement(options) {
		var linkElement = document.createElement("link");
		linkElement.rel = "stylesheet";
		insertStyleElement(options, linkElement);
		return linkElement;
	}

	function addStyle(obj, options) {
		var styleElement, update, remove;

		if (options.singleton) {
			var styleIndex = singletonCounter++;
			styleElement = singletonElement || (singletonElement = createStyleElement(options));
			update = applyToSingletonTag.bind(null, styleElement, styleIndex, false);
			remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true);
		} else if(obj.sourceMap &&
			typeof URL === "function" &&
			typeof URL.createObjectURL === "function" &&
			typeof URL.revokeObjectURL === "function" &&
			typeof Blob === "function" &&
			typeof btoa === "function") {
			styleElement = createLinkElement(options);
			update = updateLink.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
				if(styleElement.href)
					URL.revokeObjectURL(styleElement.href);
			};
		} else {
			styleElement = createStyleElement(options);
			update = applyToTag.bind(null, styleElement);
			remove = function() {
				removeStyleElement(styleElement);
			};
		}

		update(obj);

		return function updateStyle(newObj) {
			if(newObj) {
				if(newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap)
					return;
				update(obj = newObj);
			} else {
				remove();
			}
		};
	}

	var replaceText = (function () {
		var textStore = [];

		return function (index, replacement) {
			textStore[index] = replacement;
			return textStore.filter(Boolean).join('\n');
		};
	})();

	function applyToSingletonTag(styleElement, index, remove, obj) {
		var css = remove ? "" : obj.css;

		if (styleElement.styleSheet) {
			styleElement.styleSheet.cssText = replaceText(index, css);
		} else {
			var cssNode = document.createTextNode(css);
			var childNodes = styleElement.childNodes;
			if (childNodes[index]) styleElement.removeChild(childNodes[index]);
			if (childNodes.length) {
				styleElement.insertBefore(cssNode, childNodes[index]);
			} else {
				styleElement.appendChild(cssNode);
			}
		}
	}

	function applyToTag(styleElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(media) {
			styleElement.setAttribute("media", media)
		}

		if(styleElement.styleSheet) {
			styleElement.styleSheet.cssText = css;
		} else {
			while(styleElement.firstChild) {
				styleElement.removeChild(styleElement.firstChild);
			}
			styleElement.appendChild(document.createTextNode(css));
		}
	}

	function updateLink(linkElement, obj) {
		var css = obj.css;
		var media = obj.media;
		var sourceMap = obj.sourceMap;

		if(sourceMap) {
			// http://stackoverflow.com/a/26603875
			css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
		}

		var blob = new Blob([css], { type: "text/css" });

		var oldSrc = linkElement.href;

		linkElement.href = URL.createObjectURL(blob);

		if(oldSrc)
			URL.revokeObjectURL(oldSrc);
	}


/***/ }
/******/ ]);