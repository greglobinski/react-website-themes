"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _gatsby = require("gatsby");

var _menu = _interopRequireDefault(require("../styles/menu"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var Menu = function Menu(props) {
  var items = props.items,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _menu.default : _props$themeStyle;
  return _react.default.createElement("nav", {
    className: "".concat(themeStyle)
  }, _react.default.createElement("ul", null, items.map(function (item) {
    var label = item.label,
        to = item.to,
        Icon = item.icon,
        linkProps = item.linkProps;
    return _react.default.createElement("li", {
      key: label
    }, _react.default.createElement(_gatsby.Link, _extends({
      to: to,
      activeClassName: "active"
    }, linkProps), Icon && _react.default.createElement(Icon, null), _react.default.createElement("span", null, label)));
  })));
};

Menu.propTypes = {
  items: _propTypes.default.array.isRequired,
  themeStyle: _propTypes.default.string
};
var _default = Menu;
exports.default = _default;