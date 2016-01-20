webpackJsonp([0],{

/***/ 0:
/***/ function(module, exports, __webpack_require__) {

	eval("var $ = __webpack_require__(2);\r\nvar sub = __webpack_require__(3);\r\nvar mainStyle = __webpack_require__(4);\r\nvar jqPlugin = __webpack_require__(9);\r\nvar moment = __webpack_require__(10);\r\n\r\nvar app = document.createElement('div');\r\napp.innerHTML = '<h1>Hello World</h1>';\r\napp.appendChild(sub());\r\ndocument.body.appendChild(app);\r\n\r\n$('body').append('<p>Look at me! now is ' + moment().format() + '</p>');\r\n$('p').greenify();\r\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvaW5kZXguanM/NTUwMCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EiLCJmaWxlIjoiMC5qcyIsInNvdXJjZXNDb250ZW50IjpbInZhciAkID0gcmVxdWlyZSgnanF1ZXJ5Jyk7XHJcbnZhciBzdWIgPSByZXF1aXJlKCcuL3N1YicpO1xyXG52YXIgbWFpblN0eWxlID0gcmVxdWlyZSgnLi9tYWluLmxlc3MnKTtcclxudmFyIGpxUGx1Z2luID0gcmVxdWlyZSgnLi9qcS1wbHVnaW4nKTtcclxudmFyIG1vbWVudCA9IHJlcXVpcmUoJ21vbWVudCcpO1xyXG5cclxudmFyIGFwcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG5hcHAuaW5uZXJIVE1MID0gJzxoMT5IZWxsbyBXb3JsZDwvaDE+JztcclxuYXBwLmFwcGVuZENoaWxkKHN1YigpKTtcclxuZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChhcHApO1xyXG5cclxuJCgnYm9keScpLmFwcGVuZCgnPHA+TG9vayBhdCBtZSEgbm93IGlzICcgKyBtb21lbnQoKS5mb3JtYXQoKSArICc8L3A+Jyk7XHJcbiQoJ3AnKS5ncmVlbmlmeSgpO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2luZGV4LmpzXG4gKiogbW9kdWxlIGlkID0gMFxuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 3:
/***/ function(module, exports) {

	eval("function generateText() {\r\n    var element = document.createElement('h2');\r\n    element.innerHTML = \"Hello World h2\";\r\n    return element;\r\n}\r\n\r\nmodule.exports = generateText;\r\n//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvc3ViLmpzPzhiYzEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSIsImZpbGUiOiIzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZnVuY3Rpb24gZ2VuZXJhdGVUZXh0KCkge1xyXG4gICAgdmFyIGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMicpO1xyXG4gICAgZWxlbWVudC5pbm5lckhUTUwgPSBcIkhlbGxvIFdvcmxkIGgyXCI7XHJcbiAgICByZXR1cm4gZWxlbWVudDtcclxufVxyXG5cclxubW9kdWxlLmV4cG9ydHMgPSBnZW5lcmF0ZVRleHQ7XHJcblxuXG5cbi8qKioqKioqKioqKioqKioqKlxuICoqIFdFQlBBQ0sgRk9PVEVSXG4gKiogLi9hcHAvc3ViLmpzXG4gKiogbW9kdWxlIGlkID0gM1xuICoqIG1vZHVsZSBjaHVua3MgPSAwXG4gKiovIl0sInNvdXJjZVJvb3QiOiIifQ==");

/***/ },

/***/ 9:
/***/ function(module, exports, __webpack_require__) {

	eval("/* WEBPACK VAR INJECTION */(function(jQuery) {(function($) {\r\n    var shade = '#556b2f';\r\n    $.fn.greenify = function() {\r\n        this.css('color', shade);\r\n        return this;\r\n    };\r\n})(jQuery);\r\n\n/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(2)))//@ sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvanEtcGx1Z2luLmpzPzZlMmEiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCQpIHtcclxuICAgIHZhciBzaGFkZSA9ICcjNTU2YjJmJztcclxuICAgICQuZm4uZ3JlZW5pZnkgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB0aGlzLmNzcygnY29sb3InLCBzaGFkZSk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9O1xyXG59KShqUXVlcnkpO1xyXG5cblxuXG4vKioqKioqKioqKioqKioqKipcbiAqKiBXRUJQQUNLIEZPT1RFUlxuICoqIC4vYXBwL2pxLXBsdWdpbi5qc1xuICoqIG1vZHVsZSBpZCA9IDlcbiAqKiBtb2R1bGUgY2h1bmtzID0gMFxuICoqLyJdLCJzb3VyY2VSb290IjoiIn0=");

/***/ }

});