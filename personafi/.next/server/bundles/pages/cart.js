module.exports =
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/CartItemList.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/components/CartItemList.js";



/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var items = _ref.items,
      removeFromCart = _ref.removeFromCart,
      loading = _ref.loading,
      completed = _ref.completed;
  if (loading) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Loader"], {
    active: true,
    inline: "centered",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  });
  if (completed) return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"], {
    success: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"].Header, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Order Placed!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, "Congratulations! Your order is on its way"));

  if (items.length === 0) {
    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"], {
      warning: true,
      __source: {
        fileName: _jsxFileName,
        lineNumber: 17
      }
    }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Message"].Header, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 18
      }
    }, "Your cart is empty!"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("p", {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 19
      }
    }, "Please add some items to your cart before resuming checkout."));
  }

  var mapCartItemsToItems = function mapCartItemsToItems(items) {
    return items.map(function (_ref2) {
      var id = _ref2.id,
          product_id = _ref2.product_id,
          name = _ref2.name,
          quantity = _ref2.quantity,
          meta = _ref2.meta;
      var price = meta.display_price.with_tax.unit.formatted || null;
      return {
        childKey: id,
        header: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
          href: "/product?id=".concat(product_id),
          passHref: true,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          }
        }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Item"].Header, {
          as: "a",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 31
          }
        }, name)),
        meta: "".concat(quantity, "x ").concat(price),
        extra: __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Button"], {
          basic: true,
          icon: "remove",
          floated: "right",
          onClick: function onClick() {
            return removeFromCart(id);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 36
          }
        })
      };
    });
  };

  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Item"].Group, {
    divided: true,
    items: mapCartItemsToItems(items),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    }
  });
});

/***/ }),

/***/ "./components/CartSummary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__);
var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/components/CartSummary.js";

// import StripeCheckout from 'react-stripe-checkout'
 // const stripeKey = 'pk_test_UBWSVyq6rmqp2x0bEwVQiicn'

/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var _ref$display_price$wi = _ref.display_price.with_tax,
      currency = _ref$display_price$wi.currency,
      amount = _ref$display_price$wi.amount,
      formatted = _ref$display_price$wi.formatted;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Divider"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Segment"], {
    clearing: true,
    size: "large",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, "Sub Total:"), " ", formatted, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_semantic_ui_react__["Button"], {
    color: "orange",
    floated: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Check Out")));
});

/***/ }),

/***/ "./components/Header.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router__ = __webpack_require__("next/router");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_next_router___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_next_router__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress__ = __webpack_require__("nprogress");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_nprogress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_nprogress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__);
var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/components/Header.js";







__WEBPACK_IMPORTED_MODULE_3_next_router___default.a.onRouteChangeStart = function (url) {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.start();
};

__WEBPACK_IMPORTED_MODULE_3_next_router___default.a.onRouteChangeComplete = function (url) {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

__WEBPACK_IMPORTED_MODULE_3_next_router___default.a.onRouteChangeError = function (url) {
  return __WEBPACK_IMPORTED_MODULE_4_nprogress___default.a.done();
};

/* harmony default export */ __webpack_exports__["a"] = (function () {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    type: "text/css",
    href: "/static/nprogress.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Menu"], {
    inverted: true,
    fixed: "top",
    size: "huge",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Container"], {
    text: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    prefetch: true,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Menu"].Item, {
    as: "a",
    header: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Image"], {
    size: "mini",
    src: "/static/amazon-artificial-intelligence.svg",
    style: {
      marginRight: '1.5em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }), "Personafi Marketplace")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/register",
    prefetch: true,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Menu"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "Sign Up")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/login",
    prefetch: true,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Menu"].Item, {
    as: "a",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    }
  }, "Sign In")), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/cart",
    prefetch: true,
    passHref: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_semantic_ui_react__["Menu"].Item, {
    position: "right",
    as: "a",
    header: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    }
  }, "Cart")))));
});

/***/ }),

/***/ "./components/Layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_head__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("semantic-ui-react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Header__ = __webpack_require__("./components/Header.js");
var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/components/Layout.js";




/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    name: "viewport",
    content: "width=device-width, initial-scale=1",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("meta", {
    charSet: "utf-8",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.2/semantic.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, title)), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Header__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["Container"], {
    text: true,
    style: {
      paddingTop: '7em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    }
  }, children));
});

/***/ }),

/***/ "./lib/moltin.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getProducts; });
/* unused harmony export getProductById */
/* unused harmony export addToCart */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getCartItems; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeFromCart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return checkoutCart; });
/* unused harmony export register */
/* unused harmony export login */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moltin_sdk__ = __webpack_require__("@moltin/sdk");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__moltin_sdk___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__moltin_sdk__);


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }


var Moltin = Object(__WEBPACK_IMPORTED_MODULE_1__moltin_sdk__["gateway"])({
  client_id: 'TkrDPNqfC1j7AJFFUHnMZbN9RzPygkff3beqMhxQsl'
});
var getProducts = function getProducts() {
  return Moltin.Products.With('main_image').All();
};
var getProductById = function getProductById(id) {
  return Moltin.Products.With('main_image').Get(id);
};
var addToCart = function addToCart(productId, quantity) {
  return Moltin.Cart().AddProduct(productId, quantity);
};
var getCartItems = function getCartItems(id) {
  return Moltin.Cart(id).Items();
};
var removeFromCart = function removeFromCart(itemId, cartId) {
  return Moltin.Cart(cartId).RemoveItem(itemId);
};
var checkoutCart = function checkoutCart(cartId, customer, billing) {
  return Moltin.Cart(cartId).Checkout(customer, billing);
}; // export const payForOrder = (orderId, token, email) => Moltin.Orders.Payment(orderId, {
//   gateway: 'stripe',
//   method: 'purchase',
//   payment: token,
//   options: {
//     receipt_email: email
//   }
// })

var register =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var email, password, rest, _ref3, _ref3$data, name, id, _ref4, token;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            email = _ref.email, password = _ref.password, rest = _objectWithoutProperties(_ref, ["email", "password"]);
            _context.next = 3;
            return Moltin.Customers.Create(_objectSpread({
              type: 'customer',
              email: email,
              password: password
            }, rest));

          case 3:
            _ref3 = _context.sent;
            _ref3$data = _ref3.data;
            name = _ref3$data.name;
            id = _ref3$data.id;
            _context.next = 9;
            return login({
              email: email,
              password: password
            });

          case 9:
            _ref4 = _context.sent;
            token = _ref4.token;
            return _context.abrupt("return", {
              id: id,
              name: name,
              email: email,
              token: token
            });

          case 12:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function register(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var login =
/*#__PURE__*/
function () {
  var _ref6 = _asyncToGenerator(
  /*#__PURE__*/
  __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(_ref5) {
    var email, password, _ref7, token;

    return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            email = _ref5.email, password = _ref5.password;
            _context2.next = 3;
            return Moltin.Customers.Token(email, password);

          case 3:
            _ref7 = _context2.sent;
            token = _ref7.data.token;
            return _context2.abrupt("return", {
              token: token
            });

          case 6:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function login(_x2) {
    return _ref6.apply(this, arguments);
  };
}();

/***/ }),

/***/ "./pages/cart.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("@babel/runtime/regenerator");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_CartItemList__ = __webpack_require__("./components/CartItemList.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_CartSummary__ = __webpack_require__("./components/CartSummary.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__lib_moltin__ = __webpack_require__("./lib/moltin.js");

var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/pages/cart.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }






var Cart =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Cart, _React$Component);

  function Cart() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Cart);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Cart.__proto__ || Object.getPrototypeOf(Cart)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        items: [],
        loading: true,
        completed: false
      }
    }), Object.defineProperty(_assertThisInitialized(_this), "_handleCheckout", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee(data) {
          var cartId, token, email, _data$card, name, line_1, city, country, county, postcode, customer, address, _ref2, id;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return localStorage.getItem('mcart');

                case 2:
                  cartId = _context.sent;
                  token = data.id, email = data.email, _data$card = data.card, name = _data$card.name, line_1 = _data$card.address_line1, city = _data$card.adress_city, country = _data$card.address_country, county = _data$card.address_state, postcode = _data$card.address_zip;
                  customer = {
                    name: name,
                    email: email
                  };
                  address = {
                    first_name: name.split(' ')[0],
                    last_name: name.split(' ')[1],
                    line_1: line_1,
                    city: city,
                    county: county,
                    country: country,
                    postcode: postcode
                  };
                  _context.prev = 6;
                  _context.next = 9;
                  return Object(__WEBPACK_IMPORTED_MODULE_5__lib_moltin__["a" /* checkoutCart */])(cartId, customer, address);

                case 9:
                  _ref2 = _context.sent;
                  id = _ref2.data.id;
                  _context.next = 13;
                  return Object(__WEBPACK_IMPORTED_MODULE_5__lib_moltin__["payForOrder"])(id, token, email);

                case 13:
                  _this.setState({
                    completed: true
                  });

                  _context.next = 19;
                  break;

                case 16:
                  _context.prev = 16;
                  _context.t0 = _context["catch"](6);
                  console.log(_context.t0);

                case 19:
                case "end":
                  return _context.stop();
              }
            }
          }, _callee, this, [[6, 16]]);
        }));

        return function value(_x) {
          return _value.apply(this, arguments);
        };
      }()
    }), Object.defineProperty(_assertThisInitialized(_this), "_handleRemoveFromCart", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: function () {
        var _value2 = _asyncToGenerator(
        /*#__PURE__*/
        __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee2(itemId) {
          var cartId, _ref3, data, meta;

          return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee2$(_context2) {
            while (1) {
              switch (_context2.prev = _context2.next) {
                case 0:
                  cartId = _this.state.cartId;
                  _context2.next = 3;
                  return Object(__WEBPACK_IMPORTED_MODULE_5__lib_moltin__["e" /* removeFromCart */])(itemId, cartId);

                case 3:
                  _ref3 = _context2.sent;
                  data = _ref3.data;
                  meta = _ref3.meta;

                  _this.setState({
                    items: data,
                    meta: meta
                  });

                case 7:
                case "end":
                  return _context2.stop();
              }
            }
          }, _callee2, this);
        }));

        return function value(_x2) {
          return _value2.apply(this, arguments);
        };
      }()
    }), _temp));
  }

  _createClass(Cart, [{
    key: "componentDidMount",
    value: function () {
      var _componentDidMount = _asyncToGenerator(
      /*#__PURE__*/
      __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee3() {
        var cartId, _ref4, data, meta;

        return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return localStorage.getItem('mcart');

              case 2:
                cartId = _context3.sent;
                _context3.next = 5;
                return Object(__WEBPACK_IMPORTED_MODULE_5__lib_moltin__["b" /* getCartItems */])(cartId);

              case 5:
                _ref4 = _context3.sent;
                data = _ref4.data;
                meta = _ref4.meta;
                this.setState({
                  items: data,
                  meta: meta,
                  cartId: cartId,
                  loading: false
                });

              case 9:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function componentDidMount() {
        return _componentDidMount.apply(this, arguments);
      };
    }()
  }, {
    key: "render",
    value: function render() {
      var _state = this.state,
          meta = _state.meta,
          rest = _objectWithoutProperties(_state, ["meta"]);

      var loading = rest.loading;
      return __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_Layout__["a" /* default */], {
        title: "Cart",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        }
      }, __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_CartItemList__["a" /* default */], _extends({}, rest, {
        removeFromCart: this._handleRemoveFromCart,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        }
      })), !loading && !rest.completed && __WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_CartSummary__["a" /* default */], _extends({}, meta, {
        handleCheckout: this._handleCheckout,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        }
      })));
    }
  }]);

  return Cart;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);



/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/cart.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "@moltin/sdk":
/***/ (function(module, exports) {

module.exports = require("@moltin/sdk");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "nprogress":
/***/ (function(module, exports) {

module.exports = require("nprogress");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "semantic-ui-react":
/***/ (function(module, exports) {

module.exports = require("semantic-ui-react");

/***/ })

/******/ });
//# sourceMappingURL=cart.js.map