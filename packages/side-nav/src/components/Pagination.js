import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import { cx } from 'emotion';

import style from '../styles/pagination';

class Pagination extends React.Component {
  constructor(props) {
    super(props);

    this.firstPageLink = React.createRef();
    this.lastPageLink = React.createRef();

    this.state = {
      paginationItems: [],
      firstPageLinkClass: 'first',
      lastPageLinkClass: 'last',
    };
  }

  componentDidMount() {
    this.getPaginationItems();
  }

  componentDidUpdate(prevProps) {
    if (this.props.pageIndex !== prevProps.pageIndex) {
      this.getPaginationItems();
    }
  }

  getPaginationItems() {
    const { pageIndex, numberOfPages } = this.props;

    const pages = Array(numberOfPages)
      .fill('')
      .map((item, idx) => idx);

    const filteredPages = [pageIndex];

    const before = pages.slice(0, pageIndex);
    before.shift();

    const after = pages.slice(pageIndex + 1);
    after.pop();

    let sideAfter = true;

    const limit =
      pageIndex === 0 || pageIndex === pages[pages.length - 1] ? 5 : 4;

    while ((before.length || after.length) && filteredPages.length < limit) {
      if (sideAfter) {
        if (after[0]) {
          filteredPages.push(after[0]);
          after.shift();
        }
      } else {
        if (before[before.length - 1]) {
          filteredPages.unshift(before[before.length - 1]);
          before.pop();
        }
      }

      sideAfter = !sideAfter;
    }

    if (pageIndex !== pages[0]) {
      filteredPages.unshift(pages[0]);
    }
    if (pageIndex !== pages[pages.length - 1]) {
      filteredPages.push(pages[pages.length - 1]);
    }

    const paginationItems = filteredPages.map(item => {
      if (item === 0) {
        return { path: '/', label: '1' };
      } else {
        return { path: `/page-${item + 1}`, label: `${item + 1}` };
      }
    });

    this.setState(
      { paginationItems: paginationItems },
      this.updateStyleOfExtremeItems
    );
  }

  updateStyleOfExtremeItems() {
    const firstPageSiblingIsOneStep = this.itemHasOneStepSibling(
      this.firstPageLink.current
    );
    const lastPageSiblingIsOneStep = this.itemHasOneStepSibling(
      this.lastPageLink.current
    );

    this.setState({
      firstPageLinkClass: firstPageSiblingIsOneStep ? '' : 'no-onestep',
      lastPageLinkClass: lastPageSiblingIsOneStep ? '' : 'no-onestep',
    });
  }

  itemHasOneStepSibling(link) {
    const linkLabel = link.getAttribute('data-pagelink-label');
    let siblingLabel;

    if (+linkLabel === 1) {
      siblingLabel = link.nextSibling.getAttribute('data-pagelink-label');
    } else if (+linkLabel === this.props.numberOfPages) {
      siblingLabel = link.previousSibling.getAttribute('data-pagelink-label');
    }

    return Math.abs(linkLabel - siblingLabel) === 1;
  }

  addRefToExtremeItems(label) {
    if (+label === 1) {
      return this.firstPageLink;
    }
    if (+label === this.props.numberOfPages) {
      return this.lastPageLink;
    }
  }

  changeStyleOfExtremeItems = label => {
    if (+label === 1) {
      return this.state.firstPageLinkClass;
    } else if (+label === this.props.numberOfPages) {
      return this.state.lastPageLinkClass;
    }
  };

  render() {
    const {
      themeStyle = style,
      customStyle = '',
      icons: { home: HomeIcon, last: LastIcon },
    } = this.props;

    const { paginationItems } = this.state;

    return (
      <div className={cx(themeStyle, customStyle)}>
        <ul>
          {paginationItems.map((item, idx) => {
            const Icon = item.icon;

            return (
              <li
                key={item.label}
                ref={this.addRefToExtremeItems(item.label)}
                data-pagelink-label={item.label}
                className={this.changeStyleOfExtremeItems(item.label)}
              >
                <Link to={item.path} key={item.label} activeClassName="active">
                  {Icon ? <Icon /> : item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

Pagination.propTypes = {
  pageIndex: PropTypes.number.isRequired,
  numberOfPages: PropTypes.number.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  icons: PropTypes.object,
};

export default Pagination;
