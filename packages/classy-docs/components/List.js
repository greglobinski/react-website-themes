"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gatsby = require("gatsby");

var _list = _interopRequireDefault(require("../styles/list"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

var List = function List(props) {
  var pages = props.pages,
      categoryList = props.categoryList,
      _props$themeStyle = props.themeStyle,
      themeStyle = _props$themeStyle === void 0 ? _list.default : _props$themeStyle;
  var pagesInCategories = organizePagesInCategories(pages, categoryList);
  return _react.default.createElement("div", {
    className: "".concat(themeStyle)
  }, pagesInCategories.map(function (category) {
    var label = category.label,
        Icon = category.icon;
    return _react.default.createElement(_react.default.Fragment, {
      key: label
    }, _react.default.createElement("h3", null, _react.default.createElement(Icon, null), label), _react.default.createElement("ul", null, category.pages.map(function (page) {
      var _page$frontmatter = page.frontmatter,
          title = _page$frontmatter.title,
          shortTitle = _page$frontmatter.shortTitle,
          slug = page.fields.slug;
      return _react.default.createElement("li", {
        key: slug
      }, _react.default.createElement(_gatsby.Link, {
        key: slug,
        to: slug
      }, shortTitle ? shortTitle : title));
    })));
  }));
};

List.propTypes = {
  pages: _propTypes.default.array.isRequired,
  categoryList: _propTypes.default.array,
  themeStyle: _propTypes.default.string
};
var _default = List;
exports.default = _default;