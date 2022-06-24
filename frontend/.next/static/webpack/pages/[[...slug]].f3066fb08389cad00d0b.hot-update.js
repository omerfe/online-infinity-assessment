self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/elements/button.js":
/*!***************************************!*\
  !*** ./components/elements/button.js ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var utils_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! utils/types */ "./utils/types.js");
/* harmony import */ var _loader__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./loader */ "./components/elements/loader.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\PC\\Documents\\Repositories\\online-infinity-assessment\\frontend\\components\\elements\\button.js",
    _this = undefined;






var Button = function Button(_ref) {
  var button = _ref.button,
      appearance = _ref.appearance,
      _ref$compact = _ref.compact,
      compact = _ref$compact === void 0 ? false : _ref$compact,
      handleClick = _ref.handleClick,
      _ref$loading = _ref.loading,
      loading = _ref$loading === void 0 ? false : _ref$loading,
      type = _ref.type;
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
    link: button,
    onClick: handleClick,
    type: type,
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: classnames__WEBPACK_IMPORTED_MODULE_1___default()( // Common classes
      "flex w-full justify-center lg:w-auto text-center uppercase tracking-wide font-semibold text-base md:text-sm border-2 rounded-md", // Full-size button
      {
        "px-8 py-4": compact === false
      }, // Compact button
      {
        "px-6 py-2": compact === true
      }, // Specific to when the button is fully dark
      {
        "bg-[#2789cb] text-white border-[#2789cb] text-base font-bold": appearance === "dark"
      }, // Specific to when the button is dark outlines
      {
        "text-[#2789cb] border-[#2789cb]": appearance === "dark-outline"
      }, // Specific to when the button is fully white
      {
        "bg-white text-primary-600 border-white": appearance === "white"
      }, // Specific to when the button is white outlines
      {
        "text-white border-white": appearance === "white-outline"
      }),
      children: [loading && /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_loader__WEBPACK_IMPORTED_MODULE_4__.default, {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 48,
        columnNumber: 21
      }, _this), button.text]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 16,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 15,
    columnNumber: 5
  }, _this);
};

_c = Button;
Button.propTypes = {
  button: utils_types__WEBPACK_IMPORTED_MODULE_3__.buttonLinkPropTypes,
  appearance: prop_types__WEBPACK_IMPORTED_MODULE_2___default().oneOf(["dark", "white-outline", "white", "dark-outline"]),
  compact: (prop_types__WEBPACK_IMPORTED_MODULE_2___default().bool)
};
/* harmony default export */ __webpack_exports__["default"] = (Button);

var _c;

$RefreshReg$(_c, "Button");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50cy9idXR0b24uanMiXSwibmFtZXMiOlsiQnV0dG9uIiwiYnV0dG9uIiwiYXBwZWFyYW5jZSIsImNvbXBhY3QiLCJoYW5kbGVDbGljayIsImxvYWRpbmciLCJ0eXBlIiwiY2xhc3NOYW1lcyIsInRleHQiLCJwcm9wVHlwZXMiLCJidXR0b25MaW5rUHJvcFR5cGVzIiwiUHJvcFR5cGVzIiwiYm9vbCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsSUFBTUEsTUFBTSxHQUFHLFNBQVRBLE1BQVMsT0FPVDtBQUFBLE1BTkpDLE1BTUksUUFOSkEsTUFNSTtBQUFBLE1BTEpDLFVBS0ksUUFMSkEsVUFLSTtBQUFBLDBCQUpKQyxPQUlJO0FBQUEsTUFKSkEsT0FJSSw2QkFKTSxLQUlOO0FBQUEsTUFISkMsV0FHSSxRQUhKQSxXQUdJO0FBQUEsMEJBRkpDLE9BRUk7QUFBQSxNQUZKQSxPQUVJLDZCQUZNLEtBRU47QUFBQSxNQURKQyxJQUNJLFFBREpBLElBQ0k7QUFDSixzQkFDRTtBQUFRLFFBQUksRUFBRUwsTUFBZDtBQUFzQixXQUFPLEVBQUVHLFdBQS9CO0FBQTRDLFFBQUksRUFBRUUsSUFBbEQ7QUFBQSwyQkFDRTtBQUNFLGVBQVMsRUFBRUMsaURBQVUsRUFDbkI7QUFDQSx1SUFGbUIsRUFHbkI7QUFDQTtBQUNFLHFCQUFhSixPQUFPLEtBQUs7QUFEM0IsT0FKbUIsRUFPbkI7QUFDQTtBQUNFLHFCQUFhQSxPQUFPLEtBQUs7QUFEM0IsT0FSbUIsRUFXbkI7QUFDQTtBQUNFLHdFQUNFRCxVQUFVLEtBQUs7QUFGbkIsT0FabUIsRUFnQm5CO0FBQ0E7QUFDRSwyQ0FDRUEsVUFBVSxLQUFLO0FBRm5CLE9BakJtQixFQXFCbkI7QUFDQTtBQUNFLGtEQUEwQ0EsVUFBVSxLQUFLO0FBRDNELE9BdEJtQixFQXlCbkI7QUFDQTtBQUNFLG1DQUEyQkEsVUFBVSxLQUFLO0FBRDVDLE9BMUJtQixDQUR2QjtBQUFBLGlCQWdDR0csT0FBTyxpQkFBSSw4REFBQyw0Q0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaENkLEVBaUNHSixNQUFNLENBQUNPLElBakNWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVDRCxDQS9DRDs7S0FBTVIsTTtBQWlETkEsTUFBTSxDQUFDUyxTQUFQLEdBQW1CO0FBQ2pCUixRQUFNLEVBQUVTLDREQURTO0FBRWpCUixZQUFVLEVBQUVTLHVEQUFBLENBQWdCLENBQzFCLE1BRDBCLEVBRTFCLGVBRjBCLEVBRzFCLE9BSDBCLEVBSTFCLGNBSjBCLENBQWhCLENBRks7QUFRakJSLFNBQU8sRUFBRVEsd0RBQWNDO0FBUk4sQ0FBbkI7QUFXQSwrREFBZVosTUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS5mMzA2NmZiMDgzODljYWQwMGQwYi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNsYXNzTmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIlxuaW1wb3J0IFByb3BUeXBlcyBmcm9tIFwicHJvcC10eXBlc1wiXG5pbXBvcnQgeyBidXR0b25MaW5rUHJvcFR5cGVzIH0gZnJvbSBcInV0aWxzL3R5cGVzXCJcbmltcG9ydCBMb2FkZXIgZnJvbSBcIi4vbG9hZGVyXCJcblxuY29uc3QgQnV0dG9uID0gKHtcbiAgYnV0dG9uLFxuICBhcHBlYXJhbmNlLFxuICBjb21wYWN0ID0gZmFsc2UsXG4gIGhhbmRsZUNsaWNrLFxuICBsb2FkaW5nID0gZmFsc2UsXG4gIHR5cGUsXG59KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGJ1dHRvbiBsaW5rPXtidXR0b259IG9uQ2xpY2s9e2hhbmRsZUNsaWNrfSB0eXBlPXt0eXBlfT5cbiAgICAgIDxkaXZcbiAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzKFxuICAgICAgICAgIC8vIENvbW1vbiBjbGFzc2VzXG4gICAgICAgICAgXCJmbGV4IHctZnVsbCBqdXN0aWZ5LWNlbnRlciBsZzp3LWF1dG8gdGV4dC1jZW50ZXIgdXBwZXJjYXNlIHRyYWNraW5nLXdpZGUgZm9udC1zZW1pYm9sZCB0ZXh0LWJhc2UgbWQ6dGV4dC1zbSBib3JkZXItMiByb3VuZGVkLW1kXCIsXG4gICAgICAgICAgLy8gRnVsbC1zaXplIGJ1dHRvblxuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwicHgtOCBweS00XCI6IGNvbXBhY3QgPT09IGZhbHNlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gQ29tcGFjdCBidXR0b25cbiAgICAgICAgICB7XG4gICAgICAgICAgICBcInB4LTYgcHktMlwiOiBjb21wYWN0ID09PSB0cnVlLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgLy8gU3BlY2lmaWMgdG8gd2hlbiB0aGUgYnV0dG9uIGlzIGZ1bGx5IGRhcmtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImJnLVsjMjc4OWNiXSB0ZXh0LXdoaXRlIGJvcmRlci1bIzI3ODljYl0gdGV4dC1iYXNlIGZvbnQtYm9sZFwiOlxuICAgICAgICAgICAgICBhcHBlYXJhbmNlID09PSBcImRhcmtcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIFNwZWNpZmljIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyBkYXJrIG91dGxpbmVzXG4gICAgICAgICAge1xuICAgICAgICAgICAgXCJ0ZXh0LVsjMjc4OWNiXSBib3JkZXItWyMyNzg5Y2JdXCI6XG4gICAgICAgICAgICAgIGFwcGVhcmFuY2UgPT09IFwiZGFyay1vdXRsaW5lXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICAvLyBTcGVjaWZpYyB0byB3aGVuIHRoZSBidXR0b24gaXMgZnVsbHkgd2hpdGVcbiAgICAgICAgICB7XG4gICAgICAgICAgICBcImJnLXdoaXRlIHRleHQtcHJpbWFyeS02MDAgYm9yZGVyLXdoaXRlXCI6IGFwcGVhcmFuY2UgPT09IFwid2hpdGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIC8vIFNwZWNpZmljIHRvIHdoZW4gdGhlIGJ1dHRvbiBpcyB3aGl0ZSBvdXRsaW5lc1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIFwidGV4dC13aGl0ZSBib3JkZXItd2hpdGVcIjogYXBwZWFyYW5jZSA9PT0gXCJ3aGl0ZS1vdXRsaW5lXCIsXG4gICAgICAgICAgfVxuICAgICAgICApfVxuICAgICAgPlxuICAgICAgICB7bG9hZGluZyAmJiA8TG9hZGVyIC8+fVxuICAgICAgICB7YnV0dG9uLnRleHR9XG4gICAgICA8L2Rpdj5cbiAgICA8L2J1dHRvbj5cbiAgKVxufVxuXG5CdXR0b24ucHJvcFR5cGVzID0ge1xuICBidXR0b246IGJ1dHRvbkxpbmtQcm9wVHlwZXMsXG4gIGFwcGVhcmFuY2U6IFByb3BUeXBlcy5vbmVPZihbXG4gICAgXCJkYXJrXCIsXG4gICAgXCJ3aGl0ZS1vdXRsaW5lXCIsXG4gICAgXCJ3aGl0ZVwiLFxuICAgIFwiZGFyay1vdXRsaW5lXCIsXG4gIF0pLFxuICBjb21wYWN0OiBQcm9wVHlwZXMuYm9vbCxcbn1cblxuZXhwb3J0IGRlZmF1bHQgQnV0dG9uXG4iXSwic291cmNlUm9vdCI6IiJ9