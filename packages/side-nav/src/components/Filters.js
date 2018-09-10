import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/filters';

const Filters = props => {
  const {
    onFilter,
    items = [],
    group = '',
    themeStyle = style,
    customStyle = '',
  } = props;

  return (
    <div
      className={cx(themeStyle, customStyle)}
      style={{
        transform: `translateY(${
          items.length ? 'calc(100vh - var(--sidebarHeight))' : 0
        })`,
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

            return (
              <button
                key={value}
                onClick={onFilter}
                data-group={group}
                data-value={value}
              >
                <span className="label">{label}</span>
                <span className="posts">{postsNumber}</span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

Filters.propTypes = {
  onFilter: PropTypes.func.isRequired,
  applied: PropTypes.object.isRequired,
  items: PropTypes.array,
  group: PropTypes.string,
};

export default Filters;
