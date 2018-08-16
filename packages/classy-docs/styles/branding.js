"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _facepaint = _interopRequireDefault(require("facepaint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  text-align: center;\n  flex-grow: 0;\n  justify-content: center;\n\n  ", ";\n\n  h1 {\n    font-size: 1em;\n    margin-bottom: 3px;\n    font-weight: 400;\n  }\n\n  p {\n    font-size: 0.7em;\n    color: var(--superLightTextColor);\n    letter-spacing: 0.1em;\n    font-weight: 300;\n  }\n"]);

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
}));
var _default = branding;
exports.default = _default;