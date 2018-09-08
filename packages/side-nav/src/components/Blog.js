import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from 'emotion';
import parse from 'date-fns/parse';
import format from 'date-fns/format';
import isAfter from 'date-fns/is_after';
import startOfToday from 'date-fns/start_of_today';

import prefixToDateTimeString from '../utils/prefixToDateTimeString';
import style from '../styles/blog';

const Blog = props => {
  const {
    items,
    themeStyle = style,
    customStyle = '',
    icons: { post: PostIcon, arrow: ArrowIcon, time: TimeIcon },
    prevVisit,
    location: defaultLocation,
  } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <ul>
        {items.map(item => {
          const {
            frontmatter: { title, author, cite, location },
            fields: { slug, prefix, source },
            timeToRead,
            html,
            excerpt,
          } = item;

          const dateTimeString = prefixToDateTimeString(prefix);
          const itemDate = parse(dateTimeString);
          const prevVisitDate = parse(prevVisit);
          const newPost = isAfter(itemDate, prevVisitDate);

          return (
            <li key={prefix}>
              {source === 'posts' && (
                <article className={`post ${newPost ? 'new' : ''}`}>
                  <header>
                    <PostIcon />

                    <div className="date">
                      <time dateTime={dateTimeString}>
                        <strong>{format(itemDate, 'MMMM D, YYYY')}</strong>
                      </time>
                      <small>
                        {format(itemDate, 'dddd [at] h:mm a')},{' '}
                        {location ? location : defaultLocation}
                      </small>
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
              )}

              {source === 'quotes' && (
                <blockquote
                  cite={cite}
                  dangerouslySetInnerHTML={{
                    __html: `${html} <small>${author}</small>`,
                  }}
                />
              )}
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
  prevVisit: PropTypes.string,
  location: PropTypes.string,
};

export default Blog;
