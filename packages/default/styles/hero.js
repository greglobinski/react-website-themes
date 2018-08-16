"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _facepaint = _interopRequireDefault(require("facepaint"));

var _reactEmotion = require("react-emotion");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding: 0 10%;\n  text-align: center;\n\n  ", ";\n\n  h1 {\n    line-height: 1;\n    text-align: center;\n    font-size: 2.2em;\n    margin-bottom: 0.5em;\n    letter-spacing: -0.03em;\n\n    ", ";\n  }\n\n  img {\n    max-width: 100%;\n    margin: 20px 0;\n  }\n\n  a {\n    align-items: center;\n    background: #999;\n    border-radius: 3px;\n    color: #fff;\n    display: flex;\n    font-size: 1em;\n    height: 2.4em;\n    line-height: 1;\n    text-decoration: none;\n    text-transform: uppercase;\n    padding: 0 2em;\n    margin: 30px 0;\n    animation: ", " 6s ease infinite;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    transform: scale(1);\n  }\n  80% {\n    transform: scale(1.2);\n  }\n  to {\n    transform: scale(1);\n  }\n"]);

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
var breath = (0, _reactEmotion.keyframes)(_templateObject());
var heroStyle = (0, _emotion.css)(_templateObject2(), mq({
  minHeight: ['calc(100vh - 300px)', 'calc(100vh - 280px)', 'calc(100vh - 220px)']
}), mq({
  fontSize: ['2.2em', '2.6em', '3em']
}), breath);
var _default = heroStyle;
exports.default = _default;