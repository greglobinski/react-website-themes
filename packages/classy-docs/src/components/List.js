import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { cx } from 'emotion';

import style from '../styles/list';

function organizePagesInCategories(pages, categoryList) {
  return pages.reduce(
    (categoryContainers, currItem) => {
      const {
        frontmatter: { categories: currItemCategories },
      } = currItem;

      let pairedCategory = currItemCategories.reduce((pairedCat, currCat) => {
        if (
          pairedCat === '' &&
          categoryList.find(
            categoryListItem => categoryListItem.name === currCat
          )
        ) {
          return currCat;
        } else {
          return pairedCat;
        }
      }, '');

      if (pairedCategory) {
        const categoryContainer = categoryContainers.find(
          categoryContainer => categoryContainer.name === pairedCategory
        );

        categoryContainer.pages.push(currItem);
      }
      return categoryContainers;
    },
    categoryList.map(category => {
      category.pages = [];
      return category;
    })
  );
}

const List = props => {
  const { pages, categoryList, themeStyle = style, customStyle = '' } = props;

  const pagesInCategories = organizePagesInCategories(pages, categoryList);

  return (
    <div className={cx(themeStyle, customStyle)}>
      {pagesInCategories.map(category => {
        const { label, icon: Icon } = category;

        return (
          <React.Fragment key={label}>
            <h3>
              <Icon />
              {label}
            </h3>
            <ul>
              {category.pages.map(page => {
                const {
                  frontmatter: { title, shortTitle },
                  fields: { slug },
                } = page;
                return (
                  <li key={slug}>
                    <Link key={slug} to={slug}>
                      {shortTitle ? shortTitle : title}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </div>
  );
};

List.propTypes = {
  pages: PropTypes.array.isRequired,
  categoryList: PropTypes.array,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default List;
