"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

var _facepaint = _interopRequireDefault(require("facepaint"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: fixed;\n  left: 0;\n  top: 0;\n  height: 100vh;\n  background: white;\n  border-right: 1px dotted #ddd;\n  overflow: auto;\n  transition: 0.3s;\n  padding-bottom: 20px;\n\n  ", ";\n\n  & h2 {\n    font-size: 0.8em;\n    letter-spacing: 0.2em;\n    color: var(--superLightTextColor);\n    padding: 25px 30px;\n    border-bottom: 1px dotted #ddd;\n    margin-bottom: 15px;\n  }\n\n  & h3 {\n    font-size: 0.7em;\n    letter-spacing: 0.2em;\n    padding: 10px 30px 0;\n    text-transform: uppercase;\n    font-weight: 300;\n    color: var(--lightTextColor);\n    display: flex;\n    align-items: center;\n\n    & svg {\n      width: 15px;\n      margin: 0 5px 0 -5px;\n      stroke: var(--superLightGray);\n    }\n  }\n\n  & a {\n    text-decoration: none;\n  }\n\n  & > ul {\n    font-size: 0.9em;\n    list-style: none;\n    padding: 10px 0 15px;\n\n    & > li {\n      background: white;\n\n      & > a {\n        text-decoration: none;\n        color: #666;\n        padding: 6px 29px;\n        display: block;\n        transition: 0.5s;\n        position: relative;\n        line-height: 1.35;\n\n        &:before {\n          content: '';\n          position: absolute;\n          top: 0;\n          bottom: 0;\n          left: 13px;\n          width: 1px;\n          transform: translateX(-14px);\n          background: var(--secondActiveColor);\n          transition: 0.3s;\n        }\n\n        @media (hover: hover) {\n          &:hover {\n            &:before {\n              transform: translateX(0);\n              width: 5px;\n            }\n          }\n        }\n      }\n\n      & > ul {\n        display: none;\n        list-style: none;\n        margin-left: 17px;\n        font-size: 0.9em;\n\n        & > li {\n          padding: 4px 20px 6px;\n          border-left: 1px dotted var(--firstActiveColor);\n\n          & > a {\n            color: #999;\n          }\n\n          @media (hover: hover) {\n            &:hover {\n              border-left: 1px solid var(--secondActiveColor);\n            }\n          }\n        }\n      }\n\n      &.active {\n        & > a {\n          &:before {\n            background: var(--firstActiveColor);\n            transform: translateX(0);\n            width: 5px;\n          }\n        }\n\n        & > ul {\n          display: block;\n        }\n      }\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var breakpoints = [1024, 1280];
var mq = (0, _facepaint.default)(breakpoints.map(function (bp) {
  return "@media (min-width: ".concat(bp, "px)");
}));
var sidebar = (0, _emotion.css)(_templateObject(), mq({
  transform: ['translate(-280px, 0)', 'translate(0, 0)', 'translate(0, 0)'],
  width: ['280px', '300px', '320px']
}));
var _default = sidebar;
exports.default = _default;