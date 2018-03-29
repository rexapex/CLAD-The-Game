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
        this.touchDuration = 500;
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
            e.preventDefault();
            _this.touchTimer = setTimeout(function () { _this.onlongtouch(e); }, _this.touchDuration);
        };
        this.touchend = function (e) {
            e.preventDefault();
            if (_this.touchTimer != null) {
                clearTimeout(_this.touchTimer);
                _this.firePrimaryMouseDownEvent(e.touches[0].clientX, e.touches[0].clientY); // fire primary mouse click event
                _this.touchTimer = null;
            }
        };
        this.touchmove = function (e) {
            e.preventDefault();
            if (_this.touchTimer != null) {
                clearTimeout(_this.touchTimer);
                _this.firePrimaryMouseDownEvent(e.touches[0].clientX, e.touches[0].clientY); // fire primary mouse click event
                _this.touchTimer = null;
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
    itembtn.onmousedown = function (evt) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9Db250aW51ZURpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9Db252ZXJzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvRGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9jaGF0L09wdGlvbkRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9SZWNlaXZlSXRlbURpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL05hdk1lc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL1RyaWFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0ludGVyYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0xldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1JlY2VpdmVJdGVtSW50ZXJhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvSW52ZW50b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9pdGVtcy9JdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvSW1hZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9KU09OTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL0FuaW1hdGVkU3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL0ludGVyYWN0YWJsZVNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9OUENTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvTmF2U3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1BsYXllclNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvU3ByaXRlQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1N0YXRpY1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9UZXh0dXJlQXRsYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvVGV4dHVyZUF0bGFzRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQyxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRSxpQ0FBaUM7QUFDckc7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSx1Q0FBdUM7QUFDdkM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGNBQWM7QUFDZCxpQkFBaUI7QUFDakI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtDQUErQztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUcsWUFBWTtBQUNmLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQSxXQUFXO0FBQ1gsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsbUJBQW1CLGtDQUFrQztBQUNyRCxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxlQUFlLHVDQUF1QztBQUN0RDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0NBQWtDO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBCQUEwQjtBQUNqRDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNILGtCQUFrQix5QkFBeUIsS0FBSztBQUNoRDtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLHdCQUF3QjtBQUN4QixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCLHdCQUF3QjtBQUN4QixnQkFBZ0I7QUFDaEIsb0JBQW9CO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsMERBQTBELG9CQUFvQjtBQUM5RTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1AsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLENBQUM7Ozs7Ozs7Ozs7Ozs7QUNwUkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCLGNBQWM7QUFDZDtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLFVBQVU7QUFDVixDQUFDOzs7Ozs7Ozs7Ozs7O0FDaEJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDJDQUEyQztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDhEQUE4RCxVQUFVLEVBQUU7QUFDMUUsS0FBSztBQUNMO0FBQ0EsOERBQThELFNBQVMsRUFBRTtBQUN6RSxLQUFLO0FBQ0w7QUFDQSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7Ozs7QUNuQkg7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSwrQkFBK0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEVBQUU7Ozs7Ozs7Ozs7OztBQ1hIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0Qsd0JBQXdCO0FBQzVFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3pEQSwyRUFBK0I7QUFFL0I7SUFBb0Msa0NBQU07SUFFdEMsd0JBQVksSUFBWSxFQUFFLE9BQWUsRUFBWSxVQUFrQjtRQUF2RSxZQUVJLGtCQUFNLElBQUksRUFBRSxPQUFPLENBQUMsU0FDdkI7UUFIb0QsZ0JBQVUsR0FBVixVQUFVLENBQVE7O0lBR3ZFLENBQUM7SUFFTSx5Q0FBZ0IsR0FBdkIsVUFBd0IsR0FBbUI7UUFBM0MsaUJBc0JDO1FBcEJHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBUyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3ZDLHNCQUFzQjtZQUN0QixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztZQUUxQiw2Q0FBNkM7WUFDN0MsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUUzQiw4QkFBOEI7WUFDOUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNyQixHQUFHLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBRXJCLHlDQUF5QztZQUN6QyxHQUFHLENBQUMsT0FBTyxHQUFHLFVBQUMsSUFBSTtnQkFDZixPQUFPLENBQUMsS0FBSSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1lBQzdCLENBQUMsQ0FBQztRQUNOLENBQUMsQ0FBQyxDQUFDO0lBQ1AsQ0FBQztJQUNMLHFCQUFDO0FBQUQsQ0FBQyxDQTlCbUMsZUFBTSxHQThCekM7QUE5Qlksd0NBQWM7Ozs7Ozs7Ozs7Ozs7OztBQ0EzQiw2Q0FBNkM7QUFDN0M7SUFFSSxzQkFBb0IsV0FBbUI7UUFBbkIsZ0JBQVcsR0FBWCxXQUFXLENBQVE7SUFBRyxDQUFDO0lBRXBDLHFDQUFjLEdBQXJCO1FBQ0ksTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUM7SUFDNUIsQ0FBQztJQUNMLG1CQUFDO0FBQUQsQ0FBQztBQVBZLG9DQUFZOzs7Ozs7Ozs7Ozs7Ozs7QUNIekI7SUFFSSxnQkFBc0IsSUFBWSxFQUFZLE9BQWU7UUFBdkMsU0FBSSxHQUFKLElBQUksQ0FBUTtRQUFZLFlBQU8sR0FBUCxPQUFPLENBQVE7SUFBRyxDQUFDO0lBSTFELHdCQUFPLEdBQWQ7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztJQUNyQixDQUFDO0lBRU0sMkJBQVUsR0FBakI7UUFDSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7QUFicUIsd0JBQU07Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBNUIsMkVBQStCO0FBRS9CO0lBQWtDLGdDQUFNO0lBRXBDLHNCQUFZLElBQVksRUFBRSxPQUFlLEVBQVksT0FBaUM7UUFBdEYsWUFFSSxrQkFBTSxJQUFJLEVBQUUsT0FBTyxDQUFDLFNBQ3ZCO1FBSG9ELGFBQU8sR0FBUCxPQUFPLENBQTBCOztJQUd0RixDQUFDO0lBRU0sdUNBQWdCLEdBQXZCLFVBQXdCLEdBQW1CO1FBQTNDLGlCQXdCQztRQXRCRyxNQUFNLENBQUMsSUFBSSxPQUFPLENBQVMsVUFBQyxPQUFPLEVBQUUsTUFBTTtZQUN2QyxzQkFBc0I7WUFDdEIsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMxQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFFMUIsMEJBQTBCO1lBQzFCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7b0NBR2IsTUFBTTtnQkFDVixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2dCQUMzQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztnQkFDN0IsR0FBRyxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7Z0JBQ3ZCLEdBQUcsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUM7Z0JBRXJCLHVDQUF1QztnQkFDdkMsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFDLElBQUk7b0JBQ2YsT0FBTyxDQUFDLEtBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztnQkFDbEMsQ0FBQyxDQUFDO1lBQ04sQ0FBQztZQVhELHNDQUFzQztZQUN0QyxHQUFHLEVBQUMsSUFBSSxNQUFNLElBQUksS0FBSSxDQUFDLE9BQU8sQ0FBQzt3QkFBdkIsTUFBTTthQVViO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBQ0wsbUJBQUM7QUFBRCxDQUFDLENBaENpQyxlQUFNLEdBZ0N2QztBQWhDWSxvQ0FBWTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z6QixtR0FBK0M7QUFJL0M7SUFBdUMscUNBQWM7SUFFakQsMkJBQVksSUFBWSxFQUFFLE9BQWUsRUFBRSxVQUFrQixFQUFZLFNBQXNCLEVBQVksYUFBMEI7UUFBckksWUFFSSxrQkFBTSxJQUFJLEVBQUUsT0FBTyxFQUFFLFVBQVUsQ0FBQyxTQUNuQztRQUh3RSxlQUFTLEdBQVQsU0FBUyxDQUFhO1FBQVksbUJBQWEsR0FBYixhQUFhLENBQWE7O0lBR3JJLENBQUM7SUFFTSw0Q0FBZ0IsR0FBdkIsVUFBd0IsR0FBbUI7UUFBM0MsaUJBcURDO1FBbkRHLE1BQU0sQ0FBQyxJQUFJLE9BQU8sQ0FBUyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ3ZDLHNCQUFzQjtZQUN0QixJQUFJLEdBQUcsR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzdCLEdBQUcsQ0FBQyxTQUFTLEdBQUcsS0FBSSxDQUFDLElBQUksQ0FBQztZQUUxQiw2Q0FBNkM7WUFDN0MsSUFBSSxHQUFHLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUMzQyxHQUFHLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztZQUM3QixHQUFHLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztZQUUzQiwwQkFBMEI7WUFDMUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVyQixFQUFFLEVBQUMsS0FBSSxDQUFDLFNBQVMsSUFBSSxJQUFJLElBQUksS0FBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckQsSUFBSSxZQUFZLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDbkQsWUFBWSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUM7Z0JBQzVDLFlBQVksQ0FBQyxTQUFTLEdBQUcsVUFBVSxDQUFDO2dCQUNwQyxHQUFHLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUU5QixrQ0FBa0M7Z0JBQ2xDLEdBQUcsRUFBYSxVQUFjLEVBQWQsVUFBSSxDQUFDLFNBQVMsRUFBZCxjQUFjLEVBQWQsSUFBYztvQkFBMUIsSUFBSSxJQUFJO29CQUNSLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDOUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDeEI7WUFDTCxDQUFDO1lBRUQsRUFBRSxFQUFDLEtBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxJQUFJLEtBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELElBQUksZ0JBQWdCLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDdkQsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxlQUFlLENBQUMsQ0FBQztnQkFDaEQsZ0JBQWdCLENBQUMsU0FBUyxHQUFHLFlBQVksQ0FBQztnQkFDMUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO2dCQUVsQyxzQ0FBc0M7Z0JBQ3RDLEdBQUcsRUFBYSxVQUFrQixFQUFsQixVQUFJLENBQUMsYUFBYSxFQUFsQixjQUFrQixFQUFsQixJQUFrQjtvQkFBOUIsSUFBSSxJQUFJO29CQUNSLElBQUksR0FBRyxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLEdBQUcsQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO29CQUM3QixHQUFHLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxZQUFZLEVBQUUsQ0FBQztvQkFDOUIsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDeEI7WUFDTCxDQUFDO1lBRUQsR0FBRyxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVyQix5Q0FBeUM7WUFDekMsR0FBRyxDQUFDLE9BQU8sR0FBRyxVQUFDLElBQUk7Z0JBQ2YsT0FBTyxDQUFDLEtBQUksQ0FBQyxVQUFVLENBQUMsQ0FBQztZQUM3QixDQUFDLENBQUM7UUFDTixDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSx3Q0FBWSxHQUFuQjtRQUVJLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDO0lBQzFCLENBQUM7SUFFTSw0Q0FBZ0IsR0FBdkI7UUFFSSxNQUFNLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQztJQUM5QixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDLENBdkVzQywrQkFBYyxHQXVFcEQ7QUF2RVksOENBQWlCOzs7Ozs7Ozs7Ozs7Ozs7QUNKOUIsdUVBQThCO0FBRzlCO0lBUUksZ0JBQVksQ0FBUyxFQUFFLENBQVMsRUFBRSxNQUFjLEVBQUUsS0FBcUIsRUFBRSxVQUFzQjtRQUE3QyxxQ0FBcUI7UUFBRSwyQ0FBc0I7UUFOeEYsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxXQUFNLEdBQVcsRUFBRSxDQUFDO1FBQ3BCLGNBQVMsR0FBVyxDQUFDLENBQUM7UUFDdEIsVUFBSyxHQUFXLEtBQUssQ0FBQztRQUl6QixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7UUFDckIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLFNBQVMsR0FBRyxVQUFVLENBQUM7SUFDaEMsQ0FBQztJQUVNLHFCQUFJLEdBQVg7UUFFSSxhQUFHLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDWCxhQUFHLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDaEIsYUFBRyxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBQzdCLGFBQUcsQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMvQixhQUFHLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDO1FBQ3JELGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLGFBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0seUJBQVEsR0FBZixVQUFnQixDQUFTLEVBQUUsQ0FBUztRQUVoQyxNQUFNLENBQUMsQ0FBQyxVQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUksQ0FBQyxJQUFHLFVBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBSSxDQUFDLEVBQUMsSUFBSSxhQUFJLENBQUMsTUFBTSxFQUFJLENBQUMsRUFBQztJQUN2RSxDQUFDO0lBQ0wsYUFBQztBQUFELENBQUM7QUFoQ1ksd0JBQU07Ozs7Ozs7Ozs7Ozs7OztBQ0ZuQiw2RUFBNkI7QUFFN0IsMkZBQTJGO0FBQzNGO0lBVUksaUJBQVksSUFBcUI7UUFBakMsaUJBMERDO1FBRU0saUJBQVksR0FBRyxVQUFDLFFBQWdCLEVBQUUsUUFBZ0IsRUFBRSxPQUFlLEVBQUUsT0FBZTtZQUN2RixHQUFHLEVBQVksVUFBUyxFQUFULFVBQUksQ0FBQyxJQUFJLEVBQVQsY0FBUyxFQUFULElBQVM7Z0JBQXBCLElBQUksR0FBRztnQkFDUCx3Q0FBd0M7Z0JBQ3hDLEVBQUUsRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQyxDQUN0RSxDQUFDO29CQUNHLE1BQU0sQ0FBQyxDQUFDLElBQUksYUFBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxDQUFDO2FBQ0o7WUFDRCxHQUFHLEVBQVksVUFBUyxFQUFULFVBQUksQ0FBQyxJQUFJLEVBQVQsY0FBUyxFQUFULElBQVM7Z0JBQXBCLElBQUksR0FBRztnQkFDUCwyRkFBMkY7Z0JBQzNGLEVBQUUsRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUNsQyxDQUFDO29CQUNHLHFDQUFxQztvQkFDckMsSUFBTSxHQUFHLEdBQUcsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLGFBQUssQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLEVBQUUsSUFBSSxhQUFLLENBQUMsT0FBTyxFQUFFLE9BQU8sQ0FBQyxDQUFDLENBQUM7b0JBQ3RGLEVBQUUsRUFBQyxHQUFHLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQzt3QkFDYixJQUFJLEtBQUssR0FBaUIsRUFBRSxDQUFDO3dCQUM3QixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksYUFBSyxDQUFDLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUksc0NBQXNDO3dCQUNsRixLQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLFNBQVMsRUFBRSxLQUFLLENBQUMsQ0FBQzt3QkFDcEQsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFJLHVDQUF1Qzt3QkFDbkUsRUFBRSxFQUFDLEtBQUssQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDOzRCQUNoQixLQUFLLENBQUMsR0FBRyxFQUFFLENBQUM7d0JBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxHQUFHLEtBQUssQ0FBQyxDQUFDO3dCQUMvQixNQUFNLENBQUMsS0FBSyxDQUFDO29CQUNqQixDQUFDO29CQUNELEtBQUssQ0FBQztnQkFDVixDQUFDO2FBQ0o7WUFDRCxNQUFNLENBQUMsSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFRCxxR0FBcUc7UUFDN0YsZ0JBQVcsR0FBRyxVQUFDLEtBQW1CO1lBQ3RDLElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztZQUNkLDRDQUE0QztZQUM1QyxPQUFNLEtBQUssR0FBRyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDO2dCQUM3QixJQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDO2dCQUN0QixJQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztnQkFFMUIsOEZBQThGO2dCQUM5RixJQUFJLG1CQUFtQixHQUFZLEtBQUssQ0FBQztnQkFDekMsR0FBRyxFQUFvQixVQUFlLEVBQWYsVUFBSSxDQUFDLFVBQVUsRUFBZixjQUFlLEVBQWYsSUFBZTtvQkFBbEMsSUFBTSxTQUFTO29CQUVmLEVBQUUsRUFBQyxLQUFJLENBQUMsdUJBQXVCLENBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsS0FBSSxDQUFDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDOUYsdUlBQXVJO3dCQUN2SSxtQkFBbUIsR0FBRyxJQUFJLENBQUM7d0JBQzNCLEtBQUssQ0FBQztvQkFDVixDQUFDO2lCQUNKO2dCQUVELGtFQUFrRTtnQkFDbEUsRUFBRSxFQUFDLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxDQUFDO29CQUN0QixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssR0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7b0JBQ3pCLG9FQUFvRTtnQkFDeEUsQ0FBQztnQkFBQyxJQUFJLENBQUMsQ0FBQztvQkFDSixtQ0FBbUM7b0JBQ25DLEtBQUssRUFBRyxDQUFDO2dCQUNiLENBQUM7WUFDTCxDQUFDO1FBQ0wsQ0FBQztRQUVPLGVBQVUsR0FBRyxVQUFDLFFBQVksRUFBRSxNQUFhLEVBQUUsS0FBbUI7WUFDbEUsS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLGlDQUFpQztZQUNyRCxFQUFFLEVBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ3JDLEtBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLFFBQVEsQ0FBQyxNQUFNLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxJQUFJLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDdkUsQ0FBQztRQUNMLENBQUM7UUFFRCxtRUFBbUU7UUFDM0QsYUFBUSxHQUFHLFVBQUMsS0FBWSxFQUFFLEdBQVU7WUFDeEMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxFQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsUUFBUSxFQUFFLENBQUMsRUFBQyxDQUFDLENBQUMsQ0FBSSxzQkFBc0I7WUFDbEUsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO1lBRWhCLCtDQUErQztZQUMvQyxJQUFJLFFBQVEsQ0FBQztZQUNiLEdBQUcsRUFBYyxVQUFTLEVBQVQsVUFBSSxDQUFDLElBQUksRUFBVCxjQUFTLEVBQVQsSUFBUztnQkFBdEIsSUFBTSxHQUFHO2dCQUNULEVBQUUsRUFBQyxHQUFHLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDaEMsUUFBUSxHQUFHLEdBQUcsQ0FBQztvQkFDZixLQUFLLENBQUM7Z0JBQ1YsQ0FBQzthQUNKO1lBQ0QsRUFBRSxFQUFDLFFBQVEsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixNQUFNLENBQUMsSUFBSSxDQUFDO1lBQ2hCLENBQUM7WUFFRCw2Q0FBNkM7WUFDN0MsSUFBSSxNQUFNLENBQUM7WUFDWCxHQUFHLEVBQWMsVUFBUyxFQUFULFVBQUksQ0FBQyxJQUFJLEVBQVQsY0FBUyxFQUFULElBQVM7Z0JBQXRCLElBQU0sR0FBRztnQkFDVCxFQUFFLEVBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzVCLE1BQU0sR0FBRyxHQUFHLENBQUM7b0JBQ2IsS0FBSyxDQUFDO2dCQUNWLENBQUM7YUFDSjtZQUNELEVBQUUsRUFBQyxNQUFNLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEIsTUFBTSxDQUFDLElBQUksQ0FBQztZQUNoQixDQUFDO1lBRUQscURBQXFEO1lBQ3JELElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztZQUNYLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQztZQUNsQixDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1lBQ3hCLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUM7WUFFbEMsdUJBQXVCO1lBQ3ZCLHlGQUF5RjtZQUN6RixPQUFNLElBQUksQ0FBQyxNQUFNLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEVBQ3ZELENBQUM7Z0JBQ0csSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUUsMERBQTBEO2dCQUN2RixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNyQiw0REFBNEQ7Z0JBQzVELEdBQUcsRUFBb0IsVUFBZ0MsRUFBaEMsVUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQWhDLGNBQWdDLEVBQWhDLElBQWdDO29CQUFuRCxJQUFNLFNBQVM7b0JBRWYsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7b0JBQ2xGLHdFQUF3RTtvQkFDeEUsb0JBQW9CO29CQUNwQixFQUFFLEVBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxJQUFJLEdBQUcsQ0FBQyxDQUFDLFNBQVMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEYsSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUM5RCxDQUFDO29CQUNELHNCQUFzQjtvQkFDdEIsRUFBRSxFQUFDLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksSUFBSSxHQUFHLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RGLE1BQU0sQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztvQkFDbEUsQ0FBQztvQkFDRCx1Q0FBdUM7b0JBQ3ZDLEVBQUUsRUFBQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLEtBQUksQ0FBQyxtQkFBbUIsQ0FBQyxNQUFNLEVBQUUsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4RyxDQUFDLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDO3dCQUMvQixRQUFRLENBQUMsU0FBUyxDQUFDLFFBQVEsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDO3dCQUN6QyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUMsSUFBSSxFQUFFLFNBQVMsRUFBRSxRQUFRLEVBQUUsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLHdDQUF3Qzt3QkFDdEYsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDOzRCQUNYLE1BQU0sQ0FBQyxDQUFDLENBQUMsUUFBUSxHQUFHLENBQUMsQ0FBQyxRQUFRLENBQUM7d0JBQ25DLENBQUMsQ0FBQyxDQUFDO29CQUNQLENBQUM7aUJBQ0o7WUFDTCxDQUFDO1lBRUQsK0VBQStFO1lBQy9FLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxFQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQztRQUNsRixDQUFDO1FBRU0sU0FBSSxHQUFHO1lBQ1YsR0FBRyxFQUFZLFVBQVMsRUFBVCxVQUFJLENBQUMsSUFBSSxFQUFULGNBQVMsRUFBVCxJQUFTO2dCQUFwQixJQUFJLEdBQUc7Z0JBQ1AsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO2FBQ2Q7UUFDTCxDQUFDO1FBRUQsMkRBQTJEO1FBQ25ELGdCQUFXLEdBQUcsVUFBQyxFQUFTLEVBQUUsRUFBUztZQUN2QyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFJLENBQUMsSUFBRyxVQUFDLEVBQUUsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFJLENBQUMsRUFBQyxDQUFDO1FBQzlELENBQUM7UUFFRCwrREFBK0Q7UUFDdkQsa0JBQWEsR0FBRyxVQUFDLENBQVE7WUFDN0IsSUFBSSxVQUFVLEdBQWlCLEVBQUUsQ0FBQztZQUNsQyxHQUFHLEVBQWUsVUFBVSxFQUFWLFVBQUksQ0FBQyxLQUFLLEVBQVYsY0FBVSxFQUFWLElBQVU7Z0JBQXhCLElBQU0sSUFBSTtnQkFFVixFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDbEMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2dCQUFDLElBQUksQ0FBQyxFQUFFLEVBQUMsS0FBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDekMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxDQUFDO2FBQ0o7WUFFRCxnRkFBZ0Y7WUFDaEYsRUFBRSxFQUFDLFVBQVUsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsR0FBRyxFQUFjLFVBQVMsRUFBVCxVQUFJLENBQUMsSUFBSSxFQUFULGNBQVMsRUFBVCxJQUFTO29CQUF0QixJQUFNLEdBQUc7b0JBQ1QsRUFBRSxFQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixVQUFVLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQzt3QkFDNUIsVUFBVSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7d0JBQzVCLFVBQVUsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO3dCQUM1QixLQUFLLENBQUM7b0JBQ1YsQ0FBQztpQkFDSjtZQUNMLENBQUM7WUFDRCxNQUFNLENBQUMsVUFBVSxDQUFDO1FBQ3RCLENBQUM7UUFFRCxnSEFBZ0g7UUFDeEcsNEJBQXVCLEdBQUcsVUFBQyxJQUFXLEVBQUUsSUFBVyxFQUFFLElBQVcsRUFBRSxJQUFXO1lBQ2pGLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUVwQixJQUFJLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQztZQUMzQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUNuQixJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQztZQUVuQixJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDVCxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsR0FBRyxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUM7WUFDbEYsQ0FBQyxHQUFHLENBQUUsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztZQUVsRixFQUFFLEVBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUN4QyxDQUFDO2dCQUNHLDhHQUE4RztnQkFDOUcsSUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBTSxHQUFHLEdBQUcsQ0FBQyxJQUFJLEdBQUcsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsSUFBSSxHQUFHLEtBQUssSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3BLLENBQUM7WUFFRCw4QkFBOEI7WUFDOUIsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLGVBQWU7UUFDakMsQ0FBQztRQUVELEVBQUU7UUFDTSxpQkFBWSxHQUFHLFVBQUMsTUFBYSxFQUFFLE1BQWE7WUFDbkQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxDQUFDLENBQUM7UUFDbEQsQ0FBQztRQUVPLHdCQUFtQixHQUFHLFVBQUMsUUFBZ0QsRUFBRSxDQUFRO1lBQ3JGLEVBQUUsRUFBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDWCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osR0FBRyxFQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsUUFBUSxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUcsRUFBRSxDQUFDO29CQUNuRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDO29CQUNwQyxFQUFFLEVBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO1FBRU8sa0JBQWEsR0FBRyxVQUFDLFFBQXNCLEVBQUUsQ0FBUTtZQUNyRCxFQUFFLEVBQUMsQ0FBQyxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ1gsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLEdBQUcsRUFBQyxJQUFJLEtBQUssR0FBRyxDQUFDLEVBQUUsS0FBSyxHQUFHLFFBQVEsQ0FBQyxNQUFNLEVBQUUsS0FBSyxFQUFHLEVBQUUsQ0FBQztvQkFDbkQsSUFBTSxNQUFNLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMvQixFQUFFLEVBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxJQUFJLE1BQU0sQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO1FBRU8sZ0JBQVcsR0FBRyxVQUFDLEtBQXNDLEVBQUUsSUFBOEI7WUFDekYsRUFBRSxFQUFDLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLEVBQUUsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNwRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZCxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osR0FBRyxFQUFDLElBQUksS0FBSyxHQUFHLENBQUMsRUFBRSxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLEVBQUcsRUFBRSxDQUFDO29CQUNoRCxJQUFNLENBQUMsR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3ZCLEVBQUUsRUFBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUMsRUFBRSxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xGLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2pCLENBQUM7Z0JBQ0wsQ0FBQztZQUNMLENBQUM7WUFFRCxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO1FBMVRHLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQztRQUNuQixJQUFJLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNoQixJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVyQixxQ0FBcUM7UUFDckMsR0FBRyxFQUFjLFVBQUksRUFBSixhQUFJLEVBQUosa0JBQUksRUFBSixJQUFJO1lBQWpCLElBQU0sR0FBRztZQUNULElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxJQUFJLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBRTVELG1EQUFtRDtZQUNuRCxFQUFFLEVBQUMsT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDaEIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUMvQixPQUFPLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUM1RCxDQUFDO1lBQ0QsbURBQW1EO1lBQ25ELEVBQUUsRUFBQyxPQUFPLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNoQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7Z0JBQy9CLE9BQU8sR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxRQUFRLEVBQUUsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzVELENBQUM7WUFDRCxtREFBbUQ7WUFDbkQsRUFBRSxFQUFDLE9BQU8sS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFDL0IsT0FBTyxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7WUFDNUQsQ0FBQztZQUVELCtDQUErQztZQUMvQyxJQUFNLEtBQUssR0FBRyxFQUFDLEVBQUUsRUFBRSxPQUFPLEVBQUUsRUFBRSxFQUFFLE9BQU8sRUFBQyxDQUFDO1lBQ3pDLElBQU0sS0FBSyxHQUFHLEVBQUMsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEVBQUUsT0FBTyxFQUFDLENBQUM7WUFDekMsSUFBTSxLQUFLLEdBQUcsRUFBQyxFQUFFLEVBQUUsT0FBTyxFQUFFLEVBQUUsRUFBRSxPQUFPLEVBQUMsQ0FBQztZQUV6QyxvREFBb0Q7WUFDcEQsRUFBRSxFQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUN2QixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNoQyxDQUFDO1lBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQ0osSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxFQUFFLEtBQUssQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQ3hFLENBQUM7WUFFRCxFQUFFLEVBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDNUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2hDLENBQUM7WUFBQyxJQUFJLENBQUMsQ0FBQztnQkFDSixJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxVQUFVLEVBQUUsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDeEUsQ0FBQztZQUVELEVBQUUsRUFBQyxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM1QyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDdkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDaEMsQ0FBQztZQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNKLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUN4RSxDQUFDO1NBQ0o7UUFDRCw2QkFBNkI7UUFDN0IsMEJBQTBCO1FBQzFCLCtCQUErQjtJQUNuQyxDQUFDO0lBa1FMLGNBQUM7QUFBRCxDQUFDO0FBdFVZLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7QUNKcEI7SUFLSSxlQUFZLENBQWEsRUFBRSxDQUFhO1FBQTVCLHlCQUFhO1FBQUUseUJBQWE7UUFBeEMsaUJBSUM7UUFQTSxNQUFDLEdBQVcsQ0FBQyxDQUFDO1FBQ2QsTUFBQyxHQUFXLENBQUMsQ0FBQztRQVFkLFdBQU0sR0FBRyxVQUFDLENBQVE7WUFDckIsTUFBTSxDQUFDLENBQUMsSUFBSSxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxLQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssS0FBSSxDQUFDLENBQUMsQ0FBQztRQUN6RCxDQUFDO1FBRU0sYUFBUSxHQUFHO1lBQ2QsTUFBTSxDQUFDLFdBQVMsS0FBSSxDQUFDLENBQUMsU0FBSSxLQUFJLENBQUMsQ0FBQyxNQUFHLENBQUM7UUFDeEMsQ0FBQztRQVZHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDZixDQUFDO0lBU0wsWUFBQztBQUFELENBQUM7QUFsQlksc0JBQUs7Ozs7Ozs7Ozs7Ozs7OztBQ0FsQix1RUFBOEI7QUFHOUI7SUFTSSxtQkFBWSxDQUFTLEVBQUUsQ0FBUyxFQUFFLEtBQWEsRUFBRSxNQUFjLEVBQUUsS0FBcUIsRUFBRSxVQUFzQjtRQUE3QyxxQ0FBcUI7UUFBRSwyQ0FBc0I7UUFQdkcsTUFBQyxHQUFXLENBQUMsQ0FBQztRQUNkLE1BQUMsR0FBVyxDQUFDLENBQUM7UUFDZCxjQUFTLEdBQVcsQ0FBQyxDQUFDO1FBQ3RCLFVBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsV0FBTSxHQUFXLENBQUMsQ0FBQztRQUNuQixVQUFLLEdBQVcsTUFBTSxDQUFDO1FBSTFCLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUNyQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsU0FBUyxHQUFHLFVBQVUsQ0FBQztJQUNoQyxDQUFDO0lBRU0sd0JBQUksR0FBWDtRQUVJLGFBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUNYLGFBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztRQUNoQixhQUFHLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDN0IsYUFBRyxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQy9CLGFBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xELGFBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNiLGFBQUcsQ0FBQyxPQUFPLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRU0sNEJBQVEsR0FBZixVQUFnQixDQUFTLEVBQUUsQ0FBUztRQUVoQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxJQUFJLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUNqRyxDQUFDO0lBQ0wsZ0JBQUM7QUFBRCxDQUFDO0FBbENZLDhCQUFTOzs7Ozs7Ozs7Ozs7Ozs7QUNIdEIsdUVBQThCO0FBRTlCLDZFQUE2QjtBQUU3QjtJQVFJLGtCQUFZLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVSxFQUFFLEVBQVUsRUFBRSxFQUFVLEVBQUUsRUFBVTtRQUFsRixpQkFPQztRQUVNLFNBQUksR0FBRztZQUNWLGFBQUcsQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNYLGFBQUcsQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDO1lBQ3hCLGFBQUcsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDO1lBQ2xCLGFBQUcsQ0FBQyxTQUFTLEVBQUUsQ0FBQztZQUNoQixhQUFHLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsYUFBRyxDQUFDLE1BQU0sQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pDLGFBQUcsQ0FBQyxNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QyxhQUFHLENBQUMsTUFBTSxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekMsYUFBRyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2IsYUFBRyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFFRCwyREFBMkQ7UUFDcEQsYUFBUSxHQUFHLFVBQUMsQ0FBUTtZQUN2QixNQUFNLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLElBQUksS0FBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkYsQ0FBQztRQUVELHlDQUF5QztRQUNsQyxhQUFRLEdBQUcsVUFBQyxDQUFTLEVBQUUsQ0FBUztZQUNuQyxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEssSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsS0FBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDO1lBQ2hLLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLEdBQUcsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFJLENBQUMsUUFBUSxDQUFDLElBQUksYUFBSyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDdkcsQ0FBQztRQTlCRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksYUFBSyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsSUFBSSxHQUFHLENBQUMsR0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENB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LHlCQUFhO1FBQUUscUNBQW1CO1FBQUUscUNBQW1CO1FBQUUsbURBQTJCO1FBRXpJLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQ1gsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sR0FBRyxPQUFPLENBQUM7UUFDdkIsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7SUFDdkMsQ0FBQztJQUVNLCtCQUFHLEdBQVYsVUFBVyxDQUFTLEVBQUUsQ0FBUztRQUUzQixJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ2YsQ0FBQztJQUNMLHdCQUFDO0FBQUQsQ0FBQztBQTdCWSw4Q0FBaUIiLCJmaWxlIjoiYnVpbGQvY2xhZC5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJyZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5vYmplY3QudG8tc3RyaW5nJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3InKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYucHJvbWlzZScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5Jyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLnRyeScpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuLi9tb2R1bGVzL19jb3JlJykuUHJvbWlzZTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICh0eXBlb2YgaXQgIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYSBmdW5jdGlvbiEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIDIyLjEuMy4zMSBBcnJheS5wcm90b3R5cGVbQEB1bnNjb3BhYmxlc11cbnZhciBVTlNDT1BBQkxFUyA9IHJlcXVpcmUoJy4vX3drcycpKCd1bnNjb3BhYmxlcycpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5pZiAoQXJyYXlQcm90b1tVTlNDT1BBQkxFU10gPT0gdW5kZWZpbmVkKSByZXF1aXJlKCcuL19oaWRlJykoQXJyYXlQcm90bywgVU5TQ09QQUJMRVMsIHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICBBcnJheVByb3RvW1VOU0NPUEFCTEVTXVtrZXldID0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgQ29uc3RydWN0b3IsIG5hbWUsIGZvcmJpZGRlbkZpZWxkKSB7XG4gIGlmICghKGl0IGluc3RhbmNlb2YgQ29uc3RydWN0b3IpIHx8IChmb3JiaWRkZW5GaWVsZCAhPT0gdW5kZWZpbmVkICYmIGZvcmJpZGRlbkZpZWxkIGluIGl0KSkge1xuICAgIHRocm93IFR5cGVFcnJvcihuYW1lICsgJzogaW5jb3JyZWN0IGludm9jYXRpb24hJyk7XG4gIH0gcmV0dXJuIGl0O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGFuIG9iamVjdCEnKTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIGZhbHNlIC0+IEFycmF5I2luZGV4T2Zcbi8vIHRydWUgIC0+IEFycmF5I2luY2x1ZGVzXG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgdG9BYnNvbHV0ZUluZGV4ID0gcmVxdWlyZSgnLi9fdG8tYWJzb2x1dGUtaW5kZXgnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKElTX0lOQ0xVREVTKSB7XG4gIHJldHVybiBmdW5jdGlvbiAoJHRoaXMsIGVsLCBmcm9tSW5kZXgpIHtcbiAgICB2YXIgTyA9IHRvSU9iamVjdCgkdGhpcyk7XG4gICAgdmFyIGxlbmd0aCA9IHRvTGVuZ3RoKE8ubGVuZ3RoKTtcbiAgICB2YXIgaW5kZXggPSB0b0Fic29sdXRlSW5kZXgoZnJvbUluZGV4LCBsZW5ndGgpO1xuICAgIHZhciB2YWx1ZTtcbiAgICAvLyBBcnJheSNpbmNsdWRlcyB1c2VzIFNhbWVWYWx1ZVplcm8gZXF1YWxpdHkgYWxnb3JpdGhtXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIGlmIChJU19JTkNMVURFUyAmJiBlbCAhPSBlbCkgd2hpbGUgKGxlbmd0aCA+IGluZGV4KSB7XG4gICAgICB2YWx1ZSA9IE9baW5kZXgrK107XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgICBpZiAodmFsdWUgIT0gdmFsdWUpIHJldHVybiB0cnVlO1xuICAgIC8vIEFycmF5I2luZGV4T2YgaWdub3JlcyBob2xlcywgQXJyYXkjaW5jbHVkZXMgLSBub3RcbiAgICB9IGVsc2UgZm9yICg7bGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIGlmIChJU19JTkNMVURFUyB8fCBpbmRleCBpbiBPKSB7XG4gICAgICBpZiAoT1tpbmRleF0gPT09IGVsKSByZXR1cm4gSVNfSU5DTFVERVMgfHwgaW5kZXggfHwgMDtcbiAgICB9IHJldHVybiAhSVNfSU5DTFVERVMgJiYgLTE7XG4gIH07XG59O1xuIiwiLy8gZ2V0dGluZyB0YWcgZnJvbSAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcbi8vIEVTMyB3cm9uZyBoZXJlXG52YXIgQVJHID0gY29mKGZ1bmN0aW9uICgpIHsgcmV0dXJuIGFyZ3VtZW50czsgfSgpKSA9PSAnQXJndW1lbnRzJztcblxuLy8gZmFsbGJhY2sgZm9yIElFMTEgU2NyaXB0IEFjY2VzcyBEZW5pZWQgZXJyb3JcbnZhciB0cnlHZXQgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICB0cnkge1xuICAgIHJldHVybiBpdFtrZXldO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciBPLCBULCBCO1xuICByZXR1cm4gaXQgPT09IHVuZGVmaW5lZCA/ICdVbmRlZmluZWQnIDogaXQgPT09IG51bGwgPyAnTnVsbCdcbiAgICAvLyBAQHRvU3RyaW5nVGFnIGNhc2VcbiAgICA6IHR5cGVvZiAoVCA9IHRyeUdldChPID0gT2JqZWN0KGl0KSwgVEFHKSkgPT0gJ3N0cmluZycgPyBUXG4gICAgLy8gYnVpbHRpblRhZyBjYXNlXG4gICAgOiBBUkcgPyBjb2YoTylcbiAgICAvLyBFUzMgYXJndW1lbnRzIGZhbGxiYWNrXG4gICAgOiAoQiA9IGNvZihPKSkgPT0gJ09iamVjdCcgJiYgdHlwZW9mIE8uY2FsbGVlID09ICdmdW5jdGlvbicgPyAnQXJndW1lbnRzJyA6IEI7XG59O1xuIiwidmFyIHRvU3RyaW5nID0ge30udG9TdHJpbmc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0b1N0cmluZy5jYWxsKGl0KS5zbGljZSg4LCAtMSk7XG59O1xuIiwidmFyIGNvcmUgPSBtb2R1bGUuZXhwb3J0cyA9IHsgdmVyc2lvbjogJzIuNS40JyB9O1xuaWYgKHR5cGVvZiBfX2UgPT0gJ251bWJlcicpIF9fZSA9IGNvcmU7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsIi8vIG9wdGlvbmFsIC8gc2ltcGxlIGNvbnRleHQgYmluZGluZ1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCB0aGF0LCBsZW5ndGgpIHtcbiAgYUZ1bmN0aW9uKGZuKTtcbiAgaWYgKHRoYXQgPT09IHVuZGVmaW5lZCkgcmV0dXJuIGZuO1xuICBzd2l0Y2ggKGxlbmd0aCkge1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uIChhKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhKTtcbiAgICB9O1xuICAgIGNhc2UgMjogcmV0dXJuIGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiKTtcbiAgICB9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uIChhLCBiLCBjKSB7XG4gICAgICByZXR1cm4gZm4uY2FsbCh0aGF0LCBhLCBiLCBjKTtcbiAgICB9O1xuICB9XG4gIHJldHVybiBmdW5jdGlvbiAoLyogLi4uYXJncyAqLykge1xuICAgIHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8vIDcuMi4xIFJlcXVpcmVPYmplY3RDb2VyY2libGUoYXJndW1lbnQpXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjYWxsIG1ldGhvZCBvbiAgXCIgKyBpdCk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBUaGFuaydzIElFOCBmb3IgaGlzIGZ1bm55IGRlZmluZVByb3BlcnR5XG5tb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh7fSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG4vLyB0eXBlb2YgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCBpcyAnb2JqZWN0JyBpbiBvbGQgSUVcbnZhciBpcyA9IGlzT2JqZWN0KGRvY3VtZW50KSAmJiBpc09iamVjdChkb2N1bWVudC5jcmVhdGVFbGVtZW50KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpcyA/IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoaXQpIDoge307XG59O1xuIiwiLy8gSUUgOC0gZG9uJ3QgZW51bSBidWcga2V5c1xubW9kdWxlLmV4cG9ydHMgPSAoXG4gICdjb25zdHJ1Y3RvcixoYXNPd25Qcm9wZXJ0eSxpc1Byb3RvdHlwZU9mLHByb3BlcnR5SXNFbnVtZXJhYmxlLHRvTG9jYWxlU3RyaW5nLHRvU3RyaW5nLHZhbHVlT2YnXG4pLnNwbGl0KCcsJyk7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxudmFyICRleHBvcnQgPSBmdW5jdGlvbiAodHlwZSwgbmFtZSwgc291cmNlKSB7XG4gIHZhciBJU19GT1JDRUQgPSB0eXBlICYgJGV4cG9ydC5GO1xuICB2YXIgSVNfR0xPQkFMID0gdHlwZSAmICRleHBvcnQuRztcbiAgdmFyIElTX1NUQVRJQyA9IHR5cGUgJiAkZXhwb3J0LlM7XG4gIHZhciBJU19QUk9UTyA9IHR5cGUgJiAkZXhwb3J0LlA7XG4gIHZhciBJU19CSU5EID0gdHlwZSAmICRleHBvcnQuQjtcbiAgdmFyIHRhcmdldCA9IElTX0dMT0JBTCA/IGdsb2JhbCA6IElTX1NUQVRJQyA/IGdsb2JhbFtuYW1lXSB8fCAoZ2xvYmFsW25hbWVdID0ge30pIDogKGdsb2JhbFtuYW1lXSB8fCB7fSlbUFJPVE9UWVBFXTtcbiAgdmFyIGV4cG9ydHMgPSBJU19HTE9CQUwgPyBjb3JlIDogY29yZVtuYW1lXSB8fCAoY29yZVtuYW1lXSA9IHt9KTtcbiAgdmFyIGV4cFByb3RvID0gZXhwb3J0c1tQUk9UT1RZUEVdIHx8IChleHBvcnRzW1BST1RPVFlQRV0gPSB7fSk7XG4gIHZhciBrZXksIG93biwgb3V0LCBleHA7XG4gIGlmIChJU19HTE9CQUwpIHNvdXJjZSA9IG5hbWU7XG4gIGZvciAoa2V5IGluIHNvdXJjZSkge1xuICAgIC8vIGNvbnRhaW5zIGluIG5hdGl2ZVxuICAgIG93biA9ICFJU19GT1JDRUQgJiYgdGFyZ2V0ICYmIHRhcmdldFtrZXldICE9PSB1bmRlZmluZWQ7XG4gICAgLy8gZXhwb3J0IG5hdGl2ZSBvciBwYXNzZWRcbiAgICBvdXQgPSAob3duID8gdGFyZ2V0IDogc291cmNlKVtrZXldO1xuICAgIC8vIGJpbmQgdGltZXJzIHRvIGdsb2JhbCBmb3IgY2FsbCBmcm9tIGV4cG9ydCBjb250ZXh0XG4gICAgZXhwID0gSVNfQklORCAmJiBvd24gPyBjdHgob3V0LCBnbG9iYWwpIDogSVNfUFJPVE8gJiYgdHlwZW9mIG91dCA9PSAnZnVuY3Rpb24nID8gY3R4KEZ1bmN0aW9uLmNhbGwsIG91dCkgOiBvdXQ7XG4gICAgLy8gZXh0ZW5kIGdsb2JhbFxuICAgIGlmICh0YXJnZXQpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBvdXQsIHR5cGUgJiAkZXhwb3J0LlUpO1xuICAgIC8vIGV4cG9ydFxuICAgIGlmIChleHBvcnRzW2tleV0gIT0gb3V0KSBoaWRlKGV4cG9ydHMsIGtleSwgZXhwKTtcbiAgICBpZiAoSVNfUFJPVE8gJiYgZXhwUHJvdG9ba2V5XSAhPSBvdXQpIGV4cFByb3RvW2tleV0gPSBvdXQ7XG4gIH1cbn07XG5nbG9iYWwuY29yZSA9IGNvcmU7XG4vLyB0eXBlIGJpdG1hcFxuJGV4cG9ydC5GID0gMTsgICAvLyBmb3JjZWRcbiRleHBvcnQuRyA9IDI7ICAgLy8gZ2xvYmFsXG4kZXhwb3J0LlMgPSA0OyAgIC8vIHN0YXRpY1xuJGV4cG9ydC5QID0gODsgICAvLyBwcm90b1xuJGV4cG9ydC5CID0gMTY7ICAvLyBiaW5kXG4kZXhwb3J0LlcgPSAzMjsgIC8vIHdyYXBcbiRleHBvcnQuVSA9IDY0OyAgLy8gc2FmZVxuJGV4cG9ydC5SID0gMTI4OyAvLyByZWFsIHByb3RvIG1ldGhvZCBmb3IgYGxpYnJhcnlgXG5tb2R1bGUuZXhwb3J0cyA9ICRleHBvcnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuICEhZXhlYygpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2FsbCA9IHJlcXVpcmUoJy4vX2l0ZXItY2FsbCcpO1xudmFyIGlzQXJyYXlJdGVyID0gcmVxdWlyZSgnLi9faXMtYXJyYXktaXRlcicpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciBnZXRJdGVyRm4gPSByZXF1aXJlKCcuL2NvcmUuZ2V0LWl0ZXJhdG9yLW1ldGhvZCcpO1xudmFyIEJSRUFLID0ge307XG52YXIgUkVUVVJOID0ge307XG52YXIgZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhYmxlLCBlbnRyaWVzLCBmbiwgdGhhdCwgSVRFUkFUT1IpIHtcbiAgdmFyIGl0ZXJGbiA9IElURVJBVE9SID8gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcmFibGU7IH0gOiBnZXRJdGVyRm4oaXRlcmFibGUpO1xuICB2YXIgZiA9IGN0eChmbiwgdGhhdCwgZW50cmllcyA/IDIgOiAxKTtcbiAgdmFyIGluZGV4ID0gMDtcbiAgdmFyIGxlbmd0aCwgc3RlcCwgaXRlcmF0b3IsIHJlc3VsdDtcbiAgaWYgKHR5cGVvZiBpdGVyRm4gIT0gJ2Z1bmN0aW9uJykgdGhyb3cgVHlwZUVycm9yKGl0ZXJhYmxlICsgJyBpcyBub3QgaXRlcmFibGUhJyk7XG4gIC8vIGZhc3QgY2FzZSBmb3IgYXJyYXlzIHdpdGggZGVmYXVsdCBpdGVyYXRvclxuICBpZiAoaXNBcnJheUl0ZXIoaXRlckZuKSkgZm9yIChsZW5ndGggPSB0b0xlbmd0aChpdGVyYWJsZS5sZW5ndGgpOyBsZW5ndGggPiBpbmRleDsgaW5kZXgrKykge1xuICAgIHJlc3VsdCA9IGVudHJpZXMgPyBmKGFuT2JqZWN0KHN0ZXAgPSBpdGVyYWJsZVtpbmRleF0pWzBdLCBzdGVwWzFdKSA6IGYoaXRlcmFibGVbaW5kZXhdKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfSBlbHNlIGZvciAoaXRlcmF0b3IgPSBpdGVyRm4uY2FsbChpdGVyYWJsZSk7ICEoc3RlcCA9IGl0ZXJhdG9yLm5leHQoKSkuZG9uZTspIHtcbiAgICByZXN1bHQgPSBjYWxsKGl0ZXJhdG9yLCBmLCBzdGVwLnZhbHVlLCBlbnRyaWVzKTtcbiAgICBpZiAocmVzdWx0ID09PSBCUkVBSyB8fCByZXN1bHQgPT09IFJFVFVSTikgcmV0dXJuIHJlc3VsdDtcbiAgfVxufTtcbmV4cG9ydHMuQlJFQUsgPSBCUkVBSztcbmV4cG9ydHMuUkVUVVJOID0gUkVUVVJOO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzg2I2lzc3VlY29tbWVudC0xMTU3NTkwMjhcbnZhciBnbG9iYWwgPSBtb2R1bGUuZXhwb3J0cyA9IHR5cGVvZiB3aW5kb3cgIT0gJ3VuZGVmaW5lZCcgJiYgd2luZG93Lk1hdGggPT0gTWF0aFxuICA/IHdpbmRvdyA6IHR5cGVvZiBzZWxmICE9ICd1bmRlZmluZWQnICYmIHNlbGYuTWF0aCA9PSBNYXRoID8gc2VsZlxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgOiBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuaWYgKHR5cGVvZiBfX2cgPT0gJ251bWJlcicpIF9fZyA9IGdsb2JhbDsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwidmFyIGhhc093blByb3BlcnR5ID0ge30uaGFzT3duUHJvcGVydHk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHJldHVybiBoYXNPd25Qcm9wZXJ0eS5jYWxsKGl0LCBrZXkpO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGNyZWF0ZURlc2MgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIHJldHVybiBkUC5mKG9iamVjdCwga2V5LCBjcmVhdGVEZXNjKDEsIHZhbHVlKSk7XG59IDogZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICBvYmplY3Rba2V5XSA9IHZhbHVlO1xuICByZXR1cm4gb2JqZWN0O1xufTtcbiIsInZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xubW9kdWxlLmV4cG9ydHMgPSBkb2N1bWVudCAmJiBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQ7XG4iLCJtb2R1bGUuZXhwb3J0cyA9ICFyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmICFyZXF1aXJlKCcuL19mYWlscycpKGZ1bmN0aW9uICgpIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2RpdicpLCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwiLy8gZmFzdCBhcHBseSwgaHR0cDovL2pzcGVyZi5sbmtpdC5jb20vZmFzdC1hcHBseS81XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgYXJncywgdGhhdCkge1xuICB2YXIgdW4gPSB0aGF0ID09PSB1bmRlZmluZWQ7XG4gIHN3aXRjaCAoYXJncy5sZW5ndGgpIHtcbiAgICBjYXNlIDA6IHJldHVybiB1biA/IGZuKClcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCk7XG4gICAgY2FzZSAxOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdKTtcbiAgICBjYXNlIDI6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0pO1xuICAgIGNhc2UgMzogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSk7XG4gICAgY2FzZSA0OiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdKTtcbiAgfSByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJncyk7XG59O1xuIiwiLy8gZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBhbmQgbm9uLWVudW1lcmFibGUgb2xkIFY4IHN0cmluZ3NcbnZhciBjb2YgPSByZXF1aXJlKCcuL19jb2YnKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0KCd6JykucHJvcGVydHlJc0VudW1lcmFibGUoMCkgPyBPYmplY3QgOiBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGNvZihpdCkgPT0gJ1N0cmluZycgPyBpdC5zcGxpdCgnJykgOiBPYmplY3QoaXQpO1xufTtcbiIsIi8vIGNoZWNrIG9uIGRlZmF1bHQgQXJyYXkgaXRlcmF0b3JcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEFycmF5UHJvdG8gPSBBcnJheS5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCAhPT0gdW5kZWZpbmVkICYmIChJdGVyYXRvcnMuQXJyYXkgPT09IGl0IHx8IEFycmF5UHJvdG9bSVRFUkFUT1JdID09PSBpdCk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpdCA9PT0gJ29iamVjdCcgPyBpdCAhPT0gbnVsbCA6IHR5cGVvZiBpdCA9PT0gJ2Z1bmN0aW9uJztcbn07XG4iLCIvLyBjYWxsIHNvbWV0aGluZyBvbiBpdGVyYXRvciBzdGVwIHdpdGggc2FmZSBjbG9zaW5nIG9uIGVycm9yXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZXJhdG9yLCBmbiwgdmFsdWUsIGVudHJpZXMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gZW50cmllcyA/IGZuKGFuT2JqZWN0KHZhbHVlKVswXSwgdmFsdWVbMV0pIDogZm4odmFsdWUpO1xuICAvLyA3LjQuNiBJdGVyYXRvckNsb3NlKGl0ZXJhdG9yLCBjb21wbGV0aW9uKVxuICB9IGNhdGNoIChlKSB7XG4gICAgdmFyIHJldCA9IGl0ZXJhdG9yWydyZXR1cm4nXTtcbiAgICBpZiAocmV0ICE9PSB1bmRlZmluZWQpIGFuT2JqZWN0KHJldC5jYWxsKGl0ZXJhdG9yKSk7XG4gICAgdGhyb3cgZTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBjcmVhdGUgPSByZXF1aXJlKCcuL19vYmplY3QtY3JlYXRlJyk7XG52YXIgZGVzY3JpcHRvciA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgSXRlcmF0b3JQcm90b3R5cGUgPSB7fTtcblxuLy8gMjUuMS4yLjEuMSAlSXRlcmF0b3JQcm90b3R5cGUlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2hpZGUnKShJdGVyYXRvclByb3RvdHlwZSwgcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyksIGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0pO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCkge1xuICBDb25zdHJ1Y3Rvci5wcm90b3R5cGUgPSBjcmVhdGUoSXRlcmF0b3JQcm90b3R5cGUsIHsgbmV4dDogZGVzY3JpcHRvcigxLCBuZXh0KSB9KTtcbiAgc2V0VG9TdHJpbmdUYWcoQ29uc3RydWN0b3IsIE5BTUUgKyAnIEl0ZXJhdG9yJyk7XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyICRpdGVyQ3JlYXRlID0gcmVxdWlyZSgnLi9faXRlci1jcmVhdGUnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgZ2V0UHJvdG90eXBlT2YgPSByZXF1aXJlKCcuL19vYmplY3QtZ3BvJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBCVUdHWSA9ICEoW10ua2V5cyAmJiAnbmV4dCcgaW4gW10ua2V5cygpKTsgLy8gU2FmYXJpIGhhcyBidWdneSBpdGVyYXRvcnMgdy9vIGBuZXh0YFxudmFyIEZGX0lURVJBVE9SID0gJ0BAaXRlcmF0b3InO1xudmFyIEtFWVMgPSAna2V5cyc7XG52YXIgVkFMVUVTID0gJ3ZhbHVlcyc7XG5cbnZhciByZXR1cm5UaGlzID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQmFzZSwgTkFNRSwgQ29uc3RydWN0b3IsIG5leHQsIERFRkFVTFQsIElTX1NFVCwgRk9SQ0VEKSB7XG4gICRpdGVyQ3JlYXRlKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KTtcbiAgdmFyIGdldE1ldGhvZCA9IGZ1bmN0aW9uIChraW5kKSB7XG4gICAgaWYgKCFCVUdHWSAmJiBraW5kIGluIHByb3RvKSByZXR1cm4gcHJvdG9ba2luZF07XG4gICAgc3dpdGNoIChraW5kKSB7XG4gICAgICBjYXNlIEtFWVM6IHJldHVybiBmdW5jdGlvbiBrZXlzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgICAgY2FzZSBWQUxVRVM6IHJldHVybiBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgfSByZXR1cm4gZnVuY3Rpb24gZW50cmllcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgfTtcbiAgdmFyIFRBRyA9IE5BTUUgKyAnIEl0ZXJhdG9yJztcbiAgdmFyIERFRl9WQUxVRVMgPSBERUZBVUxUID09IFZBTFVFUztcbiAgdmFyIFZBTFVFU19CVUcgPSBmYWxzZTtcbiAgdmFyIHByb3RvID0gQmFzZS5wcm90b3R5cGU7XG4gIHZhciAkbmF0aXZlID0gcHJvdG9bSVRFUkFUT1JdIHx8IHByb3RvW0ZGX0lURVJBVE9SXSB8fCBERUZBVUxUICYmIHByb3RvW0RFRkFVTFRdO1xuICB2YXIgJGRlZmF1bHQgPSAkbmF0aXZlIHx8IGdldE1ldGhvZChERUZBVUxUKTtcbiAgdmFyICRlbnRyaWVzID0gREVGQVVMVCA/ICFERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoJ2VudHJpZXMnKSA6IHVuZGVmaW5lZDtcbiAgdmFyICRhbnlOYXRpdmUgPSBOQU1FID09ICdBcnJheScgPyBwcm90by5lbnRyaWVzIHx8ICRuYXRpdmUgOiAkbmF0aXZlO1xuICB2YXIgbWV0aG9kcywga2V5LCBJdGVyYXRvclByb3RvdHlwZTtcbiAgLy8gRml4IG5hdGl2ZVxuICBpZiAoJGFueU5hdGl2ZSkge1xuICAgIEl0ZXJhdG9yUHJvdG90eXBlID0gZ2V0UHJvdG90eXBlT2YoJGFueU5hdGl2ZS5jYWxsKG5ldyBCYXNlKCkpKTtcbiAgICBpZiAoSXRlcmF0b3JQcm90b3R5cGUgIT09IE9iamVjdC5wcm90b3R5cGUgJiYgSXRlcmF0b3JQcm90b3R5cGUubmV4dCkge1xuICAgICAgLy8gU2V0IEBAdG9TdHJpbmdUYWcgdG8gbmF0aXZlIGl0ZXJhdG9yc1xuICAgICAgc2V0VG9TdHJpbmdUYWcoSXRlcmF0b3JQcm90b3R5cGUsIFRBRywgdHJ1ZSk7XG4gICAgICAvLyBmaXggZm9yIHNvbWUgb2xkIGVuZ2luZXNcbiAgICAgIGlmICghTElCUkFSWSAmJiB0eXBlb2YgSXRlcmF0b3JQcm90b3R5cGVbSVRFUkFUT1JdICE9ICdmdW5jdGlvbicpIGhpZGUoSXRlcmF0b3JQcm90b3R5cGUsIElURVJBVE9SLCByZXR1cm5UaGlzKTtcbiAgICB9XG4gIH1cbiAgLy8gZml4IEFycmF5I3t2YWx1ZXMsIEBAaXRlcmF0b3J9Lm5hbWUgaW4gVjggLyBGRlxuICBpZiAoREVGX1ZBTFVFUyAmJiAkbmF0aXZlICYmICRuYXRpdmUubmFtZSAhPT0gVkFMVUVTKSB7XG4gICAgVkFMVUVTX0JVRyA9IHRydWU7XG4gICAgJGRlZmF1bHQgPSBmdW5jdGlvbiB2YWx1ZXMoKSB7IHJldHVybiAkbmF0aXZlLmNhbGwodGhpcyk7IH07XG4gIH1cbiAgLy8gRGVmaW5lIGl0ZXJhdG9yXG4gIGlmICgoIUxJQlJBUlkgfHwgRk9SQ0VEKSAmJiAoQlVHR1kgfHwgVkFMVUVTX0JVRyB8fCAhcHJvdG9bSVRFUkFUT1JdKSkge1xuICAgIGhpZGUocHJvdG8sIElURVJBVE9SLCAkZGVmYXVsdCk7XG4gIH1cbiAgLy8gUGx1ZyBmb3IgbGlicmFyeVxuICBJdGVyYXRvcnNbTkFNRV0gPSAkZGVmYXVsdDtcbiAgSXRlcmF0b3JzW1RBR10gPSByZXR1cm5UaGlzO1xuICBpZiAoREVGQVVMVCkge1xuICAgIG1ldGhvZHMgPSB7XG4gICAgICB2YWx1ZXM6IERFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChWQUxVRVMpLFxuICAgICAga2V5czogSVNfU0VUID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoS0VZUyksXG4gICAgICBlbnRyaWVzOiAkZW50cmllc1xuICAgIH07XG4gICAgaWYgKEZPUkNFRCkgZm9yIChrZXkgaW4gbWV0aG9kcykge1xuICAgICAgaWYgKCEoa2V5IGluIHByb3RvKSkgcmVkZWZpbmUocHJvdG8sIGtleSwgbWV0aG9kc1trZXldKTtcbiAgICB9IGVsc2UgJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LkYgKiAoQlVHR1kgfHwgVkFMVUVTX0JVRyksIE5BTUUsIG1ldGhvZHMpO1xuICB9XG4gIHJldHVybiBtZXRob2RzO1xufTtcbiIsInZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIFNBRkVfQ0xPU0lORyA9IGZhbHNlO1xuXG50cnkge1xuICB2YXIgcml0ZXIgPSBbN11bSVRFUkFUT1JdKCk7XG4gIHJpdGVyWydyZXR1cm4nXSA9IGZ1bmN0aW9uICgpIHsgU0FGRV9DTE9TSU5HID0gdHJ1ZTsgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXRocm93LWxpdGVyYWxcbiAgQXJyYXkuZnJvbShyaXRlciwgZnVuY3Rpb24gKCkgeyB0aHJvdyAyOyB9KTtcbn0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjLCBza2lwQ2xvc2luZykge1xuICBpZiAoIXNraXBDbG9zaW5nICYmICFTQUZFX0NMT1NJTkcpIHJldHVybiBmYWxzZTtcbiAgdmFyIHNhZmUgPSBmYWxzZTtcbiAgdHJ5IHtcbiAgICB2YXIgYXJyID0gWzddO1xuICAgIHZhciBpdGVyID0gYXJyW0lURVJBVE9SXSgpO1xuICAgIGl0ZXIubmV4dCA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHsgZG9uZTogc2FmZSA9IHRydWUgfTsgfTtcbiAgICBhcnJbSVRFUkFUT1JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gaXRlcjsgfTtcbiAgICBleGVjKGFycik7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICByZXR1cm4gc2FmZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChkb25lLCB2YWx1ZSkge1xuICByZXR1cm4geyB2YWx1ZTogdmFsdWUsIGRvbmU6ICEhZG9uZSB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge307XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZhbHNlO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIG1hY3JvdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgT2JzZXJ2ZXIgPSBnbG9iYWwuTXV0YXRpb25PYnNlcnZlciB8fCBnbG9iYWwuV2ViS2l0TXV0YXRpb25PYnNlcnZlcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgUHJvbWlzZSA9IGdsb2JhbC5Qcm9taXNlO1xudmFyIGlzTm9kZSA9IHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBoZWFkLCBsYXN0LCBub3RpZnk7XG5cbiAgdmFyIGZsdXNoID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwYXJlbnQsIGZuO1xuICAgIGlmIChpc05vZGUgJiYgKHBhcmVudCA9IHByb2Nlc3MuZG9tYWluKSkgcGFyZW50LmV4aXQoKTtcbiAgICB3aGlsZSAoaGVhZCkge1xuICAgICAgZm4gPSBoZWFkLmZuO1xuICAgICAgaGVhZCA9IGhlYWQubmV4dDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZuKCk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChoZWFkKSBub3RpZnkoKTtcbiAgICAgICAgZWxzZSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgICAgICB0aHJvdyBlO1xuICAgICAgfVxuICAgIH0gbGFzdCA9IHVuZGVmaW5lZDtcbiAgICBpZiAocGFyZW50KSBwYXJlbnQuZW50ZXIoKTtcbiAgfTtcblxuICAvLyBOb2RlLmpzXG4gIGlmIChpc05vZGUpIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGZsdXNoKTtcbiAgICB9O1xuICAvLyBicm93c2VycyB3aXRoIE11dGF0aW9uT2JzZXJ2ZXIsIGV4Y2VwdCBpT1MgU2FmYXJpIC0gaHR0cHM6Ly9naXRodWIuY29tL3psb2lyb2NrL2NvcmUtanMvaXNzdWVzLzMzOVxuICB9IGVsc2UgaWYgKE9ic2VydmVyICYmICEoZ2xvYmFsLm5hdmlnYXRvciAmJiBnbG9iYWwubmF2aWdhdG9yLnN0YW5kYWxvbmUpKSB7XG4gICAgdmFyIHRvZ2dsZSA9IHRydWU7XG4gICAgdmFyIG5vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZSgnJyk7XG4gICAgbmV3IE9ic2VydmVyKGZsdXNoKS5vYnNlcnZlKG5vZGUsIHsgY2hhcmFjdGVyRGF0YTogdHJ1ZSB9KTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1uZXdcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBub2RlLmRhdGEgPSB0b2dnbGUgPSAhdG9nZ2xlO1xuICAgIH07XG4gIC8vIGVudmlyb25tZW50cyB3aXRoIG1heWJlIG5vbi1jb21wbGV0ZWx5IGNvcnJlY3QsIGJ1dCBleGlzdGVudCBQcm9taXNlXG4gIH0gZWxzZSBpZiAoUHJvbWlzZSAmJiBQcm9taXNlLnJlc29sdmUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb21pc2UudGhlbihmbHVzaCk7XG4gICAgfTtcbiAgLy8gZm9yIG90aGVyIGVudmlyb25tZW50cyAtIG1hY3JvdGFzayBiYXNlZCBvbjpcbiAgLy8gLSBzZXRJbW1lZGlhdGVcbiAgLy8gLSBNZXNzYWdlQ2hhbm5lbFxuICAvLyAtIHdpbmRvdy5wb3N0TWVzc2FnXG4gIC8vIC0gb25yZWFkeXN0YXRlY2hhbmdlXG4gIC8vIC0gc2V0VGltZW91dFxuICB9IGVsc2Uge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIHN0cmFuZ2UgSUUgKyB3ZWJwYWNrIGRldiBzZXJ2ZXIgYnVnIC0gdXNlIC5jYWxsKGdsb2JhbClcbiAgICAgIG1hY3JvdGFzay5jYWxsKGdsb2JhbCwgZmx1c2gpO1xuICAgIH07XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gKGZuKSB7XG4gICAgdmFyIHRhc2sgPSB7IGZuOiBmbiwgbmV4dDogdW5kZWZpbmVkIH07XG4gICAgaWYgKGxhc3QpIGxhc3QubmV4dCA9IHRhc2s7XG4gICAgaWYgKCFoZWFkKSB7XG4gICAgICBoZWFkID0gdGFzaztcbiAgICAgIG5vdGlmeSgpO1xuICAgIH0gbGFzdCA9IHRhc2s7XG4gIH07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMjUuNC4xLjUgTmV3UHJvbWlzZUNhcGFiaWxpdHkoQylcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5cbmZ1bmN0aW9uIFByb21pc2VDYXBhYmlsaXR5KEMpIHtcbiAgdmFyIHJlc29sdmUsIHJlamVjdDtcbiAgdGhpcy5wcm9taXNlID0gbmV3IEMoZnVuY3Rpb24gKCQkcmVzb2x2ZSwgJCRyZWplY3QpIHtcbiAgICBpZiAocmVzb2x2ZSAhPT0gdW5kZWZpbmVkIHx8IHJlamVjdCAhPT0gdW5kZWZpbmVkKSB0aHJvdyBUeXBlRXJyb3IoJ0JhZCBQcm9taXNlIGNvbnN0cnVjdG9yJyk7XG4gICAgcmVzb2x2ZSA9ICQkcmVzb2x2ZTtcbiAgICByZWplY3QgPSAkJHJlamVjdDtcbiAgfSk7XG4gIHRoaXMucmVzb2x2ZSA9IGFGdW5jdGlvbihyZXNvbHZlKTtcbiAgdGhpcy5yZWplY3QgPSBhRnVuY3Rpb24ocmVqZWN0KTtcbn1cblxubW9kdWxlLmV4cG9ydHMuZiA9IGZ1bmN0aW9uIChDKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG59O1xuIiwiLy8gMTkuMS4yLjIgLyAxNS4yLjMuNSBPYmplY3QuY3JlYXRlKE8gWywgUHJvcGVydGllc10pXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBkUHMgPSByZXF1aXJlKCcuL19vYmplY3QtZHBzJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgRW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbi8vIENyZWF0ZSBvYmplY3Qgd2l0aCBmYWtlIGBudWxsYCBwcm90b3R5cGU6IHVzZSBpZnJhbWUgT2JqZWN0IHdpdGggY2xlYXJlZCBwcm90b3R5cGVcbnZhciBjcmVhdGVEaWN0ID0gZnVuY3Rpb24gKCkge1xuICAvLyBUaHJhc2gsIHdhc3RlIGFuZCBzb2RvbXk6IElFIEdDIGJ1Z1xuICB2YXIgaWZyYW1lID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdpZnJhbWUnKTtcbiAgdmFyIGkgPSBlbnVtQnVnS2V5cy5sZW5ndGg7XG4gIHZhciBsdCA9ICc8JztcbiAgdmFyIGd0ID0gJz4nO1xuICB2YXIgaWZyYW1lRG9jdW1lbnQ7XG4gIGlmcmFtZS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICByZXF1aXJlKCcuL19odG1sJykuYXBwZW5kQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lLnNyYyA9ICdqYXZhc2NyaXB0Oic7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tc2NyaXB0LXVybFxuICAvLyBjcmVhdGVEaWN0ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuT2JqZWN0O1xuICAvLyBodG1sLnJlbW92ZUNoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZURvY3VtZW50ID0gaWZyYW1lLmNvbnRlbnRXaW5kb3cuZG9jdW1lbnQ7XG4gIGlmcmFtZURvY3VtZW50Lm9wZW4oKTtcbiAgaWZyYW1lRG9jdW1lbnQud3JpdGUobHQgKyAnc2NyaXB0JyArIGd0ICsgJ2RvY3VtZW50LkY9T2JqZWN0JyArIGx0ICsgJy9zY3JpcHQnICsgZ3QpO1xuICBpZnJhbWVEb2N1bWVudC5jbG9zZSgpO1xuICBjcmVhdGVEaWN0ID0gaWZyYW1lRG9jdW1lbnQuRjtcbiAgd2hpbGUgKGktLSkgZGVsZXRlIGNyZWF0ZURpY3RbUFJPVE9UWVBFXVtlbnVtQnVnS2V5c1tpXV07XG4gIHJldHVybiBjcmVhdGVEaWN0KCk7XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5jcmVhdGUgfHwgZnVuY3Rpb24gY3JlYXRlKE8sIFByb3BlcnRpZXMpIHtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKE8gIT09IG51bGwpIHtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gYW5PYmplY3QoTyk7XG4gICAgcmVzdWx0ID0gbmV3IEVtcHR5KCk7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IG51bGw7XG4gICAgLy8gYWRkIFwiX19wcm90b19fXCIgZm9yIE9iamVjdC5nZXRQcm90b3R5cGVPZiBwb2x5ZmlsbFxuICAgIHJlc3VsdFtJRV9QUk9UT10gPSBPO1xuICB9IGVsc2UgcmVzdWx0ID0gY3JlYXRlRGljdCgpO1xuICByZXR1cm4gUHJvcGVydGllcyA9PT0gdW5kZWZpbmVkID8gcmVzdWx0IDogZFBzKHJlc3VsdCwgUHJvcGVydGllcyk7XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgSUU4X0RPTV9ERUZJTkUgPSByZXF1aXJlKCcuL19pZTgtZG9tLWRlZmluZScpO1xudmFyIHRvUHJpbWl0aXZlID0gcmVxdWlyZSgnLi9fdG8tcHJpbWl0aXZlJyk7XG52YXIgZFAgPSBPYmplY3QuZGVmaW5lUHJvcGVydHk7XG5cbmV4cG9ydHMuZiA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eShPLCBQLCBBdHRyaWJ1dGVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICBQID0gdG9QcmltaXRpdmUoUCwgdHJ1ZSk7XG4gIGFuT2JqZWN0KEF0dHJpYnV0ZXMpO1xuICBpZiAoSUU4X0RPTV9ERUZJTkUpIHRyeSB7XG4gICAgcmV0dXJuIGRQKE8sIFAsIEF0dHJpYnV0ZXMpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgaWYgKCdnZXQnIGluIEF0dHJpYnV0ZXMgfHwgJ3NldCcgaW4gQXR0cmlidXRlcykgdGhyb3cgVHlwZUVycm9yKCdBY2Nlc3NvcnMgbm90IHN1cHBvcnRlZCEnKTtcbiAgaWYgKCd2YWx1ZScgaW4gQXR0cmlidXRlcykgT1tQXSA9IEF0dHJpYnV0ZXMudmFsdWU7XG4gIHJldHVybiBPO1xufTtcbiIsInZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzIDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydGllcyhPLCBQcm9wZXJ0aWVzKSB7XG4gIGFuT2JqZWN0KE8pO1xuICB2YXIga2V5cyA9IGdldEtleXMoUHJvcGVydGllcyk7XG4gIHZhciBsZW5ndGggPSBrZXlzLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgUDtcbiAgd2hpbGUgKGxlbmd0aCA+IGkpIGRQLmYoTywgUCA9IGtleXNbaSsrXSwgUHJvcGVydGllc1tQXSk7XG4gIHJldHVybiBPO1xufTtcbiIsIi8vIDE5LjEuMi45IC8gMTUuMi4zLjIgT2JqZWN0LmdldFByb3RvdHlwZU9mKE8pXG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9PYmplY3QgPSByZXF1aXJlKCcuL190by1vYmplY3QnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBPYmplY3RQcm90byA9IE9iamVjdC5wcm90b3R5cGU7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmdldFByb3RvdHlwZU9mIHx8IGZ1bmN0aW9uIChPKSB7XG4gIE8gPSB0b09iamVjdChPKTtcbiAgaWYgKGhhcyhPLCBJRV9QUk9UTykpIHJldHVybiBPW0lFX1BST1RPXTtcbiAgaWYgKHR5cGVvZiBPLmNvbnN0cnVjdG9yID09ICdmdW5jdGlvbicgJiYgTyBpbnN0YW5jZW9mIE8uY29uc3RydWN0b3IpIHtcbiAgICByZXR1cm4gTy5jb25zdHJ1Y3Rvci5wcm90b3R5cGU7XG4gIH0gcmV0dXJuIE8gaW5zdGFuY2VvZiBPYmplY3QgPyBPYmplY3RQcm90byA6IG51bGw7XG59O1xuIiwidmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciBhcnJheUluZGV4T2YgPSByZXF1aXJlKCcuL19hcnJheS1pbmNsdWRlcycpKGZhbHNlKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAob2JqZWN0LCBuYW1lcykge1xuICB2YXIgTyA9IHRvSU9iamVjdChvYmplY3QpO1xuICB2YXIgaSA9IDA7XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGtleTtcbiAgZm9yIChrZXkgaW4gTykgaWYgKGtleSAhPSBJRV9QUk9UTykgaGFzKE8sIGtleSkgJiYgcmVzdWx0LnB1c2goa2V5KTtcbiAgLy8gRG9uJ3QgZW51bSBidWcgJiBoaWRkZW4ga2V5c1xuICB3aGlsZSAobmFtZXMubGVuZ3RoID4gaSkgaWYgKGhhcyhPLCBrZXkgPSBuYW1lc1tpKytdKSkge1xuICAgIH5hcnJheUluZGV4T2YocmVzdWx0LCBrZXkpIHx8IHJlc3VsdC5wdXNoKGtleSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCIvLyAxOS4xLjIuMTQgLyAxNS4yLjMuMTQgT2JqZWN0LmtleXMoTylcbnZhciAka2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzLWludGVybmFsJyk7XG52YXIgZW51bUJ1Z0tleXMgPSByZXF1aXJlKCcuL19lbnVtLWJ1Zy1rZXlzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmtleXMgfHwgZnVuY3Rpb24ga2V5cyhPKSB7XG4gIHJldHVybiAka2V5cyhPLCBlbnVtQnVnS2V5cyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiB7IGU6IGZhbHNlLCB2OiBleGVjKCkgfTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB7IGU6IHRydWUsIHY6IGUgfTtcbiAgfVxufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEMsIHgpIHtcbiAgYW5PYmplY3QoQyk7XG4gIGlmIChpc09iamVjdCh4KSAmJiB4LmNvbnN0cnVjdG9yID09PSBDKSByZXR1cm4geDtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZihDKTtcbiAgdmFyIHJlc29sdmUgPSBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlO1xuICByZXNvbHZlKHgpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChiaXRtYXAsIHZhbHVlKSB7XG4gIHJldHVybiB7XG4gICAgZW51bWVyYWJsZTogIShiaXRtYXAgJiAxKSxcbiAgICBjb25maWd1cmFibGU6ICEoYml0bWFwICYgMiksXG4gICAgd3JpdGFibGU6ICEoYml0bWFwICYgNCksXG4gICAgdmFsdWU6IHZhbHVlXG4gIH07XG59O1xuIiwidmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHRhcmdldCwgc3JjLCBzYWZlKSB7XG4gIGZvciAodmFyIGtleSBpbiBzcmMpIHJlZGVmaW5lKHRhcmdldCwga2V5LCBzcmNba2V5XSwgc2FmZSk7XG4gIHJldHVybiB0YXJnZXQ7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgU1JDID0gcmVxdWlyZSgnLi9fdWlkJykoJ3NyYycpO1xudmFyIFRPX1NUUklORyA9ICd0b1N0cmluZyc7XG52YXIgJHRvU3RyaW5nID0gRnVuY3Rpb25bVE9fU1RSSU5HXTtcbnZhciBUUEwgPSAoJycgKyAkdG9TdHJpbmcpLnNwbGl0KFRPX1NUUklORyk7XG5cbnJlcXVpcmUoJy4vX2NvcmUnKS5pbnNwZWN0U291cmNlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiAkdG9TdHJpbmcuY2FsbChpdCk7XG59O1xuXG4obW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywga2V5LCB2YWwsIHNhZmUpIHtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2YgdmFsID09ICdmdW5jdGlvbic7XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCAnbmFtZScpIHx8IGhpZGUodmFsLCAnbmFtZScsIGtleSk7XG4gIGlmIChPW2tleV0gPT09IHZhbCkgcmV0dXJuO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgU1JDKSB8fCBoaWRlKHZhbCwgU1JDLCBPW2tleV0gPyAnJyArIE9ba2V5XSA6IFRQTC5qb2luKFN0cmluZyhrZXkpKSk7XG4gIGlmIChPID09PSBnbG9iYWwpIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSBpZiAoIXNhZmUpIHtcbiAgICBkZWxldGUgT1trZXldO1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9IGVsc2UgaWYgKE9ba2V5XSkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIHtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfVxuLy8gYWRkIGZha2UgRnVuY3Rpb24jdG9TdHJpbmcgZm9yIGNvcnJlY3Qgd29yayB3cmFwcGVkIG1ldGhvZHMgLyBjb25zdHJ1Y3RvcnMgd2l0aCBtZXRob2RzIGxpa2UgTG9EYXNoIGlzTmF0aXZlXG59KShGdW5jdGlvbi5wcm90b3R5cGUsIFRPX1NUUklORywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gIHJldHVybiB0eXBlb2YgdGhpcyA9PSAnZnVuY3Rpb24nICYmIHRoaXNbU1JDXSB8fCAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgREVTQ1JJUFRPUlMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChLRVkpIHtcbiAgdmFyIEMgPSBnbG9iYWxbS0VZXTtcbiAgaWYgKERFU0NSSVBUT1JTICYmIEMgJiYgIUNbU1BFQ0lFU10pIGRQLmYoQywgU1BFQ0lFUywge1xuICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH1cbiAgfSk7XG59O1xuIiwidmFyIGRlZiA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCB0YWcsIHN0YXQpIHtcbiAgaWYgKGl0ICYmICFoYXMoaXQgPSBzdGF0ID8gaXQgOiBpdC5wcm90b3R5cGUsIFRBRykpIGRlZihpdCwgVEFHLCB7IGNvbmZpZ3VyYWJsZTogdHJ1ZSwgdmFsdWU6IHRhZyB9KTtcbn07XG4iLCJ2YXIgc2hhcmVkID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ2tleXMnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc2hhcmVkW2tleV0gfHwgKHNoYXJlZFtrZXldID0gdWlkKGtleSkpO1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBTSEFSRUQgPSAnX19jb3JlLWpzX3NoYXJlZF9fJztcbnZhciBzdG9yZSA9IGdsb2JhbFtTSEFSRURdIHx8IChnbG9iYWxbU0hBUkVEXSA9IHt9KTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gc3RvcmVba2V5XSB8fCAoc3RvcmVba2V5XSA9IHt9KTtcbn07XG4iLCIvLyA3LjMuMjAgU3BlY2llc0NvbnN0cnVjdG9yKE8sIGRlZmF1bHRDb25zdHJ1Y3RvcilcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIEQpIHtcbiAgdmFyIEMgPSBhbk9iamVjdChPKS5jb25zdHJ1Y3RvcjtcbiAgdmFyIFM7XG4gIHJldHVybiBDID09PSB1bmRlZmluZWQgfHwgKFMgPSBhbk9iamVjdChDKVtTUEVDSUVTXSkgPT0gdW5kZWZpbmVkID8gRCA6IGFGdW5jdGlvbihTKTtcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG4vLyB0cnVlICAtPiBTdHJpbmcjYXRcbi8vIGZhbHNlIC0+IFN0cmluZyNjb2RlUG9pbnRBdFxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoVE9fU1RSSU5HKSB7XG4gIHJldHVybiBmdW5jdGlvbiAodGhhdCwgcG9zKSB7XG4gICAgdmFyIHMgPSBTdHJpbmcoZGVmaW5lZCh0aGF0KSk7XG4gICAgdmFyIGkgPSB0b0ludGVnZXIocG9zKTtcbiAgICB2YXIgbCA9IHMubGVuZ3RoO1xuICAgIHZhciBhLCBiO1xuICAgIGlmIChpIDwgMCB8fCBpID49IGwpIHJldHVybiBUT19TVFJJTkcgPyAnJyA6IHVuZGVmaW5lZDtcbiAgICBhID0gcy5jaGFyQ29kZUF0KGkpO1xuICAgIHJldHVybiBhIDwgMHhkODAwIHx8IGEgPiAweGRiZmYgfHwgaSArIDEgPT09IGwgfHwgKGIgPSBzLmNoYXJDb2RlQXQoaSArIDEpKSA8IDB4ZGMwMCB8fCBiID4gMHhkZmZmXG4gICAgICA/IFRPX1NUUklORyA/IHMuY2hhckF0KGkpIDogYVxuICAgICAgOiBUT19TVFJJTkcgPyBzLnNsaWNlKGksIGkgKyAyKSA6IChhIC0gMHhkODAwIDw8IDEwKSArIChiIC0gMHhkYzAwKSArIDB4MTAwMDA7XG4gIH07XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGludm9rZSA9IHJlcXVpcmUoJy4vX2ludm9rZScpO1xudmFyIGh0bWwgPSByZXF1aXJlKCcuL19odG1sJyk7XG52YXIgY2VsID0gcmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBzZXRUYXNrID0gZ2xvYmFsLnNldEltbWVkaWF0ZTtcbnZhciBjbGVhclRhc2sgPSBnbG9iYWwuY2xlYXJJbW1lZGlhdGU7XG52YXIgTWVzc2FnZUNoYW5uZWwgPSBnbG9iYWwuTWVzc2FnZUNoYW5uZWw7XG52YXIgRGlzcGF0Y2ggPSBnbG9iYWwuRGlzcGF0Y2g7XG52YXIgY291bnRlciA9IDA7XG52YXIgcXVldWUgPSB7fTtcbnZhciBPTlJFQURZU1RBVEVDSEFOR0UgPSAnb25yZWFkeXN0YXRlY2hhbmdlJztcbnZhciBkZWZlciwgY2hhbm5lbCwgcG9ydDtcbnZhciBydW4gPSBmdW5jdGlvbiAoKSB7XG4gIHZhciBpZCA9ICt0aGlzO1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG4gIGlmIChxdWV1ZS5oYXNPd25Qcm9wZXJ0eShpZCkpIHtcbiAgICB2YXIgZm4gPSBxdWV1ZVtpZF07XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgICBmbigpO1xuICB9XG59O1xudmFyIGxpc3RlbmVyID0gZnVuY3Rpb24gKGV2ZW50KSB7XG4gIHJ1bi5jYWxsKGV2ZW50LmRhdGEpO1xufTtcbi8vIE5vZGUuanMgMC45KyAmIElFMTArIGhhcyBzZXRJbW1lZGlhdGUsIG90aGVyd2lzZTpcbmlmICghc2V0VGFzayB8fCAhY2xlYXJUYXNrKSB7XG4gIHNldFRhc2sgPSBmdW5jdGlvbiBzZXRJbW1lZGlhdGUoZm4pIHtcbiAgICB2YXIgYXJncyA9IFtdO1xuICAgIHZhciBpID0gMTtcbiAgICB3aGlsZSAoYXJndW1lbnRzLmxlbmd0aCA+IGkpIGFyZ3MucHVzaChhcmd1bWVudHNbaSsrXSk7XG4gICAgcXVldWVbKytjb3VudGVyXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgaW52b2tlKHR5cGVvZiBmbiA9PSAnZnVuY3Rpb24nID8gZm4gOiBGdW5jdGlvbihmbiksIGFyZ3MpO1xuICAgIH07XG4gICAgZGVmZXIoY291bnRlcik7XG4gICAgcmV0dXJuIGNvdW50ZXI7XG4gIH07XG4gIGNsZWFyVGFzayA9IGZ1bmN0aW9uIGNsZWFySW1tZWRpYXRlKGlkKSB7XG4gICAgZGVsZXRlIHF1ZXVlW2lkXTtcbiAgfTtcbiAgLy8gTm9kZS5qcyAwLjgtXG4gIGlmIChyZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2VzcycpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIFNwaGVyZSAoSlMgZ2FtZSBlbmdpbmUpIERpc3BhdGNoIEFQSVxuICB9IGVsc2UgaWYgKERpc3BhdGNoICYmIERpc3BhdGNoLm5vdykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBEaXNwYXRjaC5ub3coY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBCcm93c2VycyB3aXRoIE1lc3NhZ2VDaGFubmVsLCBpbmNsdWRlcyBXZWJXb3JrZXJzXG4gIH0gZWxzZSBpZiAoTWVzc2FnZUNoYW5uZWwpIHtcbiAgICBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gICAgcG9ydCA9IGNoYW5uZWwucG9ydDI7XG4gICAgY2hhbm5lbC5wb3J0MS5vbm1lc3NhZ2UgPSBsaXN0ZW5lcjtcbiAgICBkZWZlciA9IGN0eChwb3J0LnBvc3RNZXNzYWdlLCBwb3J0LCAxKTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBwb3N0TWVzc2FnZSwgc2tpcCBXZWJXb3JrZXJzXG4gIC8vIElFOCBoYXMgcG9zdE1lc3NhZ2UsIGJ1dCBpdCdzIHN5bmMgJiB0eXBlb2YgaXRzIHBvc3RNZXNzYWdlIGlzICdvYmplY3QnXG4gIH0gZWxzZSBpZiAoZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIgJiYgdHlwZW9mIHBvc3RNZXNzYWdlID09ICdmdW5jdGlvbicgJiYgIWdsb2JhbC5pbXBvcnRTY3JpcHRzKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGdsb2JhbC5wb3N0TWVzc2FnZShpZCArICcnLCAnKicpO1xuICAgIH07XG4gICAgZ2xvYmFsLmFkZEV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCBsaXN0ZW5lciwgZmFsc2UpO1xuICAvLyBJRTgtXG4gIH0gZWxzZSBpZiAoT05SRUFEWVNUQVRFQ0hBTkdFIGluIGNlbCgnc2NyaXB0JykpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgaHRtbC5hcHBlbmRDaGlsZChjZWwoJ3NjcmlwdCcpKVtPTlJFQURZU1RBVEVDSEFOR0VdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBodG1sLnJlbW92ZUNoaWxkKHRoaXMpO1xuICAgICAgICBydW4uY2FsbChpZCk7XG4gICAgICB9O1xuICAgIH07XG4gIC8vIFJlc3Qgb2xkIGJyb3dzZXJzXG4gIH0gZWxzZSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHNldFRpbWVvdXQoY3R4KHJ1biwgaWQsIDEpLCAwKTtcbiAgICB9O1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgc2V0OiBzZXRUYXNrLFxuICBjbGVhcjogY2xlYXJUYXNrXG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtYXggPSBNYXRoLm1heDtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGluZGV4LCBsZW5ndGgpIHtcbiAgaW5kZXggPSB0b0ludGVnZXIoaW5kZXgpO1xuICByZXR1cm4gaW5kZXggPCAwID8gbWF4KGluZGV4ICsgbGVuZ3RoLCAwKSA6IG1pbihpbmRleCwgbGVuZ3RoKTtcbn07XG4iLCIvLyA3LjEuNCBUb0ludGVnZXJcbnZhciBjZWlsID0gTWF0aC5jZWlsO1xudmFyIGZsb29yID0gTWF0aC5mbG9vcjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpc05hTihpdCA9ICtpdCkgPyAwIDogKGl0ID4gMCA/IGZsb29yIDogY2VpbCkoaXQpO1xufTtcbiIsIi8vIHRvIGluZGV4ZWQgb2JqZWN0LCB0b09iamVjdCB3aXRoIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgc3RyaW5nc1xudmFyIElPYmplY3QgPSByZXF1aXJlKCcuL19pb2JqZWN0Jyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBJT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMTUgVG9MZW5ndGhcbnZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgPiAwID8gbWluKHRvSW50ZWdlcihpdCksIDB4MWZmZmZmZmZmZmZmZmYpIDogMDsgLy8gcG93KDIsIDUzKSAtIDEgPT0gOTAwNzE5OTI1NDc0MDk5MVxufTtcbiIsIi8vIDcuMS4xMyBUb09iamVjdChhcmd1bWVudClcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIE9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjEgVG9QcmltaXRpdmUoaW5wdXQgWywgUHJlZmVycmVkVHlwZV0pXG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbi8vIGluc3RlYWQgb2YgdGhlIEVTNiBzcGVjIHZlcnNpb24sIHdlIGRpZG4ndCBpbXBsZW1lbnQgQEB0b1ByaW1pdGl2ZSBjYXNlXG4vLyBhbmQgdGhlIHNlY29uZCBhcmd1bWVudCAtIGZsYWcgLSBwcmVmZXJyZWQgdHlwZSBpcyBhIHN0cmluZ1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFMpIHtcbiAgaWYgKCFpc09iamVjdChpdCkpIHJldHVybiBpdDtcbiAgdmFyIGZuLCB2YWw7XG4gIGlmIChTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAodHlwZW9mIChmbiA9IGl0LnZhbHVlT2YpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKCFTICYmIHR5cGVvZiAoZm4gPSBpdC50b1N0cmluZykgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICB0aHJvdyBUeXBlRXJyb3IoXCJDYW4ndCBjb252ZXJ0IG9iamVjdCB0byBwcmltaXRpdmUgdmFsdWVcIik7XG59O1xuIiwidmFyIGlkID0gMDtcbnZhciBweCA9IE1hdGgucmFuZG9tKCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuICdTeW1ib2woJy5jb25jYXQoa2V5ID09PSB1bmRlZmluZWQgPyAnJyA6IGtleSwgJylfJywgKCsraWQgKyBweCkudG9TdHJpbmcoMzYpKTtcbn07XG4iLCJ2YXIgc3RvcmUgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgnd2tzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG52YXIgU3ltYm9sID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuU3ltYm9sO1xudmFyIFVTRV9TWU1CT0wgPSB0eXBlb2YgU3ltYm9sID09ICdmdW5jdGlvbic7XG5cbnZhciAkZXhwb3J0cyA9IG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIHN0b3JlW25hbWVdIHx8IChzdG9yZVtuYW1lXSA9XG4gICAgVVNFX1NZTUJPTCAmJiBTeW1ib2xbbmFtZV0gfHwgKFVTRV9TWU1CT0wgPyBTeW1ib2wgOiB1aWQpKCdTeW1ib2wuJyArIG5hbWUpKTtcbn07XG5cbiRleHBvcnRzLnN0b3JlID0gc3RvcmU7XG4iLCJ2YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb3JlJykuZ2V0SXRlcmF0b3JNZXRob2QgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ICE9IHVuZGVmaW5lZCkgcmV0dXJuIGl0W0lURVJBVE9SXVxuICAgIHx8IGl0WydAQGl0ZXJhdG9yJ11cbiAgICB8fCBJdGVyYXRvcnNbY2xhc3NvZihpdCldO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBhZGRUb1Vuc2NvcGFibGVzID0gcmVxdWlyZSgnLi9fYWRkLXRvLXVuc2NvcGFibGVzJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcblxuLy8gMjIuMS4zLjQgQXJyYXkucHJvdG90eXBlLmVudHJpZXMoKVxuLy8gMjIuMS4zLjEzIEFycmF5LnByb3RvdHlwZS5rZXlzKClcbi8vIDIyLjEuMy4yOSBBcnJheS5wcm90b3R5cGUudmFsdWVzKClcbi8vIDIyLjEuMy4zMCBBcnJheS5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKEFycmF5LCAnQXJyYXknLCBmdW5jdGlvbiAoaXRlcmF0ZWQsIGtpbmQpIHtcbiAgdGhpcy5fdCA9IHRvSU9iamVjdChpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuICB0aGlzLl9rID0ga2luZDsgICAgICAgICAgICAgICAgLy8ga2luZFxuLy8gMjIuMS41LjIuMSAlQXJyYXlJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGtpbmQgPSB0aGlzLl9rO1xuICB2YXIgaW5kZXggPSB0aGlzLl9pKys7XG4gIGlmICghTyB8fCBpbmRleCA+PSBPLmxlbmd0aCkge1xuICAgIHRoaXMuX3QgPSB1bmRlZmluZWQ7XG4gICAgcmV0dXJuIHN0ZXAoMSk7XG4gIH1cbiAgaWYgKGtpbmQgPT0gJ2tleXMnKSByZXR1cm4gc3RlcCgwLCBpbmRleCk7XG4gIGlmIChraW5kID09ICd2YWx1ZXMnKSByZXR1cm4gc3RlcCgwLCBPW2luZGV4XSk7XG4gIHJldHVybiBzdGVwKDAsIFtpbmRleCwgT1tpbmRleF1dKTtcbn0sICd2YWx1ZXMnKTtcblxuLy8gYXJndW1lbnRzTGlzdFtAQGl0ZXJhdG9yXSBpcyAlQXJyYXlQcm90b192YWx1ZXMlICg5LjQuNC42LCA5LjQuNC43KVxuSXRlcmF0b3JzLkFyZ3VtZW50cyA9IEl0ZXJhdG9ycy5BcnJheTtcblxuYWRkVG9VbnNjb3BhYmxlcygna2V5cycpO1xuYWRkVG9VbnNjb3BhYmxlcygndmFsdWVzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCdlbnRyaWVzJyk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyAxOS4xLjMuNiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nKClcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIHRlc3QgPSB7fTtcbnRlc3RbcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyldID0gJ3onO1xuaWYgKHRlc3QgKyAnJyAhPSAnW29iamVjdCB6XScpIHtcbiAgcmVxdWlyZSgnLi9fcmVkZWZpbmUnKShPYmplY3QucHJvdG90eXBlLCAndG9TdHJpbmcnLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gJ1tvYmplY3QgJyArIGNsYXNzb2YodGhpcykgKyAnXSc7XG4gIH0sIHRydWUpO1xufVxuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIExJQlJBUlkgPSByZXF1aXJlKCcuL19saWJyYXJ5Jyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgdGFzayA9IHJlcXVpcmUoJy4vX3Rhc2snKS5zZXQ7XG52YXIgbWljcm90YXNrID0gcmVxdWlyZSgnLi9fbWljcm90YXNrJykoKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG52YXIgUFJPTUlTRSA9ICdQcm9taXNlJztcbnZhciBUeXBlRXJyb3IgPSBnbG9iYWwuVHlwZUVycm9yO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciAkUHJvbWlzZSA9IGdsb2JhbFtQUk9NSVNFXTtcbnZhciBpc05vZGUgPSBjbGFzc29mKHByb2Nlc3MpID09ICdwcm9jZXNzJztcbnZhciBlbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBJbnRlcm5hbCwgbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5LCBPd25Qcm9taXNlQ2FwYWJpbGl0eSwgV3JhcHBlcjtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmY7XG5cbnZhciBVU0VfTkFUSVZFID0gISFmdW5jdGlvbiAoKSB7XG4gIHRyeSB7XG4gICAgLy8gY29ycmVjdCBzdWJjbGFzc2luZyB3aXRoIEBAc3BlY2llcyBzdXBwb3J0XG4gICAgdmFyIHByb21pc2UgPSAkUHJvbWlzZS5yZXNvbHZlKDEpO1xuICAgIHZhciBGYWtlUHJvbWlzZSA9IChwcm9taXNlLmNvbnN0cnVjdG9yID0ge30pW3JlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyldID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgICAgIGV4ZWMoZW1wdHksIGVtcHR5KTtcbiAgICB9O1xuICAgIC8vIHVuaGFuZGxlZCByZWplY3Rpb25zIHRyYWNraW5nIHN1cHBvcnQsIE5vZGVKUyBQcm9taXNlIHdpdGhvdXQgaXQgZmFpbHMgQEBzcGVjaWVzIHRlc3RcbiAgICByZXR1cm4gKGlzTm9kZSB8fCB0eXBlb2YgUHJvbWlzZVJlamVjdGlvbkV2ZW50ID09ICdmdW5jdGlvbicpICYmIHByb21pc2UudGhlbihlbXB0eSkgaW5zdGFuY2VvZiBGYWtlUHJvbWlzZTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59KCk7XG5cbi8vIGhlbHBlcnNcbnZhciBpc1RoZW5hYmxlID0gZnVuY3Rpb24gKGl0KSB7XG4gIHZhciB0aGVuO1xuICByZXR1cm4gaXNPYmplY3QoaXQpICYmIHR5cGVvZiAodGhlbiA9IGl0LnRoZW4pID09ICdmdW5jdGlvbicgPyB0aGVuIDogZmFsc2U7XG59O1xudmFyIG5vdGlmeSA9IGZ1bmN0aW9uIChwcm9taXNlLCBpc1JlamVjdCkge1xuICBpZiAocHJvbWlzZS5fbikgcmV0dXJuO1xuICBwcm9taXNlLl9uID0gdHJ1ZTtcbiAgdmFyIGNoYWluID0gcHJvbWlzZS5fYztcbiAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciBvayA9IHByb21pc2UuX3MgPT0gMTtcbiAgICB2YXIgaSA9IDA7XG4gICAgdmFyIHJ1biA9IGZ1bmN0aW9uIChyZWFjdGlvbikge1xuICAgICAgdmFyIGhhbmRsZXIgPSBvayA/IHJlYWN0aW9uLm9rIDogcmVhY3Rpb24uZmFpbDtcbiAgICAgIHZhciByZXNvbHZlID0gcmVhY3Rpb24ucmVzb2x2ZTtcbiAgICAgIHZhciByZWplY3QgPSByZWFjdGlvbi5yZWplY3Q7XG4gICAgICB2YXIgZG9tYWluID0gcmVhY3Rpb24uZG9tYWluO1xuICAgICAgdmFyIHJlc3VsdCwgdGhlbiwgZXhpdGVkO1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKGhhbmRsZXIpIHtcbiAgICAgICAgICBpZiAoIW9rKSB7XG4gICAgICAgICAgICBpZiAocHJvbWlzZS5faCA9PSAyKSBvbkhhbmRsZVVuaGFuZGxlZChwcm9taXNlKTtcbiAgICAgICAgICAgIHByb21pc2UuX2ggPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoaGFuZGxlciA9PT0gdHJ1ZSkgcmVzdWx0ID0gdmFsdWU7XG4gICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAoZG9tYWluKSBkb21haW4uZW50ZXIoKTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGhhbmRsZXIodmFsdWUpOyAvLyBtYXkgdGhyb3dcbiAgICAgICAgICAgIGlmIChkb21haW4pIHtcbiAgICAgICAgICAgICAgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgICAgICAgZXhpdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKHJlc3VsdCA9PT0gcmVhY3Rpb24ucHJvbWlzZSkge1xuICAgICAgICAgICAgcmVqZWN0KFR5cGVFcnJvcignUHJvbWlzZS1jaGFpbiBjeWNsZScpKTtcbiAgICAgICAgICB9IGVsc2UgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHJlc3VsdCkpIHtcbiAgICAgICAgICAgIHRoZW4uY2FsbChyZXN1bHQsIHJlc29sdmUsIHJlamVjdCk7XG4gICAgICAgICAgfSBlbHNlIHJlc29sdmUocmVzdWx0KTtcbiAgICAgICAgfSBlbHNlIHJlamVjdCh2YWx1ZSk7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGlmIChkb21haW4gJiYgIWV4aXRlZCkgZG9tYWluLmV4aXQoKTtcbiAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgfVxuICAgIH07XG4gICAgd2hpbGUgKGNoYWluLmxlbmd0aCA+IGkpIHJ1bihjaGFpbltpKytdKTsgLy8gdmFyaWFibGUgbGVuZ3RoIC0gY2FuJ3QgdXNlIGZvckVhY2hcbiAgICBwcm9taXNlLl9jID0gW107XG4gICAgcHJvbWlzZS5fbiA9IGZhbHNlO1xuICAgIGlmIChpc1JlamVjdCAmJiAhcHJvbWlzZS5faCkgb25VbmhhbmRsZWQocHJvbWlzZSk7XG4gIH0pO1xufTtcbnZhciBvblVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgdmFsdWUgPSBwcm9taXNlLl92O1xuICAgIHZhciB1bmhhbmRsZWQgPSBpc1VuaGFuZGxlZChwcm9taXNlKTtcbiAgICB2YXIgcmVzdWx0LCBoYW5kbGVyLCBjb25zb2xlO1xuICAgIGlmICh1bmhhbmRsZWQpIHtcbiAgICAgIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAoaXNOb2RlKSB7XG4gICAgICAgICAgcHJvY2Vzcy5lbWl0KCd1bmhhbmRsZWRSZWplY3Rpb24nLCB2YWx1ZSwgcHJvbWlzZSk7XG4gICAgICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnVuaGFuZGxlZHJlamVjdGlvbikge1xuICAgICAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHZhbHVlIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKChjb25zb2xlID0gZ2xvYmFsLmNvbnNvbGUpICYmIGNvbnNvbGUuZXJyb3IpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdVbmhhbmRsZWQgcHJvbWlzZSByZWplY3Rpb24nLCB2YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgLy8gQnJvd3NlcnMgc2hvdWxkIG5vdCB0cmlnZ2VyIGByZWplY3Rpb25IYW5kbGVkYCBldmVudCBpZiBpdCB3YXMgaGFuZGxlZCBoZXJlLCBOb2RlSlMgLSBzaG91bGRcbiAgICAgIHByb21pc2UuX2ggPSBpc05vZGUgfHwgaXNVbmhhbmRsZWQocHJvbWlzZSkgPyAyIDogMTtcbiAgICB9IHByb21pc2UuX2EgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHVuaGFuZGxlZCAmJiByZXN1bHQuZSkgdGhyb3cgcmVzdWx0LnY7XG4gIH0pO1xufTtcbnZhciBpc1VuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHJldHVybiBwcm9taXNlLl9oICE9PSAxICYmIChwcm9taXNlLl9hIHx8IHByb21pc2UuX2MpLmxlbmd0aCA9PT0gMDtcbn07XG52YXIgb25IYW5kbGVVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIGhhbmRsZXI7XG4gICAgaWYgKGlzTm9kZSkge1xuICAgICAgcHJvY2Vzcy5lbWl0KCdyZWplY3Rpb25IYW5kbGVkJywgcHJvbWlzZSk7XG4gICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9ucmVqZWN0aW9uaGFuZGxlZCkge1xuICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogcHJvbWlzZS5fdiB9KTtcbiAgICB9XG4gIH0pO1xufTtcbnZhciAkcmVqZWN0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICBwcm9taXNlLl92ID0gdmFsdWU7XG4gIHByb21pc2UuX3MgPSAyO1xuICBpZiAoIXByb21pc2UuX2EpIHByb21pc2UuX2EgPSBwcm9taXNlLl9jLnNsaWNlKCk7XG4gIG5vdGlmeShwcm9taXNlLCB0cnVlKTtcbn07XG52YXIgJHJlc29sdmUgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICB2YXIgdGhlbjtcbiAgaWYgKHByb21pc2UuX2QpIHJldHVybjtcbiAgcHJvbWlzZS5fZCA9IHRydWU7XG4gIHByb21pc2UgPSBwcm9taXNlLl93IHx8IHByb21pc2U7IC8vIHVud3JhcFxuICB0cnkge1xuICAgIGlmIChwcm9taXNlID09PSB2YWx1ZSkgdGhyb3cgVHlwZUVycm9yKFwiUHJvbWlzZSBjYW4ndCBiZSByZXNvbHZlZCBpdHNlbGZcIik7XG4gICAgaWYgKHRoZW4gPSBpc1RoZW5hYmxlKHZhbHVlKSkge1xuICAgICAgbWljcm90YXNrKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHdyYXBwZXIgPSB7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfTsgLy8gd3JhcFxuICAgICAgICB0cnkge1xuICAgICAgICAgIHRoZW4uY2FsbCh2YWx1ZSwgY3R4KCRyZXNvbHZlLCB3cmFwcGVyLCAxKSwgY3R4KCRyZWplY3QsIHdyYXBwZXIsIDEpKTtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICRyZWplY3QuY2FsbCh3cmFwcGVyLCBlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgICAgIHByb21pc2UuX3MgPSAxO1xuICAgICAgbm90aWZ5KHByb21pc2UsIGZhbHNlKTtcbiAgICB9XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICAkcmVqZWN0LmNhbGwoeyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH0sIGUpOyAvLyB3cmFwXG4gIH1cbn07XG5cbi8vIGNvbnN0cnVjdG9yIHBvbHlmaWxsXG5pZiAoIVVTRV9OQVRJVkUpIHtcbiAgLy8gMjUuNC4zLjEgUHJvbWlzZShleGVjdXRvcilcbiAgJFByb21pc2UgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgYW5JbnN0YW5jZSh0aGlzLCAkUHJvbWlzZSwgUFJPTUlTRSwgJ19oJyk7XG4gICAgYUZ1bmN0aW9uKGV4ZWN1dG9yKTtcbiAgICBJbnRlcm5hbC5jYWxsKHRoaXMpO1xuICAgIHRyeSB7XG4gICAgICBleGVjdXRvcihjdHgoJHJlc29sdmUsIHRoaXMsIDEpLCBjdHgoJHJlamVjdCwgdGhpcywgMSkpO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgJHJlamVjdC5jYWxsKHRoaXMsIGVycik7XG4gICAgfVxuICB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbiAgSW50ZXJuYWwgPSBmdW5jdGlvbiBQcm9taXNlKGV4ZWN1dG9yKSB7XG4gICAgdGhpcy5fYyA9IFtdOyAgICAgICAgICAgICAvLyA8LSBhd2FpdGluZyByZWFjdGlvbnNcbiAgICB0aGlzLl9hID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIGNoZWNrZWQgaW4gaXNVbmhhbmRsZWQgcmVhY3Rpb25zXG4gICAgdGhpcy5fcyA9IDA7ICAgICAgICAgICAgICAvLyA8LSBzdGF0ZVxuICAgIHRoaXMuX2QgPSBmYWxzZTsgICAgICAgICAgLy8gPC0gZG9uZVxuICAgIHRoaXMuX3YgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gdmFsdWVcbiAgICB0aGlzLl9oID0gMDsgICAgICAgICAgICAgIC8vIDwtIHJlamVjdGlvbiBzdGF0ZSwgMCAtIGRlZmF1bHQsIDEgLSBoYW5kbGVkLCAyIC0gdW5oYW5kbGVkXG4gICAgdGhpcy5fbiA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBub3RpZnlcbiAgfTtcbiAgSW50ZXJuYWwucHJvdG90eXBlID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJykoJFByb21pc2UucHJvdG90eXBlLCB7XG4gICAgLy8gMjUuNC41LjMgUHJvbWlzZS5wcm90b3R5cGUudGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZClcbiAgICB0aGVuOiBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKSB7XG4gICAgICB2YXIgcmVhY3Rpb24gPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgJFByb21pc2UpKTtcbiAgICAgIHJlYWN0aW9uLm9rID0gdHlwZW9mIG9uRnVsZmlsbGVkID09ICdmdW5jdGlvbicgPyBvbkZ1bGZpbGxlZCA6IHRydWU7XG4gICAgICByZWFjdGlvbi5mYWlsID0gdHlwZW9mIG9uUmVqZWN0ZWQgPT0gJ2Z1bmN0aW9uJyAmJiBvblJlamVjdGVkO1xuICAgICAgcmVhY3Rpb24uZG9tYWluID0gaXNOb2RlID8gcHJvY2Vzcy5kb21haW4gOiB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9jLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX2EpIHRoaXMuX2EucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fcykgbm90aWZ5KHRoaXMsIGZhbHNlKTtcbiAgICAgIHJldHVybiByZWFjdGlvbi5wcm9taXNlO1xuICAgIH0sXG4gICAgLy8gMjUuNC41LjEgUHJvbWlzZS5wcm90b3R5cGUuY2F0Y2gob25SZWplY3RlZClcbiAgICAnY2F0Y2gnOiBmdW5jdGlvbiAob25SZWplY3RlZCkge1xuICAgICAgcmV0dXJuIHRoaXMudGhlbih1bmRlZmluZWQsIG9uUmVqZWN0ZWQpO1xuICAgIH1cbiAgfSk7XG4gIE93blByb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKCkge1xuICAgIHZhciBwcm9taXNlID0gbmV3IEludGVybmFsKCk7XG4gICAgdGhpcy5wcm9taXNlID0gcHJvbWlzZTtcbiAgICB0aGlzLnJlc29sdmUgPSBjdHgoJHJlc29sdmUsIHByb21pc2UsIDEpO1xuICAgIHRoaXMucmVqZWN0ID0gY3R4KCRyZWplY3QsIHByb21pc2UsIDEpO1xuICB9O1xuICBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoQykge1xuICAgIHJldHVybiBDID09PSAkUHJvbWlzZSB8fCBDID09PSBXcmFwcGVyXG4gICAgICA/IG5ldyBPd25Qcm9taXNlQ2FwYWJpbGl0eShDKVxuICAgICAgOiBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gIH07XG59XG5cbiRleHBvcnQoJGV4cG9ydC5HICsgJGV4cG9ydC5XICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIHsgUHJvbWlzZTogJFByb21pc2UgfSk7XG5yZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpKCRQcm9taXNlLCBQUk9NSVNFKTtcbnJlcXVpcmUoJy4vX3NldC1zcGVjaWVzJykoUFJPTUlTRSk7XG5XcmFwcGVyID0gcmVxdWlyZSgnLi9fY29yZScpW1BST01JU0VdO1xuXG4vLyBzdGF0aWNzXG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC41IFByb21pc2UucmVqZWN0KHIpXG4gIHJlamVjdDogZnVuY3Rpb24gcmVqZWN0KHIpIHtcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHRoaXMpO1xuICAgIHZhciAkJHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgICQkcmVqZWN0KHIpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAoTElCUkFSWSB8fCAhVVNFX05BVElWRSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjYgUHJvbWlzZS5yZXNvbHZlKHgpXG4gIHJlc29sdmU6IGZ1bmN0aW9uIHJlc29sdmUoeCkge1xuICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShMSUJSQVJZICYmIHRoaXMgPT09IFdyYXBwZXIgPyAkUHJvbWlzZSA6IHRoaXMsIHgpO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIShVU0VfTkFUSVZFICYmIHJlcXVpcmUoJy4vX2l0ZXItZGV0ZWN0JykoZnVuY3Rpb24gKGl0ZXIpIHtcbiAgJFByb21pc2UuYWxsKGl0ZXIpWydjYXRjaCddKGVtcHR5KTtcbn0pKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuMSBQcm9taXNlLmFsbChpdGVyYWJsZSlcbiAgYWxsOiBmdW5jdGlvbiBhbGwoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVzb2x2ZSA9IGNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHZhbHVlcyA9IFtdO1xuICAgICAgdmFyIGluZGV4ID0gMDtcbiAgICAgIHZhciByZW1haW5pbmcgPSAxO1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICB2YXIgJGluZGV4ID0gaW5kZXgrKztcbiAgICAgICAgdmFyIGFscmVhZHlDYWxsZWQgPSBmYWxzZTtcbiAgICAgICAgdmFsdWVzLnB1c2godW5kZWZpbmVkKTtcbiAgICAgICAgcmVtYWluaW5nKys7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgIGlmIChhbHJlYWR5Q2FsbGVkKSByZXR1cm47XG4gICAgICAgICAgYWxyZWFkeUNhbGxlZCA9IHRydWU7XG4gICAgICAgICAgdmFsdWVzWyRpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgICAgIH0sIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfSxcbiAgLy8gMjUuNC40LjQgUHJvbWlzZS5yYWNlKGl0ZXJhYmxlKVxuICByYWNlOiBmdW5jdGlvbiByYWNlKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oY2FwYWJpbGl0eS5yZXNvbHZlLCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH1cbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyICRhdCA9IHJlcXVpcmUoJy4vX3N0cmluZy1hdCcpKHRydWUpO1xuXG4vLyAyMS4xLjMuMjcgU3RyaW5nLnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19pdGVyLWRlZmluZScpKFN0cmluZywgJ1N0cmluZycsIGZ1bmN0aW9uIChpdGVyYXRlZCkge1xuICB0aGlzLl90ID0gU3RyaW5nKGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4vLyAyMS4xLjUuMi4xICVTdHJpbmdJdGVyYXRvclByb3RvdHlwZSUubmV4dCgpXG59LCBmdW5jdGlvbiAoKSB7XG4gIHZhciBPID0gdGhpcy5fdDtcbiAgdmFyIGluZGV4ID0gdGhpcy5faTtcbiAgdmFyIHBvaW50O1xuICBpZiAoaW5kZXggPj0gTy5sZW5ndGgpIHJldHVybiB7IHZhbHVlOiB1bmRlZmluZWQsIGRvbmU6IHRydWUgfTtcbiAgcG9pbnQgPSAkYXQoTywgaW5kZXgpO1xuICB0aGlzLl9pICs9IHBvaW50Lmxlbmd0aDtcbiAgcmV0dXJuIHsgdmFsdWU6IHBvaW50LCBkb25lOiBmYWxzZSB9O1xufSk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLWZpbmFsbHlcbid1c2Ugc3RyaWN0JztcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgY29yZSA9IHJlcXVpcmUoJy4vX2NvcmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBzcGVjaWVzQ29uc3RydWN0b3IgPSByZXF1aXJlKCcuL19zcGVjaWVzLWNvbnN0cnVjdG9yJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcblxuJGV4cG9ydCgkZXhwb3J0LlAgKyAkZXhwb3J0LlIsICdQcm9taXNlJywgeyAnZmluYWxseSc6IGZ1bmN0aW9uIChvbkZpbmFsbHkpIHtcbiAgdmFyIEMgPSBzcGVjaWVzQ29uc3RydWN0b3IodGhpcywgY29yZS5Qcm9taXNlIHx8IGdsb2JhbC5Qcm9taXNlKTtcbiAgdmFyIGlzRnVuY3Rpb24gPSB0eXBlb2Ygb25GaW5hbGx5ID09ICdmdW5jdGlvbic7XG4gIHJldHVybiB0aGlzLnRoZW4oXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uICh4KSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyByZXR1cm4geDsgfSk7XG4gICAgfSA6IG9uRmluYWxseSxcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKGUpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHRocm93IGU7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHlcbiAgKTtcbn0gfSk7XG4iLCIndXNlIHN0cmljdCc7XG4vLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1wcm9taXNlLXRyeVxudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcbnZhciBwZXJmb3JtID0gcmVxdWlyZSgnLi9fcGVyZm9ybScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUywgJ1Byb21pc2UnLCB7ICd0cnknOiBmdW5jdGlvbiAoY2FsbGJhY2tmbikge1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKHRoaXMpO1xuICB2YXIgcmVzdWx0ID0gcGVyZm9ybShjYWxsYmFja2ZuKTtcbiAgKHJlc3VsdC5lID8gcHJvbWlzZUNhcGFiaWxpdHkucmVqZWN0IDogcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZSkocmVzdWx0LnYpO1xuICByZXR1cm4gcHJvbWlzZUNhcGFiaWxpdHkucHJvbWlzZTtcbn0gfSk7XG4iLCJ2YXIgJGl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vZXM2LmFycmF5Lml0ZXJhdG9yJyk7XG52YXIgZ2V0S2V5cyA9IHJlcXVpcmUoJy4vX29iamVjdC1rZXlzJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgd2tzID0gcmVxdWlyZSgnLi9fd2tzJyk7XG52YXIgSVRFUkFUT1IgPSB3a3MoJ2l0ZXJhdG9yJyk7XG52YXIgVE9fU1RSSU5HX1RBRyA9IHdrcygndG9TdHJpbmdUYWcnKTtcbnZhciBBcnJheVZhbHVlcyA9IEl0ZXJhdG9ycy5BcnJheTtcblxudmFyIERPTUl0ZXJhYmxlcyA9IHtcbiAgQ1NTUnVsZUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBDU1NTdHlsZURlY2xhcmF0aW9uOiBmYWxzZSxcbiAgQ1NTVmFsdWVMaXN0OiBmYWxzZSxcbiAgQ2xpZW50UmVjdExpc3Q6IGZhbHNlLFxuICBET01SZWN0TGlzdDogZmFsc2UsXG4gIERPTVN0cmluZ0xpc3Q6IGZhbHNlLFxuICBET01Ub2tlbkxpc3Q6IHRydWUsXG4gIERhdGFUcmFuc2Zlckl0ZW1MaXN0OiBmYWxzZSxcbiAgRmlsZUxpc3Q6IGZhbHNlLFxuICBIVE1MQWxsQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTEZvcm1FbGVtZW50OiBmYWxzZSxcbiAgSFRNTFNlbGVjdEVsZW1lbnQ6IGZhbHNlLFxuICBNZWRpYUxpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBNaW1lVHlwZUFycmF5OiBmYWxzZSxcbiAgTmFtZWROb2RlTWFwOiBmYWxzZSxcbiAgTm9kZUxpc3Q6IHRydWUsXG4gIFBhaW50UmVxdWVzdExpc3Q6IGZhbHNlLFxuICBQbHVnaW46IGZhbHNlLFxuICBQbHVnaW5BcnJheTogZmFsc2UsXG4gIFNWR0xlbmd0aExpc3Q6IGZhbHNlLFxuICBTVkdOdW1iZXJMaXN0OiBmYWxzZSxcbiAgU1ZHUGF0aFNlZ0xpc3Q6IGZhbHNlLFxuICBTVkdQb2ludExpc3Q6IGZhbHNlLFxuICBTVkdTdHJpbmdMaXN0OiBmYWxzZSxcbiAgU1ZHVHJhbnNmb3JtTGlzdDogZmFsc2UsXG4gIFNvdXJjZUJ1ZmZlckxpc3Q6IGZhbHNlLFxuICBTdHlsZVNoZWV0TGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIFRleHRUcmFja0N1ZUxpc3Q6IGZhbHNlLFxuICBUZXh0VHJhY2tMaXN0OiBmYWxzZSxcbiAgVG91Y2hMaXN0OiBmYWxzZVxufTtcblxuZm9yICh2YXIgY29sbGVjdGlvbnMgPSBnZXRLZXlzKERPTUl0ZXJhYmxlcyksIGkgPSAwOyBpIDwgY29sbGVjdGlvbnMubGVuZ3RoOyBpKyspIHtcbiAgdmFyIE5BTUUgPSBjb2xsZWN0aW9uc1tpXTtcbiAgdmFyIGV4cGxpY2l0ID0gRE9NSXRlcmFibGVzW05BTUVdO1xuICB2YXIgQ29sbGVjdGlvbiA9IGdsb2JhbFtOQU1FXTtcbiAgdmFyIHByb3RvID0gQ29sbGVjdGlvbiAmJiBDb2xsZWN0aW9uLnByb3RvdHlwZTtcbiAgdmFyIGtleTtcbiAgaWYgKHByb3RvKSB7XG4gICAgaWYgKCFwcm90b1tJVEVSQVRPUl0pIGhpZGUocHJvdG8sIElURVJBVE9SLCBBcnJheVZhbHVlcyk7XG4gICAgaWYgKCFwcm90b1tUT19TVFJJTkdfVEFHXSkgaGlkZShwcm90bywgVE9fU1RSSU5HX1RBRywgTkFNRSk7XG4gICAgSXRlcmF0b3JzW05BTUVdID0gQXJyYXlWYWx1ZXM7XG4gICAgaWYgKGV4cGxpY2l0KSBmb3IgKGtleSBpbiAkaXRlcmF0b3JzKSBpZiAoIXByb3RvW2tleV0pIHJlZGVmaW5lKHByb3RvLCBrZXksICRpdGVyYXRvcnNba2V5XSwgdHJ1ZSk7XG4gIH1cbn1cbiIsImltcG9ydCB7RGlhbG9nfSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRpbnVlRGlhbG9nIGV4dGVuZHMgRGlhbG9nXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgc3BlYWtlcjogc3RyaW5nLCBwcm90ZWN0ZWQgbmV4dERpYWxvZzogRGlhbG9nKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHRleHQsIHNwZWFrZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVHVUlFbGVtZW50KGRpdjogSFRNTERpdkVsZW1lbnQpOiBQcm9taXNlPERpYWxvZz5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RGlhbG9nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZGlhbG9nIHRleHRcclxuICAgICAgICAgICAgbGV0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgdHh0LmNsYXNzTGlzdC5hZGQoXCJjaGF0bXNnXCIpO1xyXG4gICAgICAgICAgICB0eHQuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIHRvIGFkdmFuY2UgdG8gdGhlIG5leHQgZGlhbG9nXHJcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImNoYXRidG5cIik7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkNvbnRpbnVlXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYWxsIG5ldyBlbGVtZW50cyB0byBkaXZcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHR4dCk7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgY2FsbGJhY2sgZm9yIHRoZSBjb250aW51ZSBidXR0b25cclxuICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoZXZudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLm5leHREaWFsb2cpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7RGlhbG9nfSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5cclxuLy8gY29udmVyc2F0aW9uIGJldHdlZW4gdGhlIHBsYXllciBhbmQgYW4gTlBDXHJcbmV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb25cclxue1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJzdERpYWxvZzogRGlhbG9nKSB7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRGaXJzdERpYWxvZygpOiBEaWFsb2cge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpcnN0RGlhbG9nO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEaWFsb2dcclxue1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRleHQ6IHN0cmluZywgcHJvdGVjdGVkIHNwZWFrZXI6IHN0cmluZykge31cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY3JlYXRlR1VJRWxlbWVudChkaXY6IEhUTUxEaXZFbGVtZW50KTogUHJvbWlzZTxEaWFsb2c+XHJcblxyXG4gICAgcHVibGljIGdldFRleHQoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy50ZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRTcGVha2VyKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuc3BlYWtlcjtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4vRGlhbG9nXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBPcHRpb25EaWFsb2cgZXh0ZW5kcyBEaWFsb2dcclxue1xyXG4gICAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nLCBzcGVha2VyOiBzdHJpbmcsIHByb3RlY3RlZCBvcHRpb25zOiB7W3RleHQ6IHN0cmluZ106IERpYWxvZ30pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIodGV4dCwgc3BlYWtlcik7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUdVSUVsZW1lbnQoZGl2OiBIVE1MRGl2RWxlbWVudCk6IFByb21pc2U8RGlhbG9nPlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxEaWFsb2c+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBkaWFsb2cgdGV4dFxyXG4gICAgICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICB0eHQuY2xhc3NMaXN0LmFkZChcImNoYXRtc2dcIik7XHJcbiAgICAgICAgICAgIHR4dC5pbm5lckhUTUwgPSB0aGlzLnRleHQ7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgdGV4dCBlbGVtZW50IHRvIGRpdlxyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodHh0KTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBkaWFsb2cgb3B0aW9uXHJcbiAgICAgICAgICAgIGZvcihsZXQgb3B0aW9uIGluIHRoaXMub3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImNoYXRidG5cIik7XHJcbiAgICAgICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gb3B0aW9uO1xyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGJ0bik7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gYWRkIGEgY2FsbGJhY2sgZm9yIHRoZSBvcHRpb24gYnV0dG9uXHJcbiAgICAgICAgICAgICAgICBidG4ub25jbGljayA9IChldm50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLm9wdGlvbnNbb3B0aW9uXSk7XHJcbiAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtDb250aW51ZURpYWxvZ30gZnJvbSBcIi4vQ29udGludWVEaWFsb2dcIlxyXG5pbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4vRGlhbG9nXCJcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcblxyXG5leHBvcnQgY2xhc3MgUmVjZWl2ZUl0ZW1EaWFsb2cgZXh0ZW5kcyBDb250aW51ZURpYWxvZ1xyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIHNwZWFrZXI6IHN0cmluZywgbmV4dERpYWxvZzogRGlhbG9nLCBwcm90ZWN0ZWQgaXRlbXNMb3N0OiBBcnJheTxJdGVtPiwgcHJvdGVjdGVkIGl0ZW1zUmVjZWl2ZWQ6IEFycmF5PEl0ZW0+KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHRleHQsIHNwZWFrZXIsIG5leHREaWFsb2cpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVHVUlFbGVtZW50KGRpdjogSFRNTERpdkVsZW1lbnQpOiBQcm9taXNlPERpYWxvZz5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RGlhbG9nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZGlhbG9nIHRleHRcclxuICAgICAgICAgICAgbGV0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgdHh0LmNsYXNzTGlzdC5hZGQoXCJjaGF0bXNnXCIpO1xyXG4gICAgICAgICAgICB0eHQuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIHRvIGFkdmFuY2UgdG8gdGhlIG5leHQgZGlhbG9nXHJcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImNoYXRidG5cIik7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkNvbnRpbnVlXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgdGV4dCBlbGVtZW50IHRvIGRpdlxyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodHh0KTtcclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNMb3N0ICE9IG51bGwgJiYgdGhpcy5pdGVtc0xvc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1zTG9zdExibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zTG9zdExibC5jbGFzc0xpc3QuYWRkKFwiY2hhdGltZ2hlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zTG9zdExibC5pbm5lckhUTUwgPSBcIllvdSBMb3N0XCI7XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbXNMb3N0TGJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgYW4gaW1hZ2UgZm9yIGVhY2ggaXRlbSBsb3N0XHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy5pdGVtc0xvc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNoYXRpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IGl0ZW0uZ2V0SW1hZ2VQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNSZWNlaXZlZCAhPSBudWxsICYmIHRoaXMuaXRlbXNSZWNlaXZlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXRlbXNSZWNlaXZlZExibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgIGl0ZW1zUmVjZWl2ZWRMYmwuY2xhc3NMaXN0LmFkZChcImNoYXRpbWdoZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICBpdGVtc1JlY2VpdmVkTGJsLmlubmVySFRNTCA9IFwiWW91IEdhaW5lZFwiO1xyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGl0ZW1zUmVjZWl2ZWRMYmwpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFkZCBhbiBpbWFnZSBmb3IgZWFjaCBpdGVtIHJlY2VpdmVkXHJcbiAgICAgICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy5pdGVtc1JlY2VpdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJjaGF0aW1nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpdGVtLmdldEltYWdlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGNhbGxiYWNrIGZvciB0aGUgY29udGludWUgYnV0dG9uXHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKGV2bnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5uZXh0RGlhbG9nKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbXNMb3N0KCk6IEFycmF5PEl0ZW0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNMb3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtc1JlY2VpdmVkKCk6IEFycmF5PEl0ZW0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNSZWNlaXZlZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vSVNoYXBlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBDaXJjbGUgaW1wbGVtZW50cyBJU2hhcGVcclxue1xyXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlciA9IDEwO1xyXG4gICAgcHVibGljIGxpbmVXaWR0aDogbnVtYmVyID0gMjtcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gXCJyZWRcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSBcInJlZFwiLCBsaW5lX3dpZHRoOiBudW1iZXIgPSAyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBsaW5lX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCh5IC0gdGhpcy55KSAqKiAyICsgKHggLSB0aGlzLngpICoqIDIpIDw9IHRoaXMucmFkaXVzICoqIDI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtUcmlhbmdsZX0gZnJvbSBcIi4vVHJpYW5nbGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi9Qb2ludFwiXHJcblxyXG4vLyBuYXZtZXNoIHBhdGhmaW5kaW5nOiBodHRwczovL21lZGl1bS5jb20vQG1zY2Fuc2lhbi9hLXdpdGgtbmF2aWdhdGlvbi1tZXNoZXMtMjQ2ZmQ5ZTcyNDI0XHJcbmV4cG9ydCBjbGFzcyBOYXZNZXNoXHJcbntcclxuICAgIC8vIHZhbGlkIHJlZ2lvbnMgb2YgdGhlIG5hdm1lc2hcclxuICAgIHByaXZhdGUgdHJpczogQXJyYXk8VHJpYW5nbGU+O1xyXG5cclxuICAgIC8vIFRPRE8gLSBuZXcgc3lzdGVtIG9mIHRyaWFuZ2xlIHJlcHJlc2VudGF0aW9uXHJcbiAgICBwcml2YXRlIHZlcnRpY2VzOiBBcnJheTxQb2ludD47XHJcbiAgICBwcml2YXRlIGVkZ2VzOiBBcnJheTx7djE6IG51bWJlciwgdjI6IG51bWJlcn0+OyAgICAgICAgIC8vIHYxIGFuZCB2MiBhcmUgaW5kaWNlcyBpbnRvIHZlcnRpY2VzIGxpc3RcclxuICAgIHByaXZhdGUgb3V0ZXJFZGdlczogQXJyYXk8e3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9PjsgICAgLy8gZWRnZXMgd2hpY2ggb25seSBhcHBlYXIgaW4gMSB0cmlcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0cmlzOiBBcnJheTxUcmlhbmdsZT4pIHtcclxuICAgICAgICB0aGlzLnRyaXMgPSB0cmlzID8gdHJpcyA6IFtdO1xyXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVkZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5vdXRlckVkZ2VzID0gW107XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpc2UgdmVydGljZXMgYW5kIGVkZ2VzIGxpc3RcclxuICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRyaXMpIHtcclxuICAgICAgICAgICAgbGV0IHAxSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgIGxldCBwMkluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICBsZXQgcDNJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHZlcnRleCBpcyBub3QgaW4gdGhlIGxpc3QsIGFkZCBpdCB0byB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZihwMUluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICAgICAgcDFJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiB2ZXJ0ZXggaXMgbm90IGluIHRoZSBsaXN0LCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYocDJJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgICAgIHAySW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgdmVydGV4IGlzIG5vdCBpbiB0aGUgbGlzdCwgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHAzSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godHJpLnBvaW50Myk7XHJcbiAgICAgICAgICAgICAgICBwM0luZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYWxsIDMgZWRnZXMgb2YgdGhlIHRyaSB0byB0aGUgZWRnZXMgbGlzdFxyXG4gICAgICAgICAgICBjb25zdCBlZGdlMSA9IHt2MTogcDFJbmRleCwgdjI6IHAySW5kZXh9O1xyXG4gICAgICAgICAgICBjb25zdCBlZGdlMiA9IHt2MTogcDJJbmRleCwgdjI6IHAzSW5kZXh9O1xyXG4gICAgICAgICAgICBjb25zdCBlZGdlMyA9IHt2MTogcDNJbmRleCwgdjI6IHAxSW5kZXh9O1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBlZGdlcyBpZiB0aGV5IGFyZSBub3QgYWxyZWFkeSBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZFZGdlKHRoaXMuZWRnZXMsIGVkZ2UxKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMucHVzaChlZGdlMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMuc3BsaWNlKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5vdXRlckVkZ2VzLCBlZGdlMSksIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZFZGdlKHRoaXMuZWRnZXMsIGVkZ2UyKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMucHVzaChlZGdlMik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMuc3BsaWNlKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5vdXRlckVkZ2VzLCBlZGdlMiksIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZFZGdlKHRoaXMuZWRnZXMsIGVkZ2UzKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMucHVzaChlZGdlMyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMuc3BsaWNlKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5vdXRlckVkZ2VzLCBlZGdlMyksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy52ZXJ0aWNlcyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVkZ2VzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMub3V0ZXJFZGdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFdheXBvaW50cyA9IChjdXJyZW50WDogbnVtYmVyLCBjdXJyZW50WTogbnVtYmVyLCB0YXJnZXRYOiBudW1iZXIsIHRhcmdldFk6IG51bWJlcik6IEFycmF5PFBvaW50PiA9PiB7XHJcbiAgICAgICAgZm9yKGxldCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIC8vIGFsbG93IGZyZWUgbW92ZW1lbnQgd2l0aGluIGEgdHJpYW5nbGVcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHRhcmdldFgsIHRhcmdldFkpICYmIHRyaS5jb250YWlucyhjdXJyZW50WCwgY3VycmVudFkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIGJvdGggcG9pbnRzIGZhbGwgdW5kZXIgZGlmZmVyZW50IHRyaWFuZ2xlcywgZmluZCB0aGUgYSB3YXlwb2ludCB0byByZWFjaCB0aGUgbmV4dCB0cmlcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHRhcmdldFgsIHRhcmdldFkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL3JldHVybiBuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB0aGlzLmZpbmRQYXRoKG5ldyBQb2ludChjdXJyZW50WCwgY3VycmVudFkpLCBuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSkpO1xyXG4gICAgICAgICAgICAgICAgaWYob2JqICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm91dGU6IEFycmF5PFBvaW50PiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlLnB1c2gobmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpKTsgICAgLy8gZ28gZnJvbSBsYXN0IHBvaW50IHRvIHRoZSBlbmQgcG9pbnRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUm91dGUob2JqLmNhbWVGcm9tLCBvYmouZW5kVmVydGV4LCByb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VSb3V0ZShyb3V0ZSk7ICAgIC8vIHJlbW92ZSByZWR1bmRhbnQgbm9kZXMgZnJvbSB0aGUgcGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJvdXRlLmxlbmd0aCA+IDApICAgICAgICAvLyBsYXN0IHdheXBvaW50IHdpbGwgYmUgc3RhcnQgLT4gZ2V0IHJpZCBvZiBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJvdXRlOiBcIiArIHJvdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmUgdW5lY2Vzc2FyeSB3YXlwb2ludHMgZnJvbSB0aGUgcm91dGUsIGkuZS4gaWYgdGhlaXIgaXMgYSBzdHJhaWdodCBwYXRoIGZyb20gYSB0byBjLCByZW1vdmUgYlxyXG4gICAgcHJpdmF0ZSByZWR1Y2VSb3V0ZSA9IChyb3V0ZTogQXJyYXk8UG9pbnQ+KSA9PiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAvLyBsb29wIHVudGlsIG5vIG1vcmUgcmVkdWN0aW9ucyBjYW4gYmUgbWFkZVxyXG4gICAgICAgIHdoaWxlKGluZGV4IDwgcm91dGUubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcm91dGVbaW5kZXhdXHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSByb3V0ZVtpbmRleCArIDJdXHJcblxyXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhIHZhbGlkIHN0cmFpZ2h0IHBhdGggYmV0d2VlbiBhIGFuZCBjIGlmIHRoZSBwYXRoIGRvZXMgbm90IGludGVyc2VjdCBhbiBvdXRlciBlZGdlXHJcbiAgICAgICAgICAgIGxldCBpbnRlcnNlY3RzT3V0ZXJFZGdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBvdXRlckVkZ2Ugb2YgdGhpcy5vdXRlckVkZ2VzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRvTGluZVNlZ21lbnRzSW50ZXJzZWN0KHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYxXSwgdGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjJdLCBhLCBjKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYS50b1N0cmluZygpLCBjLnRvU3RyaW5nKCksIFwiaW50ZXJzZWN0c1wiLCB0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52MV0udG9TdHJpbmcoKSwgdGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjJdLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0c091dGVyRWRnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwYXRoIGRvZXMgbm90IGludGVyc2VjdCBhbiBvdXRlciBlZGdlLCByZW1vdmUgd2F5cG9pbnQgYlxyXG4gICAgICAgICAgICBpZighaW50ZXJzZWN0c091dGVyRWRnZSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGUuc3BsaWNlKGluZGV4KzEsIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byBpbmNyZW1lbnQgaW5kZXggc2luY2UgYXJyYXkgbGVuZ3RoIGhhcyBiZWVuIHJlZHVjZWRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG1vdmUgb250byBuZXh0IHBhaXIgb2Ygd2F5cG9pbnRzXHJcbiAgICAgICAgICAgICAgICBpbmRleCArKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUm91dGUgPSAoY2FtZUZyb206IHt9LCB2ZXJ0ZXg6IFBvaW50LCByb3V0ZTogQXJyYXk8UG9pbnQ+KSA9PiB7XHJcbiAgICAgICAgcm91dGUucHVzaCh2ZXJ0ZXgpOyAvLyByb3V0ZSBpcyByZWFkIGluIHJldmVyc2Ugb3JkZXJcclxuICAgICAgICBpZihjYW1lRnJvbVt2ZXJ0ZXgudG9TdHJpbmcoKV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkUm91dGUoY2FtZUZyb20sIGNhbWVGcm9tW3ZlcnRleC50b1N0cmluZygpXS5ub2RlLCByb3V0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVzZSB0aGUgQSogYWxnb3JpdGhtIHRvIGZpbmQgYSBzaG9ydGVzdCBwYXRoIHRocm91Z2ggdGhlIG5hdm1lc2hcclxuICAgIHByaXZhdGUgZmluZFBhdGggPSAoc3RhcnQ6IFBvaW50LCBlbmQ6IFBvaW50KToge2NhbWVGcm9tOiB7fSwgZW5kVmVydGV4OiBQb2ludH0gPT4ge1xyXG4gICAgICAgIGxldCBvcGVuID0gW3tub2RlOiBzdGFydCwgcHJpb3JpdHk6IDB9XTsgICAgLy8gbG93ZXN0IHByaW9yaXR5ID0gMFxyXG4gICAgICAgIGxldCBjbG9zZWQgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gZmluZCB0aGUgdHJpYW5nbGUgY29udGFpbmluZyB0aGUgc3RhcnQgcG9pbnRcclxuICAgICAgICBsZXQgc3RhcnRUcmk7XHJcbiAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHN0YXJ0LngsIHN0YXJ0LnkpKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRyaSA9IHRyaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHN0YXJ0VHJpID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSB0cmlhbmdsZSBjb250YWluaW5nIHRoZSBlbmQgcG9pbnRcclxuICAgICAgICBsZXQgZW5kVHJpO1xyXG4gICAgICAgIGZvcihjb25zdCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyhlbmQueCwgZW5kLnkpKSB7XHJcbiAgICAgICAgICAgICAgICBlbmRUcmkgPSB0cmk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlbmRUcmkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdbaV0gaXMgdGhlIGNvc3QgdG8gZ2V0IHRvIGkgZnJvbSB0aGUgc3RhcnQgdmVydGV4XHJcbiAgICAgICAgbGV0IGcgPSB7fTtcclxuICAgICAgICBsZXQgY2FtZUZyb20gPSB7fTtcclxuICAgICAgICBnW3N0YXJ0LnRvU3RyaW5nKCldID0gMDtcclxuICAgICAgICBjYW1lRnJvbVtzdGFydC50b1N0cmluZygpXSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIGV4ZWN1dGUgQSogYWxnb3JpdGhtXHJcbiAgICAgICAgLy8gcHNldWRvY29kZTogaHR0cDovL3RoZW9yeS5zdGFuZm9yZC5lZHUvfmFtaXRwL0dhbWVQcm9ncmFtbWluZy9JbXBsZW1lbnRhdGlvbk5vdGVzLmh0bWxcclxuICAgICAgICB3aGlsZShvcGVuLmxlbmd0aCA+IDAgJiYgIWVuZFRyaS5pc1ZlcnRleChvcGVuWzBdLm5vZGUpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBvcGVuLnNoaWZ0KCk7ICAvLyByZW1vdmUgZmlyc3QgaXRlbSBmcm9tIG9wZW4gKGl0ZW0gd2l0aCBsb3dlc3QgcHJpb3JpdHkpXHJcbiAgICAgICAgICAgIGNsb3NlZC5wdXNoKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3VycmVudCB2ZXJ0ZXg6IFwiICsgY3VycmVudC5ub2RlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgbmVpZ2hib3VyIG9mIHRoaXMuZ2V0TmVpZ2hib3VycyhjdXJyZW50Lm5vZGUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29zdCA9IGdbY3VycmVudC5ub2RlLnRvU3RyaW5nKCldICsgdGhpcy5nZXRFZGdlQ29zdChjdXJyZW50Lm5vZGUsIG5laWdoYm91cik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibmVpZ2hib3VyOiBcIiArIG5laWdoYm91ci50b1N0cmluZygpICsgXCIsIGNvc3Q6IFwiICsgY29zdCk7XHJcbiAgICAgICAgICAgICAgICAvLyBuZWlnaGJvdXIgaW4gb3BlblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKG9wZW4sIG5laWdoYm91cikgIT09IC0xICYmIGNvc3QgPCBnW25laWdoYm91ci50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW4uc3BsaWNlKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShvcGVuLCBuZWlnaGJvdXIpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIG5laWdoYm91ciBpbiBjbG9zZWRcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShjbG9zZWQsIG5laWdoYm91cikgIT09IC0xICYmIGNvc3QgPCBnW25laWdoYm91ci50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlZC5zcGxpY2UodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKGNsb3NlZCwgbmVpZ2hib3VyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBuZWlnaGJvdXIgbmVpdGhlciBpbiBvcGVuIG5vciBjbG9zZWRcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShvcGVuLCBuZWlnaGJvdXIpID09PSAtMSAmJiB0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUoY2xvc2VkLCBuZWlnaGJvdXIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdbbmVpZ2hib3VyLnRvU3RyaW5nKCldID0gY29zdDtcclxuICAgICAgICAgICAgICAgICAgICBjYW1lRnJvbVtuZWlnaGJvdXIudG9TdHJpbmcoKV0gPSBjdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW4ucHVzaCh7bm9kZTogbmVpZ2hib3VyLCBwcmlvcml0eTogY29zdH0pOyAvLyBUT0RPIC0gcHJpb3JpdHkgPSBjb3N0ICsgaChuZWlnaGJvdXIpXHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbi5zb3J0KChhLCBiKSA9PiB7ICAgLy8gc29ydCBvcGVuIHF1ZXVlIGJ5IHByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvcGVuLmxlbmd0aCA+IDAgPyBcImVuZDogXCIgKyBvcGVuWzBdLm5vZGUudG9TdHJpbmcoKSA6IFwibm8gcGF0aFwiKTtcclxuICAgICAgICByZXR1cm4gb3Blbi5sZW5ndGggPiAwID8ge2NhbWVGcm9tOiBjYW1lRnJvbSwgZW5kVmVydGV4OiBvcGVuWzBdLm5vZGV9IDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBmb3IobGV0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgdHJpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyB0aGUgY29zdCBvZiB0cmF2ZXJzaW5nIGFuIGVkZ2UgYmV0d2VlbiBwMSBhbmQgcDJcclxuICAgIHByaXZhdGUgZ2V0RWRnZUNvc3QgPSAocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHAxLnggLSBwMi54KSAqKiAyICsgKHAxLnkgLSBwMi55KSAqKiAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYSBsaXN0IG9mIHZlcnRjaWVzIHdoaWNoIGFyZSBhZGphY2VudCB0byB0aGUgdmVydGV4IHBcclxuICAgIHByaXZhdGUgZ2V0TmVpZ2hib3VycyA9IChwOiBQb2ludCk6IEFycmF5PFBvaW50PiA9PiB7XHJcbiAgICAgICAgbGV0IG5laWdoYm91cnM6IEFycmF5PFBvaW50PiA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCBlZGdlIG9mIHRoaXMuZWRnZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLnZlcnRpY2VzW2VkZ2UudjFdLmVxdWFscyhwKSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRoaXMudmVydGljZXNbZWRnZS52Ml0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy52ZXJ0aWNlc1tlZGdlLnYyXS5lcXVhbHMocCkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0aGlzLnZlcnRpY2VzW2VkZ2UudjFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHZlcnRleCBpcyBub3QgYSB2ZXJ0ZXggb2YgYSB0cmlhbmdsZSwgY2hlY2sgaWYgaXQgaXMgd2l0aGluIGEgdHJpYW5nbGVcclxuICAgICAgICBpZihuZWlnaGJvdXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHAueCwgcC55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRyaS5wb2ludDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZWlnaGJvdXJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFuc3dlciAyIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2MzE5OC9ob3ctZG8teW91LWRldGVjdC13aGVyZS10d28tbGluZS1zZWdtZW50cy1pbnRlcnNlY3RcclxuICAgIHByaXZhdGUgZG9MaW5lU2VnbWVudHNJbnRlcnNlY3QgPSAoZTF2MTogUG9pbnQsIGUxdjI6IFBvaW50LCBlMnYxOiBQb2ludCwgZTJ2MjogUG9pbnQpOiBib29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBwMF94ID0gZTF2MS54O1xyXG4gICAgICAgIGNvbnN0IHAwX3kgPSBlMXYxLnk7XHJcbiAgICAgICAgY29uc3QgcDFfeCA9IGUxdjIueDtcclxuICAgICAgICBjb25zdCBwMV95ID0gZTF2Mi55O1xyXG4gICAgICAgIGNvbnN0IHAyX3ggPSBlMnYxLng7XHJcbiAgICAgICAgY29uc3QgcDJfeSA9IGUydjEueTtcclxuICAgICAgICBjb25zdCBwM194ID0gZTJ2Mi54O1xyXG4gICAgICAgIGNvbnN0IHAzX3kgPSBlMnYyLnk7XHJcblxyXG4gICAgICAgIGxldCBzMV94LCBzMV95LCBzMl94LCBzMl95O1xyXG4gICAgICAgIHMxX3ggPSBwMV94IC0gcDBfeDtcclxuICAgICAgICBzMV95ID0gcDFfeSAtIHAwX3k7XHJcbiAgICAgICAgczJfeCA9IHAzX3ggLSBwMl94O1xyXG4gICAgICAgIHMyX3kgPSBwM195IC0gcDJfeTtcclxuXHJcbiAgICAgICAgbGV0IHMsIHQ7XHJcbiAgICAgICAgcyA9ICgtczFfeSAqIChwMF94IC0gcDJfeCkgKyBzMV94ICogKHAwX3kgLSBwMl95KSkgLyAoLXMyX3ggKiBzMV95ICsgczFfeCAqIHMyX3kpO1xyXG4gICAgICAgIHQgPSAoIHMyX3ggKiAocDBfeSAtIHAyX3kpIC0gczJfeSAqIChwMF94IC0gcDJfeCkpIC8gKC1zMl94ICogczFfeSArIHMxX3ggKiBzMl95KTtcclxuXHJcbiAgICAgICAgaWYocyA+PSAwICYmIHMgPD0gMSAmJiB0ID49IDAgJiYgdCA8PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlIGlmIHRoZSBpbnRlcnNlY3Rpb24gcG9pbnQgaXMgdGhlIHZlcnRleCBwb3NpdGlvbiBzaW5jZSBpdCBicmVha3MgdGhlIHJvdXRlIHJlZHVjdGlvbiBhbGdvcml0aG1cclxuICAgICAgICAgICAgY29uc3QgaV94ID0gKHAwX3ggKyAodCAqIHMxX3gpKTtcclxuICAgICAgICAgICAgY29uc3QgaV95ID0gKHAwX3kgKyAodCAqIHMxX3kpKTtcclxuICAgICAgICAgICAgcmV0dXJuICEoaV94ID09PSBlMXYxLnggJiYgaV95ID09PSBlMXYxLnkpICYmICEoaV94ID09PSBlMXYyLnggJiYgaV95ID09PSBlMXYyLnkpICYmICEoaV94ID09PSBlMnYxLnggJiYgaV95ID09PSBlMnYxLnkpICYmICEoaV94ID09PSBlMnYyLnggJiYgaV95ID09PSBlMnYyLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5vIGNvbGxpc2lvblwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNyb3NzUHJvZHVjdCA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KSA9PiB7XHJcbiAgICBcdHJldHVybiBwb2ludDEueCAqIHBvaW50Mi55IC0gcG9pbnQxLnkgKiBwb2ludDIueDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluZGV4T2ZQcmlvcml0eU5vZGUgPSAodmVydGljZXM6IEFycmF5PHtub2RlOiBQb2ludCwgcHJpb3JpdHk6IG51bWJlcn0+LCBwOiBQb2ludCkgPT4ge1xyXG4gICAgICAgIGlmKHAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGljZXMubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdmVydGljZXNbaW5kZXhdLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBpZih2ZXJ0ZXgueCA9PT0gcC54ICYmIHZlcnRleC55ID09PSBwLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluZGV4T2ZWZXJ0ZXggPSAodmVydGljZXM6IEFycmF5PFBvaW50PiwgcDogUG9pbnQpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGlmKHAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGljZXMubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdmVydGljZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYodmVydGV4LnggPT09IHAueCAmJiB2ZXJ0ZXgueSA9PT0gcC55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmRleE9mRWRnZSA9IChlZGdlczogQXJyYXk8e3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9PiwgZWRnZToge3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9KTogbnVtYmVyID0+IHtcclxuICAgICAgICBpZihlZGdlID09IG51bGwgfHwgZWRnZS52MSA9PSBudWxsIHx8IGVkZ2UudjIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWRnZXMubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IGVkZ2VzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmKChlLnYxID09PSBlZGdlLnYxICYmIGUudjIgPT09IGVkZ2UudjIpIHx8IChlLnYxID09PSBlZGdlLnYyICYmIGUudjIgPT09IGVkZ2UudjEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFBvaW50XHJcbntcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVxdWFscyA9IChwOiBQb2ludCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiBwICE9IG51bGwgJiYgcC54ID09PSB0aGlzLnggJiYgcC55ID09PSB0aGlzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCkgOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBgUG9pbnQoJHt0aGlzLnh9LCR7dGhpcy55fSlgO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9JU2hhcGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBpbXBsZW1lbnRzIElTaGFwZVxyXG57XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGxpbmVXaWR0aDogbnVtYmVyID0gNTtcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZyA9IFwiYmx1ZVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sb3I6IHN0cmluZyA9IFwicmVkXCIsIGxpbmVfd2lkdGg6IG51bWJlciA9IDIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBsaW5lX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKHggPj0gdGhpcy54ICYmIHggPD0gdGhpcy54ICsgdGhpcy53aWR0aCAmJiB5ID49IHRoaXMueSAmJiB5IDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vSVNoYXBlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4vUG9pbnRcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlXHJcbntcclxuICAgIHB1YmxpYyBwb2ludDE6IFBvaW50O1xyXG4gICAgcHVibGljIHBvaW50MjogUG9pbnQ7XHJcbiAgICBwdWJsaWMgcG9pbnQzOiBQb2ludDtcclxuICAgIHByaXZhdGUgYXJlYTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzaWduOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgeDM6IG51bWJlciwgeTM6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBvaW50MSA9IG5ldyBQb2ludCh4MSwgeTEpO1xyXG4gICAgICAgIHRoaXMucG9pbnQyID0gbmV3IFBvaW50KHgyLCB5Mik7XHJcbiAgICAgICAgdGhpcy5wb2ludDMgPSBuZXcgUG9pbnQoeDMsIHkzKTtcclxuICAgICAgICB0aGlzLmFyZWEgPSAxLzIgKiAoLXRoaXMucG9pbnQyLnkgKiB0aGlzLnBvaW50My54ICsgdGhpcy5wb2ludDEueSAqICgtdGhpcy5wb2ludDIueCArIHRoaXMucG9pbnQzLngpICsgdGhpcy5wb2ludDEueCAqICh0aGlzLnBvaW50Mi55IC0gdGhpcy5wb2ludDMueSkgKyB0aGlzLnBvaW50Mi54ICogdGhpcy5wb2ludDMueSk7XHJcbiAgICAgICAgdGhpcy5zaWduID0gdGhpcy5hcmVhIDwgMCA/IC0xIDogMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5wb2ludDEueCwgdGhpcy5wb2ludDEueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnBvaW50Mi54LCB0aGlzLnBvaW50Mi55KTtcclxuICAgICAgICBjdHgubGluZVRvKHRoaXMucG9pbnQzLngsIHRoaXMucG9pbnQzLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5wb2ludDEueCwgdGhpcy5wb2ludDEueSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyB0cnVlIGlmZiB0aGUgcG9pbnQgcCBpcyBhIHZlcnRleCBvZiB0aGUgdHJpYW5nbGVcclxuICAgIHB1YmxpYyBpc1ZlcnRleCA9IChwOiBQb2ludCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50MS5lcXVhbHMocCkgfHwgdGhpcy5wb2ludDIuZXF1YWxzKHApIHx8IHRoaXMucG9pbnQzLmVxdWFscyhwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodHRwOi8vanNmaWRkbGUubmV0L1BlcnJvQVpVTC96ZGFZOC8xL1xyXG4gICAgcHVibGljIGNvbnRhaW5zID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgdmFyIHMgPSAodGhpcy5wb2ludDEueSAqIHRoaXMucG9pbnQzLnggLSB0aGlzLnBvaW50MS54ICogdGhpcy5wb2ludDMueSArICh0aGlzLnBvaW50My55IC0gdGhpcy5wb2ludDEueSkgKiB4ICsgKHRoaXMucG9pbnQxLnggLSB0aGlzLnBvaW50My54KSAqIHkpICogdGhpcy5zaWduO1xyXG4gICAgICAgIHZhciB0ID0gKHRoaXMucG9pbnQxLnggKiB0aGlzLnBvaW50Mi55IC0gdGhpcy5wb2ludDEueSAqIHRoaXMucG9pbnQyLnggKyAodGhpcy5wb2ludDEueSAtIHRoaXMucG9pbnQyLnkpICogeCArICh0aGlzLnBvaW50Mi54IC0gdGhpcy5wb2ludDEueCkgKiB5KSAqIHRoaXMuc2lnbjtcclxuICAgICAgICByZXR1cm4gKHMgPiAwICYmIHQgPiAwICYmIChzICsgdCkgPCAyICogdGhpcy5hcmVhICogdGhpcy5zaWduKSB8fCAodGhpcy5pc1ZlcnRleChuZXcgUG9pbnQoeCwgeSkpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbnRlcmFjdGlvblxyXG57XHJcbiAgICAvLyBpdGVtIGNhbiBiZSBudWxsXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaXRlbTogSXRlbSkge31cclxuXHJcbiAgICAvLyBpbnRlcmFjdCB3aXRoIHRoZSBvYmplY3RcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBpbnRlcmFjdChpdGVtOiBJdGVtKTogIHt0ZXh0OiBzdHJpbmcsIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBpdGVtczogQXJyYXk8SXRlbT59O1xyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKCk6IEl0ZW1cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SlNPTkxvYWRlcn0gZnJvbSBcIi4uL3Jlc291cmNlcy9KU09OTG9hZGVyXCJcclxuaW1wb3J0IHtJbWFnZUxvYWRlcn0gZnJvbSBcIi4uL3Jlc291cmNlcy9JbWFnZUxvYWRlclwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi4vc3ByaXRlcy9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4uL3Nwcml0ZXMvU3ByaXRlXCJcclxuaW1wb3J0IHtTdGF0aWNTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL1N0YXRpY1Nwcml0ZVwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtJbnRlcmFjdGFibGVTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL0ludGVyYWN0YWJsZVNwcml0ZVwiXHJcbmltcG9ydCB7TlBDU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9OUENTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4uL3Nwcml0ZXMvU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtOYXZNZXNofSBmcm9tIFwiLi4vY29sbGlzaW9uL05hdk1lc2hcIlxyXG5pbXBvcnQge1RyaWFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1RyaWFuZ2xlXCJcclxuaW1wb3J0IHtJbnRlcmFjdGlvbn0gIGZyb20gXCIuL0ludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtSZWNlaXZlSXRlbUludGVyYWN0aW9ufSBmcm9tIFwiLi9SZWNlaXZlSXRlbUludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL0NpcmNsZVwiXHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RhbmdsZVwiXHJcbmltcG9ydCB7Q29udmVyc2F0aW9ufSBmcm9tIFwiLi4vY2hhdC9Db252ZXJzYXRpb25cIlxyXG5pbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4uL2NoYXQvRGlhbG9nXCJcclxuaW1wb3J0IHtDb250aW51ZURpYWxvZ30gZnJvbSBcIi4uL2NoYXQvQ29udGludWVEaWFsb2dcIlxyXG5pbXBvcnQge09wdGlvbkRpYWxvZ30gZnJvbSBcIi4uL2NoYXQvT3B0aW9uRGlhbG9nXCJcclxuaW1wb3J0IHtSZWNlaXZlSXRlbURpYWxvZ30gZnJvbSBcIi4uL2NoYXQvUmVjZWl2ZUl0ZW1EaWFsb2dcIlxyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsXHJcbntcclxuICAgIHN0YXRpYyBsb2FkTGV2ZWwocGF0aDogc3RyaW5nLCBpdGVtczogYW55KTogUHJvbWlzZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsZXZlbERhdGFQcm9taXNlID0gSlNPTkxvYWRlci5sb2FkSlNPTkZpbGUocGF0aCkudGhlbigobGV2ZWxEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHRleHR1cmUgYXRsYXNcclxuICAgICAgICAgICAgICAgIGxldCBhdGxhcyA9IG5ldyBUZXh0dXJlQXRsYXMobGV2ZWxEYXRhLnRleHR1cmVfYXRsYXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZUF0bGFzUHJvbWlzZSA9IGF0bGFzLmxvYWQoKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogdGV4dHVyZSBhdGxhcyBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFsbFByb21pc2VzID0gW3RleHR1cmVBdGxhc1Byb21pc2VdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgc3ByaXRlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRpY1Nwcml0ZXMgPSBuZXcgQXJyYXk8U3RhdGljU3ByaXRlPigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVyYWN0YWJsZVNwcml0ZXMgPSBuZXcgQXJyYXk8SW50ZXJhY3RhYmxlU3ByaXRlPigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5wY1Nwcml0ZXMgPSBuZXcgQXJyYXk8TlBDU3ByaXRlPigpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IG9iaiBvZiBsZXZlbERhdGEuc3ByaXRlcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihvYmoudHlwZSA9PSBcImludGVyYWN0YWJsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcmFjdGlvbnMgPSBuZXcgQXJyYXk8SW50ZXJhY3Rpb24+KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBpbnRlciBvZiBvYmouaW50ZXJhY3Rpb25zKSAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgaW50ZXJhY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGludGVyLnR5cGUgPT0gXCJyZWNlaXZlX2l0ZW1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNlaXZlSXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgaXRtIG9mIGludGVyLml0ZW1zX3JlY2VpdmVkKSAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiByZWNlaXZlIGl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlSXRlbXMucHVzaChpdGVtc1tpdG1dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zLnB1c2gobmV3IFJlY2VpdmVJdGVtSW50ZXJhY3Rpb24oaW50ZXIuaXRlbSA/IGl0ZW1zW2ludGVyLml0ZW1dIDogbnVsbCwgaW50ZXIuc3VjY2Vzc190ZXh0LCBpbnRlci5mYWlsX3RleHQsIG5ldyBBdWRpbyhpbnRlci5zdWNjZXNzX2F1ZGlvKSwgbmV3IEF1ZGlvKGludGVyLmZhaWxfYXVkaW8pLCByZWNlaXZlSXRlbXMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGVTcHJpdGVzLnB1c2gobmV3IEludGVyYWN0YWJsZVNwcml0ZShvYmoueCwgb2JqLnksIG9iai5zY2FsZSwgb2JqLm9yaWdpbl9ob3Jpem9udGFsLCBvYmoub3JpZ2luX3ZlcnRpY2FsLCBhdGxhcywgb2JqLmltYWdlX25hbWUsIG9iai5leGFtaW5lX3RleHQsIG5ldyBBdWRpbyhvYmouZXhhbWluZV9hdWRpbyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENpcmNsZShvYmoueCwgb2JqLnksIG9iai5pbnRlcmFjdGlvbl9yYWRpdXMpLCBuZXcgUmVjdGFuZ2xlKG9iai54LW9iai5jbGlja196b25lX3dpZHRoLzIsIG9iai55LW9iai5jbGlja196b25lX2hlaWdodC8yLCBvYmouY2xpY2tfem9uZV93aWR0aCwgb2JqLmNsaWNrX3pvbmVfaGVpZ2h0KSwgaW50ZXJhY3Rpb25zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKG9iai50eXBlID09IFwibnBjXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIGFuaW1hdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF0bGFzID0gbmV3IFRleHR1cmVBdGxhcyhvYmouYXRsYXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5pbWF0aW9uczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdGxhc0xvYWRlZFByb21pc2UgPSBhdGxhcy5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHNlcXVlbmNlTmFtZSBpbiBvYmouYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcSA9IG9iai5hbmltYXRpb25zW3NlcXVlbmNlTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbSA9IG5ldyBTcHJpdGVBbmltYXRpb24oc2VxLm51bV9mcmFtZXMsIGF0bGFzLCBzZXF1ZW5jZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaChhbmltKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnBjID0gbmV3IE5QQ1Nwcml0ZShvYmoueCwgb2JqLnksIG9iai5zY2FsZSwgb2JqLm9yaWdpbl9ob3Jpem9udGFsLCBvYmoub3JpZ2luX3ZlcnRpY2FsLCBhbmltYXRpb25zLCBvYmouZXhhbWluZV90ZXh0LCBuZXcgQXVkaW8ob2JqLmV4YW1pbmVfYXVkaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2lyY2xlKG9iai54LCBvYmoueSwgb2JqLmludGVyYWN0aW9uX3JhZGl1cyksIG5ldyBSZWN0YW5nbGUob2JqLngtb2JqLmNsaWNrX3pvbmVfd2lkdGgvMiwgb2JqLnktb2JqLmNsaWNrX3pvbmVfaGVpZ2h0LzIsIG9iai5jbGlja196b25lX3dpZHRoLCBvYmouY2xpY2tfem9uZV9oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXZlbC5idWlsZENvbnZlcnNhdGlvbihvYmosIGl0ZW1zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucGMuc2V0U3RhcnRQb3Mob2JqLngsIG9iai55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wYy5zZXREZXB0aFNjYWxlKGxldmVsRGF0YS5kZXB0aF9zY2FsZV95KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wY1Nwcml0ZXMucHVzaChucGMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJucGMgYXRsYXMgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkIE5QQyBzcHJpdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2goYXRsYXNMb2FkZWRQcm9taXNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTcHJpdGVzLnB1c2gobmV3IFN0YXRpY1Nwcml0ZShvYmoueCwgb2JqLnksIG9iai5zY2FsZSwgb2JqLm9yaWdpbl9ob3Jpem9udGFsLCBvYmoub3JpZ2luX3ZlcnRpY2FsLCBhdGxhcywgb2JqLmltYWdlX25hbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBuYXZtZXNoXHJcbiAgICAgICAgICAgICAgICBsZXQgdHJpcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB0cmkgb2YgbGV2ZWxEYXRhLm5hdm1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmlzLnB1c2gobmV3IFRyaWFuZ2xlKHRyaS54MSwgdHJpLnkxLCB0cmkueDIsIHRyaS55MiwgdHJpLngzLCB0cmkueTMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBuYXZtZXNoID0gbmV3IE5hdk1lc2godHJpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NlbmUgZmlsZXMgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2Ygc3RhdGljU3ByaXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUucmVmcmVzaEltYWdlKCk7ICAvLyB0ZXh0dXJlIGF0bGFzIHByb2JhYmx5IGhhZG4ndCBsb2FkZWQgd2hlbiBzcHJpdGUgd2FzIGluaXRpYWxpc2VkIHNvIHJlZnJlc2ggaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUucmVmcmVzaEltYWdlKCk7ICAvLyB0ZXh0dXJlIGF0bGFzIHByb2JhYmx5IGhhZG4ndCBsb2FkZWQgd2hlbiBzcHJpdGUgd2FzIGluaXRpYWxpc2VkIHNvIHJlZnJlc2ggaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyd0ZXh0dXJlQXRsYXMnOiBhdGxhcywgJ3NjZW5lU2NhbGUnOiBsZXZlbERhdGEuc2NlbmVfc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxheWVyU3RhcnRYJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydF94LCAncGxheWVyU3RhcnRZJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydF95LCAncGxheWVyU3RhcnRzJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVwdGhTY2FsZVknOiBsZXZlbERhdGEuZGVwdGhfc2NhbGVfeSwgJ25hdm1lc2gnOiBuYXZtZXNoLCAnc3RhdGljU3ByaXRlcyc6IHN0YXRpY1Nwcml0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJhY3RhYmxlU3ByaXRlcyc6IGludGVyYWN0YWJsZVNwcml0ZXMsICducGNTcHJpdGVzJzogbnBjU3ByaXRlc30pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBmYWlsZWQgdG8gbG9hZCBsZXZlbFwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRDb252ZXJzYXRpb24oc3ByaXRlT2JqOiBhbnksIGl0ZW1zOiBhbnkpOiBDb252ZXJzYXRpb25cclxuICAgIHtcclxuICAgICAgICBpZihzcHJpdGVPYmouY29udmVyc2F0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYoc3ByaXRlT2JqLmNvbnZlcnNhdGlvbi5maXJzdF9kaWFsb2cgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb252ZXJzYXRpb24oTGV2ZWwuYnVpbGREaWFsb2coc3ByaXRlT2JqLmNvbnZlcnNhdGlvbi5maXJzdF9kaWFsb2csIGl0ZW1zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGJ1aWxkRGlhbG9nKGRpYWxvZzogYW55LCBpdGVtczogYW55KTogRGlhbG9nXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZGlhbG9nLnR5cGUgPT0gXCJjb250aW51ZVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0RGlhbG9nOiBEaWFsb2c7XHJcbiAgICAgICAgICAgIGlmKGRpYWxvZy5uZXh0X2RpYWxvZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0RGlhbG9nID0gTGV2ZWwuYnVpbGREaWFsb2coZGlhbG9nLm5leHRfZGlhbG9nLCBpdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZURpYWxvZyhkaWFsb2cudGV4dCwgZGlhbG9nLnNwZWFrZXIsIG5leHREaWFsb2cpO1xyXG4gICAgICAgIH0gZWxzZSBpZihkaWFsb2cudHlwZSA9PSBcIm9wdGlvblwiKSB7XHJcbiAgICAgICAgICAgIGxldCBvcHRpb25zID0ge307XHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRpYWxvZyBvYmplY3QgZm9yIGVhY2ggb3B0aW9uXHJcbiAgICAgICAgICAgIGZvcihsZXQgb3B0TmFtZSBpbiBkaWFsb2cub3B0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgb3B0aW9uc1tvcHROYW1lXSA9IExldmVsLmJ1aWxkRGlhbG9nKGRpYWxvZy5vcHRpb25zW29wdE5hbWVdLCBpdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBPcHRpb25EaWFsb2coZGlhbG9nLnRleHQsIGRpYWxvZy5zcGVha2VyLCBvcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYoZGlhbG9nLnR5cGUgPT0gXCJyZWNlaXZlX2l0ZW1cIikge1xyXG4gICAgICAgICAgICBsZXQgbmV4dERpYWxvZzogRGlhbG9nO1xyXG4gICAgICAgICAgICBpZihkaWFsb2cubmV4dF9kaWFsb2cgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV4dERpYWxvZyA9IExldmVsLmJ1aWxkRGlhbG9nKGRpYWxvZy5uZXh0X2RpYWxvZywgaXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpdGVtc0xvc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGlkIG9mIGRpYWxvZy5pdGVtc19sb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc0xvc3QucHVzaChpdGVtc1tpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpdGVtc1JlY2VpdmVkID0gW107XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBpZCBvZiBkaWFsb2cuaXRlbXNfcmVjZWl2ZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zUmVjZWl2ZWQucHVzaChpdGVtc1tpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVjZWl2ZUl0ZW1EaWFsb2coZGlhbG9nLnRleHQsIGRpYWxvZy5zcGVha2VyLCBuZXh0RGlhbG9nLCBpdGVtc0xvc3QsIGl0ZW1zUmVjZWl2ZWQpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHtJbnRlcmFjdGlvbn0gZnJvbSBcIi4vSW50ZXJhY3Rpb25cIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNlaXZlSXRlbUludGVyYWN0aW9uIGV4dGVuZHMgSW50ZXJhY3Rpb25cclxue1xyXG4gICAgLy8gaXRlbSBjYW4gYmUgbnVsbFxyXG4gICAgY29uc3RydWN0b3IoaXRlbTogSXRlbSwgcHJvdGVjdGVkIHN1Y2Nlc3NUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBmYWlsVGV4dDogc3RyaW5nLFxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgc3VjY2Vzc0F1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgZmFpbEF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgaXRlbXNSZWNlaXZlZDogQXJyYXk8SXRlbT4pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgb2JqZWN0XHJcbiAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBpdGVtcyByZWNlaXZlZCBmcm9tIHRoZSBpbnRlcmFjdGlvblxyXG4gICAgcHVibGljIGludGVyYWN0KGl0ZW06IEl0ZW0pOiB7dGV4dDogc3RyaW5nLCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgaXRlbXM6IEFycmF5PEl0ZW0+fVxyXG4gICAge1xyXG4gICAgICAgIGlmKGl0ZW0gPT0gdGhpcy5pdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt0ZXh0OiB0aGlzLnN1Y2Nlc3NUZXh0LCBhdWRpbzogdGhpcy5zdWNjZXNzQXVkaW8sIGl0ZW1zOiB0aGlzLml0ZW1zUmVjZWl2ZWR9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHt0ZXh0OiB0aGlzLmZhaWxUZXh0LCBhdWRpbzogdGhpcy5mYWlsQXVkaW8sIGl0ZW1zOiBudWxsfTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmV4cG9ydCBsZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdENhbnZhc0FuZENvbnRleHQoKVxyXG57XHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPSdkZXN0aW5hdGlvbi1vdmVyJztcclxuICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlOyAgIC8vIGVuYWJsZSBhbnRpLWFsaWFzaW5nIG9mIGltYWdlc1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXJcclxue1xyXG4gICAgcHJpdmF0ZSBwcmltYXJ5TW91c2VEb3duQ2FsbGJhY2tzOiBBcnJheTwoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ+ID0gQXJyYXk8KCkgPT4gdm9pZD4oKTtcclxuICAgIHByaXZhdGUgc2Vjb25kYXJ5TW91c2VEb3duQ2FsbGJhY2tzOiBBcnJheTwoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ+ID0gQXJyYXk8KCkgPT4gdm9pZD4oKTtcclxuICAgIHByaXZhdGUgdG91Y2hUaW1lcjogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSB0b3VjaER1cmF0aW9uOiBudW1iZXIgPSA1MDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7ICAvLyBkaXNhYmxlIHJpZ2h0IGNsaWNrIGNvbnRleHQgbWVudVxyXG4gICAgICAgIC8vIGlmKGNhbnZhcyAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2VEb3duKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2Vkb3duKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy50b3VjaHN0YXJ0KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMudG91Y2hlbmQpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2htb3ZlXCIsIHRoaXMudG91Y2htb3ZlKTtcclxuICAgICAgICAvLyB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaXJlUHJpbWFyeU1vdXNlRG93bkV2ZW50KHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBjYWxsYmFjayBvZiB0aGlzLnByaW1hcnlNb3VzZURvd25DYWxsYmFja3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYWxsYmFjayh4LCB5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaXJlU2Vjb25kYXJ5TW91c2VEb3duRXZlbnQoeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuc2Vjb25kYXJ5TW91c2VEb3duQ2FsbGJhY2tzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3VzZWRvd24gPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gbm90aWZ5IGFsbCBjYWxsYmFja3NcclxuICAgICAgICBpZihlLmJ1dHRvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVQcmltYXJ5TW91c2VEb3duRXZlbnQoZS5sYXllclgsIGUubGF5ZXJZKTtcclxuICAgICAgICB9IGVsc2UgaWYoZS5idXR0b24gPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlU2Vjb25kYXJ5TW91c2VEb3duRXZlbnQoZS5sYXllclgsIGUubGF5ZXJZKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9ubG9uZ3RvdWNoID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAvLyBmaXJlIHNlY29uZGFyeSBtb3VzZSBjbGljayBldmVudFxyXG4gICAgICAgIHRoaXMuZmlyZVNlY29uZGFyeU1vdXNlRG93bkV2ZW50KGUudG91Y2hlc1swXS5jbGllbnRYLCBlLnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvdWNoc3RhcnQgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB0aGlzLnRvdWNoVGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHsgdGhpcy5vbmxvbmd0b3VjaChlKTsgfSwgdGhpcy50b3VjaER1cmF0aW9uKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG91Y2hlbmQgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZih0aGlzLnRvdWNoVGltZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBjbGVhclRpbWVvdXQodGhpcy50b3VjaFRpbWVyKTtcclxuICAgICAgICAgICAgdGhpcy5maXJlUHJpbWFyeU1vdXNlRG93bkV2ZW50KGUudG91Y2hlc1swXS5jbGllbnRYLCBlLnRvdWNoZXNbMF0uY2xpZW50WSk7IC8vIGZpcmUgcHJpbWFyeSBtb3VzZSBjbGljayBldmVudFxyXG4gICAgICAgICAgICB0aGlzLnRvdWNoVGltZXIgPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG91Y2htb3ZlID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYodGhpcy50b3VjaFRpbWVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgY2xlYXJUaW1lb3V0KHRoaXMudG91Y2hUaW1lcik7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVByaW1hcnlNb3VzZURvd25FdmVudChlLnRvdWNoZXNbMF0uY2xpZW50WCwgZS50b3VjaGVzWzBdLmNsaWVudFkpOyAvLyBmaXJlIHByaW1hcnkgbW91c2UgY2xpY2sgZXZlbnRcclxuICAgICAgICAgICAgdGhpcy50b3VjaFRpbWVyID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFByaW1hcnlNb3VzZURvd25DYWxsYmFjayhjYWxsYmFjazogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucHJpbWFyeU1vdXNlRG93bkNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkU2Vjb25kYXJ5TW91c2VEb3duQ2FsbGJhY2soY2FsbGJhY2s6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNlY29uZGFyeU1vdXNlRG93bkNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0l0ZW19IGZyb20gXCIuL0l0ZW1cIlxyXG5cclxuZXhwb3J0IGNsYXNzIEludmVudG9yeVxyXG57XHJcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KDkpOyAvLyBNQVhfTlVNX0lURU1TID0gOVxyXG5cclxuICAgIHB1YmxpYyBhZGRJdGVtKGl0ZW06IEl0ZW0pOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgaXRlbSB0byB0aGUgZmlyc3QgYXZhaWxhYmxlIHNsb3RcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLml0ZW1zW2luZGV4XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBJdGVtKTogSXRlbVxyXG4gICAge1xyXG4gICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNbaW5kZXhdID09PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZWQgXCIgKyBpdGVtLmdldE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW1CeUluZGV4KGluZGV4OiBudW1iZXIpOiBJdGVtXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaW5kZXggIT0gbnVsbCAmJiBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbSA9IHRoaXMuaXRlbXNbaW5kZXhdO1xyXG4gICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IG51bGw7XHJcbiAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW92ZUl0ZW0oaXRlbTogSXRlbSwgaW5kZXg6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLml0ZW1zW2luZGV4XSA9PSBudWxsKSB7IC8vIGlmIG5ldyBpdGVtc2xvdCBpcyBmcmVlXHJcbiAgICAgICAgICAgIGxldCB4ID0gdGhpcy5yZW1vdmVJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZih4ICE9IG51bGwpIHsgLy8gY2hlY2sgdGhlIHBsYXllciBhY3R1YWxseSBoYWQgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW1zKCk6IEFycmF5PEl0ZW0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEl0ZW1cclxue1xyXG4gICAgcHJvdGVjdGVkIGNvbWJpbmF0aW9uczogQXJyYXk8e290aGVyOiBJdGVtLCBvdXQ6IEFycmF5PEl0ZW0+fT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG5hbWU6IHN0cmluZywgcHJvdGVjdGVkIGV4YW1pbmVUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBleGFtaW5lQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBpbWdwYXRoOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb21iaW5hdGlvbnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tYmluZShvdGhlcjogSXRlbSk6IEFycmF5PEl0ZW0+XHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGNtYiBvZiB0aGlzLmNvbWJpbmF0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpdGVtIGlzIGNvbWJpbmFibGUsIHJldHVybiB0aGUgYXJyYXkgb2YgaXRlbXMgY3JlYXRlZFxyXG4gICAgICAgICAgICBpZihvdGhlciA9PT0gY21iLm90aGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY21iLm91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENvbWJpbmF0aW9uKG90aGVyOiBJdGVtLCBvdXQ6IEFycmF5PEl0ZW0+KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKG90aGVyICE9IG51bGwgJiYgb3V0ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJpbmF0aW9ucy5wdXNoKHtvdGhlcjogb3RoZXIsIG91dDogb3V0fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lQXVkaW8oKTogSFRNTEF1ZGlvRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVBdWRpbztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW1hZ2VQYXRoKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltZ3BhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBgSXRlbSgke3RoaXMubmFtZX0pYDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2NhbnZhcywgY3R4LCBpbml0Q2FudmFzQW5kQ29udGV4dH0gZnJvbSBcIi4vZ2xvYlwiXHJcbmltcG9ydCB7TmF2TWVzaH0gZnJvbSBcIi4vY29sbGlzaW9uL05hdk1lc2hcIlxyXG5pbXBvcnQge1RyaWFuZ2xlfSBmcm9tIFwiLi9jb2xsaXNpb24vVHJpYW5nbGVcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vY29sbGlzaW9uL0lTaGFwZVwiXHJcbmltcG9ydCB7SW5wdXRNYW5hZ2VyfSBmcm9tIFwiLi9pbnB1dC9JbnB1dE1hbmFnZXJcIlxyXG5pbXBvcnQge0ltYWdlTG9hZGVyfSBmcm9tIFwiLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXJcIlxyXG5pbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gXCIuL3Jlc291cmNlcy9KU09OTG9hZGVyXCJcclxuaW1wb3J0IHtMZXZlbH0gZnJvbSBcIi4vZ2FtZS9MZXZlbFwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL1N0YXRpY1Nwcml0ZVwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge0ludGVyYWN0YWJsZVNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGVcIlxyXG5pbXBvcnQge05hdlNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9OYXZTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vc3ByaXRlcy9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4vc3ByaXRlcy9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge1BsYXllclNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9QbGF5ZXJTcHJpdGVcIlxyXG5pbXBvcnQge05QQ1Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9OUENTcHJpdGVcIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4vaXRlbXMvSW52ZW50b3J5XCJcclxuaW1wb3J0IHtDb252ZXJzYXRpb259IGZyb20gXCIuL2NoYXQvQ29udmVyc2F0aW9uXCJcclxuaW1wb3J0IHtEaWFsb2d9IGZyb20gXCIuL2NoYXQvRGlhbG9nXCJcclxuaW1wb3J0IHtDb250aW51ZURpYWxvZ30gZnJvbSBcIi4vY2hhdC9Db250aW51ZURpYWxvZ1wiXHJcbmltcG9ydCB7T3B0aW9uRGlhbG9nfSBmcm9tIFwiLi9jaGF0L09wdGlvbkRpYWxvZ1wiXHJcblxyXG5sZXQgaW5wdXRNYW5hZ2VyO1xyXG5sZXQgaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5sZXQgc2NlbmVTY2FsZTogbnVtYmVyO1xyXG5sZXQgbGV2ZWxTY2FsZTogbnVtYmVyO1xyXG5sZXQgZGVwdGhTY2FsZVk6IG51bWJlcjtcclxubGV0IHN0YXRpY1Nwcml0ZXMgPSBuZXcgQXJyYXk8U3RhdGljU3ByaXRlPigpO1xyXG5sZXQgaW50ZXJhY3RhYmxlU3ByaXRlcyA9IG5ldyBBcnJheTxJbnRlcmFjdGFibGVTcHJpdGU+KCk7XHJcbmxldCBucGNTcHJpdGVzID0gbmV3IEFycmF5PE5QQ1Nwcml0ZT4oKTtcclxubGV0IHBsYXllclNwcml0ZTtcclxubGV0IG5hdm1lc2g7XHJcblxyXG5sZXQgaXRlbXMgPSB7fTsgICAgICAgICAvLyBkYXRhYmFzZSBvZiBpdGVtc1xyXG5sZXQgaXRlbXNsb3RidG5zID0gW107ICAvLyBhcnJheSBvZiBpdGVtc2xvdCBodG1sIGJ1dHRvbnNcclxubGV0IGl0ZW1idG5zID0gW107ICAgICAgLy8gYXJyYXkgb2YgaXRlbSBodG1sIGJ1dHRvbnNcclxubGV0IGludmVudCA9IG5ldyBJbnZlbnRvcnkoKTsgLy8gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG5sZXQgc2VsZWN0ZWRJdGVtOyAgICAgICAvLyB1c2VyIGNhbiBzZWxlY3QgYW4gaXRlbSBmcm9tIGludmVudG9yeSBieSBsZWZ0IGNsaWNraW5nXHJcbmxldCBzZWxlY3RlZEl0ZW1CdG47XHJcblxyXG5sZXQgZmJXaWR0aDtcclxubGV0IGZiSGVpZ2h0O1xyXG5cclxubGV0IGxhc3RUaW1lO1xyXG5cclxuZnVuY3Rpb24gZ2FtZUxvb3AoKSAvLyBUT0RPIC0gc3BsaXQgZHJhdyBpbnRvIHVwZGF0ZSBhbmQgZHJhdyBmdW5jdGlvbnNcclxue1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgZmJXaWR0aCwgZmJIZWlnaHQpO1xyXG5cclxuICAgIC8vIHNldCBvcmlnaW4gdG8gdGhlIGNhbnZhcydzIGNlbnRyZVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUoZmJXaWR0aC8yLCBmYkhlaWdodC8yKTtcclxuICAgIGN0eC5zY2FsZShzY2VuZVNjYWxlLCBzY2VuZVNjYWxlKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XHJcbiAgICBjb25zdCBkZWx0YVRpbWUgPSBjdXJyZW50VGltZSAtIGxhc3RUaW1lO1xyXG5cclxuICAgIC8vIGRyYXcgdGhlIHNjZW5lIHNwZWNpZmljIHNwcml0ZXNcclxuICAgIGZvcihjb25zdCBzcHJpdGUgb2Ygc3RhdGljU3ByaXRlcylcclxuICAgIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3IHRoZSBzcHJpdGVzIHdoaWNoIHRoZSBwbGF5ZXIgY2FuIGludGVyYWN0IHdpdGhcclxuICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcylcclxuICAgIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3IHRoZSBOUEMgc3ByaXRlc1xyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBucGNTcHJpdGVzKVxyXG4gICAge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdGhlIHBsYXllciBzcHJpdGVcclxuICAgIHBsYXllclNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgIC8vIERFQlVHIC0gZHJhdyB0aGUgY29sbGlzaW9uIGJveGVzXHJcbiAgICBuYXZtZXNoLmRyYXcoKTtcclxuXHJcbiAgICAvLyByZXN0b3JlIGNhbnZhcyB0byBvcmlnaW5hbCBzZXR0aW5nc1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJbnB1dENhbGxiYWNrcygpIHtcclxuICAgIGlucHV0TWFuYWdlci5hZGRQcmltYXJ5TW91c2VEb3duQ2FsbGJhY2soKG1vdXNleDogbnVtYmVyLCBtb3VzZXk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGxldCB4ID0gKG1vdXNleCAtIGNhbnZhcy5vZmZzZXRMZWZ0IC0gZmJXaWR0aC8yKSAvIHNjZW5lU2NhbGU7XHJcbiAgICAgICAgbGV0IHkgPSAobW91c2V5IC0gY2FudmFzLm9mZnNldFRvcCAtIGZiSGVpZ2h0LzIpIC8gc2NlbmVTY2FsZTtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImxlZnQgbW91c2UgZG93biBhdCAoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiKVwiKTtcclxuICAgICAgICBsZXQgaW50ZXJhY3RlZFdpdGhTcHJpdGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIGNsaWNrcyBvbiBpbnRlcmFjdGFibGUgKHN0YXRpYykgc3ByaXRlc1xyXG4gICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5pbkludGVyYWN0aW9uWm9uZShwbGF5ZXJTcHJpdGUueCwgcGxheWVyU3ByaXRlLnkpICYmIHNwcml0ZS5pbkNsaWNrWm9uZSh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgc3ByaXRlXHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBzcHJpdGUuaW50ZXJhY3Qoc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICAgICAgICAgIGlmKG9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUob2JqLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBpdG0gb2Ygb2JqLml0ZW1zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVudC5hZGRJdGVtKGl0bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBbGxJdGVtc0Rpc3BsYXllZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZihvYmouYXVkaW8gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvYmouYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUoXCJUaGF0J3MgYSBydWJiaXNoIGlkZWEhXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW50ZXJhY3RlZFdpdGhTcHJpdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGZvciBjbGlja3Mgb24gTlBDIHNwcml0ZXNcclxuICAgICAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIG5wY1Nwcml0ZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihzcHJpdGUuaW5JbnRlcmFjdGlvblpvbmUocGxheWVyU3ByaXRlLngsIHBsYXllclNwcml0ZS55KSAmJiBzcHJpdGUuaW5DbGlja1pvbmUoeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIG9wZW5DaGF0R1VJKHNwcml0ZS5nZXRDb252ZXJzYXRpb24oKSk7XHJcbiAgICAgICAgICAgICAgICBpbnRlcmFjdGVkV2l0aFNwcml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmKCFpbnRlcmFjdGVkV2l0aFNwcml0ZSkge1xyXG4gICAgICAgICAgICBsZXQgd2F5cG9pbnRzID0gbmF2bWVzaC5nZXRXYXlwb2ludHMocGxheWVyU3ByaXRlLngsIHBsYXllclNwcml0ZS55LCB4LCB5KTtcclxuICAgICAgICAgICAgcGxheWVyU3ByaXRlLnNldFdheXBvaW50cyh3YXlwb2ludHMpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlucHV0TWFuYWdlci5hZGRTZWNvbmRhcnlNb3VzZURvd25DYWxsYmFjaygobW91c2V4OiBudW1iZXIsIG1vdXNleTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgbGV0IHggPSAobW91c2V4IC0gY2FudmFzLm9mZnNldExlZnQgLSBmYldpZHRoLzIpIC8gc2NlbmVTY2FsZTtcclxuICAgICAgICBsZXQgeSA9IChtb3VzZXkgLSBjYW52YXMub2Zmc2V0VG9wIC0gZmJIZWlnaHQvMikgLyBzY2VuZVNjYWxlO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHQgbW91c2UgZG93biBhdCAoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiKVwiKTtcclxuXHJcbiAgICAgICAgLy8gY2hlY2sgZm9yIGNsaWNrcyBvbiBpbnRlcmFjdGFibGUgKHN0YXRpYykgc3ByaXRlc1xyXG4gICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHNwcml0ZS5pbkNsaWNrWm9uZSh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgLy8gZXhhbWluZSB0aGUgaW50ZXJhY3RhYmxlIHNwcml0ZVxyXG4gICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUoc3ByaXRlLmdldEV4YW1pbmVUZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgaWYoc3ByaXRlLmdldEV4YW1pbmVBdWRpbygpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBzcHJpdGUuZ2V0RXhhbWluZUF1ZGlvKCkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNoZWNrIGZvciBjbGlja3Mgb24gTlBDIHNwcml0ZXNcclxuICAgICAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIG5wY1Nwcml0ZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZihzcHJpdGUuaW5DbGlja1pvbmUoeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgIC8vIGV4YW1pbmUgdGhlIE5QQyBzcHJpdGVcclxuICAgICAgICAgICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKHNwcml0ZS5nZXRFeGFtaW5lVGV4dCgpKTtcclxuICAgICAgICAgICAgICAgIGlmKHNwcml0ZS5nZXRFeGFtaW5lQXVkaW8oKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3ByaXRlLmdldEV4YW1pbmVBdWRpbygpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGxvYWRQbGF5ZXJTcHJpdGUoKTogUHJvbWlzZTxBbmltYXRlZFNwcml0ZT5cclxue1xyXG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPEFuaW1hdGVkU3ByaXRlPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgbGV0IGF0bGFzID0gbmV3IFRleHR1cmVBdGxhcyhcInJlcy9hdGxhc2VzL2FuaW1hdGVkLnBuZ1wiKTtcclxuICAgICAgICBsZXQgcGxheWVyU3ByaXRlO1xyXG4gICAgICAgIGNvbnN0IGF0bGFzTG9hZGVkUHJvbWlzZSA9IGF0bGFzLmxvYWQoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgVEVTVF9BTklNQVRJT04gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKDIsIGF0bGFzLCBcImFuaW1hdGVkXCIpO1xyXG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUgPSBuZXcgUGxheWVyU3ByaXRlKDEwMCwgMjAwLCAxLjI1LCBcImNlbnRyZVwiLCBcInRvcFwiLCBbVEVTVF9BTklNQVRJT05dKTtcclxuICAgICAgICAgICAgcGxheWVyU3ByaXRlLnNldEN1cnJlbnRBbmltYXRpb24oMCk7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkIHBsYXllciBzcHJpdGUgdGV4dHVyZSBhdGxhcycpO1xyXG4gICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIGxldCBzcGVlY2hCdWJibGVJbWFnZTtcclxuICAgICAgICBjb25zdCBzcGVlY2hCdWJibGVMb2FkZWRQcm9taXNlID0gSW1hZ2VMb2FkZXIubG9hZEltYWdlKFwicmVzL2ltYWdlcy9zcGVlY2hfYnViYmxlLnBuZ1wiKS50aGVuKChpbWcpID0+IHtcclxuICAgICAgICAgICAgc3BlZWNoQnViYmxlSW1hZ2UgPSBpbWc7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBzcGVlY2ggYnViYmxlIGltYWdlIGNvdWxkIG5vdCBiZSBsb2FkZWRcIik7XHJcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgUHJvbWlzZS5hbGwoW2F0bGFzTG9hZGVkUHJvbWlzZSwgc3BlZWNoQnViYmxlTG9hZGVkUHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0U3BlZWNoQnViYmxlSW1hZ2Uoc3BlZWNoQnViYmxlSW1hZ2UpO1xyXG4gICAgICAgICAgICByZXNvbHZlKHBsYXllclNwcml0ZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gcHJvZ3JhbSBlbnRyeSBwb2ludFxyXG53aW5kb3cub25sb2FkID0gKCkgPT5cclxue1xyXG4gICAgaW5pdENhbnZhc0FuZENvbnRleHQoKTtcclxuICAgIGlucHV0TWFuYWdlciA9IG5ldyBJbnB1dE1hbmFnZXIoY2FudmFzKTtcclxuICAgIGFkZElucHV0Q2FsbGJhY2tzKCk7XHJcblxyXG4gICAgLy8gc2V0IHRoZSBjYW52YXMgc2l6ZVxyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjk1O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuOTU7XHJcbiAgICBmYldpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgZmJIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG5cclxuICAgIC8vIGxldmVsIHNldHVwIGRhdGFcclxuICAgIGxldCBwbGF5ZXJTdGFydFggPSAwO1xyXG4gICAgbGV0IHBsYXllclN0YXJ0WSA9IDA7XHJcblxyXG4gICAgY29uc3QgbG9hZFBsYXllclNwcml0ZVByb21pc2UgPSBsb2FkUGxheWVyU3ByaXRlKCkudGhlbigoc3ByaXRlKSA9PiB7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlID0gc3ByaXRlO1xyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3JcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCBsb2FkSXRlbXNQcm9taXNlID0gSlNPTkxvYWRlci5sb2FkSlNPTkZpbGUoXCJyZXMvaXRlbXMvaXRlbXMuanNvblwiKS50aGVuKChvYmopID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKG9iai5pdGVtcylcclxuICAgICAgICBmb3IoY29uc3QgaWQgaW4gb2JqLml0ZW1zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgaXRtID0gb2JqLml0ZW1zW2lkXTtcclxuICAgICAgICAgICAgaXRlbXNbaWRdID0gbmV3IEl0ZW0oaXRtLm5hbWUsIGl0bS5leGFtaW5lX3RleHQsIG5ldyBBdWRpbyhpdG0uZXhhbWluZV9hdWRpbyksIGl0bS5pbWFnZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihjb25zdCBpZCBpbiBvYmouY29tYmluYXRpb25zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgY29tYmluYXRpb24gPSBvYmouY29tYmluYXRpb25zW2lkXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbTEgPSBpdGVtc1tjb21iaW5hdGlvbi5pdGVtMV07XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0yID0gaXRlbXNbY29tYmluYXRpb24uaXRlbTJdO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtc091dCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgaWRPdXQgb2YgY29tYmluYXRpb24uaXRlbXNfb3V0KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc091dC5wdXNoKGl0ZW1zW2lkT3V0XSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYoaXRlbTEgIT0gbnVsbCAmJiBpdGVtMiAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpdGVtMS5hZGRDb21iaW5hdGlvbihpdGVtMiwgaXRlbXNPdXQpO1xyXG4gICAgICAgICAgICAgICAgaXRlbTIuYWRkQ29tYmluYXRpb24oaXRlbTEsIGl0ZW1zT3V0KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBsb2FkUGxheWVySW52ZW50b3J5KFwiYWNrXCIpO1xyXG4gICAgICAgIGluaXRHVUlDb250cm9sbGVycygpO1xyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IGl0ZW1zIGNvdWxkIG5vdCBiZSBsb2FkZWRcIik7XHJcbiAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICByZXR1cm4gTGV2ZWwubG9hZExldmVsKFwicmVzL2xldmVscy9sZXZlbDEuanNvblwiLCBpdGVtcyk7XHJcbiAgICB9KS50aGVuKChsZXZlbERhdGEpID0+IHtcclxuICAgICAgICBpbWcgPSBsZXZlbERhdGEuYmFja2dyb3VuZEltZztcclxuICAgICAgICBzdGF0aWNTcHJpdGVzID0gbGV2ZWxEYXRhLnN0YXRpY1Nwcml0ZXM7XHJcbiAgICAgICAgaW50ZXJhY3RhYmxlU3ByaXRlcyA9IGxldmVsRGF0YS5pbnRlcmFjdGFibGVTcHJpdGVzO1xyXG4gICAgICAgIG5wY1Nwcml0ZXMgPSBsZXZlbERhdGEubnBjU3ByaXRlcztcclxuICAgICAgICBsZXZlbFNjYWxlID0gbGV2ZWxEYXRhLnNjZW5lU2NhbGUgPyBsZXZlbERhdGEuc2NlbmVTY2FsZSA6IDEuMDtcclxuICAgICAgICBzY2VuZVNjYWxlID0gbGV2ZWxTY2FsZSAqIGNhbnZhcy5oZWlnaHQvODgwOyAgLy8gc2NhbGUgYmFzZWQgb24gdGhlIGNhbnZhcyBzaXplIHNvIGdhbWUgZml0cyBvbiBzY3JlZW5cclxuICAgICAgICBkZXB0aFNjYWxlWSA9IGxldmVsRGF0YS5kZXB0aFNjYWxlWTtcclxuXHJcbiAgICAgICAgcGxheWVyU3RhcnRYID0gbGV2ZWxEYXRhLnBsYXllclN0YXJ0WDtcclxuICAgICAgICBwbGF5ZXJTdGFydFkgPSBsZXZlbERhdGEucGxheWVyU3RhcnRZO1xyXG5cclxuICAgICAgICBuYXZtZXNoID0gbGV2ZWxEYXRhLm5hdm1lc2g7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogbGV2ZWwgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIFByb21pc2UuYWxsKFtsb2FkUGxheWVyU3ByaXRlUHJvbWlzZSwgbG9hZEl0ZW1zUHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHBsYXllclNwcml0ZS54ID0gcGxheWVyU3RhcnRYO1xyXG4gICAgICAgIHBsYXllclNwcml0ZS55ID0gcGxheWVyU3RhcnRZO1xyXG4gICAgICAgIHBsYXllclNwcml0ZS5zZXRTdGFydFBvcyhwbGF5ZXJTdGFydFgsIHBsYXllclN0YXJ0WSk7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnNldERlcHRoU2NhbGUoZGVwdGhTY2FsZVkpO1xyXG4gICAgICAgIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgICAgICBnYW1lTG9vcCgpO1xyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IGdhbWUgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBvbiB3aW5kb3cgcmVzaXplIGNoYW5nZSB0aGUgc2NhbGVcclxud2luZG93Lm9ucmVzaXplID0gKCkgPT4ge1xyXG4gICAgLy8gc2V0IHRoZSBjYW52YXMgc2l6ZVxyXG4gICAgY2FudmFzLndpZHRoID0gd2luZG93LmlubmVyV2lkdGggKiAwLjk1O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IHdpbmRvdy5pbm5lckhlaWdodCAqIDAuOTU7XHJcbiAgICBmYldpZHRoID0gY2FudmFzLndpZHRoO1xyXG4gICAgZmJIZWlnaHQgPSBjYW52YXMuaGVpZ2h0O1xyXG4gICAgc2NlbmVTY2FsZSA9IGxldmVsU2NhbGUgKiBjYW52YXMuaGVpZ2h0Lzg4MDsgIC8vIHNjYWxlIGJhc2VkIG9uIHRoZSBjYW52YXMgc2l6ZSBzbyBnYW1lIGZpdHMgb24gc2NyZWVuXHJcbiAgICBjb25zb2xlLmxvZyhzY2VuZVNjYWxlKTtcclxufVxyXG5cclxuLy8gbG9hZCB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbmZ1bmN0aW9uIGxvYWRQbGF5ZXJJbnZlbnRvcnkocGF0aDogc3RyaW5nKSB7XHJcbiAgICAvLyBUT0RPIC0gbG9hZCBmcm9tIGZpbGVcclxuICAgIC8vaW52ZW50LmFkZEl0ZW0oaXRlbXNbXCIwLjAuMS0wMDFcIl0pO1xyXG4gICAgLy9pbnZlbnQuYWRkSXRlbShpdGVtc1tcIjAuMC4xLTAwMlwiXSk7XHJcbiAgICAvL2ludmVudC5hZGRJdGVtKGl0ZW1zW1wiMC4wLjEtMDAyXCJdKTtcclxuICAgIC8vaW52ZW50LmFkZEl0ZW0oaXRlbXNbXCIwLjAuMS0wMDNcIl0pO1xyXG59XHJcblxyXG4vLyBjaGF0IGd1aVxyXG5mdW5jdGlvbiBvcGVuQ2hhdEdVSShjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbikge1xyXG4gICAgaWYoY29udmVyc2F0aW9uICE9IG51bGwpIHtcclxuICAgICAgICBsZXQgY2hhdHBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0cGFuZWxcIik7XHJcbiAgICAgICAgaWYoY2hhdHBhbmVsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBjaGF0IHBhbmVsIGlmIGl0IGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgICAgIGNoYXRwYW5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoYXRwYW5lbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGF0cGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNoYXRwYW5lbC5pZCA9IFwiY2hhdHBhbmVsXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY2hhdHBhbmVsLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmVudFwiKSk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIEdVSSBmb3IgdGhlIGRpYWxvZ1xyXG4gICAgICAgIGxldCBkID0gY29udmVyc2F0aW9uLmdldEZpcnN0RGlhbG9nKCk7XHJcbiAgICAgICAgY3JlYXRlRGlhbG9nR1VJKGNoYXRwYW5lbCBhcyBIVE1MRGl2RWxlbWVudCwgZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURpYWxvZ0dVSShjaGF0cGFuZWw6IEhUTUxEaXZFbGVtZW50LCBkOiBEaWFsb2cpIHtcclxuICAgIGNoYXRwYW5lbC5pbm5lckhUTUwgPSBcIlwiOyAgIC8vIGNsZWFyIHRoZSBkaXYgb2YgcHJldmlvdXMgY29udGVudHNcclxuXHJcbiAgICAvLyBhZGQgYSBidXR0b24gZm9yIGV4aXRpbmcgdGhlIGNvbnZlcnNhdGlvblxyXG4gICAgLy8gTk9URSAtIHByb2JhYmx5IG5vdCBuZWVkZWRcclxuICAgIC8qbGV0IGV4aXRidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgZXhpdGJ0bi5jbGFzc0xpc3QuYWRkKFwiZXhpdGNoYXRidG5cIik7XHJcbiAgICBleGl0YnRuLmlubmVySFRNTCA9IFwiRXhpdCBDb252ZXJzYXRpb25cIjtcclxuICAgIGNoYXRwYW5lbC5hcHBlbmRDaGlsZChleGl0YnRuKTtcclxuICAgIGV4aXRidG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICAgICAvLyBleGl0IHRoZSBjb252ZXJzYXRpb25cclxuICAgICAgICBjaGF0cGFuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGF0cGFuZWwpO1xyXG4gICAgfTsqL1xyXG5cclxuICAgIGlmKGQgIT0gbnVsbCkge1xyXG4gICAgICAgIC8vIGFkZCB0aGUgc3BlYWtlciBpbWFnZSBiYXNlZCBvbiB3aGV0aGVyIHBsYXllciBvciBucGMgaXMgc3BlYWtpbmdcclxuICAgICAgICBsZXQgc3BlYWtlcmltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgc3BlYWtlcmltZy5zcmMgPSBcInJlcy9pbWFnZXMvcGxheWVyX2hlYWQucG5nXCI7XHJcbiAgICAgICAgc3BlYWtlcmltZy5jbGFzc0xpc3QuYWRkKGQuZ2V0U3BlYWtlcigpID09IFwicGxheWVyXCIgPyBcInBsYXllcmNoYXRoZWFkXCIgOiBcIm5wY2NoYXRoZWFkXCIpO1xyXG4gICAgICAgIGNoYXRwYW5lbC5hcHBlbmRDaGlsZChzcGVha2VyaW1nKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGxhYmVscyBhbmQgYnV0dG9ucyBmb3IgdGhpcyBkaWFsb2dcclxuICAgICAgICBkLmNyZWF0ZUdVSUVsZW1lbnQoY2hhdHBhbmVsKS50aGVuKChuZXh0RGlhbG9nOiBEaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgaWYobmV4dERpYWxvZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBhZHZhbmNlIHRvIG5leHQgZGlhbG9nXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVEaWFsb2dHVUkoY2hhdHBhbmVsLCBuZXh0RGlhbG9nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG5leHQgZGlhbG9nIGlzIG51bGwsIHRoZXJlZm9yZSwgZXhpdCBjb252ZXJzYXRpb25cclxuICAgICAgICAgICAgICAgIGNoYXRwYW5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoYXRwYW5lbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gZ3VpIGNvbnRyb2xcclxuZnVuY3Rpb24gaW5pdEdVSUNvbnRyb2xsZXJzKCkge1xyXG4gICAgLy8gZ2V0IGFsbCBvZiB0aGUgaXRlbSBzbG90IGh0bWwgYnV0dG9uc1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDFcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDJcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDNcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDRcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDVcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDZcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDdcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDhcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDlcIikpO1xyXG5cclxuICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGludmVudC5nZXRJdGVtcygpLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gaW52ZW50LmdldEl0ZW1zKClbaW5kZXhdO1xyXG4gICAgICAgIGlmKGl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBhZGQgYSBidXR0b24gZm9yIGVhY2ggaXRlbSBpbiB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbiAgICAgICAgICAgIGFkZE5ld0l0ZW1CdXR0b24oaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtc2xvdGJ0bnMubGVuZ3RoOyBpbmRleCArKylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpdGVtc2xvdGJ0biA9IGl0ZW1zbG90YnRuc1tpbmRleF07XHJcbiAgICAgICAgaXRlbXNsb3RidG4ub25jbGljayA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgb25JdGVtU2xvdENsaWNrKGl0ZW1zbG90YnRuLCBpbmRleCwgZXZ0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld0l0ZW1CdXR0b24oaXRlbXNsb3RJbmRleDogbnVtYmVyLCBpdGVtOiBJdGVtKVxyXG57XHJcbiAgICAvLyBhZGQgYSBidXR0b24gZm9yIHRoZSBpdGVtXHJcbiAgICBsZXQgaXRlbWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBpdGVtYnRuLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xyXG4gICAgaXRlbWJ0bi5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2l0ZW0uZ2V0SW1hZ2VQYXRoKCl9KTtgO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52ZW50XCIpLmluc2VydEJlZm9yZShpdGVtYnRuLCBpdGVtc2xvdGJ0bnNbaXRlbXNsb3RJbmRleF0pO1xyXG5cclxuICAgIC8vIGFkZCBhIG1vdXNlIGNsaWNrIGNhbGxiYWNrIHRvIHRoZSBuZXcgZWxlbWVudFxyXG4gICAgaXRlbWJ0bi5vbm1vdXNlZG93biA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBvbkl0ZW1DbGljayhpdGVtYnRuLCBpdGVtLCBldnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoQWxsSXRlbXNEaXNwbGF5ZWQoKVxyXG57XHJcbiAgICAvLyBmaXJzdCwgcmVtb3ZlIGFsbCBpdGVtIGJ1dHRvbnMgZnJvbSB0aGUgZG9tXHJcbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtXCIpO1xyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1zW2luZGV4XTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW52ZW50LmdldEl0ZW1zKCkubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpbnZlbnQuZ2V0SXRlbXMoKVtpbmRleF07XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgICAgICAgICAgYWRkTmV3SXRlbUJ1dHRvbihpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoSXRlbURpc3BsYXllZChpdGVtYnRuOiBIVE1MQnV0dG9uRWxlbWVudCwgaXRlbTogSXRlbSlcclxue1xyXG4gICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gY2hhbmdlIHRoZSBpbWFnZSBkaXNwbGF5ZWQgb24gdGhlIGl0ZW0gYnV0dG9uXHJcbiAgICAgICAgaXRlbWJ0bi5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2l0ZW0uZ2V0SW1hZ2VQYXRoKCl9KTtgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZW1vdmUgdGhlIGl0ZW0gYnV0dG9uIGZyb20gdGhlIGRvbVxyXG4gICAgICAgIGl0ZW1idG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtYnRuKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25JdGVtU2xvdENsaWNrKGl0ZW1zbG90YnRuOiBIVE1MQnV0dG9uRWxlbWVudCwgaXRlbXNsb3RJbmRleDogbnVtYmVyLCBldnQ6IE1vdXNlRXZlbnQpXHJcbntcclxuICAgIC8vIG1vdmUgc2VsZWN0ZWQgaXRlbSB0byB0aGlzIHNsb3RcclxuICAgIGlmKHNlbGVjdGVkSXRlbSAhPSBudWxsICYmIHNlbGVjdGVkSXRlbUJ0biAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIHByZXZpb3VzIGl0ZW1zbG90IGFuZCBhZGQgdG8gbmV3IGl0ZW1zbG90XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZGl0ZW1cIik7XHJcbiAgICAgICAgcmVmcmVzaEl0ZW1EaXNwbGF5ZWQoc2VsZWN0ZWRJdGVtQnRuLCBudWxsKTtcclxuICAgICAgICBhZGROZXdJdGVtQnV0dG9uKGl0ZW1zbG90SW5kZXgsIHNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgaW52ZW50Lm1vdmVJdGVtKHNlbGVjdGVkSXRlbSwgaXRlbXNsb3RJbmRleCk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW52ZW50LmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25JdGVtQ2xpY2soaXRlbWJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQsIGl0ZW06IEl0ZW0sIGV2dDogTW91c2VFdmVudClcclxue1xyXG4gICAgaWYoZXZ0LmJ1dHRvbiA9PT0gMCkgeyAgLy8gbGVmdCBjbGlja1xyXG4gICAgICAgIC8vIGNvbWJpbmUgMiBpdGVtcywgKGNhbid0IGNvbWJpbmUgaXRlbSB3aXRoIGl0c2VsZilcclxuICAgICAgICBpZihzZWxlY3RlZEl0ZW0gIT0gbnVsbCAmJiBzZWxlY3RlZEl0ZW1CdG4gIT0gbnVsbCAmJiBpdGVtICE9PSBzZWxlY3RlZEl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRJdGVtcyA9IHNlbGVjdGVkSXRlbS5jb21iaW5lKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZihvdXRJdGVtcyAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoSXRlbURpc3BsYXllZChzZWxlY3RlZEl0ZW1CdG4sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEl0ZW1EaXNwbGF5ZWQoaXRlbWJ0biwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnQucmVtb3ZlSXRlbShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50LnJlbW92ZUl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3Qgb3V0SXRlbSBvZiBvdXRJdGVtcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnQuYWRkSXRlbShvdXRJdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW52ZW50LmdldEl0ZW1zKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEFsbEl0ZW1zRGlzcGxheWVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNlbGVjdCBhbiBpdGVtXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaXRlbSA9PT0gc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IGl0ZW1idG47XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZihldnQuYnV0dG9uID09PSAyKSB7ICAgLy8gcmlnaHQgY2xpY2tcclxuICAgICAgICBwbGF5ZXJTcHJpdGUub3BlblNwZWVjaEJ1YmJsZShpdGVtLmdldEV4YW1pbmVUZXh0KCkpO1xyXG4gICAgICAgIGlmKGl0ZW0uZ2V0RXhhbWluZUF1ZGlvKCkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpdGVtLmdldEV4YW1pbmVBdWRpbygpLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLy9kZWNsYXJlIFByb21pc2UgYW55O1xyXG5cclxuZXhwb3J0IGNsYXNzIEltYWdlTG9hZGVyXHJcbntcclxuICAgIHB1YmxpYyBzdGF0aWMgbG9hZEltYWdlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8SFRNTEltYWdlRWxlbWVudD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpbWcgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICAgICAgaW1nLnNyYyA9IHBhdGg7XHJcbiAgICAgICAgICAgIGltZy5vbmxvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKGltZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaW1nLm9uZXJyb3IgPSAoZXJyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSlNPTkxvYWRlclxyXG57XHJcbiAgICBzdGF0aWMgbG9hZEpTT05GaWxlKHBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgdmFyIHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xyXG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUgJiYgeGhyLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKG9iaik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYoeGhyLnJlYWR5U3RhdGUgPT09IFhNTEh0dHBSZXF1ZXN0LkRPTkUgJiYgeGhyLnN0YXR1cyAhPT0gMjAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnN0YXR1cyk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coeGhyLnN0YXR1c1RleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwYXRoKTtcclxuICAgICAgICAgICAgeGhyLm9wZW4oXCJHRVRcIiwgcGF0aCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHhoci5zZW5kKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL1Nwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5cclxuZXhwb3J0IGNsYXNzIEFuaW1hdGVkU3ByaXRlIGV4dGVuZHMgU3ByaXRlXHJcbntcclxuICAgIHByb3RlY3RlZCBzcHJpdGVBbmltYXRpb25zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+ID0gW107XHJcbiAgICBwcm90ZWN0ZWQgY3VycmVudEFuaW1hdGlvbiA9IC0xO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPikge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCk7XHJcbiAgICAgICAgaWYoYW5pbXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFuaW1hdGlvbnMgPSBhbmltcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRBbmltYXRpb24gPj0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbmltID0gdGhpcy5zcHJpdGVBbmltYXRpb25zW3RoaXMuY3VycmVudEFuaW1hdGlvbl07XHJcbiAgICAgICAgICAgIHRoaXMucmVmcmVzaE9yaWdpbihhbmltLmdldEN1cnJlbnRGcmFtZSgpLncsIGFuaW0uZ2V0Q3VycmVudEZyYW1lKCkuaCk7XHJcbiAgICAgICAgICAgIGFuaW0uZHJhdyhjdXJyZW50VGltZSwgdGhpcy5vcmlnaW5YLCB0aGlzLm9yaWdpblksIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0Q3VycmVudEFuaW1hdGlvbiA9IChuZXdBbmltYXRpb25JbmRleDogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYobmV3QW5pbWF0aW9uSW5kZXggPCB0aGlzLnNwcml0ZUFuaW1hdGlvbnMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IG5ld0FuaW1hdGlvbkluZGV4O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkU3ByaXRlQW5pbWF0aW9uID0gKGFuaW0pOiB2b2lkID0+IHtcclxuICAgICAgICBpZihhbmltICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb25zLnB1c2goYW5pbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTcHJpdGVBbmltYXRpb25zID0gKGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+KTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYoYW5pbXMgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFuaW1hdGlvbnMgPSBhbmltcztcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gLTE7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRQb3MoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi9TdGF0aWNTcHJpdGVcIlxyXG5pbXBvcnQge0ludGVyYWN0aW9ufSBmcm9tIFwiLi4vZ2FtZS9JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuaW1wb3J0IHtDaXJjbGV9IGZyb20gXCIuLi9jb2xsaXNpb24vQ2lyY2xlXCJcclxuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuLi9jb2xsaXNpb24vUmVjdGFuZ2xlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnRlcmFjdGFibGVTcHJpdGUgZXh0ZW5kcyBTdGF0aWNTcHJpdGVcclxue1xyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYXRsYXM6IFRleHR1cmVBdGxhcywgaW1hZ2VOYW1lOiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZXhhbWluZVRleHQ6IHN0cmluZywgcHJvdGVjdGVkIGV4YW1pbmVBdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgcHJvdGVjdGVkIGludGVyYWN0aW9uWm9uZTogQ2lyY2xlLCBwcm90ZWN0ZWQgY2xpY2tab25lOiBSZWN0YW5nbGUsIHByb3RlY3RlZCBpbnRlcmFjdGlvbnM6IEFycmF5PEludGVyYWN0aW9uPilcclxuICAgIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwsIGF0bGFzLCBpbWFnZU5hbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIC8vIERFQlVHIC0gZHJhdyB0aGUgY2lyY2xlIGFuZCByZWN0YW5nbGVcclxuICAgICAgICB0aGlzLmNsaWNrWm9uZS5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblpvbmUuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbkludGVyYWN0aW9uWm9uZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcmFjdGlvblpvbmUuY29udGFpbnMoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluQ2xpY2tab25lKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsaWNrWm9uZS5jb250YWlucyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbnRlcmFjdCB3aXRoIHRoZSBzcHJpdGVcclxuICAgIC8vIGl0ZW0gY2FuIGJlIG51bGxcclxuICAgIHB1YmxpYyBpbnRlcmFjdChpdGVtOiBJdGVtKToge3RleHQ6IHN0cmluZywgYXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIGl0ZW1zOiBBcnJheTxJdGVtPn1cclxuICAgIHtcclxuICAgICAgICBmb3IoY29uc3QgaW50ZXIgb2YgdGhpcy5pbnRlcmFjdGlvbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICAvLyBpZiB0aGUgaXRlbXMgbWF0Y2gsIHRoZW4gaW50ZXJhY3Qgd2l0aCB0aGUgb2JqZWN0XHJcbiAgICAgICAgICAgIGlmKGludGVyLmdldEl0ZW0oKSA9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gaW50ZXIuaW50ZXJhY3QoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpZihvYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgaW50ZXJhY3Rpb24gaWYgaXQgaGFzIGJlZW4gZnVsZmlsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pbnRlcmFjdGlvbnMuc3BsaWNlKHRoaXMuaW50ZXJhY3Rpb25zLmluZGV4T2YoaW50ZXIpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBvYmo7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZUF1ZGlvKCk6IEhUTUxBdWRpb0VsZW1lbnRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lQXVkaW87XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtOYXZTcHJpdGV9IGZyb20gXCIuL05hdlNwcml0ZVwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuLi9jb2xsaXNpb24vUG9pbnRcIlxyXG5pbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge0NvbnZlcnNhdGlvbn0gZnJvbSBcIi4uL2NoYXQvQ29udmVyc2F0aW9uXCJcclxuaW1wb3J0IHtDaXJjbGV9IGZyb20gXCIuLi9jb2xsaXNpb24vQ2lyY2xlXCJcclxuaW1wb3J0IHtSZWN0YW5nbGV9IGZyb20gXCIuLi9jb2xsaXNpb24vUmVjdGFuZ2xlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBOUENTcHJpdGUgZXh0ZW5kcyBOYXZTcHJpdGVcclxue1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZVNob3duQXQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlVGV4dDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0ZXh0V2lkdGg6IG51bWJlcjsgIC8vIHdpZHRoIG9mIHRoZSB0ZXh0IGluIHBpeGVsc1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBCQVNFX0ZPTlRfU0laRSA9IDc1O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPixcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBleGFtaW5lVGV4dDogc3RyaW5nLCBwcm90ZWN0ZWQgZXhhbWluZUF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgaW50ZXJhY3Rpb25ab25lOiBDaXJjbGUsIHByb3RlY3RlZCBjbGlja1pvbmU6IFJlY3RhbmdsZSwgcHJvdGVjdGVkIGNvbnZlcnNhdGlvbjogQ29udmVyc2F0aW9uLCBtb3ZlU3BlZWQ6IG51bWJlciA9IDAuNSlcclxuICAgIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwsIGFuaW1zLCBtb3ZlU3BlZWQpO1xyXG4gICAgICAgIHRoaXMuc2V0Q3VycmVudEFuaW1hdGlvbigwKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3BlZWNoQnViYmxlT3Blbikge1xyXG4gICAgICAgICAgICAvLyBkcmF3IHRoZSBzcGVlY2ggYnViYmxlXHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLm9yaWdpblkpO1xyXG4gICAgICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwiIzU1NTU1NVwiO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxQUZGODBcIjsgICAvLyBncmVlbjogIzFBRkY4MCwgYW1iZXI6ICNGRkI2NDIsIGJsdWU6ICMyRUNGRkZcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuc3BlZWNoQnViYmxlVGV4dCwgLXRoaXMudGV4dFdpZHRoLzIsIDApO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3BlZWNoIGJ1YmJsZSBsYXN0cyAxLzIgc2Vjb25kIGZvciBlYWNoIHdvcmRcclxuICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgLSB0aGlzLnNwZWVjaEJ1YmJsZVNob3duQXQgPj0gdGhpcy5zcGVlY2hCdWJibGVUZXh0LnNwbGl0KFwiIFwiKS5sZW5ndGggKiA1MDAgKyA1MDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBERUJVRyAtIGRyYXcgdGhlIGNpcmNsZSBhbmQgcmVjdGFuZ2xlXHJcbiAgICAgICAgdGhpcy5jbGlja1pvbmUuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25ab25lLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlblNwZWVjaEJ1YmJsZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZih0ZXh0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVUZXh0ID0gdGV4dDtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVTaG93bkF0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7dGhpcy5CQVNFX0ZPTlRfU0laRX1weCBCb29rbWFuYDtcclxuICAgICAgICAgICAgdGhpcy50ZXh0V2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDb252ZXJzYXRpb24oKTogQ29udmVyc2F0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY29udmVyc2F0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbkludGVyYWN0aW9uWm9uZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pbnRlcmFjdGlvblpvbmUuY29udGFpbnMoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluQ2xpY2tab25lKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNsaWNrWm9uZS5jb250YWlucyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZVRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVBdWRpbygpOiBIVE1MQXVkaW9FbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZUF1ZGlvO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuLi9jb2xsaXNpb24vUG9pbnRcIlxyXG5cclxuZXhwb3J0IGNsYXNzIE5hdlNwcml0ZSBleHRlbmRzIEFuaW1hdGVkU3ByaXRlXHJcbntcclxuICAgIHByaXZhdGUgd2F5cG9pbnRzOiBBcnJheTxQb2ludD47XHJcbiAgICBwcml2YXRlIG5leHRXYXlwb2ludDogUG9pbnQ7XHJcbiAgICBwcml2YXRlIG1vdmVTcGVlZDogbnVtYmVyO1xyXG5cclxuICAgIHByaXZhdGUgZGVwdGhTY2FsZVk6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RhcnRYOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0WTogbnVtYmVyO1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPiwgbW92ZVNwZWVkOiBudW1iZXIgPSAwLjUpIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwsIGFuaW1zKTtcclxuICAgICAgICB0aGlzLm1vdmVTcGVlZCA9IG1vdmVTcGVlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIC8vIG1vdmUgdG93YXJkcyB0aGUgbmV4dCB3YXlwb2ludFxyXG4gICAgICAgIGlmKHRoaXMubmV4dFdheXBvaW50ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBhbmdsZSA9IE1hdGguYXRhbihNYXRoLmFicyh0aGlzLm5leHRXYXlwb2ludC55IC0gdGhpcy55KSAvIE1hdGguYWJzKHRoaXMubmV4dFdheXBvaW50LnggLSB0aGlzLngpKTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZVNwZWVkWCA9IHRoaXMubW92ZVNwZWVkICogZGVsdGFUaW1lICogTWF0aC5jb3MoYW5nbGUpICogdGhpcy5zY2FsZTtcclxuICAgICAgICAgICAgY29uc3QgbW92ZVNwZWVkWSA9IHRoaXMubW92ZVNwZWVkICogZGVsdGFUaW1lICogTWF0aC5zaW4oYW5nbGUpICogdGhpcy5zY2FsZTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBzcHJpdGUgaGFzIHJlYWNoZWQgdGhlIHdheXBvaW50IChvciB0aGVyZWFib3V0cykgdGhlbiBnZXQgdGhlIG5leHQgd2F5cG9pbnRcclxuICAgICAgICAgICAgaWYodGhpcy54ID49IHRoaXMubmV4dFdheXBvaW50LnggLSA1ICYmIHRoaXMueCA8PSB0aGlzLm5leHRXYXlwb2ludC54ICsgNSAmJlxyXG4gICAgICAgICAgICAgICAgdGhpcy55ID49IHRoaXMubmV4dFdheXBvaW50LnkgLSA1ICYmIHRoaXMueSA8PSB0aGlzLm5leHRXYXlwb2ludC55ICsgNSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImFycml2ZWRcIiwgdGhpcy54LCB0aGlzLnkpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy54ID0gdGhpcy5uZXh0V2F5cG9pbnQueDtcclxuICAgICAgICAgICAgICAgIHRoaXMueSA9IHRoaXMubmV4dFdheXBvaW50Lnk7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLndheXBvaW50cyAhPSBudWxsICYmIHRoaXMud2F5cG9pbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IHRoaXMud2F5cG9pbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIG1vdmUgdG93YXJkcyB0aGUgbmV4dCB3YXlwb2ludFxyXG4gICAgICAgICAgICBpZih0aGlzLm5leHRXYXlwb2ludCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnggPCB0aGlzLm5leHRXYXlwb2ludC54IC0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCArPSBtb3ZlU3BlZWRYO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMueCA+IHRoaXMubmV4dFdheXBvaW50LnggKyA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54IC09IG1vdmVTcGVlZFg7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy55IDwgdGhpcy5uZXh0V2F5cG9pbnQueSAtIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgKz0gbW92ZVNwZWVkWTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnkgPiB0aGlzLm5leHRXYXlwb2ludC55ICsgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSAtPSBtb3ZlU3BlZWRZO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNjYWxlIHRoZSBwbGF5ZXIgYmFzZWQgb24gdGhlIGRlcHRoIG9mIHRoZSBtb3VzZSBwb3NpdGlvblxyXG4gICAgICAgIHRoaXMuc2NhbGUgPSB0aGlzLmJhc2VTY2FsZSAqIHRoaXMuZGVwdGhTY2FsZVkgKiogKHRoaXMuc3RhcnRZIC0gdGhpcy55KTtcclxuXHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0V2F5cG9pbnRzKHdheXBvaW50czogQXJyYXk8UG9pbnQ+KSB7XHJcbiAgICAgICAgdGhpcy53YXlwb2ludHMgPSB3YXlwb2ludHM7XHJcbiAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSBudWxsO1xyXG4gICAgICAgIGlmKHRoaXMud2F5cG9pbnRzICE9IG51bGwgJiYgdGhpcy53YXlwb2ludHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLndheXBvaW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMubmV4dFdheXBvaW50ID0gdGhpcy53YXlwb2ludHMucG9wKCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV4dDogXCIgKyB0aGlzLm5leHRXYXlwb2ludC54ICsgXCIsIFwiICsgdGhpcy5uZXh0V2F5cG9pbnQueSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldERlcHRoU2NhbGUoZGVwdGhTY2FsZVk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuZGVwdGhTY2FsZVkgPSBkZXB0aFNjYWxlWTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3RhcnRQb3MoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLnN0YXJ0WCA9IHg7XHJcbiAgICAgICAgdGhpcy5zdGFydFkgPSB5O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7TmF2U3ByaXRlfSBmcm9tIFwiLi9OYXZTcHJpdGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi4vY29sbGlzaW9uL1BvaW50XCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBQbGF5ZXJTcHJpdGUgZXh0ZW5kcyBOYXZTcHJpdGVcclxue1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVJbWFnZTogSFRNTEltYWdlRWxlbWVudDtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVTaG93bkF0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZVRleHQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGV4dFdpZHRoOiBudW1iZXI7ICAvLyB3aWR0aCBvZiB0aGUgdGV4dCBpbiBwaXhlbHNcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQkFTRV9GT05UX1NJWkUgPSA3NTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4sIG1vdmVTcGVlZDogbnVtYmVyID0gMC41KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCwgYW5pbXMsIG1vdmVTcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnNwZWVjaEJ1YmJsZU9wZW4pIHtcclxuICAgICAgICAgICAgLy8gZHJhdyB0aGUgc3BlZWNoIGJ1YmJsZVxyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy5vcmlnaW5ZKTtcclxuICAgICAgICAgICAgLy9jdHguZHJhd0ltYWdlKHRoaXMuc3BlZWNoQnViYmxlSW1hZ2UsIC10aGlzLnNwZWVjaEJ1YmJsZUltYWdlLndpZHRoLzIgKiB0aGlzLnNjYWxlLCAtdGhpcy5zcGVlY2hCdWJibGVJbWFnZS5oZWlnaHQvMiAqIHRoaXMuc2NhbGUsIHRoaXMuc3BlZWNoQnViYmxlSW1hZ2Uud2lkdGggKiB0aGlzLnNjYWxlLCB0aGlzLnNwZWVjaEJ1YmJsZUltYWdlLmhlaWdodCAqIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICBjdHguc2NhbGUodGhpcy5zY2FsZSwgdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dDb2xvciA9IFwiIzU1NTU1NVwiO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Qmx1ciA9IDU7XHJcbiAgICAgICAgICAgIGN0eC5maWxsU3R5bGUgPSBcIiMxQUZGODBcIjsgICAvLyBncmVlbjogIzFBRkY4MCwgYW1iZXI6ICNGRkI2NDIsIGJsdWU6ICMyRUNGRkZcclxuICAgICAgICAgICAgY3R4LmZpbGxUZXh0KHRoaXMuc3BlZWNoQnViYmxlVGV4dCwgLXRoaXMudGV4dFdpZHRoLzIsIDApO1xyXG4gICAgICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gc3BlZWNoIGJ1YmJsZSBsYXN0cyAxLzIgc2Vjb25kIGZvciBlYWNoIHdvcmRcclxuICAgICAgICAgICAgaWYoY3VycmVudFRpbWUgLSB0aGlzLnNwZWVjaEJ1YmJsZVNob3duQXQgPj0gdGhpcy5zcGVlY2hCdWJibGVUZXh0LnNwbGl0KFwiIFwiKS5sZW5ndGggKiA1MDAgKyA1MDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlT3BlbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuU3BlZWNoQnViYmxlKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRleHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVRleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVNob3duQXQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHt0aGlzLkJBU0VfRk9OVF9TSVpFfXB4IEJvb2ttYW5gO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuXHJcbiAgICAgICAgICAgIC8vIGNyZWF0ZSBhIGRpdiBjb250YWluaW5nIHRoZSB0ZXh0IHNvIHRoZSBwaXhlbCB3aWR0aCBvZiB0ZXh0IGNhbiBiZSBjYWxjdWxhdGVkXHJcbiAgICAgICAgICAgIC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzExODI0MS9jYWxjdWxhdGUtdGV4dC13aWR0aC13aXRoLWphdmFzY3JpcHRcclxuICAgICAgICAgICAgLypsZXQgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICAgICAgZGl2LnN0eWxlLmNzc1RleHQgPSBgcG9zaXRpb246IGFic29sdXRlOyB2aXNpYmlsaXR5OiBoaWRkZW47IGhlaWdodDogYXV0bzsgd2lkdGg6IGF1dG87IHdoaXRlLXNwYWNlOiBub3dyYXA7IGZvbnQtc2l6ZTogJHt0aGlzLkJBU0VfRk9OVF9TSVpFfWA7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGRpdiwgbnVsbCk7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFdpZHRoID0gZGl2LmNsaWVudFdpZHRoICsgMTsqL1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRleHQgd2lkdGhcIiwgdGhpcy50ZXh0V2lkdGgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3BlZWNoQnViYmxlSW1hZ2UoaW1nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuc3BlZWNoQnViYmxlSW1hZ2UgPSBpbWc7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGFic3RyYWN0IGNsYXNzIFNwcml0ZVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgYmFzZVNjYWxlOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgb3JpZ2luWDogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG9yaWdpblk6IG51bWJlcjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgeDogbnVtYmVyLCBwcm90ZWN0ZWQgeTogbnVtYmVyLCBwcm90ZWN0ZWQgc2NhbGU6IG51bWJlciwgcHJvdGVjdGVkIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgcHJvdGVjdGVkIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIHByb3RlY3RlZCBkZXB0aDogbnVtYmVyID0gMClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmJhc2VTY2FsZSA9IHRoaXMuc2NhbGU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHJlZnJlc2hPcmlnaW4od2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIpIHtcclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHBvc2l0aW9uIGF0IHdoaWNoIHRvIGRyYXcgdGhlIHNwcml0ZVxyXG4gICAgICAgIGlmKHRoaXMub3JpZ2luSG9yaXpvbnRhbCA9PSBcInJpZ2h0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5YID0gdGhpcy54IC0gd2lkdGggKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm9yaWdpbkhvcml6b250YWwgPT0gXCJsZWZ0XCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5YID0gdGhpcy54O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWCA9IHRoaXMueCAtIHdpZHRoLzIgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0byBkcmF3IHRoZSBzcHJpdGVcclxuICAgICAgICBpZih0aGlzLm9yaWdpblZlcnRpY2FsID09IFwidG9wXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5ZID0gdGhpcy55IC0gaGVpZ2h0KiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH0gZWxzZSBpZih0aGlzLm9yaWdpblZlcnRpY2FsID09IFwiYm90dG9tXCIpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5ZID0gdGhpcy55O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWSA9IHRoaXMueSAtIGhlaWdodC8yICogdGhpcy5zY2FsZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZDtcclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSAnLi9UZXh0dXJlQXRsYXMnXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzRnJhbWV9IGZyb20gXCIuL1RleHR1cmVBdGxhc0ZyYW1lXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTcHJpdGVBbmltYXRpb25cclxue1xyXG4gICAgLy8gaHR0cDovL3d3dy50eXBlc2NyaXB0Z2FtZXMuY29tL0FuaW1hdGVkU3ByaXRlcy5odG1sXHJcbiAgICBwcm90ZWN0ZWQgY3VycmVudEZyYW1lID0gMDtcclxuICAgIHByaXZhdGUgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG51bUZyYW1lczogbnVtYmVyLCBwcm90ZWN0ZWQgYXRsYXM6IFRleHR1cmVBdGxhcywgcHJvdGVjdGVkIHNlcXVlbmNlTmFtZTogc3RyaW5nKSB7fVxyXG5cclxuICAgIHB1YmxpYyBkcmF3ID0gKGN1cnJlbnRUaW1lOiBudW1iZXIsIHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyKTogdm9pZCA9PiB7XHJcbiAgICAgICAgbGV0IGZyYW1lID0gdGhpcy5nZXRDdXJyZW50RnJhbWUoKTtcclxuICAgICAgICBpZihmcmFtZS5mcmFtZUR1cmF0aW9uIDw9IGN1cnJlbnRUaW1lIC0gdGhpcy5sYXN0VGltZSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lKys7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuY3VycmVudEZyYW1lID49IHRoaXMubnVtRnJhbWVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5sYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG4gICAgICAgICAgICBmcmFtZSA9IHRoaXMuZ2V0Q3VycmVudEZyYW1lKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBzcHJpdGVzIGFyZSBkcmF3biBmcm9tIHRoZWlyIGNlbnRyZS14LCBib3R0b20teSwgaS5lLiBmZWV0IHBvc2l0aW9uXHJcbiAgICAgICAgLy9sZXQgdG9wTGVmdFggPSB4IC0gZnJhbWUudy8yICogc2NhbGU7XHJcbiAgICAgICAgLy9sZXQgdG9wTGVmdFkgPSB5IC0gZnJhbWUuaCAqIHNjYWxlO1xyXG5cclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUoeCwgeSk7XHJcbiAgICAgICAgY3R4LnJlY3QoZnJhbWUueCwgZnJhbWUueSwgZnJhbWUudywgZnJhbWUuaCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmF0bGFzLmltYWdlLFxyXG4gICAgICAgICAgICBmcmFtZS54LCBmcmFtZS55LFxyXG4gICAgICAgICAgICBmcmFtZS53LCBmcmFtZS5oLFxyXG4gICAgICAgICAgICBmcmFtZS5vZmZzZXR4LCBmcmFtZS5vZmZzZXR5LFxyXG4gICAgICAgICAgICBmcmFtZS53ICogc2NhbGUsIGZyYW1lLmggKiBzY2FsZSk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q3VycmVudEZyYW1lID0gKCk6IFRleHR1cmVBdGxhc0ZyYW1lID0+IHtcclxuICAgICAgICBpZih0aGlzLmN1cnJlbnRGcmFtZSA+IDkpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5hdGxhcy5mcmFtZXNbdGhpcy5zZXF1ZW5jZU5hbWUgKyBcIl9cIiArIHRoaXMuY3VycmVudEZyYW1lLnRvU3RyaW5nKCldO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5hdGxhcy5mcmFtZXNbdGhpcy5zZXF1ZW5jZU5hbWUgKyBcIl9cIiArIFwiMFwiICsgdGhpcy5jdXJyZW50RnJhbWUudG9TdHJpbmcoKV07XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuL1Nwcml0ZVwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc0ZyYW1lfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNGcmFtZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgU3RhdGljU3ByaXRlIGV4dGVuZHMgU3ByaXRlXHJcbntcclxuICAgIHByb3RlY3RlZCBpbWFnZTogVGV4dHVyZUF0bGFzRnJhbWU7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgcHJvdGVjdGVkIGF0bGFzOiBUZXh0dXJlQXRsYXMsIHByb3RlY3RlZCBpbWFnZU5hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZWZyZXNoSW1hZ2UoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuaW1hZ2UgPSB0aGlzLmF0bGFzLmZyYW1lc1t0aGlzLmltYWdlTmFtZV07IC8vIGdldCB0aGUgaW1hZ2UgZnJvbSB0aGUgYXRsYXNcclxuICAgICAgICB0aGlzLnJlZnJlc2hPcmlnaW4odGhpcy5pbWFnZS53LCB0aGlzLmltYWdlLmgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLm9yaWdpblgsIHRoaXMub3JpZ2luWSk7XHJcbiAgICAgICAgY3R4LnJlY3QodGhpcy5pbWFnZS54LCB0aGlzLmltYWdlLnksIHRoaXMuaW1hZ2UudywgdGhpcy5pbWFnZS5oKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuYXRsYXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UueCwgdGhpcy5pbWFnZS55LFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLncsIHRoaXMuaW1hZ2UuaCxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS5vZmZzZXR4LCB0aGlzLmltYWdlLm9mZnNldHksXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UudyAqIHRoaXMuc2NhbGUsIHRoaXMuaW1hZ2UuaCAqIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtKU09OTG9hZGVyfSBmcm9tICcuLi9yZXNvdXJjZXMvSlNPTkxvYWRlcidcclxuaW1wb3J0IHtJbWFnZUxvYWRlcn0gZnJvbSAnLi4vcmVzb3VyY2VzL0ltYWdlTG9hZGVyJ1xyXG5pbXBvcnQge1RleHR1cmVBdGxhc0ZyYW1lfSBmcm9tICcuL1RleHR1cmVBdGxhc0ZyYW1lJ1xyXG5cclxuZXhwb3J0IGNsYXNzIFRleHR1cmVBdGxhc1xyXG57XHJcbiAgICAvLyBodHRwOi8vd3d3LnR5cGVzY3JpcHRnYW1lcy5jb20vVGV4dHVyZUF0bGFzLmh0bWxcclxuICAgIHB1YmxpYyBmcmFtZXM6IHsgW2luZGV4OiBzdHJpbmddOiBUZXh0dXJlQXRsYXNGcmFtZSB9ID0ge307XHJcbiAgICBwdWJsaWMgdGFMb2FkQ29tcGxldGU6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHB1YmxpYyBpbWFnZTogSFRNTEltYWdlRWxlbWVudCA9IG5ldyBJbWFnZSgpO1xyXG4gICAgcHVibGljIGF0bGFzTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUgaW1hZ2VGaWxlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuICAgIHByaXZhdGUganNvbkZpbGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKGF0bGFzTmFtZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYXRsYXNOYW1lID0gYXRsYXNOYW1lO1xyXG4gICAgICAgIHRoaXMuaW1hZ2VGaWxlTmFtZSA9IGF0bGFzTmFtZTtcclxuICAgICAgICB0aGlzLmpzb25GaWxlTmFtZSA9IGF0bGFzTmFtZS5yZXBsYWNlKFwiLnBuZ1wiLCBcIlwiKSArIFwiLmpzb25cIjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbG9hZCgpOiBQcm9taXNlPGFueT5cclxuICAgIHtcclxuICAgICAgICBjb25zdCBpbWdQcm9taXNlID0gSW1hZ2VMb2FkZXIubG9hZEltYWdlKHRoaXMuaW1hZ2VGaWxlTmFtZSkudGhlbigoaW1nKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UgPSBpbWc7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkICcgKyB0aGlzLmltYWdlRmlsZU5hbWUpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGNvbnN0IGpzb25Qcm9taXNlID0gSlNPTkxvYWRlci5sb2FkSlNPTkZpbGUodGhpcy5qc29uRmlsZU5hbWUpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVGcmFtZXMoZGF0YSk7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkICcgKyB0aGlzLmpzb25GaWxlTmFtZSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHJldHVybiBQcm9taXNlLmFsbChbaW1nUHJvbWlzZSwganNvblByb21pc2VdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5hdGxhc05hbWUgKyAnIGxvYWRlZCBzdWNjZXNzZnVsbHknKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogJyArIHRoaXMuYXRsYXNOYW1lICsgJyBmYWlsZWQgdG8gbG9hZCcpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlRnJhbWVzKGRhdGE6IGFueSlcclxuICAgIHtcclxuICAgICAgICBmb3IoY29uc3QgbmFtZSBpbiBkYXRhLmZyYW1lcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNwcml0ZURhdGEgPSBkYXRhLmZyYW1lc1tuYW1lXTtcclxuICAgICAgICAgICAgbGV0IGZyYW1lID0gbmV3IFRleHR1cmVBdGxhc0ZyYW1lKHNwcml0ZURhdGEuZnJhbWUueCwgc3ByaXRlRGF0YS5mcmFtZS55LCBzcHJpdGVEYXRhLmZyYW1lLncsIHNwcml0ZURhdGEuZnJhbWUuaCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlRGF0YS5zcHJpdGVTb3VyY2VTaXplLngsIHNwcml0ZURhdGEuc3ByaXRlU291cmNlU2l6ZS55LCBzcHJpdGVEYXRhLmZyYW1lRHVyYXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLmZyYW1lc1tuYW1lXSA9IGZyYW1lO1xyXG4gICAgICAgIH1cclxuLy8gICAgICAgIGNvbnNvbGUubG9nKEpTT04uc3RyaW5naWZ5KHRoaXMuZnJhbWVzKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFRleHR1cmVBdGxhc0ZyYW1lXHJcbntcclxuICAgIC8vIGh0dHA6Ly93d3cudHlwZXNjcmlwdGdhbWVzLmNvbS9BbmltYXRlZFNwcml0ZXMuaHRtbFxyXG4gICAgeDogbnVtYmVyO1xyXG4gICAgeTogbnVtYmVyO1xyXG4gICAgdzogbnVtYmVyO1xyXG4gICAgaDogbnVtYmVyO1xyXG5cclxuICAgIG9mZnNldHg6IG51bWJlcjsgICAgLy8gaW1hZ2Ugd2lsbCBiZSBvZmZzZXQgYnkgdGhlc2UgdmFsdWVzIHNvIGZyYW1lcyBsaW5lIHVwIGluIGFuaW1hdGlvblxyXG4gICAgb2Zmc2V0eTogbnVtYmVyO1xyXG5cclxuICAgIGZyYW1lRHVyYXRpb246IG51bWJlcjsgIC8vIHRoZSBudW1iZXIgb2YgbWlsbGlzZWNvbmRzIHRoaXMgZnJhbWUgbGFzdHNcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIgPSAwLCB5OiBudW1iZXIgPSAwLCB3OiBudW1iZXIgPSAxLCBoOiBudW1iZXIgPSAxLCBvZmZzZXR4OiBudW1iZXIgPSAwLCBvZmZzZXR5OiBudW1iZXIgPSAwLCBmcmFtZUR1cmF0aW9uOiBudW1iZXIgPSAxMDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMudyA9IHc7XHJcbiAgICAgICAgdGhpcy5oID0gaDtcclxuICAgICAgICB0aGlzLm9mZnNldHggPSBvZmZzZXR4O1xyXG4gICAgICAgIHRoaXMub2Zmc2V0eSA9IG9mZnNldHk7XHJcbiAgICAgICAgdGhpcy5mcmFtZUR1cmF0aW9uID0gZnJhbWVEdXJhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0KHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9