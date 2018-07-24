webpackHotUpdate(5,{

/***/ "./components/CartSummary.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stripe_checkout__ = __webpack_require__("./node_modules/react-stripe-checkout/dist/main.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_stripe_checkout___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_stripe_checkout__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__ = __webpack_require__("./node_modules/semantic-ui-react/dist/es/index.js");
var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/components/CartSummary.js";


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
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["c" /* Divider */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["i" /* Segment */], {
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
  }, "Sub Total:"), " ", formatted, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react_stripe_checkout___default.a, {
    name: "Personafi Marketplace",
    amount: amount,
    currency: currency,
    stripeKey: process.env.STRIPE_PUBLISHABLE_KEY,
    shippingAddress: false,
    billingAddress: true,
    zipCode: true,
    token: handleCheckout,
    reconfigureOnUpdate: false,
    triggerEvent: "onClick",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_semantic_ui_react__["a" /* Button */], {
    color: "orange",
    floated: "right",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Check Out"))));
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/process/browser.js")))

/***/ })

})
//# sourceMappingURL=5.1310ba50dc5e2c85e7dd.hot-update.js.map