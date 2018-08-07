'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _gatsby = require('gatsby');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Branding = function Branding(props) {
  var title = props.title,
      subTitle = props.subTitle,
      themeStyle = props.themeStyle;


  return _react2.default.createElement(
    _gatsby.Link,
    { className: '' + themeStyle, to: '/' },
    _react2.default.createElement(
      'h1',
      null,
      title
    ),
    _react2.default.createElement(
      'p',
      null,
      subTitle
    )
  );
};

Branding.propTypes = {
  title: _propTypes2.default.string,
  subTitle: _propTypes2.default.string,
  logo: _propTypes2.default.node,
  themeStyle: _propTypes2.default.string
};

exports.default = Branding;