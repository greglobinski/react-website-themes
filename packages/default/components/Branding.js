"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gatsby = require("gatsby");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _branding = _interopRequireDefault(require("../styles/branding"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Branding = function Branding(props) {
  var title = props.title,
      subTitle = props.subTitle,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _branding.default : _props$themeStyle;
  return _react.default.createElement(_gatsby.Link, {
    className: "".concat(themeStyle),
    to: "/"
  }, _react.default.createElement("h1", null, title), _react.default.createElement("p", null, subTitle));
};

Branding.propTypes = {
  title: _propTypes.default.string,
  subTitle: _propTypes.default.string,
  logo: _propTypes.default.node,
  themeStyle: _propTypes.default.string
};
var _default = Branding;
exports.default = _default;