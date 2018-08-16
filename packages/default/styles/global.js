"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    box-sizing: border-box;\n    font-family: \"Open Sans\", sans-serif;\n    font-size: 16px;\n    color: #666;\n  }\n\n  *,\n  *:after,\n  *:before {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n  }\n\n  p {\n    color: #444;\n  }\n\n  h1 {\n    font-size: 2.4em;\n  }\n\n  h2 {\n    font-size: 1.8em;\n  }\n\n  ul {\n    list-style-position: inside;\n  }\n\n  a {\n    color: #666;\n    transition: .3s;\n  }\n\n  @media (hover: hover)  {\n    a:hover {\n      color: #900;\n    }\n  }\n\n  :not(pre) > code[class*='language-'] {\n    background: #eee;\n    color: #666;\n    text-shadow: none;\n    padding: 1px 5px;\n    border-radius: 2px;\n  }\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var globalStyle = (0, _emotion.injectGlobal)(_templateObject());
var _default = globalStyle;
exports.default = _default;