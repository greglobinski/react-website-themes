import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';
import dayjs from 'dayjs';

import getDateTimeString from '../utils/getDateTimeString';
import style from '../styles/meta';

const Meta = props => {
  const {
    prefix,
    categories,
    themeStyle = style,
    customStyle = '',
    categoryLink = true,
    icons: { calendar: CalendarIcon, tag: TagIcon },
    timeOffset,
  } = props;

  const dateTimeString = getDateTimeString(prefix, timeOffset);

  return (
    <p className={cx(themeStyle, customStyle)}>
      <span>
        {CalendarIcon && <CalendarIcon />}{' '}
        {`${dayjs(dateTimeString).format('dddd')} at ${dayjs(
          dateTimeString
        ).format('h:mm a')}, ${dayjs(dateTimeString).format('MMMM D, YYYY')}`}
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
  timeOffset: PropTypes.string,
};

export default Meta;
