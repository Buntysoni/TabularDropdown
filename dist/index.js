'use strict';

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

function createCommonjsModule(fn, module) {
	return module = { exports: {} }, fn(module, module.exports), module.exports;
}

/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var b = "function" === typeof Symbol && Symbol["for"],
  c = b ? Symbol["for"]("react.element") : 60103,
  d = b ? Symbol["for"]("react.portal") : 60106,
  e = b ? Symbol["for"]("react.fragment") : 60107,
  f = b ? Symbol["for"]("react.strict_mode") : 60108,
  g = b ? Symbol["for"]("react.profiler") : 60114,
  h = b ? Symbol["for"]("react.provider") : 60109,
  k = b ? Symbol["for"]("react.context") : 60110,
  l = b ? Symbol["for"]("react.async_mode") : 60111,
  m = b ? Symbol["for"]("react.concurrent_mode") : 60111,
  n = b ? Symbol["for"]("react.forward_ref") : 60112,
  p = b ? Symbol["for"]("react.suspense") : 60113,
  q = b ? Symbol["for"]("react.suspense_list") : 60120,
  r = b ? Symbol["for"]("react.memo") : 60115,
  t = b ? Symbol["for"]("react.lazy") : 60116,
  v = b ? Symbol["for"]("react.block") : 60121,
  w = b ? Symbol["for"]("react.fundamental") : 60117,
  x = b ? Symbol["for"]("react.responder") : 60118,
  y = b ? Symbol["for"]("react.scope") : 60119;
function z(a) {
  if ("object" === _typeof(a) && null !== a) {
    var u = a.$$typeof;
    switch (u) {
      case c:
        switch (a = a.type, a) {
          case l:
          case m:
          case e:
          case g:
          case f:
          case p:
            return a;
          default:
            switch (a = a && a.$$typeof, a) {
              case k:
              case n:
              case t:
              case r:
              case h:
                return a;
              default:
                return u;
            }
        }
      case d:
        return u;
    }
  }
}
function A(a) {
  return z(a) === m;
}
exports.AsyncMode = l;
exports.ConcurrentMode = m;
exports.ContextConsumer = k;
exports.ContextProvider = h;
exports.Element = c;
exports.ForwardRef = n;
exports.Fragment = e;
exports.Lazy = t;
exports.Memo = r;
exports.Portal = d;
exports.Profiler = g;
exports.StrictMode = f;
exports.Suspense = p;
exports.isAsyncMode = function (a) {
  return A(a) || z(a) === l;
};
exports.isConcurrentMode = A;
exports.isContextConsumer = function (a) {
  return z(a) === k;
};
exports.isContextProvider = function (a) {
  return z(a) === h;
};
exports.isElement = function (a) {
  return "object" === _typeof(a) && null !== a && a.$$typeof === c;
};
exports.isForwardRef = function (a) {
  return z(a) === n;
};
exports.isFragment = function (a) {
  return z(a) === e;
};
exports.isLazy = function (a) {
  return z(a) === t;
};
exports.isMemo = function (a) {
  return z(a) === r;
};
exports.isPortal = function (a) {
  return z(a) === d;
};
exports.isProfiler = function (a) {
  return z(a) === g;
};
exports.isStrictMode = function (a) {
  return z(a) === f;
};
exports.isSuspense = function (a) {
  return z(a) === p;
};
exports.isValidElementType = function (a) {
  return "string" === typeof a || "function" === typeof a || a === e || a === m || a === g || a === f || a === p || a === q || "object" === _typeof(a) && null !== a && (a.$$typeof === t || a.$$typeof === r || a.$$typeof === h || a.$$typeof === k || a.$$typeof === n || a.$$typeof === w || a.$$typeof === x || a.$$typeof === y || a.$$typeof === v);
};
exports.typeOf = z;

var reactIs_production_min = /*#__PURE__*/Object.freeze({
  __proto__: null
});

/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
if (process.env.NODE_ENV !== "production") {
  (function () {

    // The Symbol used to tag the ReactElement-like types. If there is no native Symbol
    // nor polyfill, then a plain number is used for performance.
    var hasSymbol = typeof Symbol === 'function' && Symbol["for"];
    var REACT_ELEMENT_TYPE = hasSymbol ? Symbol["for"]('react.element') : 0xeac7;
    var REACT_PORTAL_TYPE = hasSymbol ? Symbol["for"]('react.portal') : 0xeaca;
    var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol["for"]('react.fragment') : 0xeacb;
    var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.strict_mode') : 0xeacc;
    var REACT_PROFILER_TYPE = hasSymbol ? Symbol["for"]('react.profiler') : 0xead2;
    var REACT_PROVIDER_TYPE = hasSymbol ? Symbol["for"]('react.provider') : 0xeacd;
    var REACT_CONTEXT_TYPE = hasSymbol ? Symbol["for"]('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
    // (unstable) APIs that have been removed. Can we remove the symbols?

    var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol["for"]('react.async_mode') : 0xeacf;
    var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol["for"]('react.concurrent_mode') : 0xeacf;
    var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol["for"]('react.forward_ref') : 0xead0;
    var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol["for"]('react.suspense') : 0xead1;
    var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol["for"]('react.suspense_list') : 0xead8;
    var REACT_MEMO_TYPE = hasSymbol ? Symbol["for"]('react.memo') : 0xead3;
    var REACT_LAZY_TYPE = hasSymbol ? Symbol["for"]('react.lazy') : 0xead4;
    var REACT_BLOCK_TYPE = hasSymbol ? Symbol["for"]('react.block') : 0xead9;
    var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol["for"]('react.fundamental') : 0xead5;
    var REACT_RESPONDER_TYPE = hasSymbol ? Symbol["for"]('react.responder') : 0xead6;
    var REACT_SCOPE_TYPE = hasSymbol ? Symbol["for"]('react.scope') : 0xead7;
    function isValidElementType(type) {
      return typeof type === 'string' || typeof type === 'function' ||
      // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || _typeof(type) === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
    }
    function typeOf(object) {
      if (_typeof(object) === 'object' && object !== null) {
        var $$typeof = object.$$typeof;
        switch ($$typeof) {
          case REACT_ELEMENT_TYPE:
            var type = object.type;
            switch (type) {
              case REACT_ASYNC_MODE_TYPE:
              case REACT_CONCURRENT_MODE_TYPE:
              case REACT_FRAGMENT_TYPE:
              case REACT_PROFILER_TYPE:
              case REACT_STRICT_MODE_TYPE:
              case REACT_SUSPENSE_TYPE:
                return type;
              default:
                var $$typeofType = type && type.$$typeof;
                switch ($$typeofType) {
                  case REACT_CONTEXT_TYPE:
                  case REACT_FORWARD_REF_TYPE:
                  case REACT_LAZY_TYPE:
                  case REACT_MEMO_TYPE:
                  case REACT_PROVIDER_TYPE:
                    return $$typeofType;
                  default:
                    return $$typeof;
                }
            }
          case REACT_PORTAL_TYPE:
            return $$typeof;
        }
      }
      return undefined;
    } // AsyncMode is deprecated along with isAsyncMode

    var AsyncMode = REACT_ASYNC_MODE_TYPE;
    var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
    var ContextConsumer = REACT_CONTEXT_TYPE;
    var ContextProvider = REACT_PROVIDER_TYPE;
    var Element = REACT_ELEMENT_TYPE;
    var ForwardRef = REACT_FORWARD_REF_TYPE;
    var Fragment = REACT_FRAGMENT_TYPE;
    var Lazy = REACT_LAZY_TYPE;
    var Memo = REACT_MEMO_TYPE;
    var Portal = REACT_PORTAL_TYPE;
    var Profiler = REACT_PROFILER_TYPE;
    var StrictMode = REACT_STRICT_MODE_TYPE;
    var Suspense = REACT_SUSPENSE_TYPE;
    var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

    function isAsyncMode(object) {
      {
        if (!hasWarnedAboutDeprecatedIsAsyncMode) {
          hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

          console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
        }
      }
      return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
    }
    function isConcurrentMode(object) {
      return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
    }
    function isContextConsumer(object) {
      return typeOf(object) === REACT_CONTEXT_TYPE;
    }
    function isContextProvider(object) {
      return typeOf(object) === REACT_PROVIDER_TYPE;
    }
    function isElement(object) {
      return _typeof(object) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
    }
    function isForwardRef(object) {
      return typeOf(object) === REACT_FORWARD_REF_TYPE;
    }
    function isFragment(object) {
      return typeOf(object) === REACT_FRAGMENT_TYPE;
    }
    function isLazy(object) {
      return typeOf(object) === REACT_LAZY_TYPE;
    }
    function isMemo(object) {
      return typeOf(object) === REACT_MEMO_TYPE;
    }
    function isPortal(object) {
      return typeOf(object) === REACT_PORTAL_TYPE;
    }
    function isProfiler(object) {
      return typeOf(object) === REACT_PROFILER_TYPE;
    }
    function isStrictMode(object) {
      return typeOf(object) === REACT_STRICT_MODE_TYPE;
    }
    function isSuspense(object) {
      return typeOf(object) === REACT_SUSPENSE_TYPE;
    }
    exports.AsyncMode = AsyncMode;
    exports.ConcurrentMode = ConcurrentMode;
    exports.ContextConsumer = ContextConsumer;
    exports.ContextProvider = ContextProvider;
    exports.Element = Element;
    exports.ForwardRef = ForwardRef;
    exports.Fragment = Fragment;
    exports.Lazy = Lazy;
    exports.Memo = Memo;
    exports.Portal = Portal;
    exports.Profiler = Profiler;
    exports.StrictMode = StrictMode;
    exports.Suspense = Suspense;
    exports.isAsyncMode = isAsyncMode;
    exports.isConcurrentMode = isConcurrentMode;
    exports.isContextConsumer = isContextConsumer;
    exports.isContextProvider = isContextProvider;
    exports.isElement = isElement;
    exports.isForwardRef = isForwardRef;
    exports.isFragment = isFragment;
    exports.isLazy = isLazy;
    exports.isMemo = isMemo;
    exports.isPortal = isPortal;
    exports.isProfiler = isProfiler;
    exports.isStrictMode = isStrictMode;
    exports.isSuspense = isSuspense;
    exports.isValidElementType = isValidElementType;
    exports.typeOf = typeOf;
  })();
}

var reactIs_development = /*#__PURE__*/Object.freeze({
  __proto__: null
});

var reactIs = createCommonjsModule(function (module) {

if (process.env.NODE_ENV === 'production') {
  module.exports = reactIs_production_min;
} else {
  module.exports = reactIs_development;
}
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ReactIs = require('react-is');
var assign = require('object-assign');
var ReactPropTypesSecret$2 = require('./lib/ReactPropTypesSecret');
var has = require('./lib/has');
var checkPropTypes = require('./checkPropTypes');
var printWarning = function printWarning() {};
if (process.env.NODE_ENV !== 'production') {
  printWarning = function printWarning(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}
function emptyFunctionThatReturnsNull() {
  return null;
}
module.exports = function (isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),
    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && _typeof(data) === 'object' ? data : {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;
  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;
      if (secret !== ReactPropTypesSecret$2) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use `PropTypes.checkPropTypes()` to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (!manualPropTypeCallCache[cacheKey] &&
          // Avoid spamming the console because they are often not actionable except for lib authors
          manualPropTypeWarningCount < 3) {
            printWarning('You are manually calling a React.PropTypes validation ' + 'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' + 'and will throw in the standalone `prop-types` package. ' + 'You may be seeing this warning due to a third-party PropTypes ' + 'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.');
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }
    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);
    return chainedCheckType;
  }
  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'), {
          expectedType: expectedType
        });
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }
  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret$2);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning('Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' + 'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).');
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }
      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$2);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning('Invalid argument supplied to oneOfType. Expected an array of check functions, but ' + 'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.');
        return emptyFunctionThatReturnsNull;
      }
    }
    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret$2);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = expectedTypes.length > 0 ? ', expected one of type [' + expectedTypes.join(', ') + ']' : '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }
  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError((componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' + 'it must be a function, usually from the `prop-types` package, but received `' + type + '`.');
  }
  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$2);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' + '\nBad object: ' + JSON.stringify(props[propName], null, '  ') + '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  '));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret$2);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }
  function isNode(propValue) {
    switch (_typeof(propValue)) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }
        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }
        return true;
      default:
        return false;
    }
  }
  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }
    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = _typeof(propValue);
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }
  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var factoryWithTypeCheckers = /*#__PURE__*/Object.freeze({
  __proto__: null
});

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var ReactPropTypesSecret$1 = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
var ReactPropTypesSecret_1 = ReactPropTypesSecret$1;

var ReactPropTypesSecret = ReactPropTypesSecret_1;

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;
var factoryWithThrowingShims = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
    err.name = 'Invariant Violation';
    throw err;
  }
  shim.isRequired = shim;
  function getShim() {
    return shim;
  }
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,
    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,
    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };
  ReactPropTypes.PropTypes = ReactPropTypes;
  return ReactPropTypes;
};

var require$$2 = factoryWithThrowingShims;

var propTypes = createCommonjsModule(function (module) {
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = reactIs;

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = factoryWithTypeCheckers(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = require$$2();
}
});

var PropTypes = propTypes;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".TabularDropdown-module_advancedDropdown__o013q {\r\n    position: relative;\r\n    width: 100%;\r\n    min-width: 200px;\r\n}\r\n\r\n.TabularDropdown-module_dropdownMenu__zEwy- {\r\n    position: absolute;\r\n    width: 100%;\r\n    min-width: 100%;\r\n    max-width: max-content;\r\n    z-index: 1000;\r\n}\r\n\r\n.TabularDropdown-module_dropdownList__dlOyt {\r\n    scrollbar-width: thin;\r\n    scrollbar-color: #cbd5e0 #f7fafc;\r\n    overflow-x: auto;\r\n    white-space: nowrap;\r\n}\r\n\r\n.TabularDropdown-module_dropdownList__dlOyt::-webkit-scrollbar {\r\n    width: 6px;\r\n    height: 6px;\r\n}\r\n\r\n.TabularDropdown-module_dropdownList__dlOyt::-webkit-scrollbar-track {\r\n    background: #f7fafc;\r\n}\r\n\r\n.TabularDropdown-module_dropdownList__dlOyt::-webkit-scrollbar-thumb {\r\n    background-color: #cbd5e0;\r\n    border-radius: 6px;\r\n}\r\n\r\n.TabularDropdown-module_dropdownRow__wqknt {\r\n    width: 100%;\r\n    display: flex;\r\n    border-bottom: 1px solid #e5e7eb;\r\n    min-width: fit-content;\r\n}\r\n\r\n.TabularDropdown-module_dropdownRow__wqknt:hover {\r\n    background-color: rgba(59, 130, 246, 0.05);\r\n}\r\n\r\n.TabularDropdown-module_focused__au2XV {\r\n    background-color: rgba(59, 130, 246, 0.1);\r\n}\r\n\r\n.TabularDropdown-module_dropdownCell__gSgSj {\r\n    min-width: 100px;\r\n    flex: 1;\r\n    padding: 0.5rem 0.75rem;\r\n    overflow: hidden;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n}\r\n\r\n.TabularDropdown-module_dropdownHeaderCell__Tm9g0 {\r\n    position: sticky;\r\n    top: 0;\r\n    background-color: #f9fafb;\r\n    z-index: 1;\r\n    padding: 0.5rem 0.75rem;\r\n    font-weight: 600;\r\n    min-width: 100px;\r\n    flex: 1;\r\n    white-space: nowrap;\r\n}";
var styles = {"advancedDropdown":"TabularDropdown-module_advancedDropdown__o013q","dropdownMenu":"TabularDropdown-module_dropdownMenu__zEwy-","dropdownList":"TabularDropdown-module_dropdownList__dlOyt","dropdownRow":"TabularDropdown-module_dropdownRow__wqknt","focused":"TabularDropdown-module_focused__au2XV","dropdownCell":"TabularDropdown-module_dropdownCell__gSgSj","dropdownHeaderCell":"TabularDropdown-module_dropdownHeaderCell__Tm9g0"};
styleInject(css_248z);

var TabularDropdown = function TabularDropdown(_ref) {
  var _ref$data = _ref.data,
    data = _ref$data === void 0 ? [] : _ref$data,
    onSelect = _ref.onSelect,
    defaultSelected = _ref.defaultSelected,
    _ref$defaultValue = _ref.defaultValue,
    defaultValue = _ref$defaultValue === void 0 ? "" : _ref$defaultValue,
    _ref$className = _ref.className,
    className = _ref$className === void 0 ? "" : _ref$className,
    _ref$placeholder = _ref.placeholder,
    placeholder = _ref$placeholder === void 0 ? "Search or select an option" : _ref$placeholder,
    _ref$pageSize = _ref.pageSize,
    pageSize = _ref$pageSize === void 0 ? 15 : _ref$pageSize,
    _ref$primaryKey = _ref.primaryKey,
    primaryKey = _ref$primaryKey === void 0 ? "id" : _ref$primaryKey,
    _ref$searchableColumn = _ref.searchableColumns,
    searchableColumns = _ref$searchableColumn === void 0 ? [] : _ref$searchableColumn,
    _ref$hiddenColumns = _ref.hiddenColumns,
    hiddenColumns = _ref$hiddenColumns === void 0 ? [] : _ref$hiddenColumns,
    _ref$columnWidths = _ref.columnWidths,
    columnWidths = _ref$columnWidths === void 0 ? {} : _ref$columnWidths,
    _ref$isDisabled = _ref.isDisabled,
    isDisabled = _ref$isDisabled === void 0 ? false : _ref$isDisabled;
  var _useState = React.useState(false),
    _useState2 = _slicedToArray(_useState, 2),
    isOpen = _useState2[0],
    setIsOpen = _useState2[1];
  var _useState3 = React.useState(defaultSelected || null),
    _useState4 = _slicedToArray(_useState3, 2),
    selectedItem = _useState4[0],
    setSelectedItem = _useState4[1];
  var _useState5 = React.useState(defaultValue),
    _useState6 = _slicedToArray(_useState5, 2),
    inputValue = _useState6[0],
    setInputValue = _useState6[1];
  var _useState7 = React.useState([]),
    _useState8 = _slicedToArray(_useState7, 2),
    filteredData = _useState8[0],
    setFilteredData = _useState8[1];
  var _useState9 = React.useState([]),
    _useState10 = _slicedToArray(_useState9, 2),
    visibleData = _useState10[0],
    setVisibleData = _useState10[1];
  var _useState11 = React.useState(1),
    _useState12 = _slicedToArray(_useState11, 2),
    page = _useState12[0],
    setPage = _useState12[1];
  var _useState13 = React.useState(-1),
    _useState14 = _slicedToArray(_useState13, 2),
    focusedIndex = _useState14[0],
    setFocusedIndex = _useState14[1];
  var _useState15 = React.useState(false),
    _useState16 = _slicedToArray(_useState15, 2),
    isLoading = _useState16[0],
    setIsLoading = _useState16[1];
  var _useState17 = React.useState(false),
    _useState18 = _slicedToArray(_useState17, 2),
    hasUserSelected = _useState18[0],
    setHasUserSelected = _useState18[1]; // Track user selection

  var dropdownRef = React.useRef(null);
  var listRef = React.useRef(null);
  var focusedItemRef = React.useRef(null);
  var inputRef = React.useRef(null);
  console.log("defaultSelected", defaultSelected);

  // If no columns are specified as searchable, use all columns except hidden ones
  var effectiveSearchableColumns = searchableColumns.length > 0 ? searchableColumns : data[0] ? Object.keys(data[0]).filter(function (col) {
    return col !== primaryKey && !hiddenColumns.includes(col);
  }) : [];

  // Get visible columns (all columns except hidden ones and the primary key if not explicitly included)
  var availableColumns = data[0] ? Object.keys(data[0]).filter(function (col) {
    return !hiddenColumns.includes(col) && (primaryKey !== col || searchableColumns.includes(primaryKey));
  }) : [];

  // Initialize filtered and visible data
  React.useEffect(function () {
    if (data.length > 0) {
      setFilteredData(data);
      setVisibleData(data.slice(0, pageSize));
    } else {
      setFilteredData([]);
      setVisibleData([]);
    }
  }, [data, pageSize]);

  // Update selected item if defaultSelected changes
  React.useEffect(function () {
    debugger;
    if (!hasUserSelected) {
      // Only apply defaults if user hasn't made a selection

      if (defaultSelected) {
        setSelectedItem(defaultSelected);
        var displayColumn = effectiveSearchableColumns[0] || 'id';
        setInputValue(defaultSelected[displayColumn] || "");
        console.log("default value", defaultSelected[displayColumn]);
      } else if (defaultValue) {
        setInputValue(defaultValue);
        var matchingItem = data.find(function (item) {
          var _item$displayColumn;
          var displayColumn = effectiveSearchableColumns[0] || primaryKey;
          return ((_item$displayColumn = item[displayColumn]) === null || _item$displayColumn === void 0 ? void 0 : _item$displayColumn.toString()) === defaultValue.toString();
        });
        if (matchingItem) {
          setSelectedItem(matchingItem);
        }
      }
    }
  }, [defaultSelected, defaultValue, data, effectiveSearchableColumns, primaryKey, hasUserSelected]);
  console.log(selectedItem, "selectedItem");
  // Handle clicks outside of dropdown to close it
  React.useEffect(function () {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedIndex(-1);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return function () {
      return document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Scroll focused item into view
  React.useEffect(function () {
    if (focusedItemRef.current && listRef.current) {
      var list = listRef.current;
      var item = focusedItemRef.current;
      var listRect = list.getBoundingClientRect();
      var itemRect = item.getBoundingClientRect();
      if (itemRect.bottom > listRect.bottom) {
        item.scrollIntoView({
          block: 'end',
          behavior: 'smooth'
        });
      } else if (itemRect.top < listRect.top) {
        item.scrollIntoView({
          block: 'start',
          behavior: 'smooth'
        });
      }
    }
  }, [focusedIndex]);

  // Filter data based on input value
  var filterData = React.useCallback(function (value) {
    if (!value.trim()) {
      setFilteredData(data);
      setVisibleData(data.slice(0, pageSize));
      setPage(1);
      return;
    }
    var lowerValue = value.toLowerCase();
    var filtered = data.filter(function (item) {
      // Only search in searchable columns
      return effectiveSearchableColumns.some(function (column) {
        var columnValue = item[column];
        return columnValue && columnValue.toString().toLowerCase().includes(lowerValue);
      });
    });
    setFilteredData(filtered);
    setVisibleData(filtered.slice(0, pageSize));
    setPage(1);
    setFocusedIndex(filtered.length > 0 ? 0 : -1);
  }, [data, pageSize, effectiveSearchableColumns]);

  // Handle keyboard navigation
  var handleKeyDown = function handleKeyDown(e) {
    if (isDisabled) return;
    if (!isOpen) {
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
        setIsOpen(true);
        // Set initial focus when opening with keyboard
        setTimeout(function () {
          if (filteredData.length > 0) {
            setFocusedIndex(0);
          }
        }, 0);
        e.preventDefault();
      }
      return;
    }
    switch (e.key) {
      case 'ArrowDown':
        e.preventDefault();
        setFocusedIndex(function (prevIndex) {
          var nextIndex = prevIndex < visibleData.length - 1 ? prevIndex + 1 : prevIndex;
          return nextIndex;
        });
        break;
      case 'ArrowUp':
        e.preventDefault();
        setFocusedIndex(function (prevIndex) {
          return Math.max(0, prevIndex - 1);
        });
        break;
      case 'Enter':
        e.preventDefault();
        if (focusedIndex >= 0 && focusedIndex < visibleData.length) {
          debugger;
          handleSelect(visibleData[focusedIndex]);
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1);
        break;
    }
  };

  // Handle scroll for infinite pagination
  var handleScroll = React.useCallback(function () {
    if (isLoading || filteredData.length <= visibleData.length) return;
    var list = listRef.current;
    if (!list) return;
    var scrollPosition = list.scrollTop + list.clientHeight;
    var scrollThreshold = list.scrollHeight - 100; // Load more when 100px from bottom

    if (scrollPosition > scrollThreshold) {
      setIsLoading(true);

      // Simulate loading delay
      setTimeout(function () {
        var nextPage = page + 1;
        setVisibleData(function (prev) {
          return [].concat(_toConsumableArray(prev), _toConsumableArray(filteredData.slice(prev.length, nextPage * pageSize)));
        });
        setPage(nextPage);
        setIsLoading(false);
      }, 300);
    }
  }, [filteredData, visibleData, page, pageSize, isLoading]);

  // Add scroll event listener
  React.useEffect(function () {
    var list = listRef.current;
    if (list) {
      list.addEventListener('scroll', handleScroll);
      return function () {
        return list.removeEventListener('scroll', handleScroll);
      };
    }
  }, [handleScroll]);
  var handleSelect = function handleSelect(item) {
    debugger;
    setHasUserSelected(true); // Mark that user has made a selection
    setSelectedItem(item);
    var displayColumn = effectiveSearchableColumns[0] || primaryKey;
    setInputValue(item[displayColumn] || "");
    setIsOpen(false);
    setFocusedIndex(-1);
    if (onSelect && typeof onSelect === 'function') {
      onSelect(item);
    }
  };
  var toggleDropdown = function toggleDropdown() {
    if (isDisabled) return;
    var newIsOpen = !isOpen;
    setIsOpen(newIsOpen);
    if (newIsOpen) {
      // Reset to show all data when opening
      filterData(inputValue);
      // Set focus index to 0 only if there's data
      setTimeout(function () {
        if (filteredData.length > 0) {
          setFocusedIndex(0);
        }
      }, 0);
    } else {
      setFocusedIndex(-1);
    }
  };
  var handleInputChange = function handleInputChange(e) {
    if (isDisabled) return;
    var value = e.target.value;
    setInputValue(value);
    filterData(value);

    // Open dropdown when typing
    if (!isOpen && value) {
      setIsOpen(true);
    }
  };
  var handleInputFocus = function handleInputFocus() {
    if (isDisabled) return;
    if (!isOpen) {
      setIsOpen(true);
      filterData(inputValue);
    }
  };

  // Clear selection
  var handleClear = function handleClear(e) {
    e.stopPropagation();
    setHasUserSelected(true); // Mark that user has cleared the selection
    setSelectedItem(null);
    setInputValue("");
    if (onSelect) {
      onSelect(null);
    }
    inputRef.current.focus();
  };
  // console.log('Styles object:', styles);
  console.log(inputValue, "inputValue");
  return /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(styles.advancedDropdown, " ").concat(className),
    ref: dropdownRef
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "relative"
  }, /*#__PURE__*/React__default["default"].createElement("input", {
    ref: inputRef,
    type: "text",
    className: "w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-300 ".concat(isDisabled ? 'bg-gray-100 cursor-not-allowed' : ''),
    value: inputValue,
    onChange: handleInputChange,
    onKeyDown: handleKeyDown,
    onFocus: handleInputFocus,
    placeholder: placeholder,
    onClick: function onClick() {
      return !isOpen && toggleDropdown();
    },
    disabled: isDisabled,
    "data-selected": selectedItem ? selectedItem[primaryKey] : ""
  }), /*#__PURE__*/React__default["default"].createElement("div", {
    className: "absolute right-0 top-1/2 transform -translate-y-1/2 flex"
  }, inputValue && !isDisabled && /*#__PURE__*/React__default["default"].createElement("button", {
    className: "p-2 text-gray-400 hover:text-gray-600",
    onClick: handleClear,
    type: "button",
    "aria-label": "Clear selection"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    className: "w-4 h-4",
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M6 18L18 6M6 6l12 12"
  }))), /*#__PURE__*/React__default["default"].createElement("button", {
    className: "p-2 text-gray-500 ".concat(isDisabled ? 'cursor-not-allowed opacity-50' : ''),
    onClick: toggleDropdown,
    type: "button",
    disabled: isDisabled,
    "aria-label": isOpen ? "Close dropdown" : "Open dropdown"
  }, /*#__PURE__*/React__default["default"].createElement("svg", {
    className: "w-4 h-4 transition-transform ".concat(isOpen ? 'rotate-180' : ''),
    fill: "none",
    stroke: "currentColor",
    viewBox: "0 0 24 24",
    xmlns: "http://www.w3.org/2000/svg"
  }, /*#__PURE__*/React__default["default"].createElement("path", {
    strokeLinecap: "round",
    strokeLinejoin: "round",
    strokeWidth: "2",
    d: "M19 9l-7 7-7-7"
  }))))), isOpen && !isDisabled && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(styles.dropdownList, " absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded shadow-lg")
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "overflow-x-auto"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    ref: listRef,
    className: "".concat(styles.dropdownList, " max-h-60 overflow-y-auto"),
    onScroll: handleScroll
  }, availableColumns.length > 0 && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "".concat(styles.dropdownHeaderCell, " sticky top-0 bg-gray-100 border-b flex text-sm font-semibold whitespace-nowrap")
  }, availableColumns.map(function (column) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: column,
      className: "".concat(styles.dropdownHeaderCell, " px-3 py-2"),
      style: {
        width: columnWidths[column] || 'auto'
      }
    }, column.charAt(0).toUpperCase() + column.slice(1).replace(/([A-Z])/g, ' $1'));
  })), visibleData.length > 0 ? visibleData.map(function (item, index) {
    return /*#__PURE__*/React__default["default"].createElement("div", {
      key: item[primaryKey] || index,
      ref: index === focusedIndex ? focusedItemRef : null,
      className: "".concat(styles.dropdownRow, " flex border-b last:border-b-0 hover:bg-gray-100 cursor-pointer whitespace-nowrap ").concat(index === focusedIndex ? 'bg-blue-50' : ''),
      onClick: function onClick() {
        return handleSelect(item);
      },
      onMouseEnter: function onMouseEnter() {
        return setFocusedIndex(index);
      }
    }, availableColumns.map(function (column) {
      return /*#__PURE__*/React__default["default"].createElement("div", {
        key: "".concat(item[primaryKey] || index, "-").concat(column),
        className: "".concat(styles.dropdownCell, " px-3 py-2 truncate ").concat(column === effectiveSearchableColumns[0] ? 'font-medium text-gray-800' : column === effectiveSearchableColumns[1] ? 'text-blue-600' : 'text-gray-600'),
        style: {
          width: columnWidths[column] || 'auto'
        }
      }, renderCellContent(item, column));
    }));
  }) : /*#__PURE__*/React__default["default"].createElement("div", {
    className: "px-3 py-4 text-center text-gray-500"
  }, "No matching items found"), isLoading && /*#__PURE__*/React__default["default"].createElement("div", {
    className: "px-3 py-2 text-center text-gray-500"
  }, /*#__PURE__*/React__default["default"].createElement("div", {
    className: "inline-block animate-spin mr-2"
  }, "\u27F3"), "Loading more items...")))));
  function renderCellContent(item, column) {
    var value = item[column];

    // Handle null or undefined values
    if (value === null || value === undefined) {
      return /*#__PURE__*/React__default["default"].createElement("span", {
        className: "text-gray-400"
      }, "\u2014");
    }

    // Special rendering for specific column types (can be extended)
    if (column === 'category' || column === 'status' || column === 'type' || column === 'priority') {
      return renderBadge(value, column);
    }

    // Default rendering for other columns
    return value;
  }
  function renderBadge(value, column) {
    var className = 'px-2 py-1 text-xs rounded-full ';

    // Different color schemes based on column type
    if (column === 'status') {
      className += getStatusBadgeColor(value);
    } else if (column === 'category') {
      className += getCategoryBadgeColor(value);
    } else if (column === 'priority') {
      className += getPriorityBadgeColor(value);
    } else {
      // Default badge styling
      className += 'bg-gray-100 text-gray-800';
    }
    return /*#__PURE__*/React__default["default"].createElement("span", {
      className: className
    }, value);
  }
  function getStatusBadgeColor(status) {
    switch (String(status).toLowerCase()) {
      case 'active':
        return 'bg-green-100 text-green-800';
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'inactive':
        return 'bg-gray-100 text-gray-800';
      case 'deleted':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-blue-100 text-blue-800';
    }
  }
  function getCategoryBadgeColor(category) {
    switch (String(category).toLowerCase()) {
      case 'premium':
        return 'bg-blue-100 text-blue-800';
      case 'standard':
        return 'bg-green-100 text-green-800';
      case 'basic':
        return 'bg-gray-100 text-gray-800';
      case 'featured':
        return 'bg-purple-100 text-purple-800';
      case 'archived':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
  function getPriorityBadgeColor(priority) {
    switch (String(priority).toLowerCase()) {
      case 'high':
        return 'bg-red-100 text-red-800';
      case 'medium':
        return 'bg-yellow-100 text-yellow-800';
      case 'low':
        return 'bg-green-100 text-green-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  }
};
TabularDropdown.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
  onSelect: PropTypes.func,
  defaultSelected: PropTypes.object,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  pageSize: PropTypes.number,
  primaryKey: PropTypes.string,
  searchableColumns: PropTypes.arrayOf(PropTypes.string),
  hiddenColumns: PropTypes.arrayOf(PropTypes.string),
  columnWidths: PropTypes.object,
  isDisabled: PropTypes.bool
};

module.exports = TabularDropdown;
//# sourceMappingURL=index.js.map
