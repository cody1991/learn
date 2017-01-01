/*! This file is created by cody 2015.12.20 */
webpackJsonp([0],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var attachFastClick = __webpack_require__(1);
	var rem = __webpack_require__(2);
	var module = __webpack_require__(3);
	__webpack_require__(4);


	attachFastClick.attach(document.body);
	console.log($(window));
	$('.container').append(module());



/***/ },
/* 1 */,
/* 2 */,
/* 3 */
/***/ function(module, exports) {

	function generateText() {
	   return '<h1>Using Webpack Module</h1>';
	}

	module.exports = generateText;


/***/ }
]);