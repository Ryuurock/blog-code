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
/******/ 	return __webpack_require__(__webpack_require__.s = 40);
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

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (immutable) */ __webpack_exports__["b"] = goPage;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(13);
/**
 * 作用域在隔离的window环境下
 * 
 * 
 * 
 * 
 */



let urlToken = null;

const urlFunMap = {
  '/'() {
    // $( 'form.login_form .mpui-form__input[name="account"]' )
    //   .val( 'xxxxxxx' )[ 0 ]
    //   .dispatchEvent( createCustomEvent( 'input' ) )

    // $( 'form.login_form .mpui-form__input[name="password"]' )
    //   .val( 'xxxxx' )[ 0 ]
    //   .dispatchEvent( createCustomEvent( 'input' ) )

    // $( 'form.login_form .btn_login' )[ 0 ]
    //   .dispatchEvent( new Event( 'click' ) );

    return {
      event: 'enteredIndex'
    };
  },
  '/cgi-bin/bizlogin'() {
    return {
      // 扫码
      event: 'scanCode',
      data: {
        src: $('.qrcode.js_qrcode').prop('src')
      }
    };
  },
  /**
   * 进入首页的操作
   * 
   */
  '/cgi-bin/home'() {
    return {
      event: 'enteredHome'
    };
  },
  '/cgi-bin/appmsg': {
    'media/appmsg_edit_v2'() {

      return {
        event: 'enteredEditor'
      };
    }
  }

  /**
   * 处理微信每个页面初始化要做的事
   * 
   * @export
   * @param {any} url 
   */
};/* harmony default export */ __webpack_exports__["a"] = (function (location) {
  let {
    pathname,
    origin,
    hostname,
    search
  } = location;

  let handler = urlFunMap[pathname];

  let searchMap = {};

  search.substr(1, Infinity).split('&').forEach(item => {
    let [key, value] = item.split('=');
    searchMap[key] = value;
  });
  urlToken = searchMap['token'];

  if (typeof handler !== 'function' && searchMap.t) {
    handler = handler[searchMap.t];
  }

  return handler && handler(searchMap);
});

function goPage(url) {
  location.href = `${url}${urlToken}`;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

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

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__platform_weixin_pageEventHandler__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__platform_weixin_bigwePageEventHandler__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mixin__ = __webpack_require__(45);





function sendMessageToPage(request) {
  document.body.dispatchEvent(Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* createCustomEvent */])('extensionBrowerEvent', { detail: request }));
}
/**
 * 这里应该接收来自background脚本的消息
 */
Object(__WEBPACK_IMPORTED_MODULE_3__mixin__["a" /* onMessageFromBackground */])('sendMessageToPage', sendMessageToPage);

let handler = {
  wechat: {
    // 这里不会执行
    page: __WEBPACK_IMPORTED_MODULE_1__platform_weixin_pageEventHandler__["a" /* default */],
    bigwePage: __WEBPACK_IMPORTED_MODULE_2__platform_weixin_bigwePageEventHandler__["a" /* default */]
  },
  bigwe: {
    // 插件能力检测
    extentionDetection() {
      sendMessageToPage({
        platform: 'bigwe',
        event: 'hasExtension',
        data: 1
      });
    }
  }
};

/**
 * 接收来自页面的事件
 * 
 */
// 根据不同平台实例化不同iframe
document.body.addEventListener('extensionPageEvent', function ({ detail }) {
  let { platform, event, data } = detail;
  let platformHandler = handler[platform];
  if (!platform || !platformHandler) throw new Error('平台错误');
  let [prefix, eventName] = event.split('.');

  let eventHandlers = platformHandler[prefix];
  // 执行页面主动发起的事件
  if (prefix === 'bigwePage' || typeof eventHandlers === 'function') {
    typeof eventHandlers === 'function' ? eventHandlers(data) : eventHandlers[eventName] && eventHandlers[eventName](data);
  } else {
    // 这里要通过background作为桥来通知各个平台的业务代码执行，本脚本不插入iframe 
    // 所以不执行业务代码，发消息给iframe的contentscript来执行代码
    chrome.extension.sendMessage({
      type: 'sendMessageToFrameContentScript',
      data: $.extend(detail, { event: eventName })
    });
  }
}, false);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = onMessageFromBackground;
function onMessageFromBackground(operate, callback) {
  chrome.extension.onMessage.addListener(function (request, sender, sendMessage) {
    if (request.operate === operate) {
      callback.apply(this, arguments);
    }
  });
}

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__wxRouterMapping__ = __webpack_require__(12);
/**
 * 操作插入到页面的iframe
 */



const createEditorUrl = '/cgi-bin/appmsg?t=media/appmsg_edit_v2&action=edit&isNew=1&type=10&lang=zh_CN&token=';

/* harmony default export */ __webpack_exports__["a"] = ({
  login({ username, password, code }) {
    $('form.login_form .mpui-form__input[name="account"]').val(username)[0].dispatchEvent(Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* createCustomEvent */])('input'));

    $('form.login_form .mpui-form__input[name="password"]').val(password)[0].dispatchEvent(Object(__WEBPACK_IMPORTED_MODULE_0__utils_utils__["a" /* createCustomEvent */])('input'));

    $('form.login_form .btn_login')[0].dispatchEvent(new Event('click'));
  },
  goEditor() {
    Object(__WEBPACK_IMPORTED_MODULE_1__wxRouterMapping__["b" /* goPage */])(createEditorUrl);
  }
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_utils__ = __webpack_require__(13);

/**
 * 操作本页bigwe.com的事件
 */


/**
 * 由页面主动发起的事件
 */

const wechatFrameID = 'bigwe-weixin-frame';

/* harmony default export */ __webpack_exports__["a"] = ({
  /**
   * 微信各种操作之前，需要插入iframe
   */
  initFrame() {
    !$(`#${wechatFrameID}`).length ? $(`<iframe width="100%" height="500px" id="${wechatFrameID}"/>`).prop('src', 'https://mp.weixin.qq.com').appendTo('body').bind('load', function () {
      chrome.extension.sendMessage({ type: 'executeScript', data: 'build/insertWechat.js' });
    }) : $(`#${wechatFrameID}`)[0].contentWindow.location.reload();
  }

});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(1)))

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgYzZkNTQ1OTUxOGRmY2ZiNTVmMmEiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxhdGZvcm0vd2VpeGluL3d4Um91dGVyTWFwcGluZy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvdXRpbHMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbnRlbnRTY3JpcHQvY29udGVudFNjcmlwdC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY29udGVudFNjcmlwdC9taXhpbi5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvcGxhdGZvcm0vd2VpeGluL3BhZ2VFdmVudEhhbmRsZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BsYXRmb3JtL3dlaXhpbi9iaWd3ZVBhZ2VFdmVudEhhbmRsZXIuanMiXSwibmFtZXMiOlsiZ2xvYmFsIiwiZmFjdG9yeSIsIm1vZHVsZSIsImV4cG9ydHMiLCJkb2N1bWVudCIsInciLCJFcnJvciIsIndpbmRvdyIsIm5vR2xvYmFsIiwiYXJyIiwic2xpY2UiLCJjb25jYXQiLCJwdXNoIiwiaW5kZXhPZiIsImNsYXNzMnR5cGUiLCJ0b1N0cmluZyIsImhhc093biIsImhhc093blByb3BlcnR5Iiwic3VwcG9ydCIsInZlcnNpb24iLCJqUXVlcnkiLCJzZWxlY3RvciIsImNvbnRleHQiLCJmbiIsImluaXQiLCJydHJpbSIsInJtc1ByZWZpeCIsInJkYXNoQWxwaGEiLCJmY2FtZWxDYXNlIiwiYWxsIiwibGV0dGVyIiwidG9VcHBlckNhc2UiLCJwcm90b3R5cGUiLCJqcXVlcnkiLCJjb25zdHJ1Y3RvciIsImxlbmd0aCIsInRvQXJyYXkiLCJjYWxsIiwiZ2V0IiwibnVtIiwicHVzaFN0YWNrIiwiZWxlbXMiLCJyZXQiLCJtZXJnZSIsInByZXZPYmplY3QiLCJlYWNoIiwiY2FsbGJhY2siLCJhcmdzIiwibWFwIiwiZWxlbSIsImkiLCJhcHBseSIsImFyZ3VtZW50cyIsImZpcnN0IiwiZXEiLCJsYXN0IiwibGVuIiwiaiIsImVuZCIsInNvcnQiLCJzcGxpY2UiLCJleHRlbmQiLCJvcHRpb25zIiwibmFtZSIsInNyYyIsImNvcHkiLCJjb3B5SXNBcnJheSIsImNsb25lIiwidGFyZ2V0IiwiZGVlcCIsImlzRnVuY3Rpb24iLCJpc1BsYWluT2JqZWN0IiwiaXNBcnJheSIsInVuZGVmaW5lZCIsImV4cGFuZG8iLCJNYXRoIiwicmFuZG9tIiwicmVwbGFjZSIsImlzUmVhZHkiLCJlcnJvciIsIm1zZyIsIm5vb3AiLCJvYmoiLCJ0eXBlIiwiQXJyYXkiLCJpc1dpbmRvdyIsImlzTnVtZXJpYyIsInBhcnNlRmxvYXQiLCJub2RlVHlwZSIsImlzRW1wdHlPYmplY3QiLCJnbG9iYWxFdmFsIiwiY29kZSIsInNjcmlwdCIsImluZGlyZWN0IiwiZXZhbCIsInRyaW0iLCJjcmVhdGVFbGVtZW50IiwidGV4dCIsImhlYWQiLCJhcHBlbmRDaGlsZCIsInBhcmVudE5vZGUiLCJyZW1vdmVDaGlsZCIsImNhbWVsQ2FzZSIsInN0cmluZyIsIm5vZGVOYW1lIiwidG9Mb3dlckNhc2UiLCJ2YWx1ZSIsImlzQXJyYXlsaWtlIiwibWFrZUFycmF5IiwicmVzdWx0cyIsIk9iamVjdCIsImluQXJyYXkiLCJzZWNvbmQiLCJncmVwIiwiaW52ZXJ0IiwiY2FsbGJhY2tJbnZlcnNlIiwibWF0Y2hlcyIsImNhbGxiYWNrRXhwZWN0IiwiYXJnIiwiZ3VpZCIsInByb3h5IiwidG1wIiwibm93IiwiRGF0ZSIsInNwbGl0IiwiU2l6emxlIiwiRXhwciIsImdldFRleHQiLCJpc1hNTCIsInRva2VuaXplIiwiY29tcGlsZSIsInNlbGVjdCIsIm91dGVybW9zdENvbnRleHQiLCJzb3J0SW5wdXQiLCJoYXNEdXBsaWNhdGUiLCJzZXREb2N1bWVudCIsImRvY0VsZW0iLCJkb2N1bWVudElzSFRNTCIsInJidWdneVFTQSIsInJidWdneU1hdGNoZXMiLCJjb250YWlucyIsInByZWZlcnJlZERvYyIsImRpcnJ1bnMiLCJkb25lIiwiY2xhc3NDYWNoZSIsImNyZWF0ZUNhY2hlIiwidG9rZW5DYWNoZSIsImNvbXBpbGVyQ2FjaGUiLCJzb3J0T3JkZXIiLCJhIiwiYiIsIk1BWF9ORUdBVElWRSIsInBvcCIsInB1c2hfbmF0aXZlIiwibGlzdCIsImJvb2xlYW5zIiwid2hpdGVzcGFjZSIsImNoYXJhY3RlckVuY29kaW5nIiwiaWRlbnRpZmllciIsImF0dHJpYnV0ZXMiLCJwc2V1ZG9zIiwicndoaXRlc3BhY2UiLCJSZWdFeHAiLCJyY29tbWEiLCJyY29tYmluYXRvcnMiLCJyYXR0cmlidXRlUXVvdGVzIiwicnBzZXVkbyIsInJpZGVudGlmaWVyIiwibWF0Y2hFeHByIiwicmlucHV0cyIsInJoZWFkZXIiLCJybmF0aXZlIiwicnF1aWNrRXhwciIsInJzaWJsaW5nIiwicmVzY2FwZSIsInJ1bmVzY2FwZSIsImZ1bmVzY2FwZSIsIl8iLCJlc2NhcGVkIiwiZXNjYXBlZFdoaXRlc3BhY2UiLCJoaWdoIiwiU3RyaW5nIiwiZnJvbUNoYXJDb2RlIiwidW5sb2FkSGFuZGxlciIsImNoaWxkTm9kZXMiLCJlIiwiZWxzIiwic2VlZCIsIm1hdGNoIiwibSIsImdyb3VwcyIsIm9sZCIsIm5pZCIsIm5ld0NvbnRleHQiLCJuZXdTZWxlY3RvciIsIm93bmVyRG9jdW1lbnQiLCJleGVjIiwiZ2V0RWxlbWVudEJ5SWQiLCJpZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsInFzYSIsInRlc3QiLCJnZXRBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJ0b1NlbGVjdG9yIiwidGVzdENvbnRleHQiLCJqb2luIiwicXVlcnlTZWxlY3RvckFsbCIsInFzYUVycm9yIiwicmVtb3ZlQXR0cmlidXRlIiwia2V5cyIsImNhY2hlIiwia2V5IiwiY2FjaGVMZW5ndGgiLCJzaGlmdCIsIm1hcmtGdW5jdGlvbiIsImFzc2VydCIsImRpdiIsImFkZEhhbmRsZSIsImF0dHJzIiwiaGFuZGxlciIsImF0dHJIYW5kbGUiLCJzaWJsaW5nQ2hlY2siLCJjdXIiLCJkaWZmIiwic291cmNlSW5kZXgiLCJuZXh0U2libGluZyIsImNyZWF0ZUlucHV0UHNldWRvIiwiY3JlYXRlQnV0dG9uUHNldWRvIiwiY3JlYXRlUG9zaXRpb25hbFBzZXVkbyIsImFyZ3VtZW50IiwibWF0Y2hJbmRleGVzIiwiZG9jdW1lbnRFbGVtZW50Iiwibm9kZSIsImhhc0NvbXBhcmUiLCJwYXJlbnQiLCJkb2MiLCJkZWZhdWx0VmlldyIsInRvcCIsImFkZEV2ZW50TGlzdGVuZXIiLCJhdHRhY2hFdmVudCIsImNsYXNzTmFtZSIsImNyZWF0ZUNvbW1lbnQiLCJnZXRCeUlkIiwiZ2V0RWxlbWVudHNCeU5hbWUiLCJmaW5kIiwiZmlsdGVyIiwiYXR0cklkIiwiZ2V0QXR0cmlidXRlTm9kZSIsInRhZyIsImlubmVySFRNTCIsImlucHV0IiwibWF0Y2hlc1NlbGVjdG9yIiwid2Via2l0TWF0Y2hlc1NlbGVjdG9yIiwibW96TWF0Y2hlc1NlbGVjdG9yIiwib01hdGNoZXNTZWxlY3RvciIsIm1zTWF0Y2hlc1NlbGVjdG9yIiwiZGlzY29ubmVjdGVkTWF0Y2giLCJjb21wYXJlRG9jdW1lbnRQb3NpdGlvbiIsImFkb3duIiwiYnVwIiwiY29tcGFyZSIsInNvcnREZXRhY2hlZCIsImF1cCIsImFwIiwiYnAiLCJ1bnNoaWZ0IiwiZXhwciIsImVsZW1lbnRzIiwiYXR0ciIsInZhbCIsInNwZWNpZmllZCIsInVuaXF1ZVNvcnQiLCJkdXBsaWNhdGVzIiwiZGV0ZWN0RHVwbGljYXRlcyIsInNvcnRTdGFibGUiLCJ0ZXh0Q29udGVudCIsImZpcnN0Q2hpbGQiLCJub2RlVmFsdWUiLCJzZWxlY3RvcnMiLCJjcmVhdGVQc2V1ZG8iLCJyZWxhdGl2ZSIsImRpciIsInByZUZpbHRlciIsImV4Y2VzcyIsInVucXVvdGVkIiwibm9kZU5hbWVTZWxlY3RvciIsInBhdHRlcm4iLCJvcGVyYXRvciIsImNoZWNrIiwicmVzdWx0Iiwid2hhdCIsInNpbXBsZSIsImZvcndhcmQiLCJvZlR5cGUiLCJ4bWwiLCJvdXRlckNhY2hlIiwibm9kZUluZGV4Iiwic3RhcnQiLCJ1c2VDYWNoZSIsImxhc3RDaGlsZCIsInBzZXVkbyIsInNldEZpbHRlcnMiLCJpZHgiLCJtYXRjaGVkIiwibWF0Y2hlciIsInVubWF0Y2hlZCIsImlubmVyVGV4dCIsImxhbmciLCJlbGVtTGFuZyIsImhhc2giLCJsb2NhdGlvbiIsImFjdGl2ZUVsZW1lbnQiLCJoYXNGb2N1cyIsImhyZWYiLCJ0YWJJbmRleCIsImRpc2FibGVkIiwiY2hlY2tlZCIsInNlbGVjdGVkIiwic2VsZWN0ZWRJbmRleCIsInJhZGlvIiwiY2hlY2tib3giLCJmaWxlIiwicGFzc3dvcmQiLCJpbWFnZSIsInN1Ym1pdCIsInJlc2V0IiwiZmlsdGVycyIsInBhcnNlT25seSIsInRva2VucyIsInNvRmFyIiwicHJlRmlsdGVycyIsImNhY2hlZCIsImFkZENvbWJpbmF0b3IiLCJjb21iaW5hdG9yIiwiYmFzZSIsImNoZWNrTm9uRWxlbWVudHMiLCJkb25lTmFtZSIsIm9sZENhY2hlIiwibmV3Q2FjaGUiLCJlbGVtZW50TWF0Y2hlciIsIm1hdGNoZXJzIiwibXVsdGlwbGVDb250ZXh0cyIsImNvbnRleHRzIiwiY29uZGVuc2UiLCJuZXdVbm1hdGNoZWQiLCJtYXBwZWQiLCJzZXRNYXRjaGVyIiwicG9zdEZpbHRlciIsInBvc3RGaW5kZXIiLCJwb3N0U2VsZWN0b3IiLCJ0ZW1wIiwicHJlTWFwIiwicG9zdE1hcCIsInByZWV4aXN0aW5nIiwibWF0Y2hlckluIiwibWF0Y2hlck91dCIsIm1hdGNoZXJGcm9tVG9rZW5zIiwiY2hlY2tDb250ZXh0IiwibGVhZGluZ1JlbGF0aXZlIiwiaW1wbGljaXRSZWxhdGl2ZSIsIm1hdGNoQ29udGV4dCIsIm1hdGNoQW55Q29udGV4dCIsIm1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyIsImVsZW1lbnRNYXRjaGVycyIsInNldE1hdGNoZXJzIiwiYnlTZXQiLCJieUVsZW1lbnQiLCJzdXBlck1hdGNoZXIiLCJvdXRlcm1vc3QiLCJtYXRjaGVkQ291bnQiLCJzZXRNYXRjaGVkIiwiY29udGV4dEJhY2t1cCIsImRpcnJ1bnNVbmlxdWUiLCJ0b2tlbiIsImNvbXBpbGVkIiwiZGl2MSIsImRlZmF1bHRWYWx1ZSIsInVuaXF1ZSIsImlzWE1MRG9jIiwicm5lZWRzQ29udGV4dCIsIm5lZWRzQ29udGV4dCIsInJzaW5nbGVUYWciLCJyaXNTaW1wbGUiLCJ3aW5ub3ciLCJxdWFsaWZpZXIiLCJub3QiLCJzZWxmIiwiaXMiLCJyb290alF1ZXJ5IiwicGFyc2VIVE1MIiwicmVhZHkiLCJycGFyZW50c3ByZXYiLCJndWFyYW50ZWVkVW5pcXVlIiwiY2hpbGRyZW4iLCJjb250ZW50cyIsIm5leHQiLCJwcmV2IiwidW50aWwiLCJ0cnVuY2F0ZSIsInNpYmxpbmciLCJuIiwiaGFzIiwidGFyZ2V0cyIsImwiLCJjbG9zZXN0IiwicG9zIiwiaW5kZXgiLCJwcmV2QWxsIiwiYWRkIiwiYWRkQmFjayIsInBhcmVudHMiLCJwYXJlbnRzVW50aWwiLCJuZXh0QWxsIiwibmV4dFVudGlsIiwicHJldlVudGlsIiwic2libGluZ3MiLCJjb250ZW50RG9jdW1lbnQiLCJyZXZlcnNlIiwicm5vdHdoaXRlIiwib3B0aW9uc0NhY2hlIiwiY3JlYXRlT3B0aW9ucyIsIm9iamVjdCIsImZsYWciLCJDYWxsYmFja3MiLCJtZW1vcnkiLCJmaXJlZCIsImZpcmluZyIsImZpcmluZ1N0YXJ0IiwiZmlyaW5nTGVuZ3RoIiwiZmlyaW5nSW5kZXgiLCJzdGFjayIsIm9uY2UiLCJmaXJlIiwiZGF0YSIsInN0b3BPbkZhbHNlIiwiZGlzYWJsZSIsInJlbW92ZSIsImVtcHR5IiwibG9jayIsImxvY2tlZCIsImZpcmVXaXRoIiwiRGVmZXJyZWQiLCJmdW5jIiwidHVwbGVzIiwic3RhdGUiLCJwcm9taXNlIiwiYWx3YXlzIiwiZGVmZXJyZWQiLCJmYWlsIiwidGhlbiIsImZucyIsIm5ld0RlZmVyIiwidHVwbGUiLCJyZXR1cm5lZCIsInJlc29sdmUiLCJyZWplY3QiLCJwcm9ncmVzcyIsIm5vdGlmeSIsInBpcGUiLCJzdGF0ZVN0cmluZyIsIndoZW4iLCJzdWJvcmRpbmF0ZSIsInJlc29sdmVWYWx1ZXMiLCJyZW1haW5pbmciLCJ1cGRhdGVGdW5jIiwidmFsdWVzIiwicHJvZ3Jlc3NWYWx1ZXMiLCJub3RpZnlXaXRoIiwicmVzb2x2ZVdpdGgiLCJwcm9ncmVzc0NvbnRleHRzIiwicmVzb2x2ZUNvbnRleHRzIiwicmVhZHlMaXN0IiwicmVhZHlXYWl0IiwiaG9sZFJlYWR5IiwiaG9sZCIsIndhaXQiLCJ0cmlnZ2VySGFuZGxlciIsIm9mZiIsImNvbXBsZXRlZCIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZWFkeVN0YXRlIiwic2V0VGltZW91dCIsImFjY2VzcyIsImNoYWluYWJsZSIsImVtcHR5R2V0IiwicmF3IiwiYnVsayIsImFjY2VwdERhdGEiLCJvd25lciIsIkRhdGEiLCJkZWZpbmVQcm9wZXJ0eSIsInVpZCIsImFjY2VwdHMiLCJkZXNjcmlwdG9yIiwidW5sb2NrIiwiZGVmaW5lUHJvcGVydGllcyIsInNldCIsInByb3AiLCJzdG9yZWQiLCJjYW1lbCIsImhhc0RhdGEiLCJkaXNjYXJkIiwiZGF0YV9wcml2IiwiZGF0YV91c2VyIiwicmJyYWNlIiwicm11bHRpRGFzaCIsImRhdGFBdHRyIiwicGFyc2VKU09OIiwicmVtb3ZlRGF0YSIsIl9kYXRhIiwiX3JlbW92ZURhdGEiLCJjYW1lbEtleSIsInF1ZXVlIiwiZGVxdWV1ZSIsInN0YXJ0TGVuZ3RoIiwiaG9va3MiLCJfcXVldWVIb29rcyIsInN0b3AiLCJzZXR0ZXIiLCJjbGVhclF1ZXVlIiwiY291bnQiLCJkZWZlciIsInBudW0iLCJzb3VyY2UiLCJjc3NFeHBhbmQiLCJpc0hpZGRlbiIsImVsIiwiY3NzIiwicmNoZWNrYWJsZVR5cGUiLCJmcmFnbWVudCIsImNyZWF0ZURvY3VtZW50RnJhZ21lbnQiLCJjaGVja0Nsb25lIiwiY2xvbmVOb2RlIiwibm9DbG9uZUNoZWNrZWQiLCJzdHJ1bmRlZmluZWQiLCJmb2N1c2luQnViYmxlcyIsInJrZXlFdmVudCIsInJtb3VzZUV2ZW50IiwicmZvY3VzTW9ycGgiLCJydHlwZW5hbWVzcGFjZSIsInJldHVyblRydWUiLCJyZXR1cm5GYWxzZSIsInNhZmVBY3RpdmVFbGVtZW50IiwiZXJyIiwiZXZlbnQiLCJ0eXBlcyIsImhhbmRsZU9iakluIiwiZXZlbnRIYW5kbGUiLCJldmVudHMiLCJ0IiwiaGFuZGxlT2JqIiwic3BlY2lhbCIsImhhbmRsZXJzIiwibmFtZXNwYWNlcyIsIm9yaWdUeXBlIiwiZWxlbURhdGEiLCJoYW5kbGUiLCJ0cmlnZ2VyZWQiLCJkaXNwYXRjaCIsImRlbGVnYXRlVHlwZSIsImJpbmRUeXBlIiwibmFtZXNwYWNlIiwiZGVsZWdhdGVDb3VudCIsInNldHVwIiwibWFwcGVkVHlwZXMiLCJvcmlnQ291bnQiLCJ0ZWFyZG93biIsInJlbW92ZUV2ZW50IiwidHJpZ2dlciIsIm9ubHlIYW5kbGVycyIsImJ1YmJsZVR5cGUiLCJvbnR5cGUiLCJldmVudFBhdGgiLCJFdmVudCIsImlzVHJpZ2dlciIsIm5hbWVzcGFjZV9yZSIsIm5vQnViYmxlIiwicGFyZW50V2luZG93IiwiaXNQcm9wYWdhdGlvblN0b3BwZWQiLCJwcmV2ZW50RGVmYXVsdCIsImlzRGVmYXVsdFByZXZlbnRlZCIsIl9kZWZhdWx0IiwiZml4IiwiaGFuZGxlclF1ZXVlIiwiZGVsZWdhdGVUYXJnZXQiLCJwcmVEaXNwYXRjaCIsImN1cnJlbnRUYXJnZXQiLCJpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZCIsInN0b3BQcm9wYWdhdGlvbiIsInBvc3REaXNwYXRjaCIsInNlbCIsImJ1dHRvbiIsInByb3BzIiwiZml4SG9va3MiLCJrZXlIb29rcyIsIm9yaWdpbmFsIiwid2hpY2giLCJjaGFyQ29kZSIsImtleUNvZGUiLCJtb3VzZUhvb2tzIiwiZXZlbnREb2MiLCJib2R5IiwicGFnZVgiLCJjbGllbnRYIiwic2Nyb2xsTGVmdCIsImNsaWVudExlZnQiLCJwYWdlWSIsImNsaWVudFkiLCJzY3JvbGxUb3AiLCJjbGllbnRUb3AiLCJvcmlnaW5hbEV2ZW50IiwiZml4SG9vayIsImxvYWQiLCJmb2N1cyIsImJsdXIiLCJjbGljayIsImJlZm9yZXVubG9hZCIsInJldHVyblZhbHVlIiwic2ltdWxhdGUiLCJidWJibGUiLCJpc1NpbXVsYXRlZCIsImRlZmF1bHRQcmV2ZW50ZWQiLCJ0aW1lU3RhbXAiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJtb3VzZWVudGVyIiwibW91c2VsZWF2ZSIsInBvaW50ZXJlbnRlciIsInBvaW50ZXJsZWF2ZSIsIm9yaWciLCJyZWxhdGVkIiwicmVsYXRlZFRhcmdldCIsImF0dGFjaGVzIiwib24iLCJvbmUiLCJvcmlnRm4iLCJyeGh0bWxUYWciLCJydGFnTmFtZSIsInJodG1sIiwicm5vSW5uZXJodG1sIiwicmNoZWNrZWQiLCJyc2NyaXB0VHlwZSIsInJzY3JpcHRUeXBlTWFza2VkIiwicmNsZWFuU2NyaXB0Iiwid3JhcE1hcCIsIm9wdGlvbiIsInRoZWFkIiwiY29sIiwidHIiLCJ0ZCIsIm9wdGdyb3VwIiwidGJvZHkiLCJ0Zm9vdCIsImNvbGdyb3VwIiwiY2FwdGlvbiIsInRoIiwibWFuaXB1bGF0aW9uVGFyZ2V0IiwiY29udGVudCIsImRpc2FibGVTY3JpcHQiLCJyZXN0b3JlU2NyaXB0Iiwic2V0R2xvYmFsRXZhbCIsInJlZkVsZW1lbnRzIiwiY2xvbmVDb3B5RXZlbnQiLCJkZXN0IiwicGRhdGFPbGQiLCJwZGF0YUN1ciIsInVkYXRhT2xkIiwidWRhdGFDdXIiLCJnZXRBbGwiLCJmaXhJbnB1dCIsImRhdGFBbmRFdmVudHMiLCJkZWVwRGF0YUFuZEV2ZW50cyIsInNyY0VsZW1lbnRzIiwiZGVzdEVsZW1lbnRzIiwiaW5QYWdlIiwiYnVpbGRGcmFnbWVudCIsInNjcmlwdHMiLCJzZWxlY3Rpb24iLCJ3cmFwIiwibm9kZXMiLCJjcmVhdGVUZXh0Tm9kZSIsImNsZWFuRGF0YSIsImFwcGVuZCIsImRvbU1hbmlwIiwicHJlcGVuZCIsImluc2VydEJlZm9yZSIsImJlZm9yZSIsImFmdGVyIiwia2VlcERhdGEiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJyZXBsYWNlQ2hpbGQiLCJkZXRhY2giLCJoYXNTY3JpcHRzIiwiaU5vQ2xvbmUiLCJfZXZhbFVybCIsImFwcGVuZFRvIiwicHJlcGVuZFRvIiwiaW5zZXJ0QWZ0ZXIiLCJyZXBsYWNlQWxsIiwiaW5zZXJ0IiwiaWZyYW1lIiwiZWxlbWRpc3BsYXkiLCJhY3R1YWxEaXNwbGF5Iiwic3R5bGUiLCJkaXNwbGF5IiwiZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUiLCJkZWZhdWx0RGlzcGxheSIsIndyaXRlIiwiY2xvc2UiLCJybWFyZ2luIiwicm51bW5vbnB4IiwiZ2V0U3R5bGVzIiwib3BlbmVyIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsImN1ckNTUyIsImNvbXB1dGVkIiwid2lkdGgiLCJtaW5XaWR0aCIsIm1heFdpZHRoIiwiZ2V0UHJvcGVydHlWYWx1ZSIsImFkZEdldEhvb2tJZiIsImNvbmRpdGlvbkZuIiwiaG9va0ZuIiwicGl4ZWxQb3NpdGlvblZhbCIsImJveFNpemluZ1JlbGlhYmxlVmFsIiwiY29udGFpbmVyIiwiYmFja2dyb3VuZENsaXAiLCJjbGVhckNsb25lU3R5bGUiLCJjc3NUZXh0IiwiY29tcHV0ZVBpeGVsUG9zaXRpb25BbmRCb3hTaXppbmdSZWxpYWJsZSIsImRpdlN0eWxlIiwicGl4ZWxQb3NpdGlvbiIsImJveFNpemluZ1JlbGlhYmxlIiwicmVsaWFibGVNYXJnaW5SaWdodCIsIm1hcmdpbkRpdiIsIm1hcmdpblJpZ2h0Iiwic3dhcCIsInJkaXNwbGF5c3dhcCIsInJudW1zcGxpdCIsInJyZWxOdW0iLCJjc3NTaG93IiwicG9zaXRpb24iLCJ2aXNpYmlsaXR5IiwiY3NzTm9ybWFsVHJhbnNmb3JtIiwibGV0dGVyU3BhY2luZyIsImZvbnRXZWlnaHQiLCJjc3NQcmVmaXhlcyIsInZlbmRvclByb3BOYW1lIiwiY2FwTmFtZSIsIm9yaWdOYW1lIiwic2V0UG9zaXRpdmVOdW1iZXIiLCJzdWJ0cmFjdCIsIm1heCIsImF1Z21lbnRXaWR0aE9ySGVpZ2h0IiwiZXh0cmEiLCJpc0JvcmRlckJveCIsInN0eWxlcyIsImdldFdpZHRoT3JIZWlnaHQiLCJ2YWx1ZUlzQm9yZGVyQm94Iiwib2Zmc2V0V2lkdGgiLCJvZmZzZXRIZWlnaHQiLCJzaG93SGlkZSIsInNob3ciLCJoaWRkZW4iLCJjc3NIb29rcyIsIm9wYWNpdHkiLCJjc3NOdW1iZXIiLCJjc3NQcm9wcyIsIm1hcmdpbiIsInBhZGRpbmciLCJib3JkZXIiLCJwcmVmaXgiLCJzdWZmaXgiLCJleHBhbmQiLCJleHBhbmRlZCIsInBhcnRzIiwiaGlkZSIsInRvZ2dsZSIsIlR3ZWVuIiwiZWFzaW5nIiwidW5pdCIsInByb3BIb29rcyIsInJ1biIsInBlcmNlbnQiLCJlYXNlZCIsImR1cmF0aW9uIiwic3RlcCIsInR3ZWVuIiwiZngiLCJsaW5lYXIiLCJwIiwic3dpbmciLCJjb3MiLCJQSSIsImZ4Tm93IiwidGltZXJJZCIsInJmeHR5cGVzIiwicmZ4bnVtIiwicnJ1biIsImFuaW1hdGlvblByZWZpbHRlcnMiLCJkZWZhdWx0UHJlZmlsdGVyIiwidHdlZW5lcnMiLCJjcmVhdGVUd2VlbiIsInNjYWxlIiwibWF4SXRlcmF0aW9ucyIsImNyZWF0ZUZ4Tm93IiwiZ2VuRngiLCJpbmNsdWRlV2lkdGgiLCJoZWlnaHQiLCJhbmltYXRpb24iLCJjb2xsZWN0aW9uIiwib3B0cyIsIm9sZGZpcmUiLCJjaGVja0Rpc3BsYXkiLCJhbmltIiwiZGF0YVNob3ciLCJ1bnF1ZXVlZCIsIm92ZXJmbG93Iiwib3ZlcmZsb3dYIiwib3ZlcmZsb3dZIiwicHJvcEZpbHRlciIsInNwZWNpYWxFYXNpbmciLCJBbmltYXRpb24iLCJwcm9wZXJ0aWVzIiwic3RvcHBlZCIsInRpY2siLCJjdXJyZW50VGltZSIsInN0YXJ0VGltZSIsInR3ZWVucyIsIm9yaWdpbmFsUHJvcGVydGllcyIsIm9yaWdpbmFsT3B0aW9ucyIsImdvdG9FbmQiLCJyZWplY3RXaXRoIiwidGltZXIiLCJjb21wbGV0ZSIsInR3ZWVuZXIiLCJwcmVmaWx0ZXIiLCJzcGVlZCIsIm9wdCIsInNwZWVkcyIsImZhZGVUbyIsInRvIiwiYW5pbWF0ZSIsIm9wdGFsbCIsImRvQW5pbWF0aW9uIiwiZmluaXNoIiwic3RvcFF1ZXVlIiwidGltZXJzIiwiY3NzRm4iLCJzbGlkZURvd24iLCJzbGlkZVVwIiwic2xpZGVUb2dnbGUiLCJmYWRlSW4iLCJmYWRlT3V0IiwiZmFkZVRvZ2dsZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJjbGVhckludGVydmFsIiwic2xvdyIsImZhc3QiLCJkZWxheSIsInRpbWUiLCJ0aW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiY2hlY2tPbiIsIm9wdFNlbGVjdGVkIiwib3B0RGlzYWJsZWQiLCJyYWRpb1ZhbHVlIiwibm9kZUhvb2siLCJib29sSG9vayIsInJlbW92ZUF0dHIiLCJuVHlwZSIsImF0dHJIb29rcyIsImJvb2wiLCJwcm9wTmFtZSIsImF0dHJOYW1lcyIsInByb3BGaXgiLCJnZXR0ZXIiLCJyZm9jdXNhYmxlIiwicmVtb3ZlUHJvcCIsIm5vdHhtbCIsImhhc0F0dHJpYnV0ZSIsInJjbGFzcyIsImFkZENsYXNzIiwiY2xhc3NlcyIsImNsYXp6IiwiZmluYWxWYWx1ZSIsInByb2NlZWQiLCJyZW1vdmVDbGFzcyIsInRvZ2dsZUNsYXNzIiwic3RhdGVWYWwiLCJjbGFzc05hbWVzIiwiaGFzQ2xhc3MiLCJycmV0dXJuIiwidmFsSG9va3MiLCJvcHRpb25TZXQiLCJob3ZlciIsImZuT3ZlciIsImZuT3V0IiwiYmluZCIsInVuYmluZCIsImRlbGVnYXRlIiwidW5kZWxlZ2F0ZSIsIm5vbmNlIiwicnF1ZXJ5IiwiSlNPTiIsInBhcnNlIiwicGFyc2VYTUwiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJyaGFzaCIsInJ0cyIsInJoZWFkZXJzIiwicmxvY2FsUHJvdG9jb2wiLCJybm9Db250ZW50IiwicnByb3RvY29sIiwicnVybCIsInByZWZpbHRlcnMiLCJ0cmFuc3BvcnRzIiwiYWxsVHlwZXMiLCJhamF4TG9jYXRpb24iLCJhamF4TG9jUGFydHMiLCJhZGRUb1ByZWZpbHRlcnNPclRyYW5zcG9ydHMiLCJzdHJ1Y3R1cmUiLCJkYXRhVHlwZUV4cHJlc3Npb24iLCJkYXRhVHlwZSIsImRhdGFUeXBlcyIsImluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzIiwianFYSFIiLCJpbnNwZWN0ZWQiLCJzZWVraW5nVHJhbnNwb3J0IiwiaW5zcGVjdCIsInByZWZpbHRlck9yRmFjdG9yeSIsImRhdGFUeXBlT3JUcmFuc3BvcnQiLCJhamF4RXh0ZW5kIiwiZmxhdE9wdGlvbnMiLCJhamF4U2V0dGluZ3MiLCJhamF4SGFuZGxlUmVzcG9uc2VzIiwicyIsInJlc3BvbnNlcyIsImN0IiwiZmluYWxEYXRhVHlwZSIsImZpcnN0RGF0YVR5cGUiLCJtaW1lVHlwZSIsImdldFJlc3BvbnNlSGVhZGVyIiwiY29udmVydGVycyIsImFqYXhDb252ZXJ0IiwicmVzcG9uc2UiLCJpc1N1Y2Nlc3MiLCJjb252MiIsImN1cnJlbnQiLCJjb252IiwicmVzcG9uc2VGaWVsZHMiLCJkYXRhRmlsdGVyIiwiYWN0aXZlIiwibGFzdE1vZGlmaWVkIiwiZXRhZyIsInVybCIsImlzTG9jYWwiLCJwcm9jZXNzRGF0YSIsImFzeW5jIiwiY29udGVudFR5cGUiLCJqc29uIiwiYWpheFNldHVwIiwic2V0dGluZ3MiLCJhamF4UHJlZmlsdGVyIiwiYWpheFRyYW5zcG9ydCIsImFqYXgiLCJ0cmFuc3BvcnQiLCJjYWNoZVVSTCIsInJlc3BvbnNlSGVhZGVyc1N0cmluZyIsInJlc3BvbnNlSGVhZGVycyIsInRpbWVvdXRUaW1lciIsImZpcmVHbG9iYWxzIiwiY2FsbGJhY2tDb250ZXh0IiwiZ2xvYmFsRXZlbnRDb250ZXh0IiwiY29tcGxldGVEZWZlcnJlZCIsInN0YXR1c0NvZGUiLCJyZXF1ZXN0SGVhZGVycyIsInJlcXVlc3RIZWFkZXJzTmFtZXMiLCJzdHJBYm9ydCIsImdldEFsbFJlc3BvbnNlSGVhZGVycyIsInNldFJlcXVlc3RIZWFkZXIiLCJsbmFtZSIsIm92ZXJyaWRlTWltZVR5cGUiLCJzdGF0dXMiLCJhYm9ydCIsInN0YXR1c1RleHQiLCJmaW5hbFRleHQiLCJzdWNjZXNzIiwibWV0aG9kIiwiY3Jvc3NEb21haW4iLCJwYXJhbSIsInRyYWRpdGlvbmFsIiwiaGFzQ29udGVudCIsImlmTW9kaWZpZWQiLCJoZWFkZXJzIiwiYmVmb3JlU2VuZCIsInNlbmQiLCJuYXRpdmVTdGF0dXNUZXh0IiwibW9kaWZpZWQiLCJnZXRKU09OIiwiZ2V0U2NyaXB0Iiwid3JhcEFsbCIsImZpcnN0RWxlbWVudENoaWxkIiwid3JhcElubmVyIiwidW53cmFwIiwidmlzaWJsZSIsInIyMCIsInJicmFja2V0IiwickNSTEYiLCJyc3VibWl0dGVyVHlwZXMiLCJyc3VibWl0dGFibGUiLCJidWlsZFBhcmFtcyIsInYiLCJlbmNvZGVVUklDb21wb25lbnQiLCJzZXJpYWxpemUiLCJzZXJpYWxpemVBcnJheSIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwieGhySWQiLCJ4aHJDYWxsYmFja3MiLCJ4aHJTdWNjZXNzU3RhdHVzIiwieGhyU3VwcG9ydGVkIiwiY29ycyIsIm9wZW4iLCJ1c2VybmFtZSIsInhockZpZWxkcyIsIm9ubG9hZCIsIm9uZXJyb3IiLCJyZXNwb25zZVRleHQiLCJjaGFyc2V0Iiwic2NyaXB0Q2hhcnNldCIsImV2dCIsIm9sZENhbGxiYWNrcyIsInJqc29ucCIsImpzb25wIiwianNvbnBDYWxsYmFjayIsIm9yaWdpbmFsU2V0dGluZ3MiLCJjYWxsYmFja05hbWUiLCJvdmVyd3JpdHRlbiIsInJlc3BvbnNlQ29udGFpbmVyIiwianNvblByb3AiLCJrZWVwU2NyaXB0cyIsInBhcnNlZCIsIl9sb2FkIiwicGFyYW1zIiwiYW5pbWF0ZWQiLCJnZXRXaW5kb3ciLCJvZmZzZXQiLCJzZXRPZmZzZXQiLCJjdXJQb3NpdGlvbiIsImN1ckxlZnQiLCJjdXJDU1NUb3AiLCJjdXJUb3AiLCJjdXJPZmZzZXQiLCJjdXJDU1NMZWZ0IiwiY2FsY3VsYXRlUG9zaXRpb24iLCJjdXJFbGVtIiwibGVmdCIsInVzaW5nIiwid2luIiwiYm94IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwicGFnZVlPZmZzZXQiLCJwYWdlWE9mZnNldCIsIm9mZnNldFBhcmVudCIsInBhcmVudE9mZnNldCIsInNjcm9sbFRvIiwiSGVpZ2h0IiwiV2lkdGgiLCJkZWZhdWx0RXh0cmEiLCJmdW5jTmFtZSIsInNpemUiLCJhbmRTZWxmIiwiZGVmaW5lIiwiX2pRdWVyeSIsIl8kIiwiJCIsIm5vQ29uZmxpY3QiLCJ1cmxUb2tlbiIsInVybEZ1bk1hcCIsInBhdGhuYW1lIiwib3JpZ2luIiwiaG9zdG5hbWUiLCJzZWFyY2giLCJzZWFyY2hNYXAiLCJzdWJzdHIiLCJJbmZpbml0eSIsImZvckVhY2giLCJpdGVtIiwiZ29QYWdlIiwiY3JlYXRlQ3VzdG9tRXZlbnQiLCJldmVudE5hbWUiLCJDdXN0b21FdmVudCIsImRldGFpbCIsInNlbmRNZXNzYWdlVG9QYWdlIiwicmVxdWVzdCIsImRpc3BhdGNoRXZlbnQiLCJvbk1lc3NhZ2VGcm9tQmFja2dyb3VuZCIsIndlY2hhdCIsInBhZ2UiLCJiaWd3ZVBhZ2UiLCJ3ZWNoYXRfYmlnd2VQYWdlRXZlbnQiLCJiaWd3ZSIsImV4dGVudGlvbkRldGVjdGlvbiIsInBsYXRmb3JtIiwicGxhdGZvcm1IYW5kbGVyIiwiZXZlbnRIYW5kbGVycyIsImNocm9tZSIsImV4dGVuc2lvbiIsInNlbmRNZXNzYWdlIiwib3BlcmF0ZSIsIm9uTWVzc2FnZSIsImFkZExpc3RlbmVyIiwic2VuZGVyIiwiY3JlYXRlRWRpdG9yVXJsIiwibG9naW4iLCJnb0VkaXRvciIsIndlY2hhdEZyYW1lSUQiLCJpbml0RnJhbWUiLCJjb250ZW50V2luZG93IiwicmVsb2FkIl0sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7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Q2I7OztBQUdBQyxjQUFZO0FBQ1YsS0FBQzFDLEVBQUksSUFBR3lDLGFBQWMsRUFBckIsRUFBeUI5akMsTUFBMUIsR0FDRXFoQyxFQUFJLDJDQUEwQ3lDLGFBQWMsS0FBNUQsRUFDQzltQixJQURELENBQ08sS0FEUCxFQUNjLDBCQURkLEVBRUNzTSxRQUZELENBRVcsTUFGWCxFQUVvQjRNLElBRnBCLENBRTBCLE1BRjFCLEVBRWtDLFlBQVc7QUFDM0NrTixhQUFPQyxTQUFQLENBQWlCQyxXQUFqQixDQUE4QixFQUFFdGdDLE1BQU0sZUFBUixFQUF5QmdXLE1BQU0sdUJBQS9CLEVBQTlCO0FBQ0QsS0FKRCxDQURGLEdBS1Fxb0IsRUFBSSxJQUFHeUMsYUFBYyxFQUFyQixFQUEwQixDQUExQixFQUE4QkUsYUFBOUIsQ0FBNEMzeUIsUUFBNUMsQ0FBcUQ0eUIsTUFBckQsRUFMUjtBQU1EOztBQVhZLENBQWYsRSIsImZpbGUiOiJjb250ZW50U2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gNDApO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIGM2ZDU0NTk1MThkZmNmYjU1ZjJhIiwiLyohXG4gKiBqUXVlcnkgSmF2YVNjcmlwdCBMaWJyYXJ5IHYyLjEuNFxuICogaHR0cDovL2pxdWVyeS5jb20vXG4gKlxuICogSW5jbHVkZXMgU2l6emxlLmpzXG4gKiBodHRwOi8vc2l6emxlanMuY29tL1xuICpcbiAqIENvcHlyaWdodCAyMDA1LCAyMDE0IGpRdWVyeSBGb3VuZGF0aW9uLCBJbmMuIGFuZCBvdGhlciBjb250cmlidXRvcnNcbiAqIFJlbGVhc2VkIHVuZGVyIHRoZSBNSVQgbGljZW5zZVxuICogaHR0cDovL2pxdWVyeS5vcmcvbGljZW5zZVxuICpcbiAqIERhdGU6IDIwMTUtMDQtMjhUMTY6MDFaXG4gKi9cblxuKGZ1bmN0aW9uKCBnbG9iYWwsIGZhY3RvcnkgKSB7XG5cblx0aWYgKCB0eXBlb2YgbW9kdWxlID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBtb2R1bGUuZXhwb3J0cyA9PT0gXCJvYmplY3RcIiApIHtcblx0XHQvLyBGb3IgQ29tbW9uSlMgYW5kIENvbW1vbkpTLWxpa2UgZW52aXJvbm1lbnRzIHdoZXJlIGEgcHJvcGVyIGB3aW5kb3dgXG5cdFx0Ly8gaXMgcHJlc2VudCwgZXhlY3V0ZSB0aGUgZmFjdG9yeSBhbmQgZ2V0IGpRdWVyeS5cblx0XHQvLyBGb3IgZW52aXJvbm1lbnRzIHRoYXQgZG8gbm90IGhhdmUgYSBgd2luZG93YCB3aXRoIGEgYGRvY3VtZW50YFxuXHRcdC8vIChzdWNoIGFzIE5vZGUuanMpLCBleHBvc2UgYSBmYWN0b3J5IGFzIG1vZHVsZS5leHBvcnRzLlxuXHRcdC8vIFRoaXMgYWNjZW50dWF0ZXMgdGhlIG5lZWQgZm9yIHRoZSBjcmVhdGlvbiBvZiBhIHJlYWwgYHdpbmRvd2AuXG5cdFx0Ly8gZS5nLiB2YXIgalF1ZXJ5ID0gcmVxdWlyZShcImpxdWVyeVwiKSh3aW5kb3cpO1xuXHRcdC8vIFNlZSB0aWNrZXQgIzE0NTQ5IGZvciBtb3JlIGluZm8uXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBnbG9iYWwuZG9jdW1lbnQgP1xuXHRcdFx0ZmFjdG9yeSggZ2xvYmFsLCB0cnVlICkgOlxuXHRcdFx0ZnVuY3Rpb24oIHcgKSB7XG5cdFx0XHRcdGlmICggIXcuZG9jdW1lbnQgKSB7XG5cdFx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCBcImpRdWVyeSByZXF1aXJlcyBhIHdpbmRvdyB3aXRoIGEgZG9jdW1lbnRcIiApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBmYWN0b3J5KCB3ICk7XG5cdFx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdGZhY3RvcnkoIGdsb2JhbCApO1xuXHR9XG5cbi8vIFBhc3MgdGhpcyBpZiB3aW5kb3cgaXMgbm90IGRlZmluZWQgeWV0XG59KHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cgOiB0aGlzLCBmdW5jdGlvbiggd2luZG93LCBub0dsb2JhbCApIHtcblxuLy8gU3VwcG9ydDogRmlyZWZveCAxOCtcbi8vIENhbid0IGJlIGluIHN0cmljdCBtb2RlLCBzZXZlcmFsIGxpYnMgaW5jbHVkaW5nIEFTUC5ORVQgdHJhY2Vcbi8vIHRoZSBzdGFjayB2aWEgYXJndW1lbnRzLmNhbGxlci5jYWxsZWUgYW5kIEZpcmVmb3ggZGllcyBpZlxuLy8geW91IHRyeSB0byB0cmFjZSB0aHJvdWdoIFwidXNlIHN0cmljdFwiIGNhbGwgY2hhaW5zLiAoIzEzMzM1KVxuLy9cblxudmFyIGFyciA9IFtdO1xuXG52YXIgc2xpY2UgPSBhcnIuc2xpY2U7XG5cbnZhciBjb25jYXQgPSBhcnIuY29uY2F0O1xuXG52YXIgcHVzaCA9IGFyci5wdXNoO1xuXG52YXIgaW5kZXhPZiA9IGFyci5pbmRleE9mO1xuXG52YXIgY2xhc3MydHlwZSA9IHt9O1xuXG52YXIgdG9TdHJpbmcgPSBjbGFzczJ0eXBlLnRvU3RyaW5nO1xuXG52YXIgaGFzT3duID0gY2xhc3MydHlwZS5oYXNPd25Qcm9wZXJ0eTtcblxudmFyIHN1cHBvcnQgPSB7fTtcblxuXG5cbnZhclxuXHQvLyBVc2UgdGhlIGNvcnJlY3QgZG9jdW1lbnQgYWNjb3JkaW5nbHkgd2l0aCB3aW5kb3cgYXJndW1lbnQgKHNhbmRib3gpXG5cdGRvY3VtZW50ID0gd2luZG93LmRvY3VtZW50LFxuXG5cdHZlcnNpb24gPSBcIjIuMS40XCIsXG5cblx0Ly8gRGVmaW5lIGEgbG9jYWwgY29weSBvZiBqUXVlcnlcblx0alF1ZXJ5ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0ICkge1xuXHRcdC8vIFRoZSBqUXVlcnkgb2JqZWN0IGlzIGFjdHVhbGx5IGp1c3QgdGhlIGluaXQgY29uc3RydWN0b3IgJ2VuaGFuY2VkJ1xuXHRcdC8vIE5lZWQgaW5pdCBpZiBqUXVlcnkgaXMgY2FsbGVkIChqdXN0IGFsbG93IGVycm9yIHRvIGJlIHRocm93biBpZiBub3QgaW5jbHVkZWQpXG5cdFx0cmV0dXJuIG5ldyBqUXVlcnkuZm4uaW5pdCggc2VsZWN0b3IsIGNvbnRleHQgKTtcblx0fSxcblxuXHQvLyBTdXBwb3J0OiBBbmRyb2lkPDQuMVxuXHQvLyBNYWtlIHN1cmUgd2UgdHJpbSBCT00gYW5kIE5CU1Bcblx0cnRyaW0gPSAvXltcXHNcXHVGRUZGXFx4QTBdK3xbXFxzXFx1RkVGRlxceEEwXSskL2csXG5cblx0Ly8gTWF0Y2hlcyBkYXNoZWQgc3RyaW5nIGZvciBjYW1lbGl6aW5nXG5cdHJtc1ByZWZpeCA9IC9eLW1zLS8sXG5cdHJkYXNoQWxwaGEgPSAvLShbXFxkYS16XSkvZ2ksXG5cblx0Ly8gVXNlZCBieSBqUXVlcnkuY2FtZWxDYXNlIGFzIGNhbGxiYWNrIHRvIHJlcGxhY2UoKVxuXHRmY2FtZWxDYXNlID0gZnVuY3Rpb24oIGFsbCwgbGV0dGVyICkge1xuXHRcdHJldHVybiBsZXR0ZXIudG9VcHBlckNhc2UoKTtcblx0fTtcblxualF1ZXJ5LmZuID0galF1ZXJ5LnByb3RvdHlwZSA9IHtcblx0Ly8gVGhlIGN1cnJlbnQgdmVyc2lvbiBvZiBqUXVlcnkgYmVpbmcgdXNlZFxuXHRqcXVlcnk6IHZlcnNpb24sXG5cblx0Y29uc3RydWN0b3I6IGpRdWVyeSxcblxuXHQvLyBTdGFydCB3aXRoIGFuIGVtcHR5IHNlbGVjdG9yXG5cdHNlbGVjdG9yOiBcIlwiLFxuXG5cdC8vIFRoZSBkZWZhdWx0IGxlbmd0aCBvZiBhIGpRdWVyeSBvYmplY3QgaXMgMFxuXHRsZW5ndGg6IDAsXG5cblx0dG9BcnJheTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHNsaWNlLmNhbGwoIHRoaXMgKTtcblx0fSxcblxuXHQvLyBHZXQgdGhlIE50aCBlbGVtZW50IGluIHRoZSBtYXRjaGVkIGVsZW1lbnQgc2V0IE9SXG5cdC8vIEdldCB0aGUgd2hvbGUgbWF0Y2hlZCBlbGVtZW50IHNldCBhcyBhIGNsZWFuIGFycmF5XG5cdGdldDogZnVuY3Rpb24oIG51bSApIHtcblx0XHRyZXR1cm4gbnVtICE9IG51bGwgP1xuXG5cdFx0XHQvLyBSZXR1cm4ganVzdCB0aGUgb25lIGVsZW1lbnQgZnJvbSB0aGUgc2V0XG5cdFx0XHQoIG51bSA8IDAgPyB0aGlzWyBudW0gKyB0aGlzLmxlbmd0aCBdIDogdGhpc1sgbnVtIF0gKSA6XG5cblx0XHRcdC8vIFJldHVybiBhbGwgdGhlIGVsZW1lbnRzIGluIGEgY2xlYW4gYXJyYXlcblx0XHRcdHNsaWNlLmNhbGwoIHRoaXMgKTtcblx0fSxcblxuXHQvLyBUYWtlIGFuIGFycmF5IG9mIGVsZW1lbnRzIGFuZCBwdXNoIGl0IG9udG8gdGhlIHN0YWNrXG5cdC8vIChyZXR1cm5pbmcgdGhlIG5ldyBtYXRjaGVkIGVsZW1lbnQgc2V0KVxuXHRwdXNoU3RhY2s6IGZ1bmN0aW9uKCBlbGVtcyApIHtcblxuXHRcdC8vIEJ1aWxkIGEgbmV3IGpRdWVyeSBtYXRjaGVkIGVsZW1lbnQgc2V0XG5cdFx0dmFyIHJldCA9IGpRdWVyeS5tZXJnZSggdGhpcy5jb25zdHJ1Y3RvcigpLCBlbGVtcyApO1xuXG5cdFx0Ly8gQWRkIHRoZSBvbGQgb2JqZWN0IG9udG8gdGhlIHN0YWNrIChhcyBhIHJlZmVyZW5jZSlcblx0XHRyZXQucHJldk9iamVjdCA9IHRoaXM7XG5cdFx0cmV0LmNvbnRleHQgPSB0aGlzLmNvbnRleHQ7XG5cblx0XHQvLyBSZXR1cm4gdGhlIG5ld2x5LWZvcm1lZCBlbGVtZW50IHNldFxuXHRcdHJldHVybiByZXQ7XG5cdH0sXG5cblx0Ly8gRXhlY3V0ZSBhIGNhbGxiYWNrIGZvciBldmVyeSBlbGVtZW50IGluIHRoZSBtYXRjaGVkIHNldC5cblx0Ly8gKFlvdSBjYW4gc2VlZCB0aGUgYXJndW1lbnRzIHdpdGggYW4gYXJyYXkgb2YgYXJncywgYnV0IHRoaXMgaXNcblx0Ly8gb25seSB1c2VkIGludGVybmFsbHkuKVxuXHRlYWNoOiBmdW5jdGlvbiggY2FsbGJhY2ssIGFyZ3MgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5lYWNoKCB0aGlzLCBjYWxsYmFjaywgYXJncyApO1xuXHR9LFxuXG5cdG1hcDogZnVuY3Rpb24oIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggalF1ZXJ5Lm1hcCh0aGlzLCBmdW5jdGlvbiggZWxlbSwgaSApIHtcblx0XHRcdHJldHVybiBjYWxsYmFjay5jYWxsKCBlbGVtLCBpLCBlbGVtICk7XG5cdFx0fSkpO1xuXHR9LFxuXG5cdHNsaWNlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIHNsaWNlLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSApO1xuXHR9LFxuXG5cdGZpcnN0OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5lcSggMCApO1xuXHR9LFxuXG5cdGxhc3Q6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmVxKCAtMSApO1xuXHR9LFxuXG5cdGVxOiBmdW5jdGlvbiggaSApIHtcblx0XHR2YXIgbGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRqID0gK2kgKyAoIGkgPCAwID8gbGVuIDogMCApO1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggaiA+PSAwICYmIGogPCBsZW4gPyBbIHRoaXNbal0gXSA6IFtdICk7XG5cdH0sXG5cblx0ZW5kOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5wcmV2T2JqZWN0IHx8IHRoaXMuY29uc3RydWN0b3IobnVsbCk7XG5cdH0sXG5cblx0Ly8gRm9yIGludGVybmFsIHVzZSBvbmx5LlxuXHQvLyBCZWhhdmVzIGxpa2UgYW4gQXJyYXkncyBtZXRob2QsIG5vdCBsaWtlIGEgalF1ZXJ5IG1ldGhvZC5cblx0cHVzaDogcHVzaCxcblx0c29ydDogYXJyLnNvcnQsXG5cdHNwbGljZTogYXJyLnNwbGljZVxufTtcblxualF1ZXJ5LmV4dGVuZCA9IGpRdWVyeS5mbi5leHRlbmQgPSBmdW5jdGlvbigpIHtcblx0dmFyIG9wdGlvbnMsIG5hbWUsIHNyYywgY29weSwgY29weUlzQXJyYXksIGNsb25lLFxuXHRcdHRhcmdldCA9IGFyZ3VtZW50c1swXSB8fCB7fSxcblx0XHRpID0gMSxcblx0XHRsZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuXHRcdGRlZXAgPSBmYWxzZTtcblxuXHQvLyBIYW5kbGUgYSBkZWVwIGNvcHkgc2l0dWF0aW9uXG5cdGlmICggdHlwZW9mIHRhcmdldCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0ZGVlcCA9IHRhcmdldDtcblxuXHRcdC8vIFNraXAgdGhlIGJvb2xlYW4gYW5kIHRoZSB0YXJnZXRcblx0XHR0YXJnZXQgPSBhcmd1bWVudHNbIGkgXSB8fCB7fTtcblx0XHRpKys7XG5cdH1cblxuXHQvLyBIYW5kbGUgY2FzZSB3aGVuIHRhcmdldCBpcyBhIHN0cmluZyBvciBzb21ldGhpbmcgKHBvc3NpYmxlIGluIGRlZXAgY29weSlcblx0aWYgKCB0eXBlb2YgdGFyZ2V0ICE9PSBcIm9iamVjdFwiICYmICFqUXVlcnkuaXNGdW5jdGlvbih0YXJnZXQpICkge1xuXHRcdHRhcmdldCA9IHt9O1xuXHR9XG5cblx0Ly8gRXh0ZW5kIGpRdWVyeSBpdHNlbGYgaWYgb25seSBvbmUgYXJndW1lbnQgaXMgcGFzc2VkXG5cdGlmICggaSA9PT0gbGVuZ3RoICkge1xuXHRcdHRhcmdldCA9IHRoaXM7XG5cdFx0aS0tO1xuXHR9XG5cblx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0Ly8gT25seSBkZWFsIHdpdGggbm9uLW51bGwvdW5kZWZpbmVkIHZhbHVlc1xuXHRcdGlmICggKG9wdGlvbnMgPSBhcmd1bWVudHNbIGkgXSkgIT0gbnVsbCApIHtcblx0XHRcdC8vIEV4dGVuZCB0aGUgYmFzZSBvYmplY3Rcblx0XHRcdGZvciAoIG5hbWUgaW4gb3B0aW9ucyApIHtcblx0XHRcdFx0c3JjID0gdGFyZ2V0WyBuYW1lIF07XG5cdFx0XHRcdGNvcHkgPSBvcHRpb25zWyBuYW1lIF07XG5cblx0XHRcdFx0Ly8gUHJldmVudCBuZXZlci1lbmRpbmcgbG9vcFxuXHRcdFx0XHRpZiAoIHRhcmdldCA9PT0gY29weSApIHtcblx0XHRcdFx0XHRjb250aW51ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFJlY3Vyc2UgaWYgd2UncmUgbWVyZ2luZyBwbGFpbiBvYmplY3RzIG9yIGFycmF5c1xuXHRcdFx0XHRpZiAoIGRlZXAgJiYgY29weSAmJiAoIGpRdWVyeS5pc1BsYWluT2JqZWN0KGNvcHkpIHx8IChjb3B5SXNBcnJheSA9IGpRdWVyeS5pc0FycmF5KGNvcHkpKSApICkge1xuXHRcdFx0XHRcdGlmICggY29weUlzQXJyYXkgKSB7XG5cdFx0XHRcdFx0XHRjb3B5SXNBcnJheSA9IGZhbHNlO1xuXHRcdFx0XHRcdFx0Y2xvbmUgPSBzcmMgJiYgalF1ZXJ5LmlzQXJyYXkoc3JjKSA/IHNyYyA6IFtdO1xuXG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdGNsb25lID0gc3JjICYmIGpRdWVyeS5pc1BsYWluT2JqZWN0KHNyYykgPyBzcmMgOiB7fTtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBOZXZlciBtb3ZlIG9yaWdpbmFsIG9iamVjdHMsIGNsb25lIHRoZW1cblx0XHRcdFx0XHR0YXJnZXRbIG5hbWUgXSA9IGpRdWVyeS5leHRlbmQoIGRlZXAsIGNsb25lLCBjb3B5ICk7XG5cblx0XHRcdFx0Ly8gRG9uJ3QgYnJpbmcgaW4gdW5kZWZpbmVkIHZhbHVlc1xuXHRcdFx0XHR9IGVsc2UgaWYgKCBjb3B5ICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0dGFyZ2V0WyBuYW1lIF0gPSBjb3B5O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBtb2RpZmllZCBvYmplY3Rcblx0cmV0dXJuIHRhcmdldDtcbn07XG5cbmpRdWVyeS5leHRlbmQoe1xuXHQvLyBVbmlxdWUgZm9yIGVhY2ggY29weSBvZiBqUXVlcnkgb24gdGhlIHBhZ2Vcblx0ZXhwYW5kbzogXCJqUXVlcnlcIiArICggdmVyc2lvbiArIE1hdGgucmFuZG9tKCkgKS5yZXBsYWNlKCAvXFxEL2csIFwiXCIgKSxcblxuXHQvLyBBc3N1bWUgalF1ZXJ5IGlzIHJlYWR5IHdpdGhvdXQgdGhlIHJlYWR5IG1vZHVsZVxuXHRpc1JlYWR5OiB0cnVlLFxuXG5cdGVycm9yOiBmdW5jdGlvbiggbXNnICkge1xuXHRcdHRocm93IG5ldyBFcnJvciggbXNnICk7XG5cdH0sXG5cblx0bm9vcDogZnVuY3Rpb24oKSB7fSxcblxuXHRpc0Z1bmN0aW9uOiBmdW5jdGlvbiggb2JqICkge1xuXHRcdHJldHVybiBqUXVlcnkudHlwZShvYmopID09PSBcImZ1bmN0aW9uXCI7XG5cdH0sXG5cblx0aXNBcnJheTogQXJyYXkuaXNBcnJheSxcblxuXHRpc1dpbmRvdzogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRyZXR1cm4gb2JqICE9IG51bGwgJiYgb2JqID09PSBvYmoud2luZG93O1xuXHR9LFxuXG5cdGlzTnVtZXJpYzogZnVuY3Rpb24oIG9iaiApIHtcblx0XHQvLyBwYXJzZUZsb2F0IE5hTnMgbnVtZXJpYy1jYXN0IGZhbHNlIHBvc2l0aXZlcyAobnVsbHx0cnVlfGZhbHNlfFwiXCIpXG5cdFx0Ly8gLi4uYnV0IG1pc2ludGVycHJldHMgbGVhZGluZy1udW1iZXIgc3RyaW5ncywgcGFydGljdWxhcmx5IGhleCBsaXRlcmFscyAoXCIweC4uLlwiKVxuXHRcdC8vIHN1YnRyYWN0aW9uIGZvcmNlcyBpbmZpbml0aWVzIHRvIE5hTlxuXHRcdC8vIGFkZGluZyAxIGNvcnJlY3RzIGxvc3Mgb2YgcHJlY2lzaW9uIGZyb20gcGFyc2VGbG9hdCAoIzE1MTAwKVxuXHRcdHJldHVybiAhalF1ZXJ5LmlzQXJyYXkoIG9iaiApICYmIChvYmogLSBwYXJzZUZsb2F0KCBvYmogKSArIDEpID49IDA7XG5cdH0sXG5cblx0aXNQbGFpbk9iamVjdDogZnVuY3Rpb24oIG9iaiApIHtcblx0XHQvLyBOb3QgcGxhaW4gb2JqZWN0czpcblx0XHQvLyAtIEFueSBvYmplY3Qgb3IgdmFsdWUgd2hvc2UgaW50ZXJuYWwgW1tDbGFzc11dIHByb3BlcnR5IGlzIG5vdCBcIltvYmplY3QgT2JqZWN0XVwiXG5cdFx0Ly8gLSBET00gbm9kZXNcblx0XHQvLyAtIHdpbmRvd1xuXHRcdGlmICggalF1ZXJ5LnR5cGUoIG9iaiApICE9PSBcIm9iamVjdFwiIHx8IG9iai5ub2RlVHlwZSB8fCBqUXVlcnkuaXNXaW5kb3coIG9iaiApICkge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdGlmICggb2JqLmNvbnN0cnVjdG9yICYmXG5cdFx0XHRcdCFoYXNPd24uY2FsbCggb2JqLmNvbnN0cnVjdG9yLnByb3RvdHlwZSwgXCJpc1Byb3RvdHlwZU9mXCIgKSApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGUgZnVuY3Rpb24gaGFzbid0IHJldHVybmVkIGFscmVhZHksIHdlJ3JlIGNvbmZpZGVudCB0aGF0XG5cdFx0Ly8gfG9ianwgaXMgYSBwbGFpbiBvYmplY3QsIGNyZWF0ZWQgYnkge30gb3IgY29uc3RydWN0ZWQgd2l0aCBuZXcgT2JqZWN0XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0aXNFbXB0eU9iamVjdDogZnVuY3Rpb24oIG9iaiApIHtcblx0XHR2YXIgbmFtZTtcblx0XHRmb3IgKCBuYW1lIGluIG9iaiApIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRydWU7XG5cdH0sXG5cblx0dHlwZTogZnVuY3Rpb24oIG9iaiApIHtcblx0XHRpZiAoIG9iaiA9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIG9iaiArIFwiXCI7XG5cdFx0fVxuXHRcdC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NC4wLCBpT1M8NiAoZnVuY3Rpb25pc2ggUmVnRXhwKVxuXHRcdHJldHVybiB0eXBlb2Ygb2JqID09PSBcIm9iamVjdFwiIHx8IHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIiA/XG5cdFx0XHRjbGFzczJ0eXBlWyB0b1N0cmluZy5jYWxsKG9iaikgXSB8fCBcIm9iamVjdFwiIDpcblx0XHRcdHR5cGVvZiBvYmo7XG5cdH0sXG5cblx0Ly8gRXZhbHVhdGVzIGEgc2NyaXB0IGluIGEgZ2xvYmFsIGNvbnRleHRcblx0Z2xvYmFsRXZhbDogZnVuY3Rpb24oIGNvZGUgKSB7XG5cdFx0dmFyIHNjcmlwdCxcblx0XHRcdGluZGlyZWN0ID0gZXZhbDtcblxuXHRcdGNvZGUgPSBqUXVlcnkudHJpbSggY29kZSApO1xuXG5cdFx0aWYgKCBjb2RlICkge1xuXHRcdFx0Ly8gSWYgdGhlIGNvZGUgaW5jbHVkZXMgYSB2YWxpZCwgcHJvbG9ndWUgcG9zaXRpb25cblx0XHRcdC8vIHN0cmljdCBtb2RlIHByYWdtYSwgZXhlY3V0ZSBjb2RlIGJ5IGluamVjdGluZyBhXG5cdFx0XHQvLyBzY3JpcHQgdGFnIGludG8gdGhlIGRvY3VtZW50LlxuXHRcdFx0aWYgKCBjb2RlLmluZGV4T2YoXCJ1c2Ugc3RyaWN0XCIpID09PSAxICkge1xuXHRcdFx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuXHRcdFx0XHRzY3JpcHQudGV4dCA9IGNvZGU7XG5cdFx0XHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoIHNjcmlwdCApLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIHNjcmlwdCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdC8vIE90aGVyd2lzZSwgYXZvaWQgdGhlIERPTSBub2RlIGNyZWF0aW9uLCBpbnNlcnRpb25cblx0XHRcdC8vIGFuZCByZW1vdmFsIGJ5IHVzaW5nIGFuIGluZGlyZWN0IGdsb2JhbCBldmFsXG5cdFx0XHRcdGluZGlyZWN0KCBjb2RlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXG5cdC8vIENvbnZlcnQgZGFzaGVkIHRvIGNhbWVsQ2FzZTsgdXNlZCBieSB0aGUgY3NzIGFuZCBkYXRhIG1vZHVsZXNcblx0Ly8gU3VwcG9ydDogSUU5LTExK1xuXHQvLyBNaWNyb3NvZnQgZm9yZ290IHRvIGh1bXAgdGhlaXIgdmVuZG9yIHByZWZpeCAoIzk1NzIpXG5cdGNhbWVsQ2FzZTogZnVuY3Rpb24oIHN0cmluZyApIHtcblx0XHRyZXR1cm4gc3RyaW5nLnJlcGxhY2UoIHJtc1ByZWZpeCwgXCJtcy1cIiApLnJlcGxhY2UoIHJkYXNoQWxwaGEsIGZjYW1lbENhc2UgKTtcblx0fSxcblxuXHRub2RlTmFtZTogZnVuY3Rpb24oIGVsZW0sIG5hbWUgKSB7XG5cdFx0cmV0dXJuIGVsZW0ubm9kZU5hbWUgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cdH0sXG5cblx0Ly8gYXJncyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRlYWNoOiBmdW5jdGlvbiggb2JqLCBjYWxsYmFjaywgYXJncyApIHtcblx0XHR2YXIgdmFsdWUsXG5cdFx0XHRpID0gMCxcblx0XHRcdGxlbmd0aCA9IG9iai5sZW5ndGgsXG5cdFx0XHRpc0FycmF5ID0gaXNBcnJheWxpa2UoIG9iaiApO1xuXG5cdFx0aWYgKCBhcmdzICkge1xuXHRcdFx0aWYgKCBpc0FycmF5ICkge1xuXHRcdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrLmFwcGx5KCBvYmpbIGkgXSwgYXJncyApO1xuXG5cdFx0XHRcdFx0aWYgKCB2YWx1ZSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoIGkgaW4gb2JqICkge1xuXHRcdFx0XHRcdHZhbHVlID0gY2FsbGJhY2suYXBwbHkoIG9ialsgaSBdLCBhcmdzICk7XG5cblx0XHRcdFx0XHRpZiAoIHZhbHVlID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0Ly8gQSBzcGVjaWFsLCBmYXN0LCBjYXNlIGZvciB0aGUgbW9zdCBjb21tb24gdXNlIG9mIGVhY2hcblx0XHR9IGVsc2Uge1xuXHRcdFx0aWYgKCBpc0FycmF5ICkge1xuXHRcdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrLmNhbGwoIG9ialsgaSBdLCBpLCBvYmpbIGkgXSApO1xuXG5cdFx0XHRcdFx0aWYgKCB2YWx1ZSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoIGkgaW4gb2JqICkge1xuXHRcdFx0XHRcdHZhbHVlID0gY2FsbGJhY2suY2FsbCggb2JqWyBpIF0sIGksIG9ialsgaSBdICk7XG5cblx0XHRcdFx0XHRpZiAoIHZhbHVlID09PSBmYWxzZSApIHtcblx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBvYmo7XG5cdH0sXG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZDw0LjFcblx0dHJpbTogZnVuY3Rpb24oIHRleHQgKSB7XG5cdFx0cmV0dXJuIHRleHQgPT0gbnVsbCA/XG5cdFx0XHRcIlwiIDpcblx0XHRcdCggdGV4dCArIFwiXCIgKS5yZXBsYWNlKCBydHJpbSwgXCJcIiApO1xuXHR9LFxuXG5cdC8vIHJlc3VsdHMgaXMgZm9yIGludGVybmFsIHVzYWdlIG9ubHlcblx0bWFrZUFycmF5OiBmdW5jdGlvbiggYXJyLCByZXN1bHRzICkge1xuXHRcdHZhciByZXQgPSByZXN1bHRzIHx8IFtdO1xuXG5cdFx0aWYgKCBhcnIgIT0gbnVsbCApIHtcblx0XHRcdGlmICggaXNBcnJheWxpa2UoIE9iamVjdChhcnIpICkgKSB7XG5cdFx0XHRcdGpRdWVyeS5tZXJnZSggcmV0LFxuXHRcdFx0XHRcdHR5cGVvZiBhcnIgPT09IFwic3RyaW5nXCIgP1xuXHRcdFx0XHRcdFsgYXJyIF0gOiBhcnJcblx0XHRcdFx0KTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHB1c2guY2FsbCggcmV0LCBhcnIgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gcmV0O1xuXHR9LFxuXG5cdGluQXJyYXk6IGZ1bmN0aW9uKCBlbGVtLCBhcnIsIGkgKSB7XG5cdFx0cmV0dXJuIGFyciA9PSBudWxsID8gLTEgOiBpbmRleE9mLmNhbGwoIGFyciwgZWxlbSwgaSApO1xuXHR9LFxuXG5cdG1lcmdlOiBmdW5jdGlvbiggZmlyc3QsIHNlY29uZCApIHtcblx0XHR2YXIgbGVuID0gK3NlY29uZC5sZW5ndGgsXG5cdFx0XHRqID0gMCxcblx0XHRcdGkgPSBmaXJzdC5sZW5ndGg7XG5cblx0XHRmb3IgKCA7IGogPCBsZW47IGorKyApIHtcblx0XHRcdGZpcnN0WyBpKysgXSA9IHNlY29uZFsgaiBdO1xuXHRcdH1cblxuXHRcdGZpcnN0Lmxlbmd0aCA9IGk7XG5cblx0XHRyZXR1cm4gZmlyc3Q7XG5cdH0sXG5cblx0Z3JlcDogZnVuY3Rpb24oIGVsZW1zLCBjYWxsYmFjaywgaW52ZXJ0ICkge1xuXHRcdHZhciBjYWxsYmFja0ludmVyc2UsXG5cdFx0XHRtYXRjaGVzID0gW10sXG5cdFx0XHRpID0gMCxcblx0XHRcdGxlbmd0aCA9IGVsZW1zLmxlbmd0aCxcblx0XHRcdGNhbGxiYWNrRXhwZWN0ID0gIWludmVydDtcblxuXHRcdC8vIEdvIHRocm91Z2ggdGhlIGFycmF5LCBvbmx5IHNhdmluZyB0aGUgaXRlbXNcblx0XHQvLyB0aGF0IHBhc3MgdGhlIHZhbGlkYXRvciBmdW5jdGlvblxuXHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSsrICkge1xuXHRcdFx0Y2FsbGJhY2tJbnZlcnNlID0gIWNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpICk7XG5cdFx0XHRpZiAoIGNhbGxiYWNrSW52ZXJzZSAhPT0gY2FsbGJhY2tFeHBlY3QgKSB7XG5cdFx0XHRcdG1hdGNoZXMucHVzaCggZWxlbXNbIGkgXSApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBtYXRjaGVzO1xuXHR9LFxuXG5cdC8vIGFyZyBpcyBmb3IgaW50ZXJuYWwgdXNhZ2Ugb25seVxuXHRtYXA6IGZ1bmN0aW9uKCBlbGVtcywgY2FsbGJhY2ssIGFyZyApIHtcblx0XHR2YXIgdmFsdWUsXG5cdFx0XHRpID0gMCxcblx0XHRcdGxlbmd0aCA9IGVsZW1zLmxlbmd0aCxcblx0XHRcdGlzQXJyYXkgPSBpc0FycmF5bGlrZSggZWxlbXMgKSxcblx0XHRcdHJldCA9IFtdO1xuXG5cdFx0Ly8gR28gdGhyb3VnaCB0aGUgYXJyYXksIHRyYW5zbGF0aW5nIGVhY2ggb2YgdGhlIGl0ZW1zIHRvIHRoZWlyIG5ldyB2YWx1ZXNcblx0XHRpZiAoIGlzQXJyYXkgKSB7XG5cdFx0XHRmb3IgKCA7IGkgPCBsZW5ndGg7IGkrKyApIHtcblx0XHRcdFx0dmFsdWUgPSBjYWxsYmFjayggZWxlbXNbIGkgXSwgaSwgYXJnICk7XG5cblx0XHRcdFx0aWYgKCB2YWx1ZSAhPSBudWxsICkge1xuXHRcdFx0XHRcdHJldC5wdXNoKCB2YWx1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBHbyB0aHJvdWdoIGV2ZXJ5IGtleSBvbiB0aGUgb2JqZWN0LFxuXHRcdH0gZWxzZSB7XG5cdFx0XHRmb3IgKCBpIGluIGVsZW1zICkge1xuXHRcdFx0XHR2YWx1ZSA9IGNhbGxiYWNrKCBlbGVtc1sgaSBdLCBpLCBhcmcgKTtcblxuXHRcdFx0XHRpZiAoIHZhbHVlICE9IG51bGwgKSB7XG5cdFx0XHRcdFx0cmV0LnB1c2goIHZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGbGF0dGVuIGFueSBuZXN0ZWQgYXJyYXlzXG5cdFx0cmV0dXJuIGNvbmNhdC5hcHBseSggW10sIHJldCApO1xuXHR9LFxuXG5cdC8vIEEgZ2xvYmFsIEdVSUQgY291bnRlciBmb3Igb2JqZWN0c1xuXHRndWlkOiAxLFxuXG5cdC8vIEJpbmQgYSBmdW5jdGlvbiB0byBhIGNvbnRleHQsIG9wdGlvbmFsbHkgcGFydGlhbGx5IGFwcGx5aW5nIGFueVxuXHQvLyBhcmd1bWVudHMuXG5cdHByb3h5OiBmdW5jdGlvbiggZm4sIGNvbnRleHQgKSB7XG5cdFx0dmFyIHRtcCwgYXJncywgcHJveHk7XG5cblx0XHRpZiAoIHR5cGVvZiBjb250ZXh0ID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0dG1wID0gZm5bIGNvbnRleHQgXTtcblx0XHRcdGNvbnRleHQgPSBmbjtcblx0XHRcdGZuID0gdG1wO1xuXHRcdH1cblxuXHRcdC8vIFF1aWNrIGNoZWNrIHRvIGRldGVybWluZSBpZiB0YXJnZXQgaXMgY2FsbGFibGUsIGluIHRoZSBzcGVjXG5cdFx0Ly8gdGhpcyB0aHJvd3MgYSBUeXBlRXJyb3IsIGJ1dCB3ZSB3aWxsIGp1c3QgcmV0dXJuIHVuZGVmaW5lZC5cblx0XHRpZiAoICFqUXVlcnkuaXNGdW5jdGlvbiggZm4gKSApIHtcblx0XHRcdHJldHVybiB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gU2ltdWxhdGVkIGJpbmRcblx0XHRhcmdzID0gc2xpY2UuY2FsbCggYXJndW1lbnRzLCAyICk7XG5cdFx0cHJveHkgPSBmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBmbi5hcHBseSggY29udGV4dCB8fCB0aGlzLCBhcmdzLmNvbmNhdCggc2xpY2UuY2FsbCggYXJndW1lbnRzICkgKSApO1xuXHRcdH07XG5cblx0XHQvLyBTZXQgdGhlIGd1aWQgb2YgdW5pcXVlIGhhbmRsZXIgdG8gdGhlIHNhbWUgb2Ygb3JpZ2luYWwgaGFuZGxlciwgc28gaXQgY2FuIGJlIHJlbW92ZWRcblx0XHRwcm94eS5ndWlkID0gZm4uZ3VpZCA9IGZuLmd1aWQgfHwgalF1ZXJ5Lmd1aWQrKztcblxuXHRcdHJldHVybiBwcm94eTtcblx0fSxcblxuXHRub3c6IERhdGUubm93LFxuXG5cdC8vIGpRdWVyeS5zdXBwb3J0IGlzIG5vdCB1c2VkIGluIENvcmUgYnV0IG90aGVyIHByb2plY3RzIGF0dGFjaCB0aGVpclxuXHQvLyBwcm9wZXJ0aWVzIHRvIGl0IHNvIGl0IG5lZWRzIHRvIGV4aXN0LlxuXHRzdXBwb3J0OiBzdXBwb3J0XG59KTtcblxuLy8gUG9wdWxhdGUgdGhlIGNsYXNzMnR5cGUgbWFwXG5qUXVlcnkuZWFjaChcIkJvb2xlYW4gTnVtYmVyIFN0cmluZyBGdW5jdGlvbiBBcnJheSBEYXRlIFJlZ0V4cCBPYmplY3QgRXJyb3JcIi5zcGxpdChcIiBcIiksIGZ1bmN0aW9uKGksIG5hbWUpIHtcblx0Y2xhc3MydHlwZVsgXCJbb2JqZWN0IFwiICsgbmFtZSArIFwiXVwiIF0gPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG59KTtcblxuZnVuY3Rpb24gaXNBcnJheWxpa2UoIG9iaiApIHtcblxuXHQvLyBTdXBwb3J0OiBpT1MgOC4yIChub3QgcmVwcm9kdWNpYmxlIGluIHNpbXVsYXRvcilcblx0Ly8gYGluYCBjaGVjayB1c2VkIHRvIHByZXZlbnQgSklUIGVycm9yIChnaC0yMTQ1KVxuXHQvLyBoYXNPd24gaXNuJ3QgdXNlZCBoZXJlIGR1ZSB0byBmYWxzZSBuZWdhdGl2ZXNcblx0Ly8gcmVnYXJkaW5nIE5vZGVsaXN0IGxlbmd0aCBpbiBJRVxuXHR2YXIgbGVuZ3RoID0gXCJsZW5ndGhcIiBpbiBvYmogJiYgb2JqLmxlbmd0aCxcblx0XHR0eXBlID0galF1ZXJ5LnR5cGUoIG9iaiApO1xuXG5cdGlmICggdHlwZSA9PT0gXCJmdW5jdGlvblwiIHx8IGpRdWVyeS5pc1dpbmRvdyggb2JqICkgKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG5cblx0aWYgKCBvYmoubm9kZVR5cGUgPT09IDEgJiYgbGVuZ3RoICkge1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG5cblx0cmV0dXJuIHR5cGUgPT09IFwiYXJyYXlcIiB8fCBsZW5ndGggPT09IDAgfHxcblx0XHR0eXBlb2YgbGVuZ3RoID09PSBcIm51bWJlclwiICYmIGxlbmd0aCA+IDAgJiYgKCBsZW5ndGggLSAxICkgaW4gb2JqO1xufVxudmFyIFNpenpsZSA9XG4vKiFcbiAqIFNpenpsZSBDU1MgU2VsZWN0b3IgRW5naW5lIHYyLjIuMC1wcmVcbiAqIGh0dHA6Ly9zaXp6bGVqcy5jb20vXG4gKlxuICogQ29weXJpZ2h0IDIwMDgsIDIwMTQgalF1ZXJ5IEZvdW5kYXRpb24sIEluYy4gYW5kIG90aGVyIGNvbnRyaWJ1dG9yc1xuICogUmVsZWFzZWQgdW5kZXIgdGhlIE1JVCBsaWNlbnNlXG4gKiBodHRwOi8vanF1ZXJ5Lm9yZy9saWNlbnNlXG4gKlxuICogRGF0ZTogMjAxNC0xMi0xNlxuICovXG4oZnVuY3Rpb24oIHdpbmRvdyApIHtcblxudmFyIGksXG5cdHN1cHBvcnQsXG5cdEV4cHIsXG5cdGdldFRleHQsXG5cdGlzWE1MLFxuXHR0b2tlbml6ZSxcblx0Y29tcGlsZSxcblx0c2VsZWN0LFxuXHRvdXRlcm1vc3RDb250ZXh0LFxuXHRzb3J0SW5wdXQsXG5cdGhhc0R1cGxpY2F0ZSxcblxuXHQvLyBMb2NhbCBkb2N1bWVudCB2YXJzXG5cdHNldERvY3VtZW50LFxuXHRkb2N1bWVudCxcblx0ZG9jRWxlbSxcblx0ZG9jdW1lbnRJc0hUTUwsXG5cdHJidWdneVFTQSxcblx0cmJ1Z2d5TWF0Y2hlcyxcblx0bWF0Y2hlcyxcblx0Y29udGFpbnMsXG5cblx0Ly8gSW5zdGFuY2Utc3BlY2lmaWMgZGF0YVxuXHRleHBhbmRvID0gXCJzaXp6bGVcIiArIDEgKiBuZXcgRGF0ZSgpLFxuXHRwcmVmZXJyZWREb2MgPSB3aW5kb3cuZG9jdW1lbnQsXG5cdGRpcnJ1bnMgPSAwLFxuXHRkb25lID0gMCxcblx0Y2xhc3NDYWNoZSA9IGNyZWF0ZUNhY2hlKCksXG5cdHRva2VuQ2FjaGUgPSBjcmVhdGVDYWNoZSgpLFxuXHRjb21waWxlckNhY2hlID0gY3JlYXRlQ2FjaGUoKSxcblx0c29ydE9yZGVyID0gZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0aWYgKCBhID09PSBiICkge1xuXHRcdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHR9XG5cdFx0cmV0dXJuIDA7XG5cdH0sXG5cblx0Ly8gR2VuZXJhbC1wdXJwb3NlIGNvbnN0YW50c1xuXHRNQVhfTkVHQVRJVkUgPSAxIDw8IDMxLFxuXG5cdC8vIEluc3RhbmNlIG1ldGhvZHNcblx0aGFzT3duID0gKHt9KS5oYXNPd25Qcm9wZXJ0eSxcblx0YXJyID0gW10sXG5cdHBvcCA9IGFyci5wb3AsXG5cdHB1c2hfbmF0aXZlID0gYXJyLnB1c2gsXG5cdHB1c2ggPSBhcnIucHVzaCxcblx0c2xpY2UgPSBhcnIuc2xpY2UsXG5cdC8vIFVzZSBhIHN0cmlwcGVkLWRvd24gaW5kZXhPZiBhcyBpdCdzIGZhc3RlciB0aGFuIG5hdGl2ZVxuXHQvLyBodHRwOi8vanNwZXJmLmNvbS90aG9yLWluZGV4b2YtdnMtZm9yLzVcblx0aW5kZXhPZiA9IGZ1bmN0aW9uKCBsaXN0LCBlbGVtICkge1xuXHRcdHZhciBpID0gMCxcblx0XHRcdGxlbiA9IGxpc3QubGVuZ3RoO1xuXHRcdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFx0aWYgKCBsaXN0W2ldID09PSBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gaTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIC0xO1xuXHR9LFxuXG5cdGJvb2xlYW5zID0gXCJjaGVja2VkfHNlbGVjdGVkfGFzeW5jfGF1dG9mb2N1c3xhdXRvcGxheXxjb250cm9sc3xkZWZlcnxkaXNhYmxlZHxoaWRkZW58aXNtYXB8bG9vcHxtdWx0aXBsZXxvcGVufHJlYWRvbmx5fHJlcXVpcmVkfHNjb3BlZFwiLFxuXG5cdC8vIFJlZ3VsYXIgZXhwcmVzc2lvbnNcblxuXHQvLyBXaGl0ZXNwYWNlIGNoYXJhY3RlcnMgaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1zZWxlY3RvcnMvI3doaXRlc3BhY2Vcblx0d2hpdGVzcGFjZSA9IFwiW1xcXFx4MjBcXFxcdFxcXFxyXFxcXG5cXFxcZl1cIixcblx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvY3NzMy1zeW50YXgvI2NoYXJhY3RlcnNcblx0Y2hhcmFjdGVyRW5jb2RpbmcgPSBcIig/OlxcXFxcXFxcLnxbXFxcXHctXXxbXlxcXFx4MDAtXFxcXHhhMF0pK1wiLFxuXG5cdC8vIExvb3NlbHkgbW9kZWxlZCBvbiBDU1MgaWRlbnRpZmllciBjaGFyYWN0ZXJzXG5cdC8vIEFuIHVucXVvdGVkIHZhbHVlIHNob3VsZCBiZSBhIENTUyBpZGVudGlmaWVyIGh0dHA6Ly93d3cudzMub3JnL1RSL2NzczMtc2VsZWN0b3JzLyNhdHRyaWJ1dGUtc2VsZWN0b3JzXG5cdC8vIFByb3BlciBzeW50YXg6IGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCN2YWx1ZS1kZWYtaWRlbnRpZmllclxuXHRpZGVudGlmaWVyID0gY2hhcmFjdGVyRW5jb2RpbmcucmVwbGFjZSggXCJ3XCIsIFwidyNcIiApLFxuXG5cdC8vIEF0dHJpYnV0ZSBzZWxlY3RvcnM6IGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jYXR0cmlidXRlLXNlbGVjdG9yc1xuXHRhdHRyaWJ1dGVzID0gXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKihcIiArIGNoYXJhY3RlckVuY29kaW5nICsgXCIpKD86XCIgKyB3aGl0ZXNwYWNlICtcblx0XHQvLyBPcGVyYXRvciAoY2FwdHVyZSAyKVxuXHRcdFwiKihbKl4kfCF+XT89KVwiICsgd2hpdGVzcGFjZSArXG5cdFx0Ly8gXCJBdHRyaWJ1dGUgdmFsdWVzIG11c3QgYmUgQ1NTIGlkZW50aWZpZXJzIFtjYXB0dXJlIDVdIG9yIHN0cmluZ3MgW2NhcHR1cmUgMyBvciBjYXB0dXJlIDRdXCJcblx0XHRcIiooPzonKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCJ8KFwiICsgaWRlbnRpZmllciArIFwiKSl8KVwiICsgd2hpdGVzcGFjZSArXG5cdFx0XCIqXFxcXF1cIixcblxuXHRwc2V1ZG9zID0gXCI6KFwiICsgY2hhcmFjdGVyRW5jb2RpbmcgKyBcIikoPzpcXFxcKChcIiArXG5cdFx0Ly8gVG8gcmVkdWNlIHRoZSBudW1iZXIgb2Ygc2VsZWN0b3JzIG5lZWRpbmcgdG9rZW5pemUgaW4gdGhlIHByZUZpbHRlciwgcHJlZmVyIGFyZ3VtZW50czpcblx0XHQvLyAxLiBxdW90ZWQgKGNhcHR1cmUgMzsgY2FwdHVyZSA0IG9yIGNhcHR1cmUgNSlcblx0XHRcIignKCg/OlxcXFxcXFxcLnxbXlxcXFxcXFxcJ10pKiknfFxcXCIoKD86XFxcXFxcXFwufFteXFxcXFxcXFxcXFwiXSkqKVxcXCIpfFwiICtcblx0XHQvLyAyLiBzaW1wbGUgKGNhcHR1cmUgNilcblx0XHRcIigoPzpcXFxcXFxcXC58W15cXFxcXFxcXCgpW1xcXFxdXXxcIiArIGF0dHJpYnV0ZXMgKyBcIikqKXxcIiArXG5cdFx0Ly8gMy4gYW55dGhpbmcgZWxzZSAoY2FwdHVyZSAyKVxuXHRcdFwiLipcIiArXG5cdFx0XCIpXFxcXCl8KVwiLFxuXG5cdC8vIExlYWRpbmcgYW5kIG5vbi1lc2NhcGVkIHRyYWlsaW5nIHdoaXRlc3BhY2UsIGNhcHR1cmluZyBzb21lIG5vbi13aGl0ZXNwYWNlIGNoYXJhY3RlcnMgcHJlY2VkaW5nIHRoZSBsYXR0ZXJcblx0cndoaXRlc3BhY2UgPSBuZXcgUmVnRXhwKCB3aGl0ZXNwYWNlICsgXCIrXCIsIFwiZ1wiICksXG5cdHJ0cmltID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIrfCgoPzpefFteXFxcXFxcXFxdKSg/OlxcXFxcXFxcLikqKVwiICsgd2hpdGVzcGFjZSArIFwiKyRcIiwgXCJnXCIgKSxcblxuXHRyY29tbWEgPSBuZXcgUmVnRXhwKCBcIl5cIiArIHdoaXRlc3BhY2UgKyBcIiosXCIgKyB3aGl0ZXNwYWNlICsgXCIqXCIgKSxcblx0cmNvbWJpbmF0b3JzID0gbmV3IFJlZ0V4cCggXCJeXCIgKyB3aGl0ZXNwYWNlICsgXCIqKFs+K35dfFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgd2hpdGVzcGFjZSArIFwiKlwiICksXG5cblx0cmF0dHJpYnV0ZVF1b3RlcyA9IG5ldyBSZWdFeHAoIFwiPVwiICsgd2hpdGVzcGFjZSArIFwiKihbXlxcXFxdJ1xcXCJdKj8pXCIgKyB3aGl0ZXNwYWNlICsgXCIqXFxcXF1cIiwgXCJnXCIgKSxcblxuXHRycHNldWRvID0gbmV3IFJlZ0V4cCggcHNldWRvcyApLFxuXHRyaWRlbnRpZmllciA9IG5ldyBSZWdFeHAoIFwiXlwiICsgaWRlbnRpZmllciArIFwiJFwiICksXG5cblx0bWF0Y2hFeHByID0ge1xuXHRcdFwiSURcIjogbmV3IFJlZ0V4cCggXCJeIyhcIiArIGNoYXJhY3RlckVuY29kaW5nICsgXCIpXCIgKSxcblx0XHRcIkNMQVNTXCI6IG5ldyBSZWdFeHAoIFwiXlxcXFwuKFwiICsgY2hhcmFjdGVyRW5jb2RpbmcgKyBcIilcIiApLFxuXHRcdFwiVEFHXCI6IG5ldyBSZWdFeHAoIFwiXihcIiArIGNoYXJhY3RlckVuY29kaW5nLnJlcGxhY2UoIFwid1wiLCBcIncqXCIgKSArIFwiKVwiICksXG5cdFx0XCJBVFRSXCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgYXR0cmlidXRlcyApLFxuXHRcdFwiUFNFVURPXCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgcHNldWRvcyApLFxuXHRcdFwiQ0hJTERcIjogbmV3IFJlZ0V4cCggXCJeOihvbmx5fGZpcnN0fGxhc3R8bnRofG50aC1sYXN0KS0oY2hpbGR8b2YtdHlwZSkoPzpcXFxcKFwiICsgd2hpdGVzcGFjZSArXG5cdFx0XHRcIiooZXZlbnxvZGR8KChbKy1dfCkoXFxcXGQqKW58KVwiICsgd2hpdGVzcGFjZSArIFwiKig/OihbKy1dfClcIiArIHdoaXRlc3BhY2UgK1xuXHRcdFx0XCIqKFxcXFxkKyl8KSlcIiArIHdoaXRlc3BhY2UgKyBcIipcXFxcKXwpXCIsIFwiaVwiICksXG5cdFx0XCJib29sXCI6IG5ldyBSZWdFeHAoIFwiXig/OlwiICsgYm9vbGVhbnMgKyBcIikkXCIsIFwiaVwiICksXG5cdFx0Ly8gRm9yIHVzZSBpbiBsaWJyYXJpZXMgaW1wbGVtZW50aW5nIC5pcygpXG5cdFx0Ly8gV2UgdXNlIHRoaXMgZm9yIFBPUyBtYXRjaGluZyBpbiBgc2VsZWN0YFxuXHRcdFwibmVlZHNDb250ZXh0XCI6IG5ldyBSZWdFeHAoIFwiXlwiICsgd2hpdGVzcGFjZSArIFwiKls+K35dfDooZXZlbnxvZGR8ZXF8Z3R8bHR8bnRofGZpcnN0fGxhc3QpKD86XFxcXChcIiArXG5cdFx0XHR3aGl0ZXNwYWNlICsgXCIqKCg/Oi1cXFxcZCk/XFxcXGQqKVwiICsgd2hpdGVzcGFjZSArIFwiKlxcXFwpfCkoPz1bXi1dfCQpXCIsIFwiaVwiIClcblx0fSxcblxuXHRyaW5wdXRzID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8YnV0dG9uKSQvaSxcblx0cmhlYWRlciA9IC9eaFxcZCQvaSxcblxuXHRybmF0aXZlID0gL15bXntdK1xce1xccypcXFtuYXRpdmUgXFx3LyxcblxuXHQvLyBFYXNpbHktcGFyc2VhYmxlL3JldHJpZXZhYmxlIElEIG9yIFRBRyBvciBDTEFTUyBzZWxlY3RvcnNcblx0cnF1aWNrRXhwciA9IC9eKD86IyhbXFx3LV0rKXwoXFx3Kyl8XFwuKFtcXHctXSspKSQvLFxuXG5cdHJzaWJsaW5nID0gL1srfl0vLFxuXHRyZXNjYXBlID0gLyd8XFxcXC9nLFxuXG5cdC8vIENTUyBlc2NhcGVzIGh0dHA6Ly93d3cudzMub3JnL1RSL0NTUzIxL3N5bmRhdGEuaHRtbCNlc2NhcGVkLWNoYXJhY3RlcnNcblx0cnVuZXNjYXBlID0gbmV3IFJlZ0V4cCggXCJcXFxcXFxcXChbXFxcXGRhLWZdezEsNn1cIiArIHdoaXRlc3BhY2UgKyBcIj98KFwiICsgd2hpdGVzcGFjZSArIFwiKXwuKVwiLCBcImlnXCIgKSxcblx0ZnVuZXNjYXBlID0gZnVuY3Rpb24oIF8sIGVzY2FwZWQsIGVzY2FwZWRXaGl0ZXNwYWNlICkge1xuXHRcdHZhciBoaWdoID0gXCIweFwiICsgZXNjYXBlZCAtIDB4MTAwMDA7XG5cdFx0Ly8gTmFOIG1lYW5zIG5vbi1jb2RlcG9pbnRcblx0XHQvLyBTdXBwb3J0OiBGaXJlZm94PDI0XG5cdFx0Ly8gV29ya2Fyb3VuZCBlcnJvbmVvdXMgbnVtZXJpYyBpbnRlcnByZXRhdGlvbiBvZiArXCIweFwiXG5cdFx0cmV0dXJuIGhpZ2ggIT09IGhpZ2ggfHwgZXNjYXBlZFdoaXRlc3BhY2UgP1xuXHRcdFx0ZXNjYXBlZCA6XG5cdFx0XHRoaWdoIDwgMCA/XG5cdFx0XHRcdC8vIEJNUCBjb2RlcG9pbnRcblx0XHRcdFx0U3RyaW5nLmZyb21DaGFyQ29kZSggaGlnaCArIDB4MTAwMDAgKSA6XG5cdFx0XHRcdC8vIFN1cHBsZW1lbnRhbCBQbGFuZSBjb2RlcG9pbnQgKHN1cnJvZ2F0ZSBwYWlyKVxuXHRcdFx0XHRTdHJpbmcuZnJvbUNoYXJDb2RlKCBoaWdoID4+IDEwIHwgMHhEODAwLCBoaWdoICYgMHgzRkYgfCAweERDMDAgKTtcblx0fSxcblxuXHQvLyBVc2VkIGZvciBpZnJhbWVzXG5cdC8vIFNlZSBzZXREb2N1bWVudCgpXG5cdC8vIFJlbW92aW5nIHRoZSBmdW5jdGlvbiB3cmFwcGVyIGNhdXNlcyBhIFwiUGVybWlzc2lvbiBEZW5pZWRcIlxuXHQvLyBlcnJvciBpbiBJRVxuXHR1bmxvYWRIYW5kbGVyID0gZnVuY3Rpb24oKSB7XG5cdFx0c2V0RG9jdW1lbnQoKTtcblx0fTtcblxuLy8gT3B0aW1pemUgZm9yIHB1c2guYXBwbHkoIF8sIE5vZGVMaXN0IClcbnRyeSB7XG5cdHB1c2guYXBwbHkoXG5cdFx0KGFyciA9IHNsaWNlLmNhbGwoIHByZWZlcnJlZERvYy5jaGlsZE5vZGVzICkpLFxuXHRcdHByZWZlcnJlZERvYy5jaGlsZE5vZGVzXG5cdCk7XG5cdC8vIFN1cHBvcnQ6IEFuZHJvaWQ8NC4wXG5cdC8vIERldGVjdCBzaWxlbnRseSBmYWlsaW5nIHB1c2guYXBwbHlcblx0YXJyWyBwcmVmZXJyZWREb2MuY2hpbGROb2Rlcy5sZW5ndGggXS5ub2RlVHlwZTtcbn0gY2F0Y2ggKCBlICkge1xuXHRwdXNoID0geyBhcHBseTogYXJyLmxlbmd0aCA/XG5cblx0XHQvLyBMZXZlcmFnZSBzbGljZSBpZiBwb3NzaWJsZVxuXHRcdGZ1bmN0aW9uKCB0YXJnZXQsIGVscyApIHtcblx0XHRcdHB1c2hfbmF0aXZlLmFwcGx5KCB0YXJnZXQsIHNsaWNlLmNhbGwoZWxzKSApO1xuXHRcdH0gOlxuXG5cdFx0Ly8gU3VwcG9ydDogSUU8OVxuXHRcdC8vIE90aGVyd2lzZSBhcHBlbmQgZGlyZWN0bHlcblx0XHRmdW5jdGlvbiggdGFyZ2V0LCBlbHMgKSB7XG5cdFx0XHR2YXIgaiA9IHRhcmdldC5sZW5ndGgsXG5cdFx0XHRcdGkgPSAwO1xuXHRcdFx0Ly8gQ2FuJ3QgdHJ1c3QgTm9kZUxpc3QubGVuZ3RoXG5cdFx0XHR3aGlsZSAoICh0YXJnZXRbaisrXSA9IGVsc1tpKytdKSApIHt9XG5cdFx0XHR0YXJnZXQubGVuZ3RoID0gaiAtIDE7XG5cdFx0fVxuXHR9O1xufVxuXG5mdW5jdGlvbiBTaXp6bGUoIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xuXHR2YXIgbWF0Y2gsIGVsZW0sIG0sIG5vZGVUeXBlLFxuXHRcdC8vIFFTQSB2YXJzXG5cdFx0aSwgZ3JvdXBzLCBvbGQsIG5pZCwgbmV3Q29udGV4dCwgbmV3U2VsZWN0b3I7XG5cblx0aWYgKCAoIGNvbnRleHQgPyBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCA6IHByZWZlcnJlZERvYyApICE9PSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHR9XG5cblx0Y29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQ7XG5cdHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdO1xuXHRub2RlVHlwZSA9IGNvbnRleHQubm9kZVR5cGU7XG5cblx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgfHwgIXNlbGVjdG9yIHx8XG5cdFx0bm9kZVR5cGUgIT09IDEgJiYgbm9kZVR5cGUgIT09IDkgJiYgbm9kZVR5cGUgIT09IDExICkge1xuXG5cdFx0cmV0dXJuIHJlc3VsdHM7XG5cdH1cblxuXHRpZiAoICFzZWVkICYmIGRvY3VtZW50SXNIVE1MICkge1xuXG5cdFx0Ly8gVHJ5IHRvIHNob3J0Y3V0IGZpbmQgb3BlcmF0aW9ucyB3aGVuIHBvc3NpYmxlIChlLmcuLCBub3QgdW5kZXIgRG9jdW1lbnRGcmFnbWVudClcblx0XHRpZiAoIG5vZGVUeXBlICE9PSAxMSAmJiAobWF0Y2ggPSBycXVpY2tFeHByLmV4ZWMoIHNlbGVjdG9yICkpICkge1xuXHRcdFx0Ly8gU3BlZWQtdXA6IFNpenpsZShcIiNJRFwiKVxuXHRcdFx0aWYgKCAobSA9IG1hdGNoWzFdKSApIHtcblx0XHRcdFx0aWYgKCBub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRlbGVtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggbSApO1xuXHRcdFx0XHRcdC8vIENoZWNrIHBhcmVudE5vZGUgdG8gY2F0Y2ggd2hlbiBCbGFja2JlcnJ5IDQuNiByZXR1cm5zXG5cdFx0XHRcdFx0Ly8gbm9kZXMgdGhhdCBhcmUgbm8gbG9uZ2VyIGluIHRoZSBkb2N1bWVudCAoalF1ZXJ5ICM2OTYzKVxuXHRcdFx0XHRcdGlmICggZWxlbSAmJiBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdFx0XHQvLyBIYW5kbGUgdGhlIGNhc2Ugd2hlcmUgSUUsIE9wZXJhLCBhbmQgV2Via2l0IHJldHVybiBpdGVtc1xuXHRcdFx0XHRcdFx0Ly8gYnkgbmFtZSBpbnN0ZWFkIG9mIElEXG5cdFx0XHRcdFx0XHRpZiAoIGVsZW0uaWQgPT09IG0gKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC8vIENvbnRleHQgaXMgbm90IGEgZG9jdW1lbnRcblx0XHRcdFx0XHRpZiAoIGNvbnRleHQub3duZXJEb2N1bWVudCAmJiAoZWxlbSA9IGNvbnRleHQub3duZXJEb2N1bWVudC5nZXRFbGVtZW50QnlJZCggbSApKSAmJlxuXHRcdFx0XHRcdFx0Y29udGFpbnMoIGNvbnRleHQsIGVsZW0gKSAmJiBlbGVtLmlkID09PSBtICkge1xuXHRcdFx0XHRcdFx0cmVzdWx0cy5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0Ly8gU3BlZWQtdXA6IFNpenpsZShcIlRBR1wiKVxuXHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbMl0gKSB7XG5cdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHNlbGVjdG9yICkgKTtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cblx0XHRcdC8vIFNwZWVkLXVwOiBTaXp6bGUoXCIuQ0xBU1NcIilcblx0XHRcdH0gZWxzZSBpZiAoIChtID0gbWF0Y2hbM10pICYmIHN1cHBvcnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSApIHtcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgY29udGV4dC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCBtICkgKTtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUVNBIHBhdGhcblx0XHRpZiAoIHN1cHBvcnQucXNhICYmICghcmJ1Z2d5UVNBIHx8ICFyYnVnZ3lRU0EudGVzdCggc2VsZWN0b3IgKSkgKSB7XG5cdFx0XHRuaWQgPSBvbGQgPSBleHBhbmRvO1xuXHRcdFx0bmV3Q29udGV4dCA9IGNvbnRleHQ7XG5cdFx0XHRuZXdTZWxlY3RvciA9IG5vZGVUeXBlICE9PSAxICYmIHNlbGVjdG9yO1xuXG5cdFx0XHQvLyBxU0Egd29ya3Mgc3RyYW5nZWx5IG9uIEVsZW1lbnQtcm9vdGVkIHF1ZXJpZXNcblx0XHRcdC8vIFdlIGNhbiB3b3JrIGFyb3VuZCB0aGlzIGJ5IHNwZWNpZnlpbmcgYW4gZXh0cmEgSUQgb24gdGhlIHJvb3Rcblx0XHRcdC8vIGFuZCB3b3JraW5nIHVwIGZyb20gdGhlcmUgKFRoYW5rcyB0byBBbmRyZXcgRHVwb250IGZvciB0aGUgdGVjaG5pcXVlKVxuXHRcdFx0Ly8gSUUgOCBkb2Vzbid0IHdvcmsgb24gb2JqZWN0IGVsZW1lbnRzXG5cdFx0XHRpZiAoIG5vZGVUeXBlID09PSAxICYmIGNvbnRleHQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPT0gXCJvYmplY3RcIiApIHtcblx0XHRcdFx0Z3JvdXBzID0gdG9rZW5pemUoIHNlbGVjdG9yICk7XG5cblx0XHRcdFx0aWYgKCAob2xkID0gY29udGV4dC5nZXRBdHRyaWJ1dGUoXCJpZFwiKSkgKSB7XG5cdFx0XHRcdFx0bmlkID0gb2xkLnJlcGxhY2UoIHJlc2NhcGUsIFwiXFxcXCQmXCIgKTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRjb250ZXh0LnNldEF0dHJpYnV0ZSggXCJpZFwiLCBuaWQgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuaWQgPSBcIltpZD0nXCIgKyBuaWQgKyBcIiddIFwiO1xuXG5cdFx0XHRcdGkgPSBncm91cHMubGVuZ3RoO1xuXHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRncm91cHNbaV0gPSBuaWQgKyB0b1NlbGVjdG9yKCBncm91cHNbaV0gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRuZXdDb250ZXh0ID0gcnNpYmxpbmcudGVzdCggc2VsZWN0b3IgKSAmJiB0ZXN0Q29udGV4dCggY29udGV4dC5wYXJlbnROb2RlICkgfHwgY29udGV4dDtcblx0XHRcdFx0bmV3U2VsZWN0b3IgPSBncm91cHMuam9pbihcIixcIik7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggbmV3U2VsZWN0b3IgKSB7XG5cdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cyxcblx0XHRcdFx0XHRcdG5ld0NvbnRleHQucXVlcnlTZWxlY3RvckFsbCggbmV3U2VsZWN0b3IgKVxuXHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0cmV0dXJuIHJlc3VsdHM7XG5cdFx0XHRcdH0gY2F0Y2gocXNhRXJyb3IpIHtcblx0XHRcdFx0fSBmaW5hbGx5IHtcblx0XHRcdFx0XHRpZiAoICFvbGQgKSB7XG5cdFx0XHRcdFx0XHRjb250ZXh0LnJlbW92ZUF0dHJpYnV0ZShcImlkXCIpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIEFsbCBvdGhlcnNcblx0cmV0dXJuIHNlbGVjdCggc2VsZWN0b3IucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICk7XG59XG5cbi8qKlxuICogQ3JlYXRlIGtleS12YWx1ZSBjYWNoZXMgb2YgbGltaXRlZCBzaXplXG4gKiBAcmV0dXJucyB7RnVuY3Rpb24oc3RyaW5nLCBPYmplY3QpfSBSZXR1cm5zIHRoZSBPYmplY3QgZGF0YSBhZnRlciBzdG9yaW5nIGl0IG9uIGl0c2VsZiB3aXRoXG4gKlx0cHJvcGVydHkgbmFtZSB0aGUgKHNwYWNlLXN1ZmZpeGVkKSBzdHJpbmcgYW5kIChpZiB0aGUgY2FjaGUgaXMgbGFyZ2VyIHRoYW4gRXhwci5jYWNoZUxlbmd0aClcbiAqXHRkZWxldGluZyB0aGUgb2xkZXN0IGVudHJ5XG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUNhY2hlKCkge1xuXHR2YXIga2V5cyA9IFtdO1xuXG5cdGZ1bmN0aW9uIGNhY2hlKCBrZXksIHZhbHVlICkge1xuXHRcdC8vIFVzZSAoa2V5ICsgXCIgXCIpIHRvIGF2b2lkIGNvbGxpc2lvbiB3aXRoIG5hdGl2ZSBwcm90b3R5cGUgcHJvcGVydGllcyAoc2VlIElzc3VlICMxNTcpXG5cdFx0aWYgKCBrZXlzLnB1c2goIGtleSArIFwiIFwiICkgPiBFeHByLmNhY2hlTGVuZ3RoICkge1xuXHRcdFx0Ly8gT25seSBrZWVwIHRoZSBtb3N0IHJlY2VudCBlbnRyaWVzXG5cdFx0XHRkZWxldGUgY2FjaGVbIGtleXMuc2hpZnQoKSBdO1xuXHRcdH1cblx0XHRyZXR1cm4gKGNhY2hlWyBrZXkgKyBcIiBcIiBdID0gdmFsdWUpO1xuXHR9XG5cdHJldHVybiBjYWNoZTtcbn1cblxuLyoqXG4gKiBNYXJrIGEgZnVuY3Rpb24gZm9yIHNwZWNpYWwgdXNlIGJ5IFNpenpsZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1hcmtcbiAqL1xuZnVuY3Rpb24gbWFya0Z1bmN0aW9uKCBmbiApIHtcblx0Zm5bIGV4cGFuZG8gXSA9IHRydWU7XG5cdHJldHVybiBmbjtcbn1cblxuLyoqXG4gKiBTdXBwb3J0IHRlc3RpbmcgdXNpbmcgYW4gZWxlbWVudFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gUGFzc2VkIHRoZSBjcmVhdGVkIGRpdiBhbmQgZXhwZWN0cyBhIGJvb2xlYW4gcmVzdWx0XG4gKi9cbmZ1bmN0aW9uIGFzc2VydCggZm4gKSB7XG5cdHZhciBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuXG5cdHRyeSB7XG5cdFx0cmV0dXJuICEhZm4oIGRpdiApO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9IGZpbmFsbHkge1xuXHRcdC8vIFJlbW92ZSBmcm9tIGl0cyBwYXJlbnQgYnkgZGVmYXVsdFxuXHRcdGlmICggZGl2LnBhcmVudE5vZGUgKSB7XG5cdFx0XHRkaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCggZGl2ICk7XG5cdFx0fVxuXHRcdC8vIHJlbGVhc2UgbWVtb3J5IGluIElFXG5cdFx0ZGl2ID0gbnVsbDtcblx0fVxufVxuXG4vKipcbiAqIEFkZHMgdGhlIHNhbWUgaGFuZGxlciBmb3IgYWxsIG9mIHRoZSBzcGVjaWZpZWQgYXR0cnNcbiAqIEBwYXJhbSB7U3RyaW5nfSBhdHRycyBQaXBlLXNlcGFyYXRlZCBsaXN0IG9mIGF0dHJpYnV0ZXNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGhhbmRsZXIgVGhlIG1ldGhvZCB0aGF0IHdpbGwgYmUgYXBwbGllZFxuICovXG5mdW5jdGlvbiBhZGRIYW5kbGUoIGF0dHJzLCBoYW5kbGVyICkge1xuXHR2YXIgYXJyID0gYXR0cnMuc3BsaXQoXCJ8XCIpLFxuXHRcdGkgPSBhdHRycy5sZW5ndGg7XG5cblx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0RXhwci5hdHRySGFuZGxlWyBhcnJbaV0gXSA9IGhhbmRsZXI7XG5cdH1cbn1cblxuLyoqXG4gKiBDaGVja3MgZG9jdW1lbnQgb3JkZXIgb2YgdHdvIHNpYmxpbmdzXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGFcbiAqIEBwYXJhbSB7RWxlbWVudH0gYlxuICogQHJldHVybnMge051bWJlcn0gUmV0dXJucyBsZXNzIHRoYW4gMCBpZiBhIHByZWNlZGVzIGIsIGdyZWF0ZXIgdGhhbiAwIGlmIGEgZm9sbG93cyBiXG4gKi9cbmZ1bmN0aW9uIHNpYmxpbmdDaGVjayggYSwgYiApIHtcblx0dmFyIGN1ciA9IGIgJiYgYSxcblx0XHRkaWZmID0gY3VyICYmIGEubm9kZVR5cGUgPT09IDEgJiYgYi5ub2RlVHlwZSA9PT0gMSAmJlxuXHRcdFx0KCB+Yi5zb3VyY2VJbmRleCB8fCBNQVhfTkVHQVRJVkUgKSAtXG5cdFx0XHQoIH5hLnNvdXJjZUluZGV4IHx8IE1BWF9ORUdBVElWRSApO1xuXG5cdC8vIFVzZSBJRSBzb3VyY2VJbmRleCBpZiBhdmFpbGFibGUgb24gYm90aCBub2Rlc1xuXHRpZiAoIGRpZmYgKSB7XG5cdFx0cmV0dXJuIGRpZmY7XG5cdH1cblxuXHQvLyBDaGVjayBpZiBiIGZvbGxvd3MgYVxuXHRpZiAoIGN1ciApIHtcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIubmV4dFNpYmxpbmcpICkge1xuXHRcdFx0aWYgKCBjdXIgPT09IGIgKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gYSA/IDEgOiAtMTtcbn1cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdG8gdXNlIGluIHBzZXVkb3MgZm9yIGlucHV0IHR5cGVzXG4gKiBAcGFyYW0ge1N0cmluZ30gdHlwZVxuICovXG5mdW5jdGlvbiBjcmVhdGVJbnB1dFBzZXVkbyggdHlwZSApIHtcblx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdHJldHVybiBuYW1lID09PSBcImlucHV0XCIgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgYnV0dG9uc1xuICogQHBhcmFtIHtTdHJpbmd9IHR5cGVcbiAqL1xuZnVuY3Rpb24gY3JlYXRlQnV0dG9uUHNldWRvKCB0eXBlICkge1xuXHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0dmFyIG5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0cmV0dXJuIChuYW1lID09PSBcImlucHV0XCIgfHwgbmFtZSA9PT0gXCJidXR0b25cIikgJiYgZWxlbS50eXBlID09PSB0eXBlO1xuXHR9O1xufVxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0byB1c2UgaW4gcHNldWRvcyBmb3IgcG9zaXRpb25hbHNcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oIGZuICkge1xuXHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBhcmd1bWVudCApIHtcblx0XHRhcmd1bWVudCA9ICthcmd1bWVudDtcblx0XHRyZXR1cm4gbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWVkLCBtYXRjaGVzICkge1xuXHRcdFx0dmFyIGosXG5cdFx0XHRcdG1hdGNoSW5kZXhlcyA9IGZuKCBbXSwgc2VlZC5sZW5ndGgsIGFyZ3VtZW50ICksXG5cdFx0XHRcdGkgPSBtYXRjaEluZGV4ZXMubGVuZ3RoO1xuXG5cdFx0XHQvLyBNYXRjaCBlbGVtZW50cyBmb3VuZCBhdCB0aGUgc3BlY2lmaWVkIGluZGV4ZXNcblx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRpZiAoIHNlZWRbIChqID0gbWF0Y2hJbmRleGVzW2ldKSBdICkge1xuXHRcdFx0XHRcdHNlZWRbal0gPSAhKG1hdGNoZXNbal0gPSBzZWVkW2pdKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9KTtcbn1cblxuLyoqXG4gKiBDaGVja3MgYSBub2RlIGZvciB2YWxpZGl0eSBhcyBhIFNpenpsZSBjb250ZXh0XG4gKiBAcGFyYW0ge0VsZW1lbnR8T2JqZWN0PX0gY29udGV4dFxuICogQHJldHVybnMge0VsZW1lbnR8T2JqZWN0fEJvb2xlYW59IFRoZSBpbnB1dCBub2RlIGlmIGFjY2VwdGFibGUsIG90aGVyd2lzZSBhIGZhbHN5IHZhbHVlXG4gKi9cbmZ1bmN0aW9uIHRlc3RDb250ZXh0KCBjb250ZXh0ICkge1xuXHRyZXR1cm4gY29udGV4dCAmJiB0eXBlb2YgY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb250ZXh0O1xufVxuXG4vLyBFeHBvc2Ugc3VwcG9ydCB2YXJzIGZvciBjb252ZW5pZW5jZVxuc3VwcG9ydCA9IFNpenpsZS5zdXBwb3J0ID0ge307XG5cbi8qKlxuICogRGV0ZWN0cyBYTUwgbm9kZXNcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IGVsZW0gQW4gZWxlbWVudCBvciBhIGRvY3VtZW50XG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gVHJ1ZSBpZmYgZWxlbSBpcyBhIG5vbi1IVE1MIFhNTCBub2RlXG4gKi9cbmlzWE1MID0gU2l6emxlLmlzWE1MID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdC8vIGRvY3VtZW50RWxlbWVudCBpcyB2ZXJpZmllZCBmb3IgY2FzZXMgd2hlcmUgaXQgZG9lc24ndCB5ZXQgZXhpc3Rcblx0Ly8gKHN1Y2ggYXMgbG9hZGluZyBpZnJhbWVzIGluIElFIC0gIzQ4MzMpXG5cdHZhciBkb2N1bWVudEVsZW1lbnQgPSBlbGVtICYmIChlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSkuZG9jdW1lbnRFbGVtZW50O1xuXHRyZXR1cm4gZG9jdW1lbnRFbGVtZW50ID8gZG9jdW1lbnRFbGVtZW50Lm5vZGVOYW1lICE9PSBcIkhUTUxcIiA6IGZhbHNlO1xufTtcblxuLyoqXG4gKiBTZXRzIGRvY3VtZW50LXJlbGF0ZWQgdmFyaWFibGVzIG9uY2UgYmFzZWQgb24gdGhlIGN1cnJlbnQgZG9jdW1lbnRcbiAqIEBwYXJhbSB7RWxlbWVudHxPYmplY3R9IFtkb2NdIEFuIGVsZW1lbnQgb3IgZG9jdW1lbnQgb2JqZWN0IHRvIHVzZSB0byBzZXQgdGhlIGRvY3VtZW50XG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIHRoZSBjdXJyZW50IGRvY3VtZW50XG4gKi9cbnNldERvY3VtZW50ID0gU2l6emxlLnNldERvY3VtZW50ID0gZnVuY3Rpb24oIG5vZGUgKSB7XG5cdHZhciBoYXNDb21wYXJlLCBwYXJlbnQsXG5cdFx0ZG9jID0gbm9kZSA/IG5vZGUub3duZXJEb2N1bWVudCB8fCBub2RlIDogcHJlZmVycmVkRG9jO1xuXG5cdC8vIElmIG5vIGRvY3VtZW50IGFuZCBkb2N1bWVudEVsZW1lbnQgaXMgYXZhaWxhYmxlLCByZXR1cm5cblx0aWYgKCBkb2MgPT09IGRvY3VtZW50IHx8IGRvYy5ub2RlVHlwZSAhPT0gOSB8fCAhZG9jLmRvY3VtZW50RWxlbWVudCApIHtcblx0XHRyZXR1cm4gZG9jdW1lbnQ7XG5cdH1cblxuXHQvLyBTZXQgb3VyIGRvY3VtZW50XG5cdGRvY3VtZW50ID0gZG9jO1xuXHRkb2NFbGVtID0gZG9jLmRvY3VtZW50RWxlbWVudDtcblx0cGFyZW50ID0gZG9jLmRlZmF1bHRWaWV3O1xuXG5cdC8vIFN1cHBvcnQ6IElFPjhcblx0Ly8gSWYgaWZyYW1lIGRvY3VtZW50IGlzIGFzc2lnbmVkIHRvIFwiZG9jdW1lbnRcIiB2YXJpYWJsZSBhbmQgaWYgaWZyYW1lIGhhcyBiZWVuIHJlbG9hZGVkLFxuXHQvLyBJRSB3aWxsIHRocm93IFwicGVybWlzc2lvbiBkZW5pZWRcIiBlcnJvciB3aGVuIGFjY2Vzc2luZyBcImRvY3VtZW50XCIgdmFyaWFibGUsIHNlZSBqUXVlcnkgIzEzOTM2XG5cdC8vIElFNi04IGRvIG5vdCBzdXBwb3J0IHRoZSBkZWZhdWx0VmlldyBwcm9wZXJ0eSBzbyBwYXJlbnQgd2lsbCBiZSB1bmRlZmluZWRcblx0aWYgKCBwYXJlbnQgJiYgcGFyZW50ICE9PSBwYXJlbnQudG9wICkge1xuXHRcdC8vIElFMTEgZG9lcyBub3QgaGF2ZSBhdHRhY2hFdmVudCwgc28gYWxsIG11c3Qgc3VmZmVyXG5cdFx0aWYgKCBwYXJlbnQuYWRkRXZlbnRMaXN0ZW5lciApIHtcblx0XHRcdHBhcmVudC5hZGRFdmVudExpc3RlbmVyKCBcInVubG9hZFwiLCB1bmxvYWRIYW5kbGVyLCBmYWxzZSApO1xuXHRcdH0gZWxzZSBpZiAoIHBhcmVudC5hdHRhY2hFdmVudCApIHtcblx0XHRcdHBhcmVudC5hdHRhY2hFdmVudCggXCJvbnVubG9hZFwiLCB1bmxvYWRIYW5kbGVyICk7XG5cdFx0fVxuXHR9XG5cblx0LyogU3VwcG9ydCB0ZXN0c1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cdGRvY3VtZW50SXNIVE1MID0gIWlzWE1MKCBkb2MgKTtcblxuXHQvKiBBdHRyaWJ1dGVzXG5cdC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gKi9cblxuXHQvLyBTdXBwb3J0OiBJRTw4XG5cdC8vIFZlcmlmeSB0aGF0IGdldEF0dHJpYnV0ZSByZWFsbHkgcmV0dXJucyBhdHRyaWJ1dGVzIGFuZCBub3QgcHJvcGVydGllc1xuXHQvLyAoZXhjZXB0aW5nIElFOCBib29sZWFucylcblx0c3VwcG9ydC5hdHRyaWJ1dGVzID0gYXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XG5cdFx0ZGl2LmNsYXNzTmFtZSA9IFwiaVwiO1xuXHRcdHJldHVybiAhZGl2LmdldEF0dHJpYnV0ZShcImNsYXNzTmFtZVwiKTtcblx0fSk7XG5cblx0LyogZ2V0RWxlbWVudChzKUJ5KlxuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gQ2hlY2sgaWYgZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCIqXCIpIHJldHVybnMgb25seSBlbGVtZW50c1xuXHRzdXBwb3J0LmdldEVsZW1lbnRzQnlUYWdOYW1lID0gYXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XG5cdFx0ZGl2LmFwcGVuZENoaWxkKCBkb2MuY3JlYXRlQ29tbWVudChcIlwiKSApO1xuXHRcdHJldHVybiAhZGl2LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwiKlwiKS5sZW5ndGg7XG5cdH0pO1xuXG5cdC8vIFN1cHBvcnQ6IElFPDlcblx0c3VwcG9ydC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lID0gcm5hdGl2ZS50ZXN0KCBkb2MuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSApO1xuXG5cdC8vIFN1cHBvcnQ6IElFPDEwXG5cdC8vIENoZWNrIGlmIGdldEVsZW1lbnRCeUlkIHJldHVybnMgZWxlbWVudHMgYnkgbmFtZVxuXHQvLyBUaGUgYnJva2VuIGdldEVsZW1lbnRCeUlkIG1ldGhvZHMgZG9uJ3QgcGljayB1cCBwcm9ncmFtYXRpY2FsbHktc2V0IG5hbWVzLFxuXHQvLyBzbyB1c2UgYSByb3VuZGFib3V0IGdldEVsZW1lbnRzQnlOYW1lIHRlc3Rcblx0c3VwcG9ydC5nZXRCeUlkID0gYXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XG5cdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZCggZGl2ICkuaWQgPSBleHBhbmRvO1xuXHRcdHJldHVybiAhZG9jLmdldEVsZW1lbnRzQnlOYW1lIHx8ICFkb2MuZ2V0RWxlbWVudHNCeU5hbWUoIGV4cGFuZG8gKS5sZW5ndGg7XG5cdH0pO1xuXG5cdC8vIElEIGZpbmQgYW5kIGZpbHRlclxuXHRpZiAoIHN1cHBvcnQuZ2V0QnlJZCApIHtcblx0XHRFeHByLmZpbmRbXCJJRFwiXSA9IGZ1bmN0aW9uKCBpZCwgY29udGV4dCApIHtcblx0XHRcdGlmICggdHlwZW9mIGNvbnRleHQuZ2V0RWxlbWVudEJ5SWQgIT09IFwidW5kZWZpbmVkXCIgJiYgZG9jdW1lbnRJc0hUTUwgKSB7XG5cdFx0XHRcdHZhciBtID0gY29udGV4dC5nZXRFbGVtZW50QnlJZCggaWQgKTtcblx0XHRcdFx0Ly8gQ2hlY2sgcGFyZW50Tm9kZSB0byBjYXRjaCB3aGVuIEJsYWNrYmVycnkgNC42IHJldHVybnNcblx0XHRcdFx0Ly8gbm9kZXMgdGhhdCBhcmUgbm8gbG9uZ2VyIGluIHRoZSBkb2N1bWVudCAjNjk2M1xuXHRcdFx0XHRyZXR1cm4gbSAmJiBtLnBhcmVudE5vZGUgPyBbIG0gXSA6IFtdO1xuXHRcdFx0fVxuXHRcdH07XG5cdFx0RXhwci5maWx0ZXJbXCJJRFwiXSA9IGZ1bmN0aW9uKCBpZCApIHtcblx0XHRcdHZhciBhdHRySWQgPSBpZC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoXCJpZFwiKSA9PT0gYXR0cklkO1xuXHRcdFx0fTtcblx0XHR9O1xuXHR9IGVsc2Uge1xuXHRcdC8vIFN1cHBvcnQ6IElFNi83XG5cdFx0Ly8gZ2V0RWxlbWVudEJ5SWQgaXMgbm90IHJlbGlhYmxlIGFzIGEgZmluZCBzaG9ydGN1dFxuXHRcdGRlbGV0ZSBFeHByLmZpbmRbXCJJRFwiXTtcblxuXHRcdEV4cHIuZmlsdGVyW1wiSURcIl0gPSAgZnVuY3Rpb24oIGlkICkge1xuXHRcdFx0dmFyIGF0dHJJZCA9IGlkLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICk7XG5cdFx0XHRyZXR1cm4gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdHZhciBub2RlID0gdHlwZW9mIGVsZW0uZ2V0QXR0cmlidXRlTm9kZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoXCJpZFwiKTtcblx0XHRcdFx0cmV0dXJuIG5vZGUgJiYgbm9kZS52YWx1ZSA9PT0gYXR0cklkO1xuXHRcdFx0fTtcblx0XHR9O1xuXHR9XG5cblx0Ly8gVGFnXG5cdEV4cHIuZmluZFtcIlRBR1wiXSA9IHN1cHBvcnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUgP1xuXHRcdGZ1bmN0aW9uKCB0YWcsIGNvbnRleHQgKSB7XG5cdFx0XHRpZiAoIHR5cGVvZiBjb250ZXh0LmdldEVsZW1lbnRzQnlUYWdOYW1lICE9PSBcInVuZGVmaW5lZFwiICkge1xuXHRcdFx0XHRyZXR1cm4gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSggdGFnICk7XG5cblx0XHRcdC8vIERvY3VtZW50RnJhZ21lbnQgbm9kZXMgZG9uJ3QgaGF2ZSBnRUJUTlxuXHRcdFx0fSBlbHNlIGlmICggc3VwcG9ydC5xc2EgKSB7XG5cdFx0XHRcdHJldHVybiBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwoIHRhZyApO1xuXHRcdFx0fVxuXHRcdH0gOlxuXG5cdFx0ZnVuY3Rpb24oIHRhZywgY29udGV4dCApIHtcblx0XHRcdHZhciBlbGVtLFxuXHRcdFx0XHR0bXAgPSBbXSxcblx0XHRcdFx0aSA9IDAsXG5cdFx0XHRcdC8vIEJ5IGhhcHB5IGNvaW5jaWRlbmNlLCBhIChicm9rZW4pIGdFQlROIGFwcGVhcnMgb24gRG9jdW1lbnRGcmFnbWVudCBub2RlcyB0b29cblx0XHRcdFx0cmVzdWx0cyA9IGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyApO1xuXG5cdFx0XHQvLyBGaWx0ZXIgb3V0IHBvc3NpYmxlIGNvbW1lbnRzXG5cdFx0XHRpZiAoIHRhZyA9PT0gXCIqXCIgKSB7XG5cdFx0XHRcdHdoaWxlICggKGVsZW0gPSByZXN1bHRzW2krK10pICkge1xuXHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0XHRcdHRtcC5wdXNoKCBlbGVtICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIHRtcDtcblx0XHRcdH1cblx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdH07XG5cblx0Ly8gQ2xhc3Ncblx0RXhwci5maW5kW1wiQ0xBU1NcIl0gPSBzdXBwb3J0LmdldEVsZW1lbnRzQnlDbGFzc05hbWUgJiYgZnVuY3Rpb24oIGNsYXNzTmFtZSwgY29udGV4dCApIHtcblx0XHRpZiAoIGRvY3VtZW50SXNIVE1MICkge1xuXHRcdFx0cmV0dXJuIGNvbnRleHQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSggY2xhc3NOYW1lICk7XG5cdFx0fVxuXHR9O1xuXG5cdC8qIFFTQS9tYXRjaGVzU2VsZWN0b3Jcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXG5cdC8vIFFTQSBhbmQgbWF0Y2hlc1NlbGVjdG9yIHN1cHBvcnRcblxuXHQvLyBtYXRjaGVzU2VsZWN0b3IoOmFjdGl2ZSkgcmVwb3J0cyBmYWxzZSB3aGVuIHRydWUgKElFOS9PcGVyYSAxMS41KVxuXHRyYnVnZ3lNYXRjaGVzID0gW107XG5cblx0Ly8gcVNhKDpmb2N1cykgcmVwb3J0cyBmYWxzZSB3aGVuIHRydWUgKENocm9tZSAyMSlcblx0Ly8gV2UgYWxsb3cgdGhpcyBiZWNhdXNlIG9mIGEgYnVnIGluIElFOC85IHRoYXQgdGhyb3dzIGFuIGVycm9yXG5cdC8vIHdoZW5ldmVyIGBkb2N1bWVudC5hY3RpdmVFbGVtZW50YCBpcyBhY2Nlc3NlZCBvbiBhbiBpZnJhbWVcblx0Ly8gU28sIHdlIGFsbG93IDpmb2N1cyB0byBwYXNzIHRocm91Z2ggUVNBIGFsbCB0aGUgdGltZSB0byBhdm9pZCB0aGUgSUUgZXJyb3Jcblx0Ly8gU2VlIGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEzMzc4XG5cdHJidWdneVFTQSA9IFtdO1xuXG5cdGlmICggKHN1cHBvcnQucXNhID0gcm5hdGl2ZS50ZXN0KCBkb2MucXVlcnlTZWxlY3RvckFsbCApKSApIHtcblx0XHQvLyBCdWlsZCBRU0EgcmVnZXhcblx0XHQvLyBSZWdleCBzdHJhdGVneSBhZG9wdGVkIGZyb20gRGllZ28gUGVyaW5pXG5cdFx0YXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XG5cdFx0XHQvLyBTZWxlY3QgaXMgc2V0IHRvIGVtcHR5IHN0cmluZyBvbiBwdXJwb3NlXG5cdFx0XHQvLyBUaGlzIGlzIHRvIHRlc3QgSUUncyB0cmVhdG1lbnQgb2Ygbm90IGV4cGxpY2l0bHlcblx0XHRcdC8vIHNldHRpbmcgYSBib29sZWFuIGNvbnRlbnQgYXR0cmlidXRlLFxuXHRcdFx0Ly8gc2luY2UgaXRzIHByZXNlbmNlIHNob3VsZCBiZSBlbm91Z2hcblx0XHRcdC8vIGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEyMzU5XG5cdFx0XHRkb2NFbGVtLmFwcGVuZENoaWxkKCBkaXYgKS5pbm5lckhUTUwgPSBcIjxhIGlkPSdcIiArIGV4cGFuZG8gKyBcIic+PC9hPlwiICtcblx0XHRcdFx0XCI8c2VsZWN0IGlkPSdcIiArIGV4cGFuZG8gKyBcIi1cXGZdJyBtc2FsbG93Y2FwdHVyZT0nJz5cIiArXG5cdFx0XHRcdFwiPG9wdGlvbiBzZWxlY3RlZD0nJz48L29wdGlvbj48L3NlbGVjdD5cIjtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU4LCBPcGVyYSAxMS0xMi4xNlxuXHRcdFx0Ly8gTm90aGluZyBzaG91bGQgYmUgc2VsZWN0ZWQgd2hlbiBlbXB0eSBzdHJpbmdzIGZvbGxvdyBePSBvciAkPSBvciAqPVxuXHRcdFx0Ly8gVGhlIHRlc3QgYXR0cmlidXRlIG11c3QgYmUgdW5rbm93biBpbiBPcGVyYSBidXQgXCJzYWZlXCIgZm9yIFdpblJUXG5cdFx0XHQvLyBodHRwOi8vbXNkbi5taWNyb3NvZnQuY29tL2VuLXVzL2xpYnJhcnkvaWUvaGg0NjUzODguYXNweCNhdHRyaWJ1dGVfc2VjdGlvblxuXHRcdFx0aWYgKCBkaXYucXVlcnlTZWxlY3RvckFsbChcIlttc2FsbG93Y2FwdHVyZV49JyddXCIpLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwiWypeJF09XCIgKyB3aGl0ZXNwYWNlICsgXCIqKD86Jyd8XFxcIlxcXCIpXCIgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3VwcG9ydDogSUU4XG5cdFx0XHQvLyBCb29sZWFuIGF0dHJpYnV0ZXMgYW5kIFwidmFsdWVcIiBhcmUgbm90IHRyZWF0ZWQgY29ycmVjdGx5XG5cdFx0XHRpZiAoICFkaXYucXVlcnlTZWxlY3RvckFsbChcIltzZWxlY3RlZF1cIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCJcXFxcW1wiICsgd2hpdGVzcGFjZSArIFwiKig/OnZhbHVlfFwiICsgYm9vbGVhbnMgKyBcIilcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBDaHJvbWU8MjksIEFuZHJvaWQ8NC4yKywgU2FmYXJpPDcuMCssIGlPUzw3LjArLCBQaGFudG9tSlM8MS45LjcrXG5cdFx0XHRpZiAoICFkaXYucXVlcnlTZWxlY3RvckFsbCggXCJbaWR+PVwiICsgZXhwYW5kbyArIFwiLV1cIiApLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goXCJ+PVwiKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gV2Via2l0L09wZXJhIC0gOmNoZWNrZWQgc2hvdWxkIHJldHVybiBzZWxlY3RlZCBvcHRpb24gZWxlbWVudHNcblx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvUkVDLWNzczMtc2VsZWN0b3JzLTIwMTEwOTI5LyNjaGVja2VkXG5cdFx0XHQvLyBJRTggdGhyb3dzIGVycm9yIGhlcmUgYW5kIHdpbGwgbm90IHNlZSBsYXRlciB0ZXN0c1xuXHRcdFx0aWYgKCAhZGl2LnF1ZXJ5U2VsZWN0b3JBbGwoXCI6Y2hlY2tlZFwiKS5sZW5ndGggKSB7XG5cdFx0XHRcdHJidWdneVFTQS5wdXNoKFwiOmNoZWNrZWRcIik7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA4KywgaU9TIDgrXG5cdFx0XHQvLyBodHRwczovL2J1Z3Mud2Via2l0Lm9yZy9zaG93X2J1Zy5jZ2k/aWQ9MTM2ODUxXG5cdFx0XHQvLyBJbi1wYWdlIGBzZWxlY3RvciNpZCBzaWJpbmctY29tYmluYXRvciBzZWxlY3RvcmAgZmFpbHNcblx0XHRcdGlmICggIWRpdi5xdWVyeVNlbGVjdG9yQWxsKCBcImEjXCIgKyBleHBhbmRvICsgXCIrKlwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaChcIi4jLitbK35dXCIpO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0YXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XG5cdFx0XHQvLyBTdXBwb3J0OiBXaW5kb3dzIDggTmF0aXZlIEFwcHNcblx0XHRcdC8vIFRoZSB0eXBlIGFuZCBuYW1lIGF0dHJpYnV0ZXMgYXJlIHJlc3RyaWN0ZWQgZHVyaW5nIC5pbm5lckhUTUwgYXNzaWdubWVudFxuXHRcdFx0dmFyIGlucHV0ID0gZG9jLmNyZWF0ZUVsZW1lbnQoXCJpbnB1dFwiKTtcblx0XHRcdGlucHV0LnNldEF0dHJpYnV0ZSggXCJ0eXBlXCIsIFwiaGlkZGVuXCIgKTtcblx0XHRcdGRpdi5hcHBlbmRDaGlsZCggaW5wdXQgKS5zZXRBdHRyaWJ1dGUoIFwibmFtZVwiLCBcIkRcIiApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRThcblx0XHRcdC8vIEVuZm9yY2UgY2FzZS1zZW5zaXRpdml0eSBvZiBuYW1lIGF0dHJpYnV0ZVxuXHRcdFx0aWYgKCBkaXYucXVlcnlTZWxlY3RvckFsbChcIltuYW1lPWRdXCIpLmxlbmd0aCApIHtcblx0XHRcdFx0cmJ1Z2d5UVNBLnB1c2goIFwibmFtZVwiICsgd2hpdGVzcGFjZSArIFwiKlsqXiR8IX5dPz1cIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBGRiAzLjUgLSA6ZW5hYmxlZC86ZGlzYWJsZWQgYW5kIGhpZGRlbiBlbGVtZW50cyAoaGlkZGVuIGVsZW1lbnRzIGFyZSBzdGlsbCBlbmFibGVkKVxuXHRcdFx0Ly8gSUU4IHRocm93cyBlcnJvciBoZXJlIGFuZCB3aWxsIG5vdCBzZWUgbGF0ZXIgdGVzdHNcblx0XHRcdGlmICggIWRpdi5xdWVyeVNlbGVjdG9yQWxsKFwiOmVuYWJsZWRcIikubGVuZ3RoICkge1xuXHRcdFx0XHRyYnVnZ3lRU0EucHVzaCggXCI6ZW5hYmxlZFwiLCBcIjpkaXNhYmxlZFwiICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE9wZXJhIDEwLTExIGRvZXMgbm90IHRocm93IG9uIHBvc3QtY29tbWEgaW52YWxpZCBwc2V1ZG9zXG5cdFx0XHRkaXYucXVlcnlTZWxlY3RvckFsbChcIiosOnhcIik7XG5cdFx0XHRyYnVnZ3lRU0EucHVzaChcIiwuKjpcIik7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoIChzdXBwb3J0Lm1hdGNoZXNTZWxlY3RvciA9IHJuYXRpdmUudGVzdCggKG1hdGNoZXMgPSBkb2NFbGVtLm1hdGNoZXMgfHxcblx0XHRkb2NFbGVtLndlYmtpdE1hdGNoZXNTZWxlY3RvciB8fFxuXHRcdGRvY0VsZW0ubW96TWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jRWxlbS5vTWF0Y2hlc1NlbGVjdG9yIHx8XG5cdFx0ZG9jRWxlbS5tc01hdGNoZXNTZWxlY3RvcikgKSkgKSB7XG5cblx0XHRhc3NlcnQoZnVuY3Rpb24oIGRpdiApIHtcblx0XHRcdC8vIENoZWNrIHRvIHNlZSBpZiBpdCdzIHBvc3NpYmxlIHRvIGRvIG1hdGNoZXNTZWxlY3RvclxuXHRcdFx0Ly8gb24gYSBkaXNjb25uZWN0ZWQgbm9kZSAoSUUgOSlcblx0XHRcdHN1cHBvcnQuZGlzY29ubmVjdGVkTWF0Y2ggPSBtYXRjaGVzLmNhbGwoIGRpdiwgXCJkaXZcIiApO1xuXG5cdFx0XHQvLyBUaGlzIHNob3VsZCBmYWlsIHdpdGggYW4gZXhjZXB0aW9uXG5cdFx0XHQvLyBHZWNrbyBkb2VzIG5vdCBlcnJvciwgcmV0dXJucyBmYWxzZSBpbnN0ZWFkXG5cdFx0XHRtYXRjaGVzLmNhbGwoIGRpdiwgXCJbcyE9JyddOnhcIiApO1xuXHRcdFx0cmJ1Z2d5TWF0Y2hlcy5wdXNoKCBcIiE9XCIsIHBzZXVkb3MgKTtcblx0XHR9KTtcblx0fVxuXG5cdHJidWdneVFTQSA9IHJidWdneVFTQS5sZW5ndGggJiYgbmV3IFJlZ0V4cCggcmJ1Z2d5UVNBLmpvaW4oXCJ8XCIpICk7XG5cdHJidWdneU1hdGNoZXMgPSByYnVnZ3lNYXRjaGVzLmxlbmd0aCAmJiBuZXcgUmVnRXhwKCByYnVnZ3lNYXRjaGVzLmpvaW4oXCJ8XCIpICk7XG5cblx0LyogQ29udGFpbnNcblx0LS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLSAqL1xuXHRoYXNDb21wYXJlID0gcm5hdGl2ZS50ZXN0KCBkb2NFbGVtLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uICk7XG5cblx0Ly8gRWxlbWVudCBjb250YWlucyBhbm90aGVyXG5cdC8vIFB1cnBvc2VmdWxseSBkb2VzIG5vdCBpbXBsZW1lbnQgaW5jbHVzaXZlIGRlc2NlbmRlbnRcblx0Ly8gQXMgaW4sIGFuIGVsZW1lbnQgZG9lcyBub3QgY29udGFpbiBpdHNlbGZcblx0Y29udGFpbnMgPSBoYXNDb21wYXJlIHx8IHJuYXRpdmUudGVzdCggZG9jRWxlbS5jb250YWlucyApID9cblx0XHRmdW5jdGlvbiggYSwgYiApIHtcblx0XHRcdHZhciBhZG93biA9IGEubm9kZVR5cGUgPT09IDkgPyBhLmRvY3VtZW50RWxlbWVudCA6IGEsXG5cdFx0XHRcdGJ1cCA9IGIgJiYgYi5wYXJlbnROb2RlO1xuXHRcdFx0cmV0dXJuIGEgPT09IGJ1cCB8fCAhISggYnVwICYmIGJ1cC5ub2RlVHlwZSA9PT0gMSAmJiAoXG5cdFx0XHRcdGFkb3duLmNvbnRhaW5zID9cblx0XHRcdFx0XHRhZG93bi5jb250YWlucyggYnVwICkgOlxuXHRcdFx0XHRcdGEuY29tcGFyZURvY3VtZW50UG9zaXRpb24gJiYgYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYnVwICkgJiAxNlxuXHRcdFx0KSk7XG5cdFx0fSA6XG5cdFx0ZnVuY3Rpb24oIGEsIGIgKSB7XG5cdFx0XHRpZiAoIGIgKSB7XG5cdFx0XHRcdHdoaWxlICggKGIgPSBiLnBhcmVudE5vZGUpICkge1xuXHRcdFx0XHRcdGlmICggYiA9PT0gYSApIHtcblx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH07XG5cblx0LyogU29ydGluZ1xuXHQtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tICovXG5cblx0Ly8gRG9jdW1lbnQgb3JkZXIgc29ydGluZ1xuXHRzb3J0T3JkZXIgPSBoYXNDb21wYXJlID9cblx0ZnVuY3Rpb24oIGEsIGIgKSB7XG5cblx0XHQvLyBGbGFnIGZvciBkdXBsaWNhdGUgcmVtb3ZhbFxuXHRcdGlmICggYSA9PT0gYiApIHtcblx0XHRcdGhhc0R1cGxpY2F0ZSA9IHRydWU7XG5cdFx0XHRyZXR1cm4gMDtcblx0XHR9XG5cblx0XHQvLyBTb3J0IG9uIG1ldGhvZCBleGlzdGVuY2UgaWYgb25seSBvbmUgaW5wdXQgaGFzIGNvbXBhcmVEb2N1bWVudFBvc2l0aW9uXG5cdFx0dmFyIGNvbXBhcmUgPSAhYS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiAtICFiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uO1xuXHRcdGlmICggY29tcGFyZSApIHtcblx0XHRcdHJldHVybiBjb21wYXJlO1xuXHRcdH1cblxuXHRcdC8vIENhbGN1bGF0ZSBwb3NpdGlvbiBpZiBib3RoIGlucHV0cyBiZWxvbmcgdG8gdGhlIHNhbWUgZG9jdW1lbnRcblx0XHRjb21wYXJlID0gKCBhLm93bmVyRG9jdW1lbnQgfHwgYSApID09PSAoIGIub3duZXJEb2N1bWVudCB8fCBiICkgP1xuXHRcdFx0YS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggYiApIDpcblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIHdlIGtub3cgdGhleSBhcmUgZGlzY29ubmVjdGVkXG5cdFx0XHQxO1xuXG5cdFx0Ly8gRGlzY29ubmVjdGVkIG5vZGVzXG5cdFx0aWYgKCBjb21wYXJlICYgMSB8fFxuXHRcdFx0KCFzdXBwb3J0LnNvcnREZXRhY2hlZCAmJiBiLmNvbXBhcmVEb2N1bWVudFBvc2l0aW9uKCBhICkgPT09IGNvbXBhcmUpICkge1xuXG5cdFx0XHQvLyBDaG9vc2UgdGhlIGZpcnN0IGVsZW1lbnQgdGhhdCBpcyByZWxhdGVkIHRvIG91ciBwcmVmZXJyZWQgZG9jdW1lbnRcblx0XHRcdGlmICggYSA9PT0gZG9jIHx8IGEub3duZXJEb2N1bWVudCA9PT0gcHJlZmVycmVkRG9jICYmIGNvbnRhaW5zKHByZWZlcnJlZERvYywgYSkgKSB7XG5cdFx0XHRcdHJldHVybiAtMTtcblx0XHRcdH1cblx0XHRcdGlmICggYiA9PT0gZG9jIHx8IGIub3duZXJEb2N1bWVudCA9PT0gcHJlZmVycmVkRG9jICYmIGNvbnRhaW5zKHByZWZlcnJlZERvYywgYikgKSB7XG5cdFx0XHRcdHJldHVybiAxO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYWludGFpbiBvcmlnaW5hbCBvcmRlclxuXHRcdFx0cmV0dXJuIHNvcnRJbnB1dCA/XG5cdFx0XHRcdCggaW5kZXhPZiggc29ydElucHV0LCBhICkgLSBpbmRleE9mKCBzb3J0SW5wdXQsIGIgKSApIDpcblx0XHRcdFx0MDtcblx0XHR9XG5cblx0XHRyZXR1cm4gY29tcGFyZSAmIDQgPyAtMSA6IDE7XG5cdH0gOlxuXHRmdW5jdGlvbiggYSwgYiApIHtcblx0XHQvLyBFeGl0IGVhcmx5IGlmIHRoZSBub2RlcyBhcmUgaWRlbnRpY2FsXG5cdFx0aWYgKCBhID09PSBiICkge1xuXHRcdFx0aGFzRHVwbGljYXRlID0gdHJ1ZTtcblx0XHRcdHJldHVybiAwO1xuXHRcdH1cblxuXHRcdHZhciBjdXIsXG5cdFx0XHRpID0gMCxcblx0XHRcdGF1cCA9IGEucGFyZW50Tm9kZSxcblx0XHRcdGJ1cCA9IGIucGFyZW50Tm9kZSxcblx0XHRcdGFwID0gWyBhIF0sXG5cdFx0XHRicCA9IFsgYiBdO1xuXG5cdFx0Ly8gUGFyZW50bGVzcyBub2RlcyBhcmUgZWl0aGVyIGRvY3VtZW50cyBvciBkaXNjb25uZWN0ZWRcblx0XHRpZiAoICFhdXAgfHwgIWJ1cCApIHtcblx0XHRcdHJldHVybiBhID09PSBkb2MgPyAtMSA6XG5cdFx0XHRcdGIgPT09IGRvYyA/IDEgOlxuXHRcdFx0XHRhdXAgPyAtMSA6XG5cdFx0XHRcdGJ1cCA/IDEgOlxuXHRcdFx0XHRzb3J0SW5wdXQgP1xuXHRcdFx0XHQoIGluZGV4T2YoIHNvcnRJbnB1dCwgYSApIC0gaW5kZXhPZiggc29ydElucHV0LCBiICkgKSA6XG5cdFx0XHRcdDA7XG5cblx0XHQvLyBJZiB0aGUgbm9kZXMgYXJlIHNpYmxpbmdzLCB3ZSBjYW4gZG8gYSBxdWljayBjaGVja1xuXHRcdH0gZWxzZSBpZiAoIGF1cCA9PT0gYnVwICkge1xuXHRcdFx0cmV0dXJuIHNpYmxpbmdDaGVjayggYSwgYiApO1xuXHRcdH1cblxuXHRcdC8vIE90aGVyd2lzZSB3ZSBuZWVkIGZ1bGwgbGlzdHMgb2YgdGhlaXIgYW5jZXN0b3JzIGZvciBjb21wYXJpc29uXG5cdFx0Y3VyID0gYTtcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIucGFyZW50Tm9kZSkgKSB7XG5cdFx0XHRhcC51bnNoaWZ0KCBjdXIgKTtcblx0XHR9XG5cdFx0Y3VyID0gYjtcblx0XHR3aGlsZSAoIChjdXIgPSBjdXIucGFyZW50Tm9kZSkgKSB7XG5cdFx0XHRicC51bnNoaWZ0KCBjdXIgKTtcblx0XHR9XG5cblx0XHQvLyBXYWxrIGRvd24gdGhlIHRyZWUgbG9va2luZyBmb3IgYSBkaXNjcmVwYW5jeVxuXHRcdHdoaWxlICggYXBbaV0gPT09IGJwW2ldICkge1xuXHRcdFx0aSsrO1xuXHRcdH1cblxuXHRcdHJldHVybiBpID9cblx0XHRcdC8vIERvIGEgc2libGluZyBjaGVjayBpZiB0aGUgbm9kZXMgaGF2ZSBhIGNvbW1vbiBhbmNlc3RvclxuXHRcdFx0c2libGluZ0NoZWNrKCBhcFtpXSwgYnBbaV0gKSA6XG5cblx0XHRcdC8vIE90aGVyd2lzZSBub2RlcyBpbiBvdXIgZG9jdW1lbnQgc29ydCBmaXJzdFxuXHRcdFx0YXBbaV0gPT09IHByZWZlcnJlZERvYyA/IC0xIDpcblx0XHRcdGJwW2ldID09PSBwcmVmZXJyZWREb2MgPyAxIDpcblx0XHRcdDA7XG5cdH07XG5cblx0cmV0dXJuIGRvYztcbn07XG5cblNpenpsZS5tYXRjaGVzID0gZnVuY3Rpb24oIGV4cHIsIGVsZW1lbnRzICkge1xuXHRyZXR1cm4gU2l6emxlKCBleHByLCBudWxsLCBudWxsLCBlbGVtZW50cyApO1xufTtcblxuU2l6emxlLm1hdGNoZXNTZWxlY3RvciA9IGZ1bmN0aW9uKCBlbGVtLCBleHByICkge1xuXHQvLyBTZXQgZG9jdW1lbnQgdmFycyBpZiBuZWVkZWRcblx0aWYgKCAoIGVsZW0ub3duZXJEb2N1bWVudCB8fCBlbGVtICkgIT09IGRvY3VtZW50ICkge1xuXHRcdHNldERvY3VtZW50KCBlbGVtICk7XG5cdH1cblxuXHQvLyBNYWtlIHN1cmUgdGhhdCBhdHRyaWJ1dGUgc2VsZWN0b3JzIGFyZSBxdW90ZWRcblx0ZXhwciA9IGV4cHIucmVwbGFjZSggcmF0dHJpYnV0ZVF1b3RlcywgXCI9JyQxJ11cIiApO1xuXG5cdGlmICggc3VwcG9ydC5tYXRjaGVzU2VsZWN0b3IgJiYgZG9jdW1lbnRJc0hUTUwgJiZcblx0XHQoICFyYnVnZ3lNYXRjaGVzIHx8ICFyYnVnZ3lNYXRjaGVzLnRlc3QoIGV4cHIgKSApICYmXG5cdFx0KCAhcmJ1Z2d5UVNBICAgICB8fCAhcmJ1Z2d5UVNBLnRlc3QoIGV4cHIgKSApICkge1xuXG5cdFx0dHJ5IHtcblx0XHRcdHZhciByZXQgPSBtYXRjaGVzLmNhbGwoIGVsZW0sIGV4cHIgKTtcblxuXHRcdFx0Ly8gSUUgOSdzIG1hdGNoZXNTZWxlY3RvciByZXR1cm5zIGZhbHNlIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuXHRcdFx0aWYgKCByZXQgfHwgc3VwcG9ydC5kaXNjb25uZWN0ZWRNYXRjaCB8fFxuXHRcdFx0XHRcdC8vIEFzIHdlbGwsIGRpc2Nvbm5lY3RlZCBub2RlcyBhcmUgc2FpZCB0byBiZSBpbiBhIGRvY3VtZW50XG5cdFx0XHRcdFx0Ly8gZnJhZ21lbnQgaW4gSUUgOVxuXHRcdFx0XHRcdGVsZW0uZG9jdW1lbnQgJiYgZWxlbS5kb2N1bWVudC5ub2RlVHlwZSAhPT0gMTEgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cdFx0fSBjYXRjaCAoZSkge31cblx0fVxuXG5cdHJldHVybiBTaXp6bGUoIGV4cHIsIGRvY3VtZW50LCBudWxsLCBbIGVsZW0gXSApLmxlbmd0aCA+IDA7XG59O1xuXG5TaXp6bGUuY29udGFpbnMgPSBmdW5jdGlvbiggY29udGV4dCwgZWxlbSApIHtcblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdGlmICggKCBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCApICE9PSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggY29udGV4dCApO1xuXHR9XG5cdHJldHVybiBjb250YWlucyggY29udGV4dCwgZWxlbSApO1xufTtcblxuU2l6emxlLmF0dHIgPSBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0Ly8gU2V0IGRvY3VtZW50IHZhcnMgaWYgbmVlZGVkXG5cdGlmICggKCBlbGVtLm93bmVyRG9jdW1lbnQgfHwgZWxlbSApICE9PSBkb2N1bWVudCApIHtcblx0XHRzZXREb2N1bWVudCggZWxlbSApO1xuXHR9XG5cblx0dmFyIGZuID0gRXhwci5hdHRySGFuZGxlWyBuYW1lLnRvTG93ZXJDYXNlKCkgXSxcblx0XHQvLyBEb24ndCBnZXQgZm9vbGVkIGJ5IE9iamVjdC5wcm90b3R5cGUgcHJvcGVydGllcyAoalF1ZXJ5ICMxMzgwNylcblx0XHR2YWwgPSBmbiAmJiBoYXNPd24uY2FsbCggRXhwci5hdHRySGFuZGxlLCBuYW1lLnRvTG93ZXJDYXNlKCkgKSA/XG5cdFx0XHRmbiggZWxlbSwgbmFtZSwgIWRvY3VtZW50SXNIVE1MICkgOlxuXHRcdFx0dW5kZWZpbmVkO1xuXG5cdHJldHVybiB2YWwgIT09IHVuZGVmaW5lZCA/XG5cdFx0dmFsIDpcblx0XHRzdXBwb3J0LmF0dHJpYnV0ZXMgfHwgIWRvY3VtZW50SXNIVE1MID9cblx0XHRcdGVsZW0uZ2V0QXR0cmlidXRlKCBuYW1lICkgOlxuXHRcdFx0KHZhbCA9IGVsZW0uZ2V0QXR0cmlidXRlTm9kZShuYW1lKSkgJiYgdmFsLnNwZWNpZmllZCA/XG5cdFx0XHRcdHZhbC52YWx1ZSA6XG5cdFx0XHRcdG51bGw7XG59O1xuXG5TaXp6bGUuZXJyb3IgPSBmdW5jdGlvbiggbXNnICkge1xuXHR0aHJvdyBuZXcgRXJyb3IoIFwiU3ludGF4IGVycm9yLCB1bnJlY29nbml6ZWQgZXhwcmVzc2lvbjogXCIgKyBtc2cgKTtcbn07XG5cbi8qKlxuICogRG9jdW1lbnQgc29ydGluZyBhbmQgcmVtb3ZpbmcgZHVwbGljYXRlc1xuICogQHBhcmFtIHtBcnJheUxpa2V9IHJlc3VsdHNcbiAqL1xuU2l6emxlLnVuaXF1ZVNvcnQgPSBmdW5jdGlvbiggcmVzdWx0cyApIHtcblx0dmFyIGVsZW0sXG5cdFx0ZHVwbGljYXRlcyA9IFtdLFxuXHRcdGogPSAwLFxuXHRcdGkgPSAwO1xuXG5cdC8vIFVubGVzcyB3ZSAqa25vdyogd2UgY2FuIGRldGVjdCBkdXBsaWNhdGVzLCBhc3N1bWUgdGhlaXIgcHJlc2VuY2Vcblx0aGFzRHVwbGljYXRlID0gIXN1cHBvcnQuZGV0ZWN0RHVwbGljYXRlcztcblx0c29ydElucHV0ID0gIXN1cHBvcnQuc29ydFN0YWJsZSAmJiByZXN1bHRzLnNsaWNlKCAwICk7XG5cdHJlc3VsdHMuc29ydCggc29ydE9yZGVyICk7XG5cblx0aWYgKCBoYXNEdXBsaWNhdGUgKSB7XG5cdFx0d2hpbGUgKCAoZWxlbSA9IHJlc3VsdHNbaSsrXSkgKSB7XG5cdFx0XHRpZiAoIGVsZW0gPT09IHJlc3VsdHNbIGkgXSApIHtcblx0XHRcdFx0aiA9IGR1cGxpY2F0ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdH1cblx0XHR3aGlsZSAoIGotLSApIHtcblx0XHRcdHJlc3VsdHMuc3BsaWNlKCBkdXBsaWNhdGVzWyBqIF0sIDEgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBDbGVhciBpbnB1dCBhZnRlciBzb3J0aW5nIHRvIHJlbGVhc2Ugb2JqZWN0c1xuXHQvLyBTZWUgaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9zaXp6bGUvcHVsbC8yMjVcblx0c29ydElucHV0ID0gbnVsbDtcblxuXHRyZXR1cm4gcmVzdWx0cztcbn07XG5cbi8qKlxuICogVXRpbGl0eSBmdW5jdGlvbiBmb3IgcmV0cmlldmluZyB0aGUgdGV4dCB2YWx1ZSBvZiBhbiBhcnJheSBvZiBET00gbm9kZXNcbiAqIEBwYXJhbSB7QXJyYXl8RWxlbWVudH0gZWxlbVxuICovXG5nZXRUZXh0ID0gU2l6emxlLmdldFRleHQgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0dmFyIG5vZGUsXG5cdFx0cmV0ID0gXCJcIixcblx0XHRpID0gMCxcblx0XHRub2RlVHlwZSA9IGVsZW0ubm9kZVR5cGU7XG5cblx0aWYgKCAhbm9kZVR5cGUgKSB7XG5cdFx0Ly8gSWYgbm8gbm9kZVR5cGUsIHRoaXMgaXMgZXhwZWN0ZWQgdG8gYmUgYW4gYXJyYXlcblx0XHR3aGlsZSAoIChub2RlID0gZWxlbVtpKytdKSApIHtcblx0XHRcdC8vIERvIG5vdCB0cmF2ZXJzZSBjb21tZW50IG5vZGVzXG5cdFx0XHRyZXQgKz0gZ2V0VGV4dCggbm9kZSApO1xuXHRcdH1cblx0fSBlbHNlIGlmICggbm9kZVR5cGUgPT09IDEgfHwgbm9kZVR5cGUgPT09IDkgfHwgbm9kZVR5cGUgPT09IDExICkge1xuXHRcdC8vIFVzZSB0ZXh0Q29udGVudCBmb3IgZWxlbWVudHNcblx0XHQvLyBpbm5lclRleHQgdXNhZ2UgcmVtb3ZlZCBmb3IgY29uc2lzdGVuY3kgb2YgbmV3IGxpbmVzIChqUXVlcnkgIzExMTUzKVxuXHRcdGlmICggdHlwZW9mIGVsZW0udGV4dENvbnRlbnQgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS50ZXh0Q29udGVudDtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gVHJhdmVyc2UgaXRzIGNoaWxkcmVuXG5cdFx0XHRmb3IgKCBlbGVtID0gZWxlbS5maXJzdENoaWxkOyBlbGVtOyBlbGVtID0gZWxlbS5uZXh0U2libGluZyApIHtcblx0XHRcdFx0cmV0ICs9IGdldFRleHQoIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9XG5cdH0gZWxzZSBpZiAoIG5vZGVUeXBlID09PSAzIHx8IG5vZGVUeXBlID09PSA0ICkge1xuXHRcdHJldHVybiBlbGVtLm5vZGVWYWx1ZTtcblx0fVxuXHQvLyBEbyBub3QgaW5jbHVkZSBjb21tZW50IG9yIHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb24gbm9kZXNcblxuXHRyZXR1cm4gcmV0O1xufTtcblxuRXhwciA9IFNpenpsZS5zZWxlY3RvcnMgPSB7XG5cblx0Ly8gQ2FuIGJlIGFkanVzdGVkIGJ5IHRoZSB1c2VyXG5cdGNhY2hlTGVuZ3RoOiA1MCxcblxuXHRjcmVhdGVQc2V1ZG86IG1hcmtGdW5jdGlvbixcblxuXHRtYXRjaDogbWF0Y2hFeHByLFxuXG5cdGF0dHJIYW5kbGU6IHt9LFxuXG5cdGZpbmQ6IHt9LFxuXG5cdHJlbGF0aXZlOiB7XG5cdFx0XCI+XCI6IHsgZGlyOiBcInBhcmVudE5vZGVcIiwgZmlyc3Q6IHRydWUgfSxcblx0XHRcIiBcIjogeyBkaXI6IFwicGFyZW50Tm9kZVwiIH0sXG5cdFx0XCIrXCI6IHsgZGlyOiBcInByZXZpb3VzU2libGluZ1wiLCBmaXJzdDogdHJ1ZSB9LFxuXHRcdFwiflwiOiB7IGRpcjogXCJwcmV2aW91c1NpYmxpbmdcIiB9XG5cdH0sXG5cblx0cHJlRmlsdGVyOiB7XG5cdFx0XCJBVFRSXCI6IGZ1bmN0aW9uKCBtYXRjaCApIHtcblx0XHRcdG1hdGNoWzFdID0gbWF0Y2hbMV0ucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblxuXHRcdFx0Ly8gTW92ZSB0aGUgZ2l2ZW4gdmFsdWUgdG8gbWF0Y2hbM10gd2hldGhlciBxdW90ZWQgb3IgdW5xdW90ZWRcblx0XHRcdG1hdGNoWzNdID0gKCBtYXRjaFszXSB8fCBtYXRjaFs0XSB8fCBtYXRjaFs1XSB8fCBcIlwiICkucmVwbGFjZSggcnVuZXNjYXBlLCBmdW5lc2NhcGUgKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsyXSA9PT0gXCJ+PVwiICkge1xuXHRcdFx0XHRtYXRjaFszXSA9IFwiIFwiICsgbWF0Y2hbM10gKyBcIiBcIjtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCA0ICk7XG5cdFx0fSxcblxuXHRcdFwiQ0hJTERcIjogZnVuY3Rpb24oIG1hdGNoICkge1xuXHRcdFx0LyogbWF0Y2hlcyBmcm9tIG1hdGNoRXhwcltcIkNISUxEXCJdXG5cdFx0XHRcdDEgdHlwZSAob25seXxudGh8Li4uKVxuXHRcdFx0XHQyIHdoYXQgKGNoaWxkfG9mLXR5cGUpXG5cdFx0XHRcdDMgYXJndW1lbnQgKGV2ZW58b2RkfFxcZCp8XFxkKm4oWystXVxcZCspP3wuLi4pXG5cdFx0XHRcdDQgeG4tY29tcG9uZW50IG9mIHhuK3kgYXJndW1lbnQgKFsrLV0/XFxkKm58KVxuXHRcdFx0XHQ1IHNpZ24gb2YgeG4tY29tcG9uZW50XG5cdFx0XHRcdDYgeCBvZiB4bi1jb21wb25lbnRcblx0XHRcdFx0NyBzaWduIG9mIHktY29tcG9uZW50XG5cdFx0XHRcdDggeSBvZiB5LWNvbXBvbmVudFxuXHRcdFx0Ki9cblx0XHRcdG1hdGNoWzFdID0gbWF0Y2hbMV0udG9Mb3dlckNhc2UoKTtcblxuXHRcdFx0aWYgKCBtYXRjaFsxXS5zbGljZSggMCwgMyApID09PSBcIm50aFwiICkge1xuXHRcdFx0XHQvLyBudGgtKiByZXF1aXJlcyBhcmd1bWVudFxuXHRcdFx0XHRpZiAoICFtYXRjaFszXSApIHtcblx0XHRcdFx0XHRTaXp6bGUuZXJyb3IoIG1hdGNoWzBdICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBudW1lcmljIHggYW5kIHkgcGFyYW1ldGVycyBmb3IgRXhwci5maWx0ZXIuQ0hJTERcblx0XHRcdFx0Ly8gcmVtZW1iZXIgdGhhdCBmYWxzZS90cnVlIGNhc3QgcmVzcGVjdGl2ZWx5IHRvIDAvMVxuXHRcdFx0XHRtYXRjaFs0XSA9ICsoIG1hdGNoWzRdID8gbWF0Y2hbNV0gKyAobWF0Y2hbNl0gfHwgMSkgOiAyICogKCBtYXRjaFszXSA9PT0gXCJldmVuXCIgfHwgbWF0Y2hbM10gPT09IFwib2RkXCIgKSApO1xuXHRcdFx0XHRtYXRjaFs1XSA9ICsoICggbWF0Y2hbN10gKyBtYXRjaFs4XSApIHx8IG1hdGNoWzNdID09PSBcIm9kZFwiICk7XG5cblx0XHRcdC8vIG90aGVyIHR5cGVzIHByb2hpYml0IGFyZ3VtZW50c1xuXHRcdFx0fSBlbHNlIGlmICggbWF0Y2hbM10gKSB7XG5cdFx0XHRcdFNpenpsZS5lcnJvciggbWF0Y2hbMF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIG1hdGNoO1xuXHRcdH0sXG5cblx0XHRcIlBTRVVET1wiOiBmdW5jdGlvbiggbWF0Y2ggKSB7XG5cdFx0XHR2YXIgZXhjZXNzLFxuXHRcdFx0XHR1bnF1b3RlZCA9ICFtYXRjaFs2XSAmJiBtYXRjaFsyXTtcblxuXHRcdFx0aWYgKCBtYXRjaEV4cHJbXCJDSElMRFwiXS50ZXN0KCBtYXRjaFswXSApICkge1xuXHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWNjZXB0IHF1b3RlZCBhcmd1bWVudHMgYXMtaXNcblx0XHRcdGlmICggbWF0Y2hbM10gKSB7XG5cdFx0XHRcdG1hdGNoWzJdID0gbWF0Y2hbNF0gfHwgbWF0Y2hbNV0gfHwgXCJcIjtcblxuXHRcdFx0Ly8gU3RyaXAgZXhjZXNzIGNoYXJhY3RlcnMgZnJvbSB1bnF1b3RlZCBhcmd1bWVudHNcblx0XHRcdH0gZWxzZSBpZiAoIHVucXVvdGVkICYmIHJwc2V1ZG8udGVzdCggdW5xdW90ZWQgKSAmJlxuXHRcdFx0XHQvLyBHZXQgZXhjZXNzIGZyb20gdG9rZW5pemUgKHJlY3Vyc2l2ZWx5KVxuXHRcdFx0XHQoZXhjZXNzID0gdG9rZW5pemUoIHVucXVvdGVkLCB0cnVlICkpICYmXG5cdFx0XHRcdC8vIGFkdmFuY2UgdG8gdGhlIG5leHQgY2xvc2luZyBwYXJlbnRoZXNpc1xuXHRcdFx0XHQoZXhjZXNzID0gdW5xdW90ZWQuaW5kZXhPZiggXCIpXCIsIHVucXVvdGVkLmxlbmd0aCAtIGV4Y2VzcyApIC0gdW5xdW90ZWQubGVuZ3RoKSApIHtcblxuXHRcdFx0XHQvLyBleGNlc3MgaXMgYSBuZWdhdGl2ZSBpbmRleFxuXHRcdFx0XHRtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKCAwLCBleGNlc3MgKTtcblx0XHRcdFx0bWF0Y2hbMl0gPSB1bnF1b3RlZC5zbGljZSggMCwgZXhjZXNzICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldHVybiBvbmx5IGNhcHR1cmVzIG5lZWRlZCBieSB0aGUgcHNldWRvIGZpbHRlciBtZXRob2QgKHR5cGUgYW5kIGFyZ3VtZW50KVxuXHRcdFx0cmV0dXJuIG1hdGNoLnNsaWNlKCAwLCAzICk7XG5cdFx0fVxuXHR9LFxuXG5cdGZpbHRlcjoge1xuXG5cdFx0XCJUQUdcIjogZnVuY3Rpb24oIG5vZGVOYW1lU2VsZWN0b3IgKSB7XG5cdFx0XHR2YXIgbm9kZU5hbWUgPSBub2RlTmFtZVNlbGVjdG9yLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICkudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBub2RlTmFtZVNlbGVjdG9yID09PSBcIipcIiA/XG5cdFx0XHRcdGZ1bmN0aW9uKCkgeyByZXR1cm4gdHJ1ZTsgfSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBlbGVtLm5vZGVOYW1lICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbm9kZU5hbWU7XG5cdFx0XHRcdH07XG5cdFx0fSxcblxuXHRcdFwiQ0xBU1NcIjogZnVuY3Rpb24oIGNsYXNzTmFtZSApIHtcblx0XHRcdHZhciBwYXR0ZXJuID0gY2xhc3NDYWNoZVsgY2xhc3NOYW1lICsgXCIgXCIgXTtcblxuXHRcdFx0cmV0dXJuIHBhdHRlcm4gfHxcblx0XHRcdFx0KHBhdHRlcm4gPSBuZXcgUmVnRXhwKCBcIihefFwiICsgd2hpdGVzcGFjZSArIFwiKVwiICsgY2xhc3NOYW1lICsgXCIoXCIgKyB3aGl0ZXNwYWNlICsgXCJ8JClcIiApKSAmJlxuXHRcdFx0XHRjbGFzc0NhY2hlKCBjbGFzc05hbWUsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdHJldHVybiBwYXR0ZXJuLnRlc3QoIHR5cGVvZiBlbGVtLmNsYXNzTmFtZSA9PT0gXCJzdHJpbmdcIiAmJiBlbGVtLmNsYXNzTmFtZSB8fCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgIT09IFwidW5kZWZpbmVkXCIgJiYgZWxlbS5nZXRBdHRyaWJ1dGUoXCJjbGFzc1wiKSB8fCBcIlwiICk7XG5cdFx0XHRcdH0pO1xuXHRcdH0sXG5cblx0XHRcIkFUVFJcIjogZnVuY3Rpb24oIG5hbWUsIG9wZXJhdG9yLCBjaGVjayApIHtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHJlc3VsdCA9IFNpenpsZS5hdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHRcdFx0aWYgKCByZXN1bHQgPT0gbnVsbCApIHtcblx0XHRcdFx0XHRyZXR1cm4gb3BlcmF0b3IgPT09IFwiIT1cIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAoICFvcGVyYXRvciApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJlc3VsdCArPSBcIlwiO1xuXG5cdFx0XHRcdHJldHVybiBvcGVyYXRvciA9PT0gXCI9XCIgPyByZXN1bHQgPT09IGNoZWNrIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIhPVwiID8gcmVzdWx0ICE9PSBjaGVjayA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwiXj1cIiA/IGNoZWNrICYmIHJlc3VsdC5pbmRleE9mKCBjaGVjayApID09PSAwIDpcblx0XHRcdFx0XHRvcGVyYXRvciA9PT0gXCIqPVwiID8gY2hlY2sgJiYgcmVzdWx0LmluZGV4T2YoIGNoZWNrICkgPiAtMSA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwiJD1cIiA/IGNoZWNrICYmIHJlc3VsdC5zbGljZSggLWNoZWNrLmxlbmd0aCApID09PSBjaGVjayA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwifj1cIiA/ICggXCIgXCIgKyByZXN1bHQucmVwbGFjZSggcndoaXRlc3BhY2UsIFwiIFwiICkgKyBcIiBcIiApLmluZGV4T2YoIGNoZWNrICkgPiAtMSA6XG5cdFx0XHRcdFx0b3BlcmF0b3IgPT09IFwifD1cIiA/IHJlc3VsdCA9PT0gY2hlY2sgfHwgcmVzdWx0LnNsaWNlKCAwLCBjaGVjay5sZW5ndGggKyAxICkgPT09IGNoZWNrICsgXCItXCIgOlxuXHRcdFx0XHRcdGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0XCJDSElMRFwiOiBmdW5jdGlvbiggdHlwZSwgd2hhdCwgYXJndW1lbnQsIGZpcnN0LCBsYXN0ICkge1xuXHRcdFx0dmFyIHNpbXBsZSA9IHR5cGUuc2xpY2UoIDAsIDMgKSAhPT0gXCJudGhcIixcblx0XHRcdFx0Zm9yd2FyZCA9IHR5cGUuc2xpY2UoIC00ICkgIT09IFwibGFzdFwiLFxuXHRcdFx0XHRvZlR5cGUgPSB3aGF0ID09PSBcIm9mLXR5cGVcIjtcblxuXHRcdFx0cmV0dXJuIGZpcnN0ID09PSAxICYmIGxhc3QgPT09IDAgP1xuXG5cdFx0XHRcdC8vIFNob3J0Y3V0IGZvciA6bnRoLSoobilcblx0XHRcdFx0ZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRcdFx0cmV0dXJuICEhZWxlbS5wYXJlbnROb2RlO1xuXHRcdFx0XHR9IDpcblxuXHRcdFx0XHRmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0XHRcdHZhciBjYWNoZSwgb3V0ZXJDYWNoZSwgbm9kZSwgZGlmZiwgbm9kZUluZGV4LCBzdGFydCxcblx0XHRcdFx0XHRcdGRpciA9IHNpbXBsZSAhPT0gZm9yd2FyZCA/IFwibmV4dFNpYmxpbmdcIiA6IFwicHJldmlvdXNTaWJsaW5nXCIsXG5cdFx0XHRcdFx0XHRwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGUsXG5cdFx0XHRcdFx0XHRuYW1lID0gb2ZUeXBlICYmIGVsZW0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKSxcblx0XHRcdFx0XHRcdHVzZUNhY2hlID0gIXhtbCAmJiAhb2ZUeXBlO1xuXG5cdFx0XHRcdFx0aWYgKCBwYXJlbnQgKSB7XG5cblx0XHRcdFx0XHRcdC8vIDooZmlyc3R8bGFzdHxvbmx5KS0oY2hpbGR8b2YtdHlwZSlcblx0XHRcdFx0XHRcdGlmICggc2ltcGxlICkge1xuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIGRpciApIHtcblx0XHRcdFx0XHRcdFx0XHRub2RlID0gZWxlbTtcblx0XHRcdFx0XHRcdFx0XHR3aGlsZSAoIChub2RlID0gbm9kZVsgZGlyIF0pICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBvZlR5cGUgPyBub2RlLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT09IG5hbWUgOiBub2RlLm5vZGVUeXBlID09PSAxICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdC8vIFJldmVyc2UgZGlyZWN0aW9uIGZvciA6b25seS0qIChpZiB3ZSBoYXZlbid0IHlldCBkb25lIHNvKVxuXHRcdFx0XHRcdFx0XHRcdHN0YXJ0ID0gZGlyID0gdHlwZSA9PT0gXCJvbmx5XCIgJiYgIXN0YXJ0ICYmIFwibmV4dFNpYmxpbmdcIjtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0c3RhcnQgPSBbIGZvcndhcmQgPyBwYXJlbnQuZmlyc3RDaGlsZCA6IHBhcmVudC5sYXN0Q2hpbGQgXTtcblxuXHRcdFx0XHRcdFx0Ly8gbm9uLXhtbCA6bnRoLWNoaWxkKC4uLikgc3RvcmVzIGNhY2hlIGRhdGEgb24gYHBhcmVudGBcblx0XHRcdFx0XHRcdGlmICggZm9yd2FyZCAmJiB1c2VDYWNoZSApIHtcblx0XHRcdFx0XHRcdFx0Ly8gU2VlayBgZWxlbWAgZnJvbSBhIHByZXZpb3VzbHktY2FjaGVkIGluZGV4XG5cdFx0XHRcdFx0XHRcdG91dGVyQ2FjaGUgPSBwYXJlbnRbIGV4cGFuZG8gXSB8fCAocGFyZW50WyBleHBhbmRvIF0gPSB7fSk7XG5cdFx0XHRcdFx0XHRcdGNhY2hlID0gb3V0ZXJDYWNoZVsgdHlwZSBdIHx8IFtdO1xuXHRcdFx0XHRcdFx0XHRub2RlSW5kZXggPSBjYWNoZVswXSA9PT0gZGlycnVucyAmJiBjYWNoZVsxXTtcblx0XHRcdFx0XHRcdFx0ZGlmZiA9IGNhY2hlWzBdID09PSBkaXJydW5zICYmIGNhY2hlWzJdO1xuXHRcdFx0XHRcdFx0XHRub2RlID0gbm9kZUluZGV4ICYmIHBhcmVudC5jaGlsZE5vZGVzWyBub2RlSW5kZXggXTtcblxuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIChub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlWyBkaXIgXSB8fFxuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gRmFsbGJhY2sgdG8gc2Vla2luZyBgZWxlbWAgZnJvbSB0aGUgc3RhcnRcblx0XHRcdFx0XHRcdFx0XHQoZGlmZiA9IG5vZGVJbmRleCA9IDApIHx8IHN0YXJ0LnBvcCgpKSApIHtcblxuXHRcdFx0XHRcdFx0XHRcdC8vIFdoZW4gZm91bmQsIGNhY2hlIGluZGV4ZXMgb24gYHBhcmVudGAgYW5kIGJyZWFrXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlLm5vZGVUeXBlID09PSAxICYmICsrZGlmZiAmJiBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3V0ZXJDYWNoZVsgdHlwZSBdID0gWyBkaXJydW5zLCBub2RlSW5kZXgsIGRpZmYgXTtcblx0XHRcdFx0XHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0XHQvLyBVc2UgcHJldmlvdXNseS1jYWNoZWQgZWxlbWVudCBpbmRleCBpZiBhdmFpbGFibGVcblx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIHVzZUNhY2hlICYmIChjYWNoZSA9IChlbGVtWyBleHBhbmRvIF0gfHwgKGVsZW1bIGV4cGFuZG8gXSA9IHt9KSlbIHR5cGUgXSkgJiYgY2FjaGVbMF0gPT09IGRpcnJ1bnMgKSB7XG5cdFx0XHRcdFx0XHRcdGRpZmYgPSBjYWNoZVsxXTtcblxuXHRcdFx0XHRcdFx0Ly8geG1sIDpudGgtY2hpbGQoLi4uKSBvciA6bnRoLWxhc3QtY2hpbGQoLi4uKSBvciA6bnRoKC1sYXN0KT8tb2YtdHlwZSguLi4pXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHQvLyBVc2UgdGhlIHNhbWUgbG9vcCBhcyBhYm92ZSB0byBzZWVrIGBlbGVtYCBmcm9tIHRoZSBzdGFydFxuXHRcdFx0XHRcdFx0XHR3aGlsZSAoIChub2RlID0gKytub2RlSW5kZXggJiYgbm9kZSAmJiBub2RlWyBkaXIgXSB8fFxuXHRcdFx0XHRcdFx0XHRcdChkaWZmID0gbm9kZUluZGV4ID0gMCkgfHwgc3RhcnQucG9wKCkpICkge1xuXG5cdFx0XHRcdFx0XHRcdFx0aWYgKCAoIG9mVHlwZSA/IG5vZGUubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PT0gbmFtZSA6IG5vZGUubm9kZVR5cGUgPT09IDEgKSAmJiArK2RpZmYgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHQvLyBDYWNoZSB0aGUgaW5kZXggb2YgZWFjaCBlbmNvdW50ZXJlZCBlbGVtZW50XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIHVzZUNhY2hlICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHQobm9kZVsgZXhwYW5kbyBdIHx8IChub2RlWyBleHBhbmRvIF0gPSB7fSkpWyB0eXBlIF0gPSBbIGRpcnJ1bnMsIGRpZmYgXTtcblx0XHRcdFx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0XHRcdFx0aWYgKCBub2RlID09PSBlbGVtICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdFx0Ly8gSW5jb3Jwb3JhdGUgdGhlIG9mZnNldCwgdGhlbiBjaGVjayBhZ2FpbnN0IGN5Y2xlIHNpemVcblx0XHRcdFx0XHRcdGRpZmYgLT0gbGFzdDtcblx0XHRcdFx0XHRcdHJldHVybiBkaWZmID09PSBmaXJzdCB8fCAoIGRpZmYgJSBmaXJzdCA9PT0gMCAmJiBkaWZmIC8gZmlyc3QgPj0gMCApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHR9LFxuXG5cdFx0XCJQU0VVRE9cIjogZnVuY3Rpb24oIHBzZXVkbywgYXJndW1lbnQgKSB7XG5cdFx0XHQvLyBwc2V1ZG8tY2xhc3MgbmFtZXMgYXJlIGNhc2UtaW5zZW5zaXRpdmVcblx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSL3NlbGVjdG9ycy8jcHNldWRvLWNsYXNzZXNcblx0XHRcdC8vIFByaW9yaXRpemUgYnkgY2FzZSBzZW5zaXRpdml0eSBpbiBjYXNlIGN1c3RvbSBwc2V1ZG9zIGFyZSBhZGRlZCB3aXRoIHVwcGVyY2FzZSBsZXR0ZXJzXG5cdFx0XHQvLyBSZW1lbWJlciB0aGF0IHNldEZpbHRlcnMgaW5oZXJpdHMgZnJvbSBwc2V1ZG9zXG5cdFx0XHR2YXIgYXJncyxcblx0XHRcdFx0Zm4gPSBFeHByLnBzZXVkb3NbIHBzZXVkbyBdIHx8IEV4cHIuc2V0RmlsdGVyc1sgcHNldWRvLnRvTG93ZXJDYXNlKCkgXSB8fFxuXHRcdFx0XHRcdFNpenpsZS5lcnJvciggXCJ1bnN1cHBvcnRlZCBwc2V1ZG86IFwiICsgcHNldWRvICk7XG5cblx0XHRcdC8vIFRoZSB1c2VyIG1heSB1c2UgY3JlYXRlUHNldWRvIHRvIGluZGljYXRlIHRoYXRcblx0XHRcdC8vIGFyZ3VtZW50cyBhcmUgbmVlZGVkIHRvIGNyZWF0ZSB0aGUgZmlsdGVyIGZ1bmN0aW9uXG5cdFx0XHQvLyBqdXN0IGFzIFNpenpsZSBkb2VzXG5cdFx0XHRpZiAoIGZuWyBleHBhbmRvIF0gKSB7XG5cdFx0XHRcdHJldHVybiBmbiggYXJndW1lbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQnV0IG1haW50YWluIHN1cHBvcnQgZm9yIG9sZCBzaWduYXR1cmVzXG5cdFx0XHRpZiAoIGZuLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHRcdGFyZ3MgPSBbIHBzZXVkbywgcHNldWRvLCBcIlwiLCBhcmd1bWVudCBdO1xuXHRcdFx0XHRyZXR1cm4gRXhwci5zZXRGaWx0ZXJzLmhhc093blByb3BlcnR5KCBwc2V1ZG8udG9Mb3dlckNhc2UoKSApID9cblx0XHRcdFx0XHRtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMgKSB7XG5cdFx0XHRcdFx0XHR2YXIgaWR4LFxuXHRcdFx0XHRcdFx0XHRtYXRjaGVkID0gZm4oIHNlZWQsIGFyZ3VtZW50ICksXG5cdFx0XHRcdFx0XHRcdGkgPSBtYXRjaGVkLmxlbmd0aDtcblx0XHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0XHRpZHggPSBpbmRleE9mKCBzZWVkLCBtYXRjaGVkW2ldICk7XG5cdFx0XHRcdFx0XHRcdHNlZWRbIGlkeCBdID0gISggbWF0Y2hlc1sgaWR4IF0gPSBtYXRjaGVkW2ldICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSkgOlxuXHRcdFx0XHRcdGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIGZuKCBlbGVtLCAwLCBhcmdzICk7XG5cdFx0XHRcdFx0fTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGZuO1xuXHRcdH1cblx0fSxcblxuXHRwc2V1ZG9zOiB7XG5cdFx0Ly8gUG90ZW50aWFsbHkgY29tcGxleCBwc2V1ZG9zXG5cdFx0XCJub3RcIjogbWFya0Z1bmN0aW9uKGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRcdC8vIFRyaW0gdGhlIHNlbGVjdG9yIHBhc3NlZCB0byBjb21waWxlXG5cdFx0XHQvLyB0byBhdm9pZCB0cmVhdGluZyBsZWFkaW5nIGFuZCB0cmFpbGluZ1xuXHRcdFx0Ly8gc3BhY2VzIGFzIGNvbWJpbmF0b3JzXG5cdFx0XHR2YXIgaW5wdXQgPSBbXSxcblx0XHRcdFx0cmVzdWx0cyA9IFtdLFxuXHRcdFx0XHRtYXRjaGVyID0gY29tcGlsZSggc2VsZWN0b3IucmVwbGFjZSggcnRyaW0sIFwiJDFcIiApICk7XG5cblx0XHRcdHJldHVybiBtYXRjaGVyWyBleHBhbmRvIF0gP1xuXHRcdFx0XHRtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlZWQsIG1hdGNoZXMsIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdFx0XHR2YXIgZWxlbSxcblx0XHRcdFx0XHRcdHVubWF0Y2hlZCA9IG1hdGNoZXIoIHNlZWQsIG51bGwsIHhtbCwgW10gKSxcblx0XHRcdFx0XHRcdGkgPSBzZWVkLmxlbmd0aDtcblxuXHRcdFx0XHRcdC8vIE1hdGNoIGVsZW1lbnRzIHVubWF0Y2hlZCBieSBgbWF0Y2hlcmBcblx0XHRcdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0XHRcdGlmICggKGVsZW0gPSB1bm1hdGNoZWRbaV0pICkge1xuXHRcdFx0XHRcdFx0XHRzZWVkW2ldID0gIShtYXRjaGVzW2ldID0gZWxlbSk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9KSA6XG5cdFx0XHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHRcdFx0aW5wdXRbMF0gPSBlbGVtO1xuXHRcdFx0XHRcdG1hdGNoZXIoIGlucHV0LCBudWxsLCB4bWwsIHJlc3VsdHMgKTtcblx0XHRcdFx0XHQvLyBEb24ndCBrZWVwIHRoZSBlbGVtZW50IChpc3N1ZSAjMjk5KVxuXHRcdFx0XHRcdGlucHV0WzBdID0gbnVsbDtcblx0XHRcdFx0XHRyZXR1cm4gIXJlc3VsdHMucG9wKCk7XG5cdFx0XHRcdH07XG5cdFx0fSksXG5cblx0XHRcImhhc1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gU2l6emxlKCBzZWxlY3RvciwgZWxlbSApLmxlbmd0aCA+IDA7XG5cdFx0XHR9O1xuXHRcdH0pLFxuXG5cdFx0XCJjb250YWluc1wiOiBtYXJrRnVuY3Rpb24oZnVuY3Rpb24oIHRleHQgKSB7XG5cdFx0XHR0ZXh0ID0gdGV4dC5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApO1xuXHRcdFx0cmV0dXJuIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0XHRyZXR1cm4gKCBlbGVtLnRleHRDb250ZW50IHx8IGVsZW0uaW5uZXJUZXh0IHx8IGdldFRleHQoIGVsZW0gKSApLmluZGV4T2YoIHRleHQgKSA+IC0xO1xuXHRcdFx0fTtcblx0XHR9KSxcblxuXHRcdC8vIFwiV2hldGhlciBhbiBlbGVtZW50IGlzIHJlcHJlc2VudGVkIGJ5IGEgOmxhbmcoKSBzZWxlY3RvclxuXHRcdC8vIGlzIGJhc2VkIHNvbGVseSBvbiB0aGUgZWxlbWVudCdzIGxhbmd1YWdlIHZhbHVlXG5cdFx0Ly8gYmVpbmcgZXF1YWwgdG8gdGhlIGlkZW50aWZpZXIgQyxcblx0XHQvLyBvciBiZWdpbm5pbmcgd2l0aCB0aGUgaWRlbnRpZmllciBDIGltbWVkaWF0ZWx5IGZvbGxvd2VkIGJ5IFwiLVwiLlxuXHRcdC8vIFRoZSBtYXRjaGluZyBvZiBDIGFnYWluc3QgdGhlIGVsZW1lbnQncyBsYW5ndWFnZSB2YWx1ZSBpcyBwZXJmb3JtZWQgY2FzZS1pbnNlbnNpdGl2ZWx5LlxuXHRcdC8vIFRoZSBpZGVudGlmaWVyIEMgZG9lcyBub3QgaGF2ZSB0byBiZSBhIHZhbGlkIGxhbmd1YWdlIG5hbWUuXCJcblx0XHQvLyBodHRwOi8vd3d3LnczLm9yZy9UUi9zZWxlY3RvcnMvI2xhbmctcHNldWRvXG5cdFx0XCJsYW5nXCI6IG1hcmtGdW5jdGlvbiggZnVuY3Rpb24oIGxhbmcgKSB7XG5cdFx0XHQvLyBsYW5nIHZhbHVlIG11c3QgYmUgYSB2YWxpZCBpZGVudGlmaWVyXG5cdFx0XHRpZiAoICFyaWRlbnRpZmllci50ZXN0KGxhbmcgfHwgXCJcIikgKSB7XG5cdFx0XHRcdFNpenpsZS5lcnJvciggXCJ1bnN1cHBvcnRlZCBsYW5nOiBcIiArIGxhbmcgKTtcblx0XHRcdH1cblx0XHRcdGxhbmcgPSBsYW5nLnJlcGxhY2UoIHJ1bmVzY2FwZSwgZnVuZXNjYXBlICkudG9Mb3dlckNhc2UoKTtcblx0XHRcdHJldHVybiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIGVsZW1MYW5nO1xuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0aWYgKCAoZWxlbUxhbmcgPSBkb2N1bWVudElzSFRNTCA/XG5cdFx0XHRcdFx0XHRlbGVtLmxhbmcgOlxuXHRcdFx0XHRcdFx0ZWxlbS5nZXRBdHRyaWJ1dGUoXCJ4bWw6bGFuZ1wiKSB8fCBlbGVtLmdldEF0dHJpYnV0ZShcImxhbmdcIikpICkge1xuXG5cdFx0XHRcdFx0XHRlbGVtTGFuZyA9IGVsZW1MYW5nLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gZWxlbUxhbmcgPT09IGxhbmcgfHwgZWxlbUxhbmcuaW5kZXhPZiggbGFuZyArIFwiLVwiICkgPT09IDA7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9IHdoaWxlICggKGVsZW0gPSBlbGVtLnBhcmVudE5vZGUpICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKTtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fTtcblx0XHR9KSxcblxuXHRcdC8vIE1pc2NlbGxhbmVvdXNcblx0XHRcInRhcmdldFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBoYXNoID0gd2luZG93LmxvY2F0aW9uICYmIHdpbmRvdy5sb2NhdGlvbi5oYXNoO1xuXHRcdFx0cmV0dXJuIGhhc2ggJiYgaGFzaC5zbGljZSggMSApID09PSBlbGVtLmlkO1xuXHRcdH0sXG5cblx0XHRcInJvb3RcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbSA9PT0gZG9jRWxlbTtcblx0XHR9LFxuXG5cdFx0XCJmb2N1c1wiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBkb2N1bWVudC5hY3RpdmVFbGVtZW50ICYmICghZG9jdW1lbnQuaGFzRm9jdXMgfHwgZG9jdW1lbnQuaGFzRm9jdXMoKSkgJiYgISEoZWxlbS50eXBlIHx8IGVsZW0uaHJlZiB8fCB+ZWxlbS50YWJJbmRleCk7XG5cdFx0fSxcblxuXHRcdC8vIEJvb2xlYW4gcHJvcGVydGllc1xuXHRcdFwiZW5hYmxlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtLmRpc2FibGVkID09PSBmYWxzZTtcblx0XHR9LFxuXG5cdFx0XCJkaXNhYmxlZFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtLmRpc2FibGVkID09PSB0cnVlO1xuXHRcdH0sXG5cblx0XHRcImNoZWNrZWRcIjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHQvLyBJbiBDU1MzLCA6Y2hlY2tlZCBzaG91bGQgcmV0dXJuIGJvdGggY2hlY2tlZCBhbmQgc2VsZWN0ZWQgZWxlbWVudHNcblx0XHRcdC8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMTEvUkVDLWNzczMtc2VsZWN0b3JzLTIwMTEwOTI5LyNjaGVja2VkXG5cdFx0XHR2YXIgbm9kZU5hbWUgPSBlbGVtLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRyZXR1cm4gKG5vZGVOYW1lID09PSBcImlucHV0XCIgJiYgISFlbGVtLmNoZWNrZWQpIHx8IChub2RlTmFtZSA9PT0gXCJvcHRpb25cIiAmJiAhIWVsZW0uc2VsZWN0ZWQpO1xuXHRcdH0sXG5cblx0XHRcInNlbGVjdGVkXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0Ly8gQWNjZXNzaW5nIHRoaXMgcHJvcGVydHkgbWFrZXMgc2VsZWN0ZWQtYnktZGVmYXVsdFxuXHRcdFx0Ly8gb3B0aW9ucyBpbiBTYWZhcmkgd29yayBwcm9wZXJseVxuXHRcdFx0aWYgKCBlbGVtLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdGVsZW0ucGFyZW50Tm9kZS5zZWxlY3RlZEluZGV4O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZWxlbS5zZWxlY3RlZCA9PT0gdHJ1ZTtcblx0XHR9LFxuXG5cdFx0Ly8gQ29udGVudHNcblx0XHRcImVtcHR5XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0Ly8gaHR0cDovL3d3dy53My5vcmcvVFIvc2VsZWN0b3JzLyNlbXB0eS1wc2V1ZG9cblx0XHRcdC8vIDplbXB0eSBpcyBuZWdhdGVkIGJ5IGVsZW1lbnQgKDEpIG9yIGNvbnRlbnQgbm9kZXMgKHRleHQ6IDM7IGNkYXRhOiA0OyBlbnRpdHkgcmVmOiA1KSxcblx0XHRcdC8vICAgYnV0IG5vdCBieSBvdGhlcnMgKGNvbW1lbnQ6IDg7IHByb2Nlc3NpbmcgaW5zdHJ1Y3Rpb246IDc7IGV0Yy4pXG5cdFx0XHQvLyBub2RlVHlwZSA8IDYgd29ya3MgYmVjYXVzZSBhdHRyaWJ1dGVzICgyKSBkbyBub3QgYXBwZWFyIGFzIGNoaWxkcmVuXG5cdFx0XHRmb3IgKCBlbGVtID0gZWxlbS5maXJzdENoaWxkOyBlbGVtOyBlbGVtID0gZWxlbS5uZXh0U2libGluZyApIHtcblx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlIDwgNiApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0sXG5cblx0XHRcInBhcmVudFwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiAhRXhwci5wc2V1ZG9zW1wiZW1wdHlcIl0oIGVsZW0gKTtcblx0XHR9LFxuXG5cdFx0Ly8gRWxlbWVudC9pbnB1dCB0eXBlc1xuXHRcdFwiaGVhZGVyXCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIHJoZWFkZXIudGVzdCggZWxlbS5ub2RlTmFtZSApO1xuXHRcdH0sXG5cblx0XHRcImlucHV0XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIHJpbnB1dHMudGVzdCggZWxlbS5ub2RlTmFtZSApO1xuXHRcdH0sXG5cblx0XHRcImJ1dHRvblwiOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBuYW1lID0gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xuXHRcdFx0cmV0dXJuIG5hbWUgPT09IFwiaW5wdXRcIiAmJiBlbGVtLnR5cGUgPT09IFwiYnV0dG9uXCIgfHwgbmFtZSA9PT0gXCJidXR0b25cIjtcblx0XHR9LFxuXG5cdFx0XCJ0ZXh0XCI6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0dmFyIGF0dHI7XG5cdFx0XHRyZXR1cm4gZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIgJiZcblx0XHRcdFx0ZWxlbS50eXBlID09PSBcInRleHRcIiAmJlxuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IElFPDhcblx0XHRcdFx0Ly8gTmV3IEhUTUw1IGF0dHJpYnV0ZSB2YWx1ZXMgKGUuZy4sIFwic2VhcmNoXCIpIGFwcGVhciB3aXRoIGVsZW0udHlwZSA9PT0gXCJ0ZXh0XCJcblx0XHRcdFx0KCAoYXR0ciA9IGVsZW0uZ2V0QXR0cmlidXRlKFwidHlwZVwiKSkgPT0gbnVsbCB8fCBhdHRyLnRvTG93ZXJDYXNlKCkgPT09IFwidGV4dFwiICk7XG5cdFx0fSxcblxuXHRcdC8vIFBvc2l0aW9uLWluLWNvbGxlY3Rpb25cblx0XHRcImZpcnN0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oKSB7XG5cdFx0XHRyZXR1cm4gWyAwIF07XG5cdFx0fSksXG5cblx0XHRcImxhc3RcIjogY3JlYXRlUG9zaXRpb25hbFBzZXVkbyhmdW5jdGlvbiggbWF0Y2hJbmRleGVzLCBsZW5ndGggKSB7XG5cdFx0XHRyZXR1cm4gWyBsZW5ndGggLSAxIF07XG5cdFx0fSksXG5cblx0XHRcImVxXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcblx0XHRcdHJldHVybiBbIGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQgXTtcblx0XHR9KSxcblxuXHRcdFwiZXZlblwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCApIHtcblx0XHRcdHZhciBpID0gMDtcblx0XHRcdGZvciAoIDsgaSA8IGxlbmd0aDsgaSArPSAyICkge1xuXHRcdFx0XHRtYXRjaEluZGV4ZXMucHVzaCggaSApO1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIG1hdGNoSW5kZXhlcztcblx0XHR9KSxcblxuXHRcdFwib2RkXCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoICkge1xuXHRcdFx0dmFyIGkgPSAxO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpICs9IDIgKSB7XG5cdFx0XHRcdG1hdGNoSW5kZXhlcy5wdXNoKCBpICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gbWF0Y2hJbmRleGVzO1xuXHRcdH0pLFxuXG5cdFx0XCJsdFwiOiBjcmVhdGVQb3NpdGlvbmFsUHNldWRvKGZ1bmN0aW9uKCBtYXRjaEluZGV4ZXMsIGxlbmd0aCwgYXJndW1lbnQgKSB7XG5cdFx0XHR2YXIgaSA9IGFyZ3VtZW50IDwgMCA/IGFyZ3VtZW50ICsgbGVuZ3RoIDogYXJndW1lbnQ7XG5cdFx0XHRmb3IgKCA7IC0taSA+PSAwOyApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSksXG5cblx0XHRcImd0XCI6IGNyZWF0ZVBvc2l0aW9uYWxQc2V1ZG8oZnVuY3Rpb24oIG1hdGNoSW5kZXhlcywgbGVuZ3RoLCBhcmd1bWVudCApIHtcblx0XHRcdHZhciBpID0gYXJndW1lbnQgPCAwID8gYXJndW1lbnQgKyBsZW5ndGggOiBhcmd1bWVudDtcblx0XHRcdGZvciAoIDsgKytpIDwgbGVuZ3RoOyApIHtcblx0XHRcdFx0bWF0Y2hJbmRleGVzLnB1c2goIGkgKTtcblx0XHRcdH1cblx0XHRcdHJldHVybiBtYXRjaEluZGV4ZXM7XG5cdFx0fSlcblx0fVxufTtcblxuRXhwci5wc2V1ZG9zW1wibnRoXCJdID0gRXhwci5wc2V1ZG9zW1wiZXFcIl07XG5cbi8vIEFkZCBidXR0b24vaW5wdXQgdHlwZSBwc2V1ZG9zXG5mb3IgKCBpIGluIHsgcmFkaW86IHRydWUsIGNoZWNrYm94OiB0cnVlLCBmaWxlOiB0cnVlLCBwYXNzd29yZDogdHJ1ZSwgaW1hZ2U6IHRydWUgfSApIHtcblx0RXhwci5wc2V1ZG9zWyBpIF0gPSBjcmVhdGVJbnB1dFBzZXVkbyggaSApO1xufVxuZm9yICggaSBpbiB7IHN1Ym1pdDogdHJ1ZSwgcmVzZXQ6IHRydWUgfSApIHtcblx0RXhwci5wc2V1ZG9zWyBpIF0gPSBjcmVhdGVCdXR0b25Qc2V1ZG8oIGkgKTtcbn1cblxuLy8gRWFzeSBBUEkgZm9yIGNyZWF0aW5nIG5ldyBzZXRGaWx0ZXJzXG5mdW5jdGlvbiBzZXRGaWx0ZXJzKCkge31cbnNldEZpbHRlcnMucHJvdG90eXBlID0gRXhwci5maWx0ZXJzID0gRXhwci5wc2V1ZG9zO1xuRXhwci5zZXRGaWx0ZXJzID0gbmV3IHNldEZpbHRlcnMoKTtcblxudG9rZW5pemUgPSBTaXp6bGUudG9rZW5pemUgPSBmdW5jdGlvbiggc2VsZWN0b3IsIHBhcnNlT25seSApIHtcblx0dmFyIG1hdGNoZWQsIG1hdGNoLCB0b2tlbnMsIHR5cGUsXG5cdFx0c29GYXIsIGdyb3VwcywgcHJlRmlsdGVycyxcblx0XHRjYWNoZWQgPSB0b2tlbkNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cblx0aWYgKCBjYWNoZWQgKSB7XG5cdFx0cmV0dXJuIHBhcnNlT25seSA/IDAgOiBjYWNoZWQuc2xpY2UoIDAgKTtcblx0fVxuXG5cdHNvRmFyID0gc2VsZWN0b3I7XG5cdGdyb3VwcyA9IFtdO1xuXHRwcmVGaWx0ZXJzID0gRXhwci5wcmVGaWx0ZXI7XG5cblx0d2hpbGUgKCBzb0ZhciApIHtcblxuXHRcdC8vIENvbW1hIGFuZCBmaXJzdCBydW5cblx0XHRpZiAoICFtYXRjaGVkIHx8IChtYXRjaCA9IHJjb21tYS5leGVjKCBzb0ZhciApKSApIHtcblx0XHRcdGlmICggbWF0Y2ggKSB7XG5cdFx0XHRcdC8vIERvbid0IGNvbnN1bWUgdHJhaWxpbmcgY29tbWFzIGFzIHZhbGlkXG5cdFx0XHRcdHNvRmFyID0gc29GYXIuc2xpY2UoIG1hdGNoWzBdLmxlbmd0aCApIHx8IHNvRmFyO1xuXHRcdFx0fVxuXHRcdFx0Z3JvdXBzLnB1c2goICh0b2tlbnMgPSBbXSkgKTtcblx0XHR9XG5cblx0XHRtYXRjaGVkID0gZmFsc2U7XG5cblx0XHQvLyBDb21iaW5hdG9yc1xuXHRcdGlmICggKG1hdGNoID0gcmNvbWJpbmF0b3JzLmV4ZWMoIHNvRmFyICkpICkge1xuXHRcdFx0bWF0Y2hlZCA9IG1hdGNoLnNoaWZ0KCk7XG5cdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdHZhbHVlOiBtYXRjaGVkLFxuXHRcdFx0XHQvLyBDYXN0IGRlc2NlbmRhbnQgY29tYmluYXRvcnMgdG8gc3BhY2Vcblx0XHRcdFx0dHlwZTogbWF0Y2hbMF0ucmVwbGFjZSggcnRyaW0sIFwiIFwiIClcblx0XHRcdH0pO1xuXHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hlZC5sZW5ndGggKTtcblx0XHR9XG5cblx0XHQvLyBGaWx0ZXJzXG5cdFx0Zm9yICggdHlwZSBpbiBFeHByLmZpbHRlciApIHtcblx0XHRcdGlmICggKG1hdGNoID0gbWF0Y2hFeHByWyB0eXBlIF0uZXhlYyggc29GYXIgKSkgJiYgKCFwcmVGaWx0ZXJzWyB0eXBlIF0gfHxcblx0XHRcdFx0KG1hdGNoID0gcHJlRmlsdGVyc1sgdHlwZSBdKCBtYXRjaCApKSkgKSB7XG5cdFx0XHRcdG1hdGNoZWQgPSBtYXRjaC5zaGlmdCgpO1xuXHRcdFx0XHR0b2tlbnMucHVzaCh7XG5cdFx0XHRcdFx0dmFsdWU6IG1hdGNoZWQsXG5cdFx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0XHRtYXRjaGVzOiBtYXRjaFxuXHRcdFx0XHR9KTtcblx0XHRcdFx0c29GYXIgPSBzb0Zhci5zbGljZSggbWF0Y2hlZC5sZW5ndGggKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoICFtYXRjaGVkICkge1xuXHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cblx0Ly8gUmV0dXJuIHRoZSBsZW5ndGggb2YgdGhlIGludmFsaWQgZXhjZXNzXG5cdC8vIGlmIHdlJ3JlIGp1c3QgcGFyc2luZ1xuXHQvLyBPdGhlcndpc2UsIHRocm93IGFuIGVycm9yIG9yIHJldHVybiB0b2tlbnNcblx0cmV0dXJuIHBhcnNlT25seSA/XG5cdFx0c29GYXIubGVuZ3RoIDpcblx0XHRzb0ZhciA/XG5cdFx0XHRTaXp6bGUuZXJyb3IoIHNlbGVjdG9yICkgOlxuXHRcdFx0Ly8gQ2FjaGUgdGhlIHRva2Vuc1xuXHRcdFx0dG9rZW5DYWNoZSggc2VsZWN0b3IsIGdyb3VwcyApLnNsaWNlKCAwICk7XG59O1xuXG5mdW5jdGlvbiB0b1NlbGVjdG9yKCB0b2tlbnMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSB0b2tlbnMubGVuZ3RoLFxuXHRcdHNlbGVjdG9yID0gXCJcIjtcblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0c2VsZWN0b3IgKz0gdG9rZW5zW2ldLnZhbHVlO1xuXHR9XG5cdHJldHVybiBzZWxlY3Rvcjtcbn1cblxuZnVuY3Rpb24gYWRkQ29tYmluYXRvciggbWF0Y2hlciwgY29tYmluYXRvciwgYmFzZSApIHtcblx0dmFyIGRpciA9IGNvbWJpbmF0b3IuZGlyLFxuXHRcdGNoZWNrTm9uRWxlbWVudHMgPSBiYXNlICYmIGRpciA9PT0gXCJwYXJlbnROb2RlXCIsXG5cdFx0ZG9uZU5hbWUgPSBkb25lKys7XG5cblx0cmV0dXJuIGNvbWJpbmF0b3IuZmlyc3QgP1xuXHRcdC8vIENoZWNrIGFnYWluc3QgY2xvc2VzdCBhbmNlc3Rvci9wcmVjZWRpbmcgZWxlbWVudFxuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR3aGlsZSAoIChlbGVtID0gZWxlbVsgZGlyIF0pICkge1xuXHRcdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgfHwgY2hlY2tOb25FbGVtZW50cyApIHtcblx0XHRcdFx0XHRyZXR1cm4gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IDpcblxuXHRcdC8vIENoZWNrIGFnYWluc3QgYWxsIGFuY2VzdG9yL3ByZWNlZGluZyBlbGVtZW50c1xuXHRcdGZ1bmN0aW9uKCBlbGVtLCBjb250ZXh0LCB4bWwgKSB7XG5cdFx0XHR2YXIgb2xkQ2FjaGUsIG91dGVyQ2FjaGUsXG5cdFx0XHRcdG5ld0NhY2hlID0gWyBkaXJydW5zLCBkb25lTmFtZSBdO1xuXG5cdFx0XHQvLyBXZSBjYW4ndCBzZXQgYXJiaXRyYXJ5IGRhdGEgb24gWE1MIG5vZGVzLCBzbyB0aGV5IGRvbid0IGJlbmVmaXQgZnJvbSBkaXIgY2FjaGluZ1xuXHRcdFx0aWYgKCB4bWwgKSB7XG5cdFx0XHRcdHdoaWxlICggKGVsZW0gPSBlbGVtWyBkaXIgXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXIoIGVsZW0sIGNvbnRleHQsIHhtbCApICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHdoaWxlICggKGVsZW0gPSBlbGVtWyBkaXIgXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBlbGVtLm5vZGVUeXBlID09PSAxIHx8IGNoZWNrTm9uRWxlbWVudHMgKSB7XG5cdFx0XHRcdFx0XHRvdXRlckNhY2hlID0gZWxlbVsgZXhwYW5kbyBdIHx8IChlbGVtWyBleHBhbmRvIF0gPSB7fSk7XG5cdFx0XHRcdFx0XHRpZiAoIChvbGRDYWNoZSA9IG91dGVyQ2FjaGVbIGRpciBdKSAmJlxuXHRcdFx0XHRcdFx0XHRvbGRDYWNoZVsgMCBdID09PSBkaXJydW5zICYmIG9sZENhY2hlWyAxIF0gPT09IGRvbmVOYW1lICkge1xuXG5cdFx0XHRcdFx0XHRcdC8vIEFzc2lnbiB0byBuZXdDYWNoZSBzbyByZXN1bHRzIGJhY2stcHJvcGFnYXRlIHRvIHByZXZpb3VzIGVsZW1lbnRzXG5cdFx0XHRcdFx0XHRcdHJldHVybiAobmV3Q2FjaGVbIDIgXSA9IG9sZENhY2hlWyAyIF0pO1xuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0Ly8gUmV1c2UgbmV3Y2FjaGUgc28gcmVzdWx0cyBiYWNrLXByb3BhZ2F0ZSB0byBwcmV2aW91cyBlbGVtZW50c1xuXHRcdFx0XHRcdFx0XHRvdXRlckNhY2hlWyBkaXIgXSA9IG5ld0NhY2hlO1xuXG5cdFx0XHRcdFx0XHRcdC8vIEEgbWF0Y2ggbWVhbnMgd2UncmUgZG9uZTsgYSBmYWlsIG1lYW5zIHdlIGhhdmUgdG8ga2VlcCBjaGVja2luZ1xuXHRcdFx0XHRcdFx0XHRpZiAoIChuZXdDYWNoZVsgMiBdID0gbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkpICkge1xuXHRcdFx0XHRcdFx0XHRcdHJldHVybiB0cnVlO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcbn1cblxuZnVuY3Rpb24gZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICkge1xuXHRyZXR1cm4gbWF0Y2hlcnMubGVuZ3RoID4gMSA/XG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbnRleHQsIHhtbCApIHtcblx0XHRcdHZhciBpID0gbWF0Y2hlcnMubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGlmICggIW1hdGNoZXJzW2ldKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdHJldHVybiB0cnVlO1xuXHRcdH0gOlxuXHRcdG1hdGNoZXJzWzBdO1xufVxuXG5mdW5jdGlvbiBtdWx0aXBsZUNvbnRleHRzKCBzZWxlY3RvciwgY29udGV4dHMsIHJlc3VsdHMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsZW4gPSBjb250ZXh0cy5sZW5ndGg7XG5cdGZvciAoIDsgaSA8IGxlbjsgaSsrICkge1xuXHRcdFNpenpsZSggc2VsZWN0b3IsIGNvbnRleHRzW2ldLCByZXN1bHRzICk7XG5cdH1cblx0cmV0dXJuIHJlc3VsdHM7XG59XG5cbmZ1bmN0aW9uIGNvbmRlbnNlKCB1bm1hdGNoZWQsIG1hcCwgZmlsdGVyLCBjb250ZXh0LCB4bWwgKSB7XG5cdHZhciBlbGVtLFxuXHRcdG5ld1VubWF0Y2hlZCA9IFtdLFxuXHRcdGkgPSAwLFxuXHRcdGxlbiA9IHVubWF0Y2hlZC5sZW5ndGgsXG5cdFx0bWFwcGVkID0gbWFwICE9IG51bGw7XG5cblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0aWYgKCAoZWxlbSA9IHVubWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRpZiAoICFmaWx0ZXIgfHwgZmlsdGVyKCBlbGVtLCBjb250ZXh0LCB4bWwgKSApIHtcblx0XHRcdFx0bmV3VW5tYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdFx0aWYgKCBtYXBwZWQgKSB7XG5cdFx0XHRcdFx0bWFwLnB1c2goIGkgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiBuZXdVbm1hdGNoZWQ7XG59XG5cbmZ1bmN0aW9uIHNldE1hdGNoZXIoIHByZUZpbHRlciwgc2VsZWN0b3IsIG1hdGNoZXIsIHBvc3RGaWx0ZXIsIHBvc3RGaW5kZXIsIHBvc3RTZWxlY3RvciApIHtcblx0aWYgKCBwb3N0RmlsdGVyICYmICFwb3N0RmlsdGVyWyBleHBhbmRvIF0gKSB7XG5cdFx0cG9zdEZpbHRlciA9IHNldE1hdGNoZXIoIHBvc3RGaWx0ZXIgKTtcblx0fVxuXHRpZiAoIHBvc3RGaW5kZXIgJiYgIXBvc3RGaW5kZXJbIGV4cGFuZG8gXSApIHtcblx0XHRwb3N0RmluZGVyID0gc2V0TWF0Y2hlciggcG9zdEZpbmRlciwgcG9zdFNlbGVjdG9yICk7XG5cdH1cblx0cmV0dXJuIG1hcmtGdW5jdGlvbihmdW5jdGlvbiggc2VlZCwgcmVzdWx0cywgY29udGV4dCwgeG1sICkge1xuXHRcdHZhciB0ZW1wLCBpLCBlbGVtLFxuXHRcdFx0cHJlTWFwID0gW10sXG5cdFx0XHRwb3N0TWFwID0gW10sXG5cdFx0XHRwcmVleGlzdGluZyA9IHJlc3VsdHMubGVuZ3RoLFxuXG5cdFx0XHQvLyBHZXQgaW5pdGlhbCBlbGVtZW50cyBmcm9tIHNlZWQgb3IgY29udGV4dFxuXHRcdFx0ZWxlbXMgPSBzZWVkIHx8IG11bHRpcGxlQ29udGV4dHMoIHNlbGVjdG9yIHx8IFwiKlwiLCBjb250ZXh0Lm5vZGVUeXBlID8gWyBjb250ZXh0IF0gOiBjb250ZXh0LCBbXSApLFxuXG5cdFx0XHQvLyBQcmVmaWx0ZXIgdG8gZ2V0IG1hdGNoZXIgaW5wdXQsIHByZXNlcnZpbmcgYSBtYXAgZm9yIHNlZWQtcmVzdWx0cyBzeW5jaHJvbml6YXRpb25cblx0XHRcdG1hdGNoZXJJbiA9IHByZUZpbHRlciAmJiAoIHNlZWQgfHwgIXNlbGVjdG9yICkgP1xuXHRcdFx0XHRjb25kZW5zZSggZWxlbXMsIHByZU1hcCwgcHJlRmlsdGVyLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdGVsZW1zLFxuXG5cdFx0XHRtYXRjaGVyT3V0ID0gbWF0Y2hlciA/XG5cdFx0XHRcdC8vIElmIHdlIGhhdmUgYSBwb3N0RmluZGVyLCBvciBmaWx0ZXJlZCBzZWVkLCBvciBub24tc2VlZCBwb3N0RmlsdGVyIG9yIHByZWV4aXN0aW5nIHJlc3VsdHMsXG5cdFx0XHRcdHBvc3RGaW5kZXIgfHwgKCBzZWVkID8gcHJlRmlsdGVyIDogcHJlZXhpc3RpbmcgfHwgcG9zdEZpbHRlciApID9cblxuXHRcdFx0XHRcdC8vIC4uLmludGVybWVkaWF0ZSBwcm9jZXNzaW5nIGlzIG5lY2Vzc2FyeVxuXHRcdFx0XHRcdFtdIDpcblxuXHRcdFx0XHRcdC8vIC4uLm90aGVyd2lzZSB1c2UgcmVzdWx0cyBkaXJlY3RseVxuXHRcdFx0XHRcdHJlc3VsdHMgOlxuXHRcdFx0XHRtYXRjaGVySW47XG5cblx0XHQvLyBGaW5kIHByaW1hcnkgbWF0Y2hlc1xuXHRcdGlmICggbWF0Y2hlciApIHtcblx0XHRcdG1hdGNoZXIoIG1hdGNoZXJJbiwgbWF0Y2hlck91dCwgY29udGV4dCwgeG1sICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcG9zdEZpbHRlclxuXHRcdGlmICggcG9zdEZpbHRlciApIHtcblx0XHRcdHRlbXAgPSBjb25kZW5zZSggbWF0Y2hlck91dCwgcG9zdE1hcCApO1xuXHRcdFx0cG9zdEZpbHRlciggdGVtcCwgW10sIGNvbnRleHQsIHhtbCApO1xuXG5cdFx0XHQvLyBVbi1tYXRjaCBmYWlsaW5nIGVsZW1lbnRzIGJ5IG1vdmluZyB0aGVtIGJhY2sgdG8gbWF0Y2hlckluXG5cdFx0XHRpID0gdGVtcC5sZW5ndGg7XG5cdFx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdFx0aWYgKCAoZWxlbSA9IHRlbXBbaV0pICkge1xuXHRcdFx0XHRcdG1hdGNoZXJPdXRbIHBvc3RNYXBbaV0gXSA9ICEobWF0Y2hlckluWyBwb3N0TWFwW2ldIF0gPSBlbGVtKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdGlmICggc2VlZCApIHtcblx0XHRcdGlmICggcG9zdEZpbmRlciB8fCBwcmVGaWx0ZXIgKSB7XG5cdFx0XHRcdGlmICggcG9zdEZpbmRlciApIHtcblx0XHRcdFx0XHQvLyBHZXQgdGhlIGZpbmFsIG1hdGNoZXJPdXQgYnkgY29uZGVuc2luZyB0aGlzIGludGVybWVkaWF0ZSBpbnRvIHBvc3RGaW5kZXIgY29udGV4dHNcblx0XHRcdFx0XHR0ZW1wID0gW107XG5cdFx0XHRcdFx0aSA9IG1hdGNoZXJPdXQubGVuZ3RoO1xuXHRcdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoZWxlbSA9IG1hdGNoZXJPdXRbaV0pICkge1xuXHRcdFx0XHRcdFx0XHQvLyBSZXN0b3JlIG1hdGNoZXJJbiBzaW5jZSBlbGVtIGlzIG5vdCB5ZXQgYSBmaW5hbCBtYXRjaFxuXHRcdFx0XHRcdFx0XHR0ZW1wLnB1c2goIChtYXRjaGVySW5baV0gPSBlbGVtKSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRwb3N0RmluZGVyKCBudWxsLCAobWF0Y2hlck91dCA9IFtdKSwgdGVtcCwgeG1sICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBNb3ZlIG1hdGNoZWQgZWxlbWVudHMgZnJvbSBzZWVkIHRvIHJlc3VsdHMgdG8ga2VlcCB0aGVtIHN5bmNocm9uaXplZFxuXHRcdFx0XHRpID0gbWF0Y2hlck91dC5sZW5ndGg7XG5cdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdGlmICggKGVsZW0gPSBtYXRjaGVyT3V0W2ldKSAmJlxuXHRcdFx0XHRcdFx0KHRlbXAgPSBwb3N0RmluZGVyID8gaW5kZXhPZiggc2VlZCwgZWxlbSApIDogcHJlTWFwW2ldKSA+IC0xICkge1xuXG5cdFx0XHRcdFx0XHRzZWVkW3RlbXBdID0gIShyZXN1bHRzW3RlbXBdID0gZWxlbSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHQvLyBBZGQgZWxlbWVudHMgdG8gcmVzdWx0cywgdGhyb3VnaCBwb3N0RmluZGVyIGlmIGRlZmluZWRcblx0XHR9IGVsc2Uge1xuXHRcdFx0bWF0Y2hlck91dCA9IGNvbmRlbnNlKFxuXHRcdFx0XHRtYXRjaGVyT3V0ID09PSByZXN1bHRzID9cblx0XHRcdFx0XHRtYXRjaGVyT3V0LnNwbGljZSggcHJlZXhpc3RpbmcsIG1hdGNoZXJPdXQubGVuZ3RoICkgOlxuXHRcdFx0XHRcdG1hdGNoZXJPdXRcblx0XHRcdCk7XG5cdFx0XHRpZiAoIHBvc3RGaW5kZXIgKSB7XG5cdFx0XHRcdHBvc3RGaW5kZXIoIG51bGwsIHJlc3VsdHMsIG1hdGNoZXJPdXQsIHhtbCApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0cHVzaC5hcHBseSggcmVzdWx0cywgbWF0Y2hlck91dCApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSk7XG59XG5cbmZ1bmN0aW9uIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMgKSB7XG5cdHZhciBjaGVja0NvbnRleHQsIG1hdGNoZXIsIGosXG5cdFx0bGVuID0gdG9rZW5zLmxlbmd0aCxcblx0XHRsZWFkaW5nUmVsYXRpdmUgPSBFeHByLnJlbGF0aXZlWyB0b2tlbnNbMF0udHlwZSBdLFxuXHRcdGltcGxpY2l0UmVsYXRpdmUgPSBsZWFkaW5nUmVsYXRpdmUgfHwgRXhwci5yZWxhdGl2ZVtcIiBcIl0sXG5cdFx0aSA9IGxlYWRpbmdSZWxhdGl2ZSA/IDEgOiAwLFxuXG5cdFx0Ly8gVGhlIGZvdW5kYXRpb25hbCBtYXRjaGVyIGVuc3VyZXMgdGhhdCBlbGVtZW50cyBhcmUgcmVhY2hhYmxlIGZyb20gdG9wLWxldmVsIGNvbnRleHQocylcblx0XHRtYXRjaENvbnRleHQgPSBhZGRDb21iaW5hdG9yKCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHJldHVybiBlbGVtID09PSBjaGVja0NvbnRleHQ7XG5cdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuXHRcdG1hdGNoQW55Q29udGV4dCA9IGFkZENvbWJpbmF0b3IoIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuIGluZGV4T2YoIGNoZWNrQ29udGV4dCwgZWxlbSApID4gLTE7XG5cdFx0fSwgaW1wbGljaXRSZWxhdGl2ZSwgdHJ1ZSApLFxuXHRcdG1hdGNoZXJzID0gWyBmdW5jdGlvbiggZWxlbSwgY29udGV4dCwgeG1sICkge1xuXHRcdFx0dmFyIHJldCA9ICggIWxlYWRpbmdSZWxhdGl2ZSAmJiAoIHhtbCB8fCBjb250ZXh0ICE9PSBvdXRlcm1vc3RDb250ZXh0ICkgKSB8fCAoXG5cdFx0XHRcdChjaGVja0NvbnRleHQgPSBjb250ZXh0KS5ub2RlVHlwZSA/XG5cdFx0XHRcdFx0bWF0Y2hDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSA6XG5cdFx0XHRcdFx0bWF0Y2hBbnlDb250ZXh0KCBlbGVtLCBjb250ZXh0LCB4bWwgKSApO1xuXHRcdFx0Ly8gQXZvaWQgaGFuZ2luZyBvbnRvIGVsZW1lbnQgKGlzc3VlICMyOTkpXG5cdFx0XHRjaGVja0NvbnRleHQgPSBudWxsO1xuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9IF07XG5cblx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0aWYgKCAobWF0Y2hlciA9IEV4cHIucmVsYXRpdmVbIHRva2Vuc1tpXS50eXBlIF0pICkge1xuXHRcdFx0bWF0Y2hlcnMgPSBbIGFkZENvbWJpbmF0b3IoZWxlbWVudE1hdGNoZXIoIG1hdGNoZXJzICksIG1hdGNoZXIpIF07XG5cdFx0fSBlbHNlIHtcblx0XHRcdG1hdGNoZXIgPSBFeHByLmZpbHRlclsgdG9rZW5zW2ldLnR5cGUgXS5hcHBseSggbnVsbCwgdG9rZW5zW2ldLm1hdGNoZXMgKTtcblxuXHRcdFx0Ly8gUmV0dXJuIHNwZWNpYWwgdXBvbiBzZWVpbmcgYSBwb3NpdGlvbmFsIG1hdGNoZXJcblx0XHRcdGlmICggbWF0Y2hlclsgZXhwYW5kbyBdICkge1xuXHRcdFx0XHQvLyBGaW5kIHRoZSBuZXh0IHJlbGF0aXZlIG9wZXJhdG9yIChpZiBhbnkpIGZvciBwcm9wZXIgaGFuZGxpbmdcblx0XHRcdFx0aiA9ICsraTtcblx0XHRcdFx0Zm9yICggOyBqIDwgbGVuOyBqKysgKSB7XG5cdFx0XHRcdFx0aWYgKCBFeHByLnJlbGF0aXZlWyB0b2tlbnNbal0udHlwZSBdICkge1xuXHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBzZXRNYXRjaGVyKFxuXHRcdFx0XHRcdGkgPiAxICYmIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApLFxuXHRcdFx0XHRcdGkgPiAxICYmIHRvU2VsZWN0b3IoXG5cdFx0XHRcdFx0XHQvLyBJZiB0aGUgcHJlY2VkaW5nIHRva2VuIHdhcyBhIGRlc2NlbmRhbnQgY29tYmluYXRvciwgaW5zZXJ0IGFuIGltcGxpY2l0IGFueS1lbGVtZW50IGAqYFxuXHRcdFx0XHRcdFx0dG9rZW5zLnNsaWNlKCAwLCBpIC0gMSApLmNvbmNhdCh7IHZhbHVlOiB0b2tlbnNbIGkgLSAyIF0udHlwZSA9PT0gXCIgXCIgPyBcIipcIiA6IFwiXCIgfSlcblx0XHRcdFx0XHQpLnJlcGxhY2UoIHJ0cmltLCBcIiQxXCIgKSxcblx0XHRcdFx0XHRtYXRjaGVyLFxuXHRcdFx0XHRcdGkgPCBqICYmIG1hdGNoZXJGcm9tVG9rZW5zKCB0b2tlbnMuc2xpY2UoIGksIGogKSApLFxuXHRcdFx0XHRcdGogPCBsZW4gJiYgbWF0Y2hlckZyb21Ub2tlbnMoICh0b2tlbnMgPSB0b2tlbnMuc2xpY2UoIGogKSkgKSxcblx0XHRcdFx0XHRqIDwgbGVuICYmIHRvU2VsZWN0b3IoIHRva2VucyApXG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cdFx0XHRtYXRjaGVycy5wdXNoKCBtYXRjaGVyICk7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIGVsZW1lbnRNYXRjaGVyKCBtYXRjaGVycyApO1xufVxuXG5mdW5jdGlvbiBtYXRjaGVyRnJvbUdyb3VwTWF0Y2hlcnMoIGVsZW1lbnRNYXRjaGVycywgc2V0TWF0Y2hlcnMgKSB7XG5cdHZhciBieVNldCA9IHNldE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0YnlFbGVtZW50ID0gZWxlbWVudE1hdGNoZXJzLmxlbmd0aCA+IDAsXG5cdFx0c3VwZXJNYXRjaGVyID0gZnVuY3Rpb24oIHNlZWQsIGNvbnRleHQsIHhtbCwgcmVzdWx0cywgb3V0ZXJtb3N0ICkge1xuXHRcdFx0dmFyIGVsZW0sIGosIG1hdGNoZXIsXG5cdFx0XHRcdG1hdGNoZWRDb3VudCA9IDAsXG5cdFx0XHRcdGkgPSBcIjBcIixcblx0XHRcdFx0dW5tYXRjaGVkID0gc2VlZCAmJiBbXSxcblx0XHRcdFx0c2V0TWF0Y2hlZCA9IFtdLFxuXHRcdFx0XHRjb250ZXh0QmFja3VwID0gb3V0ZXJtb3N0Q29udGV4dCxcblx0XHRcdFx0Ly8gV2UgbXVzdCBhbHdheXMgaGF2ZSBlaXRoZXIgc2VlZCBlbGVtZW50cyBvciBvdXRlcm1vc3QgY29udGV4dFxuXHRcdFx0XHRlbGVtcyA9IHNlZWQgfHwgYnlFbGVtZW50ICYmIEV4cHIuZmluZFtcIlRBR1wiXSggXCIqXCIsIG91dGVybW9zdCApLFxuXHRcdFx0XHQvLyBVc2UgaW50ZWdlciBkaXJydW5zIGlmZiB0aGlzIGlzIHRoZSBvdXRlcm1vc3QgbWF0Y2hlclxuXHRcdFx0XHRkaXJydW5zVW5pcXVlID0gKGRpcnJ1bnMgKz0gY29udGV4dEJhY2t1cCA9PSBudWxsID8gMSA6IE1hdGgucmFuZG9tKCkgfHwgMC4xKSxcblx0XHRcdFx0bGVuID0gZWxlbXMubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIG91dGVybW9zdCApIHtcblx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHQgIT09IGRvY3VtZW50ICYmIGNvbnRleHQ7XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCBlbGVtZW50cyBwYXNzaW5nIGVsZW1lbnRNYXRjaGVycyBkaXJlY3RseSB0byByZXN1bHRzXG5cdFx0XHQvLyBLZWVwIGBpYCBhIHN0cmluZyBpZiB0aGVyZSBhcmUgbm8gZWxlbWVudHMgc28gYG1hdGNoZWRDb3VudGAgd2lsbCBiZSBcIjAwXCIgYmVsb3dcblx0XHRcdC8vIFN1cHBvcnQ6IElFPDksIFNhZmFyaVxuXHRcdFx0Ly8gVG9sZXJhdGUgTm9kZUxpc3QgcHJvcGVydGllcyAoSUU6IFwibGVuZ3RoXCI7IFNhZmFyaTogPG51bWJlcj4pIG1hdGNoaW5nIGVsZW1lbnRzIGJ5IGlkXG5cdFx0XHRmb3IgKCA7IGkgIT09IGxlbiAmJiAoZWxlbSA9IGVsZW1zW2ldKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0XHRcdGlmICggYnlFbGVtZW50ICYmIGVsZW0gKSB7XG5cdFx0XHRcdFx0aiA9IDA7XG5cdFx0XHRcdFx0d2hpbGUgKCAobWF0Y2hlciA9IGVsZW1lbnRNYXRjaGVyc1tqKytdKSApIHtcblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlciggZWxlbSwgY29udGV4dCwgeG1sICkgKSB7XG5cdFx0XHRcdFx0XHRcdHJlc3VsdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBvdXRlcm1vc3QgKSB7XG5cdFx0XHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBUcmFjayB1bm1hdGNoZWQgZWxlbWVudHMgZm9yIHNldCBmaWx0ZXJzXG5cdFx0XHRcdGlmICggYnlTZXQgKSB7XG5cdFx0XHRcdFx0Ly8gVGhleSB3aWxsIGhhdmUgZ29uZSB0aHJvdWdoIGFsbCBwb3NzaWJsZSBtYXRjaGVyc1xuXHRcdFx0XHRcdGlmICggKGVsZW0gPSAhbWF0Y2hlciAmJiBlbGVtKSApIHtcblx0XHRcdFx0XHRcdG1hdGNoZWRDb3VudC0tO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIExlbmd0aGVuIHRoZSBhcnJheSBmb3IgZXZlcnkgZWxlbWVudCwgbWF0Y2hlZCBvciBub3Rcblx0XHRcdFx0XHRpZiAoIHNlZWQgKSB7XG5cdFx0XHRcdFx0XHR1bm1hdGNoZWQucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBBcHBseSBzZXQgZmlsdGVycyB0byB1bm1hdGNoZWQgZWxlbWVudHNcblx0XHRcdG1hdGNoZWRDb3VudCArPSBpO1xuXHRcdFx0aWYgKCBieVNldCAmJiBpICE9PSBtYXRjaGVkQ291bnQgKSB7XG5cdFx0XHRcdGogPSAwO1xuXHRcdFx0XHR3aGlsZSAoIChtYXRjaGVyID0gc2V0TWF0Y2hlcnNbaisrXSkgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlciggdW5tYXRjaGVkLCBzZXRNYXRjaGVkLCBjb250ZXh0LCB4bWwgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICggc2VlZCApIHtcblx0XHRcdFx0XHQvLyBSZWludGVncmF0ZSBlbGVtZW50IG1hdGNoZXMgdG8gZWxpbWluYXRlIHRoZSBuZWVkIGZvciBzb3J0aW5nXG5cdFx0XHRcdFx0aWYgKCBtYXRjaGVkQ291bnQgPiAwICkge1xuXHRcdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggISh1bm1hdGNoZWRbaV0gfHwgc2V0TWF0Y2hlZFtpXSkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0c2V0TWF0Y2hlZFtpXSA9IHBvcC5jYWxsKCByZXN1bHRzICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBEaXNjYXJkIGluZGV4IHBsYWNlaG9sZGVyIHZhbHVlcyB0byBnZXQgb25seSBhY3R1YWwgbWF0Y2hlc1xuXHRcdFx0XHRcdHNldE1hdGNoZWQgPSBjb25kZW5zZSggc2V0TWF0Y2hlZCApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQWRkIG1hdGNoZXMgdG8gcmVzdWx0c1xuXHRcdFx0XHRwdXNoLmFwcGx5KCByZXN1bHRzLCBzZXRNYXRjaGVkICk7XG5cblx0XHRcdFx0Ly8gU2VlZGxlc3Mgc2V0IG1hdGNoZXMgc3VjY2VlZGluZyBtdWx0aXBsZSBzdWNjZXNzZnVsIG1hdGNoZXJzIHN0aXB1bGF0ZSBzb3J0aW5nXG5cdFx0XHRcdGlmICggb3V0ZXJtb3N0ICYmICFzZWVkICYmIHNldE1hdGNoZWQubGVuZ3RoID4gMCAmJlxuXHRcdFx0XHRcdCggbWF0Y2hlZENvdW50ICsgc2V0TWF0Y2hlcnMubGVuZ3RoICkgPiAxICkge1xuXG5cdFx0XHRcdFx0U2l6emxlLnVuaXF1ZVNvcnQoIHJlc3VsdHMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBPdmVycmlkZSBtYW5pcHVsYXRpb24gb2YgZ2xvYmFscyBieSBuZXN0ZWQgbWF0Y2hlcnNcblx0XHRcdGlmICggb3V0ZXJtb3N0ICkge1xuXHRcdFx0XHRkaXJydW5zID0gZGlycnVuc1VuaXF1ZTtcblx0XHRcdFx0b3V0ZXJtb3N0Q29udGV4dCA9IGNvbnRleHRCYWNrdXA7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB1bm1hdGNoZWQ7XG5cdFx0fTtcblxuXHRyZXR1cm4gYnlTZXQgP1xuXHRcdG1hcmtGdW5jdGlvbiggc3VwZXJNYXRjaGVyICkgOlxuXHRcdHN1cGVyTWF0Y2hlcjtcbn1cblxuY29tcGlsZSA9IFNpenpsZS5jb21waWxlID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBtYXRjaCAvKiBJbnRlcm5hbCBVc2UgT25seSAqLyApIHtcblx0dmFyIGksXG5cdFx0c2V0TWF0Y2hlcnMgPSBbXSxcblx0XHRlbGVtZW50TWF0Y2hlcnMgPSBbXSxcblx0XHRjYWNoZWQgPSBjb21waWxlckNhY2hlWyBzZWxlY3RvciArIFwiIFwiIF07XG5cblx0aWYgKCAhY2FjaGVkICkge1xuXHRcdC8vIEdlbmVyYXRlIGEgZnVuY3Rpb24gb2YgcmVjdXJzaXZlIGZ1bmN0aW9ucyB0aGF0IGNhbiBiZSB1c2VkIHRvIGNoZWNrIGVhY2ggZWxlbWVudFxuXHRcdGlmICggIW1hdGNoICkge1xuXHRcdFx0bWF0Y2ggPSB0b2tlbml6ZSggc2VsZWN0b3IgKTtcblx0XHR9XG5cdFx0aSA9IG1hdGNoLmxlbmd0aDtcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdGNhY2hlZCA9IG1hdGNoZXJGcm9tVG9rZW5zKCBtYXRjaFtpXSApO1xuXHRcdFx0aWYgKCBjYWNoZWRbIGV4cGFuZG8gXSApIHtcblx0XHRcdFx0c2V0TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRlbGVtZW50TWF0Y2hlcnMucHVzaCggY2FjaGVkICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQ2FjaGUgdGhlIGNvbXBpbGVkIGZ1bmN0aW9uXG5cdFx0Y2FjaGVkID0gY29tcGlsZXJDYWNoZSggc2VsZWN0b3IsIG1hdGNoZXJGcm9tR3JvdXBNYXRjaGVycyggZWxlbWVudE1hdGNoZXJzLCBzZXRNYXRjaGVycyApICk7XG5cblx0XHQvLyBTYXZlIHNlbGVjdG9yIGFuZCB0b2tlbml6YXRpb25cblx0XHRjYWNoZWQuc2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0fVxuXHRyZXR1cm4gY2FjaGVkO1xufTtcblxuLyoqXG4gKiBBIGxvdy1sZXZlbCBzZWxlY3Rpb24gZnVuY3Rpb24gdGhhdCB3b3JrcyB3aXRoIFNpenpsZSdzIGNvbXBpbGVkXG4gKiAgc2VsZWN0b3IgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge1N0cmluZ3xGdW5jdGlvbn0gc2VsZWN0b3IgQSBzZWxlY3RvciBvciBhIHByZS1jb21waWxlZFxuICogIHNlbGVjdG9yIGZ1bmN0aW9uIGJ1aWx0IHdpdGggU2l6emxlLmNvbXBpbGVcbiAqIEBwYXJhbSB7RWxlbWVudH0gY29udGV4dFxuICogQHBhcmFtIHtBcnJheX0gW3Jlc3VsdHNdXG4gKiBAcGFyYW0ge0FycmF5fSBbc2VlZF0gQSBzZXQgb2YgZWxlbWVudHMgdG8gbWF0Y2ggYWdhaW5zdFxuICovXG5zZWxlY3QgPSBTaXp6bGUuc2VsZWN0ID0gZnVuY3Rpb24oIHNlbGVjdG9yLCBjb250ZXh0LCByZXN1bHRzLCBzZWVkICkge1xuXHR2YXIgaSwgdG9rZW5zLCB0b2tlbiwgdHlwZSwgZmluZCxcblx0XHRjb21waWxlZCA9IHR5cGVvZiBzZWxlY3RvciA9PT0gXCJmdW5jdGlvblwiICYmIHNlbGVjdG9yLFxuXHRcdG1hdGNoID0gIXNlZWQgJiYgdG9rZW5pemUoIChzZWxlY3RvciA9IGNvbXBpbGVkLnNlbGVjdG9yIHx8IHNlbGVjdG9yKSApO1xuXG5cdHJlc3VsdHMgPSByZXN1bHRzIHx8IFtdO1xuXG5cdC8vIFRyeSB0byBtaW5pbWl6ZSBvcGVyYXRpb25zIGlmIHRoZXJlIGlzIG5vIHNlZWQgYW5kIG9ubHkgb25lIGdyb3VwXG5cdGlmICggbWF0Y2gubGVuZ3RoID09PSAxICkge1xuXG5cdFx0Ly8gVGFrZSBhIHNob3J0Y3V0IGFuZCBzZXQgdGhlIGNvbnRleHQgaWYgdGhlIHJvb3Qgc2VsZWN0b3IgaXMgYW4gSURcblx0XHR0b2tlbnMgPSBtYXRjaFswXSA9IG1hdGNoWzBdLnNsaWNlKCAwICk7XG5cdFx0aWYgKCB0b2tlbnMubGVuZ3RoID4gMiAmJiAodG9rZW4gPSB0b2tlbnNbMF0pLnR5cGUgPT09IFwiSURcIiAmJlxuXHRcdFx0XHRzdXBwb3J0LmdldEJ5SWQgJiYgY29udGV4dC5ub2RlVHlwZSA9PT0gOSAmJiBkb2N1bWVudElzSFRNTCAmJlxuXHRcdFx0XHRFeHByLnJlbGF0aXZlWyB0b2tlbnNbMV0udHlwZSBdICkge1xuXG5cdFx0XHRjb250ZXh0ID0gKCBFeHByLmZpbmRbXCJJRFwiXSggdG9rZW4ubWF0Y2hlc1swXS5yZXBsYWNlKHJ1bmVzY2FwZSwgZnVuZXNjYXBlKSwgY29udGV4dCApIHx8IFtdIClbMF07XG5cdFx0XHRpZiAoICFjb250ZXh0ICkge1xuXHRcdFx0XHRyZXR1cm4gcmVzdWx0cztcblxuXHRcdFx0Ly8gUHJlY29tcGlsZWQgbWF0Y2hlcnMgd2lsbCBzdGlsbCB2ZXJpZnkgYW5jZXN0cnksIHNvIHN0ZXAgdXAgYSBsZXZlbFxuXHRcdFx0fSBlbHNlIGlmICggY29tcGlsZWQgKSB7XG5cdFx0XHRcdGNvbnRleHQgPSBjb250ZXh0LnBhcmVudE5vZGU7XG5cdFx0XHR9XG5cblx0XHRcdHNlbGVjdG9yID0gc2VsZWN0b3Iuc2xpY2UoIHRva2Vucy5zaGlmdCgpLnZhbHVlLmxlbmd0aCApO1xuXHRcdH1cblxuXHRcdC8vIEZldGNoIGEgc2VlZCBzZXQgZm9yIHJpZ2h0LXRvLWxlZnQgbWF0Y2hpbmdcblx0XHRpID0gbWF0Y2hFeHByW1wibmVlZHNDb250ZXh0XCJdLnRlc3QoIHNlbGVjdG9yICkgPyAwIDogdG9rZW5zLmxlbmd0aDtcblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdHRva2VuID0gdG9rZW5zW2ldO1xuXG5cdFx0XHQvLyBBYm9ydCBpZiB3ZSBoaXQgYSBjb21iaW5hdG9yXG5cdFx0XHRpZiAoIEV4cHIucmVsYXRpdmVbICh0eXBlID0gdG9rZW4udHlwZSkgXSApIHtcblx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIChmaW5kID0gRXhwci5maW5kWyB0eXBlIF0pICkge1xuXHRcdFx0XHQvLyBTZWFyY2gsIGV4cGFuZGluZyBjb250ZXh0IGZvciBsZWFkaW5nIHNpYmxpbmcgY29tYmluYXRvcnNcblx0XHRcdFx0aWYgKCAoc2VlZCA9IGZpbmQoXG5cdFx0XHRcdFx0dG9rZW4ubWF0Y2hlc1swXS5yZXBsYWNlKCBydW5lc2NhcGUsIGZ1bmVzY2FwZSApLFxuXHRcdFx0XHRcdHJzaWJsaW5nLnRlc3QoIHRva2Vuc1swXS50eXBlICkgJiYgdGVzdENvbnRleHQoIGNvbnRleHQucGFyZW50Tm9kZSApIHx8IGNvbnRleHRcblx0XHRcdFx0KSkgKSB7XG5cblx0XHRcdFx0XHQvLyBJZiBzZWVkIGlzIGVtcHR5IG9yIG5vIHRva2VucyByZW1haW4sIHdlIGNhbiByZXR1cm4gZWFybHlcblx0XHRcdFx0XHR0b2tlbnMuc3BsaWNlKCBpLCAxICk7XG5cdFx0XHRcdFx0c2VsZWN0b3IgPSBzZWVkLmxlbmd0aCAmJiB0b1NlbGVjdG9yKCB0b2tlbnMgKTtcblx0XHRcdFx0XHRpZiAoICFzZWxlY3RvciApIHtcblx0XHRcdFx0XHRcdHB1c2guYXBwbHkoIHJlc3VsdHMsIHNlZWQgKTtcblx0XHRcdFx0XHRcdHJldHVybiByZXN1bHRzO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ29tcGlsZSBhbmQgZXhlY3V0ZSBhIGZpbHRlcmluZyBmdW5jdGlvbiBpZiBvbmUgaXMgbm90IHByb3ZpZGVkXG5cdC8vIFByb3ZpZGUgYG1hdGNoYCB0byBhdm9pZCByZXRva2VuaXphdGlvbiBpZiB3ZSBtb2RpZmllZCB0aGUgc2VsZWN0b3IgYWJvdmVcblx0KCBjb21waWxlZCB8fCBjb21waWxlKCBzZWxlY3RvciwgbWF0Y2ggKSApKFxuXHRcdHNlZWQsXG5cdFx0Y29udGV4dCxcblx0XHQhZG9jdW1lbnRJc0hUTUwsXG5cdFx0cmVzdWx0cyxcblx0XHRyc2libGluZy50ZXN0KCBzZWxlY3RvciApICYmIHRlc3RDb250ZXh0KCBjb250ZXh0LnBhcmVudE5vZGUgKSB8fCBjb250ZXh0XG5cdCk7XG5cdHJldHVybiByZXN1bHRzO1xufTtcblxuLy8gT25lLXRpbWUgYXNzaWdubWVudHNcblxuLy8gU29ydCBzdGFiaWxpdHlcbnN1cHBvcnQuc29ydFN0YWJsZSA9IGV4cGFuZG8uc3BsaXQoXCJcIikuc29ydCggc29ydE9yZGVyICkuam9pbihcIlwiKSA9PT0gZXhwYW5kbztcblxuLy8gU3VwcG9ydDogQ2hyb21lIDE0LTM1K1xuLy8gQWx3YXlzIGFzc3VtZSBkdXBsaWNhdGVzIGlmIHRoZXkgYXJlbid0IHBhc3NlZCB0byB0aGUgY29tcGFyaXNvbiBmdW5jdGlvblxuc3VwcG9ydC5kZXRlY3REdXBsaWNhdGVzID0gISFoYXNEdXBsaWNhdGU7XG5cbi8vIEluaXRpYWxpemUgYWdhaW5zdCB0aGUgZGVmYXVsdCBkb2N1bWVudFxuc2V0RG9jdW1lbnQoKTtcblxuLy8gU3VwcG9ydDogV2Via2l0PDUzNy4zMiAtIFNhZmFyaSA2LjAuMy9DaHJvbWUgMjUgKGZpeGVkIGluIENocm9tZSAyNylcbi8vIERldGFjaGVkIG5vZGVzIGNvbmZvdW5kaW5nbHkgZm9sbG93ICplYWNoIG90aGVyKlxuc3VwcG9ydC5zb3J0RGV0YWNoZWQgPSBhc3NlcnQoZnVuY3Rpb24oIGRpdjEgKSB7XG5cdC8vIFNob3VsZCByZXR1cm4gMSwgYnV0IHJldHVybnMgNCAoZm9sbG93aW5nKVxuXHRyZXR1cm4gZGl2MS5jb21wYXJlRG9jdW1lbnRQb3NpdGlvbiggZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKSApICYgMTtcbn0pO1xuXG4vLyBTdXBwb3J0OiBJRTw4XG4vLyBQcmV2ZW50IGF0dHJpYnV0ZS9wcm9wZXJ0eSBcImludGVycG9sYXRpb25cIlxuLy8gaHR0cDovL21zZG4ubWljcm9zb2Z0LmNvbS9lbi11cy9saWJyYXJ5L21zNTM2NDI5JTI4VlMuODUlMjkuYXNweFxuaWYgKCAhYXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XG5cdGRpdi5pbm5lckhUTUwgPSBcIjxhIGhyZWY9JyMnPjwvYT5cIjtcblx0cmV0dXJuIGRpdi5maXJzdENoaWxkLmdldEF0dHJpYnV0ZShcImhyZWZcIikgPT09IFwiI1wiIDtcbn0pICkge1xuXHRhZGRIYW5kbGUoIFwidHlwZXxocmVmfGhlaWdodHx3aWR0aFwiLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0aWYgKCAhaXNYTUwgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUsIG5hbWUudG9Mb3dlckNhc2UoKSA9PT0gXCJ0eXBlXCIgPyAxIDogMiApO1xuXHRcdH1cblx0fSk7XG59XG5cbi8vIFN1cHBvcnQ6IElFPDlcbi8vIFVzZSBkZWZhdWx0VmFsdWUgaW4gcGxhY2Ugb2YgZ2V0QXR0cmlidXRlKFwidmFsdWVcIilcbmlmICggIXN1cHBvcnQuYXR0cmlidXRlcyB8fCAhYXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XG5cdGRpdi5pbm5lckhUTUwgPSBcIjxpbnB1dC8+XCI7XG5cdGRpdi5maXJzdENoaWxkLnNldEF0dHJpYnV0ZSggXCJ2YWx1ZVwiLCBcIlwiICk7XG5cdHJldHVybiBkaXYuZmlyc3RDaGlsZC5nZXRBdHRyaWJ1dGUoIFwidmFsdWVcIiApID09PSBcIlwiO1xufSkgKSB7XG5cdGFkZEhhbmRsZSggXCJ2YWx1ZVwiLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0aWYgKCAhaXNYTUwgJiYgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09PSBcImlucHV0XCIgKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5kZWZhdWx0VmFsdWU7XG5cdFx0fVxuXHR9KTtcbn1cblxuLy8gU3VwcG9ydDogSUU8OVxuLy8gVXNlIGdldEF0dHJpYnV0ZU5vZGUgdG8gZmV0Y2ggYm9vbGVhbnMgd2hlbiBnZXRBdHRyaWJ1dGUgbGllc1xuaWYgKCAhYXNzZXJ0KGZ1bmN0aW9uKCBkaXYgKSB7XG5cdHJldHVybiBkaXYuZ2V0QXR0cmlidXRlKFwiZGlzYWJsZWRcIikgPT0gbnVsbDtcbn0pICkge1xuXHRhZGRIYW5kbGUoIGJvb2xlYW5zLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgaXNYTUwgKSB7XG5cdFx0dmFyIHZhbDtcblx0XHRpZiAoICFpc1hNTCApIHtcblx0XHRcdHJldHVybiBlbGVtWyBuYW1lIF0gPT09IHRydWUgPyBuYW1lLnRvTG93ZXJDYXNlKCkgOlxuXHRcdFx0XHRcdCh2YWwgPSBlbGVtLmdldEF0dHJpYnV0ZU5vZGUoIG5hbWUgKSkgJiYgdmFsLnNwZWNpZmllZCA/XG5cdFx0XHRcdFx0dmFsLnZhbHVlIDpcblx0XHRcdFx0bnVsbDtcblx0XHR9XG5cdH0pO1xufVxuXG5yZXR1cm4gU2l6emxlO1xuXG59KSggd2luZG93ICk7XG5cblxuXG5qUXVlcnkuZmluZCA9IFNpenpsZTtcbmpRdWVyeS5leHByID0gU2l6emxlLnNlbGVjdG9ycztcbmpRdWVyeS5leHByW1wiOlwiXSA9IGpRdWVyeS5leHByLnBzZXVkb3M7XG5qUXVlcnkudW5pcXVlID0gU2l6emxlLnVuaXF1ZVNvcnQ7XG5qUXVlcnkudGV4dCA9IFNpenpsZS5nZXRUZXh0O1xualF1ZXJ5LmlzWE1MRG9jID0gU2l6emxlLmlzWE1MO1xualF1ZXJ5LmNvbnRhaW5zID0gU2l6emxlLmNvbnRhaW5zO1xuXG5cblxudmFyIHJuZWVkc0NvbnRleHQgPSBqUXVlcnkuZXhwci5tYXRjaC5uZWVkc0NvbnRleHQ7XG5cbnZhciByc2luZ2xlVGFnID0gKC9ePChcXHcrKVxccypcXC8/Pig/OjxcXC9cXDE+fCkkLyk7XG5cblxuXG52YXIgcmlzU2ltcGxlID0gL14uW146I1xcW1xcLixdKiQvO1xuXG4vLyBJbXBsZW1lbnQgdGhlIGlkZW50aWNhbCBmdW5jdGlvbmFsaXR5IGZvciBmaWx0ZXIgYW5kIG5vdFxuZnVuY3Rpb24gd2lubm93KCBlbGVtZW50cywgcXVhbGlmaWVyLCBub3QgKSB7XG5cdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHF1YWxpZmllciApICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtLCBpICkge1xuXHRcdFx0LyoganNoaW50IC1XMDE4ICovXG5cdFx0XHRyZXR1cm4gISFxdWFsaWZpZXIuY2FsbCggZWxlbSwgaSwgZWxlbSApICE9PSBub3Q7XG5cdFx0fSk7XG5cblx0fVxuXG5cdGlmICggcXVhbGlmaWVyLm5vZGVUeXBlICkge1xuXHRcdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0cmV0dXJuICggZWxlbSA9PT0gcXVhbGlmaWVyICkgIT09IG5vdDtcblx0XHR9KTtcblxuXHR9XG5cblx0aWYgKCB0eXBlb2YgcXVhbGlmaWVyID09PSBcInN0cmluZ1wiICkge1xuXHRcdGlmICggcmlzU2ltcGxlLnRlc3QoIHF1YWxpZmllciApICkge1xuXHRcdFx0cmV0dXJuIGpRdWVyeS5maWx0ZXIoIHF1YWxpZmllciwgZWxlbWVudHMsIG5vdCApO1xuXHRcdH1cblxuXHRcdHF1YWxpZmllciA9IGpRdWVyeS5maWx0ZXIoIHF1YWxpZmllciwgZWxlbWVudHMgKTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnkuZ3JlcCggZWxlbWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiAoIGluZGV4T2YuY2FsbCggcXVhbGlmaWVyLCBlbGVtICkgPj0gMCApICE9PSBub3Q7XG5cdH0pO1xufVxuXG5qUXVlcnkuZmlsdGVyID0gZnVuY3Rpb24oIGV4cHIsIGVsZW1zLCBub3QgKSB7XG5cdHZhciBlbGVtID0gZWxlbXNbIDAgXTtcblxuXHRpZiAoIG5vdCApIHtcblx0XHRleHByID0gXCI6bm90KFwiICsgZXhwciArIFwiKVwiO1xuXHR9XG5cblx0cmV0dXJuIGVsZW1zLmxlbmd0aCA9PT0gMSAmJiBlbGVtLm5vZGVUeXBlID09PSAxID9cblx0XHRqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoIGVsZW0sIGV4cHIgKSA/IFsgZWxlbSBdIDogW10gOlxuXHRcdGpRdWVyeS5maW5kLm1hdGNoZXMoIGV4cHIsIGpRdWVyeS5ncmVwKCBlbGVtcywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5ub2RlVHlwZSA9PT0gMTtcblx0XHR9KSk7XG59O1xuXG5qUXVlcnkuZm4uZXh0ZW5kKHtcblx0ZmluZDogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHZhciBpLFxuXHRcdFx0bGVuID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRyZXQgPSBbXSxcblx0XHRcdHNlbGYgPSB0aGlzO1xuXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIGpRdWVyeSggc2VsZWN0b3IgKS5maWx0ZXIoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHNlbGZbIGkgXSwgdGhpcyApICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9KSApO1xuXHRcdH1cblxuXHRcdGZvciAoIGkgPSAwOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRqUXVlcnkuZmluZCggc2VsZWN0b3IsIHNlbGZbIGkgXSwgcmV0ICk7XG5cdFx0fVxuXG5cdFx0Ly8gTmVlZGVkIGJlY2F1c2UgJCggc2VsZWN0b3IsIGNvbnRleHQgKSBiZWNvbWVzICQoIGNvbnRleHQgKS5maW5kKCBzZWxlY3RvciApXG5cdFx0cmV0ID0gdGhpcy5wdXNoU3RhY2soIGxlbiA+IDEgPyBqUXVlcnkudW5pcXVlKCByZXQgKSA6IHJldCApO1xuXHRcdHJldC5zZWxlY3RvciA9IHRoaXMuc2VsZWN0b3IgPyB0aGlzLnNlbGVjdG9yICsgXCIgXCIgKyBzZWxlY3RvciA6IHNlbGVjdG9yO1xuXHRcdHJldHVybiByZXQ7XG5cdH0sXG5cdGZpbHRlcjogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggd2lubm93KHRoaXMsIHNlbGVjdG9yIHx8IFtdLCBmYWxzZSkgKTtcblx0fSxcblx0bm90OiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKCB3aW5ub3codGhpcywgc2VsZWN0b3IgfHwgW10sIHRydWUpICk7XG5cdH0sXG5cdGlzOiBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0cmV0dXJuICEhd2lubm93KFxuXHRcdFx0dGhpcyxcblxuXHRcdFx0Ly8gSWYgdGhpcyBpcyBhIHBvc2l0aW9uYWwvcmVsYXRpdmUgc2VsZWN0b3IsIGNoZWNrIG1lbWJlcnNoaXAgaW4gdGhlIHJldHVybmVkIHNldFxuXHRcdFx0Ly8gc28gJChcInA6Zmlyc3RcIikuaXMoXCJwOmxhc3RcIikgd29uJ3QgcmV0dXJuIHRydWUgZm9yIGEgZG9jIHdpdGggdHdvIFwicFwiLlxuXHRcdFx0dHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICYmIHJuZWVkc0NvbnRleHQudGVzdCggc2VsZWN0b3IgKSA/XG5cdFx0XHRcdGpRdWVyeSggc2VsZWN0b3IgKSA6XG5cdFx0XHRcdHNlbGVjdG9yIHx8IFtdLFxuXHRcdFx0ZmFsc2Vcblx0XHQpLmxlbmd0aDtcblx0fVxufSk7XG5cblxuLy8gSW5pdGlhbGl6ZSBhIGpRdWVyeSBvYmplY3RcblxuXG4vLyBBIGNlbnRyYWwgcmVmZXJlbmNlIHRvIHRoZSByb290IGpRdWVyeShkb2N1bWVudClcbnZhciByb290alF1ZXJ5LFxuXG5cdC8vIEEgc2ltcGxlIHdheSB0byBjaGVjayBmb3IgSFRNTCBzdHJpbmdzXG5cdC8vIFByaW9yaXRpemUgI2lkIG92ZXIgPHRhZz4gdG8gYXZvaWQgWFNTIHZpYSBsb2NhdGlvbi5oYXNoICgjOTUyMSlcblx0Ly8gU3RyaWN0IEhUTUwgcmVjb2duaXRpb24gKCMxMTI5MDogbXVzdCBzdGFydCB3aXRoIDwpXG5cdHJxdWlja0V4cHIgPSAvXig/OlxccyooPFtcXHdcXFddKz4pW14+XSp8IyhbXFx3LV0qKSkkLyxcblxuXHRpbml0ID0galF1ZXJ5LmZuLmluaXQgPSBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cdFx0dmFyIG1hdGNoLCBlbGVtO1xuXG5cdFx0Ly8gSEFORExFOiAkKFwiXCIpLCAkKG51bGwpLCAkKHVuZGVmaW5lZCksICQoZmFsc2UpXG5cdFx0aWYgKCAhc2VsZWN0b3IgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHQvLyBIYW5kbGUgSFRNTCBzdHJpbmdzXG5cdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRpZiAoIHNlbGVjdG9yWzBdID09PSBcIjxcIiAmJiBzZWxlY3Rvclsgc2VsZWN0b3IubGVuZ3RoIC0gMSBdID09PSBcIj5cIiAmJiBzZWxlY3Rvci5sZW5ndGggPj0gMyApIHtcblx0XHRcdFx0Ly8gQXNzdW1lIHRoYXQgc3RyaW5ncyB0aGF0IHN0YXJ0IGFuZCBlbmQgd2l0aCA8PiBhcmUgSFRNTCBhbmQgc2tpcCB0aGUgcmVnZXggY2hlY2tcblx0XHRcdFx0bWF0Y2ggPSBbIG51bGwsIHNlbGVjdG9yLCBudWxsIF07XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdG1hdGNoID0gcnF1aWNrRXhwci5leGVjKCBzZWxlY3RvciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBNYXRjaCBodG1sIG9yIG1ha2Ugc3VyZSBubyBjb250ZXh0IGlzIHNwZWNpZmllZCBmb3IgI2lkXG5cdFx0XHRpZiAoIG1hdGNoICYmIChtYXRjaFsxXSB8fCAhY29udGV4dCkgKSB7XG5cblx0XHRcdFx0Ly8gSEFORExFOiAkKGh0bWwpIC0+ICQoYXJyYXkpXG5cdFx0XHRcdGlmICggbWF0Y2hbMV0gKSB7XG5cdFx0XHRcdFx0Y29udGV4dCA9IGNvbnRleHQgaW5zdGFuY2VvZiBqUXVlcnkgPyBjb250ZXh0WzBdIDogY29udGV4dDtcblxuXHRcdFx0XHRcdC8vIE9wdGlvbiB0byBydW4gc2NyaXB0cyBpcyB0cnVlIGZvciBiYWNrLWNvbXBhdFxuXHRcdFx0XHRcdC8vIEludGVudGlvbmFsbHkgbGV0IHRoZSBlcnJvciBiZSB0aHJvd24gaWYgcGFyc2VIVE1MIGlzIG5vdCBwcmVzZW50XG5cdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLCBqUXVlcnkucGFyc2VIVE1MKFxuXHRcdFx0XHRcdFx0bWF0Y2hbMV0sXG5cdFx0XHRcdFx0XHRjb250ZXh0ICYmIGNvbnRleHQubm9kZVR5cGUgPyBjb250ZXh0Lm93bmVyRG9jdW1lbnQgfHwgY29udGV4dCA6IGRvY3VtZW50LFxuXHRcdFx0XHRcdFx0dHJ1ZVxuXHRcdFx0XHRcdCkgKTtcblxuXHRcdFx0XHRcdC8vIEhBTkRMRTogJChodG1sLCBwcm9wcylcblx0XHRcdFx0XHRpZiAoIHJzaW5nbGVUYWcudGVzdCggbWF0Y2hbMV0gKSAmJiBqUXVlcnkuaXNQbGFpbk9iamVjdCggY29udGV4dCApICkge1xuXHRcdFx0XHRcdFx0Zm9yICggbWF0Y2ggaW4gY29udGV4dCApIHtcblx0XHRcdFx0XHRcdFx0Ly8gUHJvcGVydGllcyBvZiBjb250ZXh0IGFyZSBjYWxsZWQgYXMgbWV0aG9kcyBpZiBwb3NzaWJsZVxuXHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB0aGlzWyBtYXRjaCBdICkgKSB7XG5cdFx0XHRcdFx0XHRcdFx0dGhpc1sgbWF0Y2ggXSggY29udGV4dFsgbWF0Y2ggXSApO1xuXG5cdFx0XHRcdFx0XHRcdC8vIC4uLmFuZCBvdGhlcndpc2Ugc2V0IGFzIGF0dHJpYnV0ZXNcblx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHR0aGlzLmF0dHIoIG1hdGNoLCBjb250ZXh0WyBtYXRjaCBdICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblxuXHRcdFx0XHQvLyBIQU5ETEU6ICQoI2lkKVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdGVsZW0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCggbWF0Y2hbMl0gKTtcblxuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IEJsYWNrYmVycnkgNC42XG5cdFx0XHRcdFx0Ly8gZ0VCSUQgcmV0dXJucyBub2RlcyBubyBsb25nZXIgaW4gdGhlIGRvY3VtZW50ICgjNjk2Mylcblx0XHRcdFx0XHRpZiAoIGVsZW0gJiYgZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRcdFx0Ly8gSW5qZWN0IHRoZSBlbGVtZW50IGRpcmVjdGx5IGludG8gdGhlIGpRdWVyeSBvYmplY3Rcblx0XHRcdFx0XHRcdHRoaXMubGVuZ3RoID0gMTtcblx0XHRcdFx0XHRcdHRoaXNbMF0gPSBlbGVtO1xuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdHRoaXMuY29udGV4dCA9IGRvY3VtZW50O1xuXHRcdFx0XHRcdHRoaXMuc2VsZWN0b3IgPSBzZWxlY3Rvcjtcblx0XHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdFx0fVxuXG5cdFx0XHQvLyBIQU5ETEU6ICQoZXhwciwgJCguLi4pKVxuXHRcdFx0fSBlbHNlIGlmICggIWNvbnRleHQgfHwgY29udGV4dC5qcXVlcnkgKSB7XG5cdFx0XHRcdHJldHVybiAoIGNvbnRleHQgfHwgcm9vdGpRdWVyeSApLmZpbmQoIHNlbGVjdG9yICk7XG5cblx0XHRcdC8vIEhBTkRMRTogJChleHByLCBjb250ZXh0KVxuXHRcdFx0Ly8gKHdoaWNoIGlzIGp1c3QgZXF1aXZhbGVudCB0bzogJChjb250ZXh0KS5maW5kKGV4cHIpXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gdGhpcy5jb25zdHJ1Y3RvciggY29udGV4dCApLmZpbmQoIHNlbGVjdG9yICk7XG5cdFx0XHR9XG5cblx0XHQvLyBIQU5ETEU6ICQoRE9NRWxlbWVudClcblx0XHR9IGVsc2UgaWYgKCBzZWxlY3Rvci5ub2RlVHlwZSApIHtcblx0XHRcdHRoaXMuY29udGV4dCA9IHRoaXNbMF0gPSBzZWxlY3Rvcjtcblx0XHRcdHRoaXMubGVuZ3RoID0gMTtcblx0XHRcdHJldHVybiB0aGlzO1xuXG5cdFx0Ly8gSEFORExFOiAkKGZ1bmN0aW9uKVxuXHRcdC8vIFNob3J0Y3V0IGZvciBkb2N1bWVudCByZWFkeVxuXHRcdH0gZWxzZSBpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBzZWxlY3RvciApICkge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiByb290alF1ZXJ5LnJlYWR5ICE9PSBcInVuZGVmaW5lZFwiID9cblx0XHRcdFx0cm9vdGpRdWVyeS5yZWFkeSggc2VsZWN0b3IgKSA6XG5cdFx0XHRcdC8vIEV4ZWN1dGUgaW1tZWRpYXRlbHkgaWYgcmVhZHkgaXMgbm90IHByZXNlbnRcblx0XHRcdFx0c2VsZWN0b3IoIGpRdWVyeSApO1xuXHRcdH1cblxuXHRcdGlmICggc2VsZWN0b3Iuc2VsZWN0b3IgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHRoaXMuc2VsZWN0b3IgPSBzZWxlY3Rvci5zZWxlY3Rvcjtcblx0XHRcdHRoaXMuY29udGV4dCA9IHNlbGVjdG9yLmNvbnRleHQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpRdWVyeS5tYWtlQXJyYXkoIHNlbGVjdG9yLCB0aGlzICk7XG5cdH07XG5cbi8vIEdpdmUgdGhlIGluaXQgZnVuY3Rpb24gdGhlIGpRdWVyeSBwcm90b3R5cGUgZm9yIGxhdGVyIGluc3RhbnRpYXRpb25cbmluaXQucHJvdG90eXBlID0galF1ZXJ5LmZuO1xuXG4vLyBJbml0aWFsaXplIGNlbnRyYWwgcmVmZXJlbmNlXG5yb290alF1ZXJ5ID0galF1ZXJ5KCBkb2N1bWVudCApO1xuXG5cbnZhciBycGFyZW50c3ByZXYgPSAvXig/OnBhcmVudHN8cHJldig/OlVudGlsfEFsbCkpLyxcblx0Ly8gTWV0aG9kcyBndWFyYW50ZWVkIHRvIHByb2R1Y2UgYSB1bmlxdWUgc2V0IHdoZW4gc3RhcnRpbmcgZnJvbSBhIHVuaXF1ZSBzZXRcblx0Z3VhcmFudGVlZFVuaXF1ZSA9IHtcblx0XHRjaGlsZHJlbjogdHJ1ZSxcblx0XHRjb250ZW50czogdHJ1ZSxcblx0XHRuZXh0OiB0cnVlLFxuXHRcdHByZXY6IHRydWVcblx0fTtcblxualF1ZXJ5LmV4dGVuZCh7XG5cdGRpcjogZnVuY3Rpb24oIGVsZW0sIGRpciwgdW50aWwgKSB7XG5cdFx0dmFyIG1hdGNoZWQgPSBbXSxcblx0XHRcdHRydW5jYXRlID0gdW50aWwgIT09IHVuZGVmaW5lZDtcblxuXHRcdHdoaWxlICggKGVsZW0gPSBlbGVtWyBkaXIgXSkgJiYgZWxlbS5ub2RlVHlwZSAhPT0gOSApIHtcblx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0aWYgKCB0cnVuY2F0ZSAmJiBqUXVlcnkoIGVsZW0gKS5pcyggdW50aWwgKSApIHtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0XHRtYXRjaGVkLnB1c2goIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIG1hdGNoZWQ7XG5cdH0sXG5cblx0c2libGluZzogZnVuY3Rpb24oIG4sIGVsZW0gKSB7XG5cdFx0dmFyIG1hdGNoZWQgPSBbXTtcblxuXHRcdGZvciAoIDsgbjsgbiA9IG4ubmV4dFNpYmxpbmcgKSB7XG5cdFx0XHRpZiAoIG4ubm9kZVR5cGUgPT09IDEgJiYgbiAhPT0gZWxlbSApIHtcblx0XHRcdFx0bWF0Y2hlZC5wdXNoKCBuICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIG1hdGNoZWQ7XG5cdH1cbn0pO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKHtcblx0aGFzOiBmdW5jdGlvbiggdGFyZ2V0ICkge1xuXHRcdHZhciB0YXJnZXRzID0galF1ZXJ5KCB0YXJnZXQsIHRoaXMgKSxcblx0XHRcdGwgPSB0YXJnZXRzLmxlbmd0aDtcblxuXHRcdHJldHVybiB0aGlzLmZpbHRlcihmdW5jdGlvbigpIHtcblx0XHRcdHZhciBpID0gMDtcblx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0aWYgKCBqUXVlcnkuY29udGFpbnMoIHRoaXMsIHRhcmdldHNbaV0gKSApIHtcblx0XHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdGNsb3Nlc3Q6IGZ1bmN0aW9uKCBzZWxlY3RvcnMsIGNvbnRleHQgKSB7XG5cdFx0dmFyIGN1cixcblx0XHRcdGkgPSAwLFxuXHRcdFx0bCA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0bWF0Y2hlZCA9IFtdLFxuXHRcdFx0cG9zID0gcm5lZWRzQ29udGV4dC50ZXN0KCBzZWxlY3RvcnMgKSB8fCB0eXBlb2Ygc2VsZWN0b3JzICE9PSBcInN0cmluZ1wiID9cblx0XHRcdFx0alF1ZXJ5KCBzZWxlY3RvcnMsIGNvbnRleHQgfHwgdGhpcy5jb250ZXh0ICkgOlxuXHRcdFx0XHQwO1xuXG5cdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0Zm9yICggY3VyID0gdGhpc1tpXTsgY3VyICYmIGN1ciAhPT0gY29udGV4dDsgY3VyID0gY3VyLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdC8vIEFsd2F5cyBza2lwIGRvY3VtZW50IGZyYWdtZW50c1xuXHRcdFx0XHRpZiAoIGN1ci5ub2RlVHlwZSA8IDExICYmIChwb3MgP1xuXHRcdFx0XHRcdHBvcy5pbmRleChjdXIpID4gLTEgOlxuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgcGFzcyBub24tZWxlbWVudHMgdG8gU2l6emxlXG5cdFx0XHRcdFx0Y3VyLm5vZGVUeXBlID09PSAxICYmXG5cdFx0XHRcdFx0XHRqUXVlcnkuZmluZC5tYXRjaGVzU2VsZWN0b3IoY3VyLCBzZWxlY3RvcnMpKSApIHtcblxuXHRcdFx0XHRcdG1hdGNoZWQucHVzaCggY3VyICk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5wdXNoU3RhY2soIG1hdGNoZWQubGVuZ3RoID4gMSA/IGpRdWVyeS51bmlxdWUoIG1hdGNoZWQgKSA6IG1hdGNoZWQgKTtcblx0fSxcblxuXHQvLyBEZXRlcm1pbmUgdGhlIHBvc2l0aW9uIG9mIGFuIGVsZW1lbnQgd2l0aGluIHRoZSBzZXRcblx0aW5kZXg6IGZ1bmN0aW9uKCBlbGVtICkge1xuXG5cdFx0Ly8gTm8gYXJndW1lbnQsIHJldHVybiBpbmRleCBpbiBwYXJlbnRcblx0XHRpZiAoICFlbGVtICkge1xuXHRcdFx0cmV0dXJuICggdGhpc1sgMCBdICYmIHRoaXNbIDAgXS5wYXJlbnROb2RlICkgPyB0aGlzLmZpcnN0KCkucHJldkFsbCgpLmxlbmd0aCA6IC0xO1xuXHRcdH1cblxuXHRcdC8vIEluZGV4IGluIHNlbGVjdG9yXG5cdFx0aWYgKCB0eXBlb2YgZWxlbSA9PT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHJldHVybiBpbmRleE9mLmNhbGwoIGpRdWVyeSggZWxlbSApLCB0aGlzWyAwIF0gKTtcblx0XHR9XG5cblx0XHQvLyBMb2NhdGUgdGhlIHBvc2l0aW9uIG9mIHRoZSBkZXNpcmVkIGVsZW1lbnRcblx0XHRyZXR1cm4gaW5kZXhPZi5jYWxsKCB0aGlzLFxuXG5cdFx0XHQvLyBJZiBpdCByZWNlaXZlcyBhIGpRdWVyeSBvYmplY3QsIHRoZSBmaXJzdCBlbGVtZW50IGlzIHVzZWRcblx0XHRcdGVsZW0uanF1ZXJ5ID8gZWxlbVsgMCBdIDogZWxlbVxuXHRcdCk7XG5cdH0sXG5cblx0YWRkOiBmdW5jdGlvbiggc2VsZWN0b3IsIGNvbnRleHQgKSB7XG5cdFx0cmV0dXJuIHRoaXMucHVzaFN0YWNrKFxuXHRcdFx0alF1ZXJ5LnVuaXF1ZShcblx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCB0aGlzLmdldCgpLCBqUXVlcnkoIHNlbGVjdG9yLCBjb250ZXh0ICkgKVxuXHRcdFx0KVxuXHRcdCk7XG5cdH0sXG5cblx0YWRkQmFjazogZnVuY3Rpb24oIHNlbGVjdG9yICkge1xuXHRcdHJldHVybiB0aGlzLmFkZCggc2VsZWN0b3IgPT0gbnVsbCA/XG5cdFx0XHR0aGlzLnByZXZPYmplY3QgOiB0aGlzLnByZXZPYmplY3QuZmlsdGVyKHNlbGVjdG9yKVxuXHRcdCk7XG5cdH1cbn0pO1xuXG5mdW5jdGlvbiBzaWJsaW5nKCBjdXIsIGRpciApIHtcblx0d2hpbGUgKCAoY3VyID0gY3VyW2Rpcl0pICYmIGN1ci5ub2RlVHlwZSAhPT0gMSApIHt9XG5cdHJldHVybiBjdXI7XG59XG5cbmpRdWVyeS5lYWNoKHtcblx0cGFyZW50OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHR2YXIgcGFyZW50ID0gZWxlbS5wYXJlbnROb2RlO1xuXHRcdHJldHVybiBwYXJlbnQgJiYgcGFyZW50Lm5vZGVUeXBlICE9PSAxMSA/IHBhcmVudCA6IG51bGw7XG5cdH0sXG5cdHBhcmVudHM6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBqUXVlcnkuZGlyKCBlbGVtLCBcInBhcmVudE5vZGVcIiApO1xuXHR9LFxuXHRwYXJlbnRzVW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmRpciggZWxlbSwgXCJwYXJlbnROb2RlXCIsIHVudGlsICk7XG5cdH0sXG5cdG5leHQ6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBzaWJsaW5nKCBlbGVtLCBcIm5leHRTaWJsaW5nXCIgKTtcblx0fSxcblx0cHJldjogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIHNpYmxpbmcoIGVsZW0sIFwicHJldmlvdXNTaWJsaW5nXCIgKTtcblx0fSxcblx0bmV4dEFsbDogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5kaXIoIGVsZW0sIFwibmV4dFNpYmxpbmdcIiApO1xuXHR9LFxuXHRwcmV2QWxsOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmRpciggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiApO1xuXHR9LFxuXHRuZXh0VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmRpciggZWxlbSwgXCJuZXh0U2libGluZ1wiLCB1bnRpbCApO1xuXHR9LFxuXHRwcmV2VW50aWw6IGZ1bmN0aW9uKCBlbGVtLCBpLCB1bnRpbCApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmRpciggZWxlbSwgXCJwcmV2aW91c1NpYmxpbmdcIiwgdW50aWwgKTtcblx0fSxcblx0c2libGluZ3M6IGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdHJldHVybiBqUXVlcnkuc2libGluZyggKCBlbGVtLnBhcmVudE5vZGUgfHwge30gKS5maXJzdENoaWxkLCBlbGVtICk7XG5cdH0sXG5cdGNoaWxkcmVuOiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRyZXR1cm4galF1ZXJ5LnNpYmxpbmcoIGVsZW0uZmlyc3RDaGlsZCApO1xuXHR9LFxuXHRjb250ZW50czogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGVsZW0uY29udGVudERvY3VtZW50IHx8IGpRdWVyeS5tZXJnZSggW10sIGVsZW0uY2hpbGROb2RlcyApO1xuXHR9XG59LCBmdW5jdGlvbiggbmFtZSwgZm4gKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHVudGlsLCBzZWxlY3RvciApIHtcblx0XHR2YXIgbWF0Y2hlZCA9IGpRdWVyeS5tYXAoIHRoaXMsIGZuLCB1bnRpbCApO1xuXG5cdFx0aWYgKCBuYW1lLnNsaWNlKCAtNSApICE9PSBcIlVudGlsXCIgKSB7XG5cdFx0XHRzZWxlY3RvciA9IHVudGlsO1xuXHRcdH1cblxuXHRcdGlmICggc2VsZWN0b3IgJiYgdHlwZW9mIHNlbGVjdG9yID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0bWF0Y2hlZCA9IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCBtYXRjaGVkICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB0aGlzLmxlbmd0aCA+IDEgKSB7XG5cdFx0XHQvLyBSZW1vdmUgZHVwbGljYXRlc1xuXHRcdFx0aWYgKCAhZ3VhcmFudGVlZFVuaXF1ZVsgbmFtZSBdICkge1xuXHRcdFx0XHRqUXVlcnkudW5pcXVlKCBtYXRjaGVkICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFJldmVyc2Ugb3JkZXIgZm9yIHBhcmVudHMqIGFuZCBwcmV2LWRlcml2YXRpdmVzXG5cdFx0XHRpZiAoIHJwYXJlbnRzcHJldi50ZXN0KCBuYW1lICkgKSB7XG5cdFx0XHRcdG1hdGNoZWQucmV2ZXJzZSgpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggbWF0Y2hlZCApO1xuXHR9O1xufSk7XG52YXIgcm5vdHdoaXRlID0gKC9cXFMrL2cpO1xuXG5cblxuLy8gU3RyaW5nIHRvIE9iamVjdCBvcHRpb25zIGZvcm1hdCBjYWNoZVxudmFyIG9wdGlvbnNDYWNoZSA9IHt9O1xuXG4vLyBDb252ZXJ0IFN0cmluZy1mb3JtYXR0ZWQgb3B0aW9ucyBpbnRvIE9iamVjdC1mb3JtYXR0ZWQgb25lcyBhbmQgc3RvcmUgaW4gY2FjaGVcbmZ1bmN0aW9uIGNyZWF0ZU9wdGlvbnMoIG9wdGlvbnMgKSB7XG5cdHZhciBvYmplY3QgPSBvcHRpb25zQ2FjaGVbIG9wdGlvbnMgXSA9IHt9O1xuXHRqUXVlcnkuZWFjaCggb3B0aW9ucy5tYXRjaCggcm5vdHdoaXRlICkgfHwgW10sIGZ1bmN0aW9uKCBfLCBmbGFnICkge1xuXHRcdG9iamVjdFsgZmxhZyBdID0gdHJ1ZTtcblx0fSk7XG5cdHJldHVybiBvYmplY3Q7XG59XG5cbi8qXG4gKiBDcmVhdGUgYSBjYWxsYmFjayBsaXN0IHVzaW5nIHRoZSBmb2xsb3dpbmcgcGFyYW1ldGVyczpcbiAqXG4gKlx0b3B0aW9uczogYW4gb3B0aW9uYWwgbGlzdCBvZiBzcGFjZS1zZXBhcmF0ZWQgb3B0aW9ucyB0aGF0IHdpbGwgY2hhbmdlIGhvd1xuICpcdFx0XHR0aGUgY2FsbGJhY2sgbGlzdCBiZWhhdmVzIG9yIGEgbW9yZSB0cmFkaXRpb25hbCBvcHRpb24gb2JqZWN0XG4gKlxuICogQnkgZGVmYXVsdCBhIGNhbGxiYWNrIGxpc3Qgd2lsbCBhY3QgbGlrZSBhbiBldmVudCBjYWxsYmFjayBsaXN0IGFuZCBjYW4gYmVcbiAqIFwiZmlyZWRcIiBtdWx0aXBsZSB0aW1lcy5cbiAqXG4gKiBQb3NzaWJsZSBvcHRpb25zOlxuICpcbiAqXHRvbmNlOlx0XHRcdHdpbGwgZW5zdXJlIHRoZSBjYWxsYmFjayBsaXN0IGNhbiBvbmx5IGJlIGZpcmVkIG9uY2UgKGxpa2UgYSBEZWZlcnJlZClcbiAqXG4gKlx0bWVtb3J5Olx0XHRcdHdpbGwga2VlcCB0cmFjayBvZiBwcmV2aW91cyB2YWx1ZXMgYW5kIHdpbGwgY2FsbCBhbnkgY2FsbGJhY2sgYWRkZWRcbiAqXHRcdFx0XHRcdGFmdGVyIHRoZSBsaXN0IGhhcyBiZWVuIGZpcmVkIHJpZ2h0IGF3YXkgd2l0aCB0aGUgbGF0ZXN0IFwibWVtb3JpemVkXCJcbiAqXHRcdFx0XHRcdHZhbHVlcyAobGlrZSBhIERlZmVycmVkKVxuICpcbiAqXHR1bmlxdWU6XHRcdFx0d2lsbCBlbnN1cmUgYSBjYWxsYmFjayBjYW4gb25seSBiZSBhZGRlZCBvbmNlIChubyBkdXBsaWNhdGUgaW4gdGhlIGxpc3QpXG4gKlxuICpcdHN0b3BPbkZhbHNlOlx0aW50ZXJydXB0IGNhbGxpbmdzIHdoZW4gYSBjYWxsYmFjayByZXR1cm5zIGZhbHNlXG4gKlxuICovXG5qUXVlcnkuQ2FsbGJhY2tzID0gZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cblx0Ly8gQ29udmVydCBvcHRpb25zIGZyb20gU3RyaW5nLWZvcm1hdHRlZCB0byBPYmplY3QtZm9ybWF0dGVkIGlmIG5lZWRlZFxuXHQvLyAod2UgY2hlY2sgaW4gY2FjaGUgZmlyc3QpXG5cdG9wdGlvbnMgPSB0eXBlb2Ygb3B0aW9ucyA9PT0gXCJzdHJpbmdcIiA/XG5cdFx0KCBvcHRpb25zQ2FjaGVbIG9wdGlvbnMgXSB8fCBjcmVhdGVPcHRpb25zKCBvcHRpb25zICkgKSA6XG5cdFx0alF1ZXJ5LmV4dGVuZCgge30sIG9wdGlvbnMgKTtcblxuXHR2YXIgLy8gTGFzdCBmaXJlIHZhbHVlIChmb3Igbm9uLWZvcmdldHRhYmxlIGxpc3RzKVxuXHRcdG1lbW9yeSxcblx0XHQvLyBGbGFnIHRvIGtub3cgaWYgbGlzdCB3YXMgYWxyZWFkeSBmaXJlZFxuXHRcdGZpcmVkLFxuXHRcdC8vIEZsYWcgdG8ga25vdyBpZiBsaXN0IGlzIGN1cnJlbnRseSBmaXJpbmdcblx0XHRmaXJpbmcsXG5cdFx0Ly8gRmlyc3QgY2FsbGJhY2sgdG8gZmlyZSAodXNlZCBpbnRlcm5hbGx5IGJ5IGFkZCBhbmQgZmlyZVdpdGgpXG5cdFx0ZmlyaW5nU3RhcnQsXG5cdFx0Ly8gRW5kIG9mIHRoZSBsb29wIHdoZW4gZmlyaW5nXG5cdFx0ZmlyaW5nTGVuZ3RoLFxuXHRcdC8vIEluZGV4IG9mIGN1cnJlbnRseSBmaXJpbmcgY2FsbGJhY2sgKG1vZGlmaWVkIGJ5IHJlbW92ZSBpZiBuZWVkZWQpXG5cdFx0ZmlyaW5nSW5kZXgsXG5cdFx0Ly8gQWN0dWFsIGNhbGxiYWNrIGxpc3Rcblx0XHRsaXN0ID0gW10sXG5cdFx0Ly8gU3RhY2sgb2YgZmlyZSBjYWxscyBmb3IgcmVwZWF0YWJsZSBsaXN0c1xuXHRcdHN0YWNrID0gIW9wdGlvbnMub25jZSAmJiBbXSxcblx0XHQvLyBGaXJlIGNhbGxiYWNrc1xuXHRcdGZpcmUgPSBmdW5jdGlvbiggZGF0YSApIHtcblx0XHRcdG1lbW9yeSA9IG9wdGlvbnMubWVtb3J5ICYmIGRhdGE7XG5cdFx0XHRmaXJlZCA9IHRydWU7XG5cdFx0XHRmaXJpbmdJbmRleCA9IGZpcmluZ1N0YXJ0IHx8IDA7XG5cdFx0XHRmaXJpbmdTdGFydCA9IDA7XG5cdFx0XHRmaXJpbmdMZW5ndGggPSBsaXN0Lmxlbmd0aDtcblx0XHRcdGZpcmluZyA9IHRydWU7XG5cdFx0XHRmb3IgKCA7IGxpc3QgJiYgZmlyaW5nSW5kZXggPCBmaXJpbmdMZW5ndGg7IGZpcmluZ0luZGV4KysgKSB7XG5cdFx0XHRcdGlmICggbGlzdFsgZmlyaW5nSW5kZXggXS5hcHBseSggZGF0YVsgMCBdLCBkYXRhWyAxIF0gKSA9PT0gZmFsc2UgJiYgb3B0aW9ucy5zdG9wT25GYWxzZSApIHtcblx0XHRcdFx0XHRtZW1vcnkgPSBmYWxzZTsgLy8gVG8gcHJldmVudCBmdXJ0aGVyIGNhbGxzIHVzaW5nIGFkZFxuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRmaXJpbmcgPSBmYWxzZTtcblx0XHRcdGlmICggbGlzdCApIHtcblx0XHRcdFx0aWYgKCBzdGFjayApIHtcblx0XHRcdFx0XHRpZiAoIHN0YWNrLmxlbmd0aCApIHtcblx0XHRcdFx0XHRcdGZpcmUoIHN0YWNrLnNoaWZ0KCkgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSBpZiAoIG1lbW9yeSApIHtcblx0XHRcdFx0XHRsaXN0ID0gW107XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c2VsZi5kaXNhYmxlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9LFxuXHRcdC8vIEFjdHVhbCBDYWxsYmFja3Mgb2JqZWN0XG5cdFx0c2VsZiA9IHtcblx0XHRcdC8vIEFkZCBhIGNhbGxiYWNrIG9yIGEgY29sbGVjdGlvbiBvZiBjYWxsYmFja3MgdG8gdGhlIGxpc3Rcblx0XHRcdGFkZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggbGlzdCApIHtcblx0XHRcdFx0XHQvLyBGaXJzdCwgd2Ugc2F2ZSB0aGUgY3VycmVudCBsZW5ndGhcblx0XHRcdFx0XHR2YXIgc3RhcnQgPSBsaXN0Lmxlbmd0aDtcblx0XHRcdFx0XHQoZnVuY3Rpb24gYWRkKCBhcmdzICkge1xuXHRcdFx0XHRcdFx0alF1ZXJ5LmVhY2goIGFyZ3MsIGZ1bmN0aW9uKCBfLCBhcmcgKSB7XG5cdFx0XHRcdFx0XHRcdHZhciB0eXBlID0galF1ZXJ5LnR5cGUoIGFyZyApO1xuXHRcdFx0XHRcdFx0XHRpZiAoIHR5cGUgPT09IFwiZnVuY3Rpb25cIiApIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoICFvcHRpb25zLnVuaXF1ZSB8fCAhc2VsZi5oYXMoIGFyZyApICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0bGlzdC5wdXNoKCBhcmcgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGFyZyAmJiBhcmcubGVuZ3RoICYmIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gSW5zcGVjdCByZWN1cnNpdmVseVxuXHRcdFx0XHRcdFx0XHRcdGFkZCggYXJnICk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdH0pKCBhcmd1bWVudHMgKTtcblx0XHRcdFx0XHQvLyBEbyB3ZSBuZWVkIHRvIGFkZCB0aGUgY2FsbGJhY2tzIHRvIHRoZVxuXHRcdFx0XHRcdC8vIGN1cnJlbnQgZmlyaW5nIGJhdGNoP1xuXHRcdFx0XHRcdGlmICggZmlyaW5nICkge1xuXHRcdFx0XHRcdFx0ZmlyaW5nTGVuZ3RoID0gbGlzdC5sZW5ndGg7XG5cdFx0XHRcdFx0Ly8gV2l0aCBtZW1vcnksIGlmIHdlJ3JlIG5vdCBmaXJpbmcgdGhlblxuXHRcdFx0XHRcdC8vIHdlIHNob3VsZCBjYWxsIHJpZ2h0IGF3YXlcblx0XHRcdFx0XHR9IGVsc2UgaWYgKCBtZW1vcnkgKSB7XG5cdFx0XHRcdFx0XHRmaXJpbmdTdGFydCA9IHN0YXJ0O1xuXHRcdFx0XHRcdFx0ZmlyZSggbWVtb3J5ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fSxcblx0XHRcdC8vIFJlbW92ZSBhIGNhbGxiYWNrIGZyb20gdGhlIGxpc3Rcblx0XHRcdHJlbW92ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggbGlzdCApIHtcblx0XHRcdFx0XHRqUXVlcnkuZWFjaCggYXJndW1lbnRzLCBmdW5jdGlvbiggXywgYXJnICkge1xuXHRcdFx0XHRcdFx0dmFyIGluZGV4O1xuXHRcdFx0XHRcdFx0d2hpbGUgKCAoIGluZGV4ID0galF1ZXJ5LmluQXJyYXkoIGFyZywgbGlzdCwgaW5kZXggKSApID4gLTEgKSB7XG5cdFx0XHRcdFx0XHRcdGxpc3Quc3BsaWNlKCBpbmRleCwgMSApO1xuXHRcdFx0XHRcdFx0XHQvLyBIYW5kbGUgZmlyaW5nIGluZGV4ZXNcblx0XHRcdFx0XHRcdFx0aWYgKCBmaXJpbmcgKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBpbmRleCA8PSBmaXJpbmdMZW5ndGggKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRmaXJpbmdMZW5ndGgtLTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCBpbmRleCA8PSBmaXJpbmdJbmRleCApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGZpcmluZ0luZGV4LS07XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0Ly8gQ2hlY2sgaWYgYSBnaXZlbiBjYWxsYmFjayBpcyBpbiB0aGUgbGlzdC5cblx0XHRcdC8vIElmIG5vIGFyZ3VtZW50IGlzIGdpdmVuLCByZXR1cm4gd2hldGhlciBvciBub3QgbGlzdCBoYXMgY2FsbGJhY2tzIGF0dGFjaGVkLlxuXHRcdFx0aGFzOiBmdW5jdGlvbiggZm4gKSB7XG5cdFx0XHRcdHJldHVybiBmbiA/IGpRdWVyeS5pbkFycmF5KCBmbiwgbGlzdCApID4gLTEgOiAhISggbGlzdCAmJiBsaXN0Lmxlbmd0aCApO1xuXHRcdFx0fSxcblx0XHRcdC8vIFJlbW92ZSBhbGwgY2FsbGJhY2tzIGZyb20gdGhlIGxpc3Rcblx0XHRcdGVtcHR5OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0bGlzdCA9IFtdO1xuXHRcdFx0XHRmaXJpbmdMZW5ndGggPSAwO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHQvLyBIYXZlIHRoZSBsaXN0IGRvIG5vdGhpbmcgYW55bW9yZVxuXHRcdFx0ZGlzYWJsZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGxpc3QgPSBzdGFjayA9IG1lbW9yeSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHR9LFxuXHRcdFx0Ly8gSXMgaXQgZGlzYWJsZWQ/XG5cdFx0XHRkaXNhYmxlZDogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHJldHVybiAhbGlzdDtcblx0XHRcdH0sXG5cdFx0XHQvLyBMb2NrIHRoZSBsaXN0IGluIGl0cyBjdXJyZW50IHN0YXRlXG5cdFx0XHRsb2NrOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0c3RhY2sgPSB1bmRlZmluZWQ7XG5cdFx0XHRcdGlmICggIW1lbW9yeSApIHtcblx0XHRcdFx0XHRzZWxmLmRpc2FibGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHQvLyBJcyBpdCBsb2NrZWQ/XG5cdFx0XHRsb2NrZWQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRyZXR1cm4gIXN0YWNrO1xuXHRcdFx0fSxcblx0XHRcdC8vIENhbGwgYWxsIGNhbGxiYWNrcyB3aXRoIHRoZSBnaXZlbiBjb250ZXh0IGFuZCBhcmd1bWVudHNcblx0XHRcdGZpcmVXaXRoOiBmdW5jdGlvbiggY29udGV4dCwgYXJncyApIHtcblx0XHRcdFx0aWYgKCBsaXN0ICYmICggIWZpcmVkIHx8IHN0YWNrICkgKSB7XG5cdFx0XHRcdFx0YXJncyA9IGFyZ3MgfHwgW107XG5cdFx0XHRcdFx0YXJncyA9IFsgY29udGV4dCwgYXJncy5zbGljZSA/IGFyZ3Muc2xpY2UoKSA6IGFyZ3MgXTtcblx0XHRcdFx0XHRpZiAoIGZpcmluZyApIHtcblx0XHRcdFx0XHRcdHN0YWNrLnB1c2goIGFyZ3MgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0ZmlyZSggYXJncyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHQvLyBDYWxsIGFsbCB0aGUgY2FsbGJhY2tzIHdpdGggdGhlIGdpdmVuIGFyZ3VtZW50c1xuXHRcdFx0ZmlyZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHNlbGYuZmlyZVdpdGgoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH0sXG5cdFx0XHQvLyBUbyBrbm93IGlmIHRoZSBjYWxsYmFja3MgaGF2ZSBhbHJlYWR5IGJlZW4gY2FsbGVkIGF0IGxlYXN0IG9uY2Vcblx0XHRcdGZpcmVkOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0cmV0dXJuICEhZmlyZWQ7XG5cdFx0XHR9XG5cdFx0fTtcblxuXHRyZXR1cm4gc2VsZjtcbn07XG5cblxualF1ZXJ5LmV4dGVuZCh7XG5cblx0RGVmZXJyZWQ6IGZ1bmN0aW9uKCBmdW5jICkge1xuXHRcdHZhciB0dXBsZXMgPSBbXG5cdFx0XHRcdC8vIGFjdGlvbiwgYWRkIGxpc3RlbmVyLCBsaXN0ZW5lciBsaXN0LCBmaW5hbCBzdGF0ZVxuXHRcdFx0XHRbIFwicmVzb2x2ZVwiLCBcImRvbmVcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCBcInJlc29sdmVkXCIgXSxcblx0XHRcdFx0WyBcInJlamVjdFwiLCBcImZhaWxcIiwgalF1ZXJ5LkNhbGxiYWNrcyhcIm9uY2UgbWVtb3J5XCIpLCBcInJlamVjdGVkXCIgXSxcblx0XHRcdFx0WyBcIm5vdGlmeVwiLCBcInByb2dyZXNzXCIsIGpRdWVyeS5DYWxsYmFja3MoXCJtZW1vcnlcIikgXVxuXHRcdFx0XSxcblx0XHRcdHN0YXRlID0gXCJwZW5kaW5nXCIsXG5cdFx0XHRwcm9taXNlID0ge1xuXHRcdFx0XHRzdGF0ZTogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHN0YXRlO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHRhbHdheXM6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGRlZmVycmVkLmRvbmUoIGFyZ3VtZW50cyApLmZhaWwoIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9LFxuXHRcdFx0XHR0aGVuOiBmdW5jdGlvbiggLyogZm5Eb25lLCBmbkZhaWwsIGZuUHJvZ3Jlc3MgKi8gKSB7XG5cdFx0XHRcdFx0dmFyIGZucyA9IGFyZ3VtZW50cztcblx0XHRcdFx0XHRyZXR1cm4galF1ZXJ5LkRlZmVycmVkKGZ1bmN0aW9uKCBuZXdEZWZlciApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBpLCB0dXBsZSApIHtcblx0XHRcdFx0XHRcdFx0dmFyIGZuID0galF1ZXJ5LmlzRnVuY3Rpb24oIGZuc1sgaSBdICkgJiYgZm5zWyBpIF07XG5cdFx0XHRcdFx0XHRcdC8vIGRlZmVycmVkWyBkb25lIHwgZmFpbCB8IHByb2dyZXNzIF0gZm9yIGZvcndhcmRpbmcgYWN0aW9ucyB0byBuZXdEZWZlclxuXHRcdFx0XHRcdFx0XHRkZWZlcnJlZFsgdHVwbGVbMV0gXShmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmV0dXJuZWQgPSBmbiAmJiBmbi5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKCByZXR1cm5lZCAmJiBqUXVlcnkuaXNGdW5jdGlvbiggcmV0dXJuZWQucHJvbWlzZSApICkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmV0dXJuZWQucHJvbWlzZSgpXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5kb25lKCBuZXdEZWZlci5yZXNvbHZlIClcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmZhaWwoIG5ld0RlZmVyLnJlamVjdCApXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5wcm9ncmVzcyggbmV3RGVmZXIubm90aWZ5ICk7XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdG5ld0RlZmVyWyB0dXBsZVsgMCBdICsgXCJXaXRoXCIgXSggdGhpcyA9PT0gcHJvbWlzZSA/IG5ld0RlZmVyLnByb21pc2UoKSA6IHRoaXMsIGZuID8gWyByZXR1cm5lZCBdIDogYXJndW1lbnRzICk7XG5cdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0Zm5zID0gbnVsbDtcblx0XHRcdFx0XHR9KS5wcm9taXNlKCk7XG5cdFx0XHRcdH0sXG5cdFx0XHRcdC8vIEdldCBhIHByb21pc2UgZm9yIHRoaXMgZGVmZXJyZWRcblx0XHRcdFx0Ly8gSWYgb2JqIGlzIHByb3ZpZGVkLCB0aGUgcHJvbWlzZSBhc3BlY3QgaXMgYWRkZWQgdG8gdGhlIG9iamVjdFxuXHRcdFx0XHRwcm9taXNlOiBmdW5jdGlvbiggb2JqICkge1xuXHRcdFx0XHRcdHJldHVybiBvYmogIT0gbnVsbCA/IGpRdWVyeS5leHRlbmQoIG9iaiwgcHJvbWlzZSApIDogcHJvbWlzZTtcblx0XHRcdFx0fVxuXHRcdFx0fSxcblx0XHRcdGRlZmVycmVkID0ge307XG5cblx0XHQvLyBLZWVwIHBpcGUgZm9yIGJhY2stY29tcGF0XG5cdFx0cHJvbWlzZS5waXBlID0gcHJvbWlzZS50aGVuO1xuXG5cdFx0Ly8gQWRkIGxpc3Qtc3BlY2lmaWMgbWV0aG9kc1xuXHRcdGpRdWVyeS5lYWNoKCB0dXBsZXMsIGZ1bmN0aW9uKCBpLCB0dXBsZSApIHtcblx0XHRcdHZhciBsaXN0ID0gdHVwbGVbIDIgXSxcblx0XHRcdFx0c3RhdGVTdHJpbmcgPSB0dXBsZVsgMyBdO1xuXG5cdFx0XHQvLyBwcm9taXNlWyBkb25lIHwgZmFpbCB8IHByb2dyZXNzIF0gPSBsaXN0LmFkZFxuXHRcdFx0cHJvbWlzZVsgdHVwbGVbMV0gXSA9IGxpc3QuYWRkO1xuXG5cdFx0XHQvLyBIYW5kbGUgc3RhdGVcblx0XHRcdGlmICggc3RhdGVTdHJpbmcgKSB7XG5cdFx0XHRcdGxpc3QuYWRkKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdC8vIHN0YXRlID0gWyByZXNvbHZlZCB8IHJlamVjdGVkIF1cblx0XHRcdFx0XHRzdGF0ZSA9IHN0YXRlU3RyaW5nO1xuXG5cdFx0XHRcdC8vIFsgcmVqZWN0X2xpc3QgfCByZXNvbHZlX2xpc3QgXS5kaXNhYmxlOyBwcm9ncmVzc19saXN0LmxvY2tcblx0XHRcdFx0fSwgdHVwbGVzWyBpIF4gMSBdWyAyIF0uZGlzYWJsZSwgdHVwbGVzWyAyIF1bIDIgXS5sb2NrICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGRlZmVycmVkWyByZXNvbHZlIHwgcmVqZWN0IHwgbm90aWZ5IF1cblx0XHRcdGRlZmVycmVkWyB0dXBsZVswXSBdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRlZmVycmVkWyB0dXBsZVswXSArIFwiV2l0aFwiIF0oIHRoaXMgPT09IGRlZmVycmVkID8gcHJvbWlzZSA6IHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRyZXR1cm4gdGhpcztcblx0XHRcdH07XG5cdFx0XHRkZWZlcnJlZFsgdHVwbGVbMF0gKyBcIldpdGhcIiBdID0gbGlzdC5maXJlV2l0aDtcblx0XHR9KTtcblxuXHRcdC8vIE1ha2UgdGhlIGRlZmVycmVkIGEgcHJvbWlzZVxuXHRcdHByb21pc2UucHJvbWlzZSggZGVmZXJyZWQgKTtcblxuXHRcdC8vIENhbGwgZ2l2ZW4gZnVuYyBpZiBhbnlcblx0XHRpZiAoIGZ1bmMgKSB7XG5cdFx0XHRmdW5jLmNhbGwoIGRlZmVycmVkLCBkZWZlcnJlZCApO1xuXHRcdH1cblxuXHRcdC8vIEFsbCBkb25lIVxuXHRcdHJldHVybiBkZWZlcnJlZDtcblx0fSxcblxuXHQvLyBEZWZlcnJlZCBoZWxwZXJcblx0d2hlbjogZnVuY3Rpb24oIHN1Ym9yZGluYXRlIC8qICwgLi4uLCBzdWJvcmRpbmF0ZU4gKi8gKSB7XG5cdFx0dmFyIGkgPSAwLFxuXHRcdFx0cmVzb2x2ZVZhbHVlcyA9IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApLFxuXHRcdFx0bGVuZ3RoID0gcmVzb2x2ZVZhbHVlcy5sZW5ndGgsXG5cblx0XHRcdC8vIHRoZSBjb3VudCBvZiB1bmNvbXBsZXRlZCBzdWJvcmRpbmF0ZXNcblx0XHRcdHJlbWFpbmluZyA9IGxlbmd0aCAhPT0gMSB8fCAoIHN1Ym9yZGluYXRlICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCBzdWJvcmRpbmF0ZS5wcm9taXNlICkgKSA/IGxlbmd0aCA6IDAsXG5cblx0XHRcdC8vIHRoZSBtYXN0ZXIgRGVmZXJyZWQuIElmIHJlc29sdmVWYWx1ZXMgY29uc2lzdCBvZiBvbmx5IGEgc2luZ2xlIERlZmVycmVkLCBqdXN0IHVzZSB0aGF0LlxuXHRcdFx0ZGVmZXJyZWQgPSByZW1haW5pbmcgPT09IDEgPyBzdWJvcmRpbmF0ZSA6IGpRdWVyeS5EZWZlcnJlZCgpLFxuXG5cdFx0XHQvLyBVcGRhdGUgZnVuY3Rpb24gZm9yIGJvdGggcmVzb2x2ZSBhbmQgcHJvZ3Jlc3MgdmFsdWVzXG5cdFx0XHR1cGRhdGVGdW5jID0gZnVuY3Rpb24oIGksIGNvbnRleHRzLCB2YWx1ZXMgKSB7XG5cdFx0XHRcdHJldHVybiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0XHRcdFx0Y29udGV4dHNbIGkgXSA9IHRoaXM7XG5cdFx0XHRcdFx0dmFsdWVzWyBpIF0gPSBhcmd1bWVudHMubGVuZ3RoID4gMSA/IHNsaWNlLmNhbGwoIGFyZ3VtZW50cyApIDogdmFsdWU7XG5cdFx0XHRcdFx0aWYgKCB2YWx1ZXMgPT09IHByb2dyZXNzVmFsdWVzICkge1xuXHRcdFx0XHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggY29udGV4dHMsIHZhbHVlcyApO1xuXHRcdFx0XHRcdH0gZWxzZSBpZiAoICEoIC0tcmVtYWluaW5nICkgKSB7XG5cdFx0XHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggY29udGV4dHMsIHZhbHVlcyApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fTtcblx0XHRcdH0sXG5cblx0XHRcdHByb2dyZXNzVmFsdWVzLCBwcm9ncmVzc0NvbnRleHRzLCByZXNvbHZlQ29udGV4dHM7XG5cblx0XHQvLyBBZGQgbGlzdGVuZXJzIHRvIERlZmVycmVkIHN1Ym9yZGluYXRlczsgdHJlYXQgb3RoZXJzIGFzIHJlc29sdmVkXG5cdFx0aWYgKCBsZW5ndGggPiAxICkge1xuXHRcdFx0cHJvZ3Jlc3NWYWx1ZXMgPSBuZXcgQXJyYXkoIGxlbmd0aCApO1xuXHRcdFx0cHJvZ3Jlc3NDb250ZXh0cyA9IG5ldyBBcnJheSggbGVuZ3RoICk7XG5cdFx0XHRyZXNvbHZlQ29udGV4dHMgPSBuZXcgQXJyYXkoIGxlbmd0aCApO1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuZ3RoOyBpKysgKSB7XG5cdFx0XHRcdGlmICggcmVzb2x2ZVZhbHVlc1sgaSBdICYmIGpRdWVyeS5pc0Z1bmN0aW9uKCByZXNvbHZlVmFsdWVzWyBpIF0ucHJvbWlzZSApICkge1xuXHRcdFx0XHRcdHJlc29sdmVWYWx1ZXNbIGkgXS5wcm9taXNlKClcblx0XHRcdFx0XHRcdC5kb25lKCB1cGRhdGVGdW5jKCBpLCByZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMgKSApXG5cdFx0XHRcdFx0XHQuZmFpbCggZGVmZXJyZWQucmVqZWN0IClcblx0XHRcdFx0XHRcdC5wcm9ncmVzcyggdXBkYXRlRnVuYyggaSwgcHJvZ3Jlc3NDb250ZXh0cywgcHJvZ3Jlc3NWYWx1ZXMgKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdC0tcmVtYWluaW5nO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gSWYgd2UncmUgbm90IHdhaXRpbmcgb24gYW55dGhpbmcsIHJlc29sdmUgdGhlIG1hc3RlclxuXHRcdGlmICggIXJlbWFpbmluZyApIHtcblx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCByZXNvbHZlQ29udGV4dHMsIHJlc29sdmVWYWx1ZXMgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZGVmZXJyZWQucHJvbWlzZSgpO1xuXHR9XG59KTtcblxuXG4vLyBUaGUgZGVmZXJyZWQgdXNlZCBvbiBET00gcmVhZHlcbnZhciByZWFkeUxpc3Q7XG5cbmpRdWVyeS5mbi5yZWFkeSA9IGZ1bmN0aW9uKCBmbiApIHtcblx0Ly8gQWRkIHRoZSBjYWxsYmFja1xuXHRqUXVlcnkucmVhZHkucHJvbWlzZSgpLmRvbmUoIGZuICk7XG5cblx0cmV0dXJuIHRoaXM7XG59O1xuXG5qUXVlcnkuZXh0ZW5kKHtcblx0Ly8gSXMgdGhlIERPTSByZWFkeSB0byBiZSB1c2VkPyBTZXQgdG8gdHJ1ZSBvbmNlIGl0IG9jY3Vycy5cblx0aXNSZWFkeTogZmFsc2UsXG5cblx0Ly8gQSBjb3VudGVyIHRvIHRyYWNrIGhvdyBtYW55IGl0ZW1zIHRvIHdhaXQgZm9yIGJlZm9yZVxuXHQvLyB0aGUgcmVhZHkgZXZlbnQgZmlyZXMuIFNlZSAjNjc4MVxuXHRyZWFkeVdhaXQ6IDEsXG5cblx0Ly8gSG9sZCAob3IgcmVsZWFzZSkgdGhlIHJlYWR5IGV2ZW50XG5cdGhvbGRSZWFkeTogZnVuY3Rpb24oIGhvbGQgKSB7XG5cdFx0aWYgKCBob2xkICkge1xuXHRcdFx0alF1ZXJ5LnJlYWR5V2FpdCsrO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRqUXVlcnkucmVhZHkoIHRydWUgKTtcblx0XHR9XG5cdH0sXG5cblx0Ly8gSGFuZGxlIHdoZW4gdGhlIERPTSBpcyByZWFkeVxuXHRyZWFkeTogZnVuY3Rpb24oIHdhaXQgKSB7XG5cblx0XHQvLyBBYm9ydCBpZiB0aGVyZSBhcmUgcGVuZGluZyBob2xkcyBvciB3ZSdyZSBhbHJlYWR5IHJlYWR5XG5cdFx0aWYgKCB3YWl0ID09PSB0cnVlID8gLS1qUXVlcnkucmVhZHlXYWl0IDogalF1ZXJ5LmlzUmVhZHkgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gUmVtZW1iZXIgdGhhdCB0aGUgRE9NIGlzIHJlYWR5XG5cdFx0alF1ZXJ5LmlzUmVhZHkgPSB0cnVlO1xuXG5cdFx0Ly8gSWYgYSBub3JtYWwgRE9NIFJlYWR5IGV2ZW50IGZpcmVkLCBkZWNyZW1lbnQsIGFuZCB3YWl0IGlmIG5lZWQgYmVcblx0XHRpZiAoIHdhaXQgIT09IHRydWUgJiYgLS1qUXVlcnkucmVhZHlXYWl0ID4gMCApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBJZiB0aGVyZSBhcmUgZnVuY3Rpb25zIGJvdW5kLCB0byBleGVjdXRlXG5cdFx0cmVhZHlMaXN0LnJlc29sdmVXaXRoKCBkb2N1bWVudCwgWyBqUXVlcnkgXSApO1xuXG5cdFx0Ly8gVHJpZ2dlciBhbnkgYm91bmQgcmVhZHkgZXZlbnRzXG5cdFx0aWYgKCBqUXVlcnkuZm4udHJpZ2dlckhhbmRsZXIgKSB7XG5cdFx0XHRqUXVlcnkoIGRvY3VtZW50ICkudHJpZ2dlckhhbmRsZXIoIFwicmVhZHlcIiApO1xuXHRcdFx0alF1ZXJ5KCBkb2N1bWVudCApLm9mZiggXCJyZWFkeVwiICk7XG5cdFx0fVxuXHR9XG59KTtcblxuLyoqXG4gKiBUaGUgcmVhZHkgZXZlbnQgaGFuZGxlciBhbmQgc2VsZiBjbGVhbnVwIG1ldGhvZFxuICovXG5mdW5jdGlvbiBjb21wbGV0ZWQoKSB7XG5cdGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoIFwiRE9NQ29udGVudExvYWRlZFwiLCBjb21wbGV0ZWQsIGZhbHNlICk7XG5cdHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCBcImxvYWRcIiwgY29tcGxldGVkLCBmYWxzZSApO1xuXHRqUXVlcnkucmVhZHkoKTtcbn1cblxualF1ZXJ5LnJlYWR5LnByb21pc2UgPSBmdW5jdGlvbiggb2JqICkge1xuXHRpZiAoICFyZWFkeUxpc3QgKSB7XG5cblx0XHRyZWFkeUxpc3QgPSBqUXVlcnkuRGVmZXJyZWQoKTtcblxuXHRcdC8vIENhdGNoIGNhc2VzIHdoZXJlICQoZG9jdW1lbnQpLnJlYWR5KCkgaXMgY2FsbGVkIGFmdGVyIHRoZSBicm93c2VyIGV2ZW50IGhhcyBhbHJlYWR5IG9jY3VycmVkLlxuXHRcdC8vIFdlIG9uY2UgdHJpZWQgdG8gdXNlIHJlYWR5U3RhdGUgXCJpbnRlcmFjdGl2ZVwiIGhlcmUsIGJ1dCBpdCBjYXVzZWQgaXNzdWVzIGxpa2UgdGhlIG9uZVxuXHRcdC8vIGRpc2NvdmVyZWQgYnkgQ2hyaXNTIGhlcmU6IGh0dHA6Ly9idWdzLmpxdWVyeS5jb20vdGlja2V0LzEyMjgyI2NvbW1lbnQ6MTVcblx0XHRpZiAoIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIiApIHtcblx0XHRcdC8vIEhhbmRsZSBpdCBhc3luY2hyb25vdXNseSB0byBhbGxvdyBzY3JpcHRzIHRoZSBvcHBvcnR1bml0eSB0byBkZWxheSByZWFkeVxuXHRcdFx0c2V0VGltZW91dCggalF1ZXJ5LnJlYWR5ICk7XG5cblx0XHR9IGVsc2Uge1xuXG5cdFx0XHQvLyBVc2UgdGhlIGhhbmR5IGV2ZW50IGNhbGxiYWNrXG5cdFx0XHRkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCBcIkRPTUNvbnRlbnRMb2FkZWRcIiwgY29tcGxldGVkLCBmYWxzZSApO1xuXG5cdFx0XHQvLyBBIGZhbGxiYWNrIHRvIHdpbmRvdy5vbmxvYWQsIHRoYXQgd2lsbCBhbHdheXMgd29ya1xuXHRcdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoIFwibG9hZFwiLCBjb21wbGV0ZWQsIGZhbHNlICk7XG5cdFx0fVxuXHR9XG5cdHJldHVybiByZWFkeUxpc3QucHJvbWlzZSggb2JqICk7XG59O1xuXG4vLyBLaWNrIG9mZiB0aGUgRE9NIHJlYWR5IGNoZWNrIGV2ZW4gaWYgdGhlIHVzZXIgZG9lcyBub3RcbmpRdWVyeS5yZWFkeS5wcm9taXNlKCk7XG5cblxuXG5cbi8vIE11bHRpZnVuY3Rpb25hbCBtZXRob2QgdG8gZ2V0IGFuZCBzZXQgdmFsdWVzIG9mIGEgY29sbGVjdGlvblxuLy8gVGhlIHZhbHVlL3MgY2FuIG9wdGlvbmFsbHkgYmUgZXhlY3V0ZWQgaWYgaXQncyBhIGZ1bmN0aW9uXG52YXIgYWNjZXNzID0galF1ZXJ5LmFjY2VzcyA9IGZ1bmN0aW9uKCBlbGVtcywgZm4sIGtleSwgdmFsdWUsIGNoYWluYWJsZSwgZW1wdHlHZXQsIHJhdyApIHtcblx0dmFyIGkgPSAwLFxuXHRcdGxlbiA9IGVsZW1zLmxlbmd0aCxcblx0XHRidWxrID0ga2V5ID09IG51bGw7XG5cblx0Ly8gU2V0cyBtYW55IHZhbHVlc1xuXHRpZiAoIGpRdWVyeS50eXBlKCBrZXkgKSA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRjaGFpbmFibGUgPSB0cnVlO1xuXHRcdGZvciAoIGkgaW4ga2V5ICkge1xuXHRcdFx0alF1ZXJ5LmFjY2VzcyggZWxlbXMsIGZuLCBpLCBrZXlbaV0sIHRydWUsIGVtcHR5R2V0LCByYXcgKTtcblx0XHR9XG5cblx0Ly8gU2V0cyBvbmUgdmFsdWVcblx0fSBlbHNlIGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRjaGFpbmFibGUgPSB0cnVlO1xuXG5cdFx0aWYgKCAhalF1ZXJ5LmlzRnVuY3Rpb24oIHZhbHVlICkgKSB7XG5cdFx0XHRyYXcgPSB0cnVlO1xuXHRcdH1cblxuXHRcdGlmICggYnVsayApIHtcblx0XHRcdC8vIEJ1bGsgb3BlcmF0aW9ucyBydW4gYWdhaW5zdCB0aGUgZW50aXJlIHNldFxuXHRcdFx0aWYgKCByYXcgKSB7XG5cdFx0XHRcdGZuLmNhbGwoIGVsZW1zLCB2YWx1ZSApO1xuXHRcdFx0XHRmbiA9IG51bGw7XG5cblx0XHRcdC8vIC4uLmV4Y2VwdCB3aGVuIGV4ZWN1dGluZyBmdW5jdGlvbiB2YWx1ZXNcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGJ1bGsgPSBmbjtcblx0XHRcdFx0Zm4gPSBmdW5jdGlvbiggZWxlbSwga2V5LCB2YWx1ZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gYnVsay5jYWxsKCBqUXVlcnkoIGVsZW0gKSwgdmFsdWUgKTtcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRpZiAoIGZuICkge1xuXHRcdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdGZuKCBlbGVtc1tpXSwga2V5LCByYXcgPyB2YWx1ZSA6IHZhbHVlLmNhbGwoIGVsZW1zW2ldLCBpLCBmbiggZWxlbXNbaV0sIGtleSApICkgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gY2hhaW5hYmxlID9cblx0XHRlbGVtcyA6XG5cblx0XHQvLyBHZXRzXG5cdFx0YnVsayA/XG5cdFx0XHRmbi5jYWxsKCBlbGVtcyApIDpcblx0XHRcdGxlbiA/IGZuKCBlbGVtc1swXSwga2V5ICkgOiBlbXB0eUdldDtcbn07XG5cblxuLyoqXG4gKiBEZXRlcm1pbmVzIHdoZXRoZXIgYW4gb2JqZWN0IGNhbiBoYXZlIGRhdGFcbiAqL1xualF1ZXJ5LmFjY2VwdERhdGEgPSBmdW5jdGlvbiggb3duZXIgKSB7XG5cdC8vIEFjY2VwdHMgb25seTpcblx0Ly8gIC0gTm9kZVxuXHQvLyAgICAtIE5vZGUuRUxFTUVOVF9OT0RFXG5cdC8vICAgIC0gTm9kZS5ET0NVTUVOVF9OT0RFXG5cdC8vICAtIE9iamVjdFxuXHQvLyAgICAtIEFueVxuXHQvKiBqc2hpbnQgLVcwMTggKi9cblx0cmV0dXJuIG93bmVyLm5vZGVUeXBlID09PSAxIHx8IG93bmVyLm5vZGVUeXBlID09PSA5IHx8ICEoICtvd25lci5ub2RlVHlwZSApO1xufTtcblxuXG5mdW5jdGlvbiBEYXRhKCkge1xuXHQvLyBTdXBwb3J0OiBBbmRyb2lkPDQsXG5cdC8vIE9sZCBXZWJLaXQgZG9lcyBub3QgaGF2ZSBPYmplY3QucHJldmVudEV4dGVuc2lvbnMvZnJlZXplIG1ldGhvZCxcblx0Ly8gcmV0dXJuIG5ldyBlbXB0eSBvYmplY3QgaW5zdGVhZCB3aXRoIG5vIFtbc2V0XV0gYWNjZXNzb3Jcblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KCB0aGlzLmNhY2hlID0ge30sIDAsIHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmV0dXJuIHt9O1xuXHRcdH1cblx0fSk7XG5cblx0dGhpcy5leHBhbmRvID0galF1ZXJ5LmV4cGFuZG8gKyBEYXRhLnVpZCsrO1xufVxuXG5EYXRhLnVpZCA9IDE7XG5EYXRhLmFjY2VwdHMgPSBqUXVlcnkuYWNjZXB0RGF0YTtcblxuRGF0YS5wcm90b3R5cGUgPSB7XG5cdGtleTogZnVuY3Rpb24oIG93bmVyICkge1xuXHRcdC8vIFdlIGNhbiBhY2NlcHQgZGF0YSBmb3Igbm9uLWVsZW1lbnQgbm9kZXMgaW4gbW9kZXJuIGJyb3dzZXJzLFxuXHRcdC8vIGJ1dCB3ZSBzaG91bGQgbm90LCBzZWUgIzgzMzUuXG5cdFx0Ly8gQWx3YXlzIHJldHVybiB0aGUga2V5IGZvciBhIGZyb3plbiBvYmplY3QuXG5cdFx0aWYgKCAhRGF0YS5hY2NlcHRzKCBvd25lciApICkge1xuXHRcdFx0cmV0dXJuIDA7XG5cdFx0fVxuXG5cdFx0dmFyIGRlc2NyaXB0b3IgPSB7fSxcblx0XHRcdC8vIENoZWNrIGlmIHRoZSBvd25lciBvYmplY3QgYWxyZWFkeSBoYXMgYSBjYWNoZSBrZXlcblx0XHRcdHVubG9jayA9IG93bmVyWyB0aGlzLmV4cGFuZG8gXTtcblxuXHRcdC8vIElmIG5vdCwgY3JlYXRlIG9uZVxuXHRcdGlmICggIXVubG9jayApIHtcblx0XHRcdHVubG9jayA9IERhdGEudWlkKys7XG5cblx0XHRcdC8vIFNlY3VyZSBpdCBpbiBhIG5vbi1lbnVtZXJhYmxlLCBub24td3JpdGFibGUgcHJvcGVydHlcblx0XHRcdHRyeSB7XG5cdFx0XHRcdGRlc2NyaXB0b3JbIHRoaXMuZXhwYW5kbyBdID0geyB2YWx1ZTogdW5sb2NrIH07XG5cdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKCBvd25lciwgZGVzY3JpcHRvciApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkPDRcblx0XHRcdC8vIEZhbGxiYWNrIHRvIGEgbGVzcyBzZWN1cmUgZGVmaW5pdGlvblxuXHRcdFx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0XHRcdGRlc2NyaXB0b3JbIHRoaXMuZXhwYW5kbyBdID0gdW5sb2NrO1xuXHRcdFx0XHRqUXVlcnkuZXh0ZW5kKCBvd25lciwgZGVzY3JpcHRvciApO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIEVuc3VyZSB0aGUgY2FjaGUgb2JqZWN0XG5cdFx0aWYgKCAhdGhpcy5jYWNoZVsgdW5sb2NrIF0gKSB7XG5cdFx0XHR0aGlzLmNhY2hlWyB1bmxvY2sgXSA9IHt9O1xuXHRcdH1cblxuXHRcdHJldHVybiB1bmxvY2s7XG5cdH0sXG5cdHNldDogZnVuY3Rpb24oIG93bmVyLCBkYXRhLCB2YWx1ZSApIHtcblx0XHR2YXIgcHJvcCxcblx0XHRcdC8vIFRoZXJlIG1heSBiZSBhbiB1bmxvY2sgYXNzaWduZWQgdG8gdGhpcyBub2RlLFxuXHRcdFx0Ly8gaWYgdGhlcmUgaXMgbm8gZW50cnkgZm9yIHRoaXMgXCJvd25lclwiLCBjcmVhdGUgb25lIGlubGluZVxuXHRcdFx0Ly8gYW5kIHNldCB0aGUgdW5sb2NrIGFzIHRob3VnaCBhbiBvd25lciBlbnRyeSBoYWQgYWx3YXlzIGV4aXN0ZWRcblx0XHRcdHVubG9jayA9IHRoaXMua2V5KCBvd25lciApLFxuXHRcdFx0Y2FjaGUgPSB0aGlzLmNhY2hlWyB1bmxvY2sgXTtcblxuXHRcdC8vIEhhbmRsZTogWyBvd25lciwga2V5LCB2YWx1ZSBdIGFyZ3Ncblx0XHRpZiAoIHR5cGVvZiBkYXRhID09PSBcInN0cmluZ1wiICkge1xuXHRcdFx0Y2FjaGVbIGRhdGEgXSA9IHZhbHVlO1xuXG5cdFx0Ly8gSGFuZGxlOiBbIG93bmVyLCB7IHByb3BlcnRpZXMgfSBdIGFyZ3Ncblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gRnJlc2ggYXNzaWdubWVudHMgYnkgb2JqZWN0IGFyZSBzaGFsbG93IGNvcGllZFxuXHRcdFx0aWYgKCBqUXVlcnkuaXNFbXB0eU9iamVjdCggY2FjaGUgKSApIHtcblx0XHRcdFx0alF1ZXJ5LmV4dGVuZCggdGhpcy5jYWNoZVsgdW5sb2NrIF0sIGRhdGEgKTtcblx0XHRcdC8vIE90aGVyd2lzZSwgY29weSB0aGUgcHJvcGVydGllcyBvbmUtYnktb25lIHRvIHRoZSBjYWNoZSBvYmplY3Rcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGZvciAoIHByb3AgaW4gZGF0YSApIHtcblx0XHRcdFx0XHRjYWNoZVsgcHJvcCBdID0gZGF0YVsgcHJvcCBdO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBjYWNoZTtcblx0fSxcblx0Z2V0OiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHQvLyBFaXRoZXIgYSB2YWxpZCBjYWNoZSBpcyBmb3VuZCwgb3Igd2lsbCBiZSBjcmVhdGVkLlxuXHRcdC8vIE5ldyBjYWNoZXMgd2lsbCBiZSBjcmVhdGVkIGFuZCB0aGUgdW5sb2NrIHJldHVybmVkLFxuXHRcdC8vIGFsbG93aW5nIGRpcmVjdCBhY2Nlc3MgdG8gdGhlIG5ld2x5IGNyZWF0ZWRcblx0XHQvLyBlbXB0eSBkYXRhIG9iamVjdC4gQSB2YWxpZCBvd25lciBvYmplY3QgbXVzdCBiZSBwcm92aWRlZC5cblx0XHR2YXIgY2FjaGUgPSB0aGlzLmNhY2hlWyB0aGlzLmtleSggb3duZXIgKSBdO1xuXG5cdFx0cmV0dXJuIGtleSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdGNhY2hlIDogY2FjaGVbIGtleSBdO1xuXHR9LFxuXHRhY2Nlc3M6IGZ1bmN0aW9uKCBvd25lciwga2V5LCB2YWx1ZSApIHtcblx0XHR2YXIgc3RvcmVkO1xuXHRcdC8vIEluIGNhc2VzIHdoZXJlIGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gTm8ga2V5IHdhcyBzcGVjaWZpZWRcblx0XHQvLyAgIDIuIEEgc3RyaW5nIGtleSB3YXMgc3BlY2lmaWVkLCBidXQgbm8gdmFsdWUgcHJvdmlkZWRcblx0XHQvL1xuXHRcdC8vIFRha2UgdGhlIFwicmVhZFwiIHBhdGggYW5kIGFsbG93IHRoZSBnZXQgbWV0aG9kIHRvIGRldGVybWluZVxuXHRcdC8vIHdoaWNoIHZhbHVlIHRvIHJldHVybiwgcmVzcGVjdGl2ZWx5IGVpdGhlcjpcblx0XHQvL1xuXHRcdC8vICAgMS4gVGhlIGVudGlyZSBjYWNoZSBvYmplY3Rcblx0XHQvLyAgIDIuIFRoZSBkYXRhIHN0b3JlZCBhdCB0aGUga2V5XG5cdFx0Ly9cblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkIHx8XG5cdFx0XHRcdCgoa2V5ICYmIHR5cGVvZiBrZXkgPT09IFwic3RyaW5nXCIpICYmIHZhbHVlID09PSB1bmRlZmluZWQpICkge1xuXG5cdFx0XHRzdG9yZWQgPSB0aGlzLmdldCggb3duZXIsIGtleSApO1xuXG5cdFx0XHRyZXR1cm4gc3RvcmVkICE9PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRzdG9yZWQgOiB0aGlzLmdldCggb3duZXIsIGpRdWVyeS5jYW1lbENhc2Uoa2V5KSApO1xuXHRcdH1cblxuXHRcdC8vIFsqXVdoZW4gdGhlIGtleSBpcyBub3QgYSBzdHJpbmcsIG9yIGJvdGggYSBrZXkgYW5kIHZhbHVlXG5cdFx0Ly8gYXJlIHNwZWNpZmllZCwgc2V0IG9yIGV4dGVuZCAoZXhpc3Rpbmcgb2JqZWN0cykgd2l0aCBlaXRoZXI6XG5cdFx0Ly9cblx0XHQvLyAgIDEuIEFuIG9iamVjdCBvZiBwcm9wZXJ0aWVzXG5cdFx0Ly8gICAyLiBBIGtleSBhbmQgdmFsdWVcblx0XHQvL1xuXHRcdHRoaXMuc2V0KCBvd25lciwga2V5LCB2YWx1ZSApO1xuXG5cdFx0Ly8gU2luY2UgdGhlIFwic2V0XCIgcGF0aCBjYW4gaGF2ZSB0d28gcG9zc2libGUgZW50cnkgcG9pbnRzXG5cdFx0Ly8gcmV0dXJuIHRoZSBleHBlY3RlZCBkYXRhIGJhc2VkIG9uIHdoaWNoIHBhdGggd2FzIHRha2VuWypdXG5cdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgPyB2YWx1ZSA6IGtleTtcblx0fSxcblx0cmVtb3ZlOiBmdW5jdGlvbiggb3duZXIsIGtleSApIHtcblx0XHR2YXIgaSwgbmFtZSwgY2FtZWwsXG5cdFx0XHR1bmxvY2sgPSB0aGlzLmtleSggb3duZXIgKSxcblx0XHRcdGNhY2hlID0gdGhpcy5jYWNoZVsgdW5sb2NrIF07XG5cblx0XHRpZiAoIGtleSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dGhpcy5jYWNoZVsgdW5sb2NrIF0gPSB7fTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBTdXBwb3J0IGFycmF5IG9yIHNwYWNlIHNlcGFyYXRlZCBzdHJpbmcgb2Yga2V5c1xuXHRcdFx0aWYgKCBqUXVlcnkuaXNBcnJheSgga2V5ICkgKSB7XG5cdFx0XHRcdC8vIElmIFwibmFtZVwiIGlzIGFuIGFycmF5IG9mIGtleXMuLi5cblx0XHRcdFx0Ly8gV2hlbiBkYXRhIGlzIGluaXRpYWxseSBjcmVhdGVkLCB2aWEgKFwia2V5XCIsIFwidmFsXCIpIHNpZ25hdHVyZSxcblx0XHRcdFx0Ly8ga2V5cyB3aWxsIGJlIGNvbnZlcnRlZCB0byBjYW1lbENhc2UuXG5cdFx0XHRcdC8vIFNpbmNlIHRoZXJlIGlzIG5vIHdheSB0byB0ZWxsIF9ob3dfIGEga2V5IHdhcyBhZGRlZCwgcmVtb3ZlXG5cdFx0XHRcdC8vIGJvdGggcGxhaW4ga2V5IGFuZCBjYW1lbENhc2Uga2V5LiAjMTI3ODZcblx0XHRcdFx0Ly8gVGhpcyB3aWxsIG9ubHkgcGVuYWxpemUgdGhlIGFycmF5IGFyZ3VtZW50IHBhdGguXG5cdFx0XHRcdG5hbWUgPSBrZXkuY29uY2F0KCBrZXkubWFwKCBqUXVlcnkuY2FtZWxDYXNlICkgKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNhbWVsID0galF1ZXJ5LmNhbWVsQ2FzZSgga2V5ICk7XG5cdFx0XHRcdC8vIFRyeSB0aGUgc3RyaW5nIGFzIGEga2V5IGJlZm9yZSBhbnkgbWFuaXB1bGF0aW9uXG5cdFx0XHRcdGlmICgga2V5IGluIGNhY2hlICkge1xuXHRcdFx0XHRcdG5hbWUgPSBbIGtleSwgY2FtZWwgXTtcblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHQvLyBJZiBhIGtleSB3aXRoIHRoZSBzcGFjZXMgZXhpc3RzLCB1c2UgaXQuXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBjcmVhdGUgYW4gYXJyYXkgYnkgbWF0Y2hpbmcgbm9uLXdoaXRlc3BhY2Vcblx0XHRcdFx0XHRuYW1lID0gY2FtZWw7XG5cdFx0XHRcdFx0bmFtZSA9IG5hbWUgaW4gY2FjaGUgP1xuXHRcdFx0XHRcdFx0WyBuYW1lIF0gOiAoIG5hbWUubWF0Y2goIHJub3R3aGl0ZSApIHx8IFtdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aSA9IG5hbWUubGVuZ3RoO1xuXHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRcdGRlbGV0ZSBjYWNoZVsgbmFtZVsgaSBdIF07XG5cdFx0XHR9XG5cdFx0fVxuXHR9LFxuXHRoYXNEYXRhOiBmdW5jdGlvbiggb3duZXIgKSB7XG5cdFx0cmV0dXJuICFqUXVlcnkuaXNFbXB0eU9iamVjdChcblx0XHRcdHRoaXMuY2FjaGVbIG93bmVyWyB0aGlzLmV4cGFuZG8gXSBdIHx8IHt9XG5cdFx0KTtcblx0fSxcblx0ZGlzY2FyZDogZnVuY3Rpb24oIG93bmVyICkge1xuXHRcdGlmICggb3duZXJbIHRoaXMuZXhwYW5kbyBdICkge1xuXHRcdFx0ZGVsZXRlIHRoaXMuY2FjaGVbIG93bmVyWyB0aGlzLmV4cGFuZG8gXSBdO1xuXHRcdH1cblx0fVxufTtcbnZhciBkYXRhX3ByaXYgPSBuZXcgRGF0YSgpO1xuXG52YXIgZGF0YV91c2VyID0gbmV3IERhdGEoKTtcblxuXG5cbi8vXHRJbXBsZW1lbnRhdGlvbiBTdW1tYXJ5XG4vL1xuLy9cdDEuIEVuZm9yY2UgQVBJIHN1cmZhY2UgYW5kIHNlbWFudGljIGNvbXBhdGliaWxpdHkgd2l0aCAxLjkueCBicmFuY2hcbi8vXHQyLiBJbXByb3ZlIHRoZSBtb2R1bGUncyBtYWludGFpbmFiaWxpdHkgYnkgcmVkdWNpbmcgdGhlIHN0b3JhZ2Vcbi8vXHRcdHBhdGhzIHRvIGEgc2luZ2xlIG1lY2hhbmlzbS5cbi8vXHQzLiBVc2UgdGhlIHNhbWUgc2luZ2xlIG1lY2hhbmlzbSB0byBzdXBwb3J0IFwicHJpdmF0ZVwiIGFuZCBcInVzZXJcIiBkYXRhLlxuLy9cdDQuIF9OZXZlcl8gZXhwb3NlIFwicHJpdmF0ZVwiIGRhdGEgdG8gdXNlciBjb2RlIChUT0RPOiBEcm9wIF9kYXRhLCBfcmVtb3ZlRGF0YSlcbi8vXHQ1LiBBdm9pZCBleHBvc2luZyBpbXBsZW1lbnRhdGlvbiBkZXRhaWxzIG9uIHVzZXIgb2JqZWN0cyAoZWcuIGV4cGFuZG8gcHJvcGVydGllcylcbi8vXHQ2LiBQcm92aWRlIGEgY2xlYXIgcGF0aCBmb3IgaW1wbGVtZW50YXRpb24gdXBncmFkZSB0byBXZWFrTWFwIGluIDIwMTRcblxudmFyIHJicmFjZSA9IC9eKD86XFx7W1xcd1xcV10qXFx9fFxcW1tcXHdcXFddKlxcXSkkLyxcblx0cm11bHRpRGFzaCA9IC8oW0EtWl0pL2c7XG5cbmZ1bmN0aW9uIGRhdGFBdHRyKCBlbGVtLCBrZXksIGRhdGEgKSB7XG5cdHZhciBuYW1lO1xuXG5cdC8vIElmIG5vdGhpbmcgd2FzIGZvdW5kIGludGVybmFsbHksIHRyeSB0byBmZXRjaCBhbnlcblx0Ly8gZGF0YSBmcm9tIHRoZSBIVE1MNSBkYXRhLSogYXR0cmlidXRlXG5cdGlmICggZGF0YSA9PT0gdW5kZWZpbmVkICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0bmFtZSA9IFwiZGF0YS1cIiArIGtleS5yZXBsYWNlKCBybXVsdGlEYXNoLCBcIi0kMVwiICkudG9Mb3dlckNhc2UoKTtcblx0XHRkYXRhID0gZWxlbS5nZXRBdHRyaWJ1dGUoIG5hbWUgKTtcblxuXHRcdGlmICggdHlwZW9mIGRhdGEgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHRkYXRhID0gZGF0YSA9PT0gXCJ0cnVlXCIgPyB0cnVlIDpcblx0XHRcdFx0XHRkYXRhID09PSBcImZhbHNlXCIgPyBmYWxzZSA6XG5cdFx0XHRcdFx0ZGF0YSA9PT0gXCJudWxsXCIgPyBudWxsIDpcblx0XHRcdFx0XHQvLyBPbmx5IGNvbnZlcnQgdG8gYSBudW1iZXIgaWYgaXQgZG9lc24ndCBjaGFuZ2UgdGhlIHN0cmluZ1xuXHRcdFx0XHRcdCtkYXRhICsgXCJcIiA9PT0gZGF0YSA/ICtkYXRhIDpcblx0XHRcdFx0XHRyYnJhY2UudGVzdCggZGF0YSApID8galF1ZXJ5LnBhcnNlSlNPTiggZGF0YSApIDpcblx0XHRcdFx0XHRkYXRhO1xuXHRcdFx0fSBjYXRjaCggZSApIHt9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB3ZSBzZXQgdGhlIGRhdGEgc28gaXQgaXNuJ3QgY2hhbmdlZCBsYXRlclxuXHRcdFx0ZGF0YV91c2VyLnNldCggZWxlbSwga2V5LCBkYXRhICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHR9XG5cdHJldHVybiBkYXRhO1xufVxuXG5qUXVlcnkuZXh0ZW5kKHtcblx0aGFzRGF0YTogZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0cmV0dXJuIGRhdGFfdXNlci5oYXNEYXRhKCBlbGVtICkgfHwgZGF0YV9wcml2Lmhhc0RhdGEoIGVsZW0gKTtcblx0fSxcblxuXHRkYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YV91c2VyLmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lICkge1xuXHRcdGRhdGFfdXNlci5yZW1vdmUoIGVsZW0sIG5hbWUgKTtcblx0fSxcblxuXHQvLyBUT0RPOiBOb3cgdGhhdCBhbGwgY2FsbHMgdG8gX2RhdGEgYW5kIF9yZW1vdmVEYXRhIGhhdmUgYmVlbiByZXBsYWNlZFxuXHQvLyB3aXRoIGRpcmVjdCBjYWxscyB0byBkYXRhX3ByaXYgbWV0aG9kcywgdGhlc2UgY2FuIGJlIGRlcHJlY2F0ZWQuXG5cdF9kYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gZGF0YV9wcml2LmFjY2VzcyggZWxlbSwgbmFtZSwgZGF0YSApO1xuXHR9LFxuXG5cdF9yZW1vdmVEYXRhOiBmdW5jdGlvbiggZWxlbSwgbmFtZSApIHtcblx0XHRkYXRhX3ByaXYucmVtb3ZlKCBlbGVtLCBuYW1lICk7XG5cdH1cbn0pO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKHtcblx0ZGF0YTogZnVuY3Rpb24oIGtleSwgdmFsdWUgKSB7XG5cdFx0dmFyIGksIG5hbWUsIGRhdGEsXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdLFxuXHRcdFx0YXR0cnMgPSBlbGVtICYmIGVsZW0uYXR0cmlidXRlcztcblxuXHRcdC8vIEdldHMgYWxsIHZhbHVlc1xuXHRcdGlmICgga2V5ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRpZiAoIHRoaXMubGVuZ3RoICkge1xuXHRcdFx0XHRkYXRhID0gZGF0YV91c2VyLmdldCggZWxlbSApO1xuXG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAhZGF0YV9wcml2LmdldCggZWxlbSwgXCJoYXNEYXRhQXR0cnNcIiApICkge1xuXHRcdFx0XHRcdGkgPSBhdHRycy5sZW5ndGg7XG5cdFx0XHRcdFx0d2hpbGUgKCBpLS0gKSB7XG5cblx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFMTErXG5cdFx0XHRcdFx0XHQvLyBUaGUgYXR0cnMgZWxlbWVudHMgY2FuIGJlIG51bGwgKCMxNDg5NClcblx0XHRcdFx0XHRcdGlmICggYXR0cnNbIGkgXSApIHtcblx0XHRcdFx0XHRcdFx0bmFtZSA9IGF0dHJzWyBpIF0ubmFtZTtcblx0XHRcdFx0XHRcdFx0aWYgKCBuYW1lLmluZGV4T2YoIFwiZGF0YS1cIiApID09PSAwICkge1xuXHRcdFx0XHRcdFx0XHRcdG5hbWUgPSBqUXVlcnkuY2FtZWxDYXNlKCBuYW1lLnNsaWNlKDUpICk7XG5cdFx0XHRcdFx0XHRcdFx0ZGF0YUF0dHIoIGVsZW0sIG5hbWUsIGRhdGFbIG5hbWUgXSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRhdGFfcHJpdi5zZXQoIGVsZW0sIFwiaGFzRGF0YUF0dHJzXCIsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZGF0YTtcblx0XHR9XG5cblx0XHQvLyBTZXRzIG11bHRpcGxlIHZhbHVlc1xuXHRcdGlmICggdHlwZW9mIGtleSA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGRhdGFfdXNlci5zZXQoIHRoaXMsIGtleSApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGRhdGEsXG5cdFx0XHRcdGNhbWVsS2V5ID0galF1ZXJ5LmNhbWVsQ2FzZSgga2V5ICk7XG5cblx0XHRcdC8vIFRoZSBjYWxsaW5nIGpRdWVyeSBvYmplY3QgKGVsZW1lbnQgbWF0Y2hlcykgaXMgbm90IGVtcHR5XG5cdFx0XHQvLyAoYW5kIHRoZXJlZm9yZSBoYXMgYW4gZWxlbWVudCBhcHBlYXJzIGF0IHRoaXNbIDAgXSkgYW5kIHRoZVxuXHRcdFx0Ly8gYHZhbHVlYCBwYXJhbWV0ZXIgd2FzIG5vdCB1bmRlZmluZWQuIEFuIGVtcHR5IGpRdWVyeSBvYmplY3Rcblx0XHRcdC8vIHdpbGwgcmVzdWx0IGluIGB1bmRlZmluZWRgIGZvciBlbGVtID0gdGhpc1sgMCBdIHdoaWNoIHdpbGxcblx0XHRcdC8vIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhbiBhdHRlbXB0IHRvIHJlYWQgYSBkYXRhIGNhY2hlIGlzIG1hZGUuXG5cdFx0XHRpZiAoIGVsZW0gJiYgdmFsdWUgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0Ly8gQXR0ZW1wdCB0byBnZXQgZGF0YSBmcm9tIHRoZSBjYWNoZVxuXHRcdFx0XHQvLyB3aXRoIHRoZSBrZXkgYXMtaXNcblx0XHRcdFx0ZGF0YSA9IGRhdGFfdXNlci5nZXQoIGVsZW0sIGtleSApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIEF0dGVtcHQgdG8gZ2V0IGRhdGEgZnJvbSB0aGUgY2FjaGVcblx0XHRcdFx0Ly8gd2l0aCB0aGUga2V5IGNhbWVsaXplZFxuXHRcdFx0XHRkYXRhID0gZGF0YV91c2VyLmdldCggZWxlbSwgY2FtZWxLZXkgKTtcblx0XHRcdFx0aWYgKCBkYXRhICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0cmV0dXJuIGRhdGE7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBdHRlbXB0IHRvIFwiZGlzY292ZXJcIiB0aGUgZGF0YSBpblxuXHRcdFx0XHQvLyBIVE1MNSBjdXN0b20gZGF0YS0qIGF0dHJzXG5cdFx0XHRcdGRhdGEgPSBkYXRhQXR0ciggZWxlbSwgY2FtZWxLZXksIHVuZGVmaW5lZCApO1xuXHRcdFx0XHRpZiAoIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIFdlIHRyaWVkIHJlYWxseSBoYXJkLCBidXQgdGhlIGRhdGEgZG9lc24ndCBleGlzdC5cblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgdGhlIGRhdGEuLi5cblx0XHRcdHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0Ly8gRmlyc3QsIGF0dGVtcHQgdG8gc3RvcmUgYSBjb3B5IG9yIHJlZmVyZW5jZSBvZiBhbnlcblx0XHRcdFx0Ly8gZGF0YSB0aGF0IG1pZ2h0J3ZlIGJlZW4gc3RvcmUgd2l0aCBhIGNhbWVsQ2FzZWQga2V5LlxuXHRcdFx0XHR2YXIgZGF0YSA9IGRhdGFfdXNlci5nZXQoIHRoaXMsIGNhbWVsS2V5ICk7XG5cblx0XHRcdFx0Ly8gRm9yIEhUTUw1IGRhdGEtKiBhdHRyaWJ1dGUgaW50ZXJvcCwgd2UgaGF2ZSB0b1xuXHRcdFx0XHQvLyBzdG9yZSBwcm9wZXJ0eSBuYW1lcyB3aXRoIGRhc2hlcyBpbiBhIGNhbWVsQ2FzZSBmb3JtLlxuXHRcdFx0XHQvLyBUaGlzIG1pZ2h0IG5vdCBhcHBseSB0byBhbGwgcHJvcGVydGllcy4uLipcblx0XHRcdFx0ZGF0YV91c2VyLnNldCggdGhpcywgY2FtZWxLZXksIHZhbHVlICk7XG5cblx0XHRcdFx0Ly8gKi4uLiBJbiB0aGUgY2FzZSBvZiBwcm9wZXJ0aWVzIHRoYXQgbWlnaHQgX2FjdHVhbGx5X1xuXHRcdFx0XHQvLyBoYXZlIGRhc2hlcywgd2UgbmVlZCB0byBhbHNvIHN0b3JlIGEgY29weSBvZiB0aGF0XG5cdFx0XHRcdC8vIHVuY2hhbmdlZCBwcm9wZXJ0eS5cblx0XHRcdFx0aWYgKCBrZXkuaW5kZXhPZihcIi1cIikgIT09IC0xICYmIGRhdGEgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0XHRkYXRhX3VzZXIuc2V0KCB0aGlzLCBrZXksIHZhbHVlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0sIG51bGwsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSwgbnVsbCwgdHJ1ZSApO1xuXHR9LFxuXG5cdHJlbW92ZURhdGE6IGZ1bmN0aW9uKCBrZXkgKSB7XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGRhdGFfdXNlci5yZW1vdmUoIHRoaXMsIGtleSApO1xuXHRcdH0pO1xuXHR9XG59KTtcblxuXG5qUXVlcnkuZXh0ZW5kKHtcblx0cXVldWU6IGZ1bmN0aW9uKCBlbGVtLCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBxdWV1ZTtcblxuXHRcdGlmICggZWxlbSApIHtcblx0XHRcdHR5cGUgPSAoIHR5cGUgfHwgXCJmeFwiICkgKyBcInF1ZXVlXCI7XG5cdFx0XHRxdWV1ZSA9IGRhdGFfcHJpdi5nZXQoIGVsZW0sIHR5cGUgKTtcblxuXHRcdFx0Ly8gU3BlZWQgdXAgZGVxdWV1ZSBieSBnZXR0aW5nIG91dCBxdWlja2x5IGlmIHRoaXMgaXMganVzdCBhIGxvb2t1cFxuXHRcdFx0aWYgKCBkYXRhICkge1xuXHRcdFx0XHRpZiAoICFxdWV1ZSB8fCBqUXVlcnkuaXNBcnJheSggZGF0YSApICkge1xuXHRcdFx0XHRcdHF1ZXVlID0gZGF0YV9wcml2LmFjY2VzcyggZWxlbSwgdHlwZSwgalF1ZXJ5Lm1ha2VBcnJheShkYXRhKSApO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHF1ZXVlLnB1c2goIGRhdGEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHF1ZXVlIHx8IFtdO1xuXHRcdH1cblx0fSxcblxuXHRkZXF1ZXVlOiBmdW5jdGlvbiggZWxlbSwgdHlwZSApIHtcblx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0XHR2YXIgcXVldWUgPSBqUXVlcnkucXVldWUoIGVsZW0sIHR5cGUgKSxcblx0XHRcdHN0YXJ0TGVuZ3RoID0gcXVldWUubGVuZ3RoLFxuXHRcdFx0Zm4gPSBxdWV1ZS5zaGlmdCgpLFxuXHRcdFx0aG9va3MgPSBqUXVlcnkuX3F1ZXVlSG9va3MoIGVsZW0sIHR5cGUgKSxcblx0XHRcdG5leHQgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0alF1ZXJ5LmRlcXVldWUoIGVsZW0sIHR5cGUgKTtcblx0XHRcdH07XG5cblx0XHQvLyBJZiB0aGUgZnggcXVldWUgaXMgZGVxdWV1ZWQsIGFsd2F5cyByZW1vdmUgdGhlIHByb2dyZXNzIHNlbnRpbmVsXG5cdFx0aWYgKCBmbiA9PT0gXCJpbnByb2dyZXNzXCIgKSB7XG5cdFx0XHRmbiA9IHF1ZXVlLnNoaWZ0KCk7XG5cdFx0XHRzdGFydExlbmd0aC0tO1xuXHRcdH1cblxuXHRcdGlmICggZm4gKSB7XG5cblx0XHRcdC8vIEFkZCBhIHByb2dyZXNzIHNlbnRpbmVsIHRvIHByZXZlbnQgdGhlIGZ4IHF1ZXVlIGZyb20gYmVpbmdcblx0XHRcdC8vIGF1dG9tYXRpY2FsbHkgZGVxdWV1ZWRcblx0XHRcdGlmICggdHlwZSA9PT0gXCJmeFwiICkge1xuXHRcdFx0XHRxdWV1ZS51bnNoaWZ0KCBcImlucHJvZ3Jlc3NcIiApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDbGVhciB1cCB0aGUgbGFzdCBxdWV1ZSBzdG9wIGZ1bmN0aW9uXG5cdFx0XHRkZWxldGUgaG9va3Muc3RvcDtcblx0XHRcdGZuLmNhbGwoIGVsZW0sIG5leHQsIGhvb2tzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCAhc3RhcnRMZW5ndGggJiYgaG9va3MgKSB7XG5cdFx0XHRob29rcy5lbXB0eS5maXJlKCk7XG5cdFx0fVxuXHR9LFxuXG5cdC8vIE5vdCBwdWJsaWMgLSBnZW5lcmF0ZSBhIHF1ZXVlSG9va3Mgb2JqZWN0LCBvciByZXR1cm4gdGhlIGN1cnJlbnQgb25lXG5cdF9xdWV1ZUhvb2tzOiBmdW5jdGlvbiggZWxlbSwgdHlwZSApIHtcblx0XHR2YXIga2V5ID0gdHlwZSArIFwicXVldWVIb29rc1wiO1xuXHRcdHJldHVybiBkYXRhX3ByaXYuZ2V0KCBlbGVtLCBrZXkgKSB8fCBkYXRhX3ByaXYuYWNjZXNzKCBlbGVtLCBrZXksIHtcblx0XHRcdGVtcHR5OiBqUXVlcnkuQ2FsbGJhY2tzKFwib25jZSBtZW1vcnlcIikuYWRkKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRkYXRhX3ByaXYucmVtb3ZlKCBlbGVtLCBbIHR5cGUgKyBcInF1ZXVlXCIsIGtleSBdICk7XG5cdFx0XHR9KVxuXHRcdH0pO1xuXHR9XG59KTtcblxualF1ZXJ5LmZuLmV4dGVuZCh7XG5cdHF1ZXVlOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHR2YXIgc2V0dGVyID0gMjtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRkYXRhID0gdHlwZTtcblx0XHRcdHR5cGUgPSBcImZ4XCI7XG5cdFx0XHRzZXR0ZXItLTtcblx0XHR9XG5cblx0XHRpZiAoIGFyZ3VtZW50cy5sZW5ndGggPCBzZXR0ZXIgKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LnF1ZXVlKCB0aGlzWzBdLCB0eXBlICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGRhdGEgPT09IHVuZGVmaW5lZCA/XG5cdFx0XHR0aGlzIDpcblx0XHRcdHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIHF1ZXVlID0galF1ZXJ5LnF1ZXVlKCB0aGlzLCB0eXBlLCBkYXRhICk7XG5cblx0XHRcdFx0Ly8gRW5zdXJlIGEgaG9va3MgZm9yIHRoaXMgcXVldWVcblx0XHRcdFx0alF1ZXJ5Ll9xdWV1ZUhvb2tzKCB0aGlzLCB0eXBlICk7XG5cblx0XHRcdFx0aWYgKCB0eXBlID09PSBcImZ4XCIgJiYgcXVldWVbMF0gIT09IFwiaW5wcm9ncmVzc1wiICkge1xuXHRcdFx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCB0eXBlICk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9LFxuXHRkZXF1ZXVlOiBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmRlcXVldWUoIHRoaXMsIHR5cGUgKTtcblx0XHR9KTtcblx0fSxcblx0Y2xlYXJRdWV1ZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUgfHwgXCJmeFwiLCBbXSApO1xuXHR9LFxuXHQvLyBHZXQgYSBwcm9taXNlIHJlc29sdmVkIHdoZW4gcXVldWVzIG9mIGEgY2VydGFpbiB0eXBlXG5cdC8vIGFyZSBlbXB0aWVkIChmeCBpcyB0aGUgdHlwZSBieSBkZWZhdWx0KVxuXHRwcm9taXNlOiBmdW5jdGlvbiggdHlwZSwgb2JqICkge1xuXHRcdHZhciB0bXAsXG5cdFx0XHRjb3VudCA9IDEsXG5cdFx0XHRkZWZlciA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXHRcdFx0ZWxlbWVudHMgPSB0aGlzLFxuXHRcdFx0aSA9IHRoaXMubGVuZ3RoLFxuXHRcdFx0cmVzb2x2ZSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoICEoIC0tY291bnQgKSApIHtcblx0XHRcdFx0XHRkZWZlci5yZXNvbHZlV2l0aCggZWxlbWVudHMsIFsgZWxlbWVudHMgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0aWYgKCB0eXBlb2YgdHlwZSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdG9iaiA9IHR5cGU7XG5cdFx0XHR0eXBlID0gdW5kZWZpbmVkO1xuXHRcdH1cblx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0XHR3aGlsZSAoIGktLSApIHtcblx0XHRcdHRtcCA9IGRhdGFfcHJpdi5nZXQoIGVsZW1lbnRzWyBpIF0sIHR5cGUgKyBcInF1ZXVlSG9va3NcIiApO1xuXHRcdFx0aWYgKCB0bXAgJiYgdG1wLmVtcHR5ICkge1xuXHRcdFx0XHRjb3VudCsrO1xuXHRcdFx0XHR0bXAuZW1wdHkuYWRkKCByZXNvbHZlICk7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJlc29sdmUoKTtcblx0XHRyZXR1cm4gZGVmZXIucHJvbWlzZSggb2JqICk7XG5cdH1cbn0pO1xudmFyIHBudW0gPSAoL1srLV0/KD86XFxkKlxcLnwpXFxkKyg/OltlRV1bKy1dP1xcZCt8KS8pLnNvdXJjZTtcblxudmFyIGNzc0V4cGFuZCA9IFsgXCJUb3BcIiwgXCJSaWdodFwiLCBcIkJvdHRvbVwiLCBcIkxlZnRcIiBdO1xuXG52YXIgaXNIaWRkZW4gPSBmdW5jdGlvbiggZWxlbSwgZWwgKSB7XG5cdFx0Ly8gaXNIaWRkZW4gbWlnaHQgYmUgY2FsbGVkIGZyb20galF1ZXJ5I2ZpbHRlciBmdW5jdGlvbjtcblx0XHQvLyBpbiB0aGF0IGNhc2UsIGVsZW1lbnQgd2lsbCBiZSBzZWNvbmQgYXJndW1lbnRcblx0XHRlbGVtID0gZWwgfHwgZWxlbTtcblx0XHRyZXR1cm4galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSA9PT0gXCJub25lXCIgfHwgIWpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICk7XG5cdH07XG5cbnZhciByY2hlY2thYmxlVHlwZSA9ICgvXig/OmNoZWNrYm94fHJhZGlvKSQvaSk7XG5cblxuXG4oZnVuY3Rpb24oKSB7XG5cdHZhciBmcmFnbWVudCA9IGRvY3VtZW50LmNyZWF0ZURvY3VtZW50RnJhZ21lbnQoKSxcblx0XHRkaXYgPSBmcmFnbWVudC5hcHBlbmRDaGlsZCggZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApICksXG5cdFx0aW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKTtcblxuXHQvLyBTdXBwb3J0OiBTYWZhcmk8PTUuMVxuXHQvLyBDaGVjayBzdGF0ZSBsb3N0IGlmIHRoZSBuYW1lIGlzIHNldCAoIzExMjE3KVxuXHQvLyBTdXBwb3J0OiBXaW5kb3dzIFdlYiBBcHBzIChXV0EpXG5cdC8vIGBuYW1lYCBhbmQgYHR5cGVgIG11c3QgdXNlIC5zZXRBdHRyaWJ1dGUgZm9yIFdXQSAoIzE0OTAxKVxuXHRpbnB1dC5zZXRBdHRyaWJ1dGUoIFwidHlwZVwiLCBcInJhZGlvXCIgKTtcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcImNoZWNrZWRcIiwgXCJjaGVja2VkXCIgKTtcblx0aW5wdXQuc2V0QXR0cmlidXRlKCBcIm5hbWVcIiwgXCJ0XCIgKTtcblxuXHRkaXYuYXBwZW5kQ2hpbGQoIGlucHV0ICk7XG5cblx0Ly8gU3VwcG9ydDogU2FmYXJpPD01LjEsIEFuZHJvaWQ8NC4yXG5cdC8vIE9sZGVyIFdlYktpdCBkb2Vzbid0IGNsb25lIGNoZWNrZWQgc3RhdGUgY29ycmVjdGx5IGluIGZyYWdtZW50c1xuXHRzdXBwb3J0LmNoZWNrQ2xvbmUgPSBkaXYuY2xvbmVOb2RlKCB0cnVlICkuY2xvbmVOb2RlKCB0cnVlICkubGFzdENoaWxkLmNoZWNrZWQ7XG5cblx0Ly8gU3VwcG9ydDogSUU8PTExK1xuXHQvLyBNYWtlIHN1cmUgdGV4dGFyZWEgKGFuZCBjaGVja2JveCkgZGVmYXVsdFZhbHVlIGlzIHByb3Blcmx5IGNsb25lZFxuXHRkaXYuaW5uZXJIVE1MID0gXCI8dGV4dGFyZWE+eDwvdGV4dGFyZWE+XCI7XG5cdHN1cHBvcnQubm9DbG9uZUNoZWNrZWQgPSAhIWRpdi5jbG9uZU5vZGUoIHRydWUgKS5sYXN0Q2hpbGQuZGVmYXVsdFZhbHVlO1xufSkoKTtcbnZhciBzdHJ1bmRlZmluZWQgPSB0eXBlb2YgdW5kZWZpbmVkO1xuXG5cblxuc3VwcG9ydC5mb2N1c2luQnViYmxlcyA9IFwib25mb2N1c2luXCIgaW4gd2luZG93O1xuXG5cbnZhclxuXHRya2V5RXZlbnQgPSAvXmtleS8sXG5cdHJtb3VzZUV2ZW50ID0gL14oPzptb3VzZXxwb2ludGVyfGNvbnRleHRtZW51KXxjbGljay8sXG5cdHJmb2N1c01vcnBoID0gL14oPzpmb2N1c2luZm9jdXN8Zm9jdXNvdXRibHVyKSQvLFxuXHRydHlwZW5hbWVzcGFjZSA9IC9eKFteLl0qKSg/OlxcLiguKyl8KSQvO1xuXG5mdW5jdGlvbiByZXR1cm5UcnVlKCkge1xuXHRyZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmV0dXJuRmFsc2UoKSB7XG5cdHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gc2FmZUFjdGl2ZUVsZW1lbnQoKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQ7XG5cdH0gY2F0Y2ggKCBlcnIgKSB7IH1cbn1cblxuLypcbiAqIEhlbHBlciBmdW5jdGlvbnMgZm9yIG1hbmFnaW5nIGV2ZW50cyAtLSBub3QgcGFydCBvZiB0aGUgcHVibGljIGludGVyZmFjZS5cbiAqIFByb3BzIHRvIERlYW4gRWR3YXJkcycgYWRkRXZlbnQgbGlicmFyeSBmb3IgbWFueSBvZiB0aGUgaWRlYXMuXG4gKi9cbmpRdWVyeS5ldmVudCA9IHtcblxuXHRnbG9iYWw6IHt9LFxuXG5cdGFkZDogZnVuY3Rpb24oIGVsZW0sIHR5cGVzLCBoYW5kbGVyLCBkYXRhLCBzZWxlY3RvciApIHtcblxuXHRcdHZhciBoYW5kbGVPYmpJbiwgZXZlbnRIYW5kbGUsIHRtcCxcblx0XHRcdGV2ZW50cywgdCwgaGFuZGxlT2JqLFxuXHRcdFx0c3BlY2lhbCwgaGFuZGxlcnMsIHR5cGUsIG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxuXHRcdFx0ZWxlbURhdGEgPSBkYXRhX3ByaXYuZ2V0KCBlbGVtICk7XG5cblx0XHQvLyBEb24ndCBhdHRhY2ggZXZlbnRzIHRvIG5vRGF0YSBvciB0ZXh0L2NvbW1lbnQgbm9kZXMgKGJ1dCBhbGxvdyBwbGFpbiBvYmplY3RzKVxuXHRcdGlmICggIWVsZW1EYXRhICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhbiBvYmplY3Qgb2YgY3VzdG9tIGRhdGEgaW4gbGlldSBvZiB0aGUgaGFuZGxlclxuXHRcdGlmICggaGFuZGxlci5oYW5kbGVyICkge1xuXHRcdFx0aGFuZGxlT2JqSW4gPSBoYW5kbGVyO1xuXHRcdFx0aGFuZGxlciA9IGhhbmRsZU9iakluLmhhbmRsZXI7XG5cdFx0XHRzZWxlY3RvciA9IGhhbmRsZU9iakluLnNlbGVjdG9yO1xuXHRcdH1cblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHRoZSBoYW5kbGVyIGhhcyBhIHVuaXF1ZSBJRCwgdXNlZCB0byBmaW5kL3JlbW92ZSBpdCBsYXRlclxuXHRcdGlmICggIWhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdGhhbmRsZXIuZ3VpZCA9IGpRdWVyeS5ndWlkKys7XG5cdFx0fVxuXG5cdFx0Ly8gSW5pdCB0aGUgZWxlbWVudCdzIGV2ZW50IHN0cnVjdHVyZSBhbmQgbWFpbiBoYW5kbGVyLCBpZiB0aGlzIGlzIHRoZSBmaXJzdFxuXHRcdGlmICggIShldmVudHMgPSBlbGVtRGF0YS5ldmVudHMpICkge1xuXHRcdFx0ZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzID0ge307XG5cdFx0fVxuXHRcdGlmICggIShldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSkgKSB7XG5cdFx0XHRldmVudEhhbmRsZSA9IGVsZW1EYXRhLmhhbmRsZSA9IGZ1bmN0aW9uKCBlICkge1xuXHRcdFx0XHQvLyBEaXNjYXJkIHRoZSBzZWNvbmQgZXZlbnQgb2YgYSBqUXVlcnkuZXZlbnQudHJpZ2dlcigpIGFuZFxuXHRcdFx0XHQvLyB3aGVuIGFuIGV2ZW50IGlzIGNhbGxlZCBhZnRlciBhIHBhZ2UgaGFzIHVubG9hZGVkXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgalF1ZXJ5ICE9PSBzdHJ1bmRlZmluZWQgJiYgalF1ZXJ5LmV2ZW50LnRyaWdnZXJlZCAhPT0gZS50eXBlID9cblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuZGlzcGF0Y2guYXBwbHkoIGVsZW0sIGFyZ3VtZW50cyApIDogdW5kZWZpbmVkO1xuXHRcdFx0fTtcblx0XHR9XG5cblx0XHQvLyBIYW5kbGUgbXVsdGlwbGUgZXZlbnRzIHNlcGFyYXRlZCBieSBhIHNwYWNlXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgWyBcIlwiIF07XG5cdFx0dCA9IHR5cGVzLmxlbmd0aDtcblx0XHR3aGlsZSAoIHQtLSApIHtcblx0XHRcdHRtcCA9IHJ0eXBlbmFtZXNwYWNlLmV4ZWMoIHR5cGVzW3RdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbMV07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbMl0gfHwgXCJcIiApLnNwbGl0KCBcIi5cIiApLnNvcnQoKTtcblxuXHRcdFx0Ly8gVGhlcmUgKm11c3QqIGJlIGEgdHlwZSwgbm8gYXR0YWNoaW5nIG5hbWVzcGFjZS1vbmx5IGhhbmRsZXJzXG5cdFx0XHRpZiAoICF0eXBlICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgZXZlbnQgY2hhbmdlcyBpdHMgdHlwZSwgdXNlIHRoZSBzcGVjaWFsIGV2ZW50IGhhbmRsZXJzIGZvciB0aGUgY2hhbmdlZCB0eXBlXG5cdFx0XHRzcGVjaWFsID0galF1ZXJ5LmV2ZW50LnNwZWNpYWxbIHR5cGUgXSB8fCB7fTtcblxuXHRcdFx0Ly8gSWYgc2VsZWN0b3IgZGVmaW5lZCwgZGV0ZXJtaW5lIHNwZWNpYWwgZXZlbnQgYXBpIHR5cGUsIG90aGVyd2lzZSBnaXZlbiB0eXBlXG5cdFx0XHR0eXBlID0gKCBzZWxlY3RvciA/IHNwZWNpYWwuZGVsZWdhdGVUeXBlIDogc3BlY2lhbC5iaW5kVHlwZSApIHx8IHR5cGU7XG5cblx0XHRcdC8vIFVwZGF0ZSBzcGVjaWFsIGJhc2VkIG9uIG5ld2x5IHJlc2V0IHR5cGVcblx0XHRcdHNwZWNpYWwgPSBqUXVlcnkuZXZlbnQuc3BlY2lhbFsgdHlwZSBdIHx8IHt9O1xuXG5cdFx0XHQvLyBoYW5kbGVPYmogaXMgcGFzc2VkIHRvIGFsbCBldmVudCBoYW5kbGVyc1xuXHRcdFx0aGFuZGxlT2JqID0galF1ZXJ5LmV4dGVuZCh7XG5cdFx0XHRcdHR5cGU6IHR5cGUsXG5cdFx0XHRcdG9yaWdUeXBlOiBvcmlnVHlwZSxcblx0XHRcdFx0ZGF0YTogZGF0YSxcblx0XHRcdFx0aGFuZGxlcjogaGFuZGxlcixcblx0XHRcdFx0Z3VpZDogaGFuZGxlci5ndWlkLFxuXHRcdFx0XHRzZWxlY3Rvcjogc2VsZWN0b3IsXG5cdFx0XHRcdG5lZWRzQ29udGV4dDogc2VsZWN0b3IgJiYgalF1ZXJ5LmV4cHIubWF0Y2gubmVlZHNDb250ZXh0LnRlc3QoIHNlbGVjdG9yICksXG5cdFx0XHRcdG5hbWVzcGFjZTogbmFtZXNwYWNlcy5qb2luKFwiLlwiKVxuXHRcdFx0fSwgaGFuZGxlT2JqSW4gKTtcblxuXHRcdFx0Ly8gSW5pdCB0aGUgZXZlbnQgaGFuZGxlciBxdWV1ZSBpZiB3ZSdyZSB0aGUgZmlyc3Rcblx0XHRcdGlmICggIShoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdKSApIHtcblx0XHRcdFx0aGFuZGxlcnMgPSBldmVudHNbIHR5cGUgXSA9IFtdO1xuXHRcdFx0XHRoYW5kbGVycy5kZWxlZ2F0ZUNvdW50ID0gMDtcblxuXHRcdFx0XHQvLyBPbmx5IHVzZSBhZGRFdmVudExpc3RlbmVyIGlmIHRoZSBzcGVjaWFsIGV2ZW50cyBoYW5kbGVyIHJldHVybnMgZmFsc2Vcblx0XHRcdFx0aWYgKCAhc3BlY2lhbC5zZXR1cCB8fCBzcGVjaWFsLnNldHVwLmNhbGwoIGVsZW0sIGRhdGEsIG5hbWVzcGFjZXMsIGV2ZW50SGFuZGxlICkgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGlmICggZWxlbS5hZGRFdmVudExpc3RlbmVyICkge1xuXHRcdFx0XHRcdFx0ZWxlbS5hZGRFdmVudExpc3RlbmVyKCB0eXBlLCBldmVudEhhbmRsZSwgZmFsc2UgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0aWYgKCBzcGVjaWFsLmFkZCApIHtcblx0XHRcdFx0c3BlY2lhbC5hZGQuY2FsbCggZWxlbSwgaGFuZGxlT2JqICk7XG5cblx0XHRcdFx0aWYgKCAhaGFuZGxlT2JqLmhhbmRsZXIuZ3VpZCApIHtcblx0XHRcdFx0XHRoYW5kbGVPYmouaGFuZGxlci5ndWlkID0gaGFuZGxlci5ndWlkO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdC8vIEFkZCB0byB0aGUgZWxlbWVudCdzIGhhbmRsZXIgbGlzdCwgZGVsZWdhdGVzIGluIGZyb250XG5cdFx0XHRpZiAoIHNlbGVjdG9yICkge1xuXHRcdFx0XHRoYW5kbGVycy5zcGxpY2UoIGhhbmRsZXJzLmRlbGVnYXRlQ291bnQrKywgMCwgaGFuZGxlT2JqICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRoYW5kbGVycy5wdXNoKCBoYW5kbGVPYmogKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gS2VlcCB0cmFjayBvZiB3aGljaCBldmVudHMgaGF2ZSBldmVyIGJlZW4gdXNlZCwgZm9yIGV2ZW50IG9wdGltaXphdGlvblxuXHRcdFx0alF1ZXJ5LmV2ZW50Lmdsb2JhbFsgdHlwZSBdID0gdHJ1ZTtcblx0XHR9XG5cblx0fSxcblxuXHQvLyBEZXRhY2ggYW4gZXZlbnQgb3Igc2V0IG9mIGV2ZW50cyBmcm9tIGFuIGVsZW1lbnRcblx0cmVtb3ZlOiBmdW5jdGlvbiggZWxlbSwgdHlwZXMsIGhhbmRsZXIsIHNlbGVjdG9yLCBtYXBwZWRUeXBlcyApIHtcblxuXHRcdHZhciBqLCBvcmlnQ291bnQsIHRtcCxcblx0XHRcdGV2ZW50cywgdCwgaGFuZGxlT2JqLFxuXHRcdFx0c3BlY2lhbCwgaGFuZGxlcnMsIHR5cGUsIG5hbWVzcGFjZXMsIG9yaWdUeXBlLFxuXHRcdFx0ZWxlbURhdGEgPSBkYXRhX3ByaXYuaGFzRGF0YSggZWxlbSApICYmIGRhdGFfcHJpdi5nZXQoIGVsZW0gKTtcblxuXHRcdGlmICggIWVsZW1EYXRhIHx8ICEoZXZlbnRzID0gZWxlbURhdGEuZXZlbnRzKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBPbmNlIGZvciBlYWNoIHR5cGUubmFtZXNwYWNlIGluIHR5cGVzOyB0eXBlIG1heSBiZSBvbWl0dGVkXG5cdFx0dHlwZXMgPSAoIHR5cGVzIHx8IFwiXCIgKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgWyBcIlwiIF07XG5cdFx0dCA9IHR5cGVzLmxlbmd0aDtcblx0XHR3aGlsZSAoIHQtLSApIHtcblx0XHRcdHRtcCA9IHJ0eXBlbmFtZXNwYWNlLmV4ZWMoIHR5cGVzW3RdICkgfHwgW107XG5cdFx0XHR0eXBlID0gb3JpZ1R5cGUgPSB0bXBbMV07XG5cdFx0XHRuYW1lc3BhY2VzID0gKCB0bXBbMl0gfHwgXCJcIiApLnNwbGl0KCBcIi5cIiApLnNvcnQoKTtcblxuXHRcdFx0Ly8gVW5iaW5kIGFsbCBldmVudHMgKG9uIHRoaXMgbmFtZXNwYWNlLCBpZiBwcm92aWRlZCkgZm9yIHRoZSBlbGVtZW50XG5cdFx0XHRpZiAoICF0eXBlICkge1xuXHRcdFx0XHRmb3IgKCB0eXBlIGluIGV2ZW50cyApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQucmVtb3ZlKCBlbGVtLCB0eXBlICsgdHlwZXNbIHQgXSwgaGFuZGxlciwgc2VsZWN0b3IsIHRydWUgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cdFx0XHR0eXBlID0gKCBzZWxlY3RvciA/IHNwZWNpYWwuZGVsZWdhdGVUeXBlIDogc3BlY2lhbC5iaW5kVHlwZSApIHx8IHR5cGU7XG5cdFx0XHRoYW5kbGVycyA9IGV2ZW50c1sgdHlwZSBdIHx8IFtdO1xuXHRcdFx0dG1wID0gdG1wWzJdICYmIG5ldyBSZWdFeHAoIFwiKF58XFxcXC4pXCIgKyBuYW1lc3BhY2VzLmpvaW4oXCJcXFxcLig/Oi4qXFxcXC58KVwiKSArIFwiKFxcXFwufCQpXCIgKTtcblxuXHRcdFx0Ly8gUmVtb3ZlIG1hdGNoaW5nIGV2ZW50c1xuXHRcdFx0b3JpZ0NvdW50ID0gaiA9IGhhbmRsZXJzLmxlbmd0aDtcblx0XHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0XHRoYW5kbGVPYmogPSBoYW5kbGVyc1sgaiBdO1xuXG5cdFx0XHRcdGlmICggKCBtYXBwZWRUeXBlcyB8fCBvcmlnVHlwZSA9PT0gaGFuZGxlT2JqLm9yaWdUeXBlICkgJiZcblx0XHRcdFx0XHQoICFoYW5kbGVyIHx8IGhhbmRsZXIuZ3VpZCA9PT0gaGFuZGxlT2JqLmd1aWQgKSAmJlxuXHRcdFx0XHRcdCggIXRtcCB8fCB0bXAudGVzdCggaGFuZGxlT2JqLm5hbWVzcGFjZSApICkgJiZcblx0XHRcdFx0XHQoICFzZWxlY3RvciB8fCBzZWxlY3RvciA9PT0gaGFuZGxlT2JqLnNlbGVjdG9yIHx8IHNlbGVjdG9yID09PSBcIioqXCIgJiYgaGFuZGxlT2JqLnNlbGVjdG9yICkgKSB7XG5cdFx0XHRcdFx0aGFuZGxlcnMuc3BsaWNlKCBqLCAxICk7XG5cblx0XHRcdFx0XHRpZiAoIGhhbmRsZU9iai5zZWxlY3RvciApIHtcblx0XHRcdFx0XHRcdGhhbmRsZXJzLmRlbGVnYXRlQ291bnQtLTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0aWYgKCBzcGVjaWFsLnJlbW92ZSApIHtcblx0XHRcdFx0XHRcdHNwZWNpYWwucmVtb3ZlLmNhbGwoIGVsZW0sIGhhbmRsZU9iaiApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBSZW1vdmUgZ2VuZXJpYyBldmVudCBoYW5kbGVyIGlmIHdlIHJlbW92ZWQgc29tZXRoaW5nIGFuZCBubyBtb3JlIGhhbmRsZXJzIGV4aXN0XG5cdFx0XHQvLyAoYXZvaWRzIHBvdGVudGlhbCBmb3IgZW5kbGVzcyByZWN1cnNpb24gZHVyaW5nIHJlbW92YWwgb2Ygc3BlY2lhbCBldmVudCBoYW5kbGVycylcblx0XHRcdGlmICggb3JpZ0NvdW50ICYmICFoYW5kbGVycy5sZW5ndGggKSB7XG5cdFx0XHRcdGlmICggIXNwZWNpYWwudGVhcmRvd24gfHwgc3BlY2lhbC50ZWFyZG93bi5jYWxsKCBlbGVtLCBuYW1lc3BhY2VzLCBlbGVtRGF0YS5oYW5kbGUgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0alF1ZXJ5LnJlbW92ZUV2ZW50KCBlbGVtLCB0eXBlLCBlbGVtRGF0YS5oYW5kbGUgKTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGRlbGV0ZSBldmVudHNbIHR5cGUgXTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBSZW1vdmUgdGhlIGV4cGFuZG8gaWYgaXQncyBubyBsb25nZXIgdXNlZFxuXHRcdGlmICggalF1ZXJ5LmlzRW1wdHlPYmplY3QoIGV2ZW50cyApICkge1xuXHRcdFx0ZGVsZXRlIGVsZW1EYXRhLmhhbmRsZTtcblx0XHRcdGRhdGFfcHJpdi5yZW1vdmUoIGVsZW0sIFwiZXZlbnRzXCIgKTtcblx0XHR9XG5cdH0sXG5cblx0dHJpZ2dlcjogZnVuY3Rpb24oIGV2ZW50LCBkYXRhLCBlbGVtLCBvbmx5SGFuZGxlcnMgKSB7XG5cblx0XHR2YXIgaSwgY3VyLCB0bXAsIGJ1YmJsZVR5cGUsIG9udHlwZSwgaGFuZGxlLCBzcGVjaWFsLFxuXHRcdFx0ZXZlbnRQYXRoID0gWyBlbGVtIHx8IGRvY3VtZW50IF0sXG5cdFx0XHR0eXBlID0gaGFzT3duLmNhbGwoIGV2ZW50LCBcInR5cGVcIiApID8gZXZlbnQudHlwZSA6IGV2ZW50LFxuXHRcdFx0bmFtZXNwYWNlcyA9IGhhc093bi5jYWxsKCBldmVudCwgXCJuYW1lc3BhY2VcIiApID8gZXZlbnQubmFtZXNwYWNlLnNwbGl0KFwiLlwiKSA6IFtdO1xuXG5cdFx0Y3VyID0gdG1wID0gZWxlbSA9IGVsZW0gfHwgZG9jdW1lbnQ7XG5cblx0XHQvLyBEb24ndCBkbyBldmVudHMgb24gdGV4dCBhbmQgY29tbWVudCBub2Rlc1xuXHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMyB8fCBlbGVtLm5vZGVUeXBlID09PSA4ICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIGZvY3VzL2JsdXIgbW9ycGhzIHRvIGZvY3VzaW4vb3V0OyBlbnN1cmUgd2UncmUgbm90IGZpcmluZyB0aGVtIHJpZ2h0IG5vd1xuXHRcdGlmICggcmZvY3VzTW9ycGgudGVzdCggdHlwZSArIGpRdWVyeS5ldmVudC50cmlnZ2VyZWQgKSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHRpZiAoIHR5cGUuaW5kZXhPZihcIi5cIikgPj0gMCApIHtcblx0XHRcdC8vIE5hbWVzcGFjZWQgdHJpZ2dlcjsgY3JlYXRlIGEgcmVnZXhwIHRvIG1hdGNoIGV2ZW50IHR5cGUgaW4gaGFuZGxlKClcblx0XHRcdG5hbWVzcGFjZXMgPSB0eXBlLnNwbGl0KFwiLlwiKTtcblx0XHRcdHR5cGUgPSBuYW1lc3BhY2VzLnNoaWZ0KCk7XG5cdFx0XHRuYW1lc3BhY2VzLnNvcnQoKTtcblx0XHR9XG5cdFx0b250eXBlID0gdHlwZS5pbmRleE9mKFwiOlwiKSA8IDAgJiYgXCJvblwiICsgdHlwZTtcblxuXHRcdC8vIENhbGxlciBjYW4gcGFzcyBpbiBhIGpRdWVyeS5FdmVudCBvYmplY3QsIE9iamVjdCwgb3IganVzdCBhbiBldmVudCB0eXBlIHN0cmluZ1xuXHRcdGV2ZW50ID0gZXZlbnRbIGpRdWVyeS5leHBhbmRvIF0gP1xuXHRcdFx0ZXZlbnQgOlxuXHRcdFx0bmV3IGpRdWVyeS5FdmVudCggdHlwZSwgdHlwZW9mIGV2ZW50ID09PSBcIm9iamVjdFwiICYmIGV2ZW50ICk7XG5cblx0XHQvLyBUcmlnZ2VyIGJpdG1hc2s6ICYgMSBmb3IgbmF0aXZlIGhhbmRsZXJzOyAmIDIgZm9yIGpRdWVyeSAoYWx3YXlzIHRydWUpXG5cdFx0ZXZlbnQuaXNUcmlnZ2VyID0gb25seUhhbmRsZXJzID8gMiA6IDM7XG5cdFx0ZXZlbnQubmFtZXNwYWNlID0gbmFtZXNwYWNlcy5qb2luKFwiLlwiKTtcblx0XHRldmVudC5uYW1lc3BhY2VfcmUgPSBldmVudC5uYW1lc3BhY2UgP1xuXHRcdFx0bmV3IFJlZ0V4cCggXCIoXnxcXFxcLilcIiArIG5hbWVzcGFjZXMuam9pbihcIlxcXFwuKD86LipcXFxcLnwpXCIpICsgXCIoXFxcXC58JClcIiApIDpcblx0XHRcdG51bGw7XG5cblx0XHQvLyBDbGVhbiB1cCB0aGUgZXZlbnQgaW4gY2FzZSBpdCBpcyBiZWluZyByZXVzZWRcblx0XHRldmVudC5yZXN1bHQgPSB1bmRlZmluZWQ7XG5cdFx0aWYgKCAhZXZlbnQudGFyZ2V0ICkge1xuXHRcdFx0ZXZlbnQudGFyZ2V0ID0gZWxlbTtcblx0XHR9XG5cblx0XHQvLyBDbG9uZSBhbnkgaW5jb21pbmcgZGF0YSBhbmQgcHJlcGVuZCB0aGUgZXZlbnQsIGNyZWF0aW5nIHRoZSBoYW5kbGVyIGFyZyBsaXN0XG5cdFx0ZGF0YSA9IGRhdGEgPT0gbnVsbCA/XG5cdFx0XHRbIGV2ZW50IF0gOlxuXHRcdFx0alF1ZXJ5Lm1ha2VBcnJheSggZGF0YSwgWyBldmVudCBdICk7XG5cblx0XHQvLyBBbGxvdyBzcGVjaWFsIGV2ZW50cyB0byBkcmF3IG91dHNpZGUgdGhlIGxpbmVzXG5cdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyB0eXBlIF0gfHwge307XG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmIHNwZWNpYWwudHJpZ2dlciAmJiBzcGVjaWFsLnRyaWdnZXIuYXBwbHkoIGVsZW0sIGRhdGEgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGV2ZW50IHByb3BhZ2F0aW9uIHBhdGggaW4gYWR2YW5jZSwgcGVyIFczQyBldmVudHMgc3BlYyAoIzk5NTEpXG5cdFx0Ly8gQnViYmxlIHVwIHRvIGRvY3VtZW50LCB0aGVuIHRvIHdpbmRvdzsgd2F0Y2ggZm9yIGEgZ2xvYmFsIG93bmVyRG9jdW1lbnQgdmFyICgjOTcyNClcblx0XHRpZiAoICFvbmx5SGFuZGxlcnMgJiYgIXNwZWNpYWwubm9CdWJibGUgJiYgIWpRdWVyeS5pc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRidWJibGVUeXBlID0gc3BlY2lhbC5kZWxlZ2F0ZVR5cGUgfHwgdHlwZTtcblx0XHRcdGlmICggIXJmb2N1c01vcnBoLnRlc3QoIGJ1YmJsZVR5cGUgKyB0eXBlICkgKSB7XG5cdFx0XHRcdGN1ciA9IGN1ci5wYXJlbnROb2RlO1xuXHRcdFx0fVxuXHRcdFx0Zm9yICggOyBjdXI7IGN1ciA9IGN1ci5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRldmVudFBhdGgucHVzaCggY3VyICk7XG5cdFx0XHRcdHRtcCA9IGN1cjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT25seSBhZGQgd2luZG93IGlmIHdlIGdvdCB0byBkb2N1bWVudCAoZS5nLiwgbm90IHBsYWluIG9iaiBvciBkZXRhY2hlZCBET00pXG5cdFx0XHRpZiAoIHRtcCA9PT0gKGVsZW0ub3duZXJEb2N1bWVudCB8fCBkb2N1bWVudCkgKSB7XG5cdFx0XHRcdGV2ZW50UGF0aC5wdXNoKCB0bXAuZGVmYXVsdFZpZXcgfHwgdG1wLnBhcmVudFdpbmRvdyB8fCB3aW5kb3cgKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBGaXJlIGhhbmRsZXJzIG9uIHRoZSBldmVudCBwYXRoXG5cdFx0aSA9IDA7XG5cdFx0d2hpbGUgKCAoY3VyID0gZXZlbnRQYXRoW2krK10pICYmICFldmVudC5pc1Byb3BhZ2F0aW9uU3RvcHBlZCgpICkge1xuXG5cdFx0XHRldmVudC50eXBlID0gaSA+IDEgP1xuXHRcdFx0XHRidWJibGVUeXBlIDpcblx0XHRcdFx0c3BlY2lhbC5iaW5kVHlwZSB8fCB0eXBlO1xuXG5cdFx0XHQvLyBqUXVlcnkgaGFuZGxlclxuXHRcdFx0aGFuZGxlID0gKCBkYXRhX3ByaXYuZ2V0KCBjdXIsIFwiZXZlbnRzXCIgKSB8fCB7fSApWyBldmVudC50eXBlIF0gJiYgZGF0YV9wcml2LmdldCggY3VyLCBcImhhbmRsZVwiICk7XG5cdFx0XHRpZiAoIGhhbmRsZSApIHtcblx0XHRcdFx0aGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gTmF0aXZlIGhhbmRsZXJcblx0XHRcdGhhbmRsZSA9IG9udHlwZSAmJiBjdXJbIG9udHlwZSBdO1xuXHRcdFx0aWYgKCBoYW5kbGUgJiYgaGFuZGxlLmFwcGx5ICYmIGpRdWVyeS5hY2NlcHREYXRhKCBjdXIgKSApIHtcblx0XHRcdFx0ZXZlbnQucmVzdWx0ID0gaGFuZGxlLmFwcGx5KCBjdXIsIGRhdGEgKTtcblx0XHRcdFx0aWYgKCBldmVudC5yZXN1bHQgPT09IGZhbHNlICkge1xuXHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0ZXZlbnQudHlwZSA9IHR5cGU7XG5cblx0XHQvLyBJZiBub2JvZHkgcHJldmVudGVkIHRoZSBkZWZhdWx0IGFjdGlvbiwgZG8gaXQgbm93XG5cdFx0aWYgKCAhb25seUhhbmRsZXJzICYmICFldmVudC5pc0RlZmF1bHRQcmV2ZW50ZWQoKSApIHtcblxuXHRcdFx0aWYgKCAoIXNwZWNpYWwuX2RlZmF1bHQgfHwgc3BlY2lhbC5fZGVmYXVsdC5hcHBseSggZXZlbnRQYXRoLnBvcCgpLCBkYXRhICkgPT09IGZhbHNlKSAmJlxuXHRcdFx0XHRqUXVlcnkuYWNjZXB0RGF0YSggZWxlbSApICkge1xuXG5cdFx0XHRcdC8vIENhbGwgYSBuYXRpdmUgRE9NIG1ldGhvZCBvbiB0aGUgdGFyZ2V0IHdpdGggdGhlIHNhbWUgbmFtZSBuYW1lIGFzIHRoZSBldmVudC5cblx0XHRcdFx0Ly8gRG9uJ3QgZG8gZGVmYXVsdCBhY3Rpb25zIG9uIHdpbmRvdywgdGhhdCdzIHdoZXJlIGdsb2JhbCB2YXJpYWJsZXMgYmUgKCM2MTcwKVxuXHRcdFx0XHRpZiAoIG9udHlwZSAmJiBqUXVlcnkuaXNGdW5jdGlvbiggZWxlbVsgdHlwZSBdICkgJiYgIWpRdWVyeS5pc1dpbmRvdyggZWxlbSApICkge1xuXG5cdFx0XHRcdFx0Ly8gRG9uJ3QgcmUtdHJpZ2dlciBhbiBvbkZPTyBldmVudCB3aGVuIHdlIGNhbGwgaXRzIEZPTygpIG1ldGhvZFxuXHRcdFx0XHRcdHRtcCA9IGVsZW1bIG9udHlwZSBdO1xuXG5cdFx0XHRcdFx0aWYgKCB0bXAgKSB7XG5cdFx0XHRcdFx0XHRlbGVtWyBvbnR5cGUgXSA9IG51bGw7XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0Ly8gUHJldmVudCByZS10cmlnZ2VyaW5nIG9mIHRoZSBzYW1lIGV2ZW50LCBzaW5jZSB3ZSBhbHJlYWR5IGJ1YmJsZWQgaXQgYWJvdmVcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdHlwZTtcblx0XHRcdFx0XHRlbGVtWyB0eXBlIF0oKTtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQudHJpZ2dlcmVkID0gdW5kZWZpbmVkO1xuXG5cdFx0XHRcdFx0aWYgKCB0bXAgKSB7XG5cdFx0XHRcdFx0XHRlbGVtWyBvbnR5cGUgXSA9IHRtcDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnQucmVzdWx0O1xuXHR9LFxuXG5cdGRpc3BhdGNoOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cblx0XHQvLyBNYWtlIGEgd3JpdGFibGUgalF1ZXJ5LkV2ZW50IGZyb20gdGhlIG5hdGl2ZSBldmVudCBvYmplY3Rcblx0XHRldmVudCA9IGpRdWVyeS5ldmVudC5maXgoIGV2ZW50ICk7XG5cblx0XHR2YXIgaSwgaiwgcmV0LCBtYXRjaGVkLCBoYW5kbGVPYmosXG5cdFx0XHRoYW5kbGVyUXVldWUgPSBbXSxcblx0XHRcdGFyZ3MgPSBzbGljZS5jYWxsKCBhcmd1bWVudHMgKSxcblx0XHRcdGhhbmRsZXJzID0gKCBkYXRhX3ByaXYuZ2V0KCB0aGlzLCBcImV2ZW50c1wiICkgfHwge30gKVsgZXZlbnQudHlwZSBdIHx8IFtdLFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsWyBldmVudC50eXBlIF0gfHwge307XG5cblx0XHQvLyBVc2UgdGhlIGZpeC1lZCBqUXVlcnkuRXZlbnQgcmF0aGVyIHRoYW4gdGhlIChyZWFkLW9ubHkpIG5hdGl2ZSBldmVudFxuXHRcdGFyZ3NbMF0gPSBldmVudDtcblx0XHRldmVudC5kZWxlZ2F0ZVRhcmdldCA9IHRoaXM7XG5cblx0XHQvLyBDYWxsIHRoZSBwcmVEaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGUsIGFuZCBsZXQgaXQgYmFpbCBpZiBkZXNpcmVkXG5cdFx0aWYgKCBzcGVjaWFsLnByZURpc3BhdGNoICYmIHNwZWNpYWwucHJlRGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Ly8gRGV0ZXJtaW5lIGhhbmRsZXJzXG5cdFx0aGFuZGxlclF1ZXVlID0galF1ZXJ5LmV2ZW50LmhhbmRsZXJzLmNhbGwoIHRoaXMsIGV2ZW50LCBoYW5kbGVycyApO1xuXG5cdFx0Ly8gUnVuIGRlbGVnYXRlcyBmaXJzdDsgdGhleSBtYXkgd2FudCB0byBzdG9wIHByb3BhZ2F0aW9uIGJlbmVhdGggdXNcblx0XHRpID0gMDtcblx0XHR3aGlsZSAoIChtYXRjaGVkID0gaGFuZGxlclF1ZXVlWyBpKysgXSkgJiYgIWV2ZW50LmlzUHJvcGFnYXRpb25TdG9wcGVkKCkgKSB7XG5cdFx0XHRldmVudC5jdXJyZW50VGFyZ2V0ID0gbWF0Y2hlZC5lbGVtO1xuXG5cdFx0XHRqID0gMDtcblx0XHRcdHdoaWxlICggKGhhbmRsZU9iaiA9IG1hdGNoZWQuaGFuZGxlcnNbIGorKyBdKSAmJiAhZXZlbnQuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQoKSApIHtcblxuXHRcdFx0XHQvLyBUcmlnZ2VyZWQgZXZlbnQgbXVzdCBlaXRoZXIgMSkgaGF2ZSBubyBuYW1lc3BhY2UsIG9yIDIpIGhhdmUgbmFtZXNwYWNlKHMpXG5cdFx0XHRcdC8vIGEgc3Vic2V0IG9yIGVxdWFsIHRvIHRob3NlIGluIHRoZSBib3VuZCBldmVudCAoYm90aCBjYW4gaGF2ZSBubyBuYW1lc3BhY2UpLlxuXHRcdFx0XHRpZiAoICFldmVudC5uYW1lc3BhY2VfcmUgfHwgZXZlbnQubmFtZXNwYWNlX3JlLnRlc3QoIGhhbmRsZU9iai5uYW1lc3BhY2UgKSApIHtcblxuXHRcdFx0XHRcdGV2ZW50LmhhbmRsZU9iaiA9IGhhbmRsZU9iajtcblx0XHRcdFx0XHRldmVudC5kYXRhID0gaGFuZGxlT2JqLmRhdGE7XG5cblx0XHRcdFx0XHRyZXQgPSAoIChqUXVlcnkuZXZlbnQuc3BlY2lhbFsgaGFuZGxlT2JqLm9yaWdUeXBlIF0gfHwge30pLmhhbmRsZSB8fCBoYW5kbGVPYmouaGFuZGxlciApXG5cdFx0XHRcdFx0XHRcdC5hcHBseSggbWF0Y2hlZC5lbGVtLCBhcmdzICk7XG5cblx0XHRcdFx0XHRpZiAoIHJldCAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdFx0aWYgKCAoZXZlbnQucmVzdWx0ID0gcmV0KSA9PT0gZmFsc2UgKSB7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0XHRcdFx0XHRcdGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIENhbGwgdGhlIHBvc3REaXNwYXRjaCBob29rIGZvciB0aGUgbWFwcGVkIHR5cGVcblx0XHRpZiAoIHNwZWNpYWwucG9zdERpc3BhdGNoICkge1xuXHRcdFx0c3BlY2lhbC5wb3N0RGlzcGF0Y2guY2FsbCggdGhpcywgZXZlbnQgKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gZXZlbnQucmVzdWx0O1xuXHR9LFxuXG5cdGhhbmRsZXJzOiBmdW5jdGlvbiggZXZlbnQsIGhhbmRsZXJzICkge1xuXHRcdHZhciBpLCBtYXRjaGVzLCBzZWwsIGhhbmRsZU9iaixcblx0XHRcdGhhbmRsZXJRdWV1ZSA9IFtdLFxuXHRcdFx0ZGVsZWdhdGVDb3VudCA9IGhhbmRsZXJzLmRlbGVnYXRlQ291bnQsXG5cdFx0XHRjdXIgPSBldmVudC50YXJnZXQ7XG5cblx0XHQvLyBGaW5kIGRlbGVnYXRlIGhhbmRsZXJzXG5cdFx0Ly8gQmxhY2staG9sZSBTVkcgPHVzZT4gaW5zdGFuY2UgdHJlZXMgKCMxMzE4MClcblx0XHQvLyBBdm9pZCBub24tbGVmdC1jbGljayBidWJibGluZyBpbiBGaXJlZm94ICgjMzg2MSlcblx0XHRpZiAoIGRlbGVnYXRlQ291bnQgJiYgY3VyLm5vZGVUeXBlICYmICghZXZlbnQuYnV0dG9uIHx8IGV2ZW50LnR5cGUgIT09IFwiY2xpY2tcIikgKSB7XG5cblx0XHRcdGZvciAoIDsgY3VyICE9PSB0aGlzOyBjdXIgPSBjdXIucGFyZW50Tm9kZSB8fCB0aGlzICkge1xuXG5cdFx0XHRcdC8vIERvbid0IHByb2Nlc3MgY2xpY2tzIG9uIGRpc2FibGVkIGVsZW1lbnRzICgjNjkxMSwgIzgxNjUsICMxMTM4MiwgIzExNzY0KVxuXHRcdFx0XHRpZiAoIGN1ci5kaXNhYmxlZCAhPT0gdHJ1ZSB8fCBldmVudC50eXBlICE9PSBcImNsaWNrXCIgKSB7XG5cdFx0XHRcdFx0bWF0Y2hlcyA9IFtdO1xuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgZGVsZWdhdGVDb3VudDsgaSsrICkge1xuXHRcdFx0XHRcdFx0aGFuZGxlT2JqID0gaGFuZGxlcnNbIGkgXTtcblxuXHRcdFx0XHRcdFx0Ly8gRG9uJ3QgY29uZmxpY3Qgd2l0aCBPYmplY3QucHJvdG90eXBlIHByb3BlcnRpZXMgKCMxMzIwMylcblx0XHRcdFx0XHRcdHNlbCA9IGhhbmRsZU9iai5zZWxlY3RvciArIFwiIFwiO1xuXG5cdFx0XHRcdFx0XHRpZiAoIG1hdGNoZXNbIHNlbCBdID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZXNbIHNlbCBdID0gaGFuZGxlT2JqLm5lZWRzQ29udGV4dCA/XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5KCBzZWwsIHRoaXMgKS5pbmRleCggY3VyICkgPj0gMCA6XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LmZpbmQoIHNlbCwgdGhpcywgbnVsbCwgWyBjdXIgXSApLmxlbmd0aDtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdGlmICggbWF0Y2hlc1sgc2VsIF0gKSB7XG5cdFx0XHRcdFx0XHRcdG1hdGNoZXMucHVzaCggaGFuZGxlT2JqICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggbWF0Y2hlcy5sZW5ndGggKSB7XG5cdFx0XHRcdFx0XHRoYW5kbGVyUXVldWUucHVzaCh7IGVsZW06IGN1ciwgaGFuZGxlcnM6IG1hdGNoZXMgfSk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gQWRkIHRoZSByZW1haW5pbmcgKGRpcmVjdGx5LWJvdW5kKSBoYW5kbGVyc1xuXHRcdGlmICggZGVsZWdhdGVDb3VudCA8IGhhbmRsZXJzLmxlbmd0aCApIHtcblx0XHRcdGhhbmRsZXJRdWV1ZS5wdXNoKHsgZWxlbTogdGhpcywgaGFuZGxlcnM6IGhhbmRsZXJzLnNsaWNlKCBkZWxlZ2F0ZUNvdW50ICkgfSk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGhhbmRsZXJRdWV1ZTtcblx0fSxcblxuXHQvLyBJbmNsdWRlcyBzb21lIGV2ZW50IHByb3BzIHNoYXJlZCBieSBLZXlFdmVudCBhbmQgTW91c2VFdmVudFxuXHRwcm9wczogXCJhbHRLZXkgYnViYmxlcyBjYW5jZWxhYmxlIGN0cmxLZXkgY3VycmVudFRhcmdldCBldmVudFBoYXNlIG1ldGFLZXkgcmVsYXRlZFRhcmdldCBzaGlmdEtleSB0YXJnZXQgdGltZVN0YW1wIHZpZXcgd2hpY2hcIi5zcGxpdChcIiBcIiksXG5cblx0Zml4SG9va3M6IHt9LFxuXG5cdGtleUhvb2tzOiB7XG5cdFx0cHJvcHM6IFwiY2hhciBjaGFyQ29kZSBrZXkga2V5Q29kZVwiLnNwbGl0KFwiIFwiKSxcblx0XHRmaWx0ZXI6IGZ1bmN0aW9uKCBldmVudCwgb3JpZ2luYWwgKSB7XG5cblx0XHRcdC8vIEFkZCB3aGljaCBmb3Iga2V5IGV2ZW50c1xuXHRcdFx0aWYgKCBldmVudC53aGljaCA9PSBudWxsICkge1xuXHRcdFx0XHRldmVudC53aGljaCA9IG9yaWdpbmFsLmNoYXJDb2RlICE9IG51bGwgPyBvcmlnaW5hbC5jaGFyQ29kZSA6IG9yaWdpbmFsLmtleUNvZGU7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBldmVudDtcblx0XHR9XG5cdH0sXG5cblx0bW91c2VIb29rczoge1xuXHRcdHByb3BzOiBcImJ1dHRvbiBidXR0b25zIGNsaWVudFggY2xpZW50WSBvZmZzZXRYIG9mZnNldFkgcGFnZVggcGFnZVkgc2NyZWVuWCBzY3JlZW5ZIHRvRWxlbWVudFwiLnNwbGl0KFwiIFwiKSxcblx0XHRmaWx0ZXI6IGZ1bmN0aW9uKCBldmVudCwgb3JpZ2luYWwgKSB7XG5cdFx0XHR2YXIgZXZlbnREb2MsIGRvYywgYm9keSxcblx0XHRcdFx0YnV0dG9uID0gb3JpZ2luYWwuYnV0dG9uO1xuXG5cdFx0XHQvLyBDYWxjdWxhdGUgcGFnZVgvWSBpZiBtaXNzaW5nIGFuZCBjbGllbnRYL1kgYXZhaWxhYmxlXG5cdFx0XHRpZiAoIGV2ZW50LnBhZ2VYID09IG51bGwgJiYgb3JpZ2luYWwuY2xpZW50WCAhPSBudWxsICkge1xuXHRcdFx0XHRldmVudERvYyA9IGV2ZW50LnRhcmdldC5vd25lckRvY3VtZW50IHx8IGRvY3VtZW50O1xuXHRcdFx0XHRkb2MgPSBldmVudERvYy5kb2N1bWVudEVsZW1lbnQ7XG5cdFx0XHRcdGJvZHkgPSBldmVudERvYy5ib2R5O1xuXG5cdFx0XHRcdGV2ZW50LnBhZ2VYID0gb3JpZ2luYWwuY2xpZW50WCArICggZG9jICYmIGRvYy5zY3JvbGxMZWZ0IHx8IGJvZHkgJiYgYm9keS5zY3JvbGxMZWZ0IHx8IDAgKSAtICggZG9jICYmIGRvYy5jbGllbnRMZWZ0IHx8IGJvZHkgJiYgYm9keS5jbGllbnRMZWZ0IHx8IDAgKTtcblx0XHRcdFx0ZXZlbnQucGFnZVkgPSBvcmlnaW5hbC5jbGllbnRZICsgKCBkb2MgJiYgZG9jLnNjcm9sbFRvcCAgfHwgYm9keSAmJiBib2R5LnNjcm9sbFRvcCAgfHwgMCApIC0gKCBkb2MgJiYgZG9jLmNsaWVudFRvcCAgfHwgYm9keSAmJiBib2R5LmNsaWVudFRvcCAgfHwgMCApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgd2hpY2ggZm9yIGNsaWNrOiAxID09PSBsZWZ0OyAyID09PSBtaWRkbGU7IDMgPT09IHJpZ2h0XG5cdFx0XHQvLyBOb3RlOiBidXR0b24gaXMgbm90IG5vcm1hbGl6ZWQsIHNvIGRvbid0IHVzZSBpdFxuXHRcdFx0aWYgKCAhZXZlbnQud2hpY2ggJiYgYnV0dG9uICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdGV2ZW50LndoaWNoID0gKCBidXR0b24gJiAxID8gMSA6ICggYnV0dG9uICYgMiA/IDMgOiAoIGJ1dHRvbiAmIDQgPyAyIDogMCApICkgKTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIGV2ZW50O1xuXHRcdH1cblx0fSxcblxuXHRmaXg6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRpZiAoIGV2ZW50WyBqUXVlcnkuZXhwYW5kbyBdICkge1xuXHRcdFx0cmV0dXJuIGV2ZW50O1xuXHRcdH1cblxuXHRcdC8vIENyZWF0ZSBhIHdyaXRhYmxlIGNvcHkgb2YgdGhlIGV2ZW50IG9iamVjdCBhbmQgbm9ybWFsaXplIHNvbWUgcHJvcGVydGllc1xuXHRcdHZhciBpLCBwcm9wLCBjb3B5LFxuXHRcdFx0dHlwZSA9IGV2ZW50LnR5cGUsXG5cdFx0XHRvcmlnaW5hbEV2ZW50ID0gZXZlbnQsXG5cdFx0XHRmaXhIb29rID0gdGhpcy5maXhIb29rc1sgdHlwZSBdO1xuXG5cdFx0aWYgKCAhZml4SG9vayApIHtcblx0XHRcdHRoaXMuZml4SG9va3NbIHR5cGUgXSA9IGZpeEhvb2sgPVxuXHRcdFx0XHRybW91c2VFdmVudC50ZXN0KCB0eXBlICkgPyB0aGlzLm1vdXNlSG9va3MgOlxuXHRcdFx0XHRya2V5RXZlbnQudGVzdCggdHlwZSApID8gdGhpcy5rZXlIb29rcyA6XG5cdFx0XHRcdHt9O1xuXHRcdH1cblx0XHRjb3B5ID0gZml4SG9vay5wcm9wcyA/IHRoaXMucHJvcHMuY29uY2F0KCBmaXhIb29rLnByb3BzICkgOiB0aGlzLnByb3BzO1xuXG5cdFx0ZXZlbnQgPSBuZXcgalF1ZXJ5LkV2ZW50KCBvcmlnaW5hbEV2ZW50ICk7XG5cblx0XHRpID0gY29weS5sZW5ndGg7XG5cdFx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0XHRwcm9wID0gY29weVsgaSBdO1xuXHRcdFx0ZXZlbnRbIHByb3AgXSA9IG9yaWdpbmFsRXZlbnRbIHByb3AgXTtcblx0XHR9XG5cblx0XHQvLyBTdXBwb3J0OiBDb3Jkb3ZhIDIuNSAoV2ViS2l0KSAoIzEzMjU1KVxuXHRcdC8vIEFsbCBldmVudHMgc2hvdWxkIGhhdmUgYSB0YXJnZXQ7IENvcmRvdmEgZGV2aWNlcmVhZHkgZG9lc24ndFxuXHRcdGlmICggIWV2ZW50LnRhcmdldCApIHtcblx0XHRcdGV2ZW50LnRhcmdldCA9IGRvY3VtZW50O1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IFNhZmFyaSA2LjArLCBDaHJvbWU8Mjhcblx0XHQvLyBUYXJnZXQgc2hvdWxkIG5vdCBiZSBhIHRleHQgbm9kZSAoIzUwNCwgIzEzMTQzKVxuXHRcdGlmICggZXZlbnQudGFyZ2V0Lm5vZGVUeXBlID09PSAzICkge1xuXHRcdFx0ZXZlbnQudGFyZ2V0ID0gZXZlbnQudGFyZ2V0LnBhcmVudE5vZGU7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZpeEhvb2suZmlsdGVyID8gZml4SG9vay5maWx0ZXIoIGV2ZW50LCBvcmlnaW5hbEV2ZW50ICkgOiBldmVudDtcblx0fSxcblxuXHRzcGVjaWFsOiB7XG5cdFx0bG9hZDoge1xuXHRcdFx0Ly8gUHJldmVudCB0cmlnZ2VyZWQgaW1hZ2UubG9hZCBldmVudHMgZnJvbSBidWJibGluZyB0byB3aW5kb3cubG9hZFxuXHRcdFx0bm9CdWJibGU6IHRydWVcblx0XHR9LFxuXHRcdGZvY3VzOiB7XG5cdFx0XHQvLyBGaXJlIG5hdGl2ZSBldmVudCBpZiBwb3NzaWJsZSBzbyBibHVyL2ZvY3VzIHNlcXVlbmNlIGlzIGNvcnJlY3Rcblx0XHRcdHRyaWdnZXI6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIHRoaXMgIT09IHNhZmVBY3RpdmVFbGVtZW50KCkgJiYgdGhpcy5mb2N1cyApIHtcblx0XHRcdFx0XHR0aGlzLmZvY3VzKCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZGVsZWdhdGVUeXBlOiBcImZvY3VzaW5cIlxuXHRcdH0sXG5cdFx0Ymx1cjoge1xuXHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggdGhpcyA9PT0gc2FmZUFjdGl2ZUVsZW1lbnQoKSAmJiB0aGlzLmJsdXIgKSB7XG5cdFx0XHRcdFx0dGhpcy5ibHVyKCk7XG5cdFx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0XHR9XG5cdFx0XHR9LFxuXHRcdFx0ZGVsZWdhdGVUeXBlOiBcImZvY3Vzb3V0XCJcblx0XHR9LFxuXHRcdGNsaWNrOiB7XG5cdFx0XHQvLyBGb3IgY2hlY2tib3gsIGZpcmUgbmF0aXZlIGV2ZW50IHNvIGNoZWNrZWQgc3RhdGUgd2lsbCBiZSByaWdodFxuXHRcdFx0dHJpZ2dlcjogZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGlmICggdGhpcy50eXBlID09PSBcImNoZWNrYm94XCIgJiYgdGhpcy5jbGljayAmJiBqUXVlcnkubm9kZU5hbWUoIHRoaXMsIFwiaW5wdXRcIiApICkge1xuXHRcdFx0XHRcdHRoaXMuY2xpY2soKTtcblx0XHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHRcdH1cblx0XHRcdH0sXG5cblx0XHRcdC8vIEZvciBjcm9zcy1icm93c2VyIGNvbnNpc3RlbmN5LCBkb24ndCBmaXJlIG5hdGl2ZSAuY2xpY2soKSBvbiBsaW5rc1xuXHRcdFx0X2RlZmF1bHQ6IGZ1bmN0aW9uKCBldmVudCApIHtcblx0XHRcdFx0cmV0dXJuIGpRdWVyeS5ub2RlTmFtZSggZXZlbnQudGFyZ2V0LCBcImFcIiApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRiZWZvcmV1bmxvYWQ6IHtcblx0XHRcdHBvc3REaXNwYXRjaDogZnVuY3Rpb24oIGV2ZW50ICkge1xuXG5cdFx0XHRcdC8vIFN1cHBvcnQ6IEZpcmVmb3ggMjArXG5cdFx0XHRcdC8vIEZpcmVmb3ggZG9lc24ndCBhbGVydCBpZiB0aGUgcmV0dXJuVmFsdWUgZmllbGQgaXMgbm90IHNldC5cblx0XHRcdFx0aWYgKCBldmVudC5yZXN1bHQgIT09IHVuZGVmaW5lZCAmJiBldmVudC5vcmlnaW5hbEV2ZW50ICkge1xuXHRcdFx0XHRcdGV2ZW50Lm9yaWdpbmFsRXZlbnQucmV0dXJuVmFsdWUgPSBldmVudC5yZXN1bHQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0c2ltdWxhdGU6IGZ1bmN0aW9uKCB0eXBlLCBlbGVtLCBldmVudCwgYnViYmxlICkge1xuXHRcdC8vIFBpZ2d5YmFjayBvbiBhIGRvbm9yIGV2ZW50IHRvIHNpbXVsYXRlIGEgZGlmZmVyZW50IG9uZS5cblx0XHQvLyBGYWtlIG9yaWdpbmFsRXZlbnQgdG8gYXZvaWQgZG9ub3IncyBzdG9wUHJvcGFnYXRpb24sIGJ1dCBpZiB0aGVcblx0XHQvLyBzaW11bGF0ZWQgZXZlbnQgcHJldmVudHMgZGVmYXVsdCB0aGVuIHdlIGRvIHRoZSBzYW1lIG9uIHRoZSBkb25vci5cblx0XHR2YXIgZSA9IGpRdWVyeS5leHRlbmQoXG5cdFx0XHRuZXcgalF1ZXJ5LkV2ZW50KCksXG5cdFx0XHRldmVudCxcblx0XHRcdHtcblx0XHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdFx0aXNTaW11bGF0ZWQ6IHRydWUsXG5cdFx0XHRcdG9yaWdpbmFsRXZlbnQ6IHt9XG5cdFx0XHR9XG5cdFx0KTtcblx0XHRpZiAoIGJ1YmJsZSApIHtcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKCBlLCBudWxsLCBlbGVtICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGpRdWVyeS5ldmVudC5kaXNwYXRjaC5jYWxsKCBlbGVtLCBlICk7XG5cdFx0fVxuXHRcdGlmICggZS5pc0RlZmF1bHRQcmV2ZW50ZWQoKSApIHtcblx0XHRcdGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9XG59O1xuXG5qUXVlcnkucmVtb3ZlRXZlbnQgPSBmdW5jdGlvbiggZWxlbSwgdHlwZSwgaGFuZGxlICkge1xuXHRpZiAoIGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lciApIHtcblx0XHRlbGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoIHR5cGUsIGhhbmRsZSwgZmFsc2UgKTtcblx0fVxufTtcblxualF1ZXJ5LkV2ZW50ID0gZnVuY3Rpb24oIHNyYywgcHJvcHMgKSB7XG5cdC8vIEFsbG93IGluc3RhbnRpYXRpb24gd2l0aG91dCB0aGUgJ25ldycga2V5d29yZFxuXHRpZiAoICEodGhpcyBpbnN0YW5jZW9mIGpRdWVyeS5FdmVudCkgKSB7XG5cdFx0cmV0dXJuIG5ldyBqUXVlcnkuRXZlbnQoIHNyYywgcHJvcHMgKTtcblx0fVxuXG5cdC8vIEV2ZW50IG9iamVjdFxuXHRpZiAoIHNyYyAmJiBzcmMudHlwZSApIHtcblx0XHR0aGlzLm9yaWdpbmFsRXZlbnQgPSBzcmM7XG5cdFx0dGhpcy50eXBlID0gc3JjLnR5cGU7XG5cblx0XHQvLyBFdmVudHMgYnViYmxpbmcgdXAgdGhlIGRvY3VtZW50IG1heSBoYXZlIGJlZW4gbWFya2VkIGFzIHByZXZlbnRlZFxuXHRcdC8vIGJ5IGEgaGFuZGxlciBsb3dlciBkb3duIHRoZSB0cmVlOyByZWZsZWN0IHRoZSBjb3JyZWN0IHZhbHVlLlxuXHRcdHRoaXMuaXNEZWZhdWx0UHJldmVudGVkID0gc3JjLmRlZmF1bHRQcmV2ZW50ZWQgfHxcblx0XHRcdFx0c3JjLmRlZmF1bHRQcmV2ZW50ZWQgPT09IHVuZGVmaW5lZCAmJlxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkPDQuMFxuXHRcdFx0XHRzcmMucmV0dXJuVmFsdWUgPT09IGZhbHNlID9cblx0XHRcdHJldHVyblRydWUgOlxuXHRcdFx0cmV0dXJuRmFsc2U7XG5cblx0Ly8gRXZlbnQgdHlwZVxuXHR9IGVsc2Uge1xuXHRcdHRoaXMudHlwZSA9IHNyYztcblx0fVxuXG5cdC8vIFB1dCBleHBsaWNpdGx5IHByb3ZpZGVkIHByb3BlcnRpZXMgb250byB0aGUgZXZlbnQgb2JqZWN0XG5cdGlmICggcHJvcHMgKSB7XG5cdFx0alF1ZXJ5LmV4dGVuZCggdGhpcywgcHJvcHMgKTtcblx0fVxuXG5cdC8vIENyZWF0ZSBhIHRpbWVzdGFtcCBpZiBpbmNvbWluZyBldmVudCBkb2Vzbid0IGhhdmUgb25lXG5cdHRoaXMudGltZVN0YW1wID0gc3JjICYmIHNyYy50aW1lU3RhbXAgfHwgalF1ZXJ5Lm5vdygpO1xuXG5cdC8vIE1hcmsgaXQgYXMgZml4ZWRcblx0dGhpc1sgalF1ZXJ5LmV4cGFuZG8gXSA9IHRydWU7XG59O1xuXG4vLyBqUXVlcnkuRXZlbnQgaXMgYmFzZWQgb24gRE9NMyBFdmVudHMgYXMgc3BlY2lmaWVkIGJ5IHRoZSBFQ01BU2NyaXB0IExhbmd1YWdlIEJpbmRpbmdcbi8vIGh0dHA6Ly93d3cudzMub3JnL1RSLzIwMDMvV0QtRE9NLUxldmVsLTMtRXZlbnRzLTIwMDMwMzMxL2VjbWEtc2NyaXB0LWJpbmRpbmcuaHRtbFxualF1ZXJ5LkV2ZW50LnByb3RvdHlwZSA9IHtcblx0aXNEZWZhdWx0UHJldmVudGVkOiByZXR1cm5GYWxzZSxcblx0aXNQcm9wYWdhdGlvblN0b3BwZWQ6IHJldHVybkZhbHNlLFxuXHRpc0ltbWVkaWF0ZVByb3BhZ2F0aW9uU3RvcHBlZDogcmV0dXJuRmFsc2UsXG5cblx0cHJldmVudERlZmF1bHQ6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc0RlZmF1bHRQcmV2ZW50ZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmIGUucHJldmVudERlZmF1bHQgKSB7XG5cdFx0XHRlLnByZXZlbnREZWZhdWx0KCk7XG5cdFx0fVxuXHR9LFxuXHRzdG9wUHJvcGFnYXRpb246IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBlID0gdGhpcy5vcmlnaW5hbEV2ZW50O1xuXG5cdFx0dGhpcy5pc1Byb3BhZ2F0aW9uU3RvcHBlZCA9IHJldHVyblRydWU7XG5cblx0XHRpZiAoIGUgJiYgZS5zdG9wUHJvcGFnYXRpb24gKSB7XG5cdFx0XHRlLnN0b3BQcm9wYWdhdGlvbigpO1xuXHRcdH1cblx0fSxcblx0c3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uOiBmdW5jdGlvbigpIHtcblx0XHR2YXIgZSA9IHRoaXMub3JpZ2luYWxFdmVudDtcblxuXHRcdHRoaXMuaXNJbW1lZGlhdGVQcm9wYWdhdGlvblN0b3BwZWQgPSByZXR1cm5UcnVlO1xuXG5cdFx0aWYgKCBlICYmIGUuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uICkge1xuXHRcdFx0ZS5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcblx0XHR9XG5cblx0XHR0aGlzLnN0b3BQcm9wYWdhdGlvbigpO1xuXHR9XG59O1xuXG4vLyBDcmVhdGUgbW91c2VlbnRlci9sZWF2ZSBldmVudHMgdXNpbmcgbW91c2VvdmVyL291dCBhbmQgZXZlbnQtdGltZSBjaGVja3Ncbi8vIFN1cHBvcnQ6IENocm9tZSAxNStcbmpRdWVyeS5lYWNoKHtcblx0bW91c2VlbnRlcjogXCJtb3VzZW92ZXJcIixcblx0bW91c2VsZWF2ZTogXCJtb3VzZW91dFwiLFxuXHRwb2ludGVyZW50ZXI6IFwicG9pbnRlcm92ZXJcIixcblx0cG9pbnRlcmxlYXZlOiBcInBvaW50ZXJvdXRcIlxufSwgZnVuY3Rpb24oIG9yaWcsIGZpeCApIHtcblx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIG9yaWcgXSA9IHtcblx0XHRkZWxlZ2F0ZVR5cGU6IGZpeCxcblx0XHRiaW5kVHlwZTogZml4LFxuXG5cdFx0aGFuZGxlOiBmdW5jdGlvbiggZXZlbnQgKSB7XG5cdFx0XHR2YXIgcmV0LFxuXHRcdFx0XHR0YXJnZXQgPSB0aGlzLFxuXHRcdFx0XHRyZWxhdGVkID0gZXZlbnQucmVsYXRlZFRhcmdldCxcblx0XHRcdFx0aGFuZGxlT2JqID0gZXZlbnQuaGFuZGxlT2JqO1xuXG5cdFx0XHQvLyBGb3IgbW91c2VudGVyL2xlYXZlIGNhbGwgdGhlIGhhbmRsZXIgaWYgcmVsYXRlZCBpcyBvdXRzaWRlIHRoZSB0YXJnZXQuXG5cdFx0XHQvLyBOQjogTm8gcmVsYXRlZFRhcmdldCBpZiB0aGUgbW91c2UgbGVmdC9lbnRlcmVkIHRoZSBicm93c2VyIHdpbmRvd1xuXHRcdFx0aWYgKCAhcmVsYXRlZCB8fCAocmVsYXRlZCAhPT0gdGFyZ2V0ICYmICFqUXVlcnkuY29udGFpbnMoIHRhcmdldCwgcmVsYXRlZCApKSApIHtcblx0XHRcdFx0ZXZlbnQudHlwZSA9IGhhbmRsZU9iai5vcmlnVHlwZTtcblx0XHRcdFx0cmV0ID0gaGFuZGxlT2JqLmhhbmRsZXIuYXBwbHkoIHRoaXMsIGFyZ3VtZW50cyApO1xuXHRcdFx0XHRldmVudC50eXBlID0gZml4O1xuXHRcdFx0fVxuXHRcdFx0cmV0dXJuIHJldDtcblx0XHR9XG5cdH07XG59KTtcblxuLy8gU3VwcG9ydDogRmlyZWZveCwgQ2hyb21lLCBTYWZhcmlcbi8vIENyZWF0ZSBcImJ1YmJsaW5nXCIgZm9jdXMgYW5kIGJsdXIgZXZlbnRzXG5pZiAoICFzdXBwb3J0LmZvY3VzaW5CdWJibGVzICkge1xuXHRqUXVlcnkuZWFjaCh7IGZvY3VzOiBcImZvY3VzaW5cIiwgYmx1cjogXCJmb2N1c291dFwiIH0sIGZ1bmN0aW9uKCBvcmlnLCBmaXggKSB7XG5cblx0XHQvLyBBdHRhY2ggYSBzaW5nbGUgY2FwdHVyaW5nIGhhbmRsZXIgb24gdGhlIGRvY3VtZW50IHdoaWxlIHNvbWVvbmUgd2FudHMgZm9jdXNpbi9mb2N1c291dFxuXHRcdHZhciBoYW5kbGVyID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHRqUXVlcnkuZXZlbnQuc2ltdWxhdGUoIGZpeCwgZXZlbnQudGFyZ2V0LCBqUXVlcnkuZXZlbnQuZml4KCBldmVudCApLCB0cnVlICk7XG5cdFx0XHR9O1xuXG5cdFx0alF1ZXJ5LmV2ZW50LnNwZWNpYWxbIGZpeCBdID0ge1xuXHRcdFx0c2V0dXA6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHR2YXIgZG9jID0gdGhpcy5vd25lckRvY3VtZW50IHx8IHRoaXMsXG5cdFx0XHRcdFx0YXR0YWNoZXMgPSBkYXRhX3ByaXYuYWNjZXNzKCBkb2MsIGZpeCApO1xuXG5cdFx0XHRcdGlmICggIWF0dGFjaGVzICkge1xuXHRcdFx0XHRcdGRvYy5hZGRFdmVudExpc3RlbmVyKCBvcmlnLCBoYW5kbGVyLCB0cnVlICk7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGF0YV9wcml2LmFjY2VzcyggZG9jLCBmaXgsICggYXR0YWNoZXMgfHwgMCApICsgMSApO1xuXHRcdFx0fSxcblx0XHRcdHRlYXJkb3duOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0dmFyIGRvYyA9IHRoaXMub3duZXJEb2N1bWVudCB8fCB0aGlzLFxuXHRcdFx0XHRcdGF0dGFjaGVzID0gZGF0YV9wcml2LmFjY2VzcyggZG9jLCBmaXggKSAtIDE7XG5cblx0XHRcdFx0aWYgKCAhYXR0YWNoZXMgKSB7XG5cdFx0XHRcdFx0ZG9jLnJlbW92ZUV2ZW50TGlzdGVuZXIoIG9yaWcsIGhhbmRsZXIsIHRydWUgKTtcblx0XHRcdFx0XHRkYXRhX3ByaXYucmVtb3ZlKCBkb2MsIGZpeCApO1xuXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGF0YV9wcml2LmFjY2VzcyggZG9jLCBmaXgsIGF0dGFjaGVzICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9KTtcbn1cblxualF1ZXJ5LmZuLmV4dGVuZCh7XG5cblx0b246IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCAvKklOVEVSTkFMKi8gb25lICkge1xuXHRcdHZhciBvcmlnRm4sIHR5cGU7XG5cblx0XHQvLyBUeXBlcyBjYW4gYmUgYSBtYXAgb2YgdHlwZXMvaGFuZGxlcnNcblx0XHRpZiAoIHR5cGVvZiB0eXBlcyA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRcdC8vICggdHlwZXMtT2JqZWN0LCBzZWxlY3RvciwgZGF0YSApXG5cdFx0XHRpZiAoIHR5cGVvZiBzZWxlY3RvciAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdFx0Ly8gKCB0eXBlcy1PYmplY3QsIGRhdGEgKVxuXHRcdFx0XHRkYXRhID0gZGF0YSB8fCBzZWxlY3Rvcjtcblx0XHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0XHR9XG5cdFx0XHRmb3IgKCB0eXBlIGluIHR5cGVzICkge1xuXHRcdFx0XHR0aGlzLm9uKCB0eXBlLCBzZWxlY3RvciwgZGF0YSwgdHlwZXNbIHR5cGUgXSwgb25lICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cblx0XHRpZiAoIGRhdGEgPT0gbnVsbCAmJiBmbiA9PSBudWxsICkge1xuXHRcdFx0Ly8gKCB0eXBlcywgZm4gKVxuXHRcdFx0Zm4gPSBzZWxlY3Rvcjtcblx0XHRcdGRhdGEgPSBzZWxlY3RvciA9IHVuZGVmaW5lZDtcblx0XHR9IGVsc2UgaWYgKCBmbiA9PSBudWxsICkge1xuXHRcdFx0aWYgKCB0eXBlb2Ygc2VsZWN0b3IgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdC8vICggdHlwZXMsIHNlbGVjdG9yLCBmbiApXG5cdFx0XHRcdGZuID0gZGF0YTtcblx0XHRcdFx0ZGF0YSA9IHVuZGVmaW5lZDtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vICggdHlwZXMsIGRhdGEsIGZuIClcblx0XHRcdFx0Zm4gPSBkYXRhO1xuXHRcdFx0XHRkYXRhID0gc2VsZWN0b3I7XG5cdFx0XHRcdHNlbGVjdG9yID0gdW5kZWZpbmVkO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRpZiAoIGZuID09PSBmYWxzZSApIHtcblx0XHRcdGZuID0gcmV0dXJuRmFsc2U7XG5cdFx0fSBlbHNlIGlmICggIWZuICkge1xuXHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0fVxuXG5cdFx0aWYgKCBvbmUgPT09IDEgKSB7XG5cdFx0XHRvcmlnRm4gPSBmbjtcblx0XHRcdGZuID0gZnVuY3Rpb24oIGV2ZW50ICkge1xuXHRcdFx0XHQvLyBDYW4gdXNlIGFuIGVtcHR5IHNldCwgc2luY2UgZXZlbnQgY29udGFpbnMgdGhlIGluZm9cblx0XHRcdFx0alF1ZXJ5KCkub2ZmKCBldmVudCApO1xuXHRcdFx0XHRyZXR1cm4gb3JpZ0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKTtcblx0XHRcdH07XG5cdFx0XHQvLyBVc2Ugc2FtZSBndWlkIHNvIGNhbGxlciBjYW4gcmVtb3ZlIHVzaW5nIG9yaWdGblxuXHRcdFx0Zm4uZ3VpZCA9IG9yaWdGbi5ndWlkIHx8ICggb3JpZ0ZuLmd1aWQgPSBqUXVlcnkuZ3VpZCsrICk7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmVhY2goIGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LmFkZCggdGhpcywgdHlwZXMsIGZuLCBkYXRhLCBzZWxlY3RvciApO1xuXHRcdH0pO1xuXHR9LFxuXHRvbmU6IGZ1bmN0aW9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuLCAxICk7XG5cdH0sXG5cdG9mZjogZnVuY3Rpb24oIHR5cGVzLCBzZWxlY3RvciwgZm4gKSB7XG5cdFx0dmFyIGhhbmRsZU9iaiwgdHlwZTtcblx0XHRpZiAoIHR5cGVzICYmIHR5cGVzLnByZXZlbnREZWZhdWx0ICYmIHR5cGVzLmhhbmRsZU9iaiApIHtcblx0XHRcdC8vICggZXZlbnQgKSAgZGlzcGF0Y2hlZCBqUXVlcnkuRXZlbnRcblx0XHRcdGhhbmRsZU9iaiA9IHR5cGVzLmhhbmRsZU9iajtcblx0XHRcdGpRdWVyeSggdHlwZXMuZGVsZWdhdGVUYXJnZXQgKS5vZmYoXG5cdFx0XHRcdGhhbmRsZU9iai5uYW1lc3BhY2UgPyBoYW5kbGVPYmoub3JpZ1R5cGUgKyBcIi5cIiArIGhhbmRsZU9iai5uYW1lc3BhY2UgOiBoYW5kbGVPYmoub3JpZ1R5cGUsXG5cdFx0XHRcdGhhbmRsZU9iai5zZWxlY3Rvcixcblx0XHRcdFx0aGFuZGxlT2JqLmhhbmRsZXJcblx0XHRcdCk7XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKCB0eXBlb2YgdHlwZXMgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0XHQvLyAoIHR5cGVzLW9iamVjdCBbLCBzZWxlY3Rvcl0gKVxuXHRcdFx0Zm9yICggdHlwZSBpbiB0eXBlcyApIHtcblx0XHRcdFx0dGhpcy5vZmYoIHR5cGUsIHNlbGVjdG9yLCB0eXBlc1sgdHlwZSBdICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gdGhpcztcblx0XHR9XG5cdFx0aWYgKCBzZWxlY3RvciA9PT0gZmFsc2UgfHwgdHlwZW9mIHNlbGVjdG9yID09PSBcImZ1bmN0aW9uXCIgKSB7XG5cdFx0XHQvLyAoIHR5cGVzIFssIGZuXSApXG5cdFx0XHRmbiA9IHNlbGVjdG9yO1xuXHRcdFx0c2VsZWN0b3IgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHRcdGlmICggZm4gPT09IGZhbHNlICkge1xuXHRcdFx0Zm4gPSByZXR1cm5GYWxzZTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIHRoaXMsIHR5cGVzLCBmbiwgc2VsZWN0b3IgKTtcblx0XHR9KTtcblx0fSxcblxuXHR0cmlnZ2VyOiBmdW5jdGlvbiggdHlwZSwgZGF0YSApIHtcblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0alF1ZXJ5LmV2ZW50LnRyaWdnZXIoIHR5cGUsIGRhdGEsIHRoaXMgKTtcblx0XHR9KTtcblx0fSxcblx0dHJpZ2dlckhhbmRsZXI6IGZ1bmN0aW9uKCB0eXBlLCBkYXRhICkge1xuXHRcdHZhciBlbGVtID0gdGhpc1swXTtcblx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4galF1ZXJ5LmV2ZW50LnRyaWdnZXIoIHR5cGUsIGRhdGEsIGVsZW0sIHRydWUgKTtcblx0XHR9XG5cdH1cbn0pO1xuXG5cbnZhclxuXHRyeGh0bWxUYWcgPSAvPCg/IWFyZWF8YnJ8Y29sfGVtYmVkfGhyfGltZ3xpbnB1dHxsaW5rfG1ldGF8cGFyYW0pKChbXFx3Ol0rKVtePl0qKVxcLz4vZ2ksXG5cdHJ0YWdOYW1lID0gLzwoW1xcdzpdKykvLFxuXHRyaHRtbCA9IC88fCYjP1xcdys7Lyxcblx0cm5vSW5uZXJodG1sID0gLzwoPzpzY3JpcHR8c3R5bGV8bGluaykvaSxcblx0Ly8gY2hlY2tlZD1cImNoZWNrZWRcIiBvciBjaGVja2VkXG5cdHJjaGVja2VkID0gL2NoZWNrZWRcXHMqKD86W149XXw9XFxzKi5jaGVja2VkLikvaSxcblx0cnNjcmlwdFR5cGUgPSAvXiR8XFwvKD86amF2YXxlY21hKXNjcmlwdC9pLFxuXHRyc2NyaXB0VHlwZU1hc2tlZCA9IC9edHJ1ZVxcLyguKikvLFxuXHRyY2xlYW5TY3JpcHQgPSAvXlxccyo8ISg/OlxcW0NEQVRBXFxbfC0tKXwoPzpcXF1cXF18LS0pPlxccyokL2csXG5cblx0Ly8gV2UgaGF2ZSB0byBjbG9zZSB0aGVzZSB0YWdzIHRvIHN1cHBvcnQgWEhUTUwgKCMxMzIwMClcblx0d3JhcE1hcCA9IHtcblxuXHRcdC8vIFN1cHBvcnQ6IElFOVxuXHRcdG9wdGlvbjogWyAxLCBcIjxzZWxlY3QgbXVsdGlwbGU9J211bHRpcGxlJz5cIiwgXCI8L3NlbGVjdD5cIiBdLFxuXG5cdFx0dGhlYWQ6IFsgMSwgXCI8dGFibGU+XCIsIFwiPC90YWJsZT5cIiBdLFxuXHRcdGNvbDogWyAyLCBcIjx0YWJsZT48Y29sZ3JvdXA+XCIsIFwiPC9jb2xncm91cD48L3RhYmxlPlwiIF0sXG5cdFx0dHI6IFsgMiwgXCI8dGFibGU+PHRib2R5PlwiLCBcIjwvdGJvZHk+PC90YWJsZT5cIiBdLFxuXHRcdHRkOiBbIDMsIFwiPHRhYmxlPjx0Ym9keT48dHI+XCIsIFwiPC90cj48L3Rib2R5PjwvdGFibGU+XCIgXSxcblxuXHRcdF9kZWZhdWx0OiBbIDAsIFwiXCIsIFwiXCIgXVxuXHR9O1xuXG4vLyBTdXBwb3J0OiBJRTlcbndyYXBNYXAub3B0Z3JvdXAgPSB3cmFwTWFwLm9wdGlvbjtcblxud3JhcE1hcC50Ym9keSA9IHdyYXBNYXAudGZvb3QgPSB3cmFwTWFwLmNvbGdyb3VwID0gd3JhcE1hcC5jYXB0aW9uID0gd3JhcE1hcC50aGVhZDtcbndyYXBNYXAudGggPSB3cmFwTWFwLnRkO1xuXG4vLyBTdXBwb3J0OiAxLnggY29tcGF0aWJpbGl0eVxuLy8gTWFuaXB1bGF0aW5nIHRhYmxlcyByZXF1aXJlcyBhIHRib2R5XG5mdW5jdGlvbiBtYW5pcHVsYXRpb25UYXJnZXQoIGVsZW0sIGNvbnRlbnQgKSB7XG5cdHJldHVybiBqUXVlcnkubm9kZU5hbWUoIGVsZW0sIFwidGFibGVcIiApICYmXG5cdFx0alF1ZXJ5Lm5vZGVOYW1lKCBjb250ZW50Lm5vZGVUeXBlICE9PSAxMSA/IGNvbnRlbnQgOiBjb250ZW50LmZpcnN0Q2hpbGQsIFwidHJcIiApID9cblxuXHRcdGVsZW0uZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJ0Ym9keVwiKVswXSB8fFxuXHRcdFx0ZWxlbS5hcHBlbmRDaGlsZCggZWxlbS5vd25lckRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ0Ym9keVwiKSApIDpcblx0XHRlbGVtO1xufVxuXG4vLyBSZXBsYWNlL3Jlc3RvcmUgdGhlIHR5cGUgYXR0cmlidXRlIG9mIHNjcmlwdCBlbGVtZW50cyBmb3Igc2FmZSBET00gbWFuaXB1bGF0aW9uXG5mdW5jdGlvbiBkaXNhYmxlU2NyaXB0KCBlbGVtICkge1xuXHRlbGVtLnR5cGUgPSAoZWxlbS5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpICE9PSBudWxsKSArIFwiL1wiICsgZWxlbS50eXBlO1xuXHRyZXR1cm4gZWxlbTtcbn1cbmZ1bmN0aW9uIHJlc3RvcmVTY3JpcHQoIGVsZW0gKSB7XG5cdHZhciBtYXRjaCA9IHJzY3JpcHRUeXBlTWFza2VkLmV4ZWMoIGVsZW0udHlwZSApO1xuXG5cdGlmICggbWF0Y2ggKSB7XG5cdFx0ZWxlbS50eXBlID0gbWF0Y2hbIDEgXTtcblx0fSBlbHNlIHtcblx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZShcInR5cGVcIik7XG5cdH1cblxuXHRyZXR1cm4gZWxlbTtcbn1cblxuLy8gTWFyayBzY3JpcHRzIGFzIGhhdmluZyBhbHJlYWR5IGJlZW4gZXZhbHVhdGVkXG5mdW5jdGlvbiBzZXRHbG9iYWxFdmFsKCBlbGVtcywgcmVmRWxlbWVudHMgKSB7XG5cdHZhciBpID0gMCxcblx0XHRsID0gZWxlbXMubGVuZ3RoO1xuXG5cdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRkYXRhX3ByaXYuc2V0KFxuXHRcdFx0ZWxlbXNbIGkgXSwgXCJnbG9iYWxFdmFsXCIsICFyZWZFbGVtZW50cyB8fCBkYXRhX3ByaXYuZ2V0KCByZWZFbGVtZW50c1sgaSBdLCBcImdsb2JhbEV2YWxcIiApXG5cdFx0KTtcblx0fVxufVxuXG5mdW5jdGlvbiBjbG9uZUNvcHlFdmVudCggc3JjLCBkZXN0ICkge1xuXHR2YXIgaSwgbCwgdHlwZSwgcGRhdGFPbGQsIHBkYXRhQ3VyLCB1ZGF0YU9sZCwgdWRhdGFDdXIsIGV2ZW50cztcblxuXHRpZiAoIGRlc3Qubm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gMS4gQ29weSBwcml2YXRlIGRhdGE6IGV2ZW50cywgaGFuZGxlcnMsIGV0Yy5cblx0aWYgKCBkYXRhX3ByaXYuaGFzRGF0YSggc3JjICkgKSB7XG5cdFx0cGRhdGFPbGQgPSBkYXRhX3ByaXYuYWNjZXNzKCBzcmMgKTtcblx0XHRwZGF0YUN1ciA9IGRhdGFfcHJpdi5zZXQoIGRlc3QsIHBkYXRhT2xkICk7XG5cdFx0ZXZlbnRzID0gcGRhdGFPbGQuZXZlbnRzO1xuXG5cdFx0aWYgKCBldmVudHMgKSB7XG5cdFx0XHRkZWxldGUgcGRhdGFDdXIuaGFuZGxlO1xuXHRcdFx0cGRhdGFDdXIuZXZlbnRzID0ge307XG5cblx0XHRcdGZvciAoIHR5cGUgaW4gZXZlbnRzICkge1xuXHRcdFx0XHRmb3IgKCBpID0gMCwgbCA9IGV2ZW50c1sgdHlwZSBdLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRqUXVlcnkuZXZlbnQuYWRkKCBkZXN0LCB0eXBlLCBldmVudHNbIHR5cGUgXVsgaSBdICk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHQvLyAyLiBDb3B5IHVzZXIgZGF0YVxuXHRpZiAoIGRhdGFfdXNlci5oYXNEYXRhKCBzcmMgKSApIHtcblx0XHR1ZGF0YU9sZCA9IGRhdGFfdXNlci5hY2Nlc3MoIHNyYyApO1xuXHRcdHVkYXRhQ3VyID0galF1ZXJ5LmV4dGVuZCgge30sIHVkYXRhT2xkICk7XG5cblx0XHRkYXRhX3VzZXIuc2V0KCBkZXN0LCB1ZGF0YUN1ciApO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGdldEFsbCggY29udGV4dCwgdGFnICkge1xuXHR2YXIgcmV0ID0gY29udGV4dC5nZXRFbGVtZW50c0J5VGFnTmFtZSA/IGNvbnRleHQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoIHRhZyB8fCBcIipcIiApIDpcblx0XHRcdGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCA/IGNvbnRleHQucXVlcnlTZWxlY3RvckFsbCggdGFnIHx8IFwiKlwiICkgOlxuXHRcdFx0W107XG5cblx0cmV0dXJuIHRhZyA9PT0gdW5kZWZpbmVkIHx8IHRhZyAmJiBqUXVlcnkubm9kZU5hbWUoIGNvbnRleHQsIHRhZyApID9cblx0XHRqUXVlcnkubWVyZ2UoIFsgY29udGV4dCBdLCByZXQgKSA6XG5cdFx0cmV0O1xufVxuXG4vLyBGaXggSUUgYnVncywgc2VlIHN1cHBvcnQgdGVzdHNcbmZ1bmN0aW9uIGZpeElucHV0KCBzcmMsIGRlc3QgKSB7XG5cdHZhciBub2RlTmFtZSA9IGRlc3Qubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcblxuXHQvLyBGYWlscyB0byBwZXJzaXN0IHRoZSBjaGVja2VkIHN0YXRlIG9mIGEgY2xvbmVkIGNoZWNrYm94IG9yIHJhZGlvIGJ1dHRvbi5cblx0aWYgKCBub2RlTmFtZSA9PT0gXCJpbnB1dFwiICYmIHJjaGVja2FibGVUeXBlLnRlc3QoIHNyYy50eXBlICkgKSB7XG5cdFx0ZGVzdC5jaGVja2VkID0gc3JjLmNoZWNrZWQ7XG5cblx0Ly8gRmFpbHMgdG8gcmV0dXJuIHRoZSBzZWxlY3RlZCBvcHRpb24gdG8gdGhlIGRlZmF1bHQgc2VsZWN0ZWQgc3RhdGUgd2hlbiBjbG9uaW5nIG9wdGlvbnNcblx0fSBlbHNlIGlmICggbm9kZU5hbWUgPT09IFwiaW5wdXRcIiB8fCBub2RlTmFtZSA9PT0gXCJ0ZXh0YXJlYVwiICkge1xuXHRcdGRlc3QuZGVmYXVsdFZhbHVlID0gc3JjLmRlZmF1bHRWYWx1ZTtcblx0fVxufVxuXG5qUXVlcnkuZXh0ZW5kKHtcblx0Y2xvbmU6IGZ1bmN0aW9uKCBlbGVtLCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHR2YXIgaSwgbCwgc3JjRWxlbWVudHMsIGRlc3RFbGVtZW50cyxcblx0XHRcdGNsb25lID0gZWxlbS5jbG9uZU5vZGUoIHRydWUgKSxcblx0XHRcdGluUGFnZSA9IGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICk7XG5cblx0XHQvLyBGaXggSUUgY2xvbmluZyBpc3N1ZXNcblx0XHRpZiAoICFzdXBwb3J0Lm5vQ2xvbmVDaGVja2VkICYmICggZWxlbS5ub2RlVHlwZSA9PT0gMSB8fCBlbGVtLm5vZGVUeXBlID09PSAxMSApICYmXG5cdFx0XHRcdCFqUXVlcnkuaXNYTUxEb2MoIGVsZW0gKSApIHtcblxuXHRcdFx0Ly8gV2UgZXNjaGV3IFNpenpsZSBoZXJlIGZvciBwZXJmb3JtYW5jZSByZWFzb25zOiBodHRwOi8vanNwZXJmLmNvbS9nZXRhbGwtdnMtc2l6emxlLzJcblx0XHRcdGRlc3RFbGVtZW50cyA9IGdldEFsbCggY2xvbmUgKTtcblx0XHRcdHNyY0VsZW1lbnRzID0gZ2V0QWxsKCBlbGVtICk7XG5cblx0XHRcdGZvciAoIGkgPSAwLCBsID0gc3JjRWxlbWVudHMubGVuZ3RoOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0XHRmaXhJbnB1dCggc3JjRWxlbWVudHNbIGkgXSwgZGVzdEVsZW1lbnRzWyBpIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDb3B5IHRoZSBldmVudHMgZnJvbSB0aGUgb3JpZ2luYWwgdG8gdGhlIGNsb25lXG5cdFx0aWYgKCBkYXRhQW5kRXZlbnRzICkge1xuXHRcdFx0aWYgKCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRcdFx0c3JjRWxlbWVudHMgPSBzcmNFbGVtZW50cyB8fCBnZXRBbGwoIGVsZW0gKTtcblx0XHRcdFx0ZGVzdEVsZW1lbnRzID0gZGVzdEVsZW1lbnRzIHx8IGdldEFsbCggY2xvbmUgKTtcblxuXHRcdFx0XHRmb3IgKCBpID0gMCwgbCA9IHNyY0VsZW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRjbG9uZUNvcHlFdmVudCggc3JjRWxlbWVudHNbIGkgXSwgZGVzdEVsZW1lbnRzWyBpIF0gKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y2xvbmVDb3B5RXZlbnQoIGVsZW0sIGNsb25lICk7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gUHJlc2VydmUgc2NyaXB0IGV2YWx1YXRpb24gaGlzdG9yeVxuXHRcdGRlc3RFbGVtZW50cyA9IGdldEFsbCggY2xvbmUsIFwic2NyaXB0XCIgKTtcblx0XHRpZiAoIGRlc3RFbGVtZW50cy5sZW5ndGggPiAwICkge1xuXHRcdFx0c2V0R2xvYmFsRXZhbCggZGVzdEVsZW1lbnRzLCAhaW5QYWdlICYmIGdldEFsbCggZWxlbSwgXCJzY3JpcHRcIiApICk7XG5cdFx0fVxuXG5cdFx0Ly8gUmV0dXJuIHRoZSBjbG9uZWQgc2V0XG5cdFx0cmV0dXJuIGNsb25lO1xuXHR9LFxuXG5cdGJ1aWxkRnJhZ21lbnQ6IGZ1bmN0aW9uKCBlbGVtcywgY29udGV4dCwgc2NyaXB0cywgc2VsZWN0aW9uICkge1xuXHRcdHZhciBlbGVtLCB0bXAsIHRhZywgd3JhcCwgY29udGFpbnMsIGosXG5cdFx0XHRmcmFnbWVudCA9IGNvbnRleHQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpLFxuXHRcdFx0bm9kZXMgPSBbXSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0bCA9IGVsZW1zLmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdGVsZW0gPSBlbGVtc1sgaSBdO1xuXG5cdFx0XHRpZiAoIGVsZW0gfHwgZWxlbSA9PT0gMCApIHtcblxuXHRcdFx0XHQvLyBBZGQgbm9kZXMgZGlyZWN0bHlcblx0XHRcdFx0aWYgKCBqUXVlcnkudHlwZSggZWxlbSApID09PSBcIm9iamVjdFwiICkge1xuXHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFF0V2ViS2l0LCBQaGFudG9tSlNcblx0XHRcdFx0XHQvLyBwdXNoLmFwcGx5KF8sIGFycmF5bGlrZSkgdGhyb3dzIG9uIGFuY2llbnQgV2ViS2l0XG5cdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBub2RlcywgZWxlbS5ub2RlVHlwZSA/IFsgZWxlbSBdIDogZWxlbSApO1xuXG5cdFx0XHRcdC8vIENvbnZlcnQgbm9uLWh0bWwgaW50byBhIHRleHQgbm9kZVxuXHRcdFx0XHR9IGVsc2UgaWYgKCAhcmh0bWwudGVzdCggZWxlbSApICkge1xuXHRcdFx0XHRcdG5vZGVzLnB1c2goIGNvbnRleHQuY3JlYXRlVGV4dE5vZGUoIGVsZW0gKSApO1xuXG5cdFx0XHRcdC8vIENvbnZlcnQgaHRtbCBpbnRvIERPTSBub2Rlc1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRtcCA9IHRtcCB8fCBmcmFnbWVudC5hcHBlbmRDaGlsZCggY29udGV4dC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpICk7XG5cblx0XHRcdFx0XHQvLyBEZXNlcmlhbGl6ZSBhIHN0YW5kYXJkIHJlcHJlc2VudGF0aW9uXG5cdFx0XHRcdFx0dGFnID0gKCBydGFnTmFtZS5leGVjKCBlbGVtICkgfHwgWyBcIlwiLCBcIlwiIF0gKVsgMSBdLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0d3JhcCA9IHdyYXBNYXBbIHRhZyBdIHx8IHdyYXBNYXAuX2RlZmF1bHQ7XG5cdFx0XHRcdFx0dG1wLmlubmVySFRNTCA9IHdyYXBbIDEgXSArIGVsZW0ucmVwbGFjZSggcnhodG1sVGFnLCBcIjwkMT48LyQyPlwiICkgKyB3cmFwWyAyIF07XG5cblx0XHRcdFx0XHQvLyBEZXNjZW5kIHRocm91Z2ggd3JhcHBlcnMgdG8gdGhlIHJpZ2h0IGNvbnRlbnRcblx0XHRcdFx0XHRqID0gd3JhcFsgMCBdO1xuXHRcdFx0XHRcdHdoaWxlICggai0tICkge1xuXHRcdFx0XHRcdFx0dG1wID0gdG1wLmxhc3RDaGlsZDtcblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHQvLyBTdXBwb3J0OiBRdFdlYktpdCwgUGhhbnRvbUpTXG5cdFx0XHRcdFx0Ly8gcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93cyBvbiBhbmNpZW50IFdlYktpdFxuXHRcdFx0XHRcdGpRdWVyeS5tZXJnZSggbm9kZXMsIHRtcC5jaGlsZE5vZGVzICk7XG5cblx0XHRcdFx0XHQvLyBSZW1lbWJlciB0aGUgdG9wLWxldmVsIGNvbnRhaW5lclxuXHRcdFx0XHRcdHRtcCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRcdFx0XHQvLyBFbnN1cmUgdGhlIGNyZWF0ZWQgbm9kZXMgYXJlIG9ycGhhbmVkICgjMTIzOTIpXG5cdFx0XHRcdFx0dG1wLnRleHRDb250ZW50ID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdC8vIFJlbW92ZSB3cmFwcGVyIGZyb20gZnJhZ21lbnRcblx0XHRmcmFnbWVudC50ZXh0Q29udGVudCA9IFwiXCI7XG5cblx0XHRpID0gMDtcblx0XHR3aGlsZSAoIChlbGVtID0gbm9kZXNbIGkrKyBdKSApIHtcblxuXHRcdFx0Ly8gIzQwODcgLSBJZiBvcmlnaW4gYW5kIGRlc3RpbmF0aW9uIGVsZW1lbnRzIGFyZSB0aGUgc2FtZSwgYW5kIHRoaXMgaXNcblx0XHRcdC8vIHRoYXQgZWxlbWVudCwgZG8gbm90IGRvIGFueXRoaW5nXG5cdFx0XHRpZiAoIHNlbGVjdGlvbiAmJiBqUXVlcnkuaW5BcnJheSggZWxlbSwgc2VsZWN0aW9uICkgIT09IC0xICkge1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblxuXHRcdFx0Y29udGFpbnMgPSBqUXVlcnkuY29udGFpbnMoIGVsZW0ub3duZXJEb2N1bWVudCwgZWxlbSApO1xuXG5cdFx0XHQvLyBBcHBlbmQgdG8gZnJhZ21lbnRcblx0XHRcdHRtcCA9IGdldEFsbCggZnJhZ21lbnQuYXBwZW5kQ2hpbGQoIGVsZW0gKSwgXCJzY3JpcHRcIiApO1xuXG5cdFx0XHQvLyBQcmVzZXJ2ZSBzY3JpcHQgZXZhbHVhdGlvbiBoaXN0b3J5XG5cdFx0XHRpZiAoIGNvbnRhaW5zICkge1xuXHRcdFx0XHRzZXRHbG9iYWxFdmFsKCB0bXAgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQ2FwdHVyZSBleGVjdXRhYmxlc1xuXHRcdFx0aWYgKCBzY3JpcHRzICkge1xuXHRcdFx0XHRqID0gMDtcblx0XHRcdFx0d2hpbGUgKCAoZWxlbSA9IHRtcFsgaisrIF0pICkge1xuXHRcdFx0XHRcdGlmICggcnNjcmlwdFR5cGUudGVzdCggZWxlbS50eXBlIHx8IFwiXCIgKSApIHtcblx0XHRcdFx0XHRcdHNjcmlwdHMucHVzaCggZWxlbSApO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBmcmFnbWVudDtcblx0fSxcblxuXHRjbGVhbkRhdGE6IGZ1bmN0aW9uKCBlbGVtcyApIHtcblx0XHR2YXIgZGF0YSwgZWxlbSwgdHlwZSwga2V5LFxuXHRcdFx0c3BlY2lhbCA9IGpRdWVyeS5ldmVudC5zcGVjaWFsLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRmb3IgKCA7IChlbGVtID0gZWxlbXNbIGkgXSkgIT09IHVuZGVmaW5lZDsgaSsrICkge1xuXHRcdFx0aWYgKCBqUXVlcnkuYWNjZXB0RGF0YSggZWxlbSApICkge1xuXHRcdFx0XHRrZXkgPSBlbGVtWyBkYXRhX3ByaXYuZXhwYW5kbyBdO1xuXG5cdFx0XHRcdGlmICgga2V5ICYmIChkYXRhID0gZGF0YV9wcml2LmNhY2hlWyBrZXkgXSkgKSB7XG5cdFx0XHRcdFx0aWYgKCBkYXRhLmV2ZW50cyApIHtcblx0XHRcdFx0XHRcdGZvciAoIHR5cGUgaW4gZGF0YS5ldmVudHMgKSB7XG5cdFx0XHRcdFx0XHRcdGlmICggc3BlY2lhbFsgdHlwZSBdICkge1xuXHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5ldmVudC5yZW1vdmUoIGVsZW0sIHR5cGUgKTtcblxuXHRcdFx0XHRcdFx0XHQvLyBUaGlzIGlzIGEgc2hvcnRjdXQgdG8gYXZvaWQgalF1ZXJ5LmV2ZW50LnJlbW92ZSdzIG92ZXJoZWFkXG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5LnJlbW92ZUV2ZW50KCBlbGVtLCB0eXBlLCBkYXRhLmhhbmRsZSApO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGlmICggZGF0YV9wcml2LmNhY2hlWyBrZXkgXSApIHtcblx0XHRcdFx0XHRcdC8vIERpc2NhcmQgYW55IHJlbWFpbmluZyBgcHJpdmF0ZWAgZGF0YVxuXHRcdFx0XHRcdFx0ZGVsZXRlIGRhdGFfcHJpdi5jYWNoZVsga2V5IF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHQvLyBEaXNjYXJkIGFueSByZW1haW5pbmcgYHVzZXJgIGRhdGFcblx0XHRcdGRlbGV0ZSBkYXRhX3VzZXIuY2FjaGVbIGVsZW1bIGRhdGFfdXNlci5leHBhbmRvIF0gXTtcblx0XHR9XG5cdH1cbn0pO1xuXG5qUXVlcnkuZm4uZXh0ZW5kKHtcblx0dGV4dDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0alF1ZXJ5LnRleHQoIHRoaXMgKSA6XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRcdGlmICggdGhpcy5ub2RlVHlwZSA9PT0gMSB8fCB0aGlzLm5vZGVUeXBlID09PSAxMSB8fCB0aGlzLm5vZGVUeXBlID09PSA5ICkge1xuXHRcdFx0XHRcdFx0dGhpcy50ZXh0Q29udGVudCA9IHZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSk7XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRhcHBlbmQ6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLmRvbU1hbmlwKCBhcmd1bWVudHMsIGZ1bmN0aW9uKCBlbGVtICkge1xuXHRcdFx0aWYgKCB0aGlzLm5vZGVUeXBlID09PSAxIHx8IHRoaXMubm9kZVR5cGUgPT09IDExIHx8IHRoaXMubm9kZVR5cGUgPT09IDkgKSB7XG5cdFx0XHRcdHZhciB0YXJnZXQgPSBtYW5pcHVsYXRpb25UYXJnZXQoIHRoaXMsIGVsZW0gKTtcblx0XHRcdFx0dGFyZ2V0LmFwcGVuZENoaWxkKCBlbGVtICk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0cHJlcGVuZDogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tTWFuaXAoIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgPT09IDEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gMTEgfHwgdGhpcy5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0dmFyIHRhcmdldCA9IG1hbmlwdWxhdGlvblRhcmdldCggdGhpcywgZWxlbSApO1xuXHRcdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0YXJnZXQuZmlyc3RDaGlsZCApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdGJlZm9yZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIHRoaXMuZG9tTWFuaXAoIGFyZ3VtZW50cywgZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRpZiAoIHRoaXMucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0dGhpcy5wYXJlbnROb2RlLmluc2VydEJlZm9yZSggZWxlbSwgdGhpcyApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXG5cdGFmdGVyOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5kb21NYW5pcCggYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGlmICggdGhpcy5wYXJlbnROb2RlICkge1xuXHRcdFx0XHR0aGlzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKCBlbGVtLCB0aGlzLm5leHRTaWJsaW5nICk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0cmVtb3ZlOiBmdW5jdGlvbiggc2VsZWN0b3IsIGtlZXBEYXRhIC8qIEludGVybmFsIFVzZSBPbmx5ICovICkge1xuXHRcdHZhciBlbGVtLFxuXHRcdFx0ZWxlbXMgPSBzZWxlY3RvciA/IGpRdWVyeS5maWx0ZXIoIHNlbGVjdG9yLCB0aGlzICkgOiB0aGlzLFxuXHRcdFx0aSA9IDA7XG5cblx0XHRmb3IgKCA7IChlbGVtID0gZWxlbXNbaV0pICE9IG51bGw7IGkrKyApIHtcblx0XHRcdGlmICggIWtlZXBEYXRhICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHRcdGpRdWVyeS5jbGVhbkRhdGEoIGdldEFsbCggZWxlbSApICk7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0XHRpZiAoIGtlZXBEYXRhICYmIGpRdWVyeS5jb250YWlucyggZWxlbS5vd25lckRvY3VtZW50LCBlbGVtICkgKSB7XG5cdFx0XHRcdFx0c2V0R2xvYmFsRXZhbCggZ2V0QWxsKCBlbGVtLCBcInNjcmlwdFwiICkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRlbGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoIGVsZW0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcztcblx0fSxcblxuXHRlbXB0eTogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGVsZW0sXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgKGVsZW0gPSB0aGlzW2ldKSAhPSBudWxsOyBpKysgKSB7XG5cdFx0XHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cblx0XHRcdFx0Ly8gUHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cblx0XHRcdFx0Ly8gUmVtb3ZlIGFueSByZW1haW5pbmcgbm9kZXNcblx0XHRcdFx0ZWxlbS50ZXh0Q29udGVudCA9IFwiXCI7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXM7XG5cdH0sXG5cblx0Y2xvbmU6IGZ1bmN0aW9uKCBkYXRhQW5kRXZlbnRzLCBkZWVwRGF0YUFuZEV2ZW50cyApIHtcblx0XHRkYXRhQW5kRXZlbnRzID0gZGF0YUFuZEV2ZW50cyA9PSBudWxsID8gZmFsc2UgOiBkYXRhQW5kRXZlbnRzO1xuXHRcdGRlZXBEYXRhQW5kRXZlbnRzID0gZGVlcERhdGFBbmRFdmVudHMgPT0gbnVsbCA/IGRhdGFBbmRFdmVudHMgOiBkZWVwRGF0YUFuZEV2ZW50cztcblxuXHRcdHJldHVybiB0aGlzLm1hcChmdW5jdGlvbigpIHtcblx0XHRcdHJldHVybiBqUXVlcnkuY2xvbmUoIHRoaXMsIGRhdGFBbmRFdmVudHMsIGRlZXBEYXRhQW5kRXZlbnRzICk7XG5cdFx0fSk7XG5cdH0sXG5cblx0aHRtbDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHJldHVybiBhY2Nlc3MoIHRoaXMsIGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHRcdHZhciBlbGVtID0gdGhpc1sgMCBdIHx8IHt9LFxuXHRcdFx0XHRpID0gMCxcblx0XHRcdFx0bCA9IHRoaXMubGVuZ3RoO1xuXG5cdFx0XHRpZiAoIHZhbHVlID09PSB1bmRlZmluZWQgJiYgZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0uaW5uZXJIVE1MO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZWUgaWYgd2UgY2FuIHRha2UgYSBzaG9ydGN1dCBhbmQganVzdCB1c2UgaW5uZXJIVE1MXG5cdFx0XHRpZiAoIHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiAhcm5vSW5uZXJodG1sLnRlc3QoIHZhbHVlICkgJiZcblx0XHRcdFx0IXdyYXBNYXBbICggcnRhZ05hbWUuZXhlYyggdmFsdWUgKSB8fCBbIFwiXCIsIFwiXCIgXSApWyAxIF0udG9Mb3dlckNhc2UoKSBdICkge1xuXG5cdFx0XHRcdHZhbHVlID0gdmFsdWUucmVwbGFjZSggcnhodG1sVGFnLCBcIjwkMT48LyQyPlwiICk7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHRmb3IgKCA7IGkgPCBsOyBpKysgKSB7XG5cdFx0XHRcdFx0XHRlbGVtID0gdGhpc1sgaSBdIHx8IHt9O1xuXG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgZWxlbWVudCBub2RlcyBhbmQgcHJldmVudCBtZW1vcnkgbGVha3Ncblx0XHRcdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gMSApIHtcblx0XHRcdFx0XHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCBlbGVtLCBmYWxzZSApICk7XG5cdFx0XHRcdFx0XHRcdGVsZW0uaW5uZXJIVE1MID0gdmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXG5cdFx0XHRcdFx0ZWxlbSA9IDA7XG5cblx0XHRcdFx0Ly8gSWYgdXNpbmcgaW5uZXJIVE1MIHRocm93cyBhbiBleGNlcHRpb24sIHVzZSB0aGUgZmFsbGJhY2sgbWV0aG9kXG5cdFx0XHRcdH0gY2F0Y2goIGUgKSB7fVxuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIGVsZW0gKSB7XG5cdFx0XHRcdHRoaXMuZW1wdHkoKS5hcHBlbmQoIHZhbHVlICk7XG5cdFx0XHR9XG5cdFx0fSwgbnVsbCwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggKTtcblx0fSxcblxuXHRyZXBsYWNlV2l0aDogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGFyZyA9IGFyZ3VtZW50c1sgMCBdO1xuXG5cdFx0Ly8gTWFrZSB0aGUgY2hhbmdlcywgcmVwbGFjaW5nIGVhY2ggY29udGV4dCBlbGVtZW50IHdpdGggdGhlIG5ldyBjb250ZW50XG5cdFx0dGhpcy5kb21NYW5pcCggYXJndW1lbnRzLCBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdGFyZyA9IHRoaXMucGFyZW50Tm9kZTtcblxuXHRcdFx0alF1ZXJ5LmNsZWFuRGF0YSggZ2V0QWxsKCB0aGlzICkgKTtcblxuXHRcdFx0aWYgKCBhcmcgKSB7XG5cdFx0XHRcdGFyZy5yZXBsYWNlQ2hpbGQoIGVsZW0sIHRoaXMgKTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdC8vIEZvcmNlIHJlbW92YWwgaWYgdGhlcmUgd2FzIG5vIG5ldyBjb250ZW50IChlLmcuLCBmcm9tIGVtcHR5IGFyZ3VtZW50cylcblx0XHRyZXR1cm4gYXJnICYmIChhcmcubGVuZ3RoIHx8IGFyZy5ub2RlVHlwZSkgPyB0aGlzIDogdGhpcy5yZW1vdmUoKTtcblx0fSxcblxuXHRkZXRhY2g6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHRyZXR1cm4gdGhpcy5yZW1vdmUoIHNlbGVjdG9yLCB0cnVlICk7XG5cdH0sXG5cblx0ZG9tTWFuaXA6IGZ1bmN0aW9uKCBhcmdzLCBjYWxsYmFjayApIHtcblxuXHRcdC8vIEZsYXR0ZW4gYW55IG5lc3RlZCBhcnJheXNcblx0XHRhcmdzID0gY29uY2F0LmFwcGx5KCBbXSwgYXJncyApO1xuXG5cdFx0dmFyIGZyYWdtZW50LCBmaXJzdCwgc2NyaXB0cywgaGFzU2NyaXB0cywgbm9kZSwgZG9jLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsID0gdGhpcy5sZW5ndGgsXG5cdFx0XHRzZXQgPSB0aGlzLFxuXHRcdFx0aU5vQ2xvbmUgPSBsIC0gMSxcblx0XHRcdHZhbHVlID0gYXJnc1sgMCBdLFxuXHRcdFx0aXNGdW5jdGlvbiA9IGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApO1xuXG5cdFx0Ly8gV2UgY2FuJ3QgY2xvbmVOb2RlIGZyYWdtZW50cyB0aGF0IGNvbnRhaW4gY2hlY2tlZCwgaW4gV2ViS2l0XG5cdFx0aWYgKCBpc0Z1bmN0aW9uIHx8XG5cdFx0XHRcdCggbCA+IDEgJiYgdHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiICYmXG5cdFx0XHRcdFx0IXN1cHBvcnQuY2hlY2tDbG9uZSAmJiByY2hlY2tlZC50ZXN0KCB2YWx1ZSApICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCBpbmRleCApIHtcblx0XHRcdFx0dmFyIHNlbGYgPSBzZXQuZXEoIGluZGV4ICk7XG5cdFx0XHRcdGlmICggaXNGdW5jdGlvbiApIHtcblx0XHRcdFx0XHRhcmdzWyAwIF0gPSB2YWx1ZS5jYWxsKCB0aGlzLCBpbmRleCwgc2VsZi5odG1sKCkgKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRzZWxmLmRvbU1hbmlwKCBhcmdzLCBjYWxsYmFjayApO1xuXHRcdFx0fSk7XG5cdFx0fVxuXG5cdFx0aWYgKCBsICkge1xuXHRcdFx0ZnJhZ21lbnQgPSBqUXVlcnkuYnVpbGRGcmFnbWVudCggYXJncywgdGhpc1sgMCBdLm93bmVyRG9jdW1lbnQsIGZhbHNlLCB0aGlzICk7XG5cdFx0XHRmaXJzdCA9IGZyYWdtZW50LmZpcnN0Q2hpbGQ7XG5cblx0XHRcdGlmICggZnJhZ21lbnQuY2hpbGROb2Rlcy5sZW5ndGggPT09IDEgKSB7XG5cdFx0XHRcdGZyYWdtZW50ID0gZmlyc3Q7XG5cdFx0XHR9XG5cblx0XHRcdGlmICggZmlyc3QgKSB7XG5cdFx0XHRcdHNjcmlwdHMgPSBqUXVlcnkubWFwKCBnZXRBbGwoIGZyYWdtZW50LCBcInNjcmlwdFwiICksIGRpc2FibGVTY3JpcHQgKTtcblx0XHRcdFx0aGFzU2NyaXB0cyA9IHNjcmlwdHMubGVuZ3RoO1xuXG5cdFx0XHRcdC8vIFVzZSB0aGUgb3JpZ2luYWwgZnJhZ21lbnQgZm9yIHRoZSBsYXN0IGl0ZW0gaW5zdGVhZCBvZiB0aGUgZmlyc3QgYmVjYXVzZSBpdCBjYW4gZW5kIHVwXG5cdFx0XHRcdC8vIGJlaW5nIGVtcHRpZWQgaW5jb3JyZWN0bHkgaW4gY2VydGFpbiBzaXR1YXRpb25zICgjODA3MCkuXG5cdFx0XHRcdGZvciAoIDsgaSA8IGw7IGkrKyApIHtcblx0XHRcdFx0XHRub2RlID0gZnJhZ21lbnQ7XG5cblx0XHRcdFx0XHRpZiAoIGkgIT09IGlOb0Nsb25lICkge1xuXHRcdFx0XHRcdFx0bm9kZSA9IGpRdWVyeS5jbG9uZSggbm9kZSwgdHJ1ZSwgdHJ1ZSApO1xuXG5cdFx0XHRcdFx0XHQvLyBLZWVwIHJlZmVyZW5jZXMgdG8gY2xvbmVkIHNjcmlwdHMgZm9yIGxhdGVyIHJlc3RvcmF0aW9uXG5cdFx0XHRcdFx0XHRpZiAoIGhhc1NjcmlwdHMgKSB7XG5cdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IFF0V2ViS2l0XG5cdFx0XHRcdFx0XHRcdC8vIGpRdWVyeS5tZXJnZSBiZWNhdXNlIHB1c2guYXBwbHkoXywgYXJyYXlsaWtlKSB0aHJvd3Ncblx0XHRcdFx0XHRcdFx0alF1ZXJ5Lm1lcmdlKCBzY3JpcHRzLCBnZXRBbGwoIG5vZGUsIFwic2NyaXB0XCIgKSApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdGNhbGxiYWNrLmNhbGwoIHRoaXNbIGkgXSwgbm9kZSwgaSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0aWYgKCBoYXNTY3JpcHRzICkge1xuXHRcdFx0XHRcdGRvYyA9IHNjcmlwdHNbIHNjcmlwdHMubGVuZ3RoIC0gMSBdLm93bmVyRG9jdW1lbnQ7XG5cblx0XHRcdFx0XHQvLyBSZWVuYWJsZSBzY3JpcHRzXG5cdFx0XHRcdFx0alF1ZXJ5Lm1hcCggc2NyaXB0cywgcmVzdG9yZVNjcmlwdCApO1xuXG5cdFx0XHRcdFx0Ly8gRXZhbHVhdGUgZXhlY3V0YWJsZSBzY3JpcHRzIG9uIGZpcnN0IGRvY3VtZW50IGluc2VydGlvblxuXHRcdFx0XHRcdGZvciAoIGkgPSAwOyBpIDwgaGFzU2NyaXB0czsgaSsrICkge1xuXHRcdFx0XHRcdFx0bm9kZSA9IHNjcmlwdHNbIGkgXTtcblx0XHRcdFx0XHRcdGlmICggcnNjcmlwdFR5cGUudGVzdCggbm9kZS50eXBlIHx8IFwiXCIgKSAmJlxuXHRcdFx0XHRcdFx0XHQhZGF0YV9wcml2LmFjY2Vzcyggbm9kZSwgXCJnbG9iYWxFdmFsXCIgKSAmJiBqUXVlcnkuY29udGFpbnMoIGRvYywgbm9kZSApICkge1xuXG5cdFx0XHRcdFx0XHRcdGlmICggbm9kZS5zcmMgKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gT3B0aW9uYWwgQUpBWCBkZXBlbmRlbmN5LCBidXQgd29uJ3QgcnVuIHNjcmlwdHMgaWYgbm90IHByZXNlbnRcblx0XHRcdFx0XHRcdFx0XHRpZiAoIGpRdWVyeS5fZXZhbFVybCApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGpRdWVyeS5fZXZhbFVybCggbm9kZS5zcmMgKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdFx0alF1ZXJ5Lmdsb2JhbEV2YWwoIG5vZGUudGV4dENvbnRlbnQucmVwbGFjZSggcmNsZWFuU2NyaXB0LCBcIlwiICkgKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9XG59KTtcblxualF1ZXJ5LmVhY2goe1xuXHRhcHBlbmRUbzogXCJhcHBlbmRcIixcblx0cHJlcGVuZFRvOiBcInByZXBlbmRcIixcblx0aW5zZXJ0QmVmb3JlOiBcImJlZm9yZVwiLFxuXHRpbnNlcnRBZnRlcjogXCJhZnRlclwiLFxuXHRyZXBsYWNlQWxsOiBcInJlcGxhY2VXaXRoXCJcbn0sIGZ1bmN0aW9uKCBuYW1lLCBvcmlnaW5hbCApIHtcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggc2VsZWN0b3IgKSB7XG5cdFx0dmFyIGVsZW1zLFxuXHRcdFx0cmV0ID0gW10sXG5cdFx0XHRpbnNlcnQgPSBqUXVlcnkoIHNlbGVjdG9yICksXG5cdFx0XHRsYXN0ID0gaW5zZXJ0Lmxlbmd0aCAtIDEsXG5cdFx0XHRpID0gMDtcblxuXHRcdGZvciAoIDsgaSA8PSBsYXN0OyBpKysgKSB7XG5cdFx0XHRlbGVtcyA9IGkgPT09IGxhc3QgPyB0aGlzIDogdGhpcy5jbG9uZSggdHJ1ZSApO1xuXHRcdFx0alF1ZXJ5KCBpbnNlcnRbIGkgXSApWyBvcmlnaW5hbCBdKCBlbGVtcyApO1xuXG5cdFx0XHQvLyBTdXBwb3J0OiBRdFdlYktpdFxuXHRcdFx0Ly8gLmdldCgpIGJlY2F1c2UgcHVzaC5hcHBseShfLCBhcnJheWxpa2UpIHRocm93c1xuXHRcdFx0cHVzaC5hcHBseSggcmV0LCBlbGVtcy5nZXQoKSApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLnB1c2hTdGFjayggcmV0ICk7XG5cdH07XG59KTtcblxuXG52YXIgaWZyYW1lLFxuXHRlbGVtZGlzcGxheSA9IHt9O1xuXG4vKipcbiAqIFJldHJpZXZlIHRoZSBhY3R1YWwgZGlzcGxheSBvZiBhIGVsZW1lbnRcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lIG5vZGVOYW1lIG9mIHRoZSBlbGVtZW50XG4gKiBAcGFyYW0ge09iamVjdH0gZG9jIERvY3VtZW50IG9iamVjdFxuICovXG4vLyBDYWxsZWQgb25seSBmcm9tIHdpdGhpbiBkZWZhdWx0RGlzcGxheVxuZnVuY3Rpb24gYWN0dWFsRGlzcGxheSggbmFtZSwgZG9jICkge1xuXHR2YXIgc3R5bGUsXG5cdFx0ZWxlbSA9IGpRdWVyeSggZG9jLmNyZWF0ZUVsZW1lbnQoIG5hbWUgKSApLmFwcGVuZFRvKCBkb2MuYm9keSApLFxuXG5cdFx0Ly8gZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUgbWlnaHQgYmUgcmVsaWFibHkgdXNlZCBvbmx5IG9uIGF0dGFjaGVkIGVsZW1lbnRcblx0XHRkaXNwbGF5ID0gd2luZG93LmdldERlZmF1bHRDb21wdXRlZFN0eWxlICYmICggc3R5bGUgPSB3aW5kb3cuZ2V0RGVmYXVsdENvbXB1dGVkU3R5bGUoIGVsZW1bIDAgXSApICkgP1xuXG5cdFx0XHQvLyBVc2Ugb2YgdGhpcyBtZXRob2QgaXMgYSB0ZW1wb3JhcnkgZml4IChtb3JlIGxpa2Ugb3B0aW1pemF0aW9uKSB1bnRpbCBzb21ldGhpbmcgYmV0dGVyIGNvbWVzIGFsb25nLFxuXHRcdFx0Ly8gc2luY2UgaXQgd2FzIHJlbW92ZWQgZnJvbSBzcGVjaWZpY2F0aW9uIGFuZCBzdXBwb3J0ZWQgb25seSBpbiBGRlxuXHRcdFx0c3R5bGUuZGlzcGxheSA6IGpRdWVyeS5jc3MoIGVsZW1bIDAgXSwgXCJkaXNwbGF5XCIgKTtcblxuXHQvLyBXZSBkb24ndCBoYXZlIGFueSBkYXRhIHN0b3JlZCBvbiB0aGUgZWxlbWVudCxcblx0Ly8gc28gdXNlIFwiZGV0YWNoXCIgbWV0aG9kIGFzIGZhc3Qgd2F5IHRvIGdldCByaWQgb2YgdGhlIGVsZW1lbnRcblx0ZWxlbS5kZXRhY2goKTtcblxuXHRyZXR1cm4gZGlzcGxheTtcbn1cblxuLyoqXG4gKiBUcnkgdG8gZGV0ZXJtaW5lIHRoZSBkZWZhdWx0IGRpc3BsYXkgdmFsdWUgb2YgYW4gZWxlbWVudFxuICogQHBhcmFtIHtTdHJpbmd9IG5vZGVOYW1lXG4gKi9cbmZ1bmN0aW9uIGRlZmF1bHREaXNwbGF5KCBub2RlTmFtZSApIHtcblx0dmFyIGRvYyA9IGRvY3VtZW50LFxuXHRcdGRpc3BsYXkgPSBlbGVtZGlzcGxheVsgbm9kZU5hbWUgXTtcblxuXHRpZiAoICFkaXNwbGF5ICkge1xuXHRcdGRpc3BsYXkgPSBhY3R1YWxEaXNwbGF5KCBub2RlTmFtZSwgZG9jICk7XG5cblx0XHQvLyBJZiB0aGUgc2ltcGxlIHdheSBmYWlscywgcmVhZCBmcm9tIGluc2lkZSBhbiBpZnJhbWVcblx0XHRpZiAoIGRpc3BsYXkgPT09IFwibm9uZVwiIHx8ICFkaXNwbGF5ICkge1xuXG5cdFx0XHQvLyBVc2UgdGhlIGFscmVhZHktY3JlYXRlZCBpZnJhbWUgaWYgcG9zc2libGVcblx0XHRcdGlmcmFtZSA9IChpZnJhbWUgfHwgalF1ZXJ5KCBcIjxpZnJhbWUgZnJhbWVib3JkZXI9JzAnIHdpZHRoPScwJyBoZWlnaHQ9JzAnLz5cIiApKS5hcHBlbmRUbyggZG9jLmRvY3VtZW50RWxlbWVudCApO1xuXG5cdFx0XHQvLyBBbHdheXMgd3JpdGUgYSBuZXcgSFRNTCBza2VsZXRvbiBzbyBXZWJraXQgYW5kIEZpcmVmb3ggZG9uJ3QgY2hva2Ugb24gcmV1c2Vcblx0XHRcdGRvYyA9IGlmcmFtZVsgMCBdLmNvbnRlbnREb2N1bWVudDtcblxuXHRcdFx0Ly8gU3VwcG9ydDogSUVcblx0XHRcdGRvYy53cml0ZSgpO1xuXHRcdFx0ZG9jLmNsb3NlKCk7XG5cblx0XHRcdGRpc3BsYXkgPSBhY3R1YWxEaXNwbGF5KCBub2RlTmFtZSwgZG9jICk7XG5cdFx0XHRpZnJhbWUuZGV0YWNoKCk7XG5cdFx0fVxuXG5cdFx0Ly8gU3RvcmUgdGhlIGNvcnJlY3QgZGVmYXVsdCBkaXNwbGF5XG5cdFx0ZWxlbWRpc3BsYXlbIG5vZGVOYW1lIF0gPSBkaXNwbGF5O1xuXHR9XG5cblx0cmV0dXJuIGRpc3BsYXk7XG59XG52YXIgcm1hcmdpbiA9ICgvXm1hcmdpbi8pO1xuXG52YXIgcm51bW5vbnB4ID0gbmV3IFJlZ0V4cCggXCJeKFwiICsgcG51bSArIFwiKSg/IXB4KVthLXolXSskXCIsIFwiaVwiICk7XG5cbnZhciBnZXRTdHlsZXMgPSBmdW5jdGlvbiggZWxlbSApIHtcblx0XHQvLyBTdXBwb3J0OiBJRTw9MTErLCBGaXJlZm94PD0zMCsgKCMxNTA5OCwgIzE0MTUwKVxuXHRcdC8vIElFIHRocm93cyBvbiBlbGVtZW50cyBjcmVhdGVkIGluIHBvcHVwc1xuXHRcdC8vIEZGIG1lYW53aGlsZSB0aHJvd3Mgb24gZnJhbWUgZWxlbWVudHMgdGhyb3VnaCBcImRlZmF1bHRWaWV3LmdldENvbXB1dGVkU3R5bGVcIlxuXHRcdGlmICggZWxlbS5vd25lckRvY3VtZW50LmRlZmF1bHRWaWV3Lm9wZW5lciApIHtcblx0XHRcdHJldHVybiBlbGVtLm93bmVyRG9jdW1lbnQuZGVmYXVsdFZpZXcuZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSwgbnVsbCApO1xuXHRcdH1cblxuXHRcdHJldHVybiB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZSggZWxlbSwgbnVsbCApO1xuXHR9O1xuXG5cblxuZnVuY3Rpb24gY3VyQ1NTKCBlbGVtLCBuYW1lLCBjb21wdXRlZCApIHtcblx0dmFyIHdpZHRoLCBtaW5XaWR0aCwgbWF4V2lkdGgsIHJldCxcblx0XHRzdHlsZSA9IGVsZW0uc3R5bGU7XG5cblx0Y29tcHV0ZWQgPSBjb21wdXRlZCB8fCBnZXRTdHlsZXMoIGVsZW0gKTtcblxuXHQvLyBTdXBwb3J0OiBJRTlcblx0Ly8gZ2V0UHJvcGVydHlWYWx1ZSBpcyBvbmx5IG5lZWRlZCBmb3IgLmNzcygnZmlsdGVyJykgKCMxMjUzNylcblx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRyZXQgPSBjb21wdXRlZC5nZXRQcm9wZXJ0eVZhbHVlKCBuYW1lICkgfHwgY29tcHV0ZWRbIG5hbWUgXTtcblx0fVxuXG5cdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHRpZiAoIHJldCA9PT0gXCJcIiAmJiAhalF1ZXJ5LmNvbnRhaW5zKCBlbGVtLm93bmVyRG9jdW1lbnQsIGVsZW0gKSApIHtcblx0XHRcdHJldCA9IGpRdWVyeS5zdHlsZSggZWxlbSwgbmFtZSApO1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IGlPUyA8IDZcblx0XHQvLyBBIHRyaWJ1dGUgdG8gdGhlIFwiYXdlc29tZSBoYWNrIGJ5IERlYW4gRWR3YXJkc1wiXG5cdFx0Ly8gaU9TIDwgNiAoYXQgbGVhc3QpIHJldHVybnMgcGVyY2VudGFnZSBmb3IgYSBsYXJnZXIgc2V0IG9mIHZhbHVlcywgYnV0IHdpZHRoIHNlZW1zIHRvIGJlIHJlbGlhYmx5IHBpeGVsc1xuXHRcdC8vIHRoaXMgaXMgYWdhaW5zdCB0aGUgQ1NTT00gZHJhZnQgc3BlYzogaHR0cDovL2Rldi53My5vcmcvY3Nzd2cvY3Nzb20vI3Jlc29sdmVkLXZhbHVlc1xuXHRcdGlmICggcm51bW5vbnB4LnRlc3QoIHJldCApICYmIHJtYXJnaW4udGVzdCggbmFtZSApICkge1xuXG5cdFx0XHQvLyBSZW1lbWJlciB0aGUgb3JpZ2luYWwgdmFsdWVzXG5cdFx0XHR3aWR0aCA9IHN0eWxlLndpZHRoO1xuXHRcdFx0bWluV2lkdGggPSBzdHlsZS5taW5XaWR0aDtcblx0XHRcdG1heFdpZHRoID0gc3R5bGUubWF4V2lkdGg7XG5cblx0XHRcdC8vIFB1dCBpbiB0aGUgbmV3IHZhbHVlcyB0byBnZXQgYSBjb21wdXRlZCB2YWx1ZSBvdXRcblx0XHRcdHN0eWxlLm1pbldpZHRoID0gc3R5bGUubWF4V2lkdGggPSBzdHlsZS53aWR0aCA9IHJldDtcblx0XHRcdHJldCA9IGNvbXB1dGVkLndpZHRoO1xuXG5cdFx0XHQvLyBSZXZlcnQgdGhlIGNoYW5nZWQgdmFsdWVzXG5cdFx0XHRzdHlsZS53aWR0aCA9IHdpZHRoO1xuXHRcdFx0c3R5bGUubWluV2lkdGggPSBtaW5XaWR0aDtcblx0XHRcdHN0eWxlLm1heFdpZHRoID0gbWF4V2lkdGg7XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHJldCAhPT0gdW5kZWZpbmVkID9cblx0XHQvLyBTdXBwb3J0OiBJRVxuXHRcdC8vIElFIHJldHVybnMgekluZGV4IHZhbHVlIGFzIGFuIGludGVnZXIuXG5cdFx0cmV0ICsgXCJcIiA6XG5cdFx0cmV0O1xufVxuXG5cbmZ1bmN0aW9uIGFkZEdldEhvb2tJZiggY29uZGl0aW9uRm4sIGhvb2tGbiApIHtcblx0Ly8gRGVmaW5lIHRoZSBob29rLCB3ZSdsbCBjaGVjayBvbiB0aGUgZmlyc3QgcnVuIGlmIGl0J3MgcmVhbGx5IG5lZWRlZC5cblx0cmV0dXJuIHtcblx0XHRnZXQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBjb25kaXRpb25GbigpICkge1xuXHRcdFx0XHQvLyBIb29rIG5vdCBuZWVkZWQgKG9yIGl0J3Mgbm90IHBvc3NpYmxlIHRvIHVzZSBpdCBkdWVcblx0XHRcdFx0Ly8gdG8gbWlzc2luZyBkZXBlbmRlbmN5KSwgcmVtb3ZlIGl0LlxuXHRcdFx0XHRkZWxldGUgdGhpcy5nZXQ7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSG9vayBuZWVkZWQ7IHJlZGVmaW5lIGl0IHNvIHRoYXQgdGhlIHN1cHBvcnQgdGVzdCBpcyBub3QgZXhlY3V0ZWQgYWdhaW4uXG5cdFx0XHRyZXR1cm4gKHRoaXMuZ2V0ID0gaG9va0ZuKS5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdFx0fVxuXHR9O1xufVxuXG5cbihmdW5jdGlvbigpIHtcblx0dmFyIHBpeGVsUG9zaXRpb25WYWwsIGJveFNpemluZ1JlbGlhYmxlVmFsLFxuXHRcdGRvY0VsZW0gPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsXG5cdFx0Y29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJkaXZcIiApLFxuXHRcdGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKTtcblxuXHRpZiAoICFkaXYuc3R5bGUgKSB7XG5cdFx0cmV0dXJuO1xuXHR9XG5cblx0Ly8gU3VwcG9ydDogSUU5LTExK1xuXHQvLyBTdHlsZSBvZiBjbG9uZWQgZWxlbWVudCBhZmZlY3RzIHNvdXJjZSBlbGVtZW50IGNsb25lZCAoIzg5MDgpXG5cdGRpdi5zdHlsZS5iYWNrZ3JvdW5kQ2xpcCA9IFwiY29udGVudC1ib3hcIjtcblx0ZGl2LmNsb25lTm9kZSggdHJ1ZSApLnN0eWxlLmJhY2tncm91bmRDbGlwID0gXCJcIjtcblx0c3VwcG9ydC5jbGVhckNsb25lU3R5bGUgPSBkaXYuc3R5bGUuYmFja2dyb3VuZENsaXAgPT09IFwiY29udGVudC1ib3hcIjtcblxuXHRjb250YWluZXIuc3R5bGUuY3NzVGV4dCA9IFwiYm9yZGVyOjA7d2lkdGg6MDtoZWlnaHQ6MDt0b3A6MDtsZWZ0Oi05OTk5cHg7bWFyZ2luLXRvcDoxcHg7XCIgK1xuXHRcdFwicG9zaXRpb246YWJzb2x1dGVcIjtcblx0Y29udGFpbmVyLmFwcGVuZENoaWxkKCBkaXYgKTtcblxuXHQvLyBFeGVjdXRpbmcgYm90aCBwaXhlbFBvc2l0aW9uICYgYm94U2l6aW5nUmVsaWFibGUgdGVzdHMgcmVxdWlyZSBvbmx5IG9uZSBsYXlvdXRcblx0Ly8gc28gdGhleSdyZSBleGVjdXRlZCBhdCB0aGUgc2FtZSB0aW1lIHRvIHNhdmUgdGhlIHNlY29uZCBjb21wdXRhdGlvbi5cblx0ZnVuY3Rpb24gY29tcHV0ZVBpeGVsUG9zaXRpb25BbmRCb3hTaXppbmdSZWxpYWJsZSgpIHtcblx0XHRkaXYuc3R5bGUuY3NzVGV4dCA9XG5cdFx0XHQvLyBTdXBwb3J0OiBGaXJlZm94PDI5LCBBbmRyb2lkIDIuM1xuXHRcdFx0Ly8gVmVuZG9yLXByZWZpeCBib3gtc2l6aW5nXG5cdFx0XHRcIi13ZWJraXQtYm94LXNpemluZzpib3JkZXItYm94Oy1tb3otYm94LXNpemluZzpib3JkZXItYm94O1wiICtcblx0XHRcdFwiYm94LXNpemluZzpib3JkZXItYm94O2Rpc3BsYXk6YmxvY2s7bWFyZ2luLXRvcDoxJTt0b3A6MSU7XCIgK1xuXHRcdFx0XCJib3JkZXI6MXB4O3BhZGRpbmc6MXB4O3dpZHRoOjRweDtwb3NpdGlvbjphYnNvbHV0ZVwiO1xuXHRcdGRpdi5pbm5lckhUTUwgPSBcIlwiO1xuXHRcdGRvY0VsZW0uYXBwZW5kQ2hpbGQoIGNvbnRhaW5lciApO1xuXG5cdFx0dmFyIGRpdlN0eWxlID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoIGRpdiwgbnVsbCApO1xuXHRcdHBpeGVsUG9zaXRpb25WYWwgPSBkaXZTdHlsZS50b3AgIT09IFwiMSVcIjtcblx0XHRib3hTaXppbmdSZWxpYWJsZVZhbCA9IGRpdlN0eWxlLndpZHRoID09PSBcIjRweFwiO1xuXG5cdFx0ZG9jRWxlbS5yZW1vdmVDaGlsZCggY29udGFpbmVyICk7XG5cdH1cblxuXHQvLyBTdXBwb3J0OiBub2RlLmpzIGpzZG9tXG5cdC8vIERvbid0IGFzc3VtZSB0aGF0IGdldENvbXB1dGVkU3R5bGUgaXMgYSBwcm9wZXJ0eSBvZiB0aGUgZ2xvYmFsIG9iamVjdFxuXHRpZiAoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlICkge1xuXHRcdGpRdWVyeS5leHRlbmQoIHN1cHBvcnQsIHtcblx0XHRcdHBpeGVsUG9zaXRpb246IGZ1bmN0aW9uKCkge1xuXG5cdFx0XHRcdC8vIFRoaXMgdGVzdCBpcyBleGVjdXRlZCBvbmx5IG9uY2UgYnV0IHdlIHN0aWxsIGRvIG1lbW9pemluZ1xuXHRcdFx0XHQvLyBzaW5jZSB3ZSBjYW4gdXNlIHRoZSBib3hTaXppbmdSZWxpYWJsZSBwcmUtY29tcHV0aW5nLlxuXHRcdFx0XHQvLyBObyBuZWVkIHRvIGNoZWNrIGlmIHRoZSB0ZXN0IHdhcyBhbHJlYWR5IHBlcmZvcm1lZCwgdGhvdWdoLlxuXHRcdFx0XHRjb21wdXRlUGl4ZWxQb3NpdGlvbkFuZEJveFNpemluZ1JlbGlhYmxlKCk7XG5cdFx0XHRcdHJldHVybiBwaXhlbFBvc2l0aW9uVmFsO1xuXHRcdFx0fSxcblx0XHRcdGJveFNpemluZ1JlbGlhYmxlOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBib3hTaXppbmdSZWxpYWJsZVZhbCA9PSBudWxsICkge1xuXHRcdFx0XHRcdGNvbXB1dGVQaXhlbFBvc2l0aW9uQW5kQm94U2l6aW5nUmVsaWFibGUoKTtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXR1cm4gYm94U2l6aW5nUmVsaWFibGVWYWw7XG5cdFx0XHR9LFxuXHRcdFx0cmVsaWFibGVNYXJnaW5SaWdodDogZnVuY3Rpb24oKSB7XG5cblx0XHRcdFx0Ly8gU3VwcG9ydDogQW5kcm9pZCAyLjNcblx0XHRcdFx0Ly8gQ2hlY2sgaWYgZGl2IHdpdGggZXhwbGljaXQgd2lkdGggYW5kIG5vIG1hcmdpbi1yaWdodCBpbmNvcnJlY3RseVxuXHRcdFx0XHQvLyBnZXRzIGNvbXB1dGVkIG1hcmdpbi1yaWdodCBiYXNlZCBvbiB3aWR0aCBvZiBjb250YWluZXIuICgjMzMzMylcblx0XHRcdFx0Ly8gV2ViS2l0IEJ1ZyAxMzM0MyAtIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyB3cm9uZyB2YWx1ZSBmb3IgbWFyZ2luLXJpZ2h0XG5cdFx0XHRcdC8vIFRoaXMgc3VwcG9ydCBmdW5jdGlvbiBpcyBvbmx5IGV4ZWN1dGVkIG9uY2Ugc28gbm8gbWVtb2l6aW5nIGlzIG5lZWRlZC5cblx0XHRcdFx0dmFyIHJldCxcblx0XHRcdFx0XHRtYXJnaW5EaXYgPSBkaXYuYXBwZW5kQ2hpbGQoIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoIFwiZGl2XCIgKSApO1xuXG5cdFx0XHRcdC8vIFJlc2V0IENTUzogYm94LXNpemluZzsgZGlzcGxheTsgbWFyZ2luOyBib3JkZXI7IHBhZGRpbmdcblx0XHRcdFx0bWFyZ2luRGl2LnN0eWxlLmNzc1RleHQgPSBkaXYuc3R5bGUuY3NzVGV4dCA9XG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogRmlyZWZveDwyOSwgQW5kcm9pZCAyLjNcblx0XHRcdFx0XHQvLyBWZW5kb3ItcHJlZml4IGJveC1zaXppbmdcblx0XHRcdFx0XHRcIi13ZWJraXQtYm94LXNpemluZzpjb250ZW50LWJveDstbW96LWJveC1zaXppbmc6Y29udGVudC1ib3g7XCIgK1xuXHRcdFx0XHRcdFwiYm94LXNpemluZzpjb250ZW50LWJveDtkaXNwbGF5OmJsb2NrO21hcmdpbjowO2JvcmRlcjowO3BhZGRpbmc6MFwiO1xuXHRcdFx0XHRtYXJnaW5EaXYuc3R5bGUubWFyZ2luUmlnaHQgPSBtYXJnaW5EaXYuc3R5bGUud2lkdGggPSBcIjBcIjtcblx0XHRcdFx0ZGl2LnN0eWxlLndpZHRoID0gXCIxcHhcIjtcblx0XHRcdFx0ZG9jRWxlbS5hcHBlbmRDaGlsZCggY29udGFpbmVyICk7XG5cblx0XHRcdFx0cmV0ID0gIXBhcnNlRmxvYXQoIHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKCBtYXJnaW5EaXYsIG51bGwgKS5tYXJnaW5SaWdodCApO1xuXG5cdFx0XHRcdGRvY0VsZW0ucmVtb3ZlQ2hpbGQoIGNvbnRhaW5lciApO1xuXHRcdFx0XHRkaXYucmVtb3ZlQ2hpbGQoIG1hcmdpbkRpdiApO1xuXG5cdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pKCk7XG5cblxuLy8gQSBtZXRob2QgZm9yIHF1aWNrbHkgc3dhcHBpbmcgaW4vb3V0IENTUyBwcm9wZXJ0aWVzIHRvIGdldCBjb3JyZWN0IGNhbGN1bGF0aW9ucy5cbmpRdWVyeS5zd2FwID0gZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGNhbGxiYWNrLCBhcmdzICkge1xuXHR2YXIgcmV0LCBuYW1lLFxuXHRcdG9sZCA9IHt9O1xuXG5cdC8vIFJlbWVtYmVyIHRoZSBvbGQgdmFsdWVzLCBhbmQgaW5zZXJ0IHRoZSBuZXcgb25lc1xuXHRmb3IgKCBuYW1lIGluIG9wdGlvbnMgKSB7XG5cdFx0b2xkWyBuYW1lIF0gPSBlbGVtLnN0eWxlWyBuYW1lIF07XG5cdFx0ZWxlbS5zdHlsZVsgbmFtZSBdID0gb3B0aW9uc1sgbmFtZSBdO1xuXHR9XG5cblx0cmV0ID0gY2FsbGJhY2suYXBwbHkoIGVsZW0sIGFyZ3MgfHwgW10gKTtcblxuXHQvLyBSZXZlcnQgdGhlIG9sZCB2YWx1ZXNcblx0Zm9yICggbmFtZSBpbiBvcHRpb25zICkge1xuXHRcdGVsZW0uc3R5bGVbIG5hbWUgXSA9IG9sZFsgbmFtZSBdO1xuXHR9XG5cblx0cmV0dXJuIHJldDtcbn07XG5cblxudmFyXG5cdC8vIFN3YXBwYWJsZSBpZiBkaXNwbGF5IGlzIG5vbmUgb3Igc3RhcnRzIHdpdGggdGFibGUgZXhjZXB0IFwidGFibGVcIiwgXCJ0YWJsZS1jZWxsXCIsIG9yIFwidGFibGUtY2FwdGlvblwiXG5cdC8vIFNlZSBoZXJlIGZvciBkaXNwbGF5IHZhbHVlczogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9DU1MvZGlzcGxheVxuXHRyZGlzcGxheXN3YXAgPSAvXihub25lfHRhYmxlKD8hLWNbZWFdKS4rKS8sXG5cdHJudW1zcGxpdCA9IG5ldyBSZWdFeHAoIFwiXihcIiArIHBudW0gKyBcIikoLiopJFwiLCBcImlcIiApLFxuXHRycmVsTnVtID0gbmV3IFJlZ0V4cCggXCJeKFsrLV0pPShcIiArIHBudW0gKyBcIilcIiwgXCJpXCIgKSxcblxuXHRjc3NTaG93ID0geyBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLCB2aXNpYmlsaXR5OiBcImhpZGRlblwiLCBkaXNwbGF5OiBcImJsb2NrXCIgfSxcblx0Y3NzTm9ybWFsVHJhbnNmb3JtID0ge1xuXHRcdGxldHRlclNwYWNpbmc6IFwiMFwiLFxuXHRcdGZvbnRXZWlnaHQ6IFwiNDAwXCJcblx0fSxcblxuXHRjc3NQcmVmaXhlcyA9IFsgXCJXZWJraXRcIiwgXCJPXCIsIFwiTW96XCIsIFwibXNcIiBdO1xuXG4vLyBSZXR1cm4gYSBjc3MgcHJvcGVydHkgbWFwcGVkIHRvIGEgcG90ZW50aWFsbHkgdmVuZG9yIHByZWZpeGVkIHByb3BlcnR5XG5mdW5jdGlvbiB2ZW5kb3JQcm9wTmFtZSggc3R5bGUsIG5hbWUgKSB7XG5cblx0Ly8gU2hvcnRjdXQgZm9yIG5hbWVzIHRoYXQgYXJlIG5vdCB2ZW5kb3IgcHJlZml4ZWRcblx0aWYgKCBuYW1lIGluIHN0eWxlICkge1xuXHRcdHJldHVybiBuYW1lO1xuXHR9XG5cblx0Ly8gQ2hlY2sgZm9yIHZlbmRvciBwcmVmaXhlZCBuYW1lc1xuXHR2YXIgY2FwTmFtZSA9IG5hbWVbMF0udG9VcHBlckNhc2UoKSArIG5hbWUuc2xpY2UoMSksXG5cdFx0b3JpZ05hbWUgPSBuYW1lLFxuXHRcdGkgPSBjc3NQcmVmaXhlcy5sZW5ndGg7XG5cblx0d2hpbGUgKCBpLS0gKSB7XG5cdFx0bmFtZSA9IGNzc1ByZWZpeGVzWyBpIF0gKyBjYXBOYW1lO1xuXHRcdGlmICggbmFtZSBpbiBzdHlsZSApIHtcblx0XHRcdHJldHVybiBuYW1lO1xuXHRcdH1cblx0fVxuXG5cdHJldHVybiBvcmlnTmFtZTtcbn1cblxuZnVuY3Rpb24gc2V0UG9zaXRpdmVOdW1iZXIoIGVsZW0sIHZhbHVlLCBzdWJ0cmFjdCApIHtcblx0dmFyIG1hdGNoZXMgPSBybnVtc3BsaXQuZXhlYyggdmFsdWUgKTtcblx0cmV0dXJuIG1hdGNoZXMgP1xuXHRcdC8vIEd1YXJkIGFnYWluc3QgdW5kZWZpbmVkIFwic3VidHJhY3RcIiwgZS5nLiwgd2hlbiB1c2VkIGFzIGluIGNzc0hvb2tzXG5cdFx0TWF0aC5tYXgoIDAsIG1hdGNoZXNbIDEgXSAtICggc3VidHJhY3QgfHwgMCApICkgKyAoIG1hdGNoZXNbIDIgXSB8fCBcInB4XCIgKSA6XG5cdFx0dmFsdWU7XG59XG5cbmZ1bmN0aW9uIGF1Z21lbnRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBuYW1lLCBleHRyYSwgaXNCb3JkZXJCb3gsIHN0eWxlcyApIHtcblx0dmFyIGkgPSBleHRyYSA9PT0gKCBpc0JvcmRlckJveCA/IFwiYm9yZGVyXCIgOiBcImNvbnRlbnRcIiApID9cblx0XHQvLyBJZiB3ZSBhbHJlYWR5IGhhdmUgdGhlIHJpZ2h0IG1lYXN1cmVtZW50LCBhdm9pZCBhdWdtZW50YXRpb25cblx0XHQ0IDpcblx0XHQvLyBPdGhlcndpc2UgaW5pdGlhbGl6ZSBmb3IgaG9yaXpvbnRhbCBvciB2ZXJ0aWNhbCBwcm9wZXJ0aWVzXG5cdFx0bmFtZSA9PT0gXCJ3aWR0aFwiID8gMSA6IDAsXG5cblx0XHR2YWwgPSAwO1xuXG5cdGZvciAoIDsgaSA8IDQ7IGkgKz0gMiApIHtcblx0XHQvLyBCb3RoIGJveCBtb2RlbHMgZXhjbHVkZSBtYXJnaW4sIHNvIGFkZCBpdCBpZiB3ZSB3YW50IGl0XG5cdFx0aWYgKCBleHRyYSA9PT0gXCJtYXJnaW5cIiApIHtcblx0XHRcdHZhbCArPSBqUXVlcnkuY3NzKCBlbGVtLCBleHRyYSArIGNzc0V4cGFuZFsgaSBdLCB0cnVlLCBzdHlsZXMgKTtcblx0XHR9XG5cblx0XHRpZiAoIGlzQm9yZGVyQm94ICkge1xuXHRcdFx0Ly8gYm9yZGVyLWJveCBpbmNsdWRlcyBwYWRkaW5nLCBzbyByZW1vdmUgaXQgaWYgd2Ugd2FudCBjb250ZW50XG5cdFx0XHRpZiAoIGV4dHJhID09PSBcImNvbnRlbnRcIiApIHtcblx0XHRcdFx0dmFsIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwicGFkZGluZ1wiICsgY3NzRXhwYW5kWyBpIF0sIHRydWUsIHN0eWxlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBdCB0aGlzIHBvaW50LCBleHRyYSBpc24ndCBib3JkZXIgbm9yIG1hcmdpbiwgc28gcmVtb3ZlIGJvcmRlclxuXHRcdFx0aWYgKCBleHRyYSAhPT0gXCJtYXJnaW5cIiApIHtcblx0XHRcdFx0dmFsIC09IGpRdWVyeS5jc3MoIGVsZW0sIFwiYm9yZGVyXCIgKyBjc3NFeHBhbmRbIGkgXSArIFwiV2lkdGhcIiwgdHJ1ZSwgc3R5bGVzICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEF0IHRoaXMgcG9pbnQsIGV4dHJhIGlzbid0IGNvbnRlbnQsIHNvIGFkZCBwYWRkaW5nXG5cdFx0XHR2YWwgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJwYWRkaW5nXCIgKyBjc3NFeHBhbmRbIGkgXSwgdHJ1ZSwgc3R5bGVzICk7XG5cblx0XHRcdC8vIEF0IHRoaXMgcG9pbnQsIGV4dHJhIGlzbid0IGNvbnRlbnQgbm9yIHBhZGRpbmcsIHNvIGFkZCBib3JkZXJcblx0XHRcdGlmICggZXh0cmEgIT09IFwicGFkZGluZ1wiICkge1xuXHRcdFx0XHR2YWwgKz0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3JkZXJcIiArIGNzc0V4cGFuZFsgaSBdICsgXCJXaWR0aFwiLCB0cnVlLCBzdHlsZXMgKTtcblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gdmFsO1xufVxuXG5mdW5jdGlvbiBnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBuYW1lLCBleHRyYSApIHtcblxuXHQvLyBTdGFydCB3aXRoIG9mZnNldCBwcm9wZXJ0eSwgd2hpY2ggaXMgZXF1aXZhbGVudCB0byB0aGUgYm9yZGVyLWJveCB2YWx1ZVxuXHR2YXIgdmFsdWVJc0JvcmRlckJveCA9IHRydWUsXG5cdFx0dmFsID0gbmFtZSA9PT0gXCJ3aWR0aFwiID8gZWxlbS5vZmZzZXRXaWR0aCA6IGVsZW0ub2Zmc2V0SGVpZ2h0LFxuXHRcdHN0eWxlcyA9IGdldFN0eWxlcyggZWxlbSApLFxuXHRcdGlzQm9yZGVyQm94ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJib3hTaXppbmdcIiwgZmFsc2UsIHN0eWxlcyApID09PSBcImJvcmRlci1ib3hcIjtcblxuXHQvLyBTb21lIG5vbi1odG1sIGVsZW1lbnRzIHJldHVybiB1bmRlZmluZWQgZm9yIG9mZnNldFdpZHRoLCBzbyBjaGVjayBmb3IgbnVsbC91bmRlZmluZWRcblx0Ly8gc3ZnIC0gaHR0cHM6Ly9idWd6aWxsYS5tb3ppbGxhLm9yZy9zaG93X2J1Zy5jZ2k/aWQ9NjQ5Mjg1XG5cdC8vIE1hdGhNTCAtIGh0dHBzOi8vYnVnemlsbGEubW96aWxsYS5vcmcvc2hvd19idWcuY2dpP2lkPTQ5MTY2OFxuXHRpZiAoIHZhbCA8PSAwIHx8IHZhbCA9PSBudWxsICkge1xuXHRcdC8vIEZhbGwgYmFjayB0byBjb21wdXRlZCB0aGVuIHVuY29tcHV0ZWQgY3NzIGlmIG5lY2Vzc2FyeVxuXHRcdHZhbCA9IGN1ckNTUyggZWxlbSwgbmFtZSwgc3R5bGVzICk7XG5cdFx0aWYgKCB2YWwgPCAwIHx8IHZhbCA9PSBudWxsICkge1xuXHRcdFx0dmFsID0gZWxlbS5zdHlsZVsgbmFtZSBdO1xuXHRcdH1cblxuXHRcdC8vIENvbXB1dGVkIHVuaXQgaXMgbm90IHBpeGVscy4gU3RvcCBoZXJlIGFuZCByZXR1cm4uXG5cdFx0aWYgKCBybnVtbm9ucHgudGVzdCh2YWwpICkge1xuXHRcdFx0cmV0dXJuIHZhbDtcblx0XHR9XG5cblx0XHQvLyBDaGVjayBmb3Igc3R5bGUgaW4gY2FzZSBhIGJyb3dzZXIgd2hpY2ggcmV0dXJucyB1bnJlbGlhYmxlIHZhbHVlc1xuXHRcdC8vIGZvciBnZXRDb21wdXRlZFN0eWxlIHNpbGVudGx5IGZhbGxzIGJhY2sgdG8gdGhlIHJlbGlhYmxlIGVsZW0uc3R5bGVcblx0XHR2YWx1ZUlzQm9yZGVyQm94ID0gaXNCb3JkZXJCb3ggJiZcblx0XHRcdCggc3VwcG9ydC5ib3hTaXppbmdSZWxpYWJsZSgpIHx8IHZhbCA9PT0gZWxlbS5zdHlsZVsgbmFtZSBdICk7XG5cblx0XHQvLyBOb3JtYWxpemUgXCJcIiwgYXV0bywgYW5kIHByZXBhcmUgZm9yIGV4dHJhXG5cdFx0dmFsID0gcGFyc2VGbG9hdCggdmFsICkgfHwgMDtcblx0fVxuXG5cdC8vIFVzZSB0aGUgYWN0aXZlIGJveC1zaXppbmcgbW9kZWwgdG8gYWRkL3N1YnRyYWN0IGlycmVsZXZhbnQgc3R5bGVzXG5cdHJldHVybiAoIHZhbCArXG5cdFx0YXVnbWVudFdpZHRoT3JIZWlnaHQoXG5cdFx0XHRlbGVtLFxuXHRcdFx0bmFtZSxcblx0XHRcdGV4dHJhIHx8ICggaXNCb3JkZXJCb3ggPyBcImJvcmRlclwiIDogXCJjb250ZW50XCIgKSxcblx0XHRcdHZhbHVlSXNCb3JkZXJCb3gsXG5cdFx0XHRzdHlsZXNcblx0XHQpXG5cdCkgKyBcInB4XCI7XG59XG5cbmZ1bmN0aW9uIHNob3dIaWRlKCBlbGVtZW50cywgc2hvdyApIHtcblx0dmFyIGRpc3BsYXksIGVsZW0sIGhpZGRlbixcblx0XHR2YWx1ZXMgPSBbXSxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoO1xuXG5cdGZvciAoIDsgaW5kZXggPCBsZW5ndGg7IGluZGV4KysgKSB7XG5cdFx0ZWxlbSA9IGVsZW1lbnRzWyBpbmRleCBdO1xuXHRcdGlmICggIWVsZW0uc3R5bGUgKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHR2YWx1ZXNbIGluZGV4IF0gPSBkYXRhX3ByaXYuZ2V0KCBlbGVtLCBcIm9sZGRpc3BsYXlcIiApO1xuXHRcdGRpc3BsYXkgPSBlbGVtLnN0eWxlLmRpc3BsYXk7XG5cdFx0aWYgKCBzaG93ICkge1xuXHRcdFx0Ly8gUmVzZXQgdGhlIGlubGluZSBkaXNwbGF5IG9mIHRoaXMgZWxlbWVudCB0byBsZWFybiBpZiBpdCBpc1xuXHRcdFx0Ly8gYmVpbmcgaGlkZGVuIGJ5IGNhc2NhZGVkIHJ1bGVzIG9yIG5vdFxuXHRcdFx0aWYgKCAhdmFsdWVzWyBpbmRleCBdICYmIGRpc3BsYXkgPT09IFwibm9uZVwiICkge1xuXHRcdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPSBcIlwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgZWxlbWVudHMgd2hpY2ggaGF2ZSBiZWVuIG92ZXJyaWRkZW4gd2l0aCBkaXNwbGF5OiBub25lXG5cdFx0XHQvLyBpbiBhIHN0eWxlc2hlZXQgdG8gd2hhdGV2ZXIgdGhlIGRlZmF1bHQgYnJvd3NlciBzdHlsZSBpc1xuXHRcdFx0Ly8gZm9yIHN1Y2ggYW4gZWxlbWVudFxuXHRcdFx0aWYgKCBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgJiYgaXNIaWRkZW4oIGVsZW0gKSApIHtcblx0XHRcdFx0dmFsdWVzWyBpbmRleCBdID0gZGF0YV9wcml2LmFjY2VzcyggZWxlbSwgXCJvbGRkaXNwbGF5XCIsIGRlZmF1bHREaXNwbGF5KGVsZW0ubm9kZU5hbWUpICk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGhpZGRlbiA9IGlzSGlkZGVuKCBlbGVtICk7XG5cblx0XHRcdGlmICggZGlzcGxheSAhPT0gXCJub25lXCIgfHwgIWhpZGRlbiApIHtcblx0XHRcdFx0ZGF0YV9wcml2LnNldCggZWxlbSwgXCJvbGRkaXNwbGF5XCIsIGhpZGRlbiA/IGRpc3BsYXkgOiBqUXVlcnkuY3NzKCBlbGVtLCBcImRpc3BsYXlcIiApICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0Ly8gU2V0IHRoZSBkaXNwbGF5IG9mIG1vc3Qgb2YgdGhlIGVsZW1lbnRzIGluIGEgc2Vjb25kIGxvb3Bcblx0Ly8gdG8gYXZvaWQgdGhlIGNvbnN0YW50IHJlZmxvd1xuXHRmb3IgKCBpbmRleCA9IDA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGVsZW0gPSBlbGVtZW50c1sgaW5kZXggXTtcblx0XHRpZiAoICFlbGVtLnN0eWxlICkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXHRcdGlmICggIXNob3cgfHwgZWxlbS5zdHlsZS5kaXNwbGF5ID09PSBcIm5vbmVcIiB8fCBlbGVtLnN0eWxlLmRpc3BsYXkgPT09IFwiXCIgKSB7XG5cdFx0XHRlbGVtLnN0eWxlLmRpc3BsYXkgPSBzaG93ID8gdmFsdWVzWyBpbmRleCBdIHx8IFwiXCIgOiBcIm5vbmVcIjtcblx0XHR9XG5cdH1cblxuXHRyZXR1cm4gZWxlbWVudHM7XG59XG5cbmpRdWVyeS5leHRlbmQoe1xuXG5cdC8vIEFkZCBpbiBzdHlsZSBwcm9wZXJ0eSBob29rcyBmb3Igb3ZlcnJpZGluZyB0aGUgZGVmYXVsdFxuXHQvLyBiZWhhdmlvciBvZiBnZXR0aW5nIGFuZCBzZXR0aW5nIGEgc3R5bGUgcHJvcGVydHlcblx0Y3NzSG9va3M6IHtcblx0XHRvcGFjaXR5OiB7XG5cdFx0XHRnZXQ6IGZ1bmN0aW9uKCBlbGVtLCBjb21wdXRlZCApIHtcblx0XHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblxuXHRcdFx0XHRcdC8vIFdlIHNob3VsZCBhbHdheXMgZ2V0IGEgbnVtYmVyIGJhY2sgZnJvbSBvcGFjaXR5XG5cdFx0XHRcdFx0dmFyIHJldCA9IGN1ckNTUyggZWxlbSwgXCJvcGFjaXR5XCIgKTtcblx0XHRcdFx0XHRyZXR1cm4gcmV0ID09PSBcIlwiID8gXCIxXCIgOiByZXQ7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH0sXG5cblx0Ly8gRG9uJ3QgYXV0b21hdGljYWxseSBhZGQgXCJweFwiIHRvIHRoZXNlIHBvc3NpYmx5LXVuaXRsZXNzIHByb3BlcnRpZXNcblx0Y3NzTnVtYmVyOiB7XG5cdFx0XCJjb2x1bW5Db3VudFwiOiB0cnVlLFxuXHRcdFwiZmlsbE9wYWNpdHlcIjogdHJ1ZSxcblx0XHRcImZsZXhHcm93XCI6IHRydWUsXG5cdFx0XCJmbGV4U2hyaW5rXCI6IHRydWUsXG5cdFx0XCJmb250V2VpZ2h0XCI6IHRydWUsXG5cdFx0XCJsaW5lSGVpZ2h0XCI6IHRydWUsXG5cdFx0XCJvcGFjaXR5XCI6IHRydWUsXG5cdFx0XCJvcmRlclwiOiB0cnVlLFxuXHRcdFwib3JwaGFuc1wiOiB0cnVlLFxuXHRcdFwid2lkb3dzXCI6IHRydWUsXG5cdFx0XCJ6SW5kZXhcIjogdHJ1ZSxcblx0XHRcInpvb21cIjogdHJ1ZVxuXHR9LFxuXG5cdC8vIEFkZCBpbiBwcm9wZXJ0aWVzIHdob3NlIG5hbWVzIHlvdSB3aXNoIHRvIGZpeCBiZWZvcmVcblx0Ly8gc2V0dGluZyBvciBnZXR0aW5nIHRoZSB2YWx1ZVxuXHRjc3NQcm9wczoge1xuXHRcdFwiZmxvYXRcIjogXCJjc3NGbG9hdFwiXG5cdH0sXG5cblx0Ly8gR2V0IGFuZCBzZXQgdGhlIHN0eWxlIHByb3BlcnR5IG9uIGEgRE9NIE5vZGVcblx0c3R5bGU6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSwgZXh0cmEgKSB7XG5cblx0XHQvLyBEb24ndCBzZXQgc3R5bGVzIG9uIHRleHQgYW5kIGNvbW1lbnQgbm9kZXNcblx0XHRpZiAoICFlbGVtIHx8IGVsZW0ubm9kZVR5cGUgPT09IDMgfHwgZWxlbS5ub2RlVHlwZSA9PT0gOCB8fCAhZWxlbS5zdHlsZSApIHtcblx0XHRcdHJldHVybjtcblx0XHR9XG5cblx0XHQvLyBNYWtlIHN1cmUgdGhhdCB3ZSdyZSB3b3JraW5nIHdpdGggdGhlIHJpZ2h0IG5hbWVcblx0XHR2YXIgcmV0LCB0eXBlLCBob29rcyxcblx0XHRcdG9yaWdOYW1lID0galF1ZXJ5LmNhbWVsQ2FzZSggbmFtZSApLFxuXHRcdFx0c3R5bGUgPSBlbGVtLnN0eWxlO1xuXG5cdFx0bmFtZSA9IGpRdWVyeS5jc3NQcm9wc1sgb3JpZ05hbWUgXSB8fCAoIGpRdWVyeS5jc3NQcm9wc1sgb3JpZ05hbWUgXSA9IHZlbmRvclByb3BOYW1lKCBzdHlsZSwgb3JpZ05hbWUgKSApO1xuXG5cdFx0Ly8gR2V0cyBob29rIGZvciB0aGUgcHJlZml4ZWQgdmVyc2lvbiwgdGhlbiB1bnByZWZpeGVkIHZlcnNpb25cblx0XHRob29rcyA9IGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdIHx8IGpRdWVyeS5jc3NIb29rc1sgb3JpZ05hbWUgXTtcblxuXHRcdC8vIENoZWNrIGlmIHdlJ3JlIHNldHRpbmcgYSB2YWx1ZVxuXHRcdGlmICggdmFsdWUgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdHR5cGUgPSB0eXBlb2YgdmFsdWU7XG5cblx0XHRcdC8vIENvbnZlcnQgXCIrPVwiIG9yIFwiLT1cIiB0byByZWxhdGl2ZSBudW1iZXJzICgjNzM0NSlcblx0XHRcdGlmICggdHlwZSA9PT0gXCJzdHJpbmdcIiAmJiAocmV0ID0gcnJlbE51bS5leGVjKCB2YWx1ZSApKSApIHtcblx0XHRcdFx0dmFsdWUgPSAoIHJldFsxXSArIDEgKSAqIHJldFsyXSArIHBhcnNlRmxvYXQoIGpRdWVyeS5jc3MoIGVsZW0sIG5hbWUgKSApO1xuXHRcdFx0XHQvLyBGaXhlcyBidWcgIzkyMzdcblx0XHRcdFx0dHlwZSA9IFwibnVtYmVyXCI7XG5cdFx0XHR9XG5cblx0XHRcdC8vIE1ha2Ugc3VyZSB0aGF0IG51bGwgYW5kIE5hTiB2YWx1ZXMgYXJlbid0IHNldCAoIzcxMTYpXG5cdFx0XHRpZiAoIHZhbHVlID09IG51bGwgfHwgdmFsdWUgIT09IHZhbHVlICkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdC8vIElmIGEgbnVtYmVyLCBhZGQgJ3B4JyB0byB0aGUgKGV4Y2VwdCBmb3IgY2VydGFpbiBDU1MgcHJvcGVydGllcylcblx0XHRcdGlmICggdHlwZSA9PT0gXCJudW1iZXJcIiAmJiAhalF1ZXJ5LmNzc051bWJlclsgb3JpZ05hbWUgXSApIHtcblx0XHRcdFx0dmFsdWUgKz0gXCJweFwiO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdXBwb3J0OiBJRTktMTErXG5cdFx0XHQvLyBiYWNrZ3JvdW5kLSogcHJvcHMgYWZmZWN0IG9yaWdpbmFsIGNsb25lJ3MgdmFsdWVzXG5cdFx0XHRpZiAoICFzdXBwb3J0LmNsZWFyQ2xvbmVTdHlsZSAmJiB2YWx1ZSA9PT0gXCJcIiAmJiBuYW1lLmluZGV4T2YoIFwiYmFja2dyb3VuZFwiICkgPT09IDAgKSB7XG5cdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSBcImluaGVyaXRcIjtcblx0XHRcdH1cblxuXHRcdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCwgdXNlIHRoYXQgdmFsdWUsIG90aGVyd2lzZSBqdXN0IHNldCB0aGUgc3BlY2lmaWVkIHZhbHVlXG5cdFx0XHRpZiAoICFob29rcyB8fCAhKFwic2V0XCIgaW4gaG9va3MpIHx8ICh2YWx1ZSA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIGV4dHJhICkpICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHN0eWxlWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdH1cblxuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBJZiBhIGhvb2sgd2FzIHByb3ZpZGVkIGdldCB0aGUgbm9uLWNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcblx0XHRcdGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBmYWxzZSwgZXh0cmEgKSkgIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0cmV0dXJuIHJldDtcblx0XHRcdH1cblxuXHRcdFx0Ly8gT3RoZXJ3aXNlIGp1c3QgZ2V0IHRoZSB2YWx1ZSBmcm9tIHRoZSBzdHlsZSBvYmplY3Rcblx0XHRcdHJldHVybiBzdHlsZVsgbmFtZSBdO1xuXHRcdH1cblx0fSxcblxuXHRjc3M6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCBleHRyYSwgc3R5bGVzICkge1xuXHRcdHZhciB2YWwsIG51bSwgaG9va3MsXG5cdFx0XHRvcmlnTmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIG5hbWUgKTtcblxuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IHdlJ3JlIHdvcmtpbmcgd2l0aCB0aGUgcmlnaHQgbmFtZVxuXHRcdG5hbWUgPSBqUXVlcnkuY3NzUHJvcHNbIG9yaWdOYW1lIF0gfHwgKCBqUXVlcnkuY3NzUHJvcHNbIG9yaWdOYW1lIF0gPSB2ZW5kb3JQcm9wTmFtZSggZWxlbS5zdHlsZSwgb3JpZ05hbWUgKSApO1xuXG5cdFx0Ly8gVHJ5IHByZWZpeGVkIG5hbWUgZm9sbG93ZWQgYnkgdGhlIHVucHJlZml4ZWQgbmFtZVxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF0gfHwgalF1ZXJ5LmNzc0hvb2tzWyBvcmlnTmFtZSBdO1xuXG5cdFx0Ly8gSWYgYSBob29rIHdhcyBwcm92aWRlZCBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGZyb20gdGhlcmVcblx0XHRpZiAoIGhvb2tzICYmIFwiZ2V0XCIgaW4gaG9va3MgKSB7XG5cdFx0XHR2YWwgPSBob29rcy5nZXQoIGVsZW0sIHRydWUsIGV4dHJhICk7XG5cdFx0fVxuXG5cdFx0Ly8gT3RoZXJ3aXNlLCBpZiBhIHdheSB0byBnZXQgdGhlIGNvbXB1dGVkIHZhbHVlIGV4aXN0cywgdXNlIHRoYXRcblx0XHRpZiAoIHZhbCA9PT0gdW5kZWZpbmVkICkge1xuXHRcdFx0dmFsID0gY3VyQ1NTKCBlbGVtLCBuYW1lLCBzdHlsZXMgKTtcblx0XHR9XG5cblx0XHQvLyBDb252ZXJ0IFwibm9ybWFsXCIgdG8gY29tcHV0ZWQgdmFsdWVcblx0XHRpZiAoIHZhbCA9PT0gXCJub3JtYWxcIiAmJiBuYW1lIGluIGNzc05vcm1hbFRyYW5zZm9ybSApIHtcblx0XHRcdHZhbCA9IGNzc05vcm1hbFRyYW5zZm9ybVsgbmFtZSBdO1xuXHRcdH1cblxuXHRcdC8vIE1ha2UgbnVtZXJpYyBpZiBmb3JjZWQgb3IgYSBxdWFsaWZpZXIgd2FzIHByb3ZpZGVkIGFuZCB2YWwgbG9va3MgbnVtZXJpY1xuXHRcdGlmICggZXh0cmEgPT09IFwiXCIgfHwgZXh0cmEgKSB7XG5cdFx0XHRudW0gPSBwYXJzZUZsb2F0KCB2YWwgKTtcblx0XHRcdHJldHVybiBleHRyYSA9PT0gdHJ1ZSB8fCBqUXVlcnkuaXNOdW1lcmljKCBudW0gKSA/IG51bSB8fCAwIDogdmFsO1xuXHRcdH1cblx0XHRyZXR1cm4gdmFsO1xuXHR9XG59KTtcblxualF1ZXJ5LmVhY2goWyBcImhlaWdodFwiLCBcIndpZHRoXCIgXSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgbmFtZSBdID0ge1xuXHRcdGdldDogZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkLCBleHRyYSApIHtcblx0XHRcdGlmICggY29tcHV0ZWQgKSB7XG5cblx0XHRcdFx0Ly8gQ2VydGFpbiBlbGVtZW50cyBjYW4gaGF2ZSBkaW1lbnNpb24gaW5mbyBpZiB3ZSBpbnZpc2libHkgc2hvdyB0aGVtXG5cdFx0XHRcdC8vIGJ1dCBpdCBtdXN0IGhhdmUgYSBjdXJyZW50IGRpc3BsYXkgc3R5bGUgdGhhdCB3b3VsZCBiZW5lZml0XG5cdFx0XHRcdHJldHVybiByZGlzcGxheXN3YXAudGVzdCggalF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKSApICYmIGVsZW0ub2Zmc2V0V2lkdGggPT09IDAgP1xuXHRcdFx0XHRcdGpRdWVyeS5zd2FwKCBlbGVtLCBjc3NTaG93LCBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRcdHJldHVybiBnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBuYW1lLCBleHRyYSApO1xuXHRcdFx0XHRcdH0pIDpcblx0XHRcdFx0XHRnZXRXaWR0aE9ySGVpZ2h0KCBlbGVtLCBuYW1lLCBleHRyYSApO1xuXHRcdFx0fVxuXHRcdH0sXG5cblx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSwgZXh0cmEgKSB7XG5cdFx0XHR2YXIgc3R5bGVzID0gZXh0cmEgJiYgZ2V0U3R5bGVzKCBlbGVtICk7XG5cdFx0XHRyZXR1cm4gc2V0UG9zaXRpdmVOdW1iZXIoIGVsZW0sIHZhbHVlLCBleHRyYSA/XG5cdFx0XHRcdGF1Z21lbnRXaWR0aE9ySGVpZ2h0KFxuXHRcdFx0XHRcdGVsZW0sXG5cdFx0XHRcdFx0bmFtZSxcblx0XHRcdFx0XHRleHRyYSxcblx0XHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBcImJveFNpemluZ1wiLCBmYWxzZSwgc3R5bGVzICkgPT09IFwiYm9yZGVyLWJveFwiLFxuXHRcdFx0XHRcdHN0eWxlc1xuXHRcdFx0XHQpIDogMFxuXHRcdFx0KTtcblx0XHR9XG5cdH07XG59KTtcblxuLy8gU3VwcG9ydDogQW5kcm9pZCAyLjNcbmpRdWVyeS5jc3NIb29rcy5tYXJnaW5SaWdodCA9IGFkZEdldEhvb2tJZiggc3VwcG9ydC5yZWxpYWJsZU1hcmdpblJpZ2h0LFxuXHRmdW5jdGlvbiggZWxlbSwgY29tcHV0ZWQgKSB7XG5cdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkuc3dhcCggZWxlbSwgeyBcImRpc3BsYXlcIjogXCJpbmxpbmUtYmxvY2tcIiB9LFxuXHRcdFx0XHRjdXJDU1MsIFsgZWxlbSwgXCJtYXJnaW5SaWdodFwiIF0gKTtcblx0XHR9XG5cdH1cbik7XG5cbi8vIFRoZXNlIGhvb2tzIGFyZSB1c2VkIGJ5IGFuaW1hdGUgdG8gZXhwYW5kIHByb3BlcnRpZXNcbmpRdWVyeS5lYWNoKHtcblx0bWFyZ2luOiBcIlwiLFxuXHRwYWRkaW5nOiBcIlwiLFxuXHRib3JkZXI6IFwiV2lkdGhcIlxufSwgZnVuY3Rpb24oIHByZWZpeCwgc3VmZml4ICkge1xuXHRqUXVlcnkuY3NzSG9va3NbIHByZWZpeCArIHN1ZmZpeCBdID0ge1xuXHRcdGV4cGFuZDogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0dmFyIGkgPSAwLFxuXHRcdFx0XHRleHBhbmRlZCA9IHt9LFxuXG5cdFx0XHRcdC8vIEFzc3VtZXMgYSBzaW5nbGUgbnVtYmVyIGlmIG5vdCBhIHN0cmluZ1xuXHRcdFx0XHRwYXJ0cyA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiA/IHZhbHVlLnNwbGl0KFwiIFwiKSA6IFsgdmFsdWUgXTtcblxuXHRcdFx0Zm9yICggOyBpIDwgNDsgaSsrICkge1xuXHRcdFx0XHRleHBhbmRlZFsgcHJlZml4ICsgY3NzRXhwYW5kWyBpIF0gKyBzdWZmaXggXSA9XG5cdFx0XHRcdFx0cGFydHNbIGkgXSB8fCBwYXJ0c1sgaSAtIDIgXSB8fCBwYXJ0c1sgMCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gZXhwYW5kZWQ7XG5cdFx0fVxuXHR9O1xuXG5cdGlmICggIXJtYXJnaW4udGVzdCggcHJlZml4ICkgKSB7XG5cdFx0alF1ZXJ5LmNzc0hvb2tzWyBwcmVmaXggKyBzdWZmaXggXS5zZXQgPSBzZXRQb3NpdGl2ZU51bWJlcjtcblx0fVxufSk7XG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHRjc3M6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgbmFtZSwgdmFsdWUgKSB7XG5cdFx0XHR2YXIgc3R5bGVzLCBsZW4sXG5cdFx0XHRcdG1hcCA9IHt9LFxuXHRcdFx0XHRpID0gMDtcblxuXHRcdFx0aWYgKCBqUXVlcnkuaXNBcnJheSggbmFtZSApICkge1xuXHRcdFx0XHRzdHlsZXMgPSBnZXRTdHlsZXMoIGVsZW0gKTtcblx0XHRcdFx0bGVuID0gbmFtZS5sZW5ndGg7XG5cblx0XHRcdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdFx0bWFwWyBuYW1lWyBpIF0gXSA9IGpRdWVyeS5jc3MoIGVsZW0sIG5hbWVbIGkgXSwgZmFsc2UsIHN0eWxlcyApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmV0dXJuIG1hcDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHZhbHVlICE9PSB1bmRlZmluZWQgP1xuXHRcdFx0XHRqUXVlcnkuc3R5bGUoIGVsZW0sIG5hbWUsIHZhbHVlICkgOlxuXHRcdFx0XHRqUXVlcnkuY3NzKCBlbGVtLCBuYW1lICk7XG5cdFx0fSwgbmFtZSwgdmFsdWUsIGFyZ3VtZW50cy5sZW5ndGggPiAxICk7XG5cdH0sXG5cdHNob3c6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiBzaG93SGlkZSggdGhpcywgdHJ1ZSApO1xuXHR9LFxuXHRoaWRlOiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gc2hvd0hpZGUoIHRoaXMgKTtcblx0fSxcblx0dG9nZ2xlOiBmdW5jdGlvbiggc3RhdGUgKSB7XG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGUgPT09IFwiYm9vbGVhblwiICkge1xuXHRcdFx0cmV0dXJuIHN0YXRlID8gdGhpcy5zaG93KCkgOiB0aGlzLmhpZGUoKTtcblx0XHR9XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xuXHRcdFx0aWYgKCBpc0hpZGRlbiggdGhpcyApICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5zaG93KCk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS5oaWRlKCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5cbmZ1bmN0aW9uIFR3ZWVuKCBlbGVtLCBvcHRpb25zLCBwcm9wLCBlbmQsIGVhc2luZyApIHtcblx0cmV0dXJuIG5ldyBUd2Vlbi5wcm90b3R5cGUuaW5pdCggZWxlbSwgb3B0aW9ucywgcHJvcCwgZW5kLCBlYXNpbmcgKTtcbn1cbmpRdWVyeS5Ud2VlbiA9IFR3ZWVuO1xuXG5Ud2Vlbi5wcm90b3R5cGUgPSB7XG5cdGNvbnN0cnVjdG9yOiBUd2Vlbixcblx0aW5pdDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIHByb3AsIGVuZCwgZWFzaW5nLCB1bml0ICkge1xuXHRcdHRoaXMuZWxlbSA9IGVsZW07XG5cdFx0dGhpcy5wcm9wID0gcHJvcDtcblx0XHR0aGlzLmVhc2luZyA9IGVhc2luZyB8fCBcInN3aW5nXCI7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucztcblx0XHR0aGlzLnN0YXJ0ID0gdGhpcy5ub3cgPSB0aGlzLmN1cigpO1xuXHRcdHRoaXMuZW5kID0gZW5kO1xuXHRcdHRoaXMudW5pdCA9IHVuaXQgfHwgKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gPyBcIlwiIDogXCJweFwiICk7XG5cdH0sXG5cdGN1cjogZnVuY3Rpb24oKSB7XG5cdFx0dmFyIGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzWyB0aGlzLnByb3AgXTtcblxuXHRcdHJldHVybiBob29rcyAmJiBob29rcy5nZXQgP1xuXHRcdFx0aG9va3MuZ2V0KCB0aGlzICkgOlxuXHRcdFx0VHdlZW4ucHJvcEhvb2tzLl9kZWZhdWx0LmdldCggdGhpcyApO1xuXHR9LFxuXHRydW46IGZ1bmN0aW9uKCBwZXJjZW50ICkge1xuXHRcdHZhciBlYXNlZCxcblx0XHRcdGhvb2tzID0gVHdlZW4ucHJvcEhvb2tzWyB0aGlzLnByb3AgXTtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLmR1cmF0aW9uICkge1xuXHRcdFx0dGhpcy5wb3MgPSBlYXNlZCA9IGpRdWVyeS5lYXNpbmdbIHRoaXMuZWFzaW5nIF0oXG5cdFx0XHRcdHBlcmNlbnQsIHRoaXMub3B0aW9ucy5kdXJhdGlvbiAqIHBlcmNlbnQsIDAsIDEsIHRoaXMub3B0aW9ucy5kdXJhdGlvblxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0dGhpcy5wb3MgPSBlYXNlZCA9IHBlcmNlbnQ7XG5cdFx0fVxuXHRcdHRoaXMubm93ID0gKCB0aGlzLmVuZCAtIHRoaXMuc3RhcnQgKSAqIGVhc2VkICsgdGhpcy5zdGFydDtcblxuXHRcdGlmICggdGhpcy5vcHRpb25zLnN0ZXAgKSB7XG5cdFx0XHR0aGlzLm9wdGlvbnMuc3RlcC5jYWxsKCB0aGlzLmVsZW0sIHRoaXMubm93LCB0aGlzICk7XG5cdFx0fVxuXG5cdFx0aWYgKCBob29rcyAmJiBob29rcy5zZXQgKSB7XG5cdFx0XHRob29rcy5zZXQoIHRoaXMgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0VHdlZW4ucHJvcEhvb2tzLl9kZWZhdWx0LnNldCggdGhpcyApO1xuXHRcdH1cblx0XHRyZXR1cm4gdGhpcztcblx0fVxufTtcblxuVHdlZW4ucHJvdG90eXBlLmluaXQucHJvdG90eXBlID0gVHdlZW4ucHJvdG90eXBlO1xuXG5Ud2Vlbi5wcm9wSG9va3MgPSB7XG5cdF9kZWZhdWx0OiB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggdHdlZW4gKSB7XG5cdFx0XHR2YXIgcmVzdWx0O1xuXG5cdFx0XHRpZiAoIHR3ZWVuLmVsZW1bIHR3ZWVuLnByb3AgXSAhPSBudWxsICYmXG5cdFx0XHRcdCghdHdlZW4uZWxlbS5zdHlsZSB8fCB0d2Vlbi5lbGVtLnN0eWxlWyB0d2Vlbi5wcm9wIF0gPT0gbnVsbCkgKSB7XG5cdFx0XHRcdHJldHVybiB0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF07XG5cdFx0XHR9XG5cblx0XHRcdC8vIFBhc3NpbmcgYW4gZW1wdHkgc3RyaW5nIGFzIGEgM3JkIHBhcmFtZXRlciB0byAuY3NzIHdpbGwgYXV0b21hdGljYWxseVxuXHRcdFx0Ly8gYXR0ZW1wdCBhIHBhcnNlRmxvYXQgYW5kIGZhbGxiYWNrIHRvIGEgc3RyaW5nIGlmIHRoZSBwYXJzZSBmYWlscy5cblx0XHRcdC8vIFNpbXBsZSB2YWx1ZXMgc3VjaCBhcyBcIjEwcHhcIiBhcmUgcGFyc2VkIHRvIEZsb2F0O1xuXHRcdFx0Ly8gY29tcGxleCB2YWx1ZXMgc3VjaCBhcyBcInJvdGF0ZSgxcmFkKVwiIGFyZSByZXR1cm5lZCBhcy1pcy5cblx0XHRcdHJlc3VsdCA9IGpRdWVyeS5jc3MoIHR3ZWVuLmVsZW0sIHR3ZWVuLnByb3AsIFwiXCIgKTtcblx0XHRcdC8vIEVtcHR5IHN0cmluZ3MsIG51bGwsIHVuZGVmaW5lZCBhbmQgXCJhdXRvXCIgYXJlIGNvbnZlcnRlZCB0byAwLlxuXHRcdFx0cmV0dXJuICFyZXN1bHQgfHwgcmVzdWx0ID09PSBcImF1dG9cIiA/IDAgOiByZXN1bHQ7XG5cdFx0fSxcblx0XHRzZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcblx0XHRcdC8vIFVzZSBzdGVwIGhvb2sgZm9yIGJhY2sgY29tcGF0LlxuXHRcdFx0Ly8gVXNlIGNzc0hvb2sgaWYgaXRzIHRoZXJlLlxuXHRcdFx0Ly8gVXNlIC5zdHlsZSBpZiBhdmFpbGFibGUgYW5kIHVzZSBwbGFpbiBwcm9wZXJ0aWVzIHdoZXJlIGF2YWlsYWJsZS5cblx0XHRcdGlmICggalF1ZXJ5LmZ4LnN0ZXBbIHR3ZWVuLnByb3AgXSApIHtcblx0XHRcdFx0alF1ZXJ5LmZ4LnN0ZXBbIHR3ZWVuLnByb3AgXSggdHdlZW4gKTtcblx0XHRcdH0gZWxzZSBpZiAoIHR3ZWVuLmVsZW0uc3R5bGUgJiYgKCB0d2Vlbi5lbGVtLnN0eWxlWyBqUXVlcnkuY3NzUHJvcHNbIHR3ZWVuLnByb3AgXSBdICE9IG51bGwgfHwgalF1ZXJ5LmNzc0hvb2tzWyB0d2Vlbi5wcm9wIF0gKSApIHtcblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCB0d2Vlbi5lbGVtLCB0d2Vlbi5wcm9wLCB0d2Vlbi5ub3cgKyB0d2Vlbi51bml0ICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHR0d2Vlbi5lbGVtWyB0d2Vlbi5wcm9wIF0gPSB0d2Vlbi5ub3c7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59O1xuXG4vLyBTdXBwb3J0OiBJRTlcbi8vIFBhbmljIGJhc2VkIGFwcHJvYWNoIHRvIHNldHRpbmcgdGhpbmdzIG9uIGRpc2Nvbm5lY3RlZCBub2Rlc1xuVHdlZW4ucHJvcEhvb2tzLnNjcm9sbFRvcCA9IFR3ZWVuLnByb3BIb29rcy5zY3JvbGxMZWZ0ID0ge1xuXHRzZXQ6IGZ1bmN0aW9uKCB0d2VlbiApIHtcblx0XHRpZiAoIHR3ZWVuLmVsZW0ubm9kZVR5cGUgJiYgdHdlZW4uZWxlbS5wYXJlbnROb2RlICkge1xuXHRcdFx0dHdlZW4uZWxlbVsgdHdlZW4ucHJvcCBdID0gdHdlZW4ubm93O1xuXHRcdH1cblx0fVxufTtcblxualF1ZXJ5LmVhc2luZyA9IHtcblx0bGluZWFyOiBmdW5jdGlvbiggcCApIHtcblx0XHRyZXR1cm4gcDtcblx0fSxcblx0c3dpbmc6IGZ1bmN0aW9uKCBwICkge1xuXHRcdHJldHVybiAwLjUgLSBNYXRoLmNvcyggcCAqIE1hdGguUEkgKSAvIDI7XG5cdH1cbn07XG5cbmpRdWVyeS5meCA9IFR3ZWVuLnByb3RvdHlwZS5pbml0O1xuXG4vLyBCYWNrIENvbXBhdCA8MS44IGV4dGVuc2lvbiBwb2ludFxualF1ZXJ5LmZ4LnN0ZXAgPSB7fTtcblxuXG5cblxudmFyXG5cdGZ4Tm93LCB0aW1lcklkLFxuXHRyZnh0eXBlcyA9IC9eKD86dG9nZ2xlfHNob3d8aGlkZSkkLyxcblx0cmZ4bnVtID0gbmV3IFJlZ0V4cCggXCJeKD86KFsrLV0pPXwpKFwiICsgcG51bSArIFwiKShbYS16JV0qKSRcIiwgXCJpXCIgKSxcblx0cnJ1biA9IC9xdWV1ZUhvb2tzJC8sXG5cdGFuaW1hdGlvblByZWZpbHRlcnMgPSBbIGRlZmF1bHRQcmVmaWx0ZXIgXSxcblx0dHdlZW5lcnMgPSB7XG5cdFx0XCIqXCI6IFsgZnVuY3Rpb24oIHByb3AsIHZhbHVlICkge1xuXHRcdFx0dmFyIHR3ZWVuID0gdGhpcy5jcmVhdGVUd2VlbiggcHJvcCwgdmFsdWUgKSxcblx0XHRcdFx0dGFyZ2V0ID0gdHdlZW4uY3VyKCksXG5cdFx0XHRcdHBhcnRzID0gcmZ4bnVtLmV4ZWMoIHZhbHVlICksXG5cdFx0XHRcdHVuaXQgPSBwYXJ0cyAmJiBwYXJ0c1sgMyBdIHx8ICggalF1ZXJ5LmNzc051bWJlclsgcHJvcCBdID8gXCJcIiA6IFwicHhcIiApLFxuXG5cdFx0XHRcdC8vIFN0YXJ0aW5nIHZhbHVlIGNvbXB1dGF0aW9uIGlzIHJlcXVpcmVkIGZvciBwb3RlbnRpYWwgdW5pdCBtaXNtYXRjaGVzXG5cdFx0XHRcdHN0YXJ0ID0gKCBqUXVlcnkuY3NzTnVtYmVyWyBwcm9wIF0gfHwgdW5pdCAhPT0gXCJweFwiICYmICt0YXJnZXQgKSAmJlxuXHRcdFx0XHRcdHJmeG51bS5leGVjKCBqUXVlcnkuY3NzKCB0d2Vlbi5lbGVtLCBwcm9wICkgKSxcblx0XHRcdFx0c2NhbGUgPSAxLFxuXHRcdFx0XHRtYXhJdGVyYXRpb25zID0gMjA7XG5cblx0XHRcdGlmICggc3RhcnQgJiYgc3RhcnRbIDMgXSAhPT0gdW5pdCApIHtcblx0XHRcdFx0Ly8gVHJ1c3QgdW5pdHMgcmVwb3J0ZWQgYnkgalF1ZXJ5LmNzc1xuXHRcdFx0XHR1bml0ID0gdW5pdCB8fCBzdGFydFsgMyBdO1xuXG5cdFx0XHRcdC8vIE1ha2Ugc3VyZSB3ZSB1cGRhdGUgdGhlIHR3ZWVuIHByb3BlcnRpZXMgbGF0ZXIgb25cblx0XHRcdFx0cGFydHMgPSBwYXJ0cyB8fCBbXTtcblxuXHRcdFx0XHQvLyBJdGVyYXRpdmVseSBhcHByb3hpbWF0ZSBmcm9tIGEgbm9uemVybyBzdGFydGluZyBwb2ludFxuXHRcdFx0XHRzdGFydCA9ICt0YXJnZXQgfHwgMTtcblxuXHRcdFx0XHRkbyB7XG5cdFx0XHRcdFx0Ly8gSWYgcHJldmlvdXMgaXRlcmF0aW9uIHplcm9lZCBvdXQsIGRvdWJsZSB1bnRpbCB3ZSBnZXQgKnNvbWV0aGluZyouXG5cdFx0XHRcdFx0Ly8gVXNlIHN0cmluZyBmb3IgZG91Ymxpbmcgc28gd2UgZG9uJ3QgYWNjaWRlbnRhbGx5IHNlZSBzY2FsZSBhcyB1bmNoYW5nZWQgYmVsb3dcblx0XHRcdFx0XHRzY2FsZSA9IHNjYWxlIHx8IFwiLjVcIjtcblxuXHRcdFx0XHRcdC8vIEFkanVzdCBhbmQgYXBwbHlcblx0XHRcdFx0XHRzdGFydCA9IHN0YXJ0IC8gc2NhbGU7XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCB0d2Vlbi5lbGVtLCBwcm9wLCBzdGFydCArIHVuaXQgKTtcblxuXHRcdFx0XHQvLyBVcGRhdGUgc2NhbGUsIHRvbGVyYXRpbmcgemVybyBvciBOYU4gZnJvbSB0d2Vlbi5jdXIoKSxcblx0XHRcdFx0Ly8gYnJlYWsgdGhlIGxvb3AgaWYgc2NhbGUgaXMgdW5jaGFuZ2VkIG9yIHBlcmZlY3QsIG9yIGlmIHdlJ3ZlIGp1c3QgaGFkIGVub3VnaFxuXHRcdFx0XHR9IHdoaWxlICggc2NhbGUgIT09IChzY2FsZSA9IHR3ZWVuLmN1cigpIC8gdGFyZ2V0KSAmJiBzY2FsZSAhPT0gMSAmJiAtLW1heEl0ZXJhdGlvbnMgKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gVXBkYXRlIHR3ZWVuIHByb3BlcnRpZXNcblx0XHRcdGlmICggcGFydHMgKSB7XG5cdFx0XHRcdHN0YXJ0ID0gdHdlZW4uc3RhcnQgPSArc3RhcnQgfHwgK3RhcmdldCB8fCAwO1xuXHRcdFx0XHR0d2Vlbi51bml0ID0gdW5pdDtcblx0XHRcdFx0Ly8gSWYgYSArPS8tPSB0b2tlbiB3YXMgcHJvdmlkZWQsIHdlJ3JlIGRvaW5nIGEgcmVsYXRpdmUgYW5pbWF0aW9uXG5cdFx0XHRcdHR3ZWVuLmVuZCA9IHBhcnRzWyAxIF0gP1xuXHRcdFx0XHRcdHN0YXJ0ICsgKCBwYXJ0c1sgMSBdICsgMSApICogcGFydHNbIDIgXSA6XG5cdFx0XHRcdFx0K3BhcnRzWyAyIF07XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiB0d2Vlbjtcblx0XHR9IF1cblx0fTtcblxuLy8gQW5pbWF0aW9ucyBjcmVhdGVkIHN5bmNocm9ub3VzbHkgd2lsbCBydW4gc3luY2hyb25vdXNseVxuZnVuY3Rpb24gY3JlYXRlRnhOb3coKSB7XG5cdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0ZnhOb3cgPSB1bmRlZmluZWQ7XG5cdH0pO1xuXHRyZXR1cm4gKCBmeE5vdyA9IGpRdWVyeS5ub3coKSApO1xufVxuXG4vLyBHZW5lcmF0ZSBwYXJhbWV0ZXJzIHRvIGNyZWF0ZSBhIHN0YW5kYXJkIGFuaW1hdGlvblxuZnVuY3Rpb24gZ2VuRngoIHR5cGUsIGluY2x1ZGVXaWR0aCApIHtcblx0dmFyIHdoaWNoLFxuXHRcdGkgPSAwLFxuXHRcdGF0dHJzID0geyBoZWlnaHQ6IHR5cGUgfTtcblxuXHQvLyBJZiB3ZSBpbmNsdWRlIHdpZHRoLCBzdGVwIHZhbHVlIGlzIDEgdG8gZG8gYWxsIGNzc0V4cGFuZCB2YWx1ZXMsXG5cdC8vIG90aGVyd2lzZSBzdGVwIHZhbHVlIGlzIDIgdG8gc2tpcCBvdmVyIExlZnQgYW5kIFJpZ2h0XG5cdGluY2x1ZGVXaWR0aCA9IGluY2x1ZGVXaWR0aCA/IDEgOiAwO1xuXHRmb3IgKCA7IGkgPCA0IDsgaSArPSAyIC0gaW5jbHVkZVdpZHRoICkge1xuXHRcdHdoaWNoID0gY3NzRXhwYW5kWyBpIF07XG5cdFx0YXR0cnNbIFwibWFyZ2luXCIgKyB3aGljaCBdID0gYXR0cnNbIFwicGFkZGluZ1wiICsgd2hpY2ggXSA9IHR5cGU7XG5cdH1cblxuXHRpZiAoIGluY2x1ZGVXaWR0aCApIHtcblx0XHRhdHRycy5vcGFjaXR5ID0gYXR0cnMud2lkdGggPSB0eXBlO1xuXHR9XG5cblx0cmV0dXJuIGF0dHJzO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVUd2VlbiggdmFsdWUsIHByb3AsIGFuaW1hdGlvbiApIHtcblx0dmFyIHR3ZWVuLFxuXHRcdGNvbGxlY3Rpb24gPSAoIHR3ZWVuZXJzWyBwcm9wIF0gfHwgW10gKS5jb25jYXQoIHR3ZWVuZXJzWyBcIipcIiBdICksXG5cdFx0aW5kZXggPSAwLFxuXHRcdGxlbmd0aCA9IGNvbGxlY3Rpb24ubGVuZ3RoO1xuXHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoOyBpbmRleCsrICkge1xuXHRcdGlmICggKHR3ZWVuID0gY29sbGVjdGlvblsgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIHByb3AsIHZhbHVlICkpICkge1xuXG5cdFx0XHQvLyBXZSdyZSBkb25lIHdpdGggdGhpcyBwcm9wZXJ0eVxuXHRcdFx0cmV0dXJuIHR3ZWVuO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBkZWZhdWx0UHJlZmlsdGVyKCBlbGVtLCBwcm9wcywgb3B0cyApIHtcblx0LyoganNoaW50IHZhbGlkdGhpczogdHJ1ZSAqL1xuXHR2YXIgcHJvcCwgdmFsdWUsIHRvZ2dsZSwgdHdlZW4sIGhvb2tzLCBvbGRmaXJlLCBkaXNwbGF5LCBjaGVja0Rpc3BsYXksXG5cdFx0YW5pbSA9IHRoaXMsXG5cdFx0b3JpZyA9IHt9LFxuXHRcdHN0eWxlID0gZWxlbS5zdHlsZSxcblx0XHRoaWRkZW4gPSBlbGVtLm5vZGVUeXBlICYmIGlzSGlkZGVuKCBlbGVtICksXG5cdFx0ZGF0YVNob3cgPSBkYXRhX3ByaXYuZ2V0KCBlbGVtLCBcImZ4c2hvd1wiICk7XG5cblx0Ly8gSGFuZGxlIHF1ZXVlOiBmYWxzZSBwcm9taXNlc1xuXHRpZiAoICFvcHRzLnF1ZXVlICkge1xuXHRcdGhvb2tzID0galF1ZXJ5Ll9xdWV1ZUhvb2tzKCBlbGVtLCBcImZ4XCIgKTtcblx0XHRpZiAoIGhvb2tzLnVucXVldWVkID09IG51bGwgKSB7XG5cdFx0XHRob29rcy51bnF1ZXVlZCA9IDA7XG5cdFx0XHRvbGRmaXJlID0gaG9va3MuZW1wdHkuZmlyZTtcblx0XHRcdGhvb2tzLmVtcHR5LmZpcmUgPSBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCAhaG9va3MudW5xdWV1ZWQgKSB7XG5cdFx0XHRcdFx0b2xkZmlyZSgpO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdH1cblx0XHRob29rcy51bnF1ZXVlZCsrO1xuXG5cdFx0YW5pbS5hbHdheXMoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBFbnN1cmUgdGhlIGNvbXBsZXRlIGhhbmRsZXIgaXMgY2FsbGVkIGJlZm9yZSB0aGlzIGNvbXBsZXRlc1xuXHRcdFx0YW5pbS5hbHdheXMoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdGhvb2tzLnVucXVldWVkLS07XG5cdFx0XHRcdGlmICggIWpRdWVyeS5xdWV1ZSggZWxlbSwgXCJmeFwiICkubGVuZ3RoICkge1xuXHRcdFx0XHRcdGhvb2tzLmVtcHR5LmZpcmUoKTtcblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBIZWlnaHQvd2lkdGggb3ZlcmZsb3cgcGFzc1xuXHRpZiAoIGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKCBcImhlaWdodFwiIGluIHByb3BzIHx8IFwid2lkdGhcIiBpbiBwcm9wcyApICkge1xuXHRcdC8vIE1ha2Ugc3VyZSB0aGF0IG5vdGhpbmcgc25lYWtzIG91dFxuXHRcdC8vIFJlY29yZCBhbGwgMyBvdmVyZmxvdyBhdHRyaWJ1dGVzIGJlY2F1c2UgSUU5LTEwIGRvIG5vdFxuXHRcdC8vIGNoYW5nZSB0aGUgb3ZlcmZsb3cgYXR0cmlidXRlIHdoZW4gb3ZlcmZsb3dYIGFuZFxuXHRcdC8vIG92ZXJmbG93WSBhcmUgc2V0IHRvIHRoZSBzYW1lIHZhbHVlXG5cdFx0b3B0cy5vdmVyZmxvdyA9IFsgc3R5bGUub3ZlcmZsb3csIHN0eWxlLm92ZXJmbG93WCwgc3R5bGUub3ZlcmZsb3dZIF07XG5cblx0XHQvLyBTZXQgZGlzcGxheSBwcm9wZXJ0eSB0byBpbmxpbmUtYmxvY2sgZm9yIGhlaWdodC93aWR0aFxuXHRcdC8vIGFuaW1hdGlvbnMgb24gaW5saW5lIGVsZW1lbnRzIHRoYXQgYXJlIGhhdmluZyB3aWR0aC9oZWlnaHQgYW5pbWF0ZWRcblx0XHRkaXNwbGF5ID0galF1ZXJ5LmNzcyggZWxlbSwgXCJkaXNwbGF5XCIgKTtcblxuXHRcdC8vIFRlc3QgZGVmYXVsdCBkaXNwbGF5IGlmIGRpc3BsYXkgaXMgY3VycmVudGx5IFwibm9uZVwiXG5cdFx0Y2hlY2tEaXNwbGF5ID0gZGlzcGxheSA9PT0gXCJub25lXCIgP1xuXHRcdFx0ZGF0YV9wcml2LmdldCggZWxlbSwgXCJvbGRkaXNwbGF5XCIgKSB8fCBkZWZhdWx0RGlzcGxheSggZWxlbS5ub2RlTmFtZSApIDogZGlzcGxheTtcblxuXHRcdGlmICggY2hlY2tEaXNwbGF5ID09PSBcImlubGluZVwiICYmIGpRdWVyeS5jc3MoIGVsZW0sIFwiZmxvYXRcIiApID09PSBcIm5vbmVcIiApIHtcblx0XHRcdHN0eWxlLmRpc3BsYXkgPSBcImlubGluZS1ibG9ja1wiO1xuXHRcdH1cblx0fVxuXG5cdGlmICggb3B0cy5vdmVyZmxvdyApIHtcblx0XHRzdHlsZS5vdmVyZmxvdyA9IFwiaGlkZGVuXCI7XG5cdFx0YW5pbS5hbHdheXMoZnVuY3Rpb24oKSB7XG5cdFx0XHRzdHlsZS5vdmVyZmxvdyA9IG9wdHMub3ZlcmZsb3dbIDAgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WCA9IG9wdHMub3ZlcmZsb3dbIDEgXTtcblx0XHRcdHN0eWxlLm92ZXJmbG93WSA9IG9wdHMub3ZlcmZsb3dbIDIgXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIHNob3cvaGlkZSBwYXNzXG5cdGZvciAoIHByb3AgaW4gcHJvcHMgKSB7XG5cdFx0dmFsdWUgPSBwcm9wc1sgcHJvcCBdO1xuXHRcdGlmICggcmZ4dHlwZXMuZXhlYyggdmFsdWUgKSApIHtcblx0XHRcdGRlbGV0ZSBwcm9wc1sgcHJvcCBdO1xuXHRcdFx0dG9nZ2xlID0gdG9nZ2xlIHx8IHZhbHVlID09PSBcInRvZ2dsZVwiO1xuXHRcdFx0aWYgKCB2YWx1ZSA9PT0gKCBoaWRkZW4gPyBcImhpZGVcIiA6IFwic2hvd1wiICkgKSB7XG5cblx0XHRcdFx0Ly8gSWYgdGhlcmUgaXMgZGF0YVNob3cgbGVmdCBvdmVyIGZyb20gYSBzdG9wcGVkIGhpZGUgb3Igc2hvdyBhbmQgd2UgYXJlIGdvaW5nIHRvIHByb2NlZWQgd2l0aCBzaG93LCB3ZSBzaG91bGQgcHJldGVuZCB0byBiZSBoaWRkZW5cblx0XHRcdFx0aWYgKCB2YWx1ZSA9PT0gXCJzaG93XCIgJiYgZGF0YVNob3cgJiYgZGF0YVNob3dbIHByb3AgXSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdGhpZGRlbiA9IHRydWU7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdG9yaWdbIHByb3AgXSA9IGRhdGFTaG93ICYmIGRhdGFTaG93WyBwcm9wIF0gfHwgalF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wICk7XG5cblx0XHQvLyBBbnkgbm9uLWZ4IHZhbHVlIHN0b3BzIHVzIGZyb20gcmVzdG9yaW5nIHRoZSBvcmlnaW5hbCBkaXNwbGF5IHZhbHVlXG5cdFx0fSBlbHNlIHtcblx0XHRcdGRpc3BsYXkgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAhalF1ZXJ5LmlzRW1wdHlPYmplY3QoIG9yaWcgKSApIHtcblx0XHRpZiAoIGRhdGFTaG93ICkge1xuXHRcdFx0aWYgKCBcImhpZGRlblwiIGluIGRhdGFTaG93ICkge1xuXHRcdFx0XHRoaWRkZW4gPSBkYXRhU2hvdy5oaWRkZW47XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGRhdGFTaG93ID0gZGF0YV9wcml2LmFjY2VzcyggZWxlbSwgXCJmeHNob3dcIiwge30gKTtcblx0XHR9XG5cblx0XHQvLyBTdG9yZSBzdGF0ZSBpZiBpdHMgdG9nZ2xlIC0gZW5hYmxlcyAuc3RvcCgpLnRvZ2dsZSgpIHRvIFwicmV2ZXJzZVwiXG5cdFx0aWYgKCB0b2dnbGUgKSB7XG5cdFx0XHRkYXRhU2hvdy5oaWRkZW4gPSAhaGlkZGVuO1xuXHRcdH1cblx0XHRpZiAoIGhpZGRlbiApIHtcblx0XHRcdGpRdWVyeSggZWxlbSApLnNob3coKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YW5pbS5kb25lKGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRqUXVlcnkoIGVsZW0gKS5oaWRlKCk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0YW5pbS5kb25lKGZ1bmN0aW9uKCkge1xuXHRcdFx0dmFyIHByb3A7XG5cblx0XHRcdGRhdGFfcHJpdi5yZW1vdmUoIGVsZW0sIFwiZnhzaG93XCIgKTtcblx0XHRcdGZvciAoIHByb3AgaW4gb3JpZyApIHtcblx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCBwcm9wLCBvcmlnWyBwcm9wIF0gKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHRmb3IgKCBwcm9wIGluIG9yaWcgKSB7XG5cdFx0XHR0d2VlbiA9IGNyZWF0ZVR3ZWVuKCBoaWRkZW4gPyBkYXRhU2hvd1sgcHJvcCBdIDogMCwgcHJvcCwgYW5pbSApO1xuXG5cdFx0XHRpZiAoICEoIHByb3AgaW4gZGF0YVNob3cgKSApIHtcblx0XHRcdFx0ZGF0YVNob3dbIHByb3AgXSA9IHR3ZWVuLnN0YXJ0O1xuXHRcdFx0XHRpZiAoIGhpZGRlbiApIHtcblx0XHRcdFx0XHR0d2Vlbi5lbmQgPSB0d2Vlbi5zdGFydDtcblx0XHRcdFx0XHR0d2Vlbi5zdGFydCA9IHByb3AgPT09IFwid2lkdGhcIiB8fCBwcm9wID09PSBcImhlaWdodFwiID8gMSA6IDA7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0Ly8gSWYgdGhpcyBpcyBhIG5vb3AgbGlrZSAuaGlkZSgpLmhpZGUoKSwgcmVzdG9yZSBhbiBvdmVyd3JpdHRlbiBkaXNwbGF5IHZhbHVlXG5cdH0gZWxzZSBpZiAoIChkaXNwbGF5ID09PSBcIm5vbmVcIiA/IGRlZmF1bHREaXNwbGF5KCBlbGVtLm5vZGVOYW1lICkgOiBkaXNwbGF5KSA9PT0gXCJpbmxpbmVcIiApIHtcblx0XHRzdHlsZS5kaXNwbGF5ID0gZGlzcGxheTtcblx0fVxufVxuXG5mdW5jdGlvbiBwcm9wRmlsdGVyKCBwcm9wcywgc3BlY2lhbEVhc2luZyApIHtcblx0dmFyIGluZGV4LCBuYW1lLCBlYXNpbmcsIHZhbHVlLCBob29rcztcblxuXHQvLyBjYW1lbENhc2UsIHNwZWNpYWxFYXNpbmcgYW5kIGV4cGFuZCBjc3NIb29rIHBhc3Ncblx0Zm9yICggaW5kZXggaW4gcHJvcHMgKSB7XG5cdFx0bmFtZSA9IGpRdWVyeS5jYW1lbENhc2UoIGluZGV4ICk7XG5cdFx0ZWFzaW5nID0gc3BlY2lhbEVhc2luZ1sgbmFtZSBdO1xuXHRcdHZhbHVlID0gcHJvcHNbIGluZGV4IF07XG5cdFx0aWYgKCBqUXVlcnkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdGVhc2luZyA9IHZhbHVlWyAxIF07XG5cdFx0XHR2YWx1ZSA9IHByb3BzWyBpbmRleCBdID0gdmFsdWVbIDAgXTtcblx0XHR9XG5cblx0XHRpZiAoIGluZGV4ICE9PSBuYW1lICkge1xuXHRcdFx0cHJvcHNbIG5hbWUgXSA9IHZhbHVlO1xuXHRcdFx0ZGVsZXRlIHByb3BzWyBpbmRleCBdO1xuXHRcdH1cblxuXHRcdGhvb2tzID0galF1ZXJ5LmNzc0hvb2tzWyBuYW1lIF07XG5cdFx0aWYgKCBob29rcyAmJiBcImV4cGFuZFwiIGluIGhvb2tzICkge1xuXHRcdFx0dmFsdWUgPSBob29rcy5leHBhbmQoIHZhbHVlICk7XG5cdFx0XHRkZWxldGUgcHJvcHNbIG5hbWUgXTtcblxuXHRcdFx0Ly8gTm90IHF1aXRlICQuZXh0ZW5kLCB0aGlzIHdvbid0IG92ZXJ3cml0ZSBleGlzdGluZyBrZXlzLlxuXHRcdFx0Ly8gUmV1c2luZyAnaW5kZXgnIGJlY2F1c2Ugd2UgaGF2ZSB0aGUgY29ycmVjdCBcIm5hbWVcIlxuXHRcdFx0Zm9yICggaW5kZXggaW4gdmFsdWUgKSB7XG5cdFx0XHRcdGlmICggISggaW5kZXggaW4gcHJvcHMgKSApIHtcblx0XHRcdFx0XHRwcm9wc1sgaW5kZXggXSA9IHZhbHVlWyBpbmRleCBdO1xuXHRcdFx0XHRcdHNwZWNpYWxFYXNpbmdbIGluZGV4IF0gPSBlYXNpbmc7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9IGVsc2Uge1xuXHRcdFx0c3BlY2lhbEVhc2luZ1sgbmFtZSBdID0gZWFzaW5nO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBBbmltYXRpb24oIGVsZW0sIHByb3BlcnRpZXMsIG9wdGlvbnMgKSB7XG5cdHZhciByZXN1bHQsXG5cdFx0c3RvcHBlZCxcblx0XHRpbmRleCA9IDAsXG5cdFx0bGVuZ3RoID0gYW5pbWF0aW9uUHJlZmlsdGVycy5sZW5ndGgsXG5cdFx0ZGVmZXJyZWQgPSBqUXVlcnkuRGVmZXJyZWQoKS5hbHdheXMoIGZ1bmN0aW9uKCkge1xuXHRcdFx0Ly8gRG9uJ3QgbWF0Y2ggZWxlbSBpbiB0aGUgOmFuaW1hdGVkIHNlbGVjdG9yXG5cdFx0XHRkZWxldGUgdGljay5lbGVtO1xuXHRcdH0pLFxuXHRcdHRpY2sgPSBmdW5jdGlvbigpIHtcblx0XHRcdGlmICggc3RvcHBlZCApIHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdFx0dmFyIGN1cnJlbnRUaW1lID0gZnhOb3cgfHwgY3JlYXRlRnhOb3coKSxcblx0XHRcdFx0cmVtYWluaW5nID0gTWF0aC5tYXgoIDAsIGFuaW1hdGlvbi5zdGFydFRpbWUgKyBhbmltYXRpb24uZHVyYXRpb24gLSBjdXJyZW50VGltZSApLFxuXHRcdFx0XHQvLyBTdXBwb3J0OiBBbmRyb2lkIDIuM1xuXHRcdFx0XHQvLyBBcmNoYWljIGNyYXNoIGJ1ZyB3b24ndCBhbGxvdyB1cyB0byB1c2UgYDEgLSAoIDAuNSB8fCAwIClgICgjMTI0OTcpXG5cdFx0XHRcdHRlbXAgPSByZW1haW5pbmcgLyBhbmltYXRpb24uZHVyYXRpb24gfHwgMCxcblx0XHRcdFx0cGVyY2VudCA9IDEgLSB0ZW1wLFxuXHRcdFx0XHRpbmRleCA9IDAsXG5cdFx0XHRcdGxlbmd0aCA9IGFuaW1hdGlvbi50d2VlbnMubGVuZ3RoO1xuXG5cdFx0XHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoIDsgaW5kZXgrKyApIHtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVuc1sgaW5kZXggXS5ydW4oIHBlcmNlbnQgKTtcblx0XHRcdH1cblxuXHRcdFx0ZGVmZXJyZWQubm90aWZ5V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIHBlcmNlbnQsIHJlbWFpbmluZyBdKTtcblxuXHRcdFx0aWYgKCBwZXJjZW50IDwgMSAmJiBsZW5ndGggKSB7XG5cdFx0XHRcdHJldHVybiByZW1haW5pbmc7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWZlcnJlZC5yZXNvbHZlV2l0aCggZWxlbSwgWyBhbmltYXRpb24gXSApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9XG5cdFx0fSxcblx0XHRhbmltYXRpb24gPSBkZWZlcnJlZC5wcm9taXNlKHtcblx0XHRcdGVsZW06IGVsZW0sXG5cdFx0XHRwcm9wczogalF1ZXJ5LmV4dGVuZCgge30sIHByb3BlcnRpZXMgKSxcblx0XHRcdG9wdHM6IGpRdWVyeS5leHRlbmQoIHRydWUsIHsgc3BlY2lhbEVhc2luZzoge30gfSwgb3B0aW9ucyApLFxuXHRcdFx0b3JpZ2luYWxQcm9wZXJ0aWVzOiBwcm9wZXJ0aWVzLFxuXHRcdFx0b3JpZ2luYWxPcHRpb25zOiBvcHRpb25zLFxuXHRcdFx0c3RhcnRUaW1lOiBmeE5vdyB8fCBjcmVhdGVGeE5vdygpLFxuXHRcdFx0ZHVyYXRpb246IG9wdGlvbnMuZHVyYXRpb24sXG5cdFx0XHR0d2VlbnM6IFtdLFxuXHRcdFx0Y3JlYXRlVHdlZW46IGZ1bmN0aW9uKCBwcm9wLCBlbmQgKSB7XG5cdFx0XHRcdHZhciB0d2VlbiA9IGpRdWVyeS5Ud2VlbiggZWxlbSwgYW5pbWF0aW9uLm9wdHMsIHByb3AsIGVuZCxcblx0XHRcdFx0XHRcdGFuaW1hdGlvbi5vcHRzLnNwZWNpYWxFYXNpbmdbIHByb3AgXSB8fCBhbmltYXRpb24ub3B0cy5lYXNpbmcgKTtcblx0XHRcdFx0YW5pbWF0aW9uLnR3ZWVucy5wdXNoKCB0d2VlbiApO1xuXHRcdFx0XHRyZXR1cm4gdHdlZW47XG5cdFx0XHR9LFxuXHRcdFx0c3RvcDogZnVuY3Rpb24oIGdvdG9FbmQgKSB7XG5cdFx0XHRcdHZhciBpbmRleCA9IDAsXG5cdFx0XHRcdFx0Ly8gSWYgd2UgYXJlIGdvaW5nIHRvIHRoZSBlbmQsIHdlIHdhbnQgdG8gcnVuIGFsbCB0aGUgdHdlZW5zXG5cdFx0XHRcdFx0Ly8gb3RoZXJ3aXNlIHdlIHNraXAgdGhpcyBwYXJ0XG5cdFx0XHRcdFx0bGVuZ3RoID0gZ290b0VuZCA/IGFuaW1hdGlvbi50d2VlbnMubGVuZ3RoIDogMDtcblx0XHRcdFx0aWYgKCBzdG9wcGVkICkge1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHN0b3BwZWQgPSB0cnVlO1xuXHRcdFx0XHRmb3IgKCA7IGluZGV4IDwgbGVuZ3RoIDsgaW5kZXgrKyApIHtcblx0XHRcdFx0XHRhbmltYXRpb24udHdlZW5zWyBpbmRleCBdLnJ1biggMSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gUmVzb2x2ZSB3aGVuIHdlIHBsYXllZCB0aGUgbGFzdCBmcmFtZTsgb3RoZXJ3aXNlLCByZWplY3Rcblx0XHRcdFx0aWYgKCBnb3RvRW5kICkge1xuXHRcdFx0XHRcdGRlZmVycmVkLnJlc29sdmVXaXRoKCBlbGVtLCBbIGFuaW1hdGlvbiwgZ290b0VuZCBdICk7XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0ZGVmZXJyZWQucmVqZWN0V2l0aCggZWxlbSwgWyBhbmltYXRpb24sIGdvdG9FbmQgXSApO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0fVxuXHRcdH0pLFxuXHRcdHByb3BzID0gYW5pbWF0aW9uLnByb3BzO1xuXG5cdHByb3BGaWx0ZXIoIHByb3BzLCBhbmltYXRpb24ub3B0cy5zcGVjaWFsRWFzaW5nICk7XG5cblx0Zm9yICggOyBpbmRleCA8IGxlbmd0aCA7IGluZGV4KysgKSB7XG5cdFx0cmVzdWx0ID0gYW5pbWF0aW9uUHJlZmlsdGVyc1sgaW5kZXggXS5jYWxsKCBhbmltYXRpb24sIGVsZW0sIHByb3BzLCBhbmltYXRpb24ub3B0cyApO1xuXHRcdGlmICggcmVzdWx0ICkge1xuXHRcdFx0cmV0dXJuIHJlc3VsdDtcblx0XHR9XG5cdH1cblxuXHRqUXVlcnkubWFwKCBwcm9wcywgY3JlYXRlVHdlZW4sIGFuaW1hdGlvbiApO1xuXG5cdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIGFuaW1hdGlvbi5vcHRzLnN0YXJ0ICkgKSB7XG5cdFx0YW5pbWF0aW9uLm9wdHMuc3RhcnQuY2FsbCggZWxlbSwgYW5pbWF0aW9uICk7XG5cdH1cblxuXHRqUXVlcnkuZngudGltZXIoXG5cdFx0alF1ZXJ5LmV4dGVuZCggdGljaywge1xuXHRcdFx0ZWxlbTogZWxlbSxcblx0XHRcdGFuaW06IGFuaW1hdGlvbixcblx0XHRcdHF1ZXVlOiBhbmltYXRpb24ub3B0cy5xdWV1ZVxuXHRcdH0pXG5cdCk7XG5cblx0Ly8gYXR0YWNoIGNhbGxiYWNrcyBmcm9tIG9wdGlvbnNcblx0cmV0dXJuIGFuaW1hdGlvbi5wcm9ncmVzcyggYW5pbWF0aW9uLm9wdHMucHJvZ3Jlc3MgKVxuXHRcdC5kb25lKCBhbmltYXRpb24ub3B0cy5kb25lLCBhbmltYXRpb24ub3B0cy5jb21wbGV0ZSApXG5cdFx0LmZhaWwoIGFuaW1hdGlvbi5vcHRzLmZhaWwgKVxuXHRcdC5hbHdheXMoIGFuaW1hdGlvbi5vcHRzLmFsd2F5cyApO1xufVxuXG5qUXVlcnkuQW5pbWF0aW9uID0galF1ZXJ5LmV4dGVuZCggQW5pbWF0aW9uLCB7XG5cblx0dHdlZW5lcjogZnVuY3Rpb24oIHByb3BzLCBjYWxsYmFjayApIHtcblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBwcm9wcyApICkge1xuXHRcdFx0Y2FsbGJhY2sgPSBwcm9wcztcblx0XHRcdHByb3BzID0gWyBcIipcIiBdO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRwcm9wcyA9IHByb3BzLnNwbGl0KFwiIFwiKTtcblx0XHR9XG5cblx0XHR2YXIgcHJvcCxcblx0XHRcdGluZGV4ID0gMCxcblx0XHRcdGxlbmd0aCA9IHByb3BzLmxlbmd0aDtcblxuXHRcdGZvciAoIDsgaW5kZXggPCBsZW5ndGggOyBpbmRleCsrICkge1xuXHRcdFx0cHJvcCA9IHByb3BzWyBpbmRleCBdO1xuXHRcdFx0dHdlZW5lcnNbIHByb3AgXSA9IHR3ZWVuZXJzWyBwcm9wIF0gfHwgW107XG5cdFx0XHR0d2VlbmVyc1sgcHJvcCBdLnVuc2hpZnQoIGNhbGxiYWNrICk7XG5cdFx0fVxuXHR9LFxuXG5cdHByZWZpbHRlcjogZnVuY3Rpb24oIGNhbGxiYWNrLCBwcmVwZW5kICkge1xuXHRcdGlmICggcHJlcGVuZCApIHtcblx0XHRcdGFuaW1hdGlvblByZWZpbHRlcnMudW5zaGlmdCggY2FsbGJhY2sgKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0YW5pbWF0aW9uUHJlZmlsdGVycy5wdXNoKCBjYWxsYmFjayApO1xuXHRcdH1cblx0fVxufSk7XG5cbmpRdWVyeS5zcGVlZCA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBmbiApIHtcblx0dmFyIG9wdCA9IHNwZWVkICYmIHR5cGVvZiBzcGVlZCA9PT0gXCJvYmplY3RcIiA/IGpRdWVyeS5leHRlbmQoIHt9LCBzcGVlZCApIDoge1xuXHRcdGNvbXBsZXRlOiBmbiB8fCAhZm4gJiYgZWFzaW5nIHx8XG5cdFx0XHRqUXVlcnkuaXNGdW5jdGlvbiggc3BlZWQgKSAmJiBzcGVlZCxcblx0XHRkdXJhdGlvbjogc3BlZWQsXG5cdFx0ZWFzaW5nOiBmbiAmJiBlYXNpbmcgfHwgZWFzaW5nICYmICFqUXVlcnkuaXNGdW5jdGlvbiggZWFzaW5nICkgJiYgZWFzaW5nXG5cdH07XG5cblx0b3B0LmR1cmF0aW9uID0galF1ZXJ5LmZ4Lm9mZiA/IDAgOiB0eXBlb2Ygb3B0LmR1cmF0aW9uID09PSBcIm51bWJlclwiID8gb3B0LmR1cmF0aW9uIDpcblx0XHRvcHQuZHVyYXRpb24gaW4galF1ZXJ5LmZ4LnNwZWVkcyA/IGpRdWVyeS5meC5zcGVlZHNbIG9wdC5kdXJhdGlvbiBdIDogalF1ZXJ5LmZ4LnNwZWVkcy5fZGVmYXVsdDtcblxuXHQvLyBOb3JtYWxpemUgb3B0LnF1ZXVlIC0gdHJ1ZS91bmRlZmluZWQvbnVsbCAtPiBcImZ4XCJcblx0aWYgKCBvcHQucXVldWUgPT0gbnVsbCB8fCBvcHQucXVldWUgPT09IHRydWUgKSB7XG5cdFx0b3B0LnF1ZXVlID0gXCJmeFwiO1xuXHR9XG5cblx0Ly8gUXVldWVpbmdcblx0b3B0Lm9sZCA9IG9wdC5jb21wbGV0ZTtcblxuXHRvcHQuY29tcGxldGUgPSBmdW5jdGlvbigpIHtcblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBvcHQub2xkICkgKSB7XG5cdFx0XHRvcHQub2xkLmNhbGwoIHRoaXMgKTtcblx0XHR9XG5cblx0XHRpZiAoIG9wdC5xdWV1ZSApIHtcblx0XHRcdGpRdWVyeS5kZXF1ZXVlKCB0aGlzLCBvcHQucXVldWUgKTtcblx0XHR9XG5cdH07XG5cblx0cmV0dXJuIG9wdDtcbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHRmYWRlVG86IGZ1bmN0aW9uKCBzcGVlZCwgdG8sIGVhc2luZywgY2FsbGJhY2sgKSB7XG5cblx0XHQvLyBTaG93IGFueSBoaWRkZW4gZWxlbWVudHMgYWZ0ZXIgc2V0dGluZyBvcGFjaXR5IHRvIDBcblx0XHRyZXR1cm4gdGhpcy5maWx0ZXIoIGlzSGlkZGVuICkuY3NzKCBcIm9wYWNpdHlcIiwgMCApLnNob3coKVxuXG5cdFx0XHQvLyBBbmltYXRlIHRvIHRoZSB2YWx1ZSBzcGVjaWZpZWRcblx0XHRcdC5lbmQoKS5hbmltYXRlKHsgb3BhY2l0eTogdG8gfSwgc3BlZWQsIGVhc2luZywgY2FsbGJhY2sgKTtcblx0fSxcblx0YW5pbWF0ZTogZnVuY3Rpb24oIHByb3AsIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHZhciBlbXB0eSA9IGpRdWVyeS5pc0VtcHR5T2JqZWN0KCBwcm9wICksXG5cdFx0XHRvcHRhbGwgPSBqUXVlcnkuc3BlZWQoIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICksXG5cdFx0XHRkb0FuaW1hdGlvbiA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHQvLyBPcGVyYXRlIG9uIGEgY29weSBvZiBwcm9wIHNvIHBlci1wcm9wZXJ0eSBlYXNpbmcgd29uJ3QgYmUgbG9zdFxuXHRcdFx0XHR2YXIgYW5pbSA9IEFuaW1hdGlvbiggdGhpcywgalF1ZXJ5LmV4dGVuZCgge30sIHByb3AgKSwgb3B0YWxsICk7XG5cblx0XHRcdFx0Ly8gRW1wdHkgYW5pbWF0aW9ucywgb3IgZmluaXNoaW5nIHJlc29sdmVzIGltbWVkaWF0ZWx5XG5cdFx0XHRcdGlmICggZW1wdHkgfHwgZGF0YV9wcml2LmdldCggdGhpcywgXCJmaW5pc2hcIiApICkge1xuXHRcdFx0XHRcdGFuaW0uc3RvcCggdHJ1ZSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXHRcdFx0ZG9BbmltYXRpb24uZmluaXNoID0gZG9BbmltYXRpb247XG5cblx0XHRyZXR1cm4gZW1wdHkgfHwgb3B0YWxsLnF1ZXVlID09PSBmYWxzZSA/XG5cdFx0XHR0aGlzLmVhY2goIGRvQW5pbWF0aW9uICkgOlxuXHRcdFx0dGhpcy5xdWV1ZSggb3B0YWxsLnF1ZXVlLCBkb0FuaW1hdGlvbiApO1xuXHR9LFxuXHRzdG9wOiBmdW5jdGlvbiggdHlwZSwgY2xlYXJRdWV1ZSwgZ290b0VuZCApIHtcblx0XHR2YXIgc3RvcFF1ZXVlID0gZnVuY3Rpb24oIGhvb2tzICkge1xuXHRcdFx0dmFyIHN0b3AgPSBob29rcy5zdG9wO1xuXHRcdFx0ZGVsZXRlIGhvb2tzLnN0b3A7XG5cdFx0XHRzdG9wKCBnb3RvRW5kICk7XG5cdFx0fTtcblxuXHRcdGlmICggdHlwZW9mIHR5cGUgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRnb3RvRW5kID0gY2xlYXJRdWV1ZTtcblx0XHRcdGNsZWFyUXVldWUgPSB0eXBlO1xuXHRcdFx0dHlwZSA9IHVuZGVmaW5lZDtcblx0XHR9XG5cdFx0aWYgKCBjbGVhclF1ZXVlICYmIHR5cGUgIT09IGZhbHNlICkge1xuXHRcdFx0dGhpcy5xdWV1ZSggdHlwZSB8fCBcImZ4XCIsIFtdICk7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbigpIHtcblx0XHRcdHZhciBkZXF1ZXVlID0gdHJ1ZSxcblx0XHRcdFx0aW5kZXggPSB0eXBlICE9IG51bGwgJiYgdHlwZSArIFwicXVldWVIb29rc1wiLFxuXHRcdFx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuXHRcdFx0XHRkYXRhID0gZGF0YV9wcml2LmdldCggdGhpcyApO1xuXG5cdFx0XHRpZiAoIGluZGV4ICkge1xuXHRcdFx0XHRpZiAoIGRhdGFbIGluZGV4IF0gJiYgZGF0YVsgaW5kZXggXS5zdG9wICkge1xuXHRcdFx0XHRcdHN0b3BRdWV1ZSggZGF0YVsgaW5kZXggXSApO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRmb3IgKCBpbmRleCBpbiBkYXRhICkge1xuXHRcdFx0XHRcdGlmICggZGF0YVsgaW5kZXggXSAmJiBkYXRhWyBpbmRleCBdLnN0b3AgJiYgcnJ1bi50ZXN0KCBpbmRleCApICkge1xuXHRcdFx0XHRcdFx0c3RvcFF1ZXVlKCBkYXRhWyBpbmRleCBdICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdGZvciAoIGluZGV4ID0gdGltZXJzLmxlbmd0aDsgaW5kZXgtLTsgKSB7XG5cdFx0XHRcdGlmICggdGltZXJzWyBpbmRleCBdLmVsZW0gPT09IHRoaXMgJiYgKHR5cGUgPT0gbnVsbCB8fCB0aW1lcnNbIGluZGV4IF0ucXVldWUgPT09IHR5cGUpICkge1xuXHRcdFx0XHRcdHRpbWVyc1sgaW5kZXggXS5hbmltLnN0b3AoIGdvdG9FbmQgKTtcblx0XHRcdFx0XHRkZXF1ZXVlID0gZmFsc2U7XG5cdFx0XHRcdFx0dGltZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGFydCB0aGUgbmV4dCBpbiB0aGUgcXVldWUgaWYgdGhlIGxhc3Qgc3RlcCB3YXNuJ3QgZm9yY2VkLlxuXHRcdFx0Ly8gVGltZXJzIGN1cnJlbnRseSB3aWxsIGNhbGwgdGhlaXIgY29tcGxldGUgY2FsbGJhY2tzLCB3aGljaFxuXHRcdFx0Ly8gd2lsbCBkZXF1ZXVlIGJ1dCBvbmx5IGlmIHRoZXkgd2VyZSBnb3RvRW5kLlxuXHRcdFx0aWYgKCBkZXF1ZXVlIHx8ICFnb3RvRW5kICkge1xuXHRcdFx0XHRqUXVlcnkuZGVxdWV1ZSggdGhpcywgdHlwZSApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXHR9LFxuXHRmaW5pc2g6IGZ1bmN0aW9uKCB0eXBlICkge1xuXHRcdGlmICggdHlwZSAhPT0gZmFsc2UgKSB7XG5cdFx0XHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgaW5kZXgsXG5cdFx0XHRcdGRhdGEgPSBkYXRhX3ByaXYuZ2V0KCB0aGlzICksXG5cdFx0XHRcdHF1ZXVlID0gZGF0YVsgdHlwZSArIFwicXVldWVcIiBdLFxuXHRcdFx0XHRob29rcyA9IGRhdGFbIHR5cGUgKyBcInF1ZXVlSG9va3NcIiBdLFxuXHRcdFx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzLFxuXHRcdFx0XHRsZW5ndGggPSBxdWV1ZSA/IHF1ZXVlLmxlbmd0aCA6IDA7XG5cblx0XHRcdC8vIEVuYWJsZSBmaW5pc2hpbmcgZmxhZyBvbiBwcml2YXRlIGRhdGFcblx0XHRcdGRhdGEuZmluaXNoID0gdHJ1ZTtcblxuXHRcdFx0Ly8gRW1wdHkgdGhlIHF1ZXVlIGZpcnN0XG5cdFx0XHRqUXVlcnkucXVldWUoIHRoaXMsIHR5cGUsIFtdICk7XG5cblx0XHRcdGlmICggaG9va3MgJiYgaG9va3Muc3RvcCApIHtcblx0XHRcdFx0aG9va3Muc3RvcC5jYWxsKCB0aGlzLCB0cnVlICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIExvb2sgZm9yIGFueSBhY3RpdmUgYW5pbWF0aW9ucywgYW5kIGZpbmlzaCB0aGVtXG5cdFx0XHRmb3IgKCBpbmRleCA9IHRpbWVycy5sZW5ndGg7IGluZGV4LS07ICkge1xuXHRcdFx0XHRpZiAoIHRpbWVyc1sgaW5kZXggXS5lbGVtID09PSB0aGlzICYmIHRpbWVyc1sgaW5kZXggXS5xdWV1ZSA9PT0gdHlwZSApIHtcblx0XHRcdFx0XHR0aW1lcnNbIGluZGV4IF0uYW5pbS5zdG9wKCB0cnVlICk7XG5cdFx0XHRcdFx0dGltZXJzLnNwbGljZSggaW5kZXgsIDEgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBMb29rIGZvciBhbnkgYW5pbWF0aW9ucyBpbiB0aGUgb2xkIHF1ZXVlIGFuZCBmaW5pc2ggdGhlbVxuXHRcdFx0Zm9yICggaW5kZXggPSAwOyBpbmRleCA8IGxlbmd0aDsgaW5kZXgrKyApIHtcblx0XHRcdFx0aWYgKCBxdWV1ZVsgaW5kZXggXSAmJiBxdWV1ZVsgaW5kZXggXS5maW5pc2ggKSB7XG5cdFx0XHRcdFx0cXVldWVbIGluZGV4IF0uZmluaXNoLmNhbGwoIHRoaXMgKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBUdXJuIG9mZiBmaW5pc2hpbmcgZmxhZ1xuXHRcdFx0ZGVsZXRlIGRhdGEuZmluaXNoO1xuXHRcdH0pO1xuXHR9XG59KTtcblxualF1ZXJ5LmVhY2goWyBcInRvZ2dsZVwiLCBcInNob3dcIiwgXCJoaWRlXCIgXSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cdHZhciBjc3NGbiA9IGpRdWVyeS5mblsgbmFtZSBdO1xuXHRqUXVlcnkuZm5bIG5hbWUgXSA9IGZ1bmN0aW9uKCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4gc3BlZWQgPT0gbnVsbCB8fCB0eXBlb2Ygc3BlZWQgPT09IFwiYm9vbGVhblwiID9cblx0XHRcdGNzc0ZuLmFwcGx5KCB0aGlzLCBhcmd1bWVudHMgKSA6XG5cdFx0XHR0aGlzLmFuaW1hdGUoIGdlbkZ4KCBuYW1lLCB0cnVlICksIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICk7XG5cdH07XG59KTtcblxuLy8gR2VuZXJhdGUgc2hvcnRjdXRzIGZvciBjdXN0b20gYW5pbWF0aW9uc1xualF1ZXJ5LmVhY2goe1xuXHRzbGlkZURvd246IGdlbkZ4KFwic2hvd1wiKSxcblx0c2xpZGVVcDogZ2VuRngoXCJoaWRlXCIpLFxuXHRzbGlkZVRvZ2dsZTogZ2VuRngoXCJ0b2dnbGVcIiksXG5cdGZhZGVJbjogeyBvcGFjaXR5OiBcInNob3dcIiB9LFxuXHRmYWRlT3V0OiB7IG9wYWNpdHk6IFwiaGlkZVwiIH0sXG5cdGZhZGVUb2dnbGU6IHsgb3BhY2l0eTogXCJ0b2dnbGVcIiB9XG59LCBmdW5jdGlvbiggbmFtZSwgcHJvcHMgKSB7XG5cdGpRdWVyeS5mblsgbmFtZSBdID0gZnVuY3Rpb24oIHNwZWVkLCBlYXNpbmcsIGNhbGxiYWNrICkge1xuXHRcdHJldHVybiB0aGlzLmFuaW1hdGUoIHByb3BzLCBzcGVlZCwgZWFzaW5nLCBjYWxsYmFjayApO1xuXHR9O1xufSk7XG5cbmpRdWVyeS50aW1lcnMgPSBbXTtcbmpRdWVyeS5meC50aWNrID0gZnVuY3Rpb24oKSB7XG5cdHZhciB0aW1lcixcblx0XHRpID0gMCxcblx0XHR0aW1lcnMgPSBqUXVlcnkudGltZXJzO1xuXG5cdGZ4Tm93ID0galF1ZXJ5Lm5vdygpO1xuXG5cdGZvciAoIDsgaSA8IHRpbWVycy5sZW5ndGg7IGkrKyApIHtcblx0XHR0aW1lciA9IHRpbWVyc1sgaSBdO1xuXHRcdC8vIENoZWNrcyB0aGUgdGltZXIgaGFzIG5vdCBhbHJlYWR5IGJlZW4gcmVtb3ZlZFxuXHRcdGlmICggIXRpbWVyKCkgJiYgdGltZXJzWyBpIF0gPT09IHRpbWVyICkge1xuXHRcdFx0dGltZXJzLnNwbGljZSggaS0tLCAxICk7XG5cdFx0fVxuXHR9XG5cblx0aWYgKCAhdGltZXJzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkuZnguc3RvcCgpO1xuXHR9XG5cdGZ4Tm93ID0gdW5kZWZpbmVkO1xufTtcblxualF1ZXJ5LmZ4LnRpbWVyID0gZnVuY3Rpb24oIHRpbWVyICkge1xuXHRqUXVlcnkudGltZXJzLnB1c2goIHRpbWVyICk7XG5cdGlmICggdGltZXIoKSApIHtcblx0XHRqUXVlcnkuZnguc3RhcnQoKTtcblx0fSBlbHNlIHtcblx0XHRqUXVlcnkudGltZXJzLnBvcCgpO1xuXHR9XG59O1xuXG5qUXVlcnkuZnguaW50ZXJ2YWwgPSAxMztcblxualF1ZXJ5LmZ4LnN0YXJ0ID0gZnVuY3Rpb24oKSB7XG5cdGlmICggIXRpbWVySWQgKSB7XG5cdFx0dGltZXJJZCA9IHNldEludGVydmFsKCBqUXVlcnkuZngudGljaywgalF1ZXJ5LmZ4LmludGVydmFsICk7XG5cdH1cbn07XG5cbmpRdWVyeS5meC5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdGNsZWFySW50ZXJ2YWwoIHRpbWVySWQgKTtcblx0dGltZXJJZCA9IG51bGw7XG59O1xuXG5qUXVlcnkuZnguc3BlZWRzID0ge1xuXHRzbG93OiA2MDAsXG5cdGZhc3Q6IDIwMCxcblx0Ly8gRGVmYXVsdCBzcGVlZFxuXHRfZGVmYXVsdDogNDAwXG59O1xuXG5cbi8vIEJhc2VkIG9mZiBvZiB0aGUgcGx1Z2luIGJ5IENsaW50IEhlbGZlcnMsIHdpdGggcGVybWlzc2lvbi5cbi8vIGh0dHA6Ly9ibGluZHNpZ25hbHMuY29tL2luZGV4LnBocC8yMDA5LzA3L2pxdWVyeS1kZWxheS9cbmpRdWVyeS5mbi5kZWxheSA9IGZ1bmN0aW9uKCB0aW1lLCB0eXBlICkge1xuXHR0aW1lID0galF1ZXJ5LmZ4ID8galF1ZXJ5LmZ4LnNwZWVkc1sgdGltZSBdIHx8IHRpbWUgOiB0aW1lO1xuXHR0eXBlID0gdHlwZSB8fCBcImZ4XCI7XG5cblx0cmV0dXJuIHRoaXMucXVldWUoIHR5cGUsIGZ1bmN0aW9uKCBuZXh0LCBob29rcyApIHtcblx0XHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQoIG5leHQsIHRpbWUgKTtcblx0XHRob29rcy5zdG9wID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXQgKTtcblx0XHR9O1xuXHR9KTtcbn07XG5cblxuKGZ1bmN0aW9uKCkge1xuXHR2YXIgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcImlucHV0XCIgKSxcblx0XHRzZWxlY3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcInNlbGVjdFwiICksXG5cdFx0b3B0ID0gc2VsZWN0LmFwcGVuZENoaWxkKCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCBcIm9wdGlvblwiICkgKTtcblxuXHRpbnB1dC50eXBlID0gXCJjaGVja2JveFwiO1xuXG5cdC8vIFN1cHBvcnQ6IGlPUzw9NS4xLCBBbmRyb2lkPD00LjIrXG5cdC8vIERlZmF1bHQgdmFsdWUgZm9yIGEgY2hlY2tib3ggc2hvdWxkIGJlIFwib25cIlxuXHRzdXBwb3J0LmNoZWNrT24gPSBpbnB1dC52YWx1ZSAhPT0gXCJcIjtcblxuXHQvLyBTdXBwb3J0OiBJRTw9MTErXG5cdC8vIE11c3QgYWNjZXNzIHNlbGVjdGVkSW5kZXggdG8gbWFrZSBkZWZhdWx0IG9wdGlvbnMgc2VsZWN0XG5cdHN1cHBvcnQub3B0U2VsZWN0ZWQgPSBvcHQuc2VsZWN0ZWQ7XG5cblx0Ly8gU3VwcG9ydDogQW5kcm9pZDw9Mi4zXG5cdC8vIE9wdGlvbnMgaW5zaWRlIGRpc2FibGVkIHNlbGVjdHMgYXJlIGluY29ycmVjdGx5IG1hcmtlZCBhcyBkaXNhYmxlZFxuXHRzZWxlY3QuZGlzYWJsZWQgPSB0cnVlO1xuXHRzdXBwb3J0Lm9wdERpc2FibGVkID0gIW9wdC5kaXNhYmxlZDtcblxuXHQvLyBTdXBwb3J0OiBJRTw9MTErXG5cdC8vIEFuIGlucHV0IGxvc2VzIGl0cyB2YWx1ZSBhZnRlciBiZWNvbWluZyBhIHJhZGlvXG5cdGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCggXCJpbnB1dFwiICk7XG5cdGlucHV0LnZhbHVlID0gXCJ0XCI7XG5cdGlucHV0LnR5cGUgPSBcInJhZGlvXCI7XG5cdHN1cHBvcnQucmFkaW9WYWx1ZSA9IGlucHV0LnZhbHVlID09PSBcInRcIjtcbn0pKCk7XG5cblxudmFyIG5vZGVIb29rLCBib29sSG9vayxcblx0YXR0ckhhbmRsZSA9IGpRdWVyeS5leHByLmF0dHJIYW5kbGU7XG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHRhdHRyOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgalF1ZXJ5LmF0dHIsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xuXHR9LFxuXG5cdHJlbW92ZUF0dHI6IGZ1bmN0aW9uKCBuYW1lICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggdGhpcywgbmFtZSApO1xuXHRcdH0pO1xuXHR9XG59KTtcblxualF1ZXJ5LmV4dGVuZCh7XG5cdGF0dHI6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHR2YXIgaG9va3MsIHJldCxcblx0XHRcdG5UeXBlID0gZWxlbS5ub2RlVHlwZTtcblxuXHRcdC8vIGRvbid0IGdldC9zZXQgYXR0cmlidXRlcyBvbiB0ZXh0LCBjb21tZW50IGFuZCBhdHRyaWJ1dGUgbm9kZXNcblx0XHRpZiAoICFlbGVtIHx8IG5UeXBlID09PSAzIHx8IG5UeXBlID09PSA4IHx8IG5UeXBlID09PSAyICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdC8vIEZhbGxiYWNrIHRvIHByb3Agd2hlbiBhdHRyaWJ1dGVzIGFyZSBub3Qgc3VwcG9ydGVkXG5cdFx0aWYgKCB0eXBlb2YgZWxlbS5nZXRBdHRyaWJ1dGUgPT09IHN0cnVuZGVmaW5lZCApIHtcblx0XHRcdHJldHVybiBqUXVlcnkucHJvcCggZWxlbSwgbmFtZSwgdmFsdWUgKTtcblx0XHR9XG5cblx0XHQvLyBBbGwgYXR0cmlidXRlcyBhcmUgbG93ZXJjYXNlXG5cdFx0Ly8gR3JhYiBuZWNlc3NhcnkgaG9vayBpZiBvbmUgaXMgZGVmaW5lZFxuXHRcdGlmICggblR5cGUgIT09IDEgfHwgIWpRdWVyeS5pc1hNTERvYyggZWxlbSApICkge1xuXHRcdFx0bmFtZSA9IG5hbWUudG9Mb3dlckNhc2UoKTtcblx0XHRcdGhvb2tzID0galF1ZXJ5LmF0dHJIb29rc1sgbmFtZSBdIHx8XG5cdFx0XHRcdCggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC50ZXN0KCBuYW1lICkgPyBib29sSG9vayA6IG5vZGVIb29rICk7XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXG5cdFx0XHRpZiAoIHZhbHVlID09PSBudWxsICkge1xuXHRcdFx0XHRqUXVlcnkucmVtb3ZlQXR0ciggZWxlbSwgbmFtZSApO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBob29rcyAmJiBcInNldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5zZXQoIGVsZW0sIHZhbHVlLCBuYW1lICkpICE9PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiByZXQ7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCB2YWx1ZSArIFwiXCIgKTtcblx0XHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdFx0fVxuXG5cdFx0fSBlbHNlIGlmICggaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkpICE9PSBudWxsICkge1xuXHRcdFx0cmV0dXJuIHJldDtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXQgPSBqUXVlcnkuZmluZC5hdHRyKCBlbGVtLCBuYW1lICk7XG5cblx0XHRcdC8vIE5vbi1leGlzdGVudCBhdHRyaWJ1dGVzIHJldHVybiBudWxsLCB3ZSBub3JtYWxpemUgdG8gdW5kZWZpbmVkXG5cdFx0XHRyZXR1cm4gcmV0ID09IG51bGwgP1xuXHRcdFx0XHR1bmRlZmluZWQgOlxuXHRcdFx0XHRyZXQ7XG5cdFx0fVxuXHR9LFxuXG5cdHJlbW92ZUF0dHI6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHR2YXIgbmFtZSwgcHJvcE5hbWUsXG5cdFx0XHRpID0gMCxcblx0XHRcdGF0dHJOYW1lcyA9IHZhbHVlICYmIHZhbHVlLm1hdGNoKCBybm90d2hpdGUgKTtcblxuXHRcdGlmICggYXR0ck5hbWVzICYmIGVsZW0ubm9kZVR5cGUgPT09IDEgKSB7XG5cdFx0XHR3aGlsZSAoIChuYW1lID0gYXR0ck5hbWVzW2krK10pICkge1xuXHRcdFx0XHRwcm9wTmFtZSA9IGpRdWVyeS5wcm9wRml4WyBuYW1lIF0gfHwgbmFtZTtcblxuXHRcdFx0XHQvLyBCb29sZWFuIGF0dHJpYnV0ZXMgZ2V0IHNwZWNpYWwgdHJlYXRtZW50ICgjMTA4NzApXG5cdFx0XHRcdGlmICggalF1ZXJ5LmV4cHIubWF0Y2guYm9vbC50ZXN0KCBuYW1lICkgKSB7XG5cdFx0XHRcdFx0Ly8gU2V0IGNvcnJlc3BvbmRpbmcgcHJvcGVydHkgdG8gZmFsc2Vcblx0XHRcdFx0XHRlbGVtWyBwcm9wTmFtZSBdID0gZmFsc2U7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRlbGVtLnJlbW92ZUF0dHJpYnV0ZSggbmFtZSApO1xuXHRcdFx0fVxuXHRcdH1cblx0fSxcblxuXHRhdHRySG9va3M6IHtcblx0XHR0eXBlOiB7XG5cdFx0XHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSApIHtcblx0XHRcdFx0aWYgKCAhc3VwcG9ydC5yYWRpb1ZhbHVlICYmIHZhbHVlID09PSBcInJhZGlvXCIgJiZcblx0XHRcdFx0XHRqUXVlcnkubm9kZU5hbWUoIGVsZW0sIFwiaW5wdXRcIiApICkge1xuXHRcdFx0XHRcdHZhciB2YWwgPSBlbGVtLnZhbHVlO1xuXHRcdFx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBcInR5cGVcIiwgdmFsdWUgKTtcblx0XHRcdFx0XHRpZiAoIHZhbCApIHtcblx0XHRcdFx0XHRcdGVsZW0udmFsdWUgPSB2YWw7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiB2YWx1ZTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblx0fVxufSk7XG5cbi8vIEhvb2tzIGZvciBib29sZWFuIGF0dHJpYnV0ZXNcbmJvb2xIb29rID0ge1xuXHRzZXQ6IGZ1bmN0aW9uKCBlbGVtLCB2YWx1ZSwgbmFtZSApIHtcblx0XHRpZiAoIHZhbHVlID09PSBmYWxzZSApIHtcblx0XHRcdC8vIFJlbW92ZSBib29sZWFuIGF0dHJpYnV0ZXMgd2hlbiBzZXQgdG8gZmFsc2Vcblx0XHRcdGpRdWVyeS5yZW1vdmVBdHRyKCBlbGVtLCBuYW1lICk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdGVsZW0uc2V0QXR0cmlidXRlKCBuYW1lLCBuYW1lICk7XG5cdFx0fVxuXHRcdHJldHVybiBuYW1lO1xuXHR9XG59O1xualF1ZXJ5LmVhY2goIGpRdWVyeS5leHByLm1hdGNoLmJvb2wuc291cmNlLm1hdGNoKCAvXFx3Ky9nICksIGZ1bmN0aW9uKCBpLCBuYW1lICkge1xuXHR2YXIgZ2V0dGVyID0gYXR0ckhhbmRsZVsgbmFtZSBdIHx8IGpRdWVyeS5maW5kLmF0dHI7XG5cblx0YXR0ckhhbmRsZVsgbmFtZSBdID0gZnVuY3Rpb24oIGVsZW0sIG5hbWUsIGlzWE1MICkge1xuXHRcdHZhciByZXQsIGhhbmRsZTtcblx0XHRpZiAoICFpc1hNTCApIHtcblx0XHRcdC8vIEF2b2lkIGFuIGluZmluaXRlIGxvb3AgYnkgdGVtcG9yYXJpbHkgcmVtb3ZpbmcgdGhpcyBmdW5jdGlvbiBmcm9tIHRoZSBnZXR0ZXJcblx0XHRcdGhhbmRsZSA9IGF0dHJIYW5kbGVbIG5hbWUgXTtcblx0XHRcdGF0dHJIYW5kbGVbIG5hbWUgXSA9IHJldDtcblx0XHRcdHJldCA9IGdldHRlciggZWxlbSwgbmFtZSwgaXNYTUwgKSAhPSBudWxsID9cblx0XHRcdFx0bmFtZS50b0xvd2VyQ2FzZSgpIDpcblx0XHRcdFx0bnVsbDtcblx0XHRcdGF0dHJIYW5kbGVbIG5hbWUgXSA9IGhhbmRsZTtcblx0XHR9XG5cdFx0cmV0dXJuIHJldDtcblx0fTtcbn0pO1xuXG5cblxuXG52YXIgcmZvY3VzYWJsZSA9IC9eKD86aW5wdXR8c2VsZWN0fHRleHRhcmVhfGJ1dHRvbikkL2k7XG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHRwcm9wOiBmdW5jdGlvbiggbmFtZSwgdmFsdWUgKSB7XG5cdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgalF1ZXJ5LnByb3AsIG5hbWUsIHZhbHVlLCBhcmd1bWVudHMubGVuZ3RoID4gMSApO1xuXHR9LFxuXG5cdHJlbW92ZVByb3A6IGZ1bmN0aW9uKCBuYW1lICkge1xuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRkZWxldGUgdGhpc1sgalF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lIF07XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG5qUXVlcnkuZXh0ZW5kKHtcblx0cHJvcEZpeDoge1xuXHRcdFwiZm9yXCI6IFwiaHRtbEZvclwiLFxuXHRcdFwiY2xhc3NcIjogXCJjbGFzc05hbWVcIlxuXHR9LFxuXG5cdHByb3A6IGZ1bmN0aW9uKCBlbGVtLCBuYW1lLCB2YWx1ZSApIHtcblx0XHR2YXIgcmV0LCBob29rcywgbm90eG1sLFxuXHRcdFx0blR5cGUgPSBlbGVtLm5vZGVUeXBlO1xuXG5cdFx0Ly8gRG9uJ3QgZ2V0L3NldCBwcm9wZXJ0aWVzIG9uIHRleHQsIGNvbW1lbnQgYW5kIGF0dHJpYnV0ZSBub2Rlc1xuXHRcdGlmICggIWVsZW0gfHwgblR5cGUgPT09IDMgfHwgblR5cGUgPT09IDggfHwgblR5cGUgPT09IDIgKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0bm90eG1sID0gblR5cGUgIT09IDEgfHwgIWpRdWVyeS5pc1hNTERvYyggZWxlbSApO1xuXG5cdFx0aWYgKCBub3R4bWwgKSB7XG5cdFx0XHQvLyBGaXggbmFtZSBhbmQgYXR0YWNoIGhvb2tzXG5cdFx0XHRuYW1lID0galF1ZXJ5LnByb3BGaXhbIG5hbWUgXSB8fCBuYW1lO1xuXHRcdFx0aG9va3MgPSBqUXVlcnkucHJvcEhvb2tzWyBuYW1lIF07XG5cdFx0fVxuXG5cdFx0aWYgKCB2YWx1ZSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0cmV0dXJuIGhvb2tzICYmIFwic2V0XCIgaW4gaG9va3MgJiYgKHJldCA9IGhvb2tzLnNldCggZWxlbSwgdmFsdWUsIG5hbWUgKSkgIT09IHVuZGVmaW5lZCA/XG5cdFx0XHRcdHJldCA6XG5cdFx0XHRcdCggZWxlbVsgbmFtZSBdID0gdmFsdWUgKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZXR1cm4gaG9va3MgJiYgXCJnZXRcIiBpbiBob29rcyAmJiAocmV0ID0gaG9va3MuZ2V0KCBlbGVtLCBuYW1lICkpICE9PSBudWxsID9cblx0XHRcdFx0cmV0IDpcblx0XHRcdFx0ZWxlbVsgbmFtZSBdO1xuXHRcdH1cblx0fSxcblxuXHRwcm9wSG9va3M6IHtcblx0XHR0YWJJbmRleDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0cmV0dXJuIGVsZW0uaGFzQXR0cmlidXRlKCBcInRhYmluZGV4XCIgKSB8fCByZm9jdXNhYmxlLnRlc3QoIGVsZW0ubm9kZU5hbWUgKSB8fCBlbGVtLmhyZWYgP1xuXHRcdFx0XHRcdGVsZW0udGFiSW5kZXggOlxuXHRcdFx0XHRcdC0xO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxufSk7XG5cbmlmICggIXN1cHBvcnQub3B0U2VsZWN0ZWQgKSB7XG5cdGpRdWVyeS5wcm9wSG9va3Muc2VsZWN0ZWQgPSB7XG5cdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdHZhciBwYXJlbnQgPSBlbGVtLnBhcmVudE5vZGU7XG5cdFx0XHRpZiAoIHBhcmVudCAmJiBwYXJlbnQucGFyZW50Tm9kZSApIHtcblx0XHRcdFx0cGFyZW50LnBhcmVudE5vZGUuc2VsZWN0ZWRJbmRleDtcblx0XHRcdH1cblx0XHRcdHJldHVybiBudWxsO1xuXHRcdH1cblx0fTtcbn1cblxualF1ZXJ5LmVhY2goW1xuXHRcInRhYkluZGV4XCIsXG5cdFwicmVhZE9ubHlcIixcblx0XCJtYXhMZW5ndGhcIixcblx0XCJjZWxsU3BhY2luZ1wiLFxuXHRcImNlbGxQYWRkaW5nXCIsXG5cdFwicm93U3BhblwiLFxuXHRcImNvbFNwYW5cIixcblx0XCJ1c2VNYXBcIixcblx0XCJmcmFtZUJvcmRlclwiLFxuXHRcImNvbnRlbnRFZGl0YWJsZVwiXG5dLCBmdW5jdGlvbigpIHtcblx0alF1ZXJ5LnByb3BGaXhbIHRoaXMudG9Mb3dlckNhc2UoKSBdID0gdGhpcztcbn0pO1xuXG5cblxuXG52YXIgcmNsYXNzID0gL1tcXHRcXHJcXG5cXGZdL2c7XG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHRhZGRDbGFzczogZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdHZhciBjbGFzc2VzLCBlbGVtLCBjdXIsIGNsYXp6LCBqLCBmaW5hbFZhbHVlLFxuXHRcdFx0cHJvY2VlZCA9IHR5cGVvZiB2YWx1ZSA9PT0gXCJzdHJpbmdcIiAmJiB2YWx1ZSxcblx0XHRcdGkgPSAwLFxuXHRcdFx0bGVuID0gdGhpcy5sZW5ndGg7XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiggaiApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkuYWRkQ2xhc3MoIHZhbHVlLmNhbGwoIHRoaXMsIGosIHRoaXMuY2xhc3NOYW1lICkgKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICggcHJvY2VlZCApIHtcblx0XHRcdC8vIFRoZSBkaXNqdW5jdGlvbiBoZXJlIGlzIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgcmVtb3ZlQ2xhc3MpXG5cdFx0XHRjbGFzc2VzID0gKCB2YWx1ZSB8fCBcIlwiICkubWF0Y2goIHJub3R3aGl0ZSApIHx8IFtdO1xuXG5cdFx0XHRmb3IgKCA7IGkgPCBsZW47IGkrKyApIHtcblx0XHRcdFx0ZWxlbSA9IHRoaXNbIGkgXTtcblx0XHRcdFx0Y3VyID0gZWxlbS5ub2RlVHlwZSA9PT0gMSAmJiAoIGVsZW0uY2xhc3NOYW1lID9cblx0XHRcdFx0XHQoIFwiIFwiICsgZWxlbS5jbGFzc05hbWUgKyBcIiBcIiApLnJlcGxhY2UoIHJjbGFzcywgXCIgXCIgKSA6XG5cdFx0XHRcdFx0XCIgXCJcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpZiAoIGN1ciApIHtcblx0XHRcdFx0XHRqID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoIChjbGF6eiA9IGNsYXNzZXNbaisrXSkgKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGN1ci5pbmRleE9mKCBcIiBcIiArIGNsYXp6ICsgXCIgXCIgKSA8IDAgKSB7XG5cdFx0XHRcdFx0XHRcdGN1ciArPSBjbGF6eiArIFwiIFwiO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIG9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG5cdFx0XHRcdFx0ZmluYWxWYWx1ZSA9IGpRdWVyeS50cmltKCBjdXIgKTtcblx0XHRcdFx0XHRpZiAoIGVsZW0uY2xhc3NOYW1lICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0ZWxlbS5jbGFzc05hbWUgPSBmaW5hbFZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHJlbW92ZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUgKSB7XG5cdFx0dmFyIGNsYXNzZXMsIGVsZW0sIGN1ciwgY2xhenosIGosIGZpbmFsVmFsdWUsXG5cdFx0XHRwcm9jZWVkID0gYXJndW1lbnRzLmxlbmd0aCA9PT0gMCB8fCB0eXBlb2YgdmFsdWUgPT09IFwic3RyaW5nXCIgJiYgdmFsdWUsXG5cdFx0XHRpID0gMCxcblx0XHRcdGxlbiA9IHRoaXMubGVuZ3RoO1xuXG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSApIHtcblx0XHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oIGogKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJlbW92ZUNsYXNzKCB2YWx1ZS5jYWxsKCB0aGlzLCBqLCB0aGlzLmNsYXNzTmFtZSApICk7XG5cdFx0XHR9KTtcblx0XHR9XG5cdFx0aWYgKCBwcm9jZWVkICkge1xuXHRcdFx0Y2xhc3NlcyA9ICggdmFsdWUgfHwgXCJcIiApLm1hdGNoKCBybm90d2hpdGUgKSB8fCBbXTtcblxuXHRcdFx0Zm9yICggOyBpIDwgbGVuOyBpKysgKSB7XG5cdFx0XHRcdGVsZW0gPSB0aGlzWyBpIF07XG5cdFx0XHRcdC8vIFRoaXMgZXhwcmVzc2lvbiBpcyBoZXJlIGZvciBiZXR0ZXIgY29tcHJlc3NpYmlsaXR5IChzZWUgYWRkQ2xhc3MpXG5cdFx0XHRcdGN1ciA9IGVsZW0ubm9kZVR5cGUgPT09IDEgJiYgKCBlbGVtLmNsYXNzTmFtZSA/XG5cdFx0XHRcdFx0KCBcIiBcIiArIGVsZW0uY2xhc3NOYW1lICsgXCIgXCIgKS5yZXBsYWNlKCByY2xhc3MsIFwiIFwiICkgOlxuXHRcdFx0XHRcdFwiXCJcblx0XHRcdFx0KTtcblxuXHRcdFx0XHRpZiAoIGN1ciApIHtcblx0XHRcdFx0XHRqID0gMDtcblx0XHRcdFx0XHR3aGlsZSAoIChjbGF6eiA9IGNsYXNzZXNbaisrXSkgKSB7XG5cdFx0XHRcdFx0XHQvLyBSZW1vdmUgKmFsbCogaW5zdGFuY2VzXG5cdFx0XHRcdFx0XHR3aGlsZSAoIGN1ci5pbmRleE9mKCBcIiBcIiArIGNsYXp6ICsgXCIgXCIgKSA+PSAwICkge1xuXHRcdFx0XHRcdFx0XHRjdXIgPSBjdXIucmVwbGFjZSggXCIgXCIgKyBjbGF6eiArIFwiIFwiLCBcIiBcIiApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblxuXHRcdFx0XHRcdC8vIE9ubHkgYXNzaWduIGlmIGRpZmZlcmVudCB0byBhdm9pZCB1bm5lZWRlZCByZW5kZXJpbmcuXG5cdFx0XHRcdFx0ZmluYWxWYWx1ZSA9IHZhbHVlID8galF1ZXJ5LnRyaW0oIGN1ciApIDogXCJcIjtcblx0XHRcdFx0XHRpZiAoIGVsZW0uY2xhc3NOYW1lICE9PSBmaW5hbFZhbHVlICkge1xuXHRcdFx0XHRcdFx0ZWxlbS5jbGFzc05hbWUgPSBmaW5hbFZhbHVlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHRvZ2dsZUNsYXNzOiBmdW5jdGlvbiggdmFsdWUsIHN0YXRlVmFsICkge1xuXHRcdHZhciB0eXBlID0gdHlwZW9mIHZhbHVlO1xuXG5cdFx0aWYgKCB0eXBlb2Ygc3RhdGVWYWwgPT09IFwiYm9vbGVhblwiICYmIHR5cGUgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRyZXR1cm4gc3RhdGVWYWwgPyB0aGlzLmFkZENsYXNzKCB2YWx1ZSApIDogdGhpcy5yZW1vdmVDbGFzcyggdmFsdWUgKTtcblx0XHR9XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCB2YWx1ZSApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkudG9nZ2xlQ2xhc3MoIHZhbHVlLmNhbGwodGhpcywgaSwgdGhpcy5jbGFzc05hbWUsIHN0YXRlVmFsKSwgc3RhdGVWYWwgKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoIHR5cGUgPT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRcdC8vIFRvZ2dsZSBpbmRpdmlkdWFsIGNsYXNzIG5hbWVzXG5cdFx0XHRcdHZhciBjbGFzc05hbWUsXG5cdFx0XHRcdFx0aSA9IDAsXG5cdFx0XHRcdFx0c2VsZiA9IGpRdWVyeSggdGhpcyApLFxuXHRcdFx0XHRcdGNsYXNzTmFtZXMgPSB2YWx1ZS5tYXRjaCggcm5vdHdoaXRlICkgfHwgW107XG5cblx0XHRcdFx0d2hpbGUgKCAoY2xhc3NOYW1lID0gY2xhc3NOYW1lc1sgaSsrIF0pICkge1xuXHRcdFx0XHRcdC8vIENoZWNrIGVhY2ggY2xhc3NOYW1lIGdpdmVuLCBzcGFjZSBzZXBhcmF0ZWQgbGlzdFxuXHRcdFx0XHRcdGlmICggc2VsZi5oYXNDbGFzcyggY2xhc3NOYW1lICkgKSB7XG5cdFx0XHRcdFx0XHRzZWxmLnJlbW92ZUNsYXNzKCBjbGFzc05hbWUgKTtcblx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0c2VsZi5hZGRDbGFzcyggY2xhc3NOYW1lICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdC8vIFRvZ2dsZSB3aG9sZSBjbGFzcyBuYW1lXG5cdFx0XHR9IGVsc2UgaWYgKCB0eXBlID09PSBzdHJ1bmRlZmluZWQgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0XHRcdGlmICggdGhpcy5jbGFzc05hbWUgKSB7XG5cdFx0XHRcdFx0Ly8gc3RvcmUgY2xhc3NOYW1lIGlmIHNldFxuXHRcdFx0XHRcdGRhdGFfcHJpdi5zZXQoIHRoaXMsIFwiX19jbGFzc05hbWVfX1wiLCB0aGlzLmNsYXNzTmFtZSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gSWYgdGhlIGVsZW1lbnQgaGFzIGEgY2xhc3MgbmFtZSBvciBpZiB3ZSdyZSBwYXNzZWQgYGZhbHNlYCxcblx0XHRcdFx0Ly8gdGhlbiByZW1vdmUgdGhlIHdob2xlIGNsYXNzbmFtZSAoaWYgdGhlcmUgd2FzIG9uZSwgdGhlIGFib3ZlIHNhdmVkIGl0KS5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGJyaW5nIGJhY2sgd2hhdGV2ZXIgd2FzIHByZXZpb3VzbHkgc2F2ZWQgKGlmIGFueXRoaW5nKSxcblx0XHRcdFx0Ly8gZmFsbGluZyBiYWNrIHRvIHRoZSBlbXB0eSBzdHJpbmcgaWYgbm90aGluZyB3YXMgc3RvcmVkLlxuXHRcdFx0XHR0aGlzLmNsYXNzTmFtZSA9IHRoaXMuY2xhc3NOYW1lIHx8IHZhbHVlID09PSBmYWxzZSA/IFwiXCIgOiBkYXRhX3ByaXYuZ2V0KCB0aGlzLCBcIl9fY2xhc3NOYW1lX19cIiApIHx8IFwiXCI7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdH0sXG5cblx0aGFzQ2xhc3M6IGZ1bmN0aW9uKCBzZWxlY3RvciApIHtcblx0XHR2YXIgY2xhc3NOYW1lID0gXCIgXCIgKyBzZWxlY3RvciArIFwiIFwiLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRsID0gdGhpcy5sZW5ndGg7XG5cdFx0Zm9yICggOyBpIDwgbDsgaSsrICkge1xuXHRcdFx0aWYgKCB0aGlzW2ldLm5vZGVUeXBlID09PSAxICYmIChcIiBcIiArIHRoaXNbaV0uY2xhc3NOYW1lICsgXCIgXCIpLnJlcGxhY2UocmNsYXNzLCBcIiBcIikuaW5kZXhPZiggY2xhc3NOYW1lICkgPj0gMCApIHtcblx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59KTtcblxuXG5cblxudmFyIHJyZXR1cm4gPSAvXFxyL2c7XG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHR2YWw6IGZ1bmN0aW9uKCB2YWx1ZSApIHtcblx0XHR2YXIgaG9va3MsIHJldCwgaXNGdW5jdGlvbixcblx0XHRcdGVsZW0gPSB0aGlzWzBdO1xuXG5cdFx0aWYgKCAhYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdGlmICggZWxlbSApIHtcblx0XHRcdFx0aG9va3MgPSBqUXVlcnkudmFsSG9va3NbIGVsZW0udHlwZSBdIHx8IGpRdWVyeS52YWxIb29rc1sgZWxlbS5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpIF07XG5cblx0XHRcdFx0aWYgKCBob29rcyAmJiBcImdldFwiIGluIGhvb2tzICYmIChyZXQgPSBob29rcy5nZXQoIGVsZW0sIFwidmFsdWVcIiApKSAhPT0gdW5kZWZpbmVkICkge1xuXHRcdFx0XHRcdHJldHVybiByZXQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXQgPSBlbGVtLnZhbHVlO1xuXG5cdFx0XHRcdHJldHVybiB0eXBlb2YgcmV0ID09PSBcInN0cmluZ1wiID9cblx0XHRcdFx0XHQvLyBIYW5kbGUgbW9zdCBjb21tb24gc3RyaW5nIGNhc2VzXG5cdFx0XHRcdFx0cmV0LnJlcGxhY2UocnJldHVybiwgXCJcIikgOlxuXHRcdFx0XHRcdC8vIEhhbmRsZSBjYXNlcyB3aGVyZSB2YWx1ZSBpcyBudWxsL3VuZGVmIG9yIG51bWJlclxuXHRcdFx0XHRcdHJldCA9PSBudWxsID8gXCJcIiA6IHJldDtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGlzRnVuY3Rpb24gPSBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKTtcblxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oIGkgKSB7XG5cdFx0XHR2YXIgdmFsO1xuXG5cdFx0XHRpZiAoIHRoaXMubm9kZVR5cGUgIT09IDEgKSB7XG5cdFx0XHRcdHJldHVybjtcblx0XHRcdH1cblxuXHRcdFx0aWYgKCBpc0Z1bmN0aW9uICkge1xuXHRcdFx0XHR2YWwgPSB2YWx1ZS5jYWxsKCB0aGlzLCBpLCBqUXVlcnkoIHRoaXMgKS52YWwoKSApO1xuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0dmFsID0gdmFsdWU7XG5cdFx0XHR9XG5cblx0XHRcdC8vIFRyZWF0IG51bGwvdW5kZWZpbmVkIGFzIFwiXCI7IGNvbnZlcnQgbnVtYmVycyB0byBzdHJpbmdcblx0XHRcdGlmICggdmFsID09IG51bGwgKSB7XG5cdFx0XHRcdHZhbCA9IFwiXCI7XG5cblx0XHRcdH0gZWxzZSBpZiAoIHR5cGVvZiB2YWwgPT09IFwibnVtYmVyXCIgKSB7XG5cdFx0XHRcdHZhbCArPSBcIlwiO1xuXG5cdFx0XHR9IGVsc2UgaWYgKCBqUXVlcnkuaXNBcnJheSggdmFsICkgKSB7XG5cdFx0XHRcdHZhbCA9IGpRdWVyeS5tYXAoIHZhbCwgZnVuY3Rpb24oIHZhbHVlICkge1xuXHRcdFx0XHRcdHJldHVybiB2YWx1ZSA9PSBudWxsID8gXCJcIiA6IHZhbHVlICsgXCJcIjtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGhvb2tzID0galF1ZXJ5LnZhbEhvb2tzWyB0aGlzLnR5cGUgXSB8fCBqUXVlcnkudmFsSG9va3NbIHRoaXMubm9kZU5hbWUudG9Mb3dlckNhc2UoKSBdO1xuXG5cdFx0XHQvLyBJZiBzZXQgcmV0dXJucyB1bmRlZmluZWQsIGZhbGwgYmFjayB0byBub3JtYWwgc2V0dGluZ1xuXHRcdFx0aWYgKCAhaG9va3MgfHwgIShcInNldFwiIGluIGhvb2tzKSB8fCBob29rcy5zZXQoIHRoaXMsIHZhbCwgXCJ2YWx1ZVwiICkgPT09IHVuZGVmaW5lZCApIHtcblx0XHRcdFx0dGhpcy52YWx1ZSA9IHZhbDtcblx0XHRcdH1cblx0XHR9KTtcblx0fVxufSk7XG5cbmpRdWVyeS5leHRlbmQoe1xuXHR2YWxIb29rczoge1xuXHRcdG9wdGlvbjoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHZhbCA9IGpRdWVyeS5maW5kLmF0dHIoIGVsZW0sIFwidmFsdWVcIiApO1xuXHRcdFx0XHRyZXR1cm4gdmFsICE9IG51bGwgP1xuXHRcdFx0XHRcdHZhbCA6XG5cdFx0XHRcdFx0Ly8gU3VwcG9ydDogSUUxMC0xMStcblx0XHRcdFx0XHQvLyBvcHRpb24udGV4dCB0aHJvd3MgZXhjZXB0aW9ucyAoIzE0Njg2LCAjMTQ4NTgpXG5cdFx0XHRcdFx0alF1ZXJ5LnRyaW0oIGpRdWVyeS50ZXh0KCBlbGVtICkgKTtcblx0XHRcdH1cblx0XHR9LFxuXHRcdHNlbGVjdDoge1xuXHRcdFx0Z2V0OiBmdW5jdGlvbiggZWxlbSApIHtcblx0XHRcdFx0dmFyIHZhbHVlLCBvcHRpb24sXG5cdFx0XHRcdFx0b3B0aW9ucyA9IGVsZW0ub3B0aW9ucyxcblx0XHRcdFx0XHRpbmRleCA9IGVsZW0uc2VsZWN0ZWRJbmRleCxcblx0XHRcdFx0XHRvbmUgPSBlbGVtLnR5cGUgPT09IFwic2VsZWN0LW9uZVwiIHx8IGluZGV4IDwgMCxcblx0XHRcdFx0XHR2YWx1ZXMgPSBvbmUgPyBudWxsIDogW10sXG5cdFx0XHRcdFx0bWF4ID0gb25lID8gaW5kZXggKyAxIDogb3B0aW9ucy5sZW5ndGgsXG5cdFx0XHRcdFx0aSA9IGluZGV4IDwgMCA/XG5cdFx0XHRcdFx0XHRtYXggOlxuXHRcdFx0XHRcdFx0b25lID8gaW5kZXggOiAwO1xuXG5cdFx0XHRcdC8vIExvb3AgdGhyb3VnaCBhbGwgdGhlIHNlbGVjdGVkIG9wdGlvbnNcblx0XHRcdFx0Zm9yICggOyBpIDwgbWF4OyBpKysgKSB7XG5cdFx0XHRcdFx0b3B0aW9uID0gb3B0aW9uc1sgaSBdO1xuXG5cdFx0XHRcdFx0Ly8gSUU2LTkgZG9lc24ndCB1cGRhdGUgc2VsZWN0ZWQgYWZ0ZXIgZm9ybSByZXNldCAoIzI1NTEpXG5cdFx0XHRcdFx0aWYgKCAoIG9wdGlvbi5zZWxlY3RlZCB8fCBpID09PSBpbmRleCApICYmXG5cdFx0XHRcdFx0XHRcdC8vIERvbid0IHJldHVybiBvcHRpb25zIHRoYXQgYXJlIGRpc2FibGVkIG9yIGluIGEgZGlzYWJsZWQgb3B0Z3JvdXBcblx0XHRcdFx0XHRcdFx0KCBzdXBwb3J0Lm9wdERpc2FibGVkID8gIW9wdGlvbi5kaXNhYmxlZCA6IG9wdGlvbi5nZXRBdHRyaWJ1dGUoIFwiZGlzYWJsZWRcIiApID09PSBudWxsICkgJiZcblx0XHRcdFx0XHRcdFx0KCAhb3B0aW9uLnBhcmVudE5vZGUuZGlzYWJsZWQgfHwgIWpRdWVyeS5ub2RlTmFtZSggb3B0aW9uLnBhcmVudE5vZGUsIFwib3B0Z3JvdXBcIiApICkgKSB7XG5cblx0XHRcdFx0XHRcdC8vIEdldCB0aGUgc3BlY2lmaWMgdmFsdWUgZm9yIHRoZSBvcHRpb25cblx0XHRcdFx0XHRcdHZhbHVlID0galF1ZXJ5KCBvcHRpb24gKS52YWwoKTtcblxuXHRcdFx0XHRcdFx0Ly8gV2UgZG9uJ3QgbmVlZCBhbiBhcnJheSBmb3Igb25lIHNlbGVjdHNcblx0XHRcdFx0XHRcdGlmICggb25lICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdmFsdWU7XG5cdFx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRcdC8vIE11bHRpLVNlbGVjdHMgcmV0dXJuIGFuIGFycmF5XG5cdFx0XHRcdFx0XHR2YWx1ZXMucHVzaCggdmFsdWUgKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gdmFsdWVzO1xuXHRcdFx0fSxcblxuXHRcdFx0c2V0OiBmdW5jdGlvbiggZWxlbSwgdmFsdWUgKSB7XG5cdFx0XHRcdHZhciBvcHRpb25TZXQsIG9wdGlvbixcblx0XHRcdFx0XHRvcHRpb25zID0gZWxlbS5vcHRpb25zLFxuXHRcdFx0XHRcdHZhbHVlcyA9IGpRdWVyeS5tYWtlQXJyYXkoIHZhbHVlICksXG5cdFx0XHRcdFx0aSA9IG9wdGlvbnMubGVuZ3RoO1xuXG5cdFx0XHRcdHdoaWxlICggaS0tICkge1xuXHRcdFx0XHRcdG9wdGlvbiA9IG9wdGlvbnNbIGkgXTtcblx0XHRcdFx0XHRpZiAoIChvcHRpb24uc2VsZWN0ZWQgPSBqUXVlcnkuaW5BcnJheSggb3B0aW9uLnZhbHVlLCB2YWx1ZXMgKSA+PSAwKSApIHtcblx0XHRcdFx0XHRcdG9wdGlvblNldCA9IHRydWU7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gRm9yY2UgYnJvd3NlcnMgdG8gYmVoYXZlIGNvbnNpc3RlbnRseSB3aGVuIG5vbi1tYXRjaGluZyB2YWx1ZSBpcyBzZXRcblx0XHRcdFx0aWYgKCAhb3B0aW9uU2V0ICkge1xuXHRcdFx0XHRcdGVsZW0uc2VsZWN0ZWRJbmRleCA9IC0xO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiB2YWx1ZXM7XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG59KTtcblxuLy8gUmFkaW9zIGFuZCBjaGVja2JveGVzIGdldHRlci9zZXR0ZXJcbmpRdWVyeS5lYWNoKFsgXCJyYWRpb1wiLCBcImNoZWNrYm94XCIgXSwgZnVuY3Rpb24oKSB7XG5cdGpRdWVyeS52YWxIb29rc1sgdGhpcyBdID0ge1xuXHRcdHNldDogZnVuY3Rpb24oIGVsZW0sIHZhbHVlICkge1xuXHRcdFx0aWYgKCBqUXVlcnkuaXNBcnJheSggdmFsdWUgKSApIHtcblx0XHRcdFx0cmV0dXJuICggZWxlbS5jaGVja2VkID0galF1ZXJ5LmluQXJyYXkoIGpRdWVyeShlbGVtKS52YWwoKSwgdmFsdWUgKSA+PSAwICk7XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xuXHRpZiAoICFzdXBwb3J0LmNoZWNrT24gKSB7XG5cdFx0alF1ZXJ5LnZhbEhvb2tzWyB0aGlzIF0uZ2V0ID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdFx0XHRyZXR1cm4gZWxlbS5nZXRBdHRyaWJ1dGUoXCJ2YWx1ZVwiKSA9PT0gbnVsbCA/IFwib25cIiA6IGVsZW0udmFsdWU7XG5cdFx0fTtcblx0fVxufSk7XG5cblxuXG5cbi8vIFJldHVybiBqUXVlcnkgZm9yIGF0dHJpYnV0ZXMtb25seSBpbmNsdXNpb25cblxuXG5qUXVlcnkuZWFjaCggKFwiYmx1ciBmb2N1cyBmb2N1c2luIGZvY3Vzb3V0IGxvYWQgcmVzaXplIHNjcm9sbCB1bmxvYWQgY2xpY2sgZGJsY2xpY2sgXCIgK1xuXHRcIm1vdXNlZG93biBtb3VzZXVwIG1vdXNlbW92ZSBtb3VzZW92ZXIgbW91c2VvdXQgbW91c2VlbnRlciBtb3VzZWxlYXZlIFwiICtcblx0XCJjaGFuZ2Ugc2VsZWN0IHN1Ym1pdCBrZXlkb3duIGtleXByZXNzIGtleXVwIGVycm9yIGNvbnRleHRtZW51XCIpLnNwbGl0KFwiIFwiKSwgZnVuY3Rpb24oIGksIG5hbWUgKSB7XG5cblx0Ly8gSGFuZGxlIGV2ZW50IGJpbmRpbmdcblx0alF1ZXJ5LmZuWyBuYW1lIF0gPSBmdW5jdGlvbiggZGF0YSwgZm4gKSB7XG5cdFx0cmV0dXJuIGFyZ3VtZW50cy5sZW5ndGggPiAwID9cblx0XHRcdHRoaXMub24oIG5hbWUsIG51bGwsIGRhdGEsIGZuICkgOlxuXHRcdFx0dGhpcy50cmlnZ2VyKCBuYW1lICk7XG5cdH07XG59KTtcblxualF1ZXJ5LmZuLmV4dGVuZCh7XG5cdGhvdmVyOiBmdW5jdGlvbiggZm5PdmVyLCBmbk91dCApIHtcblx0XHRyZXR1cm4gdGhpcy5tb3VzZWVudGVyKCBmbk92ZXIgKS5tb3VzZWxlYXZlKCBmbk91dCB8fCBmbk92ZXIgKTtcblx0fSxcblxuXHRiaW5kOiBmdW5jdGlvbiggdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgbnVsbCwgZGF0YSwgZm4gKTtcblx0fSxcblx0dW5iaW5kOiBmdW5jdGlvbiggdHlwZXMsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9mZiggdHlwZXMsIG51bGwsIGZuICk7XG5cdH0sXG5cblx0ZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGRhdGEsIGZuICkge1xuXHRcdHJldHVybiB0aGlzLm9uKCB0eXBlcywgc2VsZWN0b3IsIGRhdGEsIGZuICk7XG5cdH0sXG5cdHVuZGVsZWdhdGU6IGZ1bmN0aW9uKCBzZWxlY3RvciwgdHlwZXMsIGZuICkge1xuXHRcdC8vICggbmFtZXNwYWNlICkgb3IgKCBzZWxlY3RvciwgdHlwZXMgWywgZm5dIClcblx0XHRyZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA9PT0gMSA/IHRoaXMub2ZmKCBzZWxlY3RvciwgXCIqKlwiICkgOiB0aGlzLm9mZiggdHlwZXMsIHNlbGVjdG9yIHx8IFwiKipcIiwgZm4gKTtcblx0fVxufSk7XG5cblxudmFyIG5vbmNlID0galF1ZXJ5Lm5vdygpO1xuXG52YXIgcnF1ZXJ5ID0gKC9cXD8vKTtcblxuXG5cbi8vIFN1cHBvcnQ6IEFuZHJvaWQgMi4zXG4vLyBXb3JrYXJvdW5kIGZhaWx1cmUgdG8gc3RyaW5nLWNhc3QgbnVsbCBpbnB1dFxualF1ZXJ5LnBhcnNlSlNPTiA9IGZ1bmN0aW9uKCBkYXRhICkge1xuXHRyZXR1cm4gSlNPTi5wYXJzZSggZGF0YSArIFwiXCIgKTtcbn07XG5cblxuLy8gQ3Jvc3MtYnJvd3NlciB4bWwgcGFyc2luZ1xualF1ZXJ5LnBhcnNlWE1MID0gZnVuY3Rpb24oIGRhdGEgKSB7XG5cdHZhciB4bWwsIHRtcDtcblx0aWYgKCAhZGF0YSB8fCB0eXBlb2YgZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRyZXR1cm4gbnVsbDtcblx0fVxuXG5cdC8vIFN1cHBvcnQ6IElFOVxuXHR0cnkge1xuXHRcdHRtcCA9IG5ldyBET01QYXJzZXIoKTtcblx0XHR4bWwgPSB0bXAucGFyc2VGcm9tU3RyaW5nKCBkYXRhLCBcInRleHQveG1sXCIgKTtcblx0fSBjYXRjaCAoIGUgKSB7XG5cdFx0eG1sID0gdW5kZWZpbmVkO1xuXHR9XG5cblx0aWYgKCAheG1sIHx8IHhtbC5nZXRFbGVtZW50c0J5VGFnTmFtZSggXCJwYXJzZXJlcnJvclwiICkubGVuZ3RoICkge1xuXHRcdGpRdWVyeS5lcnJvciggXCJJbnZhbGlkIFhNTDogXCIgKyBkYXRhICk7XG5cdH1cblx0cmV0dXJuIHhtbDtcbn07XG5cblxudmFyXG5cdHJoYXNoID0gLyMuKiQvLFxuXHRydHMgPSAvKFs/Jl0pXz1bXiZdKi8sXG5cdHJoZWFkZXJzID0gL14oLio/KTpbIFxcdF0qKFteXFxyXFxuXSopJC9tZyxcblx0Ly8gIzc2NTMsICM4MTI1LCAjODE1MjogbG9jYWwgcHJvdG9jb2wgZGV0ZWN0aW9uXG5cdHJsb2NhbFByb3RvY29sID0gL14oPzphYm91dHxhcHB8YXBwLXN0b3JhZ2V8ListZXh0ZW5zaW9ufGZpbGV8cmVzfHdpZGdldCk6JC8sXG5cdHJub0NvbnRlbnQgPSAvXig/OkdFVHxIRUFEKSQvLFxuXHRycHJvdG9jb2wgPSAvXlxcL1xcLy8sXG5cdHJ1cmwgPSAvXihbXFx3ListXSs6KSg/OlxcL1xcLyg/OlteXFwvPyNdKkB8KShbXlxcLz8jOl0qKSg/OjooXFxkKyl8KXwpLyxcblxuXHQvKiBQcmVmaWx0ZXJzXG5cdCAqIDEpIFRoZXkgYXJlIHVzZWZ1bCB0byBpbnRyb2R1Y2UgY3VzdG9tIGRhdGFUeXBlcyAoc2VlIGFqYXgvanNvbnAuanMgZm9yIGFuIGV4YW1wbGUpXG5cdCAqIDIpIFRoZXNlIGFyZSBjYWxsZWQ6XG5cdCAqICAgIC0gQkVGT1JFIGFza2luZyBmb3IgYSB0cmFuc3BvcnRcblx0ICogICAgLSBBRlRFUiBwYXJhbSBzZXJpYWxpemF0aW9uIChzLmRhdGEgaXMgYSBzdHJpbmcgaWYgcy5wcm9jZXNzRGF0YSBpcyB0cnVlKVxuXHQgKiAzKSBrZXkgaXMgdGhlIGRhdGFUeXBlXG5cdCAqIDQpIHRoZSBjYXRjaGFsbCBzeW1ib2wgXCIqXCIgY2FuIGJlIHVzZWRcblx0ICogNSkgZXhlY3V0aW9uIHdpbGwgc3RhcnQgd2l0aCB0cmFuc3BvcnQgZGF0YVR5cGUgYW5kIFRIRU4gY29udGludWUgZG93biB0byBcIipcIiBpZiBuZWVkZWRcblx0ICovXG5cdHByZWZpbHRlcnMgPSB7fSxcblxuXHQvKiBUcmFuc3BvcnRzIGJpbmRpbmdzXG5cdCAqIDEpIGtleSBpcyB0aGUgZGF0YVR5cGVcblx0ICogMikgdGhlIGNhdGNoYWxsIHN5bWJvbCBcIipcIiBjYW4gYmUgdXNlZFxuXHQgKiAzKSBzZWxlY3Rpb24gd2lsbCBzdGFydCB3aXRoIHRyYW5zcG9ydCBkYXRhVHlwZSBhbmQgVEhFTiBnbyB0byBcIipcIiBpZiBuZWVkZWRcblx0ICovXG5cdHRyYW5zcG9ydHMgPSB7fSxcblxuXHQvLyBBdm9pZCBjb21tZW50LXByb2xvZyBjaGFyIHNlcXVlbmNlICgjMTAwOTgpOyBtdXN0IGFwcGVhc2UgbGludCBhbmQgZXZhZGUgY29tcHJlc3Npb25cblx0YWxsVHlwZXMgPSBcIiovXCIuY29uY2F0KCBcIipcIiApLFxuXG5cdC8vIERvY3VtZW50IGxvY2F0aW9uXG5cdGFqYXhMb2NhdGlvbiA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmLFxuXG5cdC8vIFNlZ21lbnQgbG9jYXRpb24gaW50byBwYXJ0c1xuXHRhamF4TG9jUGFydHMgPSBydXJsLmV4ZWMoIGFqYXhMb2NhdGlvbi50b0xvd2VyQ2FzZSgpICkgfHwgW107XG5cbi8vIEJhc2UgXCJjb25zdHJ1Y3RvclwiIGZvciBqUXVlcnkuYWpheFByZWZpbHRlciBhbmQgalF1ZXJ5LmFqYXhUcmFuc3BvcnRcbmZ1bmN0aW9uIGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggc3RydWN0dXJlICkge1xuXG5cdC8vIGRhdGFUeXBlRXhwcmVzc2lvbiBpcyBvcHRpb25hbCBhbmQgZGVmYXVsdHMgdG8gXCIqXCJcblx0cmV0dXJuIGZ1bmN0aW9uKCBkYXRhVHlwZUV4cHJlc3Npb24sIGZ1bmMgKSB7XG5cblx0XHRpZiAoIHR5cGVvZiBkYXRhVHlwZUV4cHJlc3Npb24gIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0XHRmdW5jID0gZGF0YVR5cGVFeHByZXNzaW9uO1xuXHRcdFx0ZGF0YVR5cGVFeHByZXNzaW9uID0gXCIqXCI7XG5cdFx0fVxuXG5cdFx0dmFyIGRhdGFUeXBlLFxuXHRcdFx0aSA9IDAsXG5cdFx0XHRkYXRhVHlwZXMgPSBkYXRhVHlwZUV4cHJlc3Npb24udG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgW107XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBmdW5jICkgKSB7XG5cdFx0XHQvLyBGb3IgZWFjaCBkYXRhVHlwZSBpbiB0aGUgZGF0YVR5cGVFeHByZXNzaW9uXG5cdFx0XHR3aGlsZSAoIChkYXRhVHlwZSA9IGRhdGFUeXBlc1tpKytdKSApIHtcblx0XHRcdFx0Ly8gUHJlcGVuZCBpZiByZXF1ZXN0ZWRcblx0XHRcdFx0aWYgKCBkYXRhVHlwZVswXSA9PT0gXCIrXCIgKSB7XG5cdFx0XHRcdFx0ZGF0YVR5cGUgPSBkYXRhVHlwZS5zbGljZSggMSApIHx8IFwiKlwiO1xuXHRcdFx0XHRcdChzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gPSBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10pLnVuc2hpZnQoIGZ1bmMgKTtcblxuXHRcdFx0XHQvLyBPdGhlcndpc2UgYXBwZW5kXG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0KHN0cnVjdHVyZVsgZGF0YVR5cGUgXSA9IHN0cnVjdHVyZVsgZGF0YVR5cGUgXSB8fCBbXSkucHVzaCggZnVuYyApO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9O1xufVxuXG4vLyBCYXNlIGluc3BlY3Rpb24gZnVuY3Rpb24gZm9yIHByZWZpbHRlcnMgYW5kIHRyYW5zcG9ydHNcbmZ1bmN0aW9uIGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBzdHJ1Y3R1cmUsIG9wdGlvbnMsIG9yaWdpbmFsT3B0aW9ucywganFYSFIgKSB7XG5cblx0dmFyIGluc3BlY3RlZCA9IHt9LFxuXHRcdHNlZWtpbmdUcmFuc3BvcnQgPSAoIHN0cnVjdHVyZSA9PT0gdHJhbnNwb3J0cyApO1xuXG5cdGZ1bmN0aW9uIGluc3BlY3QoIGRhdGFUeXBlICkge1xuXHRcdHZhciBzZWxlY3RlZDtcblx0XHRpbnNwZWN0ZWRbIGRhdGFUeXBlIF0gPSB0cnVlO1xuXHRcdGpRdWVyeS5lYWNoKCBzdHJ1Y3R1cmVbIGRhdGFUeXBlIF0gfHwgW10sIGZ1bmN0aW9uKCBfLCBwcmVmaWx0ZXJPckZhY3RvcnkgKSB7XG5cdFx0XHR2YXIgZGF0YVR5cGVPclRyYW5zcG9ydCA9IHByZWZpbHRlck9yRmFjdG9yeSggb3B0aW9ucywgb3JpZ2luYWxPcHRpb25zLCBqcVhIUiApO1xuXHRcdFx0aWYgKCB0eXBlb2YgZGF0YVR5cGVPclRyYW5zcG9ydCA9PT0gXCJzdHJpbmdcIiAmJiAhc2Vla2luZ1RyYW5zcG9ydCAmJiAhaW5zcGVjdGVkWyBkYXRhVHlwZU9yVHJhbnNwb3J0IF0gKSB7XG5cdFx0XHRcdG9wdGlvbnMuZGF0YVR5cGVzLnVuc2hpZnQoIGRhdGFUeXBlT3JUcmFuc3BvcnQgKTtcblx0XHRcdFx0aW5zcGVjdCggZGF0YVR5cGVPclRyYW5zcG9ydCApO1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9IGVsc2UgaWYgKCBzZWVraW5nVHJhbnNwb3J0ICkge1xuXHRcdFx0XHRyZXR1cm4gISggc2VsZWN0ZWQgPSBkYXRhVHlwZU9yVHJhbnNwb3J0ICk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0cmV0dXJuIHNlbGVjdGVkO1xuXHR9XG5cblx0cmV0dXJuIGluc3BlY3QoIG9wdGlvbnMuZGF0YVR5cGVzWyAwIF0gKSB8fCAhaW5zcGVjdGVkWyBcIipcIiBdICYmIGluc3BlY3QoIFwiKlwiICk7XG59XG5cbi8vIEEgc3BlY2lhbCBleHRlbmQgZm9yIGFqYXggb3B0aW9uc1xuLy8gdGhhdCB0YWtlcyBcImZsYXRcIiBvcHRpb25zIChub3QgdG8gYmUgZGVlcCBleHRlbmRlZClcbi8vIEZpeGVzICM5ODg3XG5mdW5jdGlvbiBhamF4RXh0ZW5kKCB0YXJnZXQsIHNyYyApIHtcblx0dmFyIGtleSwgZGVlcCxcblx0XHRmbGF0T3B0aW9ucyA9IGpRdWVyeS5hamF4U2V0dGluZ3MuZmxhdE9wdGlvbnMgfHwge307XG5cblx0Zm9yICgga2V5IGluIHNyYyApIHtcblx0XHRpZiAoIHNyY1sga2V5IF0gIT09IHVuZGVmaW5lZCApIHtcblx0XHRcdCggZmxhdE9wdGlvbnNbIGtleSBdID8gdGFyZ2V0IDogKCBkZWVwIHx8IChkZWVwID0ge30pICkgKVsga2V5IF0gPSBzcmNbIGtleSBdO1xuXHRcdH1cblx0fVxuXHRpZiAoIGRlZXAgKSB7XG5cdFx0alF1ZXJ5LmV4dGVuZCggdHJ1ZSwgdGFyZ2V0LCBkZWVwICk7XG5cdH1cblxuXHRyZXR1cm4gdGFyZ2V0O1xufVxuXG4vKiBIYW5kbGVzIHJlc3BvbnNlcyB0byBhbiBhamF4IHJlcXVlc3Q6XG4gKiAtIGZpbmRzIHRoZSByaWdodCBkYXRhVHlwZSAobWVkaWF0ZXMgYmV0d2VlbiBjb250ZW50LXR5cGUgYW5kIGV4cGVjdGVkIGRhdGFUeXBlKVxuICogLSByZXR1cm5zIHRoZSBjb3JyZXNwb25kaW5nIHJlc3BvbnNlXG4gKi9cbmZ1bmN0aW9uIGFqYXhIYW5kbGVSZXNwb25zZXMoIHMsIGpxWEhSLCByZXNwb25zZXMgKSB7XG5cblx0dmFyIGN0LCB0eXBlLCBmaW5hbERhdGFUeXBlLCBmaXJzdERhdGFUeXBlLFxuXHRcdGNvbnRlbnRzID0gcy5jb250ZW50cyxcblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcztcblxuXHQvLyBSZW1vdmUgYXV0byBkYXRhVHlwZSBhbmQgZ2V0IGNvbnRlbnQtdHlwZSBpbiB0aGUgcHJvY2Vzc1xuXHR3aGlsZSAoIGRhdGFUeXBlc1sgMCBdID09PSBcIipcIiApIHtcblx0XHRkYXRhVHlwZXMuc2hpZnQoKTtcblx0XHRpZiAoIGN0ID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRjdCA9IHMubWltZVR5cGUgfHwganFYSFIuZ2V0UmVzcG9uc2VIZWFkZXIoXCJDb250ZW50LVR5cGVcIik7XG5cdFx0fVxuXHR9XG5cblx0Ly8gQ2hlY2sgaWYgd2UncmUgZGVhbGluZyB3aXRoIGEga25vd24gY29udGVudC10eXBlXG5cdGlmICggY3QgKSB7XG5cdFx0Zm9yICggdHlwZSBpbiBjb250ZW50cyApIHtcblx0XHRcdGlmICggY29udGVudHNbIHR5cGUgXSAmJiBjb250ZW50c1sgdHlwZSBdLnRlc3QoIGN0ICkgKSB7XG5cdFx0XHRcdGRhdGFUeXBlcy51bnNoaWZ0KCB0eXBlICk7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdC8vIENoZWNrIHRvIHNlZSBpZiB3ZSBoYXZlIGEgcmVzcG9uc2UgZm9yIHRoZSBleHBlY3RlZCBkYXRhVHlwZVxuXHRpZiAoIGRhdGFUeXBlc1sgMCBdIGluIHJlc3BvbnNlcyApIHtcblx0XHRmaW5hbERhdGFUeXBlID0gZGF0YVR5cGVzWyAwIF07XG5cdH0gZWxzZSB7XG5cdFx0Ly8gVHJ5IGNvbnZlcnRpYmxlIGRhdGFUeXBlc1xuXHRcdGZvciAoIHR5cGUgaW4gcmVzcG9uc2VzICkge1xuXHRcdFx0aWYgKCAhZGF0YVR5cGVzWyAwIF0gfHwgcy5jb252ZXJ0ZXJzWyB0eXBlICsgXCIgXCIgKyBkYXRhVHlwZXNbMF0gXSApIHtcblx0XHRcdFx0ZmluYWxEYXRhVHlwZSA9IHR5cGU7XG5cdFx0XHRcdGJyZWFrO1xuXHRcdFx0fVxuXHRcdFx0aWYgKCAhZmlyc3REYXRhVHlwZSApIHtcblx0XHRcdFx0Zmlyc3REYXRhVHlwZSA9IHR5cGU7XG5cdFx0XHR9XG5cdFx0fVxuXHRcdC8vIE9yIGp1c3QgdXNlIGZpcnN0IG9uZVxuXHRcdGZpbmFsRGF0YVR5cGUgPSBmaW5hbERhdGFUeXBlIHx8IGZpcnN0RGF0YVR5cGU7XG5cdH1cblxuXHQvLyBJZiB3ZSBmb3VuZCBhIGRhdGFUeXBlXG5cdC8vIFdlIGFkZCB0aGUgZGF0YVR5cGUgdG8gdGhlIGxpc3QgaWYgbmVlZGVkXG5cdC8vIGFuZCByZXR1cm4gdGhlIGNvcnJlc3BvbmRpbmcgcmVzcG9uc2Vcblx0aWYgKCBmaW5hbERhdGFUeXBlICkge1xuXHRcdGlmICggZmluYWxEYXRhVHlwZSAhPT0gZGF0YVR5cGVzWyAwIF0gKSB7XG5cdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggZmluYWxEYXRhVHlwZSApO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzcG9uc2VzWyBmaW5hbERhdGFUeXBlIF07XG5cdH1cbn1cblxuLyogQ2hhaW4gY29udmVyc2lvbnMgZ2l2ZW4gdGhlIHJlcXVlc3QgYW5kIHRoZSBvcmlnaW5hbCByZXNwb25zZVxuICogQWxzbyBzZXRzIHRoZSByZXNwb25zZVhYWCBmaWVsZHMgb24gdGhlIGpxWEhSIGluc3RhbmNlXG4gKi9cbmZ1bmN0aW9uIGFqYXhDb252ZXJ0KCBzLCByZXNwb25zZSwganFYSFIsIGlzU3VjY2VzcyApIHtcblx0dmFyIGNvbnYyLCBjdXJyZW50LCBjb252LCB0bXAsIHByZXYsXG5cdFx0Y29udmVydGVycyA9IHt9LFxuXHRcdC8vIFdvcmsgd2l0aCBhIGNvcHkgb2YgZGF0YVR5cGVzIGluIGNhc2Ugd2UgbmVlZCB0byBtb2RpZnkgaXQgZm9yIGNvbnZlcnNpb25cblx0XHRkYXRhVHlwZXMgPSBzLmRhdGFUeXBlcy5zbGljZSgpO1xuXG5cdC8vIENyZWF0ZSBjb252ZXJ0ZXJzIG1hcCB3aXRoIGxvd2VyY2FzZWQga2V5c1xuXHRpZiAoIGRhdGFUeXBlc1sgMSBdICkge1xuXHRcdGZvciAoIGNvbnYgaW4gcy5jb252ZXJ0ZXJzICkge1xuXHRcdFx0Y29udmVydGVyc1sgY29udi50b0xvd2VyQ2FzZSgpIF0gPSBzLmNvbnZlcnRlcnNbIGNvbnYgXTtcblx0XHR9XG5cdH1cblxuXHRjdXJyZW50ID0gZGF0YVR5cGVzLnNoaWZ0KCk7XG5cblx0Ly8gQ29udmVydCB0byBlYWNoIHNlcXVlbnRpYWwgZGF0YVR5cGVcblx0d2hpbGUgKCBjdXJyZW50ICkge1xuXG5cdFx0aWYgKCBzLnJlc3BvbnNlRmllbGRzWyBjdXJyZW50IF0gKSB7XG5cdFx0XHRqcVhIUlsgcy5yZXNwb25zZUZpZWxkc1sgY3VycmVudCBdIF0gPSByZXNwb25zZTtcblx0XHR9XG5cblx0XHQvLyBBcHBseSB0aGUgZGF0YUZpbHRlciBpZiBwcm92aWRlZFxuXHRcdGlmICggIXByZXYgJiYgaXNTdWNjZXNzICYmIHMuZGF0YUZpbHRlciApIHtcblx0XHRcdHJlc3BvbnNlID0gcy5kYXRhRmlsdGVyKCByZXNwb25zZSwgcy5kYXRhVHlwZSApO1xuXHRcdH1cblxuXHRcdHByZXYgPSBjdXJyZW50O1xuXHRcdGN1cnJlbnQgPSBkYXRhVHlwZXMuc2hpZnQoKTtcblxuXHRcdGlmICggY3VycmVudCApIHtcblxuXHRcdC8vIFRoZXJlJ3Mgb25seSB3b3JrIHRvIGRvIGlmIGN1cnJlbnQgZGF0YVR5cGUgaXMgbm9uLWF1dG9cblx0XHRcdGlmICggY3VycmVudCA9PT0gXCIqXCIgKSB7XG5cblx0XHRcdFx0Y3VycmVudCA9IHByZXY7XG5cblx0XHRcdC8vIENvbnZlcnQgcmVzcG9uc2UgaWYgcHJldiBkYXRhVHlwZSBpcyBub24tYXV0byBhbmQgZGlmZmVycyBmcm9tIGN1cnJlbnRcblx0XHRcdH0gZWxzZSBpZiAoIHByZXYgIT09IFwiKlwiICYmIHByZXYgIT09IGN1cnJlbnQgKSB7XG5cblx0XHRcdFx0Ly8gU2VlayBhIGRpcmVjdCBjb252ZXJ0ZXJcblx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIHByZXYgKyBcIiBcIiArIGN1cnJlbnQgXSB8fCBjb252ZXJ0ZXJzWyBcIiogXCIgKyBjdXJyZW50IF07XG5cblx0XHRcdFx0Ly8gSWYgbm9uZSBmb3VuZCwgc2VlayBhIHBhaXJcblx0XHRcdFx0aWYgKCAhY29udiApIHtcblx0XHRcdFx0XHRmb3IgKCBjb252MiBpbiBjb252ZXJ0ZXJzICkge1xuXG5cdFx0XHRcdFx0XHQvLyBJZiBjb252MiBvdXRwdXRzIGN1cnJlbnRcblx0XHRcdFx0XHRcdHRtcCA9IGNvbnYyLnNwbGl0KCBcIiBcIiApO1xuXHRcdFx0XHRcdFx0aWYgKCB0bXBbIDEgXSA9PT0gY3VycmVudCApIHtcblxuXHRcdFx0XHRcdFx0XHQvLyBJZiBwcmV2IGNhbiBiZSBjb252ZXJ0ZWQgdG8gYWNjZXB0ZWQgaW5wdXRcblx0XHRcdFx0XHRcdFx0Y29udiA9IGNvbnZlcnRlcnNbIHByZXYgKyBcIiBcIiArIHRtcFsgMCBdIF0gfHxcblx0XHRcdFx0XHRcdFx0XHRjb252ZXJ0ZXJzWyBcIiogXCIgKyB0bXBbIDAgXSBdO1xuXHRcdFx0XHRcdFx0XHRpZiAoIGNvbnYgKSB7XG5cdFx0XHRcdFx0XHRcdFx0Ly8gQ29uZGVuc2UgZXF1aXZhbGVuY2UgY29udmVydGVyc1xuXHRcdFx0XHRcdFx0XHRcdGlmICggY29udiA9PT0gdHJ1ZSApIHtcblx0XHRcdFx0XHRcdFx0XHRcdGNvbnYgPSBjb252ZXJ0ZXJzWyBjb252MiBdO1xuXG5cdFx0XHRcdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlLCBpbnNlcnQgdGhlIGludGVybWVkaWF0ZSBkYXRhVHlwZVxuXHRcdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIGNvbnZlcnRlcnNbIGNvbnYyIF0gIT09IHRydWUgKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRjdXJyZW50ID0gdG1wWyAwIF07XG5cdFx0XHRcdFx0XHRcdFx0XHRkYXRhVHlwZXMudW5zaGlmdCggdG1wWyAxIF0gKTtcblx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBBcHBseSBjb252ZXJ0ZXIgKGlmIG5vdCBhbiBlcXVpdmFsZW5jZSlcblx0XHRcdFx0aWYgKCBjb252ICE9PSB0cnVlICkge1xuXG5cdFx0XHRcdFx0Ly8gVW5sZXNzIGVycm9ycyBhcmUgYWxsb3dlZCB0byBidWJibGUsIGNhdGNoIGFuZCByZXR1cm4gdGhlbVxuXHRcdFx0XHRcdGlmICggY29udiAmJiBzWyBcInRocm93c1wiIF0gKSB7XG5cdFx0XHRcdFx0XHRyZXNwb25zZSA9IGNvbnYoIHJlc3BvbnNlICk7XG5cdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdHJlc3BvbnNlID0gY29udiggcmVzcG9uc2UgKTtcblx0XHRcdFx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4geyBzdGF0ZTogXCJwYXJzZXJlcnJvclwiLCBlcnJvcjogY29udiA/IGUgOiBcIk5vIGNvbnZlcnNpb24gZnJvbSBcIiArIHByZXYgKyBcIiB0byBcIiArIGN1cnJlbnQgfTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdH1cblxuXHRyZXR1cm4geyBzdGF0ZTogXCJzdWNjZXNzXCIsIGRhdGE6IHJlc3BvbnNlIH07XG59XG5cbmpRdWVyeS5leHRlbmQoe1xuXG5cdC8vIENvdW50ZXIgZm9yIGhvbGRpbmcgdGhlIG51bWJlciBvZiBhY3RpdmUgcXVlcmllc1xuXHRhY3RpdmU6IDAsXG5cblx0Ly8gTGFzdC1Nb2RpZmllZCBoZWFkZXIgY2FjaGUgZm9yIG5leHQgcmVxdWVzdFxuXHRsYXN0TW9kaWZpZWQ6IHt9LFxuXHRldGFnOiB7fSxcblxuXHRhamF4U2V0dGluZ3M6IHtcblx0XHR1cmw6IGFqYXhMb2NhdGlvbixcblx0XHR0eXBlOiBcIkdFVFwiLFxuXHRcdGlzTG9jYWw6IHJsb2NhbFByb3RvY29sLnRlc3QoIGFqYXhMb2NQYXJ0c1sgMSBdICksXG5cdFx0Z2xvYmFsOiB0cnVlLFxuXHRcdHByb2Nlc3NEYXRhOiB0cnVlLFxuXHRcdGFzeW5jOiB0cnVlLFxuXHRcdGNvbnRlbnRUeXBlOiBcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOFwiLFxuXHRcdC8qXG5cdFx0dGltZW91dDogMCxcblx0XHRkYXRhOiBudWxsLFxuXHRcdGRhdGFUeXBlOiBudWxsLFxuXHRcdHVzZXJuYW1lOiBudWxsLFxuXHRcdHBhc3N3b3JkOiBudWxsLFxuXHRcdGNhY2hlOiBudWxsLFxuXHRcdHRocm93czogZmFsc2UsXG5cdFx0dHJhZGl0aW9uYWw6IGZhbHNlLFxuXHRcdGhlYWRlcnM6IHt9LFxuXHRcdCovXG5cblx0XHRhY2NlcHRzOiB7XG5cdFx0XHRcIipcIjogYWxsVHlwZXMsXG5cdFx0XHR0ZXh0OiBcInRleHQvcGxhaW5cIixcblx0XHRcdGh0bWw6IFwidGV4dC9odG1sXCIsXG5cdFx0XHR4bWw6IFwiYXBwbGljYXRpb24veG1sLCB0ZXh0L3htbFwiLFxuXHRcdFx0anNvbjogXCJhcHBsaWNhdGlvbi9qc29uLCB0ZXh0L2phdmFzY3JpcHRcIlxuXHRcdH0sXG5cblx0XHRjb250ZW50czoge1xuXHRcdFx0eG1sOiAveG1sLyxcblx0XHRcdGh0bWw6IC9odG1sLyxcblx0XHRcdGpzb246IC9qc29uL1xuXHRcdH0sXG5cblx0XHRyZXNwb25zZUZpZWxkczoge1xuXHRcdFx0eG1sOiBcInJlc3BvbnNlWE1MXCIsXG5cdFx0XHR0ZXh0OiBcInJlc3BvbnNlVGV4dFwiLFxuXHRcdFx0anNvbjogXCJyZXNwb25zZUpTT05cIlxuXHRcdH0sXG5cblx0XHQvLyBEYXRhIGNvbnZlcnRlcnNcblx0XHQvLyBLZXlzIHNlcGFyYXRlIHNvdXJjZSAob3IgY2F0Y2hhbGwgXCIqXCIpIGFuZCBkZXN0aW5hdGlvbiB0eXBlcyB3aXRoIGEgc2luZ2xlIHNwYWNlXG5cdFx0Y29udmVydGVyczoge1xuXG5cdFx0XHQvLyBDb252ZXJ0IGFueXRoaW5nIHRvIHRleHRcblx0XHRcdFwiKiB0ZXh0XCI6IFN0cmluZyxcblxuXHRcdFx0Ly8gVGV4dCB0byBodG1sICh0cnVlID0gbm8gdHJhbnNmb3JtYXRpb24pXG5cdFx0XHRcInRleHQgaHRtbFwiOiB0cnVlLFxuXG5cdFx0XHQvLyBFdmFsdWF0ZSB0ZXh0IGFzIGEganNvbiBleHByZXNzaW9uXG5cdFx0XHRcInRleHQganNvblwiOiBqUXVlcnkucGFyc2VKU09OLFxuXG5cdFx0XHQvLyBQYXJzZSB0ZXh0IGFzIHhtbFxuXHRcdFx0XCJ0ZXh0IHhtbFwiOiBqUXVlcnkucGFyc2VYTUxcblx0XHR9LFxuXG5cdFx0Ly8gRm9yIG9wdGlvbnMgdGhhdCBzaG91bGRuJ3QgYmUgZGVlcCBleHRlbmRlZDpcblx0XHQvLyB5b3UgY2FuIGFkZCB5b3VyIG93biBjdXN0b20gb3B0aW9ucyBoZXJlIGlmXG5cdFx0Ly8gYW5kIHdoZW4geW91IGNyZWF0ZSBvbmUgdGhhdCBzaG91bGRuJ3QgYmVcblx0XHQvLyBkZWVwIGV4dGVuZGVkIChzZWUgYWpheEV4dGVuZClcblx0XHRmbGF0T3B0aW9uczoge1xuXHRcdFx0dXJsOiB0cnVlLFxuXHRcdFx0Y29udGV4dDogdHJ1ZVxuXHRcdH1cblx0fSxcblxuXHQvLyBDcmVhdGVzIGEgZnVsbCBmbGVkZ2VkIHNldHRpbmdzIG9iamVjdCBpbnRvIHRhcmdldFxuXHQvLyB3aXRoIGJvdGggYWpheFNldHRpbmdzIGFuZCBzZXR0aW5ncyBmaWVsZHMuXG5cdC8vIElmIHRhcmdldCBpcyBvbWl0dGVkLCB3cml0ZXMgaW50byBhamF4U2V0dGluZ3MuXG5cdGFqYXhTZXR1cDogZnVuY3Rpb24oIHRhcmdldCwgc2V0dGluZ3MgKSB7XG5cdFx0cmV0dXJuIHNldHRpbmdzID9cblxuXHRcdFx0Ly8gQnVpbGRpbmcgYSBzZXR0aW5ncyBvYmplY3Rcblx0XHRcdGFqYXhFeHRlbmQoIGFqYXhFeHRlbmQoIHRhcmdldCwgalF1ZXJ5LmFqYXhTZXR0aW5ncyApLCBzZXR0aW5ncyApIDpcblxuXHRcdFx0Ly8gRXh0ZW5kaW5nIGFqYXhTZXR0aW5nc1xuXHRcdFx0YWpheEV4dGVuZCggalF1ZXJ5LmFqYXhTZXR0aW5ncywgdGFyZ2V0ICk7XG5cdH0sXG5cblx0YWpheFByZWZpbHRlcjogYWRkVG9QcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzICksXG5cdGFqYXhUcmFuc3BvcnQ6IGFkZFRvUHJlZmlsdGVyc09yVHJhbnNwb3J0cyggdHJhbnNwb3J0cyApLFxuXG5cdC8vIE1haW4gbWV0aG9kXG5cdGFqYXg6IGZ1bmN0aW9uKCB1cmwsIG9wdGlvbnMgKSB7XG5cblx0XHQvLyBJZiB1cmwgaXMgYW4gb2JqZWN0LCBzaW11bGF0ZSBwcmUtMS41IHNpZ25hdHVyZVxuXHRcdGlmICggdHlwZW9mIHVybCA9PT0gXCJvYmplY3RcIiApIHtcblx0XHRcdG9wdGlvbnMgPSB1cmw7XG5cdFx0XHR1cmwgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0Ly8gRm9yY2Ugb3B0aW9ucyB0byBiZSBhbiBvYmplY3Rcblx0XHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRcdHZhciB0cmFuc3BvcnQsXG5cdFx0XHQvLyBVUkwgd2l0aG91dCBhbnRpLWNhY2hlIHBhcmFtXG5cdFx0XHRjYWNoZVVSTCxcblx0XHRcdC8vIFJlc3BvbnNlIGhlYWRlcnNcblx0XHRcdHJlc3BvbnNlSGVhZGVyc1N0cmluZyxcblx0XHRcdHJlc3BvbnNlSGVhZGVycyxcblx0XHRcdC8vIHRpbWVvdXQgaGFuZGxlXG5cdFx0XHR0aW1lb3V0VGltZXIsXG5cdFx0XHQvLyBDcm9zcy1kb21haW4gZGV0ZWN0aW9uIHZhcnNcblx0XHRcdHBhcnRzLFxuXHRcdFx0Ly8gVG8ga25vdyBpZiBnbG9iYWwgZXZlbnRzIGFyZSB0byBiZSBkaXNwYXRjaGVkXG5cdFx0XHRmaXJlR2xvYmFscyxcblx0XHRcdC8vIExvb3AgdmFyaWFibGVcblx0XHRcdGksXG5cdFx0XHQvLyBDcmVhdGUgdGhlIGZpbmFsIG9wdGlvbnMgb2JqZWN0XG5cdFx0XHRzID0galF1ZXJ5LmFqYXhTZXR1cCgge30sIG9wdGlvbnMgKSxcblx0XHRcdC8vIENhbGxiYWNrcyBjb250ZXh0XG5cdFx0XHRjYWxsYmFja0NvbnRleHQgPSBzLmNvbnRleHQgfHwgcyxcblx0XHRcdC8vIENvbnRleHQgZm9yIGdsb2JhbCBldmVudHMgaXMgY2FsbGJhY2tDb250ZXh0IGlmIGl0IGlzIGEgRE9NIG5vZGUgb3IgalF1ZXJ5IGNvbGxlY3Rpb25cblx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dCA9IHMuY29udGV4dCAmJiAoIGNhbGxiYWNrQ29udGV4dC5ub2RlVHlwZSB8fCBjYWxsYmFja0NvbnRleHQuanF1ZXJ5ICkgP1xuXHRcdFx0XHRqUXVlcnkoIGNhbGxiYWNrQ29udGV4dCApIDpcblx0XHRcdFx0alF1ZXJ5LmV2ZW50LFxuXHRcdFx0Ly8gRGVmZXJyZWRzXG5cdFx0XHRkZWZlcnJlZCA9IGpRdWVyeS5EZWZlcnJlZCgpLFxuXHRcdFx0Y29tcGxldGVEZWZlcnJlZCA9IGpRdWVyeS5DYWxsYmFja3MoXCJvbmNlIG1lbW9yeVwiKSxcblx0XHRcdC8vIFN0YXR1cy1kZXBlbmRlbnQgY2FsbGJhY2tzXG5cdFx0XHRzdGF0dXNDb2RlID0gcy5zdGF0dXNDb2RlIHx8IHt9LFxuXHRcdFx0Ly8gSGVhZGVycyAodGhleSBhcmUgc2VudCBhbGwgYXQgb25jZSlcblx0XHRcdHJlcXVlc3RIZWFkZXJzID0ge30sXG5cdFx0XHRyZXF1ZXN0SGVhZGVyc05hbWVzID0ge30sXG5cdFx0XHQvLyBUaGUganFYSFIgc3RhdGVcblx0XHRcdHN0YXRlID0gMCxcblx0XHRcdC8vIERlZmF1bHQgYWJvcnQgbWVzc2FnZVxuXHRcdFx0c3RyQWJvcnQgPSBcImNhbmNlbGVkXCIsXG5cdFx0XHQvLyBGYWtlIHhoclxuXHRcdFx0anFYSFIgPSB7XG5cdFx0XHRcdHJlYWR5U3RhdGU6IDAsXG5cblx0XHRcdFx0Ly8gQnVpbGRzIGhlYWRlcnMgaGFzaHRhYmxlIGlmIG5lZWRlZFxuXHRcdFx0XHRnZXRSZXNwb25zZUhlYWRlcjogZnVuY3Rpb24oIGtleSApIHtcblx0XHRcdFx0XHR2YXIgbWF0Y2g7XG5cdFx0XHRcdFx0aWYgKCBzdGF0ZSA9PT0gMiApIHtcblx0XHRcdFx0XHRcdGlmICggIXJlc3BvbnNlSGVhZGVycyApIHtcblx0XHRcdFx0XHRcdFx0cmVzcG9uc2VIZWFkZXJzID0ge307XG5cdFx0XHRcdFx0XHRcdHdoaWxlICggKG1hdGNoID0gcmhlYWRlcnMuZXhlYyggcmVzcG9uc2VIZWFkZXJzU3RyaW5nICkpICkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3BvbnNlSGVhZGVyc1sgbWF0Y2hbMV0udG9Mb3dlckNhc2UoKSBdID0gbWF0Y2hbIDIgXTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0bWF0Y2ggPSByZXNwb25zZUhlYWRlcnNbIGtleS50b0xvd2VyQ2FzZSgpIF07XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybiBtYXRjaCA9PSBudWxsID8gbnVsbCA6IG1hdGNoO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIFJhdyBzdHJpbmdcblx0XHRcdFx0Z2V0QWxsUmVzcG9uc2VIZWFkZXJzOiBmdW5jdGlvbigpIHtcblx0XHRcdFx0XHRyZXR1cm4gc3RhdGUgPT09IDIgPyByZXNwb25zZUhlYWRlcnNTdHJpbmcgOiBudWxsO1xuXHRcdFx0XHR9LFxuXG5cdFx0XHRcdC8vIENhY2hlcyB0aGUgaGVhZGVyXG5cdFx0XHRcdHNldFJlcXVlc3RIZWFkZXI6IGZ1bmN0aW9uKCBuYW1lLCB2YWx1ZSApIHtcblx0XHRcdFx0XHR2YXIgbG5hbWUgPSBuYW1lLnRvTG93ZXJDYXNlKCk7XG5cdFx0XHRcdFx0aWYgKCAhc3RhdGUgKSB7XG5cdFx0XHRcdFx0XHRuYW1lID0gcmVxdWVzdEhlYWRlcnNOYW1lc1sgbG5hbWUgXSA9IHJlcXVlc3RIZWFkZXJzTmFtZXNbIGxuYW1lIF0gfHwgbmFtZTtcblx0XHRcdFx0XHRcdHJlcXVlc3RIZWFkZXJzWyBuYW1lIF0gPSB2YWx1ZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gT3ZlcnJpZGVzIHJlc3BvbnNlIGNvbnRlbnQtdHlwZSBoZWFkZXJcblx0XHRcdFx0b3ZlcnJpZGVNaW1lVHlwZTogZnVuY3Rpb24oIHR5cGUgKSB7XG5cdFx0XHRcdFx0aWYgKCAhc3RhdGUgKSB7XG5cdFx0XHRcdFx0XHRzLm1pbWVUeXBlID0gdHlwZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdFx0c3RhdHVzQ29kZTogZnVuY3Rpb24oIG1hcCApIHtcblx0XHRcdFx0XHR2YXIgY29kZTtcblx0XHRcdFx0XHRpZiAoIG1hcCApIHtcblx0XHRcdFx0XHRcdGlmICggc3RhdGUgPCAyICkge1xuXHRcdFx0XHRcdFx0XHRmb3IgKCBjb2RlIGluIG1hcCApIHtcblx0XHRcdFx0XHRcdFx0XHQvLyBMYXp5LWFkZCB0aGUgbmV3IGNhbGxiYWNrIGluIGEgd2F5IHRoYXQgcHJlc2VydmVzIG9sZCBvbmVzXG5cdFx0XHRcdFx0XHRcdFx0c3RhdHVzQ29kZVsgY29kZSBdID0gWyBzdGF0dXNDb2RlWyBjb2RlIF0sIG1hcFsgY29kZSBdIF07XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0XHRcdC8vIEV4ZWN1dGUgdGhlIGFwcHJvcHJpYXRlIGNhbGxiYWNrc1xuXHRcdFx0XHRcdFx0XHRqcVhIUi5hbHdheXMoIG1hcFsganFYSFIuc3RhdHVzIF0gKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRoaXM7XG5cdFx0XHRcdH0sXG5cblx0XHRcdFx0Ly8gQ2FuY2VsIHRoZSByZXF1ZXN0XG5cdFx0XHRcdGFib3J0OiBmdW5jdGlvbiggc3RhdHVzVGV4dCApIHtcblx0XHRcdFx0XHR2YXIgZmluYWxUZXh0ID0gc3RhdHVzVGV4dCB8fCBzdHJBYm9ydDtcblx0XHRcdFx0XHRpZiAoIHRyYW5zcG9ydCApIHtcblx0XHRcdFx0XHRcdHRyYW5zcG9ydC5hYm9ydCggZmluYWxUZXh0ICk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdGRvbmUoIDAsIGZpbmFsVGV4dCApO1xuXHRcdFx0XHRcdHJldHVybiB0aGlzO1xuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0Ly8gQXR0YWNoIGRlZmVycmVkc1xuXHRcdGRlZmVycmVkLnByb21pc2UoIGpxWEhSICkuY29tcGxldGUgPSBjb21wbGV0ZURlZmVycmVkLmFkZDtcblx0XHRqcVhIUi5zdWNjZXNzID0ganFYSFIuZG9uZTtcblx0XHRqcVhIUi5lcnJvciA9IGpxWEhSLmZhaWw7XG5cblx0XHQvLyBSZW1vdmUgaGFzaCBjaGFyYWN0ZXIgKCM3NTMxOiBhbmQgc3RyaW5nIHByb21vdGlvbilcblx0XHQvLyBBZGQgcHJvdG9jb2wgaWYgbm90IHByb3ZpZGVkIChwcmVmaWx0ZXJzIG1pZ2h0IGV4cGVjdCBpdClcblx0XHQvLyBIYW5kbGUgZmFsc3kgdXJsIGluIHRoZSBzZXR0aW5ncyBvYmplY3QgKCMxMDA5MzogY29uc2lzdGVuY3kgd2l0aCBvbGQgc2lnbmF0dXJlKVxuXHRcdC8vIFdlIGFsc28gdXNlIHRoZSB1cmwgcGFyYW1ldGVyIGlmIGF2YWlsYWJsZVxuXHRcdHMudXJsID0gKCAoIHVybCB8fCBzLnVybCB8fCBhamF4TG9jYXRpb24gKSArIFwiXCIgKS5yZXBsYWNlKCByaGFzaCwgXCJcIiApXG5cdFx0XHQucmVwbGFjZSggcnByb3RvY29sLCBhamF4TG9jUGFydHNbIDEgXSArIFwiLy9cIiApO1xuXG5cdFx0Ly8gQWxpYXMgbWV0aG9kIG9wdGlvbiB0byB0eXBlIGFzIHBlciB0aWNrZXQgIzEyMDA0XG5cdFx0cy50eXBlID0gb3B0aW9ucy5tZXRob2QgfHwgb3B0aW9ucy50eXBlIHx8IHMubWV0aG9kIHx8IHMudHlwZTtcblxuXHRcdC8vIEV4dHJhY3QgZGF0YVR5cGVzIGxpc3Rcblx0XHRzLmRhdGFUeXBlcyA9IGpRdWVyeS50cmltKCBzLmRhdGFUeXBlIHx8IFwiKlwiICkudG9Mb3dlckNhc2UoKS5tYXRjaCggcm5vdHdoaXRlICkgfHwgWyBcIlwiIF07XG5cblx0XHQvLyBBIGNyb3NzLWRvbWFpbiByZXF1ZXN0IGlzIGluIG9yZGVyIHdoZW4gd2UgaGF2ZSBhIHByb3RvY29sOmhvc3Q6cG9ydCBtaXNtYXRjaFxuXHRcdGlmICggcy5jcm9zc0RvbWFpbiA9PSBudWxsICkge1xuXHRcdFx0cGFydHMgPSBydXJsLmV4ZWMoIHMudXJsLnRvTG93ZXJDYXNlKCkgKTtcblx0XHRcdHMuY3Jvc3NEb21haW4gPSAhISggcGFydHMgJiZcblx0XHRcdFx0KCBwYXJ0c1sgMSBdICE9PSBhamF4TG9jUGFydHNbIDEgXSB8fCBwYXJ0c1sgMiBdICE9PSBhamF4TG9jUGFydHNbIDIgXSB8fFxuXHRcdFx0XHRcdCggcGFydHNbIDMgXSB8fCAoIHBhcnRzWyAxIF0gPT09IFwiaHR0cDpcIiA/IFwiODBcIiA6IFwiNDQzXCIgKSApICE9PVxuXHRcdFx0XHRcdFx0KCBhamF4TG9jUGFydHNbIDMgXSB8fCAoIGFqYXhMb2NQYXJ0c1sgMSBdID09PSBcImh0dHA6XCIgPyBcIjgwXCIgOiBcIjQ0M1wiICkgKSApXG5cdFx0XHQpO1xuXHRcdH1cblxuXHRcdC8vIENvbnZlcnQgZGF0YSBpZiBub3QgYWxyZWFkeSBhIHN0cmluZ1xuXHRcdGlmICggcy5kYXRhICYmIHMucHJvY2Vzc0RhdGEgJiYgdHlwZW9mIHMuZGF0YSAhPT0gXCJzdHJpbmdcIiApIHtcblx0XHRcdHMuZGF0YSA9IGpRdWVyeS5wYXJhbSggcy5kYXRhLCBzLnRyYWRpdGlvbmFsICk7XG5cdFx0fVxuXG5cdFx0Ly8gQXBwbHkgcHJlZmlsdGVyc1xuXHRcdGluc3BlY3RQcmVmaWx0ZXJzT3JUcmFuc3BvcnRzKCBwcmVmaWx0ZXJzLCBzLCBvcHRpb25zLCBqcVhIUiApO1xuXG5cdFx0Ly8gSWYgcmVxdWVzdCB3YXMgYWJvcnRlZCBpbnNpZGUgYSBwcmVmaWx0ZXIsIHN0b3AgdGhlcmVcblx0XHRpZiAoIHN0YXRlID09PSAyICkge1xuXHRcdFx0cmV0dXJuIGpxWEhSO1xuXHRcdH1cblxuXHRcdC8vIFdlIGNhbiBmaXJlIGdsb2JhbCBldmVudHMgYXMgb2Ygbm93IGlmIGFza2VkIHRvXG5cdFx0Ly8gRG9uJ3QgZmlyZSBldmVudHMgaWYgalF1ZXJ5LmV2ZW50IGlzIHVuZGVmaW5lZCBpbiBhbiBBTUQtdXNhZ2Ugc2NlbmFyaW8gKCMxNTExOClcblx0XHRmaXJlR2xvYmFscyA9IGpRdWVyeS5ldmVudCAmJiBzLmdsb2JhbDtcblxuXHRcdC8vIFdhdGNoIGZvciBhIG5ldyBzZXQgb2YgcmVxdWVzdHNcblx0XHRpZiAoIGZpcmVHbG9iYWxzICYmIGpRdWVyeS5hY3RpdmUrKyA9PT0gMCApIHtcblx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKFwiYWpheFN0YXJ0XCIpO1xuXHRcdH1cblxuXHRcdC8vIFVwcGVyY2FzZSB0aGUgdHlwZVxuXHRcdHMudHlwZSA9IHMudHlwZS50b1VwcGVyQ2FzZSgpO1xuXG5cdFx0Ly8gRGV0ZXJtaW5lIGlmIHJlcXVlc3QgaGFzIGNvbnRlbnRcblx0XHRzLmhhc0NvbnRlbnQgPSAhcm5vQ29udGVudC50ZXN0KCBzLnR5cGUgKTtcblxuXHRcdC8vIFNhdmUgdGhlIFVSTCBpbiBjYXNlIHdlJ3JlIHRveWluZyB3aXRoIHRoZSBJZi1Nb2RpZmllZC1TaW5jZVxuXHRcdC8vIGFuZC9vciBJZi1Ob25lLU1hdGNoIGhlYWRlciBsYXRlciBvblxuXHRcdGNhY2hlVVJMID0gcy51cmw7XG5cblx0XHQvLyBNb3JlIG9wdGlvbnMgaGFuZGxpbmcgZm9yIHJlcXVlc3RzIHdpdGggbm8gY29udGVudFxuXHRcdGlmICggIXMuaGFzQ29udGVudCApIHtcblxuXHRcdFx0Ly8gSWYgZGF0YSBpcyBhdmFpbGFibGUsIGFwcGVuZCBkYXRhIHRvIHVybFxuXHRcdFx0aWYgKCBzLmRhdGEgKSB7XG5cdFx0XHRcdGNhY2hlVVJMID0gKCBzLnVybCArPSAoIHJxdWVyeS50ZXN0KCBjYWNoZVVSTCApID8gXCImXCIgOiBcIj9cIiApICsgcy5kYXRhICk7XG5cdFx0XHRcdC8vICM5NjgyOiByZW1vdmUgZGF0YSBzbyB0aGF0IGl0J3Mgbm90IHVzZWQgaW4gYW4gZXZlbnR1YWwgcmV0cnlcblx0XHRcdFx0ZGVsZXRlIHMuZGF0YTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gQWRkIGFudGktY2FjaGUgaW4gdXJsIGlmIG5lZWRlZFxuXHRcdFx0aWYgKCBzLmNhY2hlID09PSBmYWxzZSApIHtcblx0XHRcdFx0cy51cmwgPSBydHMudGVzdCggY2FjaGVVUkwgKSA/XG5cblx0XHRcdFx0XHQvLyBJZiB0aGVyZSBpcyBhbHJlYWR5IGEgJ18nIHBhcmFtZXRlciwgc2V0IGl0cyB2YWx1ZVxuXHRcdFx0XHRcdGNhY2hlVVJMLnJlcGxhY2UoIHJ0cywgXCIkMV89XCIgKyBub25jZSsrICkgOlxuXG5cdFx0XHRcdFx0Ly8gT3RoZXJ3aXNlIGFkZCBvbmUgdG8gdGhlIGVuZFxuXHRcdFx0XHRcdGNhY2hlVVJMICsgKCBycXVlcnkudGVzdCggY2FjaGVVUkwgKSA/IFwiJlwiIDogXCI/XCIgKSArIFwiXz1cIiArIG5vbmNlKys7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cblx0XHRpZiAoIHMuaWZNb2RpZmllZCApIHtcblx0XHRcdGlmICggalF1ZXJ5Lmxhc3RNb2RpZmllZFsgY2FjaGVVUkwgXSApIHtcblx0XHRcdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlciggXCJJZi1Nb2RpZmllZC1TaW5jZVwiLCBqUXVlcnkubGFzdE1vZGlmaWVkWyBjYWNoZVVSTCBdICk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoIGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdICkge1xuXHRcdFx0XHRqcVhIUi5zZXRSZXF1ZXN0SGVhZGVyKCBcIklmLU5vbmUtTWF0Y2hcIiwgalF1ZXJ5LmV0YWdbIGNhY2hlVVJMIF0gKTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIGNvcnJlY3QgaGVhZGVyLCBpZiBkYXRhIGlzIGJlaW5nIHNlbnRcblx0XHRpZiAoIHMuZGF0YSAmJiBzLmhhc0NvbnRlbnQgJiYgcy5jb250ZW50VHlwZSAhPT0gZmFsc2UgfHwgb3B0aW9ucy5jb250ZW50VHlwZSApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIFwiQ29udGVudC1UeXBlXCIsIHMuY29udGVudFR5cGUgKTtcblx0XHR9XG5cblx0XHQvLyBTZXQgdGhlIEFjY2VwdHMgaGVhZGVyIGZvciB0aGUgc2VydmVyLCBkZXBlbmRpbmcgb24gdGhlIGRhdGFUeXBlXG5cdFx0anFYSFIuc2V0UmVxdWVzdEhlYWRlcihcblx0XHRcdFwiQWNjZXB0XCIsXG5cdFx0XHRzLmRhdGFUeXBlc1sgMCBdICYmIHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbMF0gXSA/XG5cdFx0XHRcdHMuYWNjZXB0c1sgcy5kYXRhVHlwZXNbMF0gXSArICggcy5kYXRhVHlwZXNbIDAgXSAhPT0gXCIqXCIgPyBcIiwgXCIgKyBhbGxUeXBlcyArIFwiOyBxPTAuMDFcIiA6IFwiXCIgKSA6XG5cdFx0XHRcdHMuYWNjZXB0c1sgXCIqXCIgXVxuXHRcdCk7XG5cblx0XHQvLyBDaGVjayBmb3IgaGVhZGVycyBvcHRpb25cblx0XHRmb3IgKCBpIGluIHMuaGVhZGVycyApIHtcblx0XHRcdGpxWEhSLnNldFJlcXVlc3RIZWFkZXIoIGksIHMuaGVhZGVyc1sgaSBdICk7XG5cdFx0fVxuXG5cdFx0Ly8gQWxsb3cgY3VzdG9tIGhlYWRlcnMvbWltZXR5cGVzIGFuZCBlYXJseSBhYm9ydFxuXHRcdGlmICggcy5iZWZvcmVTZW5kICYmICggcy5iZWZvcmVTZW5kLmNhbGwoIGNhbGxiYWNrQ29udGV4dCwganFYSFIsIHMgKSA9PT0gZmFsc2UgfHwgc3RhdGUgPT09IDIgKSApIHtcblx0XHRcdC8vIEFib3J0IGlmIG5vdCBkb25lIGFscmVhZHkgYW5kIHJldHVyblxuXHRcdFx0cmV0dXJuIGpxWEhSLmFib3J0KCk7XG5cdFx0fVxuXG5cdFx0Ly8gQWJvcnRpbmcgaXMgbm8gbG9uZ2VyIGEgY2FuY2VsbGF0aW9uXG5cdFx0c3RyQWJvcnQgPSBcImFib3J0XCI7XG5cblx0XHQvLyBJbnN0YWxsIGNhbGxiYWNrcyBvbiBkZWZlcnJlZHNcblx0XHRmb3IgKCBpIGluIHsgc3VjY2VzczogMSwgZXJyb3I6IDEsIGNvbXBsZXRlOiAxIH0gKSB7XG5cdFx0XHRqcVhIUlsgaSBdKCBzWyBpIF0gKTtcblx0XHR9XG5cblx0XHQvLyBHZXQgdHJhbnNwb3J0XG5cdFx0dHJhbnNwb3J0ID0gaW5zcGVjdFByZWZpbHRlcnNPclRyYW5zcG9ydHMoIHRyYW5zcG9ydHMsIHMsIG9wdGlvbnMsIGpxWEhSICk7XG5cblx0XHQvLyBJZiBubyB0cmFuc3BvcnQsIHdlIGF1dG8tYWJvcnRcblx0XHRpZiAoICF0cmFuc3BvcnQgKSB7XG5cdFx0XHRkb25lKCAtMSwgXCJObyBUcmFuc3BvcnRcIiApO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRqcVhIUi5yZWFkeVN0YXRlID0gMTtcblxuXHRcdFx0Ly8gU2VuZCBnbG9iYWwgZXZlbnRcblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBcImFqYXhTZW5kXCIsIFsganFYSFIsIHMgXSApO1xuXHRcdFx0fVxuXHRcdFx0Ly8gVGltZW91dFxuXHRcdFx0aWYgKCBzLmFzeW5jICYmIHMudGltZW91dCA+IDAgKSB7XG5cdFx0XHRcdHRpbWVvdXRUaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0anFYSFIuYWJvcnQoXCJ0aW1lb3V0XCIpO1xuXHRcdFx0XHR9LCBzLnRpbWVvdXQgKTtcblx0XHRcdH1cblxuXHRcdFx0dHJ5IHtcblx0XHRcdFx0c3RhdGUgPSAxO1xuXHRcdFx0XHR0cmFuc3BvcnQuc2VuZCggcmVxdWVzdEhlYWRlcnMsIGRvbmUgKTtcblx0XHRcdH0gY2F0Y2ggKCBlICkge1xuXHRcdFx0XHQvLyBQcm9wYWdhdGUgZXhjZXB0aW9uIGFzIGVycm9yIGlmIG5vdCBkb25lXG5cdFx0XHRcdGlmICggc3RhdGUgPCAyICkge1xuXHRcdFx0XHRcdGRvbmUoIC0xLCBlICk7XG5cdFx0XHRcdC8vIFNpbXBseSByZXRocm93IG90aGVyd2lzZVxuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRocm93IGU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHQvLyBDYWxsYmFjayBmb3Igd2hlbiBldmVyeXRoaW5nIGlzIGRvbmVcblx0XHRmdW5jdGlvbiBkb25lKCBzdGF0dXMsIG5hdGl2ZVN0YXR1c1RleHQsIHJlc3BvbnNlcywgaGVhZGVycyApIHtcblx0XHRcdHZhciBpc1N1Y2Nlc3MsIHN1Y2Nlc3MsIGVycm9yLCByZXNwb25zZSwgbW9kaWZpZWQsXG5cdFx0XHRcdHN0YXR1c1RleHQgPSBuYXRpdmVTdGF0dXNUZXh0O1xuXG5cdFx0XHQvLyBDYWxsZWQgb25jZVxuXHRcdFx0aWYgKCBzdGF0ZSA9PT0gMiApIHtcblx0XHRcdFx0cmV0dXJuO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBTdGF0ZSBpcyBcImRvbmVcIiBub3dcblx0XHRcdHN0YXRlID0gMjtcblxuXHRcdFx0Ly8gQ2xlYXIgdGltZW91dCBpZiBpdCBleGlzdHNcblx0XHRcdGlmICggdGltZW91dFRpbWVyICkge1xuXHRcdFx0XHRjbGVhclRpbWVvdXQoIHRpbWVvdXRUaW1lciApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBEZXJlZmVyZW5jZSB0cmFuc3BvcnQgZm9yIGVhcmx5IGdhcmJhZ2UgY29sbGVjdGlvblxuXHRcdFx0Ly8gKG5vIG1hdHRlciBob3cgbG9uZyB0aGUganFYSFIgb2JqZWN0IHdpbGwgYmUgdXNlZClcblx0XHRcdHRyYW5zcG9ydCA9IHVuZGVmaW5lZDtcblxuXHRcdFx0Ly8gQ2FjaGUgcmVzcG9uc2UgaGVhZGVyc1xuXHRcdFx0cmVzcG9uc2VIZWFkZXJzU3RyaW5nID0gaGVhZGVycyB8fCBcIlwiO1xuXG5cdFx0XHQvLyBTZXQgcmVhZHlTdGF0ZVxuXHRcdFx0anFYSFIucmVhZHlTdGF0ZSA9IHN0YXR1cyA+IDAgPyA0IDogMDtcblxuXHRcdFx0Ly8gRGV0ZXJtaW5lIGlmIHN1Y2Nlc3NmdWxcblx0XHRcdGlzU3VjY2VzcyA9IHN0YXR1cyA+PSAyMDAgJiYgc3RhdHVzIDwgMzAwIHx8IHN0YXR1cyA9PT0gMzA0O1xuXG5cdFx0XHQvLyBHZXQgcmVzcG9uc2UgZGF0YVxuXHRcdFx0aWYgKCByZXNwb25zZXMgKSB7XG5cdFx0XHRcdHJlc3BvbnNlID0gYWpheEhhbmRsZVJlc3BvbnNlcyggcywganFYSFIsIHJlc3BvbnNlcyApO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBDb252ZXJ0IG5vIG1hdHRlciB3aGF0ICh0aGF0IHdheSByZXNwb25zZVhYWCBmaWVsZHMgYXJlIGFsd2F5cyBzZXQpXG5cdFx0XHRyZXNwb25zZSA9IGFqYXhDb252ZXJ0KCBzLCByZXNwb25zZSwganFYSFIsIGlzU3VjY2VzcyApO1xuXG5cdFx0XHQvLyBJZiBzdWNjZXNzZnVsLCBoYW5kbGUgdHlwZSBjaGFpbmluZ1xuXHRcdFx0aWYgKCBpc1N1Y2Nlc3MgKSB7XG5cblx0XHRcdFx0Ly8gU2V0IHRoZSBJZi1Nb2RpZmllZC1TaW5jZSBhbmQvb3IgSWYtTm9uZS1NYXRjaCBoZWFkZXIsIGlmIGluIGlmTW9kaWZpZWQgbW9kZS5cblx0XHRcdFx0aWYgKCBzLmlmTW9kaWZpZWQgKSB7XG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcihcIkxhc3QtTW9kaWZpZWRcIik7XG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5sYXN0TW9kaWZpZWRbIGNhY2hlVVJMIF0gPSBtb2RpZmllZDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bW9kaWZpZWQgPSBqcVhIUi5nZXRSZXNwb25zZUhlYWRlcihcImV0YWdcIik7XG5cdFx0XHRcdFx0aWYgKCBtb2RpZmllZCApIHtcblx0XHRcdFx0XHRcdGpRdWVyeS5ldGFnWyBjYWNoZVVSTCBdID0gbW9kaWZpZWQ7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gaWYgbm8gY29udGVudFxuXHRcdFx0XHRpZiAoIHN0YXR1cyA9PT0gMjA0IHx8IHMudHlwZSA9PT0gXCJIRUFEXCIgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwibm9jb250ZW50XCI7XG5cblx0XHRcdFx0Ly8gaWYgbm90IG1vZGlmaWVkXG5cdFx0XHRcdH0gZWxzZSBpZiAoIHN0YXR1cyA9PT0gMzA0ICkge1xuXHRcdFx0XHRcdHN0YXR1c1RleHQgPSBcIm5vdG1vZGlmaWVkXCI7XG5cblx0XHRcdFx0Ly8gSWYgd2UgaGF2ZSBkYXRhLCBsZXQncyBjb252ZXJ0IGl0XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IHJlc3BvbnNlLnN0YXRlO1xuXHRcdFx0XHRcdHN1Y2Nlc3MgPSByZXNwb25zZS5kYXRhO1xuXHRcdFx0XHRcdGVycm9yID0gcmVzcG9uc2UuZXJyb3I7XG5cdFx0XHRcdFx0aXNTdWNjZXNzID0gIWVycm9yO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBFeHRyYWN0IGVycm9yIGZyb20gc3RhdHVzVGV4dCBhbmQgbm9ybWFsaXplIGZvciBub24tYWJvcnRzXG5cdFx0XHRcdGVycm9yID0gc3RhdHVzVGV4dDtcblx0XHRcdFx0aWYgKCBzdGF0dXMgfHwgIXN0YXR1c1RleHQgKSB7XG5cdFx0XHRcdFx0c3RhdHVzVGV4dCA9IFwiZXJyb3JcIjtcblx0XHRcdFx0XHRpZiAoIHN0YXR1cyA8IDAgKSB7XG5cdFx0XHRcdFx0XHRzdGF0dXMgPSAwO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXG5cdFx0XHQvLyBTZXQgZGF0YSBmb3IgdGhlIGZha2UgeGhyIG9iamVjdFxuXHRcdFx0anFYSFIuc3RhdHVzID0gc3RhdHVzO1xuXHRcdFx0anFYSFIuc3RhdHVzVGV4dCA9ICggbmF0aXZlU3RhdHVzVGV4dCB8fCBzdGF0dXNUZXh0ICkgKyBcIlwiO1xuXG5cdFx0XHQvLyBTdWNjZXNzL0Vycm9yXG5cdFx0XHRpZiAoIGlzU3VjY2VzcyApIHtcblx0XHRcdFx0ZGVmZXJyZWQucmVzb2x2ZVdpdGgoIGNhbGxiYWNrQ29udGV4dCwgWyBzdWNjZXNzLCBzdGF0dXNUZXh0LCBqcVhIUiBdICk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRkZWZlcnJlZC5yZWplY3RXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsganFYSFIsIHN0YXR1c1RleHQsIGVycm9yIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0Ly8gU3RhdHVzLWRlcGVuZGVudCBjYWxsYmFja3Ncblx0XHRcdGpxWEhSLnN0YXR1c0NvZGUoIHN0YXR1c0NvZGUgKTtcblx0XHRcdHN0YXR1c0NvZGUgPSB1bmRlZmluZWQ7XG5cblx0XHRcdGlmICggZmlyZUdsb2JhbHMgKSB7XG5cdFx0XHRcdGdsb2JhbEV2ZW50Q29udGV4dC50cmlnZ2VyKCBpc1N1Y2Nlc3MgPyBcImFqYXhTdWNjZXNzXCIgOiBcImFqYXhFcnJvclwiLFxuXHRcdFx0XHRcdFsganFYSFIsIHMsIGlzU3VjY2VzcyA/IHN1Y2Nlc3MgOiBlcnJvciBdICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENvbXBsZXRlXG5cdFx0XHRjb21wbGV0ZURlZmVycmVkLmZpcmVXaXRoKCBjYWxsYmFja0NvbnRleHQsIFsganFYSFIsIHN0YXR1c1RleHQgXSApO1xuXG5cdFx0XHRpZiAoIGZpcmVHbG9iYWxzICkge1xuXHRcdFx0XHRnbG9iYWxFdmVudENvbnRleHQudHJpZ2dlciggXCJhamF4Q29tcGxldGVcIiwgWyBqcVhIUiwgcyBdICk7XG5cdFx0XHRcdC8vIEhhbmRsZSB0aGUgZ2xvYmFsIEFKQVggY291bnRlclxuXHRcdFx0XHRpZiAoICEoIC0talF1ZXJ5LmFjdGl2ZSApICkge1xuXHRcdFx0XHRcdGpRdWVyeS5ldmVudC50cmlnZ2VyKFwiYWpheFN0b3BcIik7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ganFYSFI7XG5cdH0sXG5cblx0Z2V0SlNPTjogZnVuY3Rpb24oIHVybCwgZGF0YSwgY2FsbGJhY2sgKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5nZXQoIHVybCwgZGF0YSwgY2FsbGJhY2ssIFwianNvblwiICk7XG5cdH0sXG5cblx0Z2V0U2NyaXB0OiBmdW5jdGlvbiggdXJsLCBjYWxsYmFjayApIHtcblx0XHRyZXR1cm4galF1ZXJ5LmdldCggdXJsLCB1bmRlZmluZWQsIGNhbGxiYWNrLCBcInNjcmlwdFwiICk7XG5cdH1cbn0pO1xuXG5qUXVlcnkuZWFjaCggWyBcImdldFwiLCBcInBvc3RcIiBdLCBmdW5jdGlvbiggaSwgbWV0aG9kICkge1xuXHRqUXVlcnlbIG1ldGhvZCBdID0gZnVuY3Rpb24oIHVybCwgZGF0YSwgY2FsbGJhY2ssIHR5cGUgKSB7XG5cdFx0Ly8gU2hpZnQgYXJndW1lbnRzIGlmIGRhdGEgYXJndW1lbnQgd2FzIG9taXR0ZWRcblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBkYXRhICkgKSB7XG5cdFx0XHR0eXBlID0gdHlwZSB8fCBjYWxsYmFjaztcblx0XHRcdGNhbGxiYWNrID0gZGF0YTtcblx0XHRcdGRhdGEgPSB1bmRlZmluZWQ7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIGpRdWVyeS5hamF4KHtcblx0XHRcdHVybDogdXJsLFxuXHRcdFx0dHlwZTogbWV0aG9kLFxuXHRcdFx0ZGF0YVR5cGU6IHR5cGUsXG5cdFx0XHRkYXRhOiBkYXRhLFxuXHRcdFx0c3VjY2VzczogY2FsbGJhY2tcblx0XHR9KTtcblx0fTtcbn0pO1xuXG5cbmpRdWVyeS5fZXZhbFVybCA9IGZ1bmN0aW9uKCB1cmwgKSB7XG5cdHJldHVybiBqUXVlcnkuYWpheCh7XG5cdFx0dXJsOiB1cmwsXG5cdFx0dHlwZTogXCJHRVRcIixcblx0XHRkYXRhVHlwZTogXCJzY3JpcHRcIixcblx0XHRhc3luYzogZmFsc2UsXG5cdFx0Z2xvYmFsOiBmYWxzZSxcblx0XHRcInRocm93c1wiOiB0cnVlXG5cdH0pO1xufTtcblxuXG5qUXVlcnkuZm4uZXh0ZW5kKHtcblx0d3JhcEFsbDogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0dmFyIHdyYXA7XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBodG1sICkgKSB7XG5cdFx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRqUXVlcnkoIHRoaXMgKS53cmFwQWxsKCBodG1sLmNhbGwodGhpcywgaSkgKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdGlmICggdGhpc1sgMCBdICkge1xuXG5cdFx0XHQvLyBUaGUgZWxlbWVudHMgdG8gd3JhcCB0aGUgdGFyZ2V0IGFyb3VuZFxuXHRcdFx0d3JhcCA9IGpRdWVyeSggaHRtbCwgdGhpc1sgMCBdLm93bmVyRG9jdW1lbnQgKS5lcSggMCApLmNsb25lKCB0cnVlICk7XG5cblx0XHRcdGlmICggdGhpc1sgMCBdLnBhcmVudE5vZGUgKSB7XG5cdFx0XHRcdHdyYXAuaW5zZXJ0QmVmb3JlKCB0aGlzWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0d3JhcC5tYXAoZnVuY3Rpb24oKSB7XG5cdFx0XHRcdHZhciBlbGVtID0gdGhpcztcblxuXHRcdFx0XHR3aGlsZSAoIGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQgKSB7XG5cdFx0XHRcdFx0ZWxlbSA9IGVsZW0uZmlyc3RFbGVtZW50Q2hpbGQ7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXR1cm4gZWxlbTtcblx0XHRcdH0pLmFwcGVuZCggdGhpcyApO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzO1xuXHR9LFxuXG5cdHdyYXBJbm5lcjogZnVuY3Rpb24oIGh0bWwgKSB7XG5cdFx0aWYgKCBqUXVlcnkuaXNGdW5jdGlvbiggaHRtbCApICkge1xuXHRcdFx0cmV0dXJuIHRoaXMuZWFjaChmdW5jdGlvbiggaSApIHtcblx0XHRcdFx0alF1ZXJ5KCB0aGlzICkud3JhcElubmVyKCBodG1sLmNhbGwodGhpcywgaSkgKTtcblx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHJldHVybiB0aGlzLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgc2VsZiA9IGpRdWVyeSggdGhpcyApLFxuXHRcdFx0XHRjb250ZW50cyA9IHNlbGYuY29udGVudHMoKTtcblxuXHRcdFx0aWYgKCBjb250ZW50cy5sZW5ndGggKSB7XG5cdFx0XHRcdGNvbnRlbnRzLndyYXBBbGwoIGh0bWwgKTtcblxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0c2VsZi5hcHBlbmQoIGh0bWwgKTtcblx0XHRcdH1cblx0XHR9KTtcblx0fSxcblxuXHR3cmFwOiBmdW5jdGlvbiggaHRtbCApIHtcblx0XHR2YXIgaXNGdW5jdGlvbiA9IGpRdWVyeS5pc0Z1bmN0aW9uKCBodG1sICk7XG5cblx0XHRyZXR1cm4gdGhpcy5lYWNoKGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0alF1ZXJ5KCB0aGlzICkud3JhcEFsbCggaXNGdW5jdGlvbiA/IGh0bWwuY2FsbCh0aGlzLCBpKSA6IGh0bWwgKTtcblx0XHR9KTtcblx0fSxcblxuXHR1bndyYXA6IGZ1bmN0aW9uKCkge1xuXHRcdHJldHVybiB0aGlzLnBhcmVudCgpLmVhY2goZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoICFqUXVlcnkubm9kZU5hbWUoIHRoaXMsIFwiYm9keVwiICkgKSB7XG5cdFx0XHRcdGpRdWVyeSggdGhpcyApLnJlcGxhY2VXaXRoKCB0aGlzLmNoaWxkTm9kZXMgKTtcblx0XHRcdH1cblx0XHR9KS5lbmQoKTtcblx0fVxufSk7XG5cblxualF1ZXJ5LmV4cHIuZmlsdGVycy5oaWRkZW4gPSBmdW5jdGlvbiggZWxlbSApIHtcblx0Ly8gU3VwcG9ydDogT3BlcmEgPD0gMTIuMTJcblx0Ly8gT3BlcmEgcmVwb3J0cyBvZmZzZXRXaWR0aHMgYW5kIG9mZnNldEhlaWdodHMgbGVzcyB0aGFuIHplcm8gb24gc29tZSBlbGVtZW50c1xuXHRyZXR1cm4gZWxlbS5vZmZzZXRXaWR0aCA8PSAwICYmIGVsZW0ub2Zmc2V0SGVpZ2h0IDw9IDA7XG59O1xualF1ZXJ5LmV4cHIuZmlsdGVycy52aXNpYmxlID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiAhalF1ZXJ5LmV4cHIuZmlsdGVycy5oaWRkZW4oIGVsZW0gKTtcbn07XG5cblxuXG5cbnZhciByMjAgPSAvJTIwL2csXG5cdHJicmFja2V0ID0gL1xcW1xcXSQvLFxuXHRyQ1JMRiA9IC9cXHI/XFxuL2csXG5cdHJzdWJtaXR0ZXJUeXBlcyA9IC9eKD86c3VibWl0fGJ1dHRvbnxpbWFnZXxyZXNldHxmaWxlKSQvaSxcblx0cnN1Ym1pdHRhYmxlID0gL14oPzppbnB1dHxzZWxlY3R8dGV4dGFyZWF8a2V5Z2VuKS9pO1xuXG5mdW5jdGlvbiBidWlsZFBhcmFtcyggcHJlZml4LCBvYmosIHRyYWRpdGlvbmFsLCBhZGQgKSB7XG5cdHZhciBuYW1lO1xuXG5cdGlmICggalF1ZXJ5LmlzQXJyYXkoIG9iaiApICkge1xuXHRcdC8vIFNlcmlhbGl6ZSBhcnJheSBpdGVtLlxuXHRcdGpRdWVyeS5lYWNoKCBvYmosIGZ1bmN0aW9uKCBpLCB2ICkge1xuXHRcdFx0aWYgKCB0cmFkaXRpb25hbCB8fCByYnJhY2tldC50ZXN0KCBwcmVmaXggKSApIHtcblx0XHRcdFx0Ly8gVHJlYXQgZWFjaCBhcnJheSBpdGVtIGFzIGEgc2NhbGFyLlxuXHRcdFx0XHRhZGQoIHByZWZpeCwgdiApO1xuXG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHQvLyBJdGVtIGlzIG5vbi1zY2FsYXIgKGFycmF5IG9yIG9iamVjdCksIGVuY29kZSBpdHMgbnVtZXJpYyBpbmRleC5cblx0XHRcdFx0YnVpbGRQYXJhbXMoIHByZWZpeCArIFwiW1wiICsgKCB0eXBlb2YgdiA9PT0gXCJvYmplY3RcIiA/IGkgOiBcIlwiICkgKyBcIl1cIiwgdiwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdH0gZWxzZSBpZiAoICF0cmFkaXRpb25hbCAmJiBqUXVlcnkudHlwZSggb2JqICkgPT09IFwib2JqZWN0XCIgKSB7XG5cdFx0Ly8gU2VyaWFsaXplIG9iamVjdCBpdGVtLlxuXHRcdGZvciAoIG5hbWUgaW4gb2JqICkge1xuXHRcdFx0YnVpbGRQYXJhbXMoIHByZWZpeCArIFwiW1wiICsgbmFtZSArIFwiXVwiLCBvYmpbIG5hbWUgXSwgdHJhZGl0aW9uYWwsIGFkZCApO1xuXHRcdH1cblxuXHR9IGVsc2Uge1xuXHRcdC8vIFNlcmlhbGl6ZSBzY2FsYXIgaXRlbS5cblx0XHRhZGQoIHByZWZpeCwgb2JqICk7XG5cdH1cbn1cblxuLy8gU2VyaWFsaXplIGFuIGFycmF5IG9mIGZvcm0gZWxlbWVudHMgb3IgYSBzZXQgb2Zcbi8vIGtleS92YWx1ZXMgaW50byBhIHF1ZXJ5IHN0cmluZ1xualF1ZXJ5LnBhcmFtID0gZnVuY3Rpb24oIGEsIHRyYWRpdGlvbmFsICkge1xuXHR2YXIgcHJlZml4LFxuXHRcdHMgPSBbXSxcblx0XHRhZGQgPSBmdW5jdGlvbigga2V5LCB2YWx1ZSApIHtcblx0XHRcdC8vIElmIHZhbHVlIGlzIGEgZnVuY3Rpb24sIGludm9rZSBpdCBhbmQgcmV0dXJuIGl0cyB2YWx1ZVxuXHRcdFx0dmFsdWUgPSBqUXVlcnkuaXNGdW5jdGlvbiggdmFsdWUgKSA/IHZhbHVlKCkgOiAoIHZhbHVlID09IG51bGwgPyBcIlwiIDogdmFsdWUgKTtcblx0XHRcdHNbIHMubGVuZ3RoIF0gPSBlbmNvZGVVUklDb21wb25lbnQoIGtleSApICsgXCI9XCIgKyBlbmNvZGVVUklDb21wb25lbnQoIHZhbHVlICk7XG5cdFx0fTtcblxuXHQvLyBTZXQgdHJhZGl0aW9uYWwgdG8gdHJ1ZSBmb3IgalF1ZXJ5IDw9IDEuMy4yIGJlaGF2aW9yLlxuXHRpZiAoIHRyYWRpdGlvbmFsID09PSB1bmRlZmluZWQgKSB7XG5cdFx0dHJhZGl0aW9uYWwgPSBqUXVlcnkuYWpheFNldHRpbmdzICYmIGpRdWVyeS5hamF4U2V0dGluZ3MudHJhZGl0aW9uYWw7XG5cdH1cblxuXHQvLyBJZiBhbiBhcnJheSB3YXMgcGFzc2VkIGluLCBhc3N1bWUgdGhhdCBpdCBpcyBhbiBhcnJheSBvZiBmb3JtIGVsZW1lbnRzLlxuXHRpZiAoIGpRdWVyeS5pc0FycmF5KCBhICkgfHwgKCBhLmpxdWVyeSAmJiAhalF1ZXJ5LmlzUGxhaW5PYmplY3QoIGEgKSApICkge1xuXHRcdC8vIFNlcmlhbGl6ZSB0aGUgZm9ybSBlbGVtZW50c1xuXHRcdGpRdWVyeS5lYWNoKCBhLCBmdW5jdGlvbigpIHtcblx0XHRcdGFkZCggdGhpcy5uYW1lLCB0aGlzLnZhbHVlICk7XG5cdFx0fSk7XG5cblx0fSBlbHNlIHtcblx0XHQvLyBJZiB0cmFkaXRpb25hbCwgZW5jb2RlIHRoZSBcIm9sZFwiIHdheSAodGhlIHdheSAxLjMuMiBvciBvbGRlclxuXHRcdC8vIGRpZCBpdCksIG90aGVyd2lzZSBlbmNvZGUgcGFyYW1zIHJlY3Vyc2l2ZWx5LlxuXHRcdGZvciAoIHByZWZpeCBpbiBhICkge1xuXHRcdFx0YnVpbGRQYXJhbXMoIHByZWZpeCwgYVsgcHJlZml4IF0sIHRyYWRpdGlvbmFsLCBhZGQgKTtcblx0XHR9XG5cdH1cblxuXHQvLyBSZXR1cm4gdGhlIHJlc3VsdGluZyBzZXJpYWxpemF0aW9uXG5cdHJldHVybiBzLmpvaW4oIFwiJlwiICkucmVwbGFjZSggcjIwLCBcIitcIiApO1xufTtcblxualF1ZXJ5LmZuLmV4dGVuZCh7XG5cdHNlcmlhbGl6ZTogZnVuY3Rpb24oKSB7XG5cdFx0cmV0dXJuIGpRdWVyeS5wYXJhbSggdGhpcy5zZXJpYWxpemVBcnJheSgpICk7XG5cdH0sXG5cdHNlcmlhbGl6ZUFycmF5OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7XG5cdFx0XHQvLyBDYW4gYWRkIHByb3BIb29rIGZvciBcImVsZW1lbnRzXCIgdG8gZmlsdGVyIG9yIGFkZCBmb3JtIGVsZW1lbnRzXG5cdFx0XHR2YXIgZWxlbWVudHMgPSBqUXVlcnkucHJvcCggdGhpcywgXCJlbGVtZW50c1wiICk7XG5cdFx0XHRyZXR1cm4gZWxlbWVudHMgPyBqUXVlcnkubWFrZUFycmF5KCBlbGVtZW50cyApIDogdGhpcztcblx0XHR9KVxuXHRcdC5maWx0ZXIoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgdHlwZSA9IHRoaXMudHlwZTtcblxuXHRcdFx0Ly8gVXNlIC5pcyggXCI6ZGlzYWJsZWRcIiApIHNvIHRoYXQgZmllbGRzZXRbZGlzYWJsZWRdIHdvcmtzXG5cdFx0XHRyZXR1cm4gdGhpcy5uYW1lICYmICFqUXVlcnkoIHRoaXMgKS5pcyggXCI6ZGlzYWJsZWRcIiApICYmXG5cdFx0XHRcdHJzdWJtaXR0YWJsZS50ZXN0KCB0aGlzLm5vZGVOYW1lICkgJiYgIXJzdWJtaXR0ZXJUeXBlcy50ZXN0KCB0eXBlICkgJiZcblx0XHRcdFx0KCB0aGlzLmNoZWNrZWQgfHwgIXJjaGVja2FibGVUeXBlLnRlc3QoIHR5cGUgKSApO1xuXHRcdH0pXG5cdFx0Lm1hcChmdW5jdGlvbiggaSwgZWxlbSApIHtcblx0XHRcdHZhciB2YWwgPSBqUXVlcnkoIHRoaXMgKS52YWwoKTtcblxuXHRcdFx0cmV0dXJuIHZhbCA9PSBudWxsID9cblx0XHRcdFx0bnVsbCA6XG5cdFx0XHRcdGpRdWVyeS5pc0FycmF5KCB2YWwgKSA/XG5cdFx0XHRcdFx0alF1ZXJ5Lm1hcCggdmFsLCBmdW5jdGlvbiggdmFsICkge1xuXHRcdFx0XHRcdFx0cmV0dXJuIHsgbmFtZTogZWxlbS5uYW1lLCB2YWx1ZTogdmFsLnJlcGxhY2UoIHJDUkxGLCBcIlxcclxcblwiICkgfTtcblx0XHRcdFx0XHR9KSA6XG5cdFx0XHRcdFx0eyBuYW1lOiBlbGVtLm5hbWUsIHZhbHVlOiB2YWwucmVwbGFjZSggckNSTEYsIFwiXFxyXFxuXCIgKSB9O1xuXHRcdH0pLmdldCgpO1xuXHR9XG59KTtcblxuXG5qUXVlcnkuYWpheFNldHRpbmdzLnhociA9IGZ1bmN0aW9uKCkge1xuXHR0cnkge1xuXHRcdHJldHVybiBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcblx0fSBjYXRjaCggZSApIHt9XG59O1xuXG52YXIgeGhySWQgPSAwLFxuXHR4aHJDYWxsYmFja3MgPSB7fSxcblx0eGhyU3VjY2Vzc1N0YXR1cyA9IHtcblx0XHQvLyBmaWxlIHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIGNvZGUgMCwgYXNzdW1lIDIwMFxuXHRcdDA6IDIwMCxcblx0XHQvLyBTdXBwb3J0OiBJRTlcblx0XHQvLyAjMTQ1MDogc29tZXRpbWVzIElFIHJldHVybnMgMTIyMyB3aGVuIGl0IHNob3VsZCBiZSAyMDRcblx0XHQxMjIzOiAyMDRcblx0fSxcblx0eGhyU3VwcG9ydGVkID0galF1ZXJ5LmFqYXhTZXR0aW5ncy54aHIoKTtcblxuLy8gU3VwcG9ydDogSUU5XG4vLyBPcGVuIHJlcXVlc3RzIG11c3QgYmUgbWFudWFsbHkgYWJvcnRlZCBvbiB1bmxvYWQgKCM1MjgwKVxuLy8gU2VlIGh0dHBzOi8vc3VwcG9ydC5taWNyb3NvZnQuY29tL2tiLzI4NTY3NDYgZm9yIG1vcmUgaW5mb1xuaWYgKCB3aW5kb3cuYXR0YWNoRXZlbnQgKSB7XG5cdHdpbmRvdy5hdHRhY2hFdmVudCggXCJvbnVubG9hZFwiLCBmdW5jdGlvbigpIHtcblx0XHRmb3IgKCB2YXIga2V5IGluIHhockNhbGxiYWNrcyApIHtcblx0XHRcdHhockNhbGxiYWNrc1sga2V5IF0oKTtcblx0XHR9XG5cdH0pO1xufVxuXG5zdXBwb3J0LmNvcnMgPSAhIXhoclN1cHBvcnRlZCAmJiAoIFwid2l0aENyZWRlbnRpYWxzXCIgaW4geGhyU3VwcG9ydGVkICk7XG5zdXBwb3J0LmFqYXggPSB4aHJTdXBwb3J0ZWQgPSAhIXhoclN1cHBvcnRlZDtcblxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoZnVuY3Rpb24oIG9wdGlvbnMgKSB7XG5cdHZhciBjYWxsYmFjaztcblxuXHQvLyBDcm9zcyBkb21haW4gb25seSBhbGxvd2VkIGlmIHN1cHBvcnRlZCB0aHJvdWdoIFhNTEh0dHBSZXF1ZXN0XG5cdGlmICggc3VwcG9ydC5jb3JzIHx8IHhoclN1cHBvcnRlZCAmJiAhb3B0aW9ucy5jcm9zc0RvbWFpbiApIHtcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIGhlYWRlcnMsIGNvbXBsZXRlICkge1xuXHRcdFx0XHR2YXIgaSxcblx0XHRcdFx0XHR4aHIgPSBvcHRpb25zLnhocigpLFxuXHRcdFx0XHRcdGlkID0gKyt4aHJJZDtcblxuXHRcdFx0XHR4aHIub3Blbiggb3B0aW9ucy50eXBlLCBvcHRpb25zLnVybCwgb3B0aW9ucy5hc3luYywgb3B0aW9ucy51c2VybmFtZSwgb3B0aW9ucy5wYXNzd29yZCApO1xuXG5cdFx0XHRcdC8vIEFwcGx5IGN1c3RvbSBmaWVsZHMgaWYgcHJvdmlkZWRcblx0XHRcdFx0aWYgKCBvcHRpb25zLnhockZpZWxkcyApIHtcblx0XHRcdFx0XHRmb3IgKCBpIGluIG9wdGlvbnMueGhyRmllbGRzICkge1xuXHRcdFx0XHRcdFx0eGhyWyBpIF0gPSBvcHRpb25zLnhockZpZWxkc1sgaSBdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXG5cdFx0XHRcdC8vIE92ZXJyaWRlIG1pbWUgdHlwZSBpZiBuZWVkZWRcblx0XHRcdFx0aWYgKCBvcHRpb25zLm1pbWVUeXBlICYmIHhoci5vdmVycmlkZU1pbWVUeXBlICkge1xuXHRcdFx0XHRcdHhoci5vdmVycmlkZU1pbWVUeXBlKCBvcHRpb25zLm1pbWVUeXBlICk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBYLVJlcXVlc3RlZC1XaXRoIGhlYWRlclxuXHRcdFx0XHQvLyBGb3IgY3Jvc3MtZG9tYWluIHJlcXVlc3RzLCBzZWVpbmcgYXMgY29uZGl0aW9ucyBmb3IgYSBwcmVmbGlnaHQgYXJlXG5cdFx0XHRcdC8vIGFraW4gdG8gYSBqaWdzYXcgcHV6emxlLCB3ZSBzaW1wbHkgbmV2ZXIgc2V0IGl0IHRvIGJlIHN1cmUuXG5cdFx0XHRcdC8vIChpdCBjYW4gYWx3YXlzIGJlIHNldCBvbiBhIHBlci1yZXF1ZXN0IGJhc2lzIG9yIGV2ZW4gdXNpbmcgYWpheFNldHVwKVxuXHRcdFx0XHQvLyBGb3Igc2FtZS1kb21haW4gcmVxdWVzdHMsIHdvbid0IGNoYW5nZSBoZWFkZXIgaWYgYWxyZWFkeSBwcm92aWRlZC5cblx0XHRcdFx0aWYgKCAhb3B0aW9ucy5jcm9zc0RvbWFpbiAmJiAhaGVhZGVyc1tcIlgtUmVxdWVzdGVkLVdpdGhcIl0gKSB7XG5cdFx0XHRcdFx0aGVhZGVyc1tcIlgtUmVxdWVzdGVkLVdpdGhcIl0gPSBcIlhNTEh0dHBSZXF1ZXN0XCI7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBTZXQgaGVhZGVyc1xuXHRcdFx0XHRmb3IgKCBpIGluIGhlYWRlcnMgKSB7XG5cdFx0XHRcdFx0eGhyLnNldFJlcXVlc3RIZWFkZXIoIGksIGhlYWRlcnNbIGkgXSApO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0Ly8gQ2FsbGJhY2tcblx0XHRcdFx0Y2FsbGJhY2sgPSBmdW5jdGlvbiggdHlwZSApIHtcblx0XHRcdFx0XHRyZXR1cm4gZnVuY3Rpb24oKSB7XG5cdFx0XHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdFx0XHRkZWxldGUgeGhyQ2FsbGJhY2tzWyBpZCBdO1xuXHRcdFx0XHRcdFx0XHRjYWxsYmFjayA9IHhoci5vbmxvYWQgPSB4aHIub25lcnJvciA9IG51bGw7XG5cblx0XHRcdFx0XHRcdFx0aWYgKCB0eXBlID09PSBcImFib3J0XCIgKSB7XG5cdFx0XHRcdFx0XHRcdFx0eGhyLmFib3J0KCk7XG5cdFx0XHRcdFx0XHRcdH0gZWxzZSBpZiAoIHR5cGUgPT09IFwiZXJyb3JcIiApIHtcblx0XHRcdFx0XHRcdFx0XHRjb21wbGV0ZShcblx0XHRcdFx0XHRcdFx0XHRcdC8vIGZpbGU6IHByb3RvY29sIGFsd2F5cyB5aWVsZHMgc3RhdHVzIDA7IHNlZSAjODYwNSwgIzE0MjA3XG5cdFx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzLFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyLnN0YXR1c1RleHRcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRcdGNvbXBsZXRlKFxuXHRcdFx0XHRcdFx0XHRcdFx0eGhyU3VjY2Vzc1N0YXR1c1sgeGhyLnN0YXR1cyBdIHx8IHhoci5zdGF0dXMsXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHIuc3RhdHVzVGV4dCxcblx0XHRcdFx0XHRcdFx0XHRcdC8vIFN1cHBvcnQ6IElFOVxuXHRcdFx0XHRcdFx0XHRcdFx0Ly8gQWNjZXNzaW5nIGJpbmFyeS1kYXRhIHJlc3BvbnNlVGV4dCB0aHJvd3MgYW4gZXhjZXB0aW9uXG5cdFx0XHRcdFx0XHRcdFx0XHQvLyAoIzExNDI2KVxuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZW9mIHhoci5yZXNwb25zZVRleHQgPT09IFwic3RyaW5nXCIgPyB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdHRleHQ6IHhoci5yZXNwb25zZVRleHRcblx0XHRcdFx0XHRcdFx0XHRcdH0gOiB1bmRlZmluZWQsXG5cdFx0XHRcdFx0XHRcdFx0XHR4aHIuZ2V0QWxsUmVzcG9uc2VIZWFkZXJzKClcblx0XHRcdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fTtcblxuXHRcdFx0XHQvLyBMaXN0ZW4gdG8gZXZlbnRzXG5cdFx0XHRcdHhoci5vbmxvYWQgPSBjYWxsYmFjaygpO1xuXHRcdFx0XHR4aHIub25lcnJvciA9IGNhbGxiYWNrKFwiZXJyb3JcIik7XG5cblx0XHRcdFx0Ly8gQ3JlYXRlIHRoZSBhYm9ydCBjYWxsYmFja1xuXHRcdFx0XHRjYWxsYmFjayA9IHhockNhbGxiYWNrc1sgaWQgXSA9IGNhbGxiYWNrKFwiYWJvcnRcIik7XG5cblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBEbyBzZW5kIHRoZSByZXF1ZXN0ICh0aGlzIG1heSByYWlzZSBhbiBleGNlcHRpb24pXG5cdFx0XHRcdFx0eGhyLnNlbmQoIG9wdGlvbnMuaGFzQ29udGVudCAmJiBvcHRpb25zLmRhdGEgfHwgbnVsbCApO1xuXHRcdFx0XHR9IGNhdGNoICggZSApIHtcblx0XHRcdFx0XHQvLyAjMTQ2ODM6IE9ubHkgcmV0aHJvdyBpZiB0aGlzIGhhc24ndCBiZWVuIG5vdGlmaWVkIGFzIGFuIGVycm9yIHlldFxuXHRcdFx0XHRcdGlmICggY2FsbGJhY2sgKSB7XG5cdFx0XHRcdFx0XHR0aHJvdyBlO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSxcblxuXHRcdFx0YWJvcnQ6IGZ1bmN0aW9uKCkge1xuXHRcdFx0XHRpZiAoIGNhbGxiYWNrICkge1xuXHRcdFx0XHRcdGNhbGxiYWNrKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9O1xuXHR9XG59KTtcblxuXG5cblxuLy8gSW5zdGFsbCBzY3JpcHQgZGF0YVR5cGVcbmpRdWVyeS5hamF4U2V0dXAoe1xuXHRhY2NlcHRzOiB7XG5cdFx0c2NyaXB0OiBcInRleHQvamF2YXNjcmlwdCwgYXBwbGljYXRpb24vamF2YXNjcmlwdCwgYXBwbGljYXRpb24vZWNtYXNjcmlwdCwgYXBwbGljYXRpb24veC1lY21hc2NyaXB0XCJcblx0fSxcblx0Y29udGVudHM6IHtcblx0XHRzY3JpcHQ6IC8oPzpqYXZhfGVjbWEpc2NyaXB0L1xuXHR9LFxuXHRjb252ZXJ0ZXJzOiB7XG5cdFx0XCJ0ZXh0IHNjcmlwdFwiOiBmdW5jdGlvbiggdGV4dCApIHtcblx0XHRcdGpRdWVyeS5nbG9iYWxFdmFsKCB0ZXh0ICk7XG5cdFx0XHRyZXR1cm4gdGV4dDtcblx0XHR9XG5cdH1cbn0pO1xuXG4vLyBIYW5kbGUgY2FjaGUncyBzcGVjaWFsIGNhc2UgYW5kIGNyb3NzRG9tYWluXG5qUXVlcnkuYWpheFByZWZpbHRlciggXCJzY3JpcHRcIiwgZnVuY3Rpb24oIHMgKSB7XG5cdGlmICggcy5jYWNoZSA9PT0gdW5kZWZpbmVkICkge1xuXHRcdHMuY2FjaGUgPSBmYWxzZTtcblx0fVxuXHRpZiAoIHMuY3Jvc3NEb21haW4gKSB7XG5cdFx0cy50eXBlID0gXCJHRVRcIjtcblx0fVxufSk7XG5cbi8vIEJpbmQgc2NyaXB0IHRhZyBoYWNrIHRyYW5zcG9ydFxualF1ZXJ5LmFqYXhUcmFuc3BvcnQoIFwic2NyaXB0XCIsIGZ1bmN0aW9uKCBzICkge1xuXHQvLyBUaGlzIHRyYW5zcG9ydCBvbmx5IGRlYWxzIHdpdGggY3Jvc3MgZG9tYWluIHJlcXVlc3RzXG5cdGlmICggcy5jcm9zc0RvbWFpbiApIHtcblx0XHR2YXIgc2NyaXB0LCBjYWxsYmFjaztcblx0XHRyZXR1cm4ge1xuXHRcdFx0c2VuZDogZnVuY3Rpb24oIF8sIGNvbXBsZXRlICkge1xuXHRcdFx0XHRzY3JpcHQgPSBqUXVlcnkoXCI8c2NyaXB0PlwiKS5wcm9wKHtcblx0XHRcdFx0XHRhc3luYzogdHJ1ZSxcblx0XHRcdFx0XHRjaGFyc2V0OiBzLnNjcmlwdENoYXJzZXQsXG5cdFx0XHRcdFx0c3JjOiBzLnVybFxuXHRcdFx0XHR9KS5vbihcblx0XHRcdFx0XHRcImxvYWQgZXJyb3JcIixcblx0XHRcdFx0XHRjYWxsYmFjayA9IGZ1bmN0aW9uKCBldnQgKSB7XG5cdFx0XHRcdFx0XHRzY3JpcHQucmVtb3ZlKCk7XG5cdFx0XHRcdFx0XHRjYWxsYmFjayA9IG51bGw7XG5cdFx0XHRcdFx0XHRpZiAoIGV2dCApIHtcblx0XHRcdFx0XHRcdFx0Y29tcGxldGUoIGV2dC50eXBlID09PSBcImVycm9yXCIgPyA0MDQgOiAyMDAsIGV2dC50eXBlICk7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHQpO1xuXHRcdFx0XHRkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKCBzY3JpcHRbIDAgXSApO1xuXHRcdFx0fSxcblx0XHRcdGFib3J0OiBmdW5jdGlvbigpIHtcblx0XHRcdFx0aWYgKCBjYWxsYmFjayApIHtcblx0XHRcdFx0XHRjYWxsYmFjaygpO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fTtcblx0fVxufSk7XG5cblxuXG5cbnZhciBvbGRDYWxsYmFja3MgPSBbXSxcblx0cmpzb25wID0gLyg9KVxcPyg/PSZ8JCl8XFw/XFw/LztcblxuLy8gRGVmYXVsdCBqc29ucCBzZXR0aW5nc1xualF1ZXJ5LmFqYXhTZXR1cCh7XG5cdGpzb25wOiBcImNhbGxiYWNrXCIsXG5cdGpzb25wQ2FsbGJhY2s6IGZ1bmN0aW9uKCkge1xuXHRcdHZhciBjYWxsYmFjayA9IG9sZENhbGxiYWNrcy5wb3AoKSB8fCAoIGpRdWVyeS5leHBhbmRvICsgXCJfXCIgKyAoIG5vbmNlKysgKSApO1xuXHRcdHRoaXNbIGNhbGxiYWNrIF0gPSB0cnVlO1xuXHRcdHJldHVybiBjYWxsYmFjaztcblx0fVxufSk7XG5cbi8vIERldGVjdCwgbm9ybWFsaXplIG9wdGlvbnMgYW5kIGluc3RhbGwgY2FsbGJhY2tzIGZvciBqc29ucCByZXF1ZXN0c1xualF1ZXJ5LmFqYXhQcmVmaWx0ZXIoIFwianNvbiBqc29ucFwiLCBmdW5jdGlvbiggcywgb3JpZ2luYWxTZXR0aW5ncywganFYSFIgKSB7XG5cblx0dmFyIGNhbGxiYWNrTmFtZSwgb3ZlcndyaXR0ZW4sIHJlc3BvbnNlQ29udGFpbmVyLFxuXHRcdGpzb25Qcm9wID0gcy5qc29ucCAhPT0gZmFsc2UgJiYgKCByanNvbnAudGVzdCggcy51cmwgKSA/XG5cdFx0XHRcInVybFwiIDpcblx0XHRcdHR5cGVvZiBzLmRhdGEgPT09IFwic3RyaW5nXCIgJiYgISggcy5jb250ZW50VHlwZSB8fCBcIlwiICkuaW5kZXhPZihcImFwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZFwiKSAmJiByanNvbnAudGVzdCggcy5kYXRhICkgJiYgXCJkYXRhXCJcblx0XHQpO1xuXG5cdC8vIEhhbmRsZSBpZmYgdGhlIGV4cGVjdGVkIGRhdGEgdHlwZSBpcyBcImpzb25wXCIgb3Igd2UgaGF2ZSBhIHBhcmFtZXRlciB0byBzZXRcblx0aWYgKCBqc29uUHJvcCB8fCBzLmRhdGFUeXBlc1sgMCBdID09PSBcImpzb25wXCIgKSB7XG5cblx0XHQvLyBHZXQgY2FsbGJhY2sgbmFtZSwgcmVtZW1iZXJpbmcgcHJlZXhpc3RpbmcgdmFsdWUgYXNzb2NpYXRlZCB3aXRoIGl0XG5cdFx0Y2FsbGJhY2tOYW1lID0gcy5qc29ucENhbGxiYWNrID0galF1ZXJ5LmlzRnVuY3Rpb24oIHMuanNvbnBDYWxsYmFjayApID9cblx0XHRcdHMuanNvbnBDYWxsYmFjaygpIDpcblx0XHRcdHMuanNvbnBDYWxsYmFjaztcblxuXHRcdC8vIEluc2VydCBjYWxsYmFjayBpbnRvIHVybCBvciBmb3JtIGRhdGFcblx0XHRpZiAoIGpzb25Qcm9wICkge1xuXHRcdFx0c1sganNvblByb3AgXSA9IHNbIGpzb25Qcm9wIF0ucmVwbGFjZSggcmpzb25wLCBcIiQxXCIgKyBjYWxsYmFja05hbWUgKTtcblx0XHR9IGVsc2UgaWYgKCBzLmpzb25wICE9PSBmYWxzZSApIHtcblx0XHRcdHMudXJsICs9ICggcnF1ZXJ5LnRlc3QoIHMudXJsICkgPyBcIiZcIiA6IFwiP1wiICkgKyBzLmpzb25wICsgXCI9XCIgKyBjYWxsYmFja05hbWU7XG5cdFx0fVxuXG5cdFx0Ly8gVXNlIGRhdGEgY29udmVydGVyIHRvIHJldHJpZXZlIGpzb24gYWZ0ZXIgc2NyaXB0IGV4ZWN1dGlvblxuXHRcdHMuY29udmVydGVyc1tcInNjcmlwdCBqc29uXCJdID0gZnVuY3Rpb24oKSB7XG5cdFx0XHRpZiAoICFyZXNwb25zZUNvbnRhaW5lciApIHtcblx0XHRcdFx0alF1ZXJ5LmVycm9yKCBjYWxsYmFja05hbWUgKyBcIiB3YXMgbm90IGNhbGxlZFwiICk7XG5cdFx0XHR9XG5cdFx0XHRyZXR1cm4gcmVzcG9uc2VDb250YWluZXJbIDAgXTtcblx0XHR9O1xuXG5cdFx0Ly8gZm9yY2UganNvbiBkYXRhVHlwZVxuXHRcdHMuZGF0YVR5cGVzWyAwIF0gPSBcImpzb25cIjtcblxuXHRcdC8vIEluc3RhbGwgY2FsbGJhY2tcblx0XHRvdmVyd3JpdHRlbiA9IHdpbmRvd1sgY2FsbGJhY2tOYW1lIF07XG5cdFx0d2luZG93WyBjYWxsYmFja05hbWUgXSA9IGZ1bmN0aW9uKCkge1xuXHRcdFx0cmVzcG9uc2VDb250YWluZXIgPSBhcmd1bWVudHM7XG5cdFx0fTtcblxuXHRcdC8vIENsZWFuLXVwIGZ1bmN0aW9uIChmaXJlcyBhZnRlciBjb252ZXJ0ZXJzKVxuXHRcdGpxWEhSLmFsd2F5cyhmdW5jdGlvbigpIHtcblx0XHRcdC8vIFJlc3RvcmUgcHJlZXhpc3RpbmcgdmFsdWVcblx0XHRcdHdpbmRvd1sgY2FsbGJhY2tOYW1lIF0gPSBvdmVyd3JpdHRlbjtcblxuXHRcdFx0Ly8gU2F2ZSBiYWNrIGFzIGZyZWVcblx0XHRcdGlmICggc1sgY2FsbGJhY2tOYW1lIF0gKSB7XG5cdFx0XHRcdC8vIG1ha2Ugc3VyZSB0aGF0IHJlLXVzaW5nIHRoZSBvcHRpb25zIGRvZXNuJ3Qgc2NyZXcgdGhpbmdzIGFyb3VuZFxuXHRcdFx0XHRzLmpzb25wQ2FsbGJhY2sgPSBvcmlnaW5hbFNldHRpbmdzLmpzb25wQ2FsbGJhY2s7XG5cblx0XHRcdFx0Ly8gc2F2ZSB0aGUgY2FsbGJhY2sgbmFtZSBmb3IgZnV0dXJlIHVzZVxuXHRcdFx0XHRvbGRDYWxsYmFja3MucHVzaCggY2FsbGJhY2tOYW1lICk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIENhbGwgaWYgaXQgd2FzIGEgZnVuY3Rpb24gYW5kIHdlIGhhdmUgYSByZXNwb25zZVxuXHRcdFx0aWYgKCByZXNwb25zZUNvbnRhaW5lciAmJiBqUXVlcnkuaXNGdW5jdGlvbiggb3ZlcndyaXR0ZW4gKSApIHtcblx0XHRcdFx0b3ZlcndyaXR0ZW4oIHJlc3BvbnNlQ29udGFpbmVyWyAwIF0gKTtcblx0XHRcdH1cblxuXHRcdFx0cmVzcG9uc2VDb250YWluZXIgPSBvdmVyd3JpdHRlbiA9IHVuZGVmaW5lZDtcblx0XHR9KTtcblxuXHRcdC8vIERlbGVnYXRlIHRvIHNjcmlwdFxuXHRcdHJldHVybiBcInNjcmlwdFwiO1xuXHR9XG59KTtcblxuXG5cblxuLy8gZGF0YTogc3RyaW5nIG9mIGh0bWxcbi8vIGNvbnRleHQgKG9wdGlvbmFsKTogSWYgc3BlY2lmaWVkLCB0aGUgZnJhZ21lbnQgd2lsbCBiZSBjcmVhdGVkIGluIHRoaXMgY29udGV4dCwgZGVmYXVsdHMgdG8gZG9jdW1lbnRcbi8vIGtlZXBTY3JpcHRzIChvcHRpb25hbCk6IElmIHRydWUsIHdpbGwgaW5jbHVkZSBzY3JpcHRzIHBhc3NlZCBpbiB0aGUgaHRtbCBzdHJpbmdcbmpRdWVyeS5wYXJzZUhUTUwgPSBmdW5jdGlvbiggZGF0YSwgY29udGV4dCwga2VlcFNjcmlwdHMgKSB7XG5cdGlmICggIWRhdGEgfHwgdHlwZW9mIGRhdGEgIT09IFwic3RyaW5nXCIgKSB7XG5cdFx0cmV0dXJuIG51bGw7XG5cdH1cblx0aWYgKCB0eXBlb2YgY29udGV4dCA9PT0gXCJib29sZWFuXCIgKSB7XG5cdFx0a2VlcFNjcmlwdHMgPSBjb250ZXh0O1xuXHRcdGNvbnRleHQgPSBmYWxzZTtcblx0fVxuXHRjb250ZXh0ID0gY29udGV4dCB8fCBkb2N1bWVudDtcblxuXHR2YXIgcGFyc2VkID0gcnNpbmdsZVRhZy5leGVjKCBkYXRhICksXG5cdFx0c2NyaXB0cyA9ICFrZWVwU2NyaXB0cyAmJiBbXTtcblxuXHQvLyBTaW5nbGUgdGFnXG5cdGlmICggcGFyc2VkICkge1xuXHRcdHJldHVybiBbIGNvbnRleHQuY3JlYXRlRWxlbWVudCggcGFyc2VkWzFdICkgXTtcblx0fVxuXG5cdHBhcnNlZCA9IGpRdWVyeS5idWlsZEZyYWdtZW50KCBbIGRhdGEgXSwgY29udGV4dCwgc2NyaXB0cyApO1xuXG5cdGlmICggc2NyaXB0cyAmJiBzY3JpcHRzLmxlbmd0aCApIHtcblx0XHRqUXVlcnkoIHNjcmlwdHMgKS5yZW1vdmUoKTtcblx0fVxuXG5cdHJldHVybiBqUXVlcnkubWVyZ2UoIFtdLCBwYXJzZWQuY2hpbGROb2RlcyApO1xufTtcblxuXG4vLyBLZWVwIGEgY29weSBvZiB0aGUgb2xkIGxvYWQgbWV0aG9kXG52YXIgX2xvYWQgPSBqUXVlcnkuZm4ubG9hZDtcblxuLyoqXG4gKiBMb2FkIGEgdXJsIGludG8gYSBwYWdlXG4gKi9cbmpRdWVyeS5mbi5sb2FkID0gZnVuY3Rpb24oIHVybCwgcGFyYW1zLCBjYWxsYmFjayApIHtcblx0aWYgKCB0eXBlb2YgdXJsICE9PSBcInN0cmluZ1wiICYmIF9sb2FkICkge1xuXHRcdHJldHVybiBfbG9hZC5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XG5cdH1cblxuXHR2YXIgc2VsZWN0b3IsIHR5cGUsIHJlc3BvbnNlLFxuXHRcdHNlbGYgPSB0aGlzLFxuXHRcdG9mZiA9IHVybC5pbmRleE9mKFwiIFwiKTtcblxuXHRpZiAoIG9mZiA+PSAwICkge1xuXHRcdHNlbGVjdG9yID0galF1ZXJ5LnRyaW0oIHVybC5zbGljZSggb2ZmICkgKTtcblx0XHR1cmwgPSB1cmwuc2xpY2UoIDAsIG9mZiApO1xuXHR9XG5cblx0Ly8gSWYgaXQncyBhIGZ1bmN0aW9uXG5cdGlmICggalF1ZXJ5LmlzRnVuY3Rpb24oIHBhcmFtcyApICkge1xuXG5cdFx0Ly8gV2UgYXNzdW1lIHRoYXQgaXQncyB0aGUgY2FsbGJhY2tcblx0XHRjYWxsYmFjayA9IHBhcmFtcztcblx0XHRwYXJhbXMgPSB1bmRlZmluZWQ7XG5cblx0Ly8gT3RoZXJ3aXNlLCBidWlsZCBhIHBhcmFtIHN0cmluZ1xuXHR9IGVsc2UgaWYgKCBwYXJhbXMgJiYgdHlwZW9mIHBhcmFtcyA9PT0gXCJvYmplY3RcIiApIHtcblx0XHR0eXBlID0gXCJQT1NUXCI7XG5cdH1cblxuXHQvLyBJZiB3ZSBoYXZlIGVsZW1lbnRzIHRvIG1vZGlmeSwgbWFrZSB0aGUgcmVxdWVzdFxuXHRpZiAoIHNlbGYubGVuZ3RoID4gMCApIHtcblx0XHRqUXVlcnkuYWpheCh7XG5cdFx0XHR1cmw6IHVybCxcblxuXHRcdFx0Ly8gaWYgXCJ0eXBlXCIgdmFyaWFibGUgaXMgdW5kZWZpbmVkLCB0aGVuIFwiR0VUXCIgbWV0aG9kIHdpbGwgYmUgdXNlZFxuXHRcdFx0dHlwZTogdHlwZSxcblx0XHRcdGRhdGFUeXBlOiBcImh0bWxcIixcblx0XHRcdGRhdGE6IHBhcmFtc1xuXHRcdH0pLmRvbmUoZnVuY3Rpb24oIHJlc3BvbnNlVGV4dCApIHtcblxuXHRcdFx0Ly8gU2F2ZSByZXNwb25zZSBmb3IgdXNlIGluIGNvbXBsZXRlIGNhbGxiYWNrXG5cdFx0XHRyZXNwb25zZSA9IGFyZ3VtZW50cztcblxuXHRcdFx0c2VsZi5odG1sKCBzZWxlY3RvciA/XG5cblx0XHRcdFx0Ly8gSWYgYSBzZWxlY3RvciB3YXMgc3BlY2lmaWVkLCBsb2NhdGUgdGhlIHJpZ2h0IGVsZW1lbnRzIGluIGEgZHVtbXkgZGl2XG5cdFx0XHRcdC8vIEV4Y2x1ZGUgc2NyaXB0cyB0byBhdm9pZCBJRSAnUGVybWlzc2lvbiBEZW5pZWQnIGVycm9yc1xuXHRcdFx0XHRqUXVlcnkoXCI8ZGl2PlwiKS5hcHBlbmQoIGpRdWVyeS5wYXJzZUhUTUwoIHJlc3BvbnNlVGV4dCApICkuZmluZCggc2VsZWN0b3IgKSA6XG5cblx0XHRcdFx0Ly8gT3RoZXJ3aXNlIHVzZSB0aGUgZnVsbCByZXN1bHRcblx0XHRcdFx0cmVzcG9uc2VUZXh0ICk7XG5cblx0XHR9KS5jb21wbGV0ZSggY2FsbGJhY2sgJiYgZnVuY3Rpb24oIGpxWEhSLCBzdGF0dXMgKSB7XG5cdFx0XHRzZWxmLmVhY2goIGNhbGxiYWNrLCByZXNwb25zZSB8fCBbIGpxWEhSLnJlc3BvbnNlVGV4dCwgc3RhdHVzLCBqcVhIUiBdICk7XG5cdFx0fSk7XG5cdH1cblxuXHRyZXR1cm4gdGhpcztcbn07XG5cblxuXG5cbi8vIEF0dGFjaCBhIGJ1bmNoIG9mIGZ1bmN0aW9ucyBmb3IgaGFuZGxpbmcgY29tbW9uIEFKQVggZXZlbnRzXG5qUXVlcnkuZWFjaCggWyBcImFqYXhTdGFydFwiLCBcImFqYXhTdG9wXCIsIFwiYWpheENvbXBsZXRlXCIsIFwiYWpheEVycm9yXCIsIFwiYWpheFN1Y2Nlc3NcIiwgXCJhamF4U2VuZFwiIF0sIGZ1bmN0aW9uKCBpLCB0eXBlICkge1xuXHRqUXVlcnkuZm5bIHR5cGUgXSA9IGZ1bmN0aW9uKCBmbiApIHtcblx0XHRyZXR1cm4gdGhpcy5vbiggdHlwZSwgZm4gKTtcblx0fTtcbn0pO1xuXG5cblxuXG5qUXVlcnkuZXhwci5maWx0ZXJzLmFuaW1hdGVkID0gZnVuY3Rpb24oIGVsZW0gKSB7XG5cdHJldHVybiBqUXVlcnkuZ3JlcChqUXVlcnkudGltZXJzLCBmdW5jdGlvbiggZm4gKSB7XG5cdFx0cmV0dXJuIGVsZW0gPT09IGZuLmVsZW07XG5cdH0pLmxlbmd0aDtcbn07XG5cblxuXG5cbnZhciBkb2NFbGVtID0gd2luZG93LmRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcblxuLyoqXG4gKiBHZXRzIGEgd2luZG93IGZyb20gYW4gZWxlbWVudFxuICovXG5mdW5jdGlvbiBnZXRXaW5kb3coIGVsZW0gKSB7XG5cdHJldHVybiBqUXVlcnkuaXNXaW5kb3coIGVsZW0gKSA/IGVsZW0gOiBlbGVtLm5vZGVUeXBlID09PSA5ICYmIGVsZW0uZGVmYXVsdFZpZXc7XG59XG5cbmpRdWVyeS5vZmZzZXQgPSB7XG5cdHNldE9mZnNldDogZnVuY3Rpb24oIGVsZW0sIG9wdGlvbnMsIGkgKSB7XG5cdFx0dmFyIGN1clBvc2l0aW9uLCBjdXJMZWZ0LCBjdXJDU1NUb3AsIGN1clRvcCwgY3VyT2Zmc2V0LCBjdXJDU1NMZWZ0LCBjYWxjdWxhdGVQb3NpdGlvbixcblx0XHRcdHBvc2l0aW9uID0galF1ZXJ5LmNzcyggZWxlbSwgXCJwb3NpdGlvblwiICksXG5cdFx0XHRjdXJFbGVtID0galF1ZXJ5KCBlbGVtICksXG5cdFx0XHRwcm9wcyA9IHt9O1xuXG5cdFx0Ly8gU2V0IHBvc2l0aW9uIGZpcnN0LCBpbi1jYXNlIHRvcC9sZWZ0IGFyZSBzZXQgZXZlbiBvbiBzdGF0aWMgZWxlbVxuXHRcdGlmICggcG9zaXRpb24gPT09IFwic3RhdGljXCIgKSB7XG5cdFx0XHRlbGVtLnN0eWxlLnBvc2l0aW9uID0gXCJyZWxhdGl2ZVwiO1xuXHRcdH1cblxuXHRcdGN1ck9mZnNldCA9IGN1ckVsZW0ub2Zmc2V0KCk7XG5cdFx0Y3VyQ1NTVG9wID0galF1ZXJ5LmNzcyggZWxlbSwgXCJ0b3BcIiApO1xuXHRcdGN1ckNTU0xlZnQgPSBqUXVlcnkuY3NzKCBlbGVtLCBcImxlZnRcIiApO1xuXHRcdGNhbGN1bGF0ZVBvc2l0aW9uID0gKCBwb3NpdGlvbiA9PT0gXCJhYnNvbHV0ZVwiIHx8IHBvc2l0aW9uID09PSBcImZpeGVkXCIgKSAmJlxuXHRcdFx0KCBjdXJDU1NUb3AgKyBjdXJDU1NMZWZ0ICkuaW5kZXhPZihcImF1dG9cIikgPiAtMTtcblxuXHRcdC8vIE5lZWQgdG8gYmUgYWJsZSB0byBjYWxjdWxhdGUgcG9zaXRpb24gaWYgZWl0aGVyXG5cdFx0Ly8gdG9wIG9yIGxlZnQgaXMgYXV0byBhbmQgcG9zaXRpb24gaXMgZWl0aGVyIGFic29sdXRlIG9yIGZpeGVkXG5cdFx0aWYgKCBjYWxjdWxhdGVQb3NpdGlvbiApIHtcblx0XHRcdGN1clBvc2l0aW9uID0gY3VyRWxlbS5wb3NpdGlvbigpO1xuXHRcdFx0Y3VyVG9wID0gY3VyUG9zaXRpb24udG9wO1xuXHRcdFx0Y3VyTGVmdCA9IGN1clBvc2l0aW9uLmxlZnQ7XG5cblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VyVG9wID0gcGFyc2VGbG9hdCggY3VyQ1NTVG9wICkgfHwgMDtcblx0XHRcdGN1ckxlZnQgPSBwYXJzZUZsb2F0KCBjdXJDU1NMZWZ0ICkgfHwgMDtcblx0XHR9XG5cblx0XHRpZiAoIGpRdWVyeS5pc0Z1bmN0aW9uKCBvcHRpb25zICkgKSB7XG5cdFx0XHRvcHRpb25zID0gb3B0aW9ucy5jYWxsKCBlbGVtLCBpLCBjdXJPZmZzZXQgKTtcblx0XHR9XG5cblx0XHRpZiAoIG9wdGlvbnMudG9wICE9IG51bGwgKSB7XG5cdFx0XHRwcm9wcy50b3AgPSAoIG9wdGlvbnMudG9wIC0gY3VyT2Zmc2V0LnRvcCApICsgY3VyVG9wO1xuXHRcdH1cblx0XHRpZiAoIG9wdGlvbnMubGVmdCAhPSBudWxsICkge1xuXHRcdFx0cHJvcHMubGVmdCA9ICggb3B0aW9ucy5sZWZ0IC0gY3VyT2Zmc2V0LmxlZnQgKSArIGN1ckxlZnQ7XG5cdFx0fVxuXG5cdFx0aWYgKCBcInVzaW5nXCIgaW4gb3B0aW9ucyApIHtcblx0XHRcdG9wdGlvbnMudXNpbmcuY2FsbCggZWxlbSwgcHJvcHMgKTtcblxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjdXJFbGVtLmNzcyggcHJvcHMgKTtcblx0XHR9XG5cdH1cbn07XG5cbmpRdWVyeS5mbi5leHRlbmQoe1xuXHRvZmZzZXQ6IGZ1bmN0aW9uKCBvcHRpb25zICkge1xuXHRcdGlmICggYXJndW1lbnRzLmxlbmd0aCApIHtcblx0XHRcdHJldHVybiBvcHRpb25zID09PSB1bmRlZmluZWQgP1xuXHRcdFx0XHR0aGlzIDpcblx0XHRcdFx0dGhpcy5lYWNoKGZ1bmN0aW9uKCBpICkge1xuXHRcdFx0XHRcdGpRdWVyeS5vZmZzZXQuc2V0T2Zmc2V0KCB0aGlzLCBvcHRpb25zLCBpICk7XG5cdFx0XHRcdH0pO1xuXHRcdH1cblxuXHRcdHZhciBkb2NFbGVtLCB3aW4sXG5cdFx0XHRlbGVtID0gdGhpc1sgMCBdLFxuXHRcdFx0Ym94ID0geyB0b3A6IDAsIGxlZnQ6IDAgfSxcblx0XHRcdGRvYyA9IGVsZW0gJiYgZWxlbS5vd25lckRvY3VtZW50O1xuXG5cdFx0aWYgKCAhZG9jICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdGRvY0VsZW0gPSBkb2MuZG9jdW1lbnRFbGVtZW50O1xuXG5cdFx0Ly8gTWFrZSBzdXJlIGl0J3Mgbm90IGEgZGlzY29ubmVjdGVkIERPTSBub2RlXG5cdFx0aWYgKCAhalF1ZXJ5LmNvbnRhaW5zKCBkb2NFbGVtLCBlbGVtICkgKSB7XG5cdFx0XHRyZXR1cm4gYm94O1xuXHRcdH1cblxuXHRcdC8vIFN1cHBvcnQ6IEJsYWNrQmVycnkgNSwgaU9TIDMgKG9yaWdpbmFsIGlQaG9uZSlcblx0XHQvLyBJZiB3ZSBkb24ndCBoYXZlIGdCQ1IsIGp1c3QgdXNlIDAsMCByYXRoZXIgdGhhbiBlcnJvclxuXHRcdGlmICggdHlwZW9mIGVsZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0ICE9PSBzdHJ1bmRlZmluZWQgKSB7XG5cdFx0XHRib3ggPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXHRcdH1cblx0XHR3aW4gPSBnZXRXaW5kb3coIGRvYyApO1xuXHRcdHJldHVybiB7XG5cdFx0XHR0b3A6IGJveC50b3AgKyB3aW4ucGFnZVlPZmZzZXQgLSBkb2NFbGVtLmNsaWVudFRvcCxcblx0XHRcdGxlZnQ6IGJveC5sZWZ0ICsgd2luLnBhZ2VYT2Zmc2V0IC0gZG9jRWxlbS5jbGllbnRMZWZ0XG5cdFx0fTtcblx0fSxcblxuXHRwb3NpdGlvbjogZnVuY3Rpb24oKSB7XG5cdFx0aWYgKCAhdGhpc1sgMCBdICkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblxuXHRcdHZhciBvZmZzZXRQYXJlbnQsIG9mZnNldCxcblx0XHRcdGVsZW0gPSB0aGlzWyAwIF0sXG5cdFx0XHRwYXJlbnRPZmZzZXQgPSB7IHRvcDogMCwgbGVmdDogMCB9O1xuXG5cdFx0Ly8gRml4ZWQgZWxlbWVudHMgYXJlIG9mZnNldCBmcm9tIHdpbmRvdyAocGFyZW50T2Zmc2V0ID0ge3RvcDowLCBsZWZ0OiAwfSwgYmVjYXVzZSBpdCBpcyBpdHMgb25seSBvZmZzZXQgcGFyZW50XG5cdFx0aWYgKCBqUXVlcnkuY3NzKCBlbGVtLCBcInBvc2l0aW9uXCIgKSA9PT0gXCJmaXhlZFwiICkge1xuXHRcdFx0Ly8gQXNzdW1lIGdldEJvdW5kaW5nQ2xpZW50UmVjdCBpcyB0aGVyZSB3aGVuIGNvbXB1dGVkIHBvc2l0aW9uIGlzIGZpeGVkXG5cdFx0XHRvZmZzZXQgPSBlbGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuXG5cdFx0fSBlbHNlIHtcblx0XHRcdC8vIEdldCAqcmVhbCogb2Zmc2V0UGFyZW50XG5cdFx0XHRvZmZzZXRQYXJlbnQgPSB0aGlzLm9mZnNldFBhcmVudCgpO1xuXG5cdFx0XHQvLyBHZXQgY29ycmVjdCBvZmZzZXRzXG5cdFx0XHRvZmZzZXQgPSB0aGlzLm9mZnNldCgpO1xuXHRcdFx0aWYgKCAhalF1ZXJ5Lm5vZGVOYW1lKCBvZmZzZXRQYXJlbnRbIDAgXSwgXCJodG1sXCIgKSApIHtcblx0XHRcdFx0cGFyZW50T2Zmc2V0ID0gb2Zmc2V0UGFyZW50Lm9mZnNldCgpO1xuXHRcdFx0fVxuXG5cdFx0XHQvLyBBZGQgb2Zmc2V0UGFyZW50IGJvcmRlcnNcblx0XHRcdHBhcmVudE9mZnNldC50b3AgKz0galF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50WyAwIF0sIFwiYm9yZGVyVG9wV2lkdGhcIiwgdHJ1ZSApO1xuXHRcdFx0cGFyZW50T2Zmc2V0LmxlZnQgKz0galF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50WyAwIF0sIFwiYm9yZGVyTGVmdFdpZHRoXCIsIHRydWUgKTtcblx0XHR9XG5cblx0XHQvLyBTdWJ0cmFjdCBwYXJlbnQgb2Zmc2V0cyBhbmQgZWxlbWVudCBtYXJnaW5zXG5cdFx0cmV0dXJuIHtcblx0XHRcdHRvcDogb2Zmc2V0LnRvcCAtIHBhcmVudE9mZnNldC50b3AgLSBqUXVlcnkuY3NzKCBlbGVtLCBcIm1hcmdpblRvcFwiLCB0cnVlICksXG5cdFx0XHRsZWZ0OiBvZmZzZXQubGVmdCAtIHBhcmVudE9mZnNldC5sZWZ0IC0galF1ZXJ5LmNzcyggZWxlbSwgXCJtYXJnaW5MZWZ0XCIsIHRydWUgKVxuXHRcdH07XG5cdH0sXG5cblx0b2Zmc2V0UGFyZW50OiBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24oKSB7XG5cdFx0XHR2YXIgb2Zmc2V0UGFyZW50ID0gdGhpcy5vZmZzZXRQYXJlbnQgfHwgZG9jRWxlbTtcblxuXHRcdFx0d2hpbGUgKCBvZmZzZXRQYXJlbnQgJiYgKCAhalF1ZXJ5Lm5vZGVOYW1lKCBvZmZzZXRQYXJlbnQsIFwiaHRtbFwiICkgJiYgalF1ZXJ5LmNzcyggb2Zmc2V0UGFyZW50LCBcInBvc2l0aW9uXCIgKSA9PT0gXCJzdGF0aWNcIiApICkge1xuXHRcdFx0XHRvZmZzZXRQYXJlbnQgPSBvZmZzZXRQYXJlbnQub2Zmc2V0UGFyZW50O1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gb2Zmc2V0UGFyZW50IHx8IGRvY0VsZW07XG5cdFx0fSk7XG5cdH1cbn0pO1xuXG4vLyBDcmVhdGUgc2Nyb2xsTGVmdCBhbmQgc2Nyb2xsVG9wIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IHNjcm9sbExlZnQ6IFwicGFnZVhPZmZzZXRcIiwgc2Nyb2xsVG9wOiBcInBhZ2VZT2Zmc2V0XCIgfSwgZnVuY3Rpb24oIG1ldGhvZCwgcHJvcCApIHtcblx0dmFyIHRvcCA9IFwicGFnZVlPZmZzZXRcIiA9PT0gcHJvcDtcblxuXHRqUXVlcnkuZm5bIG1ldGhvZCBdID0gZnVuY3Rpb24oIHZhbCApIHtcblx0XHRyZXR1cm4gYWNjZXNzKCB0aGlzLCBmdW5jdGlvbiggZWxlbSwgbWV0aG9kLCB2YWwgKSB7XG5cdFx0XHR2YXIgd2luID0gZ2V0V2luZG93KCBlbGVtICk7XG5cblx0XHRcdGlmICggdmFsID09PSB1bmRlZmluZWQgKSB7XG5cdFx0XHRcdHJldHVybiB3aW4gPyB3aW5bIHByb3AgXSA6IGVsZW1bIG1ldGhvZCBdO1xuXHRcdFx0fVxuXG5cdFx0XHRpZiAoIHdpbiApIHtcblx0XHRcdFx0d2luLnNjcm9sbFRvKFxuXHRcdFx0XHRcdCF0b3AgPyB2YWwgOiB3aW5kb3cucGFnZVhPZmZzZXQsXG5cdFx0XHRcdFx0dG9wID8gdmFsIDogd2luZG93LnBhZ2VZT2Zmc2V0XG5cdFx0XHRcdCk7XG5cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGVsZW1bIG1ldGhvZCBdID0gdmFsO1xuXHRcdFx0fVxuXHRcdH0sIG1ldGhvZCwgdmFsLCBhcmd1bWVudHMubGVuZ3RoLCBudWxsICk7XG5cdH07XG59KTtcblxuLy8gU3VwcG9ydDogU2FmYXJpPDcrLCBDaHJvbWU8MzcrXG4vLyBBZGQgdGhlIHRvcC9sZWZ0IGNzc0hvb2tzIHVzaW5nIGpRdWVyeS5mbi5wb3NpdGlvblxuLy8gV2Via2l0IGJ1ZzogaHR0cHM6Ly9idWdzLndlYmtpdC5vcmcvc2hvd19idWcuY2dpP2lkPTI5MDg0XG4vLyBCbGluayBidWc6IGh0dHBzOi8vY29kZS5nb29nbGUuY29tL3AvY2hyb21pdW0vaXNzdWVzL2RldGFpbD9pZD0yMjkyODBcbi8vIGdldENvbXB1dGVkU3R5bGUgcmV0dXJucyBwZXJjZW50IHdoZW4gc3BlY2lmaWVkIGZvciB0b3AvbGVmdC9ib3R0b20vcmlnaHQ7XG4vLyByYXRoZXIgdGhhbiBtYWtlIHRoZSBjc3MgbW9kdWxlIGRlcGVuZCBvbiB0aGUgb2Zmc2V0IG1vZHVsZSwganVzdCBjaGVjayBmb3IgaXQgaGVyZVxualF1ZXJ5LmVhY2goIFsgXCJ0b3BcIiwgXCJsZWZ0XCIgXSwgZnVuY3Rpb24oIGksIHByb3AgKSB7XG5cdGpRdWVyeS5jc3NIb29rc1sgcHJvcCBdID0gYWRkR2V0SG9va0lmKCBzdXBwb3J0LnBpeGVsUG9zaXRpb24sXG5cdFx0ZnVuY3Rpb24oIGVsZW0sIGNvbXB1dGVkICkge1xuXHRcdFx0aWYgKCBjb21wdXRlZCApIHtcblx0XHRcdFx0Y29tcHV0ZWQgPSBjdXJDU1MoIGVsZW0sIHByb3AgKTtcblx0XHRcdFx0Ly8gSWYgY3VyQ1NTIHJldHVybnMgcGVyY2VudGFnZSwgZmFsbGJhY2sgdG8gb2Zmc2V0XG5cdFx0XHRcdHJldHVybiBybnVtbm9ucHgudGVzdCggY29tcHV0ZWQgKSA/XG5cdFx0XHRcdFx0alF1ZXJ5KCBlbGVtICkucG9zaXRpb24oKVsgcHJvcCBdICsgXCJweFwiIDpcblx0XHRcdFx0XHRjb21wdXRlZDtcblx0XHRcdH1cblx0XHR9XG5cdCk7XG59KTtcblxuXG4vLyBDcmVhdGUgaW5uZXJIZWlnaHQsIGlubmVyV2lkdGgsIGhlaWdodCwgd2lkdGgsIG91dGVySGVpZ2h0IGFuZCBvdXRlcldpZHRoIG1ldGhvZHNcbmpRdWVyeS5lYWNoKCB7IEhlaWdodDogXCJoZWlnaHRcIiwgV2lkdGg6IFwid2lkdGhcIiB9LCBmdW5jdGlvbiggbmFtZSwgdHlwZSApIHtcblx0alF1ZXJ5LmVhY2goIHsgcGFkZGluZzogXCJpbm5lclwiICsgbmFtZSwgY29udGVudDogdHlwZSwgXCJcIjogXCJvdXRlclwiICsgbmFtZSB9LCBmdW5jdGlvbiggZGVmYXVsdEV4dHJhLCBmdW5jTmFtZSApIHtcblx0XHQvLyBNYXJnaW4gaXMgb25seSBmb3Igb3V0ZXJIZWlnaHQsIG91dGVyV2lkdGhcblx0XHRqUXVlcnkuZm5bIGZ1bmNOYW1lIF0gPSBmdW5jdGlvbiggbWFyZ2luLCB2YWx1ZSApIHtcblx0XHRcdHZhciBjaGFpbmFibGUgPSBhcmd1bWVudHMubGVuZ3RoICYmICggZGVmYXVsdEV4dHJhIHx8IHR5cGVvZiBtYXJnaW4gIT09IFwiYm9vbGVhblwiICksXG5cdFx0XHRcdGV4dHJhID0gZGVmYXVsdEV4dHJhIHx8ICggbWFyZ2luID09PSB0cnVlIHx8IHZhbHVlID09PSB0cnVlID8gXCJtYXJnaW5cIiA6IFwiYm9yZGVyXCIgKTtcblxuXHRcdFx0cmV0dXJuIGFjY2VzcyggdGhpcywgZnVuY3Rpb24oIGVsZW0sIHR5cGUsIHZhbHVlICkge1xuXHRcdFx0XHR2YXIgZG9jO1xuXG5cdFx0XHRcdGlmICggalF1ZXJ5LmlzV2luZG93KCBlbGVtICkgKSB7XG5cdFx0XHRcdFx0Ly8gQXMgb2YgNS84LzIwMTIgdGhpcyB3aWxsIHlpZWxkIGluY29ycmVjdCByZXN1bHRzIGZvciBNb2JpbGUgU2FmYXJpLCBidXQgdGhlcmVcblx0XHRcdFx0XHQvLyBpc24ndCBhIHdob2xlIGxvdCB3ZSBjYW4gZG8uIFNlZSBwdWxsIHJlcXVlc3QgYXQgdGhpcyBVUkwgZm9yIGRpc2N1c3Npb246XG5cdFx0XHRcdFx0Ly8gaHR0cHM6Ly9naXRodWIuY29tL2pxdWVyeS9qcXVlcnkvcHVsbC83NjRcblx0XHRcdFx0XHRyZXR1cm4gZWxlbS5kb2N1bWVudC5kb2N1bWVudEVsZW1lbnRbIFwiY2xpZW50XCIgKyBuYW1lIF07XG5cdFx0XHRcdH1cblxuXHRcdFx0XHQvLyBHZXQgZG9jdW1lbnQgd2lkdGggb3IgaGVpZ2h0XG5cdFx0XHRcdGlmICggZWxlbS5ub2RlVHlwZSA9PT0gOSApIHtcblx0XHRcdFx0XHRkb2MgPSBlbGVtLmRvY3VtZW50RWxlbWVudDtcblxuXHRcdFx0XHRcdC8vIEVpdGhlciBzY3JvbGxbV2lkdGgvSGVpZ2h0XSBvciBvZmZzZXRbV2lkdGgvSGVpZ2h0XSBvciBjbGllbnRbV2lkdGgvSGVpZ2h0XSxcblx0XHRcdFx0XHQvLyB3aGljaGV2ZXIgaXMgZ3JlYXRlc3Rcblx0XHRcdFx0XHRyZXR1cm4gTWF0aC5tYXgoXG5cdFx0XHRcdFx0XHRlbGVtLmJvZHlbIFwic2Nyb2xsXCIgKyBuYW1lIF0sIGRvY1sgXCJzY3JvbGxcIiArIG5hbWUgXSxcblx0XHRcdFx0XHRcdGVsZW0uYm9keVsgXCJvZmZzZXRcIiArIG5hbWUgXSwgZG9jWyBcIm9mZnNldFwiICsgbmFtZSBdLFxuXHRcdFx0XHRcdFx0ZG9jWyBcImNsaWVudFwiICsgbmFtZSBdXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdHJldHVybiB2YWx1ZSA9PT0gdW5kZWZpbmVkID9cblx0XHRcdFx0XHQvLyBHZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50LCByZXF1ZXN0aW5nIGJ1dCBub3QgZm9yY2luZyBwYXJzZUZsb2F0XG5cdFx0XHRcdFx0alF1ZXJ5LmNzcyggZWxlbSwgdHlwZSwgZXh0cmEgKSA6XG5cblx0XHRcdFx0XHQvLyBTZXQgd2lkdGggb3IgaGVpZ2h0IG9uIHRoZSBlbGVtZW50XG5cdFx0XHRcdFx0alF1ZXJ5LnN0eWxlKCBlbGVtLCB0eXBlLCB2YWx1ZSwgZXh0cmEgKTtcblx0XHRcdH0sIHR5cGUsIGNoYWluYWJsZSA/IG1hcmdpbiA6IHVuZGVmaW5lZCwgY2hhaW5hYmxlLCBudWxsICk7XG5cdFx0fTtcblx0fSk7XG59KTtcblxuXG4vLyBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIGNvbnRhaW5lZCBpbiB0aGUgbWF0Y2hlZCBlbGVtZW50IHNldFxualF1ZXJ5LmZuLnNpemUgPSBmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXMubGVuZ3RoO1xufTtcblxualF1ZXJ5LmZuLmFuZFNlbGYgPSBqUXVlcnkuZm4uYWRkQmFjaztcblxuXG5cblxuLy8gUmVnaXN0ZXIgYXMgYSBuYW1lZCBBTUQgbW9kdWxlLCBzaW5jZSBqUXVlcnkgY2FuIGJlIGNvbmNhdGVuYXRlZCB3aXRoIG90aGVyXG4vLyBmaWxlcyB0aGF0IG1heSB1c2UgZGVmaW5lLCBidXQgbm90IHZpYSBhIHByb3BlciBjb25jYXRlbmF0aW9uIHNjcmlwdCB0aGF0XG4vLyB1bmRlcnN0YW5kcyBhbm9ueW1vdXMgQU1EIG1vZHVsZXMuIEEgbmFtZWQgQU1EIGlzIHNhZmVzdCBhbmQgbW9zdCByb2J1c3Rcbi8vIHdheSB0byByZWdpc3Rlci4gTG93ZXJjYXNlIGpxdWVyeSBpcyB1c2VkIGJlY2F1c2UgQU1EIG1vZHVsZSBuYW1lcyBhcmVcbi8vIGRlcml2ZWQgZnJvbSBmaWxlIG5hbWVzLCBhbmQgalF1ZXJ5IGlzIG5vcm1hbGx5IGRlbGl2ZXJlZCBpbiBhIGxvd2VyY2FzZVxuLy8gZmlsZSBuYW1lLiBEbyB0aGlzIGFmdGVyIGNyZWF0aW5nIHRoZSBnbG9iYWwgc28gdGhhdCBpZiBhbiBBTUQgbW9kdWxlIHdhbnRzXG4vLyB0byBjYWxsIG5vQ29uZmxpY3QgdG8gaGlkZSB0aGlzIHZlcnNpb24gb2YgalF1ZXJ5LCBpdCB3aWxsIHdvcmsuXG5cbi8vIE5vdGUgdGhhdCBmb3IgbWF4aW11bSBwb3J0YWJpbGl0eSwgbGlicmFyaWVzIHRoYXQgYXJlIG5vdCBqUXVlcnkgc2hvdWxkXG4vLyBkZWNsYXJlIHRoZW1zZWx2ZXMgYXMgYW5vbnltb3VzIG1vZHVsZXMsIGFuZCBhdm9pZCBzZXR0aW5nIGEgZ2xvYmFsIGlmIGFuXG4vLyBBTUQgbG9hZGVyIGlzIHByZXNlbnQuIGpRdWVyeSBpcyBhIHNwZWNpYWwgY2FzZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZVxuLy8gaHR0cHM6Ly9naXRodWIuY29tL2pyYnVya2UvcmVxdWlyZWpzL3dpa2kvVXBkYXRpbmctZXhpc3RpbmctbGlicmFyaWVzI3dpa2ktYW5vblxuXG5pZiAoIHR5cGVvZiBkZWZpbmUgPT09IFwiZnVuY3Rpb25cIiAmJiBkZWZpbmUuYW1kICkge1xuXHRkZWZpbmUoIFwianF1ZXJ5XCIsIFtdLCBmdW5jdGlvbigpIHtcblx0XHRyZXR1cm4galF1ZXJ5O1xuXHR9KTtcbn1cblxuXG5cblxudmFyXG5cdC8vIE1hcCBvdmVyIGpRdWVyeSBpbiBjYXNlIG9mIG92ZXJ3cml0ZVxuXHRfalF1ZXJ5ID0gd2luZG93LmpRdWVyeSxcblxuXHQvLyBNYXAgb3ZlciB0aGUgJCBpbiBjYXNlIG9mIG92ZXJ3cml0ZVxuXHRfJCA9IHdpbmRvdy4kO1xuXG5qUXVlcnkubm9Db25mbGljdCA9IGZ1bmN0aW9uKCBkZWVwICkge1xuXHRpZiAoIHdpbmRvdy4kID09PSBqUXVlcnkgKSB7XG5cdFx0d2luZG93LiQgPSBfJDtcblx0fVxuXG5cdGlmICggZGVlcCAmJiB3aW5kb3cualF1ZXJ5ID09PSBqUXVlcnkgKSB7XG5cdFx0d2luZG93LmpRdWVyeSA9IF9qUXVlcnk7XG5cdH1cblxuXHRyZXR1cm4galF1ZXJ5O1xufTtcblxuLy8gRXhwb3NlIGpRdWVyeSBhbmQgJCBpZGVudGlmaWVycywgZXZlbiBpbiBBTURcbi8vICgjNzEwMiNjb21tZW50OjEwLCBodHRwczovL2dpdGh1Yi5jb20vanF1ZXJ5L2pxdWVyeS9wdWxsLzU1Nylcbi8vIGFuZCBDb21tb25KUyBmb3IgYnJvd3NlciBlbXVsYXRvcnMgKCMxMzU2NilcbmlmICggdHlwZW9mIG5vR2xvYmFsID09PSBzdHJ1bmRlZmluZWQgKSB7XG5cdHdpbmRvdy5qUXVlcnkgPSB3aW5kb3cuJCA9IGpRdWVyeTtcbn1cblxuXG5cblxucmV0dXJuIGpRdWVyeTtcblxufSkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vbm9kZV9tb2R1bGVzL2pxdWVyeS9kaXN0L2pxdWVyeS5qcyIsIi8qKlxyXG4gKiDkvZznlKjln5/lnKjpmpTnprvnmoR3aW5kb3fnjq/looPkuItcclxuICogXHJcbiAqIFxyXG4gKiBcclxuICogXHJcbiAqL1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRXZlbnQgfSBmcm9tIFwiLi4vLi4vdXRpbHMvdXRpbHNcIjtcclxuXHJcbmxldCB1cmxUb2tlbiA9IG51bGw7XHJcblxyXG5jb25zdCB1cmxGdW5NYXAgPSB7XHJcbiAgJy8nICgpIHtcclxuICAgIC8vICQoICdmb3JtLmxvZ2luX2Zvcm0gLm1wdWktZm9ybV9faW5wdXRbbmFtZT1cImFjY291bnRcIl0nIClcclxuICAgIC8vICAgLnZhbCggJ3h4eHh4eHgnIClbIDAgXVxyXG4gICAgLy8gICAuZGlzcGF0Y2hFdmVudCggY3JlYXRlQ3VzdG9tRXZlbnQoICdpbnB1dCcgKSApXHJcblxyXG4gICAgLy8gJCggJ2Zvcm0ubG9naW5fZm9ybSAubXB1aS1mb3JtX19pbnB1dFtuYW1lPVwicGFzc3dvcmRcIl0nIClcclxuICAgIC8vICAgLnZhbCggJ3h4eHh4JyApWyAwIF1cclxuICAgIC8vICAgLmRpc3BhdGNoRXZlbnQoIGNyZWF0ZUN1c3RvbUV2ZW50KCAnaW5wdXQnICkgKVxyXG5cclxuICAgIC8vICQoICdmb3JtLmxvZ2luX2Zvcm0gLmJ0bl9sb2dpbicgKVsgMCBdXHJcbiAgICAvLyAgIC5kaXNwYXRjaEV2ZW50KCBuZXcgRXZlbnQoICdjbGljaycgKSApO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgIGV2ZW50OiAnZW50ZXJlZEluZGV4J1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgJy9jZ2ktYmluL2JpemxvZ2luJyAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAvLyDmiavnoIFcclxuICAgICAgZXZlbnQ6ICdzY2FuQ29kZScsXHJcbiAgICAgIGRhdGE6IHtcclxuICAgICAgICBzcmM6ICQoICcucXJjb2RlLmpzX3FyY29kZScgKS5wcm9wKCAnc3JjJyApXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIC8qKlxyXG4gICAqIOi/m+WFpemmlumhteeahOaTjeS9nFxyXG4gICAqIFxyXG4gICAqL1xyXG4gICcvY2dpLWJpbi9ob21lJyAoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBldmVudDogJ2VudGVyZWRIb21lJ1xyXG4gICAgfVxyXG4gIH0sXHJcbiAgJy9jZ2ktYmluL2FwcG1zZyc6IHtcclxuICAgICdtZWRpYS9hcHBtc2dfZWRpdF92MicgKCkge1xyXG5cclxuICAgICAgcmV0dXJuIHtcclxuICAgICAgICBldmVudDogJ2VudGVyZWRFZGl0b3InXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDlpITnkIblvq7kv6Hmr4/kuKrpobXpnaLliJ3lp4vljJbopoHlgZrnmoTkuotcclxuICogXHJcbiAqIEBleHBvcnRcclxuICogQHBhcmFtIHthbnl9IHVybCBcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uKCBsb2NhdGlvbiApIHtcclxuICBsZXQge1xyXG4gICAgcGF0aG5hbWUsXHJcbiAgICBvcmlnaW4sXHJcbiAgICBob3N0bmFtZSxcclxuICAgIHNlYXJjaFxyXG4gIH0gPSBsb2NhdGlvbjtcclxuXHJcbiAgbGV0IGhhbmRsZXIgPSB1cmxGdW5NYXBbIHBhdGhuYW1lIF07XHJcblxyXG4gIGxldCBzZWFyY2hNYXAgPSB7fTtcclxuXHJcbiAgc2VhcmNoLnN1YnN0ciggMSwgSW5maW5pdHkgKS5zcGxpdCggJyYnICkuZm9yRWFjaCggaXRlbSA9PiB7XHJcbiAgICBsZXQgWyBrZXksIHZhbHVlIF0gPSBpdGVtLnNwbGl0KCAnPScgKTtcclxuICAgIHNlYXJjaE1hcFsga2V5IF0gPSB2YWx1ZTtcclxuICB9ICk7XHJcbiAgdXJsVG9rZW4gPSBzZWFyY2hNYXBbICd0b2tlbicgXVxyXG5cclxuICBpZiAoIHR5cGVvZiBoYW5kbGVyICE9PSAnZnVuY3Rpb24nICYmIHNlYXJjaE1hcC50ICkge1xyXG4gICAgaGFuZGxlciA9IGhhbmRsZXJbIHNlYXJjaE1hcC50IF07XHJcbiAgfVxyXG5cclxuICByZXR1cm4gaGFuZGxlciAmJiBoYW5kbGVyKCBzZWFyY2hNYXAgKTtcclxufVxyXG5cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBnb1BhZ2UoIHVybCApIHtcclxuICBsb2NhdGlvbi5ocmVmID0gYCR7dXJsfSR7dXJsVG9rZW59YFxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbGF0Zm9ybS93ZWl4aW4vd3hSb3V0ZXJNYXBwaW5nLmpzIiwiLyoqXHJcbiAqIOWIm+W7uuS4gOS4quiHquWumuS5ieS6i+S7tlxyXG4gKiBcclxuICogQGV4cG9ydFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gW2V2ZW50TmFtZT0nY2xpY2snXSBcclxuICogQHBhcmFtIHtib29sZWFufSBbcDI9dHJ1ZV0gXHJcbiAqIEBwYXJhbSB7Ym9vbGVhbn0gW3AzPXRydWVdIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDdXN0b21FdmVudCggZXZlbnROYW1lLCBkYXRhICkge1xyXG4gIGRhdGEgPSBkYXRhIHx8IHt9XHJcbiAgLy8gbGV0IGN1c3RvbUV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoICdFdmVudCcgKVxyXG4gIC8vIGN1c3RvbUV2ZW50LmluaXRFdmVudCggZXZlbnROYW1lLCBwMiwgcDMgKVxyXG4gIHJldHVybiBuZXcgQ3VzdG9tRXZlbnQoIGV2ZW50TmFtZSwgZGF0YS5kZXRhaWwgPyBkYXRhIDogeyBkZXRhaWw6IGRhdGEgfSApXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3V0aWxzL3V0aWxzLmpzIiwiaW1wb3J0IHsgY3JlYXRlQ3VzdG9tRXZlbnQgfSBmcm9tIFwiLi4vdXRpbHMvdXRpbHNcIjtcclxuaW1wb3J0IHdlY2hhdF9wYWdlRXZlbnQgZnJvbSAnLi4vcGxhdGZvcm0vd2VpeGluL3BhZ2VFdmVudEhhbmRsZXInO1xyXG5pbXBvcnQgd2VjaGF0X2JpZ3dlUGFnZUV2ZW50IGZyb20gJy4uL3BsYXRmb3JtL3dlaXhpbi9iaWd3ZVBhZ2VFdmVudEhhbmRsZXInO1xyXG5pbXBvcnQgeyBvbk1lc3NhZ2VGcm9tQmFja2dyb3VuZCB9IGZyb20gXCIuL21peGluXCI7XHJcblxyXG5mdW5jdGlvbiBzZW5kTWVzc2FnZVRvUGFnZSggcmVxdWVzdCApIHtcclxuICBkb2N1bWVudC5ib2R5LmRpc3BhdGNoRXZlbnQoIGNyZWF0ZUN1c3RvbUV2ZW50KCAnZXh0ZW5zaW9uQnJvd2VyRXZlbnQnLCB7IGRldGFpbDogcmVxdWVzdCB9ICkgKVxyXG59XHJcbi8qKlxyXG4gKiDov5nph4zlupTor6XmjqXmlLbmnaXoh6piYWNrZ3JvdW5k6ISa5pys55qE5raI5oGvXHJcbiAqL1xyXG5vbk1lc3NhZ2VGcm9tQmFja2dyb3VuZCggJ3NlbmRNZXNzYWdlVG9QYWdlJywgc2VuZE1lc3NhZ2VUb1BhZ2UgKVxyXG5cclxubGV0IGhhbmRsZXIgPSB7XHJcbiAgd2VjaGF0OiB7XHJcbiAgICAvLyDov5nph4zkuI3kvJrmiafooYxcclxuICAgIHBhZ2U6IHdlY2hhdF9wYWdlRXZlbnQsXHJcbiAgICBiaWd3ZVBhZ2U6IHdlY2hhdF9iaWd3ZVBhZ2VFdmVudFxyXG4gIH0sXHJcbiAgYmlnd2U6IHtcclxuICAgIC8vIOaPkuS7tuiDveWKm+ajgOa1i1xyXG4gICAgZXh0ZW50aW9uRGV0ZWN0aW9uKCkge1xyXG4gICAgICBzZW5kTWVzc2FnZVRvUGFnZSgge1xyXG4gICAgICAgIHBsYXRmb3JtOiAnYmlnd2UnLFxyXG4gICAgICAgIGV2ZW50OiAnaGFzRXh0ZW5zaW9uJyxcclxuICAgICAgICBkYXRhOiAxXHJcbiAgICAgIH0gKVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcblxyXG4vKipcclxuICog5o6l5pS25p2l6Ieq6aG16Z2i55qE5LqL5Lu2XHJcbiAqIFxyXG4gKi9cclxuLy8g5qC55o2u5LiN5ZCM5bmz5Y+w5a6e5L6L5YyW5LiN5ZCMaWZyYW1lXHJcbmRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lciggJ2V4dGVuc2lvblBhZ2VFdmVudCcsIGZ1bmN0aW9uKCB7IGRldGFpbCB9ICkge1xyXG4gIGxldCB7IHBsYXRmb3JtLCBldmVudCwgZGF0YSB9ID0gZGV0YWlsO1xyXG4gIGxldCBwbGF0Zm9ybUhhbmRsZXIgPSBoYW5kbGVyWyBwbGF0Zm9ybSBdO1xyXG4gIGlmICggIXBsYXRmb3JtIHx8ICFwbGF0Zm9ybUhhbmRsZXIgKSB0aHJvdyBuZXcgRXJyb3IoICflubPlj7DplJnor68nICk7XHJcbiAgbGV0IFsgcHJlZml4LCBldmVudE5hbWUgXSA9IGV2ZW50LnNwbGl0KCAnLicgKTtcclxuXHJcbiAgbGV0IGV2ZW50SGFuZGxlcnMgPSBwbGF0Zm9ybUhhbmRsZXJbIHByZWZpeCBdO1xyXG4gIC8vIOaJp+ihjOmhtemdouS4u+WKqOWPkei1t+eahOS6i+S7tlxyXG4gIGlmICggcHJlZml4ID09PSAnYmlnd2VQYWdlJyB8fCB0eXBlb2YgZXZlbnRIYW5kbGVycyA9PT0gJ2Z1bmN0aW9uJyApIHtcclxuICAgIHR5cGVvZiBldmVudEhhbmRsZXJzID09PSAnZnVuY3Rpb24nID9cclxuICAgICAgZXZlbnRIYW5kbGVycyggZGF0YSApIDpcclxuICAgICAgZXZlbnRIYW5kbGVyc1sgZXZlbnROYW1lIF0gJiYgZXZlbnRIYW5kbGVyc1sgZXZlbnROYW1lIF0oIGRhdGEgKVxyXG4gIH0gZWxzZSB7XHJcbiAgICAvLyDov5nph4zopoHpgJrov4diYWNrZ3JvdW5k5L2c5Li65qGl5p2l6YCa55+l5ZCE5Liq5bmz5Y+w55qE5Lia5Yqh5Luj56CB5omn6KGM77yM5pys6ISa5pys5LiN5o+S5YWlaWZyYW1lIFxyXG4gICAgLy8g5omA5Lul5LiN5omn6KGM5Lia5Yqh5Luj56CB77yM5Y+R5raI5oGv57uZaWZyYW1l55qEY29udGVudHNjcmlwdOadpeaJp+ihjOS7o+eggVxyXG4gICAgY2hyb21lLmV4dGVuc2lvbi5zZW5kTWVzc2FnZSgge1xyXG4gICAgICB0eXBlOiAnc2VuZE1lc3NhZ2VUb0ZyYW1lQ29udGVudFNjcmlwdCcsXHJcbiAgICAgIGRhdGE6ICQuZXh0ZW5kKCBkZXRhaWwsIHsgZXZlbnQ6IGV2ZW50TmFtZSB9IClcclxuICAgIH0gKTtcclxuICB9XHJcblxyXG59LCBmYWxzZSApXHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9jb250ZW50U2NyaXB0L2NvbnRlbnRTY3JpcHQuanMiLCJleHBvcnQgZnVuY3Rpb24gb25NZXNzYWdlRnJvbUJhY2tncm91bmQoIG9wZXJhdGUsIGNhbGxiYWNrICkge1xyXG4gIGNocm9tZS5leHRlbnNpb24ub25NZXNzYWdlLmFkZExpc3RlbmVyKCBmdW5jdGlvbiggcmVxdWVzdCwgc2VuZGVyLCBzZW5kTWVzc2FnZSApIHtcclxuICAgIGlmICggcmVxdWVzdC5vcGVyYXRlID09PSBvcGVyYXRlICkge1xyXG4gICAgICBjYWxsYmFjay5hcHBseSggdGhpcywgYXJndW1lbnRzICk7XHJcbiAgICB9XHJcbiAgfSApXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL2NvbnRlbnRTY3JpcHQvbWl4aW4uanMiLCIvKipcclxuICog5pON5L2c5o+S5YWl5Yiw6aG16Z2i55qEaWZyYW1lXHJcbiAqL1xyXG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FdmVudCB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgeyBnb1BhZ2UgfSBmcm9tIFwiLi93eFJvdXRlck1hcHBpbmdcIjtcclxuXHJcbmNvbnN0IGNyZWF0ZUVkaXRvclVybCA9ICcvY2dpLWJpbi9hcHBtc2c/dD1tZWRpYS9hcHBtc2dfZWRpdF92MiZhY3Rpb249ZWRpdCZpc05ldz0xJnR5cGU9MTAmbGFuZz16aF9DTiZ0b2tlbj0nXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIGxvZ2luKCB7IHVzZXJuYW1lLCBwYXNzd29yZCwgY29kZSB9ICkge1xyXG4gICAgJCggJ2Zvcm0ubG9naW5fZm9ybSAubXB1aS1mb3JtX19pbnB1dFtuYW1lPVwiYWNjb3VudFwiXScgKVxyXG4gICAgICAudmFsKCB1c2VybmFtZSApWyAwIF1cclxuICAgICAgLmRpc3BhdGNoRXZlbnQoIGNyZWF0ZUN1c3RvbUV2ZW50KCAnaW5wdXQnICkgKVxyXG5cclxuICAgICQoICdmb3JtLmxvZ2luX2Zvcm0gLm1wdWktZm9ybV9faW5wdXRbbmFtZT1cInBhc3N3b3JkXCJdJyApXHJcbiAgICAgIC52YWwoIHBhc3N3b3JkIClbIDAgXVxyXG4gICAgICAuZGlzcGF0Y2hFdmVudCggY3JlYXRlQ3VzdG9tRXZlbnQoICdpbnB1dCcgKSApXHJcblxyXG4gICAgJCggJ2Zvcm0ubG9naW5fZm9ybSAuYnRuX2xvZ2luJyApWyAwIF1cclxuICAgICAgLmRpc3BhdGNoRXZlbnQoIG5ldyBFdmVudCggJ2NsaWNrJyApICk7XHJcbiAgfSxcclxuICBnb0VkaXRvcigpIHtcclxuICAgIGdvUGFnZSggY3JlYXRlRWRpdG9yVXJsICk7XHJcbiAgfVxyXG59XHJcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3NyYy9wbGF0Zm9ybS93ZWl4aW4vcGFnZUV2ZW50SGFuZGxlci5qcyIsIlxyXG4vKipcclxuICog5pON5L2c5pys6aG1Ymlnd2UuY29t55qE5LqL5Lu2XHJcbiAqL1xyXG5pbXBvcnQgeyBjcmVhdGVDdXN0b21FdmVudCB9IGZyb20gXCIuLi8uLi91dGlscy91dGlsc1wiO1xyXG5cclxuLyoqXHJcbiAqIOeUsemhtemdouS4u+WKqOWPkei1t+eahOS6i+S7tlxyXG4gKi9cclxuXHJcbmNvbnN0IHdlY2hhdEZyYW1lSUQgPSAnYmlnd2Utd2VpeGluLWZyYW1lJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAvKipcclxuICAgKiDlvq7kv6HlkITnp43mk43kvZzkuYvliY3vvIzpnIDopoHmj5LlhaVpZnJhbWVcclxuICAgKi9cclxuICBpbml0RnJhbWUoKSB7XHJcbiAgICAhJCggYCMke3dlY2hhdEZyYW1lSUR9YCApLmxlbmd0aCA/XHJcbiAgICAgICQoIGA8aWZyYW1lIHdpZHRoPVwiMTAwJVwiIGhlaWdodD1cIjUwMHB4XCIgaWQ9XCIke3dlY2hhdEZyYW1lSUR9XCIvPmAgKVxyXG4gICAgICAucHJvcCggJ3NyYycsICdodHRwczovL21wLndlaXhpbi5xcS5jb20nIClcclxuICAgICAgLmFwcGVuZFRvKCAnYm9keScgKS5iaW5kKCAnbG9hZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGNocm9tZS5leHRlbnNpb24uc2VuZE1lc3NhZ2UoIHsgdHlwZTogJ2V4ZWN1dGVTY3JpcHQnLCBkYXRhOiAnYnVpbGQvaW5zZXJ0V2VjaGF0LmpzJyB9IClcclxuICAgICAgfSApIDogJCggYCMke3dlY2hhdEZyYW1lSUR9YCApWyAwIF0uY29udGVudFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKVxyXG4gIH0sXHJcbiAgXHJcbn1cclxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vc3JjL3BsYXRmb3JtL3dlaXhpbi9iaWd3ZVBhZ2VFdmVudEhhbmRsZXIuanMiXSwic291cmNlUm9vdCI6IiJ9