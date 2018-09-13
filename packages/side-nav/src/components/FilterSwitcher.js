import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/filterSwitcher';

const FilterSwitcher = props => {
  const {
    filterName,
    themeStyle = style,
    activeFilterGroup,
    customStyle = '',
    onClick,
    icons: { group: GroupIcon, close: CloseIcon },
  } = props;

  return (
    <button
      data-filter-name={filterName}
      className={cx(themeStyle, customStyle)}
      onClick={onClick}
      style={{
        background: `${
          activeFilterGroup === filterName ? `var(--${filterName}Color)` : ''
        }`,
      }}
    >
      {activeFilterGroup === filterName ? <CloseIcon /> : <GroupIcon />}
    </button>
  );
};

// activeFilterGroup === filterName ? `var(--${filterName}Color)` : '',

FilterSwitcher.propTypes = {
  filterName: PropTypes.string.isRequired,
  appliedFilters: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  icons: PropTypes.object.isRequired,
  activeFilterGroup: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default FilterSwitcher;
