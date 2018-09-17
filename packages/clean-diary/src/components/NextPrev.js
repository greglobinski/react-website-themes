import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';
import dayjs from 'dayjs';

import prefixToDateTimeString from '../utils/prefixToDateTimeString';
import style from '../styles/nextPrev';

const NextPrev = props => {
  const {
    themeStyle = style,
    customStyle = '',
    icons: { next: NextIcon, prev: PrevIcon },
    next: {
      fields: { prefix: nextPrefix, slug: nextSlug } = {},
      frontmatter: { title: nextTitle } = {},
    } = {},
    prev: {
      fields: { prefix: prevPrefix, slug: prevSlug } = {},
      frontmatter: { title: prevTitle } = {},
    } = {},
    timeOffset,
  } = props;

  const prevDateTimeString = prevPrefix
    ? prefixToDateTimeString(prevPrefix)
    : null;
  const nextDateTimeString = nextPrefix
    ? prefixToDateTimeString(nextPrefix)
    : null;

  return (
    <div className={cx(themeStyle, customStyle)}>
      {prevSlug && (
        <Link to={prevSlug} className="prev">
          {PrevIcon && <PrevIcon />}
          <p>
            {prevTitle}{' '}
            <time>
              {dayjs(prevDateTimeString).format('dddd, MMMM D, YYYY')}
            </time>
          </p>
        </Link>
      )}
      {nextSlug && (
        <Link to={nextSlug} className="next">
          {NextIcon && <NextIcon />}
          <p>
            {nextTitle}{' '}
            <time>
              {dayjs(nextDateTimeString).format('dddd, MMMM D, YYYY')}
            </time>
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
  icons: PropTypes.object,
  customStyle: PropTypes.string,
};

export default NextPrev;
