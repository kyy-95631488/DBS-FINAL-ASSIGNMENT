/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css":
/*!********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/style.css ***!
  \********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, `* {
  padding: 0;
  margin: 0;

  box-sizing: border-box;
}

body {
  font-family: sans-serif;
}

/* GLOBAL */
.container {
  max-width: 800px;

  padding-block: 32px;
  padding-inline: 16px;
  margin-inline: auto;
}

.card {
  border-radius: 8px;

  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
  overflow: hidden;
}

label {
  display: block;
}

section > .title-section {
  margin-block-end: 2rem;

  font-size: 1.2em;
}
/* GLOBAL */

/* style.css */

/* Container styles */
.container {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

/* Section styles */
.note {
  margin-top: 20px;
}

/* Form styles */
.add-note-form-container {
  margin-top: 20px;
}

form {
  background-color: #f9f9f9;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  font-weight: bold;
  margin-bottom: 5px;
}

input[type="text"],
textarea {
  width: 100%;
  padding: 10px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
}

textarea {
  resize: vertical;
}

button[type="submit"] {
  background-color: #007bff;
  color: #fff;
  border: none;
  padding: 10px 20px;
  font-size: 1rem;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button[type="submit"]:hover {
  background-color: #0056b3;
}

.notification {
  margin-top: 10px;
  padding: 10px;
  background-color: #44e3ff00;
  border: 1px solid #31e1ee;
  color: #3c763d;
  border-radius: 4px;
}

/* Start of Header */
header {
  background-color: cornflowerblue;

  color: beige;
}

.app-bar {
  padding: 24px 20px;
}

.app-bar .brand-name {
  margin: 0;

  font-size: 1.7em;
}
/* End of Header */

/* Start of Main */
main {
  min-height: 100vh;
}

/* Search bar */
.search-bar-container {
  display: inline;
}

.floating-form {
  background-color: white;
  padding: 16px;
  border-radius: 5px;

  position: sticky;
  top: 10px;

  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
}

.search-form {
  display: flex;
  gap: 16px;
}

.search-form .form-group {
  flex-grow: 1;

  position: relative;
}

.search-form .form-group input {
  display: block;

  width: 100%;
  height: 60px;

  padding: 14px 10px 0 10px;
  border-inline: none;
  border-block-start: none;
  border-block-end: 1px solid cornflowerblue;

  font-size: 1rem;
}

.search-form .form-group input:focus-visible {
  outline: 0;
}

.search-form .form-group label {
  line-height: 60px;
  font-size: 1em;
  font-weight: 700;
  text-transform: uppercase;
  color: cornflowerblue;

  white-space: nowrap;

  position: absolute;
  top: 0;
  left: 20px;

  user-select: none;
  pointer-events: none;

  transition: 150ms all ease-in-out;
}

.search-form .form-group input:focus-visible ~ label,
.search-form .form-group input:valid ~ label {
  left: 10px;
  top: -16px;

  font-size: 0.8em;
}

.search-form button {
  border: 0;
  padding-inline: 24px;
  background-color: cornflowerblue;

  text-transform: uppercase;
  font-size: 1rem;
  color: white;

  cursor: pointer;

  transition: 100ms linear;
}

.search-form button:hover {
  background-color: #4485ff;
}

.search-form button:active {
  background-color: #6c9aee;
}
/* Search bar */

.note-list-container {
  margin-block-start: 32px;
}

.note-list .list {
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 16px;
}

.note-list .list .card .fan-art-note {
  width: 100%;
  max-height: 450px;

  object-fit: cover;
  object-position: center;
}

.note-list .list .card .note-info {
  padding: 16px 24px;
}

.note-list .list .card .note-info__title h2 {
  font-weight: lighter;
}

.note-list .list .card .note-info__description p {
  display: -webkit-box;
  margin-top: 10px;

  overflow: hidden;

  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 5; /* number of lines to show */
}

.note-list-container .placeholder {
  margin-block: 1rem;

  font-size: 1.5rem;
  font-weight: lighter;
  color: rgba(0, 0, 0, 0.5);
}
/* End of Main */

/* Start of Footer */
footer {
  background-color: cornflowerblue;

  color: beige;
}

footer .container {
  padding-block: 16px;
}

.main-footer {
  padding: 8px 16px;

  text-align: center;
}
/* End of Footer */`, "",{"version":3,"sources":["webpack://./src/styles/style.css"],"names":[],"mappings":"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","sourcesContent":["* {\n  padding: 0;\n  margin: 0;\n\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: sans-serif;\n}\n\n/* GLOBAL */\n.container {\n  max-width: 800px;\n\n  padding-block: 32px;\n  padding-inline: 16px;\n  margin-inline: auto;\n}\n\n.card {\n  border-radius: 8px;\n\n  box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);\n  overflow: hidden;\n}\n\nlabel {\n  display: block;\n}\n\nsection > .title-section {\n  margin-block-end: 2rem;\n\n  font-size: 1.2em;\n}\n/* GLOBAL */\n\n/* style.css */\n\n/* Container styles */\n.container {\n  max-width: 800px;\n  margin: 0 auto;\n  padding: 20px;\n}\n\n/* Section styles */\n.note {\n  margin-top: 20px;\n}\n\n/* Form styles */\n.add-note-form-container {\n  margin-top: 20px;\n}\n\nform {\n  background-color: #f9f9f9;\n  padding: 20px;\n  border-radius: 8px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n}\n\n.form-group {\n  margin-bottom: 15px;\n}\n\nlabel {\n  display: block;\n  font-weight: bold;\n  margin-bottom: 5px;\n}\n\ninput[type=\"text\"],\ntextarea {\n  width: 100%;\n  padding: 10px;\n  font-size: 1rem;\n  border: 1px solid #ccc;\n  border-radius: 4px;\n}\n\ntextarea {\n  resize: vertical;\n}\n\nbutton[type=\"submit\"] {\n  background-color: #007bff;\n  color: #fff;\n  border: none;\n  padding: 10px 20px;\n  font-size: 1rem;\n  cursor: pointer;\n  border-radius: 4px;\n  transition: background-color 0.3s ease;\n}\n\nbutton[type=\"submit\"]:hover {\n  background-color: #0056b3;\n}\n\n.notification {\n  margin-top: 10px;\n  padding: 10px;\n  background-color: #44e3ff00;\n  border: 1px solid #31e1ee;\n  color: #3c763d;\n  border-radius: 4px;\n}\n\n/* Start of Header */\nheader {\n  background-color: cornflowerblue;\n\n  color: beige;\n}\n\n.app-bar {\n  padding: 24px 20px;\n}\n\n.app-bar .brand-name {\n  margin: 0;\n\n  font-size: 1.7em;\n}\n/* End of Header */\n\n/* Start of Main */\nmain {\n  min-height: 100vh;\n}\n\n/* Search bar */\n.search-bar-container {\n  display: inline;\n}\n\n.floating-form {\n  background-color: white;\n  padding: 16px;\n  border-radius: 5px;\n\n  position: sticky;\n  top: 10px;\n\n  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);\n}\n\n.search-form {\n  display: flex;\n  gap: 16px;\n}\n\n.search-form .form-group {\n  flex-grow: 1;\n\n  position: relative;\n}\n\n.search-form .form-group input {\n  display: block;\n\n  width: 100%;\n  height: 60px;\n\n  padding: 14px 10px 0 10px;\n  border-inline: none;\n  border-block-start: none;\n  border-block-end: 1px solid cornflowerblue;\n\n  font-size: 1rem;\n}\n\n.search-form .form-group input:focus-visible {\n  outline: 0;\n}\n\n.search-form .form-group label {\n  line-height: 60px;\n  font-size: 1em;\n  font-weight: 700;\n  text-transform: uppercase;\n  color: cornflowerblue;\n\n  white-space: nowrap;\n\n  position: absolute;\n  top: 0;\n  left: 20px;\n\n  user-select: none;\n  pointer-events: none;\n\n  transition: 150ms all ease-in-out;\n}\n\n.search-form .form-group input:focus-visible ~ label,\n.search-form .form-group input:valid ~ label {\n  left: 10px;\n  top: -16px;\n\n  font-size: 0.8em;\n}\n\n.search-form button {\n  border: 0;\n  padding-inline: 24px;\n  background-color: cornflowerblue;\n\n  text-transform: uppercase;\n  font-size: 1rem;\n  color: white;\n\n  cursor: pointer;\n\n  transition: 100ms linear;\n}\n\n.search-form button:hover {\n  background-color: #4485ff;\n}\n\n.search-form button:active {\n  background-color: #6c9aee;\n}\n/* Search bar */\n\n.note-list-container {\n  margin-block-start: 32px;\n}\n\n.note-list .list {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n\n  gap: 16px;\n}\n\n.note-list .list .card .fan-art-note {\n  width: 100%;\n  max-height: 450px;\n\n  object-fit: cover;\n  object-position: center;\n}\n\n.note-list .list .card .note-info {\n  padding: 16px 24px;\n}\n\n.note-list .list .card .note-info__title h2 {\n  font-weight: lighter;\n}\n\n.note-list .list .card .note-info__description p {\n  display: -webkit-box;\n  margin-top: 10px;\n\n  overflow: hidden;\n\n  text-overflow: ellipsis;\n  -webkit-box-orient: vertical;\n  -webkit-line-clamp: 5; /* number of lines to show */\n}\n\n.note-list-container .placeholder {\n  margin-block: 1rem;\n\n  font-size: 1.5rem;\n  font-weight: lighter;\n  color: rgba(0, 0, 0, 0.5);\n}\n/* End of Main */\n\n/* Start of Footer */\nfooter {\n  background-color: cornflowerblue;\n\n  color: beige;\n}\n\nfooter .container {\n  padding-block: 16px;\n}\n\n.main-footer {\n  padding: 8px 16px;\n\n  text-align: center;\n}\n/* End of Footer */"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

"use strict";


var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

"use strict";


var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

"use strict";


/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_components_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/components/index.js */ "./src/script/components/index.js");
/* harmony import */ var _script_view_home_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/view/home.js */ "./src/script/view/home.js");




document.addEventListener('DOMContentLoaded', () => {
  (0,_script_view_home_js__WEBPACK_IMPORTED_MODULE_1__["default"])();
});


/***/ }),

/***/ "./src/script/components/app-bar.js":
/*!******************************************!*\
  !*** ./src/script/components/app-bar.js ***!
  \******************************************/
/***/ (() => {

class AppBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
        width: 100%;
        
        color: white;
        
        box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.2);
      }

      div {
        padding: 24px 20px;
      }

      .brand-name {
        margin: 0;
      
        font-size: 1.7em;
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `      
      <div>
        <h1 class="brand-name">Notes Finder</h1>
      </div>
    `;
  }
}

customElements.define('app-bar', AppBar);


/***/ }),

/***/ "./src/script/components/footer-bar.js":
/*!*********************************************!*\
  !*** ./src/script/components/footer-bar.js ***!
  \*********************************************/
/***/ (() => {

class FooterBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }

      div {
        padding: 24px 20px;

        text-align: center;
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `      
      <div>
        Notes Finder &copy; 2024
      </div>
    `;
  }
}

customElements.define('footer-bar', FooterBar);


/***/ }),

/***/ "./src/script/components/index.js":
/*!****************************************!*\
  !*** ./src/script/components/index.js ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _app_bar_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-bar.js */ "./src/script/components/app-bar.js");
/* harmony import */ var _app_bar_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_app_bar_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _footer_bar_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer-bar.js */ "./src/script/components/footer-bar.js");
/* harmony import */ var _footer_bar_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_footer_bar_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../styles/style.css */ "./src/styles/style.css");
/* harmony import */ var _note_list_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./note-list.js */ "./src/script/components/note-list.js");
/* harmony import */ var _note_item_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./note-item.js */ "./src/script/components/note-item.js");
/* harmony import */ var _note_item_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_note_item_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _search_bar_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./search-bar.js */ "./src/script/components/search-bar.js");
/* harmony import */ var _search_bar_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_search_bar_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _section_with_title_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./section-with-title.js */ "./src/script/components/section-with-title.js");
/* harmony import */ var _section_with_title_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_section_with_title_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _query_waiting_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./query-waiting.js */ "./src/script/components/query-waiting.js");
/* harmony import */ var _query_waiting_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_query_waiting_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _search_loading_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./search-loading.js */ "./src/script/components/search-loading.js");
/* harmony import */ var _search_loading_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_search_loading_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _app_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../app.js */ "./src/app.js");
















/***/ }),

/***/ "./src/script/components/loading-spinner.js":
/*!**************************************************!*\
  !*** ./src/script/components/loading-spinner.js ***!
  \**************************************************/
/***/ (() => {

class LoadingSpinner extends HTMLElement {
    _shadowRoot = null;
    _style = null;
  
    constructor() {
      super();
      this._shadowRoot = this.attachShadow({ mode: 'open' });
      this._style = document.createElement('style');
      this.render();
    }
  
    _updateStyle() {
      this._style.textContent = `
        :host {
          display: block;
          width: 50px;
          height: 50px;
          position: fixed; /* Changed from absolute to fixed */
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 1000; /* Ensure spinner appears above other content */
          pointer-events: none; /* Ensure spinner doesn't interfere with user interaction */
        }
  
        .spinner {
          width: 100%;
          height: 100%;
          border: 4px solid rgba(0, 0, 0, 0.1);
          border-top: 4px solid cornflowerblue;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }
  
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `;
    }
  
    render() {
      this._updateStyle();
      this._shadowRoot.appendChild(this._style);
      this._shadowRoot.innerHTML += `
        <div class="spinner"></div>
      `;
    }
  }
  
  customElements.define('loading-spinner', LoadingSpinner);
  

/***/ }),

/***/ "./src/script/components/note-item.js":
/*!********************************************!*\
  !*** ./src/script/components/note-item.js ***!
  \********************************************/
/***/ (() => {

class NoteItem extends HTMLElement {
  _shadowRoot = null;
  _style = null;
  _note = {
    id: null,
    title: null,
    body: null,
    createdAt: null,
  };

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  set note(value) {
    if (value && typeof value === 'object') {
      this._note = value;
      this.render(); // Call render() method to update the content
    }
  }

  get note() {
    return this._note;
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
        border-radius: 8px;
        box-shadow: 0 0 2px 0 rgba(0, 0, 0, 0.5);
        overflow: hidden;
      }
      .note-info {
        padding: 16px 24px;
        position: relative;
      }
      .note-info__title h2 {
        font-weight: lighter;
      }
      .note-info__description p {
        display: -webkit-box;
        margin-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 5; /* number of lines to show */
      }
      .note-info__id {
        margin-top: 10px;
        font-size: 0.9em;
        color: gray;
      }
      .note-info__actions {
        position: absolute;
        right: 16px;
        top: 16px;
      }
      .note-info__actions button {
        background-color: #e74c3c;
        color: white;
        border: none;
        padding: 10px;
        cursor: pointer;
      }
      .note-info__actions button:hover {
        background-color: #c0392b;
      }
      .modal {
        display: none;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        overflow: auto;
        background-color: rgba(0,0,0,0.4);
      }
      .modal-content {
        background-color: #fefefe;
        margin: 15% auto;
        padding: 20px;
        border: 1px solid #888;
        width: 80%;
        max-width: 300px;
        border-radius: 8px;
        text-align: center;
      }
      .close {
        color: #aaa;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }
      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    `;
  }

  async _deleteNote() {
    if (this._note.id) {
      try {
        const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${this._note.id}`, {
          method: 'DELETE',
        });
        const result = await response.json();
        if (result.status === 'success') {
          const successModal = this._shadowRoot.getElementById('successModal');
          if (successModal) {
            successModal.style.display = 'block';
          }
        }
      } catch (error) {
        // Handle errors silently
      }
    }
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="card">
        <div class="note-info">
          <div class="note-info__title">
            <h2>${this._note.title || 'No title available'}</h2>
          </div>
          <div class="note-info__description">
            <p>${this._note.body || 'No content available'}</p>
          </div>
          <div class="note-info__created-at">
            <p>${this._note.createdAt ? new Date(this._note.createdAt).toLocaleString() : 'Date not available'}</p>
          </div>
          <div class="note-info__id">
            <p>ID: ${this._note.id || 'ID not available'}</p>
          </div>
          <div class="note-info__actions">
            <button id="deleteButton">Delete</button>
          </div>
        </div>
      </div>
      <div id="successModal" class="modal">
        <div class="modal-content">
          <span class="close">&times;</span>
          <p>Note has been deleted successfully.</p>
        </div>
      </div>
    `;

    this._shadowRoot.querySelector('#deleteButton').addEventListener('click', () => {
      this._deleteNote();
    });

    const closeModal = this._shadowRoot.querySelector('.close');
    closeModal.addEventListener('click', () => {
      const successModal = this._shadowRoot.getElementById('successModal');
      if (successModal) {
        successModal.style.display = 'none';
        location.reload();
      }
    });

    window.addEventListener('click', (event) => {
      const successModal = this._shadowRoot.getElementById('successModal');
      if (event.target === successModal) {
        successModal.style.display = 'none';
        location.reload();
      }
    });
  }

  connectedCallback() {
    // No need to fetch notes here; use the note property to update the display
  }
}

customElements.define('note-item', NoteItem);


/***/ }),

/***/ "./src/script/components/note-list.js":
/*!********************************************!*\
  !*** ./src/script/components/note-list.js ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/script/utils.js");


class NoteList extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _column = 2;
  _gutter = 16;

  static get observedAttributes() {
    return ['column', 'gutter'];
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }
      
      .list {
        display: grid;
        grid-template-columns: ${'1fr '.repeat(this.column)};
      
        gap: ${this.gutter}px;
      }
    `;
  }

  set column(value) {
    const newValue = Number(value);
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isValidInteger(newValue)) return;

    this._column = value;
  }

  get column() {
    return this._column;
  }

  set gutter(value) {
    const newValue = Number(value);
    if (!_utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].isValidInteger(newValue)) return;

    this._gutter = value;
  }

  get gutter() {
    return this._gutter;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="list">
        <slot></slot>
      </div>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'column':
        this.column = newValue;
        break;
      case 'gutter':
        this.gutter = newValue;
        break;
    }

    this.render();
  }
}

customElements.define('note-list', NoteList);


/***/ }),

/***/ "./src/script/components/query-waiting.js":
/*!************************************************!*\
  !*** ./src/script/components/query-waiting.js ***!
  \************************************************/
/***/ (() => {

class QueryWaiting extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        margin-block: 1rem;

        font-size: 1.5rem;
        font-weight: lighter;
        color: rgba(0, 0, 0, 0.5);
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `      
      Waiting for search keyword
    `;
  }
}

customElements.define('query-waiting', QueryWaiting);


/***/ }),

/***/ "./src/script/components/search-bar.js":
/*!*********************************************!*\
  !*** ./src/script/components/search-bar.js ***!
  \*********************************************/
/***/ (() => {

class SearchBar extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _submitEvent = 'submit';
  _searchEvent = 'search';

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this.render();
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this._shadowRoot
      .querySelector('form')
      .addEventListener('submit', (event) => this._onFormSubmit(event, this));
    this.addEventListener(this._submitEvent, this._onSearchBarSubmit.bind(this));
  }

  disconnectedCallback() {
    this._shadowRoot
      .querySelector('form')
      .removeEventListener('submit', (event) => this._onFormSubmit(event, this));
    this.removeEventListener(this._submitEvent, this._onSearchBarSubmit.bind(this));
  }

  _onFormSubmit(event, searchBarInstance) {
    searchBarInstance.dispatchEvent(new CustomEvent('submit'));
    event.preventDefault();
  }

  async _onSearchBarSubmit() {
    const query = this._shadowRoot.querySelector('input#id').value;

    if (!query) return;

    try {
      const response = await fetch(`https://notes-api.dicoding.dev/v2/notes/${encodeURIComponent(query)}`);
      const data = await response.json();

      if (data.status === 'success') {
        this.dispatchEvent(
          new CustomEvent(this._searchEvent, {
            detail: { note: data.data },
            bubbles: true,
          }),
        );
      } else {
        console.log('Note not found.');
        this.dispatchEvent(
          new CustomEvent(this._searchEvent, {
            detail: { note: null },
            bubbles: true,
          }),
        );
      }
    } catch (error) {
      console.error('Error fetching note:', error);
    }
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: inline;
      }
    
      .floating-form {
        background-color: white;
        padding: 16px;
        border-radius: 5px;

        position: sticky;
        top: 10px;

        box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
      }

      .search-form {
        display: flex;
        gap: 16px;
      }

      .search-form .form-group {
        flex-grow: 1;

        position: relative;
      }

      .search-form .form-group input {
        display: block;

        width: 100%;
        height: 60px;

        padding: 14px 10px 0 10px;
        border-inline: none;
        border-block-start: none;
        border-block-end: 1px solid cornflowerblue;

        font-size: 1rem;
      }

      .search-form .form-group input:focus-visible {
        outline: 0;
      }

      .search-form .form-group label {
        line-height: 60px;
        font-size: 1em;
        font-weight: 700;
        text-transform: uppercase;
        color: cornflowerblue;

        white-space: nowrap;

        position: absolute;
        top: 0;
        left: 20px;

        user-select: none;
        pointer-events: none;

        transition: 150ms all ease-in-out;
      }

      .search-form .form-group input:focus-visible ~ label,
      .search-form .form-group input:valid ~ label {
        left: 10px;
        top: -16px;

        font-size: 0.8em;
      }

      .search-form button {
        border: 0;
        padding-inline: 24px;
        background-color: cornflowerblue;

        text-transform: uppercase;
        font-size: 1rem;
        color: white;

        cursor: pointer;

        transition: 100ms linear;
      }

      .search-form button:hover {
        background-color: #4485ff;
      }

      .search-form button:active {
        background-color: #6c9aee;
      }
    `;
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <div class="floating-form">
        <form id="searchForm" class="search-form">
          <div class="form-group">
            <input id="id" name="id" type="search" required />
            <label for="id">Note's ID</label>
          </div>

          <button>Search</button>
        </form>
      </div>
    `;
  }
}

customElements.define('search-bar', SearchBar);


/***/ }),

/***/ "./src/script/components/search-loading.js":
/*!*************************************************!*\
  !*** ./src/script/components/search-loading.js ***!
  \*************************************************/
/***/ (() => {

class SearchLoading extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        margin-block: 1rem;

        font-size: 1.5rem;
        font-weight: lighter;
        color: rgba(0, 0, 0, 0.5);
      }
    `;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `      
      Loading...
    `;
  }
}

customElements.define('search-loading', SearchLoading);


/***/ }),

/***/ "./src/script/components/section-with-title.js":
/*!*****************************************************!*\
  !*** ./src/script/components/section-with-title.js ***!
  \*****************************************************/
/***/ (() => {

class SectionWithTitle extends HTMLElement {
  _shadowRoot = null;
  _style = null;

  _title = 'NEED SECTION TITLE';

  static get observedAttributes() {
    return ['title'];
  }

  constructor() {
    super();

    this._shadowRoot = this.attachShadow({ mode: 'open' });
    this._style = document.createElement('style');

    this.render();
  }

  _updateStyle() {
    this._style.textContent = `
      :host {
        display: block;
      }
      
      .title-section {
        margin-block-end: 2rem;
        font-size: 1.2em;
      }
    `;
  }

  set title(value) {
    this._title = value;
  }

  get title() {
    return this._title;
  }

  _emptyContent() {
    this._shadowRoot.innerHTML = '';
  }

  render() {
    this._emptyContent();
    this._updateStyle();

    this._shadowRoot.appendChild(this._style);
    this._shadowRoot.innerHTML += `
      <section id="note" class="note">
        <div class="title-section">
          <h2>${this.title}</h2>
        </div>

        <div>
          <slot></slot>
        </div>
      </section>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue) {
    switch (name) {
      case 'title':
        this.title = newValue;
        break;
    }

    this.render();
  }
}

customElements.define('section-with-title', SectionWithTitle);

/***/ }),

/***/ "./src/script/utils.js":
/*!*****************************!*\
  !*** ./src/script/utils.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Utils = {
  emptyElement: (element) => {
    element.innerHTML = '';
  },

  isValidInteger: (value) => {
    return Number.isInteger(value);
  },

  showElement: (element) => {
    element.style.display = '';
  },

  hideElement: (element) => {
    element.style.display = 'none';
  },

  generateRandomId: () => {
    return Math.random().toString(36).substr(2, 9); // Generate random alphanumeric id
  }
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Utils);


/***/ }),

/***/ "./src/script/view/home.js":
/*!*********************************!*\
  !*** ./src/script/view/home.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils.js */ "./src/script/utils.js");
/* harmony import */ var _components_loading_spinner_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/loading-spinner.js */ "./src/script/components/loading-spinner.js");
/* harmony import */ var _components_loading_spinner_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_components_loading_spinner_js__WEBPACK_IMPORTED_MODULE_1__);




const home = () => {
  const searchFormElement = document.querySelector('search-bar');
  const addNoteFormElement = document.querySelector('#addNoteForm');

  const noteListContainerElement = document.querySelector('#noteListContainer');
  const noteLoadingElement = document.querySelector('search-loading');
  const noteListElement = noteListContainerElement.querySelector('note-list');
  const notificationElement = document.querySelector('#notification');

  const fetchNotes = async (query = '') => {
    showContentLoading(); // Show the spinner before fetching notes

    let endpoint;
    if (query.trim() === '') {
      endpoint = 'https://notes-api.dicoding.dev/v2/notes';
    } else {
      endpoint = `https://notes-api.dicoding.dev/v2/notes/${encodeURIComponent(query)}`;
    }

    try {
      const response = await fetch(endpoint);
      const data = await response.json();

      if (data.status === 'success') {
        if (Array.isArray(data.data)) {
          displayResult(data.data);
        } else if (data.data) {
          displayResult([data.data]); // Display single note in an array
        } else {
          displayResult([]);
          displayNotification('No notes found.');
        }
      } else {
        displayNotification('Failed to fetch notes.');
      }
    } catch (error) {
      displayNotification('Failed to fetch notes.');
    }

    hideContentLoading(); // Hide the spinner after notes are fetched
    showNoteList(); // Show the notes list
  };

  const displayResult = (notes) => {
    const noteItemElements = notes.map((note) => {
      const noteItemElement = document.createElement('note-item');
      noteItemElement.note = note; // Set the note data to the custom element
      return noteItemElement;
    });
  
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].emptyElement(noteListElement); // Ensure this function correctly clears the element
    noteListElement.append(...noteItemElements);
  };  

  const showNoteList = () => {
    Array.from(noteListContainerElement.children).forEach((element) => {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideElement(element);
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].showElement(noteListElement);
  };

  const showNoteLoading = () => {
    Array.from(noteListContainerElement.children).forEach((element) => {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideElement(element);
    });
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].showElement(noteLoadingElement); // Show note loading element
  };

  const hideNoteLoading = () => {
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideElement(noteLoadingElement); // Hide note loading element
  };

  const showContentLoading = () => {
    const spinner = document.querySelector('loading-spinner');
    if (spinner) {
      spinner.style.display = 'block'; // Make sure it's visible
    }
  };

  const hideContentLoading = () => {
    const spinner = document.querySelector('loading-spinner');
    if (spinner) {
      spinner.style.display = 'none'; // Hide the spinner
    }
  };

  const onAddNoteSubmit = async (event) => {
    event.preventDefault();

    const titleInput = document.querySelector('#title').value;
    const bodyInput = document.querySelector('#body').value;

    if (!titleInput || !bodyInput) {
      alert('Please fill in both title and body fields.');
      return;
    }

    showContentLoading(); // Show spinner while adding note

    try {
      const response = await fetch('https://notes-api.dicoding.dev/v2/notes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ title: titleInput, body: bodyInput }),
      });
      const data = await response.json();

      if (data.status === 'success') {
        fetchNotes(); // Refresh the notes list
        displayNotification(`New note added: ${data.data.title}`);
      } else {
        displayNotification('Failed to add note.');
      }
    } catch (error) {
      displayNotification('Failed to add note.');
    }

    hideContentLoading(); // Hide spinner after adding note

    event.target.reset();
  };

  const displayNotification = (message) => {
    notificationElement.textContent = message;
    _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].showElement(notificationElement);

    setTimeout(() => {
      _utils_js__WEBPACK_IMPORTED_MODULE_0__["default"].hideElement(notificationElement);
    }, 3000); // Hide notification after 3 seconds
  };

  // Initial display of all notes
  fetchNotes();

  // Event listeners
  searchFormElement.addEventListener('search', async (event) => {
    event.preventDefault();
    const { note } = event.detail;
    
    showContentLoading(); // Show spinner while searching
    
    if (note) {
      displayResult([note]);
    } else {
      await fetchNotes(); // Fetch notes with empty query to show all notes
    }

    hideContentLoading(); // Hide spinner after search results are displayed
  });

  addNoteFormElement.addEventListener('submit', onAddNoteSubmit);
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (home);


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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/app.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQSxRQUFRO0FBQ1I7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEM7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7O0FDMUxBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJDQUEyQyxjQUFjO0FBQ3pEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7Ozs7Ozs7Ozs7QUMxQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDJDQUEyQyxjQUFjO0FBQ3pEOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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WyJ3ZWJwYWNrOi8vdHJvbWJvbmVfMi8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzIiwid2VicGFjazovL3Ryb21ib25lXzIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL3Ryb21ib25lXzIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly90cm9tYm9uZV8yLy4vc3JjL3N0eWxlcy9zdHlsZS5jc3M/ZmY5NCIsIndlYnBhY2s6Ly90cm9tYm9uZV8yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3Ryb21ib25lXzIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL3Ryb21ib25lXzIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vdHJvbWJvbmVfMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly90cm9tYm9uZV8yLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vdHJvbWJvbmVfMi8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL3Ryb21ib25lXzIvLi9zcmMvYXBwLmpzIiwid2VicGFjazovL3Ryb21ib25lXzIvLi9zcmMvc2NyaXB0L2NvbXBvbmVudHMvYXBwLWJhci5qcyIsIndlYnBhY2s6Ly90cm9tYm9uZV8yLy4vc3JjL3NjcmlwdC9jb21wb25lbnRzL2Zvb3Rlci1iYXIuanMiLCJ3ZWJwYWNrOi8vdHJvbWJvbmVfMi8uL3NyYy9zY3JpcHQvY29tcG9uZW50cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90cm9tYm9uZV8yLy4vc3JjL3NjcmlwdC9jb21wb25lbnRzL2xvYWRpbmctc3Bpbm5lci5qcyIsIndlYnBhY2s6Ly90cm9tYm9uZV8yLy4vc3JjL3NjcmlwdC9jb21wb25lbnRzL25vdGUtaXRlbS5qcyIsIndlYnBhY2s6Ly90cm9tYm9uZV8yLy4vc3JjL3NjcmlwdC9jb21wb25lbnRzL25vdGUtbGlzdC5qcyIsIndlYnBhY2s6Ly90cm9tYm9uZV8yLy4vc3JjL3NjcmlwdC9jb21wb25lbnRzL3F1ZXJ5LXdhaXRpbmcuanMiLCJ3ZWJwYWNrOi8vdHJvbWJvbmVfMi8uL3NyYy9zY3JpcHQvY29tcG9uZW50cy9zZWFyY2gtYmFyLmpzIiwid2VicGFjazovL3Ryb21ib25lXzIvLi9zcmMvc2NyaXB0L2NvbXBvbmVudHMvc2VhcmNoLWxvYWRpbmcuanMiLCJ3ZWJwYWNrOi8vdHJvbWJvbmVfMi8uL3NyYy9zY3JpcHQvY29tcG9uZW50cy9zZWN0aW9uLXdpdGgtdGl0bGUuanMiLCJ3ZWJwYWNrOi8vdHJvbWJvbmVfMi8uL3NyYy9zY3JpcHQvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vdHJvbWJvbmVfMi8uL3NyYy9zY3JpcHQvdmlldy9ob21lLmpzIiwid2VicGFjazovL3Ryb21ib25lXzIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vdHJvbWJvbmVfMi93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly90cm9tYm9uZV8yL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly90cm9tYm9uZV8yL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vdHJvbWJvbmVfMi93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Ryb21ib25lXzIvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL3Ryb21ib25lXzIvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly90cm9tYm9uZV8yL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly90cm9tYm9uZV8yL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgKiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcblxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5ib2R5IHtcbiAgZm9udC1mYW1pbHk6IHNhbnMtc2VyaWY7XG59XG5cbi8qIEdMT0JBTCAqL1xuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODAwcHg7XG5cbiAgcGFkZGluZy1ibG9jazogMzJweDtcbiAgcGFkZGluZy1pbmxpbmU6IDE2cHg7XG4gIG1hcmdpbi1pbmxpbmU6IGF1dG87XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuXG4gIGJveC1zaGFkb3c6IDAgMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbmxhYmVsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbnNlY3Rpb24gPiAudGl0bGUtc2VjdGlvbiB7XG4gIG1hcmdpbi1ibG9jay1lbmQ6IDJyZW07XG5cbiAgZm9udC1zaXplOiAxLjJlbTtcbn1cbi8qIEdMT0JBTCAqL1xuXG4vKiBzdHlsZS5jc3MgKi9cblxuLyogQ29udGFpbmVyIHN0eWxlcyAqL1xuLmNvbnRhaW5lciB7XG4gIG1heC13aWR0aDogODAwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAyMHB4O1xufVxuXG4vKiBTZWN0aW9uIHN0eWxlcyAqL1xuLm5vdGUge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuXG4vKiBGb3JtIHN0eWxlcyAqL1xuLmFkZC1ub3RlLWZvcm0tY29udGFpbmVyIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmOWY5Zjk7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcbn1cblxuLmZvcm0tZ3JvdXAge1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xufVxuXG5sYWJlbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmb250LXdlaWdodDogYm9sZDtcbiAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG5pbnB1dFt0eXBlPVwidGV4dFwiXSxcbnRleHRhcmVhIHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG50ZXh0YXJlYSB7XG4gIHJlc2l6ZTogdmVydGljYWw7XG59XG5cbmJ1dHRvblt0eXBlPVwic3VibWl0XCJdIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcbiAgY29sb3I6ICNmZmY7XG4gIGJvcmRlcjogbm9uZTtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICBmb250LXNpemU6IDFyZW07XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3MgZWFzZTtcbn1cblxuYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl06aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xufVxuXG4ubm90aWZpY2F0aW9uIHtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0ZTNmZjAwO1xuICBib3JkZXI6IDFweCBzb2xpZCAjMzFlMWVlO1xuICBjb2xvcjogIzNjNzYzZDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xufVxuXG4vKiBTdGFydCBvZiBIZWFkZXIgKi9cbmhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuXG4gIGNvbG9yOiBiZWlnZTtcbn1cblxuLmFwcC1iYXIge1xuICBwYWRkaW5nOiAyNHB4IDIwcHg7XG59XG5cbi5hcHAtYmFyIC5icmFuZC1uYW1lIHtcbiAgbWFyZ2luOiAwO1xuXG4gIGZvbnQtc2l6ZTogMS43ZW07XG59XG4vKiBFbmQgb2YgSGVhZGVyICovXG5cbi8qIFN0YXJ0IG9mIE1haW4gKi9cbm1haW4ge1xuICBtaW4taGVpZ2h0OiAxMDB2aDtcbn1cblxuLyogU2VhcmNoIGJhciAqL1xuLnNlYXJjaC1iYXItY29udGFpbmVyIHtcbiAgZGlzcGxheTogaW5saW5lO1xufVxuXG4uZmxvYXRpbmctZm9ybSB7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICBwYWRkaW5nOiAxNnB4O1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgcG9zaXRpb246IHN0aWNreTtcbiAgdG9wOiAxMHB4O1xuXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbn1cblxuLnNlYXJjaC1mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiAxNnB4O1xufVxuXG4uc2VhcmNoLWZvcm0gLmZvcm0tZ3JvdXAge1xuICBmbGV4LWdyb3c6IDE7XG5cbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc2VhcmNoLWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQge1xuICBkaXNwbGF5OiBibG9jaztcblxuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuXG4gIHBhZGRpbmc6IDE0cHggMTBweCAwIDEwcHg7XG4gIGJvcmRlci1pbmxpbmU6IG5vbmU7XG4gIGJvcmRlci1ibG9jay1zdGFydDogbm9uZTtcbiAgYm9yZGVyLWJsb2NrLWVuZDogMXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xuXG4gIGZvbnQtc2l6ZTogMXJlbTtcbn1cblxuLnNlYXJjaC1mb3JtIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLXZpc2libGUge1xuICBvdXRsaW5lOiAwO1xufVxuXG4uc2VhcmNoLWZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwge1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgZm9udC1zaXplOiAxZW07XG4gIGZvbnQtd2VpZ2h0OiA3MDA7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcblxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAyMHB4O1xuXG4gIHVzZXItc2VsZWN0OiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICB0cmFuc2l0aW9uOiAxNTBtcyBhbGwgZWFzZS1pbi1vdXQ7XG59XG5cbi5zZWFyY2gtZm9ybSAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cy12aXNpYmxlIH4gbGFiZWwsXG4uc2VhcmNoLWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6dmFsaWQgfiBsYWJlbCB7XG4gIGxlZnQ6IDEwcHg7XG4gIHRvcDogLTE2cHg7XG5cbiAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLnNlYXJjaC1mb3JtIGJ1dHRvbiB7XG4gIGJvcmRlcjogMDtcbiAgcGFkZGluZy1pbmxpbmU6IDI0cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xuXG4gIGN1cnNvcjogcG9pbnRlcjtcblxuICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXI7XG59XG5cbi5zZWFyY2gtZm9ybSBidXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ4NWZmO1xufVxuXG4uc2VhcmNoLWZvcm0gYnV0dG9uOmFjdGl2ZSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzlhZWU7XG59XG4vKiBTZWFyY2ggYmFyICovXG5cbi5ub3RlLWxpc3QtY29udGFpbmVyIHtcbiAgbWFyZ2luLWJsb2NrLXN0YXJ0OiAzMnB4O1xufVxuXG4ubm90ZS1saXN0IC5saXN0IHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuXG4gIGdhcDogMTZweDtcbn1cblxuLm5vdGUtbGlzdCAubGlzdCAuY2FyZCAuZmFuLWFydC1ub3RlIHtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC1oZWlnaHQ6IDQ1MHB4O1xuXG4gIG9iamVjdC1maXQ6IGNvdmVyO1xuICBvYmplY3QtcG9zaXRpb246IGNlbnRlcjtcbn1cblxuLm5vdGUtbGlzdCAubGlzdCAuY2FyZCAubm90ZS1pbmZvIHtcbiAgcGFkZGluZzogMTZweCAyNHB4O1xufVxuXG4ubm90ZS1saXN0IC5saXN0IC5jYXJkIC5ub3RlLWluZm9fX3RpdGxlIGgyIHtcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XG59XG5cbi5ub3RlLWxpc3QgLmxpc3QgLmNhcmQgLm5vdGUtaW5mb19fZGVzY3JpcHRpb24gcCB7XG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuXG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC13ZWJraXQtYm94LW9yaWVudDogdmVydGljYWw7XG4gIC13ZWJraXQtbGluZS1jbGFtcDogNTsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cbn1cblxuLm5vdGUtbGlzdC1jb250YWluZXIgLnBsYWNlaG9sZGVyIHtcbiAgbWFyZ2luLWJsb2NrOiAxcmVtO1xuXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xuICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbn1cbi8qIEVuZCBvZiBNYWluICovXG5cbi8qIFN0YXJ0IG9mIEZvb3RlciAqL1xuZm9vdGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XG5cbiAgY29sb3I6IGJlaWdlO1xufVxuXG5mb290ZXIgLmNvbnRhaW5lciB7XG4gIHBhZGRpbmctYmxvY2s6IDE2cHg7XG59XG5cbi5tYWluLWZvb3RlciB7XG4gIHBhZGRpbmc6IDhweCAxNnB4O1xuXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cbi8qIEVuZCBvZiBGb290ZXIgKi9gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsVUFBVTtFQUNWLFNBQVM7O0VBRVQsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsdUJBQXVCO0FBQ3pCOztBQUVBLFdBQVc7QUFDWDtFQUNFLGdCQUFnQjs7RUFFaEIsbUJBQW1CO0VBQ25CLG9CQUFvQjtFQUNwQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxrQkFBa0I7O0VBRWxCLHdDQUF3QztFQUN4QyxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztB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QUFDM0I7QUFDQSxnQkFBZ0I7O0FBRWhCLG9CQUFvQjtBQUNwQjtFQUNFLGdDQUFnQzs7RUFFaEMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCOztFQUVqQixrQkFBa0I7QUFDcEI7QUFDQSxrQkFBa0JcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuXFxuYm9keSB7XFxuICBmb250LWZhbWlseTogc2Fucy1zZXJpZjtcXG59XFxuXFxuLyogR0xPQkFMICovXFxuLmNvbnRhaW5lciB7XFxuICBtYXgtd2lkdGg6IDgwMHB4O1xcblxcbiAgcGFkZGluZy1ibG9jazogMzJweDtcXG4gIHBhZGRpbmctaW5saW5lOiAxNnB4O1xcbiAgbWFyZ2luLWlubGluZTogYXV0bztcXG59XFxuXFxuLmNhcmQge1xcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcblxcbiAgYm94LXNoYWRvdzogMCAwIDJweCAwIHJnYmEoMCwgMCwgMCwgMC41KTtcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG5zZWN0aW9uID4gLnRpdGxlLXNlY3Rpb24ge1xcbiAgbWFyZ2luLWJsb2NrLWVuZDogMnJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogMS4yZW07XFxufVxcbi8qIEdMT0JBTCAqL1xcblxcbi8qIHN0eWxlLmNzcyAqL1xcblxcbi8qIENvbnRhaW5lciBzdHlsZXMgKi9cXG4uY29udGFpbmVyIHtcXG4gIG1heC13aWR0aDogODAwcHg7XFxuICBtYXJnaW46IDAgYXV0bztcXG4gIHBhZGRpbmc6IDIwcHg7XFxufVxcblxcbi8qIFNlY3Rpb24gc3R5bGVzICovXFxuLm5vdGUge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuLyogRm9ybSBzdHlsZXMgKi9cXG4uYWRkLW5vdGUtZm9ybS1jb250YWluZXIge1xcbiAgbWFyZ2luLXRvcDogMjBweDtcXG59XFxuXFxuZm9ybSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjlmOWY5O1xcbiAgcGFkZGluZzogMjBweDtcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XFxufVxcblxcbi5mb3JtLWdyb3VwIHtcXG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XFxufVxcblxcbmxhYmVsIHtcXG4gIGRpc3BsYXk6IGJsb2NrO1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBtYXJnaW4tYm90dG9tOiA1cHg7XFxufVxcblxcbmlucHV0W3R5cGU9XFxcInRleHRcXFwiXSxcXG50ZXh0YXJlYSB7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBmb250LXNpemU6IDFyZW07XFxuICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG50ZXh0YXJlYSB7XFxuICByZXNpemU6IHZlcnRpY2FsO1xcbn1cXG5cXG5idXR0b25bdHlwZT1cXFwic3VibWl0XFxcIl0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwN2JmZjtcXG4gIGNvbG9yOiAjZmZmO1xcbiAgYm9yZGVyOiBub25lO1xcbiAgcGFkZGluZzogMTBweCAyMHB4O1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY3Vyc29yOiBwb2ludGVyO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzIGVhc2U7XFxufVxcblxcbmJ1dHRvblt0eXBlPVxcXCJzdWJtaXRcXFwiXTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA1NmIzO1xcbn1cXG5cXG4ubm90aWZpY2F0aW9uIHtcXG4gIG1hcmdpbi10b3A6IDEwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQ0ZTNmZjAwO1xcbiAgYm9yZGVyOiAxcHggc29saWQgIzMxZTFlZTtcXG4gIGNvbG9yOiAjM2M3NjNkO1xcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcbn1cXG5cXG4vKiBTdGFydCBvZiBIZWFkZXIgKi9cXG5oZWFkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuXFxuICBjb2xvcjogYmVpZ2U7XFxufVxcblxcbi5hcHAtYmFyIHtcXG4gIHBhZGRpbmc6IDI0cHggMjBweDtcXG59XFxuXFxuLmFwcC1iYXIgLmJyYW5kLW5hbWUge1xcbiAgbWFyZ2luOiAwO1xcblxcbiAgZm9udC1zaXplOiAxLjdlbTtcXG59XFxuLyogRW5kIG9mIEhlYWRlciAqL1xcblxcbi8qIFN0YXJ0IG9mIE1haW4gKi9cXG5tYWluIHtcXG4gIG1pbi1oZWlnaHQ6IDEwMHZoO1xcbn1cXG5cXG4vKiBTZWFyY2ggYmFyICovXFxuLnNlYXJjaC1iYXItY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGlubGluZTtcXG59XFxuXFxuLmZsb2F0aW5nLWZvcm0ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBwYWRkaW5nOiAxNnB4O1xcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcblxcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMTBweDtcXG5cXG4gIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcXG59XFxuXFxuLnNlYXJjaC1mb3JtIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBnYXA6IDE2cHg7XFxufVxcblxcbi5zZWFyY2gtZm9ybSAuZm9ybS1ncm91cCB7XFxuICBmbGV4LWdyb3c6IDE7XFxuXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxufVxcblxcbi5zZWFyY2gtZm9ybSAuZm9ybS1ncm91cCBpbnB1dCB7XFxuICBkaXNwbGF5OiBibG9jaztcXG5cXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiA2MHB4O1xcblxcbiAgcGFkZGluZzogMTRweCAxMHB4IDAgMTBweDtcXG4gIGJvcmRlci1pbmxpbmU6IG5vbmU7XFxuICBib3JkZXItYmxvY2stc3RhcnQ6IG5vbmU7XFxuICBib3JkZXItYmxvY2stZW5kOiAxcHggc29saWQgY29ybmZsb3dlcmJsdWU7XFxuXFxuICBmb250LXNpemU6IDFyZW07XFxufVxcblxcbi5zZWFyY2gtZm9ybSAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cy12aXNpYmxlIHtcXG4gIG91dGxpbmU6IDA7XFxufVxcblxcbi5zZWFyY2gtZm9ybSAuZm9ybS1ncm91cCBsYWJlbCB7XFxuICBsaW5lLWhlaWdodDogNjBweDtcXG4gIGZvbnQtc2l6ZTogMWVtO1xcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XFxuICBjb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcblxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgdG9wOiAwO1xcbiAgbGVmdDogMjBweDtcXG5cXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxuXFxuICB0cmFuc2l0aW9uOiAxNTBtcyBhbGwgZWFzZS1pbi1vdXQ7XFxufVxcblxcbi5zZWFyY2gtZm9ybSAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cy12aXNpYmxlIH4gbGFiZWwsXFxuLnNlYXJjaC1mb3JtIC5mb3JtLWdyb3VwIGlucHV0OnZhbGlkIH4gbGFiZWwge1xcbiAgbGVmdDogMTBweDtcXG4gIHRvcDogLTE2cHg7XFxuXFxuICBmb250LXNpemU6IDAuOGVtO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0gYnV0dG9uIHtcXG4gIGJvcmRlcjogMDtcXG4gIHBhZGRpbmctaW5saW5lOiAyNHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY29ybmZsb3dlcmJsdWU7XFxuXFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xcbiAgZm9udC1zaXplOiAxcmVtO1xcbiAgY29sb3I6IHdoaXRlO1xcblxcbiAgY3Vyc29yOiBwb2ludGVyO1xcblxcbiAgdHJhbnNpdGlvbjogMTAwbXMgbGluZWFyO1xcbn1cXG5cXG4uc2VhcmNoLWZvcm0gYnV0dG9uOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM0NDg1ZmY7XFxufVxcblxcbi5zZWFyY2gtZm9ybSBidXR0b246YWN0aXZlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM2YzlhZWU7XFxufVxcbi8qIFNlYXJjaCBiYXIgKi9cXG5cXG4ubm90ZS1saXN0LWNvbnRhaW5lciB7XFxuICBtYXJnaW4tYmxvY2stc3RhcnQ6IDMycHg7XFxufVxcblxcbi5ub3RlLWxpc3QgLmxpc3Qge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG5cXG4gIGdhcDogMTZweDtcXG59XFxuXFxuLm5vdGUtbGlzdCAubGlzdCAuY2FyZCAuZmFuLWFydC1ub3RlIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgbWF4LWhlaWdodDogNDUwcHg7XFxuXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXG4gIG9iamVjdC1wb3NpdGlvbjogY2VudGVyO1xcbn1cXG5cXG4ubm90ZS1saXN0IC5saXN0IC5jYXJkIC5ub3RlLWluZm8ge1xcbiAgcGFkZGluZzogMTZweCAyNHB4O1xcbn1cXG5cXG4ubm90ZS1saXN0IC5saXN0IC5jYXJkIC5ub3RlLWluZm9fX3RpdGxlIGgyIHtcXG4gIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xcbn1cXG5cXG4ubm90ZS1saXN0IC5saXN0IC5jYXJkIC5ub3RlLWluZm9fX2Rlc2NyaXB0aW9uIHAge1xcbiAgZGlzcGxheTogLXdlYmtpdC1ib3g7XFxuICBtYXJnaW4tdG9wOiAxMHB4O1xcblxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG5cXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcXG4gIC13ZWJraXQtbGluZS1jbGFtcDogNTsgLyogbnVtYmVyIG9mIGxpbmVzIHRvIHNob3cgKi9cXG59XFxuXFxuLm5vdGUtbGlzdC1jb250YWluZXIgLnBsYWNlaG9sZGVyIHtcXG4gIG1hcmdpbi1ibG9jazogMXJlbTtcXG5cXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC13ZWlnaHQ6IGxpZ2h0ZXI7XFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG4vKiBFbmQgb2YgTWFpbiAqL1xcblxcbi8qIFN0YXJ0IG9mIEZvb3RlciAqL1xcbmZvb3RlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcXG5cXG4gIGNvbG9yOiBiZWlnZTtcXG59XFxuXFxuZm9vdGVyIC5jb250YWluZXIge1xcbiAgcGFkZGluZy1ibG9jazogMTZweDtcXG59XFxuXFxuLm1haW4tZm9vdGVyIHtcXG4gIHBhZGRpbmc6IDhweCAxNnB4O1xcblxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG4vKiBFbmQgb2YgRm9vdGVyICovXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImltcG9ydCAnLi9zY3JpcHQvY29tcG9uZW50cy9pbmRleC5qcyc7XG5cbmltcG9ydCBob21lIGZyb20gJy4vc2NyaXB0L3ZpZXcvaG9tZS5qcyc7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gIGhvbWUoKTtcbn0pO1xuIiwiY2xhc3MgQXBwQmFyIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICBfc2hhZG93Um9vdCA9IG51bGw7XG4gIF9zdHlsZSA9IG51bGw7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX3NoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB0aGlzLl9zdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIH1cblxuICBfdXBkYXRlU3R5bGUoKSB7XG4gICAgdGhpcy5fc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgXG4gICAgICAgIGJveC1zaGFkb3c6IDAgNHB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIH1cblxuICAgICAgZGl2IHtcbiAgICAgICAgcGFkZGluZzogMjRweCAyMHB4O1xuICAgICAgfVxuXG4gICAgICAuYnJhbmQtbmFtZSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgIFxuICAgICAgICBmb250LXNpemU6IDEuN2VtO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBfZW1wdHlDb250ZW50KCkge1xuICAgIHRoaXMuX3NoYWRvd1Jvb3QuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuX2VtcHR5Q29udGVudCgpO1xuICAgIHRoaXMuX3VwZGF0ZVN0eWxlKCk7XG5cbiAgICB0aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMuX3N0eWxlKTtcbiAgICB0aGlzLl9zaGFkb3dSb290LmlubmVySFRNTCArPSBgICAgICAgXG4gICAgICA8ZGl2PlxuICAgICAgICA8aDEgY2xhc3M9XCJicmFuZC1uYW1lXCI+Tm90ZXMgRmluZGVyPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhcHAtYmFyJywgQXBwQmFyKTtcbiIsImNsYXNzIEZvb3RlckJhciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgX3NoYWRvd1Jvb3QgPSBudWxsO1xuICBfc3R5bGUgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9zaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgdGhpcy5fc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB9XG5cbiAgX3VwZGF0ZVN0eWxlKCkge1xuICAgIHRoaXMuX3N0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cblxuICAgICAgZGl2IHtcbiAgICAgICAgcGFkZGluZzogMjRweCAyMHB4O1xuXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgX2VtcHR5Q29udGVudCgpIHtcbiAgICB0aGlzLl9zaGFkb3dSb290LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLl9lbXB0eUNvbnRlbnQoKTtcbiAgICB0aGlzLl91cGRhdGVTdHlsZSgpO1xuXG4gICAgdGhpcy5fc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLl9zdHlsZSk7XG4gICAgdGhpcy5fc2hhZG93Um9vdC5pbm5lckhUTUwgKz0gYCAgICAgIFxuICAgICAgPGRpdj5cbiAgICAgICAgTm90ZXMgRmluZGVyICZjb3B5OyAyMDI0XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuICB9XG59XG5cbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZm9vdGVyLWJhcicsIEZvb3RlckJhcik7XG4iLCJpbXBvcnQgJy4vYXBwLWJhci5qcyc7XG5pbXBvcnQgJy4vZm9vdGVyLWJhci5qcyc7XG5cbmltcG9ydCAnLi4vLi4vc3R5bGVzL3N0eWxlLmNzcyc7XG5cbmltcG9ydCAnLi9ub3RlLWxpc3QuanMnO1xuaW1wb3J0ICcuL25vdGUtaXRlbS5qcyc7XG5cbmltcG9ydCAnLi9zZWFyY2gtYmFyLmpzJztcbmltcG9ydCAnLi9zZWN0aW9uLXdpdGgtdGl0bGUuanMnO1xuXG5pbXBvcnQgJy4vcXVlcnktd2FpdGluZy5qcyc7XG5pbXBvcnQgJy4vc2VhcmNoLWxvYWRpbmcuanMnO1xuXG5pbXBvcnQgJy4uLy4uL2FwcC5qcyc7IiwiY2xhc3MgTG9hZGluZ1NwaW5uZXIgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XHJcbiAgICBfc2hhZG93Um9vdCA9IG51bGw7XHJcbiAgICBfc3R5bGUgPSBudWxsO1xyXG4gIFxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgIHN1cGVyKCk7XHJcbiAgICAgIHRoaXMuX3NoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcclxuICAgICAgdGhpcy5fc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xyXG4gICAgICB0aGlzLnJlbmRlcigpO1xyXG4gICAgfVxyXG4gIFxyXG4gICAgX3VwZGF0ZVN0eWxlKCkge1xyXG4gICAgICB0aGlzLl9zdHlsZS50ZXh0Q29udGVudCA9IGBcclxuICAgICAgICA6aG9zdCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHdpZHRoOiA1MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gICAgICAgICAgcG9zaXRpb246IGZpeGVkOyAvKiBDaGFuZ2VkIGZyb20gYWJzb2x1dGUgdG8gZml4ZWQgKi9cclxuICAgICAgICAgIHRvcDogNTAlO1xyXG4gICAgICAgICAgbGVmdDogNTAlO1xyXG4gICAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbiAgICAgICAgICB6LWluZGV4OiAxMDAwOyAvKiBFbnN1cmUgc3Bpbm5lciBhcHBlYXJzIGFib3ZlIG90aGVyIGNvbnRlbnQgKi9cclxuICAgICAgICAgIHBvaW50ZXItZXZlbnRzOiBub25lOyAvKiBFbnN1cmUgc3Bpbm5lciBkb2Vzbid0IGludGVyZmVyZSB3aXRoIHVzZXIgaW50ZXJhY3Rpb24gKi9cclxuICAgICAgICB9XHJcbiAgXHJcbiAgICAgICAgLnNwaW5uZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgICBib3JkZXI6IDRweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICAgICAgICBib3JkZXItdG9wOiA0cHggc29saWQgY29ybmZsb3dlcmJsdWU7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgICAgIH1cclxuICBcclxuICAgICAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgICAgMCUgeyB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTsgfVxyXG4gICAgICAgICAgMTAwJSB7IHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7IH1cclxuICAgICAgICB9XHJcbiAgICAgIGA7XHJcbiAgICB9XHJcbiAgXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgIHRoaXMuX3VwZGF0ZVN0eWxlKCk7XHJcbiAgICAgIHRoaXMuX3NoYWRvd1Jvb3QuYXBwZW5kQ2hpbGQodGhpcy5fc3R5bGUpO1xyXG4gICAgICB0aGlzLl9zaGFkb3dSb290LmlubmVySFRNTCArPSBgXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInNwaW5uZXJcIj48L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH1cclxuICB9XHJcbiAgXHJcbiAgY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsb2FkaW5nLXNwaW5uZXInLCBMb2FkaW5nU3Bpbm5lcik7XHJcbiAgIiwiY2xhc3MgTm90ZUl0ZW0gZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIF9zaGFkb3dSb290ID0gbnVsbDtcbiAgX3N0eWxlID0gbnVsbDtcbiAgX25vdGUgPSB7XG4gICAgaWQ6IG51bGwsXG4gICAgdGl0bGU6IG51bGwsXG4gICAgYm9keTogbnVsbCxcbiAgICBjcmVhdGVkQXQ6IG51bGwsXG4gIH07XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcbiAgICB0aGlzLl9zaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgdGhpcy5fc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB9XG5cbiAgX2VtcHR5Q29udGVudCgpIHtcbiAgICB0aGlzLl9zaGFkb3dSb290LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgc2V0IG5vdGUodmFsdWUpIHtcbiAgICBpZiAodmFsdWUgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0Jykge1xuICAgICAgdGhpcy5fbm90ZSA9IHZhbHVlO1xuICAgICAgdGhpcy5yZW5kZXIoKTsgLy8gQ2FsbCByZW5kZXIoKSBtZXRob2QgdG8gdXBkYXRlIHRoZSBjb250ZW50XG4gICAgfVxuICB9XG5cbiAgZ2V0IG5vdGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX25vdGU7XG4gIH1cblxuICBfdXBkYXRlU3R5bGUoKSB7XG4gICAgdGhpcy5fc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA4cHg7XG4gICAgICAgIGJveC1zaGFkb3c6IDAgMCAycHggMCByZ2JhKDAsIDAsIDAsIDAuNSk7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICB9XG4gICAgICAubm90ZS1pbmZvIHtcbiAgICAgICAgcGFkZGluZzogMTZweCAyNHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgICAubm90ZS1pbmZvX190aXRsZSBoMiB7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgfVxuICAgICAgLm5vdGUtaW5mb19fZGVzY3JpcHRpb24gcCB7XG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcbiAgICAgICAgLXdlYmtpdC1saW5lLWNsYW1wOiA1OyAvKiBudW1iZXIgb2YgbGluZXMgdG8gc2hvdyAqL1xuICAgICAgfVxuICAgICAgLm5vdGUtaW5mb19faWQge1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICBmb250LXNpemU6IDAuOWVtO1xuICAgICAgICBjb2xvcjogZ3JheTtcbiAgICAgIH1cbiAgICAgIC5ub3RlLWluZm9fX2FjdGlvbnMge1xuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgICAgIHJpZ2h0OiAxNnB4O1xuICAgICAgICB0b3A6IDE2cHg7XG4gICAgICB9XG4gICAgICAubm90ZS1pbmZvX19hY3Rpb25zIGJ1dHRvbiB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlNzRjM2M7XG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgICAgYm9yZGVyOiBub25lO1xuICAgICAgICBwYWRkaW5nOiAxMHB4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICB9XG4gICAgICAubm90ZS1pbmZvX19hY3Rpb25zIGJ1dHRvbjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNjMDM5MmI7XG4gICAgICB9XG4gICAgICAubW9kYWwge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgICAgIHotaW5kZXg6IDE7XG4gICAgICAgIGxlZnQ6IDA7XG4gICAgICAgIHRvcDogMDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwwLDAsMC40KTtcbiAgICAgIH1cbiAgICAgIC5tb2RhbC1jb250ZW50IHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2ZlZmVmZTtcbiAgICAgICAgbWFyZ2luOiAxNSUgYXV0bztcbiAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgIzg4ODtcbiAgICAgICAgd2lkdGg6IDgwJTtcbiAgICAgICAgbWF4LXdpZHRoOiAzMDBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgICAuY2xvc2Uge1xuICAgICAgICBjb2xvcjogI2FhYTtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgfVxuICAgICAgLmNsb3NlOmhvdmVyLFxuICAgICAgLmNsb3NlOmZvY3VzIHtcbiAgICAgICAgY29sb3I6IGJsYWNrO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgYXN5bmMgX2RlbGV0ZU5vdGUoKSB7XG4gICAgaWYgKHRoaXMuX25vdGUuaWQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbm90ZXMtYXBpLmRpY29kaW5nLmRldi92Mi9ub3Rlcy8ke3RoaXMuX25vdGUuaWR9YCwge1xuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIGlmIChyZXN1bHQuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgICBjb25zdCBzdWNjZXNzTW9kYWwgPSB0aGlzLl9zaGFkb3dSb290LmdldEVsZW1lbnRCeUlkKCdzdWNjZXNzTW9kYWwnKTtcbiAgICAgICAgICBpZiAoc3VjY2Vzc01vZGFsKSB7XG4gICAgICAgICAgICBzdWNjZXNzTW9kYWwuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAvLyBIYW5kbGUgZXJyb3JzIHNpbGVudGx5XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuX2VtcHR5Q29udGVudCgpO1xuICAgIHRoaXMuX3VwZGF0ZVN0eWxlKCk7XG5cbiAgICB0aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMuX3N0eWxlKTtcbiAgICB0aGlzLl9zaGFkb3dSb290LmlubmVySFRNTCArPSBgXG4gICAgICA8ZGl2IGNsYXNzPVwiY2FyZFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZS1pbmZvXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGUtaW5mb19fdGl0bGVcIj5cbiAgICAgICAgICAgIDxoMj4ke3RoaXMuX25vdGUudGl0bGUgfHwgJ05vIHRpdGxlIGF2YWlsYWJsZSd9PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwibm90ZS1pbmZvX19kZXNjcmlwdGlvblwiPlxuICAgICAgICAgICAgPHA+JHt0aGlzLl9ub3RlLmJvZHkgfHwgJ05vIGNvbnRlbnQgYXZhaWxhYmxlJ308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGUtaW5mb19fY3JlYXRlZC1hdFwiPlxuICAgICAgICAgICAgPHA+JHt0aGlzLl9ub3RlLmNyZWF0ZWRBdCA/IG5ldyBEYXRlKHRoaXMuX25vdGUuY3JlYXRlZEF0KS50b0xvY2FsZVN0cmluZygpIDogJ0RhdGUgbm90IGF2YWlsYWJsZSd9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJub3RlLWluZm9fX2lkXCI+XG4gICAgICAgICAgICA8cD5JRDogJHt0aGlzLl9ub3RlLmlkIHx8ICdJRCBub3QgYXZhaWxhYmxlJ308L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm5vdGUtaW5mb19fYWN0aW9uc1wiPlxuICAgICAgICAgICAgPGJ1dHRvbiBpZD1cImRlbGV0ZUJ1dHRvblwiPkRlbGV0ZTwvYnV0dG9uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBpZD1cInN1Y2Nlc3NNb2RhbFwiIGNsYXNzPVwibW9kYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIm1vZGFsLWNvbnRlbnRcIj5cbiAgICAgICAgICA8c3BhbiBjbGFzcz1cImNsb3NlXCI+JnRpbWVzOzwvc3Bhbj5cbiAgICAgICAgICA8cD5Ob3RlIGhhcyBiZWVuIGRlbGV0ZWQgc3VjY2Vzc2Z1bGx5LjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICBgO1xuXG4gICAgdGhpcy5fc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcjZGVsZXRlQnV0dG9uJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICB0aGlzLl9kZWxldGVOb3RlKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBjbG9zZU1vZGFsID0gdGhpcy5fc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCcuY2xvc2UnKTtcbiAgICBjbG9zZU1vZGFsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgY29uc3Qgc3VjY2Vzc01vZGFsID0gdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzc01vZGFsJyk7XG4gICAgICBpZiAoc3VjY2Vzc01vZGFsKSB7XG4gICAgICAgIHN1Y2Nlc3NNb2RhbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICBsb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgY29uc3Qgc3VjY2Vzc01vZGFsID0gdGhpcy5fc2hhZG93Um9vdC5nZXRFbGVtZW50QnlJZCgnc3VjY2Vzc01vZGFsJyk7XG4gICAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBzdWNjZXNzTW9kYWwpIHtcbiAgICAgICAgc3VjY2Vzc01vZGFsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgIGxvY2F0aW9uLnJlbG9hZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgLy8gTm8gbmVlZCB0byBmZXRjaCBub3RlcyBoZXJlOyB1c2UgdGhlIG5vdGUgcHJvcGVydHkgdG8gdXBkYXRlIHRoZSBkaXNwbGF5XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdub3RlLWl0ZW0nLCBOb3RlSXRlbSk7XG4iLCJpbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5jbGFzcyBOb3RlTGlzdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgX3NoYWRvd1Jvb3QgPSBudWxsO1xuICBfc3R5bGUgPSBudWxsO1xuXG4gIF9jb2x1bW4gPSAyO1xuICBfZ3V0dGVyID0gMTY7XG5cbiAgc3RhdGljIGdldCBvYnNlcnZlZEF0dHJpYnV0ZXMoKSB7XG4gICAgcmV0dXJuIFsnY29sdW1uJywgJ2d1dHRlciddO1xuICB9XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMuX3NoYWRvd1Jvb3QgPSB0aGlzLmF0dGFjaFNoYWRvdyh7IG1vZGU6ICdvcGVuJyB9KTtcbiAgICB0aGlzLl9zdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG5cbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgX3VwZGF0ZVN0eWxlKCkge1xuICAgIHRoaXMuX3N0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIH1cbiAgICAgIFxuICAgICAgLmxpc3Qge1xuICAgICAgICBkaXNwbGF5OiBncmlkO1xuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6ICR7JzFmciAnLnJlcGVhdCh0aGlzLmNvbHVtbil9O1xuICAgICAgXG4gICAgICAgIGdhcDogJHt0aGlzLmd1dHRlcn1weDtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgc2V0IGNvbHVtbih2YWx1ZSkge1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gTnVtYmVyKHZhbHVlKTtcbiAgICBpZiAoIVV0aWxzLmlzVmFsaWRJbnRlZ2VyKG5ld1ZhbHVlKSkgcmV0dXJuO1xuXG4gICAgdGhpcy5fY29sdW1uID0gdmFsdWU7XG4gIH1cblxuICBnZXQgY29sdW1uKCkge1xuICAgIHJldHVybiB0aGlzLl9jb2x1bW47XG4gIH1cblxuICBzZXQgZ3V0dGVyKHZhbHVlKSB7XG4gICAgY29uc3QgbmV3VmFsdWUgPSBOdW1iZXIodmFsdWUpO1xuICAgIGlmICghVXRpbHMuaXNWYWxpZEludGVnZXIobmV3VmFsdWUpKSByZXR1cm47XG5cbiAgICB0aGlzLl9ndXR0ZXIgPSB2YWx1ZTtcbiAgfVxuXG4gIGdldCBndXR0ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2d1dHRlcjtcbiAgfVxuXG4gIF9lbXB0eUNvbnRlbnQoKSB7XG4gICAgdGhpcy5fc2hhZG93Um9vdC5pbm5lckhUTUwgPSAnJztcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLl9lbXB0eUNvbnRlbnQoKTtcbiAgICB0aGlzLl91cGRhdGVTdHlsZSgpO1xuXG4gICAgdGhpcy5fc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLl9zdHlsZSk7XG4gICAgdGhpcy5fc2hhZG93Um9vdC5pbm5lckhUTUwgKz0gYFxuICAgICAgPGRpdiBjbGFzcz1cImxpc3RcIj5cbiAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgPC9kaXY+XG4gICAgYDtcbiAgfVxuXG4gIGF0dHJpYnV0ZUNoYW5nZWRDYWxsYmFjayhuYW1lLCBvbGRWYWx1ZSwgbmV3VmFsdWUpIHtcbiAgICBzd2l0Y2ggKG5hbWUpIHtcbiAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIHRoaXMuY29sdW1uID0gbmV3VmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnZ3V0dGVyJzpcbiAgICAgICAgdGhpcy5ndXR0ZXIgPSBuZXdWYWx1ZTtcbiAgICAgICAgYnJlYWs7XG4gICAgfVxuXG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxufVxuXG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ25vdGUtbGlzdCcsIE5vdGVMaXN0KTtcbiIsImNsYXNzIFF1ZXJ5V2FpdGluZyBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgX3NoYWRvd1Jvb3QgPSBudWxsO1xuICBfc3R5bGUgPSBudWxsO1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLl9zaGFkb3dSb290ID0gdGhpcy5hdHRhY2hTaGFkb3coeyBtb2RlOiAnb3BlbicgfSk7XG4gICAgdGhpcy5fc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB9XG5cbiAgX3VwZGF0ZVN0eWxlKCkge1xuICAgIHRoaXMuX3N0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBtYXJnaW4tYmxvY2s6IDFyZW07XG5cbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xuICAgICAgfVxuICAgIGA7XG4gIH1cblxuICBfZW1wdHlDb250ZW50KCkge1xuICAgIHRoaXMuX3NoYWRvd1Jvb3QuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLnJlbmRlcigpO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuX2VtcHR5Q29udGVudCgpO1xuICAgIHRoaXMuX3VwZGF0ZVN0eWxlKCk7XG5cbiAgICB0aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMuX3N0eWxlKTtcbiAgICB0aGlzLl9zaGFkb3dSb290LmlubmVySFRNTCArPSBgICAgICAgXG4gICAgICBXYWl0aW5nIGZvciBzZWFyY2gga2V5d29yZFxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdxdWVyeS13YWl0aW5nJywgUXVlcnlXYWl0aW5nKTtcbiIsImNsYXNzIFNlYXJjaEJhciBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgX3NoYWRvd1Jvb3QgPSBudWxsO1xuICBfc3R5bGUgPSBudWxsO1xuXG4gIF9zdWJtaXRFdmVudCA9ICdzdWJtaXQnO1xuICBfc2VhcmNoRXZlbnQgPSAnc2VhcmNoJztcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgIHRoaXMuX3N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBfZW1wdHlDb250ZW50KCkge1xuICAgIHRoaXMuX3NoYWRvd1Jvb3QuaW5uZXJIVE1MID0gJyc7XG4gIH1cblxuICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICB0aGlzLl9zaGFkb3dSb290XG4gICAgICAucXVlcnlTZWxlY3RvcignZm9ybScpXG4gICAgICAuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB0aGlzLl9vbkZvcm1TdWJtaXQoZXZlbnQsIHRoaXMpKTtcbiAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fc3VibWl0RXZlbnQsIHRoaXMuX29uU2VhcmNoQmFyU3VibWl0LmJpbmQodGhpcykpO1xuICB9XG5cbiAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5fc2hhZG93Um9vdFxuICAgICAgLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0nKVxuICAgICAgLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4gdGhpcy5fb25Gb3JtU3VibWl0KGV2ZW50LCB0aGlzKSk7XG4gICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMuX3N1Ym1pdEV2ZW50LCB0aGlzLl9vblNlYXJjaEJhclN1Ym1pdC5iaW5kKHRoaXMpKTtcbiAgfVxuXG4gIF9vbkZvcm1TdWJtaXQoZXZlbnQsIHNlYXJjaEJhckluc3RhbmNlKSB7XG4gICAgc2VhcmNoQmFySW5zdGFuY2UuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3N1Ym1pdCcpKTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgYXN5bmMgX29uU2VhcmNoQmFyU3VibWl0KCkge1xuICAgIGNvbnN0IHF1ZXJ5ID0gdGhpcy5fc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKCdpbnB1dCNpZCcpLnZhbHVlO1xuXG4gICAgaWYgKCFxdWVyeSkgcmV0dXJuO1xuXG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vbm90ZXMtYXBpLmRpY29kaW5nLmRldi92Mi9ub3Rlcy8ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KHRoaXMuX3NlYXJjaEV2ZW50LCB7XG4gICAgICAgICAgICBkZXRhaWw6IHsgbm90ZTogZGF0YS5kYXRhIH0sXG4gICAgICAgICAgICBidWJibGVzOiB0cnVlLFxuICAgICAgICAgIH0pLFxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vdGUgbm90IGZvdW5kLicpO1xuICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQoXG4gICAgICAgICAgbmV3IEN1c3RvbUV2ZW50KHRoaXMuX3NlYXJjaEV2ZW50LCB7XG4gICAgICAgICAgICBkZXRhaWw6IHsgbm90ZTogbnVsbCB9LFxuICAgICAgICAgICAgYnViYmxlczogdHJ1ZSxcbiAgICAgICAgICB9KSxcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZmV0Y2hpbmcgbm90ZTonLCBlcnJvcik7XG4gICAgfVxuICB9XG5cbiAgX3VwZGF0ZVN0eWxlKCkge1xuICAgIHRoaXMuX3N0eWxlLnRleHRDb250ZW50ID0gYFxuICAgICAgOmhvc3Qge1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XG4gICAgICB9XG4gICAgXG4gICAgICAuZmxvYXRpbmctZm9ybSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgICAgICBwYWRkaW5nOiAxNnB4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG5cbiAgICAgICAgcG9zaXRpb246IHN0aWNreTtcbiAgICAgICAgdG9wOiAxMHB4O1xuXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCAwIHJnYmEoMCwgMCwgMCwgMC4yKTtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1mb3JtIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgZ2FwOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLWZvcm0gLmZvcm0tZ3JvdXAge1xuICAgICAgICBmbGV4LWdyb3c6IDE7XG5cbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcblxuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiA2MHB4O1xuXG4gICAgICAgIHBhZGRpbmc6IDE0cHggMTBweCAwIDEwcHg7XG4gICAgICAgIGJvcmRlci1pbmxpbmU6IG5vbmU7XG4gICAgICAgIGJvcmRlci1ibG9jay1zdGFydDogbm9uZTtcbiAgICAgICAgYm9yZGVyLWJsb2NrLWVuZDogMXB4IHNvbGlkIGNvcm5mbG93ZXJibHVlO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1mb3JtIC5mb3JtLWdyb3VwIGlucHV0OmZvY3VzLXZpc2libGUge1xuICAgICAgICBvdXRsaW5lOiAwO1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLWZvcm0gLmZvcm0tZ3JvdXAgbGFiZWwge1xuICAgICAgICBsaW5lLWhlaWdodDogNjBweDtcbiAgICAgICAgZm9udC1zaXplOiAxZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGNvbG9yOiBjb3JuZmxvd2VyYmx1ZTtcblxuICAgICAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuXG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgdG9wOiAwO1xuICAgICAgICBsZWZ0OiAyMHB4O1xuXG4gICAgICAgIHVzZXItc2VsZWN0OiBub25lO1xuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcblxuICAgICAgICB0cmFuc2l0aW9uOiAxNTBtcyBhbGwgZWFzZS1pbi1vdXQ7XG4gICAgICB9XG5cbiAgICAgIC5zZWFyY2gtZm9ybSAuZm9ybS1ncm91cCBpbnB1dDpmb2N1cy12aXNpYmxlIH4gbGFiZWwsXG4gICAgICAuc2VhcmNoLWZvcm0gLmZvcm0tZ3JvdXAgaW5wdXQ6dmFsaWQgfiBsYWJlbCB7XG4gICAgICAgIGxlZnQ6IDEwcHg7XG4gICAgICAgIHRvcDogLTE2cHg7XG5cbiAgICAgICAgZm9udC1zaXplOiAwLjhlbTtcbiAgICAgIH1cblxuICAgICAgLnNlYXJjaC1mb3JtIGJ1dHRvbiB7XG4gICAgICAgIGJvcmRlcjogMDtcbiAgICAgICAgcGFkZGluZy1pbmxpbmU6IDI0cHg7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IGNvcm5mbG93ZXJibHVlO1xuXG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcblxuICAgICAgICB0cmFuc2l0aW9uOiAxMDBtcyBsaW5lYXI7XG4gICAgICB9XG5cbiAgICAgIC5zZWFyY2gtZm9ybSBidXR0b246aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNDQ4NWZmO1xuICAgICAgfVxuXG4gICAgICAuc2VhcmNoLWZvcm0gYnV0dG9uOmFjdGl2ZSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICM2YzlhZWU7XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLl9lbXB0eUNvbnRlbnQoKTtcbiAgICB0aGlzLl91cGRhdGVTdHlsZSgpO1xuXG4gICAgdGhpcy5fc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLl9zdHlsZSk7XG4gICAgdGhpcy5fc2hhZG93Um9vdC5pbm5lckhUTUwgKz0gYFxuICAgICAgPGRpdiBjbGFzcz1cImZsb2F0aW5nLWZvcm1cIj5cbiAgICAgICAgPGZvcm0gaWQ9XCJzZWFyY2hGb3JtXCIgY2xhc3M9XCJzZWFyY2gtZm9ybVwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWdyb3VwXCI+XG4gICAgICAgICAgICA8aW5wdXQgaWQ9XCJpZFwiIG5hbWU9XCJpZFwiIHR5cGU9XCJzZWFyY2hcIiByZXF1aXJlZCAvPlxuICAgICAgICAgICAgPGxhYmVsIGZvcj1cImlkXCI+Tm90ZSdzIElEPC9sYWJlbD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxidXR0b24+U2VhcmNoPC9idXR0b24+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzZWFyY2gtYmFyJywgU2VhcmNoQmFyKTtcbiIsImNsYXNzIFNlYXJjaExvYWRpbmcgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gIF9zaGFkb3dSb290ID0gbnVsbDtcbiAgX3N0eWxlID0gbnVsbDtcblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgIHRoaXMuX3N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgfVxuXG4gIF91cGRhdGVTdHlsZSgpIHtcbiAgICB0aGlzLl9zdHlsZS50ZXh0Q29udGVudCA9IGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgbWFyZ2luLWJsb2NrOiAxcmVtO1xuXG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgICAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41KTtcbiAgICAgIH1cbiAgICBgO1xuICB9XG5cbiAgX2VtcHR5Q29udGVudCgpIHtcbiAgICB0aGlzLl9zaGFkb3dSb290LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgdGhpcy5yZW5kZXIoKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICB0aGlzLl9lbXB0eUNvbnRlbnQoKTtcbiAgICB0aGlzLl91cGRhdGVTdHlsZSgpO1xuXG4gICAgdGhpcy5fc2hhZG93Um9vdC5hcHBlbmRDaGlsZCh0aGlzLl9zdHlsZSk7XG4gICAgdGhpcy5fc2hhZG93Um9vdC5pbm5lckhUTUwgKz0gYCAgICAgIFxuICAgICAgTG9hZGluZy4uLlxuICAgIGA7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzZWFyY2gtbG9hZGluZycsIFNlYXJjaExvYWRpbmcpO1xuIiwiY2xhc3MgU2VjdGlvbldpdGhUaXRsZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgX3NoYWRvd1Jvb3QgPSBudWxsO1xuICBfc3R5bGUgPSBudWxsO1xuXG4gIF90aXRsZSA9ICdORUVEIFNFQ1RJT04gVElUTEUnO1xuXG4gIHN0YXRpYyBnZXQgb2JzZXJ2ZWRBdHRyaWJ1dGVzKCkge1xuICAgIHJldHVybiBbJ3RpdGxlJ107XG4gIH1cblxuICBjb25zdHJ1Y3RvcigpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fc2hhZG93Um9vdCA9IHRoaXMuYXR0YWNoU2hhZG93KHsgbW9kZTogJ29wZW4nIH0pO1xuICAgIHRoaXMuX3N0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cblxuICBfdXBkYXRlU3R5bGUoKSB7XG4gICAgdGhpcy5fc3R5bGUudGV4dENvbnRlbnQgPSBgXG4gICAgICA6aG9zdCB7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgfVxuICAgICAgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIG1hcmdpbi1ibG9jay1lbmQ6IDJyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgICB9XG4gICAgYDtcbiAgfVxuXG4gIHNldCB0aXRsZSh2YWx1ZSkge1xuICAgIHRoaXMuX3RpdGxlID0gdmFsdWU7XG4gIH1cblxuICBnZXQgdGl0bGUoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3RpdGxlO1xuICB9XG5cbiAgX2VtcHR5Q29udGVudCgpIHtcbiAgICB0aGlzLl9zaGFkb3dSb290LmlubmVySFRNTCA9ICcnO1xuICB9XG5cbiAgcmVuZGVyKCkge1xuICAgIHRoaXMuX2VtcHR5Q29udGVudCgpO1xuICAgIHRoaXMuX3VwZGF0ZVN0eWxlKCk7XG5cbiAgICB0aGlzLl9zaGFkb3dSb290LmFwcGVuZENoaWxkKHRoaXMuX3N0eWxlKTtcbiAgICB0aGlzLl9zaGFkb3dSb290LmlubmVySFRNTCArPSBgXG4gICAgICA8c2VjdGlvbiBpZD1cIm5vdGVcIiBjbGFzcz1cIm5vdGVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cInRpdGxlLXNlY3Rpb25cIj5cbiAgICAgICAgICA8aDI+JHt0aGlzLnRpdGxlfTwvaDI+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHNsb3Q+PC9zbG90PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICBgO1xuICB9XG5cbiAgYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgIHN3aXRjaCAobmFtZSkge1xuICAgICAgY2FzZSAndGl0bGUnOlxuICAgICAgICB0aGlzLnRpdGxlID0gbmV3VmFsdWU7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cblxuICAgIHRoaXMucmVuZGVyKCk7XG4gIH1cbn1cblxuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzZWN0aW9uLXdpdGgtdGl0bGUnLCBTZWN0aW9uV2l0aFRpdGxlKTsiLCJjb25zdCBVdGlscyA9IHtcbiAgZW1wdHlFbGVtZW50OiAoZWxlbWVudCkgPT4ge1xuICAgIGVsZW1lbnQuaW5uZXJIVE1MID0gJyc7XG4gIH0sXG5cbiAgaXNWYWxpZEludGVnZXI6ICh2YWx1ZSkgPT4ge1xuICAgIHJldHVybiBOdW1iZXIuaXNJbnRlZ2VyKHZhbHVlKTtcbiAgfSxcblxuICBzaG93RWxlbWVudDogKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnJztcbiAgfSxcblxuICBoaWRlRWxlbWVudDogKGVsZW1lbnQpID0+IHtcbiAgICBlbGVtZW50LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIH0sXG5cbiAgZ2VuZXJhdGVSYW5kb21JZDogKCkgPT4ge1xuICAgIHJldHVybiBNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKDM2KS5zdWJzdHIoMiwgOSk7IC8vIEdlbmVyYXRlIHJhbmRvbSBhbHBoYW51bWVyaWMgaWRcbiAgfVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVXRpbHM7XG4iLCJpbXBvcnQgVXRpbHMgZnJvbSAnLi4vdXRpbHMuanMnO1xuXG5pbXBvcnQgJy4uL2NvbXBvbmVudHMvbG9hZGluZy1zcGlubmVyLmpzJztcblxuY29uc3QgaG9tZSA9ICgpID0+IHtcbiAgY29uc3Qgc2VhcmNoRm9ybUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWFyY2gtYmFyJyk7XG4gIGNvbnN0IGFkZE5vdGVGb3JtRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGROb3RlRm9ybScpO1xuXG4gIGNvbnN0IG5vdGVMaXN0Q29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNub3RlTGlzdENvbnRhaW5lcicpO1xuICBjb25zdCBub3RlTG9hZGluZ0VsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdzZWFyY2gtbG9hZGluZycpO1xuICBjb25zdCBub3RlTGlzdEVsZW1lbnQgPSBub3RlTGlzdENvbnRhaW5lckVsZW1lbnQucXVlcnlTZWxlY3Rvcignbm90ZS1saXN0Jyk7XG4gIGNvbnN0IG5vdGlmaWNhdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbm90aWZpY2F0aW9uJyk7XG5cbiAgY29uc3QgZmV0Y2hOb3RlcyA9IGFzeW5jIChxdWVyeSA9ICcnKSA9PiB7XG4gICAgc2hvd0NvbnRlbnRMb2FkaW5nKCk7IC8vIFNob3cgdGhlIHNwaW5uZXIgYmVmb3JlIGZldGNoaW5nIG5vdGVzXG5cbiAgICBsZXQgZW5kcG9pbnQ7XG4gICAgaWYgKHF1ZXJ5LnRyaW0oKSA9PT0gJycpIHtcbiAgICAgIGVuZHBvaW50ID0gJ2h0dHBzOi8vbm90ZXMtYXBpLmRpY29kaW5nLmRldi92Mi9ub3Rlcyc7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVuZHBvaW50ID0gYGh0dHBzOi8vbm90ZXMtYXBpLmRpY29kaW5nLmRldi92Mi9ub3Rlcy8ke2VuY29kZVVSSUNvbXBvbmVudChxdWVyeSl9YDtcbiAgICB9XG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaChlbmRwb2ludCk7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuXG4gICAgICBpZiAoZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShkYXRhLmRhdGEpKSB7XG4gICAgICAgICAgZGlzcGxheVJlc3VsdChkYXRhLmRhdGEpO1xuICAgICAgICB9IGVsc2UgaWYgKGRhdGEuZGF0YSkge1xuICAgICAgICAgIGRpc3BsYXlSZXN1bHQoW2RhdGEuZGF0YV0pOyAvLyBEaXNwbGF5IHNpbmdsZSBub3RlIGluIGFuIGFycmF5XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZGlzcGxheVJlc3VsdChbXSk7XG4gICAgICAgICAgZGlzcGxheU5vdGlmaWNhdGlvbignTm8gbm90ZXMgZm91bmQuJyk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlOb3RpZmljYXRpb24oJ0ZhaWxlZCB0byBmZXRjaCBub3Rlcy4nKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGxheU5vdGlmaWNhdGlvbignRmFpbGVkIHRvIGZldGNoIG5vdGVzLicpO1xuICAgIH1cblxuICAgIGhpZGVDb250ZW50TG9hZGluZygpOyAvLyBIaWRlIHRoZSBzcGlubmVyIGFmdGVyIG5vdGVzIGFyZSBmZXRjaGVkXG4gICAgc2hvd05vdGVMaXN0KCk7IC8vIFNob3cgdGhlIG5vdGVzIGxpc3RcbiAgfTtcblxuICBjb25zdCBkaXNwbGF5UmVzdWx0ID0gKG5vdGVzKSA9PiB7XG4gICAgY29uc3Qgbm90ZUl0ZW1FbGVtZW50cyA9IG5vdGVzLm1hcCgobm90ZSkgPT4ge1xuICAgICAgY29uc3Qgbm90ZUl0ZW1FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbm90ZS1pdGVtJyk7XG4gICAgICBub3RlSXRlbUVsZW1lbnQubm90ZSA9IG5vdGU7IC8vIFNldCB0aGUgbm90ZSBkYXRhIHRvIHRoZSBjdXN0b20gZWxlbWVudFxuICAgICAgcmV0dXJuIG5vdGVJdGVtRWxlbWVudDtcbiAgICB9KTtcbiAgXG4gICAgVXRpbHMuZW1wdHlFbGVtZW50KG5vdGVMaXN0RWxlbWVudCk7IC8vIEVuc3VyZSB0aGlzIGZ1bmN0aW9uIGNvcnJlY3RseSBjbGVhcnMgdGhlIGVsZW1lbnRcbiAgICBub3RlTGlzdEVsZW1lbnQuYXBwZW5kKC4uLm5vdGVJdGVtRWxlbWVudHMpO1xuICB9OyAgXG5cbiAgY29uc3Qgc2hvd05vdGVMaXN0ID0gKCkgPT4ge1xuICAgIEFycmF5LmZyb20obm90ZUxpc3RDb250YWluZXJFbGVtZW50LmNoaWxkcmVuKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICBVdGlscy5oaWRlRWxlbWVudChlbGVtZW50KTtcbiAgICB9KTtcbiAgICBVdGlscy5zaG93RWxlbWVudChub3RlTGlzdEVsZW1lbnQpO1xuICB9O1xuXG4gIGNvbnN0IHNob3dOb3RlTG9hZGluZyA9ICgpID0+IHtcbiAgICBBcnJheS5mcm9tKG5vdGVMaXN0Q29udGFpbmVyRWxlbWVudC5jaGlsZHJlbikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgVXRpbHMuaGlkZUVsZW1lbnQoZWxlbWVudCk7XG4gICAgfSk7XG4gICAgVXRpbHMuc2hvd0VsZW1lbnQobm90ZUxvYWRpbmdFbGVtZW50KTsgLy8gU2hvdyBub3RlIGxvYWRpbmcgZWxlbWVudFxuICB9O1xuXG4gIGNvbnN0IGhpZGVOb3RlTG9hZGluZyA9ICgpID0+IHtcbiAgICBVdGlscy5oaWRlRWxlbWVudChub3RlTG9hZGluZ0VsZW1lbnQpOyAvLyBIaWRlIG5vdGUgbG9hZGluZyBlbGVtZW50XG4gIH07XG5cbiAgY29uc3Qgc2hvd0NvbnRlbnRMb2FkaW5nID0gKCkgPT4ge1xuICAgIGNvbnN0IHNwaW5uZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdsb2FkaW5nLXNwaW5uZXInKTtcbiAgICBpZiAoc3Bpbm5lcikge1xuICAgICAgc3Bpbm5lci5zdHlsZS5kaXNwbGF5ID0gJ2Jsb2NrJzsgLy8gTWFrZSBzdXJlIGl0J3MgdmlzaWJsZVxuICAgIH1cbiAgfTtcblxuICBjb25zdCBoaWRlQ29udGVudExvYWRpbmcgPSAoKSA9PiB7XG4gICAgY29uc3Qgc3Bpbm5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2xvYWRpbmctc3Bpbm5lcicpO1xuICAgIGlmIChzcGlubmVyKSB7XG4gICAgICBzcGlubmVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7IC8vIEhpZGUgdGhlIHNwaW5uZXJcbiAgICB9XG4gIH07XG5cbiAgY29uc3Qgb25BZGROb3RlU3VibWl0ID0gYXN5bmMgKGV2ZW50KSA9PiB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgIGNvbnN0IHRpdGxlSW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGl0bGUnKS52YWx1ZTtcbiAgICBjb25zdCBib2R5SW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYm9keScpLnZhbHVlO1xuXG4gICAgaWYgKCF0aXRsZUlucHV0IHx8ICFib2R5SW5wdXQpIHtcbiAgICAgIGFsZXJ0KCdQbGVhc2UgZmlsbCBpbiBib3RoIHRpdGxlIGFuZCBib2R5IGZpZWxkcy4nKTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBzaG93Q29udGVudExvYWRpbmcoKTsgLy8gU2hvdyBzcGlubmVyIHdoaWxlIGFkZGluZyBub3RlXG5cbiAgICB0cnkge1xuICAgICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9ub3Rlcy1hcGkuZGljb2RpbmcuZGV2L3YyL25vdGVzJywge1xuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHsgdGl0bGU6IHRpdGxlSW5wdXQsIGJvZHk6IGJvZHlJbnB1dCB9KSxcbiAgICAgIH0pO1xuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcblxuICAgICAgaWYgKGRhdGEuc3RhdHVzID09PSAnc3VjY2VzcycpIHtcbiAgICAgICAgZmV0Y2hOb3RlcygpOyAvLyBSZWZyZXNoIHRoZSBub3RlcyBsaXN0XG4gICAgICAgIGRpc3BsYXlOb3RpZmljYXRpb24oYE5ldyBub3RlIGFkZGVkOiAke2RhdGEuZGF0YS50aXRsZX1gKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRpc3BsYXlOb3RpZmljYXRpb24oJ0ZhaWxlZCB0byBhZGQgbm90ZS4nKTtcbiAgICAgIH1cbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgZGlzcGxheU5vdGlmaWNhdGlvbignRmFpbGVkIHRvIGFkZCBub3RlLicpO1xuICAgIH1cblxuICAgIGhpZGVDb250ZW50TG9hZGluZygpOyAvLyBIaWRlIHNwaW5uZXIgYWZ0ZXIgYWRkaW5nIG5vdGVcblxuICAgIGV2ZW50LnRhcmdldC5yZXNldCgpO1xuICB9O1xuXG4gIGNvbnN0IGRpc3BsYXlOb3RpZmljYXRpb24gPSAobWVzc2FnZSkgPT4ge1xuICAgIG5vdGlmaWNhdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIFV0aWxzLnNob3dFbGVtZW50KG5vdGlmaWNhdGlvbkVsZW1lbnQpO1xuXG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBVdGlscy5oaWRlRWxlbWVudChub3RpZmljYXRpb25FbGVtZW50KTtcbiAgICB9LCAzMDAwKTsgLy8gSGlkZSBub3RpZmljYXRpb24gYWZ0ZXIgMyBzZWNvbmRzXG4gIH07XG5cbiAgLy8gSW5pdGlhbCBkaXNwbGF5IG9mIGFsbCBub3Rlc1xuICBmZXRjaE5vdGVzKCk7XG5cbiAgLy8gRXZlbnQgbGlzdGVuZXJzXG4gIHNlYXJjaEZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3NlYXJjaCcsIGFzeW5jIChldmVudCkgPT4ge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgeyBub3RlIH0gPSBldmVudC5kZXRhaWw7XG4gICAgXG4gICAgc2hvd0NvbnRlbnRMb2FkaW5nKCk7IC8vIFNob3cgc3Bpbm5lciB3aGlsZSBzZWFyY2hpbmdcbiAgICBcbiAgICBpZiAobm90ZSkge1xuICAgICAgZGlzcGxheVJlc3VsdChbbm90ZV0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBmZXRjaE5vdGVzKCk7IC8vIEZldGNoIG5vdGVzIHdpdGggZW1wdHkgcXVlcnkgdG8gc2hvdyBhbGwgbm90ZXNcbiAgICB9XG5cbiAgICBoaWRlQ29udGVudExvYWRpbmcoKTsgLy8gSGlkZSBzcGlubmVyIGFmdGVyIHNlYXJjaCByZXN1bHRzIGFyZSBkaXNwbGF5ZWRcbiAgfSk7XG5cbiAgYWRkTm90ZUZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIG9uQWRkTm90ZVN1Ym1pdCk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBob21lO1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiIiwiLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vLyBUaGlzIGVudHJ5IG1vZHVsZSBpcyByZWZlcmVuY2VkIGJ5IG90aGVyIG1vZHVsZXMgc28gaXQgY2FuJ3QgYmUgaW5saW5lZFxudmFyIF9fd2VicGFja19leHBvcnRzX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9zcmMvYXBwLmpzXCIpO1xuIiwiIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9