"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _page = _interopRequireDefault(require("../styles/page"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(props) {
  var children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _page.default : _props$themeStyle;
  return _react.default.createElement("div", {
    className: "".concat(themeStyle)
  }, children);
};

Page.propTypes = {
  children: _propTypes.default.node,
  themeStyle: _propTypes.default.string
};
var _default = Page;
exports.default = _default;