'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _header = require('../styles/header');

var _header2 = _interopRequireDefault(_header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Header = function Header(props) {
  var children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _header2.default : _props$themeStyle;


  return _react2.default.createElement(
    'header',
    { className: '' + themeStyle },
    children
  );
};

Header.propTypes = {
  children: _propTypes2.default.node,
  themeStyle: _propTypes2.default.string
};

exports.default = Header;