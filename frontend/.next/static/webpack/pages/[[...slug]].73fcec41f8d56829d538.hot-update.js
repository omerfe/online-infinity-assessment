self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/faq.js":
/*!************************************!*\
  !*** ./components/sections/faq.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\PC\\Documents\\Repositories\\online-infinity-assessment\\frontend\\components\\sections\\faq.js",
    _this = undefined;



var FaQs = function FaQs(_ref) {
  var data = _ref.data;
  console.log('faqs Data:', data);

  var handleClick = function handleClick(info) {
    info = function info(current) {
      return !current;
    };

    console.log('info', info);
  };

  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("section", {
    className: "mt-20 flex bg-gray-100",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "py-32 px-32",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-black text-8xl font-bold",
        children: data.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 13,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-[#5dc4ea] font-bold text-8xl",
        children: "ALGEMEEN"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "grid grid-cols-2 gap-14 mt-20",
        children: data.cards.map(function (card) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-col w-[750px] bg-white border-2 border-gray-100 px-10 py-10",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "flex flex-row items-start justify-between",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "text-2xl max-w-xl font-bold",
                children: card.question
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 19,
                columnNumber: 19
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("button", {
                onClick: function onClick() {
                  return handleClick(card.isToggled);
                },
                type: "button",
                className: "text-4xl font-bold",
                children: card.isToggled ? "x" : "+"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 20,
                columnNumber: 19
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 18,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: card.isToggled ? "mt-10" : "hidden",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {
                children: card.answer
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 25,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 24,
              columnNumber: 17
            }, _this)]
          }, card.id, true, {
            fileName: _jsxFileName,
            lineNumber: 17,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 9
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, _this);
};

_c = FaQs;
/* harmony default export */ __webpack_exports__["default"] = (FaQs);

var _c;

$RefreshReg$(_c, "FaQs");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9mYXEuanMiXSwibmFtZXMiOlsiRmFRcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlQ2xpY2siLCJpbmZvIiwiY3VycmVudCIsInRpdGxlIiwiY2FyZHMiLCJtYXAiLCJjYXJkIiwicXVlc3Rpb24iLCJpc1RvZ2dsZWQiLCJhbnN3ZXIiLCJpZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTs7QUFFQSxJQUFNQSxJQUFJLEdBQUcsU0FBUEEsSUFBTyxPQUFjO0FBQUEsTUFBWEMsSUFBVyxRQUFYQSxJQUFXO0FBQ3ZCQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxZQUFaLEVBQTBCRixJQUExQjs7QUFDQSxNQUFNRyxXQUFXLEdBQUcsU0FBZEEsV0FBYyxDQUFDQyxJQUFELEVBQVU7QUFDMUJBLFFBQUksR0FBRyxjQUFDQyxPQUFEO0FBQUEsYUFBYSxDQUFDQSxPQUFkO0FBQUEsS0FBUDs7QUFDQUosV0FBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQkUsSUFBcEI7QUFDSCxHQUhEOztBQUtGLHNCQUNFO0FBQVMsYUFBUyxFQUFDLHdCQUFuQjtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLGFBQWY7QUFBQSw4QkFDRTtBQUFJLGlCQUFTLEVBQUMsK0JBQWQ7QUFBQSxrQkFBK0NKLElBQUksQ0FBQ007QUFBcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUU7QUFBSSxpQkFBUyxFQUFDLG1DQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRTtBQUFLLGlCQUFTLEVBQUMsK0JBQWY7QUFBQSxrQkFDS04sSUFBSSxDQUFDTyxLQUFMLENBQVdDLEdBQVgsQ0FBZSxVQUFDQyxJQUFEO0FBQUEsOEJBQ2Q7QUFBbUIscUJBQVMsRUFBQyx1RUFBN0I7QUFBQSxvQ0FDRTtBQUFLLHVCQUFTLEVBQUMsMkNBQWY7QUFBQSxzQ0FDRTtBQUFJLHlCQUFTLEVBQUMsNkJBQWQ7QUFBQSwwQkFBNkNBLElBQUksQ0FBQ0M7QUFBbEQ7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQUVFO0FBQVEsdUJBQU8sRUFBRTtBQUFBLHlCQUFNUCxXQUFXLENBQUNNLElBQUksQ0FBQ0UsU0FBTixDQUFqQjtBQUFBLGlCQUFqQjtBQUFvRCxvQkFBSSxFQUFDLFFBQXpEO0FBQWtFLHlCQUFTLEVBQUMsb0JBQTVFO0FBQUEsMEJBQ0dGLElBQUksQ0FBQ0UsU0FBTCxHQUFpQixHQUFqQixHQUF1QjtBQUQxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQU9FO0FBQUssdUJBQVMsRUFBRUYsSUFBSSxDQUFDRSxTQUFMLEdBQWlCLE9BQWpCLEdBQTJCLFFBQTNDO0FBQUEscUNBQ0U7QUFBQSwwQkFBSUYsSUFBSSxDQUFDRztBQUFUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUEsYUFBVUgsSUFBSSxDQUFDSSxFQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFmO0FBREw7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQXVCRCxDQTlCRDs7S0FBTWQsSTtBQWdDTiwrREFBZUEsSUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS43M2ZjZWM0MWY4ZDU2ODI5ZDUzOC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5cclxuY29uc3QgRmFRcyA9ICh7IGRhdGEgfSkgPT4ge1xyXG4gICAgY29uc29sZS5sb2coJ2ZhcXMgRGF0YTonLCBkYXRhKTtcclxuICAgIGNvbnN0IGhhbmRsZUNsaWNrID0gKGluZm8pID0+IHtcclxuICAgICAgICBpbmZvID0gKGN1cnJlbnQpID0+ICFjdXJyZW50O1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdpbmZvJywgaW5mbyk7IFxyXG4gICAgfVxyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwibXQtMjAgZmxleCBiZy1ncmF5LTEwMFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInB5LTMyIHB4LTMyXCI+XHJcbiAgICAgICAgPGgxIGNsYXNzTmFtZT1cInRleHQtYmxhY2sgdGV4dC04eGwgZm9udC1ib2xkXCI+e2RhdGEudGl0bGV9PC9oMT5cclxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bIzVkYzRlYV0gZm9udC1ib2xkIHRleHQtOHhsXCI+QUxHRU1FRU48L2gxPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMiBnYXAtMTQgbXQtMjBcIj5cclxuICAgICAgICAgICAge2RhdGEuY2FyZHMubWFwKChjYXJkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2NhcmQuaWR9IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgdy1bNzUwcHhdIGJnLXdoaXRlIGJvcmRlci0yIGJvcmRlci1ncmF5LTEwMCBweC0xMCBweS0xMFwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLXN0YXJ0IGp1c3RpZnktYmV0d2VlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC0yeGwgbWF4LXcteGwgZm9udC1ib2xkXCI+e2NhcmQucXVlc3Rpb259PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiBoYW5kbGVDbGljayhjYXJkLmlzVG9nZ2xlZCl9IHR5cGU9XCJidXR0b25cIiBjbGFzc05hbWU9XCJ0ZXh0LTR4bCBmb250LWJvbGRcIj5cclxuICAgICAgICAgICAgICAgICAgICB7Y2FyZC5pc1RvZ2dsZWQgPyBcInhcIiA6IFwiK1wifVxyXG4gICAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2NhcmQuaXNUb2dnbGVkID8gXCJtdC0xMFwiIDogXCJoaWRkZW5cIn0+XHJcbiAgICAgICAgICAgICAgICAgIDxwPntjYXJkLmFuc3dlcn08L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBGYVFzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9