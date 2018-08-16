"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactFacebook = _interopRequireWildcard(require("react-facebook"));

var _comments = _interopRequireDefault(require("../styles/comments"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Comments = function Comments(props) {
  var slug = props.slug,
      siteUrl = props.siteUrl,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _comments.default : _props$themeStyle;
  return _react.default.createElement("div", {
    className: "".concat(themeStyle)
  }, _react.default.createElement(_reactFacebook.default, {
    appId: process.env.GATSBY_FACEBOOK_APPID
  }, _react.default.createElement(_reactFacebook.Comments, {
    href: "".concat(siteUrl).concat(slug),
    width: "100%",
    colorScheme: "light"
  })));
};

Comments.propTypes = {
  slug: _propTypes.default.string.isRequired,
  siteUrl: _propTypes.default.string.isRequired,
  themeStyle: _propTypes.default.string
};
var _default = Comments;
exports.default = _default;