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
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push({
          pathname: '/success',
          query: {
            firstName: firstName
          }
        });
      }
    });

    _this.state = {
      firstName: "",
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
          lineNumber: 42
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 43
        },
        __self: this
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        className: "ant - advanced - search - form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "First Name",
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 50
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
          lineNumber: 51
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "Last Name",
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 60
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
          lineNumber: 61
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "Age",
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
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
          lineNumber: 74
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 83
        },
        __self: this
      }, __jsx("center", {
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 84
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "",
        type: "primary",
        htmlType: "submit",
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 85
        },
        __self: this
      }, "Save")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2739839685",
        __self: this
      }, ".ant.jsx-2739839685 -.jsx-2739839685 advanced.jsx-2739839685 -.jsx-2739839685 search.jsx-2739839685 -.jsx-2739839685 form.jsx-2739839685{padding:24px;background:#fbfbfb;border:1px solid #d9d9d9;border-radius:6px;}.ant-advanced-search-form.jsx-2739839685 .ant-form-item.jsx-2739839685{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.ant-advanced-search-form.jsx-2739839685 .ant-form-item-control-wrapper.jsx-2739839685{-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSZWFjdEpTXFxyZWFjdHByb2plY3RcXG5leHRfYXNzaW5nbWVudFxccGFnZXNcXHN0dWRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMkZxQixBQUcwQyxBQU9BLEFBSUwsYUFWVyxtQkFDTSxDQVU5Qix3QkFUdUIsaUJBS3RCLENBSkEiLCJmaWxlIjoiQzpcXFJlYWN0SlNcXHJlYWN0cHJvamVjdFxcbmV4dF9hc3NpbmdtZW50XFxwYWdlc1xcc3R1ZGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJvdywgQ29sLCBJbnB1dCwgRm9ybSwgQnV0dG9uLCBMYXlvdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jbGFzcyBTdHVkZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBsYXN0TmFtZTogXCJcIixcclxuICAgICAgICAgICAgYWdlOiBcIlwiXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIG9uU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgY29uc3QgeyBmaXJzdE5hbWUsIGFnZSwgbGFzdE5hbWUgfSA9IHRoaXMuc3RhdGU7XHJcbiAgICAgICAgaWYgKChhZ2UgPT0gXCJcIikgJiYgKGZpcnN0TmFtZSA9PSBcIlwiKSAmJiAobGFzdE5hbWUgPT0gXCJcIikpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJJbnZhbGlkIEFyZ3VtZW50c1wiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIGlmICgoYWdlIDwgMTgpICYmIChmaXJzdE5hbWUgIT09IFwiXCIpICYmIChsYXN0TmFtZSAhPT0gXCJcIikpIHtcclxuICAgICAgICAgICAgYWxlcnQoXCJ5b3UgYXJlIHVuZGVyIDE4IFwiKVxyXG4gICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmlyc3ROYW1lOiBcIlwiLCBsYXN0TmFtZTogXCJcIiwgYWdlOiBcIlwiIH0pO1xyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL3N1Y2Nlc3MnLFxyXG4gICAgICAgICAgICAgICAgcXVlcnk6IHsgZmlyc3ROYW1lIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICB9XHJcblxyXG5cclxuICAgIHJlbmRlcigpIHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8PlxyXG4gICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxGb3JtIGNsYXNzTmFtZT1cImFudCAtIGFkdmFuY2VkIC0gc2VhcmNoIC0gZm9ybVwiID5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJGaXJzdCBOYW1lXCI+Rmlyc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiVXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZT17dGhpcy5zdGF0ZS5maXJzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGZpcnN0TmFtZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkxhc3QgTmFtZVwiPkxhc3QgTmFtZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiTGFzdCBOYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmxhc3ROYW1lfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBsYXN0TmFtZTogZS50YXJnZXQudmFsdWUgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9XCJBZ2VcIj5BZ2U8L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICAgIDxJbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiQWdlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQ9e3RydWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmFnZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgYWdlOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNlbnRlcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gY2xhc3NOYW1lPVwiXCIgdHlwZT1cInByaW1hcnlcIiBodG1sVHlwZT1cInN1Ym1pdFwiIG9uQ2xpY2s9e3RoaXMub25TdWJtaXR9ID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTYXZlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9Gb3JtPlxyXG4gICAgICAgICAgICAgICAgPHN0eWxlIGpzeD5cclxuICAgICAgICAgICAgICAgICAgICB7YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW50IC0gYWR2YW5jZWQgLSBzZWFyY2ggLSBmb3JtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IDI0cHg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmJmYmZiO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2Q5ZDlkOTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDZweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgLmFudC1hZHZhbmNlZC1zZWFyY2gtZm9ybSAuYW50LWZvcm0taXRlbSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAuYW50LWFkdmFuY2VkLXNlYXJjaC1mb3JtIC5hbnQtZm9ybS1pdGVtLWNvbnRyb2wtd3JhcHBlciB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleDogMTtcclxuICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYH1cclxuICAgICAgICAgICAgICAgIDwvc3R5bGU+XHJcbiAgICAgICAgICAgIDwvPlxyXG5cclxuICAgICAgICApXHJcblxyXG4gICAgICAgIC8vIFN0dWRlbnQuZ2V0SW5pdGFpbFByb3BzID0gYXN5bmMgZnVuY3Rpb24gKHByb3BzKSB7XHJcbiAgICAgICAgLy8gICAgIGxldCBmaXJzdE5hbWUgPSB0aGlzLnN0YXRlLmZpcnN0TmFtZTtcclxuXHJcbiAgICAgICAgLy8gICAgIHJldHVybiB7XHJcbiAgICAgICAgLy8gICAgICAgICBmaXJzdE5hbWVcclxuICAgICAgICAvLyAgICAgfVxyXG4gICAgICAgIC8vIH1cclxuXHJcblxyXG5cclxuICAgIH1cclxufVxyXG5leHBvcnQgZGVmYXVsdCBTdHVkZW50Il19 */\n/*@ sourceURL=C:\\\\ReactJS\\\\reactproject\\\\next_assingment\\\\pages\\\\student.js */")); // Student.getInitailProps = async function (props) {
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
//# sourceMappingURL=student.js.51c67d40fc4bf2aadb80.hot-update.js.map