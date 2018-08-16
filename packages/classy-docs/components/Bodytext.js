"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _bodytext = _interopRequireDefault(require("../styles/bodytext"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Bodytext = function Bodytext(props) {
  var html = props.html,
      children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _bodytext.default : _props$themeStyle;
  return _react.default.createElement(_react.default.Fragment, null, html ? _react.default.createElement("div", {
    className: "".concat(themeStyle),
    dangerouslySetInnerHTML: {
      __html: html
    }
  }) : _react.default.createElement("div", {
    className: "".concat(themeStyle)
  }, children));
};

Bodytext.propTypes = {
  html: _propTypes.default.string,
  themeStyle: _propTypes.default.string
};
var _default = Bodytext;
exports.default = _default;