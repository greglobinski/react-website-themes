import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/filterWidget';

const FilterWidget = props => {
  const {
    onClick,
    items = [],
    appliedFilters,
    group = '',
    themeStyle = style,
    customStyle = '',
    icons: { check: CheckIcon },
  } = props;

  return (
    <div
      className={`${cx(themeStyle, customStyle)} ${items.length ? 'open' : ''}`}
      style={{
        background: `${group ? `var(--${group}Color)` : ''}`,
      }}
    >
      {group && (
        <h3 className="title">
          Filter posts by » <strong>{group}</strong>
        </h3>
      )}
      {items.length > 0 && (
        <div className="items">
          {items.map(item => {
            const { value, label, postsNumber } = item;
            const isApplied = appliedFilters[group] === value;
            return (
              <button
                key={value}
                onClick={onClick}
                data-group={group}
                data-value={value}
                className={`item ${isApplied ? 'applied' : ''}`}
              >
                <span className="wrapper">
                  <span className="label">{label}</span>
                  <span className="posts">
                    {isApplied ? <CheckIcon /> : postsNumber}
                  </span>
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

FilterWidget.propTypes = {
  onClick: PropTypes.func.isRequired,
  appliedFilters: PropTypes.object.isRequired,
  icons: PropTypes.object.isRequired,
  items: PropTypes.array,
  group: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default FilterWidget;

/* <span className="posts">{isApplied ? <CheckIcon /> : postsNumber}</span> */
