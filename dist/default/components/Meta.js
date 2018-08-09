'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gatsby = require('gatsby');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _meta = require('../styles/meta');

var _meta2 = _interopRequireDefault(_meta);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = function Meta(props) {
  var prefix = props.prefix,
      categories = props.categories,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _meta2.default : _props$themeStyle,
      author = props.author,
      _props$categoryLink = props.categoryLink,
      categoryLink = _props$categoryLink === undefined ? true : _props$categoryLink,
      _props$icons = props.icons,
      CalendarIcon = _props$icons.calendar,
      UserIcon = _props$icons.user,
      TagIcon = _props$icons.tag;


  return _react2.default.createElement(
    'p',
    { className: '' + themeStyle },
    _react2.default.createElement(
      'span',
      null,
      CalendarIcon && _react2.default.createElement(CalendarIcon, null),
      ' ',
      prefix
    ),
    _react2.default.createElement(
      'span',
      null,
      UserIcon && _react2.default.createElement(UserIcon, null),
      ' ',
      author
    ),
    categories && _react2.default.createElement(
      'span',
      null,
      TagIcon && _react2.default.createElement(TagIcon, null),
      categories.map(function (category) {
        var link = _react2.default.createElement(
          _gatsby.Link,
          { key: category, to: '/categories/' + category },
          category
        );
        var txt = _react2.default.createElement(
          'span',
          { key: category },
          category
        );

        return categoryLink ? link : txt;
      })
    )
  );
};

Meta.propTypes = {
  themeStyle: _propTypes2.default.string,
  prefix: _propTypes2.default.string,
  categories: _propTypes2.default.array,
  author: _propTypes2.default.string,
  categoryLink: _propTypes2.default.bool,
  icons: _propTypes2.default.object
};

exports.default = Meta;