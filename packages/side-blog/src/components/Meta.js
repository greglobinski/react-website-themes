import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { cx } from 'emotion';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

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

  const dateString = prefixToDateTimeString(prefix);
  const date = parse(dateString);

  return (
    <p className={cx(themeStyle, customStyle)}>
      <span>
        {CalendarIcon && <CalendarIcon />} {format(date, 'MMMM D, YYYY')}
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
