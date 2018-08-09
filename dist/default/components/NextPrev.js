'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gatsby = require('gatsby');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _nextPrev = require('../styles/nextPrev');

var _nextPrev2 = _interopRequireDefault(_nextPrev);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NextPrev = function NextPrev(props) {
  var _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _nextPrev2.default : _props$themeStyle,
      _props$icons = props.icons,
      NextIcon = _props$icons.next,
      PrevIcon = _props$icons.prev,
      _props$next = props.next;
  _props$next = _props$next === undefined ? {} : _props$next;
  var _props$next$fields = _props$next.fields;
  _props$next$fields = _props$next$fields === undefined ? {} : _props$next$fields;
  var nextPrefix = _props$next$fields.prefix,
      nextSlug = _props$next$fields.slug,
      _props$next$frontmatt = _props$next.frontmatter;
  _props$next$frontmatt = _props$next$frontmatt === undefined ? {} : _props$next$frontmatt;
  var nextTitle = _props$next$frontmatt.title,
      _props$prev = props.prev;
  _props$prev = _props$prev === undefined ? {} : _props$prev;
  var _props$prev$fields = _props$prev.fields;
  _props$prev$fields = _props$prev$fields === undefined ? {} : _props$prev$fields;
  var prevPrefix = _props$prev$fields.prefix,
      prevSlug = _props$prev$fields.slug,
      _props$prev$frontmatt = _props$prev.frontmatter;
  _props$prev$frontmatt = _props$prev$frontmatt === undefined ? {} : _props$prev$frontmatt;
  var prevTitle = _props$prev$frontmatt.title;


  return _react2.default.createElement(
    'div',
    { className: '' + themeStyle },
    prevSlug && _react2.default.createElement(
      _gatsby.Link,
      { to: prevSlug, className: 'prev' },
      PrevIcon && _react2.default.createElement(PrevIcon, null),
      _react2.default.createElement(
        'p',
        null,
        prevTitle,
        ' ',
        _react2.default.createElement(
          'time',
          null,
          prevPrefix
        )
      )
    ),
    nextSlug && _react2.default.createElement(
      _gatsby.Link,
      { to: nextSlug, className: 'next' },
      NextIcon && _react2.default.createElement(NextIcon, null),
      _react2.default.createElement(
        'p',
        null,
        nextTitle,
        ' ',
        _react2.default.createElement(
          'time',
          null,
          nextPrefix,
          ' '
        )
      )
    )
  );
};

NextPrev.propTypes = {
  next: _propTypes2.default.object,
  prev: _propTypes2.default.object,
  themeStyle: _propTypes2.default.string,
  icons: _propTypes2.default.object
};

exports.default = NextPrev;