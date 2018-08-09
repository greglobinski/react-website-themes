'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _footer = require('../styles/footer');

var _footer2 = _interopRequireDefault(_footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  var links = props.links,
      copyright = props.copyright,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _footer2.default : _props$themeStyle;


  return _react2.default.createElement(
    'footer',
    { className: '' + themeStyle },
    _react2.default.createElement('div', { className: 'links', dangerouslySetInnerHTML: { __html: links } }),
    _react2.default.createElement('div', {
      className: 'copyright',
      dangerouslySetInnerHTML: { __html: copyright }
    }),
    _react2.default.createElement(
      'div',
      { className: 'credits' },
      'Built with',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/greglobinski/gatsby-starter-kit' },
        'GatsbyJS Starter Kit'
      ),
      '. Design by',
      ' ',
      _react2.default.createElement(
        'a',
        { href: 'https://github.com/greglobinski/react-website-themes' },
        'React Website Themes'
      ),
      '.'
    )
  );
};

Footer.propTypes = {
  links: _propTypes2.default.string,
  copyright: _propTypes2.default.string,
  themeStyle: _propTypes2.default.string
};

exports.default = Footer;