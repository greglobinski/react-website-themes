"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _Meta = _interopRequireDefault(require("./Meta"));

var _blog = _interopRequireDefault(require("../styles/blog"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function Blog(props) {
  var items = props.items,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _blog.default : _props$themeStyle,
      author = props.author,
      metaIcons = props.metaIcons;
  return _react.default.createElement("div", {
    className: "".concat(themeStyle)
  }, _react.default.createElement("ul", null, items.map(function (item) {
    var _item$frontmatter = item.frontmatter,
        title = _item$frontmatter.title,
        categories = _item$frontmatter.categories,
        _item$fields = item.fields,
        slug = _item$fields.slug,
        prefix = _item$fields.prefix,
        excerpt = item.excerpt;
    return _react.default.createElement("li", {
      key: slug
    }, _react.default.createElement(_gatsby.Link, {
      to: slug
    }, _react.default.createElement("h3", null, title), _react.default.createElement(_Meta.default, {
      categories: categories,
      prefix: prefix,
      author: author,
      categoryLink: false,
      icons: metaIcons
    }), _react.default.createElement("p", null, excerpt)));
  })));
};

Blog.propTypes = {
  items: _propTypes.default.array.isRequired,
  author: _propTypes.default.string,
  themeStyle: _propTypes.default.string,
  metaIcons: _propTypes.default.object
};
var _default = Blog;
exports.default = _default;