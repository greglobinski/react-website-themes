'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var themed = function themed(_ref) {
  var themeStyle = _ref.themeStyle;
  return function (WrappedComponent) {
    var Themed = function Themed(props) {
      return _react2.default.createElement(WrappedComponent, _extends({ themeStyle: '' + themeStyle }, props));
    };

    return Themed;
  };
};

exports.default = themed;