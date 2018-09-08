import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { Link } from 'gatsby';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

import prefixToDateTimeString from '../utils/prefixToDateTimeString';

import style from '../styles/sidebar';

class Sidebar extends React.Component {
  state = {
    allPosts: this.props.posts,
    listedPosts: this.props.posts,
    categoryList: this.getListOfFrom('categories', this.props.posts),
    tagList: this.getListOfFrom('tags', this.props.posts),
    monthList: this.getMonthsFrom(this.props.posts),
    searchPhrase: '',
  };

  getListOfFrom(parameter, posts) {
    const parameterReduced = posts.reduce((acc, post) => {
      const { [parameter]: postParameter } = post;

      if (postParameter && postParameter.length) {
        postParameter.forEach(postParameterItem => {
          if (!acc[postParameterItem]) {
            acc[postParameterItem] = 0;
          }

          acc[postParameterItem] += 1;
        });
      }

      return { ...acc };
    }, {});

    const parameterValueList = Object.keys(parameterReduced)
      .map(key => ({ name: key, postsNumber: parameterReduced[key] }))
      .sort((a, b) => {
        return ('' + a.name).localeCompare(b.name);
      });

    return parameterValueList;
  }

  getMonthsFrom(posts) {
    return [];
  }

  render() {
    const {
      themeStyle = style,
      customStyle = '',
      title,
      subTitle = '',
      siteUrl,
      icons: {
        calendar: CalendarIcon,
        category: CategoryIcon,
        list: ListIcon,
        search: SearchIcon,
        tag: TagIcon,
      },
    } = this.props;

    const { listedPosts: posts } = this.state;

    return (
      <aside className={cx(themeStyle, customStyle)}>
        <header>
          <Link to="/" className="branding">
            <h3>{title}</h3>
          </Link>
          <div className="actions">
            <button>
              <CalendarIcon />
            </button>
            <button>
              <CategoryIcon />
            </button>
            <button>
              <TagIcon />
            </button>
          </div>
        </header>
        <nav>
          <ul>
            {posts.map(item => {
              const { title, slug, date } = item;

              const dateTimeString = prefixToDateTimeString(date);
              const itemDate = parse(dateTimeString);

              return (
                <li key={slug}>
                  <Link to={slug}>
                    {title}
                    <small>
                      <CalendarIcon />
                      {format(itemDate, 'MMMM D, YYYY')}
                    </small>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </aside>
    );
  }
}

Sidebar.propTypes = {
  posts: PropTypes.array.isRequired,
  title: PropTypes.string.isRequired,
  subTitle: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  icons: PropTypes.object,
};

export default Sidebar;
