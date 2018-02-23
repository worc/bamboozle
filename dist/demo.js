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
/******/ 	return __webpack_require__(__webpack_require__.s = 16);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

exports.default = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _defineProperty = __webpack_require__(44);

var _defineProperty2 = _interopRequireDefault(_defineProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      (0, _defineProperty2.default)(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(6)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 3 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),
/* 4 */
/***/ (function(module, exports) {

var core = module.exports = { version: '2.5.3' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(49);


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

/**
  * from stackoverflow: "How to randomize (shuffle) a JavaScriptArray?"
  * https://stackoverflow.com/q/2450954/769780
  * 
  * "The de-facto unbiased shuffle algorithm..." 
  * https://stackoverflow.com/a/2450976/769780
  */

exports.default = function (array) {
  var currentIndex = array.length,
      temporaryValue = void 0,
      randomIndex = void 0;

  // While there are remaining elements to shuffle
  while (0 !== currentIndex) {

    // Pick a remaining element
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;

var _assign = __webpack_require__(18);

var _assign2 = _interopRequireDefault(_assign);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _assign2.default || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var core = __webpack_require__(4);
var ctx = __webpack_require__(21);
var hide = __webpack_require__(23);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var IS_WRAP = type & $export.W;
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE];
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] : (global[name] || {})[PROTOTYPE];
  var key, own, out;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    if (own && key in exports) continue;
    // export native or passed
    out = own ? target[key] : source[key];
    // prevent global pollution for namespaces
    exports[key] = IS_GLOBAL && typeof target[key] != 'function' ? source[key]
    // bind timers to global for call from export context
    : IS_BIND && own ? ctx(out, global)
    // wrap global constructors for prevent change them in library
    : IS_WRAP && target[key] == out ? (function (C) {
      var F = function (a, b, c) {
        if (this instanceof C) {
          switch (arguments.length) {
            case 0: return new C();
            case 1: return new C(a);
            case 2: return new C(a, b);
          } return new C(a, b, c);
        } return C.apply(this, arguments);
      };
      F[PROTOTYPE] = C[PROTOTYPE];
      return F;
    // make static versions for prototype methods
    })(out) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // export proto methods to core.%CONSTRUCTOR%.methods.%NAME%
    if (IS_PROTO) {
      (exports.virtual || (exports.virtual = {}))[key] = out;
      // export proto methods to core.%CONSTRUCTOR%.prototype.%NAME%
      if (type & $export.R && expProto && !expProto[key]) hide(expProto, key, out);
    }
  }
};
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
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(24);
var IE8_DOM_DEFINE = __webpack_require__(25);
var toPrimitive = __webpack_require__(27);
var dP = Object.defineProperty;

exports.f = __webpack_require__(2) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
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
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(13);
var defined = __webpack_require__(14);
module.exports = function (it) {
  return IObject(defined(it));
};


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(33);
// eslint-disable-next-line no-prototype-builtins
module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};


/***/ }),
/* 14 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Bamboozle = __webpack_require__(17);

var _Bamboozle2 = _interopRequireDefault(_Bamboozle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var pangram = 'Pack my box with five dozen liquor jugs.';
var options = {
    characters: ['▀▁▂▃▄▅▆▇█▉▊▋▌▍▎', // U+258x
    '▐░▒▓▔▕▖▗▘▙▚▛▜▝▞▟'].join(''),
    exclude: '. '
};
var target = document.getElementById('output');

document.getElementById('start').addEventListener('click', function () {
    bam.start();
});

document.getElementById('stop').addEventListener('click', function () {
    bam.stop();
});

document.getElementById('reveal').addEventListener('click', function () {
    bam.reveal();
});

var bam = new _Bamboozle2.default(function (message) {
    target.textContent = message;
}, pangram, options);

bam.start();

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Bitmap = __webpack_require__(47);

var _Bitmap2 = _interopRequireDefault(_Bitmap);

var _TaskRunner = __webpack_require__(51);

var _TaskRunner2 = _interopRequireDefault(_TaskRunner);

var _Obfuscate = __webpack_require__(52);

var _Obfuscate2 = _interopRequireDefault(_Obfuscate);

var _Reveal = __webpack_require__(53);

var _Reveal2 = _interopRequireDefault(_Reveal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bamboozle = function () {
    function Bamboozle() {
        var listener = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function (message) {
            console.warn('no listener given for message:', message);
        };
        var resolution = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

        var _ref = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            _ref$characters = _ref.characters,
            characters = _ref$characters === undefined ? 'AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz~!@#$%^&*()-+=[]{}|;:,./<>?' : _ref$characters,
            _ref$exclude = _ref.exclude,
            exclude = _ref$exclude === undefined ? ' ' : _ref$exclude,
            _ref$startBaffled = _ref.startBaffled,
            startBaffled = _ref$startBaffled === undefined ? true : _ref$startBaffled,
            _ref$speed = _ref.speed,
            speed = _ref$speed === undefined ? 50 : _ref$speed;

        (0, _classCallCheck3.default)(this, Bamboozle);

        this.options = {
            characters: characters,
            exclude: exclude,
            startBaffled: startBaffled,
            speed: speed
        };
        this.bitmap = new _Bitmap2.default(resolution, this.options.exclude, this.options.characters);
        this.bitmap.fill(this.options.startBaffled ? 1 : 0);
        this.taskRunner = new _TaskRunner2.default(this.bitmap, this.options, listener);

        this.obfuscationStrategy = _Obfuscate2.default.oneBitAndShuffleForever;
        this.revealStrategy = _Reveal2.default.oneBitAndShuffleUntilDone;
    }

    (0, _createClass3.default)(Bamboozle, [{
        key: 'once',
        value: function once() {
            this.taskRunner.add(_Obfuscate2.default.all);
        }
    }, {
        key: 'start',
        value: function start() {
            this.taskRunner.addLoop(this.obfuscationStrategy);
        }
    }, {
        key: 'stop',
        value: function stop() {
            this.taskRunner.stop();
        }
    }, {
        key: 'set',
        value: function set(options) {
            this.options = (0, _extends3.default)({}, this.options, options);
            this.bitmap.setOptions({
                exclude: this.options.exclude,
                characters: this.options.characters
            });
        }
    }, {
        key: 'text',
        value: function text() {
            var fn = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : function () {};
        }
    }, {
        key: 'reveal',
        value: function reveal() {
            var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
            var delay = arguments[1];

            this.stop();

            // calculate the speed needed to complete a full reveal on time
            var speed = this.bitmap.resolution.length > 0 && duration > 0 ? duration / this.bitmap.resolution.length : this.options.speed;

            // todo, definitely change the term to "pace" or something because that inequality check looks
            // todo, and sounds backwards when you read it out loud...
            // todo change speed to tempo and invert (1/tempo) at a deeper the term so that it reads better at this higher level
            // let clampedSpeed = (speed > this.options.speed) ? this.options.speed : speed;

            // duration sent to task runner is 0 or falsy so that no matter what the reveal
            // will complete, either at a pace set to match the requested duration or
            // at the default speed in options
            this.taskRunner.addSingleRun(this.revealStrategy, delay, speed);
        }
    }]);
    return Bamboozle;
}();

exports.default = Bamboozle;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(19), __esModule: true };

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(20);
module.exports = __webpack_require__(4).Object.assign;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(10);

$export($export.S + $export.F, 'Object', { assign: __webpack_require__(29) });


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(22);
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
/* 22 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(11);
var createDesc = __webpack_require__(28);
module.exports = __webpack_require__(2) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(2) && !__webpack_require__(6)(function () {
  return Object.defineProperty(__webpack_require__(26)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(5);
var document = __webpack_require__(3).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(5);
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
/* 28 */
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
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.2.1 Object.assign(target, source, ...)
var getKeys = __webpack_require__(30);
var gOPS = __webpack_require__(41);
var pIE = __webpack_require__(42);
var toObject = __webpack_require__(43);
var IObject = __webpack_require__(13);
var $assign = Object.assign;

// should work with symbols and should have deterministic property order (V8 bug)
module.exports = !$assign || __webpack_require__(6)(function () {
  var A = {};
  var B = {};
  // eslint-disable-next-line no-undef
  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) { B[k] = k; });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) { // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;
  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;
    while (length > j) if (isEnum.call(S, key = keys[j++])) T[key] = S[key];
  } return T;
} : $assign;


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(31);
var enumBugKeys = __webpack_require__(40);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(32);
var toIObject = __webpack_require__(12);
var arrayIndexOf = __webpack_require__(34)(false);
var IE_PROTO = __webpack_require__(37)('IE_PROTO');

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
/* 32 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),
/* 33 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);
var toLength = __webpack_require__(35);
var toAbsoluteIndex = __webpack_require__(36);
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
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(15);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(15);
var max = Math.max;
var min = Math.min;
module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(38)('keys');
var uid = __webpack_require__(39);
module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(3);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
module.exports = function (key) {
  return store[key] || (store[key] = {});
};


/***/ }),
/* 39 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),
/* 40 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = (
  'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
).split(',');


/***/ }),
/* 41 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(14);
module.exports = function (it) {
  return Object(defined(it));
};


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = { "default": __webpack_require__(45), __esModule: true };

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(46);
var $Object = __webpack_require__(4).Object;
module.exports = function defineProperty(it, key, desc) {
  return $Object.defineProperty(it, key, desc);
};


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(10);
// 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)
$export($export.S + $export.F * !__webpack_require__(2), 'Object', { defineProperty: __webpack_require__(11).f });


/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _ShuffledDeckGenerator = __webpack_require__(48);

var _ShuffledDeckGenerator2 = _interopRequireDefault(_ShuffledDeckGenerator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// todo upgrade to babel 7, extend Array
var Bitmap /*extends Array*/ = function () {
    function Bitmap() {
        var resolution = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var exclude = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
        var characters = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
        (0, _classCallCheck3.default)(this, Bitmap);

        this.array = Array(resolution.length).fill(0);
        this.resolution = resolution;
        this.exclude = exclude;
        this.characterGenerator = (0, _ShuffledDeckGenerator2.default)(characters.split(''));
    }

    (0, _createClass3.default)(Bitmap, [{
        key: 'setOptions',
        value: function setOptions(_ref) {
            var exclude = _ref.exclude,
                characters = _ref.characters;

            this.exclude = exclude;
            this.characterGenerator = (0, _ShuffledDeckGenerator2.default)(characters.split(''));
        }

        // can't really do operator overloading, so this will stay in use
        // even after the jump to babel 7 when we'll extend Array

    }, {
        key: 'setBitmap',
        value: function setBitmap() {
            var bitmap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

            this.array = bitmap;
        }

        /*
         * we're stuck aliasing the usual API calls to a local array
         * instead of just extending the array prototype...
         *
         * at least until babel 7 drops
         * https://github.com/babel/babel/pull/7081
         *
         */

    }, {
        key: 'every',
        value: function every(fn) {
            return this.array.every(fn);
        }
    }, {
        key: 'fill',
        value: function fill(value) {
            this.array.fill(value);
        }
    }, {
        key: 'forEach',
        value: function forEach(fn) {
            return this.array.forEach(fn);
        }
    }, {
        key: 'concat',
        value: function concat(fn) {
            return this.array.concat(fn);
        }
    }, {
        key: 'includes',
        value: function includes(value) {
            return this.array.includes(value);
        }

        /* actual custom extension of the "array" prototype here: */

    }, {
        key: 'render',
        value: function render() {
            var _this = this;

            // todo after upgrading change to a straight "this" call
            return this.array.map(function (bit, index) {
                var target = _this.resolution.substring(index, index + 1);
                return bit === 0 || _this.exclude.includes(target) ? target : _this.characterGenerator.next().value;
            }).join('');
        }
    }, {
        key: 'length',
        get: function get() {
            return this.array.length;
        }
    }]);
    return Bitmap;
}();

exports.default = Bitmap;

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(7);

var _regenerator2 = _interopRequireDefault(_regenerator);

exports.default = _callee;

var _Shuffle = __webpack_require__(8);

var _Shuffle2 = _interopRequireDefault(_Shuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _marked = /*#__PURE__*/_regenerator2.default.mark(_callee);

function _callee(list) {
    var index;
    return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
            switch (_context.prev = _context.next) {
                case 0:
                    index = 0;

                    (0, _Shuffle2.default)(list);

                case 2:
                    if (!list) {
                        _context.next = 8;
                        break;
                    }

                    if (index >= list.length) {
                        (0, _Shuffle2.default)(list);
                        index = 0;
                    }

                    _context.next = 6;
                    return list[index++];

                case 6:
                    _context.next = 2;
                    break;

                case 8:
                case 'end':
                    return _context.stop();
            }
        }
    }, _marked, this);
}

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// This method of obtaining a reference to the global object needs to be
// kept identical to the way it is obtained in runtime.js
var g = (function() { return this })() || Function("return this")();

// Use `getOwnPropertyNames` because not all browsers support calling
// `hasOwnProperty` on the global `self` object in a worker. See #183.
var hadRuntime = g.regeneratorRuntime &&
  Object.getOwnPropertyNames(g).indexOf("regeneratorRuntime") >= 0;

// Save the old regeneratorRuntime in case it needs to be restored later.
var oldRuntime = hadRuntime && g.regeneratorRuntime;

// Force reevalutation of runtime.js.
g.regeneratorRuntime = undefined;

module.exports = __webpack_require__(50);

if (hadRuntime) {
  // Restore the original runtime.
  g.regeneratorRuntime = oldRuntime;
} else {
  // Remove the global property added by runtime.js.
  try {
    delete g.regeneratorRuntime;
  } catch(e) {
    g.regeneratorRuntime = undefined;
  }
}


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

!(function(global) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  var inModule = typeof module === "object";
  var runtime = global.regeneratorRuntime;
  if (runtime) {
    if (inModule) {
      // If regeneratorRuntime is defined globally and we're in a module,
      // make the exports object identical to regeneratorRuntime.
      module.exports = runtime;
    }
    // Don't bother evaluating the rest of this file if the runtime was
    // already defined globally.
    return;
  }

  // Define the runtime globally (as expected by generated code) as either
  // module.exports (if we're in a module) or a new, empty object.
  runtime = global.regeneratorRuntime = inModule ? module.exports : {};

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  runtime.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  runtime.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  runtime.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  runtime.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration. If the Promise is rejected, however, the
          // result for this iteration will be rejected with the same
          // reason. Note that rejections of yielded Promises are not
          // thrown back into the generator function, as is the case
          // when an awaited Promise is rejected. This difference in
          // behavior between yield and await is important, because it
          // allows the consumer to decide what to do with the yielded
          // rejection (swallow it and continue, manually .throw it back
          // into the generator, abandon iteration, whatever). With
          // await, by contrast, there is no opportunity to examine the
          // rejection reason outside the generator function, so the
          // only option is to throw it from the await expression, and
          // let the generator function handle the exception.
          result.value = unwrapped;
          resolve(result);
        }, reject);
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  runtime.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  runtime.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return runtime.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        if (delegate.iterator.return) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  runtime.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  runtime.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };
})(
  // In sloppy mode, unbound `this` refers to the global object, fallback to
  // Function constructor if we're in global strict mode. That is sadly a form
  // of indirect eval which violates Content Security Policy.
  (function() { return this })() || Function("return this")()
);


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends2 = __webpack_require__(9);

var _extends3 = _interopRequireDefault(_extends2);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TaskRunner = function () {
    function TaskRunner() {
        var bitmap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
        var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
        var listener = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : function () {};
        (0, _classCallCheck3.default)(this, TaskRunner);

        this.bitmap = bitmap;
        this.options = (0, _extends3.default)({}, options);
        this.listener = listener;
        this.queue = [];
        this.running = false;
        this.interval = function () {};
    }

    (0, _createClass3.default)(TaskRunner, [{
        key: "add",
        value: function add(strategyGenerator) {
            var duration = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
            var delay = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
            var speed = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.options.speed;

            this.queue.push({ strategyGenerator: strategyGenerator, duration: duration, delay: delay, speed: speed });

            if (!this.running) {
                this.run(this.queue.shift());
            }
        }
    }, {
        key: "addLoop",
        value: function addLoop(strategyGenerator, duration, delay, speed) {
            this.add(strategyGenerator, duration, delay, speed);
        }
    }, {
        key: "addSingleRun",
        value: function addSingleRun(strategyGenerator, delay, speed) {
            this.add(strategyGenerator, false, delay, speed);
        }
    }, {
        key: "run",
        value: function run(_ref) {
            var _this = this;

            var strategyGenerator = _ref.strategyGenerator,
                duration = _ref.duration,
                delay = _ref.delay,
                speed = _ref.speed;

            this.running = true;
            clearInterval(this.interval);

            setTimeout(function () {
                _this.strategy = strategyGenerator(_this.bitmap);
                _this.interval = setInterval(_this.step.bind(_this), speed);

                if (duration) {
                    setTimeout(function () {
                        clearInterval(_this.interval);
                        if (_this.queue.length > 0) {
                            _this.run(_this.queue.shift());
                        } else {
                            _this.running = false;
                        }
                    }, duration);
                }
            }, delay);
        }
    }, {
        key: "step",
        value: function step() {
            var _strategy$next = this.strategy.next(),
                bitmap = _strategy$next.value,
                done = _strategy$next.done;

            if (done) {
                this.stop();
            }

            if (bitmap) {
                this.bitmap.setBitmap(bitmap);
            }

            this.listener(this.bitmap.render());
        }
    }, {
        key: "stop",
        value: function stop() {
            clearInterval(this.interval);
            this.running = false;
            this.queue = [];
            // that doesn't wipe out the queue
        }
    }]);
    return TaskRunner;
}();

exports.default = TaskRunner;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(7);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Shuffle = __webpack_require__(8);

var _Shuffle2 = _interopRequireDefault(_Shuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * when obfuscating we have a couple of options when the bitmap is
 * full up with ones. we can either stop and return the last bitmap,
 * or we can loop forever.
 *
 * looping forever let's the next function down the line treat all generators
 * as potential infinite loops. it's a generalization or simplification that
 * cuts down on decision making in the bitmap consumer.
 *
 * functions with loops that end use a return and are suffixed with UntilDone, functions with
 * loops that continue yielding after the bitmap is full up are suffixed with Forever.
 */
var Obfuscate = function () {
    function Obfuscate() {
        (0, _classCallCheck3.default)(this, Obfuscate);
    }

    (0, _createClass3.default)(Obfuscate, null, [{
        key: 'oneBitAndShuffleUntilDone',
        value: /*#__PURE__*/_regenerator2.default.mark(function oneBitAndShuffleUntilDone() {
            var bitmap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var result, revealed, obfuscated;
            return _regenerator2.default.wrap(function oneBitAndShuffleUntilDone$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            result = [];
                            revealed = 0;
                            obfuscated = 0;


                            bitmap.forEach(function (bit) {
                                if (bit) {
                                    obfuscated++;
                                } else {
                                    revealed++;
                                }
                            });

                        case 4:
                            if (!bitmap) {
                                _context.next = 18;
                                break;
                            }

                            // step
                            obfuscated++;
                            revealed--;

                            // guard
                            obfuscated = obfuscated > bitmap.length ? bitmap.length : obfuscated;
                            revealed = revealed < 0 ? 0 : revealed;

                            // resolve
                            result = (0, _Shuffle2.default)(Array(revealed).fill(0).concat(Array(obfuscated).fill(1)));

                            // yield/return

                            if (!result.includes(0)) {
                                _context.next = 15;
                                break;
                            }

                            _context.next = 13;
                            return result;

                        case 13:
                            _context.next = 16;
                            break;

                        case 15:
                            return _context.abrupt('return', result);

                        case 16:
                            _context.next = 4;
                            break;

                        case 18:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, oneBitAndShuffleUntilDone, this);
        })
    }, {
        key: 'oneBitAndShuffleForever',
        value: /*#__PURE__*/_regenerator2.default.mark(function oneBitAndShuffleForever() {
            var bitmap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var result, revealed, obfuscated;
            return _regenerator2.default.wrap(function oneBitAndShuffleForever$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            result = [];
                            revealed = 0;
                            obfuscated = 0;


                            bitmap.forEach(function (bit) {
                                if (bit) {
                                    obfuscated++;
                                } else {
                                    revealed++;
                                }
                            });

                        case 4:
                            if (!bitmap) {
                                _context2.next = 14;
                                break;
                            }

                            // step
                            obfuscated++;
                            revealed--;

                            // guard
                            obfuscated = obfuscated > bitmap.length ? bitmap.length : obfuscated;
                            revealed = revealed < 0 ? 0 : revealed;

                            // resolve
                            result = (0, _Shuffle2.default)(Array(revealed).fill(0).concat(Array(obfuscated).fill(1)));

                            // yield
                            _context2.next = 12;
                            return result;

                        case 12:
                            _context2.next = 4;
                            break;

                        case 14:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, oneBitAndShuffleForever, this);
        })
    }, {
        key: 'leftToRightUntilDone',
        value: /*#__PURE__*/_regenerator2.default.mark(function leftToRightUntilDone() {
            var bitmap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var i;
            return _regenerator2.default.wrap(function leftToRightUntilDone$(_context3) {
                while (1) {
                    switch (_context3.prev = _context3.next) {
                        case 0:
                            i = 0;

                        case 1:
                            if (!(i < bitmap.length)) {
                                _context3.next = 12;
                                break;
                            }

                            bitmap[i] = 1;

                            if (!bitmap.includes(0)) {
                                _context3.next = 8;
                                break;
                            }

                            _context3.next = 6;
                            return bitmap;

                        case 6:
                            _context3.next = 9;
                            break;

                        case 8:
                            return _context3.abrupt('return', bitmap);

                        case 9:
                            i++;
                            _context3.next = 1;
                            break;

                        case 12:
                        case 'end':
                            return _context3.stop();
                    }
                }
            }, leftToRightUntilDone, this);
        })
    }, {
        key: 'leftToRightForever',
        value: /*#__PURE__*/_regenerator2.default.mark(function leftToRightForever() {
            var bitmap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var i;
            return _regenerator2.default.wrap(function leftToRightForever$(_context4) {
                while (1) {
                    switch (_context4.prev = _context4.next) {
                        case 0:
                            i = 0;

                        case 1:
                            if (!(i < bitmap.length)) {
                                _context4.next = 8;
                                break;
                            }

                            bitmap[i] = 1;

                            _context4.next = 5;
                            return bitmap;

                        case 5:
                            i++;
                            _context4.next = 1;
                            break;

                        case 8:
                        case 'end':
                            return _context4.stop();
                    }
                }
            }, leftToRightForever, this);
        })
    }, {
        key: 'all',
        value: /*#__PURE__*/_regenerator2.default.mark(function all() {
            var bitmap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            return _regenerator2.default.wrap(function all$(_context5) {
                while (1) {
                    switch (_context5.prev = _context5.next) {
                        case 0:
                            return _context5.abrupt('return', bitmap.fill(1));

                        case 1:
                        case 'end':
                            return _context5.stop();
                    }
                }
            }, all, this);
        })
    }]);
    return Obfuscate;
}();

exports.default = Obfuscate;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _regenerator = __webpack_require__(7);

var _regenerator2 = _interopRequireDefault(_regenerator);

var _classCallCheck2 = __webpack_require__(0);

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = __webpack_require__(1);

var _createClass3 = _interopRequireDefault(_createClass2);

var _Shuffle = __webpack_require__(8);

var _Shuffle2 = _interopRequireDefault(_Shuffle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * all of the static generators take an array of zero or more length as an argument
 * and will yield or return an array of the same length
 *
 * the bitmap corresponds with a string of the same length, handled elsewhere, where
 * zeroes and ones indicate revealed and obfuscated characters
 *
 * a return statement is used when the bitmap is fully revealed in order to
 * end the generator *and* yield a defined value to the caller.
 *
 * you see, the MDN generator function example had a yield as the last line in a generator,
 * but that leads to ambiguity where you have to call the generator one more time
 * than necessary, then immediately recall the previous value. otherwise you're stuck
 * with the final yield which gives you { done: true, value: undefined } -_-
 *
 * on the other hand, a return statement in a generator will give you something
 * much more useful: { done: true, value: <a value!> } ^_^
 *
 * so given that, yields are used while looping and returns are used when finalizing
 */
var Reveal = function () {
    function Reveal() {
        (0, _classCallCheck3.default)(this, Reveal);
    }

    (0, _createClass3.default)(Reveal, null, [{
        key: 'oneBitAndShuffleUntilDone',
        value: /*#__PURE__*/_regenerator2.default.mark(function oneBitAndShuffleUntilDone() {
            var bitmap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var result, revealed, obfuscated;
            return _regenerator2.default.wrap(function oneBitAndShuffleUntilDone$(_context) {
                while (1) {
                    switch (_context.prev = _context.next) {
                        case 0:
                            result = [];
                            revealed = 0;
                            obfuscated = 0;

                            // first count up our ones/obfuscated and zeroes/revealed to initialize

                            bitmap.forEach(function (bit) {
                                // coercing a truthy here, which i guess leaves open the possibility
                                // of non-binary bits if you want to get real creative down the line
                                if (bit) {
                                    obfuscated++;
                                } else {
                                    revealed++;
                                }
                            });

                            // so long as we have an array to work with, stay in this loop

                        case 4:
                            if (!bitmap) {
                                _context.next = 18;
                                break;
                            }

                            obfuscated--;
                            revealed++;

                            // not the best guard statements, but i'm already upside down with
                            // decrementing at the beginning of the loop... oh well...
                            obfuscated = obfuscated < 0 ? 0 : obfuscated;
                            revealed = revealed > bitmap.length ? bitmap.length : revealed;

                            // a bit terse and ugly, but just building a new bitmap based on
                            // our current count of obfuscated and revealed (obfuscation assumed as ones here)
                            result = (0, _Shuffle2.default)(Array(revealed).fill(0).concat(Array(obfuscated).fill(1)));

                            // finally, only return and indicate that we're done draining the ones
                            // if that's actually true :P

                            if (!(obfuscated > 0)) {
                                _context.next = 15;
                                break;
                            }

                            _context.next = 13;
                            return result;

                        case 13:
                            _context.next = 16;
                            break;

                        case 15:
                            return _context.abrupt('return', result);

                        case 16:
                            _context.next = 4;
                            break;

                        case 18:
                        case 'end':
                            return _context.stop();
                    }
                }
            }, oneBitAndShuffleUntilDone, this);
        })
    }, {
        key: 'leftToRight',
        value: /*#__PURE__*/_regenerator2.default.mark(function leftToRight() {
            var bitmap = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
            var i;
            return _regenerator2.default.wrap(function leftToRight$(_context2) {
                while (1) {
                    switch (_context2.prev = _context2.next) {
                        case 0:
                            i = 0;

                        case 1:
                            if (!(i < bitmap.length)) {
                                _context2.next = 12;
                                break;
                            }

                            bitmap[i] = 0;

                            if (!bitmap.includes(1)) {
                                _context2.next = 8;
                                break;
                            }

                            _context2.next = 6;
                            return bitmap;

                        case 6:
                            _context2.next = 9;
                            break;

                        case 8:
                            return _context2.abrupt('return', bitmap);

                        case 9:
                            i++;
                            _context2.next = 1;
                            break;

                        case 12:
                            return _context2.abrupt('return', bitmap);

                        case 13:
                        case 'end':
                            return _context2.stop();
                    }
                }
            }, leftToRight, this);
        })
    }]);
    return Reveal;
}();

exports.default = Reveal;

/***/ })
/******/ ]);