import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { cx } from 'emotion';
import dayjs from 'dayjs';

import prefixToDateTimeString from '../utils/prefixToDateTimeString';
import style from '../styles/list';

const List = props => {
  const { items, themeStyle = style, customStyle = '', icon: Icon } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <ul>
        {items.map(item => {
          const {
            frontmatter: { title },
            fields: { slug, prefix },
          } = item;

          const dateTimeString = prefixToDateTimeString(prefix);

          return (
            <li key={slug}>
              <Link to={slug} activeClassName="active">
                <time>
                  <Icon />
                  {`${dayjs(dateTimeString).format('dddd')} at ${dayjs(
                    dateTimeString
                  ).format('h:mm a')}, ${dayjs(dateTimeString).format(
                    'MMMM D, YYYY'
                  )}`}
                </time>
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
  icon: PropTypes.func,
};

export default List;
