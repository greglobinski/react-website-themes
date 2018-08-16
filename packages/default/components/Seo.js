"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactHelmet = _interopRequireDefault(require("react-helmet"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Seo = function Seo(props) {
  var config = props.config,
      path = props.path;
  var language = props.language,
      title = props.title,
      description = props.description;
  var siteTitle = config.siteTitle,
      siteTitlePostfix = config.siteTitlePostfix,
      siteDescription = config.siteDescription,
      siteLanguage = config.siteLanguage,
      siteUrl = config.siteUrl;
  var url = path ? siteUrl + path : siteUrl;
  language = language ? language : siteLanguage;
  title = title ? title + siteTitlePostfix : siteTitle;
  description = description ? description : siteDescription;
  return _react.default.createElement(_reactHelmet.default, {
    htmlAttributes: {
      lang: language,
      prefix: 'og: http://ogp.me/ns#'
    }
  }, _react.default.createElement("title", null, title), _react.default.createElement("meta", {
    name: "description",
    content: description
  }), _react.default.createElement("meta", {
    property: "og:url",
    content: url
  }), _react.default.createElement("meta", {
    property: "og:title",
    content: title
  }), _react.default.createElement("meta", {
    property: "og:description",
    content: description
  }), _react.default.createElement("meta", {
    property: "og:type",
    content: "website"
  }), _react.default.createElement("meta", {
    name: "twitter:card",
    content: "summary"
  })); // const { data, facebook } = props;
  // const postTitle = ((data || {}).frontmatter || {}).title;
  // const postDescription = ((data || {}).frontmatter || {}).description;
  // const postCover = ((data || {}).frontmatter || {}).cover;
  // const postSlug = ((data || {}).fields || {}).slug;
  // const title = postTitle
  //   ? `${postTitle} - ${config.shortSiteTitle}`
  //   : config.siteTitle;
  // const description = postDescription
  //   ? postDescription
  //   : config.siteDescription;
  // const image = postCover ? postCover : config.siteImage;
  // const url = config.siteUrl + config.pathPrefix + postSlug;
};

Seo.propTypes = {
  language: _propTypes.default.string,
  title: _propTypes.default.string,
  description: _propTypes.default.string,
  path: _propTypes.default.string,
  config: _propTypes.default.object
};
var _default = Seo;
exports.default = _default;