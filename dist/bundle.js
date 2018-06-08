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

/***/ "./js/game.js":
/*!********************!*\
  !*** ./js/game.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\n/* harmony import */ var _snake_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./snake.js */ \"./js/snake.js\");\n\nclass Game{\n  constructor(ctx){\n    this.ctx = ctx\n    this.snake = new _snake_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n    this.draw = this.draw.bind(this)\n  }\n\n  play(){\n    setInterval(this.draw, 8)\n    setInterval(this.snake.move, 8)\n    setInterval(this.snake.grow, 50)\n\n  }\n\n  draw(){\n    this.snake.draw(this.ctx)\n  }\n\n\n}\n\n\n//# sourceURL=webpack:///./js/game.js?");

/***/ }),

/***/ "./js/main.js":
/*!********************!*\
  !*** ./js/main.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _game_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game.js */ \"./js/game.js\");\n\n$(() => {\n  let canvas = document.getElementById(\"canvas\")\n  let ctx = canvas.getContext(\"2d\")\n  let game = new _game_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](ctx)\n  game.play()\n})\n\n// document.addEventListener(\"DOMContentLoaded\", () => {\n//   let canvas = document.getElementById(\"canvas\")\n//   let ctx = canvas.getContext(\"2d\")\n// })\n\n\n//# sourceURL=webpack:///./js/main.js?");

/***/ }),

/***/ "./js/segment.js":
/*!***********************!*\
  !*** ./js/segment.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Segment; });\nclass Segment{\n  constructor(x,y,dir){\n    this.pos = [x,y]\n    this.direction = dir\n  }\n\n  // move(){\n  //   if (this.direction = \"N\"){\n  //     this.pos[1] -= 7\n  //   }else if(this.direction = \"S\"){\n  //     this.pos[1] += 7\n  //   }else if (this.direction = \"E\"){\n  //     this.pos[0] += 7\n  //   }else if (this.direction = \"W\"){\n  //     this.pos[0] -= 7\n  //   }\n  //\n  // }\n\n  x(){\n    return this.pos[0]\n  }\n\n  y(){\n    return this.pos[1]\n  }\n}\n\n\n//# sourceURL=webpack:///./js/segment.js?");

/***/ }),

/***/ "./js/snake.js":
/*!*********************!*\
  !*** ./js/snake.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Snake; });\n/* harmony import */ var _segment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./segment.js */ \"./js/segment.js\");\n\n\nclass Snake{\n  constructor() {\n    this.segments = [new _segment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](10,10,\"E\")]\n    this.move = this.move.bind(this)\n    this.grow = this.grow.bind(this)\n  }\n\n  draw(ctx){\n    ctx.clearRect(0, 0, $(\"#canvas\").width(), $(\"#canvas\").height());\n    for (var i = 0; i < this.segments.length; i++) {\n      ctx.beginPath();\n      ctx.arc(\n        this.segments[i].x(), this.segments[i].y(), 15, 0, 2*Math.PI, false\n      );\n      ctx.fillStyle = \"red\"\n      ctx.fill()\n      ctx.closePath();\n    }\n  }\n\n  head(){\n    return this.segments[0]\n  }\n\n  tail(){\n    return this.segments[this.segments.length-1]\n  }\n\n  grow(){\n    if (this.tail().direction == \"N\"){\n      this.segments.push(new _segment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.tail().x(), this.tail().y() + 1, this.tail().direction))\n    }else if(this.tail().direction == \"S\"){\n      this.segments.push(new _segment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.tail().x(), this.tail().y() - 1, this.tail().direction))\n    }else if(this.tail().direction == \"E\"){\n      this.segments.push(new _segment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.tail().x() - 1, this.tail().y(), this.tail().direction))\n    }else if(this.tail().direction == \"W\"){\n      this.segments.push(new _segment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.tail().x() + 1, this.tail().y(), this.tail().direction))\n    }\n  }\n\n  move() {\n    if (this.head().direction == \"N\"){\n      this.segments.unshift(new _segment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.head().x(), this.head().y() - 1, this.head().direction))\n    }else if(this.head().direction == \"S\"){\n      this.segments.unshift(new _segment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.head().x(), this.head().y() + 1, this.head().direction))\n    }else if(this.head().direction == \"E\"){\n      this.segments.unshift(new _segment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.head().x() + 1, this.head().y(), this.head().direction))\n    }else if(this.head().direction == \"W\"){\n      this.segments.unshift(new _segment_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"](this.head().x() - 1, this.head().y(), this.head().direction))\n    }\n    this.segments.pop()\n  }\n\n\n\n\n}\n\n\n//# sourceURL=webpack:///./js/snake.js?");

/***/ })

/******/ });