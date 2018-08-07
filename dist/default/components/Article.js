'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Article = function Article(props) {
  var children = props.children,
      themeStyle = props.themeStyle;


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