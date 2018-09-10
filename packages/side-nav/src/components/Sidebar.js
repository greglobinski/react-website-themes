import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { Link } from 'gatsby';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

import prefixToDateTimeString from '../utils/prefixToDateTimeString';
import Filters from './Filters';

import style from '../styles/sidebar';

class Sidebar extends React.Component {
  nav = React.createRef();

  state = {
    allPosts: this.props.posts,
    listedPosts: this.props.posts,
    categoryList: this.getListOfFrom('categories', this.props.posts),
    tagList: this.getListOfFrom('tags', this.props.posts),
    monthList: this.getMonthsFrom(this.props.posts),
    activeFilterGroup: null,
    appliedFilters: { category: null, tag: null, month: null },
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
      .map(key => ({
        label: key,
        value: key,
        postsNumber: parameterReduced[key],
      }))
      .sort((a, b) => {
        return ('' + a.name).localeCompare(b.name);
      });

    return parameterValueList;
  }

  getMonthsFrom(posts) {
    const monthsReduced = posts.reduce((acc, post) => {
      const { date } = post;
      const postDate = parse(date);
      const month = format(postDate, 'YYYY-MM');

      if (!acc[month]) {
        acc[month] = 0;
      }
      acc[month] += 1;

      return { ...acc };
    }, {});

    const monthList = Object.keys(monthsReduced)
      .map(key => ({
        value: key,
        postsNumber: monthsReduced[key],
      }))
      .sort((a, b) => {
        return -('' + a.name).localeCompare(b.name);
      })
      .map(item => {
        item.label = format(parse(item.value), `MMMM 'YY`);
        return item;
      });

    return monthList;
  }

  onSwitch = e => {
    const filterName = e.currentTarget.getAttribute('data-filter-name');

    if (this.state.activeFilterGroup != filterName) {
      this.setState(state => {
        return { activeFilterGroup: filterName, offset: '200px' };
      });
    } else {
      this.setState({ activeFilterGroup: null, offset: 0 });
    }

    //e.currentTarget.blur();
  };

  onFilter = e => {
    const group = e.currentTarget.getAttribute('data-group');
    const value = e.currentTarget.getAttribute('data-value');

    this.setState(
      state => ({
        appliedFilters: {
          ...state.appliedFilters,
          [group]: state.appliedFilters[group] !== value ? value : null,
        },
        activeFilterGroup: null,
      }),
      this.filterPosts
    );
  };

  filterPosts = () => {
    const appliedFilters = this.state.appliedFilters;
    const allPosts = this.state.allPosts;

    let appliedFilterCounter = 0;

    const filteredPosts = allPosts.filter(post => {
      const {
        title,
        tags: postTags,
        categories: postCategories,
        date: postDate,
      } = post;

      let filterFits = [];

      if (appliedFilters.category) {
        if (postCategories) {
          const categoryFit = postCategories.some(
            category => category === appliedFilters.category
          );

          filterFits.push(categoryFit);
        } else {
          filterFits.push(false);
        }

        appliedFilterCounter++;
      }

      if (appliedFilters.tag) {
        if (postTags) {
          const tagFit = postTags.some(tag => tag === appliedFilters.tag);
          filterFits.push(tagFit);
        } else {
          filterFits.push(false);
        }

        appliedFilterCounter++;
      }

      if (appliedFilters.month) {
        const monthFit =
          appliedFilters.month === format(parse(postDate), 'YYYY-MM');

        filterFits.push(monthFit);

        appliedFilterCounter++;
      }

      if (appliedFilterCounter === 0) {
        filterFits = [true];
      }

      return filterFits.every(item => item === true);
    });

    this.setState({ listedPosts: filteredPosts }, this.resetScroll);
  };

  resetScroll = () => {
    this.nav.current.scroll({ top: 0, left: 0, behavior: 'smooth' });
  };

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

    const {
      listedPosts: posts,
      activeFilterGroup,
      appliedFilters,
      offset,
    } = this.state;

    return (
      <aside className={cx(themeStyle, customStyle)}>
        <header>
          <Link to="/" className="branding">
            <h3>{title}</h3>
          </Link>
          <div className="switches">
            <button data-filter-name="month" onClick={this.onSwitch}>
              <CalendarIcon />
            </button>
            <button data-filter-name="category" onClick={this.onSwitch}>
              <CategoryIcon />
            </button>
            <button data-filter-name="tag" onClick={this.onSwitch}>
              <TagIcon />
            </button>
          </div>
        </header>

        <Filters
          items={this.state[`${activeFilterGroup}List`]}
          group={this.state.activeFilterGroup}
          onFilter={this.onFilter}
          applied={appliedFilters}
          offset={this.state.offset}
        />

        <nav ref={this.nav}>
          <div className="appliedFilters">{JSON.stringify(appliedFilters)}</div>
          <ul>
            {posts.map(item => {
              const { title, slug, date } = item;
              const itemDate = parse(date);

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
