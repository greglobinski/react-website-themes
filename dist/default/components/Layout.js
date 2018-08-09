'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

require('typeface-open-sans');

var _layout = require('../styles/layout');

var _layout2 = _interopRequireDefault(_layout);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Layout = function Layout(props) {
  var children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _layout2.default : _props$themeStyle;


  return _react2.default.createElement(
    'div',
    { className: '' + themeStyle },
    _react2.default.createElement(
      'main',
      null,
      children
    )
  );
};

Layout.propTypes = {
  children: _propTypes2.default.node.isRequired,
  themeStyle: _propTypes2.default.string
};

exports.default = Layout;