"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/customerInvoice",{

/***/ "./pages/customerInvoice/index.tsx":
/*!*****************************************!*\
  !*** ./pages/customerInvoice/index.tsx ***!
  \*****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _services_requestList_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/services/requestList.ts */ \"./services/requestList.ts.ts\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\nconst Index = ()=>{\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(\"\");\n    const [filteredData, setFilteredData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]);\n    const [customerLoading, setCustomerLoading] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [invoiceData, setInvoiceData] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)();\n    // const handleInvoic = async (e:any) => {\n    //     setCustomerLoading(true);\n    //     if (invoiceNum) {\n    //       const responce = await getInvoice(invoiceNum);\n    //       if (responce.status === 204 || responce.status === 200) {\n    //         setCustomerLoading(false);\n    //         setInvoiceData(responce?.data);\n    //         console.log(responce);\n    //       }\n    //     }\n    //   };\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        const handleInvoic = async (e)=>{\n            setCustomerLoading(true);\n            const responce = await (0,_services_requestList_ts__WEBPACK_IMPORTED_MODULE_1__.getCustomer)(e.target.value);\n            if (responce.status === 204 || responce.status === 200) {\n                setCustomerLoading(false);\n                setInvoiceData(responce === null || responce === void 0 ? void 0 : responce.data);\n                console.log(responce);\n            }\n        };\n    }, [\n        inputValue\n    ]);\n    const handleInputChange = (e)=>{\n        const value = e.target.value;\n        setInputValue(value);\n    // Filter the data based on the input value\n    //   const filtered = data.filter((item) =>\n    //     item.toLowerCase().includes(value.toLowerCase())\n    //   );\n    //   setFilteredData(filtered);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"min-h-screen flex-col items-center justify-between py-24 max-w-[800px] bg-[#fff] w-full mx-auto px-[25px]\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"flex w-full  items-center gap-[15px] mb-[50px]\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                    className: \"text-[18px] font-[700] text-[#2B2E4A] \",\n                    children: \" نام مشترک:\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\F.Eskandari\\\\Desktop\\\\New folder\\\\food-soft\\\\pages\\\\customerInvoice\\\\index.tsx\",\n                    lineNumber: 46,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                    className: \"border-[1px] rounded-[10px] py-[10px] px-[10px]\",\n                    onChange: handleInputChange\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\F.Eskandari\\\\Desktop\\\\New folder\\\\food-soft\\\\pages\\\\customerInvoice\\\\index.tsx\",\n                    lineNumber: 47,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                    className: \"mt-2\",\n                    children: filteredData.map((item, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                            className: \"p-2 hover:bg-gray-100 cursor-pointer\",\n                            children: item\n                        }, index, false, {\n                            fileName: \"C:\\\\Users\\\\F.Eskandari\\\\Desktop\\\\New folder\\\\food-soft\\\\pages\\\\customerInvoice\\\\index.tsx\",\n                            lineNumber: 53,\n                            columnNumber: 11\n                        }, undefined))\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\F.Eskandari\\\\Desktop\\\\New folder\\\\food-soft\\\\pages\\\\customerInvoice\\\\index.tsx\",\n                    lineNumber: 51,\n                    columnNumber: 14\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\F.Eskandari\\\\Desktop\\\\New folder\\\\food-soft\\\\pages\\\\customerInvoice\\\\index.tsx\",\n            lineNumber: 45,\n            columnNumber: 13\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\F.Eskandari\\\\Desktop\\\\New folder\\\\food-soft\\\\pages\\\\customerInvoice\\\\index.tsx\",\n        lineNumber: 44,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Index, \"8ciBQgCByt/2PkssbDi29wDKMfs=\");\n_c = Index;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Index);\nvar _c;\n$RefreshReg$(_c, \"Index\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9jdXN0b21lckludm9pY2UvaW5kZXgudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXdEO0FBQ0w7QUFFbkQsTUFBTUksUUFBUTs7SUFDVixNQUFNLENBQUNDLFlBQVlDLGNBQWMsR0FBR0gsK0NBQVFBLENBQUM7SUFDN0MsTUFBTSxDQUFDSSxjQUFjQyxnQkFBZ0IsR0FBR0wsK0NBQVFBLENBQUMsRUFBRTtJQUNuRCxNQUFNLENBQUNNLGlCQUFpQkMsbUJBQW1CLEdBQUdQLCtDQUFRQSxDQUFVO0lBQ2hFLE1BQU0sQ0FBQ1EsYUFBYUMsZUFBZSxHQUFHVCwrQ0FBUUE7SUFDOUMsMENBQTBDO0lBQzFDLGdDQUFnQztJQUNoQyx3QkFBd0I7SUFDeEIsdURBQXVEO0lBQ3ZELGtFQUFrRTtJQUNsRSxxQ0FBcUM7SUFDckMsMENBQTBDO0lBQzFDLGlDQUFpQztJQUNqQyxVQUFVO0lBQ1YsUUFBUTtJQUNSLE9BQU87SUFDUEQsZ0RBQVNBLENBQUM7UUFDSixNQUFNVyxlQUFlLE9BQU9DO1lBQzlCSixtQkFBbUI7WUFFakIsTUFBTUssV0FBVyxNQUFNZixxRUFBV0EsQ0FBQ2MsRUFBRUUsTUFBTSxDQUFDQyxLQUFLO1lBQ2pELElBQUlGLFNBQVNHLE1BQU0sS0FBSyxPQUFPSCxTQUFTRyxNQUFNLEtBQUssS0FBSztnQkFDdERSLG1CQUFtQjtnQkFDbkJFLGVBQWVHLHFCQUFBQSwrQkFBQUEsU0FBVUksSUFBSTtnQkFDN0JDLFFBQVFDLEdBQUcsQ0FBQ047WUFDZDtRQUVKO0lBQ0YsR0FBRTtRQUFDVjtLQUFXO0lBQ2QsTUFBTWlCLG9CQUFvQixDQUFDUjtRQUN6QixNQUFNRyxRQUFRSCxFQUFFRSxNQUFNLENBQUNDLEtBQUs7UUFDNUJYLGNBQWNXO0lBRWQsMkNBQTJDO0lBQzdDLDJDQUEyQztJQUMzQyx1REFBdUQ7SUFDdkQsT0FBTztJQUNQLCtCQUErQjtJQUMvQjtJQUNGLHFCQUNFLDhEQUFDTTtRQUFJQyxXQUFVO2tCQUNQLDRFQUFDRDtZQUFJQyxXQUFVOzs4QkFDbkIsOERBQUNDO29CQUFFRCxXQUFVOzhCQUF5Qzs7Ozs7OzhCQUN0RCw4REFBQ0U7b0JBQ0NGLFdBQVU7b0JBQ1ZHLFVBQVVMOzs7Ozs7OEJBRVAsOERBQUNNO29CQUFHSixXQUFVOzhCQUNsQmpCLGFBQWFzQixHQUFHLENBQUMsQ0FBQ0MsTUFBVUMsc0JBQzNCLDhEQUFDQzs0QkFBZVIsV0FBVTtzQ0FDdkJNOzJCQURNQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBUW5CO0dBekRNM0I7S0FBQUE7QUEyRE4sK0RBQWVBLEtBQUtBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvY3VzdG9tZXJJbnZvaWNlL2luZGV4LnRzeD8zOTZmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGdldEN1c3RvbWVyIH0gZnJvbSBcIkAvc2VydmljZXMvcmVxdWVzdExpc3QudHNcIjtcclxuaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKCkgPT4ge1xyXG4gICAgY29uc3QgW2lucHV0VmFsdWUsIHNldElucHV0VmFsdWVdID0gdXNlU3RhdGUoJycpO1xyXG4gICAgY29uc3QgW2ZpbHRlcmVkRGF0YSwgc2V0RmlsdGVyZWREYXRhXSA9IHVzZVN0YXRlKFtdKTtcclxuICAgIGNvbnN0IFtjdXN0b21lckxvYWRpbmcsIHNldEN1c3RvbWVyTG9hZGluZ10gPSB1c2VTdGF0ZTxib29sZWFuPihmYWxzZSk7XHJcbiAgICBjb25zdCBbaW52b2ljZURhdGEsIHNldEludm9pY2VEYXRhXSA9IHVzZVN0YXRlPGFueT4oKTtcclxuICAgIC8vIGNvbnN0IGhhbmRsZUludm9pYyA9IGFzeW5jIChlOmFueSkgPT4ge1xyXG4gICAgLy8gICAgIHNldEN1c3RvbWVyTG9hZGluZyh0cnVlKTtcclxuICAgIC8vICAgICBpZiAoaW52b2ljZU51bSkge1xyXG4gICAgLy8gICAgICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCBnZXRJbnZvaWNlKGludm9pY2VOdW0pO1xyXG4gICAgLy8gICAgICAgaWYgKHJlc3BvbmNlLnN0YXR1cyA9PT0gMjA0IHx8IHJlc3BvbmNlLnN0YXR1cyA9PT0gMjAwKSB7XHJcbiAgICAvLyAgICAgICAgIHNldEN1c3RvbWVyTG9hZGluZyhmYWxzZSk7XHJcbiAgICAvLyAgICAgICAgIHNldEludm9pY2VEYXRhKHJlc3BvbmNlPy5kYXRhKTtcclxuICAgIC8vICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uY2UpO1xyXG4gICAgLy8gICAgICAgfVxyXG4gICAgLy8gICAgIH1cclxuICAgIC8vICAgfTtcclxuICAgIHVzZUVmZmVjdCgoKT0+e1xyXG4gICAgICAgICAgY29uc3QgaGFuZGxlSW52b2ljID0gYXN5bmMgKGU6YW55KSA9PiB7XHJcbiAgICAgICAgc2V0Q3VzdG9tZXJMb2FkaW5nKHRydWUpO1xyXG4gICAgIFxyXG4gICAgICAgICAgY29uc3QgcmVzcG9uY2UgPSBhd2FpdCBnZXRDdXN0b21lcihlLnRhcmdldC52YWx1ZSk7XHJcbiAgICAgICAgICBpZiAocmVzcG9uY2Uuc3RhdHVzID09PSAyMDQgfHwgcmVzcG9uY2Uuc3RhdHVzID09PSAyMDApIHtcclxuICAgICAgICAgICAgc2V0Q3VzdG9tZXJMb2FkaW5nKGZhbHNlKTtcclxuICAgICAgICAgICAgc2V0SW52b2ljZURhdGEocmVzcG9uY2U/LmRhdGEpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhyZXNwb25jZSk7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgXHJcbiAgICAgIH07ICBcclxuICAgIH0sW2lucHV0VmFsdWVdKVxyXG4gICAgY29uc3QgaGFuZGxlSW5wdXRDaGFuZ2UgPSAoZTphbnkpID0+IHtcclxuICAgICAgY29uc3QgdmFsdWUgPSBlLnRhcmdldC52YWx1ZTtcclxuICAgICAgc2V0SW5wdXRWYWx1ZSh2YWx1ZSk7XHJcbiAgXHJcbiAgICAgIC8vIEZpbHRlciB0aGUgZGF0YSBiYXNlZCBvbiB0aGUgaW5wdXQgdmFsdWVcclxuICAgIC8vICAgY29uc3QgZmlsdGVyZWQgPSBkYXRhLmZpbHRlcigoaXRlbSkgPT5cclxuICAgIC8vICAgICBpdGVtLnRvTG93ZXJDYXNlKCkuaW5jbHVkZXModmFsdWUudG9Mb3dlckNhc2UoKSlcclxuICAgIC8vICAgKTtcclxuICAgIC8vICAgc2V0RmlsdGVyZWREYXRhKGZpbHRlcmVkKTtcclxuICAgIH07XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwibWluLWgtc2NyZWVuIGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWJldHdlZW4gcHktMjQgbWF4LXctWzgwMHB4XSBiZy1bI2ZmZl0gdy1mdWxsIG14LWF1dG8gcHgtWzI1cHhdXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCB3LWZ1bGwgIGl0ZW1zLWNlbnRlciBnYXAtWzE1cHhdIG1iLVs1MHB4XVwiPlxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtWzE4cHhdIGZvbnQtWzcwMF0gdGV4dC1bIzJCMkU0QV0gXCI+INmG2KfZhSDZhdi02KrYsdqpOjwvcD5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIGNsYXNzTmFtZT1cImJvcmRlci1bMXB4XSByb3VuZGVkLVsxMHB4XSBweS1bMTBweF0gcHgtWzEwcHhdXCJcclxuICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVJbnB1dENoYW5nZX1cclxuICAgICAgICAvPlxyXG4gICAgICAgICAgICAgPHVsIGNsYXNzTmFtZT1cIm10LTJcIj5cclxuICAgICAgICB7ZmlsdGVyZWREYXRhLm1hcCgoaXRlbTphbnksIGluZGV4OmFueSkgPT4gKFxyXG4gICAgICAgICAgPGxpIGtleT17aW5kZXh9IGNsYXNzTmFtZT1cInAtMiBob3ZlcjpiZy1ncmF5LTEwMCBjdXJzb3ItcG9pbnRlclwiPlxyXG4gICAgICAgICAgICB7aXRlbX1cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvdWw+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEluZGV4O1xyXG4iXSwibmFtZXMiOlsiZ2V0Q3VzdG9tZXIiLCJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW5kZXgiLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsImZpbHRlcmVkRGF0YSIsInNldEZpbHRlcmVkRGF0YSIsImN1c3RvbWVyTG9hZGluZyIsInNldEN1c3RvbWVyTG9hZGluZyIsImludm9pY2VEYXRhIiwic2V0SW52b2ljZURhdGEiLCJoYW5kbGVJbnZvaWMiLCJlIiwicmVzcG9uY2UiLCJ0YXJnZXQiLCJ2YWx1ZSIsInN0YXR1cyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiaGFuZGxlSW5wdXRDaGFuZ2UiLCJkaXYiLCJjbGFzc05hbWUiLCJwIiwiaW5wdXQiLCJvbkNoYW5nZSIsInVsIiwibWFwIiwiaXRlbSIsImluZGV4IiwibGkiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/customerInvoice/index.tsx\n"));

/***/ })

});