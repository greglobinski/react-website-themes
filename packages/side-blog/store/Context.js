"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextProviderComponent = exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

var defaultContextValue = {
  data: {
    sideOnMobileExposed: false,
    articleRendered: false
  },
  set: function set() {}
};

var _React$createContext = _react.default.createContext(defaultContextValue),
    Provider = _React$createContext.Provider,
    Consumer = _React$createContext.Consumer;

exports.default = Consumer;

var ContextProviderComponent =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ContextProviderComponent, _React$Component);

  function ContextProviderComponent() {
    var _this;

    _classCallCheck(this, ContextProviderComponent);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(ContextProviderComponent).call(this));
    _this.setData = _this.setData.bind(_assertThisInitialized(_assertThisInitialized(_this)));
    _this.state = _objectSpread({}, defaultContextValue, {
      set: _this.setData
    });
    return _this;
  }

  _createClass(ContextProviderComponent, [{
    key: "setData",
    value: function setData(newData) {
      this.setState(function (state) {
        return {
          data: _objectSpread({}, state.data, newData)
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react.default.createElement(Provider, {
        value: this.state
      }, this.props.children);
    }
  }]);

  return ContextProviderComponent;
}(_react.default.Component);

exports.ContextProviderComponent = ContextProviderComponent;