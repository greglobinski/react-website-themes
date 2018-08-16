"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _gatsby = require("gatsby");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _meta = _interopRequireDefault(require("../styles/meta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = function Meta(props) {
  var prefix = props.prefix,
      categories = props.categories,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _meta.default : _props$themeStyle,
      author = props.author,
      _props$categoryLink = props.categoryLink,
      categoryLink = _props$categoryLink === void 0 ? true : _props$categoryLink,
      _props$icons = props.icons,
      CalendarIcon = _props$icons.calendar,
      UserIcon = _props$icons.user,
      TagIcon = _props$icons.tag;
  return _react.default.createElement("p", {
    className: "".concat(themeStyle)
  }, _react.default.createElement("span", null, CalendarIcon && _react.default.createElement(CalendarIcon, null), " ", prefix), _react.default.createElement("span", null, UserIcon && _react.default.createElement(UserIcon, null), " ", author), categories && _react.default.createElement("span", null, TagIcon && _react.default.createElement(TagIcon, null), categories.map(function (category) {
    var link = _react.default.createElement(_gatsby.Link, {
      key: category,
      to: "/categories/".concat(category)
    }, category);

    var txt = _react.default.createElement("span", {
      key: category
    }, category);

    return categoryLink ? link : txt;
  })));
};

Meta.propTypes = {
  themeStyle: _propTypes.default.string,
  prefix: _propTypes.default.string,
  categories: _propTypes.default.array,
  author: _propTypes.default.string,
  categoryLink: _propTypes.default.bool,
  icons: _propTypes.default.object
};
var _default = Meta;
exports.default = _default;