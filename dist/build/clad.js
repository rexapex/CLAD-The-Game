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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/core-js/fn/promise.js":
/*!********************************************!*\
  !*** ./node_modules/core-js/fn/promise.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../modules/es6.object.to-string */ "./node_modules/core-js/modules/es6.object.to-string.js");
__webpack_require__(/*! ../modules/es6.string.iterator */ "./node_modules/core-js/modules/es6.string.iterator.js");
__webpack_require__(/*! ../modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
__webpack_require__(/*! ../modules/es6.promise */ "./node_modules/core-js/modules/es6.promise.js");
__webpack_require__(/*! ../modules/es7.promise.finally */ "./node_modules/core-js/modules/es7.promise.finally.js");
__webpack_require__(/*! ../modules/es7.promise.try */ "./node_modules/core-js/modules/es7.promise.try.js");
module.exports = __webpack_require__(/*! ../modules/_core */ "./node_modules/core-js/modules/_core.js").Promise;


/***/ }),

/***/ "./node_modules/core-js/modules/_a-function.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_a-function.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_add-to-unscopables.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/_add-to-unscopables.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('unscopables');
var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(ArrayProto, UNSCOPABLES, {});
module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-instance.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_an-instance.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
    throw TypeError(name + ': incorrect invocation!');
  } return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_an-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_an-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_array-includes.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_array-includes.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var toAbsoluteIndex = __webpack_require__(/*! ./_to-absolute-index */ "./node_modules/core-js/modules/_to-absolute-index.js");
module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value;
    // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare
    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++];
      // eslint-disable-next-line no-self-compare
      if (value != value) return true;
    // Array#indexOf ignores holes, Array#includes - not
    } else for (;length > index; index++) if (IS_INCLUDES || index in O) {
      if (O[index] === el) return IS_INCLUDES || index || 0;
    } return !IS_INCLUDES && -1;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_classof.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_classof.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_cof.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_cof.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_core.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_core.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.4' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_ctx.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_ctx.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_defined.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_defined.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_descriptors.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_descriptors.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_dom-create.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_dom-create.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ "./node_modules/core-js/modules/_enum-bug-keys.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_enum-bug-keys.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),

/***/ "./node_modules/core-js/modules/_export.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_export.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ "./node_modules/core-js/modules/_fails.js":
/*!************************************************!*\
  !*** ./node_modules/core-js/modules/_fails.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_for-of.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_for-of.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var call = __webpack_require__(/*! ./_iter-call */ "./node_modules/core-js/modules/_iter-call.js");
var isArrayIter = __webpack_require__(/*! ./_is-array-iter */ "./node_modules/core-js/modules/_is-array-iter.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var toLength = __webpack_require__(/*! ./_to-length */ "./node_modules/core-js/modules/_to-length.js");
var getIterFn = __webpack_require__(/*! ./core.get-iterator-method */ "./node_modules/core-js/modules/core.get-iterator-method.js");
var BREAK = {};
var RETURN = {};
var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () { return iterable; } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
  // fast case for arrays with default iterator
  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};
exports.BREAK = BREAK;
exports.RETURN = RETURN;


/***/ }),

/***/ "./node_modules/core-js/modules/_global.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_global.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ "./node_modules/core-js/modules/_has.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_has.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_hide.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_hide.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var createDesc = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_html.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_html.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").document;
module.exports = document && document.documentElement;


/***/ }),

/***/ "./node_modules/core-js/modules/_ie8-dom-define.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/_ie8-dom-define.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && !__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () {
  return Object.defineProperty(__webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ "./node_modules/core-js/modules/_invoke.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_invoke.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;
  switch (args.length) {
    case 0: return un ? fn()
                      : fn.call(that);
    case 1: return un ? fn(args[0])
                      : fn.call(that, args[0]);
    case 2: return un ? fn(args[0], args[1])
                      : fn.call(that, args[0], args[1]);
    case 3: return un ? fn(args[0], args[1], args[2])
                      : fn.call(that, args[0], args[1], args[2]);
    case 4: return un ? fn(args[0], args[1], args[2], args[3])
                      : fn.call(that, args[0], args[1], args[2], args[3]);
  } return fn.apply(that, args);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iobject.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_iobject.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js");
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-array-iter.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_is-array-iter.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_is-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_is-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-call.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-call.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value);
  // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-create.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-create.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var descriptor = __webpack_require__(/*! ./_property-desc */ "./node_modules/core-js/modules/_property-desc.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var IteratorPrototype = {};

// 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
__webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js")(IteratorPrototype, __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator'), function () { return this; });

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, { next: descriptor(1, next) });
  setToStringTag(Constructor, NAME + ' Iterator');
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-define.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-define.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var $iterCreate = __webpack_require__(/*! ./_iter-create */ "./node_modules/core-js/modules/_iter-create.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var getPrototypeOf = __webpack_require__(/*! ./_object-gpo */ "./node_modules/core-js/modules/_object-gpo.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function () { return this; };

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);
  var getMethod = function (kind) {
    if (!BUGGY && kind in proto) return proto[kind];
    switch (kind) {
      case KEYS: return function keys() { return new Constructor(this, kind); };
      case VALUES: return function values() { return new Constructor(this, kind); };
    } return function entries() { return new Constructor(this, kind); };
  };
  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype;
  // Fix native
  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));
    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true);
      // fix for some old engines
      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  }
  // fix Array#{values, @@iterator}.name in V8 / FF
  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;
    $default = function values() { return $native.call(this); };
  }
  // Define iterator
  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  }
  // Plug for library
  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;
  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }
  return methods;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-detect.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-detect.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();
  riter['return'] = function () { SAFE_CLOSING = true; };
  // eslint-disable-next-line no-throw-literal
  Array.from(riter, function () { throw 2; });
} catch (e) { /* empty */ }

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;
  try {
    var arr = [7];
    var iter = arr[ITERATOR]();
    iter.next = function () { return { done: safe = true }; };
    arr[ITERATOR] = function () { return iter; };
    exec(arr);
  } catch (e) { /* empty */ }
  return safe;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iter-step.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iter-step.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return { value: value, done: !!done };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_iterators.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_iterators.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {};


/***/ }),

/***/ "./node_modules/core-js/modules/_library.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_library.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ "./node_modules/core-js/modules/_microtask.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_microtask.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var macrotask = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function () {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();
    while (head) {
      fn = head.fn;
      head = head.next;
      try {
        fn();
      } catch (e) {
        if (head) notify();
        else last = undefined;
        throw e;
      }
    } last = undefined;
    if (parent) parent.enter();
  };

  // Node.js
  if (isNode) {
    notify = function () {
      process.nextTick(flush);
    };
  // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339
  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, { characterData: true }); // eslint-disable-line no-new
    notify = function () {
      node.data = toggle = !toggle;
    };
  // environments with maybe non-completely correct, but existent Promise
  } else if (Promise && Promise.resolve) {
    var promise = Promise.resolve();
    notify = function () {
      promise.then(flush);
    };
  // for other environments - macrotask based on:
  // - setImmediate
  // - MessageChannel
  // - window.postMessag
  // - onreadystatechange
  // - setTimeout
  } else {
    notify = function () {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = { fn: fn, next: undefined };
    if (last) last.next = task;
    if (!head) {
      head = task;
      notify();
    } last = task;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_new-promise-capability.js":
/*!*****************************************************************!*\
  !*** ./node_modules/core-js/modules/_new-promise-capability.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 25.4.1.5 NewPromiseCapability(C)
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-create.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-create.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var dPs = __webpack_require__(/*! ./_object-dps */ "./node_modules/core-js/modules/_object-dps.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var Empty = function () { /* empty */ };
var PROTOTYPE = 'prototype';

// Create object with fake `null` prototype: use iframe Object with cleared prototype
var createDict = function () {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js")('iframe');
  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';
  __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js").appendChild(iframe);
  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);
  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  createDict = iframeDocument.F;
  while (i--) delete createDict[PROTOTYPE][enumBugKeys[i]];
  return createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;
  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null;
    // add "__proto__" for Object.getPrototypeOf polyfill
    result[IE_PROTO] = O;
  } else result = createDict();
  return Properties === undefined ? result : dPs(result, Properties);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dp.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dp.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var IE8_DOM_DEFINE = __webpack_require__(/*! ./_ie8-dom-define */ "./node_modules/core-js/modules/_ie8-dom-define.js");
var toPrimitive = __webpack_require__(/*! ./_to-primitive */ "./node_modules/core-js/modules/_to-primitive.js");
var dP = Object.defineProperty;

exports.f = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-dps.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-dps.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");

module.exports = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;
  while (length > i) dP.f(O, P = keys[i++], Properties[P]);
  return O;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-gpo.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_object-gpo.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toObject = __webpack_require__(/*! ./_to-object */ "./node_modules/core-js/modules/_to-object.js");
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');
var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];
  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  } return O instanceof Object ? ObjectProto : null;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys-internal.js":
/*!***************************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys-internal.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var arrayIndexOf = __webpack_require__(/*! ./_array-includes */ "./node_modules/core-js/modules/_array-includes.js")(false);
var IE_PROTO = __webpack_require__(/*! ./_shared-key */ "./node_modules/core-js/modules/_shared-key.js")('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;
  for (key in O) if (key != IE_PROTO) has(O, key) && result.push(key);
  // Don't enum bug & hidden keys
  while (names.length > i) if (has(O, key = names[i++])) {
    ~arrayIndexOf(result, key) || result.push(key);
  }
  return result;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-keys.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_object-keys.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(/*! ./_object-keys-internal */ "./node_modules/core-js/modules/_object-keys-internal.js");
var enumBugKeys = __webpack_require__(/*! ./_enum-bug-keys */ "./node_modules/core-js/modules/_enum-bug-keys.js");

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_perform.js":
/*!**************************************************!*\
  !*** ./node_modules/core-js/modules/_perform.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return { e: false, v: exec() };
  } catch (e) {
    return { e: true, v: e };
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_promise-resolve.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_promise-resolve.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_property-desc.js":
/*!********************************************************!*\
  !*** ./node_modules/core-js/modules/_property-desc.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine-all.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine-all.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
module.exports = function (target, src, safe) {
  for (var key in src) redefine(target, key, src[key], safe);
  return target;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_redefine.js":
/*!***************************************************!*\
  !*** ./node_modules/core-js/modules/_redefine.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var SRC = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js")('src');
var TO_STRING = 'toString';
var $toString = Function[TO_STRING];
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ "./node_modules/core-js/modules/_set-species.js":
/*!******************************************************!*\
  !*** ./node_modules/core-js/modules/_set-species.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function () { return this; }
  });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_set-to-string-tag.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_set-to-string-tag.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var has = __webpack_require__(/*! ./_has */ "./node_modules/core-js/modules/_has.js");
var TAG = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, { configurable: true, value: tag });
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared-key.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_shared-key.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('keys');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_shared.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/_shared.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),

/***/ "./node_modules/core-js/modules/_species-constructor.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_species-constructor.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var SPECIES = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_string-at.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_string-at.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_task.js":
/*!***********************************************!*\
  !*** ./node_modules/core-js/modules/_task.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var invoke = __webpack_require__(/*! ./_invoke */ "./node_modules/core-js/modules/_invoke.js");
var html = __webpack_require__(/*! ./_html */ "./node_modules/core-js/modules/_html.js");
var cel = __webpack_require__(/*! ./_dom-create */ "./node_modules/core-js/modules/_dom-create.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;
var run = function () {
  var id = +this;
  // eslint-disable-next-line no-prototype-builtins
  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};
var listener = function (event) {
  run.call(event.data);
};
// Node.js 0.9+ & IE10+ has setImmediate, otherwise:
if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;
    while (arguments.length > i) args.push(arguments[i++]);
    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };
    defer(counter);
    return counter;
  };
  clearTask = function clearImmediate(id) {
    delete queue[id];
  };
  // Node.js 0.8-
  if (__webpack_require__(/*! ./_cof */ "./node_modules/core-js/modules/_cof.js")(process) == 'process') {
    defer = function (id) {
      process.nextTick(ctx(run, id, 1));
    };
  // Sphere (JS game engine) Dispatch API
  } else if (Dispatch && Dispatch.now) {
    defer = function (id) {
      Dispatch.now(ctx(run, id, 1));
    };
  // Browsers with MessageChannel, includes WebWorkers
  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1);
  // Browsers with postMessage, skip WebWorkers
  // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function (id) {
      global.postMessage(id + '', '*');
    };
    global.addEventListener('message', listener, false);
  // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function (id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    };
  // Rest old browsers
  } else {
    defer = function (id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}
module.exports = {
  set: setTask,
  clear: clearTask
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-absolute-index.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_to-absolute-index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-integer.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-integer.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-iobject.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-iobject.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(/*! ./_iobject */ "./node_modules/core-js/modules/_iobject.js");
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-length.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-length.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(/*! ./_to-integer */ "./node_modules/core-js/modules/_to-integer.js");
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-object.js":
/*!****************************************************!*\
  !*** ./node_modules/core-js/modules/_to-object.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(/*! ./_defined */ "./node_modules/core-js/modules/_defined.js");
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_to-primitive.js":
/*!*******************************************************!*\
  !*** ./node_modules/core-js/modules/_to-primitive.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ "./node_modules/core-js/modules/_uid.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_uid.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ "./node_modules/core-js/modules/_wks.js":
/*!**********************************************!*\
  !*** ./node_modules/core-js/modules/_wks.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(/*! ./_shared */ "./node_modules/core-js/modules/_shared.js")('wks');
var uid = __webpack_require__(/*! ./_uid */ "./node_modules/core-js/modules/_uid.js");
var Symbol = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js").Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ "./node_modules/core-js/modules/core.get-iterator-method.js":
/*!******************************************************************!*\
  !*** ./node_modules/core-js/modules/core.get-iterator-method.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var ITERATOR = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('iterator');
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
module.exports = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js").getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR]
    || it['@@iterator']
    || Iterators[classof(it)];
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.array.iterator.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.array.iterator.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var addToUnscopables = __webpack_require__(/*! ./_add-to-unscopables */ "./node_modules/core-js/modules/_add-to-unscopables.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");

// 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()
module.exports = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target
  this._i = 0;                   // next index
  this._k = kind;                // kind
// 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;
  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }
  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values');

// argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
Iterators.Arguments = Iterators.Array;

addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');


/***/ }),

/***/ "./node_modules/core-js/modules/es6.object.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.object.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var test = {};
test[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ "./node_modules/core-js/modules/es6.promise.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/es6.promise.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var LIBRARY = __webpack_require__(/*! ./_library */ "./node_modules/core-js/modules/_library.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var classof = __webpack_require__(/*! ./_classof */ "./node_modules/core-js/modules/_classof.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var aFunction = __webpack_require__(/*! ./_a-function */ "./node_modules/core-js/modules/_a-function.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var task = __webpack_require__(/*! ./_task */ "./node_modules/core-js/modules/_task.js").set;
var microtask = __webpack_require__(/*! ./_microtask */ "./node_modules/core-js/modules/_microtask.js")();
var newPromiseCapabilityModule = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");
var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';
var empty = function () { /* empty */ };
var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;

var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);
    var FakePromise = (promise.constructor = {})[__webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js")('species')] = function (exec) {
      exec(empty, empty);
    };
    // unhandled rejections tracking support, NodeJS Promise without it fails @@species test
    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise;
  } catch (e) { /* empty */ }
}();

// helpers
var isThenable = function (it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};
var notify = function (promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;
    var run = function (reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;
      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }
          if (handler === true) result = value;
          else {
            if (domain) domain.enter();
            result = handler(value); // may throw
            if (domain) {
              domain.exit();
              exited = true;
            }
          }
          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };
    while (chain.length > i) run(chain[i++]); // variable length - can't use forEach
    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};
var onUnhandled = function (promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;
    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({ promise: promise, reason: value });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      });
      // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should
      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    } promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};
var isUnhandled = function (promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};
var onHandleUnhandled = function (promise) {
  task.call(global, function () {
    var handler;
    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({ promise: promise, reason: promise._v });
    }
  });
};
var $reject = function (value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};
var $resolve = function (value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap
  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");
    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = { _w: promise, _d: false }; // wrap
        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({ _w: promise, _d: false }, e); // wrap
  }
};

// constructor polyfill
if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);
    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  };
  // eslint-disable-next-line no-unused-vars
  Internal = function Promise(executor) {
    this._c = [];             // <- awaiting reactions
    this._a = undefined;      // <- checked in isUnhandled reactions
    this._s = 0;              // <- state
    this._d = false;          // <- done
    this._v = undefined;      // <- value
    this._h = 0;              // <- rejection state, 0 - default, 1 - handled, 2 - unhandled
    this._n = false;          // <- notify
  };
  Internal.prototype = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js")($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;
      this._c.push(reaction);
      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function (onRejected) {
      return this.then(undefined, onRejected);
    }
  });
  OwnPromiseCapability = function () {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };
  newPromiseCapabilityModule.f = newPromiseCapability = function (C) {
    return C === $Promise || C === Wrapper
      ? new OwnPromiseCapability(C)
      : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, { Promise: $Promise });
__webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js")($Promise, PROMISE);
__webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js")(PROMISE);
Wrapper = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js")[PROMISE];

// statics
$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js")(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.string.iterator.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.string.iterator.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var $at = __webpack_require__(/*! ./_string-at */ "./node_modules/core-js/modules/_string-at.js")(true);

// 21.1.3.27 String.prototype[@@iterator]()
__webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js")(String, 'String', function (iterated) {
  this._t = String(iterated); // target
  this._i = 0;                // next index
// 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return { value: undefined, done: true };
  point = $at(O, index);
  this._i += point.length;
  return { value: point, done: false };
});


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.finally.js":
/*!*************************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.finally.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
// https://github.com/tc39/proposal-promise-finally

var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var core = __webpack_require__(/*! ./_core */ "./node_modules/core-js/modules/_core.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var speciesConstructor = __webpack_require__(/*! ./_species-constructor */ "./node_modules/core-js/modules/_species-constructor.js");
var promiseResolve = __webpack_require__(/*! ./_promise-resolve */ "./node_modules/core-js/modules/_promise-resolve.js");

$export($export.P + $export.R, 'Promise', { 'finally': function (onFinally) {
  var C = speciesConstructor(this, core.Promise || global.Promise);
  var isFunction = typeof onFinally == 'function';
  return this.then(
    isFunction ? function (x) {
      return promiseResolve(C, onFinally()).then(function () { return x; });
    } : onFinally,
    isFunction ? function (e) {
      return promiseResolve(C, onFinally()).then(function () { throw e; });
    } : onFinally
  );
} });


/***/ }),

/***/ "./node_modules/core-js/modules/es7.promise.try.js":
/*!*********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.promise.try.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// https://github.com/tc39/proposal-promise-try
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var newPromiseCapability = __webpack_require__(/*! ./_new-promise-capability */ "./node_modules/core-js/modules/_new-promise-capability.js");
var perform = __webpack_require__(/*! ./_perform */ "./node_modules/core-js/modules/_perform.js");

$export($export.S, 'Promise', { 'try': function (callbackfn) {
  var promiseCapability = newPromiseCapability.f(this);
  var result = perform(callbackfn);
  (result.e ? promiseCapability.reject : promiseCapability.resolve)(result.v);
  return promiseCapability.promise;
} });


/***/ }),

/***/ "./node_modules/core-js/modules/web.dom.iterable.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/web.dom.iterable.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(/*! ./es6.array.iterator */ "./node_modules/core-js/modules/es6.array.iterator.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var hide = __webpack_require__(/*! ./_hide */ "./node_modules/core-js/modules/_hide.js");
var Iterators = __webpack_require__(/*! ./_iterators */ "./node_modules/core-js/modules/_iterators.js");
var wks = __webpack_require__(/*! ./_wks */ "./node_modules/core-js/modules/_wks.js");
var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;

var DOMIterables = {
  CSSRuleList: true, // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true, // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true, // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;
  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) if (!proto[key]) redefine(proto, key, $iterators[key], true);
  }
}


/***/ }),

/***/ "./src/chat/ContinueDialog.ts":
/*!************************************!*\
  !*** ./src/chat/ContinueDialog.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog_1 = __webpack_require__(/*! ./Dialog */ "./src/chat/Dialog.ts");
var ContinueDialog = /** @class */ (function (_super) {
    __extends(ContinueDialog, _super);
    function ContinueDialog(text, speaker, nextDialog) {
        var _this = _super.call(this, text, speaker) || this;
        _this.nextDialog = nextDialog;
        return _this;
    }
    ContinueDialog.prototype.createGUIElement = function (div) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // add the dialog text
            var txt = document.createElement("label");
            txt.classList.add("chatmsg");
            txt.innerHTML = _this.text;
            // add a button to advance to the next dialog
            var btn = document.createElement("button");
            btn.classList.add("chatbtn");
            btn.innerHTML = "Continue";
            // add all new elements to div
            div.appendChild(txt);
            div.appendChild(btn);
            // add a callback for the continue button
            btn.onclick = function (evnt) {
                resolve(_this.nextDialog);
            };
        });
    };
    return ContinueDialog;
}(Dialog_1.Dialog));
exports.ContinueDialog = ContinueDialog;


/***/ }),

/***/ "./src/chat/Conversation.ts":
/*!**********************************!*\
  !*** ./src/chat/Conversation.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
// conversation between the player and an NPC
var Conversation = /** @class */ (function () {
    function Conversation(firstDialog) {
        this.firstDialog = firstDialog;
    }
    Conversation.prototype.getFirstDialog = function () {
        return this.firstDialog;
    };
    return Conversation;
}());
exports.Conversation = Conversation;


/***/ }),

/***/ "./src/chat/Dialog.ts":
/*!****************************!*\
  !*** ./src/chat/Dialog.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Dialog = /** @class */ (function () {
    function Dialog(text, speaker) {
        this.text = text;
        this.speaker = speaker;
    }
    Dialog.prototype.getText = function () {
        return this.text;
    };
    Dialog.prototype.getSpeaker = function () {
        return this.speaker;
    };
    return Dialog;
}());
exports.Dialog = Dialog;


/***/ }),

/***/ "./src/chat/OptionDialog.ts":
/*!**********************************!*\
  !*** ./src/chat/OptionDialog.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Dialog_1 = __webpack_require__(/*! ./Dialog */ "./src/chat/Dialog.ts");
var OptionDialog = /** @class */ (function (_super) {
    __extends(OptionDialog, _super);
    function OptionDialog(text, speaker, options) {
        var _this = _super.call(this, text, speaker) || this;
        _this.options = options;
        return _this;
    }
    OptionDialog.prototype.createGUIElement = function (div) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // add the dialog text
            var txt = document.createElement("label");
            txt.classList.add("chatmsg");
            txt.innerHTML = _this.text;
            // add text element to div
            div.appendChild(txt);
            var _loop_1 = function (option) {
                var btn = document.createElement("button");
                btn.classList.add("chatbtn");
                btn.innerHTML = option;
                div.appendChild(btn);
                // add a callback for the option button
                btn.onclick = function (evnt) {
                    resolve(_this.options[option]);
                };
            };
            // add a button for each dialog option
            for (var option in _this.options) {
                _loop_1(option);
            }
        });
    };
    return OptionDialog;
}(Dialog_1.Dialog));
exports.OptionDialog = OptionDialog;


/***/ }),

/***/ "./src/chat/ReceiveItemDialog.ts":
/*!***************************************!*\
  !*** ./src/chat/ReceiveItemDialog.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var ContinueDialog_1 = __webpack_require__(/*! ./ContinueDialog */ "./src/chat/ContinueDialog.ts");
var ReceiveItemDialog = /** @class */ (function (_super) {
    __extends(ReceiveItemDialog, _super);
    function ReceiveItemDialog(text, speaker, nextDialog, itemsLost, itemsReceived) {
        var _this = _super.call(this, text, speaker, nextDialog) || this;
        _this.itemsLost = itemsLost;
        _this.itemsReceived = itemsReceived;
        return _this;
    }
    ReceiveItemDialog.prototype.createGUIElement = function (div) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            // add the dialog text
            var txt = document.createElement("label");
            txt.classList.add("chatmsg");
            txt.innerHTML = _this.text;
            // add a button to advance to the next dialog
            var btn = document.createElement("button");
            btn.classList.add("chatbtn");
            btn.innerHTML = "Continue";
            // add text element to div
            div.appendChild(txt);
            if (_this.itemsLost != null && _this.itemsLost.length > 0) {
                var itemsLostLbl = document.createElement("label");
                itemsLostLbl.classList.add("chatimgheader");
                itemsLostLbl.innerHTML = "You Lost";
                div.appendChild(itemsLostLbl);
                // add an image for each item lost
                for (var _i = 0, _a = _this.itemsLost; _i < _a.length; _i++) {
                    var item = _a[_i];
                    var img = document.createElement("img");
                    img.classList.add("chatimg");
                    img.src = item.getImagePath();
                    div.appendChild(img);
                }
            }
            if (_this.itemsReceived != null && _this.itemsReceived.length > 0) {
                var itemsReceivedLbl = document.createElement("label");
                itemsReceivedLbl.classList.add("chatimgheader");
                itemsReceivedLbl.innerHTML = "You Gained";
                div.appendChild(itemsReceivedLbl);
                // add an image for each item received
                for (var _b = 0, _c = _this.itemsReceived; _b < _c.length; _b++) {
                    var item = _c[_b];
                    var img = document.createElement("img");
                    img.classList.add("chatimg");
                    img.src = item.getImagePath();
                    div.appendChild(img);
                }
            }
            div.appendChild(btn);
            // add a callback for the continue button
            btn.onclick = function (evnt) {
                resolve(_this.nextDialog);
            };
        });
    };
    ReceiveItemDialog.prototype.getItemsLost = function () {
        return this.itemsLost;
    };
    ReceiveItemDialog.prototype.getItemsReceived = function () {
        return this.itemsReceived;
    };
    return ReceiveItemDialog;
}(ContinueDialog_1.ContinueDialog));
exports.ReceiveItemDialog = ReceiveItemDialog;


/***/ }),

/***/ "./src/collision/Circle.ts":
/*!*********************************!*\
  !*** ./src/collision/Circle.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
var Circle = /** @class */ (function () {
    function Circle(x, y, radius, color, line_width) {
        if (color === void 0) { color = "red"; }
        if (line_width === void 0) { line_width = 2; }
        this.x = 0;
        this.y = 0;
        this.radius = 10;
        this.lineWidth = 2;
        this.color = "red";
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
        this.lineWidth = line_width;
    }
    Circle.prototype.draw = function () {
        glob_ts_1.ctx.save();
        glob_ts_1.ctx.beginPath();
        glob_ts_1.ctx.strokeStyle = this.color;
        glob_ts_1.ctx.lineWidth = this.lineWidth;
        glob_ts_1.ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        glob_ts_1.ctx.stroke();
        glob_ts_1.ctx.restore();
    };
    Circle.prototype.contains = function (x, y) {
        return (Math.pow((y - this.y), 2) + Math.pow((x - this.x), 2)) <= Math.pow(this.radius, 2);
    };
    return Circle;
}());
exports.Circle = Circle;


/***/ }),

/***/ "./src/collision/NavMesh.ts":
/*!**********************************!*\
  !*** ./src/collision/NavMesh.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point_1 = __webpack_require__(/*! ./Point */ "./src/collision/Point.ts");
// navmesh pathfinding: https://medium.com/@mscansian/a-with-navigation-meshes-246fd9e72424
var NavMesh = /** @class */ (function () {
    function NavMesh(tris) {
        var _this = this;
        this.getWaypoints = function (currentX, currentY, targetX, targetY) {
            for (var _i = 0, _a = _this.tris; _i < _a.length; _i++) {
                var tri = _a[_i];
                // allow free movement within a triangle
                if (tri.contains(targetX, targetY) && tri.contains(currentX, currentY)) {
                    return [new Point_1.Point(targetX, targetY)];
                }
            }
            for (var _b = 0, _c = _this.tris; _b < _c.length; _b++) {
                var tri = _c[_b];
                // if both points fall under different triangles, find the a waypoint to reach the next tri
                if (tri.contains(targetX, targetY)) {
                    //return new Point(targetX, targetY);
                    var obj = _this.findPath(new Point_1.Point(currentX, currentY), new Point_1.Point(targetX, targetY));
                    if (obj != null) {
                        var route = [];
                        route.push(new Point_1.Point(targetX, targetY)); // go from last point to the end point
                        _this.buildRoute(obj.cameFrom, obj.endVertex, route);
                        _this.reduceRoute(route); // remove redundant nodes from the path
                        if (route.length > 0)
                            route.pop();
                        console.log("route: " + route);
                        return route;
                    }
                    break;
                }
            }
            return null;
        };
        // remove unecessary waypoints from the route, i.e. if their is a straight path from a to c, remove b
        this.reduceRoute = function (route) {
            var index = 0;
            // loop until no more reductions can be made
            while (index < route.length - 2) {
                var a = route[index];
                var c = route[index + 2];
                // there is a valid straight path between a and c if the path does not intersect an outer edge
                var intersectsOuterEdge = false;
                for (var _i = 0, _a = _this.outerEdges; _i < _a.length; _i++) {
                    var outerEdge = _a[_i];
                    if (_this.doLineSegmentsIntersect(_this.vertices[outerEdge.v1], _this.vertices[outerEdge.v2], a, c)) {
                        //console.log(a.toString(), c.toString(), "intersects", this.vertices[outerEdge.v1].toString(), this.vertices[outerEdge.v2].toString())
                        intersectsOuterEdge = true;
                        break;
                    }
                }
                // if the path does not intersect an outer edge, remove waypoint b
                if (!intersectsOuterEdge) {
                    route.splice(index + 1, 1);
                    // don't need to increment index since array length has been reduced
                }
                else {
                    // move onto next pair of waypoints
                    index++;
                }
            }
        };
        this.buildRoute = function (cameFrom, vertex, route) {
            route.push(vertex); // route is read in reverse order
            if (cameFrom[vertex.toString()] != null) {
                _this.buildRoute(cameFrom, cameFrom[vertex.toString()].node, route);
            }
        };
        // use the A* algorithm to find a shortest path through the navmesh
        this.findPath = function (start, end) {
            var open = [{ node: start, priority: 0 }]; // lowest priority = 0
            var closed = [];
            // find the triangle containing the start point
            var startTri;
            for (var _i = 0, _a = _this.tris; _i < _a.length; _i++) {
                var tri = _a[_i];
                if (tri.contains(start.x, start.y)) {
                    startTri = tri;
                    break;
                }
            }
            if (startTri == null) {
                return null;
            }
            // find the triangle containing the end point
            var endTri;
            for (var _b = 0, _c = _this.tris; _b < _c.length; _b++) {
                var tri = _c[_b];
                if (tri.contains(end.x, end.y)) {
                    endTri = tri;
                    break;
                }
            }
            if (endTri == null) {
                return null;
            }
            // g[i] is the cost to get to i from the start vertex
            var g = {};
            var cameFrom = {};
            g[start.toString()] = 0;
            cameFrom[start.toString()] = null;
            // execute A* algorithm
            // pseudocode: http://theory.stanford.edu/~amitp/GameProgramming/ImplementationNotes.html
            while (open.length > 0 && !endTri.isVertex(open[0].node)) {
                var current = open.shift(); // remove first item from open (item with lowest priority)
                closed.push(current);
                //console.log("current vertex: " + current.node.toString());
                for (var _d = 0, _e = _this.getNeighbours(current.node); _d < _e.length; _d++) {
                    var neighbour = _e[_d];
                    var cost = g[current.node.toString()] + _this.getEdgeCost(current.node, neighbour);
                    //console.log("neighbour: " + neighbour.toString() + ", cost: " + cost);
                    // neighbour in open
                    if (_this.indexOfPriorityNode(open, neighbour) !== -1 && cost < g[neighbour.toString()]) {
                        open.splice(_this.indexOfPriorityNode(open, neighbour), 1);
                    }
                    // neighbour in closed
                    if (_this.indexOfPriorityNode(closed, neighbour) !== -1 && cost < g[neighbour.toString()]) {
                        closed.splice(_this.indexOfPriorityNode(closed, neighbour), 1);
                    }
                    // neighbour neither in open nor closed
                    if (_this.indexOfPriorityNode(open, neighbour) === -1 && _this.indexOfPriorityNode(closed, neighbour) === -1) {
                        g[neighbour.toString()] = cost;
                        cameFrom[neighbour.toString()] = current;
                        open.push({ node: neighbour, priority: cost }); // TODO - priority = cost + h(neighbour)
                        open.sort(function (a, b) {
                            return a.priority - b.priority;
                        });
                    }
                }
            }
            //console.log(open.length > 0 ? "end: " + open[0].node.toString() : "no path");
            return open.length > 0 ? { cameFrom: cameFrom, endVertex: open[0].node } : null;
        };
        this.draw = function () {
            for (var _i = 0, _a = _this.tris; _i < _a.length; _i++) {
                var tri = _a[_i];
                tri.draw();
            }
        };
        // returns the cost of traversing an edge between p1 and p2
        this.getEdgeCost = function (p1, p2) {
            return Math.sqrt(Math.pow((p1.x - p2.x), 2) + Math.pow((p1.y - p2.y), 2));
        };
        // return a list of vertcies which are adjacent to the vertex p
        this.getNeighbours = function (p) {
            var neighbours = [];
            for (var _i = 0, _a = _this.edges; _i < _a.length; _i++) {
                var edge = _a[_i];
                if (_this.vertices[edge.v1].equals(p)) {
                    neighbours.push(_this.vertices[edge.v2]);
                }
                else if (_this.vertices[edge.v2].equals(p)) {
                    neighbours.push(_this.vertices[edge.v1]);
                }
            }
            // if the vertex is not a vertex of a triangle, check if it is within a triangle
            if (neighbours.length === 0) {
                for (var _b = 0, _c = _this.tris; _b < _c.length; _b++) {
                    var tri = _c[_b];
                    if (tri.contains(p.x, p.y)) {
                        neighbours.push(tri.point1);
                        neighbours.push(tri.point2);
                        neighbours.push(tri.point3);
                        break;
                    }
                }
            }
            return neighbours;
        };
        // answer 2 from: https://stackoverflow.com/questions/563198/how-do-you-detect-where-two-line-segments-intersect
        this.doLineSegmentsIntersect = function (e1v1, e1v2, e2v1, e2v2) {
            var p0_x = e1v1.x;
            var p0_y = e1v1.y;
            var p1_x = e1v2.x;
            var p1_y = e1v2.y;
            var p2_x = e2v1.x;
            var p2_y = e2v1.y;
            var p3_x = e2v2.x;
            var p3_y = e2v2.y;
            var s1_x, s1_y, s2_x, s2_y;
            s1_x = p1_x - p0_x;
            s1_y = p1_y - p0_y;
            s2_x = p3_x - p2_x;
            s2_y = p3_y - p2_y;
            var s, t;
            s = (-s1_y * (p0_x - p2_x) + s1_x * (p0_y - p2_y)) / (-s2_x * s1_y + s1_x * s2_y);
            t = (s2_x * (p0_y - p2_y) - s2_y * (p0_x - p2_x)) / (-s2_x * s1_y + s1_x * s2_y);
            if (s >= 0 && s <= 1 && t >= 0 && t <= 1) {
                // return false if the intersection point is the vertex position since it breaks the route reduction algorithm
                var i_x = (p0_x + (t * s1_x));
                var i_y = (p0_y + (t * s1_y));
                return !(i_x === e1v1.x && i_y === e1v1.y) && !(i_x === e1v2.x && i_y === e1v2.y) && !(i_x === e2v1.x && i_y === e2v1.y) && !(i_x === e2v2.x && i_y === e2v2.y);
            }
            //console.log("no collision");
            return false; // no collision
        };
        //
        this.crossProduct = function (point1, point2) {
            return point1.x * point2.y - point1.y * point2.x;
        };
        this.indexOfPriorityNode = function (vertices, p) {
            if (p == null) {
                return -1;
            }
            else {
                for (var index = 0; index < vertices.length; index++) {
                    var vertex = vertices[index].node;
                    if (vertex.x === p.x && vertex.y === p.y) {
                        return index;
                    }
                }
            }
            return -1;
        };
        this.indexOfVertex = function (vertices, p) {
            if (p == null) {
                return -1;
            }
            else {
                for (var index = 0; index < vertices.length; index++) {
                    var vertex = vertices[index];
                    if (vertex.x === p.x && vertex.y === p.y) {
                        return index;
                    }
                }
            }
            return -1;
        };
        this.indexOfEdge = function (edges, edge) {
            if (edge == null || edge.v1 == null || edge.v2 == null) {
                return -1;
            }
            else {
                for (var index = 0; index < edges.length; index++) {
                    var e = edges[index];
                    if ((e.v1 === edge.v1 && e.v2 === edge.v2) || (e.v1 === edge.v2 && e.v2 === edge.v1)) {
                        return index;
                    }
                }
            }
            return -1;
        };
        this.tris = tris ? tris : [];
        this.vertices = [];
        this.edges = [];
        this.outerEdges = [];
        // initialise vertices and edges list
        for (var _i = 0, tris_1 = tris; _i < tris_1.length; _i++) {
            var tri = tris_1[_i];
            var p1Index = this.indexOfVertex(this.vertices, tri.point1);
            var p2Index = this.indexOfVertex(this.vertices, tri.point2);
            var p3Index = this.indexOfVertex(this.vertices, tri.point3);
            // if vertex is not in the list, add it to the list
            if (p1Index === -1) {
                this.vertices.push(tri.point1);
                p1Index = this.indexOfVertex(this.vertices, tri.point1);
            }
            // if vertex is not in the list, add it to the list
            if (p2Index === -1) {
                this.vertices.push(tri.point2);
                p2Index = this.indexOfVertex(this.vertices, tri.point2);
            }
            // if vertex is not in the list, add it to the list
            if (p3Index === -1) {
                this.vertices.push(tri.point3);
                p3Index = this.indexOfVertex(this.vertices, tri.point3);
            }
            // add all 3 edges of the tri to the edges list
            var edge1 = { v1: p1Index, v2: p2Index };
            var edge2 = { v1: p2Index, v2: p3Index };
            var edge3 = { v1: p3Index, v2: p1Index };
            // add the edges if they are not already in the list
            if (this.indexOfEdge(this.edges, edge1) === -1) {
                this.edges.push(edge1);
                this.outerEdges.push(edge1);
            }
            else {
                this.outerEdges.splice(this.indexOfEdge(this.outerEdges, edge1), 1);
            }
            if (this.indexOfEdge(this.edges, edge2) === -1) {
                this.edges.push(edge2);
                this.outerEdges.push(edge2);
            }
            else {
                this.outerEdges.splice(this.indexOfEdge(this.outerEdges, edge2), 1);
            }
            if (this.indexOfEdge(this.edges, edge3) === -1) {
                this.edges.push(edge3);
                this.outerEdges.push(edge3);
            }
            else {
                this.outerEdges.splice(this.indexOfEdge(this.outerEdges, edge3), 1);
            }
        }
        //console.log(this.vertices);
        //console.log(this.edges);
        //console.log(this.outerEdges);
    }
    return NavMesh;
}());
exports.NavMesh = NavMesh;


/***/ }),

/***/ "./src/collision/Point.ts":
/*!********************************!*\
  !*** ./src/collision/Point.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Point = /** @class */ (function () {
    function Point(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        var _this = this;
        this.x = 0;
        this.y = 0;
        this.equals = function (p) {
            return p != null && p.x === _this.x && p.y === _this.y;
        };
        this.toString = function () {
            return "Point(" + _this.x + "," + _this.y + ")";
        };
        this.x = x;
        this.y = y;
    }
    return Point;
}());
exports.Point = Point;


/***/ }),

/***/ "./src/collision/Rectangle.ts":
/*!************************************!*\
  !*** ./src/collision/Rectangle.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
var Rectangle = /** @class */ (function () {
    function Rectangle(x, y, width, height, color, line_width) {
        if (color === void 0) { color = "red"; }
        if (line_width === void 0) { line_width = 2; }
        this.x = 0;
        this.y = 0;
        this.lineWidth = 5;
        this.width = 0;
        this.height = 0;
        this.color = "blue";
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
        this.lineWidth = line_width;
    }
    Rectangle.prototype.draw = function () {
        glob_ts_1.ctx.save();
        glob_ts_1.ctx.beginPath();
        glob_ts_1.ctx.strokeStyle = this.color;
        glob_ts_1.ctx.lineWidth = this.lineWidth;
        glob_ts_1.ctx.rect(this.x, this.y, this.width, this.height);
        glob_ts_1.ctx.stroke();
        glob_ts_1.ctx.restore();
    };
    Rectangle.prototype.contains = function (x, y) {
        return (x >= this.x && x <= this.x + this.width && y >= this.y && y <= this.y + this.height);
    };
    return Rectangle;
}());
exports.Rectangle = Rectangle;


/***/ }),

/***/ "./src/collision/Triangle.ts":
/*!***********************************!*\
  !*** ./src/collision/Triangle.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
var Point_1 = __webpack_require__(/*! ./Point */ "./src/collision/Point.ts");
var Triangle = /** @class */ (function () {
    function Triangle(x1, y1, x2, y2, x3, y3) {
        var _this = this;
        this.draw = function () {
            glob_ts_1.ctx.save();
            glob_ts_1.ctx.strokeStyle = "red";
            glob_ts_1.ctx.lineWidth = 5;
            glob_ts_1.ctx.beginPath();
            glob_ts_1.ctx.moveTo(_this.point1.x, _this.point1.y);
            glob_ts_1.ctx.lineTo(_this.point2.x, _this.point2.y);
            glob_ts_1.ctx.lineTo(_this.point3.x, _this.point3.y);
            glob_ts_1.ctx.lineTo(_this.point1.x, _this.point1.y);
            glob_ts_1.ctx.stroke();
            glob_ts_1.ctx.restore();
        };
        // returns true iff the point p is a vertex of the triangle
        this.isVertex = function (p) {
            return _this.point1.equals(p) || _this.point2.equals(p) || _this.point3.equals(p);
        };
        // http://jsfiddle.net/PerroAZUL/zdaY8/1/
        this.contains = function (x, y) {
            var s = (_this.point1.y * _this.point3.x - _this.point1.x * _this.point3.y + (_this.point3.y - _this.point1.y) * x + (_this.point1.x - _this.point3.x) * y) * _this.sign;
            var t = (_this.point1.x * _this.point2.y - _this.point1.y * _this.point2.x + (_this.point1.y - _this.point2.y) * x + (_this.point2.x - _this.point1.x) * y) * _this.sign;
            return (s > 0 && t > 0 && (s + t) < 2 * _this.area * _this.sign) || (_this.isVertex(new Point_1.Point(x, y)));
        };
        this.point1 = new Point_1.Point(x1, y1);
        this.point2 = new Point_1.Point(x2, y2);
        this.point3 = new Point_1.Point(x3, y3);
        this.area = 1 / 2 * (-this.point2.y * this.point3.x + this.point1.y * (-this.point2.x + this.point3.x) + this.point1.x * (this.point2.y - this.point3.y) + this.point2.x * this.point3.y);
        this.sign = this.area < 0 ? -1 : 1;
    }
    return Triangle;
}());
exports.Triangle = Triangle;


/***/ }),

/***/ "./src/game/Interaction.ts":
/*!*********************************!*\
  !*** ./src/game/Interaction.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Interaction = /** @class */ (function () {
    // item can be null
    function Interaction(item) {
        this.item = item;
    }
    Interaction.prototype.getItem = function () {
        return this.item;
    };
    return Interaction;
}());
exports.Interaction = Interaction;


/***/ }),

/***/ "./src/game/Level.ts":
/*!***************************!*\
  !*** ./src/game/Level.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JSONLoader_1 = __webpack_require__(/*! ../resources/JSONLoader */ "./src/resources/JSONLoader.ts");
var TextureAtlas_1 = __webpack_require__(/*! ../sprites/TextureAtlas */ "./src/sprites/TextureAtlas.ts");
var StaticSprite_1 = __webpack_require__(/*! ../sprites/StaticSprite */ "./src/sprites/StaticSprite.ts");
var InteractableSprite_1 = __webpack_require__(/*! ../sprites/InteractableSprite */ "./src/sprites/InteractableSprite.ts");
var NPCSprite_1 = __webpack_require__(/*! ../sprites/NPCSprite */ "./src/sprites/NPCSprite.ts");
var SpriteAnimation_1 = __webpack_require__(/*! ../sprites/SpriteAnimation */ "./src/sprites/SpriteAnimation.ts");
var NavMesh_1 = __webpack_require__(/*! ../collision/NavMesh */ "./src/collision/NavMesh.ts");
var Triangle_1 = __webpack_require__(/*! ../collision/Triangle */ "./src/collision/Triangle.ts");
var ReceiveItemInteraction_1 = __webpack_require__(/*! ./ReceiveItemInteraction */ "./src/game/ReceiveItemInteraction.ts");
var Circle_1 = __webpack_require__(/*! ../collision/Circle */ "./src/collision/Circle.ts");
var Rectangle_1 = __webpack_require__(/*! ../collision/Rectangle */ "./src/collision/Rectangle.ts");
var Conversation_1 = __webpack_require__(/*! ../chat/Conversation */ "./src/chat/Conversation.ts");
var ContinueDialog_1 = __webpack_require__(/*! ../chat/ContinueDialog */ "./src/chat/ContinueDialog.ts");
var OptionDialog_1 = __webpack_require__(/*! ../chat/OptionDialog */ "./src/chat/OptionDialog.ts");
var ReceiveItemDialog_1 = __webpack_require__(/*! ../chat/ReceiveItemDialog */ "./src/chat/ReceiveItemDialog.ts");
var Level = /** @class */ (function () {
    function Level() {
    }
    Level.loadLevel = function (path, items) {
        return new Promise(function (resolve, reject) {
            var levelDataPromise = JSONLoader_1.JSONLoader.loadJSONFile(path).then(function (levelData) {
                // create the texture atlas
                var atlas = new TextureAtlas_1.TextureAtlas(levelData.texture_atlas);
                var textureAtlasPromise = atlas.load().catch(function () {
                    console.log("error: texture atlas could not be loaded");
                });
                var allPromises = [textureAtlasPromise];
                // create the sprites
                var staticSprites = new Array();
                var interactableSprites = new Array();
                var npcSprites = new Array();
                var _loop_1 = function (obj) {
                    if (obj.type == "interactable") {
                        var interactions = new Array();
                        for (var _i = 0, _a = obj.interactions; _i < _a.length; _i++) {
                            var inter = _a[_i];
                            if (inter.type == "receive_item") {
                                var receiveItems = new Array();
                                for (var _b = 0, _c = inter.items_received; _b < _c.length; _b++) {
                                    var itm = _c[_b];
                                    receiveItems.push(items[itm]);
                                }
                                interactions.push(new ReceiveItemInteraction_1.ReceiveItemInteraction(inter.item ? items[inter.item] : null, inter.success_text, inter.fail_text, new Audio(inter.success_audio), new Audio(inter.fail_audio), receiveItems));
                            }
                        }
                        interactableSprites.push(new InteractableSprite_1.InteractableSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, atlas, obj.image_name, obj.examine_text, new Audio(obj.examine_audio), new Circle_1.Circle(obj.x, obj.y, obj.interaction_radius), new Rectangle_1.Rectangle(obj.x - obj.click_zone_width / 2, obj.y - obj.click_zone_height / 2, obj.click_zone_width, obj.click_zone_height), interactions));
                    }
                    else if (obj.type == "npc") {
                        // load the animations
                        var atlas_1 = new TextureAtlas_1.TextureAtlas(obj.atlas);
                        var animations_1 = [];
                        var atlasLoadedPromise = atlas_1.load().then(function () {
                            for (var sequenceName in obj.animations) {
                                var seq = obj.animations[sequenceName];
                                var anim = new SpriteAnimation_1.SpriteAnimation(seq.num_frames, atlas_1, sequenceName);
                                animations_1.push(anim);
                            }
                            var npc = new NPCSprite_1.NPCSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, animations_1, obj.examine_text, new Audio(obj.examine_audio), new Circle_1.Circle(obj.x, obj.y, obj.interaction_radius), new Rectangle_1.Rectangle(obj.x - obj.click_zone_width / 2, obj.y - obj.click_zone_height / 2, obj.click_zone_width, obj.click_zone_height), Level.buildConversation(obj, items));
                            npc.setStartPos(obj.x, obj.y);
                            npc.setDepthScale(levelData.depth_scale_y);
                            npcSprites.push(npc);
                            console.log("npc atlas loaded");
                        }).catch(function () {
                            console.log('error: unable to load NPC sprite');
                            reject(null);
                        });
                        allPromises.push(atlasLoadedPromise);
                    }
                    else {
                        staticSprites.push(new StaticSprite_1.StaticSprite(obj.x, obj.y, obj.scale, obj.origin_horizontal, obj.origin_vertical, atlas, obj.image_name));
                    }
                };
                for (var _i = 0, _a = levelData.sprites; _i < _a.length; _i++) {
                    var obj = _a[_i];
                    _loop_1(obj);
                }
                // create the navmesh
                var tris = [];
                for (var _b = 0, _c = levelData.navmesh; _b < _c.length; _b++) {
                    var tri = _c[_b];
                    tris.push(new Triangle_1.Triangle(tri.x1, tri.y1, tri.x2, tri.y2, tri.x3, tri.y3));
                }
                var navmesh = new NavMesh_1.NavMesh(tris);
                Promise.all(allPromises).then(function () {
                    console.log("scene files loaded");
                    for (var _i = 0, staticSprites_1 = staticSprites; _i < staticSprites_1.length; _i++) {
                        var sprite = staticSprites_1[_i];
                        sprite.refreshImage(); // texture atlas probably hadn't loaded when sprite was initialised so refresh image
                    }
                    for (var _a = 0, interactableSprites_1 = interactableSprites; _a < interactableSprites_1.length; _a++) {
                        var sprite = interactableSprites_1[_a];
                        sprite.refreshImage(); // texture atlas probably hadn't loaded when sprite was initialised so refresh image
                    }
                    resolve({ 'textureAtlas': atlas, 'sceneScale': levelData.scene_scale,
                        'playerStartX': levelData.player_start_x, 'playerStartY': levelData.player_start_y, 'playerStarts': levelData.player_starts,
                        'depthScaleY': levelData.depth_scale_y, 'navmesh': navmesh, 'staticSprites': staticSprites,
                        'interactableSprites': interactableSprites, 'npcSprites': npcSprites });
                }).catch(function () {
                    reject(null);
                });
            }).catch(function () {
                console.log("error: failed to load level");
                reject(null);
            });
        });
    };
    Level.buildConversation = function (spriteObj, items) {
        if (spriteObj.conversation != null) {
            if (spriteObj.conversation.first_dialog != null) {
                return new Conversation_1.Conversation(Level.buildDialog(spriteObj.conversation.first_dialog, items));
            }
        }
        return null;
    };
    Level.buildDialog = function (dialog, items) {
        if (dialog.type == "continue") {
            var nextDialog = void 0;
            if (dialog.next_dialog != null) {
                nextDialog = Level.buildDialog(dialog.next_dialog, items);
            }
            return new ContinueDialog_1.ContinueDialog(dialog.text, dialog.speaker, nextDialog);
        }
        else if (dialog.type == "option") {
            var options = {};
            // create a dialog object for each option
            for (var optName in dialog.options) {
                options[optName] = Level.buildDialog(dialog.options[optName], items);
            }
            return new OptionDialog_1.OptionDialog(dialog.text, dialog.speaker, options);
        }
        else if (dialog.type == "receive_item") {
            var nextDialog = void 0;
            if (dialog.next_dialog != null) {
                nextDialog = Level.buildDialog(dialog.next_dialog, items);
            }
            var itemsLost = [];
            for (var _i = 0, _a = dialog.items_lost; _i < _a.length; _i++) {
                var id = _a[_i];
                itemsLost.push(items[id]);
            }
            var itemsReceived = [];
            for (var _b = 0, _c = dialog.items_received; _b < _c.length; _b++) {
                var id = _c[_b];
                itemsReceived.push(items[id]);
            }
            return new ReceiveItemDialog_1.ReceiveItemDialog(dialog.text, dialog.speaker, nextDialog, itemsLost, itemsReceived);
        }
        return null;
    };
    return Level;
}());
exports.Level = Level;


/***/ }),

/***/ "./src/game/ReceiveItemInteraction.ts":
/*!********************************************!*\
  !*** ./src/game/ReceiveItemInteraction.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Interaction_1 = __webpack_require__(/*! ./Interaction */ "./src/game/Interaction.ts");
var ReceiveItemInteraction = /** @class */ (function (_super) {
    __extends(ReceiveItemInteraction, _super);
    // item can be null
    function ReceiveItemInteraction(item, successText, failText, successAudio, failAudio, itemsReceived) {
        var _this = _super.call(this, item) || this;
        _this.successText = successText;
        _this.failText = failText;
        _this.successAudio = successAudio;
        _this.failAudio = failAudio;
        _this.itemsReceived = itemsReceived;
        return _this;
    }
    // interact with the object
    // returns a list of items received from the interaction
    ReceiveItemInteraction.prototype.interact = function (item) {
        if (item == this.item) {
            return { text: this.successText, audio: this.successAudio, items: this.itemsReceived };
        }
        return { text: this.failText, audio: this.failAudio, items: null };
    };
    return ReceiveItemInteraction;
}(Interaction_1.Interaction));
exports.ReceiveItemInteraction = ReceiveItemInteraction;


/***/ }),

/***/ "./src/glob.ts":
/*!*********************!*\
  !*** ./src/glob.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
function initCanvasAndContext() {
    exports.canvas = document.getElementById("canvas");
    exports.ctx = exports.canvas.getContext("2d");
    exports.ctx.globalCompositeOperation = 'destination-over';
    exports.ctx.imageSmoothingEnabled = true; // enable anti-aliasing of images
}
exports.initCanvasAndContext = initCanvasAndContext;


/***/ }),

/***/ "./src/input/InputManager.ts":
/*!***********************************!*\
  !*** ./src/input/InputManager.ts ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var InputManager = /** @class */ (function () {
    function InputManager(canvas) {
        var _this = this;
        this.primaryMouseDownCallbacks = Array();
        this.secondaryMouseDownCallbacks = Array();
        this.longTouchDuration = 500;
        this.mousedown = function (e) {
            e.preventDefault();
            // notify all callbacks
            if (e.button === 0) {
                _this.firePrimaryMouseDownEvent(e.layerX, e.layerY);
            }
            else if (e.button === 2) {
                _this.fireSecondaryMouseDownEvent(e.layerX, e.layerY);
            }
        };
        this.onlongtouch = function (e) {
            // fire secondary mouse click event
            _this.fireSecondaryMouseDownEvent(e.touches[0].clientX, e.touches[0].clientY);
        };
        this.touchstart = function (e) {
            _this.touchStartAt = Date.now();
        };
        this.touchend = function (e) {
            if (Date.now() - _this.touchStartAt >= _this.longTouchDuration) {
                _this.firePrimaryMouseDownEvent(e.touches[0].clientX, e.touches[0].clientY); // fire primary mouse click event
            }
            else {
                _this.fireSecondaryMouseDownEvent(e.touches[0].clientX, e.touches[0].clientY);
            }
        };
        this.touchmove = function (e) {
            e.preventDefault();
            if (Date.now() - _this.touchStartAt >= _this.longTouchDuration) {
                _this.firePrimaryMouseDownEvent(e.touches[0].clientX, e.touches[0].clientY); // fire primary mouse click event
            }
            else {
                _this.fireSecondaryMouseDownEvent(e.touches[0].clientX, e.touches[0].clientY);
            }
        };
        document.addEventListener("contextmenu", function (event) { return event.preventDefault(); }); // disable right click context menu
        // if(canvas != null) {
        //     canvas.addEventListener("mousedown", this.mouseDown);
        // } else {
        document.addEventListener("mousedown", this.mousedown);
        document.addEventListener("touchstart", this.touchstart);
        document.addEventListener("touchend", this.touchend);
        document.addEventListener("touchmove", this.touchmove);
        // }
        this.touchStartAt = 0;
    }
    InputManager.prototype.firePrimaryMouseDownEvent = function (x, y) {
        for (var _i = 0, _a = this.primaryMouseDownCallbacks; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback(x, y);
        }
    };
    InputManager.prototype.fireSecondaryMouseDownEvent = function (x, y) {
        for (var _i = 0, _a = this.secondaryMouseDownCallbacks; _i < _a.length; _i++) {
            var callback = _a[_i];
            callback(x, y);
        }
    };
    InputManager.prototype.addPrimaryMouseDownCallback = function (callback) {
        this.primaryMouseDownCallbacks.push(callback);
    };
    InputManager.prototype.addSecondaryMouseDownCallback = function (callback) {
        this.secondaryMouseDownCallbacks.push(callback);
    };
    return InputManager;
}());
exports.InputManager = InputManager;


/***/ }),

/***/ "./src/items/Inventory.ts":
/*!********************************!*\
  !*** ./src/items/Inventory.ts ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Inventory = /** @class */ (function () {
    function Inventory() {
        this.items = new Array(9); // MAX_NUM_ITEMS = 9
    }
    Inventory.prototype.addItem = function (item) {
        if (item != null) {
            // add the item to the first available slot
            for (var index = 0; index < this.items.length; index++) {
                if (this.items[index] == null) {
                    this.items[index] = item;
                    return true;
                }
            }
        }
        return false;
    };
    Inventory.prototype.removeItem = function (item) {
        for (var index = 0; index < this.items.length; index++) {
            if (this.items[index] === item) {
                console.log("removed " + item.getName());
                this.items[index] = null;
                return this.items[index];
            }
        }
        return null;
    };
    Inventory.prototype.removeItemByIndex = function (index) {
        if (index != null && index < this.items.length) {
            var item = this.items[index];
            this.items[index] = null;
            return item;
        }
        return null;
    };
    Inventory.prototype.moveItem = function (item, index) {
        if (this.items[index] == null) {
            var x = this.removeItem(item);
            if (x != null) {
                this.items[index] = item;
            }
        }
    };
    Inventory.prototype.clear = function () {
        for (var index = 0; index < this.items.length; index++) {
            this.items[index] = null;
        }
    };
    Inventory.prototype.getItems = function () {
        return this.items;
    };
    return Inventory;
}());
exports.Inventory = Inventory;


/***/ }),

/***/ "./src/items/Item.ts":
/*!***************************!*\
  !*** ./src/items/Item.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Item = /** @class */ (function () {
    function Item(name, examineText, examineAudio, imgpath) {
        this.name = name;
        this.examineText = examineText;
        this.examineAudio = examineAudio;
        this.imgpath = imgpath;
        this.combinations = [];
    }
    Item.prototype.combine = function (other) {
        for (var _i = 0, _a = this.combinations; _i < _a.length; _i++) {
            var cmb = _a[_i];
            // if the item is combinable, return the array of items created
            if (other === cmb.other) {
                return cmb.out;
            }
        }
        return null;
    };
    Item.prototype.addCombination = function (other, out) {
        if (other != null && out != null) {
            this.combinations.push({ other: other, out: out });
        }
    };
    Item.prototype.getName = function () {
        return this.name;
    };
    Item.prototype.getExamineText = function () {
        return this.examineText;
    };
    Item.prototype.getExamineAudio = function () {
        return this.examineAudio;
    };
    Item.prototype.getImagePath = function () {
        return this.imgpath;
    };
    Item.prototype.toString = function () {
        return "Item(" + this.name + ")";
    };
    return Item;
}());
exports.Item = Item;


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glob_1 = __webpack_require__(/*! ./glob */ "./src/glob.ts");
var InputManager_1 = __webpack_require__(/*! ./input/InputManager */ "./src/input/InputManager.ts");
var ImageLoader_1 = __webpack_require__(/*! ./resources/ImageLoader */ "./src/resources/ImageLoader.ts");
var JSONLoader_1 = __webpack_require__(/*! ./resources/JSONLoader */ "./src/resources/JSONLoader.ts");
var Level_1 = __webpack_require__(/*! ./game/Level */ "./src/game/Level.ts");
var SpriteAnimation_1 = __webpack_require__(/*! ./sprites/SpriteAnimation */ "./src/sprites/SpriteAnimation.ts");
var TextureAtlas_1 = __webpack_require__(/*! ./sprites/TextureAtlas */ "./src/sprites/TextureAtlas.ts");
var PlayerSprite_1 = __webpack_require__(/*! ./sprites/PlayerSprite */ "./src/sprites/PlayerSprite.ts");
var Item_1 = __webpack_require__(/*! ./items/Item */ "./src/items/Item.ts");
var Inventory_1 = __webpack_require__(/*! ./items/Inventory */ "./src/items/Inventory.ts");
var inputManager;
var img;
var sceneScale;
var levelScale;
var depthScaleY;
var staticSprites = new Array();
var interactableSprites = new Array();
var npcSprites = new Array();
var playerSprite;
var navmesh;
var items = {}; // database of items
var itemslotbtns = []; // array of itemslot html buttons
var itembtns = []; // array of item html buttons
var invent = new Inventory_1.Inventory(); // the player's inventory
var selectedItem; // user can select an item from inventory by left clicking
var selectedItemBtn;
var fbWidth;
var fbHeight;
var lastTime;
function gameLoop() {
    requestAnimationFrame(gameLoop);
    glob_1.ctx.fillStyle = "black";
    glob_1.ctx.fillRect(0, 0, fbWidth, fbHeight);
    // set origin to the canvas's centre
    glob_1.ctx.save();
    glob_1.ctx.translate(fbWidth / 2, fbHeight / 2);
    glob_1.ctx.scale(sceneScale, sceneScale);
    var currentTime = Date.now();
    var deltaTime = currentTime - lastTime;
    // draw the scene specific sprites
    for (var _i = 0, staticSprites_1 = staticSprites; _i < staticSprites_1.length; _i++) {
        var sprite = staticSprites_1[_i];
        sprite.draw(currentTime, deltaTime);
    }
    // draw the sprites which the player can interact with
    for (var _a = 0, interactableSprites_1 = interactableSprites; _a < interactableSprites_1.length; _a++) {
        var sprite = interactableSprites_1[_a];
        sprite.draw(currentTime, deltaTime);
    }
    // draw the NPC sprites
    for (var _b = 0, npcSprites_1 = npcSprites; _b < npcSprites_1.length; _b++) {
        var sprite = npcSprites_1[_b];
        sprite.draw(currentTime, deltaTime);
    }
    // draw the player sprite
    playerSprite.draw(currentTime, deltaTime);
    // DEBUG - draw the collision boxes
    navmesh.draw();
    // restore canvas to original settings
    glob_1.ctx.restore();
    lastTime = currentTime;
}
function addInputCallbacks() {
    inputManager.addPrimaryMouseDownCallback(function (mousex, mousey) {
        var x = (mousex - glob_1.canvas.offsetLeft - fbWidth / 2) / sceneScale;
        var y = (mousey - glob_1.canvas.offsetTop - fbHeight / 2) / sceneScale;
        console.log("left mouse down at (" + x + ", " + y + ")");
        var interactedWithSprite = false;
        // check for clicks on interactable (static) sprites
        for (var _i = 0, interactableSprites_2 = interactableSprites; _i < interactableSprites_2.length; _i++) {
            var sprite = interactableSprites_2[_i];
            if (sprite.inInteractionZone(playerSprite.x, playerSprite.y) && sprite.inClickZone(x, y)) {
                // interact with the sprite
                var obj = sprite.interact(selectedItem);
                if (obj != null) {
                    playerSprite.openSpeechBubble(obj.text);
                    for (var _a = 0, _b = obj.items; _a < _b.length; _a++) {
                        var itm = _b[_a];
                        invent.addItem(itm);
                        refreshAllItemsDisplayed();
                    }
                    if (obj.audio != null) {
                        obj.audio.play();
                    }
                }
                else {
                    playerSprite.openSpeechBubble("That's a rubbish idea!");
                }
                interactedWithSprite = true;
                break;
            }
        }
        // check for clicks on NPC sprites
        for (var _c = 0, npcSprites_2 = npcSprites; _c < npcSprites_2.length; _c++) {
            var sprite = npcSprites_2[_c];
            if (sprite.inInteractionZone(playerSprite.x, playerSprite.y) && sprite.inClickZone(x, y)) {
                openChatGUI(sprite.getConversation());
                interactedWithSprite = true;
            }
        }
        if (!interactedWithSprite) {
            var waypoints = navmesh.getWaypoints(playerSprite.x, playerSprite.y, x, y);
            playerSprite.setWaypoints(waypoints);
        }
    });
    inputManager.addSecondaryMouseDownCallback(function (mousex, mousey) {
        var x = (mousex - glob_1.canvas.offsetLeft - fbWidth / 2) / sceneScale;
        var y = (mousey - glob_1.canvas.offsetTop - fbHeight / 2) / sceneScale;
        console.log("right mouse down at (" + x + ", " + y + ")");
        // check for clicks on interactable (static) sprites
        for (var _i = 0, interactableSprites_3 = interactableSprites; _i < interactableSprites_3.length; _i++) {
            var sprite = interactableSprites_3[_i];
            if (sprite.inClickZone(x, y)) {
                // examine the interactable sprite
                playerSprite.openSpeechBubble(sprite.getExamineText());
                if (sprite.getExamineAudio() != null) {
                    sprite.getExamineAudio().play();
                }
                break;
            }
        }
        // check for clicks on NPC sprites
        for (var _a = 0, npcSprites_3 = npcSprites; _a < npcSprites_3.length; _a++) {
            var sprite = npcSprites_3[_a];
            if (sprite.inClickZone(x, y)) {
                // examine the NPC sprite
                playerSprite.openSpeechBubble(sprite.getExamineText());
                if (sprite.getExamineAudio() != null) {
                    sprite.getExamineAudio().play();
                }
                break;
            }
        }
    });
}
function loadPlayerSprite() {
    return new Promise(function (resolve, reject) {
        var atlas = new TextureAtlas_1.TextureAtlas("res/atlases/animated.png");
        var playerSprite;
        var atlasLoadedPromise = atlas.load().then(function () {
            var TEST_ANIMATION = new SpriteAnimation_1.SpriteAnimation(2, atlas, "animated");
            playerSprite = new PlayerSprite_1.PlayerSprite(100, 200, 1.25, "centre", "top", [TEST_ANIMATION]);
            playerSprite.setCurrentAnimation(0);
        }).catch(function () {
            console.log('error: unable to load player sprite texture atlas');
            reject(null);
        });
        var speechBubbleImage;
        var speechBubbleLoadedPromise = ImageLoader_1.ImageLoader.loadImage("res/images/speech_bubble.png").then(function (img) {
            speechBubbleImage = img;
        }).catch(function () {
            console.log("error: speech bubble image could not be loaded");
            reject(null);
        });
        Promise.all([atlasLoadedPromise, speechBubbleLoadedPromise]).then(function () {
            playerSprite.setSpeechBubbleImage(speechBubbleImage);
            resolve(playerSprite);
        });
    });
}
// program entry point
window.onload = function () {
    glob_1.initCanvasAndContext();
    inputManager = new InputManager_1.InputManager(glob_1.canvas);
    addInputCallbacks();
    // set the canvas size
    glob_1.canvas.width = window.innerWidth * 0.95;
    glob_1.canvas.height = window.innerHeight * 0.95;
    fbWidth = glob_1.canvas.width;
    fbHeight = glob_1.canvas.height;
    // level setup data
    var playerStartX = 0;
    var playerStartY = 0;
    var loadPlayerSpritePromise = loadPlayerSprite().then(function (sprite) {
        playerSprite = sprite;
    }).catch(function () {
        console.log("error");
    });
    var loadItemsPromise = JSONLoader_1.JSONLoader.loadJSONFile("res/items/items.json").then(function (obj) {
        //console.log(obj.items)
        for (var id in obj.items) {
            var itm = obj.items[id];
            items[id] = new Item_1.Item(itm.name, itm.examine_text, new Audio(itm.examine_audio), itm.image);
        }
        for (var id in obj.combinations) {
            var combination = obj.combinations[id];
            var item1 = items[combination.item1];
            var item2 = items[combination.item2];
            var itemsOut = [];
            for (var _i = 0, _a = combination.items_out; _i < _a.length; _i++) {
                var idOut = _a[_i];
                itemsOut.push(items[idOut]);
            }
            if (item1 != null && item2 != null) {
                item1.addCombination(item2, itemsOut);
                item2.addCombination(item1, itemsOut);
            }
        }
        loadPlayerInventory("ack");
        initGUIControllers();
    }).catch(function () {
        console.log("error: items could not be loaded");
    }).then(function () {
        return Level_1.Level.loadLevel("res/levels/level1.json", items);
    }).then(function (levelData) {
        img = levelData.backgroundImg;
        staticSprites = levelData.staticSprites;
        interactableSprites = levelData.interactableSprites;
        npcSprites = levelData.npcSprites;
        levelScale = levelData.sceneScale ? levelData.sceneScale : 1.0;
        sceneScale = levelScale * glob_1.canvas.height / 880; // scale based on the canvas size so game fits on screen
        depthScaleY = levelData.depthScaleY;
        playerStartX = levelData.playerStartX;
        playerStartY = levelData.playerStartY;
        navmesh = levelData.navmesh;
    }).catch(function () {
        console.log("error: level could not be loaded");
    });
    Promise.all([loadPlayerSpritePromise, loadItemsPromise]).then(function () {
        playerSprite.x = playerStartX;
        playerSprite.y = playerStartY;
        playerSprite.setStartPos(playerStartX, playerStartY);
        playerSprite.setDepthScale(depthScaleY);
        lastTime = Date.now();
        gameLoop();
    }).catch(function () {
        console.log("error: game could not be loaded");
    });
};
// on window resize change the scale
window.onresize = function () {
    // set the canvas size
    glob_1.canvas.width = window.innerWidth * 0.95;
    glob_1.canvas.height = window.innerHeight * 0.95;
    fbWidth = glob_1.canvas.width;
    fbHeight = glob_1.canvas.height;
    sceneScale = levelScale * glob_1.canvas.height / 880; // scale based on the canvas size so game fits on screen
    console.log(sceneScale);
};
// load the player's inventory
function loadPlayerInventory(path) {
    // TODO - load from file
    //invent.addItem(items["0.0.1-001"]);
    //invent.addItem(items["0.0.1-002"]);
    //invent.addItem(items["0.0.1-002"]);
    //invent.addItem(items["0.0.1-003"]);
}
// chat gui
function openChatGUI(conversation) {
    if (conversation != null) {
        var chatpanel = document.getElementById("chatpanel");
        if (chatpanel != null) {
            // remove the chat panel if it already exists
            chatpanel.parentNode.removeChild(chatpanel);
        }
        chatpanel = document.createElement("div");
        chatpanel.id = "chatpanel";
        document.body.insertBefore(chatpanel, document.getElementById("invent"));
        // create a GUI for the dialog
        var d = conversation.getFirstDialog();
        createDialogGUI(chatpanel, d);
    }
}
function createDialogGUI(chatpanel, d) {
    chatpanel.innerHTML = ""; // clear the div of previous contents
    // add a button for exiting the conversation
    // NOTE - probably not needed
    /*let exitbtn = document.createElement("button");
    exitbtn.classList.add("exitchatbtn");
    exitbtn.innerHTML = "Exit Conversation";
    chatpanel.appendChild(exitbtn);
    exitbtn.onclick = () => {
        // exit the conversation
        chatpanel.parentNode.removeChild(chatpanel);
    };*/
    if (d != null) {
        // add the speaker image based on whether player or npc is speaking
        var speakerimg = document.createElement("img");
        speakerimg.src = "res/images/player_head.png";
        speakerimg.classList.add(d.getSpeaker() == "player" ? "playerchathead" : "npcchathead");
        chatpanel.appendChild(speakerimg);
        // add labels and buttons for this dialog
        d.createGUIElement(chatpanel).then(function (nextDialog) {
            if (nextDialog != null) {
                // advance to next dialog
                createDialogGUI(chatpanel, nextDialog);
            }
            else {
                // next dialog is null, therefore, exit conversation
                chatpanel.parentNode.removeChild(chatpanel);
            }
        });
    }
}
// gui control
function initGUIControllers() {
    // get all of the item slot html buttons
    itemslotbtns.push(document.getElementById("itemslot1"));
    itemslotbtns.push(document.getElementById("itemslot2"));
    itemslotbtns.push(document.getElementById("itemslot3"));
    itemslotbtns.push(document.getElementById("itemslot4"));
    itemslotbtns.push(document.getElementById("itemslot5"));
    itemslotbtns.push(document.getElementById("itemslot6"));
    itemslotbtns.push(document.getElementById("itemslot7"));
    itemslotbtns.push(document.getElementById("itemslot8"));
    itemslotbtns.push(document.getElementById("itemslot9"));
    // add a button for each item in the player's inventory
    for (var index = 0; index < invent.getItems().length; index++) {
        var item = invent.getItems()[index];
        if (item != null) {
            // add a button for each item in the player's inventory
            addNewItemButton(index, item);
        }
    }
    var _loop_1 = function (index) {
        var itemslotbtn = itemslotbtns[index];
        itemslotbtn.onclick = function (evt) {
            onItemSlotClick(itemslotbtn, index, evt);
        };
    };
    for (var index = 0; index < itemslotbtns.length; index++) {
        _loop_1(index);
    }
}
function addNewItemButton(itemslotIndex, item) {
    // add a button for the item
    var itembtn = document.createElement("button");
    itembtn.classList.add("item");
    itembtn.style.cssText = "background-image: url(" + item.getImagePath() + ");";
    document.getElementById("invent").insertBefore(itembtn, itemslotbtns[itemslotIndex]);
    // add a mouse click callback to the new element
    itembtn.onclick = function (evt) {
        onItemClick(itembtn, item, evt);
    };
}
function refreshAllItemsDisplayed() {
    // first, remove all item buttons from the dom
    var elems = document.getElementsByClassName("item");
    for (var index = 0; index < elems.length; index++) {
        var element = elems[index];
        element.parentNode.removeChild(element);
    }
    // add a button for each item in the player's inventory
    for (var index = 0; index < invent.getItems().length; index++) {
        var item = invent.getItems()[index];
        if (item != null) {
            // add a button for each item in the player's inventory
            addNewItemButton(index, item);
        }
    }
}
function refreshItemDisplayed(itembtn, item) {
    if (item != null) {
        // change the image displayed on the item button
        itembtn.style.cssText = "background-image: url(" + item.getImagePath() + ");";
    }
    else {
        // remove the item button from the dom
        itembtn.parentNode.removeChild(itembtn);
    }
}
function onItemSlotClick(itemslotbtn, itemslotIndex, evt) {
    // move selected item to this slot
    if (selectedItem != null && selectedItemBtn != null) {
        // remove from previous itemslot and add to new itemslot
        selectedItemBtn.classList.remove("selecteditem");
        refreshItemDisplayed(selectedItemBtn, null);
        addNewItemButton(itemslotIndex, selectedItem);
        invent.moveItem(selectedItem, itemslotIndex);
        console.log(invent.getItems());
        selectedItem = null;
        selectedItemBtn = null;
    }
}
function onItemClick(itembtn, item, evt) {
    if (evt.button === 0) {
        // combine 2 items, (can't combine item with itself)
        if (selectedItem != null && selectedItemBtn != null && item !== selectedItem) {
            var outItems = selectedItem.combine(item);
            if (outItems != null) {
                refreshItemDisplayed(selectedItemBtn, null);
                refreshItemDisplayed(itembtn, null);
                invent.removeItem(selectedItem);
                invent.removeItem(item);
                for (var _i = 0, outItems_1 = outItems; _i < outItems_1.length; _i++) {
                    var outItem = outItems_1[_i];
                    invent.addItem(outItem);
                }
                selectedItem = null;
                selectedItemBtn = null;
                console.log(invent.getItems());
                refreshAllItemsDisplayed();
            }
            else {
                selectedItemBtn.classList.remove("selecteditem");
                selectedItem = null;
                selectedItemBtn = null;
            }
        }
        else {
            if (item === selectedItem) {
                selectedItemBtn.classList.remove("selecteditem");
                selectedItem = null;
                selectedItemBtn = null;
            }
            else {
                selectedItem = item;
                selectedItemBtn = itembtn;
                selectedItemBtn.classList.add("selecteditem");
            }
        }
    }
    else if (evt.button === 2) {
        playerSprite.openSpeechBubble(item.getExamineText());
        if (item.getExamineAudio() != null) {
            item.getExamineAudio().play();
        }
    }
}


/***/ }),

/***/ "./src/resources/ImageLoader.ts":
/*!**************************************!*\
  !*** ./src/resources/ImageLoader.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

//declare Promise any;
Object.defineProperty(exports, "__esModule", { value: true });
var ImageLoader = /** @class */ (function () {
    function ImageLoader() {
    }
    ImageLoader.loadImage = function (path) {
        return new Promise(function (resolve, reject) {
            var img = new Image();
            img.src = path;
            img.onload = function () {
                resolve(img);
            };
            img.onerror = function (err) {
                reject(null);
            };
        });
    };
    return ImageLoader;
}());
exports.ImageLoader = ImageLoader;


/***/ }),

/***/ "./src/resources/JSONLoader.ts":
/*!*************************************!*\
  !*** ./src/resources/JSONLoader.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JSONLoader = /** @class */ (function () {
    function JSONLoader() {
    }
    JSONLoader.loadJSONFile = function (path) {
        return new Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    var obj = JSON.parse(xhr.responseText);
                    resolve(obj);
                }
                else if (xhr.readyState === XMLHttpRequest.DONE && xhr.status !== 200) {
                    console.log(xhr.status);
                    console.log(xhr.statusText);
                    reject(null);
                }
            };
            //console.log(path);
            xhr.open("GET", path, true);
            xhr.send();
        });
    };
    return JSONLoader;
}());
exports.JSONLoader = JSONLoader;


/***/ }),

/***/ "./src/sprites/AnimatedSprite.ts":
/*!***************************************!*\
  !*** ./src/sprites/AnimatedSprite.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Sprite_1 = __webpack_require__(/*! ./Sprite */ "./src/sprites/Sprite.ts");
var AnimatedSprite = /** @class */ (function (_super) {
    __extends(AnimatedSprite, _super);
    function AnimatedSprite(x, y, scale, originHorizontal, originVertical, anims) {
        var _this = _super.call(this, x, y, scale, originHorizontal, originVertical) || this;
        _this.spriteAnimations = [];
        _this.currentAnimation = -1;
        _this.setCurrentAnimation = function (newAnimationIndex) {
            if (newAnimationIndex < _this.spriteAnimations.length) {
                _this.currentAnimation = newAnimationIndex;
            }
        };
        _this.addSpriteAnimation = function (anim) {
            if (anim != null) {
                _this.spriteAnimations.push(anim);
            }
        };
        _this.setSpriteAnimations = function (anims) {
            if (anims != null) {
                _this.spriteAnimations = anims;
                _this.currentAnimation = -1;
            }
        };
        if (anims != null) {
            _this.spriteAnimations = anims;
        }
        return _this;
    }
    AnimatedSprite.prototype.draw = function (currentTime, deltaTime) {
        if (this.currentAnimation >= 0) {
            var anim = this.spriteAnimations[this.currentAnimation];
            this.refreshOrigin(anim.getCurrentFrame().w, anim.getCurrentFrame().h);
            anim.draw(currentTime, this.originX, this.originY, this.scale);
        }
    };
    AnimatedSprite.prototype.setPos = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return AnimatedSprite;
}(Sprite_1.Sprite));
exports.AnimatedSprite = AnimatedSprite;


/***/ }),

/***/ "./src/sprites/InteractableSprite.ts":
/*!*******************************************!*\
  !*** ./src/sprites/InteractableSprite.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var StaticSprite_1 = __webpack_require__(/*! ./StaticSprite */ "./src/sprites/StaticSprite.ts");
var InteractableSprite = /** @class */ (function (_super) {
    __extends(InteractableSprite, _super);
    function InteractableSprite(x, y, scale, originHorizontal, originVertical, atlas, imageName, examineText, examineAudio, interactionZone, clickZone, interactions) {
        var _this = _super.call(this, x, y, scale, originHorizontal, originVertical, atlas, imageName) || this;
        _this.examineText = examineText;
        _this.examineAudio = examineAudio;
        _this.interactionZone = interactionZone;
        _this.clickZone = clickZone;
        _this.interactions = interactions;
        return _this;
    }
    InteractableSprite.prototype.draw = function (currentTime, deltaTime) {
        _super.prototype.draw.call(this, currentTime, deltaTime);
        // DEBUG - draw the circle and rectangle
        this.clickZone.draw();
        this.interactionZone.draw();
    };
    InteractableSprite.prototype.inInteractionZone = function (x, y) {
        return this.interactionZone.contains(x, y);
    };
    InteractableSprite.prototype.inClickZone = function (x, y) {
        return this.clickZone.contains(x, y);
    };
    // interact with the sprite
    // item can be null
    InteractableSprite.prototype.interact = function (item) {
        for (var _i = 0, _a = this.interactions; _i < _a.length; _i++) {
            var inter = _a[_i];
            // if the items match, then interact with the object
            if (inter.getItem() == item) {
                var obj = inter.interact(item);
                if (obj != null) {
                    // remove the interaction if it has been fulfilled
                    this.interactions.splice(this.interactions.indexOf(inter), 1);
                }
                return obj;
            }
        }
        return null;
    };
    InteractableSprite.prototype.getExamineText = function () {
        return this.examineText;
    };
    InteractableSprite.prototype.getExamineAudio = function () {
        return this.examineAudio;
    };
    return InteractableSprite;
}(StaticSprite_1.StaticSprite));
exports.InteractableSprite = InteractableSprite;


/***/ }),

/***/ "./src/sprites/NPCSprite.ts":
/*!**********************************!*\
  !*** ./src/sprites/NPCSprite.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
var NavSprite_1 = __webpack_require__(/*! ./NavSprite */ "./src/sprites/NavSprite.ts");
var NPCSprite = /** @class */ (function (_super) {
    __extends(NPCSprite, _super);
    function NPCSprite(x, y, scale, originHorizontal, originVertical, anims, examineText, examineAudio, interactionZone, clickZone, conversation, moveSpeed) {
        if (moveSpeed === void 0) { moveSpeed = 0.5; }
        var _this = _super.call(this, x, y, scale, originHorizontal, originVertical, anims, moveSpeed) || this;
        _this.examineText = examineText;
        _this.examineAudio = examineAudio;
        _this.interactionZone = interactionZone;
        _this.clickZone = clickZone;
        _this.conversation = conversation;
        _this.speechBubbleOpen = false;
        _this.BASE_FONT_SIZE = 75;
        _this.setCurrentAnimation(0);
        return _this;
    }
    NPCSprite.prototype.draw = function (currentTime, deltaTime) {
        _super.prototype.draw.call(this, currentTime, deltaTime);
        if (this.speechBubbleOpen) {
            // draw the speech bubble
            glob_ts_1.ctx.save();
            glob_ts_1.ctx.translate(this.x, this.originY);
            glob_ts_1.ctx.scale(this.scale, this.scale);
            glob_ts_1.ctx.shadowColor = "#555555";
            glob_ts_1.ctx.shadowBlur = 5;
            glob_ts_1.ctx.fillStyle = "#1AFF80"; // green: #1AFF80, amber: #FFB642, blue: #2ECFFF
            glob_ts_1.ctx.fillText(this.speechBubbleText, -this.textWidth / 2, 0);
            glob_ts_1.ctx.restore();
            // speech bubble lasts 1/2 second for each word
            if (currentTime - this.speechBubbleShownAt >= this.speechBubbleText.split(" ").length * 500 + 500) {
                this.speechBubbleOpen = false;
            }
        }
        // DEBUG - draw the circle and rectangle
        this.clickZone.draw();
        this.interactionZone.draw();
    };
    NPCSprite.prototype.openSpeechBubble = function (text) {
        if (text != null) {
            this.speechBubbleOpen = true;
            this.speechBubbleText = text;
            this.speechBubbleShownAt = Date.now();
            glob_ts_1.ctx.font = this.BASE_FONT_SIZE + "px Bookman";
            this.textWidth = glob_ts_1.ctx.measureText(text).width;
        }
    };
    NPCSprite.prototype.getConversation = function () {
        return this.conversation;
    };
    NPCSprite.prototype.inInteractionZone = function (x, y) {
        return this.interactionZone.contains(x, y);
    };
    NPCSprite.prototype.inClickZone = function (x, y) {
        return this.clickZone.contains(x, y);
    };
    NPCSprite.prototype.getExamineText = function () {
        return this.examineText;
    };
    NPCSprite.prototype.getExamineAudio = function () {
        return this.examineAudio;
    };
    return NPCSprite;
}(NavSprite_1.NavSprite));
exports.NPCSprite = NPCSprite;


/***/ }),

/***/ "./src/sprites/NavSprite.ts":
/*!**********************************!*\
  !*** ./src/sprites/NavSprite.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var AnimatedSprite_1 = __webpack_require__(/*! ./AnimatedSprite */ "./src/sprites/AnimatedSprite.ts");
var NavSprite = /** @class */ (function (_super) {
    __extends(NavSprite, _super);
    function NavSprite(x, y, scale, originHorizontal, originVertical, anims, moveSpeed) {
        if (moveSpeed === void 0) { moveSpeed = 0.5; }
        var _this = _super.call(this, x, y, scale, originHorizontal, originVertical, anims) || this;
        _this.moveSpeed = moveSpeed;
        return _this;
    }
    NavSprite.prototype.draw = function (currentTime, deltaTime) {
        // move towards the next waypoint
        if (this.nextWaypoint != null) {
            var angle = Math.atan(Math.abs(this.nextWaypoint.y - this.y) / Math.abs(this.nextWaypoint.x - this.x));
            var moveSpeedX = this.moveSpeed * deltaTime * Math.cos(angle) * this.scale;
            var moveSpeedY = this.moveSpeed * deltaTime * Math.sin(angle) * this.scale;
            // if the sprite has reached the waypoint (or thereabouts) then get the next waypoint
            if (this.x >= this.nextWaypoint.x - 5 && this.x <= this.nextWaypoint.x + 5 &&
                this.y >= this.nextWaypoint.y - 5 && this.y <= this.nextWaypoint.y + 5) {
                //console.log("arrived", this.x, this.y);
                this.x = this.nextWaypoint.x;
                this.y = this.nextWaypoint.y;
                if (this.waypoints != null && this.waypoints.length > 0) {
                    this.nextWaypoint = this.waypoints.pop();
                }
                else {
                    this.nextWaypoint = null;
                }
            }
            // move towards the next waypoint
            if (this.nextWaypoint != null) {
                if (this.x < this.nextWaypoint.x - 5) {
                    this.x += moveSpeedX;
                }
                else if (this.x > this.nextWaypoint.x + 5) {
                    this.x -= moveSpeedX;
                }
                if (this.y < this.nextWaypoint.y - 5) {
                    this.y += moveSpeedY;
                }
                else if (this.y > this.nextWaypoint.y + 5) {
                    this.y -= moveSpeedY;
                }
            }
        }
        // scale the player based on the depth of the mouse position
        this.scale = this.baseScale * Math.pow(this.depthScaleY, (this.startY - this.y));
        _super.prototype.draw.call(this, currentTime, deltaTime);
    };
    NavSprite.prototype.setWaypoints = function (waypoints) {
        this.waypoints = waypoints;
        this.nextWaypoint = null;
        if (this.waypoints != null && this.waypoints.length > 0) {
            console.log(this.waypoints);
            this.nextWaypoint = this.waypoints.pop();
            console.log("next: " + this.nextWaypoint.x + ", " + this.nextWaypoint.y);
        }
    };
    NavSprite.prototype.setDepthScale = function (depthScaleY) {
        this.depthScaleY = depthScaleY;
    };
    NavSprite.prototype.setStartPos = function (x, y) {
        this.startX = x;
        this.startY = y;
    };
    return NavSprite;
}(AnimatedSprite_1.AnimatedSprite));
exports.NavSprite = NavSprite;


/***/ }),

/***/ "./src/sprites/PlayerSprite.ts":
/*!*************************************!*\
  !*** ./src/sprites/PlayerSprite.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
var NavSprite_1 = __webpack_require__(/*! ./NavSprite */ "./src/sprites/NavSprite.ts");
var PlayerSprite = /** @class */ (function (_super) {
    __extends(PlayerSprite, _super);
    function PlayerSprite(x, y, scale, originHorizontal, originVertical, anims, moveSpeed) {
        if (moveSpeed === void 0) { moveSpeed = 0.5; }
        var _this = _super.call(this, x, y, scale, originHorizontal, originVertical, anims, moveSpeed) || this;
        _this.speechBubbleOpen = false;
        _this.BASE_FONT_SIZE = 75;
        return _this;
    }
    PlayerSprite.prototype.draw = function (currentTime, deltaTime) {
        _super.prototype.draw.call(this, currentTime, deltaTime);
        if (this.speechBubbleOpen) {
            // draw the speech bubble
            glob_ts_1.ctx.save();
            glob_ts_1.ctx.translate(this.x, this.originY);
            //ctx.drawImage(this.speechBubbleImage, -this.speechBubbleImage.width/2 * this.scale, -this.speechBubbleImage.height/2 * this.scale, this.speechBubbleImage.width * this.scale, this.speechBubbleImage.height * this.scale);
            glob_ts_1.ctx.scale(this.scale, this.scale);
            glob_ts_1.ctx.shadowColor = "#555555";
            glob_ts_1.ctx.shadowBlur = 5;
            glob_ts_1.ctx.fillStyle = "#1AFF80"; // green: #1AFF80, amber: #FFB642, blue: #2ECFFF
            glob_ts_1.ctx.fillText(this.speechBubbleText, -this.textWidth / 2, 0);
            glob_ts_1.ctx.restore();
            // speech bubble lasts 1/2 second for each word
            if (currentTime - this.speechBubbleShownAt >= this.speechBubbleText.split(" ").length * 500 + 500) {
                this.speechBubbleOpen = false;
            }
        }
    };
    PlayerSprite.prototype.openSpeechBubble = function (text) {
        if (text != null) {
            this.speechBubbleOpen = true;
            this.speechBubbleText = text;
            this.speechBubbleShownAt = Date.now();
            glob_ts_1.ctx.font = this.BASE_FONT_SIZE + "px Bookman";
            this.textWidth = glob_ts_1.ctx.measureText(text).width;
            // create a div containing the text so the pixel width of text can be calculated
            // https://stackoverflow.com/questions/118241/calculate-text-width-with-javascript
            /*let div = document.createElement("div");
            div.style.cssText = `position: absolute; visibility: hidden; height: auto; width: auto; white-space: nowrap; font-size: ${this.BASE_FONT_SIZE}`;
            document.body.insertBefore(div, null);
            this.textWidth = div.clientWidth + 1;*/
            console.log("text width", this.textWidth);
        }
    };
    PlayerSprite.prototype.setSpeechBubbleImage = function (img) {
        this.speechBubbleImage = img;
    };
    return PlayerSprite;
}(NavSprite_1.NavSprite));
exports.PlayerSprite = PlayerSprite;


/***/ }),

/***/ "./src/sprites/Sprite.ts":
/*!*******************************!*\
  !*** ./src/sprites/Sprite.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var Sprite = /** @class */ (function () {
    function Sprite(x, y, scale, originHorizontal, originVertical, depth) {
        if (depth === void 0) { depth = 0; }
        this.x = x;
        this.y = y;
        this.scale = scale;
        this.originHorizontal = originHorizontal;
        this.originVertical = originVertical;
        this.depth = depth;
        this.baseScale = this.scale;
    }
    Sprite.prototype.refreshOrigin = function (width, height) {
        // calculate the position at which to draw the sprite
        if (this.originHorizontal == "right") {
            this.originX = this.x - width * this.scale;
        }
        else if (this.originHorizontal == "left") {
            this.originX = this.x;
        }
        else {
            this.originX = this.x - width / 2 * this.scale;
        }
        // calculate the position at which to draw the sprite
        if (this.originVertical == "top") {
            this.originY = this.y - height * this.scale;
        }
        else if (this.originVertical == "bottom") {
            this.originY = this.y;
        }
        else {
            this.originY = this.y - height / 2 * this.scale;
        }
    };
    return Sprite;
}());
exports.Sprite = Sprite;


/***/ }),

/***/ "./src/sprites/SpriteAnimation.ts":
/*!****************************************!*\
  !*** ./src/sprites/SpriteAnimation.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
var SpriteAnimation = /** @class */ (function () {
    function SpriteAnimation(numFrames, atlas, sequenceName) {
        var _this = this;
        this.numFrames = numFrames;
        this.atlas = atlas;
        this.sequenceName = sequenceName;
        // http://www.typescriptgames.com/AnimatedSprites.html
        this.currentFrame = 0;
        this.lastTime = Date.now();
        this.draw = function (currentTime, x, y, scale) {
            var frame = _this.getCurrentFrame();
            if (frame.frameDuration <= currentTime - _this.lastTime) {
                _this.currentFrame++;
                if (_this.currentFrame >= _this.numFrames) {
                    _this.currentFrame = 0;
                }
                _this.lastTime = currentTime;
                frame = _this.getCurrentFrame();
            }
            // sprites are drawn from their centre-x, bottom-y, i.e. feet position
            //let topLeftX = x - frame.w/2 * scale;
            //let topLeftY = y - frame.h * scale;
            glob_ts_1.ctx.save();
            glob_ts_1.ctx.translate(x, y);
            glob_ts_1.ctx.rect(frame.x, frame.y, frame.w, frame.h);
            glob_ts_1.ctx.drawImage(_this.atlas.image, frame.x, frame.y, frame.w, frame.h, frame.offsetx, frame.offsety, frame.w * scale, frame.h * scale);
            glob_ts_1.ctx.restore();
        };
        this.getCurrentFrame = function () {
            if (_this.currentFrame > 9) {
                return _this.atlas.frames[_this.sequenceName + "_" + _this.currentFrame.toString()];
            }
            return _this.atlas.frames[_this.sequenceName + "_" + "0" + _this.currentFrame.toString()];
        };
    }
    return SpriteAnimation;
}());
exports.SpriteAnimation = SpriteAnimation;


/***/ }),

/***/ "./src/sprites/StaticSprite.ts":
/*!*************************************!*\
  !*** ./src/sprites/StaticSprite.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var glob_ts_1 = __webpack_require__(/*! ../glob.ts */ "./src/glob.ts");
var Sprite_1 = __webpack_require__(/*! ./Sprite */ "./src/sprites/Sprite.ts");
var StaticSprite = /** @class */ (function (_super) {
    __extends(StaticSprite, _super);
    function StaticSprite(x, y, scale, originHorizontal, originVertical, atlas, imageName) {
        var _this = _super.call(this, x, y, scale, originHorizontal, originVertical) || this;
        _this.atlas = atlas;
        _this.imageName = imageName;
        return _this;
    }
    StaticSprite.prototype.refreshImage = function () {
        this.image = this.atlas.frames[this.imageName]; // get the image from the atlas
        this.refreshOrigin(this.image.w, this.image.h);
    };
    StaticSprite.prototype.draw = function (currentTime, deltaTime) {
        glob_ts_1.ctx.save();
        glob_ts_1.ctx.translate(this.originX, this.originY);
        glob_ts_1.ctx.rect(this.image.x, this.image.y, this.image.w, this.image.h);
        glob_ts_1.ctx.drawImage(this.atlas.image, this.image.x, this.image.y, this.image.w, this.image.h, this.image.offsetx, this.image.offsety, this.image.w * this.scale, this.image.h * this.scale);
        glob_ts_1.ctx.restore();
    };
    return StaticSprite;
}(Sprite_1.Sprite));
exports.StaticSprite = StaticSprite;


/***/ }),

/***/ "./src/sprites/TextureAtlas.ts":
/*!*************************************!*\
  !*** ./src/sprites/TextureAtlas.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var JSONLoader_1 = __webpack_require__(/*! ../resources/JSONLoader */ "./src/resources/JSONLoader.ts");
var ImageLoader_1 = __webpack_require__(/*! ../resources/ImageLoader */ "./src/resources/ImageLoader.ts");
var TextureAtlasFrame_1 = __webpack_require__(/*! ./TextureAtlasFrame */ "./src/sprites/TextureAtlasFrame.ts");
var TextureAtlas = /** @class */ (function () {
    function TextureAtlas(atlasName) {
        // http://www.typescriptgames.com/TextureAtlas.html
        this.frames = {};
        this.taLoadComplete = false;
        this.image = new Image();
        this.atlasName = "";
        this.imageFileName = "";
        this.jsonFileName = "";
        this.atlasName = atlasName;
        this.imageFileName = atlasName;
        this.jsonFileName = atlasName.replace(".png", "") + ".json";
    }
    TextureAtlas.prototype.load = function () {
        var _this = this;
        var imgPromise = ImageLoader_1.ImageLoader.loadImage(this.imageFileName).then(function (img) {
            _this.image = img;
        }).catch(function () {
            console.log('error: unable to load ' + _this.imageFileName);
        });
        var jsonPromise = JSONLoader_1.JSONLoader.loadJSONFile(this.jsonFileName).then(function (data) {
            _this.createFrames(data);
        }).catch(function () {
            console.log('error: unable to load ' + _this.jsonFileName);
        });
        return Promise.all([imgPromise, jsonPromise]).then(function () {
            console.log(_this.atlasName + ' loaded successfully');
        }).catch(function () {
            console.log('error: ' + _this.atlasName + ' failed to load');
        });
    };
    TextureAtlas.prototype.createFrames = function (data) {
        for (var name_1 in data.frames) {
            var spriteData = data.frames[name_1];
            var frame = new TextureAtlasFrame_1.TextureAtlasFrame(spriteData.frame.x, spriteData.frame.y, spriteData.frame.w, spriteData.frame.h, spriteData.spriteSourceSize.x, spriteData.spriteSourceSize.y, spriteData.frameDuration);
            this.frames[name_1] = frame;
        }
        //        console.log(JSON.stringify(this.frames));
    };
    return TextureAtlas;
}());
exports.TextureAtlas = TextureAtlas;


/***/ }),

/***/ "./src/sprites/TextureAtlasFrame.ts":
/*!******************************************!*\
  !*** ./src/sprites/TextureAtlasFrame.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var TextureAtlasFrame = /** @class */ (function () {
    function TextureAtlasFrame(x, y, w, h, offsetx, offsety, frameDuration) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (w === void 0) { w = 1; }
        if (h === void 0) { h = 1; }
        if (offsetx === void 0) { offsetx = 0; }
        if (offsety === void 0) { offsety = 0; }
        if (frameDuration === void 0) { frameDuration = 100; }
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.offsetx = offsetx;
        this.offsety = offsety;
        this.frameDuration = frameDuration;
    }
    TextureAtlasFrame.prototype.set = function (x, y) {
        this.x = x;
        this.y = y;
    };
    return TextureAtlasFrame;
}());
exports.TextureAtlasFrame = TextureAtlasFrame;


/***/ }),

/***/ 0:
/*!**********************************************!*\
  !*** multi core-js/fn/promise ./src/main.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! core-js/fn/promise */"./node_modules/core-js/fn/promise.js");
module.exports = __webpack_require__(/*! ./src/main.ts */"./src/main.ts");


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9Db250aW51ZURpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9Db252ZXJzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvRGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9jaGF0L09wdGlvbkRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9SZWNlaXZlSXRlbURpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL05hdk1lc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL1RyaWFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0ludGVyYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0xldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1JlY2VpdmVJdGVtSW50ZXJhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvSW52ZW50b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9pdGVtcy9JdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvSW1hZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9KU09OTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL0FuaW1hdGVkU3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL0ludGVyYWN0YWJsZVNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9OUENTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvTmF2U3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1BsYXllclNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvU3ByaXRlQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1N0YXRpY1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9UZXh0dXJlQXRsYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvVGV4dHVyZUF0bGFzRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQyxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRSxpQ0FBaUM7QUFDckc7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSx1Q0FBdUM7QUFDdkM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGNBQWM7QUFDZCxpQkFBaUI7QUFDakI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hLLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkcsQ0FBQztRQTlCRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENB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Ozs7Ozs7Ozs7OztBQ0p6QjtJQWFJLDJCQUFZLENBQWEsRUFBRSxDQUFhLEVBQUUsQ0FBYSxFQUFFLENBQWEsRUFBRSxPQUFtQixFQUFFLE9BQW1CLEVBQUUsYUFBMkI7UUFBakkseUJBQWE7UUFBRSx5QkFBYTtRQUFFLHlCQUFhO1FBQUUseUJBQWE7UUFBRSxxQ0FBbUI7UUFBRSxxQ0FBbUI7UUFBRSxtREFBMkI7UUFFekksSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLGFBQWEsQ0FBQztJQUN2QyxDQUFDO0lBRU0sK0JBQUcsR0FBVixVQUFXLENBQVMsRUFBRSxDQUFTO1FBRTNCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDO0FBN0JZLDhDQUFpQiIsImZpbGUiOiJidWlsZC9jbGFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjQnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgdGVzdCA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtEaWFsb2d9IGZyb20gXCIuL0RpYWxvZ1wiXHJcblxyXG5leHBvcnQgY2xhc3MgQ29udGludWVEaWFsb2cgZXh0ZW5kcyBEaWFsb2dcclxue1xyXG4gICAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nLCBzcGVha2VyOiBzdHJpbmcsIHByb3RlY3RlZCBuZXh0RGlhbG9nOiBEaWFsb2cpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIodGV4dCwgc3BlYWtlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUdVSUVsZW1lbnQoZGl2OiBIVE1MRGl2RWxlbWVudCk6IFByb21pc2U8RGlhbG9nPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxEaWFsb2c+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBkaWFsb2cgdGV4dFxyXG4gICAgICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICB0eHQuY2xhc3NMaXN0LmFkZChcImNoYXRtc2dcIik7XHJcbiAgICAgICAgICAgIHR4dC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYSBidXR0b24gdG8gYWR2YW5jZSB0byB0aGUgbmV4dCBkaWFsb2dcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiY2hhdGJ0blwiKTtcclxuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiQ29udGludWVcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgbmV3IGVsZW1lbnRzIHRvIGRpdlxyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodHh0KTtcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYSBjYWxsYmFjayBmb3IgdGhlIGNvbnRpbnVlIGJ1dHRvblxyXG4gICAgICAgICAgICBidG4ub25jbGljayA9IChldm50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMubmV4dERpYWxvZyk7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtEaWFsb2d9IGZyb20gXCIuL0RpYWxvZ1wiXHJcblxyXG4vLyBjb252ZXJzYXRpb24gYmV0d2VlbiB0aGUgcGxheWVyIGFuZCBhbiBOUENcclxuZXhwb3J0IGNsYXNzIENvbnZlcnNhdGlvblxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcml2YXRlIGZpcnN0RGlhbG9nOiBEaWFsb2cpIHt9XHJcblxyXG4gICAgcHVibGljIGdldEZpcnN0RGlhbG9nKCk6IERpYWxvZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZmlyc3REaWFsb2c7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIERpYWxvZ1xyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgdGV4dDogc3RyaW5nLCBwcm90ZWN0ZWQgc3BlYWtlcjogc3RyaW5nKSB7fVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVHVUlFbGVtZW50KGRpdjogSFRNTERpdkVsZW1lbnQpOiBQcm9taXNlPERpYWxvZz5cclxuXHJcbiAgICBwdWJsaWMgZ2V0VGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNwZWFrZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGVha2VyO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7RGlhbG9nfSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5cclxuZXhwb3J0IGNsYXNzIE9wdGlvbkRpYWxvZyBleHRlbmRzIERpYWxvZ1xyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIHNwZWFrZXI6IHN0cmluZywgcHJvdGVjdGVkIG9wdGlvbnM6IHtbdGV4dDogc3RyaW5nXTogRGlhbG9nfSlcclxuICAgIHtcclxuICAgICAgICBzdXBlcih0ZXh0LCBzcGVha2VyKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlR1VJRWxlbWVudChkaXY6IEhUTUxEaXZFbGVtZW50KTogUHJvbWlzZTxEaWFsb2c+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERpYWxvZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGRpYWxvZyB0ZXh0XHJcbiAgICAgICAgICAgIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHR4dC5jbGFzc0xpc3QuYWRkKFwiY2hhdG1zZ1wiKTtcclxuICAgICAgICAgICAgdHh0LmlubmVySFRNTCA9IHRoaXMudGV4dDtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCB0ZXh0IGVsZW1lbnQgdG8gZGl2XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0eHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGRpYWxvZyBvcHRpb25cclxuICAgICAgICAgICAgZm9yKGxldCBvcHRpb24gaW4gdGhpcy5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiY2hhdGJ0blwiKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBvcHRpb247XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgYSBjYWxsYmFjayBmb3IgdGhlIG9wdGlvbiBidXR0b25cclxuICAgICAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKGV2bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbnRpbnVlRGlhbG9nfSBmcm9tIFwiLi9Db250aW51ZURpYWxvZ1wiXHJcbmltcG9ydCB7RGlhbG9nfSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNlaXZlSXRlbURpYWxvZyBleHRlbmRzIENvbnRpbnVlRGlhbG9nXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgc3BlYWtlcjogc3RyaW5nLCBuZXh0RGlhbG9nOiBEaWFsb2csIHByb3RlY3RlZCBpdGVtc0xvc3Q6IEFycmF5PEl0ZW0+LCBwcm90ZWN0ZWQgaXRlbXNSZWNlaXZlZDogQXJyYXk8SXRlbT4pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIodGV4dCwgc3BlYWtlciwgbmV4dERpYWxvZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUdVSUVsZW1lbnQoZGl2OiBIVE1MRGl2RWxlbWVudCk6IFByb21pc2U8RGlhbG9nPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxEaWFsb2c+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBkaWFsb2cgdGV4dFxyXG4gICAgICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICB0eHQuY2xhc3NMaXN0LmFkZChcImNoYXRtc2dcIik7XHJcbiAgICAgICAgICAgIHR4dC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYSBidXR0b24gdG8gYWR2YW5jZSB0byB0aGUgbmV4dCBkaWFsb2dcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiY2hhdGJ0blwiKTtcclxuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiQ29udGludWVcIjtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCB0ZXh0IGVsZW1lbnQgdG8gZGl2XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0eHQpO1xyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5pdGVtc0xvc3QgIT0gbnVsbCAmJiB0aGlzLml0ZW1zTG9zdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbXNMb3N0TGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgaXRlbXNMb3N0TGJsLmNsYXNzTGlzdC5hZGQoXCJjaGF0aW1naGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgaXRlbXNMb3N0TGJsLmlubmVySFRNTCA9IFwiWW91IExvc3RcIjtcclxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpdGVtc0xvc3RMYmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFkZCBhbiBpbWFnZSBmb3IgZWFjaCBpdGVtIGxvc3RcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLml0ZW1zTG9zdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY2hhdGltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaXRlbS5nZXRJbWFnZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5pdGVtc1JlY2VpdmVkICE9IG51bGwgJiYgdGhpcy5pdGVtc1JlY2VpdmVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGxldCBpdGVtc1JlY2VpdmVkTGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgaXRlbXNSZWNlaXZlZExibC5jbGFzc0xpc3QuYWRkKFwiY2hhdGltZ2hlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zUmVjZWl2ZWRMYmwuaW5uZXJIVE1MID0gXCJZb3UgR2FpbmVkXCI7XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbXNSZWNlaXZlZExibCk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYWRkIGFuIGltYWdlIGZvciBlYWNoIGl0ZW0gcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLml0ZW1zUmVjZWl2ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNoYXRpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IGl0ZW0uZ2V0SW1hZ2VQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgY2FsbGJhY2sgZm9yIHRoZSBjb250aW51ZSBidXR0b25cclxuICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoZXZudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLm5leHREaWFsb2cpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtc0xvc3QoKTogQXJyYXk8SXRlbT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc0xvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW1zUmVjZWl2ZWQoKTogQXJyYXk8SXRlbT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1JlY2VpdmVkO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9JU2hhcGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIENpcmNsZSBpbXBsZW1lbnRzIElTaGFwZVxyXG57XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHJhZGl1czogbnVtYmVyID0gMTA7XHJcbiAgICBwdWJsaWMgbGluZVdpZHRoOiBudW1iZXIgPSAyO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBcInJlZFwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCByYWRpdXM6IG51bWJlciwgY29sb3I6IHN0cmluZyA9IFwicmVkXCIsIGxpbmVfd2lkdGg6IG51bWJlciA9IDIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMucmFkaXVzID0gcmFkaXVzO1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IGxpbmVfd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5hcmModGhpcy54LCB0aGlzLnksIHRoaXMucmFkaXVzLCAwLCAyICogTWF0aC5QSSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnRhaW5zKHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoKHkgLSB0aGlzLnkpICoqIDIgKyAoeCAtIHRoaXMueCkgKiogMikgPD0gdGhpcy5yYWRpdXMgKiogMjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1RyaWFuZ2xlfSBmcm9tIFwiLi9UcmlhbmdsZVwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuL1BvaW50XCJcclxuXHJcbi8vIG5hdm1lc2ggcGF0aGZpbmRpbmc6IGh0dHBzOi8vbWVkaXVtLmNvbS9AbXNjYW5zaWFuL2Etd2l0aC1uYXZpZ2F0aW9uLW1lc2hlcy0yNDZmZDllNzI0MjRcclxuZXhwb3J0IGNsYXNzIE5hdk1lc2hcclxue1xyXG4gICAgLy8gdmFsaWQgcmVnaW9ucyBvZiB0aGUgbmF2bWVzaFxyXG4gICAgcHJpdmF0ZSB0cmlzOiBBcnJheTxUcmlhbmdsZT47XHJcblxyXG4gICAgLy8gVE9ETyAtIG5ldyBzeXN0ZW0gb2YgdHJpYW5nbGUgcmVwcmVzZW50YXRpb25cclxuICAgIHByaXZhdGUgdmVydGljZXM6IEFycmF5PFBvaW50PjtcclxuICAgIHByaXZhdGUgZWRnZXM6IEFycmF5PHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfT47ICAgICAgICAgLy8gdjEgYW5kIHYyIGFyZSBpbmRpY2VzIGludG8gdmVydGljZXMgbGlzdFxyXG4gICAgcHJpdmF0ZSBvdXRlckVkZ2VzOiBBcnJheTx7djE6IG51bWJlciwgdjI6IG51bWJlcn0+OyAgICAvLyBlZGdlcyB3aGljaCBvbmx5IGFwcGVhciBpbiAxIHRyaVxyXG5cclxuICAgIGNvbnN0cnVjdG9yKHRyaXM6IEFycmF5PFRyaWFuZ2xlPikge1xyXG4gICAgICAgIHRoaXMudHJpcyA9IHRyaXMgPyB0cmlzIDogW107XHJcbiAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMuZWRnZXMgPSBbXTtcclxuICAgICAgICB0aGlzLm91dGVyRWRnZXMgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gaW5pdGlhbGlzZSB2ZXJ0aWNlcyBhbmQgZWRnZXMgbGlzdFxyXG4gICAgICAgIGZvcihjb25zdCB0cmkgb2YgdHJpcykge1xyXG4gICAgICAgICAgICBsZXQgcDFJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgbGV0IHAySW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgIGxldCBwM0luZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDMpO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdmVydGV4IGlzIG5vdCBpbiB0aGUgbGlzdCwgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHAxSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgICAgICBwMUluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHZlcnRleCBpcyBub3QgaW4gdGhlIGxpc3QsIGFkZCBpdCB0byB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZihwMkluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICAgICAgcDJJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiB2ZXJ0ZXggaXMgbm90IGluIHRoZSBsaXN0LCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYocDNJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0cmkucG9pbnQzKTtcclxuICAgICAgICAgICAgICAgIHAzSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Myk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhbGwgMyBlZGdlcyBvZiB0aGUgdHJpIHRvIHRoZSBlZGdlcyBsaXN0XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UxID0ge3YxOiBwMUluZGV4LCB2MjogcDJJbmRleH07XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UyID0ge3YxOiBwMkluZGV4LCB2MjogcDNJbmRleH07XHJcbiAgICAgICAgICAgIGNvbnN0IGVkZ2UzID0ge3YxOiBwM0luZGV4LCB2MjogcDFJbmRleH07XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGVkZ2VzIGlmIHRoZXkgYXJlIG5vdCBhbHJlYWR5IGluIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5lZGdlcywgZWRnZTEpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UxKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5wdXNoKGVkZ2UxKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5zcGxpY2UodGhpcy5pbmRleE9mRWRnZSh0aGlzLm91dGVyRWRnZXMsIGVkZ2UxKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5lZGdlcywgZWRnZTIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UyKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5wdXNoKGVkZ2UyKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5zcGxpY2UodGhpcy5pbmRleE9mRWRnZSh0aGlzLm91dGVyRWRnZXMsIGVkZ2UyKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5lZGdlcywgZWRnZTMpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lZGdlcy5wdXNoKGVkZ2UzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5wdXNoKGVkZ2UzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub3V0ZXJFZGdlcy5zcGxpY2UodGhpcy5pbmRleE9mRWRnZSh0aGlzLm91dGVyRWRnZXMsIGVkZ2UzKSwgMSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnZlcnRpY2VzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuZWRnZXMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5vdXRlckVkZ2VzKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0V2F5cG9pbnRzID0gKGN1cnJlbnRYOiBudW1iZXIsIGN1cnJlbnRZOiBudW1iZXIsIHRhcmdldFg6IG51bWJlciwgdGFyZ2V0WTogbnVtYmVyKTogQXJyYXk8UG9pbnQ+ID0+IHtcclxuICAgICAgICBmb3IobGV0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgLy8gYWxsb3cgZnJlZSBtb3ZlbWVudCB3aXRoaW4gYSB0cmlhbmdsZVxyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnModGFyZ2V0WCwgdGFyZ2V0WSkgJiYgdHJpLmNvbnRhaW5zKGN1cnJlbnRYLCBjdXJyZW50WSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBbbmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgLy8gaWYgYm90aCBwb2ludHMgZmFsbCB1bmRlciBkaWZmZXJlbnQgdHJpYW5nbGVzLCBmaW5kIHRoZSBhIHdheXBvaW50IHRvIHJlYWNoIHRoZSBuZXh0IHRyaVxyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnModGFyZ2V0WCwgdGFyZ2V0WSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vcmV0dXJuIG5ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHRoaXMuZmluZFBhdGgobmV3IFBvaW50KGN1cnJlbnRYLCBjdXJyZW50WSksIG5ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKSk7XHJcbiAgICAgICAgICAgICAgICBpZihvYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCByb3V0ZTogQXJyYXk8UG9pbnQ+ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgcm91dGUucHVzaChuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSkpOyAgICAvLyBnbyBmcm9tIGxhc3QgcG9pbnQgdG8gdGhlIGVuZCBwb2ludFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYnVpbGRSb3V0ZShvYmouY2FtZUZyb20sIG9iai5lbmRWZXJ0ZXgsIHJvdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZHVjZVJvdXRlKHJvdXRlKTsgICAgLy8gcmVtb3ZlIHJlZHVuZGFudCBub2RlcyBmcm9tIHRoZSBwYXRoXHJcbiAgICAgICAgICAgICAgICAgICAgaWYocm91dGUubGVuZ3RoID4gMCkgICAgICAgIC8vIGxhc3Qgd2F5cG9pbnQgd2lsbCBiZSBzdGFydCAtPiBnZXQgcmlkIG9mIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJvdXRlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicm91dGU6IFwiICsgcm91dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByb3V0ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJlbW92ZSB1bmVjZXNzYXJ5IHdheXBvaW50cyBmcm9tIHRoZSByb3V0ZSwgaS5lLiBpZiB0aGVpciBpcyBhIHN0cmFpZ2h0IHBhdGggZnJvbSBhIHRvIGMsIHJlbW92ZSBiXHJcbiAgICBwcml2YXRlIHJlZHVjZVJvdXRlID0gKHJvdXRlOiBBcnJheTxQb2ludD4pID0+IHtcclxuICAgICAgICBsZXQgaW5kZXggPSAwO1xyXG4gICAgICAgIC8vIGxvb3AgdW50aWwgbm8gbW9yZSByZWR1Y3Rpb25zIGNhbiBiZSBtYWRlXHJcbiAgICAgICAgd2hpbGUoaW5kZXggPCByb3V0ZS5sZW5ndGggLSAyKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGEgPSByb3V0ZVtpbmRleF1cclxuICAgICAgICAgICAgY29uc3QgYyA9IHJvdXRlW2luZGV4ICsgMl1cclxuXHJcbiAgICAgICAgICAgIC8vIHRoZXJlIGlzIGEgdmFsaWQgc3RyYWlnaHQgcGF0aCBiZXR3ZWVuIGEgYW5kIGMgaWYgdGhlIHBhdGggZG9lcyBub3QgaW50ZXJzZWN0IGFuIG91dGVyIGVkZ2VcclxuICAgICAgICAgICAgbGV0IGludGVyc2VjdHNPdXRlckVkZ2U6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IG91dGVyRWRnZSBvZiB0aGlzLm91dGVyRWRnZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuZG9MaW5lU2VnbWVudHNJbnRlcnNlY3QodGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjFdLCB0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52Ml0sIGEsIGMpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhhLnRvU3RyaW5nKCksIGMudG9TdHJpbmcoKSwgXCJpbnRlcnNlY3RzXCIsIHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYxXS50b1N0cmluZygpLCB0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52Ml0udG9TdHJpbmcoKSlcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcnNlY3RzT3V0ZXJFZGdlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIHBhdGggZG9lcyBub3QgaW50ZXJzZWN0IGFuIG91dGVyIGVkZ2UsIHJlbW92ZSB3YXlwb2ludCBiXHJcbiAgICAgICAgICAgIGlmKCFpbnRlcnNlY3RzT3V0ZXJFZGdlKSB7XHJcbiAgICAgICAgICAgICAgICByb3V0ZS5zcGxpY2UoaW5kZXgrMSwgMSk7XHJcbiAgICAgICAgICAgICAgICAvLyBkb24ndCBuZWVkIHRvIGluY3JlbWVudCBpbmRleCBzaW5jZSBhcnJheSBsZW5ndGggaGFzIGJlZW4gcmVkdWNlZFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gbW92ZSBvbnRvIG5leHQgcGFpciBvZiB3YXlwb2ludHNcclxuICAgICAgICAgICAgICAgIGluZGV4ICsrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYnVpbGRSb3V0ZSA9IChjYW1lRnJvbToge30sIHZlcnRleDogUG9pbnQsIHJvdXRlOiBBcnJheTxQb2ludD4pID0+IHtcclxuICAgICAgICByb3V0ZS5wdXNoKHZlcnRleCk7IC8vIHJvdXRlIGlzIHJlYWQgaW4gcmV2ZXJzZSBvcmRlclxyXG4gICAgICAgIGlmKGNhbWVGcm9tW3ZlcnRleC50b1N0cmluZygpXSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuYnVpbGRSb3V0ZShjYW1lRnJvbSwgY2FtZUZyb21bdmVydGV4LnRvU3RyaW5nKCldLm5vZGUsIHJvdXRlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gdXNlIHRoZSBBKiBhbGdvcml0aG0gdG8gZmluZCBhIHNob3J0ZXN0IHBhdGggdGhyb3VnaCB0aGUgbmF2bWVzaFxyXG4gICAgcHJpdmF0ZSBmaW5kUGF0aCA9IChzdGFydDogUG9pbnQsIGVuZDogUG9pbnQpOiB7Y2FtZUZyb206IHt9LCBlbmRWZXJ0ZXg6IFBvaW50fSA9PiB7XHJcbiAgICAgICAgbGV0IG9wZW4gPSBbe25vZGU6IHN0YXJ0LCBwcmlvcml0eTogMH1dOyAgICAvLyBsb3dlc3QgcHJpb3JpdHkgPSAwXHJcbiAgICAgICAgbGV0IGNsb3NlZCA9IFtdO1xyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSB0cmlhbmdsZSBjb250YWluaW5nIHRoZSBzdGFydCBwb2ludFxyXG4gICAgICAgIGxldCBzdGFydFRyaTtcclxuICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnMoc3RhcnQueCwgc3RhcnQueSkpIHtcclxuICAgICAgICAgICAgICAgIHN0YXJ0VHJpID0gdHJpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoc3RhcnRUcmkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIHRyaWFuZ2xlIGNvbnRhaW5pbmcgdGhlIGVuZCBwb2ludFxyXG4gICAgICAgIGxldCBlbmRUcmk7XHJcbiAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKGVuZC54LCBlbmQueSkpIHtcclxuICAgICAgICAgICAgICAgIGVuZFRyaSA9IHRyaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKGVuZFRyaSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZ1tpXSBpcyB0aGUgY29zdCB0byBnZXQgdG8gaSBmcm9tIHRoZSBzdGFydCB2ZXJ0ZXhcclxuICAgICAgICBsZXQgZyA9IHt9O1xyXG4gICAgICAgIGxldCBjYW1lRnJvbSA9IHt9O1xyXG4gICAgICAgIGdbc3RhcnQudG9TdHJpbmcoKV0gPSAwO1xyXG4gICAgICAgIGNhbWVGcm9tW3N0YXJ0LnRvU3RyaW5nKCldID0gbnVsbDtcclxuXHJcbiAgICAgICAgLy8gZXhlY3V0ZSBBKiBhbGdvcml0aG1cclxuICAgICAgICAvLyBwc2V1ZG9jb2RlOiBodHRwOi8vdGhlb3J5LnN0YW5mb3JkLmVkdS9+YW1pdHAvR2FtZVByb2dyYW1taW5nL0ltcGxlbWVudGF0aW9uTm90ZXMuaHRtbFxyXG4gICAgICAgIHdoaWxlKG9wZW4ubGVuZ3RoID4gMCAmJiAhZW5kVHJpLmlzVmVydGV4KG9wZW5bMF0ubm9kZSkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXQgY3VycmVudCA9IG9wZW4uc2hpZnQoKTsgIC8vIHJlbW92ZSBmaXJzdCBpdGVtIGZyb20gb3BlbiAoaXRlbSB3aXRoIGxvd2VzdCBwcmlvcml0eSlcclxuICAgICAgICAgICAgY2xvc2VkLnB1c2goY3VycmVudCk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJjdXJyZW50IHZlcnRleDogXCIgKyBjdXJyZW50Lm5vZGUudG9TdHJpbmcoKSk7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBuZWlnaGJvdXIgb2YgdGhpcy5nZXROZWlnaGJvdXJzKGN1cnJlbnQubm9kZSkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxldCBjb3N0ID0gZ1tjdXJyZW50Lm5vZGUudG9TdHJpbmcoKV0gKyB0aGlzLmdldEVkZ2VDb3N0KGN1cnJlbnQubm9kZSwgbmVpZ2hib3VyKTtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJuZWlnaGJvdXI6IFwiICsgbmVpZ2hib3VyLnRvU3RyaW5nKCkgKyBcIiwgY29zdDogXCIgKyBjb3N0KTtcclxuICAgICAgICAgICAgICAgIC8vIG5laWdoYm91ciBpbiBvcGVuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUob3BlbiwgbmVpZ2hib3VyKSAhPT0gLTEgJiYgY29zdCA8IGdbbmVpZ2hib3VyLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbi5zcGxpY2UodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKG9wZW4sIG5laWdoYm91ciksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gbmVpZ2hib3VyIGluIGNsb3NlZFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKGNsb3NlZCwgbmVpZ2hib3VyKSAhPT0gLTEgJiYgY29zdCA8IGdbbmVpZ2hib3VyLnRvU3RyaW5nKCldKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2xvc2VkLnNwbGljZSh0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUoY2xvc2VkLCBuZWlnaGJvdXIpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIG5laWdoYm91ciBuZWl0aGVyIGluIG9wZW4gbm9yIGNsb3NlZFxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKG9wZW4sIG5laWdoYm91cikgPT09IC0xICYmIHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShjbG9zZWQsIG5laWdoYm91cikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ1tuZWlnaGJvdXIudG9TdHJpbmcoKV0gPSBjb3N0O1xyXG4gICAgICAgICAgICAgICAgICAgIGNhbWVGcm9tW25laWdoYm91ci50b1N0cmluZygpXSA9IGN1cnJlbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbi5wdXNoKHtub2RlOiBuZWlnaGJvdXIsIHByaW9yaXR5OiBjb3N0fSk7IC8vIFRPRE8gLSBwcmlvcml0eSA9IGNvc3QgKyBoKG5laWdoYm91cilcclxuICAgICAgICAgICAgICAgICAgICBvcGVuLnNvcnQoKGEsIGIpID0+IHsgICAvLyBzb3J0IG9wZW4gcXVldWUgYnkgcHJpb3JpdHlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGEucHJpb3JpdHkgLSBiLnByaW9yaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKG9wZW4ubGVuZ3RoID4gMCA/IFwiZW5kOiBcIiArIG9wZW5bMF0ubm9kZS50b1N0cmluZygpIDogXCJubyBwYXRoXCIpO1xyXG4gICAgICAgIHJldHVybiBvcGVuLmxlbmd0aCA+IDAgPyB7Y2FtZUZyb206IGNhbWVGcm9tLCBlbmRWZXJ0ZXg6IG9wZW5bMF0ubm9kZX0gOiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGZvcihsZXQgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICB0cmkuZHJhdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHRoZSBjb3N0IG9mIHRyYXZlcnNpbmcgYW4gZWRnZSBiZXR3ZWVuIHAxIGFuZCBwMlxyXG4gICAgcHJpdmF0ZSBnZXRFZGdlQ29zdCA9IChwMTogUG9pbnQsIHAyOiBQb2ludCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgocDEueCAtIHAyLngpICoqIDIgKyAocDEueSAtIHAyLnkpICoqIDIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybiBhIGxpc3Qgb2YgdmVydGNpZXMgd2hpY2ggYXJlIGFkamFjZW50IHRvIHRoZSB2ZXJ0ZXggcFxyXG4gICAgcHJpdmF0ZSBnZXROZWlnaGJvdXJzID0gKHA6IFBvaW50KTogQXJyYXk8UG9pbnQ+ID0+IHtcclxuICAgICAgICBsZXQgbmVpZ2hib3VyczogQXJyYXk8UG9pbnQ+ID0gW107XHJcbiAgICAgICAgZm9yKGNvbnN0IGVkZ2Ugb2YgdGhpcy5lZGdlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMudmVydGljZXNbZWRnZS52MV0uZXF1YWxzKHApKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godGhpcy52ZXJ0aWNlc1tlZGdlLnYyXSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnZlcnRpY2VzW2VkZ2UudjJdLmVxdWFscyhwKSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRoaXMudmVydGljZXNbZWRnZS52MV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBpZiB0aGUgdmVydGV4IGlzIG5vdCBhIHZlcnRleCBvZiBhIHRyaWFuZ2xlLCBjaGVjayBpZiBpdCBpcyB3aXRoaW4gYSB0cmlhbmdsZVxyXG4gICAgICAgIGlmKG5laWdoYm91cnMubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0cmkuY29udGFpbnMocC54LCBwLnkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godHJpLnBvaW50Myk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG5laWdoYm91cnM7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYW5zd2VyIDIgZnJvbTogaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvNTYzMTk4L2hvdy1kby15b3UtZGV0ZWN0LXdoZXJlLXR3by1saW5lLXNlZ21lbnRzLWludGVyc2VjdFxyXG4gICAgcHJpdmF0ZSBkb0xpbmVTZWdtZW50c0ludGVyc2VjdCA9IChlMXYxOiBQb2ludCwgZTF2MjogUG9pbnQsIGUydjE6IFBvaW50LCBlMnYyOiBQb2ludCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIGNvbnN0IHAwX3ggPSBlMXYxLng7XHJcbiAgICAgICAgY29uc3QgcDBfeSA9IGUxdjEueTtcclxuICAgICAgICBjb25zdCBwMV94ID0gZTF2Mi54O1xyXG4gICAgICAgIGNvbnN0IHAxX3kgPSBlMXYyLnk7XHJcbiAgICAgICAgY29uc3QgcDJfeCA9IGUydjEueDtcclxuICAgICAgICBjb25zdCBwMl95ID0gZTJ2MS55O1xyXG4gICAgICAgIGNvbnN0IHAzX3ggPSBlMnYyLng7XHJcbiAgICAgICAgY29uc3QgcDNfeSA9IGUydjIueTtcclxuXHJcbiAgICAgICAgbGV0IHMxX3gsIHMxX3ksIHMyX3gsIHMyX3k7XHJcbiAgICAgICAgczFfeCA9IHAxX3ggLSBwMF94O1xyXG4gICAgICAgIHMxX3kgPSBwMV95IC0gcDBfeTtcclxuICAgICAgICBzMl94ID0gcDNfeCAtIHAyX3g7XHJcbiAgICAgICAgczJfeSA9IHAzX3kgLSBwMl95O1xyXG5cclxuICAgICAgICBsZXQgcywgdDtcclxuICAgICAgICBzID0gKC1zMV95ICogKHAwX3ggLSBwMl94KSArIHMxX3ggKiAocDBfeSAtIHAyX3kpKSAvICgtczJfeCAqIHMxX3kgKyBzMV94ICogczJfeSk7XHJcbiAgICAgICAgdCA9ICggczJfeCAqIChwMF95IC0gcDJfeSkgLSBzMl95ICogKHAwX3ggLSBwMl94KSkgLyAoLXMyX3ggKiBzMV95ICsgczFfeCAqIHMyX3kpO1xyXG5cclxuICAgICAgICBpZihzID49IDAgJiYgcyA8PSAxICYmIHQgPj0gMCAmJiB0IDw9IDEpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyByZXR1cm4gZmFsc2UgaWYgdGhlIGludGVyc2VjdGlvbiBwb2ludCBpcyB0aGUgdmVydGV4IHBvc2l0aW9uIHNpbmNlIGl0IGJyZWFrcyB0aGUgcm91dGUgcmVkdWN0aW9uIGFsZ29yaXRobVxyXG4gICAgICAgICAgICBjb25zdCBpX3ggPSAocDBfeCArICh0ICogczFfeCkpO1xyXG4gICAgICAgICAgICBjb25zdCBpX3kgPSAocDBfeSArICh0ICogczFfeSkpO1xyXG4gICAgICAgICAgICByZXR1cm4gIShpX3ggPT09IGUxdjEueCAmJiBpX3kgPT09IGUxdjEueSkgJiYgIShpX3ggPT09IGUxdjIueCAmJiBpX3kgPT09IGUxdjIueSkgJiYgIShpX3ggPT09IGUydjEueCAmJiBpX3kgPT09IGUydjEueSkgJiYgIShpX3ggPT09IGUydjIueCAmJiBpX3kgPT09IGUydjIueSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL2NvbnNvbGUubG9nKFwibm8gY29sbGlzaW9uXCIpO1xyXG4gICAgICAgIHJldHVybiBmYWxzZTsgLy8gbm8gY29sbGlzaW9uXHJcbiAgICB9XHJcblxyXG4gICAgLy9cclxuICAgIHByaXZhdGUgY3Jvc3NQcm9kdWN0ID0gKHBvaW50MTogUG9pbnQsIHBvaW50MjogUG9pbnQpID0+IHtcclxuICAgIFx0cmV0dXJuIHBvaW50MS54ICogcG9pbnQyLnkgLSBwb2ludDEueSAqIHBvaW50Mi54O1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5kZXhPZlByaW9yaXR5Tm9kZSA9ICh2ZXJ0aWNlczogQXJyYXk8e25vZGU6IFBvaW50LCBwcmlvcml0eTogbnVtYmVyfT4sIHA6IFBvaW50KSA9PiB7XHJcbiAgICAgICAgaWYocCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0aWNlcy5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpbmRleF0ubm9kZTtcclxuICAgICAgICAgICAgICAgIGlmKHZlcnRleC54ID09PSBwLnggJiYgdmVydGV4LnkgPT09IHAueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5kZXhPZlZlcnRleCA9ICh2ZXJ0aWNlczogQXJyYXk8UG9pbnQ+LCBwOiBQb2ludCk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgaWYocCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB2ZXJ0aWNlcy5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZih2ZXJ0ZXgueCA9PT0gcC54ICYmIHZlcnRleC55ID09PSBwLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluZGV4T2ZFZGdlID0gKGVkZ2VzOiBBcnJheTx7djE6IG51bWJlciwgdjI6IG51bWJlcn0+LCBlZGdlOiB7djE6IG51bWJlciwgdjI6IG51bWJlcn0pOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGlmKGVkZ2UgPT0gbnVsbCB8fCBlZGdlLnYxID09IG51bGwgfHwgZWRnZS52MiA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAtMTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlZGdlcy5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlID0gZWRnZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYoKGUudjEgPT09IGVkZ2UudjEgJiYgZS52MiA9PT0gZWRnZS52MikgfHwgKGUudjEgPT09IGVkZ2UudjIgJiYgZS52MiA9PT0gZWRnZS52MSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgUG9pbnRcclxue1xyXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZXF1YWxzID0gKHA6IFBvaW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHAgIT0gbnVsbCAmJiBwLnggPT09IHRoaXMueCAmJiBwLnkgPT09IHRoaXMueTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcgPSAoKSA6IHN0cmluZyA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGBQb2ludCgke3RoaXMueH0sJHt0aGlzLnl9KWA7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtJU2hhcGV9IGZyb20gXCIuL0lTaGFwZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgUmVjdGFuZ2xlIGltcGxlbWVudHMgSVNoYXBlXHJcbntcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgbGluZVdpZHRoOiBudW1iZXIgPSA1O1xyXG4gICAgcHVibGljIHdpZHRoOiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGhlaWdodDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gXCJibHVlXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyLCBjb2xvcjogc3RyaW5nID0gXCJyZWRcIiwgbGluZV93aWR0aDogbnVtYmVyID0gMilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICB0aGlzLmxpbmVXaWR0aCA9IGxpbmVfd2lkdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IHRoaXMuY29sb3I7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IHRoaXMubGluZVdpZHRoO1xyXG4gICAgICAgIGN0eC5yZWN0KHRoaXMueCwgdGhpcy55LCB0aGlzLndpZHRoLCB0aGlzLmhlaWdodCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNvbnRhaW5zKHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiAoeCA+PSB0aGlzLnggJiYgeCA8PSB0aGlzLnggKyB0aGlzLndpZHRoICYmIHkgPj0gdGhpcy55ICYmIHkgPD0gdGhpcy55ICsgdGhpcy5oZWlnaHQpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9JU2hhcGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi9Qb2ludFwiXHJcblxyXG5leHBvcnQgY2xhc3MgVHJpYW5nbGVcclxue1xyXG4gICAgcHVibGljIHBvaW50MTogUG9pbnQ7XHJcbiAgICBwdWJsaWMgcG9pbnQyOiBQb2ludDtcclxuICAgIHB1YmxpYyBwb2ludDM6IFBvaW50O1xyXG4gICAgcHJpdmF0ZSBhcmVhOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNpZ246IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4MTogbnVtYmVyLCB5MTogbnVtYmVyLCB4MjogbnVtYmVyLCB5MjogbnVtYmVyLCB4MzogbnVtYmVyLCB5MzogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucG9pbnQxID0gbmV3IFBvaW50KHgxLCB5MSk7XHJcbiAgICAgICAgdGhpcy5wb2ludDIgPSBuZXcgUG9pbnQoeDIsIHkyKTtcclxuICAgICAgICB0aGlzLnBvaW50MyA9IG5ldyBQb2ludCh4MywgeTMpO1xyXG4gICAgICAgIHRoaXMuYXJlYSA9IDEvMiAqICgtdGhpcy5wb2ludDIueSAqIHRoaXMucG9pbnQzLnggKyB0aGlzLnBvaW50MS55ICogKC10aGlzLnBvaW50Mi54ICsgdGhpcy5wb2ludDMueCkgKyB0aGlzLnBvaW50MS54ICogKHRoaXMucG9pbnQyLnkgLSB0aGlzLnBvaW50My55KSArIHRoaXMucG9pbnQyLnggKiB0aGlzLnBvaW50My55KTtcclxuICAgICAgICB0aGlzLnNpZ24gPSB0aGlzLmFyZWEgPCAwID8gLTEgOiAxO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ID0gKCk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gXCJyZWRcIjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gNTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4Lm1vdmVUbyh0aGlzLnBvaW50MS54LCB0aGlzLnBvaW50MS55KTtcclxuICAgICAgICBjdHgubGluZVRvKHRoaXMucG9pbnQyLngsIHRoaXMucG9pbnQyLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5wb2ludDMueCwgdGhpcy5wb2ludDMueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnBvaW50MS54LCB0aGlzLnBvaW50MS55KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm5zIHRydWUgaWZmIHRoZSBwb2ludCBwIGlzIGEgdmVydGV4IG9mIHRoZSB0cmlhbmdsZVxyXG4gICAgcHVibGljIGlzVmVydGV4ID0gKHA6IFBvaW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMucG9pbnQxLmVxdWFscyhwKSB8fCB0aGlzLnBvaW50Mi5lcXVhbHMocCkgfHwgdGhpcy5wb2ludDMuZXF1YWxzKHApO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGh0dHA6Ly9qc2ZpZGRsZS5uZXQvUGVycm9BWlVML3pkYVk4LzEvXHJcbiAgICBwdWJsaWMgY29udGFpbnMgPSAoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuID0+IHtcclxuICAgICAgICB2YXIgcyA9ICh0aGlzLnBvaW50MS55ICogdGhpcy5wb2ludDMueCAtIHRoaXMucG9pbnQxLnggKiB0aGlzLnBvaW50My55ICsgKHRoaXMucG9pbnQzLnkgLSB0aGlzLnBvaW50MS55KSAqIHggKyAodGhpcy5wb2ludDEueCAtIHRoaXMucG9pbnQzLngpICogeSkgKiB0aGlzLnNpZ247XHJcbiAgICAgICAgdmFyIHQgPSAodGhpcy5wb2ludDEueCAqIHRoaXMucG9pbnQyLnkgLSB0aGlzLnBvaW50MS55ICogdGhpcy5wb2ludDIueCArICh0aGlzLnBvaW50MS55IC0gdGhpcy5wb2ludDIueSkgKiB4ICsgKHRoaXMucG9pbnQyLnggLSB0aGlzLnBvaW50MS54KSAqIHkpICogdGhpcy5zaWduO1xyXG4gICAgICAgIHJldHVybiAocyA+IDAgJiYgdCA+IDAgJiYgKHMgKyB0KSA8IDIgKiB0aGlzLmFyZWEgKiB0aGlzLnNpZ24pIHx8ICh0aGlzLmlzVmVydGV4KG5ldyBQb2ludCh4LCB5KSkpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5cclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEludGVyYWN0aW9uXHJcbntcclxuICAgIC8vIGl0ZW0gY2FuIGJlIG51bGxcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBpdGVtOiBJdGVtKSB7fVxyXG5cclxuICAgIC8vIGludGVyYWN0IHdpdGggdGhlIG9iamVjdFxyXG4gICAgcHVibGljIGFic3RyYWN0IGludGVyYWN0KGl0ZW06IEl0ZW0pOiAge3RleHQ6IHN0cmluZywgYXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIGl0ZW1zOiBBcnJheTxJdGVtPn07XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oKTogSXRlbVxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLml0ZW07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtKU09OTG9hZGVyfSBmcm9tIFwiLi4vcmVzb3VyY2VzL0pTT05Mb2FkZXJcIlxyXG5pbXBvcnQge0ltYWdlTG9hZGVyfSBmcm9tIFwiLi4vcmVzb3VyY2VzL0ltYWdlTG9hZGVyXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXN9IGZyb20gXCIuLi9zcHJpdGVzL1RleHR1cmVBdGxhc1wiXHJcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9TcHJpdGVcIlxyXG5pbXBvcnQge1N0YXRpY1Nwcml0ZX0gZnJvbSBcIi4uL3Nwcml0ZXMvU3RhdGljU3ByaXRlXCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4uL3Nwcml0ZXMvQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge0ludGVyYWN0YWJsZVNwcml0ZX0gZnJvbSBcIi4uL3Nwcml0ZXMvSW50ZXJhY3RhYmxlU3ByaXRlXCJcclxuaW1wb3J0IHtOUENTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL05QQ1Nwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi4vc3ByaXRlcy9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge05hdk1lc2h9IGZyb20gXCIuLi9jb2xsaXNpb24vTmF2TWVzaFwiXHJcbmltcG9ydCB7VHJpYW5nbGV9IGZyb20gXCIuLi9jb2xsaXNpb24vVHJpYW5nbGVcIlxyXG5pbXBvcnQge0ludGVyYWN0aW9ufSAgZnJvbSBcIi4vSW50ZXJhY3Rpb25cIlxyXG5pbXBvcnQge1JlY2VpdmVJdGVtSW50ZXJhY3Rpb259IGZyb20gXCIuL1JlY2VpdmVJdGVtSW50ZXJhY3Rpb25cIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuaW1wb3J0IHtDaXJjbGV9IGZyb20gXCIuLi9jb2xsaXNpb24vQ2lyY2xlXCJcclxuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuLi9jb2xsaXNpb24vUmVjdGFuZ2xlXCJcclxuaW1wb3J0IHtDb252ZXJzYXRpb259IGZyb20gXCIuLi9jaGF0L0NvbnZlcnNhdGlvblwiXHJcbmltcG9ydCB7RGlhbG9nfSBmcm9tIFwiLi4vY2hhdC9EaWFsb2dcIlxyXG5pbXBvcnQge0NvbnRpbnVlRGlhbG9nfSBmcm9tIFwiLi4vY2hhdC9Db250aW51ZURpYWxvZ1wiXHJcbmltcG9ydCB7T3B0aW9uRGlhbG9nfSBmcm9tIFwiLi4vY2hhdC9PcHRpb25EaWFsb2dcIlxyXG5pbXBvcnQge1JlY2VpdmVJdGVtRGlhbG9nfSBmcm9tIFwiLi4vY2hhdC9SZWNlaXZlSXRlbURpYWxvZ1wiXHJcblxyXG5leHBvcnQgY2xhc3MgTGV2ZWxcclxue1xyXG4gICAgc3RhdGljIGxvYWRMZXZlbChwYXRoOiBzdHJpbmcsIGl0ZW1zOiBhbnkpOiBQcm9taXNlPGFueT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxldmVsRGF0YVByb21pc2UgPSBKU09OTG9hZGVyLmxvYWRKU09ORmlsZShwYXRoKS50aGVuKChsZXZlbERhdGEpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgdGV4dHVyZSBhdGxhc1xyXG4gICAgICAgICAgICAgICAgbGV0IGF0bGFzID0gbmV3IFRleHR1cmVBdGxhcyhsZXZlbERhdGEudGV4dHVyZV9hdGxhcyk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ZXh0dXJlQXRsYXNQcm9taXNlID0gYXRsYXMubG9hZCgpLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiB0ZXh0dXJlIGF0bGFzIGNvdWxkIG5vdCBiZSBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgYWxsUHJvbWlzZXMgPSBbdGV4dHVyZUF0bGFzUHJvbWlzZV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBzcHJpdGVzXHJcbiAgICAgICAgICAgICAgICBsZXQgc3RhdGljU3ByaXRlcyA9IG5ldyBBcnJheTxTdGF0aWNTcHJpdGU+KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgaW50ZXJhY3RhYmxlU3ByaXRlcyA9IG5ldyBBcnJheTxJbnRlcmFjdGFibGVTcHJpdGU+KCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbnBjU3ByaXRlcyA9IG5ldyBBcnJheTxOUENTcHJpdGU+KCk7XHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3Qgb2JqIG9mIGxldmVsRGF0YS5zcHJpdGVzKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9iai50eXBlID09IFwiaW50ZXJhY3RhYmxlXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGludGVyYWN0aW9ucyA9IG5ldyBBcnJheTxJbnRlcmFjdGlvbj4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGludGVyIG9mIG9iai5pbnRlcmFjdGlvbnMpICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiBpbnRlcmFjdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYoaW50ZXIudHlwZSA9PSBcInJlY2VpdmVfaXRlbVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlY2VpdmVJdGVtcyA9IG5ldyBBcnJheTxJdGVtPigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBpdG0gb2YgaW50ZXIuaXRlbXNfcmVjZWl2ZWQpICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIHJlY2VpdmUgaXRlbXNcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2VpdmVJdGVtcy5wdXNoKGl0ZW1zW2l0bV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGlvbnMucHVzaChuZXcgUmVjZWl2ZUl0ZW1JbnRlcmFjdGlvbihpbnRlci5pdGVtID8gaXRlbXNbaW50ZXIuaXRlbV0gOiBudWxsLCBpbnRlci5zdWNjZXNzX3RleHQsIGludGVyLmZhaWxfdGV4dCwgbmV3IEF1ZGlvKGludGVyLnN1Y2Nlc3NfYXVkaW8pLCBuZXcgQXVkaW8oaW50ZXIuZmFpbF9hdWRpbyksIHJlY2VpdmVJdGVtcykpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0YWJsZVNwcml0ZXMucHVzaChuZXcgSW50ZXJhY3RhYmxlU3ByaXRlKG9iai54LCBvYmoueSwgb2JqLnNjYWxlLCBvYmoub3JpZ2luX2hvcml6b250YWwsIG9iai5vcmlnaW5fdmVydGljYWwsIGF0bGFzLCBvYmouaW1hZ2VfbmFtZSwgb2JqLmV4YW1pbmVfdGV4dCwgbmV3IEF1ZGlvKG9iai5leGFtaW5lX2F1ZGlvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2lyY2xlKG9iai54LCBvYmoueSwgb2JqLmludGVyYWN0aW9uX3JhZGl1cyksIG5ldyBSZWN0YW5nbGUob2JqLngtb2JqLmNsaWNrX3pvbmVfd2lkdGgvMiwgb2JqLnktb2JqLmNsaWNrX3pvbmVfaGVpZ2h0LzIsIG9iai5jbGlja196b25lX3dpZHRoLCBvYmouY2xpY2tfem9uZV9oZWlnaHQpLCBpbnRlcmFjdGlvbnMpKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYob2JqLnR5cGUgPT0gXCJucGNcIikge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gbG9hZCB0aGUgYW5pbWF0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYXRsYXMgPSBuZXcgVGV4dHVyZUF0bGFzKG9iai5hdGxhcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhbmltYXRpb25zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+ID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGF0bGFzTG9hZGVkUHJvbWlzZSA9IGF0bGFzLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgc2VxdWVuY2VOYW1lIGluIG9iai5hbmltYXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VxID0gb2JqLmFuaW1hdGlvbnNbc2VxdWVuY2VOYW1lXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhbmltID0gbmV3IFNwcml0ZUFuaW1hdGlvbihzZXEubnVtX2ZyYW1lcywgYXRsYXMsIHNlcXVlbmNlTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYW5pbWF0aW9ucy5wdXNoKGFuaW0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBucGMgPSBuZXcgTlBDU3ByaXRlKG9iai54LCBvYmoueSwgb2JqLnNjYWxlLCBvYmoub3JpZ2luX2hvcml6b250YWwsIG9iai5vcmlnaW5fdmVydGljYWwsIGFuaW1hdGlvbnMsIG9iai5leGFtaW5lX3RleHQsIG5ldyBBdWRpbyhvYmouZXhhbWluZV9hdWRpbyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDaXJjbGUob2JqLngsIG9iai55LCBvYmouaW50ZXJhY3Rpb25fcmFkaXVzKSwgbmV3IFJlY3RhbmdsZShvYmoueC1vYmouY2xpY2tfem9uZV93aWR0aC8yLCBvYmoueS1vYmouY2xpY2tfem9uZV9oZWlnaHQvMiwgb2JqLmNsaWNrX3pvbmVfd2lkdGgsIG9iai5jbGlja196b25lX2hlaWdodCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIExldmVsLmJ1aWxkQ29udmVyc2F0aW9uKG9iaiwgaXRlbXMpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wYy5zZXRTdGFydFBvcyhvYmoueCwgb2JqLnkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnBjLnNldERlcHRoU2NhbGUobGV2ZWxEYXRhLmRlcHRoX3NjYWxlX3kpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnBjU3ByaXRlcy5wdXNoKG5wYyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5wYyBhdGxhcyBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgTlBDIHNwcml0ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYWxsUHJvbWlzZXMucHVzaChhdGxhc0xvYWRlZFByb21pc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRpY1Nwcml0ZXMucHVzaChuZXcgU3RhdGljU3ByaXRlKG9iai54LCBvYmoueSwgb2JqLnNjYWxlLCBvYmoub3JpZ2luX2hvcml6b250YWwsIG9iai5vcmlnaW5fdmVydGljYWwsIGF0bGFzLCBvYmouaW1hZ2VfbmFtZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIG5hdm1lc2hcclxuICAgICAgICAgICAgICAgIGxldCB0cmlzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IHRyaSBvZiBsZXZlbERhdGEubmF2bWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRyaXMucHVzaChuZXcgVHJpYW5nbGUodHJpLngxLCB0cmkueTEsIHRyaS54MiwgdHJpLnkyLCB0cmkueDMsIHRyaS55MykpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgbGV0IG5hdm1lc2ggPSBuZXcgTmF2TWVzaCh0cmlzKTtcclxuXHJcbiAgICAgICAgICAgICAgICBQcm9taXNlLmFsbChhbGxQcm9taXNlcykudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2VuZSBmaWxlcyBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBzdGF0aWNTcHJpdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5yZWZyZXNoSW1hZ2UoKTsgIC8vIHRleHR1cmUgYXRsYXMgcHJvYmFibHkgaGFkbid0IGxvYWRlZCB3aGVuIHNwcml0ZSB3YXMgaW5pdGlhbGlzZWQgc28gcmVmcmVzaCBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBpbnRlcmFjdGFibGVTcHJpdGVzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5yZWZyZXNoSW1hZ2UoKTsgIC8vIHRleHR1cmUgYXRsYXMgcHJvYmFibHkgaGFkbid0IGxvYWRlZCB3aGVuIHNwcml0ZSB3YXMgaW5pdGlhbGlzZWQgc28gcmVmcmVzaCBpbWFnZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh7J3RleHR1cmVBdGxhcyc6IGF0bGFzLCAnc2NlbmVTY2FsZSc6IGxldmVsRGF0YS5zY2VuZV9zY2FsZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwbGF5ZXJTdGFydFgnOiBsZXZlbERhdGEucGxheWVyX3N0YXJ0X3gsICdwbGF5ZXJTdGFydFknOiBsZXZlbERhdGEucGxheWVyX3N0YXJ0X3ksICdwbGF5ZXJTdGFydHMnOiBsZXZlbERhdGEucGxheWVyX3N0YXJ0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdkZXB0aFNjYWxlWSc6IGxldmVsRGF0YS5kZXB0aF9zY2FsZV95LCAnbmF2bWVzaCc6IG5hdm1lc2gsICdzdGF0aWNTcHJpdGVzJzogc3RhdGljU3ByaXRlcyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdpbnRlcmFjdGFibGVTcHJpdGVzJzogaW50ZXJhY3RhYmxlU3ByaXRlcywgJ25wY1Nwcml0ZXMnOiBucGNTcHJpdGVzfSk7XHJcbiAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IGZhaWxlZCB0byBsb2FkIGxldmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBidWlsZENvbnZlcnNhdGlvbihzcHJpdGVPYmo6IGFueSwgaXRlbXM6IGFueSk6IENvbnZlcnNhdGlvblxyXG4gICAge1xyXG4gICAgICAgIGlmKHNwcml0ZU9iai5jb252ZXJzYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpZihzcHJpdGVPYmouY29udmVyc2F0aW9uLmZpcnN0X2RpYWxvZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gbmV3IENvbnZlcnNhdGlvbihMZXZlbC5idWlsZERpYWxvZyhzcHJpdGVPYmouY29udmVyc2F0aW9uLmZpcnN0X2RpYWxvZywgaXRlbXMpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGREaWFsb2coZGlhbG9nOiBhbnksIGl0ZW1zOiBhbnkpOiBEaWFsb2dcclxuICAgIHtcclxuICAgICAgICBpZihkaWFsb2cudHlwZSA9PSBcImNvbnRpbnVlXCIpIHtcclxuICAgICAgICAgICAgbGV0IG5leHREaWFsb2c6IERpYWxvZztcclxuICAgICAgICAgICAgaWYoZGlhbG9nLm5leHRfZGlhbG9nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIG5leHREaWFsb2cgPSBMZXZlbC5idWlsZERpYWxvZyhkaWFsb2cubmV4dF9kaWFsb2csIGl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IENvbnRpbnVlRGlhbG9nKGRpYWxvZy50ZXh0LCBkaWFsb2cuc3BlYWtlciwgbmV4dERpYWxvZyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGRpYWxvZy50eXBlID09IFwib3B0aW9uXCIpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZGlhbG9nIG9iamVjdCBmb3IgZWFjaCBvcHRpb25cclxuICAgICAgICAgICAgZm9yKGxldCBvcHROYW1lIGluIGRpYWxvZy5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zW29wdE5hbWVdID0gTGV2ZWwuYnVpbGREaWFsb2coZGlhbG9nLm9wdGlvbnNbb3B0TmFtZV0sIGl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE9wdGlvbkRpYWxvZyhkaWFsb2cudGV4dCwgZGlhbG9nLnNwZWFrZXIsIG9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZihkaWFsb2cudHlwZSA9PSBcInJlY2VpdmVfaXRlbVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0RGlhbG9nOiBEaWFsb2c7XHJcbiAgICAgICAgICAgIGlmKGRpYWxvZy5uZXh0X2RpYWxvZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0RGlhbG9nID0gTGV2ZWwuYnVpbGREaWFsb2coZGlhbG9nLm5leHRfZGlhbG9nLCBpdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGl0ZW1zTG9zdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgaWQgb2YgZGlhbG9nLml0ZW1zX2xvc3QpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zTG9zdC5wdXNoKGl0ZW1zW2lkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGl0ZW1zUmVjZWl2ZWQgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGlkIG9mIGRpYWxvZy5pdGVtc19yZWNlaXZlZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNSZWNlaXZlZC5wdXNoKGl0ZW1zW2lkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWNlaXZlSXRlbURpYWxvZyhkaWFsb2cudGV4dCwgZGlhbG9nLnNwZWFrZXIsIG5leHREaWFsb2csIGl0ZW1zTG9zdCwgaXRlbXNSZWNlaXZlZCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNvbnN0cnVjdG9yKCkge31cclxufVxyXG4iLCJpbXBvcnQge0ludGVyYWN0aW9ufSBmcm9tIFwiLi9JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY2VpdmVJdGVtSW50ZXJhY3Rpb24gZXh0ZW5kcyBJbnRlcmFjdGlvblxyXG57XHJcbiAgICAvLyBpdGVtIGNhbiBiZSBudWxsXHJcbiAgICBjb25zdHJ1Y3RvcihpdGVtOiBJdGVtLCBwcm90ZWN0ZWQgc3VjY2Vzc1RleHQ6IHN0cmluZywgcHJvdGVjdGVkIGZhaWxUZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHByb3RlY3RlZCBzdWNjZXNzQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBmYWlsQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBpdGVtc1JlY2VpdmVkOiBBcnJheTxJdGVtPilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbnRlcmFjdCB3aXRoIHRoZSBvYmplY3RcclxuICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGl0ZW1zIHJlY2VpdmVkIGZyb20gdGhlIGludGVyYWN0aW9uXHJcbiAgICBwdWJsaWMgaW50ZXJhY3QoaXRlbTogSXRlbSk6IHt0ZXh0OiBzdHJpbmcsIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBpdGVtczogQXJyYXk8SXRlbT59XHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXRlbSA9PSB0aGlzLml0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4ge3RleHQ6IHRoaXMuc3VjY2Vzc1RleHQsIGF1ZGlvOiB0aGlzLnN1Y2Nlc3NBdWRpbywgaXRlbXM6IHRoaXMuaXRlbXNSZWNlaXZlZH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge3RleHQ6IHRoaXMuZmFpbFRleHQsIGF1ZGlvOiB0aGlzLmZhaWxBdWRpbywgaXRlbXM6IG51bGx9O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuZXhwb3J0IGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q2FudmFzQW5kQ29udGV4dCgpXHJcbntcclxuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249J2Rlc3RpbmF0aW9uLW92ZXInO1xyXG4gICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7ICAgLy8gZW5hYmxlIGFudGktYWxpYXNpbmcgb2YgaW1hZ2VzXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlclxyXG57XHJcbiAgICBwcml2YXRlIHByaW1hcnlNb3VzZURvd25DYWxsYmFja3M6IEFycmF5PCh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZD4gPSBBcnJheTwoKSA9PiB2b2lkPigpO1xyXG4gICAgcHJpdmF0ZSBzZWNvbmRhcnlNb3VzZURvd25DYWxsYmFja3M6IEFycmF5PCh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZD4gPSBBcnJheTwoKSA9PiB2b2lkPigpO1xyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0QXQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbG9uZ1RvdWNoRHVyYXRpb246IG51bWJlciA9IDUwMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTsgIC8vIGRpc2FibGUgcmlnaHQgY2xpY2sgY29udGV4dCBtZW51XHJcbiAgICAgICAgLy8gaWYoY2FudmFzICE9IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZURvd24pO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZWRvd24pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLnRvdWNoc3RhcnQpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy50b3VjaGVuZCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy50b3VjaG1vdmUpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0QXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlyZVByaW1hcnlNb3VzZURvd25FdmVudCh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBmb3IoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5wcmltYXJ5TW91c2VEb3duQ2FsbGJhY2tzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlyZVNlY29uZGFyeU1vdXNlRG93bkV2ZW50KHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBjYWxsYmFjayBvZiB0aGlzLnNlY29uZGFyeU1vdXNlRG93bkNhbGxiYWNrcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHgsIHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW91c2Vkb3duID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIG5vdGlmeSBhbGwgY2FsbGJhY2tzXHJcbiAgICAgICAgaWYoZS5idXR0b24gPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlUHJpbWFyeU1vdXNlRG93bkV2ZW50KGUubGF5ZXJYLCBlLmxheWVyWSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGUuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVNlY29uZGFyeU1vdXNlRG93bkV2ZW50KGUubGF5ZXJYLCBlLmxheWVyWSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbmxvbmd0b3VjaCA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gZmlyZSBzZWNvbmRhcnkgbW91c2UgY2xpY2sgZXZlbnRcclxuICAgICAgICB0aGlzLmZpcmVTZWNvbmRhcnlNb3VzZURvd25FdmVudChlLnRvdWNoZXNbMF0uY2xpZW50WCwgZS50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b3VjaHN0YXJ0ID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRBdCA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvdWNoZW5kID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICBpZihEYXRlLm5vdygpIC0gdGhpcy50b3VjaFN0YXJ0QXQgPj0gdGhpcy5sb25nVG91Y2hEdXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVQcmltYXJ5TW91c2VEb3duRXZlbnQoZS50b3VjaGVzWzBdLmNsaWVudFgsIGUudG91Y2hlc1swXS5jbGllbnRZKTsgLy8gZmlyZSBwcmltYXJ5IG1vdXNlIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlU2Vjb25kYXJ5TW91c2VEb3duRXZlbnQoZS50b3VjaGVzWzBdLmNsaWVudFgsIGUudG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvdWNobW92ZSA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgIGlmKERhdGUubm93KCkgLSB0aGlzLnRvdWNoU3RhcnRBdCA+PSB0aGlzLmxvbmdUb3VjaER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVByaW1hcnlNb3VzZURvd25FdmVudChlLnRvdWNoZXNbMF0uY2xpZW50WCwgZS50b3VjaGVzWzBdLmNsaWVudFkpOyAvLyBmaXJlIHByaW1hcnkgbW91c2UgY2xpY2sgZXZlbnRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVTZWNvbmRhcnlNb3VzZURvd25FdmVudChlLnRvdWNoZXNbMF0uY2xpZW50WCwgZS50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkUHJpbWFyeU1vdXNlRG93bkNhbGxiYWNrKGNhbGxiYWNrOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wcmltYXJ5TW91c2VEb3duQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTZWNvbmRhcnlNb3VzZURvd25DYWxsYmFjayhjYWxsYmFjazogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc2Vjb25kYXJ5TW91c2VEb3duQ2FsbGJhY2tzLnB1c2goY2FsbGJhY2spO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SXRlbX0gZnJvbSBcIi4vSXRlbVwiXHJcblxyXG5leHBvcnQgY2xhc3MgSW52ZW50b3J5XHJcbntcclxuICAgIHByaXZhdGUgaXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oOSk7IC8vIE1BWF9OVU1fSVRFTVMgPSA5XHJcblxyXG4gICAgcHVibGljIGFkZEl0ZW0oaXRlbTogSXRlbSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBpdGVtIHRvIHRoZSBmaXJzdCBhdmFpbGFibGUgc2xvdFxyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXggKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNbaW5kZXhdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGl0ZW06IEl0ZW0pOiBJdGVtXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5pdGVtc1tpbmRleF0gPT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlZCBcIiArIGl0ZW0uZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLml0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IEl0ZW1cclxuICAgIHtcclxuICAgICAgICBpZihpbmRleCAhPSBudWxsICYmIGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlSXRlbShpdGVtOiBJdGVtLCBpbmRleDogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMuaXRlbXNbaW5kZXhdID09IG51bGwpIHsgLy8gaWYgbmV3IGl0ZW1zbG90IGlzIGZyZWVcclxuICAgICAgICAgICAgbGV0IHggPSB0aGlzLnJlbW92ZUl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgIGlmKHggIT0gbnVsbCkgeyAvLyBjaGVjayB0aGUgcGxheWVyIGFjdHVhbGx5IGhhZCB0aGUgaXRlbVxyXG4gICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbXMoKTogQXJyYXk8SXRlbT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSXRlbVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgY29tYmluYXRpb25zOiBBcnJheTx7b3RoZXI6IEl0ZW0sIG91dDogQXJyYXk8SXRlbT59PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbmFtZTogc3RyaW5nLCBwcm90ZWN0ZWQgZXhhbWluZVRleHQ6IHN0cmluZywgcHJvdGVjdGVkIGV4YW1pbmVBdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgcHJvdGVjdGVkIGltZ3BhdGg6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbWJpbmF0aW9ucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21iaW5lKG90aGVyOiBJdGVtKTogQXJyYXk8SXRlbT5cclxuICAgIHtcclxuICAgICAgICBmb3IoY29uc3QgY21iIG9mIHRoaXMuY29tYmluYXRpb25zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gaXMgY29tYmluYWJsZSwgcmV0dXJuIHRoZSBhcnJheSBvZiBpdGVtcyBjcmVhdGVkXHJcbiAgICAgICAgICAgIGlmKG90aGVyID09PSBjbWIub3RoZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbWIub3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ29tYmluYXRpb24ob3RoZXI6IEl0ZW0sIG91dDogQXJyYXk8SXRlbT4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYob3RoZXIgIT0gbnVsbCAmJiBvdXQgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYmluYXRpb25zLnB1c2goe290aGVyOiBvdGhlciwgb3V0OiBvdXR9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZVRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVBdWRpbygpOiBIVE1MQXVkaW9FbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZUF1ZGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbWFnZVBhdGgoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1ncGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGBJdGVtKCR7dGhpcy5uYW1lfSlgO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y2FudmFzLCBjdHgsIGluaXRDYW52YXNBbmRDb250ZXh0fSBmcm9tIFwiLi9nbG9iXCJcclxuaW1wb3J0IHtOYXZNZXNofSBmcm9tIFwiLi9jb2xsaXNpb24vTmF2TWVzaFwiXHJcbmltcG9ydCB7VHJpYW5nbGV9IGZyb20gXCIuL2NvbGxpc2lvbi9UcmlhbmdsZVwiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9jb2xsaXNpb24vSVNoYXBlXCJcclxuaW1wb3J0IHtJbnB1dE1hbmFnZXJ9IGZyb20gXCIuL2lucHV0L0lucHV0TWFuYWdlclwiXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gXCIuL3Jlc291cmNlcy9JbWFnZUxvYWRlclwiXHJcbmltcG9ydCB7SlNPTkxvYWRlcn0gZnJvbSBcIi4vcmVzb3VyY2VzL0pTT05Mb2FkZXJcIlxyXG5pbXBvcnQge0xldmVsfSBmcm9tIFwiLi9nYW1lL0xldmVsXCJcclxuaW1wb3J0IHtTdGF0aWNTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvU3RhdGljU3ByaXRlXCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3RhYmxlU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL0ludGVyYWN0YWJsZVNwcml0ZVwiXHJcbmltcG9ydCB7TmF2U3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL05hdlNwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9zcHJpdGVzL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi9zcHJpdGVzL1RleHR1cmVBdGxhc1wiXHJcbmltcG9ydCB7UGxheWVyU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL1BsYXllclNwcml0ZVwiXHJcbmltcG9ydCB7TlBDU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL05QQ1Nwcml0ZVwiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4vaXRlbXMvSXRlbVwiXHJcbmltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi9pdGVtcy9JbnZlbnRvcnlcIlxyXG5pbXBvcnQge0NvbnZlcnNhdGlvbn0gZnJvbSBcIi4vY2hhdC9Db252ZXJzYXRpb25cIlxyXG5pbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4vY2hhdC9EaWFsb2dcIlxyXG5pbXBvcnQge0NvbnRpbnVlRGlhbG9nfSBmcm9tIFwiLi9jaGF0L0NvbnRpbnVlRGlhbG9nXCJcclxuaW1wb3J0IHtPcHRpb25EaWFsb2d9IGZyb20gXCIuL2NoYXQvT3B0aW9uRGlhbG9nXCJcclxuXHJcbmxldCBpbnB1dE1hbmFnZXI7XHJcbmxldCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbmxldCBzY2VuZVNjYWxlOiBudW1iZXI7XHJcbmxldCBsZXZlbFNjYWxlOiBudW1iZXI7XHJcbmxldCBkZXB0aFNjYWxlWTogbnVtYmVyO1xyXG5sZXQgc3RhdGljU3ByaXRlcyA9IG5ldyBBcnJheTxTdGF0aWNTcHJpdGU+KCk7XHJcbmxldCBpbnRlcmFjdGFibGVTcHJpdGVzID0gbmV3IEFycmF5PEludGVyYWN0YWJsZVNwcml0ZT4oKTtcclxubGV0IG5wY1Nwcml0ZXMgPSBuZXcgQXJyYXk8TlBDU3ByaXRlPigpO1xyXG5sZXQgcGxheWVyU3ByaXRlO1xyXG5sZXQgbmF2bWVzaDtcclxuXHJcbmxldCBpdGVtcyA9IHt9OyAgICAgICAgIC8vIGRhdGFiYXNlIG9mIGl0ZW1zXHJcbmxldCBpdGVtc2xvdGJ0bnMgPSBbXTsgIC8vIGFycmF5IG9mIGl0ZW1zbG90IGh0bWwgYnV0dG9uc1xyXG5sZXQgaXRlbWJ0bnMgPSBbXTsgICAgICAvLyBhcnJheSBvZiBpdGVtIGh0bWwgYnV0dG9uc1xyXG5sZXQgaW52ZW50ID0gbmV3IEludmVudG9yeSgpOyAvLyB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbmxldCBzZWxlY3RlZEl0ZW07ICAgICAgIC8vIHVzZXIgY2FuIHNlbGVjdCBhbiBpdGVtIGZyb20gaW52ZW50b3J5IGJ5IGxlZnQgY2xpY2tpbmdcclxubGV0IHNlbGVjdGVkSXRlbUJ0bjtcclxuXHJcbmxldCBmYldpZHRoO1xyXG5sZXQgZmJIZWlnaHQ7XHJcblxyXG5sZXQgbGFzdFRpbWU7XHJcblxyXG5mdW5jdGlvbiBnYW1lTG9vcCgpIC8vIFRPRE8gLSBzcGxpdCBkcmF3IGludG8gdXBkYXRlIGFuZCBkcmF3IGZ1bmN0aW9uc1xyXG57XHJcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xyXG4gICAgY3R4LmZpbGxTdHlsZSA9IFwiYmxhY2tcIjtcclxuICAgIGN0eC5maWxsUmVjdCgwLCAwLCBmYldpZHRoLCBmYkhlaWdodCk7XHJcblxyXG4gICAgLy8gc2V0IG9yaWdpbiB0byB0aGUgY2FudmFzJ3MgY2VudHJlXHJcbiAgICBjdHguc2F2ZSgpO1xyXG4gICAgY3R4LnRyYW5zbGF0ZShmYldpZHRoLzIsIGZiSGVpZ2h0LzIpO1xyXG4gICAgY3R4LnNjYWxlKHNjZW5lU2NhbGUsIHNjZW5lU2NhbGUpO1xyXG5cclxuICAgIGNvbnN0IGN1cnJlbnRUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0IGRlbHRhVGltZSA9IGN1cnJlbnRUaW1lIC0gbGFzdFRpbWU7XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgc2NlbmUgc3BlY2lmaWMgc3ByaXRlc1xyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBzdGF0aWNTcHJpdGVzKVxyXG4gICAge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdGhlIHNwcml0ZXMgd2hpY2ggdGhlIHBsYXllciBjYW4gaW50ZXJhY3Qgd2l0aFxyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBpbnRlcmFjdGFibGVTcHJpdGVzKVxyXG4gICAge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdGhlIE5QQyBzcHJpdGVzXHJcbiAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIG5wY1Nwcml0ZXMpXHJcbiAgICB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgcGxheWVyIHNwcml0ZVxyXG4gICAgcGxheWVyU3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcblxyXG4gICAgLy8gREVCVUcgLSBkcmF3IHRoZSBjb2xsaXNpb24gYm94ZXNcclxuICAgIG5hdm1lc2guZHJhdygpO1xyXG5cclxuICAgIC8vIHJlc3RvcmUgY2FudmFzIHRvIG9yaWdpbmFsIHNldHRpbmdzXHJcbiAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgIGxhc3RUaW1lID0gY3VycmVudFRpbWU7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZElucHV0Q2FsbGJhY2tzKCkge1xyXG4gICAgaW5wdXRNYW5hZ2VyLmFkZFByaW1hcnlNb3VzZURvd25DYWxsYmFjaygobW91c2V4OiBudW1iZXIsIG1vdXNleTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHggPSAobW91c2V4IC0gY2FudmFzLm9mZnNldExlZnQgLSBmYldpZHRoLzIpIC8gc2NlbmVTY2FsZTtcclxuICAgICAgICBsZXQgeSA9IChtb3VzZXkgLSBjYW52YXMub2Zmc2V0VG9wIC0gZmJIZWlnaHQvMikgLyBzY2VuZVNjYWxlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwibGVmdCBtb3VzZSBkb3duIGF0IChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIpXCIpO1xyXG4gICAgICAgIGxldCBpbnRlcmFjdGVkV2l0aFNwcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBmb3IgY2xpY2tzIG9uIGludGVyYWN0YWJsZSAoc3RhdGljKSBzcHJpdGVzXHJcbiAgICAgICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBpbnRlcmFjdGFibGVTcHJpdGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoc3ByaXRlLmluSW50ZXJhY3Rpb25ab25lKHBsYXllclNwcml0ZS54LCBwbGF5ZXJTcHJpdGUueSkgJiYgc3ByaXRlLmluQ2xpY2tab25lKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpbnRlcmFjdCB3aXRoIHRoZSBzcHJpdGVcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHNwcml0ZS5pbnRlcmFjdChzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYob2JqICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTcHJpdGUub3BlblNwZWVjaEJ1YmJsZShvYmoudGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGl0bSBvZiBvYmouaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50LmFkZEl0ZW0oaXRtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVmcmVzaEFsbEl0ZW1zRGlzcGxheWVkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9iai5hdWRpbyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9iai5hdWRpby5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTcHJpdGUub3BlblNwZWVjaEJ1YmJsZShcIlRoYXQncyBhIHJ1YmJpc2ggaWRlYSFcIik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGVkV2l0aFNwcml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIGNsaWNrcyBvbiBOUEMgc3ByaXRlc1xyXG4gICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgbnBjU3ByaXRlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5pbkludGVyYWN0aW9uWm9uZShwbGF5ZXJTcHJpdGUueCwgcGxheWVyU3ByaXRlLnkpICYmIHNwcml0ZS5pbkNsaWNrWm9uZSh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgb3BlbkNoYXRHVUkoc3ByaXRlLmdldENvbnZlcnNhdGlvbigpKTtcclxuICAgICAgICAgICAgICAgIGludGVyYWN0ZWRXaXRoU3ByaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYoIWludGVyYWN0ZWRXaXRoU3ByaXRlKSB7XHJcbiAgICAgICAgICAgIGxldCB3YXlwb2ludHMgPSBuYXZtZXNoLmdldFdheXBvaW50cyhwbGF5ZXJTcHJpdGUueCwgcGxheWVyU3ByaXRlLnksIHgsIHkpO1xyXG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0V2F5cG9pbnRzKHdheXBvaW50cyk7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcblxyXG4gICAgaW5wdXRNYW5hZ2VyLmFkZFNlY29uZGFyeU1vdXNlRG93bkNhbGxiYWNrKChtb3VzZXg6IG51bWJlciwgbW91c2V5OiBudW1iZXIpID0+IHtcclxuICAgICAgICBsZXQgeCA9IChtb3VzZXggLSBjYW52YXMub2Zmc2V0TGVmdCAtIGZiV2lkdGgvMikgLyBzY2VuZVNjYWxlO1xyXG4gICAgICAgIGxldCB5ID0gKG1vdXNleSAtIGNhbnZhcy5vZmZzZXRUb3AgLSBmYkhlaWdodC8yKSAvIHNjZW5lU2NhbGU7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyaWdodCBtb3VzZSBkb3duIGF0IChcIiArIHggKyBcIiwgXCIgKyB5ICsgXCIpXCIpO1xyXG5cclxuICAgICAgICAvLyBjaGVjayBmb3IgY2xpY2tzIG9uIGludGVyYWN0YWJsZSAoc3RhdGljKSBzcHJpdGVzXHJcbiAgICAgICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBpbnRlcmFjdGFibGVTcHJpdGVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoc3ByaXRlLmluQ2xpY2tab25lKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBleGFtaW5lIHRoZSBpbnRlcmFjdGFibGUgc3ByaXRlXHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJTcHJpdGUub3BlblNwZWVjaEJ1YmJsZShzcHJpdGUuZ2V0RXhhbWluZVRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICBpZihzcHJpdGUuZ2V0RXhhbWluZUF1ZGlvKCkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHNwcml0ZS5nZXRFeGFtaW5lQXVkaW8oKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIGNsaWNrcyBvbiBOUEMgc3ByaXRlc1xyXG4gICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgbnBjU3ByaXRlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5pbkNsaWNrWm9uZSh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXhhbWluZSB0aGUgTlBDIHNwcml0ZVxyXG4gICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUoc3ByaXRlLmdldEV4YW1pbmVUZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgaWYoc3ByaXRlLmdldEV4YW1pbmVBdWRpbygpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuZ2V0RXhhbWluZUF1ZGlvKCkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBsYXllclNwcml0ZSgpOiBQcm9taXNlPEFuaW1hdGVkU3ByaXRlPlxyXG57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QW5pbWF0ZWRTcHJpdGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBsZXQgYXRsYXMgPSBuZXcgVGV4dHVyZUF0bGFzKFwicmVzL2F0bGFzZXMvYW5pbWF0ZWQucG5nXCIpO1xyXG4gICAgICAgIGxldCBwbGF5ZXJTcHJpdGU7XHJcbiAgICAgICAgY29uc3QgYXRsYXNMb2FkZWRQcm9taXNlID0gYXRsYXMubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBURVNUX0FOSU1BVElPTiA9IG5ldyBTcHJpdGVBbmltYXRpb24oMiwgYXRsYXMsIFwiYW5pbWF0ZWRcIik7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZSA9IG5ldyBQbGF5ZXJTcHJpdGUoMTAwLCAyMDAsIDEuMjUsIFwiY2VudHJlXCIsIFwidG9wXCIsIFtURVNUX0FOSU1BVElPTl0pO1xyXG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0Q3VycmVudEFuaW1hdGlvbigwKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgcGxheWVyIHNwcml0ZSB0ZXh0dXJlIGF0bGFzJyk7XHJcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHNwZWVjaEJ1YmJsZUltYWdlO1xyXG4gICAgICAgIGNvbnN0IHNwZWVjaEJ1YmJsZUxvYWRlZFByb21pc2UgPSBJbWFnZUxvYWRlci5sb2FkSW1hZ2UoXCJyZXMvaW1hZ2VzL3NwZWVjaF9idWJibGUucG5nXCIpLnRoZW4oKGltZykgPT4ge1xyXG4gICAgICAgICAgICBzcGVlY2hCdWJibGVJbWFnZSA9IGltZztcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IHNwZWVjaCBidWJibGUgaW1hZ2UgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChbYXRsYXNMb2FkZWRQcm9taXNlLCBzcGVlY2hCdWJibGVMb2FkZWRQcm9taXNlXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZS5zZXRTcGVlY2hCdWJibGVJbWFnZShzcGVlY2hCdWJibGVJbWFnZSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUocGxheWVyU3ByaXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBwcm9ncmFtIGVudHJ5IHBvaW50XHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PlxyXG57XHJcbiAgICBpbml0Q2FudmFzQW5kQ29udGV4dCgpO1xyXG4gICAgaW5wdXRNYW5hZ2VyID0gbmV3IElucHV0TWFuYWdlcihjYW52YXMpO1xyXG4gICAgYWRkSW5wdXRDYWxsYmFja3MoKTtcclxuXHJcbiAgICAvLyBzZXQgdGhlIGNhbnZhcyBzaXplXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOTU7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC45NTtcclxuICAgIGZiV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICBmYkhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgLy8gbGV2ZWwgc2V0dXAgZGF0YVxyXG4gICAgbGV0IHBsYXllclN0YXJ0WCA9IDA7XHJcbiAgICBsZXQgcGxheWVyU3RhcnRZID0gMDtcclxuXHJcbiAgICBjb25zdCBsb2FkUGxheWVyU3ByaXRlUHJvbWlzZSA9IGxvYWRQbGF5ZXJTcHJpdGUoKS50aGVuKChzcHJpdGUpID0+IHtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUgPSBzcHJpdGU7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRJdGVtc1Byb21pc2UgPSBKU09OTG9hZGVyLmxvYWRKU09ORmlsZShcInJlcy9pdGVtcy9pdGVtcy5qc29uXCIpLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cob2JqLml0ZW1zKVxyXG4gICAgICAgIGZvcihjb25zdCBpZCBpbiBvYmouaXRlbXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpdG0gPSBvYmouaXRlbXNbaWRdO1xyXG4gICAgICAgICAgICBpdGVtc1tpZF0gPSBuZXcgSXRlbShpdG0ubmFtZSwgaXRtLmV4YW1pbmVfdGV4dCwgbmV3IEF1ZGlvKGl0bS5leGFtaW5lX2F1ZGlvKSwgaXRtLmltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGNvbnN0IGlkIGluIG9iai5jb21iaW5hdGlvbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5hdGlvbiA9IG9iai5jb21iaW5hdGlvbnNbaWRdO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtMSA9IGl0ZW1zW2NvbWJpbmF0aW9uLml0ZW0xXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbTIgPSBpdGVtc1tjb21iaW5hdGlvbi5pdGVtMl07XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zT3V0ID0gW107XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBpZE91dCBvZiBjb21iaW5hdGlvbi5pdGVtc19vdXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zT3V0LnB1c2goaXRlbXNbaWRPdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpdGVtMSAhPSBudWxsICYmIGl0ZW0yICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0xLmFkZENvbWJpbmF0aW9uKGl0ZW0yLCBpdGVtc091dCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtMi5hZGRDb21iaW5hdGlvbihpdGVtMSwgaXRlbXNPdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRQbGF5ZXJJbnZlbnRvcnkoXCJhY2tcIik7XHJcbiAgICAgICAgaW5pdEdVSUNvbnRyb2xsZXJzKCk7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogaXRlbXMgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBMZXZlbC5sb2FkTGV2ZWwoXCJyZXMvbGV2ZWxzL2xldmVsMS5qc29uXCIsIGl0ZW1zKTtcclxuICAgIH0pLnRoZW4oKGxldmVsRGF0YSkgPT4ge1xyXG4gICAgICAgIGltZyA9IGxldmVsRGF0YS5iYWNrZ3JvdW5kSW1nO1xyXG4gICAgICAgIHN0YXRpY1Nwcml0ZXMgPSBsZXZlbERhdGEuc3RhdGljU3ByaXRlcztcclxuICAgICAgICBpbnRlcmFjdGFibGVTcHJpdGVzID0gbGV2ZWxEYXRhLmludGVyYWN0YWJsZVNwcml0ZXM7XHJcbiAgICAgICAgbnBjU3ByaXRlcyA9IGxldmVsRGF0YS5ucGNTcHJpdGVzO1xyXG4gICAgICAgIGxldmVsU2NhbGUgPSBsZXZlbERhdGEuc2NlbmVTY2FsZSA/IGxldmVsRGF0YS5zY2VuZVNjYWxlIDogMS4wO1xyXG4gICAgICAgIHNjZW5lU2NhbGUgPSBsZXZlbFNjYWxlICogY2FudmFzLmhlaWdodC84ODA7ICAvLyBzY2FsZSBiYXNlZCBvbiB0aGUgY2FudmFzIHNpemUgc28gZ2FtZSBmaXRzIG9uIHNjcmVlblxyXG4gICAgICAgIGRlcHRoU2NhbGVZID0gbGV2ZWxEYXRhLmRlcHRoU2NhbGVZO1xyXG5cclxuICAgICAgICBwbGF5ZXJTdGFydFggPSBsZXZlbERhdGEucGxheWVyU3RhcnRYO1xyXG4gICAgICAgIHBsYXllclN0YXJ0WSA9IGxldmVsRGF0YS5wbGF5ZXJTdGFydFk7XHJcblxyXG4gICAgICAgIG5hdm1lc2ggPSBsZXZlbERhdGEubmF2bWVzaDtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBsZXZlbCBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgUHJvbWlzZS5hbGwoW2xvYWRQbGF5ZXJTcHJpdGVQcm9taXNlLCBsb2FkSXRlbXNQcm9taXNlXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnggPSBwbGF5ZXJTdGFydFg7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnkgPSBwbGF5ZXJTdGFydFk7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnNldFN0YXJ0UG9zKHBsYXllclN0YXJ0WCwgcGxheWVyU3RhcnRZKTtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0RGVwdGhTY2FsZShkZXB0aFNjYWxlWSk7XHJcbiAgICAgICAgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGdhbWVMb29wKCk7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogZ2FtZSBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIG9uIHdpbmRvdyByZXNpemUgY2hhbmdlIHRoZSBzY2FsZVxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXQgdGhlIGNhbnZhcyBzaXplXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOTU7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC45NTtcclxuICAgIGZiV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICBmYkhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICBzY2VuZVNjYWxlID0gbGV2ZWxTY2FsZSAqIGNhbnZhcy5oZWlnaHQvODgwOyAgLy8gc2NhbGUgYmFzZWQgb24gdGhlIGNhbnZhcyBzaXplIHNvIGdhbWUgZml0cyBvbiBzY3JlZW5cclxuICAgIGNvbnNvbGUubG9nKHNjZW5lU2NhbGUpO1xyXG59XHJcblxyXG4vLyBsb2FkIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuZnVuY3Rpb24gbG9hZFBsYXllckludmVudG9yeShwYXRoOiBzdHJpbmcpIHtcclxuICAgIC8vIFRPRE8gLSBsb2FkIGZyb20gZmlsZVxyXG4gICAgLy9pbnZlbnQuYWRkSXRlbShpdGVtc1tcIjAuMC4xLTAwMVwiXSk7XHJcbiAgICAvL2ludmVudC5hZGRJdGVtKGl0ZW1zW1wiMC4wLjEtMDAyXCJdKTtcclxuICAgIC8vaW52ZW50LmFkZEl0ZW0oaXRlbXNbXCIwLjAuMS0wMDJcIl0pO1xyXG4gICAgLy9pbnZlbnQuYWRkSXRlbShpdGVtc1tcIjAuMC4xLTAwM1wiXSk7XHJcbn1cclxuXHJcbi8vIGNoYXQgZ3VpXHJcbmZ1bmN0aW9uIG9wZW5DaGF0R1VJKGNvbnZlcnNhdGlvbjogQ29udmVyc2F0aW9uKSB7XHJcbiAgICBpZihjb252ZXJzYXRpb24gIT0gbnVsbCkge1xyXG4gICAgICAgIGxldCBjaGF0cGFuZWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNoYXRwYW5lbFwiKTtcclxuICAgICAgICBpZihjaGF0cGFuZWwgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyByZW1vdmUgdGhlIGNoYXQgcGFuZWwgaWYgaXQgYWxyZWFkeSBleGlzdHNcclxuICAgICAgICAgICAgY2hhdHBhbmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hhdHBhbmVsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYXRwYW5lbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgY2hhdHBhbmVsLmlkID0gXCJjaGF0cGFuZWxcIjtcclxuICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShjaGF0cGFuZWwsIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52ZW50XCIpKTtcclxuXHJcbiAgICAgICAgLy8gY3JlYXRlIGEgR1VJIGZvciB0aGUgZGlhbG9nXHJcbiAgICAgICAgbGV0IGQgPSBjb252ZXJzYXRpb24uZ2V0Rmlyc3REaWFsb2coKTtcclxuICAgICAgICBjcmVhdGVEaWFsb2dHVUkoY2hhdHBhbmVsIGFzIEhUTUxEaXZFbGVtZW50LCBkKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY3JlYXRlRGlhbG9nR1VJKGNoYXRwYW5lbDogSFRNTERpdkVsZW1lbnQsIGQ6IERpYWxvZykge1xyXG4gICAgY2hhdHBhbmVsLmlubmVySFRNTCA9IFwiXCI7ICAgLy8gY2xlYXIgdGhlIGRpdiBvZiBwcmV2aW91cyBjb250ZW50c1xyXG5cclxuICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZXhpdGluZyB0aGUgY29udmVyc2F0aW9uXHJcbiAgICAvLyBOT1RFIC0gcHJvYmFibHkgbm90IG5lZWRlZFxyXG4gICAgLypsZXQgZXhpdGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBleGl0YnRuLmNsYXNzTGlzdC5hZGQoXCJleGl0Y2hhdGJ0blwiKTtcclxuICAgIGV4aXRidG4uaW5uZXJIVE1MID0gXCJFeGl0IENvbnZlcnNhdGlvblwiO1xyXG4gICAgY2hhdHBhbmVsLmFwcGVuZENoaWxkKGV4aXRidG4pO1xyXG4gICAgZXhpdGJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgICAgIC8vIGV4aXQgdGhlIGNvbnZlcnNhdGlvblxyXG4gICAgICAgIGNoYXRwYW5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoYXRwYW5lbCk7XHJcbiAgICB9OyovXHJcblxyXG4gICAgaWYoZCAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gYWRkIHRoZSBzcGVha2VyIGltYWdlIGJhc2VkIG9uIHdoZXRoZXIgcGxheWVyIG9yIG5wYyBpcyBzcGVha2luZ1xyXG4gICAgICAgIGxldCBzcGVha2VyaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICBzcGVha2VyaW1nLnNyYyA9IFwicmVzL2ltYWdlcy9wbGF5ZXJfaGVhZC5wbmdcIjtcclxuICAgICAgICBzcGVha2VyaW1nLmNsYXNzTGlzdC5hZGQoZC5nZXRTcGVha2VyKCkgPT0gXCJwbGF5ZXJcIiA/IFwicGxheWVyY2hhdGhlYWRcIiA6IFwibnBjY2hhdGhlYWRcIik7XHJcbiAgICAgICAgY2hhdHBhbmVsLmFwcGVuZENoaWxkKHNwZWFrZXJpbWcpO1xyXG5cclxuICAgICAgICAvLyBhZGQgbGFiZWxzIGFuZCBidXR0b25zIGZvciB0aGlzIGRpYWxvZ1xyXG4gICAgICAgIGQuY3JlYXRlR1VJRWxlbWVudChjaGF0cGFuZWwpLnRoZW4oKG5leHREaWFsb2c6IERpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICBpZihuZXh0RGlhbG9nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIGFkdmFuY2UgdG8gbmV4dCBkaWFsb2dcclxuICAgICAgICAgICAgICAgIGNyZWF0ZURpYWxvZ0dVSShjaGF0cGFuZWwsIG5leHREaWFsb2cpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gbmV4dCBkaWFsb2cgaXMgbnVsbCwgdGhlcmVmb3JlLCBleGl0IGNvbnZlcnNhdGlvblxyXG4gICAgICAgICAgICAgICAgY2hhdHBhbmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hhdHBhbmVsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcblxyXG4vLyBndWkgY29udHJvbFxyXG5mdW5jdGlvbiBpbml0R1VJQ29udHJvbGxlcnMoKSB7XHJcbiAgICAvLyBnZXQgYWxsIG9mIHRoZSBpdGVtIHNsb3QgaHRtbCBidXR0b25zXHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90MVwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90MlwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90M1wiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NFwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NVwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NlwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90N1wiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90OFwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90OVwiKSk7XHJcblxyXG4gICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW52ZW50LmdldEl0ZW1zKCkubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpbnZlbnQuZ2V0SXRlbXMoKVtpbmRleF07XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgICAgICAgICAgYWRkTmV3SXRlbUJ1dHRvbihpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zbG90YnRucy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zbG90YnRuID0gaXRlbXNsb3RidG5zW2luZGV4XTtcclxuICAgICAgICBpdGVtc2xvdGJ0bi5vbmNsaWNrID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBvbkl0ZW1TbG90Q2xpY2soaXRlbXNsb3RidG4sIGluZGV4LCBldnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTmV3SXRlbUJ1dHRvbihpdGVtc2xvdEluZGV4OiBudW1iZXIsIGl0ZW06IEl0ZW0pXHJcbntcclxuICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgdGhlIGl0ZW1cclxuICAgIGxldCBpdGVtYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGl0ZW1idG4uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XHJcbiAgICBpdGVtYnRuLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aXRlbS5nZXRJbWFnZVBhdGgoKX0pO2A7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZlbnRcIikuaW5zZXJ0QmVmb3JlKGl0ZW1idG4sIGl0ZW1zbG90YnRuc1tpdGVtc2xvdEluZGV4XSk7XHJcblxyXG4gICAgLy8gYWRkIGEgbW91c2UgY2xpY2sgY2FsbGJhY2sgdG8gdGhlIG5ldyBlbGVtZW50XHJcbiAgICBpdGVtYnRuLm9uY2xpY2sgPSAoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XHJcbiAgICAgICAgb25JdGVtQ2xpY2soaXRlbWJ0biwgaXRlbSwgZXZ0KTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaEFsbEl0ZW1zRGlzcGxheWVkKClcclxue1xyXG4gICAgLy8gZmlyc3QsIHJlbW92ZSBhbGwgaXRlbSBidXR0b25zIGZyb20gdGhlIGRvbVxyXG4gICAgY29uc3QgZWxlbXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiaXRlbVwiKTtcclxuICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVsZW1zLmxlbmd0aDsgaW5kZXggKyspXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGVsZW1lbnQgPSBlbGVtc1tpbmRleF07XHJcbiAgICAgICAgZWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGludmVudC5nZXRJdGVtcygpLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gaW52ZW50LmdldEl0ZW1zKClbaW5kZXhdO1xyXG4gICAgICAgIGlmKGl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBhZGQgYSBidXR0b24gZm9yIGVhY2ggaXRlbSBpbiB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbiAgICAgICAgICAgIGFkZE5ld0l0ZW1CdXR0b24oaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVmcmVzaEl0ZW1EaXNwbGF5ZWQoaXRlbWJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQsIGl0ZW06IEl0ZW0pXHJcbntcclxuICAgIGlmKGl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgIC8vIGNoYW5nZSB0aGUgaW1hZ2UgZGlzcGxheWVkIG9uIHRoZSBpdGVtIGJ1dHRvblxyXG4gICAgICAgIGl0ZW1idG4uc3R5bGUuY3NzVGV4dCA9IGBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoJHtpdGVtLmdldEltYWdlUGF0aCgpfSk7YDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIHRoZSBpdGVtIGJ1dHRvbiBmcm9tIHRoZSBkb21cclxuICAgICAgICBpdGVtYnRuLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbWJ0bik7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uSXRlbVNsb3RDbGljayhpdGVtc2xvdGJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQsIGl0ZW1zbG90SW5kZXg6IG51bWJlciwgZXZ0OiBNb3VzZUV2ZW50KVxyXG57XHJcbiAgICAvLyBtb3ZlIHNlbGVjdGVkIGl0ZW0gdG8gdGhpcyBzbG90XHJcbiAgICBpZihzZWxlY3RlZEl0ZW0gIT0gbnVsbCAmJiBzZWxlY3RlZEl0ZW1CdG4gIT0gbnVsbClcclxuICAgIHtcclxuICAgICAgICAvLyByZW1vdmUgZnJvbSBwcmV2aW91cyBpdGVtc2xvdCBhbmQgYWRkIHRvIG5ldyBpdGVtc2xvdFxyXG4gICAgICAgIHNlbGVjdGVkSXRlbUJ0bi5jbGFzc0xpc3QucmVtb3ZlKFwic2VsZWN0ZWRpdGVtXCIpO1xyXG4gICAgICAgIHJlZnJlc2hJdGVtRGlzcGxheWVkKHNlbGVjdGVkSXRlbUJ0biwgbnVsbCk7XHJcbiAgICAgICAgYWRkTmV3SXRlbUJ1dHRvbihpdGVtc2xvdEluZGV4LCBzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgIGludmVudC5tb3ZlSXRlbShzZWxlY3RlZEl0ZW0sIGl0ZW1zbG90SW5kZXgpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGludmVudC5nZXRJdGVtcygpKTtcclxuICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG4gICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uSXRlbUNsaWNrKGl0ZW1idG46IEhUTUxCdXR0b25FbGVtZW50LCBpdGVtOiBJdGVtLCBldnQ6IE1vdXNlRXZlbnQpXHJcbntcclxuICAgIGlmKGV2dC5idXR0b24gPT09IDApIHsgIC8vIGxlZnQgY2xpY2tcclxuICAgICAgICAvLyBjb21iaW5lIDIgaXRlbXMsIChjYW4ndCBjb21iaW5lIGl0ZW0gd2l0aCBpdHNlbGYpXHJcbiAgICAgICAgaWYoc2VsZWN0ZWRJdGVtICE9IG51bGwgJiYgc2VsZWN0ZWRJdGVtQnRuICE9IG51bGwgJiYgaXRlbSAhPT0gc2VsZWN0ZWRJdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0SXRlbXMgPSBzZWxlY3RlZEl0ZW0uY29tYmluZShpdGVtKTtcclxuICAgICAgICAgICAgaWYob3V0SXRlbXMgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEl0ZW1EaXNwbGF5ZWQoc2VsZWN0ZWRJdGVtQnRuLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hJdGVtRGlzcGxheWVkKGl0ZW1idG4sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50LnJlbW92ZUl0ZW0oc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICAgICAgICAgIGludmVudC5yZW1vdmVJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IG91dEl0ZW0gb2Ygb3V0SXRlbXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50LmFkZEl0ZW0ob3V0SXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGludmVudC5nZXRJdGVtcygpKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hBbGxJdGVtc0Rpc3BsYXllZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZGl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZWxlY3QgYW4gaXRlbVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gPT09IHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZGl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBpdGVtYnRuO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZGl0ZW1cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYoZXZ0LmJ1dHRvbiA9PT0gMikgeyAgIC8vIHJpZ2h0IGNsaWNrXHJcbiAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUoaXRlbS5nZXRFeGFtaW5lVGV4dCgpKTtcclxuICAgICAgICBpZihpdGVtLmdldEV4YW1pbmVBdWRpbygpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaXRlbS5nZXRFeGFtaW5lQXVkaW8oKS5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vZGVjbGFyZSBQcm9taXNlIGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRJbWFnZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBwYXRoO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEpTT05Mb2FkZXJcclxue1xyXG4gICAgc3RhdGljIGxvYWRKU09ORmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvYmopO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FICYmIHhoci5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocGF0aCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHBhdGgsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9TcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZSBleHRlbmRzIFNwcml0ZVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgc3ByaXRlQW5pbWF0aW9uczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPiA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRBbmltYXRpb24gPSAtMTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4pIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwpO1xyXG4gICAgICAgIGlmKGFuaW1zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb25zID0gYW5pbXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50QW5pbWF0aW9uID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbSA9IHRoaXMuc3ByaXRlQW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRBbmltYXRpb25dO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hPcmlnaW4oYW5pbS5nZXRDdXJyZW50RnJhbWUoKS53LCBhbmltLmdldEN1cnJlbnRGcmFtZSgpLmgpO1xyXG4gICAgICAgICAgICBhbmltLmRyYXcoY3VycmVudFRpbWUsIHRoaXMub3JpZ2luWCwgdGhpcy5vcmlnaW5ZLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRBbmltYXRpb24gPSAobmV3QW5pbWF0aW9uSW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmKG5ld0FuaW1hdGlvbkluZGV4IDwgdGhpcy5zcHJpdGVBbmltYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBuZXdBbmltYXRpb25JbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFNwcml0ZUFuaW1hdGlvbiA9IChhbmltKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYoYW5pbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQW5pbWF0aW9ucy5wdXNoKGFuaW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3ByaXRlQW5pbWF0aW9ucyA9IChhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmKGFuaW1zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb25zID0gYW5pbXM7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UG9zKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge1N0YXRpY1Nwcml0ZX0gZnJvbSBcIi4vU3RhdGljU3ByaXRlXCJcclxuaW1wb3J0IHtJbnRlcmFjdGlvbn0gZnJvbSBcIi4uL2dhbWUvSW50ZXJhY3Rpb25cIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4vVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL0NpcmNsZVwiXHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RhbmdsZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3RhYmxlU3ByaXRlIGV4dGVuZHMgU3RhdGljU3ByaXRlXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGF0bGFzOiBUZXh0dXJlQXRsYXMsIGltYWdlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIGV4YW1pbmVUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBleGFtaW5lQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBpbnRlcmFjdGlvblpvbmU6IENpcmNsZSwgcHJvdGVjdGVkIGNsaWNrWm9uZTogUmVjdGFuZ2xlLCBwcm90ZWN0ZWQgaW50ZXJhY3Rpb25zOiBBcnJheTxJbnRlcmFjdGlvbj4pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhdGxhcywgaW1hZ2VOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICAvLyBERUJVRyAtIGRyYXcgdGhlIGNpcmNsZSBhbmQgcmVjdGFuZ2xlXHJcbiAgICAgICAgdGhpcy5jbGlja1pvbmUuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25ab25lLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5JbnRlcmFjdGlvblpvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJhY3Rpb25ab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbkNsaWNrWm9uZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGlja1pvbmUuY29udGFpbnMoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgc3ByaXRlXHJcbiAgICAvLyBpdGVtIGNhbiBiZSBudWxsXHJcbiAgICBwdWJsaWMgaW50ZXJhY3QoaXRlbTogSXRlbSk6IHt0ZXh0OiBzdHJpbmcsIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBpdGVtczogQXJyYXk8SXRlbT59XHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGludGVyIG9mIHRoaXMuaW50ZXJhY3Rpb25zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW1zIG1hdGNoLCB0aGVuIGludGVyYWN0IHdpdGggdGhlIG9iamVjdFxyXG4gICAgICAgICAgICBpZihpbnRlci5nZXRJdGVtKCkgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IGludGVyLmludGVyYWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYob2JqICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGludGVyYWN0aW9uIGlmIGl0IGhhcyBiZWVuIGZ1bGZpbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25zLnNwbGljZSh0aGlzLmludGVyYWN0aW9ucy5pbmRleE9mKGludGVyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZVRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVBdWRpbygpOiBIVE1MQXVkaW9FbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZUF1ZGlvO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7TmF2U3ByaXRlfSBmcm9tIFwiLi9OYXZTcHJpdGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi4vY29sbGlzaW9uL1BvaW50XCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtDb252ZXJzYXRpb259IGZyb20gXCIuLi9jaGF0L0NvbnZlcnNhdGlvblwiXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL0NpcmNsZVwiXHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RhbmdsZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgTlBDU3ByaXRlIGV4dGVuZHMgTmF2U3ByaXRlXHJcbntcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVTaG93bkF0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZVRleHQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGV4dFdpZHRoOiBudW1iZXI7ICAvLyB3aWR0aCBvZiB0aGUgdGV4dCBpbiBwaXhlbHNcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQkFTRV9GT05UX1NJWkUgPSA3NTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4sXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZXhhbWluZVRleHQ6IHN0cmluZywgcHJvdGVjdGVkIGV4YW1pbmVBdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgcHJvdGVjdGVkIGludGVyYWN0aW9uWm9uZTogQ2lyY2xlLCBwcm90ZWN0ZWQgY2xpY2tab25lOiBSZWN0YW5nbGUsIHByb3RlY3RlZCBjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbiwgbW92ZVNwZWVkOiBudW1iZXIgPSAwLjUpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhbmltcywgbW92ZVNwZWVkKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRBbmltYXRpb24oMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnNwZWVjaEJ1YmJsZU9wZW4pIHtcclxuICAgICAgICAgICAgLy8gZHJhdyB0aGUgc3BlZWNoIGJ1YmJsZVxyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy5vcmlnaW5ZKTtcclxuICAgICAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcIiM1NTU1NTVcIjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMUFGRjgwXCI7ICAgLy8gZ3JlZW46ICMxQUZGODAsIGFtYmVyOiAjRkZCNjQyLCBibHVlOiAjMkVDRkZGXHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnNwZWVjaEJ1YmJsZVRleHQsIC10aGlzLnRleHRXaWR0aC8yLCAwKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNwZWVjaCBidWJibGUgbGFzdHMgMS8yIHNlY29uZCBmb3IgZWFjaCB3b3JkXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lIC0gdGhpcy5zcGVlY2hCdWJibGVTaG93bkF0ID49IHRoaXMuc3BlZWNoQnViYmxlVGV4dC5zcGxpdChcIiBcIikubGVuZ3RoICogNTAwICsgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gREVCVUcgLSBkcmF3IHRoZSBjaXJjbGUgYW5kIHJlY3RhbmdsZVxyXG4gICAgICAgIHRoaXMuY2xpY2tab25lLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmludGVyYWN0aW9uWm9uZS5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5TcGVlY2hCdWJibGUodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYodGV4dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlU2hvd25BdCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke3RoaXMuQkFTRV9GT05UX1NJWkV9cHggQm9va21hbmA7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29udmVyc2F0aW9uKCk6IENvbnZlcnNhdGlvblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnNhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5JbnRlcmFjdGlvblpvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJhY3Rpb25ab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbkNsaWNrWm9uZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGlja1pvbmUuY29udGFpbnMoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lQXVkaW8oKTogSFRNTEF1ZGlvRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVBdWRpbztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi4vY29sbGlzaW9uL1BvaW50XCJcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZTcHJpdGUgZXh0ZW5kcyBBbmltYXRlZFNwcml0ZVxyXG57XHJcbiAgICBwcml2YXRlIHdheXBvaW50czogQXJyYXk8UG9pbnQ+O1xyXG4gICAgcHJpdmF0ZSBuZXh0V2F5cG9pbnQ6IFBvaW50O1xyXG4gICAgcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGRlcHRoU2NhbGVZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdGFydFk6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4sIG1vdmVTcGVlZDogbnVtYmVyID0gMC41KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhbmltcyk7XHJcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBtb3ZlU3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBtb3ZlIHRvd2FyZHMgdGhlIG5leHQgd2F5cG9pbnRcclxuICAgICAgICBpZih0aGlzLm5leHRXYXlwb2ludCAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oTWF0aC5hYnModGhpcy5uZXh0V2F5cG9pbnQueSAtIHRoaXMueSkgLyBNYXRoLmFicyh0aGlzLm5leHRXYXlwb2ludC54IC0gdGhpcy54KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVTcGVlZFggPSB0aGlzLm1vdmVTcGVlZCAqIGRlbHRhVGltZSAqIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVTcGVlZFkgPSB0aGlzLm1vdmVTcGVlZCAqIGRlbHRhVGltZSAqIE1hdGguc2luKGFuZ2xlKSAqIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgc3ByaXRlIGhhcyByZWFjaGVkIHRoZSB3YXlwb2ludCAob3IgdGhlcmVhYm91dHMpIHRoZW4gZ2V0IHRoZSBuZXh0IHdheXBvaW50XHJcbiAgICAgICAgICAgIGlmKHRoaXMueCA+PSB0aGlzLm5leHRXYXlwb2ludC54IC0gNSAmJiB0aGlzLnggPD0gdGhpcy5uZXh0V2F5cG9pbnQueCArIDUgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMueSA+PSB0aGlzLm5leHRXYXlwb2ludC55IC0gNSAmJiB0aGlzLnkgPD0gdGhpcy5uZXh0V2F5cG9pbnQueSArIDUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJhcnJpdmVkXCIsIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubmV4dFdheXBvaW50Lng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLm5leHRXYXlwb2ludC55O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy53YXlwb2ludHMgIT0gbnVsbCAmJiB0aGlzLndheXBvaW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSB0aGlzLndheXBvaW50cy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIHRvd2FyZHMgdGhlIG5leHQgd2F5cG9pbnRcclxuICAgICAgICAgICAgaWYodGhpcy5uZXh0V2F5cG9pbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy54IDwgdGhpcy5uZXh0V2F5cG9pbnQueCAtIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gbW92ZVNwZWVkWDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnggPiB0aGlzLm5leHRXYXlwb2ludC54ICsgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCAtPSBtb3ZlU3BlZWRYO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMueSA8IHRoaXMubmV4dFdheXBvaW50LnkgLSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IG1vdmVTcGVlZFk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy55ID4gdGhpcy5uZXh0V2F5cG9pbnQueSArIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gbW92ZVNwZWVkWTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzY2FsZSB0aGUgcGxheWVyIGJhc2VkIG9uIHRoZSBkZXB0aCBvZiB0aGUgbW91c2UgcG9zaXRpb25cclxuICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5iYXNlU2NhbGUgKiB0aGlzLmRlcHRoU2NhbGVZICoqICh0aGlzLnN0YXJ0WSAtIHRoaXMueSk7XHJcblxyXG4gICAgICAgIHN1cGVyLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFdheXBvaW50cyh3YXlwb2ludHM6IEFycmF5PFBvaW50Pikge1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzID0gd2F5cG9pbnRzO1xyXG4gICAgICAgIHRoaXMubmV4dFdheXBvaW50ID0gbnVsbDtcclxuICAgICAgICBpZih0aGlzLndheXBvaW50cyAhPSBudWxsICYmIHRoaXMud2F5cG9pbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy53YXlwb2ludHMpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IHRoaXMud2F5cG9pbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQ6IFwiICsgdGhpcy5uZXh0V2F5cG9pbnQueCArIFwiLCBcIiArIHRoaXMubmV4dFdheXBvaW50LnkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREZXB0aFNjYWxlKGRlcHRoU2NhbGVZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRlcHRoU2NhbGVZID0gZGVwdGhTY2FsZVk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFN0YXJ0UG9zKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFggPSB4O1xyXG4gICAgICAgIHRoaXMuc3RhcnRZID0geTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge05hdlNwcml0ZX0gZnJvbSBcIi4vTmF2U3ByaXRlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9Qb2ludFwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3ByaXRlIGV4dGVuZHMgTmF2U3ByaXRlXHJcbntcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlU2hvd25BdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVUZXh0OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHRXaWR0aDogbnVtYmVyOyAgLy8gd2lkdGggb2YgdGhlIHRleHQgaW4gcGl4ZWxzXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IEJBU0VfRk9OVF9TSVpFID0gNzU7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+LCBtb3ZlU3BlZWQ6IG51bWJlciA9IDAuNSlcclxuICAgIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwsIGFuaW1zLCBtb3ZlU3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zcGVlY2hCdWJibGVPcGVuKSB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgdGhlIHNwZWVjaCBidWJibGVcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMub3JpZ2luWSk7XHJcbiAgICAgICAgICAgIC8vY3R4LmRyYXdJbWFnZSh0aGlzLnNwZWVjaEJ1YmJsZUltYWdlLCAtdGhpcy5zcGVlY2hCdWJibGVJbWFnZS53aWR0aC8yICogdGhpcy5zY2FsZSwgLXRoaXMuc3BlZWNoQnViYmxlSW1hZ2UuaGVpZ2h0LzIgKiB0aGlzLnNjYWxlLCB0aGlzLnNwZWVjaEJ1YmJsZUltYWdlLndpZHRoICogdGhpcy5zY2FsZSwgdGhpcy5zcGVlY2hCdWJibGVJbWFnZS5oZWlnaHQgKiB0aGlzLnNjYWxlKTtcclxuICAgICAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcIiM1NTU1NTVcIjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMUFGRjgwXCI7ICAgLy8gZ3JlZW46ICMxQUZGODAsIGFtYmVyOiAjRkZCNjQyLCBibHVlOiAjMkVDRkZGXHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnNwZWVjaEJ1YmJsZVRleHQsIC10aGlzLnRleHRXaWR0aC8yLCAwKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNwZWVjaCBidWJibGUgbGFzdHMgMS8yIHNlY29uZCBmb3IgZWFjaCB3b3JkXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lIC0gdGhpcy5zcGVlY2hCdWJibGVTaG93bkF0ID49IHRoaXMuc3BlZWNoQnViYmxlVGV4dC5zcGxpdChcIiBcIikubGVuZ3RoICogNTAwICsgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlblNwZWVjaEJ1YmJsZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZih0ZXh0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVUZXh0ID0gdGV4dDtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVTaG93bkF0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7dGhpcy5CQVNFX0ZPTlRfU0laRX1weCBCb29rbWFuYDtcclxuICAgICAgICAgICAgdGhpcy50ZXh0V2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkaXYgY29udGFpbmluZyB0aGUgdGV4dCBzbyB0aGUgcGl4ZWwgd2lkdGggb2YgdGV4dCBjYW4gYmUgY2FsY3VsYXRlZFxyXG4gICAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTgyNDEvY2FsY3VsYXRlLXRleHQtd2lkdGgtd2l0aC1qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgIC8qbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOiBhYnNvbHV0ZTsgdmlzaWJpbGl0eTogaGlkZGVuOyBoZWlnaHQ6IGF1dG87IHdpZHRoOiBhdXRvOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBmb250LXNpemU6ICR7dGhpcy5CQVNFX0ZPTlRfU0laRX1gO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShkaXYsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRXaWR0aCA9IGRpdi5jbGllbnRXaWR0aCArIDE7Ki9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXh0IHdpZHRoXCIsIHRoaXMudGV4dFdpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwZWVjaEJ1YmJsZUltYWdlKGltZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZUltYWdlID0gaW1nO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTcHJpdGVcclxue1xyXG4gICAgcHJvdGVjdGVkIGJhc2VTY2FsZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG9yaWdpblg6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBvcmlnaW5ZOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHg6IG51bWJlciwgcHJvdGVjdGVkIHk6IG51bWJlciwgcHJvdGVjdGVkIHNjYWxlOiBudW1iZXIsIHByb3RlY3RlZCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIHByb3RlY3RlZCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBwcm90ZWN0ZWQgZGVwdGg6IG51bWJlciA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5iYXNlU2NhbGUgPSB0aGlzLnNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWZyZXNoT3JpZ2luKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0byBkcmF3IHRoZSBzcHJpdGVcclxuICAgICAgICBpZih0aGlzLm9yaWdpbkhvcml6b250YWwgPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWCA9IHRoaXMueCAtIHdpZHRoICogdGhpcy5zY2FsZTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5vcmlnaW5Ib3Jpem9udGFsID09IFwibGVmdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWCA9IHRoaXMueDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblggPSB0aGlzLnggLSB3aWR0aC8yICogdGhpcy5zY2FsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgcG9zaXRpb24gYXQgd2hpY2ggdG8gZHJhdyB0aGUgc3ByaXRlXHJcbiAgICAgICAgaWYodGhpcy5vcmlnaW5WZXJ0aWNhbCA9PSBcInRvcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWSA9IHRoaXMueSAtIGhlaWdodCogdGhpcy5zY2FsZTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5vcmlnaW5WZXJ0aWNhbCA9PSBcImJvdHRvbVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWSA9IHRoaXMueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblkgPSB0aGlzLnkgLSBoZWlnaHQvMiAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXN9IGZyb20gJy4vVGV4dHVyZUF0bGFzJ1xyXG5pbXBvcnQge1RleHR1cmVBdGxhc0ZyYW1lfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNGcmFtZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQW5pbWF0aW9uXHJcbntcclxuICAgIC8vIGh0dHA6Ly93d3cudHlwZXNjcmlwdGdhbWVzLmNvbS9BbmltYXRlZFNwcml0ZXMuaHRtbFxyXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICBwcml2YXRlIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBudW1GcmFtZXM6IG51bWJlciwgcHJvdGVjdGVkIGF0bGFzOiBUZXh0dXJlQXRsYXMsIHByb3RlY3RlZCBzZXF1ZW5jZU5hbWU6IHN0cmluZykge31cclxuXHJcbiAgICBwdWJsaWMgZHJhdyA9IChjdXJyZW50VGltZTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBmcmFtZSA9IHRoaXMuZ2V0Q3VycmVudEZyYW1lKCk7XHJcbiAgICAgICAgaWYoZnJhbWUuZnJhbWVEdXJhdGlvbiA8PSBjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSsrO1xyXG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRGcmFtZSA+PSB0aGlzLm51bUZyYW1lcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSBjdXJyZW50VGltZTtcclxuICAgICAgICAgICAgZnJhbWUgPSB0aGlzLmdldEN1cnJlbnRGcmFtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3ByaXRlcyBhcmUgZHJhd24gZnJvbSB0aGVpciBjZW50cmUteCwgYm90dG9tLXksIGkuZS4gZmVldCBwb3NpdGlvblxyXG4gICAgICAgIC8vbGV0IHRvcExlZnRYID0geCAtIGZyYW1lLncvMiAqIHNjYWxlO1xyXG4gICAgICAgIC8vbGV0IHRvcExlZnRZID0geSAtIGZyYW1lLmggKiBzY2FsZTtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgICAgIGN0eC5yZWN0KGZyYW1lLngsIGZyYW1lLnksIGZyYW1lLncsIGZyYW1lLmgpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5hdGxhcy5pbWFnZSxcclxuICAgICAgICAgICAgZnJhbWUueCwgZnJhbWUueSxcclxuICAgICAgICAgICAgZnJhbWUudywgZnJhbWUuaCxcclxuICAgICAgICAgICAgZnJhbWUub2Zmc2V0eCwgZnJhbWUub2Zmc2V0eSxcclxuICAgICAgICAgICAgZnJhbWUudyAqIHNjYWxlLCBmcmFtZS5oICogc2NhbGUpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRGcmFtZSA9ICgpOiBUZXh0dXJlQXRsYXNGcmFtZSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50RnJhbWUgPiA5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXRsYXMuZnJhbWVzW3RoaXMuc2VxdWVuY2VOYW1lICsgXCJfXCIgKyB0aGlzLmN1cnJlbnRGcmFtZS50b1N0cmluZygpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXRsYXMuZnJhbWVzW3RoaXMuc2VxdWVuY2VOYW1lICsgXCJfXCIgKyBcIjBcIiArIHRoaXMuY3VycmVudEZyYW1lLnRvU3RyaW5nKCldO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9TcHJpdGVcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4vVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXNGcmFtZX0gZnJvbSBcIi4vVGV4dHVyZUF0bGFzRnJhbWVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRpY1Nwcml0ZSBleHRlbmRzIFNwcml0ZVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgaW1hZ2U6IFRleHR1cmVBdGxhc0ZyYW1lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIHByb3RlY3RlZCBhdGxhczogVGV4dHVyZUF0bGFzLCBwcm90ZWN0ZWQgaW1hZ2VOYW1lOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVmcmVzaEltYWdlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5hdGxhcy5mcmFtZXNbdGhpcy5pbWFnZU5hbWVdOyAvLyBnZXQgdGhlIGltYWdlIGZyb20gdGhlIGF0bGFzXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoT3JpZ2luKHRoaXMuaW1hZ2UudywgdGhpcy5pbWFnZS5oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5vcmlnaW5YLCB0aGlzLm9yaWdpblkpO1xyXG4gICAgICAgIGN0eC5yZWN0KHRoaXMuaW1hZ2UueCwgdGhpcy5pbWFnZS55LCB0aGlzLmltYWdlLncsIHRoaXMuaW1hZ2UuaCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmF0bGFzLmltYWdlLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLngsIHRoaXMuaW1hZ2UueSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS53LCB0aGlzLmltYWdlLmgsXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uub2Zmc2V0eCwgdGhpcy5pbWFnZS5vZmZzZXR5LFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLncgKiB0aGlzLnNjYWxlLCB0aGlzLmltYWdlLmggKiB0aGlzLnNjYWxlKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SlNPTkxvYWRlcn0gZnJvbSAnLi4vcmVzb3VyY2VzL0pTT05Mb2FkZXInXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gJy4uL3Jlc291cmNlcy9JbWFnZUxvYWRlcidcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXNGcmFtZX0gZnJvbSAnLi9UZXh0dXJlQXRsYXNGcmFtZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlQXRsYXNcclxue1xyXG4gICAgLy8gaHR0cDovL3d3dy50eXBlc2NyaXB0Z2FtZXMuY29tL1RleHR1cmVBdGxhcy5odG1sXHJcbiAgICBwdWJsaWMgZnJhbWVzOiB7IFtpbmRleDogc3RyaW5nXTogVGV4dHVyZUF0bGFzRnJhbWUgfSA9IHt9O1xyXG4gICAgcHVibGljIHRhTG9hZENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHB1YmxpYyBhdGxhc05hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGltYWdlRmlsZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGpzb25GaWxlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhdGxhc05hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmF0bGFzTmFtZSA9IGF0bGFzTmFtZTtcclxuICAgICAgICB0aGlzLmltYWdlRmlsZU5hbWUgPSBhdGxhc05hbWU7XHJcbiAgICAgICAgdGhpcy5qc29uRmlsZU5hbWUgPSBhdGxhc05hbWUucmVwbGFjZShcIi5wbmdcIiwgXCJcIikgKyBcIi5qc29uXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWQoKTogUHJvbWlzZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW1nUHJvbWlzZSA9IEltYWdlTG9hZGVyLmxvYWRJbWFnZSh0aGlzLmltYWdlRmlsZU5hbWUpLnRoZW4oKGltZykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlID0gaW1nO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiB1bmFibGUgdG8gbG9hZCAnICsgdGhpcy5pbWFnZUZpbGVOYW1lKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBqc29uUHJvbWlzZSA9IEpTT05Mb2FkZXIubG9hZEpTT05GaWxlKHRoaXMuanNvbkZpbGVOYW1lKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJhbWVzKGRhdGEpO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiB1bmFibGUgdG8gbG9hZCAnICsgdGhpcy5qc29uRmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2ltZ1Byb21pc2UsIGpzb25Qcm9taXNlXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXRsYXNOYW1lICsgJyBsb2FkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6ICcgKyB0aGlzLmF0bGFzTmFtZSArICcgZmFpbGVkIHRvIGxvYWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUZyYW1lcyhkYXRhOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGNvbnN0IG5hbWUgaW4gZGF0YS5mcmFtZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGVEYXRhID0gZGF0YS5mcmFtZXNbbmFtZV07XHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IG5ldyBUZXh0dXJlQXRsYXNGcmFtZShzcHJpdGVEYXRhLmZyYW1lLngsIHNwcml0ZURhdGEuZnJhbWUueSwgc3ByaXRlRGF0YS5mcmFtZS53LCBzcHJpdGVEYXRhLmZyYW1lLmgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZURhdGEuc3ByaXRlU291cmNlU2l6ZS54LCBzcHJpdGVEYXRhLnNwcml0ZVNvdXJjZVNpemUueSwgc3ByaXRlRGF0YS5mcmFtZUR1cmF0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZXNbbmFtZV0gPSBmcmFtZTtcclxuICAgICAgICB9XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmZyYW1lcykpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBUZXh0dXJlQXRsYXNGcmFtZVxyXG57XHJcbiAgICAvLyBodHRwOi8vd3d3LnR5cGVzY3JpcHRnYW1lcy5jb20vQW5pbWF0ZWRTcHJpdGVzLmh0bWxcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHc6IG51bWJlcjtcclxuICAgIGg6IG51bWJlcjtcclxuXHJcbiAgICBvZmZzZXR4OiBudW1iZXI7ICAgIC8vIGltYWdlIHdpbGwgYmUgb2Zmc2V0IGJ5IHRoZXNlIHZhbHVlcyBzbyBmcmFtZXMgbGluZSB1cCBpbiBhbmltYXRpb25cclxuICAgIG9mZnNldHk6IG51bWJlcjtcclxuXHJcbiAgICBmcmFtZUR1cmF0aW9uOiBudW1iZXI7ICAvLyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGlzIGZyYW1lIGxhc3RzXHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgdzogbnVtYmVyID0gMSwgaDogbnVtYmVyID0gMSwgb2Zmc2V0eDogbnVtYmVyID0gMCwgb2Zmc2V0eTogbnVtYmVyID0gMCwgZnJhbWVEdXJhdGlvbjogbnVtYmVyID0gMTAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHRoaXMuaCA9IGg7XHJcbiAgICAgICAgdGhpcy5vZmZzZXR4ID0gb2Zmc2V0eDtcclxuICAgICAgICB0aGlzLm9mZnNldHkgPSBvZmZzZXR5O1xyXG4gICAgICAgIHRoaXMuZnJhbWVEdXJhdGlvbiA9IGZyYW1lRHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==