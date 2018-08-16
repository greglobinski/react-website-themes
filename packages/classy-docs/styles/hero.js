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
  var data = _taggedTemplateLiteral(["\n  flex-direction: column;\n  display: flex;\n  justify-content: center;\n  align-items: strech;\n  padding: 0 10%;\n  text-align: center;\n\n  ", ";\n\n  & .image {\n    max-width: 500px;\n    margin: 0 auto 20px;\n  }\n\n  h1 {\n    line-height: 1;\n    text-align: center;\n    font-size: 2.2em;\n    margin-bottom: 0.5em;\n    letter-spacing: -0.03em;\n    border-radius: 5px;\n\n    ", ";\n  }\n\n  a {\n    align-items: center;\n    border-radius: 3px;\n    color: var(--firstActiveColor);\n    font-size: 1em;\n    display: inline-block;\n    text-decoration: none;\n    text-transform: uppercase;\n    padding: 1em 2em;\n    background: #f9f9f9;\n    margin: 40px 0 0;\n    animation: ", " 2s ease infinite;\n  }\n\n  @media (hover: hover) {\n    a:hover {\n      animation: none;\n      background: var(--firstActiveColor);\n      color: #fff;\n    }\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  from {\n    box-shadow: 0 0 0 2px white, 0 0 0 3px rgba(221,0,0, .5);\n  }\n  70% {\n    box-shadow: 0 0 0 6px white, 0 0 0 8px rgba(221, 0, 0, 0);\n  }\n  to {\n    box-shadow: none;\n  }\n"]);

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
var pulse = (0, _reactEmotion.keyframes)(_templateObject());
var hero = (0, _emotion.css)(_templateObject2(), mq({
  minHeight: ['calc(100vh - 300px)', 'calc(100vh - 280px)', 'calc(100vh - 260px)']
}), mq({
  fontSize: ['2.2em', '2.6em', '3em']
}), pulse);
var _default = hero;
exports.default = _default;