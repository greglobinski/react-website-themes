"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

var _footer = _interopRequireDefault(require("../styles/footer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer(props) {
  var links = props.links,
      copyright = props.copyright,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _footer.default : _props$themeStyle;
  return _react.default.createElement("footer", {
    className: "".concat(themeStyle)
  }, _react.default.createElement("div", {
    className: "links",
    dangerouslySetInnerHTML: {
      __html: links
    }
  }), _react.default.createElement("div", {
    className: "copyright",
    dangerouslySetInnerHTML: {
      __html: copyright
    }
  }), _react.default.createElement("div", {
    className: "credits"
  }, "Built with", ' ', _react.default.createElement("a", {
    href: "https://github.com/greglobinski/gatsby-starter-kit"
  }, "GatsbyJS Starter Kit"), ". Design by", ' ', _react.default.createElement("a", {
    href: "https://github.com/greglobinski/react-website-themes"
  }, "React Website Themes"), "."));
};

Footer.propTypes = {
  links: _propTypes.default.string,
  copyright: _propTypes.default.string,
  themeStyle: _propTypes.default.string
};
var _default = Footer;
exports.default = _default;