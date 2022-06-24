self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/testimonials-group.js":
/*!***************************************************!*\
  !*** ./components/sections/testimonials-group.js ***!
  \***************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/image */ "./components/elements/image.js");
/* harmony import */ var _utils_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/button */ "./utils/button.js");
/* harmony import */ var _elements_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../elements/button */ "./components/elements/button.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\PC\\Documents\\Repositories\\online-infinity-assessment\\frontend\\components\\sections\\testimonials-group.js",
    _this = undefined;






var TestimonialsGroup = function TestimonialsGroup(_ref) {
  var data = _ref.data;
  console.log('button type:', data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "text-center text-lg bg-gray-100 py-36",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "text-6xl font-bold mb-4",
      children: data.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-gray-400 mt-12 mb-4",
      children: data.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this), data.testimonials.length > 1 && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "flex flex-row gap-4 mt-10 justify-center",
      children: data.testimonials.map(function (testimonial) {
        return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
          className: "px-8 py-8 bg-white sm:px-12 sm:pt-12 sm:pb-4 flex flex-col items-center",
          children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_2__.default, {
            width: "150",
            height: "130",
            media: testimonial.logo
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-2 font-bold text-3xl text-[#27C1CB]",
            children: testimonial.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 22,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            children: testimonial.features
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 25,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mt-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_button__WEBPACK_IMPORTED_MODULE_4__.default, {
              button: data.button[0],
              appearance: (0,_utils_button__WEBPACK_IMPORTED_MODULE_3__.getButtonAppearance)(data.button[0].type, "light"),
              type: "button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 27,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 15
          }, _this)]
        }, testimonial.id, true, {
          fileName: _jsxFileName,
          lineNumber: 17,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 15,
      columnNumber: 9
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, _this);
};

_c = TestimonialsGroup;
/* harmony default export */ __webpack_exports__["default"] = (TestimonialsGroup);

var _c;

$RefreshReg$(_c, "TestimonialsGroup");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy90ZXN0aW1vbmlhbHMtZ3JvdXAuanMiXSwibmFtZXMiOlsiVGVzdGltb25pYWxzR3JvdXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZXN0aW1vbmlhbHMiLCJsZW5ndGgiLCJtYXAiLCJ0ZXN0aW1vbmlhbCIsImxvZ28iLCJ0ZXh0IiwiZmVhdHVyZXMiLCJidXR0b24iLCJnZXRCdXR0b25BcHBlYXJhbmNlIiwidHlwZSIsImlkIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN0Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkYsSUFBNUI7QUFFQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyx1Q0FBbkI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBLGdCQUF5Q0EsSUFBSSxDQUFDRztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFHLGVBQVMsRUFBQywwQkFBYjtBQUFBLGdCQUF5Q0gsSUFBSSxDQUFDSTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFJR0osSUFBSSxDQUFDSyxZQUFMLENBQWtCQyxNQUFsQixHQUEyQixDQUEzQixpQkFDQztBQUFLLGVBQVMsRUFBQywwQ0FBZjtBQUFBLGdCQUNHTixJQUFJLENBQUNLLFlBQUwsQ0FBa0JFLEdBQWxCLENBQXNCLFVBQUNDLFdBQUQ7QUFBQSw0QkFDckI7QUFFRSxtQkFBUyxFQUFDLHlFQUZaO0FBQUEsa0NBSUUsOERBQUMsb0RBQUQ7QUFBVyxpQkFBSyxFQUFDLEtBQWpCO0FBQXVCLGtCQUFNLEVBQUMsS0FBOUI7QUFBb0MsaUJBQUssRUFBRUEsV0FBVyxDQUFDQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBRyxxQkFBUyxFQUFDLHdDQUFiO0FBQUEsc0JBQ0dELFdBQVcsQ0FBQ0U7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBUUU7QUFBQSxzQkFBSUYsV0FBVyxDQUFDRztBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBU0U7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQSxtQ0FDQSw4REFBQyxxREFBRDtBQUNJLG9CQUFNLEVBQUVYLElBQUksQ0FBQ1ksTUFBTCxDQUFZLENBQVosQ0FEWjtBQUVJLHdCQUFVLEVBQUVDLGtFQUFtQixDQUFDYixJQUFJLENBQUNZLE1BQUwsQ0FBWSxDQUFaLEVBQWVFLElBQWhCLEVBQXNCLE9BQXRCLENBRm5DO0FBR0ksa0JBQUksRUFBQztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVRGO0FBQUEsV0FDT04sV0FBVyxDQUFDTyxFQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURxQjtBQUFBLE9BQXRCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBOEJELENBakNEOztLQUFNaEIsaUI7QUFtQ04sK0RBQWVBLGlCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLjM0Yjk0ZTUwMGQ5NzZlZDJmMjM4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi4vZWxlbWVudHMvaW1hZ2VcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkFwcGVhcmFuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYnV0dG9uXCJcbmltcG9ydCBCdXR0b24gZnJvbSBcIi4uL2VsZW1lbnRzL2J1dHRvblwiXG5cbmNvbnN0IFRlc3RpbW9uaWFsc0dyb3VwID0gKHsgZGF0YSB9KSA9PiB7XG4gIGNvbnNvbGUubG9nKCdidXR0b24gdHlwZTonLCBkYXRhKTtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGcgYmctZ3JheS0xMDAgcHktMzZcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWJvbGQgbWItNFwiPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG10LTEyIG1iLTRcIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgIHtkYXRhLnRlc3RpbW9uaWFscy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC00IG10LTEwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAge2RhdGEudGVzdGltb25pYWxzLm1hcCgodGVzdGltb25pYWwpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXt0ZXN0aW1vbmlhbC5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtOCBweS04IGJnLXdoaXRlIHNtOnB4LTEyIHNtOnB0LTEyIHNtOnBiLTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TmV4dEltYWdlIHdpZHRoPVwiMTUwXCIgaGVpZ2h0PVwiMTMwXCIgbWVkaWE9e3Rlc3RpbW9uaWFsLmxvZ299IC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgZm9udC1ib2xkIHRleHQtM3hsIHRleHQtWyMyN0MxQ0JdXCI+XG4gICAgICAgICAgICAgICAge3Rlc3RpbW9uaWFsLnRleHR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHA+e3Rlc3RpbW9uaWFsLmZlYXR1cmVzfTwvcD5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0xMlwiPlxuICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBidXR0b249e2RhdGEuYnV0dG9uWzBdfVxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT17Z2V0QnV0dG9uQXBwZWFyYW5jZShkYXRhLmJ1dHRvblswXS50eXBlLCBcImxpZ2h0XCIpfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHNHcm91cDtcbiJdLCJzb3VyY2VSb290IjoiIn0=