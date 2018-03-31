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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvZm4vcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hLWZ1bmN0aW9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2FkZC10by11bnNjb3BhYmxlcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1pbnN0YW5jZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19hbi1vYmplY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fYXJyYXktaW5jbHVkZXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY2xhc3NvZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jb2YuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29yZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19jdHguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZGVmaW5lZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kZXNjcmlwdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19kb20tY3JlYXRlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2VudW0tYnVnLWtleXMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fZXhwb3J0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2ZhaWxzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2Zvci1vZi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faGFzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2hpZGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faHRtbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pZTgtZG9tLWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pbnZva2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pcy1hcnJheS1pdGVyLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2lzLW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19pdGVyLWNhbGwuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZWZpbmUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1kZXRlY3QuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9faXRlci1zdGVwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX2l0ZXJhdG9ycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19saWJyYXJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX21pY3JvdGFzay5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1jcmVhdGUuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWRwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX29iamVjdC1kcHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fb2JqZWN0LWdwby5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3Qta2V5cy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wZXJmb3JtLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3Byb21pc2UtcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19wcm9wZXJ0eS1kZXNjLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3JlZGVmaW5lLWFsbC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19yZWRlZmluZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtc3BlY2llcy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zZXQtdG8tc3RyaW5nLXRhZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zaGFyZWQta2V5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3NoYXJlZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19zcGVjaWVzLWNvbnN0cnVjdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3N0cmluZy1hdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190YXNrLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWFic29sdXRlLWluZGV4LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLWludGVnZXIuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8taW9iamVjdC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL190by1sZW5ndGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdG8tb2JqZWN0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvX3RvLXByaW1pdGl2ZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL191aWQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fd2tzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvY29yZS5nZXQtaXRlcmF0b3ItbWV0aG9kLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LmFycmF5Lml0ZXJhdG9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm9iamVjdC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zdHJpbmcuaXRlcmF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcucHJvbWlzZS5maW5hbGx5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM3LnByb21pc2UudHJ5LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvd2ViLmRvbS5pdGVyYWJsZS5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9Db250aW51ZURpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9Db252ZXJzYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NoYXQvRGlhbG9nLnRzIiwid2VicGFjazovLy8uL3NyYy9jaGF0L09wdGlvbkRpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhdC9SZWNlaXZlSXRlbURpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL0NpcmNsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL05hdk1lc2gudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvbGxpc2lvbi9Qb2ludC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL1JlY3RhbmdsZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29sbGlzaW9uL1RyaWFuZ2xlLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0ludGVyYWN0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL0xldmVsLnRzIiwid2VicGFjazovLy8uL3NyYy9nYW1lL1JlY2VpdmVJdGVtSW50ZXJhY3Rpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2dsb2IudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2lucHV0L0lucHV0TWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvaXRlbXMvSW52ZW50b3J5LnRzIiwid2VicGFjazovLy8uL3NyYy9pdGVtcy9JdGVtLnRzIiwid2VicGFjazovLy8uL3NyYy9tYWluLnRzIiwid2VicGFjazovLy8uL3NyYy9yZXNvdXJjZXMvSW1hZ2VMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Jlc291cmNlcy9KU09OTG9hZGVyLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL0FuaW1hdGVkU3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL0ludGVyYWN0YWJsZVNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9OUENTcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvTmF2U3ByaXRlLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1BsYXllclNwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9TcHJpdGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvU3ByaXRlQW5pbWF0aW9uLnRzIiwid2VicGFjazovLy8uL3NyYy9zcHJpdGVzL1N0YXRpY1Nwcml0ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvc3ByaXRlcy9UZXh0dXJlQXRsYXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Nwcml0ZXMvVGV4dHVyZUF0bGFzRnJhbWUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7O0FBRUE7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QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7O0FDOUJEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQyxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7OztBQ1pBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9FQUFvRSxpQ0FBaUM7QUFDckc7Ozs7Ozs7Ozs7OztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQSx1Q0FBdUM7QUFDdkM7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDaEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ25GQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkRBQTJEO0FBQzNEOzs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNKQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDLGNBQWM7QUFDZCxpQkFBaUI7QUFDakI7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7Ozs7Ozs7Ozs7Ozs7QUNUQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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LElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ3BCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDcEIsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNwQixJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBRXBCLElBQUksSUFBSSxFQUFFLElBQUksRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDO1lBQzNCLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ25CLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBRW5CLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNULENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxHQUFHLElBQUksR0FBRyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQztZQUNsRixDQUFDLEdBQUcsQ0FBRSxJQUFJLEdBQUcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEdBQUcsSUFBSSxHQUFHLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksR0FBRyxJQUFJLEdBQUcsSUFBSSxHQUFHLElBQUksQ0FBQyxDQUFDO1lBRWxGLEVBQUUsRUFBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMs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QyxHQUFHLENBQUMsQ0FBQyxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUM7WUFDaEssTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxLQUFJLENBQUMsSUFBSSxHQUFHLEtBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxhQUFLLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2RyxDQUFDO1FBOUJHLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxhQUFLLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2hDLElBQUksQ0FBQyxJQUFJLEdBQUcsQ0FBQyxHQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDeEwsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxH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QUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNYLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO1FBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO0lBQ3ZDLENBQUM7SUFFTSwrQkFBRyxHQUFWLFVBQVcsQ0FBUyxFQUFFLENBQVM7UUFFM0IsSUFBSSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDWCxJQUFJLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUNmLENBQUM7SUFDTCx3QkFBQztBQUFELENBQUM7QUE3QlksOENBQWlCIiwiZmlsZSI6ImJ1aWxkL2NsYWQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHtcbiBcdFx0XHRcdGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gXHRcdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuIFx0XHRcdFx0Z2V0OiBnZXR0ZXJcbiBcdFx0XHR9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwicmVxdWlyZSgnLi4vbW9kdWxlcy9lczYub2JqZWN0LnRvLXN0cmluZycpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczYuc3RyaW5nLml0ZXJhdG9yJyk7XG5yZXF1aXJlKCcuLi9tb2R1bGVzL3dlYi5kb20uaXRlcmFibGUnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM2LnByb21pc2UnKTtcbnJlcXVpcmUoJy4uL21vZHVsZXMvZXM3LnByb21pc2UuZmluYWxseScpO1xucmVxdWlyZSgnLi4vbW9kdWxlcy9lczcucHJvbWlzZS50cnknKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi4vbW9kdWxlcy9fY29yZScpLlByb21pc2U7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICBpZiAodHlwZW9mIGl0ICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdCArICcgaXMgbm90IGEgZnVuY3Rpb24hJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyAyMi4xLjMuMzEgQXJyYXkucHJvdG90eXBlW0BAdW5zY29wYWJsZXNdXG52YXIgVU5TQ09QQUJMRVMgPSByZXF1aXJlKCcuL193a3MnKSgndW5zY29wYWJsZXMnKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuaWYgKEFycmF5UHJvdG9bVU5TQ09QQUJMRVNdID09IHVuZGVmaW5lZCkgcmVxdWlyZSgnLi9faGlkZScpKEFycmF5UHJvdG8sIFVOU0NPUEFCTEVTLCB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgQXJyYXlQcm90b1tVTlNDT1BBQkxFU11ba2V5XSA9IHRydWU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIENvbnN0cnVjdG9yLCBuYW1lLCBmb3JiaWRkZW5GaWVsZCkge1xuICBpZiAoIShpdCBpbnN0YW5jZW9mIENvbnN0cnVjdG9yKSB8fCAoZm9yYmlkZGVuRmllbGQgIT09IHVuZGVmaW5lZCAmJiBmb3JiaWRkZW5GaWVsZCBpbiBpdCkpIHtcbiAgICB0aHJvdyBUeXBlRXJyb3IobmFtZSArICc6IGluY29ycmVjdCBpbnZvY2F0aW9uIScpO1xuICB9IHJldHVybiBpdDtcbn07XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSB0aHJvdyBUeXBlRXJyb3IoaXQgKyAnIGlzIG5vdCBhbiBvYmplY3QhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIvLyBmYWxzZSAtPiBBcnJheSNpbmRleE9mXG4vLyB0cnVlICAtPiBBcnJheSNpbmNsdWRlc1xudmFyIHRvSU9iamVjdCA9IHJlcXVpcmUoJy4vX3RvLWlvYmplY3QnKTtcbnZhciB0b0xlbmd0aCA9IHJlcXVpcmUoJy4vX3RvLWxlbmd0aCcpO1xudmFyIHRvQWJzb2x1dGVJbmRleCA9IHJlcXVpcmUoJy4vX3RvLWFic29sdXRlLWluZGV4Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChJU19JTkNMVURFUykge1xuICByZXR1cm4gZnVuY3Rpb24gKCR0aGlzLCBlbCwgZnJvbUluZGV4KSB7XG4gICAgdmFyIE8gPSB0b0lPYmplY3QoJHRoaXMpO1xuICAgIHZhciBsZW5ndGggPSB0b0xlbmd0aChPLmxlbmd0aCk7XG4gICAgdmFyIGluZGV4ID0gdG9BYnNvbHV0ZUluZGV4KGZyb21JbmRleCwgbGVuZ3RoKTtcbiAgICB2YXIgdmFsdWU7XG4gICAgLy8gQXJyYXkjaW5jbHVkZXMgdXNlcyBTYW1lVmFsdWVaZXJvIGVxdWFsaXR5IGFsZ29yaXRobVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1zZWxmLWNvbXBhcmVcbiAgICBpZiAoSVNfSU5DTFVERVMgJiYgZWwgIT0gZWwpIHdoaWxlIChsZW5ndGggPiBpbmRleCkge1xuICAgICAgdmFsdWUgPSBPW2luZGV4KytdO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgICAgaWYgKHZhbHVlICE9IHZhbHVlKSByZXR1cm4gdHJ1ZTtcbiAgICAvLyBBcnJheSNpbmRleE9mIGlnbm9yZXMgaG9sZXMsIEFycmF5I2luY2x1ZGVzIC0gbm90XG4gICAgfSBlbHNlIGZvciAoO2xlbmd0aCA+IGluZGV4OyBpbmRleCsrKSBpZiAoSVNfSU5DTFVERVMgfHwgaW5kZXggaW4gTykge1xuICAgICAgaWYgKE9baW5kZXhdID09PSBlbCkgcmV0dXJuIElTX0lOQ0xVREVTIHx8IGluZGV4IHx8IDA7XG4gICAgfSByZXR1cm4gIUlTX0lOQ0xVREVTICYmIC0xO1xuICB9O1xufTtcbiIsIi8vIGdldHRpbmcgdGFnIGZyb20gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG52YXIgVEFHID0gcmVxdWlyZSgnLi9fd2tzJykoJ3RvU3RyaW5nVGFnJyk7XG4vLyBFUzMgd3JvbmcgaGVyZVxudmFyIEFSRyA9IGNvZihmdW5jdGlvbiAoKSB7IHJldHVybiBhcmd1bWVudHM7IH0oKSkgPT0gJ0FyZ3VtZW50cyc7XG5cbi8vIGZhbGxiYWNrIGZvciBJRTExIFNjcmlwdCBBY2Nlc3MgRGVuaWVkIGVycm9yXG52YXIgdHJ5R2V0ID0gZnVuY3Rpb24gKGl0LCBrZXkpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4gaXRba2V5XTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgTywgVCwgQjtcbiAgcmV0dXJuIGl0ID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6IGl0ID09PSBudWxsID8gJ051bGwnXG4gICAgLy8gQEB0b1N0cmluZ1RhZyBjYXNlXG4gICAgOiB0eXBlb2YgKFQgPSB0cnlHZXQoTyA9IE9iamVjdChpdCksIFRBRykpID09ICdzdHJpbmcnID8gVFxuICAgIC8vIGJ1aWx0aW5UYWcgY2FzZVxuICAgIDogQVJHID8gY29mKE8pXG4gICAgLy8gRVMzIGFyZ3VtZW50cyBmYWxsYmFja1xuICAgIDogKEIgPSBjb2YoTykpID09ICdPYmplY3QnICYmIHR5cGVvZiBPLmNhbGxlZSA9PSAnZnVuY3Rpb24nID8gJ0FyZ3VtZW50cycgOiBCO1xufTtcbiIsInZhciB0b1N0cmluZyA9IHt9LnRvU3RyaW5nO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChpdCkuc2xpY2UoOCwgLTEpO1xufTtcbiIsInZhciBjb3JlID0gbW9kdWxlLmV4cG9ydHMgPSB7IHZlcnNpb246ICcyLjUuNCcgfTtcbmlmICh0eXBlb2YgX19lID09ICdudW1iZXInKSBfX2UgPSBjb3JlOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXVuZGVmXG4iLCIvLyBvcHRpb25hbCAvIHNpbXBsZSBjb250ZXh0IGJpbmRpbmdcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChmbiwgdGhhdCwgbGVuZ3RoKSB7XG4gIGFGdW5jdGlvbihmbik7XG4gIGlmICh0aGF0ID09PSB1bmRlZmluZWQpIHJldHVybiBmbjtcbiAgc3dpdGNoIChsZW5ndGgpIHtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbiAoYSkge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSk7XG4gICAgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbiAoYSwgYikge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYik7XG4gICAgfTtcbiAgICBjYXNlIDM6IHJldHVybiBmdW5jdGlvbiAoYSwgYiwgYykge1xuICAgICAgcmV0dXJuIGZuLmNhbGwodGhhdCwgYSwgYiwgYyk7XG4gICAgfTtcbiAgfVxuICByZXR1cm4gZnVuY3Rpb24gKC8qIC4uLmFyZ3MgKi8pIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhhdCwgYXJndW1lbnRzKTtcbiAgfTtcbn07XG4iLCIvLyA3LjIuMSBSZXF1aXJlT2JqZWN0Q29lcmNpYmxlKGFyZ3VtZW50KVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgaWYgKGl0ID09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY2FsbCBtZXRob2Qgb24gIFwiICsgaXQpO1xuICByZXR1cm4gaXQ7XG59O1xuIiwiLy8gVGhhbmsncyBJRTggZm9yIGhpcyBmdW5ueSBkZWZpbmVQcm9wZXJ0eVxubW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkoe30sICdhJywgeyBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIDc7IH0gfSkuYSAhPSA3O1xufSk7XG4iLCJ2YXIgaXNPYmplY3QgPSByZXF1aXJlKCcuL19pcy1vYmplY3QnKTtcbnZhciBkb2N1bWVudCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLmRvY3VtZW50O1xuLy8gdHlwZW9mIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQgaXMgJ29iamVjdCcgaW4gb2xkIElFXG52YXIgaXMgPSBpc09iamVjdChkb2N1bWVudCkgJiYgaXNPYmplY3QoZG9jdW1lbnQuY3JlYXRlRWxlbWVudCk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXMgPyBkb2N1bWVudC5jcmVhdGVFbGVtZW50KGl0KSA6IHt9O1xufTtcbiIsIi8vIElFIDgtIGRvbid0IGVudW0gYnVnIGtleXNcbm1vZHVsZS5leHBvcnRzID0gKFxuICAnY29uc3RydWN0b3IsaGFzT3duUHJvcGVydHksaXNQcm90b3R5cGVPZixwcm9wZXJ0eUlzRW51bWVyYWJsZSx0b0xvY2FsZVN0cmluZyx0b1N0cmluZyx2YWx1ZU9mJ1xuKS5zcGxpdCgnLCcpO1xuIiwidmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgUFJPVE9UWVBFID0gJ3Byb3RvdHlwZSc7XG5cbnZhciAkZXhwb3J0ID0gZnVuY3Rpb24gKHR5cGUsIG5hbWUsIHNvdXJjZSkge1xuICB2YXIgSVNfRk9SQ0VEID0gdHlwZSAmICRleHBvcnQuRjtcbiAgdmFyIElTX0dMT0JBTCA9IHR5cGUgJiAkZXhwb3J0Lkc7XG4gIHZhciBJU19TVEFUSUMgPSB0eXBlICYgJGV4cG9ydC5TO1xuICB2YXIgSVNfUFJPVE8gPSB0eXBlICYgJGV4cG9ydC5QO1xuICB2YXIgSVNfQklORCA9IHR5cGUgJiAkZXhwb3J0LkI7XG4gIHZhciB0YXJnZXQgPSBJU19HTE9CQUwgPyBnbG9iYWwgOiBJU19TVEFUSUMgPyBnbG9iYWxbbmFtZV0gfHwgKGdsb2JhbFtuYW1lXSA9IHt9KSA6IChnbG9iYWxbbmFtZV0gfHwge30pW1BST1RPVFlQRV07XG4gIHZhciBleHBvcnRzID0gSVNfR0xPQkFMID8gY29yZSA6IGNvcmVbbmFtZV0gfHwgKGNvcmVbbmFtZV0gPSB7fSk7XG4gIHZhciBleHBQcm90byA9IGV4cG9ydHNbUFJPVE9UWVBFXSB8fCAoZXhwb3J0c1tQUk9UT1RZUEVdID0ge30pO1xuICB2YXIga2V5LCBvd24sIG91dCwgZXhwO1xuICBpZiAoSVNfR0xPQkFMKSBzb3VyY2UgPSBuYW1lO1xuICBmb3IgKGtleSBpbiBzb3VyY2UpIHtcbiAgICAvLyBjb250YWlucyBpbiBuYXRpdmVcbiAgICBvd24gPSAhSVNfRk9SQ0VEICYmIHRhcmdldCAmJiB0YXJnZXRba2V5XSAhPT0gdW5kZWZpbmVkO1xuICAgIC8vIGV4cG9ydCBuYXRpdmUgb3IgcGFzc2VkXG4gICAgb3V0ID0gKG93biA/IHRhcmdldCA6IHNvdXJjZSlba2V5XTtcbiAgICAvLyBiaW5kIHRpbWVycyB0byBnbG9iYWwgZm9yIGNhbGwgZnJvbSBleHBvcnQgY29udGV4dFxuICAgIGV4cCA9IElTX0JJTkQgJiYgb3duID8gY3R4KG91dCwgZ2xvYmFsKSA6IElTX1BST1RPICYmIHR5cGVvZiBvdXQgPT0gJ2Z1bmN0aW9uJyA/IGN0eChGdW5jdGlvbi5jYWxsLCBvdXQpIDogb3V0O1xuICAgIC8vIGV4dGVuZCBnbG9iYWxcbiAgICBpZiAodGFyZ2V0KSByZWRlZmluZSh0YXJnZXQsIGtleSwgb3V0LCB0eXBlICYgJGV4cG9ydC5VKTtcbiAgICAvLyBleHBvcnRcbiAgICBpZiAoZXhwb3J0c1trZXldICE9IG91dCkgaGlkZShleHBvcnRzLCBrZXksIGV4cCk7XG4gICAgaWYgKElTX1BST1RPICYmIGV4cFByb3RvW2tleV0gIT0gb3V0KSBleHBQcm90b1trZXldID0gb3V0O1xuICB9XG59O1xuZ2xvYmFsLmNvcmUgPSBjb3JlO1xuLy8gdHlwZSBiaXRtYXBcbiRleHBvcnQuRiA9IDE7ICAgLy8gZm9yY2VkXG4kZXhwb3J0LkcgPSAyOyAgIC8vIGdsb2JhbFxuJGV4cG9ydC5TID0gNDsgICAvLyBzdGF0aWNcbiRleHBvcnQuUCA9IDg7ICAgLy8gcHJvdG9cbiRleHBvcnQuQiA9IDE2OyAgLy8gYmluZFxuJGV4cG9ydC5XID0gMzI7ICAvLyB3cmFwXG4kZXhwb3J0LlUgPSA2NDsgIC8vIHNhZmVcbiRleHBvcnQuUiA9IDEyODsgLy8gcmVhbCBwcm90byBtZXRob2QgZm9yIGBsaWJyYXJ5YFxubW9kdWxlLmV4cG9ydHMgPSAkZXhwb3J0O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYykge1xuICB0cnkge1xuICAgIHJldHVybiAhIWV4ZWMoKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59O1xuIiwidmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNhbGwgPSByZXF1aXJlKCcuL19pdGVyLWNhbGwnKTtcbnZhciBpc0FycmF5SXRlciA9IHJlcXVpcmUoJy4vX2lzLWFycmF5LWl0ZXInKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIHRvTGVuZ3RoID0gcmVxdWlyZSgnLi9fdG8tbGVuZ3RoJyk7XG52YXIgZ2V0SXRlckZuID0gcmVxdWlyZSgnLi9jb3JlLmdldC1pdGVyYXRvci1tZXRob2QnKTtcbnZhciBCUkVBSyA9IHt9O1xudmFyIFJFVFVSTiA9IHt9O1xudmFyIGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYWJsZSwgZW50cmllcywgZm4sIHRoYXQsIElURVJBVE9SKSB7XG4gIHZhciBpdGVyRm4gPSBJVEVSQVRPUiA/IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXJhYmxlOyB9IDogZ2V0SXRlckZuKGl0ZXJhYmxlKTtcbiAgdmFyIGYgPSBjdHgoZm4sIHRoYXQsIGVudHJpZXMgPyAyIDogMSk7XG4gIHZhciBpbmRleCA9IDA7XG4gIHZhciBsZW5ndGgsIHN0ZXAsIGl0ZXJhdG9yLCByZXN1bHQ7XG4gIGlmICh0eXBlb2YgaXRlckZuICE9ICdmdW5jdGlvbicpIHRocm93IFR5cGVFcnJvcihpdGVyYWJsZSArICcgaXMgbm90IGl0ZXJhYmxlIScpO1xuICAvLyBmYXN0IGNhc2UgZm9yIGFycmF5cyB3aXRoIGRlZmF1bHQgaXRlcmF0b3JcbiAgaWYgKGlzQXJyYXlJdGVyKGl0ZXJGbikpIGZvciAobGVuZ3RoID0gdG9MZW5ndGgoaXRlcmFibGUubGVuZ3RoKTsgbGVuZ3RoID4gaW5kZXg7IGluZGV4KyspIHtcbiAgICByZXN1bHQgPSBlbnRyaWVzID8gZihhbk9iamVjdChzdGVwID0gaXRlcmFibGVbaW5kZXhdKVswXSwgc3RlcFsxXSkgOiBmKGl0ZXJhYmxlW2luZGV4XSk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSBmb3IgKGl0ZXJhdG9yID0gaXRlckZuLmNhbGwoaXRlcmFibGUpOyAhKHN0ZXAgPSBpdGVyYXRvci5uZXh0KCkpLmRvbmU7KSB7XG4gICAgcmVzdWx0ID0gY2FsbChpdGVyYXRvciwgZiwgc3RlcC52YWx1ZSwgZW50cmllcyk7XG4gICAgaWYgKHJlc3VsdCA9PT0gQlJFQUsgfHwgcmVzdWx0ID09PSBSRVRVUk4pIHJldHVybiByZXN1bHQ7XG4gIH1cbn07XG5leHBvcnRzLkJSRUFLID0gQlJFQUs7XG5leHBvcnRzLlJFVFVSTiA9IFJFVFVSTjtcbiIsIi8vIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy84NiNpc3N1ZWNvbW1lbnQtMTE1NzU5MDI4XG52YXIgZ2xvYmFsID0gbW9kdWxlLmV4cG9ydHMgPSB0eXBlb2Ygd2luZG93ICE9ICd1bmRlZmluZWQnICYmIHdpbmRvdy5NYXRoID09IE1hdGhcbiAgPyB3aW5kb3cgOiB0eXBlb2Ygc2VsZiAhPSAndW5kZWZpbmVkJyAmJiBzZWxmLk1hdGggPT0gTWF0aCA/IHNlbGZcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gIDogRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcbmlmICh0eXBlb2YgX19nID09ICdudW1iZXInKSBfX2cgPSBnbG9iYWw7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tdW5kZWZcbiIsInZhciBoYXNPd25Qcm9wZXJ0eSA9IHt9Lmhhc093blByb3BlcnR5O1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIGtleSkge1xuICByZXR1cm4gaGFzT3duUHJvcGVydHkuY2FsbChpdCwga2V5KTtcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBjcmVhdGVEZXNjID0gcmVxdWlyZSgnLi9fcHJvcGVydHktZGVzYycpO1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gZnVuY3Rpb24gKG9iamVjdCwga2V5LCB2YWx1ZSkge1xuICByZXR1cm4gZFAuZihvYmplY3QsIGtleSwgY3JlYXRlRGVzYygxLCB2YWx1ZSkpO1xufSA6IGZ1bmN0aW9uIChvYmplY3QsIGtleSwgdmFsdWUpIHtcbiAgb2JqZWN0W2tleV0gPSB2YWx1ZTtcbiAgcmV0dXJuIG9iamVjdDtcbn07XG4iLCJ2YXIgZG9jdW1lbnQgPSByZXF1aXJlKCcuL19nbG9iYWwnKS5kb2N1bWVudDtcbm1vZHVsZS5leHBvcnRzID0gZG9jdW1lbnQgJiYgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50O1xuIiwibW9kdWxlLmV4cG9ydHMgPSAhcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKSAmJiAhcmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7XG4gIHJldHVybiBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVxdWlyZSgnLi9fZG9tLWNyZWF0ZScpKCdkaXYnKSwgJ2EnLCB7IGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gNzsgfSB9KS5hICE9IDc7XG59KTtcbiIsIi8vIGZhc3QgYXBwbHksIGh0dHA6Ly9qc3BlcmYubG5raXQuY29tL2Zhc3QtYXBwbHkvNVxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZm4sIGFyZ3MsIHRoYXQpIHtcbiAgdmFyIHVuID0gdGhhdCA9PT0gdW5kZWZpbmVkO1xuICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgY2FzZSAwOiByZXR1cm4gdW4gPyBmbigpXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQpO1xuICAgIGNhc2UgMTogcmV0dXJuIHVuID8gZm4oYXJnc1swXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSk7XG4gICAgY2FzZSAyOiByZXR1cm4gdW4gPyBmbihhcmdzWzBdLCBhcmdzWzFdKVxuICAgICAgICAgICAgICAgICAgICAgIDogZm4uY2FsbCh0aGF0LCBhcmdzWzBdLCBhcmdzWzFdKTtcbiAgICBjYXNlIDM6IHJldHVybiB1biA/IGZuKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pXG4gICAgICAgICAgICAgICAgICAgICAgOiBmbi5jYWxsKHRoYXQsIGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0pO1xuICAgIGNhc2UgNDogcmV0dXJuIHVuID8gZm4oYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSlcbiAgICAgICAgICAgICAgICAgICAgICA6IGZuLmNhbGwodGhhdCwgYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSk7XG4gIH0gcmV0dXJuIGZuLmFwcGx5KHRoYXQsIGFyZ3MpO1xufTtcbiIsIi8vIGZhbGxiYWNrIGZvciBub24tYXJyYXktbGlrZSBFUzMgYW5kIG5vbi1lbnVtZXJhYmxlIG9sZCBWOCBzdHJpbmdzXG52YXIgY29mID0gcmVxdWlyZSgnLi9fY29mJyk7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcHJvdG90eXBlLWJ1aWx0aW5zXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdCgneicpLnByb3BlcnR5SXNFbnVtZXJhYmxlKDApID8gT2JqZWN0IDogZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBjb2YoaXQpID09ICdTdHJpbmcnID8gaXQuc3BsaXQoJycpIDogT2JqZWN0KGl0KTtcbn07XG4iLCIvLyBjaGVjayBvbiBkZWZhdWx0IEFycmF5IGl0ZXJhdG9yXG52YXIgSXRlcmF0b3JzID0gcmVxdWlyZSgnLi9faXRlcmF0b3JzJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBBcnJheVByb3RvID0gQXJyYXkucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXQgIT09IHVuZGVmaW5lZCAmJiAoSXRlcmF0b3JzLkFycmF5ID09PSBpdCB8fCBBcnJheVByb3RvW0lURVJBVE9SXSA9PT0gaXQpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiB0eXBlb2YgaXQgPT09ICdvYmplY3QnID8gaXQgIT09IG51bGwgOiB0eXBlb2YgaXQgPT09ICdmdW5jdGlvbic7XG59O1xuIiwiLy8gY2FsbCBzb21ldGhpbmcgb24gaXRlcmF0b3Igc3RlcCB3aXRoIHNhZmUgY2xvc2luZyBvbiBlcnJvclxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVyYXRvciwgZm4sIHZhbHVlLCBlbnRyaWVzKSB7XG4gIHRyeSB7XG4gICAgcmV0dXJuIGVudHJpZXMgPyBmbihhbk9iamVjdCh2YWx1ZSlbMF0sIHZhbHVlWzFdKSA6IGZuKHZhbHVlKTtcbiAgLy8gNy40LjYgSXRlcmF0b3JDbG9zZShpdGVyYXRvciwgY29tcGxldGlvbilcbiAgfSBjYXRjaCAoZSkge1xuICAgIHZhciByZXQgPSBpdGVyYXRvclsncmV0dXJuJ107XG4gICAgaWYgKHJldCAhPT0gdW5kZWZpbmVkKSBhbk9iamVjdChyZXQuY2FsbChpdGVyYXRvcikpO1xuICAgIHRocm93IGU7XG4gIH1cbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIGRlc2NyaXB0b3IgPSByZXF1aXJlKCcuL19wcm9wZXJ0eS1kZXNjJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIEl0ZXJhdG9yUHJvdG90eXBlID0ge307XG5cbi8vIDI1LjEuMi4xLjEgJUl0ZXJhdG9yUHJvdG90eXBlJVtAQGl0ZXJhdG9yXSgpXG5yZXF1aXJlKCcuL19oaWRlJykoSXRlcmF0b3JQcm90b3R5cGUsIHJlcXVpcmUoJy4vX3drcycpKCdpdGVyYXRvcicpLCBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9KTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoQ29uc3RydWN0b3IsIE5BTUUsIG5leHQpIHtcbiAgQ29uc3RydWN0b3IucHJvdG90eXBlID0gY3JlYXRlKEl0ZXJhdG9yUHJvdG90eXBlLCB7IG5leHQ6IGRlc2NyaXB0b3IoMSwgbmV4dCkgfSk7XG4gIHNldFRvU3RyaW5nVGFnKENvbnN0cnVjdG9yLCBOQU1FICsgJyBJdGVyYXRvcicpO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyICRleHBvcnQgPSByZXF1aXJlKCcuL19leHBvcnQnKTtcbnZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG52YXIgaGlkZSA9IHJlcXVpcmUoJy4vX2hpZGUnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciAkaXRlckNyZWF0ZSA9IHJlcXVpcmUoJy4vX2l0ZXItY3JlYXRlJyk7XG52YXIgc2V0VG9TdHJpbmdUYWcgPSByZXF1aXJlKCcuL19zZXQtdG8tc3RyaW5nLXRhZycpO1xudmFyIGdldFByb3RvdHlwZU9mID0gcmVxdWlyZSgnLi9fb2JqZWN0LWdwbycpO1xudmFyIElURVJBVE9SID0gcmVxdWlyZSgnLi9fd2tzJykoJ2l0ZXJhdG9yJyk7XG52YXIgQlVHR1kgPSAhKFtdLmtleXMgJiYgJ25leHQnIGluIFtdLmtleXMoKSk7IC8vIFNhZmFyaSBoYXMgYnVnZ3kgaXRlcmF0b3JzIHcvbyBgbmV4dGBcbnZhciBGRl9JVEVSQVRPUiA9ICdAQGl0ZXJhdG9yJztcbnZhciBLRVlTID0gJ2tleXMnO1xudmFyIFZBTFVFUyA9ICd2YWx1ZXMnO1xuXG52YXIgcmV0dXJuVGhpcyA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH07XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKEJhc2UsIE5BTUUsIENvbnN0cnVjdG9yLCBuZXh0LCBERUZBVUxULCBJU19TRVQsIEZPUkNFRCkge1xuICAkaXRlckNyZWF0ZShDb25zdHJ1Y3RvciwgTkFNRSwgbmV4dCk7XG4gIHZhciBnZXRNZXRob2QgPSBmdW5jdGlvbiAoa2luZCkge1xuICAgIGlmICghQlVHR1kgJiYga2luZCBpbiBwcm90bykgcmV0dXJuIHByb3RvW2tpbmRdO1xuICAgIHN3aXRjaCAoa2luZCkge1xuICAgICAgY2FzZSBLRVlTOiByZXR1cm4gZnVuY3Rpb24ga2V5cygpIHsgcmV0dXJuIG5ldyBDb25zdHJ1Y3Rvcih0aGlzLCBraW5kKTsgfTtcbiAgICAgIGNhc2UgVkFMVUVTOiByZXR1cm4gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gbmV3IENvbnN0cnVjdG9yKHRoaXMsIGtpbmQpOyB9O1xuICAgIH0gcmV0dXJuIGZ1bmN0aW9uIGVudHJpZXMoKSB7IHJldHVybiBuZXcgQ29uc3RydWN0b3IodGhpcywga2luZCk7IH07XG4gIH07XG4gIHZhciBUQUcgPSBOQU1FICsgJyBJdGVyYXRvcic7XG4gIHZhciBERUZfVkFMVUVTID0gREVGQVVMVCA9PSBWQUxVRVM7XG4gIHZhciBWQUxVRVNfQlVHID0gZmFsc2U7XG4gIHZhciBwcm90byA9IEJhc2UucHJvdG90eXBlO1xuICB2YXIgJG5hdGl2ZSA9IHByb3RvW0lURVJBVE9SXSB8fCBwcm90b1tGRl9JVEVSQVRPUl0gfHwgREVGQVVMVCAmJiBwcm90b1tERUZBVUxUXTtcbiAgdmFyICRkZWZhdWx0ID0gJG5hdGl2ZSB8fCBnZXRNZXRob2QoREVGQVVMVCk7XG4gIHZhciAkZW50cmllcyA9IERFRkFVTFQgPyAhREVGX1ZBTFVFUyA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKCdlbnRyaWVzJykgOiB1bmRlZmluZWQ7XG4gIHZhciAkYW55TmF0aXZlID0gTkFNRSA9PSAnQXJyYXknID8gcHJvdG8uZW50cmllcyB8fCAkbmF0aXZlIDogJG5hdGl2ZTtcbiAgdmFyIG1ldGhvZHMsIGtleSwgSXRlcmF0b3JQcm90b3R5cGU7XG4gIC8vIEZpeCBuYXRpdmVcbiAgaWYgKCRhbnlOYXRpdmUpIHtcbiAgICBJdGVyYXRvclByb3RvdHlwZSA9IGdldFByb3RvdHlwZU9mKCRhbnlOYXRpdmUuY2FsbChuZXcgQmFzZSgpKSk7XG4gICAgaWYgKEl0ZXJhdG9yUHJvdG90eXBlICE9PSBPYmplY3QucHJvdG90eXBlICYmIEl0ZXJhdG9yUHJvdG90eXBlLm5leHQpIHtcbiAgICAgIC8vIFNldCBAQHRvU3RyaW5nVGFnIHRvIG5hdGl2ZSBpdGVyYXRvcnNcbiAgICAgIHNldFRvU3RyaW5nVGFnKEl0ZXJhdG9yUHJvdG90eXBlLCBUQUcsIHRydWUpO1xuICAgICAgLy8gZml4IGZvciBzb21lIG9sZCBlbmdpbmVzXG4gICAgICBpZiAoIUxJQlJBUlkgJiYgdHlwZW9mIEl0ZXJhdG9yUHJvdG90eXBlW0lURVJBVE9SXSAhPSAnZnVuY3Rpb24nKSBoaWRlKEl0ZXJhdG9yUHJvdG90eXBlLCBJVEVSQVRPUiwgcmV0dXJuVGhpcyk7XG4gICAgfVxuICB9XG4gIC8vIGZpeCBBcnJheSN7dmFsdWVzLCBAQGl0ZXJhdG9yfS5uYW1lIGluIFY4IC8gRkZcbiAgaWYgKERFRl9WQUxVRVMgJiYgJG5hdGl2ZSAmJiAkbmF0aXZlLm5hbWUgIT09IFZBTFVFUykge1xuICAgIFZBTFVFU19CVUcgPSB0cnVlO1xuICAgICRkZWZhdWx0ID0gZnVuY3Rpb24gdmFsdWVzKCkgeyByZXR1cm4gJG5hdGl2ZS5jYWxsKHRoaXMpOyB9O1xuICB9XG4gIC8vIERlZmluZSBpdGVyYXRvclxuICBpZiAoKCFMSUJSQVJZIHx8IEZPUkNFRCkgJiYgKEJVR0dZIHx8IFZBTFVFU19CVUcgfHwgIXByb3RvW0lURVJBVE9SXSkpIHtcbiAgICBoaWRlKHByb3RvLCBJVEVSQVRPUiwgJGRlZmF1bHQpO1xuICB9XG4gIC8vIFBsdWcgZm9yIGxpYnJhcnlcbiAgSXRlcmF0b3JzW05BTUVdID0gJGRlZmF1bHQ7XG4gIEl0ZXJhdG9yc1tUQUddID0gcmV0dXJuVGhpcztcbiAgaWYgKERFRkFVTFQpIHtcbiAgICBtZXRob2RzID0ge1xuICAgICAgdmFsdWVzOiBERUZfVkFMVUVTID8gJGRlZmF1bHQgOiBnZXRNZXRob2QoVkFMVUVTKSxcbiAgICAgIGtleXM6IElTX1NFVCA/ICRkZWZhdWx0IDogZ2V0TWV0aG9kKEtFWVMpLFxuICAgICAgZW50cmllczogJGVudHJpZXNcbiAgICB9O1xuICAgIGlmIChGT1JDRUQpIGZvciAoa2V5IGluIG1ldGhvZHMpIHtcbiAgICAgIGlmICghKGtleSBpbiBwcm90bykpIHJlZGVmaW5lKHByb3RvLCBrZXksIG1ldGhvZHNba2V5XSk7XG4gICAgfSBlbHNlICRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5GICogKEJVR0dZIHx8IFZBTFVFU19CVUcpLCBOQU1FLCBtZXRob2RzKTtcbiAgfVxuICByZXR1cm4gbWV0aG9kcztcbn07XG4iLCJ2YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBTQUZFX0NMT1NJTkcgPSBmYWxzZTtcblxudHJ5IHtcbiAgdmFyIHJpdGVyID0gWzddW0lURVJBVE9SXSgpO1xuICByaXRlclsncmV0dXJuJ10gPSBmdW5jdGlvbiAoKSB7IFNBRkVfQ0xPU0lORyA9IHRydWU7IH07XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby10aHJvdy1saXRlcmFsXG4gIEFycmF5LmZyb20ocml0ZXIsIGZ1bmN0aW9uICgpIHsgdGhyb3cgMjsgfSk7XG59IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZXhlYywgc2tpcENsb3NpbmcpIHtcbiAgaWYgKCFza2lwQ2xvc2luZyAmJiAhU0FGRV9DTE9TSU5HKSByZXR1cm4gZmFsc2U7XG4gIHZhciBzYWZlID0gZmFsc2U7XG4gIHRyeSB7XG4gICAgdmFyIGFyciA9IFs3XTtcbiAgICB2YXIgaXRlciA9IGFycltJVEVSQVRPUl0oKTtcbiAgICBpdGVyLm5leHQgPSBmdW5jdGlvbiAoKSB7IHJldHVybiB7IGRvbmU6IHNhZmUgPSB0cnVlIH07IH07XG4gICAgYXJyW0lURVJBVE9SXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIGl0ZXI7IH07XG4gICAgZXhlYyhhcnIpO1xuICB9IGNhdGNoIChlKSB7IC8qIGVtcHR5ICovIH1cbiAgcmV0dXJuIHNhZmU7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoZG9uZSwgdmFsdWUpIHtcbiAgcmV0dXJuIHsgdmFsdWU6IHZhbHVlLCBkb25lOiAhIWRvbmUgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHt9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmYWxzZTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBtYWNyb3Rhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIE9ic2VydmVyID0gZ2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgZ2xvYmFsLldlYktpdE11dGF0aW9uT2JzZXJ2ZXI7XG52YXIgcHJvY2VzcyA9IGdsb2JhbC5wcm9jZXNzO1xudmFyIFByb21pc2UgPSBnbG9iYWwuUHJvbWlzZTtcbnZhciBpc05vZGUgPSByZXF1aXJlKCcuL19jb2YnKShwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaGVhZCwgbGFzdCwgbm90aWZ5O1xuXG4gIHZhciBmbHVzaCA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcGFyZW50LCBmbjtcbiAgICBpZiAoaXNOb2RlICYmIChwYXJlbnQgPSBwcm9jZXNzLmRvbWFpbikpIHBhcmVudC5leGl0KCk7XG4gICAgd2hpbGUgKGhlYWQpIHtcbiAgICAgIGZuID0gaGVhZC5mbjtcbiAgICAgIGhlYWQgPSBoZWFkLm5leHQ7XG4gICAgICB0cnkge1xuICAgICAgICBmbigpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoaGVhZCkgbm90aWZ5KCk7XG4gICAgICAgIGVsc2UgbGFzdCA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhyb3cgZTtcbiAgICAgIH1cbiAgICB9IGxhc3QgPSB1bmRlZmluZWQ7XG4gICAgaWYgKHBhcmVudCkgcGFyZW50LmVudGVyKCk7XG4gIH07XG5cbiAgLy8gTm9kZS5qc1xuICBpZiAoaXNOb2RlKSB7XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gICAgfTtcbiAgLy8gYnJvd3NlcnMgd2l0aCBNdXRhdGlvbk9ic2VydmVyLCBleGNlcHQgaU9TIFNhZmFyaSAtIGh0dHBzOi8vZ2l0aHViLmNvbS96bG9pcm9jay9jb3JlLWpzL2lzc3Vlcy8zMzlcbiAgfSBlbHNlIGlmIChPYnNlcnZlciAmJiAhKGdsb2JhbC5uYXZpZ2F0b3IgJiYgZ2xvYmFsLm5hdmlnYXRvci5zdGFuZGFsb25lKSkge1xuICAgIHZhciB0b2dnbGUgPSB0cnVlO1xuICAgIHZhciBub2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoJycpO1xuICAgIG5ldyBPYnNlcnZlcihmbHVzaCkub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgbm90aWZ5ID0gZnVuY3Rpb24gKCkge1xuICAgICAgbm9kZS5kYXRhID0gdG9nZ2xlID0gIXRvZ2dsZTtcbiAgICB9O1xuICAvLyBlbnZpcm9ubWVudHMgd2l0aCBtYXliZSBub24tY29tcGxldGVseSBjb3JyZWN0LCBidXQgZXhpc3RlbnQgUHJvbWlzZVxuICB9IGVsc2UgaWYgKFByb21pc2UgJiYgUHJvbWlzZS5yZXNvbHZlKSB7XG4gICAgdmFyIHByb21pc2UgPSBQcm9taXNlLnJlc29sdmUoKTtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICBwcm9taXNlLnRoZW4oZmx1c2gpO1xuICAgIH07XG4gIC8vIGZvciBvdGhlciBlbnZpcm9ubWVudHMgLSBtYWNyb3Rhc2sgYmFzZWQgb246XG4gIC8vIC0gc2V0SW1tZWRpYXRlXG4gIC8vIC0gTWVzc2FnZUNoYW5uZWxcbiAgLy8gLSB3aW5kb3cucG9zdE1lc3NhZ1xuICAvLyAtIG9ucmVhZHlzdGF0ZWNoYW5nZVxuICAvLyAtIHNldFRpbWVvdXRcbiAgfSBlbHNlIHtcbiAgICBub3RpZnkgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBzdHJhbmdlIElFICsgd2VicGFjayBkZXYgc2VydmVyIGJ1ZyAtIHVzZSAuY2FsbChnbG9iYWwpXG4gICAgICBtYWNyb3Rhc2suY2FsbChnbG9iYWwsIGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIChmbikge1xuICAgIHZhciB0YXNrID0geyBmbjogZm4sIG5leHQ6IHVuZGVmaW5lZCB9O1xuICAgIGlmIChsYXN0KSBsYXN0Lm5leHQgPSB0YXNrO1xuICAgIGlmICghaGVhZCkge1xuICAgICAgaGVhZCA9IHRhc2s7XG4gICAgICBub3RpZnkoKTtcbiAgICB9IGxhc3QgPSB0YXNrO1xuICB9O1xufTtcbiIsIid1c2Ugc3RyaWN0Jztcbi8vIDI1LjQuMS41IE5ld1Byb21pc2VDYXBhYmlsaXR5KEMpXG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xuXG5mdW5jdGlvbiBQcm9taXNlQ2FwYWJpbGl0eShDKSB7XG4gIHZhciByZXNvbHZlLCByZWplY3Q7XG4gIHRoaXMucHJvbWlzZSA9IG5ldyBDKGZ1bmN0aW9uICgkJHJlc29sdmUsICQkcmVqZWN0KSB7XG4gICAgaWYgKHJlc29sdmUgIT09IHVuZGVmaW5lZCB8fCByZWplY3QgIT09IHVuZGVmaW5lZCkgdGhyb3cgVHlwZUVycm9yKCdCYWQgUHJvbWlzZSBjb25zdHJ1Y3RvcicpO1xuICAgIHJlc29sdmUgPSAkJHJlc29sdmU7XG4gICAgcmVqZWN0ID0gJCRyZWplY3Q7XG4gIH0pO1xuICB0aGlzLnJlc29sdmUgPSBhRnVuY3Rpb24ocmVzb2x2ZSk7XG4gIHRoaXMucmVqZWN0ID0gYUZ1bmN0aW9uKHJlamVjdCk7XG59XG5cbm1vZHVsZS5leHBvcnRzLmYgPSBmdW5jdGlvbiAoQykge1xuICByZXR1cm4gbmV3IFByb21pc2VDYXBhYmlsaXR5KEMpO1xufTtcbiIsIi8vIDE5LjEuMi4yIC8gMTUuMi4zLjUgT2JqZWN0LmNyZWF0ZShPIFssIFByb3BlcnRpZXNdKVxudmFyIGFuT2JqZWN0ID0gcmVxdWlyZSgnLi9fYW4tb2JqZWN0Jyk7XG52YXIgZFBzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWRwcycpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xudmFyIElFX1BST1RPID0gcmVxdWlyZSgnLi9fc2hhcmVkLWtleScpKCdJRV9QUk9UTycpO1xudmFyIEVtcHR5ID0gZnVuY3Rpb24gKCkgeyAvKiBlbXB0eSAqLyB9O1xudmFyIFBST1RPVFlQRSA9ICdwcm90b3R5cGUnO1xuXG4vLyBDcmVhdGUgb2JqZWN0IHdpdGggZmFrZSBgbnVsbGAgcHJvdG90eXBlOiB1c2UgaWZyYW1lIE9iamVjdCB3aXRoIGNsZWFyZWQgcHJvdG90eXBlXG52YXIgY3JlYXRlRGljdCA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gVGhyYXNoLCB3YXN0ZSBhbmQgc29kb215OiBJRSBHQyBidWdcbiAgdmFyIGlmcmFtZSA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKSgnaWZyYW1lJyk7XG4gIHZhciBpID0gZW51bUJ1Z0tleXMubGVuZ3RoO1xuICB2YXIgbHQgPSAnPCc7XG4gIHZhciBndCA9ICc+JztcbiAgdmFyIGlmcmFtZURvY3VtZW50O1xuICBpZnJhbWUuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgcmVxdWlyZSgnLi9faHRtbCcpLmFwcGVuZENoaWxkKGlmcmFtZSk7XG4gIGlmcmFtZS5zcmMgPSAnamF2YXNjcmlwdDonOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLXNjcmlwdC11cmxcbiAgLy8gY3JlYXRlRGljdCA9IGlmcmFtZS5jb250ZW50V2luZG93Lk9iamVjdDtcbiAgLy8gaHRtbC5yZW1vdmVDaGlsZChpZnJhbWUpO1xuICBpZnJhbWVEb2N1bWVudCA9IGlmcmFtZS5jb250ZW50V2luZG93LmRvY3VtZW50O1xuICBpZnJhbWVEb2N1bWVudC5vcGVuKCk7XG4gIGlmcmFtZURvY3VtZW50LndyaXRlKGx0ICsgJ3NjcmlwdCcgKyBndCArICdkb2N1bWVudC5GPU9iamVjdCcgKyBsdCArICcvc2NyaXB0JyArIGd0KTtcbiAgaWZyYW1lRG9jdW1lbnQuY2xvc2UoKTtcbiAgY3JlYXRlRGljdCA9IGlmcmFtZURvY3VtZW50LkY7XG4gIHdoaWxlIChpLS0pIGRlbGV0ZSBjcmVhdGVEaWN0W1BST1RPVFlQRV1bZW51bUJ1Z0tleXNbaV1dO1xuICByZXR1cm4gY3JlYXRlRGljdCgpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBPYmplY3QuY3JlYXRlIHx8IGZ1bmN0aW9uIGNyZWF0ZShPLCBQcm9wZXJ0aWVzKSB7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChPICE9PSBudWxsKSB7XG4gICAgRW1wdHlbUFJPVE9UWVBFXSA9IGFuT2JqZWN0KE8pO1xuICAgIHJlc3VsdCA9IG5ldyBFbXB0eSgpO1xuICAgIEVtcHR5W1BST1RPVFlQRV0gPSBudWxsO1xuICAgIC8vIGFkZCBcIl9fcHJvdG9fX1wiIGZvciBPYmplY3QuZ2V0UHJvdG90eXBlT2YgcG9seWZpbGxcbiAgICByZXN1bHRbSUVfUFJPVE9dID0gTztcbiAgfSBlbHNlIHJlc3VsdCA9IGNyZWF0ZURpY3QoKTtcbiAgcmV0dXJuIFByb3BlcnRpZXMgPT09IHVuZGVmaW5lZCA/IHJlc3VsdCA6IGRQcyhyZXN1bHQsIFByb3BlcnRpZXMpO1xufTtcbiIsInZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIElFOF9ET01fREVGSU5FID0gcmVxdWlyZSgnLi9faWU4LWRvbS1kZWZpbmUnKTtcbnZhciB0b1ByaW1pdGl2ZSA9IHJlcXVpcmUoJy4vX3RvLXByaW1pdGl2ZScpO1xudmFyIGRQID0gT2JqZWN0LmRlZmluZVByb3BlcnR5O1xuXG5leHBvcnRzLmYgPSByZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpID8gT2JqZWN0LmRlZmluZVByb3BlcnR5IDogZnVuY3Rpb24gZGVmaW5lUHJvcGVydHkoTywgUCwgQXR0cmlidXRlcykge1xuICBhbk9iamVjdChPKTtcbiAgUCA9IHRvUHJpbWl0aXZlKFAsIHRydWUpO1xuICBhbk9iamVjdChBdHRyaWJ1dGVzKTtcbiAgaWYgKElFOF9ET01fREVGSU5FKSB0cnkge1xuICAgIHJldHVybiBkUChPLCBQLCBBdHRyaWJ1dGVzKTtcbiAgfSBjYXRjaCAoZSkgeyAvKiBlbXB0eSAqLyB9XG4gIGlmICgnZ2V0JyBpbiBBdHRyaWJ1dGVzIHx8ICdzZXQnIGluIEF0dHJpYnV0ZXMpIHRocm93IFR5cGVFcnJvcignQWNjZXNzb3JzIG5vdCBzdXBwb3J0ZWQhJyk7XG4gIGlmICgndmFsdWUnIGluIEF0dHJpYnV0ZXMpIE9bUF0gPSBBdHRyaWJ1dGVzLnZhbHVlO1xuICByZXR1cm4gTztcbn07XG4iLCJ2YXIgZFAgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKTtcbnZhciBhbk9iamVjdCA9IHJlcXVpcmUoJy4vX2FuLW9iamVjdCcpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoJy4vX2Rlc2NyaXB0b3JzJykgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyA6IGZ1bmN0aW9uIGRlZmluZVByb3BlcnRpZXMoTywgUHJvcGVydGllcykge1xuICBhbk9iamVjdChPKTtcbiAgdmFyIGtleXMgPSBnZXRLZXlzKFByb3BlcnRpZXMpO1xuICB2YXIgbGVuZ3RoID0ga2V5cy5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIFA7XG4gIHdoaWxlIChsZW5ndGggPiBpKSBkUC5mKE8sIFAgPSBrZXlzW2krK10sIFByb3BlcnRpZXNbUF0pO1xuICByZXR1cm4gTztcbn07XG4iLCIvLyAxOS4xLjIuOSAvIDE1LjIuMy4yIE9iamVjdC5nZXRQcm90b3R5cGVPZihPKVxudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIHRvT2JqZWN0ID0gcmVxdWlyZSgnLi9fdG8tb2JqZWN0Jyk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG52YXIgT2JqZWN0UHJvdG8gPSBPYmplY3QucHJvdG90eXBlO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5nZXRQcm90b3R5cGVPZiB8fCBmdW5jdGlvbiAoTykge1xuICBPID0gdG9PYmplY3QoTyk7XG4gIGlmIChoYXMoTywgSUVfUFJPVE8pKSByZXR1cm4gT1tJRV9QUk9UT107XG4gIGlmICh0eXBlb2YgTy5jb25zdHJ1Y3RvciA9PSAnZnVuY3Rpb24nICYmIE8gaW5zdGFuY2VvZiBPLmNvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIE8uY29uc3RydWN0b3IucHJvdG90eXBlO1xuICB9IHJldHVybiBPIGluc3RhbmNlb2YgT2JqZWN0ID8gT2JqZWN0UHJvdG8gOiBudWxsO1xufTtcbiIsInZhciBoYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgYXJyYXlJbmRleE9mID0gcmVxdWlyZSgnLi9fYXJyYXktaW5jbHVkZXMnKShmYWxzZSk7XG52YXIgSUVfUFJPVE8gPSByZXF1aXJlKCcuL19zaGFyZWQta2V5JykoJ0lFX1BST1RPJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKG9iamVjdCwgbmFtZXMpIHtcbiAgdmFyIE8gPSB0b0lPYmplY3Qob2JqZWN0KTtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciBrZXk7XG4gIGZvciAoa2V5IGluIE8pIGlmIChrZXkgIT0gSUVfUFJPVE8pIGhhcyhPLCBrZXkpICYmIHJlc3VsdC5wdXNoKGtleSk7XG4gIC8vIERvbid0IGVudW0gYnVnICYgaGlkZGVuIGtleXNcbiAgd2hpbGUgKG5hbWVzLmxlbmd0aCA+IGkpIGlmIChoYXMoTywga2V5ID0gbmFtZXNbaSsrXSkpIHtcbiAgICB+YXJyYXlJbmRleE9mKHJlc3VsdCwga2V5KSB8fCByZXN1bHQucHVzaChrZXkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwiLy8gMTkuMS4yLjE0IC8gMTUuMi4zLjE0IE9iamVjdC5rZXlzKE8pXG52YXIgJGtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cy1pbnRlcm5hbCcpO1xudmFyIGVudW1CdWdLZXlzID0gcmVxdWlyZSgnLi9fZW51bS1idWcta2V5cycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IE9iamVjdC5rZXlzIHx8IGZ1bmN0aW9uIGtleXMoTykge1xuICByZXR1cm4gJGtleXMoTywgZW51bUJ1Z0tleXMpO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGV4ZWMpIHtcbiAgdHJ5IHtcbiAgICByZXR1cm4geyBlOiBmYWxzZSwgdjogZXhlYygpIH07XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZXR1cm4geyBlOiB0cnVlLCB2OiBlIH07XG4gIH1cbn07XG4iLCJ2YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xudmFyIG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gcmVxdWlyZSgnLi9fbmV3LXByb21pc2UtY2FwYWJpbGl0eScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChDLCB4KSB7XG4gIGFuT2JqZWN0KEMpO1xuICBpZiAoaXNPYmplY3QoeCkgJiYgeC5jb25zdHJ1Y3RvciA9PT0gQykgcmV0dXJuIHg7XG4gIHZhciBwcm9taXNlQ2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5LmYoQyk7XG4gIHZhciByZXNvbHZlID0gcHJvbWlzZUNhcGFiaWxpdHkucmVzb2x2ZTtcbiAgcmVzb2x2ZSh4KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoYml0bWFwLCB2YWx1ZSkge1xuICByZXR1cm4ge1xuICAgIGVudW1lcmFibGU6ICEoYml0bWFwICYgMSksXG4gICAgY29uZmlndXJhYmxlOiAhKGJpdG1hcCAmIDIpLFxuICAgIHdyaXRhYmxlOiAhKGJpdG1hcCAmIDQpLFxuICAgIHZhbHVlOiB2YWx1ZVxuICB9O1xufTtcbiIsInZhciByZWRlZmluZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh0YXJnZXQsIHNyYywgc2FmZSkge1xuICBmb3IgKHZhciBrZXkgaW4gc3JjKSByZWRlZmluZSh0YXJnZXQsIGtleSwgc3JjW2tleV0sIHNhZmUpO1xuICByZXR1cm4gdGFyZ2V0O1xufTtcbiIsInZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFNSQyA9IHJlcXVpcmUoJy4vX3VpZCcpKCdzcmMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IEZ1bmN0aW9uW1RPX1NUUklOR107XG52YXIgVFBMID0gKCcnICsgJHRvU3RyaW5nKS5zcGxpdChUT19TVFJJTkcpO1xuXG5yZXF1aXJlKCcuL19jb3JlJykuaW5zcGVjdFNvdXJjZSA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gJHRvU3RyaW5nLmNhbGwoaXQpO1xufTtcblxuKG1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE8sIGtleSwgdmFsLCBzYWZlKSB7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIHZhbCA9PSAnZnVuY3Rpb24nO1xuICBpZiAoaXNGdW5jdGlvbikgaGFzKHZhbCwgJ25hbWUnKSB8fCBoaWRlKHZhbCwgJ25hbWUnLCBrZXkpO1xuICBpZiAoT1trZXldID09PSB2YWwpIHJldHVybjtcbiAgaWYgKGlzRnVuY3Rpb24pIGhhcyh2YWwsIFNSQykgfHwgaGlkZSh2YWwsIFNSQywgT1trZXldID8gJycgKyBPW2tleV0gOiBUUEwuam9pbihTdHJpbmcoa2V5KSkpO1xuICBpZiAoTyA9PT0gZ2xvYmFsKSB7XG4gICAgT1trZXldID0gdmFsO1xuICB9IGVsc2UgaWYgKCFzYWZlKSB7XG4gICAgZGVsZXRlIE9ba2V5XTtcbiAgICBoaWRlKE8sIGtleSwgdmFsKTtcbiAgfSBlbHNlIGlmIChPW2tleV0pIHtcbiAgICBPW2tleV0gPSB2YWw7XG4gIH0gZWxzZSB7XG4gICAgaGlkZShPLCBrZXksIHZhbCk7XG4gIH1cbi8vIGFkZCBmYWtlIEZ1bmN0aW9uI3RvU3RyaW5nIGZvciBjb3JyZWN0IHdvcmsgd3JhcHBlZCBtZXRob2RzIC8gY29uc3RydWN0b3JzIHdpdGggbWV0aG9kcyBsaWtlIExvRGFzaCBpc05hdGl2ZVxufSkoRnVuY3Rpb24ucHJvdG90eXBlLCBUT19TVFJJTkcsIGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICByZXR1cm4gdHlwZW9mIHRoaXMgPT0gJ2Z1bmN0aW9uJyAmJiB0aGlzW1NSQ10gfHwgJHRvU3RyaW5nLmNhbGwodGhpcyk7XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBTUEVDSUVTID0gcmVxdWlyZSgnLi9fd2tzJykoJ3NwZWNpZXMnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoS0VZKSB7XG4gIHZhciBDID0gZ2xvYmFsW0tFWV07XG4gIGlmIChERVNDUklQVE9SUyAmJiBDICYmICFDW1NQRUNJRVNdKSBkUC5mKEMsIFNQRUNJRVMsIHtcbiAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9XG4gIH0pO1xufTtcbiIsInZhciBkZWYgPSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mO1xudmFyIGhhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIFRBRyA9IHJlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCwgdGFnLCBzdGF0KSB7XG4gIGlmIChpdCAmJiAhaGFzKGl0ID0gc3RhdCA/IGl0IDogaXQucHJvdG90eXBlLCBUQUcpKSBkZWYoaXQsIFRBRywgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiB0YWcgfSk7XG59O1xuIiwidmFyIHNoYXJlZCA9IHJlcXVpcmUoJy4vX3NoYXJlZCcpKCdrZXlzJyk7XG52YXIgdWlkID0gcmVxdWlyZSgnLi9fdWlkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHNoYXJlZFtrZXldIHx8IChzaGFyZWRba2V5XSA9IHVpZChrZXkpKTtcbn07XG4iLCJ2YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgU0hBUkVEID0gJ19fY29yZS1qc19zaGFyZWRfXyc7XG52YXIgc3RvcmUgPSBnbG9iYWxbU0hBUkVEXSB8fCAoZ2xvYmFsW1NIQVJFRF0gPSB7fSk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChrZXkpIHtcbiAgcmV0dXJuIHN0b3JlW2tleV0gfHwgKHN0b3JlW2tleV0gPSB7fSk7XG59O1xuIiwiLy8gNy4zLjIwIFNwZWNpZXNDb25zdHJ1Y3RvcihPLCBkZWZhdWx0Q29uc3RydWN0b3IpXG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciBhRnVuY3Rpb24gPSByZXF1aXJlKCcuL19hLWZ1bmN0aW9uJyk7XG52YXIgU1BFQ0lFUyA9IHJlcXVpcmUoJy4vX3drcycpKCdzcGVjaWVzJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChPLCBEKSB7XG4gIHZhciBDID0gYW5PYmplY3QoTykuY29uc3RydWN0b3I7XG4gIHZhciBTO1xuICByZXR1cm4gQyA9PT0gdW5kZWZpbmVkIHx8IChTID0gYW5PYmplY3QoQylbU1BFQ0lFU10pID09IHVuZGVmaW5lZCA/IEQgOiBhRnVuY3Rpb24oUyk7XG59O1xuIiwidmFyIHRvSW50ZWdlciA9IHJlcXVpcmUoJy4vX3RvLWludGVnZXInKTtcbnZhciBkZWZpbmVkID0gcmVxdWlyZSgnLi9fZGVmaW5lZCcpO1xuLy8gdHJ1ZSAgLT4gU3RyaW5nI2F0XG4vLyBmYWxzZSAtPiBTdHJpbmcjY29kZVBvaW50QXRcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKFRPX1NUUklORykge1xuICByZXR1cm4gZnVuY3Rpb24gKHRoYXQsIHBvcykge1xuICAgIHZhciBzID0gU3RyaW5nKGRlZmluZWQodGhhdCkpO1xuICAgIHZhciBpID0gdG9JbnRlZ2VyKHBvcyk7XG4gICAgdmFyIGwgPSBzLmxlbmd0aDtcbiAgICB2YXIgYSwgYjtcbiAgICBpZiAoaSA8IDAgfHwgaSA+PSBsKSByZXR1cm4gVE9fU1RSSU5HID8gJycgOiB1bmRlZmluZWQ7XG4gICAgYSA9IHMuY2hhckNvZGVBdChpKTtcbiAgICByZXR1cm4gYSA8IDB4ZDgwMCB8fCBhID4gMHhkYmZmIHx8IGkgKyAxID09PSBsIHx8IChiID0gcy5jaGFyQ29kZUF0KGkgKyAxKSkgPCAweGRjMDAgfHwgYiA+IDB4ZGZmZlxuICAgICAgPyBUT19TVFJJTkcgPyBzLmNoYXJBdChpKSA6IGFcbiAgICAgIDogVE9fU1RSSU5HID8gcy5zbGljZShpLCBpICsgMikgOiAoYSAtIDB4ZDgwMCA8PCAxMCkgKyAoYiAtIDB4ZGMwMCkgKyAweDEwMDAwO1xuICB9O1xufTtcbiIsInZhciBjdHggPSByZXF1aXJlKCcuL19jdHgnKTtcbnZhciBpbnZva2UgPSByZXF1aXJlKCcuL19pbnZva2UnKTtcbnZhciBodG1sID0gcmVxdWlyZSgnLi9faHRtbCcpO1xudmFyIGNlbCA9IHJlcXVpcmUoJy4vX2RvbS1jcmVhdGUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgc2V0VGFzayA9IGdsb2JhbC5zZXRJbW1lZGlhdGU7XG52YXIgY2xlYXJUYXNrID0gZ2xvYmFsLmNsZWFySW1tZWRpYXRlO1xudmFyIE1lc3NhZ2VDaGFubmVsID0gZ2xvYmFsLk1lc3NhZ2VDaGFubmVsO1xudmFyIERpc3BhdGNoID0gZ2xvYmFsLkRpc3BhdGNoO1xudmFyIGNvdW50ZXIgPSAwO1xudmFyIHF1ZXVlID0ge307XG52YXIgT05SRUFEWVNUQVRFQ0hBTkdFID0gJ29ucmVhZHlzdGF0ZWNoYW5nZSc7XG52YXIgZGVmZXIsIGNoYW5uZWwsIHBvcnQ7XG52YXIgcnVuID0gZnVuY3Rpb24gKCkge1xuICB2YXIgaWQgPSArdGhpcztcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICBpZiAocXVldWUuaGFzT3duUHJvcGVydHkoaWQpKSB7XG4gICAgdmFyIGZuID0gcXVldWVbaWRdO1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gICAgZm4oKTtcbiAgfVxufTtcbnZhciBsaXN0ZW5lciA9IGZ1bmN0aW9uIChldmVudCkge1xuICBydW4uY2FsbChldmVudC5kYXRhKTtcbn07XG4vLyBOb2RlLmpzIDAuOSsgJiBJRTEwKyBoYXMgc2V0SW1tZWRpYXRlLCBvdGhlcndpc2U6XG5pZiAoIXNldFRhc2sgfHwgIWNsZWFyVGFzaykge1xuICBzZXRUYXNrID0gZnVuY3Rpb24gc2V0SW1tZWRpYXRlKGZuKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaSA9IDE7XG4gICAgd2hpbGUgKGFyZ3VtZW50cy5sZW5ndGggPiBpKSBhcmdzLnB1c2goYXJndW1lbnRzW2krK10pO1xuICAgIHF1ZXVlWysrY291bnRlcl0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3LWZ1bmNcbiAgICAgIGludm9rZSh0eXBlb2YgZm4gPT0gJ2Z1bmN0aW9uJyA/IGZuIDogRnVuY3Rpb24oZm4pLCBhcmdzKTtcbiAgICB9O1xuICAgIGRlZmVyKGNvdW50ZXIpO1xuICAgIHJldHVybiBjb3VudGVyO1xuICB9O1xuICBjbGVhclRhc2sgPSBmdW5jdGlvbiBjbGVhckltbWVkaWF0ZShpZCkge1xuICAgIGRlbGV0ZSBxdWV1ZVtpZF07XG4gIH07XG4gIC8vIE5vZGUuanMgMC44LVxuICBpZiAocmVxdWlyZSgnLi9fY29mJykocHJvY2VzcykgPT0gJ3Byb2Nlc3MnKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIHByb2Nlc3MubmV4dFRpY2soY3R4KHJ1biwgaWQsIDEpKTtcbiAgICB9O1xuICAvLyBTcGhlcmUgKEpTIGdhbWUgZW5naW5lKSBEaXNwYXRjaCBBUElcbiAgfSBlbHNlIGlmIChEaXNwYXRjaCAmJiBEaXNwYXRjaC5ub3cpIHtcbiAgICBkZWZlciA9IGZ1bmN0aW9uIChpZCkge1xuICAgICAgRGlzcGF0Y2gubm93KGN0eChydW4sIGlkLCAxKSk7XG4gICAgfTtcbiAgLy8gQnJvd3NlcnMgd2l0aCBNZXNzYWdlQ2hhbm5lbCwgaW5jbHVkZXMgV2ViV29ya2Vyc1xuICB9IGVsc2UgaWYgKE1lc3NhZ2VDaGFubmVsKSB7XG4gICAgY2hhbm5lbCA9IG5ldyBNZXNzYWdlQ2hhbm5lbCgpO1xuICAgIHBvcnQgPSBjaGFubmVsLnBvcnQyO1xuICAgIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gbGlzdGVuZXI7XG4gICAgZGVmZXIgPSBjdHgocG9ydC5wb3N0TWVzc2FnZSwgcG9ydCwgMSk7XG4gIC8vIEJyb3dzZXJzIHdpdGggcG9zdE1lc3NhZ2UsIHNraXAgV2ViV29ya2Vyc1xuICAvLyBJRTggaGFzIHBvc3RNZXNzYWdlLCBidXQgaXQncyBzeW5jICYgdHlwZW9mIGl0cyBwb3N0TWVzc2FnZSBpcyAnb2JqZWN0J1xuICB9IGVsc2UgaWYgKGdsb2JhbC5hZGRFdmVudExpc3RlbmVyICYmIHR5cGVvZiBwb3N0TWVzc2FnZSA9PSAnZnVuY3Rpb24nICYmICFnbG9iYWwuaW1wb3J0U2NyaXB0cykge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBnbG9iYWwucG9zdE1lc3NhZ2UoaWQgKyAnJywgJyonKTtcbiAgICB9O1xuICAgIGdsb2JhbC5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgbGlzdGVuZXIsIGZhbHNlKTtcbiAgLy8gSUU4LVxuICB9IGVsc2UgaWYgKE9OUkVBRFlTVEFURUNIQU5HRSBpbiBjZWwoJ3NjcmlwdCcpKSB7XG4gICAgZGVmZXIgPSBmdW5jdGlvbiAoaWQpIHtcbiAgICAgIGh0bWwuYXBwZW5kQ2hpbGQoY2VsKCdzY3JpcHQnKSlbT05SRUFEWVNUQVRFQ0hBTkdFXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaHRtbC5yZW1vdmVDaGlsZCh0aGlzKTtcbiAgICAgICAgcnVuLmNhbGwoaWQpO1xuICAgICAgfTtcbiAgICB9O1xuICAvLyBSZXN0IG9sZCBicm93c2Vyc1xuICB9IGVsc2Uge1xuICAgIGRlZmVyID0gZnVuY3Rpb24gKGlkKSB7XG4gICAgICBzZXRUaW1lb3V0KGN0eChydW4sIGlkLCAxKSwgMCk7XG4gICAgfTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSB7XG4gIHNldDogc2V0VGFzayxcbiAgY2xlYXI6IGNsZWFyVGFza1xufTtcbiIsInZhciB0b0ludGVnZXIgPSByZXF1aXJlKCcuL190by1pbnRlZ2VyJyk7XG52YXIgbWF4ID0gTWF0aC5tYXg7XG52YXIgbWluID0gTWF0aC5taW47XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpbmRleCwgbGVuZ3RoKSB7XG4gIGluZGV4ID0gdG9JbnRlZ2VyKGluZGV4KTtcbiAgcmV0dXJuIGluZGV4IDwgMCA/IG1heChpbmRleCArIGxlbmd0aCwgMCkgOiBtaW4oaW5kZXgsIGxlbmd0aCk7XG59O1xuIiwiLy8gNy4xLjQgVG9JbnRlZ2VyXG52YXIgY2VpbCA9IE1hdGguY2VpbDtcbnZhciBmbG9vciA9IE1hdGguZmxvb3I7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gaXNOYU4oaXQgPSAraXQpID8gMCA6IChpdCA+IDAgPyBmbG9vciA6IGNlaWwpKGl0KTtcbn07XG4iLCIvLyB0byBpbmRleGVkIG9iamVjdCwgdG9PYmplY3Qgd2l0aCBmYWxsYmFjayBmb3Igbm9uLWFycmF5LWxpa2UgRVMzIHN0cmluZ3NcbnZhciBJT2JqZWN0ID0gcmVxdWlyZSgnLi9faW9iamVjdCcpO1xudmFyIGRlZmluZWQgPSByZXF1aXJlKCcuL19kZWZpbmVkJyk7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdCkge1xuICByZXR1cm4gSU9iamVjdChkZWZpbmVkKGl0KSk7XG59O1xuIiwiLy8gNy4xLjE1IFRvTGVuZ3RoXG52YXIgdG9JbnRlZ2VyID0gcmVxdWlyZSgnLi9fdG8taW50ZWdlcicpO1xudmFyIG1pbiA9IE1hdGgubWluO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQpIHtcbiAgcmV0dXJuIGl0ID4gMCA/IG1pbih0b0ludGVnZXIoaXQpLCAweDFmZmZmZmZmZmZmZmZmKSA6IDA7IC8vIHBvdygyLCA1MykgLSAxID09IDkwMDcxOTkyNTQ3NDA5OTFcbn07XG4iLCIvLyA3LjEuMTMgVG9PYmplY3QoYXJndW1lbnQpXG52YXIgZGVmaW5lZCA9IHJlcXVpcmUoJy4vX2RlZmluZWQnKTtcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0KSB7XG4gIHJldHVybiBPYmplY3QoZGVmaW5lZChpdCkpO1xufTtcbiIsIi8vIDcuMS4xIFRvUHJpbWl0aXZlKGlucHV0IFssIFByZWZlcnJlZFR5cGVdKVxudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG4vLyBpbnN0ZWFkIG9mIHRoZSBFUzYgc3BlYyB2ZXJzaW9uLCB3ZSBkaWRuJ3QgaW1wbGVtZW50IEBAdG9QcmltaXRpdmUgY2FzZVxuLy8gYW5kIHRoZSBzZWNvbmQgYXJndW1lbnQgLSBmbGFnIC0gcHJlZmVycmVkIHR5cGUgaXMgYSBzdHJpbmdcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0LCBTKSB7XG4gIGlmICghaXNPYmplY3QoaXQpKSByZXR1cm4gaXQ7XG4gIHZhciBmbiwgdmFsO1xuICBpZiAoUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgaWYgKHR5cGVvZiAoZm4gPSBpdC52YWx1ZU9mKSA9PSAnZnVuY3Rpb24nICYmICFpc09iamVjdCh2YWwgPSBmbi5jYWxsKGl0KSkpIHJldHVybiB2YWw7XG4gIGlmICghUyAmJiB0eXBlb2YgKGZuID0gaXQudG9TdHJpbmcpID09ICdmdW5jdGlvbicgJiYgIWlzT2JqZWN0KHZhbCA9IGZuLmNhbGwoaXQpKSkgcmV0dXJuIHZhbDtcbiAgdGhyb3cgVHlwZUVycm9yKFwiQ2FuJ3QgY29udmVydCBvYmplY3QgdG8gcHJpbWl0aXZlIHZhbHVlXCIpO1xufTtcbiIsInZhciBpZCA9IDA7XG52YXIgcHggPSBNYXRoLnJhbmRvbSgpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoa2V5KSB7XG4gIHJldHVybiAnU3ltYm9sKCcuY29uY2F0KGtleSA9PT0gdW5kZWZpbmVkID8gJycgOiBrZXksICcpXycsICgrK2lkICsgcHgpLnRvU3RyaW5nKDM2KSk7XG59O1xuIiwidmFyIHN0b3JlID0gcmVxdWlyZSgnLi9fc2hhcmVkJykoJ3drcycpO1xudmFyIHVpZCA9IHJlcXVpcmUoJy4vX3VpZCcpO1xudmFyIFN5bWJvbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpLlN5bWJvbDtcbnZhciBVU0VfU1lNQk9MID0gdHlwZW9mIFN5bWJvbCA9PSAnZnVuY3Rpb24nO1xuXG52YXIgJGV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBzdG9yZVtuYW1lXSB8fCAoc3RvcmVbbmFtZV0gPVxuICAgIFVTRV9TWU1CT0wgJiYgU3ltYm9sW25hbWVdIHx8IChVU0VfU1lNQk9MID8gU3ltYm9sIDogdWlkKSgnU3ltYm9sLicgKyBuYW1lKSk7XG59O1xuXG4kZXhwb3J0cy5zdG9yZSA9IHN0b3JlO1xuIiwidmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgSVRFUkFUT1IgPSByZXF1aXJlKCcuL193a3MnKSgnaXRlcmF0b3InKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9fY29yZScpLmdldEl0ZXJhdG9yTWV0aG9kID0gZnVuY3Rpb24gKGl0KSB7XG4gIGlmIChpdCAhPSB1bmRlZmluZWQpIHJldHVybiBpdFtJVEVSQVRPUl1cbiAgICB8fCBpdFsnQEBpdGVyYXRvciddXG4gICAgfHwgSXRlcmF0b3JzW2NsYXNzb2YoaXQpXTtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgYWRkVG9VbnNjb3BhYmxlcyA9IHJlcXVpcmUoJy4vX2FkZC10by11bnNjb3BhYmxlcycpO1xudmFyIHN0ZXAgPSByZXF1aXJlKCcuL19pdGVyLXN0ZXAnKTtcbnZhciBJdGVyYXRvcnMgPSByZXF1aXJlKCcuL19pdGVyYXRvcnMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG5cbi8vIDIyLjEuMy40IEFycmF5LnByb3RvdHlwZS5lbnRyaWVzKClcbi8vIDIyLjEuMy4xMyBBcnJheS5wcm90b3R5cGUua2V5cygpXG4vLyAyMi4xLjMuMjkgQXJyYXkucHJvdG90eXBlLnZhbHVlcygpXG4vLyAyMi4xLjMuMzAgQXJyYXkucHJvdG90eXBlW0BAaXRlcmF0b3JdKClcbm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShBcnJheSwgJ0FycmF5JywgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gIHRoaXMuX3QgPSB0b0lPYmplY3QoaXRlcmF0ZWQpOyAvLyB0YXJnZXRcbiAgdGhpcy5faSA9IDA7ICAgICAgICAgICAgICAgICAgIC8vIG5leHQgaW5kZXhcbiAgdGhpcy5fayA9IGtpbmQ7ICAgICAgICAgICAgICAgIC8vIGtpbmRcbi8vIDIyLjEuNS4yLjEgJUFycmF5SXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBraW5kID0gdGhpcy5faztcbiAgdmFyIGluZGV4ID0gdGhpcy5faSsrO1xuICBpZiAoIU8gfHwgaW5kZXggPj0gTy5sZW5ndGgpIHtcbiAgICB0aGlzLl90ID0gdW5kZWZpbmVkO1xuICAgIHJldHVybiBzdGVwKDEpO1xuICB9XG4gIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgaW5kZXgpO1xuICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgT1tpbmRleF0pO1xuICByZXR1cm4gc3RlcCgwLCBbaW5kZXgsIE9baW5kZXhdXSk7XG59LCAndmFsdWVzJyk7XG5cbi8vIGFyZ3VtZW50c0xpc3RbQEBpdGVyYXRvcl0gaXMgJUFycmF5UHJvdG9fdmFsdWVzJSAoOS40LjQuNiwgOS40LjQuNylcbkl0ZXJhdG9ycy5Bcmd1bWVudHMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbmFkZFRvVW5zY29wYWJsZXMoJ2tleXMnKTtcbmFkZFRvVW5zY29wYWJsZXMoJ3ZhbHVlcycpO1xuYWRkVG9VbnNjb3BhYmxlcygnZW50cmllcycpO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gMTkuMS4zLjYgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZygpXG52YXIgY2xhc3NvZiA9IHJlcXVpcmUoJy4vX2NsYXNzb2YnKTtcbnZhciB0ZXN0ID0ge307XG50ZXN0W3JlcXVpcmUoJy4vX3drcycpKCd0b1N0cmluZ1RhZycpXSA9ICd6JztcbmlmICh0ZXN0ICsgJycgIT0gJ1tvYmplY3Qgel0nKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoT2JqZWN0LnByb3RvdHlwZSwgJ3RvU3RyaW5nJywgZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuICdbb2JqZWN0ICcgKyBjbGFzc29mKHRoaXMpICsgJ10nO1xuICB9LCB0cnVlKTtcbn1cbiIsIid1c2Ugc3RyaWN0JztcbnZhciBMSUJSQVJZID0gcmVxdWlyZSgnLi9fbGlicmFyeScpO1xudmFyIGdsb2JhbCA9IHJlcXVpcmUoJy4vX2dsb2JhbCcpO1xudmFyIGN0eCA9IHJlcXVpcmUoJy4vX2N0eCcpO1xudmFyIGNsYXNzb2YgPSByZXF1aXJlKCcuL19jbGFzc29mJyk7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgYUZ1bmN0aW9uID0gcmVxdWlyZSgnLi9fYS1mdW5jdGlvbicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGZvck9mID0gcmVxdWlyZSgnLi9fZm9yLW9mJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHRhc2sgPSByZXF1aXJlKCcuL190YXNrJykuc2V0O1xudmFyIG1pY3JvdGFzayA9IHJlcXVpcmUoJy4vX21pY3JvdGFzaycpKCk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcbnZhciBwcm9taXNlUmVzb2x2ZSA9IHJlcXVpcmUoJy4vX3Byb21pc2UtcmVzb2x2ZScpO1xudmFyIFBST01JU0UgPSAnUHJvbWlzZSc7XG52YXIgVHlwZUVycm9yID0gZ2xvYmFsLlR5cGVFcnJvcjtcbnZhciBwcm9jZXNzID0gZ2xvYmFsLnByb2Nlc3M7XG52YXIgJFByb21pc2UgPSBnbG9iYWxbUFJPTUlTRV07XG52YXIgaXNOb2RlID0gY2xhc3NvZihwcm9jZXNzKSA9PSAncHJvY2Vzcyc7XG52YXIgZW1wdHkgPSBmdW5jdGlvbiAoKSB7IC8qIGVtcHR5ICovIH07XG52YXIgSW50ZXJuYWwsIG5ld0dlbmVyaWNQcm9taXNlQ2FwYWJpbGl0eSwgT3duUHJvbWlzZUNhcGFiaWxpdHksIFdyYXBwZXI7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdHZW5lcmljUHJvbWlzZUNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eU1vZHVsZS5mO1xuXG52YXIgVVNFX05BVElWRSA9ICEhZnVuY3Rpb24gKCkge1xuICB0cnkge1xuICAgIC8vIGNvcnJlY3Qgc3ViY2xhc3Npbmcgd2l0aCBAQHNwZWNpZXMgc3VwcG9ydFxuICAgIHZhciBwcm9taXNlID0gJFByb21pc2UucmVzb2x2ZSgxKTtcbiAgICB2YXIgRmFrZVByb21pc2UgPSAocHJvbWlzZS5jb25zdHJ1Y3RvciA9IHt9KVtyZXF1aXJlKCcuL193a3MnKSgnc3BlY2llcycpXSA9IGZ1bmN0aW9uIChleGVjKSB7XG4gICAgICBleGVjKGVtcHR5LCBlbXB0eSk7XG4gICAgfTtcbiAgICAvLyB1bmhhbmRsZWQgcmVqZWN0aW9ucyB0cmFja2luZyBzdXBwb3J0LCBOb2RlSlMgUHJvbWlzZSB3aXRob3V0IGl0IGZhaWxzIEBAc3BlY2llcyB0ZXN0XG4gICAgcmV0dXJuIChpc05vZGUgfHwgdHlwZW9mIFByb21pc2VSZWplY3Rpb25FdmVudCA9PSAnZnVuY3Rpb24nKSAmJiBwcm9taXNlLnRoZW4oZW1wdHkpIGluc3RhbmNlb2YgRmFrZVByb21pc2U7XG4gIH0gY2F0Y2ggKGUpIHsgLyogZW1wdHkgKi8gfVxufSgpO1xuXG4vLyBoZWxwZXJzXG52YXIgaXNUaGVuYWJsZSA9IGZ1bmN0aW9uIChpdCkge1xuICB2YXIgdGhlbjtcbiAgcmV0dXJuIGlzT2JqZWN0KGl0KSAmJiB0eXBlb2YgKHRoZW4gPSBpdC50aGVuKSA9PSAnZnVuY3Rpb24nID8gdGhlbiA6IGZhbHNlO1xufTtcbnZhciBub3RpZnkgPSBmdW5jdGlvbiAocHJvbWlzZSwgaXNSZWplY3QpIHtcbiAgaWYgKHByb21pc2UuX24pIHJldHVybjtcbiAgcHJvbWlzZS5fbiA9IHRydWU7XG4gIHZhciBjaGFpbiA9IHByb21pc2UuX2M7XG4gIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgb2sgPSBwcm9taXNlLl9zID09IDE7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBydW4gPSBmdW5jdGlvbiAocmVhY3Rpb24pIHtcbiAgICAgIHZhciBoYW5kbGVyID0gb2sgPyByZWFjdGlvbi5vayA6IHJlYWN0aW9uLmZhaWw7XG4gICAgICB2YXIgcmVzb2x2ZSA9IHJlYWN0aW9uLnJlc29sdmU7XG4gICAgICB2YXIgcmVqZWN0ID0gcmVhY3Rpb24ucmVqZWN0O1xuICAgICAgdmFyIGRvbWFpbiA9IHJlYWN0aW9uLmRvbWFpbjtcbiAgICAgIHZhciByZXN1bHQsIHRoZW4sIGV4aXRlZDtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmIChoYW5kbGVyKSB7XG4gICAgICAgICAgaWYgKCFvaykge1xuICAgICAgICAgICAgaWYgKHByb21pc2UuX2ggPT0gMikgb25IYW5kbGVVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgICAgICAgICBwcm9taXNlLl9oID0gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGhhbmRsZXIgPT09IHRydWUpIHJlc3VsdCA9IHZhbHVlO1xuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKGRvbWFpbikgZG9tYWluLmVudGVyKCk7XG4gICAgICAgICAgICByZXN1bHQgPSBoYW5kbGVyKHZhbHVlKTsgLy8gbWF5IHRocm93XG4gICAgICAgICAgICBpZiAoZG9tYWluKSB7XG4gICAgICAgICAgICAgIGRvbWFpbi5leGl0KCk7XG4gICAgICAgICAgICAgIGV4aXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChyZXN1bHQgPT09IHJlYWN0aW9uLnByb21pc2UpIHtcbiAgICAgICAgICAgIHJlamVjdChUeXBlRXJyb3IoJ1Byb21pc2UtY2hhaW4gY3ljbGUnKSk7XG4gICAgICAgICAgfSBlbHNlIGlmICh0aGVuID0gaXNUaGVuYWJsZShyZXN1bHQpKSB7XG4gICAgICAgICAgICB0aGVuLmNhbGwocmVzdWx0LCByZXNvbHZlLCByZWplY3QpO1xuICAgICAgICAgIH0gZWxzZSByZXNvbHZlKHJlc3VsdCk7XG4gICAgICAgIH0gZWxzZSByZWplY3QodmFsdWUpO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBpZiAoZG9tYWluICYmICFleGl0ZWQpIGRvbWFpbi5leGl0KCk7XG4gICAgICAgIHJlamVjdChlKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIHdoaWxlIChjaGFpbi5sZW5ndGggPiBpKSBydW4oY2hhaW5baSsrXSk7IC8vIHZhcmlhYmxlIGxlbmd0aCAtIGNhbid0IHVzZSBmb3JFYWNoXG4gICAgcHJvbWlzZS5fYyA9IFtdO1xuICAgIHByb21pc2UuX24gPSBmYWxzZTtcbiAgICBpZiAoaXNSZWplY3QgJiYgIXByb21pc2UuX2gpIG9uVW5oYW5kbGVkKHByb21pc2UpO1xuICB9KTtcbn07XG52YXIgb25VbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICB0YXNrLmNhbGwoZ2xvYmFsLCBmdW5jdGlvbiAoKSB7XG4gICAgdmFyIHZhbHVlID0gcHJvbWlzZS5fdjtcbiAgICB2YXIgdW5oYW5kbGVkID0gaXNVbmhhbmRsZWQocHJvbWlzZSk7XG4gICAgdmFyIHJlc3VsdCwgaGFuZGxlciwgY29uc29sZTtcbiAgICBpZiAodW5oYW5kbGVkKSB7XG4gICAgICByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKGlzTm9kZSkge1xuICAgICAgICAgIHByb2Nlc3MuZW1pdCgndW5oYW5kbGVkUmVqZWN0aW9uJywgdmFsdWUsIHByb21pc2UpO1xuICAgICAgICB9IGVsc2UgaWYgKGhhbmRsZXIgPSBnbG9iYWwub251bmhhbmRsZWRyZWplY3Rpb24pIHtcbiAgICAgICAgICBoYW5kbGVyKHsgcHJvbWlzZTogcHJvbWlzZSwgcmVhc29uOiB2YWx1ZSB9KTtcbiAgICAgICAgfSBlbHNlIGlmICgoY29uc29sZSA9IGdsb2JhbC5jb25zb2xlKSAmJiBjb25zb2xlLmVycm9yKSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcignVW5oYW5kbGVkIHByb21pc2UgcmVqZWN0aW9uJywgdmFsdWUpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIC8vIEJyb3dzZXJzIHNob3VsZCBub3QgdHJpZ2dlciBgcmVqZWN0aW9uSGFuZGxlZGAgZXZlbnQgaWYgaXQgd2FzIGhhbmRsZWQgaGVyZSwgTm9kZUpTIC0gc2hvdWxkXG4gICAgICBwcm9taXNlLl9oID0gaXNOb2RlIHx8IGlzVW5oYW5kbGVkKHByb21pc2UpID8gMiA6IDE7XG4gICAgfSBwcm9taXNlLl9hID0gdW5kZWZpbmVkO1xuICAgIGlmICh1bmhhbmRsZWQgJiYgcmVzdWx0LmUpIHRocm93IHJlc3VsdC52O1xuICB9KTtcbn07XG52YXIgaXNVbmhhbmRsZWQgPSBmdW5jdGlvbiAocHJvbWlzZSkge1xuICByZXR1cm4gcHJvbWlzZS5faCAhPT0gMSAmJiAocHJvbWlzZS5fYSB8fCBwcm9taXNlLl9jKS5sZW5ndGggPT09IDA7XG59O1xudmFyIG9uSGFuZGxlVW5oYW5kbGVkID0gZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgdGFzay5jYWxsKGdsb2JhbCwgZnVuY3Rpb24gKCkge1xuICAgIHZhciBoYW5kbGVyO1xuICAgIGlmIChpc05vZGUpIHtcbiAgICAgIHByb2Nlc3MuZW1pdCgncmVqZWN0aW9uSGFuZGxlZCcsIHByb21pc2UpO1xuICAgIH0gZWxzZSBpZiAoaGFuZGxlciA9IGdsb2JhbC5vbnJlamVjdGlvbmhhbmRsZWQpIHtcbiAgICAgIGhhbmRsZXIoeyBwcm9taXNlOiBwcm9taXNlLCByZWFzb246IHByb21pc2UuX3YgfSk7XG4gICAgfVxuICB9KTtcbn07XG52YXIgJHJlamVjdCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICB2YXIgcHJvbWlzZSA9IHRoaXM7XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgcHJvbWlzZS5fdiA9IHZhbHVlO1xuICBwcm9taXNlLl9zID0gMjtcbiAgaWYgKCFwcm9taXNlLl9hKSBwcm9taXNlLl9hID0gcHJvbWlzZS5fYy5zbGljZSgpO1xuICBub3RpZnkocHJvbWlzZSwgdHJ1ZSk7XG59O1xudmFyICRyZXNvbHZlID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gIHZhciBwcm9taXNlID0gdGhpcztcbiAgdmFyIHRoZW47XG4gIGlmIChwcm9taXNlLl9kKSByZXR1cm47XG4gIHByb21pc2UuX2QgPSB0cnVlO1xuICBwcm9taXNlID0gcHJvbWlzZS5fdyB8fCBwcm9taXNlOyAvLyB1bndyYXBcbiAgdHJ5IHtcbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHRocm93IFR5cGVFcnJvcihcIlByb21pc2UgY2FuJ3QgYmUgcmVzb2x2ZWQgaXRzZWxmXCIpO1xuICAgIGlmICh0aGVuID0gaXNUaGVuYWJsZSh2YWx1ZSkpIHtcbiAgICAgIG1pY3JvdGFzayhmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB3cmFwcGVyID0geyBfdzogcHJvbWlzZSwgX2Q6IGZhbHNlIH07IC8vIHdyYXBcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICB0aGVuLmNhbGwodmFsdWUsIGN0eCgkcmVzb2x2ZSwgd3JhcHBlciwgMSksIGN0eCgkcmVqZWN0LCB3cmFwcGVyLCAxKSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAkcmVqZWN0LmNhbGwod3JhcHBlciwgZSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBwcm9taXNlLl92ID0gdmFsdWU7XG4gICAgICBwcm9taXNlLl9zID0gMTtcbiAgICAgIG5vdGlmeShwcm9taXNlLCBmYWxzZSk7XG4gICAgfVxuICB9IGNhdGNoIChlKSB7XG4gICAgJHJlamVjdC5jYWxsKHsgX3c6IHByb21pc2UsIF9kOiBmYWxzZSB9LCBlKTsgLy8gd3JhcFxuICB9XG59O1xuXG4vLyBjb25zdHJ1Y3RvciBwb2x5ZmlsbFxuaWYgKCFVU0VfTkFUSVZFKSB7XG4gIC8vIDI1LjQuMy4xIFByb21pc2UoZXhlY3V0b3IpXG4gICRQcm9taXNlID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIGFuSW5zdGFuY2UodGhpcywgJFByb21pc2UsIFBST01JU0UsICdfaCcpO1xuICAgIGFGdW5jdGlvbihleGVjdXRvcik7XG4gICAgSW50ZXJuYWwuY2FsbCh0aGlzKTtcbiAgICB0cnkge1xuICAgICAgZXhlY3V0b3IoY3R4KCRyZXNvbHZlLCB0aGlzLCAxKSwgY3R4KCRyZWplY3QsIHRoaXMsIDEpKTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICRyZWplY3QuY2FsbCh0aGlzLCBlcnIpO1xuICAgIH1cbiAgfTtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG4gIEludGVybmFsID0gZnVuY3Rpb24gUHJvbWlzZShleGVjdXRvcikge1xuICAgIHRoaXMuX2MgPSBbXTsgICAgICAgICAgICAgLy8gPC0gYXdhaXRpbmcgcmVhY3Rpb25zXG4gICAgdGhpcy5fYSA9IHVuZGVmaW5lZDsgICAgICAvLyA8LSBjaGVja2VkIGluIGlzVW5oYW5kbGVkIHJlYWN0aW9uc1xuICAgIHRoaXMuX3MgPSAwOyAgICAgICAgICAgICAgLy8gPC0gc3RhdGVcbiAgICB0aGlzLl9kID0gZmFsc2U7ICAgICAgICAgIC8vIDwtIGRvbmVcbiAgICB0aGlzLl92ID0gdW5kZWZpbmVkOyAgICAgIC8vIDwtIHZhbHVlXG4gICAgdGhpcy5faCA9IDA7ICAgICAgICAgICAgICAvLyA8LSByZWplY3Rpb24gc3RhdGUsIDAgLSBkZWZhdWx0LCAxIC0gaGFuZGxlZCwgMiAtIHVuaGFuZGxlZFxuICAgIHRoaXMuX24gPSBmYWxzZTsgICAgICAgICAgLy8gPC0gbm90aWZ5XG4gIH07XG4gIEludGVybmFsLnByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX3JlZGVmaW5lLWFsbCcpKCRQcm9taXNlLnByb3RvdHlwZSwge1xuICAgIC8vIDI1LjQuNS4zIFByb21pc2UucHJvdG90eXBlLnRoZW4ob25GdWxmaWxsZWQsIG9uUmVqZWN0ZWQpXG4gICAgdGhlbjogZnVuY3Rpb24gdGhlbihvbkZ1bGZpbGxlZCwgb25SZWplY3RlZCkge1xuICAgICAgdmFyIHJlYWN0aW9uID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsICRQcm9taXNlKSk7XG4gICAgICByZWFjdGlvbi5vayA9IHR5cGVvZiBvbkZ1bGZpbGxlZCA9PSAnZnVuY3Rpb24nID8gb25GdWxmaWxsZWQgOiB0cnVlO1xuICAgICAgcmVhY3Rpb24uZmFpbCA9IHR5cGVvZiBvblJlamVjdGVkID09ICdmdW5jdGlvbicgJiYgb25SZWplY3RlZDtcbiAgICAgIHJlYWN0aW9uLmRvbWFpbiA9IGlzTm9kZSA/IHByb2Nlc3MuZG9tYWluIDogdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYy5wdXNoKHJlYWN0aW9uKTtcbiAgICAgIGlmICh0aGlzLl9hKSB0aGlzLl9hLnB1c2gocmVhY3Rpb24pO1xuICAgICAgaWYgKHRoaXMuX3MpIG5vdGlmeSh0aGlzLCBmYWxzZSk7XG4gICAgICByZXR1cm4gcmVhY3Rpb24ucHJvbWlzZTtcbiAgICB9LFxuICAgIC8vIDI1LjQuNS4xIFByb21pc2UucHJvdG90eXBlLmNhdGNoKG9uUmVqZWN0ZWQpXG4gICAgJ2NhdGNoJzogZnVuY3Rpb24gKG9uUmVqZWN0ZWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnRoZW4odW5kZWZpbmVkLCBvblJlamVjdGVkKTtcbiAgICB9XG4gIH0pO1xuICBPd25Qcm9taXNlQ2FwYWJpbGl0eSA9IGZ1bmN0aW9uICgpIHtcbiAgICB2YXIgcHJvbWlzZSA9IG5ldyBJbnRlcm5hbCgpO1xuICAgIHRoaXMucHJvbWlzZSA9IHByb21pc2U7XG4gICAgdGhpcy5yZXNvbHZlID0gY3R4KCRyZXNvbHZlLCBwcm9taXNlLCAxKTtcbiAgICB0aGlzLnJlamVjdCA9IGN0eCgkcmVqZWN0LCBwcm9taXNlLCAxKTtcbiAgfTtcbiAgbmV3UHJvbWlzZUNhcGFiaWxpdHlNb2R1bGUuZiA9IG5ld1Byb21pc2VDYXBhYmlsaXR5ID0gZnVuY3Rpb24gKEMpIHtcbiAgICByZXR1cm4gQyA9PT0gJFByb21pc2UgfHwgQyA9PT0gV3JhcHBlclxuICAgICAgPyBuZXcgT3duUHJvbWlzZUNhcGFiaWxpdHkoQylcbiAgICAgIDogbmV3R2VuZXJpY1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICB9O1xufVxuXG4kZXhwb3J0KCRleHBvcnQuRyArICRleHBvcnQuVyArICRleHBvcnQuRiAqICFVU0VfTkFUSVZFLCB7IFByb21pc2U6ICRQcm9taXNlIH0pO1xucmVxdWlyZSgnLi9fc2V0LXRvLXN0cmluZy10YWcnKSgkUHJvbWlzZSwgUFJPTUlTRSk7XG5yZXF1aXJlKCcuL19zZXQtc3BlY2llcycpKFBST01JU0UpO1xuV3JhcHBlciA9IHJlcXVpcmUoJy4vX2NvcmUnKVtQUk9NSVNFXTtcblxuLy8gc3RhdGljc1xuJGV4cG9ydCgkZXhwb3J0LlMgKyAkZXhwb3J0LkYgKiAhVVNFX05BVElWRSwgUFJPTUlTRSwge1xuICAvLyAyNS40LjQuNSBQcm9taXNlLnJlamVjdChyKVxuICByZWplY3Q6IGZ1bmN0aW9uIHJlamVjdChyKSB7XG4gICAgdmFyIGNhcGFiaWxpdHkgPSBuZXdQcm9taXNlQ2FwYWJpbGl0eSh0aGlzKTtcbiAgICB2YXIgJCRyZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICAkJHJlamVjdChyKTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiRleHBvcnQoJGV4cG9ydC5TICsgJGV4cG9ydC5GICogKExJQlJBUlkgfHwgIVVTRV9OQVRJVkUpLCBQUk9NSVNFLCB7XG4gIC8vIDI1LjQuNC42IFByb21pc2UucmVzb2x2ZSh4KVxuICByZXNvbHZlOiBmdW5jdGlvbiByZXNvbHZlKHgpIHtcbiAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoTElCUkFSWSAmJiB0aGlzID09PSBXcmFwcGVyID8gJFByb21pc2UgOiB0aGlzLCB4KTtcbiAgfVxufSk7XG4kZXhwb3J0KCRleHBvcnQuUyArICRleHBvcnQuRiAqICEoVVNFX05BVElWRSAmJiByZXF1aXJlKCcuL19pdGVyLWRldGVjdCcpKGZ1bmN0aW9uIChpdGVyKSB7XG4gICRQcm9taXNlLmFsbChpdGVyKVsnY2F0Y2gnXShlbXB0eSk7XG59KSksIFBST01JU0UsIHtcbiAgLy8gMjUuNC40LjEgUHJvbWlzZS5hbGwoaXRlcmFibGUpXG4gIGFsbDogZnVuY3Rpb24gYWxsKGl0ZXJhYmxlKSB7XG4gICAgdmFyIEMgPSB0aGlzO1xuICAgIHZhciBjYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkoQyk7XG4gICAgdmFyIHJlc29sdmUgPSBjYXBhYmlsaXR5LnJlc29sdmU7XG4gICAgdmFyIHJlamVjdCA9IGNhcGFiaWxpdHkucmVqZWN0O1xuICAgIHZhciByZXN1bHQgPSBwZXJmb3JtKGZ1bmN0aW9uICgpIHtcbiAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgIHZhciBpbmRleCA9IDA7XG4gICAgICB2YXIgcmVtYWluaW5nID0gMTtcbiAgICAgIGZvck9mKGl0ZXJhYmxlLCBmYWxzZSwgZnVuY3Rpb24gKHByb21pc2UpIHtcbiAgICAgICAgdmFyICRpbmRleCA9IGluZGV4Kys7XG4gICAgICAgIHZhciBhbHJlYWR5Q2FsbGVkID0gZmFsc2U7XG4gICAgICAgIHZhbHVlcy5wdXNoKHVuZGVmaW5lZCk7XG4gICAgICAgIHJlbWFpbmluZysrO1xuICAgICAgICBDLnJlc29sdmUocHJvbWlzZSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAgICAgICBpZiAoYWxyZWFkeUNhbGxlZCkgcmV0dXJuO1xuICAgICAgICAgIGFscmVhZHlDYWxsZWQgPSB0cnVlO1xuICAgICAgICAgIHZhbHVlc1skaW5kZXhdID0gdmFsdWU7XG4gICAgICAgICAgLS1yZW1haW5pbmcgfHwgcmVzb2x2ZSh2YWx1ZXMpO1xuICAgICAgICB9LCByZWplY3QpO1xuICAgICAgfSk7XG4gICAgICAtLXJlbWFpbmluZyB8fCByZXNvbHZlKHZhbHVlcyk7XG4gICAgfSk7XG4gICAgaWYgKHJlc3VsdC5lKSByZWplY3QocmVzdWx0LnYpO1xuICAgIHJldHVybiBjYXBhYmlsaXR5LnByb21pc2U7XG4gIH0sXG4gIC8vIDI1LjQuNC40IFByb21pc2UucmFjZShpdGVyYWJsZSlcbiAgcmFjZTogZnVuY3Rpb24gcmFjZShpdGVyYWJsZSkge1xuICAgIHZhciBDID0gdGhpcztcbiAgICB2YXIgY2FwYWJpbGl0eSA9IG5ld1Byb21pc2VDYXBhYmlsaXR5KEMpO1xuICAgIHZhciByZWplY3QgPSBjYXBhYmlsaXR5LnJlamVjdDtcbiAgICB2YXIgcmVzdWx0ID0gcGVyZm9ybShmdW5jdGlvbiAoKSB7XG4gICAgICBmb3JPZihpdGVyYWJsZSwgZmFsc2UsIGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgICAgIEMucmVzb2x2ZShwcm9taXNlKS50aGVuKGNhcGFiaWxpdHkucmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIGlmIChyZXN1bHQuZSkgcmVqZWN0KHJlc3VsdC52KTtcbiAgICByZXR1cm4gY2FwYWJpbGl0eS5wcm9taXNlO1xuICB9XG59KTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciAkYXQgPSByZXF1aXJlKCcuL19zdHJpbmctYXQnKSh0cnVlKTtcblxuLy8gMjEuMS4zLjI3IFN0cmluZy5wcm90b3R5cGVbQEBpdGVyYXRvcl0oKVxucmVxdWlyZSgnLi9faXRlci1kZWZpbmUnKShTdHJpbmcsICdTdHJpbmcnLCBmdW5jdGlvbiAoaXRlcmF0ZWQpIHtcbiAgdGhpcy5fdCA9IFN0cmluZyhpdGVyYXRlZCk7IC8vIHRhcmdldFxuICB0aGlzLl9pID0gMDsgICAgICAgICAgICAgICAgLy8gbmV4dCBpbmRleFxuLy8gMjEuMS41LjIuMSAlU3RyaW5nSXRlcmF0b3JQcm90b3R5cGUlLm5leHQoKVxufSwgZnVuY3Rpb24gKCkge1xuICB2YXIgTyA9IHRoaXMuX3Q7XG4gIHZhciBpbmRleCA9IHRoaXMuX2k7XG4gIHZhciBwb2ludDtcbiAgaWYgKGluZGV4ID49IE8ubGVuZ3RoKSByZXR1cm4geyB2YWx1ZTogdW5kZWZpbmVkLCBkb25lOiB0cnVlIH07XG4gIHBvaW50ID0gJGF0KE8sIGluZGV4KTtcbiAgdGhpcy5faSArPSBwb2ludC5sZW5ndGg7XG4gIHJldHVybiB7IHZhbHVlOiBwb2ludCwgZG9uZTogZmFsc2UgfTtcbn0pO1xuIiwiLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS1maW5hbGx5XG4ndXNlIHN0cmljdCc7XG52YXIgJGV4cG9ydCA9IHJlcXVpcmUoJy4vX2V4cG9ydCcpO1xudmFyIGNvcmUgPSByZXF1aXJlKCcuL19jb3JlJyk7XG52YXIgZ2xvYmFsID0gcmVxdWlyZSgnLi9fZ2xvYmFsJyk7XG52YXIgc3BlY2llc0NvbnN0cnVjdG9yID0gcmVxdWlyZSgnLi9fc3BlY2llcy1jb25zdHJ1Y3RvcicpO1xudmFyIHByb21pc2VSZXNvbHZlID0gcmVxdWlyZSgnLi9fcHJvbWlzZS1yZXNvbHZlJyk7XG5cbiRleHBvcnQoJGV4cG9ydC5QICsgJGV4cG9ydC5SLCAnUHJvbWlzZScsIHsgJ2ZpbmFsbHknOiBmdW5jdGlvbiAob25GaW5hbGx5KSB7XG4gIHZhciBDID0gc3BlY2llc0NvbnN0cnVjdG9yKHRoaXMsIGNvcmUuUHJvbWlzZSB8fCBnbG9iYWwuUHJvbWlzZSk7XG4gIHZhciBpc0Z1bmN0aW9uID0gdHlwZW9mIG9uRmluYWxseSA9PSAnZnVuY3Rpb24nO1xuICByZXR1cm4gdGhpcy50aGVuKFxuICAgIGlzRnVuY3Rpb24gPyBmdW5jdGlvbiAoeCkge1xuICAgICAgcmV0dXJuIHByb21pc2VSZXNvbHZlKEMsIG9uRmluYWxseSgpKS50aGVuKGZ1bmN0aW9uICgpIHsgcmV0dXJuIHg7IH0pO1xuICAgIH0gOiBvbkZpbmFsbHksXG4gICAgaXNGdW5jdGlvbiA/IGZ1bmN0aW9uIChlKSB7XG4gICAgICByZXR1cm4gcHJvbWlzZVJlc29sdmUoQywgb25GaW5hbGx5KCkpLnRoZW4oZnVuY3Rpb24gKCkgeyB0aHJvdyBlOyB9KTtcbiAgICB9IDogb25GaW5hbGx5XG4gICk7XG59IH0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xuLy8gaHR0cHM6Ly9naXRodWIuY29tL3RjMzkvcHJvcG9zYWwtcHJvbWlzZS10cnlcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgbmV3UHJvbWlzZUNhcGFiaWxpdHkgPSByZXF1aXJlKCcuL19uZXctcHJvbWlzZS1jYXBhYmlsaXR5Jyk7XG52YXIgcGVyZm9ybSA9IHJlcXVpcmUoJy4vX3BlcmZvcm0nKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdQcm9taXNlJywgeyAndHJ5JzogZnVuY3Rpb24gKGNhbGxiYWNrZm4pIHtcbiAgdmFyIHByb21pc2VDYXBhYmlsaXR5ID0gbmV3UHJvbWlzZUNhcGFiaWxpdHkuZih0aGlzKTtcbiAgdmFyIHJlc3VsdCA9IHBlcmZvcm0oY2FsbGJhY2tmbik7XG4gIChyZXN1bHQuZSA/IHByb21pc2VDYXBhYmlsaXR5LnJlamVjdCA6IHByb21pc2VDYXBhYmlsaXR5LnJlc29sdmUpKHJlc3VsdC52KTtcbiAgcmV0dXJuIHByb21pc2VDYXBhYmlsaXR5LnByb21pc2U7XG59IH0pO1xuIiwidmFyICRpdGVyYXRvcnMgPSByZXF1aXJlKCcuL2VzNi5hcnJheS5pdGVyYXRvcicpO1xudmFyIGdldEtleXMgPSByZXF1aXJlKCcuL19vYmplY3Qta2V5cycpO1xudmFyIHJlZGVmaW5lID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUnKTtcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciBoaWRlID0gcmVxdWlyZSgnLi9faGlkZScpO1xudmFyIEl0ZXJhdG9ycyA9IHJlcXVpcmUoJy4vX2l0ZXJhdG9ycycpO1xudmFyIHdrcyA9IHJlcXVpcmUoJy4vX3drcycpO1xudmFyIElURVJBVE9SID0gd2tzKCdpdGVyYXRvcicpO1xudmFyIFRPX1NUUklOR19UQUcgPSB3a3MoJ3RvU3RyaW5nVGFnJyk7XG52YXIgQXJyYXlWYWx1ZXMgPSBJdGVyYXRvcnMuQXJyYXk7XG5cbnZhciBET01JdGVyYWJsZXMgPSB7XG4gIENTU1J1bGVMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgQ1NTU3R5bGVEZWNsYXJhdGlvbjogZmFsc2UsXG4gIENTU1ZhbHVlTGlzdDogZmFsc2UsXG4gIENsaWVudFJlY3RMaXN0OiBmYWxzZSxcbiAgRE9NUmVjdExpc3Q6IGZhbHNlLFxuICBET01TdHJpbmdMaXN0OiBmYWxzZSxcbiAgRE9NVG9rZW5MaXN0OiB0cnVlLFxuICBEYXRhVHJhbnNmZXJJdGVtTGlzdDogZmFsc2UsXG4gIEZpbGVMaXN0OiBmYWxzZSxcbiAgSFRNTEFsbENvbGxlY3Rpb246IGZhbHNlLFxuICBIVE1MQ29sbGVjdGlvbjogZmFsc2UsXG4gIEhUTUxGb3JtRWxlbWVudDogZmFsc2UsXG4gIEhUTUxTZWxlY3RFbGVtZW50OiBmYWxzZSxcbiAgTWVkaWFMaXN0OiB0cnVlLCAvLyBUT0RPOiBOb3Qgc3BlYyBjb21wbGlhbnQsIHNob3VsZCBiZSBmYWxzZS5cbiAgTWltZVR5cGVBcnJheTogZmFsc2UsXG4gIE5hbWVkTm9kZU1hcDogZmFsc2UsXG4gIE5vZGVMaXN0OiB0cnVlLFxuICBQYWludFJlcXVlc3RMaXN0OiBmYWxzZSxcbiAgUGx1Z2luOiBmYWxzZSxcbiAgUGx1Z2luQXJyYXk6IGZhbHNlLFxuICBTVkdMZW5ndGhMaXN0OiBmYWxzZSxcbiAgU1ZHTnVtYmVyTGlzdDogZmFsc2UsXG4gIFNWR1BhdGhTZWdMaXN0OiBmYWxzZSxcbiAgU1ZHUG9pbnRMaXN0OiBmYWxzZSxcbiAgU1ZHU3RyaW5nTGlzdDogZmFsc2UsXG4gIFNWR1RyYW5zZm9ybUxpc3Q6IGZhbHNlLFxuICBTb3VyY2VCdWZmZXJMaXN0OiBmYWxzZSxcbiAgU3R5bGVTaGVldExpc3Q6IHRydWUsIC8vIFRPRE86IE5vdCBzcGVjIGNvbXBsaWFudCwgc2hvdWxkIGJlIGZhbHNlLlxuICBUZXh0VHJhY2tDdWVMaXN0OiBmYWxzZSxcbiAgVGV4dFRyYWNrTGlzdDogZmFsc2UsXG4gIFRvdWNoTGlzdDogZmFsc2Vcbn07XG5cbmZvciAodmFyIGNvbGxlY3Rpb25zID0gZ2V0S2V5cyhET01JdGVyYWJsZXMpLCBpID0gMDsgaSA8IGNvbGxlY3Rpb25zLmxlbmd0aDsgaSsrKSB7XG4gIHZhciBOQU1FID0gY29sbGVjdGlvbnNbaV07XG4gIHZhciBleHBsaWNpdCA9IERPTUl0ZXJhYmxlc1tOQU1FXTtcbiAgdmFyIENvbGxlY3Rpb24gPSBnbG9iYWxbTkFNRV07XG4gIHZhciBwcm90byA9IENvbGxlY3Rpb24gJiYgQ29sbGVjdGlvbi5wcm90b3R5cGU7XG4gIHZhciBrZXk7XG4gIGlmIChwcm90bykge1xuICAgIGlmICghcHJvdG9bSVRFUkFUT1JdKSBoaWRlKHByb3RvLCBJVEVSQVRPUiwgQXJyYXlWYWx1ZXMpO1xuICAgIGlmICghcHJvdG9bVE9fU1RSSU5HX1RBR10pIGhpZGUocHJvdG8sIFRPX1NUUklOR19UQUcsIE5BTUUpO1xuICAgIEl0ZXJhdG9yc1tOQU1FXSA9IEFycmF5VmFsdWVzO1xuICAgIGlmIChleHBsaWNpdCkgZm9yIChrZXkgaW4gJGl0ZXJhdG9ycykgaWYgKCFwcm90b1trZXldKSByZWRlZmluZShwcm90bywga2V5LCAkaXRlcmF0b3JzW2tleV0sIHRydWUpO1xuICB9XG59XG4iLCJpbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4vRGlhbG9nXCJcclxuaW1wb3J0IHtJbnZlbnRvcnl9IGZyb20gXCIuLi9pdGVtcy9JbnZlbnRvcnlcIlxyXG5cclxuZXhwb3J0IGNsYXNzIENvbnRpbnVlRGlhbG9nIGV4dGVuZHMgRGlhbG9nXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgc3BlYWtlcjogc3RyaW5nLCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgcHJvdGVjdGVkIG5leHREaWFsb2c6IERpYWxvZylcclxuICAgIHtcclxuICAgICAgICBzdXBlcih0ZXh0LCBzcGVha2VyLCBhdWRpbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUdVSUVsZW1lbnQoZGl2OiBIVE1MRGl2RWxlbWVudCwgaW52ZW50OiBJbnZlbnRvcnkpOiBQcm9taXNlPERpYWxvZz5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RGlhbG9nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZGlhbG9nIHRleHRcclxuICAgICAgICAgICAgbGV0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgdHh0LmNsYXNzTGlzdC5hZGQoXCJjaGF0bXNnXCIpO1xyXG4gICAgICAgICAgICB0eHQuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgYnV0dG9uIHRvIGFkdmFuY2UgdG8gdGhlIG5leHQgZGlhbG9nXHJcbiAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICBidG4uY2xhc3NMaXN0LmFkZChcImNoYXRidG5cIik7XHJcbiAgICAgICAgICAgIGJ0bi5pbm5lckhUTUwgPSBcIkNvbnRpbnVlXCI7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYWxsIG5ldyBlbGVtZW50cyB0byBkaXZcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHR4dCk7XHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgY2FsbGJhY2sgZm9yIHRoZSBjb250aW51ZSBidXR0b25cclxuICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoZXZudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLm5leHREaWFsb2cpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7RGlhbG9nfSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5cclxuLy8gY29udmVyc2F0aW9uIGJldHdlZW4gdGhlIHBsYXllciBhbmQgYW4gTlBDXHJcbmV4cG9ydCBjbGFzcyBDb252ZXJzYXRpb25cclxue1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBmaXJzdERpYWxvZzogRGlhbG9nKSB7fVxyXG5cclxuICAgIHB1YmxpYyBnZXRGaXJzdERpYWxvZygpOiBEaWFsb2cge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmZpcnN0RGlhbG9nO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi4vaXRlbXMvSW52ZW50b3J5XCJcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBEaWFsb2dcclxue1xyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHRleHQ6IHN0cmluZywgcHJvdGVjdGVkIHNwZWFrZXI6IHN0cmluZywgcHJvdGVjdGVkIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50KSB7fVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCBjcmVhdGVHVUlFbGVtZW50KGRpdjogSFRNTERpdkVsZW1lbnQsIGludmVudDogSW52ZW50b3J5KTogUHJvbWlzZTxEaWFsb2c+O1xyXG5cclxuICAgIHB1YmxpYyBnZXRUZXh0KCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMudGV4dDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0U3BlYWtlcigpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnNwZWFrZXI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEF1ZGlvKCk6IEhUTUxBdWRpb0VsZW1lbnQge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmF1ZGlvO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7RGlhbG9nfSBmcm9tIFwiLi9EaWFsb2dcIlxyXG5pbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4uL2l0ZW1zL0ludmVudG9yeVwiXHJcblxyXG5leHBvcnQgY2xhc3MgT3B0aW9uRGlhbG9nIGV4dGVuZHMgRGlhbG9nXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHRleHQ6IHN0cmluZywgc3BlYWtlcjogc3RyaW5nLCBhdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgcHJvdGVjdGVkIG9wdGlvbnM6IHtbdGV4dDogc3RyaW5nXTogRGlhbG9nfSlcclxuICAgIHtcclxuICAgICAgICBzdXBlcih0ZXh0LCBzcGVha2VyLCBhdWRpbyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNyZWF0ZUdVSUVsZW1lbnQoZGl2OiBIVE1MRGl2RWxlbWVudCwgaW52ZW50OiBJbnZlbnRvcnkpOiBQcm9taXNlPERpYWxvZz5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8RGlhbG9nPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIC8vIGFkZCB0aGUgZGlhbG9nIHRleHRcclxuICAgICAgICAgICAgbGV0IHR4dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgdHh0LmNsYXNzTGlzdC5hZGQoXCJjaGF0bXNnXCIpO1xyXG4gICAgICAgICAgICB0eHQuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIHRleHQgZWxlbWVudCB0byBkaXZcclxuICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHR4dCk7XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYSBidXR0b24gZm9yIGVhY2ggZGlhbG9nIG9wdGlvblxyXG4gICAgICAgICAgICBmb3IobGV0IG9wdGlvbiBpbiB0aGlzLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIGxldCBidG4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiYnV0dG9uXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmNsYXNzTGlzdC5hZGQoXCJjaGF0YnRuXCIpO1xyXG4gICAgICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IG9wdGlvbjtcclxuICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFkZCBhIGNhbGxiYWNrIGZvciB0aGUgb3B0aW9uIGJ1dHRvblxyXG4gICAgICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoZXZudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUodGhpcy5vcHRpb25zW29wdGlvbl0pO1xyXG4gICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Q29udGludWVEaWFsb2d9IGZyb20gXCIuL0NvbnRpbnVlRGlhbG9nXCJcclxuaW1wb3J0IHtEaWFsb2d9IGZyb20gXCIuL0RpYWxvZ1wiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5pbXBvcnQge0ludmVudG9yeX0gZnJvbSBcIi4uL2l0ZW1zL0ludmVudG9yeVwiXHJcblxyXG5leHBvcnQgY2xhc3MgUmVjZWl2ZUl0ZW1EaWFsb2cgZXh0ZW5kcyBDb250aW51ZURpYWxvZ1xyXG57XHJcbiAgICBwcml2YXRlIHJlcGxhY2VkOiBib29sZWFuID0gZmFsc2U7ICAvLyB0cnVlIGlmZiB0aGUgcGxheWVyIGhhcyBhbHJlYWR5IGV4Y2hhbmdlZCBpdGVtcyBiZWZvcmVcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0ZXh0OiBzdHJpbmcsIHNwZWFrZXI6IHN0cmluZywgYXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIG5leHREaWFsb2c6IERpYWxvZywgcHJvdGVjdGVkIGl0ZW1zTG9zdDogQXJyYXk8SXRlbT4sIHByb3RlY3RlZCBpdGVtc1JlY2VpdmVkOiBBcnJheTxJdGVtPiwgcHJvdGVjdGVkIHJlcGxhY2VtZW50RGlhbG9nOiBEaWFsb2cpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIodGV4dCwgc3BlYWtlciwgYXVkaW8sIG5leHREaWFsb2cpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgaW52ZW50Q29udGFpbnNBbGxJdGVtcyhpbnZlbnQ6IEludmVudG9yeSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBsZXQgY29udGFpbnNBbGxJdGVtczogYm9vbGVhbiA9IHRydWU7XHJcbiAgICAgICAgZm9yKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtc0xvc3QpIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGludmVudCBkb2Vzbid0IGNvbnRhaW4gYW55IHJlcXVpcmVkIGl0ZW0sIHRoZW4gZXhpdFxyXG4gICAgICAgICAgICBpZighaW52ZW50LmNvbnRhaW5zSXRlbShpdGVtKSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbnNBbGxJdGVtcyA9IGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGNvbnRhaW5zQWxsSXRlbXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVJbnZlbnRvcnkoaW52ZW50OiBJbnZlbnRvcnkpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgLy8gcmVtb3ZlIGFsbCBpdGVtcyB0byBiZSByZW1vdmVkXHJcbiAgICAgICAgZm9yKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtc0xvc3QpIHtcclxuICAgICAgICAgICAgaW52ZW50LnJlbW92ZUl0ZW0oaXRlbSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBhZGQgYWxsIGl0ZW1zIHRvIGJlIGFkZGVkXHJcbiAgICAgICAgZm9yKGNvbnN0IGl0ZW0gb2YgdGhpcy5pdGVtc1JlY2VpdmVkKSB7XHJcbiAgICAgICAgICAgIGludmVudC5hZGRJdGVtKGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgY3JlYXRlR1VJRWxlbWVudChkaXY6IEhUTUxEaXZFbGVtZW50LCBpbnZlbnQ6IEludmVudG9yeSk6IFByb21pc2U8RGlhbG9nPlxyXG4gICAge1xyXG4gICAgICAgIGlmKHRoaXMucmVwbGFjZWQpIHtcclxuICAgICAgICAgICAgaWYodGhpcy5yZXBsYWNlbWVudERpYWxvZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yZXBsYWNlbWVudERpYWxvZy5jcmVhdGVHVUlFbGVtZW50KGRpdiwgaW52ZW50KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPERpYWxvZz4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb250YWluc0FsbEl0ZW1zOiBib29sZWFuID0gdGhpcy5pbnZlbnRDb250YWluc0FsbEl0ZW1zKGludmVudCk7XHJcbiAgICAgICAgICAgIGlmKGNvbnRhaW5zQWxsSXRlbXMpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdGVtc0xvc3QgYW5kIGFkZCBpdGVtc1JlY2VpdmVkIGZyb20vdG8gcGxheWVyJ3MgaW52ZW50b3J5XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUludmVudG9yeShpbnZlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgZGlhbG9nIHRleHRcclxuICAgICAgICAgICAgICAgIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICB0eHQuY2xhc3NMaXN0LmFkZChcImNoYXRtc2dcIik7XHJcbiAgICAgICAgICAgICAgICB0eHQuaW5uZXJIVE1MID0gdGhpcy50ZXh0O1xyXG4gICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKHR4dCk7ICAgLy8gYWRkIHRleHQgZWxlbWVudCB0byBkaXZcclxuXHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLml0ZW1zTG9zdCAhPSBudWxsICYmIHRoaXMuaXRlbXNMb3N0Lmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbXNMb3N0TGJsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxhYmVsXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zTG9zdExibC5jbGFzc0xpc3QuYWRkKFwiY2hhdGltZ2hlYWRlclwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc0xvc3RMYmwuaW5uZXJIVE1MID0gXCJZb3UgTG9zdFwiO1xyXG4gICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpdGVtc0xvc3RMYmwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYW4gaW1hZ2UgZm9yIGVhY2ggaXRlbSBsb3N0XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yKGxldCBpdGVtIG9mIHRoaXMuaXRlbXNMb3N0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuY2xhc3NMaXN0LmFkZChcImNoYXRpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5zcmMgPSBpdGVtLmdldEltYWdlUGF0aCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQoaW1nKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pdGVtc1JlY2VpdmVkICE9IG51bGwgJiYgdGhpcy5pdGVtc1JlY2VpdmVkLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbXNSZWNlaXZlZExibCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsYWJlbFwiKTtcclxuICAgICAgICAgICAgICAgICAgICBpdGVtc1JlY2VpdmVkTGJsLmNsYXNzTGlzdC5hZGQoXCJjaGF0aW1naGVhZGVyXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGl0ZW1zUmVjZWl2ZWRMYmwuaW5uZXJIVE1MID0gXCJZb3UgR2FpbmVkXCI7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2LmFwcGVuZENoaWxkKGl0ZW1zUmVjZWl2ZWRMYmwpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAvLyBhZGQgYW4gaW1hZ2UgZm9yIGVhY2ggaXRlbSByZWNlaXZlZFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaXRlbSBvZiB0aGlzLml0ZW1zUmVjZWl2ZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGltZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpbWdcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5jbGFzc0xpc3QuYWRkKFwiY2hhdGltZ1wiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLnNyYyA9IGl0ZW0uZ2V0SW1hZ2VQYXRoKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChpbWcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBwbGF5ZXIgaGFzIG1hZGUgZXhjaGFuZ2Ugc28gcmVwbGFjZSBkaWFsb2cgd2l0aCByZXBsYWNlbWVudCBkaWFsb2dcclxuICAgICAgICAgICAgICAgIHRoaXMucmVwbGFjZURpYWxvZygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgLy8gcGxheWVyIGludmVudG9yeSBkb2VzIG5vdCBjb250YWlucyBhbGwgcmVxdWlyZWQgaXRlbXMsIHRoZXJlZm9yZSwgZGlzcGxheSBmYWlsIHRleHRcclxuICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgZGlhbG9nIHRleHRcclxuICAgICAgICAgICAgICAgIGxldCB0eHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGFiZWxcIik7XHJcbiAgICAgICAgICAgICAgICB0eHQuY2xhc3NMaXN0LmFkZChcImNoYXRtc2dcIik7XHJcbiAgICAgICAgICAgICAgICB0eHQuaW5uZXJIVE1MID0gXCJZT1UgRE8gTk9UIEhBVkUgVEhFIFJFUVVJUkVEIElURU1TXCI7XHJcbiAgICAgICAgICAgICAgICBkaXYuYXBwZW5kQ2hpbGQodHh0KTsgICAvLyBhZGQgdGV4dCBlbGVtZW50IHRvIGRpdlxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYSBidXR0b24gdG8gYWR2YW5jZSB0byB0aGUgbmV4dCBkaWFsb2dcclxuICAgICAgICAgICAgbGV0IGJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICAgICAgICAgIGJ0bi5jbGFzc0xpc3QuYWRkKFwiY2hhdGJ0blwiKTtcclxuICAgICAgICAgICAgYnRuLmlubmVySFRNTCA9IFwiQ29udGludWVcIjtcclxuXHJcbiAgICAgICAgICAgIGRpdi5hcHBlbmRDaGlsZChidG4pO1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIGEgY2FsbGJhY2sgZm9yIHRoZSBjb250aW51ZSBidXR0b25cclxuICAgICAgICAgICAgYnRuLm9uY2xpY2sgPSAoZXZudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLm5leHREaWFsb2cpO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtc0xvc3QoKTogQXJyYXk8SXRlbT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc0xvc3Q7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW1zUmVjZWl2ZWQoKTogQXJyYXk8SXRlbT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtc1JlY2VpdmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXBsYWNlRGlhbG9nKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLnJlcGxhY2VkID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vSVNoYXBlXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBDaXJjbGUgaW1wbGVtZW50cyBJU2hhcGVcclxue1xyXG4gICAgcHVibGljIHg6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgeTogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyByYWRpdXM6IG51bWJlciA9IDEwO1xyXG4gICAgcHVibGljIGxpbmVXaWR0aDogbnVtYmVyID0gMjtcclxuICAgIHB1YmxpYyBjb2xvcjogc3RyaW5nID0gXCJyZWRcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih4OiBudW1iZXIsIHk6IG51bWJlciwgcmFkaXVzOiBudW1iZXIsIGNvbG9yOiBzdHJpbmcgPSBcInJlZFwiLCBsaW5lX3dpZHRoOiBudW1iZXIgPSAyKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLnJhZGl1cyA9IHJhZGl1cztcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBsaW5lX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHguYXJjKHRoaXMueCwgdGhpcy55LCB0aGlzLnJhZGl1cywgMCwgMiAqIE1hdGguUEkpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKCh5IC0gdGhpcy55KSAqKiAyICsgKHggLSB0aGlzLngpICoqIDIpIDw9IHRoaXMucmFkaXVzICoqIDI7XHJcbiAgICB9XHJcbn1cclxuIiwiaW1wb3J0IHtUcmlhbmdsZX0gZnJvbSBcIi4vVHJpYW5nbGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi9Qb2ludFwiXHJcblxyXG4vLyBuYXZtZXNoIHBhdGhmaW5kaW5nOiBodHRwczovL21lZGl1bS5jb20vQG1zY2Fuc2lhbi9hLXdpdGgtbmF2aWdhdGlvbi1tZXNoZXMtMjQ2ZmQ5ZTcyNDI0XHJcbmV4cG9ydCBjbGFzcyBOYXZNZXNoXHJcbntcclxuICAgIC8vIHZhbGlkIHJlZ2lvbnMgb2YgdGhlIG5hdm1lc2hcclxuICAgIHByaXZhdGUgdHJpczogQXJyYXk8VHJpYW5nbGU+O1xyXG5cclxuICAgIC8vIFRPRE8gLSBuZXcgc3lzdGVtIG9mIHRyaWFuZ2xlIHJlcHJlc2VudGF0aW9uXHJcbiAgICBwcml2YXRlIHZlcnRpY2VzOiBBcnJheTxQb2ludD47XHJcbiAgICBwcml2YXRlIGVkZ2VzOiBBcnJheTx7djE6IG51bWJlciwgdjI6IG51bWJlcn0+OyAgICAgICAgIC8vIHYxIGFuZCB2MiBhcmUgaW5kaWNlcyBpbnRvIHZlcnRpY2VzIGxpc3RcclxuICAgIHByaXZhdGUgb3V0ZXJFZGdlczogQXJyYXk8e3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9PjsgICAgLy8gZWRnZXMgd2hpY2ggb25seSBhcHBlYXIgaW4gMSB0cmlcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcih0cmlzOiBBcnJheTxUcmlhbmdsZT4pIHtcclxuICAgICAgICB0aGlzLnRyaXMgPSB0cmlzID8gdHJpcyA6IFtdO1xyXG4gICAgICAgIHRoaXMudmVydGljZXMgPSBbXTtcclxuICAgICAgICB0aGlzLmVkZ2VzID0gW107XHJcbiAgICAgICAgdGhpcy5vdXRlckVkZ2VzID0gW107XHJcblxyXG4gICAgICAgIC8vIGluaXRpYWxpc2UgdmVydGljZXMgYW5kIGVkZ2VzIGxpc3RcclxuICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRyaXMpIHtcclxuICAgICAgICAgICAgbGV0IHAxSW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50MSk7XHJcbiAgICAgICAgICAgIGxldCBwMkluZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDIpO1xyXG4gICAgICAgICAgICBsZXQgcDNJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQzKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHZlcnRleCBpcyBub3QgaW4gdGhlIGxpc3QsIGFkZCBpdCB0byB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZihwMUluZGV4ID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcy5wdXNoKHRyaS5wb2ludDEpO1xyXG4gICAgICAgICAgICAgICAgcDFJbmRleCA9IHRoaXMuaW5kZXhPZlZlcnRleCh0aGlzLnZlcnRpY2VzLCB0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyBpZiB2ZXJ0ZXggaXMgbm90IGluIHRoZSBsaXN0LCBhZGQgaXQgdG8gdGhlIGxpc3RcclxuICAgICAgICAgICAgaWYocDJJbmRleCA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMudmVydGljZXMucHVzaCh0cmkucG9pbnQyKTtcclxuICAgICAgICAgICAgICAgIHAySW5kZXggPSB0aGlzLmluZGV4T2ZWZXJ0ZXgodGhpcy52ZXJ0aWNlcywgdHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy8gaWYgdmVydGV4IGlzIG5vdCBpbiB0aGUgbGlzdCwgYWRkIGl0IHRvIHRoZSBsaXN0XHJcbiAgICAgICAgICAgIGlmKHAzSW5kZXggPT09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnZlcnRpY2VzLnB1c2godHJpLnBvaW50Myk7XHJcbiAgICAgICAgICAgICAgICBwM0luZGV4ID0gdGhpcy5pbmRleE9mVmVydGV4KHRoaXMudmVydGljZXMsIHRyaS5wb2ludDMpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBhZGQgYWxsIDMgZWRnZXMgb2YgdGhlIHRyaSB0byB0aGUgZWRnZXMgbGlzdFxyXG4gICAgICAgICAgICBjb25zdCBlZGdlMSA9IHt2MTogcDFJbmRleCwgdjI6IHAySW5kZXh9O1xyXG4gICAgICAgICAgICBjb25zdCBlZGdlMiA9IHt2MTogcDJJbmRleCwgdjI6IHAzSW5kZXh9O1xyXG4gICAgICAgICAgICBjb25zdCBlZGdlMyA9IHt2MTogcDNJbmRleCwgdjI6IHAxSW5kZXh9O1xyXG5cclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBlZGdlcyBpZiB0aGV5IGFyZSBub3QgYWxyZWFkeSBpbiB0aGUgbGlzdFxyXG4gICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZFZGdlKHRoaXMuZWRnZXMsIGVkZ2UxKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlMSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMucHVzaChlZGdlMSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMuc3BsaWNlKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5vdXRlckVkZ2VzLCBlZGdlMSksIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZFZGdlKHRoaXMuZWRnZXMsIGVkZ2UyKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlMik7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMucHVzaChlZGdlMik7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMuc3BsaWNlKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5vdXRlckVkZ2VzLCBlZGdlMiksIDEpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZih0aGlzLmluZGV4T2ZFZGdlKHRoaXMuZWRnZXMsIGVkZ2UzKSA9PT0gLTEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZWRnZXMucHVzaChlZGdlMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMucHVzaChlZGdlMyk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLm91dGVyRWRnZXMuc3BsaWNlKHRoaXMuaW5kZXhPZkVkZ2UodGhpcy5vdXRlckVkZ2VzLCBlZGdlMyksIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy52ZXJ0aWNlcyk7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmVkZ2VzKTtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMub3V0ZXJFZGdlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFdheXBvaW50cyA9IChjdXJyZW50WDogbnVtYmVyLCBjdXJyZW50WTogbnVtYmVyLCB0YXJnZXRYOiBudW1iZXIsIHRhcmdldFk6IG51bWJlcik6IEFycmF5PFBvaW50PiA9PiB7XHJcbiAgICAgICAgZm9yKGxldCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIC8vIGFsbG93IGZyZWUgbW92ZW1lbnQgd2l0aGluIGEgdHJpYW5nbGVcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHRhcmdldFgsIHRhcmdldFkpICYmIHRyaS5jb250YWlucyhjdXJyZW50WCwgY3VycmVudFkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gW25ldyBQb2ludCh0YXJnZXRYLCB0YXJnZXRZKV07XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIC8vIGlmIGJvdGggcG9pbnRzIGZhbGwgdW5kZXIgZGlmZmVyZW50IHRyaWFuZ2xlcywgZmluZCB0aGUgYSB3YXlwb2ludCB0byByZWFjaCB0aGUgbmV4dCB0cmlcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHRhcmdldFgsIHRhcmdldFkpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAvL3JldHVybiBuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvYmogPSB0aGlzLmZpbmRQYXRoKG5ldyBQb2ludChjdXJyZW50WCwgY3VycmVudFkpLCBuZXcgUG9pbnQodGFyZ2V0WCwgdGFyZ2V0WSkpO1xyXG4gICAgICAgICAgICAgICAgaWYob2JqICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcm91dGU6IEFycmF5PFBvaW50PiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHJvdXRlLnB1c2gobmV3IFBvaW50KHRhcmdldFgsIHRhcmdldFkpKTsgICAgLy8gZ28gZnJvbSBsYXN0IHBvaW50IHRvIHRoZSBlbmQgcG9pbnRcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJ1aWxkUm91dGUob2JqLmNhbWVGcm9tLCBvYmouZW5kVmVydGV4LCByb3V0ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWR1Y2VSb3V0ZShyb3V0ZSk7ICAgIC8vIHJlbW92ZSByZWR1bmRhbnQgbm9kZXMgZnJvbSB0aGUgcGF0aFxyXG4gICAgICAgICAgICAgICAgICAgIGlmKHJvdXRlLmxlbmd0aCA+IDApICAgICAgICAvLyBsYXN0IHdheXBvaW50IHdpbGwgYmUgc3RhcnQgLT4gZ2V0IHJpZCBvZiBpdFxyXG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZS5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInJvdXRlOiBcIiArIHJvdXRlKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcm91dGU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZW1vdmUgdW5lY2Vzc2FyeSB3YXlwb2ludHMgZnJvbSB0aGUgcm91dGUsIGkuZS4gaWYgdGhlaXIgaXMgYSBzdHJhaWdodCBwYXRoIGZyb20gYSB0byBjLCByZW1vdmUgYlxyXG4gICAgcHJpdmF0ZSByZWR1Y2VSb3V0ZSA9IChyb3V0ZTogQXJyYXk8UG9pbnQ+KSA9PiB7XHJcbiAgICAgICAgbGV0IGluZGV4ID0gMDtcclxuICAgICAgICAvLyBsb29wIHVudGlsIG5vIG1vcmUgcmVkdWN0aW9ucyBjYW4gYmUgbWFkZVxyXG4gICAgICAgIHdoaWxlKGluZGV4IDwgcm91dGUubGVuZ3RoIC0gMikge1xyXG4gICAgICAgICAgICBjb25zdCBhID0gcm91dGVbaW5kZXhdXHJcbiAgICAgICAgICAgIGNvbnN0IGMgPSByb3V0ZVtpbmRleCArIDJdXHJcblxyXG4gICAgICAgICAgICAvLyB0aGVyZSBpcyBhIHZhbGlkIHN0cmFpZ2h0IHBhdGggYmV0d2VlbiBhIGFuZCBjIGlmIHRoZSBwYXRoIGRvZXMgbm90IGludGVyc2VjdCBhbiBvdXRlciBlZGdlXHJcbiAgICAgICAgICAgIGxldCBpbnRlcnNlY3RzT3V0ZXJFZGdlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGZvcihjb25zdCBvdXRlckVkZ2Ugb2YgdGhpcy5vdXRlckVkZ2VzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLmRvTGluZVNlZ21lbnRzSW50ZXJzZWN0KHRoaXMudmVydGljZXNbb3V0ZXJFZGdlLnYxXSwgdGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjJdLCBhLCBjKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coYS50b1N0cmluZygpLCBjLnRvU3RyaW5nKCksIFwiaW50ZXJzZWN0c1wiLCB0aGlzLnZlcnRpY2VzW291dGVyRWRnZS52MV0udG9TdHJpbmcoKSwgdGhpcy52ZXJ0aWNlc1tvdXRlckVkZ2UudjJdLnRvU3RyaW5nKCkpXHJcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJzZWN0c091dGVyRWRnZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGlmIHRoZSBwYXRoIGRvZXMgbm90IGludGVyc2VjdCBhbiBvdXRlciBlZGdlLCByZW1vdmUgd2F5cG9pbnQgYlxyXG4gICAgICAgICAgICBpZighaW50ZXJzZWN0c091dGVyRWRnZSkge1xyXG4gICAgICAgICAgICAgICAgcm91dGUuc3BsaWNlKGluZGV4KzEsIDEpO1xyXG4gICAgICAgICAgICAgICAgLy8gZG9uJ3QgbmVlZCB0byBpbmNyZW1lbnQgaW5kZXggc2luY2UgYXJyYXkgbGVuZ3RoIGhhcyBiZWVuIHJlZHVjZWRcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG1vdmUgb250byBuZXh0IHBhaXIgb2Ygd2F5cG9pbnRzXHJcbiAgICAgICAgICAgICAgICBpbmRleCArKztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGJ1aWxkUm91dGUgPSAoY2FtZUZyb206IHt9LCB2ZXJ0ZXg6IFBvaW50LCByb3V0ZTogQXJyYXk8UG9pbnQ+KSA9PiB7XHJcbiAgICAgICAgcm91dGUucHVzaCh2ZXJ0ZXgpOyAvLyByb3V0ZSBpcyByZWFkIGluIHJldmVyc2Ugb3JkZXJcclxuICAgICAgICBpZihjYW1lRnJvbVt2ZXJ0ZXgudG9TdHJpbmcoKV0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB0aGlzLmJ1aWxkUm91dGUoY2FtZUZyb20sIGNhbWVGcm9tW3ZlcnRleC50b1N0cmluZygpXS5ub2RlLCByb3V0ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIHVzZSB0aGUgQSogYWxnb3JpdGhtIHRvIGZpbmQgYSBzaG9ydGVzdCBwYXRoIHRocm91Z2ggdGhlIG5hdm1lc2hcclxuICAgIHByaXZhdGUgZmluZFBhdGggPSAoc3RhcnQ6IFBvaW50LCBlbmQ6IFBvaW50KToge2NhbWVGcm9tOiB7fSwgZW5kVmVydGV4OiBQb2ludH0gPT4ge1xyXG4gICAgICAgIGxldCBvcGVuID0gW3tub2RlOiBzdGFydCwgcHJpb3JpdHk6IDB9XTsgICAgLy8gbG93ZXN0IHByaW9yaXR5ID0gMFxyXG4gICAgICAgIGxldCBjbG9zZWQgPSBbXTtcclxuXHJcbiAgICAgICAgLy8gZmluZCB0aGUgdHJpYW5nbGUgY29udGFpbmluZyB0aGUgc3RhcnQgcG9pbnRcclxuICAgICAgICBsZXQgc3RhcnRUcmk7XHJcbiAgICAgICAgZm9yKGNvbnN0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHN0YXJ0LngsIHN0YXJ0LnkpKSB7XHJcbiAgICAgICAgICAgICAgICBzdGFydFRyaSA9IHRyaTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmKHN0YXJ0VHJpID09IG51bGwpIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyBmaW5kIHRoZSB0cmlhbmdsZSBjb250YWluaW5nIHRoZSBlbmQgcG9pbnRcclxuICAgICAgICBsZXQgZW5kVHJpO1xyXG4gICAgICAgIGZvcihjb25zdCB0cmkgb2YgdGhpcy50cmlzKSB7XHJcbiAgICAgICAgICAgIGlmKHRyaS5jb250YWlucyhlbmQueCwgZW5kLnkpKSB7XHJcbiAgICAgICAgICAgICAgICBlbmRUcmkgPSB0cmk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZihlbmRUcmkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGdbaV0gaXMgdGhlIGNvc3QgdG8gZ2V0IHRvIGkgZnJvbSB0aGUgc3RhcnQgdmVydGV4XHJcbiAgICAgICAgbGV0IGcgPSB7fTtcclxuICAgICAgICBsZXQgY2FtZUZyb20gPSB7fTtcclxuICAgICAgICBnW3N0YXJ0LnRvU3RyaW5nKCldID0gMDtcclxuICAgICAgICBjYW1lRnJvbVtzdGFydC50b1N0cmluZygpXSA9IG51bGw7XHJcblxyXG4gICAgICAgIC8vIGV4ZWN1dGUgQSogYWxnb3JpdGhtXHJcbiAgICAgICAgLy8gcHNldWRvY29kZTogaHR0cDovL3RoZW9yeS5zdGFuZm9yZC5lZHUvfmFtaXRwL0dhbWVQcm9ncmFtbWluZy9JbXBsZW1lbnRhdGlvbk5vdGVzLmh0bWxcclxuICAgICAgICB3aGlsZShvcGVuLmxlbmd0aCA+IDAgJiYgIWVuZFRyaS5pc1ZlcnRleChvcGVuWzBdLm5vZGUpKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBvcGVuLnNoaWZ0KCk7ICAvLyByZW1vdmUgZmlyc3QgaXRlbSBmcm9tIG9wZW4gKGl0ZW0gd2l0aCBsb3dlc3QgcHJpb3JpdHkpXHJcbiAgICAgICAgICAgIGNsb3NlZC5wdXNoKGN1cnJlbnQpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwiY3VycmVudCB2ZXJ0ZXg6IFwiICsgY3VycmVudC5ub2RlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgbmVpZ2hib3VyIG9mIHRoaXMuZ2V0TmVpZ2hib3VycyhjdXJyZW50Lm5vZGUpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsZXQgY29zdCA9IGdbY3VycmVudC5ub2RlLnRvU3RyaW5nKCldICsgdGhpcy5nZXRFZGdlQ29zdChjdXJyZW50Lm5vZGUsIG5laWdoYm91cik7XHJcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKFwibmVpZ2hib3VyOiBcIiArIG5laWdoYm91ci50b1N0cmluZygpICsgXCIsIGNvc3Q6IFwiICsgY29zdCk7XHJcbiAgICAgICAgICAgICAgICAvLyBuZWlnaGJvdXIgaW4gb3BlblxyXG4gICAgICAgICAgICAgICAgaWYodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKG9wZW4sIG5laWdoYm91cikgIT09IC0xICYmIGNvc3QgPCBnW25laWdoYm91ci50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW4uc3BsaWNlKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShvcGVuLCBuZWlnaGJvdXIpLCAxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vIG5laWdoYm91ciBpbiBjbG9zZWRcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShjbG9zZWQsIG5laWdoYm91cikgIT09IC0xICYmIGNvc3QgPCBnW25laWdoYm91ci50b1N0cmluZygpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsb3NlZC5zcGxpY2UodGhpcy5pbmRleE9mUHJpb3JpdHlOb2RlKGNsb3NlZCwgbmVpZ2hib3VyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBuZWlnaGJvdXIgbmVpdGhlciBpbiBvcGVuIG5vciBjbG9zZWRcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaW5kZXhPZlByaW9yaXR5Tm9kZShvcGVuLCBuZWlnaGJvdXIpID09PSAtMSAmJiB0aGlzLmluZGV4T2ZQcmlvcml0eU5vZGUoY2xvc2VkLCBuZWlnaGJvdXIpID09PSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdbbmVpZ2hib3VyLnRvU3RyaW5nKCldID0gY29zdDtcclxuICAgICAgICAgICAgICAgICAgICBjYW1lRnJvbVtuZWlnaGJvdXIudG9TdHJpbmcoKV0gPSBjdXJyZW50O1xyXG4gICAgICAgICAgICAgICAgICAgIG9wZW4ucHVzaCh7bm9kZTogbmVpZ2hib3VyLCBwcmlvcml0eTogY29zdH0pOyAvLyBUT0RPIC0gcHJpb3JpdHkgPSBjb3N0ICsgaChuZWlnaGJvdXIpXHJcbiAgICAgICAgICAgICAgICAgICAgb3Blbi5zb3J0KChhLCBiKSA9PiB7ICAgLy8gc29ydCBvcGVuIHF1ZXVlIGJ5IHByaW9yaXR5XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhLnByaW9yaXR5IC0gYi5wcmlvcml0eTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvcGVuLmxlbmd0aCA+IDAgPyBcImVuZDogXCIgKyBvcGVuWzBdLm5vZGUudG9TdHJpbmcoKSA6IFwibm8gcGF0aFwiKTtcclxuICAgICAgICByZXR1cm4gb3Blbi5sZW5ndGggPiAwID8ge2NhbWVGcm9tOiBjYW1lRnJvbSwgZW5kVmVydGV4OiBvcGVuWzBdLm5vZGV9IDogbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBmb3IobGV0IHRyaSBvZiB0aGlzLnRyaXMpIHtcclxuICAgICAgICAgICAgdHJpLmRyYXcoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyB0aGUgY29zdCBvZiB0cmF2ZXJzaW5nIGFuIGVkZ2UgYmV0d2VlbiBwMSBhbmQgcDJcclxuICAgIHByaXZhdGUgZ2V0RWRnZUNvc3QgPSAocDE6IFBvaW50LCBwMjogUG9pbnQpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIHJldHVybiBNYXRoLnNxcnQoKHAxLnggLSBwMi54KSAqKiAyICsgKHAxLnkgLSBwMi55KSAqKiAyKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gYSBsaXN0IG9mIHZlcnRjaWVzIHdoaWNoIGFyZSBhZGphY2VudCB0byB0aGUgdmVydGV4IHBcclxuICAgIHByaXZhdGUgZ2V0TmVpZ2hib3VycyA9IChwOiBQb2ludCk6IEFycmF5PFBvaW50PiA9PiB7XHJcbiAgICAgICAgbGV0IG5laWdoYm91cnM6IEFycmF5PFBvaW50PiA9IFtdO1xyXG4gICAgICAgIGZvcihjb25zdCBlZGdlIG9mIHRoaXMuZWRnZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBpZih0aGlzLnZlcnRpY2VzW2VkZ2UudjFdLmVxdWFscyhwKSkge1xyXG4gICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRoaXMudmVydGljZXNbZWRnZS52Ml0pO1xyXG4gICAgICAgICAgICB9IGVsc2UgaWYodGhpcy52ZXJ0aWNlc1tlZGdlLnYyXS5lcXVhbHMocCkpIHtcclxuICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0aGlzLnZlcnRpY2VzW2VkZ2UudjFdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gaWYgdGhlIHZlcnRleCBpcyBub3QgYSB2ZXJ0ZXggb2YgYSB0cmlhbmdsZSwgY2hlY2sgaWYgaXQgaXMgd2l0aGluIGEgdHJpYW5nbGVcclxuICAgICAgICBpZihuZWlnaGJvdXJzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgdHJpIG9mIHRoaXMudHJpcykge1xyXG4gICAgICAgICAgICAgICAgaWYodHJpLmNvbnRhaW5zKHAueCwgcC55KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5laWdoYm91cnMucHVzaCh0cmkucG9pbnQxKTtcclxuICAgICAgICAgICAgICAgICAgICBuZWlnaGJvdXJzLnB1c2godHJpLnBvaW50Mik7XHJcbiAgICAgICAgICAgICAgICAgICAgbmVpZ2hib3Vycy5wdXNoKHRyaS5wb2ludDMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBuZWlnaGJvdXJzO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGFuc3dlciAyIGZyb206IGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzU2MzE5OC9ob3ctZG8teW91LWRldGVjdC13aGVyZS10d28tbGluZS1zZWdtZW50cy1pbnRlcnNlY3RcclxuICAgIHByaXZhdGUgZG9MaW5lU2VnbWVudHNJbnRlcnNlY3QgPSAoZTF2MTogUG9pbnQsIGUxdjI6IFBvaW50LCBlMnYxOiBQb2ludCwgZTJ2MjogUG9pbnQpOiBib29sZWFuID0+IHtcclxuICAgICAgICBjb25zdCBwMF94ID0gZTF2MS54O1xyXG4gICAgICAgIGNvbnN0IHAwX3kgPSBlMXYxLnk7XHJcbiAgICAgICAgY29uc3QgcDFfeCA9IGUxdjIueDtcclxuICAgICAgICBjb25zdCBwMV95ID0gZTF2Mi55O1xyXG4gICAgICAgIGNvbnN0IHAyX3ggPSBlMnYxLng7XHJcbiAgICAgICAgY29uc3QgcDJfeSA9IGUydjEueTtcclxuICAgICAgICBjb25zdCBwM194ID0gZTJ2Mi54O1xyXG4gICAgICAgIGNvbnN0IHAzX3kgPSBlMnYyLnk7XHJcblxyXG4gICAgICAgIGxldCBzMV94LCBzMV95LCBzMl94LCBzMl95O1xyXG4gICAgICAgIHMxX3ggPSBwMV94IC0gcDBfeDtcclxuICAgICAgICBzMV95ID0gcDFfeSAtIHAwX3k7XHJcbiAgICAgICAgczJfeCA9IHAzX3ggLSBwMl94O1xyXG4gICAgICAgIHMyX3kgPSBwM195IC0gcDJfeTtcclxuXHJcbiAgICAgICAgbGV0IHMsIHQ7XHJcbiAgICAgICAgcyA9ICgtczFfeSAqIChwMF94IC0gcDJfeCkgKyBzMV94ICogKHAwX3kgLSBwMl95KSkgLyAoLXMyX3ggKiBzMV95ICsgczFfeCAqIHMyX3kpO1xyXG4gICAgICAgIHQgPSAoIHMyX3ggKiAocDBfeSAtIHAyX3kpIC0gczJfeSAqIChwMF94IC0gcDJfeCkpIC8gKC1zMl94ICogczFfeSArIHMxX3ggKiBzMl95KTtcclxuXHJcbiAgICAgICAgaWYocyA+PSAwICYmIHMgPD0gMSAmJiB0ID49IDAgJiYgdCA8PSAxKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gcmV0dXJuIGZhbHNlIGlmIHRoZSBpbnRlcnNlY3Rpb24gcG9pbnQgaXMgdGhlIHZlcnRleCBwb3NpdGlvbiBzaW5jZSBpdCBicmVha3MgdGhlIHJvdXRlIHJlZHVjdGlvbiBhbGdvcml0aG1cclxuICAgICAgICAgICAgY29uc3QgaV94ID0gKHAwX3ggKyAodCAqIHMxX3gpKTtcclxuICAgICAgICAgICAgY29uc3QgaV95ID0gKHAwX3kgKyAodCAqIHMxX3kpKTtcclxuICAgICAgICAgICAgcmV0dXJuICEoaV94ID09PSBlMXYxLnggJiYgaV95ID09PSBlMXYxLnkpICYmICEoaV94ID09PSBlMXYyLnggJiYgaV95ID09PSBlMXYyLnkpICYmICEoaV94ID09PSBlMnYxLnggJiYgaV95ID09PSBlMnYxLnkpICYmICEoaV94ID09PSBlMnYyLnggJiYgaV95ID09PSBlMnYyLnkpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhcIm5vIGNvbGxpc2lvblwiKTtcclxuICAgICAgICByZXR1cm4gZmFsc2U7IC8vIG5vIGNvbGxpc2lvblxyXG4gICAgfVxyXG5cclxuICAgIC8vXHJcbiAgICBwcml2YXRlIGNyb3NzUHJvZHVjdCA9IChwb2ludDE6IFBvaW50LCBwb2ludDI6IFBvaW50KSA9PiB7XHJcbiAgICBcdHJldHVybiBwb2ludDEueCAqIHBvaW50Mi55IC0gcG9pbnQxLnkgKiBwb2ludDIueDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluZGV4T2ZQcmlvcml0eU5vZGUgPSAodmVydGljZXM6IEFycmF5PHtub2RlOiBQb2ludCwgcHJpb3JpdHk6IG51bWJlcn0+LCBwOiBQb2ludCkgPT4ge1xyXG4gICAgICAgIGlmKHAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGljZXMubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdmVydGljZXNbaW5kZXhdLm5vZGU7XHJcbiAgICAgICAgICAgICAgICBpZih2ZXJ0ZXgueCA9PT0gcC54ICYmIHZlcnRleC55ID09PSBwLnkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZXg7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiAtMTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGluZGV4T2ZWZXJ0ZXggPSAodmVydGljZXM6IEFycmF5PFBvaW50PiwgcDogUG9pbnQpOiBudW1iZXIgPT4ge1xyXG4gICAgICAgIGlmKHAgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdmVydGljZXMubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdmVydGV4ID0gdmVydGljZXNbaW5kZXhdO1xyXG4gICAgICAgICAgICAgICAgaWYodmVydGV4LnggPT09IHAueCAmJiB2ZXJ0ZXgueSA9PT0gcC55KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBpbmRleE9mRWRnZSA9IChlZGdlczogQXJyYXk8e3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9PiwgZWRnZToge3YxOiBudW1iZXIsIHYyOiBudW1iZXJ9KTogbnVtYmVyID0+IHtcclxuICAgICAgICBpZihlZGdlID09IG51bGwgfHwgZWRnZS52MSA9PSBudWxsIHx8IGVkZ2UudjIgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICByZXR1cm4gLTE7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWRnZXMubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZSA9IGVkZ2VzW2luZGV4XTtcclxuICAgICAgICAgICAgICAgIGlmKChlLnYxID09PSBlZGdlLnYxICYmIGUudjIgPT09IGVkZ2UudjIpIHx8IChlLnYxID09PSBlZGdlLnYyICYmIGUudjIgPT09IGVkZ2UudjEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGV4O1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gLTE7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIFBvaW50XHJcbntcclxuICAgIHB1YmxpYyB4OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIHk6IG51bWJlciA9IDA7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGVxdWFscyA9IChwOiBQb2ludCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiBwICE9IG51bGwgJiYgcC54ID09PSB0aGlzLnggJiYgcC55ID09PSB0aGlzLnk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvU3RyaW5nID0gKCkgOiBzdHJpbmcgPT4ge1xyXG4gICAgICAgIHJldHVybiBgUG9pbnQoJHt0aGlzLnh9LCR7dGhpcy55fSlgO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9JU2hhcGVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY3RhbmdsZSBpbXBsZW1lbnRzIElTaGFwZVxyXG57XHJcbiAgICBwdWJsaWMgeDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyB5OiBudW1iZXIgPSAwO1xyXG4gICAgcHVibGljIGxpbmVXaWR0aDogbnVtYmVyID0gNTtcclxuICAgIHB1YmxpYyB3aWR0aDogbnVtYmVyID0gMDtcclxuICAgIHB1YmxpYyBoZWlnaHQ6IG51bWJlciA9IDA7XHJcbiAgICBwdWJsaWMgY29sb3I6IHN0cmluZyA9IFwiYmx1ZVwiO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCB3aWR0aDogbnVtYmVyLCBoZWlnaHQ6IG51bWJlciwgY29sb3I6IHN0cmluZyA9IFwicmVkXCIsIGxpbmVfd2lkdGg6IG51bWJlciA9IDIpXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgICAgIHRoaXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgdGhpcy5saW5lV2lkdGggPSBsaW5lX3dpZHRoO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5iZWdpblBhdGgoKTtcclxuICAgICAgICBjdHguc3Ryb2tlU3R5bGUgPSB0aGlzLmNvbG9yO1xyXG4gICAgICAgIGN0eC5saW5lV2lkdGggPSB0aGlzLmxpbmVXaWR0aDtcclxuICAgICAgICBjdHgucmVjdCh0aGlzLngsIHRoaXMueSwgdGhpcy53aWR0aCwgdGhpcy5oZWlnaHQpO1xyXG4gICAgICAgIGN0eC5zdHJva2UoKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb250YWlucyh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICByZXR1cm4gKHggPj0gdGhpcy54ICYmIHggPD0gdGhpcy54ICsgdGhpcy53aWR0aCAmJiB5ID49IHRoaXMueSAmJiB5IDw9IHRoaXMueSArIHRoaXMuaGVpZ2h0KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge0lTaGFwZX0gZnJvbSBcIi4vSVNoYXBlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4vUG9pbnRcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlXHJcbntcclxuICAgIHB1YmxpYyBwb2ludDE6IFBvaW50O1xyXG4gICAgcHVibGljIHBvaW50MjogUG9pbnQ7XHJcbiAgICBwdWJsaWMgcG9pbnQzOiBQb2ludDtcclxuICAgIHByaXZhdGUgYXJlYTogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzaWduOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IoeDE6IG51bWJlciwgeTE6IG51bWJlciwgeDI6IG51bWJlciwgeTI6IG51bWJlciwgeDM6IG51bWJlciwgeTM6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnBvaW50MSA9IG5ldyBQb2ludCh4MSwgeTEpO1xyXG4gICAgICAgIHRoaXMucG9pbnQyID0gbmV3IFBvaW50KHgyLCB5Mik7XHJcbiAgICAgICAgdGhpcy5wb2ludDMgPSBuZXcgUG9pbnQoeDMsIHkzKTtcclxuICAgICAgICB0aGlzLmFyZWEgPSAxLzIgKiAoLXRoaXMucG9pbnQyLnkgKiB0aGlzLnBvaW50My54ICsgdGhpcy5wb2ludDEueSAqICgtdGhpcy5wb2ludDIueCArIHRoaXMucG9pbnQzLngpICsgdGhpcy5wb2ludDEueCAqICh0aGlzLnBvaW50Mi55IC0gdGhpcy5wb2ludDMueSkgKyB0aGlzLnBvaW50Mi54ICogdGhpcy5wb2ludDMueSk7XHJcbiAgICAgICAgdGhpcy5zaWduID0gdGhpcy5hcmVhIDwgMCA/IC0xIDogMTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyA9ICgpOiB2b2lkID0+IHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC5zdHJva2VTdHlsZSA9IFwicmVkXCI7XHJcbiAgICAgICAgY3R4LmxpbmVXaWR0aCA9IDU7XHJcbiAgICAgICAgY3R4LmJlZ2luUGF0aCgpO1xyXG4gICAgICAgIGN0eC5tb3ZlVG8odGhpcy5wb2ludDEueCwgdGhpcy5wb2ludDEueSk7XHJcbiAgICAgICAgY3R4LmxpbmVUbyh0aGlzLnBvaW50Mi54LCB0aGlzLnBvaW50Mi55KTtcclxuICAgICAgICBjdHgubGluZVRvKHRoaXMucG9pbnQzLngsIHRoaXMucG9pbnQzLnkpO1xyXG4gICAgICAgIGN0eC5saW5lVG8odGhpcy5wb2ludDEueCwgdGhpcy5wb2ludDEueSk7XHJcbiAgICAgICAgY3R4LnN0cm9rZSgpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gcmV0dXJucyB0cnVlIGlmZiB0aGUgcG9pbnQgcCBpcyBhIHZlcnRleCBvZiB0aGUgdHJpYW5nbGVcclxuICAgIHB1YmxpYyBpc1ZlcnRleCA9IChwOiBQb2ludCk6IGJvb2xlYW4gPT4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnBvaW50MS5lcXVhbHMocCkgfHwgdGhpcy5wb2ludDIuZXF1YWxzKHApIHx8IHRoaXMucG9pbnQzLmVxdWFscyhwKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBodHRwOi8vanNmaWRkbGUubmV0L1BlcnJvQVpVTC96ZGFZOC8xL1xyXG4gICAgcHVibGljIGNvbnRhaW5zID0gKHg6IG51bWJlciwgeTogbnVtYmVyKTogYm9vbGVhbiA9PiB7XHJcbiAgICAgICAgdmFyIHMgPSAodGhpcy5wb2ludDEueSAqIHRoaXMucG9pbnQzLnggLSB0aGlzLnBvaW50MS54ICogdGhpcy5wb2ludDMueSArICh0aGlzLnBvaW50My55IC0gdGhpcy5wb2ludDEueSkgKiB4ICsgKHRoaXMucG9pbnQxLnggLSB0aGlzLnBvaW50My54KSAqIHkpICogdGhpcy5zaWduO1xyXG4gICAgICAgIHZhciB0ID0gKHRoaXMucG9pbnQxLnggKiB0aGlzLnBvaW50Mi55IC0gdGhpcy5wb2ludDEueSAqIHRoaXMucG9pbnQyLnggKyAodGhpcy5wb2ludDEueSAtIHRoaXMucG9pbnQyLnkpICogeCArICh0aGlzLnBvaW50Mi54IC0gdGhpcy5wb2ludDEueCkgKiB5KSAqIHRoaXMuc2lnbjtcclxuICAgICAgICByZXR1cm4gKHMgPiAwICYmIHQgPiAwICYmIChzICsgdCkgPCAyICogdGhpcy5hcmVhICogdGhpcy5zaWduKSB8fCAodGhpcy5pc1ZlcnRleChuZXcgUG9pbnQoeCwgeSkpKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0l0ZW19IGZyb20gXCIuLi9pdGVtcy9JdGVtXCJcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbnRlcmFjdGlvblxyXG57XHJcbiAgICAvLyBpdGVtIGNhbiBiZSBudWxsXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgaXRlbTogSXRlbSkge31cclxuXHJcbiAgICAvLyBpbnRlcmFjdCB3aXRoIHRoZSBvYmplY3RcclxuICAgIHB1YmxpYyBhYnN0cmFjdCBpbnRlcmFjdChpdGVtOiBJdGVtKTogIHt0ZXh0OiBzdHJpbmcsIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBpdGVtczogQXJyYXk8SXRlbT59O1xyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKCk6IEl0ZW1cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SlNPTkxvYWRlcn0gZnJvbSBcIi4uL3Jlc291cmNlcy9KU09OTG9hZGVyXCJcclxuaW1wb3J0IHtJbWFnZUxvYWRlcn0gZnJvbSBcIi4uL3Jlc291cmNlcy9JbWFnZUxvYWRlclwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi4vc3ByaXRlcy9UZXh0dXJlQXRsYXNcIlxyXG5pbXBvcnQge1Nwcml0ZX0gZnJvbSBcIi4uL3Nwcml0ZXMvU3ByaXRlXCJcclxuaW1wb3J0IHtTdGF0aWNTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL1N0YXRpY1Nwcml0ZVwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtJbnRlcmFjdGFibGVTcHJpdGV9IGZyb20gXCIuLi9zcHJpdGVzL0ludGVyYWN0YWJsZVNwcml0ZVwiXHJcbmltcG9ydCB7TlBDU3ByaXRlfSBmcm9tIFwiLi4vc3ByaXRlcy9OUENTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4uL3Nwcml0ZXMvU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtOYXZNZXNofSBmcm9tIFwiLi4vY29sbGlzaW9uL05hdk1lc2hcIlxyXG5pbXBvcnQge1RyaWFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1RyaWFuZ2xlXCJcclxuaW1wb3J0IHtJbnRlcmFjdGlvbn0gIGZyb20gXCIuL0ludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtSZWNlaXZlSXRlbUludGVyYWN0aW9ufSBmcm9tIFwiLi9SZWNlaXZlSXRlbUludGVyYWN0aW9uXCJcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL0NpcmNsZVwiXHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RhbmdsZVwiXHJcbmltcG9ydCB7Q29udmVyc2F0aW9ufSBmcm9tIFwiLi4vY2hhdC9Db252ZXJzYXRpb25cIlxyXG5pbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4uL2NoYXQvRGlhbG9nXCJcclxuaW1wb3J0IHtDb250aW51ZURpYWxvZ30gZnJvbSBcIi4uL2NoYXQvQ29udGludWVEaWFsb2dcIlxyXG5pbXBvcnQge09wdGlvbkRpYWxvZ30gZnJvbSBcIi4uL2NoYXQvT3B0aW9uRGlhbG9nXCJcclxuaW1wb3J0IHtSZWNlaXZlSXRlbURpYWxvZ30gZnJvbSBcIi4uL2NoYXQvUmVjZWl2ZUl0ZW1EaWFsb2dcIlxyXG5cclxuZXhwb3J0IGNsYXNzIExldmVsXHJcbntcclxuICAgIHN0YXRpYyBsb2FkTGV2ZWwocGF0aDogc3RyaW5nLCBpdGVtczogYW55KTogUHJvbWlzZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPGFueT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsZXZlbERhdGFQcm9taXNlID0gSlNPTkxvYWRlci5sb2FkSlNPTkZpbGUocGF0aCkudGhlbigobGV2ZWxEYXRhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHRleHR1cmUgYXRsYXNcclxuICAgICAgICAgICAgICAgIGxldCBhdGxhcyA9IG5ldyBUZXh0dXJlQXRsYXMobGV2ZWxEYXRhLnRleHR1cmVfYXRsYXMpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGV4dHVyZUF0bGFzUHJvbWlzZSA9IGF0bGFzLmxvYWQoKS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogdGV4dHVyZSBhdGxhcyBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAgICAgbGV0IGFsbFByb21pc2VzID0gW3RleHR1cmVBdGxhc1Byb21pc2VdO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGNyZWF0ZSB0aGUgc3ByaXRlc1xyXG4gICAgICAgICAgICAgICAgbGV0IHN0YXRpY1Nwcml0ZXMgPSBuZXcgQXJyYXk8U3RhdGljU3ByaXRlPigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGludGVyYWN0YWJsZVNwcml0ZXMgPSBuZXcgQXJyYXk8SW50ZXJhY3RhYmxlU3ByaXRlPigpO1xyXG4gICAgICAgICAgICAgICAgbGV0IG5wY1Nwcml0ZXMgPSBuZXcgQXJyYXk8TlBDU3ByaXRlPigpO1xyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IG9iaiBvZiBsZXZlbERhdGEuc3ByaXRlcylcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBpZihvYmoudHlwZSA9PSBcImludGVyYWN0YWJsZVwiKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBpbnRlcmFjdGlvbnMgPSBuZXcgQXJyYXk8SW50ZXJhY3Rpb24+KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBpbnRlciBvZiBvYmouaW50ZXJhY3Rpb25zKSAgICAvLyBjcmVhdGUgYW4gYXJyYXkgb2YgaW50ZXJhY3Rpb25zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmKGludGVyLnR5cGUgPT0gXCJyZWNlaXZlX2l0ZW1cIikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCByZWNlaXZlSXRlbXMgPSBuZXcgQXJyYXk8SXRlbT4oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgaXRtIG9mIGludGVyLml0ZW1zX3JlY2VpdmVkKSAgIC8vIGNyZWF0ZSBhbiBhcnJheSBvZiByZWNlaXZlIGl0ZW1zXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWNlaXZlSXRlbXMucHVzaChpdGVtc1tpdG1dKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJhY3Rpb25zLnB1c2gobmV3IFJlY2VpdmVJdGVtSW50ZXJhY3Rpb24oaW50ZXIuaXRlbSA/IGl0ZW1zW2ludGVyLml0ZW1dIDogbnVsbCwgaW50ZXIuc3VjY2Vzc190ZXh0LCBpbnRlci5mYWlsX3RleHQsIG5ldyBBdWRpbyhpbnRlci5zdWNjZXNzX2F1ZGlvKSwgbmV3IEF1ZGlvKGludGVyLmZhaWxfYXVkaW8pLCByZWNlaXZlSXRlbXMpKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGFibGVTcHJpdGVzLnB1c2gobmV3IEludGVyYWN0YWJsZVNwcml0ZShvYmoueCwgb2JqLnksIG9iai5zY2FsZSwgb2JqLm9yaWdpbl9ob3Jpem9udGFsLCBvYmoub3JpZ2luX3ZlcnRpY2FsLCBhdGxhcywgb2JqLmltYWdlX25hbWUsIG9iai5leGFtaW5lX3RleHQsIG5ldyBBdWRpbyhvYmouZXhhbWluZV9hdWRpbyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmV3IENpcmNsZShvYmoueCwgb2JqLnksIG9iai5pbnRlcmFjdGlvbl9yYWRpdXMpLCBuZXcgUmVjdGFuZ2xlKG9iai54LW9iai5jbGlja196b25lX3dpZHRoLzIsIG9iai55LW9iai5jbGlja196b25lX2hlaWdodC8yLCBvYmouY2xpY2tfem9uZV93aWR0aCwgb2JqLmNsaWNrX3pvbmVfaGVpZ2h0KSwgaW50ZXJhY3Rpb25zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmKG9iai50eXBlID09IFwibnBjXCIpIHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGxvYWQgdGhlIGFuaW1hdGlvbnNcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGF0bGFzID0gbmV3IFRleHR1cmVBdGxhcyhvYmouYXRsYXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgYW5pbWF0aW9uczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPiA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBhdGxhc0xvYWRlZFByb21pc2UgPSBhdGxhcy5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IobGV0IHNlcXVlbmNlTmFtZSBpbiBvYmouYW5pbWF0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlcSA9IG9iai5hbmltYXRpb25zW3NlcXVlbmNlTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgYW5pbSA9IG5ldyBTcHJpdGVBbmltYXRpb24oc2VxLm51bV9mcmFtZXMsIGF0bGFzLCBzZXF1ZW5jZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbnMucHVzaChhbmltKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgbnBjID0gbmV3IE5QQ1Nwcml0ZShvYmoueCwgb2JqLnksIG9iai5zY2FsZSwgb2JqLm9yaWdpbl9ob3Jpem9udGFsLCBvYmoub3JpZ2luX3ZlcnRpY2FsLCBhbmltYXRpb25zLCBvYmouZXhhbWluZV90ZXh0LCBuZXcgQXVkaW8ob2JqLmV4YW1pbmVfYXVkaW8pLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXcgQ2lyY2xlKG9iai54LCBvYmoueSwgb2JqLmludGVyYWN0aW9uX3JhZGl1cyksIG5ldyBSZWN0YW5nbGUob2JqLngtb2JqLmNsaWNrX3pvbmVfd2lkdGgvMiwgb2JqLnktb2JqLmNsaWNrX3pvbmVfaGVpZ2h0LzIsIG9iai5jbGlja196b25lX3dpZHRoLCBvYmouY2xpY2tfem9uZV9oZWlnaHQpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBMZXZlbC5idWlsZENvbnZlcnNhdGlvbihvYmosIGl0ZW1zKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBucGMuc2V0U3RhcnRQb3Mob2JqLngsIG9iai55KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wYy5zZXREZXB0aFNjYWxlKGxldmVsRGF0YS5kZXB0aF9zY2FsZV95KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5wY1Nwcml0ZXMucHVzaChucGMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJucGMgYXRsYXMgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6IHVuYWJsZSB0byBsb2FkIE5QQyBzcHJpdGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsbFByb21pc2VzLnB1c2goYXRsYXNMb2FkZWRQcm9taXNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0aWNTcHJpdGVzLnB1c2gobmV3IFN0YXRpY1Nwcml0ZShvYmoueCwgb2JqLnksIG9iai5zY2FsZSwgb2JqLm9yaWdpbl9ob3Jpem9udGFsLCBvYmoub3JpZ2luX3ZlcnRpY2FsLCBhdGxhcywgb2JqLmltYWdlX25hbWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gY3JlYXRlIHRoZSBuYXZtZXNoXHJcbiAgICAgICAgICAgICAgICBsZXQgdHJpcyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgZm9yKGxldCB0cmkgb2YgbGV2ZWxEYXRhLm5hdm1lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0cmlzLnB1c2gobmV3IFRyaWFuZ2xlKHRyaS54MSwgdHJpLnkxLCB0cmkueDIsIHRyaS55MiwgdHJpLngzLCB0cmkueTMpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGxldCBuYXZtZXNoID0gbmV3IE5hdk1lc2godHJpcyk7XHJcblxyXG4gICAgICAgICAgICAgICAgUHJvbWlzZS5hbGwoYWxsUHJvbWlzZXMpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NlbmUgZmlsZXMgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2Ygc3RhdGljU3ByaXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUucmVmcmVzaEltYWdlKCk7ICAvLyB0ZXh0dXJlIGF0bGFzIHByb2JhYmx5IGhhZG4ndCBsb2FkZWQgd2hlbiBzcHJpdGUgd2FzIGluaXRpYWxpc2VkIHNvIHJlZnJlc2ggaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUucmVmcmVzaEltYWdlKCk7ICAvLyB0ZXh0dXJlIGF0bGFzIHByb2JhYmx5IGhhZG4ndCBsb2FkZWQgd2hlbiBzcHJpdGUgd2FzIGluaXRpYWxpc2VkIHNvIHJlZnJlc2ggaW1hZ2VcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoeyd0ZXh0dXJlQXRsYXMnOiBhdGxhcywgJ3NjZW5lU2NhbGUnOiBsZXZlbERhdGEuc2NlbmVfc2NhbGUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAncGxheWVyU3RhcnRYJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydF94LCAncGxheWVyU3RhcnRZJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydF95LCAncGxheWVyU3RhcnRzJzogbGV2ZWxEYXRhLnBsYXllcl9zdGFydHMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnZGVwdGhTY2FsZVknOiBsZXZlbERhdGEuZGVwdGhfc2NhbGVfeSwgJ25hdm1lc2gnOiBuYXZtZXNoLCAnc3RhdGljU3ByaXRlcyc6IHN0YXRpY1Nwcml0ZXMsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAnaW50ZXJhY3RhYmxlU3ByaXRlcyc6IGludGVyYWN0YWJsZVNwcml0ZXMsICducGNTcHJpdGVzJzogbnBjU3ByaXRlc30pO1xyXG4gICAgICAgICAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9KS5jYXRjaCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBmYWlsZWQgdG8gbG9hZCBsZXZlbFwiKTtcclxuICAgICAgICAgICAgICAgIHJlamVjdChudWxsKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzdGF0aWMgYnVpbGRDb252ZXJzYXRpb24oc3ByaXRlT2JqOiBhbnksIGl0ZW1zOiBhbnkpOiBDb252ZXJzYXRpb25cclxuICAgIHtcclxuICAgICAgICBpZihzcHJpdGVPYmouY29udmVyc2F0aW9uICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaWYoc3ByaXRlT2JqLmNvbnZlcnNhdGlvbi5maXJzdF9kaWFsb2cgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBDb252ZXJzYXRpb24oTGV2ZWwuYnVpbGREaWFsb2coc3ByaXRlT2JqLmNvbnZlcnNhdGlvbi5maXJzdF9kaWFsb2csIGl0ZW1zKSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgc3RhdGljIGJ1aWxkRGlhbG9nKGRpYWxvZzogYW55LCBpdGVtczogYW55KTogRGlhbG9nXHJcbiAgICB7XHJcbiAgICAgICAgaWYoZGlhbG9nLnR5cGUgPT0gXCJjb250aW51ZVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0RGlhbG9nOiBEaWFsb2c7XHJcbiAgICAgICAgICAgIGlmKGRpYWxvZy5uZXh0X2RpYWxvZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0RGlhbG9nID0gTGV2ZWwuYnVpbGREaWFsb2coZGlhbG9nLm5leHRfZGlhbG9nLCBpdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb250aW51ZURpYWxvZyhkaWFsb2cudGV4dCwgZGlhbG9nLnNwZWFrZXIsIG5ldyBBdWRpbyhkaWFsb2cuYXVkaW8pLCBuZXh0RGlhbG9nKTtcclxuICAgICAgICB9IGVsc2UgaWYoZGlhbG9nLnR5cGUgPT0gXCJvcHRpb25cIikge1xyXG4gICAgICAgICAgICBsZXQgb3B0aW9ucyA9IHt9O1xyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkaWFsb2cgb2JqZWN0IGZvciBlYWNoIG9wdGlvblxyXG4gICAgICAgICAgICBmb3IobGV0IG9wdE5hbWUgaW4gZGlhbG9nLm9wdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgIG9wdGlvbnNbb3B0TmFtZV0gPSBMZXZlbC5idWlsZERpYWxvZyhkaWFsb2cub3B0aW9uc1tvcHROYW1lXSwgaXRlbXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgT3B0aW9uRGlhbG9nKGRpYWxvZy50ZXh0LCBkaWFsb2cuc3BlYWtlciwgbmV3IEF1ZGlvKGRpYWxvZy5hdWRpbyksIG9wdGlvbnMpO1xyXG4gICAgICAgIH0gZWxzZSBpZihkaWFsb2cudHlwZSA9PSBcInJlY2VpdmVfaXRlbVwiKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXh0RGlhbG9nOiBEaWFsb2c7XHJcbiAgICAgICAgICAgIGlmKGRpYWxvZy5uZXh0X2RpYWxvZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBuZXh0RGlhbG9nID0gTGV2ZWwuYnVpbGREaWFsb2coZGlhbG9nLm5leHRfZGlhbG9nLCBpdGVtcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGl0ZW1zTG9zdCA9IFtdO1xyXG4gICAgICAgICAgICBmb3IoY29uc3QgaWQgb2YgZGlhbG9nLml0ZW1zX2xvc3QpIHtcclxuICAgICAgICAgICAgICAgIGl0ZW1zTG9zdC5wdXNoKGl0ZW1zW2lkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGl0ZW1zUmVjZWl2ZWQgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGlkIG9mIGRpYWxvZy5pdGVtc19yZWNlaXZlZCkge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNSZWNlaXZlZC5wdXNoKGl0ZW1zW2lkXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWNlaXZlSXRlbURpYWxvZyhkaWFsb2cudGV4dCwgZGlhbG9nLnNwZWFrZXIsIG5ldyBBdWRpbyhkaWFsb2cuYXVkaW8pLCBuZXh0RGlhbG9nLCBpdGVtc0xvc3QsIGl0ZW1zUmVjZWl2ZWQsIGRpYWxvZy5yZXBsYWNlbWVudF9kaWFsb2cgPyB0aGlzLmJ1aWxkRGlhbG9nKGRpYWxvZy5yZXBsYWNlbWVudF9kaWFsb2csIGl0ZW1zKSA6IG51bGwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcihwdWJsaWMgdGV4dHVyZUF0bGFzLCBwdWJsaWMgc2NlbmVTY2FsZSwgcHVibGljIHBsYXllclN0YXJ0WCwgcHVibGljIHBsYXllclN0YXJ0WSwgcHVibGljIHBsYXllclN0YXJ0cyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHVibGljIGRlcHRoU2NhbGVZLCBwdWJsaWMgbmF2bWVzaCwgcHVibGljIHN0YXRpY1Nwcml0ZXMsIHB1YmxpYyBpbnRlcmFjdGFibGVTcHJpdGVzLCBwdWJsaWMgbnBjU3ByaXRlcykge31cclxufVxyXG4iLCJpbXBvcnQge0ludGVyYWN0aW9ufSBmcm9tIFwiLi9JbnRlcmFjdGlvblwiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4uL2l0ZW1zL0l0ZW1cIlxyXG5cclxuZXhwb3J0IGNsYXNzIFJlY2VpdmVJdGVtSW50ZXJhY3Rpb24gZXh0ZW5kcyBJbnRlcmFjdGlvblxyXG57XHJcbiAgICAvLyBpdGVtIGNhbiBiZSBudWxsXHJcbiAgICBjb25zdHJ1Y3RvcihpdGVtOiBJdGVtLCBwcm90ZWN0ZWQgc3VjY2Vzc1RleHQ6IHN0cmluZywgcHJvdGVjdGVkIGZhaWxUZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgIHByb3RlY3RlZCBzdWNjZXNzQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBmYWlsQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBpdGVtc1JlY2VpdmVkOiBBcnJheTxJdGVtPilcclxuICAgIHtcclxuICAgICAgICBzdXBlcihpdGVtKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBpbnRlcmFjdCB3aXRoIHRoZSBvYmplY3RcclxuICAgIC8vIHJldHVybnMgYSBsaXN0IG9mIGl0ZW1zIHJlY2VpdmVkIGZyb20gdGhlIGludGVyYWN0aW9uXHJcbiAgICBwdWJsaWMgaW50ZXJhY3QoaXRlbTogSXRlbSk6IHt0ZXh0OiBzdHJpbmcsIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBpdGVtczogQXJyYXk8SXRlbT59XHJcbiAgICB7XHJcbiAgICAgICAgaWYoaXRlbSA9PSB0aGlzLml0ZW0pXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICByZXR1cm4ge3RleHQ6IHRoaXMuc3VjY2Vzc1RleHQsIGF1ZGlvOiB0aGlzLnN1Y2Nlc3NBdWRpbywgaXRlbXM6IHRoaXMuaXRlbXNSZWNlaXZlZH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4ge3RleHQ6IHRoaXMuZmFpbFRleHQsIGF1ZGlvOiB0aGlzLmZhaWxBdWRpbywgaXRlbXM6IG51bGx9O1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBsZXQgY2FudmFzOiBIVE1MQ2FudmFzRWxlbWVudDtcclxuZXhwb3J0IGxldCBjdHg6IENhbnZhc1JlbmRlcmluZ0NvbnRleHQyRDtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0Q2FudmFzQW5kQ29udGV4dCgpXHJcbntcclxuICAgIGNhbnZhcyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2FudmFzXCIpIGFzIEhUTUxDYW52YXNFbGVtZW50O1xyXG4gICAgY3R4ID0gY2FudmFzLmdldENvbnRleHQoXCIyZFwiKTtcclxuICAgIGN0eC5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb249J2Rlc3RpbmF0aW9uLW92ZXInO1xyXG4gICAgY3R4LmltYWdlU21vb3RoaW5nRW5hYmxlZCA9IHRydWU7ICAgLy8gZW5hYmxlIGFudGktYWxpYXNpbmcgb2YgaW1hZ2VzXHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIElucHV0TWFuYWdlclxyXG57XHJcbiAgICBwcml2YXRlIHByaW1hcnlNb3VzZURvd25DYWxsYmFja3M6IEFycmF5PCh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZD4gPSBBcnJheTwoKSA9PiB2b2lkPigpO1xyXG4gICAgcHJpdmF0ZSBzZWNvbmRhcnlNb3VzZURvd25DYWxsYmFja3M6IEFycmF5PCh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZD4gPSBBcnJheTwoKSA9PiB2b2lkPigpO1xyXG4gICAgcHJpdmF0ZSB0b3VjaFN0YXJ0QXQ6IG51bWJlcjtcclxuICAgIHByaXZhdGUgbG9uZ1RvdWNoRHVyYXRpb246IG51bWJlciA9IDUwMDtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihjYW52YXM6IEhUTUxDYW52YXNFbGVtZW50KVxyXG4gICAge1xyXG4gICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjb250ZXh0bWVudVwiLCBldmVudCA9PiBldmVudC5wcmV2ZW50RGVmYXVsdCgpKTsgIC8vIGRpc2FibGUgcmlnaHQgY2xpY2sgY29udGV4dCBtZW51XHJcbiAgICAgICAgLy8gaWYoY2FudmFzICE9IG51bGwpIHtcclxuICAgICAgICAvLyAgICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZURvd24pO1xyXG4gICAgICAgIC8vIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgdGhpcy5tb3VzZWRvd24pO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hzdGFydFwiLCB0aGlzLnRvdWNoc3RhcnQpO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwidG91Y2hlbmRcIiwgdGhpcy50b3VjaGVuZCk7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJ0b3VjaGNhbmNlbFwiLCB0aGlzLnRvdWNoZW5kKTtcclxuICAgICAgICAgICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcInRvdWNobW92ZVwiLCB0aGlzLnRvdWNobW92ZSk7XHJcbiAgICAgICAgLy8gfVxyXG5cclxuICAgICAgICB0aGlzLnRvdWNoU3RhcnRBdCA9IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaXJlUHJpbWFyeU1vdXNlRG93bkV2ZW50KHg6IG51bWJlciwgeTogbnVtYmVyKVxyXG4gICAge1xyXG4gICAgICAgIGZvcihjb25zdCBjYWxsYmFjayBvZiB0aGlzLnByaW1hcnlNb3VzZURvd25DYWxsYmFja3MpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjYWxsYmFjayh4LCB5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBmaXJlU2Vjb25kYXJ5TW91c2VEb3duRXZlbnQoeDogbnVtYmVyLCB5OiBudW1iZXIpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGNhbGxiYWNrIG9mIHRoaXMuc2Vjb25kYXJ5TW91c2VEb3duQ2FsbGJhY2tzKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY2FsbGJhY2soeCwgeSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBtb3VzZWRvd24gPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgLy8gbm90aWZ5IGFsbCBjYWxsYmFja3NcclxuICAgICAgICBpZihlLmJ1dHRvbiA9PT0gMCkge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVQcmltYXJ5TW91c2VEb3duRXZlbnQoZS5sYXllclgsIGUubGF5ZXJZKTtcclxuICAgICAgICB9IGVsc2UgaWYoZS5idXR0b24gPT09IDIpIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlU2Vjb25kYXJ5TW91c2VEb3duRXZlbnQoZS5sYXllclgsIGUubGF5ZXJZKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9ubG9uZ3RvdWNoID0gKGU6IFRvdWNoRXZlbnQpID0+IHtcclxuICAgICAgICAvLyBmaXJlIHNlY29uZGFyeSBtb3VzZSBjbGljayBldmVudFxyXG4gICAgICAgIHRoaXMuZmlyZVNlY29uZGFyeU1vdXNlRG93bkV2ZW50KGUudG91Y2hlc1swXS5jbGllbnRYLCBlLnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHRvdWNoc3RhcnQgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgIHRoaXMudG91Y2hTdGFydEF0ID0gRGF0ZS5ub3coKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG91Y2hlbmQgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgIGlmKERhdGUubm93KCkgLSB0aGlzLnRvdWNoU3RhcnRBdCA8IHRoaXMubG9uZ1RvdWNoRHVyYXRpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlUHJpbWFyeU1vdXNlRG93bkV2ZW50KGUudG91Y2hlc1swXS5jbGllbnRYLCBlLnRvdWNoZXNbMF0uY2xpZW50WSk7IC8vIGZpcmUgcHJpbWFyeSBtb3VzZSBjbGljayBldmVudFxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMuZmlyZVNlY29uZGFyeU1vdXNlRG93bkV2ZW50KGUudG91Y2hlc1swXS5jbGllbnRYLCBlLnRvdWNoZXNbMF0uY2xpZW50WSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyB0b3VjaG1vdmUgPSAoZTogVG91Y2hFdmVudCkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBpZihEYXRlLm5vdygpIC0gdGhpcy50b3VjaFN0YXJ0QXQgPj0gdGhpcy5sb25nVG91Y2hEdXJhdGlvbikge1xyXG4gICAgICAgICAgICB0aGlzLmZpcmVQcmltYXJ5TW91c2VEb3duRXZlbnQoZS50b3VjaGVzWzBdLmNsaWVudFgsIGUudG91Y2hlc1swXS5jbGllbnRZKTsgLy8gZmlyZSBwcmltYXJ5IG1vdXNlIGNsaWNrIGV2ZW50XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5maXJlU2Vjb25kYXJ5TW91c2VEb3duRXZlbnQoZS50b3VjaGVzWzBdLmNsaWVudFgsIGUudG91Y2hlc1swXS5jbGllbnRZKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFByaW1hcnlNb3VzZURvd25DYWxsYmFjayhjYWxsYmFjazogKHg6IG51bWJlciwgeTogbnVtYmVyKSA9PiB2b2lkKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMucHJpbWFyeU1vdXNlRG93bkNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkU2Vjb25kYXJ5TW91c2VEb3duQ2FsbGJhY2soY2FsbGJhY2s6ICh4OiBudW1iZXIsIHk6IG51bWJlcikgPT4gdm9pZClcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNlY29uZGFyeU1vdXNlRG93bkNhbGxiYWNrcy5wdXNoKGNhbGxiYWNrKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0l0ZW19IGZyb20gXCIuL0l0ZW1cIlxyXG5cclxuZXhwb3J0IGNsYXNzIEludmVudG9yeVxyXG57XHJcbiAgICBwcml2YXRlIGl0ZW1zID0gbmV3IEFycmF5PEl0ZW0+KDkpOyAvLyBNQVhfTlVNX0lURU1TID0gOVxyXG5cclxuICAgIHB1YmxpYyBjb250YWluc0l0ZW0oaXRlbTogSXRlbSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZih0aGlzLml0ZW1zW2luZGV4XSA9PT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZEl0ZW0oaXRlbTogSXRlbSk6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICBpZihpdGVtICE9IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gYWRkIHRoZSBpdGVtIHRvIHRoZSBmaXJzdCBhdmFpbGFibGUgc2xvdFxyXG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aDsgaW5kZXggKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmKHRoaXMuaXRlbXNbaW5kZXhdID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLml0ZW1zW2luZGV4XSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGl0ZW06IEl0ZW0pOiBJdGVtXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgaWYodGhpcy5pdGVtc1tpbmRleF0gPT09IGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmVtb3ZlZCBcIiArIGl0ZW0uZ2V0TmFtZSgpKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHJldHVybiBpdGVtO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtQnlJbmRleChpbmRleDogbnVtYmVyKTogSXRlbVxyXG4gICAge1xyXG4gICAgICAgIGlmKGluZGV4ICE9IG51bGwgJiYgaW5kZXggPCB0aGlzLml0ZW1zLmxlbmd0aClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0gPSB0aGlzLml0ZW1zW2luZGV4XTtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBudWxsO1xyXG4gICAgICAgICAgICByZXR1cm4gaXRlbTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG1vdmVJdGVtKGl0ZW06IEl0ZW0sIGluZGV4OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgY29uc29sZS5sb2coXCJzZWxlY3RlZFwiLCBpdGVtKTtcclxuICAgICAgICBpZih0aGlzLml0ZW1zW2luZGV4XSA9PSBudWxsKSB7IC8vIGlmIG5ldyBpdGVtc2xvdCBpcyBmcmVlXHJcbiAgICAgICAgICAgIGxldCB4ID0gdGhpcy5yZW1vdmVJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgICBpZih4ICE9IG51bGwpIHsgLy8gY2hlY2sgdGhlIHBsYXllciBhY3R1YWxseSBoYWQgdGhlIGl0ZW1cclxuICAgICAgICAgICAgICAgIHRoaXMuaXRlbXNbaW5kZXhdID0gaXRlbTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjbGVhcigpOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5pdGVtcy5sZW5ndGg7IGluZGV4ICsrKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgdGhpcy5pdGVtc1tpbmRleF0gPSBudWxsO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbXMoKTogQXJyYXk8SXRlbT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5pdGVtcztcclxuICAgIH1cclxufVxyXG4iLCJleHBvcnQgY2xhc3MgSXRlbVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgY29tYmluYXRpb25zOiBBcnJheTx7b3RoZXI6IEl0ZW0sIG91dDogQXJyYXk8SXRlbT59PjtcclxuXHJcbiAgICBjb25zdHJ1Y3Rvcihwcm90ZWN0ZWQgbmFtZTogc3RyaW5nLCBwcm90ZWN0ZWQgZXhhbWluZVRleHQ6IHN0cmluZywgcHJvdGVjdGVkIGV4YW1pbmVBdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgcHJvdGVjdGVkIGltZ3BhdGg6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNvbWJpbmF0aW9ucyA9IFtdO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBjb21iaW5lKG90aGVyOiBJdGVtKTogQXJyYXk8SXRlbT5cclxuICAgIHtcclxuICAgICAgICBmb3IoY29uc3QgY21iIG9mIHRoaXMuY29tYmluYXRpb25zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW0gaXMgY29tYmluYWJsZSwgcmV0dXJuIHRoZSBhcnJheSBvZiBpdGVtcyBjcmVhdGVkXHJcbiAgICAgICAgICAgIGlmKG90aGVyID09PSBjbWIub3RoZXIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjbWIub3V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWRkQ29tYmluYXRpb24ob3RoZXI6IEl0ZW0sIG91dDogQXJyYXk8SXRlbT4pOiB2b2lkXHJcbiAgICB7XHJcbiAgICAgICAgaWYob3RoZXIgIT0gbnVsbCAmJiBvdXQgIT0gbnVsbClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHRoaXMuY29tYmluYXRpb25zLnB1c2goe290aGVyOiBvdGhlciwgb3V0OiBvdXR9KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldE5hbWUoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZVRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVBdWRpbygpOiBIVE1MQXVkaW9FbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZUF1ZGlvO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJbWFnZVBhdGgoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW1ncGF0aDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgdG9TdHJpbmcoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIGBJdGVtKCR7dGhpcy5uYW1lfSlgO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y2FudmFzLCBjdHgsIGluaXRDYW52YXNBbmRDb250ZXh0fSBmcm9tIFwiLi9nbG9iXCJcclxuaW1wb3J0IHtOYXZNZXNofSBmcm9tIFwiLi9jb2xsaXNpb24vTmF2TWVzaFwiXHJcbmltcG9ydCB7VHJpYW5nbGV9IGZyb20gXCIuL2NvbGxpc2lvbi9UcmlhbmdsZVwiXHJcbmltcG9ydCB7SVNoYXBlfSBmcm9tIFwiLi9jb2xsaXNpb24vSVNoYXBlXCJcclxuaW1wb3J0IHtJbnB1dE1hbmFnZXJ9IGZyb20gXCIuL2lucHV0L0lucHV0TWFuYWdlclwiXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gXCIuL3Jlc291cmNlcy9JbWFnZUxvYWRlclwiXHJcbmltcG9ydCB7SlNPTkxvYWRlcn0gZnJvbSBcIi4vcmVzb3VyY2VzL0pTT05Mb2FkZXJcIlxyXG5pbXBvcnQge0xldmVsfSBmcm9tIFwiLi9nYW1lL0xldmVsXCJcclxuaW1wb3J0IHtTdGF0aWNTcHJpdGV9IGZyb20gXCIuL3Nwcml0ZXMvU3RhdGljU3ByaXRlXCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vc3ByaXRlcy9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7SW50ZXJhY3RhYmxlU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL0ludGVyYWN0YWJsZVNwcml0ZVwiXHJcbmltcG9ydCB7TmF2U3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL05hdlNwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9zcHJpdGVzL1Nwcml0ZUFuaW1hdGlvblwiXHJcbmltcG9ydCB7VGV4dHVyZUF0bGFzfSBmcm9tIFwiLi9zcHJpdGVzL1RleHR1cmVBdGxhc1wiXHJcbmltcG9ydCB7UGxheWVyU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL1BsYXllclNwcml0ZVwiXHJcbmltcG9ydCB7TlBDU3ByaXRlfSBmcm9tIFwiLi9zcHJpdGVzL05QQ1Nwcml0ZVwiXHJcbmltcG9ydCB7SXRlbX0gZnJvbSBcIi4vaXRlbXMvSXRlbVwiXHJcbmltcG9ydCB7SW52ZW50b3J5fSBmcm9tIFwiLi9pdGVtcy9JbnZlbnRvcnlcIlxyXG5pbXBvcnQge0NvbnZlcnNhdGlvbn0gZnJvbSBcIi4vY2hhdC9Db252ZXJzYXRpb25cIlxyXG5pbXBvcnQge0RpYWxvZ30gZnJvbSBcIi4vY2hhdC9EaWFsb2dcIlxyXG5pbXBvcnQge0NvbnRpbnVlRGlhbG9nfSBmcm9tIFwiLi9jaGF0L0NvbnRpbnVlRGlhbG9nXCJcclxuaW1wb3J0IHtPcHRpb25EaWFsb2d9IGZyb20gXCIuL2NoYXQvT3B0aW9uRGlhbG9nXCJcclxuXHJcbmxldCBpbnB1dE1hbmFnZXI7XHJcbmxldCBpbWc6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbmxldCBzY2VuZVNjYWxlOiBudW1iZXI7XHJcbmxldCBsZXZlbFNjYWxlOiBudW1iZXI7XHJcbmxldCBkZXB0aFNjYWxlWTogbnVtYmVyO1xyXG5sZXQgc3RhdGljU3ByaXRlcyA9IG5ldyBBcnJheTxTdGF0aWNTcHJpdGU+KCk7XHJcbmxldCBpbnRlcmFjdGFibGVTcHJpdGVzID0gbmV3IEFycmF5PEludGVyYWN0YWJsZVNwcml0ZT4oKTtcclxubGV0IG5wY1Nwcml0ZXMgPSBuZXcgQXJyYXk8TlBDU3ByaXRlPigpO1xyXG5sZXQgcGxheWVyU3ByaXRlO1xyXG5sZXQgbmF2bWVzaDtcclxuXHJcbmxldCBpdGVtcyA9IHt9OyAgICAgICAgIC8vIGRhdGFiYXNlIG9mIGl0ZW1zXHJcbmxldCBpdGVtc2xvdGJ0bnMgPSBbXTsgIC8vIGFycmF5IG9mIGl0ZW1zbG90IGh0bWwgYnV0dG9uc1xyXG5sZXQgaXRlbWJ0bnMgPSBbXTsgICAgICAvLyBhcnJheSBvZiBpdGVtIGh0bWwgYnV0dG9uc1xyXG5sZXQgaW52ZW50ID0gbmV3IEludmVudG9yeSgpOyAvLyB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbmxldCBzZWxlY3RlZEl0ZW07ICAgICAgIC8vIHVzZXIgY2FuIHNlbGVjdCBhbiBpdGVtIGZyb20gaW52ZW50b3J5IGJ5IGxlZnQgY2xpY2tpbmdcclxubGV0IHNlbGVjdGVkSXRlbUJ0bjtcclxuXHJcbi8vIHRydWUgaWZmIHRoZSBwbGF5ZXIgaXMgdGFsa2luZyB0byBhbiBOUENcclxubGV0IGluQ29udmVyc2F0aW9uOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG5sZXQgZmJXaWR0aDtcclxubGV0IGZiSGVpZ2h0O1xyXG5cclxubGV0IGxhc3RUaW1lO1xyXG5cclxuZnVuY3Rpb24gZ2FtZUxvb3AoKSAvLyBUT0RPIC0gc3BsaXQgZHJhdyBpbnRvIHVwZGF0ZSBhbmQgZHJhdyBmdW5jdGlvbnNcclxue1xyXG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGdhbWVMb29wKTtcclxuICAgIGN0eC5maWxsU3R5bGUgPSBcImJsYWNrXCI7XHJcbiAgICBjdHguZmlsbFJlY3QoMCwgMCwgZmJXaWR0aCwgZmJIZWlnaHQpO1xyXG5cclxuICAgIC8vIHNldCBvcmlnaW4gdG8gdGhlIGNhbnZhcydzIGNlbnRyZVxyXG4gICAgY3R4LnNhdmUoKTtcclxuICAgIGN0eC50cmFuc2xhdGUoZmJXaWR0aC8yLCBmYkhlaWdodC8yKTtcclxuICAgIGN0eC5zY2FsZShzY2VuZVNjYWxlLCBzY2VuZVNjYWxlKTtcclxuXHJcbiAgICBjb25zdCBjdXJyZW50VGltZSA9IERhdGUubm93KCk7XHJcbiAgICBjb25zdCBkZWx0YVRpbWUgPSBjdXJyZW50VGltZSAtIGxhc3RUaW1lO1xyXG5cclxuICAgIC8vIGRyYXcgdGhlIHNjZW5lIHNwZWNpZmljIHNwcml0ZXNcclxuICAgIGZvcihjb25zdCBzcHJpdGUgb2Ygc3RhdGljU3ByaXRlcylcclxuICAgIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3IHRoZSBzcHJpdGVzIHdoaWNoIHRoZSBwbGF5ZXIgY2FuIGludGVyYWN0IHdpdGhcclxuICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcylcclxuICAgIHtcclxuICAgICAgICBzcHJpdGUuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBkcmF3IHRoZSBOUEMgc3ByaXRlc1xyXG4gICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBucGNTcHJpdGVzKVxyXG4gICAge1xyXG4gICAgICAgIHNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIGRyYXcgdGhlIHBsYXllciBzcHJpdGVcclxuICAgIHBsYXllclNwcml0ZS5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgIC8vIERFQlVHIC0gZHJhdyB0aGUgY29sbGlzaW9uIGJveGVzXHJcbiAgICBuYXZtZXNoLmRyYXcoKTtcclxuXHJcbiAgICAvLyByZXN0b3JlIGNhbnZhcyB0byBvcmlnaW5hbCBzZXR0aW5nc1xyXG4gICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICBsYXN0VGltZSA9IGN1cnJlbnRUaW1lO1xyXG59XHJcblxyXG5mdW5jdGlvbiBhZGRJbnB1dENhbGxiYWNrcygpIHtcclxuICAgIGlucHV0TWFuYWdlci5hZGRQcmltYXJ5TW91c2VEb3duQ2FsbGJhY2soKG1vdXNleDogbnVtYmVyLCBtb3VzZXk6IG51bWJlcikgPT4ge1xyXG4gICAgICAgIGlmKCFpbkNvbnZlcnNhdGlvbikge1xyXG4gICAgICAgICAgICBsZXQgeCA9IChtb3VzZXggLSBjYW52YXMub2Zmc2V0TGVmdCAtIGZiV2lkdGgvMikgLyBzY2VuZVNjYWxlO1xyXG4gICAgICAgICAgICBsZXQgeSA9IChtb3VzZXkgLSBjYW52YXMub2Zmc2V0VG9wIC0gZmJIZWlnaHQvMikgLyBzY2VuZVNjYWxlO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImxlZnQgbW91c2UgZG93biBhdCAoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiKVwiKTtcclxuICAgICAgICAgICAgbGV0IGludGVyYWN0ZWRXaXRoU3ByaXRlOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgY2xpY2tzIG9uIGludGVyYWN0YWJsZSAoc3RhdGljKSBzcHJpdGVzXHJcbiAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgaW50ZXJhY3RhYmxlU3ByaXRlcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoc3ByaXRlLmluSW50ZXJhY3Rpb25ab25lKHBsYXllclNwcml0ZS54LCBwbGF5ZXJTcHJpdGUueSkgJiYgc3ByaXRlLmluQ2xpY2tab25lKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgc3ByaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgb2JqID0gc3ByaXRlLmludGVyYWN0KHNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYob2JqICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUob2JqLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IoY29uc3QgaXRtIG9mIG9iai5pdGVtcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW52ZW50LmFkZEl0ZW0oaXRtKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZnJlc2hBbGxJdGVtc0Rpc3BsYXllZCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKG9iai5hdWRpbyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvYmouYXVkaW8ucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUoXCJUaGF0J3MgYSBydWJiaXNoIGlkZWEhXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpbnRlcmFjdGVkV2l0aFNwcml0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBjbGlja3Mgb24gTlBDIHNwcml0ZXNcclxuICAgICAgICAgICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBucGNTcHJpdGVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihzcHJpdGUuaW5JbnRlcmFjdGlvblpvbmUocGxheWVyU3ByaXRlLngsIHBsYXllclNwcml0ZS55KSAmJiBzcHJpdGUuaW5DbGlja1pvbmUoeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICBvcGVuQ2hhdEdVSShzcHJpdGUuZ2V0Q29udmVyc2F0aW9uKCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGludGVyYWN0ZWRXaXRoU3ByaXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYoIWludGVyYWN0ZWRXaXRoU3ByaXRlKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgd2F5cG9pbnRzID0gbmF2bWVzaC5nZXRXYXlwb2ludHMocGxheWVyU3ByaXRlLngsIHBsYXllclNwcml0ZS55LCB4LCB5KTtcclxuICAgICAgICAgICAgICAgIHBsYXllclNwcml0ZS5zZXRXYXlwb2ludHMod2F5cG9pbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIGlucHV0TWFuYWdlci5hZGRTZWNvbmRhcnlNb3VzZURvd25DYWxsYmFjaygobW91c2V4OiBudW1iZXIsIG1vdXNleTogbnVtYmVyKSA9PiB7XHJcbiAgICAgICAgaWYoIWluQ29udmVyc2F0aW9uKSB7XHJcbiAgICAgICAgICAgIGxldCB4ID0gKG1vdXNleCAtIGNhbnZhcy5vZmZzZXRMZWZ0IC0gZmJXaWR0aC8yKSAvIHNjZW5lU2NhbGU7XHJcbiAgICAgICAgICAgIGxldCB5ID0gKG1vdXNleSAtIGNhbnZhcy5vZmZzZXRUb3AgLSBmYkhlaWdodC8yKSAvIHNjZW5lU2NhbGU7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwicmlnaHQgbW91c2UgZG93biBhdCAoXCIgKyB4ICsgXCIsIFwiICsgeSArIFwiKVwiKTtcclxuXHJcbiAgICAgICAgICAgIC8vIGNoZWNrIGZvciBjbGlja3Mgb24gaW50ZXJhY3RhYmxlIChzdGF0aWMpIHNwcml0ZXNcclxuICAgICAgICAgICAgZm9yKGNvbnN0IHNwcml0ZSBvZiBpbnRlcmFjdGFibGVTcHJpdGVzKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZihzcHJpdGUuaW5DbGlja1pvbmUoeCwgeSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBleGFtaW5lIHRoZSBpbnRlcmFjdGFibGUgc3ByaXRlXHJcbiAgICAgICAgICAgICAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUoc3ByaXRlLmdldEV4YW1pbmVUZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHNwcml0ZS5nZXRFeGFtaW5lQXVkaW8oKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZS5nZXRFeGFtaW5lQXVkaW8oKS5wbGF5KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBjaGVjayBmb3IgY2xpY2tzIG9uIE5QQyBzcHJpdGVzXHJcbiAgICAgICAgICAgIGZvcihjb25zdCBzcHJpdGUgb2YgbnBjU3ByaXRlcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWYoc3ByaXRlLmluQ2xpY2tab25lKHgsIHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZXhhbWluZSB0aGUgTlBDIHNwcml0ZVxyXG4gICAgICAgICAgICAgICAgICAgIHBsYXllclNwcml0ZS5vcGVuU3BlZWNoQnViYmxlKHNwcml0ZS5nZXRFeGFtaW5lVGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZihzcHJpdGUuZ2V0RXhhbWluZUF1ZGlvKCkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcHJpdGUuZ2V0RXhhbWluZUF1ZGlvKCkucGxheSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcblxyXG5mdW5jdGlvbiBsb2FkUGxheWVyU3ByaXRlKCk6IFByb21pc2U8QW5pbWF0ZWRTcHJpdGU+XHJcbntcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZTxBbmltYXRlZFNwcml0ZT4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGxldCBhdGxhcyA9IG5ldyBUZXh0dXJlQXRsYXMoXCJyZXMvYXRsYXNlcy9hbmltYXRlZC5wbmdcIik7XHJcbiAgICAgICAgbGV0IHBsYXllclNwcml0ZTtcclxuICAgICAgICBjb25zdCBhdGxhc0xvYWRlZFByb21pc2UgPSBhdGxhcy5sb2FkKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IFRFU1RfQU5JTUFUSU9OID0gbmV3IFNwcml0ZUFuaW1hdGlvbigyLCBhdGxhcywgXCJhbmltYXRlZFwiKTtcclxuICAgICAgICAgICAgcGxheWVyU3ByaXRlID0gbmV3IFBsYXllclNwcml0ZSgxMDAsIDIwMCwgMS4yNSwgXCJjZW50cmVcIiwgXCJ0b3BcIiwgW1RFU1RfQU5JTUFUSU9OXSk7XHJcbiAgICAgICAgICAgIHBsYXllclNwcml0ZS5zZXRDdXJyZW50QW5pbWF0aW9uKDApO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiB1bmFibGUgdG8gbG9hZCBwbGF5ZXIgc3ByaXRlIHRleHR1cmUgYXRsYXMnKTtcclxuICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICBsZXQgc3BlZWNoQnViYmxlSW1hZ2U7XHJcbiAgICAgICAgY29uc3Qgc3BlZWNoQnViYmxlTG9hZGVkUHJvbWlzZSA9IEltYWdlTG9hZGVyLmxvYWRJbWFnZShcInJlcy9pbWFnZXMvc3BlZWNoX2J1YmJsZS5wbmdcIikudGhlbigoaW1nKSA9PiB7XHJcbiAgICAgICAgICAgIHNwZWVjaEJ1YmJsZUltYWdlID0gaW1nO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJvcjogc3BlZWNoIGJ1YmJsZSBpbWFnZSBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIFByb21pc2UuYWxsKFthdGxhc0xvYWRlZFByb21pc2UsIHNwZWVjaEJ1YmJsZUxvYWRlZFByb21pc2VdKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgcGxheWVyU3ByaXRlLnNldFNwZWVjaEJ1YmJsZUltYWdlKHNwZWVjaEJ1YmJsZUltYWdlKTtcclxuICAgICAgICAgICAgcmVzb2x2ZShwbGF5ZXJTcHJpdGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbi8vIHByb2dyYW0gZW50cnkgcG9pbnRcclxud2luZG93Lm9ubG9hZCA9ICgpID0+XHJcbntcclxuICAgIGluaXRDYW52YXNBbmRDb250ZXh0KCk7XHJcbiAgICBpbnB1dE1hbmFnZXIgPSBuZXcgSW5wdXRNYW5hZ2VyKGNhbnZhcyk7XHJcbiAgICBhZGRJbnB1dENhbGxiYWNrcygpO1xyXG5cclxuICAgIC8vIHNldCB0aGUgY2FudmFzIHNpemVcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC45NTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjk1O1xyXG4gICAgZmJXaWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgIGZiSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuXHJcbiAgICAvLyBsZXZlbCBzZXR1cCBkYXRhXHJcbiAgICBsZXQgcGxheWVyU3RhcnRYID0gMDtcclxuICAgIGxldCBwbGF5ZXJTdGFydFkgPSAwO1xyXG5cclxuICAgIGNvbnN0IGxvYWRQbGF5ZXJTcHJpdGVQcm9taXNlID0gbG9hZFBsYXllclNwcml0ZSgpLnRoZW4oKHNwcml0ZSkgPT4ge1xyXG4gICAgICAgIHBsYXllclNwcml0ZSA9IHNwcml0ZTtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yXCIpO1xyXG4gICAgfSk7XHJcblxyXG4gICAgY29uc3QgbG9hZEl0ZW1zUHJvbWlzZSA9IEpTT05Mb2FkZXIubG9hZEpTT05GaWxlKFwicmVzL2l0ZW1zL2l0ZW1zLmpzb25cIikudGhlbigob2JqKSA9PiB7XHJcbiAgICAgICAgLy9jb25zb2xlLmxvZyhvYmouaXRlbXMpXHJcbiAgICAgICAgZm9yKGNvbnN0IGlkIGluIG9iai5pdGVtcylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0bSA9IG9iai5pdGVtc1tpZF07XHJcbiAgICAgICAgICAgIGl0ZW1zW2lkXSA9IG5ldyBJdGVtKGl0bS5uYW1lLCBpdG0uZXhhbWluZV90ZXh0LCBuZXcgQXVkaW8oaXRtLmV4YW1pbmVfYXVkaW8pLCBpdG0uaW1hZ2UpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IoY29uc3QgaWQgaW4gb2JqLmNvbWJpbmF0aW9ucylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbWJpbmF0aW9uID0gb2JqLmNvbWJpbmF0aW9uc1tpZF07XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW0xID0gaXRlbXNbY29tYmluYXRpb24uaXRlbTFdO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtMiA9IGl0ZW1zW2NvbWJpbmF0aW9uLml0ZW0yXTtcclxuICAgICAgICAgICAgY29uc3QgaXRlbXNPdXQgPSBbXTtcclxuICAgICAgICAgICAgZm9yKGNvbnN0IGlkT3V0IG9mIGNvbWJpbmF0aW9uLml0ZW1zX291dClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbXNPdXQucHVzaChpdGVtc1tpZE91dF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmKGl0ZW0xICE9IG51bGwgJiYgaXRlbTIgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaXRlbTEuYWRkQ29tYmluYXRpb24oaXRlbTIsIGl0ZW1zT3V0KTtcclxuICAgICAgICAgICAgICAgIGl0ZW0yLmFkZENvbWJpbmF0aW9uKGl0ZW0xLCBpdGVtc091dCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgbG9hZFBsYXllckludmVudG9yeShcImFja1wiKTtcclxuICAgICAgICBpbml0R1VJQ29udHJvbGxlcnMoKTtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBpdGVtcyBjb3VsZCBub3QgYmUgbG9hZGVkXCIpO1xyXG4gICAgfSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIExldmVsLmxvYWRMZXZlbChcInJlcy9sZXZlbHMvbGV2ZWwxLmpzb25cIiwgaXRlbXMpO1xyXG4gICAgfSkudGhlbigobGV2ZWxEYXRhKSA9PiB7XHJcbiAgICAgICAgaW1nID0gbGV2ZWxEYXRhLmJhY2tncm91bmRJbWc7XHJcbiAgICAgICAgc3RhdGljU3ByaXRlcyA9IGxldmVsRGF0YS5zdGF0aWNTcHJpdGVzO1xyXG4gICAgICAgIGludGVyYWN0YWJsZVNwcml0ZXMgPSBsZXZlbERhdGEuaW50ZXJhY3RhYmxlU3ByaXRlcztcclxuICAgICAgICBucGNTcHJpdGVzID0gbGV2ZWxEYXRhLm5wY1Nwcml0ZXM7XHJcbiAgICAgICAgbGV2ZWxTY2FsZSA9IGxldmVsRGF0YS5zY2VuZVNjYWxlID8gbGV2ZWxEYXRhLnNjZW5lU2NhbGUgOiAxLjA7XHJcbiAgICAgICAgc2NlbmVTY2FsZSA9IGxldmVsU2NhbGUgKiBjYW52YXMuaGVpZ2h0Lzg4MDsgIC8vIHNjYWxlIGJhc2VkIG9uIHRoZSBjYW52YXMgc2l6ZSBzbyBnYW1lIGZpdHMgb24gc2NyZWVuXHJcbiAgICAgICAgZGVwdGhTY2FsZVkgPSBsZXZlbERhdGEuZGVwdGhTY2FsZVk7XHJcblxyXG4gICAgICAgIHBsYXllclN0YXJ0WCA9IGxldmVsRGF0YS5wbGF5ZXJTdGFydFg7XHJcbiAgICAgICAgcGxheWVyU3RhcnRZID0gbGV2ZWxEYXRhLnBsYXllclN0YXJ0WTtcclxuXHJcbiAgICAgICAgbmF2bWVzaCA9IGxldmVsRGF0YS5uYXZtZXNoO1xyXG4gICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXJyb3I6IGxldmVsIGNvdWxkIG5vdCBiZSBsb2FkZWRcIik7XHJcbiAgICB9KTtcclxuXHJcbiAgICBQcm9taXNlLmFsbChbbG9hZFBsYXllclNwcml0ZVByb21pc2UsIGxvYWRJdGVtc1Byb21pc2VdKS50aGVuKCgpID0+IHtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUueCA9IHBsYXllclN0YXJ0WDtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUueSA9IHBsYXllclN0YXJ0WTtcclxuICAgICAgICBwbGF5ZXJTcHJpdGUuc2V0U3RhcnRQb3MocGxheWVyU3RhcnRYLCBwbGF5ZXJTdGFydFkpO1xyXG4gICAgICAgIHBsYXllclNwcml0ZS5zZXREZXB0aFNjYWxlKGRlcHRoU2NhbGVZKTtcclxuICAgICAgICBsYXN0VGltZSA9IERhdGUubm93KCk7XHJcbiAgICAgICAgZ2FtZUxvb3AoKTtcclxuICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICBjb25zb2xlLmxvZyhcImVycm9yOiBnYW1lIGNvdWxkIG5vdCBiZSBsb2FkZWRcIik7XHJcbiAgICB9KTtcclxufVxyXG5cclxuLy8gb24gd2luZG93IHJlc2l6ZSBjaGFuZ2UgdGhlIHNjYWxlXHJcbndpbmRvdy5vbnJlc2l6ZSA9ICgpID0+IHtcclxuICAgIC8vIHNldCB0aGUgY2FudmFzIHNpemVcclxuICAgIGNhbnZhcy53aWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoICogMC45NTtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSB3aW5kb3cuaW5uZXJIZWlnaHQgKiAwLjk1O1xyXG4gICAgZmJXaWR0aCA9IGNhbnZhcy53aWR0aDtcclxuICAgIGZiSGVpZ2h0ID0gY2FudmFzLmhlaWdodDtcclxuICAgIHNjZW5lU2NhbGUgPSBsZXZlbFNjYWxlICogY2FudmFzLmhlaWdodC84ODA7ICAvLyBzY2FsZSBiYXNlZCBvbiB0aGUgY2FudmFzIHNpemUgc28gZ2FtZSBmaXRzIG9uIHNjcmVlblxyXG4gICAgY29uc29sZS5sb2coc2NlbmVTY2FsZSk7XHJcbn1cclxuXHJcbi8vIGxvYWQgdGhlIHBsYXllcidzIGludmVudG9yeVxyXG5mdW5jdGlvbiBsb2FkUGxheWVySW52ZW50b3J5KHBhdGg6IHN0cmluZykge1xyXG4gICAgLy8gVE9ETyAtIGxvYWQgZnJvbSBmaWxlXHJcbiAgICAvL2ludmVudC5hZGRJdGVtKGl0ZW1zW1wiMC4wLjEtMDAxXCJdKTtcclxuICAgIC8vaW52ZW50LmFkZEl0ZW0oaXRlbXNbXCIwLjAuMS0wMDJcIl0pO1xyXG4gICAgLy9pbnZlbnQuYWRkSXRlbShpdGVtc1tcIjAuMC4xLTAwMlwiXSk7XHJcbiAgICAvL2ludmVudC5hZGRJdGVtKGl0ZW1zW1wiMC4wLjEtMDAzXCJdKTtcclxufVxyXG5cclxuLy8gY2hhdCBndWlcclxuZnVuY3Rpb24gb3BlbkNoYXRHVUkoY29udmVyc2F0aW9uOiBDb252ZXJzYXRpb24pIHtcclxuICAgIGlmKGNvbnZlcnNhdGlvbiAhPSBudWxsKSB7XHJcbiAgICAgICAgbGV0IGNoYXRwYW5lbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2hhdHBhbmVsXCIpO1xyXG4gICAgICAgIGlmKGNoYXRwYW5lbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIHJlbW92ZSB0aGUgY2hhdCBwYW5lbCBpZiBpdCBhbHJlYWR5IGV4aXN0c1xyXG4gICAgICAgICAgICBjaGF0cGFuZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChjaGF0cGFuZWwpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhdHBhbmVsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcclxuICAgICAgICBjaGF0cGFuZWwuaWQgPSBcImNoYXRwYW5lbFwiO1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGNoYXRwYW5lbCwgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpbnZlbnRcIikpO1xyXG5cclxuICAgICAgICAvLyBjcmVhdGUgYSBHVUkgZm9yIHRoZSBkaWFsb2dcclxuICAgICAgICBsZXQgZCA9IGNvbnZlcnNhdGlvbi5nZXRGaXJzdERpYWxvZygpO1xyXG4gICAgICAgIGNyZWF0ZURpYWxvZ0dVSShjaGF0cGFuZWwgYXMgSFRNTERpdkVsZW1lbnQsIGQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVEaWFsb2dHVUkoY2hhdHBhbmVsOiBIVE1MRGl2RWxlbWVudCwgZDogRGlhbG9nKSB7XHJcbiAgICBjaGF0cGFuZWwuaW5uZXJIVE1MID0gXCJcIjsgICAvLyBjbGVhciB0aGUgZGl2IG9mIHByZXZpb3VzIGNvbnRlbnRzXHJcblxyXG4gICAgaWYoZCAhPSBudWxsKSB7XHJcbiAgICAgICAgaW5Db252ZXJzYXRpb24gPSB0cnVlO1xyXG5cclxuICAgICAgICAvLyBhZGQgdGhlIHNwZWFrZXIgaW1hZ2UgYmFzZWQgb24gd2hldGhlciBwbGF5ZXIgb3IgbnBjIGlzIHNwZWFraW5nXHJcbiAgICAgICAgbGV0IHNwZWFrZXJpbWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaW1nXCIpO1xyXG4gICAgICAgIHNwZWFrZXJpbWcuc3JjID0gXCJyZXMvaW1hZ2VzL3BsYXllcl9oZWFkLnBuZ1wiO1xyXG4gICAgICAgIHNwZWFrZXJpbWcuY2xhc3NMaXN0LmFkZChkLmdldFNwZWFrZXIoKSA9PSBcInBsYXllclwiID8gXCJwbGF5ZXJjaGF0aGVhZFwiIDogXCJucGNjaGF0aGVhZFwiKTtcclxuICAgICAgICBjaGF0cGFuZWwuYXBwZW5kQ2hpbGQoc3BlYWtlcmltZyk7XHJcblxyXG4gICAgICAgIC8vIGFkZCBsYWJlbHMgYW5kIGJ1dHRvbnMgZm9yIHRoaXMgZGlhbG9nXHJcbiAgICAgICAgZC5jcmVhdGVHVUlFbGVtZW50KGNoYXRwYW5lbCwgaW52ZW50KS50aGVuKChuZXh0RGlhbG9nOiBEaWFsb2cpID0+IHtcclxuICAgICAgICAgICAgaWYobmV4dERpYWxvZyAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBzdG9wIHRoZSBkaWFsb2cgYXVkaW9cclxuICAgICAgICAgICAgICAgIGlmKGQuZ2V0QXVkaW8oKSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZC5nZXRBdWRpbygpLnBhdXNlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZC5nZXRBdWRpbygpLmN1cnJlbnRUaW1lID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyBhZHZhbmNlIHRvIG5leHQgZGlhbG9nXHJcbiAgICAgICAgICAgICAgICBjcmVhdGVEaWFsb2dHVUkoY2hhdHBhbmVsLCBuZXh0RGlhbG9nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8vIG5leHQgZGlhbG9nIGlzIG51bGwsIHRoZXJlZm9yZSwgZXhpdCBjb252ZXJzYXRpb25cclxuICAgICAgICAgICAgICAgIGNoYXRwYW5lbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGNoYXRwYW5lbCk7XHJcbiAgICAgICAgICAgICAgICBpbkNvbnZlcnNhdGlvbiA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIC8vIHJlZnJlc2ggaW52ZW50b3J5IEdVSVxyXG4gICAgICAgIHJlZnJlc2hBbGxJdGVtc0Rpc3BsYXllZCgpO1xyXG5cclxuICAgICAgICAvLyBwbGF5IHRoZSBkaWFsb2cgYXVkaW9cclxuICAgICAgICBpZihkLmdldEF1ZGlvKCkgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICBkLmdldEF1ZGlvKCkucGxheSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8gZ3VpIGNvbnRyb2xcclxuZnVuY3Rpb24gaW5pdEdVSUNvbnRyb2xsZXJzKCkge1xyXG4gICAgLy8gZ2V0IGFsbCBvZiB0aGUgaXRlbSBzbG90IGh0bWwgYnV0dG9uc1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDFcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDJcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDNcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDRcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDVcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDZcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDdcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDhcIikpO1xyXG4gICAgaXRlbXNsb3RidG5zLnB1c2goZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJpdGVtc2xvdDlcIikpO1xyXG5cclxuICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGludmVudC5nZXRJdGVtcygpLmxlbmd0aDsgaW5kZXggKyspIHtcclxuICAgICAgICBjb25zdCBpdGVtID0gaW52ZW50LmdldEl0ZW1zKClbaW5kZXhdO1xyXG4gICAgICAgIGlmKGl0ZW0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAvLyBhZGQgYSBidXR0b24gZm9yIGVhY2ggaXRlbSBpbiB0aGUgcGxheWVyJ3MgaW52ZW50b3J5XHJcbiAgICAgICAgICAgIGFkZE5ld0l0ZW1CdXR0b24oaW5kZXgsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpdGVtc2xvdGJ0bnMubGVuZ3RoOyBpbmRleCArKylcclxuICAgIHtcclxuICAgICAgICBjb25zdCBpdGVtc2xvdGJ0biA9IGl0ZW1zbG90YnRuc1tpbmRleF07XHJcbiAgICAgICAgaXRlbXNsb3RidG4ub25jbGljayA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICAgICAgb25JdGVtU2xvdENsaWNrKGl0ZW1zbG90YnRuLCBpbmRleCwgZXZ0KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGFkZE5ld0l0ZW1CdXR0b24oaXRlbXNsb3RJbmRleDogbnVtYmVyLCBpdGVtOiBJdGVtKVxyXG57XHJcbiAgICAvLyBhZGQgYSBidXR0b24gZm9yIHRoZSBpdGVtXHJcbiAgICBsZXQgaXRlbWJ0biA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XHJcbiAgICBpdGVtYnRuLmNsYXNzTGlzdC5hZGQoXCJpdGVtXCIpO1xyXG4gICAgaXRlbWJ0bi5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2l0ZW0uZ2V0SW1hZ2VQYXRoKCl9KTtgO1xyXG5cclxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW52ZW50XCIpLmluc2VydEJlZm9yZShpdGVtYnRuLCBpdGVtc2xvdGJ0bnNbaXRlbXNsb3RJbmRleF0pO1xyXG5cclxuICAgIC8vIGFkZCBhIG1vdXNlIGNsaWNrIGNhbGxiYWNrIHRvIHRoZSBuZXcgZWxlbWVudFxyXG4gICAgaXRlbWJ0bi5vbm1vdXNlZG93biA9IChldnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuICAgICAgICBvbkl0ZW1DbGljayhpdGVtYnRuLCBpdGVtLCBldnQpO1xyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoQWxsSXRlbXNEaXNwbGF5ZWQoKVxyXG57XHJcbiAgICAvLyBmaXJzdCwgcmVtb3ZlIGFsbCBpdGVtIGJ1dHRvbnMgZnJvbSB0aGUgZG9tXHJcbiAgICBjb25zdCBlbGVtcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJpdGVtXCIpO1xyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZWxlbXMubGVuZ3RoOyBpbmRleCArKylcclxuICAgIHtcclxuICAgICAgICBsZXQgZWxlbWVudCA9IGVsZW1zW2luZGV4XTtcclxuICAgICAgICBlbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoZWxlbWVudCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gYWRkIGEgYnV0dG9uIGZvciBlYWNoIGl0ZW0gaW4gdGhlIHBsYXllcidzIGludmVudG9yeVxyXG4gICAgZm9yKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW52ZW50LmdldEl0ZW1zKCkubGVuZ3RoOyBpbmRleCArKykge1xyXG4gICAgICAgIGNvbnN0IGl0ZW0gPSBpbnZlbnQuZ2V0SXRlbXMoKVtpbmRleF07XHJcbiAgICAgICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIC8vIGFkZCBhIGJ1dHRvbiBmb3IgZWFjaCBpdGVtIGluIHRoZSBwbGF5ZXIncyBpbnZlbnRvcnlcclxuICAgICAgICAgICAgYWRkTmV3SXRlbUJ1dHRvbihpbmRleCwgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiByZWZyZXNoSXRlbURpc3BsYXllZChpdGVtYnRuOiBIVE1MQnV0dG9uRWxlbWVudCwgaXRlbTogSXRlbSlcclxue1xyXG4gICAgaWYoaXRlbSAhPSBudWxsKSB7XHJcbiAgICAgICAgLy8gY2hhbmdlIHRoZSBpbWFnZSBkaXNwbGF5ZWQgb24gdGhlIGl0ZW0gYnV0dG9uXHJcbiAgICAgICAgaXRlbWJ0bi5zdHlsZS5jc3NUZXh0ID0gYGJhY2tncm91bmQtaW1hZ2U6IHVybCgke2l0ZW0uZ2V0SW1hZ2VQYXRoKCl9KTtgO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICAvLyByZW1vdmUgdGhlIGl0ZW0gYnV0dG9uIGZyb20gdGhlIGRvbVxyXG4gICAgICAgIGl0ZW1idG4ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtYnRuKTtcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gb25JdGVtU2xvdENsaWNrKGl0ZW1zbG90YnRuOiBIVE1MQnV0dG9uRWxlbWVudCwgaXRlbXNsb3RJbmRleDogbnVtYmVyLCBldnQ6IE1vdXNlRXZlbnQpXHJcbntcclxuICAgIC8vIG1vdmUgc2VsZWN0ZWQgaXRlbSB0byB0aGlzIHNsb3RcclxuICAgIGlmKHNlbGVjdGVkSXRlbSAhPSBudWxsICYmIHNlbGVjdGVkSXRlbUJ0biAhPSBudWxsKVxyXG4gICAge1xyXG4gICAgICAgIC8vIHJlbW92ZSBmcm9tIHByZXZpb3VzIGl0ZW1zbG90IGFuZCBhZGQgdG8gbmV3IGl0ZW1zbG90XHJcbiAgICAgICAgc2VsZWN0ZWRJdGVtQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZGl0ZW1cIik7XHJcbiAgICAgICAgcmVmcmVzaEl0ZW1EaXNwbGF5ZWQoc2VsZWN0ZWRJdGVtQnRuLCBudWxsKTtcclxuICAgICAgICBhZGROZXdJdGVtQnV0dG9uKGl0ZW1zbG90SW5kZXgsIHNlbGVjdGVkSXRlbSk7XHJcbiAgICAgICAgY29uc29sZS5sb2coaW52ZW50Lm1vdmVJdGVtKHNlbGVjdGVkSXRlbSwgaXRlbXNsb3RJbmRleCkpO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGludmVudC5nZXRJdGVtcygpKTtcclxuICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG4gICAgICAgIHNlbGVjdGVkSXRlbUJ0biA9IG51bGw7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIG9uSXRlbUNsaWNrKGl0ZW1idG46IEhUTUxCdXR0b25FbGVtZW50LCBpdGVtOiBJdGVtLCBldnQ6IE1vdXNlRXZlbnQpXHJcbntcclxuICAgIGlmKGV2dC5idXR0b24gPT09IDApIHsgIC8vIGxlZnQgY2xpY2tcclxuICAgICAgICAvLyBjb21iaW5lIDIgaXRlbXMsIChjYW4ndCBjb21iaW5lIGl0ZW0gd2l0aCBpdHNlbGYpXHJcbiAgICAgICAgaWYoc2VsZWN0ZWRJdGVtICE9IG51bGwgJiYgc2VsZWN0ZWRJdGVtQnRuICE9IG51bGwgJiYgaXRlbSAhPT0gc2VsZWN0ZWRJdGVtKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3Qgb3V0SXRlbXMgPSBzZWxlY3RlZEl0ZW0uY29tYmluZShpdGVtKTtcclxuICAgICAgICAgICAgaWYob3V0SXRlbXMgIT0gbnVsbClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgcmVmcmVzaEl0ZW1EaXNwbGF5ZWQoc2VsZWN0ZWRJdGVtQnRuLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hJdGVtRGlzcGxheWVkKGl0ZW1idG4sIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgaW52ZW50LnJlbW92ZUl0ZW0oc2VsZWN0ZWRJdGVtKTtcclxuICAgICAgICAgICAgICAgIGludmVudC5yZW1vdmVJdGVtKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgZm9yKGNvbnN0IG91dEl0ZW0gb2Ygb3V0SXRlbXMpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW52ZW50LmFkZEl0ZW0ob3V0SXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGludmVudC5nZXRJdGVtcygpKTtcclxuICAgICAgICAgICAgICAgIHJlZnJlc2hBbGxJdGVtc0Rpc3BsYXllZCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZGl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gbnVsbDtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzZWxlY3QgYW4gaXRlbVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGlmKGl0ZW0gPT09IHNlbGVjdGVkSXRlbSkge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuLmNsYXNzTGlzdC5yZW1vdmUoXCJzZWxlY3RlZGl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW0gPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuID0gbnVsbDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkSXRlbSA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEl0ZW1CdG4gPSBpdGVtYnRuO1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWRJdGVtQnRuLmNsYXNzTGlzdC5hZGQoXCJzZWxlY3RlZGl0ZW1cIik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9IGVsc2UgaWYoZXZ0LmJ1dHRvbiA9PT0gMikgeyAgIC8vIHJpZ2h0IGNsaWNrXHJcbiAgICAgICAgcGxheWVyU3ByaXRlLm9wZW5TcGVlY2hCdWJibGUoaXRlbS5nZXRFeGFtaW5lVGV4dCgpKTtcclxuICAgICAgICBpZihpdGVtLmdldEV4YW1pbmVBdWRpbygpICE9IG51bGwpIHtcclxuICAgICAgICAgICAgaXRlbS5nZXRFeGFtaW5lQXVkaW8oKS5wbGF5KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsIi8vZGVjbGFyZSBQcm9taXNlIGFueTtcclxuXHJcbmV4cG9ydCBjbGFzcyBJbWFnZUxvYWRlclxyXG57XHJcbiAgICBwdWJsaWMgc3RhdGljIGxvYWRJbWFnZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPEhUTUxJbWFnZUVsZW1lbnQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaW1nID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgICAgIGltZy5zcmMgPSBwYXRoO1xyXG4gICAgICAgICAgICBpbWcub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZShpbWcpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGltZy5vbmVycm9yID0gKGVycikgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG51bGwpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGNsYXNzIEpTT05Mb2FkZXJcclxue1xyXG4gICAgc3RhdGljIGxvYWRKU09ORmlsZShwYXRoOiBzdHJpbmcpOiBQcm9taXNlPGFueT5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8YW55PigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcclxuICAgICAgICAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FICYmIHhoci5zdGF0dXMgPT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG9iaiA9IEpTT04ucGFyc2UoeGhyLnJlc3BvbnNlVGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShvYmopO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmKHhoci5yZWFkeVN0YXRlID09PSBYTUxIdHRwUmVxdWVzdC5ET05FICYmIHhoci5zdGF0dXMgIT09IDIwMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5zdGF0dXMpO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHhoci5zdGF0dXNUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2cocGF0aCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKFwiR0VUXCIsIHBhdGgsIHRydWUpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9TcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuXHJcbmV4cG9ydCBjbGFzcyBBbmltYXRlZFNwcml0ZSBleHRlbmRzIFNwcml0ZVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgc3ByaXRlQW5pbWF0aW9uczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPiA9IFtdO1xyXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRBbmltYXRpb24gPSAtMTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4pIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwpO1xyXG4gICAgICAgIGlmKGFuaW1zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb25zID0gYW5pbXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50QW5pbWF0aW9uID49IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbSA9IHRoaXMuc3ByaXRlQW5pbWF0aW9uc1t0aGlzLmN1cnJlbnRBbmltYXRpb25dO1xyXG4gICAgICAgICAgICB0aGlzLnJlZnJlc2hPcmlnaW4oYW5pbS5nZXRDdXJyZW50RnJhbWUoKS53LCBhbmltLmdldEN1cnJlbnRGcmFtZSgpLmgpO1xyXG4gICAgICAgICAgICBhbmltLmRyYXcoY3VycmVudFRpbWUsIHRoaXMub3JpZ2luWCwgdGhpcy5vcmlnaW5ZLCB0aGlzLnNjYWxlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldEN1cnJlbnRBbmltYXRpb24gPSAobmV3QW5pbWF0aW9uSW5kZXg6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmKG5ld0FuaW1hdGlvbkluZGV4IDwgdGhpcy5zcHJpdGVBbmltYXRpb25zLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRBbmltYXRpb24gPSBuZXdBbmltYXRpb25JbmRleDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFkZFNwcml0ZUFuaW1hdGlvbiA9IChhbmltKTogdm9pZCA9PiB7XHJcbiAgICAgICAgaWYoYW5pbSAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByaXRlQW5pbWF0aW9ucy5wdXNoKGFuaW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0U3ByaXRlQW5pbWF0aW9ucyA9IChhbmltczogQXJyYXk8U3ByaXRlQW5pbWF0aW9uPik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGlmKGFuaW1zICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcHJpdGVBbmltYXRpb25zID0gYW5pbXM7XHJcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEFuaW1hdGlvbiA9IC0xO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0UG9zKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy54ID0geDtcclxuICAgICAgICB0aGlzLnkgPSB5O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge1N0YXRpY1Nwcml0ZX0gZnJvbSBcIi4vU3RhdGljU3ByaXRlXCJcclxuaW1wb3J0IHtJbnRlcmFjdGlvbn0gZnJvbSBcIi4uL2dhbWUvSW50ZXJhY3Rpb25cIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4vVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtJdGVtfSBmcm9tIFwiLi4vaXRlbXMvSXRlbVwiXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL0NpcmNsZVwiXHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RhbmdsZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgSW50ZXJhY3RhYmxlU3ByaXRlIGV4dGVuZHMgU3RhdGljU3ByaXRlXHJcbntcclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGF0bGFzOiBUZXh0dXJlQXRsYXMsIGltYWdlTmFtZTogc3RyaW5nLFxyXG4gICAgICAgICAgICAgICAgcHJvdGVjdGVkIGV4YW1pbmVUZXh0OiBzdHJpbmcsIHByb3RlY3RlZCBleGFtaW5lQXVkaW86IEhUTUxBdWRpb0VsZW1lbnQsIHByb3RlY3RlZCBpbnRlcmFjdGlvblpvbmU6IENpcmNsZSwgcHJvdGVjdGVkIGNsaWNrWm9uZTogUmVjdGFuZ2xlLCBwcm90ZWN0ZWQgaW50ZXJhY3Rpb25zOiBBcnJheTxJbnRlcmFjdGlvbj4pXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhdGxhcywgaW1hZ2VOYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICAvLyBERUJVRyAtIGRyYXcgdGhlIGNpcmNsZSBhbmQgcmVjdGFuZ2xlXHJcbiAgICAgICAgdGhpcy5jbGlja1pvbmUuZHJhdygpO1xyXG4gICAgICAgIHRoaXMuaW50ZXJhY3Rpb25ab25lLmRyYXcoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5JbnRlcmFjdGlvblpvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJhY3Rpb25ab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbkNsaWNrWm9uZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGlja1pvbmUuY29udGFpbnMoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gaW50ZXJhY3Qgd2l0aCB0aGUgc3ByaXRlXHJcbiAgICAvLyBpdGVtIGNhbiBiZSBudWxsXHJcbiAgICBwdWJsaWMgaW50ZXJhY3QoaXRlbTogSXRlbSk6IHt0ZXh0OiBzdHJpbmcsIGF1ZGlvOiBIVE1MQXVkaW9FbGVtZW50LCBpdGVtczogQXJyYXk8SXRlbT59XHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGNvbnN0IGludGVyIG9mIHRoaXMuaW50ZXJhY3Rpb25zKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgLy8gaWYgdGhlIGl0ZW1zIG1hdGNoLCB0aGVuIGludGVyYWN0IHdpdGggdGhlIG9iamVjdFxyXG4gICAgICAgICAgICBpZihpbnRlci5nZXRJdGVtKCkgPT0gaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IGludGVyLmludGVyYWN0KGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgaWYob2JqICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyByZW1vdmUgdGhlIGludGVyYWN0aW9uIGlmIGl0IGhhcyBiZWVuIGZ1bGZpbGxlZFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW50ZXJhY3Rpb25zLnNwbGljZSh0aGlzLmludGVyYWN0aW9ucy5pbmRleE9mKGludGVyKSwgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gb2JqO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0RXhhbWluZVRleHQoKTogc3RyaW5nXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZVRleHQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVBdWRpbygpOiBIVE1MQXVkaW9FbGVtZW50XHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuZXhhbWluZUF1ZGlvO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7TmF2U3ByaXRlfSBmcm9tIFwiLi9OYXZTcHJpdGVcIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi4vY29sbGlzaW9uL1BvaW50XCJcclxuaW1wb3J0IHtBbmltYXRlZFNwcml0ZX0gZnJvbSBcIi4vQW5pbWF0ZWRTcHJpdGVcIlxyXG5pbXBvcnQge1Nwcml0ZUFuaW1hdGlvbn0gZnJvbSBcIi4vU3ByaXRlQW5pbWF0aW9uXCJcclxuaW1wb3J0IHtDb252ZXJzYXRpb259IGZyb20gXCIuLi9jaGF0L0NvbnZlcnNhdGlvblwiXHJcbmltcG9ydCB7Q2lyY2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL0NpcmNsZVwiXHJcbmltcG9ydCB7UmVjdGFuZ2xlfSBmcm9tIFwiLi4vY29sbGlzaW9uL1JlY3RhbmdsZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgTlBDU3ByaXRlIGV4dGVuZHMgTmF2U3ByaXRlXHJcbntcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlT3BlbjogYm9vbGVhbiA9IGZhbHNlO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVTaG93bkF0OiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZVRleHQ6IHN0cmluZztcclxuICAgIHByaXZhdGUgdGV4dFdpZHRoOiBudW1iZXI7ICAvLyB3aWR0aCBvZiB0aGUgdGV4dCBpbiBwaXhlbHNcclxuICAgIHByaXZhdGUgcmVhZG9ubHkgQkFTRV9GT05UX1NJWkUgPSA3NTtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4sXHJcbiAgICAgICAgICAgICAgICBwcm90ZWN0ZWQgZXhhbWluZVRleHQ6IHN0cmluZywgcHJvdGVjdGVkIGV4YW1pbmVBdWRpbzogSFRNTEF1ZGlvRWxlbWVudCwgcHJvdGVjdGVkIGludGVyYWN0aW9uWm9uZTogQ2lyY2xlLCBwcm90ZWN0ZWQgY2xpY2tab25lOiBSZWN0YW5nbGUsIHByb3RlY3RlZCBjb252ZXJzYXRpb246IENvbnZlcnNhdGlvbiwgbW92ZVNwZWVkOiBudW1iZXIgPSAwLjUpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhbmltcywgbW92ZVNwZWVkKTtcclxuICAgICAgICB0aGlzLnNldEN1cnJlbnRBbmltYXRpb24oMCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICBzdXBlci5kcmF3KGN1cnJlbnRUaW1lLCBkZWx0YVRpbWUpO1xyXG5cclxuICAgICAgICBpZih0aGlzLnNwZWVjaEJ1YmJsZU9wZW4pIHtcclxuICAgICAgICAgICAgLy8gZHJhdyB0aGUgc3BlZWNoIGJ1YmJsZVxyXG4gICAgICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgICAgICBjdHgudHJhbnNsYXRlKHRoaXMueCwgdGhpcy5vcmlnaW5ZKTtcclxuICAgICAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcIiM1NTU1NTVcIjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMUFGRjgwXCI7ICAgLy8gZ3JlZW46ICMxQUZGODAsIGFtYmVyOiAjRkZCNjQyLCBibHVlOiAjMkVDRkZGXHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnNwZWVjaEJ1YmJsZVRleHQsIC10aGlzLnRleHRXaWR0aC8yLCAwKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNwZWVjaCBidWJibGUgbGFzdHMgMS8yIHNlY29uZCBmb3IgZWFjaCB3b3JkXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lIC0gdGhpcy5zcGVlY2hCdWJibGVTaG93bkF0ID49IHRoaXMuc3BlZWNoQnViYmxlVGV4dC5zcGxpdChcIiBcIikubGVuZ3RoICogNTAwICsgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gREVCVUcgLSBkcmF3IHRoZSBjaXJjbGUgYW5kIHJlY3RhbmdsZVxyXG4gICAgICAgIHRoaXMuY2xpY2tab25lLmRyYXcoKTtcclxuICAgICAgICB0aGlzLmludGVyYWN0aW9uWm9uZS5kcmF3KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIG9wZW5TcGVlY2hCdWJibGUodGV4dDogc3RyaW5nKSB7XHJcbiAgICAgICAgaWYodGV4dCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlT3BlbiA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlVGV4dCA9IHRleHQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWNoQnViYmxlU2hvd25BdCA9IERhdGUubm93KCk7XHJcblxyXG4gICAgICAgICAgICBjdHguZm9udCA9IGAke3RoaXMuQkFTRV9GT05UX1NJWkV9cHggQm9va21hbmA7XHJcbiAgICAgICAgICAgIHRoaXMudGV4dFdpZHRoID0gY3R4Lm1lYXN1cmVUZXh0KHRleHQpLndpZHRoO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0Q29udmVyc2F0aW9uKCk6IENvbnZlcnNhdGlvblxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnNhdGlvbjtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgaW5JbnRlcmFjdGlvblpvbmUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBib29sZWFuXHJcbiAgICB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuaW50ZXJhY3Rpb25ab25lLmNvbnRhaW5zKHgsIHkpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpbkNsaWNrWm9uZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IGJvb2xlYW5cclxuICAgIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5jbGlja1pvbmUuY29udGFpbnMoeCwgeSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEV4YW1pbmVUZXh0KCk6IHN0cmluZ1xyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVUZXh0O1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRFeGFtaW5lQXVkaW8oKTogSFRNTEF1ZGlvRWxlbWVudFxyXG4gICAge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmV4YW1pbmVBdWRpbztcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge0FuaW1hdGVkU3ByaXRlfSBmcm9tIFwiLi9BbmltYXRlZFNwcml0ZVwiXHJcbmltcG9ydCB7U3ByaXRlQW5pbWF0aW9ufSBmcm9tIFwiLi9TcHJpdGVBbmltYXRpb25cIlxyXG5pbXBvcnQge1BvaW50fSBmcm9tIFwiLi4vY29sbGlzaW9uL1BvaW50XCJcclxuXHJcbmV4cG9ydCBjbGFzcyBOYXZTcHJpdGUgZXh0ZW5kcyBBbmltYXRlZFNwcml0ZVxyXG57XHJcbiAgICBwcml2YXRlIHdheXBvaW50czogQXJyYXk8UG9pbnQ+O1xyXG4gICAgcHJpdmF0ZSBuZXh0V2F5cG9pbnQ6IFBvaW50O1xyXG4gICAgcHJpdmF0ZSBtb3ZlU3BlZWQ6IG51bWJlcjtcclxuXHJcbiAgICBwcml2YXRlIGRlcHRoU2NhbGVZOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHN0YXJ0WDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzdGFydFk6IG51bWJlcjtcclxuXHJcbiAgICBwdWJsaWMgY29uc3RydWN0b3IoeDogbnVtYmVyLCB5OiBudW1iZXIsIHNjYWxlOiBudW1iZXIsIG9yaWdpbkhvcml6b250YWw6IHN0cmluZywgb3JpZ2luVmVydGljYWw6IHN0cmluZywgYW5pbXM6IEFycmF5PFNwcml0ZUFuaW1hdGlvbj4sIG1vdmVTcGVlZDogbnVtYmVyID0gMC41KSB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsLCBhbmltcyk7XHJcbiAgICAgICAgdGhpcy5tb3ZlU3BlZWQgPSBtb3ZlU3BlZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGRyYXcoY3VycmVudFRpbWU6IG51bWJlciwgZGVsdGFUaW1lOiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICAvLyBtb3ZlIHRvd2FyZHMgdGhlIG5leHQgd2F5cG9pbnRcclxuICAgICAgICBpZih0aGlzLm5leHRXYXlwb2ludCAhPSBudWxsKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgY29uc3QgYW5nbGUgPSBNYXRoLmF0YW4oTWF0aC5hYnModGhpcy5uZXh0V2F5cG9pbnQueSAtIHRoaXMueSkgLyBNYXRoLmFicyh0aGlzLm5leHRXYXlwb2ludC54IC0gdGhpcy54KSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVTcGVlZFggPSB0aGlzLm1vdmVTcGVlZCAqIGRlbHRhVGltZSAqIE1hdGguY29zKGFuZ2xlKSAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vdmVTcGVlZFkgPSB0aGlzLm1vdmVTcGVlZCAqIGRlbHRhVGltZSAqIE1hdGguc2luKGFuZ2xlKSAqIHRoaXMuc2NhbGU7XHJcblxyXG4gICAgICAgICAgICAvLyBpZiB0aGUgc3ByaXRlIGhhcyByZWFjaGVkIHRoZSB3YXlwb2ludCAob3IgdGhlcmVhYm91dHMpIHRoZW4gZ2V0IHRoZSBuZXh0IHdheXBvaW50XHJcbiAgICAgICAgICAgIGlmKHRoaXMueCA+PSB0aGlzLm5leHRXYXlwb2ludC54IC0gNSAmJiB0aGlzLnggPD0gdGhpcy5uZXh0V2F5cG9pbnQueCArIDUgJiZcclxuICAgICAgICAgICAgICAgIHRoaXMueSA+PSB0aGlzLm5leHRXYXlwb2ludC55IC0gNSAmJiB0aGlzLnkgPD0gdGhpcy5uZXh0V2F5cG9pbnQueSArIDUpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJhcnJpdmVkXCIsIHRoaXMueCwgdGhpcy55KTtcclxuICAgICAgICAgICAgICAgIHRoaXMueCA9IHRoaXMubmV4dFdheXBvaW50Lng7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnkgPSB0aGlzLm5leHRXYXlwb2ludC55O1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy53YXlwb2ludHMgIT0gbnVsbCAmJiB0aGlzLndheXBvaW50cy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSB0aGlzLndheXBvaW50cy5wb3AoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0V2F5cG9pbnQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBtb3ZlIHRvd2FyZHMgdGhlIG5leHQgd2F5cG9pbnRcclxuICAgICAgICAgICAgaWYodGhpcy5uZXh0V2F5cG9pbnQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYodGhpcy54IDwgdGhpcy5uZXh0V2F5cG9pbnQueCAtIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnggKz0gbW92ZVNwZWVkWDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZih0aGlzLnggPiB0aGlzLm5leHRXYXlwb2ludC54ICsgNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMueCAtPSBtb3ZlU3BlZWRYO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmKHRoaXMueSA8IHRoaXMubmV4dFdheXBvaW50LnkgLSA1KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy55ICs9IG1vdmVTcGVlZFk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYodGhpcy55ID4gdGhpcy5uZXh0V2F5cG9pbnQueSArIDUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnkgLT0gbW92ZVNwZWVkWTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBzY2FsZSB0aGUgcGxheWVyIGJhc2VkIG9uIHRoZSBkZXB0aCBvZiB0aGUgbW91c2UgcG9zaXRpb25cclxuICAgICAgICB0aGlzLnNjYWxlID0gdGhpcy5iYXNlU2NhbGUgKiB0aGlzLmRlcHRoU2NhbGVZICoqICh0aGlzLnN0YXJ0WSAtIHRoaXMueSk7XHJcblxyXG4gICAgICAgIHN1cGVyLmRyYXcoY3VycmVudFRpbWUsIGRlbHRhVGltZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFdheXBvaW50cyh3YXlwb2ludHM6IEFycmF5PFBvaW50Pikge1xyXG4gICAgICAgIHRoaXMud2F5cG9pbnRzID0gd2F5cG9pbnRzO1xyXG4gICAgICAgIHRoaXMubmV4dFdheXBvaW50ID0gbnVsbDtcclxuICAgICAgICBpZih0aGlzLndheXBvaW50cyAhPSBudWxsICYmIHRoaXMud2F5cG9pbnRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy53YXlwb2ludHMpO1xyXG4gICAgICAgICAgICB0aGlzLm5leHRXYXlwb2ludCA9IHRoaXMud2F5cG9pbnRzLnBvcCgpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIm5leHQ6IFwiICsgdGhpcy5uZXh0V2F5cG9pbnQueCArIFwiLCBcIiArIHRoaXMubmV4dFdheXBvaW50LnkpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXREZXB0aFNjYWxlKGRlcHRoU2NhbGVZOiBudW1iZXIpIHtcclxuICAgICAgICB0aGlzLmRlcHRoU2NhbGVZID0gZGVwdGhTY2FsZVk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFN0YXJ0UG9zKHg6IG51bWJlciwgeTogbnVtYmVyKSB7XHJcbiAgICAgICAgdGhpcy5zdGFydFggPSB4O1xyXG4gICAgICAgIHRoaXMuc3RhcnRZID0geTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge2N0eH0gZnJvbSBcIi4uL2dsb2IudHNcIlxyXG5pbXBvcnQge05hdlNwcml0ZX0gZnJvbSBcIi4vTmF2U3ByaXRlXCJcclxuaW1wb3J0IHtQb2ludH0gZnJvbSBcIi4uL2NvbGxpc2lvbi9Qb2ludFwiXHJcbmltcG9ydCB7QW5pbWF0ZWRTcHJpdGV9IGZyb20gXCIuL0FuaW1hdGVkU3ByaXRlXCJcclxuaW1wb3J0IHtTcHJpdGVBbmltYXRpb259IGZyb20gXCIuL1Nwcml0ZUFuaW1hdGlvblwiXHJcblxyXG5leHBvcnQgY2xhc3MgUGxheWVyU3ByaXRlIGV4dGVuZHMgTmF2U3ByaXRlXHJcbntcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlSW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIHNwZWVjaEJ1YmJsZU9wZW46IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgIHByaXZhdGUgc3BlZWNoQnViYmxlU2hvd25BdDogbnVtYmVyO1xyXG4gICAgcHJpdmF0ZSBzcGVlY2hCdWJibGVUZXh0OiBzdHJpbmc7XHJcbiAgICBwcml2YXRlIHRleHRXaWR0aDogbnVtYmVyOyAgLy8gd2lkdGggb2YgdGhlIHRleHQgaW4gcGl4ZWxzXHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IEJBU0VfRk9OVF9TSVpFID0gNzU7XHJcblxyXG4gICAgcHVibGljIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIGFuaW1zOiBBcnJheTxTcHJpdGVBbmltYXRpb24+LCBtb3ZlU3BlZWQ6IG51bWJlciA9IDAuNSlcclxuICAgIHtcclxuICAgICAgICBzdXBlcih4LCB5LCBzY2FsZSwgb3JpZ2luSG9yaXpvbnRhbCwgb3JpZ2luVmVydGljYWwsIGFuaW1zLCBtb3ZlU3BlZWQpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkcmF3KGN1cnJlbnRUaW1lOiBudW1iZXIsIGRlbHRhVGltZTogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgc3VwZXIuZHJhdyhjdXJyZW50VGltZSwgZGVsdGFUaW1lKTtcclxuXHJcbiAgICAgICAgaWYodGhpcy5zcGVlY2hCdWJibGVPcGVuKSB7XHJcbiAgICAgICAgICAgIC8vIGRyYXcgdGhlIHNwZWVjaCBidWJibGVcclxuICAgICAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICAgICAgY3R4LnRyYW5zbGF0ZSh0aGlzLngsIHRoaXMub3JpZ2luWSk7XHJcbiAgICAgICAgICAgIC8vY3R4LmRyYXdJbWFnZSh0aGlzLnNwZWVjaEJ1YmJsZUltYWdlLCAtdGhpcy5zcGVlY2hCdWJibGVJbWFnZS53aWR0aC8yICogdGhpcy5zY2FsZSwgLXRoaXMuc3BlZWNoQnViYmxlSW1hZ2UuaGVpZ2h0LzIgKiB0aGlzLnNjYWxlLCB0aGlzLnNwZWVjaEJ1YmJsZUltYWdlLndpZHRoICogdGhpcy5zY2FsZSwgdGhpcy5zcGVlY2hCdWJibGVJbWFnZS5oZWlnaHQgKiB0aGlzLnNjYWxlKTtcclxuICAgICAgICAgICAgY3R4LnNjYWxlKHRoaXMuc2NhbGUsIHRoaXMuc2NhbGUpO1xyXG4gICAgICAgICAgICBjdHguc2hhZG93Q29sb3IgPSBcIiM1NTU1NTVcIjtcclxuICAgICAgICAgICAgY3R4LnNoYWRvd0JsdXIgPSA1O1xyXG4gICAgICAgICAgICBjdHguZmlsbFN0eWxlID0gXCIjMUFGRjgwXCI7ICAgLy8gZ3JlZW46ICMxQUZGODAsIGFtYmVyOiAjRkZCNjQyLCBibHVlOiAjMkVDRkZGXHJcbiAgICAgICAgICAgIGN0eC5maWxsVGV4dCh0aGlzLnNwZWVjaEJ1YmJsZVRleHQsIC10aGlzLnRleHRXaWR0aC8yLCAwKTtcclxuICAgICAgICAgICAgY3R4LnJlc3RvcmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHNwZWVjaCBidWJibGUgbGFzdHMgMS8yIHNlY29uZCBmb3IgZWFjaCB3b3JkXHJcbiAgICAgICAgICAgIGlmKGN1cnJlbnRUaW1lIC0gdGhpcy5zcGVlY2hCdWJibGVTaG93bkF0ID49IHRoaXMuc3BlZWNoQnViYmxlVGV4dC5zcGxpdChcIiBcIikubGVuZ3RoICogNTAwICsgNTAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZU9wZW4gPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgb3BlblNwZWVjaEJ1YmJsZSh0ZXh0OiBzdHJpbmcpIHtcclxuICAgICAgICBpZih0ZXh0ICE9IG51bGwpIHtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVPcGVuID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVUZXh0ID0gdGV4dDtcclxuICAgICAgICAgICAgdGhpcy5zcGVlY2hCdWJibGVTaG93bkF0ID0gRGF0ZS5ub3coKTtcclxuXHJcbiAgICAgICAgICAgIGN0eC5mb250ID0gYCR7dGhpcy5CQVNFX0ZPTlRfU0laRX1weCBCb29rbWFuYDtcclxuICAgICAgICAgICAgdGhpcy50ZXh0V2lkdGggPSBjdHgubWVhc3VyZVRleHQodGV4dCkud2lkdGg7XHJcblxyXG4gICAgICAgICAgICAvLyBjcmVhdGUgYSBkaXYgY29udGFpbmluZyB0aGUgdGV4dCBzbyB0aGUgcGl4ZWwgd2lkdGggb2YgdGV4dCBjYW4gYmUgY2FsY3VsYXRlZFxyXG4gICAgICAgICAgICAvLyBodHRwczovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTgyNDEvY2FsY3VsYXRlLXRleHQtd2lkdGgtd2l0aC1qYXZhc2NyaXB0XHJcbiAgICAgICAgICAgIC8qbGV0IGRpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XHJcbiAgICAgICAgICAgIGRpdi5zdHlsZS5jc3NUZXh0ID0gYHBvc2l0aW9uOiBhYnNvbHV0ZTsgdmlzaWJpbGl0eTogaGlkZGVuOyBoZWlnaHQ6IGF1dG87IHdpZHRoOiBhdXRvOyB3aGl0ZS1zcGFjZTogbm93cmFwOyBmb250LXNpemU6ICR7dGhpcy5CQVNFX0ZPTlRfU0laRX1gO1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5Lmluc2VydEJlZm9yZShkaXYsIG51bGwpO1xyXG4gICAgICAgICAgICB0aGlzLnRleHRXaWR0aCA9IGRpdi5jbGllbnRXaWR0aCArIDE7Ki9cclxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0ZXh0IHdpZHRoXCIsIHRoaXMudGV4dFdpZHRoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldFNwZWVjaEJ1YmJsZUltYWdlKGltZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLnNwZWVjaEJ1YmJsZUltYWdlID0gaW1nO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBhYnN0cmFjdCBjbGFzcyBTcHJpdGVcclxue1xyXG4gICAgcHJvdGVjdGVkIGJhc2VTY2FsZTogbnVtYmVyO1xyXG4gICAgcHJvdGVjdGVkIG9yaWdpblg6IG51bWJlcjtcclxuICAgIHByb3RlY3RlZCBvcmlnaW5ZOiBudW1iZXI7XHJcblxyXG4gICAgY29uc3RydWN0b3IocHJvdGVjdGVkIHg6IG51bWJlciwgcHJvdGVjdGVkIHk6IG51bWJlciwgcHJvdGVjdGVkIHNjYWxlOiBudW1iZXIsIHByb3RlY3RlZCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIHByb3RlY3RlZCBvcmlnaW5WZXJ0aWNhbDogc3RyaW5nLCBwcm90ZWN0ZWQgZGVwdGg6IG51bWJlciA9IDApXHJcbiAgICB7XHJcbiAgICAgICAgdGhpcy5iYXNlU2NhbGUgPSB0aGlzLnNjYWxlO1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCByZWZyZXNoT3JpZ2luKHdpZHRoOiBudW1iZXIsIGhlaWdodDogbnVtYmVyKSB7XHJcbiAgICAgICAgLy8gY2FsY3VsYXRlIHRoZSBwb3NpdGlvbiBhdCB3aGljaCB0byBkcmF3IHRoZSBzcHJpdGVcclxuICAgICAgICBpZih0aGlzLm9yaWdpbkhvcml6b250YWwgPT0gXCJyaWdodFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWCA9IHRoaXMueCAtIHdpZHRoICogdGhpcy5zY2FsZTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5vcmlnaW5Ib3Jpem9udGFsID09IFwibGVmdFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWCA9IHRoaXMueDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblggPSB0aGlzLnggLSB3aWR0aC8yICogdGhpcy5zY2FsZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIGNhbGN1bGF0ZSB0aGUgcG9zaXRpb24gYXQgd2hpY2ggdG8gZHJhdyB0aGUgc3ByaXRlXHJcbiAgICAgICAgaWYodGhpcy5vcmlnaW5WZXJ0aWNhbCA9PSBcInRvcFwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWSA9IHRoaXMueSAtIGhlaWdodCogdGhpcy5zY2FsZTtcclxuICAgICAgICB9IGVsc2UgaWYodGhpcy5vcmlnaW5WZXJ0aWNhbCA9PSBcImJvdHRvbVwiKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luWSA9IHRoaXMueTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpblkgPSB0aGlzLnkgLSBoZWlnaHQvMiAqIHRoaXMuc2NhbGU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWQ7XHJcbn1cclxuIiwiaW1wb3J0IHtjdHh9IGZyb20gXCIuLi9nbG9iLnRzXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXN9IGZyb20gJy4vVGV4dHVyZUF0bGFzJ1xyXG5pbXBvcnQge1RleHR1cmVBdGxhc0ZyYW1lfSBmcm9tIFwiLi9UZXh0dXJlQXRsYXNGcmFtZVwiXHJcblxyXG5leHBvcnQgY2xhc3MgU3ByaXRlQW5pbWF0aW9uXHJcbntcclxuICAgIC8vIGh0dHA6Ly93d3cudHlwZXNjcmlwdGdhbWVzLmNvbS9BbmltYXRlZFNwcml0ZXMuaHRtbFxyXG4gICAgcHJvdGVjdGVkIGN1cnJlbnRGcmFtZSA9IDA7XHJcbiAgICBwcml2YXRlIGxhc3RUaW1lID0gRGF0ZS5ub3coKTtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBudW1GcmFtZXM6IG51bWJlciwgcHJvdGVjdGVkIGF0bGFzOiBUZXh0dXJlQXRsYXMsIHByb3RlY3RlZCBzZXF1ZW5jZU5hbWU6IHN0cmluZykge31cclxuXHJcbiAgICBwdWJsaWMgZHJhdyA9IChjdXJyZW50VGltZTogbnVtYmVyLCB4OiBudW1iZXIsIHk6IG51bWJlciwgc2NhbGU6IG51bWJlcik6IHZvaWQgPT4ge1xyXG4gICAgICAgIGxldCBmcmFtZSA9IHRoaXMuZ2V0Q3VycmVudEZyYW1lKCk7XHJcbiAgICAgICAgaWYoZnJhbWUuZnJhbWVEdXJhdGlvbiA8PSBjdXJyZW50VGltZSAtIHRoaXMubGFzdFRpbWUpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB0aGlzLmN1cnJlbnRGcmFtZSsrO1xyXG4gICAgICAgICAgICBpZih0aGlzLmN1cnJlbnRGcmFtZSA+PSB0aGlzLm51bUZyYW1lcylcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RnJhbWUgPSAwO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMubGFzdFRpbWUgPSBjdXJyZW50VGltZTtcclxuICAgICAgICAgICAgZnJhbWUgPSB0aGlzLmdldEN1cnJlbnRGcmFtZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8gc3ByaXRlcyBhcmUgZHJhd24gZnJvbSB0aGVpciBjZW50cmUteCwgYm90dG9tLXksIGkuZS4gZmVldCBwb3NpdGlvblxyXG4gICAgICAgIC8vbGV0IHRvcExlZnRYID0geCAtIGZyYW1lLncvMiAqIHNjYWxlO1xyXG4gICAgICAgIC8vbGV0IHRvcExlZnRZID0geSAtIGZyYW1lLmggKiBzY2FsZTtcclxuXHJcbiAgICAgICAgY3R4LnNhdmUoKTtcclxuICAgICAgICBjdHgudHJhbnNsYXRlKHgsIHkpO1xyXG4gICAgICAgIGN0eC5yZWN0KGZyYW1lLngsIGZyYW1lLnksIGZyYW1lLncsIGZyYW1lLmgpO1xyXG4gICAgICAgIGN0eC5kcmF3SW1hZ2UodGhpcy5hdGxhcy5pbWFnZSxcclxuICAgICAgICAgICAgZnJhbWUueCwgZnJhbWUueSxcclxuICAgICAgICAgICAgZnJhbWUudywgZnJhbWUuaCxcclxuICAgICAgICAgICAgZnJhbWUub2Zmc2V0eCwgZnJhbWUub2Zmc2V0eSxcclxuICAgICAgICAgICAgZnJhbWUudyAqIHNjYWxlLCBmcmFtZS5oICogc2NhbGUpO1xyXG4gICAgICAgIGN0eC5yZXN0b3JlKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEN1cnJlbnRGcmFtZSA9ICgpOiBUZXh0dXJlQXRsYXNGcmFtZSA9PiB7XHJcbiAgICAgICAgaWYodGhpcy5jdXJyZW50RnJhbWUgPiA5KVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuYXRsYXMuZnJhbWVzW3RoaXMuc2VxdWVuY2VOYW1lICsgXCJfXCIgKyB0aGlzLmN1cnJlbnRGcmFtZS50b1N0cmluZygpXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuYXRsYXMuZnJhbWVzW3RoaXMuc2VxdWVuY2VOYW1lICsgXCJfXCIgKyBcIjBcIiArIHRoaXMuY3VycmVudEZyYW1lLnRvU3RyaW5nKCldO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7Y3R4fSBmcm9tIFwiLi4vZ2xvYi50c1wiXHJcbmltcG9ydCB7U3ByaXRlfSBmcm9tIFwiLi9TcHJpdGVcIlxyXG5pbXBvcnQge1RleHR1cmVBdGxhc30gZnJvbSBcIi4vVGV4dHVyZUF0bGFzXCJcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXNGcmFtZX0gZnJvbSBcIi4vVGV4dHVyZUF0bGFzRnJhbWVcIlxyXG5cclxuZXhwb3J0IGNsYXNzIFN0YXRpY1Nwcml0ZSBleHRlbmRzIFNwcml0ZVxyXG57XHJcbiAgICBwcm90ZWN0ZWQgaW1hZ2U6IFRleHR1cmVBdGxhc0ZyYW1lO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHg6IG51bWJlciwgeTogbnVtYmVyLCBzY2FsZTogbnVtYmVyLCBvcmlnaW5Ib3Jpem9udGFsOiBzdHJpbmcsIG9yaWdpblZlcnRpY2FsOiBzdHJpbmcsIHByb3RlY3RlZCBhdGxhczogVGV4dHVyZUF0bGFzLCBwcm90ZWN0ZWQgaW1hZ2VOYW1lOiBzdHJpbmcpXHJcbiAgICB7XHJcbiAgICAgICAgc3VwZXIoeCwgeSwgc2NhbGUsIG9yaWdpbkhvcml6b250YWwsIG9yaWdpblZlcnRpY2FsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVmcmVzaEltYWdlKCk6IHZvaWRcclxuICAgIHtcclxuICAgICAgICB0aGlzLmltYWdlID0gdGhpcy5hdGxhcy5mcmFtZXNbdGhpcy5pbWFnZU5hbWVdOyAvLyBnZXQgdGhlIGltYWdlIGZyb20gdGhlIGF0bGFzXHJcbiAgICAgICAgdGhpcy5yZWZyZXNoT3JpZ2luKHRoaXMuaW1hZ2UudywgdGhpcy5pbWFnZS5oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZHJhdyhjdXJyZW50VGltZTogbnVtYmVyLCBkZWx0YVRpbWU6IG51bWJlcik6IHZvaWRcclxuICAgIHtcclxuICAgICAgICBjdHguc2F2ZSgpO1xyXG4gICAgICAgIGN0eC50cmFuc2xhdGUodGhpcy5vcmlnaW5YLCB0aGlzLm9yaWdpblkpO1xyXG4gICAgICAgIGN0eC5yZWN0KHRoaXMuaW1hZ2UueCwgdGhpcy5pbWFnZS55LCB0aGlzLmltYWdlLncsIHRoaXMuaW1hZ2UuaCk7XHJcbiAgICAgICAgY3R4LmRyYXdJbWFnZSh0aGlzLmF0bGFzLmltYWdlLFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLngsIHRoaXMuaW1hZ2UueSxcclxuICAgICAgICAgICAgdGhpcy5pbWFnZS53LCB0aGlzLmltYWdlLmgsXHJcbiAgICAgICAgICAgIHRoaXMuaW1hZ2Uub2Zmc2V0eCwgdGhpcy5pbWFnZS5vZmZzZXR5LFxyXG4gICAgICAgICAgICB0aGlzLmltYWdlLncgKiB0aGlzLnNjYWxlLCB0aGlzLmltYWdlLmggKiB0aGlzLnNjYWxlKTtcclxuICAgICAgICBjdHgucmVzdG9yZSgpO1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7SlNPTkxvYWRlcn0gZnJvbSAnLi4vcmVzb3VyY2VzL0pTT05Mb2FkZXInXHJcbmltcG9ydCB7SW1hZ2VMb2FkZXJ9IGZyb20gJy4uL3Jlc291cmNlcy9JbWFnZUxvYWRlcidcclxuaW1wb3J0IHtUZXh0dXJlQXRsYXNGcmFtZX0gZnJvbSAnLi9UZXh0dXJlQXRsYXNGcmFtZSdcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0dXJlQXRsYXNcclxue1xyXG4gICAgLy8gaHR0cDovL3d3dy50eXBlc2NyaXB0Z2FtZXMuY29tL1RleHR1cmVBdGxhcy5odG1sXHJcbiAgICBwdWJsaWMgZnJhbWVzOiB7IFtpbmRleDogc3RyaW5nXTogVGV4dHVyZUF0bGFzRnJhbWUgfSA9IHt9O1xyXG4gICAgcHVibGljIHRhTG9hZENvbXBsZXRlOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgaW1hZ2U6IEhUTUxJbWFnZUVsZW1lbnQgPSBuZXcgSW1hZ2UoKTtcclxuICAgIHB1YmxpYyBhdGxhc05hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGltYWdlRmlsZU5hbWU6IHN0cmluZyA9IFwiXCI7XHJcbiAgICBwcml2YXRlIGpzb25GaWxlTmFtZTogc3RyaW5nID0gXCJcIjtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcihhdGxhc05hbWU6IHN0cmluZylcclxuICAgIHtcclxuICAgICAgICB0aGlzLmF0bGFzTmFtZSA9IGF0bGFzTmFtZTtcclxuICAgICAgICB0aGlzLmltYWdlRmlsZU5hbWUgPSBhdGxhc05hbWU7XHJcbiAgICAgICAgdGhpcy5qc29uRmlsZU5hbWUgPSBhdGxhc05hbWUucmVwbGFjZShcIi5wbmdcIiwgXCJcIikgKyBcIi5qc29uXCI7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGxvYWQoKTogUHJvbWlzZTxhbnk+XHJcbiAgICB7XHJcbiAgICAgICAgY29uc3QgaW1nUHJvbWlzZSA9IEltYWdlTG9hZGVyLmxvYWRJbWFnZSh0aGlzLmltYWdlRmlsZU5hbWUpLnRoZW4oKGltZykgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmltYWdlID0gaW1nO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiB1bmFibGUgdG8gbG9hZCAnICsgdGhpcy5pbWFnZUZpbGVOYW1lKTtcclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBjb25zdCBqc29uUHJvbWlzZSA9IEpTT05Mb2FkZXIubG9hZEpTT05GaWxlKHRoaXMuanNvbkZpbGVOYW1lKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlRnJhbWVzKGRhdGEpO1xyXG4gICAgICAgIH0pLmNhdGNoKCgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2Vycm9yOiB1bmFibGUgdG8gbG9hZCAnICsgdGhpcy5qc29uRmlsZU5hbWUpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoW2ltZ1Byb21pc2UsIGpzb25Qcm9taXNlXSkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuYXRsYXNOYW1lICsgJyBsb2FkZWQgc3VjY2Vzc2Z1bGx5Jyk7XHJcbiAgICAgICAgfSkuY2F0Y2goKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnZXJyb3I6ICcgKyB0aGlzLmF0bGFzTmFtZSArICcgZmFpbGVkIHRvIGxvYWQnKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNyZWF0ZUZyYW1lcyhkYXRhOiBhbnkpXHJcbiAgICB7XHJcbiAgICAgICAgZm9yKGNvbnN0IG5hbWUgaW4gZGF0YS5mcmFtZXMpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBjb25zdCBzcHJpdGVEYXRhID0gZGF0YS5mcmFtZXNbbmFtZV07XHJcbiAgICAgICAgICAgIGxldCBmcmFtZSA9IG5ldyBUZXh0dXJlQXRsYXNGcmFtZShzcHJpdGVEYXRhLmZyYW1lLngsIHNwcml0ZURhdGEuZnJhbWUueSwgc3ByaXRlRGF0YS5mcmFtZS53LCBzcHJpdGVEYXRhLmZyYW1lLmgsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNwcml0ZURhdGEuc3ByaXRlU291cmNlU2l6ZS54LCBzcHJpdGVEYXRhLnNwcml0ZVNvdXJjZVNpemUueSwgc3ByaXRlRGF0YS5mcmFtZUR1cmF0aW9uKTtcclxuICAgICAgICAgICAgdGhpcy5mcmFtZXNbbmFtZV0gPSBmcmFtZTtcclxuICAgICAgICB9XHJcbi8vICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeSh0aGlzLmZyYW1lcykpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjbGFzcyBUZXh0dXJlQXRsYXNGcmFtZVxyXG57XHJcbiAgICAvLyBodHRwOi8vd3d3LnR5cGVzY3JpcHRnYW1lcy5jb20vQW5pbWF0ZWRTcHJpdGVzLmh0bWxcclxuICAgIHg6IG51bWJlcjtcclxuICAgIHk6IG51bWJlcjtcclxuICAgIHc6IG51bWJlcjtcclxuICAgIGg6IG51bWJlcjtcclxuXHJcbiAgICBvZmZzZXR4OiBudW1iZXI7ICAgIC8vIGltYWdlIHdpbGwgYmUgb2Zmc2V0IGJ5IHRoZXNlIHZhbHVlcyBzbyBmcmFtZXMgbGluZSB1cCBpbiBhbmltYXRpb25cclxuICAgIG9mZnNldHk6IG51bWJlcjtcclxuXHJcbiAgICBmcmFtZUR1cmF0aW9uOiBudW1iZXI7ICAvLyB0aGUgbnVtYmVyIG9mIG1pbGxpc2Vjb25kcyB0aGlzIGZyYW1lIGxhc3RzXHJcblxyXG4gICAgY29uc3RydWN0b3IoeDogbnVtYmVyID0gMCwgeTogbnVtYmVyID0gMCwgdzogbnVtYmVyID0gMSwgaDogbnVtYmVyID0gMSwgb2Zmc2V0eDogbnVtYmVyID0gMCwgb2Zmc2V0eTogbnVtYmVyID0gMCwgZnJhbWVEdXJhdGlvbjogbnVtYmVyID0gMTAwKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMueCA9IHg7XHJcbiAgICAgICAgdGhpcy55ID0geTtcclxuICAgICAgICB0aGlzLncgPSB3O1xyXG4gICAgICAgIHRoaXMuaCA9IGg7XHJcbiAgICAgICAgdGhpcy5vZmZzZXR4ID0gb2Zmc2V0eDtcclxuICAgICAgICB0aGlzLm9mZnNldHkgPSBvZmZzZXR5O1xyXG4gICAgICAgIHRoaXMuZnJhbWVEdXJhdGlvbiA9IGZyYW1lRHVyYXRpb247XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHNldCh4OiBudW1iZXIsIHk6IG51bWJlcilcclxuICAgIHtcclxuICAgICAgICB0aGlzLnggPSB4O1xyXG4gICAgICAgIHRoaXMueSA9IHk7XHJcbiAgICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ==