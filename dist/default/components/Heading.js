'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _heading = require('../styles/heading');

var _heading2 = _interopRequireDefault(_heading);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Heading = function Heading(props) {
  var title = props.title,
      children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _heading2.default : _props$themeStyle;


  return _react2.default.createElement(
    'header',
    { className: '' + themeStyle },
    title ? _react2.default.createElement(
      'h1',
      null,
      title
    ) : children
  );
};

Heading.propTypes = {
  title: _propTypes2.default.string,
  children: _propTypes2.default.node,
  themeStyle: _propTypes2.default.string
};

exports.default = Heading;