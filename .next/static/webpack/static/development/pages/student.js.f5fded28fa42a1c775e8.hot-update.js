webpackHotUpdate("static\\development\\pages\\student.js",{

/***/ "./pages/student.js":
/*!**************************!*\
  !*** ./pages/student.js ***!
  \**************************/
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
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var antd__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! antd */ "./node_modules/antd/es/index.js");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! antd/dist/antd.css */ "./node_modules/antd/dist/antd.css");
/* harmony import */ var antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(antd_dist_antd_css__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);







var _jsxFileName = "C:\\ReactJS\\reactproject\\next_assingment\\pages\\student.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_8___default.a.createElement;





var Student =
/*#__PURE__*/
function (_React$Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Student, _React$Component);

  function Student(props) {
    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Student);

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Student).call(this, props));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "onSubmit", function (e) {
      e.preventDefault();
      var _this$state = _this.state,
          firstName = _this$state.firstName,
          age = _this$state.age,
          lastName = _this$state.lastName;

      if (age == "" && firstName == "" && lastName == "") {
        alert("Invalid Arguments");
      } else if (age < 18 && firstName !== "" && lastName !== "") {
        alert("you are under 18 ");

        _this.setState({
          firstName: "",
          lastName: "",
          age: ""
        });
      } else {
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/success', {
          state: {
            firstName: firstName
          }
        }); // handleClick = employee => e => {
        //     this.props.history.push("/details", {
        //         state: {
        //             details: employee
        //         }
        //     });
        // };
      }
    });

    _this.state = {
      firstName: "Minhaj ahmad khan",
      lastName: "",
      age: ""
    };
    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Student, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      return __jsx(react__WEBPACK_IMPORTED_MODULE_8___default.a.Fragment, null, __jsx("div", {
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 49
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
        },
        __self: this
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        className: "ant - advanced - search - form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "First Name",
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 57
        },
        __self: this
      }, "First Name"), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        placeholder: "Username",
        required: true,
        value: this.state.firstName,
        onChange: function onChange(e) {
          _this2.setState({
            firstName: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 58
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "Last Name",
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, "Last Name"), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "text",
        placeholder: "Last Name",
        required: true,
        value: this.state.lastName,
        onChange: function onChange(e) {
          _this2.setState({
            lastName: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 68
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "Age",
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 80
        },
        __self: this
      }, "Age"), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Input"], {
        type: "text",
        placeholder: "Age",
        required: true,
        value: this.state.age,
        onChange: function onChange(e) {
          _this2.setState({
            age: e.target.value
          });
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 90
        },
        __self: this
      }, __jsx("center", {
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "",
        type: "primary",
        htmlType: "submit",
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 92
        },
        __self: this
      }, "Save")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2739839685",
        __self: this
      }, ".ant.jsx-2739839685 -.jsx-2739839685 advanced.jsx-2739839685 -.jsx-2739839685 search.jsx-2739839685 -.jsx-2739839685 form.jsx-2739839685{padding:24px;background:#fbfbfb;border:1px solid #d9d9d9;border-radius:6px;}.ant-advanced-search-form.jsx-2739839685 .ant-form-item.jsx-2739839685{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.ant-advanced-search-form.jsx-2739839685 .ant-form-item-control-wrapper.jsx-2739839685{-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSZWFjdEpTXFxyZWFjdHByb2plY3RcXG5leHRfYXNzaW5nbWVudFxccGFnZXNcXHN0dWRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0dxQixBQUcwQyxBQU9BLEFBSUwsYUFWVyxtQkFDTSxDQVU5Qix3QkFUdUIsaUJBS3RCLENBSkEiLCJmaWxlIjoiQzpcXFJlYWN0SlNcXHJlYWN0cHJvamVjdFxcbmV4dF9hc3NpbmdtZW50XFxwYWdlc1xcc3R1ZGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJvdywgQ29sLCBJbnB1dCwgRm9ybSwgQnV0dG9uLCBMYXlvdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jbGFzcyBTdHVkZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIk1pbmhhaiBhaG1hZCBraGFuXCIsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBhZ2U6IFwiXCJcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IGZpcnN0TmFtZSwgYWdlLCBsYXN0TmFtZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoKGFnZSA9PSBcIlwiKSAmJiAoZmlyc3ROYW1lID09IFwiXCIpICYmIChsYXN0TmFtZSA9PSBcIlwiKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIkludmFsaWQgQXJndW1lbnRzXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChhZ2UgPCAxOCkgJiYgKGZpcnN0TmFtZSAhPT0gXCJcIikgJiYgKGxhc3ROYW1lICE9PSBcIlwiKSkge1xyXG4gICAgICAgICAgICBhbGVydChcInlvdSBhcmUgdW5kZXIgMTggXCIpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaXJzdE5hbWU6IFwiXCIsIGxhc3ROYW1lOiBcIlwiLCBhZ2U6IFwiXCIgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2goJy9zdWNjZXNzJywge1xyXG4gICAgICAgICAgICAgICAgc3RhdGU6IHtcclxuICAgICAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvLyBoYW5kbGVDbGljayA9IGVtcGxveWVlID0+IGUgPT4ge1xyXG4gICAgICAgICAgICAvLyAgICAgdGhpcy5wcm9wcy5oaXN0b3J5LnB1c2goXCIvZGV0YWlsc1wiLCB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgc3RhdGU6IHtcclxuICAgICAgICAgICAgLy8gICAgICAgICAgICAgZGV0YWlsczogZW1wbG95ZWVcclxuICAgICAgICAgICAgLy8gICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vICAgICB9KTtcclxuICAgICAgICAgICAgLy8gfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG5cclxuXHJcbiAgICByZW5kZXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIChcclxuICAgICAgICAgICAgPD5cclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8Rm9ybSBjbGFzc05hbWU9XCJhbnQgLSBhZHZhbmNlZCAtIHNlYXJjaCAtIGZvcm1cIiA+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiRmlyc3QgTmFtZVwiPkZpcnN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuZmlyc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaXJzdE5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJMYXN0IE5hbWVcIj5MYXN0IE5hbWU8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkxhc3QgTmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5sYXN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgbGFzdE5hbWU6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiQWdlXCI+QWdlPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkFnZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkPXt0cnVlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5hZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGFnZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjZW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8QnV0dG9uIGNsYXNzTmFtZT1cIlwiIHR5cGU9XCJwcmltYXJ5XCIgaHRtbFR5cGU9XCJzdWJtaXRcIiBvbkNsaWNrPXt0aGlzLm9uU3VibWl0fSA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgU2F2ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvQnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvRm9ybT5cclxuICAgICAgICAgICAgICAgIDxzdHlsZSBqc3g+XHJcbiAgICAgICAgICAgICAgICAgICAge2BcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFudCAtIGFkdmFuY2VkIC0gc2VhcmNoIC0gZm9ybSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAyNHB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZDogI2ZiZmJmYjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgIC5hbnQtYWR2YW5jZWQtc2VhcmNoLWZvcm0gLmFudC1mb3JtLWl0ZW0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAgICAgLmFudC1hZHZhbmNlZC1zZWFyY2gtZm9ybSAuYW50LWZvcm0taXRlbS1jb250cm9sLXdyYXBwZXIge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXg6IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGB9XHJcbiAgICAgICAgICAgICAgICA8L3N0eWxlPlxyXG4gICAgICAgICAgICA8Lz5cclxuXHJcbiAgICAgICAgKVxyXG5cclxuICAgICAgICAvLyBTdHVkZW50LmdldEluaXRhaWxQcm9wcyA9IGFzeW5jIGZ1bmN0aW9uIChwcm9wcykge1xyXG4gICAgICAgIC8vICAgICBsZXQgZmlyc3ROYW1lID0gdGhpcy5zdGF0ZS5maXJzdE5hbWU7XHJcblxyXG4gICAgICAgIC8vICAgICByZXR1cm4ge1xyXG4gICAgICAgIC8vICAgICAgICAgZmlyc3ROYW1lXHJcbiAgICAgICAgLy8gICAgIH1cclxuICAgICAgICAvLyB9XHJcblxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgU3R1ZGVudCJdfQ== */\n/*@ sourceURL=C:\\\\ReactJS\\\\reactproject\\\\next_assingment\\\\pages\\\\student.js */")); // Student.getInitailProps = async function (props) {
      //     let firstName = this.state.firstName;
      //     return {
      //         firstName
      //     }
      // }
    }
  }]);

  return Student;
}(react__WEBPACK_IMPORTED_MODULE_8___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (Student);

/***/ })

})
//# sourceMappingURL=student.js.f5fded28fa42a1c775e8.hot-update.js.map