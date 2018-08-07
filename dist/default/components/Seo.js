'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactHelmet = require('react-helmet');

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

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

  return _react2.default.createElement(
    _reactHelmet2.default,
    {
      htmlAttributes: { lang: language, prefix: 'og: http://ogp.me/ns#' }
    },
    _react2.default.createElement(
      'title',
      null,
      title
    ),
    _react2.default.createElement('meta', { name: 'description', content: description }),
    _react2.default.createElement('meta', { property: 'og:url', content: url }),
    _react2.default.createElement('meta', { property: 'og:title', content: title }),
    _react2.default.createElement('meta', { property: 'og:description', content: description }),
    _react2.default.createElement('meta', { property: 'og:type', content: 'website' }),
    _react2.default.createElement('meta', { name: 'twitter:card', content: 'summary' })
  );

  // const { data, facebook } = props;
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
  language: _propTypes2.default.string,
  title: _propTypes2.default.string,
  description: _propTypes2.default.string,
  path: _propTypes2.default.string,
  config: _propTypes2.default.object
};

exports.default = Seo;