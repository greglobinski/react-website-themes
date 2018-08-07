'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Hero = function Hero(props) {
  var html = props.html,
      children = props.children,
      themeStyle = props.themeStyle;


  return _react2.default.createElement(
    _react2.default.Fragment,
    null,
    html ? _react2.default.createElement('section', {
      className: '' + themeStyle,
      dangerouslySetInnerHTML: { __html: html }
    }) : _react2.default.createElement(
      'section',
      { className: '' + themeStyle },
      children
    )
  );
};

Hero.propTypes = {
  children: _propTypes2.default.node,
  html: _propTypes2.default.string,
  themeStyle: _propTypes2.default.string
};

exports.default = Hero;