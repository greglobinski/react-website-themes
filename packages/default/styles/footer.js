"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-direction: column;\n  font-size: 0.9em;\n  margin: 20px 0;\n\n  .links ul {\n    list-style: none;\n    color: #666;\n    display: flex;\n    justify-content: center;\n    flex-wrap: wrap;\n    line-height: 1.1;\n  }\n\n  .links a {\n    text-decoration: none;\n    color: #777;\n    font-weight: bold;\n  }\n\n  .links li {\n    text-align: center;\n    margin: 2px 10px;\n    position: relative;\n  }\n\n  .copyright {\n    font-size: 0.9em;\n    color: #999;\n    text-align: center;\n    margin: 10px 0 30px;\n  }\n\n  .credits {\n    font-size: 0.8em;\n    color: #aaa;\n    margin: 20px 0 0;\n    text-align: center;\n\n    & a {\n      text-decoration: none;\n      color: #888;\n    }\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var footerStyle = (0, _emotion.css)(_templateObject());
var _default = footerStyle;
exports.default = _default;