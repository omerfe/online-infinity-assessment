self["webpackHotUpdate_N_E"]("pages/[[...slug]]",{

/***/ "./components/sections/games.js":
/*!**************************************!*\
  !*** ./components/sections/games.js ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _elements_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../elements/image */ "./components/elements/image.js");
/* module decorator */ module = __webpack_require__.hmd(module);


var _jsxFileName = "C:\\Users\\PC\\Documents\\Repositories\\online-infinity-assessment\\frontend\\components\\sections\\games.js",
    _this = undefined;




var Games = function Games(_ref) {
  var data = _ref.data;
  console.log("data: ", data);
  return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
    className: "bg-[#5dc4ea] py-48",
    children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
      className: "container",
      children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
        className: "text-white uppercase font-bold text-7xl text-center",
        children: data.title
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 9,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("ul", {
        className: "flex flex-row items-center justify-center gap-8 mt-28",
        children: data.gameLinks.map(function (link) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("li", {
            className: "text-white uppercase font-bold text-2xl",
            children: link.text
          }, link.id, false, {
            fileName: _jsxFileName,
            lineNumber: 14,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 11
      }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
        className: "flex flex-row items-center justify-center gap-8 mt-10",
        children: data.cards.map(function (card) {
          return /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
            className: "flex flex-col gap-2 mt-10",
            children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w-full h-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                width: "480",
                height: "410",
                media: card.img
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 23,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 22,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "ml-10",
              children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                className: "uppercase text-lg",
                children: card.description
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 26,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h1", {
                className: "uppercase text-3xl font-bold",
                children: card.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 27,
                columnNumber: 21
              }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                className: "flex flex-row items-center gap-2",
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "w-10 h-auto",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                    media: card.userIcon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 30,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 29,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "text-3xl",
                  children: "6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
                  className: "w-10 h-auto",
                  children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                    media: card.ticketIcon
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 34,
                    columnNumber: 25
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 33,
                  columnNumber: 23
                }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "text-3xl",
                  children: "Ja"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 36,
                  columnNumber: 23
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 28,
                columnNumber: 21
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 25,
              columnNumber: 17
            }, _this), /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {
              className: "w-52 h-auto",
              children: /*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_elements_image__WEBPACK_IMPORTED_MODULE_2__.default, {
                media: card.divider
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 40,
                columnNumber: 19
              }, _this)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 17
            }, _this)]
          }, card.id, true, {
            fileName: _jsxFileName,
            lineNumber: 21,
            columnNumber: 15
          }, _this);
        })
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 11
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 8,
      columnNumber: 7
    }, _this)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 7,
    columnNumber: 5
  }, _this);
};

_c = Games;
/* harmony default export */ __webpack_exports__["default"] = (Games);

var _c;

$RefreshReg$(_c, "Games");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9nYW1lcy5qcyJdLCJuYW1lcyI6WyJHYW1lcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJnYW1lTGlua3MiLCJtYXAiLCJsaW5rIiwidGV4dCIsImlkIiwiY2FyZHMiLCJjYXJkIiwiaW1nIiwiZGVzY3JpcHRpb24iLCJ1c2VySWNvbiIsInRpY2tldEljb24iLCJkaXZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLElBQXRCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLHFEQUFkO0FBQUEsa0JBQ0dBLElBQUksQ0FBQ0c7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFJLGlCQUFTLEVBQUMsdURBQWQ7QUFBQSxrQkFDR0gsSUFBSSxDQUFDSSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLDhCQUNsQjtBQUFJLHFCQUFTLEVBQUMseUNBQWQ7QUFBQSxzQkFDR0EsSUFBSSxDQUFDQztBQURSLGFBQTZERCxJQUFJLENBQUNFLEVBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGtCO0FBQUEsU0FBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFXSTtBQUFLLGlCQUFTLEVBQUMsdURBQWY7QUFBQSxrQkFDR1IsSUFBSSxDQUFDUyxLQUFMLENBQVdKLEdBQVgsQ0FBZSxVQUFDSyxJQUFEO0FBQUEsOEJBQ2Q7QUFBSyxxQkFBUyxFQUFDLDJCQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLGVBQWY7QUFBQSxxQ0FDRSw4REFBQyxvREFBRDtBQUFXLHFCQUFLLEVBQUMsS0FBakI7QUFBdUIsc0JBQU0sRUFBQyxLQUE5QjtBQUFvQyxxQkFBSyxFQUFFQSxJQUFJLENBQUNDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBSyx1QkFBUyxFQUFDLE9BQWY7QUFBQSxzQ0FDSTtBQUFJLHlCQUFTLEVBQUMsbUJBQWQ7QUFBQSwwQkFBbUNELElBQUksQ0FBQ0U7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUkseUJBQVMsRUFBQyw4QkFBZDtBQUFBLDBCQUE4Q0YsSUFBSSxDQUFDUDtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBSyx5QkFBUyxFQUFDLGtDQUFmO0FBQUEsd0NBQ0U7QUFBSywyQkFBUyxFQUFDLGFBQWY7QUFBQSx5Q0FDRSw4REFBQyxvREFBRDtBQUFXLHlCQUFLLEVBQUVPLElBQUksQ0FBQ0c7QUFBdkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREYsZUFJRTtBQUFJLDJCQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKRixlQUtFO0FBQUssMkJBQVMsRUFBQyxhQUFmO0FBQUEseUNBQ0UsOERBQUMsb0RBQUQ7QUFBVyx5QkFBSyxFQUFFSCxJQUFJLENBQUNJO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGLGVBUUU7QUFBSSwyQkFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBUkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQWtCRTtBQUFLLHVCQUFTLEVBQUMsYUFBZjtBQUFBLHFDQUNFLDhEQUFDLG9EQUFEO0FBQVcscUJBQUssRUFBRUosSUFBSSxDQUFDSztBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFsQkY7QUFBQSxhQUFnREwsSUFBSSxDQUFDRixFQUFyRDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURjO0FBQUEsU0FBZjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFYSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBREY7QUEwQ0QsQ0E1Q0Q7O0tBQU1ULEs7QUE4Q04sK0RBQWVBLEtBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvW1suLi5zbHVnXV0uYzNlMTM3ZTI5NjE1YTcxZmZlYjEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IE5leHRJbWFnZSBmcm9tIFwiLi4vZWxlbWVudHMvaW1hZ2VcIjtcclxuXHJcbmNvbnN0IEdhbWVzID0gKHsgZGF0YSB9KSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJkYXRhOiBcIiwgZGF0YSk7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYmctWyM1ZGM0ZWFdIHB5LTQ4XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtN3hsIHRleHQtY2VudGVyXCI+XHJcbiAgICAgICAgICAgIHtkYXRhLnRpdGxlfVxyXG4gICAgICAgICAgPC9oMT5cclxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtOCBtdC0yOFwiPlxyXG4gICAgICAgICAgICB7ZGF0YS5nYW1lTGlua3MubWFwKChsaW5rKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGxpIGNsYXNzTmFtZT1cInRleHQtd2hpdGUgdXBwZXJjYXNlIGZvbnQtYm9sZCB0ZXh0LTJ4bFwiIGtleT17bGluay5pZH0+XHJcbiAgICAgICAgICAgICAgICB7bGluay50ZXh0fVxyXG4gICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC91bD5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBmbGV4LXJvdyBpdGVtcy1jZW50ZXIganVzdGlmeS1jZW50ZXIgZ2FwLTggbXQtMTBcIj5cclxuICAgICAgICAgICAge2RhdGEuY2FyZHMubWFwKChjYXJkKSA9PiAoXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtY29sIGdhcC0yIG10LTEwXCIga2V5PXtjYXJkLmlkfT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIHdpZHRoPVwiNDgwXCIgaGVpZ2h0PVwiNDEwXCIgbWVkaWE9e2NhcmQuaW1nfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm1sLTEwXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzTmFtZT1cInVwcGVyY2FzZSB0ZXh0LWxnXCI+e2NhcmQuZGVzY3JpcHRpb259PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtM3hsIGZvbnQtYm9sZFwiPntjYXJkLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBnYXAtMlwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LTEwIGgtYXV0b1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmV4dEltYWdlIG1lZGlhPXtjYXJkLnVzZXJJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj42PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy0xMCBoLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBtZWRpYT17Y2FyZC50aWNrZXRJY29ufSAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj5KYTwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy01MiBoLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBtZWRpYT17Y2FyZC5kaXZpZGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICkpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEdhbWVzO1xyXG4iXSwic291cmNlUm9vdCI6IiJ9