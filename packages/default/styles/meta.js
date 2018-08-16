"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin: 0.5em 0 2em;\n  font-size: 0.9em;\n  color: #999;\n  display: flex;\n\n  [class$='-blog'] & {\n    margin-bottom: 1em;\n  }\n\n  & span {\n    display: flex;\n    align-items: center;\n    line-height: 1;\n    padding-right: 10px;\n  }\n\n  & svg {\n    margin: 2px 5px 0 0;\n    width: 16px;\n    height: 16px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var meta = (0, _emotion.css)(_templateObject());
var _default = meta;
exports.default = _default;