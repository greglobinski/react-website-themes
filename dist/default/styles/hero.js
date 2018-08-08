'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emotion = require('emotion');

var _facepaint = require('facepaint');

var _facepaint2 = _interopRequireDefault(_facepaint);

var _reactEmotion = require('react-emotion');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpoints = [1024];
var mq = (0, _facepaint2.default)(breakpoints.map(function (bp) {
  return '@media (min-width: ' + bp + 'px)';
}));

var breath = /*#__PURE__*/(0, _reactEmotion.keyframes)('from{transform:scale(1);}80%{transform:scale(1.2);}to{transform:scale(1);}label:breath;');

var heroStyle = /*#__PURE__*/(0, _emotion.css)('align-items:center;display:flex;flex-direction:column;justify-content:center;padding:0 10%;text-align:center;', mq({
  minHeight: ['calc(100vh - 300px)', 'calc(100vh - 220px)']
}), ';h1{line-height:1;text-align:center;font-size:2.2em;margin-bottom:0.5em;letter-spacing:-0.03em;}img{max-width:100%;margin:20px 0;}a{align-items:center;background:#999;border-radius:3px;color:#fff;display:flex;font-size:1em;height:2.4em;line-height:1;text-decoration:none;text-transform:uppercase;padding:0 2em;margin:30px 0;animation:', breath, ' 6s ease infinite;}label:heroStyle;');

exports.default = heroStyle;