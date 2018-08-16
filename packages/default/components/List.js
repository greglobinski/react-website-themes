"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gatsby = require("gatsby");

var _list = _interopRequireDefault(require("../styles/list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(props) {
  var items = props.items,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _list.default : _props$themeStyle;
  return _react.default.createElement("div", {
    className: "".concat(themeStyle)
  }, _react.default.createElement("ul", null, items.map(function (item) {
    var title = item.frontmatter.title,
        slug = item.fields.slug;
    return _react.default.createElement("li", {
      key: slug
    }, _react.default.createElement(_gatsby.Link, {
      to: slug,
      activeClassName: "active"
    }, title));
  })));
};

List.propTypes = {
  items: _propTypes.default.array.isRequired,
  themeStyle: _propTypes.default.string
};
var _default = List;
exports.default = _default;