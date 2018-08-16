"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  & h3 {\n    font-size: 0.7em;\n    letter-spacing: 0.2em;\n    padding: 10px 0 0;\n    text-transform: uppercase;\n    font-weight: 300;\n    color: var(--lightTextColor);\n    display: flex;\n    align-items: center;\n\n    & svg {\n      width: 15px;\n      margin: 0 5px 0 -5px;\n      stroke: var(--superLightGray);\n    }\n  }\n\n  ul {\n    margin: 0 0 1.5em;\n    list-style: none;\n  }\n\n  li {\n    margin: 0.8em 0;\n    line-height: 1.4;\n    padding: 0 5px 0 20px;\n    position: relative;\n\n    &:before {\n      content: '';\n      width: 4px;\n      height: 4px;\n      background: var(--firstActiveColor);\n      position: absolute;\n      top: 0.45em;\n      left: 1px;\n    }\n  }\n\n  & a {\n    text-decoration: none;\n    color: #666;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var list = (0, _emotion.css)(_templateObject());
var _default = list;
exports.default = _default;