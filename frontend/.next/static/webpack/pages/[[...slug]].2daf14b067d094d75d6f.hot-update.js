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
                children: [/*#__PURE__*/(0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("h2", {
                  className: "text-3xl",
                  children: "6"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
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
              className: "w-full h-auto",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9zZWN0aW9ucy9nYW1lcy5qcyJdLCJuYW1lcyI6WyJHYW1lcyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwidGl0bGUiLCJnYW1lTGlua3MiLCJtYXAiLCJsaW5rIiwidGV4dCIsImlkIiwiY2FyZHMiLCJjYXJkIiwiaW1nIiwiZGVzY3JpcHRpb24iLCJkaXZpZGVyIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBOztBQUVBLElBQU1BLEtBQUssR0FBRyxTQUFSQSxLQUFRLE9BQWM7QUFBQSxNQUFYQyxJQUFXLFFBQVhBLElBQVc7QUFDMUJDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JGLElBQXRCO0FBQ0Esc0JBQ0U7QUFBSyxhQUFTLEVBQUMsb0JBQWY7QUFBQSwyQkFDRTtBQUFLLGVBQVMsRUFBQyxXQUFmO0FBQUEsOEJBQ0k7QUFBSSxpQkFBUyxFQUFDLHFEQUFkO0FBQUEsa0JBQ0dBLElBQUksQ0FBQ0c7QUFEUjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosZUFJSTtBQUFJLGlCQUFTLEVBQUMsdURBQWQ7QUFBQSxrQkFDR0gsSUFBSSxDQUFDSSxTQUFMLENBQWVDLEdBQWYsQ0FBbUIsVUFBQ0MsSUFBRDtBQUFBLDhCQUNsQjtBQUFJLHFCQUFTLEVBQUMseUNBQWQ7QUFBQSxzQkFDR0EsSUFBSSxDQUFDQztBQURSLGFBQTZERCxJQUFJLENBQUNFLEVBQWxFO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGtCO0FBQUEsU0FBbkI7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSkosZUFXSTtBQUFLLGlCQUFTLEVBQUMsdURBQWY7QUFBQSxrQkFDR1IsSUFBSSxDQUFDUyxLQUFMLENBQVdKLEdBQVgsQ0FBZSxVQUFDSyxJQUFEO0FBQUEsOEJBQ2Q7QUFBSyxxQkFBUyxFQUFDLDJCQUFmO0FBQUEsb0NBQ0U7QUFBSyx1QkFBUyxFQUFDLGVBQWY7QUFBQSxxQ0FDRSw4REFBQyxvREFBRDtBQUFXLHFCQUFLLEVBQUMsS0FBakI7QUFBdUIsc0JBQU0sRUFBQyxLQUE5QjtBQUFvQyxxQkFBSyxFQUFFQSxJQUFJLENBQUNDO0FBQWhEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBSUU7QUFBSyx1QkFBUyxFQUFDLE9BQWY7QUFBQSxzQ0FDSTtBQUFJLHlCQUFTLEVBQUMsbUJBQWQ7QUFBQSwwQkFBbUNELElBQUksQ0FBQ0U7QUFBeEM7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFESixlQUVJO0FBQUkseUJBQVMsRUFBQyw4QkFBZDtBQUFBLDBCQUE4Q0YsSUFBSSxDQUFDUDtBQUFuRDtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUZKLGVBR0k7QUFBSyx5QkFBUyxFQUFDLGtDQUFmO0FBQUEsd0NBSUU7QUFBSSwyQkFBUyxFQUFDLFVBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkYsZUFRRTtBQUFJLDJCQUFTLEVBQUMsVUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUpGLGVBa0JFO0FBQUssdUJBQVMsRUFBQyxlQUFmO0FBQUEscUNBQ0UsOERBQUMsb0RBQUQ7QUFBVyxxQkFBSyxFQUFFTyxJQUFJLENBQUNHO0FBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWxCRjtBQUFBLGFBQWdESCxJQUFJLENBQUNGLEVBQXJEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRGM7QUFBQSxTQUFmO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQTBDRCxDQTVDRDs7S0FBTVQsSztBQThDTiwrREFBZUEsS0FBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9bWy4uLnNsdWddXS4yZGFmMTRiMDY3ZDA5NGQ3NWQ2Zi5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTmV4dEltYWdlIGZyb20gXCIuLi9lbGVtZW50cy9pbWFnZVwiO1xyXG5cclxuY29uc3QgR2FtZXMgPSAoeyBkYXRhIH0pID0+IHtcclxuICBjb25zb2xlLmxvZyhcImRhdGE6IFwiLCBkYXRhKTtcclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJiZy1bIzVkYzRlYV0gcHktNDhcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0ZXh0LXdoaXRlIHVwcGVyY2FzZSBmb250LWJvbGQgdGV4dC03eGwgdGV4dC1jZW50ZXJcIj5cclxuICAgICAgICAgICAge2RhdGEudGl0bGV9XHJcbiAgICAgICAgICA8L2gxPlxyXG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGp1c3RpZnktY2VudGVyIGdhcC04IG10LTI4XCI+XHJcbiAgICAgICAgICAgIHtkYXRhLmdhbWVMaW5rcy5tYXAoKGxpbmspID0+IChcclxuICAgICAgICAgICAgICA8bGkgY2xhc3NOYW1lPVwidGV4dC13aGl0ZSB1cHBlcmNhc2UgZm9udC1ib2xkIHRleHQtMnhsXCIga2V5PXtsaW5rLmlkfT5cclxuICAgICAgICAgICAgICAgIHtsaW5rLnRleHR9XHJcbiAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgKSl9XHJcbiAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4IGZsZXgtcm93IGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciBnYXAtOCBtdC0xMFwiPlxyXG4gICAgICAgICAgICB7ZGF0YS5jYXJkcy5tYXAoKGNhcmQpID0+IChcclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgZ2FwLTIgbXQtMTBcIiBrZXk9e2NhcmQuaWR9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2Ugd2lkdGg9XCI0ODBcIiBoZWlnaHQ9XCI0MTBcIiBtZWRpYT17Y2FyZC5pbWd9IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibWwtMTBcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidXBwZXJjYXNlIHRleHQtbGdcIj57Y2FyZC5kZXNjcmlwdGlvbn08L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9XCJ1cHBlcmNhc2UgdGV4dC0zeGwgZm9udC1ib2xkXCI+e2NhcmQudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1yb3cgaXRlbXMtY2VudGVyIGdhcC0yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICB7LyogPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgbWVkaWE9e2NhcmQuaWNvbnNbMF19IC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwidGV4dC0zeGxcIj42PC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgIHsvKiA8ZGl2IGNsYXNzTmFtZT1cInctZnVsbCBoLWF1dG9cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5leHRJbWFnZSBtZWRpYT17Y2FyZC5pY29uc1sxXX0gLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ0ZXh0LTN4bFwiPkphPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1hdXRvXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxOZXh0SW1hZ2UgbWVkaWE9e2NhcmQuZGl2aWRlcn0gLz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBHYW1lcztcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==