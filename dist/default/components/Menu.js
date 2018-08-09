'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _gatsby = require('gatsby');

var _menu = require('../styles/menu');

var _menu2 = _interopRequireDefault(_menu);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Menu = function Menu(props) {
  var items = props.items,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === undefined ? _menu2.default : _props$themeStyle;


  return _react2.default.createElement(
    'nav',
    { className: '' + themeStyle },
    _react2.default.createElement(
      'ul',
      null,
      items.map(function (item) {
        var label = item.label,
            to = item.to,
            Icon = item.icon;


        return _react2.default.createElement(
          'li',
          { key: label },
          _react2.default.createElement(
            _gatsby.Link,
            { to: to },
            Icon && _react2.default.createElement(Icon, null),
            label
          )
        );
      })
    )
  );
};

Menu.propTypes = {
  items: _propTypes2.default.array.isRequired,
  themeStyle: _propTypes2.default.string
};

exports.default = Menu;