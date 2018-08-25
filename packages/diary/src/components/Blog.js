import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from 'emotion';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import style from '../styles/blog';

dayjs.extend(relativeTime);

const Blog = props => {
  const {
    items,
    themeStyle = style,
    customStyle = '',
    author,
    icons: { post: PostIcon, arrow: ArrowIcon, time: TimeIcon },
  } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <ul>
        {items.map(item => {
          const {
            frontmatter: { title, categories },
            fields: { slug, prefix },
            timeToRead,
            excerpt,
          } = item;

          return (
            <li key={slug}>
              <article>
                <header>
                  <PostIcon />
                  <div className="date">
                    <time dateTime={prefix}>
                      <strong>{dayjs().from(dayjs(prefix), true)} </strong>ago
                    </time>{' '}
                    <small>{prefix}</small>
                  </div>
                  <h3>{title}</h3>
                </header>
                <p>{excerpt}</p>
                <Link to={slug}>
                  <span className="time">
                    <TimeIcon />
                    {timeToRead} min read
                  </span>
                  <span className="arrow">
                    <ArrowIcon />
                  </span>
                </Link>
              </article>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

Blog.propTypes = {
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  icons: PropTypes.object,
};

export default Blog;
