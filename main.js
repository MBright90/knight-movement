/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_chessMaster_chessMaster__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/chessMaster/chessMaster */ \"./src/modules/chessMaster/chessMaster.js\");\n\n\nconst master = new _modules_chessMaster_chessMaster__WEBPACK_IMPORTED_MODULE_0__[\"default\"]()\nmaster.resetKnightMoveMatrix()\n\n\n//# sourceURL=webpack://knight-movement/./src/index.js?");

/***/ }),

/***/ "./src/modules/chessMaster/chessMaster.js":
/*!************************************************!*\
  !*** ./src/modules/chessMaster/chessMaster.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChessMaster)\n/* harmony export */ });\nclass ChessMaster {\n  constructor() {\n    this.startingPos = null\n    this.endingPos = null\n    this.boardSize = 64\n    this.knightMoveMatrix = {}\n    this.xKnightMoves = [-2, -2, -1, -1, 1, 1, 2, 2]\n    this.yKnightMoves = [-1, 1, -2, 2, -2, 2, -1, 1]\n  }\n\n  // Takes the position of the specified cell and returns an array of all the possible knight moves\n  findAllMoves(x, y) {\n    const upperBound = Math.sqrt(this.boardSize)\n    const knightsArray = []\n    for (let i = 0; i < this.xKnightMoves.length; i += 1) {\n      const xPos = x + this.xKnightMoves[i]\n      const yPos = y + this.yKnightMoves[i]\n      // Check the new x and new y positions are within bounds of chessBoard\n      if (xPos < upperBound && xPos >= 0 && yPos < upperBound && yPos >= 0) {\n        knightsArray.push([xPos, yPos])\n      }\n    }\n    return knightsArray\n  }\n\n  // Takes this.boardSize and creates an object, with cell coordinates as keys and an array of\n  // possible knight moves as values\n  resetKnightMoveMatrix() {\n    this.knightMoveMatrix = {}\n    const boardLength = Math.sqrt(this.boardSize)\n    for (let i = 0; i < boardLength; i += 1) {\n      for (let j = 0; j < boardLength; j += 1) {\n        this.knightMoveMatrix[`${i}${j}`] = this.findAllMoves(i, j)\n      }\n    }\n  }\n}\n// Create an adjacency board with createKnightMoveMatrix using findAllMoves as an object?\n\n\n//# sourceURL=webpack://knight-movement/./src/modules/chessMaster/chessMaster.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;