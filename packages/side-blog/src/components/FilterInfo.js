import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/filterInfo';

const FilterInfo = props => {
  function isApplied(item) {}

  const {
    appliedFilters,
    onClick,
    themeStyle = style,
    customStyle = '',
    icons,
    icons: { close: CloseIcon },
  } = props;

  const filters = Object.keys(appliedFilters)
    .map(key => ({ group: key, value: appliedFilters[key] }))
    .filter(item => item.value !== null);

  return filters.length ? (
    <div className={cx(themeStyle, customStyle)}>
      <p className="title">Applied filters:</p>
      <div className="items">
        {filters.map(item => {
          const { group, value } = item;
          const Icon = icons[group];

          return (
            <button
              key={value}
              onClick={onClick}
              data-group={group}
              data-value={value}
              className="item"
            >
              <span
                className="wrapper"
                style={{
                  background: `${group ? `var(--${group}Color)` : ''}`,
                }}
              >
                <span className="value">
                  <Icon /> {value}
                </span>
                <span className="sign">
                  <CloseIcon />
                </span>
              </span>
            </button>
          );
        })}
      </div>
    </div>
  ) : null;
};

FilterInfo.propTypes = {
  appliedFilters: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  icons: PropTypes.object,
};

export default FilterInfo;
