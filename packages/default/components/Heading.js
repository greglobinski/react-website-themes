"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _heading = _interopRequireDefault(require("../styles/heading"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = function Heading(props) {
  var title = props.title,
      children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _heading.default : _props$themeStyle;
  return _react.default.createElement("header", {
    className: "".concat(themeStyle)
  }, title ? _react.default.createElement("h1", null, title) : children);
};

Heading.propTypes = {
  title: _propTypes.default.string,
  children: _propTypes.default.node,
  themeStyle: _propTypes.default.string
};
var _default = Heading;
exports.default = _default;