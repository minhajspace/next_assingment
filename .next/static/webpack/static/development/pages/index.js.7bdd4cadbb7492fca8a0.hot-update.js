webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./node_modules/Next/Head.js":
/*!***********************************!*\
  !*** ./node_modules/Next/Head.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/next-server/lib/head */ "./node_modules/Next/dist/next-server/lib/head.js")


/***/ }),

/***/ "./node_modules/Next/dist/next-server/lib/amp-context.js":
/*!***************************************************************!*\
  !*** ./node_modules/Next/dist/next-server/lib/amp-context.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
exports.AmpStateContext = React.createContext({});


/***/ }),

/***/ "./node_modules/Next/dist/next-server/lib/amp.js":
/*!*******************************************************!*\
  !*** ./node_modules/Next/dist/next-server/lib/amp.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/Next/dist/next-server/lib/amp-context.js");
function isInAmpMode({ ampFirst = false, hybrid = false, hasQuery = false, } = {}) {
    return ampFirst || (hybrid && hasQuery);
}
exports.isInAmpMode = isInAmpMode;
function useAmp() {
    // Don't assign the context value to a variable to save bytes
    return isInAmpMode(react_1.default.useContext(amp_context_1.AmpStateContext));
}
exports.useAmp = useAmp;


/***/ }),

/***/ "./node_modules/Next/dist/next-server/lib/head-manager-context.js":
/*!************************************************************************!*\
  !*** ./node_modules/Next/dist/next-server/lib/head-manager-context.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const React = __importStar(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
exports.HeadManagerContext = React.createContext(null);


/***/ }),

/***/ "./node_modules/Next/dist/next-server/lib/head.js":
/*!********************************************************!*\
  !*** ./node_modules/Next/dist/next-server/lib/head.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(__webpack_require__(/*! react */ "./node_modules/react/index.js"));
const side_effect_1 = __importDefault(__webpack_require__(/*! ./side-effect */ "./node_modules/Next/dist/next-server/lib/side-effect.js"));
const amp_context_1 = __webpack_require__(/*! ./amp-context */ "./node_modules/Next/dist/next-server/lib/amp-context.js");
const head_manager_context_1 = __webpack_require__(/*! ./head-manager-context */ "./node_modules/Next/dist/next-server/lib/head-manager-context.js");
const amp_1 = __webpack_require__(/*! ./amp */ "./node_modules/Next/dist/next-server/lib/amp.js");
function defaultHead(inAmpMode = false) {
    const head = [react_1.default.createElement("meta", { charSet: "utf-8" })];
    if (!inAmpMode) {
        head.push(react_1.default.createElement("meta", { name: "viewport", content: "width=device-width,minimum-scale=1,initial-scale=1" }));
    }
    return head;
}
exports.defaultHead = defaultHead;
function onlyReactElement(list, child) {
    // React children can be "string" or "number" in this case we ignore them for backwards compat
    if (typeof child === 'string' || typeof child === 'number') {
        return list;
    }
    // Adds support for React.Fragment
    if (child.type === react_1.default.Fragment) {
        return list.concat(react_1.default.Children.toArray(child.props.children).reduce((fragmentList, fragmentChild) => {
            if (typeof fragmentChild === 'string' ||
                typeof fragmentChild === 'number') {
                return fragmentList;
            }
            return fragmentList.concat(fragmentChild);
        }, []));
    }
    return list.concat(child);
}
const METATYPES = ['name', 'httpEquiv', 'charSet', 'itemProp'];
/*
 returns a function for filtering head child elements
 which shouldn't be duplicated, like <title/>
 Also adds support for deduplicated `key` properties
*/
function unique() {
    const keys = new Set();
    const tags = new Set();
    const metaTypes = new Set();
    const metaCategories = {};
    return (h) => {
        let unique = true;
        if (h.key && typeof h.key !== 'number' && h.key.indexOf('$') > 0) {
            const key = h.key.slice(h.key.indexOf('$') + 1);
            if (keys.has(key)) {
                unique = false;
            }
            else {
                keys.add(key);
            }
        }
        // eslint-disable-next-line default-case
        switch (h.type) {
            case 'title':
            case 'base':
                if (tags.has(h.type)) {
                    unique = false;
                }
                else {
                    tags.add(h.type);
                }
                break;
            case 'meta':
                for (let i = 0, len = METATYPES.length; i < len; i++) {
                    const metatype = METATYPES[i];
                    if (!h.props.hasOwnProperty(metatype))
                        continue;
                    if (metatype === 'charSet') {
                        if (metaTypes.has(metatype)) {
                            unique = false;
                        }
                        else {
                            metaTypes.add(metatype);
                        }
                    }
                    else {
                        const category = h.props[metatype];
                        const categories = metaCategories[metatype] || new Set();
                        if (categories.has(category)) {
                            unique = false;
                        }
                        else {
                            categories.add(category);
                            metaCategories[metatype] = categories;
                        }
                    }
                }
                break;
        }
        return unique;
    };
}
/**
 *
 * @param headElement List of multiple <Head> instances
 */
function reduceComponents(headElements, props) {
    return headElements
        .reduce((list, headElement) => {
        const headElementChildren = react_1.default.Children.toArray(headElement.props.children);
        return list.concat(headElementChildren);
    }, [])
        .reduce(onlyReactElement, [])
        .reverse()
        .concat(defaultHead(props.inAmpMode))
        .filter(unique())
        .reverse()
        .map((c, i) => {
        const key = c.key || i;
        return react_1.default.cloneElement(c, { key });
    });
}
const Effect = side_effect_1.default();
/**
 * This component injects elements to `<head>` of your page.
 * To avoid duplicated `tags` in `<head>` you can use the `key` property, which will make sure every tag is only rendered once.
 */
function Head({ children }) {
    return (react_1.default.createElement(amp_context_1.AmpStateContext.Consumer, null, ampState => (react_1.default.createElement(head_manager_context_1.HeadManagerContext.Consumer, null, updateHead => (react_1.default.createElement(Effect, { reduceComponentsToState: reduceComponents, handleStateChange: updateHead, inAmpMode: amp_1.isInAmpMode(ampState) }, children))))));
}
Head.rewind = Effect.rewind;
exports.default = Head;


/***/ }),

/***/ "./node_modules/Next/dist/next-server/lib/side-effect.js":
/*!***************************************************************!*\
  !*** ./node_modules/Next/dist/next-server/lib/side-effect.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __webpack_require__(/*! react */ "./node_modules/react/index.js");
const isServer = typeof window === 'undefined';
exports.default = () => {
    const mountedInstances = new Set();
    let state;
    function emitChange(component) {
        state = component.props.reduceComponentsToState([...mountedInstances], component.props);
        if (component.props.handleStateChange) {
            component.props.handleStateChange(state);
        }
    }
    return class extends react_1.Component {
        // Used when server rendering
        static rewind() {
            const recordedState = state;
            state = undefined;
            mountedInstances.clear();
            return recordedState;
        }
        constructor(props) {
            super(props);
            if (isServer) {
                mountedInstances.add(this);
                emitChange(this);
            }
        }
        componentDidMount() {
            mountedInstances.add(this);
            emitChange(this);
        }
        componentDidUpdate() {
            emitChange(this);
        }
        componentWillUnmount() {
            mountedInstances.delete(this);
            emitChange(this);
        }
        render() {
            return null;
        }
    };
};


/***/ }),

/***/ "./pages/Layout.js":
/*!*************************!*\
  !*** ./pages/Layout.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Next_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Next/Head */ "./node_modules/Next/Head.js");
/* harmony import */ var Next_Head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Next_Head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\ReactJS\\reactproject\\next_assingment\\pages\\Layout.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Layout = function Layout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx(Next_Head__WEBPACK_IMPORTED_MODULE_1___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, __jsx("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, props.title || "next.js")), __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: this
  }, props.children));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./pages/about.js":
/*!************************!*\
  !*** ./pages/about.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Layout */ "./pages/Layout.js");
var _jsxFileName = "C:\\ReactJS\\reactproject\\next_assingment\\pages\\about.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var About = function About() {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 3
    },
    __self: this
  }, "About"), __jsx(_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    title: "about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 4
    },
    __self: this
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_lib_input_Password__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/lib/input/Password */ "./node_modules/antd/lib/input/Password.js");
/* harmony import */ var antd_lib_input_Password__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_Password__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _about__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./about */ "./pages/about.js");







var _jsxFileName = "C:\\ReactJS\\reactproject\\next_assingment\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;






var App =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(App, _React$Component);

  function App() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, App);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(App)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "state", {
      userInput: "",
      password: " "
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onButtonPress", function (e) {
      e.preventDefault();

      if (_this.state.userInput === _this.state.password) {
        console.log("you are on new page");
      } else {
        console.log("please enter the valid input");
      }
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(App, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 27
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 28
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 30
          },
          __self: this
        }),
        placeholder: "Username",
        value: this.state.userInput,
        onChange: function onChange(e) {
          _this2.setState({
            userInput: e.target.value
          });
        },
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Icon"], {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 39
          },
          __self: this
        }),
        type: "password",
        placeholder: "Password",
        value: this.state.password,
        onChange: function onChange(e) {
          _this2.setState({
            password: e.target.value
          });
        },
        required: true,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 38
        },
        __self: this
      }), __jsx("center", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 47
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        type: "primary",
        htmlType: "submit",
        onClick: this.onButtonPress,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Log in"))));
    }
  }]);

  return App;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ })

})
//# sourceMappingURL=index.js.7bdd4cadbb7492fca8a0.hot-update.js.map