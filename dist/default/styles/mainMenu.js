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

var mainMenuStyle = /*#__PURE__*/(0, _emotion.css)('flex-grow:1;display:flex;align-items:center;z-index:1;background:#fff;justify-content:center;', mq({
  justifyContent: ['center', 'flex-end']
}), ';ul{list-style:none;display:flex;height:44px;justify-content:center;}li{padding:0 5px;line-height:1;a{display:flex;height:100%;justify-content:center;align-items:center;padding:0 5px;&:hover{}}svg{margin:0 3px 0 0;}}label:mainMenuStyle;');

exports.default = mainMenuStyle;