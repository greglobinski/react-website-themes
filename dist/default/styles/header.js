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

var header = /*#__PURE__*/(0, _emotion.css)('display:flex;margin-bottom:50px;padding:5px 5px 0;', mq({
  flexDirection: ['column', 'row'],
  marginBottom: ['35px', '50px']
}), ';a{text-decoration:none;}label:header;');

exports.default = header;