"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _facepaint = _interopRequireDefault(require("facepaint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  align-items: center;\n  display: flex;\n  z-index: 1;\n  background: #fff;\n  justify-content: center;\n\n  ", ";\n\n  & ul {\n    list-style: none;\n    display: flex;\n    height: 44px;\n    justify-content: center;\n  }\n\n  & li {\n    padding: 0 5px;\n    line-height: 1;\n\n    & a {\n      display: flex;\n      height: 100%;\n      justify-content: center;\n      align-items: center;\n      margin: 0 5px;\n      color: var(--lightTextColor);\n      position: relative;\n\n      &:before {\n        content: '';\n        position: absolute;\n        bottom: 0;\n        left: 0;\n        background: var(--firstActiveColor);\n        width: 20px;\n        height: 0px;\n        transition: 0.3s;\n        transform: translateY(8px);\n      }\n\n      &.active:before {\n        height: 5px;\n        transform: translateY(0);\n      }\n\n      &:not(.active) {\n        @media (hover: hover) {\n          &:hover:before {\n            height: 5px;\n            transform: translateY(0);\n            background: var(--secondActiveColor);\n          }\n        }\n      }\n    }\n\n    & svg {\n      margin: 0 5px 0 0;\n      height: 20px;\n      width: 20px;\n    }\n  }\n"]);

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
var menu = (0, _emotion.css)(_templateObject(), mq({
  justifyContent: ['center', 'flex-end'],
  position: ['fixed', 'relative'],
  bottom: [0, 'auto'],
  width: ['100%', 'auto'],
  left: [0, 'auto'],
  borderTop: ['1px solid #ddd', 'none']
}));
var _default = menu;
exports.default = _default;