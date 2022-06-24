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
              lineNumber: 33,
              columnNumber: 15
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 32,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy90ZXN0aW1vbmlhbHMtZ3JvdXAuanMiXSwibmFtZXMiOlsiVGVzdGltb25pYWxzR3JvdXAiLCJkYXRhIiwiY29uc29sZSIsImxvZyIsInRpdGxlIiwiZGVzY3JpcHRpb24iLCJ0ZXN0aW1vbmlhbHMiLCJsZW5ndGgiLCJtYXAiLCJ0ZXN0aW1vbmlhbCIsImxvZ28iLCJ0ZXh0IiwiZmVhdHVyZSIsIm5hbWUiLCJpZCIsImJ1dHRvbiIsImdldEJ1dHRvbkFwcGVhcmFuY2UiLCJ0eXBlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLElBQU1BLGlCQUFpQixHQUFHLFNBQXBCQSxpQkFBb0IsT0FBYztBQUFBLE1BQVhDLElBQVcsUUFBWEEsSUFBVztBQUN0Q0MsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QkYsSUFBNUI7QUFFQSxzQkFDRTtBQUFTLGFBQVMsRUFBQyx1Q0FBbkI7QUFBQSw0QkFDRTtBQUFJLGVBQVMsRUFBQyx5QkFBZDtBQUFBLGdCQUF5Q0EsSUFBSSxDQUFDRztBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFFRTtBQUFHLGVBQVMsRUFBQywwQkFBYjtBQUFBLGdCQUF5Q0gsSUFBSSxDQUFDSTtBQUE5QztBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRkYsRUFJR0osSUFBSSxDQUFDSyxZQUFMLENBQWtCQyxNQUFsQixHQUEyQixDQUEzQixpQkFDQztBQUFLLGVBQVMsRUFBQywwQ0FBZjtBQUFBLGdCQUNHTixJQUFJLENBQUNLLFlBQUwsQ0FBa0JFLEdBQWxCLENBQXNCLFVBQUNDLFdBQUQ7QUFBQSw0QkFDckI7QUFFRSxtQkFBUyxFQUFDLHlFQUZaO0FBQUEsa0NBSUUsOERBQUMsb0RBQUQ7QUFBVyxpQkFBSyxFQUFDLEtBQWpCO0FBQXVCLGtCQUFNLEVBQUMsS0FBOUI7QUFBb0MsaUJBQUssRUFBRUEsV0FBVyxDQUFDQztBQUF2RDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpGLGVBS0U7QUFBRyxxQkFBUyxFQUFDLHdDQUFiO0FBQUEsc0JBQ0dELFdBQVcsQ0FBQ0U7QUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUxGLGVBUUU7QUFBQSxzQkFDQ1YsSUFBSSxDQUFDVyxPQUFMLENBQWFKLEdBQWIsQ0FBaUIsVUFBQ0ksT0FBRDtBQUFBLGtDQUNkO0FBQUEsMEJBQ0dBLE9BQU8sQ0FBQ0M7QUFEWCxpQkFBU0QsT0FBTyxDQUFDRSxFQUFqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURjO0FBQUEsYUFBakI7QUFERDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJGLGVBZUU7QUFBSyxxQkFBUyxFQUFDLE9BQWY7QUFBQSxtQ0FDQSw4REFBQyxxREFBRDtBQUNJLG9CQUFNLEVBQUViLElBQUksQ0FBQ2MsTUFBTCxDQUFZLENBQVosQ0FEWjtBQUVJLHdCQUFVLEVBQUVDLGtFQUFtQixDQUFDZixJQUFJLENBQUNjLE1BQUwsQ0FBWSxDQUFaLEVBQWVFLElBQWhCLEVBQXNCLE9BQXRCLENBRm5DO0FBR0ksa0JBQUksRUFBQztBQUhUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWZGO0FBQUEsV0FDT1IsV0FBVyxDQUFDSyxFQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURxQjtBQUFBLE9BQXRCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBb0NELENBdkNEOztLQUFNZCxpQjtBQXlDTiwrREFBZUEsaUJBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uZjllZDdjNjcwNjdkMjc0ZTc2ODQuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBjbGFzc05hbWVzIGZyb20gXCJjbGFzc25hbWVzXCI7XG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi9lbGVtZW50cy9pbWFnZVwiO1xuaW1wb3J0IHsgZ2V0QnV0dG9uQXBwZWFyYW5jZSB9IGZyb20gXCIuLi8uLi91dGlscy9idXR0b25cIlxuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi4vZWxlbWVudHMvYnV0dG9uXCJcblxuY29uc3QgVGVzdGltb25pYWxzR3JvdXAgPSAoeyBkYXRhIH0pID0+IHtcbiAgY29uc29sZS5sb2coJ2J1dHRvbiB0eXBlOicsIGRhdGEpO1xuXG4gIHJldHVybiAoXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwidGV4dC1jZW50ZXIgdGV4dC1sZyBiZy1ncmF5LTEwMCBweS0zNlwiPlxuICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtNnhsIGZvbnQtYm9sZCBtYi00XCI+e2RhdGEudGl0bGV9PC9oMT5cbiAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtZ3JheS00MDAgbXQtMTIgbWItNFwiPntkYXRhLmRlc2NyaXB0aW9ufTwvcD5cblxuICAgICAge2RhdGEudGVzdGltb25pYWxzLmxlbmd0aCA+IDEgJiYgKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgZ2FwLTQgbXQtMTAganVzdGlmeS1jZW50ZXJcIj5cbiAgICAgICAgICB7ZGF0YS50ZXN0aW1vbmlhbHMubWFwKCh0ZXN0aW1vbmlhbCkgPT4gKFxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBrZXk9e3Rlc3RpbW9uaWFsLmlkfVxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJweC04IHB5LTggYmctd2hpdGUgc206cHgtMTIgc206cHQtMTIgc206cGItNCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiXG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIDxOZXh0SW1hZ2Ugd2lkdGg9XCIxNTBcIiBoZWlnaHQ9XCIxMzBcIiBtZWRpYT17dGVzdGltb25pYWwubG9nb30gLz5cbiAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwibXQtMiBmb250LWJvbGQgdGV4dC0zeGwgdGV4dC1bIzI3QzFDQl1cIj5cbiAgICAgICAgICAgICAgICB7dGVzdGltb25pYWwudGV4dH1cbiAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICA8dWw+XG4gICAgICAgICAgICAgIHtkYXRhLmZlYXR1cmUubWFwKChmZWF0dXJlKSA9PiAoXG4gICAgICAgICAgICAgICAgICA8bGkga2V5PXtmZWF0dXJlLmlkfT5cbiAgICAgICAgICAgICAgICAgICAge2ZlYXR1cmUubmFtZX1cbiAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICkpfVxuICAgICAgICAgICAgICA8L3VsPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm10LTEyXCI+XG4gICAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgICAgIGJ1dHRvbj17ZGF0YS5idXR0b25bMF19XG4gICAgICAgICAgICAgICAgICBhcHBlYXJhbmNlPXtnZXRCdXR0b25BcHBlYXJhbmNlKGRhdGEuYnV0dG9uWzBdLnR5cGUsIFwibGlnaHRcIil9XG4gICAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvc2VjdGlvbj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFRlc3RpbW9uaWFsc0dyb3VwO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==