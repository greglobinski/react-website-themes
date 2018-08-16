"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 50px;\n  min-height: 40vh;\n\n  & .gatsby-resp-image-wrapper {\n    margin: 2em 0;\n  }\n\n  p {\n    line-height: 1.6;\n    margin: 0 0 1.5em;\n    font-size: 1.1em;\n  }\n\n  ul {\n    margin: 0 0 1.5em;\n    list-style-position: inside;\n  }\n\n  li {\n    margin: 0.8em 0;\n    font-size: 1.1em;\n    line-height: 1.3;\n    padding-left: 5px;\n  }\n\n  h2,\n  h3 {\n    line-height: 1.2;\n    margin: 1.5em 0 0.8em;\n    letter-spacing: -0.01em;\n  }\n\n  h2 {\n    font-size: 2em;\n  }\n\n  h3 {\n    font-size: 1.6em;\n  }\n\n  pre {\n    margin: 0 0 1.5em;\n  }\n\n  blockquote {\n    padding-left: 20px;\n    border-left: 5px solid #ddd;\n    font-style: italic;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var bodytextStyle = (0, _emotion.css)(_templateObject());
var _default = bodytextStyle;
exports.default = _default;