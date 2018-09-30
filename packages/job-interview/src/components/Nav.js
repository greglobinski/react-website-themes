import PropTypes from 'prop-types';
import React from 'react';
import { Link } from 'gatsby';
import { cx } from 'emotion';

import style from '../styles/nav';

const Nav = props => {
  const {
    numberOfScreens,
    activeScreen,
    themeStyle = style,
    customStyle = '',
    icons: { next: NextIcon, prev: PrevIcon },
  } = props;
  const items = Array(numberOfScreens)
    .fill(0)
    .map((item, idx) => idx + 1);

  return (
    <nav className={cx(themeStyle, customStyle)}>
      <button
        className="prev"
        onClick={props.prevScreen}
        disabled={activeScreen === 1 ? true : false}
      >
        <PrevIcon />
      </button>
      <div className="indicator">
        {items.map(item => (
          <span
            className={`${item === activeScreen ? 'active' : ''}`}
            key={item}
          />
        ))}
      </div>
      <button
        className="next"
        onClick={props.nextScreen}
        disabled={activeScreen === numberOfScreens ? true : false}
      >
        <NextIcon />
      </button>
    </nav>
  );
};

Nav.propTypes = {
  numberOfScreens: PropTypes.number.isRequired,
  activeScreen: PropTypes.number.isRequired,
  nextScreen: PropTypes.func.isRequired,
  prevScreen: PropTypes.func.isRequired,
  themeStyle: PropTypes.string,
  customStyle: PropTypes.string,
  icons: PropTypes.object.isRequired,
};

export default Nav;
