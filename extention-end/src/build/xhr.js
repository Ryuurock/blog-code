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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ({

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v2.1.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2014 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-04-28T16:01Z
 */

(function (global, factory) {

	if (typeof module === "object" && typeof module.exports === "object") {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ? factory(global, true) : function (w) {
			if (!w.document) {
				throw new Error("jQuery requires a window with a document");
			}
			return factory(w);
		};
	} else {
		factory(global);
	}

	// Pass this if window is not defined yet
})(typeof window !== "undefined" ? window : this, function (window, noGlobal) {

	// Support: Firefox 18+
	// Can't be in strict mode, several libs including ASP.NET trace
	// the stack via arguments.caller.callee and Firefox dies if
	// you try to trace through "use strict" call chains. (#13335)
	//

	var arr = [];

	var slice = arr.slice;

	var concat = arr.concat;

	var push = arr.push;

	var indexOf = arr.indexOf;

	var class2type = {};

	var toString = class2type.toString;

	var hasOwn = class2type.hasOwnProperty;

	var support = {};

	var
	// Use the correct document accordingly with window argument (sandbox)
	document = window.document,
	    version = "2.1.4",


	// Define a local copy of jQuery
	jQuery = function (selector, context) {
		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init(selector, context);
	},


	// Support: Android<4.1
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,


	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	    rdashAlpha = /-([\da-z])/gi,


	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function (all, letter) {
		return letter.toUpperCase();
	};

	jQuery.fn = jQuery.prototype = {
		// The current version of jQuery being used
		jquery: version,

		constructor: jQuery,

		// Start with an empty selector
		selector: "",

		// The default length of a jQuery object is 0
		length: 0,

		toArray: function () {
			return slice.call(this);
		},

		// Get the Nth element in the matched element set OR
		// Get the whole matched element set as a clean array
		get: function (num) {
			return num != null ?

			// Return just the one element from the set
			num < 0 ? this[num + this.length] : this[num] :

			// Return all the elements in a clean array
			slice.call(this);
		},

		// Take an array of elements and push it onto the stack
		// (returning the new matched element set)
		pushStack: function (elems) {

			// Build a new jQuery matched element set
			var ret = jQuery.merge(this.constructor(), elems);

			// Add the old object onto the stack (as a reference)
			ret.prevObject = this;
			ret.context = this.context;

			// Return the newly-formed element set
			return ret;
		},

		// Execute a callback for every element in the matched set.
		// (You can seed the arguments with an array of args, but this is
		// only used internally.)
		each: function (callback, args) {
			return jQuery.each(this, callback, args);
		},

		map: function (callback) {
			return this.pushStack(jQuery.map(this, function (elem, i) {
				return callback.call(elem, i, elem);
			}));
		},

		slice: function () {
			return this.pushStack(slice.apply(this, arguments));
		},

		first: function () {
			return this.eq(0);
		},

		last: function () {
			return this.eq(-1);
		},

		eq: function (i) {
			var len = this.length,
			    j = +i + (i < 0 ? len : 0);
			return this.pushStack(j >= 0 && j < len ? [this[j]] : []);
		},

		end: function () {
			return this.prevObject || this.constructor(null);
		},

		// For internal use only.
		// Behaves like an Array's method, not like a jQuery method.
		push: push,
		sort: arr.sort,
		splice: arr.splice
	};

	jQuery.extend = jQuery.fn.extend = function () {
		var options,
		    name,
		    src,
		    copy,
		    copyIsArray,
		    clone,
		    target = arguments[0] || {},
		    i = 1,
		    length = arguments.length,
		    deep = false;

		// Handle a deep copy situation
		if (typeof target === "boolean") {
			deep = target;

			// Skip the boolean and the target
			target = arguments[i] || {};
			i++;
		}

		// Handle case when target is a string or something (possible in deep copy)
		if (typeof target !== "object" && !jQuery.isFunction(target)) {
			target = {};
		}

		// Extend jQuery itself if only one argument is passed
		if (i === length) {
			target = this;
			i--;
		}

		for (; i < length; i++) {
			// Only deal with non-null/undefined values
			if ((options = arguments[i]) != null) {
				// Extend the base object
				for (name in options) {
					src = target[name];
					copy = options[name];

					// Prevent never-ending loop
					if (target === copy) {
						continue;
					}

					// Recurse if we're merging plain objects or arrays
					if (deep && copy && (jQuery.isPlainObject(copy) || (copyIsArray = jQuery.isArray(copy)))) {
						if (copyIsArray) {
							copyIsArray = false;
							clone = src && jQuery.isArray(src) ? src : [];
						} else {
							clone = src && jQuery.isPlainObject(src) ? src : {};
						}

						// Never move original objects, clone them
						target[name] = jQuery.extend(deep, clone, copy);

						// Don't bring in undefined values
					} else if (copy !== undefined) {
						target[name] = copy;
					}
				}
			}
		}

		// Return the modified object
		return target;
	};

	jQuery.extend({
		// Unique for each copy of jQuery on the page
		expando: "jQuery" + (version + Math.random()).replace(/\D/g, ""),

		// Assume jQuery is ready without the ready module
		isReady: true,

		error: function (msg) {
			throw new Error(msg);
		},

		noop: function () {},

		isFunction: function (obj) {
			return jQuery.type(obj) === "function";
		},

		isArray: Array.isArray,

		isWindow: function (obj) {
			return obj != null && obj === obj.window;
		},

		isNumeric: function (obj) {
			// parseFloat NaNs numeric-cast false positives (null|true|false|"")
			// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
			// subtraction forces infinities to NaN
			// adding 1 corrects loss of precision from parseFloat (#15100)
			return !jQuery.isArray(obj) && obj - parseFloat(obj) + 1 >= 0;
		},

		isPlainObject: function (obj) {
			// Not plain objects:
			// - Any object or value whose internal [[Class]] property is not "[object Object]"
			// - DOM nodes
			// - window
			if (jQuery.type(obj) !== "object" || obj.nodeType || jQuery.isWindow(obj)) {
				return false;
			}

			if (obj.constructor && !hasOwn.call(obj.constructor.prototype, "isPrototypeOf")) {
				return false;
			}

			// If the function hasn't returned already, we're confident that
			// |obj| is a plain object, created by {} or constructed with new Object
			return true;
		},

		isEmptyObject: function (obj) {
			var name;
			for (name in obj) {
				return false;
			}
			return true;
		},

		type: function (obj) {
			if (obj == null) {
				return obj + "";
			}
			// Support: Android<4.0, iOS<6 (functionish RegExp)
			return typeof obj === "object" || typeof obj === "function" ? class2type[toString.call(obj)] || "object" : typeof obj;
		},

		// Evaluates a script in a global context
		globalEval: function (code) {
			var script,
			    indirect = eval;

			code = jQuery.trim(code);

			if (code) {
				// If the code includes a valid, prologue position
				// strict mode pragma, execute code by injecting a
				// script tag into the document.
				if (code.indexOf("use strict") === 1) {
					script = document.createElement("script");
					script.text = code;
					document.head.appendChild(script).parentNode.removeChild(script);
				} else {
					// Otherwise, avoid the DOM node creation, insertion
					// and removal by using an indirect global eval
					indirect(code);
				}
			}
		},

		// Convert dashed to camelCase; used by the css and data modules
		// Support: IE9-11+
		// Microsoft forgot to hump their vendor prefix (#9572)
		camelCase: function (string) {
			return string.replace(rmsPrefix, "ms-").replace(rdashAlpha, fcamelCase);
		},

		nodeName: function (elem, name) {
			return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
		},

		// args is for internal usage only
		each: function (obj, callback, args) {
			var value,
			    i = 0,
			    length = obj.length,
			    isArray = isArraylike(obj);

			if (args) {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.apply(obj[i], args);

						if (value === false) {
							break;
						}
					}
				}

				// A special, fast, case for the most common use of each
			} else {
				if (isArray) {
					for (; i < length; i++) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				} else {
					for (i in obj) {
						value = callback.call(obj[i], i, obj[i]);

						if (value === false) {
							break;
						}
					}
				}
			}

			return obj;
		},

		// Support: Android<4.1
		trim: function (text) {
			return text == null ? "" : (text + "").replace(rtrim, "");
		},

		// results is for internal usage only
		makeArray: function (arr, results) {
			var ret = results || [];

			if (arr != null) {
				if (isArraylike(Object(arr))) {
					jQuery.merge(ret, typeof arr === "string" ? [arr] : arr);
				} else {
					push.call(ret, arr);
				}
			}

			return ret;
		},

		inArray: function (elem, arr, i) {
			return arr == null ? -1 : indexOf.call(arr, elem, i);
		},

		merge: function (first, second) {
			var len = +second.length,
			    j = 0,
			    i = first.length;

			for (; j < len; j++) {
				first[i++] = second[j];
			}

			first.length = i;

			return first;
		},

		grep: function (elems, callback, invert) {
			var callbackInverse,
			    matches = [],
			    i = 0,
			    length = elems.length,
			    callbackExpect = !invert;

			// Go through the array, only saving the items
			// that pass the validator function
			for (; i < length; i++) {
				callbackInverse = !callback(elems[i], i);
				if (callbackInverse !== callbackExpect) {
					matches.push(elems[i]);
				}
			}

			return matches;
		},

		// arg is for internal usage only
		map: function (elems, callback, arg) {
			var value,
			    i = 0,
			    length = elems.length,
			    isArray = isArraylike(elems),
			    ret = [];

			// Go through the array, translating each of the items to their new values
			if (isArray) {
				for (; i < length; i++) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}

				// Go through every key on the object,
			} else {
				for (i in elems) {
					value = callback(elems[i], i, arg);

					if (value != null) {
						ret.push(value);
					}
				}
			}

			// Flatten any nested arrays
			return concat.apply([], ret);
		},

		// A global GUID counter for objects
		guid: 1,

		// Bind a function to a context, optionally partially applying any
		// arguments.
		proxy: function (fn, context) {
			var tmp, args, proxy;

			if (typeof context === "string") {
				tmp = fn[context];
				context = fn;
				fn = tmp;
			}

			// Quick check to determine if target is callable, in the spec
			// this throws a TypeError, but we will just return undefined.
			if (!jQuery.isFunction(fn)) {
				return undefined;
			}

			// Simulated bind
			args = slice.call(arguments, 2);
			proxy = function () {
				return fn.apply(context || this, args.concat(slice.call(arguments)));
			};

			// Set the guid of unique handler to the same of original handler, so it can be removed
			proxy.guid = fn.guid = fn.guid || jQuery.guid++;

			return proxy;
		},

		now: Date.now,

		// jQuery.support is not used in Core but other projects attach their
		// properties to it so it needs to exist.
		support: support
	});

	// Populate the class2type map
	jQuery.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function (i, name) {
		class2type["[object " + name + "]"] = name.toLowerCase();
	});

	function isArraylike(obj) {

		// Support: iOS 8.2 (not reproducible in simulator)
		// `in` check used to prevent JIT error (gh-2145)
		// hasOwn isn't used here due to false negatives
		// regarding Nodelist length in IE
		var length = "length" in obj && obj.length,
		    type = jQuery.type(obj);

		if (type === "function" || jQuery.isWindow(obj)) {
			return false;
		}

		if (obj.nodeType === 1 && length) {
			return true;
		}

		return type === "array" || length === 0 || typeof length === "number" && length > 0 && length - 1 in obj;
	}
	var Sizzle =
	/*!
  * Sizzle CSS Selector Engine v2.2.0-pre
  * http://sizzlejs.com/
  *
  * Copyright 2008, 2014 jQuery Foundation, Inc. and other contributors
  * Released under the MIT license
  * http://jquery.org/license
  *
  * Date: 2014-12-16
  */
	function (window) {

		var i,
		    support,
		    Expr,
		    getText,
		    isXML,
		    tokenize,
		    compile,
		    select,
		    outermostContext,
		    sortInput,
		    hasDuplicate,


		// Local document vars
		setDocument,
		    document,
		    docElem,
		    documentIsHTML,
		    rbuggyQSA,
		    rbuggyMatches,
		    matches,
		    contains,


		// Instance-specific data
		expando = "sizzle" + 1 * new Date(),
		    preferredDoc = window.document,
		    dirruns = 0,
		    done = 0,
		    classCache = createCache(),
		    tokenCache = createCache(),
		    compilerCache = createCache(),
		    sortOrder = function (a, b) {
			if (a === b) {
				hasDuplicate = true;
			}
			return 0;
		},


		// General-purpose constants
		MAX_NEGATIVE = 1 << 31,


		// Instance methods
		hasOwn = {}.hasOwnProperty,
		    arr = [],
		    pop = arr.pop,
		    push_native = arr.push,
		    push = arr.push,
		    slice = arr.slice,

		// Use a stripped-down indexOf as it's faster than native
		// http://jsperf.com/thor-indexof-vs-for/5
		indexOf = function (list, elem) {
			var i = 0,
			    len = list.length;
			for (; i < len; i++) {
				if (list[i] === elem) {
					return i;
				}
			}
			return -1;
		},
		    booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",


		// Regular expressions

		// Whitespace characters http://www.w3.org/TR/css3-selectors/#whitespace
		whitespace = "[\\x20\\t\\r\\n\\f]",

		// http://www.w3.org/TR/css3-syntax/#characters
		characterEncoding = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",


		// Loosely modeled on CSS identifier characters
		// An unquoted value should be a CSS identifier http://www.w3.org/TR/css3-selectors/#attribute-selectors
		// Proper syntax: http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
		identifier = characterEncoding.replace("w", "w#"),


		// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
		attributes = "\\[" + whitespace + "*(" + characterEncoding + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace + "*\\]",
		    pseudos = ":(" + characterEncoding + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" + ")\\)|)",


		// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
		rwhitespace = new RegExp(whitespace + "+", "g"),
		    rtrim = new RegExp("^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g"),
		    rcomma = new RegExp("^" + whitespace + "*," + whitespace + "*"),
		    rcombinators = new RegExp("^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*"),
		    rattributeQuotes = new RegExp("=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g"),
		    rpseudo = new RegExp(pseudos),
		    ridentifier = new RegExp("^" + identifier + "$"),
		    matchExpr = {
			"ID": new RegExp("^#(" + characterEncoding + ")"),
			"CLASS": new RegExp("^\\.(" + characterEncoding + ")"),
			"TAG": new RegExp("^(" + characterEncoding.replace("w", "w*") + ")"),
			"ATTR": new RegExp("^" + attributes),
			"PSEUDO": new RegExp("^" + pseudos),
			"CHILD": new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace + "*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace + "*(\\d+)|))" + whitespace + "*\\)|)", "i"),
			"bool": new RegExp("^(?:" + booleans + ")$", "i"),
			// For use in libraries implementing .is()
			// We use this for POS matching in `select`
			"needsContext": new RegExp("^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i")
		},
		    rinputs = /^(?:input|select|textarea|button)$/i,
		    rheader = /^h\d$/i,
		    rnative = /^[^{]+\{\s*\[native \w/,


		// Easily-parseable/retrievable ID or TAG or CLASS selectors
		rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
		    rsibling = /[+~]/,
		    rescape = /'|\\/g,


		// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
		runescape = new RegExp("\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig"),
		    funescape = function (_, escaped, escapedWhitespace) {
			var high = "0x" + escaped - 0x10000;
			// NaN means non-codepoint
			// Support: Firefox<24
			// Workaround erroneous numeric interpretation of +"0x"
			return high !== high || escapedWhitespace ? escaped : high < 0 ?
			// BMP codepoint
			String.fromCharCode(high + 0x10000) :
			// Supplemental Plane codepoint (surrogate pair)
			String.fromCharCode(high >> 10 | 0xD800, high & 0x3FF | 0xDC00);
		},


		// Used for iframes
		// See setDocument()
		// Removing the function wrapper causes a "Permission Denied"
		// error in IE
		unloadHandler = function () {
			setDocument();
		};

		// Optimize for push.apply( _, NodeList )
		try {
			push.apply(arr = slice.call(preferredDoc.childNodes), preferredDoc.childNodes);
			// Support: Android<4.0
			// Detect silently failing push.apply
			arr[preferredDoc.childNodes.length].nodeType;
		} catch (e) {
			push = { apply: arr.length ?

				// Leverage slice if possible
				function (target, els) {
					push_native.apply(target, slice.call(els));
				} :

				// Support: IE<9
				// Otherwise append directly
				function (target, els) {
					var j = target.length,
					    i = 0;
					// Can't trust NodeList.length
					while (target[j++] = els[i++]) {}
					target.length = j - 1;
				}
			};
		}

		function Sizzle(selector, context, results, seed) {
			var match, elem, m, nodeType,
			// QSA vars
			i, groups, old, nid, newContext, newSelector;

			if ((context ? context.ownerDocument || context : preferredDoc) !== document) {
				setDocument(context);
			}

			context = context || document;
			results = results || [];
			nodeType = context.nodeType;

			if (typeof selector !== "string" || !selector || nodeType !== 1 && nodeType !== 9 && nodeType !== 11) {

				return results;
			}

			if (!seed && documentIsHTML) {

				// Try to shortcut find operations when possible (e.g., not under DocumentFragment)
				if (nodeType !== 11 && (match = rquickExpr.exec(selector))) {
					// Speed-up: Sizzle("#ID")
					if (m = match[1]) {
						if (nodeType === 9) {
							elem = context.getElementById(m);
							// Check parentNode to catch when Blackberry 4.6 returns
							// nodes that are no longer in the document (jQuery #6963)
							if (elem && elem.parentNode) {
								// Handle the case where IE, Opera, and Webkit return items
								// by name instead of ID
								if (elem.id === m) {
									results.push(elem);
									return results;
								}
							} else {
								return results;
							}
						} else {
							// Context is not a document
							if (context.ownerDocument && (elem = context.ownerDocument.getElementById(m)) && contains(context, elem) && elem.id === m) {
								results.push(elem);
								return results;
							}
						}

						// Speed-up: Sizzle("TAG")
					} else if (match[2]) {
						push.apply(results, context.getElementsByTagName(selector));
						return results;

						// Speed-up: Sizzle(".CLASS")
					} else if ((m = match[3]) && support.getElementsByClassName) {
						push.apply(results, context.getElementsByClassName(m));
						return results;
					}
				}

				// QSA path
				if (support.qsa && (!rbuggyQSA || !rbuggyQSA.test(selector))) {
					nid = old = expando;
					newContext = context;
					newSelector = nodeType !== 1 && selector;

					// qSA works strangely on Element-rooted queries
					// We can work around this by specifying an extra ID on the root
					// and working up from there (Thanks to Andrew Dupont for the technique)
					// IE 8 doesn't work on object elements
					if (nodeType === 1 && context.nodeName.toLowerCase() !== "object") {
						groups = tokenize(selector);

						if (old = context.getAttribute("id")) {
							nid = old.replace(rescape, "\\$&");
						} else {
							context.setAttribute("id", nid);
						}
						nid = "[id='" + nid + "'] ";

						i = groups.length;
						while (i--) {
							groups[i] = nid + toSelector(groups[i]);
						}
						newContext = rsibling.test(selector) && testContext(context.parentNode) || context;
						newSelector = groups.join(",");
					}

					if (newSelector) {
						try {
							push.apply(results, newContext.querySelectorAll(newSelector));
							return results;
						} catch (qsaError) {} finally {
							if (!old) {
								context.removeAttribute("id");
							}
						}
					}
				}
			}

			// All others
			return select(selector.replace(rtrim, "$1"), context, results, seed);
		}

		/**
   * Create key-value caches of limited size
   * @returns {Function(string, Object)} Returns the Object data after storing it on itself with
   *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
   *	deleting the oldest entry
   */
		function createCache() {
			var keys = [];

			function cache(key, value) {
				// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
				if (keys.push(key + " ") > Expr.cacheLength) {
					// Only keep the most recent entries
					delete cache[keys.shift()];
				}
				return cache[key + " "] = value;
			}
			return cache;
		}

		/**
   * Mark a function for special use by Sizzle
   * @param {Function} fn The function to mark
   */
		function markFunction(fn) {
			fn[expando] = true;
			return fn;
		}

		/**
   * Support testing using an element
   * @param {Function} fn Passed the created div and expects a boolean result
   */
		function assert(fn) {
			var div = document.createElement("div");

			try {
				return !!fn(div);
			} catch (e) {
				return false;
			} finally {
				// Remove from its parent by default
				if (div.parentNode) {
					div.parentNode.removeChild(div);
				}
				// release memory in IE
				div = null;
			}
		}

		/**
   * Adds the same handler for all of the specified attrs
   * @param {String} attrs Pipe-separated list of attributes
   * @param {Function} handler The method that will be applied
   */
		function addHandle(attrs, handler) {
			var arr = attrs.split("|"),
			    i = attrs.length;

			while (i--) {
				Expr.attrHandle[arr[i]] = handler;
			}
		}

		/**
   * Checks document order of two siblings
   * @param {Element} a
   * @param {Element} b
   * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
   */
		function siblingCheck(a, b) {
			var cur = b && a,
			    diff = cur && a.nodeType === 1 && b.nodeType === 1 && (~b.sourceIndex || MAX_NEGATIVE) - (~a.sourceIndex || MAX_NEGATIVE);

			// Use IE sourceIndex if available on both nodes
			if (diff) {
				return diff;
			}

			// Check if b follows a
			if (cur) {
				while (cur = cur.nextSibling) {
					if (cur === b) {
						return -1;
					}
				}
			}

			return a ? 1 : -1;
		}

		/**
   * Returns a function to use in pseudos for input types
   * @param {String} type
   */
		function createInputPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return name === "input" && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for buttons
   * @param {String} type
   */
		function createButtonPseudo(type) {
			return function (elem) {
				var name = elem.nodeName.toLowerCase();
				return (name === "input" || name === "button") && elem.type === type;
			};
		}

		/**
   * Returns a function to use in pseudos for positionals
   * @param {Function} fn
   */
		function createPositionalPseudo(fn) {
			return markFunction(function (argument) {
				argument = +argument;
				return markFunction(function (seed, matches) {
					var j,
					    matchIndexes = fn([], seed.length, argument),
					    i = matchIndexes.length;

					// Match elements found at the specified indexes
					while (i--) {
						if (seed[j = matchIndexes[i]]) {
							seed[j] = !(matches[j] = seed[j]);
						}
					}
				});
			});
		}

		/**
   * Checks a node for validity as a Sizzle context
   * @param {Element|Object=} context
   * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
   */
		function testContext(context) {
			return context && typeof context.getElementsByTagName !== "undefined" && context;
		}

		// Expose support vars for convenience
		support = Sizzle.support = {};

		/**
   * Detects XML nodes
   * @param {Element|Object} elem An element or a document
   * @returns {Boolean} True iff elem is a non-HTML XML node
   */
		isXML = Sizzle.isXML = function (elem) {
			// documentElement is verified for cases where it doesn't yet exist
			// (such as loading iframes in IE - #4833)
			var documentElement = elem && (elem.ownerDocument || elem).documentElement;
			return documentElement ? documentElement.nodeName !== "HTML" : false;
		};

		/**
   * Sets document-related variables once based on the current document
   * @param {Element|Object} [doc] An element or document object to use to set the document
   * @returns {Object} Returns the current document
   */
		setDocument = Sizzle.setDocument = function (node) {
			var hasCompare,
			    parent,
			    doc = node ? node.ownerDocument || node : preferredDoc;

			// If no document and documentElement is available, return
			if (doc === document || doc.nodeType !== 9 || !doc.documentElement) {
				return document;
			}

			// Set our document
			document = doc;
			docElem = doc.documentElement;
			parent = doc.defaultView;

			// Support: IE>8
			// If iframe document is assigned to "document" variable and if iframe has been reloaded,
			// IE will throw "permission denied" error when accessing "document" variable, see jQuery #13936
			// IE6-8 do not support the defaultView property so parent will be undefined
			if (parent && parent !== parent.top) {
				// IE11 does not have attachEvent, so all must suffer
				if (parent.addEventListener) {
					parent.addEventListener("unload", unloadHandler, false);
				} else if (parent.attachEvent) {
					parent.attachEvent("onunload", unloadHandler);
				}
			}

			/* Support tests
   ---------------------------------------------------------------------- */
			documentIsHTML = !isXML(doc);

			/* Attributes
   ---------------------------------------------------------------------- */

			// Support: IE<8
			// Verify that getAttribute really returns attributes and not properties
			// (excepting IE8 booleans)
			support.attributes = assert(function (div) {
				div.className = "i";
				return !div.getAttribute("className");
			});

			/* getElement(s)By*
   ---------------------------------------------------------------------- */

			// Check if getElementsByTagName("*") returns only elements
			support.getElementsByTagName = assert(function (div) {
				div.appendChild(doc.createComment(""));
				return !div.getElementsByTagName("*").length;
			});

			// Support: IE<9
			support.getElementsByClassName = rnative.test(doc.getElementsByClassName);

			// Support: IE<10
			// Check if getElementById returns elements by name
			// The broken getElementById methods don't pick up programatically-set names,
			// so use a roundabout getElementsByName test
			support.getById = assert(function (div) {
				docElem.appendChild(div).id = expando;
				return !doc.getElementsByName || !doc.getElementsByName(expando).length;
			});

			// ID find and filter
			if (support.getById) {
				Expr.find["ID"] = function (id, context) {
					if (typeof context.getElementById !== "undefined" && documentIsHTML) {
						var m = context.getElementById(id);
						// Check parentNode to catch when Blackberry 4.6 returns
						// nodes that are no longer in the document #6963
						return m && m.parentNode ? [m] : [];
					}
				};
				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						return elem.getAttribute("id") === attrId;
					};
				};
			} else {
				// Support: IE6/7
				// getElementById is not reliable as a find shortcut
				delete Expr.find["ID"];

				Expr.filter["ID"] = function (id) {
					var attrId = id.replace(runescape, funescape);
					return function (elem) {
						var node = typeof elem.getAttributeNode !== "undefined" && elem.getAttributeNode("id");
						return node && node.value === attrId;
					};
				};
			}

			// Tag
			Expr.find["TAG"] = support.getElementsByTagName ? function (tag, context) {
				if (typeof context.getElementsByTagName !== "undefined") {
					return context.getElementsByTagName(tag);

					// DocumentFragment nodes don't have gEBTN
				} else if (support.qsa) {
					return context.querySelectorAll(tag);
				}
			} : function (tag, context) {
				var elem,
				    tmp = [],
				    i = 0,

				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName(tag);

				// Filter out possible comments
				if (tag === "*") {
					while (elem = results[i++]) {
						if (elem.nodeType === 1) {
							tmp.push(elem);
						}
					}

					return tmp;
				}
				return results;
			};

			// Class
			Expr.find["CLASS"] = support.getElementsByClassName && function (className, context) {
				if (documentIsHTML) {
					return context.getElementsByClassName(className);
				}
			};

			/* QSA/matchesSelector
   ---------------------------------------------------------------------- */

			// QSA and matchesSelector support

			// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
			rbuggyMatches = [];

			// qSa(:focus) reports false when true (Chrome 21)
			// We allow this because of a bug in IE8/9 that throws an error
			// whenever `document.activeElement` is accessed on an iframe
			// So, we allow :focus to pass through QSA all the time to avoid the IE error
			// See http://bugs.jquery.com/ticket/13378
			rbuggyQSA = [];

			if (support.qsa = rnative.test(doc.querySelectorAll)) {
				// Build QSA regex
				// Regex strategy adopted from Diego Perini
				assert(function (div) {
					// Select is set to empty string on purpose
					// This is to test IE's treatment of not explicitly
					// setting a boolean content attribute,
					// since its presence should be enough
					// http://bugs.jquery.com/ticket/12359
					docElem.appendChild(div).innerHTML = "<a id='" + expando + "'></a>" + "<select id='" + expando + "-\f]' msallowcapture=''>" + "<option selected=''></option></select>";

					// Support: IE8, Opera 11-12.16
					// Nothing should be selected when empty strings follow ^= or $= or *=
					// The test attribute must be unknown in Opera but "safe" for WinRT
					// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
					if (div.querySelectorAll("[msallowcapture^='']").length) {
						rbuggyQSA.push("[*^$]=" + whitespace + "*(?:''|\"\")");
					}

					// Support: IE8
					// Boolean attributes and "value" are not treated correctly
					if (!div.querySelectorAll("[selected]").length) {
						rbuggyQSA.push("\\[" + whitespace + "*(?:value|" + booleans + ")");
					}

					// Support: Chrome<29, Android<4.2+, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.7+
					if (!div.querySelectorAll("[id~=" + expando + "-]").length) {
						rbuggyQSA.push("~=");
					}

					// Webkit/Opera - :checked should return selected option elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					// IE8 throws error here and will not see later tests
					if (!div.querySelectorAll(":checked").length) {
						rbuggyQSA.push(":checked");
					}

					// Support: Safari 8+, iOS 8+
					// https://bugs.webkit.org/show_bug.cgi?id=136851
					// In-page `selector#id sibing-combinator selector` fails
					if (!div.querySelectorAll("a#" + expando + "+*").length) {
						rbuggyQSA.push(".#.+[+~]");
					}
				});

				assert(function (div) {
					// Support: Windows 8 Native Apps
					// The type and name attributes are restricted during .innerHTML assignment
					var input = doc.createElement("input");
					input.setAttribute("type", "hidden");
					div.appendChild(input).setAttribute("name", "D");

					// Support: IE8
					// Enforce case-sensitivity of name attribute
					if (div.querySelectorAll("[name=d]").length) {
						rbuggyQSA.push("name" + whitespace + "*[*^$|!~]?=");
					}

					// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
					// IE8 throws error here and will not see later tests
					if (!div.querySelectorAll(":enabled").length) {
						rbuggyQSA.push(":enabled", ":disabled");
					}

					// Opera 10-11 does not throw on post-comma invalid pseudos
					div.querySelectorAll("*,:x");
					rbuggyQSA.push(",.*:");
				});
			}

			if (support.matchesSelector = rnative.test(matches = docElem.matches || docElem.webkitMatchesSelector || docElem.mozMatchesSelector || docElem.oMatchesSelector || docElem.msMatchesSelector)) {

				assert(function (div) {
					// Check to see if it's possible to do matchesSelector
					// on a disconnected node (IE 9)
					support.disconnectedMatch = matches.call(div, "div");

					// This should fail with an exception
					// Gecko does not error, returns false instead
					matches.call(div, "[s!='']:x");
					rbuggyMatches.push("!=", pseudos);
				});
			}

			rbuggyQSA = rbuggyQSA.length && new RegExp(rbuggyQSA.join("|"));
			rbuggyMatches = rbuggyMatches.length && new RegExp(rbuggyMatches.join("|"));

			/* Contains
   ---------------------------------------------------------------------- */
			hasCompare = rnative.test(docElem.compareDocumentPosition);

			// Element contains another
			// Purposefully does not implement inclusive descendent
			// As in, an element does not contain itself
			contains = hasCompare || rnative.test(docElem.contains) ? function (a, b) {
				var adown = a.nodeType === 9 ? a.documentElement : a,
				    bup = b && b.parentNode;
				return a === bup || !!(bup && bup.nodeType === 1 && (adown.contains ? adown.contains(bup) : a.compareDocumentPosition && a.compareDocumentPosition(bup) & 16));
			} : function (a, b) {
				if (b) {
					while (b = b.parentNode) {
						if (b === a) {
							return true;
						}
					}
				}
				return false;
			};

			/* Sorting
   ---------------------------------------------------------------------- */

			// Document order sorting
			sortOrder = hasCompare ? function (a, b) {

				// Flag for duplicate removal
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				// Sort on method existence if only one input has compareDocumentPosition
				var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
				if (compare) {
					return compare;
				}

				// Calculate position if both inputs belong to the same document
				compare = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) :

				// Otherwise we know they are disconnected
				1;

				// Disconnected nodes
				if (compare & 1 || !support.sortDetached && b.compareDocumentPosition(a) === compare) {

					// Choose the first element that is related to our preferred document
					if (a === doc || a.ownerDocument === preferredDoc && contains(preferredDoc, a)) {
						return -1;
					}
					if (b === doc || b.ownerDocument === preferredDoc && contains(preferredDoc, b)) {
						return 1;
					}

					// Maintain original order
					return sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;
				}

				return compare & 4 ? -1 : 1;
			} : function (a, b) {
				// Exit early if the nodes are identical
				if (a === b) {
					hasDuplicate = true;
					return 0;
				}

				var cur,
				    i = 0,
				    aup = a.parentNode,
				    bup = b.parentNode,
				    ap = [a],
				    bp = [b];

				// Parentless nodes are either documents or disconnected
				if (!aup || !bup) {
					return a === doc ? -1 : b === doc ? 1 : aup ? -1 : bup ? 1 : sortInput ? indexOf(sortInput, a) - indexOf(sortInput, b) : 0;

					// If the nodes are siblings, we can do a quick check
				} else if (aup === bup) {
					return siblingCheck(a, b);
				}

				// Otherwise we need full lists of their ancestors for comparison
				cur = a;
				while (cur = cur.parentNode) {
					ap.unshift(cur);
				}
				cur = b;
				while (cur = cur.parentNode) {
					bp.unshift(cur);
				}

				// Walk down the tree looking for a discrepancy
				while (ap[i] === bp[i]) {
					i++;
				}

				return i ?
				// Do a sibling check if the nodes have a common ancestor
				siblingCheck(ap[i], bp[i]) :

				// Otherwise nodes in our document sort first
				ap[i] === preferredDoc ? -1 : bp[i] === preferredDoc ? 1 : 0;
			};

			return doc;
		};

		Sizzle.matches = function (expr, elements) {
			return Sizzle(expr, null, null, elements);
		};

		Sizzle.matchesSelector = function (elem, expr) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			// Make sure that attribute selectors are quoted
			expr = expr.replace(rattributeQuotes, "='$1']");

			if (support.matchesSelector && documentIsHTML && (!rbuggyMatches || !rbuggyMatches.test(expr)) && (!rbuggyQSA || !rbuggyQSA.test(expr))) {

				try {
					var ret = matches.call(elem, expr);

					// IE 9's matchesSelector returns false on disconnected nodes
					if (ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11) {
						return ret;
					}
				} catch (e) {}
			}

			return Sizzle(expr, document, null, [elem]).length > 0;
		};

		Sizzle.contains = function (context, elem) {
			// Set document vars if needed
			if ((context.ownerDocument || context) !== document) {
				setDocument(context);
			}
			return contains(context, elem);
		};

		Sizzle.attr = function (elem, name) {
			// Set document vars if needed
			if ((elem.ownerDocument || elem) !== document) {
				setDocument(elem);
			}

			var fn = Expr.attrHandle[name.toLowerCase()],

			// Don't get fooled by Object.prototype properties (jQuery #13807)
			val = fn && hasOwn.call(Expr.attrHandle, name.toLowerCase()) ? fn(elem, name, !documentIsHTML) : undefined;

			return val !== undefined ? val : support.attributes || !documentIsHTML ? elem.getAttribute(name) : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
		};

		Sizzle.error = function (msg) {
			throw new Error("Syntax error, unrecognized expression: " + msg);
		};

		/**
   * Document sorting and removing duplicates
   * @param {ArrayLike} results
   */
		Sizzle.uniqueSort = function (results) {
			var elem,
			    duplicates = [],
			    j = 0,
			    i = 0;

			// Unless we *know* we can detect duplicates, assume their presence
			hasDuplicate = !support.detectDuplicates;
			sortInput = !support.sortStable && results.slice(0);
			results.sort(sortOrder);

			if (hasDuplicate) {
				while (elem = results[i++]) {
					if (elem === results[i]) {
						j = duplicates.push(i);
					}
				}
				while (j--) {
					results.splice(duplicates[j], 1);
				}
			}

			// Clear input after sorting to release objects
			// See https://github.com/jquery/sizzle/pull/225
			sortInput = null;

			return results;
		};

		/**
   * Utility function for retrieving the text value of an array of DOM nodes
   * @param {Array|Element} elem
   */
		getText = Sizzle.getText = function (elem) {
			var node,
			    ret = "",
			    i = 0,
			    nodeType = elem.nodeType;

			if (!nodeType) {
				// If no nodeType, this is expected to be an array
				while (node = elem[i++]) {
					// Do not traverse comment nodes
					ret += getText(node);
				}
			} else if (nodeType === 1 || nodeType === 9 || nodeType === 11) {
				// Use textContent for elements
				// innerText usage removed for consistency of new lines (jQuery #11153)
				if (typeof elem.textContent === "string") {
					return elem.textContent;
				} else {
					// Traverse its children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						ret += getText(elem);
					}
				}
			} else if (nodeType === 3 || nodeType === 4) {
				return elem.nodeValue;
			}
			// Do not include comment or processing instruction nodes

			return ret;
		};

		Expr = Sizzle.selectors = {

			// Can be adjusted by the user
			cacheLength: 50,

			createPseudo: markFunction,

			match: matchExpr,

			attrHandle: {},

			find: {},

			relative: {
				">": { dir: "parentNode", first: true },
				" ": { dir: "parentNode" },
				"+": { dir: "previousSibling", first: true },
				"~": { dir: "previousSibling" }
			},

			preFilter: {
				"ATTR": function (match) {
					match[1] = match[1].replace(runescape, funescape);

					// Move the given value to match[3] whether quoted or unquoted
					match[3] = (match[3] || match[4] || match[5] || "").replace(runescape, funescape);

					if (match[2] === "~=") {
						match[3] = " " + match[3] + " ";
					}

					return match.slice(0, 4);
				},

				"CHILD": function (match) {
					/* matches from matchExpr["CHILD"]
     	1 type (only|nth|...)
     	2 what (child|of-type)
     	3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
     	4 xn-component of xn+y argument ([+-]?\d*n|)
     	5 sign of xn-component
     	6 x of xn-component
     	7 sign of y-component
     	8 y of y-component
     */
					match[1] = match[1].toLowerCase();

					if (match[1].slice(0, 3) === "nth") {
						// nth-* requires argument
						if (!match[3]) {
							Sizzle.error(match[0]);
						}

						// numeric x and y parameters for Expr.filter.CHILD
						// remember that false/true cast respectively to 0/1
						match[4] = +(match[4] ? match[5] + (match[6] || 1) : 2 * (match[3] === "even" || match[3] === "odd"));
						match[5] = +(match[7] + match[8] || match[3] === "odd");

						// other types prohibit arguments
					} else if (match[3]) {
						Sizzle.error(match[0]);
					}

					return match;
				},

				"PSEUDO": function (match) {
					var excess,
					    unquoted = !match[6] && match[2];

					if (matchExpr["CHILD"].test(match[0])) {
						return null;
					}

					// Accept quoted arguments as-is
					if (match[3]) {
						match[2] = match[4] || match[5] || "";

						// Strip excess characters from unquoted arguments
					} else if (unquoted && rpseudo.test(unquoted) && (
					// Get excess from tokenize (recursively)
					excess = tokenize(unquoted, true)) && (
					// advance to the next closing parenthesis
					excess = unquoted.indexOf(")", unquoted.length - excess) - unquoted.length)) {

						// excess is a negative index
						match[0] = match[0].slice(0, excess);
						match[2] = unquoted.slice(0, excess);
					}

					// Return only captures needed by the pseudo filter method (type and argument)
					return match.slice(0, 3);
				}
			},

			filter: {

				"TAG": function (nodeNameSelector) {
					var nodeName = nodeNameSelector.replace(runescape, funescape).toLowerCase();
					return nodeNameSelector === "*" ? function () {
						return true;
					} : function (elem) {
						return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
					};
				},

				"CLASS": function (className) {
					var pattern = classCache[className + " "];

					return pattern || (pattern = new RegExp("(^|" + whitespace + ")" + className + "(" + whitespace + "|$)")) && classCache(className, function (elem) {
						return pattern.test(typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "");
					});
				},

				"ATTR": function (name, operator, check) {
					return function (elem) {
						var result = Sizzle.attr(elem, name);

						if (result == null) {
							return operator === "!=";
						}
						if (!operator) {
							return true;
						}

						result += "";

						return operator === "=" ? result === check : operator === "!=" ? result !== check : operator === "^=" ? check && result.indexOf(check) === 0 : operator === "*=" ? check && result.indexOf(check) > -1 : operator === "$=" ? check && result.slice(-check.length) === check : operator === "~=" ? (" " + result.replace(rwhitespace, " ") + " ").indexOf(check) > -1 : operator === "|=" ? result === check || result.slice(0, check.length + 1) === check + "-" : false;
					};
				},

				"CHILD": function (type, what, argument, first, last) {
					var simple = type.slice(0, 3) !== "nth",
					    forward = type.slice(-4) !== "last",
					    ofType = what === "of-type";

					return first === 1 && last === 0 ?

					// Shortcut for :nth-*(n)
					function (elem) {
						return !!elem.parentNode;
					} : function (elem, context, xml) {
						var cache,
						    outerCache,
						    node,
						    diff,
						    nodeIndex,
						    start,
						    dir = simple !== forward ? "nextSibling" : "previousSibling",
						    parent = elem.parentNode,
						    name = ofType && elem.nodeName.toLowerCase(),
						    useCache = !xml && !ofType;

						if (parent) {

							// :(first|last|only)-(child|of-type)
							if (simple) {
								while (dir) {
									node = elem;
									while (node = node[dir]) {
										if (ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) {
											return false;
										}
									}
									// Reverse direction for :only-* (if we haven't yet done so)
									start = dir = type === "only" && !start && "nextSibling";
								}
								return true;
							}

							start = [forward ? parent.firstChild : parent.lastChild];

							// non-xml :nth-child(...) stores cache data on `parent`
							if (forward && useCache) {
								// Seek `elem` from a previously-cached index
								outerCache = parent[expando] || (parent[expando] = {});
								cache = outerCache[type] || [];
								nodeIndex = cache[0] === dirruns && cache[1];
								diff = cache[0] === dirruns && cache[2];
								node = nodeIndex && parent.childNodes[nodeIndex];

								while (node = ++nodeIndex && node && node[dir] || (

								// Fallback to seeking `elem` from the start
								diff = nodeIndex = 0) || start.pop()) {

									// When found, cache indexes on `parent` and break
									if (node.nodeType === 1 && ++diff && node === elem) {
										outerCache[type] = [dirruns, nodeIndex, diff];
										break;
									}
								}

								// Use previously-cached element index if available
							} else if (useCache && (cache = (elem[expando] || (elem[expando] = {}))[type]) && cache[0] === dirruns) {
								diff = cache[1];

								// xml :nth-child(...) or :nth-last-child(...) or :nth(-last)?-of-type(...)
							} else {
								// Use the same loop as above to seek `elem` from the start
								while (node = ++nodeIndex && node && node[dir] || (diff = nodeIndex = 0) || start.pop()) {

									if ((ofType ? node.nodeName.toLowerCase() === name : node.nodeType === 1) && ++diff) {
										// Cache the index of each encountered element
										if (useCache) {
											(node[expando] || (node[expando] = {}))[type] = [dirruns, diff];
										}

										if (node === elem) {
											break;
										}
									}
								}
							}

							// Incorporate the offset, then check against cycle size
							diff -= last;
							return diff === first || diff % first === 0 && diff / first >= 0;
						}
					};
				},

				"PSEUDO": function (pseudo, argument) {
					// pseudo-class names are case-insensitive
					// http://www.w3.org/TR/selectors/#pseudo-classes
					// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
					// Remember that setFilters inherits from pseudos
					var args,
					    fn = Expr.pseudos[pseudo] || Expr.setFilters[pseudo.toLowerCase()] || Sizzle.error("unsupported pseudo: " + pseudo);

					// The user may use createPseudo to indicate that
					// arguments are needed to create the filter function
					// just as Sizzle does
					if (fn[expando]) {
						return fn(argument);
					}

					// But maintain support for old signatures
					if (fn.length > 1) {
						args = [pseudo, pseudo, "", argument];
						return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase()) ? markFunction(function (seed, matches) {
							var idx,
							    matched = fn(seed, argument),
							    i = matched.length;
							while (i--) {
								idx = indexOf(seed, matched[i]);
								seed[idx] = !(matches[idx] = matched[i]);
							}
						}) : function (elem) {
							return fn(elem, 0, args);
						};
					}

					return fn;
				}
			},

			pseudos: {
				// Potentially complex pseudos
				"not": markFunction(function (selector) {
					// Trim the selector passed to compile
					// to avoid treating leading and trailing
					// spaces as combinators
					var input = [],
					    results = [],
					    matcher = compile(selector.replace(rtrim, "$1"));

					return matcher[expando] ? markFunction(function (seed, matches, context, xml) {
						var elem,
						    unmatched = matcher(seed, null, xml, []),
						    i = seed.length;

						// Match elements unmatched by `matcher`
						while (i--) {
							if (elem = unmatched[i]) {
								seed[i] = !(matches[i] = elem);
							}
						}
					}) : function (elem, context, xml) {
						input[0] = elem;
						matcher(input, null, xml, results);
						// Don't keep the element (issue #299)
						input[0] = null;
						return !results.pop();
					};
				}),

				"has": markFunction(function (selector) {
					return function (elem) {
						return Sizzle(selector, elem).length > 0;
					};
				}),

				"contains": markFunction(function (text) {
					text = text.replace(runescape, funescape);
					return function (elem) {
						return (elem.textContent || elem.innerText || getText(elem)).indexOf(text) > -1;
					};
				}),

				// "Whether an element is represented by a :lang() selector
				// is based solely on the element's language value
				// being equal to the identifier C,
				// or beginning with the identifier C immediately followed by "-".
				// The matching of C against the element's language value is performed case-insensitively.
				// The identifier C does not have to be a valid language name."
				// http://www.w3.org/TR/selectors/#lang-pseudo
				"lang": markFunction(function (lang) {
					// lang value must be a valid identifier
					if (!ridentifier.test(lang || "")) {
						Sizzle.error("unsupported lang: " + lang);
					}
					lang = lang.replace(runescape, funescape).toLowerCase();
					return function (elem) {
						var elemLang;
						do {
							if (elemLang = documentIsHTML ? elem.lang : elem.getAttribute("xml:lang") || elem.getAttribute("lang")) {

								elemLang = elemLang.toLowerCase();
								return elemLang === lang || elemLang.indexOf(lang + "-") === 0;
							}
						} while ((elem = elem.parentNode) && elem.nodeType === 1);
						return false;
					};
				}),

				// Miscellaneous
				"target": function (elem) {
					var hash = window.location && window.location.hash;
					return hash && hash.slice(1) === elem.id;
				},

				"root": function (elem) {
					return elem === docElem;
				},

				"focus": function (elem) {
					return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
				},

				// Boolean properties
				"enabled": function (elem) {
					return elem.disabled === false;
				},

				"disabled": function (elem) {
					return elem.disabled === true;
				},

				"checked": function (elem) {
					// In CSS3, :checked should return both checked and selected elements
					// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
					var nodeName = elem.nodeName.toLowerCase();
					return nodeName === "input" && !!elem.checked || nodeName === "option" && !!elem.selected;
				},

				"selected": function (elem) {
					// Accessing this property makes selected-by-default
					// options in Safari work properly
					if (elem.parentNode) {
						elem.parentNode.selectedIndex;
					}

					return elem.selected === true;
				},

				// Contents
				"empty": function (elem) {
					// http://www.w3.org/TR/selectors/#empty-pseudo
					// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
					//   but not by others (comment: 8; processing instruction: 7; etc.)
					// nodeType < 6 works because attributes (2) do not appear as children
					for (elem = elem.firstChild; elem; elem = elem.nextSibling) {
						if (elem.nodeType < 6) {
							return false;
						}
					}
					return true;
				},

				"parent": function (elem) {
					return !Expr.pseudos["empty"](elem);
				},

				// Element/input types
				"header": function (elem) {
					return rheader.test(elem.nodeName);
				},

				"input": function (elem) {
					return rinputs.test(elem.nodeName);
				},

				"button": function (elem) {
					var name = elem.nodeName.toLowerCase();
					return name === "input" && elem.type === "button" || name === "button";
				},

				"text": function (elem) {
					var attr;
					return elem.nodeName.toLowerCase() === "input" && elem.type === "text" && (

					// Support: IE<8
					// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
					(attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text");
				},

				// Position-in-collection
				"first": createPositionalPseudo(function () {
					return [0];
				}),

				"last": createPositionalPseudo(function (matchIndexes, length) {
					return [length - 1];
				}),

				"eq": createPositionalPseudo(function (matchIndexes, length, argument) {
					return [argument < 0 ? argument + length : argument];
				}),

				"even": createPositionalPseudo(function (matchIndexes, length) {
					var i = 0;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"odd": createPositionalPseudo(function (matchIndexes, length) {
					var i = 1;
					for (; i < length; i += 2) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"lt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; --i >= 0;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				}),

				"gt": createPositionalPseudo(function (matchIndexes, length, argument) {
					var i = argument < 0 ? argument + length : argument;
					for (; ++i < length;) {
						matchIndexes.push(i);
					}
					return matchIndexes;
				})
			}
		};

		Expr.pseudos["nth"] = Expr.pseudos["eq"];

		// Add button/input type pseudos
		for (i in { radio: true, checkbox: true, file: true, password: true, image: true }) {
			Expr.pseudos[i] = createInputPseudo(i);
		}
		for (i in { submit: true, reset: true }) {
			Expr.pseudos[i] = createButtonPseudo(i);
		}

		// Easy API for creating new setFilters
		function setFilters() {}
		setFilters.prototype = Expr.filters = Expr.pseudos;
		Expr.setFilters = new setFilters();

		tokenize = Sizzle.tokenize = function (selector, parseOnly) {
			var matched,
			    match,
			    tokens,
			    type,
			    soFar,
			    groups,
			    preFilters,
			    cached = tokenCache[selector + " "];

			if (cached) {
				return parseOnly ? 0 : cached.slice(0);
			}

			soFar = selector;
			groups = [];
			preFilters = Expr.preFilter;

			while (soFar) {

				// Comma and first run
				if (!matched || (match = rcomma.exec(soFar))) {
					if (match) {
						// Don't consume trailing commas as valid
						soFar = soFar.slice(match[0].length) || soFar;
					}
					groups.push(tokens = []);
				}

				matched = false;

				// Combinators
				if (match = rcombinators.exec(soFar)) {
					matched = match.shift();
					tokens.push({
						value: matched,
						// Cast descendant combinators to space
						type: match[0].replace(rtrim, " ")
					});
					soFar = soFar.slice(matched.length);
				}

				// Filters
				for (type in Expr.filter) {
					if ((match = matchExpr[type].exec(soFar)) && (!preFilters[type] || (match = preFilters[type](match)))) {
						matched = match.shift();
						tokens.push({
							value: matched,
							type: type,
							matches: match
						});
						soFar = soFar.slice(matched.length);
					}
				}

				if (!matched) {
					break;
				}
			}

			// Return the length of the invalid excess
			// if we're just parsing
			// Otherwise, throw an error or return tokens
			return parseOnly ? soFar.length : soFar ? Sizzle.error(selector) :
			// Cache the tokens
			tokenCache(selector, groups).slice(0);
		};

		function toSelector(tokens) {
			var i = 0,
			    len = tokens.length,
			    selector = "";
			for (; i < len; i++) {
				selector += tokens[i].value;
			}
			return selector;
		}

		function addCombinator(matcher, combinator, base) {
			var dir = combinator.dir,
			    checkNonElements = base && dir === "parentNode",
			    doneName = done++;

			return combinator.first ?
			// Check against closest ancestor/preceding element
			function (elem, context, xml) {
				while (elem = elem[dir]) {
					if (elem.nodeType === 1 || checkNonElements) {
						return matcher(elem, context, xml);
					}
				}
			} :

			// Check against all ancestor/preceding elements
			function (elem, context, xml) {
				var oldCache,
				    outerCache,
				    newCache = [dirruns, doneName];

				// We can't set arbitrary data on XML nodes, so they don't benefit from dir caching
				if (xml) {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							if (matcher(elem, context, xml)) {
								return true;
							}
						}
					}
				} else {
					while (elem = elem[dir]) {
						if (elem.nodeType === 1 || checkNonElements) {
							outerCache = elem[expando] || (elem[expando] = {});
							if ((oldCache = outerCache[dir]) && oldCache[0] === dirruns && oldCache[1] === doneName) {

								// Assign to newCache so results back-propagate to previous elements
								return newCache[2] = oldCache[2];
							} else {
								// Reuse newcache so results back-propagate to previous elements
								outerCache[dir] = newCache;

								// A match means we're done; a fail means we have to keep checking
								if (newCache[2] = matcher(elem, context, xml)) {
									return true;
								}
							}
						}
					}
				}
			};
		}

		function elementMatcher(matchers) {
			return matchers.length > 1 ? function (elem, context, xml) {
				var i = matchers.length;
				while (i--) {
					if (!matchers[i](elem, context, xml)) {
						return false;
					}
				}
				return true;
			} : matchers[0];
		}

		function multipleContexts(selector, contexts, results) {
			var i = 0,
			    len = contexts.length;
			for (; i < len; i++) {
				Sizzle(selector, contexts[i], results);
			}
			return results;
		}

		function condense(unmatched, map, filter, context, xml) {
			var elem,
			    newUnmatched = [],
			    i = 0,
			    len = unmatched.length,
			    mapped = map != null;

			for (; i < len; i++) {
				if (elem = unmatched[i]) {
					if (!filter || filter(elem, context, xml)) {
						newUnmatched.push(elem);
						if (mapped) {
							map.push(i);
						}
					}
				}
			}

			return newUnmatched;
		}

		function setMatcher(preFilter, selector, matcher, postFilter, postFinder, postSelector) {
			if (postFilter && !postFilter[expando]) {
				postFilter = setMatcher(postFilter);
			}
			if (postFinder && !postFinder[expando]) {
				postFinder = setMatcher(postFinder, postSelector);
			}
			return markFunction(function (seed, results, context, xml) {
				var temp,
				    i,
				    elem,
				    preMap = [],
				    postMap = [],
				    preexisting = results.length,


				// Get initial elements from seed or context
				elems = seed || multipleContexts(selector || "*", context.nodeType ? [context] : context, []),


				// Prefilter to get matcher input, preserving a map for seed-results synchronization
				matcherIn = preFilter && (seed || !selector) ? condense(elems, preMap, preFilter, context, xml) : elems,
				    matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || (seed ? preFilter : preexisting || postFilter) ?

				// ...intermediate processing is necessary
				[] :

				// ...otherwise use results directly
				results : matcherIn;

				// Find primary matches
				if (matcher) {
					matcher(matcherIn, matcherOut, context, xml);
				}

				// Apply postFilter
				if (postFilter) {
					temp = condense(matcherOut, postMap);
					postFilter(temp, [], context, xml);

					// Un-match failing elements by moving them back to matcherIn
					i = temp.length;
					while (i--) {
						if (elem = temp[i]) {
							matcherOut[postMap[i]] = !(matcherIn[postMap[i]] = elem);
						}
					}
				}

				if (seed) {
					if (postFinder || preFilter) {
						if (postFinder) {
							// Get the final matcherOut by condensing this intermediate into postFinder contexts
							temp = [];
							i = matcherOut.length;
							while (i--) {
								if (elem = matcherOut[i]) {
									// Restore matcherIn since elem is not yet a final match
									temp.push(matcherIn[i] = elem);
								}
							}
							postFinder(null, matcherOut = [], temp, xml);
						}

						// Move matched elements from seed to results to keep them synchronized
						i = matcherOut.length;
						while (i--) {
							if ((elem = matcherOut[i]) && (temp = postFinder ? indexOf(seed, elem) : preMap[i]) > -1) {

								seed[temp] = !(results[temp] = elem);
							}
						}
					}

					// Add elements to results, through postFinder if defined
				} else {
					matcherOut = condense(matcherOut === results ? matcherOut.splice(preexisting, matcherOut.length) : matcherOut);
					if (postFinder) {
						postFinder(null, results, matcherOut, xml);
					} else {
						push.apply(results, matcherOut);
					}
				}
			});
		}

		function matcherFromTokens(tokens) {
			var checkContext,
			    matcher,
			    j,
			    len = tokens.length,
			    leadingRelative = Expr.relative[tokens[0].type],
			    implicitRelative = leadingRelative || Expr.relative[" "],
			    i = leadingRelative ? 1 : 0,


			// The foundational matcher ensures that elements are reachable from top-level context(s)
			matchContext = addCombinator(function (elem) {
				return elem === checkContext;
			}, implicitRelative, true),
			    matchAnyContext = addCombinator(function (elem) {
				return indexOf(checkContext, elem) > -1;
			}, implicitRelative, true),
			    matchers = [function (elem, context, xml) {
				var ret = !leadingRelative && (xml || context !== outermostContext) || ((checkContext = context).nodeType ? matchContext(elem, context, xml) : matchAnyContext(elem, context, xml));
				// Avoid hanging onto element (issue #299)
				checkContext = null;
				return ret;
			}];

			for (; i < len; i++) {
				if (matcher = Expr.relative[tokens[i].type]) {
					matchers = [addCombinator(elementMatcher(matchers), matcher)];
				} else {
					matcher = Expr.filter[tokens[i].type].apply(null, tokens[i].matches);

					// Return special upon seeing a positional matcher
					if (matcher[expando]) {
						// Find the next relative operator (if any) for proper handling
						j = ++i;
						for (; j < len; j++) {
							if (Expr.relative[tokens[j].type]) {
								break;
							}
						}
						return setMatcher(i > 1 && elementMatcher(matchers), i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice(0, i - 1).concat({ value: tokens[i - 2].type === " " ? "*" : "" })).replace(rtrim, "$1"), matcher, i < j && matcherFromTokens(tokens.slice(i, j)), j < len && matcherFromTokens(tokens = tokens.slice(j)), j < len && toSelector(tokens));
					}
					matchers.push(matcher);
				}
			}

			return elementMatcher(matchers);
		}

		function matcherFromGroupMatchers(elementMatchers, setMatchers) {
			var bySet = setMatchers.length > 0,
			    byElement = elementMatchers.length > 0,
			    superMatcher = function (seed, context, xml, results, outermost) {
				var elem,
				    j,
				    matcher,
				    matchedCount = 0,
				    i = "0",
				    unmatched = seed && [],
				    setMatched = [],
				    contextBackup = outermostContext,

				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]("*", outermost),

				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = dirruns += contextBackup == null ? 1 : Math.random() || 0.1,
				    len = elems.length;

				if (outermost) {
					outermostContext = context !== document && context;
				}

				// Add elements passing elementMatchers directly to results
				// Keep `i` a string if there are no elements so `matchedCount` will be "00" below
				// Support: IE<9, Safari
				// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
				for (; i !== len && (elem = elems[i]) != null; i++) {
					if (byElement && elem) {
						j = 0;
						while (matcher = elementMatchers[j++]) {
							if (matcher(elem, context, xml)) {
								results.push(elem);
								break;
							}
						}
						if (outermost) {
							dirruns = dirrunsUnique;
						}
					}

					// Track unmatched elements for set filters
					if (bySet) {
						// They will have gone through all possible matchers
						if (elem = !matcher && elem) {
							matchedCount--;
						}

						// Lengthen the array for every element, matched or not
						if (seed) {
							unmatched.push(elem);
						}
					}
				}

				// Apply set filters to unmatched elements
				matchedCount += i;
				if (bySet && i !== matchedCount) {
					j = 0;
					while (matcher = setMatchers[j++]) {
						matcher(unmatched, setMatched, context, xml);
					}

					if (seed) {
						// Reintegrate element matches to eliminate the need for sorting
						if (matchedCount > 0) {
							while (i--) {
								if (!(unmatched[i] || setMatched[i])) {
									setMatched[i] = pop.call(results);
								}
							}
						}

						// Discard index placeholder values to get only actual matches
						setMatched = condense(setMatched);
					}

					// Add matches to results
					push.apply(results, setMatched);

					// Seedless set matches succeeding multiple successful matchers stipulate sorting
					if (outermost && !seed && setMatched.length > 0 && matchedCount + setMatchers.length > 1) {

						Sizzle.uniqueSort(results);
					}
				}

				// Override manipulation of globals by nested matchers
				if (outermost) {
					dirruns = dirrunsUnique;
					outermostContext = contextBackup;
				}

				return unmatched;
			};

			return bySet ? markFunction(superMatcher) : superMatcher;
		}

		compile = Sizzle.compile = function (selector, match /* Internal Use Only */) {
			var i,
			    setMatchers = [],
			    elementMatchers = [],
			    cached = compilerCache[selector + " "];

			if (!cached) {
				// Generate a function of recursive functions that can be used to check each element
				if (!match) {
					match = tokenize(selector);
				}
				i = match.length;
				while (i--) {
					cached = matcherFromTokens(match[i]);
					if (cached[expando]) {
						setMatchers.push(cached);
					} else {
						elementMatchers.push(cached);
					}
				}

				// Cache the compiled function
				cached = compilerCache(selector, matcherFromGroupMatchers(elementMatchers, setMatchers));

				// Save selector and tokenization
				cached.selector = selector;
			}
			return cached;
		};

		/**
   * A low-level selection function that works with Sizzle's compiled
   *  selector functions
   * @param {String|Function} selector A selector or a pre-compiled
   *  selector function built with Sizzle.compile
   * @param {Element} context
   * @param {Array} [results]
   * @param {Array} [seed] A set of elements to match against
   */
		select = Sizzle.select = function (selector, context, results, seed) {
			var i,
			    tokens,
			    token,
			    type,
			    find,
			    compiled = typeof selector === "function" && selector,
			    match = !seed && tokenize(selector = compiled.selector || selector);

			results = results || [];

			// Try to minimize operations if there is no seed and only one group
			if (match.length === 1) {

				// Take a shortcut and set the context if the root selector is an ID
				tokens = match[0] = match[0].slice(0);
				if (tokens.length > 2 && (token = tokens[0]).type === "ID" && support.getById && context.nodeType === 9 && documentIsHTML && Expr.relative[tokens[1].type]) {

					context = (Expr.find["ID"](token.matches[0].replace(runescape, funescape), context) || [])[0];
					if (!context) {
						return results;

						// Precompiled matchers will still verify ancestry, so step up a level
					} else if (compiled) {
						context = context.parentNode;
					}

					selector = selector.slice(tokens.shift().value.length);
				}

				// Fetch a seed set for right-to-left matching
				i = matchExpr["needsContext"].test(selector) ? 0 : tokens.length;
				while (i--) {
					token = tokens[i];

					// Abort if we hit a combinator
					if (Expr.relative[type = token.type]) {
						break;
					}
					if (find = Expr.find[type]) {
						// Search, expanding context for leading sibling combinators
						if (seed = find(token.matches[0].replace(runescape, funescape), rsibling.test(tokens[0].type) && testContext(context.parentNode) || context)) {

							// If seed is empty or no tokens remain, we can return early
							tokens.splice(i, 1);
							selector = seed.length && toSelector(tokens);
							if (!selector) {
								push.apply(results, seed);
								return results;
							}

							break;
						}
					}
				}
			}

			// Compile and execute a filtering function if one is not provided
			// Provide `match` to avoid retokenization if we modified the selector above
			(compiled || compile(selector, match))(seed, context, !documentIsHTML, results, rsibling.test(selector) && testContext(context.parentNode) || context);
			return results;
		};

		// One-time assignments

		// Sort stability
		support.sortStable = expando.split("").sort(sortOrder).join("") === expando;

		// Support: Chrome 14-35+
		// Always assume duplicates if they aren't passed to the comparison function
		support.detectDuplicates = !!hasDuplicate;

		// Initialize against the default document
		setDocument();

		// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
		// Detached nodes confoundingly follow *each other*
		support.sortDetached = assert(function (div1) {
			// Should return 1, but returns 4 (following)
			return div1.compareDocumentPosition(document.createElement("div")) & 1;
		});

		// Support: IE<8
		// Prevent attribute/property "interpolation"
		// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
		if (!assert(function (div) {
			div.innerHTML = "<a href='#'></a>";
			return div.firstChild.getAttribute("href") === "#";
		})) {
			addHandle("type|href|height|width", function (elem, name, isXML) {
				if (!isXML) {
					return elem.getAttribute(name, name.toLowerCase() === "type" ? 1 : 2);
				}
			});
		}

		// Support: IE<9
		// Use defaultValue in place of getAttribute("value")
		if (!support.attributes || !assert(function (div) {
			div.innerHTML = "<input/>";
			div.firstChild.setAttribute("value", "");
			return div.firstChild.getAttribute("value") === "";
		})) {
			addHandle("value", function (elem, name, isXML) {
				if (!isXML && elem.nodeName.toLowerCase() === "input") {
					return elem.defaultValue;
				}
			});
		}

		// Support: IE<9
		// Use getAttributeNode to fetch booleans when getAttribute lies
		if (!assert(function (div) {
			return div.getAttribute("disabled") == null;
		})) {
			addHandle(booleans, function (elem, name, isXML) {
				var val;
				if (!isXML) {
					return elem[name] === true ? name.toLowerCase() : (val = elem.getAttributeNode(name)) && val.specified ? val.value : null;
				}
			});
		}

		return Sizzle;
	}(window);

	jQuery.find = Sizzle;
	jQuery.expr = Sizzle.selectors;
	jQuery.expr[":"] = jQuery.expr.pseudos;
	jQuery.unique = Sizzle.uniqueSort;
	jQuery.text = Sizzle.getText;
	jQuery.isXMLDoc = Sizzle.isXML;
	jQuery.contains = Sizzle.contains;

	var rneedsContext = jQuery.expr.match.needsContext;

	var rsingleTag = /^<(\w+)\s*\/?>(?:<\/\1>|)$/;

	var risSimple = /^.[^:#\[\.,]*$/;

	// Implement the identical functionality for filter and not
	function winnow(elements, qualifier, not) {
		if (jQuery.isFunction(qualifier)) {
			return jQuery.grep(elements, function (elem, i) {
				/* jshint -W018 */
				return !!qualifier.call(elem, i, elem) !== not;
			});
		}

		if (qualifier.nodeType) {
			return jQuery.grep(elements, function (elem) {
				return elem === qualifier !== not;
			});
		}

		if (typeof qualifier === "string") {
			if (risSimple.test(qualifier)) {
				return jQuery.filter(qualifier, elements, not);
			}

			qualifier = jQuery.filter(qualifier, elements);
		}

		return jQuery.grep(elements, function (elem) {
			return indexOf.call(qualifier, elem) >= 0 !== not;
		});
	}

	jQuery.filter = function (expr, elems, not) {
		var elem = elems[0];

		if (not) {
			expr = ":not(" + expr + ")";
		}

		return elems.length === 1 && elem.nodeType === 1 ? jQuery.find.matchesSelector(elem, expr) ? [elem] : [] : jQuery.find.matches(expr, jQuery.grep(elems, function (elem) {
			return elem.nodeType === 1;
		}));
	};

	jQuery.fn.extend({
		find: function (selector) {
			var i,
			    len = this.length,
			    ret = [],
			    self = this;

			if (typeof selector !== "string") {
				return this.pushStack(jQuery(selector).filter(function () {
					for (i = 0; i < len; i++) {
						if (jQuery.contains(self[i], this)) {
							return true;
						}
					}
				}));
			}

			for (i = 0; i < len; i++) {
				jQuery.find(selector, self[i], ret);
			}

			// Needed because $( selector, context ) becomes $( context ).find( selector )
			ret = this.pushStack(len > 1 ? jQuery.unique(ret) : ret);
			ret.selector = this.selector ? this.selector + " " + selector : selector;
			return ret;
		},
		filter: function (selector) {
			return this.pushStack(winnow(this, selector || [], false));
		},
		not: function (selector) {
			return this.pushStack(winnow(this, selector || [], true));
		},
		is: function (selector) {
			return !!winnow(this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test(selector) ? jQuery(selector) : selector || [], false).length;
		}
	});

	// Initialize a jQuery object


	// A central reference to the root jQuery(document)
	var rootjQuery,


	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
	    init = jQuery.fn.init = function (selector, context) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if (!selector) {
			return this;
		}

		// Handle HTML strings
		if (typeof selector === "string") {
			if (selector[0] === "<" && selector[selector.length - 1] === ">" && selector.length >= 3) {
				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [null, selector, null];
			} else {
				match = rquickExpr.exec(selector);
			}

			// Match html or make sure no context is specified for #id
			if (match && (match[1] || !context)) {

				// HANDLE: $(html) -> $(array)
				if (match[1]) {
					context = context instanceof jQuery ? context[0] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge(this, jQuery.parseHTML(match[1], context && context.nodeType ? context.ownerDocument || context : document, true));

					// HANDLE: $(html, props)
					if (rsingleTag.test(match[1]) && jQuery.isPlainObject(context)) {
						for (match in context) {
							// Properties of context are called as methods if possible
							if (jQuery.isFunction(this[match])) {
								this[match](context[match]);

								// ...and otherwise set as attributes
							} else {
								this.attr(match, context[match]);
							}
						}
					}

					return this;

					// HANDLE: $(#id)
				} else {
					elem = document.getElementById(match[2]);

					// Support: Blackberry 4.6
					// gEBID returns nodes no longer in the document (#6963)
					if (elem && elem.parentNode) {
						// Inject the element directly into the jQuery object
						this.length = 1;
						this[0] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

				// HANDLE: $(expr, $(...))
			} else if (!context || context.jquery) {
				return (context || rootjQuery).find(selector);

				// HANDLE: $(expr, context)
				// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor(context).find(selector);
			}

			// HANDLE: $(DOMElement)
		} else if (selector.nodeType) {
			this.context = this[0] = selector;
			this.length = 1;
			return this;

			// HANDLE: $(function)
			// Shortcut for document ready
		} else if (jQuery.isFunction(selector)) {
			return typeof rootjQuery.ready !== "undefined" ? rootjQuery.ready(selector) :
			// Execute immediately if ready is not present
			selector(jQuery);
		}

		if (selector.selector !== undefined) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray(selector, this);
	};

	// Give the init function the jQuery prototype for later instantiation
	init.prototype = jQuery.fn;

	// Initialize central reference
	rootjQuery = jQuery(document);

	var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

	jQuery.extend({
		dir: function (elem, dir, until) {
			var matched = [],
			    truncate = until !== undefined;

			while ((elem = elem[dir]) && elem.nodeType !== 9) {
				if (elem.nodeType === 1) {
					if (truncate && jQuery(elem).is(until)) {
						break;
					}
					matched.push(elem);
				}
			}
			return matched;
		},

		sibling: function (n, elem) {
			var matched = [];

			for (; n; n = n.nextSibling) {
				if (n.nodeType === 1 && n !== elem) {
					matched.push(n);
				}
			}

			return matched;
		}
	});

	jQuery.fn.extend({
		has: function (target) {
			var targets = jQuery(target, this),
			    l = targets.length;

			return this.filter(function () {
				var i = 0;
				for (; i < l; i++) {
					if (jQuery.contains(this, targets[i])) {
						return true;
					}
				}
			});
		},

		closest: function (selectors, context) {
			var cur,
			    i = 0,
			    l = this.length,
			    matched = [],
			    pos = rneedsContext.test(selectors) || typeof selectors !== "string" ? jQuery(selectors, context || this.context) : 0;

			for (; i < l; i++) {
				for (cur = this[i]; cur && cur !== context; cur = cur.parentNode) {
					// Always skip document fragments
					if (cur.nodeType < 11 && (pos ? pos.index(cur) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 && jQuery.find.matchesSelector(cur, selectors))) {

						matched.push(cur);
						break;
					}
				}
			}

			return this.pushStack(matched.length > 1 ? jQuery.unique(matched) : matched);
		},

		// Determine the position of an element within the set
		index: function (elem) {

			// No argument, return index in parent
			if (!elem) {
				return this[0] && this[0].parentNode ? this.first().prevAll().length : -1;
			}

			// Index in selector
			if (typeof elem === "string") {
				return indexOf.call(jQuery(elem), this[0]);
			}

			// Locate the position of the desired element
			return indexOf.call(this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[0] : elem);
		},

		add: function (selector, context) {
			return this.pushStack(jQuery.unique(jQuery.merge(this.get(), jQuery(selector, context))));
		},

		addBack: function (selector) {
			return this.add(selector == null ? this.prevObject : this.prevObject.filter(selector));
		}
	});

	function sibling(cur, dir) {
		while ((cur = cur[dir]) && cur.nodeType !== 1) {}
		return cur;
	}

	jQuery.each({
		parent: function (elem) {
			var parent = elem.parentNode;
			return parent && parent.nodeType !== 11 ? parent : null;
		},
		parents: function (elem) {
			return jQuery.dir(elem, "parentNode");
		},
		parentsUntil: function (elem, i, until) {
			return jQuery.dir(elem, "parentNode", until);
		},
		next: function (elem) {
			return sibling(elem, "nextSibling");
		},
		prev: function (elem) {
			return sibling(elem, "previousSibling");
		},
		nextAll: function (elem) {
			return jQuery.dir(elem, "nextSibling");
		},
		prevAll: function (elem) {
			return jQuery.dir(elem, "previousSibling");
		},
		nextUntil: function (elem, i, until) {
			return jQuery.dir(elem, "nextSibling", until);
		},
		prevUntil: function (elem, i, until) {
			return jQuery.dir(elem, "previousSibling", until);
		},
		siblings: function (elem) {
			return jQuery.sibling((elem.parentNode || {}).firstChild, elem);
		},
		children: function (elem) {
			return jQuery.sibling(elem.firstChild);
		},
		contents: function (elem) {
			return elem.contentDocument || jQuery.merge([], elem.childNodes);
		}
	}, function (name, fn) {
		jQuery.fn[name] = function (until, selector) {
			var matched = jQuery.map(this, fn, until);

			if (name.slice(-5) !== "Until") {
				selector = until;
			}

			if (selector && typeof selector === "string") {
				matched = jQuery.filter(selector, matched);
			}

			if (this.length > 1) {
				// Remove duplicates
				if (!guaranteedUnique[name]) {
					jQuery.unique(matched);
				}

				// Reverse order for parents* and prev-derivatives
				if (rparentsprev.test(name)) {
					matched.reverse();
				}
			}

			return this.pushStack(matched);
		};
	});
	var rnotwhite = /\S+/g;

	// String to Object options format cache
	var optionsCache = {};

	// Convert String-formatted options into Object-formatted ones and store in cache
	function createOptions(options) {
		var object = optionsCache[options] = {};
		jQuery.each(options.match(rnotwhite) || [], function (_, flag) {
			object[flag] = true;
		});
		return object;
	}

	/*
  * Create a callback list using the following parameters:
  *
  *	options: an optional list of space-separated options that will change how
  *			the callback list behaves or a more traditional option object
  *
  * By default a callback list will act like an event callback list and can be
  * "fired" multiple times.
  *
  * Possible options:
  *
  *	once:			will ensure the callback list can only be fired once (like a Deferred)
  *
  *	memory:			will keep track of previous values and will call any callback added
  *					after the list has been fired right away with the latest "memorized"
  *					values (like a Deferred)
  *
  *	unique:			will ensure a callback can only be added once (no duplicate in the list)
  *
  *	stopOnFalse:	interrupt callings when a callback returns false
  *
  */
	jQuery.Callbacks = function (options) {

		// Convert options from String-formatted to Object-formatted if needed
		// (we check in cache first)
		options = typeof options === "string" ? optionsCache[options] || createOptions(options) : jQuery.extend({}, options);

		var // Last fire value (for non-forgettable lists)
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to know if list is currently firing
		firing,

		// First callback to fire (used internally by add and fireWith)
		firingStart,

		// End of the loop when firing
		firingLength,

		// Index of currently firing callback (modified by remove if needed)
		firingIndex,

		// Actual callback list
		list = [],

		// Stack of fire calls for repeatable lists
		stack = !options.once && [],

		// Fire callbacks
		fire = function (data) {
			memory = options.memory && data;
			fired = true;
			firingIndex = firingStart || 0;
			firingStart = 0;
			firingLength = list.length;
			firing = true;
			for (; list && firingIndex < firingLength; firingIndex++) {
				if (list[firingIndex].apply(data[0], data[1]) === false && options.stopOnFalse) {
					memory = false; // To prevent further calls using add
					break;
				}
			}
			firing = false;
			if (list) {
				if (stack) {
					if (stack.length) {
						fire(stack.shift());
					}
				} else if (memory) {
					list = [];
				} else {
					self.disable();
				}
			}
		},

		// Actual Callbacks object
		self = {
			// Add a callback or a collection of callbacks to the list
			add: function () {
				if (list) {
					// First, we save the current length
					var start = list.length;
					(function add(args) {
						jQuery.each(args, function (_, arg) {
							var type = jQuery.type(arg);
							if (type === "function") {
								if (!options.unique || !self.has(arg)) {
									list.push(arg);
								}
							} else if (arg && arg.length && type !== "string") {
								// Inspect recursively
								add(arg);
							}
						});
					})(arguments);
					// Do we need to add the callbacks to the
					// current firing batch?
					if (firing) {
						firingLength = list.length;
						// With memory, if we're not firing then
						// we should call right away
					} else if (memory) {
						firingStart = start;
						fire(memory);
					}
				}
				return this;
			},
			// Remove a callback from the list
			remove: function () {
				if (list) {
					jQuery.each(arguments, function (_, arg) {
						var index;
						while ((index = jQuery.inArray(arg, list, index)) > -1) {
							list.splice(index, 1);
							// Handle firing indexes
							if (firing) {
								if (index <= firingLength) {
									firingLength--;
								}
								if (index <= firingIndex) {
									firingIndex--;
								}
							}
						}
					});
				}
				return this;
			},
			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function (fn) {
				return fn ? jQuery.inArray(fn, list) > -1 : !!(list && list.length);
			},
			// Remove all callbacks from the list
			empty: function () {
				list = [];
				firingLength = 0;
				return this;
			},
			// Have the list do nothing anymore
			disable: function () {
				list = stack = memory = undefined;
				return this;
			},
			// Is it disabled?
			disabled: function () {
				return !list;
			},
			// Lock the list in its current state
			lock: function () {
				stack = undefined;
				if (!memory) {
					self.disable();
				}
				return this;
			},
			// Is it locked?
			locked: function () {
				return !stack;
			},
			// Call all callbacks with the given context and arguments
			fireWith: function (context, args) {
				if (list && (!fired || stack)) {
					args = args || [];
					args = [context, args.slice ? args.slice() : args];
					if (firing) {
						stack.push(args);
					} else {
						fire(args);
					}
				}
				return this;
			},
			// Call all the callbacks with the given arguments
			fire: function () {
				self.fireWith(this, arguments);
				return this;
			},
			// To know if the callbacks have already been called at least once
			fired: function () {
				return !!fired;
			}
		};

		return self;
	};

	jQuery.extend({

		Deferred: function (func) {
			var tuples = [
			// action, add listener, listener list, final state
			["resolve", "done", jQuery.Callbacks("once memory"), "resolved"], ["reject", "fail", jQuery.Callbacks("once memory"), "rejected"], ["notify", "progress", jQuery.Callbacks("memory")]],
			    state = "pending",
			    promise = {
				state: function () {
					return state;
				},
				always: function () {
					deferred.done(arguments).fail(arguments);
					return this;
				},
				then: function () /* fnDone, fnFail, fnProgress */{
					var fns = arguments;
					return jQuery.Deferred(function (newDefer) {
						jQuery.each(tuples, function (i, tuple) {
							var fn = jQuery.isFunction(fns[i]) && fns[i];
							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[tuple[1]](function () {
								var returned = fn && fn.apply(this, arguments);
								if (returned && jQuery.isFunction(returned.promise)) {
									returned.promise().done(newDefer.resolve).fail(newDefer.reject).progress(newDefer.notify);
								} else {
									newDefer[tuple[0] + "With"](this === promise ? newDefer.promise() : this, fn ? [returned] : arguments);
								}
							});
						});
						fns = null;
					}).promise();
				},
				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function (obj) {
					return obj != null ? jQuery.extend(obj, promise) : promise;
				}
			},
			    deferred = {};

			// Keep pipe for back-compat
			promise.pipe = promise.then;

			// Add list-specific methods
			jQuery.each(tuples, function (i, tuple) {
				var list = tuple[2],
				    stateString = tuple[3];

				// promise[ done | fail | progress ] = list.add
				promise[tuple[1]] = list.add;

				// Handle state
				if (stateString) {
					list.add(function () {
						// state = [ resolved | rejected ]
						state = stateString;

						// [ reject_list | resolve_list ].disable; progress_list.lock
					}, tuples[i ^ 1][2].disable, tuples[2][2].lock);
				}

				// deferred[ resolve | reject | notify ]
				deferred[tuple[0]] = function () {
					deferred[tuple[0] + "With"](this === deferred ? promise : this, arguments);
					return this;
				};
				deferred[tuple[0] + "With"] = list.fireWith;
			});

			// Make the deferred a promise
			promise.promise(deferred);

			// Call given func if any
			if (func) {
				func.call(deferred, deferred);
			}

			// All done!
			return deferred;
		},

		// Deferred helper
		when: function (subordinate /* , ..., subordinateN */) {
			var i = 0,
			    resolveValues = slice.call(arguments),
			    length = resolveValues.length,


			// the count of uncompleted subordinates
			remaining = length !== 1 || subordinate && jQuery.isFunction(subordinate.promise) ? length : 0,


			// the master Deferred. If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),


			// Update function for both resolve and progress values
			updateFunc = function (i, contexts, values) {
				return function (value) {
					contexts[i] = this;
					values[i] = arguments.length > 1 ? slice.call(arguments) : value;
					if (values === progressValues) {
						deferred.notifyWith(contexts, values);
					} else if (! --remaining) {
						deferred.resolveWith(contexts, values);
					}
				};
			},
			    progressValues,
			    progressContexts,
			    resolveContexts;

			// Add listeners to Deferred subordinates; treat others as resolved
			if (length > 1) {
				progressValues = new Array(length);
				progressContexts = new Array(length);
				resolveContexts = new Array(length);
				for (; i < length; i++) {
					if (resolveValues[i] && jQuery.isFunction(resolveValues[i].promise)) {
						resolveValues[i].promise().done(updateFunc(i, resolveContexts, resolveValues)).fail(deferred.reject).progress(updateFunc(i, progressContexts, progressValues));
					} else {
						--remaining;
					}
				}
			}

			// If we're not waiting on anything, resolve the master
			if (!remaining) {
				deferred.resolveWith(resolveContexts, resolveValues);
			}

			return deferred.promise();
		}
	});

	// The deferred used on DOM ready
	var readyList;

	jQuery.fn.ready = function (fn) {
		// Add the callback
		jQuery.ready.promise().done(fn);

		return this;
	};

	jQuery.extend({
		// Is the DOM ready to be used? Set to true once it occurs.
		isReady: false,

		// A counter to track how many items to wait for before
		// the ready event fires. See #6781
		readyWait: 1,

		// Hold (or release) the ready event
		holdReady: function (hold) {
			if (hold) {
				jQuery.readyWait++;
			} else {
				jQuery.ready(true);
			}
		},

		// Handle when the DOM is ready
		ready: function (wait) {

			// Abort if there are pending holds or we're already ready
			if (wait === true ? --jQuery.readyWait : jQuery.isReady) {
				return;
			}

			// Remember that the DOM is ready
			jQuery.isReady = true;

			// If a normal DOM Ready event fired, decrement, and wait if need be
			if (wait !== true && --jQuery.readyWait > 0) {
				return;
			}

			// If there are functions bound, to execute
			readyList.resolveWith(document, [jQuery]);

			// Trigger any bound ready events
			if (jQuery.fn.triggerHandler) {
				jQuery(document).triggerHandler("ready");
				jQuery(document).off("ready");
			}
		}
	});

	/**
  * The ready event handler and self cleanup method
  */
	function completed() {
		document.removeEventListener("DOMContentLoaded", completed, false);
		window.removeEventListener("load", completed, false);
		jQuery.ready();
	}

	jQuery.ready.promise = function (obj) {
		if (!readyList) {

			readyList = jQuery.Deferred();

			// Catch cases where $(document).ready() is called after the browser event has already occurred.
			// We once tried to use readyState "interactive" here, but it caused issues like the one
			// discovered by ChrisS here: http://bugs.jquery.com/ticket/12282#comment:15
			if (document.readyState === "complete") {
				// Handle it asynchronously to allow scripts the opportunity to delay ready
				setTimeout(jQuery.ready);
			} else {

				// Use the handy event callback
				document.addEventListener("DOMContentLoaded", completed, false);

				// A fallback to window.onload, that will always work
				window.addEventListener("load", completed, false);
			}
		}
		return readyList.promise(obj);
	};

	// Kick off the DOM ready check even if the user does not
	jQuery.ready.promise();

	// Multifunctional method to get and set values of a collection
	// The value/s can optionally be executed if it's a function
	var access = jQuery.access = function (elems, fn, key, value, chainable, emptyGet, raw) {
		var i = 0,
		    len = elems.length,
		    bulk = key == null;

		// Sets many values
		if (jQuery.type(key) === "object") {
			chainable = true;
			for (i in key) {
				jQuery.access(elems, fn, i, key[i], true, emptyGet, raw);
			}

			// Sets one value
		} else if (value !== undefined) {
			chainable = true;

			if (!jQuery.isFunction(value)) {
				raw = true;
			}

			if (bulk) {
				// Bulk operations run against the entire set
				if (raw) {
					fn.call(elems, value);
					fn = null;

					// ...except when executing function values
				} else {
					bulk = fn;
					fn = function (elem, key, value) {
						return bulk.call(jQuery(elem), value);
					};
				}
			}

			if (fn) {
				for (; i < len; i++) {
					fn(elems[i], key, raw ? value : value.call(elems[i], i, fn(elems[i], key)));
				}
			}
		}

		return chainable ? elems :

		// Gets
		bulk ? fn.call(elems) : len ? fn(elems[0], key) : emptyGet;
	};

	/**
  * Determines whether an object can have data
  */
	jQuery.acceptData = function (owner) {
		// Accepts only:
		//  - Node
		//    - Node.ELEMENT_NODE
		//    - Node.DOCUMENT_NODE
		//  - Object
		//    - Any
		/* jshint -W018 */
		return owner.nodeType === 1 || owner.nodeType === 9 || !+owner.nodeType;
	};

	function Data() {
		// Support: Android<4,
		// Old WebKit does not have Object.preventExtensions/freeze method,
		// return new empty object instead with no [[set]] accessor
		Object.defineProperty(this.cache = {}, 0, {
			get: function () {
				return {};
			}
		});

		this.expando = jQuery.expando + Data.uid++;
	}

	Data.uid = 1;
	Data.accepts = jQuery.acceptData;

	Data.prototype = {
		key: function (owner) {
			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return the key for a frozen object.
			if (!Data.accepts(owner)) {
				return 0;
			}

			var descriptor = {},

			// Check if the owner object already has a cache key
			unlock = owner[this.expando];

			// If not, create one
			if (!unlock) {
				unlock = Data.uid++;

				// Secure it in a non-enumerable, non-writable property
				try {
					descriptor[this.expando] = { value: unlock };
					Object.defineProperties(owner, descriptor);

					// Support: Android<4
					// Fallback to a less secure definition
				} catch (e) {
					descriptor[this.expando] = unlock;
					jQuery.extend(owner, descriptor);
				}
			}

			// Ensure the cache object
			if (!this.cache[unlock]) {
				this.cache[unlock] = {};
			}

			return unlock;
		},
		set: function (owner, data, value) {
			var prop,

			// There may be an unlock assigned to this node,
			// if there is no entry for this "owner", create one inline
			// and set the unlock as though an owner entry had always existed
			unlock = this.key(owner),
			    cache = this.cache[unlock];

			// Handle: [ owner, key, value ] args
			if (typeof data === "string") {
				cache[data] = value;

				// Handle: [ owner, { properties } ] args
			} else {
				// Fresh assignments by object are shallow copied
				if (jQuery.isEmptyObject(cache)) {
					jQuery.extend(this.cache[unlock], data);
					// Otherwise, copy the properties one-by-one to the cache object
				} else {
					for (prop in data) {
						cache[prop] = data[prop];
					}
				}
			}
			return cache;
		},
		get: function (owner, key) {
			// Either a valid cache is found, or will be created.
			// New caches will be created and the unlock returned,
			// allowing direct access to the newly created
			// empty data object. A valid owner object must be provided.
			var cache = this.cache[this.key(owner)];

			return key === undefined ? cache : cache[key];
		},
		access: function (owner, key, value) {
			var stored;
			// In cases where either:
			//
			//   1. No key was specified
			//   2. A string key was specified, but no value provided
			//
			// Take the "read" path and allow the get method to determine
			// which value to return, respectively either:
			//
			//   1. The entire cache object
			//   2. The data stored at the key
			//
			if (key === undefined || key && typeof key === "string" && value === undefined) {

				stored = this.get(owner, key);

				return stored !== undefined ? stored : this.get(owner, jQuery.camelCase(key));
			}

			// [*]When the key is not a string, or both a key and value
			// are specified, set or extend (existing objects) with either:
			//
			//   1. An object of properties
			//   2. A key and value
			//
			this.set(owner, key, value);

			// Since the "set" path can have two possible entry points
			// return the expected data based on which path was taken[*]
			return value !== undefined ? value : key;
		},
		remove: function (owner, key) {
			var i,
			    name,
			    camel,
			    unlock = this.key(owner),
			    cache = this.cache[unlock];

			if (key === undefined) {
				this.cache[unlock] = {};
			} else {
				// Support array or space separated string of keys
				if (jQuery.isArray(key)) {
					// If "name" is an array of keys...
					// When data is initially created, via ("key", "val") signature,
					// keys will be converted to camelCase.
					// Since there is no way to tell _how_ a key was added, remove
					// both plain key and camelCase key. #12786
					// This will only penalize the array argument path.
					name = key.concat(key.map(jQuery.camelCase));
				} else {
					camel = jQuery.camelCase(key);
					// Try the string as a key before any manipulation
					if (key in cache) {
						name = [key, camel];
					} else {
						// If a key with the spaces exists, use it.
						// Otherwise, create an array by matching non-whitespace
						name = camel;
						name = name in cache ? [name] : name.match(rnotwhite) || [];
					}
				}

				i = name.length;
				while (i--) {
					delete cache[name[i]];
				}
			}
		},
		hasData: function (owner) {
			return !jQuery.isEmptyObject(this.cache[owner[this.expando]] || {});
		},
		discard: function (owner) {
			if (owner[this.expando]) {
				delete this.cache[owner[this.expando]];
			}
		}
	};
	var data_priv = new Data();

	var data_user = new Data();

	//	Implementation Summary
	//
	//	1. Enforce API surface and semantic compatibility with 1.9.x branch
	//	2. Improve the module's maintainability by reducing the storage
	//		paths to a single mechanism.
	//	3. Use the same single mechanism to support "private" and "user" data.
	//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
	//	5. Avoid exposing implementation details on user objects (eg. expando properties)
	//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

	var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	    rmultiDash = /([A-Z])/g;

	function dataAttr(elem, key, data) {
		var name;

		// If nothing was found internally, try to fetch any
		// data from the HTML5 data-* attribute
		if (data === undefined && elem.nodeType === 1) {
			name = "data-" + key.replace(rmultiDash, "-$1").toLowerCase();
			data = elem.getAttribute(name);

			if (typeof data === "string") {
				try {
					data = data === "true" ? true : data === "false" ? false : data === "null" ? null :
					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data : rbrace.test(data) ? jQuery.parseJSON(data) : data;
				} catch (e) {}

				// Make sure we set the data so it isn't changed later
				data_user.set(elem, key, data);
			} else {
				data = undefined;
			}
		}
		return data;
	}

	jQuery.extend({
		hasData: function (elem) {
			return data_user.hasData(elem) || data_priv.hasData(elem);
		},

		data: function (elem, name, data) {
			return data_user.access(elem, name, data);
		},

		removeData: function (elem, name) {
			data_user.remove(elem, name);
		},

		// TODO: Now that all calls to _data and _removeData have been replaced
		// with direct calls to data_priv methods, these can be deprecated.
		_data: function (elem, name, data) {
			return data_priv.access(elem, name, data);
		},

		_removeData: function (elem, name) {
			data_priv.remove(elem, name);
		}
	});

	jQuery.fn.extend({
		data: function (key, value) {
			var i,
			    name,
			    data,
			    elem = this[0],
			    attrs = elem && elem.attributes;

			// Gets all values
			if (key === undefined) {
				if (this.length) {
					data = data_user.get(elem);

					if (elem.nodeType === 1 && !data_priv.get(elem, "hasDataAttrs")) {
						i = attrs.length;
						while (i--) {

							// Support: IE11+
							// The attrs elements can be null (#14894)
							if (attrs[i]) {
								name = attrs[i].name;
								if (name.indexOf("data-") === 0) {
									name = jQuery.camelCase(name.slice(5));
									dataAttr(elem, name, data[name]);
								}
							}
						}
						data_priv.set(elem, "hasDataAttrs", true);
					}
				}

				return data;
			}

			// Sets multiple values
			if (typeof key === "object") {
				return this.each(function () {
					data_user.set(this, key);
				});
			}

			return access(this, function (value) {
				var data,
				    camelKey = jQuery.camelCase(key);

				// The calling jQuery object (element matches) is not empty
				// (and therefore has an element appears at this[ 0 ]) and the
				// `value` parameter was not undefined. An empty jQuery object
				// will result in `undefined` for elem = this[ 0 ] which will
				// throw an exception if an attempt to read a data cache is made.
				if (elem && value === undefined) {
					// Attempt to get data from the cache
					// with the key as-is
					data = data_user.get(elem, key);
					if (data !== undefined) {
						return data;
					}

					// Attempt to get data from the cache
					// with the key camelized
					data = data_user.get(elem, camelKey);
					if (data !== undefined) {
						return data;
					}

					// Attempt to "discover" the data in
					// HTML5 custom data-* attrs
					data = dataAttr(elem, camelKey, undefined);
					if (data !== undefined) {
						return data;
					}

					// We tried really hard, but the data doesn't exist.
					return;
				}

				// Set the data...
				this.each(function () {
					// First, attempt to store a copy or reference of any
					// data that might've been store with a camelCased key.
					var data = data_user.get(this, camelKey);

					// For HTML5 data-* attribute interop, we have to
					// store property names with dashes in a camelCase form.
					// This might not apply to all properties...*
					data_user.set(this, camelKey, value);

					// *... In the case of properties that might _actually_
					// have dashes, we need to also store a copy of that
					// unchanged property.
					if (key.indexOf("-") !== -1 && data !== undefined) {
						data_user.set(this, key, value);
					}
				});
			}, null, value, arguments.length > 1, null, true);
		},

		removeData: function (key) {
			return this.each(function () {
				data_user.remove(this, key);
			});
		}
	});

	jQuery.extend({
		queue: function (elem, type, data) {
			var queue;

			if (elem) {
				type = (type || "fx") + "queue";
				queue = data_priv.get(elem, type);

				// Speed up dequeue by getting out quickly if this is just a lookup
				if (data) {
					if (!queue || jQuery.isArray(data)) {
						queue = data_priv.access(elem, type, jQuery.makeArray(data));
					} else {
						queue.push(data);
					}
				}
				return queue || [];
			}
		},

		dequeue: function (elem, type) {
			type = type || "fx";

			var queue = jQuery.queue(elem, type),
			    startLength = queue.length,
			    fn = queue.shift(),
			    hooks = jQuery._queueHooks(elem, type),
			    next = function () {
				jQuery.dequeue(elem, type);
			};

			// If the fx queue is dequeued, always remove the progress sentinel
			if (fn === "inprogress") {
				fn = queue.shift();
				startLength--;
			}

			if (fn) {

				// Add a progress sentinel to prevent the fx queue from being
				// automatically dequeued
				if (type === "fx") {
					queue.unshift("inprogress");
				}

				// Clear up the last queue stop function
				delete hooks.stop;
				fn.call(elem, next, hooks);
			}

			if (!startLength && hooks) {
				hooks.empty.fire();
			}
		},

		// Not public - generate a queueHooks object, or return the current one
		_queueHooks: function (elem, type) {
			var key = type + "queueHooks";
			return data_priv.get(elem, key) || data_priv.access(elem, key, {
				empty: jQuery.Callbacks("once memory").add(function () {
					data_priv.remove(elem, [type + "queue", key]);
				})
			});
		}
	});

	jQuery.fn.extend({
		queue: function (type, data) {
			var setter = 2;

			if (typeof type !== "string") {
				data = type;
				type = "fx";
				setter--;
			}

			if (arguments.length < setter) {
				return jQuery.queue(this[0], type);
			}

			return data === undefined ? this : this.each(function () {
				var queue = jQuery.queue(this, type, data);

				// Ensure a hooks for this queue
				jQuery._queueHooks(this, type);

				if (type === "fx" && queue[0] !== "inprogress") {
					jQuery.dequeue(this, type);
				}
			});
		},
		dequeue: function (type) {
			return this.each(function () {
				jQuery.dequeue(this, type);
			});
		},
		clearQueue: function (type) {
			return this.queue(type || "fx", []);
		},
		// Get a promise resolved when queues of a certain type
		// are emptied (fx is the type by default)
		promise: function (type, obj) {
			var tmp,
			    count = 1,
			    defer = jQuery.Deferred(),
			    elements = this,
			    i = this.length,
			    resolve = function () {
				if (! --count) {
					defer.resolveWith(elements, [elements]);
				}
			};

			if (typeof type !== "string") {
				obj = type;
				type = undefined;
			}
			type = type || "fx";

			while (i--) {
				tmp = data_priv.get(elements[i], type + "queueHooks");
				if (tmp && tmp.empty) {
					count++;
					tmp.empty.add(resolve);
				}
			}
			resolve();
			return defer.promise(obj);
		}
	});
	var pnum = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;

	var cssExpand = ["Top", "Right", "Bottom", "Left"];

	var isHidden = function (elem, el) {
		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css(elem, "display") === "none" || !jQuery.contains(elem.ownerDocument, elem);
	};

	var rcheckableType = /^(?:checkbox|radio)$/i;

	(function () {
		var fragment = document.createDocumentFragment(),
		    div = fragment.appendChild(document.createElement("div")),
		    input = document.createElement("input");

		// Support: Safari<=5.1
		// Check state lost if the name is set (#11217)
		// Support: Windows Web Apps (WWA)
		// `name` and `type` must use .setAttribute for WWA (#14901)
		input.setAttribute("type", "radio");
		input.setAttribute("checked", "checked");
		input.setAttribute("name", "t");

		div.appendChild(input);

		// Support: Safari<=5.1, Android<4.2
		// Older WebKit doesn't clone checked state correctly in fragments
		support.checkClone = div.cloneNode(true).cloneNode(true).lastChild.checked;

		// Support: IE<=11+
		// Make sure textarea (and checkbox) defaultValue is properly cloned
		div.innerHTML = "<textarea>x</textarea>";
		support.noCloneChecked = !!div.cloneNode(true).lastChild.defaultValue;
	})();
	var strundefined = typeof undefined;

	support.focusinBubbles = "onfocusin" in window;

	var rkeyEvent = /^key/,
	    rmouseEvent = /^(?:mouse|pointer|contextmenu)|click/,
	    rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	    rtypenamespace = /^([^.]*)(?:\.(.+)|)$/;

	function returnTrue() {
		return true;
	}

	function returnFalse() {
		return false;
	}

	function safeActiveElement() {
		try {
			return document.activeElement;
		} catch (err) {}
	}

	/*
  * Helper functions for managing events -- not part of the public interface.
  * Props to Dean Edwards' addEvent library for many of the ideas.
  */
	jQuery.event = {

		global: {},

		add: function (elem, types, handler, data, selector) {

			var handleObjIn,
			    eventHandle,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = data_priv.get(elem);

			// Don't attach events to noData or text/comment nodes (but allow plain objects)
			if (!elemData) {
				return;
			}

			// Caller can pass in an object of custom data in lieu of the handler
			if (handler.handler) {
				handleObjIn = handler;
				handler = handleObjIn.handler;
				selector = handleObjIn.selector;
			}

			// Make sure that the handler has a unique ID, used to find/remove it later
			if (!handler.guid) {
				handler.guid = jQuery.guid++;
			}

			// Init the element's event structure and main handler, if this is the first
			if (!(events = elemData.events)) {
				events = elemData.events = {};
			}
			if (!(eventHandle = elemData.handle)) {
				eventHandle = elemData.handle = function (e) {
					// Discard the second event of a jQuery.event.trigger() and
					// when an event is called after a page has unloaded
					return typeof jQuery !== strundefined && jQuery.event.triggered !== e.type ? jQuery.event.dispatch.apply(elem, arguments) : undefined;
				};
			}

			// Handle multiple events separated by a space
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// There *must* be a type, no attaching namespace-only handlers
				if (!type) {
					continue;
				}

				// If event changes its type, use the special event handlers for the changed type
				special = jQuery.event.special[type] || {};

				// If selector defined, determine special event api type, otherwise given type
				type = (selector ? special.delegateType : special.bindType) || type;

				// Update special based on newly reset type
				special = jQuery.event.special[type] || {};

				// handleObj is passed to all event handlers
				handleObj = jQuery.extend({
					type: type,
					origType: origType,
					data: data,
					handler: handler,
					guid: handler.guid,
					selector: selector,
					needsContext: selector && jQuery.expr.match.needsContext.test(selector),
					namespace: namespaces.join(".")
				}, handleObjIn);

				// Init the event handler queue if we're the first
				if (!(handlers = events[type])) {
					handlers = events[type] = [];
					handlers.delegateCount = 0;

					// Only use addEventListener if the special events handler returns false
					if (!special.setup || special.setup.call(elem, data, namespaces, eventHandle) === false) {
						if (elem.addEventListener) {
							elem.addEventListener(type, eventHandle, false);
						}
					}
				}

				if (special.add) {
					special.add.call(elem, handleObj);

					if (!handleObj.handler.guid) {
						handleObj.handler.guid = handler.guid;
					}
				}

				// Add to the element's handler list, delegates in front
				if (selector) {
					handlers.splice(handlers.delegateCount++, 0, handleObj);
				} else {
					handlers.push(handleObj);
				}

				// Keep track of which events have ever been used, for event optimization
				jQuery.event.global[type] = true;
			}
		},

		// Detach an event or set of events from an element
		remove: function (elem, types, handler, selector, mappedTypes) {

			var j,
			    origCount,
			    tmp,
			    events,
			    t,
			    handleObj,
			    special,
			    handlers,
			    type,
			    namespaces,
			    origType,
			    elemData = data_priv.hasData(elem) && data_priv.get(elem);

			if (!elemData || !(events = elemData.events)) {
				return;
			}

			// Once for each type.namespace in types; type may be omitted
			types = (types || "").match(rnotwhite) || [""];
			t = types.length;
			while (t--) {
				tmp = rtypenamespace.exec(types[t]) || [];
				type = origType = tmp[1];
				namespaces = (tmp[2] || "").split(".").sort();

				// Unbind all events (on this namespace, if provided) for the element
				if (!type) {
					for (type in events) {
						jQuery.event.remove(elem, type + types[t], handler, selector, true);
					}
					continue;
				}

				special = jQuery.event.special[type] || {};
				type = (selector ? special.delegateType : special.bindType) || type;
				handlers = events[type] || [];
				tmp = tmp[2] && new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)");

				// Remove matching events
				origCount = j = handlers.length;
				while (j--) {
					handleObj = handlers[j];

					if ((mappedTypes || origType === handleObj.origType) && (!handler || handler.guid === handleObj.guid) && (!tmp || tmp.test(handleObj.namespace)) && (!selector || selector === handleObj.selector || selector === "**" && handleObj.selector)) {
						handlers.splice(j, 1);

						if (handleObj.selector) {
							handlers.delegateCount--;
						}
						if (special.remove) {
							special.remove.call(elem, handleObj);
						}
					}
				}

				// Remove generic event handler if we removed something and no more handlers exist
				// (avoids potential for endless recursion during removal of special event handlers)
				if (origCount && !handlers.length) {
					if (!special.teardown || special.teardown.call(elem, namespaces, elemData.handle) === false) {
						jQuery.removeEvent(elem, type, elemData.handle);
					}

					delete events[type];
				}
			}

			// Remove the expando if it's no longer used
			if (jQuery.isEmptyObject(events)) {
				delete elemData.handle;
				data_priv.remove(elem, "events");
			}
		},

		trigger: function (event, data, elem, onlyHandlers) {

			var i,
			    cur,
			    tmp,
			    bubbleType,
			    ontype,
			    handle,
			    special,
			    eventPath = [elem || document],
			    type = hasOwn.call(event, "type") ? event.type : event,
			    namespaces = hasOwn.call(event, "namespace") ? event.namespace.split(".") : [];

			cur = tmp = elem = elem || document;

			// Don't do events on text and comment nodes
			if (elem.nodeType === 3 || elem.nodeType === 8) {
				return;
			}

			// focus/blur morphs to focusin/out; ensure we're not firing them right now
			if (rfocusMorph.test(type + jQuery.event.triggered)) {
				return;
			}

			if (type.indexOf(".") >= 0) {
				// Namespaced trigger; create a regexp to match event type in handle()
				namespaces = type.split(".");
				type = namespaces.shift();
				namespaces.sort();
			}
			ontype = type.indexOf(":") < 0 && "on" + type;

			// Caller can pass in a jQuery.Event object, Object, or just an event type string
			event = event[jQuery.expando] ? event : new jQuery.Event(type, typeof event === "object" && event);

			// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
			event.isTrigger = onlyHandlers ? 2 : 3;
			event.namespace = namespaces.join(".");
			event.namespace_re = event.namespace ? new RegExp("(^|\\.)" + namespaces.join("\\.(?:.*\\.|)") + "(\\.|$)") : null;

			// Clean up the event in case it is being reused
			event.result = undefined;
			if (!event.target) {
				event.target = elem;
			}

			// Clone any incoming data and prepend the event, creating the handler arg list
			data = data == null ? [event] : jQuery.makeArray(data, [event]);

			// Allow special events to draw outside the lines
			special = jQuery.event.special[type] || {};
			if (!onlyHandlers && special.trigger && special.trigger.apply(elem, data) === false) {
				return;
			}

			// Determine event propagation path in advance, per W3C events spec (#9951)
			// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
			if (!onlyHandlers && !special.noBubble && !jQuery.isWindow(elem)) {

				bubbleType = special.delegateType || type;
				if (!rfocusMorph.test(bubbleType + type)) {
					cur = cur.parentNode;
				}
				for (; cur; cur = cur.parentNode) {
					eventPath.push(cur);
					tmp = cur;
				}

				// Only add window if we got to document (e.g., not plain obj or detached DOM)
				if (tmp === (elem.ownerDocument || document)) {
					eventPath.push(tmp.defaultView || tmp.parentWindow || window);
				}
			}

			// Fire handlers on the event path
			i = 0;
			while ((cur = eventPath[i++]) && !event.isPropagationStopped()) {

				event.type = i > 1 ? bubbleType : special.bindType || type;

				// jQuery handler
				handle = (data_priv.get(cur, "events") || {})[event.type] && data_priv.get(cur, "handle");
				if (handle) {
					handle.apply(cur, data);
				}

				// Native handler
				handle = ontype && cur[ontype];
				if (handle && handle.apply && jQuery.acceptData(cur)) {
					event.result = handle.apply(cur, data);
					if (event.result === false) {
						event.preventDefault();
					}
				}
			}
			event.type = type;

			// If nobody prevented the default action, do it now
			if (!onlyHandlers && !event.isDefaultPrevented()) {

				if ((!special._default || special._default.apply(eventPath.pop(), data) === false) && jQuery.acceptData(elem)) {

					// Call a native DOM method on the target with the same name name as the event.
					// Don't do default actions on window, that's where global variables be (#6170)
					if (ontype && jQuery.isFunction(elem[type]) && !jQuery.isWindow(elem)) {

						// Don't re-trigger an onFOO event when we call its FOO() method
						tmp = elem[ontype];

						if (tmp) {
							elem[ontype] = null;
						}

						// Prevent re-triggering of the same event, since we already bubbled it above
						jQuery.event.triggered = type;
						elem[type]();
						jQuery.event.triggered = undefined;

						if (tmp) {
							elem[ontype] = tmp;
						}
					}
				}
			}

			return event.result;
		},

		dispatch: function (event) {

			// Make a writable jQuery.Event from the native event object
			event = jQuery.event.fix(event);

			var i,
			    j,
			    ret,
			    matched,
			    handleObj,
			    handlerQueue = [],
			    args = slice.call(arguments),
			    handlers = (data_priv.get(this, "events") || {})[event.type] || [],
			    special = jQuery.event.special[event.type] || {};

			// Use the fix-ed jQuery.Event rather than the (read-only) native event
			args[0] = event;
			event.delegateTarget = this;

			// Call the preDispatch hook for the mapped type, and let it bail if desired
			if (special.preDispatch && special.preDispatch.call(this, event) === false) {
				return;
			}

			// Determine handlers
			handlerQueue = jQuery.event.handlers.call(this, event, handlers);

			// Run delegates first; they may want to stop propagation beneath us
			i = 0;
			while ((matched = handlerQueue[i++]) && !event.isPropagationStopped()) {
				event.currentTarget = matched.elem;

				j = 0;
				while ((handleObj = matched.handlers[j++]) && !event.isImmediatePropagationStopped()) {

					// Triggered event must either 1) have no namespace, or 2) have namespace(s)
					// a subset or equal to those in the bound event (both can have no namespace).
					if (!event.namespace_re || event.namespace_re.test(handleObj.namespace)) {

						event.handleObj = handleObj;
						event.data = handleObj.data;

						ret = ((jQuery.event.special[handleObj.origType] || {}).handle || handleObj.handler).apply(matched.elem, args);

						if (ret !== undefined) {
							if ((event.result = ret) === false) {
								event.preventDefault();
								event.stopPropagation();
							}
						}
					}
				}
			}

			// Call the postDispatch hook for the mapped type
			if (special.postDispatch) {
				special.postDispatch.call(this, event);
			}

			return event.result;
		},

		handlers: function (event, handlers) {
			var i,
			    matches,
			    sel,
			    handleObj,
			    handlerQueue = [],
			    delegateCount = handlers.delegateCount,
			    cur = event.target;

			// Find delegate handlers
			// Black-hole SVG <use> instance trees (#13180)
			// Avoid non-left-click bubbling in Firefox (#3861)
			if (delegateCount && cur.nodeType && (!event.button || event.type !== "click")) {

				for (; cur !== this; cur = cur.parentNode || this) {

					// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
					if (cur.disabled !== true || event.type !== "click") {
						matches = [];
						for (i = 0; i < delegateCount; i++) {
							handleObj = handlers[i];

							// Don't conflict with Object.prototype properties (#13203)
							sel = handleObj.selector + " ";

							if (matches[sel] === undefined) {
								matches[sel] = handleObj.needsContext ? jQuery(sel, this).index(cur) >= 0 : jQuery.find(sel, this, null, [cur]).length;
							}
							if (matches[sel]) {
								matches.push(handleObj);
							}
						}
						if (matches.length) {
							handlerQueue.push({ elem: cur, handlers: matches });
						}
					}
				}
			}

			// Add the remaining (directly-bound) handlers
			if (delegateCount < handlers.length) {
				handlerQueue.push({ elem: this, handlers: handlers.slice(delegateCount) });
			}

			return handlerQueue;
		},

		// Includes some event props shared by KeyEvent and MouseEvent
		props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),

		fixHooks: {},

		keyHooks: {
			props: "char charCode key keyCode".split(" "),
			filter: function (event, original) {

				// Add which for key events
				if (event.which == null) {
					event.which = original.charCode != null ? original.charCode : original.keyCode;
				}

				return event;
			}
		},

		mouseHooks: {
			props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
			filter: function (event, original) {
				var eventDoc,
				    doc,
				    body,
				    button = original.button;

				// Calculate pageX/Y if missing and clientX/Y available
				if (event.pageX == null && original.clientX != null) {
					eventDoc = event.target.ownerDocument || document;
					doc = eventDoc.documentElement;
					body = eventDoc.body;

					event.pageX = original.clientX + (doc && doc.scrollLeft || body && body.scrollLeft || 0) - (doc && doc.clientLeft || body && body.clientLeft || 0);
					event.pageY = original.clientY + (doc && doc.scrollTop || body && body.scrollTop || 0) - (doc && doc.clientTop || body && body.clientTop || 0);
				}

				// Add which for click: 1 === left; 2 === middle; 3 === right
				// Note: button is not normalized, so don't use it
				if (!event.which && button !== undefined) {
					event.which = button & 1 ? 1 : button & 2 ? 3 : button & 4 ? 2 : 0;
				}

				return event;
			}
		},

		fix: function (event) {
			if (event[jQuery.expando]) {
				return event;
			}

			// Create a writable copy of the event object and normalize some properties
			var i,
			    prop,
			    copy,
			    type = event.type,
			    originalEvent = event,
			    fixHook = this.fixHooks[type];

			if (!fixHook) {
				this.fixHooks[type] = fixHook = rmouseEvent.test(type) ? this.mouseHooks : rkeyEvent.test(type) ? this.keyHooks : {};
			}
			copy = fixHook.props ? this.props.concat(fixHook.props) : this.props;

			event = new jQuery.Event(originalEvent);

			i = copy.length;
			while (i--) {
				prop = copy[i];
				event[prop] = originalEvent[prop];
			}

			// Support: Cordova 2.5 (WebKit) (#13255)
			// All events should have a target; Cordova deviceready doesn't
			if (!event.target) {
				event.target = document;
			}

			// Support: Safari 6.0+, Chrome<28
			// Target should not be a text node (#504, #13143)
			if (event.target.nodeType === 3) {
				event.target = event.target.parentNode;
			}

			return fixHook.filter ? fixHook.filter(event, originalEvent) : event;
		},

		special: {
			load: {
				// Prevent triggered image.load events from bubbling to window.load
				noBubble: true
			},
			focus: {
				// Fire native event if possible so blur/focus sequence is correct
				trigger: function () {
					if (this !== safeActiveElement() && this.focus) {
						this.focus();
						return false;
					}
				},
				delegateType: "focusin"
			},
			blur: {
				trigger: function () {
					if (this === safeActiveElement() && this.blur) {
						this.blur();
						return false;
					}
				},
				delegateType: "focusout"
			},
			click: {
				// For checkbox, fire native event so checked state will be right
				trigger: function () {
					if (this.type === "checkbox" && this.click && jQuery.nodeName(this, "input")) {
						this.click();
						return false;
					}
				},

				// For cross-browser consistency, don't fire native .click() on links
				_default: function (event) {
					return jQuery.nodeName(event.target, "a");
				}
			},

			beforeunload: {
				postDispatch: function (event) {

					// Support: Firefox 20+
					// Firefox doesn't alert if the returnValue field is not set.
					if (event.result !== undefined && event.originalEvent) {
						event.originalEvent.returnValue = event.result;
					}
				}
			}
		},

		simulate: function (type, elem, event, bubble) {
			// Piggyback on a donor event to simulate a different one.
			// Fake originalEvent to avoid donor's stopPropagation, but if the
			// simulated event prevents default then we do the same on the donor.
			var e = jQuery.extend(new jQuery.Event(), event, {
				type: type,
				isSimulated: true,
				originalEvent: {}
			});
			if (bubble) {
				jQuery.event.trigger(e, null, elem);
			} else {
				jQuery.event.dispatch.call(elem, e);
			}
			if (e.isDefaultPrevented()) {
				event.preventDefault();
			}
		}
	};

	jQuery.removeEvent = function (elem, type, handle) {
		if (elem.removeEventListener) {
			elem.removeEventListener(type, handle, false);
		}
	};

	jQuery.Event = function (src, props) {
		// Allow instantiation without the 'new' keyword
		if (!(this instanceof jQuery.Event)) {
			return new jQuery.Event(src, props);
		}

		// Event object
		if (src && src.type) {
			this.originalEvent = src;
			this.type = src.type;

			// Events bubbling up the document may have been marked as prevented
			// by a handler lower down the tree; reflect the correct value.
			this.isDefaultPrevented = src.defaultPrevented || src.defaultPrevented === undefined &&
			// Support: Android<4.0
			src.returnValue === false ? returnTrue : returnFalse;

			// Event type
		} else {
			this.type = src;
		}

		// Put explicitly provided properties onto the event object
		if (props) {
			jQuery.extend(this, props);
		}

		// Create a timestamp if incoming event doesn't have one
		this.timeStamp = src && src.timeStamp || jQuery.now();

		// Mark it as fixed
		this[jQuery.expando] = true;
	};

	// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
	// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
	jQuery.Event.prototype = {
		isDefaultPrevented: returnFalse,
		isPropagationStopped: returnFalse,
		isImmediatePropagationStopped: returnFalse,

		preventDefault: function () {
			var e = this.originalEvent;

			this.isDefaultPrevented = returnTrue;

			if (e && e.preventDefault) {
				e.preventDefault();
			}
		},
		stopPropagation: function () {
			var e = this.originalEvent;

			this.isPropagationStopped = returnTrue;

			if (e && e.stopPropagation) {
				e.stopPropagation();
			}
		},
		stopImmediatePropagation: function () {
			var e = this.originalEvent;

			this.isImmediatePropagationStopped = returnTrue;

			if (e && e.stopImmediatePropagation) {
				e.stopImmediatePropagation();
			}

			this.stopPropagation();
		}
	};

	// Create mouseenter/leave events using mouseover/out and event-time checks
	// Support: Chrome 15+
	jQuery.each({
		mouseenter: "mouseover",
		mouseleave: "mouseout",
		pointerenter: "pointerover",
		pointerleave: "pointerout"
	}, function (orig, fix) {
		jQuery.event.special[orig] = {
			delegateType: fix,
			bindType: fix,

			handle: function (event) {
				var ret,
				    target = this,
				    related = event.relatedTarget,
				    handleObj = event.handleObj;

				// For mousenter/leave call the handler if related is outside the target.
				// NB: No relatedTarget if the mouse left/entered the browser window
				if (!related || related !== target && !jQuery.contains(target, related)) {
					event.type = handleObj.origType;
					ret = handleObj.handler.apply(this, arguments);
					event.type = fix;
				}
				return ret;
			}
		};
	});

	// Support: Firefox, Chrome, Safari
	// Create "bubbling" focus and blur events
	if (!support.focusinBubbles) {
		jQuery.each({ focus: "focusin", blur: "focusout" }, function (orig, fix) {

			// Attach a single capturing handler on the document while someone wants focusin/focusout
			var handler = function (event) {
				jQuery.event.simulate(fix, event.target, jQuery.event.fix(event), true);
			};

			jQuery.event.special[fix] = {
				setup: function () {
					var doc = this.ownerDocument || this,
					    attaches = data_priv.access(doc, fix);

					if (!attaches) {
						doc.addEventListener(orig, handler, true);
					}
					data_priv.access(doc, fix, (attaches || 0) + 1);
				},
				teardown: function () {
					var doc = this.ownerDocument || this,
					    attaches = data_priv.access(doc, fix) - 1;

					if (!attaches) {
						doc.removeEventListener(orig, handler, true);
						data_priv.remove(doc, fix);
					} else {
						data_priv.access(doc, fix, attaches);
					}
				}
			};
		});
	}

	jQuery.fn.extend({

		on: function (types, selector, data, fn, /*INTERNAL*/one) {
			var origFn, type;

			// Types can be a map of types/handlers
			if (typeof types === "object") {
				// ( types-Object, selector, data )
				if (typeof selector !== "string") {
					// ( types-Object, data )
					data = data || selector;
					selector = undefined;
				}
				for (type in types) {
					this.on(type, selector, data, types[type], one);
				}
				return this;
			}

			if (data == null && fn == null) {
				// ( types, fn )
				fn = selector;
				data = selector = undefined;
			} else if (fn == null) {
				if (typeof selector === "string") {
					// ( types, selector, fn )
					fn = data;
					data = undefined;
				} else {
					// ( types, data, fn )
					fn = data;
					data = selector;
					selector = undefined;
				}
			}
			if (fn === false) {
				fn = returnFalse;
			} else if (!fn) {
				return this;
			}

			if (one === 1) {
				origFn = fn;
				fn = function (event) {
					// Can use an empty set, since event contains the info
					jQuery().off(event);
					return origFn.apply(this, arguments);
				};
				// Use same guid so caller can remove using origFn
				fn.guid = origFn.guid || (origFn.guid = jQuery.guid++);
			}
			return this.each(function () {
				jQuery.event.add(this, types, fn, data, selector);
			});
		},
		one: function (types, selector, data, fn) {
			return this.on(types, selector, data, fn, 1);
		},
		off: function (types, selector, fn) {
			var handleObj, type;
			if (types && types.preventDefault && types.handleObj) {
				// ( event )  dispatched jQuery.Event
				handleObj = types.handleObj;
				jQuery(types.delegateTarget).off(handleObj.namespace ? handleObj.origType + "." + handleObj.namespace : handleObj.origType, handleObj.selector, handleObj.handler);
				return this;
			}
			if (typeof types === "object") {
				// ( types-object [, selector] )
				for (type in types) {
					this.off(type, selector, types[type]);
				}
				return this;
			}
			if (selector === false || typeof selector === "function") {
				// ( types [, fn] )
				fn = selector;
				selector = undefined;
			}
			if (fn === false) {
				fn = returnFalse;
			}
			return this.each(function () {
				jQuery.event.remove(this, types, fn, selector);
			});
		},

		trigger: function (type, data) {
			return this.each(function () {
				jQuery.event.trigger(type, data, this);
			});
		},
		triggerHandler: function (type, data) {
			var elem = this[0];
			if (elem) {
				return jQuery.event.trigger(type, data, elem, true);
			}
		}
	});

	var rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
	    rtagName = /<([\w:]+)/,
	    rhtml = /<|&#?\w+;/,
	    rnoInnerhtml = /<(?:script|style|link)/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	    rscriptType = /^$|\/(?:java|ecma)script/i,
	    rscriptTypeMasked = /^true\/(.*)/,
	    rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,


	// We have to close these tags to support XHTML (#13200)
	wrapMap = {

		// Support: IE9
		option: [1, "<select multiple='multiple'>", "</select>"],

		thead: [1, "<table>", "</table>"],
		col: [2, "<table><colgroup>", "</colgroup></table>"],
		tr: [2, "<table><tbody>", "</tbody></table>"],
		td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],

		_default: [0, "", ""]
	};

	// Support: IE9
	wrapMap.optgroup = wrapMap.option;

	wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
	wrapMap.th = wrapMap.td;

	// Support: 1.x compatibility
	// Manipulating tables requires a tbody
	function manipulationTarget(elem, content) {
		return jQuery.nodeName(elem, "table") && jQuery.nodeName(content.nodeType !== 11 ? content : content.firstChild, "tr") ? elem.getElementsByTagName("tbody")[0] || elem.appendChild(elem.ownerDocument.createElement("tbody")) : elem;
	}

	// Replace/restore the type attribute of script elements for safe DOM manipulation
	function disableScript(elem) {
		elem.type = (elem.getAttribute("type") !== null) + "/" + elem.type;
		return elem;
	}
	function restoreScript(elem) {
		var match = rscriptTypeMasked.exec(elem.type);

		if (match) {
			elem.type = match[1];
		} else {
			elem.removeAttribute("type");
		}

		return elem;
	}

	// Mark scripts as having already been evaluated
	function setGlobalEval(elems, refElements) {
		var i = 0,
		    l = elems.length;

		for (; i < l; i++) {
			data_priv.set(elems[i], "globalEval", !refElements || data_priv.get(refElements[i], "globalEval"));
		}
	}

	function cloneCopyEvent(src, dest) {
		var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

		if (dest.nodeType !== 1) {
			return;
		}

		// 1. Copy private data: events, handlers, etc.
		if (data_priv.hasData(src)) {
			pdataOld = data_priv.access(src);
			pdataCur = data_priv.set(dest, pdataOld);
			events = pdataOld.events;

			if (events) {
				delete pdataCur.handle;
				pdataCur.events = {};

				for (type in events) {
					for (i = 0, l = events[type].length; i < l; i++) {
						jQuery.event.add(dest, type, events[type][i]);
					}
				}
			}
		}

		// 2. Copy user data
		if (data_user.hasData(src)) {
			udataOld = data_user.access(src);
			udataCur = jQuery.extend({}, udataOld);

			data_user.set(dest, udataCur);
		}
	}

	function getAll(context, tag) {
		var ret = context.getElementsByTagName ? context.getElementsByTagName(tag || "*") : context.querySelectorAll ? context.querySelectorAll(tag || "*") : [];

		return tag === undefined || tag && jQuery.nodeName(context, tag) ? jQuery.merge([context], ret) : ret;
	}

	// Fix IE bugs, see support tests
	function fixInput(src, dest) {
		var nodeName = dest.nodeName.toLowerCase();

		// Fails to persist the checked state of a cloned checkbox or radio button.
		if (nodeName === "input" && rcheckableType.test(src.type)) {
			dest.checked = src.checked;

			// Fails to return the selected option to the default selected state when cloning options
		} else if (nodeName === "input" || nodeName === "textarea") {
			dest.defaultValue = src.defaultValue;
		}
	}

	jQuery.extend({
		clone: function (elem, dataAndEvents, deepDataAndEvents) {
			var i,
			    l,
			    srcElements,
			    destElements,
			    clone = elem.cloneNode(true),
			    inPage = jQuery.contains(elem.ownerDocument, elem);

			// Fix IE cloning issues
			if (!support.noCloneChecked && (elem.nodeType === 1 || elem.nodeType === 11) && !jQuery.isXMLDoc(elem)) {

				// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
				destElements = getAll(clone);
				srcElements = getAll(elem);

				for (i = 0, l = srcElements.length; i < l; i++) {
					fixInput(srcElements[i], destElements[i]);
				}
			}

			// Copy the events from the original to the clone
			if (dataAndEvents) {
				if (deepDataAndEvents) {
					srcElements = srcElements || getAll(elem);
					destElements = destElements || getAll(clone);

					for (i = 0, l = srcElements.length; i < l; i++) {
						cloneCopyEvent(srcElements[i], destElements[i]);
					}
				} else {
					cloneCopyEvent(elem, clone);
				}
			}

			// Preserve script evaluation history
			destElements = getAll(clone, "script");
			if (destElements.length > 0) {
				setGlobalEval(destElements, !inPage && getAll(elem, "script"));
			}

			// Return the cloned set
			return clone;
		},

		buildFragment: function (elems, context, scripts, selection) {
			var elem,
			    tmp,
			    tag,
			    wrap,
			    contains,
			    j,
			    fragment = context.createDocumentFragment(),
			    nodes = [],
			    i = 0,
			    l = elems.length;

			for (; i < l; i++) {
				elem = elems[i];

				if (elem || elem === 0) {

					// Add nodes directly
					if (jQuery.type(elem) === "object") {
						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, elem.nodeType ? [elem] : elem);

						// Convert non-html into a text node
					} else if (!rhtml.test(elem)) {
						nodes.push(context.createTextNode(elem));

						// Convert html into DOM nodes
					} else {
						tmp = tmp || fragment.appendChild(context.createElement("div"));

						// Deserialize a standard representation
						tag = (rtagName.exec(elem) || ["", ""])[1].toLowerCase();
						wrap = wrapMap[tag] || wrapMap._default;
						tmp.innerHTML = wrap[1] + elem.replace(rxhtmlTag, "<$1></$2>") + wrap[2];

						// Descend through wrappers to the right content
						j = wrap[0];
						while (j--) {
							tmp = tmp.lastChild;
						}

						// Support: QtWebKit, PhantomJS
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge(nodes, tmp.childNodes);

						// Remember the top-level container
						tmp = fragment.firstChild;

						// Ensure the created nodes are orphaned (#12392)
						tmp.textContent = "";
					}
				}
			}

			// Remove wrapper from fragment
			fragment.textContent = "";

			i = 0;
			while (elem = nodes[i++]) {

				// #4087 - If origin and destination elements are the same, and this is
				// that element, do not do anything
				if (selection && jQuery.inArray(elem, selection) !== -1) {
					continue;
				}

				contains = jQuery.contains(elem.ownerDocument, elem);

				// Append to fragment
				tmp = getAll(fragment.appendChild(elem), "script");

				// Preserve script evaluation history
				if (contains) {
					setGlobalEval(tmp);
				}

				// Capture executables
				if (scripts) {
					j = 0;
					while (elem = tmp[j++]) {
						if (rscriptType.test(elem.type || "")) {
							scripts.push(elem);
						}
					}
				}
			}

			return fragment;
		},

		cleanData: function (elems) {
			var data,
			    elem,
			    type,
			    key,
			    special = jQuery.event.special,
			    i = 0;

			for (; (elem = elems[i]) !== undefined; i++) {
				if (jQuery.acceptData(elem)) {
					key = elem[data_priv.expando];

					if (key && (data = data_priv.cache[key])) {
						if (data.events) {
							for (type in data.events) {
								if (special[type]) {
									jQuery.event.remove(elem, type);

									// This is a shortcut to avoid jQuery.event.remove's overhead
								} else {
									jQuery.removeEvent(elem, type, data.handle);
								}
							}
						}
						if (data_priv.cache[key]) {
							// Discard any remaining `private` data
							delete data_priv.cache[key];
						}
					}
				}
				// Discard any remaining `user` data
				delete data_user.cache[elem[data_user.expando]];
			}
		}
	});

	jQuery.fn.extend({
		text: function (value) {
			return access(this, function (value) {
				return value === undefined ? jQuery.text(this) : this.empty().each(function () {
					if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
						this.textContent = value;
					}
				});
			}, null, value, arguments.length);
		},

		append: function () {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.appendChild(elem);
				}
			});
		},

		prepend: function () {
			return this.domManip(arguments, function (elem) {
				if (this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9) {
					var target = manipulationTarget(this, elem);
					target.insertBefore(elem, target.firstChild);
				}
			});
		},

		before: function () {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this);
				}
			});
		},

		after: function () {
			return this.domManip(arguments, function (elem) {
				if (this.parentNode) {
					this.parentNode.insertBefore(elem, this.nextSibling);
				}
			});
		},

		remove: function (selector, keepData /* Internal Use Only */) {
			var elem,
			    elems = selector ? jQuery.filter(selector, this) : this,
			    i = 0;

			for (; (elem = elems[i]) != null; i++) {
				if (!keepData && elem.nodeType === 1) {
					jQuery.cleanData(getAll(elem));
				}

				if (elem.parentNode) {
					if (keepData && jQuery.contains(elem.ownerDocument, elem)) {
						setGlobalEval(getAll(elem, "script"));
					}
					elem.parentNode.removeChild(elem);
				}
			}

			return this;
		},

		empty: function () {
			var elem,
			    i = 0;

			for (; (elem = this[i]) != null; i++) {
				if (elem.nodeType === 1) {

					// Prevent memory leaks
					jQuery.cleanData(getAll(elem, false));

					// Remove any remaining nodes
					elem.textContent = "";
				}
			}

			return this;
		},

		clone: function (dataAndEvents, deepDataAndEvents) {
			dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
			deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

			return this.map(function () {
				return jQuery.clone(this, dataAndEvents, deepDataAndEvents);
			});
		},

		html: function (value) {
			return access(this, function (value) {
				var elem = this[0] || {},
				    i = 0,
				    l = this.length;

				if (value === undefined && elem.nodeType === 1) {
					return elem.innerHTML;
				}

				// See if we can take a shortcut and just use innerHTML
				if (typeof value === "string" && !rnoInnerhtml.test(value) && !wrapMap[(rtagName.exec(value) || ["", ""])[1].toLowerCase()]) {

					value = value.replace(rxhtmlTag, "<$1></$2>");

					try {
						for (; i < l; i++) {
							elem = this[i] || {};

							// Remove element nodes and prevent memory leaks
							if (elem.nodeType === 1) {
								jQuery.cleanData(getAll(elem, false));
								elem.innerHTML = value;
							}
						}

						elem = 0;

						// If using innerHTML throws an exception, use the fallback method
					} catch (e) {}
				}

				if (elem) {
					this.empty().append(value);
				}
			}, null, value, arguments.length);
		},

		replaceWith: function () {
			var arg = arguments[0];

			// Make the changes, replacing each context element with the new content
			this.domManip(arguments, function (elem) {
				arg = this.parentNode;

				jQuery.cleanData(getAll(this));

				if (arg) {
					arg.replaceChild(elem, this);
				}
			});

			// Force removal if there was no new content (e.g., from empty arguments)
			return arg && (arg.length || arg.nodeType) ? this : this.remove();
		},

		detach: function (selector) {
			return this.remove(selector, true);
		},

		domManip: function (args, callback) {

			// Flatten any nested arrays
			args = concat.apply([], args);

			var fragment,
			    first,
			    scripts,
			    hasScripts,
			    node,
			    doc,
			    i = 0,
			    l = this.length,
			    set = this,
			    iNoClone = l - 1,
			    value = args[0],
			    isFunction = jQuery.isFunction(value);

			// We can't cloneNode fragments that contain checked, in WebKit
			if (isFunction || l > 1 && typeof value === "string" && !support.checkClone && rchecked.test(value)) {
				return this.each(function (index) {
					var self = set.eq(index);
					if (isFunction) {
						args[0] = value.call(this, index, self.html());
					}
					self.domManip(args, callback);
				});
			}

			if (l) {
				fragment = jQuery.buildFragment(args, this[0].ownerDocument, false, this);
				first = fragment.firstChild;

				if (fragment.childNodes.length === 1) {
					fragment = first;
				}

				if (first) {
					scripts = jQuery.map(getAll(fragment, "script"), disableScript);
					hasScripts = scripts.length;

					// Use the original fragment for the last item instead of the first because it can end up
					// being emptied incorrectly in certain situations (#8070).
					for (; i < l; i++) {
						node = fragment;

						if (i !== iNoClone) {
							node = jQuery.clone(node, true, true);

							// Keep references to cloned scripts for later restoration
							if (hasScripts) {
								// Support: QtWebKit
								// jQuery.merge because push.apply(_, arraylike) throws
								jQuery.merge(scripts, getAll(node, "script"));
							}
						}

						callback.call(this[i], node, i);
					}

					if (hasScripts) {
						doc = scripts[scripts.length - 1].ownerDocument;

						// Reenable scripts
						jQuery.map(scripts, restoreScript);

						// Evaluate executable scripts on first document insertion
						for (i = 0; i < hasScripts; i++) {
							node = scripts[i];
							if (rscriptType.test(node.type || "") && !data_priv.access(node, "globalEval") && jQuery.contains(doc, node)) {

								if (node.src) {
									// Optional AJAX dependency, but won't run scripts if not present
									if (jQuery._evalUrl) {
										jQuery._evalUrl(node.src);
									}
								} else {
									jQuery.globalEval(node.textContent.replace(rcleanScript, ""));
								}
							}
						}
					}
				}
			}

			return this;
		}
	});

	jQuery.each({
		appendTo: "append",
		prependTo: "prepend",
		insertBefore: "before",
		insertAfter: "after",
		replaceAll: "replaceWith"
	}, function (name, original) {
		jQuery.fn[name] = function (selector) {
			var elems,
			    ret = [],
			    insert = jQuery(selector),
			    last = insert.length - 1,
			    i = 0;

			for (; i <= last; i++) {
				elems = i === last ? this : this.clone(true);
				jQuery(insert[i])[original](elems);

				// Support: QtWebKit
				// .get() because push.apply(_, arraylike) throws
				push.apply(ret, elems.get());
			}

			return this.pushStack(ret);
		};
	});

	var iframe,
	    elemdisplay = {};

	/**
  * Retrieve the actual display of a element
  * @param {String} name nodeName of the element
  * @param {Object} doc Document object
  */
	// Called only from within defaultDisplay
	function actualDisplay(name, doc) {
		var style,
		    elem = jQuery(doc.createElement(name)).appendTo(doc.body),


		// getDefaultComputedStyle might be reliably used only on attached element
		display = window.getDefaultComputedStyle && (style = window.getDefaultComputedStyle(elem[0])) ?

		// Use of this method is a temporary fix (more like optimization) until something better comes along,
		// since it was removed from specification and supported only in FF
		style.display : jQuery.css(elem[0], "display");

		// We don't have any data stored on the element,
		// so use "detach" method as fast way to get rid of the element
		elem.detach();

		return display;
	}

	/**
  * Try to determine the default display value of an element
  * @param {String} nodeName
  */
	function defaultDisplay(nodeName) {
		var doc = document,
		    display = elemdisplay[nodeName];

		if (!display) {
			display = actualDisplay(nodeName, doc);

			// If the simple way fails, read from inside an iframe
			if (display === "none" || !display) {

				// Use the already-created iframe if possible
				iframe = (iframe || jQuery("<iframe frameborder='0' width='0' height='0'/>")).appendTo(doc.documentElement);

				// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
				doc = iframe[0].contentDocument;

				// Support: IE
				doc.write();
				doc.close();

				display = actualDisplay(nodeName, doc);
				iframe.detach();
			}

			// Store the correct default display
			elemdisplay[nodeName] = display;
		}

		return display;
	}
	var rmargin = /^margin/;

	var rnumnonpx = new RegExp("^(" + pnum + ")(?!px)[a-z%]+$", "i");

	var getStyles = function (elem) {
		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		if (elem.ownerDocument.defaultView.opener) {
			return elem.ownerDocument.defaultView.getComputedStyle(elem, null);
		}

		return window.getComputedStyle(elem, null);
	};

	function curCSS(elem, name, computed) {
		var width,
		    minWidth,
		    maxWidth,
		    ret,
		    style = elem.style;

		computed = computed || getStyles(elem);

		// Support: IE9
		// getPropertyValue is only needed for .css('filter') (#12537)
		if (computed) {
			ret = computed.getPropertyValue(name) || computed[name];
		}

		if (computed) {

			if (ret === "" && !jQuery.contains(elem.ownerDocument, elem)) {
				ret = jQuery.style(elem, name);
			}

			// Support: iOS < 6
			// A tribute to the "awesome hack by Dean Edwards"
			// iOS < 6 (at least) returns percentage for a larger set of values, but width seems to be reliably pixels
			// this is against the CSSOM draft spec: http://dev.w3.org/csswg/cssom/#resolved-values
			if (rnumnonpx.test(ret) && rmargin.test(name)) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		return ret !== undefined ?
		// Support: IE
		// IE returns zIndex value as an integer.
		ret + "" : ret;
	}

	function addGetHookIf(conditionFn, hookFn) {
		// Define the hook, we'll check on the first run if it's really needed.
		return {
			get: function () {
				if (conditionFn()) {
					// Hook not needed (or it's not possible to use it due
					// to missing dependency), remove it.
					delete this.get;
					return;
				}

				// Hook needed; redefine it so that the support test is not executed again.
				return (this.get = hookFn).apply(this, arguments);
			}
		};
	}

	(function () {
		var pixelPositionVal,
		    boxSizingReliableVal,
		    docElem = document.documentElement,
		    container = document.createElement("div"),
		    div = document.createElement("div");

		if (!div.style) {
			return;
		}

		// Support: IE9-11+
		// Style of cloned element affects source element cloned (#8908)
		div.style.backgroundClip = "content-box";
		div.cloneNode(true).style.backgroundClip = "";
		support.clearCloneStyle = div.style.backgroundClip === "content-box";

		container.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;" + "position:absolute";
		container.appendChild(div);

		// Executing both pixelPosition & boxSizingReliable tests require only one layout
		// so they're executed at the same time to save the second computation.
		function computePixelPositionAndBoxSizingReliable() {
			div.style.cssText =
			// Support: Firefox<29, Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;-moz-box-sizing:border-box;" + "box-sizing:border-box;display:block;margin-top:1%;top:1%;" + "border:1px;padding:1px;width:4px;position:absolute";
			div.innerHTML = "";
			docElem.appendChild(container);

			var divStyle = window.getComputedStyle(div, null);
			pixelPositionVal = divStyle.top !== "1%";
			boxSizingReliableVal = divStyle.width === "4px";

			docElem.removeChild(container);
		}

		// Support: node.js jsdom
		// Don't assume that getComputedStyle is a property of the global object
		if (window.getComputedStyle) {
			jQuery.extend(support, {
				pixelPosition: function () {

					// This test is executed only once but we still do memoizing
					// since we can use the boxSizingReliable pre-computing.
					// No need to check if the test was already performed, though.
					computePixelPositionAndBoxSizingReliable();
					return pixelPositionVal;
				},
				boxSizingReliable: function () {
					if (boxSizingReliableVal == null) {
						computePixelPositionAndBoxSizingReliable();
					}
					return boxSizingReliableVal;
				},
				reliableMarginRight: function () {

					// Support: Android 2.3
					// Check if div with explicit width and no margin-right incorrectly
					// gets computed margin-right based on width of container. (#3333)
					// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
					// This support function is only executed once so no memoizing is needed.
					var ret,
					    marginDiv = div.appendChild(document.createElement("div"));

					// Reset CSS: box-sizing; display; margin; border; padding
					marginDiv.style.cssText = div.style.cssText =
					// Support: Firefox<29, Android 2.3
					// Vendor-prefix box-sizing
					"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" + "box-sizing:content-box;display:block;margin:0;border:0;padding:0";
					marginDiv.style.marginRight = marginDiv.style.width = "0";
					div.style.width = "1px";
					docElem.appendChild(container);

					ret = !parseFloat(window.getComputedStyle(marginDiv, null).marginRight);

					docElem.removeChild(container);
					div.removeChild(marginDiv);

					return ret;
				}
			});
		}
	})();

	// A method for quickly swapping in/out CSS properties to get correct calculations.
	jQuery.swap = function (elem, options, callback, args) {
		var ret,
		    name,
		    old = {};

		// Remember the old values, and insert the new ones
		for (name in options) {
			old[name] = elem.style[name];
			elem.style[name] = options[name];
		}

		ret = callback.apply(elem, args || []);

		// Revert the old values
		for (name in options) {
			elem.style[name] = old[name];
		}

		return ret;
	};

	var
	// Swappable if display is none or starts with table except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	    rnumsplit = new RegExp("^(" + pnum + ")(.*)$", "i"),
	    rrelNum = new RegExp("^([+-])=(" + pnum + ")", "i"),
	    cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	    cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},
	    cssPrefixes = ["Webkit", "O", "Moz", "ms"];

	// Return a css property mapped to a potentially vendor prefixed property
	function vendorPropName(style, name) {

		// Shortcut for names that are not vendor prefixed
		if (name in style) {
			return name;
		}

		// Check for vendor prefixed names
		var capName = name[0].toUpperCase() + name.slice(1),
		    origName = name,
		    i = cssPrefixes.length;

		while (i--) {
			name = cssPrefixes[i] + capName;
			if (name in style) {
				return name;
			}
		}

		return origName;
	}

	function setPositiveNumber(elem, value, subtract) {
		var matches = rnumsplit.exec(value);
		return matches ?
		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max(0, matches[1] - (subtract || 0)) + (matches[2] || "px") : value;
	}

	function augmentWidthOrHeight(elem, name, extra, isBorderBox, styles) {
		var i = extra === (isBorderBox ? "border" : "content") ?
		// If we already have the right measurement, avoid augmentation
		4 :
		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,
		    val = 0;

		for (; i < 4; i += 2) {
			// Both box models exclude margin, so add it if we want it
			if (extra === "margin") {
				val += jQuery.css(elem, extra + cssExpand[i], true, styles);
			}

			if (isBorderBox) {
				// border-box includes padding, so remove it if we want content
				if (extra === "content") {
					val -= jQuery.css(elem, "padding" + cssExpand[i], true, styles);
				}

				// At this point, extra isn't border nor margin, so remove border
				if (extra !== "margin") {
					val -= jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			} else {
				// At this point, extra isn't content, so add padding
				val += jQuery.css(elem, "padding" + cssExpand[i], true, styles);

				// At this point, extra isn't content nor padding, so add border
				if (extra !== "padding") {
					val += jQuery.css(elem, "border" + cssExpand[i] + "Width", true, styles);
				}
			}
		}

		return val;
	}

	function getWidthOrHeight(elem, name, extra) {

		// Start with offset property, which is equivalent to the border-box value
		var valueIsBorderBox = true,
		    val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		    styles = getStyles(elem),
		    isBorderBox = jQuery.css(elem, "boxSizing", false, styles) === "border-box";

		// Some non-html elements return undefined for offsetWidth, so check for null/undefined
		// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
		// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
		if (val <= 0 || val == null) {
			// Fall back to computed then uncomputed css if necessary
			val = curCSS(elem, name, styles);
			if (val < 0 || val == null) {
				val = elem.style[name];
			}

			// Computed unit is not pixels. Stop here and return.
			if (rnumnonpx.test(val)) {
				return val;
			}

			// Check for style in case a browser which returns unreliable values
			// for getComputedStyle silently falls back to the reliable elem.style
			valueIsBorderBox = isBorderBox && (support.boxSizingReliable() || val === elem.style[name]);

			// Normalize "", auto, and prepare for extra
			val = parseFloat(val) || 0;
		}

		// Use the active box-sizing model to add/subtract irrelevant styles
		return val + augmentWidthOrHeight(elem, name, extra || (isBorderBox ? "border" : "content"), valueIsBorderBox, styles) + "px";
	}

	function showHide(elements, show) {
		var display,
		    elem,
		    hidden,
		    values = [],
		    index = 0,
		    length = elements.length;

		for (; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}

			values[index] = data_priv.get(elem, "olddisplay");
			display = elem.style.display;
			if (show) {
				// Reset the inline display of this element to learn if it is
				// being hidden by cascaded rules or not
				if (!values[index] && display === "none") {
					elem.style.display = "";
				}

				// Set elements which have been overridden with display: none
				// in a stylesheet to whatever the default browser style is
				// for such an element
				if (elem.style.display === "" && isHidden(elem)) {
					values[index] = data_priv.access(elem, "olddisplay", defaultDisplay(elem.nodeName));
				}
			} else {
				hidden = isHidden(elem);

				if (display !== "none" || !hidden) {
					data_priv.set(elem, "olddisplay", hidden ? display : jQuery.css(elem, "display"));
				}
			}
		}

		// Set the display of most of the elements in a second loop
		// to avoid the constant reflow
		for (index = 0; index < length; index++) {
			elem = elements[index];
			if (!elem.style) {
				continue;
			}
			if (!show || elem.style.display === "none" || elem.style.display === "") {
				elem.style.display = show ? values[index] || "" : "none";
			}
		}

		return elements;
	}

	jQuery.extend({

		// Add in style property hooks for overriding the default
		// behavior of getting and setting a style property
		cssHooks: {
			opacity: {
				get: function (elem, computed) {
					if (computed) {

						// We should always get a number back from opacity
						var ret = curCSS(elem, "opacity");
						return ret === "" ? "1" : ret;
					}
				}
			}
		},

		// Don't automatically add "px" to these possibly-unitless properties
		cssNumber: {
			"columnCount": true,
			"fillOpacity": true,
			"flexGrow": true,
			"flexShrink": true,
			"fontWeight": true,
			"lineHeight": true,
			"opacity": true,
			"order": true,
			"orphans": true,
			"widows": true,
			"zIndex": true,
			"zoom": true
		},

		// Add in properties whose names you wish to fix before
		// setting or getting the value
		cssProps: {
			"float": "cssFloat"
		},

		// Get and set the style property on a DOM Node
		style: function (elem, name, value, extra) {

			// Don't set styles on text and comment nodes
			if (!elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style) {
				return;
			}

			// Make sure that we're working with the right name
			var ret,
			    type,
			    hooks,
			    origName = jQuery.camelCase(name),
			    style = elem.style;

			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(style, origName));

			// Gets hook for the prefixed version, then unprefixed version
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// Check if we're setting a value
			if (value !== undefined) {
				type = typeof value;

				// Convert "+=" or "-=" to relative numbers (#7345)
				if (type === "string" && (ret = rrelNum.exec(value))) {
					value = (ret[1] + 1) * ret[2] + parseFloat(jQuery.css(elem, name));
					// Fixes bug #9237
					type = "number";
				}

				// Make sure that null and NaN values aren't set (#7116)
				if (value == null || value !== value) {
					return;
				}

				// If a number, add 'px' to the (except for certain CSS properties)
				if (type === "number" && !jQuery.cssNumber[origName]) {
					value += "px";
				}

				// Support: IE9-11+
				// background-* props affect original clone's values
				if (!support.clearCloneStyle && value === "" && name.indexOf("background") === 0) {
					style[name] = "inherit";
				}

				// If a hook was provided, use that value, otherwise just set the specified value
				if (!hooks || !("set" in hooks) || (value = hooks.set(elem, value, extra)) !== undefined) {
					style[name] = value;
				}
			} else {
				// If a hook was provided get the non-computed value from there
				if (hooks && "get" in hooks && (ret = hooks.get(elem, false, extra)) !== undefined) {
					return ret;
				}

				// Otherwise just get the value from the style object
				return style[name];
			}
		},

		css: function (elem, name, extra, styles) {
			var val,
			    num,
			    hooks,
			    origName = jQuery.camelCase(name);

			// Make sure that we're working with the right name
			name = jQuery.cssProps[origName] || (jQuery.cssProps[origName] = vendorPropName(elem.style, origName));

			// Try prefixed name followed by the unprefixed name
			hooks = jQuery.cssHooks[name] || jQuery.cssHooks[origName];

			// If a hook was provided get the computed value from there
			if (hooks && "get" in hooks) {
				val = hooks.get(elem, true, extra);
			}

			// Otherwise, if a way to get the computed value exists, use that
			if (val === undefined) {
				val = curCSS(elem, name, styles);
			}

			// Convert "normal" to computed value
			if (val === "normal" && name in cssNormalTransform) {
				val = cssNormalTransform[name];
			}

			// Make numeric if forced or a qualifier was provided and val looks numeric
			if (extra === "" || extra) {
				num = parseFloat(val);
				return extra === true || jQuery.isNumeric(num) ? num || 0 : val;
			}
			return val;
		}
	});

	jQuery.each(["height", "width"], function (i, name) {
		jQuery.cssHooks[name] = {
			get: function (elem, computed, extra) {
				if (computed) {

					// Certain elements can have dimension info if we invisibly show them
					// but it must have a current display style that would benefit
					return rdisplayswap.test(jQuery.css(elem, "display")) && elem.offsetWidth === 0 ? jQuery.swap(elem, cssShow, function () {
						return getWidthOrHeight(elem, name, extra);
					}) : getWidthOrHeight(elem, name, extra);
				}
			},

			set: function (elem, value, extra) {
				var styles = extra && getStyles(elem);
				return setPositiveNumber(elem, value, extra ? augmentWidthOrHeight(elem, name, extra, jQuery.css(elem, "boxSizing", false, styles) === "border-box", styles) : 0);
			}
		};
	});

	// Support: Android 2.3
	jQuery.cssHooks.marginRight = addGetHookIf(support.reliableMarginRight, function (elem, computed) {
		if (computed) {
			return jQuery.swap(elem, { "display": "inline-block" }, curCSS, [elem, "marginRight"]);
		}
	});

	// These hooks are used by animate to expand properties
	jQuery.each({
		margin: "",
		padding: "",
		border: "Width"
	}, function (prefix, suffix) {
		jQuery.cssHooks[prefix + suffix] = {
			expand: function (value) {
				var i = 0,
				    expanded = {},


				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split(" ") : [value];

				for (; i < 4; i++) {
					expanded[prefix + cssExpand[i] + suffix] = parts[i] || parts[i - 2] || parts[0];
				}

				return expanded;
			}
		};

		if (!rmargin.test(prefix)) {
			jQuery.cssHooks[prefix + suffix].set = setPositiveNumber;
		}
	});

	jQuery.fn.extend({
		css: function (name, value) {
			return access(this, function (elem, name, value) {
				var styles,
				    len,
				    map = {},
				    i = 0;

				if (jQuery.isArray(name)) {
					styles = getStyles(elem);
					len = name.length;

					for (; i < len; i++) {
						map[name[i]] = jQuery.css(elem, name[i], false, styles);
					}

					return map;
				}

				return value !== undefined ? jQuery.style(elem, name, value) : jQuery.css(elem, name);
			}, name, value, arguments.length > 1);
		},
		show: function () {
			return showHide(this, true);
		},
		hide: function () {
			return showHide(this);
		},
		toggle: function (state) {
			if (typeof state === "boolean") {
				return state ? this.show() : this.hide();
			}

			return this.each(function () {
				if (isHidden(this)) {
					jQuery(this).show();
				} else {
					jQuery(this).hide();
				}
			});
		}
	});

	function Tween(elem, options, prop, end, easing) {
		return new Tween.prototype.init(elem, options, prop, end, easing);
	}
	jQuery.Tween = Tween;

	Tween.prototype = {
		constructor: Tween,
		init: function (elem, options, prop, end, easing, unit) {
			this.elem = elem;
			this.prop = prop;
			this.easing = easing || "swing";
			this.options = options;
			this.start = this.now = this.cur();
			this.end = end;
			this.unit = unit || (jQuery.cssNumber[prop] ? "" : "px");
		},
		cur: function () {
			var hooks = Tween.propHooks[this.prop];

			return hooks && hooks.get ? hooks.get(this) : Tween.propHooks._default.get(this);
		},
		run: function (percent) {
			var eased,
			    hooks = Tween.propHooks[this.prop];

			if (this.options.duration) {
				this.pos = eased = jQuery.easing[this.easing](percent, this.options.duration * percent, 0, 1, this.options.duration);
			} else {
				this.pos = eased = percent;
			}
			this.now = (this.end - this.start) * eased + this.start;

			if (this.options.step) {
				this.options.step.call(this.elem, this.now, this);
			}

			if (hooks && hooks.set) {
				hooks.set(this);
			} else {
				Tween.propHooks._default.set(this);
			}
			return this;
		}
	};

	Tween.prototype.init.prototype = Tween.prototype;

	Tween.propHooks = {
		_default: {
			get: function (tween) {
				var result;

				if (tween.elem[tween.prop] != null && (!tween.elem.style || tween.elem.style[tween.prop] == null)) {
					return tween.elem[tween.prop];
				}

				// Passing an empty string as a 3rd parameter to .css will automatically
				// attempt a parseFloat and fallback to a string if the parse fails.
				// Simple values such as "10px" are parsed to Float;
				// complex values such as "rotate(1rad)" are returned as-is.
				result = jQuery.css(tween.elem, tween.prop, "");
				// Empty strings, null, undefined and "auto" are converted to 0.
				return !result || result === "auto" ? 0 : result;
			},
			set: function (tween) {
				// Use step hook for back compat.
				// Use cssHook if its there.
				// Use .style if available and use plain properties where available.
				if (jQuery.fx.step[tween.prop]) {
					jQuery.fx.step[tween.prop](tween);
				} else if (tween.elem.style && (tween.elem.style[jQuery.cssProps[tween.prop]] != null || jQuery.cssHooks[tween.prop])) {
					jQuery.style(tween.elem, tween.prop, tween.now + tween.unit);
				} else {
					tween.elem[tween.prop] = tween.now;
				}
			}
		}
	};

	// Support: IE9
	// Panic based approach to setting things on disconnected nodes
	Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
		set: function (tween) {
			if (tween.elem.nodeType && tween.elem.parentNode) {
				tween.elem[tween.prop] = tween.now;
			}
		}
	};

	jQuery.easing = {
		linear: function (p) {
			return p;
		},
		swing: function (p) {
			return 0.5 - Math.cos(p * Math.PI) / 2;
		}
	};

	jQuery.fx = Tween.prototype.init;

	// Back Compat <1.8 extension point
	jQuery.fx.step = {};

	var fxNow,
	    timerId,
	    rfxtypes = /^(?:toggle|show|hide)$/,
	    rfxnum = new RegExp("^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i"),
	    rrun = /queueHooks$/,
	    animationPrefilters = [defaultPrefilter],
	    tweeners = {
		"*": [function (prop, value) {
			var tween = this.createTween(prop, value),
			    target = tween.cur(),
			    parts = rfxnum.exec(value),
			    unit = parts && parts[3] || (jQuery.cssNumber[prop] ? "" : "px"),


			// Starting value computation is required for potential unit mismatches
			start = (jQuery.cssNumber[prop] || unit !== "px" && +target) && rfxnum.exec(jQuery.css(tween.elem, prop)),
			    scale = 1,
			    maxIterations = 20;

			if (start && start[3] !== unit) {
				// Trust units reported by jQuery.css
				unit = unit || start[3];

				// Make sure we update the tween properties later on
				parts = parts || [];

				// Iteratively approximate from a nonzero starting point
				start = +target || 1;

				do {
					// If previous iteration zeroed out, double until we get *something*.
					// Use string for doubling so we don't accidentally see scale as unchanged below
					scale = scale || ".5";

					// Adjust and apply
					start = start / scale;
					jQuery.style(tween.elem, prop, start + unit);

					// Update scale, tolerating zero or NaN from tween.cur(),
					// break the loop if scale is unchanged or perfect, or if we've just had enough
				} while (scale !== (scale = tween.cur() / target) && scale !== 1 && --maxIterations);
			}

			// Update tween properties
			if (parts) {
				start = tween.start = +start || +target || 0;
				tween.unit = unit;
				// If a +=/-= token was provided, we're doing a relative animation
				tween.end = parts[1] ? start + (parts[1] + 1) * parts[2] : +parts[2];
			}

			return tween;
		}]
	};

	// Animations created synchronously will run synchronously
	function createFxNow() {
		setTimeout(function () {
			fxNow = undefined;
		});
		return fxNow = jQuery.now();
	}

	// Generate parameters to create a standard animation
	function genFx(type, includeWidth) {
		var which,
		    i = 0,
		    attrs = { height: type };

		// If we include width, step value is 1 to do all cssExpand values,
		// otherwise step value is 2 to skip over Left and Right
		includeWidth = includeWidth ? 1 : 0;
		for (; i < 4; i += 2 - includeWidth) {
			which = cssExpand[i];
			attrs["margin" + which] = attrs["padding" + which] = type;
		}

		if (includeWidth) {
			attrs.opacity = attrs.width = type;
		}

		return attrs;
	}

	function createTween(value, prop, animation) {
		var tween,
		    collection = (tweeners[prop] || []).concat(tweeners["*"]),
		    index = 0,
		    length = collection.length;
		for (; index < length; index++) {
			if (tween = collection[index].call(animation, prop, value)) {

				// We're done with this property
				return tween;
			}
		}
	}

	function defaultPrefilter(elem, props, opts) {
		/* jshint validthis: true */
		var prop,
		    value,
		    toggle,
		    tween,
		    hooks,
		    oldfire,
		    display,
		    checkDisplay,
		    anim = this,
		    orig = {},
		    style = elem.style,
		    hidden = elem.nodeType && isHidden(elem),
		    dataShow = data_priv.get(elem, "fxshow");

		// Handle queue: false promises
		if (!opts.queue) {
			hooks = jQuery._queueHooks(elem, "fx");
			if (hooks.unqueued == null) {
				hooks.unqueued = 0;
				oldfire = hooks.empty.fire;
				hooks.empty.fire = function () {
					if (!hooks.unqueued) {
						oldfire();
					}
				};
			}
			hooks.unqueued++;

			anim.always(function () {
				// Ensure the complete handler is called before this completes
				anim.always(function () {
					hooks.unqueued--;
					if (!jQuery.queue(elem, "fx").length) {
						hooks.empty.fire();
					}
				});
			});
		}

		// Height/width overflow pass
		if (elem.nodeType === 1 && ("height" in props || "width" in props)) {
			// Make sure that nothing sneaks out
			// Record all 3 overflow attributes because IE9-10 do not
			// change the overflow attribute when overflowX and
			// overflowY are set to the same value
			opts.overflow = [style.overflow, style.overflowX, style.overflowY];

			// Set display property to inline-block for height/width
			// animations on inline elements that are having width/height animated
			display = jQuery.css(elem, "display");

			// Test default display if display is currently "none"
			checkDisplay = display === "none" ? data_priv.get(elem, "olddisplay") || defaultDisplay(elem.nodeName) : display;

			if (checkDisplay === "inline" && jQuery.css(elem, "float") === "none") {
				style.display = "inline-block";
			}
		}

		if (opts.overflow) {
			style.overflow = "hidden";
			anim.always(function () {
				style.overflow = opts.overflow[0];
				style.overflowX = opts.overflow[1];
				style.overflowY = opts.overflow[2];
			});
		}

		// show/hide pass
		for (prop in props) {
			value = props[prop];
			if (rfxtypes.exec(value)) {
				delete props[prop];
				toggle = toggle || value === "toggle";
				if (value === (hidden ? "hide" : "show")) {

					// If there is dataShow left over from a stopped hide or show and we are going to proceed with show, we should pretend to be hidden
					if (value === "show" && dataShow && dataShow[prop] !== undefined) {
						hidden = true;
					} else {
						continue;
					}
				}
				orig[prop] = dataShow && dataShow[prop] || jQuery.style(elem, prop);

				// Any non-fx value stops us from restoring the original display value
			} else {
				display = undefined;
			}
		}

		if (!jQuery.isEmptyObject(orig)) {
			if (dataShow) {
				if ("hidden" in dataShow) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = data_priv.access(elem, "fxshow", {});
			}

			// Store state if its toggle - enables .stop().toggle() to "reverse"
			if (toggle) {
				dataShow.hidden = !hidden;
			}
			if (hidden) {
				jQuery(elem).show();
			} else {
				anim.done(function () {
					jQuery(elem).hide();
				});
			}
			anim.done(function () {
				var prop;

				data_priv.remove(elem, "fxshow");
				for (prop in orig) {
					jQuery.style(elem, prop, orig[prop]);
				}
			});
			for (prop in orig) {
				tween = createTween(hidden ? dataShow[prop] : 0, prop, anim);

				if (!(prop in dataShow)) {
					dataShow[prop] = tween.start;
					if (hidden) {
						tween.end = tween.start;
						tween.start = prop === "width" || prop === "height" ? 1 : 0;
					}
				}
			}

			// If this is a noop like .hide().hide(), restore an overwritten display value
		} else if ((display === "none" ? defaultDisplay(elem.nodeName) : display) === "inline") {
			style.display = display;
		}
	}

	function propFilter(props, specialEasing) {
		var index, name, easing, value, hooks;

		// camelCase, specialEasing and expand cssHook pass
		for (index in props) {
			name = jQuery.camelCase(index);
			easing = specialEasing[name];
			value = props[index];
			if (jQuery.isArray(value)) {
				easing = value[1];
				value = props[index] = value[0];
			}

			if (index !== name) {
				props[name] = value;
				delete props[index];
			}

			hooks = jQuery.cssHooks[name];
			if (hooks && "expand" in hooks) {
				value = hooks.expand(value);
				delete props[name];

				// Not quite $.extend, this won't overwrite existing keys.
				// Reusing 'index' because we have the correct "name"
				for (index in value) {
					if (!(index in props)) {
						props[index] = value[index];
						specialEasing[index] = easing;
					}
				}
			} else {
				specialEasing[name] = easing;
			}
		}
	}

	function Animation(elem, properties, options) {
		var result,
		    stopped,
		    index = 0,
		    length = animationPrefilters.length,
		    deferred = jQuery.Deferred().always(function () {
			// Don't match elem in the :animated selector
			delete tick.elem;
		}),
		    tick = function () {
			if (stopped) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
			    remaining = Math.max(0, animation.startTime + animation.duration - currentTime),

			// Support: Android 2.3
			// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
			temp = remaining / animation.duration || 0,
			    percent = 1 - temp,
			    index = 0,
			    length = animation.tweens.length;

			for (; index < length; index++) {
				animation.tweens[index].run(percent);
			}

			deferred.notifyWith(elem, [animation, percent, remaining]);

			if (percent < 1 && length) {
				return remaining;
			} else {
				deferred.resolveWith(elem, [animation]);
				return false;
			}
		},
		    animation = deferred.promise({
			elem: elem,
			props: jQuery.extend({}, properties),
			opts: jQuery.extend(true, { specialEasing: {} }, options),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function (prop, end) {
				var tween = jQuery.Tween(elem, animation.opts, prop, end, animation.opts.specialEasing[prop] || animation.opts.easing);
				animation.tweens.push(tween);
				return tween;
			},
			stop: function (gotoEnd) {
				var index = 0,

				// If we are going to the end, we want to run all the tweens
				// otherwise we skip this part
				length = gotoEnd ? animation.tweens.length : 0;
				if (stopped) {
					return this;
				}
				stopped = true;
				for (; index < length; index++) {
					animation.tweens[index].run(1);
				}

				// Resolve when we played the last frame; otherwise, reject
				if (gotoEnd) {
					deferred.resolveWith(elem, [animation, gotoEnd]);
				} else {
					deferred.rejectWith(elem, [animation, gotoEnd]);
				}
				return this;
			}
		}),
		    props = animation.props;

		propFilter(props, animation.opts.specialEasing);

		for (; index < length; index++) {
			result = animationPrefilters[index].call(animation, elem, props, animation.opts);
			if (result) {
				return result;
			}
		}

		jQuery.map(props, createTween, animation);

		if (jQuery.isFunction(animation.opts.start)) {
			animation.opts.start.call(elem, animation);
		}

		jQuery.fx.timer(jQuery.extend(tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		}));

		// attach callbacks from options
		return animation.progress(animation.opts.progress).done(animation.opts.done, animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);
	}

	jQuery.Animation = jQuery.extend(Animation, {

		tweener: function (props, callback) {
			if (jQuery.isFunction(props)) {
				callback = props;
				props = ["*"];
			} else {
				props = props.split(" ");
			}

			var prop,
			    index = 0,
			    length = props.length;

			for (; index < length; index++) {
				prop = props[index];
				tweeners[prop] = tweeners[prop] || [];
				tweeners[prop].unshift(callback);
			}
		},

		prefilter: function (callback, prepend) {
			if (prepend) {
				animationPrefilters.unshift(callback);
			} else {
				animationPrefilters.push(callback);
			}
		}
	});

	jQuery.speed = function (speed, easing, fn) {
		var opt = speed && typeof speed === "object" ? jQuery.extend({}, speed) : {
			complete: fn || !fn && easing || jQuery.isFunction(speed) && speed,
			duration: speed,
			easing: fn && easing || easing && !jQuery.isFunction(easing) && easing
		};

		opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration : opt.duration in jQuery.fx.speeds ? jQuery.fx.speeds[opt.duration] : jQuery.fx.speeds._default;

		// Normalize opt.queue - true/undefined/null -> "fx"
		if (opt.queue == null || opt.queue === true) {
			opt.queue = "fx";
		}

		// Queueing
		opt.old = opt.complete;

		opt.complete = function () {
			if (jQuery.isFunction(opt.old)) {
				opt.old.call(this);
			}

			if (opt.queue) {
				jQuery.dequeue(this, opt.queue);
			}
		};

		return opt;
	};

	jQuery.fn.extend({
		fadeTo: function (speed, to, easing, callback) {

			// Show any hidden elements after setting opacity to 0
			return this.filter(isHidden).css("opacity", 0).show()

			// Animate to the value specified
			.end().animate({ opacity: to }, speed, easing, callback);
		},
		animate: function (prop, speed, easing, callback) {
			var empty = jQuery.isEmptyObject(prop),
			    optall = jQuery.speed(speed, easing, callback),
			    doAnimation = function () {
				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation(this, jQuery.extend({}, prop), optall);

				// Empty animations, or finishing resolves immediately
				if (empty || data_priv.get(this, "finish")) {
					anim.stop(true);
				}
			};
			doAnimation.finish = doAnimation;

			return empty || optall.queue === false ? this.each(doAnimation) : this.queue(optall.queue, doAnimation);
		},
		stop: function (type, clearQueue, gotoEnd) {
			var stopQueue = function (hooks) {
				var stop = hooks.stop;
				delete hooks.stop;
				stop(gotoEnd);
			};

			if (typeof type !== "string") {
				gotoEnd = clearQueue;
				clearQueue = type;
				type = undefined;
			}
			if (clearQueue && type !== false) {
				this.queue(type || "fx", []);
			}

			return this.each(function () {
				var dequeue = true,
				    index = type != null && type + "queueHooks",
				    timers = jQuery.timers,
				    data = data_priv.get(this);

				if (index) {
					if (data[index] && data[index].stop) {
						stopQueue(data[index]);
					}
				} else {
					for (index in data) {
						if (data[index] && data[index].stop && rrun.test(index)) {
							stopQueue(data[index]);
						}
					}
				}

				for (index = timers.length; index--;) {
					if (timers[index].elem === this && (type == null || timers[index].queue === type)) {
						timers[index].anim.stop(gotoEnd);
						dequeue = false;
						timers.splice(index, 1);
					}
				}

				// Start the next in the queue if the last step wasn't forced.
				// Timers currently will call their complete callbacks, which
				// will dequeue but only if they were gotoEnd.
				if (dequeue || !gotoEnd) {
					jQuery.dequeue(this, type);
				}
			});
		},
		finish: function (type) {
			if (type !== false) {
				type = type || "fx";
			}
			return this.each(function () {
				var index,
				    data = data_priv.get(this),
				    queue = data[type + "queue"],
				    hooks = data[type + "queueHooks"],
				    timers = jQuery.timers,
				    length = queue ? queue.length : 0;

				// Enable finishing flag on private data
				data.finish = true;

				// Empty the queue first
				jQuery.queue(this, type, []);

				if (hooks && hooks.stop) {
					hooks.stop.call(this, true);
				}

				// Look for any active animations, and finish them
				for (index = timers.length; index--;) {
					if (timers[index].elem === this && timers[index].queue === type) {
						timers[index].anim.stop(true);
						timers.splice(index, 1);
					}
				}

				// Look for any animations in the old queue and finish them
				for (index = 0; index < length; index++) {
					if (queue[index] && queue[index].finish) {
						queue[index].finish.call(this);
					}
				}

				// Turn off finishing flag
				delete data.finish;
			});
		}
	});

	jQuery.each(["toggle", "show", "hide"], function (i, name) {
		var cssFn = jQuery.fn[name];
		jQuery.fn[name] = function (speed, easing, callback) {
			return speed == null || typeof speed === "boolean" ? cssFn.apply(this, arguments) : this.animate(genFx(name, true), speed, easing, callback);
		};
	});

	// Generate shortcuts for custom animations
	jQuery.each({
		slideDown: genFx("show"),
		slideUp: genFx("hide"),
		slideToggle: genFx("toggle"),
		fadeIn: { opacity: "show" },
		fadeOut: { opacity: "hide" },
		fadeToggle: { opacity: "toggle" }
	}, function (name, props) {
		jQuery.fn[name] = function (speed, easing, callback) {
			return this.animate(props, speed, easing, callback);
		};
	});

	jQuery.timers = [];
	jQuery.fx.tick = function () {
		var timer,
		    i = 0,
		    timers = jQuery.timers;

		fxNow = jQuery.now();

		for (; i < timers.length; i++) {
			timer = timers[i];
			// Checks the timer has not already been removed
			if (!timer() && timers[i] === timer) {
				timers.splice(i--, 1);
			}
		}

		if (!timers.length) {
			jQuery.fx.stop();
		}
		fxNow = undefined;
	};

	jQuery.fx.timer = function (timer) {
		jQuery.timers.push(timer);
		if (timer()) {
			jQuery.fx.start();
		} else {
			jQuery.timers.pop();
		}
	};

	jQuery.fx.interval = 13;

	jQuery.fx.start = function () {
		if (!timerId) {
			timerId = setInterval(jQuery.fx.tick, jQuery.fx.interval);
		}
	};

	jQuery.fx.stop = function () {
		clearInterval(timerId);
		timerId = null;
	};

	jQuery.fx.speeds = {
		slow: 600,
		fast: 200,
		// Default speed
		_default: 400
	};

	// Based off of the plugin by Clint Helfers, with permission.
	// http://blindsignals.com/index.php/2009/07/jquery-delay/
	jQuery.fn.delay = function (time, type) {
		time = jQuery.fx ? jQuery.fx.speeds[time] || time : time;
		type = type || "fx";

		return this.queue(type, function (next, hooks) {
			var timeout = setTimeout(next, time);
			hooks.stop = function () {
				clearTimeout(timeout);
			};
		});
	};

	(function () {
		var input = document.createElement("input"),
		    select = document.createElement("select"),
		    opt = select.appendChild(document.createElement("option"));

		input.type = "checkbox";

		// Support: iOS<=5.1, Android<=4.2+
		// Default value for a checkbox should be "on"
		support.checkOn = input.value !== "";

		// Support: IE<=11+
		// Must access selectedIndex to make default options select
		support.optSelected = opt.selected;

		// Support: Android<=2.3
		// Options inside disabled selects are incorrectly marked as disabled
		select.disabled = true;
		support.optDisabled = !opt.disabled;

		// Support: IE<=11+
		// An input loses its value after becoming a radio
		input = document.createElement("input");
		input.value = "t";
		input.type = "radio";
		support.radioValue = input.value === "t";
	})();

	var nodeHook,
	    boolHook,
	    attrHandle = jQuery.expr.attrHandle;

	jQuery.fn.extend({
		attr: function (name, value) {
			return access(this, jQuery.attr, name, value, arguments.length > 1);
		},

		removeAttr: function (name) {
			return this.each(function () {
				jQuery.removeAttr(this, name);
			});
		}
	});

	jQuery.extend({
		attr: function (elem, name, value) {
			var hooks,
			    ret,
			    nType = elem.nodeType;

			// don't get/set attributes on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			// Fallback to prop when attributes are not supported
			if (typeof elem.getAttribute === strundefined) {
				return jQuery.prop(elem, name, value);
			}

			// All attributes are lowercase
			// Grab necessary hook if one is defined
			if (nType !== 1 || !jQuery.isXMLDoc(elem)) {
				name = name.toLowerCase();
				hooks = jQuery.attrHooks[name] || (jQuery.expr.match.bool.test(name) ? boolHook : nodeHook);
			}

			if (value !== undefined) {

				if (value === null) {
					jQuery.removeAttr(elem, name);
				} else if (hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined) {
					return ret;
				} else {
					elem.setAttribute(name, value + "");
					return value;
				}
			} else if (hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null) {
				return ret;
			} else {
				ret = jQuery.find.attr(elem, name);

				// Non-existent attributes return null, we normalize to undefined
				return ret == null ? undefined : ret;
			}
		},

		removeAttr: function (elem, value) {
			var name,
			    propName,
			    i = 0,
			    attrNames = value && value.match(rnotwhite);

			if (attrNames && elem.nodeType === 1) {
				while (name = attrNames[i++]) {
					propName = jQuery.propFix[name] || name;

					// Boolean attributes get special treatment (#10870)
					if (jQuery.expr.match.bool.test(name)) {
						// Set corresponding property to false
						elem[propName] = false;
					}

					elem.removeAttribute(name);
				}
			}
		},

		attrHooks: {
			type: {
				set: function (elem, value) {
					if (!support.radioValue && value === "radio" && jQuery.nodeName(elem, "input")) {
						var val = elem.value;
						elem.setAttribute("type", value);
						if (val) {
							elem.value = val;
						}
						return value;
					}
				}
			}
		}
	});

	// Hooks for boolean attributes
	boolHook = {
		set: function (elem, value, name) {
			if (value === false) {
				// Remove boolean attributes when set to false
				jQuery.removeAttr(elem, name);
			} else {
				elem.setAttribute(name, name);
			}
			return name;
		}
	};
	jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g), function (i, name) {
		var getter = attrHandle[name] || jQuery.find.attr;

		attrHandle[name] = function (elem, name, isXML) {
			var ret, handle;
			if (!isXML) {
				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[name];
				attrHandle[name] = ret;
				ret = getter(elem, name, isXML) != null ? name.toLowerCase() : null;
				attrHandle[name] = handle;
			}
			return ret;
		};
	});

	var rfocusable = /^(?:input|select|textarea|button)$/i;

	jQuery.fn.extend({
		prop: function (name, value) {
			return access(this, jQuery.prop, name, value, arguments.length > 1);
		},

		removeProp: function (name) {
			return this.each(function () {
				delete this[jQuery.propFix[name] || name];
			});
		}
	});

	jQuery.extend({
		propFix: {
			"for": "htmlFor",
			"class": "className"
		},

		prop: function (elem, name, value) {
			var ret,
			    hooks,
			    notxml,
			    nType = elem.nodeType;

			// Don't get/set properties on text, comment and attribute nodes
			if (!elem || nType === 3 || nType === 8 || nType === 2) {
				return;
			}

			notxml = nType !== 1 || !jQuery.isXMLDoc(elem);

			if (notxml) {
				// Fix name and attach hooks
				name = jQuery.propFix[name] || name;
				hooks = jQuery.propHooks[name];
			}

			if (value !== undefined) {
				return hooks && "set" in hooks && (ret = hooks.set(elem, value, name)) !== undefined ? ret : elem[name] = value;
			} else {
				return hooks && "get" in hooks && (ret = hooks.get(elem, name)) !== null ? ret : elem[name];
			}
		},

		propHooks: {
			tabIndex: {
				get: function (elem) {
					return elem.hasAttribute("tabindex") || rfocusable.test(elem.nodeName) || elem.href ? elem.tabIndex : -1;
				}
			}
		}
	});

	if (!support.optSelected) {
		jQuery.propHooks.selected = {
			get: function (elem) {
				var parent = elem.parentNode;
				if (parent && parent.parentNode) {
					parent.parentNode.selectedIndex;
				}
				return null;
			}
		};
	}

	jQuery.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
		jQuery.propFix[this.toLowerCase()] = this;
	});

	var rclass = /[\t\r\n\f]/g;

	jQuery.fn.extend({
		addClass: function (value) {
			var classes,
			    elem,
			    cur,
			    clazz,
			    j,
			    finalValue,
			    proceed = typeof value === "string" && value,
			    i = 0,
			    len = this.length;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).addClass(value.call(this, j, this.className));
				});
			}

			if (proceed) {
				// The disjunction here is for better compressibility (see removeClass)
				classes = (value || "").match(rnotwhite) || [];

				for (; i < len; i++) {
					elem = this[i];
					cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : " ");

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							if (cur.indexOf(" " + clazz + " ") < 0) {
								cur += clazz + " ";
							}
						}

						// only assign if different to avoid unneeded rendering.
						finalValue = jQuery.trim(cur);
						if (elem.className !== finalValue) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		removeClass: function (value) {
			var classes,
			    elem,
			    cur,
			    clazz,
			    j,
			    finalValue,
			    proceed = arguments.length === 0 || typeof value === "string" && value,
			    i = 0,
			    len = this.length;

			if (jQuery.isFunction(value)) {
				return this.each(function (j) {
					jQuery(this).removeClass(value.call(this, j, this.className));
				});
			}
			if (proceed) {
				classes = (value || "").match(rnotwhite) || [];

				for (; i < len; i++) {
					elem = this[i];
					// This expression is here for better compressibility (see addClass)
					cur = elem.nodeType === 1 && (elem.className ? (" " + elem.className + " ").replace(rclass, " ") : "");

					if (cur) {
						j = 0;
						while (clazz = classes[j++]) {
							// Remove *all* instances
							while (cur.indexOf(" " + clazz + " ") >= 0) {
								cur = cur.replace(" " + clazz + " ", " ");
							}
						}

						// Only assign if different to avoid unneeded rendering.
						finalValue = value ? jQuery.trim(cur) : "";
						if (elem.className !== finalValue) {
							elem.className = finalValue;
						}
					}
				}
			}

			return this;
		},

		toggleClass: function (value, stateVal) {
			var type = typeof value;

			if (typeof stateVal === "boolean" && type === "string") {
				return stateVal ? this.addClass(value) : this.removeClass(value);
			}

			if (jQuery.isFunction(value)) {
				return this.each(function (i) {
					jQuery(this).toggleClass(value.call(this, i, this.className, stateVal), stateVal);
				});
			}

			return this.each(function () {
				if (type === "string") {
					// Toggle individual class names
					var className,
					    i = 0,
					    self = jQuery(this),
					    classNames = value.match(rnotwhite) || [];

					while (className = classNames[i++]) {
						// Check each className given, space separated list
						if (self.hasClass(className)) {
							self.removeClass(className);
						} else {
							self.addClass(className);
						}
					}

					// Toggle whole class name
				} else if (type === strundefined || type === "boolean") {
					if (this.className) {
						// store className if set
						data_priv.set(this, "__className__", this.className);
					}

					// If the element has a class name or if we're passed `false`,
					// then remove the whole classname (if there was one, the above saved it).
					// Otherwise bring back whatever was previously saved (if anything),
					// falling back to the empty string if nothing was stored.
					this.className = this.className || value === false ? "" : data_priv.get(this, "__className__") || "";
				}
			});
		},

		hasClass: function (selector) {
			var className = " " + selector + " ",
			    i = 0,
			    l = this.length;
			for (; i < l; i++) {
				if (this[i].nodeType === 1 && (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) >= 0) {
					return true;
				}
			}

			return false;
		}
	});

	var rreturn = /\r/g;

	jQuery.fn.extend({
		val: function (value) {
			var hooks,
			    ret,
			    isFunction,
			    elem = this[0];

			if (!arguments.length) {
				if (elem) {
					hooks = jQuery.valHooks[elem.type] || jQuery.valHooks[elem.nodeName.toLowerCase()];

					if (hooks && "get" in hooks && (ret = hooks.get(elem, "value")) !== undefined) {
						return ret;
					}

					ret = elem.value;

					return typeof ret === "string" ?
					// Handle most common string cases
					ret.replace(rreturn, "") :
					// Handle cases where value is null/undef or number
					ret == null ? "" : ret;
				}

				return;
			}

			isFunction = jQuery.isFunction(value);

			return this.each(function (i) {
				var val;

				if (this.nodeType !== 1) {
					return;
				}

				if (isFunction) {
					val = value.call(this, i, jQuery(this).val());
				} else {
					val = value;
				}

				// Treat null/undefined as ""; convert numbers to string
				if (val == null) {
					val = "";
				} else if (typeof val === "number") {
					val += "";
				} else if (jQuery.isArray(val)) {
					val = jQuery.map(val, function (value) {
						return value == null ? "" : value + "";
					});
				}

				hooks = jQuery.valHooks[this.type] || jQuery.valHooks[this.nodeName.toLowerCase()];

				// If set returns undefined, fall back to normal setting
				if (!hooks || !("set" in hooks) || hooks.set(this, val, "value") === undefined) {
					this.value = val;
				}
			});
		}
	});

	jQuery.extend({
		valHooks: {
			option: {
				get: function (elem) {
					var val = jQuery.find.attr(elem, "value");
					return val != null ? val :
					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					jQuery.trim(jQuery.text(elem));
				}
			},
			select: {
				get: function (elem) {
					var value,
					    option,
					    options = elem.options,
					    index = elem.selectedIndex,
					    one = elem.type === "select-one" || index < 0,
					    values = one ? null : [],
					    max = one ? index + 1 : options.length,
					    i = index < 0 ? max : one ? index : 0;

					// Loop through all the selected options
					for (; i < max; i++) {
						option = options[i];

						// IE6-9 doesn't update selected after form reset (#2551)
						if ((option.selected || i === index) && (
						// Don't return options that are disabled or in a disabled optgroup
						support.optDisabled ? !option.disabled : option.getAttribute("disabled") === null) && (!option.parentNode.disabled || !jQuery.nodeName(option.parentNode, "optgroup"))) {

							// Get the specific value for the option
							value = jQuery(option).val();

							// We don't need an array for one selects
							if (one) {
								return value;
							}

							// Multi-Selects return an array
							values.push(value);
						}
					}

					return values;
				},

				set: function (elem, value) {
					var optionSet,
					    option,
					    options = elem.options,
					    values = jQuery.makeArray(value),
					    i = options.length;

					while (i--) {
						option = options[i];
						if (option.selected = jQuery.inArray(option.value, values) >= 0) {
							optionSet = true;
						}
					}

					// Force browsers to behave consistently when non-matching value is set
					if (!optionSet) {
						elem.selectedIndex = -1;
					}
					return values;
				}
			}
		}
	});

	// Radios and checkboxes getter/setter
	jQuery.each(["radio", "checkbox"], function () {
		jQuery.valHooks[this] = {
			set: function (elem, value) {
				if (jQuery.isArray(value)) {
					return elem.checked = jQuery.inArray(jQuery(elem).val(), value) >= 0;
				}
			}
		};
		if (!support.checkOn) {
			jQuery.valHooks[this].get = function (elem) {
				return elem.getAttribute("value") === null ? "on" : elem.value;
			};
		}
	});

	// Return jQuery for attributes-only inclusion


	jQuery.each(("blur focus focusin focusout load resize scroll unload click dblclick " + "mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " + "change select submit keydown keypress keyup error contextmenu").split(" "), function (i, name) {

		// Handle event binding
		jQuery.fn[name] = function (data, fn) {
			return arguments.length > 0 ? this.on(name, null, data, fn) : this.trigger(name);
		};
	});

	jQuery.fn.extend({
		hover: function (fnOver, fnOut) {
			return this.mouseenter(fnOver).mouseleave(fnOut || fnOver);
		},

		bind: function (types, data, fn) {
			return this.on(types, null, data, fn);
		},
		unbind: function (types, fn) {
			return this.off(types, null, fn);
		},

		delegate: function (selector, types, data, fn) {
			return this.on(types, selector, data, fn);
		},
		undelegate: function (selector, types, fn) {
			// ( namespace ) or ( selector, types [, fn] )
			return arguments.length === 1 ? this.off(selector, "**") : this.off(types, selector || "**", fn);
		}
	});

	var nonce = jQuery.now();

	var rquery = /\?/;

	// Support: Android 2.3
	// Workaround failure to string-cast null input
	jQuery.parseJSON = function (data) {
		return JSON.parse(data + "");
	};

	// Cross-browser xml parsing
	jQuery.parseXML = function (data) {
		var xml, tmp;
		if (!data || typeof data !== "string") {
			return null;
		}

		// Support: IE9
		try {
			tmp = new DOMParser();
			xml = tmp.parseFromString(data, "text/xml");
		} catch (e) {
			xml = undefined;
		}

		if (!xml || xml.getElementsByTagName("parsererror").length) {
			jQuery.error("Invalid XML: " + data);
		}
		return xml;
	};

	var rhash = /#.*$/,
	    rts = /([?&])_=[^&]*/,
	    rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	    rnoContent = /^(?:GET|HEAD)$/,
	    rprotocol = /^\/\//,
	    rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,


	/* Prefilters
  * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
  * 2) These are called:
  *    - BEFORE asking for a transport
  *    - AFTER param serialization (s.data is a string if s.processData is true)
  * 3) key is the dataType
  * 4) the catchall symbol "*" can be used
  * 5) execution will start with transport dataType and THEN continue down to "*" if needed
  */
	prefilters = {},


	/* Transports bindings
  * 1) key is the dataType
  * 2) the catchall symbol "*" can be used
  * 3) selection will start with transport dataType and THEN go to "*" if needed
  */
	transports = {},


	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat("*"),


	// Document location
	ajaxLocation = window.location.href,


	// Segment location into parts
	ajaxLocParts = rurl.exec(ajaxLocation.toLowerCase()) || [];

	// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
	function addToPrefiltersOrTransports(structure) {

		// dataTypeExpression is optional and defaults to "*"
		return function (dataTypeExpression, func) {

			if (typeof dataTypeExpression !== "string") {
				func = dataTypeExpression;
				dataTypeExpression = "*";
			}

			var dataType,
			    i = 0,
			    dataTypes = dataTypeExpression.toLowerCase().match(rnotwhite) || [];

			if (jQuery.isFunction(func)) {
				// For each dataType in the dataTypeExpression
				while (dataType = dataTypes[i++]) {
					// Prepend if requested
					if (dataType[0] === "+") {
						dataType = dataType.slice(1) || "*";
						(structure[dataType] = structure[dataType] || []).unshift(func);

						// Otherwise append
					} else {
						(structure[dataType] = structure[dataType] || []).push(func);
					}
				}
			}
		};
	}

	// Base inspection function for prefilters and transports
	function inspectPrefiltersOrTransports(structure, options, originalOptions, jqXHR) {

		var inspected = {},
		    seekingTransport = structure === transports;

		function inspect(dataType) {
			var selected;
			inspected[dataType] = true;
			jQuery.each(structure[dataType] || [], function (_, prefilterOrFactory) {
				var dataTypeOrTransport = prefilterOrFactory(options, originalOptions, jqXHR);
				if (typeof dataTypeOrTransport === "string" && !seekingTransport && !inspected[dataTypeOrTransport]) {
					options.dataTypes.unshift(dataTypeOrTransport);
					inspect(dataTypeOrTransport);
					return false;
				} else if (seekingTransport) {
					return !(selected = dataTypeOrTransport);
				}
			});
			return selected;
		}

		return inspect(options.dataTypes[0]) || !inspected["*"] && inspect("*");
	}

	// A special extend for ajax options
	// that takes "flat" options (not to be deep extended)
	// Fixes #9887
	function ajaxExtend(target, src) {
		var key,
		    deep,
		    flatOptions = jQuery.ajaxSettings.flatOptions || {};

		for (key in src) {
			if (src[key] !== undefined) {
				(flatOptions[key] ? target : deep || (deep = {}))[key] = src[key];
			}
		}
		if (deep) {
			jQuery.extend(true, target, deep);
		}

		return target;
	}

	/* Handles responses to an ajax request:
  * - finds the right dataType (mediates between content-type and expected dataType)
  * - returns the corresponding response
  */
	function ajaxHandleResponses(s, jqXHR, responses) {

		var ct,
		    type,
		    finalDataType,
		    firstDataType,
		    contents = s.contents,
		    dataTypes = s.dataTypes;

		// Remove auto dataType and get content-type in the process
		while (dataTypes[0] === "*") {
			dataTypes.shift();
			if (ct === undefined) {
				ct = s.mimeType || jqXHR.getResponseHeader("Content-Type");
			}
		}

		// Check if we're dealing with a known content-type
		if (ct) {
			for (type in contents) {
				if (contents[type] && contents[type].test(ct)) {
					dataTypes.unshift(type);
					break;
				}
			}
		}

		// Check to see if we have a response for the expected dataType
		if (dataTypes[0] in responses) {
			finalDataType = dataTypes[0];
		} else {
			// Try convertible dataTypes
			for (type in responses) {
				if (!dataTypes[0] || s.converters[type + " " + dataTypes[0]]) {
					finalDataType = type;
					break;
				}
				if (!firstDataType) {
					firstDataType = type;
				}
			}
			// Or just use first one
			finalDataType = finalDataType || firstDataType;
		}

		// If we found a dataType
		// We add the dataType to the list if needed
		// and return the corresponding response
		if (finalDataType) {
			if (finalDataType !== dataTypes[0]) {
				dataTypes.unshift(finalDataType);
			}
			return responses[finalDataType];
		}
	}

	/* Chain conversions given the request and the original response
  * Also sets the responseXXX fields on the jqXHR instance
  */
	function ajaxConvert(s, response, jqXHR, isSuccess) {
		var conv2,
		    current,
		    conv,
		    tmp,
		    prev,
		    converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

		// Create converters map with lowercased keys
		if (dataTypes[1]) {
			for (conv in s.converters) {
				converters[conv.toLowerCase()] = s.converters[conv];
			}
		}

		current = dataTypes.shift();

		// Convert to each sequential dataType
		while (current) {

			if (s.responseFields[current]) {
				jqXHR[s.responseFields[current]] = response;
			}

			// Apply the dataFilter if provided
			if (!prev && isSuccess && s.dataFilter) {
				response = s.dataFilter(response, s.dataType);
			}

			prev = current;
			current = dataTypes.shift();

			if (current) {

				// There's only work to do if current dataType is non-auto
				if (current === "*") {

					current = prev;

					// Convert response if prev dataType is non-auto and differs from current
				} else if (prev !== "*" && prev !== current) {

					// Seek a direct converter
					conv = converters[prev + " " + current] || converters["* " + current];

					// If none found, seek a pair
					if (!conv) {
						for (conv2 in converters) {

							// If conv2 outputs current
							tmp = conv2.split(" ");
							if (tmp[1] === current) {

								// If prev can be converted to accepted input
								conv = converters[prev + " " + tmp[0]] || converters["* " + tmp[0]];
								if (conv) {
									// Condense equivalence converters
									if (conv === true) {
										conv = converters[conv2];

										// Otherwise, insert the intermediate dataType
									} else if (converters[conv2] !== true) {
										current = tmp[0];
										dataTypes.unshift(tmp[1]);
									}
									break;
								}
							}
						}
					}

					// Apply converter (if not an equivalence)
					if (conv !== true) {

						// Unless errors are allowed to bubble, catch and return them
						if (conv && s["throws"]) {
							response = conv(response);
						} else {
							try {
								response = conv(response);
							} catch (e) {
								return { state: "parsererror", error: conv ? e : "No conversion from " + prev + " to " + current };
							}
						}
					}
				}
			}
		}

		return { state: "success", data: response };
	}

	jQuery.extend({

		// Counter for holding the number of active queries
		active: 0,

		// Last-Modified header cache for next request
		lastModified: {},
		etag: {},

		ajaxSettings: {
			url: ajaxLocation,
			type: "GET",
			isLocal: rlocalProtocol.test(ajaxLocParts[1]),
			global: true,
			processData: true,
			async: true,
			contentType: "application/x-www-form-urlencoded; charset=UTF-8",
			/*
   timeout: 0,
   data: null,
   dataType: null,
   username: null,
   password: null,
   cache: null,
   throws: false,
   traditional: false,
   headers: {},
   */

			accepts: {
				"*": allTypes,
				text: "text/plain",
				html: "text/html",
				xml: "application/xml, text/xml",
				json: "application/json, text/javascript"
			},

			contents: {
				xml: /xml/,
				html: /html/,
				json: /json/
			},

			responseFields: {
				xml: "responseXML",
				text: "responseText",
				json: "responseJSON"
			},

			// Data converters
			// Keys separate source (or catchall "*") and destination types with a single space
			converters: {

				// Convert anything to text
				"* text": String,

				// Text to html (true = no transformation)
				"text html": true,

				// Evaluate text as a json expression
				"text json": jQuery.parseJSON,

				// Parse text as xml
				"text xml": jQuery.parseXML
			},

			// For options that shouldn't be deep extended:
			// you can add your own custom options here if
			// and when you create one that shouldn't be
			// deep extended (see ajaxExtend)
			flatOptions: {
				url: true,
				context: true
			}
		},

		// Creates a full fledged settings object into target
		// with both ajaxSettings and settings fields.
		// If target is omitted, writes into ajaxSettings.
		ajaxSetup: function (target, settings) {
			return settings ?

			// Building a settings object
			ajaxExtend(ajaxExtend(target, jQuery.ajaxSettings), settings) :

			// Extending ajaxSettings
			ajaxExtend(jQuery.ajaxSettings, target);
		},

		ajaxPrefilter: addToPrefiltersOrTransports(prefilters),
		ajaxTransport: addToPrefiltersOrTransports(transports),

		// Main method
		ajax: function (url, options) {

			// If url is an object, simulate pre-1.5 signature
			if (typeof url === "object") {
				options = url;
				url = undefined;
			}

			// Force options to be an object
			options = options || {};

			var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			    responseHeaders,

			// timeout handle
			timeoutTimer,

			// Cross-domain detection vars
			parts,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// Create the final options object
			s = jQuery.ajaxSetup({}, options),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context && (callbackContext.nodeType || callbackContext.jquery) ? jQuery(callbackContext) : jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			    completeDeferred = jQuery.Callbacks("once memory"),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			    requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function (key) {
					var match;
					if (state === 2) {
						if (!responseHeaders) {
							responseHeaders = {};
							while (match = rheaders.exec(responseHeadersString)) {
								responseHeaders[match[1].toLowerCase()] = match[2];
							}
						}
						match = responseHeaders[key.toLowerCase()];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function () {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function (name, value) {
					var lname = name.toLowerCase();
					if (!state) {
						name = requestHeadersNames[lname] = requestHeadersNames[lname] || name;
						requestHeaders[name] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function (type) {
					if (!state) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function (map) {
					var code;
					if (map) {
						if (state < 2) {
							for (code in map) {
								// Lazy-add the new callback in a way that preserves old ones
								statusCode[code] = [statusCode[code], map[code]];
							}
						} else {
							// Execute the appropriate callbacks
							jqXHR.always(map[jqXHR.status]);
						}
					}
					return this;
				},

				// Cancel the request
				abort: function (statusText) {
					var finalText = statusText || strAbort;
					if (transport) {
						transport.abort(finalText);
					}
					done(0, finalText);
					return this;
				}
			};

			// Attach deferreds
			deferred.promise(jqXHR).complete = completeDeferred.add;
			jqXHR.success = jqXHR.done;
			jqXHR.error = jqXHR.fail;

			// Remove hash character (#7531: and string promotion)
			// Add protocol if not provided (prefilters might expect it)
			// Handle falsy url in the settings object (#10093: consistency with old signature)
			// We also use the url parameter if available
			s.url = ((url || s.url || ajaxLocation) + "").replace(rhash, "").replace(rprotocol, ajaxLocParts[1] + "//");

			// Alias method option to type as per ticket #12004
			s.type = options.method || options.type || s.method || s.type;

			// Extract dataTypes list
			s.dataTypes = jQuery.trim(s.dataType || "*").toLowerCase().match(rnotwhite) || [""];

			// A cross-domain request is in order when we have a protocol:host:port mismatch
			if (s.crossDomain == null) {
				parts = rurl.exec(s.url.toLowerCase());
				s.crossDomain = !!(parts && (parts[1] !== ajaxLocParts[1] || parts[2] !== ajaxLocParts[2] || (parts[3] || (parts[1] === "http:" ? "80" : "443")) !== (ajaxLocParts[3] || (ajaxLocParts[1] === "http:" ? "80" : "443"))));
			}

			// Convert data if not already a string
			if (s.data && s.processData && typeof s.data !== "string") {
				s.data = jQuery.param(s.data, s.traditional);
			}

			// Apply prefilters
			inspectPrefiltersOrTransports(prefilters, s, options, jqXHR);

			// If request was aborted inside a prefilter, stop there
			if (state === 2) {
				return jqXHR;
			}

			// We can fire global events as of now if asked to
			// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
			fireGlobals = jQuery.event && s.global;

			// Watch for a new set of requests
			if (fireGlobals && jQuery.active++ === 0) {
				jQuery.event.trigger("ajaxStart");
			}

			// Uppercase the type
			s.type = s.type.toUpperCase();

			// Determine if request has content
			s.hasContent = !rnoContent.test(s.type);

			// Save the URL in case we're toying with the If-Modified-Since
			// and/or If-None-Match header later on
			cacheURL = s.url;

			// More options handling for requests with no content
			if (!s.hasContent) {

				// If data is available, append data to url
				if (s.data) {
					cacheURL = s.url += (rquery.test(cacheURL) ? "&" : "?") + s.data;
					// #9682: remove data so that it's not used in an eventual retry
					delete s.data;
				}

				// Add anti-cache in url if needed
				if (s.cache === false) {
					s.url = rts.test(cacheURL) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace(rts, "$1_=" + nonce++) :

					// Otherwise add one to the end
					cacheURL + (rquery.test(cacheURL) ? "&" : "?") + "_=" + nonce++;
				}
			}

			// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
			if (s.ifModified) {
				if (jQuery.lastModified[cacheURL]) {
					jqXHR.setRequestHeader("If-Modified-Since", jQuery.lastModified[cacheURL]);
				}
				if (jQuery.etag[cacheURL]) {
					jqXHR.setRequestHeader("If-None-Match", jQuery.etag[cacheURL]);
				}
			}

			// Set the correct header, if data is being sent
			if (s.data && s.hasContent && s.contentType !== false || options.contentType) {
				jqXHR.setRequestHeader("Content-Type", s.contentType);
			}

			// Set the Accepts header for the server, depending on the dataType
			jqXHR.setRequestHeader("Accept", s.dataTypes[0] && s.accepts[s.dataTypes[0]] ? s.accepts[s.dataTypes[0]] + (s.dataTypes[0] !== "*" ? ", " + allTypes + "; q=0.01" : "") : s.accepts["*"]);

			// Check for headers option
			for (i in s.headers) {
				jqXHR.setRequestHeader(i, s.headers[i]);
			}

			// Allow custom headers/mimetypes and early abort
			if (s.beforeSend && (s.beforeSend.call(callbackContext, jqXHR, s) === false || state === 2)) {
				// Abort if not done already and return
				return jqXHR.abort();
			}

			// Aborting is no longer a cancellation
			strAbort = "abort";

			// Install callbacks on deferreds
			for (i in { success: 1, error: 1, complete: 1 }) {
				jqXHR[i](s[i]);
			}

			// Get transport
			transport = inspectPrefiltersOrTransports(transports, s, options, jqXHR);

			// If no transport, we auto-abort
			if (!transport) {
				done(-1, "No Transport");
			} else {
				jqXHR.readyState = 1;

				// Send global event
				if (fireGlobals) {
					globalEventContext.trigger("ajaxSend", [jqXHR, s]);
				}
				// Timeout
				if (s.async && s.timeout > 0) {
					timeoutTimer = setTimeout(function () {
						jqXHR.abort("timeout");
					}, s.timeout);
				}

				try {
					state = 1;
					transport.send(requestHeaders, done);
				} catch (e) {
					// Propagate exception as error if not done
					if (state < 2) {
						done(-1, e);
						// Simply rethrow otherwise
					} else {
						throw e;
					}
				}
			}

			// Callback for when everything is done
			function done(status, nativeStatusText, responses, headers) {
				var isSuccess,
				    success,
				    error,
				    response,
				    modified,
				    statusText = nativeStatusText;

				// Called once
				if (state === 2) {
					return;
				}

				// State is "done" now
				state = 2;

				// Clear timeout if it exists
				if (timeoutTimer) {
					clearTimeout(timeoutTimer);
				}

				// Dereference transport for early garbage collection
				// (no matter how long the jqXHR object will be used)
				transport = undefined;

				// Cache response headers
				responseHeadersString = headers || "";

				// Set readyState
				jqXHR.readyState = status > 0 ? 4 : 0;

				// Determine if successful
				isSuccess = status >= 200 && status < 300 || status === 304;

				// Get response data
				if (responses) {
					response = ajaxHandleResponses(s, jqXHR, responses);
				}

				// Convert no matter what (that way responseXXX fields are always set)
				response = ajaxConvert(s, response, jqXHR, isSuccess);

				// If successful, handle type chaining
				if (isSuccess) {

					// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
					if (s.ifModified) {
						modified = jqXHR.getResponseHeader("Last-Modified");
						if (modified) {
							jQuery.lastModified[cacheURL] = modified;
						}
						modified = jqXHR.getResponseHeader("etag");
						if (modified) {
							jQuery.etag[cacheURL] = modified;
						}
					}

					// if no content
					if (status === 204 || s.type === "HEAD") {
						statusText = "nocontent";

						// if not modified
					} else if (status === 304) {
						statusText = "notmodified";

						// If we have data, let's convert it
					} else {
						statusText = response.state;
						success = response.data;
						error = response.error;
						isSuccess = !error;
					}
				} else {
					// Extract error from statusText and normalize for non-aborts
					error = statusText;
					if (status || !statusText) {
						statusText = "error";
						if (status < 0) {
							status = 0;
						}
					}
				}

				// Set data for the fake xhr object
				jqXHR.status = status;
				jqXHR.statusText = (nativeStatusText || statusText) + "";

				// Success/Error
				if (isSuccess) {
					deferred.resolveWith(callbackContext, [success, statusText, jqXHR]);
				} else {
					deferred.rejectWith(callbackContext, [jqXHR, statusText, error]);
				}

				// Status-dependent callbacks
				jqXHR.statusCode(statusCode);
				statusCode = undefined;

				if (fireGlobals) {
					globalEventContext.trigger(isSuccess ? "ajaxSuccess" : "ajaxError", [jqXHR, s, isSuccess ? success : error]);
				}

				// Complete
				completeDeferred.fireWith(callbackContext, [jqXHR, statusText]);

				if (fireGlobals) {
					globalEventContext.trigger("ajaxComplete", [jqXHR, s]);
					// Handle the global AJAX counter
					if (! --jQuery.active) {
						jQuery.event.trigger("ajaxStop");
					}
				}
			}

			return jqXHR;
		},

		getJSON: function (url, data, callback) {
			return jQuery.get(url, data, callback, "json");
		},

		getScript: function (url, callback) {
			return jQuery.get(url, undefined, callback, "script");
		}
	});

	jQuery.each(["get", "post"], function (i, method) {
		jQuery[method] = function (url, data, callback, type) {
			// Shift arguments if data argument was omitted
			if (jQuery.isFunction(data)) {
				type = type || callback;
				callback = data;
				data = undefined;
			}

			return jQuery.ajax({
				url: url,
				type: method,
				dataType: type,
				data: data,
				success: callback
			});
		};
	});

	jQuery._evalUrl = function (url) {
		return jQuery.ajax({
			url: url,
			type: "GET",
			dataType: "script",
			async: false,
			global: false,
			"throws": true
		});
	};

	jQuery.fn.extend({
		wrapAll: function (html) {
			var wrap;

			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapAll(html.call(this, i));
				});
			}

			if (this[0]) {

				// The elements to wrap the target around
				wrap = jQuery(html, this[0].ownerDocument).eq(0).clone(true);

				if (this[0].parentNode) {
					wrap.insertBefore(this[0]);
				}

				wrap.map(function () {
					var elem = this;

					while (elem.firstElementChild) {
						elem = elem.firstElementChild;
					}

					return elem;
				}).append(this);
			}

			return this;
		},

		wrapInner: function (html) {
			if (jQuery.isFunction(html)) {
				return this.each(function (i) {
					jQuery(this).wrapInner(html.call(this, i));
				});
			}

			return this.each(function () {
				var self = jQuery(this),
				    contents = self.contents();

				if (contents.length) {
					contents.wrapAll(html);
				} else {
					self.append(html);
				}
			});
		},

		wrap: function (html) {
			var isFunction = jQuery.isFunction(html);

			return this.each(function (i) {
				jQuery(this).wrapAll(isFunction ? html.call(this, i) : html);
			});
		},

		unwrap: function () {
			return this.parent().each(function () {
				if (!jQuery.nodeName(this, "body")) {
					jQuery(this).replaceWith(this.childNodes);
				}
			}).end();
		}
	});

	jQuery.expr.filters.hidden = function (elem) {
		// Support: Opera <= 12.12
		// Opera reports offsetWidths and offsetHeights less than zero on some elements
		return elem.offsetWidth <= 0 && elem.offsetHeight <= 0;
	};
	jQuery.expr.filters.visible = function (elem) {
		return !jQuery.expr.filters.hidden(elem);
	};

	var r20 = /%20/g,
	    rbracket = /\[\]$/,
	    rCRLF = /\r?\n/g,
	    rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	    rsubmittable = /^(?:input|select|textarea|keygen)/i;

	function buildParams(prefix, obj, traditional, add) {
		var name;

		if (jQuery.isArray(obj)) {
			// Serialize array item.
			jQuery.each(obj, function (i, v) {
				if (traditional || rbracket.test(prefix)) {
					// Treat each array item as a scalar.
					add(prefix, v);
				} else {
					// Item is non-scalar (array or object), encode its numeric index.
					buildParams(prefix + "[" + (typeof v === "object" ? i : "") + "]", v, traditional, add);
				}
			});
		} else if (!traditional && jQuery.type(obj) === "object") {
			// Serialize object item.
			for (name in obj) {
				buildParams(prefix + "[" + name + "]", obj[name], traditional, add);
			}
		} else {
			// Serialize scalar item.
			add(prefix, obj);
		}
	}

	// Serialize an array of form elements or a set of
	// key/values into a query string
	jQuery.param = function (a, traditional) {
		var prefix,
		    s = [],
		    add = function (key, value) {
			// If value is a function, invoke it and return its value
			value = jQuery.isFunction(value) ? value() : value == null ? "" : value;
			s[s.length] = encodeURIComponent(key) + "=" + encodeURIComponent(value);
		};

		// Set traditional to true for jQuery <= 1.3.2 behavior.
		if (traditional === undefined) {
			traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
		}

		// If an array was passed in, assume that it is an array of form elements.
		if (jQuery.isArray(a) || a.jquery && !jQuery.isPlainObject(a)) {
			// Serialize the form elements
			jQuery.each(a, function () {
				add(this.name, this.value);
			});
		} else {
			// If traditional, encode the "old" way (the way 1.3.2 or older
			// did it), otherwise encode params recursively.
			for (prefix in a) {
				buildParams(prefix, a[prefix], traditional, add);
			}
		}

		// Return the resulting serialization
		return s.join("&").replace(r20, "+");
	};

	jQuery.fn.extend({
		serialize: function () {
			return jQuery.param(this.serializeArray());
		},
		serializeArray: function () {
			return this.map(function () {
				// Can add propHook for "elements" to filter or add form elements
				var elements = jQuery.prop(this, "elements");
				return elements ? jQuery.makeArray(elements) : this;
			}).filter(function () {
				var type = this.type;

				// Use .is( ":disabled" ) so that fieldset[disabled] works
				return this.name && !jQuery(this).is(":disabled") && rsubmittable.test(this.nodeName) && !rsubmitterTypes.test(type) && (this.checked || !rcheckableType.test(type));
			}).map(function (i, elem) {
				var val = jQuery(this).val();

				return val == null ? null : jQuery.isArray(val) ? jQuery.map(val, function (val) {
					return { name: elem.name, value: val.replace(rCRLF, "\r\n") };
				}) : { name: elem.name, value: val.replace(rCRLF, "\r\n") };
			}).get();
		}
	});

	jQuery.ajaxSettings.xhr = function () {
		try {
			return new XMLHttpRequest();
		} catch (e) {}
	};

	var xhrId = 0,
	    xhrCallbacks = {},
	    xhrSuccessStatus = {
		// file protocol always yields status code 0, assume 200
		0: 200,
		// Support: IE9
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	    xhrSupported = jQuery.ajaxSettings.xhr();

	// Support: IE9
	// Open requests must be manually aborted on unload (#5280)
	// See https://support.microsoft.com/kb/2856746 for more info
	if (window.attachEvent) {
		window.attachEvent("onunload", function () {
			for (var key in xhrCallbacks) {
				xhrCallbacks[key]();
			}
		});
	}

	support.cors = !!xhrSupported && "withCredentials" in xhrSupported;
	support.ajax = xhrSupported = !!xhrSupported;

	jQuery.ajaxTransport(function (options) {
		var callback;

		// Cross domain only allowed if supported through XMLHttpRequest
		if (support.cors || xhrSupported && !options.crossDomain) {
			return {
				send: function (headers, complete) {
					var i,
					    xhr = options.xhr(),
					    id = ++xhrId;

					xhr.open(options.type, options.url, options.async, options.username, options.password);

					// Apply custom fields if provided
					if (options.xhrFields) {
						for (i in options.xhrFields) {
							xhr[i] = options.xhrFields[i];
						}
					}

					// Override mime type if needed
					if (options.mimeType && xhr.overrideMimeType) {
						xhr.overrideMimeType(options.mimeType);
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if (!options.crossDomain && !headers["X-Requested-With"]) {
						headers["X-Requested-With"] = "XMLHttpRequest";
					}

					// Set headers
					for (i in headers) {
						xhr.setRequestHeader(i, headers[i]);
					}

					// Callback
					callback = function (type) {
						return function () {
							if (callback) {
								delete xhrCallbacks[id];
								callback = xhr.onload = xhr.onerror = null;

								if (type === "abort") {
									xhr.abort();
								} else if (type === "error") {
									complete(
									// file: protocol always yields status 0; see #8605, #14207
									xhr.status, xhr.statusText);
								} else {
									complete(xhrSuccessStatus[xhr.status] || xhr.status, xhr.statusText,
									// Support: IE9
									// Accessing binary-data responseText throws an exception
									// (#11426)
									typeof xhr.responseText === "string" ? {
										text: xhr.responseText
									} : undefined, xhr.getAllResponseHeaders());
								}
							}
						};
					};

					// Listen to events
					xhr.onload = callback();
					xhr.onerror = callback("error");

					// Create the abort callback
					callback = xhrCallbacks[id] = callback("abort");

					try {
						// Do send the request (this may raise an exception)
						xhr.send(options.hasContent && options.data || null);
					} catch (e) {
						// #14683: Only rethrow if this hasn't been notified as an error yet
						if (callback) {
							throw e;
						}
					}
				},

				abort: function () {
					if (callback) {
						callback();
					}
				}
			};
		}
	});

	// Install script dataType
	jQuery.ajaxSetup({
		accepts: {
			script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
		},
		contents: {
			script: /(?:java|ecma)script/
		},
		converters: {
			"text script": function (text) {
				jQuery.globalEval(text);
				return text;
			}
		}
	});

	// Handle cache's special case and crossDomain
	jQuery.ajaxPrefilter("script", function (s) {
		if (s.cache === undefined) {
			s.cache = false;
		}
		if (s.crossDomain) {
			s.type = "GET";
		}
	});

	// Bind script tag hack transport
	jQuery.ajaxTransport("script", function (s) {
		// This transport only deals with cross domain requests
		if (s.crossDomain) {
			var script, callback;
			return {
				send: function (_, complete) {
					script = jQuery("<script>").prop({
						async: true,
						charset: s.scriptCharset,
						src: s.url
					}).on("load error", callback = function (evt) {
						script.remove();
						callback = null;
						if (evt) {
							complete(evt.type === "error" ? 404 : 200, evt.type);
						}
					});
					document.head.appendChild(script[0]);
				},
				abort: function () {
					if (callback) {
						callback();
					}
				}
			};
		}
	});

	var oldCallbacks = [],
	    rjsonp = /(=)\?(?=&|$)|\?\?/;

	// Default jsonp settings
	jQuery.ajaxSetup({
		jsonp: "callback",
		jsonpCallback: function () {
			var callback = oldCallbacks.pop() || jQuery.expando + "_" + nonce++;
			this[callback] = true;
			return callback;
		}
	});

	// Detect, normalize options and install callbacks for jsonp requests
	jQuery.ajaxPrefilter("json jsonp", function (s, originalSettings, jqXHR) {

		var callbackName,
		    overwritten,
		    responseContainer,
		    jsonProp = s.jsonp !== false && (rjsonp.test(s.url) ? "url" : typeof s.data === "string" && !(s.contentType || "").indexOf("application/x-www-form-urlencoded") && rjsonp.test(s.data) && "data");

		// Handle iff the expected data type is "jsonp" or we have a parameter to set
		if (jsonProp || s.dataTypes[0] === "jsonp") {

			// Get callback name, remembering preexisting value associated with it
			callbackName = s.jsonpCallback = jQuery.isFunction(s.jsonpCallback) ? s.jsonpCallback() : s.jsonpCallback;

			// Insert callback into url or form data
			if (jsonProp) {
				s[jsonProp] = s[jsonProp].replace(rjsonp, "$1" + callbackName);
			} else if (s.jsonp !== false) {
				s.url += (rquery.test(s.url) ? "&" : "?") + s.jsonp + "=" + callbackName;
			}

			// Use data converter to retrieve json after script execution
			s.converters["script json"] = function () {
				if (!responseContainer) {
					jQuery.error(callbackName + " was not called");
				}
				return responseContainer[0];
			};

			// force json dataType
			s.dataTypes[0] = "json";

			// Install callback
			overwritten = window[callbackName];
			window[callbackName] = function () {
				responseContainer = arguments;
			};

			// Clean-up function (fires after converters)
			jqXHR.always(function () {
				// Restore preexisting value
				window[callbackName] = overwritten;

				// Save back as free
				if (s[callbackName]) {
					// make sure that re-using the options doesn't screw things around
					s.jsonpCallback = originalSettings.jsonpCallback;

					// save the callback name for future use
					oldCallbacks.push(callbackName);
				}

				// Call if it was a function and we have a response
				if (responseContainer && jQuery.isFunction(overwritten)) {
					overwritten(responseContainer[0]);
				}

				responseContainer = overwritten = undefined;
			});

			// Delegate to script
			return "script";
		}
	});

	// data: string of html
	// context (optional): If specified, the fragment will be created in this context, defaults to document
	// keepScripts (optional): If true, will include scripts passed in the html string
	jQuery.parseHTML = function (data, context, keepScripts) {
		if (!data || typeof data !== "string") {
			return null;
		}
		if (typeof context === "boolean") {
			keepScripts = context;
			context = false;
		}
		context = context || document;

		var parsed = rsingleTag.exec(data),
		    scripts = !keepScripts && [];

		// Single tag
		if (parsed) {
			return [context.createElement(parsed[1])];
		}

		parsed = jQuery.buildFragment([data], context, scripts);

		if (scripts && scripts.length) {
			jQuery(scripts).remove();
		}

		return jQuery.merge([], parsed.childNodes);
	};

	// Keep a copy of the old load method
	var _load = jQuery.fn.load;

	/**
  * Load a url into a page
  */
	jQuery.fn.load = function (url, params, callback) {
		if (typeof url !== "string" && _load) {
			return _load.apply(this, arguments);
		}

		var selector,
		    type,
		    response,
		    self = this,
		    off = url.indexOf(" ");

		if (off >= 0) {
			selector = jQuery.trim(url.slice(off));
			url = url.slice(0, off);
		}

		// If it's a function
		if (jQuery.isFunction(params)) {

			// We assume that it's the callback
			callback = params;
			params = undefined;

			// Otherwise, build a param string
		} else if (params && typeof params === "object") {
			type = "POST";
		}

		// If we have elements to modify, make the request
		if (self.length > 0) {
			jQuery.ajax({
				url: url,

				// if "type" variable is undefined, then "GET" method will be used
				type: type,
				dataType: "html",
				data: params
			}).done(function (responseText) {

				// Save response for use in complete callback
				response = arguments;

				self.html(selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery("<div>").append(jQuery.parseHTML(responseText)).find(selector) :

				// Otherwise use the full result
				responseText);
			}).complete(callback && function (jqXHR, status) {
				self.each(callback, response || [jqXHR.responseText, status, jqXHR]);
			});
		}

		return this;
	};

	// Attach a bunch of functions for handling common AJAX events
	jQuery.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (i, type) {
		jQuery.fn[type] = function (fn) {
			return this.on(type, fn);
		};
	});

	jQuery.expr.filters.animated = function (elem) {
		return jQuery.grep(jQuery.timers, function (fn) {
			return elem === fn.elem;
		}).length;
	};

	var docElem = window.document.documentElement;

	/**
  * Gets a window from an element
  */
	function getWindow(elem) {
		return jQuery.isWindow(elem) ? elem : elem.nodeType === 9 && elem.defaultView;
	}

	jQuery.offset = {
		setOffset: function (elem, options, i) {
			var curPosition,
			    curLeft,
			    curCSSTop,
			    curTop,
			    curOffset,
			    curCSSLeft,
			    calculatePosition,
			    position = jQuery.css(elem, "position"),
			    curElem = jQuery(elem),
			    props = {};

			// Set position first, in-case top/left are set even on static elem
			if (position === "static") {
				elem.style.position = "relative";
			}

			curOffset = curElem.offset();
			curCSSTop = jQuery.css(elem, "top");
			curCSSLeft = jQuery.css(elem, "left");
			calculatePosition = (position === "absolute" || position === "fixed") && (curCSSTop + curCSSLeft).indexOf("auto") > -1;

			// Need to be able to calculate position if either
			// top or left is auto and position is either absolute or fixed
			if (calculatePosition) {
				curPosition = curElem.position();
				curTop = curPosition.top;
				curLeft = curPosition.left;
			} else {
				curTop = parseFloat(curCSSTop) || 0;
				curLeft = parseFloat(curCSSLeft) || 0;
			}

			if (jQuery.isFunction(options)) {
				options = options.call(elem, i, curOffset);
			}

			if (options.top != null) {
				props.top = options.top - curOffset.top + curTop;
			}
			if (options.left != null) {
				props.left = options.left - curOffset.left + curLeft;
			}

			if ("using" in options) {
				options.using.call(elem, props);
			} else {
				curElem.css(props);
			}
		}
	};

	jQuery.fn.extend({
		offset: function (options) {
			if (arguments.length) {
				return options === undefined ? this : this.each(function (i) {
					jQuery.offset.setOffset(this, options, i);
				});
			}

			var docElem,
			    win,
			    elem = this[0],
			    box = { top: 0, left: 0 },
			    doc = elem && elem.ownerDocument;

			if (!doc) {
				return;
			}

			docElem = doc.documentElement;

			// Make sure it's not a disconnected DOM node
			if (!jQuery.contains(docElem, elem)) {
				return box;
			}

			// Support: BlackBerry 5, iOS 3 (original iPhone)
			// If we don't have gBCR, just use 0,0 rather than error
			if (typeof elem.getBoundingClientRect !== strundefined) {
				box = elem.getBoundingClientRect();
			}
			win = getWindow(doc);
			return {
				top: box.top + win.pageYOffset - docElem.clientTop,
				left: box.left + win.pageXOffset - docElem.clientLeft
			};
		},

		position: function () {
			if (!this[0]) {
				return;
			}

			var offsetParent,
			    offset,
			    elem = this[0],
			    parentOffset = { top: 0, left: 0 };

			// Fixed elements are offset from window (parentOffset = {top:0, left: 0}, because it is its only offset parent
			if (jQuery.css(elem, "position") === "fixed") {
				// Assume getBoundingClientRect is there when computed position is fixed
				offset = elem.getBoundingClientRect();
			} else {
				// Get *real* offsetParent
				offsetParent = this.offsetParent();

				// Get correct offsets
				offset = this.offset();
				if (!jQuery.nodeName(offsetParent[0], "html")) {
					parentOffset = offsetParent.offset();
				}

				// Add offsetParent borders
				parentOffset.top += jQuery.css(offsetParent[0], "borderTopWidth", true);
				parentOffset.left += jQuery.css(offsetParent[0], "borderLeftWidth", true);
			}

			// Subtract parent offsets and element margins
			return {
				top: offset.top - parentOffset.top - jQuery.css(elem, "marginTop", true),
				left: offset.left - parentOffset.left - jQuery.css(elem, "marginLeft", true)
			};
		},

		offsetParent: function () {
			return this.map(function () {
				var offsetParent = this.offsetParent || docElem;

				while (offsetParent && !jQuery.nodeName(offsetParent, "html") && jQuery.css(offsetParent, "position") === "static") {
					offsetParent = offsetParent.offsetParent;
				}

				return offsetParent || docElem;
			});
		}
	});

	// Create scrollLeft and scrollTop methods
	jQuery.each({ scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function (method, prop) {
		var top = "pageYOffset" === prop;

		jQuery.fn[method] = function (val) {
			return access(this, function (elem, method, val) {
				var win = getWindow(elem);

				if (val === undefined) {
					return win ? win[prop] : elem[method];
				}

				if (win) {
					win.scrollTo(!top ? val : window.pageXOffset, top ? val : window.pageYOffset);
				} else {
					elem[method] = val;
				}
			}, method, val, arguments.length, null);
		};
	});

	// Support: Safari<7+, Chrome<37+
	// Add the top/left cssHooks using jQuery.fn.position
	// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
	// Blink bug: https://code.google.com/p/chromium/issues/detail?id=229280
	// getComputedStyle returns percent when specified for top/left/bottom/right;
	// rather than make the css module depend on the offset module, just check for it here
	jQuery.each(["top", "left"], function (i, prop) {
		jQuery.cssHooks[prop] = addGetHookIf(support.pixelPosition, function (elem, computed) {
			if (computed) {
				computed = curCSS(elem, prop);
				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test(computed) ? jQuery(elem).position()[prop] + "px" : computed;
			}
		});
	});

	// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
	jQuery.each({ Height: "height", Width: "width" }, function (name, type) {
		jQuery.each({ padding: "inner" + name, content: type, "": "outer" + name }, function (defaultExtra, funcName) {
			// Margin is only for outerHeight, outerWidth
			jQuery.fn[funcName] = function (margin, value) {
				var chainable = arguments.length && (defaultExtra || typeof margin !== "boolean"),
				    extra = defaultExtra || (margin === true || value === true ? "margin" : "border");

				return access(this, function (elem, type, value) {
					var doc;

					if (jQuery.isWindow(elem)) {
						// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
						// isn't a whole lot we can do. See pull request at this URL for discussion:
						// https://github.com/jquery/jquery/pull/764
						return elem.document.documentElement["client" + name];
					}

					// Get document width or height
					if (elem.nodeType === 9) {
						doc = elem.documentElement;

						// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
						// whichever is greatest
						return Math.max(elem.body["scroll" + name], doc["scroll" + name], elem.body["offset" + name], doc["offset" + name], doc["client" + name]);
					}

					return value === undefined ?
					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css(elem, type, extra) :

					// Set width or height on the element
					jQuery.style(elem, type, value, extra);
				}, type, chainable ? margin : undefined, chainable, null);
			};
		});
	});

	// The number of elements contained in the matched element set
	jQuery.fn.size = function () {
		return this.length;
	};

	jQuery.fn.andSelf = jQuery.fn.addBack;

	// Register as a named AMD module, since jQuery can be concatenated with other
	// files that may use define, but not via a proper concatenation script that
	// understands anonymous AMD modules. A named AMD is safest and most robust
	// way to register. Lowercase jquery is used because AMD module names are
	// derived from file names, and jQuery is normally delivered in a lowercase
	// file name. Do this after creating the global so that if an AMD module wants
	// to call noConflict to hide this version of jQuery, it will work.

	// Note that for maximum portability, libraries that are not jQuery should
	// declare themselves as anonymous modules, and avoid setting a global if an
	// AMD loader is present. jQuery is a special case. For more information, see
	// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

	if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return jQuery;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	var
	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,


	// Map over the $ in case of overwrite
	_$ = window.$;

	jQuery.noConflict = function (deep) {
		if (window.$ === jQuery) {
			window.$ = _$;
		}

		if (deep && window.jQuery === jQuery) {
			window.jQuery = _jQuery;
		}

		return jQuery;
	};

	// Expose jQuery and $ identifiers, even in AMD
	// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
	// and CommonJS for browser emulators (#13566)
	if (typeof noGlobal === strundefined) {
		window.jQuery = window.$ = jQuery;
	}

	return jQuery;
});

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createCustomEvent;
/**
 * 创建一个自定义事件
 * 
 * @export
 * @param {string} [eventName='click'] 
 * @param {boolean} [p2=true] 
 * @param {boolean} [p3=true] 
 * @returns 
 */
function createCustomEvent(eventName, data) {
  data = data || {};
  // let customEvent = document.createEvent( 'Event' )
  // customEvent.initEvent( eventName, p2, p3 )
  return new CustomEvent(eventName, data.detail ? data : { detail: data });
}

/***/ }),

/***/ 41:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_constants__ = __webpack_require__(42);



/**
 * 对全局XMLHttpRequest覆盖 直接插入到dom
 * 
 * @Date 2017年11月21日
 */
function modifyResponse(response) {

  var original_response, modified_response;

  if (this.readyState === 4) {

    let {
      readyState,
      requestData,
      requestMethod,
      requestURL,
      response,
      responseText,
      responseType,
      responseURL,
      responseXML,
      status,
      statusText,
      timeout,
      withCredentials
    } = this;

    $(`#${__WEBPACK_IMPORTED_MODULE_1__utils_constants__["a" /* dataMiddleDomId */]}`).val(JSON.stringify({
      readyState,
      requestData,
      requestMethod,
      requestURL,
      response,
      responseText,
      responseType,
      responseURL,
      responseXML,
      status,
      statusText,
      timeout,
      withCredentials
    }));
    document.body.dispatchEvent(Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* createCustomEvent */])('extensionPageEventFromFrame', { detail: this }));
  }
}
XMLHttpRequest.prototype.open = function (original_function) {
  return function (method, url, async) {
    // 保存请求相关参数
    this.requestMethod = method;
    this.requestURL = url;

    this.addEventListener("readystatechange", modifyResponse);
    return original_function.apply(this, arguments);
  };
}(XMLHttpRequest.prototype.open);

XMLHttpRequest.prototype.send = function (original_function) {
  return function (data) {
    // 保存请求相关参数
    this.requestData = data;
    return original_function.apply(this, arguments);
  };
}(XMLHttpRequest.prototype.send);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 42:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
const dataMiddleDomId = 'bigwe-input-hidden';
/* harmony export (immutable) */ __webpack_exports__["a"] = dataMiddleDomId;


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZGFhZDNkNjg0NzJiYTAzMGZlZjQiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRTY3JpcHQveGhyLmpzIiwid2VicGFjazovLy8uL3NyYy91dGlscy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkb2N1bWVudCIsInciLCJFcnJvciIsIndpbmRvdyIsIm5vR2xvYmFsIiwiYXJyIiwic2xpY2UiLCJjb25jYXQiLCJwdXNoIiwiaW5kZXhPZiIsImNsYXNzMnR5cGUiLCJ0b1N0cmluZyIsImhhc093biIsImhhc093blByb3BlcnR5Iiwic3VwcG9ydCIsInZlcnNpb24iLCJqUXVlcnkiLCJzZWxlY3RvciIsImNvbnRleHQiLCJmbiIsImluaXQiLCJydHJpbSIsInJtc1ByZWZpeCIsInJkYXNoQWxwaGEiLCJmY2FtZWxDYXNlIiwiYWxsIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJwcm90b3R5cGUiLCJqcXVlcnkiLCJjb25zdHJ1Y3RvciIsImxlbmd0aCIsInRvQXJyYXkiLCJjYWxsIiwiZ2V0IiwibnVtIiwicHVzaFN0YWNrIiwiZWxlbXMiLCJyZXQiLCJtZXJnZSIsInByZXZPYmplY3QiLCJlYWNoIiwiY2FsbGJhY2siLCJhcmdzIiwibWFwIiwiZWxlbSIsImkiLCJhcHBseSIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0IiwibGVuIiwiaiIsImVuZCIsInNvcnQiLCJzcGxpY2UiLCJleHRlbmQiLCJvcHRpb25zIiwibmFtZSIsInNyYyIsImNvcHkiLCJjb3B5SXNBcnJheSIsImNsb25lIiwidGFyZ2V0IiwiZGVlcCIsImlzRnVuY3Rpb24iLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsInVuZGVmaW5lZCIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm1zZyIsIm5vb3AiLCJvYmoiLCJ0eXBlIiwiQXJyYXkiLCJpc1dpbmRvdyIsImlzTnVtZXJpYyIsInBhcnNlRmxvYXQiLCJub2RlVHlwZSIsImlzRW1wdHlPYmplY3QiLCJnbG9iYWxFdmFsIiwiY29kZSIsInNjcmlwdCIsImluZGlyZWN0IiwiZXZhbCIsInRyaW0iLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNhbWVsQ2FzZSIsInN0cmluZyIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJ2YWx1ZSIsImlzQXJyYXlsaWtlIiwibWFrZUFycmF5IiwicmVzdWx0cyIsIk9iamVjdCIsImluQXJyYXkiLCJzZWNvbmQiLCJncmVwIiwiaW52ZXJ0IiwiY2FsbGJhY2tJbnZlcnNlIiwibWF0Y2hlcyIsImNhbGxiYWNrRXhwZWN0IiwiYXJnIiwiZ3VpZCIsInByb3h5IiwidG1wIiwibm93IiwiRGF0ZSIsInNwbGl0IiwiU2l6emxlIiwiRXhwciIsImdldFRleHQiLCJpc1hNTCIsInRva2VuaXplIiwiY29tcGlsZSIsInNlbGVjdCIsIm91dGVybW9zdENvbnRleHQiLCJzb3J0SW5wdXQiLCJoYXNEdXBsaWNhdGUiLCJzZXREb2N1bWVudCIsImRvY0VsZW0iLCJkb2N1bWVudElzSFRNTCIsInJidWdneVFTQSIsInJidWdneU1hdGNoZXMiLCJjb250YWlucyIsInByZWZlcnJlZERvYyIsImRpcnJ1bnMiLCJkb25lIiwiY2xhc3NDYWNoZSIsImNyZWF0ZUNhY2hlIiwidG9rZW5DYWNoZSIsImNvbXBpbGVyQ2FjaGUiLCJzb3J0T3JkZXIiLCJhIiwiYiIsIk1BWF9ORUdBVElWRSIsInBvcCIsInB1c2hfbmF0aXZlIiwibGlzdCIsImJvb2xlYW5zIiwid2hpdGVzcGFjZSIsImNoYXJhY3RlckVuY29kaW5nIiwiaWRlbnRpZmllciIsImF0dHJpYnV0ZXMiLCJwc2V1ZG9zIiwicndoaXRlc3BhY2UiLCJSZWdFeHAiLCJyY29tbWEiLCJyY29tYmluYXRvcnMiLCJyYXR0cmlidXRlUXVvdGVzIiwicnBzZXVkbyIsInJpZGVudGlmaWVyIiwibWF0Y2hFeHByIiwicmlucHV0cyIsInJoZWFkZXIiLCJybmF0aXZlIiwicnF1aWNrRXhwciIsInJzaWJsaW5nIiwicmVzY2FwZSIsInJ1bmVzY2FwZSIsImZ1bmVzY2FwZSIsIl8iLCJlc2NhcGVkIiwiZXNjYXBlZFdoaXRlc3BhY2UiLCJoaWdoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwidW5sb2FkSGFuZGxlciIsImNoaWxkTm9kZXMiLCJlIiwiZWxzIiwic2VlZCIsIm1hdGNoIiwibSIsImdyb3VwcyIsIm9sZCIsIm5pZCIsIm5ld0NvbnRleHQiLCJuZXdTZWxlY3RvciIsIm93bmVyRG9jdW1lbnQiLCJleGVjIiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInFzYSIsInRlc3QiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ0b1NlbGVjdG9yIiwidGVzdENvbnRleHQiLCJqb2luIiwicXVlcnlTZWxlY3RvckFsbCIsInFzYUVycm9yIiwicmVtb3ZlQXR0cmlidXRlIiwia2V5cyIsImNhY2hlIiwia2V5IiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsIm1hcmtGdW5jdGlvbiIsImFzc2VydCIsImRpdiIsImFkZEhhbmRsZSIsImF0dHJzIiwiaGFuZGxlciIsImF0dHJIYW5kbGUiLCJzaWJsaW5nQ2hlY2siLCJjdXIiLCJkaWZmIiwic291cmNlSW5kZXgiLCJuZXh0U2libGluZyIsImNyZWF0ZUlucHV0UHNldWRvIiwiY3JlYXRlQnV0dG9uUHNldWRvIiwiY3JlYXRlUG9zaXRpb25hbFBzZXVkbyIsImFyZ3VtZW50IiwibWF0Y2hJbmRleGVzIiwiZG9jdW1lbnRFbGVtZW50Iiwibm9kZSIsImhhc0NvbXBhcmUiLCJwYXJlbnQiLCJkb2MiLCJkZWZhdWx0VmlldyIsInRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImNsYXNzTmFtZSIsImNyZWF0ZUNvbW1lbnQiLCJnZXRCeUlkIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJmaW5kIiwiZmlsdGVyIiwiYXR0cklkIiwiZ2V0QXR0cmlidXRlTm9kZSIsInRhZyIsImlubmVySFRNTCIsImlucHV0IiwibWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImFkb3duIiwiYnVwIiwiY29tcGFyZSIsInNvcnREZXRhY2hlZCIsImF1cCIsImFwIiwiYnAiLCJ1bnNoaWZ0IiwiZXhwciIsImVsZW1lbnRzIiwiYXR0ciIsInZhbCIsInNwZWNpZmllZCIsInVuaXF1ZVNvcnQiLCJkdXBsaWNhdGVzIiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJ0ZXh0Q29udGVudCIsImZpcnN0Q2hpbGQiLCJub2RlVmFsdWUiLCJzZWxlY3RvcnMiLCJjcmVhdGVQc2V1ZG8iLCJyZWxhdGl2ZSIsImRpciIsInByZUZpbHRlciIsImV4Y2VzcyIsInVucXVvdGVkIiwibm9kZU5hbWVTZWxlY3RvciIsInBhdHRlcm4iLCJvcGVyYXRvciIsImNoZWNrIiwicmVzdWx0Iiwid2hhdCIsInNpbXBsZSIsImZvcndhcmQiLCJvZlR5cGUiLCJ4bWwiLCJvdXRlckNhY2hlIiwibm9kZUluZGV4Iiwic3RhcnQiLCJ1c2VDYWNoZSIsImxhc3RDaGlsZCIsInBzZXVkbyIsInNldEZpbHRlcnMiLCJpZHgiLCJtYXRjaGVkIiwibWF0Y2hlciIsInVubWF0Y2hlZCIsImlubmVyVGV4dCIsImxhbmciLCJlbGVtTGFuZyIsImhhc2giLCJsb2NhdGlvbiIsImFjdGl2ZUVsZW1lbnQiLCJoYXNGb2N1cyIsImhyZWYiLCJ0YWJJbmRleCIsImRpc2FibGVkIiwiY2hlY2tlZCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJbmRleCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsInN1Ym1pdCIsInJlc2V0IiwiZmlsdGVycyIsInBhcnNlT25seSIsInRva2VucyIsInNvRmFyIiwicHJlRmlsdGVycyIsImNhY2hlZCIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiYmFzZSIsImNoZWNrTm9uRWxlbWVudHMiLCJkb25lTmFtZSIsIm9sZENhY2hlIiwibmV3Q2FjaGUiLCJlbGVtZW50TWF0Y2hlciIsIm1hdGNoZXJzIiwibXVsdGlwbGVDb250ZXh0cyIsImNvbnRleHRzIiwiY29uZGVuc2UiLCJuZXdVbm1hdGNoZWQiLCJtYXBwZWQiLCJzZXRNYXRjaGVyIiwicG9zdEZpbHRlciIsInBvc3RGaW5kZXIiLCJwb3N0U2VsZWN0b3IiLCJ0ZW1wIiwicHJlTWFwIiwicG9zdE1hcCIsInByZWV4aXN0aW5nIiwibWF0Y2hlckluIiwibWF0Y2hlck91dCIsIm1hdGNoZXJGcm9tVG9rZW5zIiwiY2hlY2tDb250ZXh0IiwibGVhZGluZ1JlbGF0aXZlIiwiaW1wbGljaXRSZWxhdGl2ZSIsIm1hdGNoQ29udGV4dCIsIm1hdGNoQW55Q29udGV4dCIsIm1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyIsImVsZW1lbnRNYXRjaGVycyIsInNldE1hdGNoZXJzIiwiYnlTZXQiLCJieUVsZW1lbnQiLCJzdXBlck1hdGNoZXIiLCJvdXRlcm1vc3QiLCJtYXRjaGVkQ291bnQiLCJzZXRNYXRjaGVkIiwiY29udGV4dEJhY2t1cCIsImRpcnJ1bnNVbmlxdWUiLCJ0b2tlbiIsImNvbXBpbGVkIiwiZGl2MSIsImRlZmF1bHRWYWx1ZSIsInVuaXF1ZSIsImlzWE1MRG9jIiwicm5lZWRzQ29udGV4dCIsIm5lZWRzQ29udGV4dCIsInJzaW5nbGVUYWciLCJyaXNTaW1wbGUiLCJ3aW5ub3ciLCJxdWFsaWZpZXIiLCJub3QiLCJzZWxmIiwiaXMiLCJyb290alF1ZXJ5IiwicGFyc2VIVE1MIiwicmVhZHkiLCJycGFyZW50c3ByZXYiLCJndWFyYW50ZWVkVW5pcXVlIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsIm5leHQiLCJwcmV2IiwidW50aWwiLCJ0cnVuY2F0ZSIsInNpYmxpbmciLCJuIiwiaGFzIiwidGFyZ2V0cyIsImwiLCJjbG9zZXN0IiwicG9zIiwiaW5kZXgiLCJwcmV2QWxsIiwiYWRkIiwiYWRkQmFjayIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJuZXh0QWxsIiwibmV4dFVudGlsIiwicHJldlVudGlsIiwic2libGluZ3MiLCJjb250ZW50RG9jdW1lbnQiLCJyZXZlcnNlIiwicm5vdHdoaXRlIiwib3B0aW9uc0NhY2hlIiwiY3JlYXRlT3B0aW9ucyIsIm9iamVjdCIsImZsYWciLCJDYWxsYmFja3MiLCJtZW1vcnkiLCJmaXJlZCIsImZpcmluZyIsImZpcmluZ1N0YXJ0IiwiZmlyaW5nTGVuZ3RoIiwiZmlyaW5nSW5kZXgiLCJzdGFjayIsIm9uY2UiLCJmaXJlIiwiZGF0YSIsInN0b3BPbkZhbHNlIiwiZGlzYWJsZSIsInJlbW92ZSIsImVtcHR5IiwibG9jayIsImxvY2tlZCIsImZpcmVXaXRoIiwiRGVmZXJyZWQiLCJmdW5jIiwidHVwbGVzIiwic3RhdGUiLCJwcm9taXNlIiwiYWx3YXlzIiwiZGVmZXJyZWQiLCJmYWlsIiwidGhlbiIsImZucyIsIm5ld0RlZmVyIiwidHVwbGUiLCJyZXR1cm5lZCIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9ncmVzcyIsIm5vdGlmeSIsInBpcGUiLCJzdGF0ZVN0cmluZyIsIndoZW4iLCJzdWJvcmRpbmF0ZSIsInJlc29sdmVWYWx1ZXMiLCJyZW1haW5pbmciLCJ1cGRhdGVGdW5jIiwidmFsdWVzIiwicHJvZ3Jlc3NWYWx1ZXMiLCJub3RpZnlXaXRoIiwicmVzb2x2ZVdpdGgiLCJwcm9ncmVzc0NvbnRleHRzIiwicmVzb2x2ZUNvbnRleHRzIiwicmVhZHlMaXN0IiwicmVhZHlXYWl0IiwiaG9sZFJlYWR5IiwiaG9sZCIsIndhaXQiLCJ0cmlnZ2VySGFuZGxlciIsIm9mZiIsImNvbXBsZXRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwic2V0VGltZW91dCIsImFjY2VzcyIsImNoYWluYWJsZSIsImVtcHR5R2V0IiwicmF3IiwiYnVsayIsImFjY2VwdERhdGEiLCJvd25lciIsIkRhdGEiLCJkZWZpbmVQcm9wZXJ0eSIsInVpZCIsImFjY2VwdHMiLCJkZXNjcmlwdG9yIiwidW5sb2NrIiwiZGVmaW5lUHJvcGVydGllcyIsInNldCIsInByb3AiLCJzdG9yZWQiLCJjYW1lbCIsImhhc0RhdGEiLCJkaXNjYXJkIiwiZGF0YV9wcml2IiwiZGF0YV91c2VyIiwicmJyYWNlIiwicm11bHRpRGFzaCIsImRhdGFBdHRyIiwicGFyc2VKU09OIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJjYW1lbEtleSIsInF1ZXVlIiwiZGVxdWV1ZSIsInN0YXJ0TGVuZ3RoIiwiaG9va3MiLCJfcXVldWVIb29rcyIsInN0b3AiLCJzZXR0ZXIiLCJjbGVhclF1ZXVlIiwiY291bnQiLCJkZWZlciIsInBudW0iLCJzb3VyY2UiLCJjc3NFeHBhbmQiLCJpc0hpZGRlbiIsImVsIiwiY3NzIiwicmNoZWNrYWJsZVR5cGUiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjaGVja0Nsb25lIiwiY2xvbmVOb2RlIiwibm9DbG9uZUNoZWNrZWQiLCJzdHJ1bmRlZmluZWQiLCJmb2N1c2luQnViYmxlcyIsInJrZXlFdmVudCIsInJtb3VzZUV2ZW50IiwicmZvY3VzTW9ycGgiLCJydHlwZW5hbWVzcGFjZSIsInJldHVyblRydWUiLCJyZXR1cm5GYWxzZSIsInNhZmVBY3RpdmVFbGVtZW50IiwiZXJyIiwiZXZlbnQiLCJ0eXBlcyIsImhhbmRsZU9iakluIiwiZXZlbnRIYW5kbGUiLCJldmVudHMiLCJ0IiwiaGFuZGxlT2JqIiwic3BlY2lhbCIsImhhbmRsZXJzIiwibmFtZXNwYWNlcyIsIm9yaWdUeXBlIiwiZWxlbURhdGEiLCJoYW5kbGUiLCJ0cmlnZ2VyZWQiLCJkaXNwYXRjaCIsImRlbGVnYXRlVHlwZSIsImJpbmRUeXBlIiwibmFtZXNwYWNlIiwiZGVsZWdhdGVDb3VudCIsInNldHVwIiwibWFwcGVkVHlwZXMiLCJvcmlnQ291bnQiLCJ0ZWFyZG93biIsInJlbW92ZUV2ZW50IiwidHJpZ2dlciIsIm9ubHlIYW5kbGVycyIsImJ1YmJsZVR5cGUiLCJvbnR5cGUiLCJldmVudFBhdGgiLCJFdmVudCIsImlzVHJpZ2dlciIsIm5hbWVzcGFjZV9yZSIsIm5vQnViYmxlIiwicGFyZW50V2luZG93IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJwcmV2ZW50RGVmYXVsdCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIl9kZWZhdWx0IiwiZml4IiwiaGFuZGxlclF1ZXVlIiwiZGVsZWdhdGVUYXJnZXQiLCJwcmVEaXNwYXRjaCIsImN1cnJlbnRUYXJnZXQiLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsInN0b3BQcm9wYWdhdGlvbiIsInBvc3REaXNwYXRjaCIsInNlbCIsImJ1dHRvbiIsInByb3BzIiwiZml4SG9va3MiLCJrZXlIb29rcyIsIm9yaWdpbmFsIiwid2hpY2giLCJjaGFyQ29kZSIsImtleUNvZGUiLCJtb3VzZUhvb2tzIiwiZXZlbnREb2MiLCJib2R5IiwicGFnZVgiLCJjbGllbnRYIiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJwYWdlWSIsImNsaWVudFkiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJvcmlnaW5hbEV2ZW50IiwiZml4SG9vayIsImxvYWQiLCJmb2N1cyIsImJsdXIiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwic2ltdWxhdGUiLCJidWJibGUiLCJpc1NpbXVsYXRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJ0aW1lU3RhbXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsIm9yaWciLCJyZWxhdGVkIiwicmVsYXRlZFRhcmdldCIsImF0dGFjaGVzIiwib24iLCJvbmUiLCJvcmlnRm4iLCJyeGh0bWxUYWciLCJydGFnTmFtZSIsInJodG1sIiwicm5vSW5uZXJodG1sIiwicmNoZWNrZWQiLCJyc2NyaXB0VHlwZSIsInJzY3JpcHRUeXBlTWFza2VkIiwicmNsZWFuU2NyaXB0Iiwid3JhcE1hcCIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIm9wdGdyb3VwIiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwibWFuaXB1bGF0aW9uVGFyZ2V0IiwiY29udGVudCIsImRpc2FibGVTY3JpcHQiLCJyZXN0b3JlU2NyaXB0Iiwic2V0R2xvYmFsRXZhbCIsInJlZkVsZW1lbnRzIiwiY2xvbmVDb3B5RXZlbnQiLCJkZXN0IiwicGRhdGFPbGQiLCJwZGF0YUN1ciIsInVkYXRhT2xkIiwidWRhdGFDdXIiLCJnZXRBbGwiLCJmaXhJbnB1dCIsImRhdGFBbmRFdmVudHMiLCJkZWVwRGF0YUFuZEV2ZW50cyIsInNyY0VsZW1lbnRzIiwiZGVzdEVsZW1lbnRzIiwiaW5QYWdlIiwiYnVpbGRGcmFnbWVudCIsInNjcmlwdHMiLCJzZWxlY3Rpb24iLCJ3cmFwIiwibm9kZXMiLCJjcmVhdGVUZXh0Tm9kZSIsImNsZWFuRGF0YSIsImFwcGVuZCIsImRvbU1hbmlwIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwia2VlcERhdGEiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJkZXRhY2giLCJoYXNTY3JpcHRzIiwiaU5vQ2xvbmUiLCJfZXZhbFVybCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwiaW5zZXJ0IiwiaWZyYW1lIiwiZWxlbWRpc3BsYXkiLCJhY3R1YWxEaXNwbGF5Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUiLCJkZWZhdWx0RGlzcGxheSIsIndyaXRlIiwiY2xvc2UiLCJybWFyZ2luIiwicm51bW5vbnB4IiwiZ2V0U3R5bGVzIiwib3BlbmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImN1ckNTUyIsImNvbXB1dGVkIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImFkZEdldEhvb2tJZiIsImNvbmRpdGlvbkZuIiwiaG9va0ZuIiwicGl4ZWxQb3NpdGlvblZhbCIsImJveFNpemluZ1JlbGlhYmxlVmFsIiwiY29udGFpbmVyIiwiYmFja2dyb3VuZENsaXAiLCJjbGVhckNsb25lU3R5bGUiLCJjc3NUZXh0IiwiY29tcHV0ZVBpeGVsUG9zaXRpb25BbmRCb3hTaXppbmdSZWxpYWJsZSIsImRpdlN0eWxlIiwicGl4ZWxQb3NpdGlvbiIsImJveFNpemluZ1JlbGlhYmxlIiwicmVsaWFibGVNYXJnaW5SaWdodCIsIm1hcmdpbkRpdiIsIm1hcmdpblJpZ2h0Iiwic3dhcCIsInJkaXNwbGF5c3dhcCIsInJudW1zcGxpdCIsInJyZWxOdW0iLCJjc3NTaG93IiwicG9zaXRpb24iLCJ2aXNpYmlsaXR5IiwiY3NzTm9ybWFsVHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJjc3NQcmVmaXhlcyIsInZlbmRvclByb3BOYW1lIiwiY2FwTmFtZSIsIm9yaWdOYW1lIiwic2V0UG9zaXRpdmVOdW1iZXIiLCJzdWJ0cmFjdCIsIm1heCIsImF1Z21lbnRXaWR0aE9ySGVpZ2h0IiwiZXh0cmEiLCJpc0JvcmRlckJveCIsInN0eWxlcyIsImdldFdpZHRoT3JIZWlnaHQiLCJ2YWx1ZUlzQm9yZGVyQm94Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJzaG93SGlkZSIsInNob3ciLCJoaWRkZW4iLCJjc3NIb29rcyIsIm9wYWNpdHkiLCJjc3NOdW1iZXIiLCJjc3NQcm9wcyIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJwcmVmaXgiLCJzdWZmaXgiLCJleHBhbmQiLCJleHBhbmRlZCIsInBhcnRzIiwiaGlkZSIsInRvZ2dsZSIsIlR3ZWVuIiwiZWFzaW5nIiwidW5pdCIsInByb3BIb29rcyIsInJ1biIsInBlcmNlbnQiLCJlYXNlZCIsImR1cmF0aW9uIiwic3RlcCIsInR3ZWVuIiwiZngiLCJsaW5lYXIiLCJwIiwic3dpbmciLCJjb3MiLCJQSSIsImZ4Tm93IiwidGltZXJJZCIsInJmeHR5cGVzIiwicmZ4bnVtIiwicnJ1biIsImFuaW1hdGlvblByZWZpbHRlcnMiLCJkZWZhdWx0UHJlZmlsdGVyIiwidHdlZW5lcnMiLCJjcmVhdGVUd2VlbiIsInNjYWxlIiwibWF4SXRlcmF0aW9ucyIsImNyZWF0ZUZ4Tm93IiwiZ2VuRngiLCJpbmNsdWRlV2lkdGgiLCJoZWlnaHQiLCJhbmltYXRpb24iLCJjb2xsZWN0aW9uIiwib3B0cyIsIm9sZGZpcmUiLCJjaGVja0Rpc3BsYXkiLCJhbmltIiwiZGF0YVNob3ciLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJvcEZpbHRlciIsInNwZWNpYWxFYXNpbmciLCJBbmltYXRpb24iLCJwcm9wZXJ0aWVzIiwic3RvcHBlZCIsInRpY2siLCJjdXJyZW50VGltZSIsInN0YXJ0VGltZSIsInR3ZWVucyIsIm9yaWdpbmFsUHJvcGVydGllcyIsIm9yaWdpbmFsT3B0aW9ucyIsImdvdG9FbmQiLCJyZWplY3RXaXRoIiwidGltZXIiLCJjb21wbGV0ZSIsInR3ZWVuZXIiLCJwcmVmaWx0ZXIiLCJzcGVlZCIsIm9wdCIsInNwZWVkcyIsImZhZGVUbyIsInRvIiwiYW5pbWF0ZSIsIm9wdGFsbCIsImRvQW5pbWF0aW9uIiwiZmluaXNoIiwic3RvcFF1ZXVlIiwidGltZXJzIiwiY3NzRm4iLCJzbGlkZURvd24iLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJmYWRlSW4iLCJmYWRlT3V0IiwiZmFkZVRvZ2dsZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2xvdyIsImZhc3QiLCJkZWxheSIsInRpbWUiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwib3B0RGlzYWJsZWQiLCJyYWRpb1ZhbHVlIiwibm9kZUhvb2siLCJib29sSG9vayIsInJlbW92ZUF0dHIiLCJuVHlwZSIsImF0dHJIb29rcyIsImJvb2wiLCJwcm9wTmFtZSIsImF0dHJOYW1lcyIsInByb3BGaXgiLCJnZXR0ZXIiLCJyZm9jdXNhYmxlIiwicmVtb3ZlUHJvcCIsIm5vdHhtbCIsImhhc0F0dHJpYnV0ZSIsInJjbGFzcyIsImFkZENsYXNzIiwiY2xhc3NlcyIsImNsYXp6IiwiZmluYWxWYWx1ZSIsInByb2NlZWQiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwic3RhdGVWYWwiLCJjbGFzc05hbWVzIiwiaGFzQ2xhc3MiLCJycmV0dXJuIiwidmFsSG9va3MiLCJvcHRpb25TZXQiLCJob3ZlciIsImZuT3ZlciIsImZuT3V0IiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsIm5vbmNlIiwicnF1ZXJ5IiwiSlNPTiIsInBhcnNlIiwicGFyc2VYTUwiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJyaGFzaCIsInJ0cyIsInJoZWFkZXJzIiwicmxvY2FsUHJvdG9jb2wiLCJybm9Db250ZW50IiwicnByb3RvY29sIiwicnVybCIsInByZWZpbHRlcnMiLCJ0cmFuc3BvcnRzIiwiYWxsVHlwZXMiLCJhamF4TG9jYXRpb24iLCJhamF4TG9jUGFydHMiLCJhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMiLCJzdHJ1Y3R1cmUiLCJkYXRhVHlwZUV4cHJlc3Npb24iLCJkYXRhVHlwZSIsImRhdGFUeXBlcyIsImluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzIiwianFYSFIiLCJpbnNwZWN0ZWQiLCJzZWVraW5nVHJhbnNwb3J0IiwiaW5zcGVjdCIsInByZWZpbHRlck9yRmFjdG9yeSIsImRhdGFUeXBlT3JUcmFuc3BvcnQiLCJhamF4RXh0ZW5kIiwiZmxhdE9wdGlvbnMiLCJhamF4U2V0dGluZ3MiLCJhamF4SGFuZGxlUmVzcG9uc2VzIiwicyIsInJlc3BvbnNlcyIsImN0IiwiZmluYWxEYXRhVHlwZSIsImZpcnN0RGF0YVR5cGUiLCJtaW1lVHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiY29udmVydGVycyIsImFqYXhDb252ZXJ0IiwicmVzcG9uc2UiLCJpc1N1Y2Nlc3MiLCJjb252MiIsImN1cnJlbnQiLCJjb252IiwicmVzcG9uc2VGaWVsZHMiLCJkYXRhRmlsdGVyIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJqc29uIiwiYWpheFNldHVwIiwic2V0dGluZ3MiLCJhamF4UHJlZmlsdGVyIiwiYWpheFRyYW5zcG9ydCIsImFqYXgiLCJ0cmFuc3BvcnQiLCJjYWNoZVVSTCIsInJlc3BvbnNlSGVhZGVyc1N0cmluZyIsInJlc3BvbnNlSGVhZGVycyIsInRpbWVvdXRUaW1lciIsImZpcmVHbG9iYWxzIiwiY2FsbGJhY2tDb250ZXh0IiwiZ2xvYmFsRXZlbnRDb250ZXh0IiwiY29tcGxldGVEZWZlcnJlZCIsInN0YXR1c0NvZGUiLCJyZXF1ZXN0SGVhZGVycyIsInJlcXVlc3RIZWFkZXJzTmFtZXMiLCJzdHJBYm9ydCIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJsbmFtZSIsIm92ZXJyaWRlTWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsInN0YXR1c1RleHQiLCJmaW5hbFRleHQiLCJzdWNjZXNzIiwibWV0aG9kIiwiY3Jvc3NEb21haW4iLCJwYXJhbSIsInRyYWRpdGlvbmFsIiwiaGFzQ29udGVudCIsImlmTW9kaWZpZWQiLCJoZWFkZXJzIiwiYmVmb3JlU2VuZCIsInNlbmQiLCJuYXRpdmVTdGF0dXNUZXh0IiwibW9kaWZpZWQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwidW53cmFwIiwidmlzaWJsZSIsInIyMCIsInJicmFja2V0IiwickNSTEYiLCJyc3VibWl0dGVyVHlwZXMiLCJyc3VibWl0dGFibGUiLCJidWlsZFBhcmFtcyIsInYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemUiLCJzZXJpYWxpemVBcnJheSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwieGhySWQiLCJ4aHJDYWxsYmFja3MiLCJ4aHJTdWNjZXNzU3RhdHVzIiwieGhyU3VwcG9ydGVkIiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInhockZpZWxkcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJyZXNwb25zZVRleHQiLCJjaGFyc2V0Iiwic2NyaXB0Q2hhcnNldCIsImV2dCIsIm9sZENhbGxiYWNrcyIsInJqc29ucCIsImpzb25wIiwianNvbnBDYWxsYmFjayIsIm9yaWdpbmFsU2V0dGluZ3MiLCJjYWxsYmFja05hbWUiLCJvdmVyd3JpdHRlbiIsInJlc3BvbnNlQ29udGFpbmVyIiwianNvblByb3AiLCJrZWVwU2NyaXB0cyIsInBhcnNlZCIsIl9sb2FkIiwicGFyYW1zIiwiYW5pbWF0ZWQiLCJnZXRXaW5kb3ciLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJjdXJQb3NpdGlvbiIsImN1ckxlZnQiLCJjdXJDU1NUb3AiLCJjdXJUb3AiLCJjdXJPZmZzZXQiLCJjdXJDU1NMZWZ0IiwiY2FsY3VsYXRlUG9zaXRpb24iLCJjdXJFbGVtIiwibGVmdCIsInVzaW5nIiwid2luIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInBhcmVudE9mZnNldCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJkZWZhdWx0RXh0cmEiLCJmdW5jTmFtZSIsInNpemUiLCJhbmRTZWxmIiwiZGVmaW5lIiwiX2pRdWVyeSIsIl8kIiwiJCIsIm5vQ29uZmxpY3QiLCJjcmVhdGVDdXN0b21FdmVudCIsImV2ZW50TmFtZSIsIkN1c3RvbUV2ZW50IiwiZGV0YWlsIiwibW9kaWZ5UmVzcG9uc2UiLCJvcmlnaW5hbF9yZXNwb25zZSIsIm1vZGlmaWVkX3Jlc3BvbnNlIiwicmVxdWVzdERhdGEiLCJyZXF1ZXN0TWV0aG9kIiwicmVxdWVzdFVSTCIsInJlc3BvbnNlVHlwZSIsInJlc3BvbnNlVVJMIiwicmVzcG9uc2VYTUwiLCJ3aXRoQ3JlZGVudGlhbHMiLCJzdHJpbmdpZnkiLCJkaXNwYXRjaEV2ZW50Iiwib3JpZ2luYWxfZnVuY3Rpb24iLCJkYXRhTWlkZGxlRG9tSWQiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFFO0FBQ3ZELHlDQUFpQyxlQUFlO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDhEQUFzRCwrREFBK0Q7O0FBRXJIO0FBQ0E7O0FBRUE7QUFDQTs7Ozs7Ozs7QUM3REE7Ozs7Ozs7Ozs7Ozs7O0FBY0MsV0FBVUEsTUFBVixFQUFrQkMsT0FBbEIsRUFBNEI7O0FBRTVCLEtBQUssT0FBT0MsTUFBUCxLQUFrQixRQUFsQixJQUE4QixPQUFPQSxPQUFPQyxPQUFkLEtBQTBCLFFBQTdELEVBQXdFO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FELFNBQU9DLE9BQVAsR0FBaUJILE9BQU9JLFFBQVAsR0FDaEJILFFBQVNELE1B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cEksR0FBbEI7O0FBRUEsU0FBSy9zQixnQkFBTCxDQUF1QixrQkFBdkIsRUFBMkM4MEIsY0FBM0M7QUFDQSxXQUFPWSxrQkFBa0J2aEMsS0FBbEIsQ0FBeUIsSUFBekIsRUFBK0JDLFNBQS9CLENBQVA7QUFDRCxHQVBEO0FBUUQsQ0FUaUMsQ0FTL0J5OEIsZUFBZTc5QixTQUFmLENBQXlCbStCLElBVE0sQ0FBbEM7O0FBV0FOLGVBQWU3OUIsU0FBZixDQUF5Qnc4QixJQUF6QixHQUFrQyxVQUFVa0csaUJBQVYsRUFBOEI7QUFDOUQsU0FBTyxVQUFVdnBCLElBQVYsRUFBaUI7QUFDdEI7QUFDQSxTQUFLOG9CLFdBQUwsR0FBbUI5b0IsSUFBbkI7QUFDQSxXQUFPdXBCLGtCQUFrQnZoQyxLQUFsQixDQUF5QixJQUF6QixFQUErQkMsU0FBL0IsQ0FBUDtBQUNELEdBSkQ7QUFLRCxDQU5pQyxDQU0vQnk4QixlQUFlNzlCLFNBQWYsQ0FBeUJ3OEIsSUFOTSxDQUFsQyxDOzs7Ozs7Ozs7QUM1RE8sTUFBTW1HLGtCQUFrQixvQkFBeEIsQyIsImZpbGUiOiJ4aHIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA0MSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZGFhZDNkNjg0NzJiYTAzMGZlZjQiLCIvKiFcbiAqIGpRdWVyeSBKYXZhU2NyaXB0IExpYnJhcnkgdjIuMS40XG4gKiBodHRwOi8vanF1ZXJ5LmNvbS9cbiAqXG4gKiBJbmNsdWRlcyBTaXp6bGUuanNcbiAqIGh0dHA6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IDIwMDUsIDIwMTQgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogRGF0ZTogMjAxNS0wNC0yOFQxNjowMVpcbiAqL1xuXG4oZnVuY3Rpb24oIGdsb2JhbCwgZmFjdG9yeSApIHtcblxuXHRpZiAoIHR5cGVvZiBtb2R1bGUgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIG1vZHVsZS5leHBvcnRzID09PSBcIm9iamVjdFwiICkge1xuXHRcdC8vIEZvciBDb21tb25KUyBhbmQgQ29tbW9uSlMtbGlrZSBlbnZpcm9ubWVudHMgd2hlcmUgYSBwcm9wZXIgYHdpbmRvd2Bcblx0XHQvLyBpcyBwcmVzZW50LCBleGVjdXRlIHRoZSBmYWN0b3J5IGFuZCBnZXQgalF1ZXJ5LlxuXHRcdC8vIEZvciBlbnZpcm9ubWVudHMgdGhhdCBkbyBub3QgaGF2ZSBhIGB3aW5kb3dgIHdpdGggYSBgZG9jdW1lbnRgXG5cdFx0Ly8gKHN1Y2ggYXMgTm9kZS5qcyksIGV4cG9zZSBhIGZhY3RvcnkgYXMgbW9kdWxlLmV4cG9ydHMuXG5cdFx0Ly8gVGhpcyBhY2NlbnR1YXRlcyB0aGUgbmVlZCBmb3IgdGhlIGNyZWF0aW9uIG9mIGEgcmVhbCBgd2luZG93YC5cblx0XHQvLyBlLmcuIHZhciBqUXVlcnkgPSByZXF1aXJlKFwianF1ZXJ5XCIpKHdpbmRvdyk7XG5cdFx0Ly8gU2VlIHRpY2tldCAjMTQ1NDkgZm9yIG1vcmUgaW5mby5cblx0XHRtb2R1bGUuZXhwb3J0cyA9IGdsb2JhbC5kb2N1bWVudCA/XG5cdFx0XHRmYWN0b3J5KCBnbG9iYWwsIHRydWUgKSA6XG5cdFx0XHRmdW5jdGlvbiggdyApIHtcblx0XHRcdFx0aWYgKCAhdy5kb2N1bWVudCApIHtcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoIFwialF1ZXJ5IHJlcXVpcmVzIGEgd2luZG93IHdpdGggYSBkb2N1bWVudFwiICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIGZhY3RvcnkoIHcgKTtcblx0XHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0ZmFjdG9yeSggZ2xvYmFsICk7XG5cdH1cblxuLy8gUGFzcyB0aGlzIGlmIHdpbmRvdyBpcyBub3QgZGVmaW5lZCB5ZXRcbn0odHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IHdpbmRvdyA6IHRoaXMsIGZ1bmN0aW9uKCB3aW5kb3csIG5vR2xvYmFsICkge1xuXG4vLyBTdXBwb3J0OiBGaXJlZm94IDE4K1xuLy8gQ2FuJ3QgYmUgaW4gc3RyaWN0IG1vZGUsIHNldmVyYWwgbGlicyBpbmNsdWRpbmcgQVNQLk5FVCB0cmFjZVxuLy8gdGhlIHN0YWNrIHZpYSBhcmd1bWVudHMuY2FsbGVyLmNhbGxlZSBhbmQgRmlyZWZveCBkaWVzIGlmXG4vLyB5b3UgdHJ5IHRvIHRyYWNlIHRocm91Z2ggXCJ1c2Ugc3RyaWN0XCIgY2FsbCBjaGFpbnMuICgjMTMzMzUpXG4vL1xuXG52YXIgYXJyID0gW107XG5cbnZhciBzbGljZSA9IGFyci5zbGljZTtcblxudmFyIGNvbmNhdCA9IGFyci5jb25jYXQ7XG5cbnZhciBwdXNoID0gYXJyLnB1c2g7XG5cbnZhciBpbmRleE9mID0gYXJyLmluZGV4T2Y7XG5cbnZhciBjbGFzczJ0eXBlID0ge307XG5cbnZhciB0b1N0cmluZyA9IGNsYXNzMnR5cGUudG9TdHJpbmc7XG5cbnZhciBoYXNPd24gPSBjbGFzczJ0eXBlLmhhc093blByb3BlcnR5O1xuXG52YXIgc3VwcG9ydCA9IHt9O1xuXG5cblxudmFyXG5cdC8vIFVzZSB0aGUgY29ycmVjdCBkb2N1bWVudCBhY2NvcmRpbmdseSB3aXRoIHdpbmRvdyBhcmd1bWVudCAoc2FuZGJveClcblx0ZG9jdW1lbnQgPSB3aW5kb3cuZG9jdW1lbnQsXG5cblx0dmVyc2lvbiA9IFwiMi4xLjRcIixcblxuXHQvLyBEZWZpbmUgYSBsb2NhbCBjb3B5IG9mIGpRdWVyeVxuXHRqUXVlcnkgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cdFx0Ly8gVGhlIGpRdWVyeSBvYmplY3QgaXMgYWN0dWFsbHkganVzdCB0aGUgaW5pdCBjb25zdHJ1Y3RvciAnZW5oYW5jZWQnXG5cdFx0Ly8gTmVlZCBpbml0IGlmIGpRdWVyeSBpcyBjYWxsZWQgKGp1c3QgYWxsb3cgZXJyb3IgdG8gYmUgdGhyb3duIGlmIG5vdCBpbmNsdWRlZClcblx0XHRyZXR1cm4gbmV3IGpRdWVyeS5mbi5pbml0KCBzZWxlY3RvciwgY29udGV4dCApO1xuXHR9LFxuXG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NC4xXG5cdC8vIE1ha2Ugc3VyZSB3ZSB0cmltIEJPTSBhbmQgTkJTUFxuXHRydHJpbSA9IC9eW1xcc1xcdUZFRkZcXHhBMF0rfFtcXHNcXHVGRUZGXFx4QTBdKyQvZyxcblxuXHQvLyBNYXRjaGVzIGRhc2hlZCBzdHJpbmcgZm9yIGNhbWVsaXppbmdcblx0cm1zUHJlZml4ID0gL14tbXMtLyxcblx0cmRhc2hBbHBoYSA9IC8tKFtcXGRhLXpdKS9naSxcblxuXHQvLyBVc2VkIGJ5IGpRdWVyeS5jYW1lbENhc2UgYXMgY2FsbGJhY2sgdG8gcmVwbGFjZSgpXG5cdGZjYW1lbENhc2UgPSBmdW5jdGlvbiggYWxsLCBsZXR0ZXIgKSB7XG5cdFx0cmV0dXJuIGxldHRlci50b1VwcGVyQ2FzZSgpO1xuXHR9O1xuXG5qUXVlcnkuZm4gPSBqUXVlcnkucHJvdG90eXBlID0ge1xuXHQvLyBUaGUgY3VycmVudCB2ZXJzaW9uIG9mIGpRdWVyeSBiZWluZyB1c2VkXG5cdGpxdWVyeTogdmVyc2lvbixcblxuXHRjb25zdHJ1Y3RvcjogalF1ZXJ5LFxuXG5cdC8vIFN0YXJ0IHdpdGggYW4gZW1wdHkgc2VsZWN0b3Jcblx0c2VsZWN0b3I6IFwiXCIsXG5cblx0Ly8gVGhlIGRlZmF1bHQgbGVuZ3RoIG9mIGEgalF1ZXJ5IG9iamVjdCBpcyAwXG5cdGxlbmd0aDogMCxcblxuXHR0b0FycmF5OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gc2xpY2UuY2FsbCggdGhpcyApO1xuXHR9LFxuXG5cdC8vIEdldCB0aGUgTnRoIGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgZWxlbWVudCBzZXQgT1Jcblx0Ly8gR2V0IHRoZSB3aG9sZSBtYXRjaGVkIGVsZW1lbnQgc2V0IGFzIGEgY2xlYW4gYXJyYXlcblx0Z2V0OiBmdW5jdGlvbiggbnVtICkge1xuXHRcdHJldHVybiBudW0gIT0gbnVsbCA/XG5cblx0XHRcdC8vIFJldHVybiBqdXN0IHRoZSBvbmUgZWxlbWVudCBmcm9tIHRoZSBzZXRcblx0XHRcdCggbnVtIDwgMCA/IHRoaXNbIG51bSArIHRoaXMubGVuZ3RoIF0gOiB0aGlzWyBudW0gXSApIDpcblxuXHRcdFx0Ly8gUmV0dXJuIGFsbCB0aGUgZWxlbWVudHMgaW4gYSBjbGVhbiBhcnJheVxuXHRcdFx0c2xpY2UuY2FsbCggdGhpcyApO1xuXHR9LFxuXG5cdC8vIFRha2UgYW4gYXJyYXkgb2YgZWxlbWVudHMgYW5kIHB1c2ggaXQgb250byB0aGUgc3RhY2tcblx0Ly8gKHJldHVybmluZyB0aGUgbmV3IG1hdGNoZWQgZWxlbWVudCBzZXQpXG5cdHB1c2hTdGFjazogZnVuY3Rpb24oIGVsZW1zICkge1xuXG5cdFx0Ly8gQnVpbGQgYSBuZXcgalF1ZXJ5IG1hdGNoZWQgZWxlbWVudCBzZXRcblx0XHR2YXIgcmV0ID0galF1ZXJ5Lm1lcmdlKCB0aGlzLmNvbnN0cnVjdG9yKCksIGVsZW1zICk7XG5cblx0XHQvLyBBZGQgdGhlIG9sZCBvYmplY3Qgb250byB0aGUgc3RhY2sgKGFzIGEgcmVmZXJlbmNlKVxuXHRcdHJldC5wcmV2T2JqZWN0ID0gdGhpcztcblx0XHRyZXQuY29udGV4dCA9IHRoaXMuY29udGV4dDtcblxuXHRcdC8vIFJldHVybiB0aGUgbmV3bHktZm9ybWVkIGVsZW1lbnQgc2V0XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblxuXHQvLyBFeGVjdXRlIGEgY2FsbGJhY2sgZm9yIGV2ZXJ5IGVsZW1lbnQgaW4gdGhlIG1hdGNoZWQgc2V0LlxuXHQvLyAoWW91IGNhbiBzZWVkIHRoZSBhcmd1bWVudHMgd2l0aCBhbiBhcnJheSBvZiBhcmdzLCBidXQgdGhpcyBpc1xuXHQvLyBvbmx5IHVzZWQgaW50ZXJuYWxseS4pXG5cdGVhY2g6IGZ1bmN0aW9uKCBjYWxsYmFjaywgYXJncyApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmVhY2goIHRoaXMsIGNhbGxiYWNrLCBhcmdzICk7XG5cdH0sXG5cblx0bWFwOiBmdW5jdGlvbiggY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqUXVlcnkubWFwKHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBpICkge1xuXHRcdFx0cmV0dXJuIGNhbGxiYWNrLmNhbGwoIGVsZW0sIGksIGVsZW0gKTtcblx0XHR9KSk7XG5cdH0sXG5cblx0c2xpY2U6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggc2xpY2UuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApICk7XG5cdH0sXG5cblx0Zmlyc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAwICk7XG5cdH0sXG5cblx0bGFzdDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZXEoIC0xICk7XG5cdH0sXG5cblx0ZXE6IGZ1bmN0aW9uKCBpICkge1xuXHRcdHZhciBsZW4gPSB0aGlzLmxlbmd0aCxcblx0XHRcdGogPSAraSArICggaSA8IDAgPyBsZW4gOiAwICk7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBqID49IDAgJiYgaiA8IGxlbiA/IFsgdGhpc1tqXSBdIDogW10gKTtcblx0fSxcblxuXHRlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnByZXZPYmplY3QgfHwgdGhpcy5jb25zdHJ1Y3RvcihudWxsKTtcblx0fSxcblxuXHQvLyBGb3IgaW50ZXJuYWwgdXNlIG9ubHkuXG5cdC8vIEJlaGF2ZXMgbGlrZSBhbiBBcnJheSdzIG1ldGhvZCwgbm90IGxpa2UgYSBqUXVlcnkgbWV0aG9kLlxuXHRwdXNoOiBwdXNoLFxuXHRzb3J0OiBhcnIuc29ydCxcblx0c3BsaWNlOiBhcnIuc3BsaWNlXG59O1xuXG5qUXVlcnkuZXh0ZW5kID0galF1ZXJ5LmZuLmV4dGVuZCA9IGZ1bmN0aW9uKCkge1xuXHR2YXIgb3B0aW9ucywgbmFtZSwgc3JjLCBjb3B5LCBjb3B5SXNBcnJheSwgY2xvbmUsXG5cdFx0dGFyZ2V0ID0gYXJndW1lbnRzWzBdIHx8IHt9LFxuXHRcdGkgPSAxLFxuXHRcdGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGgsXG5cdFx0ZGVlcCA9IGZhbHNlO1xuXG5cdC8vIEhhbmRsZSBhIGRlZXAgY29weSBzaXR1YXRpb25cblx0aWYgKCB0eXBlb2YgdGFyZ2V0ID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRkZWVwID0gdGFyZ2V0O1xuXG5cdFx0Ly8gU2tpcCB0aGUgYm9vbGVhbiBhbmQgdGhlIHRhcmdldFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1sgaSBdIHx8IHt9O1xuXHRcdGkrKztcblx0fVxuXG5cdC8vIEhhbmRsZSBjYXNlIHdoZW4gdGFyZ2V0IGlzIGEgc3RyaW5nIG9yIHNvbWV0aGluZyAocG9zc2libGUgaW4gZGVlcCBjb3B5KVxuXHRpZiAoIHR5cGVvZiB0YXJnZXQgIT09IFwib2JqZWN0XCIgJiYgIWpRdWVyeS5pc0Z1bmN0aW9uKHRhcmdldCkgKSB7XG5cdFx0dGFyZ2V0ID0ge307XG5cdH1cblxuXHQvLyBFeHRlbmQgalF1ZXJ5IGl0c2VsZiBpZiBvbmx5IG9uZSBhcmd1bWVudCBpcyBwYXNzZWRcblx0aWYgKCBpID09PSBsZW5ndGggKSB7XG5cdFx0dGFyZ2V0ID0gdGhpcztcblx0XHRpLS07XG5cdH1cblxuXHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHQvLyBPbmx5IGRlYWwgd2l0aCBub24tbnVsbC91bmRlZmluZWQgdmFsdWVzXG5cdFx0aWYgKCAob3B0aW9ucyA9IGFyZ3VtZW50c1sgaSBdKSAhPSBudWxsICkge1xuXHRcdFx0Ly8gRXh0ZW5kIHRoZSBiYXNlIG9iamVjdFxuXHRcdFx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdFx0XHRzcmMgPSB0YXJnZXRbIG5hbWUgXTtcblx0XHRcdFx0Y29weSA9IG9wdGlvbnNbIG5hbWUgXTtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG5ldmVyLWVuZGluZyBsb29wXG5cdFx0XHRcdGlmICggdGFyZ2V0ID09PSBjb3B5ICkge1xuXHRcdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVjdXJzZSBpZiB3ZSdyZSBtZXJnaW5nIHBsYWluIG9iamVjdHMgb3IgYXJyYXlzXG5cdFx0XHRcdGlmICggZGVlcCAmJiBjb3B5ICYmICggalF1ZXJ5LmlzUGxhaW5PYmplY3QoY29weSkgfHwgKGNvcHlJc0FycmF5ID0galF1ZXJ5LmlzQXJyYXkoY29weSkpICkgKSB7XG5cdFx0XHRcdFx0aWYgKCBjb3B5SXNBcnJheSApIHtcblx0XHRcdFx0XHRcdGNvcHlJc0FycmF5ID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRjbG9uZSA9IHNyYyAmJiBqUXVlcnkuaXNBcnJheShzcmMpID8gc3JjIDogW107XG5cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgalF1ZXJ5LmlzUGxhaW5PYmplY3Qoc3JjKSA/IHNyYyA6IHt9O1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE5ldmVyIG1vdmUgb3JpZ2luYWwgb2JqZWN0cywgY2xvbmUgdGhlbVxuXHRcdFx0XHRcdHRhcmdldFsgbmFtZSBdID0galF1ZXJ5LmV4dGVuZCggZGVlcCwgY2xvbmUsIGNvcHkgKTtcblxuXHRcdFx0XHQvLyBEb24ndCBicmluZyBpbiB1bmRlZmluZWQgdmFsdWVzXG5cdFx0XHRcdH0gZWxzZSBpZiAoIGNvcHkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGNvcHk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIG1vZGlmaWVkIG9iamVjdFxuXHRyZXR1cm4gdGFyZ2V0O1xufTtcblxualF1ZXJ5LmV4dGVuZCh7XG5cdC8vIFVuaXF1ZSBmb3IgZWFjaCBjb3B5IG9mIGpRdWVyeSBvbiB0aGUgcGFnZVxuXHRleHBhbmRvOiBcImpRdWVyeVwiICsgKCB2ZXJzaW9uICsgTWF0aC5yYW5kb20oKSApLnJlcGxhY2UoIC9cXEQvZywgXCJcIiApLFxuXG5cdC8vIEFzc3VtZSBqUXVlcnkgaXMgcmVhZHkgd2l0aG91dCB0aGUgcmVhZHkgbW9kdWxlXG5cdGlzUmVhZHk6IHRydWUsXG5cblx0ZXJyb3I6IGZ1bmN0aW9uKCBtc2cgKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKCBtc2cgKTtcblx0fSxcblxuXHRub29wOiBmdW5jdGlvbigpIHt9LFxuXG5cdGlzRnVuY3Rpb246IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS50eXBlKG9iaikgPT09IFwiZnVuY3Rpb25cIjtcblx0fSxcblxuXHRpc0FycmF5OiBBcnJheS5pc0FycmF5LFxuXG5cdGlzV2luZG93OiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHJldHVybiBvYmogIT0gbnVsbCAmJiBvYmogPT09IG9iai53aW5kb3c7XG5cdH0sXG5cblx0aXNOdW1lcmljOiBmdW5jdGlvbiggb2JqICkge1xuXHRcdC8vIHBhcnNlRmxvYXQgTmFOcyBudW1lcmljLWNhc3QgZmFsc2UgcG9zaXRpdmVzIChudWxsfHRydWV8ZmFsc2V8XCJcIilcblx0XHQvLyAuLi5idXQgbWlzaW50ZXJwcmV0cyBsZWFkaW5nLW51bWJlciBzdHJpbmdzLCBwYXJ0aWN1bGFybHkgaGV4IGxpdGVyYWxzIChcIjB4Li4uXCIpXG5cdFx0Ly8gc3VidHJhY3Rpb24gZm9yY2VzIGluZmluaXRpZXMgdG8gTmFOXG5cdFx0Ly8gYWRkaW5nIDEgY29ycmVjdHMgbG9zcyBvZiBwcmVjaXNpb24gZnJvbSBwYXJzZUZsb2F0ICgjMTUxMDApXG5cdFx0cmV0dXJuICFqUXVlcnkuaXNBcnJheSggb2JqICkgJiYgKG9iaiAtIHBhcnNlRmxvYXQoIG9iaiApICsgMSkgPj0gMDtcblx0fSxcblxuXHRpc1BsYWluT2JqZWN0OiBmdW5jdGlvbiggb2JqICkge1xuXHRcdC8vIE5vdCBwbGFpbiBvYmplY3RzOlxuXHRcdC8vIC0gQW55IG9iamVjdCBvciB2YWx1ZSB3aG9zZSBpbnRlcm5hbCBbW0NsYXNzXV0gcHJvcGVydHkgaXMgbm90IFwiW29iamVjdCBPYmplY3RdXCJcblx0XHQvLyAtIERPTSBub2Rlc1xuXHRcdC8vIC0gd2luZG93XG5cdFx0aWYgKCBqUXVlcnkudHlwZSggb2JqICkgIT09IFwib2JqZWN0XCIgfHwgb2JqLm5vZGVUeXBlIHx8IGpRdWVyeS5pc1dpbmRvdyggb2JqICkgKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0aWYgKCBvYmouY29uc3RydWN0b3IgJiZcblx0XHRcdFx0IWhhc093bi5jYWxsKCBvYmouY29uc3RydWN0b3IucHJvdG90eXBlLCBcImlzUHJvdG90eXBlT2ZcIiApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZSBmdW5jdGlvbiBoYXNuJ3QgcmV0dXJuZWQgYWxyZWFkeSwgd2UncmUgY29uZmlkZW50IHRoYXRcblx0XHQvLyB8b2JqfCBpcyBhIHBsYWluIG9iamVjdCwgY3JlYXRlZCBieSB7fSBvciBjb25zdHJ1Y3RlZCB3aXRoIG5ldyBPYmplY3Rcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHRpc0VtcHR5T2JqZWN0OiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHZhciBuYW1lO1xuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdHJ1ZTtcblx0fSxcblxuXHR0eXBlOiBmdW5jdGlvbiggb2JqICkge1xuXHRcdGlmICggb2JqID09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gb2JqICsgXCJcIjtcblx0XHR9XG5cdFx0Ly8gU3VwcG9ydDogQW5kcm9pZDw0LjAsIGlPUzw2IChmdW5jdGlvbmlzaCBSZWdFeHApXG5cdFx0cmV0dXJuIHR5cGVvZiBvYmogPT09IFwib2JqZWN0XCIgfHwgdHlwZW9mIG9iaiA9PT0gXCJmdW5jdGlvblwiID9cblx0XHRcdGNsYXNzMnR5cGVbIHRvU3RyaW5nLmNhbGwob2JqKSBdIHx8IFwib2JqZWN0XCIgOlxuXHRcdFx0dHlwZW9mIG9iajtcblx0fSxcblxuXHQvLyBFdmFsdWF0ZXMgYSBzY3JpcHQgaW4gYSBnbG9iYWwgY29udGV4dFxuXHRnbG9iYWxFdmFsOiBmdW5jdGlvbiggY29kZSApIHtcblx0XHR2YXIgc2NyaXB0LFxuXHRcdFx0aW5kaXJlY3QgPSBldmFsO1xuXG5cdFx0Y29kZSA9IGpRdWVyeS50cmltKCBjb2RlICk7XG5cblx0XHRpZiAoIGNvZGUgKSB7XG5cdFx0XHQvLyBJZiB0aGUgY29kZSBpbmNsdWRlcyBhIHZhbGlkLCBwcm9sb2d1ZSBwb3NpdGlvblxuXHRcdFx0Ly8gc3RyaWN0IG1vZGUgcHJhZ21hLCBleGVjdXRlIGNvZGUgYnkgaW5qZWN0aW5nIGFcblx0XHRcdC8vIHNjcmlwdCB0YWcgaW50byB0aGUgZG9jdW1lbnQuXG5cdFx0XHRpZiAoIGNvZGUuaW5kZXhPZihcInVzZSBzdHJpY3RcIikgPT09IDEgKSB7XG5cdFx0XHRcdHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG5cdFx0XHRcdHNjcmlwdC50ZXh0ID0gY29kZTtcblx0XHRcdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZCggc2NyaXB0ICkucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggc2NyaXB0ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gT3RoZXJ3aXNlLCBhdm9pZCB0aGUgRE9NIG5vZGUgY3JlYXRpb24sIGluc2VydGlvblxuXHRcdFx0Ly8gYW5kIHJlbW92YWwgYnkgdXNpbmcgYW4gaW5kaXJlY3QgZ2xvYmFsIGV2YWxcblx0XHRcdFx0aW5kaXJlY3QoIGNvZGUgKTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Ly8gQ29udmVydCBkYXNoZWQgdG8gY2FtZWxDYXNlOyB1c2VkIGJ5IHRoZSBjc3MgYW5kIGRhdGEgbW9kdWxlc1xuXHQvLyBTdXBwb3J0OiBJRTktMTErXG5cdC8vIE1pY3Jvc29mdCBmb3Jnb3QgdG8gaHVtcCB0aGVpciB2ZW5kb3IgcHJlZml4ICgjOTU3Milcblx0Y2FtZWxDYXNlOiBmdW5jdGlvbiggc3RyaW5nICkge1xuXHRcdHJldHVybiBzdHJpbmcucmVwbGFjZSggcm1zUHJlZml4LCBcIm1zLVwiICkucmVwbGFjZSggcmRhc2hBbHBoYSwgZmNhbWVsQ2FzZSApO1xuXHR9LFxuXG5cdG5vZGVOYW1lOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0XHRyZXR1cm4gZWxlbS5ub2RlTmFtZSAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0fSxcblxuXHQvLyBhcmdzIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG5cdGVhY2g6IGZ1bmN0aW9uKCBvYmosIGNhbGxiYWNrLCBhcmdzICkge1xuXHRcdHZhciB2YWx1ZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0bGVuZ3RoID0gb2JqLmxlbmd0aCxcblx0XHRcdGlzQXJyYXkgPSBpc0FycmF5bGlrZSggb2JqICk7XG5cblx0XHRpZiAoIGFyZ3MgKSB7XG5cdFx0XHRpZiAoIGlzQXJyYXkgKSB7XG5cdFx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdHZhbHVlID0gY2FsbGJhY2suYXBwbHkoIG9ialsgaSBdLCBhcmdzICk7XG5cblx0XHRcdFx0XHRpZiAoIHZhbHVlID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yICggaSBpbiBvYmogKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjay5hcHBseSggb2JqWyBpIF0sIGFyZ3MgKTtcblxuXHRcdFx0XHRcdGlmICggdmFsdWUgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBBIHNwZWNpYWwsIGZhc3QsIGNhc2UgZm9yIHRoZSBtb3N0IGNvbW1vbiB1c2Ugb2YgZWFjaFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRpZiAoIGlzQXJyYXkgKSB7XG5cdFx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHRcdHZhbHVlID0gY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSBdICk7XG5cblx0XHRcdFx0XHRpZiAoIHZhbHVlID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yICggaSBpbiBvYmogKSB7XG5cdFx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjay5jYWxsKCBvYmpbIGkgXSwgaSwgb2JqWyBpIF0gKTtcblxuXHRcdFx0XHRcdGlmICggdmFsdWUgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG9iajtcblx0fSxcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkPDQuMVxuXHR0cmltOiBmdW5jdGlvbiggdGV4dCApIHtcblx0XHRyZXR1cm4gdGV4dCA9PSBudWxsID9cblx0XHRcdFwiXCIgOlxuXHRcdFx0KCB0ZXh0ICsgXCJcIiApLnJlcGxhY2UoIHJ0cmltLCBcIlwiICk7XG5cdH0sXG5cblx0Ly8gcmVzdWx0cyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYWtlQXJyYXk6IGZ1bmN0aW9uKCBhcnIsIHJlc3VsdHMgKSB7XG5cdFx0dmFyIHJldCA9IHJlc3VsdHMgfHwgW107XG5cblx0XHRpZiAoIGFyciAhPSBudWxsICkge1xuXHRcdFx0aWYgKCBpc0FycmF5bGlrZSggT2JqZWN0KGFycikgKSApIHtcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCByZXQsXG5cdFx0XHRcdFx0dHlwZW9mIGFyciA9PT0gXCJzdHJpbmdcIiA/XG5cdFx0XHRcdFx0WyBhcnIgXSA6IGFyclxuXHRcdFx0XHQpO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHVzaC5jYWxsKCByZXQsIGFyciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiByZXQ7XG5cdH0sXG5cblx0aW5BcnJheTogZnVuY3Rpb24oIGVsZW0sIGFyciwgaSApIHtcblx0XHRyZXR1cm4gYXJyID09IG51bGwgPyAtMSA6IGluZGV4T2YuY2FsbCggYXJyLCBlbGVtLCBpICk7XG5cdH0sXG5cblx0bWVyZ2U6IGZ1bmN0aW9uKCBmaXJzdCwgc2Vjb25kICkge1xuXHRcdHZhciBsZW4gPSArc2Vjb25kLmxlbmd0aCxcblx0XHRcdGogPSAwLFxuXHRcdFx0aSA9IGZpcnN0Lmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaiA8IGxlbjsgaisrICkge1xuXHRcdFx0Zmlyc3RbIGkrKyBdID0gc2Vjb25kWyBqIF07XG5cdFx0fVxuXG5cdFx0Zmlyc3QubGVuZ3RoID0gaTtcblxuXHRcdHJldHVybiBmaXJzdDtcblx0fSxcblxuXHRncmVwOiBmdW5jdGlvbiggZWxlbXMsIGNhbGxiYWNrLCBpbnZlcnQgKSB7XG5cdFx0dmFyIGNhbGxiYWNrSW52ZXJzZSxcblx0XHRcdG1hdGNoZXMgPSBbXSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoLFxuXHRcdFx0Y2FsbGJhY2tFeHBlY3QgPSAhaW52ZXJ0O1xuXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIG9ubHkgc2F2aW5nIHRoZSBpdGVtc1xuXHRcdC8vIHRoYXQgcGFzcyB0aGUgdmFsaWRhdG9yIGZ1bmN0aW9uXG5cdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRjYWxsYmFja0ludmVyc2UgPSAhY2FsbGJhY2soIGVsZW1zWyBpIF0sIGkgKTtcblx0XHRcdGlmICggY2FsbGJhY2tJbnZlcnNlICE9PSBjYWxsYmFja0V4cGVjdCApIHtcblx0XHRcdFx0bWF0Y2hlcy5wdXNoKCBlbGVtc1sgaSBdICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hdGNoZXM7XG5cdH0sXG5cblx0Ly8gYXJnIGlzIGZvciBpbnRlcm5hbCB1c2FnZSBvbmx5XG5cdG1hcDogZnVuY3Rpb24oIGVsZW1zLCBjYWxsYmFjaywgYXJnICkge1xuXHRcdHZhciB2YWx1ZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0bGVuZ3RoID0gZWxlbXMubGVuZ3RoLFxuXHRcdFx0aXNBcnJheSA9IGlzQXJyYXlsaWtlKCBlbGVtcyApLFxuXHRcdFx0cmV0ID0gW107XG5cblx0XHQvLyBHbyB0aHJvdWdoIHRoZSBhcnJheSwgdHJhbnNsYXRpbmcgZWFjaCBvZiB0aGUgaXRlbXMgdG8gdGhlaXIgbmV3IHZhbHVlc1xuXHRcdGlmICggaXNBcnJheSApIHtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpLCBhcmcgKTtcblxuXHRcdFx0XHRpZiAoIHZhbHVlICE9IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEdvIHRocm91Z2ggZXZlcnkga2V5IG9uIHRoZSBvYmplY3QsXG5cdFx0fSBlbHNlIHtcblx0XHRcdGZvciAoIGkgaW4gZWxlbXMgKSB7XG5cdFx0XHRcdHZhbHVlID0gY2FsbGJhY2soIGVsZW1zWyBpIF0sIGksIGFyZyApO1xuXG5cdFx0XHRcdGlmICggdmFsdWUgIT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXQucHVzaCggdmFsdWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblx0XHRyZXR1cm4gY29uY2F0LmFwcGx5KCBbXSwgcmV0ICk7XG5cdH0sXG5cblx0Ly8gQSBnbG9iYWwgR1VJRCBjb3VudGVyIGZvciBvYmplY3RzXG5cdGd1aWQ6IDEsXG5cblx0Ly8gQmluZCBhIGZ1bmN0aW9uIHRvIGEgY29udGV4dCwgb3B0aW9uYWxseSBwYXJ0aWFsbHkgYXBwbHlpbmcgYW55XG5cdC8vIGFyZ3VtZW50cy5cblx0cHJveHk6IGZ1bmN0aW9uKCBmbiwgY29udGV4dCApIHtcblx0XHR2YXIgdG1wLCBhcmdzLCBwcm94eTtcblxuXHRcdGlmICggdHlwZW9mIGNvbnRleHQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHR0bXAgPSBmblsgY29udGV4dCBdO1xuXHRcdFx0Y29udGV4dCA9IGZuO1xuXHRcdFx0Zm4gPSB0bXA7XG5cdFx0fVxuXG5cdFx0Ly8gUXVpY2sgY2hlY2sgdG8gZGV0ZXJtaW5lIGlmIHRhcmdldCBpcyBjYWxsYWJsZSwgaW4gdGhlIHNwZWNcblx0XHQvLyB0aGlzIHRocm93cyBhIFR5cGVFcnJvciwgYnV0IHdlIHdpbGwganVzdCByZXR1cm4gdW5kZWZpbmVkLlxuXHRcdGlmICggIWpRdWVyeS5pc0Z1bmN0aW9uKCBmbiApICkge1xuXHRcdFx0cmV0dXJuIHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBTaW11bGF0ZWQgYmluZFxuXHRcdGFyZ3MgPSBzbGljZS5jYWxsKCBhcmd1bWVudHMsIDIgKTtcblx0XHRwcm94eSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGZuLmFwcGx5KCBjb250ZXh0IHx8IHRoaXMsIGFyZ3MuY29uY2F0KCBzbGljZS5jYWxsKCBhcmd1bWVudHMgKSApICk7XG5cdFx0fTtcblxuXHRcdC8vIFNldCB0aGUgZ3VpZCBvZiB1bmlxdWUgaGFuZGxlciB0byB0aGUgc2FtZSBvZiBvcmlnaW5hbCBoYW5kbGVyLCBzbyBpdCBjYW4gYmUgcmVtb3ZlZFxuXHRcdHByb3h5Lmd1aWQgPSBmbi5ndWlkID0gZm4uZ3VpZCB8fCBqUXVlcnkuZ3VpZCsrO1xuXG5cdFx0cmV0dXJuIHByb3h5O1xuXHR9LFxuXG5cdG5vdzogRGF0ZS5ub3csXG5cblx0Ly8galF1ZXJ5LnN1cHBvcnQgaXMgbm90IHVzZWQgaW4gQ29yZSBidXQgb3RoZXIgcHJvamVjdHMgYXR0YWNoIHRoZWlyXG5cdC8vIHByb3BlcnRpZXMgdG8gaXQgc28gaXQgbmVlZHMgdG8gZXhpc3QuXG5cdHN1cHBvcnQ6IHN1cHBvcnRcbn0pO1xuXG4vLyBQb3B1bGF0ZSB0aGUgY2xhc3MydHlwZSBtYXBcbmpRdWVyeS5lYWNoKFwiQm9vbGVhbiBOdW1iZXIgU3RyaW5nIEZ1bmN0aW9uIEFycmF5IERhdGUgUmVnRXhwIE9iamVjdCBFcnJvclwiLnNwbGl0KFwiIFwiKSwgZnVuY3Rpb24oaSwgbmFtZSkge1xuXHRjbGFzczJ0eXBlWyBcIltvYmplY3QgXCIgKyBuYW1lICsgXCJdXCIgXSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcbn0pO1xuXG5mdW5jdGlvbiBpc0FycmF5bGlrZSggb2JqICkge1xuXG5cdC8vIFN1cHBvcnQ6IGlPUyA4LjIgKG5vdCByZXByb2R1Y2libGUgaW4gc2ltdWxhdG9yKVxuXHQvLyBgaW5gIGNoZWNrIHVzZWQgdG8gcHJldmVudCBKSVQgZXJyb3IgKGdoLTIxNDUpXG5cdC8vIGhhc093biBpc24ndCB1c2VkIGhlcmUgZHVlIHRvIGZhbHNlIG5lZ2F0aXZlc1xuXHQvLyByZWdhcmRpbmcgTm9kZWxpc3QgbGVuZ3RoIGluIElFXG5cdHZhciBsZW5ndGggPSBcImxlbmd0aFwiIGluIG9iaiAmJiBvYmoubGVuZ3RoLFxuXHRcdHR5cGUgPSBqUXVlcnkudHlwZSggb2JqICk7XG5cblx0aWYgKCB0eXBlID09PSBcImZ1bmN0aW9uXCIgfHwgalF1ZXJ5LmlzV2luZG93KCBvYmogKSApIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRpZiAoIG9iai5ub2RlVHlwZSA9PT0gMSAmJiBsZW5ndGggKSB7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRyZXR1cm4gdHlwZSA9PT0gXCJhcnJheVwiIHx8IGxlbmd0aCA9PT0gMCB8fFxuXHRcdHR5cGVvZiBsZW5ndGggPT09IFwibnVtYmVyXCIgJiYgbGVuZ3RoID4gMCAmJiAoIGxlbmd0aCAtIDEgKSBpbiBvYmo7XG59XG52YXIgU2l6emxlID1cbi8qIVxuICogU2l6emxlIENTUyBTZWxlY3RvciBFbmdpbmUgdjIuMi4wLXByZVxuICogaHR0cDovL3NpenpsZWpzLmNvbS9cbiAqXG4gKiBDb3B5cmlnaHQgMjAwOCwgMjAxNCBqUXVlcnkgRm91bmRhdGlvbiwgSW5jLiBhbmQgb3RoZXIgY29udHJpYnV0b3JzXG4gKiBSZWxlYXNlZCB1bmRlciB0aGUgTUlUIGxpY2Vuc2VcbiAqIGh0dHA6Ly9qcXVlcnkub3JnL2xpY2Vuc2VcbiAqXG4gKiBEYXRlOiAyMDE0LTEyLTE2XG4gKi9cbihmdW5jdGlvbiggd2luZG93ICkge1xuXG52YXIgaSxcblx0c3VwcG9ydCxcblx0RXhwcixcblx0Z2V0VGV4dCxcblx0aXNYTUwsXG5cdHRva2VuaXplLFxuXHRjb21waWxlLFxuXHRzZWxlY3QsXG5cdG91dGVybW9zdENvbnRleHQsXG5cdHNvcnRJbnB1dCxcblx0aGFzRHVwbGljYXRlLFxuXG5cdC8vIExvY2FsIGRvY3VtZW50IHZhcnNcblx0c2V0RG9jdW1lbnQsXG5cdGRvY3VtZW50LFxuXHRkb2NFbGVtLFxuXHRkb2N1bWVudElzSFRNTCxcblx0cmJ1Z2d5UVNBLFxuXHRyYnVnZ3lNYXRjaGVzLFxuXHRtYXRjaGVzLFxuXHRjb250YWlucyxcblxuXHQvLyBJbnN0YW5jZS1zcGVjaWZpYyBkYXRhXG5cdGV4cGFuZG8gPSBcInNpenpsZVwiICsgMSAqIG5ldyBEYXRlKCksXG5cdHByZWZlcnJlZERvYyA9IHdpbmRvdy5kb2N1bWVudCxcblx0ZGlycnVucyA9IDAsXG5cdGRvbmUgPSAwLFxuXHRjbGFzc0NhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0dG9rZW5DYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdGNvbXBpbGVyQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRzb3J0T3JkZXIgPSBmdW5jdGlvbiggYSwgYiApIHtcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdH1cblx0XHRyZXR1cm4gMDtcblx0fSxcblxuXHQvLyBHZW5lcmFsLXB1cnBvc2UgY29uc3RhbnRzXG5cdE1BWF9ORUdBVElWRSA9IDEgPDwgMzEsXG5cblx0Ly8gSW5zdGFuY2UgbWV0aG9kc1xuXHRoYXNPd24gPSAoe30pLmhhc093blByb3BlcnR5LFxuXHRhcnIgPSBbXSxcblx0cG9wID0gYXJyLnBvcCxcblx0cHVzaF9uYXRpdmUgPSBhcnIucHVzaCxcblx0cHVzaCA9IGFyci5wdXNoLFxuXHRzbGljZSA9IGFyci5zbGljZSxcblx0Ly8gVXNlIGEgc3RyaXBwZWQtZG93biBpbmRleE9mIGFzIGl0J3MgZmFzdGVyIHRoYW4gbmF0aXZlXG5cdC8vIGh0dHA6Ly9qc3BlcmYuY29tL3Rob3ItaW5kZXhvZi12cy1mb3IvNVxuXHRpbmRleE9mID0gZnVuY3Rpb24oIGxpc3QsIGVsZW0gKSB7XG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0bGVuID0gbGlzdC5sZW5ndGg7XG5cdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRpZiAoIGxpc3RbaV0gPT09IGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gLTE7XG5cdH0sXG5cblx0Ym9vbGVhbnMgPSBcImNoZWNrZWR8c2VsZWN0ZWR8YXN5bmN8YXV0b2ZvY3VzfGF1dG9wbGF5fGNvbnRyb2xzfGRlZmVyfGRpc2FibGVkfGhpZGRlbnxpc21hcHxsb29wfG11bHRpcGxlfG9wZW58cmVhZG9ubHl8cmVxdWlyZWR8c2NvcGVkXCIsXG5cblx0Ly8gUmVndWxhciBleHByZXNzaW9uc1xuXG5cdC8vIFdoaXRlc3BhY2UgY2hhcmFjdGVycyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXNlbGVjdG9ycy8jd2hpdGVzcGFjZVxuXHR3aGl0ZXNwYWNlID0gXCJbXFxcXHgyMFxcXFx0XFxcXHJcXFxcblxcXFxmXVwiLFxuXHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9jc3MzLXN5bnRheC8jY2hhcmFjdGVyc1xuXHRjaGFyYWN0ZXJFbmNvZGluZyA9IFwiKD86XFxcXFxcXFwufFtcXFxcdy1dfFteXFxcXHgwMC1cXFxceGEwXSkrXCIsXG5cblx0Ly8gTG9vc2VseSBtb2RlbGVkIG9uIENTUyBpZGVudGlmaWVyIGNoYXJhY3RlcnNcblx0Ly8gQW4gdW5xdW90ZWQgdmFsdWUgc2hvdWxkIGJlIGEgQ1NTIGlkZW50aWZpZXIgaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1zZWxlY3RvcnMvI2F0dHJpYnV0ZS1zZWxlY3RvcnNcblx0Ly8gUHJvcGVyIHN5bnRheDogaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI3ZhbHVlLWRlZi1pZGVudGlmaWVyXG5cdGlkZW50aWZpZXIgPSBjaGFyYWN0ZXJFbmNvZGluZy5yZXBsYWNlKCBcIndcIiwgXCJ3I1wiICksXG5cblx0Ly8gQXR0cmlidXRlIHNlbGVjdG9yczogaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXG5cdGF0dHJpYnV0ZXMgPSBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFwiICsgY2hhcmFjdGVyRW5jb2RpbmcgKyBcIikoPzpcIiArIHdoaXRlc3BhY2UgK1xuXHRcdC8vIE9wZXJhdG9yIChjYXB0dXJlIDIpXG5cdFx0XCIqKFsqXiR8IX5dPz0pXCIgKyB3aGl0ZXNwYWNlICtcblx0XHQvLyBcIkF0dHJpYnV0ZSB2YWx1ZXMgbXVzdCBiZSBDU1MgaWRlbnRpZmllcnMgW2NhcHR1cmUgNV0gb3Igc3RyaW5ncyBbY2FwdHVyZSAzIG9yIGNhcHR1cmUgNF1cIlxuXHRcdFwiKig/OicoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcInwoXCIgKyBpZGVudGlmaWVyICsgXCIpKXwpXCIgKyB3aGl0ZXNwYWNlICtcblx0XHRcIipcXFxcXVwiLFxuXG5cdHBzZXVkb3MgPSBcIjooXCIgKyBjaGFyYWN0ZXJFbmNvZGluZyArIFwiKSg/OlxcXFwoKFwiICtcblx0XHQvLyBUbyByZWR1Y2UgdGhlIG51bWJlciBvZiBzZWxlY3RvcnMgbmVlZGluZyB0b2tlbml6ZSBpbiB0aGUgcHJlRmlsdGVyLCBwcmVmZXIgYXJndW1lbnRzOlxuXHRcdC8vIDEuIHF1b3RlZCAoY2FwdHVyZSAzOyBjYXB0dXJlIDQgb3IgY2FwdHVyZSA1KVxuXHRcdFwiKCcoKD86XFxcXFxcXFwufFteXFxcXFxcXFwnXSkqKSd8XFxcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXFxcXCJdKSopXFxcIil8XCIgK1xuXHRcdC8vIDIuIHNpbXBsZSAoY2FwdHVyZSA2KVxuXHRcdFwiKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcKClbXFxcXF1dfFwiICsgYXR0cmlidXRlcyArIFwiKSopfFwiICtcblx0XHQvLyAzLiBhbnl0aGluZyBlbHNlIChjYXB0dXJlIDIpXG5cdFx0XCIuKlwiICtcblx0XHRcIilcXFxcKXwpXCIsXG5cblx0Ly8gTGVhZGluZyBhbmQgbm9uLWVzY2FwZWQgdHJhaWxpbmcgd2hpdGVzcGFjZSwgY2FwdHVyaW5nIHNvbWUgbm9uLXdoaXRlc3BhY2UgY2hhcmFjdGVycyBwcmVjZWRpbmcgdGhlIGxhdHRlclxuXHRyd2hpdGVzcGFjZSA9IG5ldyBSZWdFeHAoIHdoaXRlc3BhY2UgKyBcIitcIiwgXCJnXCIgKSxcblx0cnRyaW0gPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIit8KCg/Ol58W15cXFxcXFxcXF0pKD86XFxcXFxcXFwuKSopXCIgKyB3aGl0ZXNwYWNlICsgXCIrJFwiLCBcImdcIiApLFxuXG5cdHJjb21tYSA9IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKixcIiArIHdoaXRlc3BhY2UgKyBcIipcIiApLFxuXHRyY29tYmluYXRvcnMgPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiooWz4rfl18XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgKyB3aGl0ZXNwYWNlICsgXCIqXCIgKSxcblxuXHRyYXR0cmlidXRlUXVvdGVzID0gbmV3IFJlZ0V4cCggXCI9XCIgKyB3aGl0ZXNwYWNlICsgXCIqKFteXFxcXF0nXFxcIl0qPylcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcXVwiLCBcImdcIiApLFxuXG5cdHJwc2V1ZG8gPSBuZXcgUmVnRXhwKCBwc2V1ZG9zICksXG5cdHJpZGVudGlmaWVyID0gbmV3IFJlZ0V4cCggXCJeXCIgKyBpZGVudGlmaWVyICsgXCIkXCIgKSxcblxuXHRtYXRjaEV4cHIgPSB7XG5cdFx0XCJJRFwiOiBuZXcgUmVnRXhwKCBcIl4jKFwiICsgY2hhcmFjdGVyRW5jb2RpbmcgKyBcIilcIiApLFxuXHRcdFwiQ0xBU1NcIjogbmV3IFJlZ0V4cCggXCJeXFxcXC4oXCIgKyBjaGFyYWN0ZXJFbmNvZGluZyArIFwiKVwiICksXG5cdFx0XCJUQUdcIjogbmV3IFJlZ0V4cCggXCJeKFwiICsgY2hhcmFjdGVyRW5jb2RpbmcucmVwbGFjZSggXCJ3XCIsIFwidypcIiApICsgXCIpXCIgKSxcblx0XHRcIkFUVFJcIjogbmV3IFJlZ0V4cCggXCJeXCIgKyBhdHRyaWJ1dGVzICksXG5cdFx0XCJQU0VVRE9cIjogbmV3IFJlZ0V4cCggXCJeXCIgKyBwc2V1ZG9zICksXG5cdFx0XCJDSElMRFwiOiBuZXcgUmVnRXhwKCBcIl46KG9ubHl8Zmlyc3R8bGFzdHxudGh8bnRoLWxhc3QpLShjaGlsZHxvZi10eXBlKSg/OlxcXFwoXCIgKyB3aGl0ZXNwYWNlICtcblx0XHRcdFwiKihldmVufG9kZHwoKFsrLV18KShcXFxcZCopbnwpXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86KFsrLV18KVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XHRcIiooXFxcXGQrKXwpKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfClcIiwgXCJpXCIgKSxcblx0XHRcImJvb2xcIjogbmV3IFJlZ0V4cCggXCJeKD86XCIgKyBib29sZWFucyArIFwiKSRcIiwgXCJpXCIgKSxcblx0XHQvLyBGb3IgdXNlIGluIGxpYnJhcmllcyBpbXBsZW1lbnRpbmcgLmlzKClcblx0XHQvLyBXZSB1c2UgdGhpcyBmb3IgUE9TIG1hdGNoaW5nIGluIGBzZWxlY3RgXG5cdFx0XCJuZWVkc0NvbnRleHRcIjogbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqWz4rfl18OihldmVufG9kZHxlcXxndHxsdHxudGh8Zmlyc3R8bGFzdCkoPzpcXFxcKFwiICtcblx0XHRcdHdoaXRlc3BhY2UgKyBcIiooKD86LVxcXFxkKT9cXFxcZCopXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXCl8KSg/PVteLV18JClcIiwgXCJpXCIgKVxuXHR9LFxuXG5cdHJpbnB1dHMgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxidXR0b24pJC9pLFxuXHRyaGVhZGVyID0gL15oXFxkJC9pLFxuXG5cdHJuYXRpdmUgPSAvXltee10rXFx7XFxzKlxcW25hdGl2ZSBcXHcvLFxuXG5cdC8vIEVhc2lseS1wYXJzZWFibGUvcmV0cmlldmFibGUgSUQgb3IgVEFHIG9yIENMQVNTIHNlbGVjdG9yc1xuXHRycXVpY2tFeHByID0gL14oPzojKFtcXHctXSspfChcXHcrKXxcXC4oW1xcdy1dKykpJC8sXG5cblx0cnNpYmxpbmcgPSAvWyt+XS8sXG5cdHJlc2NhcGUgPSAvJ3xcXFxcL2csXG5cblx0Ly8gQ1NTIGVzY2FwZXMgaHR0cDovL3d3dy53My5vcmcvVFIvQ1NTMjEvc3luZGF0YS5odG1sI2VzY2FwZWQtY2hhcmFjdGVyc1xuXHRydW5lc2NhcGUgPSBuZXcgUmVnRXhwKCBcIlxcXFxcXFxcKFtcXFxcZGEtZl17MSw2fVwiICsgd2hpdGVzcGFjZSArIFwiP3woXCIgKyB3aGl0ZXNwYWNlICsgXCIpfC4pXCIsIFwiaWdcIiApLFxuXHRmdW5lc2NhcGUgPSBmdW5jdGlvbiggXywgZXNjYXBlZCwgZXNjYXBlZFdoaXRlc3BhY2UgKSB7XG5cdFx0dmFyIGhpZ2ggPSBcIjB4XCIgKyBlc2NhcGVkIC0gMHgxMDAwMDtcblx0XHQvLyBOYU4gbWVhbnMgbm9uLWNvZGVwb2ludFxuXHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjRcblx0XHQvLyBXb3JrYXJvdW5kIGVycm9uZW91cyBudW1lcmljIGludGVycHJldGF0aW9uIG9mICtcIjB4XCJcblx0XHRyZXR1cm4gaGlnaCAhPT0gaGlnaCB8fCBlc2NhcGVkV2hpdGVzcGFjZSA/XG5cdFx0XHRlc2NhcGVkIDpcblx0XHRcdGhpZ2ggPCAwID9cblx0XHRcdFx0Ly8gQk1QIGNvZGVwb2ludFxuXHRcdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoICsgMHgxMDAwMCApIDpcblx0XHRcdFx0Ly8gU3VwcGxlbWVudGFsIFBsYW5lIGNvZGVwb2ludCAoc3Vycm9nYXRlIHBhaXIpXG5cdFx0XHRcdFN0cmluZy5mcm9tQ2hhckNvZGUoIGhpZ2ggPj4gMTAgfCAweEQ4MDAsIGhpZ2ggJiAweDNGRiB8IDB4REMwMCApO1xuXHR9LFxuXG5cdC8vIFVzZWQgZm9yIGlmcmFtZXNcblx0Ly8gU2VlIHNldERvY3VtZW50KClcblx0Ly8gUmVtb3ZpbmcgdGhlIGZ1bmN0aW9uIHdyYXBwZXIgY2F1c2VzIGEgXCJQZXJtaXNzaW9uIERlbmllZFwiXG5cdC8vIGVycm9yIGluIElFXG5cdHVubG9hZEhhbmRsZXIgPSBmdW5jdGlvbigpIHtcblx0XHRzZXREb2N1bWVudCgpO1xuXHR9O1xuXG4vLyBPcHRpbWl6ZSBmb3IgcHVzaC5hcHBseSggXywgTm9kZUxpc3QgKVxudHJ5IHtcblx0cHVzaC5hcHBseShcblx0XHQoYXJyID0gc2xpY2UuY2FsbCggcHJlZmVycmVkRG9jLmNoaWxkTm9kZXMgKSksXG5cdFx0cHJlZmVycmVkRG9jLmNoaWxkTm9kZXNcblx0KTtcblx0Ly8gU3VwcG9ydDogQW5kcm9pZDw0LjBcblx0Ly8gRGV0ZWN0IHNpbGVudGx5IGZhaWxpbmcgcHVzaC5hcHBseVxuXHRhcnJbIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzLmxlbmd0aCBdLm5vZGVUeXBlO1xufSBjYXRjaCAoIGUgKSB7XG5cdHB1c2ggPSB7IGFwcGx5OiBhcnIubGVuZ3RoID9cblxuXHRcdC8vIExldmVyYWdlIHNsaWNlIGlmIHBvc3NpYmxlXG5cdFx0ZnVuY3Rpb24oIHRhcmdldCwgZWxzICkge1xuXHRcdFx0cHVzaF9uYXRpdmUuYXBwbHkoIHRhcmdldCwgc2xpY2UuY2FsbChlbHMpICk7XG5cdFx0fSA6XG5cblx0XHQvLyBTdXBwb3J0OiBJRTw5XG5cdFx0Ly8gT3RoZXJ3aXNlIGFwcGVuZCBkaXJlY3RseVxuXHRcdGZ1bmN0aW9uKCB0YXJnZXQsIGVscyApIHtcblx0XHRcdHZhciBqID0gdGFyZ2V0Lmxlbmd0aCxcblx0XHRcdFx0aSA9IDA7XG5cdFx0XHQvLyBDYW4ndCB0cnVzdCBOb2RlTGlzdC5sZW5ndGhcblx0XHRcdHdoaWxlICggKHRhcmdldFtqKytdID0gZWxzW2krK10pICkge31cblx0XHRcdHRhcmdldC5sZW5ndGggPSBqIC0gMTtcblx0XHR9XG5cdH07XG59XG5cbmZ1bmN0aW9uIFNpenpsZSggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG5cdHZhciBtYXRjaCwgZWxlbSwgbSwgbm9kZVR5cGUsXG5cdFx0Ly8gUVNBIHZhcnNcblx0XHRpLCBncm91cHMsIG9sZCwgbmlkLCBuZXdDb250ZXh0LCBuZXdTZWxlY3RvcjtcblxuXHRpZiAoICggY29udGV4dCA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogcHJlZmVycmVkRG9jICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBjb250ZXh0ICk7XG5cdH1cblxuXHRjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcblx0cmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG5cdG5vZGVUeXBlID0gY29udGV4dC5ub2RlVHlwZTtcblxuXHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiB8fCAhc2VsZWN0b3IgfHxcblx0XHRub2RlVHlwZSAhPT0gMSAmJiBub2RlVHlwZSAhPT0gOSAmJiBub2RlVHlwZSAhPT0gMTEgKSB7XG5cblx0XHRyZXR1cm4gcmVzdWx0cztcblx0fVxuXG5cdGlmICggIXNlZWQgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG5cblx0XHQvLyBUcnkgdG8gc2hvcnRjdXQgZmluZCBvcGVyYXRpb25zIHdoZW4gcG9zc2libGUgKGUuZy4sIG5vdCB1bmRlciBEb2N1bWVudEZyYWdtZW50KVxuXHRcdGlmICggbm9kZVR5cGUgIT09IDExICYmIChtYXRjaCA9IHJxdWlja0V4cHIuZXhlYyggc2VsZWN0b3IgKSkgKSB7XG5cdFx0XHQvLyBTcGVlZC11cDogU2l6emxlKFwiI0lEXCIpXG5cdFx0XHRpZiAoIChtID0gbWF0Y2hbMV0pICkge1xuXHRcdFx0XHRpZiAoIG5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdGVsZW0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBtICk7XG5cdFx0XHRcdFx0Ly8gQ2hlY2sgcGFyZW50Tm9kZSB0byBjYXRjaCB3aGVuIEJsYWNrYmVycnkgNC42IHJldHVybnNcblx0XHRcdFx0XHQvLyBub2RlcyB0aGF0IGFyZSBubyBsb25nZXIgaW4gdGhlIGRvY3VtZW50IChqUXVlcnkgIzY5NjMpXG5cdFx0XHRcdFx0aWYgKCBlbGVtICYmIGVsZW0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0XHRcdC8vIEhhbmRsZSB0aGUgY2FzZSB3aGVyZSBJRSwgT3BlcmEsIGFuZCBXZWJraXQgcmV0dXJuIGl0ZW1zXG5cdFx0XHRcdFx0XHQvLyBieSBuYW1lIGluc3RlYWQgb2YgSURcblx0XHRcdFx0XHRcdGlmICggZWxlbS5pZCA9PT0gbSApIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Ly8gQ29udGV4dCBpcyBub3QgYSBkb2N1bWVudFxuXHRcdFx0XHRcdGlmICggY29udGV4dC5vd25lckRvY3VtZW50ICYmIChlbGVtID0gY29udGV4dC5vd25lckRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBtICkpICYmXG5cdFx0XHRcdFx0XHRjb250YWlucyggY29udGV4dCwgZWxlbSApICYmIGVsZW0uaWQgPT09IG0gKSB7XG5cdFx0XHRcdFx0XHRyZXN1bHRzLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBTcGVlZC11cDogU2l6emxlKFwiVEFHXCIpXG5cdFx0XHR9IGVsc2UgaWYgKCBtYXRjaFsyXSApIHtcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggc2VsZWN0b3IgKSApO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblxuXHRcdFx0Ly8gU3BlZWQtdXA6IFNpenpsZShcIi5DTEFTU1wiKVxuXHRcdFx0fSBlbHNlIGlmICggKG0gPSBtYXRjaFszXSkgJiYgc3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICkge1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBjb250ZXh0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoIG0gKSApO1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBRU0EgcGF0aFxuXHRcdGlmICggc3VwcG9ydC5xc2EgJiYgKCFyYnVnZ3lRU0EgfHwgIXJidWdneVFTQS50ZXN0KCBzZWxlY3RvciApKSApIHtcblx0XHRcdG5pZCA9IG9sZCA9IGV4cGFuZG87XG5cdFx0XHRuZXdDb250ZXh0ID0gY29udGV4dDtcblx0XHRcdG5ld1NlbGVjdG9yID0gbm9kZVR5cGUgIT09IDEgJiYgc2VsZWN0b3I7XG5cblx0XHRcdC8vIHFTQSB3b3JrcyBzdHJhbmdlbHkgb24gRWxlbWVudC1yb290ZWQgcXVlcmllc1xuXHRcdFx0Ly8gV2UgY2FuIHdvcmsgYXJvdW5kIHRoaXMgYnkgc3BlY2lmeWluZyBhbiBleHRyYSBJRCBvbiB0aGUgcm9vdFxuXHRcdFx0Ly8gYW5kIHdvcmtpbmcgdXAgZnJvbSB0aGVyZSAoVGhhbmtzIHRvIEFuZHJldyBEdXBvbnQgZm9yIHRoZSB0ZWNobmlxdWUpXG5cdFx0XHQvLyBJRSA4IGRvZXNuJ3Qgd29yayBvbiBvYmplY3QgZWxlbWVudHNcblx0XHRcdGlmICggbm9kZVR5cGUgPT09IDEgJiYgY29udGV4dC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpICE9PSBcIm9iamVjdFwiICkge1xuXHRcdFx0XHRncm91cHMgPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblxuXHRcdFx0XHRpZiAoIChvbGQgPSBjb250ZXh0LmdldEF0dHJpYnV0ZShcImlkXCIpKSApIHtcblx0XHRcdFx0XHRuaWQgPSBvbGQucmVwbGFjZSggcmVzY2FwZSwgXCJcXFxcJCZcIiApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGNvbnRleHQuc2V0QXR0cmlidXRlKCBcImlkXCIsIG5pZCApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5pZCA9IFwiW2lkPSdcIiArIG5pZCArIFwiJ10gXCI7XG5cblx0XHRcdFx0aSA9IGdyb3Vwcy5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdGdyb3Vwc1tpXSA9IG5pZCArIHRvU2VsZWN0b3IoIGdyb3Vwc1tpXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG5ld0NvbnRleHQgPSByc2libGluZy50ZXN0KCBzZWxlY3RvciApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fCBjb250ZXh0O1xuXHRcdFx0XHRuZXdTZWxlY3RvciA9IGdyb3Vwcy5qb2luKFwiLFwiKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBuZXdTZWxlY3RvciApIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLFxuXHRcdFx0XHRcdFx0bmV3Q29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCBuZXdTZWxlY3RvciApXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0fSBjYXRjaChxc2FFcnJvcikge1xuXHRcdFx0XHR9IGZpbmFsbHkge1xuXHRcdFx0XHRcdGlmICggIW9sZCApIHtcblx0XHRcdFx0XHRcdGNvbnRleHQucmVtb3ZlQXR0cmlidXRlKFwiaWRcIik7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQWxsIG90aGVyc1xuXHRyZXR1cm4gc2VsZWN0KCBzZWxlY3Rvci5yZXBsYWNlKCBydHJpbSwgXCIkMVwiICksIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKTtcbn1cblxuLyoqXG4gKiBDcmVhdGUga2V5LXZhbHVlIGNhY2hlcyBvZiBsaW1pdGVkIHNpemVcbiAqIEByZXR1cm5zIHtGdW5jdGlvbihzdHJpbmcsIE9iamVjdCl9IFJldHVybnMgdGhlIE9iamVjdCBkYXRhIGFmdGVyIHN0b3JpbmcgaXQgb24gaXRzZWxmIHdpdGhcbiAqXHRwcm9wZXJ0eSBuYW1lIHRoZSAoc3BhY2Utc3VmZml4ZWQpIHN0cmluZyBhbmQgKGlmIHRoZSBjYWNoZSBpcyBsYXJnZXIgdGhhbiBFeHByLmNhY2hlTGVuZ3RoKVxuICpcdGRlbGV0aW5nIHRoZSBvbGRlc3QgZW50cnlcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQ2FjaGUoKSB7XG5cdHZhciBrZXlzID0gW107XG5cblx0ZnVuY3Rpb24gY2FjaGUoIGtleSwgdmFsdWUgKSB7XG5cdFx0Ly8gVXNlIChrZXkgKyBcIiBcIikgdG8gYXZvaWQgY29sbGlzaW9uIHdpdGggbmF0aXZlIHByb3RvdHlwZSBwcm9wZXJ0aWVzIChzZWUgSXNzdWUgIzE1Nylcblx0XHRpZiAoIGtleXMucHVzaCgga2V5ICsgXCIgXCIgKSA+IEV4cHIuY2FjaGVMZW5ndGggKSB7XG5cdFx0XHQvLyBPbmx5IGtlZXAgdGhlIG1vc3QgcmVjZW50IGVudHJpZXNcblx0XHRcdGRlbGV0ZSBjYWNoZVsga2V5cy5zaGlmdCgpIF07XG5cdFx0fVxuXHRcdHJldHVybiAoY2FjaGVbIGtleSArIFwiIFwiIF0gPSB2YWx1ZSk7XG5cdH1cblx0cmV0dXJuIGNhY2hlO1xufVxuXG4vKipcbiAqIE1hcmsgYSBmdW5jdGlvbiBmb3Igc3BlY2lhbCB1c2UgYnkgU2l6emxlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gbWFya1xuICovXG5mdW5jdGlvbiBtYXJrRnVuY3Rpb24oIGZuICkge1xuXHRmblsgZXhwYW5kbyBdID0gdHJ1ZTtcblx0cmV0dXJuIGZuO1xufVxuXG4vKipcbiAqIFN1cHBvcnQgdGVzdGluZyB1c2luZyBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBQYXNzZWQgdGhlIGNyZWF0ZWQgZGl2IGFuZCBleHBlY3RzIGEgYm9vbGVhbiByZXN1bHRcbiAqL1xuZnVuY3Rpb24gYXNzZXJ0KCBmbiApIHtcblx0dmFyIGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cblx0dHJ5IHtcblx0XHRyZXR1cm4gISFmbiggZGl2ICk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0gZmluYWxseSB7XG5cdFx0Ly8gUmVtb3ZlIGZyb20gaXRzIHBhcmVudCBieSBkZWZhdWx0XG5cdFx0aWYgKCBkaXYucGFyZW50Tm9kZSApIHtcblx0XHRcdGRpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKCBkaXYgKTtcblx0XHR9XG5cdFx0Ly8gcmVsZWFzZSBtZW1vcnkgaW4gSUVcblx0XHRkaXYgPSBudWxsO1xuXHR9XG59XG5cbi8qKlxuICogQWRkcyB0aGUgc2FtZSBoYW5kbGVyIGZvciBhbGwgb2YgdGhlIHNwZWNpZmllZCBhdHRyc1xuICogQHBhcmFtIHtTdHJpbmd9IGF0dHJzIFBpcGUtc2VwYXJhdGVkIGxpc3Qgb2YgYXR0cmlidXRlc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gaGFuZGxlciBUaGUgbWV0aG9kIHRoYXQgd2lsbCBiZSBhcHBsaWVkXG4gKi9cbmZ1bmN0aW9uIGFkZEhhbmRsZSggYXR0cnMsIGhhbmRsZXIgKSB7XG5cdHZhciBhcnIgPSBhdHRycy5zcGxpdChcInxcIiksXG5cdFx0aSA9IGF0dHJzLmxlbmd0aDtcblxuXHR3aGlsZSAoIGktLSApIHtcblx0XHRFeHByLmF0dHJIYW5kbGVbIGFycltpXSBdID0gaGFuZGxlcjtcblx0fVxufVxuXG4vKipcbiAqIENoZWNrcyBkb2N1bWVudCBvcmRlciBvZiB0d28gc2libGluZ3NcbiAqIEBwYXJhbSB7RWxlbWVudH0gYVxuICogQHBhcmFtIHtFbGVtZW50fSBiXG4gKiBAcmV0dXJucyB7TnVtYmVyfSBSZXR1cm5zIGxlc3MgdGhhbiAwIGlmIGEgcHJlY2VkZXMgYiwgZ3JlYXRlciB0aGFuIDAgaWYgYSBmb2xsb3dzIGJcbiAqL1xuZnVuY3Rpb24gc2libGluZ0NoZWNrKCBhLCBiICkge1xuXHR2YXIgY3VyID0gYiAmJiBhLFxuXHRcdGRpZmYgPSBjdXIgJiYgYS5ub2RlVHlwZSA9PT0gMSAmJiBiLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHQoIH5iLnNvdXJjZUluZGV4IHx8IE1BWF9ORUdBVElWRSApIC1cblx0XHRcdCggfmEuc291cmNlSW5kZXggfHwgTUFYX05FR0FUSVZFICk7XG5cblx0Ly8gVXNlIElFIHNvdXJjZUluZGV4IGlmIGF2YWlsYWJsZSBvbiBib3RoIG5vZGVzXG5cdGlmICggZGlmZiApIHtcblx0XHRyZXR1cm4gZGlmZjtcblx0fVxuXG5cdC8vIENoZWNrIGlmIGIgZm9sbG93cyBhXG5cdGlmICggY3VyICkge1xuXHRcdHdoaWxlICggKGN1ciA9IGN1ci5uZXh0U2libGluZykgKSB7XG5cdFx0XHRpZiAoIGN1ciA9PT0gYiApIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBhID8gMSA6IC0xO1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgaW5wdXQgdHlwZXNcbiAqIEBwYXJhbSB7U3RyaW5nfSB0eXBlXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUlucHV0UHNldWRvKCB0eXBlICkge1xuXHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuIG5hbWUgPT09IFwiaW5wdXRcIiAmJiBlbGVtLnR5cGUgPT09IHR5cGU7XG5cdH07XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBidXR0b25zXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjcmVhdGVCdXR0b25Qc2V1ZG8oIHR5cGUgKSB7XG5cdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgbmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRyZXR1cm4gKG5hbWUgPT09IFwiaW5wdXRcIiB8fCBuYW1lID09PSBcImJ1dHRvblwiKSAmJiBlbGVtLnR5cGUgPT09IHR5cGU7XG5cdH07XG59XG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRvIHVzZSBpbiBwc2V1ZG9zIGZvciBwb3NpdGlvbmFsc1xuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUG9zaXRpb25hbFBzZXVkbyggZm4gKSB7XG5cdHJldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIGFyZ3VtZW50ICkge1xuXHRcdGFyZ3VtZW50ID0gK2FyZ3VtZW50O1xuXHRcdHJldHVybiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMgKSB7XG5cdFx0XHR2YXIgaixcblx0XHRcdFx0bWF0Y2hJbmRleGVzID0gZm4oIFtdLCBzZWVkLmxlbmd0aCwgYXJndW1lbnQgKSxcblx0XHRcdFx0aSA9IG1hdGNoSW5kZXhlcy5sZW5ndGg7XG5cblx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIGZvdW5kIGF0IHRoZSBzcGVjaWZpZWQgaW5kZXhlc1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggc2VlZFsgKGogPSBtYXRjaEluZGV4ZXNbaV0pIF0gKSB7XG5cdFx0XHRcdFx0c2VlZFtqXSA9ICEobWF0Y2hlc1tqXSA9IHNlZWRbal0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0pO1xufVxuXG4vKipcbiAqIENoZWNrcyBhIG5vZGUgZm9yIHZhbGlkaXR5IGFzIGEgU2l6emxlIGNvbnRleHRcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3Q9fSBjb250ZXh0XG4gKiBAcmV0dXJucyB7RWxlbWVudHxPYmplY3R8Qm9vbGVhbn0gVGhlIGlucHV0IG5vZGUgaWYgYWNjZXB0YWJsZSwgb3RoZXJ3aXNlIGEgZmFsc3kgdmFsdWVcbiAqL1xuZnVuY3Rpb24gdGVzdENvbnRleHQoIGNvbnRleHQgKSB7XG5cdHJldHVybiBjb250ZXh0ICYmIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICYmIGNvbnRleHQ7XG59XG5cbi8vIEV4cG9zZSBzdXBwb3J0IHZhcnMgZm9yIGNvbnZlbmllbmNlXG5zdXBwb3J0ID0gU2l6emxlLnN1cHBvcnQgPSB7fTtcblxuLyoqXG4gKiBEZXRlY3RzIFhNTCBub2Rlc1xuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gZWxlbSBBbiBlbGVtZW50IG9yIGEgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtCb29sZWFufSBUcnVlIGlmZiBlbGVtIGlzIGEgbm9uLUhUTUwgWE1MIG5vZGVcbiAqL1xuaXNYTUwgPSBTaXp6bGUuaXNYTUwgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0Ly8gZG9jdW1lbnRFbGVtZW50IGlzIHZlcmlmaWVkIGZvciBjYXNlcyB3aGVyZSBpdCBkb2Vzbid0IHlldCBleGlzdFxuXHQvLyAoc3VjaCBhcyBsb2FkaW5nIGlmcmFtZXMgaW4gSUUgLSAjNDgzMylcblx0dmFyIGRvY3VtZW50RWxlbWVudCA9IGVsZW0gJiYgKGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtKS5kb2N1bWVudEVsZW1lbnQ7XG5cdHJldHVybiBkb2N1bWVudEVsZW1lbnQgPyBkb2N1bWVudEVsZW1lbnQubm9kZU5hbWUgIT09IFwiSFRNTFwiIDogZmFsc2U7XG59O1xuXG4vKipcbiAqIFNldHMgZG9jdW1lbnQtcmVsYXRlZCB2YXJpYWJsZXMgb25jZSBiYXNlZCBvbiB0aGUgY3VycmVudCBkb2N1bWVudFxuICogQHBhcmFtIHtFbGVtZW50fE9iamVjdH0gW2RvY10gQW4gZWxlbWVudCBvciBkb2N1bWVudCBvYmplY3QgdG8gdXNlIHRvIHNldCB0aGUgZG9jdW1lbnRcbiAqIEByZXR1cm5zIHtPYmplY3R9IFJldHVybnMgdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAqL1xuc2V0RG9jdW1lbnQgPSBTaXp6bGUuc2V0RG9jdW1lbnQgPSBmdW5jdGlvbiggbm9kZSApIHtcblx0dmFyIGhhc0NvbXBhcmUsIHBhcmVudCxcblx0XHRkb2MgPSBub2RlID8gbm9kZS5vd25lckRvY3VtZW50IHx8IG5vZGUgOiBwcmVmZXJyZWREb2M7XG5cblx0Ly8gSWYgbm8gZG9jdW1lbnQgYW5kIGRvY3VtZW50RWxlbWVudCBpcyBhdmFpbGFibGUsIHJldHVyblxuXHRpZiAoIGRvYyA9PT0gZG9jdW1lbnQgfHwgZG9jLm5vZGVUeXBlICE9PSA5IHx8ICFkb2MuZG9jdW1lbnRFbGVtZW50ICkge1xuXHRcdHJldHVybiBkb2N1bWVudDtcblx0fVxuXG5cdC8vIFNldCBvdXIgZG9jdW1lbnRcblx0ZG9jdW1lbnQgPSBkb2M7XG5cdGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXHRwYXJlbnQgPSBkb2MuZGVmYXVsdFZpZXc7XG5cblx0Ly8gU3VwcG9ydDogSUU+OFxuXHQvLyBJZiBpZnJhbWUgZG9jdW1lbnQgaXMgYXNzaWduZWQgdG8gXCJkb2N1bWVudFwiIHZhcmlhYmxlIGFuZCBpZiBpZnJhbWUgaGFzIGJlZW4gcmVsb2FkZWQsXG5cdC8vIElFIHdpbGwgdGhyb3cgXCJwZXJtaXNzaW9uIGRlbmllZFwiIGVycm9yIHdoZW4gYWNjZXNzaW5nIFwiZG9jdW1lbnRcIiB2YXJpYWJsZSwgc2VlIGpRdWVyeSAjMTM5MzZcblx0Ly8gSUU2LTggZG8gbm90IHN1cHBvcnQgdGhlIGRlZmF1bHRWaWV3IHByb3BlcnR5IHNvIHBhcmVudCB3aWxsIGJlIHVuZGVmaW5lZFxuXHRpZiAoIHBhcmVudCAmJiBwYXJlbnQgIT09IHBhcmVudC50b3AgKSB7XG5cdFx0Ly8gSUUxMSBkb2VzIG5vdCBoYXZlIGF0dGFjaEV2ZW50LCBzbyBhbGwgbXVzdCBzdWZmZXJcblx0XHRpZiAoIHBhcmVudC5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdFx0cGFyZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwidW5sb2FkXCIsIHVubG9hZEhhbmRsZXIsIGZhbHNlICk7XG5cdFx0fSBlbHNlIGlmICggcGFyZW50LmF0dGFjaEV2ZW50ICkge1xuXHRcdFx0cGFyZW50LmF0dGFjaEV2ZW50KCBcIm9udW5sb2FkXCIsIHVubG9hZEhhbmRsZXIgKTtcblx0XHR9XG5cdH1cblxuXHQvKiBTdXBwb3J0IHRlc3RzXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblx0ZG9jdW1lbnRJc0hUTUwgPSAhaXNYTUwoIGRvYyApO1xuXG5cdC8qIEF0dHJpYnV0ZXNcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIFN1cHBvcnQ6IElFPDhcblx0Ly8gVmVyaWZ5IHRoYXQgZ2V0QXR0cmlidXRlIHJlYWxseSByZXR1cm5zIGF0dHJpYnV0ZXMgYW5kIG5vdCBwcm9wZXJ0aWVzXG5cdC8vIChleGNlcHRpbmcgSUU4IGJvb2xlYW5zKVxuXHRzdXBwb3J0LmF0dHJpYnV0ZXMgPSBhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcblx0XHRkaXYuY2xhc3NOYW1lID0gXCJpXCI7XG5cdFx0cmV0dXJuICFkaXYuZ2V0QXR0cmlidXRlKFwiY2xhc3NOYW1lXCIpO1xuXHR9KTtcblxuXHQvKiBnZXRFbGVtZW50KHMpQnkqXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBDaGVjayBpZiBnZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIikgcmV0dXJucyBvbmx5IGVsZW1lbnRzXG5cdHN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgPSBhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcblx0XHRkaXYuYXBwZW5kQ2hpbGQoIGRvYy5jcmVhdGVDb21tZW50KFwiXCIpICk7XG5cdFx0cmV0dXJuICFkaXYuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpLmxlbmd0aDtcblx0fSk7XG5cblx0Ly8gU3VwcG9ydDogSUU8OVxuXHRzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgPSBybmF0aXZlLnRlc3QoIGRvYy5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lICk7XG5cblx0Ly8gU3VwcG9ydDogSUU8MTBcblx0Ly8gQ2hlY2sgaWYgZ2V0RWxlbWVudEJ5SWQgcmV0dXJucyBlbGVtZW50cyBieSBuYW1lXG5cdC8vIFRoZSBicm9rZW4gZ2V0RWxlbWVudEJ5SWQgbWV0aG9kcyBkb24ndCBwaWNrIHVwIHByb2dyYW1hdGljYWxseS1zZXQgbmFtZXMsXG5cdC8vIHNvIHVzZSBhIHJvdW5kYWJvdXQgZ2V0RWxlbWVudHNCeU5hbWUgdGVzdFxuXHRzdXBwb3J0LmdldEJ5SWQgPSBhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcblx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBkaXYgKS5pZCA9IGV4cGFuZG87XG5cdFx0cmV0dXJuICFkb2MuZ2V0RWxlbWVudHNCeU5hbWUgfHwgIWRvYy5nZXRFbGVtZW50c0J5TmFtZSggZXhwYW5kbyApLmxlbmd0aDtcblx0fSk7XG5cblx0Ly8gSUQgZmluZCBhbmQgZmlsdGVyXG5cdGlmICggc3VwcG9ydC5nZXRCeUlkICkge1xuXHRcdEV4cHIuZmluZFtcIklEXCJdID0gZnVuY3Rpb24oIGlkLCBjb250ZXh0ICkge1xuXHRcdFx0aWYgKCB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50QnlJZCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBkb2N1bWVudElzSFRNTCApIHtcblx0XHRcdFx0dmFyIG0gPSBjb250ZXh0LmdldEVsZW1lbnRCeUlkKCBpZCApO1xuXHRcdFx0XHQvLyBDaGVjayBwYXJlbnROb2RlIHRvIGNhdGNoIHdoZW4gQmxhY2tiZXJyeSA0LjYgcmV0dXJuc1xuXHRcdFx0XHQvLyBub2RlcyB0aGF0IGFyZSBubyBsb25nZXIgaW4gdGhlIGRvY3VtZW50ICM2OTYzXG5cdFx0XHRcdHJldHVybiBtICYmIG0ucGFyZW50Tm9kZSA/IFsgbSBdIDogW107XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRFeHByLmZpbHRlcltcIklEXCJdID0gZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZShcImlkXCIpID09PSBhdHRySWQ7XG5cdFx0XHR9O1xuXHRcdH07XG5cdH0gZWxzZSB7XG5cdFx0Ly8gU3VwcG9ydDogSUU2Lzdcblx0XHQvLyBnZXRFbGVtZW50QnlJZCBpcyBub3QgcmVsaWFibGUgYXMgYSBmaW5kIHNob3J0Y3V0XG5cdFx0ZGVsZXRlIEV4cHIuZmluZFtcIklEXCJdO1xuXG5cdFx0RXhwci5maWx0ZXJbXCJJRFwiXSA9ICBmdW5jdGlvbiggaWQgKSB7XG5cdFx0XHR2YXIgYXR0cklkID0gaWQucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIG5vZGUgPSB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGVOb2RlICE9PSBcInVuZGVmaW5lZFwiICYmIGVsZW0uZ2V0QXR0cmlidXRlTm9kZShcImlkXCIpO1xuXHRcdFx0XHRyZXR1cm4gbm9kZSAmJiBub2RlLnZhbHVlID09PSBhdHRySWQ7XG5cdFx0XHR9O1xuXHRcdH07XG5cdH1cblxuXHQvLyBUYWdcblx0RXhwci5maW5kW1wiVEFHXCJdID0gc3VwcG9ydC5nZXRFbGVtZW50c0J5VGFnTmFtZSA/XG5cdFx0ZnVuY3Rpb24oIHRhZywgY29udGV4dCApIHtcblx0XHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgIT09IFwidW5kZWZpbmVkXCIgKSB7XG5cdFx0XHRcdHJldHVybiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCB0YWcgKTtcblxuXHRcdFx0Ly8gRG9jdW1lbnRGcmFnbWVudCBub2RlcyBkb24ndCBoYXZlIGdFQlROXG5cdFx0XHR9IGVsc2UgaWYgKCBzdXBwb3J0LnFzYSApIHtcblx0XHRcdFx0cmV0dXJuIGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnICk7XG5cdFx0XHR9XG5cdFx0fSA6XG5cblx0XHRmdW5jdGlvbiggdGFnLCBjb250ZXh0ICkge1xuXHRcdFx0dmFyIGVsZW0sXG5cdFx0XHRcdHRtcCA9IFtdLFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0Ly8gQnkgaGFwcHkgY29pbmNpZGVuY2UsIGEgKGJyb2tlbikgZ0VCVE4gYXBwZWFycyBvbiBEb2N1bWVudEZyYWdtZW50IG5vZGVzIHRvb1xuXHRcdFx0XHRyZXN1bHRzID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnICk7XG5cblx0XHRcdC8vIEZpbHRlciBvdXQgcG9zc2libGUgY29tbWVudHNcblx0XHRcdGlmICggdGFnID09PSBcIipcIiApIHtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IHJlc3VsdHNbaSsrXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0dG1wLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdG1wO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0fTtcblxuXHQvLyBDbGFzc1xuXHRFeHByLmZpbmRbXCJDTEFTU1wiXSA9IHN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSAmJiBmdW5jdGlvbiggY2xhc3NOYW1lLCBjb250ZXh0ICkge1xuXHRcdGlmICggZG9jdW1lbnRJc0hUTUwgKSB7XG5cdFx0XHRyZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBjbGFzc05hbWUgKTtcblx0XHR9XG5cdH07XG5cblx0LyogUVNBL21hdGNoZXNTZWxlY3RvclxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gUVNBIGFuZCBtYXRjaGVzU2VsZWN0b3Igc3VwcG9ydFxuXG5cdC8vIG1hdGNoZXNTZWxlY3Rvcig6YWN0aXZlKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoSUU5L09wZXJhIDExLjUpXG5cdHJidWdneU1hdGNoZXMgPSBbXTtcblxuXHQvLyBxU2EoOmZvY3VzKSByZXBvcnRzIGZhbHNlIHdoZW4gdHJ1ZSAoQ2hyb21lIDIxKVxuXHQvLyBXZSBhbGxvdyB0aGlzIGJlY2F1c2Ugb2YgYSBidWcgaW4gSUU4LzkgdGhhdCB0aHJvd3MgYW4gZXJyb3Jcblx0Ly8gd2hlbmV2ZXIgYGRvY3VtZW50LmFjdGl2ZUVsZW1lbnRgIGlzIGFjY2Vzc2VkIG9uIGFuIGlmcmFtZVxuXHQvLyBTbywgd2UgYWxsb3cgOmZvY3VzIHRvIHBhc3MgdGhyb3VnaCBRU0EgYWxsIHRoZSB0aW1lIHRvIGF2b2lkIHRoZSBJRSBlcnJvclxuXHQvLyBTZWUgaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTMzNzhcblx0cmJ1Z2d5UVNBID0gW107XG5cblx0aWYgKCAoc3VwcG9ydC5xc2EgPSBybmF0aXZlLnRlc3QoIGRvYy5xdWVyeVNlbGVjdG9yQWxsICkpICkge1xuXHRcdC8vIEJ1aWxkIFFTQSByZWdleFxuXHRcdC8vIFJlZ2V4IHN0cmF0ZWd5IGFkb3B0ZWQgZnJvbSBEaWVnbyBQZXJpbmlcblx0XHRhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcblx0XHRcdC8vIFNlbGVjdCBpcyBzZXQgdG8gZW1wdHkgc3RyaW5nIG9uIHB1cnBvc2Vcblx0XHRcdC8vIFRoaXMgaXMgdG8gdGVzdCBJRSdzIHRyZWF0bWVudCBvZiBub3QgZXhwbGljaXRseVxuXHRcdFx0Ly8gc2V0dGluZyBhIGJvb2xlYW4gY29udGVudCBhdHRyaWJ1dGUsXG5cdFx0XHQvLyBzaW5jZSBpdHMgcHJlc2VuY2Ugc2hvdWxkIGJlIGVub3VnaFxuXHRcdFx0Ly8gaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTIzNTlcblx0XHRcdGRvY0VsZW0uYXBwZW5kQ2hpbGQoIGRpdiApLmlubmVySFRNTCA9IFwiPGEgaWQ9J1wiICsgZXhwYW5kbyArIFwiJz48L2E+XCIgK1xuXHRcdFx0XHRcIjxzZWxlY3QgaWQ9J1wiICsgZXhwYW5kbyArIFwiLVxcZl0nIG1zYWxsb3djYXB0dXJlPScnPlwiICtcblx0XHRcdFx0XCI8b3B0aW9uIHNlbGVjdGVkPScnPjwvb3B0aW9uPjwvc2VsZWN0PlwiO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTgsIE9wZXJhIDExLTEyLjE2XG5cdFx0XHQvLyBOb3RoaW5nIHNob3VsZCBiZSBzZWxlY3RlZCB3aGVuIGVtcHR5IHN0cmluZ3MgZm9sbG93IF49IG9yICQ9IG9yICo9XG5cdFx0XHQvLyBUaGUgdGVzdCBhdHRyaWJ1dGUgbXVzdCBiZSB1bmtub3duIGluIE9wZXJhIGJ1dCBcInNhZmVcIiBmb3IgV2luUlRcblx0XHRcdC8vIGh0dHA6Ly9tc2RuLm1pY3Jvc29mdC5jb20vZW4tdXMvbGlicmFyeS9pZS9oaDQ2NTM4OC5hc3B4I2F0dHJpYnV0ZV9zZWN0aW9uXG5cdFx0XHRpZiAoIGRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiW21zYWxsb3djYXB0dXJlXj0nJ11cIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJbKl4kXT1cIiArIHdoaXRlc3BhY2UgKyBcIiooPzonJ3xcXFwiXFxcIilcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRThcblx0XHRcdC8vIEJvb2xlYW4gYXR0cmlidXRlcyBhbmQgXCJ2YWx1ZVwiIGFyZSBub3QgdHJlYXRlZCBjb3JyZWN0bHlcblx0XHRcdGlmICggIWRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiW3NlbGVjdGVkXVwiKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIlxcXFxbXCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86dmFsdWV8XCIgKyBib29sZWFucyArIFwiKVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IENocm9tZTwyOSwgQW5kcm9pZDw0LjIrLCBTYWZhcmk8Ny4wKywgaU9TPDcuMCssIFBoYW50b21KUzwxLjkuNytcblx0XHRcdGlmICggIWRpdi5xdWVyeVNlbGVjdG9yQWxsKCBcIltpZH49XCIgKyBleHBhbmRvICsgXCItXVwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaChcIn49XCIpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBXZWJraXQvT3BlcmEgLSA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIHNlbGVjdGVkIG9wdGlvbiBlbGVtZW50c1xuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdC8vIElFOCB0aHJvd3MgZXJyb3IgaGVyZSBhbmQgd2lsbCBub3Qgc2VlIGxhdGVyIHRlc3RzXG5cdFx0XHRpZiAoICFkaXYucXVlcnlTZWxlY3RvckFsbChcIjpjaGVja2VkXCIpLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCI6Y2hlY2tlZFwiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDgrLCBpT1MgOCtcblx0XHRcdC8vIGh0dHBzOi8vYnVncy53ZWJraXQub3JnL3Nob3dfYnVnLmNnaT9pZD0xMzY4NTFcblx0XHRcdC8vIEluLXBhZ2UgYHNlbGVjdG9yI2lkIHNpYmluZy1jb21iaW5hdG9yIHNlbGVjdG9yYCBmYWlsc1xuXHRcdFx0aWYgKCAhZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoIFwiYSNcIiArIGV4cGFuZG8gKyBcIisqXCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKFwiLiMuK1srfl1cIik7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0XHRhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcblx0XHRcdC8vIFN1cHBvcnQ6IFdpbmRvd3MgOCBOYXRpdmUgQXBwc1xuXHRcdFx0Ly8gVGhlIHR5cGUgYW5kIG5hbWUgYXR0cmlidXRlcyBhcmUgcmVzdHJpY3RlZCBkdXJpbmcgLmlubmVySFRNTCBhc3NpZ25tZW50XG5cdFx0XHR2YXIgaW5wdXQgPSBkb2MuY3JlYXRlRWxlbWVudChcImlucHV0XCIpO1xuXHRcdFx0aW5wdXQuc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgXCJoaWRkZW5cIiApO1xuXHRcdFx0ZGl2LmFwcGVuZENoaWxkKCBpbnB1dCApLnNldEF0dHJpYnV0ZSggXCJuYW1lXCIsIFwiRFwiICk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFOFxuXHRcdFx0Ly8gRW5mb3JjZSBjYXNlLXNlbnNpdGl2aXR5IG9mIG5hbWUgYXR0cmlidXRlXG5cdFx0XHRpZiAoIGRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiW25hbWU9ZF1cIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJuYW1lXCIgKyB3aGl0ZXNwYWNlICsgXCIqWypeJHwhfl0/PVwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEZGIDMuNSAtIDplbmFibGVkLzpkaXNhYmxlZCBhbmQgaGlkZGVuIGVsZW1lbnRzIChoaWRkZW4gZWxlbWVudHMgYXJlIHN0aWxsIGVuYWJsZWQpXG5cdFx0XHQvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuXHRcdFx0aWYgKCAhZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCI6ZW5hYmxlZFwiKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKCBcIjplbmFibGVkXCIsIFwiOmRpc2FibGVkXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3BlcmEgMTAtMTEgZG9lcyBub3QgdGhyb3cgb24gcG9zdC1jb21tYSBpbnZhbGlkIHBzZXVkb3Ncblx0XHRcdGRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiKiw6eFwiKTtcblx0XHRcdHJidWdneVFTQS5wdXNoKFwiLC4qOlwiKTtcblx0XHR9KTtcblx0fVxuXG5cdGlmICggKHN1cHBvcnQubWF0Y2hlc1NlbGVjdG9yID0gcm5hdGl2ZS50ZXN0KCAobWF0Y2hlcyA9IGRvY0VsZW0ubWF0Y2hlcyB8fFxuXHRcdGRvY0VsZW0ud2Via2l0TWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jRWxlbS5tb3pNYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRkb2NFbGVtLm9NYXRjaGVzU2VsZWN0b3IgfHxcblx0XHRkb2NFbGVtLm1zTWF0Y2hlc1NlbGVjdG9yKSApKSApIHtcblxuXHRcdGFzc2VydChmdW5jdGlvbiggZGl2ICkge1xuXHRcdFx0Ly8gQ2hlY2sgdG8gc2VlIGlmIGl0J3MgcG9zc2libGUgdG8gZG8gbWF0Y2hlc1NlbGVjdG9yXG5cdFx0XHQvLyBvbiBhIGRpc2Nvbm5lY3RlZCBub2RlIChJRSA5KVxuXHRcdFx0c3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCA9IG1hdGNoZXMuY2FsbCggZGl2LCBcImRpdlwiICk7XG5cblx0XHRcdC8vIFRoaXMgc2hvdWxkIGZhaWwgd2l0aCBhbiBleGNlcHRpb25cblx0XHRcdC8vIEdlY2tvIGRvZXMgbm90IGVycm9yLCByZXR1cm5zIGZhbHNlIGluc3RlYWRcblx0XHRcdG1hdGNoZXMuY2FsbCggZGl2LCBcIltzIT0nJ106eFwiICk7XG5cdFx0XHRyYnVnZ3lNYXRjaGVzLnB1c2goIFwiIT1cIiwgcHNldWRvcyApO1xuXHRcdH0pO1xuXHR9XG5cblx0cmJ1Z2d5UVNBID0gcmJ1Z2d5UVNBLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lRU0Euam9pbihcInxcIikgKTtcblx0cmJ1Z2d5TWF0Y2hlcyA9IHJidWdneU1hdGNoZXMubGVuZ3RoICYmIG5ldyBSZWdFeHAoIHJidWdneU1hdGNoZXMuam9pbihcInxcIikgKTtcblxuXHQvKiBDb250YWluc1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdGhhc0NvbXBhcmUgPSBybmF0aXZlLnRlc3QoIGRvY0VsZW0uY29tcGFyZURvY3VtZW50UG9zaXRpb24gKTtcblxuXHQvLyBFbGVtZW50IGNvbnRhaW5zIGFub3RoZXJcblx0Ly8gUHVycG9zZWZ1bGx5IGRvZXMgbm90IGltcGxlbWVudCBpbmNsdXNpdmUgZGVzY2VuZGVudFxuXHQvLyBBcyBpbiwgYW4gZWxlbWVudCBkb2VzIG5vdCBjb250YWluIGl0c2VsZlxuXHRjb250YWlucyA9IGhhc0NvbXBhcmUgfHwgcm5hdGl2ZS50ZXN0KCBkb2NFbGVtLmNvbnRhaW5zICkgP1xuXHRcdGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdFx0dmFyIGFkb3duID0gYS5ub2RlVHlwZSA9PT0gOSA/IGEuZG9jdW1lbnRFbGVtZW50IDogYSxcblx0XHRcdFx0YnVwID0gYiAmJiBiLnBhcmVudE5vZGU7XG5cdFx0XHRyZXR1cm4gYSA9PT0gYnVwIHx8ICEhKCBidXAgJiYgYnVwLm5vZGVUeXBlID09PSAxICYmIChcblx0XHRcdFx0YWRvd24uY29udGFpbnMgP1xuXHRcdFx0XHRcdGFkb3duLmNvbnRhaW5zKCBidXAgKSA6XG5cdFx0XHRcdFx0YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAmJiBhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBidXAgKSAmIDE2XG5cdFx0XHQpKTtcblx0XHR9IDpcblx0XHRmdW5jdGlvbiggYSwgYiApIHtcblx0XHRcdGlmICggYiApIHtcblx0XHRcdFx0d2hpbGUgKCAoYiA9IGIucGFyZW50Tm9kZSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBiID09PSBhICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fTtcblxuXHQvKiBTb3J0aW5nXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBEb2N1bWVudCBvcmRlciBzb3J0aW5nXG5cdHNvcnRPcmRlciA9IGhhc0NvbXBhcmUgP1xuXHRmdW5jdGlvbiggYSwgYiApIHtcblxuXHRcdC8vIEZsYWcgZm9yIGR1cGxpY2F0ZSByZW1vdmFsXG5cdFx0aWYgKCBhID09PSBiICkge1xuXHRcdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdC8vIFNvcnQgb24gbWV0aG9kIGV4aXN0ZW5jZSBpZiBvbmx5IG9uZSBpbnB1dCBoYXMgY29tcGFyZURvY3VtZW50UG9zaXRpb25cblx0XHR2YXIgY29tcGFyZSA9ICFhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uIC0gIWIuY29tcGFyZURvY3VtZW50UG9zaXRpb247XG5cdFx0aWYgKCBjb21wYXJlICkge1xuXHRcdFx0cmV0dXJuIGNvbXBhcmU7XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsY3VsYXRlIHBvc2l0aW9uIGlmIGJvdGggaW5wdXRzIGJlbG9uZyB0byB0aGUgc2FtZSBkb2N1bWVudFxuXHRcdGNvbXBhcmUgPSAoIGEub3duZXJEb2N1bWVudCB8fCBhICkgPT09ICggYi5vd25lckRvY3VtZW50IHx8IGIgKSA/XG5cdFx0XHRhLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBiICkgOlxuXG5cdFx0XHQvLyBPdGhlcndpc2Ugd2Uga25vdyB0aGV5IGFyZSBkaXNjb25uZWN0ZWRcblx0XHRcdDE7XG5cblx0XHQvLyBEaXNjb25uZWN0ZWQgbm9kZXNcblx0XHRpZiAoIGNvbXBhcmUgJiAxIHx8XG5cdFx0XHQoIXN1cHBvcnQuc29ydERldGFjaGVkICYmIGIuY29tcGFyZURvY3VtZW50UG9zaXRpb24oIGEgKSA9PT0gY29tcGFyZSkgKSB7XG5cblx0XHRcdC8vIENob29zZSB0aGUgZmlyc3QgZWxlbWVudCB0aGF0IGlzIHJlbGF0ZWQgdG8gb3VyIHByZWZlcnJlZCBkb2N1bWVudFxuXHRcdFx0aWYgKCBhID09PSBkb2MgfHwgYS5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBhKSApIHtcblx0XHRcdFx0cmV0dXJuIC0xO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCBiID09PSBkb2MgfHwgYi5vd25lckRvY3VtZW50ID09PSBwcmVmZXJyZWREb2MgJiYgY29udGFpbnMocHJlZmVycmVkRG9jLCBiKSApIHtcblx0XHRcdFx0cmV0dXJuIDE7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1haW50YWluIG9yaWdpbmFsIG9yZGVyXG5cdFx0XHRyZXR1cm4gc29ydElucHV0ID9cblx0XHRcdFx0KCBpbmRleE9mKCBzb3J0SW5wdXQsIGEgKSAtIGluZGV4T2YoIHNvcnRJbnB1dCwgYiApICkgOlxuXHRcdFx0XHQwO1xuXHRcdH1cblxuXHRcdHJldHVybiBjb21wYXJlICYgNCA/IC0xIDogMTtcblx0fSA6XG5cdGZ1bmN0aW9uKCBhLCBiICkge1xuXHRcdC8vIEV4aXQgZWFybHkgaWYgdGhlIG5vZGVzIGFyZSBpZGVudGljYWxcblx0XHRpZiAoIGEgPT09IGIgKSB7XG5cdFx0XHRoYXNEdXBsaWNhdGUgPSB0cnVlO1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0dmFyIGN1cixcblx0XHRcdGkgPSAwLFxuXHRcdFx0YXVwID0gYS5wYXJlbnROb2RlLFxuXHRcdFx0YnVwID0gYi5wYXJlbnROb2RlLFxuXHRcdFx0YXAgPSBbIGEgXSxcblx0XHRcdGJwID0gWyBiIF07XG5cblx0XHQvLyBQYXJlbnRsZXNzIG5vZGVzIGFyZSBlaXRoZXIgZG9jdW1lbnRzIG9yIGRpc2Nvbm5lY3RlZFxuXHRcdGlmICggIWF1cCB8fCAhYnVwICkge1xuXHRcdFx0cmV0dXJuIGEgPT09IGRvYyA/IC0xIDpcblx0XHRcdFx0YiA9PT0gZG9jID8gMSA6XG5cdFx0XHRcdGF1cCA/IC0xIDpcblx0XHRcdFx0YnVwID8gMSA6XG5cdFx0XHRcdHNvcnRJbnB1dCA/XG5cdFx0XHRcdCggaW5kZXhPZiggc29ydElucHV0LCBhICkgLSBpbmRleE9mKCBzb3J0SW5wdXQsIGIgKSApIDpcblx0XHRcdFx0MDtcblxuXHRcdC8vIElmIHRoZSBub2RlcyBhcmUgc2libGluZ3MsIHdlIGNhbiBkbyBhIHF1aWNrIGNoZWNrXG5cdFx0fSBlbHNlIGlmICggYXVwID09PSBidXAgKSB7XG5cdFx0XHRyZXR1cm4gc2libGluZ0NoZWNrKCBhLCBiICk7XG5cdFx0fVxuXG5cdFx0Ly8gT3RoZXJ3aXNlIHdlIG5lZWQgZnVsbCBsaXN0cyBvZiB0aGVpciBhbmNlc3RvcnMgZm9yIGNvbXBhcmlzb25cblx0XHRjdXIgPSBhO1xuXHRcdHdoaWxlICggKGN1ciA9IGN1ci5wYXJlbnROb2RlKSApIHtcblx0XHRcdGFwLnVuc2hpZnQoIGN1ciApO1xuXHRcdH1cblx0XHRjdXIgPSBiO1xuXHRcdHdoaWxlICggKGN1ciA9IGN1ci5wYXJlbnROb2RlKSApIHtcblx0XHRcdGJwLnVuc2hpZnQoIGN1ciApO1xuXHRcdH1cblxuXHRcdC8vIFdhbGsgZG93biB0aGUgdHJlZSBsb29raW5nIGZvciBhIGRpc2NyZXBhbmN5XG5cdFx0d2hpbGUgKCBhcFtpXSA9PT0gYnBbaV0gKSB7XG5cdFx0XHRpKys7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGkgP1xuXHRcdFx0Ly8gRG8gYSBzaWJsaW5nIGNoZWNrIGlmIHRoZSBub2RlcyBoYXZlIGEgY29tbW9uIGFuY2VzdG9yXG5cdFx0XHRzaWJsaW5nQ2hlY2soIGFwW2ldLCBicFtpXSApIDpcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIG5vZGVzIGluIG91ciBkb2N1bWVudCBzb3J0IGZpcnN0XG5cdFx0XHRhcFtpXSA9PT0gcHJlZmVycmVkRG9jID8gLTEgOlxuXHRcdFx0YnBbaV0gPT09IHByZWZlcnJlZERvYyA/IDEgOlxuXHRcdFx0MDtcblx0fTtcblxuXHRyZXR1cm4gZG9jO1xufTtcblxuU2l6emxlLm1hdGNoZXMgPSBmdW5jdGlvbiggZXhwciwgZWxlbWVudHMgKSB7XG5cdHJldHVybiBTaXp6bGUoIGV4cHIsIG51bGwsIG51bGwsIGVsZW1lbnRzICk7XG59O1xuXG5TaXp6bGUubWF0Y2hlc1NlbGVjdG9yID0gZnVuY3Rpb24oIGVsZW0sIGV4cHIgKSB7XG5cdC8vIFNldCBkb2N1bWVudCB2YXJzIGlmIG5lZWRlZFxuXHRpZiAoICggZWxlbS5vd25lckRvY3VtZW50IHx8IGVsZW0gKSAhPT0gZG9jdW1lbnQgKSB7XG5cdFx0c2V0RG9jdW1lbnQoIGVsZW0gKTtcblx0fVxuXG5cdC8vIE1ha2Ugc3VyZSB0aGF0IGF0dHJpYnV0ZSBzZWxlY3RvcnMgYXJlIHF1b3RlZFxuXHRleHByID0gZXhwci5yZXBsYWNlKCByYXR0cmlidXRlUXVvdGVzLCBcIj0nJDEnXVwiICk7XG5cblx0aWYgKCBzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciAmJiBkb2N1bWVudElzSFRNTCAmJlxuXHRcdCggIXJidWdneU1hdGNoZXMgfHwgIXJidWdneU1hdGNoZXMudGVzdCggZXhwciApICkgJiZcblx0XHQoICFyYnVnZ3lRU0EgICAgIHx8ICFyYnVnZ3lRU0EudGVzdCggZXhwciApICkgKSB7XG5cblx0XHR0cnkge1xuXHRcdFx0dmFyIHJldCA9IG1hdGNoZXMuY2FsbCggZWxlbSwgZXhwciApO1xuXG5cdFx0XHQvLyBJRSA5J3MgbWF0Y2hlc1NlbGVjdG9yIHJldHVybnMgZmFsc2Ugb24gZGlzY29ubmVjdGVkIG5vZGVzXG5cdFx0XHRpZiAoIHJldCB8fCBzdXBwb3J0LmRpc2Nvbm5lY3RlZE1hdGNoIHx8XG5cdFx0XHRcdFx0Ly8gQXMgd2VsbCwgZGlzY29ubmVjdGVkIG5vZGVzIGFyZSBzYWlkIHRvIGJlIGluIGEgZG9jdW1lbnRcblx0XHRcdFx0XHQvLyBmcmFnbWVudCBpbiBJRSA5XG5cdFx0XHRcdFx0ZWxlbS5kb2N1bWVudCAmJiBlbGVtLmRvY3VtZW50Lm5vZGVUeXBlICE9PSAxMSApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblx0XHR9IGNhdGNoIChlKSB7fVxuXHR9XG5cblx0cmV0dXJuIFNpenpsZSggZXhwciwgZG9jdW1lbnQsIG51bGwsIFsgZWxlbSBdICkubGVuZ3RoID4gMDtcbn07XG5cblNpenpsZS5jb250YWlucyA9IGZ1bmN0aW9uKCBjb250ZXh0LCBlbGVtICkge1xuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0aWYgKCAoIGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0ICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBjb250ZXh0ICk7XG5cdH1cblx0cmV0dXJuIGNvbnRhaW5zKCBjb250ZXh0LCBlbGVtICk7XG59O1xuXG5TaXp6bGUuYXR0ciA9IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0aWYgKCAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdH1cblxuXHR2YXIgZm4gPSBFeHByLmF0dHJIYW5kbGVbIG5hbWUudG9Mb3dlckNhc2UoKSBdLFxuXHRcdC8vIERvbid0IGdldCBmb29sZWQgYnkgT2JqZWN0LnByb3RvdHlwZSBwcm9wZXJ0aWVzIChqUXVlcnkgIzEzODA3KVxuXHRcdHZhbCA9IGZuICYmIGhhc093bi5jYWxsKCBFeHByLmF0dHJIYW5kbGUsIG5hbWUudG9Mb3dlckNhc2UoKSApID9cblx0XHRcdGZuKCBlbGVtLCBuYW1lLCAhZG9jdW1lbnRJc0hUTUwgKSA6XG5cdFx0XHR1bmRlZmluZWQ7XG5cblx0cmV0dXJuIHZhbCAhPT0gdW5kZWZpbmVkID9cblx0XHR2YWwgOlxuXHRcdHN1cHBvcnQuYXR0cmlidXRlcyB8fCAhZG9jdW1lbnRJc0hUTUwgP1xuXHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUgKSA6XG5cdFx0XHQodmFsID0gZWxlbS5nZXRBdHRyaWJ1dGVOb2RlKG5hbWUpKSAmJiB2YWwuc3BlY2lmaWVkID9cblx0XHRcdFx0dmFsLnZhbHVlIDpcblx0XHRcdFx0bnVsbDtcbn07XG5cblNpenpsZS5lcnJvciA9IGZ1bmN0aW9uKCBtc2cgKSB7XG5cdHRocm93IG5ldyBFcnJvciggXCJTeW50YXggZXJyb3IsIHVucmVjb2duaXplZCBleHByZXNzaW9uOiBcIiArIG1zZyApO1xufTtcblxuLyoqXG4gKiBEb2N1bWVudCBzb3J0aW5nIGFuZCByZW1vdmluZyBkdXBsaWNhdGVzXG4gKiBAcGFyYW0ge0FycmF5TGlrZX0gcmVzdWx0c1xuICovXG5TaXp6bGUudW5pcXVlU29ydCA9IGZ1bmN0aW9uKCByZXN1bHRzICkge1xuXHR2YXIgZWxlbSxcblx0XHRkdXBsaWNhdGVzID0gW10sXG5cdFx0aiA9IDAsXG5cdFx0aSA9IDA7XG5cblx0Ly8gVW5sZXNzIHdlICprbm93KiB3ZSBjYW4gZGV0ZWN0IGR1cGxpY2F0ZXMsIGFzc3VtZSB0aGVpciBwcmVzZW5jZVxuXHRoYXNEdXBsaWNhdGUgPSAhc3VwcG9ydC5kZXRlY3REdXBsaWNhdGVzO1xuXHRzb3J0SW5wdXQgPSAhc3VwcG9ydC5zb3J0U3RhYmxlICYmIHJlc3VsdHMuc2xpY2UoIDAgKTtcblx0cmVzdWx0cy5zb3J0KCBzb3J0T3JkZXIgKTtcblxuXHRpZiAoIGhhc0R1cGxpY2F0ZSApIHtcblx0XHR3aGlsZSAoIChlbGVtID0gcmVzdWx0c1tpKytdKSApIHtcblx0XHRcdGlmICggZWxlbSA9PT0gcmVzdWx0c1sgaSBdICkge1xuXHRcdFx0XHRqID0gZHVwbGljYXRlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0cmVzdWx0cy5zcGxpY2UoIGR1cGxpY2F0ZXNbIGogXSwgMSApO1xuXHRcdH1cblx0fVxuXG5cdC8vIENsZWFyIGlucHV0IGFmdGVyIHNvcnRpbmcgdG8gcmVsZWFzZSBvYmplY3RzXG5cdC8vIFNlZSBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L3NpenpsZS9wdWxsLzIyNVxuXHRzb3J0SW5wdXQgPSBudWxsO1xuXG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuLyoqXG4gKiBVdGlsaXR5IGZ1bmN0aW9uIGZvciByZXRyaWV2aW5nIHRoZSB0ZXh0IHZhbHVlIG9mIGFuIGFycmF5IG9mIERPTSBub2Rlc1xuICogQHBhcmFtIHtBcnJheXxFbGVtZW50fSBlbGVtXG4gKi9cbmdldFRleHQgPSBTaXp6bGUuZ2V0VGV4dCA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHR2YXIgbm9kZSxcblx0XHRyZXQgPSBcIlwiLFxuXHRcdGkgPSAwLFxuXHRcdG5vZGVUeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRpZiAoICFub2RlVHlwZSApIHtcblx0XHQvLyBJZiBubyBub2RlVHlwZSwgdGhpcyBpcyBleHBlY3RlZCB0byBiZSBhbiBhcnJheVxuXHRcdHdoaWxlICggKG5vZGUgPSBlbGVtW2krK10pICkge1xuXHRcdFx0Ly8gRG8gbm90IHRyYXZlcnNlIGNvbW1lbnQgbm9kZXNcblx0XHRcdHJldCArPSBnZXRUZXh0KCBub2RlICk7XG5cdFx0fVxuXHR9IGVsc2UgaWYgKCBub2RlVHlwZSA9PT0gMSB8fCBub2RlVHlwZSA9PT0gOSB8fCBub2RlVHlwZSA9PT0gMTEgKSB7XG5cdFx0Ly8gVXNlIHRleHRDb250ZW50IGZvciBlbGVtZW50c1xuXHRcdC8vIGlubmVyVGV4dCB1c2FnZSByZW1vdmVkIGZvciBjb25zaXN0ZW5jeSBvZiBuZXcgbGluZXMgKGpRdWVyeSAjMTExNTMpXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS50ZXh0Q29udGVudCA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiBlbGVtLnRleHRDb250ZW50O1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBUcmF2ZXJzZSBpdHMgY2hpbGRyZW5cblx0XHRcdGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xuXHRcdFx0XHRyZXQgKz0gZ2V0VGV4dCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSBlbHNlIGlmICggbm9kZVR5cGUgPT09IDMgfHwgbm9kZVR5cGUgPT09IDQgKSB7XG5cdFx0cmV0dXJuIGVsZW0ubm9kZVZhbHVlO1xuXHR9XG5cdC8vIERvIG5vdCBpbmNsdWRlIGNvbW1lbnQgb3IgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbiBub2Rlc1xuXG5cdHJldHVybiByZXQ7XG59O1xuXG5FeHByID0gU2l6emxlLnNlbGVjdG9ycyA9IHtcblxuXHQvLyBDYW4gYmUgYWRqdXN0ZWQgYnkgdGhlIHVzZXJcblx0Y2FjaGVMZW5ndGg6IDUwLFxuXG5cdGNyZWF0ZVBzZXVkbzogbWFya0Z1bmN0aW9uLFxuXG5cdG1hdGNoOiBtYXRjaEV4cHIsXG5cblx0YXR0ckhhbmRsZToge30sXG5cblx0ZmluZDoge30sXG5cblx0cmVsYXRpdmU6IHtcblx0XHRcIj5cIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiIFwiOiB7IGRpcjogXCJwYXJlbnROb2RlXCIgfSxcblx0XHRcIitcIjogeyBkaXI6IFwicHJldmlvdXNTaWJsaW5nXCIsIGZpcnN0OiB0cnVlIH0sXG5cdFx0XCJ+XCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiIH1cblx0fSxcblxuXHRwcmVGaWx0ZXI6IHtcblx0XHRcIkFUVFJcIjogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0bWF0Y2hbMV0gPSBtYXRjaFsxXS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHQvLyBNb3ZlIHRoZSBnaXZlbiB2YWx1ZSB0byBtYXRjaFszXSB3aGV0aGVyIHF1b3RlZCBvciB1bnF1b3RlZFxuXHRcdFx0bWF0Y2hbM10gPSAoIG1hdGNoWzNdIHx8IG1hdGNoWzRdIHx8IG1hdGNoWzVdIHx8IFwiXCIgKS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXG5cdFx0XHRpZiAoIG1hdGNoWzJdID09PSBcIn49XCIgKSB7XG5cdFx0XHRcdG1hdGNoWzNdID0gXCIgXCIgKyBtYXRjaFszXSArIFwiIFwiO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDQgKTtcblx0XHR9LFxuXG5cdFx0XCJDSElMRFwiOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHQvKiBtYXRjaGVzIGZyb20gbWF0Y2hFeHByW1wiQ0hJTERcIl1cblx0XHRcdFx0MSB0eXBlIChvbmx5fG50aHwuLi4pXG5cdFx0XHRcdDIgd2hhdCAoY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0MyBhcmd1bWVudCAoZXZlbnxvZGR8XFxkKnxcXGQqbihbKy1dXFxkKyk/fC4uLilcblx0XHRcdFx0NCB4bi1jb21wb25lbnQgb2YgeG4reSBhcmd1bWVudCAoWystXT9cXGQqbnwpXG5cdFx0XHRcdDUgc2lnbiBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NiB4IG9mIHhuLWNvbXBvbmVudFxuXHRcdFx0XHQ3IHNpZ24gb2YgeS1jb21wb25lbnRcblx0XHRcdFx0OCB5IG9mIHktY29tcG9uZW50XG5cdFx0XHQqL1xuXHRcdFx0bWF0Y2hbMV0gPSBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpO1xuXG5cdFx0XHRpZiAoIG1hdGNoWzFdLnNsaWNlKCAwLCAzICkgPT09IFwibnRoXCIgKSB7XG5cdFx0XHRcdC8vIG50aC0qIHJlcXVpcmVzIGFyZ3VtZW50XG5cdFx0XHRcdGlmICggIW1hdGNoWzNdICkge1xuXHRcdFx0XHRcdFNpenpsZS5lcnJvciggbWF0Y2hbMF0gKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIG51bWVyaWMgeCBhbmQgeSBwYXJhbWV0ZXJzIGZvciBFeHByLmZpbHRlci5DSElMRFxuXHRcdFx0XHQvLyByZW1lbWJlciB0aGF0IGZhbHNlL3RydWUgY2FzdCByZXNwZWN0aXZlbHkgdG8gMC8xXG5cdFx0XHRcdG1hdGNoWzRdID0gKyggbWF0Y2hbNF0gPyBtYXRjaFs1XSArIChtYXRjaFs2XSB8fCAxKSA6IDIgKiAoIG1hdGNoWzNdID09PSBcImV2ZW5cIiB8fCBtYXRjaFszXSA9PT0gXCJvZGRcIiApICk7XG5cdFx0XHRcdG1hdGNoWzVdID0gKyggKCBtYXRjaFs3XSArIG1hdGNoWzhdICkgfHwgbWF0Y2hbM10gPT09IFwib2RkXCIgKTtcblxuXHRcdFx0Ly8gb3RoZXIgdHlwZXMgcHJvaGliaXQgYXJndW1lbnRzXG5cdFx0XHR9IGVsc2UgaWYgKCBtYXRjaFszXSApIHtcblx0XHRcdFx0U2l6emxlLmVycm9yKCBtYXRjaFswXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gbWF0Y2g7XG5cdFx0fSxcblxuXHRcdFwiUFNFVURPXCI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdHZhciBleGNlc3MsXG5cdFx0XHRcdHVucXVvdGVkID0gIW1hdGNoWzZdICYmIG1hdGNoWzJdO1xuXG5cdFx0XHRpZiAoIG1hdGNoRXhwcltcIkNISUxEXCJdLnRlc3QoIG1hdGNoWzBdICkgKSB7XG5cdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBY2NlcHQgcXVvdGVkIGFyZ3VtZW50cyBhcy1pc1xuXHRcdFx0aWYgKCBtYXRjaFszXSApIHtcblx0XHRcdFx0bWF0Y2hbMl0gPSBtYXRjaFs0XSB8fCBtYXRjaFs1XSB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTdHJpcCBleGNlc3MgY2hhcmFjdGVycyBmcm9tIHVucXVvdGVkIGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggdW5xdW90ZWQgJiYgcnBzZXVkby50ZXN0KCB1bnF1b3RlZCApICYmXG5cdFx0XHRcdC8vIEdldCBleGNlc3MgZnJvbSB0b2tlbml6ZSAocmVjdXJzaXZlbHkpXG5cdFx0XHRcdChleGNlc3MgPSB0b2tlbml6ZSggdW5xdW90ZWQsIHRydWUgKSkgJiZcblx0XHRcdFx0Ly8gYWR2YW5jZSB0byB0aGUgbmV4dCBjbG9zaW5nIHBhcmVudGhlc2lzXG5cdFx0XHRcdChleGNlc3MgPSB1bnF1b3RlZC5pbmRleE9mKCBcIilcIiwgdW5xdW90ZWQubGVuZ3RoIC0gZXhjZXNzICkgLSB1bnF1b3RlZC5sZW5ndGgpICkge1xuXG5cdFx0XHRcdC8vIGV4Y2VzcyBpcyBhIG5lZ2F0aXZlIGluZGV4XG5cdFx0XHRcdG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoIDAsIGV4Y2VzcyApO1xuXHRcdFx0XHRtYXRjaFsyXSA9IHVucXVvdGVkLnNsaWNlKCAwLCBleGNlc3MgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV0dXJuIG9ubHkgY2FwdHVyZXMgbmVlZGVkIGJ5IHRoZSBwc2V1ZG8gZmlsdGVyIG1ldGhvZCAodHlwZSBhbmQgYXJndW1lbnQpXG5cdFx0XHRyZXR1cm4gbWF0Y2guc2xpY2UoIDAsIDMgKTtcblx0XHR9XG5cdH0sXG5cblx0ZmlsdGVyOiB7XG5cblx0XHRcIlRBR1wiOiBmdW5jdGlvbiggbm9kZU5hbWVTZWxlY3RvciApIHtcblx0XHRcdHZhciBub2RlTmFtZSA9IG5vZGVOYW1lU2VsZWN0b3IucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIG5vZGVOYW1lU2VsZWN0b3IgPT09IFwiKlwiID9cblx0XHRcdFx0ZnVuY3Rpb24oKSB7IHJldHVybiB0cnVlOyB9IDpcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBub2RlTmFtZTtcblx0XHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0XCJDTEFTU1wiOiBmdW5jdGlvbiggY2xhc3NOYW1lICkge1xuXHRcdFx0dmFyIHBhdHRlcm4gPSBjbGFzc0NhY2hlWyBjbGFzc05hbWUgKyBcIiBcIiBdO1xuXG5cdFx0XHRyZXR1cm4gcGF0dGVybiB8fFxuXHRcdFx0XHQocGF0dGVybiA9IG5ldyBSZWdFeHAoIFwiKF58XCIgKyB3aGl0ZXNwYWNlICsgXCIpXCIgKyBjbGFzc05hbWUgKyBcIihcIiArIHdoaXRlc3BhY2UgKyBcInwkKVwiICkpICYmXG5cdFx0XHRcdGNsYXNzQ2FjaGUoIGNsYXNzTmFtZSwgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHBhdHRlcm4udGVzdCggdHlwZW9mIGVsZW0uY2xhc3NOYW1lID09PSBcInN0cmluZ1wiICYmIGVsZW0uY2xhc3NOYW1lIHx8IHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtLmdldEF0dHJpYnV0ZShcImNsYXNzXCIpIHx8IFwiXCIgKTtcblx0XHRcdFx0fSk7XG5cdFx0fSxcblxuXHRcdFwiQVRUUlwiOiBmdW5jdGlvbiggbmFtZSwgb3BlcmF0b3IsIGNoZWNrICkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgcmVzdWx0ID0gU2l6emxlLmF0dHIoIGVsZW0sIG5hbWUgKTtcblxuXHRcdFx0XHRpZiAoIHJlc3VsdCA9PSBudWxsICkge1xuXHRcdFx0XHRcdHJldHVybiBvcGVyYXRvciA9PT0gXCIhPVwiO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGlmICggIW9wZXJhdG9yICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVzdWx0ICs9IFwiXCI7XG5cblx0XHRcdFx0cmV0dXJuIG9wZXJhdG9yID09PSBcIj1cIiA/IHJlc3VsdCA9PT0gY2hlY2sgOlxuXHRcdFx0XHRcdG9wZXJhdG9yID09PSBcIiE9XCIgPyByZXN1bHQgIT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJePVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPT09IDAgOlxuXHRcdFx0XHRcdG9wZXJhdG9yID09PSBcIio9XCIgPyBjaGVjayAmJiByZXN1bHQuaW5kZXhPZiggY2hlY2sgKSA+IC0xIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIkPVwiID8gY2hlY2sgJiYgcmVzdWx0LnNsaWNlKCAtY2hlY2subGVuZ3RoICkgPT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJ+PVwiID8gKCBcIiBcIiArIHJlc3VsdC5yZXBsYWNlKCByd2hpdGVzcGFjZSwgXCIgXCIgKSArIFwiIFwiICkuaW5kZXhPZiggY2hlY2sgKSA+IC0xIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCJ8PVwiID8gcmVzdWx0ID09PSBjaGVjayB8fCByZXN1bHQuc2xpY2UoIDAsIGNoZWNrLmxlbmd0aCArIDEgKSA9PT0gY2hlY2sgKyBcIi1cIiA6XG5cdFx0XHRcdFx0ZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRcIkNISUxEXCI6IGZ1bmN0aW9uKCB0eXBlLCB3aGF0LCBhcmd1bWVudCwgZmlyc3QsIGxhc3QgKSB7XG5cdFx0XHR2YXIgc2ltcGxlID0gdHlwZS5zbGljZSggMCwgMyApICE9PSBcIm50aFwiLFxuXHRcdFx0XHRmb3J3YXJkID0gdHlwZS5zbGljZSggLTQgKSAhPT0gXCJsYXN0XCIsXG5cdFx0XHRcdG9mVHlwZSA9IHdoYXQgPT09IFwib2YtdHlwZVwiO1xuXG5cdFx0XHRyZXR1cm4gZmlyc3QgPT09IDEgJiYgbGFzdCA9PT0gMCA/XG5cblx0XHRcdFx0Ly8gU2hvcnRjdXQgZm9yIDpudGgtKihuKVxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0XHRyZXR1cm4gISFlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRcdH0gOlxuXG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0dmFyIGNhY2hlLCBvdXRlckNhY2hlLCBub2RlLCBkaWZmLCBub2RlSW5kZXgsIHN0YXJ0LFxuXHRcdFx0XHRcdFx0ZGlyID0gc2ltcGxlICE9PSBmb3J3YXJkID8gXCJuZXh0U2libGluZ1wiIDogXCJwcmV2aW91c1NpYmxpbmdcIixcblx0XHRcdFx0XHRcdHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZSxcblx0XHRcdFx0XHRcdG5hbWUgPSBvZlR5cGUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpLFxuXHRcdFx0XHRcdFx0dXNlQ2FjaGUgPSAheG1sICYmICFvZlR5cGU7XG5cblx0XHRcdFx0XHRpZiAoIHBhcmVudCApIHtcblxuXHRcdFx0XHRcdFx0Ly8gOihmaXJzdHxsYXN0fG9ubHkpLShjaGlsZHxvZi10eXBlKVxuXHRcdFx0XHRcdFx0aWYgKCBzaW1wbGUgKSB7XG5cdFx0XHRcdFx0XHRcdHdoaWxlICggZGlyICkge1xuXHRcdFx0XHRcdFx0XHRcdG5vZGUgPSBlbGVtO1xuXHRcdFx0XHRcdFx0XHRcdHdoaWxlICggKG5vZGUgPSBub2RlWyBkaXIgXSkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIG9mVHlwZSA/IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSA6IG5vZGUubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0Ly8gUmV2ZXJzZSBkaXJlY3Rpb24gZm9yIDpvbmx5LSogKGlmIHdlIGhhdmVuJ3QgeWV0IGRvbmUgc28pXG5cdFx0XHRcdFx0XHRcdFx0c3RhcnQgPSBkaXIgPSB0eXBlID09PSBcIm9ubHlcIiAmJiAhc3RhcnQgJiYgXCJuZXh0U2libGluZ1wiO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRzdGFydCA9IFsgZm9yd2FyZCA/IHBhcmVudC5maXJzdENoaWxkIDogcGFyZW50Lmxhc3RDaGlsZCBdO1xuXG5cdFx0XHRcdFx0XHQvLyBub24teG1sIDpudGgtY2hpbGQoLi4uKSBzdG9yZXMgY2FjaGUgZGF0YSBvbiBgcGFyZW50YFxuXHRcdFx0XHRcdFx0aWYgKCBmb3J3YXJkICYmIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHQvLyBTZWVrIGBlbGVtYCBmcm9tIGEgcHJldmlvdXNseS1jYWNoZWQgaW5kZXhcblx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZSA9IHBhcmVudFsgZXhwYW5kbyBdIHx8IChwYXJlbnRbIGV4cGFuZG8gXSA9IHt9KTtcblx0XHRcdFx0XHRcdFx0Y2FjaGUgPSBvdXRlckNhY2hlWyB0eXBlIF0gfHwgW107XG5cdFx0XHRcdFx0XHRcdG5vZGVJbmRleCA9IGNhY2hlWzBdID09PSBkaXJydW5zICYmIGNhY2hlWzFdO1xuXHRcdFx0XHRcdFx0XHRkaWZmID0gY2FjaGVbMF0gPT09IGRpcnJ1bnMgJiYgY2FjaGVbMl07XG5cdFx0XHRcdFx0XHRcdG5vZGUgPSBub2RlSW5kZXggJiYgcGFyZW50LmNoaWxkTm9kZXNbIG5vZGVJbmRleCBdO1xuXG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBGYWxsYmFjayB0byBzZWVraW5nIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuXHRcdFx0XHRcdFx0XHRcdChkaWZmID0gbm9kZUluZGV4ID0gMCkgfHwgc3RhcnQucG9wKCkpICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gV2hlbiBmb3VuZCwgY2FjaGUgaW5kZXhlcyBvbiBgcGFyZW50YCBhbmQgYnJlYWtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIG5vZGUubm9kZVR5cGUgPT09IDEgJiYgKytkaWZmICYmIG5vZGUgPT09IGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIG5vZGVJbmRleCwgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIFVzZSBwcmV2aW91c2x5LWNhY2hlZCBlbGVtZW50IGluZGV4IGlmIGF2YWlsYWJsZVxuXHRcdFx0XHRcdFx0fSBlbHNlIGlmICggdXNlQ2FjaGUgJiYgKGNhY2hlID0gKGVsZW1bIGV4cGFuZG8gXSB8fCAoZWxlbVsgZXhwYW5kbyBdID0ge30pKVsgdHlwZSBdKSAmJiBjYWNoZVswXSA9PT0gZGlycnVucyApIHtcblx0XHRcdFx0XHRcdFx0ZGlmZiA9IGNhY2hlWzFdO1xuXG5cdFx0XHRcdFx0XHQvLyB4bWwgOm50aC1jaGlsZCguLi4pIG9yIDpudGgtbGFzdC1jaGlsZCguLi4pIG9yIDpudGgoLWxhc3QpPy1vZi10eXBlKC4uLilcblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIFVzZSB0aGUgc2FtZSBsb29wIGFzIGFib3ZlIHRvIHNlZWsgYGVsZW1gIGZyb20gdGhlIHN0YXJ0XG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKG5vZGUgPSArK25vZGVJbmRleCAmJiBub2RlICYmIG5vZGVbIGRpciBdIHx8XG5cdFx0XHRcdFx0XHRcdFx0KGRpZmYgPSBub2RlSW5kZXggPSAwKSB8fCBzdGFydC5wb3AoKSkgKSB7XG5cblx0XHRcdFx0XHRcdFx0XHRpZiAoICggb2ZUeXBlID8gbm9kZS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lIDogbm9kZS5ub2RlVHlwZSA9PT0gMSApICYmICsrZGlmZiApIHtcblx0XHRcdFx0XHRcdFx0XHRcdC8vIENhY2hlIHRoZSBpbmRleCBvZiBlYWNoIGVuY291bnRlcmVkIGVsZW1lbnRcblx0XHRcdFx0XHRcdFx0XHRcdGlmICggdXNlQ2FjaGUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdChub2RlWyBleHBhbmRvIF0gfHwgKG5vZGVbIGV4cGFuZG8gXSA9IHt9KSlbIHR5cGUgXSA9IFsgZGlycnVucywgZGlmZiBdO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIG5vZGUgPT09IGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBJbmNvcnBvcmF0ZSB0aGUgb2Zmc2V0LCB0aGVuIGNoZWNrIGFnYWluc3QgY3ljbGUgc2l6ZVxuXHRcdFx0XHRcdFx0ZGlmZiAtPSBsYXN0O1xuXHRcdFx0XHRcdFx0cmV0dXJuIGRpZmYgPT09IGZpcnN0IHx8ICggZGlmZiAlIGZpcnN0ID09PSAwICYmIGRpZmYgLyBmaXJzdCA+PSAwICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdH0sXG5cblx0XHRcIlBTRVVET1wiOiBmdW5jdGlvbiggcHNldWRvLCBhcmd1bWVudCApIHtcblx0XHRcdC8vIHBzZXVkby1jbGFzcyBuYW1lcyBhcmUgY2FzZS1pbnNlbnNpdGl2ZVxuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNwc2V1ZG8tY2xhc3Nlc1xuXHRcdFx0Ly8gUHJpb3JpdGl6ZSBieSBjYXNlIHNlbnNpdGl2aXR5IGluIGNhc2UgY3VzdG9tIHBzZXVkb3MgYXJlIGFkZGVkIHdpdGggdXBwZXJjYXNlIGxldHRlcnNcblx0XHRcdC8vIFJlbWVtYmVyIHRoYXQgc2V0RmlsdGVycyBpbmhlcml0cyBmcm9tIHBzZXVkb3Ncblx0XHRcdHZhciBhcmdzLFxuXHRcdFx0XHRmbiA9IEV4cHIucHNldWRvc1sgcHNldWRvIF0gfHwgRXhwci5zZXRGaWx0ZXJzWyBwc2V1ZG8udG9Mb3dlckNhc2UoKSBdIHx8XG5cdFx0XHRcdFx0U2l6emxlLmVycm9yKCBcInVuc3VwcG9ydGVkIHBzZXVkbzogXCIgKyBwc2V1ZG8gKTtcblxuXHRcdFx0Ly8gVGhlIHVzZXIgbWF5IHVzZSBjcmVhdGVQc2V1ZG8gdG8gaW5kaWNhdGUgdGhhdFxuXHRcdFx0Ly8gYXJndW1lbnRzIGFyZSBuZWVkZWQgdG8gY3JlYXRlIHRoZSBmaWx0ZXIgZnVuY3Rpb25cblx0XHRcdC8vIGp1c3QgYXMgU2l6emxlIGRvZXNcblx0XHRcdGlmICggZm5bIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0cmV0dXJuIGZuKCBhcmd1bWVudCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBCdXQgbWFpbnRhaW4gc3VwcG9ydCBmb3Igb2xkIHNpZ25hdHVyZXNcblx0XHRcdGlmICggZm4ubGVuZ3RoID4gMSApIHtcblx0XHRcdFx0YXJncyA9IFsgcHNldWRvLCBwc2V1ZG8sIFwiXCIsIGFyZ3VtZW50IF07XG5cdFx0XHRcdHJldHVybiBFeHByLnNldEZpbHRlcnMuaGFzT3duUHJvcGVydHkoIHBzZXVkby50b0xvd2VyQ2FzZSgpICkgP1xuXHRcdFx0XHRcdG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcyApIHtcblx0XHRcdFx0XHRcdHZhciBpZHgsXG5cdFx0XHRcdFx0XHRcdG1hdGNoZWQgPSBmbiggc2VlZCwgYXJndW1lbnQgKSxcblx0XHRcdFx0XHRcdFx0aSA9IG1hdGNoZWQubGVuZ3RoO1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlkeCA9IGluZGV4T2YoIHNlZWQsIG1hdGNoZWRbaV0gKTtcblx0XHRcdFx0XHRcdFx0c2VlZFsgaWR4IF0gPSAhKCBtYXRjaGVzWyBpZHggXSA9IG1hdGNoZWRbaV0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KSA6XG5cdFx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZm4oIGVsZW0sIDAsIGFyZ3MgKTtcblx0XHRcdFx0XHR9O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZm47XG5cdFx0fVxuXHR9LFxuXG5cdHBzZXVkb3M6IHtcblx0XHQvLyBQb3RlbnRpYWxseSBjb21wbGV4IHBzZXVkb3Ncblx0XHRcIm5vdFwiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdFx0Ly8gVHJpbSB0aGUgc2VsZWN0b3IgcGFzc2VkIHRvIGNvbXBpbGVcblx0XHRcdC8vIHRvIGF2b2lkIHRyZWF0aW5nIGxlYWRpbmcgYW5kIHRyYWlsaW5nXG5cdFx0XHQvLyBzcGFjZXMgYXMgY29tYmluYXRvcnNcblx0XHRcdHZhciBpbnB1dCA9IFtdLFxuXHRcdFx0XHRyZXN1bHRzID0gW10sXG5cdFx0XHRcdG1hdGNoZXIgPSBjb21waWxlKCBzZWxlY3Rvci5yZXBsYWNlKCBydHJpbSwgXCIkMVwiICkgKTtcblxuXHRcdFx0cmV0dXJuIG1hdGNoZXJbIGV4cGFuZG8gXSA/XG5cdFx0XHRcdG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgbWF0Y2hlcywgY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdHZhciBlbGVtLFxuXHRcdFx0XHRcdFx0dW5tYXRjaGVkID0gbWF0Y2hlciggc2VlZCwgbnVsbCwgeG1sLCBbXSApLFxuXHRcdFx0XHRcdFx0aSA9IHNlZWQubGVuZ3RoO1xuXG5cdFx0XHRcdFx0Ly8gTWF0Y2ggZWxlbWVudHMgdW5tYXRjaGVkIGJ5IGBtYXRjaGVyYFxuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoZWxlbSA9IHVubWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdHNlZWRbaV0gPSAhKG1hdGNoZXNbaV0gPSBlbGVtKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0pIDpcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdFx0XHRpbnB1dFswXSA9IGVsZW07XG5cdFx0XHRcdFx0bWF0Y2hlciggaW5wdXQsIG51bGwsIHhtbCwgcmVzdWx0cyApO1xuXHRcdFx0XHRcdC8vIERvbid0IGtlZXAgdGhlIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cdFx0XHRcdFx0aW5wdXRbMF0gPSBudWxsO1xuXHRcdFx0XHRcdHJldHVybiAhcmVzdWx0cy5wb3AoKTtcblx0XHRcdFx0fTtcblx0XHR9KSxcblxuXHRcdFwiaGFzXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiBTaXp6bGUoIHNlbGVjdG9yLCBlbGVtICkubGVuZ3RoID4gMDtcblx0XHRcdH07XG5cdFx0fSksXG5cblx0XHRcImNvbnRhaW5zXCI6IG1hcmtGdW5jdGlvbihmdW5jdGlvbiggdGV4dCApIHtcblx0XHRcdHRleHQgPSB0ZXh0LnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHJldHVybiAoIGVsZW0udGV4dENvbnRlbnQgfHwgZWxlbS5pbm5lclRleHQgfHwgZ2V0VGV4dCggZWxlbSApICkuaW5kZXhPZiggdGV4dCApID4gLTE7XG5cdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0Ly8gXCJXaGV0aGVyIGFuIGVsZW1lbnQgaXMgcmVwcmVzZW50ZWQgYnkgYSA6bGFuZygpIHNlbGVjdG9yXG5cdFx0Ly8gaXMgYmFzZWQgc29sZWx5IG9uIHRoZSBlbGVtZW50J3MgbGFuZ3VhZ2UgdmFsdWVcblx0XHQvLyBiZWluZyBlcXVhbCB0byB0aGUgaWRlbnRpZmllciBDLFxuXHRcdC8vIG9yIGJlZ2lubmluZyB3aXRoIHRoZSBpZGVudGlmaWVyIEMgaW1tZWRpYXRlbHkgZm9sbG93ZWQgYnkgXCItXCIuXG5cdFx0Ly8gVGhlIG1hdGNoaW5nIG9mIEMgYWdhaW5zdCB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlIGlzIHBlcmZvcm1lZCBjYXNlLWluc2Vuc2l0aXZlbHkuXG5cdFx0Ly8gVGhlIGlkZW50aWZpZXIgQyBkb2VzIG5vdCBoYXZlIHRvIGJlIGEgdmFsaWQgbGFuZ3VhZ2UgbmFtZS5cIlxuXHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jbGFuZy1wc2V1ZG9cblx0XHRcImxhbmdcIjogbWFya0Z1bmN0aW9uKCBmdW5jdGlvbiggbGFuZyApIHtcblx0XHRcdC8vIGxhbmcgdmFsdWUgbXVzdCBiZSBhIHZhbGlkIGlkZW50aWZpZXJcblx0XHRcdGlmICggIXJpZGVudGlmaWVyLnRlc3QobGFuZyB8fCBcIlwiKSApIHtcblx0XHRcdFx0U2l6emxlLmVycm9yKCBcInVuc3VwcG9ydGVkIGxhbmc6IFwiICsgbGFuZyApO1xuXHRcdFx0fVxuXHRcdFx0bGFuZyA9IGxhbmcucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgZWxlbUxhbmc7XG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHRpZiAoIChlbGVtTGFuZyA9IGRvY3VtZW50SXNIVE1MID9cblx0XHRcdFx0XHRcdGVsZW0ubGFuZyA6XG5cdFx0XHRcdFx0XHRlbGVtLmdldEF0dHJpYnV0ZShcInhtbDpsYW5nXCIpIHx8IGVsZW0uZ2V0QXR0cmlidXRlKFwibGFuZ1wiKSkgKSB7XG5cblx0XHRcdFx0XHRcdGVsZW1MYW5nID0gZWxlbUxhbmcudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRcdHJldHVybiBlbGVtTGFuZyA9PT0gbGFuZyB8fCBlbGVtTGFuZy5pbmRleE9mKCBsYW5nICsgXCItXCIgKSA9PT0gMDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gd2hpbGUgKCAoZWxlbSA9IGVsZW0ucGFyZW50Tm9kZSkgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0Ly8gTWlzY2VsbGFuZW91c1xuXHRcdFwidGFyZ2V0XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIGhhc2ggPSB3aW5kb3cubG9jYXRpb24gJiYgd2luZG93LmxvY2F0aW9uLmhhc2g7XG5cdFx0XHRyZXR1cm4gaGFzaCAmJiBoYXNoLnNsaWNlKCAxICkgPT09IGVsZW0uaWQ7XG5cdFx0fSxcblxuXHRcdFwicm9vdFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBkb2NFbGVtO1xuXHRcdH0sXG5cblx0XHRcImZvY3VzXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQgJiYgKCFkb2N1bWVudC5oYXNGb2N1cyB8fCBkb2N1bWVudC5oYXNGb2N1cygpKSAmJiAhIShlbGVtLnR5cGUgfHwgZWxlbS5ocmVmIHx8IH5lbGVtLnRhYkluZGV4KTtcblx0XHR9LFxuXG5cdFx0Ly8gQm9vbGVhbiBwcm9wZXJ0aWVzXG5cdFx0XCJlbmFibGVkXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IGZhbHNlO1xuXHRcdH0sXG5cblx0XHRcImRpc2FibGVkXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0uZGlzYWJsZWQgPT09IHRydWU7XG5cdFx0fSxcblxuXHRcdFwiY2hlY2tlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdC8vIEluIENTUzMsIDpjaGVja2VkIHNob3VsZCByZXR1cm4gYm90aCBjaGVja2VkIGFuZCBzZWxlY3RlZCBlbGVtZW50c1xuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAxMS9SRUMtY3NzMy1zZWxlY3RvcnMtMjAxMTA5MjkvI2NoZWNrZWRcblx0XHRcdHZhciBub2RlTmFtZSA9IGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiAobm9kZU5hbWUgPT09IFwiaW5wdXRcIiAmJiAhIWVsZW0uY2hlY2tlZCkgfHwgKG5vZGVOYW1lID09PSBcIm9wdGlvblwiICYmICEhZWxlbS5zZWxlY3RlZCk7XG5cdFx0fSxcblxuXHRcdFwic2VsZWN0ZWRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHQvLyBBY2Nlc3NpbmcgdGhpcyBwcm9wZXJ0eSBtYWtlcyBzZWxlY3RlZC1ieS1kZWZhdWx0XG5cdFx0XHQvLyBvcHRpb25zIGluIFNhZmFyaSB3b3JrIHByb3Blcmx5XG5cdFx0XHRpZiAoIGVsZW0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0ZWxlbS5wYXJlbnROb2RlLnNlbGVjdGVkSW5kZXg7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBlbGVtLnNlbGVjdGVkID09PSB0cnVlO1xuXHRcdH0sXG5cblx0XHQvLyBDb250ZW50c1xuXHRcdFwiZW1wdHlcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2VtcHR5LXBzZXVkb1xuXHRcdFx0Ly8gOmVtcHR5IGlzIG5lZ2F0ZWQgYnkgZWxlbWVudCAoMSkgb3IgY29udGVudCBub2RlcyAodGV4dDogMzsgY2RhdGE6IDQ7IGVudGl0eSByZWY6IDUpLFxuXHRcdFx0Ly8gICBidXQgbm90IGJ5IG90aGVycyAoY29tbWVudDogODsgcHJvY2Vzc2luZyBpbnN0cnVjdGlvbjogNzsgZXRjLilcblx0XHRcdC8vIG5vZGVUeXBlIDwgNiB3b3JrcyBiZWNhdXNlIGF0dHJpYnV0ZXMgKDIpIGRvIG5vdCBhcHBlYXIgYXMgY2hpbGRyZW5cblx0XHRcdGZvciAoIGVsZW0gPSBlbGVtLmZpcnN0Q2hpbGQ7IGVsZW07IGVsZW0gPSBlbGVtLm5leHRTaWJsaW5nICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPCA2ICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSxcblxuXHRcdFwicGFyZW50XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICFFeHByLnBzZXVkb3NbXCJlbXB0eVwiXSggZWxlbSApO1xuXHRcdH0sXG5cblx0XHQvLyBFbGVtZW50L2lucHV0IHR5cGVzXG5cdFx0XCJoZWFkZXJcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gcmhlYWRlci50ZXN0KCBlbGVtLm5vZGVOYW1lICk7XG5cdFx0fSxcblxuXHRcdFwiaW5wdXRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gcmlucHV0cy50ZXN0KCBlbGVtLm5vZGVOYW1lICk7XG5cdFx0fSxcblxuXHRcdFwiYnV0dG9uXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gbmFtZSA9PT0gXCJpbnB1dFwiICYmIGVsZW0udHlwZSA9PT0gXCJidXR0b25cIiB8fCBuYW1lID09PSBcImJ1dHRvblwiO1xuXHRcdH0sXG5cblx0XHRcInRleHRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHR2YXIgYXR0cjtcblx0XHRcdHJldHVybiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiAmJlxuXHRcdFx0XHRlbGVtLnR5cGUgPT09IFwidGV4dFwiICYmXG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogSUU8OFxuXHRcdFx0XHQvLyBOZXcgSFRNTDUgYXR0cmlidXRlIHZhbHVlcyAoZS5nLiwgXCJzZWFyY2hcIikgYXBwZWFyIHdpdGggZWxlbS50eXBlID09PSBcInRleHRcIlxuXHRcdFx0XHQoIChhdHRyID0gZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSA9PSBudWxsIHx8IGF0dHIudG9Mb3dlckNhc2UoKSA9PT0gXCJ0ZXh0XCIgKTtcblx0XHR9LFxuXG5cdFx0Ly8gUG9zaXRpb24taW4tY29sbGVjdGlvblxuXHRcdFwiZmlyc3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBbIDAgXTtcblx0XHR9KSxcblxuXHRcdFwibGFzdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHJldHVybiBbIGxlbmd0aCAtIDEgXTtcblx0XHR9KSxcblxuXHRcdFwiZXFcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0cmV0dXJuIFsgYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudCBdO1xuXHRcdH0pLFxuXG5cdFx0XCJldmVuXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0pLFxuXG5cdFx0XCJvZGRcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHR2YXIgaSA9IDE7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkgKz0gMiApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSksXG5cblx0XHRcImx0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcblx0XHRcdHZhciBpID0gYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudDtcblx0XHRcdGZvciAoIDsgLS1pID49IDA7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KSxcblxuXHRcdFwiZ3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGgsIGFyZ3VtZW50ICkge1xuXHRcdFx0dmFyIGkgPSBhcmd1bWVudCA8IDAgPyBhcmd1bWVudCArIGxlbmd0aCA6IGFyZ3VtZW50O1xuXHRcdFx0Zm9yICggOyArK2kgPCBsZW5ndGg7ICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KVxuXHR9XG59O1xuXG5FeHByLnBzZXVkb3NbXCJudGhcIl0gPSBFeHByLnBzZXVkb3NbXCJlcVwiXTtcblxuLy8gQWRkIGJ1dHRvbi9pbnB1dCB0eXBlIHBzZXVkb3NcbmZvciAoIGkgaW4geyByYWRpbzogdHJ1ZSwgY2hlY2tib3g6IHRydWUsIGZpbGU6IHRydWUsIHBhc3N3b3JkOiB0cnVlLCBpbWFnZTogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUlucHV0UHNldWRvKCBpICk7XG59XG5mb3IgKCBpIGluIHsgc3VibWl0OiB0cnVlLCByZXNldDogdHJ1ZSB9ICkge1xuXHRFeHByLnBzZXVkb3NbIGkgXSA9IGNyZWF0ZUJ1dHRvblBzZXVkbyggaSApO1xufVxuXG4vLyBFYXN5IEFQSSBmb3IgY3JlYXRpbmcgbmV3IHNldEZpbHRlcnNcbmZ1bmN0aW9uIHNldEZpbHRlcnMoKSB7fVxuc2V0RmlsdGVycy5wcm90b3R5cGUgPSBFeHByLmZpbHRlcnMgPSBFeHByLnBzZXVkb3M7XG5FeHByLnNldEZpbHRlcnMgPSBuZXcgc2V0RmlsdGVycygpO1xuXG50b2tlbml6ZSA9IFNpenpsZS50b2tlbml6ZSA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgcGFyc2VPbmx5ICkge1xuXHR2YXIgbWF0Y2hlZCwgbWF0Y2gsIHRva2VucywgdHlwZSxcblx0XHRzb0ZhciwgZ3JvdXBzLCBwcmVGaWx0ZXJzLFxuXHRcdGNhY2hlZCA9IHRva2VuQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXTtcblxuXHRpZiAoIGNhY2hlZCApIHtcblx0XHRyZXR1cm4gcGFyc2VPbmx5ID8gMCA6IGNhY2hlZC5zbGljZSggMCApO1xuXHR9XG5cblx0c29GYXIgPSBzZWxlY3Rvcjtcblx0Z3JvdXBzID0gW107XG5cdHByZUZpbHRlcnMgPSBFeHByLnByZUZpbHRlcjtcblxuXHR3aGlsZSAoIHNvRmFyICkge1xuXG5cdFx0Ly8gQ29tbWEgYW5kIGZpcnN0IHJ1blxuXHRcdGlmICggIW1hdGNoZWQgfHwgKG1hdGNoID0gcmNvbW1hLmV4ZWMoIHNvRmFyICkpICkge1xuXHRcdFx0aWYgKCBtYXRjaCApIHtcblx0XHRcdFx0Ly8gRG9uJ3QgY29uc3VtZSB0cmFpbGluZyBjb21tYXMgYXMgdmFsaWRcblx0XHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hbMF0ubGVuZ3RoICkgfHwgc29GYXI7XG5cdFx0XHR9XG5cdFx0XHRncm91cHMucHVzaCggKHRva2VucyA9IFtdKSApO1xuXHRcdH1cblxuXHRcdG1hdGNoZWQgPSBmYWxzZTtcblxuXHRcdC8vIENvbWJpbmF0b3JzXG5cdFx0aWYgKCAobWF0Y2ggPSByY29tYmluYXRvcnMuZXhlYyggc29GYXIgKSkgKSB7XG5cdFx0XHRtYXRjaGVkID0gbWF0Y2guc2hpZnQoKTtcblx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXG5cdFx0XHRcdC8vIENhc3QgZGVzY2VuZGFudCBjb21iaW5hdG9ycyB0byBzcGFjZVxuXHRcdFx0XHR0eXBlOiBtYXRjaFswXS5yZXBsYWNlKCBydHJpbSwgXCIgXCIgKVxuXHRcdFx0fSk7XG5cdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xuXHRcdH1cblxuXHRcdC8vIEZpbHRlcnNcblx0XHRmb3IgKCB0eXBlIGluIEV4cHIuZmlsdGVyICkge1xuXHRcdFx0aWYgKCAobWF0Y2ggPSBtYXRjaEV4cHJbIHR5cGUgXS5leGVjKCBzb0ZhciApKSAmJiAoIXByZUZpbHRlcnNbIHR5cGUgXSB8fFxuXHRcdFx0XHQobWF0Y2ggPSBwcmVGaWx0ZXJzWyB0eXBlIF0oIG1hdGNoICkpKSApIHtcblx0XHRcdFx0bWF0Y2hlZCA9IG1hdGNoLnNoaWZ0KCk7XG5cdFx0XHRcdHRva2Vucy5wdXNoKHtcblx0XHRcdFx0XHR2YWx1ZTogbWF0Y2hlZCxcblx0XHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRcdG1hdGNoZXM6IG1hdGNoXG5cdFx0XHRcdH0pO1xuXHRcdFx0XHRzb0ZhciA9IHNvRmFyLnNsaWNlKCBtYXRjaGVkLmxlbmd0aCApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggIW1hdGNoZWQgKSB7XG5cdFx0XHRicmVhaztcblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIGxlbmd0aCBvZiB0aGUgaW52YWxpZCBleGNlc3Ncblx0Ly8gaWYgd2UncmUganVzdCBwYXJzaW5nXG5cdC8vIE90aGVyd2lzZSwgdGhyb3cgYW4gZXJyb3Igb3IgcmV0dXJuIHRva2Vuc1xuXHRyZXR1cm4gcGFyc2VPbmx5ID9cblx0XHRzb0Zhci5sZW5ndGggOlxuXHRcdHNvRmFyID9cblx0XHRcdFNpenpsZS5lcnJvciggc2VsZWN0b3IgKSA6XG5cdFx0XHQvLyBDYWNoZSB0aGUgdG9rZW5zXG5cdFx0XHR0b2tlbkNhY2hlKCBzZWxlY3RvciwgZ3JvdXBzICkuc2xpY2UoIDAgKTtcbn07XG5cbmZ1bmN0aW9uIHRvU2VsZWN0b3IoIHRva2VucyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IHRva2Vucy5sZW5ndGgsXG5cdFx0c2VsZWN0b3IgPSBcIlwiO1xuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRzZWxlY3RvciArPSB0b2tlbnNbaV0udmFsdWU7XG5cdH1cblx0cmV0dXJuIHNlbGVjdG9yO1xufVxuXG5mdW5jdGlvbiBhZGRDb21iaW5hdG9yKCBtYXRjaGVyLCBjb21iaW5hdG9yLCBiYXNlICkge1xuXHR2YXIgZGlyID0gY29tYmluYXRvci5kaXIsXG5cdFx0Y2hlY2tOb25FbGVtZW50cyA9IGJhc2UgJiYgZGlyID09PSBcInBhcmVudE5vZGVcIixcblx0XHRkb25lTmFtZSA9IGRvbmUrKztcblxuXHRyZXR1cm4gY29tYmluYXRvci5maXJzdCA/XG5cdFx0Ly8gQ2hlY2sgYWdhaW5zdCBjbG9zZXN0IGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50XG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHdoaWxlICggKGVsZW0gPSBlbGVtWyBkaXIgXSkgKSB7XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBjaGVja05vbkVsZW1lbnRzICkge1xuXHRcdFx0XHRcdHJldHVybiBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gOlxuXG5cdFx0Ly8gQ2hlY2sgYWdhaW5zdCBhbGwgYW5jZXN0b3IvcHJlY2VkaW5nIGVsZW1lbnRzXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHZhciBvbGRDYWNoZSwgb3V0ZXJDYWNoZSxcblx0XHRcdFx0bmV3Q2FjaGUgPSBbIGRpcnJ1bnMsIGRvbmVOYW1lIF07XG5cblx0XHRcdC8vIFdlIGNhbid0IHNldCBhcmJpdHJhcnkgZGF0YSBvbiBYTUwgbm9kZXMsIHNvIHRoZXkgZG9uJ3QgYmVuZWZpdCBmcm9tIGRpciBjYWNoaW5nXG5cdFx0XHRpZiAoIHhtbCApIHtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSApIHtcblx0XHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBlbGVtWyBleHBhbmRvIF0gfHwgKGVsZW1bIGV4cGFuZG8gXSA9IHt9KTtcblx0XHRcdFx0XHRcdGlmICggKG9sZENhY2hlID0gb3V0ZXJDYWNoZVsgZGlyIF0pICYmXG5cdFx0XHRcdFx0XHRcdG9sZENhY2hlWyAwIF0gPT09IGRpcnJ1bnMgJiYgb2xkQ2FjaGVbIDEgXSA9PT0gZG9uZU5hbWUgKSB7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQXNzaWduIHRvIG5ld0NhY2hlIHNvIHJlc3VsdHMgYmFjay1wcm9wYWdhdGUgdG8gcHJldmlvdXMgZWxlbWVudHNcblx0XHRcdFx0XHRcdFx0cmV0dXJuIChuZXdDYWNoZVsgMiBdID0gb2xkQ2FjaGVbIDIgXSk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBSZXVzZSBuZXdjYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGVbIGRpciBdID0gbmV3Q2FjaGU7XG5cblx0XHRcdFx0XHRcdFx0Ly8gQSBtYXRjaCBtZWFucyB3ZSdyZSBkb25lOyBhIGZhaWwgbWVhbnMgd2UgaGF2ZSB0byBrZWVwIGNoZWNraW5nXG5cdFx0XHRcdFx0XHRcdGlmICggKG5ld0NhY2hlWyAyIF0gPSBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xufVxuXG5mdW5jdGlvbiBlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSB7XG5cdHJldHVybiBtYXRjaGVycy5sZW5ndGggPiAxID9cblx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIGkgPSBtYXRjaGVycy5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAhbWF0Y2hlcnNbaV0oIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fSA6XG5cdFx0bWF0Y2hlcnNbMF07XG59XG5cbmZ1bmN0aW9uIG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yLCBjb250ZXh0cywgcmVzdWx0cyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGNvbnRleHRzLmxlbmd0aDtcblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0U2l6emxlKCBzZWxlY3RvciwgY29udGV4dHNbaV0sIHJlc3VsdHMgKTtcblx0fVxuXHRyZXR1cm4gcmVzdWx0cztcbn1cblxuZnVuY3Rpb24gY29uZGVuc2UoIHVubWF0Y2hlZCwgbWFwLCBmaWx0ZXIsIGNvbnRleHQsIHhtbCApIHtcblx0dmFyIGVsZW0sXG5cdFx0bmV3VW5tYXRjaGVkID0gW10sXG5cdFx0aSA9IDAsXG5cdFx0bGVuID0gdW5tYXRjaGVkLmxlbmd0aCxcblx0XHRtYXBwZWQgPSBtYXAgIT0gbnVsbDtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoIChlbGVtID0gdW5tYXRjaGVkW2ldKSApIHtcblx0XHRcdGlmICggIWZpbHRlciB8fCBmaWx0ZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRuZXdVbm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRpZiAoIG1hcHBlZCApIHtcblx0XHRcdFx0XHRtYXAucHVzaCggaSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG5ld1VubWF0Y2hlZDtcbn1cblxuZnVuY3Rpb24gc2V0TWF0Y2hlciggcHJlRmlsdGVyLCBzZWxlY3RvciwgbWF0Y2hlciwgcG9zdEZpbHRlciwgcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICkge1xuXHRpZiAoIHBvc3RGaWx0ZXIgJiYgIXBvc3RGaWx0ZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmlsdGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbHRlciApO1xuXHR9XG5cdGlmICggcG9zdEZpbmRlciAmJiAhcG9zdEZpbmRlclsgZXhwYW5kbyBdICkge1xuXHRcdHBvc3RGaW5kZXIgPSBzZXRNYXRjaGVyKCBwb3N0RmluZGVyLCBwb3N0U2VsZWN0b3IgKTtcblx0fVxuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCByZXN1bHRzLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0dmFyIHRlbXAsIGksIGVsZW0sXG5cdFx0XHRwcmVNYXAgPSBbXSxcblx0XHRcdHBvc3RNYXAgPSBbXSxcblx0XHRcdHByZWV4aXN0aW5nID0gcmVzdWx0cy5sZW5ndGgsXG5cblx0XHRcdC8vIEdldCBpbml0aWFsIGVsZW1lbnRzIGZyb20gc2VlZCBvciBjb250ZXh0XG5cdFx0XHRlbGVtcyA9IHNlZWQgfHwgbXVsdGlwbGVDb250ZXh0cyggc2VsZWN0b3IgfHwgXCIqXCIsIGNvbnRleHQubm9kZVR5cGUgPyBbIGNvbnRleHQgXSA6IGNvbnRleHQsIFtdICksXG5cblx0XHRcdC8vIFByZWZpbHRlciB0byBnZXQgbWF0Y2hlciBpbnB1dCwgcHJlc2VydmluZyBhIG1hcCBmb3Igc2VlZC1yZXN1bHRzIHN5bmNocm9uaXphdGlvblxuXHRcdFx0bWF0Y2hlckluID0gcHJlRmlsdGVyICYmICggc2VlZCB8fCAhc2VsZWN0b3IgKSA/XG5cdFx0XHRcdGNvbmRlbnNlKCBlbGVtcywgcHJlTWFwLCBwcmVGaWx0ZXIsIGNvbnRleHQsIHhtbCApIDpcblx0XHRcdFx0ZWxlbXMsXG5cblx0XHRcdG1hdGNoZXJPdXQgPSBtYXRjaGVyID9cblx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBhIHBvc3RGaW5kZXIsIG9yIGZpbHRlcmVkIHNlZWQsIG9yIG5vbi1zZWVkIHBvc3RGaWx0ZXIgb3IgcHJlZXhpc3RpbmcgcmVzdWx0cyxcblx0XHRcdFx0cG9zdEZpbmRlciB8fCAoIHNlZWQgPyBwcmVGaWx0ZXIgOiBwcmVleGlzdGluZyB8fCBwb3N0RmlsdGVyICkgP1xuXG5cdFx0XHRcdFx0Ly8gLi4uaW50ZXJtZWRpYXRlIHByb2Nlc3NpbmcgaXMgbmVjZXNzYXJ5XG5cdFx0XHRcdFx0W10gOlxuXG5cdFx0XHRcdFx0Ly8gLi4ub3RoZXJ3aXNlIHVzZSByZXN1bHRzIGRpcmVjdGx5XG5cdFx0XHRcdFx0cmVzdWx0cyA6XG5cdFx0XHRcdG1hdGNoZXJJbjtcblxuXHRcdC8vIEZpbmQgcHJpbWFyeSBtYXRjaGVzXG5cdFx0aWYgKCBtYXRjaGVyICkge1xuXHRcdFx0bWF0Y2hlciggbWF0Y2hlckluLCBtYXRjaGVyT3V0LCBjb250ZXh0LCB4bWwgKTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSBwb3N0RmlsdGVyXG5cdFx0aWYgKCBwb3N0RmlsdGVyICkge1xuXHRcdFx0dGVtcCA9IGNvbmRlbnNlKCBtYXRjaGVyT3V0LCBwb3N0TWFwICk7XG5cdFx0XHRwb3N0RmlsdGVyKCB0ZW1wLCBbXSwgY29udGV4dCwgeG1sICk7XG5cblx0XHRcdC8vIFVuLW1hdGNoIGZhaWxpbmcgZWxlbWVudHMgYnkgbW92aW5nIHRoZW0gYmFjayB0byBtYXRjaGVySW5cblx0XHRcdGkgPSB0ZW1wLmxlbmd0aDtcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoIChlbGVtID0gdGVtcFtpXSkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlck91dFsgcG9zdE1hcFtpXSBdID0gIShtYXRjaGVySW5bIHBvc3RNYXBbaV0gXSA9IGVsZW0pO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWVkICkge1xuXHRcdFx0aWYgKCBwb3N0RmluZGVyIHx8IHByZUZpbHRlciApIHtcblx0XHRcdFx0aWYgKCBwb3N0RmluZGVyICkge1xuXHRcdFx0XHRcdC8vIEdldCB0aGUgZmluYWwgbWF0Y2hlck91dCBieSBjb25kZW5zaW5nIHRoaXMgaW50ZXJtZWRpYXRlIGludG8gcG9zdEZpbmRlciBjb250ZXh0c1xuXHRcdFx0XHRcdHRlbXAgPSBbXTtcblx0XHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRpZiAoIChlbGVtID0gbWF0Y2hlck91dFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFJlc3RvcmUgbWF0Y2hlckluIHNpbmNlIGVsZW0gaXMgbm90IHlldCBhIGZpbmFsIG1hdGNoXG5cdFx0XHRcdFx0XHRcdHRlbXAucHVzaCggKG1hdGNoZXJJbltpXSA9IGVsZW0pICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHBvc3RGaW5kZXIoIG51bGwsIChtYXRjaGVyT3V0ID0gW10pLCB0ZW1wLCB4bWwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE1vdmUgbWF0Y2hlZCBlbGVtZW50cyBmcm9tIHNlZWQgdG8gcmVzdWx0cyB0byBrZWVwIHRoZW0gc3luY2hyb25pemVkXG5cdFx0XHRcdGkgPSBtYXRjaGVyT3V0Lmxlbmd0aDtcblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0aWYgKCAoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICYmXG5cdFx0XHRcdFx0XHQodGVtcCA9IHBvc3RGaW5kZXIgPyBpbmRleE9mKCBzZWVkLCBlbGVtICkgOiBwcmVNYXBbaV0pID4gLTEgKSB7XG5cblx0XHRcdFx0XHRcdHNlZWRbdGVtcF0gPSAhKHJlc3VsdHNbdGVtcF0gPSBlbGVtKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdC8vIEFkZCBlbGVtZW50cyB0byByZXN1bHRzLCB0aHJvdWdoIHBvc3RGaW5kZXIgaWYgZGVmaW5lZFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRtYXRjaGVyT3V0ID0gY29uZGVuc2UoXG5cdFx0XHRcdG1hdGNoZXJPdXQgPT09IHJlc3VsdHMgP1xuXHRcdFx0XHRcdG1hdGNoZXJPdXQuc3BsaWNlKCBwcmVleGlzdGluZywgbWF0Y2hlck91dC5sZW5ndGggKSA6XG5cdFx0XHRcdFx0bWF0Y2hlck91dFxuXHRcdFx0KTtcblx0XHRcdGlmICggcG9zdEZpbmRlciApIHtcblx0XHRcdFx0cG9zdEZpbmRlciggbnVsbCwgcmVzdWx0cywgbWF0Y2hlck91dCwgeG1sICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBtYXRjaGVyT3V0ICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9KTtcbn1cblxuZnVuY3Rpb24gbWF0Y2hlckZyb21Ub2tlbnMoIHRva2VucyApIHtcblx0dmFyIGNoZWNrQ29udGV4dCwgbWF0Y2hlciwgaixcblx0XHRsZW4gPSB0b2tlbnMubGVuZ3RoLFxuXHRcdGxlYWRpbmdSZWxhdGl2ZSA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1swXS50eXBlIF0sXG5cdFx0aW1wbGljaXRSZWxhdGl2ZSA9IGxlYWRpbmdSZWxhdGl2ZSB8fCBFeHByLnJlbGF0aXZlW1wiIFwiXSxcblx0XHRpID0gbGVhZGluZ1JlbGF0aXZlID8gMSA6IDAsXG5cblx0XHQvLyBUaGUgZm91bmRhdGlvbmFsIG1hdGNoZXIgZW5zdXJlcyB0aGF0IGVsZW1lbnRzIGFyZSByZWFjaGFibGUgZnJvbSB0b3AtbGV2ZWwgY29udGV4dChzKVxuXHRcdG1hdGNoQ29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGVsZW0gPT09IGNoZWNrQ29udGV4dDtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hBbnlDb250ZXh0ID0gYWRkQ29tYmluYXRvciggZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gaW5kZXhPZiggY2hlY2tDb250ZXh0LCBlbGVtICkgPiAtMTtcblx0XHR9LCBpbXBsaWNpdFJlbGF0aXZlLCB0cnVlICksXG5cdFx0bWF0Y2hlcnMgPSBbIGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgcmV0ID0gKCAhbGVhZGluZ1JlbGF0aXZlICYmICggeG1sIHx8IGNvbnRleHQgIT09IG91dGVybW9zdENvbnRleHQgKSApIHx8IChcblx0XHRcdFx0KGNoZWNrQ29udGV4dCA9IGNvbnRleHQpLm5vZGVUeXBlID9cblx0XHRcdFx0XHRtYXRjaENvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApIDpcblx0XHRcdFx0XHRtYXRjaEFueUNvbnRleHQoIGVsZW0sIGNvbnRleHQsIHhtbCApICk7XG5cdFx0XHQvLyBBdm9pZCBoYW5naW5nIG9udG8gZWxlbWVudCAoaXNzdWUgIzI5OSlcblx0XHRcdGNoZWNrQ29udGV4dCA9IG51bGw7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH0gXTtcblxuXHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRpZiAoIChtYXRjaGVyID0gRXhwci5yZWxhdGl2ZVsgdG9rZW5zW2ldLnR5cGUgXSkgKSB7XG5cdFx0XHRtYXRjaGVycyA9IFsgYWRkQ29tYmluYXRvcihlbGVtZW50TWF0Y2hlciggbWF0Y2hlcnMgKSwgbWF0Y2hlcikgXTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlciA9IEV4cHIuZmlsdGVyWyB0b2tlbnNbaV0udHlwZSBdLmFwcGx5KCBudWxsLCB0b2tlbnNbaV0ubWF0Y2hlcyApO1xuXG5cdFx0XHQvLyBSZXR1cm4gc3BlY2lhbCB1cG9uIHNlZWluZyBhIHBvc2l0aW9uYWwgbWF0Y2hlclxuXHRcdFx0aWYgKCBtYXRjaGVyWyBleHBhbmRvIF0gKSB7XG5cdFx0XHRcdC8vIEZpbmQgdGhlIG5leHQgcmVsYXRpdmUgb3BlcmF0b3IgKGlmIGFueSkgZm9yIHByb3BlciBoYW5kbGluZ1xuXHRcdFx0XHRqID0gKytpO1xuXHRcdFx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdFx0XHRpZiAoIEV4cHIucmVsYXRpdmVbIHRva2Vuc1tqXS50eXBlIF0gKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHNldE1hdGNoZXIoXG5cdFx0XHRcdFx0aSA+IDEgJiYgZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksXG5cdFx0XHRcdFx0aSA+IDEgJiYgdG9TZWxlY3Rvcihcblx0XHRcdFx0XHRcdC8vIElmIHRoZSBwcmVjZWRpbmcgdG9rZW4gd2FzIGEgZGVzY2VuZGFudCBjb21iaW5hdG9yLCBpbnNlcnQgYW4gaW1wbGljaXQgYW55LWVsZW1lbnQgYCpgXG5cdFx0XHRcdFx0XHR0b2tlbnMuc2xpY2UoIDAsIGkgLSAxICkuY29uY2F0KHsgdmFsdWU6IHRva2Vuc1sgaSAtIDIgXS50eXBlID09PSBcIiBcIiA/IFwiKlwiIDogXCJcIiB9KVxuXHRcdFx0XHRcdCkucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApLFxuXHRcdFx0XHRcdG1hdGNoZXIsXG5cdFx0XHRcdFx0aSA8IGogJiYgbWF0Y2hlckZyb21Ub2tlbnMoIHRva2Vucy5zbGljZSggaSwgaiApICksXG5cdFx0XHRcdFx0aiA8IGxlbiAmJiBtYXRjaGVyRnJvbVRva2VucyggKHRva2VucyA9IHRva2Vucy5zbGljZSggaiApKSApLFxuXHRcdFx0XHRcdGogPCBsZW4gJiYgdG9TZWxlY3RvciggdG9rZW5zIClcblx0XHRcdFx0KTtcblx0XHRcdH1cblx0XHRcdG1hdGNoZXJzLnB1c2goIG1hdGNoZXIgKTtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyggZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycyApIHtcblx0dmFyIGJ5U2V0ID0gc2V0TWF0Y2hlcnMubGVuZ3RoID4gMCxcblx0XHRieUVsZW1lbnQgPSBlbGVtZW50TWF0Y2hlcnMubGVuZ3RoID4gMCxcblx0XHRzdXBlck1hdGNoZXIgPSBmdW5jdGlvbiggc2VlZCwgY29udGV4dCwgeG1sLCByZXN1bHRzLCBvdXRlcm1vc3QgKSB7XG5cdFx0XHR2YXIgZWxlbSwgaiwgbWF0Y2hlcixcblx0XHRcdFx0bWF0Y2hlZENvdW50ID0gMCxcblx0XHRcdFx0aSA9IFwiMFwiLFxuXHRcdFx0XHR1bm1hdGNoZWQgPSBzZWVkICYmIFtdLFxuXHRcdFx0XHRzZXRNYXRjaGVkID0gW10sXG5cdFx0XHRcdGNvbnRleHRCYWNrdXAgPSBvdXRlcm1vc3RDb250ZXh0LFxuXHRcdFx0XHQvLyBXZSBtdXN0IGFsd2F5cyBoYXZlIGVpdGhlciBzZWVkIGVsZW1lbnRzIG9yIG91dGVybW9zdCBjb250ZXh0XG5cdFx0XHRcdGVsZW1zID0gc2VlZCB8fCBieUVsZW1lbnQgJiYgRXhwci5maW5kW1wiVEFHXCJdKCBcIipcIiwgb3V0ZXJtb3N0ICksXG5cdFx0XHRcdC8vIFVzZSBpbnRlZ2VyIGRpcnJ1bnMgaWZmIHRoaXMgaXMgdGhlIG91dGVybW9zdCBtYXRjaGVyXG5cdFx0XHRcdGRpcnJ1bnNVbmlxdWUgPSAoZGlycnVucyArPSBjb250ZXh0QmFja3VwID09IG51bGwgPyAxIDogTWF0aC5yYW5kb20oKSB8fCAwLjEpLFxuXHRcdFx0XHRsZW4gPSBlbGVtcy5sZW5ndGg7XG5cblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dCAhPT0gZG9jdW1lbnQgJiYgY29udGV4dDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGVsZW1lbnRzIHBhc3NpbmcgZWxlbWVudE1hdGNoZXJzIGRpcmVjdGx5IHRvIHJlc3VsdHNcblx0XHRcdC8vIEtlZXAgYGlgIGEgc3RyaW5nIGlmIHRoZXJlIGFyZSBubyBlbGVtZW50cyBzbyBgbWF0Y2hlZENvdW50YCB3aWxsIGJlIFwiMDBcIiBiZWxvd1xuXHRcdFx0Ly8gU3VwcG9ydDogSUU8OSwgU2FmYXJpXG5cdFx0XHQvLyBUb2xlcmF0ZSBOb2RlTGlzdCBwcm9wZXJ0aWVzIChJRTogXCJsZW5ndGhcIjsgU2FmYXJpOiA8bnVtYmVyPikgbWF0Y2hpbmcgZWxlbWVudHMgYnkgaWRcblx0XHRcdGZvciAoIDsgaSAhPT0gbGVuICYmIChlbGVtID0gZWxlbXNbaV0pICE9IG51bGw7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBieUVsZW1lbnQgJiYgZWxlbSApIHtcblx0XHRcdFx0XHRqID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoIChtYXRjaGVyID0gZWxlbWVudE1hdGNoZXJzW2orK10pICkge1xuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0XHRcdGRpcnJ1bnMgPSBkaXJydW5zVW5pcXVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFRyYWNrIHVubWF0Y2hlZCBlbGVtZW50cyBmb3Igc2V0IGZpbHRlcnNcblx0XHRcdFx0aWYgKCBieVNldCApIHtcblx0XHRcdFx0XHQvLyBUaGV5IHdpbGwgaGF2ZSBnb25lIHRocm91Z2ggYWxsIHBvc3NpYmxlIG1hdGNoZXJzXG5cdFx0XHRcdFx0aWYgKCAoZWxlbSA9ICFtYXRjaGVyICYmIGVsZW0pICkge1xuXHRcdFx0XHRcdFx0bWF0Y2hlZENvdW50LS07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gTGVuZ3RoZW4gdGhlIGFycmF5IGZvciBldmVyeSBlbGVtZW50LCBtYXRjaGVkIG9yIG5vdFxuXHRcdFx0XHRcdGlmICggc2VlZCApIHtcblx0XHRcdFx0XHRcdHVubWF0Y2hlZC5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFwcGx5IHNldCBmaWx0ZXJzIHRvIHVubWF0Y2hlZCBlbGVtZW50c1xuXHRcdFx0bWF0Y2hlZENvdW50ICs9IGk7XG5cdFx0XHRpZiAoIGJ5U2V0ICYmIGkgIT09IG1hdGNoZWRDb3VudCApIHtcblx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdHdoaWxlICggKG1hdGNoZXIgPSBzZXRNYXRjaGVyc1tqKytdKSApIHtcblx0XHRcdFx0XHRtYXRjaGVyKCB1bm1hdGNoZWQsIHNldE1hdGNoZWQsIGNvbnRleHQsIHhtbCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBzZWVkICkge1xuXHRcdFx0XHRcdC8vIFJlaW50ZWdyYXRlIGVsZW1lbnQgbWF0Y2hlcyB0byBlbGltaW5hdGUgdGhlIG5lZWQgZm9yIHNvcnRpbmdcblx0XHRcdFx0XHRpZiAoIG1hdGNoZWRDb3VudCA+IDAgKSB7XG5cdFx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCAhKHVubWF0Y2hlZFtpXSB8fCBzZXRNYXRjaGVkW2ldKSApIHtcblx0XHRcdFx0XHRcdFx0XHRzZXRNYXRjaGVkW2ldID0gcG9wLmNhbGwoIHJlc3VsdHMgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIERpc2NhcmQgaW5kZXggcGxhY2Vob2xkZXIgdmFsdWVzIHRvIGdldCBvbmx5IGFjdHVhbCBtYXRjaGVzXG5cdFx0XHRcdFx0c2V0TWF0Y2hlZCA9IGNvbmRlbnNlKCBzZXRNYXRjaGVkICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBZGQgbWF0Y2hlcyB0byByZXN1bHRzXG5cdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIHNldE1hdGNoZWQgKTtcblxuXHRcdFx0XHQvLyBTZWVkbGVzcyBzZXQgbWF0Y2hlcyBzdWNjZWVkaW5nIG11bHRpcGxlIHN1Y2Nlc3NmdWwgbWF0Y2hlcnMgc3RpcHVsYXRlIHNvcnRpbmdcblx0XHRcdFx0aWYgKCBvdXRlcm1vc3QgJiYgIXNlZWQgJiYgc2V0TWF0Y2hlZC5sZW5ndGggPiAwICYmXG5cdFx0XHRcdFx0KCBtYXRjaGVkQ291bnQgKyBzZXRNYXRjaGVycy5sZW5ndGggKSA+IDEgKSB7XG5cblx0XHRcdFx0XHRTaXp6bGUudW5pcXVlU29ydCggcmVzdWx0cyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIE92ZXJyaWRlIG1hbmlwdWxhdGlvbiBvZiBnbG9iYWxzIGJ5IG5lc3RlZCBtYXRjaGVyc1xuXHRcdFx0aWYgKCBvdXRlcm1vc3QgKSB7XG5cdFx0XHRcdGRpcnJ1bnMgPSBkaXJydW5zVW5pcXVlO1xuXHRcdFx0XHRvdXRlcm1vc3RDb250ZXh0ID0gY29udGV4dEJhY2t1cDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHVubWF0Y2hlZDtcblx0XHR9O1xuXG5cdHJldHVybiBieVNldCA/XG5cdFx0bWFya0Z1bmN0aW9uKCBzdXBlck1hdGNoZXIgKSA6XG5cdFx0c3VwZXJNYXRjaGVyO1xufVxuXG5jb21waWxlID0gU2l6emxlLmNvbXBpbGUgPSBmdW5jdGlvbiggc2VsZWN0b3IsIG1hdGNoIC8qIEludGVybmFsIFVzZSBPbmx5ICovICkge1xuXHR2YXIgaSxcblx0XHRzZXRNYXRjaGVycyA9IFtdLFxuXHRcdGVsZW1lbnRNYXRjaGVycyA9IFtdLFxuXHRcdGNhY2hlZCA9IGNvbXBpbGVyQ2FjaGVbIHNlbGVjdG9yICsgXCIgXCIgXTtcblxuXHRpZiAoICFjYWNoZWQgKSB7XG5cdFx0Ly8gR2VuZXJhdGUgYSBmdW5jdGlvbiBvZiByZWN1cnNpdmUgZnVuY3Rpb25zIHRoYXQgY2FuIGJlIHVzZWQgdG8gY2hlY2sgZWFjaCBlbGVtZW50XG5cdFx0aWYgKCAhbWF0Y2ggKSB7XG5cdFx0XHRtYXRjaCA9IHRva2VuaXplKCBzZWxlY3RvciApO1xuXHRcdH1cblx0XHRpID0gbWF0Y2gubGVuZ3RoO1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0Y2FjaGVkID0gbWF0Y2hlckZyb21Ub2tlbnMoIG1hdGNoW2ldICk7XG5cdFx0XHRpZiAoIGNhY2hlZFsgZXhwYW5kbyBdICkge1xuXHRcdFx0XHRzZXRNYXRjaGVycy5wdXNoKCBjYWNoZWQgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1lbnRNYXRjaGVycy5wdXNoKCBjYWNoZWQgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWNoZSB0aGUgY29tcGlsZWQgZnVuY3Rpb25cblx0XHRjYWNoZWQgPSBjb21waWxlckNhY2hlKCBzZWxlY3RvciwgbWF0Y2hlckZyb21Hcm91cE1hdGNoZXJzKCBlbGVtZW50TWF0Y2hlcnMsIHNldE1hdGNoZXJzICkgKTtcblxuXHRcdC8vIFNhdmUgc2VsZWN0b3IgYW5kIHRva2VuaXphdGlvblxuXHRcdGNhY2hlZC5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXHR9XG5cdHJldHVybiBjYWNoZWQ7XG59O1xuXG4vKipcbiAqIEEgbG93LWxldmVsIHNlbGVjdGlvbiBmdW5jdGlvbiB0aGF0IHdvcmtzIHdpdGggU2l6emxlJ3MgY29tcGlsZWRcbiAqICBzZWxlY3RvciBmdW5jdGlvbnNcbiAqIEBwYXJhbSB7U3RyaW5nfEZ1bmN0aW9ufSBzZWxlY3RvciBBIHNlbGVjdG9yIG9yIGEgcHJlLWNvbXBpbGVkXG4gKiAgc2VsZWN0b3IgZnVuY3Rpb24gYnVpbHQgd2l0aCBTaXp6bGUuY29tcGlsZVxuICogQHBhcmFtIHtFbGVtZW50fSBjb250ZXh0XG4gKiBAcGFyYW0ge0FycmF5fSBbcmVzdWx0c11cbiAqIEBwYXJhbSB7QXJyYXl9IFtzZWVkXSBBIHNldCBvZiBlbGVtZW50cyB0byBtYXRjaCBhZ2FpbnN0XG4gKi9cbnNlbGVjdCA9IFNpenpsZS5zZWxlY3QgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQsIHJlc3VsdHMsIHNlZWQgKSB7XG5cdHZhciBpLCB0b2tlbnMsIHRva2VuLCB0eXBlLCBmaW5kLFxuXHRcdGNvbXBpbGVkID0gdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgJiYgc2VsZWN0b3IsXG5cdFx0bWF0Y2ggPSAhc2VlZCAmJiB0b2tlbml6ZSggKHNlbGVjdG9yID0gY29tcGlsZWQuc2VsZWN0b3IgfHwgc2VsZWN0b3IpICk7XG5cblx0cmVzdWx0cyA9IHJlc3VsdHMgfHwgW107XG5cblx0Ly8gVHJ5IHRvIG1pbmltaXplIG9wZXJhdGlvbnMgaWYgdGhlcmUgaXMgbm8gc2VlZCBhbmQgb25seSBvbmUgZ3JvdXBcblx0aWYgKCBtYXRjaC5sZW5ndGggPT09IDEgKSB7XG5cblx0XHQvLyBUYWtlIGEgc2hvcnRjdXQgYW5kIHNldCB0aGUgY29udGV4dCBpZiB0aGUgcm9vdCBzZWxlY3RvciBpcyBhbiBJRFxuXHRcdHRva2VucyA9IG1hdGNoWzBdID0gbWF0Y2hbMF0uc2xpY2UoIDAgKTtcblx0XHRpZiAoIHRva2Vucy5sZW5ndGggPiAyICYmICh0b2tlbiA9IHRva2Vuc1swXSkudHlwZSA9PT0gXCJJRFwiICYmXG5cdFx0XHRcdHN1cHBvcnQuZ2V0QnlJZCAmJiBjb250ZXh0Lm5vZGVUeXBlID09PSA5ICYmIGRvY3VtZW50SXNIVE1MICYmXG5cdFx0XHRcdEV4cHIucmVsYXRpdmVbIHRva2Vuc1sxXS50eXBlIF0gKSB7XG5cblx0XHRcdGNvbnRleHQgPSAoIEV4cHIuZmluZFtcIklEXCJdKCB0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UocnVuZXNjYXBlLCBmdW5lc2NhcGUpLCBjb250ZXh0ICkgfHwgW10gKVswXTtcblx0XHRcdGlmICggIWNvbnRleHQgKSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXG5cdFx0XHQvLyBQcmVjb21waWxlZCBtYXRjaGVycyB3aWxsIHN0aWxsIHZlcmlmeSBhbmNlc3RyeSwgc28gc3RlcCB1cCBhIGxldmVsXG5cdFx0XHR9IGVsc2UgaWYgKCBjb21waWxlZCApIHtcblx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQucGFyZW50Tm9kZTtcblx0XHRcdH1cblxuXHRcdFx0c2VsZWN0b3IgPSBzZWxlY3Rvci5zbGljZSggdG9rZW5zLnNoaWZ0KCkudmFsdWUubGVuZ3RoICk7XG5cdFx0fVxuXG5cdFx0Ly8gRmV0Y2ggYSBzZWVkIHNldCBmb3IgcmlnaHQtdG8tbGVmdCBtYXRjaGluZ1xuXHRcdGkgPSBtYXRjaEV4cHJbXCJuZWVkc0NvbnRleHRcIl0udGVzdCggc2VsZWN0b3IgKSA/IDAgOiB0b2tlbnMubGVuZ3RoO1xuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG9rZW4gPSB0b2tlbnNbaV07XG5cblx0XHRcdC8vIEFib3J0IGlmIHdlIGhpdCBhIGNvbWJpbmF0b3Jcblx0XHRcdGlmICggRXhwci5yZWxhdGl2ZVsgKHR5cGUgPSB0b2tlbi50eXBlKSBdICkge1xuXHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHRcdGlmICggKGZpbmQgPSBFeHByLmZpbmRbIHR5cGUgXSkgKSB7XG5cdFx0XHRcdC8vIFNlYXJjaCwgZXhwYW5kaW5nIGNvbnRleHQgZm9yIGxlYWRpbmcgc2libGluZyBjb21iaW5hdG9yc1xuXHRcdFx0XHRpZiAoIChzZWVkID0gZmluZChcblx0XHRcdFx0XHR0b2tlbi5tYXRjaGVzWzBdLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICksXG5cdFx0XHRcdFx0cnNpYmxpbmcudGVzdCggdG9rZW5zWzBdLnR5cGUgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dFxuXHRcdFx0XHQpKSApIHtcblxuXHRcdFx0XHRcdC8vIElmIHNlZWQgaXMgZW1wdHkgb3Igbm8gdG9rZW5zIHJlbWFpbiwgd2UgY2FuIHJldHVybiBlYXJseVxuXHRcdFx0XHRcdHRva2Vucy5zcGxpY2UoIGksIDEgKTtcblx0XHRcdFx0XHRzZWxlY3RvciA9IHNlZWQubGVuZ3RoICYmIHRvU2VsZWN0b3IoIHRva2VucyApO1xuXHRcdFx0XHRcdGlmICggIXNlbGVjdG9yICkge1xuXHRcdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgc2VlZCApO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBDb21waWxlIGFuZCBleGVjdXRlIGEgZmlsdGVyaW5nIGZ1bmN0aW9uIGlmIG9uZSBpcyBub3QgcHJvdmlkZWRcblx0Ly8gUHJvdmlkZSBgbWF0Y2hgIHRvIGF2b2lkIHJldG9rZW5pemF0aW9uIGlmIHdlIG1vZGlmaWVkIHRoZSBzZWxlY3RvciBhYm92ZVxuXHQoIGNvbXBpbGVkIHx8IGNvbXBpbGUoIHNlbGVjdG9yLCBtYXRjaCApICkoXG5cdFx0c2VlZCxcblx0XHRjb250ZXh0LFxuXHRcdCFkb2N1bWVudElzSFRNTCxcblx0XHRyZXN1bHRzLFxuXHRcdHJzaWJsaW5nLnRlc3QoIHNlbGVjdG9yICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8IGNvbnRleHRcblx0KTtcblx0cmV0dXJuIHJlc3VsdHM7XG59O1xuXG4vLyBPbmUtdGltZSBhc3NpZ25tZW50c1xuXG4vLyBTb3J0IHN0YWJpbGl0eVxuc3VwcG9ydC5zb3J0U3RhYmxlID0gZXhwYW5kby5zcGxpdChcIlwiKS5zb3J0KCBzb3J0T3JkZXIgKS5qb2luKFwiXCIpID09PSBleHBhbmRvO1xuXG4vLyBTdXBwb3J0OiBDaHJvbWUgMTQtMzUrXG4vLyBBbHdheXMgYXNzdW1lIGR1cGxpY2F0ZXMgaWYgdGhleSBhcmVuJ3QgcGFzc2VkIHRvIHRoZSBjb21wYXJpc29uIGZ1bmN0aW9uXG5zdXBwb3J0LmRldGVjdER1cGxpY2F0ZXMgPSAhIWhhc0R1cGxpY2F0ZTtcblxuLy8gSW5pdGlhbGl6ZSBhZ2FpbnN0IHRoZSBkZWZhdWx0IGRvY3VtZW50XG5zZXREb2N1bWVudCgpO1xuXG4vLyBTdXBwb3J0OiBXZWJraXQ8NTM3LjMyIC0gU2FmYXJpIDYuMC4zL0Nocm9tZSAyNSAoZml4ZWQgaW4gQ2hyb21lIDI3KVxuLy8gRGV0YWNoZWQgbm9kZXMgY29uZm91bmRpbmdseSBmb2xsb3cgKmVhY2ggb3RoZXIqXG5zdXBwb3J0LnNvcnREZXRhY2hlZCA9IGFzc2VydChmdW5jdGlvbiggZGl2MSApIHtcblx0Ly8gU2hvdWxkIHJldHVybiAxLCBidXQgcmV0dXJucyA0IChmb2xsb3dpbmcpXG5cdHJldHVybiBkaXYxLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpICkgJiAxO1xufSk7XG5cbi8vIFN1cHBvcnQ6IElFPDhcbi8vIFByZXZlbnQgYXR0cmlidXRlL3Byb3BlcnR5IFwiaW50ZXJwb2xhdGlvblwiXG4vLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvbXM1MzY0MjklMjhWUy44NSUyOS5hc3B4XG5pZiAoICFhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcblx0ZGl2LmlubmVySFRNTCA9IFwiPGEgaHJlZj0nIyc+PC9hPlwiO1xuXHRyZXR1cm4gZGl2LmZpcnN0Q2hpbGQuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKSA9PT0gXCIjXCIgO1xufSkgKSB7XG5cdGFkZEhhbmRsZSggXCJ0eXBlfGhyZWZ8aGVpZ2h0fHdpZHRoXCIsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcblx0XHRpZiAoICFpc1hNTCApIHtcblx0XHRcdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSwgbmFtZS50b0xvd2VyQ2FzZSgpID09PSBcInR5cGVcIiA/IDEgOiAyICk7XG5cdFx0fVxuXHR9KTtcbn1cblxuLy8gU3VwcG9ydDogSUU8OVxuLy8gVXNlIGRlZmF1bHRWYWx1ZSBpbiBwbGFjZSBvZiBnZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKVxuaWYgKCAhc3VwcG9ydC5hdHRyaWJ1dGVzIHx8ICFhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcblx0ZGl2LmlubmVySFRNTCA9IFwiPGlucHV0Lz5cIjtcblx0ZGl2LmZpcnN0Q2hpbGQuc2V0QXR0cmlidXRlKCBcInZhbHVlXCIsIFwiXCIgKTtcblx0cmV0dXJuIGRpdi5maXJzdENoaWxkLmdldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiICkgPT09IFwiXCI7XG59KSApIHtcblx0YWRkSGFuZGxlKCBcInZhbHVlXCIsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcblx0XHRpZiAoICFpc1hNTCAmJiBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IFwiaW5wdXRcIiApIHtcblx0XHRcdHJldHVybiBlbGVtLmRlZmF1bHRWYWx1ZTtcblx0XHR9XG5cdH0pO1xufVxuXG4vLyBTdXBwb3J0OiBJRTw5XG4vLyBVc2UgZ2V0QXR0cmlidXRlTm9kZSB0byBmZXRjaCBib29sZWFucyB3aGVuIGdldEF0dHJpYnV0ZSBsaWVzXG5pZiAoICFhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcblx0cmV0dXJuIGRpdi5nZXRBdHRyaWJ1dGUoXCJkaXNhYmxlZFwiKSA9PSBudWxsO1xufSkgKSB7XG5cdGFkZEhhbmRsZSggYm9vbGVhbnMsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBpc1hNTCApIHtcblx0XHR2YXIgdmFsO1xuXHRcdGlmICggIWlzWE1MICkge1xuXHRcdFx0cmV0dXJuIGVsZW1bIG5hbWUgXSA9PT0gdHJ1ZSA/IG5hbWUudG9Mb3dlckNhc2UoKSA6XG5cdFx0XHRcdFx0KHZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZSggbmFtZSApKSAmJiB2YWwuc3BlY2lmaWVkID9cblx0XHRcdFx0XHR2YWwudmFsdWUgOlxuXHRcdFx0XHRudWxsO1xuXHRcdH1cblx0fSk7XG59XG5cbnJldHVybiBTaXp6bGU7XG5cbn0pKCB3aW5kb3cgKTtcblxuXG5cbmpRdWVyeS5maW5kID0gU2l6emxlO1xualF1ZXJ5LmV4cHIgPSBTaXp6bGUuc2VsZWN0b3JzO1xualF1ZXJ5LmV4cHJbXCI6XCJdID0galF1ZXJ5LmV4cHIucHNldWRvcztcbmpRdWVyeS51bmlxdWUgPSBTaXp6bGUudW5pcXVlU29ydDtcbmpRdWVyeS50ZXh0ID0gU2l6emxlLmdldFRleHQ7XG5qUXVlcnkuaXNYTUxEb2MgPSBTaXp6bGUuaXNYTUw7XG5qUXVlcnkuY29udGFpbnMgPSBTaXp6bGUuY29udGFpbnM7XG5cblxuXG52YXIgcm5lZWRzQ29udGV4dCA9IGpRdWVyeS5leHByLm1hdGNoLm5lZWRzQ29udGV4dDtcblxudmFyIHJzaW5nbGVUYWcgPSAoL148KFxcdyspXFxzKlxcLz8+KD86PFxcL1xcMT58KSQvKTtcblxuXG5cbnZhciByaXNTaW1wbGUgPSAvXi5bXjojXFxbXFwuLF0qJC87XG5cbi8vIEltcGxlbWVudCB0aGUgaWRlbnRpY2FsIGZ1bmN0aW9uYWxpdHkgZm9yIGZpbHRlciBhbmQgbm90XG5mdW5jdGlvbiB3aW5ub3coIGVsZW1lbnRzLCBxdWFsaWZpZXIsIG5vdCApIHtcblx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggcXVhbGlmaWVyICkgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0sIGkgKSB7XG5cdFx0XHQvKiBqc2hpbnQgLVcwMTggKi9cblx0XHRcdHJldHVybiAhIXF1YWxpZmllci5jYWxsKCBlbGVtLCBpLCBlbGVtICkgIT09IG5vdDtcblx0XHR9KTtcblxuXHR9XG5cblx0aWYgKCBxdWFsaWZpZXIubm9kZVR5cGUgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCBlbGVtID09PSBxdWFsaWZpZXIgKSAhPT0gbm90O1xuXHRcdH0pO1xuXG5cdH1cblxuXHRpZiAoIHR5cGVvZiBxdWFsaWZpZXIgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0aWYgKCByaXNTaW1wbGUudGVzdCggcXVhbGlmaWVyICkgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmZpbHRlciggcXVhbGlmaWVyLCBlbGVtZW50cywgbm90ICk7XG5cdFx0fVxuXG5cdFx0cXVhbGlmaWVyID0galF1ZXJ5LmZpbHRlciggcXVhbGlmaWVyLCBlbGVtZW50cyApO1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeS5ncmVwKCBlbGVtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuICggaW5kZXhPZi5jYWxsKCBxdWFsaWZpZXIsIGVsZW0gKSA+PSAwICkgIT09IG5vdDtcblx0fSk7XG59XG5cbmpRdWVyeS5maWx0ZXIgPSBmdW5jdGlvbiggZXhwciwgZWxlbXMsIG5vdCApIHtcblx0dmFyIGVsZW0gPSBlbGVtc1sgMCBdO1xuXG5cdGlmICggbm90ICkge1xuXHRcdGV4cHIgPSBcIjpub3QoXCIgKyBleHByICsgXCIpXCI7XG5cdH1cblxuXHRyZXR1cm4gZWxlbXMubGVuZ3RoID09PSAxICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgP1xuXHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvciggZWxlbSwgZXhwciApID8gWyBlbGVtIF0gOiBbXSA6XG5cdFx0alF1ZXJ5LmZpbmQubWF0Y2hlcyggZXhwciwgalF1ZXJ5LmdyZXAoIGVsZW1zLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtLm5vZGVUeXBlID09PSAxO1xuXHRcdH0pKTtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHRmaW5kOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGksXG5cdFx0XHRsZW4gPSB0aGlzLmxlbmd0aCxcblx0XHRcdHJldCA9IFtdLFxuXHRcdFx0c2VsZiA9IHRoaXM7XG5cblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5KCBzZWxlY3RvciApLmZpbHRlcihmdW5jdGlvbigpIHtcblx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRpZiAoIGpRdWVyeS5jb250YWlucyggc2VsZlsgaSBdLCB0aGlzICkgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pICk7XG5cdFx0fVxuXG5cdFx0Zm9yICggaSA9IDA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdGpRdWVyeS5maW5kKCBzZWxlY3Rvciwgc2VsZlsgaSBdLCByZXQgKTtcblx0XHR9XG5cblx0XHQvLyBOZWVkZWQgYmVjYXVzZSAkKCBzZWxlY3RvciwgY29udGV4dCApIGJlY29tZXMgJCggY29udGV4dCApLmZpbmQoIHNlbGVjdG9yIClcblx0XHRyZXQgPSB0aGlzLnB1c2hTdGFjayggbGVuID4gMSA/IGpRdWVyeS51bmlxdWUoIHJldCApIDogcmV0ICk7XG5cdFx0cmV0LnNlbGVjdG9yID0gdGhpcy5zZWxlY3RvciA/IHRoaXMuc2VsZWN0b3IgKyBcIiBcIiArIHNlbGVjdG9yIDogc2VsZWN0b3I7XG5cdFx0cmV0dXJuIHJldDtcblx0fSxcblx0ZmlsdGVyOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCB3aW5ub3codGhpcywgc2VsZWN0b3IgfHwgW10sIGZhbHNlKSApO1xuXHR9LFxuXHRub3Q6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHdpbm5vdyh0aGlzLCBzZWxlY3RvciB8fCBbXSwgdHJ1ZSkgKTtcblx0fSxcblx0aXM6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gISF3aW5ub3coXG5cdFx0XHR0aGlzLFxuXG5cdFx0XHQvLyBJZiB0aGlzIGlzIGEgcG9zaXRpb25hbC9yZWxhdGl2ZSBzZWxlY3RvciwgY2hlY2sgbWVtYmVyc2hpcCBpbiB0aGUgcmV0dXJuZWQgc2V0XG5cdFx0XHQvLyBzbyAkKFwicDpmaXJzdFwiKS5pcyhcInA6bGFzdFwiKSB3b24ndCByZXR1cm4gdHJ1ZSBmb3IgYSBkb2Mgd2l0aCB0d28gXCJwXCIuXG5cdFx0XHR0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgJiYgcm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvciApID9cblx0XHRcdFx0alF1ZXJ5KCBzZWxlY3RvciApIDpcblx0XHRcdFx0c2VsZWN0b3IgfHwgW10sXG5cdFx0XHRmYWxzZVxuXHRcdCkubGVuZ3RoO1xuXHR9XG59KTtcblxuXG4vLyBJbml0aWFsaXplIGEgalF1ZXJ5IG9iamVjdFxuXG5cbi8vIEEgY2VudHJhbCByZWZlcmVuY2UgdG8gdGhlIHJvb3QgalF1ZXJ5KGRvY3VtZW50KVxudmFyIHJvb3RqUXVlcnksXG5cblx0Ly8gQSBzaW1wbGUgd2F5IHRvIGNoZWNrIGZvciBIVE1MIHN0cmluZ3Ncblx0Ly8gUHJpb3JpdGl6ZSAjaWQgb3ZlciA8dGFnPiB0byBhdm9pZCBYU1MgdmlhIGxvY2F0aW9uLmhhc2ggKCM5NTIxKVxuXHQvLyBTdHJpY3QgSFRNTCByZWNvZ25pdGlvbiAoIzExMjkwOiBtdXN0IHN0YXJ0IHdpdGggPClcblx0cnF1aWNrRXhwciA9IC9eKD86XFxzKig8W1xcd1xcV10rPilbXj5dKnwjKFtcXHctXSopKSQvLFxuXG5cdGluaXQgPSBqUXVlcnkuZm4uaW5pdCA9IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcblx0XHR2YXIgbWF0Y2gsIGVsZW07XG5cblx0XHQvLyBIQU5ETEU6ICQoXCJcIiksICQobnVsbCksICQodW5kZWZpbmVkKSwgJChmYWxzZSlcblx0XHRpZiAoICFzZWxlY3RvciApIHtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdC8vIEhhbmRsZSBIVE1MIHN0cmluZ3Ncblx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGlmICggc2VsZWN0b3JbMF0gPT09IFwiPFwiICYmIHNlbGVjdG9yWyBzZWxlY3Rvci5sZW5ndGggLSAxIF0gPT09IFwiPlwiICYmIHNlbGVjdG9yLmxlbmd0aCA+PSAzICkge1xuXHRcdFx0XHQvLyBBc3N1bWUgdGhhdCBzdHJpbmdzIHRoYXQgc3RhcnQgYW5kIGVuZCB3aXRoIDw+IGFyZSBIVE1MIGFuZCBza2lwIHRoZSByZWdleCBjaGVja1xuXHRcdFx0XHRtYXRjaCA9IFsgbnVsbCwgc2VsZWN0b3IsIG51bGwgXTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0bWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoIHNlbGVjdG9yICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1hdGNoIGh0bWwgb3IgbWFrZSBzdXJlIG5vIGNvbnRleHQgaXMgc3BlY2lmaWVkIGZvciAjaWRcblx0XHRcdGlmICggbWF0Y2ggJiYgKG1hdGNoWzFdIHx8ICFjb250ZXh0KSApIHtcblxuXHRcdFx0XHQvLyBIQU5ETEU6ICQoaHRtbCkgLT4gJChhcnJheSlcblx0XHRcdFx0aWYgKCBtYXRjaFsxXSApIHtcblx0XHRcdFx0XHRjb250ZXh0ID0gY29udGV4dCBpbnN0YW5jZW9mIGpRdWVyeSA/IGNvbnRleHRbMF0gOiBjb250ZXh0O1xuXG5cdFx0XHRcdFx0Ly8gT3B0aW9uIHRvIHJ1biBzY3JpcHRzIGlzIHRydWUgZm9yIGJhY2stY29tcGF0XG5cdFx0XHRcdFx0Ly8gSW50ZW50aW9uYWxseSBsZXQgdGhlIGVycm9yIGJlIHRocm93biBpZiBwYXJzZUhUTUwgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMsIGpRdWVyeS5wYXJzZUhUTUwoXG5cdFx0XHRcdFx0XHRtYXRjaFsxXSxcblx0XHRcdFx0XHRcdGNvbnRleHQgJiYgY29udGV4dC5ub2RlVHlwZSA/IGNvbnRleHQub3duZXJEb2N1bWVudCB8fCBjb250ZXh0IDogZG9jdW1lbnQsXG5cdFx0XHRcdFx0XHR0cnVlXG5cdFx0XHRcdFx0KSApO1xuXG5cdFx0XHRcdFx0Ly8gSEFORExFOiAkKGh0bWwsIHByb3BzKVxuXHRcdFx0XHRcdGlmICggcnNpbmdsZVRhZy50ZXN0KCBtYXRjaFsxXSApICYmIGpRdWVyeS5pc1BsYWluT2JqZWN0KCBjb250ZXh0ICkgKSB7XG5cdFx0XHRcdFx0XHRmb3IgKCBtYXRjaCBpbiBjb250ZXh0ICkge1xuXHRcdFx0XHRcdFx0XHQvLyBQcm9wZXJ0aWVzIG9mIGNvbnRleHQgYXJlIGNhbGxlZCBhcyBtZXRob2RzIGlmIHBvc3NpYmxlXG5cdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHRoaXNbIG1hdGNoIF0gKSApIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzWyBtYXRjaCBdKCBjb250ZXh0WyBtYXRjaCBdICk7XG5cblx0XHRcdFx0XHRcdFx0Ly8gLi4uYW5kIG90aGVyd2lzZSBzZXQgYXMgYXR0cmlidXRlc1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdHRoaXMuYXR0ciggbWF0Y2gsIGNvbnRleHRbIG1hdGNoIF0gKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0XHRcdC8vIEhBTkRMRTogJCgjaWQpXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCBtYXRjaFsyXSApO1xuXG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogQmxhY2tiZXJyeSA0LjZcblx0XHRcdFx0XHQvLyBnRUJJRCByZXR1cm5zIG5vZGVzIG5vIGxvbmdlciBpbiB0aGUgZG9jdW1lbnQgKCM2OTYzKVxuXHRcdFx0XHRcdGlmICggZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdFx0XHQvLyBJbmplY3QgdGhlIGVsZW1lbnQgZGlyZWN0bHkgaW50byB0aGUgalF1ZXJ5IG9iamVjdFxuXHRcdFx0XHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0XHRcdFx0dGhpc1swXSA9IGVsZW07XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0dGhpcy5jb250ZXh0ID0gZG9jdW1lbnQ7XG5cdFx0XHRcdFx0dGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cblx0XHRcdC8vIEhBTkRMRTogJChleHByLCAkKC4uLikpXG5cdFx0XHR9IGVsc2UgaWYgKCAhY29udGV4dCB8fCBjb250ZXh0LmpxdWVyeSApIHtcblx0XHRcdFx0cmV0dXJuICggY29udGV4dCB8fCByb290alF1ZXJ5ICkuZmluZCggc2VsZWN0b3IgKTtcblxuXHRcdFx0Ly8gSEFORExFOiAkKGV4cHIsIGNvbnRleHQpXG5cdFx0XHQvLyAod2hpY2ggaXMganVzdCBlcXVpdmFsZW50IHRvOiAkKGNvbnRleHQpLmZpbmQoZXhwcilcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHJldHVybiB0aGlzLmNvbnN0cnVjdG9yKCBjb250ZXh0ICkuZmluZCggc2VsZWN0b3IgKTtcblx0XHRcdH1cblxuXHRcdC8vIEhBTkRMRTogJChET01FbGVtZW50KVxuXHRcdH0gZWxzZSBpZiAoIHNlbGVjdG9yLm5vZGVUeXBlICkge1xuXHRcdFx0dGhpcy5jb250ZXh0ID0gdGhpc1swXSA9IHNlbGVjdG9yO1xuXHRcdFx0dGhpcy5sZW5ndGggPSAxO1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cblx0XHQvLyBIQU5ETEU6ICQoZnVuY3Rpb24pXG5cdFx0Ly8gU2hvcnRjdXQgZm9yIGRvY3VtZW50IHJlYWR5XG5cdFx0fSBlbHNlIGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHNlbGVjdG9yICkgKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIHJvb3RqUXVlcnkucmVhZHkgIT09IFwidW5kZWZpbmVkXCIgP1xuXHRcdFx0XHRyb290alF1ZXJ5LnJlYWR5KCBzZWxlY3RvciApIDpcblx0XHRcdFx0Ly8gRXhlY3V0ZSBpbW1lZGlhdGVseSBpZiByZWFkeSBpcyBub3QgcHJlc2VudFxuXHRcdFx0XHRzZWxlY3RvciggalF1ZXJ5ICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWxlY3Rvci5zZWxlY3RvciAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dGhpcy5zZWxlY3RvciA9IHNlbGVjdG9yLnNlbGVjdG9yO1xuXHRcdFx0dGhpcy5jb250ZXh0ID0gc2VsZWN0b3IuY29udGV4dDtcblx0XHR9XG5cblx0XHRyZXR1cm4galF1ZXJ5Lm1ha2VBcnJheSggc2VsZWN0b3IsIHRoaXMgKTtcblx0fTtcblxuLy8gR2l2ZSB0aGUgaW5pdCBmdW5jdGlvbiB0aGUgalF1ZXJ5IHByb3RvdHlwZSBmb3IgbGF0ZXIgaW5zdGFudGlhdGlvblxuaW5pdC5wcm90b3R5cGUgPSBqUXVlcnkuZm47XG5cbi8vIEluaXRpYWxpemUgY2VudHJhbCByZWZlcmVuY2VcbnJvb3RqUXVlcnkgPSBqUXVlcnkoIGRvY3VtZW50ICk7XG5cblxudmFyIHJwYXJlbnRzcHJldiA9IC9eKD86cGFyZW50c3xwcmV2KD86VW50aWx8QWxsKSkvLFxuXHQvLyBNZXRob2RzIGd1YXJhbnRlZWQgdG8gcHJvZHVjZSBhIHVuaXF1ZSBzZXQgd2hlbiBzdGFydGluZyBmcm9tIGEgdW5pcXVlIHNldFxuXHRndWFyYW50ZWVkVW5pcXVlID0ge1xuXHRcdGNoaWxkcmVuOiB0cnVlLFxuXHRcdGNvbnRlbnRzOiB0cnVlLFxuXHRcdG5leHQ6IHRydWUsXG5cdFx0cHJldjogdHJ1ZVxuXHR9O1xuXG5qUXVlcnkuZXh0ZW5kKHtcblx0ZGlyOiBmdW5jdGlvbiggZWxlbSwgZGlyLCB1bnRpbCApIHtcblx0XHR2YXIgbWF0Y2hlZCA9IFtdLFxuXHRcdFx0dHJ1bmNhdGUgPSB1bnRpbCAhPT0gdW5kZWZpbmVkO1xuXG5cdFx0d2hpbGUgKCAoZWxlbSA9IGVsZW1bIGRpciBdKSAmJiBlbGVtLm5vZGVUeXBlICE9PSA5ICkge1xuXHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRpZiAoIHRydW5jYXRlICYmIGpRdWVyeSggZWxlbSApLmlzKCB1bnRpbCApICkge1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHRcdG1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRyZXR1cm4gbWF0Y2hlZDtcblx0fSxcblxuXHRzaWJsaW5nOiBmdW5jdGlvbiggbiwgZWxlbSApIHtcblx0XHR2YXIgbWF0Y2hlZCA9IFtdO1xuXG5cdFx0Zm9yICggOyBuOyBuID0gbi5uZXh0U2libGluZyApIHtcblx0XHRcdGlmICggbi5ub2RlVHlwZSA9PT0gMSAmJiBuICE9PSBlbGVtICkge1xuXHRcdFx0XHRtYXRjaGVkLnB1c2goIG4gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gbWF0Y2hlZDtcblx0fVxufSk7XG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHRoYXM6IGZ1bmN0aW9uKCB0YXJnZXQgKSB7XG5cdFx0dmFyIHRhcmdldHMgPSBqUXVlcnkoIHRhcmdldCwgdGhpcyApLFxuXHRcdFx0bCA9IHRhcmdldHMubGVuZ3RoO1xuXG5cdFx0cmV0dXJuIHRoaXMuZmlsdGVyKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGkgPSAwO1xuXHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRpZiAoIGpRdWVyeS5jb250YWlucyggdGhpcywgdGFyZ2V0c1tpXSApICkge1xuXHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0Y2xvc2VzdDogZnVuY3Rpb24oIHNlbGVjdG9ycywgY29udGV4dCApIHtcblx0XHR2YXIgY3VyLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRtYXRjaGVkID0gW10sXG5cdFx0XHRwb3MgPSBybmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9ycyApIHx8IHR5cGVvZiBzZWxlY3RvcnMgIT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRqUXVlcnkoIHNlbGVjdG9ycywgY29udGV4dCB8fCB0aGlzLmNvbnRleHQgKSA6XG5cdFx0XHRcdDA7XG5cblx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRmb3IgKCBjdXIgPSB0aGlzW2ldOyBjdXIgJiYgY3VyICE9PSBjb250ZXh0OyBjdXIgPSBjdXIucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0Ly8gQWx3YXlzIHNraXAgZG9jdW1lbnQgZnJhZ21lbnRzXG5cdFx0XHRcdGlmICggY3VyLm5vZGVUeXBlIDwgMTEgJiYgKHBvcyA/XG5cdFx0XHRcdFx0cG9zLmluZGV4KGN1cikgPiAtMSA6XG5cblx0XHRcdFx0XHQvLyBEb24ndCBwYXNzIG5vbi1lbGVtZW50cyB0byBTaXp6bGVcblx0XHRcdFx0XHRjdXIubm9kZVR5cGUgPT09IDEgJiZcblx0XHRcdFx0XHRcdGpRdWVyeS5maW5kLm1hdGNoZXNTZWxlY3RvcihjdXIsIHNlbGVjdG9ycykpICkge1xuXG5cdFx0XHRcdFx0bWF0Y2hlZC5wdXNoKCBjdXIgKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggbWF0Y2hlZC5sZW5ndGggPiAxID8galF1ZXJ5LnVuaXF1ZSggbWF0Y2hlZCApIDogbWF0Y2hlZCApO1xuXHR9LFxuXG5cdC8vIERldGVybWluZSB0aGUgcG9zaXRpb24gb2YgYW4gZWxlbWVudCB3aXRoaW4gdGhlIHNldFxuXHRpbmRleDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cblx0XHQvLyBObyBhcmd1bWVudCwgcmV0dXJuIGluZGV4IGluIHBhcmVudFxuXHRcdGlmICggIWVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gKCB0aGlzWyAwIF0gJiYgdGhpc1sgMCBdLnBhcmVudE5vZGUgKSA/IHRoaXMuZmlyc3QoKS5wcmV2QWxsKCkubGVuZ3RoIDogLTE7XG5cdFx0fVxuXG5cdFx0Ly8gSW5kZXggaW4gc2VsZWN0b3Jcblx0XHRpZiAoIHR5cGVvZiBlbGVtID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YuY2FsbCggalF1ZXJ5KCBlbGVtICksIHRoaXNbIDAgXSApO1xuXHRcdH1cblxuXHRcdC8vIExvY2F0ZSB0aGUgcG9zaXRpb24gb2YgdGhlIGRlc2lyZWQgZWxlbWVudFxuXHRcdHJldHVybiBpbmRleE9mLmNhbGwoIHRoaXMsXG5cblx0XHRcdC8vIElmIGl0IHJlY2VpdmVzIGEgalF1ZXJ5IG9iamVjdCwgdGhlIGZpcnN0IGVsZW1lbnQgaXMgdXNlZFxuXHRcdFx0ZWxlbS5qcXVlcnkgPyBlbGVtWyAwIF0gOiBlbGVtXG5cdFx0KTtcblx0fSxcblxuXHRhZGQ6IGZ1bmN0aW9uKCBzZWxlY3RvciwgY29udGV4dCApIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soXG5cdFx0XHRqUXVlcnkudW5pcXVlKFxuXHRcdFx0XHRqUXVlcnkubWVyZ2UoIHRoaXMuZ2V0KCksIGpRdWVyeSggc2VsZWN0b3IsIGNvbnRleHQgKSApXG5cdFx0XHQpXG5cdFx0KTtcblx0fSxcblxuXHRhZGRCYWNrOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYWRkKCBzZWxlY3RvciA9PSBudWxsID9cblx0XHRcdHRoaXMucHJldk9iamVjdCA6IHRoaXMucHJldk9iamVjdC5maWx0ZXIoc2VsZWN0b3IpXG5cdFx0KTtcblx0fVxufSk7XG5cbmZ1bmN0aW9uIHNpYmxpbmcoIGN1ciwgZGlyICkge1xuXHR3aGlsZSAoIChjdXIgPSBjdXJbZGlyXSkgJiYgY3VyLm5vZGVUeXBlICE9PSAxICkge31cblx0cmV0dXJuIGN1cjtcbn1cblxualF1ZXJ5LmVhY2goe1xuXHRwYXJlbnQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0cmV0dXJuIHBhcmVudCAmJiBwYXJlbnQubm9kZVR5cGUgIT09IDExID8gcGFyZW50IDogbnVsbDtcblx0fSxcblx0cGFyZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5kaXIoIGVsZW0sIFwicGFyZW50Tm9kZVwiICk7XG5cdH0sXG5cdHBhcmVudHNVbnRpbDogZnVuY3Rpb24oIGVsZW0sIGksIHVudGlsICkge1xuXHRcdHJldHVybiBqUXVlcnkuZGlyKCBlbGVtLCBcInBhcmVudE5vZGVcIiwgdW50aWwgKTtcblx0fSxcblx0bmV4dDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmcoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuXHR9LFxuXHRwcmV2OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gc2libGluZyggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xuXHR9LFxuXHRuZXh0QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmRpciggZWxlbSwgXCJuZXh0U2libGluZ1wiICk7XG5cdH0sXG5cdHByZXZBbGw6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBqUXVlcnkuZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiICk7XG5cdH0sXG5cdG5leHRVbnRpbDogZnVuY3Rpb24oIGVsZW0sIGksIHVudGlsICkge1xuXHRcdHJldHVybiBqUXVlcnkuZGlyKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIsIHVudGlsICk7XG5cdH0sXG5cdHByZXZVbnRpbDogZnVuY3Rpb24oIGVsZW0sIGksIHVudGlsICkge1xuXHRcdHJldHVybiBqUXVlcnkuZGlyKCBlbGVtLCBcInByZXZpb3VzU2libGluZ1wiLCB1bnRpbCApO1xuXHR9LFxuXHRzaWJsaW5nczogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5zaWJsaW5nKCAoIGVsZW0ucGFyZW50Tm9kZSB8fCB7fSApLmZpcnN0Q2hpbGQsIGVsZW0gKTtcblx0fSxcblx0Y2hpbGRyZW46IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBqUXVlcnkuc2libGluZyggZWxlbS5maXJzdENoaWxkICk7XG5cdH0sXG5cdGNvbnRlbnRzOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZWxlbS5jb250ZW50RG9jdW1lbnQgfHwgalF1ZXJ5Lm1lcmdlKCBbXSwgZWxlbS5jaGlsZE5vZGVzICk7XG5cdH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBmbiApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggdW50aWwsIHNlbGVjdG9yICkge1xuXHRcdHZhciBtYXRjaGVkID0galF1ZXJ5Lm1hcCggdGhpcywgZm4sIHVudGlsICk7XG5cblx0XHRpZiAoIG5hbWUuc2xpY2UoIC01ICkgIT09IFwiVW50aWxcIiApIHtcblx0XHRcdHNlbGVjdG9yID0gdW50aWw7XG5cdFx0fVxuXG5cdFx0aWYgKCBzZWxlY3RvciAmJiB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRtYXRjaGVkID0galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIG1hdGNoZWQgKTtcblx0XHR9XG5cblx0XHRpZiAoIHRoaXMubGVuZ3RoID4gMSApIHtcblx0XHRcdC8vIFJlbW92ZSBkdXBsaWNhdGVzXG5cdFx0XHRpZiAoICFndWFyYW50ZWVkVW5pcXVlWyBuYW1lIF0gKSB7XG5cdFx0XHRcdGpRdWVyeS51bmlxdWUoIG1hdGNoZWQgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUmV2ZXJzZSBvcmRlciBmb3IgcGFyZW50cyogYW5kIHByZXYtZGVyaXZhdGl2ZXNcblx0XHRcdGlmICggcnBhcmVudHNwcmV2LnRlc3QoIG5hbWUgKSApIHtcblx0XHRcdFx0bWF0Y2hlZC5yZXZlcnNlKCk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCBtYXRjaGVkICk7XG5cdH07XG59KTtcbnZhciBybm90d2hpdGUgPSAoL1xcUysvZyk7XG5cblxuXG4vLyBTdHJpbmcgdG8gT2JqZWN0IG9wdGlvbnMgZm9ybWF0IGNhY2hlXG52YXIgb3B0aW9uc0NhY2hlID0ge307XG5cbi8vIENvbnZlcnQgU3RyaW5nLWZvcm1hdHRlZCBvcHRpb25zIGludG8gT2JqZWN0LWZvcm1hdHRlZCBvbmVzIGFuZCBzdG9yZSBpbiBjYWNoZVxuZnVuY3Rpb24gY3JlYXRlT3B0aW9ucyggb3B0aW9ucyApIHtcblx0dmFyIG9iamVjdCA9IG9wdGlvbnNDYWNoZVsgb3B0aW9ucyBdID0ge307XG5cdGpRdWVyeS5lYWNoKCBvcHRpb25zLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbXSwgZnVuY3Rpb24oIF8sIGZsYWcgKSB7XG5cdFx0b2JqZWN0WyBmbGFnIF0gPSB0cnVlO1xuXHR9KTtcblx0cmV0dXJuIG9iamVjdDtcbn1cblxuLypcbiAqIENyZWF0ZSBhIGNhbGxiYWNrIGxpc3QgdXNpbmcgdGhlIGZvbGxvd2luZyBwYXJhbWV0ZXJzOlxuICpcbiAqXHRvcHRpb25zOiBhbiBvcHRpb25hbCBsaXN0IG9mIHNwYWNlLXNlcGFyYXRlZCBvcHRpb25zIHRoYXQgd2lsbCBjaGFuZ2UgaG93XG4gKlx0XHRcdHRoZSBjYWxsYmFjayBsaXN0IGJlaGF2ZXMgb3IgYSBtb3JlIHRyYWRpdGlvbmFsIG9wdGlvbiBvYmplY3RcbiAqXG4gKiBCeSBkZWZhdWx0IGEgY2FsbGJhY2sgbGlzdCB3aWxsIGFjdCBsaWtlIGFuIGV2ZW50IGNhbGxiYWNrIGxpc3QgYW5kIGNhbiBiZVxuICogXCJmaXJlZFwiIG11bHRpcGxlIHRpbWVzLlxuICpcbiAqIFBvc3NpYmxlIG9wdGlvbnM6XG4gKlxuICpcdG9uY2U6XHRcdFx0d2lsbCBlbnN1cmUgdGhlIGNhbGxiYWNrIGxpc3QgY2FuIG9ubHkgYmUgZmlyZWQgb25jZSAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHRtZW1vcnk6XHRcdFx0d2lsbCBrZWVwIHRyYWNrIG9mIHByZXZpb3VzIHZhbHVlcyBhbmQgd2lsbCBjYWxsIGFueSBjYWxsYmFjayBhZGRlZFxuICpcdFx0XHRcdFx0YWZ0ZXIgdGhlIGxpc3QgaGFzIGJlZW4gZmlyZWQgcmlnaHQgYXdheSB3aXRoIHRoZSBsYXRlc3QgXCJtZW1vcml6ZWRcIlxuICpcdFx0XHRcdFx0dmFsdWVzIChsaWtlIGEgRGVmZXJyZWQpXG4gKlxuICpcdHVuaXF1ZTpcdFx0XHR3aWxsIGVuc3VyZSBhIGNhbGxiYWNrIGNhbiBvbmx5IGJlIGFkZGVkIG9uY2UgKG5vIGR1cGxpY2F0ZSBpbiB0aGUgbGlzdClcbiAqXG4gKlx0c3RvcE9uRmFsc2U6XHRpbnRlcnJ1cHQgY2FsbGluZ3Mgd2hlbiBhIGNhbGxiYWNrIHJldHVybnMgZmFsc2VcbiAqXG4gKi9cbmpRdWVyeS5DYWxsYmFja3MgPSBmdW5jdGlvbiggb3B0aW9ucyApIHtcblxuXHQvLyBDb252ZXJ0IG9wdGlvbnMgZnJvbSBTdHJpbmctZm9ybWF0dGVkIHRvIE9iamVjdC1mb3JtYXR0ZWQgaWYgbmVlZGVkXG5cdC8vICh3ZSBjaGVjayBpbiBjYWNoZSBmaXJzdClcblx0b3B0aW9ucyA9IHR5cGVvZiBvcHRpb25zID09PSBcInN0cmluZ1wiID9cblx0XHQoIG9wdGlvbnNDYWNoZVsgb3B0aW9ucyBdIHx8IGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSApIDpcblx0XHRqUXVlcnkuZXh0ZW5kKCB7fSwgb3B0aW9ucyApO1xuXG5cdHZhciAvLyBMYXN0IGZpcmUgdmFsdWUgKGZvciBub24tZm9yZ2V0dGFibGUgbGlzdHMpXG5cdFx0bWVtb3J5LFxuXHRcdC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IHdhcyBhbHJlYWR5IGZpcmVkXG5cdFx0ZmlyZWQsXG5cdFx0Ly8gRmxhZyB0byBrbm93IGlmIGxpc3QgaXMgY3VycmVudGx5IGZpcmluZ1xuXHRcdGZpcmluZyxcblx0XHQvLyBGaXJzdCBjYWxsYmFjayB0byBmaXJlICh1c2VkIGludGVybmFsbHkgYnkgYWRkIGFuZCBmaXJlV2l0aClcblx0XHRmaXJpbmdTdGFydCxcblx0XHQvLyBFbmQgb2YgdGhlIGxvb3Agd2hlbiBmaXJpbmdcblx0XHRmaXJpbmdMZW5ndGgsXG5cdFx0Ly8gSW5kZXggb2YgY3VycmVudGx5IGZpcmluZyBjYWxsYmFjayAobW9kaWZpZWQgYnkgcmVtb3ZlIGlmIG5lZWRlZClcblx0XHRmaXJpbmdJbmRleCxcblx0XHQvLyBBY3R1YWwgY2FsbGJhY2sgbGlzdFxuXHRcdGxpc3QgPSBbXSxcblx0XHQvLyBTdGFjayBvZiBmaXJlIGNhbGxzIGZvciByZXBlYXRhYmxlIGxpc3RzXG5cdFx0c3RhY2sgPSAhb3B0aW9ucy5vbmNlICYmIFtdLFxuXHRcdC8vIEZpcmUgY2FsbGJhY2tzXG5cdFx0ZmlyZSA9IGZ1bmN0aW9uKCBkYXRhICkge1xuXHRcdFx0bWVtb3J5ID0gb3B0aW9ucy5tZW1vcnkgJiYgZGF0YTtcblx0XHRcdGZpcmVkID0gdHJ1ZTtcblx0XHRcdGZpcmluZ0luZGV4ID0gZmlyaW5nU3RhcnQgfHwgMDtcblx0XHRcdGZpcmluZ1N0YXJ0ID0gMDtcblx0XHRcdGZpcmluZ0xlbmd0aCA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0ZmlyaW5nID0gdHJ1ZTtcblx0XHRcdGZvciAoIDsgbGlzdCAmJiBmaXJpbmdJbmRleCA8IGZpcmluZ0xlbmd0aDsgZmlyaW5nSW5kZXgrKyApIHtcblx0XHRcdFx0aWYgKCBsaXN0WyBmaXJpbmdJbmRleCBdLmFwcGx5KCBkYXRhWyAwIF0sIGRhdGFbIDEgXSApID09PSBmYWxzZSAmJiBvcHRpb25zLnN0b3BPbkZhbHNlICkge1xuXHRcdFx0XHRcdG1lbW9yeSA9IGZhbHNlOyAvLyBUbyBwcmV2ZW50IGZ1cnRoZXIgY2FsbHMgdXNpbmcgYWRkXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGZpcmluZyA9IGZhbHNlO1xuXHRcdFx0aWYgKCBsaXN0ICkge1xuXHRcdFx0XHRpZiAoIHN0YWNrICkge1xuXHRcdFx0XHRcdGlmICggc3RhY2subGVuZ3RoICkge1xuXHRcdFx0XHRcdFx0ZmlyZSggc3RhY2suc2hpZnQoKSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIGlmICggbWVtb3J5ICkge1xuXHRcdFx0XHRcdGxpc3QgPSBbXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzZWxmLmRpc2FibGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0Ly8gQWN0dWFsIENhbGxiYWNrcyBvYmplY3Rcblx0XHRzZWxmID0ge1xuXHRcdFx0Ly8gQWRkIGEgY2FsbGJhY2sgb3IgYSBjb2xsZWN0aW9uIG9mIGNhbGxiYWNrcyB0byB0aGUgbGlzdFxuXHRcdFx0YWRkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXHRcdFx0XHRcdC8vIEZpcnN0LCB3ZSBzYXZlIHRoZSBjdXJyZW50IGxlbmd0aFxuXHRcdFx0XHRcdHZhciBzdGFydCA9IGxpc3QubGVuZ3RoO1xuXHRcdFx0XHRcdChmdW5jdGlvbiBhZGQoIGFyZ3MgKSB7XG5cdFx0XHRcdFx0XHRqUXVlcnkuZWFjaCggYXJncywgZnVuY3Rpb24oIF8sIGFyZyApIHtcblx0XHRcdFx0XHRcdFx0dmFyIHR5cGUgPSBqUXVlcnkudHlwZSggYXJnICk7XG5cdFx0XHRcdFx0XHRcdGlmICggdHlwZSA9PT0gXCJmdW5jdGlvblwiICkge1xuXHRcdFx0XHRcdFx0XHRcdGlmICggIW9wdGlvbnMudW5pcXVlIHx8ICFzZWxmLmhhcyggYXJnICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRsaXN0LnB1c2goIGFyZyApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggYXJnICYmIGFyZy5sZW5ndGggJiYgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBJbnNwZWN0IHJlY3Vyc2l2ZWx5XG5cdFx0XHRcdFx0XHRcdFx0YWRkKCBhcmcgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSkoIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdC8vIERvIHdlIG5lZWQgdG8gYWRkIHRoZSBjYWxsYmFja3MgdG8gdGhlXG5cdFx0XHRcdFx0Ly8gY3VycmVudCBmaXJpbmcgYmF0Y2g/XG5cdFx0XHRcdFx0aWYgKCBmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRmaXJpbmdMZW5ndGggPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0XHQvLyBXaXRoIG1lbW9yeSwgaWYgd2UncmUgbm90IGZpcmluZyB0aGVuXG5cdFx0XHRcdFx0Ly8gd2Ugc2hvdWxkIGNhbGwgcmlnaHQgYXdheVxuXHRcdFx0XHRcdH0gZWxzZSBpZiAoIG1lbW9yeSApIHtcblx0XHRcdFx0XHRcdGZpcmluZ1N0YXJ0ID0gc3RhcnQ7XG5cdFx0XHRcdFx0XHRmaXJlKCBtZW1vcnkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0Ly8gUmVtb3ZlIGEgY2FsbGJhY2sgZnJvbSB0aGUgbGlzdFxuXHRcdFx0cmVtb3ZlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBsaXN0ICkge1xuXHRcdFx0XHRcdGpRdWVyeS5lYWNoKCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBfLCBhcmcgKSB7XG5cdFx0XHRcdFx0XHR2YXIgaW5kZXg7XG5cdFx0XHRcdFx0XHR3aGlsZSAoICggaW5kZXggPSBqUXVlcnkuaW5BcnJheSggYXJnLCBsaXN0LCBpbmRleCApICkgPiAtMSApIHtcblx0XHRcdFx0XHRcdFx0bGlzdC5zcGxpY2UoIGluZGV4LCAxICk7XG5cdFx0XHRcdFx0XHRcdC8vIEhhbmRsZSBmaXJpbmcgaW5kZXhlc1xuXHRcdFx0XHRcdFx0XHRpZiAoIGZpcmluZyApIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGluZGV4IDw9IGZpcmluZ0xlbmd0aCApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGZpcmluZ0xlbmd0aC0tO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAoIGluZGV4IDw9IGZpcmluZ0luZGV4ICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0ZmlyaW5nSW5kZXgtLTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHQvLyBDaGVjayBpZiBhIGdpdmVuIGNhbGxiYWNrIGlzIGluIHRoZSBsaXN0LlxuXHRcdFx0Ly8gSWYgbm8gYXJndW1lbnQgaXMgZ2l2ZW4sIHJldHVybiB3aGV0aGVyIG9yIG5vdCBsaXN0IGhhcyBjYWxsYmFja3MgYXR0YWNoZWQuXG5cdFx0XHRoYXM6IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRcdFx0cmV0dXJuIGZuID8galF1ZXJ5LmluQXJyYXkoIGZuLCBsaXN0ICkgPiAtMSA6ICEhKCBsaXN0ICYmIGxpc3QubGVuZ3RoICk7XG5cdFx0XHR9LFxuXHRcdFx0Ly8gUmVtb3ZlIGFsbCBjYWxsYmFja3MgZnJvbSB0aGUgbGlzdFxuXHRcdFx0ZW1wdHk6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRsaXN0ID0gW107XG5cdFx0XHRcdGZpcmluZ0xlbmd0aCA9IDA7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdC8vIEhhdmUgdGhlIGxpc3QgZG8gbm90aGluZyBhbnltb3JlXG5cdFx0XHRkaXNhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGlzdCA9IHN0YWNrID0gbWVtb3J5ID0gdW5kZWZpbmVkO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHQvLyBJcyBpdCBkaXNhYmxlZD9cblx0XHRcdGRpc2FibGVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICFsaXN0O1xuXHRcdFx0fSxcblx0XHRcdC8vIExvY2sgdGhlIGxpc3QgaW4gaXRzIGN1cnJlbnQgc3RhdGVcblx0XHRcdGxvY2s6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRzdGFjayA9IHVuZGVmaW5lZDtcblx0XHRcdFx0aWYgKCAhbWVtb3J5ICkge1xuXHRcdFx0XHRcdHNlbGYuZGlzYWJsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdC8vIElzIGl0IGxvY2tlZD9cblx0XHRcdGxvY2tlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhc3RhY2s7XG5cdFx0XHR9LFxuXHRcdFx0Ly8gQ2FsbCBhbGwgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGNvbnRleHQgYW5kIGFyZ3VtZW50c1xuXHRcdFx0ZmlyZVdpdGg6IGZ1bmN0aW9uKCBjb250ZXh0LCBhcmdzICkge1xuXHRcdFx0XHRpZiAoIGxpc3QgJiYgKCAhZmlyZWQgfHwgc3RhY2sgKSApIHtcblx0XHRcdFx0XHRhcmdzID0gYXJncyB8fCBbXTtcblx0XHRcdFx0XHRhcmdzID0gWyBjb250ZXh0LCBhcmdzLnNsaWNlID8gYXJncy5zbGljZSgpIDogYXJncyBdO1xuXHRcdFx0XHRcdGlmICggZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0c3RhY2sucHVzaCggYXJncyApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRmaXJlKCBhcmdzICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdC8vIENhbGwgYWxsIHRoZSBjYWxsYmFja3Mgd2l0aCB0aGUgZ2l2ZW4gYXJndW1lbnRzXG5cdFx0XHRmaXJlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c2VsZi5maXJlV2l0aCggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdC8vIFRvIGtub3cgaWYgdGhlIGNhbGxiYWNrcyBoYXZlIGFscmVhZHkgYmVlbiBjYWxsZWQgYXQgbGVhc3Qgb25jZVxuXHRcdFx0ZmlyZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gISFmaXJlZDtcblx0XHRcdH1cblx0XHR9O1xuXG5cdHJldHVybiBzZWxmO1xufTtcblxuXG5qUXVlcnkuZXh0ZW5kKHtcblxuXHREZWZlcnJlZDogZnVuY3Rpb24oIGZ1bmMgKSB7XG5cdFx0dmFyIHR1cGxlcyA9IFtcblx0XHRcdFx0Ly8gYWN0aW9uLCBhZGQgbGlzdGVuZXIsIGxpc3RlbmVyIGxpc3QsIGZpbmFsIHN0YXRlXG5cdFx0XHRcdFsgXCJyZXNvbHZlXCIsIFwiZG9uZVwiLCBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIFwicmVzb2x2ZWRcIiBdLFxuXHRcdFx0XHRbIFwicmVqZWN0XCIsIFwiZmFpbFwiLCBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIiksIFwicmVqZWN0ZWRcIiBdLFxuXHRcdFx0XHRbIFwibm90aWZ5XCIsIFwicHJvZ3Jlc3NcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm1lbW9yeVwiKSBdXG5cdFx0XHRdLFxuXHRcdFx0c3RhdGUgPSBcInBlbmRpbmdcIixcblx0XHRcdHByb21pc2UgPSB7XG5cdFx0XHRcdHN0YXRlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGU7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdGFsd2F5czogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQuZG9uZSggYXJndW1lbnRzICkuZmFpbCggYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdHRoZW46IGZ1bmN0aW9uKCAvKiBmbkRvbmUsIGZuRmFpbCwgZm5Qcm9ncmVzcyAqLyApIHtcblx0XHRcdFx0XHR2YXIgZm5zID0gYXJndW1lbnRzO1xuXHRcdFx0XHRcdHJldHVybiBqUXVlcnkuRGVmZXJyZWQoZnVuY3Rpb24oIG5ld0RlZmVyICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmVhY2goIHR1cGxlcywgZnVuY3Rpb24oIGksIHR1cGxlICkge1xuXHRcdFx0XHRcdFx0XHR2YXIgZm4gPSBqUXVlcnkuaXNGdW5jdGlvbiggZm5zWyBpIF0gKSAmJiBmbnNbIGkgXTtcblx0XHRcdFx0XHRcdFx0Ly8gZGVmZXJyZWRbIGRvbmUgfCBmYWlsIHwgcHJvZ3Jlc3MgXSBmb3IgZm9yd2FyZGluZyBhY3Rpb25zIHRvIG5ld0RlZmVyXG5cdFx0XHRcdFx0XHRcdGRlZmVycmVkWyB0dXBsZVsxXSBdKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciByZXR1cm5lZCA9IGZuICYmIGZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRcdFx0XHRpZiAoIHJldHVybmVkICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCByZXR1cm5lZC5wcm9taXNlICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm5lZC5wcm9taXNlKClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmRvbmUoIG5ld0RlZmVyLnJlc29sdmUgKVxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuZmFpbCggbmV3RGVmZXIucmVqZWN0IClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnByb2dyZXNzKCBuZXdEZWZlci5ub3RpZnkgKTtcblx0XHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdFx0bmV3RGVmZXJbIHR1cGxlWyAwIF0gKyBcIldpdGhcIiBdKCB0aGlzID09PSBwcm9taXNlID8gbmV3RGVmZXIucHJvbWlzZSgpIDogdGhpcywgZm4gPyBbIHJldHVybmVkIF0gOiBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRmbnMgPSBudWxsO1xuXHRcdFx0XHRcdH0pLnByb21pc2UoKTtcblx0XHRcdFx0fSxcblx0XHRcdFx0Ly8gR2V0IGEgcHJvbWlzZSBmb3IgdGhpcyBkZWZlcnJlZFxuXHRcdFx0XHQvLyBJZiBvYmogaXMgcHJvdmlkZWQsIHRoZSBwcm9taXNlIGFzcGVjdCBpcyBhZGRlZCB0byB0aGUgb2JqZWN0XG5cdFx0XHRcdHByb21pc2U6IGZ1bmN0aW9uKCBvYmogKSB7XG5cdFx0XHRcdFx0cmV0dXJuIG9iaiAhPSBudWxsID8galF1ZXJ5LmV4dGVuZCggb2JqLCBwcm9taXNlICkgOiBwcm9taXNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZGVmZXJyZWQgPSB7fTtcblxuXHRcdC8vIEtlZXAgcGlwZSBmb3IgYmFjay1jb21wYXRcblx0XHRwcm9taXNlLnBpcGUgPSBwcm9taXNlLnRoZW47XG5cblx0XHQvLyBBZGQgbGlzdC1zcGVjaWZpYyBtZXRob2RzXG5cdFx0alF1ZXJ5LmVhY2goIHR1cGxlcywgZnVuY3Rpb24oIGksIHR1cGxlICkge1xuXHRcdFx0dmFyIGxpc3QgPSB0dXBsZVsgMiBdLFxuXHRcdFx0XHRzdGF0ZVN0cmluZyA9IHR1cGxlWyAzIF07XG5cblx0XHRcdC8vIHByb21pc2VbIGRvbmUgfCBmYWlsIHwgcHJvZ3Jlc3MgXSA9IGxpc3QuYWRkXG5cdFx0XHRwcm9taXNlWyB0dXBsZVsxXSBdID0gbGlzdC5hZGQ7XG5cblx0XHRcdC8vIEhhbmRsZSBzdGF0ZVxuXHRcdFx0aWYgKCBzdGF0ZVN0cmluZyApIHtcblx0XHRcdFx0bGlzdC5hZGQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0Ly8gc3RhdGUgPSBbIHJlc29sdmVkIHwgcmVqZWN0ZWQgXVxuXHRcdFx0XHRcdHN0YXRlID0gc3RhdGVTdHJpbmc7XG5cblx0XHRcdFx0Ly8gWyByZWplY3RfbGlzdCB8IHJlc29sdmVfbGlzdCBdLmRpc2FibGU7IHByb2dyZXNzX2xpc3QubG9ja1xuXHRcdFx0XHR9LCB0dXBsZXNbIGkgXiAxIF1bIDIgXS5kaXNhYmxlLCB0dXBsZXNbIDIgXVsgMiBdLmxvY2sgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gZGVmZXJyZWRbIHJlc29sdmUgfCByZWplY3QgfCBub3RpZnkgXVxuXHRcdFx0ZGVmZXJyZWRbIHR1cGxlWzBdIF0gPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGVmZXJyZWRbIHR1cGxlWzBdICsgXCJXaXRoXCIgXSggdGhpcyA9PT0gZGVmZXJyZWQgPyBwcm9taXNlIDogdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fTtcblx0XHRcdGRlZmVycmVkWyB0dXBsZVswXSArIFwiV2l0aFwiIF0gPSBsaXN0LmZpcmVXaXRoO1xuXHRcdH0pO1xuXG5cdFx0Ly8gTWFrZSB0aGUgZGVmZXJyZWQgYSBwcm9taXNlXG5cdFx0cHJvbWlzZS5wcm9taXNlKCBkZWZlcnJlZCApO1xuXG5cdFx0Ly8gQ2FsbCBnaXZlbiBmdW5jIGlmIGFueVxuXHRcdGlmICggZnVuYyApIHtcblx0XHRcdGZ1bmMuY2FsbCggZGVmZXJyZWQsIGRlZmVycmVkICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsIGRvbmUhXG5cdFx0cmV0dXJuIGRlZmVycmVkO1xuXHR9LFxuXG5cdC8vIERlZmVycmVkIGhlbHBlclxuXHR3aGVuOiBmdW5jdGlvbiggc3Vib3JkaW5hdGUgLyogLCAuLi4sIHN1Ym9yZGluYXRlTiAqLyApIHtcblx0XHR2YXIgaSA9IDAsXG5cdFx0XHRyZXNvbHZlVmFsdWVzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzICksXG5cdFx0XHRsZW5ndGggPSByZXNvbHZlVmFsdWVzLmxlbmd0aCxcblxuXHRcdFx0Ly8gdGhlIGNvdW50IG9mIHVuY29tcGxldGVkIHN1Ym9yZGluYXRlc1xuXHRcdFx0cmVtYWluaW5nID0gbGVuZ3RoICE9PSAxIHx8ICggc3Vib3JkaW5hdGUgJiYgalF1ZXJ5LmlzRnVuY3Rpb24oIHN1Ym9yZGluYXRlLnByb21pc2UgKSApID8gbGVuZ3RoIDogMCxcblxuXHRcdFx0Ly8gdGhlIG1hc3RlciBEZWZlcnJlZC4gSWYgcmVzb2x2ZVZhbHVlcyBjb25zaXN0IG9mIG9ubHkgYSBzaW5nbGUgRGVmZXJyZWQsIGp1c3QgdXNlIHRoYXQuXG5cdFx0XHRkZWZlcnJlZCA9IHJlbWFpbmluZyA9PT0gMSA/IHN1Ym9yZGluYXRlIDogalF1ZXJ5LkRlZmVycmVkKCksXG5cblx0XHRcdC8vIFVwZGF0ZSBmdW5jdGlvbiBmb3IgYm90aCByZXNvbHZlIGFuZCBwcm9ncmVzcyB2YWx1ZXNcblx0XHRcdHVwZGF0ZUZ1bmMgPSBmdW5jdGlvbiggaSwgY29udGV4dHMsIHZhbHVlcyApIHtcblx0XHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdFx0XHRjb250ZXh0c1sgaSBdID0gdGhpcztcblx0XHRcdFx0XHR2YWx1ZXNbIGkgXSA9IGFyZ3VtZW50cy5sZW5ndGggPiAxID8gc2xpY2UuY2FsbCggYXJndW1lbnRzICkgOiB2YWx1ZTtcblx0XHRcdFx0XHRpZiAoIHZhbHVlcyA9PT0gcHJvZ3Jlc3NWYWx1ZXMgKSB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoKCBjb250ZXh0cywgdmFsdWVzICk7XG5cdFx0XHRcdFx0fSBlbHNlIGlmICggISggLS1yZW1haW5pbmcgKSApIHtcblx0XHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBjb250ZXh0cywgdmFsdWVzICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9O1xuXHRcdFx0fSxcblxuXHRcdFx0cHJvZ3Jlc3NWYWx1ZXMsIHByb2dyZXNzQ29udGV4dHMsIHJlc29sdmVDb250ZXh0cztcblxuXHRcdC8vIEFkZCBsaXN0ZW5lcnMgdG8gRGVmZXJyZWQgc3Vib3JkaW5hdGVzOyB0cmVhdCBvdGhlcnMgYXMgcmVzb2x2ZWRcblx0XHRpZiAoIGxlbmd0aCA+IDEgKSB7XG5cdFx0XHRwcm9ncmVzc1ZhbHVlcyA9IG5ldyBBcnJheSggbGVuZ3RoICk7XG5cdFx0XHRwcm9ncmVzc0NvbnRleHRzID0gbmV3IEFycmF5KCBsZW5ndGggKTtcblx0XHRcdHJlc29sdmVDb250ZXh0cyA9IG5ldyBBcnJheSggbGVuZ3RoICk7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0aWYgKCByZXNvbHZlVmFsdWVzWyBpIF0gJiYgalF1ZXJ5LmlzRnVuY3Rpb24oIHJlc29sdmVWYWx1ZXNbIGkgXS5wcm9taXNlICkgKSB7XG5cdFx0XHRcdFx0cmVzb2x2ZVZhbHVlc1sgaSBdLnByb21pc2UoKVxuXHRcdFx0XHRcdFx0LmRvbmUoIHVwZGF0ZUZ1bmMoIGksIHJlc29sdmVDb250ZXh0cywgcmVzb2x2ZVZhbHVlcyApIClcblx0XHRcdFx0XHRcdC5mYWlsKCBkZWZlcnJlZC5yZWplY3QgKVxuXHRcdFx0XHRcdFx0LnByb2dyZXNzKCB1cGRhdGVGdW5jKCBpLCBwcm9ncmVzc0NvbnRleHRzLCBwcm9ncmVzc1ZhbHVlcyApICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0LS1yZW1haW5pbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBJZiB3ZSdyZSBub3Qgd2FpdGluZyBvbiBhbnl0aGluZywgcmVzb2x2ZSB0aGUgbWFzdGVyXG5cdFx0aWYgKCAhcmVtYWluaW5nICkge1xuXHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIHJlc29sdmVDb250ZXh0cywgcmVzb2x2ZVZhbHVlcyApO1xuXHRcdH1cblxuXHRcdHJldHVybiBkZWZlcnJlZC5wcm9taXNlKCk7XG5cdH1cbn0pO1xuXG5cbi8vIFRoZSBkZWZlcnJlZCB1c2VkIG9uIERPTSByZWFkeVxudmFyIHJlYWR5TGlzdDtcblxualF1ZXJ5LmZuLnJlYWR5ID0gZnVuY3Rpb24oIGZuICkge1xuXHQvLyBBZGQgdGhlIGNhbGxiYWNrXG5cdGpRdWVyeS5yZWFkeS5wcm9taXNlKCkuZG9uZSggZm4gKTtcblxuXHRyZXR1cm4gdGhpcztcbn07XG5cbmpRdWVyeS5leHRlbmQoe1xuXHQvLyBJcyB0aGUgRE9NIHJlYWR5IHRvIGJlIHVzZWQ/IFNldCB0byB0cnVlIG9uY2UgaXQgb2NjdXJzLlxuXHRpc1JlYWR5OiBmYWxzZSxcblxuXHQvLyBBIGNvdW50ZXIgdG8gdHJhY2sgaG93IG1hbnkgaXRlbXMgdG8gd2FpdCBmb3IgYmVmb3JlXG5cdC8vIHRoZSByZWFkeSBldmVudCBmaXJlcy4gU2VlICM2NzgxXG5cdHJlYWR5V2FpdDogMSxcblxuXHQvLyBIb2xkIChvciByZWxlYXNlKSB0aGUgcmVhZHkgZXZlbnRcblx0aG9sZFJlYWR5OiBmdW5jdGlvbiggaG9sZCApIHtcblx0XHRpZiAoIGhvbGQgKSB7XG5cdFx0XHRqUXVlcnkucmVhZHlXYWl0Kys7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGpRdWVyeS5yZWFkeSggdHJ1ZSApO1xuXHRcdH1cblx0fSxcblxuXHQvLyBIYW5kbGUgd2hlbiB0aGUgRE9NIGlzIHJlYWR5XG5cdHJlYWR5OiBmdW5jdGlvbiggd2FpdCApIHtcblxuXHRcdC8vIEFib3J0IGlmIHRoZXJlIGFyZSBwZW5kaW5nIGhvbGRzIG9yIHdlJ3JlIGFscmVhZHkgcmVhZHlcblx0XHRpZiAoIHdhaXQgPT09IHRydWUgPyAtLWpRdWVyeS5yZWFkeVdhaXQgOiBqUXVlcnkuaXNSZWFkeSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBSZW1lbWJlciB0aGF0IHRoZSBET00gaXMgcmVhZHlcblx0XHRqUXVlcnkuaXNSZWFkeSA9IHRydWU7XG5cblx0XHQvLyBJZiBhIG5vcm1hbCBET00gUmVhZHkgZXZlbnQgZmlyZWQsIGRlY3JlbWVudCwgYW5kIHdhaXQgaWYgbmVlZCBiZVxuXHRcdGlmICggd2FpdCAhPT0gdHJ1ZSAmJiAtLWpRdWVyeS5yZWFkeVdhaXQgPiAwICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIElmIHRoZXJlIGFyZSBmdW5jdGlvbnMgYm91bmQsIHRvIGV4ZWN1dGVcblx0XHRyZWFkeUxpc3QucmVzb2x2ZVdpdGgoIGRvY3VtZW50LCBbIGpRdWVyeSBdICk7XG5cblx0XHQvLyBUcmlnZ2VyIGFueSBib3VuZCByZWFkeSBldmVudHNcblx0XHRpZiAoIGpRdWVyeS5mbi50cmlnZ2VySGFuZGxlciApIHtcblx0XHRcdGpRdWVyeSggZG9jdW1lbnQgKS50cmlnZ2VySGFuZGxlciggXCJyZWFkeVwiICk7XG5cdFx0XHRqUXVlcnkoIGRvY3VtZW50ICkub2ZmKCBcInJlYWR5XCIgKTtcblx0XHR9XG5cdH1cbn0pO1xuXG4vKipcbiAqIFRoZSByZWFkeSBldmVudCBoYW5kbGVyIGFuZCBzZWxmIGNsZWFudXAgbWV0aG9kXG4gKi9cbmZ1bmN0aW9uIGNvbXBsZXRlZCgpIHtcblx0ZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lciggXCJET01Db250ZW50TG9hZGVkXCIsIGNvbXBsZXRlZCwgZmFsc2UgKTtcblx0d2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBjb21wbGV0ZWQsIGZhbHNlICk7XG5cdGpRdWVyeS5yZWFkeSgpO1xufVxuXG5qUXVlcnkucmVhZHkucHJvbWlzZSA9IGZ1bmN0aW9uKCBvYmogKSB7XG5cdGlmICggIXJlYWR5TGlzdCApIHtcblxuXHRcdHJlYWR5TGlzdCA9IGpRdWVyeS5EZWZlcnJlZCgpO1xuXG5cdFx0Ly8gQ2F0Y2ggY2FzZXMgd2hlcmUgJChkb2N1bWVudCkucmVhZHkoKSBpcyBjYWxsZWQgYWZ0ZXIgdGhlIGJyb3dzZXIgZXZlbnQgaGFzIGFscmVhZHkgb2NjdXJyZWQuXG5cdFx0Ly8gV2Ugb25jZSB0cmllZCB0byB1c2UgcmVhZHlTdGF0ZSBcImludGVyYWN0aXZlXCIgaGVyZSwgYnV0IGl0IGNhdXNlZCBpc3N1ZXMgbGlrZSB0aGUgb25lXG5cdFx0Ly8gZGlzY292ZXJlZCBieSBDaHJpc1MgaGVyZTogaHR0cDovL2J1Z3MuanF1ZXJ5LmNvbS90aWNrZXQvMTIyODIjY29tbWVudDoxNVxuXHRcdGlmICggZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gXCJjb21wbGV0ZVwiICkge1xuXHRcdFx0Ly8gSGFuZGxlIGl0IGFzeW5jaHJvbm91c2x5IHRvIGFsbG93IHNjcmlwdHMgdGhlIG9wcG9ydHVuaXR5IHRvIGRlbGF5IHJlYWR5XG5cdFx0XHRzZXRUaW1lb3V0KCBqUXVlcnkucmVhZHkgKTtcblxuXHRcdH0gZWxzZSB7XG5cblx0XHRcdC8vIFVzZSB0aGUgaGFuZHkgZXZlbnQgY2FsbGJhY2tcblx0XHRcdGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQsIGZhbHNlICk7XG5cblx0XHRcdC8vIEEgZmFsbGJhY2sgdG8gd2luZG93Lm9ubG9hZCwgdGhhdCB3aWxsIGFsd2F5cyB3b3JrXG5cdFx0XHR3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lciggXCJsb2FkXCIsIGNvbXBsZXRlZCwgZmFsc2UgKTtcblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlYWR5TGlzdC5wcm9taXNlKCBvYmogKTtcbn07XG5cbi8vIEtpY2sgb2ZmIHRoZSBET00gcmVhZHkgY2hlY2sgZXZlbiBpZiB0aGUgdXNlciBkb2VzIG5vdFxualF1ZXJ5LnJlYWR5LnByb21pc2UoKTtcblxuXG5cblxuLy8gTXVsdGlmdW5jdGlvbmFsIG1ldGhvZCB0byBnZXQgYW5kIHNldCB2YWx1ZXMgb2YgYSBjb2xsZWN0aW9uXG4vLyBUaGUgdmFsdWUvcyBjYW4gb3B0aW9uYWxseSBiZSBleGVjdXRlZCBpZiBpdCdzIGEgZnVuY3Rpb25cbnZhciBhY2Nlc3MgPSBqUXVlcnkuYWNjZXNzID0gZnVuY3Rpb24oIGVsZW1zLCBmbiwga2V5LCB2YWx1ZSwgY2hhaW5hYmxlLCBlbXB0eUdldCwgcmF3ICkge1xuXHR2YXIgaSA9IDAsXG5cdFx0bGVuID0gZWxlbXMubGVuZ3RoLFxuXHRcdGJ1bGsgPSBrZXkgPT0gbnVsbDtcblxuXHQvLyBTZXRzIG1hbnkgdmFsdWVzXG5cdGlmICggalF1ZXJ5LnR5cGUoIGtleSApID09PSBcIm9iamVjdFwiICkge1xuXHRcdGNoYWluYWJsZSA9IHRydWU7XG5cdFx0Zm9yICggaSBpbiBrZXkgKSB7XG5cdFx0XHRqUXVlcnkuYWNjZXNzKCBlbGVtcywgZm4sIGksIGtleVtpXSwgdHJ1ZSwgZW1wdHlHZXQsIHJhdyApO1xuXHRcdH1cblxuXHQvLyBTZXRzIG9uZSB2YWx1ZVxuXHR9IGVsc2UgaWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdGNoYWluYWJsZSA9IHRydWU7XG5cblx0XHRpZiAoICFqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJhdyA9IHRydWU7XG5cdFx0fVxuXG5cdFx0aWYgKCBidWxrICkge1xuXHRcdFx0Ly8gQnVsayBvcGVyYXRpb25zIHJ1biBhZ2FpbnN0IHRoZSBlbnRpcmUgc2V0XG5cdFx0XHRpZiAoIHJhdyApIHtcblx0XHRcdFx0Zm4uY2FsbCggZWxlbXMsIHZhbHVlICk7XG5cdFx0XHRcdGZuID0gbnVsbDtcblxuXHRcdFx0Ly8gLi4uZXhjZXB0IHdoZW4gZXhlY3V0aW5nIGZ1bmN0aW9uIHZhbHVlc1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0YnVsayA9IGZuO1xuXHRcdFx0XHRmbiA9IGZ1bmN0aW9uKCBlbGVtLCBrZXksIHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiBidWxrLmNhbGwoIGpRdWVyeSggZWxlbSApLCB2YWx1ZSApO1xuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggZm4gKSB7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0Zm4oIGVsZW1zW2ldLCBrZXksIHJhdyA/IHZhbHVlIDogdmFsdWUuY2FsbCggZWxlbXNbaV0sIGksIGZuKCBlbGVtc1tpXSwga2V5ICkgKSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBjaGFpbmFibGUgP1xuXHRcdGVsZW1zIDpcblxuXHRcdC8vIEdldHNcblx0XHRidWxrID9cblx0XHRcdGZuLmNhbGwoIGVsZW1zICkgOlxuXHRcdFx0bGVuID8gZm4oIGVsZW1zWzBdLCBrZXkgKSA6IGVtcHR5R2V0O1xufTtcblxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhbiBvYmplY3QgY2FuIGhhdmUgZGF0YVxuICovXG5qUXVlcnkuYWNjZXB0RGF0YSA9IGZ1bmN0aW9uKCBvd25lciApIHtcblx0Ly8gQWNjZXB0cyBvbmx5OlxuXHQvLyAgLSBOb2RlXG5cdC8vICAgIC0gTm9kZS5FTEVNRU5UX05PREVcblx0Ly8gICAgLSBOb2RlLkRPQ1VNRU5UX05PREVcblx0Ly8gIC0gT2JqZWN0XG5cdC8vICAgIC0gQW55XG5cdC8qIGpzaGludCAtVzAxOCAqL1xuXHRyZXR1cm4gb3duZXIubm9kZVR5cGUgPT09IDEgfHwgb3duZXIubm9kZVR5cGUgPT09IDkgfHwgISggK293bmVyLm5vZGVUeXBlICk7XG59O1xuXG5cbmZ1bmN0aW9uIERhdGEoKSB7XG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NCxcblx0Ly8gT2xkIFdlYktpdCBkb2VzIG5vdCBoYXZlIE9iamVjdC5wcmV2ZW50RXh0ZW5zaW9ucy9mcmVlemUgbWV0aG9kLFxuXHQvLyByZXR1cm4gbmV3IGVtcHR5IG9iamVjdCBpbnN0ZWFkIHdpdGggbm8gW1tzZXRdXSBhY2Nlc3NvclxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoIHRoaXMuY2FjaGUgPSB7fSwgMCwge1xuXHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4ge307XG5cdFx0fVxuXHR9KTtcblxuXHR0aGlzLmV4cGFuZG8gPSBqUXVlcnkuZXhwYW5kbyArIERhdGEudWlkKys7XG59XG5cbkRhdGEudWlkID0gMTtcbkRhdGEuYWNjZXB0cyA9IGpRdWVyeS5hY2NlcHREYXRhO1xuXG5EYXRhLnByb3RvdHlwZSA9IHtcblx0a2V5OiBmdW5jdGlvbiggb3duZXIgKSB7XG5cdFx0Ly8gV2UgY2FuIGFjY2VwdCBkYXRhIGZvciBub24tZWxlbWVudCBub2RlcyBpbiBtb2Rlcm4gYnJvd3NlcnMsXG5cdFx0Ly8gYnV0IHdlIHNob3VsZCBub3QsIHNlZSAjODMzNS5cblx0XHQvLyBBbHdheXMgcmV0dXJuIHRoZSBrZXkgZm9yIGEgZnJvemVuIG9iamVjdC5cblx0XHRpZiAoICFEYXRhLmFjY2VwdHMoIG93bmVyICkgKSB7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHR2YXIgZGVzY3JpcHRvciA9IHt9LFxuXHRcdFx0Ly8gQ2hlY2sgaWYgdGhlIG93bmVyIG9iamVjdCBhbHJlYWR5IGhhcyBhIGNhY2hlIGtleVxuXHRcdFx0dW5sb2NrID0gb3duZXJbIHRoaXMuZXhwYW5kbyBdO1xuXG5cdFx0Ly8gSWYgbm90LCBjcmVhdGUgb25lXG5cdFx0aWYgKCAhdW5sb2NrICkge1xuXHRcdFx0dW5sb2NrID0gRGF0YS51aWQrKztcblxuXHRcdFx0Ly8gU2VjdXJlIGl0IGluIGEgbm9uLWVudW1lcmFibGUsIG5vbi13cml0YWJsZSBwcm9wZXJ0eVxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0ZGVzY3JpcHRvclsgdGhpcy5leHBhbmRvIF0gPSB7IHZhbHVlOiB1bmxvY2sgfTtcblx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnRpZXMoIG93bmVyLCBkZXNjcmlwdG9yICk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NFxuXHRcdFx0Ly8gRmFsbGJhY2sgdG8gYSBsZXNzIHNlY3VyZSBkZWZpbml0aW9uXG5cdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0ZGVzY3JpcHRvclsgdGhpcy5leHBhbmRvIF0gPSB1bmxvY2s7XG5cdFx0XHRcdGpRdWVyeS5leHRlbmQoIG93bmVyLCBkZXNjcmlwdG9yICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gRW5zdXJlIHRoZSBjYWNoZSBvYmplY3Rcblx0XHRpZiAoICF0aGlzLmNhY2hlWyB1bmxvY2sgXSApIHtcblx0XHRcdHRoaXMuY2FjaGVbIHVubG9jayBdID0ge307XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHVubG9jaztcblx0fSxcblx0c2V0OiBmdW5jdGlvbiggb3duZXIsIGRhdGEsIHZhbHVlICkge1xuXHRcdHZhciBwcm9wLFxuXHRcdFx0Ly8gVGhlcmUgbWF5IGJlIGFuIHVubG9jayBhc3NpZ25lZCB0byB0aGlzIG5vZGUsXG5cdFx0XHQvLyBpZiB0aGVyZSBpcyBubyBlbnRyeSBmb3IgdGhpcyBcIm93bmVyXCIsIGNyZWF0ZSBvbmUgaW5saW5lXG5cdFx0XHQvLyBhbmQgc2V0IHRoZSB1bmxvY2sgYXMgdGhvdWdoIGFuIG93bmVyIGVudHJ5IGhhZCBhbHdheXMgZXhpc3RlZFxuXHRcdFx0dW5sb2NrID0gdGhpcy5rZXkoIG93bmVyICksXG5cdFx0XHRjYWNoZSA9IHRoaXMuY2FjaGVbIHVubG9jayBdO1xuXG5cdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCBrZXksIHZhbHVlIF0gYXJnc1xuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRjYWNoZVsgZGF0YSBdID0gdmFsdWU7XG5cblx0XHQvLyBIYW5kbGU6IFsgb3duZXIsIHsgcHJvcGVydGllcyB9IF0gYXJnc1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBGcmVzaCBhc3NpZ25tZW50cyBieSBvYmplY3QgYXJlIHNoYWxsb3cgY29waWVkXG5cdFx0XHRpZiAoIGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBjYWNoZSApICkge1xuXHRcdFx0XHRqUXVlcnkuZXh0ZW5kKCB0aGlzLmNhY2hlWyB1bmxvY2sgXSwgZGF0YSApO1xuXHRcdFx0Ly8gT3RoZXJ3aXNlLCBjb3B5IHRoZSBwcm9wZXJ0aWVzIG9uZS1ieS1vbmUgdG8gdGhlIGNhY2hlIG9iamVjdFxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Zm9yICggcHJvcCBpbiBkYXRhICkge1xuXHRcdFx0XHRcdGNhY2hlWyBwcm9wIF0gPSBkYXRhWyBwcm9wIF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGNhY2hlO1xuXHR9LFxuXHRnZXQ6IGZ1bmN0aW9uKCBvd25lciwga2V5ICkge1xuXHRcdC8vIEVpdGhlciBhIHZhbGlkIGNhY2hlIGlzIGZvdW5kLCBvciB3aWxsIGJlIGNyZWF0ZWQuXG5cdFx0Ly8gTmV3IGNhY2hlcyB3aWxsIGJlIGNyZWF0ZWQgYW5kIHRoZSB1bmxvY2sgcmV0dXJuZWQsXG5cdFx0Ly8gYWxsb3dpbmcgZGlyZWN0IGFjY2VzcyB0byB0aGUgbmV3bHkgY3JlYXRlZFxuXHRcdC8vIGVtcHR5IGRhdGEgb2JqZWN0LiBBIHZhbGlkIG93bmVyIG9iamVjdCBtdXN0IGJlIHByb3ZpZGVkLlxuXHRcdHZhciBjYWNoZSA9IHRoaXMuY2FjaGVbIHRoaXMua2V5KCBvd25lciApIF07XG5cblx0XHRyZXR1cm4ga2V5ID09PSB1bmRlZmluZWQgP1xuXHRcdFx0Y2FjaGUgOiBjYWNoZVsga2V5IF07XG5cdH0sXG5cdGFjY2VzczogZnVuY3Rpb24oIG93bmVyLCBrZXksIHZhbHVlICkge1xuXHRcdHZhciBzdG9yZWQ7XG5cdFx0Ly8gSW4gY2FzZXMgd2hlcmUgZWl0aGVyOlxuXHRcdC8vXG5cdFx0Ly8gICAxLiBObyBrZXkgd2FzIHNwZWNpZmllZFxuXHRcdC8vICAgMi4gQSBzdHJpbmcga2V5IHdhcyBzcGVjaWZpZWQsIGJ1dCBubyB2YWx1ZSBwcm92aWRlZFxuXHRcdC8vXG5cdFx0Ly8gVGFrZSB0aGUgXCJyZWFkXCIgcGF0aCBhbmQgYWxsb3cgdGhlIGdldCBtZXRob2QgdG8gZGV0ZXJtaW5lXG5cdFx0Ly8gd2hpY2ggdmFsdWUgdG8gcmV0dXJuLCByZXNwZWN0aXZlbHkgZWl0aGVyOlxuXHRcdC8vXG5cdFx0Ly8gICAxLiBUaGUgZW50aXJlIGNhY2hlIG9iamVjdFxuXHRcdC8vICAgMi4gVGhlIGRhdGEgc3RvcmVkIGF0IHRoZSBrZXlcblx0XHQvL1xuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgfHxcblx0XHRcdFx0KChrZXkgJiYgdHlwZW9mIGtleSA9PT0gXCJzdHJpbmdcIikgJiYgdmFsdWUgPT09IHVuZGVmaW5lZCkgKSB7XG5cblx0XHRcdHN0b3JlZCA9IHRoaXMuZ2V0KCBvd25lciwga2V5ICk7XG5cblx0XHRcdHJldHVybiBzdG9yZWQgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHN0b3JlZCA6IHRoaXMuZ2V0KCBvd25lciwgalF1ZXJ5LmNhbWVsQ2FzZShrZXkpICk7XG5cdFx0fVxuXG5cdFx0Ly8gWypdV2hlbiB0aGUga2V5IGlzIG5vdCBhIHN0cmluZywgb3IgYm90aCBhIGtleSBhbmQgdmFsdWVcblx0XHQvLyBhcmUgc3BlY2lmaWVkLCBzZXQgb3IgZXh0ZW5kIChleGlzdGluZyBvYmplY3RzKSB3aXRoIGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gQW4gb2JqZWN0IG9mIHByb3BlcnRpZXNcblx0XHQvLyAgIDIuIEEga2V5IGFuZCB2YWx1ZVxuXHRcdC8vXG5cdFx0dGhpcy5zZXQoIG93bmVyLCBrZXksIHZhbHVlICk7XG5cblx0XHQvLyBTaW5jZSB0aGUgXCJzZXRcIiBwYXRoIGNhbiBoYXZlIHR3byBwb3NzaWJsZSBlbnRyeSBwb2ludHNcblx0XHQvLyByZXR1cm4gdGhlIGV4cGVjdGVkIGRhdGEgYmFzZWQgb24gd2hpY2ggcGF0aCB3YXMgdGFrZW5bKl1cblx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/IHZhbHVlIDoga2V5O1xuXHR9LFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCBvd25lciwga2V5ICkge1xuXHRcdHZhciBpLCBuYW1lLCBjYW1lbCxcblx0XHRcdHVubG9jayA9IHRoaXMua2V5KCBvd25lciApLFxuXHRcdFx0Y2FjaGUgPSB0aGlzLmNhY2hlWyB1bmxvY2sgXTtcblxuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHR0aGlzLmNhY2hlWyB1bmxvY2sgXSA9IHt9O1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIFN1cHBvcnQgYXJyYXkgb3Igc3BhY2Ugc2VwYXJhdGVkIHN0cmluZyBvZiBrZXlzXG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCBrZXkgKSApIHtcblx0XHRcdFx0Ly8gSWYgXCJuYW1lXCIgaXMgYW4gYXJyYXkgb2Yga2V5cy4uLlxuXHRcdFx0XHQvLyBXaGVuIGRhdGEgaXMgaW5pdGlhbGx5IGNyZWF0ZWQsIHZpYSAoXCJrZXlcIiwgXCJ2YWxcIikgc2lnbmF0dXJlLFxuXHRcdFx0XHQvLyBrZXlzIHdpbGwgYmUgY29udmVydGVkIHRvIGNhbWVsQ2FzZS5cblx0XHRcdFx0Ly8gU2luY2UgdGhlcmUgaXMgbm8gd2F5IHRvIHRlbGwgX2hvd18gYSBrZXkgd2FzIGFkZGVkLCByZW1vdmVcblx0XHRcdFx0Ly8gYm90aCBwbGFpbiBrZXkgYW5kIGNhbWVsQ2FzZSBrZXkuICMxMjc4NlxuXHRcdFx0XHQvLyBUaGlzIHdpbGwgb25seSBwZW5hbGl6ZSB0aGUgYXJyYXkgYXJndW1lbnQgcGF0aC5cblx0XHRcdFx0bmFtZSA9IGtleS5jb25jYXQoIGtleS5tYXAoIGpRdWVyeS5jYW1lbENhc2UgKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2FtZWwgPSBqUXVlcnkuY2FtZWxDYXNlKCBrZXkgKTtcblx0XHRcdFx0Ly8gVHJ5IHRoZSBzdHJpbmcgYXMgYSBrZXkgYmVmb3JlIGFueSBtYW5pcHVsYXRpb25cblx0XHRcdFx0aWYgKCBrZXkgaW4gY2FjaGUgKSB7XG5cdFx0XHRcdFx0bmFtZSA9IFsga2V5LCBjYW1lbCBdO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIElmIGEga2V5IHdpdGggdGhlIHNwYWNlcyBleGlzdHMsIHVzZSBpdC5cblx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIGNyZWF0ZSBhbiBhcnJheSBieSBtYXRjaGluZyBub24td2hpdGVzcGFjZVxuXHRcdFx0XHRcdG5hbWUgPSBjYW1lbDtcblx0XHRcdFx0XHRuYW1lID0gbmFtZSBpbiBjYWNoZSA/XG5cdFx0XHRcdFx0XHRbIG5hbWUgXSA6ICggbmFtZS5tYXRjaCggcm5vdHdoaXRlICkgfHwgW10gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpID0gbmFtZS5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0ZGVsZXRlIGNhY2hlWyBuYW1lWyBpIF0gXTtcblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cdGhhc0RhdGE6IGZ1bmN0aW9uKCBvd25lciApIHtcblx0XHRyZXR1cm4gIWpRdWVyeS5pc0VtcHR5T2JqZWN0KFxuXHRcdFx0dGhpcy5jYWNoZVsgb3duZXJbIHRoaXMuZXhwYW5kbyBdIF0gfHwge31cblx0XHQpO1xuXHR9LFxuXHRkaXNjYXJkOiBmdW5jdGlvbiggb3duZXIgKSB7XG5cdFx0aWYgKCBvd25lclsgdGhpcy5leHBhbmRvIF0gKSB7XG5cdFx0XHRkZWxldGUgdGhpcy5jYWNoZVsgb3duZXJbIHRoaXMuZXhwYW5kbyBdIF07XG5cdFx0fVxuXHR9XG59O1xudmFyIGRhdGFfcHJpdiA9IG5ldyBEYXRhKCk7XG5cbnZhciBkYXRhX3VzZXIgPSBuZXcgRGF0YSgpO1xuXG5cblxuLy9cdEltcGxlbWVudGF0aW9uIFN1bW1hcnlcbi8vXG4vL1x0MS4gRW5mb3JjZSBBUEkgc3VyZmFjZSBhbmQgc2VtYW50aWMgY29tcGF0aWJpbGl0eSB3aXRoIDEuOS54IGJyYW5jaFxuLy9cdDIuIEltcHJvdmUgdGhlIG1vZHVsZSdzIG1haW50YWluYWJpbGl0eSBieSByZWR1Y2luZyB0aGUgc3RvcmFnZVxuLy9cdFx0cGF0aHMgdG8gYSBzaW5nbGUgbWVjaGFuaXNtLlxuLy9cdDMuIFVzZSB0aGUgc2FtZSBzaW5nbGUgbWVjaGFuaXNtIHRvIHN1cHBvcnQgXCJwcml2YXRlXCIgYW5kIFwidXNlclwiIGRhdGEuXG4vL1x0NC4gX05ldmVyXyBleHBvc2UgXCJwcml2YXRlXCIgZGF0YSB0byB1c2VyIGNvZGUgKFRPRE86IERyb3AgX2RhdGEsIF9yZW1vdmVEYXRhKVxuLy9cdDUuIEF2b2lkIGV4cG9zaW5nIGltcGxlbWVudGF0aW9uIGRldGFpbHMgb24gdXNlciBvYmplY3RzIChlZy4gZXhwYW5kbyBwcm9wZXJ0aWVzKVxuLy9cdDYuIFByb3ZpZGUgYSBjbGVhciBwYXRoIGZvciBpbXBsZW1lbnRhdGlvbiB1cGdyYWRlIHRvIFdlYWtNYXAgaW4gMjAxNFxuXG52YXIgcmJyYWNlID0gL14oPzpcXHtbXFx3XFxXXSpcXH18XFxbW1xcd1xcV10qXFxdKSQvLFxuXHRybXVsdGlEYXNoID0gLyhbQS1aXSkvZztcblxuZnVuY3Rpb24gZGF0YUF0dHIoIGVsZW0sIGtleSwgZGF0YSApIHtcblx0dmFyIG5hbWU7XG5cblx0Ly8gSWYgbm90aGluZyB3YXMgZm91bmQgaW50ZXJuYWxseSwgdHJ5IHRvIGZldGNoIGFueVxuXHQvLyBkYXRhIGZyb20gdGhlIEhUTUw1IGRhdGEtKiBhdHRyaWJ1dGVcblx0aWYgKCBkYXRhID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRuYW1lID0gXCJkYXRhLVwiICsga2V5LnJlcGxhY2UoIHJtdWx0aURhc2gsIFwiLSQxXCIgKS50b0xvd2VyQ2FzZSgpO1xuXHRcdGRhdGEgPSBlbGVtLmdldEF0dHJpYnV0ZSggbmFtZSApO1xuXG5cdFx0aWYgKCB0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRhdGEgPSBkYXRhID09PSBcInRydWVcIiA/IHRydWUgOlxuXHRcdFx0XHRcdGRhdGEgPT09IFwiZmFsc2VcIiA/IGZhbHNlIDpcblx0XHRcdFx0XHRkYXRhID09PSBcIm51bGxcIiA/IG51bGwgOlxuXHRcdFx0XHRcdC8vIE9ubHkgY29udmVydCB0byBhIG51bWJlciBpZiBpdCBkb2Vzbid0IGNoYW5nZSB0aGUgc3RyaW5nXG5cdFx0XHRcdFx0K2RhdGEgKyBcIlwiID09PSBkYXRhID8gK2RhdGEgOlxuXHRcdFx0XHRcdHJicmFjZS50ZXN0KCBkYXRhICkgPyBqUXVlcnkucGFyc2VKU09OKCBkYXRhICkgOlxuXHRcdFx0XHRcdGRhdGE7XG5cdFx0XHR9IGNhdGNoKCBlICkge31cblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHdlIHNldCB0aGUgZGF0YSBzbyBpdCBpc24ndCBjaGFuZ2VkIGxhdGVyXG5cdFx0XHRkYXRhX3VzZXIuc2V0KCBlbGVtLCBrZXksIGRhdGEgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblx0cmV0dXJuIGRhdGE7XG59XG5cbmpRdWVyeS5leHRlbmQoe1xuXHRoYXNEYXRhOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4gZGF0YV91c2VyLmhhc0RhdGEoIGVsZW0gKSB8fCBkYXRhX3ByaXYuaGFzRGF0YSggZWxlbSApO1xuXHR9LFxuXG5cdGRhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBkYXRhICkge1xuXHRcdHJldHVybiBkYXRhX3VzZXIuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG5cdFx0ZGF0YV91c2VyLnJlbW92ZSggZWxlbSwgbmFtZSApO1xuXHR9LFxuXG5cdC8vIFRPRE86IE5vdyB0aGF0IGFsbCBjYWxscyB0byBfZGF0YSBhbmQgX3JlbW92ZURhdGEgaGF2ZSBiZWVuIHJlcGxhY2VkXG5cdC8vIHdpdGggZGlyZWN0IGNhbGxzIHRvIGRhdGFfcHJpdiBtZXRob2RzLCB0aGVzZSBjYW4gYmUgZGVwcmVjYXRlZC5cblx0X2RhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBkYXRhICkge1xuXHRcdHJldHVybiBkYXRhX3ByaXYuYWNjZXNzKCBlbGVtLCBuYW1lLCBkYXRhICk7XG5cdH0sXG5cblx0X3JlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFfcHJpdi5yZW1vdmUoIGVsZW0sIG5hbWUgKTtcblx0fVxufSk7XG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHRkYXRhOiBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHR2YXIgaSwgbmFtZSwgZGF0YSxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXG5cdFx0XHRhdHRycyA9IGVsZW0gJiYgZWxlbS5hdHRyaWJ1dGVzO1xuXG5cdFx0Ly8gR2V0cyBhbGwgdmFsdWVzXG5cdFx0aWYgKCBrZXkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGlmICggdGhpcy5sZW5ndGggKSB7XG5cdFx0XHRcdGRhdGEgPSBkYXRhX3VzZXIuZ2V0KCBlbGVtICk7XG5cblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICYmICFkYXRhX3ByaXYuZ2V0KCBlbGVtLCBcImhhc0RhdGFBdHRyc1wiICkgKSB7XG5cdFx0XHRcdFx0aSA9IGF0dHJzLmxlbmd0aDtcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUxMStcblx0XHRcdFx0XHRcdC8vIFRoZSBhdHRycyBlbGVtZW50cyBjYW4gYmUgbnVsbCAoIzE0ODk0KVxuXHRcdFx0XHRcdFx0aWYgKCBhdHRyc1sgaSBdICkge1xuXHRcdFx0XHRcdFx0XHRuYW1lID0gYXR0cnNbIGkgXS5uYW1lO1xuXHRcdFx0XHRcdFx0XHRpZiAoIG5hbWUuaW5kZXhPZiggXCJkYXRhLVwiICkgPT09IDAgKSB7XG5cdFx0XHRcdFx0XHRcdFx0bmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIG5hbWUuc2xpY2UoNSkgKTtcblx0XHRcdFx0XHRcdFx0XHRkYXRhQXR0ciggZWxlbSwgbmFtZSwgZGF0YVsgbmFtZSBdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZGF0YV9wcml2LnNldCggZWxlbSwgXCJoYXNEYXRhQXR0cnNcIiwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBkYXRhO1xuXHRcdH1cblxuXHRcdC8vIFNldHMgbXVsdGlwbGUgdmFsdWVzXG5cdFx0aWYgKCB0eXBlb2Yga2V5ID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0ZGF0YV91c2VyLnNldCggdGhpcywga2V5ICk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgZGF0YSxcblx0XHRcdFx0Y2FtZWxLZXkgPSBqUXVlcnkuY2FtZWxDYXNlKCBrZXkgKTtcblxuXHRcdFx0Ly8gVGhlIGNhbGxpbmcgalF1ZXJ5IG9iamVjdCAoZWxlbWVudCBtYXRjaGVzKSBpcyBub3QgZW1wdHlcblx0XHRcdC8vIChhbmQgdGhlcmVmb3JlIGhhcyBhbiBlbGVtZW50IGFwcGVhcnMgYXQgdGhpc1sgMCBdKSBhbmQgdGhlXG5cdFx0XHQvLyBgdmFsdWVgIHBhcmFtZXRlciB3YXMgbm90IHVuZGVmaW5lZC4gQW4gZW1wdHkgalF1ZXJ5IG9iamVjdFxuXHRcdFx0Ly8gd2lsbCByZXN1bHQgaW4gYHVuZGVmaW5lZGAgZm9yIGVsZW0gPSB0aGlzWyAwIF0gd2hpY2ggd2lsbFxuXHRcdFx0Ly8gdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFuIGF0dGVtcHQgdG8gcmVhZCBhIGRhdGEgY2FjaGUgaXMgbWFkZS5cblx0XHRcdGlmICggZWxlbSAmJiB2YWx1ZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIGdldCBkYXRhIGZyb20gdGhlIGNhY2hlXG5cdFx0XHRcdC8vIHdpdGggdGhlIGtleSBhcy1pc1xuXHRcdFx0XHRkYXRhID0gZGF0YV91c2VyLmdldCggZWxlbSwga2V5ICk7XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBnZXQgZGF0YSBmcm9tIHRoZSBjYWNoZVxuXHRcdFx0XHQvLyB3aXRoIHRoZSBrZXkgY2FtZWxpemVkXG5cdFx0XHRcdGRhdGEgPSBkYXRhX3VzZXIuZ2V0KCBlbGVtLCBjYW1lbEtleSApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gXCJkaXNjb3ZlclwiIHRoZSBkYXRhIGluXG5cdFx0XHRcdC8vIEhUTUw1IGN1c3RvbSBkYXRhLSogYXR0cnNcblx0XHRcdFx0ZGF0YSA9IGRhdGFBdHRyKCBlbGVtLCBjYW1lbEtleSwgdW5kZWZpbmVkICk7XG5cdFx0XHRcdGlmICggZGF0YSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHJldHVybiBkYXRhO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gV2UgdHJpZWQgcmVhbGx5IGhhcmQsIGJ1dCB0aGUgZGF0YSBkb2Vzbid0IGV4aXN0LlxuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCB0aGUgZGF0YS4uLlxuXHRcdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBGaXJzdCwgYXR0ZW1wdCB0byBzdG9yZSBhIGNvcHkgb3IgcmVmZXJlbmNlIG9mIGFueVxuXHRcdFx0XHQvLyBkYXRhIHRoYXQgbWlnaHQndmUgYmVlbiBzdG9yZSB3aXRoIGEgY2FtZWxDYXNlZCBrZXkuXG5cdFx0XHRcdHZhciBkYXRhID0gZGF0YV91c2VyLmdldCggdGhpcywgY2FtZWxLZXkgKTtcblxuXHRcdFx0XHQvLyBGb3IgSFRNTDUgZGF0YS0qIGF0dHJpYnV0ZSBpbnRlcm9wLCB3ZSBoYXZlIHRvXG5cdFx0XHRcdC8vIHN0b3JlIHByb3BlcnR5IG5hbWVzIHdpdGggZGFzaGVzIGluIGEgY2FtZWxDYXNlIGZvcm0uXG5cdFx0XHRcdC8vIFRoaXMgbWlnaHQgbm90IGFwcGx5IHRvIGFsbCBwcm9wZXJ0aWVzLi4uKlxuXHRcdFx0XHRkYXRhX3VzZXIuc2V0KCB0aGlzLCBjYW1lbEtleSwgdmFsdWUgKTtcblxuXHRcdFx0XHQvLyAqLi4uIEluIHRoZSBjYXNlIG9mIHByb3BlcnRpZXMgdGhhdCBtaWdodCBfYWN0dWFsbHlfXG5cdFx0XHRcdC8vIGhhdmUgZGFzaGVzLCB3ZSBuZWVkIHRvIGFsc28gc3RvcmUgYSBjb3B5IG9mIHRoYXRcblx0XHRcdFx0Ly8gdW5jaGFuZ2VkIHByb3BlcnR5LlxuXHRcdFx0XHRpZiAoIGtleS5pbmRleE9mKFwiLVwiKSAhPT0gLTEgJiYgZGF0YSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdGRhdGFfdXNlci5zZXQoIHRoaXMsIGtleSwgdmFsdWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxLCBudWxsLCB0cnVlICk7XG5cdH0sXG5cblx0cmVtb3ZlRGF0YTogZnVuY3Rpb24oIGtleSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0ZGF0YV91c2VyLnJlbW92ZSggdGhpcywga2V5ICk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5cbmpRdWVyeS5leHRlbmQoe1xuXHRxdWV1ZTogZnVuY3Rpb24oIGVsZW0sIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIHF1ZXVlO1xuXG5cdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0dHlwZSA9ICggdHlwZSB8fCBcImZ4XCIgKSArIFwicXVldWVcIjtcblx0XHRcdHF1ZXVlID0gZGF0YV9wcml2LmdldCggZWxlbSwgdHlwZSApO1xuXG5cdFx0XHQvLyBTcGVlZCB1cCBkZXF1ZXVlIGJ5IGdldHRpbmcgb3V0IHF1aWNrbHkgaWYgdGhpcyBpcyBqdXN0IGEgbG9va3VwXG5cdFx0XHRpZiAoIGRhdGEgKSB7XG5cdFx0XHRcdGlmICggIXF1ZXVlIHx8IGpRdWVyeS5pc0FycmF5KCBkYXRhICkgKSB7XG5cdFx0XHRcdFx0cXVldWUgPSBkYXRhX3ByaXYuYWNjZXNzKCBlbGVtLCB0eXBlLCBqUXVlcnkubWFrZUFycmF5KGRhdGEpICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0cXVldWUucHVzaCggZGF0YSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcXVldWUgfHwgW107XG5cdFx0fVxuXHR9LFxuXG5cdGRlcXVldWU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xuXHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdHZhciBxdWV1ZSA9IGpRdWVyeS5xdWV1ZSggZWxlbSwgdHlwZSApLFxuXHRcdFx0c3RhcnRMZW5ndGggPSBxdWV1ZS5sZW5ndGgsXG5cdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCksXG5cdFx0XHRob29rcyA9IGpRdWVyeS5fcXVldWVIb29rcyggZWxlbSwgdHlwZSApLFxuXHRcdFx0bmV4dCA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggZWxlbSwgdHlwZSApO1xuXHRcdFx0fTtcblxuXHRcdC8vIElmIHRoZSBmeCBxdWV1ZSBpcyBkZXF1ZXVlZCwgYWx3YXlzIHJlbW92ZSB0aGUgcHJvZ3Jlc3Mgc2VudGluZWxcblx0XHRpZiAoIGZuID09PSBcImlucHJvZ3Jlc3NcIiApIHtcblx0XHRcdGZuID0gcXVldWUuc2hpZnQoKTtcblx0XHRcdHN0YXJ0TGVuZ3RoLS07XG5cdFx0fVxuXG5cdFx0aWYgKCBmbiApIHtcblxuXHRcdFx0Ly8gQWRkIGEgcHJvZ3Jlc3Mgc2VudGluZWwgdG8gcHJldmVudCB0aGUgZnggcXVldWUgZnJvbSBiZWluZ1xuXHRcdFx0Ly8gYXV0b21hdGljYWxseSBkZXF1ZXVlZFxuXHRcdFx0aWYgKCB0eXBlID09PSBcImZ4XCIgKSB7XG5cdFx0XHRcdHF1ZXVlLnVuc2hpZnQoIFwiaW5wcm9ncmVzc1wiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENsZWFyIHVwIHRoZSBsYXN0IHF1ZXVlIHN0b3AgZnVuY3Rpb25cblx0XHRcdGRlbGV0ZSBob29rcy5zdG9wO1xuXHRcdFx0Zm4uY2FsbCggZWxlbSwgbmV4dCwgaG9va3MgKTtcblx0XHR9XG5cblx0XHRpZiAoICFzdGFydExlbmd0aCAmJiBob29rcyApIHtcblx0XHRcdGhvb2tzLmVtcHR5LmZpcmUoKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gTm90IHB1YmxpYyAtIGdlbmVyYXRlIGEgcXVldWVIb29rcyBvYmplY3QsIG9yIHJldHVybiB0aGUgY3VycmVudCBvbmVcblx0X3F1ZXVlSG9va3M6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlICkge1xuXHRcdHZhciBrZXkgPSB0eXBlICsgXCJxdWV1ZUhvb2tzXCI7XG5cdFx0cmV0dXJuIGRhdGFfcHJpdi5nZXQoIGVsZW0sIGtleSApIHx8IGRhdGFfcHJpdi5hY2Nlc3MoIGVsZW0sIGtleSwge1xuXHRcdFx0ZW1wdHk6IGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKS5hZGQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRhdGFfcHJpdi5yZW1vdmUoIGVsZW0sIFsgdHlwZSArIFwicXVldWVcIiwga2V5IF0gKTtcblx0XHRcdH0pXG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKHtcblx0cXVldWU6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBzZXR0ZXIgPSAyO1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGRhdGEgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IFwiZnhcIjtcblx0XHRcdHNldHRlci0tO1xuXHRcdH1cblxuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCA8IHNldHRlciApIHtcblx0XHRcdHJldHVybiBqUXVlcnkucXVldWUoIHRoaXNbMF0sIHR5cGUgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGF0YSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdHRoaXMgOlxuXHRcdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgcXVldWUgPSBqUXVlcnkucXVldWUoIHRoaXMsIHR5cGUsIGRhdGEgKTtcblxuXHRcdFx0XHQvLyBFbnN1cmUgYSBob29rcyBmb3IgdGhpcyBxdWV1ZVxuXHRcdFx0XHRqUXVlcnkuX3F1ZXVlSG9va3MoIHRoaXMsIHR5cGUgKTtcblxuXHRcdFx0XHRpZiAoIHR5cGUgPT09IFwiZnhcIiAmJiBxdWV1ZVswXSAhPT0gXCJpbnByb2dyZXNzXCIgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdH0sXG5cdGRlcXVldWU6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdH0pO1xuXHR9LFxuXHRjbGVhclF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gdGhpcy5xdWV1ZSggdHlwZSB8fCBcImZ4XCIsIFtdICk7XG5cdH0sXG5cdC8vIEdldCBhIHByb21pc2UgcmVzb2x2ZWQgd2hlbiBxdWV1ZXMgb2YgYSBjZXJ0YWluIHR5cGVcblx0Ly8gYXJlIGVtcHRpZWQgKGZ4IGlzIHRoZSB0eXBlIGJ5IGRlZmF1bHQpXG5cdHByb21pc2U6IGZ1bmN0aW9uKCB0eXBlLCBvYmogKSB7XG5cdFx0dmFyIHRtcCxcblx0XHRcdGNvdW50ID0gMSxcblx0XHRcdGRlZmVyID0galF1ZXJ5LkRlZmVycmVkKCksXG5cdFx0XHRlbGVtZW50cyA9IHRoaXMsXG5cdFx0XHRpID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRyZXNvbHZlID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggISggLS1jb3VudCApICkge1xuXHRcdFx0XHRcdGRlZmVyLnJlc29sdmVXaXRoKCBlbGVtZW50cywgWyBlbGVtZW50cyBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHRpZiAoIHR5cGVvZiB0eXBlICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0b2JqID0gdHlwZTtcblx0XHRcdHR5cGUgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0dG1wID0gZGF0YV9wcml2LmdldCggZWxlbWVudHNbIGkgXSwgdHlwZSArIFwicXVldWVIb29rc1wiICk7XG5cdFx0XHRpZiAoIHRtcCAmJiB0bXAuZW1wdHkgKSB7XG5cdFx0XHRcdGNvdW50Kys7XG5cdFx0XHRcdHRtcC5lbXB0eS5hZGQoIHJlc29sdmUgKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmVzb2x2ZSgpO1xuXHRcdHJldHVybiBkZWZlci5wcm9taXNlKCBvYmogKTtcblx0fVxufSk7XG52YXIgcG51bSA9ICgvWystXT8oPzpcXGQqXFwufClcXGQrKD86W2VFXVsrLV0/XFxkK3wpLykuc291cmNlO1xuXG52YXIgY3NzRXhwYW5kID0gWyBcIlRvcFwiLCBcIlJpZ2h0XCIsIFwiQm90dG9tXCIsIFwiTGVmdFwiIF07XG5cbnZhciBpc0hpZGRlbiA9IGZ1bmN0aW9uKCBlbGVtLCBlbCApIHtcblx0XHQvLyBpc0hpZGRlbiBtaWdodCBiZSBjYWxsZWQgZnJvbSBqUXVlcnkjZmlsdGVyIGZ1bmN0aW9uO1xuXHRcdC8vIGluIHRoYXQgY2FzZSwgZWxlbWVudCB3aWxsIGJlIHNlY29uZCBhcmd1bWVudFxuXHRcdGVsZW0gPSBlbCB8fCBlbGVtO1xuXHRcdHJldHVybiBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApID09PSBcIm5vbmVcIiB8fCAhalF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKTtcblx0fTtcblxudmFyIHJjaGVja2FibGVUeXBlID0gKC9eKD86Y2hlY2tib3h8cmFkaW8pJC9pKTtcblxuXG5cbihmdW5jdGlvbigpIHtcblx0dmFyIGZyYWdtZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuXHRcdGRpdiA9IGZyYWdtZW50LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICkgKSxcblx0XHRpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApO1xuXG5cdC8vIFN1cHBvcnQ6IFNhZmFyaTw9NS4xXG5cdC8vIENoZWNrIHN0YXRlIGxvc3QgaWYgdGhlIG5hbWUgaXMgc2V0ICgjMTEyMTcpXG5cdC8vIFN1cHBvcnQ6IFdpbmRvd3MgV2ViIEFwcHMgKFdXQSlcblx0Ly8gYG5hbWVgIGFuZCBgdHlwZWAgbXVzdCB1c2UgLnNldEF0dHJpYnV0ZSBmb3IgV1dBICgjMTQ5MDEpXG5cdGlucHV0LnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIFwicmFkaW9cIiApO1xuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwiY2hlY2tlZFwiLCBcImNoZWNrZWRcIiApO1xuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwibmFtZVwiLCBcInRcIiApO1xuXG5cdGRpdi5hcHBlbmRDaGlsZCggaW5wdXQgKTtcblxuXHQvLyBTdXBwb3J0OiBTYWZhcmk8PTUuMSwgQW5kcm9pZDw0LjJcblx0Ly8gT2xkZXIgV2ViS2l0IGRvZXNuJ3QgY2xvbmUgY2hlY2tlZCBzdGF0ZSBjb3JyZWN0bHkgaW4gZnJhZ21lbnRzXG5cdHN1cHBvcnQuY2hlY2tDbG9uZSA9IGRpdi5jbG9uZU5vZGUoIHRydWUgKS5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuY2hlY2tlZDtcblxuXHQvLyBTdXBwb3J0OiBJRTw9MTErXG5cdC8vIE1ha2Ugc3VyZSB0ZXh0YXJlYSAoYW5kIGNoZWNrYm94KSBkZWZhdWx0VmFsdWUgaXMgcHJvcGVybHkgY2xvbmVkXG5cdGRpdi5pbm5lckhUTUwgPSBcIjx0ZXh0YXJlYT54PC90ZXh0YXJlYT5cIjtcblx0c3VwcG9ydC5ub0Nsb25lQ2hlY2tlZCA9ICEhZGl2LmNsb25lTm9kZSggdHJ1ZSApLmxhc3RDaGlsZC5kZWZhdWx0VmFsdWU7XG59KSgpO1xudmFyIHN0cnVuZGVmaW5lZCA9IHR5cGVvZiB1bmRlZmluZWQ7XG5cblxuXG5zdXBwb3J0LmZvY3VzaW5CdWJibGVzID0gXCJvbmZvY3VzaW5cIiBpbiB3aW5kb3c7XG5cblxudmFyXG5cdHJrZXlFdmVudCA9IC9ea2V5Lyxcblx0cm1vdXNlRXZlbnQgPSAvXig/Om1vdXNlfHBvaW50ZXJ8Y29udGV4dG1lbnUpfGNsaWNrLyxcblx0cmZvY3VzTW9ycGggPSAvXig/OmZvY3VzaW5mb2N1c3xmb2N1c291dGJsdXIpJC8sXG5cdHJ0eXBlbmFtZXNwYWNlID0gL14oW14uXSopKD86XFwuKC4rKXwpJC87XG5cbmZ1bmN0aW9uIHJldHVyblRydWUoKSB7XG5cdHJldHVybiB0cnVlO1xufVxuXG5mdW5jdGlvbiByZXR1cm5GYWxzZSgpIHtcblx0cmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBzYWZlQWN0aXZlRWxlbWVudCgpIHtcblx0dHJ5IHtcblx0XHRyZXR1cm4gZG9jdW1lbnQuYWN0aXZlRWxlbWVudDtcblx0fSBjYXRjaCAoIGVyciApIHsgfVxufVxuXG4vKlxuICogSGVscGVyIGZ1bmN0aW9ucyBmb3IgbWFuYWdpbmcgZXZlbnRzIC0tIG5vdCBwYXJ0IG9mIHRoZSBwdWJsaWMgaW50ZXJmYWNlLlxuICogUHJvcHMgdG8gRGVhbiBFZHdhcmRzJyBhZGRFdmVudCBsaWJyYXJ5IGZvciBtYW55IG9mIHRoZSBpZGVhcy5cbiAqL1xualF1ZXJ5LmV2ZW50ID0ge1xuXG5cdGdsb2JhbDoge30sXG5cblx0YWRkOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIGRhdGEsIHNlbGVjdG9yICkge1xuXG5cdFx0dmFyIGhhbmRsZU9iakluLCBldmVudEhhbmRsZSwgdG1wLFxuXHRcdFx0ZXZlbnRzLCB0LCBoYW5kbGVPYmosXG5cdFx0XHRzcGVjaWFsLCBoYW5kbGVycywgdHlwZSwgbmFtZXNwYWNlcywgb3JpZ1R5cGUsXG5cdFx0XHRlbGVtRGF0YSA9IGRhdGFfcHJpdi5nZXQoIGVsZW0gKTtcblxuXHRcdC8vIERvbid0IGF0dGFjaCBldmVudHMgdG8gbm9EYXRhIG9yIHRleHQvY29tbWVudCBub2RlcyAoYnV0IGFsbG93IHBsYWluIG9iamVjdHMpXG5cdFx0aWYgKCAhZWxlbURhdGEgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbGVyIGNhbiBwYXNzIGluIGFuIG9iamVjdCBvZiBjdXN0b20gZGF0YSBpbiBsaWV1IG9mIHRoZSBoYW5kbGVyXG5cdFx0aWYgKCBoYW5kbGVyLmhhbmRsZXIgKSB7XG5cdFx0XHRoYW5kbGVPYmpJbiA9IGhhbmRsZXI7XG5cdFx0XHRoYW5kbGVyID0gaGFuZGxlT2JqSW4uaGFuZGxlcjtcblx0XHRcdHNlbGVjdG9yID0gaGFuZGxlT2JqSW4uc2VsZWN0b3I7XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgdGhlIGhhbmRsZXIgaGFzIGEgdW5pcXVlIElELCB1c2VkIHRvIGZpbmQvcmVtb3ZlIGl0IGxhdGVyXG5cdFx0aWYgKCAhaGFuZGxlci5ndWlkICkge1xuXHRcdFx0aGFuZGxlci5ndWlkID0galF1ZXJ5Lmd1aWQrKztcblx0XHR9XG5cblx0XHQvLyBJbml0IHRoZSBlbGVtZW50J3MgZXZlbnQgc3RydWN0dXJlIGFuZCBtYWluIGhhbmRsZXIsIGlmIHRoaXMgaXMgdGhlIGZpcnN0XG5cdFx0aWYgKCAhKGV2ZW50cyA9IGVsZW1EYXRhLmV2ZW50cykgKSB7XG5cdFx0XHRldmVudHMgPSBlbGVtRGF0YS5ldmVudHMgPSB7fTtcblx0XHR9XG5cdFx0aWYgKCAhKGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlKSApIHtcblx0XHRcdGV2ZW50SGFuZGxlID0gZWxlbURhdGEuaGFuZGxlID0gZnVuY3Rpb24oIGUgKSB7XG5cdFx0XHRcdC8vIERpc2NhcmQgdGhlIHNlY29uZCBldmVudCBvZiBhIGpRdWVyeS5ldmVudC50cmlnZ2VyKCkgYW5kXG5cdFx0XHRcdC8vIHdoZW4gYW4gZXZlbnQgaXMgY2FsbGVkIGFmdGVyIGEgcGFnZSBoYXMgdW5sb2FkZWRcblx0XHRcdFx0cmV0dXJuIHR5cGVvZiBqUXVlcnkgIT09IHN0cnVuZGVmaW5lZCAmJiBqUXVlcnkuZXZlbnQudHJpZ2dlcmVkICE9PSBlLnR5cGUgP1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5kaXNwYXRjaC5hcHBseSggZWxlbSwgYXJndW1lbnRzICkgOiB1bmRlZmluZWQ7XG5cdFx0XHR9O1xuXHRcdH1cblxuXHRcdC8vIEhhbmRsZSBtdWx0aXBsZSBldmVudHMgc2VwYXJhdGVkIGJ5IGEgc3BhY2Vcblx0XHR0eXBlcyA9ICggdHlwZXMgfHwgXCJcIiApLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbdF0gKSB8fCBbXTtcblx0XHRcdHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsxXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsyXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBUaGVyZSAqbXVzdCogYmUgYSB0eXBlLCBubyBhdHRhY2hpbmcgbmFtZXNwYWNlLW9ubHkgaGFuZGxlcnNcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBldmVudCBjaGFuZ2VzIGl0cyB0eXBlLCB1c2UgdGhlIHNwZWNpYWwgZXZlbnQgaGFuZGxlcnMgZm9yIHRoZSBjaGFuZ2VkIHR5cGVcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXG5cdFx0XHQvLyBJZiBzZWxlY3RvciBkZWZpbmVkLCBkZXRlcm1pbmUgc3BlY2lhbCBldmVudCBhcGkgdHlwZSwgb3RoZXJ3aXNlIGdpdmVuIHR5cGVcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblxuXHRcdFx0Ly8gVXBkYXRlIHNwZWNpYWwgYmFzZWQgb24gbmV3bHkgcmVzZXQgdHlwZVxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cblx0XHRcdC8vIGhhbmRsZU9iaiBpcyBwYXNzZWQgdG8gYWxsIGV2ZW50IGhhbmRsZXJzXG5cdFx0XHRoYW5kbGVPYmogPSBqUXVlcnkuZXh0ZW5kKHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0b3JpZ1R5cGU6IG9yaWdUeXBlLFxuXHRcdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0XHRoYW5kbGVyOiBoYW5kbGVyLFxuXHRcdFx0XHRndWlkOiBoYW5kbGVyLmd1aWQsXG5cdFx0XHRcdHNlbGVjdG9yOiBzZWxlY3Rvcixcblx0XHRcdFx0bmVlZHNDb250ZXh0OiBzZWxlY3RvciAmJiBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSxcblx0XHRcdFx0bmFtZXNwYWNlOiBuYW1lc3BhY2VzLmpvaW4oXCIuXCIpXG5cdFx0XHR9LCBoYW5kbGVPYmpJbiApO1xuXG5cdFx0XHQvLyBJbml0IHRoZSBldmVudCBoYW5kbGVyIHF1ZXVlIGlmIHdlJ3JlIHRoZSBmaXJzdFxuXHRcdFx0aWYgKCAhKGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0pICkge1xuXHRcdFx0XHRoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdID0gW107XG5cdFx0XHRcdGhhbmRsZXJzLmRlbGVnYXRlQ291bnQgPSAwO1xuXG5cdFx0XHRcdC8vIE9ubHkgdXNlIGFkZEV2ZW50TGlzdGVuZXIgaWYgdGhlIHNwZWNpYWwgZXZlbnRzIGhhbmRsZXIgcmV0dXJucyBmYWxzZVxuXHRcdFx0XHRpZiAoICFzcGVjaWFsLnNldHVwIHx8IHNwZWNpYWwuc2V0dXAuY2FsbCggZWxlbSwgZGF0YSwgbmFtZXNwYWNlcywgZXZlbnRIYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLmFkZEV2ZW50TGlzdGVuZXIgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLmFkZEV2ZW50TGlzdGVuZXIoIHR5cGUsIGV2ZW50SGFuZGxlLCBmYWxzZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHNwZWNpYWwuYWRkICkge1xuXHRcdFx0XHRzcGVjaWFsLmFkZC5jYWxsKCBlbGVtLCBoYW5kbGVPYmogKTtcblxuXHRcdFx0XHRpZiAoICFoYW5kbGVPYmouaGFuZGxlci5ndWlkICkge1xuXHRcdFx0XHRcdGhhbmRsZU9iai5oYW5kbGVyLmd1aWQgPSBoYW5kbGVyLmd1aWQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIHRvIHRoZSBlbGVtZW50J3MgaGFuZGxlciBsaXN0LCBkZWxlZ2F0ZXMgaW4gZnJvbnRcblx0XHRcdGlmICggc2VsZWN0b3IgKSB7XG5cdFx0XHRcdGhhbmRsZXJzLnNwbGljZSggaGFuZGxlcnMuZGVsZWdhdGVDb3VudCsrLCAwLCBoYW5kbGVPYmogKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhhbmRsZXJzLnB1c2goIGhhbmRsZU9iaiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBLZWVwIHRyYWNrIG9mIHdoaWNoIGV2ZW50cyBoYXZlIGV2ZXIgYmVlbiB1c2VkLCBmb3IgZXZlbnQgb3B0aW1pemF0aW9uXG5cdFx0XHRqUXVlcnkuZXZlbnQuZ2xvYmFsWyB0eXBlIF0gPSB0cnVlO1xuXHRcdH1cblxuXHR9LFxuXG5cdC8vIERldGFjaCBhbiBldmVudCBvciBzZXQgb2YgZXZlbnRzIGZyb20gYW4gZWxlbWVudFxuXHRyZW1vdmU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlcywgaGFuZGxlciwgc2VsZWN0b3IsIG1hcHBlZFR5cGVzICkge1xuXG5cdFx0dmFyIGosIG9yaWdDb3VudCwgdG1wLFxuXHRcdFx0ZXZlbnRzLCB0LCBoYW5kbGVPYmosXG5cdFx0XHRzcGVjaWFsLCBoYW5kbGVycywgdHlwZSwgbmFtZXNwYWNlcywgb3JpZ1R5cGUsXG5cdFx0XHRlbGVtRGF0YSA9IGRhdGFfcHJpdi5oYXNEYXRhKCBlbGVtICkgJiYgZGF0YV9wcml2LmdldCggZWxlbSApO1xuXG5cdFx0aWYgKCAhZWxlbURhdGEgfHwgIShldmVudHMgPSBlbGVtRGF0YS5ldmVudHMpICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE9uY2UgZm9yIGVhY2ggdHlwZS5uYW1lc3BhY2UgaW4gdHlwZXM7IHR5cGUgbWF5IGJlIG9taXR0ZWRcblx0XHR0eXBlcyA9ICggdHlwZXMgfHwgXCJcIiApLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbIFwiXCIgXTtcblx0XHR0ID0gdHlwZXMubGVuZ3RoO1xuXHRcdHdoaWxlICggdC0tICkge1xuXHRcdFx0dG1wID0gcnR5cGVuYW1lc3BhY2UuZXhlYyggdHlwZXNbdF0gKSB8fCBbXTtcblx0XHRcdHR5cGUgPSBvcmlnVHlwZSA9IHRtcFsxXTtcblx0XHRcdG5hbWVzcGFjZXMgPSAoIHRtcFsyXSB8fCBcIlwiICkuc3BsaXQoIFwiLlwiICkuc29ydCgpO1xuXG5cdFx0XHQvLyBVbmJpbmQgYWxsIGV2ZW50cyAob24gdGhpcyBuYW1lc3BhY2UsIGlmIHByb3ZpZGVkKSBmb3IgdGhlIGVsZW1lbnRcblx0XHRcdGlmICggIXR5cGUgKSB7XG5cdFx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKyB0eXBlc1sgdCBdLCBoYW5kbGVyLCBzZWxlY3RvciwgdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRcdHR5cGUgPSAoIHNlbGVjdG9yID8gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgOiBzcGVjaWFsLmJpbmRUeXBlICkgfHwgdHlwZTtcblx0XHRcdGhhbmRsZXJzID0gZXZlbnRzWyB0eXBlIF0gfHwgW107XG5cdFx0XHR0bXAgPSB0bXBbMl0gJiYgbmV3IFJlZ0V4cCggXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpICsgXCIoXFxcXC58JClcIiApO1xuXG5cdFx0XHQvLyBSZW1vdmUgbWF0Y2hpbmcgZXZlbnRzXG5cdFx0XHRvcmlnQ291bnQgPSBqID0gaGFuZGxlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRcdGhhbmRsZU9iaiA9IGhhbmRsZXJzWyBqIF07XG5cblx0XHRcdFx0aWYgKCAoIG1hcHBlZFR5cGVzIHx8IG9yaWdUeXBlID09PSBoYW5kbGVPYmoub3JpZ1R5cGUgKSAmJlxuXHRcdFx0XHRcdCggIWhhbmRsZXIgfHwgaGFuZGxlci5ndWlkID09PSBoYW5kbGVPYmouZ3VpZCApICYmXG5cdFx0XHRcdFx0KCAhdG1wIHx8IHRtcC50ZXN0KCBoYW5kbGVPYmoubmFtZXNwYWNlICkgKSAmJlxuXHRcdFx0XHRcdCggIXNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBoYW5kbGVPYmouc2VsZWN0b3IgfHwgc2VsZWN0b3IgPT09IFwiKipcIiAmJiBoYW5kbGVPYmouc2VsZWN0b3IgKSApIHtcblx0XHRcdFx0XHRoYW5kbGVycy5zcGxpY2UoIGosIDEgKTtcblxuXHRcdFx0XHRcdGlmICggaGFuZGxlT2JqLnNlbGVjdG9yICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlcnMuZGVsZWdhdGVDb3VudC0tO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRpZiAoIHNwZWNpYWwucmVtb3ZlICkge1xuXHRcdFx0XHRcdFx0c3BlY2lhbC5yZW1vdmUuY2FsbCggZWxlbSwgaGFuZGxlT2JqICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJlbW92ZSBnZW5lcmljIGV2ZW50IGhhbmRsZXIgaWYgd2UgcmVtb3ZlZCBzb21ldGhpbmcgYW5kIG5vIG1vcmUgaGFuZGxlcnMgZXhpc3Rcblx0XHRcdC8vIChhdm9pZHMgcG90ZW50aWFsIGZvciBlbmRsZXNzIHJlY3Vyc2lvbiBkdXJpbmcgcmVtb3ZhbCBvZiBzcGVjaWFsIGV2ZW50IGhhbmRsZXJzKVxuXHRcdFx0aWYgKCBvcmlnQ291bnQgJiYgIWhhbmRsZXJzLmxlbmd0aCApIHtcblx0XHRcdFx0aWYgKCAhc3BlY2lhbC50ZWFyZG93biB8fCBzcGVjaWFsLnRlYXJkb3duLmNhbGwoIGVsZW0sIG5hbWVzcGFjZXMsIGVsZW1EYXRhLmhhbmRsZSApID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGVsZW1EYXRhLmhhbmRsZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0ZGVsZXRlIGV2ZW50c1sgdHlwZSBdO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSB0aGUgZXhwYW5kbyBpZiBpdCdzIG5vIGxvbmdlciB1c2VkXG5cdFx0aWYgKCBqUXVlcnkuaXNFbXB0eU9iamVjdCggZXZlbnRzICkgKSB7XG5cdFx0XHRkZWxldGUgZWxlbURhdGEuaGFuZGxlO1xuXHRcdFx0ZGF0YV9wcml2LnJlbW92ZSggZWxlbSwgXCJldmVudHNcIiApO1xuXHRcdH1cblx0fSxcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggZXZlbnQsIGRhdGEsIGVsZW0sIG9ubHlIYW5kbGVycyApIHtcblxuXHRcdHZhciBpLCBjdXIsIHRtcCwgYnViYmxlVHlwZSwgb250eXBlLCBoYW5kbGUsIHNwZWNpYWwsXG5cdFx0XHRldmVudFBhdGggPSBbIGVsZW0gfHwgZG9jdW1lbnQgXSxcblx0XHRcdHR5cGUgPSBoYXNPd24uY2FsbCggZXZlbnQsIFwidHlwZVwiICkgPyBldmVudC50eXBlIDogZXZlbnQsXG5cdFx0XHRuYW1lc3BhY2VzID0gaGFzT3duLmNhbGwoIGV2ZW50LCBcIm5hbWVzcGFjZVwiICkgPyBldmVudC5uYW1lc3BhY2Uuc3BsaXQoXCIuXCIpIDogW107XG5cblx0XHRjdXIgPSB0bXAgPSBlbGVtID0gZWxlbSB8fCBkb2N1bWVudDtcblxuXHRcdC8vIERvbid0IGRvIGV2ZW50cyBvbiB0ZXh0IGFuZCBjb21tZW50IG5vZGVzXG5cdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAzIHx8IGVsZW0ubm9kZVR5cGUgPT09IDggKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gZm9jdXMvYmx1ciBtb3JwaHMgdG8gZm9jdXNpbi9vdXQ7IGVuc3VyZSB3ZSdyZSBub3QgZmlyaW5nIHRoZW0gcmlnaHQgbm93XG5cdFx0aWYgKCByZm9jdXNNb3JwaC50ZXN0KCB0eXBlICsgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCApICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlmICggdHlwZS5pbmRleE9mKFwiLlwiKSA+PSAwICkge1xuXHRcdFx0Ly8gTmFtZXNwYWNlZCB0cmlnZ2VyOyBjcmVhdGUgYSByZWdleHAgdG8gbWF0Y2ggZXZlbnQgdHlwZSBpbiBoYW5kbGUoKVxuXHRcdFx0bmFtZXNwYWNlcyA9IHR5cGUuc3BsaXQoXCIuXCIpO1xuXHRcdFx0dHlwZSA9IG5hbWVzcGFjZXMuc2hpZnQoKTtcblx0XHRcdG5hbWVzcGFjZXMuc29ydCgpO1xuXHRcdH1cblx0XHRvbnR5cGUgPSB0eXBlLmluZGV4T2YoXCI6XCIpIDwgMCAmJiBcIm9uXCIgKyB0eXBlO1xuXG5cdFx0Ly8gQ2FsbGVyIGNhbiBwYXNzIGluIGEgalF1ZXJ5LkV2ZW50IG9iamVjdCwgT2JqZWN0LCBvciBqdXN0IGFuIGV2ZW50IHR5cGUgc3RyaW5nXG5cdFx0ZXZlbnQgPSBldmVudFsgalF1ZXJ5LmV4cGFuZG8gXSA/XG5cdFx0XHRldmVudCA6XG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCB0eXBlLCB0eXBlb2YgZXZlbnQgPT09IFwib2JqZWN0XCIgJiYgZXZlbnQgKTtcblxuXHRcdC8vIFRyaWdnZXIgYml0bWFzazogJiAxIGZvciBuYXRpdmUgaGFuZGxlcnM7ICYgMiBmb3IgalF1ZXJ5IChhbHdheXMgdHJ1ZSlcblx0XHRldmVudC5pc1RyaWdnZXIgPSBvbmx5SGFuZGxlcnMgPyAyIDogMztcblx0XHRldmVudC5uYW1lc3BhY2UgPSBuYW1lc3BhY2VzLmpvaW4oXCIuXCIpO1xuXHRcdGV2ZW50Lm5hbWVzcGFjZV9yZSA9IGV2ZW50Lm5hbWVzcGFjZSA/XG5cdFx0XHRuZXcgUmVnRXhwKCBcIihefFxcXFwuKVwiICsgbmFtZXNwYWNlcy5qb2luKFwiXFxcXC4oPzouKlxcXFwufClcIikgKyBcIihcXFxcLnwkKVwiICkgOlxuXHRcdFx0bnVsbDtcblxuXHRcdC8vIENsZWFuIHVwIHRoZSBldmVudCBpbiBjYXNlIGl0IGlzIGJlaW5nIHJldXNlZFxuXHRcdGV2ZW50LnJlc3VsdCA9IHVuZGVmaW5lZDtcblx0XHRpZiAoICFldmVudC50YXJnZXQgKSB7XG5cdFx0XHRldmVudC50YXJnZXQgPSBlbGVtO1xuXHRcdH1cblxuXHRcdC8vIENsb25lIGFueSBpbmNvbWluZyBkYXRhIGFuZCBwcmVwZW5kIHRoZSBldmVudCwgY3JlYXRpbmcgdGhlIGhhbmRsZXIgYXJnIGxpc3Rcblx0XHRkYXRhID0gZGF0YSA9PSBudWxsID9cblx0XHRcdFsgZXZlbnQgXSA6XG5cdFx0XHRqUXVlcnkubWFrZUFycmF5KCBkYXRhLCBbIGV2ZW50IF0gKTtcblxuXHRcdC8vIEFsbG93IHNwZWNpYWwgZXZlbnRzIHRvIGRyYXcgb3V0c2lkZSB0aGUgbGluZXNcblx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgc3BlY2lhbC50cmlnZ2VyICYmIHNwZWNpYWwudHJpZ2dlci5hcHBseSggZWxlbSwgZGF0YSApID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBEZXRlcm1pbmUgZXZlbnQgcHJvcGFnYXRpb24gcGF0aCBpbiBhZHZhbmNlLCBwZXIgVzNDIGV2ZW50cyBzcGVjICgjOTk1MSlcblx0XHQvLyBCdWJibGUgdXAgdG8gZG9jdW1lbnQsIHRoZW4gdG8gd2luZG93OyB3YXRjaCBmb3IgYSBnbG9iYWwgb3duZXJEb2N1bWVudCB2YXIgKCM5NzI0KVxuXHRcdGlmICggIW9ubHlIYW5kbGVycyAmJiAhc3BlY2lhbC5ub0J1YmJsZSAmJiAhalF1ZXJ5LmlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdGJ1YmJsZVR5cGUgPSBzcGVjaWFsLmRlbGVnYXRlVHlwZSB8fCB0eXBlO1xuXHRcdFx0aWYgKCAhcmZvY3VzTW9ycGgudGVzdCggYnViYmxlVHlwZSArIHR5cGUgKSApIHtcblx0XHRcdFx0Y3VyID0gY3VyLnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKCA7IGN1cjsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdGV2ZW50UGF0aC5wdXNoKCBjdXIgKTtcblx0XHRcdFx0dG1wID0gY3VyO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBPbmx5IGFkZCB3aW5kb3cgaWYgd2UgZ290IHRvIGRvY3VtZW50IChlLmcuLCBub3QgcGxhaW4gb2JqIG9yIGRldGFjaGVkIERPTSlcblx0XHRcdGlmICggdG1wID09PSAoZWxlbS5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50KSApIHtcblx0XHRcdFx0ZXZlbnRQYXRoLnB1c2goIHRtcC5kZWZhdWx0VmlldyB8fCB0bXAucGFyZW50V2luZG93IHx8IHdpbmRvdyApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEZpcmUgaGFuZGxlcnMgb24gdGhlIGV2ZW50IHBhdGhcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoIChjdXIgPSBldmVudFBhdGhbaSsrXSkgJiYgIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cblx0XHRcdGV2ZW50LnR5cGUgPSBpID4gMSA/XG5cdFx0XHRcdGJ1YmJsZVR5cGUgOlxuXHRcdFx0XHRzcGVjaWFsLmJpbmRUeXBlIHx8IHR5cGU7XG5cblx0XHRcdC8vIGpRdWVyeSBoYW5kbGVyXG5cdFx0XHRoYW5kbGUgPSAoIGRhdGFfcHJpdi5nZXQoIGN1ciwgXCJldmVudHNcIiApIHx8IHt9IClbIGV2ZW50LnR5cGUgXSAmJiBkYXRhX3ByaXYuZ2V0KCBjdXIsIFwiaGFuZGxlXCIgKTtcblx0XHRcdGlmICggaGFuZGxlICkge1xuXHRcdFx0XHRoYW5kbGUuYXBwbHkoIGN1ciwgZGF0YSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBOYXRpdmUgaGFuZGxlclxuXHRcdFx0aGFuZGxlID0gb250eXBlICYmIGN1clsgb250eXBlIF07XG5cdFx0XHRpZiAoIGhhbmRsZSAmJiBoYW5kbGUuYXBwbHkgJiYgalF1ZXJ5LmFjY2VwdERhdGEoIGN1ciApICkge1xuXHRcdFx0XHRldmVudC5yZXN1bHQgPSBoYW5kbGUuYXBwbHkoIGN1ciwgZGF0YSApO1xuXHRcdFx0XHRpZiAoIGV2ZW50LnJlc3VsdCA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0XHRldmVudC50eXBlID0gdHlwZTtcblxuXHRcdC8vIElmIG5vYm9keSBwcmV2ZW50ZWQgdGhlIGRlZmF1bHQgYWN0aW9uLCBkbyBpdCBub3dcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgIWV2ZW50LmlzRGVmYXVsdFByZXZlbnRlZCgpICkge1xuXG5cdFx0XHRpZiAoICghc3BlY2lhbC5fZGVmYXVsdCB8fCBzcGVjaWFsLl9kZWZhdWx0LmFwcGx5KCBldmVudFBhdGgucG9wKCksIGRhdGEgKSA9PT0gZmFsc2UpICYmXG5cdFx0XHRcdGpRdWVyeS5hY2NlcHREYXRhKCBlbGVtICkgKSB7XG5cblx0XHRcdFx0Ly8gQ2FsbCBhIG5hdGl2ZSBET00gbWV0aG9kIG9uIHRoZSB0YXJnZXQgd2l0aCB0aGUgc2FtZSBuYW1lIG5hbWUgYXMgdGhlIGV2ZW50LlxuXHRcdFx0XHQvLyBEb24ndCBkbyBkZWZhdWx0IGFjdGlvbnMgb24gd2luZG93LCB0aGF0J3Mgd2hlcmUgZ2xvYmFsIHZhcmlhYmxlcyBiZSAoIzYxNzApXG5cdFx0XHRcdGlmICggb250eXBlICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCBlbGVtWyB0eXBlIF0gKSAmJiAhalF1ZXJ5LmlzV2luZG93KCBlbGVtICkgKSB7XG5cblx0XHRcdFx0XHQvLyBEb24ndCByZS10cmlnZ2VyIGFuIG9uRk9PIGV2ZW50IHdoZW4gd2UgY2FsbCBpdHMgRk9PKCkgbWV0aG9kXG5cdFx0XHRcdFx0dG1wID0gZWxlbVsgb250eXBlIF07XG5cblx0XHRcdFx0XHRpZiAoIHRtcCApIHtcblx0XHRcdFx0XHRcdGVsZW1bIG9udHlwZSBdID0gbnVsbDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBQcmV2ZW50IHJlLXRyaWdnZXJpbmcgb2YgdGhlIHNhbWUgZXZlbnQsIHNpbmNlIHdlIGFscmVhZHkgYnViYmxlZCBpdCBhYm92ZVxuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB0eXBlO1xuXHRcdFx0XHRcdGVsZW1bIHR5cGUgXSgpO1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgPSB1bmRlZmluZWQ7XG5cblx0XHRcdFx0XHRpZiAoIHRtcCApIHtcblx0XHRcdFx0XHRcdGVsZW1bIG9udHlwZSBdID0gdG1wO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC5yZXN1bHQ7XG5cdH0sXG5cblx0ZGlzcGF0Y2g6IGZ1bmN0aW9uKCBldmVudCApIHtcblxuXHRcdC8vIE1ha2UgYSB3cml0YWJsZSBqUXVlcnkuRXZlbnQgZnJvbSB0aGUgbmF0aXZlIGV2ZW50IG9iamVjdFxuXHRcdGV2ZW50ID0galF1ZXJ5LmV2ZW50LmZpeCggZXZlbnQgKTtcblxuXHRcdHZhciBpLCBqLCByZXQsIG1hdGNoZWQsIGhhbmRsZU9iaixcblx0XHRcdGhhbmRsZXJRdWV1ZSA9IFtdLFxuXHRcdFx0YXJncyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApLFxuXHRcdFx0aGFuZGxlcnMgPSAoIGRhdGFfcHJpdi5nZXQoIHRoaXMsIFwiZXZlbnRzXCIgKSB8fCB7fSApWyBldmVudC50eXBlIF0gfHwgW10sXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGV2ZW50LnR5cGUgXSB8fCB7fTtcblxuXHRcdC8vIFVzZSB0aGUgZml4LWVkIGpRdWVyeS5FdmVudCByYXRoZXIgdGhhbiB0aGUgKHJlYWQtb25seSkgbmF0aXZlIGV2ZW50XG5cdFx0YXJnc1swXSA9IGV2ZW50O1xuXHRcdGV2ZW50LmRlbGVnYXRlVGFyZ2V0ID0gdGhpcztcblxuXHRcdC8vIENhbGwgdGhlIHByZURpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZSwgYW5kIGxldCBpdCBiYWlsIGlmIGRlc2lyZWRcblx0XHRpZiAoIHNwZWNpYWwucHJlRGlzcGF0Y2ggJiYgc3BlY2lhbC5wcmVEaXNwYXRjaC5jYWxsKCB0aGlzLCBldmVudCApID09PSBmYWxzZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBEZXRlcm1pbmUgaGFuZGxlcnNcblx0XHRoYW5kbGVyUXVldWUgPSBqUXVlcnkuZXZlbnQuaGFuZGxlcnMuY2FsbCggdGhpcywgZXZlbnQsIGhhbmRsZXJzICk7XG5cblx0XHQvLyBSdW4gZGVsZWdhdGVzIGZpcnN0OyB0aGV5IG1heSB3YW50IHRvIHN0b3AgcHJvcGFnYXRpb24gYmVuZWF0aCB1c1xuXHRcdGkgPSAwO1xuXHRcdHdoaWxlICggKG1hdGNoZWQgPSBoYW5kbGVyUXVldWVbIGkrKyBdKSAmJiAhZXZlbnQuaXNQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblx0XHRcdGV2ZW50LmN1cnJlbnRUYXJnZXQgPSBtYXRjaGVkLmVsZW07XG5cblx0XHRcdGogPSAwO1xuXHRcdFx0d2hpbGUgKCAoaGFuZGxlT2JqID0gbWF0Y2hlZC5oYW5kbGVyc1sgaisrIF0pICYmICFldmVudC5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXG5cdFx0XHRcdC8vIFRyaWdnZXJlZCBldmVudCBtdXN0IGVpdGhlciAxKSBoYXZlIG5vIG5hbWVzcGFjZSwgb3IgMikgaGF2ZSBuYW1lc3BhY2Uocylcblx0XHRcdFx0Ly8gYSBzdWJzZXQgb3IgZXF1YWwgdG8gdGhvc2UgaW4gdGhlIGJvdW5kIGV2ZW50IChib3RoIGNhbiBoYXZlIG5vIG5hbWVzcGFjZSkuXG5cdFx0XHRcdGlmICggIWV2ZW50Lm5hbWVzcGFjZV9yZSB8fCBldmVudC5uYW1lc3BhY2VfcmUudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkge1xuXG5cdFx0XHRcdFx0ZXZlbnQuaGFuZGxlT2JqID0gaGFuZGxlT2JqO1xuXHRcdFx0XHRcdGV2ZW50LmRhdGEgPSBoYW5kbGVPYmouZGF0YTtcblxuXHRcdFx0XHRcdHJldCA9ICggKGpRdWVyeS5ldmVudC5zcGVjaWFsWyBoYW5kbGVPYmoub3JpZ1R5cGUgXSB8fCB7fSkuaGFuZGxlIHx8IGhhbmRsZU9iai5oYW5kbGVyIClcblx0XHRcdFx0XHRcdFx0LmFwcGx5KCBtYXRjaGVkLmVsZW0sIGFyZ3MgKTtcblxuXHRcdFx0XHRcdGlmICggcmV0ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIChldmVudC5yZXN1bHQgPSByZXQpID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHRcdFx0XHRcdFx0ZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FsbCB0aGUgcG9zdERpc3BhdGNoIGhvb2sgZm9yIHRoZSBtYXBwZWQgdHlwZVxuXHRcdGlmICggc3BlY2lhbC5wb3N0RGlzcGF0Y2ggKSB7XG5cdFx0XHRzcGVjaWFsLnBvc3REaXNwYXRjaC5jYWxsKCB0aGlzLCBldmVudCApO1xuXHRcdH1cblxuXHRcdHJldHVybiBldmVudC5yZXN1bHQ7XG5cdH0sXG5cblx0aGFuZGxlcnM6IGZ1bmN0aW9uKCBldmVudCwgaGFuZGxlcnMgKSB7XG5cdFx0dmFyIGksIG1hdGNoZXMsIHNlbCwgaGFuZGxlT2JqLFxuXHRcdFx0aGFuZGxlclF1ZXVlID0gW10sXG5cdFx0XHRkZWxlZ2F0ZUNvdW50ID0gaGFuZGxlcnMuZGVsZWdhdGVDb3VudCxcblx0XHRcdGN1ciA9IGV2ZW50LnRhcmdldDtcblxuXHRcdC8vIEZpbmQgZGVsZWdhdGUgaGFuZGxlcnNcblx0XHQvLyBCbGFjay1ob2xlIFNWRyA8dXNlPiBpbnN0YW5jZSB0cmVlcyAoIzEzMTgwKVxuXHRcdC8vIEF2b2lkIG5vbi1sZWZ0LWNsaWNrIGJ1YmJsaW5nIGluIEZpcmVmb3ggKCMzODYxKVxuXHRcdGlmICggZGVsZWdhdGVDb3VudCAmJiBjdXIubm9kZVR5cGUgJiYgKCFldmVudC5idXR0b24gfHwgZXZlbnQudHlwZSAhPT0gXCJjbGlja1wiKSApIHtcblxuXHRcdFx0Zm9yICggOyBjdXIgIT09IHRoaXM7IGN1ciA9IGN1ci5wYXJlbnROb2RlIHx8IHRoaXMgKSB7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgcHJvY2VzcyBjbGlja3Mgb24gZGlzYWJsZWQgZWxlbWVudHMgKCM2OTExLCAjODE2NSwgIzExMzgyLCAjMTE3NjQpXG5cdFx0XHRcdGlmICggY3VyLmRpc2FibGVkICE9PSB0cnVlIHx8IGV2ZW50LnR5cGUgIT09IFwiY2xpY2tcIiApIHtcblx0XHRcdFx0XHRtYXRjaGVzID0gW107XG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBkZWxlZ2F0ZUNvdW50OyBpKysgKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVPYmogPSBoYW5kbGVyc1sgaSBdO1xuXG5cdFx0XHRcdFx0XHQvLyBEb24ndCBjb25mbGljdCB3aXRoIE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoIzEzMjAzKVxuXHRcdFx0XHRcdFx0c2VsID0gaGFuZGxlT2JqLnNlbGVjdG9yICsgXCIgXCI7XG5cblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlc1sgc2VsIF0gPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRcdFx0bWF0Y2hlc1sgc2VsIF0gPSBoYW5kbGVPYmoubmVlZHNDb250ZXh0ID9cblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkoIHNlbCwgdGhpcyApLmluZGV4KCBjdXIgKSA+PSAwIDpcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZmluZCggc2VsLCB0aGlzLCBudWxsLCBbIGN1ciBdICkubGVuZ3RoO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0aWYgKCBtYXRjaGVzWyBzZWwgXSApIHtcblx0XHRcdFx0XHRcdFx0bWF0Y2hlcy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVzLmxlbmd0aCApIHtcblx0XHRcdFx0XHRcdGhhbmRsZXJRdWV1ZS5wdXNoKHsgZWxlbTogY3VyLCBoYW5kbGVyczogbWF0Y2hlcyB9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBBZGQgdGhlIHJlbWFpbmluZyAoZGlyZWN0bHktYm91bmQpIGhhbmRsZXJzXG5cdFx0aWYgKCBkZWxlZ2F0ZUNvdW50IDwgaGFuZGxlcnMubGVuZ3RoICkge1xuXHRcdFx0aGFuZGxlclF1ZXVlLnB1c2goeyBlbGVtOiB0aGlzLCBoYW5kbGVyczogaGFuZGxlcnMuc2xpY2UoIGRlbGVnYXRlQ291bnQgKSB9KTtcblx0XHR9XG5cblx0XHRyZXR1cm4gaGFuZGxlclF1ZXVlO1xuXHR9LFxuXG5cdC8vIEluY2x1ZGVzIHNvbWUgZXZlbnQgcHJvcHMgc2hhcmVkIGJ5IEtleUV2ZW50IGFuZCBNb3VzZUV2ZW50XG5cdHByb3BzOiBcImFsdEtleSBidWJibGVzIGNhbmNlbGFibGUgY3RybEtleSBjdXJyZW50VGFyZ2V0IGV2ZW50UGhhc2UgbWV0YUtleSByZWxhdGVkVGFyZ2V0IHNoaWZ0S2V5IHRhcmdldCB0aW1lU3RhbXAgdmlldyB3aGljaFwiLnNwbGl0KFwiIFwiKSxcblxuXHRmaXhIb29rczoge30sXG5cblx0a2V5SG9va3M6IHtcblx0XHRwcm9wczogXCJjaGFyIGNoYXJDb2RlIGtleSBrZXlDb2RlXCIuc3BsaXQoXCIgXCIpLFxuXHRcdGZpbHRlcjogZnVuY3Rpb24oIGV2ZW50LCBvcmlnaW5hbCApIHtcblxuXHRcdFx0Ly8gQWRkIHdoaWNoIGZvciBrZXkgZXZlbnRzXG5cdFx0XHRpZiAoIGV2ZW50LndoaWNoID09IG51bGwgKSB7XG5cdFx0XHRcdGV2ZW50LndoaWNoID0gb3JpZ2luYWwuY2hhckNvZGUgIT0gbnVsbCA/IG9yaWdpbmFsLmNoYXJDb2RlIDogb3JpZ2luYWwua2V5Q29kZTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGV2ZW50O1xuXHRcdH1cblx0fSxcblxuXHRtb3VzZUhvb2tzOiB7XG5cdFx0cHJvcHM6IFwiYnV0dG9uIGJ1dHRvbnMgY2xpZW50WCBjbGllbnRZIG9mZnNldFggb2Zmc2V0WSBwYWdlWCBwYWdlWSBzY3JlZW5YIHNjcmVlblkgdG9FbGVtZW50XCIuc3BsaXQoXCIgXCIpLFxuXHRcdGZpbHRlcjogZnVuY3Rpb24oIGV2ZW50LCBvcmlnaW5hbCApIHtcblx0XHRcdHZhciBldmVudERvYywgZG9jLCBib2R5LFxuXHRcdFx0XHRidXR0b24gPSBvcmlnaW5hbC5idXR0b247XG5cblx0XHRcdC8vIENhbGN1bGF0ZSBwYWdlWC9ZIGlmIG1pc3NpbmcgYW5kIGNsaWVudFgvWSBhdmFpbGFibGVcblx0XHRcdGlmICggZXZlbnQucGFnZVggPT0gbnVsbCAmJiBvcmlnaW5hbC5jbGllbnRYICE9IG51bGwgKSB7XG5cdFx0XHRcdGV2ZW50RG9jID0gZXZlbnQudGFyZ2V0Lm93bmVyRG9jdW1lbnQgfHwgZG9jdW1lbnQ7XG5cdFx0XHRcdGRvYyA9IGV2ZW50RG9jLmRvY3VtZW50RWxlbWVudDtcblx0XHRcdFx0Ym9keSA9IGV2ZW50RG9jLmJvZHk7XG5cblx0XHRcdFx0ZXZlbnQucGFnZVggPSBvcmlnaW5hbC5jbGllbnRYICsgKCBkb2MgJiYgZG9jLnNjcm9sbExlZnQgfHwgYm9keSAmJiBib2R5LnNjcm9sbExlZnQgfHwgMCApIC0gKCBkb2MgJiYgZG9jLmNsaWVudExlZnQgfHwgYm9keSAmJiBib2R5LmNsaWVudExlZnQgfHwgMCApO1xuXHRcdFx0XHRldmVudC5wYWdlWSA9IG9yaWdpbmFsLmNsaWVudFkgKyAoIGRvYyAmJiBkb2Muc2Nyb2xsVG9wICB8fCBib2R5ICYmIGJvZHkuc2Nyb2xsVG9wICB8fCAwICkgLSAoIGRvYyAmJiBkb2MuY2xpZW50VG9wICB8fCBib2R5ICYmIGJvZHkuY2xpZW50VG9wICB8fCAwICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCB3aGljaCBmb3IgY2xpY2s6IDEgPT09IGxlZnQ7IDIgPT09IG1pZGRsZTsgMyA9PT0gcmlnaHRcblx0XHRcdC8vIE5vdGU6IGJ1dHRvbiBpcyBub3Qgbm9ybWFsaXplZCwgc28gZG9uJ3QgdXNlIGl0XG5cdFx0XHRpZiAoICFldmVudC53aGljaCAmJiBidXR0b24gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0ZXZlbnQud2hpY2ggPSAoIGJ1dHRvbiAmIDEgPyAxIDogKCBidXR0b24gJiAyID8gMyA6ICggYnV0dG9uICYgNCA/IDIgOiAwICkgKSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZXZlbnQ7XG5cdFx0fVxuXHR9LFxuXG5cdGZpeDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdGlmICggZXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gKSB7XG5cdFx0XHRyZXR1cm4gZXZlbnQ7XG5cdFx0fVxuXG5cdFx0Ly8gQ3JlYXRlIGEgd3JpdGFibGUgY29weSBvZiB0aGUgZXZlbnQgb2JqZWN0IGFuZCBub3JtYWxpemUgc29tZSBwcm9wZXJ0aWVzXG5cdFx0dmFyIGksIHByb3AsIGNvcHksXG5cdFx0XHR0eXBlID0gZXZlbnQudHlwZSxcblx0XHRcdG9yaWdpbmFsRXZlbnQgPSBldmVudCxcblx0XHRcdGZpeEhvb2sgPSB0aGlzLmZpeEhvb2tzWyB0eXBlIF07XG5cblx0XHRpZiAoICFmaXhIb29rICkge1xuXHRcdFx0dGhpcy5maXhIb29rc1sgdHlwZSBdID0gZml4SG9vayA9XG5cdFx0XHRcdHJtb3VzZUV2ZW50LnRlc3QoIHR5cGUgKSA/IHRoaXMubW91c2VIb29rcyA6XG5cdFx0XHRcdHJrZXlFdmVudC50ZXN0KCB0eXBlICkgPyB0aGlzLmtleUhvb2tzIDpcblx0XHRcdFx0e307XG5cdFx0fVxuXHRcdGNvcHkgPSBmaXhIb29rLnByb3BzID8gdGhpcy5wcm9wcy5jb25jYXQoIGZpeEhvb2sucHJvcHMgKSA6IHRoaXMucHJvcHM7XG5cblx0XHRldmVudCA9IG5ldyBqUXVlcnkuRXZlbnQoIG9yaWdpbmFsRXZlbnQgKTtcblxuXHRcdGkgPSBjb3B5Lmxlbmd0aDtcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdHByb3AgPSBjb3B5WyBpIF07XG5cdFx0XHRldmVudFsgcHJvcCBdID0gb3JpZ2luYWxFdmVudFsgcHJvcCBdO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IENvcmRvdmEgMi41IChXZWJLaXQpICgjMTMyNTUpXG5cdFx0Ly8gQWxsIGV2ZW50cyBzaG91bGQgaGF2ZSBhIHRhcmdldDsgQ29yZG92YSBkZXZpY2VyZWFkeSBkb2Vzbid0XG5cdFx0aWYgKCAhZXZlbnQudGFyZ2V0ICkge1xuXHRcdFx0ZXZlbnQudGFyZ2V0ID0gZG9jdW1lbnQ7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogU2FmYXJpIDYuMCssIENocm9tZTwyOFxuXHRcdC8vIFRhcmdldCBzaG91bGQgbm90IGJlIGEgdGV4dCBub2RlICgjNTA0LCAjMTMxNDMpXG5cdFx0aWYgKCBldmVudC50YXJnZXQubm9kZVR5cGUgPT09IDMgKSB7XG5cdFx0XHRldmVudC50YXJnZXQgPSBldmVudC50YXJnZXQucGFyZW50Tm9kZTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZml4SG9vay5maWx0ZXIgPyBmaXhIb29rLmZpbHRlciggZXZlbnQsIG9yaWdpbmFsRXZlbnQgKSA6IGV2ZW50O1xuXHR9LFxuXG5cdHNwZWNpYWw6IHtcblx0XHRsb2FkOiB7XG5cdFx0XHQvLyBQcmV2ZW50IHRyaWdnZXJlZCBpbWFnZS5sb2FkIGV2ZW50cyBmcm9tIGJ1YmJsaW5nIHRvIHdpbmRvdy5sb2FkXG5cdFx0XHRub0J1YmJsZTogdHJ1ZVxuXHRcdH0sXG5cdFx0Zm9jdXM6IHtcblx0XHRcdC8vIEZpcmUgbmF0aXZlIGV2ZW50IGlmIHBvc3NpYmxlIHNvIGJsdXIvZm9jdXMgc2VxdWVuY2UgaXMgY29ycmVjdFxuXHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggdGhpcyAhPT0gc2FmZUFjdGl2ZUVsZW1lbnQoKSAmJiB0aGlzLmZvY3VzICkge1xuXHRcdFx0XHRcdHRoaXMuZm9jdXMoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNpblwiXG5cdFx0fSxcblx0XHRibHVyOiB7XG5cdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCB0aGlzID09PSBzYWZlQWN0aXZlRWxlbWVudCgpICYmIHRoaXMuYmx1ciApIHtcblx0XHRcdFx0XHR0aGlzLmJsdXIoKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cdFx0XHRkZWxlZ2F0ZVR5cGU6IFwiZm9jdXNvdXRcIlxuXHRcdH0sXG5cdFx0Y2xpY2s6IHtcblx0XHRcdC8vIEZvciBjaGVja2JveCwgZmlyZSBuYXRpdmUgZXZlbnQgc28gY2hlY2tlZCBzdGF0ZSB3aWxsIGJlIHJpZ2h0XG5cdFx0XHR0cmlnZ2VyOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCB0aGlzLnR5cGUgPT09IFwiY2hlY2tib3hcIiAmJiB0aGlzLmNsaWNrICYmIGpRdWVyeS5ub2RlTmFtZSggdGhpcywgXCJpbnB1dFwiICkgKSB7XG5cdFx0XHRcdFx0dGhpcy5jbGljaygpO1xuXHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0Ly8gRm9yIGNyb3NzLWJyb3dzZXIgY29uc2lzdGVuY3ksIGRvbid0IGZpcmUgbmF0aXZlIC5jbGljaygpIG9uIGxpbmtzXG5cdFx0XHRfZGVmYXVsdDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRyZXR1cm4galF1ZXJ5Lm5vZGVOYW1lKCBldmVudC50YXJnZXQsIFwiYVwiICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdGJlZm9yZXVubG9hZDoge1xuXHRcdFx0cG9zdERpc3BhdGNoOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveCAyMCtcblx0XHRcdFx0Ly8gRmlyZWZveCBkb2Vzbid0IGFsZXJ0IGlmIHRoZSByZXR1cm5WYWx1ZSBmaWVsZCBpcyBub3Qgc2V0LlxuXHRcdFx0XHRpZiAoIGV2ZW50LnJlc3VsdCAhPT0gdW5kZWZpbmVkICYmIGV2ZW50Lm9yaWdpbmFsRXZlbnQgKSB7XG5cdFx0XHRcdFx0ZXZlbnQub3JpZ2luYWxFdmVudC5yZXR1cm5WYWx1ZSA9IGV2ZW50LnJlc3VsdDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRzaW11bGF0ZTogZnVuY3Rpb24oIHR5cGUsIGVsZW0sIGV2ZW50LCBidWJibGUgKSB7XG5cdFx0Ly8gUGlnZ3liYWNrIG9uIGEgZG9ub3IgZXZlbnQgdG8gc2ltdWxhdGUgYSBkaWZmZXJlbnQgb25lLlxuXHRcdC8vIEZha2Ugb3JpZ2luYWxFdmVudCB0byBhdm9pZCBkb25vcidzIHN0b3BQcm9wYWdhdGlvbiwgYnV0IGlmIHRoZVxuXHRcdC8vIHNpbXVsYXRlZCBldmVudCBwcmV2ZW50cyBkZWZhdWx0IHRoZW4gd2UgZG8gdGhlIHNhbWUgb24gdGhlIGRvbm9yLlxuXHRcdHZhciBlID0galF1ZXJ5LmV4dGVuZChcblx0XHRcdG5ldyBqUXVlcnkuRXZlbnQoKSxcblx0XHRcdGV2ZW50LFxuXHRcdFx0e1xuXHRcdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0XHRpc1NpbXVsYXRlZDogdHJ1ZSxcblx0XHRcdFx0b3JpZ2luYWxFdmVudDoge31cblx0XHRcdH1cblx0XHQpO1xuXHRcdGlmICggYnViYmxlICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIGUsIG51bGwsIGVsZW0gKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LmRpc3BhdGNoLmNhbGwoIGVsZW0sIGUgKTtcblx0XHR9XG5cdFx0aWYgKCBlLmlzRGVmYXVsdFByZXZlbnRlZCgpICkge1xuXHRcdFx0ZXZlbnQucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdH1cbn07XG5cbmpRdWVyeS5yZW1vdmVFdmVudCA9IGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCBoYW5kbGUgKSB7XG5cdGlmICggZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyICkge1xuXHRcdGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciggdHlwZSwgaGFuZGxlLCBmYWxzZSApO1xuXHR9XG59O1xuXG5qUXVlcnkuRXZlbnQgPSBmdW5jdGlvbiggc3JjLCBwcm9wcyApIHtcblx0Ly8gQWxsb3cgaW5zdGFudGlhdGlvbiB3aXRob3V0IHRoZSAnbmV3JyBrZXl3b3JkXG5cdGlmICggISh0aGlzIGluc3RhbmNlb2YgalF1ZXJ5LkV2ZW50KSApIHtcblx0XHRyZXR1cm4gbmV3IGpRdWVyeS5FdmVudCggc3JjLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gRXZlbnQgb2JqZWN0XG5cdGlmICggc3JjICYmIHNyYy50eXBlICkge1xuXHRcdHRoaXMub3JpZ2luYWxFdmVudCA9IHNyYztcblx0XHR0aGlzLnR5cGUgPSBzcmMudHlwZTtcblxuXHRcdC8vIEV2ZW50cyBidWJibGluZyB1cCB0aGUgZG9jdW1lbnQgbWF5IGhhdmUgYmVlbiBtYXJrZWQgYXMgcHJldmVudGVkXG5cdFx0Ly8gYnkgYSBoYW5kbGVyIGxvd2VyIGRvd24gdGhlIHRyZWU7IHJlZmxlY3QgdGhlIGNvcnJlY3QgdmFsdWUuXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSBzcmMuZGVmYXVsdFByZXZlbnRlZCB8fFxuXHRcdFx0XHRzcmMuZGVmYXVsdFByZXZlbnRlZCA9PT0gdW5kZWZpbmVkICYmXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NC4wXG5cdFx0XHRcdHNyYy5yZXR1cm5WYWx1ZSA9PT0gZmFsc2UgP1xuXHRcdFx0cmV0dXJuVHJ1ZSA6XG5cdFx0XHRyZXR1cm5GYWxzZTtcblxuXHQvLyBFdmVudCB0eXBlXG5cdH0gZWxzZSB7XG5cdFx0dGhpcy50eXBlID0gc3JjO1xuXHR9XG5cblx0Ly8gUHV0IGV4cGxpY2l0bHkgcHJvdmlkZWQgcHJvcGVydGllcyBvbnRvIHRoZSBldmVudCBvYmplY3Rcblx0aWYgKCBwcm9wcyApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aGlzLCBwcm9wcyApO1xuXHR9XG5cblx0Ly8gQ3JlYXRlIGEgdGltZXN0YW1wIGlmIGluY29taW5nIGV2ZW50IGRvZXNuJ3QgaGF2ZSBvbmVcblx0dGhpcy50aW1lU3RhbXAgPSBzcmMgJiYgc3JjLnRpbWVTdGFtcCB8fCBqUXVlcnkubm93KCk7XG5cblx0Ly8gTWFyayBpdCBhcyBmaXhlZFxuXHR0aGlzWyBqUXVlcnkuZXhwYW5kbyBdID0gdHJ1ZTtcbn07XG5cbi8vIGpRdWVyeS5FdmVudCBpcyBiYXNlZCBvbiBET00zIEV2ZW50cyBhcyBzcGVjaWZpZWQgYnkgdGhlIEVDTUFTY3JpcHQgTGFuZ3VhZ2UgQmluZGluZ1xuLy8gaHR0cDovL3d3dy53My5vcmcvVFIvMjAwMy9XRC1ET00tTGV2ZWwtMy1FdmVudHMtMjAwMzAzMzEvZWNtYS1zY3JpcHQtYmluZGluZy5odG1sXG5qUXVlcnkuRXZlbnQucHJvdG90eXBlID0ge1xuXHRpc0RlZmF1bHRQcmV2ZW50ZWQ6IHJldHVybkZhbHNlLFxuXHRpc1Byb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cdGlzSW1tZWRpYXRlUHJvcGFnYXRpb25TdG9wcGVkOiByZXR1cm5GYWxzZSxcblxuXHRwcmV2ZW50RGVmYXVsdDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzRGVmYXVsdFByZXZlbnRlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgZS5wcmV2ZW50RGVmYXVsdCApIHtcblx0XHRcdGUucHJldmVudERlZmF1bHQoKTtcblx0XHR9XG5cdH0sXG5cdHN0b3BQcm9wYWdhdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGUgPSB0aGlzLm9yaWdpbmFsRXZlbnQ7XG5cblx0XHR0aGlzLmlzUHJvcGFnYXRpb25TdG9wcGVkID0gcmV0dXJuVHJ1ZTtcblxuXHRcdGlmICggZSAmJiBlLnN0b3BQcm9wYWdhdGlvbiApIHtcblx0XHRcdGUuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdFx0fVxuXHR9LFxuXHRzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24gKSB7XG5cdFx0XHRlLnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuXHRcdH1cblxuXHRcdHRoaXMuc3RvcFByb3BhZ2F0aW9uKCk7XG5cdH1cbn07XG5cbi8vIENyZWF0ZSBtb3VzZWVudGVyL2xlYXZlIGV2ZW50cyB1c2luZyBtb3VzZW92ZXIvb3V0IGFuZCBldmVudC10aW1lIGNoZWNrc1xuLy8gU3VwcG9ydDogQ2hyb21lIDE1K1xualF1ZXJ5LmVhY2goe1xuXHRtb3VzZWVudGVyOiBcIm1vdXNlb3ZlclwiLFxuXHRtb3VzZWxlYXZlOiBcIm1vdXNlb3V0XCIsXG5cdHBvaW50ZXJlbnRlcjogXCJwb2ludGVyb3ZlclwiLFxuXHRwb2ludGVybGVhdmU6IFwicG9pbnRlcm91dFwiXG59LCBmdW5jdGlvbiggb3JpZywgZml4ICkge1xuXHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgb3JpZyBdID0ge1xuXHRcdGRlbGVnYXRlVHlwZTogZml4LFxuXHRcdGJpbmRUeXBlOiBmaXgsXG5cblx0XHRoYW5kbGU6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdHZhciByZXQsXG5cdFx0XHRcdHRhcmdldCA9IHRoaXMsXG5cdFx0XHRcdHJlbGF0ZWQgPSBldmVudC5yZWxhdGVkVGFyZ2V0LFxuXHRcdFx0XHRoYW5kbGVPYmogPSBldmVudC5oYW5kbGVPYmo7XG5cblx0XHRcdC8vIEZvciBtb3VzZW50ZXIvbGVhdmUgY2FsbCB0aGUgaGFuZGxlciBpZiByZWxhdGVkIGlzIG91dHNpZGUgdGhlIHRhcmdldC5cblx0XHRcdC8vIE5COiBObyByZWxhdGVkVGFyZ2V0IGlmIHRoZSBtb3VzZSBsZWZ0L2VudGVyZWQgdGhlIGJyb3dzZXIgd2luZG93XG5cdFx0XHRpZiAoICFyZWxhdGVkIHx8IChyZWxhdGVkICE9PSB0YXJnZXQgJiYgIWpRdWVyeS5jb250YWlucyggdGFyZ2V0LCByZWxhdGVkICkpICkge1xuXHRcdFx0XHRldmVudC50eXBlID0gaGFuZGxlT2JqLm9yaWdUeXBlO1xuXHRcdFx0XHRyZXQgPSBoYW5kbGVPYmouaGFuZGxlci5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdGV2ZW50LnR5cGUgPSBmaXg7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmV0O1xuXHRcdH1cblx0fTtcbn0pO1xuXG4vLyBTdXBwb3J0OiBGaXJlZm94LCBDaHJvbWUsIFNhZmFyaVxuLy8gQ3JlYXRlIFwiYnViYmxpbmdcIiBmb2N1cyBhbmQgYmx1ciBldmVudHNcbmlmICggIXN1cHBvcnQuZm9jdXNpbkJ1YmJsZXMgKSB7XG5cdGpRdWVyeS5lYWNoKHsgZm9jdXM6IFwiZm9jdXNpblwiLCBibHVyOiBcImZvY3Vzb3V0XCIgfSwgZnVuY3Rpb24oIG9yaWcsIGZpeCApIHtcblxuXHRcdC8vIEF0dGFjaCBhIHNpbmdsZSBjYXB0dXJpbmcgaGFuZGxlciBvbiB0aGUgZG9jdW1lbnQgd2hpbGUgc29tZW9uZSB3YW50cyBmb2N1c2luL2ZvY3Vzb3V0XG5cdFx0dmFyIGhhbmRsZXIgPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdGpRdWVyeS5ldmVudC5zaW11bGF0ZSggZml4LCBldmVudC50YXJnZXQsIGpRdWVyeS5ldmVudC5maXgoIGV2ZW50ICksIHRydWUgKTtcblx0XHRcdH07XG5cblx0XHRqUXVlcnkuZXZlbnQuc3BlY2lhbFsgZml4IF0gPSB7XG5cdFx0XHRzZXR1cDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBkb2MgPSB0aGlzLm93bmVyRG9jdW1lbnQgfHwgdGhpcyxcblx0XHRcdFx0XHRhdHRhY2hlcyA9IGRhdGFfcHJpdi5hY2Nlc3MoIGRvYywgZml4ICk7XG5cblx0XHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdFx0ZG9jLmFkZEV2ZW50TGlzdGVuZXIoIG9yaWcsIGhhbmRsZXIsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRkYXRhX3ByaXYuYWNjZXNzKCBkb2MsIGZpeCwgKCBhdHRhY2hlcyB8fCAwICkgKyAxICk7XG5cdFx0XHR9LFxuXHRcdFx0dGVhcmRvd246IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXG5cdFx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhX3ByaXYuYWNjZXNzKCBkb2MsIGZpeCApIC0gMTtcblxuXHRcdFx0XHRpZiAoICFhdHRhY2hlcyApIHtcblx0XHRcdFx0XHRkb2MucmVtb3ZlRXZlbnRMaXN0ZW5lciggb3JpZywgaGFuZGxlciwgdHJ1ZSApO1xuXHRcdFx0XHRcdGRhdGFfcHJpdi5yZW1vdmUoIGRvYywgZml4ICk7XG5cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkYXRhX3ByaXYuYWNjZXNzKCBkb2MsIGZpeCwgYXR0YWNoZXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH0pO1xufVxuXG5qUXVlcnkuZm4uZXh0ZW5kKHtcblxuXHRvbjogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIC8qSU5URVJOQUwqLyBvbmUgKSB7XG5cdFx0dmFyIG9yaWdGbiwgdHlwZTtcblxuXHRcdC8vIFR5cGVzIGNhbiBiZSBhIG1hcCBvZiB0eXBlcy9oYW5kbGVyc1xuXHRcdGlmICggdHlwZW9mIHR5cGVzID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0Ly8gKCB0eXBlcy1PYmplY3QsIHNlbGVjdG9yLCBkYXRhIClcblx0XHRcdGlmICggdHlwZW9mIHNlbGVjdG9yICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0XHQvLyAoIHR5cGVzLU9iamVjdCwgZGF0YSApXG5cdFx0XHRcdGRhdGEgPSBkYXRhIHx8IHNlbGVjdG9yO1xuXHRcdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHRcdH1cblx0XHRcdGZvciAoIHR5cGUgaW4gdHlwZXMgKSB7XG5cdFx0XHRcdHRoaXMub24oIHR5cGUsIHNlbGVjdG9yLCBkYXRhLCB0eXBlc1sgdHlwZSBdLCBvbmUgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblxuXHRcdGlmICggZGF0YSA9PSBudWxsICYmIGZuID09IG51bGwgKSB7XG5cdFx0XHQvLyAoIHR5cGVzLCBmbiApXG5cdFx0XHRmbiA9IHNlbGVjdG9yO1xuXHRcdFx0ZGF0YSA9IHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdH0gZWxzZSBpZiAoIGZuID09IG51bGwgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0Ly8gKCB0eXBlcywgc2VsZWN0b3IsIGZuIClcblx0XHRcdFx0Zm4gPSBkYXRhO1xuXHRcdFx0XHRkYXRhID0gdW5kZWZpbmVkO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Ly8gKCB0eXBlcywgZGF0YSwgZm4gKVxuXHRcdFx0XHRmbiA9IGRhdGE7XG5cdFx0XHRcdGRhdGEgPSBzZWxlY3Rvcjtcblx0XHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdGlmICggZm4gPT09IGZhbHNlICkge1xuXHRcdFx0Zm4gPSByZXR1cm5GYWxzZTtcblx0XHR9IGVsc2UgaWYgKCAhZm4gKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiAoIG9uZSA9PT0gMSApIHtcblx0XHRcdG9yaWdGbiA9IGZuO1xuXHRcdFx0Zm4gPSBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHRcdC8vIENhbiB1c2UgYW4gZW1wdHkgc2V0LCBzaW5jZSBldmVudCBjb250YWlucyB0aGUgaW5mb1xuXHRcdFx0XHRqUXVlcnkoKS5vZmYoIGV2ZW50ICk7XG5cdFx0XHRcdHJldHVybiBvcmlnRm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0fTtcblx0XHRcdC8vIFVzZSBzYW1lIGd1aWQgc28gY2FsbGVyIGNhbiByZW1vdmUgdXNpbmcgb3JpZ0ZuXG5cdFx0XHRmbi5ndWlkID0gb3JpZ0ZuLmd1aWQgfHwgKCBvcmlnRm4uZ3VpZCA9IGpRdWVyeS5ndWlkKysgKTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZWFjaCggZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCB0aGlzLCB0eXBlcywgZm4sIGRhdGEsIHNlbGVjdG9yICk7XG5cdFx0fSk7XG5cdH0sXG5cdG9uZTogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4sIDEgKTtcblx0fSxcblx0b2ZmOiBmdW5jdGlvbiggdHlwZXMsIHNlbGVjdG9yLCBmbiApIHtcblx0XHR2YXIgaGFuZGxlT2JqLCB0eXBlO1xuXHRcdGlmICggdHlwZXMgJiYgdHlwZXMucHJldmVudERlZmF1bHQgJiYgdHlwZXMuaGFuZGxlT2JqICkge1xuXHRcdFx0Ly8gKCBldmVudCApICBkaXNwYXRjaGVkIGpRdWVyeS5FdmVudFxuXHRcdFx0aGFuZGxlT2JqID0gdHlwZXMuaGFuZGxlT2JqO1xuXHRcdFx0alF1ZXJ5KCB0eXBlcy5kZWxlZ2F0ZVRhcmdldCApLm9mZihcblx0XHRcdFx0aGFuZGxlT2JqLm5hbWVzcGFjZSA/IGhhbmRsZU9iai5vcmlnVHlwZSArIFwiLlwiICsgaGFuZGxlT2JqLm5hbWVzcGFjZSA6IGhhbmRsZU9iai5vcmlnVHlwZSxcblx0XHRcdFx0aGFuZGxlT2JqLnNlbGVjdG9yLFxuXHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlclxuXHRcdFx0KTtcblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZiAoIHR5cGVvZiB0eXBlcyA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRcdC8vICggdHlwZXMtb2JqZWN0IFssIHNlbGVjdG9yXSApXG5cdFx0XHRmb3IgKCB0eXBlIGluIHR5cGVzICkge1xuXHRcdFx0XHR0aGlzLm9mZiggdHlwZSwgc2VsZWN0b3IsIHR5cGVzWyB0eXBlIF0gKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiB0aGlzO1xuXHRcdH1cblx0XHRpZiAoIHNlbGVjdG9yID09PSBmYWxzZSB8fCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdC8vICggdHlwZXMgWywgZm5dIClcblx0XHRcdGZuID0gc2VsZWN0b3I7XG5cdFx0XHRzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBmbiA9PT0gZmFsc2UgKSB7XG5cdFx0XHRmbiA9IHJldHVybkZhbHNlO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggdGhpcywgdHlwZXMsIGZuLCBzZWxlY3RvciApO1xuXHRcdH0pO1xuXHR9LFxuXG5cdHRyaWdnZXI6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlciggdHlwZSwgZGF0YSwgdGhpcyApO1xuXHRcdH0pO1xuXHR9LFxuXHR0cmlnZ2VySGFuZGxlcjogZnVuY3Rpb24oIHR5cGUsIGRhdGEgKSB7XG5cdFx0dmFyIGVsZW0gPSB0aGlzWzBdO1xuXHRcdGlmICggZWxlbSApIHtcblx0XHRcdHJldHVybiBqUXVlcnkuZXZlbnQudHJpZ2dlciggdHlwZSwgZGF0YSwgZWxlbSwgdHJ1ZSApO1xuXHRcdH1cblx0fVxufSk7XG5cblxudmFyXG5cdHJ4aHRtbFRhZyA9IC88KD8hYXJlYXxicnxjb2x8ZW1iZWR8aHJ8aW1nfGlucHV0fGxpbmt8bWV0YXxwYXJhbSkoKFtcXHc6XSspW14+XSopXFwvPi9naSxcblx0cnRhZ05hbWUgPSAvPChbXFx3Ol0rKS8sXG5cdHJodG1sID0gLzx8JiM/XFx3KzsvLFxuXHRybm9Jbm5lcmh0bWwgPSAvPCg/OnNjcmlwdHxzdHlsZXxsaW5rKS9pLFxuXHQvLyBjaGVja2VkPVwiY2hlY2tlZFwiIG9yIGNoZWNrZWRcblx0cmNoZWNrZWQgPSAvY2hlY2tlZFxccyooPzpbXj1dfD1cXHMqLmNoZWNrZWQuKS9pLFxuXHRyc2NyaXB0VHlwZSA9IC9eJHxcXC8oPzpqYXZhfGVjbWEpc2NyaXB0L2ksXG5cdHJzY3JpcHRUeXBlTWFza2VkID0gL150cnVlXFwvKC4qKS8sXG5cdHJjbGVhblNjcmlwdCA9IC9eXFxzKjwhKD86XFxbQ0RBVEFcXFt8LS0pfCg/OlxcXVxcXXwtLSk+XFxzKiQvZyxcblxuXHQvLyBXZSBoYXZlIHRvIGNsb3NlIHRoZXNlIHRhZ3MgdG8gc3VwcG9ydCBYSFRNTCAoIzEzMjAwKVxuXHR3cmFwTWFwID0ge1xuXG5cdFx0Ly8gU3VwcG9ydDogSUU5XG5cdFx0b3B0aW9uOiBbIDEsIFwiPHNlbGVjdCBtdWx0aXBsZT0nbXVsdGlwbGUnPlwiLCBcIjwvc2VsZWN0PlwiIF0sXG5cblx0XHR0aGVhZDogWyAxLCBcIjx0YWJsZT5cIiwgXCI8L3RhYmxlPlwiIF0sXG5cdFx0Y29sOiBbIDIsIFwiPHRhYmxlPjxjb2xncm91cD5cIiwgXCI8L2NvbGdyb3VwPjwvdGFibGU+XCIgXSxcblx0XHR0cjogWyAyLCBcIjx0YWJsZT48dGJvZHk+XCIsIFwiPC90Ym9keT48L3RhYmxlPlwiIF0sXG5cdFx0dGQ6IFsgMywgXCI8dGFibGU+PHRib2R5Pjx0cj5cIiwgXCI8L3RyPjwvdGJvZHk+PC90YWJsZT5cIiBdLFxuXG5cdFx0X2RlZmF1bHQ6IFsgMCwgXCJcIiwgXCJcIiBdXG5cdH07XG5cbi8vIFN1cHBvcnQ6IElFOVxud3JhcE1hcC5vcHRncm91cCA9IHdyYXBNYXAub3B0aW9uO1xuXG53cmFwTWFwLnRib2R5ID0gd3JhcE1hcC50Zm9vdCA9IHdyYXBNYXAuY29sZ3JvdXAgPSB3cmFwTWFwLmNhcHRpb24gPSB3cmFwTWFwLnRoZWFkO1xud3JhcE1hcC50aCA9IHdyYXBNYXAudGQ7XG5cbi8vIFN1cHBvcnQ6IDEueCBjb21wYXRpYmlsaXR5XG4vLyBNYW5pcHVsYXRpbmcgdGFibGVzIHJlcXVpcmVzIGEgdGJvZHlcbmZ1bmN0aW9uIG1hbmlwdWxhdGlvblRhcmdldCggZWxlbSwgY29udGVudCApIHtcblx0cmV0dXJuIGpRdWVyeS5ub2RlTmFtZSggZWxlbSwgXCJ0YWJsZVwiICkgJiZcblx0XHRqUXVlcnkubm9kZU5hbWUoIGNvbnRlbnQubm9kZVR5cGUgIT09IDExID8gY29udGVudCA6IGNvbnRlbnQuZmlyc3RDaGlsZCwgXCJ0clwiICkgP1xuXG5cdFx0ZWxlbS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInRib2R5XCIpWzBdIHx8XG5cdFx0XHRlbGVtLmFwcGVuZENoaWxkKCBlbGVtLm93bmVyRG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInRib2R5XCIpICkgOlxuXHRcdGVsZW07XG59XG5cbi8vIFJlcGxhY2UvcmVzdG9yZSB0aGUgdHlwZSBhdHRyaWJ1dGUgb2Ygc2NyaXB0IGVsZW1lbnRzIGZvciBzYWZlIERPTSBtYW5pcHVsYXRpb25cbmZ1bmN0aW9uIGRpc2FibGVTY3JpcHQoIGVsZW0gKSB7XG5cdGVsZW0udHlwZSA9IChlbGVtLmdldEF0dHJpYnV0ZShcInR5cGVcIikgIT09IG51bGwpICsgXCIvXCIgKyBlbGVtLnR5cGU7XG5cdHJldHVybiBlbGVtO1xufVxuZnVuY3Rpb24gcmVzdG9yZVNjcmlwdCggZWxlbSApIHtcblx0dmFyIG1hdGNoID0gcnNjcmlwdFR5cGVNYXNrZWQuZXhlYyggZWxlbS50eXBlICk7XG5cblx0aWYgKCBtYXRjaCApIHtcblx0XHRlbGVtLnR5cGUgPSBtYXRjaFsgMSBdO1xuXHR9IGVsc2Uge1xuXHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKFwidHlwZVwiKTtcblx0fVxuXG5cdHJldHVybiBlbGVtO1xufVxuXG4vLyBNYXJrIHNjcmlwdHMgYXMgaGF2aW5nIGFscmVhZHkgYmVlbiBldmFsdWF0ZWRcbmZ1bmN0aW9uIHNldEdsb2JhbEV2YWwoIGVsZW1zLCByZWZFbGVtZW50cyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGwgPSBlbGVtcy5sZW5ndGg7XG5cblx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdGRhdGFfcHJpdi5zZXQoXG5cdFx0XHRlbGVtc1sgaSBdLCBcImdsb2JhbEV2YWxcIiwgIXJlZkVsZW1lbnRzIHx8IGRhdGFfcHJpdi5nZXQoIHJlZkVsZW1lbnRzWyBpIF0sIFwiZ2xvYmFsRXZhbFwiIClcblx0XHQpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNsb25lQ29weUV2ZW50KCBzcmMsIGRlc3QgKSB7XG5cdHZhciBpLCBsLCB0eXBlLCBwZGF0YU9sZCwgcGRhdGFDdXIsIHVkYXRhT2xkLCB1ZGF0YUN1ciwgZXZlbnRzO1xuXG5cdGlmICggZGVzdC5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyAxLiBDb3B5IHByaXZhdGUgZGF0YTogZXZlbnRzLCBoYW5kbGVycywgZXRjLlxuXHRpZiAoIGRhdGFfcHJpdi5oYXNEYXRhKCBzcmMgKSApIHtcblx0XHRwZGF0YU9sZCA9IGRhdGFfcHJpdi5hY2Nlc3MoIHNyYyApO1xuXHRcdHBkYXRhQ3VyID0gZGF0YV9wcml2LnNldCggZGVzdCwgcGRhdGFPbGQgKTtcblx0XHRldmVudHMgPSBwZGF0YU9sZC5ldmVudHM7XG5cblx0XHRpZiAoIGV2ZW50cyApIHtcblx0XHRcdGRlbGV0ZSBwZGF0YUN1ci5oYW5kbGU7XG5cdFx0XHRwZGF0YUN1ci5ldmVudHMgPSB7fTtcblxuXHRcdFx0Zm9yICggdHlwZSBpbiBldmVudHMgKSB7XG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gZXZlbnRzWyB0eXBlIF0ubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC5hZGQoIGRlc3QsIHR5cGUsIGV2ZW50c1sgdHlwZSBdWyBpIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIDIuIENvcHkgdXNlciBkYXRhXG5cdGlmICggZGF0YV91c2VyLmhhc0RhdGEoIHNyYyApICkge1xuXHRcdHVkYXRhT2xkID0gZGF0YV91c2VyLmFjY2Vzcyggc3JjICk7XG5cdFx0dWRhdGFDdXIgPSBqUXVlcnkuZXh0ZW5kKCB7fSwgdWRhdGFPbGQgKTtcblxuXHRcdGRhdGFfdXNlci5zZXQoIGRlc3QsIHVkYXRhQ3VyICk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZ2V0QWxsKCBjb250ZXh0LCB0YWcgKSB7XG5cdHZhciByZXQgPSBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lID8gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnIHx8IFwiKlwiICkgOlxuXHRcdFx0Y29udGV4dC5xdWVyeVNlbGVjdG9yQWxsID8gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKCB0YWcgfHwgXCIqXCIgKSA6XG5cdFx0XHRbXTtcblxuXHRyZXR1cm4gdGFnID09PSB1bmRlZmluZWQgfHwgdGFnICYmIGpRdWVyeS5ub2RlTmFtZSggY29udGV4dCwgdGFnICkgP1xuXHRcdGpRdWVyeS5tZXJnZSggWyBjb250ZXh0IF0sIHJldCApIDpcblx0XHRyZXQ7XG59XG5cbi8vIEZpeCBJRSBidWdzLCBzZWUgc3VwcG9ydCB0ZXN0c1xuZnVuY3Rpb24gZml4SW5wdXQoIHNyYywgZGVzdCApIHtcblx0dmFyIG5vZGVOYW1lID0gZGVzdC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXG5cdC8vIEZhaWxzIHRvIHBlcnNpc3QgdGhlIGNoZWNrZWQgc3RhdGUgb2YgYSBjbG9uZWQgY2hlY2tib3ggb3IgcmFkaW8gYnV0dG9uLlxuXHRpZiAoIG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgcmNoZWNrYWJsZVR5cGUudGVzdCggc3JjLnR5cGUgKSApIHtcblx0XHRkZXN0LmNoZWNrZWQgPSBzcmMuY2hlY2tlZDtcblxuXHQvLyBGYWlscyB0byByZXR1cm4gdGhlIHNlbGVjdGVkIG9wdGlvbiB0byB0aGUgZGVmYXVsdCBzZWxlY3RlZCBzdGF0ZSB3aGVuIGNsb25pbmcgb3B0aW9uc1xuXHR9IGVsc2UgaWYgKCBub2RlTmFtZSA9PT0gXCJpbnB1dFwiIHx8IG5vZGVOYW1lID09PSBcInRleHRhcmVhXCIgKSB7XG5cdFx0ZGVzdC5kZWZhdWx0VmFsdWUgPSBzcmMuZGVmYXVsdFZhbHVlO1xuXHR9XG59XG5cbmpRdWVyeS5leHRlbmQoe1xuXHRjbG9uZTogZnVuY3Rpb24oIGVsZW0sIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdHZhciBpLCBsLCBzcmNFbGVtZW50cywgZGVzdEVsZW1lbnRzLFxuXHRcdFx0Y2xvbmUgPSBlbGVtLmNsb25lTm9kZSggdHJ1ZSApLFxuXHRcdFx0aW5QYWdlID0galF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKTtcblxuXHRcdC8vIEZpeCBJRSBjbG9uaW5nIGlzc3Vlc1xuXHRcdGlmICggIXN1cHBvcnQubm9DbG9uZUNoZWNrZWQgJiYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGVsZW0ubm9kZVR5cGUgPT09IDExICkgJiZcblx0XHRcdFx0IWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xuXG5cdFx0XHQvLyBXZSBlc2NoZXcgU2l6emxlIGhlcmUgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnM6IGh0dHA6Ly9qc3BlcmYuY29tL2dldGFsbC12cy1zaXp6bGUvMlxuXHRcdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSApO1xuXHRcdFx0c3JjRWxlbWVudHMgPSBnZXRBbGwoIGVsZW0gKTtcblxuXHRcdFx0Zm9yICggaSA9IDAsIGwgPSBzcmNFbGVtZW50cy5sZW5ndGg7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdGZpeElucHV0KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENvcHkgdGhlIGV2ZW50cyBmcm9tIHRoZSBvcmlnaW5hbCB0byB0aGUgY2xvbmVcblx0XHRpZiAoIGRhdGFBbmRFdmVudHMgKSB7XG5cdFx0XHRpZiAoIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0XHRzcmNFbGVtZW50cyA9IHNyY0VsZW1lbnRzIHx8IGdldEFsbCggZWxlbSApO1xuXHRcdFx0XHRkZXN0RWxlbWVudHMgPSBkZXN0RWxlbWVudHMgfHwgZ2V0QWxsKCBjbG9uZSApO1xuXG5cdFx0XHRcdGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdGNsb25lQ29weUV2ZW50KCBzcmNFbGVtZW50c1sgaSBdLCBkZXN0RWxlbWVudHNbIGkgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRjbG9uZUNvcHlFdmVudCggZWxlbSwgY2xvbmUgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0ZGVzdEVsZW1lbnRzID0gZ2V0QWxsKCBjbG9uZSwgXCJzY3JpcHRcIiApO1xuXHRcdGlmICggZGVzdEVsZW1lbnRzLmxlbmd0aCA+IDAgKSB7XG5cdFx0XHRzZXRHbG9iYWxFdmFsKCBkZXN0RWxlbWVudHMsICFpblBhZ2UgJiYgZ2V0QWxsKCBlbGVtLCBcInNjcmlwdFwiICkgKTtcblx0XHR9XG5cblx0XHQvLyBSZXR1cm4gdGhlIGNsb25lZCBzZXRcblx0XHRyZXR1cm4gY2xvbmU7XG5cdH0sXG5cblx0YnVpbGRGcmFnbWVudDogZnVuY3Rpb24oIGVsZW1zLCBjb250ZXh0LCBzY3JpcHRzLCBzZWxlY3Rpb24gKSB7XG5cdFx0dmFyIGVsZW0sIHRtcCwgdGFnLCB3cmFwLCBjb250YWlucywgaixcblx0XHRcdGZyYWdtZW50ID0gY29udGV4dC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCksXG5cdFx0XHRub2RlcyA9IFtdLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsID0gZWxlbXMubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0ZWxlbSA9IGVsZW1zWyBpIF07XG5cblx0XHRcdGlmICggZWxlbSB8fCBlbGVtID09PSAwICkge1xuXG5cdFx0XHRcdC8vIEFkZCBub2RlcyBkaXJlY3RseVxuXHRcdFx0XHRpZiAoIGpRdWVyeS50eXBlKCBlbGVtICkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogUXRXZWJLaXQsIFBoYW50b21KU1xuXHRcdFx0XHRcdC8vIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Mgb24gYW5jaWVudCBXZWJLaXRcblx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIG5vZGVzLCBlbGVtLm5vZGVUeXBlID8gWyBlbGVtIF0gOiBlbGVtICk7XG5cblx0XHRcdFx0Ly8gQ29udmVydCBub24taHRtbCBpbnRvIGEgdGV4dCBub2RlXG5cdFx0XHRcdH0gZWxzZSBpZiAoICFyaHRtbC50ZXN0KCBlbGVtICkgKSB7XG5cdFx0XHRcdFx0bm9kZXMucHVzaCggY29udGV4dC5jcmVhdGVUZXh0Tm9kZSggZWxlbSApICk7XG5cblx0XHRcdFx0Ly8gQ29udmVydCBodG1sIGludG8gRE9NIG5vZGVzXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dG1wID0gdG1wIHx8IGZyYWdtZW50LmFwcGVuZENoaWxkKCBjb250ZXh0LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIikgKTtcblxuXHRcdFx0XHRcdC8vIERlc2VyaWFsaXplIGEgc3RhbmRhcmQgcmVwcmVzZW50YXRpb25cblx0XHRcdFx0XHR0YWcgPSAoIHJ0YWdOYW1lLmV4ZWMoIGVsZW0gKSB8fCBbIFwiXCIsIFwiXCIgXSApWyAxIF0udG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHR3cmFwID0gd3JhcE1hcFsgdGFnIF0gfHwgd3JhcE1hcC5fZGVmYXVsdDtcblx0XHRcdFx0XHR0bXAuaW5uZXJIVE1MID0gd3JhcFsgMSBdICsgZWxlbS5yZXBsYWNlKCByeGh0bWxUYWcsIFwiPCQxPjwvJDI+XCIgKSArIHdyYXBbIDIgXTtcblxuXHRcdFx0XHRcdC8vIERlc2NlbmQgdGhyb3VnaCB3cmFwcGVycyB0byB0aGUgcmlnaHQgY29udGVudFxuXHRcdFx0XHRcdGogPSB3cmFwWyAwIF07XG5cdFx0XHRcdFx0d2hpbGUgKCBqLS0gKSB7XG5cdFx0XHRcdFx0XHR0bXAgPSB0bXAubGFzdENoaWxkO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFF0V2ViS2l0LCBQaGFudG9tSlNcblx0XHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBub2RlcywgdG1wLmNoaWxkTm9kZXMgKTtcblxuXHRcdFx0XHRcdC8vIFJlbWVtYmVyIHRoZSB0b3AtbGV2ZWwgY29udGFpbmVyXG5cdFx0XHRcdFx0dG1wID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuXHRcdFx0XHRcdC8vIEVuc3VyZSB0aGUgY3JlYXRlZCBub2RlcyBhcmUgb3JwaGFuZWQgKCMxMjM5Milcblx0XHRcdFx0XHR0bXAudGV4dENvbnRlbnQgPSBcIlwiO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUmVtb3ZlIHdyYXBwZXIgZnJvbSBmcmFnbWVudFxuXHRcdGZyYWdtZW50LnRleHRDb250ZW50ID0gXCJcIjtcblxuXHRcdGkgPSAwO1xuXHRcdHdoaWxlICggKGVsZW0gPSBub2Rlc1sgaSsrIF0pICkge1xuXG5cdFx0XHQvLyAjNDA4NyAtIElmIG9yaWdpbiBhbmQgZGVzdGluYXRpb24gZWxlbWVudHMgYXJlIHRoZSBzYW1lLCBhbmQgdGhpcyBpc1xuXHRcdFx0Ly8gdGhhdCBlbGVtZW50LCBkbyBub3QgZG8gYW55dGhpbmdcblx0XHRcdGlmICggc2VsZWN0aW9uICYmIGpRdWVyeS5pbkFycmF5KCBlbGVtLCBzZWxlY3Rpb24gKSAhPT0gLTEgKSB7XG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0fVxuXG5cdFx0XHRjb250YWlucyA9IGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICk7XG5cblx0XHRcdC8vIEFwcGVuZCB0byBmcmFnbWVudFxuXHRcdFx0dG1wID0gZ2V0QWxsKCBmcmFnbWVudC5hcHBlbmRDaGlsZCggZWxlbSApLCBcInNjcmlwdFwiICk7XG5cblx0XHRcdC8vIFByZXNlcnZlIHNjcmlwdCBldmFsdWF0aW9uIGhpc3Rvcnlcblx0XHRcdGlmICggY29udGFpbnMgKSB7XG5cdFx0XHRcdHNldEdsb2JhbEV2YWwoIHRtcCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDYXB0dXJlIGV4ZWN1dGFibGVzXG5cdFx0XHRpZiAoIHNjcmlwdHMgKSB7XG5cdFx0XHRcdGogPSAwO1xuXHRcdFx0XHR3aGlsZSAoIChlbGVtID0gdG1wWyBqKysgXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCByc2NyaXB0VHlwZS50ZXN0KCBlbGVtLnR5cGUgfHwgXCJcIiApICkge1xuXHRcdFx0XHRcdFx0c2NyaXB0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZyYWdtZW50O1xuXHR9LFxuXG5cdGNsZWFuRGF0YTogZnVuY3Rpb24oIGVsZW1zICkge1xuXHRcdHZhciBkYXRhLCBlbGVtLCB0eXBlLCBrZXksXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWwsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKGVsZW0gPSBlbGVtc1sgaSBdKSAhPT0gdW5kZWZpbmVkOyBpKysgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5hY2NlcHREYXRhKCBlbGVtICkgKSB7XG5cdFx0XHRcdGtleSA9IGVsZW1bIGRhdGFfcHJpdi5leHBhbmRvIF07XG5cblx0XHRcdFx0aWYgKCBrZXkgJiYgKGRhdGEgPSBkYXRhX3ByaXYuY2FjaGVbIGtleSBdKSApIHtcblx0XHRcdFx0XHRpZiAoIGRhdGEuZXZlbnRzICkge1xuXHRcdFx0XHRcdFx0Zm9yICggdHlwZSBpbiBkYXRhLmV2ZW50cyApIHtcblx0XHRcdFx0XHRcdFx0aWYgKCBzcGVjaWFsWyB0eXBlIF0gKSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnJlbW92ZSggZWxlbSwgdHlwZSApO1xuXG5cdFx0XHRcdFx0XHRcdC8vIFRoaXMgaXMgYSBzaG9ydGN1dCB0byBhdm9pZCBqUXVlcnkuZXZlbnQucmVtb3ZlJ3Mgb3ZlcmhlYWRcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkucmVtb3ZlRXZlbnQoIGVsZW0sIHR5cGUsIGRhdGEuaGFuZGxlICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBkYXRhX3ByaXYuY2FjaGVbIGtleSBdICkge1xuXHRcdFx0XHRcdFx0Ly8gRGlzY2FyZCBhbnkgcmVtYWluaW5nIGBwcml2YXRlYCBkYXRhXG5cdFx0XHRcdFx0XHRkZWxldGUgZGF0YV9wcml2LmNhY2hlWyBrZXkgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdC8vIERpc2NhcmQgYW55IHJlbWFpbmluZyBgdXNlcmAgZGF0YVxuXHRcdFx0ZGVsZXRlIGRhdGFfdXNlci5jYWNoZVsgZWxlbVsgZGF0YV91c2VyLmV4cGFuZG8gXSBdO1xuXHRcdH1cblx0fVxufSk7XG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHR0ZXh0OiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRqUXVlcnkudGV4dCggdGhpcyApIDpcblx0XHRcdFx0dGhpcy5lbXB0eSgpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdFx0XHR0aGlzLnRleHRDb250ZW50ID0gdmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KTtcblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9LFxuXG5cdGFwcGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tTWFuaXAoIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9IG1hbmlwdWxhdGlvblRhcmdldCggdGhpcywgZWxlbSApO1xuXHRcdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblxuXHRwcmVwZW5kOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5kb21NYW5pcCggYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHR2YXIgdGFyZ2V0ID0gbWFuaXB1bGF0aW9uVGFyZ2V0KCB0aGlzLCBlbGVtICk7XG5cdFx0XHRcdHRhcmdldC5pbnNlcnRCZWZvcmUoIGVsZW0sIHRhcmdldC5maXJzdENoaWxkICk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0YmVmb3JlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5kb21NYW5pcCggYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzICk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0YWZ0ZXI6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmRvbU1hbmlwKCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHRoaXMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoIGVsZW0sIHRoaXMubmV4dFNpYmxpbmcgKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblxuXHRyZW1vdmU6IGZ1bmN0aW9uKCBzZWxlY3Rvciwga2VlcERhdGEgLyogSW50ZXJuYWwgVXNlIE9ubHkgKi8gKSB7XG5cdFx0dmFyIGVsZW0sXG5cdFx0XHRlbGVtcyA9IHNlbGVjdG9yID8galF1ZXJ5LmZpbHRlciggc2VsZWN0b3IsIHRoaXMgKSA6IHRoaXMsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKGVsZW0gPSBlbGVtc1tpXSkgIT0gbnVsbDsgaSsrICkge1xuXHRcdFx0aWYgKCAha2VlcERhdGEgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtICkgKTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdGlmICgga2VlcERhdGEgJiYgalF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKSApIHtcblx0XHRcdFx0XHRzZXRHbG9iYWxFdmFsKCBnZXRBbGwoIGVsZW0sIFwic2NyaXB0XCIgKSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdGVsZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggZWxlbSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZWxlbSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyAoZWxlbSA9IHRoaXNbaV0pICE9IG51bGw7IGkrKyApIHtcblx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblxuXHRcdFx0XHQvLyBQcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIGVsZW0sIGZhbHNlICkgKTtcblxuXHRcdFx0XHQvLyBSZW1vdmUgYW55IHJlbWFpbmluZyBub2Rlc1xuXHRcdFx0XHRlbGVtLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRjbG9uZTogZnVuY3Rpb24oIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICkge1xuXHRcdGRhdGFBbmRFdmVudHMgPSBkYXRhQW5kRXZlbnRzID09IG51bGwgPyBmYWxzZSA6IGRhdGFBbmRFdmVudHM7XG5cdFx0ZGVlcERhdGFBbmRFdmVudHMgPSBkZWVwRGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZGF0YUFuZEV2ZW50cyA6IGRlZXBEYXRhQW5kRXZlbnRzO1xuXG5cdFx0cmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5jbG9uZSggdGhpcywgZGF0YUFuZEV2ZW50cywgZGVlcERhdGFBbmRFdmVudHMgKTtcblx0XHR9KTtcblx0fSxcblxuXHRodG1sOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGVsZW0gPSB0aGlzWyAwIF0gfHwge30sXG5cdFx0XHRcdGkgPSAwLFxuXHRcdFx0XHRsID0gdGhpcy5sZW5ndGg7XG5cblx0XHRcdGlmICggdmFsdWUgPT09IHVuZGVmaW5lZCAmJiBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5pbm5lckhUTUw7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNlZSBpZiB3ZSBjYW4gdGFrZSBhIHNob3J0Y3V0IGFuZCBqdXN0IHVzZSBpbm5lckhUTUxcblx0XHRcdGlmICggdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmICFybm9Jbm5lcmh0bWwudGVzdCggdmFsdWUgKSAmJlxuXHRcdFx0XHQhd3JhcE1hcFsgKCBydGFnTmFtZS5leGVjKCB2YWx1ZSApIHx8IFsgXCJcIiwgXCJcIiBdIClbIDEgXS50b0xvd2VyQ2FzZSgpIF0gKSB7XG5cblx0XHRcdFx0dmFsdWUgPSB2YWx1ZS5yZXBsYWNlKCByeGh0bWxUYWcsIFwiPCQxPjwvJDI+XCIgKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRcdGVsZW0gPSB0aGlzWyBpIF0gfHwge307XG5cblx0XHRcdFx0XHRcdC8vIFJlbW92ZSBlbGVtZW50IG5vZGVzIGFuZCBwcmV2ZW50IG1lbW9yeSBsZWFrc1xuXHRcdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIGVsZW0sIGZhbHNlICkgKTtcblx0XHRcdFx0XHRcdFx0ZWxlbS5pbm5lckhUTUwgPSB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRlbGVtID0gMDtcblxuXHRcdFx0XHQvLyBJZiB1c2luZyBpbm5lckhUTUwgdGhyb3dzIGFuIGV4Y2VwdGlvbiwgdXNlIHRoZSBmYWxsYmFjayBtZXRob2Rcblx0XHRcdFx0fSBjYXRjaCggZSApIHt9XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZWxlbSApIHtcblx0XHRcdFx0dGhpcy5lbXB0eSgpLmFwcGVuZCggdmFsdWUgKTtcblx0XHRcdH1cblx0XHR9LCBudWxsLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCApO1xuXHR9LFxuXG5cdHJlcGxhY2VXaXRoOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgYXJnID0gYXJndW1lbnRzWyAwIF07XG5cblx0XHQvLyBNYWtlIHRoZSBjaGFuZ2VzLCByZXBsYWNpbmcgZWFjaCBjb250ZXh0IGVsZW1lbnQgd2l0aCB0aGUgbmV3IGNvbnRlbnRcblx0XHR0aGlzLmRvbU1hbmlwKCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0YXJnID0gdGhpcy5wYXJlbnROb2RlO1xuXG5cdFx0XHRqUXVlcnkuY2xlYW5EYXRhKCBnZXRBbGwoIHRoaXMgKSApO1xuXG5cdFx0XHRpZiAoIGFyZyApIHtcblx0XHRcdFx0YXJnLnJlcGxhY2VDaGlsZCggZWxlbSwgdGhpcyApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0Ly8gRm9yY2UgcmVtb3ZhbCBpZiB0aGVyZSB3YXMgbm8gbmV3IGNvbnRlbnQgKGUuZy4sIGZyb20gZW1wdHkgYXJndW1lbnRzKVxuXHRcdHJldHVybiBhcmcgJiYgKGFyZy5sZW5ndGggfHwgYXJnLm5vZGVUeXBlKSA/IHRoaXMgOiB0aGlzLnJlbW92ZSgpO1xuXHR9LFxuXG5cdGRldGFjaDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLnJlbW92ZSggc2VsZWN0b3IsIHRydWUgKTtcblx0fSxcblxuXHRkb21NYW5pcDogZnVuY3Rpb24oIGFyZ3MsIGNhbGxiYWNrICkge1xuXG5cdFx0Ly8gRmxhdHRlbiBhbnkgbmVzdGVkIGFycmF5c1xuXHRcdGFyZ3MgPSBjb25jYXQuYXBwbHkoIFtdLCBhcmdzICk7XG5cblx0XHR2YXIgZnJhZ21lbnQsIGZpcnN0LCBzY3JpcHRzLCBoYXNTY3JpcHRzLCBub2RlLCBkb2MsXG5cdFx0XHRpID0gMCxcblx0XHRcdGwgPSB0aGlzLmxlbmd0aCxcblx0XHRcdHNldCA9IHRoaXMsXG5cdFx0XHRpTm9DbG9uZSA9IGwgLSAxLFxuXHRcdFx0dmFsdWUgPSBhcmdzWyAwIF0sXG5cdFx0XHRpc0Z1bmN0aW9uID0galF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlICk7XG5cblx0XHQvLyBXZSBjYW4ndCBjbG9uZU5vZGUgZnJhZ21lbnRzIHRoYXQgY29udGFpbiBjaGVja2VkLCBpbiBXZWJLaXRcblx0XHRpZiAoIGlzRnVuY3Rpb24gfHxcblx0XHRcdFx0KCBsID4gMSAmJiB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiZcblx0XHRcdFx0XHQhc3VwcG9ydC5jaGVja0Nsb25lICYmIHJjaGVja2VkLnRlc3QoIHZhbHVlICkgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oIGluZGV4ICkge1xuXHRcdFx0XHR2YXIgc2VsZiA9IHNldC5lcSggaW5kZXggKTtcblx0XHRcdFx0aWYgKCBpc0Z1bmN0aW9uICkge1xuXHRcdFx0XHRcdGFyZ3NbIDAgXSA9IHZhbHVlLmNhbGwoIHRoaXMsIGluZGV4LCBzZWxmLmh0bWwoKSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHNlbGYuZG9tTWFuaXAoIGFyZ3MsIGNhbGxiYWNrICk7XG5cdFx0XHR9KTtcblx0XHR9XG5cblx0XHRpZiAoIGwgKSB7XG5cdFx0XHRmcmFnbWVudCA9IGpRdWVyeS5idWlsZEZyYWdtZW50KCBhcmdzLCB0aGlzWyAwIF0ub3duZXJEb2N1bWVudCwgZmFsc2UsIHRoaXMgKTtcblx0XHRcdGZpcnN0ID0gZnJhZ21lbnQuZmlyc3RDaGlsZDtcblxuXHRcdFx0aWYgKCBmcmFnbWVudC5jaGlsZE5vZGVzLmxlbmd0aCA9PT0gMSApIHtcblx0XHRcdFx0ZnJhZ21lbnQgPSBmaXJzdDtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBmaXJzdCApIHtcblx0XHRcdFx0c2NyaXB0cyA9IGpRdWVyeS5tYXAoIGdldEFsbCggZnJhZ21lbnQsIFwic2NyaXB0XCIgKSwgZGlzYWJsZVNjcmlwdCApO1xuXHRcdFx0XHRoYXNTY3JpcHRzID0gc2NyaXB0cy5sZW5ndGg7XG5cblx0XHRcdFx0Ly8gVXNlIHRoZSBvcmlnaW5hbCBmcmFnbWVudCBmb3IgdGhlIGxhc3QgaXRlbSBpbnN0ZWFkIG9mIHRoZSBmaXJzdCBiZWNhdXNlIGl0IGNhbiBlbmQgdXBcblx0XHRcdFx0Ly8gYmVpbmcgZW1wdGllZCBpbmNvcnJlY3RseSBpbiBjZXJ0YWluIHNpdHVhdGlvbnMgKCM4MDcwKS5cblx0XHRcdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRcdG5vZGUgPSBmcmFnbWVudDtcblxuXHRcdFx0XHRcdGlmICggaSAhPT0gaU5vQ2xvbmUgKSB7XG5cdFx0XHRcdFx0XHRub2RlID0galF1ZXJ5LmNsb25lKCBub2RlLCB0cnVlLCB0cnVlICk7XG5cblx0XHRcdFx0XHRcdC8vIEtlZXAgcmVmZXJlbmNlcyB0byBjbG9uZWQgc2NyaXB0cyBmb3IgbGF0ZXIgcmVzdG9yYXRpb25cblx0XHRcdFx0XHRcdGlmICggaGFzU2NyaXB0cyApIHtcblx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogUXRXZWJLaXRcblx0XHRcdFx0XHRcdFx0Ly8galF1ZXJ5Lm1lcmdlIGJlY2F1c2UgcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93c1xuXHRcdFx0XHRcdFx0XHRqUXVlcnkubWVyZ2UoIHNjcmlwdHMsIGdldEFsbCggbm9kZSwgXCJzY3JpcHRcIiApICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Y2FsbGJhY2suY2FsbCggdGhpc1sgaSBdLCBub2RlLCBpICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XG5cdFx0XHRcdFx0ZG9jID0gc2NyaXB0c1sgc2NyaXB0cy5sZW5ndGggLSAxIF0ub3duZXJEb2N1bWVudDtcblxuXHRcdFx0XHRcdC8vIFJlZW5hYmxlIHNjcmlwdHNcblx0XHRcdFx0XHRqUXVlcnkubWFwKCBzY3JpcHRzLCByZXN0b3JlU2NyaXB0ICk7XG5cblx0XHRcdFx0XHQvLyBFdmFsdWF0ZSBleGVjdXRhYmxlIHNjcmlwdHMgb24gZmlyc3QgZG9jdW1lbnQgaW5zZXJ0aW9uXG5cdFx0XHRcdFx0Zm9yICggaSA9IDA7IGkgPCBoYXNTY3JpcHRzOyBpKysgKSB7XG5cdFx0XHRcdFx0XHRub2RlID0gc2NyaXB0c1sgaSBdO1xuXHRcdFx0XHRcdFx0aWYgKCByc2NyaXB0VHlwZS50ZXN0KCBub2RlLnR5cGUgfHwgXCJcIiApICYmXG5cdFx0XHRcdFx0XHRcdCFkYXRhX3ByaXYuYWNjZXNzKCBub2RlLCBcImdsb2JhbEV2YWxcIiApICYmIGpRdWVyeS5jb250YWlucyggZG9jLCBub2RlICkgKSB7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCBub2RlLnNyYyApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBPcHRpb25hbCBBSkFYIGRlcGVuZGVuY3ksIGJ1dCB3b24ndCBydW4gc2NyaXB0cyBpZiBub3QgcHJlc2VudFxuXHRcdFx0XHRcdFx0XHRcdGlmICggalF1ZXJ5Ll9ldmFsVXJsICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0alF1ZXJ5Ll9ldmFsVXJsKCBub2RlLnNyYyApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRqUXVlcnkuZ2xvYmFsRXZhbCggbm9kZS50ZXh0Q29udGVudC5yZXBsYWNlKCByY2xlYW5TY3JpcHQsIFwiXCIgKSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cbn0pO1xuXG5qUXVlcnkuZWFjaCh7XG5cdGFwcGVuZFRvOiBcImFwcGVuZFwiLFxuXHRwcmVwZW5kVG86IFwicHJlcGVuZFwiLFxuXHRpbnNlcnRCZWZvcmU6IFwiYmVmb3JlXCIsXG5cdGluc2VydEFmdGVyOiBcImFmdGVyXCIsXG5cdHJlcGxhY2VBbGw6IFwicmVwbGFjZVdpdGhcIlxufSwgZnVuY3Rpb24oIG5hbWUsIG9yaWdpbmFsICkge1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgZWxlbXMsXG5cdFx0XHRyZXQgPSBbXSxcblx0XHRcdGluc2VydCA9IGpRdWVyeSggc2VsZWN0b3IgKSxcblx0XHRcdGxhc3QgPSBpbnNlcnQubGVuZ3RoIC0gMSxcblx0XHRcdGkgPSAwO1xuXG5cdFx0Zm9yICggOyBpIDw9IGxhc3Q7IGkrKyApIHtcblx0XHRcdGVsZW1zID0gaSA9PT0gbGFzdCA/IHRoaXMgOiB0aGlzLmNsb25lKCB0cnVlICk7XG5cdFx0XHRqUXVlcnkoIGluc2VydFsgaSBdIClbIG9yaWdpbmFsIF0oIGVsZW1zICk7XG5cblx0XHRcdC8vIFN1cHBvcnQ6IFF0V2ViS2l0XG5cdFx0XHQvLyAuZ2V0KCkgYmVjYXVzZSBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzXG5cdFx0XHRwdXNoLmFwcGx5KCByZXQsIGVsZW1zLmdldCgpICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCByZXQgKTtcblx0fTtcbn0pO1xuXG5cbnZhciBpZnJhbWUsXG5cdGVsZW1kaXNwbGF5ID0ge307XG5cbi8qKlxuICogUmV0cmlldmUgdGhlIGFjdHVhbCBkaXNwbGF5IG9mIGEgZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5hbWUgbm9kZU5hbWUgb2YgdGhlIGVsZW1lbnRcbiAqIEBwYXJhbSB7T2JqZWN0fSBkb2MgRG9jdW1lbnQgb2JqZWN0XG4gKi9cbi8vIENhbGxlZCBvbmx5IGZyb20gd2l0aGluIGRlZmF1bHREaXNwbGF5XG5mdW5jdGlvbiBhY3R1YWxEaXNwbGF5KCBuYW1lLCBkb2MgKSB7XG5cdHZhciBzdHlsZSxcblx0XHRlbGVtID0galF1ZXJ5KCBkb2MuY3JlYXRlRWxlbWVudCggbmFtZSApICkuYXBwZW5kVG8oIGRvYy5ib2R5ICksXG5cblx0XHQvLyBnZXREZWZhdWx0Q29tcHV0ZWRTdHlsZSBtaWdodCBiZSByZWxpYWJseSB1c2VkIG9ubHkgb24gYXR0YWNoZWQgZWxlbWVudFxuXHRcdGRpc3BsYXkgPSB3aW5kb3cuZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUgJiYgKCBzdHlsZSA9IHdpbmRvdy5nZXREZWZhdWx0Q29tcHV0ZWRTdHlsZSggZWxlbVsgMCBdICkgKSA/XG5cblx0XHRcdC8vIFVzZSBvZiB0aGlzIG1ldGhvZCBpcyBhIHRlbXBvcmFyeSBmaXggKG1vcmUgbGlrZSBvcHRpbWl6YXRpb24pIHVudGlsIHNvbWV0aGluZyBiZXR0ZXIgY29tZXMgYWxvbmcsXG5cdFx0XHQvLyBzaW5jZSBpdCB3YXMgcmVtb3ZlZCBmcm9tIHNwZWNpZmljYXRpb24gYW5kIHN1cHBvcnRlZCBvbmx5IGluIEZGXG5cdFx0XHRzdHlsZS5kaXNwbGF5IDogalF1ZXJ5LmNzcyggZWxlbVsgMCBdLCBcImRpc3BsYXlcIiApO1xuXG5cdC8vIFdlIGRvbid0IGhhdmUgYW55IGRhdGEgc3RvcmVkIG9uIHRoZSBlbGVtZW50LFxuXHQvLyBzbyB1c2UgXCJkZXRhY2hcIiBtZXRob2QgYXMgZmFzdCB3YXkgdG8gZ2V0IHJpZCBvZiB0aGUgZWxlbWVudFxuXHRlbGVtLmRldGFjaCgpO1xuXG5cdHJldHVybiBkaXNwbGF5O1xufVxuXG4vKipcbiAqIFRyeSB0byBkZXRlcm1pbmUgdGhlIGRlZmF1bHQgZGlzcGxheSB2YWx1ZSBvZiBhbiBlbGVtZW50XG4gKiBAcGFyYW0ge1N0cmluZ30gbm9kZU5hbWVcbiAqL1xuZnVuY3Rpb24gZGVmYXVsdERpc3BsYXkoIG5vZGVOYW1lICkge1xuXHR2YXIgZG9jID0gZG9jdW1lbnQsXG5cdFx0ZGlzcGxheSA9IGVsZW1kaXNwbGF5WyBub2RlTmFtZSBdO1xuXG5cdGlmICggIWRpc3BsYXkgKSB7XG5cdFx0ZGlzcGxheSA9IGFjdHVhbERpc3BsYXkoIG5vZGVOYW1lLCBkb2MgKTtcblxuXHRcdC8vIElmIHRoZSBzaW1wbGUgd2F5IGZhaWxzLCByZWFkIGZyb20gaW5zaWRlIGFuIGlmcmFtZVxuXHRcdGlmICggZGlzcGxheSA9PT0gXCJub25lXCIgfHwgIWRpc3BsYXkgKSB7XG5cblx0XHRcdC8vIFVzZSB0aGUgYWxyZWFkeS1jcmVhdGVkIGlmcmFtZSBpZiBwb3NzaWJsZVxuXHRcdFx0aWZyYW1lID0gKGlmcmFtZSB8fCBqUXVlcnkoIFwiPGlmcmFtZSBmcmFtZWJvcmRlcj0nMCcgd2lkdGg9JzAnIGhlaWdodD0nMCcvPlwiICkpLmFwcGVuZFRvKCBkb2MuZG9jdW1lbnRFbGVtZW50ICk7XG5cblx0XHRcdC8vIEFsd2F5cyB3cml0ZSBhIG5ldyBIVE1MIHNrZWxldG9uIHNvIFdlYmtpdCBhbmQgRmlyZWZveCBkb24ndCBjaG9rZSBvbiByZXVzZVxuXHRcdFx0ZG9jID0gaWZyYW1lWyAwIF0uY29udGVudERvY3VtZW50O1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRVxuXHRcdFx0ZG9jLndyaXRlKCk7XG5cdFx0XHRkb2MuY2xvc2UoKTtcblxuXHRcdFx0ZGlzcGxheSA9IGFjdHVhbERpc3BsYXkoIG5vZGVOYW1lLCBkb2MgKTtcblx0XHRcdGlmcmFtZS5kZXRhY2goKTtcblx0XHR9XG5cblx0XHQvLyBTdG9yZSB0aGUgY29ycmVjdCBkZWZhdWx0IGRpc3BsYXlcblx0XHRlbGVtZGlzcGxheVsgbm9kZU5hbWUgXSA9IGRpc3BsYXk7XG5cdH1cblxuXHRyZXR1cm4gZGlzcGxheTtcbn1cbnZhciBybWFyZ2luID0gKC9ebWFyZ2luLyk7XG5cbnZhciBybnVtbm9ucHggPSBuZXcgUmVnRXhwKCBcIl4oXCIgKyBwbnVtICsgXCIpKD8hcHgpW2EteiVdKyRcIiwgXCJpXCIgKTtcblxudmFyIGdldFN0eWxlcyA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdC8vIFN1cHBvcnQ6IElFPD0xMSssIEZpcmVmb3g8PTMwKyAoIzE1MDk4LCAjMTQxNTApXG5cdFx0Ly8gSUUgdGhyb3dzIG9uIGVsZW1lbnRzIGNyZWF0ZWQgaW4gcG9wdXBzXG5cdFx0Ly8gRkYgbWVhbndoaWxlIHRocm93cyBvbiBmcmFtZSBlbGVtZW50cyB0aHJvdWdoIFwiZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZVwiXG5cdFx0aWYgKCBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcub3BlbmVyICkge1xuXHRcdFx0cmV0dXJuIGVsZW0ub3duZXJEb2N1bWVudC5kZWZhdWx0Vmlldy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtLCBudWxsICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBlbGVtLCBudWxsICk7XG5cdH07XG5cblxuXG5mdW5jdGlvbiBjdXJDU1MoIGVsZW0sIG5hbWUsIGNvbXB1dGVkICkge1xuXHR2YXIgd2lkdGgsIG1pbldpZHRoLCBtYXhXaWR0aCwgcmV0LFxuXHRcdHN0eWxlID0gZWxlbS5zdHlsZTtcblxuXHRjb21wdXRlZCA9IGNvbXB1dGVkIHx8IGdldFN0eWxlcyggZWxlbSApO1xuXG5cdC8vIFN1cHBvcnQ6IElFOVxuXHQvLyBnZXRQcm9wZXJ0eVZhbHVlIGlzIG9ubHkgbmVlZGVkIGZvciAuY3NzKCdmaWx0ZXInKSAoIzEyNTM3KVxuXHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdHJldCA9IGNvbXB1dGVkLmdldFByb3BlcnR5VmFsdWUoIG5hbWUgKSB8fCBjb21wdXRlZFsgbmFtZSBdO1xuXHR9XG5cblx0aWYgKCBjb21wdXRlZCApIHtcblxuXHRcdGlmICggcmV0ID09PSBcIlwiICYmICFqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApICkge1xuXHRcdFx0cmV0ID0galF1ZXJ5LnN0eWxlKCBlbGVtLCBuYW1lICk7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogaU9TIDwgNlxuXHRcdC8vIEEgdHJpYnV0ZSB0byB0aGUgXCJhd2Vzb21lIGhhY2sgYnkgRGVhbiBFZHdhcmRzXCJcblx0XHQvLyBpT1MgPCA2IChhdCBsZWFzdCkgcmV0dXJucyBwZXJjZW50YWdlIGZvciBhIGxhcmdlciBzZXQgb2YgdmFsdWVzLCBidXQgd2lkdGggc2VlbXMgdG8gYmUgcmVsaWFibHkgcGl4ZWxzXG5cdFx0Ly8gdGhpcyBpcyBhZ2FpbnN0IHRoZSBDU1NPTSBkcmFmdCBzcGVjOiBodHRwOi8vZGV2LnczLm9yZy9jc3N3Zy9jc3NvbS8jcmVzb2x2ZWQtdmFsdWVzXG5cdFx0aWYgKCBybnVtbm9ucHgudGVzdCggcmV0ICkgJiYgcm1hcmdpbi50ZXN0KCBuYW1lICkgKSB7XG5cblx0XHRcdC8vIFJlbWVtYmVyIHRoZSBvcmlnaW5hbCB2YWx1ZXNcblx0XHRcdHdpZHRoID0gc3R5bGUud2lkdGg7XG5cdFx0XHRtaW5XaWR0aCA9IHN0eWxlLm1pbldpZHRoO1xuXHRcdFx0bWF4V2lkdGggPSBzdHlsZS5tYXhXaWR0aDtcblxuXHRcdFx0Ly8gUHV0IGluIHRoZSBuZXcgdmFsdWVzIHRvIGdldCBhIGNvbXB1dGVkIHZhbHVlIG91dFxuXHRcdFx0c3R5bGUubWluV2lkdGggPSBzdHlsZS5tYXhXaWR0aCA9IHN0eWxlLndpZHRoID0gcmV0O1xuXHRcdFx0cmV0ID0gY29tcHV0ZWQud2lkdGg7XG5cblx0XHRcdC8vIFJldmVydCB0aGUgY2hhbmdlZCB2YWx1ZXNcblx0XHRcdHN0eWxlLndpZHRoID0gd2lkdGg7XG5cdFx0XHRzdHlsZS5taW5XaWR0aCA9IG1pbldpZHRoO1xuXHRcdFx0c3R5bGUubWF4V2lkdGggPSBtYXhXaWR0aDtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gcmV0ICE9PSB1bmRlZmluZWQgP1xuXHRcdC8vIFN1cHBvcnQ6IElFXG5cdFx0Ly8gSUUgcmV0dXJucyB6SW5kZXggdmFsdWUgYXMgYW4gaW50ZWdlci5cblx0XHRyZXQgKyBcIlwiIDpcblx0XHRyZXQ7XG59XG5cblxuZnVuY3Rpb24gYWRkR2V0SG9va0lmKCBjb25kaXRpb25GbiwgaG9va0ZuICkge1xuXHQvLyBEZWZpbmUgdGhlIGhvb2ssIHdlJ2xsIGNoZWNrIG9uIHRoZSBmaXJzdCBydW4gaWYgaXQncyByZWFsbHkgbmVlZGVkLlxuXHRyZXR1cm4ge1xuXHRcdGdldDogZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIGNvbmRpdGlvbkZuKCkgKSB7XG5cdFx0XHRcdC8vIEhvb2sgbm90IG5lZWRlZCAob3IgaXQncyBub3QgcG9zc2libGUgdG8gdXNlIGl0IGR1ZVxuXHRcdFx0XHQvLyB0byBtaXNzaW5nIGRlcGVuZGVuY3kpLCByZW1vdmUgaXQuXG5cdFx0XHRcdGRlbGV0ZSB0aGlzLmdldDtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBIb29rIG5lZWRlZDsgcmVkZWZpbmUgaXQgc28gdGhhdCB0aGUgc3VwcG9ydCB0ZXN0IGlzIG5vdCBleGVjdXRlZCBhZ2Fpbi5cblx0XHRcdHJldHVybiAodGhpcy5nZXQgPSBob29rRm4pLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHR9XG5cdH07XG59XG5cblxuKGZ1bmN0aW9uKCkge1xuXHR2YXIgcGl4ZWxQb3NpdGlvblZhbCwgYm94U2l6aW5nUmVsaWFibGVWYWwsXG5cdFx0ZG9jRWxlbSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCxcblx0XHRjb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImRpdlwiICksXG5cdFx0ZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApO1xuXG5cdGlmICggIWRpdi5zdHlsZSApIHtcblx0XHRyZXR1cm47XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBJRTktMTErXG5cdC8vIFN0eWxlIG9mIGNsb25lZCBlbGVtZW50IGFmZmVjdHMgc291cmNlIGVsZW1lbnQgY2xvbmVkICgjODkwOClcblx0ZGl2LnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJjb250ZW50LWJveFwiO1xuXHRkaXYuY2xvbmVOb2RlKCB0cnVlICkuc3R5bGUuYmFja2dyb3VuZENsaXAgPSBcIlwiO1xuXHRzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSA9IGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9PT0gXCJjb250ZW50LWJveFwiO1xuXG5cdGNvbnRhaW5lci5zdHlsZS5jc3NUZXh0ID0gXCJib3JkZXI6MDt3aWR0aDowO2hlaWdodDowO3RvcDowO2xlZnQ6LTk5OTlweDttYXJnaW4tdG9wOjFweDtcIiArXG5cdFx0XCJwb3NpdGlvbjphYnNvbHV0ZVwiO1xuXHRjb250YWluZXIuYXBwZW5kQ2hpbGQoIGRpdiApO1xuXG5cdC8vIEV4ZWN1dGluZyBib3RoIHBpeGVsUG9zaXRpb24gJiBib3hTaXppbmdSZWxpYWJsZSB0ZXN0cyByZXF1aXJlIG9ubHkgb25lIGxheW91dFxuXHQvLyBzbyB0aGV5J3JlIGV4ZWN1dGVkIGF0IHRoZSBzYW1lIHRpbWUgdG8gc2F2ZSB0aGUgc2Vjb25kIGNvbXB1dGF0aW9uLlxuXHRmdW5jdGlvbiBjb21wdXRlUGl4ZWxQb3NpdGlvbkFuZEJveFNpemluZ1JlbGlhYmxlKCkge1xuXHRcdGRpdi5zdHlsZS5jc3NUZXh0ID1cblx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3g8MjksIEFuZHJvaWQgMi4zXG5cdFx0XHQvLyBWZW5kb3ItcHJlZml4IGJveC1zaXppbmdcblx0XHRcdFwiLXdlYmtpdC1ib3gtc2l6aW5nOmJvcmRlci1ib3g7LW1vei1ib3gtc2l6aW5nOmJvcmRlci1ib3g7XCIgK1xuXHRcdFx0XCJib3gtc2l6aW5nOmJvcmRlci1ib3g7ZGlzcGxheTpibG9jazttYXJnaW4tdG9wOjElO3RvcDoxJTtcIiArXG5cdFx0XHRcImJvcmRlcjoxcHg7cGFkZGluZzoxcHg7d2lkdGg6NHB4O3Bvc2l0aW9uOmFic29sdXRlXCI7XG5cdFx0ZGl2LmlubmVySFRNTCA9IFwiXCI7XG5cdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZCggY29udGFpbmVyICk7XG5cblx0XHR2YXIgZGl2U3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZGl2LCBudWxsICk7XG5cdFx0cGl4ZWxQb3NpdGlvblZhbCA9IGRpdlN0eWxlLnRvcCAhPT0gXCIxJVwiO1xuXHRcdGJveFNpemluZ1JlbGlhYmxlVmFsID0gZGl2U3R5bGUud2lkdGggPT09IFwiNHB4XCI7XG5cblx0XHRkb2NFbGVtLnJlbW92ZUNoaWxkKCBjb250YWluZXIgKTtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IG5vZGUuanMganNkb21cblx0Ly8gRG9uJ3QgYXNzdW1lIHRoYXQgZ2V0Q29tcHV0ZWRTdHlsZSBpcyBhIHByb3BlcnR5IG9mIHRoZSBnbG9iYWwgb2JqZWN0XG5cdGlmICggd2luZG93LmdldENvbXB1dGVkU3R5bGUgKSB7XG5cdFx0alF1ZXJ5LmV4dGVuZCggc3VwcG9ydCwge1xuXHRcdFx0cGl4ZWxQb3NpdGlvbjogZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gVGhpcyB0ZXN0IGlzIGV4ZWN1dGVkIG9ubHkgb25jZSBidXQgd2Ugc3RpbGwgZG8gbWVtb2l6aW5nXG5cdFx0XHRcdC8vIHNpbmNlIHdlIGNhbiB1c2UgdGhlIGJveFNpemluZ1JlbGlhYmxlIHByZS1jb21wdXRpbmcuXG5cdFx0XHRcdC8vIE5vIG5lZWQgdG8gY2hlY2sgaWYgdGhlIHRlc3Qgd2FzIGFscmVhZHkgcGVyZm9ybWVkLCB0aG91Z2guXG5cdFx0XHRcdGNvbXB1dGVQaXhlbFBvc2l0aW9uQW5kQm94U2l6aW5nUmVsaWFibGUoKTtcblx0XHRcdFx0cmV0dXJuIHBpeGVsUG9zaXRpb25WYWw7XG5cdFx0XHR9LFxuXHRcdFx0Ym94U2l6aW5nUmVsaWFibGU6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGJveFNpemluZ1JlbGlhYmxlVmFsID09IG51bGwgKSB7XG5cdFx0XHRcdFx0Y29tcHV0ZVBpeGVsUG9zaXRpb25BbmRCb3hTaXppbmdSZWxpYWJsZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBib3hTaXppbmdSZWxpYWJsZVZhbDtcblx0XHRcdH0sXG5cdFx0XHRyZWxpYWJsZU1hcmdpblJpZ2h0OiBmdW5jdGlvbigpIHtcblxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDIuM1xuXHRcdFx0XHQvLyBDaGVjayBpZiBkaXYgd2l0aCBleHBsaWNpdCB3aWR0aCBhbmQgbm8gbWFyZ2luLXJpZ2h0IGluY29ycmVjdGx5XG5cdFx0XHRcdC8vIGdldHMgY29tcHV0ZWQgbWFyZ2luLXJpZ2h0IGJhc2VkIG9uIHdpZHRoIG9mIGNvbnRhaW5lci4gKCMzMzMzKVxuXHRcdFx0XHQvLyBXZWJLaXQgQnVnIDEzMzQzIC0gZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIHdyb25nIHZhbHVlIGZvciBtYXJnaW4tcmlnaHRcblx0XHRcdFx0Ly8gVGhpcyBzdXBwb3J0IGZ1bmN0aW9uIGlzIG9ubHkgZXhlY3V0ZWQgb25jZSBzbyBubyBtZW1vaXppbmcgaXMgbmVlZGVkLlxuXHRcdFx0XHR2YXIgcmV0LFxuXHRcdFx0XHRcdG1hcmdpbkRpdiA9IGRpdi5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApICk7XG5cblx0XHRcdFx0Ly8gUmVzZXQgQ1NTOiBib3gtc2l6aW5nOyBkaXNwbGF5OyBtYXJnaW47IGJvcmRlcjsgcGFkZGluZ1xuXHRcdFx0XHRtYXJnaW5EaXYuc3R5bGUuY3NzVGV4dCA9IGRpdi5zdHlsZS5jc3NUZXh0ID1cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94PDI5LCBBbmRyb2lkIDIuM1xuXHRcdFx0XHRcdC8vIFZlbmRvci1wcmVmaXggYm94LXNpemluZ1xuXHRcdFx0XHRcdFwiLXdlYmtpdC1ib3gtc2l6aW5nOmNvbnRlbnQtYm94Oy1tb3otYm94LXNpemluZzpjb250ZW50LWJveDtcIiArXG5cdFx0XHRcdFx0XCJib3gtc2l6aW5nOmNvbnRlbnQtYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luOjA7Ym9yZGVyOjA7cGFkZGluZzowXCI7XG5cdFx0XHRcdG1hcmdpbkRpdi5zdHlsZS5tYXJnaW5SaWdodCA9IG1hcmdpbkRpdi5zdHlsZS53aWR0aCA9IFwiMFwiO1xuXHRcdFx0XHRkaXYuc3R5bGUud2lkdGggPSBcIjFweFwiO1xuXHRcdFx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBjb250YWluZXIgKTtcblxuXHRcdFx0XHRyZXQgPSAhcGFyc2VGbG9hdCggd2luZG93LmdldENvbXB1dGVkU3R5bGUoIG1hcmdpbkRpdiwgbnVsbCApLm1hcmdpblJpZ2h0ICk7XG5cblx0XHRcdFx0ZG9jRWxlbS5yZW1vdmVDaGlsZCggY29udGFpbmVyICk7XG5cdFx0XHRcdGRpdi5yZW1vdmVDaGlsZCggbWFyZ2luRGl2ICk7XG5cblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSkoKTtcblxuXG4vLyBBIG1ldGhvZCBmb3IgcXVpY2tseSBzd2FwcGluZyBpbi9vdXQgQ1NTIHByb3BlcnRpZXMgdG8gZ2V0IGNvcnJlY3QgY2FsY3VsYXRpb25zLlxualF1ZXJ5LnN3YXAgPSBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgY2FsbGJhY2ssIGFyZ3MgKSB7XG5cdHZhciByZXQsIG5hbWUsXG5cdFx0b2xkID0ge307XG5cblx0Ly8gUmVtZW1iZXIgdGhlIG9sZCB2YWx1ZXMsIGFuZCBpbnNlcnQgdGhlIG5ldyBvbmVzXG5cdGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcblx0XHRvbGRbIG5hbWUgXSA9IGVsZW0uc3R5bGVbIG5hbWUgXTtcblx0XHRlbGVtLnN0eWxlWyBuYW1lIF0gPSBvcHRpb25zWyBuYW1lIF07XG5cdH1cblxuXHRyZXQgPSBjYWxsYmFjay5hcHBseSggZWxlbSwgYXJncyB8fCBbXSApO1xuXG5cdC8vIFJldmVydCB0aGUgb2xkIHZhbHVlc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb2xkWyBuYW1lIF07XG5cdH1cblxuXHRyZXR1cm4gcmV0O1xufTtcblxuXG52YXJcblx0Ly8gU3dhcHBhYmxlIGlmIGRpc3BsYXkgaXMgbm9uZSBvciBzdGFydHMgd2l0aCB0YWJsZSBleGNlcHQgXCJ0YWJsZVwiLCBcInRhYmxlLWNlbGxcIiwgb3IgXCJ0YWJsZS1jYXB0aW9uXCJcblx0Ly8gU2VlIGhlcmUgZm9yIGRpc3BsYXkgdmFsdWVzOiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL0NTUy9kaXNwbGF5XG5cdHJkaXNwbGF5c3dhcCA9IC9eKG5vbmV8dGFibGUoPyEtY1tlYV0pLispLyxcblx0cm51bXNwbGl0ID0gbmV3IFJlZ0V4cCggXCJeKFwiICsgcG51bSArIFwiKSguKikkXCIsIFwiaVwiICksXG5cdHJyZWxOdW0gPSBuZXcgUmVnRXhwKCBcIl4oWystXSk9KFwiICsgcG51bSArIFwiKVwiLCBcImlcIiApLFxuXG5cdGNzc1Nob3cgPSB7IHBvc2l0aW9uOiBcImFic29sdXRlXCIsIHZpc2liaWxpdHk6IFwiaGlkZGVuXCIsIGRpc3BsYXk6IFwiYmxvY2tcIiB9LFxuXHRjc3NOb3JtYWxUcmFuc2Zvcm0gPSB7XG5cdFx0bGV0dGVyU3BhY2luZzogXCIwXCIsXG5cdFx0Zm9udFdlaWdodDogXCI0MDBcIlxuXHR9LFxuXG5cdGNzc1ByZWZpeGVzID0gWyBcIldlYmtpdFwiLCBcIk9cIiwgXCJNb3pcIiwgXCJtc1wiIF07XG5cbi8vIFJldHVybiBhIGNzcyBwcm9wZXJ0eSBtYXBwZWQgdG8gYSBwb3RlbnRpYWxseSB2ZW5kb3IgcHJlZml4ZWQgcHJvcGVydHlcbmZ1bmN0aW9uIHZlbmRvclByb3BOYW1lKCBzdHlsZSwgbmFtZSApIHtcblxuXHQvLyBTaG9ydGN1dCBmb3IgbmFtZXMgdGhhdCBhcmUgbm90IHZlbmRvciBwcmVmaXhlZFxuXHRpZiAoIG5hbWUgaW4gc3R5bGUgKSB7XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH1cblxuXHQvLyBDaGVjayBmb3IgdmVuZG9yIHByZWZpeGVkIG5hbWVzXG5cdHZhciBjYXBOYW1lID0gbmFtZVswXS50b1VwcGVyQ2FzZSgpICsgbmFtZS5zbGljZSgxKSxcblx0XHRvcmlnTmFtZSA9IG5hbWUsXG5cdFx0aSA9IGNzc1ByZWZpeGVzLmxlbmd0aDtcblxuXHR3aGlsZSAoIGktLSApIHtcblx0XHRuYW1lID0gY3NzUHJlZml4ZXNbIGkgXSArIGNhcE5hbWU7XG5cdFx0aWYgKCBuYW1lIGluIHN0eWxlICkge1xuXHRcdFx0cmV0dXJuIG5hbWU7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIG9yaWdOYW1lO1xufVxuXG5mdW5jdGlvbiBzZXRQb3NpdGl2ZU51bWJlciggZWxlbSwgdmFsdWUsIHN1YnRyYWN0ICkge1xuXHR2YXIgbWF0Y2hlcyA9IHJudW1zcGxpdC5leGVjKCB2YWx1ZSApO1xuXHRyZXR1cm4gbWF0Y2hlcyA/XG5cdFx0Ly8gR3VhcmQgYWdhaW5zdCB1bmRlZmluZWQgXCJzdWJ0cmFjdFwiLCBlLmcuLCB3aGVuIHVzZWQgYXMgaW4gY3NzSG9va3Ncblx0XHRNYXRoLm1heCggMCwgbWF0Y2hlc1sgMSBdIC0gKCBzdWJ0cmFjdCB8fCAwICkgKSArICggbWF0Y2hlc1sgMiBdIHx8IFwicHhcIiApIDpcblx0XHR2YWx1ZTtcbn1cblxuZnVuY3Rpb24gYXVnbWVudFdpZHRoT3JIZWlnaHQoIGVsZW0sIG5hbWUsIGV4dHJhLCBpc0JvcmRlckJveCwgc3R5bGVzICkge1xuXHR2YXIgaSA9IGV4dHJhID09PSAoIGlzQm9yZGVyQm94ID8gXCJib3JkZXJcIiA6IFwiY29udGVudFwiICkgP1xuXHRcdC8vIElmIHdlIGFscmVhZHkgaGF2ZSB0aGUgcmlnaHQgbWVhc3VyZW1lbnQsIGF2b2lkIGF1Z21lbnRhdGlvblxuXHRcdDQgOlxuXHRcdC8vIE90aGVyd2lzZSBpbml0aWFsaXplIGZvciBob3Jpem9udGFsIG9yIHZlcnRpY2FsIHByb3BlcnRpZXNcblx0XHRuYW1lID09PSBcIndpZHRoXCIgPyAxIDogMCxcblxuXHRcdHZhbCA9IDA7XG5cblx0Zm9yICggOyBpIDwgNDsgaSArPSAyICkge1xuXHRcdC8vIEJvdGggYm94IG1vZGVscyBleGNsdWRlIG1hcmdpbiwgc28gYWRkIGl0IGlmIHdlIHdhbnQgaXRcblx0XHRpZiAoIGV4dHJhID09PSBcIm1hcmdpblwiICkge1xuXHRcdFx0dmFsICs9IGpRdWVyeS5jc3MoIGVsZW0sIGV4dHJhICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdH1cblxuXHRcdGlmICggaXNCb3JkZXJCb3ggKSB7XG5cdFx0XHQvLyBib3JkZXItYm94IGluY2x1ZGVzIHBhZGRpbmcsIHNvIHJlbW92ZSBpdCBpZiB3ZSB3YW50IGNvbnRlbnRcblx0XHRcdGlmICggZXh0cmEgPT09IFwiY29udGVudFwiICkge1xuXHRcdFx0XHR2YWwgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEF0IHRoaXMgcG9pbnQsIGV4dHJhIGlzbid0IGJvcmRlciBub3IgbWFyZ2luLCBzbyByZW1vdmUgYm9yZGVyXG5cdFx0XHRpZiAoIGV4dHJhICE9PSBcIm1hcmdpblwiICkge1xuXHRcdFx0XHR2YWwgLT0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gQXQgdGhpcyBwb2ludCwgZXh0cmEgaXNuJ3QgY29udGVudCwgc28gYWRkIHBhZGRpbmdcblx0XHRcdHZhbCArPSBqUXVlcnkuY3NzKCBlbGVtLCBcInBhZGRpbmdcIiArIGNzc0V4cGFuZFsgaSBdLCB0cnVlLCBzdHlsZXMgKTtcblxuXHRcdFx0Ly8gQXQgdGhpcyBwb2ludCwgZXh0cmEgaXNuJ3QgY29udGVudCBub3IgcGFkZGluZywgc28gYWRkIGJvcmRlclxuXHRcdFx0aWYgKCBleHRyYSAhPT0gXCJwYWRkaW5nXCIgKSB7XG5cdFx0XHRcdHZhbCArPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJvcmRlclwiICsgY3NzRXhwYW5kWyBpIF0gKyBcIldpZHRoXCIsIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB2YWw7XG59XG5cbmZ1bmN0aW9uIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIG5hbWUsIGV4dHJhICkge1xuXG5cdC8vIFN0YXJ0IHdpdGggb2Zmc2V0IHByb3BlcnR5LCB3aGljaCBpcyBlcXVpdmFsZW50IHRvIHRoZSBib3JkZXItYm94IHZhbHVlXG5cdHZhciB2YWx1ZUlzQm9yZGVyQm94ID0gdHJ1ZSxcblx0XHR2YWwgPSBuYW1lID09PSBcIndpZHRoXCIgPyBlbGVtLm9mZnNldFdpZHRoIDogZWxlbS5vZmZzZXRIZWlnaHQsXG5cdFx0c3R5bGVzID0gZ2V0U3R5bGVzKCBlbGVtICksXG5cdFx0aXNCb3JkZXJCb3ggPSBqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiO1xuXG5cdC8vIFNvbWUgbm9uLWh0bWwgZWxlbWVudHMgcmV0dXJuIHVuZGVmaW5lZCBmb3Igb2Zmc2V0V2lkdGgsIHNvIGNoZWNrIGZvciBudWxsL3VuZGVmaW5lZFxuXHQvLyBzdmcgLSBodHRwczovL2J1Z3ppbGxhLm1vemlsbGEub3JnL3Nob3dfYnVnLmNnaT9pZD02NDkyODVcblx0Ly8gTWF0aE1MIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NDkxNjY4XG5cdGlmICggdmFsIDw9IDAgfHwgdmFsID09IG51bGwgKSB7XG5cdFx0Ly8gRmFsbCBiYWNrIHRvIGNvbXB1dGVkIHRoZW4gdW5jb21wdXRlZCBjc3MgaWYgbmVjZXNzYXJ5XG5cdFx0dmFsID0gY3VyQ1NTKCBlbGVtLCBuYW1lLCBzdHlsZXMgKTtcblx0XHRpZiAoIHZhbCA8IDAgfHwgdmFsID09IG51bGwgKSB7XG5cdFx0XHR2YWwgPSBlbGVtLnN0eWxlWyBuYW1lIF07XG5cdFx0fVxuXG5cdFx0Ly8gQ29tcHV0ZWQgdW5pdCBpcyBub3QgcGl4ZWxzLiBTdG9wIGhlcmUgYW5kIHJldHVybi5cblx0XHRpZiAoIHJudW1ub25weC50ZXN0KHZhbCkgKSB7XG5cdFx0XHRyZXR1cm4gdmFsO1xuXHRcdH1cblxuXHRcdC8vIENoZWNrIGZvciBzdHlsZSBpbiBjYXNlIGEgYnJvd3NlciB3aGljaCByZXR1cm5zIHVucmVsaWFibGUgdmFsdWVzXG5cdFx0Ly8gZm9yIGdldENvbXB1dGVkU3R5bGUgc2lsZW50bHkgZmFsbHMgYmFjayB0byB0aGUgcmVsaWFibGUgZWxlbS5zdHlsZVxuXHRcdHZhbHVlSXNCb3JkZXJCb3ggPSBpc0JvcmRlckJveCAmJlxuXHRcdFx0KCBzdXBwb3J0LmJveFNpemluZ1JlbGlhYmxlKCkgfHwgdmFsID09PSBlbGVtLnN0eWxlWyBuYW1lIF0gKTtcblxuXHRcdC8vIE5vcm1hbGl6ZSBcIlwiLCBhdXRvLCBhbmQgcHJlcGFyZSBmb3IgZXh0cmFcblx0XHR2YWwgPSBwYXJzZUZsb2F0KCB2YWwgKSB8fCAwO1xuXHR9XG5cblx0Ly8gVXNlIHRoZSBhY3RpdmUgYm94LXNpemluZyBtb2RlbCB0byBhZGQvc3VidHJhY3QgaXJyZWxldmFudCBzdHlsZXNcblx0cmV0dXJuICggdmFsICtcblx0XHRhdWdtZW50V2lkdGhPckhlaWdodChcblx0XHRcdGVsZW0sXG5cdFx0XHRuYW1lLFxuXHRcdFx0ZXh0cmEgfHwgKCBpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiApLFxuXHRcdFx0dmFsdWVJc0JvcmRlckJveCxcblx0XHRcdHN0eWxlc1xuXHRcdClcblx0KSArIFwicHhcIjtcbn1cblxuZnVuY3Rpb24gc2hvd0hpZGUoIGVsZW1lbnRzLCBzaG93ICkge1xuXHR2YXIgZGlzcGxheSwgZWxlbSwgaGlkZGVuLFxuXHRcdHZhbHVlcyA9IFtdLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBlbGVtZW50cy5sZW5ndGg7XG5cblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRlbGVtID0gZWxlbWVudHNbIGluZGV4IF07XG5cdFx0aWYgKCAhZWxlbS5zdHlsZSApIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdHZhbHVlc1sgaW5kZXggXSA9IGRhdGFfcHJpdi5nZXQoIGVsZW0sIFwib2xkZGlzcGxheVwiICk7XG5cdFx0ZGlzcGxheSA9IGVsZW0uc3R5bGUuZGlzcGxheTtcblx0XHRpZiAoIHNob3cgKSB7XG5cdFx0XHQvLyBSZXNldCB0aGUgaW5saW5lIGRpc3BsYXkgb2YgdGhpcyBlbGVtZW50IHRvIGxlYXJuIGlmIGl0IGlzXG5cdFx0XHQvLyBiZWluZyBoaWRkZW4gYnkgY2FzY2FkZWQgcnVsZXMgb3Igbm90XG5cdFx0XHRpZiAoICF2YWx1ZXNbIGluZGV4IF0gJiYgZGlzcGxheSA9PT0gXCJub25lXCIgKSB7XG5cdFx0XHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9IFwiXCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCBlbGVtZW50cyB3aGljaCBoYXZlIGJlZW4gb3ZlcnJpZGRlbiB3aXRoIGRpc3BsYXk6IG5vbmVcblx0XHRcdC8vIGluIGEgc3R5bGVzaGVldCB0byB3aGF0ZXZlciB0aGUgZGVmYXVsdCBicm93c2VyIHN0eWxlIGlzXG5cdFx0XHQvLyBmb3Igc3VjaCBhbiBlbGVtZW50XG5cdFx0XHRpZiAoIGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiAmJiBpc0hpZGRlbiggZWxlbSApICkge1xuXHRcdFx0XHR2YWx1ZXNbIGluZGV4IF0gPSBkYXRhX3ByaXYuYWNjZXNzKCBlbGVtLCBcIm9sZGRpc3BsYXlcIiwgZGVmYXVsdERpc3BsYXkoZWxlbS5ub2RlTmFtZSkgKTtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0aGlkZGVuID0gaXNIaWRkZW4oIGVsZW0gKTtcblxuXHRcdFx0aWYgKCBkaXNwbGF5ICE9PSBcIm5vbmVcIiB8fCAhaGlkZGVuICkge1xuXHRcdFx0XHRkYXRhX3ByaXYuc2V0KCBlbGVtLCBcIm9sZGRpc3BsYXlcIiwgaGlkZGVuID8gZGlzcGxheSA6IGpRdWVyeS5jc3MoIGVsZW0sIFwiZGlzcGxheVwiICkgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyBTZXQgdGhlIGRpc3BsYXkgb2YgbW9zdCBvZiB0aGUgZWxlbWVudHMgaW4gYSBzZWNvbmQgbG9vcFxuXHQvLyB0byBhdm9pZCB0aGUgY29uc3RhbnQgcmVmbG93XG5cdGZvciAoIGluZGV4ID0gMDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0ZWxlbSA9IGVsZW1lbnRzWyBpbmRleCBdO1xuXHRcdGlmICggIWVsZW0uc3R5bGUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cdFx0aWYgKCAhc2hvdyB8fCBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwibm9uZVwiIHx8IGVsZW0uc3R5bGUuZGlzcGxheSA9PT0gXCJcIiApIHtcblx0XHRcdGVsZW0uc3R5bGUuZGlzcGxheSA9IHNob3cgPyB2YWx1ZXNbIGluZGV4IF0gfHwgXCJcIiA6IFwibm9uZVwiO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBlbGVtZW50cztcbn1cblxualF1ZXJ5LmV4dGVuZCh7XG5cblx0Ly8gQWRkIGluIHN0eWxlIHByb3BlcnR5IGhvb2tzIGZvciBvdmVycmlkaW5nIHRoZSBkZWZhdWx0XG5cdC8vIGJlaGF2aW9yIG9mIGdldHRpbmcgYW5kIHNldHRpbmcgYSBzdHlsZSBwcm9wZXJ0eVxuXHRjc3NIb29rczoge1xuXHRcdG9wYWNpdHk6IHtcblx0XHRcdGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXG5cdFx0XHRcdFx0Ly8gV2Ugc2hvdWxkIGFsd2F5cyBnZXQgYSBudW1iZXIgYmFjayBmcm9tIG9wYWNpdHlcblx0XHRcdFx0XHR2YXIgcmV0ID0gY3VyQ1NTKCBlbGVtLCBcIm9wYWNpdHlcIiApO1xuXHRcdFx0XHRcdHJldHVybiByZXQgPT09IFwiXCIgPyBcIjFcIiA6IHJldDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHQvLyBEb24ndCBhdXRvbWF0aWNhbGx5IGFkZCBcInB4XCIgdG8gdGhlc2UgcG9zc2libHktdW5pdGxlc3MgcHJvcGVydGllc1xuXHRjc3NOdW1iZXI6IHtcblx0XHRcImNvbHVtbkNvdW50XCI6IHRydWUsXG5cdFx0XCJmaWxsT3BhY2l0eVwiOiB0cnVlLFxuXHRcdFwiZmxleEdyb3dcIjogdHJ1ZSxcblx0XHRcImZsZXhTaHJpbmtcIjogdHJ1ZSxcblx0XHRcImZvbnRXZWlnaHRcIjogdHJ1ZSxcblx0XHRcImxpbmVIZWlnaHRcIjogdHJ1ZSxcblx0XHRcIm9wYWNpdHlcIjogdHJ1ZSxcblx0XHRcIm9yZGVyXCI6IHRydWUsXG5cdFx0XCJvcnBoYW5zXCI6IHRydWUsXG5cdFx0XCJ3aWRvd3NcIjogdHJ1ZSxcblx0XHRcInpJbmRleFwiOiB0cnVlLFxuXHRcdFwiem9vbVwiOiB0cnVlXG5cdH0sXG5cblx0Ly8gQWRkIGluIHByb3BlcnRpZXMgd2hvc2UgbmFtZXMgeW91IHdpc2ggdG8gZml4IGJlZm9yZVxuXHQvLyBzZXR0aW5nIG9yIGdldHRpbmcgdGhlIHZhbHVlXG5cdGNzc1Byb3BzOiB7XG5cdFx0XCJmbG9hdFwiOiBcImNzc0Zsb2F0XCJcblx0fSxcblxuXHQvLyBHZXQgYW5kIHNldCB0aGUgc3R5bGUgcHJvcGVydHkgb24gYSBET00gTm9kZVxuXHRzdHlsZTogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlLCBleHRyYSApIHtcblxuXHRcdC8vIERvbid0IHNldCBzdHlsZXMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuXHRcdGlmICggIWVsZW0gfHwgZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4IHx8ICFlbGVtLnN0eWxlICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZVxuXHRcdHZhciByZXQsIHR5cGUsIGhvb2tzLFxuXHRcdFx0b3JpZ05hbWUgPSBqUXVlcnkuY2FtZWxDYXNlKCBuYW1lICksXG5cdFx0XHRzdHlsZSA9IGVsZW0uc3R5bGU7XG5cblx0XHRuYW1lID0galF1ZXJ5LmNzc1Byb3BzWyBvcmlnTmFtZSBdIHx8ICggalF1ZXJ5LmNzc1Byb3BzWyBvcmlnTmFtZSBdID0gdmVuZG9yUHJvcE5hbWUoIHN0eWxlLCBvcmlnTmFtZSApICk7XG5cblx0XHQvLyBHZXRzIGhvb2sgZm9yIHRoZSBwcmVmaXhlZCB2ZXJzaW9uLCB0aGVuIHVucHJlZml4ZWQgdmVyc2lvblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gQ2hlY2sgaWYgd2UncmUgc2V0dGluZyBhIHZhbHVlXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dHlwZSA9IHR5cGVvZiB2YWx1ZTtcblxuXHRcdFx0Ly8gQ29udmVydCBcIis9XCIgb3IgXCItPVwiIHRvIHJlbGF0aXZlIG51bWJlcnMgKCM3MzQ1KVxuXHRcdFx0aWYgKCB0eXBlID09PSBcInN0cmluZ1wiICYmIChyZXQgPSBycmVsTnVtLmV4ZWMoIHZhbHVlICkpICkge1xuXHRcdFx0XHR2YWx1ZSA9ICggcmV0WzFdICsgMSApICogcmV0WzJdICsgcGFyc2VGbG9hdCggalF1ZXJ5LmNzcyggZWxlbSwgbmFtZSApICk7XG5cdFx0XHRcdC8vIEZpeGVzIGJ1ZyAjOTIzN1xuXHRcdFx0XHR0eXBlID0gXCJudW1iZXJcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTWFrZSBzdXJlIHRoYXQgbnVsbCBhbmQgTmFOIHZhbHVlcyBhcmVuJ3Qgc2V0ICgjNzExNilcblx0XHRcdGlmICggdmFsdWUgPT0gbnVsbCB8fCB2YWx1ZSAhPT0gdmFsdWUgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBudW1iZXIsIGFkZCAncHgnIHRvIHRoZSAoZXhjZXB0IGZvciBjZXJ0YWluIENTUyBwcm9wZXJ0aWVzKVxuXHRcdFx0aWYgKCB0eXBlID09PSBcIm51bWJlclwiICYmICFqUXVlcnkuY3NzTnVtYmVyWyBvcmlnTmFtZSBdICkge1xuXHRcdFx0XHR2YWx1ZSArPSBcInB4XCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IElFOS0xMStcblx0XHRcdC8vIGJhY2tncm91bmQtKiBwcm9wcyBhZmZlY3Qgb3JpZ2luYWwgY2xvbmUncyB2YWx1ZXNcblx0XHRcdGlmICggIXN1cHBvcnQuY2xlYXJDbG9uZVN0eWxlICYmIHZhbHVlID09PSBcIlwiICYmIG5hbWUuaW5kZXhPZiggXCJiYWNrZ3JvdW5kXCIgKSA9PT0gMCApIHtcblx0XHRcdFx0c3R5bGVbIG5hbWUgXSA9IFwiaW5oZXJpdFwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkLCB1c2UgdGhhdCB2YWx1ZSwgb3RoZXJ3aXNlIGp1c3Qgc2V0IHRoZSBzcGVjaWZpZWQgdmFsdWVcblx0XHRcdGlmICggIWhvb2tzIHx8ICEoXCJzZXRcIiBpbiBob29rcykgfHwgKHZhbHVlID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgZXh0cmEgKSkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0c3R5bGVbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIElmIGEgaG9vayB3YXMgcHJvdmlkZWQgZ2V0IHRoZSBub24tY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuXHRcdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoIGVsZW0sIGZhbHNlLCBleHRyYSApKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRyZXR1cm4gcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBPdGhlcndpc2UganVzdCBnZXQgdGhlIHZhbHVlIGZyb20gdGhlIHN0eWxlIG9iamVjdFxuXHRcdFx0cmV0dXJuIHN0eWxlWyBuYW1lIF07XG5cdFx0fVxuXHR9LFxuXG5cdGNzczogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGV4dHJhLCBzdHlsZXMgKSB7XG5cdFx0dmFyIHZhbCwgbnVtLCBob29rcyxcblx0XHRcdG9yaWdOYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggbmFtZSApO1xuXG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgd2UncmUgd29ya2luZyB3aXRoIHRoZSByaWdodCBuYW1lXG5cdFx0bmFtZSA9IGpRdWVyeS5jc3NQcm9wc1sgb3JpZ05hbWUgXSB8fCAoIGpRdWVyeS5jc3NQcm9wc1sgb3JpZ05hbWUgXSA9IHZlbmRvclByb3BOYW1lKCBlbGVtLnN0eWxlLCBvcmlnTmFtZSApICk7XG5cblx0XHQvLyBUcnkgcHJlZml4ZWQgbmFtZSBmb2xsb3dlZCBieSB0aGUgdW5wcmVmaXhlZCBuYW1lXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXSB8fCBqUXVlcnkuY3NzSG9va3NbIG9yaWdOYW1lIF07XG5cblx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZnJvbSB0aGVyZVxuXHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyApIHtcblx0XHRcdHZhbCA9IGhvb2tzLmdldCggZWxlbSwgdHJ1ZSwgZXh0cmEgKTtcblx0XHR9XG5cblx0XHQvLyBPdGhlcndpc2UsIGlmIGEgd2F5IHRvIGdldCB0aGUgY29tcHV0ZWQgdmFsdWUgZXhpc3RzLCB1c2UgdGhhdFxuXHRcdGlmICggdmFsID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHR2YWwgPSBjdXJDU1MoIGVsZW0sIG5hbWUsIHN0eWxlcyApO1xuXHRcdH1cblxuXHRcdC8vIENvbnZlcnQgXCJub3JtYWxcIiB0byBjb21wdXRlZCB2YWx1ZVxuXHRcdGlmICggdmFsID09PSBcIm5vcm1hbFwiICYmIG5hbWUgaW4gY3NzTm9ybWFsVHJhbnNmb3JtICkge1xuXHRcdFx0dmFsID0gY3NzTm9ybWFsVHJhbnNmb3JtWyBuYW1lIF07XG5cdFx0fVxuXG5cdFx0Ly8gTWFrZSBudW1lcmljIGlmIGZvcmNlZCBvciBhIHF1YWxpZmllciB3YXMgcHJvdmlkZWQgYW5kIHZhbCBsb29rcyBudW1lcmljXG5cdFx0aWYgKCBleHRyYSA9PT0gXCJcIiB8fCBleHRyYSApIHtcblx0XHRcdG51bSA9IHBhcnNlRmxvYXQoIHZhbCApO1xuXHRcdFx0cmV0dXJuIGV4dHJhID09PSB0cnVlIHx8IGpRdWVyeS5pc051bWVyaWMoIG51bSApID8gbnVtIHx8IDAgOiB2YWw7XG5cdFx0fVxuXHRcdHJldHVybiB2YWw7XG5cdH1cbn0pO1xuXG5qUXVlcnkuZWFjaChbIFwiaGVpZ2h0XCIsIFwid2lkdGhcIiBdLCBmdW5jdGlvbiggaSwgbmFtZSApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQsIGV4dHJhICkge1xuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblxuXHRcdFx0XHQvLyBDZXJ0YWluIGVsZW1lbnRzIGNhbiBoYXZlIGRpbWVuc2lvbiBpbmZvIGlmIHdlIGludmlzaWJseSBzaG93IHRoZW1cblx0XHRcdFx0Ly8gYnV0IGl0IG11c3QgaGF2ZSBhIGN1cnJlbnQgZGlzcGxheSBzdHlsZSB0aGF0IHdvdWxkIGJlbmVmaXRcblx0XHRcdFx0cmV0dXJuIHJkaXNwbGF5c3dhcC50ZXN0KCBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApICkgJiYgZWxlbS5vZmZzZXRXaWR0aCA9PT0gMCA/XG5cdFx0XHRcdFx0alF1ZXJ5LnN3YXAoIGVsZW0sIGNzc1Nob3csIGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIG5hbWUsIGV4dHJhICk7XG5cdFx0XHRcdFx0fSkgOlxuXHRcdFx0XHRcdGdldFdpZHRoT3JIZWlnaHQoIGVsZW0sIG5hbWUsIGV4dHJhICk7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBleHRyYSApIHtcblx0XHRcdHZhciBzdHlsZXMgPSBleHRyYSAmJiBnZXRTdHlsZXMoIGVsZW0gKTtcblx0XHRcdHJldHVybiBzZXRQb3NpdGl2ZU51bWJlciggZWxlbSwgdmFsdWUsIGV4dHJhID9cblx0XHRcdFx0YXVnbWVudFdpZHRoT3JIZWlnaHQoXG5cdFx0XHRcdFx0ZWxlbSxcblx0XHRcdFx0XHRuYW1lLFxuXHRcdFx0XHRcdGV4dHJhLFxuXHRcdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIFwiYm94U2l6aW5nXCIsIGZhbHNlLCBzdHlsZXMgKSA9PT0gXCJib3JkZXItYm94XCIsXG5cdFx0XHRcdFx0c3R5bGVzXG5cdFx0XHRcdCkgOiAwXG5cdFx0XHQpO1xuXHRcdH1cblx0fTtcbn0pO1xuXG4vLyBTdXBwb3J0OiBBbmRyb2lkIDIuM1xualF1ZXJ5LmNzc0hvb2tzLm1hcmdpblJpZ2h0ID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnJlbGlhYmxlTWFyZ2luUmlnaHQsXG5cdGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCApIHtcblx0XHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5zd2FwKCBlbGVtLCB7IFwiZGlzcGxheVwiOiBcImlubGluZS1ibG9ja1wiIH0sXG5cdFx0XHRcdGN1ckNTUywgWyBlbGVtLCBcIm1hcmdpblJpZ2h0XCIgXSApO1xuXHRcdH1cblx0fVxuKTtcblxuLy8gVGhlc2UgaG9va3MgYXJlIHVzZWQgYnkgYW5pbWF0ZSB0byBleHBhbmQgcHJvcGVydGllc1xualF1ZXJ5LmVhY2goe1xuXHRtYXJnaW46IFwiXCIsXG5cdHBhZGRpbmc6IFwiXCIsXG5cdGJvcmRlcjogXCJXaWR0aFwiXG59LCBmdW5jdGlvbiggcHJlZml4LCBzdWZmaXggKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJlZml4ICsgc3VmZml4IF0gPSB7XG5cdFx0ZXhwYW5kOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHR2YXIgaSA9IDAsXG5cdFx0XHRcdGV4cGFuZGVkID0ge30sXG5cblx0XHRcdFx0Ly8gQXNzdW1lcyBhIHNpbmdsZSBudW1iZXIgaWYgbm90IGEgc3RyaW5nXG5cdFx0XHRcdHBhcnRzID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiID8gdmFsdWUuc3BsaXQoXCIgXCIpIDogWyB2YWx1ZSBdO1xuXG5cdFx0XHRmb3IgKCA7IGkgPCA0OyBpKysgKSB7XG5cdFx0XHRcdGV4cGFuZGVkWyBwcmVmaXggKyBjc3NFeHBhbmRbIGkgXSArIHN1ZmZpeCBdID1cblx0XHRcdFx0XHRwYXJ0c1sgaSBdIHx8IHBhcnRzWyBpIC0gMiBdIHx8IHBhcnRzWyAwIF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBleHBhbmRlZDtcblx0XHR9XG5cdH07XG5cblx0aWYgKCAhcm1hcmdpbi50ZXN0KCBwcmVmaXggKSApIHtcblx0XHRqUXVlcnkuY3NzSG9va3NbIHByZWZpeCArIHN1ZmZpeCBdLnNldCA9IHNldFBvc2l0aXZlTnVtYmVyO1xuXHR9XG59KTtcblxualF1ZXJ5LmZuLmV4dGVuZCh7XG5cdGNzczogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdHZhciBzdHlsZXMsIGxlbixcblx0XHRcdFx0bWFwID0ge30sXG5cdFx0XHRcdGkgPSAwO1xuXG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCBuYW1lICkgKSB7XG5cdFx0XHRcdHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApO1xuXHRcdFx0XHRsZW4gPSBuYW1lLmxlbmd0aDtcblxuXHRcdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0XHRtYXBbIG5hbWVbIGkgXSBdID0galF1ZXJ5LmNzcyggZWxlbSwgbmFtZVsgaSBdLCBmYWxzZSwgc3R5bGVzICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gbWFwO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gdmFsdWUgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSwgdmFsdWUgKSA6XG5cdFx0XHRcdGpRdWVyeS5jc3MoIGVsZW0sIG5hbWUgKTtcblx0XHR9LCBuYW1lLCB2YWx1ZSwgYXJndW1lbnRzLmxlbmd0aCA+IDEgKTtcblx0fSxcblx0c2hvdzogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNob3dIaWRlKCB0aGlzLCB0cnVlICk7XG5cdH0sXG5cdGhpZGU6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcyApO1xuXHR9LFxuXHR0b2dnbGU6IGZ1bmN0aW9uKCBzdGF0ZSApIHtcblx0XHRpZiAoIHR5cGVvZiBzdGF0ZSA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGUgPyB0aGlzLnNob3coKSA6IHRoaXMuaGlkZSgpO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIGlzSGlkZGVuKCB0aGlzICkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnNob3coKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLmhpZGUoKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7XG5cblxuZnVuY3Rpb24gVHdlZW4oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nICkge1xuXHRyZXR1cm4gbmV3IFR3ZWVuLnByb3RvdHlwZS5pbml0KCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApO1xufVxualF1ZXJ5LlR3ZWVuID0gVHdlZW47XG5cblR3ZWVuLnByb3RvdHlwZSA9IHtcblx0Y29uc3RydWN0b3I6IFR3ZWVuLFxuXHRpbml0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcsIHVuaXQgKSB7XG5cdFx0dGhpcy5lbGVtID0gZWxlbTtcblx0XHR0aGlzLnByb3AgPSBwcm9wO1xuXHRcdHRoaXMuZWFzaW5nID0gZWFzaW5nIHx8IFwic3dpbmdcIjtcblx0XHR0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuXHRcdHRoaXMuc3RhcnQgPSB0aGlzLm5vdyA9IHRoaXMuY3VyKCk7XG5cdFx0dGhpcy5lbmQgPSBlbmQ7XG5cdFx0dGhpcy51bml0ID0gdW5pdCB8fCAoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSA/IFwiXCIgOiBcInB4XCIgKTtcblx0fSxcblx0Y3VyOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgaG9va3MgPSBUd2Vlbi5wcm9wSG9va3NbIHRoaXMucHJvcCBdO1xuXG5cdFx0cmV0dXJuIGhvb2tzICYmIGhvb2tzLmdldCA/XG5cdFx0XHRob29rcy5nZXQoIHRoaXMgKSA6XG5cdFx0XHRUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuZ2V0KCB0aGlzICk7XG5cdH0sXG5cdHJ1bjogZnVuY3Rpb24oIHBlcmNlbnQgKSB7XG5cdFx0dmFyIGVhc2VkLFxuXHRcdFx0aG9va3MgPSBUd2Vlbi5wcm9wSG9va3NbIHRoaXMucHJvcCBdO1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuZHVyYXRpb24gKSB7XG5cdFx0XHR0aGlzLnBvcyA9IGVhc2VkID0galF1ZXJ5LmVhc2luZ1sgdGhpcy5lYXNpbmcgXShcblx0XHRcdFx0cGVyY2VudCwgdGhpcy5vcHRpb25zLmR1cmF0aW9uICogcGVyY2VudCwgMCwgMSwgdGhpcy5vcHRpb25zLmR1cmF0aW9uXG5cdFx0XHQpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0aGlzLnBvcyA9IGVhc2VkID0gcGVyY2VudDtcblx0XHR9XG5cdFx0dGhpcy5ub3cgPSAoIHRoaXMuZW5kIC0gdGhpcy5zdGFydCApICogZWFzZWQgKyB0aGlzLnN0YXJ0O1xuXG5cdFx0aWYgKCB0aGlzLm9wdGlvbnMuc3RlcCApIHtcblx0XHRcdHRoaXMub3B0aW9ucy5zdGVwLmNhbGwoIHRoaXMuZWxlbSwgdGhpcy5ub3csIHRoaXMgKTtcblx0XHR9XG5cblx0XHRpZiAoIGhvb2tzICYmIGhvb2tzLnNldCApIHtcblx0XHRcdGhvb2tzLnNldCggdGhpcyApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRUd2Vlbi5wcm9wSG9va3MuX2RlZmF1bHQuc2V0KCB0aGlzICk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59O1xuXG5Ud2Vlbi5wcm90b3R5cGUuaW5pdC5wcm90b3R5cGUgPSBUd2Vlbi5wcm90b3R5cGU7XG5cblR3ZWVuLnByb3BIb29rcyA9IHtcblx0X2RlZmF1bHQ6IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcblx0XHRcdHZhciByZXN1bHQ7XG5cblx0XHRcdGlmICggdHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdICE9IG51bGwgJiZcblx0XHRcdFx0KCF0d2Vlbi5lbGVtLnN0eWxlIHx8IHR3ZWVuLmVsZW0uc3R5bGVbIHR3ZWVuLnByb3AgXSA9PSBudWxsKSApIHtcblx0XHRcdFx0cmV0dXJuIHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gUGFzc2luZyBhbiBlbXB0eSBzdHJpbmcgYXMgYSAzcmQgcGFyYW1ldGVyIHRvIC5jc3Mgd2lsbCBhdXRvbWF0aWNhbGx5XG5cdFx0XHQvLyBhdHRlbXB0IGEgcGFyc2VGbG9hdCBhbmQgZmFsbGJhY2sgdG8gYSBzdHJpbmcgaWYgdGhlIHBhcnNlIGZhaWxzLlxuXHRcdFx0Ly8gU2ltcGxlIHZhbHVlcyBzdWNoIGFzIFwiMTBweFwiIGFyZSBwYXJzZWQgdG8gRmxvYXQ7XG5cdFx0XHQvLyBjb21wbGV4IHZhbHVlcyBzdWNoIGFzIFwicm90YXRlKDFyYWQpXCIgYXJlIHJldHVybmVkIGFzLWlzLlxuXHRcdFx0cmVzdWx0ID0galF1ZXJ5LmNzcyggdHdlZW4uZWxlbSwgdHdlZW4ucHJvcCwgXCJcIiApO1xuXHRcdFx0Ly8gRW1wdHkgc3RyaW5ncywgbnVsbCwgdW5kZWZpbmVkIGFuZCBcImF1dG9cIiBhcmUgY29udmVydGVkIHRvIDAuXG5cdFx0XHRyZXR1cm4gIXJlc3VsdCB8fCByZXN1bHQgPT09IFwiYXV0b1wiID8gMCA6IHJlc3VsdDtcblx0XHR9LFxuXHRcdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdFx0Ly8gVXNlIHN0ZXAgaG9vayBmb3IgYmFjayBjb21wYXQuXG5cdFx0XHQvLyBVc2UgY3NzSG9vayBpZiBpdHMgdGhlcmUuXG5cdFx0XHQvLyBVc2UgLnN0eWxlIGlmIGF2YWlsYWJsZSBhbmQgdXNlIHBsYWluIHByb3BlcnRpZXMgd2hlcmUgYXZhaWxhYmxlLlxuXHRcdFx0aWYgKCBqUXVlcnkuZnguc3RlcFsgdHdlZW4ucHJvcCBdICkge1xuXHRcdFx0XHRqUXVlcnkuZnguc3RlcFsgdHdlZW4ucHJvcCBdKCB0d2VlbiApO1xuXHRcdFx0fSBlbHNlIGlmICggdHdlZW4uZWxlbS5zdHlsZSAmJiAoIHR3ZWVuLmVsZW0uc3R5bGVbIGpRdWVyeS5jc3NQcm9wc1sgdHdlZW4ucHJvcCBdIF0gIT0gbnVsbCB8fCBqUXVlcnkuY3NzSG9va3NbIHR3ZWVuLnByb3AgXSApICkge1xuXHRcdFx0XHRqUXVlcnkuc3R5bGUoIHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIHR3ZWVuLm5vdyArIHR3ZWVuLnVuaXQgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSA9IHR3ZWVuLm5vdztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn07XG5cbi8vIFN1cHBvcnQ6IElFOVxuLy8gUGFuaWMgYmFzZWQgYXBwcm9hY2ggdG8gc2V0dGluZyB0aGluZ3Mgb24gZGlzY29ubmVjdGVkIG5vZGVzXG5Ud2Vlbi5wcm9wSG9va3Muc2Nyb2xsVG9wID0gVHdlZW4ucHJvcEhvb2tzLnNjcm9sbExlZnQgPSB7XG5cdHNldDogZnVuY3Rpb24oIHR3ZWVuICkge1xuXHRcdGlmICggdHdlZW4uZWxlbS5ub2RlVHlwZSAmJiB0d2Vlbi5lbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkuZWFzaW5nID0ge1xuXHRsaW5lYXI6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiBwO1xuXHR9LFxuXHRzd2luZzogZnVuY3Rpb24oIHAgKSB7XG5cdFx0cmV0dXJuIDAuNSAtIE1hdGguY29zKCBwICogTWF0aC5QSSApIC8gMjtcblx0fVxufTtcblxualF1ZXJ5LmZ4ID0gVHdlZW4ucHJvdG90eXBlLmluaXQ7XG5cbi8vIEJhY2sgQ29tcGF0IDwxLjggZXh0ZW5zaW9uIHBvaW50XG5qUXVlcnkuZnguc3RlcCA9IHt9O1xuXG5cblxuXG52YXJcblx0ZnhOb3csIHRpbWVySWQsXG5cdHJmeHR5cGVzID0gL14oPzp0b2dnbGV8c2hvd3xoaWRlKSQvLFxuXHRyZnhudW0gPSBuZXcgUmVnRXhwKCBcIl4oPzooWystXSk9fCkoXCIgKyBwbnVtICsgXCIpKFthLXolXSopJFwiLCBcImlcIiApLFxuXHRycnVuID0gL3F1ZXVlSG9va3MkLyxcblx0YW5pbWF0aW9uUHJlZmlsdGVycyA9IFsgZGVmYXVsdFByZWZpbHRlciBdLFxuXHR0d2VlbmVycyA9IHtcblx0XHRcIipcIjogWyBmdW5jdGlvbiggcHJvcCwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgdHdlZW4gPSB0aGlzLmNyZWF0ZVR3ZWVuKCBwcm9wLCB2YWx1ZSApLFxuXHRcdFx0XHR0YXJnZXQgPSB0d2Vlbi5jdXIoKSxcblx0XHRcdFx0cGFydHMgPSByZnhudW0uZXhlYyggdmFsdWUgKSxcblx0XHRcdFx0dW5pdCA9IHBhcnRzICYmIHBhcnRzWyAzIF0gfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gPyBcIlwiIDogXCJweFwiICksXG5cblx0XHRcdFx0Ly8gU3RhcnRpbmcgdmFsdWUgY29tcHV0YXRpb24gaXMgcmVxdWlyZWQgZm9yIHBvdGVudGlhbCB1bml0IG1pc21hdGNoZXNcblx0XHRcdFx0c3RhcnQgPSAoIGpRdWVyeS5jc3NOdW1iZXJbIHByb3AgXSB8fCB1bml0ICE9PSBcInB4XCIgJiYgK3RhcmdldCApICYmXG5cdFx0XHRcdFx0cmZ4bnVtLmV4ZWMoIGpRdWVyeS5jc3MoIHR3ZWVuLmVsZW0sIHByb3AgKSApLFxuXHRcdFx0XHRzY2FsZSA9IDEsXG5cdFx0XHRcdG1heEl0ZXJhdGlvbnMgPSAyMDtcblxuXHRcdFx0aWYgKCBzdGFydCAmJiBzdGFydFsgMyBdICE9PSB1bml0ICkge1xuXHRcdFx0XHQvLyBUcnVzdCB1bml0cyByZXBvcnRlZCBieSBqUXVlcnkuY3NzXG5cdFx0XHRcdHVuaXQgPSB1bml0IHx8IHN0YXJ0WyAzIF07XG5cblx0XHRcdFx0Ly8gTWFrZSBzdXJlIHdlIHVwZGF0ZSB0aGUgdHdlZW4gcHJvcGVydGllcyBsYXRlciBvblxuXHRcdFx0XHRwYXJ0cyA9IHBhcnRzIHx8IFtdO1xuXG5cdFx0XHRcdC8vIEl0ZXJhdGl2ZWx5IGFwcHJveGltYXRlIGZyb20gYSBub256ZXJvIHN0YXJ0aW5nIHBvaW50XG5cdFx0XHRcdHN0YXJ0ID0gK3RhcmdldCB8fCAxO1xuXG5cdFx0XHRcdGRvIHtcblx0XHRcdFx0XHQvLyBJZiBwcmV2aW91cyBpdGVyYXRpb24gemVyb2VkIG91dCwgZG91YmxlIHVudGlsIHdlIGdldCAqc29tZXRoaW5nKi5cblx0XHRcdFx0XHQvLyBVc2Ugc3RyaW5nIGZvciBkb3VibGluZyBzbyB3ZSBkb24ndCBhY2NpZGVudGFsbHkgc2VlIHNjYWxlIGFzIHVuY2hhbmdlZCBiZWxvd1xuXHRcdFx0XHRcdHNjYWxlID0gc2NhbGUgfHwgXCIuNVwiO1xuXG5cdFx0XHRcdFx0Ly8gQWRqdXN0IGFuZCBhcHBseVxuXHRcdFx0XHRcdHN0YXJ0ID0gc3RhcnQgLyBzY2FsZTtcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoIHR3ZWVuLmVsZW0sIHByb3AsIHN0YXJ0ICsgdW5pdCApO1xuXG5cdFx0XHRcdC8vIFVwZGF0ZSBzY2FsZSwgdG9sZXJhdGluZyB6ZXJvIG9yIE5hTiBmcm9tIHR3ZWVuLmN1cigpLFxuXHRcdFx0XHQvLyBicmVhayB0aGUgbG9vcCBpZiBzY2FsZSBpcyB1bmNoYW5nZWQgb3IgcGVyZmVjdCwgb3IgaWYgd2UndmUganVzdCBoYWQgZW5vdWdoXG5cdFx0XHRcdH0gd2hpbGUgKCBzY2FsZSAhPT0gKHNjYWxlID0gdHdlZW4uY3VyKCkgLyB0YXJnZXQpICYmIHNjYWxlICE9PSAxICYmIC0tbWF4SXRlcmF0aW9ucyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBVcGRhdGUgdHdlZW4gcHJvcGVydGllc1xuXHRcdFx0aWYgKCBwYXJ0cyApIHtcblx0XHRcdFx0c3RhcnQgPSB0d2Vlbi5zdGFydCA9ICtzdGFydCB8fCArdGFyZ2V0IHx8IDA7XG5cdFx0XHRcdHR3ZWVuLnVuaXQgPSB1bml0O1xuXHRcdFx0XHQvLyBJZiBhICs9Ly09IHRva2VuIHdhcyBwcm92aWRlZCwgd2UncmUgZG9pbmcgYSByZWxhdGl2ZSBhbmltYXRpb25cblx0XHRcdFx0dHdlZW4uZW5kID0gcGFydHNbIDEgXSA/XG5cdFx0XHRcdFx0c3RhcnQgKyAoIHBhcnRzWyAxIF0gKyAxICkgKiBwYXJ0c1sgMiBdIDpcblx0XHRcdFx0XHQrcGFydHNbIDIgXTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdH0gXVxuXHR9O1xuXG4vLyBBbmltYXRpb25zIGNyZWF0ZWQgc3luY2hyb25vdXNseSB3aWxsIHJ1biBzeW5jaHJvbm91c2x5XG5mdW5jdGlvbiBjcmVhdGVGeE5vdygpIHtcblx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRmeE5vdyA9IHVuZGVmaW5lZDtcblx0fSk7XG5cdHJldHVybiAoIGZ4Tm93ID0galF1ZXJ5Lm5vdygpICk7XG59XG5cbi8vIEdlbmVyYXRlIHBhcmFtZXRlcnMgdG8gY3JlYXRlIGEgc3RhbmRhcmQgYW5pbWF0aW9uXG5mdW5jdGlvbiBnZW5GeCggdHlwZSwgaW5jbHVkZVdpZHRoICkge1xuXHR2YXIgd2hpY2gsXG5cdFx0aSA9IDAsXG5cdFx0YXR0cnMgPSB7IGhlaWdodDogdHlwZSB9O1xuXG5cdC8vIElmIHdlIGluY2x1ZGUgd2lkdGgsIHN0ZXAgdmFsdWUgaXMgMSB0byBkbyBhbGwgY3NzRXhwYW5kIHZhbHVlcyxcblx0Ly8gb3RoZXJ3aXNlIHN0ZXAgdmFsdWUgaXMgMiB0byBza2lwIG92ZXIgTGVmdCBhbmQgUmlnaHRcblx0aW5jbHVkZVdpZHRoID0gaW5jbHVkZVdpZHRoID8gMSA6IDA7XG5cdGZvciAoIDsgaSA8IDQgOyBpICs9IDIgLSBpbmNsdWRlV2lkdGggKSB7XG5cdFx0d2hpY2ggPSBjc3NFeHBhbmRbIGkgXTtcblx0XHRhdHRyc1sgXCJtYXJnaW5cIiArIHdoaWNoIF0gPSBhdHRyc1sgXCJwYWRkaW5nXCIgKyB3aGljaCBdID0gdHlwZTtcblx0fVxuXG5cdGlmICggaW5jbHVkZVdpZHRoICkge1xuXHRcdGF0dHJzLm9wYWNpdHkgPSBhdHRycy53aWR0aCA9IHR5cGU7XG5cdH1cblxuXHRyZXR1cm4gYXR0cnM7XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVR3ZWVuKCB2YWx1ZSwgcHJvcCwgYW5pbWF0aW9uICkge1xuXHR2YXIgdHdlZW4sXG5cdFx0Y29sbGVjdGlvbiA9ICggdHdlZW5lcnNbIHByb3AgXSB8fCBbXSApLmNvbmNhdCggdHdlZW5lcnNbIFwiKlwiIF0gKSxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gY29sbGVjdGlvbi5sZW5ndGg7XG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0aWYgKCAodHdlZW4gPSBjb2xsZWN0aW9uWyBpbmRleCBdLmNhbGwoIGFuaW1hdGlvbiwgcHJvcCwgdmFsdWUgKSkgKSB7XG5cblx0XHRcdC8vIFdlJ3JlIGRvbmUgd2l0aCB0aGlzIHByb3BlcnR5XG5cdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcmVmaWx0ZXIoIGVsZW0sIHByb3BzLCBvcHRzICkge1xuXHQvKiBqc2hpbnQgdmFsaWR0aGlzOiB0cnVlICovXG5cdHZhciBwcm9wLCB2YWx1ZSwgdG9nZ2xlLCB0d2VlbiwgaG9va3MsIG9sZGZpcmUsIGRpc3BsYXksIGNoZWNrRGlzcGxheSxcblx0XHRhbmltID0gdGhpcyxcblx0XHRvcmlnID0ge30sXG5cdFx0c3R5bGUgPSBlbGVtLnN0eWxlLFxuXHRcdGhpZGRlbiA9IGVsZW0ubm9kZVR5cGUgJiYgaXNIaWRkZW4oIGVsZW0gKSxcblx0XHRkYXRhU2hvdyA9IGRhdGFfcHJpdi5nZXQoIGVsZW0sIFwiZnhzaG93XCIgKTtcblxuXHQvLyBIYW5kbGUgcXVldWU6IGZhbHNlIHByb21pc2VzXG5cdGlmICggIW9wdHMucXVldWUgKSB7XG5cdFx0aG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoIGVsZW0sIFwiZnhcIiApO1xuXHRcdGlmICggaG9va3MudW5xdWV1ZWQgPT0gbnVsbCApIHtcblx0XHRcdGhvb2tzLnVucXVldWVkID0gMDtcblx0XHRcdG9sZGZpcmUgPSBob29rcy5lbXB0eS5maXJlO1xuXHRcdFx0aG9va3MuZW1wdHkuZmlyZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICFob29rcy51bnF1ZXVlZCApIHtcblx0XHRcdFx0XHRvbGRmaXJlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0fVxuXHRcdGhvb2tzLnVucXVldWVkKys7XG5cblx0XHRhbmltLmFsd2F5cyhmdW5jdGlvbigpIHtcblx0XHRcdC8vIEVuc3VyZSB0aGUgY29tcGxldGUgaGFuZGxlciBpcyBjYWxsZWQgYmVmb3JlIHRoaXMgY29tcGxldGVzXG5cdFx0XHRhbmltLmFsd2F5cyhmdW5jdGlvbigpIHtcblx0XHRcdFx0aG9va3MudW5xdWV1ZWQtLTtcblx0XHRcdFx0aWYgKCAhalF1ZXJ5LnF1ZXVlKCBlbGVtLCBcImZ4XCIgKS5sZW5ndGggKSB7XG5cdFx0XHRcdFx0aG9va3MuZW1wdHkuZmlyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIEhlaWdodC93aWR0aCBvdmVyZmxvdyBwYXNzXG5cdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoIFwiaGVpZ2h0XCIgaW4gcHJvcHMgfHwgXCJ3aWR0aFwiIGluIHByb3BzICkgKSB7XG5cdFx0Ly8gTWFrZSBzdXJlIHRoYXQgbm90aGluZyBzbmVha3Mgb3V0XG5cdFx0Ly8gUmVjb3JkIGFsbCAzIG92ZXJmbG93IGF0dHJpYnV0ZXMgYmVjYXVzZSBJRTktMTAgZG8gbm90XG5cdFx0Ly8gY2hhbmdlIHRoZSBvdmVyZmxvdyBhdHRyaWJ1dGUgd2hlbiBvdmVyZmxvd1ggYW5kXG5cdFx0Ly8gb3ZlcmZsb3dZIGFyZSBzZXQgdG8gdGhlIHNhbWUgdmFsdWVcblx0XHRvcHRzLm92ZXJmbG93ID0gWyBzdHlsZS5vdmVyZmxvdywgc3R5bGUub3ZlcmZsb3dYLCBzdHlsZS5vdmVyZmxvd1kgXTtcblxuXHRcdC8vIFNldCBkaXNwbGF5IHByb3BlcnR5IHRvIGlubGluZS1ibG9jayBmb3IgaGVpZ2h0L3dpZHRoXG5cdFx0Ly8gYW5pbWF0aW9ucyBvbiBpbmxpbmUgZWxlbWVudHMgdGhhdCBhcmUgaGF2aW5nIHdpZHRoL2hlaWdodCBhbmltYXRlZFxuXHRcdGRpc3BsYXkgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApO1xuXG5cdFx0Ly8gVGVzdCBkZWZhdWx0IGRpc3BsYXkgaWYgZGlzcGxheSBpcyBjdXJyZW50bHkgXCJub25lXCJcblx0XHRjaGVja0Rpc3BsYXkgPSBkaXNwbGF5ID09PSBcIm5vbmVcIiA/XG5cdFx0XHRkYXRhX3ByaXYuZ2V0KCBlbGVtLCBcIm9sZGRpc3BsYXlcIiApIHx8IGRlZmF1bHREaXNwbGF5KCBlbGVtLm5vZGVOYW1lICkgOiBkaXNwbGF5O1xuXG5cdFx0aWYgKCBjaGVja0Rpc3BsYXkgPT09IFwiaW5saW5lXCIgJiYgalF1ZXJ5LmNzcyggZWxlbSwgXCJmbG9hdFwiICkgPT09IFwibm9uZVwiICkge1xuXHRcdFx0c3R5bGUuZGlzcGxheSA9IFwiaW5saW5lLWJsb2NrXCI7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCBvcHRzLm92ZXJmbG93ICkge1xuXHRcdHN0eWxlLm92ZXJmbG93ID0gXCJoaWRkZW5cIjtcblx0XHRhbmltLmFsd2F5cyhmdW5jdGlvbigpIHtcblx0XHRcdHN0eWxlLm92ZXJmbG93ID0gb3B0cy5vdmVyZmxvd1sgMCBdO1xuXHRcdFx0c3R5bGUub3ZlcmZsb3dYID0gb3B0cy5vdmVyZmxvd1sgMSBdO1xuXHRcdFx0c3R5bGUub3ZlcmZsb3dZID0gb3B0cy5vdmVyZmxvd1sgMiBdO1xuXHRcdH0pO1xuXHR9XG5cblx0Ly8gc2hvdy9oaWRlIHBhc3Ncblx0Zm9yICggcHJvcCBpbiBwcm9wcyApIHtcblx0XHR2YWx1ZSA9IHByb3BzWyBwcm9wIF07XG5cdFx0aWYgKCByZnh0eXBlcy5leGVjKCB2YWx1ZSApICkge1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBwcm9wIF07XG5cdFx0XHR0b2dnbGUgPSB0b2dnbGUgfHwgdmFsdWUgPT09IFwidG9nZ2xlXCI7XG5cdFx0XHRpZiAoIHZhbHVlID09PSAoIGhpZGRlbiA/IFwiaGlkZVwiIDogXCJzaG93XCIgKSApIHtcblxuXHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBkYXRhU2hvdyBsZWZ0IG92ZXIgZnJvbSBhIHN0b3BwZWQgaGlkZSBvciBzaG93IGFuZCB3ZSBhcmUgZ29pbmcgdG8gcHJvY2VlZCB3aXRoIHNob3csIHdlIHNob3VsZCBwcmV0ZW5kIHRvIGJlIGhpZGRlblxuXHRcdFx0XHRpZiAoIHZhbHVlID09PSBcInNob3dcIiAmJiBkYXRhU2hvdyAmJiBkYXRhU2hvd1sgcHJvcCBdICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0aGlkZGVuID0gdHJ1ZTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0b3JpZ1sgcHJvcCBdID0gZGF0YVNob3cgJiYgZGF0YVNob3dbIHByb3AgXSB8fCBqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AgKTtcblxuXHRcdC8vIEFueSBub24tZnggdmFsdWUgc3RvcHMgdXMgZnJvbSByZXN0b3JpbmcgdGhlIG9yaWdpbmFsIGRpc3BsYXkgdmFsdWVcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGlzcGxheSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdH1cblxuXHRpZiAoICFqUXVlcnkuaXNFbXB0eU9iamVjdCggb3JpZyApICkge1xuXHRcdGlmICggZGF0YVNob3cgKSB7XG5cdFx0XHRpZiAoIFwiaGlkZGVuXCIgaW4gZGF0YVNob3cgKSB7XG5cdFx0XHRcdGhpZGRlbiA9IGRhdGFTaG93LmhpZGRlbjtcblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0ZGF0YVNob3cgPSBkYXRhX3ByaXYuYWNjZXNzKCBlbGVtLCBcImZ4c2hvd1wiLCB7fSApO1xuXHRcdH1cblxuXHRcdC8vIFN0b3JlIHN0YXRlIGlmIGl0cyB0b2dnbGUgLSBlbmFibGVzIC5zdG9wKCkudG9nZ2xlKCkgdG8gXCJyZXZlcnNlXCJcblx0XHRpZiAoIHRvZ2dsZSApIHtcblx0XHRcdGRhdGFTaG93LmhpZGRlbiA9ICFoaWRkZW47XG5cdFx0fVxuXHRcdGlmICggaGlkZGVuICkge1xuXHRcdFx0alF1ZXJ5KCBlbGVtICkuc2hvdygpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhbmltLmRvbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGpRdWVyeSggZWxlbSApLmhpZGUoKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRhbmltLmRvbmUoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgcHJvcDtcblxuXHRcdFx0ZGF0YV9wcml2LnJlbW92ZSggZWxlbSwgXCJmeHNob3dcIiApO1xuXHRcdFx0Zm9yICggcHJvcCBpbiBvcmlnICkge1xuXHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHByb3AsIG9yaWdbIHByb3AgXSApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHRcdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblx0XHRcdHR3ZWVuID0gY3JlYXRlVHdlZW4oIGhpZGRlbiA/IGRhdGFTaG93WyBwcm9wIF0gOiAwLCBwcm9wLCBhbmltICk7XG5cblx0XHRcdGlmICggISggcHJvcCBpbiBkYXRhU2hvdyApICkge1xuXHRcdFx0XHRkYXRhU2hvd1sgcHJvcCBdID0gdHdlZW4uc3RhcnQ7XG5cdFx0XHRcdGlmICggaGlkZGVuICkge1xuXHRcdFx0XHRcdHR3ZWVuLmVuZCA9IHR3ZWVuLnN0YXJ0O1xuXHRcdFx0XHRcdHR3ZWVuLnN0YXJ0ID0gcHJvcCA9PT0gXCJ3aWR0aFwiIHx8IHByb3AgPT09IFwiaGVpZ2h0XCIgPyAxIDogMDtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHQvLyBJZiB0aGlzIGlzIGEgbm9vcCBsaWtlIC5oaWRlKCkuaGlkZSgpLCByZXN0b3JlIGFuIG92ZXJ3cml0dGVuIGRpc3BsYXkgdmFsdWVcblx0fSBlbHNlIGlmICggKGRpc3BsYXkgPT09IFwibm9uZVwiID8gZGVmYXVsdERpc3BsYXkoIGVsZW0ubm9kZU5hbWUgKSA6IGRpc3BsYXkpID09PSBcImlubGluZVwiICkge1xuXHRcdHN0eWxlLmRpc3BsYXkgPSBkaXNwbGF5O1xuXHR9XG59XG5cbmZ1bmN0aW9uIHByb3BGaWx0ZXIoIHByb3BzLCBzcGVjaWFsRWFzaW5nICkge1xuXHR2YXIgaW5kZXgsIG5hbWUsIGVhc2luZywgdmFsdWUsIGhvb2tzO1xuXG5cdC8vIGNhbWVsQ2FzZSwgc3BlY2lhbEVhc2luZyBhbmQgZXhwYW5kIGNzc0hvb2sgcGFzc1xuXHRmb3IgKCBpbmRleCBpbiBwcm9wcyApIHtcblx0XHRuYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggaW5kZXggKTtcblx0XHRlYXNpbmcgPSBzcGVjaWFsRWFzaW5nWyBuYW1lIF07XG5cdFx0dmFsdWUgPSBwcm9wc1sgaW5kZXggXTtcblx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0ZWFzaW5nID0gdmFsdWVbIDEgXTtcblx0XHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF0gPSB2YWx1ZVsgMCBdO1xuXHRcdH1cblxuXHRcdGlmICggaW5kZXggIT09IG5hbWUgKSB7XG5cdFx0XHRwcm9wc1sgbmFtZSBdID0gdmFsdWU7XG5cdFx0XHRkZWxldGUgcHJvcHNbIGluZGV4IF07XG5cdFx0fVxuXG5cdFx0aG9va3MgPSBqUXVlcnkuY3NzSG9va3NbIG5hbWUgXTtcblx0XHRpZiAoIGhvb2tzICYmIFwiZXhwYW5kXCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWx1ZSA9IGhvb2tzLmV4cGFuZCggdmFsdWUgKTtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgbmFtZSBdO1xuXG5cdFx0XHQvLyBOb3QgcXVpdGUgJC5leHRlbmQsIHRoaXMgd29uJ3Qgb3ZlcndyaXRlIGV4aXN0aW5nIGtleXMuXG5cdFx0XHQvLyBSZXVzaW5nICdpbmRleCcgYmVjYXVzZSB3ZSBoYXZlIHRoZSBjb3JyZWN0IFwibmFtZVwiXG5cdFx0XHRmb3IgKCBpbmRleCBpbiB2YWx1ZSApIHtcblx0XHRcdFx0aWYgKCAhKCBpbmRleCBpbiBwcm9wcyApICkge1xuXHRcdFx0XHRcdHByb3BzWyBpbmRleCBdID0gdmFsdWVbIGluZGV4IF07XG5cdFx0XHRcdFx0c3BlY2lhbEVhc2luZ1sgaW5kZXggXSA9IGVhc2luZztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRzcGVjaWFsRWFzaW5nWyBuYW1lIF0gPSBlYXNpbmc7XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIEFuaW1hdGlvbiggZWxlbSwgcHJvcGVydGllcywgb3B0aW9ucyApIHtcblx0dmFyIHJlc3VsdCxcblx0XHRzdG9wcGVkLFxuXHRcdGluZGV4ID0gMCxcblx0XHRsZW5ndGggPSBhbmltYXRpb25QcmVmaWx0ZXJzLmxlbmd0aCxcblx0XHRkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLmFsd2F5cyggZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBEb24ndCBtYXRjaCBlbGVtIGluIHRoZSA6YW5pbWF0ZWQgc2VsZWN0b3Jcblx0XHRcdGRlbGV0ZSB0aWNrLmVsZW07XG5cdFx0fSksXG5cdFx0dGljayA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBzdG9wcGVkICkge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0XHR2YXIgY3VycmVudFRpbWUgPSBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuXHRcdFx0XHRyZW1haW5pbmcgPSBNYXRoLm1heCggMCwgYW5pbWF0aW9uLnN0YXJ0VGltZSArIGFuaW1hdGlvbi5kdXJhdGlvbiAtIGN1cnJlbnRUaW1lICksXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zXG5cdFx0XHRcdC8vIEFyY2hhaWMgY3Jhc2ggYnVnIHdvbid0IGFsbG93IHVzIHRvIHVzZSBgMSAtICggMC41IHx8IDAgKWAgKCMxMjQ5Nylcblx0XHRcdFx0dGVtcCA9IHJlbWFpbmluZyAvIGFuaW1hdGlvbi5kdXJhdGlvbiB8fCAwLFxuXHRcdFx0XHRwZXJjZW50ID0gMSAtIHRlbXAsXG5cdFx0XHRcdGluZGV4ID0gMCxcblx0XHRcdFx0bGVuZ3RoID0gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGg7XG5cblx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGggOyBpbmRleCsrICkge1xuXHRcdFx0XHRhbmltYXRpb24udHdlZW5zWyBpbmRleCBdLnJ1biggcGVyY2VudCApO1xuXHRcdFx0fVxuXG5cdFx0XHRkZWZlcnJlZC5ub3RpZnlXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgcGVyY2VudCwgcmVtYWluaW5nIF0pO1xuXG5cdFx0XHRpZiAoIHBlcmNlbnQgPCAxICYmIGxlbmd0aCApIHtcblx0XHRcdFx0cmV0dXJuIHJlbWFpbmluZztcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiBdICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGFuaW1hdGlvbiA9IGRlZmVycmVkLnByb21pc2Uoe1xuXHRcdFx0ZWxlbTogZWxlbSxcblx0XHRcdHByb3BzOiBqUXVlcnkuZXh0ZW5kKCB7fSwgcHJvcGVydGllcyApLFxuXHRcdFx0b3B0czogalF1ZXJ5LmV4dGVuZCggdHJ1ZSwgeyBzcGVjaWFsRWFzaW5nOiB7fSB9LCBvcHRpb25zICksXG5cdFx0XHRvcmlnaW5hbFByb3BlcnRpZXM6IHByb3BlcnRpZXMsXG5cdFx0XHRvcmlnaW5hbE9wdGlvbnM6IG9wdGlvbnMsXG5cdFx0XHRzdGFydFRpbWU6IGZ4Tm93IHx8IGNyZWF0ZUZ4Tm93KCksXG5cdFx0XHRkdXJhdGlvbjogb3B0aW9ucy5kdXJhdGlvbixcblx0XHRcdHR3ZWVuczogW10sXG5cdFx0XHRjcmVhdGVUd2VlbjogZnVuY3Rpb24oIHByb3AsIGVuZCApIHtcblx0XHRcdFx0dmFyIHR3ZWVuID0galF1ZXJ5LlR3ZWVuKCBlbGVtLCBhbmltYXRpb24ub3B0cywgcHJvcCwgZW5kLFxuXHRcdFx0XHRcdFx0YW5pbWF0aW9uLm9wdHMuc3BlY2lhbEVhc2luZ1sgcHJvcCBdIHx8IGFuaW1hdGlvbi5vcHRzLmVhc2luZyApO1xuXHRcdFx0XHRhbmltYXRpb24udHdlZW5zLnB1c2goIHR3ZWVuICk7XG5cdFx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHRcdH0sXG5cdFx0XHRzdG9wOiBmdW5jdGlvbiggZ290b0VuZCApIHtcblx0XHRcdFx0dmFyIGluZGV4ID0gMCxcblx0XHRcdFx0XHQvLyBJZiB3ZSBhcmUgZ29pbmcgdG8gdGhlIGVuZCwgd2Ugd2FudCB0byBydW4gYWxsIHRoZSB0d2VlbnNcblx0XHRcdFx0XHQvLyBvdGhlcndpc2Ugd2Ugc2tpcCB0aGlzIHBhcnRcblx0XHRcdFx0XHRsZW5ndGggPSBnb3RvRW5kID8gYW5pbWF0aW9uLnR3ZWVucy5sZW5ndGggOiAwO1xuXHRcdFx0XHRpZiAoIHN0b3BwZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdFx0c3RvcHBlZCA9IHRydWU7XG5cdFx0XHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGggOyBpbmRleCsrICkge1xuXHRcdFx0XHRcdGFuaW1hdGlvbi50d2VlbnNbIGluZGV4IF0ucnVuKCAxICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBSZXNvbHZlIHdoZW4gd2UgcGxheWVkIHRoZSBsYXN0IGZyYW1lOyBvdGhlcndpc2UsIHJlamVjdFxuXHRcdFx0XHRpZiAoIGdvdG9FbmQgKSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGVsZW0sIFsgYW5pbWF0aW9uLCBnb3RvRW5kIF0gKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9XG5cdFx0fSksXG5cdFx0cHJvcHMgPSBhbmltYXRpb24ucHJvcHM7XG5cblx0cHJvcEZpbHRlciggcHJvcHMsIGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmcgKTtcblxuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoIDsgaW5kZXgrKyApIHtcblx0XHRyZXN1bHQgPSBhbmltYXRpb25QcmVmaWx0ZXJzWyBpbmRleCBdLmNhbGwoIGFuaW1hdGlvbiwgZWxlbSwgcHJvcHMsIGFuaW1hdGlvbi5vcHRzICk7XG5cdFx0aWYgKCByZXN1bHQgKSB7XG5cdFx0XHRyZXR1cm4gcmVzdWx0O1xuXHRcdH1cblx0fVxuXG5cdGpRdWVyeS5tYXAoIHByb3BzLCBjcmVhdGVUd2VlbiwgYW5pbWF0aW9uICk7XG5cblx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggYW5pbWF0aW9uLm9wdHMuc3RhcnQgKSApIHtcblx0XHRhbmltYXRpb24ub3B0cy5zdGFydC5jYWxsKCBlbGVtLCBhbmltYXRpb24gKTtcblx0fVxuXG5cdGpRdWVyeS5meC50aW1lcihcblx0XHRqUXVlcnkuZXh0ZW5kKCB0aWNrLCB7XG5cdFx0XHRlbGVtOiBlbGVtLFxuXHRcdFx0YW5pbTogYW5pbWF0aW9uLFxuXHRcdFx0cXVldWU6IGFuaW1hdGlvbi5vcHRzLnF1ZXVlXG5cdFx0fSlcblx0KTtcblxuXHQvLyBhdHRhY2ggY2FsbGJhY2tzIGZyb20gb3B0aW9uc1xuXHRyZXR1cm4gYW5pbWF0aW9uLnByb2dyZXNzKCBhbmltYXRpb24ub3B0cy5wcm9ncmVzcyApXG5cdFx0LmRvbmUoIGFuaW1hdGlvbi5vcHRzLmRvbmUsIGFuaW1hdGlvbi5vcHRzLmNvbXBsZXRlIClcblx0XHQuZmFpbCggYW5pbWF0aW9uLm9wdHMuZmFpbCApXG5cdFx0LmFsd2F5cyggYW5pbWF0aW9uLm9wdHMuYWx3YXlzICk7XG59XG5cbmpRdWVyeS5BbmltYXRpb24gPSBqUXVlcnkuZXh0ZW5kKCBBbmltYXRpb24sIHtcblxuXHR0d2VlbmVyOiBmdW5jdGlvbiggcHJvcHMsIGNhbGxiYWNrICkge1xuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHByb3BzICkgKSB7XG5cdFx0XHRjYWxsYmFjayA9IHByb3BzO1xuXHRcdFx0cHJvcHMgPSBbIFwiKlwiIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdHByb3BzID0gcHJvcHMuc3BsaXQoXCIgXCIpO1xuXHRcdH1cblxuXHRcdHZhciBwcm9wLFxuXHRcdFx0aW5kZXggPSAwLFxuXHRcdFx0bGVuZ3RoID0gcHJvcHMubGVuZ3RoO1xuXG5cdFx0Zm9yICggOyBpbmRleCA8IGxlbmd0aCA7IGluZGV4KysgKSB7XG5cdFx0XHRwcm9wID0gcHJvcHNbIGluZGV4IF07XG5cdFx0XHR0d2VlbmVyc1sgcHJvcCBdID0gdHdlZW5lcnNbIHByb3AgXSB8fCBbXTtcblx0XHRcdHR3ZWVuZXJzWyBwcm9wIF0udW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9XG5cdH0sXG5cblx0cHJlZmlsdGVyOiBmdW5jdGlvbiggY2FsbGJhY2ssIHByZXBlbmQgKSB7XG5cdFx0aWYgKCBwcmVwZW5kICkge1xuXHRcdFx0YW5pbWF0aW9uUHJlZmlsdGVycy51bnNoaWZ0KCBjYWxsYmFjayApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRhbmltYXRpb25QcmVmaWx0ZXJzLnB1c2goIGNhbGxiYWNrICk7XG5cdFx0fVxuXHR9XG59KTtcblxualF1ZXJ5LnNwZWVkID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGZuICkge1xuXHR2YXIgb3B0ID0gc3BlZWQgJiYgdHlwZW9mIHNwZWVkID09PSBcIm9iamVjdFwiID8galF1ZXJ5LmV4dGVuZCgge30sIHNwZWVkICkgOiB7XG5cdFx0Y29tcGxldGU6IGZuIHx8ICFmbiAmJiBlYXNpbmcgfHxcblx0XHRcdGpRdWVyeS5pc0Z1bmN0aW9uKCBzcGVlZCApICYmIHNwZWVkLFxuXHRcdGR1cmF0aW9uOiBzcGVlZCxcblx0XHRlYXNpbmc6IGZuICYmIGVhc2luZyB8fCBlYXNpbmcgJiYgIWpRdWVyeS5pc0Z1bmN0aW9uKCBlYXNpbmcgKSAmJiBlYXNpbmdcblx0fTtcblxuXHRvcHQuZHVyYXRpb24gPSBqUXVlcnkuZngub2ZmID8gMCA6IHR5cGVvZiBvcHQuZHVyYXRpb24gPT09IFwibnVtYmVyXCIgPyBvcHQuZHVyYXRpb24gOlxuXHRcdG9wdC5kdXJhdGlvbiBpbiBqUXVlcnkuZnguc3BlZWRzID8galF1ZXJ5LmZ4LnNwZWVkc1sgb3B0LmR1cmF0aW9uIF0gOiBqUXVlcnkuZnguc3BlZWRzLl9kZWZhdWx0O1xuXG5cdC8vIE5vcm1hbGl6ZSBvcHQucXVldWUgLSB0cnVlL3VuZGVmaW5lZC9udWxsIC0+IFwiZnhcIlxuXHRpZiAoIG9wdC5xdWV1ZSA9PSBudWxsIHx8IG9wdC5xdWV1ZSA9PT0gdHJ1ZSApIHtcblx0XHRvcHQucXVldWUgPSBcImZ4XCI7XG5cdH1cblxuXHQvLyBRdWV1ZWluZ1xuXHRvcHQub2xkID0gb3B0LmNvbXBsZXRlO1xuXG5cdG9wdC5jb21wbGV0ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIG9wdC5vbGQgKSApIHtcblx0XHRcdG9wdC5vbGQuY2FsbCggdGhpcyApO1xuXHRcdH1cblxuXHRcdGlmICggb3B0LnF1ZXVlICkge1xuXHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIG9wdC5xdWV1ZSApO1xuXHRcdH1cblx0fTtcblxuXHRyZXR1cm4gb3B0O1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCh7XG5cdGZhZGVUbzogZnVuY3Rpb24oIHNwZWVkLCB0bywgZWFzaW5nLCBjYWxsYmFjayApIHtcblxuXHRcdC8vIFNob3cgYW55IGhpZGRlbiBlbGVtZW50cyBhZnRlciBzZXR0aW5nIG9wYWNpdHkgdG8gMFxuXHRcdHJldHVybiB0aGlzLmZpbHRlciggaXNIaWRkZW4gKS5jc3MoIFwib3BhY2l0eVwiLCAwICkuc2hvdygpXG5cblx0XHRcdC8vIEFuaW1hdGUgdG8gdGhlIHZhbHVlIHNwZWNpZmllZFxuXHRcdFx0LmVuZCgpLmFuaW1hdGUoeyBvcGFjaXR5OiB0byB9LCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9LFxuXHRhbmltYXRlOiBmdW5jdGlvbiggcHJvcCwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0dmFyIGVtcHR5ID0galF1ZXJ5LmlzRW1wdHlPYmplY3QoIHByb3AgKSxcblx0XHRcdG9wdGFsbCA9IGpRdWVyeS5zcGVlZCggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSxcblx0XHRcdGRvQW5pbWF0aW9uID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdC8vIE9wZXJhdGUgb24gYSBjb3B5IG9mIHByb3Agc28gcGVyLXByb3BlcnR5IGVhc2luZyB3b24ndCBiZSBsb3N0XG5cdFx0XHRcdHZhciBhbmltID0gQW5pbWF0aW9uKCB0aGlzLCBqUXVlcnkuZXh0ZW5kKCB7fSwgcHJvcCApLCBvcHRhbGwgKTtcblxuXHRcdFx0XHQvLyBFbXB0eSBhbmltYXRpb25zLCBvciBmaW5pc2hpbmcgcmVzb2x2ZXMgaW1tZWRpYXRlbHlcblx0XHRcdFx0aWYgKCBlbXB0eSB8fCBkYXRhX3ByaXYuZ2V0KCB0aGlzLCBcImZpbmlzaFwiICkgKSB7XG5cdFx0XHRcdFx0YW5pbS5zdG9wKCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cdFx0XHRkb0FuaW1hdGlvbi5maW5pc2ggPSBkb0FuaW1hdGlvbjtcblxuXHRcdHJldHVybiBlbXB0eSB8fCBvcHRhbGwucXVldWUgPT09IGZhbHNlID9cblx0XHRcdHRoaXMuZWFjaCggZG9BbmltYXRpb24gKSA6XG5cdFx0XHR0aGlzLnF1ZXVlKCBvcHRhbGwucXVldWUsIGRvQW5pbWF0aW9uICk7XG5cdH0sXG5cdHN0b3A6IGZ1bmN0aW9uKCB0eXBlLCBjbGVhclF1ZXVlLCBnb3RvRW5kICkge1xuXHRcdHZhciBzdG9wUXVldWUgPSBmdW5jdGlvbiggaG9va3MgKSB7XG5cdFx0XHR2YXIgc3RvcCA9IGhvb2tzLnN0b3A7XG5cdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcblx0XHRcdHN0b3AoIGdvdG9FbmQgKTtcblx0XHR9O1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGdvdG9FbmQgPSBjbGVhclF1ZXVlO1xuXHRcdFx0Y2xlYXJRdWV1ZSA9IHR5cGU7XG5cdFx0XHR0eXBlID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHRpZiAoIGNsZWFyUXVldWUgJiYgdHlwZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHR0aGlzLnF1ZXVlKCB0eXBlIHx8IFwiZnhcIiwgW10gKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIGRlcXVldWUgPSB0cnVlLFxuXHRcdFx0XHRpbmRleCA9IHR5cGUgIT0gbnVsbCAmJiB0eXBlICsgXCJxdWV1ZUhvb2tzXCIsXG5cdFx0XHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG5cdFx0XHRcdGRhdGEgPSBkYXRhX3ByaXYuZ2V0KCB0aGlzICk7XG5cblx0XHRcdGlmICggaW5kZXggKSB7XG5cdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgKSB7XG5cdFx0XHRcdFx0c3RvcFF1ZXVlKCBkYXRhWyBpbmRleCBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoIGluZGV4IGluIGRhdGEgKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhWyBpbmRleCBdICYmIGRhdGFbIGluZGV4IF0uc3RvcCAmJiBycnVuLnRlc3QoIGluZGV4ICkgKSB7XG5cdFx0XHRcdFx0XHRzdG9wUXVldWUoIGRhdGFbIGluZGV4IF0gKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Zm9yICggaW5kZXggPSB0aW1lcnMubGVuZ3RoOyBpbmRleC0tOyApIHtcblx0XHRcdFx0aWYgKCB0aW1lcnNbIGluZGV4IF0uZWxlbSA9PT0gdGhpcyAmJiAodHlwZSA9PSBudWxsIHx8IHRpbWVyc1sgaW5kZXggXS5xdWV1ZSA9PT0gdHlwZSkgKSB7XG5cdFx0XHRcdFx0dGltZXJzWyBpbmRleCBdLmFuaW0uc3RvcCggZ290b0VuZCApO1xuXHRcdFx0XHRcdGRlcXVldWUgPSBmYWxzZTtcblx0XHRcdFx0XHR0aW1lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXJ0IHRoZSBuZXh0IGluIHRoZSBxdWV1ZSBpZiB0aGUgbGFzdCBzdGVwIHdhc24ndCBmb3JjZWQuXG5cdFx0XHQvLyBUaW1lcnMgY3VycmVudGx5IHdpbGwgY2FsbCB0aGVpciBjb21wbGV0ZSBjYWxsYmFja3MsIHdoaWNoXG5cdFx0XHQvLyB3aWxsIGRlcXVldWUgYnV0IG9ubHkgaWYgdGhleSB3ZXJlIGdvdG9FbmQuXG5cdFx0XHRpZiAoIGRlcXVldWUgfHwgIWdvdG9FbmQgKSB7XG5cdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cdGZpbmlzaDogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0aWYgKCB0eXBlICE9PSBmYWxzZSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpbmRleCxcblx0XHRcdFx0ZGF0YSA9IGRhdGFfcHJpdi5nZXQoIHRoaXMgKSxcblx0XHRcdFx0cXVldWUgPSBkYXRhWyB0eXBlICsgXCJxdWV1ZVwiIF0sXG5cdFx0XHRcdGhvb2tzID0gZGF0YVsgdHlwZSArIFwicXVldWVIb29rc1wiIF0sXG5cdFx0XHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnMsXG5cdFx0XHRcdGxlbmd0aCA9IHF1ZXVlID8gcXVldWUubGVuZ3RoIDogMDtcblxuXHRcdFx0Ly8gRW5hYmxlIGZpbmlzaGluZyBmbGFnIG9uIHByaXZhdGUgZGF0YVxuXHRcdFx0ZGF0YS5maW5pc2ggPSB0cnVlO1xuXG5cdFx0XHQvLyBFbXB0eSB0aGUgcXVldWUgZmlyc3Rcblx0XHRcdGpRdWVyeS5xdWV1ZSggdGhpcywgdHlwZSwgW10gKTtcblxuXHRcdFx0aWYgKCBob29rcyAmJiBob29rcy5zdG9wICkge1xuXHRcdFx0XHRob29rcy5zdG9wLmNhbGwoIHRoaXMsIHRydWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTG9vayBmb3IgYW55IGFjdGl2ZSBhbmltYXRpb25zLCBhbmQgZmluaXNoIHRoZW1cblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiYgdGltZXJzWyBpbmRleCBdLnF1ZXVlID09PSB0eXBlICkge1xuXHRcdFx0XHRcdHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIHRydWUgKTtcblx0XHRcdFx0XHR0aW1lcnMuc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvb2sgZm9yIGFueSBhbmltYXRpb25zIGluIHRoZSBvbGQgcXVldWUgYW5kIGZpbmlzaCB0aGVtXG5cdFx0XHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdFx0XHRpZiAoIHF1ZXVlWyBpbmRleCBdICYmIHF1ZXVlWyBpbmRleCBdLmZpbmlzaCApIHtcblx0XHRcdFx0XHRxdWV1ZVsgaW5kZXggXS5maW5pc2guY2FsbCggdGhpcyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFR1cm4gb2ZmIGZpbmlzaGluZyBmbGFnXG5cdFx0XHRkZWxldGUgZGF0YS5maW5pc2g7XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5qUXVlcnkuZWFjaChbIFwidG9nZ2xlXCIsIFwic2hvd1wiLCBcImhpZGVcIiBdLCBmdW5jdGlvbiggaSwgbmFtZSApIHtcblx0dmFyIGNzc0ZuID0galF1ZXJ5LmZuWyBuYW1lIF07XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBzcGVlZCA9PSBudWxsIHx8IHR5cGVvZiBzcGVlZCA9PT0gXCJib29sZWFuXCIgP1xuXHRcdFx0Y3NzRm4uYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApIDpcblx0XHRcdHRoaXMuYW5pbWF0ZSggZ2VuRngoIG5hbWUsIHRydWUgKSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcblx0fTtcbn0pO1xuXG4vLyBHZW5lcmF0ZSBzaG9ydGN1dHMgZm9yIGN1c3RvbSBhbmltYXRpb25zXG5qUXVlcnkuZWFjaCh7XG5cdHNsaWRlRG93bjogZ2VuRngoXCJzaG93XCIpLFxuXHRzbGlkZVVwOiBnZW5GeChcImhpZGVcIiksXG5cdHNsaWRlVG9nZ2xlOiBnZW5GeChcInRvZ2dsZVwiKSxcblx0ZmFkZUluOiB7IG9wYWNpdHk6IFwic2hvd1wiIH0sXG5cdGZhZGVPdXQ6IHsgb3BhY2l0eTogXCJoaWRlXCIgfSxcblx0ZmFkZVRvZ2dsZTogeyBvcGFjaXR5OiBcInRvZ2dsZVwiIH1cbn0sIGZ1bmN0aW9uKCBuYW1lLCBwcm9wcyApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIHRoaXMuYW5pbWF0ZSggcHJvcHMsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59KTtcblxualF1ZXJ5LnRpbWVycyA9IFtdO1xualF1ZXJ5LmZ4LnRpY2sgPSBmdW5jdGlvbigpIHtcblx0dmFyIHRpbWVyLFxuXHRcdGkgPSAwLFxuXHRcdHRpbWVycyA9IGpRdWVyeS50aW1lcnM7XG5cblx0ZnhOb3cgPSBqUXVlcnkubm93KCk7XG5cblx0Zm9yICggOyBpIDwgdGltZXJzLmxlbmd0aDsgaSsrICkge1xuXHRcdHRpbWVyID0gdGltZXJzWyBpIF07XG5cdFx0Ly8gQ2hlY2tzIHRoZSB0aW1lciBoYXMgbm90IGFscmVhZHkgYmVlbiByZW1vdmVkXG5cdFx0aWYgKCAhdGltZXIoKSAmJiB0aW1lcnNbIGkgXSA9PT0gdGltZXIgKSB7XG5cdFx0XHR0aW1lcnMuc3BsaWNlKCBpLS0sIDEgKTtcblx0XHR9XG5cdH1cblxuXHRpZiAoICF0aW1lcnMubGVuZ3RoICkge1xuXHRcdGpRdWVyeS5meC5zdG9wKCk7XG5cdH1cblx0ZnhOb3cgPSB1bmRlZmluZWQ7XG59O1xuXG5qUXVlcnkuZngudGltZXIgPSBmdW5jdGlvbiggdGltZXIgKSB7XG5cdGpRdWVyeS50aW1lcnMucHVzaCggdGltZXIgKTtcblx0aWYgKCB0aW1lcigpICkge1xuXHRcdGpRdWVyeS5meC5zdGFydCgpO1xuXHR9IGVsc2Uge1xuXHRcdGpRdWVyeS50aW1lcnMucG9wKCk7XG5cdH1cbn07XG5cbmpRdWVyeS5meC5pbnRlcnZhbCA9IDEzO1xuXG5qUXVlcnkuZnguc3RhcnQgPSBmdW5jdGlvbigpIHtcblx0aWYgKCAhdGltZXJJZCApIHtcblx0XHR0aW1lcklkID0gc2V0SW50ZXJ2YWwoIGpRdWVyeS5meC50aWNrLCBqUXVlcnkuZnguaW50ZXJ2YWwgKTtcblx0fVxufTtcblxualF1ZXJ5LmZ4LnN0b3AgPSBmdW5jdGlvbigpIHtcblx0Y2xlYXJJbnRlcnZhbCggdGltZXJJZCApO1xuXHR0aW1lcklkID0gbnVsbDtcbn07XG5cbmpRdWVyeS5meC5zcGVlZHMgPSB7XG5cdHNsb3c6IDYwMCxcblx0ZmFzdDogMjAwLFxuXHQvLyBEZWZhdWx0IHNwZWVkXG5cdF9kZWZhdWx0OiA0MDBcbn07XG5cblxuLy8gQmFzZWQgb2ZmIG9mIHRoZSBwbHVnaW4gYnkgQ2xpbnQgSGVsZmVycywgd2l0aCBwZXJtaXNzaW9uLlxuLy8gaHR0cDovL2JsaW5kc2lnbmFscy5jb20vaW5kZXgucGhwLzIwMDkvMDcvanF1ZXJ5LWRlbGF5L1xualF1ZXJ5LmZuLmRlbGF5ID0gZnVuY3Rpb24oIHRpbWUsIHR5cGUgKSB7XG5cdHRpbWUgPSBqUXVlcnkuZnggPyBqUXVlcnkuZnguc3BlZWRzWyB0aW1lIF0gfHwgdGltZSA6IHRpbWU7XG5cdHR5cGUgPSB0eXBlIHx8IFwiZnhcIjtcblxuXHRyZXR1cm4gdGhpcy5xdWV1ZSggdHlwZSwgZnVuY3Rpb24oIG5leHQsIGhvb2tzICkge1xuXHRcdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dCggbmV4dCwgdGltZSApO1xuXHRcdGhvb2tzLnN0b3AgPSBmdW5jdGlvbigpIHtcblx0XHRcdGNsZWFyVGltZW91dCggdGltZW91dCApO1xuXHRcdH07XG5cdH0pO1xufTtcblxuXG4oZnVuY3Rpb24oKSB7XG5cdHZhciBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiaW5wdXRcIiApLFxuXHRcdHNlbGVjdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwic2VsZWN0XCIgKSxcblx0XHRvcHQgPSBzZWxlY3QuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwib3B0aW9uXCIgKSApO1xuXG5cdGlucHV0LnR5cGUgPSBcImNoZWNrYm94XCI7XG5cblx0Ly8gU3VwcG9ydDogaU9TPD01LjEsIEFuZHJvaWQ8PTQuMitcblx0Ly8gRGVmYXVsdCB2YWx1ZSBmb3IgYSBjaGVja2JveCBzaG91bGQgYmUgXCJvblwiXG5cdHN1cHBvcnQuY2hlY2tPbiA9IGlucHV0LnZhbHVlICE9PSBcIlwiO1xuXG5cdC8vIFN1cHBvcnQ6IElFPD0xMStcblx0Ly8gTXVzdCBhY2Nlc3Mgc2VsZWN0ZWRJbmRleCB0byBtYWtlIGRlZmF1bHQgb3B0aW9ucyBzZWxlY3Rcblx0c3VwcG9ydC5vcHRTZWxlY3RlZCA9IG9wdC5zZWxlY3RlZDtcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkPD0yLjNcblx0Ly8gT3B0aW9ucyBpbnNpZGUgZGlzYWJsZWQgc2VsZWN0cyBhcmUgaW5jb3JyZWN0bHkgbWFya2VkIGFzIGRpc2FibGVkXG5cdHNlbGVjdC5kaXNhYmxlZCA9IHRydWU7XG5cdHN1cHBvcnQub3B0RGlzYWJsZWQgPSAhb3B0LmRpc2FibGVkO1xuXG5cdC8vIFN1cHBvcnQ6IElFPD0xMStcblx0Ly8gQW4gaW5wdXQgbG9zZXMgaXRzIHZhbHVlIGFmdGVyIGJlY29taW5nIGEgcmFkaW9cblx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKTtcblx0aW5wdXQudmFsdWUgPSBcInRcIjtcblx0aW5wdXQudHlwZSA9IFwicmFkaW9cIjtcblx0c3VwcG9ydC5yYWRpb1ZhbHVlID0gaW5wdXQudmFsdWUgPT09IFwidFwiO1xufSkoKTtcblxuXG52YXIgbm9kZUhvb2ssIGJvb2xIb29rLFxuXHRhdHRySGFuZGxlID0galF1ZXJ5LmV4cHIuYXR0ckhhbmRsZTtcblxualF1ZXJ5LmZuLmV4dGVuZCh7XG5cdGF0dHI6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkuYXR0ciwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCB0aGlzLCBuYW1lICk7XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5qUXVlcnkuZXh0ZW5kKHtcblx0YXR0cjogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciBob29rcywgcmV0LFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gZG9uJ3QgZ2V0L3NldCBhdHRyaWJ1dGVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggIWVsZW0gfHwgblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRmFsbGJhY2sgdG8gcHJvcCB3aGVuIGF0dHJpYnV0ZXMgYXJlIG5vdCBzdXBwb3J0ZWRcblx0XHRpZiAoIHR5cGVvZiBlbGVtLmdldEF0dHJpYnV0ZSA9PT0gc3RydW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5wcm9wKCBlbGVtLCBuYW1lLCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdC8vIEFsbCBhdHRyaWJ1dGVzIGFyZSBsb3dlcmNhc2Vcblx0XHQvLyBHcmFiIG5lY2Vzc2FyeSBob29rIGlmIG9uZSBpcyBkZWZpbmVkXG5cdFx0aWYgKCBuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICkgKSB7XG5cdFx0XHRuYW1lID0gbmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0aG9va3MgPSBqUXVlcnkuYXR0ckhvb2tzWyBuYW1lIF0gfHxcblx0XHRcdFx0KCBqUXVlcnkuZXhwci5tYXRjaC5ib29sLnRlc3QoIG5hbWUgKSA/IGJvb2xIb29rIDogbm9kZUhvb2sgKTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cblx0XHRcdGlmICggdmFsdWUgPT09IG51bGwgKSB7XG5cdFx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIG5hbWUgKSkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIG5hbWUsIHZhbHVlICsgXCJcIiApO1xuXHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHR9IGVsc2UgaWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoIGVsZW0sIG5hbWUgKSkgIT09IG51bGwgKSB7XG5cdFx0XHRyZXR1cm4gcmV0O1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldCA9IGpRdWVyeS5maW5kLmF0dHIoIGVsZW0sIG5hbWUgKTtcblxuXHRcdFx0Ly8gTm9uLWV4aXN0ZW50IGF0dHJpYnV0ZXMgcmV0dXJuIG51bGwsIHdlIG5vcm1hbGl6ZSB0byB1bmRlZmluZWRcblx0XHRcdHJldHVybiByZXQgPT0gbnVsbCA/XG5cdFx0XHRcdHVuZGVmaW5lZCA6XG5cdFx0XHRcdHJldDtcblx0XHR9XG5cdH0sXG5cblx0cmVtb3ZlQXR0cjogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdHZhciBuYW1lLCBwcm9wTmFtZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0YXR0ck5hbWVzID0gdmFsdWUgJiYgdmFsdWUubWF0Y2goIHJub3R3aGl0ZSApO1xuXG5cdFx0aWYgKCBhdHRyTmFtZXMgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdHdoaWxlICggKG5hbWUgPSBhdHRyTmFtZXNbaSsrXSkgKSB7XG5cdFx0XHRcdHByb3BOYW1lID0galF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lO1xuXG5cdFx0XHRcdC8vIEJvb2xlYW4gYXR0cmlidXRlcyBnZXQgc3BlY2lhbCB0cmVhdG1lbnQgKCMxMDg3MClcblx0XHRcdFx0aWYgKCBqUXVlcnkuZXhwci5tYXRjaC5ib29sLnRlc3QoIG5hbWUgKSApIHtcblx0XHRcdFx0XHQvLyBTZXQgY29ycmVzcG9uZGluZyBwcm9wZXJ0eSB0byBmYWxzZVxuXHRcdFx0XHRcdGVsZW1bIHByb3BOYW1lIF0gPSBmYWxzZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGVsZW0ucmVtb3ZlQXR0cmlidXRlKCBuYW1lICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdGF0dHJIb29rczoge1xuXHRcdHR5cGU6IHtcblx0XHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdFx0XHRpZiAoICFzdXBwb3J0LnJhZGlvVmFsdWUgJiYgdmFsdWUgPT09IFwicmFkaW9cIiAmJlxuXHRcdFx0XHRcdGpRdWVyeS5ub2RlTmFtZSggZWxlbSwgXCJpbnB1dFwiICkgKSB7XG5cdFx0XHRcdFx0dmFyIHZhbCA9IGVsZW0udmFsdWU7XG5cdFx0XHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIFwidHlwZVwiLCB2YWx1ZSApO1xuXHRcdFx0XHRcdGlmICggdmFsICkge1xuXHRcdFx0XHRcdFx0ZWxlbS52YWx1ZSA9IHZhbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KTtcblxuLy8gSG9va3MgZm9yIGJvb2xlYW4gYXR0cmlidXRlc1xuYm9vbEhvb2sgPSB7XG5cdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlLCBuYW1lICkge1xuXHRcdGlmICggdmFsdWUgPT09IGZhbHNlICkge1xuXHRcdFx0Ly8gUmVtb3ZlIGJvb2xlYW4gYXR0cmlidXRlcyB3aGVuIHNldCB0byBmYWxzZVxuXHRcdFx0alF1ZXJ5LnJlbW92ZUF0dHIoIGVsZW0sIG5hbWUgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZWxlbS5zZXRBdHRyaWJ1dGUoIG5hbWUsIG5hbWUgKTtcblx0XHR9XG5cdFx0cmV0dXJuIG5hbWU7XG5cdH1cbn07XG5qUXVlcnkuZWFjaCggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC5zb3VyY2UubWF0Y2goIC9cXHcrL2cgKSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdHZhciBnZXR0ZXIgPSBhdHRySGFuZGxlWyBuYW1lIF0gfHwgalF1ZXJ5LmZpbmQuYXR0cjtcblxuXHRhdHRySGFuZGxlWyBuYW1lIF0gPSBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0dmFyIHJldCwgaGFuZGxlO1xuXHRcdGlmICggIWlzWE1MICkge1xuXHRcdFx0Ly8gQXZvaWQgYW4gaW5maW5pdGUgbG9vcCBieSB0ZW1wb3JhcmlseSByZW1vdmluZyB0aGlzIGZ1bmN0aW9uIGZyb20gdGhlIGdldHRlclxuXHRcdFx0aGFuZGxlID0gYXR0ckhhbmRsZVsgbmFtZSBdO1xuXHRcdFx0YXR0ckhhbmRsZVsgbmFtZSBdID0gcmV0O1xuXHRcdFx0cmV0ID0gZ2V0dGVyKCBlbGVtLCBuYW1lLCBpc1hNTCApICE9IG51bGwgP1xuXHRcdFx0XHRuYW1lLnRvTG93ZXJDYXNlKCkgOlxuXHRcdFx0XHRudWxsO1xuXHRcdFx0YXR0ckhhbmRsZVsgbmFtZSBdID0gaGFuZGxlO1xuXHRcdH1cblx0XHRyZXR1cm4gcmV0O1xuXHR9O1xufSk7XG5cblxuXG5cbnZhciByZm9jdXNhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaTtcblxualF1ZXJ5LmZuLmV4dGVuZCh7XG5cdHByb3A6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBqUXVlcnkucHJvcCwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cblx0cmVtb3ZlUHJvcDogZnVuY3Rpb24oIG5hbWUgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGRlbGV0ZSB0aGlzWyBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWUgXTtcblx0XHR9KTtcblx0fVxufSk7XG5cbmpRdWVyeS5leHRlbmQoe1xuXHRwcm9wRml4OiB7XG5cdFx0XCJmb3JcIjogXCJodG1sRm9yXCIsXG5cdFx0XCJjbGFzc1wiOiBcImNsYXNzTmFtZVwiXG5cdH0sXG5cblx0cHJvcDogZnVuY3Rpb24oIGVsZW0sIG5hbWUsIHZhbHVlICkge1xuXHRcdHZhciByZXQsIGhvb2tzLCBub3R4bWwsXG5cdFx0XHRuVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0XHQvLyBEb24ndCBnZXQvc2V0IHByb3BlcnRpZXMgb24gdGV4dCwgY29tbWVudCBhbmQgYXR0cmlidXRlIG5vZGVzXG5cdFx0aWYgKCAhZWxlbSB8fCBuVHlwZSA9PT0gMyB8fCBuVHlwZSA9PT0gOCB8fCBuVHlwZSA9PT0gMiApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRub3R4bWwgPSBuVHlwZSAhPT0gMSB8fCAhalF1ZXJ5LmlzWE1MRG9jKCBlbGVtICk7XG5cblx0XHRpZiAoIG5vdHhtbCApIHtcblx0XHRcdC8vIEZpeCBuYW1lIGFuZCBhdHRhY2ggaG9va3Ncblx0XHRcdG5hbWUgPSBqUXVlcnkucHJvcEZpeFsgbmFtZSBdIHx8IG5hbWU7XG5cdFx0XHRob29rcyA9IGpRdWVyeS5wcm9wSG9va3NbIG5hbWUgXTtcblx0XHR9XG5cblx0XHRpZiAoIHZhbHVlICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRyZXR1cm4gaG9va3MgJiYgXCJzZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3Muc2V0KCBlbGVtLCB2YWx1ZSwgbmFtZSApKSAhPT0gdW5kZWZpbmVkID9cblx0XHRcdFx0cmV0IDpcblx0XHRcdFx0KCBlbGVtWyBuYW1lIF0gPSB2YWx1ZSApO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdHJldHVybiBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoIGVsZW0sIG5hbWUgKSkgIT09IG51bGwgP1xuXHRcdFx0XHRyZXQgOlxuXHRcdFx0XHRlbGVtWyBuYW1lIF07XG5cdFx0fVxuXHR9LFxuXG5cdHByb3BIb29rczoge1xuXHRcdHRhYkluZGV4OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5oYXNBdHRyaWJ1dGUoIFwidGFiaW5kZXhcIiApIHx8IHJmb2N1c2FibGUudGVzdCggZWxlbS5ub2RlTmFtZSApIHx8IGVsZW0uaHJlZiA/XG5cdFx0XHRcdFx0ZWxlbS50YWJJbmRleCA6XG5cdFx0XHRcdFx0LTE7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KTtcblxuaWYgKCAhc3VwcG9ydC5vcHRTZWxlY3RlZCApIHtcblx0alF1ZXJ5LnByb3BIb29rcy5zZWxlY3RlZCA9IHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIHBhcmVudCA9IGVsZW0ucGFyZW50Tm9kZTtcblx0XHRcdGlmICggcGFyZW50ICYmIHBhcmVudC5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRwYXJlbnQucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG51bGw7XG5cdFx0fVxuXHR9O1xufVxuXG5qUXVlcnkuZWFjaChbXG5cdFwidGFiSW5kZXhcIixcblx0XCJyZWFkT25seVwiLFxuXHRcIm1heExlbmd0aFwiLFxuXHRcImNlbGxTcGFjaW5nXCIsXG5cdFwiY2VsbFBhZGRpbmdcIixcblx0XCJyb3dTcGFuXCIsXG5cdFwiY29sU3BhblwiLFxuXHRcInVzZU1hcFwiLFxuXHRcImZyYW1lQm9yZGVyXCIsXG5cdFwiY29udGVudEVkaXRhYmxlXCJcbl0sIGZ1bmN0aW9uKCkge1xuXHRqUXVlcnkucHJvcEZpeFsgdGhpcy50b0xvd2VyQ2FzZSgpIF0gPSB0aGlzO1xufSk7XG5cblxuXG5cbnZhciByY2xhc3MgPSAvW1xcdFxcclxcblxcZl0vZztcblxualF1ZXJ5LmZuLmV4dGVuZCh7XG5cdGFkZENsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzZXMsIGVsZW0sIGN1ciwgY2xhenosIGosIGZpbmFsVmFsdWUsXG5cdFx0XHRwcm9jZWVkID0gdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmIHZhbHVlLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsZW4gPSB0aGlzLmxlbmd0aDtcblxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCBqICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5hZGRDbGFzcyggdmFsdWUuY2FsbCggdGhpcywgaiwgdGhpcy5jbGFzc05hbWUgKSApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKCBwcm9jZWVkICkge1xuXHRcdFx0Ly8gVGhlIGRpc2p1bmN0aW9uIGhlcmUgaXMgZm9yIGJldHRlciBjb21wcmVzc2liaWxpdHkgKHNlZSByZW1vdmVDbGFzcylcblx0XHRcdGNsYXNzZXMgPSAoIHZhbHVlIHx8IFwiXCIgKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgW107XG5cblx0XHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0XHRlbGVtID0gdGhpc1sgaSBdO1xuXHRcdFx0XHRjdXIgPSBlbGVtLm5vZGVUeXBlID09PSAxICYmICggZWxlbS5jbGFzc05hbWUgP1xuXHRcdFx0XHRcdCggXCIgXCIgKyBlbGVtLmNsYXNzTmFtZSArIFwiIFwiICkucmVwbGFjZSggcmNsYXNzLCBcIiBcIiApIDpcblx0XHRcdFx0XHRcIiBcIlxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmICggY3VyICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXHRcdFx0XHRcdHdoaWxlICggKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSApIHtcblx0XHRcdFx0XHRcdGlmICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApIDwgMCApIHtcblx0XHRcdFx0XHRcdFx0Y3VyICs9IGNsYXp6ICsgXCIgXCI7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gb25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0galF1ZXJ5LnRyaW0oIGN1ciApO1xuXHRcdFx0XHRcdGlmICggZWxlbS5jbGFzc05hbWUgIT09IGZpbmFsVmFsdWUgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLmNsYXNzTmFtZSA9IGZpbmFsVmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0cmVtb3ZlQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgY2xhc3NlcywgZWxlbSwgY3VyLCBjbGF6eiwgaiwgZmluYWxWYWx1ZSxcblx0XHRcdHByb2NlZWQgPSBhcmd1bWVudHMubGVuZ3RoID09PSAwIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0bGVuID0gdGhpcy5sZW5ndGg7XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiggaiApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucmVtb3ZlQ2xhc3MoIHZhbHVlLmNhbGwoIHRoaXMsIGosIHRoaXMuY2xhc3NOYW1lICkgKTtcblx0XHRcdH0pO1xuXHRcdH1cblx0XHRpZiAoIHByb2NlZWQgKSB7XG5cdFx0XHRjbGFzc2VzID0gKCB2YWx1ZSB8fCBcIlwiICkubWF0Y2goIHJub3R3aGl0ZSApIHx8IFtdO1xuXG5cdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0ZWxlbSA9IHRoaXNbIGkgXTtcblx0XHRcdFx0Ly8gVGhpcyBleHByZXNzaW9uIGlzIGhlcmUgZm9yIGJldHRlciBjb21wcmVzc2liaWxpdHkgKHNlZSBhZGRDbGFzcylcblx0XHRcdFx0Y3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoIGVsZW0uY2xhc3NOYW1lID9cblx0XHRcdFx0XHQoIFwiIFwiICsgZWxlbS5jbGFzc05hbWUgKyBcIiBcIiApLnJlcGxhY2UoIHJjbGFzcywgXCIgXCIgKSA6XG5cdFx0XHRcdFx0XCJcIlxuXHRcdFx0XHQpO1xuXG5cdFx0XHRcdGlmICggY3VyICkge1xuXHRcdFx0XHRcdGogPSAwO1xuXHRcdFx0XHRcdHdoaWxlICggKGNsYXp6ID0gY2xhc3Nlc1tqKytdKSApIHtcblx0XHRcdFx0XHRcdC8vIFJlbW92ZSAqYWxsKiBpbnN0YW5jZXNcblx0XHRcdFx0XHRcdHdoaWxlICggY3VyLmluZGV4T2YoIFwiIFwiICsgY2xhenogKyBcIiBcIiApID49IDAgKSB7XG5cdFx0XHRcdFx0XHRcdGN1ciA9IGN1ci5yZXBsYWNlKCBcIiBcIiArIGNsYXp6ICsgXCIgXCIsIFwiIFwiICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gT25seSBhc3NpZ24gaWYgZGlmZmVyZW50IHRvIGF2b2lkIHVubmVlZGVkIHJlbmRlcmluZy5cblx0XHRcdFx0XHRmaW5hbFZhbHVlID0gdmFsdWUgPyBqUXVlcnkudHJpbSggY3VyICkgOiBcIlwiO1xuXHRcdFx0XHRcdGlmICggZWxlbS5jbGFzc05hbWUgIT09IGZpbmFsVmFsdWUgKSB7XG5cdFx0XHRcdFx0XHRlbGVtLmNsYXNzTmFtZSA9IGZpbmFsVmFsdWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0dG9nZ2xlQ2xhc3M6IGZ1bmN0aW9uKCB2YWx1ZSwgc3RhdGVWYWwgKSB7XG5cdFx0dmFyIHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cblx0XHRpZiAoIHR5cGVvZiBzdGF0ZVZhbCA9PT0gXCJib29sZWFuXCIgJiYgdHlwZSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiBzdGF0ZVZhbCA/IHRoaXMuYWRkQ2xhc3MoIHZhbHVlICkgOiB0aGlzLnJlbW92ZUNsYXNzKCB2YWx1ZSApO1xuXHRcdH1cblxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS50b2dnbGVDbGFzcyggdmFsdWUuY2FsbCh0aGlzLCBpLCB0aGlzLmNsYXNzTmFtZSwgc3RhdGVWYWwpLCBzdGF0ZVZhbCApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICggdHlwZSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0Ly8gVG9nZ2xlIGluZGl2aWR1YWwgY2xhc3MgbmFtZXNcblx0XHRcdFx0dmFyIGNsYXNzTmFtZSxcblx0XHRcdFx0XHRpID0gMCxcblx0XHRcdFx0XHRzZWxmID0galF1ZXJ5KCB0aGlzICksXG5cdFx0XHRcdFx0Y2xhc3NOYW1lcyA9IHZhbHVlLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbXTtcblxuXHRcdFx0XHR3aGlsZSAoIChjbGFzc05hbWUgPSBjbGFzc05hbWVzWyBpKysgXSkgKSB7XG5cdFx0XHRcdFx0Ly8gQ2hlY2sgZWFjaCBjbGFzc05hbWUgZ2l2ZW4sIHNwYWNlIHNlcGFyYXRlZCBsaXN0XG5cdFx0XHRcdFx0aWYgKCBzZWxmLmhhc0NsYXNzKCBjbGFzc05hbWUgKSApIHtcblx0XHRcdFx0XHRcdHNlbGYucmVtb3ZlQ2xhc3MoIGNsYXNzTmFtZSApO1xuXHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRzZWxmLmFkZENsYXNzKCBjbGFzc05hbWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gVG9nZ2xlIHdob2xlIGNsYXNzIG5hbWVcblx0XHRcdH0gZWxzZSBpZiAoIHR5cGUgPT09IHN0cnVuZGVmaW5lZCB8fCB0eXBlID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRcdFx0aWYgKCB0aGlzLmNsYXNzTmFtZSApIHtcblx0XHRcdFx0XHQvLyBzdG9yZSBjbGFzc05hbWUgaWYgc2V0XG5cdFx0XHRcdFx0ZGF0YV9wcml2LnNldCggdGhpcywgXCJfX2NsYXNzTmFtZV9fXCIsIHRoaXMuY2xhc3NOYW1lICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBJZiB0aGUgZWxlbWVudCBoYXMgYSBjbGFzcyBuYW1lIG9yIGlmIHdlJ3JlIHBhc3NlZCBgZmFsc2VgLFxuXHRcdFx0XHQvLyB0aGVuIHJlbW92ZSB0aGUgd2hvbGUgY2xhc3NuYW1lIChpZiB0aGVyZSB3YXMgb25lLCB0aGUgYWJvdmUgc2F2ZWQgaXQpLlxuXHRcdFx0XHQvLyBPdGhlcndpc2UgYnJpbmcgYmFjayB3aGF0ZXZlciB3YXMgcHJldmlvdXNseSBzYXZlZCAoaWYgYW55dGhpbmcpLFxuXHRcdFx0XHQvLyBmYWxsaW5nIGJhY2sgdG8gdGhlIGVtcHR5IHN0cmluZyBpZiBub3RoaW5nIHdhcyBzdG9yZWQuXG5cdFx0XHRcdHRoaXMuY2xhc3NOYW1lID0gdGhpcy5jbGFzc05hbWUgfHwgdmFsdWUgPT09IGZhbHNlID8gXCJcIiA6IGRhdGFfcHJpdi5nZXQoIHRoaXMsIFwiX19jbGFzc05hbWVfX1wiICkgfHwgXCJcIjtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblxuXHRoYXNDbGFzczogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBjbGFzc05hbWUgPSBcIiBcIiArIHNlbGVjdG9yICsgXCIgXCIsXG5cdFx0XHRpID0gMCxcblx0XHRcdGwgPSB0aGlzLmxlbmd0aDtcblx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRpZiAoIHRoaXNbaV0ubm9kZVR5cGUgPT09IDEgJiYgKFwiIFwiICsgdGhpc1tpXS5jbGFzc05hbWUgKyBcIiBcIikucmVwbGFjZShyY2xhc3MsIFwiIFwiKS5pbmRleE9mKCBjbGFzc05hbWUgKSA+PSAwICkge1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cbn0pO1xuXG5cblxuXG52YXIgcnJldHVybiA9IC9cXHIvZztcblxualF1ZXJ5LmZuLmV4dGVuZCh7XG5cdHZhbDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBob29rcywgcmV0LCBpc0Z1bmN0aW9uLFxuXHRcdFx0ZWxlbSA9IHRoaXNbMF07XG5cblx0XHRpZiAoICFhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0aWYgKCBlbGVtICkge1xuXHRcdFx0XHRob29rcyA9IGpRdWVyeS52YWxIb29rc1sgZWxlbS50eXBlIF0gfHwgalF1ZXJ5LnZhbEhvb2tzWyBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgXTtcblxuXHRcdFx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLmdldCggZWxlbSwgXCJ2YWx1ZVwiICkpICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldCA9IGVsZW0udmFsdWU7XG5cblx0XHRcdFx0cmV0dXJuIHR5cGVvZiByZXQgPT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRcdC8vIEhhbmRsZSBtb3N0IGNvbW1vbiBzdHJpbmcgY2FzZXNcblx0XHRcdFx0XHRyZXQucmVwbGFjZShycmV0dXJuLCBcIlwiKSA6XG5cdFx0XHRcdFx0Ly8gSGFuZGxlIGNhc2VzIHdoZXJlIHZhbHVlIGlzIG51bGwvdW5kZWYgb3IgbnVtYmVyXG5cdFx0XHRcdFx0cmV0ID09IG51bGwgPyBcIlwiIDogcmV0O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0aXNGdW5jdGlvbiA9IGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApO1xuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiggaSApIHtcblx0XHRcdHZhciB2YWw7XG5cblx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSAhPT0gMSApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGlzRnVuY3Rpb24gKSB7XG5cdFx0XHRcdHZhbCA9IHZhbHVlLmNhbGwoIHRoaXMsIGksIGpRdWVyeSggdGhpcyApLnZhbCgpICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR2YWwgPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVHJlYXQgbnVsbC91bmRlZmluZWQgYXMgXCJcIjsgY29udmVydCBudW1iZXJzIHRvIHN0cmluZ1xuXHRcdFx0aWYgKCB2YWwgPT0gbnVsbCApIHtcblx0XHRcdFx0dmFsID0gXCJcIjtcblxuXHRcdFx0fSBlbHNlIGlmICggdHlwZW9mIHZhbCA9PT0gXCJudW1iZXJcIiApIHtcblx0XHRcdFx0dmFsICs9IFwiXCI7XG5cblx0XHRcdH0gZWxzZSBpZiAoIGpRdWVyeS5pc0FycmF5KCB2YWwgKSApIHtcblx0XHRcdFx0dmFsID0galF1ZXJ5Lm1hcCggdmFsLCBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKyBcIlwiO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aG9va3MgPSBqUXVlcnkudmFsSG9va3NbIHRoaXMudHlwZSBdIHx8IGpRdWVyeS52YWxIb29rc1sgdGhpcy5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIF07XG5cblx0XHRcdC8vIElmIHNldCByZXR1cm5zIHVuZGVmaW5lZCwgZmFsbCBiYWNrIHRvIG5vcm1hbCBzZXR0aW5nXG5cdFx0XHRpZiAoICFob29rcyB8fCAhKFwic2V0XCIgaW4gaG9va3MpIHx8IGhvb2tzLnNldCggdGhpcywgdmFsLCBcInZhbHVlXCIgKSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHR0aGlzLnZhbHVlID0gdmFsO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59KTtcblxualF1ZXJ5LmV4dGVuZCh7XG5cdHZhbEhvb2tzOiB7XG5cdFx0b3B0aW9uOiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgdmFsID0galF1ZXJ5LmZpbmQuYXR0ciggZWxlbSwgXCJ2YWx1ZVwiICk7XG5cdFx0XHRcdHJldHVybiB2YWwgIT0gbnVsbCA/XG5cdFx0XHRcdFx0dmFsIDpcblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBJRTEwLTExK1xuXHRcdFx0XHRcdC8vIG9wdGlvbi50ZXh0IHRocm93cyBleGNlcHRpb25zICgjMTQ2ODYsICMxNDg1OClcblx0XHRcdFx0XHRqUXVlcnkudHJpbSggalF1ZXJ5LnRleHQoIGVsZW0gKSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0c2VsZWN0OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHR2YXIgdmFsdWUsIG9wdGlvbixcblx0XHRcdFx0XHRvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuXHRcdFx0XHRcdGluZGV4ID0gZWxlbS5zZWxlY3RlZEluZGV4LFxuXHRcdFx0XHRcdG9uZSA9IGVsZW0udHlwZSA9PT0gXCJzZWxlY3Qtb25lXCIgfHwgaW5kZXggPCAwLFxuXHRcdFx0XHRcdHZhbHVlcyA9IG9uZSA/IG51bGwgOiBbXSxcblx0XHRcdFx0XHRtYXggPSBvbmUgPyBpbmRleCArIDEgOiBvcHRpb25zLmxlbmd0aCxcblx0XHRcdFx0XHRpID0gaW5kZXggPCAwID9cblx0XHRcdFx0XHRcdG1heCA6XG5cdFx0XHRcdFx0XHRvbmUgPyBpbmRleCA6IDA7XG5cblx0XHRcdFx0Ly8gTG9vcCB0aHJvdWdoIGFsbCB0aGUgc2VsZWN0ZWQgb3B0aW9uc1xuXHRcdFx0XHRmb3IgKCA7IGkgPCBtYXg7IGkrKyApIHtcblx0XHRcdFx0XHRvcHRpb24gPSBvcHRpb25zWyBpIF07XG5cblx0XHRcdFx0XHQvLyBJRTYtOSBkb2Vzbid0IHVwZGF0ZSBzZWxlY3RlZCBhZnRlciBmb3JtIHJlc2V0ICgjMjU1MSlcblx0XHRcdFx0XHRpZiAoICggb3B0aW9uLnNlbGVjdGVkIHx8IGkgPT09IGluZGV4ICkgJiZcblx0XHRcdFx0XHRcdFx0Ly8gRG9uJ3QgcmV0dXJuIG9wdGlvbnMgdGhhdCBhcmUgZGlzYWJsZWQgb3IgaW4gYSBkaXNhYmxlZCBvcHRncm91cFxuXHRcdFx0XHRcdFx0XHQoIHN1cHBvcnQub3B0RGlzYWJsZWQgPyAhb3B0aW9uLmRpc2FibGVkIDogb3B0aW9uLmdldEF0dHJpYnV0ZSggXCJkaXNhYmxlZFwiICkgPT09IG51bGwgKSAmJlxuXHRcdFx0XHRcdFx0XHQoICFvcHRpb24ucGFyZW50Tm9kZS5kaXNhYmxlZCB8fCAhalF1ZXJ5Lm5vZGVOYW1lKCBvcHRpb24ucGFyZW50Tm9kZSwgXCJvcHRncm91cFwiICkgKSApIHtcblxuXHRcdFx0XHRcdFx0Ly8gR2V0IHRoZSBzcGVjaWZpYyB2YWx1ZSBmb3IgdGhlIG9wdGlvblxuXHRcdFx0XHRcdFx0dmFsdWUgPSBqUXVlcnkoIG9wdGlvbiApLnZhbCgpO1xuXG5cdFx0XHRcdFx0XHQvLyBXZSBkb24ndCBuZWVkIGFuIGFycmF5IGZvciBvbmUgc2VsZWN0c1xuXHRcdFx0XHRcdFx0aWYgKCBvbmUgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gTXVsdGktU2VsZWN0cyByZXR1cm4gYW4gYXJyYXlcblx0XHRcdFx0XHRcdHZhbHVlcy5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9LFxuXG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0dmFyIG9wdGlvblNldCwgb3B0aW9uLFxuXHRcdFx0XHRcdG9wdGlvbnMgPSBlbGVtLm9wdGlvbnMsXG5cdFx0XHRcdFx0dmFsdWVzID0galF1ZXJ5Lm1ha2VBcnJheSggdmFsdWUgKSxcblx0XHRcdFx0XHRpID0gb3B0aW9ucy5sZW5ndGg7XG5cblx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXHRcdFx0XHRcdGlmICggKG9wdGlvbi5zZWxlY3RlZCA9IGpRdWVyeS5pbkFycmF5KCBvcHRpb24udmFsdWUsIHZhbHVlcyApID49IDApICkge1xuXHRcdFx0XHRcdFx0b3B0aW9uU2V0ID0gdHJ1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBGb3JjZSBicm93c2VycyB0byBiZWhhdmUgY29uc2lzdGVudGx5IHdoZW4gbm9uLW1hdGNoaW5nIHZhbHVlIGlzIHNldFxuXHRcdFx0XHRpZiAoICFvcHRpb25TZXQgKSB7XG5cdFx0XHRcdFx0ZWxlbS5zZWxlY3RlZEluZGV4ID0gLTE7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHZhbHVlcztcblx0XHRcdH1cblx0XHR9XG5cdH1cbn0pO1xuXG4vLyBSYWRpb3MgYW5kIGNoZWNrYm94ZXMgZ2V0dGVyL3NldHRlclxualF1ZXJ5LmVhY2goWyBcInJhZGlvXCIsIFwiY2hlY2tib3hcIiBdLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0gPSB7XG5cdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRpZiAoIGpRdWVyeS5pc0FycmF5KCB2YWx1ZSApICkge1xuXHRcdFx0XHRyZXR1cm4gKCBlbGVtLmNoZWNrZWQgPSBqUXVlcnkuaW5BcnJheSggalF1ZXJ5KGVsZW0pLnZhbCgpLCB2YWx1ZSApID49IDAgKTtcblx0XHRcdH1cblx0XHR9XG5cdH07XG5cdGlmICggIXN1cHBvcnQuY2hlY2tPbiApIHtcblx0XHRqUXVlcnkudmFsSG9va3NbIHRoaXMgXS5nZXQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtLmdldEF0dHJpYnV0ZShcInZhbHVlXCIpID09PSBudWxsID8gXCJvblwiIDogZWxlbS52YWx1ZTtcblx0XHR9O1xuXHR9XG59KTtcblxuXG5cblxuLy8gUmV0dXJuIGpRdWVyeSBmb3IgYXR0cmlidXRlcy1vbmx5IGluY2x1c2lvblxuXG5cbmpRdWVyeS5lYWNoKCAoXCJibHVyIGZvY3VzIGZvY3VzaW4gZm9jdXNvdXQgbG9hZCByZXNpemUgc2Nyb2xsIHVubG9hZCBjbGljayBkYmxjbGljayBcIiArXG5cdFwibW91c2Vkb3duIG1vdXNldXAgbW91c2Vtb3ZlIG1vdXNlb3ZlciBtb3VzZW91dCBtb3VzZWVudGVyIG1vdXNlbGVhdmUgXCIgK1xuXHRcImNoYW5nZSBzZWxlY3Qgc3VibWl0IGtleWRvd24ga2V5cHJlc3Mga2V5dXAgZXJyb3IgY29udGV4dG1lbnVcIikuc3BsaXQoXCIgXCIpLCBmdW5jdGlvbiggaSwgbmFtZSApIHtcblxuXHQvLyBIYW5kbGUgZXZlbnQgYmluZGluZ1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBkYXRhLCBmbiApIHtcblx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA+IDAgP1xuXHRcdFx0dGhpcy5vbiggbmFtZSwgbnVsbCwgZGF0YSwgZm4gKSA6XG5cdFx0XHR0aGlzLnRyaWdnZXIoIG5hbWUgKTtcblx0fTtcbn0pO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKHtcblx0aG92ZXI6IGZ1bmN0aW9uKCBmbk92ZXIsIGZuT3V0ICkge1xuXHRcdHJldHVybiB0aGlzLm1vdXNlZW50ZXIoIGZuT3ZlciApLm1vdXNlbGVhdmUoIGZuT3V0IHx8IGZuT3ZlciApO1xuXHR9LFxuXG5cdGJpbmQ6IGZ1bmN0aW9uKCB0eXBlcywgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGVzLCBudWxsLCBkYXRhLCBmbiApO1xuXHR9LFxuXHR1bmJpbmQ6IGZ1bmN0aW9uKCB0eXBlcywgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub2ZmKCB0eXBlcywgbnVsbCwgZm4gKTtcblx0fSxcblxuXHRkZWxlZ2F0ZTogZnVuY3Rpb24oIHNlbGVjdG9yLCB0eXBlcywgZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIHRoaXMub24oIHR5cGVzLCBzZWxlY3RvciwgZGF0YSwgZm4gKTtcblx0fSxcblx0dW5kZWxlZ2F0ZTogZnVuY3Rpb24oIHNlbGVjdG9yLCB0eXBlcywgZm4gKSB7XG5cdFx0Ly8gKCBuYW1lc3BhY2UgKSBvciAoIHNlbGVjdG9yLCB0eXBlcyBbLCBmbl0gKVxuXHRcdHJldHVybiBhcmd1bWVudHMubGVuZ3RoID09PSAxID8gdGhpcy5vZmYoIHNlbGVjdG9yLCBcIioqXCIgKSA6IHRoaXMub2ZmKCB0eXBlcywgc2VsZWN0b3IgfHwgXCIqKlwiLCBmbiApO1xuXHR9XG59KTtcblxuXG52YXIgbm9uY2UgPSBqUXVlcnkubm93KCk7XG5cbnZhciBycXVlcnkgPSAoL1xcPy8pO1xuXG5cblxuLy8gU3VwcG9ydDogQW5kcm9pZCAyLjNcbi8vIFdvcmthcm91bmQgZmFpbHVyZSB0byBzdHJpbmctY2FzdCBudWxsIGlucHV0XG5qUXVlcnkucGFyc2VKU09OID0gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdHJldHVybiBKU09OLnBhcnNlKCBkYXRhICsgXCJcIiApO1xufTtcblxuXG4vLyBDcm9zcy1icm93c2VyIHhtbCBwYXJzaW5nXG5qUXVlcnkucGFyc2VYTUwgPSBmdW5jdGlvbiggZGF0YSApIHtcblx0dmFyIHhtbCwgdG1wO1xuXHRpZiAoICFkYXRhIHx8IHR5cGVvZiBkYXRhICE9PSBcInN0cmluZ1wiICkge1xuXHRcdHJldHVybiBudWxsO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUU5XG5cdHRyeSB7XG5cdFx0dG1wID0gbmV3IERPTVBhcnNlcigpO1xuXHRcdHhtbCA9IHRtcC5wYXJzZUZyb21TdHJpbmcoIGRhdGEsIFwidGV4dC94bWxcIiApO1xuXHR9IGNhdGNoICggZSApIHtcblx0XHR4bWwgPSB1bmRlZmluZWQ7XG5cdH1cblxuXHRpZiAoICF4bWwgfHwgeG1sLmdldEVsZW1lbnRzQnlUYWdOYW1lKCBcInBhcnNlcmVycm9yXCIgKS5sZW5ndGggKSB7XG5cdFx0alF1ZXJ5LmVycm9yKCBcIkludmFsaWQgWE1MOiBcIiArIGRhdGEgKTtcblx0fVxuXHRyZXR1cm4geG1sO1xufTtcblxuXG52YXJcblx0cmhhc2ggPSAvIy4qJC8sXG5cdHJ0cyA9IC8oWz8mXSlfPVteJl0qLyxcblx0cmhlYWRlcnMgPSAvXiguKj8pOlsgXFx0XSooW15cXHJcXG5dKikkL21nLFxuXHQvLyAjNzY1MywgIzgxMjUsICM4MTUyOiBsb2NhbCBwcm90b2NvbCBkZXRlY3Rpb25cblx0cmxvY2FsUHJvdG9jb2wgPSAvXig/OmFib3V0fGFwcHxhcHAtc3RvcmFnZXwuKy1leHRlbnNpb258ZmlsZXxyZXN8d2lkZ2V0KTokLyxcblx0cm5vQ29udGVudCA9IC9eKD86R0VUfEhFQUQpJC8sXG5cdHJwcm90b2NvbCA9IC9eXFwvXFwvLyxcblx0cnVybCA9IC9eKFtcXHcuKy1dKzopKD86XFwvXFwvKD86W15cXC8/I10qQHwpKFteXFwvPyM6XSopKD86OihcXGQrKXwpfCkvLFxuXG5cdC8qIFByZWZpbHRlcnNcblx0ICogMSkgVGhleSBhcmUgdXNlZnVsIHRvIGludHJvZHVjZSBjdXN0b20gZGF0YVR5cGVzIChzZWUgYWpheC9qc29ucC5qcyBmb3IgYW4gZXhhbXBsZSlcblx0ICogMikgVGhlc2UgYXJlIGNhbGxlZDpcblx0ICogICAgLSBCRUZPUkUgYXNraW5nIGZvciBhIHRyYW5zcG9ydFxuXHQgKiAgICAtIEFGVEVSIHBhcmFtIHNlcmlhbGl6YXRpb24gKHMuZGF0YSBpcyBhIHN0cmluZyBpZiBzLnByb2Nlc3NEYXRhIGlzIHRydWUpXG5cdCAqIDMpIGtleSBpcyB0aGUgZGF0YVR5cGVcblx0ICogNCkgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuXHQgKiA1KSBleGVjdXRpb24gd2lsbCBzdGFydCB3aXRoIHRyYW5zcG9ydCBkYXRhVHlwZSBhbmQgVEhFTiBjb250aW51ZSBkb3duIHRvIFwiKlwiIGlmIG5lZWRlZFxuXHQgKi9cblx0cHJlZmlsdGVycyA9IHt9LFxuXG5cdC8qIFRyYW5zcG9ydHMgYmluZGluZ3Ncblx0ICogMSkga2V5IGlzIHRoZSBkYXRhVHlwZVxuXHQgKiAyKSB0aGUgY2F0Y2hhbGwgc3ltYm9sIFwiKlwiIGNhbiBiZSB1c2VkXG5cdCAqIDMpIHNlbGVjdGlvbiB3aWxsIHN0YXJ0IHdpdGggdHJhbnNwb3J0IGRhdGFUeXBlIGFuZCBUSEVOIGdvIHRvIFwiKlwiIGlmIG5lZWRlZFxuXHQgKi9cblx0dHJhbnNwb3J0cyA9IHt9LFxuXG5cdC8vIEF2b2lkIGNvbW1lbnQtcHJvbG9nIGNoYXIgc2VxdWVuY2UgKCMxMDA5OCk7IG11c3QgYXBwZWFzZSBsaW50IGFuZCBldmFkZSBjb21wcmVzc2lvblxuXHRhbGxUeXBlcyA9IFwiKi9cIi5jb25jYXQoIFwiKlwiICksXG5cblx0Ly8gRG9jdW1lbnQgbG9jYXRpb25cblx0YWpheExvY2F0aW9uID0gd2luZG93LmxvY2F0aW9uLmhyZWYsXG5cblx0Ly8gU2VnbWVudCBsb2NhdGlvbiBpbnRvIHBhcnRzXG5cdGFqYXhMb2NQYXJ0cyA9IHJ1cmwuZXhlYyggYWpheExvY2F0aW9uLnRvTG93ZXJDYXNlKCkgKSB8fCBbXTtcblxuLy8gQmFzZSBcImNvbnN0cnVjdG9yXCIgZm9yIGpRdWVyeS5hamF4UHJlZmlsdGVyIGFuZCBqUXVlcnkuYWpheFRyYW5zcG9ydFxuZnVuY3Rpb24gYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUgKSB7XG5cblx0Ly8gZGF0YVR5cGVFeHByZXNzaW9uIGlzIG9wdGlvbmFsIGFuZCBkZWZhdWx0cyB0byBcIipcIlxuXHRyZXR1cm4gZnVuY3Rpb24oIGRhdGFUeXBlRXhwcmVzc2lvbiwgZnVuYyApIHtcblxuXHRcdGlmICggdHlwZW9mIGRhdGFUeXBlRXhwcmVzc2lvbiAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdGZ1bmMgPSBkYXRhVHlwZUV4cHJlc3Npb247XG5cdFx0XHRkYXRhVHlwZUV4cHJlc3Npb24gPSBcIipcIjtcblx0XHR9XG5cblx0XHR2YXIgZGF0YVR5cGUsXG5cdFx0XHRpID0gMCxcblx0XHRcdGRhdGFUeXBlcyA9IGRhdGFUeXBlRXhwcmVzc2lvbi50b0xvd2VyQ2FzZSgpLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbXTtcblxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGZ1bmMgKSApIHtcblx0XHRcdC8vIEZvciBlYWNoIGRhdGFUeXBlIGluIHRoZSBkYXRhVHlwZUV4cHJlc3Npb25cblx0XHRcdHdoaWxlICggKGRhdGFUeXBlID0gZGF0YVR5cGVzW2krK10pICkge1xuXHRcdFx0XHQvLyBQcmVwZW5kIGlmIHJlcXVlc3RlZFxuXHRcdFx0XHRpZiAoIGRhdGFUeXBlWzBdID09PSBcIitcIiApIHtcblx0XHRcdFx0XHRkYXRhVHlwZSA9IGRhdGFUeXBlLnNsaWNlKCAxICkgfHwgXCIqXCI7XG5cdFx0XHRcdFx0KHN0cnVjdHVyZVsgZGF0YVR5cGUgXSA9IHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSkudW5zaGlmdCggZnVuYyApO1xuXG5cdFx0XHRcdC8vIE90aGVyd2lzZSBhcHBlbmRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQoc3RydWN0dXJlWyBkYXRhVHlwZSBdID0gc3RydWN0dXJlWyBkYXRhVHlwZSBdIHx8IFtdKS5wdXNoKCBmdW5jICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH07XG59XG5cbi8vIEJhc2UgaW5zcGVjdGlvbiBmdW5jdGlvbiBmb3IgcHJlZmlsdGVycyBhbmQgdHJhbnNwb3J0c1xuZnVuY3Rpb24gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHN0cnVjdHVyZSwgb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUiApIHtcblxuXHR2YXIgaW5zcGVjdGVkID0ge30sXG5cdFx0c2Vla2luZ1RyYW5zcG9ydCA9ICggc3RydWN0dXJlID09PSB0cmFuc3BvcnRzICk7XG5cblx0ZnVuY3Rpb24gaW5zcGVjdCggZGF0YVR5cGUgKSB7XG5cdFx0dmFyIHNlbGVjdGVkO1xuXHRcdGluc3BlY3RlZFsgZGF0YVR5cGUgXSA9IHRydWU7XG5cdFx0alF1ZXJ5LmVhY2goIHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSwgZnVuY3Rpb24oIF8sIHByZWZpbHRlck9yRmFjdG9yeSApIHtcblx0XHRcdHZhciBkYXRhVHlwZU9yVHJhbnNwb3J0ID0gcHJlZmlsdGVyT3JGYWN0b3J5KCBvcHRpb25zLCBvcmlnaW5hbE9wdGlvbnMsIGpxWEhSICk7XG5cdFx0XHRpZiAoIHR5cGVvZiBkYXRhVHlwZU9yVHJhbnNwb3J0ID09PSBcInN0cmluZ1wiICYmICFzZWVraW5nVHJhbnNwb3J0ICYmICFpbnNwZWN0ZWRbIGRhdGFUeXBlT3JUcmFuc3BvcnQgXSApIHtcblx0XHRcdFx0b3B0aW9ucy5kYXRhVHlwZXMudW5zaGlmdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRpbnNwZWN0KCBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdH0gZWxzZSBpZiAoIHNlZWtpbmdUcmFuc3BvcnQgKSB7XG5cdFx0XHRcdHJldHVybiAhKCBzZWxlY3RlZCA9IGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRyZXR1cm4gc2VsZWN0ZWQ7XG5cdH1cblxuXHRyZXR1cm4gaW5zcGVjdCggb3B0aW9ucy5kYXRhVHlwZXNbIDAgXSApIHx8ICFpbnNwZWN0ZWRbIFwiKlwiIF0gJiYgaW5zcGVjdCggXCIqXCIgKTtcbn1cblxuLy8gQSBzcGVjaWFsIGV4dGVuZCBmb3IgYWpheCBvcHRpb25zXG4vLyB0aGF0IHRha2VzIFwiZmxhdFwiIG9wdGlvbnMgKG5vdCB0byBiZSBkZWVwIGV4dGVuZGVkKVxuLy8gRml4ZXMgIzk4ODdcbmZ1bmN0aW9uIGFqYXhFeHRlbmQoIHRhcmdldCwgc3JjICkge1xuXHR2YXIga2V5LCBkZWVwLFxuXHRcdGZsYXRPcHRpb25zID0galF1ZXJ5LmFqYXhTZXR0aW5ncy5mbGF0T3B0aW9ucyB8fCB7fTtcblxuXHRmb3IgKCBrZXkgaW4gc3JjICkge1xuXHRcdGlmICggc3JjWyBrZXkgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0KCBmbGF0T3B0aW9uc1sga2V5IF0gPyB0YXJnZXQgOiAoIGRlZXAgfHwgKGRlZXAgPSB7fSkgKSApWyBrZXkgXSA9IHNyY1sga2V5IF07XG5cdFx0fVxuXHR9XG5cdGlmICggZGVlcCApIHtcblx0XHRqUXVlcnkuZXh0ZW5kKCB0cnVlLCB0YXJnZXQsIGRlZXAgKTtcblx0fVxuXG5cdHJldHVybiB0YXJnZXQ7XG59XG5cbi8qIEhhbmRsZXMgcmVzcG9uc2VzIHRvIGFuIGFqYXggcmVxdWVzdDpcbiAqIC0gZmluZHMgdGhlIHJpZ2h0IGRhdGFUeXBlIChtZWRpYXRlcyBiZXR3ZWVuIGNvbnRlbnQtdHlwZSBhbmQgZXhwZWN0ZWQgZGF0YVR5cGUpXG4gKiAtIHJldHVybnMgdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2VcbiAqL1xuZnVuY3Rpb24gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApIHtcblxuXHR2YXIgY3QsIHR5cGUsIGZpbmFsRGF0YVR5cGUsIGZpcnN0RGF0YVR5cGUsXG5cdFx0Y29udGVudHMgPSBzLmNvbnRlbnRzLFxuXHRcdGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzO1xuXG5cdC8vIFJlbW92ZSBhdXRvIGRhdGFUeXBlIGFuZCBnZXQgY29udGVudC10eXBlIGluIHRoZSBwcm9jZXNzXG5cdHdoaWxlICggZGF0YVR5cGVzWyAwIF0gPT09IFwiKlwiICkge1xuXHRcdGRhdGFUeXBlcy5zaGlmdCgpO1xuXHRcdGlmICggY3QgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdGN0ID0gcy5taW1lVHlwZSB8fCBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcihcIkNvbnRlbnQtVHlwZVwiKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDaGVjayBpZiB3ZSdyZSBkZWFsaW5nIHdpdGggYSBrbm93biBjb250ZW50LXR5cGVcblx0aWYgKCBjdCApIHtcblx0XHRmb3IgKCB0eXBlIGluIGNvbnRlbnRzICkge1xuXHRcdFx0aWYgKCBjb250ZW50c1sgdHlwZSBdICYmIGNvbnRlbnRzWyB0eXBlIF0udGVzdCggY3QgKSApIHtcblx0XHRcdFx0ZGF0YVR5cGVzLnVuc2hpZnQoIHR5cGUgKTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hlY2sgdG8gc2VlIGlmIHdlIGhhdmUgYSByZXNwb25zZSBmb3IgdGhlIGV4cGVjdGVkIGRhdGFUeXBlXG5cdGlmICggZGF0YVR5cGVzWyAwIF0gaW4gcmVzcG9uc2VzICkge1xuXHRcdGZpbmFsRGF0YVR5cGUgPSBkYXRhVHlwZXNbIDAgXTtcblx0fSBlbHNlIHtcblx0XHQvLyBUcnkgY29udmVydGlibGUgZGF0YVR5cGVzXG5cdFx0Zm9yICggdHlwZSBpbiByZXNwb25zZXMgKSB7XG5cdFx0XHRpZiAoICFkYXRhVHlwZXNbIDAgXSB8fCBzLmNvbnZlcnRlcnNbIHR5cGUgKyBcIiBcIiArIGRhdGFUeXBlc1swXSBdICkge1xuXHRcdFx0XHRmaW5hbERhdGFUeXBlID0gdHlwZTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoICFmaXJzdERhdGFUeXBlICkge1xuXHRcdFx0XHRmaXJzdERhdGFUeXBlID0gdHlwZTtcblx0XHRcdH1cblx0XHR9XG5cdFx0Ly8gT3IganVzdCB1c2UgZmlyc3Qgb25lXG5cdFx0ZmluYWxEYXRhVHlwZSA9IGZpbmFsRGF0YVR5cGUgfHwgZmlyc3REYXRhVHlwZTtcblx0fVxuXG5cdC8vIElmIHdlIGZvdW5kIGEgZGF0YVR5cGVcblx0Ly8gV2UgYWRkIHRoZSBkYXRhVHlwZSB0byB0aGUgbGlzdCBpZiBuZWVkZWRcblx0Ly8gYW5kIHJldHVybiB0aGUgY29ycmVzcG9uZGluZyByZXNwb25zZVxuXHRpZiAoIGZpbmFsRGF0YVR5cGUgKSB7XG5cdFx0aWYgKCBmaW5hbERhdGFUeXBlICE9PSBkYXRhVHlwZXNbIDAgXSApIHtcblx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCBmaW5hbERhdGFUeXBlICk7XG5cdFx0fVxuXHRcdHJldHVybiByZXNwb25zZXNbIGZpbmFsRGF0YVR5cGUgXTtcblx0fVxufVxuXG4vKiBDaGFpbiBjb252ZXJzaW9ucyBnaXZlbiB0aGUgcmVxdWVzdCBhbmQgdGhlIG9yaWdpbmFsIHJlc3BvbnNlXG4gKiBBbHNvIHNldHMgdGhlIHJlc3BvbnNlWFhYIGZpZWxkcyBvbiB0aGUganFYSFIgaW5zdGFuY2VcbiAqL1xuZnVuY3Rpb24gYWpheENvbnZlcnQoIHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzICkge1xuXHR2YXIgY29udjIsIGN1cnJlbnQsIGNvbnYsIHRtcCwgcHJldixcblx0XHRjb252ZXJ0ZXJzID0ge30sXG5cdFx0Ly8gV29yayB3aXRoIGEgY29weSBvZiBkYXRhVHlwZXMgaW4gY2FzZSB3ZSBuZWVkIHRvIG1vZGlmeSBpdCBmb3IgY29udmVyc2lvblxuXHRcdGRhdGFUeXBlcyA9IHMuZGF0YVR5cGVzLnNsaWNlKCk7XG5cblx0Ly8gQ3JlYXRlIGNvbnZlcnRlcnMgbWFwIHdpdGggbG93ZXJjYXNlZCBrZXlzXG5cdGlmICggZGF0YVR5cGVzWyAxIF0gKSB7XG5cdFx0Zm9yICggY29udiBpbiBzLmNvbnZlcnRlcnMgKSB7XG5cdFx0XHRjb252ZXJ0ZXJzWyBjb252LnRvTG93ZXJDYXNlKCkgXSA9IHMuY29udmVydGVyc1sgY29udiBdO1xuXHRcdH1cblx0fVxuXG5cdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuXHQvLyBDb252ZXJ0IHRvIGVhY2ggc2VxdWVudGlhbCBkYXRhVHlwZVxuXHR3aGlsZSAoIGN1cnJlbnQgKSB7XG5cblx0XHRpZiAoIHMucmVzcG9uc2VGaWVsZHNbIGN1cnJlbnQgXSApIHtcblx0XHRcdGpxWEhSWyBzLnJlc3BvbnNlRmllbGRzWyBjdXJyZW50IF0gXSA9IHJlc3BvbnNlO1xuXHRcdH1cblxuXHRcdC8vIEFwcGx5IHRoZSBkYXRhRmlsdGVyIGlmIHByb3ZpZGVkXG5cdFx0aWYgKCAhcHJldiAmJiBpc1N1Y2Nlc3MgJiYgcy5kYXRhRmlsdGVyICkge1xuXHRcdFx0cmVzcG9uc2UgPSBzLmRhdGFGaWx0ZXIoIHJlc3BvbnNlLCBzLmRhdGFUeXBlICk7XG5cdFx0fVxuXG5cdFx0cHJldiA9IGN1cnJlbnQ7XG5cdFx0Y3VycmVudCA9IGRhdGFUeXBlcy5zaGlmdCgpO1xuXG5cdFx0aWYgKCBjdXJyZW50ICkge1xuXG5cdFx0Ly8gVGhlcmUncyBvbmx5IHdvcmsgdG8gZG8gaWYgY3VycmVudCBkYXRhVHlwZSBpcyBub24tYXV0b1xuXHRcdFx0aWYgKCBjdXJyZW50ID09PSBcIipcIiApIHtcblxuXHRcdFx0XHRjdXJyZW50ID0gcHJldjtcblxuXHRcdFx0Ly8gQ29udmVydCByZXNwb25zZSBpZiBwcmV2IGRhdGFUeXBlIGlzIG5vbi1hdXRvIGFuZCBkaWZmZXJzIGZyb20gY3VycmVudFxuXHRcdFx0fSBlbHNlIGlmICggcHJldiAhPT0gXCIqXCIgJiYgcHJldiAhPT0gY3VycmVudCApIHtcblxuXHRcdFx0XHQvLyBTZWVrIGEgZGlyZWN0IGNvbnZlcnRlclxuXHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgY3VycmVudCBdIHx8IGNvbnZlcnRlcnNbIFwiKiBcIiArIGN1cnJlbnQgXTtcblxuXHRcdFx0XHQvLyBJZiBub25lIGZvdW5kLCBzZWVrIGEgcGFpclxuXHRcdFx0XHRpZiAoICFjb252ICkge1xuXHRcdFx0XHRcdGZvciAoIGNvbnYyIGluIGNvbnZlcnRlcnMgKSB7XG5cblx0XHRcdFx0XHRcdC8vIElmIGNvbnYyIG91dHB1dHMgY3VycmVudFxuXHRcdFx0XHRcdFx0dG1wID0gY29udjIuc3BsaXQoIFwiIFwiICk7XG5cdFx0XHRcdFx0XHRpZiAoIHRtcFsgMSBdID09PSBjdXJyZW50ICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIElmIHByZXYgY2FuIGJlIGNvbnZlcnRlZCB0byBhY2NlcHRlZCBpbnB1dFxuXHRcdFx0XHRcdFx0XHRjb252ID0gY29udmVydGVyc1sgcHJldiArIFwiIFwiICsgdG1wWyAwIF0gXSB8fFxuXHRcdFx0XHRcdFx0XHRcdGNvbnZlcnRlcnNbIFwiKiBcIiArIHRtcFsgMCBdIF07XG5cdFx0XHRcdFx0XHRcdGlmICggY29udiApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBDb25kZW5zZSBlcXVpdmFsZW5jZSBjb252ZXJ0ZXJzXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBjb252ID09PSB0cnVlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIGNvbnYyIF07XG5cblx0XHRcdFx0XHRcdFx0XHQvLyBPdGhlcndpc2UsIGluc2VydCB0aGUgaW50ZXJtZWRpYXRlIGRhdGFUeXBlXG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggY29udmVydGVyc1sgY29udjIgXSAhPT0gdHJ1ZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGN1cnJlbnQgPSB0bXBbIDAgXTtcblx0XHRcdFx0XHRcdFx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCB0bXBbIDEgXSApO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEFwcGx5IGNvbnZlcnRlciAoaWYgbm90IGFuIGVxdWl2YWxlbmNlKVxuXHRcdFx0XHRpZiAoIGNvbnYgIT09IHRydWUgKSB7XG5cblx0XHRcdFx0XHQvLyBVbmxlc3MgZXJyb3JzIGFyZSBhbGxvd2VkIHRvIGJ1YmJsZSwgY2F0Y2ggYW5kIHJldHVybiB0aGVtXG5cdFx0XHRcdFx0aWYgKCBjb252ICYmIHNbIFwidGhyb3dzXCIgXSApIHtcblx0XHRcdFx0XHRcdHJlc3BvbnNlID0gY29udiggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2UgPSBjb252KCByZXNwb25zZSApO1xuXHRcdFx0XHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiB7IHN0YXRlOiBcInBhcnNlcmVycm9yXCIsIGVycm9yOiBjb252ID8gZSA6IFwiTm8gY29udmVyc2lvbiBmcm9tIFwiICsgcHJldiArIFwiIHRvIFwiICsgY3VycmVudCB9O1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB7IHN0YXRlOiBcInN1Y2Nlc3NcIiwgZGF0YTogcmVzcG9uc2UgfTtcbn1cblxualF1ZXJ5LmV4dGVuZCh7XG5cblx0Ly8gQ291bnRlciBmb3IgaG9sZGluZyB0aGUgbnVtYmVyIG9mIGFjdGl2ZSBxdWVyaWVzXG5cdGFjdGl2ZTogMCxcblxuXHQvLyBMYXN0LU1vZGlmaWVkIGhlYWRlciBjYWNoZSBmb3IgbmV4dCByZXF1ZXN0XG5cdGxhc3RNb2RpZmllZDoge30sXG5cdGV0YWc6IHt9LFxuXG5cdGFqYXhTZXR0aW5nczoge1xuXHRcdHVybDogYWpheExvY2F0aW9uLFxuXHRcdHR5cGU6IFwiR0VUXCIsXG5cdFx0aXNMb2NhbDogcmxvY2FsUHJvdG9jb2wudGVzdCggYWpheExvY1BhcnRzWyAxIF0gKSxcblx0XHRnbG9iYWw6IHRydWUsXG5cdFx0cHJvY2Vzc0RhdGE6IHRydWUsXG5cdFx0YXN5bmM6IHRydWUsXG5cdFx0Y29udGVudFR5cGU6IFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04XCIsXG5cdFx0Lypcblx0XHR0aW1lb3V0OiAwLFxuXHRcdGRhdGE6IG51bGwsXG5cdFx0ZGF0YVR5cGU6IG51bGwsXG5cdFx0dXNlcm5hbWU6IG51bGwsXG5cdFx0cGFzc3dvcmQ6IG51bGwsXG5cdFx0Y2FjaGU6IG51bGwsXG5cdFx0dGhyb3dzOiBmYWxzZSxcblx0XHR0cmFkaXRpb25hbDogZmFsc2UsXG5cdFx0aGVhZGVyczoge30sXG5cdFx0Ki9cblxuXHRcdGFjY2VwdHM6IHtcblx0XHRcdFwiKlwiOiBhbGxUeXBlcyxcblx0XHRcdHRleHQ6IFwidGV4dC9wbGFpblwiLFxuXHRcdFx0aHRtbDogXCJ0ZXh0L2h0bWxcIixcblx0XHRcdHhtbDogXCJhcHBsaWNhdGlvbi94bWwsIHRleHQveG1sXCIsXG5cdFx0XHRqc29uOiBcImFwcGxpY2F0aW9uL2pzb24sIHRleHQvamF2YXNjcmlwdFwiXG5cdFx0fSxcblxuXHRcdGNvbnRlbnRzOiB7XG5cdFx0XHR4bWw6IC94bWwvLFxuXHRcdFx0aHRtbDogL2h0bWwvLFxuXHRcdFx0anNvbjogL2pzb24vXG5cdFx0fSxcblxuXHRcdHJlc3BvbnNlRmllbGRzOiB7XG5cdFx0XHR4bWw6IFwicmVzcG9uc2VYTUxcIixcblx0XHRcdHRleHQ6IFwicmVzcG9uc2VUZXh0XCIsXG5cdFx0XHRqc29uOiBcInJlc3BvbnNlSlNPTlwiXG5cdFx0fSxcblxuXHRcdC8vIERhdGEgY29udmVydGVyc1xuXHRcdC8vIEtleXMgc2VwYXJhdGUgc291cmNlIChvciBjYXRjaGFsbCBcIipcIikgYW5kIGRlc3RpbmF0aW9uIHR5cGVzIHdpdGggYSBzaW5nbGUgc3BhY2Vcblx0XHRjb252ZXJ0ZXJzOiB7XG5cblx0XHRcdC8vIENvbnZlcnQgYW55dGhpbmcgdG8gdGV4dFxuXHRcdFx0XCIqIHRleHRcIjogU3RyaW5nLFxuXG5cdFx0XHQvLyBUZXh0IHRvIGh0bWwgKHRydWUgPSBubyB0cmFuc2Zvcm1hdGlvbilcblx0XHRcdFwidGV4dCBodG1sXCI6IHRydWUsXG5cblx0XHRcdC8vIEV2YWx1YXRlIHRleHQgYXMgYSBqc29uIGV4cHJlc3Npb25cblx0XHRcdFwidGV4dCBqc29uXCI6IGpRdWVyeS5wYXJzZUpTT04sXG5cblx0XHRcdC8vIFBhcnNlIHRleHQgYXMgeG1sXG5cdFx0XHRcInRleHQgeG1sXCI6IGpRdWVyeS5wYXJzZVhNTFxuXHRcdH0sXG5cblx0XHQvLyBGb3Igb3B0aW9ucyB0aGF0IHNob3VsZG4ndCBiZSBkZWVwIGV4dGVuZGVkOlxuXHRcdC8vIHlvdSBjYW4gYWRkIHlvdXIgb3duIGN1c3RvbSBvcHRpb25zIGhlcmUgaWZcblx0XHQvLyBhbmQgd2hlbiB5b3UgY3JlYXRlIG9uZSB0aGF0IHNob3VsZG4ndCBiZVxuXHRcdC8vIGRlZXAgZXh0ZW5kZWQgKHNlZSBhamF4RXh0ZW5kKVxuXHRcdGZsYXRPcHRpb25zOiB7XG5cdFx0XHR1cmw6IHRydWUsXG5cdFx0XHRjb250ZXh0OiB0cnVlXG5cdFx0fVxuXHR9LFxuXG5cdC8vIENyZWF0ZXMgYSBmdWxsIGZsZWRnZWQgc2V0dGluZ3Mgb2JqZWN0IGludG8gdGFyZ2V0XG5cdC8vIHdpdGggYm90aCBhamF4U2V0dGluZ3MgYW5kIHNldHRpbmdzIGZpZWxkcy5cblx0Ly8gSWYgdGFyZ2V0IGlzIG9taXR0ZWQsIHdyaXRlcyBpbnRvIGFqYXhTZXR0aW5ncy5cblx0YWpheFNldHVwOiBmdW5jdGlvbiggdGFyZ2V0LCBzZXR0aW5ncyApIHtcblx0XHRyZXR1cm4gc2V0dGluZ3MgP1xuXG5cdFx0XHQvLyBCdWlsZGluZyBhIHNldHRpbmdzIG9iamVjdFxuXHRcdFx0YWpheEV4dGVuZCggYWpheEV4dGVuZCggdGFyZ2V0LCBqUXVlcnkuYWpheFNldHRpbmdzICksIHNldHRpbmdzICkgOlxuXG5cdFx0XHQvLyBFeHRlbmRpbmcgYWpheFNldHRpbmdzXG5cdFx0XHRhamF4RXh0ZW5kKCBqUXVlcnkuYWpheFNldHRpbmdzLCB0YXJnZXQgKTtcblx0fSxcblxuXHRhamF4UHJlZmlsdGVyOiBhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHByZWZpbHRlcnMgKSxcblx0YWpheFRyYW5zcG9ydDogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCB0cmFuc3BvcnRzICksXG5cblx0Ly8gTWFpbiBtZXRob2Rcblx0YWpheDogZnVuY3Rpb24oIHVybCwgb3B0aW9ucyApIHtcblxuXHRcdC8vIElmIHVybCBpcyBhbiBvYmplY3QsIHNpbXVsYXRlIHByZS0xLjUgc2lnbmF0dXJlXG5cdFx0aWYgKCB0eXBlb2YgdXJsID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0b3B0aW9ucyA9IHVybDtcblx0XHRcdHVybCA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHQvLyBGb3JjZSBvcHRpb25zIHRvIGJlIGFuIG9iamVjdFxuXHRcdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdFx0dmFyIHRyYW5zcG9ydCxcblx0XHRcdC8vIFVSTCB3aXRob3V0IGFudGktY2FjaGUgcGFyYW1cblx0XHRcdGNhY2hlVVJMLFxuXHRcdFx0Ly8gUmVzcG9uc2UgaGVhZGVyc1xuXHRcdFx0cmVzcG9uc2VIZWFkZXJzU3RyaW5nLFxuXHRcdFx0cmVzcG9uc2VIZWFkZXJzLFxuXHRcdFx0Ly8gdGltZW91dCBoYW5kbGVcblx0XHRcdHRpbWVvdXRUaW1lcixcblx0XHRcdC8vIENyb3NzLWRvbWFpbiBkZXRlY3Rpb24gdmFyc1xuXHRcdFx0cGFydHMsXG5cdFx0XHQvLyBUbyBrbm93IGlmIGdsb2JhbCBldmVudHMgYXJlIHRvIGJlIGRpc3BhdGNoZWRcblx0XHRcdGZpcmVHbG9iYWxzLFxuXHRcdFx0Ly8gTG9vcCB2YXJpYWJsZVxuXHRcdFx0aSxcblx0XHRcdC8vIENyZWF0ZSB0aGUgZmluYWwgb3B0aW9ucyBvYmplY3Rcblx0XHRcdHMgPSBqUXVlcnkuYWpheFNldHVwKCB7fSwgb3B0aW9ucyApLFxuXHRcdFx0Ly8gQ2FsbGJhY2tzIGNvbnRleHRcblx0XHRcdGNhbGxiYWNrQ29udGV4dCA9IHMuY29udGV4dCB8fCBzLFxuXHRcdFx0Ly8gQ29udGV4dCBmb3IgZ2xvYmFsIGV2ZW50cyBpcyBjYWxsYmFja0NvbnRleHQgaWYgaXQgaXMgYSBET00gbm9kZSBvciBqUXVlcnkgY29sbGVjdGlvblxuXHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0ID0gcy5jb250ZXh0ICYmICggY2FsbGJhY2tDb250ZXh0Lm5vZGVUeXBlIHx8IGNhbGxiYWNrQ29udGV4dC5qcXVlcnkgKSA/XG5cdFx0XHRcdGpRdWVyeSggY2FsbGJhY2tDb250ZXh0ICkgOlxuXHRcdFx0XHRqUXVlcnkuZXZlbnQsXG5cdFx0XHQvLyBEZWZlcnJlZHNcblx0XHRcdGRlZmVycmVkID0galF1ZXJ5LkRlZmVycmVkKCksXG5cdFx0XHRjb21wbGV0ZURlZmVycmVkID0galF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLFxuXHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdHN0YXR1c0NvZGUgPSBzLnN0YXR1c0NvZGUgfHwge30sXG5cdFx0XHQvLyBIZWFkZXJzICh0aGV5IGFyZSBzZW50IGFsbCBhdCBvbmNlKVxuXHRcdFx0cmVxdWVzdEhlYWRlcnMgPSB7fSxcblx0XHRcdHJlcXVlc3RIZWFkZXJzTmFtZXMgPSB7fSxcblx0XHRcdC8vIFRoZSBqcVhIUiBzdGF0ZVxuXHRcdFx0c3RhdGUgPSAwLFxuXHRcdFx0Ly8gRGVmYXVsdCBhYm9ydCBtZXNzYWdlXG5cdFx0XHRzdHJBYm9ydCA9IFwiY2FuY2VsZWRcIixcblx0XHRcdC8vIEZha2UgeGhyXG5cdFx0XHRqcVhIUiA9IHtcblx0XHRcdFx0cmVhZHlTdGF0ZTogMCxcblxuXHRcdFx0XHQvLyBCdWlsZHMgaGVhZGVycyBoYXNodGFibGUgaWYgbmVlZGVkXG5cdFx0XHRcdGdldFJlc3BvbnNlSGVhZGVyOiBmdW5jdGlvbigga2V5ICkge1xuXHRcdFx0XHRcdHZhciBtYXRjaDtcblx0XHRcdFx0XHRpZiAoIHN0YXRlID09PSAyICkge1xuXHRcdFx0XHRcdFx0aWYgKCAhcmVzcG9uc2VIZWFkZXJzICkge1xuXHRcdFx0XHRcdFx0XHRyZXNwb25zZUhlYWRlcnMgPSB7fTtcblx0XHRcdFx0XHRcdFx0d2hpbGUgKCAobWF0Y2ggPSByaGVhZGVycy5leGVjKCByZXNwb25zZUhlYWRlcnNTdHJpbmcgKSkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzWyBtYXRjaFsxXS50b0xvd2VyQ2FzZSgpIF0gPSBtYXRjaFsgMiBdO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRtYXRjaCA9IHJlc3BvbnNlSGVhZGVyc1sga2V5LnRvTG93ZXJDYXNlKCkgXTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIG1hdGNoID09IG51bGwgPyBudWxsIDogbWF0Y2g7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gUmF3IHN0cmluZ1xuXHRcdFx0XHRnZXRBbGxSZXNwb25zZUhlYWRlcnM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdHJldHVybiBzdGF0ZSA9PT0gMiA/IHJlc3BvbnNlSGVhZGVyc1N0cmluZyA6IG51bGw7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FjaGVzIHRoZSBoZWFkZXJcblx0XHRcdFx0c2V0UmVxdWVzdEhlYWRlcjogZnVuY3Rpb24oIG5hbWUsIHZhbHVlICkge1xuXHRcdFx0XHRcdHZhciBsbmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdFx0XHRpZiAoICFzdGF0ZSApIHtcblx0XHRcdFx0XHRcdG5hbWUgPSByZXF1ZXN0SGVhZGVyc05hbWVzWyBsbmFtZSBdID0gcmVxdWVzdEhlYWRlcnNOYW1lc1sgbG5hbWUgXSB8fCBuYW1lO1xuXHRcdFx0XHRcdFx0cmVxdWVzdEhlYWRlcnNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBPdmVycmlkZXMgcmVzcG9uc2UgY29udGVudC10eXBlIGhlYWRlclxuXHRcdFx0XHRvdmVycmlkZU1pbWVUeXBlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRcdFx0XHRpZiAoICFzdGF0ZSApIHtcblx0XHRcdFx0XHRcdHMubWltZVR5cGUgPSB0eXBlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0XHRzdGF0dXNDb2RlOiBmdW5jdGlvbiggbWFwICkge1xuXHRcdFx0XHRcdHZhciBjb2RlO1xuXHRcdFx0XHRcdGlmICggbWFwICkge1xuXHRcdFx0XHRcdFx0aWYgKCBzdGF0ZSA8IDIgKSB7XG5cdFx0XHRcdFx0XHRcdGZvciAoIGNvZGUgaW4gbWFwICkge1xuXHRcdFx0XHRcdFx0XHRcdC8vIExhenktYWRkIHRoZSBuZXcgY2FsbGJhY2sgaW4gYSB3YXkgdGhhdCBwcmVzZXJ2ZXMgb2xkIG9uZXNcblx0XHRcdFx0XHRcdFx0XHRzdGF0dXNDb2RlWyBjb2RlIF0gPSBbIHN0YXR1c0NvZGVbIGNvZGUgXSwgbWFwWyBjb2RlIF0gXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gRXhlY3V0ZSB0aGUgYXBwcm9wcmlhdGUgY2FsbGJhY2tzXG5cdFx0XHRcdFx0XHRcdGpxWEhSLmFsd2F5cyggbWFwWyBqcVhIUi5zdGF0dXMgXSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fSxcblxuXHRcdFx0XHQvLyBDYW5jZWwgdGhlIHJlcXVlc3Rcblx0XHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCBzdGF0dXNUZXh0ICkge1xuXHRcdFx0XHRcdHZhciBmaW5hbFRleHQgPSBzdGF0dXNUZXh0IHx8IHN0ckFib3J0O1xuXHRcdFx0XHRcdGlmICggdHJhbnNwb3J0ICkge1xuXHRcdFx0XHRcdFx0dHJhbnNwb3J0LmFib3J0KCBmaW5hbFRleHQgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0ZG9uZSggMCwgZmluYWxUZXh0ICk7XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH1cblx0XHRcdH07XG5cblx0XHQvLyBBdHRhY2ggZGVmZXJyZWRzXG5cdFx0ZGVmZXJyZWQucHJvbWlzZSgganFYSFIgKS5jb21wbGV0ZSA9IGNvbXBsZXRlRGVmZXJyZWQuYWRkO1xuXHRcdGpxWEhSLnN1Y2Nlc3MgPSBqcVhIUi5kb25lO1xuXHRcdGpxWEhSLmVycm9yID0ganFYSFIuZmFpbDtcblxuXHRcdC8vIFJlbW92ZSBoYXNoIGNoYXJhY3RlciAoIzc1MzE6IGFuZCBzdHJpbmcgcHJvbW90aW9uKVxuXHRcdC8vIEFkZCBwcm90b2NvbCBpZiBub3QgcHJvdmlkZWQgKHByZWZpbHRlcnMgbWlnaHQgZXhwZWN0IGl0KVxuXHRcdC8vIEhhbmRsZSBmYWxzeSB1cmwgaW4gdGhlIHNldHRpbmdzIG9iamVjdCAoIzEwMDkzOiBjb25zaXN0ZW5jeSB3aXRoIG9sZCBzaWduYXR1cmUpXG5cdFx0Ly8gV2UgYWxzbyB1c2UgdGhlIHVybCBwYXJhbWV0ZXIgaWYgYXZhaWxhYmxlXG5cdFx0cy51cmwgPSAoICggdXJsIHx8IHMudXJsIHx8IGFqYXhMb2NhdGlvbiApICsgXCJcIiApLnJlcGxhY2UoIHJoYXNoLCBcIlwiIClcblx0XHRcdC5yZXBsYWNlKCBycHJvdG9jb2wsIGFqYXhMb2NQYXJ0c1sgMSBdICsgXCIvL1wiICk7XG5cblx0XHQvLyBBbGlhcyBtZXRob2Qgb3B0aW9uIHRvIHR5cGUgYXMgcGVyIHRpY2tldCAjMTIwMDRcblx0XHRzLnR5cGUgPSBvcHRpb25zLm1ldGhvZCB8fCBvcHRpb25zLnR5cGUgfHwgcy5tZXRob2QgfHwgcy50eXBlO1xuXG5cdFx0Ly8gRXh0cmFjdCBkYXRhVHlwZXMgbGlzdFxuXHRcdHMuZGF0YVR5cGVzID0galF1ZXJ5LnRyaW0oIHMuZGF0YVR5cGUgfHwgXCIqXCIgKS50b0xvd2VyQ2FzZSgpLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbIFwiXCIgXTtcblxuXHRcdC8vIEEgY3Jvc3MtZG9tYWluIHJlcXVlc3QgaXMgaW4gb3JkZXIgd2hlbiB3ZSBoYXZlIGEgcHJvdG9jb2w6aG9zdDpwb3J0IG1pc21hdGNoXG5cdFx0aWYgKCBzLmNyb3NzRG9tYWluID09IG51bGwgKSB7XG5cdFx0XHRwYXJ0cyA9IHJ1cmwuZXhlYyggcy51cmwudG9Mb3dlckNhc2UoKSApO1xuXHRcdFx0cy5jcm9zc0RvbWFpbiA9ICEhKCBwYXJ0cyAmJlxuXHRcdFx0XHQoIHBhcnRzWyAxIF0gIT09IGFqYXhMb2NQYXJ0c1sgMSBdIHx8IHBhcnRzWyAyIF0gIT09IGFqYXhMb2NQYXJ0c1sgMiBdIHx8XG5cdFx0XHRcdFx0KCBwYXJ0c1sgMyBdIHx8ICggcGFydHNbIDEgXSA9PT0gXCJodHRwOlwiID8gXCI4MFwiIDogXCI0NDNcIiApICkgIT09XG5cdFx0XHRcdFx0XHQoIGFqYXhMb2NQYXJ0c1sgMyBdIHx8ICggYWpheExvY1BhcnRzWyAxIF0gPT09IFwiaHR0cDpcIiA/IFwiODBcIiA6IFwiNDQzXCIgKSApIClcblx0XHRcdCk7XG5cdFx0fVxuXG5cdFx0Ly8gQ29udmVydCBkYXRhIGlmIG5vdCBhbHJlYWR5IGEgc3RyaW5nXG5cdFx0aWYgKCBzLmRhdGEgJiYgcy5wcm9jZXNzRGF0YSAmJiB0eXBlb2Ygcy5kYXRhICE9PSBcInN0cmluZ1wiICkge1xuXHRcdFx0cy5kYXRhID0galF1ZXJ5LnBhcmFtKCBzLmRhdGEsIHMudHJhZGl0aW9uYWwgKTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSBwcmVmaWx0ZXJzXG5cdFx0aW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHByZWZpbHRlcnMsIHMsIG9wdGlvbnMsIGpxWEhSICk7XG5cblx0XHQvLyBJZiByZXF1ZXN0IHdhcyBhYm9ydGVkIGluc2lkZSBhIHByZWZpbHRlciwgc3RvcCB0aGVyZVxuXHRcdGlmICggc3RhdGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm4ganFYSFI7XG5cdFx0fVxuXG5cdFx0Ly8gV2UgY2FuIGZpcmUgZ2xvYmFsIGV2ZW50cyBhcyBvZiBub3cgaWYgYXNrZWQgdG9cblx0XHQvLyBEb24ndCBmaXJlIGV2ZW50cyBpZiBqUXVlcnkuZXZlbnQgaXMgdW5kZWZpbmVkIGluIGFuIEFNRC11c2FnZSBzY2VuYXJpbyAoIzE1MTE4KVxuXHRcdGZpcmVHbG9iYWxzID0galF1ZXJ5LmV2ZW50ICYmIHMuZ2xvYmFsO1xuXG5cdFx0Ly8gV2F0Y2ggZm9yIGEgbmV3IHNldCBvZiByZXF1ZXN0c1xuXHRcdGlmICggZmlyZUdsb2JhbHMgJiYgalF1ZXJ5LmFjdGl2ZSsrID09PSAwICkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoXCJhamF4U3RhcnRcIik7XG5cdFx0fVxuXG5cdFx0Ly8gVXBwZXJjYXNlIHRoZSB0eXBlXG5cdFx0cy50eXBlID0gcy50eXBlLnRvVXBwZXJDYXNlKCk7XG5cblx0XHQvLyBEZXRlcm1pbmUgaWYgcmVxdWVzdCBoYXMgY29udGVudFxuXHRcdHMuaGFzQ29udGVudCA9ICFybm9Db250ZW50LnRlc3QoIHMudHlwZSApO1xuXG5cdFx0Ly8gU2F2ZSB0aGUgVVJMIGluIGNhc2Ugd2UncmUgdG95aW5nIHdpdGggdGhlIElmLU1vZGlmaWVkLVNpbmNlXG5cdFx0Ly8gYW5kL29yIElmLU5vbmUtTWF0Y2ggaGVhZGVyIGxhdGVyIG9uXG5cdFx0Y2FjaGVVUkwgPSBzLnVybDtcblxuXHRcdC8vIE1vcmUgb3B0aW9ucyBoYW5kbGluZyBmb3IgcmVxdWVzdHMgd2l0aCBubyBjb250ZW50XG5cdFx0aWYgKCAhcy5oYXNDb250ZW50ICkge1xuXG5cdFx0XHQvLyBJZiBkYXRhIGlzIGF2YWlsYWJsZSwgYXBwZW5kIGRhdGEgdG8gdXJsXG5cdFx0XHRpZiAoIHMuZGF0YSApIHtcblx0XHRcdFx0Y2FjaGVVUkwgPSAoIHMudXJsICs9ICggcnF1ZXJ5LnRlc3QoIGNhY2hlVVJMICkgPyBcIiZcIiA6IFwiP1wiICkgKyBzLmRhdGEgKTtcblx0XHRcdFx0Ly8gIzk2ODI6IHJlbW92ZSBkYXRhIHNvIHRoYXQgaXQncyBub3QgdXNlZCBpbiBhbiBldmVudHVhbCByZXRyeVxuXHRcdFx0XHRkZWxldGUgcy5kYXRhO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgYW50aS1jYWNoZSBpbiB1cmwgaWYgbmVlZGVkXG5cdFx0XHRpZiAoIHMuY2FjaGUgPT09IGZhbHNlICkge1xuXHRcdFx0XHRzLnVybCA9IHJ0cy50ZXN0KCBjYWNoZVVSTCApID9cblxuXHRcdFx0XHRcdC8vIElmIHRoZXJlIGlzIGFscmVhZHkgYSAnXycgcGFyYW1ldGVyLCBzZXQgaXRzIHZhbHVlXG5cdFx0XHRcdFx0Y2FjaGVVUkwucmVwbGFjZSggcnRzLCBcIiQxXz1cIiArIG5vbmNlKysgKSA6XG5cblx0XHRcdFx0XHQvLyBPdGhlcndpc2UgYWRkIG9uZSB0byB0aGUgZW5kXG5cdFx0XHRcdFx0Y2FjaGVVUkwgKyAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgXCJfPVwiICsgbm9uY2UrKztcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIElmLU1vZGlmaWVkLVNpbmNlIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciwgaWYgaW4gaWZNb2RpZmllZCBtb2RlLlxuXHRcdGlmICggcy5pZk1vZGlmaWVkICkge1xuXHRcdFx0aWYgKCBqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdICkge1xuXHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIklmLU1vZGlmaWVkLVNpbmNlXCIsIGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gKTtcblx0XHRcdH1cblx0XHRcdGlmICggalF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gKSB7XG5cdFx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiSWYtTm9uZS1NYXRjaFwiLCBqUXVlcnkuZXRhZ1sgY2FjaGVVUkwgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgY29ycmVjdCBoZWFkZXIsIGlmIGRhdGEgaXMgYmVpbmcgc2VudFxuXHRcdGlmICggcy5kYXRhICYmIHMuaGFzQ29udGVudCAmJiBzLmNvbnRlbnRUeXBlICE9PSBmYWxzZSB8fCBvcHRpb25zLmNvbnRlbnRUeXBlICkge1xuXHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJDb250ZW50LVR5cGVcIiwgcy5jb250ZW50VHlwZSApO1xuXHRcdH1cblxuXHRcdC8vIFNldCB0aGUgQWNjZXB0cyBoZWFkZXIgZm9yIHRoZSBzZXJ2ZXIsIGRlcGVuZGluZyBvbiB0aGUgZGF0YVR5cGVcblx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKFxuXHRcdFx0XCJBY2NlcHRcIixcblx0XHRcdHMuZGF0YVR5cGVzWyAwIF0gJiYgcy5hY2NlcHRzWyBzLmRhdGFUeXBlc1swXSBdID9cblx0XHRcdFx0cy5hY2NlcHRzWyBzLmRhdGFUeXBlc1swXSBdICsgKCBzLmRhdGFUeXBlc1sgMCBdICE9PSBcIipcIiA/IFwiLCBcIiArIGFsbFR5cGVzICsgXCI7IHE9MC4wMVwiIDogXCJcIiApIDpcblx0XHRcdFx0cy5hY2NlcHRzWyBcIipcIiBdXG5cdFx0KTtcblxuXHRcdC8vIENoZWNrIGZvciBoZWFkZXJzIG9wdGlvblxuXHRcdGZvciAoIGkgaW4gcy5oZWFkZXJzICkge1xuXHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggaSwgcy5oZWFkZXJzWyBpIF0gKTtcblx0XHR9XG5cblx0XHQvLyBBbGxvdyBjdXN0b20gaGVhZGVycy9taW1ldHlwZXMgYW5kIGVhcmx5IGFib3J0XG5cdFx0aWYgKCBzLmJlZm9yZVNlbmQgJiYgKCBzLmJlZm9yZVNlbmQuY2FsbCggY2FsbGJhY2tDb250ZXh0LCBqcVhIUiwgcyApID09PSBmYWxzZSB8fCBzdGF0ZSA9PT0gMiApICkge1xuXHRcdFx0Ly8gQWJvcnQgaWYgbm90IGRvbmUgYWxyZWFkeSBhbmQgcmV0dXJuXG5cdFx0XHRyZXR1cm4ganFYSFIuYWJvcnQoKTtcblx0XHR9XG5cblx0XHQvLyBBYm9ydGluZyBpcyBubyBsb25nZXIgYSBjYW5jZWxsYXRpb25cblx0XHRzdHJBYm9ydCA9IFwiYWJvcnRcIjtcblxuXHRcdC8vIEluc3RhbGwgY2FsbGJhY2tzIG9uIGRlZmVycmVkc1xuXHRcdGZvciAoIGkgaW4geyBzdWNjZXNzOiAxLCBlcnJvcjogMSwgY29tcGxldGU6IDEgfSApIHtcblx0XHRcdGpxWEhSWyBpIF0oIHNbIGkgXSApO1xuXHRcdH1cblxuXHRcdC8vIEdldCB0cmFuc3BvcnRcblx0XHR0cmFuc3BvcnQgPSBpbnNwZWN0UHJlZmlsdGVyc09yVHJhbnNwb3J0cyggdHJhbnNwb3J0cywgcywgb3B0aW9ucywganFYSFIgKTtcblxuXHRcdC8vIElmIG5vIHRyYW5zcG9ydCwgd2UgYXV0by1hYm9ydFxuXHRcdGlmICggIXRyYW5zcG9ydCApIHtcblx0XHRcdGRvbmUoIC0xLCBcIk5vIFRyYW5zcG9ydFwiICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGpxWEhSLnJlYWR5U3RhdGUgPSAxO1xuXG5cdFx0XHQvLyBTZW5kIGdsb2JhbCBldmVudFxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIFwiYWpheFNlbmRcIiwgWyBqcVhIUiwgcyBdICk7XG5cdFx0XHR9XG5cdFx0XHQvLyBUaW1lb3V0XG5cdFx0XHRpZiAoIHMuYXN5bmMgJiYgcy50aW1lb3V0ID4gMCApIHtcblx0XHRcdFx0dGltZW91dFRpbWVyID0gc2V0VGltZW91dChmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRqcVhIUi5hYm9ydChcInRpbWVvdXRcIik7XG5cdFx0XHRcdH0sIHMudGltZW91dCApO1xuXHRcdFx0fVxuXG5cdFx0XHR0cnkge1xuXHRcdFx0XHRzdGF0ZSA9IDE7XG5cdFx0XHRcdHRyYW5zcG9ydC5zZW5kKCByZXF1ZXN0SGVhZGVycywgZG9uZSApO1xuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRcdC8vIFByb3BhZ2F0ZSBleGNlcHRpb24gYXMgZXJyb3IgaWYgbm90IGRvbmVcblx0XHRcdFx0aWYgKCBzdGF0ZSA8IDIgKSB7XG5cdFx0XHRcdFx0ZG9uZSggLTEsIGUgKTtcblx0XHRcdFx0Ly8gU2ltcGx5IHJldGhyb3cgb3RoZXJ3aXNlXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0dGhyb3cgZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGxiYWNrIGZvciB3aGVuIGV2ZXJ5dGhpbmcgaXMgZG9uZVxuXHRcdGZ1bmN0aW9uIGRvbmUoIHN0YXR1cywgbmF0aXZlU3RhdHVzVGV4dCwgcmVzcG9uc2VzLCBoZWFkZXJzICkge1xuXHRcdFx0dmFyIGlzU3VjY2Vzcywgc3VjY2VzcywgZXJyb3IsIHJlc3BvbnNlLCBtb2RpZmllZCxcblx0XHRcdFx0c3RhdHVzVGV4dCA9IG5hdGl2ZVN0YXR1c1RleHQ7XG5cblx0XHRcdC8vIENhbGxlZCBvbmNlXG5cdFx0XHRpZiAoIHN0YXRlID09PSAyICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN0YXRlIGlzIFwiZG9uZVwiIG5vd1xuXHRcdFx0c3RhdGUgPSAyO1xuXG5cdFx0XHQvLyBDbGVhciB0aW1lb3V0IGlmIGl0IGV4aXN0c1xuXHRcdFx0aWYgKCB0aW1lb3V0VGltZXIgKSB7XG5cdFx0XHRcdGNsZWFyVGltZW91dCggdGltZW91dFRpbWVyICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIERlcmVmZXJlbmNlIHRyYW5zcG9ydCBmb3IgZWFybHkgZ2FyYmFnZSBjb2xsZWN0aW9uXG5cdFx0XHQvLyAobm8gbWF0dGVyIGhvdyBsb25nIHRoZSBqcVhIUiBvYmplY3Qgd2lsbCBiZSB1c2VkKVxuXHRcdFx0dHJhbnNwb3J0ID0gdW5kZWZpbmVkO1xuXG5cdFx0XHQvLyBDYWNoZSByZXNwb25zZSBoZWFkZXJzXG5cdFx0XHRyZXNwb25zZUhlYWRlcnNTdHJpbmcgPSBoZWFkZXJzIHx8IFwiXCI7XG5cblx0XHRcdC8vIFNldCByZWFkeVN0YXRlXG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gc3RhdHVzID4gMCA/IDQgOiAwO1xuXG5cdFx0XHQvLyBEZXRlcm1pbmUgaWYgc3VjY2Vzc2Z1bFxuXHRcdFx0aXNTdWNjZXNzID0gc3RhdHVzID49IDIwMCAmJiBzdGF0dXMgPCAzMDAgfHwgc3RhdHVzID09PSAzMDQ7XG5cblx0XHRcdC8vIEdldCByZXNwb25zZSBkYXRhXG5cdFx0XHRpZiAoIHJlc3BvbnNlcyApIHtcblx0XHRcdFx0cmVzcG9uc2UgPSBhamF4SGFuZGxlUmVzcG9uc2VzKCBzLCBqcVhIUiwgcmVzcG9uc2VzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbnZlcnQgbm8gbWF0dGVyIHdoYXQgKHRoYXQgd2F5IHJlc3BvbnNlWFhYIGZpZWxkcyBhcmUgYWx3YXlzIHNldClcblx0XHRcdHJlc3BvbnNlID0gYWpheENvbnZlcnQoIHMsIHJlc3BvbnNlLCBqcVhIUiwgaXNTdWNjZXNzICk7XG5cblx0XHRcdC8vIElmIHN1Y2Nlc3NmdWwsIGhhbmRsZSB0eXBlIGNoYWluaW5nXG5cdFx0XHRpZiAoIGlzU3VjY2VzcyApIHtcblxuXHRcdFx0XHQvLyBTZXQgdGhlIElmLU1vZGlmaWVkLVNpbmNlIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciwgaWYgaW4gaWZNb2RpZmllZCBtb2RlLlxuXHRcdFx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcblx0XHRcdFx0XHRtb2RpZmllZCA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKFwiTGFzdC1Nb2RpZmllZFwiKTtcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSA9IG1vZGlmaWVkO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRtb2RpZmllZCA9IGpxWEhSLmdldFJlc3BvbnNlSGVhZGVyKFwiZXRhZ1wiKTtcblx0XHRcdFx0XHRpZiAoIG1vZGlmaWVkICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBpZiBubyBjb250ZW50XG5cdFx0XHRcdGlmICggc3RhdHVzID09PSAyMDQgfHwgcy50eXBlID09PSBcIkhFQURcIiApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJub2NvbnRlbnRcIjtcblxuXHRcdFx0XHQvLyBpZiBub3QgbW9kaWZpZWRcblx0XHRcdFx0fSBlbHNlIGlmICggc3RhdHVzID09PSAzMDQgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm90bW9kaWZpZWRcIjtcblxuXHRcdFx0XHQvLyBJZiB3ZSBoYXZlIGRhdGEsIGxldCdzIGNvbnZlcnQgaXRcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gcmVzcG9uc2Uuc3RhdGU7XG5cdFx0XHRcdFx0c3VjY2VzcyA9IHJlc3BvbnNlLmRhdGE7XG5cdFx0XHRcdFx0ZXJyb3IgPSByZXNwb25zZS5lcnJvcjtcblx0XHRcdFx0XHRpc1N1Y2Nlc3MgPSAhZXJyb3I7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEV4dHJhY3QgZXJyb3IgZnJvbSBzdGF0dXNUZXh0IGFuZCBub3JtYWxpemUgZm9yIG5vbi1hYm9ydHNcblx0XHRcdFx0ZXJyb3IgPSBzdGF0dXNUZXh0O1xuXHRcdFx0XHRpZiAoIHN0YXR1cyB8fCAhc3RhdHVzVGV4dCApIHtcblx0XHRcdFx0XHRzdGF0dXNUZXh0ID0gXCJlcnJvclwiO1xuXHRcdFx0XHRcdGlmICggc3RhdHVzIDwgMCApIHtcblx0XHRcdFx0XHRcdHN0YXR1cyA9IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIFNldCBkYXRhIGZvciB0aGUgZmFrZSB4aHIgb2JqZWN0XG5cdFx0XHRqcVhIUi5zdGF0dXMgPSBzdGF0dXM7XG5cdFx0XHRqcVhIUi5zdGF0dXNUZXh0ID0gKCBuYXRpdmVTdGF0dXNUZXh0IHx8IHN0YXR1c1RleHQgKSArIFwiXCI7XG5cblx0XHRcdC8vIFN1Y2Nlc3MvRXJyb3Jcblx0XHRcdGlmICggaXNTdWNjZXNzICkge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggY2FsbGJhY2tDb250ZXh0LCBbIHN1Y2Nlc3MsIHN0YXR1c1RleHQsIGpxWEhSIF0gKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGRlZmVycmVkLnJlamVjdFdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBqcVhIUiwgc3RhdHVzVGV4dCwgZXJyb3IgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGF0dXMtZGVwZW5kZW50IGNhbGxiYWNrc1xuXHRcdFx0anFYSFIuc3RhdHVzQ29kZSggc3RhdHVzQ29kZSApO1xuXHRcdFx0c3RhdHVzQ29kZSA9IHVuZGVmaW5lZDtcblxuXHRcdFx0aWYgKCBmaXJlR2xvYmFscyApIHtcblx0XHRcdFx0Z2xvYmFsRXZlbnRDb250ZXh0LnRyaWdnZXIoIGlzU3VjY2VzcyA/IFwiYWpheFN1Y2Nlc3NcIiA6IFwiYWpheEVycm9yXCIsXG5cdFx0XHRcdFx0WyBqcVhIUiwgcywgaXNTdWNjZXNzID8gc3VjY2VzcyA6IGVycm9yIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ29tcGxldGVcblx0XHRcdGNvbXBsZXRlRGVmZXJyZWQuZmlyZVdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBqcVhIUiwgc3RhdHVzVGV4dCBdICk7XG5cblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBcImFqYXhDb21wbGV0ZVwiLCBbIGpxWEhSLCBzIF0gKTtcblx0XHRcdFx0Ly8gSGFuZGxlIHRoZSBnbG9iYWwgQUpBWCBjb3VudGVyXG5cdFx0XHRcdGlmICggISggLS1qUXVlcnkuYWN0aXZlICkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoXCJhamF4U3RvcFwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBqcVhIUjtcblx0fSxcblxuXHRnZXRKU09OOiBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCBkYXRhLCBjYWxsYmFjaywgXCJqc29uXCIgKTtcblx0fSxcblxuXHRnZXRTY3JpcHQ6IGZ1bmN0aW9uKCB1cmwsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ2V0KCB1cmwsIHVuZGVmaW5lZCwgY2FsbGJhY2ssIFwic2NyaXB0XCIgKTtcblx0fVxufSk7XG5cbmpRdWVyeS5lYWNoKCBbIFwiZ2V0XCIsIFwicG9zdFwiIF0sIGZ1bmN0aW9uKCBpLCBtZXRob2QgKSB7XG5cdGpRdWVyeVsgbWV0aG9kIF0gPSBmdW5jdGlvbiggdXJsLCBkYXRhLCBjYWxsYmFjaywgdHlwZSApIHtcblx0XHQvLyBTaGlmdCBhcmd1bWVudHMgaWYgZGF0YSBhcmd1bWVudCB3YXMgb21pdHRlZFxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGRhdGEgKSApIHtcblx0XHRcdHR5cGUgPSB0eXBlIHx8IGNhbGxiYWNrO1xuXHRcdFx0Y2FsbGJhY2sgPSBkYXRhO1xuXHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cblx0XHRyZXR1cm4galF1ZXJ5LmFqYXgoe1xuXHRcdFx0dXJsOiB1cmwsXG5cdFx0XHR0eXBlOiBtZXRob2QsXG5cdFx0XHRkYXRhVHlwZTogdHlwZSxcblx0XHRcdGRhdGE6IGRhdGEsXG5cdFx0XHRzdWNjZXNzOiBjYWxsYmFja1xuXHRcdH0pO1xuXHR9O1xufSk7XG5cblxualF1ZXJ5Ll9ldmFsVXJsID0gZnVuY3Rpb24oIHVybCApIHtcblx0cmV0dXJuIGpRdWVyeS5hamF4KHtcblx0XHR1cmw6IHVybCxcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdGRhdGFUeXBlOiBcInNjcmlwdFwiLFxuXHRcdGFzeW5jOiBmYWxzZSxcblx0XHRnbG9iYWw6IGZhbHNlLFxuXHRcdFwidGhyb3dzXCI6IHRydWVcblx0fSk7XG59O1xuXG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHR3cmFwQWxsOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHR2YXIgd3JhcDtcblxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGh0bWwgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLndyYXBBbGwoIGh0bWwuY2FsbCh0aGlzLCBpKSApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzWyAwIF0gKSB7XG5cblx0XHRcdC8vIFRoZSBlbGVtZW50cyB0byB3cmFwIHRoZSB0YXJnZXQgYXJvdW5kXG5cdFx0XHR3cmFwID0galF1ZXJ5KCBodG1sLCB0aGlzWyAwIF0ub3duZXJEb2N1bWVudCApLmVxKCAwICkuY2xvbmUoIHRydWUgKTtcblxuXHRcdFx0aWYgKCB0aGlzWyAwIF0ucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0d3JhcC5pbnNlcnRCZWZvcmUoIHRoaXNbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHR3cmFwLm1hcChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGVsZW0gPSB0aGlzO1xuXG5cdFx0XHRcdHdoaWxlICggZWxlbS5maXJzdEVsZW1lbnRDaGlsZCApIHtcblx0XHRcdFx0XHRlbGVtID0gZWxlbS5maXJzdEVsZW1lbnRDaGlsZDtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiBlbGVtO1xuXHRcdFx0fSkuYXBwZW5kKCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0d3JhcElubmVyOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBodG1sICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwSW5uZXIoIGh0bWwuY2FsbCh0aGlzLCBpKSApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBzZWxmID0galF1ZXJ5KCB0aGlzICksXG5cdFx0XHRcdGNvbnRlbnRzID0gc2VsZi5jb250ZW50cygpO1xuXG5cdFx0XHRpZiAoIGNvbnRlbnRzLmxlbmd0aCApIHtcblx0XHRcdFx0Y29udGVudHMud3JhcEFsbCggaHRtbCApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRzZWxmLmFwcGVuZCggaHRtbCApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdHdyYXA6IGZ1bmN0aW9uKCBodG1sICkge1xuXHRcdHZhciBpc0Z1bmN0aW9uID0galF1ZXJ5LmlzRnVuY3Rpb24oIGh0bWwgKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwQWxsKCBpc0Z1bmN0aW9uID8gaHRtbC5jYWxsKHRoaXMsIGkpIDogaHRtbCApO1xuXHRcdH0pO1xuXHR9LFxuXG5cdHVud3JhcDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMucGFyZW50KCkuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGlmICggIWpRdWVyeS5ub2RlTmFtZSggdGhpcywgXCJib2R5XCIgKSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkucmVwbGFjZVdpdGgoIHRoaXMuY2hpbGROb2RlcyApO1xuXHRcdFx0fVxuXHRcdH0pLmVuZCgpO1xuXHR9XG59KTtcblxuXG5qUXVlcnkuZXhwci5maWx0ZXJzLmhpZGRlbiA9IGZ1bmN0aW9uKCBlbGVtICkge1xuXHQvLyBTdXBwb3J0OiBPcGVyYSA8PSAxMi4xMlxuXHQvLyBPcGVyYSByZXBvcnRzIG9mZnNldFdpZHRocyBhbmQgb2Zmc2V0SGVpZ2h0cyBsZXNzIHRoYW4gemVybyBvbiBzb21lIGVsZW1lbnRzXG5cdHJldHVybiBlbGVtLm9mZnNldFdpZHRoIDw9IDAgJiYgZWxlbS5vZmZzZXRIZWlnaHQgPD0gMDtcbn07XG5qUXVlcnkuZXhwci5maWx0ZXJzLnZpc2libGUgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuICFqUXVlcnkuZXhwci5maWx0ZXJzLmhpZGRlbiggZWxlbSApO1xufTtcblxuXG5cblxudmFyIHIyMCA9IC8lMjAvZyxcblx0cmJyYWNrZXQgPSAvXFxbXFxdJC8sXG5cdHJDUkxGID0gL1xccj9cXG4vZyxcblx0cnN1Ym1pdHRlclR5cGVzID0gL14oPzpzdWJtaXR8YnV0dG9ufGltYWdlfHJlc2V0fGZpbGUpJC9pLFxuXHRyc3VibWl0dGFibGUgPSAvXig/OmlucHV0fHNlbGVjdHx0ZXh0YXJlYXxrZXlnZW4pL2k7XG5cbmZ1bmN0aW9uIGJ1aWxkUGFyYW1zKCBwcmVmaXgsIG9iaiwgdHJhZGl0aW9uYWwsIGFkZCApIHtcblx0dmFyIG5hbWU7XG5cblx0aWYgKCBqUXVlcnkuaXNBcnJheSggb2JqICkgKSB7XG5cdFx0Ly8gU2VyaWFsaXplIGFycmF5IGl0ZW0uXG5cdFx0alF1ZXJ5LmVhY2goIG9iaiwgZnVuY3Rpb24oIGksIHYgKSB7XG5cdFx0XHRpZiAoIHRyYWRpdGlvbmFsIHx8IHJicmFja2V0LnRlc3QoIHByZWZpeCApICkge1xuXHRcdFx0XHQvLyBUcmVhdCBlYWNoIGFycmF5IGl0ZW0gYXMgYSBzY2FsYXIuXG5cdFx0XHRcdGFkZCggcHJlZml4LCB2ICk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vIEl0ZW0gaXMgbm9uLXNjYWxhciAoYXJyYXkgb3Igb2JqZWN0KSwgZW5jb2RlIGl0cyBudW1lcmljIGluZGV4LlxuXHRcdFx0XHRidWlsZFBhcmFtcyggcHJlZml4ICsgXCJbXCIgKyAoIHR5cGVvZiB2ID09PSBcIm9iamVjdFwiID8gaSA6IFwiXCIgKSArIFwiXVwiLCB2LCB0cmFkaXRpb25hbCwgYWRkICk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cblx0fSBlbHNlIGlmICggIXRyYWRpdGlvbmFsICYmIGpRdWVyeS50eXBlKCBvYmogKSA9PT0gXCJvYmplY3RcIiApIHtcblx0XHQvLyBTZXJpYWxpemUgb2JqZWN0IGl0ZW0uXG5cdFx0Zm9yICggbmFtZSBpbiBvYmogKSB7XG5cdFx0XHRidWlsZFBhcmFtcyggcHJlZml4ICsgXCJbXCIgKyBuYW1lICsgXCJdXCIsIG9ialsgbmFtZSBdLCB0cmFkaXRpb25hbCwgYWRkICk7XG5cdFx0fVxuXG5cdH0gZWxzZSB7XG5cdFx0Ly8gU2VyaWFsaXplIHNjYWxhciBpdGVtLlxuXHRcdGFkZCggcHJlZml4LCBvYmogKTtcblx0fVxufVxuXG4vLyBTZXJpYWxpemUgYW4gYXJyYXkgb2YgZm9ybSBlbGVtZW50cyBvciBhIHNldCBvZlxuLy8ga2V5L3ZhbHVlcyBpbnRvIGEgcXVlcnkgc3RyaW5nXG5qUXVlcnkucGFyYW0gPSBmdW5jdGlvbiggYSwgdHJhZGl0aW9uYWwgKSB7XG5cdHZhciBwcmVmaXgsXG5cdFx0cyA9IFtdLFxuXHRcdGFkZCA9IGZ1bmN0aW9uKCBrZXksIHZhbHVlICkge1xuXHRcdFx0Ly8gSWYgdmFsdWUgaXMgYSBmdW5jdGlvbiwgaW52b2tlIGl0IGFuZCByZXR1cm4gaXRzIHZhbHVlXG5cdFx0XHR2YWx1ZSA9IGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApID8gdmFsdWUoKSA6ICggdmFsdWUgPT0gbnVsbCA/IFwiXCIgOiB2YWx1ZSApO1xuXHRcdFx0c1sgcy5sZW5ndGggXSA9IGVuY29kZVVSSUNvbXBvbmVudCgga2V5ICkgKyBcIj1cIiArIGVuY29kZVVSSUNvbXBvbmVudCggdmFsdWUgKTtcblx0XHR9O1xuXG5cdC8vIFNldCB0cmFkaXRpb25hbCB0byB0cnVlIGZvciBqUXVlcnkgPD0gMS4zLjIgYmVoYXZpb3IuXG5cdGlmICggdHJhZGl0aW9uYWwgPT09IHVuZGVmaW5lZCApIHtcblx0XHR0cmFkaXRpb25hbCA9IGpRdWVyeS5hamF4U2V0dGluZ3MgJiYgalF1ZXJ5LmFqYXhTZXR0aW5ncy50cmFkaXRpb25hbDtcblx0fVxuXG5cdC8vIElmIGFuIGFycmF5IHdhcyBwYXNzZWQgaW4sIGFzc3VtZSB0aGF0IGl0IGlzIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMuXG5cdGlmICggalF1ZXJ5LmlzQXJyYXkoIGEgKSB8fCAoIGEuanF1ZXJ5ICYmICFqUXVlcnkuaXNQbGFpbk9iamVjdCggYSApICkgKSB7XG5cdFx0Ly8gU2VyaWFsaXplIHRoZSBmb3JtIGVsZW1lbnRzXG5cdFx0alF1ZXJ5LmVhY2goIGEsIGZ1bmN0aW9uKCkge1xuXHRcdFx0YWRkKCB0aGlzLm5hbWUsIHRoaXMudmFsdWUgKTtcblx0XHR9KTtcblxuXHR9IGVsc2Uge1xuXHRcdC8vIElmIHRyYWRpdGlvbmFsLCBlbmNvZGUgdGhlIFwib2xkXCIgd2F5ICh0aGUgd2F5IDEuMy4yIG9yIG9sZGVyXG5cdFx0Ly8gZGlkIGl0KSwgb3RoZXJ3aXNlIGVuY29kZSBwYXJhbXMgcmVjdXJzaXZlbHkuXG5cdFx0Zm9yICggcHJlZml4IGluIGEgKSB7XG5cdFx0XHRidWlsZFBhcmFtcyggcHJlZml4LCBhWyBwcmVmaXggXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblx0fVxuXG5cdC8vIFJldHVybiB0aGUgcmVzdWx0aW5nIHNlcmlhbGl6YXRpb25cblx0cmV0dXJuIHMuam9pbiggXCImXCIgKS5yZXBsYWNlKCByMjAsIFwiK1wiICk7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKHtcblx0c2VyaWFsaXplOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4galF1ZXJ5LnBhcmFtKCB0aGlzLnNlcmlhbGl6ZUFycmF5KCkgKTtcblx0fSxcblx0c2VyaWFsaXplQXJyYXk6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpIHtcblx0XHRcdC8vIENhbiBhZGQgcHJvcEhvb2sgZm9yIFwiZWxlbWVudHNcIiB0byBmaWx0ZXIgb3IgYWRkIGZvcm0gZWxlbWVudHNcblx0XHRcdHZhciBlbGVtZW50cyA9IGpRdWVyeS5wcm9wKCB0aGlzLCBcImVsZW1lbnRzXCIgKTtcblx0XHRcdHJldHVybiBlbGVtZW50cyA/IGpRdWVyeS5tYWtlQXJyYXkoIGVsZW1lbnRzICkgOiB0aGlzO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihmdW5jdGlvbigpIHtcblx0XHRcdHZhciB0eXBlID0gdGhpcy50eXBlO1xuXG5cdFx0XHQvLyBVc2UgLmlzKCBcIjpkaXNhYmxlZFwiICkgc28gdGhhdCBmaWVsZHNldFtkaXNhYmxlZF0gd29ya3Ncblx0XHRcdHJldHVybiB0aGlzLm5hbWUgJiYgIWpRdWVyeSggdGhpcyApLmlzKCBcIjpkaXNhYmxlZFwiICkgJiZcblx0XHRcdFx0cnN1Ym1pdHRhYmxlLnRlc3QoIHRoaXMubm9kZU5hbWUgKSAmJiAhcnN1Ym1pdHRlclR5cGVzLnRlc3QoIHR5cGUgKSAmJlxuXHRcdFx0XHQoIHRoaXMuY2hlY2tlZCB8fCAhcmNoZWNrYWJsZVR5cGUudGVzdCggdHlwZSApICk7XG5cdFx0fSlcblx0XHQubWFwKGZ1bmN0aW9uKCBpLCBlbGVtICkge1xuXHRcdFx0dmFyIHZhbCA9IGpRdWVyeSggdGhpcyApLnZhbCgpO1xuXG5cdFx0XHRyZXR1cm4gdmFsID09IG51bGwgP1xuXHRcdFx0XHRudWxsIDpcblx0XHRcdFx0alF1ZXJ5LmlzQXJyYXkoIHZhbCApID9cblx0XHRcdFx0XHRqUXVlcnkubWFwKCB2YWwsIGZ1bmN0aW9uKCB2YWwgKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4geyBuYW1lOiBlbGVtLm5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZSggckNSTEYsIFwiXFxyXFxuXCIgKSB9O1xuXHRcdFx0XHRcdH0pIDpcblx0XHRcdFx0XHR7IG5hbWU6IGVsZW0ubmFtZSwgdmFsdWU6IHZhbC5yZXBsYWNlKCByQ1JMRiwgXCJcXHJcXG5cIiApIH07XG5cdFx0fSkuZ2V0KCk7XG5cdH1cbn0pO1xuXG5cbmpRdWVyeS5hamF4U2V0dGluZ3MueGhyID0gZnVuY3Rpb24oKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXHR9IGNhdGNoKCBlICkge31cbn07XG5cbnZhciB4aHJJZCA9IDAsXG5cdHhockNhbGxiYWNrcyA9IHt9LFxuXHR4aHJTdWNjZXNzU3RhdHVzID0ge1xuXHRcdC8vIGZpbGUgcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgY29kZSAwLCBhc3N1bWUgMjAwXG5cdFx0MDogMjAwLFxuXHRcdC8vIFN1cHBvcnQ6IElFOVxuXHRcdC8vICMxNDUwOiBzb21ldGltZXMgSUUgcmV0dXJucyAxMjIzIHdoZW4gaXQgc2hvdWxkIGJlIDIwNFxuXHRcdDEyMjM6IDIwNFxuXHR9LFxuXHR4aHJTdXBwb3J0ZWQgPSBqUXVlcnkuYWpheFNldHRpbmdzLnhocigpO1xuXG4vLyBTdXBwb3J0OiBJRTlcbi8vIE9wZW4gcmVxdWVzdHMgbXVzdCBiZSBtYW51YWxseSBhYm9ydGVkIG9uIHVubG9hZCAoIzUyODApXG4vLyBTZWUgaHR0cHM6Ly9zdXBwb3J0Lm1pY3Jvc29mdC5jb20va2IvMjg1Njc0NiBmb3IgbW9yZSBpbmZvXG5pZiAoIHdpbmRvdy5hdHRhY2hFdmVudCApIHtcblx0d2luZG93LmF0dGFjaEV2ZW50KCBcIm9udW5sb2FkXCIsIGZ1bmN0aW9uKCkge1xuXHRcdGZvciAoIHZhciBrZXkgaW4geGhyQ2FsbGJhY2tzICkge1xuXHRcdFx0eGhyQ2FsbGJhY2tzWyBrZXkgXSgpO1xuXHRcdH1cblx0fSk7XG59XG5cbnN1cHBvcnQuY29ycyA9ICEheGhyU3VwcG9ydGVkICYmICggXCJ3aXRoQ3JlZGVudGlhbHNcIiBpbiB4aHJTdXBwb3J0ZWQgKTtcbnN1cHBvcnQuYWpheCA9IHhoclN1cHBvcnRlZCA9ICEheGhyU3VwcG9ydGVkO1xuXG5qUXVlcnkuYWpheFRyYW5zcG9ydChmdW5jdGlvbiggb3B0aW9ucyApIHtcblx0dmFyIGNhbGxiYWNrO1xuXG5cdC8vIENyb3NzIGRvbWFpbiBvbmx5IGFsbG93ZWQgaWYgc3VwcG9ydGVkIHRocm91Z2ggWE1MSHR0cFJlcXVlc3Rcblx0aWYgKCBzdXBwb3J0LmNvcnMgfHwgeGhyU3VwcG9ydGVkICYmICFvcHRpb25zLmNyb3NzRG9tYWluICkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZW5kOiBmdW5jdGlvbiggaGVhZGVycywgY29tcGxldGUgKSB7XG5cdFx0XHRcdHZhciBpLFxuXHRcdFx0XHRcdHhociA9IG9wdGlvbnMueGhyKCksXG5cdFx0XHRcdFx0aWQgPSArK3hocklkO1xuXG5cdFx0XHRcdHhoci5vcGVuKCBvcHRpb25zLnR5cGUsIG9wdGlvbnMudXJsLCBvcHRpb25zLmFzeW5jLCBvcHRpb25zLnVzZXJuYW1lLCBvcHRpb25zLnBhc3N3b3JkICk7XG5cblx0XHRcdFx0Ly8gQXBwbHkgY3VzdG9tIGZpZWxkcyBpZiBwcm92aWRlZFxuXHRcdFx0XHRpZiAoIG9wdGlvbnMueGhyRmllbGRzICkge1xuXHRcdFx0XHRcdGZvciAoIGkgaW4gb3B0aW9ucy54aHJGaWVsZHMgKSB7XG5cdFx0XHRcdFx0XHR4aHJbIGkgXSA9IG9wdGlvbnMueGhyRmllbGRzWyBpIF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gT3ZlcnJpZGUgbWltZSB0eXBlIGlmIG5lZWRlZFxuXHRcdFx0XHRpZiAoIG9wdGlvbnMubWltZVR5cGUgJiYgeGhyLm92ZXJyaWRlTWltZVR5cGUgKSB7XG5cdFx0XHRcdFx0eGhyLm92ZXJyaWRlTWltZVR5cGUoIG9wdGlvbnMubWltZVR5cGUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFgtUmVxdWVzdGVkLVdpdGggaGVhZGVyXG5cdFx0XHRcdC8vIEZvciBjcm9zcy1kb21haW4gcmVxdWVzdHMsIHNlZWluZyBhcyBjb25kaXRpb25zIGZvciBhIHByZWZsaWdodCBhcmVcblx0XHRcdFx0Ly8gYWtpbiB0byBhIGppZ3NhdyBwdXp6bGUsIHdlIHNpbXBseSBuZXZlciBzZXQgaXQgdG8gYmUgc3VyZS5cblx0XHRcdFx0Ly8gKGl0IGNhbiBhbHdheXMgYmUgc2V0IG9uIGEgcGVyLXJlcXVlc3QgYmFzaXMgb3IgZXZlbiB1c2luZyBhamF4U2V0dXApXG5cdFx0XHRcdC8vIEZvciBzYW1lLWRvbWFpbiByZXF1ZXN0cywgd29uJ3QgY2hhbmdlIGhlYWRlciBpZiBhbHJlYWR5IHByb3ZpZGVkLlxuXHRcdFx0XHRpZiAoICFvcHRpb25zLmNyb3NzRG9tYWluICYmICFoZWFkZXJzW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXSApIHtcblx0XHRcdFx0XHRoZWFkZXJzW1wiWC1SZXF1ZXN0ZWQtV2l0aFwiXSA9IFwiWE1MSHR0cFJlcXVlc3RcIjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFNldCBoZWFkZXJzXG5cdFx0XHRcdGZvciAoIGkgaW4gaGVhZGVycyApIHtcblx0XHRcdFx0XHR4aHIuc2V0UmVxdWVzdEhlYWRlciggaSwgaGVhZGVyc1sgaSBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBDYWxsYmFja1xuXHRcdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdFx0XHRcdHJldHVybiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHRcdGRlbGV0ZSB4aHJDYWxsYmFja3NbIGlkIF07XG5cdFx0XHRcdFx0XHRcdGNhbGxiYWNrID0geGhyLm9ubG9hZCA9IHhoci5vbmVycm9yID0gbnVsbDtcblxuXHRcdFx0XHRcdFx0XHRpZiAoIHR5cGUgPT09IFwiYWJvcnRcIiApIHtcblx0XHRcdFx0XHRcdFx0XHR4aHIuYWJvcnQoKTtcblx0XHRcdFx0XHRcdFx0fSBlbHNlIGlmICggdHlwZSA9PT0gXCJlcnJvclwiICkge1xuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gZmlsZTogcHJvdG9jb2wgYWx3YXlzIHlpZWxkcyBzdGF0dXMgMDsgc2VlICM4NjA1LCAjMTQyMDdcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dFxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0Y29tcGxldGUoXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHJTdWNjZXNzU3RhdHVzWyB4aHIuc3RhdHVzIF0gfHwgeGhyLnN0YXR1cyxcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5zdGF0dXNUZXh0LFxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUU5XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBBY2Nlc3NpbmcgYmluYXJ5LWRhdGEgcmVzcG9uc2VUZXh0IHRocm93cyBhbiBleGNlcHRpb25cblx0XHRcdFx0XHRcdFx0XHRcdC8vICgjMTE0MjYpXG5cdFx0XHRcdFx0XHRcdFx0XHR0eXBlb2YgeGhyLnJlc3BvbnNlVGV4dCA9PT0gXCJzdHJpbmdcIiA/IHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0dGV4dDogeGhyLnJlc3BvbnNlVGV4dFxuXHRcdFx0XHRcdFx0XHRcdFx0fSA6IHVuZGVmaW5lZCxcblx0XHRcdFx0XHRcdFx0XHRcdHhoci5nZXRBbGxSZXNwb25zZUhlYWRlcnMoKVxuXHRcdFx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9O1xuXHRcdFx0XHR9O1xuXG5cdFx0XHRcdC8vIExpc3RlbiB0byBldmVudHNcblx0XHRcdFx0eGhyLm9ubG9hZCA9IGNhbGxiYWNrKCk7XG5cdFx0XHRcdHhoci5vbmVycm9yID0gY2FsbGJhY2soXCJlcnJvclwiKTtcblxuXHRcdFx0XHQvLyBDcmVhdGUgdGhlIGFib3J0IGNhbGxiYWNrXG5cdFx0XHRcdGNhbGxiYWNrID0geGhyQ2FsbGJhY2tzWyBpZCBdID0gY2FsbGJhY2soXCJhYm9ydFwiKTtcblxuXHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdC8vIERvIHNlbmQgdGhlIHJlcXVlc3QgKHRoaXMgbWF5IHJhaXNlIGFuIGV4Y2VwdGlvbilcblx0XHRcdFx0XHR4aHIuc2VuZCggb3B0aW9ucy5oYXNDb250ZW50ICYmIG9wdGlvbnMuZGF0YSB8fCBudWxsICk7XG5cdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHRcdC8vICMxNDY4MzogT25seSByZXRocm93IGlmIHRoaXMgaGFzbid0IGJlZW4gbm90aWZpZWQgYXMgYW4gZXJyb3IgeWV0XG5cdFx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXG5cdFx0XHRhYm9ydDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0Y2FsbGJhY2soKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn0pO1xuXG5cblxuXG4vLyBJbnN0YWxsIHNjcmlwdCBkYXRhVHlwZVxualF1ZXJ5LmFqYXhTZXR1cCh7XG5cdGFjY2VwdHM6IHtcblx0XHRzY3JpcHQ6IFwidGV4dC9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9qYXZhc2NyaXB0LCBhcHBsaWNhdGlvbi9lY21hc2NyaXB0LCBhcHBsaWNhdGlvbi94LWVjbWFzY3JpcHRcIlxuXHR9LFxuXHRjb250ZW50czoge1xuXHRcdHNjcmlwdDogLyg/OmphdmF8ZWNtYSlzY3JpcHQvXG5cdH0sXG5cdGNvbnZlcnRlcnM6IHtcblx0XHRcInRleHQgc2NyaXB0XCI6IGZ1bmN0aW9uKCB0ZXh0ICkge1xuXHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIHRleHQgKTtcblx0XHRcdHJldHVybiB0ZXh0O1xuXHRcdH1cblx0fVxufSk7XG5cbi8vIEhhbmRsZSBjYWNoZSdzIHNwZWNpYWwgY2FzZSBhbmQgY3Jvc3NEb21haW5cbmpRdWVyeS5hamF4UHJlZmlsdGVyKCBcInNjcmlwdFwiLCBmdW5jdGlvbiggcyApIHtcblx0aWYgKCBzLmNhY2hlID09PSB1bmRlZmluZWQgKSB7XG5cdFx0cy5jYWNoZSA9IGZhbHNlO1xuXHR9XG5cdGlmICggcy5jcm9zc0RvbWFpbiApIHtcblx0XHRzLnR5cGUgPSBcIkdFVFwiO1xuXHR9XG59KTtcblxuLy8gQmluZCBzY3JpcHQgdGFnIGhhY2sgdHJhbnNwb3J0XG5qUXVlcnkuYWpheFRyYW5zcG9ydCggXCJzY3JpcHRcIiwgZnVuY3Rpb24oIHMgKSB7XG5cdC8vIFRoaXMgdHJhbnNwb3J0IG9ubHkgZGVhbHMgd2l0aCBjcm9zcyBkb21haW4gcmVxdWVzdHNcblx0aWYgKCBzLmNyb3NzRG9tYWluICkge1xuXHRcdHZhciBzY3JpcHQsIGNhbGxiYWNrO1xuXHRcdHJldHVybiB7XG5cdFx0XHRzZW5kOiBmdW5jdGlvbiggXywgY29tcGxldGUgKSB7XG5cdFx0XHRcdHNjcmlwdCA9IGpRdWVyeShcIjxzY3JpcHQ+XCIpLnByb3Aoe1xuXHRcdFx0XHRcdGFzeW5jOiB0cnVlLFxuXHRcdFx0XHRcdGNoYXJzZXQ6IHMuc2NyaXB0Q2hhcnNldCxcblx0XHRcdFx0XHRzcmM6IHMudXJsXG5cdFx0XHRcdH0pLm9uKFxuXHRcdFx0XHRcdFwibG9hZCBlcnJvclwiLFxuXHRcdFx0XHRcdGNhbGxiYWNrID0gZnVuY3Rpb24oIGV2dCApIHtcblx0XHRcdFx0XHRcdHNjcmlwdC5yZW1vdmUoKTtcblx0XHRcdFx0XHRcdGNhbGxiYWNrID0gbnVsbDtcblx0XHRcdFx0XHRcdGlmICggZXZ0ICkge1xuXHRcdFx0XHRcdFx0XHRjb21wbGV0ZSggZXZ0LnR5cGUgPT09IFwiZXJyb3JcIiA/IDQwNCA6IDIwMCwgZXZ0LnR5cGUgKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHNjcmlwdFsgMCBdICk7XG5cdFx0XHR9LFxuXHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59KTtcblxuXG5cblxudmFyIG9sZENhbGxiYWNrcyA9IFtdLFxuXHRyanNvbnAgPSAvKD0pXFw/KD89JnwkKXxcXD9cXD8vO1xuXG4vLyBEZWZhdWx0IGpzb25wIHNldHRpbmdzXG5qUXVlcnkuYWpheFNldHVwKHtcblx0anNvbnA6IFwiY2FsbGJhY2tcIixcblx0anNvbnBDYWxsYmFjazogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGNhbGxiYWNrID0gb2xkQ2FsbGJhY2tzLnBvcCgpIHx8ICggalF1ZXJ5LmV4cGFuZG8gKyBcIl9cIiArICggbm9uY2UrKyApICk7XG5cdFx0dGhpc1sgY2FsbGJhY2sgXSA9IHRydWU7XG5cdFx0cmV0dXJuIGNhbGxiYWNrO1xuXHR9XG59KTtcblxuLy8gRGV0ZWN0LCBub3JtYWxpemUgb3B0aW9ucyBhbmQgaW5zdGFsbCBjYWxsYmFja3MgZm9yIGpzb25wIHJlcXVlc3RzXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJqc29uIGpzb25wXCIsIGZ1bmN0aW9uKCBzLCBvcmlnaW5hbFNldHRpbmdzLCBqcVhIUiApIHtcblxuXHR2YXIgY2FsbGJhY2tOYW1lLCBvdmVyd3JpdHRlbiwgcmVzcG9uc2VDb250YWluZXIsXG5cdFx0anNvblByb3AgPSBzLmpzb25wICE9PSBmYWxzZSAmJiAoIHJqc29ucC50ZXN0KCBzLnVybCApID9cblx0XHRcdFwidXJsXCIgOlxuXHRcdFx0dHlwZW9mIHMuZGF0YSA9PT0gXCJzdHJpbmdcIiAmJiAhKCBzLmNvbnRlbnRUeXBlIHx8IFwiXCIgKS5pbmRleE9mKFwiYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkXCIpICYmIHJqc29ucC50ZXN0KCBzLmRhdGEgKSAmJiBcImRhdGFcIlxuXHRcdCk7XG5cblx0Ly8gSGFuZGxlIGlmZiB0aGUgZXhwZWN0ZWQgZGF0YSB0eXBlIGlzIFwianNvbnBcIiBvciB3ZSBoYXZlIGEgcGFyYW1ldGVyIHRvIHNldFxuXHRpZiAoIGpzb25Qcm9wIHx8IHMuZGF0YVR5cGVzWyAwIF0gPT09IFwianNvbnBcIiApIHtcblxuXHRcdC8vIEdldCBjYWxsYmFjayBuYW1lLCByZW1lbWJlcmluZyBwcmVleGlzdGluZyB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggaXRcblx0XHRjYWxsYmFja05hbWUgPSBzLmpzb25wQ2FsbGJhY2sgPSBqUXVlcnkuaXNGdW5jdGlvbiggcy5qc29ucENhbGxiYWNrICkgP1xuXHRcdFx0cy5qc29ucENhbGxiYWNrKCkgOlxuXHRcdFx0cy5qc29ucENhbGxiYWNrO1xuXG5cdFx0Ly8gSW5zZXJ0IGNhbGxiYWNrIGludG8gdXJsIG9yIGZvcm0gZGF0YVxuXHRcdGlmICgganNvblByb3AgKSB7XG5cdFx0XHRzWyBqc29uUHJvcCBdID0gc1sganNvblByb3AgXS5yZXBsYWNlKCByanNvbnAsIFwiJDFcIiArIGNhbGxiYWNrTmFtZSApO1xuXHRcdH0gZWxzZSBpZiAoIHMuanNvbnAgIT09IGZhbHNlICkge1xuXHRcdFx0cy51cmwgKz0gKCBycXVlcnkudGVzdCggcy51cmwgKSA/IFwiJlwiIDogXCI/XCIgKSArIHMuanNvbnAgKyBcIj1cIiArIGNhbGxiYWNrTmFtZTtcblx0XHR9XG5cblx0XHQvLyBVc2UgZGF0YSBjb252ZXJ0ZXIgdG8gcmV0cmlldmUganNvbiBhZnRlciBzY3JpcHQgZXhlY3V0aW9uXG5cdFx0cy5jb252ZXJ0ZXJzW1wic2NyaXB0IGpzb25cIl0gPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggIXJlc3BvbnNlQ29udGFpbmVyICkge1xuXHRcdFx0XHRqUXVlcnkuZXJyb3IoIGNhbGxiYWNrTmFtZSArIFwiIHdhcyBub3QgY2FsbGVkXCIgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXNwb25zZUNvbnRhaW5lclsgMCBdO1xuXHRcdH07XG5cblx0XHQvLyBmb3JjZSBqc29uIGRhdGFUeXBlXG5cdFx0cy5kYXRhVHlwZXNbIDAgXSA9IFwianNvblwiO1xuXG5cdFx0Ly8gSW5zdGFsbCBjYWxsYmFja1xuXHRcdG92ZXJ3cml0dGVuID0gd2luZG93WyBjYWxsYmFja05hbWUgXTtcblx0XHR3aW5kb3dbIGNhbGxiYWNrTmFtZSBdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXNwb25zZUNvbnRhaW5lciA9IGFyZ3VtZW50cztcblx0XHR9O1xuXG5cdFx0Ly8gQ2xlYW4tdXAgZnVuY3Rpb24gKGZpcmVzIGFmdGVyIGNvbnZlcnRlcnMpXG5cdFx0anFYSFIuYWx3YXlzKGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gUmVzdG9yZSBwcmVleGlzdGluZyB2YWx1ZVxuXHRcdFx0d2luZG93WyBjYWxsYmFja05hbWUgXSA9IG92ZXJ3cml0dGVuO1xuXG5cdFx0XHQvLyBTYXZlIGJhY2sgYXMgZnJlZVxuXHRcdFx0aWYgKCBzWyBjYWxsYmFja05hbWUgXSApIHtcblx0XHRcdFx0Ly8gbWFrZSBzdXJlIHRoYXQgcmUtdXNpbmcgdGhlIG9wdGlvbnMgZG9lc24ndCBzY3JldyB0aGluZ3MgYXJvdW5kXG5cdFx0XHRcdHMuanNvbnBDYWxsYmFjayA9IG9yaWdpbmFsU2V0dGluZ3MuanNvbnBDYWxsYmFjaztcblxuXHRcdFx0XHQvLyBzYXZlIHRoZSBjYWxsYmFjayBuYW1lIGZvciBmdXR1cmUgdXNlXG5cdFx0XHRcdG9sZENhbGxiYWNrcy5wdXNoKCBjYWxsYmFja05hbWUgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2FsbCBpZiBpdCB3YXMgYSBmdW5jdGlvbiBhbmQgd2UgaGF2ZSBhIHJlc3BvbnNlXG5cdFx0XHRpZiAoIHJlc3BvbnNlQ29udGFpbmVyICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCBvdmVyd3JpdHRlbiApICkge1xuXHRcdFx0XHRvdmVyd3JpdHRlbiggcmVzcG9uc2VDb250YWluZXJbIDAgXSApO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXNwb25zZUNvbnRhaW5lciA9IG92ZXJ3cml0dGVuID0gdW5kZWZpbmVkO1xuXHRcdH0pO1xuXG5cdFx0Ly8gRGVsZWdhdGUgdG8gc2NyaXB0XG5cdFx0cmV0dXJuIFwic2NyaXB0XCI7XG5cdH1cbn0pO1xuXG5cblxuXG4vLyBkYXRhOiBzdHJpbmcgb2YgaHRtbFxuLy8gY29udGV4dCAob3B0aW9uYWwpOiBJZiBzcGVjaWZpZWQsIHRoZSBmcmFnbWVudCB3aWxsIGJlIGNyZWF0ZWQgaW4gdGhpcyBjb250ZXh0LCBkZWZhdWx0cyB0byBkb2N1bWVudFxuLy8ga2VlcFNjcmlwdHMgKG9wdGlvbmFsKTogSWYgdHJ1ZSwgd2lsbCBpbmNsdWRlIHNjcmlwdHMgcGFzc2VkIGluIHRoZSBodG1sIHN0cmluZ1xualF1ZXJ5LnBhcnNlSFRNTCA9IGZ1bmN0aW9uKCBkYXRhLCBjb250ZXh0LCBrZWVwU2NyaXB0cyApIHtcblx0aWYgKCAhZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcImJvb2xlYW5cIiApIHtcblx0XHRrZWVwU2NyaXB0cyA9IGNvbnRleHQ7XG5cdFx0Y29udGV4dCA9IGZhbHNlO1xuXHR9XG5cdGNvbnRleHQgPSBjb250ZXh0IHx8IGRvY3VtZW50O1xuXG5cdHZhciBwYXJzZWQgPSByc2luZ2xlVGFnLmV4ZWMoIGRhdGEgKSxcblx0XHRzY3JpcHRzID0gIWtlZXBTY3JpcHRzICYmIFtdO1xuXG5cdC8vIFNpbmdsZSB0YWdcblx0aWYgKCBwYXJzZWQgKSB7XG5cdFx0cmV0dXJuIFsgY29udGV4dC5jcmVhdGVFbGVtZW50KCBwYXJzZWRbMV0gKSBdO1xuXHR9XG5cblx0cGFyc2VkID0galF1ZXJ5LmJ1aWxkRnJhZ21lbnQoIFsgZGF0YSBdLCBjb250ZXh0LCBzY3JpcHRzICk7XG5cblx0aWYgKCBzY3JpcHRzICYmIHNjcmlwdHMubGVuZ3RoICkge1xuXHRcdGpRdWVyeSggc2NyaXB0cyApLnJlbW92ZSgpO1xuXHR9XG5cblx0cmV0dXJuIGpRdWVyeS5tZXJnZSggW10sIHBhcnNlZC5jaGlsZE5vZGVzICk7XG59O1xuXG5cbi8vIEtlZXAgYSBjb3B5IG9mIHRoZSBvbGQgbG9hZCBtZXRob2RcbnZhciBfbG9hZCA9IGpRdWVyeS5mbi5sb2FkO1xuXG4vKipcbiAqIExvYWQgYSB1cmwgaW50byBhIHBhZ2VcbiAqL1xualF1ZXJ5LmZuLmxvYWQgPSBmdW5jdGlvbiggdXJsLCBwYXJhbXMsIGNhbGxiYWNrICkge1xuXHRpZiAoIHR5cGVvZiB1cmwgIT09IFwic3RyaW5nXCIgJiYgX2xvYWQgKSB7XG5cdFx0cmV0dXJuIF9sb2FkLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0fVxuXG5cdHZhciBzZWxlY3RvciwgdHlwZSwgcmVzcG9uc2UsXG5cdFx0c2VsZiA9IHRoaXMsXG5cdFx0b2ZmID0gdXJsLmluZGV4T2YoXCIgXCIpO1xuXG5cdGlmICggb2ZmID49IDAgKSB7XG5cdFx0c2VsZWN0b3IgPSBqUXVlcnkudHJpbSggdXJsLnNsaWNlKCBvZmYgKSApO1xuXHRcdHVybCA9IHVybC5zbGljZSggMCwgb2ZmICk7XG5cdH1cblxuXHQvLyBJZiBpdCdzIGEgZnVuY3Rpb25cblx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggcGFyYW1zICkgKSB7XG5cblx0XHQvLyBXZSBhc3N1bWUgdGhhdCBpdCdzIHRoZSBjYWxsYmFja1xuXHRcdGNhbGxiYWNrID0gcGFyYW1zO1xuXHRcdHBhcmFtcyA9IHVuZGVmaW5lZDtcblxuXHQvLyBPdGhlcndpc2UsIGJ1aWxkIGEgcGFyYW0gc3RyaW5nXG5cdH0gZWxzZSBpZiAoIHBhcmFtcyAmJiB0eXBlb2YgcGFyYW1zID09PSBcIm9iamVjdFwiICkge1xuXHRcdHR5cGUgPSBcIlBPU1RcIjtcblx0fVxuXG5cdC8vIElmIHdlIGhhdmUgZWxlbWVudHMgdG8gbW9kaWZ5LCBtYWtlIHRoZSByZXF1ZXN0XG5cdGlmICggc2VsZi5sZW5ndGggPiAwICkge1xuXHRcdGpRdWVyeS5hamF4KHtcblx0XHRcdHVybDogdXJsLFxuXG5cdFx0XHQvLyBpZiBcInR5cGVcIiB2YXJpYWJsZSBpcyB1bmRlZmluZWQsIHRoZW4gXCJHRVRcIiBtZXRob2Qgd2lsbCBiZSB1c2VkXG5cdFx0XHR0eXBlOiB0eXBlLFxuXHRcdFx0ZGF0YVR5cGU6IFwiaHRtbFwiLFxuXHRcdFx0ZGF0YTogcGFyYW1zXG5cdFx0fSkuZG9uZShmdW5jdGlvbiggcmVzcG9uc2VUZXh0ICkge1xuXG5cdFx0XHQvLyBTYXZlIHJlc3BvbnNlIGZvciB1c2UgaW4gY29tcGxldGUgY2FsbGJhY2tcblx0XHRcdHJlc3BvbnNlID0gYXJndW1lbnRzO1xuXG5cdFx0XHRzZWxmLmh0bWwoIHNlbGVjdG9yID9cblxuXHRcdFx0XHQvLyBJZiBhIHNlbGVjdG9yIHdhcyBzcGVjaWZpZWQsIGxvY2F0ZSB0aGUgcmlnaHQgZWxlbWVudHMgaW4gYSBkdW1teSBkaXZcblx0XHRcdFx0Ly8gRXhjbHVkZSBzY3JpcHRzIHRvIGF2b2lkIElFICdQZXJtaXNzaW9uIERlbmllZCcgZXJyb3JzXG5cdFx0XHRcdGpRdWVyeShcIjxkaXY+XCIpLmFwcGVuZCggalF1ZXJ5LnBhcnNlSFRNTCggcmVzcG9uc2VUZXh0ICkgKS5maW5kKCBzZWxlY3RvciApIDpcblxuXHRcdFx0XHQvLyBPdGhlcndpc2UgdXNlIHRoZSBmdWxsIHJlc3VsdFxuXHRcdFx0XHRyZXNwb25zZVRleHQgKTtcblxuXHRcdH0pLmNvbXBsZXRlKCBjYWxsYmFjayAmJiBmdW5jdGlvbigganFYSFIsIHN0YXR1cyApIHtcblx0XHRcdHNlbGYuZWFjaCggY2FsbGJhY2ssIHJlc3BvbnNlIHx8IFsganFYSFIucmVzcG9uc2VUZXh0LCBzdGF0dXMsIGpxWEhSIF0gKTtcblx0XHR9KTtcblx0fVxuXG5cdHJldHVybiB0aGlzO1xufTtcblxuXG5cblxuLy8gQXR0YWNoIGEgYnVuY2ggb2YgZnVuY3Rpb25zIGZvciBoYW5kbGluZyBjb21tb24gQUpBWCBldmVudHNcbmpRdWVyeS5lYWNoKCBbIFwiYWpheFN0YXJ0XCIsIFwiYWpheFN0b3BcIiwgXCJhamF4Q29tcGxldGVcIiwgXCJhamF4RXJyb3JcIiwgXCJhamF4U3VjY2Vzc1wiLCBcImFqYXhTZW5kXCIgXSwgZnVuY3Rpb24oIGksIHR5cGUgKSB7XG5cdGpRdWVyeS5mblsgdHlwZSBdID0gZnVuY3Rpb24oIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlLCBmbiApO1xuXHR9O1xufSk7XG5cblxuXG5cbmpRdWVyeS5leHByLmZpbHRlcnMuYW5pbWF0ZWQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0cmV0dXJuIGpRdWVyeS5ncmVwKGpRdWVyeS50aW1lcnMsIGZ1bmN0aW9uKCBmbiApIHtcblx0XHRyZXR1cm4gZWxlbSA9PT0gZm4uZWxlbTtcblx0fSkubGVuZ3RoO1xufTtcblxuXG5cblxudmFyIGRvY0VsZW0gPSB3aW5kb3cuZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuXG4vKipcbiAqIEdldHMgYSB3aW5kb3cgZnJvbSBhbiBlbGVtZW50XG4gKi9cbmZ1bmN0aW9uIGdldFdpbmRvdyggZWxlbSApIHtcblx0cmV0dXJuIGpRdWVyeS5pc1dpbmRvdyggZWxlbSApID8gZWxlbSA6IGVsZW0ubm9kZVR5cGUgPT09IDkgJiYgZWxlbS5kZWZhdWx0Vmlldztcbn1cblxualF1ZXJ5Lm9mZnNldCA9IHtcblx0c2V0T2Zmc2V0OiBmdW5jdGlvbiggZWxlbSwgb3B0aW9ucywgaSApIHtcblx0XHR2YXIgY3VyUG9zaXRpb24sIGN1ckxlZnQsIGN1ckNTU1RvcCwgY3VyVG9wLCBjdXJPZmZzZXQsIGN1ckNTU0xlZnQsIGNhbGN1bGF0ZVBvc2l0aW9uLFxuXHRcdFx0cG9zaXRpb24gPSBqUXVlcnkuY3NzKCBlbGVtLCBcInBvc2l0aW9uXCIgKSxcblx0XHRcdGN1ckVsZW0gPSBqUXVlcnkoIGVsZW0gKSxcblx0XHRcdHByb3BzID0ge307XG5cblx0XHQvLyBTZXQgcG9zaXRpb24gZmlyc3QsIGluLWNhc2UgdG9wL2xlZnQgYXJlIHNldCBldmVuIG9uIHN0YXRpYyBlbGVtXG5cdFx0aWYgKCBwb3NpdGlvbiA9PT0gXCJzdGF0aWNcIiApIHtcblx0XHRcdGVsZW0uc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG5cdFx0fVxuXG5cdFx0Y3VyT2Zmc2V0ID0gY3VyRWxlbS5vZmZzZXQoKTtcblx0XHRjdXJDU1NUb3AgPSBqUXVlcnkuY3NzKCBlbGVtLCBcInRvcFwiICk7XG5cdFx0Y3VyQ1NTTGVmdCA9IGpRdWVyeS5jc3MoIGVsZW0sIFwibGVmdFwiICk7XG5cdFx0Y2FsY3VsYXRlUG9zaXRpb24gPSAoIHBvc2l0aW9uID09PSBcImFic29sdXRlXCIgfHwgcG9zaXRpb24gPT09IFwiZml4ZWRcIiApICYmXG5cdFx0XHQoIGN1ckNTU1RvcCArIGN1ckNTU0xlZnQgKS5pbmRleE9mKFwiYXV0b1wiKSA+IC0xO1xuXG5cdFx0Ly8gTmVlZCB0byBiZSBhYmxlIHRvIGNhbGN1bGF0ZSBwb3NpdGlvbiBpZiBlaXRoZXJcblx0XHQvLyB0b3Agb3IgbGVmdCBpcyBhdXRvIGFuZCBwb3NpdGlvbiBpcyBlaXRoZXIgYWJzb2x1dGUgb3IgZml4ZWRcblx0XHRpZiAoIGNhbGN1bGF0ZVBvc2l0aW9uICkge1xuXHRcdFx0Y3VyUG9zaXRpb24gPSBjdXJFbGVtLnBvc2l0aW9uKCk7XG5cdFx0XHRjdXJUb3AgPSBjdXJQb3NpdGlvbi50b3A7XG5cdFx0XHRjdXJMZWZ0ID0gY3VyUG9zaXRpb24ubGVmdDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJUb3AgPSBwYXJzZUZsb2F0KCBjdXJDU1NUb3AgKSB8fCAwO1xuXHRcdFx0Y3VyTGVmdCA9IHBhcnNlRmxvYXQoIGN1ckNTU0xlZnQgKSB8fCAwO1xuXHRcdH1cblxuXHRcdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIG9wdGlvbnMgKSApIHtcblx0XHRcdG9wdGlvbnMgPSBvcHRpb25zLmNhbGwoIGVsZW0sIGksIGN1ck9mZnNldCApO1xuXHRcdH1cblxuXHRcdGlmICggb3B0aW9ucy50b3AgIT0gbnVsbCApIHtcblx0XHRcdHByb3BzLnRvcCA9ICggb3B0aW9ucy50b3AgLSBjdXJPZmZzZXQudG9wICkgKyBjdXJUb3A7XG5cdFx0fVxuXHRcdGlmICggb3B0aW9ucy5sZWZ0ICE9IG51bGwgKSB7XG5cdFx0XHRwcm9wcy5sZWZ0ID0gKCBvcHRpb25zLmxlZnQgLSBjdXJPZmZzZXQubGVmdCApICsgY3VyTGVmdDtcblx0XHR9XG5cblx0XHRpZiAoIFwidXNpbmdcIiBpbiBvcHRpb25zICkge1xuXHRcdFx0b3B0aW9ucy51c2luZy5jYWxsKCBlbGVtLCBwcm9wcyApO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdGN1ckVsZW0uY3NzKCBwcm9wcyApO1xuXHRcdH1cblx0fVxufTtcblxualF1ZXJ5LmZuLmV4dGVuZCh7XG5cdG9mZnNldDogZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cdFx0aWYgKCBhcmd1bWVudHMubGVuZ3RoICkge1xuXHRcdFx0cmV0dXJuIG9wdGlvbnMgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHRoaXMgOlxuXHRcdFx0XHR0aGlzLmVhY2goZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5Lm9mZnNldC5zZXRPZmZzZXQoIHRoaXMsIG9wdGlvbnMsIGkgKTtcblx0XHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0dmFyIGRvY0VsZW0sIHdpbixcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXG5cdFx0XHRib3ggPSB7IHRvcDogMCwgbGVmdDogMCB9LFxuXHRcdFx0ZG9jID0gZWxlbSAmJiBlbGVtLm93bmVyRG9jdW1lbnQ7XG5cblx0XHRpZiAoICFkb2MgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0ZG9jRWxlbSA9IGRvYy5kb2N1bWVudEVsZW1lbnQ7XG5cblx0XHQvLyBNYWtlIHN1cmUgaXQncyBub3QgYSBkaXNjb25uZWN0ZWQgRE9NIG5vZGVcblx0XHRpZiAoICFqUXVlcnkuY29udGFpbnMoIGRvY0VsZW0sIGVsZW0gKSApIHtcblx0XHRcdHJldHVybiBib3g7XG5cdFx0fVxuXG5cdFx0Ly8gU3VwcG9ydDogQmxhY2tCZXJyeSA1LCBpT1MgMyAob3JpZ2luYWwgaVBob25lKVxuXHRcdC8vIElmIHdlIGRvbid0IGhhdmUgZ0JDUiwganVzdCB1c2UgMCwwIHJhdGhlciB0aGFuIGVycm9yXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QgIT09IHN0cnVuZGVmaW5lZCApIHtcblx0XHRcdGJveCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cdFx0fVxuXHRcdHdpbiA9IGdldFdpbmRvdyggZG9jICk7XG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcDogYm94LnRvcCArIHdpbi5wYWdlWU9mZnNldCAtIGRvY0VsZW0uY2xpZW50VG9wLFxuXHRcdFx0bGVmdDogYm94LmxlZnQgKyB3aW4ucGFnZVhPZmZzZXQgLSBkb2NFbGVtLmNsaWVudExlZnRcblx0XHR9O1xuXHR9LFxuXG5cdHBvc2l0aW9uOiBmdW5jdGlvbigpIHtcblx0XHRpZiAoICF0aGlzWyAwIF0gKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0dmFyIG9mZnNldFBhcmVudCwgb2Zmc2V0LFxuXHRcdFx0ZWxlbSA9IHRoaXNbIDAgXSxcblx0XHRcdHBhcmVudE9mZnNldCA9IHsgdG9wOiAwLCBsZWZ0OiAwIH07XG5cblx0XHQvLyBGaXhlZCBlbGVtZW50cyBhcmUgb2Zmc2V0IGZyb20gd2luZG93IChwYXJlbnRPZmZzZXQgPSB7dG9wOjAsIGxlZnQ6IDB9LCBiZWNhdXNlIGl0IGlzIGl0cyBvbmx5IG9mZnNldCBwYXJlbnRcblx0XHRpZiAoIGpRdWVyeS5jc3MoIGVsZW0sIFwicG9zaXRpb25cIiApID09PSBcImZpeGVkXCIgKSB7XG5cdFx0XHQvLyBBc3N1bWUgZ2V0Qm91bmRpbmdDbGllbnRSZWN0IGlzIHRoZXJlIHdoZW4gY29tcHV0ZWQgcG9zaXRpb24gaXMgZml4ZWRcblx0XHRcdG9mZnNldCA9IGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gR2V0ICpyZWFsKiBvZmZzZXRQYXJlbnRcblx0XHRcdG9mZnNldFBhcmVudCA9IHRoaXMub2Zmc2V0UGFyZW50KCk7XG5cblx0XHRcdC8vIEdldCBjb3JyZWN0IG9mZnNldHNcblx0XHRcdG9mZnNldCA9IHRoaXMub2Zmc2V0KCk7XG5cdFx0XHRpZiAoICFqUXVlcnkubm9kZU5hbWUoIG9mZnNldFBhcmVudFsgMCBdLCBcImh0bWxcIiApICkge1xuXHRcdFx0XHRwYXJlbnRPZmZzZXQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0KCk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBvZmZzZXRQYXJlbnQgYm9yZGVyc1xuXHRcdFx0cGFyZW50T2Zmc2V0LnRvcCArPSBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnRbIDAgXSwgXCJib3JkZXJUb3BXaWR0aFwiLCB0cnVlICk7XG5cdFx0XHRwYXJlbnRPZmZzZXQubGVmdCArPSBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnRbIDAgXSwgXCJib3JkZXJMZWZ0V2lkdGhcIiwgdHJ1ZSApO1xuXHRcdH1cblxuXHRcdC8vIFN1YnRyYWN0IHBhcmVudCBvZmZzZXRzIGFuZCBlbGVtZW50IG1hcmdpbnNcblx0XHRyZXR1cm4ge1xuXHRcdFx0dG9wOiBvZmZzZXQudG9wIC0gcGFyZW50T2Zmc2V0LnRvcCAtIGpRdWVyeS5jc3MoIGVsZW0sIFwibWFyZ2luVG9wXCIsIHRydWUgKSxcblx0XHRcdGxlZnQ6IG9mZnNldC5sZWZ0IC0gcGFyZW50T2Zmc2V0LmxlZnQgLSBqUXVlcnkuY3NzKCBlbGVtLCBcIm1hcmdpbkxlZnRcIiwgdHJ1ZSApXG5cdFx0fTtcblx0fSxcblxuXHRvZmZzZXRQYXJlbnQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudCB8fCBkb2NFbGVtO1xuXG5cdFx0XHR3aGlsZSAoIG9mZnNldFBhcmVudCAmJiAoICFqUXVlcnkubm9kZU5hbWUoIG9mZnNldFBhcmVudCwgXCJodG1sXCIgKSAmJiBqUXVlcnkuY3NzKCBvZmZzZXRQYXJlbnQsIFwicG9zaXRpb25cIiApID09PSBcInN0YXRpY1wiICkgKSB7XG5cdFx0XHRcdG9mZnNldFBhcmVudCA9IG9mZnNldFBhcmVudC5vZmZzZXRQYXJlbnQ7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBvZmZzZXRQYXJlbnQgfHwgZG9jRWxlbTtcblx0XHR9KTtcblx0fVxufSk7XG5cbi8vIENyZWF0ZSBzY3JvbGxMZWZ0IGFuZCBzY3JvbGxUb3AgbWV0aG9kc1xualF1ZXJ5LmVhY2goIHsgc2Nyb2xsTGVmdDogXCJwYWdlWE9mZnNldFwiLCBzY3JvbGxUb3A6IFwicGFnZVlPZmZzZXRcIiB9LCBmdW5jdGlvbiggbWV0aG9kLCBwcm9wICkge1xuXHR2YXIgdG9wID0gXCJwYWdlWU9mZnNldFwiID09PSBwcm9wO1xuXG5cdGpRdWVyeS5mblsgbWV0aG9kIF0gPSBmdW5jdGlvbiggdmFsICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCBlbGVtLCBtZXRob2QsIHZhbCApIHtcblx0XHRcdHZhciB3aW4gPSBnZXRXaW5kb3coIGVsZW0gKTtcblxuXHRcdFx0aWYgKCB2YWwgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIHdpbiA/IHdpblsgcHJvcCBdIDogZWxlbVsgbWV0aG9kIF07XG5cdFx0XHR9XG5cblx0XHRcdGlmICggd2luICkge1xuXHRcdFx0XHR3aW4uc2Nyb2xsVG8oXG5cdFx0XHRcdFx0IXRvcCA/IHZhbCA6IHdpbmRvdy5wYWdlWE9mZnNldCxcblx0XHRcdFx0XHR0b3AgPyB2YWwgOiB3aW5kb3cucGFnZVlPZmZzZXRcblx0XHRcdFx0KTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0ZWxlbVsgbWV0aG9kIF0gPSB2YWw7XG5cdFx0XHR9XG5cdFx0fSwgbWV0aG9kLCB2YWwsIGFyZ3VtZW50cy5sZW5ndGgsIG51bGwgKTtcblx0fTtcbn0pO1xuXG4vLyBTdXBwb3J0OiBTYWZhcmk8NyssIENocm9tZTwzNytcbi8vIEFkZCB0aGUgdG9wL2xlZnQgY3NzSG9va3MgdXNpbmcgalF1ZXJ5LmZuLnBvc2l0aW9uXG4vLyBXZWJraXQgYnVnOiBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MjkwODRcbi8vIEJsaW5rIGJ1ZzogaHR0cHM6Ly9jb2RlLmdvb2dsZS5jb20vcC9jaHJvbWl1bS9pc3N1ZXMvZGV0YWlsP2lkPTIyOTI4MFxuLy8gZ2V0Q29tcHV0ZWRTdHlsZSByZXR1cm5zIHBlcmNlbnQgd2hlbiBzcGVjaWZpZWQgZm9yIHRvcC9sZWZ0L2JvdHRvbS9yaWdodDtcbi8vIHJhdGhlciB0aGFuIG1ha2UgdGhlIGNzcyBtb2R1bGUgZGVwZW5kIG9uIHRoZSBvZmZzZXQgbW9kdWxlLCBqdXN0IGNoZWNrIGZvciBpdCBoZXJlXG5qUXVlcnkuZWFjaCggWyBcInRvcFwiLCBcImxlZnRcIiBdLCBmdW5jdGlvbiggaSwgcHJvcCApIHtcblx0alF1ZXJ5LmNzc0hvb2tzWyBwcm9wIF0gPSBhZGRHZXRIb29rSWYoIHN1cHBvcnQucGl4ZWxQb3NpdGlvbixcblx0XHRmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0XHRpZiAoIGNvbXB1dGVkICkge1xuXHRcdFx0XHRjb21wdXRlZCA9IGN1ckNTUyggZWxlbSwgcHJvcCApO1xuXHRcdFx0XHQvLyBJZiBjdXJDU1MgcmV0dXJucyBwZXJjZW50YWdlLCBmYWxsYmFjayB0byBvZmZzZXRcblx0XHRcdFx0cmV0dXJuIHJudW1ub25weC50ZXN0KCBjb21wdXRlZCApID9cblx0XHRcdFx0XHRqUXVlcnkoIGVsZW0gKS5wb3NpdGlvbigpWyBwcm9wIF0gKyBcInB4XCIgOlxuXHRcdFx0XHRcdGNvbXB1dGVkO1xuXHRcdFx0fVxuXHRcdH1cblx0KTtcbn0pO1xuXG5cbi8vIENyZWF0ZSBpbm5lckhlaWdodCwgaW5uZXJXaWR0aCwgaGVpZ2h0LCB3aWR0aCwgb3V0ZXJIZWlnaHQgYW5kIG91dGVyV2lkdGggbWV0aG9kc1xualF1ZXJ5LmVhY2goIHsgSGVpZ2h0OiBcImhlaWdodFwiLCBXaWR0aDogXCJ3aWR0aFwiIH0sIGZ1bmN0aW9uKCBuYW1lLCB0eXBlICkge1xuXHRqUXVlcnkuZWFjaCggeyBwYWRkaW5nOiBcImlubmVyXCIgKyBuYW1lLCBjb250ZW50OiB0eXBlLCBcIlwiOiBcIm91dGVyXCIgKyBuYW1lIH0sIGZ1bmN0aW9uKCBkZWZhdWx0RXh0cmEsIGZ1bmNOYW1lICkge1xuXHRcdC8vIE1hcmdpbiBpcyBvbmx5IGZvciBvdXRlckhlaWdodCwgb3V0ZXJXaWR0aFxuXHRcdGpRdWVyeS5mblsgZnVuY05hbWUgXSA9IGZ1bmN0aW9uKCBtYXJnaW4sIHZhbHVlICkge1xuXHRcdFx0dmFyIGNoYWluYWJsZSA9IGFyZ3VtZW50cy5sZW5ndGggJiYgKCBkZWZhdWx0RXh0cmEgfHwgdHlwZW9mIG1hcmdpbiAhPT0gXCJib29sZWFuXCIgKSxcblx0XHRcdFx0ZXh0cmEgPSBkZWZhdWx0RXh0cmEgfHwgKCBtYXJnaW4gPT09IHRydWUgfHwgdmFsdWUgPT09IHRydWUgPyBcIm1hcmdpblwiIDogXCJib3JkZXJcIiApO1xuXG5cdFx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgdHlwZSwgdmFsdWUgKSB7XG5cdFx0XHRcdHZhciBkb2M7XG5cblx0XHRcdFx0aWYgKCBqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSApIHtcblx0XHRcdFx0XHQvLyBBcyBvZiA1LzgvMjAxMiB0aGlzIHdpbGwgeWllbGQgaW5jb3JyZWN0IHJlc3VsdHMgZm9yIE1vYmlsZSBTYWZhcmksIGJ1dCB0aGVyZVxuXHRcdFx0XHRcdC8vIGlzbid0IGEgd2hvbGUgbG90IHdlIGNhbiBkby4gU2VlIHB1bGwgcmVxdWVzdCBhdCB0aGlzIFVSTCBmb3IgZGlzY3Vzc2lvbjpcblx0XHRcdFx0XHQvLyBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9wdWxsLzc2NFxuXHRcdFx0XHRcdHJldHVybiBlbGVtLmRvY3VtZW50LmRvY3VtZW50RWxlbWVudFsgXCJjbGllbnRcIiArIG5hbWUgXTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEdldCBkb2N1bWVudCB3aWR0aCBvciBoZWlnaHRcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdGRvYyA9IGVsZW0uZG9jdW1lbnRFbGVtZW50O1xuXG5cdFx0XHRcdFx0Ly8gRWl0aGVyIHNjcm9sbFtXaWR0aC9IZWlnaHRdIG9yIG9mZnNldFtXaWR0aC9IZWlnaHRdIG9yIGNsaWVudFtXaWR0aC9IZWlnaHRdLFxuXHRcdFx0XHRcdC8vIHdoaWNoZXZlciBpcyBncmVhdGVzdFxuXHRcdFx0XHRcdHJldHVybiBNYXRoLm1heChcblx0XHRcdFx0XHRcdGVsZW0uYm9keVsgXCJzY3JvbGxcIiArIG5hbWUgXSwgZG9jWyBcInNjcm9sbFwiICsgbmFtZSBdLFxuXHRcdFx0XHRcdFx0ZWxlbS5ib2R5WyBcIm9mZnNldFwiICsgbmFtZSBdLCBkb2NbIFwib2Zmc2V0XCIgKyBuYW1lIF0sXG5cdFx0XHRcdFx0XHRkb2NbIFwiY2xpZW50XCIgKyBuYW1lIF1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHZhbHVlID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRcdC8vIEdldCB3aWR0aCBvciBoZWlnaHQgb24gdGhlIGVsZW1lbnQsIHJlcXVlc3RpbmcgYnV0IG5vdCBmb3JjaW5nIHBhcnNlRmxvYXRcblx0XHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCB0eXBlLCBleHRyYSApIDpcblxuXHRcdFx0XHRcdC8vIFNldCB3aWR0aCBvciBoZWlnaHQgb24gdGhlIGVsZW1lbnRcblx0XHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIHR5cGUsIHZhbHVlLCBleHRyYSApO1xuXHRcdFx0fSwgdHlwZSwgY2hhaW5hYmxlID8gbWFyZ2luIDogdW5kZWZpbmVkLCBjaGFpbmFibGUsIG51bGwgKTtcblx0XHR9O1xuXHR9KTtcbn0pO1xuXG5cbi8vIFRoZSBudW1iZXIgb2YgZWxlbWVudHMgY29udGFpbmVkIGluIHRoZSBtYXRjaGVkIGVsZW1lbnQgc2V0XG5qUXVlcnkuZm4uc2l6ZSA9IGZ1bmN0aW9uKCkge1xuXHRyZXR1cm4gdGhpcy5sZW5ndGg7XG59O1xuXG5qUXVlcnkuZm4uYW5kU2VsZiA9IGpRdWVyeS5mbi5hZGRCYWNrO1xuXG5cblxuXG4vLyBSZWdpc3RlciBhcyBhIG5hbWVkIEFNRCBtb2R1bGUsIHNpbmNlIGpRdWVyeSBjYW4gYmUgY29uY2F0ZW5hdGVkIHdpdGggb3RoZXJcbi8vIGZpbGVzIHRoYXQgbWF5IHVzZSBkZWZpbmUsIGJ1dCBub3QgdmlhIGEgcHJvcGVyIGNvbmNhdGVuYXRpb24gc2NyaXB0IHRoYXRcbi8vIHVuZGVyc3RhbmRzIGFub255bW91cyBBTUQgbW9kdWxlcy4gQSBuYW1lZCBBTUQgaXMgc2FmZXN0IGFuZCBtb3N0IHJvYnVzdFxuLy8gd2F5IHRvIHJlZ2lzdGVyLiBMb3dlcmNhc2UganF1ZXJ5IGlzIHVzZWQgYmVjYXVzZSBBTUQgbW9kdWxlIG5hbWVzIGFyZVxuLy8gZGVyaXZlZCBmcm9tIGZpbGUgbmFtZXMsIGFuZCBqUXVlcnkgaXMgbm9ybWFsbHkgZGVsaXZlcmVkIGluIGEgbG93ZXJjYXNlXG4vLyBmaWxlIG5hbWUuIERvIHRoaXMgYWZ0ZXIgY3JlYXRpbmcgdGhlIGdsb2JhbCBzbyB0aGF0IGlmIGFuIEFNRCBtb2R1bGUgd2FudHNcbi8vIHRvIGNhbGwgbm9Db25mbGljdCB0byBoaWRlIHRoaXMgdmVyc2lvbiBvZiBqUXVlcnksIGl0IHdpbGwgd29yay5cblxuLy8gTm90ZSB0aGF0IGZvciBtYXhpbXVtIHBvcnRhYmlsaXR5LCBsaWJyYXJpZXMgdGhhdCBhcmUgbm90IGpRdWVyeSBzaG91bGRcbi8vIGRlY2xhcmUgdGhlbXNlbHZlcyBhcyBhbm9ueW1vdXMgbW9kdWxlcywgYW5kIGF2b2lkIHNldHRpbmcgYSBnbG9iYWwgaWYgYW5cbi8vIEFNRCBsb2FkZXIgaXMgcHJlc2VudC4galF1ZXJ5IGlzIGEgc3BlY2lhbCBjYXNlLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlXG4vLyBodHRwczovL2dpdGh1Yi5jb20vanJidXJrZS9yZXF1aXJlanMvd2lraS9VcGRhdGluZy1leGlzdGluZy1saWJyYXJpZXMjd2lraS1hbm9uXG5cbmlmICggdHlwZW9mIGRlZmluZSA9PT0gXCJmdW5jdGlvblwiICYmIGRlZmluZS5hbWQgKSB7XG5cdGRlZmluZSggXCJqcXVlcnlcIiwgW10sIGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBqUXVlcnk7XG5cdH0pO1xufVxuXG5cblxuXG52YXJcblx0Ly8gTWFwIG92ZXIgalF1ZXJ5IGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5cdF9qUXVlcnkgPSB3aW5kb3cualF1ZXJ5LFxuXG5cdC8vIE1hcCBvdmVyIHRoZSAkIGluIGNhc2Ugb2Ygb3ZlcndyaXRlXG5cdF8kID0gd2luZG93LiQ7XG5cbmpRdWVyeS5ub0NvbmZsaWN0ID0gZnVuY3Rpb24oIGRlZXAgKSB7XG5cdGlmICggd2luZG93LiQgPT09IGpRdWVyeSApIHtcblx0XHR3aW5kb3cuJCA9IF8kO1xuXHR9XG5cblx0aWYgKCBkZWVwICYmIHdpbmRvdy5qUXVlcnkgPT09IGpRdWVyeSApIHtcblx0XHR3aW5kb3cualF1ZXJ5ID0gX2pRdWVyeTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnk7XG59O1xuXG4vLyBFeHBvc2UgalF1ZXJ5IGFuZCAkIGlkZW50aWZpZXJzLCBldmVuIGluIEFNRFxuLy8gKCM3MTAyI2NvbW1lbnQ6MTAsIGh0dHBzOi8vZ2l0aHViLmNvbS9qcXVlcnkvanF1ZXJ5L3B1bGwvNTU3KVxuLy8gYW5kIENvbW1vbkpTIGZvciBicm93c2VyIGVtdWxhdG9ycyAoIzEzNTY2KVxuaWYgKCB0eXBlb2Ygbm9HbG9iYWwgPT09IHN0cnVuZGVmaW5lZCApIHtcblx0d2luZG93LmpRdWVyeSA9IHdpbmRvdy4kID0galF1ZXJ5O1xufVxuXG5cblxuXG5yZXR1cm4galF1ZXJ5O1xuXG59KSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9ub2RlX21vZHVsZXMvanF1ZXJ5L2Rpc3QvanF1ZXJ5LmpzIiwiLyoqXHJcbiAqIOWIm+W7uuS4gOS4quiHquWumuS5ieS6i+S7tlxyXG4gKiBcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50TmFtZT0nY2xpY2snXSBcclxuICogQHBhcmFtIHtib29sZWFufSBbcDI9dHJ1ZV0gXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3AzPXRydWVdIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudCggZXZlbnROYW1lLCBkYXRhICkge1xyXG4gIGRhdGEgPSBkYXRhIHx8IHt9XHJcbiAgLy8gbGV0IGN1c3RvbUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdFdmVudCcgKVxyXG4gIC8vIGN1c3RvbUV2ZW50LmluaXRFdmVudCggZXZlbnROYW1lLCBwMiwgcDMgKVxyXG4gIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQoIGV2ZW50TmFtZSwgZGF0YS5kZXRhaWwgPyBkYXRhIDogeyBkZXRhaWw6IGRhdGEgfSApXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRXZlbnQgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHsgZGF0YU1pZGRsZURvbUlkIH0gZnJvbSBcIi4uL3V0aWxzL2NvbnN0YW50c1wiO1xyXG5cclxuLyoqXHJcbiAqIOWvueWFqOWxgFhNTEh0dHBSZXF1ZXN06KaG55uWIOebtOaOpeaPkuWFpeWIsGRvbVxyXG4gKiBcclxuICogQERhdGUgMjAxN+W5tDEx5pyIMjHml6VcclxuICovXHJcbmZ1bmN0aW9uIG1vZGlmeVJlc3BvbnNlKCByZXNwb25zZSApIHtcclxuXHJcbiAgdmFyIG9yaWdpbmFsX3Jlc3BvbnNlLCBtb2RpZmllZF9yZXNwb25zZTtcclxuXHJcbiAgaWYgKCB0aGlzLnJlYWR5U3RhdGUgPT09IDQgKSB7XHJcblxyXG4gICAgbGV0IHtcclxuICAgICAgcmVhZHlTdGF0ZSxcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgIHJlcXVlc3RNZXRob2QsXHJcbiAgICAgIHJlcXVlc3RVUkwsXHJcbiAgICAgIHJlc3BvbnNlLFxyXG4gICAgICByZXNwb25zZVRleHQsXHJcbiAgICAgIHJlc3BvbnNlVHlwZSxcclxuICAgICAgcmVzcG9uc2VVUkwsXHJcbiAgICAgIHJlc3BvbnNlWE1MLFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIHN0YXR1c1RleHQsXHJcbiAgICAgIHRpbWVvdXQsXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsc1xyXG4gICAgfSA9IHRoaXM7XHJcblxyXG5cclxuICAgICQoIGAjJHtkYXRhTWlkZGxlRG9tSWR9YCApLnZhbCggSlNPTi5zdHJpbmdpZnkoIHtcclxuICAgICAgcmVhZHlTdGF0ZSxcclxuICAgICAgcmVxdWVzdERhdGEsXHJcbiAgICAgIHJlcXVlc3RNZXRob2QsXHJcbiAgICAgIHJlcXVlc3RVUkwsXHJcbiAgICAgIHJlc3BvbnNlLFxyXG4gICAgICByZXNwb25zZVRleHQsXHJcbiAgICAgIHJlc3BvbnNlVHlwZSxcclxuICAgICAgcmVzcG9uc2VVUkwsXHJcbiAgICAgIHJlc3BvbnNlWE1MLFxyXG4gICAgICBzdGF0dXMsXHJcbiAgICAgIHN0YXR1c1RleHQsXHJcbiAgICAgIHRpbWVvdXQsXHJcbiAgICAgIHdpdGhDcmVkZW50aWFsc1xyXG4gICAgfSApIClcclxuICAgIGRvY3VtZW50LmJvZHkuZGlzcGF0Y2hFdmVudCggY3JlYXRlQ3VzdG9tRXZlbnQoICdleHRlbnNpb25QYWdlRXZlbnRGcm9tRnJhbWUnLCB7IGRldGFpbDogdGhpcyB9ICkgKVxyXG4gIH1cclxufVxyXG5YTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUub3BlbiA9ICggZnVuY3Rpb24oIG9yaWdpbmFsX2Z1bmN0aW9uICkge1xyXG4gIHJldHVybiBmdW5jdGlvbiggbWV0aG9kLCB1cmwsIGFzeW5jICkge1xyXG4gICAgLy8g5L+d5a2Y6K+35rGC55u45YWz5Y+C5pWwXHJcbiAgICB0aGlzLnJlcXVlc3RNZXRob2QgPSBtZXRob2Q7XHJcbiAgICB0aGlzLnJlcXVlc3RVUkwgPSB1cmw7XHJcblxyXG4gICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCBcInJlYWR5c3RhdGVjaGFuZ2VcIiwgbW9kaWZ5UmVzcG9uc2UgKTtcclxuICAgIHJldHVybiBvcmlnaW5hbF9mdW5jdGlvbi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XHJcbiAgfTtcclxufSggWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLm9wZW4gKSApO1xyXG5cclxuWE1MSHR0cFJlcXVlc3QucHJvdG90eXBlLnNlbmQgPSAoIGZ1bmN0aW9uKCBvcmlnaW5hbF9mdW5jdGlvbiApIHtcclxuICByZXR1cm4gZnVuY3Rpb24oIGRhdGEgKSB7XHJcbiAgICAvLyDkv53lrZjor7fmsYLnm7jlhbPlj4LmlbBcclxuICAgIHRoaXMucmVxdWVzdERhdGEgPSBkYXRhO1xyXG4gICAgcmV0dXJuIG9yaWdpbmFsX2Z1bmN0aW9uLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcclxuICB9O1xyXG59KCBYTUxIdHRwUmVxdWVzdC5wcm90b3R5cGUuc2VuZCApICk7XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250ZW50U2NyaXB0L3hoci5qcyIsImV4cG9ydCBjb25zdCBkYXRhTWlkZGxlRG9tSWQgPSAnYmlnd2UtaW5wdXQtaGlkZGVuJztcblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvdXRpbHMvY29uc3RhbnRzLmpzIl0sInNvdXJjZVJvb3QiOiIifQ==