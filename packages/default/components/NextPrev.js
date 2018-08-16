"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gatsby = require("gatsby");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _nextPrev = _interopRequireDefault(require("../styles/nextPrev"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextPrev = function NextPrev(props) {
  var _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _nextPrev.default : _props$themeStyle,
      _props$icons = props.icons,
      NextIcon = _props$icons.next,
      PrevIcon = _props$icons.prev,
      _props$next = props.next;
  _props$next = _props$next === void 0 ? {} : _props$next;
  var _props$next$fields = _props$next.fields;
  _props$next$fields = _props$next$fields === void 0 ? {} : _props$next$fields;
  var nextPrefix = _props$next$fields.prefix,
      nextSlug = _props$next$fields.slug,
      _props$next$frontmatt = _props$next.frontmatter;
  _props$next$frontmatt = _props$next$frontmatt === void 0 ? {} : _props$next$frontmatt;
  var nextTitle = _props$next$frontmatt.title,
      _props$prev = props.prev;
  _props$prev = _props$prev === void 0 ? {} : _props$prev;
  var _props$prev$fields = _props$prev.fields;
  _props$prev$fields = _props$prev$fields === void 0 ? {} : _props$prev$fields;
  var prevPrefix = _props$prev$fields.prefix,
      prevSlug = _props$prev$fields.slug,
      _props$prev$frontmatt = _props$prev.frontmatter;
  _props$prev$frontmatt = _props$prev$frontmatt === void 0 ? {} : _props$prev$frontmatt;
  var prevTitle = _props$prev$frontmatt.title;
  return _react.default.createElement("div", {
    className: "".concat(themeStyle)
  }, prevSlug && _react.default.createElement(_gatsby.Link, {
    to: prevSlug,
    className: "prev"
  }, PrevIcon && _react.default.createElement(PrevIcon, null), _react.default.createElement("p", null, prevTitle, " ", _react.default.createElement("time", null, prevPrefix))), nextSlug && _react.default.createElement(_gatsby.Link, {
    to: nextSlug,
    className: "next"
  }, NextIcon && _react.default.createElement(NextIcon, null), _react.default.createElement("p", null, nextTitle, " ", _react.default.createElement("time", null, nextPrefix, " "))));
};

NextPrev.propTypes = {
  next: _propTypes.default.object,
  prev: _propTypes.default.object,
  themeStyle: _propTypes.default.string,
  icons: _propTypes.default.object
};
var _default = NextPrev;
exports.default = _default;