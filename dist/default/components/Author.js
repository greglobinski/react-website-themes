'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _author = require('../styles/author');

var _author2 = _interopRequireDefault(_author);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Author = function Author(props) {
  var html = props.html,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _author2.default : _props$themeStyle;


  return _react2.default.createElement(
    'div',
    { className: '' + themeStyle },
    _react2.default.createElement('div', { dangerouslySetInnerHTML: { __html: html } })
  );
};

Author.propTypes = {
  html: _propTypes2.default.string,
  themeStyle: _propTypes2.default.string
};

exports.default = Author;