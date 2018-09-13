import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/filterInfo';

const FilterInfo = props => {
  const {
    appliedFilters,
    onClick,
    themeStyle = style,
    customStyle = '',
  } = props;

  const filters = Object.keys(appliedFilters)
    .map(key => ({ group: key, value: appliedFilters[key] }))
    .filter(item => item.value !== null);

  return filters.length ? (
    <div className={cx(themeStyle, customStyle)}>
      <p>There are filters applied to the list:</p>
      <ul>
        {filters.map(item => (
          <li>
            <div>
              <span>{item.group} » </span>
              <em>{item.value}</em>
            </div>
            <button
              onClick={onClick}
              data-group={item.group}
              data-value={item.value}
            >
              x
            </button>
          </li>
        ))}
      </ul>
    </div>
  ) : null;
};

FilterInfo.propTypes = {
  appliedFilters: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default FilterInfo;
