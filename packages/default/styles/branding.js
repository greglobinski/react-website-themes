"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _facepaint = _interopRequireDefault(require("facepaint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  flex-grow: 0;\n\n  ", ";\n\n  h1 {\n    font-size: 1em;\n    margin-bottom: 5px;\n\n    ", ";\n  }\n\n  p {\n    font-size: 0.8em;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var breakpoints = [1024];
var mq = (0, _facepaint.default)(breakpoints.map(function (bp) {
  return "@media (min-width: ".concat(bp, "px)");
}));
var branding = (0, _emotion.css)(_templateObject(), mq({
  alignItems: ['center', 'flex-start'],
  margin: ['10px 0 20px', '0']
}), mq({
  marginBottom: ['2px', '0']
}));
var _default = branding;
exports.default = _default;