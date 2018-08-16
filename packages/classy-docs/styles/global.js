"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("typeface-merriweather-sans");

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  html {\n    box-sizing: border-box;\n    font-family: \"Merriweather Sans\", sans-serif;\n    font-size: 16px;\n    color: #666;\n  }\n\n  *,\n  *:after,\n  *:before {\n    box-sizing: inherit;\n    margin: 0;\n    padding: 0;\n  }\n\n  p {\n    color: var(--textColor);\n  }\n\n  h1, h2, h3 {\n    color: var(--lightTextColor);\n  }\n\n  h1 {\n    font-size: 2.4em;\n  }\n\n  h2 {\n    font-size: 1.8em;\n  }\n\n  ul {\n    list-style-position: inside;\n  }\n\n  a {\n    color: var(--linkColor);\n    transition: .3s;\n  }\n\n  @media (hover: hover)  {\n    a:hover {\n      color: var(--hoverLinkColor);\n    }\n  }\n\n  *::-webkit-scrollbar {\n    width: var(--scrollBarWidth);\n  }\n  *::-webkit-scrollbar-track {\n    background: var(--scrollBarTrack);\n  }\n  *::-webkit-scrollbar-thumb {\n    background-color: var(--scrollBarThumb);\n  }\n\n\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var global = (0, _emotion.injectGlobal)(_templateObject());
var _default = global;
exports.default = _default;