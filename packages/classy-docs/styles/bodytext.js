"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 50px;\n  min-height: 40vh;\n\n  & .gatsby-resp-image-wrapper {\n    margin: 2em 0;\n  }\n\n  p {\n    line-height: 1.6;\n    margin: 0 0 1.5em;\n    font-size: 1em;\n  }\n\n  strong {\n    letter-spacing: -0.02em;\n  }\n\n  ul {\n    margin: 0 0 1.5em;\n    list-style: none;\n  }\n\n  li {\n    margin: 0.8em 0;\n    line-height: 1.5;\n    padding: 0 5px 0 20px;\n    position: relative;\n\n    &:before {\n      content: '';\n      width: 4px;\n      height: 4px;\n      background: var(--firstActiveColor);\n      position: absolute;\n      top: 0.45em;\n      left: 1px;\n    }\n  }\n\n  h2,\n  h3 {\n    line-height: 1.2;\n    margin: 1.8em 0 1em;\n    letter-spacing: -0.03em;\n    display: flex;\n  }\n\n  h2 {\n    font-size: 1.6em;\n  }\n\n  h3 {\n    font-size: 1.3em;\n  }\n\n  .anchor {\n    margin-left: -20px;\n    float: none;\n    width: 20px;\n    display: flex;\n    align-items: center;\n  }\n\n  pre {\n    margin: 0 0 1.5em;\n  }\n\n  & *:not(pre) > code[class*='language-'] {\n    background: #eee;\n    color: #333;\n    text-shadow: none;\n    padding: 1px 5px 2px;\n    border-radius: 2px;\n  }\n\n  & pre[class*='language-'] {\n    background: #444;\n  }\n\n  blockquote {\n    background: #f9f9f9;\n    padding: 20px 20px 20px 30px;\n    border-left: 5px solid #ddd;\n    font-style: italic;\n\n    & p:last-child {\n      margin-bottom: 0;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var bodytext = (0, _emotion.css)(_templateObject());
var _default = bodytext;
exports.default = _default;