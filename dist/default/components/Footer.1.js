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

var Footer = function Footer(props) {
  var links = props.links,
      copyright = props.copyright,
      themeStyle = props.themeStyle;


  return _react2.default.createElement(
    'footer',
    { className: '' + themeStyle },
    _react2.default.createElement('div', { className: 'links', dangerouslySetInnerHTML: { __html: links } }),
    _react2.default.createElement('div', {
      className: 'copyright',
      dangerouslySetInnerHTML: { __html: copyright }
    })
  );
};

Footer.propTypes = {
  links: _propTypes2.default.string,
  copyright: _propTypes2.default.string,
  themeStyle: _propTypes2.default.string
};

exports.default = Footer;