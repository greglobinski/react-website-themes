'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emotion = require('emotion');

var li = '\n  li {\n    border-bottom: 1px dotted #ddd;\n\n    &:last-child {\n      border-bottom: none;\n    }\n  }\n';

var listStyle = /*#__PURE__*/(0, _emotion.css)('ul{list-style:none;font-size:1.3em;}', li, ';a{text-decoration:none;padding:0.6em 5px;position:relative;display:block;color:#666;}label:listStyle;');

exports.default = listStyle;