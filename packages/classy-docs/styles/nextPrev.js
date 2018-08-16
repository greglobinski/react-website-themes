"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  justify-content: space-between;\n\n  & svg {\n    width: 30px;\n    height: 30px;\n    margin: 0 10px;\n    flex-shrink: 0;\n  }\n\n  & a {\n    text-decoration: none;\n  }\n\n  & .next,\n  & .prev {\n    display: flex;\n    flex-basis: 46%;\n  }\n\n  & .next {\n    flex-direction: row-reverse;\n    text-align: right;\n  }\n\n  & time {\n    display: block;\n    font-size: 0.9em;\n    color: #999;\n    margin-top: 5px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var nextPrev = (0, _emotion.css)(_templateObject());
var _default = nextPrev;
exports.default = _default;