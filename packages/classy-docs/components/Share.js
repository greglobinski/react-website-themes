"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCustomShare = require("react-custom-share");

var _share = _interopRequireDefault(require("../styles/share"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PostShare = function PostShare(props) {
  var _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _share.default : _props$themeStyle,
      shareBlockProps = props.shareBlockProps;
  return _react.default.createElement("div", {
    className: "".concat(themeStyle)
  }, _react.default.createElement(_reactCustomShare.ShareBlockStandard, shareBlockProps));
};

PostShare.propTypes = {
  themeStyle: _propTypes.default.string,
  shareBlockProps: _propTypes.default.object
};
var _default = PostShare;
exports.default = _default;