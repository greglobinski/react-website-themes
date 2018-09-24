import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from 'emotion';

import style from '../styles/menu';

const Menu = props => {
  const {
    items,
    themeStyle = style,
    customStyle = '',
    actionIcons: {
      calendar: CalendarIcon = null,
      toTop: ToTopIcon = null,
    } = {},
  } = props;

  function scrollTop(e) {
    console.log(e.currentTarget);
    window.scroll({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
    e.currentTarget.blur();
  }

  return (
    <nav className={cx(themeStyle, customStyle)}>
      <ul>
        {items.map(item => {
          const { label, to, icon: Icon, external, linkProps } = item;

          return (
            <li key={label}>
              {external ? (
                <a href={to} target="_blank" {...linkProps}>
                  {Icon && <Icon />}
                  <span>{label}</span>
                </a>
              ) : (
                <Link to={to} activeClassName="active" {...linkProps}>
                  {Icon && <Icon />}
                  <span>{label}</span>
                </Link>
              )}
            </li>
          );
        })}
      </ul>
      {CalendarIcon && (
        <button className="calendar" onClick={scrollTop}>
          <CalendarIcon />
        </button>
      )}
      {ToTopIcon && (
        <button className="toTop" onClick={scrollTop}>
          <ToTopIcon />
        </button>
      )}
    </nav>
  );
};

Menu.propTypes = {
  items: PropTypes.array.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  actionIcons: PropTypes.object,
};

export default Menu;
