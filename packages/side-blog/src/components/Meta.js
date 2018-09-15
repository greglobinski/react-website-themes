import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';
import dayjs from 'dayjs';

import prefixToDateTimeString from '../utils/prefixToDateTimeString';
import style from '../styles/meta';

const Meta = props => {
  const {
    prefix,
    categories,
    tags,
    themeStyle = style,
    customStyle = '',
    icons: { calendar: CalendarIcon, tag: TagIcon, folder: FolderIcon },
  } = props;

  const dateTimeString = prefixToDateTimeString(prefix);

  return (
    <p className={cx(themeStyle, customStyle)}>
      <span>
        {CalendarIcon && <CalendarIcon />}{' '}
        {`${dayjs(dateTimeString).format('dddd')}, ${dayjs(
          dateTimeString
        ).format('MMMM D, YYYY')}`}
      </span>
      {categories && (
        <span>
          {FolderIcon && <FolderIcon />}
          {categories.map((category, idx) => {
            return `${idx ? ', ' : ''}${category}`;
          })}
        </span>
      )}
      {tags && (
        <span>
          {TagIcon && <TagIcon />}
          {tags.map((tag, idx) => {
            return `${idx ? ', ' : ''}${tag}`;
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
  icons: PropTypes.object,
};

export default Meta;
