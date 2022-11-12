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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/molengo-regular-webfont.woff2 */ \"./src/assets/fonts/molengo-regular-webfont.woff2\"), __webpack_require__.b);\nvar ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! ../assets/fonts/molengo-regular-webfont.woff */ \"./src/assets/fonts/molengo-regular-webfont.woff\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"html, *, a {\\n    box-sizing: border-box;\\n    color: inherit;\\n    margin: 0;\\n    padding: 0;\\n    text-decoration: none;\\n    user-select: none;\\n}\\n\\n@font-face {\\n    font-family: 'molengo';\\n    src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format('woff2'),\\n         url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format('woff');\\n    font-style: normal;\\n    font-weight: 'normal';\\n}\\n\\nbody {\\n    font-family: 'molengo', sans-serif;\\n    height: 100vh;\\n}\\n\\n.display-wrapper {\\n    align-items: center;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 10px;\\n    height: 100%;\\n    justify-content: center;\\n    padding: 4%;\\n}\\n\\n/* #############\\n   Header styles\\n   ############# */ \\n\\nheader {\\n    display: grid;\\n    grid-template-columns: repeat(3, 1fr);\\n    width: min(80vw, 80vh);\\n}\\n\\n.board-size-div {\\n    align-items: flex-start;\\n    display: flex;\\n    flex-direction: column;\\n    gap: 5px;\\n    justify-content: center;\\n}\\n\\n.board-size-div select {\\n    background-color: inherit;\\n    border: none;\\n    font-size: 16px;\\n    padding: 3px;\\n}\\n\\nheader > h1 {\\n    text-align: center;\\n    width: 100%;\\n}\\n\\n.reset-button-container {\\n    align-items: center;\\n    display: flex;\\n    justify-content: flex-end;\\n}\\n\\n.reset-button-container > button {\\n    background-color: inherit;\\n    border: 3px solid #000;\\n    border-radius: 10px;\\n    font-size: 24px;\\n    padding: 5px 10px;\\n    position: relative;\\n    text-align: right;\\n}\\n\\n.reset-button-container > button:disabled:after {\\n    background-color: rgba(255, 255, 255, 0.35);\\n    border-radius: 5px;\\n    bottom: -3px;\\n    content: '';\\n    left: -3px;\\n    position: absolute;\\n    right: -3px;\\n    top: -3px;\\n}\\n\\n/* #################\\n   Chessboard styles\\n   ################# */ \\n\\n.chessboard {\\n    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;\\n    height: 0;\\n    padding-top: 100%;\\n    position: relative;\\n    width: min(80vw, 80vh);\\n}\\n\\n.chessboard > .grid-container {\\n    display: grid;\\n    grid-template-columns: repeat(8, 1fr);\\n    grid-template-rows: repeat(8, 1fr);\\n    height: 100%;\\n    position: absolute;\\n    top: 0;\\n    width: 100%;\\n}\\n\\n.chessboard > .grid-container > .chess-cell {\\n    background-color: #fff;\\n    background-origin: content-box;\\n    background-position:center;\\n    background-size: contain;\\n    background-repeat: no-repeat;\\n    padding: 10%;\\n    position: relative;\\n}\\n\\n.chessboard > .grid-container > .target:after {\\n    bottom: 0;\\n    color: rgba(219, 44, 44);\\n    content: 'X';\\n    display: grid;\\n    font-size: min(8vh, 8vw);\\n    left: 0;\\n    place-items: center;\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n}\\n\\n/* ##############\\n   Loading styles\\n   ############## */ \\n\\n@keyframes loading-animation {\\n    0% {\\n        transform: rotate(0deg)\\n    }\\n\\n    100% {\\n        transform: rotate(-360deg)\\n    }\\n}\\n\\n.chessboard > .loading-background {\\n    background-color: rgba(150, 150, 150, 0.5);\\n    bottom: 0;\\n    display: grid;\\n    left: 0;\\n    place-items: center;\\n    position: absolute;\\n    right: 0;\\n    top: 0\\n}\\n\\n.loading-background > h1 {\\n    color: #fff;\\n    font-size: 102px;\\n\\n    animation: loading-animation .9s ease-in-out infinite;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://knight-movement/./src/styles/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://knight-movement/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n\n  if (!url) {\n    return url;\n  }\n\n  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://knight-movement/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://knight-movement/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://knight-movement/./src/styles/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://knight-movement/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://knight-movement/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://knight-movement/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://knight-movement/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://knight-movement/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://knight-movement/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/utilities/indexDom */ \"./src/modules/utilities/indexDom.js\");\n/* harmony import */ var _modules_chessMaster_chessMaster__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/chessMaster/chessMaster */ \"./src/modules/chessMaster/chessMaster.js\");\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./styles/style.css */ \"./src/styles/style.css\");\n\n\n\n\nconst master = new _modules_chessMaster_chessMaster__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\nconsole.log(master)\n_modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].createNewBoard(64)\n\nconst allCells = document.querySelectorAll('.chess-cell')\nconst resetButton = document.querySelector('.reset-button-container > button')\n\nfunction completeKnightMovement() {\n  // Remove the event listener that place the target in a chosen cell\n  // and progress the data flow of the program\n  allCells.forEach((cell) => {\n    cell.removeEventListener('click', () => {\n      allCells.forEach((chessCell) => {\n        chessCell.removeEventListener('mouseover', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTargetClass)\n        chessCell.removeEventListener('mouseout', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTargetClass)\n      })\n      _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeText('Thinking...')\n      completeKnightMovement()\n    })\n  })\n  _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].showLoading()\n}\n\nfunction setTargetImageListeners() {\n  // Remove the event listeners that place the knight in a chosen cell\n  // and progress the data flow of the program\n  allCells.forEach((cell) => {\n    cell.removeEventListener('click', () => {\n      allCells.forEach((chessCell) => {\n        chessCell.removeEventListener('mouseover', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addBackgroundKnight)\n        chessCell.removeEventListener('mouseout', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeBackgroundKnight)\n      })\n      setTargetImageListeners()\n      _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeText('Place Your Target')\n      _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setResetActive()\n    })\n  })\n\n  // Event listeners to show possible target locations when mouse is hovered over them\n  allCells.forEach((cell) => {\n    if (!cell.getElementsByClassName.backgroundImage) cell.addEventListener('mouseover', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTargetClass)\n  })\n  allCells.forEach((cell) => {\n    cell.addEventListener('mouseout', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTargetClass)\n  })\n\n  // Event listener to add the target mark to the chosen cell and to\n  // move the data flow of the program to the movement phase\n  allCells.forEach((cell) => {\n    cell.addEventListener('click', () => {\n      allCells.forEach((chessCell) => {\n        chessCell.removeEventListener('mouseover', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTargetClass)\n        chessCell.removeEventListener('mouseout', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTargetClass)\n      })\n      _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeText('Thinking...')\n      completeKnightMovement()\n    })\n  })\n}\n\nfunction setKnightImageListeners() {\n  // Setting event listeners to show possible knight locations when mouse is hovered over\n  allCells.forEach((cell) => {\n    cell.addEventListener('mouseover', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addBackgroundKnight)\n  })\n  allCells.forEach((cell) => {\n    cell.addEventListener('mouseout', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeBackgroundKnight)\n  })\n\n  allCells.forEach((cell) => {\n  // Event listener to add the knight mark to the chosen cell and to\n  // move the data flow of the program to the target selection phase\n    cell.addEventListener('click', () => {\n      allCells.forEach((chessCell) => {\n        chessCell.removeEventListener('mouseover', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addBackgroundKnight)\n        chessCell.removeEventListener('mouseout', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeBackgroundKnight)\n      })\n      setTargetImageListeners()\n      _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeText('Place Your Target')\n      _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].setResetActive()\n    })\n  })\n}\n\nfunction resetAll() {\n  // A flow of functions and event listener removal to completely reset the current chessboard\n  // to blank. This does not reset the size of the chess board.\n  allCells.forEach((cell) => {\n    cell.removeEventListener('mouseover', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTargetClass)\n    cell.removeEventListener('mouseout', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTargetClass)\n    cell.removeEventListener('click', () => {\n      allCells.forEach((chessCell) => {\n        chessCell.removeEventListener('mouseover', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].addTargetClass)\n        chessCell.removeEventListener('mouseout', _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeTargetClass)\n      })\n      _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeText('Thinking...')\n      completeKnightMovement()\n    })\n  })\n\n  setKnightImageListeners()\n  document.querySelectorAll('.active').forEach((cell) => _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetCell(cell))\n  const targetCell = document.querySelector('.target')\n  if (targetCell) _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].resetCell(targetCell)\n  _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].changeText('Place your Knight')\n  _modules_utilities_indexDom__WEBPACK_IMPORTED_MODULE_0__[\"default\"].removeLoading()\n}\n\nresetButton.addEventListener('click', resetAll)\n\nsetKnightImageListeners()\nconsole.log(master.knightMoveRecursive('22', '10'))\n\n\n//# sourceURL=webpack://knight-movement/./src/index.js?");

/***/ }),

/***/ "./src/modules/chessMaster/chessMaster.js":
/*!************************************************!*\
  !*** ./src/modules/chessMaster/chessMaster.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ ChessMaster)\n/* harmony export */ });\nclass ChessMaster {\n  constructor() {\n    // this.startingPos = null\n    // this.endingPos = null\n    this.boardSize = 64\n    this.xKnightMoves = [-2, -2, -1, -1, 1, 1, 2, 2]\n    this.yKnightMoves = [-1, 1, -2, 2, -2, 2, -1, 1]\n\n    this.knightMoveGraph = this.#createKnightMoveGraph()\n  }\n\n  // Takes the position of the specified cell and returns an array of all the possible knight moves\n  #findAllMoves(x, y) {\n    const upperBound = Math.sqrt(this.boardSize)\n    const knightsArray = []\n    for (let i = 0; i < this.xKnightMoves.length; i += 1) {\n      const xPos = x + this.xKnightMoves[i]\n      const yPos = y + this.yKnightMoves[i]\n      // Check the new x and new y positions are within bounds of the current chessBoard\n      if (xPos < upperBound && xPos >= 0 && yPos < upperBound && yPos >= 0) {\n        knightsArray.push(`${xPos}${yPos}`)\n      }\n    }\n    return knightsArray\n  }\n\n  // Takes this.boardSize and creates an object, with cell coordinates as keys and an array of\n  // possible knight moves as values; stored as this.knightMoveMatrix\n  #createKnightMoveGraph() {\n    const moveObject = {}\n    const boardLength = Math.sqrt(this.boardSize)\n    for (let i = 0; i < boardLength; i += 1) {\n      for (let j = 0; j < boardLength; j += 1) {\n        moveObject[`${i}${j}`] = this.#findAllMoves(i, j)\n      }\n    }\n    return moveObject\n  }\n\n  knightMoveRecursive(currentSpace, targetSpace, parentSpace = null, takenMoves = {}, queue = []) {\n    // base cases\n    // if currentSpace is the target, return current space\n    if (currentSpace === targetSpace) return [currentSpace, parentSpace]\n\n    // Check if currentSpace has been checked. If not, add it to the checked spaces list\n    if (takenMoves.includes(currentSpace)) return -1\n    takenMoves.push(currentSpace)\n\n    // Retrieve the current moves for this space\n    const currentMoveSet = this.knightMoveGraph[currentSpace]\n    currentMoveSet.forEach((move) => { queue[queue.length] = move })\n  }\n\n  // Setter functions\n  setBoardSize(newSize) {\n    this.boardSize = newSize\n    this.knightMoveGraph = this.#createKnightMoveGraph\n  }\n\n  // Getter functions\n  getBoardSize() {\n    return this.boardSize\n  }\n}\n\n\n//# sourceURL=webpack://knight-movement/./src/modules/chessMaster/chessMaster.js?");

/***/ }),

/***/ "./src/modules/utilities/indexDom.js":
/*!*******************************************!*\
  !*** ./src/modules/utilities/indexDom.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst dom = (() => {\n  // Utility functions for element creation and appending\n  function createClassElement(element, ...classes) {\n    const newElement = document.createElement(element)\n    classes.forEach((newClass) => newElement.classList.add(newClass))\n    return newElement\n  }\n\n  function createTextElement(element, text) {\n    const newElement = document.createElement(element)\n    newElement.textContent = text\n    return newElement\n  }\n\n  function setChessboardGrid(element, boardLength) {\n    element.style.gridTemplateColumns = `repeat(${boardLength}, 1fr)`\n    element.style.gridTemplateRows = `repeat(${boardLength}, 1fr)`\n  }\n\n  HTMLElement.prototype.appendChildren = function appendChildren(...children) {\n    children.forEach((child) => this.appendChild(child))\n    return this\n  }\n\n  // #####################\n  // Initiating dom script\n  // #####################\n  const displayWrapper = createClassElement('div', 'display-wrapper')\n\n  const pageHeaderDiv = document.createElement('header')\n\n  const boardSelectorDiv = createClassElement('div', 'board-size-div')\n  const boardSizeLabel = createTextElement('p', 'Board Size')\n  const boardSizeInput = document.createElement('select')\n\n  // Create drop down size menu\n  const inputOptionElements = []\n  const boardSizeOptions = ['16', '25', '36', '49', '64 (Standard)', '91', '100']\n  boardSizeOptions.forEach((size) => {\n    const newOption = createTextElement('option', size)\n    newOption.setAttribute('value', parseInt(size.split(' ')[0], 10))\n    inputOptionElements[inputOptionElements.length] = newOption\n  })\n  inputOptionElements.forEach((element) => boardSizeInput.appendChild(element))\n  boardSelectorDiv.appendChildren(boardSizeLabel, boardSizeInput)\n\n  const pageHeader = createTextElement('h1', 'Place Your Knight')\n\n  const resetButtonContainer = createClassElement('div', 'reset-button-container')\n  const resetButton = createTextElement('button', 'Reset')\n  resetButton.disabled = true\n  resetButtonContainer.appendChild(resetButton)\n\n  pageHeaderDiv.appendChildren(boardSelectorDiv, pageHeader, resetButtonContainer)\n\n  const mainDiv = document.createElement('main')\n  const chessboardDiv = createClassElement('div', 'chessboard')\n  mainDiv.appendChild(chessboardDiv)\n\n  displayWrapper.appendChildren(pageHeaderDiv, mainDiv)\n  document.body.appendChild(displayWrapper)\n\n  // Function to change text content of h1\n  function changeText(text) {\n    pageHeader.textContent = text\n  }\n\n  // ####################################################\n  // Set of functions to create a new, resized chessboard\n  // ####################################################\n  function removeChessBoard() {\n    const currentBoard = document.querySelector('.chessboard > div')\n    if (currentBoard) currentBoard.remove()\n  }\n\n  function createChessBoard(boardSize) {\n    const blackCellStyle = 'background-color: #000;'\n    const boardLength = Math.sqrt(boardSize)\n    const cellContainer = createClassElement('div', 'grid-container')\n    setChessboardGrid(cellContainer, boardLength)\n\n    for (let row = 0; row < boardLength; row += 1) {\n      for (let col = 0; col < boardLength; col += 1) {\n        const cell = createClassElement('div', 'chess-cell')\n        cell.dataset.xPos = row\n        cell.dataset.yPos = col\n        cellContainer.appendChild(cell)\n        if (row % 2 === 0 && col % 2 === 0) cell.style = blackCellStyle\n        else if (row % 2 !== 0 && col % 2 !== 0) cell.style = blackCellStyle\n      }\n    }\n    chessboardDiv.appendChild(cellContainer)\n  }\n\n  function createNewBoard(boardSize) {\n    removeChessBoard()\n    createChessBoard(boardSize)\n  }\n\n  // ###############################################\n  // Functions to add and remove knight/target image\n  // ###############################################\n  function addBackgroundKnight(event) {\n    if (!event.target.style.backgroundColor) event.target.style.backgroundImage = 'url(\"./assets/images/knight-black.svg\")'\n    else event.target.style.backgroundImage = 'url(\"./assets/images/knight-white.svg\")'\n    event.target.classList.add('active')\n  }\n\n  function removeBackgroundKnight(event) {\n    event.target.style.backgroundImage = 'none'\n    event.target.classList.remove('active')\n  }\n\n  function addTargetClass(event) {\n    event.target.classList.add('target')\n  }\n\n  function removeTargetClass(event) {\n    event.target.classList.remove('target')\n  }\n\n  function resetCell(cell) {\n    cell.style.backgroundImage = 'none'\n    cell.classList.remove('active')\n    cell.classList.remove('target')\n  }\n\n  // #######################################\n  // Functions to set status of reset button\n  // #######################################\n\n  function setResetActive() {\n    resetButton.disabled = false\n  }\n\n  function setResetDisabled() {\n    resetButton.disabled = true\n  }\n\n  // ######################################\n  // Functions to add/remove loading screen\n  // ######################################\n\n  const loadingBackground = createClassElement('div', 'loading-background')\n  const loadingIcon = createTextElement('h1', '?')\n  loadingBackground.appendChild(loadingIcon)\n\n  function showLoading() {\n    chessboardDiv.appendChild(loadingBackground)\n  }\n\n  function removeLoading() {\n    loadingBackground.remove()\n  }\n\n  // ################\n  // Return functions\n  // ################\n  return {\n    createNewBoard,\n    changeText,\n    addBackgroundKnight,\n    removeBackgroundKnight,\n    addTargetClass,\n    removeTargetClass,\n    resetCell,\n    setResetActive,\n    setResetDisabled,\n    showLoading,\n    removeLoading,\n  }\n})()\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dom);\n\n\n//# sourceURL=webpack://knight-movement/./src/modules/utilities/indexDom.js?");

/***/ }),

/***/ "./src/assets/fonts/molengo-regular-webfont.woff":
/*!*******************************************************!*\
  !*** ./src/assets/fonts/molengo-regular-webfont.woff ***!
  \*******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fonts/molengo-regular-webfont..woff\";\n\n//# sourceURL=webpack://knight-movement/./src/assets/fonts/molengo-regular-webfont.woff?");

/***/ }),

/***/ "./src/assets/fonts/molengo-regular-webfont.woff2":
/*!********************************************************!*\
  !*** ./src/assets/fonts/molengo-regular-webfont.woff2 ***!
  \********************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"assets/fonts/molengo-regular-webfont..woff2\";\n\n//# sourceURL=webpack://knight-movement/./src/assets/fonts/molengo-regular-webfont.woff2?");

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
/******/ 			id: moduleId,
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
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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