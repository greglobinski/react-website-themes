'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emotion = require('emotion');

var _facepaint = require('facepaint');

var _facepaint2 = _interopRequireDefault(_facepaint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpoints = [1024];
var mq = (0, _facepaint2.default)(breakpoints.map(function (bp) {
  return '@media (min-width: ' + bp + 'px)';
}));

var blog = /*#__PURE__*/(0, _emotion.css)('ul{list-style:none;}li{padding:0 0 2.5em;}h3{font-size:1.6em;margin-bottom:0.5em;line-height:1.2;letter-spacing:-0.02em;}a{text-decoration:none;}p{line-height:1.4;}label:blog;');

exports.default = blog;