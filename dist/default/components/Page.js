'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _page = require('../styles/page');

var _page2 = _interopRequireDefault(_page);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(props) {
  var children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _page2.default : _props$themeStyle;


  return _react2.default.createElement(
    'div',
    { className: '' + themeStyle },
    children
  );
};

Page.propTypes = {
  children: _propTypes2.default.node,
  themeStyle: _propTypes2.default.string
};

exports.default = Page;