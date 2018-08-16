"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _hero = _interopRequireDefault(require("../styles/hero"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hero = function Hero(props) {
  var html = props.html,
      children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _hero.default : _props$themeStyle;
  return _react.default.createElement(_react.default.Fragment, null, html ? _react.default.createElement("section", {
    className: "".concat(themeStyle),
    dangerouslySetInnerHTML: {
      __html: html
    }
  }) : _react.default.createElement("section", {
    className: "".concat(themeStyle)
  }, children));
};

Hero.propTypes = {
  children: _propTypes.default.node,
  html: _propTypes.default.string,
  themeStyle: _propTypes.default.string
};
var _default = Hero;
exports.default = _default;