import React from 'react';
import PropTypes from 'prop-types';
import { cx } from 'emotion';

import style from '../styles/filterWidget';

const FilterWidget = props => {
  const {
    onClick,
    items = [],
    group = '',
    themeStyle = style,
    customStyle = '',
  } = props;

  return (
    <div
      className={`${cx(themeStyle, customStyle)} ${items.length ? 'open' : ''}`}
      style={{
        //transform: `translateY(${items.length ? '100%' : 0})`,
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

            return (
              <button
                key={value}
                onClick={onClick}
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

FilterWidget.propTypes = {
  onClick: PropTypes.func.isRequired,
  applied: PropTypes.object.isRequired,
  items: PropTypes.array,
  group: PropTypes.string,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
};

export default FilterWidget;
