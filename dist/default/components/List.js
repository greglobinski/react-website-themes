'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _gatsby = require('gatsby');

var _list = require('../styles/list');

var _list2 = _interopRequireDefault(_list);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var List = function List(props) {
  var items = props.items,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _list2.default : _props$themeStyle;


  return _react2.default.createElement(
    'div',
    { className: '' + themeStyle },
    _react2.default.createElement(
      'ul',
      null,
      items.map(function (item) {
        var title = item.frontmatter.title,
            slug = item.fields.slug;


        return _react2.default.createElement(
          'li',
          { key: slug },
          _react2.default.createElement(
            _gatsby.Link,
            { to: slug, activeClassName: 'active' },
            title
          )
        );
      })
    )
  );
};

List.propTypes = {
  items: _propTypes2.default.array.isRequired,
  themeStyle: _propTypes2.default.string
};

exports.default = List;