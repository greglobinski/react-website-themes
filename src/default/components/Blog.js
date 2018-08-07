import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';

import Meta from './Meta';
import meta from '../styles/meta';

const Blog = props => {
  const { items, themeStyle, author } = props;

  return (
    <nav className={`${themeStyle}`}>
      <ul>
        {items.map(item => {
          const {
            frontmatter: { title, categories },
            fields: { slug, prefix },
            excerpt,
          } = item;

          return (
            <li key={slug}>
              <Link to={slug}>
                <h3>{title}</h3>
                <Meta
                  themeStyle={meta}
                  categories={categories}
                  prefix={prefix}
                  author={author}
                />
                <p>{excerpt}</p>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

Blog.propTypes = {
  items: PropTypes.array.isRequired,
  author: PropTypes.string,
  themeStyle: PropTypes.string,
};

export default Blog;
