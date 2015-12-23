/*! This file is created by cody 2015.12.20 */
webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function($) {var module = __webpack_require__(2);
	var rem = __webpack_require__(3);
	var attachFastClick = __webpack_require__(4);

	__webpack_require__(5);

	attachFastClick.attach(document.body);

	var app = document.createElement('h1');
	app.innerHTML = 'Hello World!';


	var container = document.createElement('div');
	container.classList.add('container');

	container.appendChild(app);
	container.appendChild(module());

	document.body.appendChild(container);


	console.log($(window));

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(1)))

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports) {

	function generateText() {
	    var element = document.createElement('h2');
	    element.innerHTML = 'Hello h2 world!!';
	    return element;
	}

	module.exports = generateText;


/***/ },
/* 3 */
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
	    }, false);
	})();


/***/ }
]);