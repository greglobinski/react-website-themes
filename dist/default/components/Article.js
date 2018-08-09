'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _article = require('../styles/article');

var _article2 = _interopRequireDefault(_article);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function Article(props) {
  var children = props.children,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _article2.default : _props$themeStyle;


  return _react2.default.createElement(
    'article',
    { className: '' + themeStyle },
    children
  );
};

Article.propTypes = {
  children: _propTypes2.default.node.isRequired,
  themeStyle: _propTypes2.default.string
};

exports.default = Article;