import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';

import style from '../styles/meta';

const Meta = props => {
  const {
    prefix,
    categories,
    themeStyle = style,
    customStyle = '',
    author,
    categoryLink = true,
    icons: { calendar: CalendarIcon, user: UserIcon, tag: TagIcon },
  } = props;

  return (
    <p className={cx(themeStyle, customStyle)}>
      <span>
        {CalendarIcon && <CalendarIcon />} {prefix}
      </span>
      <span>
        {UserIcon && <UserIcon />} {author}
      </span>
      {categories && (
        <span>
          {TagIcon && <TagIcon />}
          {categories.map(category => {
            const link = (
              <Link key={category} to={`/categories/${category}`}>
                {category}
              </Link>
            );
            const txt = <span key={category}>{category}</span>;

            return categoryLink ? link : txt;
          })}
        </span>
      )}
    </p>
  );
};

Meta.propTypes = {
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  prefix: PropTypes.string,
  categories: PropTypes.array,
  author: PropTypes.string,
  categoryLink: PropTypes.bool,
  icons: PropTypes.object,
};

export default Meta;
