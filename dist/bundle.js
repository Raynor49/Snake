/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./js/coord.js":
/*!*********************!*\
  !*** ./js/coord.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Coord; });\nclass Coord{\n  constructor(x=0, y=0){\n    this.x = x\n    this.y = y\n  }\n\n  plus(coord2){\n    this.x += coord2.x\n    this.y += coord2.y\n  }\n\n}\n\n\n//# sourceURL=webpack:///./js/coord.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ \"./js/snake.js\");\n\n$(() => {\n  let canvas = document.getElementById(\"canvas\")\n  let ctx = canvas.getContext(\"2d\")\n  let snake = new _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n  snake.draw(ctx)\n})\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   let canvas = document.getElementById(\"canvas\")\n//   let ctx = canvas.getContext(\"2d\")\n// })\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/snake.js":
/*!*********************!*\
  !*** ./js/snake.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\n/* harmony import */ var _coord_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./coord.js */ \"./js/coord.js\");\n\nclass Snake{\n  constructor() {\n    this.direction = \"N\"\n    this.segmentPositions = [new _coord_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](100,100)]\n  }\n\n  draw(ctx){\n    \n    // for (var i = 0; i < this.segmentPositions.length; i++) {\n    //   ctx.beginPath();\n    //   ctx.arc(\n    //     this.segmentPositions[i][0], this.segmentPositions[i][1], 100, 0, 2*Math.PI, false\n    //   );\n    //   ctx.fillStyle = \"red\"\n    //   ctx.fill()\n    //   ctx.closePath();\n    // }\n  }\n\n  head(){\n    return this.segmentPositions.last\n  }\n\n  grow(){\n    this.segmentPositions.unshift()\n  }\n\n  move() {\n    this.segmentPositions.push(this.head().plus(DIRECTIONS[this.direction]))\n    this.segmentPositions.shift()\n  }\n\n\n\n\n}\n\nSnake.DIRECTIONS = {\n  \"N\" : new _coord_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,1),\n  \"S\" : new _coord_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](0,-1),\n  \"E\" : new _coord_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](1,0),\n  \"W\" : new _coord_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](-1,0)\n}\n\n\n//# sourceURL=webpack:///./js/snake.js?");

/***/ })

/******/ });