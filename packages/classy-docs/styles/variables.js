"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("typeface-merriweather-sans");

var _emotion = require("emotion");

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  :root {\n    --firstActiveColor: #d00;\n    --secondActiveColor: orange;\n    --superLightGray: #ccc;\n\n    --textColor: #555;\n    --lightTextColor:  #777;\n    --superLightTextColor:  #aaa;\n\n    --linkColor: #a00;\n    --hoverLinkColor: #d00;\n\n    --scrollBarThumb: #eaeaea;\n    --scrollBarTrack: #f9f9f9;\n    --scrollBarWidth: 5px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var variables = (0, _emotion.injectGlobal)(_templateObject());
var _default = variables;
exports.default = _default;