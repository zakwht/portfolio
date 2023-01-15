webpackHotUpdate_N_E("pages/_app",{

/***/ "./src/pages/_app.tsx":
/*!****************************!*\
  !*** ./src/pages/_app.tsx ***!
  \****************************/
/*! exports provided: App, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"App\", function() { return App; });\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _emotion_styled__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @emotion/styled */ \"./node_modules/@emotion/styled/dist/emotion-styled.browser.esm.js\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../App.css */ \"./src/App.css\");\n/* harmony import */ var _App_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_App_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Helmet__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Helmet */ \"./src/components/Helmet.tsx\");\n/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/fa */ \"./node_modules/react-icons/fa/index.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/zak/Source/portfolio/src/pages/_app.tsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\n\n\n/* for active page link highlight:\n  left: -4px;\n  content: '';\n  width: calc(100% + 8px);\n  height: 2px;\n  background-color: white;\n  position: absolute;\n  bottom: -4px;\n  border-radius: 8px;\n*/\n\nconst HeaderStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].header`\n  color: white;\n  padding: 48px 48px 20px;\n  display: flex;\n  justify-content: space-between;\n  position: relative;\n\n  @media only screen and (max-width: 480px) {\n    padding: 20px 28px;\n  }\n\n  h1 {\n    margin-block: 0;\n    font-weight: 200;\n  }\n\n  a {\n    color: inherit;\n    text-decoration: none;\n    \n    &:hover {\n      transition: all 0.5s;\n      filter: brightness(0.8);\n    }\n  }\n`;\n_c = HeaderStyled;\nconst NavStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav`\n  position: absolute;\n  right: 48px;\n  bottom: 20px;\n\n  @media only screen and (max-width: 480px) {\n    left: 0;\n    top: 64px;\n  }\n\n  a {\n    float: bottom;\n    line-height: 1.5;\n    margin-left: 28px;\n    font-size: 1.1rem;\n  }\n`;\n_c2 = NavStyled;\nconst FooterStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].footer`\n  svg {\n    margin-bottom: -3px;\n  }\n\n  span {\n    position: absolute;\n    bottom: 16px;\n    right: 24px;\n    color: white;\n  }\n\n  @media only screen and (max-width: 480px) {\n    color: blue;\n  }\n`;\n_c3 = FooterStyled;\nconst FooterLinksStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].nav`\n  position: absolute;\n  bottom: 0;\n  right: 0;\n  left: 0;\n  display: flex;\n  justify-content: center;\n  display: flex;\n\n  a {\n    color: white;\n    display: block;\n    width: 48px;\n    height: 48px;\n    margin: 16px;\n    font-size: 24px;\n    border-radius: 50%;\n    background-color: white; // #F3F6FF;\n    color: black;\n    text-align: center;\n    line-height: 48px;\n    transition: all 0.3s;\n\n    &:hover {\n      margin: 0px 8px;\n      width: 64px;\n      height: 64px;\n      line-height: 64px;\n      font-size: 32px;\n      color: white;\n\n      &[data-link=\"Mail\"] {\n        background-color: #d44638;\n      }\n      &[data-link=\"GitHub\"] {\n        background-color: #24292e;\n      }\n      &[data-link=\"LinkedIn\"] {\n        background-color: #0073b1;\n      }\n    }\n  }\n`;\n_c4 = FooterLinksStyled;\nconst MainStyled = _emotion_styled__WEBPACK_IMPORTED_MODULE_3__[\"default\"].main`\n  padding-bottom: 80px;\n  margin: 32px 24px 0;\n`; //move header and footer to components.\n\n_c5 = MainStyled;\nconst App = ({\n  Component,\n  pageProps\n}) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"Fragment\"], {\n  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_components_Helmet__WEBPACK_IMPORTED_MODULE_5__[\"Helmet\"], {\n    title: \"Portfolio\"\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 136,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(HeaderStyled, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"h1\", {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/\",\n        children: \"Zak White\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 138,\n        columnNumber: 11\n      }, undefined)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 138,\n      columnNumber: 7\n    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(NavStyled, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/projects\",\n        children: \"Projects\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 140,\n        columnNumber: 9\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {\n        href: \"/about\",\n        children: \"About\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 141,\n        columnNumber: 9\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 139,\n      columnNumber: 7\n    }, undefined)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 137,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MainStyled, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(Component, _objectSpread({}, pageProps), void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 145,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 144,\n    columnNumber: 5\n  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(FooterStyled, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(FooterLinksStyled, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: \"https://github.com/zakwht\",\n        \"data-link\": \"GitHub\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__[\"FaGithub\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 150,\n          columnNumber: 10\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 149,\n        columnNumber: 7\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: \"https://linkedin.com/in/zakwhite\",\n        \"data-link\": \"LinkedIn\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__[\"FaLinkedin\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 152,\n          columnNumber: 10\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 151,\n        columnNumber: 8\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"a\", {\n        href: \"mailto:zakwht@gmail.com\",\n        \"data-link\": \"Mail\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_6__[\"FaEnvelope\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 154,\n          columnNumber: 9\n        }, undefined)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 153,\n        columnNumber: 8\n      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"span\", {\n        children: [\"\\xA9 \", new Date().getFullYear()]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 156,\n        columnNumber: 7\n      }, undefined)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 148,\n      columnNumber: 7\n    }, undefined)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 147,\n    columnNumber: 5\n  }, undefined)]\n}, void 0, true);\n_c6 = App;\n/* harmony default export */ __webpack_exports__[\"default\"] = (App);\n\nvar _c, _c2, _c3, _c4, _c5, _c6;\n\n$RefreshReg$(_c, \"HeaderStyled\");\n$RefreshReg$(_c2, \"NavStyled\");\n$RefreshReg$(_c3, \"FooterStyled\");\n$RefreshReg$(_c4, \"FooterLinksStyled\");\n$RefreshReg$(_c5, \"MainStyled\");\n$RefreshReg$(_c6, \"App\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/next/node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL3BhZ2VzL19hcHAudHN4Pzg1NDgiXSwibmFtZXMiOlsiSGVhZGVyU3R5bGVkIiwic3R5bGVkIiwiaGVhZGVyIiwiTmF2U3R5bGVkIiwibmF2IiwiRm9vdGVyU3R5bGVkIiwiZm9vdGVyIiwiRm9vdGVyTGlua3NTdHlsZWQiLCJNYWluU3R5bGVkIiwibWFpbiIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIkRhdGUiLCJnZXRGdWxsWWVhciJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLE1BQU1BLFlBQVksR0FBR0MsdURBQU0sQ0FBQ0MsTUFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQXpCQTtLQUFNRixZO0FBMkJOLE1BQU1HLFNBQVMsR0FBR0YsdURBQU0sQ0FBQ0csR0FBSTtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQWhCQTtNQUFNRCxTO0FBa0JOLE1BQU1FLFlBQVksR0FBR0osdURBQU0sQ0FBQ0ssTUFBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FmQTtNQUFNRCxZO0FBaUJOLE1BQU1FLGlCQUFpQixHQUFHTix1REFBTSxDQUFDRyxHQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQTFDQTtNQUFNRyxpQjtBQTRDTixNQUFNQyxVQUFVLEdBQUdQLHVEQUFNLENBQUNRLElBQUs7QUFDL0I7QUFDQTtBQUNBLENBSEEsQyxDQUtBOztNQUxNRCxVO0FBUUMsTUFBTUUsR0FBdUIsR0FBRyxDQUFDO0FBQUNDLFdBQUQ7QUFBWUM7QUFBWixDQUFELGtCQUNyQztBQUFBLDBCQUNFLHFFQUFDLHlEQUFEO0FBQVEsU0FBSyxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsWUFBRDtBQUFBLDRCQUNFO0FBQUEsNkJBQUkscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsR0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREYsZUFFRSxxRUFBQyxTQUFEO0FBQUEsOEJBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsV0FBWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFLHFFQUFDLGdEQUFEO0FBQU0sWUFBSSxFQUFDLFFBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQUZGLGVBU0UscUVBQUMsVUFBRDtBQUFBLDJCQUNFLHFFQUFDLFNBQUQsb0JBQWVBLFNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFURixlQVlFLHFFQUFDLFlBQUQ7QUFBQSwyQkFDRSxxRUFBQyxpQkFBRDtBQUFBLDhCQUNBO0FBQUcsWUFBSSxFQUFDLDJCQUFSO0FBQW9DLHFCQUFVLFFBQTlDO0FBQUEsK0JBQ0cscUVBQUMsdURBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREEsZUFHQztBQUFHLFlBQUksRUFBQyxrQ0FBUjtBQUEyQyxxQkFBVSxVQUFyRDtBQUFBLCtCQUNFLHFFQUFDLHlEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUhELGVBS0M7QUFBRyxZQUFJLEVBQUMseUJBQVI7QUFBa0MscUJBQVUsTUFBNUM7QUFBQSwrQkFDQyxxRUFBQyx5REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFMRCxlQVFBO0FBQUEsNEJBQVMsSUFBSUMsSUFBSixHQUFXQyxXQUFYLEVBQVQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFaRjtBQUFBLGdCQURLO01BQU1KLEc7QUEyQkVBLGtFQUFmIiwiZmlsZSI6Ii4vc3JjL3BhZ2VzL19hcHAudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiXG5pbXBvcnQgdHlwZSB7IEFwcFByb3BzfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJAZW1vdGlvbi9zdHlsZWRcIjtcbmltcG9ydCAnLi4vQXBwLmNzcyc7XG5pbXBvcnQge0hlbG1ldH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvSGVsbWV0XCI7XG5pbXBvcnQge0ZhR2l0aHViLCBGYUxpbmtlZGluLCBGYUVudmVsb3BlfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcblxuLyogZm9yIGFjdGl2ZSBwYWdlIGxpbmsgaGlnaGxpZ2h0OlxuICBsZWZ0OiAtNHB4O1xuICBjb250ZW50OiAnJztcbiAgd2lkdGg6IGNhbGMoMTAwJSArIDhweCk7XG4gIGhlaWdodDogMnB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IC00cHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiovXG5cbmNvbnN0IEhlYWRlclN0eWxlZCA9IHN0eWxlZC5oZWFkZXJgXG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogNDhweCA0OHB4IDIwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICBwYWRkaW5nOiAyMHB4IDI4cHg7XG4gIH1cblxuICBoMSB7XG4gICAgbWFyZ2luLWJsb2NrOiAwO1xuICAgIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIH1cblxuICBhIHtcbiAgICBjb2xvcjogaW5oZXJpdDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgXG4gICAgJjpob3ZlciB7XG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC41cztcbiAgICAgIGZpbHRlcjogYnJpZ2h0bmVzcygwLjgpO1xuICAgIH1cbiAgfVxuYFxuXG5jb25zdCBOYXZTdHlsZWQgPSBzdHlsZWQubmF2YFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiA0OHB4O1xuICBib3R0b206IDIwcHg7XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGxlZnQ6IDA7XG4gICAgdG9wOiA2NHB4O1xuICB9XG5cbiAgYSB7XG4gICAgZmxvYXQ6IGJvdHRvbTtcbiAgICBsaW5lLWhlaWdodDogMS41O1xuICAgIG1hcmdpbi1sZWZ0OiAyOHB4O1xuICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICB9XG5gXG5cbmNvbnN0IEZvb3RlclN0eWxlZCA9IHN0eWxlZC5mb290ZXJgXG4gIHN2ZyB7XG4gICAgbWFyZ2luLWJvdHRvbTogLTNweDtcbiAgfVxuXG4gIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICBib3R0b206IDE2cHg7XG4gICAgcmlnaHQ6IDI0cHg7XG4gICAgY29sb3I6IHdoaXRlO1xuICB9XG5cbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgIGNvbG9yOiBibHVlO1xuICB9XG5gXG5cbmNvbnN0IEZvb3RlckxpbmtzU3R5bGVkID0gc3R5bGVkLm5hdmBcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHJpZ2h0OiAwO1xuICBsZWZ0OiAwO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcblxuICBhIHtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgd2lkdGg6IDQ4cHg7XG4gICAgaGVpZ2h0OiA0OHB4O1xuICAgIG1hcmdpbjogMTZweDtcbiAgICBmb250LXNpemU6IDI0cHg7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyAvLyAjRjNGNkZGO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgbGluZS1oZWlnaHQ6IDQ4cHg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG5cbiAgICAmOmhvdmVyIHtcbiAgICAgIG1hcmdpbjogMHB4IDhweDtcbiAgICAgIHdpZHRoOiA2NHB4O1xuICAgICAgaGVpZ2h0OiA2NHB4O1xuICAgICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAgICBmb250LXNpemU6IDMycHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG5cbiAgICAgICZbZGF0YS1saW5rPVwiTWFpbFwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNkNDQ2Mzg7XG4gICAgICB9XG4gICAgICAmW2RhdGEtbGluaz1cIkdpdEh1YlwiXSB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyNDI5MmU7XG4gICAgICB9XG4gICAgICAmW2RhdGEtbGluaz1cIkxpbmtlZEluXCJdIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzAwNzNiMTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbmBcblxuY29uc3QgTWFpblN0eWxlZCA9IHN0eWxlZC5tYWluYFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcbiAgbWFyZ2luOiAzMnB4IDI0cHggMDtcbmBcblxuLy9tb3ZlIGhlYWRlciBhbmQgZm9vdGVyIHRvIGNvbXBvbmVudHMuXG5cblxuZXhwb3J0IGNvbnN0IEFwcDogUmVhY3QuRkM8QXBwUHJvcHM+ID0gKHtDb21wb25lbnQsIHBhZ2VQcm9wc30pID0+IFxuICA8PlxuICAgIDxIZWxtZXQgdGl0bGU9XCJQb3J0Zm9saW9cIiAvPlxuICAgIDxIZWFkZXJTdHlsZWQ+XG4gICAgICA8aDE+PExpbmsgaHJlZj1cIi9cIj5aYWsgV2hpdGU8L0xpbms+PC9oMT5cbiAgICAgIDxOYXZTdHlsZWQ+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5Qcm9qZWN0czwvTGluaz5cbiAgICAgICAgPExpbmsgaHJlZj1cIi9hYm91dFwiPkFib3V0PC9MaW5rPlxuICAgICAgPC9OYXZTdHlsZWQ+XG4gICAgPC9IZWFkZXJTdHlsZWQ+XG4gICAgPE1haW5TdHlsZWQ+XG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XG4gICAgPC9NYWluU3R5bGVkPlxuICAgIDxGb290ZXJTdHlsZWQ+XG4gICAgICA8Rm9vdGVyTGlua3NTdHlsZWQ+XG4gICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3pha3dodFwiIGRhdGEtbGluaz1cIkdpdEh1YlwiXG4gICAgICAgID48RmFHaXRodWIgLz48L2FcbiAgICAgID48YSBocmVmPVwiaHR0cHM6Ly9saW5rZWRpbi5jb20vaW4vemFrd2hpdGVcIiBkYXRhLWxpbms9XCJMaW5rZWRJblwiXG4gICAgICAgID48RmFMaW5rZWRpbiAvPjwvYVxuICAgICAgPjxhIGhyZWY9XCJtYWlsdG86emFrd2h0QGdtYWlsLmNvbVwiIGRhdGEtbGluaz1cIk1haWxcIj5cbiAgICAgICAgPEZhRW52ZWxvcGUgLz5cbiAgICAgIDwvYT5cbiAgICAgIDxzcGFuPsKpIHtuZXcgRGF0ZSgpLmdldEZ1bGxZZWFyKCl9PC9zcGFuPlxuICAgICAgPC9Gb290ZXJMaW5rc1N0eWxlZD5cbiAgICA8L0Zvb3RlclN0eWxlZD5cbiAgPC8+XG5cbmV4cG9ydCBkZWZhdWx0IEFwcDtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/pages/_app.tsx\n");

/***/ })

})