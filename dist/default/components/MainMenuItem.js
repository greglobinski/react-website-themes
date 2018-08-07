'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gatsby = require('gatsby');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var MainMenuItem = function MainMenuItem(props) {
  var label = props.label,
      to = props.to,
      Icon = props.icon,
      themeStyle = props.themeStyle;


  return _react2.default.createElement(
    'li',
    { className: '' + themeStyle },
    _react2.default.createElement(
      _gatsby.Link,
      { to: to },
      Icon && _react2.default.createElement(Icon, null),
      label
    )
  );
};

MainMenuItem.propTypes = {
  label: _propTypes2.default.string.isRequired,
  to: _propTypes2.default.string.isRequired,
  themeStyle: _propTypes2.default.string
};

exports.default = MainMenuItem;