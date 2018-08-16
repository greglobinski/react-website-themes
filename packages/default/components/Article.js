"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _article = _interopRequireDefault(require("../styles/article"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function Article(props) {
  var children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _article.default : _props$themeStyle;
  return _react.default.createElement("article", {
    className: "".concat(themeStyle)
  }, children);
};

Article.propTypes = {
  children: _propTypes.default.node.isRequired,
  themeStyle: _propTypes.default.string
};
var _default = Article;
exports.default = _default;