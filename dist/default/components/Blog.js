'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gatsby = require('gatsby');

var _Meta = require('./Meta');

var _Meta2 = _interopRequireDefault(_Meta);

var _meta = require('../styles/meta');

var _meta2 = _interopRequireDefault(_meta);

var _blog = require('../styles/blog');

var _blog2 = _interopRequireDefault(_blog);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Blog = function Blog(props) {
  var items = props.items,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _blog2.default : _props$themeStyle,
      author = props.author,
      metaIcons = props.metaIcons;


  return _react2.default.createElement(
    'div',
    { className: '' + themeStyle },
    _react2.default.createElement(
      'ul',
      null,
      items.map(function (item) {
        var _item$frontmatter = item.frontmatter,
            title = _item$frontmatter.title,
            categories = _item$frontmatter.categories,
            _item$fields = item.fields,
            slug = _item$fields.slug,
            prefix = _item$fields.prefix,
            excerpt = item.excerpt;


        return _react2.default.createElement(
          'li',
          { key: slug },
          _react2.default.createElement(
            _gatsby.Link,
            { to: slug },
            _react2.default.createElement(
              'h3',
              null,
              title
            ),
            _react2.default.createElement(_Meta2.default, {
              themeStyle: _meta2.default,
              categories: categories,
              prefix: prefix,
              author: author,
              categoryLink: false,
              icons: metaIcons
            }),
            _react2.default.createElement(
              'p',
              null,
              excerpt
            )
          )
        );
      })
    )
  );
};

Blog.propTypes = {
  items: _propTypes2.default.array.isRequired,
  author: _propTypes2.default.string,
  themeStyle: _propTypes2.default.string,
  metaIcons: _propTypes2.default.object
};

exports.default = Blog;