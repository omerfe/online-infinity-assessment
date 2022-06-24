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
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "text-center text-lg bg-gray-100 py-36",
    children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
      className: "text-6xl font-bold mb-4",
      children: data.title
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 7
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
      className: "text-gray-400 mt-12 mb-4",
      children: data.description
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 11,
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
            lineNumber: 20,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
            className: "mt-2 font-bold text-3xl text-[#27C1CB]",
            children: testimonial.text
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
            className: "mt-10",
            children: data.feature.map(function (feature) {
              return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex flex-row items-center gap-3 mb-3",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "rounded-full px-2 bg-[#42b0c4] justify-center items-center",
                  children: "\u2713"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 30,
                  columnNumber: 21
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
                  children: feature.name
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 21
                }, _this)]
              }, feature.id, true, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 19
              }, _this);
            })
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 24,
            columnNumber: 15
          }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "mt-12",
            children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_button__WEBPACK_IMPORTED_MODULE_4__.default, {
              button: data.button[0],
              appearance: (0,_utils_button__WEBPACK_IMPORTED_MODULE_3__.getButtonAppearance)(data.button[0].type, "light"),
              type: "button"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 38,
              columnNumber: 17
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 37,
            columnNumber: 15
          }, _this)]
        }, testimonial.id, true, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 13
        }, _this);
      })
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 9
    }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "mt-20",
      children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_button__WEBPACK_IMPORTED_MODULE_4__.default, {
        button: data.button[1],
        appearance: (0,_utils_button__WEBPACK_IMPORTED_MODULE_3__.getButtonAppearance)(data.button[1].type, "light"),
        type: "button"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 49,
        columnNumber: 9
      }, _this)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, _this)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy90ZXN0aW1vbmlhbHMtZ3JvdXAuanMiXSwibmFtZXMiOlsiVGVzdGltb25pYWxzR3JvdXAiLCJkYXRhIiwidGl0bGUiLCJkZXNjcmlwdGlvbiIsInRlc3RpbW9uaWFscyIsImxlbmd0aCIsIm1hcCIsInRlc3RpbW9uaWFsIiwibG9nbyIsInRleHQiLCJmZWF0dXJlIiwibmFtZSIsImlkIiwiYnV0dG9uIiwiZ2V0QnV0dG9uQXBwZWFyYW5jZSIsInR5cGUiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsaUJBQWlCLEdBQUcsU0FBcEJBLGlCQUFvQixPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBRXRDLHNCQUNFO0FBQVMsYUFBUyxFQUFDLHVDQUFuQjtBQUFBLDRCQUNFO0FBQUksZUFBUyxFQUFDLHlCQUFkO0FBQUEsZ0JBQXlDQSxJQUFJLENBQUNDO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUVFO0FBQUcsZUFBUyxFQUFDLDBCQUFiO0FBQUEsZ0JBQXlDRCxJQUFJLENBQUNFO0FBQTlDO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFGRixFQUlHRixJQUFJLENBQUNHLFlBQUwsQ0FBa0JDLE1BQWxCLEdBQTJCLENBQTNCLGlCQUNDO0FBQUssZUFBUyxFQUFDLDBDQUFmO0FBQUEsZ0JBQ0dKLElBQUksQ0FBQ0csWUFBTCxDQUFrQkUsR0FBbEIsQ0FBc0IsVUFBQ0MsV0FBRDtBQUFBLDRCQUNyQjtBQUVFLG1CQUFTLEVBQUMseUVBRlo7QUFBQSxrQ0FJRSw4REFBQyxvREFBRDtBQUFXLGlCQUFLLEVBQUMsS0FBakI7QUFBdUIsa0JBQU0sRUFBQyxLQUE5QjtBQUFvQyxpQkFBSyxFQUFFQSxXQUFXLENBQUNDO0FBQXZEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBSkYsZUFLRTtBQUFHLHFCQUFTLEVBQUMsd0NBQWI7QUFBQSxzQkFDR0QsV0FBVyxDQUFDRTtBQURmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEYsZUFRRTtBQUFJLHFCQUFTLEVBQUMsT0FBZDtBQUFBLHNCQUNHUixJQUFJLENBQUNTLE9BQUwsQ0FBYUosR0FBYixDQUFpQixVQUFDSSxPQUFEO0FBQUEsa0NBQ2hCO0FBRUUseUJBQVMsRUFBQyx1Q0FGWjtBQUFBLHdDQUlFO0FBQUssMkJBQVMsRUFBQyw0REFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQU9FO0FBQUEsNEJBQUtBLE9BQU8sQ0FBQ0M7QUFBYjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBGO0FBQUEsaUJBQ09ELE9BQU8sQ0FBQ0UsRUFEZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURnQjtBQUFBLGFBQWpCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFSRixlQXFCRTtBQUFLLHFCQUFTLEVBQUMsT0FBZjtBQUFBLG1DQUNFLDhEQUFDLHFEQUFEO0FBQ0Usb0JBQU0sRUFBRVgsSUFBSSxDQUFDWSxNQUFMLENBQVksQ0FBWixDQURWO0FBRUUsd0JBQVUsRUFBRUMsa0VBQW1CLENBQUNiLElBQUksQ0FBQ1ksTUFBTCxDQUFZLENBQVosRUFBZUUsSUFBaEIsRUFBc0IsT0FBdEIsQ0FGakM7QUFHRSxrQkFBSSxFQUFDO0FBSFA7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBckJGO0FBQUEsV0FDT1IsV0FBVyxDQUFDSyxFQURuQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURxQjtBQUFBLE9BQXRCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQUxKLGVBdUNFO0FBQUssZUFBUyxFQUFDLE9BQWY7QUFBQSw2QkFDRSw4REFBQyxxREFBRDtBQUNFLGNBQU0sRUFBRVgsSUFBSSxDQUFDWSxNQUFMLENBQVksQ0FBWixDQURWO0FBRUUsa0JBQVUsRUFBRUMsa0VBQW1CLENBQUNiLElBQUksQ0FBQ1ksTUFBTCxDQUFZLENBQVosRUFBZUUsSUFBaEIsRUFBc0IsT0FBdEIsQ0FGakM7QUFHRSxZQUFJLEVBQUM7QUFIUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxhQXZDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQWlERCxDQW5ERDs7S0FBTWYsaUI7QUFxRE4sK0RBQWVBLGlCQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL1tbLi4uc2x1Z11dLmFlMWU5MGNiZjZiYTYzNTFmNjA4LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xhc3NOYW1lcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi4vZWxlbWVudHMvaW1hZ2VcIjtcbmltcG9ydCB7IGdldEJ1dHRvbkFwcGVhcmFuY2UgfSBmcm9tIFwiLi4vLi4vdXRpbHMvYnV0dG9uXCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuLi9lbGVtZW50cy9idXR0b25cIjtcblxuY29uc3QgVGVzdGltb25pYWxzR3JvdXAgPSAoeyBkYXRhIH0pID0+IHtcblxuICByZXR1cm4gKFxuICAgIDxzZWN0aW9uIGNsYXNzTmFtZT1cInRleHQtY2VudGVyIHRleHQtbGcgYmctZ3JheS0xMDAgcHktMzZcIj5cbiAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LTZ4bCBmb250LWJvbGQgbWItNFwiPntkYXRhLnRpdGxlfTwvaDE+XG4gICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LWdyYXktNDAwIG10LTEyIG1iLTRcIj57ZGF0YS5kZXNjcmlwdGlvbn08L3A+XG5cbiAgICAgIHtkYXRhLnRlc3RpbW9uaWFscy5sZW5ndGggPiAxICYmIChcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGdhcC00IG10LTEwIGp1c3RpZnktY2VudGVyXCI+XG4gICAgICAgICAge2RhdGEudGVzdGltb25pYWxzLm1hcCgodGVzdGltb25pYWwpID0+IChcbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAga2V5PXt0ZXN0aW1vbmlhbC5pZH1cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicHgtOCBweS04IGJnLXdoaXRlIHNtOnB4LTEyIHNtOnB0LTEyIHNtOnBiLTQgZmxleCBmbGV4LWNvbCBpdGVtcy1jZW50ZXJcIlxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICA8TmV4dEltYWdlIHdpZHRoPVwiMTUwXCIgaGVpZ2h0PVwiMTMwXCIgbWVkaWE9e3Rlc3RpbW9uaWFsLmxvZ299IC8+XG4gICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cIm10LTIgZm9udC1ib2xkIHRleHQtM3hsIHRleHQtWyMyN0MxQ0JdXCI+XG4gICAgICAgICAgICAgICAge3Rlc3RpbW9uaWFsLnRleHR9XG4gICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTEwXCI+XG4gICAgICAgICAgICAgICAge2RhdGEuZmVhdHVyZS5tYXAoKGZlYXR1cmUpID0+IChcbiAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAga2V5PXtmZWF0dXJlLmlkfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtMyBtYi0zXCJcbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3VuZGVkLWZ1bGwgcHgtMiBiZy1bIzQyYjBjNF0ganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgICAgICAgICAgICAgICAg4pyTXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICAgICA8bGk+e2ZlYXR1cmUubmFtZX08L2xpPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKSl9XG4gICAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibXQtMTJcIj5cbiAgICAgICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgICAgICBidXR0b249e2RhdGEuYnV0dG9uWzBdfVxuICAgICAgICAgICAgICAgICAgYXBwZWFyYW5jZT17Z2V0QnV0dG9uQXBwZWFyYW5jZShkYXRhLmJ1dHRvblswXS50eXBlLCBcImxpZ2h0XCIpfVxuICAgICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApKX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJtdC0yMFwiPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgYnV0dG9uPXtkYXRhLmJ1dHRvblsxXX1cbiAgICAgICAgICBhcHBlYXJhbmNlPXtnZXRCdXR0b25BcHBlYXJhbmNlKGRhdGEuYnV0dG9uWzFdLnR5cGUsIFwibGlnaHRcIil9XG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgIC8+XG4gICAgICA8L2Rpdj5cbiAgICA8L3NlY3Rpb24+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUZXN0aW1vbmlhbHNHcm91cDtcbiJdLCJzb3VyY2VSb290IjoiIn0=