import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { cx } from 'emotion';

import style from '../styles/list';

const List = props => {
  const { items, themeStyle = style, customStyle = '' } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <ul>
        {items.map(item => {
          const {
            frontmatter: { title },
            fields: { slug },
          } = item;

          return (
            <li key={slug}>
              <Link to={slug} activeClassName="active">
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

List.propTypes = {
  items: PropTypes.array.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default List;
