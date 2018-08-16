"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _author = _interopRequireDefault(require("../styles/author"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Author = function Author(props) {
  var html = props.html,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _author.default : _props$themeStyle;
  return _react.default.createElement("div", {
    className: "".concat(themeStyle)
  }, _react.default.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }));
};

Author.propTypes = {
  html: _propTypes.default.string,
  themeStyle: _propTypes.default.string
};
var _default = Author;
exports.default = _default;