import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';
import { Link, navigate } from 'gatsby';
import parse from 'date-fns/parse';
import format from 'date-fns/format';

import FilterWidget from './FilterWidget';
import FilterInfo from './FilterInfo';
import FilterSwitcher from './FilterSwitcher';

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
    toggled: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const prevSideOnMobileExposed = prevProps.sideOnMobileExposed;
    const prevArticleRendered = prevProps.articleRendered;

    /*
      hides the sidebar only if the new content of Article component is ready,
      this prevents from seeing the flash of the previous post's content on mobile
    */
    if (
      prevSideOnMobileExposed === this.props.sideOnMobileExposed &&
      this.props.sideOnMobileExposed === true &&
      prevArticleRendered !== this.props.articleRendered &&
      this.props.articleRendered === true
    ) {
      this.props.updateSideOnMobileExposed(false);
    }
  }

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
        return { activeFilterGroup: filterName };
      });
    } else {
      this.setState({ activeFilterGroup: null });
    }
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

  onToggle = e => {
    this.props.updateSideOnMobileExposed(!this.props.sideOnMobileExposed);
  };

  onLink = e => {
    e.preventDefault();

    this.props.updateArticleRendered(false);

    const to = e.currentTarget.getAttribute('href');
    navigate(to);
  };

  updateArticleRendered = () => {
    this.props.updateArticleRendered(false);
  };

  updateSideOnMobileExposed = () => {
    this.props.updateSideOnMobileExposed(this.state.toggled);
  };

  filterPosts = () => {
    const appliedFilters = this.state.appliedFilters;
    const allPosts = this.state.allPosts;

    let appliedFilterCounter = 0;

    const filteredPosts = allPosts.filter(post => {
      const {
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
      icons: {
        calendar: CalendarIcon,
        category: CategoryIcon,
        list: ListIcon,
        tag: TagIcon,
        home: HomeIcon,
        close: CloseIcon,
        arrow: ArrowIcon,
        check: CheckIcon,
      },
      sideOnMobileExposed,
    } = this.props;

    const {
      listedPosts: posts,
      activeFilterGroup,
      appliedFilters,
    } = this.state;

    return (
      <aside className={cx(themeStyle, customStyle)}>
        <div className={`content ${sideOnMobileExposed ? 'toggled' : ''}`}>
          <div className="filterBar">
            <Link to="/" className="branding" id="nav">
              <h3>{title}</h3>
              <p>{subTitle}</p>
            </Link>
            <div className="tip">
              <h3>Filters »</h3>
            </div>
            <div className="switchers">
              <FilterSwitcher
                onClick={this.onSwitch}
                activeFilterGroup={activeFilterGroup}
                appliedFilters={appliedFilters}
                icons={{ group: CalendarIcon, close: CloseIcon }}
                filterName="month"
              />
              <FilterSwitcher
                onClick={this.onSwitch}
                activeFilterGroup={activeFilterGroup}
                appliedFilters={appliedFilters}
                icons={{ group: CategoryIcon, close: CloseIcon }}
                filterName="category"
              />
              <FilterSwitcher
                onClick={this.onSwitch}
                activeFilterGroup={activeFilterGroup}
                appliedFilters={appliedFilters}
                icons={{ group: TagIcon, close: CloseIcon }}
                filterName="tag"
              />
            </div>
          </div>

          <FilterWidget
            items={this.state[`${activeFilterGroup}List`]}
            group={this.state.activeFilterGroup}
            onClick={this.onFilter}
            appliedFilters={appliedFilters}
            offset={this.state.offset}
            icons={{ check: CheckIcon }}
          />

          <nav className="list" ref={this.nav}>
            <FilterInfo
              appliedFilters={appliedFilters}
              onClick={this.onFilter}
              icons={{
                close: CloseIcon,
                month: CalendarIcon,
                category: CategoryIcon,
                tag: TagIcon,
              }}
            />
            <ul>
              {posts.map(item => {
                const { title, slug, date } = item;
                const itemDate = parse(date);

                return (
                  <li key={slug}>
                    <Link
                      to={slug}
                      onClick={this.onLink}
                      activeClassName="active"
                    >
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
        </div>

        <aside className={`mobileBar ${sideOnMobileExposed ? 'toggled' : ''}`}>
          <button onClick={this.onToggle} className="toggle">
            {sideOnMobileExposed ? <ArrowIcon /> : <ListIcon />}
          </button>
          <Link to="/" className="branding">
            <h3>{title}</h3>
            <p>{subTitle}</p>
          </Link>
        </aside>
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
  sideOnMobileExposed: PropTypes.bool.isRequired,
  updateSideOnMobileExposed: PropTypes.func.isRequired,
  articleRendered: PropTypes.bool.isRequired,
  updateArticleRendered: PropTypes.func.isRequired,
};

export default Sidebar;
