import { Link } from 'gatsby';
import FaCalendar from 'react-icons/lib/fa/calendar';
import FaTag from 'react-icons/lib/fa/tag';
import FaUser from 'react-icons/lib/fa/user';
import PropTypes from 'prop-types';
import React from 'react';

const Meta = props => {
  const { prefix, categories, themeStyle, author } = props;

  return (
    <p className={`${themeStyle}`}>
      <span>
        <FaCalendar /> {prefix}
      </span>
      <span>
        <FaUser /> {author}
      </span>
      {categories && (
        <span>
          <FaTag />
          {categories.map(category => (
            <Link key={category} to={`/categories/${category}`}>
              {category}
            </Link>
          ))}
        </span>
      )}
    </p>
  );
};

Meta.propTypes = {
  themeStyle: PropTypes.string,
  prefix: PropTypes.string,
  categories: PropTypes.array,
  author: PropTypes.string,
};

export default Meta;
