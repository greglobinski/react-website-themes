'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gatsby = require('gatsby');

var _calendar = require('react-icons/lib/fa/calendar');

var _calendar2 = _interopRequireDefault(_calendar);

var _tag = require('react-icons/lib/fa/tag');

var _tag2 = _interopRequireDefault(_tag);

var _user = require('react-icons/lib/fa/user');

var _user2 = _interopRequireDefault(_user);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Meta = function Meta(props) {
  var prefix = props.prefix,
      categories = props.categories,
      themeStyle = props.themeStyle,
      author = props.author,
      _props$categoryLink = props.categoryLink,
      categoryLink = _props$categoryLink === undefined ? true : _props$categoryLink;


  return _react2.default.createElement(
    'p',
    { className: '' + themeStyle },
    _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_calendar2.default, null),
      ' ',
      prefix
    ),
    _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_user2.default, null),
      ' ',
      author
    ),
    categories && _react2.default.createElement(
      'span',
      null,
      _react2.default.createElement(_tag2.default, null),
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
  categoryLink: _propTypes2.default.bool
};

exports.default = Meta;