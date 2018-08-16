"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

require("../styles/global");

var _layout = _interopRequireDefault(require("../styles/layout"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  var children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _layout.default : _props$themeStyle;
  return _react.default.createElement("div", {
    className: "".concat(themeStyle)
  }, _react.default.createElement("main", null, children));
};

Layout.propTypes = {
  children: _propTypes.default.node.isRequired,
  themeStyle: _propTypes.default.string
};
var _default = Layout;
exports.default = _default;