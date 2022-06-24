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
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            children: data.feature.map(function (feature) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                children: feature.name
              }, feature.id, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 19
              }, _this);
            })
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
              lineNumber: 34,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 33,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy90ZXN0aW1vbmlhbHMtZ3JvdXAuanMiXSwibmFtZXMiOlsiVGVzdGltb25pYWxzR3JvdXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZXN0aW1vbmlhbHMiLCJsZW5ndGgiLCJtYXAiLCJ0ZXN0aW1vbmlhbCIsImxvZ28iLCJ0ZXh0IiwiZmVhdHVyZSIsIm5hbWUiLCJpZCIsImJ1dHRvbiIsImdldEJ1dHRvbkFwcGVhcmFuY2UiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN0Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkYsSUFBNUI7QUFFQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyx1Q0FBbkI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBLGdCQUF5Q0EsSUFBSSxDQUFDRztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFHLGVBQVMsRUFBQywwQkFBYjtBQUFBLGdCQUF5Q0gsSUFBSSxDQUFDSTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFJR0osSUFBSSxDQUFDSyxZQUFMLENBQWtCQyxNQUFsQixHQUEyQixDQUEzQixpQkFDQztBQUFLLGVBQVMsRUFBQywwQ0FBZjtBQUFBLGdCQUNHTixJQUFJLENBQUNLLFlBQUwsQ0FBa0JFLEdBQWxCLENBQXNCLFVBQUNDLFdBQUQ7QUFBQSw0QkFDckI7QUFFRSxtQkFBUyxFQUFDLHlFQUZaO0FBQUEsa0NBSUUsOERBQUMsb0RBQUQ7QUFBVyxpQkFBSyxFQUFDLEtBQWpCO0FBQXVCLGtCQUFNLEVBQUMsS0FBOUI7QUFBb0MsaUJBQUssRUFBRUEsV0FBVyxDQUFDQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBRyxxQkFBUyxFQUFDLHdDQUFiO0FBQUEsc0JBQ0dELFdBQVcsQ0FBQ0U7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBUUU7QUFBQSxzQkFDQ1YsSUFBSSxDQUFDVyxPQUFMLENBQWFKLEdBQWIsQ0FBaUIsVUFBQ0ksT0FBRDtBQUFBLGtDQUNkO0FBQUEsMEJBRUdBLE9BQU8sQ0FBQ0M7QUFGWCxpQkFBU0QsT0FBTyxDQUFDRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURjO0FBQUEsYUFBakI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBZ0JFO0FBQUsscUJBQVMsRUFBQyxPQUFmO0FBQUEsbUNBQ0EsOERBQUMscURBQUQ7QUFDSSxvQkFBTSxFQUFFYixJQUFJLENBQUNjLE1BQUwsQ0FBWSxDQUFaLENBRFo7QUFFSSx3QkFBVSxFQUFFQyxrRUFBbUIsQ0FBQ2YsSUFBSSxDQUFDYyxNQUFMLENBQVksQ0FBWixFQUFlRSxJQUFoQixFQUFzQixPQUF0QixDQUZuQztBQUdJLGtCQUFJLEVBQUM7QUFIVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFoQkY7QUFBQSxXQUNPUixXQUFXLENBQUNLLEVBRG5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBRHFCO0FBQUEsT0FBdEI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUFxQ0QsQ0F4Q0Q7O0tBQU1kLGlCO0FBMENOLCtEQUFlQSxpQkFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS42ZmJiMzlkMDdjN2Y4NjdhNGRiMS5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBOZXh0SW1hZ2UgZnJvbSBcIi4uL2VsZW1lbnRzL2ltYWdlXCI7XG5pbXBvcnQgeyBnZXRCdXR0b25BcHBlYXJhbmNlIH0gZnJvbSBcIi4uLy4uL3V0aWxzL2J1dHRvblwiXG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9lbGVtZW50cy9idXR0b25cIlxuXG5jb25zdCBUZXN0aW1vbmlhbHNHcm91cCA9ICh7IGRhdGEgfSkgPT4ge1xuICBjb25zb2xlLmxvZygnYnV0dG9uIHR5cGU6JywgZGF0YSk7XG5cbiAgcmV0dXJuIChcbiAgICA8c2VjdGlvbiBjbGFzc05hbWU9XCJ0ZXh0LWNlbnRlciB0ZXh0LWxnIGJnLWdyYXktMTAwIHB5LTM2XCI+XG4gICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC02eGwgZm9udC1ib2xkIG1iLTRcIj57ZGF0YS50aXRsZX08L2gxPlxuICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1ncmF5LTQwMCBtdC0xMiBtYi00XCI+e2RhdGEuZGVzY3JpcHRpb259PC9wPlxuXG4gICAgICB7ZGF0YS50ZXN0aW1vbmlhbHMubGVuZ3RoID4gMSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBnYXAtNCBtdC0xMCBqdXN0aWZ5LWNlbnRlclwiPlxuICAgICAgICAgIHtkYXRhLnRlc3RpbW9uaWFscy5tYXAoKHRlc3RpbW9uaWFsKSA9PiAoXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGtleT17dGVzdGltb25pYWwuaWR9XG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInB4LTggcHktOCBiZy13aGl0ZSBzbTpweC0xMiBzbTpwdC0xMiBzbTpwYi00IGZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCJcbiAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgPE5leHRJbWFnZSB3aWR0aD1cIjE1MFwiIGhlaWdodD1cIjEzMFwiIG1lZGlhPXt0ZXN0aW1vbmlhbC5sb2dvfSAvPlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJtdC0yIGZvbnQtYm9sZCB0ZXh0LTN4bCB0ZXh0LVsjMjdDMUNCXVwiPlxuICAgICAgICAgICAgICAgIHt0ZXN0aW1vbmlhbC50ZXh0fVxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgICAge2RhdGEuZmVhdHVyZS5tYXAoKGZlYXR1cmUpID0+IChcbiAgICAgICAgICAgICAgICAgIDxsaSBrZXk9e2ZlYXR1cmUuaWR9PlxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmUubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGJ1dHRvbj17ZGF0YS5idXR0b25bMF19XG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPXtnZXRCdXR0b25BcHBlYXJhbmNlKGRhdGEuYnV0dG9uWzBdLnR5cGUsIFwibGlnaHRcIil9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc0dyb3VwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==