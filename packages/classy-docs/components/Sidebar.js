"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gatsby = require("gatsby");

var _githubSlugger = _interopRequireDefault(require("github-slugger"));

var _sidebar = _interopRequireDefault(require("../styles/sidebar"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var slugs = new _githubSlugger.default();

function organizePagesInCategories(pages, categoryList) {
  return pages.reduce(function (categoryContainers, currItem) {
    var currItemCategories = currItem.frontmatter.categories;
    var pairedCategory = currItemCategories.reduce(function (pairedCat, currCat) {
      if (pairedCat === '' && categoryList.find(function (categoryListItem) {
        return categoryListItem.name === currCat;
      })) {
        return currCat;
      } else {
        return pairedCat;
      }
    }, '');

    if (pairedCategory) {
      var categoryContainer = categoryContainers.find(function (categoryContainer) {
        return categoryContainer.name === pairedCategory;
      });
      categoryContainer.pages.push(currItem);
    }

    return categoryContainers;
  }, categoryList.map(function (category) {
    category.pages = [];
    return category;
  }));
}

var Sidebar = function Sidebar(props) {
  var _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _sidebar.default : _props$themeStyle,
      title = props.title,
      pages = props.pages,
      categoryList = props.categoryList,
      pathname = props.pathname;
  var pagesInCategories = organizePagesInCategories(pages, categoryList);
  return _react.default.createElement("aside", {
    className: "".concat(themeStyle)
  }, _react.default.createElement("h2", null, title), pagesInCategories.map(function (category) {
    var label = category.label,
        Icon = category.icon;
    return _react.default.createElement(_react.default.Fragment, {
      key: label
    }, _react.default.createElement("h3", null, _react.default.createElement(Icon, null), label), _react.default.createElement("ul", null, category.pages.map(function (page) {
      var _page$frontmatter = page.frontmatter,
          title = _page$frontmatter.title,
          shortTitle = _page$frontmatter.shortTitle,
          slug = page.fields.slug,
          headings = page.headings;
      return _react.default.createElement("li", {
        key: slug,
        className: pathname === slug ? 'active' : ''
      }, _react.default.createElement(_gatsby.Link, {
        key: slug,
        to: slug
      }, shortTitle ? shortTitle : title), headings.length > 0 && _react.default.createElement("ul", null, headings.map(function (heading) {
        var value = heading.value,
            depth = heading.depth;
        slugs.reset();
        return depth === 2 && _react.default.createElement("li", {
          key: value
        }, _react.default.createElement("a", {
          href: "#".concat(slugs.slug(value))
        }, value));
      })));
    })));
  }));
};

Sidebar.propTypes = {
  pathname: _propTypes.default.string.isRequired,
  title: _propTypes.default.string,
  pages: _propTypes.default.array,
  categoryList: _propTypes.default.array,
  themeStyle: _propTypes.default.string
};
var _default = Sidebar;
exports.default = _default;