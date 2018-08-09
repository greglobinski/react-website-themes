'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactFacebook = require('react-facebook');

var _reactFacebook2 = _interopRequireDefault(_reactFacebook);

var _comments = require('../styles/comments');

var _comments2 = _interopRequireDefault(_comments);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comments = function Comments(props) {
  var slug = props.slug,
      siteUrl = props.siteUrl,
      themeStyle = props.themeStyle;


  return _react2.default.createElement(
    'div',
    { className: '' + themeStyle },
    _react2.default.createElement(
      _reactFacebook2.default,
      { appId: process.env.GATSBY_FACEBOOK_APPID },
      _react2.default.createElement(_reactFacebook.Comments, {
        href: '' + siteUrl + slug,
        width: '100%',
        colorScheme: 'light'
      })
    )
  );
};

Comments.propTypes = {
  slug: _propTypes2.default.string.isRequired,
  siteUrl: _propTypes2.default.string.isRequired,
  themeStyle: _propTypes2.default.string
};

exports.default = Comments;