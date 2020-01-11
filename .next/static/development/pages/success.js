(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["static\\development\\pages\\success.js"],{

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

/***/ "./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsuccess&absolutePagePath=C%3A%5CReactJS%5Creactproject%5Cnext_assingment%5Cpages%5Csuccess.js!./":
/*!****************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsuccess&absolutePagePath=C%3A%5CReactJS%5Creactproject%5Cnext_assingment%5Cpages%5Csuccess.js ***!
  \****************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


    (window.__NEXT_P=window.__NEXT_P||[]).push(["/success", function() {
      var mod = __webpack_require__(/*! ./pages/success.js */ "./pages/success.js")
      if(true) {
        module.hot.accept(/*! ./pages/success.js */ "./pages/success.js", function() {
          if(!next.router.components["/success"]) return
          var updatedPage = __webpack_require__(/*! ./pages/success.js */ "./pages/success.js")
          next.router.update("/success", updatedPage)
        })
      }
      return mod
    }]);
  

/***/ }),

/***/ "./node_modules/react/index.js":
/*!*******************************************************************************************!*\
  !*** delegated ./node_modules/react/index.js from dll-reference dll_ef0ff7c60362f24a921f ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = (__webpack_require__(/*! dll-reference dll_ef0ff7c60362f24a921f */ "dll-reference dll_ef0ff7c60362f24a921f"))("./node_modules/react/index.js");

/***/ }),

/***/ "./pages/success.js":
/*!**************************!*\
  !*** ./pages/success.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Next_Head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Next/Head */ "./node_modules/Next/Head.js");
/* harmony import */ var Next_Head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(Next_Head__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\ReactJS\\reactproject\\next_assingment\\pages\\success.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


var Layout = function Layout(props) {
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "hello"));
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ 4:
/*!********************************************************************************************************************************************!*\
  !*** multi next-client-pages-loader?page=%2Fsuccess&absolutePagePath=C%3A%5CReactJS%5Creactproject%5Cnext_assingment%5Cpages%5Csuccess.js ***!
  \********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! next-client-pages-loader?page=%2Fsuccess&absolutePagePath=C%3A%5CReactJS%5Creactproject%5Cnext_assingment%5Cpages%5Csuccess.js! */"./node_modules/next/dist/build/webpack/loaders/next-client-pages-loader.js?page=%2Fsuccess&absolutePagePath=C%3A%5CReactJS%5Creactproject%5Cnext_assingment%5Cpages%5Csuccess.js!./");


/***/ }),

/***/ "dll-reference dll_ef0ff7c60362f24a921f":
/*!*******************************************!*\
  !*** external "dll_ef0ff7c60362f24a921f" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = dll_ef0ff7c60362f24a921f;

/***/ })

},[[4,"static/runtime/webpack.js"]]]);
//# sourceMappingURL=success.js.map