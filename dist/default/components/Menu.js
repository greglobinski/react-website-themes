'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

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
            Icon = item.icon,
            linkProps = item.linkProps;


        return _react2.default.createElement(
          'li',
          { key: label },
          _react2.default.createElement(
            _gatsby.Link,
            _extends({ to: to, activeClassName: 'active' }, linkProps),
            Icon && _react2.default.createElement(Icon, null),
            _react2.default.createElement(
              'span',
              null,
              label
            )
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