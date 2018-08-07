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

var nextPrev = /*#__PURE__*/(0, _emotion.css)('display:flex;flex-direction:row-reverse;justify-content:space-between;& svg{width:30px;height:30px;margin:0 10px;flex-shrink:0;}& a{text-decoration:none;}& .next,& .prev{display:flex;flex-basis:46%;}& .next{flex-direction:row-reverse;text-align:right;}& time{display:block;font-size:0.9em;color:#999;margin-top:5px;}label:nextPrev;');

exports.default = nextPrev;