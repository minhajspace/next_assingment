webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! no exports provided */
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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var _student__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./student */ "./pages/student.js");







var _jsxFileName = "C:\\ReactJS\\reactproject\\next_assingment\\pages\\index.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement;



var NormalLoginForm =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(NormalLoginForm, _React$Component);

  function NormalLoginForm() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, NormalLoginForm);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(NormalLoginForm)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "handleSubmit", function (e) {
      e.preventDefault();

      _this.props.form.validateFields(function (err, values) {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(NormalLoginForm, [{
    key: "render",
    value: function render() {
      var getFieldDecorator = this.props.form.getFieldDecorator;
      return __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Form"], {
        onSubmit: this.handleSubmit,
        className: "login-form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 18
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Form"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 19
        },
        __self: this
      }, getFieldDecorator('username', {
        rules: [{
          required: true,
          message: 'Please input your username!'
        }]
      })(__jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          type: "user",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 24
          },
          __self: this
        }),
        placeholder: "Username",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 23
        },
        __self: this
      }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Form"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 29
        },
        __self: this
      }, getFieldDecorator('password', {
        rules: [{
          required: true,
          message: 'Please input your Password!'
        }]
      })(__jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Input"], {
        prefix: __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Icon"], {
          type: "lock",
          style: {
            color: 'rgba(0,0,0,.25)'
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 34
          },
          __self: this
        }),
        type: "password",
        placeholder: "Password",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 33
        },
        __self: this
      }))), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Form"].Item, {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 40
        },
        __self: this
      }, getFieldDecorator('remember', {
        valuePropName: 'checked',
        initialValue: true
      })(__jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Checkbox"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 44
        },
        __self: this
      }, "Remember me")), __jsx("a", {
        className: "login-form-forgot",
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, "Forgot password"), __jsx(antd__WEBPACK_IMPORTED_MODULE_8__["Button"], {
        type: "primary",
        htmlType: "submit",
        className: "login-form-button",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, "Log in"), "Or ", __jsx("a", {
        href: "",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, "register now!")));
    }
  }]);

  return NormalLoginForm;
}(react__WEBPACK_IMPORTED_MODULE_7___default.a.Component);

var WrappedNormalLoginForm = antd__WEBPACK_IMPORTED_MODULE_8__["Form"].create({
  name: 'normal_login'
})(NormalLoginForm); // ReactDOM.render(<WrappedNormalLoginForm />, mountNode);
// #components - form - demo - normal - login.login - form {
//     max - width: 300px;
// }
// #components - form - demo - normal - login.login - form - forgot {
//     float: right;
// }
// #components - form - demo - normal - login.login - form - button {
//     width: 100 %;
// }
// import "antd/dist/antd.css";
// import React from 'react'
// import { Form, Icon, Input, Button } from 'antd';
// import student from './student'
// import { Link } from 'next/link'
// import Router from 'next/router'
// class App extends React.Component {
//     state = {
//         userInput: "",
//         password: "",
//         errorUserInput: "",
//         errorPassword: ""
//     }
//     onButtonPress = (e) => {
//         e.preventDefault();
//         if (this.state.userInput === this.state.password) {
//             console.log("you are no next page")
//         } else {
//             console.log("wrong")
//         }
//     }
//     onVolid = () => {
//         if (!this.state.userInput.includes("@")) {
//             this.setState({ errorUserInput: "Involid user name" })
//         } else {
//             console.log("form invoid")
//         }
//     }
//     render() {
//         return (<div>
//             <Form onSubmit={this.onValid}>
//                 <Input
//                     prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                     placeholder="Username"
//                     type="email"
//                     value={this.state.userInput}
//                     required
//                     onChange={(e) => { this.setState({ userInput: e.target.value }) }}
//                 />
//                 <p>{this.state.errorUserInput}</p>
//                 <Input
//                     prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
//                     type="password"
//                     placeholder="Password"
//                     value={this.state.password}
//                     onChange={(e) => { this.setState({ password: e.target.value }) }}
//                     required
//                 />
//                 <center>
//                     <Button type="primary" htmlType="submit" onClick={this.onButtonPress} type="submit">
//                         Log in
//           </Button>
//                 </center>
//             </Form>
//         </div >
//         )
//     }
// }
// export default App;

/***/ })

})
//# sourceMappingURL=index.js.eeaff3da1600fa35bed9.hot-update.js.map