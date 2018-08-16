"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _facepaint = _interopRequireDefault(require("facepaint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  h1 {\n    letter-spacing: -0.03em;\n    margin-bottom: 1em;\n    line-height: 1.2;\n    border-left: 6px solid var(--firstActiveColor);\n    padding-left: 15px;\n    color: var(--lightTextColor);\n\n    ", ";\n  }\n"]);

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
var headingStyle = (0, _emotion.css)(_templateObject(), mq({
  fontSize: ['1.8em', '2em', '2.2em']
}));
var _default = headingStyle;
exports.default = _default;