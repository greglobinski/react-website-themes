"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  ul {\n    list-style: none;\n  }\n\n  li {\n    padding: 0 0 2.5em;\n  }\n\n  h3 {\n    font-size: 1.6em;\n    margin-bottom: 0.5em;\n    line-height: 1.2;\n    letter-spacing: -0.02em;\n  }\n\n  a {\n    text-decoration: none;\n  }\n\n  p {\n    line-height: 1.4;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var blog = (0, _emotion.css)(_templateObject());
var _default = blog;
exports.default = _default;