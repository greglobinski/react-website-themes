import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from 'emotion';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import getDateTimeString from '../utils/getDateTimeString';
import style from '../styles/blog';

dayjs.extend(relativeTime);

const Blog = props => {
  const {
    items,
    themeStyle = style,
    customStyle = '',
    icons: { post: PostIcon, arrow: ArrowIcon, time: TimeIcon },
    prevVisit,
    timeOffset,
  } = props;

  return (
    <div className={cx(themeStyle, customStyle)}>
      <ul>
        {items.map(item => {
          const {
            frontmatter: { title, author, cite },
            fields: { slug, prefix, source },
            timeToRead,
            html,
            excerpt,
          } = item;

          const dateTimeString = getDateTimeString(prefix, timeOffset);

          const newPost = dayjs(dateTimeString).isAfter(dayjs(prevVisit));

          return (
            <li key={prefix}>
              {source === 'posts' && (
                <article className={`post ${newPost ? 'new' : ''}`}>
                  <header>
                    <PostIcon />
                    {dayjs().diff(dayjs(dateTimeString), 'days') < 30 ? (
                      <div className="date">
                        <time dateTime={dateTimeString}>
                          <strong>
                            {dayjs(dateTimeString).toNow(dayjs())}
                          </strong>{' '}
                          ago
                        </time>{' '}
                        <small>
                          {`${dayjs(dateTimeString).format('dddd')} at ${dayjs(
                            dateTimeString
                          ).format('h:mm a')}, ${dayjs(dateTimeString).format(
                            'MMMM D, YYYY Z'
                          )}`}
                        </small>
                      </div>
                    ) : (
                      <div className="date">
                        <time dateTime={dateTimeString}>
                          <strong>
                            {dayjs(dateTimeString).format('MMMM D, YYYY')}
                          </strong>
                        </time>
                        <small>
                          {`${dayjs(dateTimeString).format('dddd')} at ${dayjs(
                            dateTimeString
                          ).format('h:mm a')}`}
                        </small>
                      </div>
                    )}
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
  timeOffset: PropTypes.string,
};

export default Blog;
