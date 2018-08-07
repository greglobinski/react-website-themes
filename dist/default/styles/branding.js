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

var branding = /*#__PURE__*/(0, _emotion.css)('align-items:center;display:flex;flex-direction:column;text-align:center;flex-grow:0;', mq({
  alignItems: ['center', 'flex-start'],
  margin: ['10px 0 20px', '0']
}), ';h1{font-size:1em;margin-bottom:5px;', mq({
  marginBottom: ['2px', '0']
}), ';}p{font-size:0.8em;}label:branding;');

exports.default = branding;