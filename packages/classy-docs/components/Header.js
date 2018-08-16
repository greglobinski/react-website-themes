"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _header = _interopRequireDefault(require("../styles/header"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _header.default : _props$themeStyle;
  return _react.default.createElement("header", {
    className: "".concat(themeStyle)
  }, children);
};

Header.propTypes = {
  children: _propTypes.default.node,
  themeStyle: _propTypes.default.string
};
var _default = Header;
exports.default = _default;