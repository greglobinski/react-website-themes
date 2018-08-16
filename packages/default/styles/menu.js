"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _facepaint = _interopRequireDefault(require("facepaint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  display: flex;\n  align-items: center;\n  z-index: 1;\n  background: #fff;\n  justify-content: center;\n\n  ", ";\n\n  ul {\n    list-style: none;\n    display: flex;\n    height: 44px;\n    justify-content: center;\n  }\n\n  li {\n    padding: 0 5px;\n    line-height: 1;\n\n    a {\n      display: flex;\n      height: 100%;\n      justify-content: center;\n      align-items: center;\n      padding: 0 5px;\n    }\n\n    svg {\n      margin: 0 3px 0 0;\n\n      ", ";\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var breakpoints = [768, 1024];
var mq = (0, _facepaint.default)(breakpoints.map(function (bp) {
  return "@media (min-width: ".concat(bp, "px)");
}));
var menu = (0, _emotion.css)(_templateObject(), mq({
  justifyContent: ['center', 'center', 'flex-end']
}), mq({
  height: ['20px', '30px', '40px']
}));
var _default = menu;
exports.default = _default;