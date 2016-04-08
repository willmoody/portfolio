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

	'use strict';

	__webpack_require__(1);

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	// style-loader: Adds some css to the DOM by adding a <style> tag

	// load the styles
	var content = __webpack_require__(2);
	if(typeof content === 'string') content = [[module.id, content, '']];
	// add the styles to the DOM
	var update = __webpack_require__(4)(content, {});
	if(content.locals) module.exports = content.locals;
	// Hot Module Replacement
	if(false) {
		// When the styles change, update the <style> tags
		if(!content.locals) {
			module.hot.accept("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./master.sass", function() {
				var newContent = require("!!./../node_modules/css-loader/index.js!./../node_modules/sass-loader/index.js!./master.sass");
				if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
				update(newContent);
			});
		}
		// When the module is disposed, remove the <style> tags
		module.hot.dispose(function() { update(); });
	}

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	exports = module.exports = __webpack_require__(3)();
	// imports


	// module
	exports.push([module.id, "body {\n  font-family: 'Roboto', sans-serif;\n  background-image: url(\"/img/bg.png\"); }\n\nul li {\n  margin-right: 1em; }\n\n.headContainer {\n  height: 40em; }\n\n.aboutContainer {\n  position: relative;\n  height: 40em; }\n\n.greetDiv {\n  position: relative; }\n\n.greeting {\n  font-size: 120px;\n  font-family: 'Pacifico', cursive;\n  text-shadow: 10px 10px rgba(0, 0, 0, 0.12);\n  position: absolute;\n  top: -0.2em; }\n\n.subgreeting {\n  font-size: 30px;\n  position: absolute;\n  top: 7.5em;\n  left: 1em; }\n\n#githubBtn {\n  position: absolute;\n  top: 22em;\n  right: 32.8em; }\n\n#twitterBtn {\n  position: absolute;\n  top: 22em;\n  right: 23.5em; }\n\n#fccBtn {\n  position: absolute;\n  top: 22em;\n  right: 10.5em; }\n\n#liBtn {\n  position: absolute;\n  top: 22em;\n  right: 1em; }\n\n.aboutCard {\n  position: absolute;\n  background-color: #eeeeee;\n  width: 100%;\n  height: 30em;\n  border-radius: 3px; }\n\n.headshot {\n  position: relative;\n  width: 25em;\n  border-width: 0.3em;\n  border-style: solid;\n  border-color: #3949ab;\n  top: 2.5em;\n  left: 2.5em; }\n\n.aboutHeader {\n  position: absolute;\n  font-size: 45px;\n  color: #3949ab;\n  top: 1.2em;\n  left: 10.3em; }\n\n.aboutText {\n  position: absolute;\n  font-size: 25px;\n  top: 5.9em;\n  left: 18.7em;\n  right: 2.5em; }\n\n/* Tablet View */\n@media (max-width: 1540px) {\n  .headContainer {\n    height: 35em; }\n  .aboutContainer {\n    position: relative;\n    height: 40em; }\n  .greeting {\n    font-size: 100px;\n    font-family: 'Pacifico', cursive;\n    text-shadow: 10px 10px rgba(0, 0, 0, 0.12);\n    position: absolute;\n    top: -0.2em; }\n  .subgreeting {\n    font-size: 23px;\n    position: absolute;\n    top: 8.5em;\n    left: 1em; }\n  #githubBtn {\n    position: absolute;\n    top: 19em;\n    right: 32.8em; }\n  #twitterBtn {\n    position: absolute;\n    top: 19em;\n    right: 23.5em; }\n  #fccBtn {\n    position: absolute;\n    top: 19em;\n    right: 10.5em; }\n  #liBtn {\n    position: absolute;\n    top: 19em;\n    right: 1em; }\n  .aboutCard {\n    position: absolute;\n    background-image: url(\"/img/paperbg.png\");\n    width: 100%;\n    height: 30em;\n    border-style: solid;\n    border-width: 1px;\n    border-color: #e0e0e0; }\n  .headshot {\n    position: absolute;\n    width: 15em;\n    border-width: 0.9em;\n    border-style: solid;\n    border-color: #3949ab;\n    top: -7.5em;\n    left: 33%; }\n  .aboutHeader {\n    position: absolute;\n    font-size: 35px;\n    color: #3949ab;\n    top: 2em;\n    left: 20%; }\n  .aboutText {\n    position: absolute;\n    font-size: 25px;\n    top: 5.5em;\n    left: 2.2em;\n    right: 1.5em; } }\n\n/* Large Phone View */\n@media (max-width: 900px) {\n  .headContainer {\n    height: 36em; }\n  .aboutContainer {\n    position: relative;\n    height: 40em; }\n  .greeting {\n    font-size: 69px;\n    font-family: 'Pacifico', cursive;\n    text-shadow: 10px 10px rgba(0, 0, 0, 0.12);\n    position: absolute;\n    top: -0.2em; }\n  .subgreeting {\n    font-size: 20px;\n    position: absolute;\n    top: 7em;\n    left: 1em; }\n  #githubBtn {\n    position: absolute;\n    top: 19em;\n    right: 9em; }\n  #twitterBtn {\n    position: absolute;\n    top: 19em;\n    right: 0em; }\n  #fccBtn {\n    position: absolute;\n    top: 23.5em;\n    right: 9.3em; }\n  #liBtn {\n    position: absolute;\n    top: 23.5em;\n    right: 0em; }\n  .aboutCard {\n    position: absolute;\n    background-image: url(\"/img/paperbg.png\");\n    width: 100%;\n    height: 23em;\n    border-style: solid;\n    border-width: 1px;\n    border-color: #e0e0e0; }\n  .headshot {\n    position: relative;\n    width: 9em;\n    border-width: 0.4em;\n    border-style: solid;\n    border-color: #3949ab;\n    top: -3.8em;\n    left: 38%; }\n  .aboutHeader {\n    position: absolute;\n    font-size: 25px;\n    color: #3949ab;\n    top: 2.3em;\n    left: 20%; }\n  .aboutText {\n    position: absolute;\n    font-size: 17px;\n    top: 6.3em;\n    left: 1em;\n    right: 1em; } }\n\n/* Small Phone View */\n@media (max-width: 475px) {\n  .headContainer {\n    height: 30em; }\n  .aboutContainer {\n    position: relative;\n    height: 40em; }\n  .greeting {\n    font-size: 53px;\n    font-family: 'Pacifico', cursive;\n    text-shadow: 10px 10px rgba(0, 0, 0, 0.12);\n    position: absolute;\n    top: -0.2em; }\n  .subgreeting {\n    font-size: 15px;\n    position: absolute;\n    top: 8em;\n    left: 1em; }\n  #githubBtn {\n    position: absolute;\n    top: 15em;\n    right: 9em; }\n  #twitterBtn {\n    position: absolute;\n    top: 15em;\n    right: 0em; }\n  #fccBtn {\n    position: absolute;\n    top: 19.5em;\n    right: 9.3em; }\n  #liBtn {\n    position: absolute;\n    top: 19.5em;\n    right: 0em; }\n  .aboutCard {\n    position: absolute;\n    background-image: url(\"/img/paperbg.png\");\n    width: 100%;\n    height: 20em;\n    border-style: solid;\n    border-width: 1px;\n    border-color: #e0e0e0; }\n  .headshot {\n    position: relative;\n    width: 7em;\n    border-width: 0.4em;\n    border-style: solid;\n    border-color: #3949ab;\n    top: -3em;\n    left: 34%; }\n  .aboutHeader {\n    position: absolute;\n    font-size: 17px;\n    color: #3949ab;\n    top: 2.2em;\n    left: 13%; }\n  .aboutText {\n    position: absolute;\n    font-size: 15px;\n    top: 5em;\n    left: 0.7em;\n    right: 0.7em; } }\n", ""]);

	// exports


/***/ },
/* 3 */
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
/* 4 */
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