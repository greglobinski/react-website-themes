'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactCustomShare = require('react-custom-share');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostShare = function PostShare(props) {
  var themeStyle = props.themeStyle,
      shareBlockProps = props.shareBlockProps;


  return _react2.default.createElement(
    'div',
    { className: '' + themeStyle },
    _react2.default.createElement(_reactCustomShare.ShareBlockStandard, shareBlockProps)
  );
};

PostShare.propTypes = {
  themeStyle: _propTypes2.default.string,
  shareBlockProps: _propTypes2.default.object
};

exports.default = PostShare;