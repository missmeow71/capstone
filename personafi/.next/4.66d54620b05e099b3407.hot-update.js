webpackHotUpdate(4,{

/***/ "./pages/index.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__ = __webpack_require__("./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__ = __webpack_require__("./node_modules/styled-jsx/style.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__lib_moltin__ = __webpack_require__("./lib/moltin.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Layout__ = __webpack_require__("./components/Layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_ProductList__ = __webpack_require__("./components/ProductList.js");

var _jsxFileName = "/Users/missmeow/Documents/Capstone/personafi/pages/index.js";



function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } } function _next(value) { step("next", value); } function _throw(err) { step("throw", err); } _next(); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





var HeroImage = function HeroImage(_ref) {
  var children = _ref.children;
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    className: "jsx-2846297259" + " " + "hero-image"
  }, children, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_styled_jsx_style___default.a, {
    styleId: "2846297259",
    css: ".hero-image.jsx-2846297259{height:50hv;background:url(\"\") no-repeat center;background-size:cover;position:relative;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL2luZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQVFnQixBQUdxQixZQUN3QixvQ0FDZCxzQkFDSixrQkFDcEIiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiL1VzZXJzL21pc3NtZW93L0RvY3VtZW50cy9DYXBzdG9uZS9wZXJzb25hZmkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge2dldFByb2R1Y3RzfSBmcm9tICcuLi9saWIvbW9sdGluJ1xuaW1wb3J0IExheW91dCBmcm9tICcuLi9jb21wb25lbnRzL0xheW91dCdcbmltcG9ydCBQcm9kdWN0TGlzdCBmcm9tICcuLi9jb21wb25lbnRzL1Byb2R1Y3RMaXN0J1xuXG5jb25zdCBIZXJvSW1hZ2UgPSAoe2NoaWxkcmVufSkgPT5cbiAgPGRpdiBjbGFzc05hbWU9XCJoZXJvLWltYWdlXCI+XG4gICAge2NoaWxkcmVufVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmhlcm8taW1hZ2Uge1xuICAgICAgICBoZWlnaHQ6IDUwaHY7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybChcIlwiKSBuby1yZXBlYXQgY2VudGVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj47XG5cbmNvbnN0IEhvbWUgPSBwcm9wcyA9PiAoXG4gIDxMYXlvdXQgdGl0bGU9XCJIb21lXCI+XG4gICAgPFByb2R1Y3RMaXN0IHsuLi5wcm9wc30gLz5cbiAgPC9MYXlvdXQ+XG4pXG5cblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHtkYXRhLCBpbmNsdWRlZDoge21haW5faW1hZ2VzfX0gPSBhd2FpdCBnZXRQcm9kdWN0cygpXG5cbiAgY29uc3QgcHJvZHVjdHMgPSBkYXRhLm1hcChwcm9kdWN0ID0+IHtcbiAgICAgIGNvbnN0IGltYWdlSWQgPSBwcm9kdWN0LnJlbGF0aW9uc2hpcHMubWFpbl9pbWFnZVxuICAgICAgPyBwcm9kdWN0LnJlbGF0aW9uc2hpcHMubWFpbl9pbWFnZS5kYXRhLmlkXG4gICAgICA6IGZhbHNlXG5cbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgLi4ucHJvZHVjdCxcbiAgICAgICAgICBpbWFnZTogaW1hZ2VJZCA/IG1haW5faW1hZ2VzLmZpbmQoaW1nID0+IGltZy5pZCA9PT0gaW1hZ2VJZCkubGluay5ocmVmIFxuICAgICAgICAgIDogJy9zdGF0aWMvYW1hem9uLWFydGlmaWNpYWwtaW50ZWxsaWdlbmNlLnN2ZydcbiAgICAgIH1cbiAgfSlcblxuICByZXR1cm4ge1xuICAgIHByb2R1Y3RzXG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSG9tZVxuIl19 */\n/*@ sourceURL=pages/index.js */"
  }));
};

var Home = function Home(props) {
  return __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_Layout__["a" /* default */], {
    title: "Home",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_ProductList__["a" /* default */], _extends({}, props, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    }
  })));
};

Home.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
__WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.mark(function _callee() {
  var _ref3, data, main_images, products;

  return __WEBPACK_IMPORTED_MODULE_0__babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return Object(__WEBPACK_IMPORTED_MODULE_3__lib_moltin__["c" /* getProducts */])();

        case 2:
          _ref3 = _context.sent;
          data = _ref3.data;
          main_images = _ref3.included.main_images;
          products = data.map(function (product) {
            var imageId = product.relationships.main_image ? product.relationships.main_image.data.id : false;
            return _objectSpread({}, product, {
              image: imageId ? main_images.find(function (img) {
                return img.id === imageId;
              }).link.href : '/static/amazon-artificial-intelligence.svg'
            });
          });
          return _context.abrupt("return", {
            products: products
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);
    (function (Component, route) {
      if(!Component) return
      if (false) return
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/")
  
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__("./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=4.66d54620b05e099b3407.hot-update.js.map