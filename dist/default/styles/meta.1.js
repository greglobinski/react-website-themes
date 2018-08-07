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

var meta = /*#__PURE__*/(0, _emotion.css)('margin:0.5em 0;font-size:0.9em;display:flex;color:#999;display:flex;& span{display:flex;align-items:center;line-height:1;padding-right:10px;}& svg{margin:2px 5px 0 0;}label:meta;');

exports.default = meta;