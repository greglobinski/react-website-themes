'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCustomShare = require('react-custom-share');

var _twitter = require('react-icons/lib/fa/twitter');

var _twitter2 = _interopRequireDefault(_twitter);

var _facebook = require('react-icons/lib/fa/facebook');

var _facebook2 = _interopRequireDefault(_facebook);

var _googlePlus = require('react-icons/lib/fa/google-plus');

var _googlePlus2 = _interopRequireDefault(_googlePlus);

var _linkedin = require('react-icons/lib/fa/linkedin');

var _linkedin2 = _interopRequireDefault(_linkedin);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostShare = function PostShare(props) {
  var themeStyle = props.themeStyle,
      slug = props.slug,
      title = props.title,
      siteUrl = props.siteUrl,
      excerpt = props.excerpt;


  var url = siteUrl + slug;

  var shareBlockProps = {
    url: url,
    button: _reactCustomShare.ShareButtonRectangle,
    buttons: [{ network: 'Twitter', icon: _twitter2.default }, { network: 'Facebook', icon: _facebook2.default }, { network: 'GooglePlus', icon: _googlePlus2.default }, { network: 'Linkedin', icon: _linkedin2.default }],
    text: title,
    longtext: excerpt
  };

  return _react2.default.createElement(
    'div',
    { className: '' + themeStyle },
    _react2.default.createElement(_reactCustomShare.ShareBlockStandard, shareBlockProps)
  );
};

PostShare.propTypes = {
  slug: _propTypes2.default.string,
  title: _propTypes2.default.string,
  excerpt: _propTypes2.default.string,
  siteUrl: _propTypes2.default.string,
  themeStyle: _propTypes2.default.string
};

exports.default = PostShare;