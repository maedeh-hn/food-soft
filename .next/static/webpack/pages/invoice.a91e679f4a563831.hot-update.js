"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/invoice",{

/***/ "./pages/invoice/index.tsx":
/*!*********************************!*\
  !*** ./pages/invoice/index.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$();\n\nconst Index = ()=>{\n    _s();\n    const [invoiceNum, setInvoiceNum] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)();\n    // useEffect(() => {\n    //   }, [invoiceNum]);\n    const handleInvoic = async ()=>{\n        await getInvoice();\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \" min-h-screen flex-col items-center justify-between pt-24 max-w-[800px] bg-[#fff] w-full mx-auto\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full px-[25px] items-center gap-[15px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[18px] font-[700] text-[#2B2E4A] \",\n                    children: \"شماره فاکتور:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\F.Eskandari\\\\Desktop\\\\New folder\\\\New folder (2)\\\\soft-food\\\\pages\\\\invoice\\\\index.tsx\",\n                    lineNumber: 16,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"border-[1px] rounded-[10px] py-[10px] px-[10px]\",\n                    onChange: (e)=>{\n                        setInvoiceNum(e.target.value);\n                    }\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\F.Eskandari\\\\Desktop\\\\New folder\\\\New folder (2)\\\\soft-food\\\\pages\\\\invoice\\\\index.tsx\",\n                    lineNumber: 17,\n                    columnNumber: 13\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    onClick: handleInvoic,\n                    className: \"border-[1px] border-[#53354A] bg-[#53354A] py-[10px] px-[10px] rounded-[10px] text-[#fff]\",\n                    children: \"جستجو\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\F.Eskandari\\\\Desktop\\\\New folder\\\\New folder (2)\\\\soft-food\\\\pages\\\\invoice\\\\index.tsx\",\n                    lineNumber: 19,\n                    columnNumber: 13\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\F.Eskandari\\\\Desktop\\\\New folder\\\\New folder (2)\\\\soft-food\\\\pages\\\\invoice\\\\index.tsx\",\n            lineNumber: 15,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\F.Eskandari\\\\Desktop\\\\New folder\\\\New folder (2)\\\\soft-food\\\\pages\\\\invoice\\\\index.tsx\",\n        lineNumber: 12,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"wx/9buBOPckNUP4HRMEw/Ov6G70=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbnZvaWNlL2luZGV4LnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQW1EO0FBRW5ELE1BQU1FLFFBQVE7O0lBQ1YsTUFBTSxDQUFDQyxZQUFXQyxjQUFjLEdBQUNILCtDQUFRQTtJQUN6QyxvQkFBb0I7SUFFcEIsc0JBQXNCO0lBQ3RCLE1BQU1JLGVBQWE7UUFDdkIsTUFBTUM7SUFDRjtJQUNGLHFCQUNFLDhEQUFDQztRQUNDQyxXQUFZO2tCQUVWLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDWCw4REFBQ0M7b0JBQUVELFdBQVU7OEJBQXlDOzs7Ozs7OEJBQ3RELDhEQUFDRTtvQkFBTUYsV0FBVTtvQkFBa0RHLFVBQVUsQ0FBQ0M7d0JBQUtSLGNBQWNRLEVBQUVDLE1BQU0sQ0FBQ0MsS0FBSztvQkFDL0c7Ozs7Ozs4QkFDQSw4REFBQ0M7b0JBQU9DLFNBQVNYO29CQUFjRyxXQUFVOzhCQUE0Rjs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJako7R0FwQk1OO0tBQUFBO0FBc0JOLCtEQUFlQSxLQUFLQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3BhZ2VzL2ludm9pY2UvaW5kZXgudHN4P2I4M2QiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2ludm9pY2VOdW0sc2V0SW52b2ljZU51bV09dXNlU3RhdGU8c3RyaW5nPigpXHJcbiAgICAvLyB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgICAgXHJcbiAgICAvLyAgIH0sIFtpbnZvaWNlTnVtXSk7XHJcbiAgICBjb25zdCBoYW5kbGVJbnZvaWM9YXN5bmMoKT0+e1xyXG5hd2FpdCBnZXRJbnZvaWNlKClcclxuICAgIH1cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdlxyXG4gICAgICBjbGFzc05hbWU9e2AgbWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHQtMjQgbWF4LXctWzgwMHB4XSBiZy1bI2ZmZl0gdy1mdWxsIG14LWF1dG9gfVxyXG4gICAgPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgcHgtWzI1cHhdIGl0ZW1zLWNlbnRlciBnYXAtWzE1cHhdXCI+XHJcbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT0ndGV4dC1bMThweF0gZm9udC1bNzAwXSB0ZXh0LVsjMkIyRTRBXSAnPti02YXYp9ix2Ycg2YHYp9qp2KrZiNixOjwvcD5cclxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT1cImJvcmRlci1bMXB4XSByb3VuZGVkLVsxMHB4XSBweS1bMTBweF0gcHgtWzEwcHhdXCIgb25DaGFuZ2U9eyhlKT0+e3NldEludm9pY2VOdW0oZS50YXJnZXQudmFsdWUpO1xyXG4gICAgICAgICAgICB9fS8+XHJcbiAgICAgICAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlSW52b2ljfSBjbGFzc05hbWU9XCJib3JkZXItWzFweF0gYm9yZGVyLVsjNTMzNTRBXSBiZy1bIzUzMzU0QV0gcHktWzEwcHhdIHB4LVsxMHB4XSByb3VuZGVkLVsxMHB4XSB0ZXh0LVsjZmZmXVwiPtis2LPYqtis2Yg8L2J1dHRvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJJbmRleCIsImludm9pY2VOdW0iLCJzZXRJbnZvaWNlTnVtIiwiaGFuZGxlSW52b2ljIiwiZ2V0SW52b2ljZSIsImRpdiIsImNsYXNzTmFtZSIsInAiLCJpbnB1dCIsIm9uQ2hhbmdlIiwiZSIsInRhcmdldCIsInZhbHVlIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/invoice/index.tsx\n"));

/***/ })

});