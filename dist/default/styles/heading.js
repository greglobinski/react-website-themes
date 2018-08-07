'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _emotion = require('emotion');

var _facepaint = require('facepaint');

var _facepaint2 = _interopRequireDefault(_facepaint);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var breakpoints = [768, 1024];
var mq = (0, _facepaint2.default)(breakpoints.map(function (bp) {
  return '@media (min-width: ' + bp + 'px)';
}));

var headingStyle = /*#__PURE__*/(0, _emotion.css)('h1{letter-spacing:-0.03em;margin-bottom:1em;line-height:1.1;', mq({
  fontSize: ['2em', '2.4em', '2.8em']
}), ';}label:headingStyle;');

exports.default = headingStyle;