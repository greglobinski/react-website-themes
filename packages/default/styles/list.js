"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ul {\n    list-style: none;\n    font-size: 1.3em;\n  }\n\n  ", ";\n\n  a {\n    text-decoration: none;\n    padding: 0.6em 5px;\n    position: relative;\n    display: block;\n    color: #666;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var li = "\n  li {\n    border-bottom: 1px dotted #ddd;\n\n    &:last-child {\n      border-bottom: none;\n    }\n  }\n";
var listStyle = (0, _emotion.css)(_templateObject(), li);
var _default = listStyle;
exports.default = _default;