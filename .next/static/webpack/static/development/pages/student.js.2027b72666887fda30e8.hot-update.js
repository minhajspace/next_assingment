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
        next_router__WEBPACK_IMPORTED_MODULE_11___default.a.pushRoute('/success', {
          firstName: firstName
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
          lineNumber: 45
        },
        __self: this
      }, __jsx("div", {
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      })), __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Form"], {
        className: "ant - advanced - search - form",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 51
        },
        __self: this
      }, __jsx("label", {
        htmlFor: "First Name",
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 53
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
          lineNumber: 54
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "Last Name",
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
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
          lineNumber: 64
        },
        __self: this
      }), __jsx("label", {
        htmlFor: "Age",
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
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
          lineNumber: 77
        },
        __self: this
      }), __jsx("div", {
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 86
        },
        __self: this
      }, __jsx("center", {
        className: "jsx-2739839685",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 87
        },
        __self: this
      }, __jsx(antd__WEBPACK_IMPORTED_MODULE_9__["Button"], {
        className: "",
        type: "primary",
        htmlType: "submit",
        onClick: this.onSubmit,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, "Save")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_7___default.a, {
        id: "2739839685",
        __self: this
      }, ".ant.jsx-2739839685 -.jsx-2739839685 advanced.jsx-2739839685 -.jsx-2739839685 search.jsx-2739839685 -.jsx-2739839685 form.jsx-2739839685{padding:24px;background:#fbfbfb;border:1px solid #d9d9d9;border-radius:6px;}.ant-advanced-search-form.jsx-2739839685 .ant-form-item.jsx-2739839685{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.ant-advanced-search-form.jsx-2739839685 .ant-form-item-control-wrapper.jsx-2739839685{-webkit-flex:1;-ms-flex:1;flex:1;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxSZWFjdEpTXFxyZWFjdHByb2plY3RcXG5leHRfYXNzaW5nbWVudFxccGFnZXNcXHN0dWRlbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOEZxQixBQUcwQyxBQU9BLEFBSUwsYUFWVyxtQkFDTSxDQVU5Qix3QkFUdUIsaUJBS3RCLENBSkEiLCJmaWxlIjoiQzpcXFJlYWN0SlNcXHJlYWN0cHJvamVjdFxcbmV4dF9hc3NpbmdtZW50XFxwYWdlc1xcc3R1ZGVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXHJcbmltcG9ydCB7IFJvdywgQ29sLCBJbnB1dCwgRm9ybSwgQnV0dG9uLCBMYXlvdXQgfSBmcm9tICdhbnRkJztcclxuaW1wb3J0IFwiYW50ZC9kaXN0L2FudGQuY3NzXCI7XHJcbmltcG9ydCBSb3V0ZXIgZnJvbSAnbmV4dC9yb3V0ZXInXHJcblxyXG5jbGFzcyBTdHVkZW50IGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3BzKSB7XHJcbiAgICAgICAgc3VwZXIocHJvcHMpXHJcbiAgICAgICAgdGhpcy5zdGF0ZSA9IHtcclxuICAgICAgICAgICAgZmlyc3ROYW1lOiBcIk1pbmhhaiBhaG1hZCBraGFuXCIsXHJcbiAgICAgICAgICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgICAgICAgICBhZ2U6IFwiXCJcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgb25TdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBjb25zdCB7IGZpcnN0TmFtZSwgYWdlLCBsYXN0TmFtZSB9ID0gdGhpcy5zdGF0ZTtcclxuICAgICAgICBpZiAoKGFnZSA9PSBcIlwiKSAmJiAoZmlyc3ROYW1lID09IFwiXCIpICYmIChsYXN0TmFtZSA9PSBcIlwiKSkge1xyXG4gICAgICAgICAgICBhbGVydChcIkludmFsaWQgQXJndW1lbnRzXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKChhZ2UgPCAxOCkgJiYgKGZpcnN0TmFtZSAhPT0gXCJcIikgJiYgKGxhc3ROYW1lICE9PSBcIlwiKSkge1xyXG4gICAgICAgICAgICBhbGVydChcInlvdSBhcmUgdW5kZXIgMTggXCIpXHJcbiAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBmaXJzdE5hbWU6IFwiXCIsIGxhc3ROYW1lOiBcIlwiLCBhZ2U6IFwiXCIgfSk7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgUm91dGVyLnB1c2hSb3V0ZSgnL3N1Y2Nlc3MnLCB7IGZpcnN0TmFtZSB9KTtcclxuICAgICAgICAgICAgLy8gaGFuZGxlQ2xpY2sgPSBlbXBsb3llZSA9PiBlID0+IHtcclxuICAgICAgICAgICAgLy8gICAgIHRoaXMucHJvcHMuaGlzdG9yeS5wdXNoKFwiL2RldGFpbHNcIiwge1xyXG4gICAgICAgICAgICAvLyAgICAgICAgIHN0YXRlOiB7XHJcbiAgICAgICAgICAgIC8vICAgICAgICAgICAgIGRldGFpbHM6IGVtcGxveWVlXHJcbiAgICAgICAgICAgIC8vICAgICAgICAgfVxyXG4gICAgICAgICAgICAvLyAgICAgfSk7XHJcbiAgICAgICAgICAgIC8vIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxuXHJcblxyXG4gICAgcmVuZGVyKCkge1xyXG4gICAgICAgIHJldHVybiAoXHJcbiAgICAgICAgICAgIDw+XHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPEZvcm0gY2xhc3NOYW1lPVwiYW50IC0gYWR2YW5jZWQgLSBzZWFyY2ggLSBmb3JtXCIgPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkZpcnN0IE5hbWVcIj5GaXJzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJVc2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlPXt0aGlzLnN0YXRlLmZpcnN0TmFtZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9eyhlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFN0YXRlKHsgZmlyc3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPVwiTGFzdCBOYW1lXCI+TGFzdCBOYW1lPC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgICA8SW5wdXRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJMYXN0IE5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUubGFzdE5hbWV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXsoZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTdGF0ZSh7IGxhc3ROYW1lOiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG5cclxuICAgICAgICAgICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj1cIkFnZVwiPkFnZTwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPElucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJBZ2VcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZD17dHJ1ZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3RoaXMuc3RhdGUuYWdlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkNoYW5nZT17KGUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2V0U3RhdGUoeyBhZ2U6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y2VudGVyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPEJ1dHRvbiBjbGFzc05hbWU9XCJcIiB0eXBlPVwicHJpbWFyeVwiIGh0bWxUeXBlPVwic3VibWl0XCIgb25DbGljaz17dGhpcy5vblN1Ym1pdH0gPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFNhdmVcclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L0J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jZW50ZXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L0Zvcm0+XHJcbiAgICAgICAgICAgICAgICA8c3R5bGUganN4PlxyXG4gICAgICAgICAgICAgICAgICAgIHtgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbnQgLSBhZHZhbmNlZCAtIHNlYXJjaCAtIGZvcm0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogMjRweDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmQ6ICNmYmZiZmI7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjZDlkOWQ5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogNnB4O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAuYW50LWFkdmFuY2VkLXNlYXJjaC1mb3JtIC5hbnQtZm9ybS1pdGVtIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC5hbnQtYWR2YW5jZWQtc2VhcmNoLWZvcm0gLmFudC1mb3JtLWl0ZW0tY29udHJvbC13cmFwcGVyIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4OiAxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBgfVxyXG4gICAgICAgICAgICAgICAgPC9zdHlsZT5cclxuICAgICAgICAgICAgPC8+XHJcblxyXG4gICAgICAgIClcclxuXHJcbiAgICAgICAgLy8gU3R1ZGVudC5nZXRJbml0YWlsUHJvcHMgPSBhc3luYyBmdW5jdGlvbiAocHJvcHMpIHtcclxuICAgICAgICAvLyAgICAgbGV0IGZpcnN0TmFtZSA9IHRoaXMuc3RhdGUuZmlyc3ROYW1lO1xyXG5cclxuICAgICAgICAvLyAgICAgcmV0dXJuIHtcclxuICAgICAgICAvLyAgICAgICAgIGZpcnN0TmFtZVxyXG4gICAgICAgIC8vICAgICB9XHJcbiAgICAgICAgLy8gfVxyXG5cclxuXHJcblxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFN0dWRlbnQiXX0= */\n/*@ sourceURL=C:\\\\ReactJS\\\\reactproject\\\\next_assingment\\\\pages\\\\student.js */")); // Student.getInitailProps = async function (props) {
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
//# sourceMappingURL=student.js.2027b72666887fda30e8.hot-update.js.map