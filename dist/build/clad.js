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
    function ContinueDialog(text, speaker, audio, nextDialog) {
        var _this = _super.call(this, text, speaker, audio) || this;
        _this.nextDialog = nextDialog;
        return _this;
    }
    ContinueDialog.prototype.createGUIElement = function (div, invent) {
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
    function Dialog(text, speaker, audio) {
        this.text = text;
        this.speaker = speaker;
        this.audio = audio;
    }
    Dialog.prototype.getText = function () {
        return this.text;
    };
    Dialog.prototype.getSpeaker = function () {
        return this.speaker;
    };
    Dialog.prototype.getAudio = function () {
        return this.audio;
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
    function OptionDialog(text, speaker, audio, options) {
        var _this = _super.call(this, text, speaker, audio) || this;
        _this.options = options;
        return _this;
    }
    OptionDialog.prototype.createGUIElement = function (div, invent) {
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
    function ReceiveItemDialog(text, speaker, audio, nextDialog, itemsLost, itemsReceived, replacementDialog) {
        var _this = _super.call(this, text, speaker, audio, nextDialog) || this;
        _this.itemsLost = itemsLost;
        _this.itemsReceived = itemsReceived;
        _this.replacementDialog = replacementDialog;
        _this.replaced = false; // true iff the player has already exchanged items before
        return _this;
    }
    ReceiveItemDialog.prototype.inventContainsAllItems = function (invent) {
        var containsAllItems = true;
        for (var _i = 0, _a = this.itemsLost; _i < _a.length; _i++) {
            var item = _a[_i];
            // if the invent doesn't contain any required item, then exit
            if (!invent.containsItem(item)) {
                containsAllItems = false;
                break;
            }
        }
        return containsAllItems;
    };
    ReceiveItemDialog.prototype.updateInventory = function (invent) {
        // remove all items to be removed
        for (var _i = 0, _a = this.itemsLost; _i < _a.length; _i++) {
            var item = _a[_i];
            invent.removeItem(item);
        }
        // add all items to be added
        for (var _b = 0, _c = this.itemsReceived; _b < _c.length; _b++) {
            var item = _c[_b];
            invent.addItem(item);
        }
    };
    ReceiveItemDialog.prototype.createGUIElement = function (div, invent) {
        var _this = this;
        if (this.replaced) {
            if (this.replacementDialog != null) {
                return this.replacementDialog.createGUIElement(div, invent);
            }
            return Promise.resolve(null);
        }
        return new Promise(function (resolve, reject) {
            var containsAllItems = _this.inventContainsAllItems(invent);
            if (containsAllItems) {
                // remove itemsLost and add itemsReceived from/to player's inventory
                _this.updateInventory(invent);
                // add the dialog text
                var txt = document.createElement("label");
                txt.classList.add("chatmsg");
                txt.innerHTML = _this.text;
                div.appendChild(txt); // add text element to div
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
                // player has made exchange so replace dialog with replacement dialog
                _this.replaceDialog();
            }
            else {
                // player inventory does not contains all required items, therefore, display fail text
                // add the dialog text
                var txt = document.createElement("label");
                txt.classList.add("chatmsg");
                txt.innerHTML = "YOU DO NOT HAVE THE REQUIRED ITEMS";
                div.appendChild(txt); // add text element to div
            }
            // add a button to advance to the next dialog
            var btn = document.createElement("button");
            btn.classList.add("chatbtn");
            btn.innerHTML = "Continue";
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
    ReceiveItemDialog.prototype.replaceDialog = function () {
        this.replaced = true;
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
        this.used = false;
    }
    Interaction.prototype.getItem = function () {
        return this.item;
    };
    Interaction.prototype.setUsed = function () {
        this.used = true;
    };
    Interaction.prototype.getUsed = function () {
        return this.used;
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
    function Level(textureAtlas, sceneScale, playerStartX, playerStartY, playerStarts, depthScaleY, navmesh, staticSprites, interactableSprites, npcSprites) {
        this.textureAtlas = textureAtlas;
        this.sceneScale = sceneScale;
        this.playerStartX = playerStartX;
        this.playerStartY = playerStartY;
        this.playerStarts = playerStarts;
        this.depthScaleY = depthScaleY;
        this.navmesh = navmesh;
        this.staticSprites = staticSprites;
        this.interactableSprites = interactableSprites;
        this.npcSprites = npcSprites;
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
            return new ContinueDialog_1.ContinueDialog(dialog.text, dialog.speaker, new Audio(dialog.audio), nextDialog);
        }
        else if (dialog.type == "option") {
            var options = {};
            // create a dialog object for each option
            for (var optName in dialog.options) {
                options[optName] = Level.buildDialog(dialog.options[optName], items);
            }
            return new OptionDialog_1.OptionDialog(dialog.text, dialog.speaker, new Audio(dialog.audio), options);
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
            return new ReceiveItemDialog_1.ReceiveItemDialog(dialog.text, dialog.speaker, new Audio(dialog.audio), nextDialog, itemsLost, itemsReceived, dialog.replacement_dialog ? this.buildDialog(dialog.replacement_dialog, items) : null);
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
            if (Date.now() - _this.touchStartAt < _this.longTouchDuration) {
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
        document.addEventListener("touchcancel", this.touchend);
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
    Inventory.prototype.containsItem = function (item) {
        if (item != null) {
            for (var index = 0; index < this.items.length; index++) {
                if (this.items[index] === item) {
                    return true;
                }
            }
            return false;
        }
        return true;
    };
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
                return item;
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
        console.log("selected", item);
        if (this.items[index] == null) {
            var x = this.removeItem(item);
            if (x != null) {
                this.items[index] = item;
            }
            return true;
        }
        return false;
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
// true iff the player is talking to an NPC
var inConversation = false;
// map from level name to and object giving details about what has changed
var levelSaveInfo = {};
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
        if (!inConversation) {
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
        }
    });
    inputManager.addSecondaryMouseDownCallback(function (mousex, mousey) {
        if (!inConversation) {
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
        loadLocalGameSave();
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
    if (d != null) {
        inConversation = true;
        // add the speaker image based on whether player or npc is speaking
        var speakerimg = document.createElement("img");
        speakerimg.src = "res/images/player_head.png";
        speakerimg.classList.add(d.getSpeaker() == "player" ? "playerchathead" : "npcchathead");
        chatpanel.appendChild(speakerimg);
        // add labels and buttons for this dialog
        d.createGUIElement(chatpanel, invent).then(function (nextDialog) {
            if (nextDialog != null) {
                // stop the dialog audio
                if (d.getAudio() != null) {
                    d.getAudio().pause();
                    d.getAudio().currentTime = 0;
                }
                // advance to next dialog
                createDialogGUI(chatpanel, nextDialog);
            }
            else {
                // next dialog is null, therefore, exit conversation
                chatpanel.parentNode.removeChild(chatpanel);
                inConversation = false;
            }
        });
        // refresh inventory GUI
        refreshAllItemsDisplayed();
        // play the dialog audio
        if (d.getAudio() != null) {
            d.getAudio().play();
        }
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
        console.log(invent.moveItem(selectedItem, itemslotIndex));
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
document.getElementById("savebtn").onclick = function () {
    saveGameLocally();
};
document.getElementById("exitbtn").onclick = function () {
    resetLocalGameSave();
};
function loadLocalGameSave() {
    if (typeof (Storage) !== "undefined") {
        var save1 = JSON.parse(localStorage.save1);
        console.log(save1);
        // load the player's items
        for (var _i = 0, _a = save1.invent; _i < _a.length; _i++) {
            var itemid = _a[_i];
            console.log(itemid);
            invent.addItem(items[itemid]);
        }
    }
    else {
        console.log("error: no local storage to load");
    }
}
// save the game locally
function saveGameLocally() {
    if (typeof (Storage) !== "undefined") {
        console.log("saving game locally");
        var save1 = { invent: null, levelData: null };
        // create an array of item IDs representing the player's inventory
        var itemIDs = new Array(9);
        for (var inventIndex in invent.getItems()) {
            for (var itemID in items) {
                console.log(itemID, inventIndex);
                if (items[itemID] === invent.getItems()[inventIndex]) {
                    itemIDs[inventIndex] = itemID;
                }
            }
        }
        // save the array of item IDs to local storage
        save1.invent = itemIDs;
        // TODO - save the position of the sprites and the level name
        var levelData = { player_x: null, player_y: null, npcSprites: null };
        // store the player's position
        levelData.player_x = playerSprite.getX();
        levelData.player_y = playerSprite.getY();
        // store the positions of other nav sprites
        levelData.npcSprites = [];
        for (var _i = 0, npcSprites_4 = npcSprites; _i < npcSprites_4.length; _i++) {
            var sprite = npcSprites_4[_i];
            levelData.npcSprites.push({ x: sprite.getX(), y: sprite.getY() });
        }
        // save the level data to local storage
        save1.levelData = levelData;
        // NOTE - must do this for all levels explored in this playthrough
        // TODO - make a note of any interactable sprites which have had their interactions used up
        // TODO - make a note of any receive item dialogs which have been used up
        localStorage.save1 = JSON.stringify(save1);
    }
    else {
        console.log("error: no local storage support");
        alert("error: no local storage support");
    }
}
function resetLocalGameSave() {
    if (typeof (Storage) !== "undefined") {
        console.log("resetting local game save");
        localStorage.removeItem("save1");
    }
    else {
        console.log("error: no local storage to reset");
        alert("error: no local storage to reset");
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
            // if the items match and the interaction hasn't been done before, then interact with the object
            if (!inter.getUsed() && inter.getItem() == item) {
                var obj = inter.interact(item);
                if (obj != null) {
                    // remove the interaction if it has been fulfilled
                    inter.setUsed();
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
    Sprite.prototype.getX = function () {
        return this.x;
    };
    Sprite.prototype.getY = function () {
        return this.y;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9Db250aW51ZURpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9Db252ZXJzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvRGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9jaGF0L09wdGlvbkRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9SZWNlaXZlSXRlbURpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL05hdk1lc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL1RyaWFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0ludGVyYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0xldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1JlY2VpdmVJdGVtSW50ZXJhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvSW52ZW50b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9pdGVtcy9JdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvSW1hZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9KU09OTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL0FuaW1hdGVkU3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL0ludGVyYWN0YWJsZVNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9OUENTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvTmF2U3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1BsYXllclNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvU3ByaXRlQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1N0YXRpY1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9UZXh0dXJlQXRsYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvVGV4dHVyZUF0bGFzRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQyxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRSxpQ0FBaUM7QUFDckc7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSx1Q0FBdUM7QUFDdkM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGNBQWM7QUFDZCxpQkFBaUI7QUFDakI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXBCLElBQUksSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQzNCLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRW5CLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNsRixDQUFDLEdBQUcsQ0FBRSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBRWxGLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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QyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEssTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RyxDQUFDO1FBOUJHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEwsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxH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LENBQUM7SUFDZixDQUFDO0lBQ0wsd0JBQUM7QUFBRCxDQUFDO0FBN0JZLDhDQUFpQiIsImZpbGUiOiJidWlsZC9jbGFkLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAwKTtcbiIsInJlcXVpcmUoJy4uL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnN0cmluZy5pdGVyYXRvcicpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy93ZWIuZG9tLml0ZXJhYmxlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNi5wcm9taXNlJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL2VzNy5wcm9taXNlLmZpbmFsbHknKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UudHJ5Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4uL21vZHVsZXMvX2NvcmUnKS5Qcm9taXNlO1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKHR5cGVvZiBpdCAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhIGZ1bmN0aW9uIScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gMjIuMS4zLjMxIEFycmF5LnByb3RvdHlwZVtAQHVuc2NvcGFibGVzXVxudmFyIFVOU0NPUEFCTEVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3Vuc2NvcGFibGVzJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcbmlmIChBcnJheVByb3RvW1VOU0NPUEFCTEVTXSA9PSB1bmRlZmluZWQpIHJlcXVpcmUoJy4vX2hpZGUnKShBcnJheVByb3RvLCBVTlNDT1BBQkxFUywge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdW2tleV0gPSB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBDb25zdHJ1Y3RvciwgbmFtZSwgZm9yYmlkZGVuRmllbGQpIHtcbiAgaWYgKCEoaXQgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikgfHwgKGZvcmJpZGRlbkZpZWxkICE9PSB1bmRlZmluZWQgJiYgZm9yYmlkZGVuRmllbGQgaW4gaXQpKSB7XG4gICAgdGhyb3cgVHlwZUVycm9yKG5hbWUgKyAnOiBpbmNvcnJlY3QgaW52b2NhdGlvbiEnKTtcbiAgfSByZXR1cm4gaXQ7XG59O1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgdGhyb3cgVHlwZUVycm9yKGl0ICsgJyBpcyBub3QgYW4gb2JqZWN0IScpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gZmFsc2UgLT4gQXJyYXkjaW5kZXhPZlxuLy8gdHJ1ZSAgLT4gQXJyYXkjaW5jbHVkZXNcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgdG9MZW5ndGggPSByZXF1aXJlKCcuL190by1sZW5ndGgnKTtcbnZhciB0b0Fic29sdXRlSW5kZXggPSByZXF1aXJlKCcuL190by1hYnNvbHV0ZS1pbmRleCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoSVNfSU5DTFVERVMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICgkdGhpcywgZWwsIGZyb21JbmRleCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KCR0aGlzKTtcbiAgICB2YXIgbGVuZ3RoID0gdG9MZW5ndGgoTy5sZW5ndGgpO1xuICAgIHZhciBpbmRleCA9IHRvQWJzb2x1dGVJbmRleChmcm9tSW5kZXgsIGxlbmd0aCk7XG4gICAgdmFyIHZhbHVlO1xuICAgIC8vIEFycmF5I2luY2x1ZGVzIHVzZXMgU2FtZVZhbHVlWmVybyBlcXVhbGl0eSBhbGdvcml0aG1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tc2VsZi1jb21wYXJlXG4gICAgaWYgKElTX0lOQ0xVREVTICYmIGVsICE9IGVsKSB3aGlsZSAobGVuZ3RoID4gaW5kZXgpIHtcbiAgICAgIHZhbHVlID0gT1tpbmRleCsrXTtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICAgIGlmICh2YWx1ZSAhPSB2YWx1ZSkgcmV0dXJuIHRydWU7XG4gICAgLy8gQXJyYXkjaW5kZXhPZiBpZ25vcmVzIGhvbGVzLCBBcnJheSNpbmNsdWRlcyAtIG5vdFxuICAgIH0gZWxzZSBmb3IgKDtsZW5ndGggPiBpbmRleDsgaW5kZXgrKykgaWYgKElTX0lOQ0xVREVTIHx8IGluZGV4IGluIE8pIHtcbiAgICAgIGlmIChPW2luZGV4XSA9PT0gZWwpIHJldHVybiBJU19JTkNMVURFUyB8fCBpbmRleCB8fCAwO1xuICAgIH0gcmV0dXJuICFJU19JTkNMVURFUyAmJiAtMTtcbiAgfTtcbn07XG4iLCIvLyBnZXR0aW5nIHRhZyBmcm9tIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuLy8gRVMzIHdyb25nIGhlcmVcbnZhciBBUkcgPSBjb2YoZnVuY3Rpb24gKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpID09ICdBcmd1bWVudHMnO1xuXG4vLyBmYWxsYmFjayBmb3IgSUUxMSBTY3JpcHQgQWNjZXNzIERlbmllZCBlcnJvclxudmFyIHRyeUdldCA9IGZ1bmN0aW9uIChpdCwga2V5KSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGl0W2tleV07XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIE8sIFQsIEI7XG4gIHJldHVybiBpdCA9PT0gdW5kZWZpbmVkID8gJ1VuZGVmaW5lZCcgOiBpdCA9PT0gbnVsbCA/ICdOdWxsJ1xuICAgIC8vIEBAdG9TdHJpbmdUYWcgY2FzZVxuICAgIDogdHlwZW9mIChUID0gdHJ5R2V0KE8gPSBPYmplY3QoaXQpLCBUQUcpKSA9PSAnc3RyaW5nJyA/IFRcbiAgICAvLyBidWlsdGluVGFnIGNhc2VcbiAgICA6IEFSRyA/IGNvZihPKVxuICAgIC8vIEVTMyBhcmd1bWVudHMgZmFsbGJhY2tcbiAgICA6IChCID0gY29mKE8pKSA9PSAnT2JqZWN0JyAmJiB0eXBlb2YgTy5jYWxsZWUgPT0gJ2Z1bmN0aW9uJyA/ICdBcmd1bWVudHMnIDogQjtcbn07XG4iLCJ2YXIgdG9TdHJpbmcgPSB7fS50b1N0cmluZztcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIHRvU3RyaW5nLmNhbGwoaXQpLnNsaWNlKDgsIC0xKTtcbn07XG4iLCJ2YXIgY29yZSA9IG1vZHVsZS5leHBvcnRzID0geyB2ZXJzaW9uOiAnMi41LjQnIH07XG5pZiAodHlwZW9mIF9fZSA9PSAnbnVtYmVyJykgX19lID0gY29yZTsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby11bmRlZlxuIiwiLy8gb3B0aW9uYWwgLyBzaW1wbGUgY29udGV4dCBiaW5kaW5nXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIHRoYXQsIGxlbmd0aCkge1xuICBhRnVuY3Rpb24oZm4pO1xuICBpZiAodGhhdCA9PT0gdW5kZWZpbmVkKSByZXR1cm4gZm47XG4gIHN3aXRjaCAobGVuZ3RoKSB7XG4gICAgY2FzZSAxOiByZXR1cm4gZnVuY3Rpb24gKGEpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEpO1xuICAgIH07XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIpO1xuICAgIH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24gKGEsIGIsIGMpIHtcbiAgICAgIHJldHVybiBmbi5jYWxsKHRoYXQsIGEsIGIsIGMpO1xuICAgIH07XG4gIH1cbiAgcmV0dXJuIGZ1bmN0aW9uICgvKiAuLi5hcmdzICovKSB7XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwiLy8gNy4yLjEgUmVxdWlyZU9iamVjdENvZXJjaWJsZShhcmd1bWVudClcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCA9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNhbGwgbWV0aG9kIG9uICBcIiArIGl0KTtcbiAgcmV0dXJuIGl0O1xufTtcbiIsIi8vIFRoYW5rJ3MgSUU4IGZvciBoaXMgZnVubnkgZGVmaW5lUHJvcGVydHlcbm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHt9LCAnYScsIHsgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiA3OyB9IH0pLmEgIT0gNztcbn0pO1xuIiwidmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbi8vIHR5cGVvZiBkb2N1bWVudC5jcmVhdGVFbGVtZW50IGlzICdvYmplY3QnIGluIG9sZCBJRVxudmFyIGlzID0gaXNPYmplY3QoZG9jdW1lbnQpICYmIGlzT2JqZWN0KGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzID8gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChpdCkgOiB7fTtcbn07XG4iLCIvLyBJRSA4LSBkb24ndCBlbnVtIGJ1ZyBrZXlzXG5tb2R1bGUuZXhwb3J0cyA9IChcbiAgJ2NvbnN0cnVjdG9yLGhhc093blByb3BlcnR5LGlzUHJvdG90eXBlT2YscHJvcGVydHlJc0VudW1lcmFibGUsdG9Mb2NhbGVTdHJpbmcsdG9TdHJpbmcsdmFsdWVPZidcbikuc3BsaXQoJywnKTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG52YXIgJGV4cG9ydCA9IGZ1bmN0aW9uICh0eXBlLCBuYW1lLCBzb3VyY2UpIHtcbiAgdmFyIElTX0ZPUkNFRCA9IHR5cGUgJiAkZXhwb3J0LkY7XG4gIHZhciBJU19HTE9CQUwgPSB0eXBlICYgJGV4cG9ydC5HO1xuICB2YXIgSVNfU1RBVElDID0gdHlwZSAmICRleHBvcnQuUztcbiAgdmFyIElTX1BST1RPID0gdHlwZSAmICRleHBvcnQuUDtcbiAgdmFyIElTX0JJTkQgPSB0eXBlICYgJGV4cG9ydC5CO1xuICB2YXIgdGFyZ2V0ID0gSVNfR0xPQkFMID8gZ2xvYmFsIDogSVNfU1RBVElDID8gZ2xvYmFsW25hbWVdIHx8IChnbG9iYWxbbmFtZV0gPSB7fSkgOiAoZ2xvYmFsW25hbWVdIHx8IHt9KVtQUk9UT1RZUEVdO1xuICB2YXIgZXhwb3J0cyA9IElTX0dMT0JBTCA/IGNvcmUgOiBjb3JlW25hbWVdIHx8IChjb3JlW25hbWVdID0ge30pO1xuICB2YXIgZXhwUHJvdG8gPSBleHBvcnRzW1BST1RPVFlQRV0gfHwgKGV4cG9ydHNbUFJPVE9UWVBFXSA9IHt9KTtcbiAgdmFyIGtleSwgb3duLCBvdXQsIGV4cDtcbiAgaWYgKElTX0dMT0JBTCkgc291cmNlID0gbmFtZTtcbiAgZm9yIChrZXkgaW4gc291cmNlKSB7XG4gICAgLy8gY29udGFpbnMgaW4gbmF0aXZlXG4gICAgb3duID0gIUlTX0ZPUkNFRCAmJiB0YXJnZXQgJiYgdGFyZ2V0W2tleV0gIT09IHVuZGVmaW5lZDtcbiAgICAvLyBleHBvcnQgbmF0aXZlIG9yIHBhc3NlZFxuICAgIG91dCA9IChvd24gPyB0YXJnZXQgOiBzb3VyY2UpW2tleV07XG4gICAgLy8gYmluZCB0aW1lcnMgdG8gZ2xvYmFsIGZvciBjYWxsIGZyb20gZXhwb3J0IGNvbnRleHRcbiAgICBleHAgPSBJU19CSU5EICYmIG93biA/IGN0eChvdXQsIGdsb2JhbCkgOiBJU19QUk9UTyAmJiB0eXBlb2Ygb3V0ID09ICdmdW5jdGlvbicgPyBjdHgoRnVuY3Rpb24uY2FsbCwgb3V0KSA6IG91dDtcbiAgICAvLyBleHRlbmQgZ2xvYmFsXG4gICAgaWYgKHRhcmdldCkgcmVkZWZpbmUodGFyZ2V0LCBrZXksIG91dCwgdHlwZSAmICRleHBvcnQuVSk7XG4gICAgLy8gZXhwb3J0XG4gICAgaWYgKGV4cG9ydHNba2V5XSAhPSBvdXQpIGhpZGUoZXhwb3J0cywga2V5LCBleHApO1xuICAgIGlmIChJU19QUk9UTyAmJiBleHBQcm90b1trZXldICE9IG91dCkgZXhwUHJvdG9ba2V5XSA9IG91dDtcbiAgfVxufTtcbmdsb2JhbC5jb3JlID0gY29yZTtcbi8vIHR5cGUgYml0bWFwXG4kZXhwb3J0LkYgPSAxOyAgIC8vIGZvcmNlZFxuJGV4cG9ydC5HID0gMjsgICAvLyBnbG9iYWxcbiRleHBvcnQuUyA9IDQ7ICAgLy8gc3RhdGljXG4kZXhwb3J0LlAgPSA4OyAgIC8vIHByb3RvXG4kZXhwb3J0LkIgPSAxNjsgIC8vIGJpbmRcbiRleHBvcnQuVyA9IDMyOyAgLy8gd3JhcFxuJGV4cG9ydC5VID0gNjQ7ICAvLyBzYWZlXG4kZXhwb3J0LlIgPSAxMjg7IC8vIHJlYWwgcHJvdG8gbWV0aG9kIGZvciBgbGlicmFyeWBcbm1vZHVsZS5leHBvcnRzID0gJGV4cG9ydDtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gISFleGVjKCk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjYWxsID0gcmVxdWlyZSgnLi9faXRlci1jYWxsJyk7XG52YXIgaXNBcnJheUl0ZXIgPSByZXF1aXJlKCcuL19pcy1hcnJheS1pdGVyJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIGdldEl0ZXJGbiA9IHJlcXVpcmUoJy4vY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kJyk7XG52YXIgQlJFQUsgPSB7fTtcbnZhciBSRVRVUk4gPSB7fTtcbnZhciBleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmFibGUsIGVudHJpZXMsIGZuLCB0aGF0LCBJVEVSQVRPUikge1xuICB2YXIgaXRlckZuID0gSVRFUkFUT1IgPyBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyYWJsZTsgfSA6IGdldEl0ZXJGbihpdGVyYWJsZSk7XG4gIHZhciBmID0gY3R4KGZuLCB0aGF0LCBlbnRyaWVzID8gMiA6IDEpO1xuICB2YXIgaW5kZXggPSAwO1xuICB2YXIgbGVuZ3RoLCBzdGVwLCBpdGVyYXRvciwgcmVzdWx0O1xuICBpZiAodHlwZW9mIGl0ZXJGbiAhPSAnZnVuY3Rpb24nKSB0aHJvdyBUeXBlRXJyb3IoaXRlcmFibGUgKyAnIGlzIG5vdCBpdGVyYWJsZSEnKTtcbiAgLy8gZmFzdCBjYXNlIGZvciBhcnJheXMgd2l0aCBkZWZhdWx0IGl0ZXJhdG9yXG4gIGlmIChpc0FycmF5SXRlcihpdGVyRm4pKSBmb3IgKGxlbmd0aCA9IHRvTGVuZ3RoKGl0ZXJhYmxlLmxlbmd0aCk7IGxlbmd0aCA+IGluZGV4OyBpbmRleCsrKSB7XG4gICAgcmVzdWx0ID0gZW50cmllcyA/IGYoYW5PYmplY3Qoc3RlcCA9IGl0ZXJhYmxlW2luZGV4XSlbMF0sIHN0ZXBbMV0pIDogZihpdGVyYWJsZVtpbmRleF0pO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2UgZm9yIChpdGVyYXRvciA9IGl0ZXJGbi5jYWxsKGl0ZXJhYmxlKTsgIShzdGVwID0gaXRlcmF0b3IubmV4dCgpKS5kb25lOykge1xuICAgIHJlc3VsdCA9IGNhbGwoaXRlcmF0b3IsIGYsIHN0ZXAudmFsdWUsIGVudHJpZXMpO1xuICAgIGlmIChyZXN1bHQgPT09IEJSRUFLIHx8IHJlc3VsdCA9PT0gUkVUVVJOKSByZXR1cm4gcmVzdWx0O1xuICB9XG59O1xuZXhwb3J0cy5CUkVBSyA9IEJSRUFLO1xuZXhwb3J0cy5SRVRVUk4gPSBSRVRVUk47XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvODYjaXNzdWVjb21tZW50LTExNTc1OTAyOFxudmFyIGdsb2JhbCA9IG1vZHVsZS5leHBvcnRzID0gdHlwZW9mIHdpbmRvdyAhPSAndW5kZWZpbmVkJyAmJiB3aW5kb3cuTWF0aCA9PSBNYXRoXG4gID8gd2luZG93IDogdHlwZW9mIHNlbGYgIT0gJ3VuZGVmaW5lZCcgJiYgc2VsZi5NYXRoID09IE1hdGggPyBzZWxmXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICA6IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5pZiAodHlwZW9mIF9fZyA9PSAnbnVtYmVyJykgX19nID0gZ2xvYmFsOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCJ2YXIgaGFzT3duUHJvcGVydHkgPSB7fS5oYXNPd25Qcm9wZXJ0eTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgcmV0dXJuIGhhc093blByb3BlcnR5LmNhbGwoaXQsIGtleSk7XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgY3JlYXRlRGVzYyA9IHJlcXVpcmUoJy4vX3Byb3BlcnR5LWRlc2MnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgcmV0dXJuIGRQLmYob2JqZWN0LCBrZXksIGNyZWF0ZURlc2MoMSwgdmFsdWUpKTtcbn0gOiBmdW5jdGlvbiAob2JqZWN0LCBrZXksIHZhbHVlKSB7XG4gIG9iamVjdFtrZXldID0gdmFsdWU7XG4gIHJldHVybiBvYmplY3Q7XG59O1xuIiwidmFyIGRvY3VtZW50ID0gcmVxdWlyZSgnLi9fZ2xvYmFsJykuZG9jdW1lbnQ7XG5tb2R1bGUuZXhwb3J0cyA9IGRvY3VtZW50ICYmIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcbiIsIm1vZHVsZS5leHBvcnRzID0gIXJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgJiYgIXJlcXVpcmUoJy4vX2ZhaWxzJykoZnVuY3Rpb24gKCkge1xuICByZXR1cm4gT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnZGl2JyksICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCIvLyBmYXN0IGFwcGx5LCBodHRwOi8vanNwZXJmLmxua2l0LmNvbS9mYXN0LWFwcGx5LzVcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGZuLCBhcmdzLCB0aGF0KSB7XG4gIHZhciB1biA9IHRoYXQgPT09IHVuZGVmaW5lZDtcbiAgc3dpdGNoIChhcmdzLmxlbmd0aCkge1xuICAgIGNhc2UgMDogcmV0dXJuIHVuID8gZm4oKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0KTtcbiAgICBjYXNlIDE6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0pO1xuICAgIGNhc2UgMjogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgY2FzZSAzOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICBjYXNlIDQ6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICB9IHJldHVybiBmbi5hcHBseSh0aGF0LCBhcmdzKTtcbn07XG4iLCIvLyBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIGFuZCBub24tZW51bWVyYWJsZSBvbGQgVjggc3RyaW5nc1xudmFyIGNvZiA9IHJlcXVpcmUoJy4vX2NvZicpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QoJ3onKS5wcm9wZXJ0eUlzRW51bWVyYWJsZSgwKSA/IE9iamVjdCA6IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gY29mKGl0KSA9PSAnU3RyaW5nJyA/IGl0LnNwbGl0KCcnKSA6IE9iamVjdChpdCk7XG59O1xuIiwiLy8gY2hlY2sgb24gZGVmYXVsdCBBcnJheSBpdGVyYXRvclxudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQXJyYXlQcm90byA9IEFycmF5LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ICE9PSB1bmRlZmluZWQgJiYgKEl0ZXJhdG9ycy5BcnJheSA9PT0gaXQgfHwgQXJyYXlQcm90b1tJVEVSQVRPUl0gPT09IGl0KTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdHlwZW9mIGl0ID09PSAnb2JqZWN0JyA/IGl0ICE9PSBudWxsIDogdHlwZW9mIGl0ID09PSAnZnVuY3Rpb24nO1xufTtcbiIsIi8vIGNhbGwgc29tZXRoaW5nIG9uIGl0ZXJhdG9yIHN0ZXAgd2l0aCBzYWZlIGNsb3Npbmcgb24gZXJyb3JcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlcmF0b3IsIGZuLCB2YWx1ZSwgZW50cmllcykge1xuICB0cnkge1xuICAgIHJldHVybiBlbnRyaWVzID8gZm4oYW5PYmplY3QodmFsdWUpWzBdLCB2YWx1ZVsxXSkgOiBmbih2YWx1ZSk7XG4gIC8vIDcuNC42IEl0ZXJhdG9yQ2xvc2UoaXRlcmF0b3IsIGNvbXBsZXRpb24pXG4gIH0gY2F0Y2ggKGUpIHtcbiAgICB2YXIgcmV0ID0gaXRlcmF0b3JbJ3JldHVybiddO1xuICAgIGlmIChyZXQgIT09IHVuZGVmaW5lZCkgYW5PYmplY3QocmV0LmNhbGwoaXRlcmF0b3IpKTtcbiAgICB0aHJvdyBlO1xuICB9XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGNyZWF0ZSA9IHJlcXVpcmUoJy4vX29iamVjdC1jcmVhdGUnKTtcbnZhciBkZXNjcmlwdG9yID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBJdGVyYXRvclByb3RvdHlwZSA9IHt9O1xuXG4vLyAyNS4xLjIuMS4xICVJdGVyYXRvclByb3RvdHlwZSVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faGlkZScpKEl0ZXJhdG9yUHJvdG90eXBlLCByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKSwgZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKENvbnN0cnVjdG9yLCBOQU1FLCBuZXh0KSB7XG4gIENvbnN0cnVjdG9yLnByb3RvdHlwZSA9IGNyZWF0ZShJdGVyYXRvclByb3RvdHlwZSwgeyBuZXh0OiBkZXNjcmlwdG9yKDEsIG5leHQpIH0pO1xuICBzZXRUb1N0cmluZ1RhZyhDb25zdHJ1Y3RvciwgTkFNRSArICcgSXRlcmF0b3InKTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIGhpZGUgPSByZXF1aXJlKCcuL19oaWRlJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgJGl0ZXJDcmVhdGUgPSByZXF1aXJlKCcuL19pdGVyLWNyZWF0ZScpO1xudmFyIHNldFRvU3RyaW5nVGFnID0gcmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKTtcbnZhciBnZXRQcm90b3R5cGVPZiA9IHJlcXVpcmUoJy4vX29iamVjdC1ncG8nKTtcbnZhciBJVEVSQVRPUiA9IHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpO1xudmFyIEJVR0dZID0gIShbXS5rZXlzICYmICduZXh0JyBpbiBbXS5rZXlzKCkpOyAvLyBTYWZhcmkgaGFzIGJ1Z2d5IGl0ZXJhdG9ycyB3L28gYG5leHRgXG52YXIgRkZfSVRFUkFUT1IgPSAnQEBpdGVyYXRvcic7XG52YXIgS0VZUyA9ICdrZXlzJztcbnZhciBWQUxVRVMgPSAndmFsdWVzJztcblxudmFyIHJldHVyblRoaXMgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChCYXNlLCBOQU1FLCBDb25zdHJ1Y3RvciwgbmV4dCwgREVGQVVMVCwgSVNfU0VULCBGT1JDRUQpIHtcbiAgJGl0ZXJDcmVhdGUoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpO1xuICB2YXIgZ2V0TWV0aG9kID0gZnVuY3Rpb24gKGtpbmQpIHtcbiAgICBpZiAoIUJVR0dZICYmIGtpbmQgaW4gcHJvdG8pIHJldHVybiBwcm90b1traW5kXTtcbiAgICBzd2l0Y2ggKGtpbmQpIHtcbiAgICAgIGNhc2UgS0VZUzogcmV0dXJuIGZ1bmN0aW9uIGtleXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gICAgICBjYXNlIFZBTFVFUzogcmV0dXJuIGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICB9IHJldHVybiBmdW5jdGlvbiBlbnRyaWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICB9O1xuICB2YXIgVEFHID0gTkFNRSArICcgSXRlcmF0b3InO1xuICB2YXIgREVGX1ZBTFVFUyA9IERFRkFVTFQgPT0gVkFMVUVTO1xuICB2YXIgVkFMVUVTX0JVRyA9IGZhbHNlO1xuICB2YXIgcHJvdG8gPSBCYXNlLnByb3RvdHlwZTtcbiAgdmFyICRuYXRpdmUgPSBwcm90b1tJVEVSQVRPUl0gfHwgcHJvdG9bRkZfSVRFUkFUT1JdIHx8IERFRkFVTFQgJiYgcHJvdG9bREVGQVVMVF07XG4gIHZhciAkZGVmYXVsdCA9ICRuYXRpdmUgfHwgZ2V0TWV0aG9kKERFRkFVTFQpO1xuICB2YXIgJGVudHJpZXMgPSBERUZBVUxUID8gIURFRl9WQUxVRVMgPyAkZGVmYXVsdCA6IGdldE1ldGhvZCgnZW50cmllcycpIDogdW5kZWZpbmVkO1xuICB2YXIgJGFueU5hdGl2ZSA9IE5BTUUgPT0gJ0FycmF5JyA/IHByb3RvLmVudHJpZXMgfHwgJG5hdGl2ZSA6ICRuYXRpdmU7XG4gIHZhciBtZXRob2RzLCBrZXksIEl0ZXJhdG9yUHJvdG90eXBlO1xuICAvLyBGaXggbmF0aXZlXG4gIGlmICgkYW55TmF0aXZlKSB7XG4gICAgSXRlcmF0b3JQcm90b3R5cGUgPSBnZXRQcm90b3R5cGVPZigkYW55TmF0aXZlLmNhbGwobmV3IEJhc2UoKSkpO1xuICAgIGlmIChJdGVyYXRvclByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBJdGVyYXRvclByb3RvdHlwZS5uZXh0KSB7XG4gICAgICAvLyBTZXQgQEB0b1N0cmluZ1RhZyB0byBuYXRpdmUgaXRlcmF0b3JzXG4gICAgICBzZXRUb1N0cmluZ1RhZyhJdGVyYXRvclByb3RvdHlwZSwgVEFHLCB0cnVlKTtcbiAgICAgIC8vIGZpeCBmb3Igc29tZSBvbGQgZW5naW5lc1xuICAgICAgaWYgKCFMSUJSQVJZICYmIHR5cGVvZiBJdGVyYXRvclByb3RvdHlwZVtJVEVSQVRPUl0gIT0gJ2Z1bmN0aW9uJykgaGlkZShJdGVyYXRvclByb3RvdHlwZSwgSVRFUkFUT1IsIHJldHVyblRoaXMpO1xuICAgIH1cbiAgfVxuICAvLyBmaXggQXJyYXkje3ZhbHVlcywgQEBpdGVyYXRvcn0ubmFtZSBpbiBWOCAvIEZGXG4gIGlmIChERUZfVkFMVUVTICYmICRuYXRpdmUgJiYgJG5hdGl2ZS5uYW1lICE9PSBWQUxVRVMpIHtcbiAgICBWQUxVRVNfQlVHID0gdHJ1ZTtcbiAgICAkZGVmYXVsdCA9IGZ1bmN0aW9uIHZhbHVlcygpIHsgcmV0dXJuICRuYXRpdmUuY2FsbCh0aGlzKTsgfTtcbiAgfVxuICAvLyBEZWZpbmUgaXRlcmF0b3JcbiAgaWYgKCghTElCUkFSWSB8fCBGT1JDRUQpICYmIChCVUdHWSB8fCBWQUxVRVNfQlVHIHx8ICFwcm90b1tJVEVSQVRPUl0pKSB7XG4gICAgaGlkZShwcm90bywgSVRFUkFUT1IsICRkZWZhdWx0KTtcbiAgfVxuICAvLyBQbHVnIGZvciBsaWJyYXJ5XG4gIEl0ZXJhdG9yc1tOQU1FXSA9ICRkZWZhdWx0O1xuICBJdGVyYXRvcnNbVEFHXSA9IHJldHVyblRoaXM7XG4gIGlmIChERUZBVUxUKSB7XG4gICAgbWV0aG9kcyA9IHtcbiAgICAgIHZhbHVlczogREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKFZBTFVFUyksXG4gICAgICBrZXlzOiBJU19TRVQgPyAkZGVmYXVsdCA6IGdldE1ldGhvZChLRVlTKSxcbiAgICAgIGVudHJpZXM6ICRlbnRyaWVzXG4gICAgfTtcbiAgICBpZiAoRk9SQ0VEKSBmb3IgKGtleSBpbiBtZXRob2RzKSB7XG4gICAgICBpZiAoIShrZXkgaW4gcHJvdG8pKSByZWRlZmluZShwcm90bywga2V5LCBtZXRob2RzW2tleV0pO1xuICAgIH0gZWxzZSAkZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuRiAqIChCVUdHWSB8fCBWQUxVRVNfQlVHKSwgTkFNRSwgbWV0aG9kcyk7XG4gIH1cbiAgcmV0dXJuIG1ldGhvZHM7XG59O1xuIiwidmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgU0FGRV9DTE9TSU5HID0gZmFsc2U7XG5cbnRyeSB7XG4gIHZhciByaXRlciA9IFs3XVtJVEVSQVRPUl0oKTtcbiAgcml0ZXJbJ3JldHVybiddID0gZnVuY3Rpb24gKCkgeyBTQUZFX0NMT1NJTkcgPSB0cnVlOyB9O1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdGhyb3ctbGl0ZXJhbFxuICBBcnJheS5mcm9tKHJpdGVyLCBmdW5jdGlvbiAoKSB7IHRocm93IDI7IH0pO1xufSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMsIHNraXBDbG9zaW5nKSB7XG4gIGlmICghc2tpcENsb3NpbmcgJiYgIVNBRkVfQ0xPU0lORykgcmV0dXJuIGZhbHNlO1xuICB2YXIgc2FmZSA9IGZhbHNlO1xuICB0cnkge1xuICAgIHZhciBhcnIgPSBbN107XG4gICAgdmFyIGl0ZXIgPSBhcnJbSVRFUkFUT1JdKCk7XG4gICAgaXRlci5uZXh0ID0gZnVuY3Rpb24gKCkgeyByZXR1cm4geyBkb25lOiBzYWZlID0gdHJ1ZSB9OyB9O1xuICAgIGFycltJVEVSQVRPUl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiBpdGVyOyB9O1xuICAgIGV4ZWMoYXJyKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIHJldHVybiBzYWZlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGRvbmUsIHZhbHVlKSB7XG4gIHJldHVybiB7IHZhbHVlOiB2YWx1ZSwgZG9uZTogISFkb25lIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSB7fTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZmFsc2U7XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgbWFjcm90YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBPYnNlcnZlciA9IGdsb2JhbC5NdXRhdGlvbk9ic2VydmVyIHx8IGdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIHByb2Nlc3MgPSBnbG9iYWwucHJvY2VzcztcbnZhciBQcm9taXNlID0gZ2xvYmFsLlByb21pc2U7XG52YXIgaXNOb2RlID0gcmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGhlYWQsIGxhc3QsIG5vdGlmeTtcblxuICB2YXIgZmx1c2ggPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHBhcmVudCwgZm47XG4gICAgaWYgKGlzTm9kZSAmJiAocGFyZW50ID0gcHJvY2Vzcy5kb21haW4pKSBwYXJlbnQuZXhpdCgpO1xuICAgIHdoaWxlIChoZWFkKSB7XG4gICAgICBmbiA9IGhlYWQuZm47XG4gICAgICBoZWFkID0gaGVhZC5uZXh0O1xuICAgICAgdHJ5IHtcbiAgICAgICAgZm4oKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGhlYWQpIG5vdGlmeSgpO1xuICAgICAgICBlbHNlIGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgICAgIHRocm93IGU7XG4gICAgICB9XG4gICAgfSBsYXN0ID0gdW5kZWZpbmVkO1xuICAgIGlmIChwYXJlbnQpIHBhcmVudC5lbnRlcigpO1xuICB9O1xuXG4gIC8vIE5vZGUuanNcbiAgaWYgKGlzTm9kZSkge1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soZmx1c2gpO1xuICAgIH07XG4gIC8vIGJyb3dzZXJzIHdpdGggTXV0YXRpb25PYnNlcnZlciwgZXhjZXB0IGlPUyBTYWZhcmkgLSBodHRwczovL2dpdGh1Yi5jb20vemxvaXJvY2svY29yZS1qcy9pc3N1ZXMvMzM5XG4gIH0gZWxzZSBpZiAoT2JzZXJ2ZXIgJiYgIShnbG9iYWwubmF2aWdhdG9yICYmIGdsb2JhbC5uYXZpZ2F0b3Iuc3RhbmRhbG9uZSkpIHtcbiAgICB2YXIgdG9nZ2xlID0gdHJ1ZTtcbiAgICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgICBuZXcgT2JzZXJ2ZXIoZmx1c2gpLm9ic2VydmUobm9kZSwgeyBjaGFyYWN0ZXJEYXRhOiB0cnVlIH0pOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuICAgIG5vdGlmeSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgIG5vZGUuZGF0YSA9IHRvZ2dsZSA9ICF0b2dnbGU7XG4gICAgfTtcbiAgLy8gZW52aXJvbm1lbnRzIHdpdGggbWF5YmUgbm9uLWNvbXBsZXRlbHkgY29ycmVjdCwgYnV0IGV4aXN0ZW50IFByb21pc2VcbiAgfSBlbHNlIGlmIChQcm9taXNlICYmIFByb21pc2UucmVzb2x2ZSkge1xuICAgIHZhciBwcm9taXNlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvbWlzZS50aGVuKGZsdXNoKTtcbiAgICB9O1xuICAvLyBmb3Igb3RoZXIgZW52aXJvbm1lbnRzIC0gbWFjcm90YXNrIGJhc2VkIG9uOlxuICAvLyAtIHNldEltbWVkaWF0ZVxuICAvLyAtIE1lc3NhZ2VDaGFubmVsXG4gIC8vIC0gd2luZG93LnBvc3RNZXNzYWdcbiAgLy8gLSBvbnJlYWR5c3RhdGVjaGFuZ2VcbiAgLy8gLSBzZXRUaW1lb3V0XG4gIH0gZWxzZSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gc3RyYW5nZSBJRSArIHdlYnBhY2sgZGV2IHNlcnZlciBidWcgLSB1c2UgLmNhbGwoZ2xvYmFsKVxuICAgICAgbWFjcm90YXNrLmNhbGwoZ2xvYmFsLCBmbHVzaCk7XG4gICAgfTtcbiAgfVxuXG4gIHJldHVybiBmdW5jdGlvbiAoZm4pIHtcbiAgICB2YXIgdGFzayA9IHsgZm46IGZuLCBuZXh0OiB1bmRlZmluZWQgfTtcbiAgICBpZiAobGFzdCkgbGFzdC5uZXh0ID0gdGFzaztcbiAgICBpZiAoIWhlYWQpIHtcbiAgICAgIGhlYWQgPSB0YXNrO1xuICAgICAgbm90aWZ5KCk7XG4gICAgfSBsYXN0ID0gdGFzaztcbiAgfTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG4vLyAyNS40LjEuNSBOZXdQcm9taXNlQ2FwYWJpbGl0eShDKVxudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcblxuZnVuY3Rpb24gUHJvbWlzZUNhcGFiaWxpdHkoQykge1xuICB2YXIgcmVzb2x2ZSwgcmVqZWN0O1xuICB0aGlzLnByb21pc2UgPSBuZXcgQyhmdW5jdGlvbiAoJCRyZXNvbHZlLCAkJHJlamVjdCkge1xuICAgIGlmIChyZXNvbHZlICE9PSB1bmRlZmluZWQgfHwgcmVqZWN0ICE9PSB1bmRlZmluZWQpIHRocm93IFR5cGVFcnJvcignQmFkIFByb21pc2UgY29uc3RydWN0b3InKTtcbiAgICByZXNvbHZlID0gJCRyZXNvbHZlO1xuICAgIHJlamVjdCA9ICQkcmVqZWN0O1xuICB9KTtcbiAgdGhpcy5yZXNvbHZlID0gYUZ1bmN0aW9uKHJlc29sdmUpO1xuICB0aGlzLnJlamVjdCA9IGFGdW5jdGlvbihyZWplY3QpO1xufVxuXG5tb2R1bGUuZXhwb3J0cy5mID0gZnVuY3Rpb24gKEMpIHtcbiAgcmV0dXJuIG5ldyBQcm9taXNlQ2FwYWJpbGl0eShDKTtcbn07XG4iLCIvLyAxOS4xLjIuMiAvIDE1LjIuMy41IE9iamVjdC5jcmVhdGUoTyBbLCBQcm9wZXJ0aWVzXSlcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGRQcyA9IHJlcXVpcmUoJy4vX29iamVjdC1kcHMnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcbnZhciBJRV9QUk9UTyA9IHJlcXVpcmUoJy4vX3NoYXJlZC1rZXknKSgnSUVfUFJPVE8nKTtcbnZhciBFbXB0eSA9IGZ1bmN0aW9uICgpIHsgLyogZW1wdHkgKi8gfTtcbnZhciBQUk9UT1RZUEUgPSAncHJvdG90eXBlJztcblxuLy8gQ3JlYXRlIG9iamVjdCB3aXRoIGZha2UgYG51bGxgIHByb3RvdHlwZTogdXNlIGlmcmFtZSBPYmplY3Qgd2l0aCBjbGVhcmVkIHByb3RvdHlwZVxudmFyIGNyZWF0ZURpY3QgPSBmdW5jdGlvbiAoKSB7XG4gIC8vIFRocmFzaCwgd2FzdGUgYW5kIHNvZG9teTogSUUgR0MgYnVnXG4gIHZhciBpZnJhbWUgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJykoJ2lmcmFtZScpO1xuICB2YXIgaSA9IGVudW1CdWdLZXlzLmxlbmd0aDtcbiAgdmFyIGx0ID0gJzwnO1xuICB2YXIgZ3QgPSAnPic7XG4gIHZhciBpZnJhbWVEb2N1bWVudDtcbiAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gIHJlcXVpcmUoJy4vX2h0bWwnKS5hcHBlbmRDaGlsZChpZnJhbWUpO1xuICBpZnJhbWUuc3JjID0gJ2phdmFzY3JpcHQ6JzsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1zY3JpcHQtdXJsXG4gIC8vIGNyZWF0ZURpY3QgPSBpZnJhbWUuY29udGVudFdpbmRvdy5PYmplY3Q7XG4gIC8vIGh0bWwucmVtb3ZlQ2hpbGQoaWZyYW1lKTtcbiAgaWZyYW1lRG9jdW1lbnQgPSBpZnJhbWUuY29udGVudFdpbmRvdy5kb2N1bWVudDtcbiAgaWZyYW1lRG9jdW1lbnQub3BlbigpO1xuICBpZnJhbWVEb2N1bWVudC53cml0ZShsdCArICdzY3JpcHQnICsgZ3QgKyAnZG9jdW1lbnQuRj1PYmplY3QnICsgbHQgKyAnL3NjcmlwdCcgKyBndCk7XG4gIGlmcmFtZURvY3VtZW50LmNsb3NlKCk7XG4gIGNyZWF0ZURpY3QgPSBpZnJhbWVEb2N1bWVudC5GO1xuICB3aGlsZSAoaS0tKSBkZWxldGUgY3JlYXRlRGljdFtQUk9UT1RZUEVdW2VudW1CdWdLZXlzW2ldXTtcbiAgcmV0dXJuIGNyZWF0ZURpY3QoKTtcbn07XG5cbm1vZHVsZS5leHBvcnRzID0gT2JqZWN0LmNyZWF0ZSB8fCBmdW5jdGlvbiBjcmVhdGUoTywgUHJvcGVydGllcykge1xuICB2YXIgcmVzdWx0O1xuICBpZiAoTyAhPT0gbnVsbCkge1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBhbk9iamVjdChPKTtcbiAgICByZXN1bHQgPSBuZXcgRW1wdHkoKTtcbiAgICBFbXB0eVtQUk9UT1RZUEVdID0gbnVsbDtcbiAgICAvLyBhZGQgXCJfX3Byb3RvX19cIiBmb3IgT2JqZWN0LmdldFByb3RvdHlwZU9mIHBvbHlmaWxsXG4gICAgcmVzdWx0W0lFX1BST1RPXSA9IE87XG4gIH0gZWxzZSByZXN1bHQgPSBjcmVhdGVEaWN0KCk7XG4gIHJldHVybiBQcm9wZXJ0aWVzID09PSB1bmRlZmluZWQgPyByZXN1bHQgOiBkUHMocmVzdWx0LCBQcm9wZXJ0aWVzKTtcbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBJRThfRE9NX0RFRklORSA9IHJlcXVpcmUoJy4vX2llOC1kb20tZGVmaW5lJyk7XG52YXIgdG9QcmltaXRpdmUgPSByZXF1aXJlKCcuL190by1wcmltaXRpdmUnKTtcbnZhciBkUCA9IE9iamVjdC5kZWZpbmVQcm9wZXJ0eTtcblxuZXhwb3J0cy5mID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eSA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnR5KE8sIFAsIEF0dHJpYnV0ZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIFAgPSB0b1ByaW1pdGl2ZShQLCB0cnVlKTtcbiAgYW5PYmplY3QoQXR0cmlidXRlcyk7XG4gIGlmIChJRThfRE9NX0RFRklORSkgdHJ5IHtcbiAgICByZXR1cm4gZFAoTywgUCwgQXR0cmlidXRlcyk7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxuICBpZiAoJ2dldCcgaW4gQXR0cmlidXRlcyB8fCAnc2V0JyBpbiBBdHRyaWJ1dGVzKSB0aHJvdyBUeXBlRXJyb3IoJ0FjY2Vzc29ycyBub3Qgc3VwcG9ydGVkIScpO1xuICBpZiAoJ3ZhbHVlJyBpbiBBdHRyaWJ1dGVzKSBPW1BdID0gQXR0cmlidXRlcy52YWx1ZTtcbiAgcmV0dXJuIE87XG59O1xuIiwidmFyIGRQID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMgOiBmdW5jdGlvbiBkZWZpbmVQcm9wZXJ0aWVzKE8sIFByb3BlcnRpZXMpIHtcbiAgYW5PYmplY3QoTyk7XG4gIHZhciBrZXlzID0gZ2V0S2V5cyhQcm9wZXJ0aWVzKTtcbiAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBQO1xuICB3aGlsZSAobGVuZ3RoID4gaSkgZFAuZihPLCBQID0ga2V5c1tpKytdLCBQcm9wZXJ0aWVzW1BdKTtcbiAgcmV0dXJuIE87XG59O1xuIiwiLy8gMTkuMS4yLjkgLyAxNS4yLjMuMiBPYmplY3QuZ2V0UHJvdG90eXBlT2YoTylcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b09iamVjdCA9IHJlcXVpcmUoJy4vX3RvLW9iamVjdCcpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIE9iamVjdFByb3RvID0gT2JqZWN0LnByb3RvdHlwZTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YgfHwgZnVuY3Rpb24gKE8pIHtcbiAgTyA9IHRvT2JqZWN0KE8pO1xuICBpZiAoaGFzKE8sIElFX1BST1RPKSkgcmV0dXJuIE9bSUVfUFJPVE9dO1xuICBpZiAodHlwZW9mIE8uY29uc3RydWN0b3IgPT0gJ2Z1bmN0aW9uJyAmJiBPIGluc3RhbmNlb2YgTy5jb25zdHJ1Y3Rvcikge1xuICAgIHJldHVybiBPLmNvbnN0cnVjdG9yLnByb3RvdHlwZTtcbiAgfSByZXR1cm4gTyBpbnN0YW5jZW9mIE9iamVjdCA/IE9iamVjdFByb3RvIDogbnVsbDtcbn07XG4iLCJ2YXIgaGFzID0gcmVxdWlyZSgnLi9faGFzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xudmFyIGFycmF5SW5kZXhPZiA9IHJlcXVpcmUoJy4vX2FycmF5LWluY2x1ZGVzJykoZmFsc2UpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChvYmplY3QsIG5hbWVzKSB7XG4gIHZhciBPID0gdG9JT2JqZWN0KG9iamVjdCk7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIga2V5O1xuICBmb3IgKGtleSBpbiBPKSBpZiAoa2V5ICE9IElFX1BST1RPKSBoYXMoTywga2V5KSAmJiByZXN1bHQucHVzaChrZXkpO1xuICAvLyBEb24ndCBlbnVtIGJ1ZyAmIGhpZGRlbiBrZXlzXG4gIHdoaWxlIChuYW1lcy5sZW5ndGggPiBpKSBpZiAoaGFzKE8sIGtleSA9IG5hbWVzW2krK10pKSB7XG4gICAgfmFycmF5SW5kZXhPZihyZXN1bHQsIGtleSkgfHwgcmVzdWx0LnB1c2goa2V5KTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsIi8vIDE5LjEuMi4xNCAvIDE1LjIuMy4xNCBPYmplY3Qua2V5cyhPKVxudmFyICRrZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMtaW50ZXJuYWwnKTtcbnZhciBlbnVtQnVnS2V5cyA9IHJlcXVpcmUoJy4vX2VudW0tYnVnLWtleXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3Qua2V5cyB8fCBmdW5jdGlvbiBrZXlzKE8pIHtcbiAgcmV0dXJuICRrZXlzKE8sIGVudW1CdWdLZXlzKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChleGVjKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIHsgZTogZmFsc2UsIHY6IGV4ZWMoKSB9O1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHsgZTogdHJ1ZSwgdjogZSB9O1xuICB9XG59O1xuIiwidmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IHJlcXVpcmUoJy4vX25ldy1wcm9taXNlLWNhcGFiaWxpdHknKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQywgeCkge1xuICBhbk9iamVjdChDKTtcbiAgaWYgKGlzT2JqZWN0KHgpICYmIHguY29uc3RydWN0b3IgPT09IEMpIHJldHVybiB4O1xuICB2YXIgcHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eS5mKEMpO1xuICB2YXIgcmVzb2x2ZSA9IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmU7XG4gIHJlc29sdmUoeCk7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGJpdG1hcCwgdmFsdWUpIHtcbiAgcmV0dXJuIHtcbiAgICBlbnVtZXJhYmxlOiAhKGJpdG1hcCAmIDEpLFxuICAgIGNvbmZpZ3VyYWJsZTogIShiaXRtYXAgJiAyKSxcbiAgICB3cml0YWJsZTogIShiaXRtYXAgJiA0KSxcbiAgICB2YWx1ZTogdmFsdWVcbiAgfTtcbn07XG4iLCJ2YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodGFyZ2V0LCBzcmMsIHNhZmUpIHtcbiAgZm9yICh2YXIga2V5IGluIHNyYykgcmVkZWZpbmUodGFyZ2V0LCBrZXksIHNyY1trZXldLCBzYWZlKTtcbiAgcmV0dXJuIHRhcmdldDtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBTUkMgPSByZXF1aXJlKCcuL191aWQnKSgnc3JjJyk7XG52YXIgVE9fU1RSSU5HID0gJ3RvU3RyaW5nJztcbnZhciAkdG9TdHJpbmcgPSBGdW5jdGlvbltUT19TVFJJTkddO1xudmFyIFRQTCA9ICgnJyArICR0b1N0cmluZykuc3BsaXQoVE9fU1RSSU5HKTtcblxucmVxdWlyZSgnLi9fY29yZScpLmluc3BlY3RTb3VyY2UgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuICR0b1N0cmluZy5jYWxsKGl0KTtcbn07XG5cbihtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBrZXksIHZhbCwgc2FmZSkge1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiB2YWwgPT0gJ2Z1bmN0aW9uJztcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsICduYW1lJykgfHwgaGlkZSh2YWwsICduYW1lJywga2V5KTtcbiAgaWYgKE9ba2V5XSA9PT0gdmFsKSByZXR1cm47XG4gIGlmIChpc0Z1bmN0aW9uKSBoYXModmFsLCBTUkMpIHx8IGhpZGUodmFsLCBTUkMsIE9ba2V5XSA/ICcnICsgT1trZXldIDogVFBMLmpvaW4oU3RyaW5nKGtleSkpKTtcbiAgaWYgKE8gPT09IGdsb2JhbCkge1xuICAgIE9ba2V5XSA9IHZhbDtcbiAgfSBlbHNlIGlmICghc2FmZSkge1xuICAgIGRlbGV0ZSBPW2tleV07XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH0gZWxzZSBpZiAoT1trZXldKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2Uge1xuICAgIGhpZGUoTywga2V5LCB2YWwpO1xuICB9XG4vLyBhZGQgZmFrZSBGdW5jdGlvbiN0b1N0cmluZyBmb3IgY29ycmVjdCB3b3JrIHdyYXBwZWQgbWV0aG9kcyAvIGNvbnN0cnVjdG9ycyB3aXRoIG1ldGhvZHMgbGlrZSBMb0Rhc2ggaXNOYXRpdmVcbn0pKEZ1bmN0aW9uLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgcmV0dXJuIHR5cGVvZiB0aGlzID09ICdmdW5jdGlvbicgJiYgdGhpc1tTUkNdIHx8ICR0b1N0cmluZy5jYWxsKHRoaXMpO1xufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBERVNDUklQVE9SUyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEtFWSkge1xuICB2YXIgQyA9IGdsb2JhbFtLRVldO1xuICBpZiAoREVTQ1JJUFRPUlMgJiYgQyAmJiAhQ1tTUEVDSUVTXSkgZFAuZihDLCBTUEVDSUVTLCB7XG4gICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfVxuICB9KTtcbn07XG4iLCJ2YXIgZGVmID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwJykuZjtcbnZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBUQUcgPSByZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIHRhZywgc3RhdCkge1xuICBpZiAoaXQgJiYgIWhhcyhpdCA9IHN0YXQgPyBpdCA6IGl0LnByb3RvdHlwZSwgVEFHKSkgZGVmKGl0LCBUQUcsIHsgY29uZmlndXJhYmxlOiB0cnVlLCB2YWx1ZTogdGFnIH0pO1xufTtcbiIsInZhciBzaGFyZWQgPSByZXF1aXJlKCcuL19zaGFyZWQnKSgna2V5cycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzaGFyZWRba2V5XSB8fCAoc2hhcmVkW2tleV0gPSB1aWQoa2V5KSk7XG59O1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIFNIQVJFRCA9ICdfX2NvcmUtanNfc2hhcmVkX18nO1xudmFyIHN0b3JlID0gZ2xvYmFsW1NIQVJFRF0gfHwgKGdsb2JhbFtTSEFSRURdID0ge30pO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiBzdG9yZVtrZXldIHx8IChzdG9yZVtrZXldID0ge30pO1xufTtcbiIsIi8vIDcuMy4yMCBTcGVjaWVzQ29uc3RydWN0b3IoTywgZGVmYXVsdENvbnN0cnVjdG9yKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIFNQRUNJRVMgPSByZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoTywgRCkge1xuICB2YXIgQyA9IGFuT2JqZWN0KE8pLmNvbnN0cnVjdG9yO1xuICB2YXIgUztcbiAgcmV0dXJuIEMgPT09IHVuZGVmaW5lZCB8fCAoUyA9IGFuT2JqZWN0KEMpW1NQRUNJRVNdKSA9PSB1bmRlZmluZWQgPyBEIDogYUZ1bmN0aW9uKFMpO1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbi8vIHRydWUgIC0+IFN0cmluZyNhdFxuLy8gZmFsc2UgLT4gU3RyaW5nI2NvZGVQb2ludEF0XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChUT19TVFJJTkcpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uICh0aGF0LCBwb3MpIHtcbiAgICB2YXIgcyA9IFN0cmluZyhkZWZpbmVkKHRoYXQpKTtcbiAgICB2YXIgaSA9IHRvSW50ZWdlcihwb3MpO1xuICAgIHZhciBsID0gcy5sZW5ndGg7XG4gICAgdmFyIGEsIGI7XG4gICAgaWYgKGkgPCAwIHx8IGkgPj0gbCkgcmV0dXJuIFRPX1NUUklORyA/ICcnIDogdW5kZWZpbmVkO1xuICAgIGEgPSBzLmNoYXJDb2RlQXQoaSk7XG4gICAgcmV0dXJuIGEgPCAweGQ4MDAgfHwgYSA+IDB4ZGJmZiB8fCBpICsgMSA9PT0gbCB8fCAoYiA9IHMuY2hhckNvZGVBdChpICsgMSkpIDwgMHhkYzAwIHx8IGIgPiAweGRmZmZcbiAgICAgID8gVE9fU1RSSU5HID8gcy5jaGFyQXQoaSkgOiBhXG4gICAgICA6IFRPX1NUUklORyA/IHMuc2xpY2UoaSwgaSArIDIpIDogKGEgLSAweGQ4MDAgPDwgMTApICsgKGIgLSAweGRjMDApICsgMHgxMDAwMDtcbiAgfTtcbn07XG4iLCJ2YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgaW52b2tlID0gcmVxdWlyZSgnLi9faW52b2tlJyk7XG52YXIgaHRtbCA9IHJlcXVpcmUoJy4vX2h0bWwnKTtcbnZhciBjZWwgPSByZXF1aXJlKCcuL19kb20tY3JlYXRlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIHNldFRhc2sgPSBnbG9iYWwuc2V0SW1tZWRpYXRlO1xudmFyIGNsZWFyVGFzayA9IGdsb2JhbC5jbGVhckltbWVkaWF0ZTtcbnZhciBNZXNzYWdlQ2hhbm5lbCA9IGdsb2JhbC5NZXNzYWdlQ2hhbm5lbDtcbnZhciBEaXNwYXRjaCA9IGdsb2JhbC5EaXNwYXRjaDtcbnZhciBjb3VudGVyID0gMDtcbnZhciBxdWV1ZSA9IHt9O1xudmFyIE9OUkVBRFlTVEFURUNIQU5HRSA9ICdvbnJlYWR5c3RhdGVjaGFuZ2UnO1xudmFyIGRlZmVyLCBjaGFubmVsLCBwb3J0O1xudmFyIHJ1biA9IGZ1bmN0aW9uICgpIHtcbiAgdmFyIGlkID0gK3RoaXM7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgaWYgKHF1ZXVlLmhhc093blByb3BlcnR5KGlkKSkge1xuICAgIHZhciBmbiA9IHF1ZXVlW2lkXTtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICAgIGZuKCk7XG4gIH1cbn07XG52YXIgbGlzdGVuZXIgPSBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgcnVuLmNhbGwoZXZlbnQuZGF0YSk7XG59O1xuLy8gTm9kZS5qcyAwLjkrICYgSUUxMCsgaGFzIHNldEltbWVkaWF0ZSwgb3RoZXJ3aXNlOlxuaWYgKCFzZXRUYXNrIHx8ICFjbGVhclRhc2spIHtcbiAgc2V0VGFzayA9IGZ1bmN0aW9uIHNldEltbWVkaWF0ZShmbikge1xuICAgIHZhciBhcmdzID0gW107XG4gICAgdmFyIGkgPSAxO1xuICAgIHdoaWxlIChhcmd1bWVudHMubGVuZ3RoID4gaSkgYXJncy5wdXNoKGFyZ3VtZW50c1tpKytdKTtcbiAgICBxdWV1ZVsrK2NvdW50ZXJdID0gZnVuY3Rpb24gKCkge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICBpbnZva2UodHlwZW9mIGZuID09ICdmdW5jdGlvbicgPyBmbiA6IEZ1bmN0aW9uKGZuKSwgYXJncyk7XG4gICAgfTtcbiAgICBkZWZlcihjb3VudGVyKTtcbiAgICByZXR1cm4gY291bnRlcjtcbiAgfTtcbiAgY2xlYXJUYXNrID0gZnVuY3Rpb24gY2xlYXJJbW1lZGlhdGUoaWQpIHtcbiAgICBkZWxldGUgcXVldWVbaWRdO1xuICB9O1xuICAvLyBOb2RlLmpzIDAuOC1cbiAgaWYgKHJlcXVpcmUoJy4vX2NvZicpKHByb2Nlc3MpID09ICdwcm9jZXNzJykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBwcm9jZXNzLm5leHRUaWNrKGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gU3BoZXJlIChKUyBnYW1lIGVuZ2luZSkgRGlzcGF0Y2ggQVBJXG4gIH0gZWxzZSBpZiAoRGlzcGF0Y2ggJiYgRGlzcGF0Y2gubm93KSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIERpc3BhdGNoLm5vdyhjdHgocnVuLCBpZCwgMSkpO1xuICAgIH07XG4gIC8vIEJyb3dzZXJzIHdpdGggTWVzc2FnZUNoYW5uZWwsIGluY2x1ZGVzIFdlYldvcmtlcnNcbiAgfSBlbHNlIGlmIChNZXNzYWdlQ2hhbm5lbCkge1xuICAgIGNoYW5uZWwgPSBuZXcgTWVzc2FnZUNoYW5uZWwoKTtcbiAgICBwb3J0ID0gY2hhbm5lbC5wb3J0MjtcbiAgICBjaGFubmVsLnBvcnQxLm9ubWVzc2FnZSA9IGxpc3RlbmVyO1xuICAgIGRlZmVyID0gY3R4KHBvcnQucG9zdE1lc3NhZ2UsIHBvcnQsIDEpO1xuICAvLyBCcm93c2VycyB3aXRoIHBvc3RNZXNzYWdlLCBza2lwIFdlYldvcmtlcnNcbiAgLy8gSUU4IGhhcyBwb3N0TWVzc2FnZSwgYnV0IGl0J3Mgc3luYyAmIHR5cGVvZiBpdHMgcG9zdE1lc3NhZ2UgaXMgJ29iamVjdCdcbiAgfSBlbHNlIGlmIChnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lciAmJiB0eXBlb2YgcG9zdE1lc3NhZ2UgPT0gJ2Z1bmN0aW9uJyAmJiAhZ2xvYmFsLmltcG9ydFNjcmlwdHMpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgZ2xvYmFsLnBvc3RNZXNzYWdlKGlkICsgJycsICcqJyk7XG4gICAgfTtcbiAgICBnbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGxpc3RlbmVyLCBmYWxzZSk7XG4gIC8vIElFOC1cbiAgfSBlbHNlIGlmIChPTlJFQURZU1RBVEVDSEFOR0UgaW4gY2VsKCdzY3JpcHQnKSkge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBodG1sLmFwcGVuZENoaWxkKGNlbCgnc2NyaXB0JykpW09OUkVBRFlTVEFURUNIQU5HRV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGh0bWwucmVtb3ZlQ2hpbGQodGhpcyk7XG4gICAgICAgIHJ1bi5jYWxsKGlkKTtcbiAgICAgIH07XG4gICAgfTtcbiAgLy8gUmVzdCBvbGQgYnJvd3NlcnNcbiAgfSBlbHNlIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgc2V0VGltZW91dChjdHgocnVuLCBpZCwgMSksIDApO1xuICAgIH07XG4gIH1cbn1cbm1vZHVsZS5leHBvcnRzID0ge1xuICBzZXQ6IHNldFRhc2ssXG4gIGNsZWFyOiBjbGVhclRhc2tcbn07XG4iLCJ2YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1heCA9IE1hdGgubWF4O1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaW5kZXgsIGxlbmd0aCkge1xuICBpbmRleCA9IHRvSW50ZWdlcihpbmRleCk7XG4gIHJldHVybiBpbmRleCA8IDAgPyBtYXgoaW5kZXggKyBsZW5ndGgsIDApIDogbWluKGluZGV4LCBsZW5ndGgpO1xufTtcbiIsIi8vIDcuMS40IFRvSW50ZWdlclxudmFyIGNlaWwgPSBNYXRoLmNlaWw7XG52YXIgZmxvb3IgPSBNYXRoLmZsb29yO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGlzTmFOKGl0ID0gK2l0KSA/IDAgOiAoaXQgPiAwID8gZmxvb3IgOiBjZWlsKShpdCk7XG59O1xuIiwiLy8gdG8gaW5kZXhlZCBvYmplY3QsIHRvT2JqZWN0IHdpdGggZmFsbGJhY2sgZm9yIG5vbi1hcnJheS1saWtlIEVTMyBzdHJpbmdzXG52YXIgSU9iamVjdCA9IHJlcXVpcmUoJy4vX2lvYmplY3QnKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIElPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xNSBUb0xlbmd0aFxudmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBtaW4gPSBNYXRoLm1pbjtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBpdCA+IDAgPyBtaW4odG9JbnRlZ2VyKGl0KSwgMHgxZmZmZmZmZmZmZmZmZikgOiAwOyAvLyBwb3coMiwgNTMpIC0gMSA9PSA5MDA3MTk5MjU0NzQwOTkxXG59O1xuIiwiLy8gNy4xLjEzIFRvT2JqZWN0KGFyZ3VtZW50KVxudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gT2JqZWN0KGRlZmluZWQoaXQpKTtcbn07XG4iLCIvLyA3LjEuMSBUb1ByaW1pdGl2ZShpbnB1dCBbLCBQcmVmZXJyZWRUeXBlXSlcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xuLy8gaW5zdGVhZCBvZiB0aGUgRVM2IHNwZWMgdmVyc2lvbiwgd2UgZGlkbid0IGltcGxlbWVudCBAQHRvUHJpbWl0aXZlIGNhc2Vcbi8vIGFuZCB0aGUgc2Vjb25kIGFyZ3VtZW50IC0gZmxhZyAtIHByZWZlcnJlZCB0eXBlIGlzIGEgc3RyaW5nXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgUykge1xuICBpZiAoIWlzT2JqZWN0KGl0KSkgcmV0dXJuIGl0O1xuICB2YXIgZm4sIHZhbDtcbiAgaWYgKFMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICh0eXBlb2YgKGZuID0gaXQudmFsdWVPZikgPT0gJ2Z1bmN0aW9uJyAmJiAhaXNPYmplY3QodmFsID0gZm4uY2FsbChpdCkpKSByZXR1cm4gdmFsO1xuICBpZiAoIVMgJiYgdHlwZW9mIChmbiA9IGl0LnRvU3RyaW5nKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIHRocm93IFR5cGVFcnJvcihcIkNhbid0IGNvbnZlcnQgb2JqZWN0IHRvIHByaW1pdGl2ZSB2YWx1ZVwiKTtcbn07XG4iLCJ2YXIgaWQgPSAwO1xudmFyIHB4ID0gTWF0aC5yYW5kb20oKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGtleSkge1xuICByZXR1cm4gJ1N5bWJvbCgnLmNvbmNhdChrZXkgPT09IHVuZGVmaW5lZCA/ICcnIDoga2V5LCAnKV8nLCAoKytpZCArIHB4KS50b1N0cmluZygzNikpO1xufTtcbiIsInZhciBzdG9yZSA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCd3a3MnKTtcbnZhciB1aWQgPSByZXF1aXJlKCcuL191aWQnKTtcbnZhciBTeW1ib2wgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5TeW1ib2w7XG52YXIgVVNFX1NZTUJPTCA9IHR5cGVvZiBTeW1ib2wgPT0gJ2Z1bmN0aW9uJztcblxudmFyICRleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobmFtZSkge1xuICByZXR1cm4gc3RvcmVbbmFtZV0gfHwgKHN0b3JlW25hbWVdID1cbiAgICBVU0VfU1lNQk9MICYmIFN5bWJvbFtuYW1lXSB8fCAoVVNFX1NZTUJPTCA/IFN5bWJvbCA6IHVpZCkoJ1N5bWJvbC4nICsgbmFtZSkpO1xufTtcblxuJGV4cG9ydHMuc3RvcmUgPSBzdG9yZTtcbiIsInZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2NvcmUnKS5nZXRJdGVyYXRvck1ldGhvZCA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAoaXQgIT0gdW5kZWZpbmVkKSByZXR1cm4gaXRbSVRFUkFUT1JdXG4gICAgfHwgaXRbJ0BAaXRlcmF0b3InXVxuICAgIHx8IEl0ZXJhdG9yc1tjbGFzc29mKGl0KV07XG59O1xuIiwiJ3VzZSBzdHJpY3QnO1xudmFyIGFkZFRvVW5zY29wYWJsZXMgPSByZXF1aXJlKCcuL19hZGQtdG8tdW5zY29wYWJsZXMnKTtcbnZhciBzdGVwID0gcmVxdWlyZSgnLi9faXRlci1zdGVwJyk7XG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgdG9JT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8taW9iamVjdCcpO1xuXG4vLyAyMi4xLjMuNCBBcnJheS5wcm90b3R5cGUuZW50cmllcygpXG4vLyAyMi4xLjMuMTMgQXJyYXkucHJvdG90eXBlLmtleXMoKVxuLy8gMjIuMS4zLjI5IEFycmF5LnByb3RvdHlwZS52YWx1ZXMoKVxuLy8gMjIuMS4zLjMwIEFycmF5LnByb3RvdHlwZVtAQGl0ZXJhdG9yXSgpXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoQXJyYXksICdBcnJheScsIGZ1bmN0aW9uIChpdGVyYXRlZCwga2luZCkge1xuICB0aGlzLl90ID0gdG9JT2JqZWN0KGl0ZXJhdGVkKTsgLy8gdGFyZ2V0XG4gIHRoaXMuX2kgPSAwOyAgICAgICAgICAgICAgICAgICAvLyBuZXh0IGluZGV4XG4gIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAvLyBraW5kXG4vLyAyMi4xLjUuMi4xICVBcnJheUl0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIga2luZCA9IHRoaXMuX2s7XG4gIHZhciBpbmRleCA9IHRoaXMuX2krKztcbiAgaWYgKCFPIHx8IGluZGV4ID49IE8ubGVuZ3RoKSB7XG4gICAgdGhpcy5fdCA9IHVuZGVmaW5lZDtcbiAgICByZXR1cm4gc3RlcCgxKTtcbiAgfVxuICBpZiAoa2luZCA9PSAna2V5cycpIHJldHVybiBzdGVwKDAsIGluZGV4KTtcbiAgaWYgKGtpbmQgPT0gJ3ZhbHVlcycpIHJldHVybiBzdGVwKDAsIE9baW5kZXhdKTtcbiAgcmV0dXJuIHN0ZXAoMCwgW2luZGV4LCBPW2luZGV4XV0pO1xufSwgJ3ZhbHVlcycpO1xuXG4vLyBhcmd1bWVudHNMaXN0W0BAaXRlcmF0b3JdIGlzICVBcnJheVByb3RvX3ZhbHVlcyUgKDkuNC40LjYsIDkuNC40LjcpXG5JdGVyYXRvcnMuQXJndW1lbnRzID0gSXRlcmF0b3JzLkFycmF5O1xuXG5hZGRUb1Vuc2NvcGFibGVzKCdrZXlzJyk7XG5hZGRUb1Vuc2NvcGFibGVzKCd2YWx1ZXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ2VudHJpZXMnKTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDE5LjEuMy42IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcoKVxudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgdGVzdCA9IHt9O1xudGVzdFtyZXF1aXJlKCcuL193a3MnKSgndG9TdHJpbmdUYWcnKV0gPSAneic7XG5pZiAodGVzdCArICcnICE9ICdbb2JqZWN0IHpdJykge1xuICByZXF1aXJlKCcuL19yZWRlZmluZScpKE9iamVjdC5wcm90b3R5cGUsICd0b1N0cmluZycsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAnW29iamVjdCAnICsgY2xhc3NvZih0aGlzKSArICddJztcbiAgfSwgdHJ1ZSk7XG59XG4iLCIndXNlIHN0cmljdCc7XG52YXIgTElCUkFSWSA9IHJlcXVpcmUoJy4vX2xpYnJhcnknKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBjbGFzc29mID0gcmVxdWlyZSgnLi9fY2xhc3NvZicpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIGFGdW5jdGlvbiA9IHJlcXVpcmUoJy4vX2EtZnVuY3Rpb24nKTtcbnZhciBhbkluc3RhbmNlID0gcmVxdWlyZSgnLi9fYW4taW5zdGFuY2UnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciB0YXNrID0gcmVxdWlyZSgnLi9fdGFzaycpLnNldDtcbnZhciBtaWNyb3Rhc2sgPSByZXF1aXJlKCcuL19taWNyb3Rhc2snKSgpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG52YXIgcHJvbWlzZVJlc29sdmUgPSByZXF1aXJlKCcuL19wcm9taXNlLXJlc29sdmUnKTtcbnZhciBQUk9NSVNFID0gJ1Byb21pc2UnO1xudmFyIFR5cGVFcnJvciA9IGdsb2JhbC5UeXBlRXJyb3I7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyICRQcm9taXNlID0gZ2xvYmFsW1BST01JU0VdO1xudmFyIGlzTm9kZSA9IGNsYXNzb2YocHJvY2VzcykgPT0gJ3Byb2Nlc3MnO1xudmFyIGVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIEludGVybmFsLCBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHksIE93blByb21pc2VDYXBhYmlsaXR5LCBXcmFwcGVyO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZjtcblxudmFyIFVTRV9OQVRJVkUgPSAhIWZ1bmN0aW9uICgpIHtcbiAgdHJ5IHtcbiAgICAvLyBjb3JyZWN0IHN1YmNsYXNzaW5nIHdpdGggQEBzcGVjaWVzIHN1cHBvcnRcbiAgICB2YXIgcHJvbWlzZSA9ICRQcm9taXNlLnJlc29sdmUoMSk7XG4gICAgdmFyIEZha2VQcm9taXNlID0gKHByb21pc2UuY29uc3RydWN0b3IgPSB7fSlbcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKV0gPSBmdW5jdGlvbiAoZXhlYykge1xuICAgICAgZXhlYyhlbXB0eSwgZW1wdHkpO1xuICAgIH07XG4gICAgLy8gdW5oYW5kbGVkIHJlamVjdGlvbnMgdHJhY2tpbmcgc3VwcG9ydCwgTm9kZUpTIFByb21pc2Ugd2l0aG91dCBpdCBmYWlscyBAQHNwZWNpZXMgdGVzdFxuICAgIHJldHVybiAoaXNOb2RlIHx8IHR5cGVvZiBQcm9taXNlUmVqZWN0aW9uRXZlbnQgPT0gJ2Z1bmN0aW9uJykgJiYgcHJvbWlzZS50aGVuKGVtcHR5KSBpbnN0YW5jZW9mIEZha2VQcm9taXNlO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbn0oKTtcblxuLy8gaGVscGVyc1xudmFyIGlzVGhlbmFibGUgPSBmdW5jdGlvbiAoaXQpIHtcbiAgdmFyIHRoZW47XG4gIHJldHVybiBpc09iamVjdChpdCkgJiYgdHlwZW9mICh0aGVuID0gaXQudGhlbikgPT0gJ2Z1bmN0aW9uJyA/IHRoZW4gOiBmYWxzZTtcbn07XG52YXIgbm90aWZ5ID0gZnVuY3Rpb24gKHByb21pc2UsIGlzUmVqZWN0KSB7XG4gIGlmIChwcm9taXNlLl9uKSByZXR1cm47XG4gIHByb21pc2UuX24gPSB0cnVlO1xuICB2YXIgY2hhaW4gPSBwcm9taXNlLl9jO1xuICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIG9rID0gcHJvbWlzZS5fcyA9PSAxO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcnVuID0gZnVuY3Rpb24gKHJlYWN0aW9uKSB7XG4gICAgICB2YXIgaGFuZGxlciA9IG9rID8gcmVhY3Rpb24ub2sgOiByZWFjdGlvbi5mYWlsO1xuICAgICAgdmFyIHJlc29sdmUgPSByZWFjdGlvbi5yZXNvbHZlO1xuICAgICAgdmFyIHJlamVjdCA9IHJlYWN0aW9uLnJlamVjdDtcbiAgICAgIHZhciBkb21haW4gPSByZWFjdGlvbi5kb21haW47XG4gICAgICB2YXIgcmVzdWx0LCB0aGVuLCBleGl0ZWQ7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoaGFuZGxlcikge1xuICAgICAgICAgIGlmICghb2spIHtcbiAgICAgICAgICAgIGlmIChwcm9taXNlLl9oID09IDIpIG9uSGFuZGxlVW5oYW5kbGVkKHByb21pc2UpO1xuICAgICAgICAgICAgcHJvbWlzZS5faCA9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChoYW5kbGVyID09PSB0cnVlKSByZXN1bHQgPSB2YWx1ZTtcbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmIChkb21haW4pIGRvbWFpbi5lbnRlcigpO1xuICAgICAgICAgICAgcmVzdWx0ID0gaGFuZGxlcih2YWx1ZSk7IC8vIG1heSB0aHJvd1xuICAgICAgICAgICAgaWYgKGRvbWFpbikge1xuICAgICAgICAgICAgICBkb21haW4uZXhpdCgpO1xuICAgICAgICAgICAgICBleGl0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocmVzdWx0ID09PSByZWFjdGlvbi5wcm9taXNlKSB7XG4gICAgICAgICAgICByZWplY3QoVHlwZUVycm9yKCdQcm9taXNlLWNoYWluIGN5Y2xlJykpO1xuICAgICAgICAgIH0gZWxzZSBpZiAodGhlbiA9IGlzVGhlbmFibGUocmVzdWx0KSkge1xuICAgICAgICAgICAgdGhlbi5jYWxsKHJlc3VsdCwgcmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgICAgICB9IGVsc2UgcmVzb2x2ZShyZXN1bHQpO1xuICAgICAgICB9IGVsc2UgcmVqZWN0KHZhbHVlKTtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgaWYgKGRvbWFpbiAmJiAhZXhpdGVkKSBkb21haW4uZXhpdCgpO1xuICAgICAgICByZWplY3QoZSk7XG4gICAgICB9XG4gICAgfTtcbiAgICB3aGlsZSAoY2hhaW4ubGVuZ3RoID4gaSkgcnVuKGNoYWluW2krK10pOyAvLyB2YXJpYWJsZSBsZW5ndGggLSBjYW4ndCB1c2UgZm9yRWFjaFxuICAgIHByb21pc2UuX2MgPSBbXTtcbiAgICBwcm9taXNlLl9uID0gZmFsc2U7XG4gICAgaWYgKGlzUmVqZWN0ICYmICFwcm9taXNlLl9oKSBvblVuaGFuZGxlZChwcm9taXNlKTtcbiAgfSk7XG59O1xudmFyIG9uVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciB2YWx1ZSA9IHByb21pc2UuX3Y7XG4gICAgdmFyIHVuaGFuZGxlZCA9IGlzVW5oYW5kbGVkKHByb21pc2UpO1xuICAgIHZhciByZXN1bHQsIGhhbmRsZXIsIGNvbnNvbGU7XG4gICAgaWYgKHVuaGFuZGxlZCkge1xuICAgICAgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICAgIGlmIChpc05vZGUpIHtcbiAgICAgICAgICBwcm9jZXNzLmVtaXQoJ3VuaGFuZGxlZFJlamVjdGlvbicsIHZhbHVlLCBwcm9taXNlKTtcbiAgICAgICAgfSBlbHNlIGlmIChoYW5kbGVyID0gZ2xvYmFsLm9udW5oYW5kbGVkcmVqZWN0aW9uKSB7XG4gICAgICAgICAgaGFuZGxlcih7IHByb21pc2U6IHByb21pc2UsIHJlYXNvbjogdmFsdWUgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAoKGNvbnNvbGUgPSBnbG9iYWwuY29uc29sZSkgJiYgY29uc29sZS5lcnJvcikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ1VuaGFuZGxlZCBwcm9taXNlIHJlamVjdGlvbicsIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICAvLyBCcm93c2VycyBzaG91bGQgbm90IHRyaWdnZXIgYHJlamVjdGlvbkhhbmRsZWRgIGV2ZW50IGlmIGl0IHdhcyBoYW5kbGVkIGhlcmUsIE5vZGVKUyAtIHNob3VsZFxuICAgICAgcHJvbWlzZS5faCA9IGlzTm9kZSB8fCBpc1VuaGFuZGxlZChwcm9taXNlKSA/IDIgOiAxO1xuICAgIH0gcHJvbWlzZS5fYSA9IHVuZGVmaW5lZDtcbiAgICBpZiAodW5oYW5kbGVkICYmIHJlc3VsdC5lKSB0aHJvdyByZXN1bHQudjtcbiAgfSk7XG59O1xudmFyIGlzVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgcmV0dXJuIHByb21pc2UuX2ggIT09IDEgJiYgKHByb21pc2UuX2EgfHwgcHJvbWlzZS5fYykubGVuZ3RoID09PSAwO1xufTtcbnZhciBvbkhhbmRsZVVuaGFuZGxlZCA9IGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gIHRhc2suY2FsbChnbG9iYWwsIGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgaGFuZGxlcjtcbiAgICBpZiAoaXNOb2RlKSB7XG4gICAgICBwcm9jZXNzLmVtaXQoJ3JlamVjdGlvbkhhbmRsZWQnLCBwcm9taXNlKTtcbiAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub25yZWplY3Rpb25oYW5kbGVkKSB7XG4gICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiBwcm9taXNlLl92IH0pO1xuICAgIH1cbiAgfSk7XG59O1xudmFyICRyZWplY3QgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgdmFyIHByb21pc2UgPSB0aGlzO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHByb21pc2UuX3YgPSB2YWx1ZTtcbiAgcHJvbWlzZS5fcyA9IDI7XG4gIGlmICghcHJvbWlzZS5fYSkgcHJvbWlzZS5fYSA9IHByb21pc2UuX2Muc2xpY2UoKTtcbiAgbm90aWZ5KHByb21pc2UsIHRydWUpO1xufTtcbnZhciAkcmVzb2x2ZSA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIHZhciB0aGVuO1xuICBpZiAocHJvbWlzZS5fZCkgcmV0dXJuO1xuICBwcm9taXNlLl9kID0gdHJ1ZTtcbiAgcHJvbWlzZSA9IHByb21pc2UuX3cgfHwgcHJvbWlzZTsgLy8gdW53cmFwXG4gIHRyeSB7XG4gICAgaWYgKHByb21pc2UgPT09IHZhbHVlKSB0aHJvdyBUeXBlRXJyb3IoXCJQcm9taXNlIGNhbid0IGJlIHJlc29sdmVkIGl0c2VsZlwiKTtcbiAgICBpZiAodGhlbiA9IGlzVGhlbmFibGUodmFsdWUpKSB7XG4gICAgICBtaWNyb3Rhc2soZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgd3JhcHBlciA9IHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9OyAvLyB3cmFwXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgdGhlbi5jYWxsKHZhbHVlLCBjdHgoJHJlc29sdmUsIHdyYXBwZXIsIDEpLCBjdHgoJHJlamVjdCwgd3JhcHBlciwgMSkpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgJHJlamVjdC5jYWxsKHdyYXBwZXIsIGUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICAgICAgcHJvbWlzZS5fcyA9IDE7XG4gICAgICBub3RpZnkocHJvbWlzZSwgZmFsc2UpO1xuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgICRyZWplY3QuY2FsbCh7IF93OiBwcm9taXNlLCBfZDogZmFsc2UgfSwgZSk7IC8vIHdyYXBcbiAgfVxufTtcblxuLy8gY29uc3RydWN0b3IgcG9seWZpbGxcbmlmICghVVNFX05BVElWRSkge1xuICAvLyAyNS40LjMuMSBQcm9taXNlKGV4ZWN1dG9yKVxuICAkUHJvbWlzZSA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICBhbkluc3RhbmNlKHRoaXMsICRQcm9taXNlLCBQUk9NSVNFLCAnX2gnKTtcbiAgICBhRnVuY3Rpb24oZXhlY3V0b3IpO1xuICAgIEludGVybmFsLmNhbGwodGhpcyk7XG4gICAgdHJ5IHtcbiAgICAgIGV4ZWN1dG9yKGN0eCgkcmVzb2x2ZSwgdGhpcywgMSksIGN0eCgkcmVqZWN0LCB0aGlzLCAxKSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAkcmVqZWN0LmNhbGwodGhpcywgZXJyKTtcbiAgICB9XG4gIH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bnVzZWQtdmFyc1xuICBJbnRlcm5hbCA9IGZ1bmN0aW9uIFByb21pc2UoZXhlY3V0b3IpIHtcbiAgICB0aGlzLl9jID0gW107ICAgICAgICAgICAgIC8vIDwtIGF3YWl0aW5nIHJlYWN0aW9uc1xuICAgIHRoaXMuX2EgPSB1bmRlZmluZWQ7ICAgICAgLy8gPC0gY2hlY2tlZCBpbiBpc1VuaGFuZGxlZCByZWFjdGlvbnNcbiAgICB0aGlzLl9zID0gMDsgICAgICAgICAgICAgIC8vIDwtIHN0YXRlXG4gICAgdGhpcy5fZCA9IGZhbHNlOyAgICAgICAgICAvLyA8LSBkb25lXG4gICAgdGhpcy5fdiA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSB2YWx1ZVxuICAgIHRoaXMuX2ggPSAwOyAgICAgICAgICAgICAgLy8gPC0gcmVqZWN0aW9uIHN0YXRlLCAwIC0gZGVmYXVsdCwgMSAtIGhhbmRsZWQsIDIgLSB1bmhhbmRsZWRcbiAgICB0aGlzLl9uID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIG5vdGlmeVxuICB9O1xuICBJbnRlcm5hbC5wcm90b3R5cGUgPSByZXF1aXJlKCcuL19yZWRlZmluZS1hbGwnKSgkUHJvbWlzZS5wcm90b3R5cGUsIHtcbiAgICAvLyAyNS40LjUuMyBQcm9taXNlLnByb3RvdHlwZS50aGVuKG9uRnVsZmlsbGVkLCBvblJlamVjdGVkKVxuICAgIHRoZW46IGZ1bmN0aW9uIHRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpIHtcbiAgICAgIHZhciByZWFjdGlvbiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCAkUHJvbWlzZSkpO1xuICAgICAgcmVhY3Rpb24ub2sgPSB0eXBlb2Ygb25GdWxmaWxsZWQgPT0gJ2Z1bmN0aW9uJyA/IG9uRnVsZmlsbGVkIDogdHJ1ZTtcbiAgICAgIHJlYWN0aW9uLmZhaWwgPSB0eXBlb2Ygb25SZWplY3RlZCA9PSAnZnVuY3Rpb24nICYmIG9uUmVqZWN0ZWQ7XG4gICAgICByZWFjdGlvbi5kb21haW4gPSBpc05vZGUgPyBwcm9jZXNzLmRvbWFpbiA6IHVuZGVmaW5lZDtcbiAgICAgIHRoaXMuX2MucHVzaChyZWFjdGlvbik7XG4gICAgICBpZiAodGhpcy5fYSkgdGhpcy5fYS5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9zKSBub3RpZnkodGhpcywgZmFsc2UpO1xuICAgICAgcmV0dXJuIHJlYWN0aW9uLnByb21pc2U7XG4gICAgfSxcbiAgICAvLyAyNS40LjUuMSBQcm9taXNlLnByb3RvdHlwZS5jYXRjaChvblJlamVjdGVkKVxuICAgICdjYXRjaCc6IGZ1bmN0aW9uIChvblJlamVjdGVkKSB7XG4gICAgICByZXR1cm4gdGhpcy50aGVuKHVuZGVmaW5lZCwgb25SZWplY3RlZCk7XG4gICAgfVxuICB9KTtcbiAgT3duUHJvbWlzZUNhcGFiaWxpdHkgPSBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHByb21pc2UgPSBuZXcgSW50ZXJuYWwoKTtcbiAgICB0aGlzLnByb21pc2UgPSBwcm9taXNlO1xuICAgIHRoaXMucmVzb2x2ZSA9IGN0eCgkcmVzb2x2ZSwgcHJvbWlzZSwgMSk7XG4gICAgdGhpcy5yZWplY3QgPSBjdHgoJHJlamVjdCwgcHJvbWlzZSwgMSk7XG4gIH07XG4gIG5ld1Byb21pc2VDYXBhYmlsaXR5TW9kdWxlLmYgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uIChDKSB7XG4gICAgcmV0dXJuIEMgPT09ICRQcm9taXNlIHx8IEMgPT09IFdyYXBwZXJcbiAgICAgID8gbmV3IE93blByb21pc2VDYXBhYmlsaXR5KEMpXG4gICAgICA6IG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgfTtcbn1cblxuJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgeyBQcm9taXNlOiAkUHJvbWlzZSB9KTtcbnJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJykoJFByb21pc2UsIFBST01JU0UpO1xucmVxdWlyZSgnLi9fc2V0LXNwZWNpZXMnKShQUk9NSVNFKTtcbldyYXBwZXIgPSByZXF1aXJlKCcuL19jb3JlJylbUFJPTUlTRV07XG5cbi8vIHN0YXRpY3NcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogIVVTRV9OQVRJVkUsIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjUgUHJvbWlzZS5yZWplY3QocilcbiAgcmVqZWN0OiBmdW5jdGlvbiByZWplY3Qocikge1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkodGhpcyk7XG4gICAgdmFyICQkcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgJCRyZWplY3Qocik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqIChMSUJSQVJZIHx8ICFVU0VfTkFUSVZFKSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNiBQcm9taXNlLnJlc29sdmUoeClcbiAgcmVzb2x2ZTogZnVuY3Rpb24gcmVzb2x2ZSh4KSB7XG4gICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKExJQlJBUlkgJiYgdGhpcyA9PT0gV3JhcHBlciA/ICRQcm9taXNlIDogdGhpcywgeCk7XG4gIH1cbn0pO1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhKFVTRV9OQVRJVkUgJiYgcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKShmdW5jdGlvbiAoaXRlcikge1xuICAkUHJvbWlzZS5hbGwoaXRlcilbJ2NhdGNoJ10oZW1wdHkpO1xufSkpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC4xIFByb21pc2UuYWxsKGl0ZXJhYmxlKVxuICBhbGw6IGZ1bmN0aW9uIGFsbChpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZXNvbHZlID0gY2FwYWJpbGl0eS5yZXNvbHZlO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgdmFsdWVzID0gW107XG4gICAgICB2YXIgaW5kZXggPSAwO1xuICAgICAgdmFyIHJlbWFpbmluZyA9IDE7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIHZhciAkaW5kZXggPSBpbmRleCsrO1xuICAgICAgICB2YXIgYWxyZWFkeUNhbGxlZCA9IGZhbHNlO1xuICAgICAgICB2YWx1ZXMucHVzaCh1bmRlZmluZWQpO1xuICAgICAgICByZW1haW5pbmcrKztcbiAgICAgICAgQy5yZXNvbHZlKHByb21pc2UpLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgICAgaWYgKGFscmVhZHlDYWxsZWQpIHJldHVybjtcbiAgICAgICAgICBhbHJlYWR5Q2FsbGVkID0gdHJ1ZTtcbiAgICAgICAgICB2YWx1ZXNbJGluZGV4XSA9IHZhbHVlO1xuICAgICAgICAgIC0tcmVtYWluaW5nIHx8IHJlc29sdmUodmFsdWVzKTtcbiAgICAgICAgfSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9LFxuICAvLyAyNS40LjQuNCBQcm9taXNlLnJhY2UoaXRlcmFibGUpXG4gIHJhY2U6IGZ1bmN0aW9uIHJhY2UoaXRlcmFibGUpIHtcbiAgICB2YXIgQyA9IHRoaXM7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eShDKTtcbiAgICB2YXIgcmVqZWN0ID0gY2FwYWJpbGl0eS5yZWplY3Q7XG4gICAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oZnVuY3Rpb24gKCkge1xuICAgICAgZm9yT2YoaXRlcmFibGUsIGZhbHNlLCBmdW5jdGlvbiAocHJvbWlzZSkge1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihjYXBhYmlsaXR5LnJlc29sdmUsIHJlamVjdCk7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBpZiAocmVzdWx0LmUpIHJlamVjdChyZXN1bHQudik7XG4gICAgcmV0dXJuIGNhcGFiaWxpdHkucHJvbWlzZTtcbiAgfVxufSk7XG4iLCIndXNlIHN0cmljdCc7XG52YXIgJGF0ID0gcmVxdWlyZSgnLi9fc3RyaW5nLWF0JykodHJ1ZSk7XG5cbi8vIDIxLjEuMy4yNyBTdHJpbmcucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbnJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJykoU3RyaW5nLCAnU3RyaW5nJywgZnVuY3Rpb24gKGl0ZXJhdGVkKSB7XG4gIHRoaXMuX3QgPSBTdHJpbmcoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbi8vIDIxLjEuNS4yLjEgJVN0cmluZ0l0ZXJhdG9yUHJvdG90eXBlJS5uZXh0KClcbn0sIGZ1bmN0aW9uICgpIHtcbiAgdmFyIE8gPSB0aGlzLl90O1xuICB2YXIgaW5kZXggPSB0aGlzLl9pO1xuICB2YXIgcG9pbnQ7XG4gIGlmIChpbmRleCA+PSBPLmxlbmd0aCkgcmV0dXJuIHsgdmFsdWU6IHVuZGVmaW5lZCwgZG9uZTogdHJ1ZSB9O1xuICBwb2ludCA9ICRhdChPLCBpbmRleCk7XG4gIHRoaXMuX2kgKz0gcG9pbnQubGVuZ3RoO1xuICByZXR1cm4geyB2YWx1ZTogcG9pbnQsIGRvbmU6IGZhbHNlIH07XG59KTtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtZmluYWxseVxuJ3VzZSBzdHJpY3QnO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciBjb3JlID0gcmVxdWlyZSgnLi9fY29yZScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIHNwZWNpZXNDb25zdHJ1Y3RvciA9IHJlcXVpcmUoJy4vX3NwZWNpZXMtY29uc3RydWN0b3InKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xuXG4kZXhwb3J0KCRleHBvcnQuUCArICRleHBvcnQuUiwgJ1Byb21pc2UnLCB7ICdmaW5hbGx5JzogZnVuY3Rpb24gKG9uRmluYWxseSkge1xuICB2YXIgQyA9IHNwZWNpZXNDb25zdHJ1Y3Rvcih0aGlzLCBjb3JlLlByb21pc2UgfHwgZ2xvYmFsLlByb21pc2UpO1xuICB2YXIgaXNGdW5jdGlvbiA9IHR5cGVvZiBvbkZpbmFsbHkgPT0gJ2Z1bmN0aW9uJztcbiAgcmV0dXJuIHRoaXMudGhlbihcbiAgICBpc0Z1bmN0aW9uID8gZnVuY3Rpb24gKHgpIHtcbiAgICAgIHJldHVybiBwcm9taXNlUmVzb2x2ZShDLCBvbkZpbmFsbHkoKSkudGhlbihmdW5jdGlvbiAoKSB7IHJldHVybiB4OyB9KTtcbiAgICB9IDogb25GaW5hbGx5LFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoZSkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgdGhyb3cgZTsgfSk7XG4gICAgfSA6IG9uRmluYWxseVxuICApO1xufSB9KTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIGh0dHBzOi8vZ2l0aHViLmNvbS90YzM5L3Byb3Bvc2FsLXByb21pc2UtdHJ5XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xudmFyIHBlcmZvcm0gPSByZXF1aXJlKCcuL19wZXJmb3JtJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnUHJvbWlzZScsIHsgJ3RyeSc6IGZ1bmN0aW9uIChjYWxsYmFja2ZuKSB7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYodGhpcyk7XG4gIHZhciByZXN1bHQgPSBwZXJmb3JtKGNhbGxiYWNrZm4pO1xuICAocmVzdWx0LmUgPyBwcm9taXNlQ2FwYWJpbGl0eS5yZWplY3QgOiBwcm9taXNlQ2FwYWJpbGl0eS5yZXNvbHZlKShyZXN1bHQudik7XG4gIHJldHVybiBwcm9taXNlQ2FwYWJpbGl0eS5wcm9taXNlO1xufSB9KTtcbiIsInZhciAkaXRlcmF0b3JzID0gcmVxdWlyZSgnLi9lczYuYXJyYXkuaXRlcmF0b3InKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB3a3MgPSByZXF1aXJlKCcuL193a3MnKTtcbnZhciBJVEVSQVRPUiA9IHdrcygnaXRlcmF0b3InKTtcbnZhciBUT19TVFJJTkdfVEFHID0gd2tzKCd0b1N0cmluZ1RhZycpO1xudmFyIEFycmF5VmFsdWVzID0gSXRlcmF0b3JzLkFycmF5O1xuXG52YXIgRE9NSXRlcmFibGVzID0ge1xuICBDU1NSdWxlTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIENTU1N0eWxlRGVjbGFyYXRpb246IGZhbHNlLFxuICBDU1NWYWx1ZUxpc3Q6IGZhbHNlLFxuICBDbGllbnRSZWN0TGlzdDogZmFsc2UsXG4gIERPTVJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NU3RyaW5nTGlzdDogZmFsc2UsXG4gIERPTVRva2VuTGlzdDogdHJ1ZSxcbiAgRGF0YVRyYW5zZmVySXRlbUxpc3Q6IGZhbHNlLFxuICBGaWxlTGlzdDogZmFsc2UsXG4gIEhUTUxBbGxDb2xsZWN0aW9uOiBmYWxzZSxcbiAgSFRNTENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MRm9ybUVsZW1lbnQ6IGZhbHNlLFxuICBIVE1MU2VsZWN0RWxlbWVudDogZmFsc2UsXG4gIE1lZGlhTGlzdDogdHJ1ZSwgLy8gVE9ETzogTm90IHNwZWMgY29tcGxpYW50LCBzaG91bGQgYmUgZmFsc2UuXG4gIE1pbWVUeXBlQXJyYXk6IGZhbHNlLFxuICBOYW1lZE5vZGVNYXA6IGZhbHNlLFxuICBOb2RlTGlzdDogdHJ1ZSxcbiAgUGFpbnRSZXF1ZXN0TGlzdDogZmFsc2UsXG4gIFBsdWdpbjogZmFsc2UsXG4gIFBsdWdpbkFycmF5OiBmYWxzZSxcbiAgU1ZHTGVuZ3RoTGlzdDogZmFsc2UsXG4gIFNWR051bWJlckxpc3Q6IGZhbHNlLFxuICBTVkdQYXRoU2VnTGlzdDogZmFsc2UsXG4gIFNWR1BvaW50TGlzdDogZmFsc2UsXG4gIFNWR1N0cmluZ0xpc3Q6IGZhbHNlLFxuICBTVkdUcmFuc2Zvcm1MaXN0OiBmYWxzZSxcbiAgU291cmNlQnVmZmVyTGlzdDogZmFsc2UsXG4gIFN0eWxlU2hlZXRMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgVGV4dFRyYWNrQ3VlTGlzdDogZmFsc2UsXG4gIFRleHRUcmFja0xpc3Q6IGZhbHNlLFxuICBUb3VjaExpc3Q6IGZhbHNlXG59O1xuXG5mb3IgKHZhciBjb2xsZWN0aW9ucyA9IGdldEtleXMoRE9NSXRlcmFibGVzKSwgaSA9IDA7IGkgPCBjb2xsZWN0aW9ucy5sZW5ndGg7IGkrKykge1xuICB2YXIgTkFNRSA9IGNvbGxlY3Rpb25zW2ldO1xuICB2YXIgZXhwbGljaXQgPSBET01JdGVyYWJsZXNbTkFNRV07XG4gIHZhciBDb2xsZWN0aW9uID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgcHJvdG8gPSBDb2xsZWN0aW9uICYmIENvbGxlY3Rpb24ucHJvdG90eXBlO1xuICB2YXIga2V5O1xuICBpZiAocHJvdG8pIHtcbiAgICBpZiAoIXByb3RvW0lURVJBVE9SXSkgaGlkZShwcm90bywgSVRFUkFUT1IsIEFycmF5VmFsdWVzKTtcbiAgICBpZiAoIXByb3RvW1RPX1NUUklOR19UQUddKSBoaWRlKHByb3RvLCBUT19TVFJJTkdfVEFHLCBOQU1FKTtcbiAgICBJdGVyYXRvcnNbTkFNRV0gPSBBcnJheVZhbHVlcztcbiAgICBpZiAoZXhwbGljaXQpIGZvciAoa2V5IGluICRpdGVyYXRvcnMpIGlmICghcHJvdG9ba2V5XSkgcmVkZWZpbmUocHJvdG8sIGtleSwgJGl0ZXJhdG9yc1trZXldLCB0cnVlKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtEaWFsb2d9IGZyb20gXCIuL0RpYWxvZ1wiXHJcbmltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi4vaXRlbXMvSW52ZW50b3J5XCJcclxuXHJcbmV4cG9ydCBjbGFzcyBDb250aW51ZURpYWxvZyBleHRlbmRzIERpYWxvZ1xyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIHNwZWFrZXI6IHN0cmluZywgYXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBuZXh0RGlhbG9nOiBEaWFsb2cpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIodGV4dCwgc3BlYWtlciwgYXVkaW8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVHVUlFbGVtZW50KGRpdjogSFRNTERpdkVsZW1lbnQsIGludmVudDogSW52ZW50b3J5KTogUHJvbWlzZTxEaWFsb2c+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERpYWxvZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGRpYWxvZyB0ZXh0XHJcbiAgICAgICAgICAgIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHR4dC5jbGFzc0xpc3QuYWRkKFwiY2hhdG1zZ1wiKTtcclxuICAgICAgICAgICAgdHh0LmlubmVySFRNTCA9IHRoaXMudGV4dDtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiB0byBhZHZhbmNlIHRvIHRoZSBuZXh0IGRpYWxvZ1xyXG4gICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJjaGF0YnRuXCIpO1xyXG4gICAgICAgICAgICBidG4uaW5uZXJIVE1MID0gXCJDb250aW51ZVwiO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGFsbCBuZXcgZWxlbWVudHMgdG8gZGl2XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0eHQpO1xyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGNhbGxiYWNrIGZvciB0aGUgY29udGludWUgYnV0dG9uXHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKGV2bnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5uZXh0RGlhbG9nKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4vRGlhbG9nXCJcclxuXHJcbi8vIGNvbnZlcnNhdGlvbiBiZXR3ZWVuIHRoZSBwbGF5ZXIgYW5kIGFuIE5QQ1xyXG5leHBvcnQgY2xhc3MgQ29udmVyc2F0aW9uXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgZmlyc3REaWFsb2c6IERpYWxvZykge31cclxuXHJcbiAgICBwdWJsaWMgZ2V0Rmlyc3REaWFsb2coKTogRGlhbG9nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5maXJzdERpYWxvZztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4uL2l0ZW1zL0ludmVudG9yeVwiXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgRGlhbG9nXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB0ZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBzcGVha2VyOiBzdHJpbmcsIHByb3RlY3RlZCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCkge31cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgY3JlYXRlR1VJRWxlbWVudChkaXY6IEhUTUxEaXZFbGVtZW50LCBpbnZlbnQ6IEludmVudG9yeSk6IFByb21pc2U8RGlhbG9nPjtcclxuXHJcbiAgICBwdWJsaWMgZ2V0VGV4dCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFNwZWFrZXIoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zcGVha2VyO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRBdWRpbygpOiBIVE1MQXVkaW9FbGVtZW50IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5hdWRpbztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4vRGlhbG9nXCJcclxuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuLi9pdGVtcy9JbnZlbnRvcnlcIlxyXG5cclxuZXhwb3J0IGNsYXNzIE9wdGlvbkRpYWxvZyBleHRlbmRzIERpYWxvZ1xyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIHNwZWFrZXI6IHN0cmluZywgYXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBvcHRpb25zOiB7W3RleHQ6IHN0cmluZ106IERpYWxvZ30pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIodGV4dCwgc3BlYWtlciwgYXVkaW8pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjcmVhdGVHVUlFbGVtZW50KGRpdjogSFRNTERpdkVsZW1lbnQsIGludmVudDogSW52ZW50b3J5KTogUHJvbWlzZTxEaWFsb2c+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERpYWxvZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvLyBhZGQgdGhlIGRpYWxvZyB0ZXh0XHJcbiAgICAgICAgICAgIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgIHR4dC5jbGFzc0xpc3QuYWRkKFwiY2hhdG1zZ1wiKTtcclxuICAgICAgICAgICAgdHh0LmlubmVySFRNTCA9IHRoaXMudGV4dDtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCB0ZXh0IGVsZW1lbnQgdG8gZGl2XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0eHQpO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGRpYWxvZyBvcHRpb25cclxuICAgICAgICAgICAgZm9yKGxldCBvcHRpb24gaW4gdGhpcy5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiY2hhdGJ0blwiKTtcclxuICAgICAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBvcHRpb247XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgYSBjYWxsYmFjayBmb3IgdGhlIG9wdGlvbiBidXR0b25cclxuICAgICAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKGV2bnQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHRoaXMub3B0aW9uc1tvcHRpb25dKTtcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0NvbnRpbnVlRGlhbG9nfSBmcm9tIFwiLi9Db250aW51ZURpYWxvZ1wiXHJcbmltcG9ydCB7RGlhbG9nfSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuLi9pdGVtcy9JbnZlbnRvcnlcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY2VpdmVJdGVtRGlhbG9nIGV4dGVuZHMgQ29udGludWVEaWFsb2dcclxue1xyXG4gICAgcHJpdmF0ZSByZXBsYWNlZDogYm9vbGVhbiA9IGZhbHNlOyAgLy8gdHJ1ZSBpZmYgdGhlIHBsYXllciBoYXMgYWxyZWFkeSBleGNoYW5nZWQgaXRlbXMgYmVmb3JlXHJcblxyXG4gICAgY29uc3RydWN0b3IodGV4dDogc3RyaW5nLCBzcGVha2VyOiBzdHJpbmcsIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBuZXh0RGlhbG9nOiBEaWFsb2csIHByb3RlY3RlZCBpdGVtc0xvc3Q6IEFycmF5PEl0ZW0+LCBwcm90ZWN0ZWQgaXRlbXNSZWNlaXZlZDogQXJyYXk8SXRlbT4sIHByb3RlY3RlZCByZXBsYWNlbWVudERpYWxvZzogRGlhbG9nKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHRleHQsIHNwZWFrZXIsIGF1ZGlvLCBuZXh0RGlhbG9nKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGludmVudENvbnRhaW5zQWxsSXRlbXMoaW52ZW50OiBJbnZlbnRvcnkpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgbGV0IGNvbnRhaW5zQWxsSXRlbXM6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgIGZvcihjb25zdCBpdGVtIG9mIHRoaXMuaXRlbXNMb3N0KSB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpbnZlbnQgZG9lc24ndCBjb250YWluIGFueSByZXF1aXJlZCBpdGVtLCB0aGVuIGV4aXRcclxuICAgICAgICAgICAgaWYoIWludmVudC5jb250YWluc0l0ZW0oaXRlbSkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5zQWxsSXRlbXMgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBjb250YWluc0FsbEl0ZW1zO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgdXBkYXRlSW52ZW50b3J5KGludmVudDogSW52ZW50b3J5KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIC8vIHJlbW92ZSBhbGwgaXRlbXMgdG8gYmUgcmVtb3ZlZFxyXG4gICAgICAgIGZvcihjb25zdCBpdGVtIG9mIHRoaXMuaXRlbXNMb3N0KSB7XHJcbiAgICAgICAgICAgIGludmVudC5yZW1vdmVJdGVtKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gYWRkIGFsbCBpdGVtcyB0byBiZSBhZGRlZFxyXG4gICAgICAgIGZvcihjb25zdCBpdGVtIG9mIHRoaXMuaXRlbXNSZWNlaXZlZCkge1xyXG4gICAgICAgICAgICBpbnZlbnQuYWRkSXRlbShpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUdVSUVsZW1lbnQoZGl2OiBIVE1MRGl2RWxlbWVudCwgaW52ZW50OiBJbnZlbnRvcnkpOiBQcm9taXNlPERpYWxvZz5cclxuICAgIHtcclxuICAgICAgICBpZih0aGlzLnJlcGxhY2VkKSB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMucmVwbGFjZW1lbnREaWFsb2cgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVwbGFjZW1lbnREaWFsb2cuY3JlYXRlR1VJRWxlbWVudChkaXYsIGludmVudCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxEaWFsb2c+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgY29udGFpbnNBbGxJdGVtczogYm9vbGVhbiA9IHRoaXMuaW52ZW50Q29udGFpbnNBbGxJdGVtcyhpbnZlbnQpO1xyXG4gICAgICAgICAgICBpZihjb250YWluc0FsbEl0ZW1zKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgaXRlbXNMb3N0IGFuZCBhZGQgaXRlbXNSZWNlaXZlZCBmcm9tL3RvIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVJbnZlbnRvcnkoaW52ZW50KTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIGRpYWxvZyB0ZXh0XHJcbiAgICAgICAgICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgdHh0LmNsYXNzTGlzdC5hZGQoXCJjaGF0bXNnXCIpO1xyXG4gICAgICAgICAgICAgICAgdHh0LmlubmVySFRNTCA9IHRoaXMudGV4dDtcclxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZCh0eHQpOyAgIC8vIGFkZCB0ZXh0IGVsZW1lbnQgdG8gZGl2XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pdGVtc0xvc3QgIT0gbnVsbCAmJiB0aGlzLml0ZW1zTG9zdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zTG9zdExibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc0xvc3RMYmwuY2xhc3NMaXN0LmFkZChcImNoYXRpbWdoZWFkZXJcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNMb3N0TGJsLmlubmVySFRNTCA9IFwiWW91IExvc3RcIjtcclxuICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaXRlbXNMb3N0TGJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGFuIGltYWdlIGZvciBlYWNoIGl0ZW0gbG9zdFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLml0ZW1zTG9zdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW1nID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLmNsYXNzTGlzdC5hZGQoXCJjaGF0aW1nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gaXRlbS5nZXRJbWFnZVBhdGgoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGltZyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNSZWNlaXZlZCAhPSBudWxsICYmIHRoaXMuaXRlbXNSZWNlaXZlZC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW1zUmVjZWl2ZWRMYmwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgaXRlbXNSZWNlaXZlZExibC5jbGFzc0xpc3QuYWRkKFwiY2hhdGltZ2hlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1JlY2VpdmVkTGJsLmlubmVySFRNTCA9IFwiWW91IEdhaW5lZFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpdGVtc1JlY2VpdmVkTGJsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLy8gYWRkIGFuIGltYWdlIGZvciBlYWNoIGl0ZW0gcmVjZWl2ZWRcclxuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGl0ZW0gb2YgdGhpcy5pdGVtc1JlY2VpdmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNoYXRpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpdGVtLmdldEltYWdlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gcGxheWVyIGhhcyBtYWRlIGV4Y2hhbmdlIHNvIHJlcGxhY2UgZGlhbG9nIHdpdGggcmVwbGFjZW1lbnQgZGlhbG9nXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcGxhY2VEaWFsb2coKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHBsYXllciBpbnZlbnRvcnkgZG9lcyBub3QgY29udGFpbnMgYWxsIHJlcXVpcmVkIGl0ZW1zLCB0aGVyZWZvcmUsIGRpc3BsYXkgZmFpbCB0ZXh0XHJcbiAgICAgICAgICAgICAgICAvLyBhZGQgdGhlIGRpYWxvZyB0ZXh0XHJcbiAgICAgICAgICAgICAgICBsZXQgdHh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgdHh0LmNsYXNzTGlzdC5hZGQoXCJjaGF0bXNnXCIpO1xyXG4gICAgICAgICAgICAgICAgdHh0LmlubmVySFRNTCA9IFwiWU9VIERPIE5PVCBIQVZFIFRIRSBSRVFVSVJFRCBJVEVNU1wiO1xyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHR4dCk7ICAgLy8gYWRkIHRleHQgZWxlbWVudCB0byBkaXZcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIHRvIGFkdmFuY2UgdG8gdGhlIG5leHQgZGlhbG9nXHJcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImNoYXRidG5cIik7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkNvbnRpbnVlXCI7XHJcblxyXG4gICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoYnRuKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGNhbGxiYWNrIGZvciB0aGUgY29udGludWUgYnV0dG9uXHJcbiAgICAgICAgICAgIGJ0bi5vbmNsaWNrID0gKGV2bnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5uZXh0RGlhbG9nKTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbXNMb3N0KCk6IEFycmF5PEl0ZW0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNMb3N0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtc1JlY2VpdmVkKCk6IEFycmF5PEl0ZW0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXNSZWNlaXZlZDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVwbGFjZURpYWxvZygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5yZXBsYWNlZCA9IHRydWU7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtJU2hhcGV9IGZyb20gXCIuL0lTaGFwZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgQ2lyY2xlIGltcGxlbWVudHMgSVNoYXBlXHJcbntcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgcmFkaXVzOiBudW1iZXIgPSAxMDtcclxuICAgIHB1YmxpYyBsaW5lV2lkdGg6IG51bWJlciA9IDI7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZyA9IFwicmVkXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHJhZGl1czogbnVtYmVyLCBjb2xvcjogc3RyaW5nID0gXCJyZWRcIiwgbGluZV93aWR0aDogbnVtYmVyID0gMilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy5yYWRpdXMgPSByYWRpdXM7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMubGluZVdpZHRoID0gbGluZV93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgY3R4LmFyYyh0aGlzLngsIHRoaXMueSwgdGhpcy5yYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udGFpbnMoeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICgoeSAtIHRoaXMueSkgKiogMiArICh4IC0gdGhpcy54KSAqKiAyKSA8PSB0aGlzLnJhZGl1cyAqKiAyO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7VHJpYW5nbGV9IGZyb20gXCIuL1RyaWFuZ2xlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4vUG9pbnRcIlxyXG5cclxuLy8gbmF2bWVzaCBwYXRoZmluZGluZzogaHR0cHM6Ly9tZWRpdW0uY29tL0Btc2NhbnNpYW4vYS13aXRoLW5hdmlnYXRpb24tbWVzaGVzLTI0NmZkOWU3MjQyNFxyXG5leHBvcnQgY2xhc3MgTmF2TWVzaFxyXG57XHJcbiAgICAvLyB2YWxpZCByZWdpb25zIG9mIHRoZSBuYXZtZXNoXHJcbiAgICBwcml2YXRlIHRyaXM6IEFycmF5PFRyaWFuZ2xlPjtcclxuXHJcbiAgICAvLyBUT0RPIC0gbmV3IHN5c3RlbSBvZiB0cmlhbmdsZSByZXByZXNlbnRhdGlvblxyXG4gICAgcHJpdmF0ZSB2ZXJ0aWNlczogQXJyYXk8UG9pbnQ+O1xyXG4gICAgcHJpdmF0ZSBlZGdlczogQXJyYXk8e3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9PjsgICAgICAgICAvLyB2MSBhbmQgdjIgYXJlIGluZGljZXMgaW50byB2ZXJ0aWNlcyBsaXN0XHJcbiAgICBwcml2YXRlIG91dGVyRWRnZXM6IEFycmF5PHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfT47ICAgIC8vIGVkZ2VzIHdoaWNoIG9ubHkgYXBwZWFyIGluIDEgdHJpXHJcblxyXG4gICAgY29uc3RydWN0b3IodHJpczogQXJyYXk8VHJpYW5nbGU+KSB7XHJcbiAgICAgICAgdGhpcy50cmlzID0gdHJpcyA/IHRyaXMgOiBbXTtcclxuICAgICAgICB0aGlzLnZlcnRpY2VzID0gW107XHJcbiAgICAgICAgdGhpcy5lZGdlcyA9IFtdO1xyXG4gICAgICAgIHRoaXMub3V0ZXJFZGdlcyA9IFtdO1xyXG5cclxuICAgICAgICAvLyBpbml0aWFsaXNlIHZlcnRpY2VzIGFuZCBlZGdlcyBsaXN0XHJcbiAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0cmlzKSB7XHJcbiAgICAgICAgICAgIGxldCBwMUluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICBsZXQgcDJJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgbGV0IHAzSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Myk7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB2ZXJ0ZXggaXMgbm90IGluIHRoZSBsaXN0LCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYocDFJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgICAgIHAxSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgdmVydGV4IGlzIG5vdCBpbiB0aGUgbGlzdCwgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHAySW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgICAgICBwMkluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vIGlmIHZlcnRleCBpcyBub3QgaW4gdGhlIGxpc3QsIGFkZCBpdCB0byB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZihwM0luZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRyaS5wb2ludDMpO1xyXG4gICAgICAgICAgICAgICAgcDNJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGFsbCAzIGVkZ2VzIG9mIHRoZSB0cmkgdG8gdGhlIGVkZ2VzIGxpc3RcclxuICAgICAgICAgICAgY29uc3QgZWRnZTEgPSB7djE6IHAxSW5kZXgsIHYyOiBwMkluZGV4fTtcclxuICAgICAgICAgICAgY29uc3QgZWRnZTIgPSB7djE6IHAySW5kZXgsIHYyOiBwM0luZGV4fTtcclxuICAgICAgICAgICAgY29uc3QgZWRnZTMgPSB7djE6IHAzSW5kZXgsIHYyOiBwMUluZGV4fTtcclxuXHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZWRnZXMgaWYgdGhleSBhcmUgbm90IGFscmVhZHkgaW4gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mRWRnZSh0aGlzLmVkZ2VzLCBlZGdlMSkgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZTEpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnB1c2goZWRnZTEpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnNwbGljZSh0aGlzLmluZGV4T2ZFZGdlKHRoaXMub3V0ZXJFZGdlcywgZWRnZTEpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mRWRnZSh0aGlzLmVkZ2VzLCBlZGdlMikgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZTIpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnB1c2goZWRnZTIpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnNwbGljZSh0aGlzLmluZGV4T2ZFZGdlKHRoaXMub3V0ZXJFZGdlcywgZWRnZTIpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mRWRnZSh0aGlzLmVkZ2VzLCBlZGdlMykgPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVkZ2VzLnB1c2goZWRnZTMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnB1c2goZWRnZTMpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vdXRlckVkZ2VzLnNwbGljZSh0aGlzLmluZGV4T2ZFZGdlKHRoaXMub3V0ZXJFZGdlcywgZWRnZTMpLCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMudmVydGljZXMpO1xyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5lZGdlcyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm91dGVyRWRnZXMpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRXYXlwb2ludHMgPSAoY3VycmVudFg6IG51bWJlciwgY3VycmVudFk6IG51bWJlciwgdGFyZ2V0WDogbnVtYmVyLCB0YXJnZXRZOiBudW1iZXIpOiBBcnJheTxQb2ludD4gPT4ge1xyXG4gICAgICAgIGZvcihsZXQgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICAvLyBhbGxvdyBmcmVlIG1vdmVtZW50IHdpdGhpbiBhIHRyaWFuZ2xlXHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyh0YXJnZXRYLCB0YXJnZXRZKSAmJiB0cmkuY29udGFpbnMoY3VycmVudFgsIGN1cnJlbnRZKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIFtuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICAvLyBpZiBib3RoIHBvaW50cyBmYWxsIHVuZGVyIGRpZmZlcmVudCB0cmlhbmdsZXMsIGZpbmQgdGhlIGEgd2F5cG9pbnQgdG8gcmVhY2ggdGhlIG5leHQgdHJpXHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyh0YXJnZXRYLCB0YXJnZXRZKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy9yZXR1cm4gbmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpO1xyXG4gICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gdGhpcy5maW5kUGF0aChuZXcgUG9pbnQoY3VycmVudFgsIGN1cnJlbnRZKSwgbmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpKTtcclxuICAgICAgICAgICAgICAgIGlmKG9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJvdXRlOiBBcnJheTxQb2ludD4gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICByb3V0ZS5wdXNoKG5ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKSk7ICAgIC8vIGdvIGZyb20gbGFzdCBwb2ludCB0byB0aGUgZW5kIHBvaW50XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5idWlsZFJvdXRlKG9iai5jYW1lRnJvbSwgb2JqLmVuZFZlcnRleCwgcm91dGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVkdWNlUm91dGUocm91dGUpOyAgICAvLyByZW1vdmUgcmVkdW5kYW50IG5vZGVzIGZyb20gdGhlIHBhdGhcclxuICAgICAgICAgICAgICAgICAgICBpZihyb3V0ZS5sZW5ndGggPiAwKSAgICAgICAgLy8gbGFzdCB3YXlwb2ludCB3aWxsIGJlIHN0YXJ0IC0+IGdldCByaWQgb2YgaXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcm91dGUucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJyb3V0ZTogXCIgKyByb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJvdXRlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmVtb3ZlIHVuZWNlc3Nhcnkgd2F5cG9pbnRzIGZyb20gdGhlIHJvdXRlLCBpLmUuIGlmIHRoZWlyIGlzIGEgc3RyYWlnaHQgcGF0aCBmcm9tIGEgdG8gYywgcmVtb3ZlIGJcclxuICAgIHByaXZhdGUgcmVkdWNlUm91dGUgPSAocm91dGU6IEFycmF5PFBvaW50PikgPT4ge1xyXG4gICAgICAgIGxldCBpbmRleCA9IDA7XHJcbiAgICAgICAgLy8gbG9vcCB1bnRpbCBubyBtb3JlIHJlZHVjdGlvbnMgY2FuIGJlIG1hZGVcclxuICAgICAgICB3aGlsZShpbmRleCA8IHJvdXRlLmxlbmd0aCAtIDIpIHtcclxuICAgICAgICAgICAgY29uc3QgYSA9IHJvdXRlW2luZGV4XVxyXG4gICAgICAgICAgICBjb25zdCBjID0gcm91dGVbaW5kZXggKyAyXVxyXG5cclxuICAgICAgICAgICAgLy8gdGhlcmUgaXMgYSB2YWxpZCBzdHJhaWdodCBwYXRoIGJldHdlZW4gYSBhbmQgYyBpZiB0aGUgcGF0aCBkb2VzIG5vdCBpbnRlcnNlY3QgYW4gb3V0ZXIgZWRnZVxyXG4gICAgICAgICAgICBsZXQgaW50ZXJzZWN0c091dGVyRWRnZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICBmb3IoY29uc3Qgb3V0ZXJFZGdlIG9mIHRoaXMub3V0ZXJFZGdlcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5kb0xpbmVTZWdtZW50c0ludGVyc2VjdCh0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52MV0sIHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYyXSwgYSwgYykpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGEudG9TdHJpbmcoKSwgYy50b1N0cmluZygpLCBcImludGVyc2VjdHNcIiwgdGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjFdLnRvU3RyaW5nKCksIHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYyXS50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgICAgIGludGVyc2VjdHNPdXRlckVkZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgcGF0aCBkb2VzIG5vdCBpbnRlcnNlY3QgYW4gb3V0ZXIgZWRnZSwgcmVtb3ZlIHdheXBvaW50IGJcclxuICAgICAgICAgICAgaWYoIWludGVyc2VjdHNPdXRlckVkZ2UpIHtcclxuICAgICAgICAgICAgICAgIHJvdXRlLnNwbGljZShpbmRleCsxLCAxKTtcclxuICAgICAgICAgICAgICAgIC8vIGRvbid0IG5lZWQgdG8gaW5jcmVtZW50IGluZGV4IHNpbmNlIGFycmF5IGxlbmd0aCBoYXMgYmVlbiByZWR1Y2VkXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvLyBtb3ZlIG9udG8gbmV4dCBwYWlyIG9mIHdheXBvaW50c1xyXG4gICAgICAgICAgICAgICAgaW5kZXggKys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBidWlsZFJvdXRlID0gKGNhbWVGcm9tOiB7fSwgdmVydGV4OiBQb2ludCwgcm91dGU6IEFycmF5PFBvaW50PikgPT4ge1xyXG4gICAgICAgIHJvdXRlLnB1c2godmVydGV4KTsgLy8gcm91dGUgaXMgcmVhZCBpbiByZXZlcnNlIG9yZGVyXHJcbiAgICAgICAgaWYoY2FtZUZyb21bdmVydGV4LnRvU3RyaW5nKCldICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5idWlsZFJvdXRlKGNhbWVGcm9tLCBjYW1lRnJvbVt2ZXJ0ZXgudG9TdHJpbmcoKV0ubm9kZSwgcm91dGUpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyB1c2UgdGhlIEEqIGFsZ29yaXRobSB0byBmaW5kIGEgc2hvcnRlc3QgcGF0aCB0aHJvdWdoIHRoZSBuYXZtZXNoXHJcbiAgICBwcml2YXRlIGZpbmRQYXRoID0gKHN0YXJ0OiBQb2ludCwgZW5kOiBQb2ludCk6IHtjYW1lRnJvbToge30sIGVuZFZlcnRleDogUG9pbnR9ID0+IHtcclxuICAgICAgICBsZXQgb3BlbiA9IFt7bm9kZTogc3RhcnQsIHByaW9yaXR5OiAwfV07ICAgIC8vIGxvd2VzdCBwcmlvcml0eSA9IDBcclxuICAgICAgICBsZXQgY2xvc2VkID0gW107XHJcblxyXG4gICAgICAgIC8vIGZpbmQgdGhlIHRyaWFuZ2xlIGNvbnRhaW5pbmcgdGhlIHN0YXJ0IHBvaW50XHJcbiAgICAgICAgbGV0IHN0YXJ0VHJpO1xyXG4gICAgICAgIGZvcihjb25zdCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyhzdGFydC54LCBzdGFydC55KSkge1xyXG4gICAgICAgICAgICAgICAgc3RhcnRUcmkgPSB0cmk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihzdGFydFRyaSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gZmluZCB0aGUgdHJpYW5nbGUgY29udGFpbmluZyB0aGUgZW5kIHBvaW50XHJcbiAgICAgICAgbGV0IGVuZFRyaTtcclxuICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICBpZih0cmkuY29udGFpbnMoZW5kLngsIGVuZC55KSkge1xyXG4gICAgICAgICAgICAgICAgZW5kVHJpID0gdHJpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYoZW5kVHJpID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBnW2ldIGlzIHRoZSBjb3N0IHRvIGdldCB0byBpIGZyb20gdGhlIHN0YXJ0IHZlcnRleFxyXG4gICAgICAgIGxldCBnID0ge307XHJcbiAgICAgICAgbGV0IGNhbWVGcm9tID0ge307XHJcbiAgICAgICAgZ1tzdGFydC50b1N0cmluZygpXSA9IDA7XHJcbiAgICAgICAgY2FtZUZyb21bc3RhcnQudG9TdHJpbmcoKV0gPSBudWxsO1xyXG5cclxuICAgICAgICAvLyBleGVjdXRlIEEqIGFsZ29yaXRobVxyXG4gICAgICAgIC8vIHBzZXVkb2NvZGU6IGh0dHA6Ly90aGVvcnkuc3RhbmZvcmQuZWR1L35hbWl0cC9HYW1lUHJvZ3JhbW1pbmcvSW1wbGVtZW50YXRpb25Ob3Rlcy5odG1sXHJcbiAgICAgICAgd2hpbGUob3Blbi5sZW5ndGggPiAwICYmICFlbmRUcmkuaXNWZXJ0ZXgob3BlblswXS5ub2RlKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBjdXJyZW50ID0gb3Blbi5zaGlmdCgpOyAgLy8gcmVtb3ZlIGZpcnN0IGl0ZW0gZnJvbSBvcGVuIChpdGVtIHdpdGggbG93ZXN0IHByaW9yaXR5KVxyXG4gICAgICAgICAgICBjbG9zZWQucHVzaChjdXJyZW50KTtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcImN1cnJlbnQgdmVydGV4OiBcIiArIGN1cnJlbnQubm9kZS50b1N0cmluZygpKTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IG5laWdoYm91ciBvZiB0aGlzLmdldE5laWdoYm91cnMoY3VycmVudC5ub2RlKSlcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvc3QgPSBnW2N1cnJlbnQubm9kZS50b1N0cmluZygpXSArIHRoaXMuZ2V0RWRnZUNvc3QoY3VycmVudC5ub2RlLCBuZWlnaGJvdXIpO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5laWdoYm91cjogXCIgKyBuZWlnaGJvdXIudG9TdHJpbmcoKSArIFwiLCBjb3N0OiBcIiArIGNvc3QpO1xyXG4gICAgICAgICAgICAgICAgLy8gbmVpZ2hib3VyIGluIG9wZW5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShvcGVuLCBuZWlnaGJvdXIpICE9PSAtMSAmJiBjb3N0IDwgZ1tuZWlnaGJvdXIudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuLnNwbGljZSh0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUob3BlbiwgbmVpZ2hib3VyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBuZWlnaGJvdXIgaW4gY2xvc2VkXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUoY2xvc2VkLCBuZWlnaGJvdXIpICE9PSAtMSAmJiBjb3N0IDwgZ1tuZWlnaGJvdXIudG9TdHJpbmcoKV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBjbG9zZWQuc3BsaWNlKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShjbG9zZWQsIG5laWdoYm91ciksIDEpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gbmVpZ2hib3VyIG5laXRoZXIgaW4gb3BlbiBub3IgY2xvc2VkXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUob3BlbiwgbmVpZ2hib3VyKSA9PT0gLTEgJiYgdGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKGNsb3NlZCwgbmVpZ2hib3VyKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgICAgICBnW25laWdoYm91ci50b1N0cmluZygpXSA9IGNvc3Q7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FtZUZyb21bbmVpZ2hib3VyLnRvU3RyaW5nKCldID0gY3VycmVudDtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuLnB1c2goe25vZGU6IG5laWdoYm91ciwgcHJpb3JpdHk6IGNvc3R9KTsgLy8gVE9ETyAtIHByaW9yaXR5ID0gY29zdCArIGgobmVpZ2hib3VyKVxyXG4gICAgICAgICAgICAgICAgICAgIG9wZW4uc29ydCgoYSwgYikgPT4geyAgIC8vIHNvcnQgb3BlbiBxdWV1ZSBieSBwcmlvcml0eVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYS5wcmlvcml0eSAtIGIucHJpb3JpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2cob3Blbi5sZW5ndGggPiAwID8gXCJlbmQ6IFwiICsgb3BlblswXS5ub2RlLnRvU3RyaW5nKCkgOiBcIm5vIHBhdGhcIik7XHJcbiAgICAgICAgcmV0dXJuIG9wZW4ubGVuZ3RoID4gMCA/IHtjYW1lRnJvbTogY2FtZUZyb20sIGVuZFZlcnRleDogb3BlblswXS5ub2RlfSA6IG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgZm9yKGxldCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIHRyaS5kcmF3KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybnMgdGhlIGNvc3Qgb2YgdHJhdmVyc2luZyBhbiBlZGdlIGJldHdlZW4gcDEgYW5kIHAyXHJcbiAgICBwcml2YXRlIGdldEVkZ2VDb3N0ID0gKHAxOiBQb2ludCwgcDI6IFBvaW50KTogbnVtYmVyID0+IHtcclxuICAgICAgICByZXR1cm4gTWF0aC5zcXJ0KChwMS54IC0gcDIueCkgKiogMiArIChwMS55IC0gcDIueSkgKiogMik7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJuIGEgbGlzdCBvZiB2ZXJ0Y2llcyB3aGljaCBhcmUgYWRqYWNlbnQgdG8gdGhlIHZlcnRleCBwXHJcbiAgICBwcml2YXRlIGdldE5laWdoYm91cnMgPSAocDogUG9pbnQpOiBBcnJheTxQb2ludD4gPT4ge1xyXG4gICAgICAgIGxldCBuZWlnaGJvdXJzOiBBcnJheTxQb2ludD4gPSBbXTtcclxuICAgICAgICBmb3IoY29uc3QgZWRnZSBvZiB0aGlzLmVkZ2VzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy52ZXJ0aWNlc1tlZGdlLnYxXS5lcXVhbHMocCkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0aGlzLnZlcnRpY2VzW2VkZ2UudjJdKTtcclxuICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMudmVydGljZXNbZWRnZS52Ml0uZXF1YWxzKHApKSB7XHJcbiAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godGhpcy52ZXJ0aWNlc1tlZGdlLnYxXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGlmIHRoZSB2ZXJ0ZXggaXMgbm90IGEgdmVydGV4IG9mIGEgdHJpYW5nbGUsIGNoZWNrIGlmIGl0IGlzIHdpdGhpbiBhIHRyaWFuZ2xlXHJcbiAgICAgICAgaWYobmVpZ2hib3Vycy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyhwLngsIHAueSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0cmkucG9pbnQzKTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbmVpZ2hib3VycztcclxuICAgIH1cclxuXHJcbiAgICAvLyBhbnN3ZXIgMiBmcm9tOiBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy81NjMxOTgvaG93LWRvLXlvdS1kZXRlY3Qtd2hlcmUtdHdvLWxpbmUtc2VnbWVudHMtaW50ZXJzZWN0XHJcbiAgICBwcml2YXRlIGRvTGluZVNlZ21lbnRzSW50ZXJzZWN0ID0gKGUxdjE6IFBvaW50LCBlMXYyOiBQb2ludCwgZTJ2MTogUG9pbnQsIGUydjI6IFBvaW50KTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgY29uc3QgcDBfeCA9IGUxdjEueDtcclxuICAgICAgICBjb25zdCBwMF95ID0gZTF2MS55O1xyXG4gICAgICAgIGNvbnN0IHAxX3ggPSBlMXYyLng7XHJcbiAgICAgICAgY29uc3QgcDFfeSA9IGUxdjIueTtcclxuICAgICAgICBjb25zdCBwMl94ID0gZTJ2MS54O1xyXG4gICAgICAgIGNvbnN0IHAyX3kgPSBlMnYxLnk7XHJcbiAgICAgICAgY29uc3QgcDNfeCA9IGUydjIueDtcclxuICAgICAgICBjb25zdCBwM195ID0gZTJ2Mi55O1xyXG5cclxuICAgICAgICBsZXQgczFfeCwgczFfeSwgczJfeCwgczJfeTtcclxuICAgICAgICBzMV94ID0gcDFfeCAtIHAwX3g7XHJcbiAgICAgICAgczFfeSA9IHAxX3kgLSBwMF95O1xyXG4gICAgICAgIHMyX3ggPSBwM194IC0gcDJfeDtcclxuICAgICAgICBzMl95ID0gcDNfeSAtIHAyX3k7XHJcblxyXG4gICAgICAgIGxldCBzLCB0O1xyXG4gICAgICAgIHMgPSAoLXMxX3kgKiAocDBfeCAtIHAyX3gpICsgczFfeCAqIChwMF95IC0gcDJfeSkpIC8gKC1zMl94ICogczFfeSArIHMxX3ggKiBzMl95KTtcclxuICAgICAgICB0ID0gKCBzMl94ICogKHAwX3kgLSBwMl95KSAtIHMyX3kgKiAocDBfeCAtIHAyX3gpKSAvICgtczJfeCAqIHMxX3kgKyBzMV94ICogczJfeSk7XHJcblxyXG4gICAgICAgIGlmKHMgPj0gMCAmJiBzIDw9IDEgJiYgdCA+PSAwICYmIHQgPD0gMSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIHJldHVybiBmYWxzZSBpZiB0aGUgaW50ZXJzZWN0aW9uIHBvaW50IGlzIHRoZSB2ZXJ0ZXggcG9zaXRpb24gc2luY2UgaXQgYnJlYWtzIHRoZSByb3V0ZSByZWR1Y3Rpb24gYWxnb3JpdGhtXHJcbiAgICAgICAgICAgIGNvbnN0IGlfeCA9IChwMF94ICsgKHQgKiBzMV94KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGlfeSA9IChwMF95ICsgKHQgKiBzMV95KSk7XHJcbiAgICAgICAgICAgIHJldHVybiAhKGlfeCA9PT0gZTF2MS54ICYmIGlfeSA9PT0gZTF2MS55KSAmJiAhKGlfeCA9PT0gZTF2Mi54ICYmIGlfeSA9PT0gZTF2Mi55KSAmJiAhKGlfeCA9PT0gZTJ2MS54ICYmIGlfeSA9PT0gZTJ2MS55KSAmJiAhKGlfeCA9PT0gZTJ2Mi54ICYmIGlfeSA9PT0gZTJ2Mi55KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vY29uc29sZS5sb2coXCJubyBjb2xsaXNpb25cIik7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBubyBjb2xsaXNpb25cclxuICAgIH1cclxuXHJcbiAgICAvL1xyXG4gICAgcHJpdmF0ZSBjcm9zc1Byb2R1Y3QgPSAocG9pbnQxOiBQb2ludCwgcG9pbnQyOiBQb2ludCkgPT4ge1xyXG4gICAgXHRyZXR1cm4gcG9pbnQxLnggKiBwb2ludDIueSAtIHBvaW50MS55ICogcG9pbnQyLng7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmRleE9mUHJpb3JpdHlOb2RlID0gKHZlcnRpY2VzOiBBcnJheTx7bm9kZTogUG9pbnQsIHByaW9yaXR5OiBudW1iZXJ9PiwgcDogUG9pbnQpID0+IHtcclxuICAgICAgICBpZihwID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlcnRpY2VzLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW2luZGV4XS5ub2RlO1xyXG4gICAgICAgICAgICAgICAgaWYodmVydGV4LnggPT09IHAueCAmJiB2ZXJ0ZXgueSA9PT0gcC55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmRleE9mVmVydGV4ID0gKHZlcnRpY2VzOiBBcnJheTxQb2ludD4sIHA6IFBvaW50KTogbnVtYmVyID0+IHtcclxuICAgICAgICBpZihwID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHZlcnRpY2VzLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnRleCA9IHZlcnRpY2VzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmKHZlcnRleC54ID09PSBwLnggJiYgdmVydGV4LnkgPT09IHAueSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW5kZXhPZkVkZ2UgPSAoZWRnZXM6IEFycmF5PHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfT4sIGVkZ2U6IHt2MTogbnVtYmVyLCB2MjogbnVtYmVyfSk6IG51bWJlciA9PiB7XHJcbiAgICAgICAgaWYoZWRnZSA9PSBudWxsIHx8IGVkZ2UudjEgPT0gbnVsbCB8fCBlZGdlLnYyID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGVkZ2VzLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGUgPSBlZGdlc1tpbmRleF07XHJcbiAgICAgICAgICAgICAgICBpZigoZS52MSA9PT0gZWRnZS52MSAmJiBlLnYyID09PSBlZGdlLnYyKSB8fCAoZS52MSA9PT0gZWRnZS52MiAmJiBlLnYyID09PSBlZGdlLnYxKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpbmRleDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBQb2ludFxyXG57XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlcXVhbHMgPSAocDogUG9pbnQpOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gcCAhPSBudWxsICYmIHAueCA9PT0gdGhpcy54ICYmIHAueSA9PT0gdGhpcy55O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b1N0cmluZyA9ICgpIDogc3RyaW5nID0+IHtcclxuICAgICAgICByZXR1cm4gYFBvaW50KCR7dGhpcy54fSwke3RoaXMueX0pYDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vSVNoYXBlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWN0YW5nbGUgaW1wbGVtZW50cyBJU2hhcGVcclxue1xyXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBsaW5lV2lkdGg6IG51bWJlciA9IDU7XHJcbiAgICBwdWJsaWMgd2lkdGg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgaGVpZ2h0OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGNvbG9yOiBzdHJpbmcgPSBcImJsdWVcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgd2lkdGg6IG51bWJlciwgaGVpZ2h0OiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSBcInJlZFwiLCBsaW5lX3dpZHRoOiBudW1iZXIgPSAyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgIHRoaXMubGluZVdpZHRoID0gbGluZV93aWR0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdygpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguYmVnaW5QYXRoKCk7XHJcbiAgICAgICAgY3R4LnN0cm9rZVN0eWxlID0gdGhpcy5jb2xvcjtcclxuICAgICAgICBjdHgubGluZVdpZHRoID0gdGhpcy5saW5lV2lkdGg7XHJcbiAgICAgICAgY3R4LnJlY3QodGhpcy54LCB0aGlzLnksIHRoaXMud2lkdGgsIHRoaXMuaGVpZ2h0KTtcclxuICAgICAgICBjdHguc3Ryb2tlKCk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29udGFpbnMoeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuICh4ID49IHRoaXMueCAmJiB4IDw9IHRoaXMueCArIHRoaXMud2lkdGggJiYgeSA+PSB0aGlzLnkgJiYgeSA8PSB0aGlzLnkgKyB0aGlzLmhlaWdodCk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtJU2hhcGV9IGZyb20gXCIuL0lTaGFwZVwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuL1BvaW50XCJcclxuXHJcbmV4cG9ydCBjbGFzcyBUcmlhbmdsZVxyXG57XHJcbiAgICBwdWJsaWMgcG9pbnQxOiBQb2ludDtcclxuICAgIHB1YmxpYyBwb2ludDI6IFBvaW50O1xyXG4gICAgcHVibGljIHBvaW50MzogUG9pbnQ7XHJcbiAgICBwcml2YXRlIGFyZWE6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc2lnbjogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHgxOiBudW1iZXIsIHkxOiBudW1iZXIsIHgyOiBudW1iZXIsIHkyOiBudW1iZXIsIHgzOiBudW1iZXIsIHkzOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5wb2ludDEgPSBuZXcgUG9pbnQoeDEsIHkxKTtcclxuICAgICAgICB0aGlzLnBvaW50MiA9IG5ldyBQb2ludCh4MiwgeTIpO1xyXG4gICAgICAgIHRoaXMucG9pbnQzID0gbmV3IFBvaW50KHgzLCB5Myk7XHJcbiAgICAgICAgdGhpcy5hcmVhID0gMS8yICogKC10aGlzLnBvaW50Mi55ICogdGhpcy5wb2ludDMueCArIHRoaXMucG9pbnQxLnkgKiAoLXRoaXMucG9pbnQyLnggKyB0aGlzLnBvaW50My54KSArIHRoaXMucG9pbnQxLnggKiAodGhpcy5wb2ludDIueSAtIHRoaXMucG9pbnQzLnkpICsgdGhpcy5wb2ludDIueCAqIHRoaXMucG9pbnQzLnkpO1xyXG4gICAgICAgIHRoaXMuc2lnbiA9IHRoaXMuYXJlYSA8IDAgPyAtMSA6IDE7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcgPSAoKTogdm9pZCA9PiB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSBcInJlZFwiO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSA1O1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHgubW92ZVRvKHRoaXMucG9pbnQxLngsIHRoaXMucG9pbnQxLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5wb2ludDIueCwgdGhpcy5wb2ludDIueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnBvaW50My54LCB0aGlzLnBvaW50My55KTtcclxuICAgICAgICBjdHgubGluZVRvKHRoaXMucG9pbnQxLngsIHRoaXMucG9pbnQxLnkpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIHJldHVybnMgdHJ1ZSBpZmYgdGhlIHBvaW50IHAgaXMgYSB2ZXJ0ZXggb2YgdGhlIHRyaWFuZ2xlXHJcbiAgICBwdWJsaWMgaXNWZXJ0ZXggPSAocDogUG9pbnQpOiBib29sZWFuID0+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5wb2ludDEuZXF1YWxzKHApIHx8IHRoaXMucG9pbnQyLmVxdWFscyhwKSB8fCB0aGlzLnBvaW50My5lcXVhbHMocCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaHR0cDovL2pzZmlkZGxlLm5ldC9QZXJyb0FaVUwvemRhWTgvMS9cclxuICAgIHB1YmxpYyBjb250YWlucyA9ICh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHZhciBzID0gKHRoaXMucG9pbnQxLnkgKiB0aGlzLnBvaW50My54IC0gdGhpcy5wb2ludDEueCAqIHRoaXMucG9pbnQzLnkgKyAodGhpcy5wb2ludDMueSAtIHRoaXMucG9pbnQxLnkpICogeCArICh0aGlzLnBvaW50MS54IC0gdGhpcy5wb2ludDMueCkgKiB5KSAqIHRoaXMuc2lnbjtcclxuICAgICAgICB2YXIgdCA9ICh0aGlzLnBvaW50MS54ICogdGhpcy5wb2ludDIueSAtIHRoaXMucG9pbnQxLnkgKiB0aGlzLnBvaW50Mi54ICsgKHRoaXMucG9pbnQxLnkgLSB0aGlzLnBvaW50Mi55KSAqIHggKyAodGhpcy5wb2ludDIueCAtIHRoaXMucG9pbnQxLngpICogeSkgKiB0aGlzLnNpZ247XHJcbiAgICAgICAgcmV0dXJuIChzID4gMCAmJiB0ID4gMCAmJiAocyArIHQpIDwgMiAqIHRoaXMuYXJlYSAqIHRoaXMuc2lnbikgfHwgKHRoaXMuaXNWZXJ0ZXgobmV3IFBvaW50KHgsIHkpKSk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcblxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW50ZXJhY3Rpb25cclxue1xyXG4gICAgcHJpdmF0ZSB1c2VkID0gZmFsc2U7XHJcblxyXG4gICAgLy8gaXRlbSBjYW4gYmUgbnVsbFxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIGl0ZW06IEl0ZW0pIHt9XHJcblxyXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgb2JqZWN0XHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgaW50ZXJhY3QoaXRlbTogSXRlbSk6ICB7dGV4dDogc3RyaW5nLCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgaXRlbXM6IEFycmF5PEl0ZW0+fTtcclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbSgpOiBJdGVtXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0VXNlZCgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy51c2VkID0gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0VXNlZCgpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudXNlZDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gXCIuLi9yZXNvdXJjZXMvSlNPTkxvYWRlclwiXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gXCIuLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXJcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4uL3Nwcml0ZXMvVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL1Nwcml0ZVwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9TdGF0aWNTcHJpdGVcIlxyXG5pbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3RhYmxlU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGVcIlxyXG5pbXBvcnQge05QQ1Nwcml0ZX0gZnJvbSBcIi4uL3Nwcml0ZXMvTlBDU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuLi9zcHJpdGVzL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7TmF2TWVzaH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9OYXZNZXNoXCJcclxuaW1wb3J0IHtUcmlhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9UcmlhbmdsZVwiXHJcbmltcG9ydCB7SW50ZXJhY3Rpb259ICBmcm9tIFwiLi9JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7UmVjZWl2ZUl0ZW1JbnRlcmFjdGlvbn0gZnJvbSBcIi4vUmVjZWl2ZUl0ZW1JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9DaXJjbGVcIlxyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9SZWN0YW5nbGVcIlxyXG5pbXBvcnQge0NvbnZlcnNhdGlvbn0gZnJvbSBcIi4uL2NoYXQvQ29udmVyc2F0aW9uXCJcclxuaW1wb3J0IHtEaWFsb2d9IGZyb20gXCIuLi9jaGF0L0RpYWxvZ1wiXHJcbmltcG9ydCB7Q29udGludWVEaWFsb2d9IGZyb20gXCIuLi9jaGF0L0NvbnRpbnVlRGlhbG9nXCJcclxuaW1wb3J0IHtPcHRpb25EaWFsb2d9IGZyb20gXCIuLi9jaGF0L09wdGlvbkRpYWxvZ1wiXHJcbmltcG9ydCB7UmVjZWl2ZUl0ZW1EaWFsb2d9IGZyb20gXCIuLi9jaGF0L1JlY2VpdmVJdGVtRGlhbG9nXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBMZXZlbFxyXG57XHJcbiAgICBzdGF0aWMgbG9hZExldmVsKHBhdGg6IHN0cmluZywgaXRlbXM6IGFueSk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxhbnk+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgbGV2ZWxEYXRhUHJvbWlzZSA9IEpTT05Mb2FkZXIubG9hZEpTT05GaWxlKHBhdGgpLnRoZW4oKGxldmVsRGF0YSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSB0ZXh0dXJlIGF0bGFzXHJcbiAgICAgICAgICAgICAgICBsZXQgYXRsYXMgPSBuZXcgVGV4dHVyZUF0bGFzKGxldmVsRGF0YS50ZXh0dXJlX2F0bGFzKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRleHR1cmVBdGxhc1Byb21pc2UgPSBhdGxhcy5sb2FkKCkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IHRleHR1cmUgYXRsYXMgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBhbGxQcm9taXNlcyA9IFt0ZXh0dXJlQXRsYXNQcm9taXNlXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHNwcml0ZXNcclxuICAgICAgICAgICAgICAgIGxldCBzdGF0aWNTcHJpdGVzID0gbmV3IEFycmF5PFN0YXRpY1Nwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGxldCBpbnRlcmFjdGFibGVTcHJpdGVzID0gbmV3IEFycmF5PEludGVyYWN0YWJsZVNwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGxldCBucGNTcHJpdGVzID0gbmV3IEFycmF5PE5QQ1Nwcml0ZT4oKTtcclxuICAgICAgICAgICAgICAgIGZvcihjb25zdCBvYmogb2YgbGV2ZWxEYXRhLnNwcml0ZXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqLnR5cGUgPT0gXCJpbnRlcmFjdGFibGVcIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgaW50ZXJhY3Rpb25zID0gbmV3IEFycmF5PEludGVyYWN0aW9uPigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgaW50ZXIgb2Ygb2JqLmludGVyYWN0aW9ucykgICAgLy8gY3JlYXRlIGFuIGFycmF5IG9mIGludGVyYWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZihpbnRlci50eXBlID09IFwicmVjZWl2ZV9pdGVtXCIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgcmVjZWl2ZUl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGl0bSBvZiBpbnRlci5pdGVtc19yZWNlaXZlZCkgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgcmVjZWl2ZSBpdGVtc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVjZWl2ZUl0ZW1zLnB1c2goaXRlbXNbaXRtXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVyYWN0aW9ucy5wdXNoKG5ldyBSZWNlaXZlSXRlbUludGVyYWN0aW9uKGludGVyLml0ZW0gPyBpdGVtc1tpbnRlci5pdGVtXSA6IG51bGwsIGludGVyLnN1Y2Nlc3NfdGV4dCwgaW50ZXIuZmFpbF90ZXh0LCBuZXcgQXVkaW8oaW50ZXIuc3VjY2Vzc19hdWRpbyksIG5ldyBBdWRpbyhpbnRlci5mYWlsX2F1ZGlvKSwgcmVjZWl2ZUl0ZW1zKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3RhYmxlU3ByaXRlcy5wdXNoKG5ldyBJbnRlcmFjdGFibGVTcHJpdGUob2JqLngsIG9iai55LCBvYmouc2NhbGUsIG9iai5vcmlnaW5faG9yaXpvbnRhbCwgb2JqLm9yaWdpbl92ZXJ0aWNhbCwgYXRsYXMsIG9iai5pbWFnZV9uYW1lLCBvYmouZXhhbWluZV90ZXh0LCBuZXcgQXVkaW8ob2JqLmV4YW1pbmVfYXVkaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5ldyBDaXJjbGUob2JqLngsIG9iai55LCBvYmouaW50ZXJhY3Rpb25fcmFkaXVzKSwgbmV3IFJlY3RhbmdsZShvYmoueC1vYmouY2xpY2tfem9uZV93aWR0aC8yLCBvYmoueS1vYmouY2xpY2tfem9uZV9oZWlnaHQvMiwgb2JqLmNsaWNrX3pvbmVfd2lkdGgsIG9iai5jbGlja196b25lX2hlaWdodCksIGludGVyYWN0aW9ucykpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZihvYmoudHlwZSA9PSBcIm5wY1wiKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBsb2FkIHRoZSBhbmltYXRpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhdGxhcyA9IG5ldyBUZXh0dXJlQXRsYXMob2JqLmF0bGFzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGFuaW1hdGlvbnM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4gPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYXRsYXNMb2FkZWRQcm9taXNlID0gYXRsYXMubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBzZXF1ZW5jZU5hbWUgaW4gb2JqLmFuaW1hdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzZXEgPSBvYmouYW5pbWF0aW9uc1tzZXF1ZW5jZU5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGFuaW0gPSBuZXcgU3ByaXRlQW5pbWF0aW9uKHNlcS5udW1fZnJhbWVzLCBhdGxhcywgc2VxdWVuY2VOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbmltYXRpb25zLnB1c2goYW5pbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG5wYyA9IG5ldyBOUENTcHJpdGUob2JqLngsIG9iai55LCBvYmouc2NhbGUsIG9iai5vcmlnaW5faG9yaXpvbnRhbCwgb2JqLm9yaWdpbl92ZXJ0aWNhbCwgYW5pbWF0aW9ucywgb2JqLmV4YW1pbmVfdGV4dCwgbmV3IEF1ZGlvKG9iai5leGFtaW5lX2F1ZGlvKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENpcmNsZShvYmoueCwgb2JqLnksIG9iai5pbnRlcmFjdGlvbl9yYWRpdXMpLCBuZXcgUmVjdGFuZ2xlKG9iai54LW9iai5jbGlja196b25lX3dpZHRoLzIsIG9iai55LW9iai5jbGlja196b25lX2hlaWdodC8yLCBvYmouY2xpY2tfem9uZV93aWR0aCwgb2JqLmNsaWNrX3pvbmVfaGVpZ2h0KSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTGV2ZWwuYnVpbGRDb252ZXJzYXRpb24ob2JqLCBpdGVtcykpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbnBjLnNldFN0YXJ0UG9zKG9iai54LCBvYmoueSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucGMuc2V0RGVwdGhTY2FsZShsZXZlbERhdGEuZGVwdGhfc2NhbGVfeSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucGNTcHJpdGVzLnB1c2gobnBjKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibnBjIGF0bGFzIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiB1bmFibGUgdG8gbG9hZCBOUEMgc3ByaXRlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxQcm9taXNlcy5wdXNoKGF0bGFzTG9hZGVkUHJvbWlzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGljU3ByaXRlcy5wdXNoKG5ldyBTdGF0aWNTcHJpdGUob2JqLngsIG9iai55LCBvYmouc2NhbGUsIG9iai5vcmlnaW5faG9yaXpvbnRhbCwgb2JqLm9yaWdpbl92ZXJ0aWNhbCwgYXRsYXMsIG9iai5pbWFnZV9uYW1lKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgbmF2bWVzaFxyXG4gICAgICAgICAgICAgICAgbGV0IHRyaXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIGZvcihsZXQgdHJpIG9mIGxldmVsRGF0YS5uYXZtZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdHJpcy5wdXNoKG5ldyBUcmlhbmdsZSh0cmkueDEsIHRyaS55MSwgdHJpLngyLCB0cmkueTIsIHRyaS54MywgdHJpLnkzKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgbmF2bWVzaCA9IG5ldyBOYXZNZXNoKHRyaXMpO1xyXG5cclxuICAgICAgICAgICAgICAgIFByb21pc2UuYWxsKGFsbFByb21pc2VzKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjZW5lIGZpbGVzIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIHN0YXRpY1Nwcml0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnJlZnJlc2hJbWFnZSgpOyAgLy8gdGV4dHVyZSBhdGxhcyBwcm9iYWJseSBoYWRuJ3QgbG9hZGVkIHdoZW4gc3ByaXRlIHdhcyBpbml0aWFsaXNlZCBzbyByZWZyZXNoIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIGludGVyYWN0YWJsZVNwcml0ZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlLnJlZnJlc2hJbWFnZSgpOyAgLy8gdGV4dHVyZSBhdGxhcyBwcm9iYWJseSBoYWRuJ3QgbG9hZGVkIHdoZW4gc3ByaXRlIHdhcyBpbml0aWFsaXNlZCBzbyByZWZyZXNoIGltYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHsndGV4dHVyZUF0bGFzJzogYXRsYXMsICdzY2VuZVNjYWxlJzogbGV2ZWxEYXRhLnNjZW5lX3NjYWxlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ3BsYXllclN0YXJ0WCc6IGxldmVsRGF0YS5wbGF5ZXJfc3RhcnRfeCwgJ3BsYXllclN0YXJ0WSc6IGxldmVsRGF0YS5wbGF5ZXJfc3RhcnRfeSwgJ3BsYXllclN0YXJ0cyc6IGxldmVsRGF0YS5wbGF5ZXJfc3RhcnRzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2RlcHRoU2NhbGVZJzogbGV2ZWxEYXRhLmRlcHRoX3NjYWxlX3ksICduYXZtZXNoJzogbmF2bWVzaCwgJ3N0YXRpY1Nwcml0ZXMnOiBzdGF0aWNTcHJpdGVzLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJ2ludGVyYWN0YWJsZVNwcml0ZXMnOiBpbnRlcmFjdGFibGVTcHJpdGVzLCAnbnBjU3ByaXRlcyc6IG5wY1Nwcml0ZXN9KTtcclxuICAgICAgICAgICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogZmFpbGVkIHRvIGxvYWQgbGV2ZWxcIik7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGJ1aWxkQ29udmVyc2F0aW9uKHNwcml0ZU9iajogYW55LCBpdGVtczogYW55KTogQ29udmVyc2F0aW9uXHJcbiAgICB7XHJcbiAgICAgICAgaWYoc3ByaXRlT2JqLmNvbnZlcnNhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGlmKHNwcml0ZU9iai5jb252ZXJzYXRpb24uZmlyc3RfZGlhbG9nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBuZXcgQ29udmVyc2F0aW9uKExldmVsLmJ1aWxkRGlhbG9nKHNwcml0ZU9iai5jb252ZXJzYXRpb24uZmlyc3RfZGlhbG9nLCBpdGVtcykpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0YXRpYyBidWlsZERpYWxvZyhkaWFsb2c6IGFueSwgaXRlbXM6IGFueSk6IERpYWxvZ1xyXG4gICAge1xyXG4gICAgICAgIGlmKGRpYWxvZy50eXBlID09IFwiY29udGludWVcIikge1xyXG4gICAgICAgICAgICBsZXQgbmV4dERpYWxvZzogRGlhbG9nO1xyXG4gICAgICAgICAgICBpZihkaWFsb2cubmV4dF9kaWFsb2cgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV4dERpYWxvZyA9IExldmVsLmJ1aWxkRGlhbG9nKGRpYWxvZy5uZXh0X2RpYWxvZywgaXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgQ29udGludWVEaWFsb2coZGlhbG9nLnRleHQsIGRpYWxvZy5zcGVha2VyLCBuZXcgQXVkaW8oZGlhbG9nLmF1ZGlvKSwgbmV4dERpYWxvZyk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGRpYWxvZy50eXBlID09IFwib3B0aW9uXCIpIHtcclxuICAgICAgICAgICAgbGV0IG9wdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZGlhbG9nIG9iamVjdCBmb3IgZWFjaCBvcHRpb25cclxuICAgICAgICAgICAgZm9yKGxldCBvcHROYW1lIGluIGRpYWxvZy5vcHRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICBvcHRpb25zW29wdE5hbWVdID0gTGV2ZWwuYnVpbGREaWFsb2coZGlhbG9nLm9wdGlvbnNbb3B0TmFtZV0sIGl0ZW1zKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gbmV3IE9wdGlvbkRpYWxvZyhkaWFsb2cudGV4dCwgZGlhbG9nLnNwZWFrZXIsIG5ldyBBdWRpbyhkaWFsb2cuYXVkaW8pLCBvcHRpb25zKTtcclxuICAgICAgICB9IGVsc2UgaWYoZGlhbG9nLnR5cGUgPT0gXCJyZWNlaXZlX2l0ZW1cIikge1xyXG4gICAgICAgICAgICBsZXQgbmV4dERpYWxvZzogRGlhbG9nO1xyXG4gICAgICAgICAgICBpZihkaWFsb2cubmV4dF9kaWFsb2cgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbmV4dERpYWxvZyA9IExldmVsLmJ1aWxkRGlhbG9nKGRpYWxvZy5uZXh0X2RpYWxvZywgaXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpdGVtc0xvc3QgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGlkIG9mIGRpYWxvZy5pdGVtc19sb3N0KSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtc0xvc3QucHVzaChpdGVtc1tpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCBpdGVtc1JlY2VpdmVkID0gW107XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBpZCBvZiBkaWFsb2cuaXRlbXNfcmVjZWl2ZWQpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zUmVjZWl2ZWQucHVzaChpdGVtc1tpZF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgUmVjZWl2ZUl0ZW1EaWFsb2coZGlhbG9nLnRleHQsIGRpYWxvZy5zcGVha2VyLCBuZXcgQXVkaW8oZGlhbG9nLmF1ZGlvKSwgbmV4dERpYWxvZywgaXRlbXNMb3N0LCBpdGVtc1JlY2VpdmVkLCBkaWFsb2cucmVwbGFjZW1lbnRfZGlhbG9nID8gdGhpcy5idWlsZERpYWxvZyhkaWFsb2cucmVwbGFjZW1lbnRfZGlhbG9nLCBpdGVtcykgOiBudWxsKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY29uc3RydWN0b3IocHVibGljIHRleHR1cmVBdGxhcywgcHVibGljIHNjZW5lU2NhbGUsIHB1YmxpYyBwbGF5ZXJTdGFydFgsIHB1YmxpYyBwbGF5ZXJTdGFydFksIHB1YmxpYyBwbGF5ZXJTdGFydHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHB1YmxpYyBkZXB0aFNjYWxlWSwgcHVibGljIG5hdm1lc2gsIHB1YmxpYyBzdGF0aWNTcHJpdGVzLCBwdWJsaWMgaW50ZXJhY3RhYmxlU3ByaXRlcywgcHVibGljIG5wY1Nwcml0ZXMpIHt9XHJcbn1cclxuIiwiaW1wb3J0IHtJbnRlcmFjdGlvbn0gZnJvbSBcIi4vSW50ZXJhY3Rpb25cIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBSZWNlaXZlSXRlbUludGVyYWN0aW9uIGV4dGVuZHMgSW50ZXJhY3Rpb25cclxue1xyXG4gICAgLy8gaXRlbSBjYW4gYmUgbnVsbFxyXG4gICAgY29uc3RydWN0b3IoaXRlbTogSXRlbSwgcHJvdGVjdGVkIHN1Y2Nlc3NUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBmYWlsVGV4dDogc3RyaW5nLFxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgc3VjY2Vzc0F1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgZmFpbEF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgaXRlbXNSZWNlaXZlZDogQXJyYXk8SXRlbT4pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoaXRlbSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgb2JqZWN0XHJcbiAgICAvLyByZXR1cm5zIGEgbGlzdCBvZiBpdGVtcyByZWNlaXZlZCBmcm9tIHRoZSBpbnRlcmFjdGlvblxyXG4gICAgcHVibGljIGludGVyYWN0KGl0ZW06IEl0ZW0pOiB7dGV4dDogc3RyaW5nLCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgaXRlbXM6IEFycmF5PEl0ZW0+fVxyXG4gICAge1xyXG4gICAgICAgIGlmKGl0ZW0gPT0gdGhpcy5pdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHt0ZXh0OiB0aGlzLnN1Y2Nlc3NUZXh0LCBhdWRpbzogdGhpcy5zdWNjZXNzQXVkaW8sIGl0ZW1zOiB0aGlzLml0ZW1zUmVjZWl2ZWR9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIHt0ZXh0OiB0aGlzLmZhaWxUZXh0LCBhdWRpbzogdGhpcy5mYWlsQXVkaW8sIGl0ZW1zOiBudWxsfTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgbGV0IGNhbnZhczogSFRNTENhbnZhc0VsZW1lbnQ7XHJcbmV4cG9ydCBsZXQgY3R4OiBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkQ7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaW5pdENhbnZhc0FuZENvbnRleHQoKVxyXG57XHJcbiAgICBjYW52YXMgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhbnZhc1wiKSBhcyBIVE1MQ2FudmFzRWxlbWVudDtcclxuICAgIGN0eCA9IGNhbnZhcy5nZXRDb250ZXh0KFwiMmRcIik7XHJcbiAgICBjdHguZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uPSdkZXN0aW5hdGlvbi1vdmVyJztcclxuICAgIGN0eC5pbWFnZVNtb290aGluZ0VuYWJsZWQgPSB0cnVlOyAgIC8vIGVuYWJsZSBhbnRpLWFsaWFzaW5nIG9mIGltYWdlc1xyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBJbnB1dE1hbmFnZXJcclxue1xyXG4gICAgcHJpdmF0ZSBwcmltYXJ5TW91c2VEb3duQ2FsbGJhY2tzOiBBcnJheTwoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ+ID0gQXJyYXk8KCkgPT4gdm9pZD4oKTtcclxuICAgIHByaXZhdGUgc2Vjb25kYXJ5TW91c2VEb3duQ2FsbGJhY2tzOiBBcnJheTwoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ+ID0gQXJyYXk8KCkgPT4gdm9pZD4oKTtcclxuICAgIHByaXZhdGUgdG91Y2hTdGFydEF0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIGxvbmdUb3VjaER1cmF0aW9uOiBudW1iZXIgPSA1MDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudClcclxuICAgIHtcclxuICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY29udGV4dG1lbnVcIiwgZXZlbnQgPT4gZXZlbnQucHJldmVudERlZmF1bHQoKSk7ICAvLyBkaXNhYmxlIHJpZ2h0IGNsaWNrIGNvbnRleHQgbWVudVxyXG4gICAgICAgIC8vIGlmKGNhbnZhcyAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gICAgIGNhbnZhcy5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2VEb3duKTtcclxuICAgICAgICAvLyB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIHRoaXMubW91c2Vkb3duKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoc3RhcnRcIiwgdGhpcy50b3VjaHN0YXJ0KTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNoZW5kXCIsIHRoaXMudG91Y2hlbmQpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hjYW5jZWxcIiwgdGhpcy50b3VjaGVuZCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaG1vdmVcIiwgdGhpcy50b3VjaG1vdmUpO1xyXG4gICAgICAgIC8vIH1cclxuXHJcbiAgICAgICAgdGhpcy50b3VjaFN0YXJ0QXQgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlyZVByaW1hcnlNb3VzZURvd25FdmVudCh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBmb3IoY29uc3QgY2FsbGJhY2sgb2YgdGhpcy5wcmltYXJ5TW91c2VEb3duQ2FsbGJhY2tzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZmlyZVNlY29uZGFyeU1vdXNlRG93bkV2ZW50KHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBjYWxsYmFjayBvZiB0aGlzLnNlY29uZGFyeU1vdXNlRG93bkNhbGxiYWNrcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKHgsIHkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbW91c2Vkb3duID0gKGU6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgIC8vIG5vdGlmeSBhbGwgY2FsbGJhY2tzXHJcbiAgICAgICAgaWYoZS5idXR0b24gPT09IDApIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlUHJpbWFyeU1vdXNlRG93bkV2ZW50KGUubGF5ZXJYLCBlLmxheWVyWSk7XHJcbiAgICAgICAgfSBlbHNlIGlmKGUuYnV0dG9uID09PSAyKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVNlY29uZGFyeU1vdXNlRG93bkV2ZW50KGUubGF5ZXJYLCBlLmxheWVyWSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvbmxvbmd0b3VjaCA9IChlOiBUb3VjaEV2ZW50KSA9PiB7XHJcbiAgICAgICAgLy8gZmlyZSBzZWNvbmRhcnkgbW91c2UgY2xpY2sgZXZlbnRcclxuICAgICAgICB0aGlzLmZpcmVTZWNvbmRhcnlNb3VzZURvd25FdmVudChlLnRvdWNoZXNbMF0uY2xpZW50WCwgZS50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b3VjaHN0YXJ0ID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRBdCA9IERhdGUubm93KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvdWNoZW5kID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICBpZihEYXRlLm5vdygpIC0gdGhpcy50b3VjaFN0YXJ0QXQgPCB0aGlzLmxvbmdUb3VjaER1cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVByaW1hcnlNb3VzZURvd25FdmVudChlLnRvdWNoZXNbMF0uY2xpZW50WCwgZS50b3VjaGVzWzBdLmNsaWVudFkpOyAvLyBmaXJlIHByaW1hcnkgbW91c2UgY2xpY2sgZXZlbnRcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVTZWNvbmRhcnlNb3VzZURvd25FdmVudChlLnRvdWNoZXNbMF0uY2xpZW50WCwgZS50b3VjaGVzWzBdLmNsaWVudFkpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG91Y2htb3ZlID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgaWYoRGF0ZS5ub3coKSAtIHRoaXMudG91Y2hTdGFydEF0ID49IHRoaXMubG9uZ1RvdWNoRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlUHJpbWFyeU1vdXNlRG93bkV2ZW50KGUudG91Y2hlc1swXS5jbGllbnRYLCBlLnRvdWNoZXNbMF0uY2xpZW50WSk7IC8vIGZpcmUgcHJpbWFyeSBtb3VzZSBjbGljayBldmVudFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVNlY29uZGFyeU1vdXNlRG93bkV2ZW50KGUudG91Y2hlc1swXS5jbGllbnRYLCBlLnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRQcmltYXJ5TW91c2VEb3duQ2FsbGJhY2soY2FsbGJhY2s6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnByaW1hcnlNb3VzZURvd25DYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFNlY29uZGFyeU1vdXNlRG93bkNhbGxiYWNrKGNhbGxiYWNrOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zZWNvbmRhcnlNb3VzZURvd25DYWxsYmFja3MucHVzaChjYWxsYmFjayk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi9JdGVtXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBJbnZlbnRvcnlcclxue1xyXG4gICAgcHJpdmF0ZSBpdGVtcyA9IG5ldyBBcnJheTxJdGVtPig5KTsgLy8gTUFYX05VTV9JVEVNUyA9IDlcclxuXHJcbiAgICBwdWJsaWMgY29udGFpbnNJdGVtKGl0ZW06IEl0ZW0pOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pdGVtc1tpbmRleF0gPT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRJdGVtKGl0ZW06IEl0ZW0pOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgaXRlbSB0byB0aGUgZmlyc3QgYXZhaWxhYmxlIHNsb3RcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLml0ZW1zW2luZGV4XSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBpdGVtO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShpdGVtOiBJdGVtKTogSXRlbVxyXG4gICAge1xyXG4gICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNbaW5kZXhdID09PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJlbW92ZWQgXCIgKyBpdGVtLmdldE5hbWUoKSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbUJ5SW5kZXgoaW5kZXg6IG51bWJlcik6IEl0ZW1cclxuICAgIHtcclxuICAgICAgICBpZihpbmRleCAhPSBudWxsICYmIGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGgpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gdGhpcy5pdGVtc1tpbmRleF07XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3ZlSXRlbShpdGVtOiBJdGVtLCBpbmRleDogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2VsZWN0ZWRcIiwgaXRlbSk7XHJcbiAgICAgICAgaWYodGhpcy5pdGVtc1tpbmRleF0gPT0gbnVsbCkgeyAvLyBpZiBuZXcgaXRlbXNsb3QgaXMgZnJlZVxyXG4gICAgICAgICAgICBsZXQgeCA9IHRoaXMucmVtb3ZlSXRlbShpdGVtKTtcclxuICAgICAgICAgICAgaWYoeCAhPSBudWxsKSB7IC8vIGNoZWNrIHRoZSBwbGF5ZXIgYWN0dWFsbHkgaGFkIHRoZSBpdGVtXHJcbiAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IGl0ZW07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuaXRlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbnVsbDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW1zKCk6IEFycmF5PEl0ZW0+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaXRlbXM7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEl0ZW1cclxue1xyXG4gICAgcHJvdGVjdGVkIGNvbWJpbmF0aW9uczogQXJyYXk8e290aGVyOiBJdGVtLCBvdXQ6IEFycmF5PEl0ZW0+fT47XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIG5hbWU6IHN0cmluZywgcHJvdGVjdGVkIGV4YW1pbmVUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBleGFtaW5lQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBpbWdwYXRoOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5jb21iaW5hdGlvbnMgPSBbXTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY29tYmluZShvdGhlcjogSXRlbSk6IEFycmF5PEl0ZW0+XHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGNtYiBvZiB0aGlzLmNvbWJpbmF0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpdGVtIGlzIGNvbWJpbmFibGUsIHJldHVybiB0aGUgYXJyYXkgb2YgaXRlbXMgY3JlYXRlZFxyXG4gICAgICAgICAgICBpZihvdGhlciA9PT0gY21iLm90aGVyKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY21iLm91dDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZENvbWJpbmF0aW9uKG90aGVyOiBJdGVtLCBvdXQ6IEFycmF5PEl0ZW0+KTogdm9pZFxyXG4gICAge1xyXG4gICAgICAgIGlmKG90aGVyICE9IG51bGwgJiYgb3V0ICE9IG51bGwpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmNvbWJpbmF0aW9ucy5wdXNoKHtvdGhlcjogb3RoZXIsIG91dDogb3V0fSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXROYW1lKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lQXVkaW8oKTogSFRNTEF1ZGlvRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVBdWRpbztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SW1hZ2VQYXRoKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmltZ3BhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBgSXRlbSgke3RoaXMubmFtZX0pYDtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2NhbnZhcywgY3R4LCBpbml0Q2FudmFzQW5kQ29udGV4dH0gZnJvbSBcIi4vZ2xvYlwiXHJcbmltcG9ydCB7TmF2TWVzaH0gZnJvbSBcIi4vY29sbGlzaW9uL05hdk1lc2hcIlxyXG5pbXBvcnQge1RyaWFuZ2xlfSBmcm9tIFwiLi9jb2xsaXNpb24vVHJpYW5nbGVcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vY29sbGlzaW9uL0lTaGFwZVwiXHJcbmltcG9ydCB7SW5wdXRNYW5hZ2VyfSBmcm9tIFwiLi9pbnB1dC9JbnB1dE1hbmFnZXJcIlxyXG5pbXBvcnQge0ltYWdlTG9hZGVyfSBmcm9tIFwiLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXJcIlxyXG5pbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gXCIuL3Jlc291cmNlcy9KU09OTG9hZGVyXCJcclxuaW1wb3J0IHtMZXZlbH0gZnJvbSBcIi4vZ2FtZS9MZXZlbFwiXHJcbmltcG9ydCB7U3RhdGljU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL1N0YXRpY1Nwcml0ZVwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge0ludGVyYWN0YWJsZVNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9JbnRlcmFjdGFibGVTcHJpdGVcIlxyXG5pbXBvcnQge05hdlNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9OYXZTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vc3ByaXRlcy9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4vc3ByaXRlcy9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge1BsYXllclNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9QbGF5ZXJTcHJpdGVcIlxyXG5pbXBvcnQge05QQ1Nwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9OUENTcHJpdGVcIlxyXG5pbXBvcnQge0l0ZW19IGZyb20gXCIuL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4vaXRlbXMvSW52ZW50b3J5XCJcclxuaW1wb3J0IHtDb252ZXJzYXRpb259IGZyb20gXCIuL2NoYXQvQ29udmVyc2F0aW9uXCJcclxuaW1wb3J0IHtEaWFsb2d9IGZyb20gXCIuL2NoYXQvRGlhbG9nXCJcclxuaW1wb3J0IHtDb250aW51ZURpYWxvZ30gZnJvbSBcIi4vY2hhdC9Db250aW51ZURpYWxvZ1wiXHJcbmltcG9ydCB7T3B0aW9uRGlhbG9nfSBmcm9tIFwiLi9jaGF0L09wdGlvbkRpYWxvZ1wiXHJcblxyXG5sZXQgaW5wdXRNYW5hZ2VyO1xyXG5sZXQgaW1nOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG5sZXQgc2NlbmVTY2FsZTogbnVtYmVyO1xyXG5sZXQgbGV2ZWxTY2FsZTogbnVtYmVyO1xyXG5sZXQgZGVwdGhTY2FsZVk6IG51bWJlcjtcclxubGV0IHN0YXRpY1Nwcml0ZXMgPSBuZXcgQXJyYXk8U3RhdGljU3ByaXRlPigpO1xyXG5sZXQgaW50ZXJhY3RhYmxlU3ByaXRlcyA9IG5ldyBBcnJheTxJbnRlcmFjdGFibGVTcHJpdGU+KCk7XHJcbmxldCBucGNTcHJpdGVzID0gbmV3IEFycmF5PE5QQ1Nwcml0ZT4oKTtcclxubGV0IHBsYXllclNwcml0ZTtcclxubGV0IG5hdm1lc2g7XHJcblxyXG5sZXQgaXRlbXMgPSB7fTsgICAgICAgICAvLyBkYXRhYmFzZSBvZiBpdGVtc1xyXG5sZXQgaXRlbXNsb3RidG5zID0gW107ICAvLyBhcnJheSBvZiBpdGVtc2xvdCBodG1sIGJ1dHRvbnNcclxubGV0IGl0ZW1idG5zID0gW107ICAgICAgLy8gYXJyYXkgb2YgaXRlbSBodG1sIGJ1dHRvbnNcclxubGV0IGludmVudCA9IG5ldyBJbnZlbnRvcnkoKTsgLy8gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG5sZXQgc2VsZWN0ZWRJdGVtOyAgICAgICAvLyB1c2VyIGNhbiBzZWxlY3QgYW4gaXRlbSBmcm9tIGludmVudG9yeSBieSBsZWZ0IGNsaWNraW5nXHJcbmxldCBzZWxlY3RlZEl0ZW1CdG47XHJcblxyXG4vLyB0cnVlIGlmZiB0aGUgcGxheWVyIGlzIHRhbGtpbmcgdG8gYW4gTlBDXHJcbmxldCBpbkNvbnZlcnNhdGlvbjogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuLy8gbWFwIGZyb20gbGV2ZWwgbmFtZSB0byBhbmQgb2JqZWN0IGdpdmluZyBkZXRhaWxzIGFib3V0IHdoYXQgaGFzIGNoYW5nZWRcclxubGV0IGxldmVsU2F2ZUluZm8gPSB7fTtcclxuXHJcbmxldCBmYldpZHRoO1xyXG5sZXQgZmJIZWlnaHQ7XHJcbmxldCBsYXN0VGltZTtcclxuXHJcbmZ1bmN0aW9uIGdhbWVMb29wKCkgLy8gVE9ETyAtIHNwbGl0IGRyYXcgaW50byB1cGRhdGUgYW5kIGRyYXcgZnVuY3Rpb25zXHJcbntcclxuICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcCk7XHJcbiAgICBjdHguZmlsbFN0eWxlID0gXCJibGFja1wiO1xyXG4gICAgY3R4LmZpbGxSZWN0KDAsIDAsIGZiV2lkdGgsIGZiSGVpZ2h0KTtcclxuXHJcbiAgICAvLyBzZXQgb3JpZ2luIHRvIHRoZSBjYW52YXMncyBjZW50cmVcclxuICAgIGN0eC5zYXZlKCk7XHJcbiAgICBjdHgudHJhbnNsYXRlKGZiV2lkdGgvMiwgZmJIZWlnaHQvMik7XHJcbiAgICBjdHguc2NhbGUoc2NlbmVTY2FsZSwgc2NlbmVTY2FsZSk7XHJcblxyXG4gICAgY29uc3QgY3VycmVudFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgY29uc3QgZGVsdGFUaW1lID0gY3VycmVudFRpbWUgLSBsYXN0VGltZTtcclxuXHJcbiAgICAvLyBkcmF3IHRoZSBzY2VuZSBzcGVjaWZpYyBzcHJpdGVzXHJcbiAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIHN0YXRpY1Nwcml0ZXMpXHJcbiAgICB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgc3ByaXRlcyB3aGljaCB0aGUgcGxheWVyIGNhbiBpbnRlcmFjdCB3aXRoXHJcbiAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIGludGVyYWN0YWJsZVNwcml0ZXMpXHJcbiAgICB7XHJcbiAgICAgICAgc3ByaXRlLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gZHJhdyB0aGUgTlBDIHNwcml0ZXNcclxuICAgIGZvcihjb25zdCBzcHJpdGUgb2YgbnBjU3ByaXRlcylcclxuICAgIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3IHRoZSBwbGF5ZXIgc3ByaXRlXHJcbiAgICBwbGF5ZXJTcHJpdGUuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuXHJcbiAgICAvLyBERUJVRyAtIGRyYXcgdGhlIGNvbGxpc2lvbiBib3hlc1xyXG4gICAgbmF2bWVzaC5kcmF3KCk7XHJcblxyXG4gICAgLy8gcmVzdG9yZSBjYW52YXMgdG8gb3JpZ2luYWwgc2V0dGluZ3NcclxuICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgbGFzdFRpbWUgPSBjdXJyZW50VGltZTtcclxufVxyXG5cclxuZnVuY3Rpb24gYWRkSW5wdXRDYWxsYmFja3MoKSB7XHJcbiAgICBpbnB1dE1hbmFnZXIuYWRkUHJpbWFyeU1vdXNlRG93bkNhbGxiYWNrKChtb3VzZXg6IG51bWJlciwgbW91c2V5OiBudW1iZXIpID0+IHtcclxuICAgICAgICBpZighaW5Db252ZXJzYXRpb24pIHtcclxuICAgICAgICAgICAgbGV0IHggPSAobW91c2V4IC0gY2FudmFzLm9mZnNldExlZnQgLSBmYldpZHRoLzIpIC8gc2NlbmVTY2FsZTtcclxuICAgICAgICAgICAgbGV0IHkgPSAobW91c2V5IC0gY2FudmFzLm9mZnNldFRvcCAtIGZiSGVpZ2h0LzIpIC8gc2NlbmVTY2FsZTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJsZWZ0IG1vdXNlIGRvd24gYXQgKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIilcIik7XHJcbiAgICAgICAgICAgIGxldCBpbnRlcmFjdGVkV2l0aFNwcml0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGNsaWNrcyBvbiBpbnRlcmFjdGFibGUgKHN0YXRpYykgc3ByaXRlc1xyXG4gICAgICAgICAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIGludGVyYWN0YWJsZVNwcml0ZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHNwcml0ZS5pbkludGVyYWN0aW9uWm9uZShwbGF5ZXJTcHJpdGUueCwgcGxheWVyU3ByaXRlLnkpICYmIHNwcml0ZS5pbkNsaWNrWm9uZSh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGludGVyYWN0IHdpdGggdGhlIHNwcml0ZVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IHNwcml0ZS5pbnRlcmFjdChzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKG9iaiAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKG9iai50ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yKGNvbnN0IGl0bSBvZiBvYmouaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludmVudC5hZGRJdGVtKGl0bSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWZyZXNoQWxsSXRlbXNEaXNwbGF5ZWQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihvYmouYXVkaW8gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmF1ZGlvLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKFwiVGhhdCdzIGEgcnViYmlzaCBpZGVhIVwiKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3RlZFdpdGhTcHJpdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgY2xpY2tzIG9uIE5QQyBzcHJpdGVzXHJcbiAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgbnBjU3ByaXRlcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoc3ByaXRlLmluSW50ZXJhY3Rpb25ab25lKHBsYXllclNwcml0ZS54LCBwbGF5ZXJTcHJpdGUueSkgJiYgc3ByaXRlLmluQ2xpY2tab25lKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3BlbkNoYXRHVUkoc3ByaXRlLmdldENvbnZlcnNhdGlvbigpKTtcclxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGVkV2l0aFNwcml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmKCFpbnRlcmFjdGVkV2l0aFNwcml0ZSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHdheXBvaW50cyA9IG5hdm1lc2guZ2V0V2F5cG9pbnRzKHBsYXllclNwcml0ZS54LCBwbGF5ZXJTcHJpdGUueSwgeCwgeSk7XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0V2F5cG9pbnRzKHdheXBvaW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICBpbnB1dE1hbmFnZXIuYWRkU2Vjb25kYXJ5TW91c2VEb3duQ2FsbGJhY2soKG1vdXNleDogbnVtYmVyLCBtb3VzZXk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmKCFpbkNvbnZlcnNhdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgeCA9IChtb3VzZXggLSBjYW52YXMub2Zmc2V0TGVmdCAtIGZiV2lkdGgvMikgLyBzY2VuZVNjYWxlO1xyXG4gICAgICAgICAgICBsZXQgeSA9IChtb3VzZXkgLSBjYW52YXMub2Zmc2V0VG9wIC0gZmJIZWlnaHQvMikgLyBzY2VuZVNjYWxlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInJpZ2h0IG1vdXNlIGRvd24gYXQgKFwiICsgeCArIFwiLCBcIiArIHkgKyBcIilcIik7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgY2xpY2tzIG9uIGludGVyYWN0YWJsZSAoc3RhdGljKSBzcHJpdGVzXHJcbiAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoc3ByaXRlLmluQ2xpY2tab25lKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXhhbWluZSB0aGUgaW50ZXJhY3RhYmxlIHNwcml0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKHNwcml0ZS5nZXRFeGFtaW5lVGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihzcHJpdGUuZ2V0RXhhbWluZUF1ZGlvKCkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUuZ2V0RXhhbWluZUF1ZGlvKCkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gY2hlY2sgZm9yIGNsaWNrcyBvbiBOUEMgc3ByaXRlc1xyXG4gICAgICAgICAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIG5wY1Nwcml0ZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHNwcml0ZS5pbkNsaWNrWm9uZSh4LCB5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGV4YW1pbmUgdGhlIE5QQyBzcHJpdGVcclxuICAgICAgICAgICAgICAgICAgICBwbGF5ZXJTcHJpdGUub3BlblNwZWVjaEJ1YmJsZShzcHJpdGUuZ2V0RXhhbWluZVRleHQoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYoc3ByaXRlLmdldEV4YW1pbmVBdWRpbygpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3ByaXRlLmdldEV4YW1pbmVBdWRpbygpLnBsYXkoKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KTtcclxufVxyXG5cclxuZnVuY3Rpb24gbG9hZFBsYXllclNwcml0ZSgpOiBQcm9taXNlPEFuaW1hdGVkU3ByaXRlPlxyXG57XHJcbiAgICByZXR1cm4gbmV3IFByb21pc2U8QW5pbWF0ZWRTcHJpdGU+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBsZXQgYXRsYXMgPSBuZXcgVGV4dHVyZUF0bGFzKFwicmVzL2F0bGFzZXMvYW5pbWF0ZWQucG5nXCIpO1xyXG4gICAgICAgIGxldCBwbGF5ZXJTcHJpdGU7XHJcbiAgICAgICAgY29uc3QgYXRsYXNMb2FkZWRQcm9taXNlID0gYXRsYXMubG9hZCgpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBURVNUX0FOSU1BVElPTiA9IG5ldyBTcHJpdGVBbmltYXRpb24oMiwgYXRsYXMsIFwiYW5pbWF0ZWRcIik7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZSA9IG5ldyBQbGF5ZXJTcHJpdGUoMTAwLCAyMDAsIDEuMjUsIFwiY2VudHJlXCIsIFwidG9wXCIsIFtURVNUX0FOSU1BVElPTl0pO1xyXG4gICAgICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0Q3VycmVudEFuaW1hdGlvbigwKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgcGxheWVyIHNwcml0ZSB0ZXh0dXJlIGF0bGFzJyk7XHJcbiAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgbGV0IHNwZWVjaEJ1YmJsZUltYWdlO1xyXG4gICAgICAgIGNvbnN0IHNwZWVjaEJ1YmJsZUxvYWRlZFByb21pc2UgPSBJbWFnZUxvYWRlci5sb2FkSW1hZ2UoXCJyZXMvaW1hZ2VzL3NwZWVjaF9idWJibGUucG5nXCIpLnRoZW4oKGltZykgPT4ge1xyXG4gICAgICAgICAgICBzcGVlY2hCdWJibGVJbWFnZSA9IGltZztcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IHNwZWVjaCBidWJibGUgaW1hZ2UgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBQcm9taXNlLmFsbChbYXRsYXNMb2FkZWRQcm9taXNlLCBzcGVlY2hCdWJibGVMb2FkZWRQcm9taXNlXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZS5zZXRTcGVlY2hCdWJibGVJbWFnZShzcGVlY2hCdWJibGVJbWFnZSk7XHJcbiAgICAgICAgICAgIHJlc29sdmUocGxheWVyU3ByaXRlKTtcclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcblxyXG4vLyBwcm9ncmFtIGVudHJ5IHBvaW50XHJcbndpbmRvdy5vbmxvYWQgPSAoKSA9PlxyXG57XHJcbiAgICBpbml0Q2FudmFzQW5kQ29udGV4dCgpO1xyXG4gICAgaW5wdXRNYW5hZ2VyID0gbmV3IElucHV0TWFuYWdlcihjYW52YXMpO1xyXG4gICAgYWRkSW5wdXRDYWxsYmFja3MoKTtcclxuXHJcbiAgICAvLyBzZXQgdGhlIGNhbnZhcyBzaXplXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOTU7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC45NTtcclxuICAgIGZiV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICBmYkhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcblxyXG4gICAgLy8gbGV2ZWwgc2V0dXAgZGF0YVxyXG4gICAgbGV0IHBsYXllclN0YXJ0WCA9IDA7XHJcbiAgICBsZXQgcGxheWVyU3RhcnRZID0gMDtcclxuXHJcbiAgICBjb25zdCBsb2FkUGxheWVyU3ByaXRlUHJvbWlzZSA9IGxvYWRQbGF5ZXJTcHJpdGUoKS50aGVuKChzcHJpdGUpID0+IHtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUgPSBzcHJpdGU7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvclwiKTtcclxuICAgIH0pO1xyXG5cclxuICAgIGNvbnN0IGxvYWRJdGVtc1Byb21pc2UgPSBKU09OTG9hZGVyLmxvYWRKU09ORmlsZShcInJlcy9pdGVtcy9pdGVtcy5qc29uXCIpLnRoZW4oKG9iaikgPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2cob2JqLml0ZW1zKVxyXG4gICAgICAgIGZvcihjb25zdCBpZCBpbiBvYmouaXRlbXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBpdG0gPSBvYmouaXRlbXNbaWRdO1xyXG4gICAgICAgICAgICBpdGVtc1tpZF0gPSBuZXcgSXRlbShpdG0ubmFtZSwgaXRtLmV4YW1pbmVfdGV4dCwgbmV3IEF1ZGlvKGl0bS5leGFtaW5lX2F1ZGlvKSwgaXRtLmltYWdlKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGNvbnN0IGlkIGluIG9iai5jb21iaW5hdGlvbnMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBjb21iaW5hdGlvbiA9IG9iai5jb21iaW5hdGlvbnNbaWRdO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtMSA9IGl0ZW1zW2NvbWJpbmF0aW9uLml0ZW0xXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbTIgPSBpdGVtc1tjb21iaW5hdGlvbi5pdGVtMl07XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1zT3V0ID0gW107XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBpZE91dCBvZiBjb21iaW5hdGlvbi5pdGVtc19vdXQpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zT3V0LnB1c2goaXRlbXNbaWRPdXRdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZihpdGVtMSAhPSBudWxsICYmIGl0ZW0yICE9IG51bGwpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0xLmFkZENvbWJpbmF0aW9uKGl0ZW0yLCBpdGVtc091dCk7XHJcbiAgICAgICAgICAgICAgICBpdGVtMi5hZGRDb21iaW5hdGlvbihpdGVtMSwgaXRlbXNPdXQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGxvYWRMb2NhbEdhbWVTYXZlKCk7XHJcbiAgICAgICAgaW5pdEdVSUNvbnRyb2xsZXJzKCk7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogaXRlbXMgY291bGQgbm90IGJlIGxvYWRlZFwiKTtcclxuICAgIH0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgIHJldHVybiBMZXZlbC5sb2FkTGV2ZWwoXCJyZXMvbGV2ZWxzL2xldmVsMS5qc29uXCIsIGl0ZW1zKTtcclxuICAgIH0pLnRoZW4oKGxldmVsRGF0YSkgPT4ge1xyXG4gICAgICAgIGltZyA9IGxldmVsRGF0YS5iYWNrZ3JvdW5kSW1nO1xyXG4gICAgICAgIHN0YXRpY1Nwcml0ZXMgPSBsZXZlbERhdGEuc3RhdGljU3ByaXRlcztcclxuICAgICAgICBpbnRlcmFjdGFibGVTcHJpdGVzID0gbGV2ZWxEYXRhLmludGVyYWN0YWJsZVNwcml0ZXM7XHJcbiAgICAgICAgbnBjU3ByaXRlcyA9IGxldmVsRGF0YS5ucGNTcHJpdGVzO1xyXG4gICAgICAgIGxldmVsU2NhbGUgPSBsZXZlbERhdGEuc2NlbmVTY2FsZSA/IGxldmVsRGF0YS5zY2VuZVNjYWxlIDogMS4wO1xyXG4gICAgICAgIHNjZW5lU2NhbGUgPSBsZXZlbFNjYWxlICogY2FudmFzLmhlaWdodC84ODA7ICAvLyBzY2FsZSBiYXNlZCBvbiB0aGUgY2FudmFzIHNpemUgc28gZ2FtZSBmaXRzIG9uIHNjcmVlblxyXG4gICAgICAgIGRlcHRoU2NhbGVZID0gbGV2ZWxEYXRhLmRlcHRoU2NhbGVZO1xyXG5cclxuICAgICAgICBwbGF5ZXJTdGFydFggPSBsZXZlbERhdGEucGxheWVyU3RhcnRYO1xyXG4gICAgICAgIHBsYXllclN0YXJ0WSA9IGxldmVsRGF0YS5wbGF5ZXJTdGFydFk7XHJcblxyXG4gICAgICAgIG5hdm1lc2ggPSBsZXZlbERhdGEubmF2bWVzaDtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBsZXZlbCBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgUHJvbWlzZS5hbGwoW2xvYWRQbGF5ZXJTcHJpdGVQcm9taXNlLCBsb2FkSXRlbXNQcm9taXNlXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnggPSBwbGF5ZXJTdGFydFg7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnkgPSBwbGF5ZXJTdGFydFk7XHJcbiAgICAgICAgcGxheWVyU3ByaXRlLnNldFN0YXJ0UG9zKHBsYXllclN0YXJ0WCwgcGxheWVyU3RhcnRZKTtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0RGVwdGhTY2FsZShkZXB0aFNjYWxlWSk7XHJcbiAgICAgICAgbGFzdFRpbWUgPSBEYXRlLm5vdygpO1xyXG4gICAgICAgIGdhbWVMb29wKCk7XHJcbiAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogZ2FtZSBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIG9uIHdpbmRvdyByZXNpemUgY2hhbmdlIHRoZSBzY2FsZVxyXG53aW5kb3cub25yZXNpemUgPSAoKSA9PiB7XHJcbiAgICAvLyBzZXQgdGhlIGNhbnZhcyBzaXplXHJcbiAgICBjYW52YXMud2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aCAqIDAuOTU7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gd2luZG93LmlubmVySGVpZ2h0ICogMC45NTtcclxuICAgIGZiV2lkdGggPSBjYW52YXMud2lkdGg7XHJcbiAgICBmYkhlaWdodCA9IGNhbnZhcy5oZWlnaHQ7XHJcbiAgICBzY2VuZVNjYWxlID0gbGV2ZWxTY2FsZSAqIGNhbnZhcy5oZWlnaHQvODgwOyAgLy8gc2NhbGUgYmFzZWQgb24gdGhlIGNhbnZhcyBzaXplIHNvIGdhbWUgZml0cyBvbiBzY3JlZW5cclxuICAgIGNvbnNvbGUubG9nKHNjZW5lU2NhbGUpO1xyXG59XHJcblxyXG4vLyBjaGF0IGd1aVxyXG5mdW5jdGlvbiBvcGVuQ2hhdEdVSShjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbikge1xyXG4gICAgaWYoY29udmVyc2F0aW9uICE9IG51bGwpIHtcclxuICAgICAgICBsZXQgY2hhdHBhbmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaGF0cGFuZWxcIik7XHJcbiAgICAgICAgaWYoY2hhdHBhbmVsICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gcmVtb3ZlIHRoZSBjaGF0IHBhbmVsIGlmIGl0IGFscmVhZHkgZXhpc3RzXHJcbiAgICAgICAgICAgIGNoYXRwYW5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoYXRwYW5lbCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGF0cGFuZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgIGNoYXRwYW5lbC5pZCA9IFwiY2hhdHBhbmVsXCI7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoY2hhdHBhbmVsLCBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImludmVudFwiKSk7XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhIEdVSSBmb3IgdGhlIGRpYWxvZ1xyXG4gICAgICAgIGxldCBkID0gY29udmVyc2F0aW9uLmdldEZpcnN0RGlhbG9nKCk7XHJcbiAgICAgICAgY3JlYXRlRGlhbG9nR1VJKGNoYXRwYW5lbCBhcyBIVE1MRGl2RWxlbWVudCwgZCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZURpYWxvZ0dVSShjaGF0cGFuZWw6IEhUTUxEaXZFbGVtZW50LCBkOiBEaWFsb2cpIHtcclxuICAgIGNoYXRwYW5lbC5pbm5lckhUTUwgPSBcIlwiOyAgIC8vIGNsZWFyIHRoZSBkaXYgb2YgcHJldmlvdXMgY29udGVudHNcclxuXHJcbiAgICBpZihkICE9IG51bGwpIHtcclxuICAgICAgICBpbkNvbnZlcnNhdGlvbiA9IHRydWU7XHJcblxyXG4gICAgICAgIC8vIGFkZCB0aGUgc3BlYWtlciBpbWFnZSBiYXNlZCBvbiB3aGV0aGVyIHBsYXllciBvciBucGMgaXMgc3BlYWtpbmdcclxuICAgICAgICBsZXQgc3BlYWtlcmltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgc3BlYWtlcmltZy5zcmMgPSBcInJlcy9pbWFnZXMvcGxheWVyX2hlYWQucG5nXCI7XHJcbiAgICAgICAgc3BlYWtlcmltZy5jbGFzc0xpc3QuYWRkKGQuZ2V0U3BlYWtlcigpID09IFwicGxheWVyXCIgPyBcInBsYXllcmNoYXRoZWFkXCIgOiBcIm5wY2NoYXRoZWFkXCIpO1xyXG4gICAgICAgIGNoYXRwYW5lbC5hcHBlbmRDaGlsZChzcGVha2VyaW1nKTtcclxuXHJcbiAgICAgICAgLy8gYWRkIGxhYmVscyBhbmQgYnV0dG9ucyBmb3IgdGhpcyBkaWFsb2dcclxuICAgICAgICBkLmNyZWF0ZUdVSUVsZW1lbnQoY2hhdHBhbmVsLCBpbnZlbnQpLnRoZW4oKG5leHREaWFsb2c6IERpYWxvZykgPT4ge1xyXG4gICAgICAgICAgICBpZihuZXh0RGlhbG9nICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIC8vIHN0b3AgdGhlIGRpYWxvZyBhdWRpb1xyXG4gICAgICAgICAgICAgICAgaWYoZC5nZXRBdWRpbygpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBkLmdldEF1ZGlvKCkucGF1c2UoKTtcclxuICAgICAgICAgICAgICAgICAgICBkLmdldEF1ZGlvKCkuY3VycmVudFRpbWUgPSAwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFkdmFuY2UgdG8gbmV4dCBkaWFsb2dcclxuICAgICAgICAgICAgICAgIGNyZWF0ZURpYWxvZ0dVSShjaGF0cGFuZWwsIG5leHREaWFsb2cpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gbmV4dCBkaWFsb2cgaXMgbnVsbCwgdGhlcmVmb3JlLCBleGl0IGNvbnZlcnNhdGlvblxyXG4gICAgICAgICAgICAgICAgY2hhdHBhbmVsLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoY2hhdHBhbmVsKTtcclxuICAgICAgICAgICAgICAgIGluQ29udmVyc2F0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgLy8gcmVmcmVzaCBpbnZlbnRvcnkgR1VJXHJcbiAgICAgICAgcmVmcmVzaEFsbEl0ZW1zRGlzcGxheWVkKCk7XHJcblxyXG4gICAgICAgIC8vIHBsYXkgdGhlIGRpYWxvZyBhdWRpb1xyXG4gICAgICAgIGlmKGQuZ2V0QXVkaW8oKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIGQuZ2V0QXVkaW8oKS5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLyBndWkgY29udHJvbFxyXG5mdW5jdGlvbiBpbml0R1VJQ29udHJvbGxlcnMoKSB7XHJcbiAgICAvLyBnZXQgYWxsIG9mIHRoZSBpdGVtIHNsb3QgaHRtbCBidXR0b25zXHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90MVwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90MlwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90M1wiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NFwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NVwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90NlwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90N1wiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90OFwiKSk7XHJcbiAgICBpdGVtc2xvdGJ0bnMucHVzaChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcIml0ZW1zbG90OVwiKSk7XHJcblxyXG4gICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW52ZW50LmdldEl0ZW1zKCkubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpbnZlbnQuZ2V0SXRlbXMoKVtpbmRleF07XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgICAgICAgICAgYWRkTmV3SXRlbUJ1dHRvbihpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGl0ZW1zbG90YnRucy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1zbG90YnRuID0gaXRlbXNsb3RidG5zW2luZGV4XTtcclxuICAgICAgICBpdGVtc2xvdGJ0bi5vbmNsaWNrID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgICAgICBvbkl0ZW1TbG90Q2xpY2soaXRlbXNsb3RidG4sIGluZGV4LCBldnQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gYWRkTmV3SXRlbUJ1dHRvbihpdGVtc2xvdEluZGV4OiBudW1iZXIsIGl0ZW06IEl0ZW0pXHJcbntcclxuICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgdGhlIGl0ZW1cclxuICAgIGxldCBpdGVtYnRuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcclxuICAgIGl0ZW1idG4uY2xhc3NMaXN0LmFkZChcIml0ZW1cIik7XHJcbiAgICBpdGVtYnRuLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aXRlbS5nZXRJbWFnZVBhdGgoKX0pO2A7XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZlbnRcIikuaW5zZXJ0QmVmb3JlKGl0ZW1idG4sIGl0ZW1zbG90YnRuc1tpdGVtc2xvdEluZGV4XSk7XHJcblxyXG4gICAgLy8gYWRkIGEgbW91c2UgY2xpY2sgY2FsbGJhY2sgdG8gdGhlIG5ldyBlbGVtZW50XHJcbiAgICBpdGVtYnRuLm9ubW91c2Vkb3duID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIG9uSXRlbUNsaWNrKGl0ZW1idG4sIGl0ZW0sIGV2dCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hBbGxJdGVtc0Rpc3BsYXllZCgpXHJcbntcclxuICAgIC8vIGZpcnN0LCByZW1vdmUgYWxsIGl0ZW0gYnV0dG9ucyBmcm9tIHRoZSBkb21cclxuICAgIGNvbnN0IGVsZW1zID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIml0ZW1cIik7XHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBlbGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAge1xyXG4gICAgICAgIGxldCBlbGVtZW50ID0gZWxlbXNbaW5kZXhdO1xyXG4gICAgICAgIGVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbGVtZW50KTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBhZGQgYSBidXR0b24gZm9yIGVhY2ggaXRlbSBpbiB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnZlbnQuZ2V0SXRlbXMoKS5sZW5ndGg7IGluZGV4ICsrKSB7XHJcbiAgICAgICAgY29uc3QgaXRlbSA9IGludmVudC5nZXRJdGVtcygpW2luZGV4XTtcclxuICAgICAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgICAgICAgICBhZGROZXdJdGVtQnV0dG9uKGluZGV4LCBpdGVtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIHJlZnJlc2hJdGVtRGlzcGxheWVkKGl0ZW1idG46IEhUTUxCdXR0b25FbGVtZW50LCBpdGVtOiBJdGVtKVxyXG57XHJcbiAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAvLyBjaGFuZ2UgdGhlIGltYWdlIGRpc3BsYXllZCBvbiB0aGUgaXRlbSBidXR0b25cclxuICAgICAgICBpdGVtYnRuLnN0eWxlLmNzc1RleHQgPSBgYmFja2dyb3VuZC1pbWFnZTogdXJsKCR7aXRlbS5nZXRJbWFnZVBhdGgoKX0pO2A7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIHJlbW92ZSB0aGUgaXRlbSBidXR0b24gZnJvbSB0aGUgZG9tXHJcbiAgICAgICAgaXRlbWJ0bi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW1idG4pO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBvbkl0ZW1TbG90Q2xpY2soaXRlbXNsb3RidG46IEhUTUxCdXR0b25FbGVtZW50LCBpdGVtc2xvdEluZGV4OiBudW1iZXIsIGV2dDogTW91c2VFdmVudClcclxue1xyXG4gICAgLy8gbW92ZSBzZWxlY3RlZCBpdGVtIHRvIHRoaXMgc2xvdFxyXG4gICAgaWYoc2VsZWN0ZWRJdGVtICE9IG51bGwgJiYgc2VsZWN0ZWRJdGVtQnRuICE9IG51bGwpXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGZyb20gcHJldmlvdXMgaXRlbXNsb3QgYW5kIGFkZCB0byBuZXcgaXRlbXNsb3RcclxuICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICByZWZyZXNoSXRlbURpc3BsYXllZChzZWxlY3RlZEl0ZW1CdG4sIG51bGwpO1xyXG4gICAgICAgIGFkZE5ld0l0ZW1CdXR0b24oaXRlbXNsb3RJbmRleCwgc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhpbnZlbnQubW92ZUl0ZW0oc2VsZWN0ZWRJdGVtLCBpdGVtc2xvdEluZGV4KSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW52ZW50LmdldEl0ZW1zKCkpO1xyXG4gICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gbnVsbDtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25JdGVtQ2xpY2soaXRlbWJ0bjogSFRNTEJ1dHRvbkVsZW1lbnQsIGl0ZW06IEl0ZW0sIGV2dDogTW91c2VFdmVudClcclxue1xyXG4gICAgaWYoZXZ0LmJ1dHRvbiA9PT0gMCkgeyAgLy8gbGVmdCBjbGlja1xyXG4gICAgICAgIC8vIGNvbWJpbmUgMiBpdGVtcywgKGNhbid0IGNvbWJpbmUgaXRlbSB3aXRoIGl0c2VsZilcclxuICAgICAgICBpZihzZWxlY3RlZEl0ZW0gIT0gbnVsbCAmJiBzZWxlY3RlZEl0ZW1CdG4gIT0gbnVsbCAmJiBpdGVtICE9PSBzZWxlY3RlZEl0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBvdXRJdGVtcyA9IHNlbGVjdGVkSXRlbS5jb21iaW5lKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZihvdXRJdGVtcyAhPSBudWxsKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZWZyZXNoSXRlbURpc3BsYXllZChzZWxlY3RlZEl0ZW1CdG4sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEl0ZW1EaXNwbGF5ZWQoaXRlbWJ0biwgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICBpbnZlbnQucmVtb3ZlSXRlbShzZWxlY3RlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50LnJlbW92ZUl0ZW0oaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBmb3IoY29uc3Qgb3V0SXRlbSBvZiBvdXRJdGVtcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnZlbnQuYWRkSXRlbShvdXRJdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coaW52ZW50LmdldEl0ZW1zKCkpO1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEFsbEl0ZW1zRGlzcGxheWVkKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIHNlbGVjdCBhbiBpdGVtXHJcbiAgICAgICAgZWxzZVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYoaXRlbSA9PT0gc2VsZWN0ZWRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LnJlbW92ZShcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBudWxsO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtID0gaXRlbTtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IGl0ZW1idG47XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4uY2xhc3NMaXN0LmFkZChcInNlbGVjdGVkaXRlbVwiKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZihldnQuYnV0dG9uID09PSAyKSB7ICAgLy8gcmlnaHQgY2xpY2tcclxuICAgICAgICBwbGF5ZXJTcHJpdGUub3BlblNwZWVjaEJ1YmJsZShpdGVtLmdldEV4YW1pbmVUZXh0KCkpO1xyXG4gICAgICAgIGlmKGl0ZW0uZ2V0RXhhbWluZUF1ZGlvKCkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBpdGVtLmdldEV4YW1pbmVBdWRpbygpLnBsYXkoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2F2ZWJ0blwiKS5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgc2F2ZUdhbWVMb2NhbGx5KCk7XHJcbn07XHJcblxyXG5kb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImV4aXRidG5cIikub25jbGljayA9ICgpID0+IHtcclxuICAgIHJlc2V0TG9jYWxHYW1lU2F2ZSgpO1xyXG59O1xyXG5cclxuZnVuY3Rpb24gbG9hZExvY2FsR2FtZVNhdmUoKVxyXG57XHJcbiAgICBpZih0eXBlb2YoU3RvcmFnZSkgIT09IFwidW5kZWZpbmVkXCIpIHtcclxuICAgICAgICBjb25zdCBzYXZlMSA9IEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLnNhdmUxKTtcclxuICAgICAgICBjb25zb2xlLmxvZyhzYXZlMSk7XHJcblxyXG4gICAgICAgIC8vIGxvYWQgdGhlIHBsYXllcidzIGl0ZW1zXHJcbiAgICAgICAgZm9yKGNvbnN0IGl0ZW1pZCBvZiBzYXZlMS5pbnZlbnQpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtaWQpO1xyXG4gICAgICAgICAgICBpbnZlbnQuYWRkSXRlbShpdGVtc1tpdGVtaWRdKTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IG5vIGxvY2FsIHN0b3JhZ2UgdG8gbG9hZFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuLy8gc2F2ZSB0aGUgZ2FtZSBsb2NhbGx5XHJcbmZ1bmN0aW9uIHNhdmVHYW1lTG9jYWxseSgpXHJcbntcclxuICAgIGlmKHR5cGVvZihTdG9yYWdlKSAhPT0gXCJ1bmRlZmluZWRcIikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwic2F2aW5nIGdhbWUgbG9jYWxseVwiKTtcclxuICAgICAgICBsZXQgc2F2ZTEgPSB7IGludmVudDogbnVsbCwgbGV2ZWxEYXRhOiBudWxsIH07XHJcblxyXG4gICAgICAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiBpdGVtIElEcyByZXByZXNlbnRpbmcgdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgICAgIGxldCBpdGVtSURzID0gbmV3IEFycmF5PHN0cmluZz4oOSk7XHJcbiAgICAgICAgZm9yKGNvbnN0IGludmVudEluZGV4IGluIGludmVudC5nZXRJdGVtcygpKSB7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBpdGVtSUQgaW4gaXRlbXMpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW1JRCwgaW52ZW50SW5kZXgpXHJcbiAgICAgICAgICAgICAgICBpZihpdGVtc1tpdGVtSURdID09PSBpbnZlbnQuZ2V0SXRlbXMoKVtpbnZlbnRJbmRleF0pIHtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtSURzW2ludmVudEluZGV4XSA9IGl0ZW1JRDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzYXZlIHRoZSBhcnJheSBvZiBpdGVtIElEcyB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgc2F2ZTEuaW52ZW50ID0gaXRlbUlEcztcclxuXHJcbiAgICAgICAgLy8gVE9ETyAtIHNhdmUgdGhlIHBvc2l0aW9uIG9mIHRoZSBzcHJpdGVzIGFuZCB0aGUgbGV2ZWwgbmFtZVxyXG4gICAgICAgIGxldCBsZXZlbERhdGEgPSB7IHBsYXllcl94OiBudWxsLCBwbGF5ZXJfeTogbnVsbCwgbnBjU3ByaXRlczogbnVsbCB9O1xyXG4gICAgICAgIC8vIHN0b3JlIHRoZSBwbGF5ZXIncyBwb3NpdGlvblxyXG4gICAgICAgIGxldmVsRGF0YS5wbGF5ZXJfeCA9IHBsYXllclNwcml0ZS5nZXRYKCk7XHJcbiAgICAgICAgbGV2ZWxEYXRhLnBsYXllcl95ID0gcGxheWVyU3ByaXRlLmdldFkoKTtcclxuICAgICAgICAvLyBzdG9yZSB0aGUgcG9zaXRpb25zIG9mIG90aGVyIG5hdiBzcHJpdGVzXHJcbiAgICAgICAgbGV2ZWxEYXRhLm5wY1Nwcml0ZXMgPSBbXTtcclxuICAgICAgICBmb3IoY29uc3Qgc3ByaXRlIG9mIG5wY1Nwcml0ZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsZXZlbERhdGEubnBjU3ByaXRlcy5wdXNoKHsgeDogc3ByaXRlLmdldFgoKSwgeTogc3ByaXRlLmdldFkoKSB9KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2F2ZSB0aGUgbGV2ZWwgZGF0YSB0byBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgc2F2ZTEubGV2ZWxEYXRhID0gbGV2ZWxEYXRhO1xyXG5cclxuICAgICAgICAvLyBOT1RFIC0gbXVzdCBkbyB0aGlzIGZvciBhbGwgbGV2ZWxzIGV4cGxvcmVkIGluIHRoaXMgcGxheXRocm91Z2hcclxuICAgICAgICAvLyBUT0RPIC0gbWFrZSBhIG5vdGUgb2YgYW55IGludGVyYWN0YWJsZSBzcHJpdGVzIHdoaWNoIGhhdmUgaGFkIHRoZWlyIGludGVyYWN0aW9ucyB1c2VkIHVwXHJcbiAgICAgICAgLy8gVE9ETyAtIG1ha2UgYSBub3RlIG9mIGFueSByZWNlaXZlIGl0ZW0gZGlhbG9ncyB3aGljaCBoYXZlIGJlZW4gdXNlZCB1cFxyXG5cclxuICAgICAgICBsb2NhbFN0b3JhZ2Uuc2F2ZTEgPSBKU09OLnN0cmluZ2lmeShzYXZlMSk7XHJcblxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogbm8gbG9jYWwgc3RvcmFnZSBzdXBwb3J0XCIpO1xyXG4gICAgICAgIGFsZXJ0KFwiZXJyb3I6IG5vIGxvY2FsIHN0b3JhZ2Ugc3VwcG9ydFwiKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gcmVzZXRMb2NhbEdhbWVTYXZlKClcclxue1xyXG4gICAgaWYodHlwZW9mKFN0b3JhZ2UpICE9PSBcInVuZGVmaW5lZFwiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJyZXNldHRpbmcgbG9jYWwgZ2FtZSBzYXZlXCIpO1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwic2F2ZTFcIik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IG5vIGxvY2FsIHN0b3JhZ2UgdG8gcmVzZXRcIik7XHJcbiAgICAgICAgYWxlcnQoXCJlcnJvcjogbm8gbG9jYWwgc3RvcmFnZSB0byByZXNldFwiKTtcclxuICAgIH1cclxufVxyXG4iLCIvL2RlY2xhcmUgUHJvbWlzZSBhbnk7XHJcblxyXG5leHBvcnQgY2xhc3MgSW1hZ2VMb2FkZXJcclxue1xyXG4gICAgcHVibGljIHN0YXRpYyBsb2FkSW1hZ2UocGF0aDogc3RyaW5nKTogUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PlxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZTxIVE1MSW1hZ2VFbGVtZW50PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICBpbWcuc3JjID0gcGF0aDtcclxuICAgICAgICAgICAgaW1nLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoaW1nKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpbWcub25lcnJvciA9IChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBKU09OTG9hZGVyXHJcbntcclxuICAgIHN0YXRpYyBsb2FkSlNPTkZpbGUocGF0aDogc3RyaW5nKTogUHJvbWlzZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICB2YXIgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZih4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiB4aHIuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBvYmogPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZVRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUob2JqKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih4aHIucmVhZHlTdGF0ZSA9PT0gWE1MSHR0cFJlcXVlc3QuRE9ORSAmJiB4aHIuc3RhdHVzICE9PSAyMDApIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIuc3RhdHVzKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyh4aHIuc3RhdHVzVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBhdGgpO1xyXG4gICAgICAgICAgICB4aHIub3BlbihcIkdFVFwiLCBwYXRoLCB0cnVlKTtcclxuICAgICAgICAgICAgeGhyLnNlbmQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcblxyXG5leHBvcnQgY2xhc3MgQW5pbWF0ZWRTcHJpdGUgZXh0ZW5kcyBTcHJpdGVcclxue1xyXG4gICAgcHJvdGVjdGVkIHNwcml0ZUFuaW1hdGlvbnM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4gPSBbXTtcclxuICAgIHByb3RlY3RlZCBjdXJyZW50QW5pbWF0aW9uID0gLTE7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsKTtcclxuICAgICAgICBpZihhbmltcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQW5pbWF0aW9ucyA9IGFuaW1zO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEFuaW1hdGlvbiA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW0gPSB0aGlzLnNwcml0ZUFuaW1hdGlvbnNbdGhpcy5jdXJyZW50QW5pbWF0aW9uXTtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoT3JpZ2luKGFuaW0uZ2V0Q3VycmVudEZyYW1lKCkudywgYW5pbS5nZXRDdXJyZW50RnJhbWUoKS5oKTtcclxuICAgICAgICAgICAgYW5pbS5kcmF3KGN1cnJlbnRUaW1lLCB0aGlzLm9yaWdpblgsIHRoaXMub3JpZ2luWSwgdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRDdXJyZW50QW5pbWF0aW9uID0gKG5ld0FuaW1hdGlvbkluZGV4OiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICBpZihuZXdBbmltYXRpb25JbmRleCA8IHRoaXMuc3ByaXRlQW5pbWF0aW9ucy5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50QW5pbWF0aW9uID0gbmV3QW5pbWF0aW9uSW5kZXg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRTcHJpdGVBbmltYXRpb24gPSAoYW5pbSk6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmKGFuaW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwcml0ZUFuaW1hdGlvbnMucHVzaChhbmltKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwcml0ZUFuaW1hdGlvbnMgPSAoYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4pOiB2b2lkID0+IHtcclxuICAgICAgICBpZihhbmltcyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQW5pbWF0aW9ucyA9IGFuaW1zO1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSAtMTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFBvcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtTdGF0aWNTcHJpdGV9IGZyb20gXCIuL1N0YXRpY1Nwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3Rpb259IGZyb20gXCIuLi9nYW1lL0ludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXN9IGZyb20gXCIuL1RleHR1cmVBdGxhc1wiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9DaXJjbGVcIlxyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9SZWN0YW5nbGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIEludGVyYWN0YWJsZVNwcml0ZSBleHRlbmRzIFN0YXRpY1Nwcml0ZVxyXG57XHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhdGxhczogVGV4dHVyZUF0bGFzLCBpbWFnZU5hbWU6IHN0cmluZyxcclxuICAgICAgICAgICAgICAgIHByb3RlY3RlZCBleGFtaW5lVGV4dDogc3RyaW5nLCBwcm90ZWN0ZWQgZXhhbWluZUF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBwcm90ZWN0ZWQgaW50ZXJhY3Rpb25ab25lOiBDaXJjbGUsIHByb3RlY3RlZCBjbGlja1pvbmU6IFJlY3RhbmdsZSwgcHJvdGVjdGVkIGludGVyYWN0aW9uczogQXJyYXk8SW50ZXJhY3Rpb24+KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCwgYXRsYXMsIGltYWdlTmFtZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgLy8gREVCVUcgLSBkcmF3IHRoZSBjaXJjbGUgYW5kIHJlY3RhbmdsZVxyXG4gICAgICAgIHRoaXMuY2xpY2tab25lLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmludGVyYWN0aW9uWm9uZS5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluSW50ZXJhY3Rpb25ab25lKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVyYWN0aW9uWm9uZS5jb250YWlucyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5DbGlja1pvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpY2tab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGludGVyYWN0IHdpdGggdGhlIHNwcml0ZVxyXG4gICAgLy8gaXRlbSBjYW4gYmUgbnVsbFxyXG4gICAgcHVibGljIGludGVyYWN0KGl0ZW06IEl0ZW0pOiB7dGV4dDogc3RyaW5nLCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgaXRlbXM6IEFycmF5PEl0ZW0+fVxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBpbnRlciBvZiB0aGlzLmludGVyYWN0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBpdGVtcyBtYXRjaCBhbmQgdGhlIGludGVyYWN0aW9uIGhhc24ndCBiZWVuIGRvbmUgYmVmb3JlLCB0aGVuIGludGVyYWN0IHdpdGggdGhlIG9iamVjdFxyXG4gICAgICAgICAgICBpZighaW50ZXIuZ2V0VXNlZCgpICYmIGludGVyLmdldEl0ZW0oKSA9PSBpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0gaW50ZXIuaW50ZXJhY3QoaXRlbSk7XHJcbiAgICAgICAgICAgICAgICBpZihvYmogIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgaW50ZXJhY3Rpb24gaWYgaXQgaGFzIGJlZW4gZnVsZmlsbGVkXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXIuc2V0VXNlZCgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG9iajtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lQXVkaW8oKTogSFRNTEF1ZGlvRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVBdWRpbztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge05hdlNwcml0ZX0gZnJvbSBcIi4vTmF2U3ByaXRlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9Qb2ludFwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7Q29udmVyc2F0aW9ufSBmcm9tIFwiLi4vY2hhdC9Db252ZXJzYXRpb25cIlxyXG5pbXBvcnQge0NpcmNsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9DaXJjbGVcIlxyXG5pbXBvcnQge1JlY3RhbmdsZX0gZnJvbSBcIi4uL2NvbGxpc2lvbi9SZWN0YW5nbGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIE5QQ1Nwcml0ZSBleHRlbmRzIE5hdlNwcml0ZVxyXG57XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlU2hvd25BdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVUZXh0OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHRXaWR0aDogbnVtYmVyOyAgLy8gd2lkdGggb2YgdGhlIHRleHQgaW4gcGl4ZWxzXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IEJBU0VfRk9OVF9TSVpFID0gNzU7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+LFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIGV4YW1pbmVUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBleGFtaW5lQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBpbnRlcmFjdGlvblpvbmU6IENpcmNsZSwgcHJvdGVjdGVkIGNsaWNrWm9uZTogUmVjdGFuZ2xlLCBwcm90ZWN0ZWQgY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb24sIG1vdmVTcGVlZDogbnVtYmVyID0gMC41KVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCwgYW5pbXMsIG1vdmVTcGVlZCk7XHJcbiAgICAgICAgdGhpcy5zZXRDdXJyZW50QW5pbWF0aW9uKDApO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zcGVlY2hCdWJibGVPcGVuKSB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgdGhlIHNwZWVjaCBidWJibGVcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMub3JpZ2luWSk7XHJcbiAgICAgICAgICAgIGN0eC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCIjNTU1NTU1XCI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFBRkY4MFwiOyAgIC8vIGdyZWVuOiAjMUFGRjgwLCBhbWJlcjogI0ZGQjY0MiwgYmx1ZTogIzJFQ0ZGRlxyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5zcGVlY2hCdWJibGVUZXh0LCAtdGhpcy50ZXh0V2lkdGgvMiwgMCk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzcGVlY2ggYnViYmxlIGxhc3RzIDEvMiBzZWNvbmQgZm9yIGVhY2ggd29yZFxyXG4gICAgICAgICAgICBpZihjdXJyZW50VGltZSAtIHRoaXMuc3BlZWNoQnViYmxlU2hvd25BdCA+PSB0aGlzLnNwZWVjaEJ1YmJsZVRleHQuc3BsaXQoXCIgXCIpLmxlbmd0aCAqIDUwMCArIDUwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIERFQlVHIC0gZHJhdyB0aGUgY2lyY2xlIGFuZCByZWN0YW5nbGVcclxuICAgICAgICB0aGlzLmNsaWNrWm9uZS5kcmF3KCk7XHJcbiAgICAgICAgdGhpcy5pbnRlcmFjdGlvblpvbmUuZHJhdygpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBvcGVuU3BlZWNoQnViYmxlKHRleHQ6IHN0cmluZykge1xyXG4gICAgICAgIGlmKHRleHQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVRleHQgPSB0ZXh0O1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZVNob3duQXQgPSBEYXRlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgY3R4LmZvbnQgPSBgJHt0aGlzLkJBU0VfRk9OVF9TSVpFfXB4IEJvb2ttYW5gO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRXaWR0aCA9IGN0eC5tZWFzdXJlVGV4dCh0ZXh0KS53aWR0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldENvbnZlcnNhdGlvbigpOiBDb252ZXJzYXRpb25cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJzYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGluSW50ZXJhY3Rpb25ab25lKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmludGVyYWN0aW9uWm9uZS5jb250YWlucyh4LCB5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5DbGlja1pvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY2xpY2tab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lVGV4dCgpOiBzdHJpbmdcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lVGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZUF1ZGlvKCk6IEhUTUxBdWRpb0VsZW1lbnRcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5leGFtaW5lQXVkaW87XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9Qb2ludFwiXHJcblxyXG5leHBvcnQgY2xhc3MgTmF2U3ByaXRlIGV4dGVuZHMgQW5pbWF0ZWRTcHJpdGVcclxue1xyXG4gICAgcHJpdmF0ZSB3YXlwb2ludHM6IEFycmF5PFBvaW50PjtcclxuICAgIHByaXZhdGUgbmV4dFdheXBvaW50OiBQb2ludDtcclxuICAgIHByaXZhdGUgbW92ZVNwZWVkOiBudW1iZXI7XHJcblxyXG4gICAgcHJpdmF0ZSBkZXB0aFNjYWxlWTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdGFydFg6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3RhcnRZOiBudW1iZXI7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+LCBtb3ZlU3BlZWQ6IG51bWJlciA9IDAuNSkge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCwgYW5pbXMpO1xyXG4gICAgICAgIHRoaXMubW92ZVNwZWVkID0gbW92ZVNwZWVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgLy8gbW92ZSB0b3dhcmRzIHRoZSBuZXh0IHdheXBvaW50XHJcbiAgICAgICAgaWYodGhpcy5uZXh0V2F5cG9pbnQgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuZ2xlID0gTWF0aC5hdGFuKE1hdGguYWJzKHRoaXMubmV4dFdheXBvaW50LnkgLSB0aGlzLnkpIC8gTWF0aC5hYnModGhpcy5uZXh0V2F5cG9pbnQueCAtIHRoaXMueCkpO1xyXG4gICAgICAgICAgICBjb25zdCBtb3ZlU3BlZWRYID0gdGhpcy5tb3ZlU3BlZWQgKiBkZWx0YVRpbWUgKiBNYXRoLmNvcyhhbmdsZSkgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgICAgICBjb25zdCBtb3ZlU3BlZWRZID0gdGhpcy5tb3ZlU3BlZWQgKiBkZWx0YVRpbWUgKiBNYXRoLnNpbihhbmdsZSkgKiB0aGlzLnNjYWxlO1xyXG5cclxuICAgICAgICAgICAgLy8gaWYgdGhlIHNwcml0ZSBoYXMgcmVhY2hlZCB0aGUgd2F5cG9pbnQgKG9yIHRoZXJlYWJvdXRzKSB0aGVuIGdldCB0aGUgbmV4dCB3YXlwb2ludFxyXG4gICAgICAgICAgICBpZih0aGlzLnggPj0gdGhpcy5uZXh0V2F5cG9pbnQueCAtIDUgJiYgdGhpcy54IDw9IHRoaXMubmV4dFdheXBvaW50LnggKyA1ICYmXHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPj0gdGhpcy5uZXh0V2F5cG9pbnQueSAtIDUgJiYgdGhpcy55IDw9IHRoaXMubmV4dFdheXBvaW50LnkgKyA1KVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiYXJyaXZlZFwiLCB0aGlzLngsIHRoaXMueSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnggPSB0aGlzLm5leHRXYXlwb2ludC54O1xyXG4gICAgICAgICAgICAgICAgdGhpcy55ID0gdGhpcy5uZXh0V2F5cG9pbnQueTtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMud2F5cG9pbnRzICE9IG51bGwgJiYgdGhpcy53YXlwb2ludHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dFdheXBvaW50ID0gdGhpcy53YXlwb2ludHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dFdheXBvaW50ID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8gbW92ZSB0b3dhcmRzIHRoZSBuZXh0IHdheXBvaW50XHJcbiAgICAgICAgICAgIGlmKHRoaXMubmV4dFdheXBvaW50ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMueCA8IHRoaXMubmV4dFdheXBvaW50LnggLSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy54ICs9IG1vdmVTcGVlZFg7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy54ID4gdGhpcy5uZXh0V2F5cG9pbnQueCArIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggLT0gbW92ZVNwZWVkWDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLnkgPCB0aGlzLm5leHRXYXlwb2ludC55IC0gNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueSArPSBtb3ZlU3BlZWRZO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHRoaXMueSA+IHRoaXMubmV4dFdheXBvaW50LnkgKyA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55IC09IG1vdmVTcGVlZFk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gc2NhbGUgdGhlIHBsYXllciBiYXNlZCBvbiB0aGUgZGVwdGggb2YgdGhlIG1vdXNlIHBvc2l0aW9uXHJcbiAgICAgICAgdGhpcy5zY2FsZSA9IHRoaXMuYmFzZVNjYWxlICogdGhpcy5kZXB0aFNjYWxlWSAqKiAodGhpcy5zdGFydFkgLSB0aGlzLnkpO1xyXG5cclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRXYXlwb2ludHMod2F5cG9pbnRzOiBBcnJheTxQb2ludD4pIHtcclxuICAgICAgICB0aGlzLndheXBvaW50cyA9IHdheXBvaW50cztcclxuICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IG51bGw7XHJcbiAgICAgICAgaWYodGhpcy53YXlwb2ludHMgIT0gbnVsbCAmJiB0aGlzLndheXBvaW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMud2F5cG9pbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSB0aGlzLndheXBvaW50cy5wb3AoKTtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJuZXh0OiBcIiArIHRoaXMubmV4dFdheXBvaW50LnggKyBcIiwgXCIgKyB0aGlzLm5leHRXYXlwb2ludC55KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0RGVwdGhTY2FsZShkZXB0aFNjYWxlWTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5kZXB0aFNjYWxlWSA9IGRlcHRoU2NhbGVZO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTdGFydFBvcyh4OiBudW1iZXIsIHk6IG51bWJlcikge1xyXG4gICAgICAgIHRoaXMuc3RhcnRYID0geDtcclxuICAgICAgICB0aGlzLnN0YXJ0WSA9IHk7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtOYXZTcHJpdGV9IGZyb20gXCIuL05hdlNwcml0ZVwiXHJcbmltcG9ydCB7UG9pbnR9IGZyb20gXCIuLi9jb2xsaXNpb24vUG9pbnRcIlxyXG5pbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5cclxuZXhwb3J0IGNsYXNzIFBsYXllclNwcml0ZSBleHRlbmRzIE5hdlNwcml0ZVxyXG57XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZUltYWdlOiBIVE1MSW1hZ2VFbGVtZW50O1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVPcGVuOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZVNob3duQXQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlVGV4dDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSB0ZXh0V2lkdGg6IG51bWJlcjsgIC8vIHdpZHRoIG9mIHRoZSB0ZXh0IGluIHBpeGVsc1xyXG4gICAgcHJpdmF0ZSByZWFkb25seSBCQVNFX0ZPTlRfU0laRSA9IDc1O1xyXG5cclxuICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPiwgbW92ZVNwZWVkOiBudW1iZXIgPSAwLjUpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhbmltcywgbW92ZVNwZWVkKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQge1xyXG4gICAgICAgIHN1cGVyLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcblxyXG4gICAgICAgIGlmKHRoaXMuc3BlZWNoQnViYmxlT3Blbikge1xyXG4gICAgICAgICAgICAvLyBkcmF3IHRoZSBzcGVlY2ggYnViYmxlXHJcbiAgICAgICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy54LCB0aGlzLm9yaWdpblkpO1xyXG4gICAgICAgICAgICAvL2N0eC5kcmF3SW1hZ2UodGhpcy5zcGVlY2hCdWJibGVJbWFnZSwgLXRoaXMuc3BlZWNoQnViYmxlSW1hZ2Uud2lkdGgvMiAqIHRoaXMuc2NhbGUsIC10aGlzLnNwZWVjaEJ1YmJsZUltYWdlLmhlaWdodC8yICogdGhpcy5zY2FsZSwgdGhpcy5zcGVlY2hCdWJibGVJbWFnZS53aWR0aCAqIHRoaXMuc2NhbGUsIHRoaXMuc3BlZWNoQnViYmxlSW1hZ2UuaGVpZ2h0ICogdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgICAgIGN0eC5zY2FsZSh0aGlzLnNjYWxlLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0NvbG9yID0gXCIjNTU1NTU1XCI7XHJcbiAgICAgICAgICAgIGN0eC5zaGFkb3dCbHVyID0gNTtcclxuICAgICAgICAgICAgY3R4LmZpbGxTdHlsZSA9IFwiIzFBRkY4MFwiOyAgIC8vIGdyZWVuOiAjMUFGRjgwLCBhbWJlcjogI0ZGQjY0MiwgYmx1ZTogIzJFQ0ZGRlxyXG4gICAgICAgICAgICBjdHguZmlsbFRleHQodGhpcy5zcGVlY2hCdWJibGVUZXh0LCAtdGhpcy50ZXh0V2lkdGgvMiwgMCk7XHJcbiAgICAgICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBzcGVlY2ggYnViYmxlIGxhc3RzIDEvMiBzZWNvbmQgZm9yIGVhY2ggd29yZFxyXG4gICAgICAgICAgICBpZihjdXJyZW50VGltZSAtIHRoaXMuc3BlZWNoQnViYmxlU2hvd25BdCA+PSB0aGlzLnNwZWVjaEJ1YmJsZVRleHQuc3BsaXQoXCIgXCIpLmxlbmd0aCAqIDUwMCArIDUwMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVPcGVuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5TcGVlY2hCdWJibGUodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYodGV4dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlU2hvd25BdCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke3RoaXMuQkFTRV9GT05UX1NJWkV9cHggQm9va21hbmA7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG5cclxuICAgICAgICAgICAgLy8gY3JlYXRlIGEgZGl2IGNvbnRhaW5pbmcgdGhlIHRleHQgc28gdGhlIHBpeGVsIHdpZHRoIG9mIHRleHQgY2FuIGJlIGNhbGN1bGF0ZWRcclxuICAgICAgICAgICAgLy8gaHR0cHM6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE4MjQxL2NhbGN1bGF0ZS10ZXh0LXdpZHRoLXdpdGgtamF2YXNjcmlwdFxyXG4gICAgICAgICAgICAvKmxldCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xyXG4gICAgICAgICAgICBkaXYuc3R5bGUuY3NzVGV4dCA9IGBwb3NpdGlvbjogYWJzb2x1dGU7IHZpc2liaWxpdHk6IGhpZGRlbjsgaGVpZ2h0OiBhdXRvOyB3aWR0aDogYXV0bzsgd2hpdGUtc3BhY2U6IG5vd3JhcDsgZm9udC1zaXplOiAke3RoaXMuQkFTRV9GT05UX1NJWkV9YDtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZGl2LCBudWxsKTtcclxuICAgICAgICAgICAgdGhpcy50ZXh0V2lkdGggPSBkaXYuY2xpZW50V2lkdGggKyAxOyovXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGV4dCB3aWR0aFwiLCB0aGlzLnRleHRXaWR0aCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRTcGVlY2hCdWJibGVJbWFnZShpbWcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVJbWFnZSA9IGltZztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgYWJzdHJhY3QgY2xhc3MgU3ByaXRlXHJcbntcclxuICAgIHByb3RlY3RlZCBiYXNlU2NhbGU6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBvcmlnaW5YOiBudW1iZXI7XHJcbiAgICBwcm90ZWN0ZWQgb3JpZ2luWTogbnVtYmVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCB4OiBudW1iZXIsIHByb3RlY3RlZCB5OiBudW1iZXIsIHByb3RlY3RlZCBzY2FsZTogbnVtYmVyLCBwcm90ZWN0ZWQgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBwcm90ZWN0ZWQgb3JpZ2luVmVydGljYWw6IHN0cmluZywgcHJvdGVjdGVkIGRlcHRoOiBudW1iZXIgPSAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuYmFzZVNjYWxlID0gdGhpcy5zY2FsZTtcclxuICAgIH1cclxuXHJcbiAgICBwcm90ZWN0ZWQgcmVmcmVzaE9yaWdpbih3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlcikge1xyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgcG9zaXRpb24gYXQgd2hpY2ggdG8gZHJhdyB0aGUgc3ByaXRlXHJcbiAgICAgICAgaWYodGhpcy5vcmlnaW5Ib3Jpem9udGFsID09IFwicmlnaHRcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblggPSB0aGlzLnggLSB3aWR0aCAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMub3JpZ2luSG9yaXpvbnRhbCA9PSBcImxlZnRcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblggPSB0aGlzLng7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5YID0gdGhpcy54IC0gd2lkdGgvMiAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHBvc2l0aW9uIGF0IHdoaWNoIHRvIGRyYXcgdGhlIHNwcml0ZVxyXG4gICAgICAgIGlmKHRoaXMub3JpZ2luVmVydGljYWwgPT0gXCJ0b3BcIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblkgPSB0aGlzLnkgLSBoZWlnaHQqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfSBlbHNlIGlmKHRoaXMub3JpZ2luVmVydGljYWwgPT0gXCJib3R0b21cIikge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblkgPSB0aGlzLnk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW5ZID0gdGhpcy55IC0gaGVpZ2h0LzIgKiB0aGlzLnNjYWxlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGdldFgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0WSgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy55O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tICcuL1RleHR1cmVBdGxhcydcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXNGcmFtZX0gZnJvbSBcIi4vVGV4dHVyZUF0bGFzRnJhbWVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFNwcml0ZUFuaW1hdGlvblxyXG57XHJcbiAgICAvLyBodHRwOi8vd3d3LnR5cGVzY3JpcHRnYW1lcy5jb20vQW5pbWF0ZWRTcHJpdGVzLmh0bWxcclxuICAgIHByb3RlY3RlZCBjdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgcHJpdmF0ZSBsYXN0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbnVtRnJhbWVzOiBudW1iZXIsIHByb3RlY3RlZCBhdGxhczogVGV4dHVyZUF0bGFzLCBwcm90ZWN0ZWQgc2VxdWVuY2VOYW1lOiBzdHJpbmcpIHt9XHJcblxyXG4gICAgcHVibGljIGRyYXcgPSAoY3VycmVudFRpbWU6IG51bWJlciwgeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIpOiB2b2lkID0+IHtcclxuICAgICAgICBsZXQgZnJhbWUgPSB0aGlzLmdldEN1cnJlbnRGcmFtZSgpO1xyXG4gICAgICAgIGlmKGZyYW1lLmZyYW1lRHVyYXRpb24gPD0gY3VycmVudFRpbWUgLSB0aGlzLmxhc3RUaW1lKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUrKztcclxuICAgICAgICAgICAgaWYodGhpcy5jdXJyZW50RnJhbWUgPj0gdGhpcy5udW1GcmFtZXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEZyYW1lID0gMDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmxhc3RUaW1lID0gY3VycmVudFRpbWU7XHJcbiAgICAgICAgICAgIGZyYW1lID0gdGhpcy5nZXRDdXJyZW50RnJhbWUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIHNwcml0ZXMgYXJlIGRyYXduIGZyb20gdGhlaXIgY2VudHJlLXgsIGJvdHRvbS15LCBpLmUuIGZlZXQgcG9zaXRpb25cclxuICAgICAgICAvL2xldCB0b3BMZWZ0WCA9IHggLSBmcmFtZS53LzIgKiBzY2FsZTtcclxuICAgICAgICAvL2xldCB0b3BMZWZ0WSA9IHkgLSBmcmFtZS5oICogc2NhbGU7XHJcblxyXG4gICAgICAgIGN0eC5zYXZlKCk7XHJcbiAgICAgICAgY3R4LnRyYW5zbGF0ZSh4LCB5KTtcclxuICAgICAgICBjdHgucmVjdChmcmFtZS54LCBmcmFtZS55LCBmcmFtZS53LCBmcmFtZS5oKTtcclxuICAgICAgICBjdHguZHJhd0ltYWdlKHRoaXMuYXRsYXMuaW1hZ2UsXHJcbiAgICAgICAgICAgIGZyYW1lLngsIGZyYW1lLnksXHJcbiAgICAgICAgICAgIGZyYW1lLncsIGZyYW1lLmgsXHJcbiAgICAgICAgICAgIGZyYW1lLm9mZnNldHgsIGZyYW1lLm9mZnNldHksXHJcbiAgICAgICAgICAgIGZyYW1lLncgKiBzY2FsZSwgZnJhbWUuaCAqIHNjYWxlKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRDdXJyZW50RnJhbWUgPSAoKTogVGV4dHVyZUF0bGFzRnJhbWUgPT4ge1xyXG4gICAgICAgIGlmKHRoaXMuY3VycmVudEZyYW1lID4gOSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmF0bGFzLmZyYW1lc1t0aGlzLnNlcXVlbmNlTmFtZSArIFwiX1wiICsgdGhpcy5jdXJyZW50RnJhbWUudG9TdHJpbmcoKV07XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiB0aGlzLmF0bGFzLmZyYW1lc1t0aGlzLnNlcXVlbmNlTmFtZSArIFwiX1wiICsgXCIwXCIgKyB0aGlzLmN1cnJlbnRGcmFtZS50b1N0cmluZygpXTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4vU3ByaXRlXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXN9IGZyb20gXCIuL1RleHR1cmVBdGxhc1wiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzRnJhbWV9IGZyb20gXCIuL1RleHR1cmVBdGxhc0ZyYW1lXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBTdGF0aWNTcHJpdGUgZXh0ZW5kcyBTcHJpdGVcclxue1xyXG4gICAgcHJvdGVjdGVkIGltYWdlOiBUZXh0dXJlQXRsYXNGcmFtZTtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlciwgb3JpZ2luSG9yaXpvbnRhbDogc3RyaW5nLCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBwcm90ZWN0ZWQgYXRsYXM6IFRleHR1cmVBdGxhcywgcHJvdGVjdGVkIGltYWdlTmFtZTogc3RyaW5nKVxyXG4gICAge1xyXG4gICAgICAgIHN1cGVyKHgsIHksIHNjYWxlLCBvcmlnaW5Ib3Jpem9udGFsLCBvcmlnaW5WZXJ0aWNhbCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlZnJlc2hJbWFnZSgpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5pbWFnZSA9IHRoaXMuYXRsYXMuZnJhbWVzW3RoaXMuaW1hZ2VOYW1lXTsgLy8gZ2V0IHRoZSBpbWFnZSBmcm9tIHRoZSBhdGxhc1xyXG4gICAgICAgIHRoaXMucmVmcmVzaE9yaWdpbih0aGlzLmltYWdlLncsIHRoaXMuaW1hZ2UuaCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMub3JpZ2luWCwgdGhpcy5vcmlnaW5ZKTtcclxuICAgICAgICBjdHgucmVjdCh0aGlzLmltYWdlLngsIHRoaXMuaW1hZ2UueSwgdGhpcy5pbWFnZS53LCB0aGlzLmltYWdlLmgpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5hdGxhcy5pbWFnZSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS54LCB0aGlzLmltYWdlLnksXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2UudywgdGhpcy5pbWFnZS5oLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLm9mZnNldHgsIHRoaXMuaW1hZ2Uub2Zmc2V0eSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS53ICogdGhpcy5zY2FsZSwgdGhpcy5pbWFnZS5oICogdGhpcy5zY2FsZSk7XHJcbiAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0pTT05Mb2FkZXJ9IGZyb20gJy4uL3Jlc291cmNlcy9KU09OTG9hZGVyJ1xyXG5pbXBvcnQge0ltYWdlTG9hZGVyfSBmcm9tICcuLi9yZXNvdXJjZXMvSW1hZ2VMb2FkZXInXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzRnJhbWV9IGZyb20gJy4vVGV4dHVyZUF0bGFzRnJhbWUnXHJcblxyXG5leHBvcnQgY2xhc3MgVGV4dHVyZUF0bGFzXHJcbntcclxuICAgIC8vIGh0dHA6Ly93d3cudHlwZXNjcmlwdGdhbWVzLmNvbS9UZXh0dXJlQXRsYXMuaHRtbFxyXG4gICAgcHVibGljIGZyYW1lczogeyBbaW5kZXg6IHN0cmluZ106IFRleHR1cmVBdGxhc0ZyYW1lIH0gPSB7fTtcclxuICAgIHB1YmxpYyB0YUxvYWRDb21wbGV0ZTogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHVibGljIGltYWdlOiBIVE1MSW1hZ2VFbGVtZW50ID0gbmV3IEltYWdlKCk7XHJcbiAgICBwdWJsaWMgYXRsYXNOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBpbWFnZUZpbGVOYW1lOiBzdHJpbmcgPSBcIlwiO1xyXG4gICAgcHJpdmF0ZSBqc29uRmlsZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoYXRsYXNOYW1lOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5hdGxhc05hbWUgPSBhdGxhc05hbWU7XHJcbiAgICAgICAgdGhpcy5pbWFnZUZpbGVOYW1lID0gYXRsYXNOYW1lO1xyXG4gICAgICAgIHRoaXMuanNvbkZpbGVOYW1lID0gYXRsYXNOYW1lLnJlcGxhY2UoXCIucG5nXCIsIFwiXCIpICsgXCIuanNvblwiO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBsb2FkKCk6IFByb21pc2U8YW55PlxyXG4gICAge1xyXG4gICAgICAgIGNvbnN0IGltZ1Byb21pc2UgPSBJbWFnZUxvYWRlci5sb2FkSW1hZ2UodGhpcy5pbWFnZUZpbGVOYW1lKS50aGVuKChpbWcpID0+IHtcclxuICAgICAgICAgICAgdGhpcy5pbWFnZSA9IGltZztcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgJyArIHRoaXMuaW1hZ2VGaWxlTmFtZSk7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgY29uc3QganNvblByb21pc2UgPSBKU09OTG9hZGVyLmxvYWRKU09ORmlsZSh0aGlzLmpzb25GaWxlTmFtZSkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUZyYW1lcyhkYXRhKTtcclxuICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdlcnJvcjogdW5hYmxlIHRvIGxvYWQgJyArIHRoaXMuanNvbkZpbGVOYW1lKTtcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgcmV0dXJuIFByb21pc2UuYWxsKFtpbWdQcm9taXNlLCBqc29uUHJvbWlzZV0pLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmF0bGFzTmFtZSArICcgbG9hZGVkIHN1Y2Nlc3NmdWxseScpO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiAnICsgdGhpcy5hdGxhc05hbWUgKyAnIGZhaWxlZCB0byBsb2FkJyk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVGcmFtZXMoZGF0YTogYW55KVxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBuYW1lIGluIGRhdGEuZnJhbWVzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3Qgc3ByaXRlRGF0YSA9IGRhdGEuZnJhbWVzW25hbWVdO1xyXG4gICAgICAgICAgICBsZXQgZnJhbWUgPSBuZXcgVGV4dHVyZUF0bGFzRnJhbWUoc3ByaXRlRGF0YS5mcmFtZS54LCBzcHJpdGVEYXRhLmZyYW1lLnksIHNwcml0ZURhdGEuZnJhbWUudywgc3ByaXRlRGF0YS5mcmFtZS5oLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGVEYXRhLnNwcml0ZVNvdXJjZVNpemUueCwgc3ByaXRlRGF0YS5zcHJpdGVTb3VyY2VTaXplLnksIHNwcml0ZURhdGEuZnJhbWVEdXJhdGlvbik7XHJcbiAgICAgICAgICAgIHRoaXMuZnJhbWVzW25hbWVdID0gZnJhbWU7XHJcbiAgICAgICAgfVxyXG4vLyAgICAgICAgY29uc29sZS5sb2coSlNPTi5zdHJpbmdpZnkodGhpcy5mcmFtZXMpKTtcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgVGV4dHVyZUF0bGFzRnJhbWVcclxue1xyXG4gICAgLy8gaHR0cDovL3d3dy50eXBlc2NyaXB0Z2FtZXMuY29tL0FuaW1hdGVkU3ByaXRlcy5odG1sXHJcbiAgICB4OiBudW1iZXI7XHJcbiAgICB5OiBudW1iZXI7XHJcbiAgICB3OiBudW1iZXI7XHJcbiAgICBoOiBudW1iZXI7XHJcblxyXG4gICAgb2Zmc2V0eDogbnVtYmVyOyAgICAvLyBpbWFnZSB3aWxsIGJlIG9mZnNldCBieSB0aGVzZSB2YWx1ZXMgc28gZnJhbWVzIGxpbmUgdXAgaW4gYW5pbWF0aW9uXHJcbiAgICBvZmZzZXR5OiBudW1iZXI7XHJcblxyXG4gICAgZnJhbWVEdXJhdGlvbjogbnVtYmVyOyAgLy8gdGhlIG51bWJlciBvZiBtaWxsaXNlY29uZHMgdGhpcyBmcmFtZSBsYXN0c1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciA9IDAsIHk6IG51bWJlciA9IDAsIHc6IG51bWJlciA9IDEsIGg6IG51bWJlciA9IDEsIG9mZnNldHg6IG51bWJlciA9IDAsIG9mZnNldHk6IG51bWJlciA9IDAsIGZyYW1lRHVyYXRpb246IG51bWJlciA9IDEwMClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICAgICAgdGhpcy53ID0gdztcclxuICAgICAgICB0aGlzLmggPSBoO1xyXG4gICAgICAgIHRoaXMub2Zmc2V0eCA9IG9mZnNldHg7XHJcbiAgICAgICAgdGhpcy5vZmZzZXR5ID0gb2Zmc2V0eTtcclxuICAgICAgICB0aGlzLmZyYW1lRHVyYXRpb24gPSBmcmFtZUR1cmF0aW9uO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXQoeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=