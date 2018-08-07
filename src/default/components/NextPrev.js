import { Link } from 'gatsby';
import FaArrowLeft from 'react-icons/lib/fa/arrow-left';
import FaArrowRight from 'react-icons/lib/fa/arrow-right';
import PropTypes from 'prop-types';
import React from 'react';

const NextPrev = props => {
  const {
    themeStyle,
    next: {
      fields: { prefix: nextPrefix, slug: nextSlug } = {},
      frontmatter: { title: nextTitle } = {},
    } = {},
    prev: {
      fields: { prefix: prevPrefix, slug: prevSlug } = {},
      frontmatter: { title: prevTitle } = {},
    } = {},
  } = props;

  return (
    <div className={`${themeStyle}`}>
      {nextSlug && (
        <Link to={nextSlug} className="next">
          <FaArrowRight />
          <p>
            {nextTitle} <time>{nextPrefix} </time>
          </p>
        </Link>
      )}
      {prevSlug && (
        <Link to={prevSlug} className="prev">
          <FaArrowLeft />
          <p>
            {prevTitle} <time>{prevPrefix}</time>
          </p>
        </Link>
      )}
    </div>
  );
};

NextPrev.propTypes = {
  next: PropTypes.object,
  prev: PropTypes.object,
  themeStyle: PropTypes.string,
};

export default NextPrev;
