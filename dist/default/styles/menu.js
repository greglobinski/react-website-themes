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

var menu = /*#__PURE__*/(0, _emotion.css)('flex-grow:1;display:flex;align-items:center;z-index:1;background:#fff;justify-content:center;', mq({
  justifyContent: ['center', 'center', 'flex-end']
}), ';ul{list-style:none;display:flex;height:44px;justify-content:center;}li{padding:0 5px;line-height:1;a{display:flex;height:100%;justify-content:center;align-items:center;padding:0 5px;}svg{margin:0 3px 0 0;', mq({
  height: ['20px', '30px', '40px']
}), ';}}label:menu;');

exports.default = menu;