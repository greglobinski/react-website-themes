import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import GithubSlugger from 'github-slugger';
import { cx } from 'emotion';

import style from '../styles/sidebar';

var slugs = new GithubSlugger();

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

const Sidebar = props => {
  const {
    themeStyle = style,
    customStyle = '',
    title,
    pages,
    categoryList,
    pathname,
  } = props;

  const pagesInCategories = organizePagesInCategories(pages, categoryList);

  return (
    <aside className={cx(themeStyle, customStyle)}>
      <h2>{title}</h2>
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
                  headings,
                } = page;
                return (
                  <li key={slug} className={pathname === slug ? 'active' : ''}>
                    <Link key={slug} to={slug}>
                      {shortTitle ? shortTitle : title}
                    </Link>
                    {headings.length > 0 && (
                      <ul>
                        {headings.map(heading => {
                          const { value, depth } = heading;
                          slugs.reset();

                          return (
                            depth === 2 && (
                              <li key={value}>
                                <a href={`#${slugs.slug(value)}`}>{value}</a>
                              </li>
                            )
                          );
                        })}
                      </ul>
                    )}
                  </li>
                );
              })}
            </ul>
          </React.Fragment>
        );
      })}
    </aside>
  );
};

Sidebar.propTypes = {
  pathname: PropTypes.string.isRequired,
  title: PropTypes.string,
  pages: PropTypes.array,
  categoryList: PropTypes.array,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default Sidebar;
